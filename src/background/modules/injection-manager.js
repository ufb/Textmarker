import _STORAGE from './../storage'
import { _MODULE, _HASHLESS } from './../utils'

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
    const hashlessPageUrl =  _HASHLESS(url);

    _STORAGE.get('history').then(history => {
      let entries = history.entries,
          matches = [],
          lockedMatches = [],
          entry, pageUrl, entryUrl;

      for (let e in entries) {
        entry = entries[e];
        pageUrl = entry.hashSensitive ? url : hashlessPageUrl;
        entryUrl = entry.hashSensitive ? entry.url : _HASHLESS(entry.url);

        if (pageUrl === entryUrl) {
          matches.push(entry);
          if (entry.locked) lockedMatches.push(entry);
        }
      }
      if (!matches.length) {
        sendResponse(null);
      } else {
        sendResponse({ entries: matches, recentlyOpenedEntry: this.recentlyOpenedEntry });
        this.recentlyOpenedEntry = null;
      }
      entry = lockedMatches.length ? lockedMatches : !matches.length ? null : matches[0];
      this.emit('entry:found', entry);
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
  tempSaveEntryMetaData(data) {
    this.recentlyOpenedEntry = data;
  }
});
