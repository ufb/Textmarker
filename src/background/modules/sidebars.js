import { _MODULE, _GET_ACTIVE_TAB, _HASHLESS } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'activated:tab': 'setPanel',
        'updated:tab': 'onUpdatedTab',
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
            panel: browser.runtime.getURL('content/sidebar/sidebar.html#' + tabId + '_' + _HASHLESS(url)),
            tabId
          });
        }
      });
    },
    isOpen() {
      return browser.sidebarAction.isOpen({});
    },
    storeEntry(entry) {
      _GET_ACTIVE_TAB().then(tab => {
        const entries = this.entries;
        const id = tab.id;
        entries[id] = entries[id] || [];
        entries[id][_HASHLESS(tab.url)] = entry;
      });
    },
    updateEntry(entry) {
      const entries = this.entries;
      for (let id in entries) {
        for (let url in entries[id]) {
          if (url === _HASHLESS(entry.url)) {
            entries[id][url] = entry;
          }
        }
      }
      _GET_ACTIVE_TAB().then(tab => {
        if (_HASHLESS(tab.url) === _HASHLESS(entry.url)) {
          this.emit('entry:found-for-tab', entry);
        }
      });
    },
    removeEntry(name, url) {
      const entries = this.entries;
      for (let id in entries) {
        for (let savedUrl in entries[id]) {
          if (savedUrl === _HASHLESS(url)) {
            delete entries[id][savedUrl];
          }
        }
      }
      _GET_ACTIVE_TAB().then(tab => {
        if (_HASHLESS(tab.url) === _HASHLESS(url)) {
          this.emit('entry:deleted-for-tab');
        }
      });
    },
    sendEntry() {
      _GET_ACTIVE_TAB().then(tab => {
        const url = _HASHLESS(tab.url);
        const entriesForThisTab = this.entries[tab.id];
        const entry = entriesForThisTab ? entriesForThisTab[url] : null;
        this.emit('entry:found-for-tab', entry);
      });
    },
    sendOrderedMarks(marks) {
      this.emit('entry:ordered-marks', marks);
    },
    onUpdatedTab(tab, changed) {
      if (changed.url) {
        this.setPanel(tab, changed.url);
      }
    }
  });
}
