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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3NpZGViYXJzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zdG9yZS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3dpbmRvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9wb3J0LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2RhdGEvZGVmYXVsdC1zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2RhdGEvZ2xvYmFsLXNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2RhdGEvbG9nLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb2ZmMTYucG5nIiwid2VicGFjazovLy8uL2ljb25zL29mZjE4LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjE4LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjMyLnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjM2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vbjY0LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy90bTQ4LnBuZyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyJdLCJuYW1lcyI6WyJfTU9EVUxFIiwiZXZlbnRzIiwiRU5WIiwiYWN0aXZlIiwidmVyc2lvbiIsImxvYWRSZWFzb24iLCJhdXRvaW5pdCIsImN1cnJlbnRWZXJzaW9uIiwiYnJvd3NlciIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJfU1RPUkFHRSIsImdldCIsInRoZW4iLCJkZXRhaWxzIiwicmVhc29uIiwicHJldlZlcnNpb24iLCJwcmV2aW91c1ZlcnNpb24iLCJlbWl0Iiwic3RhcnQiLCJzZXQiLCJhY3RpdmF0ZSIsIm1vZGUiLCJjYXRjaCIsInRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uIiwic2V0VEJCQWN0aW9uIiwidG9nZ2xlIiwidG9nZ2xlT25JbXBvcnQiLCJvbiIsImJyb3dzZXJBY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImFkZCIsImFkZFRCQkhhbmRsZXIiLCJyZW1vdmVUQkJIYW5kbGVyIiwiZW5hYmxlZCIsInRiYkhhbmRsZXIiLCJzZXRQb3B1cCIsInBvcHVwIiwib25DbGlja2VkIiwicmVtb3ZlTGlzdGVuZXIiLCJpdGVtcyIsIm0iLCJjb250ZXh0cyIsInciLCJkIiwiYiIsIm4iLCJzYiIsImMiLCJjcmVhdGVkIiwiaXRlbSIsImkiLCJpZCIsInRpdGxlIiwiaTE4biIsImdldE1lc3NhZ2UiLCJvbmNsaWNrIiwiaW5mb3MiLCJ0YWIiLCJvbkNsaWNrIiwidXBkYXRlIiwiY3JlYXRlIiwiaW5jbHVkZXMiLCJtZW51cyIsInB1c2giLCJyZW1vdmUiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVtb3ZlQWxsIiwibGVuZ3RoIiwic2hvcnRjdXRzIiwibWVudUl0ZW1JZCIsInNlbGVjdGlvblRleHQiLCJzaWRlYmFyQWN0aW9uIiwib3BlbiIsImxvZyIsImVycm9yIiwicmVwb3J0IiwibXNnIiwidGltZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiX0xPR19LRVlTIiwiY2xlYXIiLCJvbk1peGVkRW50cnlUeXBlcyIsIm9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMiLCJvbkZhaWxlZFJlc3RvcmF0aW9uIiwib25PcGVuVGFiRmFpbHVyZSIsIm9uRmFpbGVkUEJNIiwicmVjZW50bHlPcGVuZWRFbnRyeSIsImNoZWNrVXJsIiwidXJsIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiaGFzaGxlc3NQYWdlVXJsIiwiZW50cmllcyIsImhpc3RvcnkiLCJtYXRjaGVzIiwibG9ja2VkTWF0Y2hlcyIsImVudHJ5IiwicGFnZVVybCIsImVudHJ5VXJsIiwiZSIsImhhc2hTZW5zaXRpdmUiLCJsb2NrZWQiLCJvbk5hbWluZ1JlcXVlc3QiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJwcml2Iiwid2luZG93SW5mbyIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwic2V0dGluZ3MiLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImdldFVSTCIsIm9uU2F2ZWRFbnRyeSIsInNhdmVOb3RlIiwibWlzYyIsInBibU5vdGUiLCJvbkZhaWxlZEltcG9ydCIsImVycm9yMSIsImVycm9yMiIsImVyck1lc3NhZ2UxIiwiZXJyTWVzc2FnZTIiLCJvbkltcG9ydEVycm9yIiwib25JbXBvcnRTdWNjZXNzIiwiZmFpbHVyZU5vdGUiLCJvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbiIsInN1Y2Nlc3NOb3RlIiwib25DYW5jZWxlZFNhdmUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwic2V0UGFuZWwiLCJ0YWJJZCIsImlzT3BlbiIsInBhbmVsIiwic3RvcmVFbnRyeSIsImlnbm9yZUhhc2giLCJ1cGRhdGVFbnRyeSIsInRhYlVybCIsInJlbW92ZUVudHJ5Iiwic2F2ZWRVcmwiLCJzZW5kRW50cnkiLCJoYXNobGVzc1VybCIsImVudHJpZXNGb3JUaGlzVGFiIiwic2VuZE9yZGVyZWRNYXJrcyIsIm1hcmtzIiwidXBkYXRlT25DaGFuZ2VkU3luYyIsInNhdmVBY3RpdmF0aW9uU3RhdGUiLCJhZGRvbiIsInRvZ2dsZVN5bmMiLCJmaWVsZCIsInZhbCIsInN5bmMiLCJhcmVhX3NldHRpbmdzIiwiYXJlYV9oaXN0b3J5IiwiYXJlYV9wYWdlbm90ZXMiLCJwYWdlbm90ZXMiLCJ1cGRhdGVTZXR0aW5ncyIsInVwZGF0ZXIiLCJzZXR0aW5nIiwiYWRkQ3VzdG9tTWFya2VyIiwia2V5Iiwic3R5bGUiLCJtYXJrZXJzIiwicmVtb3ZlQ3VzdG9tTWFya2VyIiwiY2hhbmdlU3R5bGUiLCJjaGFuZ2VCZ0NvbG9yIiwiY29sb3IiLCJtYXJrZXIiLCJzcGxpdCIsInJlcGxhY2UiLCJjaGFuZ2VBdXRvTm90ZVNldHRpbmciLCJhdXRvbm90ZSIsImNoYW5nZU1hcmtNZXRob2QiLCJtYXJrbWV0aG9kIiwidG9nZ2xlU2hvcnRjdXRTZXR0aW5nIiwic3RhdHVzIiwiY2hhbmdlU2hvcnRjdXRTZXR0aW5nIiwidmFsdWUiLCJjaGFuZ2VTb3J0T3B0Iiwic29ydGVkIiwiY2hhbmdlVmlld09wdCIsInZpZXciLCJjaGFuZ2VDdXN0b21TZWFyY2giLCJ2YWx1ZXMiLCJjdXN0b21TZWFyY2giLCJjaGFuZ2VDb3VudFBlclBhZ2UiLCJwcCIsInRvZ2dsZUN0bVNldHRpbmciLCJjaGFuZ2VTYXZlT3B0IiwiYXV0b3NhdmUiLCJ0b2dnbGVJbW11dE9wdCIsImltbXV0IiwidG9nZ2xlRHJvcExvc3Nlc09wdCIsImRyb3BMb3NzZXMiLCJ0b2dnbGVIYXNoT3B0IiwidG9nZ2xlUHJpdlNhdmVPcHQiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVOb3RlT3B0IiwidG9nZ2xlUXVpY2tidXR0b25PcHQiLCJwcm9wIiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RpZmljYXRpb25PcHQiLCJjaGFuZ2VNaXNjU2V0dGluZyIsInRvZ2dsZVRCQlBvd2VyU2V0dGluZyIsImNoYW5nZVNCU2V0dGluZ3MiLCJ1bmZvbGRlZCIsInRhYnMiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwidXBkYXRlRW50cnlPblBhZ2VBY3Rpb24iLCJzeW5jZWQiLCJyZWNlaXZlZENvbXBsZXRlRW50cnkiLCJmb3VuZCIsImhhc093blByb3BlcnR5IiwiZGVsZXRlRW50cmllcyIsInBvcCIsInVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbiIsImVudHJ5TmFtZSIsInJlc3RvcmVkTWFya3MiLCJsb3N0TWFya3MiLCJvbGRMb3N0TWFya3MiLCJyZXN0b3JlZE1hcmtzSURzIiwib2xkTG9zdE1hcmtzSURzIiwiZm9yRWFjaCIsIm1hcmsiLCJzeW5jRW50cnkiLCJhcmVhXzEiLCJhcmVhXzIiLCJ0YWdFbnRyaWVzIiwidGFnIiwiYWRkVGFnVG9FbnRyeSIsImxvY2FsIiwicmVtb3ZlVGFnIiwic3RvcmVkRW50cnkiLCJyeCIsIlJlZ0V4cCIsImFkZFRhZyIsInNlYXJjaCIsInVwZGF0ZVBhZ2VOb3RlcyIsIm5vdGVzIiwicmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIiLCJzdG9yYWdlIiwib25DaGFuZ2VkIiwicHJveHkiLCJvblN0b3JhZ2VDaGFuZ2VkIiwiY2hhbmdlZEl0ZW0iLCJ1cmxzIiwibmV3cyIsImluZm8iLCJoZWxwIiwiY29udGFjdCIsImxvZ3MiLCJleHBvcnQiLCJvbkFjdGl2YXRlZCIsIm9uVXBkYXRlZCIsImNoYW5nZWQiLCJzZWN1cml0eVdhcm5pbmciLCJzZWxmIiwib3BlbkFkZG9uUGFnZSIsIm9wZW5Jbml0UGFnZSIsIm9wZW5TZWFyY2giLCJ3b3JkIiwiY3VzdG9tIiwiZGVmYXVsdFNldHRpbmdzIiwiX0RFRkFVTFRfU1RPUkFHRSIsIm5vdGVUeXBlcyIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwiY20iLCJub3RlVHlwZSIsInRtdWlwb3MiLCJub3RldHJhbnNwIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInRoZW1lcyIsInVwZGF0ZUhpc3RvcnkiLCJvcmRlciIsImZpeEhpc3RvcnlEYXRlcyIsImxhbmciLCJlbiIsImRlIiwibGFzdCIsIm1lcmdlSGlzdG9yaWVzIiwibmV3SGlzdG9yeSIsIm9sZEVudHJpZXMiLCJvbGRIaXN0b3J5Iiwib2xkTmFtZXMiLCJhY2NlcHRlZEVudHJpZXMiLCJ1cmxFeGlzdHMiLCJfZW50cmllcyIsImEiLCJzZXRTdG9yYWdlT25VcGdyYWRlIiwiaXNFbXB0eSIsImVtcHR5IiwidG9TdHJpbmciLCJjaGVja1N0b3JhZ2VPblN0YXJ0IiwiaW1wb3J0U3RvcmFnZSIsImltcG9ydGVkU3RvcmFnZSIsImltcG9ydFNldHRpbmdzIiwic3VjY2VzcyIsImltcG9ydEhpc3RvcnkiLCJzdWNjZXNzX3MiLCJzdWNjZXNzX2giLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wZW5FbnRyeURldGFpbFBhZ2UiLCJwb3B1cFVSTCIsImdldEN1cnJlbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWlnaHQiLCJjdXJyZW50V2luZG93Iiwid2lkdGgiLCJNYXRoIiwibWluIiwiX1BPUlQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJPTkVPRkYiLCJDT05ORUNUSU9OIiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJpbml0IiwibG9jYWxTdG9yYWdlIiwiX3NldF9zeW5jIiwid2luZG93Iiwic2V0VGltZW91dCIsInIiLCJtZXRoIiwiX3VwZGF0ZSIsImNvbnN0cnVjdG9yIiwiX2dldF9zdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsIl9nZXRfbG9jYWxfc3RvcmFnZSIsIl9nZXRfc3luY2VkX3N0b3JhZ2UiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5IiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbG9ncyIsIl9nZXRfdmVyc2lvbiIsIl9nZXRfbW9kZSIsIl9nZXRfcHJpdnNhdmUiLCJfZ2V0X25hbWluZyIsIl9nZXRfdGJicG93ZXIiLCJfZ2V0X21hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsIl9zZXRfc3RvcmFnZSIsIl9zZXRfc2V0dGluZ3MiLCJfc2V0X2hpc3RvcnkiLCJfc2V0X3ZlcnNpb24iLCJfc2V0X2xvZyIsIk1BWF9MT0dfRU5UUklFUyIsInNoaWZ0IiwiX3NldF9lbnRyeSIsIl91cGRhdGVfZW50cnkiLCJjYWxsIiwieiIsInkiLCJzIiwiZG93bmxvYWQiLCJjb3B5IiwiYm1pY29uIiwib3ZlcndyaXRlIiwiY2hhbmdlZE5vdGUiLCJtZXRhIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJnZXRLZXlCeVZhbHVlIiwiX0NPUFkiLCJzcmMiLCJ0YXJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJfRVJST1JUUkFDS0VSIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGUiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwib2JqMSIsIm9iajIiLCJfR0VUX0FDVElWRV9UQUIiLCJxdWVyeSIsIl9IQVNITEVTUyIsImgiLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsInRvcGljcyIsImV2ZW50IiwiaGFuZGxlciIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvYmoiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJmIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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QixDQUF0QztBQUNBNFgsV0FBS2EsWUFBTCxDQUFrQnRmLFdBQWxCLENBQThCO0FBQUEsZUFBTSxPQUFLeWUsSUFBTCxHQUFZLElBQWxCO0FBQUEsT0FBOUI7QUFDRDs7OzJDQUNzQmMsRSxFQUFJO0FBQUE7O0FBQ3pCM2YsY0FBUUMsT0FBUixDQUFnQjJmLFNBQWhCLENBQTBCeGYsV0FBMUIsQ0FBc0MsZ0JBQVE7QUFDNUN5ZSxhQUFLQyxTQUFMLENBQWUxZSxXQUFmLENBQTJCLE9BQUt3UixLQUFMLENBQVcsTUFBWCxFQUFpQixPQUFLbU4sV0FBdEIsQ0FBM0I7QUFDQSxTQUFDWSxFQUFELElBQU9BLElBQVA7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFsRndCbmdCLGUiLCJmaWxlIjoiYmFja2dyb3VuZC9iYWNrZ3JvdW5kLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYWNrZ3JvdW5kL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9pY29ucy9vbjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjMyLnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjM2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjY0LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL3RtNDgucG5nJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vc3RvcmFnZSdcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2Vycm9yLWxvZ2dpbmcnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2luamVjdGlvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgX05PVElGSUNBVElPTlMgZnJvbSAnLi9tb2R1bGVzL25vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBfVEFCUyBmcm9tICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0IF9XSU5ET1dTIGZyb20gJy4vbW9kdWxlcy93aW5kb3dzJ1xyXG5pbXBvcnQgX1NJREVCQVJTIGZyb20gJy4vbW9kdWxlcy9zaWRlYmFycydcclxuaW1wb3J0IF9OQU1FUiBmcm9tICcuL21vZHVsZXMvbmFtZXInXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0LW1lbnUnXHJcbi8vaW1wb3J0IF9JREIgZnJvbSAnLi9tb2R1bGVzL2luZGV4ZWRkYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3ZlcnNpb24tbWFuYWdlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvc3RvcmUtbWFuYWdlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlT25JbXBvcnQnLFxyXG4gICAgICAnaW5pdGlhbGl6ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdtaWdyYXRlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ2NoZWNrZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICd0b2dnbGU6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6dGJicG93ZXItc2V0dGluZ3MnOiAnc2V0VEJCQWN0aW9uJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2ZTogdHJ1ZSxcclxuICB2ZXJzaW9uOiAnJyxcclxuICBsb2FkUmVhc29uOiAnJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IHRoaXMudmVyc2lvbiA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICAgIGlmICghdmVyc2lvbiB8fCB2ZXJzaW9uICE9PSBjdXJyZW50VmVyc2lvbikge1xyXG4gICAgICAgICAgY29uc3QgbG9hZFJlYXNvbiA9IHRoaXMubG9hZFJlYXNvbiA9IGRldGFpbHMucmVhc29uO1xyXG4gICAgICAgICAgY29uc3QgcHJldlZlcnNpb24gPSBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbiB8fCAnMic7XHJcbiAgICAgICAgICBpZiAobG9hZFJlYXNvbiAmJiAobG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScgfHwgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobG9hZFJlYXNvbiArICc6YXBwJywgcHJldlZlcnNpb24sIGxvYWRSZWFzb24pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbiA9PT0gY3VycmVudFZlcnNpb24pIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ3ZlcnNpb24nLCB0aGlzLnZlcnNpb24pO1xyXG5cclxuICAgIC8vX0lEQigpO1xyXG4gICAgX05PVElGSUNBVElPTlMoKTtcclxuICAgIF9UQUJTKCk7XHJcbiAgICBfTkFNRVIoKTtcclxuICAgIF9DVE0oKTtcclxuICAgIF9XSU5ET1dTKCk7XHJcbiAgICBfU0lERUJBUlMoKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYWN0aXZhdGUodHJ1ZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnc3RhcnRlZDphcHAnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9hZFJlYXNvbikpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoYWN0aXZhdGUpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gYWN0aXZhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldFRCQkFjdGlvbigpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IG1vZGUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB0aGlzLmFjdGl2YXRlKG1vZGUpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOmFkZG9uJywgbW9kZSk7XHJcbiAgfSxcclxuICB0b2dnbGVPbkltcG9ydCgpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKG9uKSB7XHJcbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHBhdGg6IG9uID8ge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb24xNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vZmYxNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29mZjMyLnBuZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRUQkJBY3Rpb24oYWRkKSB7XHJcbiAgICBpZiAodHlwZW9mIGFkZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGlmIChhZGQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd0YmJwb3dlcicpLnRoZW4oZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IHRiYkhhbmRsZXIgPSB0aGlzLnRiYkhhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICcnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRiYkhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdjb250ZW50L3RiYi1tZW51L3RiYi1tZW51Lmh0bWwnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMudGJiSGFuZGxlcik7XHJcbiAgICAgIHRoaXMudGJiSGFuZGxlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtczoge1xyXG4gICAgICBtOiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIHc6IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgZDogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBiOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgbjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBzYjogeyBjb250ZXh0czogWydhbGwnLCAndGFiJ10gfSxcclxuICAgICAgYzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogW10sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpdGVtLmlkID0gaTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2N0eF8nICsgKGkgPT09ICctYicgPyAnZGInIDogaSkpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9IChpbmZvcywgdGFiKSA9PiB0aGlzLm9uQ2xpY2soaW5mb3MsIHRhYik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMuY3JlYXRlKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZShpZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnNwbGljZSh0aGlzLmNyZWF0ZWQuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsKCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGUob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVkO1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3Nob3J0Y3V0cycpLnRoZW4oc2hvcnRjdXRzID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzaG9ydGN1dHNbaV1bMl0pIHRoaXMuY3JlYXRlKGkpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soaW5mb3MsIHRhYikge1xyXG4gICAgICBjb25zdCBpZCA9IGluZm9zLm1lbnVJdGVtSWQ7XHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsb2coZXJyb3IsIHJlcG9ydCkge1xyXG4gICAgbGV0IGxvZywgbXNnO1xyXG4gICAgaWYgKGVycm9yLnRpbWUpIHtcclxuICAgICAgbG9nID0gW2Vycm9yLnRpbWUsIGVycm9yLm1lc3NhZ2UgKyAnIFsnICsgZXJyb3IubG9jYXRpb24gKyAnXSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nID0gWyhuZXcgRGF0ZSgpLmdldFRpbWUoKSksIF9MT0dfS0VZU1tlcnJvcl0gfHwgZXJyb3JdO1xyXG4gICAgICBpZiAocmVwb3J0ICYmIHR5cGVvZiByZXBvcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbG9nLnB1c2gocmVwb3J0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCBsb2cpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MgbG9nZ2VkOmVycm9yJywgbG9nKSk7XHJcbiAgfSxcclxuICBjbGVhcigpIHtcclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgeyBjbGVhcjogdHJ1ZSB9KS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzJykpO1xyXG4gIH0sXHJcbiAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKTtcclxuICB9LFxyXG4gIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUmVzdG9yYXRpb24ocmVwb3J0KSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJywgcmVwb3J0KTtcclxuICB9LFxyXG4gIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV91cmwnKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcGJtJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2hlY2s6dXJsJzogJ2NoZWNrVXJsJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JzogJ29uU2F2ZU5ld1JlcXVlc3QnLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdvblVwZGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnbmFtZTplbnRyeT8nOiAnb25OYW1pbmdSZXF1ZXN0JyxcclxuICAgICAgJ29wZW5lZDplbnRyeSc6ICd0ZW1wU2F2ZUVudHJ5TWV0YURhdGEnXHJcbiAgICB9XHJcbiAgfSxcclxuICByZWNlbnRseU9wZW5lZEVudHJ5OiBudWxsLFxyXG5cclxuICBjaGVja1VybCh1cmwsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBoYXNobGVzc1BhZ2VVcmwgPSAgX0hBU0hMRVNTKHVybCk7XHJcblxyXG4gICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBtYXRjaGVzID0gW10sXHJcbiAgICAgICAgICBsb2NrZWRNYXRjaGVzID0gW10sXHJcbiAgICAgICAgICBlbnRyeSwgcGFnZVVybCwgZW50cnlVcmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBlIGluIGVudHJpZXMpIHtcclxuICAgICAgICBlbnRyeSA9IGVudHJpZXNbZV07XHJcbiAgICAgICAgcGFnZVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyB1cmwgOiBoYXNobGVzc1BhZ2VVcmw7XHJcbiAgICAgICAgZW50cnlVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gZW50cnkudXJsIDogX0hBU0hMRVNTKGVudHJ5LnVybCk7XHJcblxyXG4gICAgICAgIGlmIChwYWdlVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIGxvY2tlZE1hdGNoZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICBzZW5kUmVzcG9uc2UobnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZW50cmllczogbWF0Y2hlcywgcmVjZW50bHlPcGVuZWRFbnRyeTogdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5IH0pO1xyXG4gICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZW50cnkgPSBsb2NrZWRNYXRjaGVzLmxlbmd0aCA/IGxvY2tlZE1hdGNoZXMgOiAhbWF0Y2hlcy5sZW5ndGggPyBudWxsIDogbWF0Y2hlc1swXTtcclxuICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZCcsIGVudHJ5KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25OYW1pbmdSZXF1ZXN0KHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJpdiA9IHdpbmRvd0luZm8uaW5jb2duaXRvO1xyXG4gICAgICAgIGlmICghcHJpdikgc2VuZFJlc3BvbnNlKCFwcml2KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHNlbmRSZXNwb25zZShzYXZlSW5Qcml2KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblNhdmVOZXdSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblVwZGF0ZVJlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0ZW1wU2F2ZUVudHJ5TWV0YURhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gZGF0YTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2dyYW50ZWQ6c2F2ZS1lbnRyeSc6ICduYW1lJyxcclxuICAgICAgICAncmVuYW1lOmVudHJ5JzogJ3JlbmFtZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBuYW1lKGVudHJ5KSB7XHJcbiAgICAgIGlmIChlbnRyeS5uYW1lKSByZXR1cm4gdGhpcy5hZGp1c3ROYW1lKGVudHJ5Lm5hbWUsIGVudHJ5KTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4gdGhpcy5hZGp1c3ROYW1lKG51bGwsIGVudHJ5LCBuYW1pbmcpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICByZW5hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgICBuZXdOYW1lID0gbmV3TmFtZS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IHRoaXMuZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5ld05hbWUpO1xyXG4gICAgICAgIGlmIChjb3VudGVyKSBuZXdOYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuYW1lZDplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgYWRqdXN0TmFtZShuYW1lLCBlbnRyeSwgbWV0aG9kKSB7XHJcbiAgICAgIG5hbWUgPSBuYW1lID8gbmFtZSA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICd0aXRsZScgPyBlbnRyeS50aXRsZS50cmltKCkgPyBlbnRyeS50aXRsZS50cmltKCkgOiBlbnRyeS51cmwgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAnZGF0ZScgPyAobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpIDogJyc7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IHRoaXMuZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRlciAmJiBlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnNhdmUtZW50cnktZG91YmxlLWxvY2tlZCcsICdlcnJvcl9kb3VibGVfbG9ja2VkX25hbWUnLCBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGNvdW50ZXIpIG5hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgICBlbnRyeS5uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnbmFtZWQ6ZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5hbWUpIHtcclxuICAgICAgbGV0IGV4aXN0aW5nTmFtZXMgPSBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IGV4aXN0aW5nTmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgY291bnRlciA9IDAsXHJcbiAgICAgICAgICBjaGVja3BvaW50O1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIGNoZWNrcG9pbnQgPSBleGlzdGluZ05hbWVzW2xdO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSkgY291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgfSxcclxuICAgIGlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSB7XHJcbiAgICAgIGlmIChuYW1lID09PSBjaGVja3BvaW50KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBsID0gbmFtZS5sZW5ndGgsXHJcbiAgICAgICAgICBjaGVja3BvaW50X3N0YXJ0ID0gY2hlY2twb2ludC5zdWJzdHJpbmcoMCwgbCksXHJcbiAgICAgICAgICBjaGVja3BvaW50X2VuZDtcclxuXHJcbiAgICAgIGlmIChuYW1lICE9PSBjaGVja3BvaW50X3N0YXJ0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBjaGVja3BvaW50X2VuZCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKGwsIGNoZWNrcG9pbnQubGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICgvXlxccypcXChcXGQrXFwpJC8udGVzdChjaGVja3BvaW50X2VuZCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnb25TYXZlZEVudHJ5JyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnktZG91YmxlLWxvY2tlZCc6ICdvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnOiAnb25EZWxldGVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnb25TdWNjZXNzZnVsUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJzogJ29uQ2FuY2VsZWRTYXZlJyxcclxuICAgICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbXBvcnQnOiAnb25GYWlsZWRJbXBvcnQnLFxyXG4gICAgICAgICdlcnJvcjppbXBvcnQnOiAnb25JbXBvcnRFcnJvcicsXHJcbiAgICAgICAgJ2ltcG9ydGVkOnN0b3JhZ2UnOiAnb25JbXBvcnRTdWNjZXNzJyxcclxuICAgICAgICAnZXJyb3InOiAnb25FcnJvcicsXHJcbiAgICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnkoY29uZGl0aW9uLCBtZXNzYWdlLCB0eXBlKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKHNldHRpbmdzKSkge1xyXG4gICAgICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGV4dG1hcmtlcjogJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHR5cGUpLFxyXG4gICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uVXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdpY29ucy90bTQ4LnBuZycpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVkRW50cnkoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZWRfZW50cnknKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MucGJtTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9wYm0nKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHRydWUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfdXJsJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZEltcG9ydChlcnJvcjEsIGVycm9yMikge1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMSk7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UyID0gZXJyb3IyID8gJ1xcblxcbicgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjIpIDogJyc7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHRydWUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X2ZhaWx1cmUnLCBlcnJNZXNzYWdlMSArIGVyck1lc3NhZ2UyKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0RXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfd2FybmluZycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0U3VjY2VzcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdWNjZXNzZnVsUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2Muc3VjY2Vzc05vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2FuY2VsZWRTYXZlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjYW5jZWxlZF9zYXZlX3dhcm5pbmcnKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yKGVycm9yLCBuYW1lKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IsIG5hbWUpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9HRVRfQUNUSVZFX1RBQiwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FjdGl2YXRlZDp0YWInOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2VudHJ5OmZvdW5kJzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAndXBkYXRlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6J3NlbmRFbnRyeScsXHJcbiAgICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnOiAnc2VuZE9yZGVyZWRNYXJrcydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuXHJcbiAgICBzZXRQYW5lbCh0YWJJZCwgdXJsKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuKCkudGhlbihvcGVuID0+IHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG5cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGFiLmlkO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBlbnRyaWVzW2lkXSA9IGVudHJpZXNbaWRdIHx8IFtdO1xyXG4gICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1MoZW50cnkudXJsKSA6IGVudHJ5LnVybDtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCB1cmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmICh1cmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRW50cnkobmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaGFzaFNlbnNpdGl2ZSA/IHVybCA6IF9IQVNITEVTUyh1cmwpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHNhdmVkVXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAoc2F2ZWRVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlbnRyaWVzW2lkXVtzYXZlZFVybF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdGFiLnVybCA6IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpkZWxldGVkLWZvci10YWInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRFbnRyeSgpIHtcclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc2hsZXNzVXJsID0gX0hBU0hMRVNTKHRhYi51cmwpO1xyXG5cclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZyc6ICd0b2dnbGVIYXNoT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnOiAndG9nZ2xlUHJpdlNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJzogJ3RvZ2dsZU5vdGVPcHQnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAndG9nZ2xlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJzogJ3RvZ2dsZU5vdGlmaWNhdGlvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnOiAndG9nZ2xlVEJCUG93ZXJTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnOiAnY2hhbmdlU29ydE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJzogJ2NoYW5nZVZpZXdPcHQnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZyc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG5cclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJzogJ3JlbW92ZUN1c3RvbU1hcmtlcicsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcic6ICdhZGRDdXN0b21NYXJrZXInLFxyXG5cclxuICAgICAgJ25hbWVkOmVudHJ5JzogJ3NhdmVFbnRyeScsXHJcbiAgICAgICdyZW5hbWVkOmVudHJ5JzogJ3NhdmVOZXdOYW1lJyxcclxuICAgICAgJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JzogJ3VwZGF0ZUVudHJ5T25QYWdlQWN0aW9uJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJzogJ2RlbGV0ZUVudHJpZXMnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAndXBkYXRlRW50cnlPblJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnOiAnY2xlYW5FbnRyaWVzJyxcclxuICAgICAgJ3N5bmM6ZW50cnknOiAnc3luY0VudHJ5JyxcclxuICAgICAgJ3RhZzplbnRyaWVzJzogJ3RhZ0VudHJpZXMnLFxyXG4gICAgICAncmVtb3ZlOnRhZyc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAnYWRkOnRhZyc6ICdhZGRUYWcnLFxyXG5cclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInOiAnY2hhbmdlU0JTZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnOiAnY2hhbmdlVGhlbWVTZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZSc6ICd1cGRhdGVQYWdlTm90ZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVPbkNoYW5nZWRTeW5jOiBmYWxzZSxcclxuXHJcbiAgLy8gQURET04gTUVUSE9EU1xyXG4gIHNhdmVBY3RpdmF0aW9uU3RhdGUoYWN0aXZlKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hY3RpdmUgPSBhY3RpdmU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU1lOQyBNRVRIT0RTXHJcbiAgdG9nZ2xlU3luYyhmaWVsZCwgdmFsKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBmdW5jdGlvbihzeW5jKSB7XHJcblxyXG4gICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuXHJcbiAgICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IHN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBzeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgICByZXR1cm4gc3luYztcclxuICAgIH0sICdsb2NhbCcpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgc3luYyA9PiB7XHJcbiAgICAgICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3RvZ2dsZV9zeW5jJyk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDp0b2dnbGUtc3luYycsIGZpZWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndG9nZ2xlZDpzeW5jIHRvZ2dsZWQ6c3luYy0nICsgZmllbGQsIGZpZWxkLCB2YWwpKVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTRVRUSU5HUyBNRVRIT0RTXHJcbiAgdXBkYXRlU2V0dGluZ3ModXBkYXRlciwgc2V0dGluZywgZXJyb3IpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCB1cGRhdGVyKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6JyArIHNldHRpbmcgKyAnLXNldHRpbmdzJykpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7IGlmIChlcnJvcikgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTsgfSk7XHJcbiAgfSxcclxuICBhZGRDdXN0b21NYXJrZXIoa2V5LCBzdHlsZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0gPSAgeyBzdHlsZSB9OyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfYWRkX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICByZW1vdmVDdXN0b21NYXJrZXIoa2V5KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IGRlbGV0ZSBzZXR0aW5ncy5tYXJrZXJzW2tleV07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9yZW1vdmVfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVN0eWxlKGtleSwgc3R5bGUpIHtcclxuICAgIGlmICgha2V5KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBzdHlsZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc3R5bGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VCZ0NvbG9yKGtleSwgY29sb3IpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgbWFya2VyID0gc2V0dGluZ3MubWFya2Vyc1trZXldO1xyXG5cclxuICAgICAgICBpZiAobWFya2VyKSB7XHJcbiAgICAgICAgICBsZXQgc3BsaXQgPSBtYXJrZXIuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgICAgICBsID0gc3BsaXQubGVuZ3RoLCBzdHlsZTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gc3BsaXRbbF07XHJcbiAgICAgICAgICAgIGlmIChzdHlsZS5pbmNsdWRlcygnYmFja2dyb3VuZC1jb2xvcicpKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gbWFya2VyLnN0eWxlLnJlcGxhY2UoL2JhY2tncm91bmQtY29sb3I6Iy57Nn0vLCAnYmFja2dyb3VuZC1jb2xvcjonICsgY29sb3IpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgICAgfSxcclxuICAgICAgJ2JnLWNvbG9yJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQXV0b05vdGVTZXR0aW5nKGtleSwgYXV0b25vdGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLmF1dG9ub3RlID0gYXV0b25vdGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2F1dG9ub3RlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfdG9nZ2xlX2F1dG9ub3RlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU1hcmtNZXRob2QobWV0aG9kKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9IG1ldGhvZDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFyay1tZXRob2QnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVTaG9ydGN1dFNldHRpbmcoa2V5LCBzdGF0dXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMV0gPSBzdGF0dXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfX3RvZ2dsZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTaG9ydGN1dFNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVswXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTb3J0T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc29ydGVkID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3NvcnQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlVmlld09wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnZpZXcgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAndmlldydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VDdXN0b21TZWFyY2godmFsdWVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoID0gdmFsdWVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdXN0b20tc2VhcmNoJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NlYXJjaCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VDb3VudFBlclBhZ2UodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5wcCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjb3VudC1wZXItcGFnZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVDdG1TZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMl0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3RtJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY3RtJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNhdmVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3NhdmVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVJbW11dE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pbW11dCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaW1tdXRvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVEcm9wTG9zc2VzT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2Ryb3Bsb3NzZXNvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVIYXNoT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2ggPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2hhc2hvcHQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUHJpdlNhdmVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdiA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncHJpdnNhdmVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9wcml2J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU5hbWluZ09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmcgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25hbWluZycsXHJcbiAgICAgICdlcnJvcl9zYXZlX25hbWluZydcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3Rlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbm90aWZ5J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVF1aWNrYnV0dG9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5W3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdxdWlja2J1dHRvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2Rvd25sb2FkJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHN3aXRjaFF1aWNrYnV0dG9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5W3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdxdWlja2J1dHRvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2Rvd25sb2FkJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGlmaWNhdGlvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbm90aWZ5J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU1pc2NTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtaXNjJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVRCQlBvd2VyU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAndGJicG93ZXInLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU0JTZXR0aW5ncyh0YWIsIHVuZm9sZGVkKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50YWJzW3RhYl0udW5mb2xkZWQgPSB1bmZvbGRlZDsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG4gIGNoYW5nZVRoZW1lU2V0dGluZ3ModGhlbWUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRoZW1lID0gdGhlbWU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSElTVE9SWSBNRVRIT0RTXHJcbiAgY2xlYW5FbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGkgPSBuYW1lcy5sZW5ndGgsIG5hbWU7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllc1tuYW1lXSkgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ2xvY2FsJykgeyB0aGlzLmVtaXQoJ2NsZWFuZWQ6ZW50cmllcycpOyB9fSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2NsZWFuX2hpc3RvcnknKSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5jbGVhbkVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSk7XHJcbiAgfSxcclxuICBzYXZlRW50cnkoZW50cnkpIHtcclxuICAgIGVudHJ5Lmxvc3QgPSBbXTtcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCdzYXZlZDplbnRyeScsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5JywgJ2Vycm9yX3NhdmVfZW50cnknKSk7XHJcbiAgfSxcclxuICBzYXZlTmV3TmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV0pO1xyXG4gICAgICBlbnRyeS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdID0gZW50cnk7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1uYW1lJywgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdLCBvbGROYW1lKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgYXJlYSkge1xyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgY29uc3QgcmVjZWl2ZWRDb21wbGV0ZUVudHJ5ID0gISFlbnRyeS51cmw7XHJcbiAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAocmVjZWl2ZWRDb21wbGV0ZUVudHJ5KSB7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkuZW50cmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGVudHJ5LnN5bmNlZDtcclxuICAgICAgICAgIGZvciAobGV0IGUgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5Lmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdW2VdID0gZW50cnlbZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmICghZm91bmQpIHsgdGhpcy51cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgZW50cnkuc3luY2VkID8gJ2xvY2FsJyA6ICdzeW5jJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1vbi1zYXZlJywgZW50cnkpKTtcclxuICB9LFxyXG4gIGRlbGV0ZUVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzICYmIE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHVybCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS51cmw7XHJcbiAgICAgICAgICBoYXNoU2Vuc2l0aXZlID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyeScsIG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3MgPSBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzdG9yZWRNYXJrc0lEcyA9IFtdO1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzSURzID0gW107XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJlc3RvcmVkTWFya3MuZm9yRWFjaChtYXJrID0+IHJlc3RvcmVkTWFya3NJRHMucHVzaChtYXJrLmlkKSk7XHJcblxyXG4gICAgICAgICAgbGV0IGwgPSBvbGRMb3N0TWFya3MubGVuZ3RoLCBpZDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gb2xkTG9zdE1hcmtzW2xdLmlkO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNYXJrc0lEcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrc0lEcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvc3RNYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9sZExvc3RNYXJrc0lEcy5pbmNsdWRlcyhtYXJrLmlkKSkgb2xkTG9zdE1hcmtzLnB1c2gobWFyayk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIGNvbnN0IGFyZWFfMSA9IHZhbCA/ICdsb2NhbCcgOiAnc3luYyc7XHJcbiAgICBjb25zdCBhcmVhXzIgPSB2YWwgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGxldCBlbnRyeTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYV8xKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhXzIpXHJcblxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXN5bmMnLCBlbnRyeSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnN5bmMtZW50cnknLCBuYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGFnRW50cmllcyhuYW1lcywgdGFnKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgbmFtZXMuc3luYy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sICdzeW5jJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgICAgICBuYW1lcy5sb2NhbC5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgJ2xvY2FsJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZEVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnKTtcclxuICAgICAgaWYgKHN0b3JlZEVudHJ5LnRhZykge1xyXG4gICAgICAgIHN0b3JlZEVudHJ5LnRhZyA9IHN0b3JlZEVudHJ5LnRhZ1xyXG4gICAgICAgICAgLnJlcGxhY2UocngsICcgJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzfFxccyQvLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9LywgJyAnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgdGhpcy5hZGRUYWdUb0VudHJ5KGhpc3RvcnkuZW50cmllc1tuYW1lXSwgdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIGFkZFRhZ1RvRW50cnkoZW50cnksIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIGVudHJ5LnRhZyA9ICcnO1xyXG4gICAgZWxzZSBpZiAoIWVudHJ5LnRhZykgZW50cnkudGFnID0gdGFnO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcsICdnJyk7XHJcbiAgICAgIGlmIChlbnRyeS50YWcuc2VhcmNoKHJ4KSA9PT0gLTEpIHtcclxuICAgICAgICBlbnRyeS50YWcgKz0gJyAnICsgdGFnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcblxyXG4gIC8vIFBBR0UgTk9URSBNRVRIT0RTXHJcbiAgdXBkYXRlUGFnZU5vdGVzKHVybCwgbm90ZXMpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgncGFnZW5vdGVzJywgcGFnZW5vdGVzID0+IHtcclxuICAgICAgcGFnZW5vdGVzW3VybF0gPSBub3RlcztcclxuICAgICAgcmV0dXJuIHBhZ2Vub3RlcztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMub25TdG9yYWdlQ2hhbmdlZCkpO1xyXG4gIH0sXHJcbiAgb25TdG9yYWdlQ2hhbmdlZChjaGFuZ2VkSXRlbSkge1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnNldHRpbmdzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c2V0dGluZ3MnKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5oaXN0b3J5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6aGlzdG9yeScpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnBhZ2Vub3RlcykgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Vub3RlcycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAvLydzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICBsb2dzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWxvZ3MnLFxyXG4gICAgICBleHBvcnQ6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9ZXhwb3J0JyxcclxuICAgICAgc3luYzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zeW5jJ1xyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgYnJvd3Nlci50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKHRhYiA9PiB0aGlzLmVtaXQoJ2FjdGl2YXRlZDp0YWInLCB0YWIudGFiSWQsICh0YWIudXJsIHx8ICcnKSkpO1xyXG4gICAgICBicm93c2VyLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlZCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFuZ2VkLnVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnVybCcsIHRhYklkLCBjaGFuZ2VkLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb3Blbih1cmxzLCBuYW1lcykge1xyXG4gICAgICB1cmxzID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnID8gW3VybHNdIDogdXJscztcclxuICAgICAgbmFtZXMgPSB0eXBlb2YgbmFtZXMgPT09ICdzdHJpbmcnID8gW25hbWVzXSA6IG5hbWVzO1xyXG4gICAgICBsZXQgbCA9IHVybHMubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICB1cmw7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAoZnVuY3Rpb24oc2VsZiwgbCkge1xyXG4gICAgICAgICAgdXJsID0gdXJsc1tsXTtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IHVybHNbbF0gfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlY3VyaXR5V2FybmluZykgc2VsZi5lbWl0KCdmYWlsZWQ6b3Blbi10YWInKTtcclxuICAgICAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5hbWVzKSBzZWxmLmVtaXQoJ29wZW5lZDplbnRyeScsIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWVzW2xdIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSh0aGlzLCBsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5BZGRvblBhZ2UoaWQpIHtcclxuICAgICAgdGhpcy5vcGVuKHRoaXMudXJsc1tpZF0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0UGFnZSh2ZXJzaW9uLCBsb2FkUmVhc29uKSB7XHJcbiAgICAgIGlmIChsb2FkUmVhc29uICYmIGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJyB8fCBsb2FkUmVhc29uID09PSAndXBkYXRlJykgdGhpcy5vcGVuQWRkb25QYWdlKCduZXdzJyk7XHJcbiAgICB9LFxyXG4gICAgb3BlblNlYXJjaCh3b3JkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgY3VzdG9tID0gc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2gsIHVybDtcclxuICAgICAgICBpZiAoY3VzdG9tKSB1cmwgPSAnaHR0cHM6Ly8nICsgY3VzdG9tWzBdICsgd29yZCArIGN1c3RvbVsxXTtcclxuICAgICAgICBlbHNlIHVybCA9ICdodHRwczovLycgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nICsgd29yZDtcclxuICAgICAgICB0aGlzLm9wZW4odXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2luc3RhbGw6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnY2hlY2s6c3RvcmFnZSc6ICdjaGVja1N0b3JhZ2VPblN0YXJ0JyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJzogJ2ltcG9ydFN0b3JhZ2UnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3M7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykge1xyXG4gICAgICAgIHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gc2V0dGluZ3MuaGlzdG9yeTtcclxuICAgICAgICBjb25zdCBtaXNjID0gc2V0dGluZ3MubWlzYztcclxuICAgICAgICBjb25zdCBub3RlVHlwZXMgPSAncGJtTm90ZSBjaGFuZ2VkTm90ZSBlcnJvck5vdGUgc3VjY2Vzc05vdGUnLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLm4pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5uID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5uO1xyXG4gICAgICAgICAgbWlzYy5ub3RlaWNvbiA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgICAgICAgbWlzYy5ub3Rlb25jbGljayA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5hcnJvd3VwKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3d1cCA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3d1cDtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd2Rvd24gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93ZG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuZFswXSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmRbMF0gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLnNiKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLnNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5jbSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmNtID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5jbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWFya2Vycy5tLnN0eWxlKSB7XHJcbiAgICAgICAgICBsZXQgc3R5bGU7XHJcbiAgICAgICAgICBmb3IgKGxldCBtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBtYXJrZXJzW21dO1xyXG4gICAgICAgICAgICBtYXJrZXJzW21dID0geyBzdHlsZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnNvcnRlZCkge1xyXG4gICAgICAgICAgaGlzdG9yeS5zb3J0ZWQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGlzdG9yeS52aWV3KSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3Rvcnkuc2F2ZUluUHJpdiAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNhdmVJblByaXYgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaW1tdXQgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pbW11dCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaWdub3JlSGFzaCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5Lmlnbm9yZUhhc2ggPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuZHJvcExvc3NlcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmRyb3BMb3NzZXMgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm90ZVR5cGVzLmZvckVhY2gobm90ZVR5cGUgPT4ge1xyXG4gICAgICAgICAgaWYgKCFtaXNjW25vdGVUeXBlXSkge1xyXG4gICAgICAgICAgICBtaXNjW25vdGVUeXBlXSA9IGRlZmF1bHRTZXR0aW5ncy5taXNjW25vdGVUeXBlXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIW1pc2MudG11aXBvcykge1xyXG4gICAgICAgICAgbWlzYy50bXVpcG9zID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudG11aXBvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLm5vdGV0cmFuc3AgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy5ub3RldHJhbnNwID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtaXNjLm1hcmttZXRob2QpIHtcclxuICAgICAgICAgIG1pc2MubWFya21ldGhvZCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm1hcmttZXRob2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5wcm9ncmVzc2JhciAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLnByb2dyZXNzYmFyID0gZGVmYXVsdFNldHRpbmdzLm1pc2MucHJvZ3Jlc3NiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy50YmJwb3dlciAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLnRiYnBvd2VyID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNiKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zYjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5zYi50aGVtZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGFicy50aGVtZXMgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGFicy50aGVtZXM7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50aGVtZSA9IGRlZmF1bHRTZXR0aW5ncy5zYi50aGVtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnKTtcclxuICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gIH0sXHJcbiAgdXBkYXRlSGlzdG9yeShoaXN0b3J5KSB7XHJcbiAgICBkZWxldGUgaGlzdG9yeS5vcmRlcjtcclxuXHJcbiAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgZW50cnk7XHJcblxyXG4gICAgaWYgKCFsKSByZXR1cm4gaGlzdG9yeTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGVudHJ5ID0gdGhpcy5maXhIaXN0b3J5RGF0ZXMoZW50cmllc1tuYW1lc1tsXV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB0eXBlb2YgZW50cnkuc3luY2VkID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoaXN0b3J5O1xyXG4gIH0sXHJcbiAgZml4SGlzdG9yeURhdGVzKGVudHJ5KSB7XHJcbiAgICBjb25zdCBsYW5nID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5maXJzdCAhPT0gJ251bWJlcicpIGVudHJ5LmZpcnN0ID0gbmV3IERhdGUoKGVudHJ5LmZpcnN0W2xhbmddIHx8IGVudHJ5LmZpcnN0LmVuIHx8IGVudHJ5LmZpcnN0LmRlIHx8IGVudHJ5LmZpcnN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5Lmxhc3QgIT09ICdudW1iZXInKSBlbnRyeS5sYXN0ID0gbmV3IERhdGUoKGVudHJ5Lmxhc3RbbGFuZ10gfHwgZW50cnkubGFzdC5lbiB8fCBlbnRyeS5sYXN0LmRlIHx8IGVudHJ5Lmxhc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG4gIG1lcmdlSGlzdG9yaWVzKG5ld0hpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKG9sZEhpc3RvcnkgPT4ge1xyXG5cclxuICAgICAgbGV0IGVudHJpZXMgPSBuZXdIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgb2xkRW50cmllcyA9IG9sZEhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG9sZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRW50cmllcyksXHJcbiAgICAgICAgICBhY2NlcHRlZEVudHJpZXMgPSB7fSxcclxuICAgICAgICAgIG5hbWUsIGVudHJ5LCB1cmwsIHVybEV4aXN0cywgZTtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIHVybEV4aXN0cyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIW9sZE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB1cmwgPSBlbnRyeS51cmw7XHJcblxyXG4gICAgICAgICAgZm9yIChlIGluIG9sZEVudHJpZXMpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEVudHJpZXNbZV0udXJsID09PSB1cmwpIHtcclxuICAgICAgICAgICAgICB1cmxFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXVybEV4aXN0cykge1xyXG4gICAgICAgICAgICBlbnRyeS5zeW5jZWQgPSBhcmVhID09PSAnc3luYyc7XHJcbiAgICAgICAgICAgIGFjY2VwdGVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBhIGluIGFjY2VwdGVkRW50cmllcykge1xyXG4gICAgICAgICAgX2VudHJpZXNbYV0gPSBhY2NlcHRlZEVudHJpZXNbYV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICB9LCBhcmVhKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldFN0b3JhZ2VPblVwZ3JhZGUocHJldlZlcnNpb24gPSAnMicsIGxvYWRSZWFzb24pIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIGlmIChsb2FkUmVhc29uICE9PSAnaW5zdGFsbCcpIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZScpO1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdzeW5jJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKSlcclxuICAgIC8vLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnLCBwcmV2VmVyc2lvbikpXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKTtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbicsIGUudG9TdHJpbmcoKSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNoZWNrU3RvcmFnZU9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdzeW5jJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgfSkpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpO1xyXG4gIH0sXHJcbiAgaW1wb3J0U3RvcmFnZShpbXBvcnRlZFN0b3JhZ2UsIGFyZWEpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IGltcG9ydGVkU3RvcmFnZS5zZXR0aW5ncyxcclxuICAgICAgICBoaXN0b3J5ID0gaW1wb3J0ZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgaWYgKCFoaXN0b3J5ICYmICFzZXR0aW5ncykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9lbXB0eScpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICghaGlzdG9yeSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzX3MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2Vzc19oID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzX3MpIHtcclxuICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoc3VjY2Vzc19zID09PSAnb3V0ZGF0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOnNldHRpbmdzIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkge1xyXG4gICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ291dGRhdGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH0sXHJcbiAgaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXJnZUhpc3Rvcmllcyh0aGlzLnVwZGF0ZUhpc3RvcnkoaGlzdG9yeSwgdHJ1ZSksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3ZpZXc6ZW50cnknOiAnb3BlbkVudHJ5RGV0YWlsUGFnZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuRW50cnlEZXRhaWxQYWdlKG5hbWUpIHtcclxuICAgICAgY29uc3QgcG9wdXBVUkwgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdjb250ZW50L2RldGFpbC12aWV3L2RldGFpbC12aWV3Lmh0bWwnKTtcclxuXHJcbiAgICAgIGJyb3dzZXIud2luZG93cy5nZXRDdXJyZW50KCkudGhlbihjdXJyZW50V2luZG93ID0+IHtcclxuXHJcbiAgICAgICAgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh7XHJcbiAgICAgICAgICB1cmw6IHBvcHVwVVJMICsgJyMnICsgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxyXG4gICAgICAgICAgdHlwZTogJ3BhbmVsJyxcclxuICAgICAgICAgIGhlaWdodDogY3VycmVudFdpbmRvdy5oZWlnaHQgLSAyMixcclxuICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbihjdXJyZW50V2luZG93LndpZHRoLCA5ODApLFxyXG4gICAgICAgICAgaW5jb2duaXRvOiBjdXJyZW50V2luZG93LmluY29nbml0b1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5uZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdiYWNrZ3JvdW5kJyxcclxuICB0eXBlOiAnYmFja2dyb3VuZCcsXHJcbiAgcG9zdHBvbmVDb25uZWN0aW9uOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYycsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5LW9uLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnLFxyXG4gICAgICAndXBkYXRlZDpsb2dzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmJnLWNvbG9yLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3VzdG9tLXNlYXJjaC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNhdmVvcHQtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncycsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cmllcycsXHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncycsXHJcbiAgICAgICdpbXBvcnRlZDpoaXN0b3J5JyxcclxuICAgICAgJ2N0eDptJyxcclxuICAgICAgJ2N0eDpkJyxcclxuICAgICAgJ2N0eDpiJyxcclxuICAgICAgJ2N0eDotYicsXHJcbiAgICAgICdjdHg6bicsXHJcbiAgICAgICdjdHg6YycsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ2NoYW5nZWQ6dXJsJ1xyXG4gICAgXSxcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAnZW50cnk6Zm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6b3JkZXJlZC1tYXJrcydcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9NT0RVTEUoe1xyXG5cclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnLFxyXG4gIGFyZWFfaGlzdG9yeTogX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnLFxyXG4gIGFyZWFfcGFnZW5vdGVzOiBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJyxcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLnJlbW92ZSgnbG9ncycpO1xyXG5cclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgc3luYyA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2Uuc3luYyA/IGxvY2FsU3RvcmFnZS5zeW5jIDogX0RFRkFVTFRfU1RPUkFHRS5zeW5jO1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2V0X3N5bmMoc3luYyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcbiAgc2V0KGZpZWxkLCB2YWwpIHtcclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfc2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG4gICAgcmV0dXJuIHRoaXNbJ19zZXRfJyArIGZpZWxkXSh2YWwpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGUoLi4uYXJncyk7XHJcbiAgfSxcclxuXHJcbiAgaXNFbXB0eShhcmVhID0gJ3N5bmMnKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAoIU9iamVjdC5rZXlzKHN0b3JhZ2UpLmxlbmd0aCAmJiBzdG9yYWdlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfSxcclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH0sXHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gIH0sXHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IChzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfcHJpdnNhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RiYnBvd2VyKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcblxyXG4gIF9zZXRfc3RvcmFnZShhcmVhID0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NldF9zZXR0aW5ncyhhcmVhKS50aGVuKCgpID0+IHRoaXMuX3NldF9oaXN0b3J5KGFyZWEpKTtcclxuICB9LFxyXG4gIF9zZXRfc3luYyhzeW5jKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHN5bmM6IHN5bmMgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgc3luYzogc3luYyB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IHN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfc2V0dGluZ3MoYXJlYSA9IHRoaXMuYXJlYV9zZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgc2V0dGluZ3M6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2hpc3RvcnkoYXJlYSA9IHRoaXMuYXJlYV9oaXN0b3J5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IGhpc3Rvcnk6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0UuaGlzdG9yeSkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfdmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KSk7XHJcbiAgfSxcclxuICBfc2V0X2xvZyhsb2cpIHtcclxuICAgIGlmIChsb2cuY2xlYXIpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBbXSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9nZXRfbG9ncygpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgIGxvZ3MucHVzaChsb2cpO1xyXG4gICAgICBpZiAobG9ncy5sZW5ndGggPiBfR0xPQkFMX1NFVFRJTkdTLk1BWF9MT0dfRU5UUklFUykgbG9ncy5zaGlmdCgpO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IGxvZ3MgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfZW50cnkoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBoaXN0b3J5ID0gc3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmNsdWRlcyhlbnRyeS5uYW1lKSkgcmV0dXJuIHRoaXMuX3VwZGF0ZV9lbnRyeShlbnRyeSk7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5zZXQoeyBoaXN0b3J5OiBoaXN0b3J5IH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3VwZGF0ZShmaWVsZCwgdXBkYXRlciwgYXJlYSA9IHRoaXNbJ2FyZWFfJyArIGZpZWxkXSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmICghc3RvcmFnZVtmaWVsZF0pIHtcclxuICAgICAgICAgIHN0b3JhZ2VbZmllbGRdID0gX0NPUFkoX0RFRkFVTFRfU1RPUkFHRVtmaWVsZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cGRhdGUgPSB7fTtcclxuICAgICAgICB1cGRhdGVbZmllbGRdID0gdXBkYXRlci5jYWxsKHRoaXMsIHN0b3JhZ2VbZmllbGRdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQodXBkYXRlKS50aGVuKCgpID0+IHVwZGF0ZVtmaWVsZF0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0VYVEVORCwgX0dFVF9BQ1RJVkVfVEFCLCBfTU9EVUxFLCBfUE9SVCwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICcnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjMyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy90bTQ4LnBuZ1wiOyIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==