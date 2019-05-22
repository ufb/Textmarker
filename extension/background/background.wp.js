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

var _sidebars = __webpack_require__(/*! ./modules/sidebars */ "./background/modules/sidebars.js");

var _sidebars2 = _interopRequireDefault(_sidebars);

var _namer = __webpack_require__(/*! ./modules/namer */ "./background/modules/namer.js");

var _namer2 = _interopRequireDefault(_namer);

var _contextMenu = __webpack_require__(/*! ./modules/context-menu */ "./background/modules/context-menu.js");

var _contextMenu2 = _interopRequireDefault(_contextMenu);

__webpack_require__(/*! ./modules/version-manager */ "./background/modules/version-manager.js");

__webpack_require__(/*! ./modules/store-manager */ "./background/modules/store-manager.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      _storage2["default"].get('version').then(function (version) {
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

    _storage2["default"].get('version').then(function (version) {
      if (version && version === currentVersion) _this.emit('check:storage');
    });
  },
  start: function start() {
    var _this2 = this;

    _storage2["default"].set('version', this.version); //_IDB();


    (0, _notifications2["default"])();
    (0, _tabs2["default"])();
    (0, _namer2["default"])();
    (0, _contextMenu2["default"])();
    (0, _windows2["default"])();
    (0, _sidebars2["default"])();

    _storage2["default"].get('mode').then(function (mode) {
      return _this2.activate(mode);
    })["catch"](function () {
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

    _storage2["default"].get('mode').then(function (mode) {
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
      _storage2["default"].get('tbbpower').then(function (enabled) {
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

exports["default"] = function () {
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

      _storage2["default"].get('shortcuts').then(function (shortcuts) {
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
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      log = [new Date().getTime(), _logKeys2["default"][error] || error];

      if (report && typeof report === 'string') {
        log.push(report);
      }
    }

    _storage2["default"].set('log', log).then(function () {
      return _this.emit('updated:logs logged:error', log);
    });
  },
  clear: function clear() {
    var _this2 = this;

    _storage2["default"].set('log', {
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


var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _storage2["default"].get('history').then(function (history) {
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
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this2.emit('failed:pbm');else sendResponse(saveInPriv);
        });
      }
    });
  },
  onSaveNewRequest: function onSaveNewRequest(entry) {
    var _this3 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this3.emit('granted:save-entry', entry);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this3.emit('failed:pbm');else _this3.emit('granted:save-entry', entry);
        });
      }
    });
  },
  onUpdateRequest: function onUpdateRequest(entry) {
    var _this4 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this4.emit('granted:update-entry', entry);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
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

exports["default"] = function () {
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

      _storage2["default"].get('naming').then(function (naming) {
        return _this.adjustName(null, entry, naming);
      })["catch"](function () {
        return _this.emit('error', 'error_naming');
      });
    },
    rename: function rename(oldName, newName, area) {
      var _this2 = this;

      newName = newName.substring(0, _globalSettings2["default"].MAX_ENTRY_NAME_CHARS - 1);

      _storage2["default"].get('history').then(function (history) {
        var counter = _this2.getDoubleNameCount(history, newName);

        if (counter) newName += ' (' + (counter + 1) + ')';

        _this2.emit('renamed:entry', oldName, newName, area);
      })["catch"](function () {
        return _this2.emit('error', 'error_naming');
      });
    },
    adjustName: function adjustName(name, entry, method) {
      var _this3 = this;

      name = name ? name : method === 'title' ? entry.title.trim() ? entry.title.trim() : entry.url : method === 'date' ? new Date(entry.first).toLocaleString() : '';
      name = name.substring(0, _globalSettings2["default"].MAX_ENTRY_NAME_CHARS - 1);

      _storage2["default"].get('history').then(function (history) {
        var counter = _this3.getDoubleNameCount(history, name);

        if (counter && entry.locked) {
          _this3.emit('failed:save-entry-double-locked', 'error_double_locked_name', name);
        } else {
          if (counter) name += ' (' + (counter + 1) + ')';
          entry.name = name;

          _this3.emit('named:entry', entry);
        }
      })["catch"](function () {
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
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

var _globalSettings = __webpack_require__(/*! ./../../data/global-settings */ "./data/global-settings.js");

var _globalSettings2 = _interopRequireDefault(_globalSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

exports["default"] = function () {
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
      _storage2["default"].get('settings').then(function (settings) {
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
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

exports["default"] = function () {
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
};

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    _storage2["default"].update('settings', function (settings) {
      settings.addon.active = active;
      return settings;
    });
  },
  // SYNC METHODS
  toggleSync: function toggleSync(field, val) {
    var _this = this;

    _storage2["default"].update('sync', function (sync) {
      sync[field] = val;
      this.area_settings = sync.settings ? 'sync' : 'local';
      this.area_history = sync.history ? 'sync' : 'local';
      this.area_pagenotes = sync.pagenotes ? 'sync' : 'local';
      return sync;
    }, 'local').then(function () {
      _storage2["default"].update('sync', function (sync) {
        sync[field] = val;
        return sync;
      })["catch"](function () {
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

    _storage2["default"].update('settings', updater).then(function () {
      return _this2.emit('updated:' + setting + '-settings');
    })["catch"](function () {
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
    _storage2["default"].update('settings', function (settings) {
      settings.sb.tabs[tab].unfolded = unfolded;
      return settings;
    });
  },
  changeThemeSettings: function changeThemeSettings(theme) {
    _storage2["default"].update('settings', function (settings) {
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
    return _storage2["default"].update('history', function (history) {
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
    })["catch"](function () {
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

    _storage2["default"].update('history', function (history) {
      history.entries[name] = entry;
      return history;
    }).then(function (history) {
      return _this4.emit('saved:entry', history.entries[name]);
    })["catch"](function () {
      return _this4.emit('failed:save-entry', 'error_save_entry');
    });
  },
  saveNewName: function saveNewName(oldName, newName, area) {
    var _this5 = this;

    _storage2["default"].update('history', function (history) {
      var entry = (0, _utils._COPY)(history.entries[oldName]);
      entry.name = newName;
      history.entries[newName] = entry;
      delete history.entries[oldName];
      return history;
    }, area).then(function (history) {
      return _this5.emit('updated:entry updated:entry-name', history.entries[newName], oldName);
    })["catch"](function () {
      return _this5.emit('failed:update-entry', 'error_update_entry');
    });
  },
  updateEntryOnPageAction: function updateEntryOnPageAction(entry, area) {
    var _this6 = this;

    area = typeof area === 'string' ? area : entry.synced ? 'sync' : 'local';
    var name = entry.name;
    var receivedCompleteEntry = !!entry.url;
    var found = true;

    _storage2["default"].update('history', function (history) {
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
    }, area)["catch"](function (e) {
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
    return _storage2["default"].update('history', function (history) {
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
    }, area)["catch"](function () {
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
    _storage2["default"].get('settings').then(function (settings) {
      if (settings.history.dropLosses === true) {
        _storage2["default"].update('history', function (history) {
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

    _storage2["default"].update('history', function (history) {
      entry = (0, _utils._COPY)(history.entries[name]);
      entry.synced = val;
      delete history.entries[name];
      return history;
    }, area_1).then(function () {
      _storage2["default"].update('history', function (history) {
        history.entries[name] = entry;
        return history;
      }, area_2).then(function () {
        return _this8.emit('updated:entry updated:entry-sync', entry);
      })["catch"](function () {
        return _this8.emit('failed:sync-entry', name);
      });
    });
  },
  tagEntries: function tagEntries(names, tag) {
    var _this9 = this;

    _storage2["default"].update('history', function (history) {
      var entries = history.entries;
      names.sync.forEach(function (name) {
        return _this9.addTagToEntry(entries[name], tag);
      });
      return history;
    }, 'sync').then(function () {
      return _storage2["default"].update('history', function (history) {
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

    _storage2["default"].update('history', function (history) {
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

    _storage2["default"].update('history', function (history) {
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
    _storage2["default"].update('pagenotes', function (pagenotes) {
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

exports["default"] = function () {
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
      "export": 'content/addon-page/addon-page.html#page=export',
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
          })["catch"](function () {
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

      _storage2["default"].get('settings').then(function (settings) {
        var custom = settings.misc.customSearch,
            url;
        if (custom) url = 'https://' + custom[0] + word + custom[1];else url = 'https://' + browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/' + word;

        _this2.open(url);
      });
    }
  });
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var defaultSettings = _defaultStorage2["default"].settings;

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
    return _storage2["default"].get('history').then(function (oldHistory) {
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

      return _storage2["default"].update('history', function (history) {
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

    _storage2["default"].isEmpty('local').then(function (empty) {
      if (empty) {
        if (loadReason !== 'install') _this.emit('error', 'error_empty_local_storage_onupdate');
        return _storage2["default"].set('storage', 'local');
      }

      return true;
    }).then(function () {
      return _storage2["default"].update('settings', function (settings) {
        return _this.updateSettings(settings);
      }, 'sync');
    }).then(function () {
      return _storage2["default"].update('settings', function (settings) {
        return _this.updateSettings(settings);
      }, 'local');
    }).then(function () {
      return _storage2["default"].set('storage', 'sync');
    }) //.then(() => _STORAGE.set('storage', 'local'))
    .then(function () {
      return _this.emit('initialized:storage', prevVersion);
    })["catch"](function (e) {
      _this.emit('initialized:storage', prevVersion);

      _this.emit('error', 'error_storage_migration', e.toString());
    });
  },
  checkStorageOnStart: function checkStorageOnStart() {
    var _this2 = this;

    _storage2["default"].isEmpty('sync').then(function (empty) {
      if (empty) {
        _this2.emit('error', 'error_empty_synced_storage_onstart');
      }

      return _storage2["default"].set('storage', 'sync');
    }).then(function () {
      return _storage2["default"].isEmpty('local').then(function (empty) {
        if (empty) {
          _this2.emit('error', 'error_empty_local_storage_onstart');
        }

        return _storage2["default"].set('storage', 'local');
      });
    }).then(function () {
      return _this2.emit('checked:storage');
    })["catch"](function () {
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
    return _storage2["default"].update('settings', function (settings) {
      return _this4.updateSettings(settings);
    }, area).then(function () {
      return true;
    })["catch"](function () {
      return false;
    });
  },
  importHistory: function importHistory(history, area) {
    return this.mergeHistories(this.updateHistory(history, true), area).then(function () {
      return true;
    })["catch"](function () {
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

exports["default"] = function () {
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
};

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _utils = __webpack_require__(/*! ./utils */ "./background/utils.js");

var _defaultStorage = __webpack_require__(/*! ./../data/default-storage */ "./data/default-storage.js");

var _defaultStorage2 = _interopRequireDefault(_defaultStorage);

var _globalSettings = __webpack_require__(/*! ./../data/global-settings */ "./data/global-settings.js");

var _globalSettings2 = _interopRequireDefault(_globalSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = new _utils._MODULE({
  initialized: false,
  initializing: false,
  area_settings: _defaultStorage2["default"].sync.settings ? 'sync' : 'local',
  area_history: _defaultStorage2["default"].sync.history ? 'sync' : 'local',
  area_pagenotes: _defaultStorage2["default"].sync.pagenotes ? 'sync' : 'local',
  init: function init() {
    var _this = this;

    browser.storage.sync.remove('logs');
    return browser.storage.local.get().then(function (localStorage) {
      var sync = localStorage && localStorage.sync ? localStorage.sync : _defaultStorage2["default"].sync;
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
        settings: (0, _utils._COPY)(_defaultStorage2["default"].settings)
      });
    });
  },
  _set_history: function _set_history() {
    var area = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.area_history;
    return browser.storage[area].get().then(function (storage) {
      if (!storage || !storage.history) return browser.storage[area].set({
        history: (0, _utils._COPY)(_defaultStorage2["default"].history)
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
      if (logs.length > _globalSettings2["default"].MAX_LOG_ENTRIES) logs.shift();
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
        storage[field] = (0, _utils._COPY)(_defaultStorage2["default"][field]);
      }

      var update = {};
      update[field] = updater.call(_this7, storage[field]);
      return browser.storage[area].set(update).then(function () {
        return update[field];
      });
    });
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
exports._HASHLESS = exports._ERRORTRACKER = exports._PORT = exports._MODULE = exports._GET_ACTIVE_TAB = exports._EXTEND = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../utils/copy */ "./utils/copy.js");

var _extend = __webpack_require__(/*! ./../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _getActiveTab = __webpack_require__(/*! ./../utils/getActiveTab */ "./utils/getActiveTab.js");

var _module = __webpack_require__(/*! ./../utils/module */ "./utils/module.js");

var _port = __webpack_require__(/*! ./../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../utils/hashless */ "./utils/hashless.js");

var _errorTracker = __webpack_require__(/*! ./../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports._COPY = _copy._COPY;
exports._EXTEND = _extend2["default"];
exports._GET_ACTIVE_TAB = _getActiveTab._GET_ACTIVE_TAB;
exports._MODULE = _module._MODULE;
exports._PORT = _port._PORT;
exports._ERRORTRACKER = _errorTracker2["default"];
exports._HASHLESS = _hashless._HASHLESS;

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
exports["default"] = {
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
exports["default"] = {
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
exports["default"] = {
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

exports["default"] = _ERRORTRACKER;

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

exports["default"] = function (obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }

  return obj1;
};

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
      })["catch"](function () {});
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

exports["default"] = _default;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _MODULE =
/*#__PURE__*/
exports._MODULE = function (_MEDIATOR2) {
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
        if (_this[handler]) _this.on(e, _this.proxy(_assertThisInitialized(_this), _this[handler]));
      }
    }

    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator2["default"]);

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

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _PORT =
/*#__PURE__*/
exports._PORT = function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    _this.port = null;
    var type = _this.type;
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_this), _this.passMessage));
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

            _this.on(e, _this.proxy(_assertThisInitialized(_this), _this.sendMessage, e));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
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

            _this.on(f, _this.proxy(_assertThisInitialized(_this), _this.postMessage, f));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
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
      var type = this.type;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var msg = {
        ev: e,
        args: args
      };
      if (type === 'content') browser.runtime.sendMessage(msg)["catch"](function () {});else if (type === 'background') {
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
                  browser.tabs.sendMessage(_tab.id, msg)["catch"](function () {});
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            });
          } else {
            browser.tabs.sendMessage(lastArg.tab, msg)["catch"](function () {});
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
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3NpZGViYXJzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zdG9yZS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3dpbmRvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9wb3J0LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2RhdGEvZGVmYXVsdC1zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2RhdGEvZ2xvYmFsLXNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2RhdGEvbG9nLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb2ZmMTYucG5nIiwid2VicGFjazovLy8uL2ljb25zL29mZjE4LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjE4LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjMyLnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjM2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjY0LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy90bTQ4LnBuZyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyJdLCJuYW1lcyI6WyJfTU9EVUxFIiwiZXZlbnRzIiwiRU5WIiwiYWN0aXZlIiwidmVyc2lvbiIsImxvYWRSZWFzb24iLCJhdXRvaW5pdCIsImN1cnJlbnRWZXJzaW9uIiwiYnJvd3NlciIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJkZXRhaWxzIiwiX1NUT1JBR0UiLCJnZXQiLCJ0aGVuIiwicmVhc29uIiwicHJldlZlcnNpb24iLCJwcmV2aW91c1ZlcnNpb24iLCJlbWl0Iiwic3RhcnQiLCJzZXQiLCJtb2RlIiwiYWN0aXZhdGUiLCJ0b2dnbGVCcm93c2VyQWN0aW9uSWNvbiIsInNldFRCQkFjdGlvbiIsInRvZ2dsZSIsInRvZ2dsZU9uSW1wb3J0Iiwib24iLCJicm93c2VyQWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJhZGQiLCJhZGRUQkJIYW5kbGVyIiwicmVtb3ZlVEJCSGFuZGxlciIsImVuYWJsZWQiLCJ0YmJIYW5kbGVyIiwic2V0UG9wdXAiLCJwb3B1cCIsIm9uQ2xpY2tlZCIsInJlbW92ZUxpc3RlbmVyIiwiaXRlbXMiLCJtIiwiY29udGV4dHMiLCJ3IiwiZCIsImIiLCJuIiwic2IiLCJjIiwiY3JlYXRlZCIsIml0ZW0iLCJpIiwiaWQiLCJ0aXRsZSIsImkxOG4iLCJnZXRNZXNzYWdlIiwib25jbGljayIsImluZm9zIiwidGFiIiwib25DbGljayIsInVwZGF0ZSIsImNyZWF0ZSIsImluY2x1ZGVzIiwibWVudXMiLCJwdXNoIiwicmVtb3ZlIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlbW92ZUFsbCIsImxlbmd0aCIsInNob3J0Y3V0cyIsIm1lbnVJdGVtSWQiLCJzZWxlY3Rpb25UZXh0Iiwic2lkZWJhckFjdGlvbiIsIm9wZW4iLCJsb2ciLCJlcnJvciIsInJlcG9ydCIsIm1zZyIsInRpbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJEYXRlIiwiZ2V0VGltZSIsIl9MT0dfS0VZUyIsImNsZWFyIiwib25NaXhlZEVudHJ5VHlwZXMiLCJvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzIiwib25GYWlsZWRSZXN0b3JhdGlvbiIsIm9uT3BlblRhYkZhaWx1cmUiLCJvbkZhaWxlZFBCTSIsInJlY2VudGx5T3BlbmVkRW50cnkiLCJjaGVja1VybCIsInVybCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImhhc2hsZXNzUGFnZVVybCIsImhpc3RvcnkiLCJlbnRyaWVzIiwibWF0Y2hlcyIsImxvY2tlZE1hdGNoZXMiLCJlbnRyeSIsInBhZ2VVcmwiLCJlbnRyeVVybCIsImUiLCJoYXNoU2Vuc2l0aXZlIiwibG9ja2VkIiwib25OYW1pbmdSZXF1ZXN0Iiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwid2luZG93SW5mbyIsInByaXYiLCJpbmNvZ25pdG8iLCJzYXZlSW5Qcml2Iiwib25TYXZlTmV3UmVxdWVzdCIsIm9uVXBkYXRlUmVxdWVzdCIsInRlbXBTYXZlRW50cnlNZXRhRGF0YSIsImRhdGEiLCJuYW1lIiwiYWRqdXN0TmFtZSIsIm5hbWluZyIsInJlbmFtZSIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiYXJlYSIsInN1YnN0cmluZyIsIl9HTE9CQUxfU0VUVElOR1MiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsImNvdW50ZXIiLCJnZXREb3VibGVOYW1lQ291bnQiLCJtZXRob2QiLCJ0cmltIiwiZmlyc3QiLCJ0b0xvY2FsZVN0cmluZyIsImV4aXN0aW5nTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwibCIsImNoZWNrcG9pbnQiLCJpc0RvdWJsZU5hbWUiLCJjaGVja3BvaW50X3N0YXJ0IiwiY2hlY2twb2ludF9lbmQiLCJ0ZXN0Iiwibm90aWZ5IiwiY29uZGl0aW9uIiwidHlwZSIsInNldHRpbmdzIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwib25GYWlsZWRJbXBvcnQiLCJlcnJvcjEiLCJlcnJvcjIiLCJlcnJNZXNzYWdlMSIsImVyck1lc3NhZ2UyIiwib25JbXBvcnRFcnJvciIsIm9uSW1wb3J0U3VjY2VzcyIsImZhaWx1cmVOb3RlIiwib25TdWNjZXNzZnVsUmVzdG9yYXRpb24iLCJzdWNjZXNzTm90ZSIsIm9uQ2FuY2VsZWRTYXZlIiwib25TYXZlRXJyb3IiLCJvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3IiLCJvbkRlbGV0ZUVycm9yIiwiZXJyb3JOb3RlIiwib25FcnJvciIsInNldFBhbmVsIiwidGFiSWQiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwiYWRkb24iLCJ0b2dnbGVTeW5jIiwiZmllbGQiLCJ2YWwiLCJzeW5jIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwicGFnZW5vdGVzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsInN0YXR1cyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJ0YWJzIiwiY2hhbmdlVGhlbWVTZXR0aW5ncyIsInRoZW1lIiwiY2xlYW5FbnRyaWVzIiwibmFtZXMiLCJuYW1lc19sb2NhbCIsImxvc3QiLCJzYXZlRW50cnkiLCJzYXZlTmV3TmFtZSIsInVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uIiwic3luY2VkIiwicmVjZWl2ZWRDb21wbGV0ZUVudHJ5IiwiZm91bmQiLCJoYXNPd25Qcm9wZXJ0eSIsImRlbGV0ZUVudHJpZXMiLCJwb3AiLCJ1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24iLCJlbnRyeU5hbWUiLCJyZXN0b3JlZE1hcmtzIiwibG9zdE1hcmtzIiwib2xkTG9zdE1hcmtzIiwicmVzdG9yZWRNYXJrc0lEcyIsIm9sZExvc3RNYXJrc0lEcyIsImZvckVhY2giLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJjaGFuZ2VkIiwic2VjdXJpdHlXYXJuaW5nIiwic2VsZiIsIm9wZW5BZGRvblBhZ2UiLCJvcGVuSW5pdFBhZ2UiLCJvcGVuU2VhcmNoIiwid29yZCIsImN1c3RvbSIsImRlZmF1bHRTZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJub3RlVHlwZXMiLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwiYXJyb3d1cCIsImFycm93ZG93biIsImNtIiwibm90ZVR5cGUiLCJ0bXVpcG9zIiwibm90ZXRyYW5zcCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0aGVtZXMiLCJ1cGRhdGVIaXN0b3J5Iiwib3JkZXIiLCJmaXhIaXN0b3J5RGF0ZXMiLCJsYW5nIiwiZW4iLCJkZSIsImxhc3QiLCJtZXJnZUhpc3RvcmllcyIsIm5ld0hpc3RvcnkiLCJvbGRIaXN0b3J5Iiwib2xkRW50cmllcyIsIm9sZE5hbWVzIiwiYWNjZXB0ZWRFbnRyaWVzIiwidXJsRXhpc3RzIiwiX2VudHJpZXMiLCJhIiwic2V0U3RvcmFnZU9uVXBncmFkZSIsImlzRW1wdHkiLCJlbXB0eSIsInRvU3RyaW5nIiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcGVuRW50cnlEZXRhaWxQYWdlIiwicG9wdXBVUkwiLCJnZXRDdXJyZW50IiwiY3VycmVudFdpbmRvdyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1pbiIsIl9QT1JUIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsIl9zZXRfc3luYyIsInIiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibWV0aCIsIl91cGRhdGUiLCJjb25zdHJ1Y3RvciIsIl9nZXRfc3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsIl9nZXRfc2V0dGluZ3MiLCJfZ2V0X2xvZ3MiLCJfZ2V0X3ZlcnNpb24iLCJfZ2V0X21vZGUiLCJfZ2V0X3ByaXZzYXZlIiwiX2dldF9uYW1pbmciLCJfZ2V0X3RiYnBvd2VyIiwiX2dldF9tYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJfc2V0X3N0b3JhZ2UiLCJfc2V0X3NldHRpbmdzIiwiX3NldF9oaXN0b3J5IiwiX3NldF92ZXJzaW9uIiwiX3NldF9sb2ciLCJNQVhfTE9HX0VOVFJJRVMiLCJzaGlmdCIsIl9zZXRfZW50cnkiLCJfdXBkYXRlX2VudHJ5IiwiY2FsbCIsIl9DT1BZIiwiX0VYVEVORCIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJ6IiwieSIsInMiLCJkb3dubG9hZCIsImNvcHkiLCJibWljb24iLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsIm1ldGEiLCJ0YWdzIiwiYWN0aW9ucyIsImxpbmtzIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImdldEtleUJ5VmFsdWUiLCJzcmMiLCJ0YXJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZSIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiaCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9waWNzIiwiZXZlbnQiLCJoYW5kbGVyIiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm9iaiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsImYiLCJwb3N0TWVzc2FnZSIsInJlcSIsImxhc3RBcmciLCJ1bmRlZmluZWQiLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOztBQUNBOzs7O0FBSEE7QUFLQSxJQUFJQSxjQUFKLENBQVk7QUFDVkMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILDJCQUFxQixnQkFEbEI7QUFFSCw2QkFBdUIsT0FGcEI7QUFHSCwwQkFBb0IsT0FIakI7QUFJSCx5QkFBbUIsT0FKaEI7QUFLSCxzQkFBZ0IsUUFMYjtBQU1ILG1DQUE2QjtBQU4xQjtBQURDLEdBREU7QUFZVkMsUUFBTSxFQUFFLElBWkU7QUFhVkMsU0FBTyxFQUFFLEVBYkM7QUFjVkMsWUFBVSxFQUFFLEVBZEY7QUFnQlZDLFVBaEJVLHNCQWdCQztBQUFBOztBQUNULFFBQU1DLGNBQWMsR0FBRyxLQUFLSCxPQUFMLEdBQWVJLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkMsV0FBaEIsR0FBOEJOLE9BQXBFO0FBRUFJLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQkUsV0FBaEIsQ0FBNEJDLFdBQTVCLENBQXdDLFVBQUFDLE9BQU8sRUFBSTtBQUNqREMsMkJBQVNDLEdBQVQsQ0FBYSxTQUFiLEVBQXdCQyxJQUF4QixDQUE2QixVQUFBWixPQUFPLEVBQUk7QUFDdEMsWUFBSSxDQUFDQSxPQUFELElBQVlBLE9BQU8sS0FBS0csY0FBNUIsRUFBNEM7QUFDMUMsY0FBTUYsVUFBVSxHQUFHLEtBQUksQ0FBQ0EsVUFBTCxHQUFrQlEsT0FBTyxDQUFDSSxNQUE3QztBQUNBLGNBQU1DLFdBQVcsR0FBR0wsT0FBTyxDQUFDTSxlQUFSLElBQTJCLEdBQS9DOztBQUNBLGNBQUlkLFVBQVUsS0FBS0EsVUFBVSxLQUFLLFFBQWYsSUFBMkJBLFVBQVUsS0FBSyxTQUEvQyxDQUFkLEVBQXlFO0FBQ3ZFLGlCQUFJLENBQUNlLElBQUwsQ0FBVWYsVUFBVSxHQUFHLE1BQXZCLEVBQStCYSxXQUEvQixFQUE0Q2IsVUFBNUM7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBSSxDQUFDZSxJQUFMLENBQVUsZUFBVjtBQUNEO0FBQ0Y7QUFDRixPQVZEO0FBV0QsS0FaRDs7QUFhQU4seUJBQVNDLEdBQVQsQ0FBYSxTQUFiLEVBQXdCQyxJQUF4QixDQUE2QixVQUFBWixPQUFPLEVBQUk7QUFDdEMsVUFBSUEsT0FBTyxJQUFJQSxPQUFPLEtBQUtHLGNBQTNCLEVBQTJDLEtBQUksQ0FBQ2EsSUFBTCxDQUFVLGVBQVY7QUFDNUMsS0FGRDtBQUdELEdBbkNTO0FBcUNWQyxPQXJDVSxtQkFxQ0Y7QUFBQTs7QUFDTlAseUJBQVNRLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLEtBQUtsQixPQUE3QixFQURNLENBR047OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVUseUJBQVNDLEdBQVQsQ0FBYSxNQUFiLEVBQXFCQyxJQUFyQixDQUEwQixVQUFBTyxJQUFJO0FBQUEsYUFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBY0QsSUFBZCxDQUFKO0FBQUEsS0FBOUIsV0FDUztBQUFBLGFBQU0sTUFBSSxDQUFDQyxRQUFMLENBQWMsSUFBZCxDQUFOO0FBQUEsS0FEVCxFQUVHUixJQUZILENBRVE7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGFBQVYsRUFBeUIsTUFBSSxDQUFDaEIsT0FBOUIsRUFBdUMsTUFBSSxDQUFDQyxVQUE1QyxDQUFOO0FBQUEsS0FGUjtBQUdELEdBbkRTO0FBb0RWbUIsVUFwRFUsb0JBb0REQSxTQXBEQyxFQW9EUztBQUNqQixRQUFNckIsTUFBTSxHQUFHLEtBQUtBLE1BQUwsR0FBY3FCLFNBQTdCO0FBQ0EsU0FBS0MsdUJBQUwsQ0FBNkJ0QixNQUE3QjtBQUNBLFNBQUt1QixZQUFMO0FBQ0QsR0F4RFM7QUF5RFZDLFFBekRVLG9CQXlERDtBQUNQLFFBQUlKLElBQUksR0FBRyxDQUFDLEtBQUtwQixNQUFqQjtBQUNBLFNBQUtxQixRQUFMLENBQWNELElBQWQ7QUFDQSxTQUFLSCxJQUFMLENBQVUsZUFBVixFQUEyQkcsSUFBM0I7QUFDRCxHQTdEUztBQThEVkssZ0JBOURVLDRCQThETztBQUFBOztBQUNmZCx5QkFBU0MsR0FBVCxDQUFhLE1BQWIsRUFBcUJDLElBQXJCLENBQTBCLFVBQUFPLElBQUk7QUFBQSxhQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjRCxJQUFkLENBQUo7QUFBQSxLQUE5QjtBQUNELEdBaEVTO0FBaUVWRSx5QkFqRVUsbUNBaUVjSSxFQWpFZCxFQWlFa0I7QUFDMUJyQixXQUFPLENBQUNzQixhQUFSLENBQXNCQyxPQUF0QixDQUE4QjtBQUM1QkMsVUFBSSxFQUFFSCxFQUFFLEdBQUc7QUFDVCxZQUFJLG1CQURLO0FBRVQsWUFBSSxtQkFGSztBQUdULFlBQUk7QUFISyxPQUFILEdBSUo7QUFDRixZQUFJLG9CQURGO0FBRUYsWUFBSSxvQkFGRjtBQUdGLFlBQUk7QUFIRjtBQUx3QixLQUE5QjtBQVdELEdBN0VTO0FBOEVWSCxjQTlFVSx3QkE4RUdPLEdBOUVILEVBOEVRO0FBQUE7O0FBQ2hCLFFBQUksT0FBT0EsR0FBUCxLQUFlLFNBQW5CLEVBQThCO0FBQzVCLFVBQUlBLEdBQUosRUFBUyxLQUFLQyxhQUFMLEdBQVQsS0FDSyxLQUFLQyxnQkFBTDtBQUNOLEtBSEQsTUFHTztBQUNMckIsMkJBQVNDLEdBQVQsQ0FBYSxVQUFiLEVBQXlCQyxJQUF6QixDQUE4QixVQUFBb0IsT0FBTyxFQUFJO0FBQ3ZDLFlBQUlBLE9BQUosRUFBYSxNQUFJLENBQUNGLGFBQUwsR0FBYixLQUNLLE1BQUksQ0FBQ0MsZ0JBQUw7QUFDTixPQUhEO0FBSUQ7QUFDRixHQXhGUztBQXlGVkQsZUF6RlUsMkJBeUZNO0FBQUE7O0FBQ2QsUUFBSSxDQUFDLEtBQUtHLFVBQVYsRUFBc0I7QUFDcEIsVUFBTUEsVUFBVSxHQUFHLEtBQUtBLFVBQUwsR0FBa0I7QUFBQSxlQUFNLE1BQUksQ0FBQ1YsTUFBTCxFQUFOO0FBQUEsT0FBckM7O0FBRUFuQixhQUFPLENBQUNzQixhQUFSLENBQXNCUSxRQUF0QixDQUErQjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUEvQjtBQUNBL0IsYUFBTyxDQUFDc0IsYUFBUixDQUFzQlUsU0FBdEIsQ0FBZ0M1QixXQUFoQyxDQUE0Q3lCLFVBQTVDO0FBQ0Q7QUFDRixHQWhHUztBQWlHVkYsa0JBakdVLDhCQWlHUztBQUNqQixRQUFJLEtBQUtFLFVBQVQsRUFBcUI7QUFDbkI3QixhQUFPLENBQUNzQixhQUFSLENBQXNCUSxRQUF0QixDQUErQjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUEvQjtBQUNBL0IsYUFBTyxDQUFDc0IsYUFBUixDQUFzQlUsU0FBdEIsQ0FBZ0NDLGNBQWhDLENBQStDLEtBQUtKLFVBQXBEO0FBQ0EsV0FBS0EsVUFBTCxHQUFrQixJQUFsQjtBQUNEO0FBQ0Y7QUF2R1MsQ0FBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDdEJlLFlBQVc7QUFDeEIsU0FBTyxJQUFJckMsY0FBSixDQUFZO0FBQ2pCQyxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFO0FBQ0gseUJBQWlCLFFBRGQ7QUFFSCxnQ0FBd0I7QUFGckI7QUFEQyxLQURTO0FBUWpCd0MsU0FBSyxFQUFFO0FBQ0xDLE9BQUMsRUFBRTtBQUFFQyxnQkFBUSxFQUFFLENBQUMsV0FBRDtBQUFaLE9BREU7QUFFTEMsT0FBQyxFQUFFO0FBQUVELGdCQUFRLEVBQUUsQ0FBQyxXQUFEO0FBQVosT0FGRTtBQUdMRSxPQUFDLEVBQUU7QUFBRUYsZ0JBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE1BQWxCO0FBQVosT0FIRTtBQUlMRyxPQUFDLEVBQUU7QUFBRUgsZ0JBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE1BQWxCO0FBQVosT0FKRTtBQUtMLFlBQU07QUFBRUEsZ0JBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE1BQWxCO0FBQVosT0FMRDtBQU1MSSxPQUFDLEVBQUU7QUFBRUosZ0JBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE1BQWxCO0FBQVosT0FORTtBQU9MSyxRQUFFLEVBQUU7QUFBRUwsZ0JBQVEsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBQVosT0FQQztBQVFMTSxPQUFDLEVBQUU7QUFBRU4sZ0JBQVEsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE1BQWxCO0FBQVo7QUFSRSxLQVJVO0FBa0JqQk8sV0FBTyxFQUFFLEVBbEJRO0FBb0JqQjdDLFlBcEJpQixzQkFvQk47QUFBQTs7QUFDVCxVQUFJOEMsSUFBSjs7QUFDQSxXQUFLLElBQUlDLENBQVQsSUFBYyxLQUFLWCxLQUFuQixFQUEwQjtBQUN4QlUsWUFBSSxHQUFHLEtBQUtWLEtBQUwsQ0FBV1csQ0FBWCxDQUFQO0FBQ0FELFlBQUksQ0FBQ0UsRUFBTCxHQUFVRCxDQUFWO0FBQ0FELFlBQUksQ0FBQ0csS0FBTCxHQUFhL0MsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLFVBQVVKLENBQUMsS0FBSyxJQUFOLEdBQWEsSUFBYixHQUFvQkEsQ0FBOUIsQ0FBeEIsQ0FBYjs7QUFDQUQsWUFBSSxDQUFDTSxPQUFMLEdBQWUsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsaUJBQWdCLEtBQUksQ0FBQ0MsT0FBTCxDQUFhRixLQUFiLEVBQW9CQyxHQUFwQixDQUFoQjtBQUFBLFNBQWY7QUFDRDs7QUFDRCxXQUFLRSxNQUFMO0FBQ0QsS0E3QmdCO0FBK0JqQkMsVUEvQmlCLGtCQStCVlQsRUEvQlUsRUErQk47QUFDVCxVQUFJLENBQUMsS0FBS0gsT0FBTCxDQUFhYSxRQUFiLENBQXNCVixFQUF0QixDQUFMLEVBQWdDO0FBQzlCOUMsZUFBTyxDQUFDeUQsS0FBUixDQUFjRixNQUFkLENBQXFCLEtBQUtyQixLQUFMLENBQVdZLEVBQVgsQ0FBckI7QUFDQSxhQUFLSCxPQUFMLENBQWFlLElBQWIsQ0FBa0JaLEVBQWxCO0FBQ0Q7QUFDRixLQXBDZ0I7QUFxQ2pCYSxVQXJDaUIsa0JBcUNWYixFQXJDVSxFQXFDTjtBQUNULFVBQUksS0FBS0gsT0FBTCxDQUFhYSxRQUFiLENBQXNCVixFQUF0QixDQUFKLEVBQStCO0FBQzdCOUMsZUFBTyxDQUFDeUQsS0FBUixDQUFjRSxNQUFkLENBQXFCYixFQUFyQjtBQUNBLGFBQUtILE9BQUwsQ0FBYWlCLE1BQWIsQ0FBb0IsS0FBS2pCLE9BQUwsQ0FBYWtCLE9BQWIsQ0FBcUJmLEVBQXJCLENBQXBCLEVBQThDLENBQTlDO0FBQ0Q7QUFDRixLQTFDZ0I7QUEyQ2pCZ0IsYUEzQ2lCLHVCQTJDTDtBQUNWLFVBQUksS0FBS25CLE9BQUwsQ0FBYW9CLE1BQWpCLEVBQXlCO0FBQ3ZCL0QsZUFBTyxDQUFDeUQsS0FBUixDQUFjSyxTQUFkO0FBQ0EsYUFBS25CLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7QUFDRixLQWhEZ0I7QUFpRGpCeEIsVUFqRGlCLGtCQWlEVkUsRUFqRFUsRUFpRE47QUFDVCxVQUFJQSxFQUFKLEVBQVEsS0FBS2lDLE1BQUwsR0FBUixLQUNLLEtBQUtRLFNBQUw7QUFDTixLQXBEZ0I7QUFxRGpCUixVQXJEaUIsb0JBcURSO0FBQUE7O0FBQ1AsVUFBTVgsT0FBTyxHQUFHLEtBQUtBLE9BQXJCOztBQUNBckMsMkJBQVNDLEdBQVQsQ0FBYSxXQUFiLEVBQTBCQyxJQUExQixDQUErQixVQUFBd0QsU0FBUyxFQUFJO0FBQzFDLGFBQUssSUFBSW5CLENBQVQsSUFBYyxNQUFJLENBQUNYLEtBQW5CLEVBQTBCO0FBQ3hCLGNBQUk4QixTQUFTLENBQUNuQixDQUFELENBQVQsQ0FBYSxDQUFiLENBQUosRUFBcUIsTUFBSSxDQUFDVSxNQUFMLENBQVlWLENBQVosRUFBckIsS0FDSyxNQUFJLENBQUNjLE1BQUwsQ0FBWWQsQ0FBWjtBQUNOO0FBQ0YsT0FMRDtBQU1ELEtBN0RnQjtBQThEakJRLFdBOURpQixtQkE4RFRGLEtBOURTLEVBOERGQyxHQTlERSxFQThERztBQUNsQixVQUFNTixFQUFFLEdBQUdLLEtBQUssQ0FBQ2MsVUFBakI7QUFDQSxVQUFJbkIsRUFBRSxLQUFLLEdBQVgsRUFBZ0IsS0FBS2xDLElBQUwsQ0FBVSxhQUFWLEVBQXlCdUMsS0FBSyxDQUFDZSxhQUEvQixFQUFoQixLQUNLLElBQUlwQixFQUFFLEtBQUssSUFBWCxFQUFpQjlDLE9BQU8sQ0FBQ21FLGFBQVIsQ0FBc0JDLElBQXRCLEdBQWpCLEtBQ0EsS0FBS3hELElBQUwsQ0FBVSxTQUFTa0MsRUFBbkIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUM7QUFBRU0sV0FBRyxFQUFFQSxHQUFHLENBQUNOO0FBQVgsT0FBbkM7QUFDTjtBQW5FZ0IsR0FBWixDQUFQO0FBcUVELEM7O0FBekVEOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJdEQsY0FBSixDQUFZO0FBQ1ZDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxlQUFTLEtBRE47QUFFSCxpQkFBVyxLQUZSO0FBR0gsMkJBQXFCLEtBSGxCO0FBSUgsNkJBQXVCLEtBSnBCO0FBS0gsNkJBQXVCLEtBTHBCO0FBTUgsNEJBQXNCLHFCQU5uQjtBQU9ILGdDQUEwQixtQkFQdkI7QUFRSCx3Q0FBa0MsMkJBUi9CO0FBU0gsb0JBQWMsYUFUWDtBQVVILHlCQUFtQixrQkFWaEI7QUFXSCxzQkFBZ0IsS0FYYjtBQVlILCtCQUF5QixLQVp0QjtBQWFILG9CQUFjLE9BYlg7QUFjSCw4QkFBd0I7QUFkckI7QUFEQyxHQURFO0FBb0JWMkUsS0FwQlUsZUFvQk5DLEtBcEJNLEVBb0JDQyxNQXBCRCxFQW9CUztBQUFBOztBQUNqQixRQUFJRixHQUFKLEVBQVNHLEdBQVQ7O0FBQ0EsUUFBSUYsS0FBSyxDQUFDRyxJQUFWLEVBQWdCO0FBQ2RKLFNBQUcsR0FBRyxDQUFDQyxLQUFLLENBQUNHLElBQVAsRUFBYUgsS0FBSyxDQUFDSSxPQUFOLEdBQWdCLElBQWhCLEdBQXVCSixLQUFLLENBQUNLLFFBQTdCLEdBQXdDLEdBQXJELENBQU47QUFDRCxLQUZELE1BRU87QUFDTE4sU0FBRyxHQUFHLENBQUUsSUFBSU8sSUFBSixHQUFXQyxPQUFYLEVBQUYsRUFBeUJDLHFCQUFVUixLQUFWLEtBQW9CQSxLQUE3QyxDQUFOOztBQUNBLFVBQUlDLE1BQU0sSUFBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQWhDLEVBQTBDO0FBQ3hDRixXQUFHLENBQUNYLElBQUosQ0FBU2EsTUFBVDtBQUNEO0FBQ0Y7O0FBQ0RqRSx5QkFBU1EsR0FBVCxDQUFhLEtBQWIsRUFBb0J1RCxHQUFwQixFQUF5QjdELElBQXpCLENBQThCO0FBQUEsYUFBTSxLQUFJLENBQUNJLElBQUwsQ0FBVSwyQkFBVixFQUF1Q3lELEdBQXZDLENBQU47QUFBQSxLQUE5QjtBQUNELEdBL0JTO0FBZ0NWVSxPQWhDVSxtQkFnQ0Y7QUFBQTs7QUFDTnpFLHlCQUFTUSxHQUFULENBQWEsS0FBYixFQUFvQjtBQUFFaUUsV0FBSyxFQUFFO0FBQVQsS0FBcEIsRUFBcUN2RSxJQUFyQyxDQUEwQztBQUFBLGFBQU0sTUFBSSxDQUFDSSxJQUFMLENBQVUsY0FBVixDQUFOO0FBQUEsS0FBMUM7QUFDRCxHQWxDUztBQW1DVm9FLG1CQW5DVSwrQkFtQ1U7QUFDbEIsU0FBS1gsR0FBTCxDQUFTLDRCQUFUO0FBQ0QsR0FyQ1M7QUFzQ1ZZLDJCQXRDVSx1Q0FzQ2tCO0FBQzFCLFNBQUtaLEdBQUwsQ0FBUyw0QkFBVDtBQUNELEdBeENTO0FBeUNWYSxxQkF6Q1UsK0JBeUNVWCxNQXpDVixFQXlDa0I7QUFDMUIsU0FBS0YsR0FBTCxDQUFTLDBCQUFULEVBQXFDRSxNQUFyQztBQUNELEdBM0NTO0FBNENWWSxrQkE1Q1UsOEJBNENTO0FBQ2pCLFNBQUtkLEdBQUwsQ0FBUyxVQUFUO0FBQ0QsR0E5Q1M7QUErQ1ZlLGFBL0NVLHlCQStDSTtBQUNaLFNBQUtmLEdBQUwsQ0FBUyxVQUFUO0FBQ0Q7QUFqRFMsQ0FBWixFOzs7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJN0UsY0FBSixDQUFZO0FBQ1ZDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxtQkFBYSxVQURWO0FBRUgscUJBQWUsa0JBRlo7QUFHSCx1QkFBaUIsaUJBSGQ7QUFJSCxxQkFBZSxpQkFKWjtBQUtILHNCQUFnQjtBQUxiO0FBREMsR0FERTtBQVVWMkYscUJBQW1CLEVBQUUsSUFWWDtBQVlWQyxVQVpVLG9CQVlEQyxHQVpDLEVBWUlDLE1BWkosRUFZWUMsWUFaWixFQVkwQjtBQUFBOztBQUNsQyxRQUFNQyxlQUFlLEdBQUksc0JBQVVILEdBQVYsQ0FBekI7O0FBRUFqRix5QkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFtRixPQUFPLEVBQUk7QUFDdEMsVUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUNDLE9BQXRCO0FBQUEsVUFDSUMsT0FBTyxHQUFHLEVBRGQ7QUFBQSxVQUVJQyxhQUFhLEdBQUcsRUFGcEI7QUFBQSxVQUdJQyxLQUhKO0FBQUEsVUFHV0MsT0FIWDtBQUFBLFVBR29CQyxRQUhwQjs7QUFLQSxXQUFLLElBQUlDLENBQVQsSUFBY04sT0FBZCxFQUF1QjtBQUNyQkcsYUFBSyxHQUFHSCxPQUFPLENBQUNNLENBQUQsQ0FBZjtBQUNBRixlQUFPLEdBQUdELEtBQUssQ0FBQ0ksYUFBTixHQUFzQlosR0FBdEIsR0FBNEJHLGVBQXRDO0FBQ0FPLGdCQUFRLEdBQUdGLEtBQUssQ0FBQ0ksYUFBTixHQUFzQkosS0FBSyxDQUFDUixHQUE1QixHQUFrQyxzQkFBVVEsS0FBSyxDQUFDUixHQUFoQixDQUE3Qzs7QUFFQSxZQUFJUyxPQUFPLEtBQUtDLFFBQWhCLEVBQTBCO0FBQ3hCSixpQkFBTyxDQUFDbkMsSUFBUixDQUFhcUMsS0FBYjtBQUNBLGNBQUlBLEtBQUssQ0FBQ0ssTUFBVixFQUFrQk4sYUFBYSxDQUFDcEMsSUFBZCxDQUFtQnFDLEtBQW5CO0FBQ25CO0FBQ0Y7O0FBQ0QsVUFBSSxDQUFDRixPQUFPLENBQUM5QixNQUFiLEVBQXFCO0FBQ25CMEIsb0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxPQUZELE1BRU87QUFDTEEsb0JBQVksQ0FBQztBQUFFRyxpQkFBTyxFQUFFQyxPQUFYO0FBQW9CUiw2QkFBbUIsRUFBRSxLQUFJLENBQUNBO0FBQTlDLFNBQUQsQ0FBWjtBQUNBLGFBQUksQ0FBQ0EsbUJBQUwsR0FBMkIsSUFBM0I7QUFDRDs7QUFDRFUsV0FBSyxHQUFHRCxhQUFhLENBQUMvQixNQUFkLEdBQXVCK0IsYUFBdkIsR0FBdUMsQ0FBQ0QsT0FBTyxDQUFDOUIsTUFBVCxHQUFrQixJQUFsQixHQUF5QjhCLE9BQU8sQ0FBQyxDQUFELENBQS9FOztBQUNBLFdBQUksQ0FBQ2pGLElBQUwsQ0FBVSxhQUFWLEVBQXlCbUYsS0FBekI7QUFDRCxLQXhCRDtBQXlCRCxHQXhDUztBQXlDVk0saUJBekNVLDJCQXlDTWIsTUF6Q04sRUF5Q2NDLFlBekNkLEVBeUM0QjtBQUFBOztBQUNwQyxXQUFPekYsT0FBTyxDQUFDc0csT0FBUixDQUFnQkMsY0FBaEIsR0FDSi9GLElBREksQ0FDQyxVQUFBZ0csVUFBVSxFQUFJO0FBQ2xCLFVBQU1DLElBQUksR0FBR0QsVUFBVSxDQUFDRSxTQUF4QjtBQUNBLFVBQUksQ0FBQ0QsSUFBTCxFQUFXaEIsWUFBWSxDQUFDLENBQUNnQixJQUFGLENBQVosQ0FBWCxLQUNLO0FBQ0huRyw2QkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUFtRyxVQUFVLEVBQUk7QUFDMUMsY0FBSSxDQUFDQSxVQUFMLEVBQWlCLE1BQUksQ0FBQy9GLElBQUwsQ0FBVSxZQUFWLEVBQWpCLEtBQ0s2RSxZQUFZLENBQUNrQixVQUFELENBQVo7QUFDTixTQUhEO0FBSUQ7QUFDRixLQVZJLENBQVA7QUFXRCxHQXJEUztBQXNEVkMsa0JBdERVLDRCQXNET2IsS0F0RFAsRUFzRGM7QUFBQTs7QUFDdEIsV0FBTy9GLE9BQU8sQ0FBQ3NHLE9BQVIsQ0FBZ0JDLGNBQWhCLEdBQ0ovRixJQURJLENBQ0MsVUFBQWdHLFVBQVUsRUFBSTtBQUNsQixVQUFJLENBQUNBLFVBQVUsQ0FBQ0UsU0FBaEIsRUFBMkIsTUFBSSxDQUFDOUYsSUFBTCxDQUFVLG9CQUFWLEVBQWdDbUYsS0FBaEMsRUFBM0IsS0FDSztBQUNIekYsNkJBQVNDLEdBQVQsQ0FBYSxVQUFiLEVBQXlCQyxJQUF6QixDQUE4QixVQUFBbUcsVUFBVSxFQUFJO0FBQzFDLGNBQUksQ0FBQ0EsVUFBTCxFQUFpQixNQUFJLENBQUMvRixJQUFMLENBQVUsWUFBVixFQUFqQixLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLG9CQUFWLEVBQWdDbUYsS0FBaEM7QUFDTixTQUhEO0FBSUQ7QUFDRixLQVRJLENBQVA7QUFVRCxHQWpFUztBQWtFVmMsaUJBbEVVLDJCQWtFTWQsS0FsRU4sRUFrRWE7QUFBQTs7QUFDckIsV0FBTy9GLE9BQU8sQ0FBQ3NHLE9BQVIsQ0FBZ0JDLGNBQWhCLEdBQ0ovRixJQURJLENBQ0MsVUFBQWdHLFVBQVUsRUFBSTtBQUNsQixVQUFJLENBQUNBLFVBQVUsQ0FBQ0UsU0FBaEIsRUFBMkIsTUFBSSxDQUFDOUYsSUFBTCxDQUFVLHNCQUFWLEVBQWtDbUYsS0FBbEMsRUFBM0IsS0FDSztBQUNIekYsNkJBQVNDLEdBQVQsQ0FBYSxVQUFiLEVBQXlCQyxJQUF6QixDQUE4QixVQUFBbUcsVUFBVSxFQUFJO0FBQzFDLGNBQUksQ0FBQ0EsVUFBTCxFQUFpQixNQUFJLENBQUMvRixJQUFMLENBQVUsWUFBVixFQUFqQixLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLHNCQUFWLEVBQWtDbUYsS0FBbEM7QUFDTixTQUhEO0FBSUQ7QUFDRixLQVRJLENBQVA7QUFVRCxHQTdFUztBQThFVmUsdUJBOUVVLGlDQThFWUMsSUE5RVosRUE4RWtCO0FBQzFCLFNBQUsxQixtQkFBTCxHQUEyQjBCLElBQTNCO0FBQ0Q7QUFoRlMsQ0FBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQ2UsWUFBVztBQUN4QixTQUFPLElBQUl2SCxjQUFKLENBQVk7QUFDakJDLFVBQU0sRUFBRTtBQUNOQyxTQUFHLEVBQUU7QUFDSCw4QkFBc0IsTUFEbkI7QUFFSCx3QkFBZ0I7QUFGYjtBQURDLEtBRFM7QUFRakJzSCxRQVJpQixnQkFRWmpCLEtBUlksRUFRTDtBQUFBOztBQUNWLFVBQUlBLEtBQUssQ0FBQ2lCLElBQVYsRUFBZ0IsT0FBTyxLQUFLQyxVQUFMLENBQWdCbEIsS0FBSyxDQUFDaUIsSUFBdEIsRUFBNEJqQixLQUE1QixDQUFQOztBQUVoQnpGLDJCQUFTQyxHQUFULENBQWEsUUFBYixFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQTBHLE1BQU07QUFBQSxlQUFJLEtBQUksQ0FBQ0QsVUFBTCxDQUFnQixJQUFoQixFQUFzQmxCLEtBQXRCLEVBQTZCbUIsTUFBN0IsQ0FBSjtBQUFBLE9BQWxDLFdBQ1M7QUFBQSxlQUFNLEtBQUksQ0FBQ3RHLElBQUwsQ0FBVSxPQUFWLEVBQW1CLGNBQW5CLENBQU47QUFBQSxPQURUO0FBRUQsS0FiZ0I7QUFjakJ1RyxVQWRpQixrQkFjVkMsT0FkVSxFQWNEQyxPQWRDLEVBY1FDLElBZFIsRUFjYztBQUFBOztBQUM3QkQsYUFBTyxHQUFHQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJDLDRCQUFpQkMsb0JBQWpCLEdBQXdDLENBQTdELENBQVY7O0FBRUFuSCwyQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFtRixPQUFPLEVBQUk7QUFDdEMsWUFBSStCLE9BQU8sR0FBRyxNQUFJLENBQUNDLGtCQUFMLENBQXdCaEMsT0FBeEIsRUFBaUMwQixPQUFqQyxDQUFkOztBQUNBLFlBQUlLLE9BQUosRUFBYUwsT0FBTyxJQUFJLFFBQVFLLE9BQU8sR0FBRyxDQUFsQixJQUF1QixHQUFsQzs7QUFDYixjQUFJLENBQUM5RyxJQUFMLENBQVUsZUFBVixFQUEyQndHLE9BQTNCLEVBQW9DQyxPQUFwQyxFQUE2Q0MsSUFBN0M7QUFDRCxPQUpELFdBS087QUFBQSxlQUFNLE1BQUksQ0FBQzFHLElBQUwsQ0FBVSxPQUFWLEVBQW1CLGNBQW5CLENBQU47QUFBQSxPQUxQO0FBTUQsS0F2QmdCO0FBd0JqQnFHLGNBeEJpQixzQkF3Qk5ELElBeEJNLEVBd0JBakIsS0F4QkEsRUF3Qk82QixNQXhCUCxFQXdCZTtBQUFBOztBQUM5QlosVUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUgsR0FDSlksTUFBTSxLQUFLLE9BQVgsR0FBcUI3QixLQUFLLENBQUNoRCxLQUFOLENBQVk4RSxJQUFaLEtBQXFCOUIsS0FBSyxDQUFDaEQsS0FBTixDQUFZOEUsSUFBWixFQUFyQixHQUEwQzlCLEtBQUssQ0FBQ1IsR0FBckUsR0FDQXFDLE1BQU0sS0FBSyxNQUFYLEdBQXFCLElBQUloRCxJQUFKLENBQVNtQixLQUFLLENBQUMrQixLQUFmLEVBQXNCQyxjQUF0QixFQUFyQixHQUErRCxFQUZ0RTtBQUlBZixVQUFJLEdBQUdBLElBQUksQ0FBQ08sU0FBTCxDQUFlLENBQWYsRUFBa0JDLDRCQUFpQkMsb0JBQWpCLEdBQXdDLENBQTFELENBQVA7O0FBRUFuSCwyQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFtRixPQUFPLEVBQUk7QUFDdEMsWUFBSStCLE9BQU8sR0FBRyxNQUFJLENBQUNDLGtCQUFMLENBQXdCaEMsT0FBeEIsRUFBaUNxQixJQUFqQyxDQUFkOztBQUVBLFlBQUlVLE9BQU8sSUFBSTNCLEtBQUssQ0FBQ0ssTUFBckIsRUFBNkI7QUFDM0IsZ0JBQUksQ0FBQ3hGLElBQUwsQ0FBVSxpQ0FBVixFQUE2QywwQkFBN0MsRUFBeUVvRyxJQUF6RTtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlVLE9BQUosRUFBYVYsSUFBSSxJQUFJLFFBQVFVLE9BQU8sR0FBRyxDQUFsQixJQUF1QixHQUEvQjtBQUNiM0IsZUFBSyxDQUFDaUIsSUFBTixHQUFhQSxJQUFiOztBQUNBLGdCQUFJLENBQUNwRyxJQUFMLENBQVUsYUFBVixFQUF5Qm1GLEtBQXpCO0FBQ0Q7QUFDRixPQVZELFdBV087QUFBQSxlQUFNLE1BQUksQ0FBQ25GLElBQUwsQ0FBVSxPQUFWLEVBQW1CLGNBQW5CLENBQU47QUFBQSxPQVhQO0FBWUQsS0EzQ2dCO0FBNENqQitHLHNCQTVDaUIsOEJBNENFaEMsT0E1Q0YsRUE0Q1dxQixJQTVDWCxFQTRDaUI7QUFDaEMsVUFBSWdCLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVl2QyxPQUFPLENBQUNDLE9BQXBCLENBQXBCO0FBQUEsVUFDSXVDLENBQUMsR0FBR0gsYUFBYSxDQUFDakUsTUFEdEI7QUFBQSxVQUVJMkQsT0FBTyxHQUFHLENBRmQ7QUFBQSxVQUdJVSxVQUhKOztBQUtBLGFBQU9ELENBQUMsRUFBUixFQUFZO0FBQ1ZDLGtCQUFVLEdBQUdKLGFBQWEsQ0FBQ0csQ0FBRCxDQUExQjtBQUNBLFlBQUksS0FBS0UsWUFBTCxDQUFrQnJCLElBQWxCLEVBQXdCb0IsVUFBeEIsQ0FBSixFQUF5Q1YsT0FBTztBQUNqRDs7QUFDRCxhQUFPQSxPQUFQO0FBQ0QsS0F2RGdCO0FBd0RqQlcsZ0JBeERpQix3QkF3REpyQixJQXhESSxFQXdERW9CLFVBeERGLEVBd0RjO0FBQzdCLFVBQUlwQixJQUFJLEtBQUtvQixVQUFiLEVBQXlCLE9BQU8sSUFBUDtBQUV6QixVQUFJRCxDQUFDLEdBQUduQixJQUFJLENBQUNqRCxNQUFiO0FBQUEsVUFDSXVFLGdCQUFnQixHQUFHRixVQUFVLENBQUNiLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0JZLENBQXhCLENBRHZCO0FBQUEsVUFFSUksY0FGSjtBQUlBLFVBQUl2QixJQUFJLEtBQUtzQixnQkFBYixFQUErQixPQUFPLEtBQVA7QUFFL0JDLG9CQUFjLEdBQUdILFVBQVUsQ0FBQ2IsU0FBWCxDQUFxQlksQ0FBckIsRUFBd0JDLFVBQVUsQ0FBQ3JFLE1BQW5DLENBQWpCO0FBRUEsVUFBSSxlQUFleUUsSUFBZixDQUFvQkQsY0FBcEIsQ0FBSixFQUF5QyxPQUFPLElBQVA7QUFFekMsYUFBTyxLQUFQO0FBQ0Q7QUF0RWdCLEdBQVosQ0FBUDtBQXdFRCxDOztBQTdFRDs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0NlLFlBQVc7QUFDeEIsU0FBTyxJQUFJL0ksY0FBSixDQUFZO0FBQ2pCQyxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFO0FBQ0gsdUJBQWUsY0FEWjtBQUVILDZCQUFxQixhQUZsQjtBQUdILCtCQUF1QixhQUhwQjtBQUlILDJDQUFtQyw2QkFKaEM7QUFLSCxpQ0FBeUIsZUFMdEI7QUFNSCwyQkFBbUIsa0JBTmhCO0FBT0gsOEJBQXNCLHFCQVBuQjtBQVFILGlDQUF5Qix5QkFSdEI7QUFTSCxvREFBNEMsZ0JBVHpDO0FBVUgsc0JBQWMsYUFWWDtBQVdILHlCQUFpQixnQkFYZDtBQVlILHdCQUFnQixlQVpiO0FBYUgsNEJBQW9CLGlCQWJqQjtBQWNILGlCQUFTLFNBZE47QUFlSCxrQ0FBMEIsbUJBZnZCO0FBZ0JILDBDQUFrQztBQWhCL0I7QUFEQyxLQURTO0FBc0JqQitJLFVBdEJpQixrQkFzQlZDLFNBdEJVLEVBc0JDaEUsT0F0QkQsRUFzQlVpRSxJQXRCVixFQXNCZ0I7QUFDL0JySSwyQkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUFvSSxRQUFRLEVBQUk7QUFDeEMsWUFBSUYsU0FBUyxDQUFDRSxRQUFELENBQWIsRUFBeUI7QUFDdkI1SSxpQkFBTyxDQUFDNkksYUFBUixDQUFzQnRGLE1BQXRCLENBQTZCO0FBQzNCb0YsZ0JBQUksRUFBRSxPQURxQjtBQUUzQjVGLGlCQUFLLEVBQUUsaUJBQWlCL0MsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCMEYsSUFBeEIsQ0FGRztBQUczQmpFLG1CQUFPLEVBQVBBLE9BSDJCO0FBSTNCb0UsbUJBQU8sRUFBRTlJLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjhJLE1BQWhCLENBQXVCLGdCQUF2QjtBQUprQixXQUE3QjtBQU1EO0FBQ0YsT0FURDtBQVVELEtBakNnQjtBQW1DakJDLGdCQW5DaUIsMEJBbUNGO0FBQ2IsV0FBS1AsTUFBTCxDQUNFLFVBQUFHLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNqRCxPQUFULENBQWlCc0QsUUFBckI7QUFBQSxPQURWLEVBRUVqSixPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0Isa0JBQXhCLENBRkYsRUFHRSxTQUhGO0FBS0QsS0F6Q2dCO0FBMkNqQm1DLGVBM0NpQix5QkEyQ0g7QUFDWixXQUFLcUQsTUFBTCxDQUNFLFVBQUFHLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNNLElBQVQsQ0FBY0MsT0FBbEI7QUFBQSxPQURWLEVBRUVuSixPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsVUFBeEIsQ0FGRixFQUdFLE9BSEY7QUFLRCxLQWpEZ0I7QUFtRGpCa0Msb0JBbkRpQiw4QkFtREU7QUFDakIsV0FBS3NELE1BQUwsQ0FDRSxVQUFBRyxRQUFRO0FBQUEsZUFBSSxJQUFKO0FBQUEsT0FEVixFQUVFNUksT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLFVBQXhCLENBRkYsRUFHRSxPQUhGO0FBS0QsS0F6RGdCO0FBMkRqQm1HLGtCQTNEaUIsMEJBMkRGQyxNQTNERSxFQTJETUMsTUEzRE4sRUEyRGM7QUFDN0IsVUFBTUMsV0FBVyxHQUFHdkosT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCb0csTUFBeEIsQ0FBcEI7QUFDQSxVQUFNRyxXQUFXLEdBQUdGLE1BQU0sR0FBRyxTQUFTdEosT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCcUcsTUFBeEIsQ0FBWixHQUE4QyxFQUF4RTtBQUNBLFdBQUtiLE1BQUwsQ0FDRSxVQUFBRyxRQUFRO0FBQUEsZUFBSSxJQUFKO0FBQUEsT0FEVixFQUVFNUksT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLHFCQUF4QixFQUErQ3NHLFdBQVcsR0FBR0MsV0FBN0QsQ0FGRixFQUdFLE9BSEY7QUFLRCxLQW5FZ0I7QUFxRWpCQyxpQkFyRWlCLHlCQXFFSG5GLEtBckVHLEVBcUVJO0FBQ25CLFdBQUttRSxNQUFMLENBQ0UsVUFBQUcsUUFBUTtBQUFBLGVBQUksSUFBSjtBQUFBLE9BRFYsRUFFRTVJLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixxQkFBeEIsRUFBK0NqRCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JxQixLQUF4QixDQUEvQyxDQUZGLEVBR0UsU0FIRjtBQUtELEtBM0VnQjtBQTZFakJvRixtQkE3RWlCLDZCQTZFQztBQUNoQixXQUFLakIsTUFBTCxDQUNFLFVBQUFHLFFBQVE7QUFBQSxlQUFJLElBQUo7QUFBQSxPQURWLEVBRUU1SSxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IscUJBQXhCLENBRkYsRUFHRSxTQUhGO0FBS0QsS0FuRmdCO0FBcUZqQitCLHFCQXJGaUIsK0JBcUZHO0FBQ2xCLFdBQUt5RCxNQUFMLENBQ0UsVUFBQUcsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjUyxXQUFsQjtBQUFBLE9BRFYsRUFFRTNKLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3Qiw0QkFBeEIsQ0FGRixFQUdFLFNBSEY7QUFLRCxLQTNGZ0I7QUE2RmpCZ0MsNkJBN0ZpQix1Q0E2Rlc7QUFDMUIsV0FBS3dELE1BQUwsQ0FDRSxVQUFBRyxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDTSxJQUFULENBQWNTLFdBQWxCO0FBQUEsT0FEVixFQUVFM0osT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLDRCQUF4QixDQUZGLEVBR0UsU0FIRjtBQUtELEtBbkdnQjtBQXFHakIyRywyQkFyR2lCLHFDQXFHUztBQUN4QixXQUFLbkIsTUFBTCxDQUNFLFVBQUFHLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNNLElBQVQsQ0FBY1csV0FBbEI7QUFBQSxPQURWLEVBRUU3SixPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsMEJBQXhCLENBRkYsRUFHRSxTQUhGO0FBS0QsS0EzR2dCO0FBNkdqQmlDLHVCQTdHaUIsaUNBNkdLO0FBQ3BCLFdBQUt1RCxNQUFMLENBQ0UsVUFBQUcsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjUyxXQUFsQjtBQUFBLE9BRFYsRUFFRTNKLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QiwwQkFBeEIsQ0FGRixFQUdFLE9BSEY7QUFLRCxLQW5IZ0I7QUFxSGpCNkcsa0JBckhpQiw0QkFxSEE7QUFDZixXQUFLckIsTUFBTCxDQUNFLFVBQUFHLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNqRCxPQUFULENBQWlCc0QsUUFBckI7QUFBQSxPQURWLEVBRUVqSixPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsdUJBQXhCLENBRkYsRUFHRSxTQUhGO0FBS0QsS0EzSGdCO0FBNkhqQjhHLGVBN0hpQix1QkE2SEx6RixLQTdISyxFQTZIRTtBQUNqQixXQUFLbUUsTUFBTCxDQUNFLFVBQUFHLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNqRCxPQUFULENBQWlCc0QsUUFBckI7QUFBQSxPQURWLEVBRUVqSixPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUJBQXhCLEVBQTZDakQsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCcUIsS0FBeEIsQ0FBN0MsQ0FGRixFQUdFLE9BSEY7QUFLRCxLQW5JZ0I7QUFxSWpCMEYsK0JBcklpQix1Q0FxSVcxRixLQXJJWCxFQXFJa0IwQyxJQXJJbEIsRUFxSXdCO0FBQ3ZDLFdBQUt5QixNQUFMLENBQ0UsVUFBQUcsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ2pELE9BQVQsQ0FBaUJzRCxRQUFyQjtBQUFBLE9BRFYsRUFFRWpKLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQkFBeEIsRUFBNkNqRCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JxQixLQUF4QixFQUErQjBDLElBQS9CLENBQTdDLENBRkYsRUFHRSxPQUhGO0FBS0QsS0EzSWdCO0FBNklqQmlELGlCQTdJaUIseUJBNklIM0YsS0E3SUcsRUE2SUk7QUFDbkIsV0FBS21FLE1BQUwsQ0FDRSxVQUFBRyxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDTSxJQUFULENBQWNnQixTQUFsQjtBQUFBLE9BRFYsRUFFRWxLLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixZQUF4QixFQUFzQ2pELE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QnFCLEtBQXhCLENBQXRDLENBRkYsRUFHRSxPQUhGO0FBS0QsS0FuSmdCO0FBcUpqQjZGLFdBckppQixtQkFxSlQ3RixLQXJKUyxFQXFKRjtBQUNiLFdBQUttRSxNQUFMLENBQ0UsVUFBQUcsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjZ0IsU0FBbEI7QUFBQSxPQURWLEVBRUVsSyxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsWUFBeEIsRUFBc0NqRCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JxQixLQUF4QixDQUF0QyxDQUZGLEVBR0UsT0FIRjtBQUtEO0FBM0pnQixHQUFaLENBQVA7QUE2SkQsQzs7QUFqS0Q7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQ2UsWUFBVztBQUN4QixTQUFPLElBQUk5RSxjQUFKLENBQVk7QUFDakJDLFVBQU0sRUFBRTtBQUNOQyxTQUFHLEVBQUU7QUFDSCx5QkFBaUIsVUFEZDtBQUVILHVCQUFlLFVBRlo7QUFHSCx1QkFBZSxZQUhaO0FBSUgsdUJBQWUsWUFKWjtBQUtILHlCQUFpQixhQUxkO0FBTUgseUJBQWlCLGFBTmQ7QUFPSCwwQkFBaUIsV0FQZDtBQVFILGtDQUEwQjtBQVJ2QjtBQURDLEtBRFM7QUFjakJrRyxXQUFPLEVBQUUsRUFkUTtBQWdCakJ3RSxZQWhCaUIsb0JBZ0JSQyxLQWhCUSxFQWdCRDlFLEdBaEJDLEVBZ0JJO0FBQ25CLFdBQUsrRSxNQUFMLEdBQWM5SixJQUFkLENBQW1CLFVBQUE0RCxJQUFJLEVBQUk7QUFDekIsWUFBSUEsSUFBSixFQUFVO0FBQ1JwRSxpQkFBTyxDQUFDbUUsYUFBUixDQUFzQmlHLFFBQXRCLENBQStCO0FBQzdCRyxpQkFBSyxFQUFFdkssT0FBTyxDQUFDQyxPQUFSLENBQWdCOEksTUFBaEIsd0NBQXVEc0IsS0FBdkQsY0FBZ0U5RSxHQUFoRSxFQURzQjtBQUU3QjhFLGlCQUFLLEVBQUxBO0FBRjZCLFdBQS9CO0FBSUQ7QUFDRixPQVBEO0FBUUQsS0F6QmdCO0FBMEJqQkMsVUExQmlCLG9CQTBCUjtBQUNQLGFBQU90SyxPQUFPLENBQUNtRSxhQUFSLENBQXNCbUcsTUFBdEIsQ0FBNkIsRUFBN0IsQ0FBUDtBQUNELEtBNUJnQjtBQTZCakJFLGNBN0JpQixzQkE2Qk56RSxLQTdCTSxFQTZCQztBQUNoQixVQUFNMEUsVUFBVSxHQUFHLENBQUMxRSxLQUFLLENBQUNJLGFBQTFCO0FBQ0EsVUFBTVAsT0FBTyxHQUFHLEtBQUtBLE9BQXJCO0FBRUEsb0NBQWtCcEYsSUFBbEIsQ0FBdUIsVUFBQTRDLEdBQUcsRUFBSTtBQUM1QixZQUFNTixFQUFFLEdBQUdNLEdBQUcsQ0FBQ04sRUFBZjtBQUNBLFlBQU15QyxHQUFHLEdBQUdrRixVQUFVLEdBQUcsc0JBQVVySCxHQUFHLENBQUNtQyxHQUFkLENBQUgsR0FBd0JuQyxHQUFHLENBQUNtQyxHQUFsRDtBQUVBSyxlQUFPLENBQUM5QyxFQUFELENBQVAsR0FBYzhDLE9BQU8sQ0FBQzlDLEVBQUQsQ0FBUCxJQUFlLEVBQTdCO0FBQ0E4QyxlQUFPLENBQUM5QyxFQUFELENBQVAsQ0FBWXlDLEdBQVosSUFBbUJRLEtBQW5CO0FBQ0QsT0FORDtBQU9ELEtBeENnQjtBQXlDakIyRSxlQXpDaUIsdUJBeUNMM0UsS0F6Q0ssRUF5Q0U7QUFBQTs7QUFDakIsVUFBTTBFLFVBQVUsR0FBRyxDQUFDMUUsS0FBSyxDQUFDSSxhQUExQjtBQUNBLFVBQU1QLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjtBQUNBLFVBQU1LLFFBQVEsR0FBR3dFLFVBQVUsR0FBRyxzQkFBVTFFLEtBQUssQ0FBQ1IsR0FBaEIsQ0FBSCxHQUEwQlEsS0FBSyxDQUFDUixHQUEzRDs7QUFFQSxXQUFLLElBQUl6QyxFQUFULElBQWU4QyxPQUFmLEVBQXdCO0FBQ3RCLGFBQUssSUFBSUwsR0FBVCxJQUFnQkssT0FBTyxDQUFDOUMsRUFBRCxDQUF2QixFQUE2QjtBQUMzQixjQUFJeUMsR0FBRyxLQUFLVSxRQUFaLEVBQXNCO0FBQ3BCTCxtQkFBTyxDQUFDOUMsRUFBRCxDQUFQLENBQVl5QyxHQUFaLElBQW1CUSxLQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxvQ0FBa0J2RixJQUFsQixDQUF1QixVQUFBNEMsR0FBRyxFQUFJO0FBQzVCLFlBQU11SCxNQUFNLEdBQUdGLFVBQVUsR0FBRyxzQkFBVXJILEdBQUcsQ0FBQ21DLEdBQWQsQ0FBSCxHQUF3Qm5DLEdBQUcsQ0FBQ21DLEdBQXJEOztBQUVBLFlBQUlvRixNQUFNLEtBQUsxRSxRQUFmLEVBQXlCO0FBQ3ZCLGVBQUksQ0FBQ3JGLElBQUwsQ0FBVSxxQkFBVixFQUFpQ21GLEtBQWpDO0FBQ0Q7QUFDRixPQU5EO0FBT0QsS0E1RGdCO0FBNkRqQjZFLGVBN0RpQix1QkE2REw1RCxJQTdESyxFQTZEQ3pCLEdBN0RELEVBNkRNWSxhQTdETixFQTZEcUI7QUFBQTs7QUFDcEMsVUFBTVAsT0FBTyxHQUFHLEtBQUtBLE9BQXJCO0FBQ0EsVUFBTUssUUFBUSxHQUFHRSxhQUFhLEdBQUdaLEdBQUgsR0FBUyxzQkFBVUEsR0FBVixDQUF2Qzs7QUFFQSxXQUFLLElBQUl6QyxFQUFULElBQWU4QyxPQUFmLEVBQXdCO0FBQ3RCLGFBQUssSUFBSWlGLFFBQVQsSUFBcUJqRixPQUFPLENBQUM5QyxFQUFELENBQTVCLEVBQWtDO0FBQ2hDLGNBQUkrSCxRQUFRLEtBQUs1RSxRQUFqQixFQUEyQjtBQUN6QixtQkFBT0wsT0FBTyxDQUFDOUMsRUFBRCxDQUFQLENBQVkrSCxRQUFaLENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0Qsb0NBQWtCckssSUFBbEIsQ0FBdUIsVUFBQTRDLEdBQUcsRUFBSTtBQUM1QixZQUFNdUgsTUFBTSxHQUFHeEUsYUFBYSxHQUFHL0MsR0FBRyxDQUFDbUMsR0FBUCxHQUFhLHNCQUFVbkMsR0FBRyxDQUFDbUMsR0FBZCxDQUF6Qzs7QUFDQSxZQUFJb0YsTUFBTSxLQUFLMUUsUUFBZixFQUF5QjtBQUN2QixnQkFBSSxDQUFDckYsSUFBTCxDQUFVLHVCQUFWO0FBQ0Q7QUFDRixPQUxEO0FBTUQsS0E5RWdCO0FBK0VqQmtLLGFBL0VpQix1QkErRUw7QUFBQTs7QUFDVixvQ0FBa0J0SyxJQUFsQixDQUF1QixVQUFBNEMsR0FBRyxFQUFJO0FBQzVCLFlBQU0ySCxXQUFXLEdBQUcsc0JBQVUzSCxHQUFHLENBQUNtQyxHQUFkLENBQXBCO0FBRUEsWUFBTXlGLGlCQUFpQixHQUFHLE1BQUksQ0FBQ3BGLE9BQUwsQ0FBYXhDLEdBQUcsQ0FBQ04sRUFBakIsQ0FBMUI7QUFDQSxZQUFJaUQsS0FBSyxHQUFHLElBQVo7O0FBQ0EsWUFBSWlGLGlCQUFKLEVBQXVCO0FBQ3JCakYsZUFBSyxHQUFHaUYsaUJBQWlCLENBQUM1SCxHQUFHLENBQUNtQyxHQUFMLENBQWpCLElBQThCeUYsaUJBQWlCLENBQUNELFdBQUQsQ0FBdkQ7QUFDRDs7QUFDRCxjQUFJLENBQUNuSyxJQUFMLENBQVUscUJBQVYsRUFBaUNtRixLQUFqQztBQUNELE9BVEQ7QUFVRCxLQTFGZ0I7QUEyRmpCa0Ysb0JBM0ZpQiw0QkEyRkFDLEtBM0ZBLEVBMkZPO0FBQ3RCLFdBQUt0SyxJQUFMLENBQVUscUJBQVYsRUFBaUNzSyxLQUFqQztBQUNEO0FBN0ZnQixHQUFaLENBQVA7QUErRkQsQzs7QUFsR0QsNEU7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUdBLElBQUkxTCxjQUFKLENBQVk7QUFDVkMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHFCQUFlLCtCQURaO0FBRUgsdUJBQWlCLHFCQUZkO0FBR0gscUJBQWUsWUFIWjtBQUtILDhCQUF3QixhQUxyQjtBQU1ILGlDQUEyQix1QkFOeEI7QUFPSCwyQkFBcUIsZUFQbEI7QUFRSCxvQ0FBOEIsa0JBUjNCO0FBU0gsaUNBQTJCLHVCQVR4QjtBQVVILGlDQUEyQix1QkFWeEI7QUFXSCw0QkFBc0Isa0JBWG5CO0FBWUgsZ0NBQTBCLGVBWnZCO0FBYUgsOEJBQXdCLGdCQWJyQjtBQWNILG1DQUE2QixxQkFkMUI7QUFlSCw2QkFBdUIsZUFmcEI7QUFnQkgsNkJBQXVCLG1CQWhCcEI7QUFpQkgsa0NBQTRCLGlCQWpCekI7QUFrQkgsZ0NBQTBCLGVBbEJ2QjtBQW1CSCx1Q0FBaUMsc0JBbkI5QjtBQW9CSCx1Q0FBaUMsc0JBcEI5QjtBQXFCSCxxQ0FBK0IsdUJBckI1QjtBQXNCSCw2QkFBdUIsbUJBdEJwQjtBQXVCSCw2QkFBdUIsbUJBdkJwQjtBQXdCSCxpQ0FBMkIsdUJBeEJ4QjtBQXlCSCw2QkFBdUIsZUF6QnBCO0FBMEJILDZCQUF1QixlQTFCcEI7QUEyQkgsc0NBQWdDLG9CQTNCN0I7QUE0QkgsZ0NBQTBCLG9CQTVCdkI7QUE4QkgsOEJBQXdCLG9CQTlCckI7QUErQkgsMkJBQXFCLGlCQS9CbEI7QUFpQ0gscUJBQWUsV0FqQ1o7QUFrQ0gsdUJBQWlCLGFBbENkO0FBbUNILDhCQUF3Qix5QkFuQ3JCO0FBb0NILHdCQUFrQixlQXBDZjtBQXFDSCw4QkFBd0IsMEJBckNyQjtBQXNDSCx1QkFBaUIsY0F0Q2Q7QUF1Q0gsb0JBQWMsV0F2Q1g7QUF3Q0gscUJBQWUsWUF4Q1o7QUF5Q0gsb0JBQWMsV0F6Q1g7QUEwQ0gsaUJBQVcsUUExQ1I7QUE0Q0gsNkJBQXVCLGtCQTVDcEI7QUE2Q0gsK0JBQXlCLHFCQTdDdEI7QUE4Q0gsMkJBQXFCO0FBOUNsQjtBQURDLEdBREU7QUFtRFZ5TCxxQkFBbUIsRUFBRSxLQW5EWDtBQXFEVjtBQUNBQyxxQkF0RFUsK0JBc0RVekwsTUF0RFYsRUFzRGtCO0FBQzFCVyx5QkFBU2dELE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEIsVUFBQXNGLFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUN5QyxLQUFULENBQWUxTCxNQUFmLEdBQXdCQSxNQUF4QjtBQUFnQyxhQUFPaUosUUFBUDtBQUFrQixLQUE1RjtBQUNELEdBeERTO0FBMERWO0FBQ0EwQyxZQTNEVSxzQkEyRENDLEtBM0RELEVBMkRRQyxHQTNEUixFQTJEYTtBQUFBOztBQUNyQmxMLHlCQUFTZ0QsTUFBVCxDQUFnQixNQUFoQixFQUF3QixVQUFTbUksSUFBVCxFQUFlO0FBRXJDQSxVQUFJLENBQUNGLEtBQUQsQ0FBSixHQUFjQyxHQUFkO0FBRUEsV0FBS0UsYUFBTCxHQUFxQkQsSUFBSSxDQUFDN0MsUUFBTCxHQUFnQixNQUFoQixHQUF5QixPQUE5QztBQUNBLFdBQUsrQyxZQUFMLEdBQW9CRixJQUFJLENBQUM5RixPQUFMLEdBQWUsTUFBZixHQUF3QixPQUE1QztBQUNBLFdBQUtpRyxjQUFMLEdBQXNCSCxJQUFJLENBQUNJLFNBQUwsR0FBaUIsTUFBakIsR0FBMEIsT0FBaEQ7QUFFQSxhQUFPSixJQUFQO0FBQ0QsS0FURCxFQVNHLE9BVEgsRUFXR2pMLElBWEgsQ0FXUSxZQUFNO0FBQ1ZGLDJCQUFTZ0QsTUFBVCxDQUFnQixNQUFoQixFQUF3QixVQUFBbUksSUFBSSxFQUFJO0FBQzlCQSxZQUFJLENBQUNGLEtBQUQsQ0FBSixHQUFjQyxHQUFkO0FBQ0EsZUFBT0MsSUFBUDtBQUNELE9BSEQsV0FLTyxZQUFNO0FBQ1gsYUFBSSxDQUFDN0ssSUFBTCxDQUFVLE9BQVYsRUFBbUIsbUJBQW5COztBQUNBLGFBQUksQ0FBQ0EsSUFBTCxDQUFVLG9CQUFWLEVBQWdDMkssS0FBaEM7QUFDRCxPQVJELEVBU0MvSyxJQVRELENBU007QUFBQSxlQUFNLEtBQUksQ0FBQ0ksSUFBTCxDQUFVLCtCQUErQjJLLEtBQXpDLEVBQWdEQSxLQUFoRCxFQUF1REMsR0FBdkQsQ0FBTjtBQUFBLE9BVE47QUFVRCxLQXRCSDtBQXVCRCxHQW5GUztBQXFGVjtBQUNBTSxnQkF0RlUsMEJBc0ZLQyxPQXRGTCxFQXNGY0MsT0F0RmQsRUFzRnVCMUgsS0F0RnZCLEVBc0Y4QjtBQUFBOztBQUN0Q2hFLHlCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QnlJLE9BQTVCLEVBQ0d2TCxJQURILENBQ1E7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGFBQWFvTCxPQUFiLEdBQXVCLFdBQWpDLENBQU47QUFBQSxLQURSLFdBRVMsWUFBTTtBQUFFLFVBQUkxSCxLQUFKLEVBQVcsTUFBSSxDQUFDMUQsSUFBTCxDQUFVLE9BQVYsRUFBbUIwRCxLQUFuQjtBQUE0QixLQUZ4RDtBQUdELEdBMUZTO0FBMkZWMkgsaUJBM0ZVLDJCQTJGTUMsR0EzRk4sRUEyRldDLEtBM0ZYLEVBMkZrQjtBQUMxQixTQUFLTCxjQUFMLENBQ0UsVUFBQWxELFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUN3RCxPQUFULENBQWlCRixHQUFqQixJQUF5QjtBQUFFQyxhQUFLLEVBQUxBO0FBQUYsT0FBekI7QUFBb0MsYUFBT3ZELFFBQVA7QUFBa0IsS0FEdEUsRUFFRSxRQUZGLEVBR0Usa0JBSEY7QUFLRCxHQWpHUztBQWtHVnlELG9CQWxHVSw4QkFrR1NILEdBbEdULEVBa0djO0FBQ3RCLFNBQUtKLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUUsYUFBT0EsUUFBUSxDQUFDd0QsT0FBVCxDQUFpQkYsR0FBakIsQ0FBUDtBQUE4QixhQUFPdEQsUUFBUDtBQUFrQixLQURoRSxFQUVFLFFBRkYsRUFHRSxxQkFIRjtBQUtELEdBeEdTO0FBeUdWMEQsYUF6R1UsdUJBeUdFSixHQXpHRixFQXlHT0MsS0F6R1AsRUF5R2M7QUFDdEIsUUFBSSxDQUFDRCxHQUFMLEVBQVUsT0FBTyxLQUFQO0FBRVYsU0FBS0osY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDd0QsT0FBVCxDQUFpQkYsR0FBakIsRUFBc0JDLEtBQXRCLEdBQThCQSxLQUE5QjtBQUFxQyxhQUFPdkQsUUFBUDtBQUFrQixLQUR2RSxFQUVFLE9BRkYsRUFHRSxrQkFIRjtBQUtELEdBakhTO0FBa0hWMkQsZUFsSFUseUJBa0hJTCxHQWxISixFQWtIU00sS0FsSFQsRUFrSGdCO0FBQ3hCLFNBQUtWLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQ1YsVUFBSTZELE1BQU0sR0FBRzdELFFBQVEsQ0FBQ3dELE9BQVQsQ0FBaUJGLEdBQWpCLENBQWI7O0FBRUEsVUFBSU8sTUFBSixFQUFZO0FBQ1YsWUFBSUMsS0FBSyxHQUFHRCxNQUFNLENBQUNOLEtBQVAsQ0FBYU8sS0FBYixDQUFtQixHQUFuQixDQUFaO0FBQUEsWUFDSXZFLENBQUMsR0FBR3VFLEtBQUssQ0FBQzNJLE1BRGQ7QUFBQSxZQUNzQm9JLEtBRHRCOztBQUdBLGVBQU9oRSxDQUFDLEVBQVIsRUFBWTtBQUNWZ0UsZUFBSyxHQUFHTyxLQUFLLENBQUN2RSxDQUFELENBQWI7O0FBQ0EsY0FBSWdFLEtBQUssQ0FBQzNJLFFBQU4sQ0FBZSxrQkFBZixDQUFKLEVBQXdDO0FBQ3RDb0Ysb0JBQVEsQ0FBQ3dELE9BQVQsQ0FBaUJGLEdBQWpCLEVBQXNCQyxLQUF0QixHQUE4Qk0sTUFBTSxDQUFDTixLQUFQLENBQWFRLE9BQWIsQ0FBcUIsd0JBQXJCLEVBQStDLHNCQUFzQkgsS0FBckUsQ0FBOUI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxhQUFPNUQsUUFBUDtBQUNELEtBakJILEVBa0JFLFVBbEJGLEVBbUJFLGtCQW5CRjtBQXFCRCxHQXhJUztBQXlJVmdFLHVCQXpJVSxpQ0F5SVlWLEdBeklaLEVBeUlpQlcsUUF6SWpCLEVBeUkyQjtBQUNuQyxTQUFLZixjQUFMLENBQ0UsVUFBQWxELFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUN3RCxPQUFULENBQWlCRixHQUFqQixFQUFzQlcsUUFBdEIsR0FBaUNBLFFBQWpDO0FBQTJDLGFBQU9qRSxRQUFQO0FBQWtCLEtBRDdFLEVBRUUsVUFGRixFQUdFLDRCQUhGO0FBS0QsR0EvSVM7QUFnSlZrRSxrQkFoSlUsNEJBZ0pPbEYsTUFoSlAsRUFnSmU7QUFDdkIsU0FBS2tFLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ00sSUFBVCxDQUFjNkQsVUFBZCxHQUEyQm5GLE1BQTNCO0FBQW1DLGFBQU9nQixRQUFQO0FBQWtCLEtBRHJFLEVBRUUsYUFGRixFQUdFLHdCQUhGO0FBS0QsR0F0SlM7QUF1SlZvRSx1QkF2SlUsaUNBdUpZZCxHQXZKWixFQXVKaUJlLE1BdkpqQixFQXVKeUI7QUFDakMsU0FBS25CLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQzVFLFNBQVQsQ0FBbUJrSSxHQUFuQixFQUF3QixDQUF4QixJQUE2QmUsTUFBN0I7QUFBcUMsYUFBT3JFLFFBQVA7QUFBa0IsS0FEdkUsRUFFRSxVQUZGLEVBR0UsdUJBSEY7QUFLRCxHQTdKUztBQThKVnNFLHVCQTlKVSxpQ0E4SlloQixHQTlKWixFQThKaUJpQixLQTlKakIsRUE4SndCO0FBQ2hDLFNBQUtyQixjQUFMLENBQ0UsVUFBQWxELFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUM1RSxTQUFULENBQW1Ca0ksR0FBbkIsRUFBd0IsQ0FBeEIsSUFBNkJpQixLQUE3QjtBQUFvQyxhQUFPdkUsUUFBUDtBQUFrQixLQUR0RSxFQUVFLFVBRkYsRUFHRSxzQkFIRjtBQUtELEdBcEtTO0FBcUtWd0UsZUFyS1UseUJBcUtJRCxLQXJLSixFQXFLVztBQUNuQixTQUFLckIsY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDakQsT0FBVCxDQUFpQjBILE1BQWpCLEdBQTBCRixLQUExQjtBQUFpQyxhQUFPdkUsUUFBUDtBQUFrQixLQURuRSxFQUVFLE1BRkY7QUFJRCxHQTFLUztBQTJLVjBFLGVBM0tVLHlCQTJLSUgsS0EzS0osRUEyS1c7QUFDbkIsU0FBS3JCLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ2pELE9BQVQsQ0FBaUI0SCxJQUFqQixHQUF3QkosS0FBeEI7QUFBK0IsYUFBT3ZFLFFBQVA7QUFBa0IsS0FEakUsRUFFRSxNQUZGO0FBSUQsR0FoTFM7QUFpTFY0RSxvQkFqTFUsOEJBaUxTQyxNQWpMVCxFQWlMaUI7QUFDekIsU0FBSzNCLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ00sSUFBVCxDQUFjd0UsWUFBZCxHQUE2QkQsTUFBN0I7QUFBcUMsYUFBTzdFLFFBQVA7QUFBa0IsS0FEdkUsRUFFRSxlQUZGLEVBR0UsMEJBSEY7QUFLRCxHQXZMUztBQXdMVitFLG9CQXhMVSw4QkF3TFNSLEtBeExULEVBd0xnQjtBQUN4QixTQUFLckIsY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDakQsT0FBVCxDQUFpQmlJLEVBQWpCLEdBQXNCVCxLQUF0QjtBQUE2QixhQUFPdkUsUUFBUDtBQUFrQixLQUQvRCxFQUVFLGdCQUZGO0FBSUQsR0E3TFM7QUE4TFZpRixrQkE5TFUsNEJBOExPM0IsR0E5TFAsRUE4TFlpQixLQTlMWixFQThMbUI7QUFDM0IsU0FBS3JCLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQzVFLFNBQVQsQ0FBbUJrSSxHQUFuQixFQUF3QixDQUF4QixJQUE2QmlCLEtBQTdCO0FBQW9DLGFBQU92RSxRQUFQO0FBQWtCLEtBRHRFLEVBRUUsS0FGRixFQUdFLGdCQUhGO0FBS0QsR0FwTVM7QUFxTVZrRixlQXJNVSx5QkFxTUl0QyxHQXJNSixFQXFNUztBQUNqQixTQUFLTSxjQUFMLENBQ0UsVUFBQWxELFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNqRCxPQUFULENBQWlCb0ksUUFBakIsR0FBNEJ2QyxHQUE1QjtBQUFpQyxhQUFPNUMsUUFBUDtBQUFrQixLQURuRSxFQUVFLFNBRkYsRUFHRSxxQkFIRjtBQUtELEdBM01TO0FBNE1Wb0YsZ0JBNU1VLDBCQTRNS3hDLEdBNU1MLEVBNE1VO0FBQ2xCLFNBQUtNLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ2pELE9BQVQsQ0FBaUJzSSxLQUFqQixHQUF5QnpDLEdBQXpCO0FBQThCLGFBQU81QyxRQUFQO0FBQWtCLEtBRGhFLEVBRUUsVUFGRixFQUdFLHFCQUhGO0FBS0QsR0FsTlM7QUFtTlZzRixxQkFuTlUsK0JBbU5VMUMsR0FuTlYsRUFtTmU7QUFDdkIsU0FBS00sY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDakQsT0FBVCxDQUFpQndJLFVBQWpCLEdBQThCM0MsR0FBOUI7QUFBbUMsYUFBTzVDLFFBQVA7QUFBa0IsS0FEckUsRUFFRSxlQUZGLEVBR0UscUJBSEY7QUFLRCxHQXpOUztBQTBOVndGLGVBMU5VLHlCQTBOSTVDLEdBMU5KLEVBME5TO0FBQ2pCLFNBQUtNLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ2pELE9BQVQsQ0FBaUI4RSxVQUFqQixHQUE4QmUsR0FBOUI7QUFBbUMsYUFBTzVDLFFBQVA7QUFBa0IsS0FEckUsRUFFRSxTQUZGO0FBSUQsR0EvTlM7QUFnT1Z5RixtQkFoT1UsNkJBZ09RN0MsR0FoT1IsRUFnT2E7QUFDckIsU0FBS00sY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDakQsT0FBVCxDQUFpQmdCLFVBQWpCLEdBQThCNkUsR0FBOUI7QUFBbUMsYUFBTzVDLFFBQVA7QUFBa0IsS0FEckUsRUFFRSxhQUZGLEVBR0UsaUJBSEY7QUFLRCxHQXRPUztBQXVPVjBGLGlCQXZPVSwyQkF1T005QyxHQXZPTixFQXVPVztBQUNuQixTQUFLTSxjQUFMLENBQ0UsVUFBQWxELFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNqRCxPQUFULENBQWlCdUIsTUFBakIsR0FBMEJzRSxHQUExQjtBQUErQixhQUFPNUMsUUFBUDtBQUFrQixLQURqRSxFQUVFLFFBRkYsRUFHRSxtQkFIRjtBQUtELEdBN09TO0FBOE9WMkYsZUE5T1UseUJBOE9JL0MsR0E5T0osRUE4T1M7QUFDakIsU0FBS00sY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDakQsT0FBVCxDQUFpQnNELFFBQWpCLEdBQTRCdUMsR0FBNUI7QUFBaUMsYUFBTzVDLFFBQVA7QUFBa0IsS0FEbkUsRUFFRSxTQUZGLEVBR0UsbUJBSEY7QUFLRCxHQXBQUztBQXFQVjRGLHNCQXJQVSxnQ0FxUFdDLElBclBYLEVBcVBpQmpELEdBclBqQixFQXFQc0I7QUFDOUIsU0FBS00sY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDakQsT0FBVCxDQUFpQjhJLElBQWpCLElBQXlCakQsR0FBekI7QUFBOEIsYUFBTzVDLFFBQVA7QUFBa0IsS0FEaEUsRUFFRSxhQUZGLEVBR0UscUJBSEY7QUFLRCxHQTNQUztBQTRQVjhGLHNCQTVQVSxnQ0E0UFdELElBNVBYLEVBNFBpQmpELEdBNVBqQixFQTRQc0I7QUFDOUIsU0FBS00sY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDakQsT0FBVCxDQUFpQjhJLElBQWpCLElBQXlCakQsR0FBekI7QUFBOEIsYUFBTzVDLFFBQVA7QUFBa0IsS0FEaEUsRUFFRSxhQUZGLEVBR0UscUJBSEY7QUFLRCxHQWxRUztBQW1RVitGLHVCQW5RVSxpQ0FtUVlGLElBblFaLEVBbVFrQmpELEdBblFsQixFQW1RdUI7QUFDL0IsU0FBS00sY0FBTCxDQUNFLFVBQUFsRCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDTSxJQUFULENBQWN1RixJQUFkLElBQXNCakQsR0FBdEI7QUFBMkIsYUFBTzVDLFFBQVA7QUFBa0IsS0FEN0QsRUFFRSxjQUZGLEVBR0UsbUJBSEY7QUFLRCxHQXpRUztBQTBRVmdHLG1CQTFRVSw2QkEwUVFILElBMVFSLEVBMFFjakQsR0ExUWQsRUEwUW1CO0FBQzNCLFNBQUtNLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ00sSUFBVCxDQUFjdUYsSUFBZCxJQUFzQmpELEdBQXRCO0FBQTJCLGFBQU81QyxRQUFQO0FBQWtCLEtBRDdELEVBRUUsTUFGRixFQUdFLG1CQUhGO0FBS0QsR0FoUlM7QUFpUlZpRyx1QkFqUlUsaUNBaVJZSixJQWpSWixFQWlSa0JqRCxHQWpSbEIsRUFpUnVCO0FBQy9CLFNBQUtNLGNBQUwsQ0FDRSxVQUFBbEQsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ00sSUFBVCxDQUFjdUYsSUFBZCxJQUFzQmpELEdBQXRCO0FBQTJCLGFBQU81QyxRQUFQO0FBQWtCLEtBRDdELEVBRUUsVUFGRixFQUdFLG1CQUhGO0FBS0QsR0F2UlM7QUF3UlZrRyxrQkF4UlUsNEJBd1JPMUwsR0F4UlAsRUF3UlkyTCxRQXhSWixFQXdSc0I7QUFDOUJ6Tyx5QkFBU2dELE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEIsVUFBQXNGLFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNuRyxFQUFULENBQVl1TSxJQUFaLENBQWlCNUwsR0FBakIsRUFBc0IyTCxRQUF0QixHQUFpQ0EsUUFBakM7QUFBMkMsYUFBT25HLFFBQVA7QUFBa0IsS0FBdkc7QUFDRCxHQTFSUztBQTJSVnFHLHFCQTNSVSwrQkEyUlVDLEtBM1JWLEVBMlJpQjtBQUN6QjVPLHlCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBc0YsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ25HLEVBQVQsQ0FBWXlNLEtBQVosR0FBb0JBLEtBQXBCO0FBQTJCLGFBQU90RyxRQUFQO0FBQWtCLEtBQXZGO0FBQ0QsR0E3UlM7QUErUlY7QUFDQXVHLGNBaFNVLHdCQWdTR0MsS0FoU0gsRUFnU1U5SCxJQWhTVixFQWdTZ0I7QUFBQTs7QUFDeEIsUUFBSSxDQUFDOEgsS0FBSyxDQUFDckwsTUFBWCxFQUFtQjtBQUVuQnVELFFBQUksR0FBRyxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxNQUF6QztBQUVBLFFBQUkrSCxXQUFXLEdBQUcsRUFBbEI7QUFFQSxXQUFPL08scUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxQyxPQUFPLEVBQUk7QUFDM0MsVUFBSTlDLENBQUMsR0FBR3VNLEtBQUssQ0FBQ3JMLE1BQWQ7QUFBQSxVQUFzQmlELElBQXRCOztBQUNBLGFBQU9uRSxDQUFDLEVBQVIsRUFBWTtBQUNWbUUsWUFBSSxHQUFHb0ksS0FBSyxDQUFDdk0sQ0FBRCxDQUFaO0FBQ0EsWUFBSThDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9CLElBQWhCLENBQUosRUFBMkJyQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvQixJQUFoQixFQUFzQnNJLElBQXRCLENBQTJCdkwsTUFBM0IsR0FBb0MsQ0FBcEMsQ0FBM0IsS0FDS3NMLFdBQVcsQ0FBQzNMLElBQVosQ0FBaUJzRCxJQUFqQjtBQUNOOztBQUNELGFBQU9yQixPQUFQO0FBQ0QsS0FSTSxFQVFKMkIsSUFSSSxFQVNOOUcsSUFUTSxDQVNELFlBQU07QUFBRSxVQUFJOEcsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFBRSxjQUFJLENBQUMxRyxJQUFMLENBQVUsaUJBQVY7QUFBK0I7QUFBQyxLQVQvRCxXQVVBO0FBQUEsYUFBTSxNQUFJLENBQUNBLElBQUwsQ0FBVSxPQUFWLEVBQW1CLHFCQUFuQixDQUFOO0FBQUEsS0FWQSxFQVdOSixJQVhNLENBV0QsWUFBTTtBQUFFLFVBQUk4RyxJQUFJLEtBQUssTUFBVCxJQUFtQitILFdBQVcsQ0FBQ3RMLE1BQW5DLEVBQTJDO0FBQUUsY0FBSSxDQUFDb0wsWUFBTCxDQUFrQkUsV0FBbEIsRUFBK0IsT0FBL0I7QUFBMEM7QUFBQyxLQVgvRixDQUFQO0FBWUQsR0FuVFM7QUFvVFZFLFdBcFRVLHFCQW9UQXhKLEtBcFRBLEVBb1RPO0FBQUE7O0FBQ2ZBLFNBQUssQ0FBQ3VKLElBQU4sR0FBYSxFQUFiO0FBQ0EsUUFBTXRJLElBQUksR0FBR2pCLEtBQUssQ0FBQ2lCLElBQW5COztBQUNBMUcseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxQyxPQUFPLEVBQUk7QUFDcENBLGFBQU8sQ0FBQ0MsT0FBUixDQUFnQm9CLElBQWhCLElBQXdCakIsS0FBeEI7QUFDQSxhQUFPSixPQUFQO0FBQ0QsS0FIRCxFQUlHbkYsSUFKSCxDQUlRLFVBQUFtRixPQUFPO0FBQUEsYUFBSSxNQUFJLENBQUMvRSxJQUFMLENBQVUsYUFBVixFQUF5QitFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9CLElBQWhCLENBQXpCLENBQUo7QUFBQSxLQUpmLFdBS1M7QUFBQSxhQUFNLE1BQUksQ0FBQ3BHLElBQUwsQ0FBVSxtQkFBVixFQUErQixrQkFBL0IsQ0FBTjtBQUFBLEtBTFQ7QUFNRCxHQTdUUztBQThUVjRPLGFBOVRVLHVCQThURXBJLE9BOVRGLEVBOFRXQyxPQTlUWCxFQThUb0JDLElBOVRwQixFQThUMEI7QUFBQTs7QUFDbENoSCx5QkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQXFDLE9BQU8sRUFBSTtBQUNwQyxVQUFNSSxLQUFLLEdBQUcsa0JBQU1KLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQndCLE9BQWhCLENBQU4sQ0FBZDtBQUNBckIsV0FBSyxDQUFDaUIsSUFBTixHQUFhSyxPQUFiO0FBQ0ExQixhQUFPLENBQUNDLE9BQVIsQ0FBZ0J5QixPQUFoQixJQUEyQnRCLEtBQTNCO0FBQ0EsYUFBT0osT0FBTyxDQUFDQyxPQUFSLENBQWdCd0IsT0FBaEIsQ0FBUDtBQUNBLGFBQU96QixPQUFQO0FBQ0QsS0FORCxFQU1HMkIsSUFOSCxFQU9HOUcsSUFQSCxDQU9RLFVBQUFtRixPQUFPO0FBQUEsYUFBSSxNQUFJLENBQUMvRSxJQUFMLENBQVUsa0NBQVYsRUFBOEMrRSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J5QixPQUFoQixDQUE5QyxFQUF3RUQsT0FBeEUsQ0FBSjtBQUFBLEtBUGYsV0FRUztBQUFBLGFBQU0sTUFBSSxDQUFDeEcsSUFBTCxDQUFVLHFCQUFWLEVBQWlDLG9CQUFqQyxDQUFOO0FBQUEsS0FSVDtBQVNELEdBeFVTO0FBeVVWNk8seUJBelVVLG1DQXlVYzFKLEtBelVkLEVBeVVxQnVCLElBelVyQixFQXlVMkI7QUFBQTs7QUFDbkNBLFFBQUksR0FBRyxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQ3ZCLEtBQUssQ0FBQzJKLE1BQU4sR0FBZSxNQUFmLEdBQXdCLE9BQWpFO0FBRUEsUUFBTTFJLElBQUksR0FBR2pCLEtBQUssQ0FBQ2lCLElBQW5CO0FBQ0EsUUFBTTJJLHFCQUFxQixHQUFHLENBQUMsQ0FBQzVKLEtBQUssQ0FBQ1IsR0FBdEM7QUFDQSxRQUFJcUssS0FBSyxHQUFHLElBQVo7O0FBRUF0UCx5QkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQXFDLE9BQU8sRUFBSTtBQUNwQyxVQUFJZ0sscUJBQUosRUFBMkI7QUFDekJoSyxlQUFPLENBQUNDLE9BQVIsQ0FBZ0JvQixJQUFoQixJQUF3QmpCLEtBQXhCO0FBQ0FKLGVBQU8sQ0FBQ0MsT0FBUixDQUFnQm9CLElBQWhCLEVBQXNCc0ksSUFBdEIsR0FBNkIzSixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvQixJQUFoQixFQUFzQnNJLElBQXRCLElBQThCLEVBQTNEO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBSSxDQUFDM0osT0FBTyxDQUFDQyxPQUFSLENBQWdCb0IsSUFBaEIsQ0FBTCxFQUE0QjtBQUMxQjRJLGVBQUssR0FBRyxLQUFSO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU83SixLQUFLLENBQUMySixNQUFiOztBQUNBLGVBQUssSUFBSXhKLENBQVQsSUFBY0gsS0FBZCxFQUFxQjtBQUNuQixnQkFBSUEsS0FBSyxDQUFDOEosY0FBTixDQUFxQjNKLENBQXJCLENBQUosRUFBNkI7QUFDM0JQLHFCQUFPLENBQUNDLE9BQVIsQ0FBZ0JvQixJQUFoQixFQUFzQmQsQ0FBdEIsSUFBMkJILEtBQUssQ0FBQ0csQ0FBRCxDQUFoQztBQUNEO0FBQ0Y7O0FBQ0RQLGlCQUFPLENBQUNDLE9BQVIsQ0FBZ0JvQixJQUFoQixFQUFzQnNJLElBQXRCLEdBQTZCM0osT0FBTyxDQUFDQyxPQUFSLENBQWdCb0IsSUFBaEIsRUFBc0JzSSxJQUF0QixJQUE4QixFQUEzRDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTzNKLE9BQVA7QUFDRCxLQW5CRCxFQW1CRzJCLElBbkJILFdBb0JTLFVBQUNwQixDQUFEO0FBQUEsYUFBTyxNQUFJLENBQUN0RixJQUFMLENBQVUscUJBQVYsRUFBaUMsb0JBQWpDLENBQVA7QUFBQSxLQXBCVCxFQXFCR0osSUFyQkgsQ0FxQlEsWUFBTTtBQUFFLFVBQUksQ0FBQ29QLEtBQUwsRUFBWTtBQUFFLGNBQUksQ0FBQ0gsdUJBQUwsQ0FBNkIxSixLQUE3QixFQUFvQ0EsS0FBSyxDQUFDMkosTUFBTixHQUFlLE9BQWYsR0FBeUIsTUFBN0Q7QUFBdUU7QUFBQyxLQXJCdEcsRUFzQkdsUCxJQXRCSCxDQXNCUTtBQUFBLGFBQU0sTUFBSSxDQUFDSSxJQUFMLENBQVUscUNBQVYsRUFBaURtRixLQUFqRCxDQUFOO0FBQUEsS0F0QlI7QUF1QkQsR0F2V1M7QUF3V1YrSixlQXhXVSx5QkF3V0lWLEtBeFdKLEVBd1dXOUgsSUF4V1gsRUF3V2lCO0FBQUE7O0FBQ3pCLFFBQUksQ0FBQzhILEtBQUssQ0FBQ3JMLE1BQVgsRUFBbUI7QUFFbkJ1RCxRQUFJLEdBQUcsT0FBT0EsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsSUFBM0IsR0FBa0MsTUFBekM7QUFFQSxRQUFJK0gsV0FBVyxHQUFHLEVBQWxCO0FBRUEsV0FBTy9PLHFCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUMsT0FBTyxFQUFJO0FBQzNDLFVBQUlxQixJQUFKLEVBQVV6QixHQUFWLEVBQWVZLGFBQWY7O0FBRUEsYUFBT2lKLEtBQUssQ0FBQ3JMLE1BQWIsRUFBcUI7QUFDbkJpRCxZQUFJLEdBQUdvSSxLQUFLLENBQUNXLEdBQU4sRUFBUDs7QUFDQSxZQUFJcEssT0FBTyxDQUFDQyxPQUFSLElBQW1CcUMsTUFBTSxDQUFDQyxJQUFQLENBQVl2QyxPQUFPLENBQUNDLE9BQXBCLEVBQTZCL0IsT0FBN0IsQ0FBcUNtRCxJQUFyQyxNQUErQyxDQUFDLENBQXZFLEVBQTBFO0FBQ3hFekIsYUFBRyxHQUFHSSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvQixJQUFoQixFQUFzQnpCLEdBQTVCO0FBQ0FZLHVCQUFhLEdBQUdSLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9CLElBQWhCLEVBQXNCYixhQUF0QztBQUVBLGlCQUFPUixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvQixJQUFoQixDQUFQOztBQUNBLGdCQUFJLENBQUNwRyxJQUFMLENBQVUsZUFBVixFQUEyQm9HLElBQTNCLEVBQWlDekIsR0FBakMsRUFBc0NZLGFBQXRDO0FBQ0QsU0FORCxNQU1PO0FBQ0xrSixxQkFBVyxDQUFDM0wsSUFBWixDQUFpQnNELElBQWpCO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPckIsT0FBUDtBQUNELEtBaEJNLEVBZ0JKMkIsSUFoQkksV0FpQkU7QUFBQSxhQUFNLE1BQUksQ0FBQzFHLElBQUwsQ0FBVSx1QkFBVixFQUFtQyxpQkFBbkMsQ0FBTjtBQUFBLEtBakJGLEVBa0JKSixJQWxCSSxDQWtCQyxZQUFNO0FBQUUsVUFBSThHLElBQUksS0FBSyxNQUFULElBQW1CK0gsV0FBVyxDQUFDdEwsTUFBbkMsRUFBMkM7QUFBRSxjQUFJLENBQUMrTCxhQUFMLENBQW1CVCxXQUFuQixFQUFnQyxPQUFoQztBQUEyQztBQUFDLEtBbEJsRyxFQW1CSjdPLElBbkJJLENBbUJDO0FBQUEsYUFBTSxNQUFJLENBQUNJLElBQUwsQ0FBVSxpQkFBVixDQUFOO0FBQUEsS0FuQkQsQ0FBUDtBQW9CRCxHQW5ZUztBQW9ZVm9QLDBCQXBZVSxvQ0FvWWVDLFNBcFlmLEVBb1kwQkMsYUFwWTFCLEVBb1l5Q0MsU0FwWXpDLEVBb1lvRDdJLElBcFlwRCxFQW9ZMEQ7QUFDbEVoSCx5QkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUFvSSxRQUFRLEVBQUk7QUFDeEMsVUFBSUEsUUFBUSxDQUFDakQsT0FBVCxDQUFpQndJLFVBQWpCLEtBQWdDLElBQXBDLEVBQTBDO0FBQ3hDN04sNkJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxQyxPQUFPLEVBQUk7QUFDcEMsY0FBTXlLLFlBQVksR0FBR3pLLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnFLLFNBQWhCLEVBQTJCWCxJQUEzQixJQUFtQyxFQUF4RDtBQUNBLGNBQU1lLGdCQUFnQixHQUFHLEVBQXpCO0FBQ0EsY0FBTUMsZUFBZSxHQUFHLEVBQXhCO0FBRUEzSyxpQkFBTyxDQUFDQyxPQUFSLENBQWdCcUssU0FBaEIsRUFBMkIvRSxLQUEzQixHQUFtQ2dGLGFBQW5DO0FBRUFBLHVCQUFhLENBQUNLLE9BQWQsQ0FBc0IsVUFBQUMsSUFBSTtBQUFBLG1CQUFJSCxnQkFBZ0IsQ0FBQzNNLElBQWpCLENBQXNCOE0sSUFBSSxDQUFDMU4sRUFBM0IsQ0FBSjtBQUFBLFdBQTFCO0FBRUEsY0FBSXFGLENBQUMsR0FBR2lJLFlBQVksQ0FBQ3JNLE1BQXJCO0FBQUEsY0FBNkJqQixFQUE3Qjs7QUFFQSxpQkFBT3FGLENBQUMsRUFBUixFQUFZO0FBQ1ZyRixjQUFFLEdBQUdzTixZQUFZLENBQUNqSSxDQUFELENBQVosQ0FBZ0JyRixFQUFyQjs7QUFDQSxnQkFBSXVOLGdCQUFnQixDQUFDN00sUUFBakIsQ0FBMEJWLEVBQTFCLENBQUosRUFBbUM7QUFDakNzTiwwQkFBWSxDQUFDeE0sTUFBYixDQUFvQnVFLENBQXBCLEVBQXVCLENBQXZCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xtSSw2QkFBZSxDQUFDNU0sSUFBaEIsQ0FBcUJaLEVBQXJCO0FBQ0Q7QUFDRjs7QUFFRHFOLG1CQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCLGdCQUFJLENBQUNGLGVBQWUsQ0FBQzlNLFFBQWhCLENBQXlCZ04sSUFBSSxDQUFDMU4sRUFBOUIsQ0FBTCxFQUF3Q3NOLFlBQVksQ0FBQzFNLElBQWIsQ0FBa0I4TSxJQUFsQjtBQUN6QyxXQUZEO0FBSUE3SyxpQkFBTyxDQUFDQyxPQUFSLENBQWdCcUssU0FBaEIsRUFBMkJYLElBQTNCLEdBQWtDYyxZQUFsQztBQUVBLGlCQUFPekssT0FBUDtBQUNELFNBM0JELEVBMkJHMkIsSUEzQkg7QUE0QkQ7QUFDRixLQS9CRDtBQWdDRCxHQXJhUztBQXNhVm1KLFdBdGFVLHFCQXNhQXpKLElBdGFBLEVBc2FNd0UsR0F0YU4sRUFzYVc7QUFBQTs7QUFDbkIsUUFBTWtGLE1BQU0sR0FBR2xGLEdBQUcsR0FBRyxPQUFILEdBQWEsTUFBL0I7QUFDQSxRQUFNbUYsTUFBTSxHQUFHbkYsR0FBRyxHQUFHLE1BQUgsR0FBWSxPQUE5QjtBQUVBLFFBQUl6RixLQUFKOztBQUVBekYseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxQyxPQUFPLEVBQUk7QUFDcENJLFdBQUssR0FBRyxrQkFBTUosT0FBTyxDQUFDQyxPQUFSLENBQWdCb0IsSUFBaEIsQ0FBTixDQUFSO0FBQ0FqQixXQUFLLENBQUMySixNQUFOLEdBQWVsRSxHQUFmO0FBQ0EsYUFBTzdGLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9CLElBQWhCLENBQVA7QUFDQSxhQUFPckIsT0FBUDtBQUNELEtBTEQsRUFLRytLLE1BTEgsRUFPR2xRLElBUEgsQ0FPUSxZQUFNO0FBQ1ZGLDJCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUMsT0FBTyxFQUFJO0FBQ3BDQSxlQUFPLENBQUNDLE9BQVIsQ0FBZ0JvQixJQUFoQixJQUF3QmpCLEtBQXhCO0FBQ0EsZUFBT0osT0FBUDtBQUNELE9BSEQsRUFHR2dMLE1BSEgsRUFLQ25RLElBTEQsQ0FLTTtBQUFBLGVBQU0sTUFBSSxDQUFDSSxJQUFMLENBQVUsa0NBQVYsRUFBOENtRixLQUE5QyxDQUFOO0FBQUEsT0FMTixXQU1PO0FBQUEsZUFBTSxNQUFJLENBQUNuRixJQUFMLENBQVUsbUJBQVYsRUFBK0JvRyxJQUEvQixDQUFOO0FBQUEsT0FOUDtBQU9ELEtBZkg7QUFnQkQsR0E1YlM7QUE2YlY0SixZQTdiVSxzQkE2YkN4QixLQTdiRCxFQTZiUXlCLEdBN2JSLEVBNmJhO0FBQUE7O0FBQ3JCdlEseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxQyxPQUFPLEVBQUk7QUFDcEMsVUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUNDLE9BQXhCO0FBQ0F3SixXQUFLLENBQUMzRCxJQUFOLENBQVc4RSxPQUFYLENBQW1CLFVBQUF2SixJQUFJO0FBQUEsZUFBSSxNQUFJLENBQUM4SixhQUFMLENBQW1CbEwsT0FBTyxDQUFDb0IsSUFBRCxDQUExQixFQUFrQzZKLEdBQWxDLENBQUo7QUFBQSxPQUF2QjtBQUNBLGFBQU9sTCxPQUFQO0FBQ0QsS0FKRCxFQUlHLE1BSkgsRUFLR25GLElBTEgsQ0FLUSxZQUFNO0FBQ1YsYUFBT0YscUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxQyxPQUFPLEVBQUk7QUFDM0MsWUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUNDLE9BQXhCO0FBQ0F3SixhQUFLLENBQUMyQixLQUFOLENBQVlSLE9BQVosQ0FBb0IsVUFBQXZKLElBQUk7QUFBQSxpQkFBSSxNQUFJLENBQUM4SixhQUFMLENBQW1CbEwsT0FBTyxDQUFDb0IsSUFBRCxDQUExQixFQUFrQzZKLEdBQWxDLENBQUo7QUFBQSxTQUF4QjtBQUNBLGVBQU9sTCxPQUFQO0FBQ0QsT0FKTSxFQUlKLE9BSkksQ0FBUDtBQUtELEtBWEg7QUFZRCxHQTFjUztBQTJjVnFMLFdBM2NVLHFCQTJjQUgsR0EzY0EsRUEyY0s5SyxLQTNjTCxFQTJjWTtBQUFBOztBQUNwQixRQUFNdUIsSUFBSSxHQUFHdkIsS0FBSyxDQUFDMkosTUFBTixHQUFlLE1BQWYsR0FBd0IsT0FBckM7QUFDQSxRQUFNMUksSUFBSSxHQUFHakIsS0FBSyxDQUFDaUIsSUFBbkI7O0FBRUExRyx5QkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQXFDLE9BQU8sRUFBSTtBQUNwQyxVQUFNc0wsV0FBVyxHQUFHdEwsT0FBTyxDQUFDQyxPQUFSLENBQWdCb0IsSUFBaEIsQ0FBcEI7QUFDQSxVQUFNa0ssRUFBRSxHQUFHLElBQUlDLE1BQUosQ0FBVyxNQUFJTixHQUFKLEdBQVEsS0FBUixHQUFjQSxHQUFkLEdBQWtCLFNBQWxCLEdBQTRCQSxHQUE1QixHQUFnQyxTQUFoQyxHQUEwQ0EsR0FBMUMsR0FBOEMsR0FBekQsQ0FBWDs7QUFDQSxVQUFJSSxXQUFXLENBQUNKLEdBQWhCLEVBQXFCO0FBQ25CSSxtQkFBVyxDQUFDSixHQUFaLEdBQWtCSSxXQUFXLENBQUNKLEdBQVosQ0FDZmxFLE9BRGUsQ0FDUHVFLEVBRE8sRUFDSCxHQURHLEVBRWZ2RSxPQUZlLENBRVAsU0FGTyxFQUVJLEVBRkosRUFHZkEsT0FIZSxDQUdQLFFBSE8sRUFHRyxHQUhILENBQWxCO0FBSUQ7O0FBQ0QsYUFBT2hILE9BQVA7QUFDRCxLQVZELEVBVUcyQixJQVZILEVBV0c5RyxJQVhILENBV1EsVUFBQW1GLE9BQU87QUFBQSxhQUFJLE9BQUksQ0FBQy9FLElBQUwsQ0FBVSxrQ0FBVixFQUE4QytFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9CLElBQWhCLENBQTlDLENBQUo7QUFBQSxLQVhmO0FBWUQsR0EzZFM7QUE0ZFZvSyxRQTVkVSxrQkE0ZEhQLEdBNWRHLEVBNGRFOUssS0E1ZEYsRUE0ZFM7QUFBQTs7QUFDakIsUUFBTXVCLElBQUksR0FBR3ZCLEtBQUssQ0FBQzJKLE1BQU4sR0FBZSxNQUFmLEdBQXdCLE9BQXJDO0FBQ0EsUUFBTTFJLElBQUksR0FBR2pCLEtBQUssQ0FBQ2lCLElBQW5COztBQUNBMUcseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxQyxPQUFPLEVBQUk7QUFDcEMsYUFBSSxDQUFDbUwsYUFBTCxDQUFtQm5MLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9CLElBQWhCLENBQW5CLEVBQTBDNkosR0FBMUM7O0FBQ0EsYUFBT2xMLE9BQVA7QUFDRCxLQUhELEVBR0cyQixJQUhIO0FBSUQsR0FuZVM7QUFvZVZ3SixlQXBlVSx5QkFvZUkvSyxLQXBlSixFQW9lVzhLLEdBcGVYLEVBb2VnQjtBQUN4QixRQUFJLENBQUNBLEdBQUwsRUFBVTlLLEtBQUssQ0FBQzhLLEdBQU4sR0FBWSxFQUFaLENBQVYsS0FDSyxJQUFJLENBQUM5SyxLQUFLLENBQUM4SyxHQUFYLEVBQWdCOUssS0FBSyxDQUFDOEssR0FBTixHQUFZQSxHQUFaLENBQWhCLEtBQ0E7QUFDSCxVQUFNSyxFQUFFLEdBQUcsSUFBSUMsTUFBSixDQUFXLE1BQUlOLEdBQUosR0FBUSxLQUFSLEdBQWNBLEdBQWQsR0FBa0IsU0FBbEIsR0FBNEJBLEdBQTVCLEdBQWdDLFNBQWhDLEdBQTBDQSxHQUExQyxHQUE4QyxHQUF6RCxFQUE4RCxHQUE5RCxDQUFYOztBQUNBLFVBQUk5SyxLQUFLLENBQUM4SyxHQUFOLENBQVVRLE1BQVYsQ0FBaUJILEVBQWpCLE1BQXlCLENBQUMsQ0FBOUIsRUFBaUM7QUFDL0JuTCxhQUFLLENBQUM4SyxHQUFOLElBQWEsTUFBTUEsR0FBbkI7QUFDRDtBQUNGO0FBQ0QsU0FBS2pRLElBQUwsQ0FBVSxrQ0FBVixFQUE4Q21GLEtBQTlDO0FBQ0EsV0FBT0EsS0FBUDtBQUNELEdBL2VTO0FBaWZWO0FBQ0F1TCxpQkFsZlUsMkJBa2ZNL0wsR0FsZk4sRUFrZldnTSxLQWxmWCxFQWtma0I7QUFDMUJqUix5QkFBU2dELE1BQVQsQ0FBZ0IsV0FBaEIsRUFBNkIsVUFBQXVJLFNBQVMsRUFBSTtBQUN4Q0EsZUFBUyxDQUFDdEcsR0FBRCxDQUFULEdBQWlCZ00sS0FBakI7QUFDQSxhQUFPMUYsU0FBUDtBQUNELEtBSEQ7QUFJRCxHQXZmUztBQXlmVjJGLCtCQXpmVSwyQ0F5ZnNCO0FBQzlCeFIsV0FBTyxDQUFDeVIsT0FBUixDQUFnQkMsU0FBaEIsQ0FBMEJ0UixXQUExQixDQUFzQyxLQUFLdVIsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS0MsZ0JBQXRCLENBQXRDO0FBQ0QsR0EzZlM7QUE0ZlZBLGtCQTVmVSw0QkE0Zk9DLFdBNWZQLEVBNGZvQjtBQUM1QixRQUFJQSxXQUFXLENBQUNqSixRQUFoQixFQUEwQixLQUFLaEksSUFBTCxDQUFVLGtCQUFWO0FBQzFCLFFBQUlpUixXQUFXLENBQUNsTSxPQUFoQixFQUF5QixLQUFLL0UsSUFBTCxDQUFVLGlCQUFWO0FBQ3pCLFFBQUlpUixXQUFXLENBQUNoRyxTQUFoQixFQUEyQixLQUFLakwsSUFBTCxDQUFVLG1CQUFWO0FBQzVCO0FBaGdCUyxDQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNEZSxZQUFXO0FBQ3hCLFNBQU8sSUFBSXBCLGNBQUosQ0FBWTtBQUNqQkMsVUFBTSxFQUFFO0FBQ05DLFNBQUcsRUFBRTtBQUNIO0FBQ0EsK0JBQXVCLGVBRnBCO0FBR0gsZ0NBQXdCLGVBSHJCO0FBSUgsK0JBQXVCLGVBSnBCO0FBS0gsdUJBQWUsWUFMWjtBQU1ILHdCQUFnQjtBQU5iO0FBREMsS0FEUztBQVdqQm9TLFFBQUksRUFBRTtBQUNKQyxVQUFJLEVBQUUsOENBREY7QUFFSm5KLGNBQVEsRUFBRSxrREFGTjtBQUdKakQsYUFBTyxFQUFFLGlEQUhMO0FBSUpxTSxVQUFJLEVBQUUsNkNBSkY7QUFLSkMsVUFBSSxFQUFFLGdEQUxGO0FBTUpDLGFBQU8sRUFBRSxpREFOTDtBQU9KQyxVQUFJLEVBQUUsOENBUEY7QUFRSixnQkFBUSxnREFSSjtBQVNKMUcsVUFBSSxFQUFFO0FBVEYsS0FYVztBQXVCakIzTCxZQXZCaUIsc0JBdUJOO0FBQUE7O0FBQ1RFLGFBQU8sQ0FBQ2dQLElBQVIsQ0FBYW9ELFdBQWIsQ0FBeUJoUyxXQUF6QixDQUFxQyxVQUFBZ0QsR0FBRztBQUFBLGVBQUksS0FBSSxDQUFDeEMsSUFBTCxDQUFVLGVBQVYsRUFBMkJ3QyxHQUFHLENBQUNpSCxLQUEvQixFQUF1Q2pILEdBQUcsQ0FBQ21DLEdBQUosSUFBVyxFQUFsRCxDQUFKO0FBQUEsT0FBeEM7QUFDQXZGLGFBQU8sQ0FBQ2dQLElBQVIsQ0FBYXFELFNBQWIsQ0FBdUJqUyxXQUF2QixDQUFtQyxVQUFDaUssS0FBRCxFQUFRaUksT0FBUixFQUFvQjtBQUNyRCxZQUFJQSxPQUFPLENBQUMvTSxHQUFaLEVBQWlCO0FBQ2YsZUFBSSxDQUFDM0UsSUFBTCxDQUFVLGFBQVYsRUFBeUJ5SixLQUF6QixFQUFnQ2lJLE9BQU8sQ0FBQy9NLEdBQXhDO0FBQ0Q7QUFDRixPQUpEO0FBS0QsS0E5QmdCO0FBZ0NqQm5CLFFBaENpQixnQkFnQ1owTixJQWhDWSxFQWdDTjFDLEtBaENNLEVBZ0NDO0FBQ2hCMEMsVUFBSSxHQUFHLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkIsQ0FBQ0EsSUFBRCxDQUEzQixHQUFvQ0EsSUFBM0M7QUFDQTFDLFdBQUssR0FBRyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCLENBQUNBLEtBQUQsQ0FBNUIsR0FBc0NBLEtBQTlDO0FBQ0EsVUFBSWpILENBQUMsR0FBRzJKLElBQUksQ0FBQy9OLE1BQWI7QUFBQSxVQUNJd08sZUFBZSxHQUFHLEtBRHRCO0FBQUEsVUFFSWhOLEdBRko7O0FBR0EsYUFBTzRDLENBQUMsRUFBUixFQUFZO0FBQ1YsU0FBQyxVQUFTcUssSUFBVCxFQUFlckssQ0FBZixFQUFrQjtBQUNqQjVDLGFBQUcsR0FBR3VNLElBQUksQ0FBQzNKLENBQUQsQ0FBVjtBQUNBbkksaUJBQU8sQ0FBQ2dQLElBQVIsQ0FBYXpMLE1BQWIsQ0FBb0I7QUFBRWdDLGVBQUcsRUFBRXVNLElBQUksQ0FBQzNKLENBQUQ7QUFBWCxXQUFwQixXQUNTLFlBQU07QUFDWCxnQkFBSSxDQUFDb0ssZUFBTCxFQUFzQkMsSUFBSSxDQUFDNVIsSUFBTCxDQUFVLGlCQUFWO0FBQ3RCMlIsMkJBQWUsR0FBRyxJQUFsQjtBQUNELFdBSkgsRUFLRy9SLElBTEgsQ0FLUSxZQUFNO0FBQ1YsZ0JBQUk0TyxLQUFKLEVBQVdvRCxJQUFJLENBQUM1UixJQUFMLENBQVUsY0FBVixFQUEwQjtBQUFFMkUsaUJBQUcsRUFBRUEsR0FBUDtBQUFZeUIsa0JBQUksRUFBRW9JLEtBQUssQ0FBQ2pILENBQUQ7QUFBdkIsYUFBMUI7QUFDWixXQVBIO0FBUUQsU0FWRCxFQVVHLElBVkgsRUFVU0EsQ0FWVDtBQVdEO0FBQ0YsS0FuRGdCO0FBb0RqQnNLLGlCQXBEaUIseUJBb0RIM1AsRUFwREcsRUFvREM7QUFDaEIsV0FBS3NCLElBQUwsQ0FBVSxLQUFLME4sSUFBTCxDQUFVaFAsRUFBVixDQUFWO0FBQ0QsS0F0RGdCO0FBdURqQjRQLGdCQXZEaUIsd0JBdURKOVMsT0F2REksRUF1REtDLFVBdkRMLEVBdURpQjtBQUNoQyxVQUFJQSxVQUFVLElBQUlBLFVBQVUsS0FBSyxTQUE3QixJQUEwQ0EsVUFBVSxLQUFLLFFBQTdELEVBQXVFLEtBQUs0UyxhQUFMLENBQW1CLE1BQW5CO0FBQ3hFLEtBekRnQjtBQTBEakJFLGNBMURpQixzQkEwRE5DLElBMURNLEVBMERBO0FBQUE7O0FBQ2Z0UywyQkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUFvSSxRQUFRLEVBQUk7QUFDeEMsWUFBSWlLLE1BQU0sR0FBR2pLLFFBQVEsQ0FBQ00sSUFBVCxDQUFjd0UsWUFBM0I7QUFBQSxZQUF5Q25JLEdBQXpDO0FBQ0EsWUFBSXNOLE1BQUosRUFBWXROLEdBQUcsR0FBRyxhQUFhc04sTUFBTSxDQUFDLENBQUQsQ0FBbkIsR0FBeUJELElBQXpCLEdBQWdDQyxNQUFNLENBQUMsQ0FBRCxDQUE1QyxDQUFaLEtBQ0t0TixHQUFHLEdBQUcsYUFBYXZGLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixLQUF4QixDQUFiLEdBQThDLHNCQUE5QyxHQUF1RTJQLElBQTdFOztBQUNMLGNBQUksQ0FBQ3hPLElBQUwsQ0FBVW1CLEdBQVY7QUFDRCxPQUxEO0FBTUQ7QUFqRWdCLEdBQVosQ0FBUDtBQW1FRCxDOztBQXZFRDs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0EsSUFBSS9GLGNBQUosQ0FBWTtBQUNWQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsb0JBQWMscUJBRFg7QUFFSCxxQkFBZSxxQkFGWjtBQUdILHVCQUFpQixxQkFIZDtBQUlILHdCQUFrQjtBQUpmO0FBREMsR0FERTtBQVVWb00sZ0JBVlUsMEJBVUtsRCxRQVZMLEVBVWU7QUFDdkIsUUFBSTtBQUNGLFVBQU1rSyxlQUFlLEdBQUdDLDRCQUFpQm5LLFFBQXpDOztBQUVBLFVBQUksQ0FBQ0EsUUFBUSxDQUFDNUUsU0FBZCxFQUF5QjtBQUN2QjRFLGdCQUFRLEdBQUdrSyxlQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTTlPLFNBQVMsR0FBRzRFLFFBQVEsQ0FBQzVFLFNBQTNCO0FBQ0EsWUFBTW9JLE9BQU8sR0FBR3hELFFBQVEsQ0FBQ3dELE9BQXpCO0FBQ0EsWUFBTXpHLE9BQU8sR0FBR2lELFFBQVEsQ0FBQ2pELE9BQXpCO0FBQ0EsWUFBTXVELElBQUksR0FBR04sUUFBUSxDQUFDTSxJQUF0QjtBQUNBLFlBQU04SixTQUFTLEdBQUcsNENBQTRDdEcsS0FBNUMsQ0FBa0QsR0FBbEQsQ0FBbEI7O0FBRUEsWUFBSSxDQUFDMUksU0FBUyxDQUFDeEIsQ0FBZixFQUFrQjtBQUNoQndCLG1CQUFTLENBQUN4QixDQUFWLEdBQWNzUSxlQUFlLENBQUM5TyxTQUFoQixDQUEwQnhCLENBQXhDO0FBQ0EwRyxjQUFJLENBQUMrSixRQUFMLEdBQWdCSCxlQUFlLENBQUM1SixJQUFoQixDQUFxQitKLFFBQXJDO0FBQ0EvSixjQUFJLENBQUNnSyxXQUFMLEdBQW1CSixlQUFlLENBQUM1SixJQUFoQixDQUFxQmdLLFdBQXhDO0FBQ0Q7O0FBQ0QsWUFBSSxDQUFDbFAsU0FBUyxDQUFDbVAsT0FBZixFQUF3QjtBQUN0Qm5QLG1CQUFTLENBQUNtUCxPQUFWLEdBQW9CTCxlQUFlLENBQUM5TyxTQUFoQixDQUEwQm1QLE9BQTlDO0FBQ0FuUCxtQkFBUyxDQUFDb1AsU0FBVixHQUFzQk4sZUFBZSxDQUFDOU8sU0FBaEIsQ0FBMEJvUCxTQUFoRDtBQUNEOztBQUNELFlBQUksQ0FBQ3BQLFNBQVMsQ0FBQzFCLENBQVYsQ0FBWSxDQUFaLENBQUwsRUFBcUI7QUFDbkIwQixtQkFBUyxDQUFDMUIsQ0FBVixDQUFZLENBQVosSUFBaUJ3USxlQUFlLENBQUM5TyxTQUFoQixDQUEwQjFCLENBQTFCLENBQTRCLENBQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsWUFBSSxDQUFDMEIsU0FBUyxDQUFDdkIsRUFBZixFQUFtQjtBQUNqQnVCLG1CQUFTLENBQUN2QixFQUFWLEdBQWVxUSxlQUFlLENBQUM5TyxTQUFoQixDQUEwQnZCLEVBQXpDO0FBQ0Q7O0FBQ0QsWUFBSSxDQUFDdUIsU0FBUyxDQUFDcVAsRUFBZixFQUFtQjtBQUNqQnJQLG1CQUFTLENBQUNxUCxFQUFWLEdBQWVQLGVBQWUsQ0FBQzlPLFNBQWhCLENBQTBCcVAsRUFBekM7QUFDRDs7QUFFRCxZQUFJLENBQUNqSCxPQUFPLENBQUNqSyxDQUFSLENBQVVnSyxLQUFmLEVBQXNCO0FBQ3BCLGNBQUlBLEtBQUo7O0FBQ0EsZUFBSyxJQUFJaEssQ0FBVCxJQUFjaUssT0FBZCxFQUF1QjtBQUNyQkQsaUJBQUssR0FBR0MsT0FBTyxDQUFDakssQ0FBRCxDQUFmO0FBQ0FpSyxtQkFBTyxDQUFDakssQ0FBRCxDQUFQLEdBQWE7QUFBRWdLLG1CQUFLLEVBQUxBO0FBQUYsYUFBYjtBQUNEO0FBQ0Y7O0FBRUQsWUFBSSxDQUFDeEcsT0FBTyxDQUFDMEgsTUFBYixFQUFxQjtBQUNuQjFILGlCQUFPLENBQUMwSCxNQUFSLEdBQWlCeUYsZUFBZSxDQUFDbk4sT0FBaEIsQ0FBd0IwSCxNQUF6QztBQUNEOztBQUNELFlBQUksQ0FBQzFILE9BQU8sQ0FBQzRILElBQWIsRUFBbUI7QUFDakI1SCxpQkFBTyxDQUFDNEgsSUFBUixHQUFldUYsZUFBZSxDQUFDbk4sT0FBaEIsQ0FBd0I0SCxJQUF2QztBQUNEOztBQUNELFlBQUksT0FBTzVILE9BQU8sQ0FBQ2dCLFVBQWYsS0FBOEIsU0FBbEMsRUFBNkM7QUFDM0NoQixpQkFBTyxDQUFDZ0IsVUFBUixHQUFxQm1NLGVBQWUsQ0FBQ25OLE9BQWhCLENBQXdCZ0IsVUFBN0M7QUFDRDs7QUFDRCxZQUFJLE9BQU9oQixPQUFPLENBQUNzSSxLQUFmLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3RDdEksaUJBQU8sQ0FBQ3NJLEtBQVIsR0FBZ0I2RSxlQUFlLENBQUNuTixPQUFoQixDQUF3QnNJLEtBQXhDO0FBQ0Q7O0FBQ0QsWUFBSSxPQUFPdEksT0FBTyxDQUFDOEUsVUFBZixLQUE4QixTQUFsQyxFQUE2QztBQUMzQzlFLGlCQUFPLENBQUM4RSxVQUFSLEdBQXFCcUksZUFBZSxDQUFDbk4sT0FBaEIsQ0FBd0I4RSxVQUE3QztBQUNEOztBQUNELFlBQUksT0FBTzlFLE9BQU8sQ0FBQ3dJLFVBQWYsS0FBOEIsU0FBbEMsRUFBNkM7QUFDM0N4SSxpQkFBTyxDQUFDd0ksVUFBUixHQUFxQjJFLGVBQWUsQ0FBQ25OLE9BQWhCLENBQXdCd0ksVUFBN0M7QUFDRDs7QUFFRDZFLGlCQUFTLENBQUN6QyxPQUFWLENBQWtCLFVBQUErQyxRQUFRLEVBQUk7QUFDNUIsY0FBSSxDQUFDcEssSUFBSSxDQUFDb0ssUUFBRCxDQUFULEVBQXFCO0FBQ25CcEssZ0JBQUksQ0FBQ29LLFFBQUQsQ0FBSixHQUFpQlIsZUFBZSxDQUFDNUosSUFBaEIsQ0FBcUJvSyxRQUFyQixDQUFqQjtBQUNEO0FBQ0YsU0FKRDs7QUFLQSxZQUFJLENBQUNwSyxJQUFJLENBQUNxSyxPQUFWLEVBQW1CO0FBQ2pCckssY0FBSSxDQUFDcUssT0FBTCxHQUFlVCxlQUFlLENBQUM1SixJQUFoQixDQUFxQnFLLE9BQXBDO0FBQ0Q7O0FBQ0QsWUFBSSxPQUFPckssSUFBSSxDQUFDc0ssVUFBWixLQUEyQixTQUEvQixFQUEwQztBQUN4Q3RLLGNBQUksQ0FBQ3NLLFVBQUwsR0FBa0JWLGVBQWUsQ0FBQzVKLElBQWhCLENBQXFCc0ssVUFBdkM7QUFDRDs7QUFDRCxZQUFJLENBQUN0SyxJQUFJLENBQUM2RCxVQUFWLEVBQXNCO0FBQ3BCN0QsY0FBSSxDQUFDNkQsVUFBTCxHQUFrQitGLGVBQWUsQ0FBQzVKLElBQWhCLENBQXFCNkQsVUFBdkM7QUFDRDs7QUFDRCxZQUFJLE9BQU83RCxJQUFJLENBQUN1SyxXQUFaLEtBQTRCLFNBQWhDLEVBQTJDO0FBQ3pDdkssY0FBSSxDQUFDdUssV0FBTCxHQUFtQlgsZUFBZSxDQUFDNUosSUFBaEIsQ0FBcUJ1SyxXQUF4QztBQUNEOztBQUNELFlBQUksT0FBT3ZLLElBQUksQ0FBQ3dLLFFBQVosS0FBeUIsU0FBN0IsRUFBd0M7QUFDdEN4SyxjQUFJLENBQUN3SyxRQUFMLEdBQWdCWixlQUFlLENBQUM1SixJQUFoQixDQUFxQndLLFFBQXJDO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDOUssUUFBUSxDQUFDbkcsRUFBZCxFQUFrQjtBQUNoQm1HLGtCQUFRLENBQUNuRyxFQUFULEdBQWNxUSxlQUFlLENBQUNyUSxFQUE5QjtBQUNELFNBRkQsTUFFTyxJQUFJLE9BQU9tRyxRQUFRLENBQUNuRyxFQUFULENBQVlrUixNQUFuQixLQUE4QixTQUFsQyxFQUE2QztBQUNsRC9LLGtCQUFRLENBQUNuRyxFQUFULENBQVl1TSxJQUFaLENBQWlCMkUsTUFBakIsR0FBMEJiLGVBQWUsQ0FBQ3JRLEVBQWhCLENBQW1CdU0sSUFBbkIsQ0FBd0IyRSxNQUFsRDtBQUNBL0ssa0JBQVEsQ0FBQ25HLEVBQVQsQ0FBWXlNLEtBQVosR0FBb0I0RCxlQUFlLENBQUNyUSxFQUFoQixDQUFtQnlNLEtBQXZDO0FBQ0Q7QUFDRjtBQUNGLEtBdEZELENBc0ZFLE9BQU1oSixDQUFOLEVBQVM7QUFDVCxXQUFLdEYsSUFBTCxDQUFVLE9BQVYsRUFBbUIsaUNBQW5CO0FBQ0EsYUFBT2dJLFFBQVA7QUFDRDs7QUFDRCxXQUFPQSxRQUFQO0FBQ0QsR0F0R1M7QUF1R1ZnTCxlQXZHVSx5QkF1R0lqTyxPQXZHSixFQXVHYTtBQUNyQixXQUFPQSxPQUFPLENBQUNrTyxLQUFmO0FBRUEsUUFBSWpPLE9BQU8sR0FBR0QsT0FBTyxDQUFDQyxPQUF0QjtBQUFBLFFBQ0l3SixLQUFLLEdBQUduSCxNQUFNLENBQUNDLElBQVAsQ0FBWXRDLE9BQVosQ0FEWjtBQUFBLFFBRUl1QyxDQUFDLEdBQUdpSCxLQUFLLENBQUNyTCxNQUZkO0FBQUEsUUFHSWdDLEtBSEo7QUFLQSxRQUFJLENBQUNvQyxDQUFMLEVBQVEsT0FBT3hDLE9BQVA7O0FBRVIsV0FBT3dDLENBQUMsRUFBUixFQUFZO0FBQ1ZwQyxXQUFLLEdBQUcsS0FBSytOLGVBQUwsQ0FBcUJsTyxPQUFPLENBQUN3SixLQUFLLENBQUNqSCxDQUFELENBQU4sQ0FBNUIsQ0FBUjtBQUNBcEMsV0FBSyxDQUFDMkosTUFBTixHQUFlLE9BQU8zSixLQUFLLENBQUMySixNQUFiLEtBQXdCLFdBQXhCLEdBQXNDLEtBQXRDLEdBQThDM0osS0FBSyxDQUFDMkosTUFBbkU7QUFDRDs7QUFFRCxXQUFPL0osT0FBUDtBQUNELEdBdkhTO0FBd0hWbU8saUJBeEhVLDJCQXdITS9OLEtBeEhOLEVBd0hhO0FBQ3JCLFFBQU1nTyxJQUFJLEdBQUcvVCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsS0FBeEIsQ0FBYjtBQUNBLFFBQUksT0FBTzhDLEtBQUssQ0FBQytCLEtBQWIsS0FBdUIsUUFBM0IsRUFBcUMvQixLQUFLLENBQUMrQixLQUFOLEdBQWMsSUFBSWxELElBQUosQ0FBUyxDQUFDbUIsS0FBSyxDQUFDK0IsS0FBTixDQUFZaU0sSUFBWixLQUFxQmhPLEtBQUssQ0FBQytCLEtBQU4sQ0FBWWtNLEVBQWpDLElBQXVDak8sS0FBSyxDQUFDK0IsS0FBTixDQUFZbU0sRUFBbkQsSUFBeURsTyxLQUFLLENBQUMrQixLQUFoRSxFQUF1RTZFLE9BQXZFLENBQStFLEtBQS9FLEVBQXFGLEdBQXJGLENBQVQsRUFBb0c5SCxPQUFwRyxFQUFkO0FBQ3JDLFFBQUksT0FBT2tCLEtBQUssQ0FBQ21PLElBQWIsS0FBc0IsUUFBMUIsRUFBb0NuTyxLQUFLLENBQUNtTyxJQUFOLEdBQWEsSUFBSXRQLElBQUosQ0FBUyxDQUFDbUIsS0FBSyxDQUFDbU8sSUFBTixDQUFXSCxJQUFYLEtBQW9CaE8sS0FBSyxDQUFDbU8sSUFBTixDQUFXRixFQUEvQixJQUFxQ2pPLEtBQUssQ0FBQ21PLElBQU4sQ0FBV0QsRUFBaEQsSUFBc0RsTyxLQUFLLENBQUNtTyxJQUE3RCxFQUFtRXZILE9BQW5FLENBQTJFLEtBQTNFLEVBQWlGLEdBQWpGLENBQVQsRUFBZ0c5SCxPQUFoRyxFQUFiO0FBQ3BDLFdBQU9rQixLQUFQO0FBQ0QsR0E3SFM7QUE4SFZvTyxnQkE5SFUsMEJBOEhLQyxVQTlITCxFQThIaUI5TSxJQTlIakIsRUE4SHVCO0FBQy9CLFdBQU9oSCxxQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUE2VCxVQUFVLEVBQUk7QUFFaEQsVUFBSXpPLE9BQU8sR0FBR3dPLFVBQVUsQ0FBQ3hPLE9BQXpCO0FBQUEsVUFDSXdKLEtBQUssR0FBR25ILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEMsT0FBWixDQURaO0FBQUEsVUFFSXVDLENBQUMsR0FBR2lILEtBQUssQ0FBQ3JMLE1BRmQ7QUFBQSxVQUdJbEIsQ0FBQyxHQUFHLENBSFI7QUFBQSxVQUlJeVIsVUFBVSxHQUFHRCxVQUFVLENBQUN6TyxPQUo1QjtBQUFBLFVBS0kyTyxRQUFRLEdBQUd0TSxNQUFNLENBQUNDLElBQVAsQ0FBWW9NLFVBQVosQ0FMZjtBQUFBLFVBTUlFLGVBQWUsR0FBRyxFQU50QjtBQUFBLFVBT0l4TixJQVBKO0FBQUEsVUFPVWpCLEtBUFY7QUFBQSxVQU9pQlIsR0FQakI7QUFBQSxVQU9zQmtQLFNBUHRCO0FBQUEsVUFPaUN2TyxDQVBqQzs7QUFTQSxhQUFPckQsQ0FBQyxHQUFHc0YsQ0FBWCxFQUFjdEYsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCbUUsWUFBSSxHQUFHb0ksS0FBSyxDQUFDdk0sQ0FBRCxDQUFaO0FBQ0E0UixpQkFBUyxHQUFHLEtBQVo7O0FBRUEsWUFBSSxDQUFDRixRQUFRLENBQUMvUSxRQUFULENBQWtCd0QsSUFBbEIsQ0FBTCxFQUE4QjtBQUM1QmpCLGVBQUssR0FBR0gsT0FBTyxDQUFDb0IsSUFBRCxDQUFmO0FBQ0F6QixhQUFHLEdBQUdRLEtBQUssQ0FBQ1IsR0FBWjs7QUFFQSxlQUFLVyxDQUFMLElBQVVvTyxVQUFWLEVBQXNCO0FBQ3BCLGdCQUFJQSxVQUFVLENBQUNwTyxDQUFELENBQVYsQ0FBY1gsR0FBZCxLQUFzQkEsR0FBMUIsRUFBK0I7QUFDN0JrUCx1QkFBUyxHQUFHLElBQVo7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0QsY0FBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2QxTyxpQkFBSyxDQUFDMkosTUFBTixHQUFlcEksSUFBSSxLQUFLLE1BQXhCO0FBQ0FrTiwyQkFBZSxDQUFDeE4sSUFBRCxDQUFmLEdBQXdCakIsS0FBeEI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT3pGLHFCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUMsT0FBTyxFQUFJO0FBQzNDLFlBQU0rTyxRQUFRLEdBQUcvTyxPQUFPLENBQUNDLE9BQXpCOztBQUVBLGFBQUssSUFBSStPLENBQVQsSUFBY0gsZUFBZCxFQUErQjtBQUM3QkUsa0JBQVEsQ0FBQ0MsQ0FBRCxDQUFSLEdBQWNILGVBQWUsQ0FBQ0csQ0FBRCxDQUE3QjtBQUNEOztBQUNELGVBQU9oUCxPQUFQO0FBQ0QsT0FQTSxFQU9KMkIsSUFQSSxDQUFQO0FBUUQsS0F4Q00sQ0FBUDtBQXlDRCxHQXhLUztBQTBLVnNOLHFCQTFLVSxpQ0EwS3lDO0FBQUE7O0FBQUEsUUFBL0JsVSxXQUErQix1RUFBakIsR0FBaUI7QUFBQSxRQUFaYixVQUFZOztBQUNqRFMseUJBQVN1VSxPQUFULENBQWlCLE9BQWpCLEVBQTBCclUsSUFBMUIsQ0FBK0IsVUFBQXNVLEtBQUssRUFBSTtBQUN0QyxVQUFJQSxLQUFKLEVBQVc7QUFDVCxZQUFJalYsVUFBVSxLQUFLLFNBQW5CLEVBQThCLEtBQUksQ0FBQ2UsSUFBTCxDQUFVLE9BQVYsRUFBbUIsb0NBQW5CO0FBQzlCLGVBQU9OLHFCQUFTUSxHQUFULENBQWEsU0FBYixFQUF3QixPQUF4QixDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0QsS0FORCxFQU9DTixJQVBELENBT007QUFBQSxhQUFNRixxQkFBU2dELE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEIsVUFBQXNGLFFBQVE7QUFBQSxlQUFJLEtBQUksQ0FBQ2tELGNBQUwsQ0FBb0JsRCxRQUFwQixDQUFKO0FBQUEsT0FBcEMsRUFBdUUsTUFBdkUsQ0FBTjtBQUFBLEtBUE4sRUFRQ3BJLElBUkQsQ0FRTTtBQUFBLGFBQU1GLHFCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBc0YsUUFBUTtBQUFBLGVBQUksS0FBSSxDQUFDa0QsY0FBTCxDQUFvQmxELFFBQXBCLENBQUo7QUFBQSxPQUFwQyxFQUF1RSxPQUF2RSxDQUFOO0FBQUEsS0FSTixFQVNDcEksSUFURCxDQVNNO0FBQUEsYUFBTUYscUJBQVNRLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCLENBQU47QUFBQSxLQVROLEVBVUE7QUFWQSxLQVdDTixJQVhELENBV007QUFBQSxhQUFNLEtBQUksQ0FBQ0ksSUFBTCxDQUFVLHFCQUFWLEVBQWlDRixXQUFqQyxDQUFOO0FBQUEsS0FYTixXQVlPLFVBQUF3RixDQUFDLEVBQUk7QUFDVixXQUFJLENBQUN0RixJQUFMLENBQVUscUJBQVYsRUFBaUNGLFdBQWpDOztBQUNBLFdBQUksQ0FBQ0UsSUFBTCxDQUFVLE9BQVYsRUFBbUIseUJBQW5CLEVBQThDc0YsQ0FBQyxDQUFDNk8sUUFBRixFQUE5QztBQUNELEtBZkQ7QUFnQkQsR0EzTFM7QUE0TFZDLHFCQTVMVSxpQ0E0TFk7QUFBQTs7QUFDcEIxVSx5QkFBU3VVLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUJyVSxJQUF6QixDQUE4QixVQUFBc1UsS0FBSyxFQUFJO0FBQ3JDLFVBQUlBLEtBQUosRUFBVztBQUNULGNBQUksQ0FBQ2xVLElBQUwsQ0FBVSxPQUFWLEVBQW1CLG9DQUFuQjtBQUNEOztBQUNELGFBQU9OLHFCQUFTUSxHQUFULENBQWEsU0FBYixFQUF3QixNQUF4QixDQUFQO0FBQ0QsS0FMRCxFQU1DTixJQU5ELENBTU07QUFBQSxhQUFNRixxQkFBU3VVLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEJyVSxJQUExQixDQUErQixVQUFBc1UsS0FBSyxFQUFJO0FBQ2xELFlBQUlBLEtBQUosRUFBVztBQUNULGdCQUFJLENBQUNsVSxJQUFMLENBQVUsT0FBVixFQUFtQixtQ0FBbkI7QUFDRDs7QUFDRCxlQUFPTixxQkFBU1EsR0FBVCxDQUFhLFNBQWIsRUFBd0IsT0FBeEIsQ0FBUDtBQUNELE9BTFcsQ0FBTjtBQUFBLEtBTk4sRUFZQ04sSUFaRCxDQVlNO0FBQUEsYUFBTSxNQUFJLENBQUNJLElBQUwsQ0FBVSxpQkFBVixDQUFOO0FBQUEsS0FaTixXQWFPO0FBQUEsYUFBTSxNQUFJLENBQUNBLElBQUwsQ0FBVSxpQkFBVixDQUFOO0FBQUEsS0FiUDtBQWNELEdBM01TO0FBNE1WcVUsZUE1TVUseUJBNE1JQyxlQTVNSixFQTRNcUI1TixJQTVNckIsRUE0TTJCO0FBQUE7O0FBQ25DLFFBQUlzQixRQUFRLEdBQUdzTSxlQUFlLENBQUN0TSxRQUEvQjtBQUFBLFFBQ0lqRCxPQUFPLEdBQUd1UCxlQUFlLENBQUN2UCxPQUQ5QjtBQUdBLFFBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNpRCxRQUFqQixFQUEyQixLQUFLaEksSUFBTCxDQUFVLGVBQVYsRUFBMkIsb0JBQTNCLEVBQTNCLEtBQ0s7QUFDSCxVQUFJLENBQUMrRSxPQUFMLEVBQWM7QUFDWixZQUFJLENBQUNpRCxRQUFRLENBQUM1RSxTQUFkLEVBQXlCLEtBQUtwRCxJQUFMLENBQVUsZUFBVixFQUEyQixnQ0FBM0IsRUFBNkQsdUJBQTdELEVBQXpCLEtBQ0ssS0FBS3VVLGNBQUwsQ0FBb0J2TSxRQUFwQixFQUE4QnRCLElBQTlCLEVBQW9DOUcsSUFBcEMsQ0FBeUMsVUFBQTRVLE9BQU8sRUFBSTtBQUN2RCxjQUFJLENBQUNBLE9BQUwsRUFBYyxNQUFJLENBQUN4VSxJQUFMLENBQVUsZUFBVixFQUEyQixnQ0FBM0IsRUFBNkQsdUJBQTdELEVBQWQsS0FDSyxNQUFJLENBQUNBLElBQUwsQ0FBVSxnQ0FBVixFQUE0QyxnQ0FBNUM7QUFDTixTQUhJO0FBSU4sT0FORCxNQU9LLElBQUksQ0FBQ2dJLFFBQUwsRUFBZTtBQUNsQixhQUFLeU0sYUFBTCxDQUFtQjFQLE9BQW5CLEVBQTRCMkIsSUFBNUIsRUFBa0M5RyxJQUFsQyxDQUF1QyxVQUFBNFUsT0FBTyxFQUFJO0FBQ2hELGNBQUksQ0FBQ0EsT0FBTCxFQUFjLE1BQUksQ0FBQ3hVLElBQUwsQ0FBVSxlQUFWLEVBQTJCLGlDQUEzQixFQUE4RCxzQkFBOUQsRUFBZCxLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLG1DQUFWO0FBQ04sU0FIRDtBQUlELE9BTEksTUFLRTtBQUNMLGFBQUt1VSxjQUFMLENBQW9Cdk0sUUFBcEIsRUFBOEJ0QixJQUE5QixFQUFvQzlHLElBQXBDLENBQXlDLFVBQUE4VSxTQUFTLEVBQUk7QUFDcEQsZ0JBQUksQ0FBQ0QsYUFBTCxDQUFtQjFQLE9BQW5CLEVBQTRCMkIsSUFBNUIsRUFBa0M5RyxJQUFsQyxDQUF1QyxVQUFBK1UsU0FBUyxFQUFJO0FBQ2xELGdCQUFJLENBQUNELFNBQUwsRUFBZ0I7QUFDZCxrQkFBSSxDQUFDQyxTQUFMLEVBQWdCLE1BQUksQ0FBQzNVLElBQUwsQ0FBVSxlQUFWLEVBQTJCLHVCQUEzQixFQUFvRCxzQkFBcEQsRUFBaEIsS0FDSyxNQUFJLENBQUNBLElBQUwsQ0FBVSwrQkFBVixFQUEyQyx1QkFBM0M7QUFDTixhQUhELE1BR087QUFDTCxrQkFBSTBVLFNBQVMsS0FBSyxVQUFsQixFQUE4QjtBQUM1QixvQkFBSSxDQUFDQyxTQUFMLEVBQWdCLE1BQUksQ0FBQzNVLElBQUwsQ0FBVSxlQUFWLEVBQTJCLHNCQUEzQixFQUFtRCx1QkFBbkQsRUFBaEIsS0FDSyxNQUFJLENBQUNBLElBQUwsQ0FBVSwrQkFBVixFQUEyQyx1QkFBM0M7QUFDTixlQUhELE1BR087QUFDTCxvQkFBSSxDQUFDMlUsU0FBTCxFQUFnQixNQUFJLENBQUMzVSxJQUFMLENBQVUsZ0NBQVYsRUFBNEMsc0JBQTVDLEVBQWhCLEtBQ0ssTUFBSSxDQUFDQSxJQUFMLENBQVUscURBQVY7QUFDTjtBQUNGO0FBQ0YsV0FiRDtBQWNELFNBZkQ7QUFnQkQ7QUFDRjtBQUNGLEdBalBTO0FBa1BWdVUsZ0JBbFBVLDBCQWtQS3ZNLFFBbFBMLEVBa1BldEIsSUFsUGYsRUFrUHFCO0FBQUE7O0FBQzdCLFFBQUksQ0FBQ3NCLFFBQVEsQ0FBQzVFLFNBQWQsRUFBeUIsT0FBT3dSLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFoQixDQUFQO0FBRXpCLFdBQU9uVixxQkFBU2dELE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEIsVUFBQXNGLFFBQVE7QUFBQSxhQUFJLE1BQUksQ0FBQ2tELGNBQUwsQ0FBb0JsRCxRQUFwQixDQUFKO0FBQUEsS0FBcEMsRUFBdUV0QixJQUF2RSxFQUNKOUcsSUFESSxDQUNDO0FBQUEsYUFBTSxJQUFOO0FBQUEsS0FERCxXQUVFO0FBQUEsYUFBTSxLQUFOO0FBQUEsS0FGRixDQUFQO0FBR0QsR0F4UFM7QUF5UFY2VSxlQXpQVSx5QkF5UEkxUCxPQXpQSixFQXlQYTJCLElBelBiLEVBeVBtQjtBQUMzQixXQUFPLEtBQUs2TSxjQUFMLENBQW9CLEtBQUtQLGFBQUwsQ0FBbUJqTyxPQUFuQixFQUE0QixJQUE1QixDQUFwQixFQUF1RDJCLElBQXZELEVBQ0o5RyxJQURJLENBQ0M7QUFBQSxhQUFNLElBQU47QUFBQSxLQURELFdBRUU7QUFBQSxhQUFNLEtBQU47QUFBQSxLQUZGLENBQVA7QUFHRDtBQTdQUyxDQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNGZSxZQUFXO0FBQ3hCLFNBQU8sSUFBSWhCLGNBQUosQ0FBWTtBQUNqQkMsVUFBTSxFQUFFO0FBQ05DLFNBQUcsRUFBRTtBQUNILHNCQUFjO0FBRFg7QUFEQyxLQURTO0FBT2pCZ1csdUJBUGlCLCtCQU9HMU8sSUFQSCxFQU9TO0FBQ3hCLFVBQU0yTyxRQUFRLEdBQUczVixPQUFPLENBQUNDLE9BQVIsQ0FBZ0I4SSxNQUFoQixDQUF1QixzQ0FBdkIsQ0FBakI7QUFFQS9JLGFBQU8sQ0FBQ3NHLE9BQVIsQ0FBZ0JzUCxVQUFoQixHQUE2QnBWLElBQTdCLENBQWtDLFVBQUFxVixhQUFhLEVBQUk7QUFFakQ3VixlQUFPLENBQUNzRyxPQUFSLENBQWdCL0MsTUFBaEIsQ0FBdUI7QUFDckJnQyxhQUFHLEVBQUVvUSxRQUFRLEdBQUcsR0FBWCxHQUFpQkcsa0JBQWtCLENBQUM5TyxJQUFELENBRG5CO0FBRXJCMkIsY0FBSSxFQUFFLE9BRmU7QUFHckJvTixnQkFBTSxFQUFFRixhQUFhLENBQUNFLE1BQWQsR0FBdUIsRUFIVjtBQUlyQkMsZUFBSyxFQUFFQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0wsYUFBYSxDQUFDRyxLQUF2QixFQUE4QixHQUE5QixDQUpjO0FBS3JCdFAsbUJBQVMsRUFBRW1QLGFBQWEsQ0FBQ25QO0FBTEosU0FBdkI7QUFPRCxPQVREO0FBVUQ7QUFwQmdCLEdBQVosQ0FBUDtBQXNCRCxDOztBQTFCRDs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7O0FBRUEsSUFBSXlQLFlBQUosQ0FBVTtBQUNSblAsTUFBSSxFQUFFLFlBREU7QUFFUjJCLE1BQUksRUFBRSxZQUZFO0FBR1J5TixvQkFBa0IsRUFBRSxJQUhaO0FBSVIzVyxRQUFNLEVBQUU7QUFDTjRXLFVBQU0sRUFBRSxDQUNOLGFBRE0sRUFFTixlQUZNLEVBR04sY0FITSxFQUlOLHVCQUpNLEVBS04sa0JBTE0sRUFNTixpQkFOTSxFQU9OLGdDQVBNLEVBUU4sb0JBUk0sRUFTTixvQkFUTSxFQVVOLGNBVk0sRUFXTixzQkFYTSxFQVlOLHVCQVpNLEVBYU4seUJBYk0sRUFjTiwyQkFkTSxFQWVOLGdDQWZNLEVBZ0JOLDBCQWhCTSxFQWlCTiw4QkFqQk0sRUFrQk4sYUFsQk0sRUFtQk4sZUFuQk0sRUFvQk4saUJBcEJNLEVBcUJOLG1CQXJCTSxFQXNCTixrQkF0Qk0sRUF1Qk4sT0F2Qk0sRUF3Qk4sT0F4Qk0sRUF5Qk4sT0F6Qk0sRUEwQk4sUUExQk0sRUEyQk4sT0EzQk0sRUE0Qk4sT0E1Qk0sRUE2Qk4sbUJBN0JNLEVBOEJOLDBCQTlCTSxFQStCTixrQkEvQk0sRUFnQ04seUJBaENNLEVBaUNOLGNBakNNLEVBa0NOLGVBbENNLEVBbUNOLHNCQW5DTSxFQW9DTixjQXBDTSxFQXFDTixjQXJDTSxFQXNDTixjQXRDTSxFQXVDTiw0QkF2Q00sRUF3Q04sc0JBeENNLEVBeUNOLG1CQXpDTSxFQTBDTiwyQkExQ00sRUEyQ04seUJBM0NNLEVBNENOLGdCQTVDTSxFQTZDTixhQTdDTSxDQURGO0FBZ0ROQyxjQUFVLEVBQUUsQ0FDVixhQURVLEVBRVYsZUFGVSxFQUdWLGtCQUhVLEVBSVYsdUJBSlUsRUFLVixhQUxVLEVBTVYsbUJBTlUsRUFPVix1QkFQVSxFQVFWLG1CQVJVLEVBU1YsaUJBVFUsRUFVVixjQVZVLEVBV1YsZ0JBWFUsRUFZVixrQkFaVSxFQWFWLFlBYlUsRUFjVixtQkFkVSxFQWVWLFlBZlUsRUFnQlYsYUFoQlUsRUFpQlYsYUFqQlUsRUFrQlYscUJBbEJVLEVBbUJWLHVCQW5CVSxFQW9CVixxQkFwQlU7QUFoRE47QUFKQSxDQUFWLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUNBOzs7O0FBQ0E7Ozs7OztxQkFHZSxJQUFJOVcsY0FBSixDQUFZO0FBRXpCK1csYUFBVyxFQUFFLEtBRlk7QUFHekJDLGNBQVksRUFBRSxLQUhXO0FBSXpCOUssZUFBYSxFQUFFcUgsNEJBQWlCdEgsSUFBakIsQ0FBc0I3QyxRQUF0QixHQUFpQyxNQUFqQyxHQUEwQyxPQUpoQztBQUt6QitDLGNBQVksRUFBRW9ILDRCQUFpQnRILElBQWpCLENBQXNCOUYsT0FBdEIsR0FBZ0MsTUFBaEMsR0FBeUMsT0FMOUI7QUFNekJpRyxnQkFBYyxFQUFFbUgsNEJBQWlCdEgsSUFBakIsQ0FBc0JJLFNBQXRCLEdBQWtDLE1BQWxDLEdBQTJDLE9BTmxDO0FBUXpCNEssTUFSeUIsa0JBUWxCO0FBQUE7O0FBQ0x6VyxXQUFPLENBQUN5UixPQUFSLENBQWdCaEcsSUFBaEIsQ0FBcUI5SCxNQUFyQixDQUE0QixNQUE1QjtBQUVBLFdBQU8zRCxPQUFPLENBQUN5UixPQUFSLENBQWdCVixLQUFoQixDQUFzQnhRLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBa1csWUFBWSxFQUFJO0FBQ3RELFVBQUlqTCxJQUFJLEdBQUdpTCxZQUFZLElBQUlBLFlBQVksQ0FBQ2pMLElBQTdCLEdBQW9DaUwsWUFBWSxDQUFDakwsSUFBakQsR0FBd0RzSCw0QkFBaUJ0SCxJQUFwRjtBQUNBLGFBQU8sS0FBSSxDQUFDa0wsU0FBTCxDQUFlbEwsSUFBZixDQUFQO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0Fmd0I7QUFpQnpCbEwsS0FqQnlCLGlCQWlCRjtBQUFBOztBQUFBLFFBQW5CZ0wsS0FBbUIsdUVBQVgsU0FBVzs7QUFDckIsUUFBSSxLQUFLaUwsWUFBVCxFQUF1QjtBQUNyQixhQUFRLElBQUloQixPQUFKLENBQVksVUFBQW9CLENBQUM7QUFBQSxlQUFJQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFBQSxpQkFBTUYsQ0FBQyxDQUFDLE1BQUksQ0FBQ3JXLEdBQUwsQ0FBU2dMLEtBQVQsQ0FBRCxDQUFQO0FBQUEsU0FBbEIsRUFBNEMsRUFBNUMsQ0FBSjtBQUFBLE9BQWIsQ0FBUjtBQUNEOztBQUNELFFBQU13TCxJQUFJLEdBQUcsS0FBSyxVQUFVeEwsS0FBZixDQUFiO0FBQ0EsUUFBSSxDQUFDd0wsSUFBTCxFQUFXLE1BQU0sV0FBV3hMLEtBQVgsR0FBbUIsaUJBQXpCOztBQUVYLFFBQUksQ0FBQyxLQUFLZ0wsV0FBVixFQUF1QjtBQUNyQixXQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsV0FBS0QsV0FBTCxHQUFtQixJQUFuQjtBQUNBLGFBQU8sS0FBS0UsSUFBTCxHQUFZalcsSUFBWixDQUFpQixZQUFNO0FBQzVCLGNBQUksQ0FBQ2dXLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxlQUFPLE1BQUksQ0FBQyxVQUFVakwsS0FBWCxDQUFKLEVBQVA7QUFDRCxPQUhNLENBQVA7QUFJRDs7QUFDRCxXQUFPLEtBQUssVUFBVUEsS0FBZixHQUFQO0FBQ0QsR0FqQ3dCO0FBa0N6QnpLLEtBbEN5QixlQWtDckJ5SyxLQWxDcUIsRUFrQ2RDLEdBbENjLEVBa0NUO0FBQ2QsUUFBTXVMLElBQUksR0FBRyxLQUFLLFVBQVV4TCxLQUFmLENBQWI7QUFDQSxRQUFJLENBQUN3TCxJQUFMLEVBQVcsTUFBTSxXQUFXeEwsS0FBWCxHQUFtQixpQkFBekI7QUFDWCxXQUFPLEtBQUssVUFBVUEsS0FBZixFQUFzQkMsR0FBdEIsQ0FBUDtBQUNELEdBdEN3QjtBQXVDekJsSSxRQXZDeUIsb0JBdUNUO0FBQ2QsV0FBTyxLQUFLMFQsT0FBTCx1QkFBUDtBQUNELEdBekN3QjtBQTJDekJuQyxTQTNDeUIscUJBMkNGO0FBQUEsUUFBZnZOLElBQWUsdUVBQVIsTUFBUTtBQUNyQixXQUFPdEgsT0FBTyxDQUFDeVIsT0FBUixDQUFnQm5LLElBQWhCLEVBQXNCL0csR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFpUixPQUFPLEVBQUk7QUFDakQsVUFBSSxDQUFDQSxPQUFELElBQWEsQ0FBQ3hKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdUosT0FBWixFQUFxQjFOLE1BQXRCLElBQWdDME4sT0FBTyxDQUFDd0YsV0FBUixLQUF3QmhQLE1BQXJFLElBQWdGLENBQUN3SixPQUFPLENBQUM5TCxPQUE3RixFQUFzRyxPQUFPLElBQVA7QUFDdEcsYUFBTyxLQUFQO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0FoRHdCO0FBa0R6QnVSLGNBbER5QiwwQkFrRFY7QUFBQTs7QUFDYixXQUFPbFgsT0FBTyxDQUFDeVIsT0FBUixDQUFnQlYsS0FBaEIsQ0FBc0J4USxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQWtXLFlBQVksRUFBSTtBQUN0RCxhQUFPMVcsT0FBTyxDQUFDeVIsT0FBUixDQUFnQmhHLElBQWhCLENBQXFCbEwsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUEyVyxhQUFhLEVBQUk7QUFDdEQsU0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjVHLE9BQXBCLENBQTRCLFVBQUFoRixLQUFLLEVBQUk7QUFDbkNtTCxzQkFBWSxDQUFDbkwsS0FBRCxDQUFaLEdBQXNCbUwsWUFBWSxDQUFDbkwsS0FBRCxDQUFaLElBQXVCNEwsYUFBYSxDQUFDNUwsS0FBRCxDQUExRDtBQUNELFNBRkQ7QUFHQSxZQUFJLE1BQUksQ0FBQ0csYUFBTCxLQUF1QixNQUEzQixFQUFtQ2dMLFlBQVksQ0FBQzlOLFFBQWIsR0FBd0J1TyxhQUFhLENBQUN2TyxRQUF0QztBQUNuQyxlQUFPLE1BQUksQ0FBQ3dPLFlBQUwsR0FBb0I1VyxJQUFwQixDQUF5QixVQUFBbUYsT0FBTyxFQUFJO0FBQ3pDK1Esc0JBQVksQ0FBQy9RLE9BQWIsR0FBdUJBLE9BQXZCO0FBQ0EsaUJBQU8rUSxZQUFQO0FBQ0QsU0FITSxDQUFQO0FBSUQsT0FUTSxDQUFQO0FBVUQsS0FYTSxDQUFQO0FBWUQsR0EvRHdCO0FBZ0V6Qlcsb0JBaEV5QixnQ0FnRUo7QUFDbkIsV0FBT3JYLE9BQU8sQ0FBQ3lSLE9BQVIsQ0FBZ0JWLEtBQWhCLENBQXNCeFEsR0FBdEIsRUFBUDtBQUNELEdBbEV3QjtBQW1FekIrVyxxQkFuRXlCLGlDQW1FSDtBQUNwQixXQUFPdFgsT0FBTyxDQUFDeVIsT0FBUixDQUFnQmhHLElBQWhCLENBQXFCbEwsR0FBckIsRUFBUDtBQUNELEdBckV3QjtBQXNFekI2VyxjQXRFeUIsMEJBc0VWO0FBQ2IsV0FBT3BYLE9BQU8sQ0FBQ3lSLE9BQVIsQ0FBZ0JoRyxJQUFoQixDQUFxQmxMLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBMlcsYUFBYSxFQUFJO0FBQ3RELFVBQU1JLGFBQWEsR0FBR0osYUFBYSxDQUFDeFIsT0FBcEM7QUFFQSxhQUFPM0YsT0FBTyxDQUFDeVIsT0FBUixDQUFnQlYsS0FBaEIsQ0FBc0J4USxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQWtXLFlBQVksRUFBSTtBQUN0RCxZQUFNYyxZQUFZLEdBQUdkLFlBQVksQ0FBQy9RLE9BQWxDO0FBQ0EsWUFBSSxDQUFDNFIsYUFBTCxFQUFvQixPQUFPQyxZQUFQO0FBQ3BCLFlBQUksQ0FBQ0EsWUFBTCxFQUFtQixPQUFPRCxhQUFQLENBSG1DLENBS3REOztBQUNBLGFBQUssSUFBSXJSLENBQVQsSUFBY3NSLFlBQVksQ0FBQzVSLE9BQTNCO0FBQW9DMlIsdUJBQWEsQ0FBQzNSLE9BQWQsQ0FBc0JNLENBQXRCLElBQTJCc1IsWUFBWSxDQUFDNVIsT0FBYixDQUFxQk0sQ0FBckIsQ0FBM0I7QUFBcEM7O0FBRUEsZUFBT3FSLGFBQVA7QUFDRCxPQVRNLENBQVA7QUFVRCxLQWJNLENBQVA7QUFjRCxHQXJGd0I7QUFzRnpCRSxlQXRGeUIsMkJBc0ZUO0FBQ2QsV0FBT3pYLE9BQU8sQ0FBQ3lSLE9BQVIsQ0FBZ0IsS0FBSy9GLGFBQXJCLEVBQW9DbkwsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFpUixPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDN0ksUUFBWjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQXhGd0I7QUF5RnpCOE8sV0F6RnlCLHVCQXlGYjtBQUNWLFdBQU8xWCxPQUFPLENBQUN5UixPQUFSLENBQWdCVixLQUFoQixDQUFzQnhRLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBa1csWUFBWSxFQUFJO0FBQ3RELFVBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUN2RSxJQUFuQyxFQUF5QyxPQUFPLEVBQVA7QUFDekMsYUFBT3VFLFlBQVksQ0FBQ3ZFLElBQXBCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0E5RndCO0FBK0Z6QndGLGNBL0Z5QiwwQkErRlY7QUFDYixXQUFPM1gsT0FBTyxDQUFDeVIsT0FBUixDQUFnQlYsS0FBaEIsQ0FBc0J4USxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQWtXLFlBQVksRUFBSTtBQUN0RCxVQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDOVcsT0FBbkMsRUFBNEM7QUFDMUMsZUFBT0ksT0FBTyxDQUFDeVIsT0FBUixDQUFnQmhHLElBQWhCLENBQXFCbEwsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUEyVyxhQUFhO0FBQUEsaUJBQUtBLGFBQWEsQ0FBQ3ZYLE9BQWQsSUFBeUIsRUFBOUI7QUFBQSxTQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsYUFBTzhXLFlBQVksQ0FBQzlXLE9BQXBCO0FBQ0QsS0FMTSxDQUFQO0FBTUQsR0F0R3dCO0FBdUd6QmdZLFdBdkd5Qix1QkF1R2I7QUFDVixXQUFPNVgsT0FBTyxDQUFDeVIsT0FBUixDQUFnQixLQUFLL0YsYUFBckIsRUFBb0NuTCxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQWlSLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUM3SSxRQUFyQixJQUFpQzZJLE9BQU8sQ0FBQzdJLFFBQVIsQ0FBaUJ5QyxLQUFqQixDQUF1QjFMLE1BQTVELEVBQW9FLE9BQU8sSUFBUDtBQUNwRSxhQUFPLEtBQVA7QUFDRCxLQUhNLENBQVA7QUFJRCxHQTVHd0I7QUE2R3pCa1ksZUE3R3lCLDJCQTZHVDtBQUNkLFdBQU83WCxPQUFPLENBQUN5UixPQUFSLENBQWdCLEtBQUsvRixhQUFyQixFQUFvQ25MLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBaVIsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQzdJLFFBQXpCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxhQUFPNkksT0FBTyxDQUFDN0ksUUFBUixDQUFpQmpELE9BQWpCLENBQXlCZ0IsVUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQWxId0I7QUFtSHpCbVIsYUFuSHlCLHlCQW1IWDtBQUNaLFdBQU85WCxPQUFPLENBQUN5UixPQUFSLENBQWdCLEtBQUsvRixhQUFyQixFQUFvQ25MLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBaVIsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQzdJLFFBQXpCLEVBQW1DLE9BQU8sUUFBUDtBQUNuQyxhQUFPNkksT0FBTyxDQUFDN0ksUUFBUixDQUFpQmpELE9BQWpCLENBQXlCdUIsTUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQXhId0I7QUF5SHpCNlEsZUF6SHlCLDJCQXlIVDtBQUNkLFdBQU8vWCxPQUFPLENBQUN5UixPQUFSLENBQWdCLEtBQUsvRixhQUFyQixFQUFvQ25MLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBaVIsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQzdJLFFBQXpCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxhQUFPNkksT0FBTyxDQUFDN0ksUUFBUixDQUFpQk0sSUFBakIsQ0FBc0J3SyxRQUE3QjtBQUNELEtBSE0sQ0FBUDtBQUlELEdBOUh3QjtBQStIekJzRSxjQS9IeUIsMEJBK0hWO0FBQ2IsV0FBT2hZLE9BQU8sQ0FBQ3lSLE9BQVIsQ0FBZ0IsS0FBSy9GLGFBQXJCLEVBQW9DbkwsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFpUixPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDN0ksUUFBUixDQUFpQndELE9BQXJCO0FBQUEsS0FBdEQsQ0FBUDtBQUNELEdBakl3QjtBQWtJekI2TCxnQkFsSXlCLDRCQWtJUjtBQUNmLFdBQU9qWSxPQUFPLENBQUN5UixPQUFSLENBQWdCLEtBQUsvRixhQUFyQixFQUFvQ25MLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBaVIsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQzdJLFFBQVIsQ0FBaUI1RSxTQUFyQjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQXBJd0I7QUFzSXpCa1UsY0F0SXlCLDBCQXNJQztBQUFBOztBQUFBLFFBQWI1USxJQUFhLHVFQUFOLElBQU07QUFDeEIsV0FBTyxLQUFLNlEsYUFBTCxDQUFtQjdRLElBQW5CLEVBQXlCOUcsSUFBekIsQ0FBOEI7QUFBQSxhQUFNLE1BQUksQ0FBQzRYLFlBQUwsQ0FBa0I5USxJQUFsQixDQUFOO0FBQUEsS0FBOUIsQ0FBUDtBQUNELEdBeEl3QjtBQXlJekJxUCxXQXpJeUIscUJBeUlmbEwsSUF6SWUsRUF5SVQ7QUFBQTs7QUFDZCxXQUFPekwsT0FBTyxDQUFDeVIsT0FBUixDQUFnQlYsS0FBaEIsQ0FBc0JqUSxHQUF0QixDQUEwQjtBQUFFMkssVUFBSSxFQUFFQTtBQUFSLEtBQTFCLEVBQ0pqTCxJQURJLENBQ0M7QUFBQSxhQUFNUixPQUFPLENBQUN5UixPQUFSLENBQWdCaEcsSUFBaEIsQ0FBcUIzSyxHQUFyQixDQUF5QjtBQUFFMkssWUFBSSxFQUFFQTtBQUFSLE9BQXpCLENBQU47QUFBQSxLQURELEVBRUpqTCxJQUZJLENBRUMsWUFBTTtBQUNWLFlBQUksQ0FBQ2tMLGFBQUwsR0FBcUJELElBQUksQ0FBQzdDLFFBQUwsR0FBZ0IsTUFBaEIsR0FBeUIsT0FBOUM7QUFDQSxZQUFJLENBQUMrQyxZQUFMLEdBQW9CRixJQUFJLENBQUM5RixPQUFMLEdBQWUsTUFBZixHQUF3QixPQUE1QztBQUNBLFlBQUksQ0FBQ2lHLGNBQUwsR0FBc0JILElBQUksQ0FBQ0ksU0FBTCxHQUFpQixNQUFqQixHQUEwQixPQUFoRDtBQUNELEtBTkksQ0FBUDtBQU9ELEdBakp3QjtBQWtKekJzTSxlQWxKeUIsMkJBa0pnQjtBQUFBLFFBQTNCN1EsSUFBMkIsdUVBQXBCLEtBQUtvRSxhQUFlO0FBQ3ZDLFdBQU8xTCxPQUFPLENBQUN5UixPQUFSLENBQWdCbkssSUFBaEIsRUFBc0IvRyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQWlSLE9BQU8sRUFBSTtBQUNqRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUM3SSxRQUF6QixFQUFtQyxPQUFPNUksT0FBTyxDQUFDeVIsT0FBUixDQUFnQm5LLElBQWhCLEVBQXNCeEcsR0FBdEIsQ0FBMEI7QUFBRThILGdCQUFRLEVBQUUsa0JBQU1tSyw0QkFBaUJuSyxRQUF2QjtBQUFaLE9BQTFCLENBQVA7QUFDcEMsS0FGTSxDQUFQO0FBR0QsR0F0SndCO0FBdUp6QndQLGNBdkp5QiwwQkF1SmM7QUFBQSxRQUExQjlRLElBQTBCLHVFQUFuQixLQUFLcUUsWUFBYztBQUNyQyxXQUFPM0wsT0FBTyxDQUFDeVIsT0FBUixDQUFnQm5LLElBQWhCLEVBQXNCL0csR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFpUixPQUFPLEVBQUk7QUFDakQsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDOUwsT0FBekIsRUFBa0MsT0FBTzNGLE9BQU8sQ0FBQ3lSLE9BQVIsQ0FBZ0JuSyxJQUFoQixFQUFzQnhHLEdBQXRCLENBQTBCO0FBQUU2RSxlQUFPLEVBQUUsa0JBQU1vTiw0QkFBaUJwTixPQUF2QjtBQUFYLE9BQTFCLENBQVA7QUFDbkMsS0FGTSxDQUFQO0FBR0QsR0EzSndCO0FBNEp6QjBTLGNBNUp5Qix3QkE0Slp6WSxPQTVKWSxFQTRKSDtBQUNwQixXQUFPSSxPQUFPLENBQUN5UixPQUFSLENBQWdCVixLQUFoQixDQUFzQmpRLEdBQXRCLENBQTBCO0FBQUVsQixhQUFPLEVBQUVBO0FBQVgsS0FBMUIsRUFDSlksSUFESSxDQUNDO0FBQUEsYUFBTVIsT0FBTyxDQUFDeVIsT0FBUixDQUFnQmhHLElBQWhCLENBQXFCM0ssR0FBckIsQ0FBeUI7QUFBRWxCLGVBQU8sRUFBRUE7QUFBWCxPQUF6QixDQUFOO0FBQUEsS0FERCxDQUFQO0FBRUQsR0EvSndCO0FBZ0t6QjBZLFVBaEt5QixvQkFnS2hCalUsR0FoS2dCLEVBZ0tYO0FBQ1osUUFBSUEsR0FBRyxDQUFDVSxLQUFSLEVBQWU7QUFDYixhQUFPL0UsT0FBTyxDQUFDeVIsT0FBUixDQUFnQlYsS0FBaEIsQ0FBc0JqUSxHQUF0QixDQUEwQjtBQUFFcVIsWUFBSSxFQUFFO0FBQVIsT0FBMUIsQ0FBUDtBQUNEOztBQUNELFdBQU8sS0FBS3VGLFNBQUwsR0FBaUJsWCxJQUFqQixDQUFzQixVQUFBMlIsSUFBSSxFQUFJO0FBQ25DQSxVQUFJLENBQUN6TyxJQUFMLENBQVVXLEdBQVY7QUFDQSxVQUFJOE4sSUFBSSxDQUFDcE8sTUFBTCxHQUFjeUQsNEJBQWlCK1EsZUFBbkMsRUFBb0RwRyxJQUFJLENBQUNxRyxLQUFMO0FBQ3BELGFBQU94WSxPQUFPLENBQUN5UixPQUFSLENBQWdCVixLQUFoQixDQUFzQmpRLEdBQXRCLENBQTBCO0FBQUVxUixZQUFJLEVBQUVBO0FBQVIsT0FBMUIsQ0FBUDtBQUNELEtBSk0sQ0FBUDtBQUtELEdBekt3QjtBQTBLekJzRyxZQTFLeUIsc0JBMEtkMVMsS0ExS2MsRUEwS1A7QUFBQTs7QUFDaEIsV0FBTy9GLE9BQU8sQ0FBQ3lSLE9BQVIsQ0FBZ0IsS0FBSzlGLFlBQXJCLEVBQW1DcEwsR0FBbkMsR0FBeUNDLElBQXpDLENBQThDLFVBQUFpUixPQUFPLEVBQUk7QUFDOUQsVUFBSTlMLE9BQU8sR0FBRzhMLE9BQU8sQ0FBQzlMLE9BQXRCO0FBQ0EsVUFBSXNDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdkMsT0FBTyxDQUFDQyxPQUFwQixFQUE2QnBDLFFBQTdCLENBQXNDdUMsS0FBSyxDQUFDaUIsSUFBNUMsQ0FBSixFQUF1RCxPQUFPLE1BQUksQ0FBQzBSLGFBQUwsQ0FBbUIzUyxLQUFuQixDQUFQO0FBQ3ZESixhQUFPLENBQUNDLE9BQVIsQ0FBZ0JHLEtBQUssQ0FBQ2lCLElBQXRCLElBQThCakIsS0FBOUI7QUFDQSxhQUFPL0YsT0FBTyxDQUFDeVIsT0FBUixDQUFnQixNQUFJLENBQUM5RixZQUFyQixFQUFtQzdLLEdBQW5DLENBQXVDO0FBQUU2RSxlQUFPLEVBQUVBO0FBQVgsT0FBdkMsQ0FBUDtBQUNELEtBTE0sQ0FBUDtBQU1ELEdBakx3QjtBQW1MekJxUixTQW5MeUIsbUJBbUxqQnpMLEtBbkxpQixFQW1MVlEsT0FuTFUsRUFtTDZCO0FBQUE7O0FBQUEsUUFBOUJ6RSxJQUE4Qix1RUFBdkIsS0FBSyxVQUFVaUUsS0FBZixDQUF1QjtBQUNwRCxXQUFPdkwsT0FBTyxDQUFDeVIsT0FBUixDQUFnQm5LLElBQWhCLEVBQXNCL0csR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFpUixPQUFPLEVBQUk7QUFDL0MsVUFBSSxDQUFDQSxPQUFPLENBQUNsRyxLQUFELENBQVosRUFBcUI7QUFDbkJrRyxlQUFPLENBQUNsRyxLQUFELENBQVAsR0FBaUIsa0JBQU13SCw0QkFBaUJ4SCxLQUFqQixDQUFOLENBQWpCO0FBQ0Q7O0FBQ0QsVUFBTWpJLE1BQU0sR0FBRyxFQUFmO0FBQ0FBLFlBQU0sQ0FBQ2lJLEtBQUQsQ0FBTixHQUFnQlEsT0FBTyxDQUFDNE0sSUFBUixDQUFhLE1BQWIsRUFBbUJsSCxPQUFPLENBQUNsRyxLQUFELENBQTFCLENBQWhCO0FBRUEsYUFBT3ZMLE9BQU8sQ0FBQ3lSLE9BQVIsQ0FBZ0JuSyxJQUFoQixFQUFzQnhHLEdBQXRCLENBQTBCd0MsTUFBMUIsRUFBa0M5QyxJQUFsQyxDQUF1QztBQUFBLGVBQU04QyxNQUFNLENBQUNpSSxLQUFELENBQVo7QUFBQSxPQUF2QyxDQUFQO0FBQ0QsS0FSSSxDQUFQO0FBU0Q7QUE3THdCLENBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztRQUVTcU4sSyxHQUFBQSxXO1FBQU9DLE8sR0FBQUEsbUI7UUFBU0MsZSxHQUFBQSw2QjtRQUFpQnRaLE8sR0FBQUEsZTtRQUFTMlcsSyxHQUFBQSxXO1FBQU80QyxhLEdBQUFBLHlCO1FBQWVDLFMsR0FBQUEsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ1IxRDtBQUNicFosU0FBTyxFQUFFSSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFdBQWhCLEdBQThCTixPQUQxQjtBQUViZ0osVUFBUSxFQUFDO0FBQ1A1RSxhQUFTLEVBQUU7QUFDVGlWLE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLElBQW5CLENBRE07QUFFVEMsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FGTTtBQUdUQyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUhNO0FBSVR6VyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUpNO0FBS1RILE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLENBTE07QUFNVEQsT0FBQyxFQUFFLENBQUMsVUFBRCxFQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FOTTtBQU9ULFlBQU0sQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FQRztBQVFUSCxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLElBQVgsQ0FSTTtBQVNURSxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLElBQVgsQ0FUTTtBQVVURyxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FWTTtBQVdULFdBQUssQ0FBQyxFQUFELEVBQUssSUFBTCxDQVhJO0FBWVQsV0FBSyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBWkk7QUFhVDJRLGFBQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLEtBQWxCLENBYkE7QUFjVEMsZUFBUyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsQ0FkRjtBQWVUM1EsUUFBRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULENBZks7QUFnQlQ0USxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTDtBQWhCSyxLQURKO0FBbUJQakgsV0FBTyxFQUFFO0FBQ1AsV0FBSztBQUFFRCxhQUFLLEVBQUU7QUFBVCxPQURFO0FBRVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUZFO0FBR1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUhFO0FBSVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUpFO0FBS1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxFO0FBTVBoSyxPQUFDLEVBQUU7QUFBRWdLLGFBQUssRUFBRTtBQUFUO0FBTkksS0FuQkY7QUEyQlB4RyxXQUFPLEVBQUU7QUFDUG9JLGNBQVEsRUFBRSxJQURIO0FBRVBwSCxnQkFBVSxFQUFFLEtBRkw7QUFHUHdILGdCQUFVLEVBQUUsSUFITDtBQUlQRixXQUFLLEVBQUUsS0FKQTtBQUtQL0csWUFBTSxFQUFFLE9BTEQ7QUFNUGtTLGNBQVEsRUFBRSxNQU5IO0FBT1BDLFVBQUksRUFBRSxNQVBDO0FBUVBwUSxjQUFRLEVBQUUsSUFSSDtBQVNQb0UsWUFBTSxFQUFFLFdBVEQ7QUFVUEUsVUFBSSxFQUFFLE1BVkM7QUFXUEssUUFBRSxFQUFFLEVBWEc7QUFZUG5ELGdCQUFVLEVBQUU7QUFaTCxLQTNCRjtBQXlDUFksU0FBSyxFQUFFO0FBQ0wxTCxZQUFNLEVBQUU7QUFESCxLQXpDQTtBQTRDUHVKLFFBQUksRUFBRTtBQUNKb1EsWUFBTSxFQUFFLElBREo7QUFFSnJHLGNBQVEsRUFBRSxJQUZOO0FBR0pDLGlCQUFXLEVBQUUsSUFIVDtBQUlKTSxnQkFBVSxFQUFFLEtBSlI7QUFLSitGLGVBQVMsRUFBRSxLQUxQO0FBTUo1UCxpQkFBVyxFQUFFLElBTlQ7QUFPSkUsaUJBQVcsRUFBRSxJQVBUO0FBUUpWLGFBQU8sRUFBRSxJQVJMO0FBU0pxUSxpQkFBVyxFQUFFLEtBVFQ7QUFVSnRQLGVBQVMsRUFBRSxJQVZQO0FBV0p3RCxrQkFBWSxFQUFFLEtBWFY7QUFZSjZGLGFBQU8sRUFBRSxXQVpMO0FBYUp4RyxnQkFBVSxFQUFFLEVBYlI7QUFjSjBHLGlCQUFXLEVBQUUsSUFkVDtBQWVKQyxjQUFRLEVBQUU7QUFmTixLQTVDQztBQTZEUGpSLE1BQUUsRUFBRTtBQUNGdU0sVUFBSSxFQUFFO0FBQ0p5SyxZQUFJLEVBQUU7QUFBRTFLLGtCQUFRLEVBQUU7QUFBWixTQURGO0FBRUoySyxZQUFJLEVBQUU7QUFBRTNLLGtCQUFRLEVBQUU7QUFBWixTQUZGO0FBR0p3QyxhQUFLLEVBQUU7QUFBRXhDLGtCQUFRLEVBQUU7QUFBWixTQUhIO0FBSUozQyxlQUFPLEVBQUU7QUFBRTJDLGtCQUFRLEVBQUU7QUFBWixTQUpMO0FBS0o0SyxlQUFPLEVBQUU7QUFBRTVLLGtCQUFRLEVBQUU7QUFBWixTQUxMO0FBTUo3RCxhQUFLLEVBQUU7QUFBRTZELGtCQUFRLEVBQUU7QUFBWixTQU5IO0FBT0o2SyxhQUFLLEVBQUU7QUFBRTdLLGtCQUFRLEVBQUU7QUFBWixTQVBIO0FBUUo0RSxjQUFNLEVBQUU7QUFBRTVFLGtCQUFRLEVBQUU7QUFBWjtBQVJKLE9BREo7QUFXRkcsV0FBSyxFQUFFO0FBWEw7QUE3REcsR0FGSTtBQTZFYnZKLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFERixHQTdFSTtBQWdGYmlHLFdBQVMsRUFBRSxFQWhGRTtBQWlGYkosTUFBSSxFQUFFO0FBQ0o3QyxZQUFRLEVBQUUsS0FETjtBQUVKakQsV0FBTyxFQUFFLEtBRkw7QUFHSmtHLGFBQVMsRUFBRTtBQUhQO0FBakZPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FBO0FBRWJwRSxzQkFBb0IsRUFBRSxFQUZUO0FBSWI4USxpQkFBZSxFQUFFLEVBSko7QUFNYnNCLGFBQVcsRUFBRTtBQUNYQyxhQUFTLEVBQUUsU0FEQTtBQUVYQyxTQUFLLEVBQUUsU0FGSTtBQUdYQyxVQUFNLEVBQUUsU0FIRztBQUlYQyxVQUFNLEVBQUUsU0FKRztBQUtYQyxPQUFHLEVBQUUsU0FMTTtBQU1YQyxVQUFNLEVBQUUsU0FORztBQU9YQyxRQUFJLEVBQUUsU0FQSztBQVFYQyxTQUFLLEVBQUU7QUFSSTtBQU5BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FBO0FBQ2JDLFVBQVEsRUFBRSxDQURHO0FBRWJDLDBCQUF3QixFQUFFLENBRmI7QUFHYkMsVUFBUSxFQUFFLENBSEc7QUFJYkMsa0JBQWdCLEVBQUUsQ0FKTDtBQUtiQyx1QkFBcUIsRUFBRSxDQUxWO0FBTWJDLHNCQUFvQixFQUFFLENBTlQ7QUFPYkMsZ0JBQWMsRUFBRSxDQVBIO0FBUWJDLHFCQUFtQixFQUFFLENBUlI7QUFTYkMsbUJBQWlCLEVBQUUsQ0FUTjtBQVViQyxtQkFBaUIsRUFBRSxFQVZOO0FBV2JDLHFCQUFtQixFQUFFLEVBWFI7QUFZYkMsbUJBQWlCLEVBQUUsRUFaTjtBQWFiQyxxQkFBbUIsRUFBRSxFQWJSO0FBY2JDLGtCQUFnQixFQUFFLEVBZEw7QUFlYkMscUJBQW1CLEVBQUUsRUFmUjtBQWdCYkMsa0JBQWdCLEVBQUUsRUFoQkw7QUFpQmJDLG9CQUFrQixFQUFFLEVBakJQO0FBa0JiQyxpQkFBZSxFQUFFLEVBbEJKO0FBbUJiQyxvQ0FBa0MsRUFBRSxFQW5CdkI7QUFvQmJDLHFDQUFtQyxFQUFFLEVBcEJ4QjtBQXFCYkMsbUNBQWlDLEVBQUUsRUFyQnRCO0FBc0JiQyxvQkFBa0IsRUFBRSxFQXRCUDtBQXVCYkMsc0JBQW9CLEVBQUUsRUF2QlQ7QUF3QmJDLHVCQUFxQixFQUFFLEVBeEJWO0FBeUJiQyx1QkFBcUIsRUFBRSxFQXpCVjtBQTBCYkMsZ0NBQThCLEVBQUUsRUExQm5CO0FBMkJiQyxpQ0FBK0IsRUFBRSxFQTNCcEI7QUE0QmJDLGNBQVksRUFBRSxFQTVCRDtBQTZCYkMseUJBQXVCLEVBQUUsRUE3Qlo7QUE4QmJDLG9DQUFrQyxFQUFFLEVBOUJ2QjtBQStCYkMsbUJBQWlCLEVBQUUsRUEvQk47QUFnQ2JDLGlCQUFlLEVBQUUsRUFoQ0o7QUFpQ2JDLDRCQUEwQixFQUFFLEVBakNmO0FBa0NiQyw0QkFBMEIsRUFBRSxFQWxDZjtBQW1DYkMsNEJBQTBCLEVBQUUsRUFuQ2Y7QUFvQ2JDLHdCQUFzQixFQUFFLEVBcENYO0FBc0NiQyxlQXRDYSx5QkFzQ0NsUixHQXRDRCxFQXNDTTtBQUNqQixTQUFLLElBQUlVLEdBQVQsSUFBZ0IsSUFBaEIsRUFBc0I7QUFDcEIsVUFBSSxLQUFLQSxHQUFMLEtBQWFWLEdBQWpCLEVBQXNCO0FBQ3BCLGVBQU9VLEdBQVA7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTyxFQUFQO0FBQ0Q7QUE5Q1ksQzs7Ozs7Ozs7Ozs7QUNBZix5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNME0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBUytELEdBQVQsRUFBYztBQUMxQixNQUFNQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxHQUFkLElBQXFCLEVBQXJCLEdBQTBCLEVBQXpDO0FBQ0EsTUFBSW5SLEdBQUo7O0FBQ0EsT0FBSyxJQUFJaUQsSUFBVCxJQUFpQmtPLEdBQWpCLEVBQXNCO0FBQ3BCLFFBQUlBLEdBQUcsQ0FBQzlNLGNBQUosQ0FBbUJwQixJQUFuQixDQUFKLEVBQThCO0FBQzVCakQsU0FBRyxHQUFHbVIsR0FBRyxDQUFDbE8sSUFBRCxDQUFUOztBQUNBLFVBQUlqRCxHQUFHLEtBQUssSUFBUixJQUFnQixRQUFPQSxHQUFQLE1BQWUsUUFBbkMsRUFBNkM7QUFDM0NvUixjQUFNLENBQUNuTyxJQUFELENBQU4sR0FBZW1LLEtBQUssQ0FBQ3BOLEdBQUQsQ0FBcEI7QUFDRCxPQUZELE1BR0VvUixNQUFNLENBQUNuTyxJQUFELENBQU4sR0FBZWpELEdBQWY7QUFDSDtBQUNGOztBQUNELFNBQU9vUixNQUFQO0FBQ0QsQ0FiRDs7UUFlU2hFLEssR0FBQUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlQ7O0FBRUEsSUFBTUcsYUFBYSxHQUFHLElBQUl2WixlQUFKLENBQVk7QUFDaENNLFVBRGdDLHNCQUNyQjtBQUFBOztBQUNUK1csVUFBTSxDQUFDa0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQXpZLEtBQUssRUFBSTtBQUN4QyxVQUFNMFksSUFBSSxHQUFHMVksS0FBSyxDQUFDMlksUUFBTixDQUFldlEsS0FBZixDQUFxQixHQUFyQixFQUEwQnFELEdBQTFCLEVBQWI7O0FBQ0EsVUFBSSxDQUFDLGVBQUQsRUFBa0IsZ0JBQWxCLEVBQW9DLGVBQXBDLEVBQXFELGtCQUFyRCxFQUF5RXZNLFFBQXpFLENBQWtGd1osSUFBbEYsQ0FBSixFQUE2RjtBQUMzRixhQUFJLENBQUNwYyxJQUFMLENBQVUsdUJBQVYsRUFBbUM7QUFDakM4RCxpQkFBTyxFQUFFSixLQUFLLENBQUNJLE9BRGtCO0FBRWpDQyxrQkFBUSxFQUFFTCxLQUFLLENBQUMyWSxRQUFOLENBQWV2USxLQUFmLENBQXFCLEdBQXJCLEVBQTBCcUQsR0FBMUIsR0FBZ0NyRCxLQUFoQyxDQUFzQyxHQUF0QyxFQUEyQzhMLEtBQTNDLEtBQXFELEdBQXJELEdBQTJEbFUsS0FBSyxDQUFDNFksTUFBakUsR0FBMEUsR0FBMUUsR0FBZ0Y1WSxLQUFLLENBQUM2WSxLQUYvRDtBQUdqQzFZLGNBQUksRUFBRyxJQUFJRyxJQUFKLEVBQUQsQ0FBYUMsT0FBYjtBQUgyQixTQUFuQztBQUtEO0FBQ0YsS0FURCxFQVNHLEtBVEg7QUFVRDtBQVorQixDQUFaLENBQXRCOztxQkFlZWtVLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNqQkEsVUFBU3FFLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUNsQyxPQUFLLElBQUl4YSxDQUFULElBQWN3YSxJQUFkO0FBQ0UsUUFBSSxDQUFDRCxJQUFJLENBQUN2YSxDQUFELENBQVQsRUFBY3VhLElBQUksQ0FBQ3ZhLENBQUQsQ0FBSixHQUFVd2EsSUFBSSxDQUFDeGEsQ0FBRCxDQUFkO0FBRGhCOztBQUdBLFNBQU91YSxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQsSUFBTXRFLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVztBQUVqQyxTQUFPOVksT0FBTyxDQUFDZ1AsSUFBUixDQUFhc08sS0FBYixDQUFtQjtBQUFFekgsaUJBQWEsRUFBRSxJQUFqQjtBQUF1QmxXLFVBQU0sRUFBRTtBQUEvQixHQUFuQixFQUEwRGEsSUFBMUQsQ0FBK0QsVUFBQXdPLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFSO0FBQUEsR0FBbkUsQ0FBUDtBQUNELENBSEQ7O1FBS1M4SixlLEdBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xULElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVN6VCxHQUFULEVBQWM7QUFDOUIsTUFBTWdZLENBQUMsR0FBR2hZLEdBQUcsQ0FBQ2lZLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLE1BQUlELENBQUMsS0FBSyxDQUFDLENBQVgsRUFBYyxPQUFPaFksR0FBUCxDQUFkLEtBQ0ssT0FBT0EsR0FBRyxDQUFDa1ksTUFBSixDQUFXLENBQVgsRUFBY0YsQ0FBZCxDQUFQO0FBQ04sQ0FKRDs7UUFNU3ZFLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlQsSUFBSTBFLE1BQU0sR0FBRyxFQUFiOzs7Ozs7Ozs7Ozt1QkFJS0MsSyxFQUFPQyxPLEVBQVM7QUFDakIsVUFBSSxDQUFDRixNQUFNLENBQUNDLEtBQUQsQ0FBWCxFQUFvQkQsTUFBTSxDQUFDQyxLQUFELENBQU4sR0FBZ0IsRUFBaEI7QUFFcEJELFlBQU0sQ0FBQ0MsS0FBRCxDQUFOLENBQWNqYSxJQUFkLENBQW1Ca2EsT0FBbkI7QUFDRDs7O3lCQUNJbmUsTSxFQUFpQjtBQUFBOztBQUFBLHdDQUFOb2UsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3BCcGUsWUFBTSxHQUFHQSxNQUFNLENBQUNpTixLQUFQLENBQWEsR0FBYixDQUFUO0FBRUEsVUFBSTdKLENBQUMsR0FBRyxDQUFSO0FBQUEsVUFBV3NGLENBQUMsR0FBRzFJLE1BQU0sQ0FBQ3NFLE1BQXRCO0FBQUEsVUFBOEIrWixLQUE5Qjs7QUFFQSxhQUFPamIsQ0FBQyxHQUFHc0YsQ0FBWCxFQUFjdEYsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCaWIsYUFBSyxHQUFHSixNQUFNLENBQUNqZSxNQUFNLENBQUNvRCxDQUFELENBQVAsQ0FBZDtBQUVBLFlBQUlpYixLQUFKLEVBQ0VBLEtBQUssQ0FBQ3ZOLE9BQU4sQ0FBYyxVQUFBcU4sT0FBTztBQUFBLGlCQUFJQSxPQUFPLENBQUNHLEtBQVIsQ0FBYyxLQUFkLEVBQW9CRixJQUFwQixDQUFKO0FBQUEsU0FBckI7QUFDSDtBQUNGOzs7NEJBQ09GLEssRUFBZ0I7QUFBQSx5Q0FBTkUsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLGFBQU83ZCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IrZCxXQUFoQixDQUE0QjtBQUFFQyxVQUFFLEVBQUVOLEtBQU47QUFBYUUsWUFBSSxFQUFFQSxJQUFuQjtBQUF5QkssWUFBSSxFQUFFO0FBQS9CLE9BQTVCLFdBQXlFLFlBQU0sQ0FBRSxDQUFqRixDQUFQO0FBQ0Q7OzswQkFDS0MsTyxFQUFTQyxJLEVBQWdCO0FBQUEseUNBQVBDLEtBQU87QUFBUEEsYUFBTztBQUFBOztBQUM3QixhQUFPLFlBQW1CO0FBQUEsMkNBQVBDLEtBQU87QUFBUEEsZUFBTztBQUFBOztBQUN4QixlQUFPRixJQUFJLENBQUNMLEtBQUwsQ0FBV0ksT0FBWCxFQUFvQkUsS0FBSyxDQUFDRSxNQUFOLENBQWFELEtBQWIsQ0FBcEIsQ0FBUDtBQUNELE9BRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYTllLE87O1FBQUFBLE87OztBQUVYLG1CQUFZZ2YsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmOztBQUVBLFNBQUtDLENBQUwsSUFBVUQsR0FBVjtBQUFlLFlBQUtDLENBQUwsSUFBVUQsR0FBRyxDQUFDQyxDQUFELENBQWI7QUFBZjs7QUFFQSxRQUFJaGYsTUFBTSxHQUFHLE1BQUtBLE1BQWxCO0FBQUEsUUFDSWlmLFNBREo7QUFBQSxRQUNlRCxDQURmO0FBQUEsUUFDa0J2WSxDQURsQjtBQUFBLFFBQ3FCMFgsT0FEckI7O0FBR0EsUUFBSW5lLE1BQU0sS0FBS2lmLFNBQVMsR0FBR2pmLE1BQU0sQ0FBQ0MsR0FBeEIsQ0FBVixFQUF3QztBQUN0QyxXQUFLd0csQ0FBTCxJQUFVd1ksU0FBVixFQUFxQjtBQUNuQmQsZUFBTyxHQUFHYyxTQUFTLENBQUN4WSxDQUFELENBQW5CO0FBQ0EsWUFBSSxNQUFLMFgsT0FBTCxDQUFKLEVBQ0UsTUFBS3ZjLEVBQUwsQ0FBUTZFLENBQVIsRUFBVyxNQUFLeUwsS0FBTCxnQ0FBaUIsTUFBS2lNLE9BQUwsQ0FBakIsQ0FBWDtBQUNIO0FBQ0Y7O0FBQ0QsS0FBQyxNQUFLOWQsUUFBTixJQUFrQixNQUFLQSxRQUFMLEVBQWxCO0FBZmU7QUFnQmhCOzs7RUFsQjBCNmUscUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWF4SSxLOztRQUFBQSxLOzs7QUFFWCxpQkFBWXFJLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZiwrRUFBTUEsR0FBTjtBQUVBLFVBQUtJLElBQUwsR0FBWSxJQUFaO0FBRUEsUUFBTWpXLElBQUksR0FBRyxNQUFLQSxJQUFsQjtBQUVBM0ksV0FBTyxDQUFDQyxPQUFSLENBQWdCNGUsU0FBaEIsQ0FBMEJ6ZSxXQUExQixDQUFzQyxNQUFLdVIsS0FBTCxnQ0FBaUIsTUFBS21OLFdBQXRCLENBQXRDO0FBRUEsUUFBSW5XLElBQUksS0FBSyxZQUFULElBQXlCQSxJQUFJLEtBQUssWUFBdEMsRUFBb0QsTUFBS29XLFdBQUw7QUFFcEQsUUFBSXRmLE1BQU0sR0FBRyxNQUFLQSxNQUFsQjtBQUFBLFFBQ0l1ZixZQURKO0FBQUEsUUFDa0JDLHFCQURsQjs7QUFHQSxRQUFJeGYsTUFBSixFQUFZO0FBQ1Z1ZixrQkFBWSxHQUFHdmYsTUFBTSxDQUFDNFcsTUFBdEI7O0FBQ0EsVUFBSTJJLFlBQUosRUFBa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEIsK0JBQWNBLFlBQWQ7QUFBQSxnQkFBUzlZLENBQVQ7O0FBQ0Usa0JBQUs3RSxFQUFMLENBQVE2RSxDQUFSLEVBQVcsTUFBS3lMLEtBQUwsZ0NBQWlCLE1BQUtxTSxXQUF0QixFQUFtQzlYLENBQW5DLENBQVg7QUFERjtBQURnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2pCOztBQUNEK1ksMkJBQXFCLEdBQUd4ZixNQUFNLENBQUM2VyxVQUEvQjs7QUFDQSxVQUFJMkkscUJBQUosRUFBMkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsZ0NBQWNBLHFCQUFkO0FBQUEsZ0JBQVNDLENBQVQ7O0FBQ0Usa0JBQUs3ZCxFQUFMLENBQVE2ZCxDQUFSLEVBQVcsTUFBS3ZOLEtBQUwsZ0NBQWlCLE1BQUt3TixXQUF0QixFQUFtQ0QsQ0FBbkMsQ0FBWDtBQURGO0FBRHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHMUI7QUFDRjs7QUF6QmM7QUEwQmhCOzs7O2dDQUNXRSxHLEVBQUs1WixNLEVBQVFDLFksRUFBYztBQUNyQzJaLFNBQUcsQ0FBQ3ZCLElBQUosR0FBV3VCLEdBQUcsQ0FBQ3ZCLElBQUosSUFBWSxFQUF2QjtBQUNBLFVBQUlBLElBQUksR0FBRyxHQUFHVSxNQUFILENBQVVhLEdBQUcsQ0FBQ25CLEVBQWQsRUFBa0JtQixHQUFHLENBQUN2QixJQUF0QixDQUFYO0FBQ0EsVUFBSSxDQUFDclksTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQ3dCLElBQXZCLEVBQTZCNlcsSUFBSSxHQUFHQSxJQUFJLENBQUNVLE1BQUwsQ0FBWS9ZLE1BQVosRUFBb0JDLFlBQXBCLENBQVA7QUFDN0IsV0FBSzdFLElBQUwsQ0FBVW1kLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JGLElBQXRCO0FBQ0EsVUFBSXVCLEdBQUcsQ0FBQ2xCLElBQVIsRUFBYyxPQUFPLElBQVAsQ0FMdUIsQ0FLVjs7QUFDM0IsYUFBTyxLQUFQO0FBQ0Q7OztnQ0FDV2hZLEMsRUFBWTtBQUN0QixVQUFNeUMsSUFBSSxHQUFHLEtBQUtBLElBQWxCOztBQURzQix3Q0FBTmtWLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUV0QixVQUFJclosR0FBRyxHQUFHO0FBQUV5WixVQUFFLEVBQUUvWCxDQUFOO0FBQVMyWCxZQUFJLEVBQUVBO0FBQWYsT0FBVjtBQUNBLFVBQUlsVixJQUFJLEtBQUssU0FBYixFQUF3QjNJLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQitkLFdBQWhCLENBQTRCeFosR0FBNUIsV0FBdUMsWUFBTSxDQUFFLENBQS9DLEVBQXhCLEtBQ0ssSUFBSW1FLElBQUksS0FBSyxZQUFiLEVBQTJCO0FBQzlCLFlBQU0wVyxPQUFPLEdBQUd4QixJQUFJLENBQUNBLElBQUksQ0FBQzlaLE1BQUwsR0FBYyxDQUFmLENBQXBCO0FBQ0EsWUFBSVgsR0FBSjs7QUFDQSxZQUFJaWMsT0FBTyxLQUFLQyxTQUFaLEtBQTBCbGMsR0FBRyxHQUFHaWMsT0FBTyxDQUFDamMsR0FBeEMsQ0FBSixFQUFrRDtBQUNoRCxjQUFJQSxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUNwQnBELG1CQUFPLENBQUNnUCxJQUFSLENBQWFzTyxLQUFiLENBQW1CO0FBQUUzZCxvQkFBTSxFQUFFO0FBQVYsYUFBbkIsRUFBcUNhLElBQXJDLENBQTBDLFVBQUF3TyxJQUFJLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEQsc0NBQWdCQSxJQUFoQjtBQUFBLHNCQUFTNUwsSUFBVDtBQUNFcEQseUJBQU8sQ0FBQ2dQLElBQVIsQ0FBYWdQLFdBQWIsQ0FBeUI1YSxJQUFHLENBQUNOLEVBQTdCLEVBQWlDMEIsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqRCxhQUhEO0FBSUQsV0FMRCxNQUtPO0FBQ0x4RSxtQkFBTyxDQUFDZ1AsSUFBUixDQUFhZ1AsV0FBYixDQUF5QnFCLE9BQU8sQ0FBQ2pjLEdBQWpDLEVBQXNDb0IsR0FBdEMsV0FBaUQsWUFBTSxDQUFFLENBQXpEO0FBQ0Q7QUFDRixTQVRELE1BU087QUFDTHhFLGlCQUFPLENBQUNnUCxJQUFSLENBQWFzTyxLQUFiLENBQW1CO0FBQUM7QUFBRCxXQUFuQixFQUFnRTljLElBQWhFLENBQXFFLFVBQUF3TyxJQUFJLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDM0Usb0NBQWdCQSxJQUFoQjtBQUFBLG9CQUFTNUwsS0FBVDtBQUNFcEQsdUJBQU8sQ0FBQ2dQLElBQVIsQ0FBYWdQLFdBQWIsQ0FBeUI1YSxLQUFHLENBQUNOLEVBQTdCLEVBQWlDMEIsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7Z0NBQ1cwQixDLEVBQVk7QUFBQSx5Q0FBTjJYLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixVQUFNclosR0FBRyxHQUFHO0FBQUV5WixVQUFFLEVBQUUvWCxDQUFOO0FBQVMyWCxZQUFJLEVBQUVBO0FBQWYsT0FBWjtBQUNBLFVBQUksS0FBS2UsSUFBVCxFQUFlLEtBQUtBLElBQUwsQ0FBVU8sV0FBVixDQUFzQjNhLEdBQXRCO0FBQ2hCOzs7a0NBQ2E7QUFDWixVQUFJLENBQUMsS0FBSzRSLGtCQUFWLEVBQThCO0FBQzVCLGFBQUttSixPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLN04sS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBSzROLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTVgsSUFBSSxHQUFHLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWE1ZSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JzZixPQUFoQixDQUF3QjtBQUFFdlksWUFBSSxFQUFFLEtBQUtBO0FBQWIsT0FBeEIsQ0FBdEM7QUFDQTRYLFVBQUksQ0FBQ2EsWUFBTCxDQUFrQnJmLFdBQWxCLENBQThCO0FBQUEsZUFBTSxNQUFJLENBQUN3ZSxJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCYyxFLEVBQUk7QUFBQTs7QUFDekIxZixhQUFPLENBQUNDLE9BQVIsQ0FBZ0IwZixTQUFoQixDQUEwQnZmLFdBQTFCLENBQXNDLFVBQUF3ZSxJQUFJLEVBQUk7QUFDNUNBLFlBQUksQ0FBQ0MsU0FBTCxDQUFlemUsV0FBZixDQUEyQixNQUFJLENBQUN1UixLQUFMLENBQVcsTUFBWCxFQUFpQixNQUFJLENBQUNtTixXQUF0QixDQUEzQjtBQUNBLFNBQUNZLEVBQUQsSUFBT0EsRUFBRSxFQUFUO0FBQ0QsT0FIRDtBQUlEOzs7O0VBbEZ3QmxnQixlIiwiZmlsZSI6ImJhY2tncm91bmQvYmFja2dyb3VuZC53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFja2dyb3VuZC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi4vaWNvbnMvb24xNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24xOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb242NC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy90bTQ4LnBuZydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkFHRSBmcm9tICcuL3N0b3JhZ2UnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9lcnJvci1sb2dnaW5nJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlcidcclxuaW1wb3J0IF9OT1RJRklDQVRJT05TIGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgX1RBQlMgZnJvbSAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCBfV0lORE9XUyBmcm9tICcuL21vZHVsZXMvd2luZG93cydcclxuaW1wb3J0IF9TSURFQkFSUyBmcm9tICcuL21vZHVsZXMvc2lkZWJhcnMnXHJcbmltcG9ydCBfTkFNRVIgZnJvbSAnLi9tb2R1bGVzL25hbWVyJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dC1tZW51J1xyXG4vL2ltcG9ydCBfSURCIGZyb20gJy4vbW9kdWxlcy9pbmRleGVkZGInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL3N0b3JlLW1hbmFnZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3RvZ2dsZU9uSW1wb3J0JyxcclxuICAgICAgJ2luaXRpYWxpemVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnbWlncmF0ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdjaGVja2VkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAndG9nZ2xlOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnRiYnBvd2VyLXNldHRpbmdzJzogJ3NldFRCQkFjdGlvbidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmU6IHRydWUsXHJcbiAgdmVyc2lvbjogJycsXHJcbiAgbG9hZFJlYXNvbjogJycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFZlcnNpb24gPSB0aGlzLnZlcnNpb24gPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgICBpZiAoIXZlcnNpb24gfHwgdmVyc2lvbiAhPT0gY3VycmVudFZlcnNpb24pIHtcclxuICAgICAgICAgIGNvbnN0IGxvYWRSZWFzb24gPSB0aGlzLmxvYWRSZWFzb24gPSBkZXRhaWxzLnJlYXNvbjtcclxuICAgICAgICAgIGNvbnN0IHByZXZWZXJzaW9uID0gZGV0YWlscy5wcmV2aW91c1ZlcnNpb24gfHwgJzInO1xyXG4gICAgICAgICAgaWYgKGxvYWRSZWFzb24gJiYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnIHx8IGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGxvYWRSZWFzb24gKyAnOmFwcCcsIHByZXZWZXJzaW9uLCBsb2FkUmVhc29uKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCd2ZXJzaW9uJywgdGhpcy52ZXJzaW9uKTtcclxuXHJcbiAgICAvL19JREIoKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG4gICAgX1NJREVCQVJTKCk7XHJcblxyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFjdGl2YXRlKHRydWUpKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6YXBwJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvYWRSZWFzb24pKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGFjdGl2YXRlKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGFjdGl2YXRlO1xyXG4gICAgdGhpcy50b2dnbGVCcm93c2VyQWN0aW9uSWNvbihhY3RpdmUpO1xyXG4gICAgdGhpcy5zZXRUQkJBY3Rpb24oKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIGxldCBtb2RlID0gIXRoaXMuYWN0aXZlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZShtb2RlKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDphZGRvbicsIG1vZGUpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlT25JbXBvcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGVCcm93c2VyQWN0aW9uSWNvbihvbikge1xyXG4gICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEljb24oe1xyXG4gICAgICBwYXRoOiBvbiA/IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29uMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29uMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29uMzIucG5nJ1xyXG4gICAgICB9IDoge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb2ZmMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29mZjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vZmYzMi5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0VEJCQWN0aW9uKGFkZCkge1xyXG4gICAgaWYgKHR5cGVvZiBhZGQgPT09ICdib29sZWFuJykge1xyXG4gICAgICBpZiAoYWRkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndGJicG93ZXInKS50aGVuKGVuYWJsZWQgPT4ge1xyXG4gICAgICAgIGlmIChlbmFibGVkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFkZFRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBjb25zdCB0YmJIYW5kbGVyID0gdGhpcy50YmJIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YmJIYW5kbGVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZVRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAodGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnY29udGVudC90YmItbWVudS90YmItbWVudS5odG1sJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLnRiYkhhbmRsZXIpO1xyXG4gICAgICB0aGlzLnRiYkhhbmRsZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXRlbXM6IHtcclxuICAgICAgbTogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICB3OiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIGQ6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgYjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICAnLWInOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIG46IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgc2I6IHsgY29udGV4dHM6IFsnYWxsJywgJ3RhYiddIH0sXHJcbiAgICAgIGM6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IFtdLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBsZXQgaXRlbTtcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgaXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgaXRlbS5pZCA9IGk7XHJcbiAgICAgICAgaXRlbS50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjdHhfJyArIChpID09PSAnLWInID8gJ2RiJyA6IGkpKTtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSAoaW5mb3MsIHRhYikgPT4gdGhpcy5vbkNsaWNrKGluZm9zLCB0YWIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZShpZCkge1xyXG4gICAgICBpZiAoIXRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLmNyZWF0ZSh0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmUoaWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5zcGxpY2UodGhpcy5jcmVhdGVkLmluZGV4T2YoaWQpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUFsbCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5sZW5ndGgpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKG9uKSB7XHJcbiAgICAgIGlmIChvbikgdGhpcy51cGRhdGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUFsbCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlZDtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzaG9ydGN1dHMnKS50aGVuKHNob3J0Y3V0cyA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICBpZiAoc2hvcnRjdXRzW2ldWzJdKSB0aGlzLmNyZWF0ZShpKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrKGluZm9zLCB0YWIpIHtcclxuICAgICAgY29uc3QgaWQgPSBpbmZvcy5tZW51SXRlbUlkO1xyXG4gICAgICBpZiAoaWQgPT09ICd3JykgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIGluZm9zLnNlbGVjdGlvblRleHQpO1xyXG4gICAgICBlbHNlIGlmIChpZCA9PT0gJ3NiJykgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLm9wZW4oKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ2N0eDonICsgaWQsIG51bGwsIG51bGwsIHsgdGFiOiB0YWIuaWQgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlcnJvcic6ICdsb2cnLFxyXG4gICAgICAnd2FybmluZyc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICdlcnJvcjppbXBvcnQnOiAnbG9nJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZSc6ICdsb2cnLFxyXG4gICAgICAnY2xlYXI6bG9ncyc6ICdjbGVhcicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZSc6ICdsb2cnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbG9nKGVycm9yLCByZXBvcnQpIHtcclxuICAgIGxldCBsb2csIG1zZztcclxuICAgIGlmIChlcnJvci50aW1lKSB7XHJcbiAgICAgIGxvZyA9IFtlcnJvci50aW1lLCBlcnJvci5tZXNzYWdlICsgJyBbJyArIGVycm9yLmxvY2F0aW9uICsgJ10nXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZyA9IFsobmV3IERhdGUoKS5nZXRUaW1lKCkpLCBfTE9HX0tFWVNbZXJyb3JdIHx8IGVycm9yXTtcclxuICAgICAgaWYgKHJlcG9ydCAmJiB0eXBlb2YgcmVwb3J0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGxvZy5wdXNoKHJlcG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgbG9nKS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzIGxvZ2dlZDplcnJvcicsIGxvZykpO1xyXG4gIH0sXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIHsgY2xlYXI6IHRydWUgfSkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncycpKTtcclxuICB9LFxyXG4gIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyk7XHJcbiAgfSxcclxuICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFJlc3RvcmF0aW9uKHJlcG9ydCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScsIHJlcG9ydCk7XHJcbiAgfSxcclxuICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfdXJsJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFBCTSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3BibScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoZWNrOnVybCc6ICdjaGVja1VybCcsXHJcbiAgICAgICdzYXZlOmVudHJ5Pyc6ICdvblNhdmVOZXdSZXF1ZXN0JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnb25VcGRhdGVSZXF1ZXN0JyxcclxuICAgICAgJ25hbWU6ZW50cnk/JzogJ29uTmFtaW5nUmVxdWVzdCcsXHJcbiAgICAgICdvcGVuZWQ6ZW50cnknOiAndGVtcFNhdmVFbnRyeU1ldGFEYXRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgY2hlY2tVcmwodXJsLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgY29uc3QgaGFzaGxlc3NQYWdlVXJsID0gIF9IQVNITEVTUyh1cmwpO1xyXG5cclxuICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbWF0Y2hlcyA9IFtdLFxyXG4gICAgICAgICAgbG9ja2VkTWF0Y2hlcyA9IFtdLFxyXG4gICAgICAgICAgZW50cnksIHBhZ2VVcmwsIGVudHJ5VXJsO1xyXG5cclxuICAgICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2VdO1xyXG4gICAgICAgIHBhZ2VVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gdXJsIDogaGFzaGxlc3NQYWdlVXJsO1xyXG4gICAgICAgIGVudHJ5VXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IGVudHJ5LnVybCA6IF9IQVNITEVTUyhlbnRyeS51cmwpO1xyXG5cclxuICAgICAgICBpZiAocGFnZVVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIG1hdGNoZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBpZiAoZW50cnkubG9ja2VkKSBsb2NrZWRNYXRjaGVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGVudHJpZXM6IG1hdGNoZXMsIHJlY2VudGx5T3BlbmVkRW50cnk6IHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSB9KTtcclxuICAgICAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVudHJ5ID0gbG9ja2VkTWF0Y2hlcy5sZW5ndGggPyBsb2NrZWRNYXRjaGVzIDogIW1hdGNoZXMubGVuZ3RoID8gbnVsbCA6IG1hdGNoZXNbMF07XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBlbnRyeSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnY2FuY2VsZWQ6c2F2ZS1hZnRlci1jYW5jZWxlZC1yZXN0b3JhdGlvbic6ICdvbkNhbmNlbGVkU2F2ZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAgICdmYWlsZWQ6aW1wb3J0JzogJ29uRmFpbGVkSW1wb3J0JyxcclxuICAgICAgICAnZXJyb3I6aW1wb3J0JzogJ29uSW1wb3J0RXJyb3InLFxyXG4gICAgICAgICdpbXBvcnRlZDpzdG9yYWdlJzogJ29uSW1wb3J0U3VjY2VzcycsXHJcbiAgICAgICAgJ2Vycm9yJzogJ29uRXJyb3InLFxyXG4gICAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5KGNvbmRpdGlvbiwgbWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihzZXR0aW5ncykpIHtcclxuICAgICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RleHRtYXJrZXI6ICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0eXBlKSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnaWNvbnMvdG00OC5wbmcnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlZEVudHJ5KCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVkX2VudHJ5JyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnBibU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcGJtJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiB0cnVlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3VybCcpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRJbXBvcnQoZXJyb3IxLCBlcnJvcjIpIHtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjEpO1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMiA9IGVycm9yMiA/ICdcXG5cXG4nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IyKSA6ICcnO1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiB0cnVlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9mYWlsdXJlJywgZXJyTWVzc2FnZTEgKyBlcnJNZXNzYWdlMiksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydEVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHRydWUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3dhcm5pbmcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydFN1Y2Nlc3MoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHRydWUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnN1Y2Nlc3NOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNhbmNlbGVkU2F2ZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY2FuY2VsZWRfc2F2ZV93YXJuaW5nJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcihlcnJvciwgbmFtZSkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yLCBuYW1lKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlbGV0ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfR0VUX0FDVElWRV9UQUIsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdhY3RpdmF0ZWQ6dGFiJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdlbnRyeTpmb3VuZCc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOidzZW5kRW50cnknLFxyXG4gICAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJzogJ3NlbmRPcmRlcmVkTWFya3MnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczoge30sXHJcblxyXG4gICAgc2V0UGFuZWwodGFiSWQsIHVybCkge1xyXG4gICAgICB0aGlzLmlzT3BlbigpLnRoZW4ob3BlbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5zZXRQYW5lbCh7XHJcbiAgICAgICAgICAgIHBhbmVsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBjb250ZW50L3NpZGViYXIvc2lkZWJhci5odG1sIyR7dGFiSWR9XyR7dXJsfWApLFxyXG4gICAgICAgICAgICB0YWJJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnNpZGViYXJBY3Rpb24uaXNPcGVuKHt9KTtcclxuICAgIH0sXHJcbiAgICBzdG9yZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW50cmllc0ZvclRoaXNUYWIgPSB0aGlzLmVudHJpZXNbdGFiLmlkXTtcclxuICAgICAgICBsZXQgZW50cnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChlbnRyaWVzRm9yVGhpc1RhYikge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzRm9yVGhpc1RhYlt0YWIudXJsXSB8fCBlbnRyaWVzRm9yVGhpc1RhYltoYXNobGVzc1VybF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE9yZGVyZWRNYXJrcyhtYXJrcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5Om9yZGVyZWQtbWFya3MnLCBtYXJrcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXInLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdzYXZlQWN0aXZhdGlvblN0YXRlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJzogJ3RvZ2dsZVN5bmMnLFxyXG5cclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJzogJ2NoYW5nZVN0eWxlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJzogJ2NoYW5nZUF1dG9Ob3RlU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZyc6ICdjaGFuZ2VCZ0NvbG9yJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJzogJ2NoYW5nZU1hcmtNZXRob2QnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnOiAndG9nZ2xlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJzogJ2NoYW5nZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnOiAndG9nZ2xlQ3RtU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJzogJ2NoYW5nZVNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnOiAndG9nZ2xlSGFzaE9wdCcsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJzogJ3RvZ2dsZVByaXZTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZyc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZyc6ICd0b2dnbGVOb3RlT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3RvZ2dsZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZyc6ICd0b2dnbGVOb3RpZmljYXRpb25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJzogJ3RvZ2dsZVRCQlBvd2VyU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJzogJ2NoYW5nZVNvcnRPcHQnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZyc6ICdjaGFuZ2VWaWV3T3B0JyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcic6ICdyZW1vdmVDdXN0b21NYXJrZXInLFxyXG4gICAgICAnYWRkOmN1c3RvbS1tYXJrZXInOiAnYWRkQ3VzdG9tTWFya2VyJyxcclxuXHJcbiAgICAgICduYW1lZDplbnRyeSc6ICdzYXZlRW50cnknLFxyXG4gICAgICAncmVuYW1lZDplbnRyeSc6ICdzYXZlTmV3TmFtZScsXHJcbiAgICAgICdncmFudGVkOnVwZGF0ZS1lbnRyeSc6ICd1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcyc6ICdkZWxldGVFbnRyaWVzJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ3VwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbicsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJzogJ2NsZWFuRW50cmllcycsXHJcbiAgICAgICdzeW5jOmVudHJ5JzogJ3N5bmNFbnRyeScsXHJcbiAgICAgICd0YWc6ZW50cmllcyc6ICd0YWdFbnRyaWVzJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnOiAncmVtb3ZlVGFnJyxcclxuICAgICAgJ2FkZDp0YWcnOiAnYWRkVGFnJyxcclxuXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJzogJ2NoYW5nZVNCU2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJzogJ2NoYW5nZVRoZW1lU2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnOiAndXBkYXRlUGFnZU5vdGVzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlT25DaGFuZ2VkU3luYzogZmFsc2UsXHJcblxyXG4gIC8vIEFERE9OIE1FVEhPRFNcclxuICBzYXZlQWN0aXZhdGlvblN0YXRlKGFjdGl2ZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYWN0aXZlID0gYWN0aXZlOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNZTkMgTUVUSE9EU1xyXG4gIHRvZ2dsZVN5bmMoZmllbGQsIHZhbCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgZnVuY3Rpb24oc3luYykge1xyXG5cclxuICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcblxyXG4gICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICB9LCAnbG9jYWwnKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIHN5bmMgPT4ge1xyXG4gICAgICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgICAgICByZXR1cm4gc3luYztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6dG9nZ2xlLXN5bmMnLCBmaWVsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU0VUVElOR1MgTUVUSE9EU1xyXG4gIHVwZGF0ZVNldHRpbmdzKHVwZGF0ZXIsIHNldHRpbmcsIGVycm9yKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgdXBkYXRlcilcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOicgKyBzZXR0aW5nICsgJy1zZXR0aW5ncycpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBpZiAoZXJyb3IpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xyXG4gIH0sXHJcbiAgYWRkQ3VzdG9tTWFya2VyKGtleSwgc3R5bGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gIHsgc3R5bGUgfTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IG1hcmtlci5zdHlsZS5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUF1dG9Ob3RlU2V0dGluZyhrZXksIGF1dG9ub3RlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5hdXRvbm90ZSA9IGF1dG9ub3RlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvbm90ZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3RvZ2dsZV9hdXRvbm90ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNYXJrTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPSBtZXRob2Q7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmstbWV0aG9kJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbWFya19tZXRob2QnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2hvcnRjdXRTZXR0aW5nKGtleSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzFdID0gc3RhdHVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX190b2dnbGVfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2hvcnRjdXRTZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMF0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU29ydE9wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzb3J0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVZpZXdPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS52aWV3ID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ZpZXcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ3VzdG9tU2VhcmNoKHZhbHVlcykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCA9IHZhbHVlczsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3VzdG9tLXNlYXJjaCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zZWFyY2gnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ291bnRQZXJQYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkucHAgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY291bnQtcGVyLXBhZ2UnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQ3RtU2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzJdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N0bScsXHJcbiAgICAgICdlcnJvcl9zYXZlX2N0bSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXRPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaW1tdXQgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2ltbXV0b3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRHJvcExvc3Nlc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdkcm9wbG9zc2Vzb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSGFzaE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdoYXNob3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVByaXZTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ByaXZzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfcHJpdidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VOYW1pbmdPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkubmFtaW5nID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICduYW1pbmcnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9uYW1pbmcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICBzd2l0Y2hRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RpZmljYXRpb25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNaXNjU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWlzYycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVUQkJQb3dlclNldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3RiYnBvd2VyJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNCU2V0dGluZ3ModGFiLCB1bmZvbGRlZCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGFic1t0YWJdLnVuZm9sZGVkID0gdW5mb2xkZWQ7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuICBjaGFuZ2VUaGVtZVNldHRpbmdzKHRoZW1lKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50aGVtZSA9IHRoZW1lOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEhJU1RPUlkgTUVUSE9EU1xyXG4gIGNsZWFuRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBpID0gbmFtZXMubGVuZ3RoLCBuYW1lO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXNbbmFtZV0pIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZWxzZSBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdsb2NhbCcpIHsgdGhpcy5lbWl0KCdjbGVhbmVkOmVudHJpZXMnKTsgfX0pXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9jbGVhbl9oaXN0b3J5JykpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuY2xlYW5FbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pO1xyXG4gIH0sXHJcbiAgc2F2ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBlbnRyeS5sb3N0ID0gW107XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgnc2F2ZWQ6ZW50cnknLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeScsICdlcnJvcl9zYXZlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgc2F2ZU5ld05hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdKTtcclxuICAgICAgZW50cnkubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSA9IGVudHJ5O1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktbmFtZScsIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSwgb2xkTmFtZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGFyZWEpIHtcclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIGNvbnN0IHJlY2VpdmVkQ29tcGxldGVFbnRyeSA9ICEhZW50cnkudXJsO1xyXG4gICAgbGV0IGZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaWYgKHJlY2VpdmVkQ29tcGxldGVFbnRyeSkge1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LmVudHJpZXNbbmFtZV0pIHtcclxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBlbnRyeS5zeW5jZWQ7XHJcbiAgICAgICAgICBmb3IgKGxldCBlIGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5oYXNPd25Qcm9wZXJ0eShlKSkge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXVtlXSA9IGVudHJ5W2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoIWZvdW5kKSB7IHRoaXMudXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGVudHJ5LnN5bmNlZCA/ICdsb2NhbCcgOiAnc3luYycpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktb24tc2F2ZScsIGVudHJ5KSk7XHJcbiAgfSxcclxuICBkZWxldGVFbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllcyAmJiBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB1cmwgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0udXJsO1xyXG4gICAgICAgICAgaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5oYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cnknLCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpkZWxldGUtZW50cmllcycsICdlcnJvcl9kZWxfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmRlbGV0ZUVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdkZWxldGVkOmVudHJpZXMnKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24oZW50cnlOYW1lLCByZXN0b3JlZE1hcmtzLCBsb3N0TWFya3MsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzID0gaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICAgIGNvbnN0IHJlc3RvcmVkTWFya3NJRHMgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrc0lEcyA9IFtdO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLm1hcmtzID0gcmVzdG9yZWRNYXJrcztcclxuXHJcbiAgICAgICAgICByZXN0b3JlZE1hcmtzLmZvckVhY2gobWFyayA9PiByZXN0b3JlZE1hcmtzSURzLnB1c2gobWFyay5pZCkpO1xyXG5cclxuICAgICAgICAgIGxldCBsID0gb2xkTG9zdE1hcmtzLmxlbmd0aCwgaWQ7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IG9sZExvc3RNYXJrc1tsXS5pZDtcclxuICAgICAgICAgICAgaWYgKHJlc3RvcmVkTWFya3NJRHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3NJRHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsb3N0TWFya3MuZm9yRWFjaChtYXJrID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvbGRMb3N0TWFya3NJRHMuaW5jbHVkZXMobWFyay5pZCkpIG9sZExvc3RNYXJrcy5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCA9IG9sZExvc3RNYXJrcztcclxuXHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzeW5jRW50cnkobmFtZSwgdmFsKSB7XHJcbiAgICBjb25zdCBhcmVhXzEgPSB2YWwgPyAnbG9jYWwnIDogJ3N5bmMnO1xyXG4gICAgY29uc3QgYXJlYV8yID0gdmFsID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBsZXQgZW50cnk7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW25hbWVdKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdmFsO1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWFfMSlcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYV8yKVxyXG5cclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1zeW5jJywgZW50cnkpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzeW5jLWVudHJ5JywgbmFtZSkpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRhZ0VudHJpZXMobmFtZXMsIHRhZykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgIG5hbWVzLnN5bmMuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCAnc3luYycpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICAgICAgbmFtZXMubG9jYWwuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sICdsb2NhbCcpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHJlbW92ZVRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWRFbnRyeSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJyk7XHJcbiAgICAgIGlmIChzdG9yZWRFbnRyeS50YWcpIHtcclxuICAgICAgICBzdG9yZWRFbnRyeS50YWcgPSBzdG9yZWRFbnRyeS50YWdcclxuICAgICAgICAgIC5yZXBsYWNlKHJ4LCAnICcpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXlxcc3xcXHMkLywgJycpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXFxzezIsfS8sICcgJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKTtcclxuICB9LFxyXG4gIGFkZFRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkVGFnVG9FbnRyeShoaXN0b3J5LmVudHJpZXNbbmFtZV0sIHRhZyk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSk7XHJcbiAgfSxcclxuICBhZGRUYWdUb0VudHJ5KGVudHJ5LCB0YWcpIHtcclxuICAgIGlmICghdGFnKSBlbnRyeS50YWcgPSAnJztcclxuICAgIGVsc2UgaWYgKCFlbnRyeS50YWcpIGVudHJ5LnRhZyA9IHRhZztcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnLCAnZycpO1xyXG4gICAgICBpZiAoZW50cnkudGFnLnNlYXJjaChyeCkgPT09IC0xKSB7XHJcbiAgICAgICAgZW50cnkudGFnICs9ICcgJyArIHRhZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGVudHJ5KTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG5cclxuICAvLyBQQUdFIE5PVEUgTUVUSE9EU1xyXG4gIHVwZGF0ZVBhZ2VOb3Rlcyh1cmwsIG5vdGVzKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3BhZ2Vub3RlcycsIHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgIHBhZ2Vub3Rlc1t1cmxdID0gbm90ZXM7XHJcbiAgICAgIHJldHVybiBwYWdlbm90ZXM7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLm9uU3RvcmFnZUNoYW5nZWQpKTtcclxuICB9LFxyXG4gIG9uU3RvcmFnZUNoYW5nZWQoY2hhbmdlZEl0ZW0pIHtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5zZXR0aW5ncykgdGhpcy5lbWl0KCd1cGRhdGVkOnNldHRpbmdzJyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uaGlzdG9yeSkgdGhpcy5lbWl0KCd1cGRhdGVkOmhpc3RvcnknKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5wYWdlbm90ZXMpIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlbm90ZXMnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgLy8nc3RhcnRlZDphcHAnOiAnb3BlbkluaXRQYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHRiYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShhbSknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ2xvb2t1cDp3b3JkJzogJ29wZW5TZWFyY2gnLFxyXG4gICAgICAgICdvcGVuOmVudHJpZXMnOiAnb3BlbidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVybHM6IHtcclxuICAgICAgbmV3czogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXdzJyxcclxuICAgICAgc2V0dGluZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c2V0dGluZ3MnLFxyXG4gICAgICBoaXN0b3J5OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWhpc3RvcnknLFxyXG4gICAgICBpbmZvOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ldycsXHJcbiAgICAgIGhlbHA6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bWFudWFsJyxcclxuICAgICAgY29udGFjdDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1jb250YWN0JyxcclxuICAgICAgbG9nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1sb2dzJyxcclxuICAgICAgZXhwb3J0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWV4cG9ydCcsXHJcbiAgICAgIHN5bmM6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c3luYydcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcih0YWIgPT4gdGhpcy5lbWl0KCdhY3RpdmF0ZWQ6dGFiJywgdGFiLnRhYklkLCAodGFiLnVybCB8fCAnJykpKTtcclxuICAgICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZWQpID0+IHtcclxuICAgICAgICBpZiAoY2hhbmdlZC51cmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDp1cmwnLCB0YWJJZCwgY2hhbmdlZC51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW4odXJscywgbmFtZXMpIHtcclxuICAgICAgdXJscyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJyA/IFt1cmxzXSA6IHVybHM7XHJcbiAgICAgIG5hbWVzID0gdHlwZW9mIG5hbWVzID09PSAnc3RyaW5nJyA/IFtuYW1lc10gOiBuYW1lcztcclxuICAgICAgbGV0IGwgPSB1cmxzLmxlbmd0aCxcclxuICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IGZhbHNlLFxyXG4gICAgICAgICAgdXJsO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uKHNlbGYsIGwpIHtcclxuICAgICAgICAgIHVybCA9IHVybHNbbF07XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiB1cmxzW2xdIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZWN1cml0eVdhcm5pbmcpIHNlbGYuZW1pdCgnZmFpbGVkOm9wZW4tdGFiJyk7XHJcbiAgICAgICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuYW1lcykgc2VsZi5lbWl0KCdvcGVuZWQ6ZW50cnknLCB7IHVybDogdXJsLCBuYW1lOiBuYW1lc1tsXSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkodGhpcywgbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuQWRkb25QYWdlKGlkKSB7XHJcbiAgICAgIHRoaXMub3Blbih0aGlzLnVybHNbaWRdKTtcclxuICAgIH0sXHJcbiAgICBvcGVuSW5pdFBhZ2UodmVyc2lvbiwgbG9hZFJlYXNvbikge1xyXG4gICAgICBpZiAobG9hZFJlYXNvbiAmJiBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcgfHwgbG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScpIHRoaXMub3BlbkFkZG9uUGFnZSgnbmV3cycpO1xyXG4gICAgfSxcclxuICAgIG9wZW5TZWFyY2god29yZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IGN1c3RvbSA9IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoLCB1cmw7XHJcbiAgICAgICAgaWYgKGN1c3RvbSkgdXJsID0gJ2h0dHBzOi8vJyArIGN1c3RvbVswXSArIHdvcmQgKyBjdXN0b21bMV07XHJcbiAgICAgICAgZWxzZSB1cmwgPSAnaHR0cHM6Ly8nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyArIHdvcmQ7XHJcbiAgICAgICAgdGhpcy5vcGVuKHVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZTphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdpbnN0YWxsOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2NoZWNrOnN0b3JhZ2UnOiAnY2hlY2tTdG9yYWdlT25TdGFydCcsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZSc6ICdpbXBvcnRTdG9yYWdlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHNldHRpbmdzLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IHNldHRpbmdzLm1pc2M7XHJcbiAgICAgICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlJy5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5uKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMubiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMubjtcclxuICAgICAgICAgIG1pc2Mubm90ZWljb24gPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgICAgICAgIG1pc2Mubm90ZW9uY2xpY2sgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3Rlb25jbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuYXJyb3d1cCkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93dXAgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93dXA7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3dkb3duID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd2Rvd247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmRbMF0pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5kWzBdID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5kWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5zYikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5zYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuY20pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5jbSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuY207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcmtlcnMubS5zdHlsZSkge1xyXG4gICAgICAgICAgbGV0IHN0eWxlO1xyXG4gICAgICAgICAgZm9yIChsZXQgbSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gbWFya2Vyc1ttXTtcclxuICAgICAgICAgICAgbWFya2Vyc1ttXSA9IHsgc3R5bGUgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGlzdG9yeS5zb3J0ZWQpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc29ydGVkID0gZGVmYXVsdFNldHRpbmdzLmhpc3Rvcnkuc29ydGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWhpc3Rvcnkudmlldykge1xyXG4gICAgICAgICAgaGlzdG9yeS52aWV3ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkudmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LnNhdmVJblByaXYgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5zYXZlSW5Qcml2ID0gZGVmYXVsdFNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmltbXV0ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaW1tdXQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5Lmlnbm9yZUhhc2ggIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pZ25vcmVIYXNoID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmRyb3BMb3NzZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5kcm9wTG9zc2VzID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vdGVUeXBlcy5mb3JFYWNoKG5vdGVUeXBlID0+IHtcclxuICAgICAgICAgIGlmICghbWlzY1tub3RlVHlwZV0pIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5tYXJrbWV0aG9kKSB7XHJcbiAgICAgICAgICBtaXNjLm1hcmttZXRob2QgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MucHJvZ3Jlc3NiYXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy5wcm9ncmVzc2JhciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnByb2dyZXNzYmFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MudGJicG93ZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy50YmJwb3dlciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zYikge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2I7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc2IudGhlbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRhYnMudGhlbWVzID0gZGVmYXVsdFNldHRpbmdzLnNiLnRhYnMudGhlbWVzO1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGhlbWUgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGhlbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJyk7XHJcbiAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxuICB9LFxyXG4gIHVwZGF0ZUhpc3RvcnkoaGlzdG9yeSkge1xyXG4gICAgZGVsZXRlIGhpc3Rvcnkub3JkZXI7XHJcblxyXG4gICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgIGVudHJ5O1xyXG5cclxuICAgIGlmICghbCkgcmV0dXJuIGhpc3Rvcnk7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBlbnRyeSA9IHRoaXMuZml4SGlzdG9yeURhdGVzKGVudHJpZXNbbmFtZXNbbF1dKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdHlwZW9mIGVudHJ5LnN5bmNlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGlzdG9yeTtcclxuICB9LFxyXG4gIGZpeEhpc3RvcnlEYXRlcyhlbnRyeSkge1xyXG4gICAgY29uc3QgbGFuZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkuZmlyc3QgIT09ICdudW1iZXInKSBlbnRyeS5maXJzdCA9IG5ldyBEYXRlKChlbnRyeS5maXJzdFtsYW5nXSB8fCBlbnRyeS5maXJzdC5lbiB8fCBlbnRyeS5maXJzdC5kZSB8fCBlbnRyeS5maXJzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5sYXN0ICE9PSAnbnVtYmVyJykgZW50cnkubGFzdCA9IG5ldyBEYXRlKChlbnRyeS5sYXN0W2xhbmddIHx8IGVudHJ5Lmxhc3QuZW4gfHwgZW50cnkubGFzdC5kZSB8fCBlbnRyeS5sYXN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuICBtZXJnZUhpc3RvcmllcyhuZXdIaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihvbGRIaXN0b3J5ID0+IHtcclxuXHJcbiAgICAgIGxldCBlbnRyaWVzID0gbmV3SGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgIG9sZEVudHJpZXMgPSBvbGRIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBvbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZEVudHJpZXMpLFxyXG4gICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzID0ge30sXHJcbiAgICAgICAgICBuYW1lLCBlbnRyeSwgdXJsLCB1cmxFeGlzdHMsIGU7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICB1cmxFeGlzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCFvbGROYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdXJsID0gZW50cnkudXJsO1xyXG5cclxuICAgICAgICAgIGZvciAoZSBpbiBvbGRFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRFbnRyaWVzW2VdLnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgdXJsRXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF1cmxFeGlzdHMpIHtcclxuICAgICAgICAgICAgZW50cnkuc3luY2VkID0gYXJlYSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgICAgICBhY2NlcHRlZEVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBfZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYSBpbiBhY2NlcHRlZEVudHJpZXMpIHtcclxuICAgICAgICAgIF9lbnRyaWVzW2FdID0gYWNjZXB0ZWRFbnRyaWVzW2FdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgfSwgYXJlYSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXRTdG9yYWdlT25VcGdyYWRlKHByZXZWZXJzaW9uID0gJzInLCBsb2FkUmVhc29uKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICBpZiAobG9hZFJlYXNvbiAhPT0gJ2luc3RhbGwnKSB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUnKTtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCAnc3luYycpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJykpXHJcbiAgICAvLy50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pKVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnLCBwcmV2VmVyc2lvbik7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24nLCBlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjaGVja1N0b3JhZ2VPblN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnc3luYycpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgIH0pKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKTtcclxuICB9LFxyXG4gIGltcG9ydFN0b3JhZ2UoaW1wb3J0ZWRTdG9yYWdlLCBhcmVhKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSBpbXBvcnRlZFN0b3JhZ2Uuc2V0dGluZ3MsXHJcbiAgICAgICAgaGlzdG9yeSA9IGltcG9ydGVkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgIGlmICghaGlzdG9yeSAmJiAhc2V0dGluZ3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfZW1wdHknKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIWhpc3RvcnkpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICBlbHNlIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2Vzc19zID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3NfaCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3VjY2Vzc19zKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NfcyA9PT0gJ291dGRhdGVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpzZXR0aW5ncyBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpIHtcclxuICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCdvdXRkYXRlZCcpO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9LFxyXG4gIGltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVyZ2VIaXN0b3JpZXModGhpcy51cGRhdGVIaXN0b3J5KGhpc3RvcnksIHRydWUpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd2aWV3OmVudHJ5JzogJ29wZW5FbnRyeURldGFpbFBhZ2UnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3BlbkVudHJ5RGV0YWlsUGFnZShuYW1lKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwVVJMID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnY29udGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5odG1sJyk7XHJcblxyXG4gICAgICBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgpLnRoZW4oY3VycmVudFdpbmRvdyA9PiB7XHJcblxyXG4gICAgICAgIGJyb3dzZXIud2luZG93cy5jcmVhdGUoe1xyXG4gICAgICAgICAgdXJsOiBwb3B1cFVSTCArICcjJyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcclxuICAgICAgICAgIHR5cGU6ICdwYW5lbCcsXHJcbiAgICAgICAgICBoZWlnaHQ6IGN1cnJlbnRXaW5kb3cuaGVpZ2h0IC0gMjIsXHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5taW4oY3VycmVudFdpbmRvdy53aWR0aCwgOTgwKSxcclxuICAgICAgICAgIGluY29nbml0bzogY3VycmVudFdpbmRvdy5pbmNvZ25pdG9cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxubmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYmFja2dyb3VuZCcsXHJcbiAgdHlwZTogJ2JhY2tncm91bmQnLFxyXG4gIHBvc3Rwb25lQ29ubmVjdGlvbjogdHJ1ZSxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeS1vbi1yZXN0b3JhdGlvbicsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJyxcclxuICAgICAgJ3VwZGF0ZWQ6bG9ncycsXHJcbiAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpzYXZlb3B0LXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJpZXMnLFxyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICdjdHg6bScsXHJcbiAgICAgICdjdHg6ZCcsXHJcbiAgICAgICdjdHg6YicsXHJcbiAgICAgICdjdHg6LWInLFxyXG4gICAgICAnY3R4Om4nLFxyXG4gICAgICAnY3R4OmMnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICdjaGFuZ2VkOnVybCdcclxuICAgIF0sXHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfTU9EVUxFKHtcclxuXHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gIGluaXRpYWxpemluZzogZmFsc2UsXHJcbiAgYXJlYV9zZXR0aW5nczogX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJyxcclxuICBhcmVhX2hpc3Rvcnk6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJyxcclxuICBhcmVhX3BhZ2Vub3RlczogX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCcsXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoJ2xvZ3MnKTtcclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgbGV0IHN5bmMgPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLnN5bmMgPyBsb2NhbFN0b3JhZ2Uuc3luYyA6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYztcclxuICAgICAgcmV0dXJuIHRoaXMuX3NldF9zeW5jKHN5bmMpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9LFxyXG4gIHNldChmaWVsZCwgdmFsKSB7XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX3NldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuICAgIHJldHVybiB0aGlzWydfc2V0XycgKyBmaWVsZF0odmFsKTtcclxuICB9LFxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlKC4uLmFyZ3MpO1xyXG4gIH0sXHJcblxyXG4gIGlzRW1wdHkoYXJlYSA9ICdzeW5jJykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgKCFPYmplY3Qua2V5cyhzdG9yYWdlKS5sZW5ndGggJiYgc3RvcmFnZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH0sXHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiAoc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ByaXZzYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90YmJwb3dlcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG5cclxuICBfc2V0X3N0b3JhZ2UoYXJlYSA9IG51bGwpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXRfc2V0dGluZ3MoYXJlYSkudGhlbigoKSA9PiB0aGlzLl9zZXRfaGlzdG9yeShhcmVhKSk7XHJcbiAgfSxcclxuICBfc2V0X3N5bmMoc3luYykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBzeW5jOiBzeW5jIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHN5bmM6IHN5bmMgfSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IHN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3NldHRpbmdzKGFyZWEgPSB0aGlzLmFyZWFfc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IHNldHRpbmdzOiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9oaXN0b3J5KGFyZWEgPSB0aGlzLmFyZWFfaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBoaXN0b3J5OiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLmhpc3RvcnkpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3ZlcnNpb24odmVyc2lvbikge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSkpO1xyXG4gIH0sXHJcbiAgX3NldF9sb2cobG9nKSB7XHJcbiAgICBpZiAobG9nLmNsZWFyKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogW10gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0X2xvZ3MoKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICBsb2dzLnB1c2gobG9nKTtcclxuICAgICAgaWYgKGxvZ3MubGVuZ3RoID4gX0dMT0JBTF9TRVRUSU5HUy5NQVhfTE9HX0VOVFJJRVMpIGxvZ3Muc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBsb2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2VudHJ5KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgaGlzdG9yeSA9IHN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMoZW50cnkubmFtZSkpIHJldHVybiB0aGlzLl91cGRhdGVfZW50cnkoZW50cnkpO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uc2V0KHsgaGlzdG9yeTogaGlzdG9yeSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF91cGRhdGUoZmllbGQsIHVwZGF0ZXIsIGFyZWEgPSB0aGlzWydhcmVhXycgKyBmaWVsZF0pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2VbZmllbGRdKSB7XHJcbiAgICAgICAgICBzdG9yYWdlW2ZpZWxkXSA9IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0VbZmllbGRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgdXBkYXRlW2ZpZWxkXSA9IHVwZGF0ZXIuY2FsbCh0aGlzLCBzdG9yYWdlW2ZpZWxkXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHVwZGF0ZSkudGhlbigoKSA9PiB1cGRhdGVbZmllbGRdKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9FWFRFTkQsIF9HRVRfQUNUSVZFX1RBQiwgX01PRFVMRSwgX1BPUlQsIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAnJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb242NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvdG00OC5wbmdcIjsiLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=