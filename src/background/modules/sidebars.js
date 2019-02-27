import { _MODULE, _GET_ACTIVE_TAB, _HASHLESS } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'activated:tab': 'setPanel',
        'changed:url': 'setPanel',
        'entry:found': 'storeEntry',
        'saved:entry': 'storeEntry',
        'updated:entry': 'updateEntry',
        'deleted:entry': 'removeEntry',
        'opened:sidebar':'sendEntry',
        'visually-ordered:marks': 'sendOrderedMarks'
      }
    },

    entries: {},

    setPanel(tabId, url) {
      this.isOpen().then(open => {
        if (open) {
          browser.sidebarAction.setPanel({
            panel: browser.runtime.getURL(`content/sidebar/sidebar.html#${tabId}_${url}`),
            tabId
          });
        }
      });
    },
    isOpen() {
      return browser.sidebarAction.isOpen({});
    },
    storeEntry(entry) {
      const ignoreHash = !entry.hashSensitive;
      const entries = this.entries;

      _GET_ACTIVE_TAB().then(tab => {
        const id = tab.id;
        const url = ignoreHash ? _HASHLESS(tab.url) : tab.url;

        entries[id] = entries[id] || [];
        entries[id][url] = entry;
      });
    },
    updateEntry(entry) {
      const ignoreHash = !entry.hashSensitive;
      const entries = this.entries;
      const entryUrl = ignoreHash ? _HASHLESS(entry.url) : entry.url;

      for (let id in entries) {
        for (let url in entries[id]) {
          if (url === entryUrl) {
            entries[id][url] = entry;
          }
        }
      }
      _GET_ACTIVE_TAB().then(tab => {
        const tabUrl = ignoreHash ? _HASHLESS(tab.url) : tab.url;

        if (tabUrl === entryUrl) {
          this.emit('entry:found-for-tab', entry);
        }
      });
    },
    removeEntry(name, url, hashSensitive) {
      const entries = this.entries;
      const entryUrl = hashSensitive ? url : _HASHLESS(url);

      for (let id in entries) {
        for (let savedUrl in entries[id]) {
          if (savedUrl === entryUrl) {
            delete entries[id][savedUrl];
          }
        }
      }
      _GET_ACTIVE_TAB().then(tab => {
        const tabUrl = hashSensitive ? tab.url : _HASHLESS(tab.url);
        if (tabUrl === entryUrl) {
          this.emit('entry:deleted-for-tab');
        }
      });
    },
    sendEntry() {
      _GET_ACTIVE_TAB().then(tab => {
        const hashlessUrl = _HASHLESS(tab.url);

        const entriesForThisTab = this.entries[tab.id];
        let entry = null;
        if (entriesForThisTab) {
          entry = entriesForThisTab[tab.url] || entriesForThisTab[hashlessUrl];
        }
        this.emit('entry:found-for-tab', entry);
      });
    },
    sendOrderedMarks(marks) {
      this.emit('entry:ordered-marks', marks);
    }
  });
}
