import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  events: {
    ENV: {
      'toggled:addon': 'activate'
    }
  },
  active: false,

  autoinit() {
    this.activate(true);
  },

  activate(on) {
    if (on && !this.active) {
      this.registerHandler();
      this.active = true;
    }
    else if (!on && this.active) {
      this.removeListeners();
      this.active = false;
    }
  },
  registerHandler() {
    this.addListener('mousedown', e => {
      if (e.button === 2) {
        if (e.target.classList.contains('textmarker-highlight')) {
          _STORE.tmid = e.target.getAttribute('data-tm-id');
        }
        else _STORE.tmid = '';
      }
    }, window.document);
  }
});
