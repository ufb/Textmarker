import '../icons/on16.png'
import '../icons/on18.png'
import '../icons/on32.png'
import '../icons/on36.png'
import '../icons/on64.png'
import '../icons/off16.png'
import '../icons/off18.png'
import '../icons/tm48.png'

import _ERRORTRACKER from './utils'
import _STORAGE from './storage'
import './port'
import './modules/error-logging'
import './modules/injection-manager'
import _NOTIFICATIONS from './modules/notifications'
import _TABS from './modules/tabs'
import _WINDOWS from './modules/windows'
import _SIDEBARS from './modules/sidebars'
import _NAMER from './modules/namer'
import _CTM from './modules/context-menu'
//import _IDB from './modules/indexeddb'
import { _MODULE } from './utils'
import './modules/version-manager'
import './modules/store-manager'

new _MODULE({
  events: {
    ENV: {
      'imported:settings': 'toggleOnImport',
      'initialized:storage': 'start',
      'migrated:storage': 'start',
      'checked:storage': 'start',
      'toggle:addon': 'toggle'
    }
  },

  active: true,
  version: '',
  loadReason: '',

  autoinit() {
    const currentVersion = this.version = browser.runtime.getManifest().version;

    browser.runtime.onInstalled.addListener(details => {
      _STORAGE.get('version').then(version => {
        if (!version || version !== currentVersion) {
          const loadReason = this.loadReason = details.reason;
          const prevVersion = details.previousVersion || '2';
          if (loadReason && (loadReason === 'update' || loadReason === 'install')) {
            this.emit(loadReason + ':app', prevVersion, loadReason);
          } else {
            this.emit('check:storage');
          }
        }
      });
    });
    _STORAGE.get('version').then(version => {
      if (version && version === currentVersion) this.emit('check:storage');
    });
  },

  start() {
    _STORAGE.set('version', this.version);

    //_IDB();
    _NOTIFICATIONS();
    _TABS();
    _NAMER();
    _CTM();
    _WINDOWS();
    _SIDEBARS();

    _STORAGE.get('mode').then(mode => this.activate(mode))
      .catch(() => this.activate(true))
      .then(() => this.emit('started:app', this.version, this.loadReason));
  },
  activate(activate) {
    const active = this.active = activate;
    this.toggleBrowserActionIcon(active);
  },
  toggle() {
    let mode = !this.active;
    this.activate(mode);
    this.emit('toggled:addon', mode);
  },
  toggleOnImport() {
    _STORAGE.get('mode').then(mode => this.activate(mode));
  },
  toggleBrowserActionIcon(on) {
    browser.browserAction.setIcon({
      path: on ? {
        16: '../icons/on16.png',
        18: '../icons/on18.png',
        32: '../icons/on32.png'
      } : {
        16: '../icons/off16.png',
        18: '../icons/off18.png',
        32: '../icons/off32.png'
      }
    });
  }
});
