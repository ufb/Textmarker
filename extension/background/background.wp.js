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


__webpack_require__(/*! ../icons/on16.png */ "./icons/on16.png");

__webpack_require__(/*! ../icons/on18.png */ "./icons/on18.png");

__webpack_require__(/*! ../icons/on32.png */ "./icons/on32.png");

__webpack_require__(/*! ../icons/on36.png */ "./icons/on36.png");

__webpack_require__(/*! ../icons/on64.png */ "./icons/on64.png");

__webpack_require__(/*! ../icons/off16.png */ "./icons/off16.png");

__webpack_require__(/*! ../icons/off18.png */ "./icons/off18.png");

__webpack_require__(/*! ../icons/tm48.png */ "./icons/tm48.png");

var _utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./background/utils.js"));

var _storage = _interopRequireDefault(__webpack_require__(/*! ./storage */ "./background/storage.js"));

__webpack_require__(/*! ./port */ "./background/port.js");

__webpack_require__(/*! ./modules/error-logging */ "./background/modules/error-logging.js");

__webpack_require__(/*! ./modules/injection-manager */ "./background/modules/injection-manager.js");

var _notifications = _interopRequireDefault(__webpack_require__(/*! ./modules/notifications */ "./background/modules/notifications.js"));

var _tabs = _interopRequireDefault(__webpack_require__(/*! ./modules/tabs */ "./background/modules/tabs.js"));

var _windows = _interopRequireDefault(__webpack_require__(/*! ./modules/windows */ "./background/modules/windows.js"));

var _sidebars = _interopRequireDefault(__webpack_require__(/*! ./modules/sidebars */ "./background/modules/sidebars.js"));

var _namer = _interopRequireDefault(__webpack_require__(/*! ./modules/namer */ "./background/modules/namer.js"));

var _contextMenu = _interopRequireDefault(__webpack_require__(/*! ./modules/context-menu */ "./background/modules/context-menu.js"));

__webpack_require__(/*! ./modules/version-manager */ "./background/modules/version-manager.js");

__webpack_require__(/*! ./modules/store-manager */ "./background/modules/store-manager.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//import _IDB from './modules/indexeddb'
new _utils._MODULE({
  events: {
    ENV: {
      'imported:settings': 'toggleOnImport',
      'initialized:storage': 'start',
      'migrated:storage': 'start',
      'checked:storage': 'start',
      'toggle:addon': 'toggle',
      'updated:tbbpower-settings': 'setTBBAction'
    }
  },
  active: true,
  version: '',
  loadReason: '',
  autoinit: function autoinit() {
    var _this = this;

    var currentVersion = this.version = browser.runtime.getManifest().version;
    browser.runtime.onInstalled.addListener(function (details) {
      _storage.default.get('version').then(function (version) {
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

    _storage.default.get('version').then(function (version) {
      if (version && version === currentVersion) _this.emit('check:storage');
    });
  },
  start: function start() {
    var _this2 = this;

    _storage.default.set('version', this.version); //_IDB();


    (0, _notifications.default)();
    (0, _tabs.default)();
    (0, _namer.default)();
    (0, _contextMenu.default)();
    (0, _windows.default)();
    (0, _sidebars.default)();

    _storage.default.get('mode').then(function (mode) {
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
    this.setTBBAction();
  },
  toggle: function toggle() {
    var mode = !this.active;
    this.activate(mode);
    this.emit('toggled:addon', mode);
  },
  toggleOnImport: function toggleOnImport() {
    var _this3 = this;

    _storage.default.get('mode').then(function (mode) {
      return _this3.activate(mode);
    });
  },
  toggleBrowserActionIcon: function toggleBrowserActionIcon(on) {
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
  },
  setTBBAction: function setTBBAction(add) {
    var _this4 = this;

    if (typeof add === 'boolean') {
      if (add) this.addTBBHandler();else this.removeTBBHandler();
    } else {
      _storage.default.get('tbbpower').then(function (enabled) {
        if (enabled) _this4.addTBBHandler();else _this4.removeTBBHandler();
      });
    }
  },
  addTBBHandler: function addTBBHandler() {
    var _this5 = this;

    if (!this.tbbHandler) {
      var tbbHandler = this.tbbHandler = function () {
        return _this5.toggle();
      };

      browser.browserAction.setPopup({
        popup: ''
      });
      browser.browserAction.onClicked.addListener(tbbHandler);
    }
  },
  removeTBBHandler: function removeTBBHandler() {
    if (this.tbbHandler) {
      browser.browserAction.setPopup({
        popup: 'content/tbb-menu/tbb-menu.html'
      });
      browser.browserAction.onClicked.removeListener(this.tbbHandler);
      this.tbbHandler = null;
    }
  }
});

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
exports.default = _default;

var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._MODULE({
    events: {
      ENV: {
        'toggled:addon': 'toggle',
        'updated:ctm-settings': 'update'
      }
    },
    items: {
      m: {
        contexts: ['selection']
      },
      w: {
        contexts: ['selection']
      },
      d: {
        contexts: ['frame', 'link', 'page']
      },
      b: {
        contexts: ['frame', 'link', 'page']
      },
      '-b': {
        contexts: ['frame', 'link', 'page']
      },
      n: {
        contexts: ['frame', 'link', 'page']
      },
      sb: {
        contexts: ['all', 'tab']
      }
    },
    created: [],
    autoinit: function autoinit() {
      var _this = this;

      var item;

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

      _storage.default.get('shortcuts').then(function (shortcuts) {
        for (var i in _this2.items) {
          if (shortcuts[i][2]) _this2.create(i);else _this2.remove(i);
        }
      });
    },
    onClick: function onClick(infos, tab) {
      var id = infos.menuItemId;
      if (id === 'w') this.emit('lookup:word', infos.selectionText);else if (id === 'sb') browser.sidebarAction.open();else this.emit('ctx:' + id, null, null, {
        tab: tab.id
      });
    }
  });
}

/***/ }),

/***/ "./background/modules/error-logging.js":
/*!*********************************************!*\
  !*** ./background/modules/error-logging.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

var _logKeys = _interopRequireDefault(__webpack_require__(/*! ./../../data/log-keys */ "./data/log-keys.js"));

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
      'warn:mixed-entry-types': 'onMixedEntryTypes',
      'warn:multiple-unlocked-entries': 'onMultipleUnlockedEntries',
      'failed:pbm': 'onFailedPBM',
      'failed:open-tab': 'onOpenTabFailure',
      'error:import': 'log',
      'error:browser-console': 'log',
      'clear:logs': 'clear',
      'failed:restore-range': 'log'
    }
  },
  log: function log(error, report) {
    var _this = this;

    var log, msg;

    if (error.time) {
      log = [error.time, error.message + ' [' + error.location + ']'];
    } else {
      log = [new Date().getTime(), _logKeys.default[error] || error];

      if (report && typeof report === 'string') {
        log.push(report);
      }
    }

    _storage.default.set('log', log).then(function () {
      return _this.emit('updated:logs logged:error', log);
    });
  },
  clear: function clear() {
    var _this2 = this;

    _storage.default.set('log', {
      clear: true
    }).then(function () {
      return _this2.emit('updated:logs');
    });
  },
  onMixedEntryTypes: function onMixedEntryTypes() {
    this.log('note_restoration_warning_1');
  },
  onMultipleUnlockedEntries: function onMultipleUnlockedEntries() {
    this.log('note_restoration_warning_2');
  },
  onFailedRestoration: function onFailedRestoration(report) {
    this.log('note_restoration_failure', report);
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


var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'check:url': 'checkUrl',
      'save:entry?': 'onSaveNewRequest',
      'update:entry?': 'onUpdateRequest',
      'name:entry?': 'onNamingRequest',
      'opened:entry': 'tempSaveEntryMetaData'
    }
  },
  recentlyOpenedEntry: null,
  checkUrl: function checkUrl(url, sender, sendResponse) {
    var _this = this;

    var hashlessPageUrl = (0, _utils._HASHLESS)(url);

    _storage.default.get('history').then(function (history) {
      var entries = history.entries,
          matches = [],
          lockedMatches = [],
          entry,
          pageUrl,
          entryUrl;

      for (var e in entries) {
        entry = entries[e];
        pageUrl = entry.hashSensitive ? url : hashlessPageUrl;
        entryUrl = entry.hashSensitive ? entry.url : (0, _utils._HASHLESS)(entry.url);

        if (pageUrl === entryUrl) {
          matches.push(entry);
          if (entry.locked) lockedMatches.push(entry);
        }
      }

      if (!matches.length) {
        sendResponse(null);
      } else {
        sendResponse({
          entries: matches,
          recentlyOpenedEntry: _this.recentlyOpenedEntry
        });
        _this.recentlyOpenedEntry = null;
      }

      entry = lockedMatches.length ? lockedMatches : !matches.length ? null : matches[0];

      _this.emit('entry:found', entry);
    });
  },
  onNamingRequest: function onNamingRequest(sender, sendResponse) {
    var _this2 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      var priv = windowInfo.incognito;
      if (!priv) sendResponse(!priv);else {
        _storage.default.get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this2.emit('failed:pbm');else sendResponse(saveInPriv);
        });
      }
    });
  },
  onSaveNewRequest: function onSaveNewRequest(entry) {
    var _this3 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this3.emit('granted:save-entry', entry);else {
        _storage.default.get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this3.emit('failed:pbm');else _this3.emit('granted:save-entry', entry);
        });
      }
    });
  },
  onUpdateRequest: function onUpdateRequest(entry) {
    var _this4 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this4.emit('granted:update-entry', entry);else {
        _storage.default.get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this4.emit('failed:pbm');else _this4.emit('granted:update-entry', entry);
        });
      }
    });
  },
  tempSaveEntryMetaData: function tempSaveEntryMetaData(data) {
    this.recentlyOpenedEntry = data;
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
exports.default = _default;

var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

var _globalSettings = _interopRequireDefault(__webpack_require__(/*! ./../../data/global-settings */ "./data/global-settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._MODULE({
    events: {
      ENV: {
        'granted:save-entry': 'name',
        'rename:entry': 'rename'
      }
    },
    name: function name(entry) {
      var _this = this;

      if (entry.name) return this.adjustName(entry.name, entry);

      _storage.default.get('naming').then(function (naming) {
        return _this.adjustName(null, entry, naming);
      }).catch(function () {
        return _this.emit('error', 'error_naming');
      });
    },
    rename: function rename(oldName, newName, area) {
      var _this2 = this;

      newName = newName.substring(0, _globalSettings.default.MAX_ENTRY_NAME_CHARS - 1);

      _storage.default.get('history').then(function (history) {
        var counter = _this2.getDoubleNameCount(history, newName);

        if (counter) newName += ' (' + (counter + 1) + ')';

        _this2.emit('renamed:entry', oldName, newName, area);
      }).catch(function () {
        return _this2.emit('error', 'error_naming');
      });
    },
    adjustName: function adjustName(name, entry, method) {
      var _this3 = this;

      name = name ? name : method === 'title' ? entry.title.trim() ? entry.title.trim() : entry.url : method === 'date' ? new Date(entry.first).toLocaleString() : '';
      name = name.substring(0, _globalSettings.default.MAX_ENTRY_NAME_CHARS - 1);

      _storage.default.get('history').then(function (history) {
        var counter = _this3.getDoubleNameCount(history, name);

        if (counter && entry.locked) {
          _this3.emit('failed:save-entry-double-locked', 'error_double_locked_name', name);
        } else {
          if (counter) name += ' (' + (counter + 1) + ')';
          entry.name = name;

          _this3.emit('named:entry', entry);
        }
      }).catch(function () {
        return _this3.emit('error', 'error_naming');
      });
    },
    getDoubleNameCount: function getDoubleNameCount(history, name) {
      var existingNames = Object.keys(history.entries),
          l = existingNames.length,
          counter = 0,
          checkpoint;

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
          checkpoint_end;
      if (name !== checkpoint_start) return false;
      checkpoint_end = checkpoint.substring(l, checkpoint.length);
      if (/^\s*\(\d+\)$/.test(checkpoint_end)) return true;
      return false;
    }
  });
}

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
exports.default = _default;

var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._MODULE({
    events: {
      ENV: {
        'saved:entry': 'onSavedEntry',
        'failed:save-entry': 'onSaveError',
        'failed:update-entry': 'onSaveError',
        'failed:save-entry-double-locked': 'onSaveLockedDoubleNameError',
        'failed:delete-entries': 'onDeleteError',
        'failed:open-tab': 'onOpenTabFailure',
        'failed:restoration': 'onFailedRestoration',
        'succeeded:restoration': 'onSuccessfulRestoration',
        'canceled:save-after-canceled-restoration': 'onCanceledSave',
        'failed:pbm': 'onFailedPBM',
        'failed:import': 'onFailedImport',
        'error:import': 'onImportError',
        'imported:storage': 'onImportSuccess',
        'error': 'onError',
        'warn:mixed-entry-types': 'onMixedEntryTypes',
        'warn:multiple-unlocked-entries': 'onMultipleUnlockedEntries'
      }
    },
    notify: function notify(condition, message, type) {
      _storage.default.get('settings').then(function (settings) {
        if (condition(settings)) {
          browser.notifications.create({
            type: 'basic',
            title: 'Textmarker: ' + browser.i18n.getMessage(type),
            message: message,
            iconUrl: browser.runtime.getURL('icons/tm48.png')
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
    onMixedEntryTypes: function onMixedEntryTypes() {
      this.notify(function (settings) {
        return settings.misc.failureNote;
      }, browser.i18n.getMessage('note_restoration_warning_1'), 'warning');
    },
    onMultipleUnlockedEntries: function onMultipleUnlockedEntries() {
      this.notify(function (settings) {
        return settings.misc.failureNote;
      }, browser.i18n.getMessage('note_restoration_warning_2'), 'warning');
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
    onCanceledSave: function onCanceledSave() {
      this.notify(function (settings) {
        return settings.history.saveNote;
      }, browser.i18n.getMessage('canceled_save_warning'), 'warning');
    },
    onSaveError: function onSaveError(error) {
      this.notify(function (settings) {
        return settings.history.saveNote;
      }, browser.i18n.getMessage('note_save_failure', browser.i18n.getMessage(error)), 'error');
    },
    onSaveLockedDoubleNameError: function onSaveLockedDoubleNameError(error, name) {
      this.notify(function (settings) {
        return settings.history.saveNote;
      }, browser.i18n.getMessage('note_save_failure', browser.i18n.getMessage(error, name)), 'error');
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
}

/***/ }),

/***/ "./background/modules/sidebars.js":
/*!****************************************!*\
  !*** ./background/modules/sidebars.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _default() {
  return new _utils._MODULE({
    events: {
      ENV: {
        'activated:tab': 'setPanel',
        'changed:url': 'setPanel',
        'entry:found': 'storeEntry',
        'saved:entry': 'storeEntry',
        'updated:entry': 'updateEntry',
        'deleted:entry': 'removeEntry',
        'opened:sidebar': 'sendEntry',
        'visually-ordered:marks': 'sendOrderedMarks'
      }
    },
    entries: {},
    setPanel: function setPanel(tabId, url) {
      this.isOpen().then(function (open) {
        if (open) {
          browser.sidebarAction.setPanel({
            panel: browser.runtime.getURL("content/sidebar/sidebar.html#".concat(tabId, "_").concat(url)),
            tabId: tabId
          });
        }
      });
    },
    isOpen: function isOpen() {
      return browser.sidebarAction.isOpen({});
    },
    storeEntry: function storeEntry(entry) {
      var ignoreHash = !entry.hashSensitive;
      var entries = this.entries;
      (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
        var id = tab.id;
        var url = ignoreHash ? (0, _utils._HASHLESS)(tab.url) : tab.url;
        entries[id] = entries[id] || [];
        entries[id][url] = entry;
      });
    },
    updateEntry: function updateEntry(entry) {
      var _this = this;

      var ignoreHash = !entry.hashSensitive;
      var entries = this.entries;
      var entryUrl = ignoreHash ? (0, _utils._HASHLESS)(entry.url) : entry.url;

      for (var id in entries) {
        for (var url in entries[id]) {
          if (url === entryUrl) {
            entries[id][url] = entry;
          }
        }
      }

      (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
        var tabUrl = ignoreHash ? (0, _utils._HASHLESS)(tab.url) : tab.url;

        if (tabUrl === entryUrl) {
          _this.emit('entry:found-for-tab', entry);
        }
      });
    },
    removeEntry: function removeEntry(name, url, hashSensitive) {
      var _this2 = this;

      var entries = this.entries;
      var entryUrl = hashSensitive ? url : (0, _utils._HASHLESS)(url);

      for (var id in entries) {
        for (var savedUrl in entries[id]) {
          if (savedUrl === entryUrl) {
            delete entries[id][savedUrl];
          }
        }
      }

      (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
        var tabUrl = hashSensitive ? tab.url : (0, _utils._HASHLESS)(tab.url);

        if (tabUrl === entryUrl) {
          _this2.emit('entry:deleted-for-tab');
        }
      });
    },
    sendEntry: function sendEntry() {
      var _this3 = this;

      (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
        var hashlessUrl = (0, _utils._HASHLESS)(tab.url);
        var entriesForThisTab = _this3.entries[tab.id];
        var entry = null;

        if (entriesForThisTab) {
          entry = entriesForThisTab[tab.url] || entriesForThisTab[hashlessUrl];
        }

        _this3.emit('entry:found-for-tab', entry);
      });
    },
    sendOrderedMarks: function sendOrderedMarks(marks) {
      this.emit('entry:ordered-marks', marks);
    }
  });
}

/***/ }),

/***/ "./background/modules/store-manager.js":
/*!*********************************************!*\
  !*** ./background/modules/store-manager.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'registerStorageChangedHandler',
      'toggled:addon': 'saveActivationState',
      'toggle:sync': 'toggleSync',
      'change:style-setting': 'changeStyle',
      'change:autonote-setting': 'changeAutoNoteSetting',
      'change:bg-setting': 'changeBgColor',
      'change:mark-method-setting': 'changeMarkMethod',
      'toggle:shortcut-setting': 'toggleShortcutSetting',
      'change:shortcut-setting': 'changeShortcutSetting',
      'toggle:ctm-setting': 'toggleCtmSetting',
      'change:saveopt-setting': 'changeSaveOpt',
      'change:immut-setting': 'toggleImmutOpt',
      'change:dropLosses-setting': 'toggleDropLossesOpt',
      'change:hash-setting': 'toggleHashOpt',
      'toggle:priv-setting': 'togglePrivSaveOpt',
      'change:namingopt-setting': 'changeNamingOpt',
      'toggle:noteopt-setting': 'toggleNoteOpt',
      'toggle:quickbuttonopt-setting': 'toggleQuickbuttonOpt',
      'switch:quickbuttonopt-setting': 'switchQuickbuttonOpt',
      'toggle:notification-setting': 'toggleNotificationOpt',
      'toggle:misc-setting': 'changeMiscSetting',
      'change:misc-setting': 'changeMiscSetting',
      'toggle:tbbpower-setting': 'toggleTBBPowerSetting',
      'change:sort-setting': 'changeSortOpt',
      'change:view-setting': 'changeViewOpt',
      'change:custom-search-setting': 'changeCustomSearch',
      'changed:per-page-count': 'changeCountPerPage',
      'remove:custom-marker': 'removeCustomMarker',
      'add:custom-marker': 'addCustomMarker',
      'named:entry': 'saveEntry',
      'renamed:entry': 'saveNewName',
      'granted:update-entry': 'updateEntryOnPageAction',
      'delete:entries': 'deleteEntries',
      'finished:restoration': 'updateEntryOnRestoration',
      'clean:entries': 'cleanEntries',
      'sync:entry': 'syncEntry',
      'tag:entries': 'tagEntries',
      'remove:tag': 'removeTag',
      'add:tag': 'addTag',
      'toggled:sidebar-tab': 'changeSBSettings',
      'changed:sidebar-theme': 'changeThemeSettings',
      'updated:page-note': 'updatePageNotes'
    }
  },
  updateOnChangedSync: false,
  // ADDON METHODS
  saveActivationState: function saveActivationState(active) {
    _storage.default.update('settings', function (settings) {
      settings.addon.active = active;
      return settings;
    });
  },
  // SYNC METHODS
  toggleSync: function toggleSync(field, val) {
    var _this = this;

    _storage.default.update('sync', function (sync) {
      sync[field] = val;
      this.area_settings = sync.settings ? 'sync' : 'local';
      this.area_history = sync.history ? 'sync' : 'local';
      this.area_pagenotes = sync.pagenotes ? 'sync' : 'local';
      return sync;
    }, 'local').then(function () {
      _storage.default.update('sync', function (sync) {
        sync[field] = val;
        return sync;
      }).catch(function () {
        _this.emit('error', 'error_toggle_sync');

        _this.emit('failed:toggle-sync', field);
      }).then(function () {
        return _this.emit('toggled:sync toggled:sync-' + field, field, val);
      });
    });
  },
  // SETTINGS METHODS
  updateSettings: function updateSettings(updater, setting, error) {
    var _this2 = this;

    _storage.default.update('settings', updater).then(function () {
      return _this2.emit('updated:' + setting + '-settings');
    }).catch(function () {
      if (error) _this2.emit('error', error);
    });
  },
  addCustomMarker: function addCustomMarker(key, style) {
    this.updateSettings(function (settings) {
      settings.markers[key] = {
        style: style
      };
      return settings;
    }, 'marker', 'error_add_marker');
  },
  removeCustomMarker: function removeCustomMarker(key) {
    this.updateSettings(function (settings) {
      delete settings.markers[key];
      return settings;
    }, 'marker', 'error_remove_marker');
  },
  changeStyle: function changeStyle(key, style) {
    if (!key) return false;
    this.updateSettings(function (settings) {
      settings.markers[key].style = style;
      return settings;
    }, 'style', 'error_save_style');
  },
  changeBgColor: function changeBgColor(key, color) {
    this.updateSettings(function (settings) {
      var marker = settings.markers[key];

      if (marker) {
        var split = marker.style.split(';'),
            l = split.length,
            style;

        while (l--) {
          style = split[l];

          if (style.includes('background-color')) {
            settings.markers[key].style = marker.style.replace(/background-color:#.{6}/, 'background-color:' + color);
            break;
          }
        }
      }

      return settings;
    }, 'bg-color', 'error_save_style');
  },
  changeAutoNoteSetting: function changeAutoNoteSetting(key, autonote) {
    this.updateSettings(function (settings) {
      settings.markers[key].autonote = autonote;
      return settings;
    }, 'autonote', 'error_save_toggle_autonote');
  },
  changeMarkMethod: function changeMarkMethod(method) {
    this.updateSettings(function (settings) {
      settings.misc.markmethod = method;
      return settings;
    }, 'mark-method', 'error_save_mark_method');
  },
  toggleShortcutSetting: function toggleShortcutSetting(key, status) {
    this.updateSettings(function (settings) {
      settings.shortcuts[key][1] = status;
      return settings;
    }, 'shortcut', 'error_save__toggle_sc');
  },
  changeShortcutSetting: function changeShortcutSetting(key, value) {
    this.updateSettings(function (settings) {
      settings.shortcuts[key][0] = value;
      return settings;
    }, 'shortcut', 'error_save_change_sc');
  },
  changeSortOpt: function changeSortOpt(value) {
    this.updateSettings(function (settings) {
      settings.history.sorted = value;
      return settings;
    }, 'sort');
  },
  changeViewOpt: function changeViewOpt(value) {
    this.updateSettings(function (settings) {
      settings.history.view = value;
      return settings;
    }, 'view');
  },
  changeCustomSearch: function changeCustomSearch(values) {
    this.updateSettings(function (settings) {
      settings.misc.customSearch = values;
      return settings;
    }, 'custom-search', 'error_save_change_search');
  },
  changeCountPerPage: function changeCountPerPage(value) {
    this.updateSettings(function (settings) {
      settings.history.pp = value;
      return settings;
    }, 'count-per-page');
  },
  toggleCtmSetting: function toggleCtmSetting(key, value) {
    this.updateSettings(function (settings) {
      settings.shortcuts[key][2] = value;
      return settings;
    }, 'ctm', 'error_save_ctm');
  },
  changeSaveOpt: function changeSaveOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.autosave = val;
      return settings;
    }, 'saveopt', 'error_save_autosave');
  },
  toggleImmutOpt: function toggleImmutOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.immut = val;
      return settings;
    }, 'immutopt', 'error_save_autosave');
  },
  toggleDropLossesOpt: function toggleDropLossesOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.dropLosses = val;
      return settings;
    }, 'droplossesopt', 'error_save_autosave');
  },
  toggleHashOpt: function toggleHashOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.ignoreHash = val;
      return settings;
    }, 'hashopt');
  },
  togglePrivSaveOpt: function togglePrivSaveOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.saveInPriv = val;
      return settings;
    }, 'privsaveopt', 'error_save_priv');
  },
  changeNamingOpt: function changeNamingOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.naming = val;
      return settings;
    }, 'naming', 'error_save_naming');
  },
  toggleNoteOpt: function toggleNoteOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.saveNote = val;
      return settings;
    }, 'noteopt', 'error_save_notify');
  },
  toggleQuickbuttonOpt: function toggleQuickbuttonOpt(prop, val) {
    this.updateSettings(function (settings) {
      settings.history[prop] = val;
      return settings;
    }, 'quickbutton', 'error_save_download');
  },
  switchQuickbuttonOpt: function switchQuickbuttonOpt(prop, val) {
    this.updateSettings(function (settings) {
      settings.history[prop] = val;
      return settings;
    }, 'quickbutton', 'error_save_download');
  },
  toggleNotificationOpt: function toggleNotificationOpt(prop, val) {
    this.updateSettings(function (settings) {
      settings.misc[prop] = val;
      return settings;
    }, 'notification', 'error_save_notify');
  },
  changeMiscSetting: function changeMiscSetting(prop, val) {
    this.updateSettings(function (settings) {
      settings.misc[prop] = val;
      return settings;
    }, 'misc', 'error_save_bmicon');
  },
  toggleTBBPowerSetting: function toggleTBBPowerSetting(prop, val) {
    this.updateSettings(function (settings) {
      settings.misc[prop] = val;
      return settings;
    }, 'tbbpower', 'error_save_bmicon');
  },
  changeSBSettings: function changeSBSettings(tab, unfolded) {
    _storage.default.update('settings', function (settings) {
      settings.sb.tabs[tab].unfolded = unfolded;
      return settings;
    });
  },
  changeThemeSettings: function changeThemeSettings(theme) {
    _storage.default.update('settings', function (settings) {
      settings.sb.theme = theme;
      return settings;
    });
  },
  // HISTORY METHODS
  cleanEntries: function cleanEntries(names, area) {
    var _this3 = this;

    if (!names.length) return;
    area = typeof area === 'string' ? area : 'sync';
    var names_local = [];
    return _storage.default.update('history', function (history) {
      var i = names.length,
          name;

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
    var name = entry.name;

    _storage.default.update('history', function (history) {
      history.entries[name] = entry;
      return history;
    }).then(function (history) {
      return _this4.emit('saved:entry', history.entries[name]);
    }).catch(function () {
      return _this4.emit('failed:save-entry', 'error_save_entry');
    });
  },
  saveNewName: function saveNewName(oldName, newName, area) {
    var _this5 = this;

    _storage.default.update('history', function (history) {
      var entry = (0, _utils._COPY)(history.entries[oldName]);
      entry.name = newName;
      history.entries[newName] = entry;
      delete history.entries[oldName];
      return history;
    }, area).then(function (history) {
      return _this5.emit('updated:entry updated:entry-name', history.entries[newName], oldName);
    }).catch(function () {
      return _this5.emit('failed:update-entry', 'error_update_entry');
    });
  },
  updateEntryOnPageAction: function updateEntryOnPageAction(entry, area) {
    var _this6 = this;

    area = typeof area === 'string' ? area : entry.synced ? 'sync' : 'local';
    var name = entry.name;
    var receivedCompleteEntry = !!entry.url;
    var found = true;

    _storage.default.update('history', function (history) {
      if (receivedCompleteEntry) {
        history.entries[name] = entry;
        history.entries[name].lost = history.entries[name].lost || [];
      } else {
        if (!history.entries[name]) {
          found = false;
        } else {
          delete entry.synced;

          for (var e in entry) {
            if (entry.hasOwnProperty(e)) {
              history.entries[name][e] = entry[e];
            }
          }

          history.entries[name].lost = history.entries[name].lost || [];
        }
      }

      return history;
    }, area).catch(function (e) {
      return _this6.emit('failed:update-entry', 'error_update_entry');
    }).then(function () {
      if (!found) {
        _this6.updateEntryOnPageAction(entry, entry.synced ? 'local' : 'sync');
      }
    }).then(function () {
      return _this6.emit('updated:entry updated:entry-on-save', entry);
    });
  },
  deleteEntries: function deleteEntries(names, area) {
    var _this7 = this;

    if (!names.length) return;
    area = typeof area === 'string' ? area : 'sync';
    var names_local = [];
    return _storage.default.update('history', function (history) {
      var name, url, hashSensitive;

      while (names.length) {
        name = names.pop();

        if (history.entries && Object.keys(history.entries).indexOf(name) !== -1) {
          url = history.entries[name].url;
          hashSensitive = history.entries[name].hashSensitive;
          delete history.entries[name];

          _this7.emit('deleted:entry', name, url, hashSensitive);
        } else {
          names_local.push(name);
        }
      }

      return history;
    }, area).catch(function () {
      return _this7.emit('failed:delete-entries', 'error_del_entry');
    }).then(function () {
      if (area === 'sync' && names_local.length) {
        _this7.deleteEntries(names_local, 'local');
      }
    }).then(function () {
      return _this7.emit('deleted:entries');
    });
  },
  updateEntryOnRestoration: function updateEntryOnRestoration(entryName, restoredMarks, lostMarks, area) {
    _storage.default.get('settings').then(function (settings) {
      if (settings.history.dropLosses === true) {
        _storage.default.update('history', function (history) {
          var oldLostMarks = history.entries[entryName].lost || [];
          var restoredMarksIDs = [];
          var oldLostMarksIDs = [];
          history.entries[entryName].marks = restoredMarks;
          restoredMarks.forEach(function (mark) {
            return restoredMarksIDs.push(mark.id);
          });
          var l = oldLostMarks.length,
              id;

          while (l--) {
            id = oldLostMarks[l].id;

            if (restoredMarksIDs.includes(id)) {
              oldLostMarks.splice(l, 1);
            } else {
              oldLostMarksIDs.push(id);
            }
          }

          lostMarks.forEach(function (mark) {
            if (!oldLostMarksIDs.includes(mark.id)) oldLostMarks.push(mark);
          });
          history.entries[entryName].lost = oldLostMarks;
          return history;
        }, area);
      }
    });
  },
  syncEntry: function syncEntry(name, val) {
    var _this8 = this;

    var area_1 = val ? 'local' : 'sync';
    var area_2 = val ? 'sync' : 'local';
    var entry;

    _storage.default.update('history', function (history) {
      entry = (0, _utils._COPY)(history.entries[name]);
      entry.synced = val;
      delete history.entries[name];
      return history;
    }, area_1).then(function () {
      _storage.default.update('history', function (history) {
        history.entries[name] = entry;
        return history;
      }, area_2).then(function () {
        return _this8.emit('updated:entry updated:entry-sync', entry);
      }).catch(function () {
        return _this8.emit('failed:sync-entry', name);
      });
    });
  },
  tagEntries: function tagEntries(names, tag) {
    var _this9 = this;

    _storage.default.update('history', function (history) {
      var entries = history.entries;
      names.sync.forEach(function (name) {
        return _this9.addTagToEntry(entries[name], tag);
      });
      return history;
    }, 'sync').then(function () {
      return _storage.default.update('history', function (history) {
        var entries = history.entries;
        names.local.forEach(function (name) {
          return _this9.addTagToEntry(entries[name], tag);
        });
        return history;
      }, 'local');
    });
  },
  removeTag: function removeTag(tag, entry) {
    var _this10 = this;

    var area = entry.synced ? 'sync' : 'local';
    var name = entry.name;

    _storage.default.update('history', function (history) {
      var storedEntry = history.entries[name];
      var rx = new RegExp('^' + tag + '$|^' + tag + '\\s|\\s' + tag + '\\s|\\s' + tag + '$');

      if (storedEntry.tag) {
        storedEntry.tag = storedEntry.tag.replace(rx, ' ').replace(/^\s|\s$/, '').replace(/\s{2,}/, ' ');
      }

      return history;
    }, area).then(function (history) {
      return _this10.emit('updated:entry updated:entry-tags', history.entries[name]);
    });
  },
  addTag: function addTag(tag, entry) {
    var _this11 = this;

    var area = entry.synced ? 'sync' : 'local';
    var name = entry.name;

    _storage.default.update('history', function (history) {
      _this11.addTagToEntry(history.entries[name], tag);

      return history;
    }, area);
  },
  addTagToEntry: function addTagToEntry(entry, tag) {
    if (!tag) entry.tag = '';else if (!entry.tag) entry.tag = tag;else {
      var rx = new RegExp('^' + tag + '$|^' + tag + '\\s|\\s' + tag + '\\s|\\s' + tag + '$', 'g');

      if (entry.tag.search(rx) === -1) {
        entry.tag += ' ' + tag;
      }
    }
    this.emit('updated:entry updated:entry-tags', entry);
    return entry;
  },
  // PAGE NOTE METHODS
  updatePageNotes: function updatePageNotes(url, notes) {
    _storage.default.update('pagenotes', function (pagenotes) {
      pagenotes[url] = notes;
      return pagenotes;
    });
  },
  registerStorageChangedHandler: function registerStorageChangedHandler() {
    browser.storage.onChanged.addListener(this.proxy(this, this.onStorageChanged));
  },
  onStorageChanged: function onStorageChanged(changedItem) {
    if (changedItem.settings) this.emit('updated:settings');
    if (changedItem.history) this.emit('updated:history');
    if (changedItem.pagenotes) this.emit('updated:pagenotes');
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
exports.default = _default;

var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._MODULE({
    events: {
      ENV: {
        //'started:app': 'openInitPage',
        'open:addon-page(sb)': 'openAddonPage',
        'open:addon-page(tbb)': 'openAddonPage',
        'open:addon-page(am)': 'openAddonPage',
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
    autoinit: function autoinit() {
      var _this = this;

      browser.tabs.onActivated.addListener(function (tab) {
        return _this.emit('activated:tab', tab.tabId, tab.url || '');
      });
      browser.tabs.onUpdated.addListener(function (tabId, changed) {
        if (changed.url) {
          _this.emit('changed:url', tabId, changed.url);
        }
      });
    },
    open: function open(urls, names) {
      urls = typeof urls === 'string' ? [urls] : urls;
      names = typeof names === 'string' ? [names] : names;
      var l = urls.length,
          securityWarning = false,
          url;

      while (l--) {
        (function (self, l) {
          url = urls[l];
          browser.tabs.create({
            url: urls[l]
          }).catch(function () {
            if (!securityWarning) self.emit('failed:open-tab');
            securityWarning = true;
          }).then(function () {
            if (names) self.emit('opened:entry', {
              url: url,
              name: names[l]
            });
          });
        })(this, l);
      }
    },
    openAddonPage: function openAddonPage(id) {
      this.open(this.urls[id]);
    },
    openInitPage: function openInitPage(version, loadReason) {
      if (loadReason && loadReason === 'install' || loadReason === 'update') this.openAddonPage('news');
    },
    openSearch: function openSearch(word) {
      var _this2 = this;

      _storage.default.get('settings').then(function (settings) {
        var custom = settings.misc.customSearch,
            url;
        if (custom) url = 'https://' + custom[0] + word + custom[1];else url = 'https://' + browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/' + word;

        _this2.open(url);
      });
    }
  });
}

/***/ }),

/***/ "./background/modules/version-manager.js":
/*!***********************************************!*\
  !*** ./background/modules/version-manager.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _defaultStorage = _interopRequireDefault(__webpack_require__(/*! ./../../data/default-storage */ "./data/default-storage.js"));

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
    try {
      var defaultSettings = _defaultStorage.default.settings;

      if (!settings.shortcuts) {
        settings = defaultSettings;
      } else {
        var shortcuts = settings.shortcuts;
        var markers = settings.markers;
        var history = settings.history;
        var misc = settings.misc;
        var noteTypes = 'pbmNote changedNote errorNote successNote'.split(' ');

        if (!shortcuts.n) {
          shortcuts.n = defaultSettings.shortcuts.n;
          misc.noteicon = defaultSettings.misc.noteicon;
          misc.noteonclick = defaultSettings.misc.noteonclick;
        }

        if (!shortcuts.arrowup) {
          shortcuts.arrowup = defaultSettings.shortcuts.arrowup;
          shortcuts.arrowdown = defaultSettings.shortcuts.arrowdown;
        }

        if (!shortcuts.d[0]) {
          shortcuts.d[0] = defaultSettings.shortcuts.d[0];
        }

        if (!shortcuts.sb) {
          shortcuts.sb = defaultSettings.shortcuts.sb;
        }

        if (!shortcuts.cm) {
          shortcuts.cm = defaultSettings.shortcuts.cm;
        }

        if (!markers.m.style) {
          var style;

          for (var m in markers) {
            style = markers[m];
            markers[m] = {
              style: style
            };
          }
        }

        if (!history.sorted) {
          history.sorted = defaultSettings.history.sorted;
        }

        if (!history.view) {
          history.view = defaultSettings.history.view;
        }

        if (typeof history.saveInPriv !== 'boolean') {
          history.saveInPriv = defaultSettings.history.saveInPriv;
        }

        if (typeof history.immut !== 'boolean') {
          history.immut = defaultSettings.history.immut;
        }

        if (typeof history.ignoreHash !== 'boolean') {
          history.ignoreHash = defaultSettings.history.ignoreHash;
        }

        if (typeof history.dropLosses !== 'boolean') {
          history.dropLosses = defaultSettings.history.dropLosses;
        }

        noteTypes.forEach(function (noteType) {
          if (!misc[noteType]) {
            misc[noteType] = defaultSettings.misc[noteType];
          }
        });

        if (!misc.tmuipos) {
          misc.tmuipos = defaultSettings.misc.tmuipos;
        }

        if (typeof misc.notetransp !== 'boolean') {
          misc.notetransp = defaultSettings.misc.notetransp;
        }

        if (!misc.markmethod) {
          misc.markmethod = defaultSettings.misc.markmethod;
        }

        if (typeof misc.progressbar !== 'boolean') {
          misc.progressbar = defaultSettings.misc.progressbar;
        }

        if (typeof misc.tbbpower !== 'boolean') {
          misc.tbbpower = defaultSettings.misc.tbbpower;
        }

        if (!settings.sb) {
          settings.sb = defaultSettings.sb;
        } else if (typeof settings.sb.themes !== 'boolean') {
          settings.sb.tabs.themes = defaultSettings.sb.tabs.themes;
          settings.sb.theme = defaultSettings.sb.theme;
        }
      }
    } catch (e) {
      this.emit('error', 'error_import_settings_not_found');
      return settings;
    }

    return settings;
  },
  updateHistory: function updateHistory(history) {
    delete history.order;
    var entries = history.entries,
        names = Object.keys(entries),
        l = names.length,
        entry;
    if (!l) return history;

    while (l--) {
      entry = this.fixHistoryDates(entries[names[l]]);
      entry.synced = typeof entry.synced === 'undefined' ? false : entry.synced;
    }

    return history;
  },
  fixHistoryDates: function fixHistoryDates(entry) {
    var lang = browser.i18n.getMessage('lng');
    if (typeof entry.first !== 'number') entry.first = new Date((entry.first[lang] || entry.first.en || entry.first.de || entry.first).replace(/\./g, ' ')).getTime();
    if (typeof entry.last !== 'number') entry.last = new Date((entry.last[lang] || entry.last.en || entry.last.de || entry.last).replace(/\./g, ' ')).getTime();
    return entry;
  },
  mergeHistories: function mergeHistories(newHistory, area) {
    return _storage.default.get('history').then(function (oldHistory) {
      var entries = newHistory.entries,
          names = Object.keys(entries),
          l = names.length,
          i = 0,
          oldEntries = oldHistory.entries,
          oldNames = Object.keys(oldEntries),
          acceptedEntries = {},
          name,
          entry,
          url,
          urlExists,
          e;

      for (; i < l; i++) {
        name = names[i];
        urlExists = false;

        if (!oldNames.includes(name)) {
          entry = entries[name];
          url = entry.url;

          for (e in oldEntries) {
            if (oldEntries[e].url === url) {
              urlExists = true;
              break;
            }
          }

          if (!urlExists) {
            entry.synced = area === 'sync';
            acceptedEntries[name] = entry;
          }
        }
      }

      return _storage.default.update('history', function (history) {
        var _entries = history.entries;

        for (var a in acceptedEntries) {
          _entries[a] = acceptedEntries[a];
        }

        return history;
      }, area);
    });
  },
  setStorageOnUpgrade: function setStorageOnUpgrade() {
    var _this = this;

    var prevVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2';
    var loadReason = arguments.length > 1 ? arguments[1] : undefined;

    _storage.default.isEmpty('local').then(function (empty) {
      if (empty) {
        if (loadReason !== 'install') _this.emit('error', 'error_empty_local_storage_onupdate');
        return _storage.default.set('storage', 'local');
      }

      return true;
    }).then(function () {
      return _storage.default.update('settings', function (settings) {
        return _this.updateSettings(settings);
      }, 'sync');
    }).then(function () {
      return _storage.default.update('settings', function (settings) {
        return _this.updateSettings(settings);
      }, 'local');
    }).then(function () {
      return _storage.default.set('storage', 'sync');
    }) //.then(() => _STORAGE.set('storage', 'local'))
    .then(function () {
      return _this.emit('initialized:storage', prevVersion);
    }).catch(function (e) {
      _this.emit('initialized:storage', prevVersion);

      _this.emit('error', 'error_storage_migration', e.toString());
    });
  },
  checkStorageOnStart: function checkStorageOnStart() {
    var _this2 = this;

    _storage.default.isEmpty('sync').then(function (empty) {
      if (empty) {
        _this2.emit('error', 'error_empty_synced_storage_onstart');
      }

      return _storage.default.set('storage', 'sync');
    }).then(function () {
      return _storage.default.isEmpty('local').then(function (empty) {
        if (empty) {
          _this2.emit('error', 'error_empty_local_storage_onstart');
        }

        return _storage.default.set('storage', 'local');
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
    return _storage.default.update('settings', function (settings) {
      return _this4.updateSettings(settings);
    }, area).then(function () {
      return true;
    }).catch(function () {
      return false;
    });
  },
  importHistory: function importHistory(history, area) {
    return this.mergeHistories(this.updateHistory(history, true), area).then(function () {
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
exports.default = _default;

var _storage = _interopRequireDefault(__webpack_require__(/*! ./../storage */ "./background/storage.js"));

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return new _utils._MODULE({
    events: {
      ENV: {
        'view:entry': 'openEntryDetailPage'
      }
    },
    openEntryDetailPage: function openEntryDetailPage(name) {
      var popupURL = browser.runtime.getURL('content/detail-view/detail-view.html');
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
}

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
    ONEOFF: ['started:app', 'toggled:addon', 'toggled:sync', 'toggled:sync-settings', 'updated:settings', 'updated:history', 'updated:history-on-restoration', 'updated:entry-sync', 'updated:entry-name', 'updated:logs', 'updated:ctm-settings', 'updated:misc-settings', 'updated:naming-settings', 'updated:bg-color-settings', 'updated:custom-search-settings', 'updated:saveopt-settings', 'updated:mark-method-settings', 'saved:entry', 'deleted:entry', 'deleted:entries', 'imported:settings', 'imported:history', 'ctx:m', 'ctx:d', 'ctx:b', 'ctx:-b', 'ctx:n', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:undo', 'sidebar:redo', 'sidebar:copy', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'sidebar:retry-restoration', 'sidebar:selected-marker', 'opened:sidebar', 'changed:url'],
    CONNECTION: ['started:app', 'toggled:addon', 'updated:settings', 'updated:entry-on-save', 'saved:entry', 'updated:pagenotes', 'toggled:sync-settings', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note', 'page-state', 'notes-state', 'entry:found', 'entry:found-for-tab', 'entry:deleted-for-tab', 'entry:ordered-marks']
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
exports.default = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./background/utils.js");

var _defaultStorage = _interopRequireDefault(__webpack_require__(/*! ./../data/default-storage */ "./data/default-storage.js"));

var _globalSettings = _interopRequireDefault(__webpack_require__(/*! ./../data/global-settings */ "./data/global-settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _utils._MODULE({
  initialized: false,
  initializing: false,
  area_settings: _defaultStorage.default.sync.settings ? 'sync' : 'local',
  area_history: _defaultStorage.default.sync.history ? 'sync' : 'local',
  area_pagenotes: _defaultStorage.default.sync.pagenotes ? 'sync' : 'local',
  init: function init() {
    var _this = this;

    browser.storage.sync.remove('logs');
    return browser.storage.local.get().then(function (localStorage) {
      var sync = localStorage && localStorage.sync ? localStorage.sync : _defaultStorage.default.sync;
      return _this._set_sync(sync);
    });
  },
  get: function get() {
    var _this2 = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

    if (this.initializing) {
      return new Promise(function (r) {
        return window.setTimeout(function () {
          return r(_this2.get(field));
        }, 10);
      });
    }

    var meth = this['_get_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';

    if (!this.initialized) {
      this.initializing = true;
      this.initialized = true;
      return this.init().then(function () {
        _this2.initializing = false;
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
  update: function update() {
    return this._update.apply(this, arguments);
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
        if (!localHistory) return syncedHistory; //syncedHistory.order = syncedHistory.order.concat(localHistory.order);

        for (var e in localHistory.entries) {
          syncedHistory.entries[e] = localHistory.entries[e];
        }

        return syncedHistory;
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
  _get_tbbpower: function _get_tbbpower() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.misc.tbbpower;
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

    return browser.storage.local.set({
      sync: sync
    }).then(function () {
      return browser.storage.sync.set({
        sync: sync
      });
    }).then(function () {
      _this5.area_settings = sync.settings ? 'sync' : 'local';
      _this5.area_history = sync.history ? 'sync' : 'local';
      _this5.area_pagenotes = sync.pagenotes ? 'sync' : 'local';
    });
  },
  _set_settings: function _set_settings() {
    var area = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.area_settings;
    return browser.storage[area].get().then(function (storage) {
      if (!storage || !storage.settings) return browser.storage[area].set({
        settings: (0, _utils._COPY)(_defaultStorage.default.settings)
      });
    });
  },
  _set_history: function _set_history() {
    var area = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.area_history;
    return browser.storage[area].get().then(function (storage) {
      if (!storage || !storage.history) return browser.storage[area].set({
        history: (0, _utils._COPY)(_defaultStorage.default.history)
      });
    });
  },
  _set_version: function _set_version(version) {
    return browser.storage.local.set({
      version: version
    }).then(function () {
      return browser.storage.sync.set({
        version: version
      });
    });
  },
  _set_log: function _set_log(log) {
    if (log.clear) {
      return browser.storage.local.set({
        logs: []
      });
    }

    return this._get_logs().then(function (logs) {
      logs.push(log);
      if (logs.length > _globalSettings.default.MAX_LOG_ENTRIES) logs.shift();
      return browser.storage.local.set({
        logs: logs
      });
    });
  },
  _set_entry: function _set_entry(entry) {
    var _this6 = this;

    return browser.storage[this.area_history].get().then(function (storage) {
      var history = storage.history;
      if (Object.keys(history.entries).includes(entry.name)) return _this6._update_entry(entry);
      history.entries[entry.name] = entry;
      return browser.storage[_this6.area_history].set({
        history: history
      });
    });
  },
  _update: function _update(field, updater) {
    var _this7 = this;

    var area = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this['area_' + field];
    return browser.storage[area].get().then(function (storage) {
      if (!storage[field]) {
        storage[field] = (0, _utils._COPY)(_defaultStorage.default[field]);
      }

      var update = {};
      update[field] = updater.call(_this7, storage[field]);
      return browser.storage[area].set(update).then(function () {
        return update[field];
      });
    });
  }
});

exports.default = _default;

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
Object.defineProperty(exports, "_COPY", {
  enumerable: true,
  get: function get() {
    return _copy._COPY;
  }
});
Object.defineProperty(exports, "_EXTEND", {
  enumerable: true,
  get: function get() {
    return _extend.default;
  }
});
Object.defineProperty(exports, "_GET_ACTIVE_TAB", {
  enumerable: true,
  get: function get() {
    return _getActiveTab._GET_ACTIVE_TAB;
  }
});
Object.defineProperty(exports, "_MODULE", {
  enumerable: true,
  get: function get() {
    return _module._MODULE;
  }
});
Object.defineProperty(exports, "_PORT", {
  enumerable: true,
  get: function get() {
    return _port._PORT;
  }
});
Object.defineProperty(exports, "_HASHLESS", {
  enumerable: true,
  get: function get() {
    return _hashless._HASHLESS;
  }
});
Object.defineProperty(exports, "_ERRORTRACKER", {
  enumerable: true,
  get: function get() {
    return _errorTracker.default;
  }
});

var _copy = __webpack_require__(/*! ./../utils/copy */ "./utils/copy.js");

var _extend = _interopRequireDefault(__webpack_require__(/*! ./../utils/extend */ "./utils/extend.js"));

var _getActiveTab = __webpack_require__(/*! ./../utils/getActiveTab */ "./utils/getActiveTab.js");

var _module = __webpack_require__(/*! ./../utils/module */ "./utils/module.js");

var _port = __webpack_require__(/*! ./../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../utils/hashless */ "./utils/hashless.js");

var _errorTracker = _interopRequireDefault(__webpack_require__(/*! ./../utils/error-tracker */ "./utils/error-tracker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
exports.default = void 0;
var _default = {
  version: browser.runtime.getManifest().version,
  settings: {
    shortcuts: {
      z: ['ctrlKey-altKey', true],
      y: ['ctrlKey-altKey', true],
      s: ['ctrlKey-altKey', true],
      c: ['ctrlKey-altKey', false],
      b: ['ctrlKey-altKey', true, true],
      d: ['shiftKey', false, true],
      '-b': ['', '', true],
      m: ['', true, true],
      w: ['', true, true],
      n: ['', '', true],
      '2': ['', true],
      '3': ['', true],
      arrowup: ['altKey', false, false],
      arrowdown: ['altKey', false, false],
      sb: ['', '', true],
      cm: ['', true]
    },
    markers: {
      '1': {
        style: 'background-color:#dd99ff;'
      },
      '2': {
        style: 'background-color:#66bbff;'
      },
      '3': {
        style: 'background-color:#55ff55;'
      },
      '4': {
        style: 'background-color:#ff6666;color:#ffffff;'
      },
      '5': {
        style: 'background-color:#ffcc00;'
      },
      m: {
        style: 'background-color:#ffee00;'
      }
    },
    history: {
      autosave: true,
      saveInPriv: false,
      dropLosses: true,
      immut: false,
      naming: 'title',
      download: 'json',
      copy: 'text',
      saveNote: true,
      sorted: 'date-last',
      view: 'list',
      pp: 10,
      ignoreHash: true
    },
    addon: {
      active: true
    },
    misc: {
      bmicon: true,
      noteicon: true,
      noteonclick: true,
      notetransp: false,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      customSearch: false,
      tmuipos: 'top-right',
      markmethod: '',
      progressbar: true,
      tbbpower: false
    },
    sb: {
      tabs: {
        meta: {
          unfolded: false
        },
        tags: {
          unfolded: false
        },
        notes: {
          unfolded: false
        },
        markers: {
          unfolded: true
        },
        actions: {
          unfolded: true
        },
        marks: {
          unfolded: false
        },
        links: {
          unfolded: false
        },
        themes: {
          unfolded: false
        }
      },
      theme: 'default'
    }
  },
  history: {
    entries: {}
  },
  pagenotes: {},
  sync: {
    settings: false,
    history: false,
    pagenotes: false
  }
};
exports.default = _default;

/***/ }),

/***/ "./data/global-settings.js":
/*!*********************************!*\
  !*** ./data/global-settings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  MAX_ENTRY_NAME_CHARS: 70,
  MAX_LOG_ENTRIES: 20,
  NOTE_COLORS: {
    TURQUOISE: '#b9e4ec',
    GREEN: '#ccffcc',
    YELLOW: '#ffffcc',
    ORANGE: '#ffeebb',
    RED: '#ffcccc',
    PURPLE: '#eeccff',
    BLUE: '#bbeeff',
    WHITE: '#eeeeee'
  }
};
exports.default = _default;

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
exports.default = void 0;
var _default = {
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
  note_restoration_warning_1: 33,
  note_restoration_warning_2: 34,
  error_save_change_autonote: 35,
  error_save_mark_method: 36,
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
exports.default = _default;

/***/ }),

/***/ "./icons/off16.png":
/*!*************************!*\
  !*** ./icons/off16.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../../icons/off16.png";

/***/ }),

/***/ "./icons/off18.png":
/*!*************************!*\
  !*** ./icons/off18.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../../icons/off18.png";

/***/ }),

/***/ "./icons/on16.png":
/*!************************!*\
  !*** ./icons/on16.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../../icons/on16.png";

/***/ }),

/***/ "./icons/on18.png":
/*!************************!*\
  !*** ./icons/on18.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../../icons/on18.png";

/***/ }),

/***/ "./icons/on32.png":
/*!************************!*\
  !*** ./icons/on32.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../../icons/on32.png";

/***/ }),

/***/ "./icons/on36.png":
/*!************************!*\
  !*** ./icons/on36.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../../icons/on36.png";

/***/ }),

/***/ "./icons/on64.png":
/*!************************!*\
  !*** ./icons/on64.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../../icons/on64.png";

/***/ }),

/***/ "./icons/tm48.png":
/*!************************!*\
  !*** ./icons/tm48.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../../icons/tm48.png";

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
exports._COPY = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _COPY = function _COPY(src) {
  var target = Array.isArray(src) ? [] : {};
  var val;

  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      val = src[prop];

      if (val !== null && _typeof(val) === 'object') {
        target[prop] = _COPY(val);
      } else target[prop] = val;
    }
  }

  return target;
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
exports.default = void 0;

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

var _default = _ERRORTRACKER;
exports.default = _default;

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
exports.default = _default;

function _default(obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }

  return obj1;
}

/***/ }),

/***/ "./utils/getActiveTab.js":
/*!*******************************!*\
  !*** ./utils/getActiveTab.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._GET_ACTIVE_TAB = void 0;

var _GET_ACTIVE_TAB = function _GET_ACTIVE_TAB() {
  return browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(function (tabs) {
    return tabs[0];
  });
};

exports._GET_ACTIVE_TAB = _GET_ACTIVE_TAB;

/***/ }),

/***/ "./utils/hashless.js":
/*!***************************!*\
  !*** ./utils/hashless.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._HASHLESS = void 0;

var _HASHLESS = function _HASHLESS(url) {
  var h = url.lastIndexOf('#');
  if (h === -1) return url;else return url.substr(0, h);
};

exports._HASHLESS = _HASHLESS;

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
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var topics = {};

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "on",
    value: function on(event, handler) {
      if (!topics[event]) topics[event] = [];
      topics[event].push(handler);
    }
  }, {
    key: "emit",
    value: function emit(events) {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      events = events.split(' ');
      var i = 0,
          l = events.length,
          topic;

      for (; i < l; i++) {
        topic = topics[events[i]];
        if (topic) topic.forEach(function (handler) {
          return handler.apply(_this, args);
        });
      }
    }
  }, {
    key: "request",
    value: function request(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return browser.runtime.sendMessage({
        ev: event,
        args: args,
        wait: true
      }).catch(function () {});
    }
  }, {
    key: "proxy",
    value: function proxy(context, func) {
      for (var _len3 = arguments.length, args1 = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args1[_key3 - 2] = arguments[_key3];
      }

      return function () {
        for (var _len4 = arguments.length, args2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args2[_key4] = arguments[_key4];
        }

        return func.apply(context, args1.concat(args2));
      };
    }
  }]);

  return _default;
}();

exports.default = _default;

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
exports._MODULE = void 0;

var _mediator = _interopRequireDefault(__webpack_require__(/*! ./mediator */ "./utils/mediator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _MODULE =
/*#__PURE__*/
function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  function _MODULE(obj) {
    var _this;

    _classCallCheck(this, _MODULE);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_MODULE).call(this));

    for (o in obj) {
      _this[o] = obj[o];
    }

    var events = _this.events,
        envEvents,
        o,
        e,
        handler;

    if (events && (envEvents = events.ENV)) {
      for (e in envEvents) {
        handler = envEvents[e];
        if (_this[handler]) _this.on(e, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this[handler]));
      }
    }

    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator.default);

exports._MODULE = _MODULE;

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
exports._PORT = void 0;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _PORT =
/*#__PURE__*/
function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    _this.port = null;
    var type = _this.type;
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.passMessage));
    if (type === 'privileged' || type === 'background') _this.initPorting();
    var events = _this.events,
        oneOffEvents,
        connectionBasedEvents;

    if (events) {
      oneOffEvents = events.ONEOFF;

      if (oneOffEvents) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            _this.on(e, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.sendMessage, e));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
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

            _this.on(f, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.postMessage, f));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
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
    key: "passMessage",
    value: function passMessage(req, sender, sendResponse) {
      req.args = req.args || [];
      var args = [].concat(req.ev, req.args);
      if (!sender || !sender.name) args = args.concat(sender, sendResponse);
      this.emit.apply(this, args);
      if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called

      return false;
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(e) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var type = this.type;
      var msg = {
        ev: e,
        args: args
      };
      if (type === 'content') browser.runtime.sendMessage(msg).catch(function () {});else if (type === 'background') {
        var lastArg = args[args.length - 1];
        var tab;

        if (lastArg !== undefined && (tab = lastArg.tab)) {
          if (tab === 'active') {
            browser.tabs.query({
              active: true
            }).then(function (tabs) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _tab = _step3.value;
                  browser.tabs.sendMessage(_tab.id, msg).catch(function () {});
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            });
          } else {
            browser.tabs.sendMessage(lastArg.tab, msg).catch(function () {});
          }
        } else {
          browser.tabs.query({
            /* currentWindow: false, active: false */
          }).then(function (tabs) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = tabs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _tab2 = _step4.value;
                browser.tabs.sendMessage(_tab2.id, msg).catch(function () {});
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          });
        }
      }
    }
  }, {
    key: "postMessage",
    value: function postMessage(e) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var msg = {
        ev: e,
        args: args
      };
      if (this.port) this.port.postMessage(msg);
    }
  }, {
    key: "initPorting",
    value: function initPorting() {
      if (!this.postponeConnection) {
        this.connect();
        this.addConnectionListeners();
      } else {
        this.addConnectionListeners(this.proxy(this, this.connect));
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var port = this.port = this.port || browser.runtime.connect({
        name: this.name
      });
      port.onDisconnect.addListener(function () {
        return _this2.port = null;
      });
    }
  }, {
    key: "addConnectionListeners",
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

exports._PORT = _PORT;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3NpZGViYXJzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zdG9yZS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3dpbmRvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9wb3J0LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2RhdGEvZGVmYXVsdC1zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2RhdGEvZ2xvYmFsLXNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2RhdGEvbG9nLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb2ZmMTYucG5nIiwid2VicGFjazovLy8uL2ljb25zL29mZjE4LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjE4LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjMyLnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjM2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjY0LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy90bTQ4LnBuZyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyJdLCJuYW1lcyI6WyJfTU9EVUxFIiwiZXZlbnRzIiwiRU5WIiwiYWN0aXZlIiwidmVyc2lvbiIsImxvYWRSZWFzb24iLCJhdXRvaW5pdCIsImN1cnJlbnRWZXJzaW9uIiwiYnJvd3NlciIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJfU1RPUkFHRSIsImdldCIsInRoZW4iLCJkZXRhaWxzIiwicmVhc29uIiwicHJldlZlcnNpb24iLCJwcmV2aW91c1ZlcnNpb24iLCJlbWl0Iiwic3RhcnQiLCJzZXQiLCJhY3RpdmF0ZSIsIm1vZGUiLCJjYXRjaCIsInRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uIiwic2V0VEJCQWN0aW9uIiwidG9nZ2xlIiwidG9nZ2xlT25JbXBvcnQiLCJvbiIsImJyb3dzZXJBY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImFkZCIsImFkZFRCQkhhbmRsZXIiLCJyZW1vdmVUQkJIYW5kbGVyIiwiZW5hYmxlZCIsInRiYkhhbmRsZXIiLCJzZXRQb3B1cCIsInBvcHVwIiwib25DbGlja2VkIiwicmVtb3ZlTGlzdGVuZXIiLCJpdGVtcyIsIm0iLCJjb250ZXh0cyIsInciLCJkIiwiYiIsIm4iLCJzYiIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwiY2hlY2tVcmwiLCJ1cmwiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJoYXNobGVzc1BhZ2VVcmwiLCJlbnRyaWVzIiwiaGlzdG9yeSIsIm1hdGNoZXMiLCJsb2NrZWRNYXRjaGVzIiwiZW50cnkiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJlIiwiaGFzaFNlbnNpdGl2ZSIsImxvY2tlZCIsIm9uTmFtaW5nUmVxdWVzdCIsIndpbmRvd3MiLCJnZXRMYXN0Rm9jdXNlZCIsInByaXYiLCJ3aW5kb3dJbmZvIiwiaW5jb2duaXRvIiwic2F2ZUluUHJpdiIsIm9uU2F2ZU5ld1JlcXVlc3QiLCJvblVwZGF0ZVJlcXVlc3QiLCJ0ZW1wU2F2ZUVudHJ5TWV0YURhdGEiLCJkYXRhIiwibmFtZSIsImFkanVzdE5hbWUiLCJuYW1pbmciLCJyZW5hbWUiLCJvbGROYW1lIiwibmV3TmFtZSIsImFyZWEiLCJzdWJzdHJpbmciLCJfR0xPQkFMX1NFVFRJTkdTIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJjb3VudGVyIiwiZ2V0RG91YmxlTmFtZUNvdW50IiwibWV0aG9kIiwidHJpbSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJleGlzdGluZ05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImwiLCJjaGVja3BvaW50IiwiaXNEb3VibGVOYW1lIiwiY2hlY2twb2ludF9zdGFydCIsImNoZWNrcG9pbnRfZW5kIiwidGVzdCIsIm5vdGlmeSIsImNvbmRpdGlvbiIsInR5cGUiLCJzZXR0aW5ncyIsIm5vdGlmaWNhdGlvbnMiLCJpY29uVXJsIiwiZ2V0VVJMIiwib25TYXZlZEVudHJ5Iiwic2F2ZU5vdGUiLCJtaXNjIiwicGJtTm90ZSIsIm9uRmFpbGVkSW1wb3J0IiwiZXJyb3IxIiwiZXJyb3IyIiwiZXJyTWVzc2FnZTEiLCJlcnJNZXNzYWdlMiIsIm9uSW1wb3J0RXJyb3IiLCJvbkltcG9ydFN1Y2Nlc3MiLCJmYWlsdXJlTm90ZSIsIm9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uIiwic3VjY2Vzc05vdGUiLCJvbkNhbmNlbGVkU2F2ZSIsIm9uU2F2ZUVycm9yIiwib25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yIiwib25EZWxldGVFcnJvciIsImVycm9yTm90ZSIsIm9uRXJyb3IiLCJzZXRQYW5lbCIsInRhYklkIiwiaXNPcGVuIiwicGFuZWwiLCJzdG9yZUVudHJ5IiwiaWdub3JlSGFzaCIsInVwZGF0ZUVudHJ5IiwidGFiVXJsIiwicmVtb3ZlRW50cnkiLCJzYXZlZFVybCIsInNlbmRFbnRyeSIsImhhc2hsZXNzVXJsIiwiZW50cmllc0ZvclRoaXNUYWIiLCJzZW5kT3JkZXJlZE1hcmtzIiwibWFya3MiLCJ1cGRhdGVPbkNoYW5nZWRTeW5jIiwic2F2ZUFjdGl2YXRpb25TdGF0ZSIsImFkZG9uIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsInVwZGF0ZVNldHRpbmdzIiwidXBkYXRlciIsInNldHRpbmciLCJhZGRDdXN0b21NYXJrZXIiLCJrZXkiLCJzdHlsZSIsIm1hcmtlcnMiLCJyZW1vdmVDdXN0b21NYXJrZXIiLCJjaGFuZ2VTdHlsZSIsImNoYW5nZUJnQ29sb3IiLCJjb2xvciIsIm1hcmtlciIsInNwbGl0IiwicmVwbGFjZSIsImNoYW5nZUF1dG9Ob3RlU2V0dGluZyIsImF1dG9ub3RlIiwiY2hhbmdlTWFya01ldGhvZCIsIm1hcmttZXRob2QiLCJ0b2dnbGVTaG9ydGN1dFNldHRpbmciLCJzdGF0dXMiLCJjaGFuZ2VTaG9ydGN1dFNldHRpbmciLCJ2YWx1ZSIsImNoYW5nZVNvcnRPcHQiLCJzb3J0ZWQiLCJjaGFuZ2VWaWV3T3B0IiwidmlldyIsImNoYW5nZUN1c3RvbVNlYXJjaCIsInZhbHVlcyIsImN1c3RvbVNlYXJjaCIsImNoYW5nZUNvdW50UGVyUGFnZSIsInBwIiwidG9nZ2xlQ3RtU2V0dGluZyIsImNoYW5nZVNhdmVPcHQiLCJhdXRvc2F2ZSIsInRvZ2dsZUltbXV0T3B0IiwiaW1tdXQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwiZHJvcExvc3NlcyIsInRvZ2dsZUhhc2hPcHQiLCJ0b2dnbGVQcml2U2F2ZU9wdCIsImNoYW5nZU5hbWluZ09wdCIsInRvZ2dsZU5vdGVPcHQiLCJ0b2dnbGVRdWlja2J1dHRvbk9wdCIsInByb3AiLCJzd2l0Y2hRdWlja2J1dHRvbk9wdCIsInRvZ2dsZU5vdGlmaWNhdGlvbk9wdCIsImNoYW5nZU1pc2NTZXR0aW5nIiwidG9nZ2xlVEJCUG93ZXJTZXR0aW5nIiwiY2hhbmdlU0JTZXR0aW5ncyIsInVuZm9sZGVkIiwidGFicyIsImNoYW5nZVRoZW1lU2V0dGluZ3MiLCJ0aGVtZSIsImNsZWFuRW50cmllcyIsIm5hbWVzIiwibmFtZXNfbG9jYWwiLCJsb3N0Iiwic2F2ZUVudHJ5Iiwic2F2ZU5ld05hbWUiLCJ1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbiIsInN5bmNlZCIsInJlY2VpdmVkQ29tcGxldGVFbnRyeSIsImZvdW5kIiwiaGFzT3duUHJvcGVydHkiLCJkZWxldGVFbnRyaWVzIiwicG9wIiwidXBkYXRlRW50cnlPblJlc3RvcmF0aW9uIiwiZW50cnlOYW1lIiwicmVzdG9yZWRNYXJrcyIsImxvc3RNYXJrcyIsIm9sZExvc3RNYXJrcyIsInJlc3RvcmVkTWFya3NJRHMiLCJvbGRMb3N0TWFya3NJRHMiLCJmb3JFYWNoIiwibWFyayIsInN5bmNFbnRyeSIsImFyZWFfMSIsImFyZWFfMiIsInRhZ0VudHJpZXMiLCJ0YWciLCJhZGRUYWdUb0VudHJ5IiwibG9jYWwiLCJyZW1vdmVUYWciLCJzdG9yZWRFbnRyeSIsInJ4IiwiUmVnRXhwIiwiYWRkVGFnIiwic2VhcmNoIiwidXBkYXRlUGFnZU5vdGVzIiwibm90ZXMiLCJyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlciIsInN0b3JhZ2UiLCJvbkNoYW5nZWQiLCJwcm94eSIsIm9uU3RvcmFnZUNoYW5nZWQiLCJjaGFuZ2VkSXRlbSIsInVybHMiLCJuZXdzIiwiaW5mbyIsImhlbHAiLCJjb250YWN0IiwibG9ncyIsImV4cG9ydCIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwiY2hhbmdlZCIsInNlY3VyaXR5V2FybmluZyIsInNlbGYiLCJvcGVuQWRkb25QYWdlIiwib3BlbkluaXRQYWdlIiwib3BlblNlYXJjaCIsIndvcmQiLCJjdXN0b20iLCJkZWZhdWx0U2V0dGluZ3MiLCJfREVGQVVMVF9TVE9SQUdFIiwibm90ZVR5cGVzIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsIm5vdGVUeXBlIiwidG11aXBvcyIsIm5vdGV0cmFuc3AiLCJwcm9ncmVzc2JhciIsInRiYnBvd2VyIiwidGhlbWVzIiwidXBkYXRlSGlzdG9yeSIsIm9yZGVyIiwiZml4SGlzdG9yeURhdGVzIiwibGFuZyIsImVuIiwiZGUiLCJsYXN0IiwibWVyZ2VIaXN0b3JpZXMiLCJuZXdIaXN0b3J5Iiwib2xkRW50cmllcyIsIm9sZEhpc3RvcnkiLCJvbGROYW1lcyIsImFjY2VwdGVkRW50cmllcyIsInVybEV4aXN0cyIsIl9lbnRyaWVzIiwiYSIsInNldFN0b3JhZ2VPblVwZ3JhZGUiLCJpc0VtcHR5IiwiZW1wdHkiLCJ0b1N0cmluZyIsImNoZWNrU3RvcmFnZU9uU3RhcnQiLCJpbXBvcnRTdG9yYWdlIiwiaW1wb3J0ZWRTdG9yYWdlIiwiaW1wb3J0U2V0dGluZ3MiLCJzdWNjZXNzIiwiaW1wb3J0SGlzdG9yeSIsInN1Y2Nlc3NfcyIsInN1Y2Nlc3NfaCIsIlByb21pc2UiLCJyZXNvbHZlIiwib3BlbkVudHJ5RGV0YWlsUGFnZSIsInBvcHVwVVJMIiwiZ2V0Q3VycmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlaWdodCIsImN1cnJlbnRXaW5kb3ciLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJfUE9SVCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsIk9ORU9GRiIsIkNPTk5FQ1RJT04iLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJfc2V0X3N5bmMiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiciIsIm1ldGgiLCJfdXBkYXRlIiwiY29uc3RydWN0b3IiLCJfZ2V0X3N0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5IiwiX2dldF9sb2NhbF9zdG9yYWdlIiwiX2dldF9zeW5jZWRfc3RvcmFnZSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9sb2dzIiwiX2dldF92ZXJzaW9uIiwiX2dldF9tb2RlIiwiX2dldF9wcml2c2F2ZSIsIl9nZXRfbmFtaW5nIiwiX2dldF90YmJwb3dlciIsIl9nZXRfbWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwiX3NldF9zdG9yYWdlIiwiX3NldF9zZXR0aW5ncyIsIl9zZXRfaGlzdG9yeSIsIl9zZXRfdmVyc2lvbiIsIl9zZXRfbG9nIiwiTUFYX0xPR19FTlRSSUVTIiwic2hpZnQiLCJfc2V0X2VudHJ5IiwiX3VwZGF0ZV9lbnRyeSIsImNhbGwiLCJ6IiwieSIsInMiLCJjIiwiZG93bmxvYWQiLCJjb3B5IiwiYm1pY29uIiwib3ZlcndyaXRlIiwiY2hhbmdlZE5vdGUiLCJtZXRhIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJnZXRLZXlCeVZhbHVlIiwiX0NPUFkiLCJzcmMiLCJ0YXJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJfRVJST1JUUkFDS0VSIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGUiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwib2JqMSIsIm9iajIiLCJfR0VUX0FDVElWRV9UQUIiLCJxdWVyeSIsIl9IQVNITEVTUyIsImgiLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsInRvcGljcyIsImV2ZW50IiwiaGFuZGxlciIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvYmoiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJmIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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O0FBQ0Q7OzsyQ0FDc0JjLEUsRUFBSTtBQUFBOztBQUN6QjNmLGNBQVFDLE9BQVIsQ0FBZ0IyZixTQUFoQixDQUEwQnhmLFdBQTFCLENBQXNDLGdCQUFRO0FBQzVDeWUsYUFBS0MsU0FBTCxDQUFlMWUsV0FBZixDQUEyQixPQUFLdVIsS0FBTCxDQUFXLE1BQVgsRUFBaUIsT0FBS29OLFdBQXRCLENBQTNCO0FBQ0EsU0FBQ1ksRUFBRCxJQUFPQSxJQUFQO0FBQ0QsT0FIRDtBQUlEOzs7O0VBbEZ3Qm5nQixlIiwiZmlsZSI6ImJhY2tncm91bmQvYmFja2dyb3VuZC53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFja2dyb3VuZC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi4vaWNvbnMvb24xNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24xOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb242NC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy90bTQ4LnBuZydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkFHRSBmcm9tICcuL3N0b3JhZ2UnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9lcnJvci1sb2dnaW5nJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlcidcclxuaW1wb3J0IF9OT1RJRklDQVRJT05TIGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgX1RBQlMgZnJvbSAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCBfV0lORE9XUyBmcm9tICcuL21vZHVsZXMvd2luZG93cydcclxuaW1wb3J0IF9TSURFQkFSUyBmcm9tICcuL21vZHVsZXMvc2lkZWJhcnMnXHJcbmltcG9ydCBfTkFNRVIgZnJvbSAnLi9tb2R1bGVzL25hbWVyJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dC1tZW51J1xyXG4vL2ltcG9ydCBfSURCIGZyb20gJy4vbW9kdWxlcy9pbmRleGVkZGInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL3N0b3JlLW1hbmFnZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3RvZ2dsZU9uSW1wb3J0JyxcclxuICAgICAgJ2luaXRpYWxpemVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnbWlncmF0ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdjaGVja2VkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAndG9nZ2xlOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnRiYnBvd2VyLXNldHRpbmdzJzogJ3NldFRCQkFjdGlvbidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmU6IHRydWUsXHJcbiAgdmVyc2lvbjogJycsXHJcbiAgbG9hZFJlYXNvbjogJycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFZlcnNpb24gPSB0aGlzLnZlcnNpb24gPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgICBpZiAoIXZlcnNpb24gfHwgdmVyc2lvbiAhPT0gY3VycmVudFZlcnNpb24pIHtcclxuICAgICAgICAgIGNvbnN0IGxvYWRSZWFzb24gPSB0aGlzLmxvYWRSZWFzb24gPSBkZXRhaWxzLnJlYXNvbjtcclxuICAgICAgICAgIGNvbnN0IHByZXZWZXJzaW9uID0gZGV0YWlscy5wcmV2aW91c1ZlcnNpb24gfHwgJzInO1xyXG4gICAgICAgICAgaWYgKGxvYWRSZWFzb24gJiYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnIHx8IGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGxvYWRSZWFzb24gKyAnOmFwcCcsIHByZXZWZXJzaW9uLCBsb2FkUmVhc29uKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCd2ZXJzaW9uJywgdGhpcy52ZXJzaW9uKTtcclxuXHJcbiAgICAvL19JREIoKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG4gICAgX1NJREVCQVJTKCk7XHJcblxyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFjdGl2YXRlKHRydWUpKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6YXBwJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvYWRSZWFzb24pKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGFjdGl2YXRlKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGFjdGl2YXRlO1xyXG4gICAgdGhpcy50b2dnbGVCcm93c2VyQWN0aW9uSWNvbihhY3RpdmUpO1xyXG4gICAgdGhpcy5zZXRUQkJBY3Rpb24oKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIGxldCBtb2RlID0gIXRoaXMuYWN0aXZlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZShtb2RlKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDphZGRvbicsIG1vZGUpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlT25JbXBvcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGVCcm93c2VyQWN0aW9uSWNvbihvbikge1xyXG4gICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEljb24oe1xyXG4gICAgICBwYXRoOiBvbiA/IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29uMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29uMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29uMzIucG5nJ1xyXG4gICAgICB9IDoge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb2ZmMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29mZjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vZmYzMi5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0VEJCQWN0aW9uKGFkZCkge1xyXG4gICAgaWYgKHR5cGVvZiBhZGQgPT09ICdib29sZWFuJykge1xyXG4gICAgICBpZiAoYWRkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndGJicG93ZXInKS50aGVuKGVuYWJsZWQgPT4ge1xyXG4gICAgICAgIGlmIChlbmFibGVkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFkZFRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBjb25zdCB0YmJIYW5kbGVyID0gdGhpcy50YmJIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YmJIYW5kbGVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZVRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAodGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnY29udGVudC90YmItbWVudS90YmItbWVudS5odG1sJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLnRiYkhhbmRsZXIpO1xyXG4gICAgICB0aGlzLnRiYkhhbmRsZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXRlbXM6IHtcclxuICAgICAgbTogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICB3OiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIGQ6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgYjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICAnLWInOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIG46IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgc2I6IHsgY29udGV4dHM6IFsnYWxsJywgJ3RhYiddIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBbXSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3R4XycgKyAoaSA9PT0gJy1iJyA/ICdkYicgOiBpKSk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKGluZm9zLCB0YWIpID0+IHRoaXMub25DbGljayhpbmZvcywgdGFiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoaWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5jcmVhdGUodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlKGlkKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQuc3BsaWNlKHRoaXMuY3JlYXRlZC5pbmRleE9mKGlkKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZShvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVBbGwoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2hvcnRjdXRzJykudGhlbihzaG9ydGN1dHMgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgaWYgKHNob3J0Y3V0c1tpXVsyXSkgdGhpcy5jcmVhdGUoaSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGljayhpbmZvcywgdGFiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gaW5mb3MubWVudUl0ZW1JZDtcclxuICAgICAgaWYgKGlkID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCBpbmZvcy5zZWxlY3Rpb25UZXh0KTtcclxuICAgICAgZWxzZSBpZiAoaWQgPT09ICdzYicpIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5vcGVuKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCdjdHg6JyArIGlkLCBudWxsLCBudWxsLCB7IHRhYjogdGFiLmlkIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0xPR19LRVlTIGZyb20gJy4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZXJyb3InOiAnbG9nJyxcclxuICAgICAgJ3dhcm5pbmcnOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6ZGVsZXRlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcyc6ICdvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzJyxcclxuICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAnZXJyb3I6aW1wb3J0JzogJ2xvZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnOiAnbG9nJyxcclxuICAgICAgJ2NsZWFyOmxvZ3MnOiAnY2xlYXInLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnOiAnbG9nJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgcmVwb3J0KSB7XHJcbiAgICBsZXQgbG9nLCBtc2c7XHJcbiAgICBpZiAoZXJyb3IudGltZSkge1xyXG4gICAgICBsb2cgPSBbZXJyb3IudGltZSwgZXJyb3IubWVzc2FnZSArICcgWycgKyBlcnJvci5sb2NhdGlvbiArICddJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2cgPSBbKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgX0xPR19LRVlTW2Vycm9yXSB8fCBlcnJvcl07XHJcbiAgICAgIGlmIChyZXBvcnQgJiYgdHlwZW9mIHJlcG9ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsb2cucHVzaChyZXBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihyZXBvcnQpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnLCByZXBvcnQpO1xyXG4gIH0sXHJcbiAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3VybCcpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9wYm0nKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdjaGVjazp1cmwnOiAnY2hlY2tVcmwnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nOiAnb25TYXZlTmV3UmVxdWVzdCcsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ29uVXBkYXRlUmVxdWVzdCcsXHJcbiAgICAgICduYW1lOmVudHJ5Pyc6ICdvbk5hbWluZ1JlcXVlc3QnLFxyXG4gICAgICAnb3BlbmVkOmVudHJ5JzogJ3RlbXBTYXZlRW50cnlNZXRhRGF0YSdcclxuICAgIH1cclxuICB9LFxyXG4gIHJlY2VudGx5T3BlbmVkRW50cnk6IG51bGwsXHJcblxyXG4gIGNoZWNrVXJsKHVybCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IGhhc2hsZXNzUGFnZVVybCA9ICBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG1hdGNoZXMgPSBbXSxcclxuICAgICAgICAgIGxvY2tlZE1hdGNoZXMgPSBbXSxcclxuICAgICAgICAgIGVudHJ5LCBwYWdlVXJsLCBlbnRyeVVybDtcclxuXHJcbiAgICAgIGZvciAobGV0IGUgaW4gZW50cmllcykge1xyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tlXTtcclxuICAgICAgICBwYWdlVXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IHVybCA6IGhhc2hsZXNzUGFnZVVybDtcclxuICAgICAgICBlbnRyeVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyBlbnRyeS51cmwgOiBfSEFTSExFU1MoZW50cnkudXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHBhZ2VVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICBtYXRjaGVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgICAgaWYgKGVudHJ5LmxvY2tlZCkgbG9ja2VkTWF0Y2hlcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZShudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBlbnRyaWVzOiBtYXRjaGVzLCByZWNlbnRseU9wZW5lZEVudHJ5OiB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbnRyeSA9IGxvY2tlZE1hdGNoZXMubGVuZ3RoID8gbG9ja2VkTWF0Y2hlcyA6ICFtYXRjaGVzLmxlbmd0aCA/IG51bGwgOiBtYXRjaGVzWzBdO1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kJywgZW50cnkpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbk5hbWluZ1JlcXVlc3Qoc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBjb25zdCBwcml2ID0gd2luZG93SW5mby5pbmNvZ25pdG87XHJcbiAgICAgICAgaWYgKCFwcml2KSBzZW5kUmVzcG9uc2UoIXByaXYpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2Ugc2VuZFJlc3BvbnNlKHNhdmVJblByaXYpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uU2F2ZU5ld1JlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uVXBkYXRlUmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRlbXBTYXZlRW50cnlNZXRhRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBkYXRhO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZ3JhbnRlZDpzYXZlLWVudHJ5JzogJ25hbWUnLFxyXG4gICAgICAgICdyZW5hbWU6ZW50cnknOiAncmVuYW1lJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hbWUoZW50cnkpIHtcclxuICAgICAgaWYgKGVudHJ5Lm5hbWUpIHJldHVybiB0aGlzLmFkanVzdE5hbWUoZW50cnkubmFtZSwgZW50cnkpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB0aGlzLmFkanVzdE5hbWUobnVsbCwgZW50cnksIG5hbWluZykpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIHJlbmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmV3TmFtZSk7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIpIG5ld05hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5hbWVkOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBhZGp1c3ROYW1lKG5hbWUsIGVudHJ5LCBtZXRob2QpIHtcclxuICAgICAgbmFtZSA9IG5hbWUgPyBuYW1lIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ3RpdGxlJyA/IGVudHJ5LnRpdGxlLnRyaW0oKSA/IGVudHJ5LnRpdGxlLnRyaW0oKSA6IGVudHJ5LnVybCA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICdkYXRlJyA/IChuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSkgOiAnJztcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyICYmIGVudHJ5LmxvY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJywgJ2Vycm9yX2RvdWJsZV9sb2NrZWRfbmFtZScsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY291bnRlcikgbmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICAgIGVudHJ5Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCduYW1lZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBnZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSkge1xyXG4gICAgICBsZXQgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcyksXHJcbiAgICAgICAgICBsID0gZXhpc3RpbmdOYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBjb3VudGVyID0gMCxcclxuICAgICAgICAgIGNoZWNrcG9pbnQ7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgY2hlY2twb2ludCA9IGV4aXN0aW5nTmFtZXNbbF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpKSBjb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9LFxyXG4gICAgaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpIHtcclxuICAgICAgaWYgKG5hbWUgPT09IGNoZWNrcG9pbnQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgbGV0IGwgPSBuYW1lLmxlbmd0aCxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfc3RhcnQgPSBjaGVja3BvaW50LnN1YnN0cmluZygwLCBsKSxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfZW5kO1xyXG5cclxuICAgICAgaWYgKG5hbWUgIT09IGNoZWNrcG9pbnRfc3RhcnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGNoZWNrcG9pbnRfZW5kID0gY2hlY2twb2ludC5zdWJzdHJpbmcobCwgY2hlY2twb2ludC5sZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKC9eXFxzKlxcKFxcZCtcXCkkLy50ZXN0KGNoZWNrcG9pbnRfZW5kKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdvblNhdmVkRW50cnknLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJzogJ29uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cmllcyc6ICdvbkRlbGV0ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2NhbmNlbGVkOnNhdmUtYWZ0ZXItY2FuY2VsZWQtcmVzdG9yYXRpb24nOiAnb25DYW5jZWxlZFNhdmUnLFxyXG4gICAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgICAnZmFpbGVkOmltcG9ydCc6ICdvbkZhaWxlZEltcG9ydCcsXHJcbiAgICAgICAgJ2Vycm9yOmltcG9ydCc6ICdvbkltcG9ydEVycm9yJyxcclxuICAgICAgICAnaW1wb3J0ZWQ6c3RvcmFnZSc6ICdvbkltcG9ydFN1Y2Nlc3MnLFxyXG4gICAgICAgICdlcnJvcic6ICdvbkVycm9yJyxcclxuICAgICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcyc6ICdvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeShjb25kaXRpb24sIG1lc3NhZ2UsIHR5cGUpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZXh0bWFya2VyOiAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodHlwZSksXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2ljb25zL3RtNDgucG5nJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZWRFbnRyeSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlZF9lbnRyeScpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFBCTSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5wYm1Ob3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3BibScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV91cmwnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkSW1wb3J0KGVycm9yMSwgZXJyb3IyKSB7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UxID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IxKTtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTIgPSBlcnJvcjIgPyAnXFxuXFxuJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMikgOiAnJztcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfZmFpbHVyZScsIGVyck1lc3NhZ2UxICsgZXJyTWVzc2FnZTIpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiB0cnVlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF93YXJuaW5nJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRTdWNjZXNzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiB0cnVlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5zdWNjZXNzTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DYW5jZWxlZFNhdmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2NhbmNlbGVkX3NhdmVfd2FybmluZycpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3IoZXJyb3IsIG5hbWUpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvciwgbmFtZSkpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZWxldGVFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0dFVF9BQ1RJVkVfVEFCLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnYWN0aXZhdGVkOnRhYic6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2NoYW5nZWQ6dXJsJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnZW50cnk6Zm91bmQnOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICd1cGRhdGVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzonc2VuZEVudHJ5JyxcclxuICAgICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcyc6ICdzZW5kT3JkZXJlZE1hcmtzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IHt9LFxyXG5cclxuICAgIHNldFBhbmVsKHRhYklkLCB1cmwpIHtcclxuICAgICAgdGhpcy5pc09wZW4oKS50aGVuKG9wZW4gPT4ge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICBicm93c2VyLnNpZGViYXJBY3Rpb24uc2V0UGFuZWwoe1xyXG4gICAgICAgICAgICBwYW5lbDogYnJvd3Nlci5ydW50aW1lLmdldFVSTChgY29udGVudC9zaWRlYmFyL3NpZGViYXIuaHRtbCMke3RhYklkfV8ke3VybH1gKSxcclxuICAgICAgICAgICAgdGFiSWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zaWRlYmFyQWN0aW9uLmlzT3Blbih7fSk7XHJcbiAgICB9LFxyXG4gICAgc3RvcmVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcblxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0YWIuaWQ7XHJcbiAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyh0YWIudXJsKSA6IHRhYi51cmw7XHJcblxyXG4gICAgICAgIGVudHJpZXNbaWRdID0gZW50cmllc1tpZF0gfHwgW107XHJcbiAgICAgICAgZW50cmllc1tpZF1bdXJsXSA9IGVudHJ5O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyhlbnRyeS51cmwpIDogZW50cnkudXJsO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgICAgZW50cmllc1tpZF1bdXJsXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyh0YWIudXJsKSA6IHRhYi51cmw7XHJcblxyXG4gICAgICAgIGlmICh0YWJVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kLWZvci10YWInLCBlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVFbnRyeShuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdXJsIDogX0hBU0hMRVNTKHVybCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2F2ZWRVcmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmIChzYXZlZFVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbaWRdW3NhdmVkVXJsXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGhhc2hTZW5zaXRpdmUgPyB0YWIudXJsIDogX0hBU0hMRVNTKHRhYi51cmwpO1xyXG4gICAgICAgIGlmICh0YWJVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZEVudHJ5KCkge1xyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzaGxlc3NVcmwgPSBfSEFTSExFU1ModGFiLnVybCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVudHJpZXNGb3JUaGlzVGFiID0gdGhpcy5lbnRyaWVzW3RhYi5pZF07XHJcbiAgICAgICAgbGV0IGVudHJ5ID0gbnVsbDtcclxuICAgICAgICBpZiAoZW50cmllc0ZvclRoaXNUYWIpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc0ZvclRoaXNUYWJbdGFiLnVybF0gfHwgZW50cmllc0ZvclRoaXNUYWJbaGFzaGxlc3NVcmxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kLWZvci10YWInLCBlbnRyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRPcmRlcmVkTWFya3MobWFya3MpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlbnRyeTpvcmRlcmVkLW1hcmtzJywgbWFya3MpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3JlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAnc2F2ZUFjdGl2YXRpb25TdGF0ZScsXHJcbiAgICAgICd0b2dnbGU6c3luYyc6ICd0b2dnbGVTeW5jJyxcclxuXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZyc6ICdjaGFuZ2VTdHlsZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZyc6ICdjaGFuZ2VBdXRvTm90ZVNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmJnLXNldHRpbmcnOiAnY2hhbmdlQmdDb2xvcicsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZyc6ICdjaGFuZ2VNYXJrTWV0aG9kJyxcclxuICAgICAgJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJzogJ3RvZ2dsZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZyc6ICdjaGFuZ2VTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOmN0bS1zZXR0aW5nJzogJ3RvZ2dsZUN0bVNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZyc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJzogJ3RvZ2dsZUltbXV0T3B0JyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnOiAndG9nZ2xlRHJvcExvc3Nlc09wdCcsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJzogJ3RvZ2dsZUhhc2hPcHQnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZyc6ICd0b2dnbGVQcml2U2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnOiAndG9nZ2xlTm90ZU9wdCcsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICd0b2dnbGVRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnOiAndG9nZ2xlTm90aWZpY2F0aW9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZyc6ICd0b2dnbGVUQkJQb3dlclNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZyc6ICdjaGFuZ2VTb3J0T3B0JyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnOiAnY2hhbmdlVmlld09wdCcsXHJcbiAgICAgICdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcblxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInOiAncmVtb3ZlQ3VzdG9tTWFya2VyJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJzogJ2FkZEN1c3RvbU1hcmtlcicsXHJcblxyXG4gICAgICAnbmFtZWQ6ZW50cnknOiAnc2F2ZUVudHJ5JyxcclxuICAgICAgJ3JlbmFtZWQ6ZW50cnknOiAnc2F2ZU5ld05hbWUnLFxyXG4gICAgICAnZ3JhbnRlZDp1cGRhdGUtZW50cnknOiAndXBkYXRlRW50cnlPblBhZ2VBY3Rpb24nLFxyXG4gICAgICAnZGVsZXRlOmVudHJpZXMnOiAnZGVsZXRlRW50cmllcycsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICd1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY2xlYW46ZW50cmllcyc6ICdjbGVhbkVudHJpZXMnLFxyXG4gICAgICAnc3luYzplbnRyeSc6ICdzeW5jRW50cnknLFxyXG4gICAgICAndGFnOmVudHJpZXMnOiAndGFnRW50cmllcycsXHJcbiAgICAgICdyZW1vdmU6dGFnJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICdhZGQ6dGFnJzogJ2FkZFRhZycsXHJcblxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYic6ICdjaGFuZ2VTQlNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSc6ICdjaGFuZ2VUaGVtZVNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJzogJ3VwZGF0ZVBhZ2VOb3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZU9uQ2hhbmdlZFN5bmM6IGZhbHNlLFxyXG5cclxuICAvLyBBRERPTiBNRVRIT0RTXHJcbiAgc2F2ZUFjdGl2YXRpb25TdGF0ZShhY3RpdmUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmFjdGl2ZSA9IGFjdGl2ZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTWU5DIE1FVEhPRFNcclxuICB0b2dnbGVTeW5jKGZpZWxkLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIGZ1bmN0aW9uKHN5bmMpIHtcclxuXHJcbiAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG5cclxuICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IHN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgfSwgJ2xvY2FsJylcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBzeW5jID0+IHtcclxuICAgICAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfdG9nZ2xlX3N5bmMnKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnRvZ2dsZS1zeW5jJywgZmllbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd0b2dnbGVkOnN5bmMgdG9nZ2xlZDpzeW5jLScgKyBmaWVsZCwgZmllbGQsIHZhbCkpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNFVFRJTkdTIE1FVEhPRFNcclxuICB1cGRhdGVTZXR0aW5ncyh1cGRhdGVyLCBzZXR0aW5nLCBlcnJvcikge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHVwZGF0ZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDonICsgc2V0dGluZyArICctc2V0dGluZ3MnKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgaWYgKGVycm9yKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpOyB9KTtcclxuICB9LFxyXG4gIGFkZEN1c3RvbU1hcmtlcihrZXksIHN0eWxlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XSA9ICB7IHN0eWxlIH07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9hZGRfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHJlbW92ZUN1c3RvbU1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgZGVsZXRlIHNldHRpbmdzLm1hcmtlcnNba2V5XTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX3JlbW92ZV9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU3R5bGUoa2V5LCBzdHlsZSkge1xyXG4gICAgaWYgKCFrZXkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IHN0eWxlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUJnQ29sb3Ioa2V5LCBjb2xvcikge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSBzZXR0aW5ncy5tYXJrZXJzW2tleV07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIpIHtcclxuICAgICAgICAgIGxldCBzcGxpdCA9IG1hcmtlci5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsIHN0eWxlO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzcGxpdFtsXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBtYXJrZXIuc3R5bGUucmVwbGFjZSgvYmFja2dyb3VuZC1jb2xvcjojLns2fS8sICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBjb2xvcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgICB9LFxyXG4gICAgICAnYmctY29sb3InLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VBdXRvTm90ZVNldHRpbmcoa2V5LCBhdXRvbm90ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uYXV0b25vdGUgPSBhdXRvbm90ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b25vdGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV90b2dnbGVfYXV0b25vdGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWFya01ldGhvZChtZXRob2QpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID0gbWV0aG9kOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrLW1ldGhvZCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX21hcmtfbWV0aG9kJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNob3J0Y3V0U2V0dGluZyhrZXksIHN0YXR1cykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsxXSA9IHN0YXR1czsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNob3J0Y3V0U2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzBdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmltbXV0ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpbW11dG9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZURyb3BMb3NzZXNPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnZHJvcGxvc3Nlc29wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUhhc2hPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaGFzaG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVQcml2U2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdwcml2c2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX3ByaXYnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTmFtaW5nT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lm5hbWluZyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbmFtaW5nJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbmFtaW5nJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3dpdGNoUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90aWZpY2F0aW9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3RpZmljYXRpb24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWlzY1NldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21pc2MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVEJCUG93ZXJTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd0YmJwb3dlcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTQlNldHRpbmdzKHRhYiwgdW5mb2xkZWQpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRhYnNbdGFiXS51bmZvbGRlZCA9IHVuZm9sZGVkOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcbiAgY2hhbmdlVGhlbWVTZXR0aW5ncyh0aGVtZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGhlbWUgPSB0aGVtZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBISVNUT1JZIE1FVEhPRFNcclxuICBjbGVhbkVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgaSA9IG5hbWVzLmxlbmd0aCwgbmFtZTtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzW25hbWVdKSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdC5sZW5ndGggPSAwO1xyXG4gICAgICAgIGVsc2UgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnbG9jYWwnKSB7IHRoaXMuZW1pdCgnY2xlYW5lZDplbnRyaWVzJyk7IH19KVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfY2xlYW5faGlzdG9yeScpKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmNsZWFuRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KTtcclxuICB9LFxyXG4gIHNhdmVFbnRyeShlbnRyeSkge1xyXG4gICAgZW50cnkubG9zdCA9IFtdO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3NhdmVkOmVudHJ5JywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnNhdmUtZW50cnknLCAnZXJyb3Jfc2F2ZV9lbnRyeScpKTtcclxuICB9LFxyXG4gIHNhdmVOZXdOYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tvbGROYW1lXSk7XHJcbiAgICAgIGVudHJ5Lm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmV3TmFtZV0gPSBlbnRyeTtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW5hbWUnLCBoaXN0b3J5LmVudHJpZXNbbmV3TmFtZV0sIG9sZE5hbWUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBhcmVhKSB7XHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBjb25zdCByZWNlaXZlZENvbXBsZXRlRW50cnkgPSAhIWVudHJ5LnVybDtcclxuICAgIGxldCBmb3VuZCA9IHRydWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGlmIChyZWNlaXZlZENvbXBsZXRlRW50cnkpIHtcclxuICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghaGlzdG9yeS5lbnRyaWVzW25hbWVdKSB7XHJcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWxldGUgZW50cnkuc3luY2VkO1xyXG4gICAgICAgICAgZm9yIChsZXQgZSBpbiBlbnRyeSkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuaGFzT3duUHJvcGVydHkoZSkpIHtcclxuICAgICAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV1bZV0gPSBlbnRyeVtlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKCFmb3VuZCkgeyB0aGlzLnVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBlbnRyeS5zeW5jZWQgPyAnbG9jYWwnIDogJ3N5bmMnKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLCBlbnRyeSkpO1xyXG4gIH0sXHJcbiAgZGVsZXRlRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXMgJiYgT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgdXJsID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLnVybDtcclxuICAgICAgICAgIGhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0uaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdkZWxldGVkOmVudHJ5JywgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnLCAnZXJyb3JfZGVsX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5kZWxldGVFbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyaWVzJykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblJlc3RvcmF0aW9uKGVudHJ5TmFtZSwgcmVzdG9yZWRNYXJrcywgbG9zdE1hcmtzLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPT09IHRydWUpIHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrcyA9IGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgICBjb25zdCByZXN0b3JlZE1hcmtzSURzID0gW107XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3NJRHMgPSBbXTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5tYXJrcyA9IHJlc3RvcmVkTWFya3M7XHJcblxyXG4gICAgICAgICAgcmVzdG9yZWRNYXJrcy5mb3JFYWNoKG1hcmsgPT4gcmVzdG9yZWRNYXJrc0lEcy5wdXNoKG1hcmsuaWQpKTtcclxuXHJcbiAgICAgICAgICBsZXQgbCA9IG9sZExvc3RNYXJrcy5sZW5ndGgsIGlkO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWQgPSBvbGRMb3N0TWFya3NbbF0uaWQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN0b3JlZE1hcmtzSURzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzSURzLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbG9zdE1hcmtzLmZvckVhY2gobWFyayA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb2xkTG9zdE1hcmtzSURzLmluY2x1ZGVzKG1hcmsuaWQpKSBvbGRMb3N0TWFya3MucHVzaChtYXJrKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgPSBvbGRMb3N0TWFya3M7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3luY0VudHJ5KG5hbWUsIHZhbCkge1xyXG4gICAgY29uc3QgYXJlYV8xID0gdmFsID8gJ2xvY2FsJyA6ICdzeW5jJztcclxuICAgIGNvbnN0IGFyZWFfMiA9IHZhbCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgbGV0IGVudHJ5O1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tuYW1lXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHZhbDtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhXzEpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWFfMilcclxuXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktc3luYycsIGVudHJ5KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c3luYy1lbnRyeScsIG5hbWUpKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0YWdFbnRyaWVzKG5hbWVzLCB0YWcpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICBuYW1lcy5zeW5jLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgJ3N5bmMnKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgICAgIG5hbWVzLmxvY2FsLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCAnbG9jYWwnKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3Qgc3RvcmVkRW50cnkgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcpO1xyXG4gICAgICBpZiAoc3RvcmVkRW50cnkudGFnKSB7XHJcbiAgICAgICAgc3RvcmVkRW50cnkudGFnID0gc3RvcmVkRW50cnkudGFnXHJcbiAgICAgICAgICAucmVwbGFjZShyeCwgJyAnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL15cXHN8XFxzJC8sICcnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcc3syLH0vLCAnICcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSk7XHJcbiAgfSxcclxuICBhZGRUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFRhZ1RvRW50cnkoaGlzdG9yeS5lbnRyaWVzW25hbWVdLCB0YWcpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpO1xyXG4gIH0sXHJcbiAgYWRkVGFnVG9FbnRyeShlbnRyeSwgdGFnKSB7XHJcbiAgICBpZiAoIXRhZykgZW50cnkudGFnID0gJyc7XHJcbiAgICBlbHNlIGlmICghZW50cnkudGFnKSBlbnRyeS50YWcgPSB0YWc7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJywgJ2cnKTtcclxuICAgICAgaWYgKGVudHJ5LnRhZy5zZWFyY2gocngpID09PSAtMSkge1xyXG4gICAgICAgIGVudHJ5LnRhZyArPSAnICcgKyB0YWc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBlbnRyeSk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUEFHRSBOT1RFIE1FVEhPRFNcclxuICB1cGRhdGVQYWdlTm90ZXModXJsLCBub3Rlcykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdwYWdlbm90ZXMnLCBwYWdlbm90ZXMgPT4ge1xyXG4gICAgICBwYWdlbm90ZXNbdXJsXSA9IG5vdGVzO1xyXG4gICAgICByZXR1cm4gcGFnZW5vdGVzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5vblN0b3JhZ2VDaGFuZ2VkKSk7XHJcbiAgfSxcclxuICBvblN0b3JhZ2VDaGFuZ2VkKGNoYW5nZWRJdGVtKSB7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uc2V0dGluZ3MpIHRoaXMuZW1pdCgndXBkYXRlZDpzZXR0aW5ncycpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLmhpc3RvcnkpIHRoaXMuZW1pdCgndXBkYXRlZDpoaXN0b3J5Jyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0ucGFnZW5vdGVzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6cGFnZW5vdGVzJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgIC8vJ3N0YXJ0ZWQ6YXBwJzogJ29wZW5Jbml0UGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShzYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZSh0YmIpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UoYW0pJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdsb29rdXA6d29yZCc6ICdvcGVuU2VhcmNoJyxcclxuICAgICAgICAnb3BlbjplbnRyaWVzJzogJ29wZW4nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cmxzOiB7XHJcbiAgICAgIG5ld3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3cycsXHJcbiAgICAgIHNldHRpbmdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPXNldHRpbmdzJyxcclxuICAgICAgaGlzdG9yeTogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1oaXN0b3J5JyxcclxuICAgICAgaW5mbzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXcnLFxyXG4gICAgICBoZWxwOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW1hbnVhbCcsXHJcbiAgICAgIGNvbnRhY3Q6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9Y29udGFjdCcsXHJcbiAgICAgIGxvZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bG9ncycsXHJcbiAgICAgIGV4cG9ydDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1leHBvcnQnLFxyXG4gICAgICBzeW5jOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPXN5bmMnXHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIodGFiID0+IHRoaXMuZW1pdCgnYWN0aXZhdGVkOnRhYicsIHRhYi50YWJJZCwgKHRhYi51cmwgfHwgJycpKSk7XHJcbiAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5nZWQudXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuKHVybHMsIG5hbWVzKSB7XHJcbiAgICAgIHVybHMgPSB0eXBlb2YgdXJscyA9PT0gJ3N0cmluZycgPyBbdXJsc10gOiB1cmxzO1xyXG4gICAgICBuYW1lcyA9IHR5cGVvZiBuYW1lcyA9PT0gJ3N0cmluZycgPyBbbmFtZXNdIDogbmFtZXM7XHJcbiAgICAgIGxldCBsID0gdXJscy5sZW5ndGgsXHJcbiAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSBmYWxzZSxcclxuICAgICAgICAgIHVybDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIChmdW5jdGlvbihzZWxmLCBsKSB7XHJcbiAgICAgICAgICB1cmwgPSB1cmxzW2xdO1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogdXJsc1tsXSB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghc2VjdXJpdHlXYXJuaW5nKSBzZWxmLmVtaXQoJ2ZhaWxlZDpvcGVuLXRhYicpO1xyXG4gICAgICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobmFtZXMpIHNlbGYuZW1pdCgnb3BlbmVkOmVudHJ5JywgeyB1cmw6IHVybCwgbmFtZTogbmFtZXNbbF0gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pKHRoaXMsIGwpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3BlbkFkZG9uUGFnZShpZCkge1xyXG4gICAgICB0aGlzLm9wZW4odGhpcy51cmxzW2lkXSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbkluaXRQYWdlKHZlcnNpb24sIGxvYWRSZWFzb24pIHtcclxuICAgICAgaWYgKGxvYWRSZWFzb24gJiYgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnIHx8IGxvYWRSZWFzb24gPT09ICd1cGRhdGUnKSB0aGlzLm9wZW5BZGRvblBhZ2UoJ25ld3MnKTtcclxuICAgIH0sXHJcbiAgICBvcGVuU2VhcmNoKHdvcmQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBjdXN0b20gPSBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCwgdXJsO1xyXG4gICAgICAgIGlmIChjdXN0b20pIHVybCA9ICdodHRwczovLycgKyBjdXN0b21bMF0gKyB3b3JkICsgY3VzdG9tWzFdO1xyXG4gICAgICAgIGVsc2UgdXJsID0gJ2h0dHBzOi8vJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycgKyB3b3JkO1xyXG4gICAgICAgIHRoaXMub3Blbih1cmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGU6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnaW5zdGFsbDphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdjaGVjazpzdG9yYWdlJzogJ2NoZWNrU3RvcmFnZU9uU3RhcnQnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnOiAnaW1wb3J0U3RvcmFnZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cGRhdGVTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncztcclxuXHJcbiAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBzZXR0aW5ncy5oaXN0b3J5O1xyXG4gICAgICAgIGNvbnN0IG1pc2MgPSBzZXR0aW5ncy5taXNjO1xyXG4gICAgICAgIGNvbnN0IG5vdGVUeXBlcyA9ICdwYm1Ob3RlIGNoYW5nZWROb3RlIGVycm9yTm90ZSBzdWNjZXNzTm90ZScuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMubikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLm4gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLm47XHJcbiAgICAgICAgICBtaXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgICBtaXNjLm5vdGVvbmNsaWNrID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmFycm93dXApIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd3VwID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd3VwO1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93ZG93biA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3dkb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5kWzBdKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuZFswXSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuc2IpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuc2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmNtKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuY20gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmNtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAoIW1pc2Nbbm90ZVR5cGVdKSB7XHJcbiAgICAgICAgICAgIG1pc2Nbbm90ZVR5cGVdID0gZGVmYXVsdFNldHRpbmdzLm1pc2Nbbm90ZVR5cGVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbWlzYy50bXVpcG9zKSB7XHJcbiAgICAgICAgICBtaXNjLnRtdWlwb3MgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXRyYW5zcCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGV0cmFuc3AgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1pc2MubWFya21ldGhvZCkge1xyXG4gICAgICAgICAgbWlzYy5tYXJrbWV0aG9kID0gZGVmYXVsdFNldHRpbmdzLm1pc2MubWFya21ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLnByb2dyZXNzYmFyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2MucHJvZ3Jlc3NiYXIgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5wcm9ncmVzc2JhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLnRiYnBvd2VyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2MudGJicG93ZXIgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2IpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzLnNiLnRoZW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50YWJzLnRoZW1lcyA9IGRlZmF1bHRTZXR0aW5ncy5zYi50YWJzLnRoZW1lcztcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRoZW1lID0gZGVmYXVsdFNldHRpbmdzLnNiLnRoZW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZScsXHJcbiAgICAgICd1cGRhdGVkOmxvZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2F2ZW9wdC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyaWVzJyxcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknLFxyXG4gICAgICAnY3R4Om0nLFxyXG4gICAgICAnY3R4OmQnLFxyXG4gICAgICAnY3R4OmInLFxyXG4gICAgICAnY3R4Oi1iJyxcclxuICAgICAgJ2N0eDpuJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAnY2hhbmdlZDp1cmwnXHJcbiAgICBdLFxyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3RlcycsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcblxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBpbml0aWFsaXppbmc6IGZhbHNlLFxyXG4gIGFyZWFfc2V0dGluZ3M6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCcsXHJcbiAgYXJlYV9oaXN0b3J5OiBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCcsXHJcbiAgYXJlYV9wYWdlbm90ZXM6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnLFxyXG5cclxuICBpbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMucmVtb3ZlKCdsb2dzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBzeW5jID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zeW5jID8gbG9jYWxTdG9yYWdlLnN5bmMgOiBfREVGQVVMVF9TVE9SQUdFLnN5bmM7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZXRfc3luYyhzeW5jKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuICBzZXQoZmllbGQsIHZhbCkge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19zZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcbiAgICByZXR1cm4gdGhpc1snX3NldF8nICsgZmllbGRdKHZhbCk7XHJcbiAgfSxcclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICBpc0VtcHR5KGFyZWEgPSAnc3luYycpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICghT2JqZWN0LmtleXMoc3RvcmFnZSkubGVuZ3RoICYmIHN0b3JhZ2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfSxcclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gKHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcml2c2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdGJicG93ZXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuXHJcbiAgX3NldF9zdG9yYWdlKGFyZWEgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0X3NldHRpbmdzKGFyZWEpLnRoZW4oKCkgPT4gdGhpcy5fc2V0X2hpc3RvcnkoYXJlYSkpO1xyXG4gIH0sXHJcbiAgX3NldF9zeW5jKHN5bmMpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgc3luYzogc3luYyB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeW5jOiBzeW5jIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBzeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9zZXR0aW5ncyhhcmVhID0gdGhpcy5hcmVhX3NldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBzZXR0aW5nczogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncykgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfaGlzdG9yeShhcmVhID0gdGhpcy5hcmVhX2hpc3RvcnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgaGlzdG9yeTogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5oaXN0b3J5KSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF92ZXJzaW9uKHZlcnNpb24pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pKTtcclxuICB9LFxyXG4gIF9zZXRfbG9nKGxvZykge1xyXG4gICAgaWYgKGxvZy5jbGVhcikge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IFtdIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldF9sb2dzKCkudGhlbihsb2dzID0+IHtcclxuICAgICAgbG9ncy5wdXNoKGxvZyk7XHJcbiAgICAgIGlmIChsb2dzLmxlbmd0aCA+IF9HTE9CQUxfU0VUVElOR1MuTUFYX0xPR19FTlRSSUVTKSBsb2dzLnNoaWZ0KCk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogbG9ncyB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9lbnRyeShlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgbGV0IGhpc3RvcnkgPSBzdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKGVudHJ5Lm5hbWUpKSByZXR1cm4gdGhpcy5fdXBkYXRlX2VudHJ5KGVudHJ5KTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLnNldCh7IGhpc3Rvcnk6IGhpc3RvcnkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfdXBkYXRlKGZpZWxkLCB1cGRhdGVyLCBhcmVhID0gdGhpc1snYXJlYV8nICsgZmllbGRdKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlW2ZpZWxkXSkge1xyXG4gICAgICAgICAgc3RvcmFnZVtmaWVsZF0gPSBfQ09QWShfREVGQVVMVF9TVE9SQUdFW2ZpZWxkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xyXG4gICAgICAgIHVwZGF0ZVtmaWVsZF0gPSB1cGRhdGVyLmNhbGwodGhpcywgc3RvcmFnZVtmaWVsZF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh1cGRhdGUpLnRoZW4oKCkgPT4gdXBkYXRlW2ZpZWxkXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfRVhURU5ELCBfR0VUX0FDVElWRV9UQUIsIF9NT0RVTEUsIF9QT1JULCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJycsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uNjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL3RtNDgucG5nXCI7IiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9