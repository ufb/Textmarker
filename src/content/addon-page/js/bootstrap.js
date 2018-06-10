import _STORE from './_store'
import { _MODULE } from './../../utils'

import _HISTORY from './modules/history'
import _SETTINGS from './modules/settings'
import _LOGGING from './modules/logs'
import _SYNCING from './modules/syncing'
import _IMPORT from './modules/export-import'
import _WEBDAV from './modules/webdav'
import _CONTACT from './modules/contact'
import _PAGINATOR from './modules/history-pagination'

new _MODULE({
  events: {
    ENV: {
      'started:app': 'start',
      'updated:settings': 'start',
      'updated:history': 'start'
    }
  },
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
      _WEBDAV();
      _CONTACT();
      _PAGINATOR();
    }
  }
});
