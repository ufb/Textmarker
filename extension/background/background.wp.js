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
      },
      c: {
        contexts: ['frame', 'link', 'page']
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
      console.log(settings.shortcuts);
      return settings;
    }, 'shortcut', 'error_save__toggle_sc');
  },
  changeShortcutSetting: function changeShortcutSetting(key, value) {
    this.updateSettings(function (settings) {
      settings.shortcuts[key][0] = value;
      console.log(settings.shortcuts);
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
    ONEOFF: ['started:app', 'toggled:addon', 'toggled:sync', 'toggled:sync-settings', 'updated:settings', 'updated:history', 'updated:history-on-restoration', 'updated:entry-sync', 'updated:entry-name', 'updated:logs', 'updated:ctm-settings', 'updated:misc-settings', 'updated:naming-settings', 'updated:bg-color-settings', 'updated:custom-search-settings', 'updated:saveopt-settings', 'updated:mark-method-settings', 'saved:entry', 'deleted:entry', 'deleted:entries', 'imported:settings', 'imported:history', 'ctx:m', 'ctx:d', 'ctx:b', 'ctx:-b', 'ctx:n', 'ctx:c', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:undo', 'sidebar:redo', 'sidebar:copy', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'sidebar:retry-restoration', 'sidebar:selected-marker', 'opened:sidebar', 'changed:url'],
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
      c: ['ctrlKey-altKey', false, true],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3NpZGViYXJzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zdG9yZS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3dpbmRvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9wb3J0LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2RhdGEvZGVmYXVsdC1zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2RhdGEvZ2xvYmFsLXNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2RhdGEvbG9nLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb2ZmMTYucG5nIiwid2VicGFjazovLy8uL2ljb25zL29mZjE4LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjE4LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjMyLnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjM2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjY0LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy90bTQ4LnBuZyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyJdLCJuYW1lcyI6WyJfTU9EVUxFIiwiZXZlbnRzIiwiRU5WIiwiYWN0aXZlIiwidmVyc2lvbiIsImxvYWRSZWFzb24iLCJhdXRvaW5pdCIsImN1cnJlbnRWZXJzaW9uIiwiYnJvd3NlciIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJfU1RPUkFHRSIsImdldCIsInRoZW4iLCJkZXRhaWxzIiwicmVhc29uIiwicHJldlZlcnNpb24iLCJwcmV2aW91c1ZlcnNpb24iLCJlbWl0Iiwic3RhcnQiLCJzZXQiLCJhY3RpdmF0ZSIsIm1vZGUiLCJjYXRjaCIsInRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uIiwic2V0VEJCQWN0aW9uIiwidG9nZ2xlIiwidG9nZ2xlT25JbXBvcnQiLCJvbiIsImJyb3dzZXJBY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImFkZCIsImFkZFRCQkhhbmRsZXIiLCJyZW1vdmVUQkJIYW5kbGVyIiwiZW5hYmxlZCIsInRiYkhhbmRsZXIiLCJzZXRQb3B1cCIsInBvcHVwIiwib25DbGlja2VkIiwicmVtb3ZlTGlzdGVuZXIiLCJpdGVtcyIsIm0iLCJjb250ZXh0cyIsInciLCJkIiwiYiIsIm4iLCJzYiIsImMiLCJjcmVhdGVkIiwiaXRlbSIsImkiLCJpZCIsInRpdGxlIiwiaTE4biIsImdldE1lc3NhZ2UiLCJvbmNsaWNrIiwiaW5mb3MiLCJ0YWIiLCJvbkNsaWNrIiwidXBkYXRlIiwiY3JlYXRlIiwiaW5jbHVkZXMiLCJtZW51cyIsInB1c2giLCJyZW1vdmUiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVtb3ZlQWxsIiwibGVuZ3RoIiwic2hvcnRjdXRzIiwibWVudUl0ZW1JZCIsInNlbGVjdGlvblRleHQiLCJzaWRlYmFyQWN0aW9uIiwib3BlbiIsImxvZyIsImVycm9yIiwicmVwb3J0IiwibXNnIiwidGltZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiX0xPR19LRVlTIiwiY2xlYXIiLCJvbk1peGVkRW50cnlUeXBlcyIsIm9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMiLCJvbkZhaWxlZFJlc3RvcmF0aW9uIiwib25PcGVuVGFiRmFpbHVyZSIsIm9uRmFpbGVkUEJNIiwicmVjZW50bHlPcGVuZWRFbnRyeSIsImNoZWNrVXJsIiwidXJsIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiaGFzaGxlc3NQYWdlVXJsIiwiZW50cmllcyIsImhpc3RvcnkiLCJtYXRjaGVzIiwibG9ja2VkTWF0Y2hlcyIsImVudHJ5IiwicGFnZVVybCIsImVudHJ5VXJsIiwiZSIsImhhc2hTZW5zaXRpdmUiLCJsb2NrZWQiLCJvbk5hbWluZ1JlcXVlc3QiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJwcml2Iiwid2luZG93SW5mbyIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwic2V0dGluZ3MiLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImdldFVSTCIsIm9uU2F2ZWRFbnRyeSIsInNhdmVOb3RlIiwibWlzYyIsInBibU5vdGUiLCJvbkZhaWxlZEltcG9ydCIsImVycm9yMSIsImVycm9yMiIsImVyck1lc3NhZ2UxIiwiZXJyTWVzc2FnZTIiLCJvbkltcG9ydEVycm9yIiwib25JbXBvcnRTdWNjZXNzIiwiZmFpbHVyZU5vdGUiLCJvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbiIsInN1Y2Nlc3NOb3RlIiwib25DYW5jZWxlZFNhdmUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwic2V0UGFuZWwiLCJ0YWJJZCIsImlzT3BlbiIsInBhbmVsIiwic3RvcmVFbnRyeSIsImlnbm9yZUhhc2giLCJ1cGRhdGVFbnRyeSIsInRhYlVybCIsInJlbW92ZUVudHJ5Iiwic2F2ZWRVcmwiLCJzZW5kRW50cnkiLCJoYXNobGVzc1VybCIsImVudHJpZXNGb3JUaGlzVGFiIiwic2VuZE9yZGVyZWRNYXJrcyIsIm1hcmtzIiwidXBkYXRlT25DaGFuZ2VkU3luYyIsInNhdmVBY3RpdmF0aW9uU3RhdGUiLCJhZGRvbiIsInRvZ2dsZVN5bmMiLCJmaWVsZCIsInZhbCIsInN5bmMiLCJhcmVhX3NldHRpbmdzIiwiYXJlYV9oaXN0b3J5IiwiYXJlYV9wYWdlbm90ZXMiLCJwYWdlbm90ZXMiLCJ1cGRhdGVTZXR0aW5ncyIsInVwZGF0ZXIiLCJzZXR0aW5nIiwiYWRkQ3VzdG9tTWFya2VyIiwia2V5Iiwic3R5bGUiLCJtYXJrZXJzIiwicmVtb3ZlQ3VzdG9tTWFya2VyIiwiY2hhbmdlU3R5bGUiLCJjaGFuZ2VCZ0NvbG9yIiwiY29sb3IiLCJtYXJrZXIiLCJzcGxpdCIsInJlcGxhY2UiLCJjaGFuZ2VBdXRvTm90ZVNldHRpbmciLCJhdXRvbm90ZSIsImNoYW5nZU1hcmtNZXRob2QiLCJtYXJrbWV0aG9kIiwidG9nZ2xlU2hvcnRjdXRTZXR0aW5nIiwic3RhdHVzIiwiY29uc29sZSIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJ0YWJzIiwiY2hhbmdlVGhlbWVTZXR0aW5ncyIsInRoZW1lIiwiY2xlYW5FbnRyaWVzIiwibmFtZXMiLCJuYW1lc19sb2NhbCIsImxvc3QiLCJzYXZlRW50cnkiLCJzYXZlTmV3TmFtZSIsInVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uIiwic3luY2VkIiwicmVjZWl2ZWRDb21wbGV0ZUVudHJ5IiwiZm91bmQiLCJoYXNPd25Qcm9wZXJ0eSIsImRlbGV0ZUVudHJpZXMiLCJwb3AiLCJ1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24iLCJlbnRyeU5hbWUiLCJyZXN0b3JlZE1hcmtzIiwibG9zdE1hcmtzIiwib2xkTG9zdE1hcmtzIiwicmVzdG9yZWRNYXJrc0lEcyIsIm9sZExvc3RNYXJrc0lEcyIsImZvckVhY2giLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwiZXhwb3J0Iiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJjaGFuZ2VkIiwic2VjdXJpdHlXYXJuaW5nIiwic2VsZiIsIm9wZW5BZGRvblBhZ2UiLCJvcGVuSW5pdFBhZ2UiLCJvcGVuU2VhcmNoIiwid29yZCIsImN1c3RvbSIsImRlZmF1bHRTZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJub3RlVHlwZXMiLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwiYXJyb3d1cCIsImFycm93ZG93biIsImNtIiwibm90ZVR5cGUiLCJ0bXVpcG9zIiwibm90ZXRyYW5zcCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0aGVtZXMiLCJ1cGRhdGVIaXN0b3J5Iiwib3JkZXIiLCJmaXhIaXN0b3J5RGF0ZXMiLCJsYW5nIiwiZW4iLCJkZSIsImxhc3QiLCJtZXJnZUhpc3RvcmllcyIsIm5ld0hpc3RvcnkiLCJvbGRFbnRyaWVzIiwib2xkSGlzdG9yeSIsIm9sZE5hbWVzIiwiYWNjZXB0ZWRFbnRyaWVzIiwidXJsRXhpc3RzIiwiX2VudHJpZXMiLCJhIiwic2V0U3RvcmFnZU9uVXBncmFkZSIsImlzRW1wdHkiLCJlbXB0eSIsInRvU3RyaW5nIiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcGVuRW50cnlEZXRhaWxQYWdlIiwicG9wdXBVUkwiLCJnZXRDdXJyZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVpZ2h0IiwiY3VycmVudFdpbmRvdyIsIndpZHRoIiwiTWF0aCIsIm1pbiIsIl9QT1JUIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsIl9zZXRfc3luYyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyIiwibWV0aCIsIl91cGRhdGUiLCJjb25zdHJ1Y3RvciIsIl9nZXRfc3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsIl9nZXRfc2V0dGluZ3MiLCJfZ2V0X2xvZ3MiLCJfZ2V0X3ZlcnNpb24iLCJfZ2V0X21vZGUiLCJfZ2V0X3ByaXZzYXZlIiwiX2dldF9uYW1pbmciLCJfZ2V0X3RiYnBvd2VyIiwiX2dldF9tYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJfc2V0X3N0b3JhZ2UiLCJfc2V0X3NldHRpbmdzIiwiX3NldF9oaXN0b3J5IiwiX3NldF92ZXJzaW9uIiwiX3NldF9sb2ciLCJNQVhfTE9HX0VOVFJJRVMiLCJzaGlmdCIsIl9zZXRfZW50cnkiLCJfdXBkYXRlX2VudHJ5IiwiY2FsbCIsInoiLCJ5IiwicyIsImRvd25sb2FkIiwiY29weSIsImJtaWNvbiIsIm92ZXJ3cml0ZSIsImNoYW5nZWROb3RlIiwibWV0YSIsInRhZ3MiLCJhY3Rpb25zIiwibGlua3MiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwiZ2V0S2V5QnlWYWx1ZSIsIl9DT1BZIiwic3JjIiwidGFyZ2V0IiwiQXJyYXkiLCJpc0FycmF5IiwiX0VSUk9SVFJBQ0tFUiIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlIiwiZmlsZW5hbWUiLCJsaW5lbm8iLCJjb2xubyIsIm9iajEiLCJvYmoyIiwiX0dFVF9BQ1RJVkVfVEFCIiwicXVlcnkiLCJfSEFTSExFU1MiLCJoIiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJ0b3BpY3MiLCJldmVudCIsImhhbmRsZXIiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0Iiwib2JqIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiZiIsInBvc3RNZXNzYWdlIiwicmVxIiwibGFzdEFyZyIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztB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QSxJQUFMLEdBQVksS0FBS0EsSUFBTCxJQUFhOWUsUUFBUUMsT0FBUixDQUFnQndmLE9BQWhCLENBQXdCO0FBQUV4WSxjQUFNLEtBQUtBO0FBQWIsT0FBeEIsQ0FBdEM7QUFDQTZYLFdBQUthLFlBQUwsQ0FBa0J2ZixXQUFsQixDQUE4QjtBQUFBLGVBQU0sT0FBSzBlLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JjLEUsRUFBSTtBQUFBOztBQUN6QjVmLGNBQVFDLE9BQVIsQ0FBZ0I0ZixTQUFoQixDQUEwQnpmLFdBQTFCLENBQXNDLGdCQUFRO0FBQzVDMGUsYUFBS0MsU0FBTCxDQUFlM2UsV0FBZixDQUEyQixPQUFLeVIsS0FBTCxDQUFXLE1BQVgsRUFBaUIsT0FBS21OLFdBQXRCLENBQTNCO0FBQ0EsU0FBQ1ksRUFBRCxJQUFPQSxJQUFQO0FBQ0QsT0FIRDtBQUlEOzs7O0VBbEZ3QnBnQixlIiwiZmlsZSI6ImJhY2tncm91bmQvYmFja2dyb3VuZC53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFja2dyb3VuZC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi4vaWNvbnMvb24xNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24xOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb242NC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy90bTQ4LnBuZydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkFHRSBmcm9tICcuL3N0b3JhZ2UnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9lcnJvci1sb2dnaW5nJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlcidcclxuaW1wb3J0IF9OT1RJRklDQVRJT05TIGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgX1RBQlMgZnJvbSAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCBfV0lORE9XUyBmcm9tICcuL21vZHVsZXMvd2luZG93cydcclxuaW1wb3J0IF9TSURFQkFSUyBmcm9tICcuL21vZHVsZXMvc2lkZWJhcnMnXHJcbmltcG9ydCBfTkFNRVIgZnJvbSAnLi9tb2R1bGVzL25hbWVyJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dC1tZW51J1xyXG4vL2ltcG9ydCBfSURCIGZyb20gJy4vbW9kdWxlcy9pbmRleGVkZGInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL3N0b3JlLW1hbmFnZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3RvZ2dsZU9uSW1wb3J0JyxcclxuICAgICAgJ2luaXRpYWxpemVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnbWlncmF0ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdjaGVja2VkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAndG9nZ2xlOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnRiYnBvd2VyLXNldHRpbmdzJzogJ3NldFRCQkFjdGlvbidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmU6IHRydWUsXHJcbiAgdmVyc2lvbjogJycsXHJcbiAgbG9hZFJlYXNvbjogJycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFZlcnNpb24gPSB0aGlzLnZlcnNpb24gPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgICBpZiAoIXZlcnNpb24gfHwgdmVyc2lvbiAhPT0gY3VycmVudFZlcnNpb24pIHtcclxuICAgICAgICAgIGNvbnN0IGxvYWRSZWFzb24gPSB0aGlzLmxvYWRSZWFzb24gPSBkZXRhaWxzLnJlYXNvbjtcclxuICAgICAgICAgIGNvbnN0IHByZXZWZXJzaW9uID0gZGV0YWlscy5wcmV2aW91c1ZlcnNpb24gfHwgJzInO1xyXG4gICAgICAgICAgaWYgKGxvYWRSZWFzb24gJiYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnIHx8IGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGxvYWRSZWFzb24gKyAnOmFwcCcsIHByZXZWZXJzaW9uLCBsb2FkUmVhc29uKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCd2ZXJzaW9uJywgdGhpcy52ZXJzaW9uKTtcclxuXHJcbiAgICAvL19JREIoKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG4gICAgX1NJREVCQVJTKCk7XHJcblxyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFjdGl2YXRlKHRydWUpKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6YXBwJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvYWRSZWFzb24pKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGFjdGl2YXRlKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGFjdGl2YXRlO1xyXG4gICAgdGhpcy50b2dnbGVCcm93c2VyQWN0aW9uSWNvbihhY3RpdmUpO1xyXG4gICAgdGhpcy5zZXRUQkJBY3Rpb24oKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIGxldCBtb2RlID0gIXRoaXMuYWN0aXZlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZShtb2RlKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDphZGRvbicsIG1vZGUpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlT25JbXBvcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGVCcm93c2VyQWN0aW9uSWNvbihvbikge1xyXG4gICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEljb24oe1xyXG4gICAgICBwYXRoOiBvbiA/IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29uMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29uMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29uMzIucG5nJ1xyXG4gICAgICB9IDoge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb2ZmMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29mZjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vZmYzMi5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0VEJCQWN0aW9uKGFkZCkge1xyXG4gICAgaWYgKHR5cGVvZiBhZGQgPT09ICdib29sZWFuJykge1xyXG4gICAgICBpZiAoYWRkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndGJicG93ZXInKS50aGVuKGVuYWJsZWQgPT4ge1xyXG4gICAgICAgIGlmIChlbmFibGVkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFkZFRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBjb25zdCB0YmJIYW5kbGVyID0gdGhpcy50YmJIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YmJIYW5kbGVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZVRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAodGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnY29udGVudC90YmItbWVudS90YmItbWVudS5odG1sJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLnRiYkhhbmRsZXIpO1xyXG4gICAgICB0aGlzLnRiYkhhbmRsZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXRlbXM6IHtcclxuICAgICAgbTogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICB3OiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIGQ6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgYjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICAnLWInOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIG46IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgc2I6IHsgY29udGV4dHM6IFsnYWxsJywgJ3RhYiddIH0sXHJcbiAgICAgIGM6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IFtdLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBsZXQgaXRlbTtcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgaXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgaXRlbS5pZCA9IGk7XHJcbiAgICAgICAgaXRlbS50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjdHhfJyArIChpID09PSAnLWInID8gJ2RiJyA6IGkpKTtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSAoaW5mb3MsIHRhYikgPT4gdGhpcy5vbkNsaWNrKGluZm9zLCB0YWIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZShpZCkge1xyXG4gICAgICBpZiAoIXRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLmNyZWF0ZSh0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmUoaWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5zcGxpY2UodGhpcy5jcmVhdGVkLmluZGV4T2YoaWQpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUFsbCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5sZW5ndGgpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKG9uKSB7XHJcbiAgICAgIGlmIChvbikgdGhpcy51cGRhdGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUFsbCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlZDtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzaG9ydGN1dHMnKS50aGVuKHNob3J0Y3V0cyA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICBpZiAoc2hvcnRjdXRzW2ldWzJdKSB0aGlzLmNyZWF0ZShpKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrKGluZm9zLCB0YWIpIHtcclxuICAgICAgY29uc3QgaWQgPSBpbmZvcy5tZW51SXRlbUlkO1xyXG4gICAgICBpZiAoaWQgPT09ICd3JykgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIGluZm9zLnNlbGVjdGlvblRleHQpO1xyXG4gICAgICBlbHNlIGlmIChpZCA9PT0gJ3NiJykgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLm9wZW4oKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ2N0eDonICsgaWQsIG51bGwsIG51bGwsIHsgdGFiOiB0YWIuaWQgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlcnJvcic6ICdsb2cnLFxyXG4gICAgICAnd2FybmluZyc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICdlcnJvcjppbXBvcnQnOiAnbG9nJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZSc6ICdsb2cnLFxyXG4gICAgICAnY2xlYXI6bG9ncyc6ICdjbGVhcicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZSc6ICdsb2cnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbG9nKGVycm9yLCByZXBvcnQpIHtcclxuICAgIGxldCBsb2csIG1zZztcclxuICAgIGlmIChlcnJvci50aW1lKSB7XHJcbiAgICAgIGxvZyA9IFtlcnJvci50aW1lLCBlcnJvci5tZXNzYWdlICsgJyBbJyArIGVycm9yLmxvY2F0aW9uICsgJ10nXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZyA9IFsobmV3IERhdGUoKS5nZXRUaW1lKCkpLCBfTE9HX0tFWVNbZXJyb3JdIHx8IGVycm9yXTtcclxuICAgICAgaWYgKHJlcG9ydCAmJiB0eXBlb2YgcmVwb3J0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGxvZy5wdXNoKHJlcG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgbG9nKS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzIGxvZ2dlZDplcnJvcicsIGxvZykpO1xyXG4gIH0sXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIHsgY2xlYXI6IHRydWUgfSkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncycpKTtcclxuICB9LFxyXG4gIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyk7XHJcbiAgfSxcclxuICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFJlc3RvcmF0aW9uKHJlcG9ydCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScsIHJlcG9ydCk7XHJcbiAgfSxcclxuICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfdXJsJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFBCTSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3BibScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoZWNrOnVybCc6ICdjaGVja1VybCcsXHJcbiAgICAgICdzYXZlOmVudHJ5Pyc6ICdvblNhdmVOZXdSZXF1ZXN0JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnb25VcGRhdGVSZXF1ZXN0JyxcclxuICAgICAgJ25hbWU6ZW50cnk/JzogJ29uTmFtaW5nUmVxdWVzdCcsXHJcbiAgICAgICdvcGVuZWQ6ZW50cnknOiAndGVtcFNhdmVFbnRyeU1ldGFEYXRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgY2hlY2tVcmwodXJsLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgY29uc3QgaGFzaGxlc3NQYWdlVXJsID0gIF9IQVNITEVTUyh1cmwpO1xyXG5cclxuICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbWF0Y2hlcyA9IFtdLFxyXG4gICAgICAgICAgbG9ja2VkTWF0Y2hlcyA9IFtdLFxyXG4gICAgICAgICAgZW50cnksIHBhZ2VVcmwsIGVudHJ5VXJsO1xyXG5cclxuICAgICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2VdO1xyXG4gICAgICAgIHBhZ2VVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gdXJsIDogaGFzaGxlc3NQYWdlVXJsO1xyXG4gICAgICAgIGVudHJ5VXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IGVudHJ5LnVybCA6IF9IQVNITEVTUyhlbnRyeS51cmwpO1xyXG5cclxuICAgICAgICBpZiAocGFnZVVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIG1hdGNoZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBpZiAoZW50cnkubG9ja2VkKSBsb2NrZWRNYXRjaGVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGVudHJpZXM6IG1hdGNoZXMsIHJlY2VudGx5T3BlbmVkRW50cnk6IHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSB9KTtcclxuICAgICAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVudHJ5ID0gbG9ja2VkTWF0Y2hlcy5sZW5ndGggPyBsb2NrZWRNYXRjaGVzIDogIW1hdGNoZXMubGVuZ3RoID8gbnVsbCA6IG1hdGNoZXNbMF07XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBlbnRyeSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnY2FuY2VsZWQ6c2F2ZS1hZnRlci1jYW5jZWxlZC1yZXN0b3JhdGlvbic6ICdvbkNhbmNlbGVkU2F2ZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAgICdmYWlsZWQ6aW1wb3J0JzogJ29uRmFpbGVkSW1wb3J0JyxcclxuICAgICAgICAnZXJyb3I6aW1wb3J0JzogJ29uSW1wb3J0RXJyb3InLFxyXG4gICAgICAgICdpbXBvcnRlZDpzdG9yYWdlJzogJ29uSW1wb3J0U3VjY2VzcycsXHJcbiAgICAgICAgJ2Vycm9yJzogJ29uRXJyb3InLFxyXG4gICAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5KGNvbmRpdGlvbiwgbWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihzZXR0aW5ncykpIHtcclxuICAgICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RleHRtYXJrZXI6ICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0eXBlKSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnaWNvbnMvdG00OC5wbmcnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlZEVudHJ5KCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVkX2VudHJ5JyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnBibU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcGJtJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiB0cnVlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3VybCcpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRJbXBvcnQoZXJyb3IxLCBlcnJvcjIpIHtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjEpO1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMiA9IGVycm9yMiA/ICdcXG5cXG4nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IyKSA6ICcnO1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiB0cnVlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9mYWlsdXJlJywgZXJyTWVzc2FnZTEgKyBlcnJNZXNzYWdlMiksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydEVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHRydWUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3dhcm5pbmcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydFN1Y2Nlc3MoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHRydWUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnN1Y2Nlc3NOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNhbmNlbGVkU2F2ZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY2FuY2VsZWRfc2F2ZV93YXJuaW5nJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcihlcnJvciwgbmFtZSkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yLCBuYW1lKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlbGV0ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfR0VUX0FDVElWRV9UQUIsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdhY3RpdmF0ZWQ6dGFiJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdlbnRyeTpmb3VuZCc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOidzZW5kRW50cnknLFxyXG4gICAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJzogJ3NlbmRPcmRlcmVkTWFya3MnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczoge30sXHJcblxyXG4gICAgc2V0UGFuZWwodGFiSWQsIHVybCkge1xyXG4gICAgICB0aGlzLmlzT3BlbigpLnRoZW4ob3BlbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5zZXRQYW5lbCh7XHJcbiAgICAgICAgICAgIHBhbmVsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBjb250ZW50L3NpZGViYXIvc2lkZWJhci5odG1sIyR7dGFiSWR9XyR7dXJsfWApLFxyXG4gICAgICAgICAgICB0YWJJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnNpZGViYXJBY3Rpb24uaXNPcGVuKHt9KTtcclxuICAgIH0sXHJcbiAgICBzdG9yZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW50cmllc0ZvclRoaXNUYWIgPSB0aGlzLmVudHJpZXNbdGFiLmlkXTtcclxuICAgICAgICBsZXQgZW50cnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChlbnRyaWVzRm9yVGhpc1RhYikge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzRm9yVGhpc1RhYlt0YWIudXJsXSB8fCBlbnRyaWVzRm9yVGhpc1RhYltoYXNobGVzc1VybF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE9yZGVyZWRNYXJrcyhtYXJrcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5Om9yZGVyZWQtbWFya3MnLCBtYXJrcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXInLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdzYXZlQWN0aXZhdGlvblN0YXRlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJzogJ3RvZ2dsZVN5bmMnLFxyXG5cclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJzogJ2NoYW5nZVN0eWxlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJzogJ2NoYW5nZUF1dG9Ob3RlU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZyc6ICdjaGFuZ2VCZ0NvbG9yJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJzogJ2NoYW5nZU1hcmtNZXRob2QnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnOiAndG9nZ2xlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJzogJ2NoYW5nZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnOiAndG9nZ2xlQ3RtU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJzogJ2NoYW5nZVNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnOiAndG9nZ2xlSGFzaE9wdCcsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJzogJ3RvZ2dsZVByaXZTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZyc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZyc6ICd0b2dnbGVOb3RlT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3RvZ2dsZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZyc6ICd0b2dnbGVOb3RpZmljYXRpb25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJzogJ3RvZ2dsZVRCQlBvd2VyU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJzogJ2NoYW5nZVNvcnRPcHQnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZyc6ICdjaGFuZ2VWaWV3T3B0JyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcic6ICdyZW1vdmVDdXN0b21NYXJrZXInLFxyXG4gICAgICAnYWRkOmN1c3RvbS1tYXJrZXInOiAnYWRkQ3VzdG9tTWFya2VyJyxcclxuXHJcbiAgICAgICduYW1lZDplbnRyeSc6ICdzYXZlRW50cnknLFxyXG4gICAgICAncmVuYW1lZDplbnRyeSc6ICdzYXZlTmV3TmFtZScsXHJcbiAgICAgICdncmFudGVkOnVwZGF0ZS1lbnRyeSc6ICd1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcyc6ICdkZWxldGVFbnRyaWVzJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ3VwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbicsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJzogJ2NsZWFuRW50cmllcycsXHJcbiAgICAgICdzeW5jOmVudHJ5JzogJ3N5bmNFbnRyeScsXHJcbiAgICAgICd0YWc6ZW50cmllcyc6ICd0YWdFbnRyaWVzJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnOiAncmVtb3ZlVGFnJyxcclxuICAgICAgJ2FkZDp0YWcnOiAnYWRkVGFnJyxcclxuXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJzogJ2NoYW5nZVNCU2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJzogJ2NoYW5nZVRoZW1lU2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnOiAndXBkYXRlUGFnZU5vdGVzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlT25DaGFuZ2VkU3luYzogZmFsc2UsXHJcblxyXG4gIC8vIEFERE9OIE1FVEhPRFNcclxuICBzYXZlQWN0aXZhdGlvblN0YXRlKGFjdGl2ZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYWN0aXZlID0gYWN0aXZlOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNZTkMgTUVUSE9EU1xyXG4gIHRvZ2dsZVN5bmMoZmllbGQsIHZhbCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgZnVuY3Rpb24oc3luYykge1xyXG5cclxuICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcblxyXG4gICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICB9LCAnbG9jYWwnKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIHN5bmMgPT4ge1xyXG4gICAgICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgICAgICByZXR1cm4gc3luYztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6dG9nZ2xlLXN5bmMnLCBmaWVsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU0VUVElOR1MgTUVUSE9EU1xyXG4gIHVwZGF0ZVNldHRpbmdzKHVwZGF0ZXIsIHNldHRpbmcsIGVycm9yKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgdXBkYXRlcilcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOicgKyBzZXR0aW5nICsgJy1zZXR0aW5ncycpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBpZiAoZXJyb3IpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xyXG4gIH0sXHJcbiAgYWRkQ3VzdG9tTWFya2VyKGtleSwgc3R5bGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gIHsgc3R5bGUgfTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IG1hcmtlci5zdHlsZS5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUF1dG9Ob3RlU2V0dGluZyhrZXksIGF1dG9ub3RlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5hdXRvbm90ZSA9IGF1dG9ub3RlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvbm90ZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3RvZ2dsZV9hdXRvbm90ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNYXJrTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPSBtZXRob2Q7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmstbWV0aG9kJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbWFya19tZXRob2QnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2hvcnRjdXRTZXR0aW5nKGtleSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzFdID0gc3RhdHVzO2NvbnNvbGUubG9nKHNldHRpbmdzLnNob3J0Y3V0cyk7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfX3RvZ2dsZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTaG9ydGN1dFNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVswXSA9IHZhbHVlO2NvbnNvbGUubG9nKHNldHRpbmdzLnNob3J0Y3V0cyk7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmltbXV0ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpbW11dG9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZURyb3BMb3NzZXNPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnZHJvcGxvc3Nlc29wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUhhc2hPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaGFzaG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVQcml2U2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdwcml2c2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX3ByaXYnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTmFtaW5nT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lm5hbWluZyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbmFtaW5nJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbmFtaW5nJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3dpdGNoUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90aWZpY2F0aW9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3RpZmljYXRpb24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWlzY1NldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21pc2MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVEJCUG93ZXJTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd0YmJwb3dlcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTQlNldHRpbmdzKHRhYiwgdW5mb2xkZWQpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRhYnNbdGFiXS51bmZvbGRlZCA9IHVuZm9sZGVkOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcbiAgY2hhbmdlVGhlbWVTZXR0aW5ncyh0aGVtZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGhlbWUgPSB0aGVtZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBISVNUT1JZIE1FVEhPRFNcclxuICBjbGVhbkVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgaSA9IG5hbWVzLmxlbmd0aCwgbmFtZTtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzW25hbWVdKSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdC5sZW5ndGggPSAwO1xyXG4gICAgICAgIGVsc2UgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnbG9jYWwnKSB7IHRoaXMuZW1pdCgnY2xlYW5lZDplbnRyaWVzJyk7IH19KVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfY2xlYW5faGlzdG9yeScpKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmNsZWFuRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KTtcclxuICB9LFxyXG4gIHNhdmVFbnRyeShlbnRyeSkge1xyXG4gICAgZW50cnkubG9zdCA9IFtdO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3NhdmVkOmVudHJ5JywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnNhdmUtZW50cnknLCAnZXJyb3Jfc2F2ZV9lbnRyeScpKTtcclxuICB9LFxyXG4gIHNhdmVOZXdOYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tvbGROYW1lXSk7XHJcbiAgICAgIGVudHJ5Lm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmV3TmFtZV0gPSBlbnRyeTtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW5hbWUnLCBoaXN0b3J5LmVudHJpZXNbbmV3TmFtZV0sIG9sZE5hbWUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBhcmVhKSB7XHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBjb25zdCByZWNlaXZlZENvbXBsZXRlRW50cnkgPSAhIWVudHJ5LnVybDtcclxuICAgIGxldCBmb3VuZCA9IHRydWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGlmIChyZWNlaXZlZENvbXBsZXRlRW50cnkpIHtcclxuICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghaGlzdG9yeS5lbnRyaWVzW25hbWVdKSB7XHJcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWxldGUgZW50cnkuc3luY2VkO1xyXG4gICAgICAgICAgZm9yIChsZXQgZSBpbiBlbnRyeSkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuaGFzT3duUHJvcGVydHkoZSkpIHtcclxuICAgICAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV1bZV0gPSBlbnRyeVtlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKCFmb3VuZCkgeyB0aGlzLnVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBlbnRyeS5zeW5jZWQgPyAnbG9jYWwnIDogJ3N5bmMnKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLCBlbnRyeSkpO1xyXG4gIH0sXHJcbiAgZGVsZXRlRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXMgJiYgT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgdXJsID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLnVybDtcclxuICAgICAgICAgIGhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0uaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdkZWxldGVkOmVudHJ5JywgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnLCAnZXJyb3JfZGVsX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5kZWxldGVFbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyaWVzJykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblJlc3RvcmF0aW9uKGVudHJ5TmFtZSwgcmVzdG9yZWRNYXJrcywgbG9zdE1hcmtzLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPT09IHRydWUpIHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrcyA9IGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgICBjb25zdCByZXN0b3JlZE1hcmtzSURzID0gW107XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3NJRHMgPSBbXTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5tYXJrcyA9IHJlc3RvcmVkTWFya3M7XHJcblxyXG4gICAgICAgICAgcmVzdG9yZWRNYXJrcy5mb3JFYWNoKG1hcmsgPT4gcmVzdG9yZWRNYXJrc0lEcy5wdXNoKG1hcmsuaWQpKTtcclxuXHJcbiAgICAgICAgICBsZXQgbCA9IG9sZExvc3RNYXJrcy5sZW5ndGgsIGlkO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWQgPSBvbGRMb3N0TWFya3NbbF0uaWQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN0b3JlZE1hcmtzSURzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzSURzLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbG9zdE1hcmtzLmZvckVhY2gobWFyayA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb2xkTG9zdE1hcmtzSURzLmluY2x1ZGVzKG1hcmsuaWQpKSBvbGRMb3N0TWFya3MucHVzaChtYXJrKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgPSBvbGRMb3N0TWFya3M7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3luY0VudHJ5KG5hbWUsIHZhbCkge1xyXG4gICAgY29uc3QgYXJlYV8xID0gdmFsID8gJ2xvY2FsJyA6ICdzeW5jJztcclxuICAgIGNvbnN0IGFyZWFfMiA9IHZhbCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgbGV0IGVudHJ5O1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tuYW1lXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHZhbDtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhXzEpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWFfMilcclxuXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktc3luYycsIGVudHJ5KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c3luYy1lbnRyeScsIG5hbWUpKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0YWdFbnRyaWVzKG5hbWVzLCB0YWcpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICBuYW1lcy5zeW5jLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgJ3N5bmMnKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgICAgIG5hbWVzLmxvY2FsLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCAnbG9jYWwnKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3Qgc3RvcmVkRW50cnkgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcpO1xyXG4gICAgICBpZiAoc3RvcmVkRW50cnkudGFnKSB7XHJcbiAgICAgICAgc3RvcmVkRW50cnkudGFnID0gc3RvcmVkRW50cnkudGFnXHJcbiAgICAgICAgICAucmVwbGFjZShyeCwgJyAnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL15cXHN8XFxzJC8sICcnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcc3syLH0vLCAnICcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSk7XHJcbiAgfSxcclxuICBhZGRUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFRhZ1RvRW50cnkoaGlzdG9yeS5lbnRyaWVzW25hbWVdLCB0YWcpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpO1xyXG4gIH0sXHJcbiAgYWRkVGFnVG9FbnRyeShlbnRyeSwgdGFnKSB7XHJcbiAgICBpZiAoIXRhZykgZW50cnkudGFnID0gJyc7XHJcbiAgICBlbHNlIGlmICghZW50cnkudGFnKSBlbnRyeS50YWcgPSB0YWc7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJywgJ2cnKTtcclxuICAgICAgaWYgKGVudHJ5LnRhZy5zZWFyY2gocngpID09PSAtMSkge1xyXG4gICAgICAgIGVudHJ5LnRhZyArPSAnICcgKyB0YWc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBlbnRyeSk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUEFHRSBOT1RFIE1FVEhPRFNcclxuICB1cGRhdGVQYWdlTm90ZXModXJsLCBub3Rlcykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdwYWdlbm90ZXMnLCBwYWdlbm90ZXMgPT4ge1xyXG4gICAgICBwYWdlbm90ZXNbdXJsXSA9IG5vdGVzO1xyXG4gICAgICByZXR1cm4gcGFnZW5vdGVzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5vblN0b3JhZ2VDaGFuZ2VkKSk7XHJcbiAgfSxcclxuICBvblN0b3JhZ2VDaGFuZ2VkKGNoYW5nZWRJdGVtKSB7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uc2V0dGluZ3MpIHRoaXMuZW1pdCgndXBkYXRlZDpzZXR0aW5ncycpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLmhpc3RvcnkpIHRoaXMuZW1pdCgndXBkYXRlZDpoaXN0b3J5Jyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0ucGFnZW5vdGVzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6cGFnZW5vdGVzJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgIC8vJ3N0YXJ0ZWQ6YXBwJzogJ29wZW5Jbml0UGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShzYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZSh0YmIpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UoYW0pJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdsb29rdXA6d29yZCc6ICdvcGVuU2VhcmNoJyxcclxuICAgICAgICAnb3BlbjplbnRyaWVzJzogJ29wZW4nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cmxzOiB7XHJcbiAgICAgIG5ld3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3cycsXHJcbiAgICAgIHNldHRpbmdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPXNldHRpbmdzJyxcclxuICAgICAgaGlzdG9yeTogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1oaXN0b3J5JyxcclxuICAgICAgaW5mbzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXcnLFxyXG4gICAgICBoZWxwOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW1hbnVhbCcsXHJcbiAgICAgIGNvbnRhY3Q6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9Y29udGFjdCcsXHJcbiAgICAgIGxvZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bG9ncycsXHJcbiAgICAgIGV4cG9ydDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1leHBvcnQnLFxyXG4gICAgICBzeW5jOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPXN5bmMnXHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIodGFiID0+IHRoaXMuZW1pdCgnYWN0aXZhdGVkOnRhYicsIHRhYi50YWJJZCwgKHRhYi51cmwgfHwgJycpKSk7XHJcbiAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5nZWQudXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuKHVybHMsIG5hbWVzKSB7XHJcbiAgICAgIHVybHMgPSB0eXBlb2YgdXJscyA9PT0gJ3N0cmluZycgPyBbdXJsc10gOiB1cmxzO1xyXG4gICAgICBuYW1lcyA9IHR5cGVvZiBuYW1lcyA9PT0gJ3N0cmluZycgPyBbbmFtZXNdIDogbmFtZXM7XHJcbiAgICAgIGxldCBsID0gdXJscy5sZW5ndGgsXHJcbiAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSBmYWxzZSxcclxuICAgICAgICAgIHVybDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIChmdW5jdGlvbihzZWxmLCBsKSB7XHJcbiAgICAgICAgICB1cmwgPSB1cmxzW2xdO1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogdXJsc1tsXSB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghc2VjdXJpdHlXYXJuaW5nKSBzZWxmLmVtaXQoJ2ZhaWxlZDpvcGVuLXRhYicpO1xyXG4gICAgICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobmFtZXMpIHNlbGYuZW1pdCgnb3BlbmVkOmVudHJ5JywgeyB1cmw6IHVybCwgbmFtZTogbmFtZXNbbF0gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pKHRoaXMsIGwpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3BlbkFkZG9uUGFnZShpZCkge1xyXG4gICAgICB0aGlzLm9wZW4odGhpcy51cmxzW2lkXSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbkluaXRQYWdlKHZlcnNpb24sIGxvYWRSZWFzb24pIHtcclxuICAgICAgaWYgKGxvYWRSZWFzb24gJiYgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnIHx8IGxvYWRSZWFzb24gPT09ICd1cGRhdGUnKSB0aGlzLm9wZW5BZGRvblBhZ2UoJ25ld3MnKTtcclxuICAgIH0sXHJcbiAgICBvcGVuU2VhcmNoKHdvcmQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBjdXN0b20gPSBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCwgdXJsO1xyXG4gICAgICAgIGlmIChjdXN0b20pIHVybCA9ICdodHRwczovLycgKyBjdXN0b21bMF0gKyB3b3JkICsgY3VzdG9tWzFdO1xyXG4gICAgICAgIGVsc2UgdXJsID0gJ2h0dHBzOi8vJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycgKyB3b3JkO1xyXG4gICAgICAgIHRoaXMub3Blbih1cmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGU6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnaW5zdGFsbDphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdjaGVjazpzdG9yYWdlJzogJ2NoZWNrU3RvcmFnZU9uU3RhcnQnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnOiAnaW1wb3J0U3RvcmFnZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cGRhdGVTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncztcclxuXHJcbiAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBzZXR0aW5ncy5oaXN0b3J5O1xyXG4gICAgICAgIGNvbnN0IG1pc2MgPSBzZXR0aW5ncy5taXNjO1xyXG4gICAgICAgIGNvbnN0IG5vdGVUeXBlcyA9ICdwYm1Ob3RlIGNoYW5nZWROb3RlIGVycm9yTm90ZSBzdWNjZXNzTm90ZScuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMubikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLm4gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLm47XHJcbiAgICAgICAgICBtaXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgICBtaXNjLm5vdGVvbmNsaWNrID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmFycm93dXApIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd3VwID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd3VwO1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93ZG93biA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3dkb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5kWzBdKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuZFswXSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuc2IpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuc2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmNtKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuY20gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmNtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAoIW1pc2Nbbm90ZVR5cGVdKSB7XHJcbiAgICAgICAgICAgIG1pc2Nbbm90ZVR5cGVdID0gZGVmYXVsdFNldHRpbmdzLm1pc2Nbbm90ZVR5cGVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbWlzYy50bXVpcG9zKSB7XHJcbiAgICAgICAgICBtaXNjLnRtdWlwb3MgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXRyYW5zcCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGV0cmFuc3AgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1pc2MubWFya21ldGhvZCkge1xyXG4gICAgICAgICAgbWlzYy5tYXJrbWV0aG9kID0gZGVmYXVsdFNldHRpbmdzLm1pc2MubWFya21ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLnByb2dyZXNzYmFyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2MucHJvZ3Jlc3NiYXIgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5wcm9ncmVzc2JhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLnRiYnBvd2VyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2MudGJicG93ZXIgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2IpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzLnNiLnRoZW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50YWJzLnRoZW1lcyA9IGRlZmF1bHRTZXR0aW5ncy5zYi50YWJzLnRoZW1lcztcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRoZW1lID0gZGVmYXVsdFNldHRpbmdzLnNiLnRoZW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZScsXHJcbiAgICAgICd1cGRhdGVkOmxvZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2F2ZW9wdC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyaWVzJyxcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknLFxyXG4gICAgICAnY3R4Om0nLFxyXG4gICAgICAnY3R4OmQnLFxyXG4gICAgICAnY3R4OmInLFxyXG4gICAgICAnY3R4Oi1iJyxcclxuICAgICAgJ2N0eDpuJyxcclxuICAgICAgJ2N0eDpjJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAnY2hhbmdlZDp1cmwnXHJcbiAgICBdLFxyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3RlcycsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcblxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBpbml0aWFsaXppbmc6IGZhbHNlLFxyXG4gIGFyZWFfc2V0dGluZ3M6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCcsXHJcbiAgYXJlYV9oaXN0b3J5OiBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCcsXHJcbiAgYXJlYV9wYWdlbm90ZXM6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnLFxyXG5cclxuICBpbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMucmVtb3ZlKCdsb2dzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBzeW5jID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zeW5jID8gbG9jYWxTdG9yYWdlLnN5bmMgOiBfREVGQVVMVF9TVE9SQUdFLnN5bmM7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZXRfc3luYyhzeW5jKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuICBzZXQoZmllbGQsIHZhbCkge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19zZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcbiAgICByZXR1cm4gdGhpc1snX3NldF8nICsgZmllbGRdKHZhbCk7XHJcbiAgfSxcclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICBpc0VtcHR5KGFyZWEgPSAnc3luYycpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICghT2JqZWN0LmtleXMoc3RvcmFnZSkubGVuZ3RoICYmIHN0b3JhZ2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfSxcclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gKHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcml2c2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdGJicG93ZXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuXHJcbiAgX3NldF9zdG9yYWdlKGFyZWEgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0X3NldHRpbmdzKGFyZWEpLnRoZW4oKCkgPT4gdGhpcy5fc2V0X2hpc3RvcnkoYXJlYSkpO1xyXG4gIH0sXHJcbiAgX3NldF9zeW5jKHN5bmMpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgc3luYzogc3luYyB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeW5jOiBzeW5jIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBzeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9zZXR0aW5ncyhhcmVhID0gdGhpcy5hcmVhX3NldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBzZXR0aW5nczogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncykgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfaGlzdG9yeShhcmVhID0gdGhpcy5hcmVhX2hpc3RvcnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgaGlzdG9yeTogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5oaXN0b3J5KSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF92ZXJzaW9uKHZlcnNpb24pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pKTtcclxuICB9LFxyXG4gIF9zZXRfbG9nKGxvZykge1xyXG4gICAgaWYgKGxvZy5jbGVhcikge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IFtdIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldF9sb2dzKCkudGhlbihsb2dzID0+IHtcclxuICAgICAgbG9ncy5wdXNoKGxvZyk7XHJcbiAgICAgIGlmIChsb2dzLmxlbmd0aCA+IF9HTE9CQUxfU0VUVElOR1MuTUFYX0xPR19FTlRSSUVTKSBsb2dzLnNoaWZ0KCk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogbG9ncyB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9lbnRyeShlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgbGV0IGhpc3RvcnkgPSBzdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKGVudHJ5Lm5hbWUpKSByZXR1cm4gdGhpcy5fdXBkYXRlX2VudHJ5KGVudHJ5KTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLnNldCh7IGhpc3Rvcnk6IGhpc3RvcnkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfdXBkYXRlKGZpZWxkLCB1cGRhdGVyLCBhcmVhID0gdGhpc1snYXJlYV8nICsgZmllbGRdKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlW2ZpZWxkXSkge1xyXG4gICAgICAgICAgc3RvcmFnZVtmaWVsZF0gPSBfQ09QWShfREVGQVVMVF9TVE9SQUdFW2ZpZWxkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xyXG4gICAgICAgIHVwZGF0ZVtmaWVsZF0gPSB1cGRhdGVyLmNhbGwodGhpcywgc3RvcmFnZVtmaWVsZF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh1cGRhdGUpLnRoZW4oKCkgPT4gdXBkYXRlW2ZpZWxkXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfRVhURU5ELCBfR0VUX0FDVElWRV9UQUIsIF9NT0RVTEUsIF9QT1JULCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJycsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uNjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL3RtNDgucG5nXCI7IiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9