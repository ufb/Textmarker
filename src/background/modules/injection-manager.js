import _STORAGE from './../storage'
import { _MODULE, _HASHLESS } from './../utils'

new _MODULE({
  type: 'background',
  events: {
    ENV: {
      'dom:loaded': 'autoinject',
      'clicked:page-action': 'injectManually',
      'save:entry?': 'onSaveNewRequest',
      'update:entry?': 'onUpdateRequest',
      'name:entry?': 'onNamingRequest',
      'opened:entry': 'tempSaveEntryMetaData',
      'fetch:entries': 'onFetchEntriesRequest',
      'updated:autocs-settings': 'updateInjectionStatus',
      'updated:iframes-settings': 'updateInjectionStatus'
    }
  },
  autoinject: true,
  iframeInjections: true,
  recentlyOpenedEntry: null,

  autoinit() {
    this.updateInjectionStatus();
  },

  updateInjectionStatus() {
    _STORAGE.get('settings').then(settings => {
      this.autoinject = !settings || settings.addon.autocs ? true : false;
      this.iframeInjections = !settings || settings.addon.iframes ? true : false;
    });
  },

  onFetchEntriesRequest(url, sender) {
    this.collectEntries({ tabId: sender.tab.id, url, frameId: sender.frameId }, true);
  },

  autoinject(infos) {
    if (!this.iframeInjections && infos.frameId !== 0) return false;
    if (this.autoinject) this.inject(infos);
  },

  injectManually(tabId, url) {
    this.injectContentScript({ tabId, url, frameId: null }).then(() => {
      if (browser.webNavigation && browser.webNavigation.getAllFrames && this.iframeInjections) {
        browser.webNavigation.getAllFrames({ tabId })
          .then(frames => frames.forEach(frame => this.collectEntries({ tabId, url: frame.url, frameId: frame.frameId })));
      }
    });
  },

  inject(infos) {
    this.injectContentScript(infos).then(() => this.collectEntries(infos));
  },

  injectContentScript(infos) {
    const { tabId, url, frameId } = infos;
    const details = { file: '../content/page-injections/injection.wp.js' };
    if (frameId === null) {
      details.allFrames = true;
    } else {
      details.frameId = frameId;
    }

    return browser.tabs.executeScript(tabId, details)
      .then(() => this.insertCSS(tabId, frameId))
      .catch(e => {
        let msg = e.toString();
        //if (frameId === 0 && !msg.includes('host permission')) {
          this.request('injected?', { tabId, frameId: frameId || 0 })
            .then(() => this.insertCSS(tabId, frameId))
            .catch(() => this.emit('failed:inject-content-script', `${msg}\nURL: ${url}`));
        //}
      });
  },

  insertCSS(tabId, frameId) {
    const details = { file: '../content/page-injections/injection.css', cssOrigin: 'user' };
    if (frameId === null) {
      details.allFrames = true;
    } else {
      details.frameId = frameId;
    }

    browser.tabs.insertCSS(tabId, details)
      .catch(e => {
        const msg = e.toString();
        if (!msg.includes('Missing host permission for the tab')) {
          this.emit('failed:inject-stylesheet');
        }
      });
  },

  collectEntries(infos, hashSensitive) {
    const { tabId, url, frameId } = infos;
    _STORAGE.get('history').then(history => {
      const matches = this.findMatchingEntries(history, url, hashSensitive);
      const entries = this.filterMatches(matches, frameId);

      if (entries) {
        this.emit('entries:found', {
          entries,
          recentlyOpenedEntry: this.recentlyOpenedEntry,
          locked: !!matches.lockedEntries.length
        }, { tab: tabId, frameId });

        this.recentlyOpenedEntry = null;
      }
    });
  },

  findMatchingEntries(history, url, hashSensitive) {
    const entries = history.entries;
    const lockedEntries = [];
    const nonLockedEntries = [];
    let entry, pageUrl, entryUrl;

    for (let e in entries) {
      entry = entries[e];
      if (entry.url) {
        pageUrl = hashSensitive || entry.hashSensitive ? url : _HASHLESS(url);
        entryUrl = hashSensitive || entry.hashSensitive ? entry.url : _HASHLESS(entry.url);

        if (pageUrl === entryUrl) {
          if (entry.locked) lockedEntries.push(entry);
          else nonLockedEntries.push(entry);
        }
      }
    }
    return { lockedEntries, nonLockedEntries };
  },

  filterMatches(matches, frameId) {
    const lockedEntries = matches.lockedEntries;
    const nonLockedEntries = matches.nonLockedEntries;
    const lockedEntriesCount = lockedEntries.length;
    const nonLockedEntriesCount = nonLockedEntries.length;
    let entries;

    if (lockedEntriesCount && nonLockedEntriesCount) {
      this.emit('warn:mixed-entry-types');
      entries = lockedEntries;
    }
    else if (nonLockedEntriesCount) {
      // if multiple entries with same url found: take latest
      entries = [nonLockedEntries.reduce((prev, current) => (prev.last > current.last) ? prev : current)];
      if (nonLockedEntriesCount > 1) {
        this.recentlyOpenedEntry = null;
        this.emit('warn:multiple-unlocked-entries');
      }
      if (!frameId) this.emit('entry:found', entries[0]);
    }
    if (lockedEntriesCount) {
      entries = lockedEntries;
      if (!frameId) this.emit('entry:found', lockedEntries);
    }
    return entries;
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
