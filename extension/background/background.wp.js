/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./background/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./background/index.js":
/*!*****************************!*\
  !*** ./background/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./background/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _storage = __webpack_require__(/*! ./storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

__webpack_require__(/*! ./port */ "./background/port.js");

__webpack_require__(/*! ./modules/error-logging */ "./background/modules/error-logging.js");

__webpack_require__(/*! ./modules/injection-manager */ "./background/modules/injection-manager.js");

var _notifications = __webpack_require__(/*! ./modules/notifications */ "./background/modules/notifications.js");

var _notifications2 = _interopRequireDefault(_notifications);

var _tabs = __webpack_require__(/*! ./modules/tabs */ "./background/modules/tabs.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _windows = __webpack_require__(/*! ./modules/windows */ "./background/modules/windows.js");

var _windows2 = _interopRequireDefault(_windows);

var _namer = __webpack_require__(/*! ./modules/namer */ "./background/modules/namer.js");

var _namer2 = _interopRequireDefault(_namer);

var _contextMenu = __webpack_require__(/*! ./modules/context-menu */ "./background/modules/context-menu.js");

var _contextMenu2 = _interopRequireDefault(_contextMenu);

__webpack_require__(/*! ./modules/version-manager */ "./background/modules/version-manager.js");

__webpack_require__(/*! ./modules/store-manager */ "./background/modules/store-manager.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
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

  autoinit: function autoinit() {
    var _this = this;

    var currentVersion = this.version = browser.runtime.getManifest().version;

    browser.runtime.onInstalled.addListener(function (details) {
      _storage2.default.get('version').then(function (version) {
        if (!version || version !== currentVersion) {
          var loadReason = _this.loadReason = details.reason;
          var prevVersion = details.previousVersion || '2';
          if (loadReason && (loadReason === 'update' || loadReason === 'install')) {
            _this.emit(loadReason + ':app', prevVersion, loadReason);
          } else {
            _this.emit('check:storage');
          }
        }
      });
    });
    _storage2.default.get('version').then(function (version) {
      if (version && version === currentVersion) _this.emit('check:storage');
    });
  },
  start: function start() {
    var _this2 = this;

    _storage2.default.set('version', this.version);

    //_IDB();
    (0, _notifications2.default)();
    (0, _tabs2.default)();
    (0, _namer2.default)();
    (0, _contextMenu2.default)();
    (0, _windows2.default)();

    _storage2.default.get('mode').then(function (mode) {
      return _this2.activate(mode);
    }).catch(function () {
      return _this2.activate(true);
    }).then(function () {
      return _this2.emit('started:app', _this2.version, _this2.loadReason);
    });
  },
  activate: function activate(_activate) {
    var active = this.active = _activate;
    this.toggleBrowserActionIcon(active);
  },
  toggle: function toggle() {
    var mode = !this.active;
    this.activate(mode);
    this.emit('toggled:addon', mode);
  },
  toggleOnImport: function toggleOnImport() {
    var _this3 = this;

    _storage2.default.get('mode').then(function (mode) {
      return _this3.activate(mode);
    });
  },
  toggleBrowserActionIcon: function toggleBrowserActionIcon(on) {
    browser.browserAction.setIcon({
      path: on ? {
        16: './../content/icons/on16.png',
        18: './../content/icons/on18.png',
        32: './../content/icons/on32.png'
      } : {
        16: './../content/icons/off16.png',
        18: './../content/icons/off18.png',
        32: './../content/icons/off32.png'
      }
    });
  }
});
//import _IDB from './modules/indexeddb'

/***/ }),

/***/ "./background/modules/context-menu.js":
/*!********************************************!*\
  !*** ./background/modules/context-menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'toggled:addon': 'toggle',
        'updated:ctm-settings': 'update'
      }
    },

    items: {
      m: { contexts: ['selection'] },
      w: { contexts: ['selection'] },
      d: { contexts: ['page'] },
      b: { contexts: ['page'] },
      '-b': { contexts: ['page'] },
      n: { contexts: ['page'] }
    },
    created: [],

    autoinit: function autoinit() {
      var _this = this;

      var item = void 0;
      for (var i in this.items) {
        item = this.items[i];
        item.id = i;
        item.title = browser.i18n.getMessage('ctx_' + (i === '-b' ? 'db' : i));
        item.onclick = function (infos, tab) {
          return _this.onClick(infos, tab);
        };
      }
      this.update();
    },
    create: function create(id) {
      if (!this.created.includes(id)) {
        browser.menus.create(this.items[id]);
        this.created.push(id);
      }
    },
    remove: function remove(id) {
      if (this.created.includes(id)) {
        browser.menus.remove(id);
        this.created.splice(this.created.indexOf(id), 1);
      }
    },
    removeAll: function removeAll() {
      if (this.created.length) {
        browser.menus.removeAll();
        this.created = [];
      }
    },
    toggle: function toggle(on) {
      if (on) this.update();else this.removeAll();
    },
    update: function update() {
      var _this2 = this;

      var created = this.created;
      _storage2.default.get('shortcuts').then(function (shortcuts) {
        for (var i in _this2.items) {
          if (shortcuts[i][2]) _this2.create(i);else _this2.remove(i);
        }
      });
    },
    onClick: function onClick(infos, tab) {
      var id = infos.menuItemId;
      if (id === 'w') this.emit('lookup:word', infos.selectionText);else this.emit('ctx:' + id, null, null, { tab: tab.id });
    }
  });
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./background/modules/error-logging.js":
/*!*********************************************!*\
  !*** ./background/modules/error-logging.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

var _logKeys = __webpack_require__(/*! ./../../data/log-keys */ "./data/log-keys.js");

var _logKeys2 = _interopRequireDefault(_logKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'error': 'log',
      'warning': 'log',
      'failed:save-entry': 'log',
      'failed:update-entry': 'log',
      'failed:delete-entry': 'log',
      'failed:restoration': 'onFailedRestoration',
      'failed:pbm': 'onFailedPBM',
      'failed:open-tab': 'onOpenTabFailure',
      'error:import': 'log',
      'error:browser-console': 'log',
      'clear:logs': 'clear'
    }
  },

  log: function log(error) {
    var _this = this;

    var log = void 0;
    if (error.time) {
      log = [error.time, error.message + ' [' + error.location + ']'];
    } else {
      log = [new Date().getTime(), _logKeys2.default[error]];
    }
    _storage2.default.set('log', log).then(function () {
      return _this.emit('updated:logs logged:error', log);
    });
  },
  clear: function clear() {
    var _this2 = this;

    _storage2.default.set('log', { clear: true }).then(function () {
      return _this2.emit('updated:logs');
    });
  },
  onFailedRestoration: function onFailedRestoration() {
    this.log('note_restoration_failure');
  },
  onOpenTabFailure: function onOpenTabFailure() {
    this.log('note_url');
  },
  onFailedPBM: function onFailedPBM() {
    this.log('note_pbm');
  }
});

/***/ }),

/***/ "./background/modules/injection-manager.js":
/*!*************************************************!*\
  !*** ./background/modules/injection-manager.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'check:url': 'checkUrl',
      'save:entry?': 'onSaveNewRequest',
      'update:entry?': 'onUpdateRequest',
      'name:entry?': 'onNamingRequest'
    }
  },
  checkUrl: function checkUrl(url, sender, sendResponse) {
    var _this = this;

    _storage2.default.get('history').then(function (history) {
      var entries = history.entries,
          entry = void 0;
      for (var e in entries) {
        entry = entries[e];
        if (url === _this.getHashlessURL(entry.url)) {
          sendResponse(entry);
          break;
        }
      }
    });
  },
  onNamingRequest: function onNamingRequest(sender, sendResponse) {
    var _this2 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      var priv = windowInfo.incognito;
      if (priv) _this2.emit('failed:pbm');
      if (!priv) sendResponse(!priv);else {
        _storage2.default.get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this2.emit('failed:pbm');else sendResponse(saveInPriv);
        });
      }
    });
  },
  onSaveNewRequest: function onSaveNewRequest(entry) {
    var _this3 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this3.emit('granted:save-entry', entry);else {
        _storage2.default.get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this3.emit('failed:pbm');else _this3.emit('granted:save-entry', entry);
        });
      }
    });
  },
  onUpdateRequest: function onUpdateRequest(entry) {
    var _this4 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this4.emit('granted:update-entry', entry);else {
        _storage2.default.get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this4.emit('failed:pbm');else _this4.emit('granted:update-entry', entry);
        });
      }
    });
  },
  getHashlessURL: function getHashlessURL(url) {
    var h = url.lastIndexOf('#');
    if (h === -1) return url;else return url.substr(0, h);
  }
});

/***/ }),

/***/ "./background/modules/namer.js":
/*!*************************************!*\
  !*** ./background/modules/namer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'granted:save-entry': 'name'
      }
    },
    maxChars: 70,

    name: function name(entry) {
      var _this = this;

      if (entry.name) return this.adjustName(entry.name, entry);

      _storage2.default.get('naming').then(function (naming) {
        return _this.adjustName(null, entry, naming);
      }).catch(function () {
        return _this.emit('error', 'error_naming');
      });
    },
    adjustName: function adjustName(name, entry, method) {
      var _this2 = this;

      name = name ? name : method === 'title' ? entry.title : method === 'date' ? new Date(entry.first).toLocaleString() : '';

      name = name.substring(0, this.maxChars - 1);

      _storage2.default.get('history').then(function (history) {
        var counter = _this2.getDoubleNameCount(history);
        if (counter) name += ' (' + (counter + 1) + ')';
        entry.name = name;
        _this2.emit('named:entry', entry);
      }).catch(function () {
        return _this2.emit('error', 'error_naming');
      });
    },
    getDoubleNameCount: function getDoubleNameCount(history) {
      var existingNames = history.order,
          l = existingNames.length,
          counter = 0,
          checkpoint = void 0;

      while (l--) {
        checkpoint = existingNames[l];
        if (this.isDoubleName(name, checkpoint)) counter++;
      }
      return counter;
    },
    isDoubleName: function isDoubleName(name, checkpoint) {
      if (name === checkpoint) return true;

      var l = name.length,
          checkpoint_start = checkpoint.substring(0, l),
          checkpoint_end = void 0;

      if (name !== checkpoint_start) return false;

      checkpoint_end = checkpoint.substring(l, checkpoint.length);

      if (/^\s*\(\d+\)$/.test(checkpoint_end)) return true;

      return false;
    }
  });
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./background/modules/notifications.js":
/*!*********************************************!*\
  !*** ./background/modules/notifications.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'saved:entry': 'onSavedEntry',
        'failed:save-entry': 'onSaveError',
        'failed:update-entry': 'onSaveError',
        'failed:delete-entries': 'onDeleteError',
        'failed:open-tab': 'onOpenTabFailure',
        'updated:entry': 'onUpdatedEntry',
        'failed:restoration': 'onFailedRestoration',
        'succeeded:restoration': 'onSuccessfulRestoration',
        'failed:pbm': 'onFailedPBM',
        'failed:import': 'onFailedImport',
        'error:import': 'onImportError',
        'imported:storage': 'onImportSuccess',
        'error': 'onError'
      }
    },

    notify: function notify(condition, message, type) {
      _storage2.default.get('settings').then(function (settings) {
        if (condition(settings)) {
          browser.notifications.create({
            type: 'basic',
            title: 'Textmarker: ' + browser.i18n.getMessage(type),
            message: message,
            iconUrl: browser.extension.getURL('content/icons/tm48.png')
          });
        }
      });
    },
    onSavedEntry: function onSavedEntry() {
      this.notify(function (settings) {
        return settings.history.saveNote;
      }, browser.i18n.getMessage('note_saved_entry'), 'success');
    },
    onFailedPBM: function onFailedPBM() {
      this.notify(function (settings) {
        return settings.misc.pbmNote;
      }, browser.i18n.getMessage('note_pbm'), 'error');
    },
    onOpenTabFailure: function onOpenTabFailure() {
      this.notify(function (settings) {
        return true;
      }, browser.i18n.getMessage('note_url'), 'error');
    },
    onFailedImport: function onFailedImport(error1, error2) {
      var errMessage1 = browser.i18n.getMessage(error1);
      var errMessage2 = error2 ? '\n\n' + browser.i18n.getMessage(error2) : '';
      this.notify(function (settings) {
        return true;
      }, browser.i18n.getMessage('note_import_failure', errMessage1 + errMessage2), 'error');
    },
    onImportError: function onImportError(error) {
      this.notify(function (settings) {
        return true;
      }, browser.i18n.getMessage('note_import_warning', browser.i18n.getMessage(error)), 'warning');
    },
    onImportSuccess: function onImportSuccess() {
      this.notify(function (settings) {
        return true;
      }, browser.i18n.getMessage('note_import_success'), 'success');
    },
    onUpdatedEntry: function onUpdatedEntry() {
      this.notify(function (settings) {
        return settings.misc.changedNote;
      }, browser.i18n.getMessage('note_updated_entry'), 'success');
    },
    onSuccessfulRestoration: function onSuccessfulRestoration() {
      this.notify(function (settings) {
        return settings.misc.successNote;
      }, browser.i18n.getMessage('note_restoration_success'), 'success');
    },
    onFailedRestoration: function onFailedRestoration() {
      this.notify(function (settings) {
        return settings.misc.failureNote;
      }, browser.i18n.getMessage('note_restoration_failure'), 'error');
    },
    onSaveError: function onSaveError(error) {
      this.notify(function (settings) {
        return settings.history.saveNote;
      }, browser.i18n.getMessage('note_save_failure', browser.i18n.getMessage(error)), 'error');
    },
    onDeleteError: function onDeleteError(error) {
      this.notify(function (settings) {
        return settings.misc.errorNote;
      }, browser.i18n.getMessage('note_error', browser.i18n.getMessage(error)), 'error');
    },
    onError: function onError(error) {
      this.notify(function (settings) {
        return settings.misc.errorNote;
      }, browser.i18n.getMessage('note_error', browser.i18n.getMessage(error)), 'error');
    }
  });
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./background/modules/store-manager.js":
/*!*********************************************!*\
  !*** ./background/modules/store-manager.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'registerStorageChangedHandler',
      'toggled:addon': 'saveActivationState',
      'toggle:sync': 'toggleSync',

      'change:style-setting': 'changeStyle',
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
      'sidebar:toggle-autosave': 'changeSaveOpt',

      'remove:custom-marker': 'removeCustomMarker',
      'add:custom-marker': 'addCustomMarker',

      'named:entry': 'saveEntry',
      'granted:update-entry': 'updateEntry',
      'delete:entries': 'deleteEntries',
      'finished:restoration': 'updateEntryOnRestoration',
      'clean:entries': 'cleanEntries',
      'sync:entry': 'syncEntry',
      'tag:entries': 'tagEntries'
    }
  },
  updateOnChangedSync: false,

  saveActivationState: function saveActivationState(active) {
    _storage2.default.update('settings', function (settings) {
      settings.addon.active = active;return settings;
    });
  },
  toggleSync: function toggleSync(field, val) {
    var _this = this;

    _storage2.default.update('sync', function (sync) {
      sync[field] = val;return sync;
    }).catch(function () {
      _this.emit('error', 'error_toggle_sync');
      _this.emit('failed:toggle-sync', field);
    }).then(function () {
      return _this.emit('toggled:sync toggled:sync-' + field, field, val);
    });
  },
  updateSettings: function updateSettings(updater, setting, error) {
    var _this2 = this;

    _storage2.default.update('settings', updater).then(function () {
      return _this2.emit('updated:' + setting + '-settings');
    }).catch(function () {
      if (error) _this2.emit('error', error);
    });
  },
  addCustomMarker: function addCustomMarker(key, style) {
    this.updateSettings(function (settings) {
      settings.markers[key] = style;return settings;
    }, 'marker', 'error_add_marker');
  },
  removeCustomMarker: function removeCustomMarker(key) {
    this.updateSettings(function (settings) {
      delete settings.markers[key];return settings;
    }, 'marker', 'error_remove_marker');
  },
  changeStyle: function changeStyle(key, style) {
    if (!key) return false;

    this.updateSettings(function (settings) {
      settings.markers[key] = style;return settings;
    }, 'style', 'error_save_style');
  },
  changeBgColor: function changeBgColor(key, color) {
    this.updateSettings(function (settings) {
      var marker = settings.markers[key];

      if (marker) {
        var split = marker.split(';'),
            l = split.length,
            style = void 0;

        while (l--) {
          style = split[l];
          if (style.includes('background-color')) {
            settings.markers[key] = marker.replace(/background-color:#.{6}/, 'background-color:' + color);
            break;
          }
        }
      }
      return settings;
    }, 'bg-color', 'error_save_style');
  },
  toggleShortcutSetting: function toggleShortcutSetting(key, status) {
    this.updateSettings(function (settings) {
      settings.shortcuts[key][1] = status;return settings;
    }, 'shortcut', 'error_save__toggle_sc');
  },
  changeShortcutSetting: function changeShortcutSetting(key, value) {
    this.updateSettings(function (settings) {
      settings.shortcuts[key][0] = value;return settings;
    }, 'shortcut', 'error_save_change_sc');
  },
  changeSortOpt: function changeSortOpt(value) {
    this.updateSettings(function (settings) {
      settings.history.sorted = value;return settings;
    }, 'sort');
  },
  changeViewOpt: function changeViewOpt(value) {
    this.updateSettings(function (settings) {
      settings.history.view = value;return settings;
    }, 'view');
  },
  changeCustomSearch: function changeCustomSearch(values) {
    this.updateSettings(function (settings) {
      settings.misc.customSearch = values;return settings;
    }, 'custom-search', 'error_save_change_search');
  },
  changeCountPerPage: function changeCountPerPage(value) {
    this.updateSettings(function (settings) {
      settings.history.pp = value;return settings;
    }, 'count-per-page');
  },
  toggleCtmSetting: function toggleCtmSetting(key, value) {
    this.updateSettings(function (settings) {
      settings.shortcuts[key][2] = value;return settings;
    }, 'ctm', 'error_save_ctm');
  },
  changeSaveOpt: function changeSaveOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.autosave = val;return settings;
    }, 'saveopt', 'error_save_autosave');
  },
  togglePrivSaveOpt: function togglePrivSaveOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.saveInPriv = val;return settings;
    }, 'privsaveopt', 'error_save_priv');
  },
  changeNamingOpt: function changeNamingOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.naming = val;return settings;
    }, 'naming', 'error_save_naming');
  },
  toggleNoteOpt: function toggleNoteOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.saveNote = val;return settings;
    }, 'noteopt', 'error_save_notify');
  },
  toggleQuickbuttonOpt: function toggleQuickbuttonOpt(prop, val) {
    this.updateSettings(function (settings) {
      settings.history[prop] = val;return settings;
    }, 'quickbutton', 'error_save_download');
  },
  toggleNotificationOpt: function toggleNotificationOpt(prop, val) {
    this.updateSettings(function (settings) {
      settings.misc[prop] = val;return settings;
    }, 'notification', 'error_save_notify');
  },
  changeMiscSetting: function changeMiscSetting(prop, val) {
    this.updateSettings(function (settings) {
      settings.misc[prop] = val;return settings;
    }, 'misc', 'error_save_bmicon');
  },
  cleanEntries: function cleanEntries(names, area) {
    var _this3 = this;

    if (!names.length) return;

    area = typeof area === 'string' ? area : 'sync';

    var names_local = [];

    return _storage2.default.update('history', function (history) {
      var i = names.length,
          name = void 0;
      while (i--) {
        name = names[i];
        if (history.entries[name]) history.entries[name].lost.length = 0;else names_local.push(name);
      }
      return history;
    }, area).then(function () {
      if (area === 'local') {
        _this3.emit('cleaned:entries');
      }
    }).catch(function () {
      return _this3.emit('error', 'error_clean_history');
    }).then(function () {
      if (area === 'sync' && names_local.length) {
        _this3.cleanEntries(names_local, 'local');
      }
    });
  },
  saveEntry: function saveEntry(entry) {
    var _this4 = this;

    entry.lost = [];
    _storage2.default.set('entry', entry).then(function () {
      return _this4.emit('saved:entry', entry);
    }).catch(function () {
      return _this4.emit('failed:save-entry', 'error_save_entry');
    });
  },
  updateEntry: function updateEntry(entry) {
    var _this5 = this;

    _storage2.default.update('history', function (history) {
      var name = entry.name,
          currentEntry = history.entries[name],
          lost = currentEntry.lost;

      history.entries[name] = entry;
      history.entries[name].lost = lost || [];

      return history;
    }, entry.synced ? 'sync' : 'local').then(function () {
      return _this5.emit('updated:entry');
    }).catch(function () {
      return _this5.emit('failed:update-entry', 'error_update_entry');
    });
  },
  deleteEntries: function deleteEntries(names, area) {
    var _this6 = this;

    if (!names.length) return;

    area = typeof area === 'string' ? area : 'sync';

    var names_local = [];

    return _storage2.default.update('history', function (history) {
      var name = void 0,
          i = void 0;

      while (names.length) {
        name = names.pop();
        i = history.order.indexOf(name);

        delete history.entries[name];
        if (i !== -1) history.order.splice(i, 1);else names_local.push(name);

        _this6.emit('deleted:entry', name);
      }
      return history;
    }, area).catch(function () {
      return _this6.emit('failed:delete-entries', 'error_del_entry');
    }).then(function () {
      if (area === 'sync' && names_local.length) {
        _this6.deleteEntries(names_local, 'local');
      }
    }).then(function () {
      return _this6.emit('deleted:entries');
    });
  },
  updateEntryOnRestoration: function updateEntryOnRestoration(entryName, restoredMarks, lostMarks, area) {
    _storage2.default.update('history', function (history) {
      var oldLostMarks = history.entries[entryName].lost;
      history.entries[entryName].marks = restoredMarks;
      history.entries[entryName].lost = oldLostMarks.concat(lostMarks);

      return history;
    }, area);
  },
  syncEntry: function syncEntry(name, val) {
    var _this7 = this;

    _storage2.default.sync(name, val).then(function () {
      return _this7.emit('synced:entry');
    }).catch(function () {
      return _this7.emit('failed:sync-entry', name);
    });
  },
  tagEntries: function tagEntries(names, tag) {
    var _this8 = this;

    _storage2.default.update('history', function (history) {
      var entries = history.entries;
      names.sync.forEach(function (name) {
        return entries[name].tag = tag;
      });
      return history;
    }, 'sync').then(function () {
      return _storage2.default.update('history', function (history) {
        var entries = history.entries;
        names.local.forEach(function (name) {
          return entries[name].tag = tag;
        });
        return history;
      }, 'local');
    }).then(function () {
      return _this8.emit('tagged:entries');
    });
  },
  registerStorageChangedHandler: function registerStorageChangedHandler() {
    browser.storage.onChanged.addListener(this.proxy(this, this.onStorageChanged));
  },
  onStorageChanged: function onStorageChanged(changedItem) {
    if (changedItem.settings) this.emit('updated:settings');
    if (changedItem.history) this.emit('updated:history');
  }
});

/***/ }),

/***/ "./background/modules/tabs.js":
/*!************************************!*\
  !*** ./background/modules/tabs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        //'started:app': 'openInitPage',
        'open:addon-page': 'openAddonPage',
        'lookup:word': 'openSearch',
        'open:entries': 'open'
      }
    },
    urls: {
      news: 'content/addon-page/addon-page.html#page=news',
      settings: 'content/addon-page/addon-page.html#page=settings',
      history: 'content/addon-page/addon-page.html#page=history',
      info: 'content/addon-page/addon-page.html#page=new',
      help: 'content/addon-page/addon-page.html#page=manual',
      contact: 'content/addon-page/addon-page.html#page=contact',
      logs: 'content/addon-page/addon-page.html#page=logs',
      export: 'content/addon-page/addon-page.html#page=export',
      sync: 'content/addon-page/addon-page.html#page=sync'
    },

    open: function open(urls) {
      var _this = this;

      urls = typeof urls === 'string' ? [urls] : urls;
      var l = urls.length,
          securityWarning = false;
      while (l--) {
        browser.tabs.create({ url: urls[l] }).catch(function () {
          if (!securityWarning) _this.emit('failed:open-tab');
          securityWarning = true;
        });
      }
    },
    openAddonPage: function openAddonPage(id) {
      this.open(this.urls[id]);
    },
    openInitPage: function openInitPage(version, loadReason) {
      if (version && version < '3') this.openAddonPage('help');else if (loadReason && loadReason === 'install') this.openAddonPage('help');
    },
    openSearch: function openSearch(word) {
      var _this2 = this;

      _storage2.default.get('settings').then(function (settings) {
        var custom = settings.misc.customSearch,
            url = void 0;
        if (custom) url = 'https://' + custom[0] + word + custom[1];else url = 'https://' + browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/' + word;
        _this2.open(url);
      });
    }
  });
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./background/modules/version-manager.js":
/*!***********************************************!*\
  !*** ./background/modules/version-manager.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _defaultStorage = __webpack_require__(/*! ./../../data/default-storage */ "./data/default-storage.js");

var _defaultStorage2 = _interopRequireDefault(_defaultStorage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'update:app': 'setStorageOnUpgrade',
      'install:app': 'setStorageOnUpgrade',
      'check:storage': 'checkStorageOnStart',
      'import:storage': 'importStorage'
    }
  },

  updateSettings: function updateSettings(settings) {
    var noteTypes = 'pbmNote changedNote errorNote successNote'.split(' ');
    var defaultSettings = _defaultStorage2.default.settings;

    if (!settings.shortcuts) {
      settings = defaultSettings;
    } else {
      noteTypes.forEach(function (noteType) {
        if (!settings.misc[noteType]) {
          settings.misc[noteType] = defaultSettings.misc[noteType];
        }
      });
      if (!settings.history.sorted) {
        settings.history.sorted = defaultSettings.history.sorted;
      }
      if (!settings.history.view) {
        settings.history.view = defaultSettings.history.view;
      }
      if (typeof settings.history.saveInPriv !== 'boolean') {
        settings.history.saveInPriv = defaultSettings.history.saveInPriv;
      }
      if (!settings.shortcuts.n) {
        settings.shortcuts.n = defaultSettings.shortcuts.n;
        settings.misc.noteicon = defaultSettings.misc.noteicon;
        settings.misc.noteonclick = defaultSettings.misc.noteonclick;
      }
      if (!settings.misc.tmuipos) {
        settings.misc.tmuipos = defaultSettings.misc.tmuipos;
      }
    }
    return settings;
  },
  updateHistory: function updateHistory(history) {
    var entries = history.entries,
        order = history.order,
        l = order ? order.length : 0,
        entry = void 0;

    if (!l) return history;

    while (l--) {
      entry = this.fixHistoryDates(entries[order[l]]);
      entry.synced = typeof entry.synced === 'undefined' ? true : entry.synced;
    }
    return history;
  },
  fixHistoryDates: function fixHistoryDates(entry) {
    var lang = browser.i18n.getMessage('lng');
    if (typeof entry.first !== 'number') entry.first = new Date((entry.first[lang] || entry.first.en || entry.first.de || entry.first).replace(/\./g, ' ')).getTime();
    if (typeof entry.last !== 'number') entry.last = new Date((entry.last[lang] || entry.last.en || entry.last.de || entry.last).replace(/\./g, ' ')).getTime();
    return entry;
  },
  fixHistory: function fixHistory(history) {
    history = history || {};

    var entries = history.entries || {},
        order = history.order || [],
        l = order.length;

    if (l) {
      while (l--) {
        if (!entries[order[l]]) order.splice(l, 1);
      }
    }

    for (var name in entries) {
      if (!order.includes(name)) order.push(name);
    }return history;
  },
  mergeHistories: function mergeHistories(newHistory, area) {
    return _storage2.default.update('history', function (history) {

      var order = newHistory.order,
          entries = newHistory.entries,
          l = order.length,
          i = 0,
          oldOrder = history.order,
          oldEntries = history.entries,
          name = void 0;

      for (; i < l; i++) {
        name = order[i];
        if (!oldOrder.includes(name)) {
          oldOrder.push(name);
          oldEntries[name] = entries[name];
          oldEntries[name].synced = area === 'sync';
        }
      }
      return history;
    }, area);
  },
  setStorageOnUpgrade: function setStorageOnUpgrade() {
    var _this = this;

    var prevVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2';
    var loadReason = arguments[1];

    _storage2.default.isEmpty('sync').then(function (empty) {
      if (empty) {
        if (loadReason !== 'install') _this.emit('error', 'error_empty_synced_storage_onupdate');
      }
      return _storage2.default.set('storage', 'sync');
    }).then(function () {
      if (prevVersion < '4') {
        _storage2.default.update('settings', function (settings) {
          return _this.updateSettings(settings);
        }, 'sync');
      }
    }).then(function () {
      if (prevVersion < '4') {
        _storage2.default.update('settings', function (settings) {
          return _this.updateSettings(settings);
        }, 'local');
      }
    }).then(function () {
      if (prevVersion < '3') {
        _storage2.default.update('history', function (history) {
          return _this.updateHistory(history);
        }, 'sync');
      }
    }).then(function () {
      return _storage2.default.set('storage', 'local');
    }).then(function () {
      return _this.emit('initialized:storage', prevVersion);
    }).catch(function () {
      _this.emit('initialized:storage', prevVersion);
      _this.emit('error', 'error_storage_migration');
    });
  },
  checkStorageOnStart: function checkStorageOnStart() {
    var _this2 = this;

    _storage2.default.isEmpty('sync').then(function (empty) {
      if (empty) {
        _this2.emit('error', 'error_empty_synced_storage_onstart');
      }
      return _storage2.default.set('storage', 'sync');
    }).then(function () {
      return _storage2.default.isEmpty('local').then(function (empty) {
        if (empty) {
          _this2.emit('error', 'error_empty_local_storage_onstart');
        }
        return _storage2.default.set('storage', 'local');
      });
    }).then(function () {
      return _this2.emit('checked:storage');
    }).catch(function () {
      return _this2.emit('checked:storage');
    });
  },
  importStorage: function importStorage(importedStorage, area) {
    var _this3 = this;

    var settings = importedStorage.settings,
        history = importedStorage.history;

    if (!history && !settings) this.emit('failed:import', 'error_import_empty');else {
      if (!history) {
        if (!settings.shortcuts) this.emit('failed:import', 'error_import_history_not_found', 'error_import_outdated');else this.importSettings(settings, area).then(function (success) {
          if (!success) _this3.emit('failed:import', 'error_import_history_not_found', 'error_import_settings');else _this3.emit('error:import imported:settings', 'error_import_history_not_found');
        });
      } else if (!settings) {
        this.importHistory(history, area).then(function (success) {
          if (!success) _this3.emit('failed:import', 'error_import_settings_not_found', 'error_import_history');else _this3.emit('imported:storage imported:history');
        });
      } else {
        this.importSettings(settings, area).then(function (success_s) {
          _this3.importHistory(history, area).then(function (success_h) {
            if (!success_s) {
              if (!success_h) _this3.emit('failed:import', 'error_import_settings', 'error_import_history');else _this3.emit('error:import imported:history', 'error_import_settings');
            } else {
              if (success_s === 'outdated') {
                if (!success_h) _this3.emit('failed:import', 'error_import_history', 'error_import_outdated');else _this3.emit('error:import imported:history', 'error_import_outdated');
              } else {
                if (!success_h) _this3.emit('error:import imported:settings', 'error_import_history');else _this3.emit('imported:storage imported:settings imported:history');
              }
            }
          });
        });
      }
    }
  },
  importSettings: function importSettings(settings, area) {
    var _this4 = this;

    if (!settings.shortcuts) return Promise.resolve('outdated');

    return _storage2.default.update('settings', function (settings) {
      return _this4.updateSettings(settings);
    }, area).then(function () {
      return true;
    }).catch(function () {
      return false;
    });
  },
  importHistory: function importHistory(history, area) {
    return this.mergeHistories(this.updateHistory(this.fixHistory(history)), area).then(function () {
      return true;
    }).catch(function () {
      return false;
    });
  }
});

/***/ }),

/***/ "./background/modules/windows.js":
/*!***************************************!*\
  !*** ./background/modules/windows.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'view:entry': 'openEntryDetailPage'
      }
    },

    openEntryDetailPage: function openEntryDetailPage(name) {
      var popupURL = browser.extension.getURL('content/detail-view/detail-view.html');

      browser.windows.getCurrent().then(function (currentWindow) {

        browser.windows.create({
          url: popupURL + '#' + encodeURIComponent(name),
          type: 'panel',
          height: currentWindow.height - 22,
          width: Math.min(currentWindow.width, 980),
          incognito: currentWindow.incognito
        });
      });
    }
  });
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./background/port.js":
/*!****************************!*\
  !*** ./background/port.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./background/utils.js");

new _utils._PORT({
  name: 'background',
  type: 'background',
  postponeConnection: true,
  events: {
    ONEOFF: ['started:app', 'toggled:addon', 'toggled:sync', 'toggled:sync-settings', 'synced:entry', 'updated:settings', 'updated:history', 'updated:history-on-restoration', 'updated:logs', 'updated:ctm-settings', 'updated:misc-settings', 'updated:bg-color-settings', 'updated:custom-search-settings', 'updated:saveopt-settings', 'saved:entry', 'deleted:entry', 'deleted:entries', 'imported:settings', 'imported:history', 'ctx:m', 'ctx:d', 'ctx:b', 'ctx:-b', 'ctx:n', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:save-changes', 'sidebar:undo', 'sidebar:redo', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes'],
    CONNECTION: ['started:app', 'toggled:addon', 'updated:settings', 'updated:entry', 'saved:entry', 'toggled:sync-settings', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note']
  }
});

/***/ }),

/***/ "./background/storage.js":
/*!*******************************!*\
  !*** ./background/storage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./utils */ "./background/utils.js");

var _defaultStorage = __webpack_require__(/*! ./../data/default-storage */ "./data/default-storage.js");

var _defaultStorage2 = _interopRequireDefault(_defaultStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _utils._MODULE({

  initialized: false,
  area_settings: _defaultStorage2.default.sync.settings ? 'sync' : 'local',
  area_history: _defaultStorage2.default.sync.history ? 'sync' : 'local',

  init: function init() {
    var _this = this;

    browser.storage.sync.remove('logs');

    return browser.storage.local.get().then(function (localStorage) {
      var sync = localStorage && localStorage.sync ? localStorage.sync : _defaultStorage2.default.sync;
      return _this._set_sync(sync);
    });
  },
  get: function get() {
    var _this2 = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

    var meth = this['_get_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';

    if (!this.initialized) {
      this.initialized = true;
      return this.init().then(function () {
        return _this2['_get_' + field]();
      });
    }
    return this['_get_' + field]();
  },
  set: function set(field, val) {
    var meth = this['_set_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';
    return this['_set_' + field](val);
  },
  update: function update(field, updater, area) {
    var meth = this['_update_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';
    return this['_update_' + field](updater, area);
  },
  sync: function sync(name, val) {
    return this._get_history().then(function (history) {
      if (!history.entries.hasOwnProperty(name)) throw 'entry doesnt exist';
      var entry = (0, _utils._COPY)(history.entries[name]);
      return browser.storage.sync.get().then(function (storage) {
        var syncedEntry = void 0;
        if (storage.history.entries.hasOwnProperty(name)) syncedEntry = storage.history.entries[name];
        if (val && syncedEntry) syncedEntry.synced = val;else if (val && !syncedEntry) {
          storage.history.entries[name] = (0, _utils._COPY)(entry);
          storage.history.order.push(name);
          storage.history.entries[name].synced = val;
        } else if (!val && syncedEntry) {
          delete storage.history.entries[name];
          storage.history.order.splice(storage.history.order.indexOf(name), 1);
        }
        return browser.storage.sync.set({ history: storage.history });
      }).then(function () {
        return browser.storage.local.get().then(function (localStorage) {
          var localEntry = void 0;
          if (localStorage.history.entries.hasOwnProperty(name)) localEntry = localStorage.history.entries[name];
          if (!val && localEntry) localEntry.synced = val;else if (!val && !localEntry) {
            localStorage.history.entries[name] = (0, _utils._COPY)(entry);
            localStorage.history.order.push(name);
            localStorage.history.entries[name].synced = val;
          } else if (val && localEntry) {
            delete localStorage.history.entries[name];
            localStorage.history.order.splice(localStorage.history.order.indexOf(name), 1);
          }
          return browser.storage.local.set({ history: localStorage.history });
        });
      });
    });
  },
  isEmpty: function isEmpty() {
    var area = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sync';

    return browser.storage[area].get().then(function (storage) {
      if (!storage || !Object.keys(storage).length && storage.constructor === Object || !storage.history) return true;
      return false;
    });
  },
  _get_storage: function _get_storage() {
    var _this3 = this;

    return browser.storage.local.get().then(function (localStorage) {
      return browser.storage.sync.get().then(function (syncedStorage) {
        ['version', 'logs'].forEach(function (field) {
          localStorage[field] = localStorage[field] || syncedStorage[field];
        });
        if (_this3.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
        return _this3._get_history().then(function (history) {
          localStorage.history = history;
          return localStorage;
        });
      });
    });
  },
  _get_local_storage: function _get_local_storage() {
    return browser.storage.local.get();
  },
  _get_synced_storage: function _get_synced_storage() {
    return browser.storage.sync.get();
  },
  _get_history: function _get_history() {
    return browser.storage.sync.get().then(function (syncedStorage) {
      var syncedHistory = syncedStorage.history;

      return browser.storage.local.get().then(function (localStorage) {
        var localHistory = localStorage.history;
        if (!syncedHistory) return localHistory;
        if (!localHistory) return syncedHistory;

        syncedHistory.order = syncedHistory.order.concat(localHistory.order);
        for (var e in localHistory.entries) {
          syncedHistory.entries[e] = localHistory.entries[e];
        }return syncedHistory;
      });
    });
  },
  _get_settings: function _get_settings() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings;
    });
  },
  _get_logs: function _get_logs() {
    return browser.storage.local.get().then(function (localStorage) {
      if (!localStorage || !localStorage.logs) return [];
      return localStorage.logs;
    });
  },
  _get_version: function _get_version() {
    return browser.storage.local.get().then(function (localStorage) {
      if (!localStorage || !localStorage.version) {
        return browser.storage.sync.get().then(function (syncedStorage) {
          return syncedStorage.version || '';
        });
      }
      return localStorage.version;
    });
  },
  _get_mode: function _get_mode() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_privsave: function _get_privsave() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.saveInPriv;
    });
  },
  _get_naming: function _get_naming() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return 'custom';
      return storage.settings.history.naming;
    });
  },
  _get_markers: function _get_markers() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.markers;
    });
  },
  _get_shortcuts: function _get_shortcuts() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.shortcuts;
    });
  },
  _set_storage: function _set_storage() {
    var _this4 = this;

    var area = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    return this._set_settings(area).then(function () {
      return _this4._set_history(area);
    });
  },
  _set_sync: function _set_sync(sync) {
    var _this5 = this;

    return browser.storage.local.set({ sync: sync }).then(function () {
      return browser.storage.sync.set({ sync: sync });
    }).then(function () {
      _this5.area_settings = sync.settings ? 'sync' : 'local';
      _this5.area_history = sync.history ? 'sync' : 'local';
    });
  },
  _set_settings: function _set_settings() {
    var area = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.area_settings;

    return browser.storage[area].get().then(function (storage) {
      if (!storage || !storage.settings) return browser.storage[area].set({ settings: (0, _utils._COPY)(_defaultStorage2.default.settings) });
    });
  },
  _set_history: function _set_history() {
    var area = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.area_history;

    return browser.storage[area].get().then(function (storage) {
      if (!storage || !storage.history) return browser.storage[area].set({ history: (0, _utils._COPY)(_defaultStorage2.default.history) });
    });
  },
  _set_version: function _set_version(version) {
    return browser.storage.local.set({ version: version }).then(function () {
      return browser.storage.sync.set({ version: version });
    });
  },
  _set_log: function _set_log(log) {
    if (log.clear) {
      return browser.storage.local.set({ logs: [] });
    }
    return this._get_logs().then(function (logs) {
      logs.push(log);
      if (logs.length > 200) logs.shift();
      return browser.storage.local.set({ logs: logs });
    });
  },
  _set_entry: function _set_entry(entry) {
    var _this6 = this;

    return browser.storage[this.area_history].get().then(function (storage) {
      var history = storage.history;
      if (history.order.includes(entry.name)) return _this6._update_entry(entry);
      history.order.push(entry.name);
      history.entries[entry.name] = entry;
      return browser.storage[_this6.area_history].set({ history: history });
    });
  },
  _update_history: function _update_history(updater) {
    var area = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.area_history;

    return browser.storage[area].get().then(function (storage) {
      if (!storage.history) {
        storage.history = (0, _utils._COPY)(_defaultStorage2.default.history);
      }
      var history = updater(storage.history);
      return browser.storage[area].set({ history: history }).then(function () {
        return history;
      });
    });
  },
  _update_settings: function _update_settings(updater) {
    var area = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.area_settings;

    return browser.storage[area].get().then(function (storage) {
      if (!storage.settings) {
        storage.settings = (0, _utils._COPY)(_defaultStorage2.default.settings);
      }
      var settings = updater(storage.settings);
      return browser.storage[area].set({ settings: settings }).then(function () {
        return settings;
      });
    });
  },
  _update_sync: function _update_sync(updater) {
    var sync = {};
    sync.settings = this.area_settings === 'sync';
    sync.history = this.area_history === 'sync';
    return this._set_sync(updater(sync));
  }
});

/***/ }),

/***/ "./background/utils.js":
/*!*****************************!*\
  !*** ./background/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ERRORTRACKER = exports._PORT = exports._MODULE = exports._EXTEND = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../utils/copy */ "./utils/copy.js");

var _extend = __webpack_require__(/*! ./../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../utils/module */ "./utils/module.js");

var _port = __webpack_require__(/*! ./../utils/port */ "./utils/port.js");

var _errorTracker = __webpack_require__(/*! ./../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports._COPY = _copy._COPY;
exports._EXTEND = _extend2.default;
exports._MODULE = _module._MODULE;
exports._PORT = _port._PORT;
exports._ERRORTRACKER = _errorTracker2.default;

/***/ }),

/***/ "./data/default-storage.js":
/*!*********************************!*\
  !*** ./data/default-storage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  version: browser.runtime.getManifest().version,
  settings: {
    shortcuts: {
      z: ['ctrlKey-altKey', true],
      y: ['ctrlKey-altKey', true],
      s: ['ctrlKey-altKey', true],
      c: ['ctrlKey-altKey', false],
      b: ['ctrlKey-altKey', true, true],
      d: ['', '', true],
      '-b': ['', '', true],
      m: ['', true, true],
      w: ['', true, true],
      n: ['', '', true],
      '2': ['', true],
      '3': ['', true]
    },
    markers: {
      '2': 'background-color:#cc0000;color:#ffffff;',
      '3': 'background-color:#ffc500;',
      m: 'background-color:#ffee66;'
    },
    history: {
      autosave: true,
      saveInPriv: false,
      naming: 'title',
      download: 'text',
      copy: 'text',
      saveNote: true,
      sorted: 'date-last',
      view: 'list',
      pp: 10
    },
    addon: {
      active: true
    },
    misc: {
      bmicon: true,
      noteicon: true,
      noteonclick: true,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      customSearch: false,
      tmuipos: 'top-right'
    }
  },
  history: {
    entries: {},
    order: []
  },
  sync: {
    settings: false,
    history: false
  }
};

/***/ }),

/***/ "./data/log-keys.js":
/*!**************************!*\
  !*** ./data/log-keys.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  note_pbm: 1,
  note_restoration_failure: 2,
  note_url: 3,
  error_save_style: 4,
  error_save__toggle_sc: 5,
  error_save_change_sc: 6,
  error_save_ctm: 7,
  error_save_autosave: 8,
  error_save_naming: 9,
  error_save_notify: 10,
  error_save_download: 11,
  error_save_bmicon: 12,
  error_clean_history: 13,
  error_add_marker: 14,
  error_remove_marker: 15,
  error_save_entry: 16,
  error_update_entry: 17,
  error_del_entry: 18,
  error_empty_synced_storage_onstart: 19,
  error_empty_synced_storage_onupdate: 20,
  error_empty_local_storage_onstart: 21,
  error_import_empty: 22,
  error_import_history: 23,
  error_import_settings: 24,
  error_import_outdated: 25,
  error_import_history_not_found: 26,
  error_import_settings_not_found: 27,
  error_naming: 28,
  error_storage_migration: 29,
  error_empty_local_storage_onupdate: 30,
  error_toggle_sync: 31,
  error_save_priv: 32,

  getKeyByValue: function getKeyByValue(val) {
    for (var key in this) {
      if (this[key] == val) {
        return key;
        break;
      }
    }
    return '';
  }
};

/***/ }),

/***/ "./utils/copy.js":
/*!***********************!*\
  !*** ./utils/copy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _COPY = function _COPY(original, clone) {
  clone = clone || {};

  for (var i in original) {
    if (original.hasOwnProperty(i)) {
      if (_typeof(original[i]) === 'object') {
        clone[i] = Array.isArray(original[i]) ? [] : {};
        _COPY(original[i], clone[i]);
      } else {
        clone[i] = original[i];
      }
    }
  }
  return clone;
};

exports._COPY = _COPY;

/***/ }),

/***/ "./utils/error-tracker.js":
/*!********************************!*\
  !*** ./utils/error-tracker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

var _ERRORTRACKER = new _module._MODULE({
  autoinit: function autoinit() {
    var _this = this;

    window.addEventListener('error', function (error) {
      var file = error.filename.split('/').pop();
      if (['sidebar.wp.js', 'tbb-menu.wp.js', 'options.wp.js', 'addon-page.wp.js'].includes(file)) {
        _this.emit('error:browser-console', {
          message: error.message,
          location: error.filename.split('/').pop().split('.').shift() + ':' + error.lineno + ':' + error.colno,
          time: new Date().getTime()
        });
      }
    }, false);
  }
});

exports.default = _ERRORTRACKER;

/***/ }),

/***/ "./utils/extend.js":
/*!*************************!*\
  !*** ./utils/extend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }return obj1;
};

/***/ }),

/***/ "./utils/mediator.js":
/*!***************************!*\
  !*** ./utils/mediator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var topics = {};

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'on',
    value: function on(event, handler) {
      if (!topics[event]) topics[event] = [];

      topics[event].push(handler);
    }
  }, {
    key: 'emit',
    value: function emit(events) {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      events = events.split(' ');

      var i = 0,
          l = events.length,
          topic = void 0;

      for (; i < l; i++) {
        topic = topics[events[i]];

        if (topic) topic.forEach(function (handler) {
          return handler.apply(_this, args);
        });
      }
    }
  }, {
    key: 'request',
    value: function request(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return browser.runtime.sendMessage({ ev: event, args: args, wait: true }).catch(function () {});
    }
  }, {
    key: 'proxy',
    value: function proxy(context, func) {
      for (var _len3 = arguments.length, args1 = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args1[_key3 - 2] = arguments[_key3];
      }

      return function () {
        for (var _len4 = arguments.length, args2 = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args2[_key4] = arguments[_key4];
        }

        return func.apply(context, args1.concat(args2));
      };
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),

/***/ "./utils/module.js":
/*!*************************!*\
  !*** ./utils/module.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._MODULE = undefined;

var _mediator = __webpack_require__(/*! ./mediator */ "./utils/mediator.js");

var _mediator2 = _interopRequireDefault(_mediator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MODULE = exports._MODULE = function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  function _MODULE(obj) {
    _classCallCheck(this, _MODULE);

    var _this = _possibleConstructorReturn(this, (_MODULE.__proto__ || Object.getPrototypeOf(_MODULE)).call(this));

    for (o in obj) {
      _this[o] = obj[o];
    }var events = _this.events,
        envEvents = void 0,
        o = void 0,
        e = void 0,
        handler = void 0;

    if (events && (envEvents = events.ENV)) {
      for (e in envEvents) {
        handler = envEvents[e];
        if (_this[handler]) _this.on(e, _this.proxy(_this, _this[handler]));
      }
    }
    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator2.default);

/***/ }),

/***/ "./utils/port.js":
/*!***********************!*\
  !*** ./utils/port.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._PORT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _PORT = exports._PORT = function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    _classCallCheck(this, _PORT);

    var _this = _possibleConstructorReturn(this, (_PORT.__proto__ || Object.getPrototypeOf(_PORT)).call(this, obj));

    _this.port = null;

    var type = _this.type;

    browser.runtime.onMessage.addListener(_this.proxy(_this, _this.passMessage));

    if (type === 'privileged' || type === 'background') _this.initPorting();

    var events = _this.events,
        oneOffEvents = void 0,
        connectionBasedEvents = void 0;

    if (events) {
      oneOffEvents = events.ONEOFF;
      if (oneOffEvents) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            _this.on(e, _this.proxy(_this, _this.sendMessage, e));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      connectionBasedEvents = events.CONNECTION;
      if (connectionBasedEvents) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = connectionBasedEvents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var f = _step2.value;

            _this.on(f, _this.proxy(_this, _this.postMessage, f));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
    return _this;
  }

  _createClass(_PORT, [{
    key: 'passMessage',
    value: function passMessage(req, sender, sendResponse) {
      req.args = req.args || [];
      var args = [].concat(req.ev, req.args);
      if (!sender || !sender.name) args = args.concat(sender, sendResponse);
      this.emit.apply(this, args);
      if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called
      return false;
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(e) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var type = this.type;
      var msg = { ev: e, args: args };
      if (type === 'content') browser.runtime.sendMessage(msg).catch(function () {});else if (type === 'background') {
        var lastArg = args[args.length - 1];
        if (lastArg !== undefined && lastArg.tab) {
          browser.tabs.sendMessage(lastArg.tab, msg).catch(function () {});
        } else {
          browser.tabs.query({/* currentWindow: false, active: false */}).then(function (tabs) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var tab = _step3.value;

                browser.tabs.sendMessage(tab.id, msg).catch(function () {});
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          });
        }
      }
    }
  }, {
    key: 'postMessage',
    value: function postMessage(e) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var msg = { ev: e, args: args };
      if (this.port) this.port.postMessage(msg);
    }
  }, {
    key: 'initPorting',
    value: function initPorting() {
      if (!this.postponeConnection) {
        this.connect();
        this.addConnectionListeners();
      } else {
        this.addConnectionListeners(this.proxy(this, this.connect));
      }
    }
  }, {
    key: 'connect',
    value: function connect() {
      var _this2 = this;

      var port = this.port = this.port || browser.runtime.connect({ name: this.name });
      port.onDisconnect.addListener(function () {
        return _this2.port = null;
      });
    }
  }, {
    key: 'addConnectionListeners',
    value: function addConnectionListeners(cb) {
      var _this3 = this;

      browser.runtime.onConnect.addListener(function (port) {
        port.onMessage.addListener(_this3.proxy(_this3, _this3.passMessage));
        !cb || cb();
      });
    }
  }]);

  return _PORT;
}(_module._MODULE);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3N0b3JlLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3ZlcnNpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvd2luZG93cy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9sb2cta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZ2V0IiwidGhlbiIsImRldGFpbHMiLCJyZWFzb24iLCJwcmV2VmVyc2lvbiIsInByZXZpb3VzVmVyc2lvbiIsImVtaXQiLCJzdGFydCIsInNldCIsImFjdGl2YXRlIiwibW9kZSIsImNhdGNoIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiaXRlbXMiLCJtIiwiY29udGV4dHMiLCJ3IiwiZCIsImIiLCJuIiwiY3JlYXRlZCIsIml0ZW0iLCJpIiwiaWQiLCJ0aXRsZSIsImkxOG4iLCJnZXRNZXNzYWdlIiwib25jbGljayIsImluZm9zIiwidGFiIiwib25DbGljayIsInVwZGF0ZSIsImNyZWF0ZSIsImluY2x1ZGVzIiwibWVudXMiLCJwdXNoIiwicmVtb3ZlIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlbW92ZUFsbCIsImxlbmd0aCIsInNob3J0Y3V0cyIsIm1lbnVJdGVtSWQiLCJzZWxlY3Rpb25UZXh0IiwibG9nIiwiZXJyb3IiLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJjbGVhciIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJjaGVja1VybCIsInVybCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImVudHJpZXMiLCJoaXN0b3J5IiwiZW50cnkiLCJlIiwiZ2V0SGFzaGxlc3NVUkwiLCJvbk5hbWluZ1JlcXVlc3QiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJwcml2Iiwid2luZG93SW5mbyIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwiaCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwibWF4Q2hhcnMiLCJuYW1lIiwiYWRqdXN0TmFtZSIsIm5hbWluZyIsIm1ldGhvZCIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJzdWJzdHJpbmciLCJjb3VudGVyIiwiZ2V0RG91YmxlTmFtZUNvdW50IiwiZXhpc3RpbmdOYW1lcyIsIm9yZGVyIiwibCIsImNoZWNrcG9pbnQiLCJpc0RvdWJsZU5hbWUiLCJjaGVja3BvaW50X3N0YXJ0IiwiY2hlY2twb2ludF9lbmQiLCJ0ZXN0Iiwibm90aWZ5IiwiY29uZGl0aW9uIiwidHlwZSIsInNldHRpbmdzIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJleHRlbnNpb24iLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwib25GYWlsZWRJbXBvcnQiLCJlcnJvcjEiLCJlcnJvcjIiLCJlcnJNZXNzYWdlMSIsImVyck1lc3NhZ2UyIiwib25JbXBvcnRFcnJvciIsIm9uSW1wb3J0U3VjY2VzcyIsIm9uVXBkYXRlZEVudHJ5IiwiY2hhbmdlZE5vdGUiLCJvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbiIsInN1Y2Nlc3NOb3RlIiwiZmFpbHVyZU5vdGUiLCJvblNhdmVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwidXBkYXRlT25DaGFuZ2VkU3luYyIsInNhdmVBY3RpdmF0aW9uU3RhdGUiLCJhZGRvbiIsInRvZ2dsZVN5bmMiLCJmaWVsZCIsInZhbCIsInN5bmMiLCJ1cGRhdGVTZXR0aW5ncyIsInVwZGF0ZXIiLCJzZXR0aW5nIiwiYWRkQ3VzdG9tTWFya2VyIiwia2V5Iiwic3R5bGUiLCJtYXJrZXJzIiwicmVtb3ZlQ3VzdG9tTWFya2VyIiwiY2hhbmdlU3R5bGUiLCJjaGFuZ2VCZ0NvbG9yIiwiY29sb3IiLCJtYXJrZXIiLCJzcGxpdCIsInJlcGxhY2UiLCJ0b2dnbGVTaG9ydGN1dFNldHRpbmciLCJzdGF0dXMiLCJjaGFuZ2VTaG9ydGN1dFNldHRpbmciLCJ2YWx1ZSIsImNoYW5nZVNvcnRPcHQiLCJzb3J0ZWQiLCJjaGFuZ2VWaWV3T3B0IiwidmlldyIsImNoYW5nZUN1c3RvbVNlYXJjaCIsInZhbHVlcyIsImN1c3RvbVNlYXJjaCIsImNoYW5nZUNvdW50UGVyUGFnZSIsInBwIiwidG9nZ2xlQ3RtU2V0dGluZyIsImNoYW5nZVNhdmVPcHQiLCJhdXRvc2F2ZSIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInRvZ2dsZU5vdGlmaWNhdGlvbk9wdCIsImNoYW5nZU1pc2NTZXR0aW5nIiwiY2xlYW5FbnRyaWVzIiwibmFtZXMiLCJhcmVhIiwibmFtZXNfbG9jYWwiLCJsb3N0Iiwic2F2ZUVudHJ5IiwidXBkYXRlRW50cnkiLCJjdXJyZW50RW50cnkiLCJzeW5jZWQiLCJkZWxldGVFbnRyaWVzIiwicG9wIiwidXBkYXRlRW50cnlPblJlc3RvcmF0aW9uIiwiZW50cnlOYW1lIiwicmVzdG9yZWRNYXJrcyIsImxvc3RNYXJrcyIsIm9sZExvc3RNYXJrcyIsIm1hcmtzIiwiY29uY2F0Iiwic3luY0VudHJ5IiwidGFnRW50cmllcyIsInRhZyIsImZvckVhY2giLCJsb2NhbCIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwiZXhwb3J0Iiwib3BlbiIsInNlY3VyaXR5V2FybmluZyIsInRhYnMiLCJvcGVuQWRkb25QYWdlIiwib3BlbkluaXRQYWdlIiwib3BlblNlYXJjaCIsIndvcmQiLCJjdXN0b20iLCJub3RlVHlwZXMiLCJkZWZhdWx0U2V0dGluZ3MiLCJub3RlVHlwZSIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJ0bXVpcG9zIiwidXBkYXRlSGlzdG9yeSIsImZpeEhpc3RvcnlEYXRlcyIsImxhbmciLCJlbiIsImRlIiwibGFzdCIsImZpeEhpc3RvcnkiLCJtZXJnZUhpc3RvcmllcyIsIm5ld0hpc3RvcnkiLCJvbGRPcmRlciIsIm9sZEVudHJpZXMiLCJzZXRTdG9yYWdlT25VcGdyYWRlIiwiaXNFbXB0eSIsImVtcHR5IiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcGVuRW50cnlEZXRhaWxQYWdlIiwicG9wdXBVUkwiLCJnZXRDdXJyZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVpZ2h0IiwiY3VycmVudFdpbmRvdyIsIndpZHRoIiwiTWF0aCIsIm1pbiIsInBvc3Rwb25lQ29ubmVjdGlvbiIsIk9ORU9GRiIsIkNPTk5FQ1RJT04iLCJpbml0aWFsaXplZCIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJpbml0IiwibG9jYWxTdG9yYWdlIiwiX3NldF9zeW5jIiwibWV0aCIsIl9nZXRfaGlzdG9yeSIsImhhc093blByb3BlcnR5Iiwic3luY2VkRW50cnkiLCJsb2NhbEVudHJ5IiwiT2JqZWN0Iiwia2V5cyIsImNvbnN0cnVjdG9yIiwiX2dldF9zdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfbG9jYWxfc3RvcmFnZSIsIl9nZXRfc3luY2VkX3N0b3JhZ2UiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5IiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbG9ncyIsIl9nZXRfdmVyc2lvbiIsIl9nZXRfbW9kZSIsIl9nZXRfcHJpdnNhdmUiLCJfZ2V0X25hbWluZyIsIl9nZXRfbWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwiX3NldF9zdG9yYWdlIiwiX3NldF9zZXR0aW5ncyIsIl9zZXRfaGlzdG9yeSIsIl9zZXRfdmVyc2lvbiIsIl9zZXRfbG9nIiwic2hpZnQiLCJfc2V0X2VudHJ5IiwiX3VwZGF0ZV9lbnRyeSIsIl91cGRhdGVfaGlzdG9yeSIsIl91cGRhdGVfc2V0dGluZ3MiLCJfdXBkYXRlX3N5bmMiLCJfQ09QWSIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX1BPUlQiLCJfRVJST1JUUkFDS0VSIiwieiIsInkiLCJzIiwiYyIsImRvd25sb2FkIiwiY29weSIsImJtaWNvbiIsIm92ZXJ3cml0ZSIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2IiwiZ2V0S2V5QnlWYWx1ZSIsIm9yaWdpbmFsIiwiY2xvbmUiLCJBcnJheSIsImlzQXJyYXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZSIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJvYmoxIiwib2JqMiIsInRvcGljcyIsImV2ZW50IiwiaGFuZGxlciIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJvYmoiLCJvIiwiZW52RXZlbnRzIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJmIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJtc2ciLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwicXVlcnkiLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FBZ0JvWSxPQUFoQixDQUF3QixFQUFFN1MsTUFBTSxLQUFLQSxJQUFiLEVBQXhCLENBQXRDO0FBQ0FnUyxXQUFLZSxZQUFMLENBQWtCblksV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE9BQUtvWCxJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCZ0IsRSxFQUFJO0FBQUE7O0FBQ3pCeFksY0FBUUMsT0FBUixDQUFnQndZLFNBQWhCLENBQTBCclksV0FBMUIsQ0FBc0MsZ0JBQVE7QUFDNUNvWCxhQUFLQyxTQUFMLENBQWVyWCxXQUFmLENBQTJCLE9BQUt1TSxLQUFMLFNBQWlCLE9BQUsrSyxXQUF0QixDQUEzQjtBQUNBLFNBQUNjLEVBQUQsSUFBT0EsSUFBUDtBQUNELE9BSEQ7QUFJRCIsImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2JhY2tncm91bmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL21vZHVsZXMvZXJyb3ItbG9nZ2luZydcclxuaW1wb3J0ICcuL21vZHVsZXMvaW5qZWN0aW9uLW1hbmFnZXInXHJcbmltcG9ydCBfTk9USUZJQ0FUSU9OUyBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IF9UQUJTIGZyb20gJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgX1dJTkRPV1MgZnJvbSAnLi9tb2R1bGVzL3dpbmRvd3MnXHJcbmltcG9ydCBfTkFNRVIgZnJvbSAnLi9tb2R1bGVzL25hbWVyJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dC1tZW51J1xyXG4vL2ltcG9ydCBfSURCIGZyb20gJy4vbW9kdWxlcy9pbmRleGVkZGInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL3N0b3JlLW1hbmFnZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3RvZ2dsZU9uSW1wb3J0JyxcclxuICAgICAgJ2luaXRpYWxpemVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnbWlncmF0ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdjaGVja2VkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAndG9nZ2xlOmFkZG9uJzogJ3RvZ2dsZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmU6IHRydWUsXHJcbiAgdmVyc2lvbjogJycsXHJcbiAgbG9hZFJlYXNvbjogJycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFZlcnNpb24gPSB0aGlzLnZlcnNpb24gPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgICBpZiAoIXZlcnNpb24gfHwgdmVyc2lvbiAhPT0gY3VycmVudFZlcnNpb24pIHtcclxuICAgICAgICAgIGNvbnN0IGxvYWRSZWFzb24gPSB0aGlzLmxvYWRSZWFzb24gPSBkZXRhaWxzLnJlYXNvbjtcclxuICAgICAgICAgIGNvbnN0IHByZXZWZXJzaW9uID0gZGV0YWlscy5wcmV2aW91c1ZlcnNpb24gfHwgJzInO1xyXG4gICAgICAgICAgaWYgKGxvYWRSZWFzb24gJiYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnIHx8IGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGxvYWRSZWFzb24gKyAnOmFwcCcsIHByZXZWZXJzaW9uLCBsb2FkUmVhc29uKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCd2ZXJzaW9uJywgdGhpcy52ZXJzaW9uKTtcclxuXHJcbiAgICAvL19JREIoKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG5cclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5hY3RpdmF0ZSh0cnVlKSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzdGFydGVkOmFwcCcsIHRoaXMudmVyc2lvbiwgdGhpcy5sb2FkUmVhc29uKSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShhY3RpdmF0ZSkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBhY3RpdmF0ZTtcclxuICAgIHRoaXMudG9nZ2xlQnJvd3NlckFjdGlvbkljb24oYWN0aXZlKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIGxldCBtb2RlID0gIXRoaXMuYWN0aXZlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZShtb2RlKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDphZGRvbicsIG1vZGUpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlT25JbXBvcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGVCcm93c2VyQWN0aW9uSWNvbihvbikge1xyXG4gICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEljb24oe1xyXG4gICAgICBwYXRoOiBvbiA/IHtcclxuICAgICAgICAxNjogJy4vLi4vY29udGVudC9pY29ucy9vbjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLy4uL2NvbnRlbnQvaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi8uLi9jb250ZW50L2ljb25zL29uMzIucG5nJ1xyXG4gICAgICB9IDoge1xyXG4gICAgICAgIDE2OiAnLi8uLi9jb250ZW50L2ljb25zL29mZjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLy4uL2NvbnRlbnQvaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4vLi4vY29udGVudC9pY29ucy9vZmYzMi5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXRlbXM6IHtcclxuICAgICAgbTogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICB3OiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIGQ6IHsgY29udGV4dHM6IFsncGFnZSddIH0sXHJcbiAgICAgIGI6IHsgY29udGV4dHM6IFsncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsncGFnZSddIH0sXHJcbiAgICAgIG46IHsgY29udGV4dHM6IFsncGFnZSddIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBbXSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3R4XycgKyAoaSA9PT0gJy1iJyA/ICdkYicgOiBpKSk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKGluZm9zLCB0YWIpID0+IHRoaXMub25DbGljayhpbmZvcywgdGFiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoaWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5jcmVhdGUodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlKGlkKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQuc3BsaWNlKHRoaXMuY3JlYXRlZC5pbmRleE9mKGlkKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZShvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVBbGwoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2hvcnRjdXRzJykudGhlbihzaG9ydGN1dHMgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgaWYgKHNob3J0Y3V0c1tpXVsyXSkgdGhpcy5jcmVhdGUoaSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGljayhpbmZvcywgdGFiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gaW5mb3MubWVudUl0ZW1JZDtcclxuICAgICAgaWYgKGlkID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCBpbmZvcy5zZWxlY3Rpb25UZXh0KTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ2N0eDonICsgaWQsIG51bGwsIG51bGwsIHsgdGFiOiB0YWIuaWQgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlcnJvcic6ICdsb2cnLFxyXG4gICAgICAnd2FybmluZyc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAnZXJyb3I6aW1wb3J0JzogJ2xvZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnOiAnbG9nJyxcclxuICAgICAgJ2NsZWFyOmxvZ3MnOiAnY2xlYXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbG9nKGVycm9yKSB7XHJcbiAgICBsZXQgbG9nO1xyXG4gICAgaWYgKGVycm9yLnRpbWUpIHtcclxuICAgICAgbG9nID0gW2Vycm9yLnRpbWUsIGVycm9yLm1lc3NhZ2UgKyAnIFsnICsgZXJyb3IubG9jYXRpb24gKyAnXSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nID0gWyhuZXcgRGF0ZSgpLmdldFRpbWUoKSksIF9MT0dfS0VZU1tlcnJvcl1dO1xyXG4gICAgfVxyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCBsb2cpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MgbG9nZ2VkOmVycm9yJywgbG9nKSk7XHJcbiAgfSxcclxuICBjbGVhcigpIHtcclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgeyBjbGVhcjogdHJ1ZSB9KS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzJykpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbigpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKTtcclxuICB9LFxyXG4gIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV91cmwnKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcGJtJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoZWNrOnVybCc6ICdjaGVja1VybCcsXHJcbiAgICAgICdzYXZlOmVudHJ5Pyc6ICdvblNhdmVOZXdSZXF1ZXN0JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnb25VcGRhdGVSZXF1ZXN0JyxcclxuICAgICAgJ25hbWU6ZW50cnk/JzogJ29uTmFtaW5nUmVxdWVzdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGNoZWNrVXJsKHVybCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLCBlbnRyeTtcclxuICAgICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2VdO1xyXG4gICAgICAgIGlmICh1cmwgPT09IHRoaXMuZ2V0SGFzaGxlc3NVUkwoZW50cnkudXJsKSkge1xyXG4gICAgICAgICAgc2VuZFJlc3BvbnNlKGVudHJ5KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbk5hbWluZ1JlcXVlc3Qoc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBjb25zdCBwcml2ID0gd2luZG93SW5mby5pbmNvZ25pdG87XHJcbiAgICAgICAgaWYgKHByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgIGlmICghcHJpdikgc2VuZFJlc3BvbnNlKCFwcml2KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHNlbmRSZXNwb25zZShzYXZlSW5Qcml2KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblNhdmVOZXdSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblVwZGF0ZVJlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBnZXRIYXNobGVzc1VSTCh1cmwpIHtcclxuICAgIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICAgIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICAgIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1heENoYXJzOiA3MCxcclxuXHJcbiAgICBuYW1lKGVudHJ5KSB7XHJcbiAgICAgIGlmIChlbnRyeS5uYW1lKSByZXR1cm4gdGhpcy5hZGp1c3ROYW1lKGVudHJ5Lm5hbWUsIGVudHJ5KTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4gdGhpcy5hZGp1c3ROYW1lKG51bGwsIGVudHJ5LCBuYW1pbmcpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBhZGp1c3ROYW1lKG5hbWUsIGVudHJ5LCBtZXRob2QpIHtcclxuICAgICAgbmFtZSA9IG5hbWUgPyBuYW1lIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ3RpdGxlJyA/IGVudHJ5LnRpdGxlIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIHRoaXMubWF4Q2hhcnMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5KTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICBlbnRyeS5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnkpIHtcclxuICAgICAgbGV0IGV4aXN0aW5nTmFtZXMgPSBoaXN0b3J5Lm9yZGVyLFxyXG4gICAgICAgICAgbCA9IGV4aXN0aW5nTmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgY291bnRlciA9IDAsXHJcbiAgICAgICAgICBjaGVja3BvaW50O1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIGNoZWNrcG9pbnQgPSBleGlzdGluZ05hbWVzW2xdO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSkgY291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgfSxcclxuICAgIGlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSB7XHJcbiAgICAgIGlmIChuYW1lID09PSBjaGVja3BvaW50KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBsID0gbmFtZS5sZW5ndGgsXHJcbiAgICAgICAgICBjaGVja3BvaW50X3N0YXJ0ID0gY2hlY2twb2ludC5zdWJzdHJpbmcoMCwgbCksXHJcbiAgICAgICAgICBjaGVja3BvaW50X2VuZDtcclxuXHJcbiAgICAgIGlmIChuYW1lICE9PSBjaGVja3BvaW50X3N0YXJ0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBjaGVja3BvaW50X2VuZCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKGwsIGNoZWNrcG9pbnQubGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICgvXlxccypcXChcXGQrXFwpJC8udGVzdChjaGVja3BvaW50X2VuZCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnb25TYXZlZEVudHJ5JyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6ZW50cnknOiAnb25VcGRhdGVkRW50cnknLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAgICdmYWlsZWQ6aW1wb3J0JzogJ29uRmFpbGVkSW1wb3J0JyxcclxuICAgICAgICAnZXJyb3I6aW1wb3J0JzogJ29uSW1wb3J0RXJyb3InLFxyXG4gICAgICAgICdpbXBvcnRlZDpzdG9yYWdlJzogJ29uSW1wb3J0U3VjY2VzcycsXHJcbiAgICAgICAgJ2Vycm9yJzogJ29uRXJyb3InXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5KGNvbmRpdGlvbiwgbWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihzZXR0aW5ncykpIHtcclxuICAgICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RleHRtYXJrZXI6ICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0eXBlKSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvblVybDogYnJvd3Nlci5leHRlbnNpb24uZ2V0VVJMKCdjb250ZW50L2ljb25zL3RtNDgucG5nJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZWRFbnRyeSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlZF9lbnRyeScpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFBCTSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5wYm1Ob3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3BibScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV91cmwnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkSW1wb3J0KGVycm9yMSwgZXJyb3IyKSB7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UxID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IxKTtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTIgPSBlcnJvcjIgPyAnXFxuXFxuJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMikgOiAnJztcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfZmFpbHVyZScsIGVyck1lc3NhZ2UxICsgZXJyTWVzc2FnZTIpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiB0cnVlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF93YXJuaW5nJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRTdWNjZXNzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiB0cnVlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVXBkYXRlZEVudHJ5KCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmNoYW5nZWROb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3VwZGF0ZWRfZW50cnknKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdWNjZXNzZnVsUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2Muc3VjY2Vzc05vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmJnLXNldHRpbmcnOiAnY2hhbmdlQmdDb2xvcicsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJzogJ3RvZ2dsZVByaXZTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZyc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZyc6ICd0b2dnbGVOb3RlT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3RvZ2dsZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZyc6ICd0b2dnbGVOb3RpZmljYXRpb25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnOiAnY2hhbmdlU29ydE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJzogJ2NoYW5nZVZpZXdPcHQnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZyc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtYXV0b3NhdmUnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcblxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInOiAncmVtb3ZlQ3VzdG9tTWFya2VyJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJzogJ2FkZEN1c3RvbU1hcmtlcicsXHJcblxyXG4gICAgICAnbmFtZWQ6ZW50cnknOiAnc2F2ZUVudHJ5JyxcclxuICAgICAgJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJzogJ2RlbGV0ZUVudHJpZXMnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAndXBkYXRlRW50cnlPblJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnOiAnY2xlYW5FbnRyaWVzJyxcclxuICAgICAgJ3N5bmM6ZW50cnknOiAnc3luY0VudHJ5JyxcclxuICAgICAgJ3RhZzplbnRyaWVzJzogJ3RhZ0VudHJpZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVPbkNoYW5nZWRTeW5jOiBmYWxzZSxcclxuXHJcbiAgc2F2ZUFjdGl2YXRpb25TdGF0ZShhY3RpdmUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmFjdGl2ZSA9IGFjdGl2ZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICB0b2dnbGVTeW5jKGZpZWxkLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIHN5bmMgPT4geyBzeW5jW2ZpZWxkXSA9IHZhbDsgcmV0dXJuIHN5bmM7IH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnRvZ2dsZS1zeW5jJywgZmllbGQpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICB9LFxyXG5cclxuICB1cGRhdGVTZXR0aW5ncyh1cGRhdGVyLCBzZXR0aW5nLCBlcnJvcikge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHVwZGF0ZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDonICsgc2V0dGluZyArICctc2V0dGluZ3MnKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgaWYgKGVycm9yKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpOyB9KTtcclxuICB9LFxyXG5cclxuICBhZGRDdXN0b21NYXJrZXIoa2V5LCBzdHlsZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0gPSBzdHlsZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XSA9IG1hcmtlci5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNob3J0Y3V0U2V0dGluZyhrZXksIHN0YXR1cykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsxXSA9IHN0YXR1czsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNob3J0Y3V0U2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzBdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVByaXZTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ByaXZzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfcHJpdidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VOYW1pbmdPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkubmFtaW5nID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICduYW1pbmcnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9uYW1pbmcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RpZmljYXRpb25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNaXNjU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWlzYycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICBjbGVhbkVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgaSA9IG5hbWVzLmxlbmd0aCwgbmFtZTtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzW25hbWVdKSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdC5sZW5ndGggPSAwO1xyXG4gICAgICAgIGVsc2UgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnbG9jYWwnKSB7IHRoaXMuZW1pdCgnY2xlYW5lZDplbnRyaWVzJyk7IH19KVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfY2xlYW5faGlzdG9yeScpKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmNsZWFuRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KTtcclxuICB9LFxyXG4gIHNhdmVFbnRyeShlbnRyeSkge1xyXG4gICAgZW50cnkubG9zdCA9IFtdO1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdlbnRyeScsIGVudHJ5KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NhdmVkOmVudHJ5JywgZW50cnkpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeScsICdlcnJvcl9zYXZlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSA9IGVudHJ5Lm5hbWUsXHJcbiAgICAgICAgICBjdXJyZW50RW50cnkgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0sXHJcbiAgICAgICAgICBsb3N0ID0gY3VycmVudEVudHJ5Lmxvc3Q7XHJcblxyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBsb3N0IHx8IFtdO1xyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnknKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICBkZWxldGVFbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IG5hbWUsIGk7XHJcblxyXG4gICAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgIGkgPSBoaXN0b3J5Lm9yZGVyLmluZGV4T2YobmFtZSk7XHJcblxyXG4gICAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKGkgIT09IC0xKSBoaXN0b3J5Lm9yZGVyLnNwbGljZShpLCAxKTtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyeScsIG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcblx0ICBsZXQgb2xkTG9zdE1hcmtzID0gaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdDtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzLmNvbmNhdChsb3N0TWFya3MpO1xyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnN5bmMobmFtZSwgdmFsKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3N5bmNlZDplbnRyeScpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c3luYy1lbnRyeScsIG5hbWUpKTtcclxuICB9LFxyXG4gIHRhZ0VudHJpZXMobmFtZXMsIHRhZykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgIG5hbWVzLnN5bmMuZm9yRWFjaChuYW1lID0+IGVudHJpZXNbbmFtZV0udGFnID0gdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCAnc3luYycpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICAgICAgbmFtZXMubG9jYWwuZm9yRWFjaChuYW1lID0+IGVudHJpZXNbbmFtZV0udGFnID0gdGFnKTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sICdsb2NhbCcpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RhZ2dlZDplbnRyaWVzJykpO1xyXG4gIH0sXHJcbiAgcmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5vblN0b3JhZ2VDaGFuZ2VkKSk7XHJcbiAgfSxcclxuICBvblN0b3JhZ2VDaGFuZ2VkKGNoYW5nZWRJdGVtKSB7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uc2V0dGluZ3MpIHRoaXMuZW1pdCgndXBkYXRlZDpzZXR0aW5ncycpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLmhpc3RvcnkpIHRoaXMuZW1pdCgndXBkYXRlZDpoaXN0b3J5Jyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgIC8vJ3N0YXJ0ZWQ6YXBwJzogJ29wZW5Jbml0UGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICBsb2dzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWxvZ3MnLFxyXG4gICAgICBleHBvcnQ6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9ZXhwb3J0JyxcclxuICAgICAgc3luYzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zeW5jJ1xyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuKHVybHMpIHtcclxuICAgICAgdXJscyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJyA/IFt1cmxzXSA6IHVybHM7XHJcbiAgICAgIGxldCBsID0gdXJscy5sZW5ndGgsXHJcbiAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSBmYWxzZTtcclxuICAgICAgd2hpbGUgKGwtLSkgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogdXJsc1tsXSB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzZWN1cml0eVdhcm5pbmcpIHRoaXMuZW1pdCgnZmFpbGVkOm9wZW4tdGFiJyk7XHJcbiAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbkFkZG9uUGFnZShpZCkge1xyXG4gICAgICB0aGlzLm9wZW4odGhpcy51cmxzW2lkXSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbkluaXRQYWdlKHZlcnNpb24sIGxvYWRSZWFzb24pIHtcclxuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbiA8ICczJykgdGhpcy5vcGVuQWRkb25QYWdlKCdoZWxwJyk7XHJcbiAgICAgIGVsc2UgaWYgKGxvYWRSZWFzb24gJiYgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnKSB0aGlzLm9wZW5BZGRvblBhZ2UoJ2hlbHAnKTtcclxuICAgIH0sXHJcbiAgICBvcGVuU2VhcmNoKHdvcmQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBjdXN0b20gPSBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCwgdXJsO1xyXG4gICAgICAgIGlmIChjdXN0b20pIHVybCA9ICdodHRwczovLycgKyBjdXN0b21bMF0gKyB3b3JkICsgY3VzdG9tWzFdO1xyXG4gICAgICAgIGVsc2UgdXJsID0gJ2h0dHBzOi8vJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycgKyB3b3JkO1xyXG4gICAgICAgIHRoaXMub3Blbih1cmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGU6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnaW5zdGFsbDphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdjaGVjazpzdG9yYWdlJzogJ2NoZWNrU3RvcmFnZU9uU3RhcnQnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnOiAnaW1wb3J0U3RvcmFnZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cGRhdGVTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlJy5zcGxpdCgnICcpO1xyXG4gICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncztcclxuXHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykge1xyXG4gICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vdGVUeXBlcy5mb3JFYWNoKG5vdGVUeXBlID0+IHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLm1pc2Nbbm90ZVR5cGVdKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5taXNjW25vdGVUeXBlXSA9IGRlZmF1bHRTZXR0aW5ncy5taXNjW25vdGVUeXBlXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXNldHRpbmdzLmhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzZXR0aW5ncy5oaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICBzZXR0aW5ncy5oaXN0b3J5LnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS52aWV3O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzLm4pIHtcclxuICAgICAgICBzZXR0aW5ncy5zaG9ydGN1dHMubiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMubjtcclxuICAgICAgICBzZXR0aW5ncy5taXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgc2V0dGluZ3MubWlzYy5ub3Rlb25jbGljayA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghc2V0dGluZ3MubWlzYy50bXVpcG9zKSB7XHJcbiAgICAgICAgc2V0dGluZ3MubWlzYy50bXVpcG9zID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudG11aXBvcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gIH0sXHJcbiAgdXBkYXRlSGlzdG9yeShoaXN0b3J5KSB7XHJcbiAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICBvcmRlciA9IGhpc3Rvcnkub3JkZXIsXHJcbiAgICAgICAgbCA9IG9yZGVyID8gb3JkZXIubGVuZ3RoIDogMCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW29yZGVyW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBoaXN0b3J5O1xyXG4gIH0sXHJcbiAgZml4SGlzdG9yeURhdGVzKGVudHJ5KSB7XHJcbiAgICBjb25zdCBsYW5nID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5maXJzdCAhPT0gJ251bWJlcicpIGVudHJ5LmZpcnN0ID0gbmV3IERhdGUoKGVudHJ5LmZpcnN0W2xhbmddIHx8IGVudHJ5LmZpcnN0LmVuIHx8IGVudHJ5LmZpcnN0LmRlIHx8IGVudHJ5LmZpcnN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5Lmxhc3QgIT09ICdudW1iZXInKSBlbnRyeS5sYXN0ID0gbmV3IERhdGUoKGVudHJ5Lmxhc3RbbGFuZ10gfHwgZW50cnkubGFzdC5lbiB8fCBlbnRyeS5sYXN0LmRlIHx8IGVudHJ5Lmxhc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG4gIGZpeEhpc3RvcnkoaGlzdG9yeSkge1xyXG4gICAgaGlzdG9yeSA9IGhpc3RvcnkgfHwge307XHJcblxyXG4gICAgdmFyIGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMgfHwge30sXHJcbiAgICAgICAgb3JkZXIgPSBoaXN0b3J5Lm9yZGVyIHx8IFtdLFxyXG4gICAgICAgIGwgPSBvcmRlci5sZW5ndGg7XHJcblxyXG4gICAgaWYgKGwpIHtcclxuICAgICAgd2hpbGUgKGwtLSlcclxuICAgICAgICBpZiAoIWVudHJpZXNbb3JkZXJbbF1dKSBvcmRlci5zcGxpY2UobCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBlbnRyaWVzKVxyXG4gICAgICBpZiAoIW9yZGVyLmluY2x1ZGVzKG5hbWUpKSBvcmRlci5wdXNoKG5hbWUpO1xyXG5cclxuICAgIHJldHVybiBoaXN0b3J5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG5cclxuICAgICAgbGV0IG9yZGVyID0gbmV3SGlzdG9yeS5vcmRlcixcclxuICAgICAgICAgIGVudHJpZXMgPSBuZXdIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBsID0gb3JkZXIubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRPcmRlciA9IGhpc3Rvcnkub3JkZXIsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbmFtZTtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG9yZGVyW2ldO1xyXG4gICAgICAgIGlmICghb2xkT3JkZXIuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIG9sZE9yZGVyLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICBvbGRFbnRyaWVzW25hbWVdID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIG9sZEVudHJpZXNbbmFtZV0uc3luY2VkID0gYXJlYSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpO1xyXG4gIH0sXHJcblxyXG4gIHNldFN0b3JhZ2VPblVwZ3JhZGUocHJldlZlcnNpb24gPSAnMicsIGxvYWRSZWFzb24pIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKHByZXZWZXJzaW9uIDwgJzQnKSB7IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKTsgfX0pXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChwcmV2VmVyc2lvbiA8ICc0JykgeyBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdsb2NhbCcpOyB9fSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKHByZXZWZXJzaW9uIDwgJzMnKSB7IF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4gdGhpcy51cGRhdGVIaXN0b3J5KGhpc3RvcnkpLCAnc3luYycpOyB9fSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pKVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNoZWNrU3RvcmFnZU9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdzeW5jJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgfSkpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpO1xyXG4gIH0sXHJcbiAgaW1wb3J0U3RvcmFnZShpbXBvcnRlZFN0b3JhZ2UsIGFyZWEpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IGltcG9ydGVkU3RvcmFnZS5zZXR0aW5ncyxcclxuICAgICAgICBoaXN0b3J5ID0gaW1wb3J0ZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgaWYgKCFoaXN0b3J5ICYmICFzZXR0aW5ncykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9lbXB0eScpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICghaGlzdG9yeSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzX3MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2Vzc19oID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzX3MpIHtcclxuICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoc3VjY2Vzc19zID09PSAnb3V0ZGF0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOnNldHRpbmdzIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkge1xyXG4gICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ291dGRhdGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH0sXHJcbiAgaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXJnZUhpc3Rvcmllcyh0aGlzLnVwZGF0ZUhpc3RvcnkodGhpcy5maXhIaXN0b3J5KGhpc3RvcnkpKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIuZXh0ZW5zaW9uLmdldFVSTCgnY29udGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5odG1sJyk7XHJcblxyXG4gICAgICBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgpLnRoZW4oY3VycmVudFdpbmRvdyA9PiB7XHJcblxyXG4gICAgICAgIGJyb3dzZXIud2luZG93cy5jcmVhdGUoe1xyXG4gICAgICAgICAgdXJsOiBwb3B1cFVSTCArICcjJyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcclxuICAgICAgICAgIHR5cGU6ICdwYW5lbCcsXHJcbiAgICAgICAgICBoZWlnaHQ6IGN1cnJlbnRXaW5kb3cuaGVpZ2h0IC0gMjIsXHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5taW4oY3VycmVudFdpbmRvdy53aWR0aCwgOTgwKSxcclxuICAgICAgICAgIGluY29nbml0bzogY3VycmVudFdpbmRvdy5pbmNvZ25pdG9cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxubmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYmFja2dyb3VuZCcsXHJcbiAgdHlwZTogJ2JhY2tncm91bmQnLFxyXG4gIHBvc3Rwb25lQ29ubmVjdGlvbjogdHJ1ZSxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJyxcclxuICAgICAgJ3N5bmNlZDplbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDpsb2dzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmJnLWNvbG9yLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3VzdG9tLXNlYXJjaC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNhdmVvcHQtc2V0dGluZ3MnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJpZXMnLFxyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICdjdHg6bScsXHJcbiAgICAgICdjdHg6ZCcsXHJcbiAgICAgICdjdHg6YicsXHJcbiAgICAgICdjdHg6LWInLFxyXG4gICAgICAnY3R4Om4nLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnXHJcbiAgICBdLFxyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnknLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcblxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnLFxyXG4gIGFyZWFfaGlzdG9yeTogX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnLFxyXG5cclxuICBpbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMucmVtb3ZlKCdsb2dzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBzeW5jID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zeW5jID8gbG9jYWxTdG9yYWdlLnN5bmMgOiBfREVGQVVMVF9TVE9SQUdFLnN5bmM7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZXRfc3luYyhzeW5jKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuICBzZXQoZmllbGQsIHZhbCkge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19zZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcbiAgICByZXR1cm4gdGhpc1snX3NldF8nICsgZmllbGRdKHZhbCk7XHJcbiAgfSxcclxuICB1cGRhdGUoZmllbGQsIHVwZGF0ZXIsIGFyZWEpIHtcclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfdXBkYXRlXycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG4gICAgcmV0dXJuIHRoaXNbJ191cGRhdGVfJyArIGZpZWxkXSh1cGRhdGVyLCBhcmVhKTtcclxuICB9LFxyXG4gIHN5bmMobmFtZSwgdmFsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAoIWhpc3RvcnkuZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgdGhyb3coJ2VudHJ5IGRvZXNudCBleGlzdCcpO1xyXG4gICAgICBsZXQgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBsZXQgc3luY2VkRW50cnk7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzLmhhc093blByb3BlcnR5KG5hbWUpKSBzeW5jZWRFbnRyeSA9IHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGlmICh2YWwgJiYgc3luY2VkRW50cnkpIHN5bmNlZEVudHJ5LnN5bmNlZCA9IHZhbDtcclxuICAgICAgICBlbHNlIGlmICh2YWwgJiYgIXN5bmNlZEVudHJ5KSB7XHJcbiAgICAgICAgICBzdG9yYWdlLmhpc3RvcnkuZW50cmllc1tuYW1lXSA9IF9DT1BZKGVudHJ5KTtcclxuICAgICAgICAgIHN0b3JhZ2UuaGlzdG9yeS5vcmRlci5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgc3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV0uc3luY2VkID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdmFsICYmIHN5bmNlZEVudHJ5KSB7XHJcbiAgICAgICAgICBkZWxldGUgc3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICBzdG9yYWdlLmhpc3Rvcnkub3JkZXIuc3BsaWNlKHN0b3JhZ2UuaGlzdG9yeS5vcmRlci5pbmRleE9mKG5hbWUpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IGhpc3Rvcnk6IHN0b3JhZ2UuaGlzdG9yeSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgICAgbGV0IGxvY2FsRW50cnk7XHJcbiAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmhpc3RvcnkuZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgbG9jYWxFbnRyeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICBpZiAoIXZhbCAmJiBsb2NhbEVudHJ5KSBsb2NhbEVudHJ5LnN5bmNlZCA9IHZhbDtcclxuICAgICAgICAgIGVsc2UgaWYgKCF2YWwgJiYgIWxvY2FsRW50cnkpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkuZW50cmllc1tuYW1lXSA9IF9DT1BZKGVudHJ5KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3Rvcnkub3JkZXIucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkuZW50cmllc1tuYW1lXS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICh2YWwgJiYgbG9jYWxFbnRyeSkge1xyXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxTdG9yYWdlLmhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3Rvcnkub3JkZXIuc3BsaWNlKGxvY2FsU3RvcmFnZS5oaXN0b3J5Lm9yZGVyLmluZGV4T2YobmFtZSksIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBoaXN0b3J5OiBsb2NhbFN0b3JhZ2UuaGlzdG9yeSB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGlzRW1wdHkoYXJlYSA9ICdzeW5jJykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgKCFPYmplY3Qua2V5cyhzdG9yYWdlKS5sZW5ndGggJiYgc3RvcmFnZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH0sXHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gKHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcml2c2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuXHJcbiAgX3NldF9zdG9yYWdlKGFyZWEgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0X3NldHRpbmdzKGFyZWEpLnRoZW4oKCkgPT4gdGhpcy5fc2V0X2hpc3RvcnkoYXJlYSkpO1xyXG4gIH0sXHJcbiAgX3NldF9zeW5jKHN5bmMpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgc3luYzogc3luYyB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeW5jOiBzeW5jIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfc2V0dGluZ3MoYXJlYSA9IHRoaXMuYXJlYV9zZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgc2V0dGluZ3M6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2hpc3RvcnkoYXJlYSA9IHRoaXMuYXJlYV9oaXN0b3J5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IGhpc3Rvcnk6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0UuaGlzdG9yeSkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfdmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KSk7XHJcbiAgfSxcclxuICBfc2V0X2xvZyhsb2cpIHtcclxuICAgIGlmIChsb2cuY2xlYXIpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBbXSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9nZXRfbG9ncygpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgIGxvZ3MucHVzaChsb2cpO1xyXG4gICAgICBpZiAobG9ncy5sZW5ndGggPiAyMDApIGxvZ3Muc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBsb2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2VudHJ5KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgaGlzdG9yeSA9IHN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgaWYgKGhpc3Rvcnkub3JkZXIuaW5jbHVkZXMoZW50cnkubmFtZSkpIHJldHVybiB0aGlzLl91cGRhdGVfZW50cnkoZW50cnkpO1xyXG4gICAgICBoaXN0b3J5Lm9yZGVyLnB1c2goZW50cnkubmFtZSk7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5zZXQoeyBoaXN0b3J5OiBoaXN0b3J5IH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3VwZGF0ZV9oaXN0b3J5KHVwZGF0ZXIsIGFyZWEgPSB0aGlzLmFyZWFfaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKVxyXG4gICAgICAudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UuaGlzdG9yeSkge1xyXG4gICAgICAgICAgc3RvcmFnZS5oaXN0b3J5ID0gX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5oaXN0b3J5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhpc3RvcnkgPSB1cGRhdGVyKHN0b3JhZ2UuaGlzdG9yeSk7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBoaXN0b3J5OiBoaXN0b3J5IH0pLnRoZW4oKCkgPT4gaGlzdG9yeSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgX3VwZGF0ZV9zZXR0aW5ncyh1cGRhdGVyLCBhcmVhID0gdGhpcy5hcmVhX3NldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpXHJcbiAgICAgIC50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmICghc3RvcmFnZS5zZXR0aW5ncykge1xyXG4gICAgICAgICAgc3RvcmFnZS5zZXR0aW5ncyA9IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB1cGRhdGVyKHN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgc2V0dGluZ3M6IHNldHRpbmdzIH0pLnRoZW4oKCkgPT4gc2V0dGluZ3MpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIF91cGRhdGVfc3luYyh1cGRhdGVyKSB7XHJcbiAgICBsZXQgc3luYyA9IHt9O1xyXG4gICAgc3luYy5zZXR0aW5ncyA9IHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnO1xyXG4gICAgc3luYy5oaXN0b3J5ID0gdGhpcy5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuICAgIHJldHVybiB0aGlzLl9zZXRfc3luYyh1cGRhdGVyKHN5bmMpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfRVhURU5ELCBfTU9EVUxFLCBfUE9SVCwgX0VSUk9SVFJBQ0tFUiB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czp7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcyJzogJ2JhY2tncm91bmQtY29sb3I6I2NjMDAwMDtjb2xvcjojZmZmZmZmOycsXHJcbiAgICAgICczJzogJ2JhY2tncm91bmQtY29sb3I6I2ZmYzUwMDsnLFxyXG4gICAgICBtOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTY2OydcclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ3RleHQnLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMFxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fSxcclxuICAgIG9yZGVyOiBbXVxyXG4gIH0sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBjbG9uZSkge1xyXG4gIGNsb25lID0gY2xvbmUgfHwge307XHJcblxyXG4gIGZvciAobGV0IGkgaW4gb3JpZ2luYWwpIHtcclxuICAgIGlmIChvcmlnaW5hbC5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICBpZiAodHlwZW9mIG9yaWdpbmFsW2ldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGNsb25lW2ldID0gQXJyYXkuaXNBcnJheShvcmlnaW5hbFtpXSkgPyBbXSA6IHt9O1xyXG4gICAgICAgIF9DT1BZKG9yaWdpbmFsW2ldLCBjbG9uZVtpXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvbmVbaV0gPSBvcmlnaW5hbFtpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY2xvbmU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiBsYXN0QXJnLnRhYikge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=