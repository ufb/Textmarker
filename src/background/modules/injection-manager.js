import _STORAGE from './../storage'
import { _MODULE } from './../utils'

new _MODULE({
  events: {
    ENV: {
      'check:url': 'checkUrl',
      'save:entry?': 'onSaveNewRequest',
      'update:entry?': 'onUpdateRequest',
      'name:entry?': 'onNamingRequest',
      'opened:entry': 'tempSaveEntryMetaData'
    }
  },
  recentlyOpenedEntry: null,

  checkUrl(url, sender, sendResponse) {
    _STORAGE.get('history').then(history => {
      let entries = history.entries,
          matches = [],
          locked = false,
          entry;
      for (let e in entries) {
        entry = entries[e];
        if (url === this.getHashlessURL(entry.url)) {
          matches.push(entry);
        }
      }
      if (!matches.length) sendResponse(null);
      else {
        sendResponse({ entries: matches, recentlyOpenedEntry: this.recentlyOpenedEntry });
        this.recentlyOpenedEntry = null;
      }
    });
  },
  onNamingRequest(sender, sendResponse) {
    return browser.windows.getLastFocused()
      .then(windowInfo => {
        const priv = windowInfo.incognito;
        if (!priv) sendResponse(!priv);
        else {
          _STORAGE.get('privsave').then(saveInPriv => {
            if (!saveInPriv) this.emit('failed:pbm');
            else sendResponse(saveInPriv);
          });
        }
      });
  },
  onSaveNewRequest(entry) {
    return browser.windows.getLastFocused()
      .then(windowInfo => {
        if (!windowInfo.incognito) this.emit('granted:save-entry', entry);
        else {
          _STORAGE.get('privsave').then(saveInPriv => {
            if (!saveInPriv) this.emit('failed:pbm');
            else this.emit('granted:save-entry', entry);
          });
        }
      });
  },
  onUpdateRequest(entry) {
    return browser.windows.getLastFocused()
      .then(windowInfo => {
        if (!windowInfo.incognito) this.emit('granted:update-entry', entry);
        else {
          _STORAGE.get('privsave').then(saveInPriv => {
            if (!saveInPriv) this.emit('failed:pbm');
            else this.emit('granted:update-entry', entry);
          });
        }
      });
  },
  getHashlessURL(url) {
    const h = url.lastIndexOf('#');
    if (h === -1) return url;
    else return url.substr(0, h);
  },
  tempSaveEntryMetaData(data) {
    this.recentlyOpenedEntry = data;
  }
});
