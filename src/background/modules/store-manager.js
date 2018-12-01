import _STORAGE from './../storage'
import { _MODULE } from './../utils'

new _MODULE({
  events: {
    ENV: {
      'started:app': 'registerStorageChangedHandler',
      'toggled:addon': 'saveActivationState',
      'toggle:sync': 'toggleSync',

      'change:style-setting': 'changeStyle',
      'change:autonote-setting': 'changeAutoNoteSetting',
      'change:bg-setting': 'changeBgColor',
      'toggle:shortcut-setting': 'toggleShortcutSetting',
      'change:shortcut-setting': 'changeShortcutSetting',
      'toggle:ctm-setting': 'toggleCtmSetting',
      'change:saveopt-setting': 'changeSaveOpt',
      'toggle:priv-setting': 'togglePrivSaveOpt',
      'change:namingopt-setting': 'changeNamingOpt',
      'toggle:noteopt-setting': 'toggleNoteOpt',
      'toggle:quickbuttonopt-setting': 'toggleQuickbuttonOpt',
      'toggle:notification-setting': 'toggleNotificationOpt',
      'toggle:misc-setting': 'changeMiscSetting',
      'change:misc-setting': 'changeMiscSetting',
      'change:sort-setting': 'changeSortOpt',
      'change:view-setting': 'changeViewOpt',
      'change:custom-search-setting': 'changeCustomSearch',
      'changed:per-page-count': 'changeCountPerPage',

      'remove:custom-marker': 'removeCustomMarker',
      'add:custom-marker': 'addCustomMarker',

      'named:entry': 'saveEntry',
      'granted:update-entry': 'updateEntry',
      'delete:entries': 'deleteEntries',
      'finished:restoration': 'updateEntryOnRestoration',
      'clean:entries': 'cleanEntries',
      'sync:entry': 'syncEntry',
      'tag:entries': 'tagEntries',
      'remove:tag': 'removeTag',
      'add:tag': 'addTag',

      'toggled:sidebar-tab': 'changeSBSettings'
    }
  },
  updateOnChangedSync: false,

  saveActivationState(active) {
    _STORAGE.update('settings', settings => { settings.addon.active = active; return settings; });
  },

  toggleSync(field, val) {
    _STORAGE.update('sync', sync => { sync[field] = val; return sync; })
      .catch(() => {
        this.emit('error', 'error_toggle_sync');
        this.emit('failed:toggle-sync', field);
      })
      .then(() => this.emit('toggled:sync toggled:sync-' + field, field, val))
  },

  updateSettings(updater, setting, error) {
    _STORAGE.update('settings', updater)
      .then(() => this.emit('updated:' + setting + '-settings'))
      .catch(() => { if (error) this.emit('error', error); });
  },

  addCustomMarker(key, style) {
    this.updateSettings(
      settings => { settings.markers[key] =  { style }; return settings; },
      'marker',
      'error_add_marker'
    );
  },
  removeCustomMarker(key) {
    this.updateSettings(
      settings => { delete settings.markers[key]; return settings; },
      'marker',
      'error_remove_marker'
    );
  },
  changeStyle(key, style) {
    if (!key) return false;

    this.updateSettings(
      settings => { settings.markers[key].style = style; return settings; },
      'style',
      'error_save_style'
    );
  },
  changeBgColor(key, color) {
    this.updateSettings(
      settings => {
        let marker = settings.markers[key];

        if (marker) {
          let split = marker.style.split(';'),
              l = split.length, style;

          while (l--) {
            style = split[l];
            if (style.includes('background-color')) {
              settings.markers[key].style = marker.style.replace(/background-color:#.{6}/, 'background-color:' + color);
              break;
            }
          }
        }
        return settings;
      },
      'bg-color',
      'error_save_style'
    );
  },
  changeAutoNoteSetting(key, autonote) {
    this.updateSettings(
      settings => { settings.markers[key].autonote = autonote; return settings; },
      'autonote',
      'error_save_toggle_autonote'
    );
  },
  toggleShortcutSetting(key, status) {
    this.updateSettings(
      settings => { settings.shortcuts[key][1] = status; return settings; },
      'shortcut',
      'error_save__toggle_sc'
    );
  },
  changeShortcutSetting(key, value) {
    this.updateSettings(
      settings => { settings.shortcuts[key][0] = value; return settings; },
      'shortcut',
      'error_save_change_sc'
    );
  },
  changeSortOpt(value) {
    this.updateSettings(
      settings => { settings.history.sorted = value; return settings; },
      'sort'
    );
  },
  changeViewOpt(value) {
    this.updateSettings(
      settings => { settings.history.view = value; return settings; },
      'view'
    );
  },
  changeCustomSearch(values) {
    this.updateSettings(
      settings => { settings.misc.customSearch = values; return settings; },
      'custom-search',
      'error_save_change_search'
    );
  },
  changeCountPerPage(value) {
    this.updateSettings(
      settings => { settings.history.pp = value; return settings; },
      'count-per-page'
    );
  },
  toggleCtmSetting(key, value) {
    this.updateSettings(
      settings => { settings.shortcuts[key][2] = value; return settings; },
      'ctm',
      'error_save_ctm'
    );
  },
  changeSaveOpt(val) {
    this.updateSettings(
      settings => { settings.history.autosave = val; return settings; },
      'saveopt',
      'error_save_autosave'
    );
  },
  togglePrivSaveOpt(val) {
    this.updateSettings(
      settings => { settings.history.saveInPriv = val; return settings; },
      'privsaveopt',
      'error_save_priv'
    );
  },
  changeNamingOpt(val) {
    this.updateSettings(
      settings => { settings.history.naming = val; return settings; },
      'naming',
      'error_save_naming'
    );
  },
  toggleNoteOpt(val) {
    this.updateSettings(
      settings => { settings.history.saveNote = val; return settings; },
      'noteopt',
      'error_save_notify'
    );
  },
  toggleQuickbuttonOpt(prop, val) {
    this.updateSettings(
      settings => { settings.history[prop] = val; return settings; },
      'quickbutton',
      'error_save_download'
    );
  },
  toggleNotificationOpt(prop, val) {
    this.updateSettings(
      settings => { settings.misc[prop] = val; return settings; },
      'notification',
      'error_save_notify'
    );
  },
  changeMiscSetting(prop, val) {
    this.updateSettings(
      settings => { settings.misc[prop] = val; return settings; },
      'misc',
      'error_save_bmicon'
    );
  },
  changeSBSettings(tab, unfolded) {
    _STORAGE.update('settings', settings => { settings.sb.tabs[tab].unfolded = unfolded; return settings; });
  },
  cleanEntries(names, area) {
    if (!names.length) return;

    area = typeof area === 'string' ? area : 'sync';

    let names_local = [];

    return _STORAGE.update('history', history => {
      let i = names.length, name;
      while (i--) {
        name = names[i];
        if (history.entries[name]) history.entries[name].lost.length = 0;
        else names_local.push(name);
      }
      return history;
    }, area)
    .then(() => { if (area === 'local') { this.emit('cleaned:entries'); }})
    .catch(() => this.emit('error', 'error_clean_history'))
    .then(() => { if (area === 'sync' && names_local.length) { this.cleanEntries(names_local, 'local'); }});
  },
  saveEntry(entry) {
    entry.lost = [];
    _STORAGE.set('entry', entry)
      .then(() => this.emit('saved:entry', entry))
      .catch(() => this.emit('failed:save-entry', 'error_save_entry'));
  },
  updateEntry(entry) {
    _STORAGE.update('history', history => {
      let name = entry.name,
          currentEntry = history.entries[name],
          lost = currentEntry.lost,
          receivedCompleteEntry = !!entry.url;

      if (receivedCompleteEntry) {
        history.entries[name] = entry;
      } else {
        for (let e in entry) {
          history.entries[name][e] = entry[e];
        }
      }
      history.entries[name].lost = lost || [];

      return history;
    }, entry.synced ? 'sync' : 'local')
      .then(() => this.emit('updated:entry', entry))
      .catch(() => this.emit('failed:update-entry', 'error_update_entry'));
  },
  deleteEntries(names, area) {
    if (!names.length) return;

    area = typeof area === 'string' ? area : 'sync';

    let names_local = [];

    return _STORAGE.update('history', history => {
      let name, i;

      while (names.length) {
        name = names.pop();
        i = Object.keys(history.entries).indexOf(name);

        delete history.entries[name];
        //if (i !== -1) history.order.splice(i, 1);
        //else names_local.push(name);
        if (i === -1) names_local.push(name);

        this.emit('deleted:entry', name);
      }
      return history;
    }, area)
      .catch(() => this.emit('failed:delete-entries', 'error_del_entry'))
      .then(() => { if (area === 'sync' && names_local.length) { this.deleteEntries(names_local, 'local'); }})
      .then(() => this.emit('deleted:entries'));
  },
  updateEntryOnRestoration(entryName, restoredMarks, lostMarks, area) {
    _STORAGE.update('history', history => {
	    const oldLostMarks = history.entries[entryName].lost || [];
      const restoredMarksIDs = [];
      const oldLostMarksIDs = [];

      history.entries[entryName].marks = restoredMarks;

      restoredMarks.forEach(mark => restoredMarksIDs.push(mark.id));

      let l = oldLostMarks.length, id;

      while (l--) {
        id = oldLostMarks[l].id;
        if (restoredMarksIDs.includes(id)) {
          oldLostMarks.splice(l, 1);
        } else {
          oldLostMarksIDs.push(id);
        }
      }

      lostMarks.forEach(mark => {
        if (!oldLostMarksIDs.includes(mark.id)) oldLostMarks.push(mark);
      });

      return history;
    }, area);
  },
  syncEntry(name, val) {
    _STORAGE.sync(name, val)
      .then(() => this.emit('synced:entry'))
      .catch(() => this.emit('failed:sync-entry', name));
  },
  tagEntries(names, tag) {
    _STORAGE.update('history', history => {
      const entries = history.entries;
      names.sync.forEach(name => this.addTagToEntry(entries[name], tag));
      return history;
    }, 'sync')
      .then(() => {
        return _STORAGE.update('history', history => {
          const entries = history.entries;
          names.local.forEach(name => this.addTagToEntry(entries[name], tag));
          return history;
        }, 'local');
      });
  },
  removeTag(tag, entry) {
    const area = entry.synced ? 'sync' : 'local';
    _STORAGE.update('history', history => {
      const storedEntry = history.entries[entry.name];
      const rx = new RegExp('^'+tag+'$|^'+tag+'\\s|\\s'+tag+'\\s|\\s'+tag+'$');
      if (storedEntry.tag) {
        storedEntry.tag = storedEntry.tag
          .replace(rx, ' ')
          .replace(/^\s|\s$/, '')
          .replace(/\s{2,}/, ' ');
      }
      return history;
    }, area);
  },
  addTag(tag, entry) {
    const area = entry.synced ? 'sync' : 'local';
    _STORAGE.update('history', history => {
      this.addTagToEntry(history.entries[entry.name], tag);
      return history;
    }, area);
  },
  addTagToEntry(entry, tag) {
    if (!tag) entry.tag = '';
    else if (!entry.tag) entry.tag = tag;
    else {
      const rx = new RegExp('^'+tag+'$|^'+tag+'\\s|\\s'+tag+'\\s|\\s'+tag+'$', 'g');
      if (entry.tag.search(rx) === -1) {
        entry.tag += ' ' + tag;
      }
    }
    return entry;
  },
  registerStorageChangedHandler() {
    browser.storage.onChanged.addListener(this.proxy(this, this.onStorageChanged));
  },
  onStorageChanged(changedItem) {
    if (changedItem.settings) this.emit('updated:settings');
    if (changedItem.history) this.emit('updated:history');
  }
});
