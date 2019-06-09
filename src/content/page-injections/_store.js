import { _STORE, _HASHLESS } from './../_shared/utils'

export default new _STORE({
  events: {
    ENV: {
      'toggled:sync': 'onToggledSync'
    }
  },

  env: 'injection',

  url: '',
  hashlessURL: '',

  updated: false,
  restoring: false,

  iframe: false,
  name: undefined,
  isNew: true,
  //entry: null,
  entries: {},
  locked: false,
  hashSensitive: false,
  tmid: '',
  noteColor: 'yellow',
  noteFontSize: 12,
  immut: false,
  redescribing: false,

  resume() {
    this.entries = {};
    this.name = undefined;
    this.tmid = '';
    this.isNew = true;
  },

  updateLocation() {
    this.iframe = window !== window.parent.window;
    this.url = window.document.URL;
    this.hashlessURL = _HASHLESS(this.url);
  },

  updateStatus() {
    if (!this.isNew || document.querySelector('[data-tm-id]')) return;

    return this.get('settings').then(settings => {
      const historySettings = settings ? settings.history : null;
      if (historySettings) {
        this.locked = historySettings.naming === 'mark';
        this.hashSensitive = historySettings.ignoreHash === false;
      }
      this.updated = true;
      this.emit('updated:store-status');
    });
  },

  renameEntry(entry, oldName) {
    if (this.name && this.name === oldName && !this.locked) {
      this.name = entry.name;
      if (this.entries[oldName]) {
        this.entries[entry.name] = entry;
        delete this.entries[oldName];
      }
    }
  },

  setSyncForEntry(entry) {
    if (!this.locked && this.entries[entry.name]) {
      this.entries[entry.name].synced = entry.synced;
    }
  },

  removeEntry(deletedEntry) {
    if (this.locked) return false;

    const entries = this.entries;
    for (let name in entries) {
      if (entries.hasOwnProperty(name) && name === deletedEntry) {
        delete this.entries[name];
        break;
      }
    }
    this.name = undefined;
    this.isNew = true;
  },

  addEntries(entries) {
    if (!entries) return false;

    const firstEntry = entries[0];
    const e = entries.length;

    if (!this.locked) this.name = firstEntry.name;

    for (let i = 0, entry; i < e; i++) {
      entry = entries[i];
      this.entries[entry.name] = entry;
    }
    this.isNew = false;
    this.immut = !!firstEntry.immut;
    this.hashSensitive = firstEntry.hashSensitive;
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
