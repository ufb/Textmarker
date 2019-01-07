import { _MODULE } from './../_shared/utils'

export default new _MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas',
      'updated:naming-settings': 'updateLockedStatus',
      'updated:entry-sync': 'setSyncForEntry',
      'updated:entry-name': 'renameEntry'
    }
  },
  initialized: false,
  initializing: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_entry: 'sync',

  iframe: false,
  name: undefined,
  isNew: true,
  entry: null,
  locked: false,
  tmid: '',
  noteColor: 'yellow',
  redescribing: false,

  autoinit() {
    this.updateLockedStatus();
  },

  updateLockedStatus() {
    if (!this.isNew || document.querySelector('[data-tm-id]')) return;//show notification
    this.get('naming').then(naming => this.locked = (naming === 'mark'));
  },

  setAreas() {
    return browser.storage.sync.get().then(storage => {
      if (storage && storage.sync) {
        this.area_settings = storage.sync.settings ? 'sync' : 'local';
        this.area_history = storage.sync.history ? 'sync' : 'local';
      }
    });
  },

  renameEntry(entry, oldName) {
    if (this.name && this.name === oldName) {
      this.name = entry.name;
      if (this.entry) this.entry.name = entry.name;
    }
  },

  setSyncForEntry(entry) {
    if (this.name && this.name === entry.name && this.entry) {
      this.entry.synced = entry.synced;
    }
  },

  get(field = 'storage') {
    if (this.initializing) {
      return (new Promise(r => window.setTimeout(() => r(this.get(field)), 10)));
    }
    const meth = this['_get_' + field];
    if (!meth) throw('field ' + field + ' doesn\'t exist');

    if (!this.initialized) {
      this.initializing = true;
      this.initialized = true;
      return this.setAreas().then(() => {
        this.initializing = false;
        return this['_get_' + field]();
      });
    }
    return this['_get_' + field]();
  },

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
  },
  _get_settings() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings);
  },
  _get_bmicon() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.bmicon;
    });
  },
  _get_noteicon() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteicon;
    });
  },
  _get_noteonclick() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteonclick;
    });
  },
  _get_notetransp() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return false;
      return storage.settings.misc.notetransp;
    });
  },
  _get_tmuipos() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.tmuipos;
    });
  },
  _get_autosave() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.autosave;
    });
  },
  _get_immut() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.immut;
    });
  },
  _get_progressbar() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.progressbar;
    });
  },
  _get_markers() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings.markers);
  },
  _get_shortcuts() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings.shortcuts);
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
  }
});
