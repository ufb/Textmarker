let topics = {};

export default class {

  on(event, handler) {
    if (!topics[event]) topics[event] = [];

    topics[event].push(handler);
  }
  emit(events, ...args) {
    events = events.split(' ');

    let i = 0, l = events.length, topic;

    for (; i < l; i++) {
      topic = topics[events[i]];

      if (topic)
        topic.forEach(handler => handler.apply(this, args))
    }
  }
  request(event, ...args) {
    if (this.type === 'background') {
      return browser.tabs.sendMessage(args[0].tabId, { ev: event, wait: true }, { frameId: args[0].frameId });
    } else {
      return browser.runtime.sendMessage({ ev: event, args: args, wait: true }).catch(() => {});
    }
  }
  proxy(context, func, ...args1) {
    return function(...args2) {
      return func.apply(context, args1.concat(args2));
    };
  }
}
