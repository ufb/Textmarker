import _STORAGE from './../storage'
import { _MODULE } from './../utils'

new _MODULE({
  events: {
    ENV: {
      'check:url': 'checkUrl',
      'save:entry?': 'onSaveNewRequest',
      'update:entry?': 'onUpdateRequest',
      'name:entry?': 'onNamingRequest'
    }
  },
  checkUrl(url, sender, sendResponse) {
    _STORAGE.get('history').then(history => {
      let entries = history.entries, entry;
      for (let e in entries) {
        entry = entries[e];
        if (url === this.getHashlessURL(entry.url)) {
          sendResponse(entry);
          break;
        }
      }
    });
  },
  onNamingRequest(sender, sendResponse) {
    return browser.windows.getLastFocused()
      .then(windowInfo => {
        const priv = windowInfo.incognito;
        if (priv) this.emit('failed:pbm');
        sendResponse(!priv);
      });
  },
  onSaveNewRequest(entry) {
    return browser.windows.getLastFocused()
      .then(windowInfo => {
        if (windowInfo.incognito) this.emit('failed:pbm');
        else this.emit('granted:save-entry', entry);
      });
  },
  onUpdateRequest(entry) {
    return browser.windows.getLastFocused()
      .then(windowInfo => {
        if (windowInfo.incognito) this.emit('failed:pbm');
        else this.emit('granted:update-entry', entry);
      });
  },
  getHashlessURL(url) {
    const h = url.lastIndexOf('#');
    if (h === -1) return url;
    else return url.substr(0, h);
  }
});
