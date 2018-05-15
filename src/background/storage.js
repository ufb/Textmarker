import { _MODULE } from './utils'
import _DEFAULT_STORAGE from './../data/default-storage'
import { _COPY } from './utils'

export default new _MODULE({

  initialized: false,
  area_settings: _DEFAULT_STORAGE.sync.settings ? 'sync' : 'local',
  area_history: _DEFAULT_STORAGE.sync.history ? 'sync' : 'local',

  init() {
    browser.storage.sync.remove('logs');

    return browser.storage.local.get().then(localStorage => {
      let sync = localStorage && localStorage.sync ? localStorage.sync : _DEFAULT_STORAGE.sync;
      return this._set_sync(sync);
    });
  },

  get(field = 'storage') {
    const meth = this['_get_' + field];
    if (!meth) throw('field ' + field + ' doesn\'t exist');

    if (!this.initialized) {
      this.initialized = true;
      return this.init().then(() => this['_get_' + field]());
    }
    return this['_get_' + field]();
  },
  set(field, val) {
    const meth = this['_set_' + field];
    if (!meth) throw('field ' + field + ' doesn\'t exist');
    return this['_set_' + field](val);
  },
  update(field, updater, area) {
    const meth = this['_update_' + field];
    if (!meth) throw('field ' + field + ' doesn\'t exist');
    return this['_update_' + field](updater, area);
  },
  sync(name, val) {
    return this._get_history().then(history => {
      if (!history.entries.hasOwnProperty(name)) throw('entry doesnt exist');
      let entry = _COPY(history.entries[name]);
      return browser.storage.sync.get().then(storage => {
        let syncedEntry;
        if (storage.history.entries.hasOwnProperty(name)) syncedEntry = storage.history.entries[name];
        if (val && syncedEntry) syncedEntry.synced = val;
        else if (val && !syncedEntry) {
          storage.history.entries[name] = _COPY(entry);
          storage.history.order.push(name);
          storage.history.entries[name].synced = val;
        }
        else if (!val && syncedEntry) {
          delete storage.history.entries[name];
          storage.history.order.splice(storage.history.order.indexOf(name), 1);
        }
        return browser.storage.sync.set({ history: storage.history });
      })
      .then(() => {
        return browser.storage.local.get().then(localStorage => {
          let localEntry;
          if (localStorage.history.entries.hasOwnProperty(name)) localEntry = localStorage.history.entries[name];
          if (!val && localEntry) localEntry.synced = val;
          else if (!val && !localEntry) {
            localStorage.history.entries[name] = _COPY(entry);
            localStorage.history.order.push(name);
            localStorage.history.entries[name].synced = val;
          }
          else if (val && localEntry) {
            delete localStorage.history.entries[name];
            localStorage.history.order.splice(localStorage.history.order.indexOf(name), 1);
          }
          return browser.storage.local.set({ history: localStorage.history });
        })
      });
    });
  },

  isEmpty(area = 'sync') {
    return browser.storage[area].get().then(storage => {
      if (!storage || (!Object.keys(storage).length && storage.constructor === Object) || !storage.history) return true;
      return false;
    });
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
  _get_version() {
    return browser.storage.local.get().then(localStorage => {
      if (!localStorage || !localStorage.version) {
        return browser.storage.sync.get().then(syncedStorage => (syncedStorage.version || ''));
      }
      return localStorage.version;
    });
  },
  _get_mode() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_naming() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return 'custom';
      return storage.settings.history.naming;
    });
  },
  _get_markers() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings.markers);
  },
  _get_shortcuts() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings.shortcuts);
  },

  _set_storage(area = null) {
    return this._set_settings(area).then(() => this._set_history(area));
  },
  _set_sync(sync) {
    return browser.storage.local.set({ sync: sync })
      .then(() => browser.storage.sync.set({ sync: sync }))
      .then(() => {
        this.area_settings = sync.settings ? 'sync' : 'local';
        this.area_history = sync.history ? 'sync' : 'local';
      });
  },
  _set_settings(area = this.area_settings) {
    return browser.storage[area].get().then(storage => {
      if (!storage || !storage.settings) return browser.storage[area].set({ settings: _COPY(_DEFAULT_STORAGE.settings) });
    });
  },
  _set_history(area = this.area_history) {
    return browser.storage[area].get().then(storage => {
      if (!storage || !storage.history) return browser.storage[area].set({ history: _COPY(_DEFAULT_STORAGE.history) });
    });
  },
  _set_version(version) {
    return browser.storage.local.set({ version: version })
      .then(() => browser.storage.sync.set({ version: version }));
  },
  _set_log(log) {
    if (log.clear) {
      return browser.storage.local.set({ logs: [] });
    }
    return this._get_logs().then(logs => {
      logs.push(log);
      if (logs.length > 200) logs.shift();
      return browser.storage.local.set({ logs: logs });
    });
  },
  _set_entry(entry) {
    return browser.storage[this.area_history].get().then(storage => {
      let history = storage.history;
      if (history.order.includes(entry.name)) return this._update_entry(entry);
      history.order.push(entry.name);
      history.entries[entry.name] = entry;
      return browser.storage[this.area_history].set({ history: history });
    });
  },

  _update_history(updater, area = this.area_history) {
    return browser.storage[area].get()
      .then(storage => {
        if (!storage.history) {
          storage.history = _COPY(_DEFAULT_STORAGE.history);
        }
        let history = updater(storage.history);
        return browser.storage[area].set({ history: history }).then(() => history);
      });
  },
  _update_settings(updater, area = this.area_settings) {
    return browser.storage[area].get()
      .then(storage => {
        if (!storage.settings) {
          storage.settings = _COPY(_DEFAULT_STORAGE.settings);
        }
        let settings = updater(storage.settings);
        return browser.storage[area].set({ settings: settings }).then(() => settings);
      });
  },
  _update_sync(updater) {
    let sync = {};
    sync.settings = this.area_settings === 'sync';
    sync.history = this.area_history === 'sync';
    return this._set_sync(updater(sync));
  }
});
