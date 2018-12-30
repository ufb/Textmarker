import { _MODULE } from './../_shared/utils'

export default new _MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas',
      'saved:entry': 'updateEntry',
      'entry:found': 'updateEntryOnFound',
      'entry:found-for-tab': 'updateEntry',
      'updated:entry': 'updateEntry'
    }
  },
  initialized: false,
  initializing: false,
  area_settings: 'sync',
  area_history: 'sync',
  entry: null,
  locked: false,

  updateEntry(entry) {
    if (entry) {
      const isArr = Array.isArray(entry);
      const currentEntry = !!this.entry;

      this.locked = this.locked || isArr;

      if (!this.locked || isArr) {
        this.entry = entry;
      }
      else if (this.locked && !isArr) {
        if (this.entry) this.entry.push(entry);
        else this.entry = [entry];
      }

      if (currentEntry) this.emit('updated:stored-entry', this.entry);
      else this.emit('stored:entry', this.entry);
    }
  },
  updateEntryOnFound(entry) {
    if (entry) {
      this.updateEntry(entry);
      if (!Array.isArray(entry)) {
        this.emit('initially-stored:entry', entry);
      }
    }
  },

  storeEntry(entry) {
    if (entry) {
      this.entry = entry;
      this.emit('stored:entry', entry);
    }
  },

  setAreas() {
    return browser.storage.sync.get().then(storage => {
      if (storage && storage.sync) {
        this.area_settings = storage.sync.settings ? 'sync' : 'local';
        this.area_history = storage.sync.history ? 'sync' : 'local';
      }
    });
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
  _get_mode() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_autosave() {
    return browser.storage[this.area_settings].get().then(storage => {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.autosave;
    });
  },
  _get_settings() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings);
  },
  _get_markers() {
    return browser.storage[this.area_settings].get().then(storage => storage.settings.markers);
  }
});
