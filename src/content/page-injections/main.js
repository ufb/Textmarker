import { _MODULE } from '../_shared/utils'
import _STORE from './_store'
import _RESTORER from './modules/restorer'

new _MODULE({
  events: {
    ENV: {
      'opened:sidebar': 'sendPageState',

      'failed:restoration': 'activateRetry',
      'succeeded:restoration': 'deactivateRetry',
      'update:entry?': 'deactivateRetry',

      'updated:naming-settings': 'updateStatus',
      'updated:hashopt-settings': 'updateStatus',
      'updated:entry-sync': 'setSyncForEntry',
      'updated:entry-name': 'renameEntry',
      'saved:entry': 'onSavedEntry',
      'deleted:entry': 'removeEntry',
      'resumed-on-hashchange': 'onResumed',

      // @RESTORER
      'entries:found': 'onEntriesFound',

      // respond to bug
      'injected?': 'notifyBG'
    }
  },

  retryActive: false,
  restorer: null,

  autoinit() {
    _STORE.updateLocation();
    _STORE.updateStatus();
    if (!this.iframe) {
      window.addEventListener('hashchange', this.proxy(this, this.onHashChange), false);
    }
  },

  onHashChange() {
    if (_STORE.hashSensitive) {
      this.emit('hashchange');
    }
  },
  onResumed() {
    _STORE.updateLocation();
    _STORE.isNew || _STORE.resume();

    this.emit('fetch:entries', _STORE.url);
  },
  onSavedEntry(entry) {
    const ignoreHash = !entry.hashSensitive;
    const url = ignoreHash ? _STORE.hashlessURL : _STORE.url;

    if (entry.url === url) {
      _STORE.addEntries([entry]);
    }
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
  },

  updateStatus() {
    _STORE.updateStatus();
  },
  setSyncForEntry(...args) {
    _STORE.setSyncForEntry(...args);
  },
  renameEntry(...args) {
    _STORE.renameEntry(...args);
  },
  removeEntry(...args) {
    _STORE.removeEntry(...args);
  },

  // @RESTORER
  onEntriesFound(info) {
    if (!_STORE.updated) {
      this.on('updated:store-status', this.proxy(this, this.startRestoration, info));
    } else {
      this.startRestoration(info);
    }
  },
  startRestoration(info) {
    let entries = info.entries;
    entries = Array.isArray(entries) ? entries : [entries];
    _STORE.locked = info.locked;
    if (!this.restorer) this.restorer = _RESTORER();
    _STORE.addEntries(entries);
    this.emit('set:entries', entries);
    if (info.recentlyOpenedEntry) this.updateName(entries, info.recentlyOpenedEntry);
    this.emit('restore:marks', info.entries);
  },
  updateName(entries, recentlyOpenedEntry) {
    const firstEntry = entries[0];
    const ignoreHash = !firstEntry.hashSensitive;
    const url = ignoreHash ? _STORE.hashlessURL : _STORE.url;

    if (recentlyOpenedEntry.url === url) {
      _STORE.name = recentlyOpenedEntry.name;
    }
  },

  notifyBG(sender, sendResponse) {
    sendResponse(true);
  }
});
