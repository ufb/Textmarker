import { _MODULE } from './../../utils'

export default new _MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas'
    }
  },
  initialized: false,
  area_settings: 'sync',
  area_history: 'sync',

  setAreas() {
    return browser.storage.sync.get().then(storage => {
      if (storage && storage.sync) {
        this.area_settings = storage.sync.settings ? 'sync' : 'local';
        this.area_history = storage.sync.history ? 'sync' : 'local';
      }
    });
  },

  get(field = 'storage') {
    const meth = this['_get_' + field];
    if (!meth) throw('field ' + field + ' doesn\'t exist');

    if (!this.initialized) {
      this.initialized = true;
      return this.setAreas().then(() => this['_get_' + field]());
    }
    return this['_get_' + field]();
  },

  _get_storage() {
    return browser.storage.local.get().then(localStorage => {
      return browser.storage.sync.get().then(syncedStorage => {
        ['version', 'logs'].forEach(field => {
          localStorage[field] = localStorage[field] || syncedStorage[field];
        });
        if (this.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
        return this._get_history().then(history => {
          localStorage.history = history;
          return localStorage;
        });
      });
    });
  },
  _get_local_storage() {
    return browser.storage.local.get();
  },
  _get_synced_storage() {
    return browser.storage.sync.get();
  },
  _get_history() {
    return browser.storage.sync.get().then(syncedStorage => {
      const syncedHistory = syncedStorage.history;

      return browser.storage.local.get().then(localStorage => {
        const localHistory = localStorage.history;
        if (!syncedHistory) return localHistory;
        if (!localHistory) return syncedHistory;

        syncedHistory.order = syncedHistory.order.concat(localHistory.order);
        for (let e in localHistory.entries) syncedHistory.entries[e] = localHistory.entries[e];

        return syncedHistory;
      });
    });
  },
  _get_settings() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings);
  },
  _get_logs() {
    return browser.storage.local.get().then(localStorage => {
      if (!localStorage || !localStorage.logs) return [];
      return localStorage.logs;
    });
  },
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
