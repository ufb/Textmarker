import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'activated:tab': 'setPanel'
      }
    },

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
    }
  });
}
