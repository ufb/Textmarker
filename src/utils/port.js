import { _MODULE } from './module'

class _PORT extends _MODULE {

  constructor(obj) {
    super(obj)
    browser.runtime.onMessage.addListener(this.proxy(this, this.passMessage));
    this.registerOneOffEvents();
  }
  extend(events) {
    this.registerOneOffEvents(events.ONEOFF);
  }
  registerOneOffEvents(events) {
    events || ( events = this.events.ONEOFF);

    if (events) {
      for (const e of events) {
        this.on(e, this.proxy(this, this.sendMessage, e));
      }
    }
  }
  passMessage(req, sender, sendResponse) {
    req.args = req.args || [];
    let args = [].concat(req.ev, req.args);
    if (!sender || !sender.name) args = args.concat(sender, sendResponse);
    this.emit.apply(this, args);
    if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called
    return false;
  }
  sendMessage(e, ...args) {
    const type = this.type;
    let msg = { ev: e, args: args };
    if (type === 'content') browser.runtime.sendMessage(msg).catch(() => {});
    else if (type === 'background') {
      const lastArg = args[args.length - 1];
      let tab;
      if (lastArg && (tab = lastArg.tab)) {
        if (tab === 'active') {
          browser.tabs.query({ active: true }).then(tabs => {
            for (let tab of tabs)
              browser.tabs.sendMessage(tab.id, msg, { frameId: lastArg.frameId || 0 }).catch(() => {});
          });
        } else {
          browser.tabs.sendMessage(lastArg.tab, msg, { frameId: lastArg.frameId || 0 }).catch(() => {});
        }
      } else {
        browser.tabs.query({/* currentWindow: false, active: false */}).then(tabs => {
          for (let tab of tabs)
            browser.tabs.sendMessage(tab.id, msg).catch(() => {});
        });
      }
    }
  }
}

class _PRIVPORT extends _PORT {
    constructor(obj) {
        super(obj)
        this.port = null;
        this.portListener = null;
        this.connect();
        this.registerConnectionBasedEvents();

        window.addEventListener('pagehide', () => {
          !this.port || this.port.onMessage.removeListener(this.portListener);
        });
    }
    registerConnectionBasedEvents() {
        const events = this.events.CONNECTION;

        if (events) {
            for (const e of events) {
                this.on(e, this.proxy(this, this.postMessage, e));
            }
        }
    }
    postMessage(e, ...args) {
        const msg = { ev: e, args: args };
        if (this.port) this.port.postMessage(msg);
    }
    connect() {
        const port = this.port = this.port || browser.runtime.connect({ name: `${this.name}_${this.id}` });
        const listener = this.portListener = this.proxy(this, this.passMessage);
        port.onMessage.addListener(listener);
    }
}

class _BGPORT extends _PORT {
    constructor(obj) {
        super(obj)
        this.ports = {};
        this.registerOnConnectListener();
        this.registerConnectionBasedEvents();
    }
    registerConnectionBasedEvents() {
        const events = this.events.CONNECTION;

        if (events) {
            for (const e of events) {
                this.on(e, this.proxy(this, this.postMessage, e));
            }
        }
    }
    registerOnConnectListener() {
        browser.runtime.onConnect.addListener(port => {
            const ports = this.ports;
            const listener = this.proxy(this, this.passMessage);
            ports[port.name] = port;
            port.onMessage.addListener(listener);
            port.onDisconnect.addListener(() => {
                port.onMessage.removeListener(listener);
                delete ports[port.name];
            });
        });
    }
    postMessage(e, ...args) {
        const ports = this.ports;
        const msg = { ev: e, args: args };

        for (const p in ports) {
            if (ports.hasOwnProperty(p)) {
              ports[p].postMessage(msg);
            }
        }
    }
}

export { _PORT, _PRIVPORT, _BGPORT }
