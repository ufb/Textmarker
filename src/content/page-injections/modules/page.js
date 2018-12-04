import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function() {
  return new _DOMMODULE({
    el: window.document,
    addListenersManually: true,
    events: {
      ENV: {
        'started:app': 'checkURL',
        'toggled:addon': 'power',
        'deleted:entry': 'unset',
        'saved:entry': 'update',
        'opened:sidebar': 'sendPageState',
        'failed:restoration': 'activateRetry',
        'succeeded:restoration': 'deactivateRetry',
        'update:entry?': 'deactivateRetry'
      },
      DOM: {
        keydown: {
          '*': 'delegate'
        },
        selectionchange: {
          '*': 'onSelectionChange'
        }
      }
    },

    url: '',
    active: true,
    set: false,
    initialized: false,
    retryActive: false,
    shiftSensitiveKeys: [13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 171, 173],
    keyCodeMap: {
      '13': 'Enter',
      '48': '0', '49': '1', '50': '2', '51': '3', '52': '4',
      '53': '5', '54': '6', '55': '7', '56': '8', '57': '9',
      '171': '+', '173': '-'
    },

    autoinit() {

      //_READER = this.readerMode = this.isReaderMode();
      this.setup();
    },

    power(on) {
      if (on) this.addListeners();

      else this.removeListeners();

      this.active = on;
      this.setup();
    },
    setup() {
      _STORE.get('mode').then(active => {
        this.active = active;

        if (this.set || !active || this.isPdf()) return false;

        if (window.document.readyState !== 'complete')
          return this.addListener('load', () => this.setup(), window);

        _STORE.iframe = this.isIFrame();

        this.setURL();
        this.checkURL();
        this.removeListeners();

        if (active) this.addListeners();

        this.set = true;
      });
    },
    setURL() {
      const url = window.document.URL,
            hash = window.document.location.hash,
            hashIdx = url.indexOf(hash) || url.length;

      this.url = url.substr(0, hashIdx);
    },
    isPdf() {
      return window.location.pathname.split('.').pop().substr(0, 3) === 'pdf';
    },
    isIFrame() {
      return window !== window.parent.window;
    },
    /*isReaderMode() {
      return this.url.split('?')[0] === 'about:reader';
    },*/
    isEditable(el) {
      const name = el.tagName;

      return (name === 'TEXTAREA' || name === 'INPUT' || el.contentEditable === 'true');
    },
    delegate(e) {
      let key = e.key.toLowerCase();
      const keyCode = e.keyCode,
          modKey = (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey),
          arrowKeys = ['arrowdown', 'arrowup'],
          lockedActions = ['b', 's', 'y', 'z', 'd'],
          functionKeys = lockedActions.concat(arrowKeys),
          defaultMarkers = ['m', '2', '3'];

      if (_STORE.locked && lockedActions.includes(key)) return true;

      if (this.shiftSensitiveKeys.includes(keyCode)) key = this.keyCodeMap[keyCode];

      if (!functionKeys.includes(key) && window.getSelection().isCollapsed) return true;

      if (this.isEditable(e.target)) return true;

      _STORE.get('settings').then(settings => {

        if (!settings) return true;

        const origKey = key;
        const markers = settings.markers;
        const shortcuts = settings.shortcuts;
        const isMarkerKey = markers[key];
        const isCustomMarkerKey = isMarkerKey && !defaultMarkers.includes(key);
        if (isCustomMarkerKey) key = 'cm';
        const setting = shortcuts[key];

        if (!setting) return true;

        if (!modKey) {
          if (key === 'w' && !setting[0] && setting[1]) {
            this.lookup();
          }
          else if (isMarkerKey && !setting[0] && setting[1]) {
            this.emit('pressed:marker-key', e, origKey);
          }
        } else {
          if (!setting[1]) return true;

          const shortcut = setting[0].split('-');
          const s1 = shortcut[0];
          const s2 = shortcut[1];

          if (!e[s1] || (s2 && !e[s2])) return true;

          if (key === 'w') this.lookup();

          else if (isMarkerKey) {
            this.emit('pressed:marker-key', e, origKey);
          }
          else this.emit('pressed:hotkey', key)
        }
      });
    },
    lookup() {
      const selectedText = window.getSelection().toString();

      if (selectedText) this.emit('lookup:word', selectedText);
    },
    checkURL() {
      this.request('check:url', this.url)
        .then(data => {
          if (data) this.onUrlFound(this.filterEntries(data.entries), data.recentlyOpenedEntry);
        });
    },
    unset(name) {
      if (_STORE.name && _STORE.name === name) {
        _STORE.name = undefined;
        _STORE.entry = null;
        _STORE.isNew = true;
      }
    },
    update(entries, force) {
      force = force === true ? true : false;
      entries = Array.isArray(entries) ? entries : [entries];
      let entry = entries[0];

      if (force || entry.url.split('#')[0] === this.url) {
        if (!_STORE.locked) _STORE.name = entry.name;
        _STORE.isNew = false;
        _STORE.entry = entry;
        if (force) this.emit('set:entries', entries);
      }
    },
    onHotkey(key) {
      if (key === 'w') this.lookup();
    },
    onUrlFound(entries, recentlyOpenedEntry) {
      this.update(entries, true);

      if (this.active && !this.initialized && !document.querySelector('[data-tm-id]')) {
        this.initialized = true;

        if (recentlyOpenedEntry && recentlyOpenedEntry.url.split('#')[0] === this.url) {
          _STORE.name = recentlyOpenedEntry.name;
        }
        /*if (_READER)
          window.setTimeout(() => this.emit('restore:marks', name), 500);*/
        //else
        this.emit('restore:marks', entries);
      }
    },
    filterEntries(entries) {
      let lockedEntries = [],
          l = entries.length,
          lockedEntriesExist = false,
          nonLockedEntries = 0;

      for (let i = 0, entry; i < l; i++) {
        entry = entries[i];
        if (entry.locked) {
          lockedEntries.push(entry);
          lockedEntriesExist = true;
        } else {
          lockedEntries = [];
          entries = [entry];
          nonLockedEntries++;
        }
      }
      if (lockedEntriesExist && nonLockedEntries) {
        this.emit('warn:mixed-entry-types');
      }
      else if (nonLockedEntries > 1) {
        this.emit('warn:multiple-unlocked-entries');
      }

      if (lockedEntries.length) {
        _STORE.locked = true;
        entries = lockedEntries.sort((a, b) => (new Date(a.last)) - (new Date(b.last)));
      } else {
        _STORE.locked = false;
      }

      return entries;
    },
    onSelectionChange(e) {
      this.emit('changed:selection', !window.getSelection().isCollapsed);
    },
    activateRetry() {
      this.retryActive = true;
    },
    deactivateRetry() {
      this.retryActive = false;
    },
    sendPageState(info) {
      this.emit('page-state', {
        selection: !window.getSelection().isCollapsed,
        bookmark: !!document.getElementById('textmarker-bookmark-anchor'),
        retryActive: this.retryActive
      }, info);
    }
  });
}
