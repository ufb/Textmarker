import _MEDIATOR from './mediator'

export class _MODULE extends _MEDIATOR {

  constructor(obj) {
    super()

    for (o in obj) this[o] = obj[o];

    let events = this.events,
        envEvents, o, e, handler;

    if (events && (envEvents = events.ENV)) {
      for (e in envEvents) {
        handler = envEvents[e];
        if (this[handler])
          this.on(e, this.proxy(this, this[handler]));
      }
    }
    !this.autoinit || this.autoinit();
  }
}
