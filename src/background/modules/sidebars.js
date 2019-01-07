import { _MODULE } from './../utils'
import { _GET_ACTIVE_TAB } from './../utils'

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
            panel: browser.runtime.getURL('content/sidebar/sidebar.html#' + tabId + '_' + url),
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
        entries[id][tab.url] = entry;
      });
    },
    updateEntry(entry) {console.log('save updated entry', entry);
      const entries = this.entries;
      for (let id in entries) {
        for (let url in entries[id]) {
          if (url === entry.url) {
            entries[id][url] = entry;
          }
        }
      }
      _GET_ACTIVE_TAB().then(tab => {
        if (tab.url === entry.url) {
console.log('send entry on update');
          this.emit('entry:found-for-tab', entry);
        }
      });
    },
    removeEntry(name, url) {
      const entries = this.entries;
      for (let id in entries) {
        for (let savedUrl in entries[id]) {
          if (savedUrl === url) {
            delete entries[id][url];
          }
        }
      }
      _GET_ACTIVE_TAB().then(tab => {
        if (tab.url === url) {
console.log('send entry on delete');
          this.emit('entry:deleted-for-tab');
        }
      });
    },
    sendEntry() {
      _GET_ACTIVE_TAB().then(tab => {
        const url = this.getHashlessURL(tab.url);
        const entriesForThisTab = this.entries[tab.id];
        const entry = entriesForThisTab ? entriesForThisTab[url] : null;
console.log('send entry on opened sb');
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
    },
    getHashlessURL(url) {
      const h = url.lastIndexOf('#');
      if (h === -1) return url;
      else return url.substr(0, h);
    }
  });
}
