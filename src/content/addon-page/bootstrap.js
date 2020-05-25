import _STORE from './_store'
import { _MODULE } from './../_shared/utils'

import _HISTORY from './modules/history'
import _SETTINGS from './modules/settings'
import _LOGGING from './modules/logs'
import _SYNCING from './modules/syncing'
import _IMPORT from './modules/import'
import _CONTACT from './modules/contact'
import _TROUBLESHOOTING from './modules/troubleshooting'
import _PAGINATOR from './modules/history-pagination'
import _PERMISSIONS from './modules/permissions'

import _NAV from './modules/nav'

new _MODULE({
  events: {
    ENV: {
      'started:app': 'start',
      'updated:settings': 'start',
      'updated:history': 'start'
    }
  },
  allowedHashes: [/*'news', */'manual', 'settings', 'history', 'contact', 'sync', 'export', 'troubleshooting', 'logs'],
  bootstrapped: false,
  autoinit() {
    _STORE.get().then(storage => {
      if (storage.settings && storage.history) this.start();
    });
  },
  start() {
    if (!this.bootstrapped) {
      this.bootstrapped = true;
      _HISTORY();
      _SETTINGS();
      _LOGGING();
      _SYNCING();
      _IMPORT();
      _CONTACT();
      _TROUBLESHOOTING();
      _PAGINATOR();
      _PERMISSIONS();
      this.initMainNav();
    }
  },
  initMainNav() {
    const tab = window.location.hash.split('=')[1];

    if (this.allowedHashes.includes(tab)) {
      window.document.getElementById('mainnav-' + tab).classList.add('active');
    }
    new _NAV(window.document.getElementById('mainnav'));
  }
});
