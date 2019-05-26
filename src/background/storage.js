import { _STORE} from './utils'
import _DEFAULT_STORAGE from './../data/default-storage'
import _GLOBAL_SETTINGS from './../data/global-settings'
import { _COPY } from './utils'

export default new _STORE({

  init() {
    browser.storage.sync.remove('logs');

    return browser.storage.local.get().then(localStorage => {
      let sync = localStorage && localStorage.sync ? localStorage.sync : _DEFAULT_STORAGE.sync;
      return this._set_sync(sync);
    });
  },

  set(field, val) {
    const meth = this['_set_' + field];
    if (!meth) throw('field ' + field + ' doesn\'t exist');
    return this['_set_' + field](val);
  },
  update(...args) {
    return this._update(...args);
  },

  isEmpty(area = 'sync') {
    return browser.storage[area].get().then(storage => {
      if (!storage || (!Object.keys(storage).length && storage.constructor === Object) || !storage.history) return true;
      return false;
    });
  },
  _get_mode() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_privsave() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.saveInPriv;
    });
  },
  _get_naming() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return 'custom';
      return storage.settings.history.naming;
    });
  },
  _get_tbbpower() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return false;
      return storage.settings.misc.tbbpower;
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
      .then(() => this.setAreas(sync));
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
      if (logs.length > _GLOBAL_SETTINGS.MAX_LOG_ENTRIES) logs.shift();
      return browser.storage.local.set({ logs: logs });
    });
  },
  _set_entry(entry) {
    return browser.storage[this.area_history].get().then(storage => {
      let history = storage.history;
      if (Object.keys(history.entries).includes(entry.name)) return this._update_entry(entry);
      history.entries[entry.name] = entry;
      return browser.storage[this.area_history].set({ history: history });
    });
  },

  _update(field, updater, area = this['area_' + field]) {
    return browser.storage[area].get().then(storage => {
        if (!storage[field]) {
          storage[field] = _COPY(_DEFAULT_STORAGE[field]);
        }
        const update = {};
        update[field] = updater.call(this, storage[field]);

        return browser.storage[area].set(update).then(() => update[field]);
      });
  }
});
