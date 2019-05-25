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
      'opened:entry': 'tempSaveEntryMetaData'
    }
  },
  queuedForTabCompleted: {},
  injectedScripts: {},
  recentlyOpenedEntry: null,

  onTabCompleted(tabId) {console.log('on tab completed');
    if (this.queuedForTabCompleted[tabId]) {
      this.attemptInjections(tabId, this.queuedForTabCompleted[tabId]);
      delete this.queuedForTabCompleted[tabId];
    }
  },

  onURLChange(tabId, changed) {console.log('on url changed');
    if (changed.status && changed.status !== 'complete') {
      this.queuedForTabCompleted[tabId] = changed.url;
    } else {
      this.attemptInjections(tabId, changed.url);
    }
  },

  attemptInjections(tabId, newUrl) {
    _STORAGE.get('settings').then(settings => {console.log('inject', settings.addon.autocs);
      if (settings.addon.autocs) {
        this.handleInjections(tabId, newUrl);
      }
    });
  },

  handleInjections(tabId, newUrl) {
    const registered = this.injectedScripts[tabId];
    const sameHashlessUrls = registered && _HASHLESS(registered.url) === _HASHLESS(newUrl);
    const reloaded = registered && (registered.url === newUrl || !sameHashlessUrls);

    if (!registered || reloaded) {

      this.injectContentScript(tabId, newUrl).then(() => {

        _STORAGE.get('history').then(history => {
          const matches = this.findMatchingEntries(history, newUrl);
          const entries = this.filterMatches(matches);

          if (entries) {
            console.log('reporting found entries...', entries, this.recentlyOpenedEntry);
            this.emit('entries:found', {
              entries,
              recentlyOpenedEntry: this.recentlyOpenedEntry,
              locked: !!matches.lockedEntries.length
            }, { tab: tabId });

            this.recentlyOpenedEntry = null;
          }
        });
      });
    }
    else if (sameHashlessUrls && registered.entry && registered.entry.hashSensitive) {
      this.emit('hash:changed', newUrl);
    }
  },

  injectContentScript(tabId, url) {console.log('injecting base script for:', tabId, url);
    return browser.tabs.executeScript(tabId, {
      file: '../content/page-injections/injection.wp.js',
      allFrames: true,
      runAt: 'document_idle'
    })
      .then(() => {
        this.injectedScripts[tabId] = { url };
        this.insertCSS(tabId);
      })
      .catch(e => {
        console.log('failed to inject base script', e.toString());
        this.emit('failed:inject-content-script');
      });
  },

  insertCSS(tabId) {console.log('injecting  css...', tabId);
    browser.tabs.insertCSS(tabId, {
      file: '../content/page-injections/injection.css',
      allFrames: true
    })
      .catch(e => {
        console.log('failed to inject css', e.toString());
        this.emit('failed:inject-stylesheet');
      });
  },

  findMatchingEntries(history, url) {
    const hashlessPageUrl = _HASHLESS(url);
    const entries = history.entries;
    const lockedEntries = [];
    const nonLockedEntries = [];
    let entry, pageUrl, entryUrl;

    for (let e in entries) {
      entry = entries[e];
      pageUrl = entry.hashSensitive ? url : hashlessPageUrl;
      entryUrl = entry.hashSensitive ? entry.url : _HASHLESS(entry.url);

      if (pageUrl === entryUrl) {
        if (entry.locked) lockedEntries.push(entry);
        else nonLockedEntries.push(entry);
      }
    }
    return { lockedEntries, nonLockedEntries };
  },

  filterMatches(matches) {
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
      entries = [nonLockedEntries[0]];
      if (nonLockedEntriesCount > 1) {
        this.emit('warn:multiple-unlocked-entries');
      }
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
