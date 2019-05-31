import { _MODULE, _HASHLESS } from '../_shared/utils'
import _STORE from './_store'
import _RESTORER from './modules/restorer'

new _MODULE({
  events: {
    ENV: {
      'saved:entry': 'onSavedEntry',
      'resumed-on-hashchange': 'updateStore',
      'opened:sidebar': 'sendPageState',
      'failed:restoration': 'activateRetry',
      'succeeded:restoration': 'deactivateRetry',
      'update:entry?': 'deactivateRetry',

      // @RESTORER
      'entries:found': 'onEntriesFound'
    }
  },

  retryActive: false,

  autoinit() {
    this.updateStore();
  },

  updateStore() {
    _STORE.iframe = window !== window.parent.window;
    _STORE.url = window.document.URL;
    _STORE.hashlessURL = _HASHLESS(_STORE.url);
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
    _RESTORER();
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
  }
});
