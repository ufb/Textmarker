import './sass/index.scss'

import { _MODULE } from './../_shared/utils'
import { _L10N } from './../_shared/utils'
import './modules/header'
import './modules/meta'
import './modules/notes'
import './modules/marks'

_L10N();

new _MODULE({
  autoinit() {
    const name = decodeURIComponent(window.location.hash).slice(1);

    browser.storage.sync.get().then(storage => {
      if (Object.keys(storage.history.entries).includes(name)) return storage.history.entries[name];
      return browser.storage.local.get().then(storage => {
        if (Object.keys(storage.history.entries).includes(name)) return storage.history.entries[name];
      });
    })
      .then(entry => {
        this.emit('entry', entry);
        document.title = entry.name;
      });
  }
});
