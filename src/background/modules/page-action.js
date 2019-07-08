import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'dom:loaded': 'show',
        'updated:autocs-settings': 'update'
      }
    },
    active: false,

    autoinit() {
      this.update();
      browser.pageAction.onClicked.addListener(tab => {
        this.emit('clicked:page-action', tab.id, tab.url);
        browser.pageAction.hide(tab.id);
      });
    },

    show(infos) {
      if (this.active) {
        browser.pageAction.show(infos.tabId);
      }
    },

    update() {
      _STORAGE.get('settings').then(settings => {
        this.active = !settings || settings.addon.autocs ? false : true;
      });
    }
  });
}
