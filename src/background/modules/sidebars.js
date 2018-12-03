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
        'updated:entry': 'storeEntry',
        'opened:sidebar':'sendEntry',
        'visually-ordered:marks': 'sendOrderedMarks',
        'updated:page-note': 'onUpdatedPageNotes'
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
    sendEntry() {
      _GET_ACTIVE_TAB().then(tab => {
        const url = this.getHashlessURL(tab.url);
        const entriesForThisTab = this.entries[tab.id];
        const entry = entriesForThisTab ? entriesForThisTab[url] : null;

        this.emit('entry:found-for-tab', entry);
      });
    },
    sendOrderedMarks(marks) {
      this.emit('entry:ordered-marks', marks);
    },
    onUpdatedPageNotes(notes) {
      this.emit('save:page-notes', notes);
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
