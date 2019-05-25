import { _MODULE } from './module'

export class _DOMMODULE extends _MODULE {

  constructor(obj) {
    obj._bound = {};
    obj._extraBound = [];

    super(obj)

    this.addListenersManually || this.addListeners();
    !this.autoPause || this.setAutoPause();
  }
  generalHandler(subMap, type, e) {
    let el = e.target,
        selector, _sel, meth, f, isId, isClass, isDoc;

    for (selector in subMap) {
      f = selector[0];
      _sel = selector;
      isId = f === '#';
      isClass = f === '.';
      isDoc = f === '*';

      if (isId || isClass) selector = selector.substr(1);

      if (isDoc ||
          isClass && el.classList.contains(selector) ||
          isId && el.id === selector ||
          el.nodeName.toLowerCase() === selector
      ) {

        meth = subMap[_sel];

        if (typeof meth === 'function') meth(e, el);
        else if (this[meth]) this[meth](e, el);

        break;
      }
    }
  }
  setAutoPause() {
    this.on('toggled:addon', on => {
      if (on) this.addListeners();
      else this.removeListeners();
    });
  }
  addListener(type, meth, el) {
    el = el || this.el;
    const handler = typeof meth === 'function' ? meth : this[meth];

    el.addEventListener(type, handler, false);

    if (el === this.el) {
      if (!this._bound[type]) this._bound[type] = [];
      this._bound[type].push(handler);
    } else {
      this._extraBound.push([el, type, handler]);
    }
  }
  addListeners() {
    let events = this.events,
        domEvents, el, subMap, type, handler;

    if (!events || !(domEvents = events.DOM) || !(el = this.el)) return false;

    for (type in domEvents) {
      subMap = domEvents[type];
      handler = this.proxy(this, this.generalHandler, subMap, type);
      el.addEventListener(type, handler, false);
      if (!this._bound[type]) this._bound[type] = [];
      this._bound[type].push(handler);
    }
  }
  removeListeners() {
    let type, _bound, l;

    for (type in this._bound) {
      _bound = this._bound[type];
      l = _bound.length;
      while (l--) {
        this.el.removeEventListener(type, _bound[l], false);
        _bound.splice(l, 1);
      }
    }

    let _extra = this._extraBound, i = 0, set;
    l = _extra.length;

    for (; i < l; i++) {
      set = _extra[i];
      set[0].removeEventListener(set[1], set[2], false);
    }
  }
}
