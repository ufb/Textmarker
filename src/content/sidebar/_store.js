import { _STORE } from './../_shared/utils'

export default new _STORE({
  events: {
    ENV: {
      'toggled:sync': 'init',
      'saved:entry': 'updateEntry',
      'entry:found': 'updateEntryOnFound',
      'entry:found-for-tab': 'updateEntry',
      'entry:deleted-for-tab': 'resume'
    }
  },

  entry: null,
  locked: false,

  updateEntry(entry) {
    if (entry) {
      const isArr = Array.isArray(entry);
      const currentEntry = !!this.entry;

      this.locked = this.locked || isArr || entry.locked;

      if (!this.locked || isArr) {
        this.entry = entry;
      }
      else if (this.locked && !isArr) {
        if (this.entry && Array.isArray(this.entry)) this.entry.push(entry);
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

  resume() {
    this.entry = null;
    this.locked = false;
    this.emit('removed:entry');
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
  },
  _get_pagenotes() {
    return browser.storage[this.area_settings].get().then(storage => storage.pagenotes || null);
  }
});
