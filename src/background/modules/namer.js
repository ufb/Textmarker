import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'granted:save-entry': 'name'
      }
    },
    maxChars: 70,

    name(entry) {
      if (entry.name) return this.adjustName(entry.name, entry);

      _STORAGE.get('naming').then(naming => this.adjustName(null, entry, naming))
        .catch(() => this.emit('error', 'error_naming'));
    },
    adjustName(name, entry, method) {
      name = name ? name :
             method === 'title' ? entry.title :
             method === 'date' ? (new Date(entry.first).toLocaleString()) : '';

      name = name.substring(0, this.maxChars - 1);

      _STORAGE.get('history').then(history => {
        let counter = this.getDoubleNameCount(history);
        if (counter) name += ' (' + (counter + 1) + ')';
        entry.name = name;
        this.emit('named:entry', entry);
      })
      .catch(() => this.emit('error', 'error_naming'));
    },
    getDoubleNameCount(history) {
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
