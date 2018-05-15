import { _MODULE } from './module'

export class _PORT extends _MODULE {

  constructor(obj) {
    super(obj)

    this.port = null;

    const type = this.type;

    browser.runtime.onMessage.addListener(this.proxy(this, this.passMessage));

    if (type === 'privileged' || type === 'background') this.initPorting();

    let events = this.events,
        oneOffEvents, connectionBasedEvents;

    if (events) {
      oneOffEvents = events.ONEOFF;
      if (oneOffEvents) {
        for (let e of oneOffEvents)
          this.on(e, this.proxy(this, this.sendMessage, e));
      }
      connectionBasedEvents = events.CONNECTION;
      if (connectionBasedEvents) {
        for (let f of connectionBasedEvents)
          this.on(f, this.proxy(this, this.postMessage, f));
      }
    }
  }
  passMessage(req, sender, sendResponse) {
    req.args = req.args || [];
    let args = [].concat(req.ev, req.args, sender, sendResponse);
    this.emit.apply(this, args);
    if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called
    return false;
  }
  sendMessage(e, ...args) {
    const type = this.type;
    const msg = { ev: e, args: args };
    if (type === 'content') browser.runtime.sendMessage(msg).catch(() => {});
    else if (type === 'background') {
      const lastArg = args[args.length - 1];
      if (lastArg !== undefined && lastArg.tab) {
        browser.tabs.sendMessage(lastArg.tab, msg).catch(() => {});
      } else {
        browser.tabs.query({/* currentWindow: false, active: false */}).then(tabs => {
          for (let tab of tabs)
            browser.tabs.sendMessage(tab.id, msg).catch(() => {});
        });
      }
    }
  }
  postMessage(e, ...args) {
    const msg = { ev: e, args: args };
    if (this.port) this.port.postMessage(msg).catch(() => {});
  }
  initPorting() {
    if (!this.postponeConnection) {
      this.connect();
      this.addConnectionListeners();
    } else {
      this.addConnectionListeners(this.proxy(this, this.connect));
    }
  }
  connect() {
    this.port = this.port || browser.runtime.connect({ name: this.name });
  }
  addConnectionListeners(cb) {
    browser.runtime.onConnect.addListener(port => {
      port.onMessage.addListener(this.proxy(this, this.passMessage));
      !cb || cb();
    });
  }
}
