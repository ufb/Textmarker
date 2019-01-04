import _STORAGE from './../storage'
import { _MODULE } from './../utils'
import _GLOBAL_SETTINGS from './../../data/global-settings'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'granted:save-entry': 'name',
        'rename:entry': 'rename'
      }
    },

    name(entry) {
      if (entry.name) return this.adjustName(entry.name, entry);

      _STORAGE.get('naming').then(naming => this.adjustName(null, entry, naming))
        .catch(() => this.emit('error', 'error_naming'));
    },
    rename(oldName, newName, area) {
      newName = newName.substring(0, _GLOBAL_SETTINGS.MAX_ENTRY_NAME_CHARS - 1);

      _STORAGE.get('history').then(history => {
        let counter = this.getDoubleNameCount(history, newName);
        if (counter) newName += ' (' + (counter + 1) + ')';
        this.emit('renamed:entry', oldName, newName, area);
      })
      .catch(() => this.emit('error', 'error_naming'));
    },
    adjustName(name, entry, method) {
      name = name ? name :
             method === 'title' ? entry.title.trim() ? entry.title.trim() : entry.url :
             method === 'date' ? (new Date(entry.first).toLocaleString()) : '';

      name = name.substring(0, _GLOBAL_SETTINGS.MAX_ENTRY_NAME_CHARS - 1);

      _STORAGE.get('history').then(history => {
        let counter = this.getDoubleNameCount(history, name);
        if (counter) name += ' (' + (counter + 1) + ')';
        entry.name = name;
        this.emit('named:entry', entry);
      })
      .catch(() => this.emit('error', 'error_naming'));
    },
    getDoubleNameCount(history, name) {
      let existingNames = Object.keys(history.entries),
          l = existingNames.length,
          counter = 0,
          checkpoint;

      while (l--) {
        checkpoint = existingNames[l];
        if (this.isDoubleName(name, checkpoint)) counter++;
      }
      return counter;
    },
    isDoubleName(name, checkpoint) {
      if (name === checkpoint) return true;

      let l = name.length,
          checkpoint_start = checkpoint.substring(0, l),
          checkpoint_end;

      if (name !== checkpoint_start) return false;

      checkpoint_end = checkpoint.substring(l, checkpoint.length);

      if (/^\s*\(\d+\)$/.test(checkpoint_end)) return true;

      return false;
    }
  });
}
