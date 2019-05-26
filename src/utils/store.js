import { _MODULE } from './module'
import _DEFAULT_STORAGE from '../data/default-storage'

export class _STORE extends _MODULE {

  constructor(obj) {
    super(obj)

    this.initialized = false;
    this.initializing = false;

    this.area_settings = _DEFAULT_STORAGE.sync.settings ? 'sync' : 'local';
    this.area_history = _DEFAULT_STORAGE.sync.history ? 'sync' : 'local';
    this.area_pagenotes = _DEFAULT_STORAGE.sync.pagenotes ? 'sync' : 'local';
  }

  init() {
    return browser.storage.local.get().then(storage => {
      if (storage && storage.sync) {
        this.setAreas(storage.sync);
      }
    });
  }

  setAreas(sync) {
    for (let area in sync) {
      this['area_' + area] = sync[area] ? 'sync' : 'local';
    }
  }

  onToggledSync() {
    this.init().then(() => this.emit('set-areas-after-sync-change'));
  }

  get(field = 'storage') {
    if (this.initializing) {
      return (new Promise(r => window.setTimeout(() => r(this.get(field)), 10)));
    }
    const meth = this['_get_' + field];
    if (!meth) throw('field ' + field + ' doesn\'t exist');

    if (!this.initialized) {
      this.initializing = true;
      this.initialized = true;

      return this.init().then(() => {
        this.initializing = false;
        return this['_get_' + field]();
      });
    }
    return this['_get_' + field]();
  }

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
  }
  _get_local_storage() {
    return browser.storage.local.get();
  }
  _get_synced_storage() {
    return browser.storage.sync.get();
  }
  _get_history() {
    return browser.storage.sync.get().then(syncedStorage => {
      const syncedHistory = syncedStorage.history;

      return browser.storage.local.get().then(localStorage => {
        const localHistory = localStorage.history;
        if (!syncedHistory) return localHistory;
        if (!localHistory) return syncedHistory;

        //syncedHistory.order = syncedHistory.order.concat(localHistory.order);
        for (let e in localHistory.entries) syncedHistory.entries[e] = localHistory.entries[e];

        return syncedHistory;
      });
    });
  }
  _get_settings() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings || _DEFAULT_STORAGE.settings);
  }
  _get_logs() {
    return browser.storage.local.get().then(localStorage => {
      if (!localStorage || !localStorage.logs) return [];
      return localStorage.logs;
    });
  }
  _get_version() {
    return browser.storage.local.get().then(localStorage => {
      if (!localStorage || !localStorage.version) {
        return browser.storage.sync.get().then(syncedStorage => syncedStorage.version || '');
      }
      return localStorage.version;
    });
  }
}
