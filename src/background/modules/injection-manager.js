import _STORAGE from './../storage'
import { _MODULE, _HASHLESS } from './../utils'

new _MODULE({
  events: {
    ENV: {
      'changed:url': 'onURLChange',
      'completed:tab': 'onTabCompleted',
      'clicked:page-action': 'handleInjections',
      'save:entry?': 'onSaveNewRequest',
      'update:entry?': 'onUpdateRequest',
      'name:entry?': 'onNamingRequest',
      'opened:entry': 'tempSaveEntryMetaData',
      'fetch:entries': 'onFetchEntriesRequest'
    }
  },
  queuedForTabCompleted: {},
  injectedScripts: {},
  recentlyOpenedEntry: null,

  onTabCompleted(tabId) {
    if (this.queuedForTabCompleted[tabId]) {
      this.attemptInjections(tabId, this.queuedForTabCompleted[tabId]);
      delete this.queuedForTabCompleted[tabId];
    }
  },

  onURLChange(tabId, changed) {
    if (changed.status && changed.status !== 'complete') {
      this.queuedForTabCompleted[tabId] = changed.url;
    } else {
      this.attemptInjections(tabId, changed.url, true);
    }
  },

  onFetchEntriesRequest(url, sender) {
    this.collectEntries(sender.tab.id, url, sender.frameId, true);
  },

  attemptInjections(tabId, newUrl, noReload) {
    _STORAGE.get('settings').then(settings => {
      if (settings.addon.autocs) {
        this.handleInjections(tabId, newUrl, noReload);
      }
    });
  },

  handleInjections(tabId, newUrl, noReload) {
    if (!this.injectedScripts[tabId] || !noReload) {
      this.inject(tabId, newUrl, 0).then(lastFrameId => {
        _STORAGE.get('settings').then(settings => {
          if (settings.addon.iframes) {
            browser.webNavigation.getAllFrames({ tabId }).then(frames => {
              frames.forEach(frame => {
                if (frame.frameId !== lastFrameId) this.inject(tabId, frame.url, frame.frameId);
              });
            });
          }
        });
      });
    }
  },

  inject(tabId, url, frameId) {
    return this.injectContentScript(tabId, url, frameId).then(() => {

      this.collectEntries(tabId, url, frameId);
      return frameId;
    });
  },

  injectContentScript(tabId, url, frameId) {
    return browser.tabs.executeScript(tabId, {
      file: '../content/page-injections/injection.wp.js',
      frameId,
      runAt: 'document_idle'
    })
      .then(() => {
        this.injectedScripts[tabId] = { url };
        this.insertCSS(tabId, frameId);
      })
      .catch(e => {
        const msg = e.toString();
        if (!msg.includes('Missing host permission for the tab')) {
          this.emit('failed:inject-content-script');
        }
      });
  },

  insertCSS(tabId, frameId) {
    browser.tabs.insertCSS(tabId, {
      file: '../content/page-injections/injection.css',
      frameId
    })
      .catch(e => {
        const msg = e.toString();
        if (!msg.includes('Missing host permission for the tab')) {
          this.emit('failed:inject-stylesheet');
        }
      });
  },

  collectEntries(tabId, url, frameId, hashSensitive) {
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
