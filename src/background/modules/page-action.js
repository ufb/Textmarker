import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'changed:url': 'show'
      }
    },

    autoinit() {
      browser.pageAction.onClicked.addListener(tab => {
        this.emit('clicked:page-action', tab.id, tab.url);
        browser.pageAction.hide(tab.id);
      });
    },

    show(tabId) {
      _STORAGE.get('settings').then(settings => {
        if (!settings.addon.autocs) {
          browser.pageAction.show(tabId);
        }
      });
    }
  });
}
