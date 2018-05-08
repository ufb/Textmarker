import { _MODULE } from './../../utils'

import _PAGE from './modules/page'
import _CTM from './modules/contextmenu'
import _MARKER from './modules/marker'
import _RESTORER from './modules/restorer'
import _NOTES from './modules/notes'

new _MODULE({
  events: {
    ENV: {
      'started:app': 'autoinit',
      'toggled:addon': 'power'
    }
  },

  bootstrapped: false,

  autoinit() {
    browser.storage.sync.get().then(storage => {
      if (storage && storage.settings && storage.history && storage.settings.addon.active) {
        this.power(true);
      }
    });
  },
  power(on) {
    if (!on || this.bootstrapped) return false;

    window.document.body.appendChild(window.document.createElement('tmui'));

    _PAGE();
    _CTM();
    _RESTORER();
    _MARKER();
    _NOTES();

    this.bootstrapped = true;
  }
});
