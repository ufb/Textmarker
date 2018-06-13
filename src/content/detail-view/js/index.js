import { _MODULE } from './../../utils'
import './modules/header'
import './modules/meta'
import './modules/marks'

new _MODULE({
  autoinit() {
    const name = decodeURIComponent(window.location.hash).slice(1);

    browser.storage.sync.get().then(storage => {
      if (storage.history.order.includes(name)) return storage.history.entries[name];
      return browser.storage.local.get().then(storage => {
        if (storage.history.order.includes(name)) return storage.history.entries[name];
      });
    })
      .then(entry => {
        this.emit('entry', entry);
        document.title = entry.name;
      });
  }
});
