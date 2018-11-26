import { _MODULE } from './../utils'
import { _GET_ACTIVE_TAB } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'activated:tab': 'setPanel',
        'entry:found': 'storeEntry',
        'opened:sidebar':'sendEntry',
        'visually-ordered:marks': 'sendOrderedMarks'
      }
    },

    entries: {},

    setPanel(tabId) {
      this.isOpen().then(open => {
        if (open) {
          browser.sidebarAction.setPanel({
            panel: browser.runtime.getURL('content/sidebar/sidebar.html#' + tabId),
            tabId
          });
        }
      });
    },
    isOpen() {
      return browser.sidebarAction.isOpen({});
    },
    storeEntry(entry) {
      _GET_ACTIVE_TAB().then(tab => this.entries[tab.id] = entry);
    },
    sendEntry() {
      _GET_ACTIVE_TAB().then(tab => this.emit('entry:found-for-tab', this.entries[tab.id]));
    },
    sendOrderedMarks(marks) {
      _GET_ACTIVE_TAB().then(tab => this.emit('entry:ordered-marks', marks));
    }
  });
}
