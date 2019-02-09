import './sass/index.scss'

import _ERRORTRACKER from './../_shared/utils'
import { _DOMMODULE } from './../_shared/utils'
import { _L10N } from './../_shared/utils'
import _PORT from './port'
_L10N();

new _DOMMODULE({
  el: document.getElementById('menu'),
  events: {
    DOM: {
      click: {
        '#activate': 'toggle',
        '.send': 'open',
        'span': 'open'
      }
    }
  },
  port: null,
  disabled: false,

  autoinit() {
    browser.storage.sync.get().then(storage => {
      if (storage.settings) {
        if (!storage || !storage.sync || storage.sync.settings) return storage.settings.addon.active;
        return browser.storage.local.get().then(storage => storage.settings.addon.active);
      }
      return true;
    })
    .then(active => this.setActivateText(active));
  },
  toggle() {
    this.emit('toggle:addon');
    window.close();
  },
  open(e, el) {
    const page = el.nodeName === 'SPAN' ? el.parentNode.id : el.id;
    this.emit('open:addon-page(tbb)', page);
    window.close();
  },
  setActivateText(active) {
    const btn = document.getElementById('activate');
    btn.title = browser.i18n.getMessage('tbb_mitem_1_' + active);
    if (active) {
      btn.classList.remove('menu__icon--start');
      btn.classList.add('menu__icon--pause');
    } else {
      btn.classList.add('menu__icon--start');
      btn.classList.remove('menu__icon--pause');
    }
  }
});
