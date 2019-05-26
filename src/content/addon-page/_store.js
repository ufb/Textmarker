import { _STORE } from './../_shared/utils'

export default new _STORE({
  events: {
    ENV: {
      'toggled:sync': 'onToggledSync'
    }
  },
  env: 'addon-page',

  _get_download_option() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return 'text';
      return storage.settings.history.download;
    });
  },
  _get_markers() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings.markers);
  },
  _get_shortcuts() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings.shortcuts);
  }
});
