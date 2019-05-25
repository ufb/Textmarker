import { _MODULE, _HASHLESS } from '../_shared/utils'
import _STORE from './_store'
import _RESTORER from './modules/restorer'

new _MODULE({
  events: {
    ENV: {
      'saved:entry': 'updateEntryStorage',
      'resumed-on-hashchange': 'setPageParams',
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
    this.setPageParams();
  },

  setPageParams() {
    _STORE.iframe = window !== window.parent.window;
    _STORE.url = window.document.URL;
    _STORE.hashlessURL = _HASHLESS(_STORE.url);
    console.log('set page params', _STORE);
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
  onEntriesFound(info) {console.log('on found', info);
    _RESTORER();
    this.updateEntryStorage(info.entries);console.log('undated entry storage');
    if (info.recentlyOpenedEntry) this.updateNameStorage(info.entries, info.recentlyOpenedEntry);console.log('updated name storage');
    this.emit('restore:marks', info.entries);
  },
  updateEntryStorage(entries) {
    entries = Array.isArray(entries) ? entries : [entries];
    _STORE.addEntries(entries);
    this.emit('set:entries', entries);
  },
  updateNameStorage(entries, recentlyOpenedEntry) {
    const firstEntry = entries[0];
    const ignoreHash = !firstEntry.hashSensitive;
    const url = ignoreHash ? _STORE.hashlessURL : _STORE.url;

    if (recentlyOpenedEntry.url === url) {
      _STORE.name = recentlyOpenedEntry.name;
    }
  }
});
