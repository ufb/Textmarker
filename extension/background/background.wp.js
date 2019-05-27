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

var _pageAction = __webpack_require__(/*! ./modules/page-action */ "./background/modules/page-action.js");

var _pageAction2 = _interopRequireDefault(_pageAction);

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
    (0, _pageAction2["default"])();

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
      'failed:restore-range': 'log',
      'failed:inject-content-script': 'onScriptInjectionFailure',
      'failed:inject-stylesheet': 'onCSSInjectionFailure'
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
  },
  onScriptInjectionFailure: function onScriptInjectionFailure() {
    this.log('js_injection_failure');
  },
  onCSSInjectionFailure: function onCSSInjectionFailure() {
    this.log('css_injection_failure');
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
      'changed:url': 'onURLChange',
      'completed:tab': 'onTabCompleted',
      'clicked:page-action': 'handleInjections',
      'save:entry?': 'onSaveNewRequest',
      'update:entry?': 'onUpdateRequest',
      'name:entry?': 'onNamingRequest',
      'opened:entry': 'tempSaveEntryMetaData'
    }
  },
  queuedForTabCompleted: {},
  injectedScripts: {},
  recentlyOpenedEntry: null,
  onTabCompleted: function onTabCompleted(tabId) {
    if (this.queuedForTabCompleted[tabId]) {
      this.attemptInjections(tabId, this.queuedForTabCompleted[tabId]);
      delete this.queuedForTabCompleted[tabId];
    }
  },
  onURLChange: function onURLChange(tabId, changed) {
    if (changed.status && changed.status !== 'complete') {
      this.queuedForTabCompleted[tabId] = changed.url;
    } else {
      this.attemptInjections(tabId, changed.url, true);
    }
  },
  attemptInjections: function attemptInjections(tabId, newUrl, noReload) {
    var _this = this;

    _storage2["default"].get('settings').then(function (settings) {
      if (settings.addon.autocs) {
        _this.handleInjections(tabId, newUrl, noReload);
      }
    });
  },
  handleInjections: function handleInjections(tabId, newUrl, noReload) {
    var _this2 = this;

    var registered = this.injectedScripts[tabId];
    var sameHashlessUrls = registered && (0, _utils._HASHLESS)(registered.url) === (0, _utils._HASHLESS)(newUrl);
    var reloaded = registered && !noReload;

    if (!registered || reloaded) {
      this.injectContentScript(tabId, newUrl).then(function () {
        _storage2["default"].get('history').then(function (history) {
          var matches = _this2.findMatchingEntries(history, newUrl);

          var entries = _this2.filterMatches(matches);

          if (entries) {
            _this2.emit('entries:found', {
              entries: entries,
              recentlyOpenedEntry: _this2.recentlyOpenedEntry,
              locked: !!matches.lockedEntries.length
            }, {
              tab: tabId
            });

            _this2.recentlyOpenedEntry = null;
          }
        });
      });
    } else if (sameHashlessUrls && registered.entry && registered.entry.hashSensitive) {
      this.emit('hash:changed', newUrl);
    }
  },
  injectContentScript: function injectContentScript(tabId, url) {
    var _this3 = this;

    return browser.tabs.executeScript(tabId, {
      file: '../content/page-injections/injection.wp.js',
      allFrames: true,
      runAt: 'document_idle'
    }).then(function () {
      _this3.injectedScripts[tabId] = {
        url: url
      };

      _this3.insertCSS(tabId);
    })["catch"](function (e) {
      var msg = e.toString();

      if (!msg.includes('Missing host permission for the tab')) {
        _this3.emit('failed:inject-content-script');
      }
    });
  },
  insertCSS: function insertCSS(tabId) {
    var _this4 = this;

    browser.tabs.insertCSS(tabId, {
      file: '../content/page-injections/injection.css',
      allFrames: true
    })["catch"](function (e) {
      var msg = e.toString();

      if (!msg.includes('Missing host permission for the tab')) {
        _this4.emit('failed:inject-stylesheet');
      }
    });
  },
  findMatchingEntries: function findMatchingEntries(history, url) {
    var hashlessPageUrl = (0, _utils._HASHLESS)(url);
    var entries = history.entries;
    var lockedEntries = [];
    var nonLockedEntries = [];
    var entry, pageUrl, entryUrl;

    for (var e in entries) {
      entry = entries[e];
      pageUrl = entry.hashSensitive ? url : hashlessPageUrl;
      entryUrl = entry.hashSensitive ? entry.url : (0, _utils._HASHLESS)(entry.url);

      if (pageUrl === entryUrl) {
        if (entry.locked) lockedEntries.push(entry);else nonLockedEntries.push(entry);
      }
    }

    return {
      lockedEntries: lockedEntries,
      nonLockedEntries: nonLockedEntries
    };
  },
  filterMatches: function filterMatches(matches) {
    var lockedEntries = matches.lockedEntries;
    var nonLockedEntries = matches.nonLockedEntries;
    var lockedEntriesCount = lockedEntries.length;
    var nonLockedEntriesCount = nonLockedEntries.length;
    var entries;

    if (lockedEntriesCount && nonLockedEntriesCount) {
      this.emit('warn:mixed-entry-types');
      entries = lockedEntries;
    } else if (nonLockedEntriesCount) {
      entries = [nonLockedEntries[0]];

      if (nonLockedEntriesCount > 1) {
        this.emit('warn:multiple-unlocked-entries');
      }

      this.emit('entry:found', entries[0]);
    }

    if (lockedEntriesCount) {
      this.emit('entry:found', lockedEntries);
    }

    return entries;
  },
  onNamingRequest: function onNamingRequest(sender, sendResponse) {
    var _this5 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      var priv = windowInfo.incognito;
      if (!priv) sendResponse(!priv);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this5.emit('failed:pbm');else sendResponse(saveInPriv);
        });
      }
    });
  },
  onSaveNewRequest: function onSaveNewRequest(entry) {
    var _this6 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this6.emit('granted:save-entry', entry);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this6.emit('failed:pbm');else _this6.emit('granted:save-entry', entry);
        });
      }
    });
  },
  onUpdateRequest: function onUpdateRequest(entry) {
    var _this7 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this7.emit('granted:update-entry', entry);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this7.emit('failed:pbm');else _this7.emit('granted:update-entry', entry);
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
        'failed:pbm': 'onFailedPBM',
        'failed:import': 'onFailedImport',
        'error:import': 'onImportError',
        'imported:storage': 'onImportSuccess',
        'error': 'onError',
        'warn:mixed-entry-types': 'onMixedEntryTypes',
        'warn:multiple-unlocked-entries': 'onMultipleUnlockedEntries',
        'failed:inject-content-script': 'onScriptInjectionFailure',
        'failed:inject-stylesheet': 'onCSSInjectionFailure'
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
        return settings.misc.vipNote;
      }, browser.i18n.getMessage('note_url'), 'error');
    },
    onFailedImport: function onFailedImport(error1, error2) {
      var errMessage1 = browser.i18n.getMessage(error1);
      var errMessage2 = error2 ? '\n\n' + browser.i18n.getMessage(error2) : '';
      this.notify(function (settings) {
        return settings.misc.vipNote;
      }, browser.i18n.getMessage('note_import_failure', errMessage1 + errMessage2), 'error');
    },
    onImportError: function onImportError(error) {
      this.notify(function (settings) {
        return settings.misc.vipNote;
      }, browser.i18n.getMessage('note_import_warning', browser.i18n.getMessage(error)), 'warning');
    },
    onImportSuccess: function onImportSuccess() {
      this.notify(function (settings) {
        return settings.misc.vipNote;
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
    onScriptInjectionFailure: function onScriptInjectionFailure() {
      this.notify(function (settings) {
        return settings.misc.vipNote;
      }, browser.i18n.getMessage('js_injection_failure'), 'error');
    },
    onCSSInjectionFailure: function onCSSInjectionFailure() {
      this.notify(function (settings) {
        return settings.misc.vipNote;
      }, browser.i18n.getMessage('css_injection_failure'), 'error');
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

/***/ "./background/modules/page-action.js":
/*!*******************************************!*\
  !*** ./background/modules/page-action.js ***!
  \*******************************************/
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
        'changed:url': 'show'
      }
    },
    autoinit: function autoinit() {
      var _this = this;

      browser.pageAction.onClicked.addListener(function (tab) {
        _this.emit('clicked:page-action', tab.id, tab.url);

        browser.pageAction.hide(tab.id);
      });
    },
    show: function show(tabId) {
      _storage2["default"].get('settings').then(function (settings) {
        if (!settings.addon.autocs) {
          browser.pageAction.show(tabId);
        }
      });
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
      var ignoreHash = Array.isArray(entry) ? !entry[0].hashSensitive : !entry.hashSensitive;
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
      'change:autocs-setting': 'toggleAutocsOpt',
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
      this.setAreas(sync);
      return sync;
    }, 'local').then(function () {
      _storage2["default"].update('sync', function (sync) {
        sync[field] = val;
        return sync;
      }, 'sync')["catch"](function () {
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
  toggleAutocsOpt: function toggleAutocsOpt(val) {
    this.updateSettings(function (settings) {
      settings.addon.autocs = val;
      return settings;
    }, 'autocs', 'error_save_autocs');
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
        'toggled:addon': 'toggleTabEventHandlers',
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
    tabEventHandlers: {
      onActivated: null,
      onUpdated: null
    },
    autoinit: function autoinit() {
      var _this = this;

      _storage2["default"].get('mode').then(function (mode) {
        return _this.toggleTabEventHandlers(mode);
      });
    },
    addTabEventHandlers: function addTabEventHandlers() {
      if (!this.tabEventHandlers.onActivated) {
        var onActivated = this.tabEventHandlers.onActivated = this.onActivated.bind(this);
        browser.tabs.onActivated.addListener(onActivated);
      }

      if (!this.tabEventHandlers.onUpdated) {
        var onUpdated = this.tabEventHandlers.onUpdated = this.onUpdated.bind(this);
        browser.tabs.onUpdated.addListener(onUpdated, {
          properties: ['status']
        });
      }
    },
    removeTabEventHandlers: function removeTabEventHandlers() {
      var _this2 = this;

      ['onActivated', 'onUpdated'].forEach(function (ev) {
        if (_this2.tabEventHandlers[ev]) {
          browser.tabs[ev].removeListener(_this2.tabEventHandlers[ev]);
        }
      });
      this.tabEventHandlers = {};
    },
    toggleTabEventHandlers: function toggleTabEventHandlers(on) {
      if (on) this.addTabEventHandlers();else this.removeTabEventHandlers();
    },
    onActivated: function onActivated(tab) {
      this.emit('activated:tab', tab.tabId, tab.url || '');
    },
    onUpdated: function onUpdated(tabId, changed) {
      if (changed.url) {
        this.emit('changed:url', tabId, changed);
      } else if (changed.status && changed.status === 'complete') {
        this.emit('completed:tab', tabId);
      }
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
      var _this3 = this;

      _storage2["default"].get('settings').then(function (settings) {
        var custom = settings.misc.customSearch,
            url;
        if (custom) url = 'https://' + custom[0] + word + custom[1];else url = 'https://' + browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/' + word;

        _this3.open(url);
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
        var noteTypes = 'pbmNote changedNote errorNote successNote vipNote'.split(' ');

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
          if (typeof misc[noteType] !== 'boolean') {
            misc[noteType] = defaultSettings.misc[noteType];
          }
        });

        if (!misc.tmuipos) {
          misc.tmuipos = defaultSettings.misc.tmuipos;
        }

        if (typeof misc.notetransp !== 'boolean') {
          misc.notetransp = defaultSettings.misc.notetransp;
        }

        if (typeof misc.noteplainview !== 'boolean') {
          misc.noteplainview = defaultSettings.misc.noteplainview;
        }

        if (!misc.markmethod) {
          misc.markmethod = defaultSettings.misc.markmethod;
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

        if (typeof settings.addon.autocs !== 'boolean') {
          settings.addon.autocs = defaultSettings.addon.autocs;
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
    ONEOFF: ['started:app', 'toggled:addon', 'toggled:sync', 'updated:settings', 'updated:history', 'updated:history-on-restoration', 'updated:entry-sync', 'updated:entry-name', 'updated:logs', 'updated:ctm-settings', 'updated:misc-settings', 'updated:naming-settings', 'updated:bg-color-settings', 'updated:custom-search-settings', 'updated:saveopt-settings', 'updated:mark-method-settings', 'entries:found', 'saved:entry', 'deleted:entry', 'deleted:entries', 'imported:settings', 'imported:history', 'ctx:m', 'ctx:d', 'ctx:b', 'ctx:-b', 'ctx:n', 'ctx:c', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:undo', 'sidebar:redo', 'sidebar:copy', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'sidebar:retry-restoration', 'sidebar:selected-marker', 'opened:sidebar', 'changed:url'],
    CONNECTION: ['started:app', 'toggled:addon', 'toggled:sync', 'updated:settings', 'updated:entry-on-save', 'saved:entry', 'updated:pagenotes', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note', 'page-state', 'notes-state', 'entry:found', 'entry:found-for-tab', 'entry:deleted-for-tab', 'entry:ordered-marks']
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

exports["default"] = new _utils._STORE({
  init: function init() {
    var _this = this;

    browser.storage.sync.remove('logs');
    return browser.storage.local.get().then(function (localStorage) {
      var sync = localStorage && localStorage.sync ? localStorage.sync : _defaultStorage2["default"].sync;
      return _this._set_sync(sync);
    });
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
    var _this2 = this;

    var area = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return this._set_settings(area).then(function () {
      return _this2._set_history(area);
    });
  },
  _set_sync: function _set_sync(sync) {
    var _this3 = this;

    return browser.storage.local.set({
      sync: sync
    }).then(function () {
      return browser.storage.sync.set({
        sync: sync
      });
    }).then(function () {
      return _this3.setAreas(sync);
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
    var _this4 = this;

    return browser.storage[this.area_history].get().then(function (storage) {
      var history = storage.history;
      if (Object.keys(history.entries).includes(entry.name)) return _this4._update_entry(entry);
      history.entries[entry.name] = entry;
      return browser.storage[_this4.area_history].set({
        history: history
      });
    });
  },
  _update: function _update(field, updater) {
    var _this5 = this;

    var area = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this['area_' + field];
    return browser.storage[area].get().then(function (storage) {
      if (!storage[field]) {
        storage[field] = (0, _utils._COPY)(_defaultStorage2["default"][field]);
      }

      var update = {};
      update[field] = updater.call(_this5, storage[field]);
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
exports._HASHLESS = exports._ERRORTRACKER = exports._PORT = exports._STORE = exports._MODULE = exports._GET_ACTIVE_TAB = exports._EXTEND = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../utils/copy */ "./utils/copy.js");

var _extend = __webpack_require__(/*! ./../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _getActiveTab = __webpack_require__(/*! ./../utils/getActiveTab */ "./utils/getActiveTab.js");

var _module = __webpack_require__(/*! ./../utils/module */ "./utils/module.js");

var _store = __webpack_require__(/*! ./../utils/store */ "./utils/store.js");

var _port = __webpack_require__(/*! ./../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../utils/hashless */ "./utils/hashless.js");

var _errorTracker = __webpack_require__(/*! ./../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports._COPY = _copy._COPY;
exports._EXTEND = _extend2["default"];
exports._GET_ACTIVE_TAB = _getActiveTab._GET_ACTIVE_TAB;
exports._MODULE = _module._MODULE;
exports._STORE = _store._STORE;
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
      active: true,
      autocs: true
    },
    misc: {
      bmicon: true,
      noteicon: true,
      noteonclick: true,
      notetransp: false,
      noteplainview: false,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      vipNote: true,
      customSearch: false,
      tmuipos: 'top-right',
      markmethod: 'popup',
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
  js_injection_failure: 37,
  css_injection_failure: 38,
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

    _this.registerPortEvents();

    return _this;
  }

  _createClass(_PORT, [{
    key: "extend",
    value: function extend(events) {
      this.registerPortEvents(events);
    }
  }, {
    key: "registerPortEvents",
    value: function registerPortEvents(events) {
      events = events || this.events;
      var oneOffEvents, connectionBasedEvents;

      if (events) {
        oneOffEvents = events.ONEOFF;

        if (oneOffEvents) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var e = _step.value;
              this.on(e, this.proxy(this, this.sendMessage, e));
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
              this.on(f, this.proxy(this, this.postMessage, f));
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
    }
  }, {
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

/***/ }),

/***/ "./utils/store.js":
/*!************************!*\
  !*** ./utils/store.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._STORE = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

var _defaultStorage = __webpack_require__(/*! ../data/default-storage */ "./data/default-storage.js");

var _defaultStorage2 = _interopRequireDefault(_defaultStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _STORE =
/*#__PURE__*/
exports._STORE = function (_MODULE2) {
  _inherits(_STORE, _MODULE2);

  function _STORE(obj) {
    var _this;

    _classCallCheck(this, _STORE);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_STORE).call(this, obj));
    _this.initialized = false;
    _this.initializing = false;
    _this.area_settings = _defaultStorage2["default"].sync.settings ? 'sync' : 'local';
    _this.area_history = _defaultStorage2["default"].sync.history ? 'sync' : 'local';
    _this.area_pagenotes = _defaultStorage2["default"].sync.pagenotes ? 'sync' : 'local';
    return _this;
  }

  _createClass(_STORE, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      return browser.storage.local.get().then(function (storage) {
        if (storage && storage.sync) {
          _this2.setAreas(storage.sync);
        }
      });
    }
  }, {
    key: "setAreas",
    value: function setAreas(sync) {
      for (var area in sync) {
        this['area_' + area] = sync[area] ? 'sync' : 'local';
      }
    }
  }, {
    key: "onToggledSync",
    value: function onToggledSync() {
      var _this3 = this;

      this.init().then(function () {
        return _this3.emit('set-areas-after-sync-change');
      });
    }
  }, {
    key: "get",
    value: function get() {
      var _this4 = this;

      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

      if (this.initializing) {
        return new Promise(function (r) {
          return window.setTimeout(function () {
            return r(_this4.get(field));
          }, 10);
        });
      }

      var meth = this['_get_' + field];
      if (!meth) throw 'field ' + field + ' doesn\'t exist';

      if (!this.initialized) {
        this.initializing = true;
        this.initialized = true;
        return this.init().then(function () {
          _this4.initializing = false;
          return _this4['_get_' + field]();
        });
      }

      return this['_get_' + field]();
    }
  }, {
    key: "_get_storage",
    value: function _get_storage() {
      var _this5 = this;

      return browser.storage.local.get().then(function (localStorage) {
        return browser.storage.sync.get().then(function (syncedStorage) {
          ['version', 'logs'].forEach(function (field) {
            localStorage[field] = localStorage[field] || syncedStorage[field];
          });
          if (_this5.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
          return _this5._get_history().then(function (history) {
            localStorage.history = history;
            return localStorage;
          });
        });
      });
    }
  }, {
    key: "_get_local_storage",
    value: function _get_local_storage() {
      return browser.storage.local.get();
    }
  }, {
    key: "_get_synced_storage",
    value: function _get_synced_storage() {
      return browser.storage.sync.get();
    }
  }, {
    key: "_get_history",
    value: function _get_history() {
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
    }
  }, {
    key: "_get_settings",
    value: function _get_settings() {
      return browser.storage[this.area_settings].get().then(function (storage) {
        return storage.settings || _defaultStorage2["default"].settings;
      });
    }
  }, {
    key: "_get_logs",
    value: function _get_logs() {
      return browser.storage.local.get().then(function (localStorage) {
        if (!localStorage || !localStorage.logs) return [];
        return localStorage.logs;
      });
    }
  }, {
    key: "_get_version",
    value: function _get_version() {
      return browser.storage.local.get().then(function (localStorage) {
        if (!localStorage || !localStorage.version) {
          return browser.storage.sync.get().then(function (syncedStorage) {
            return syncedStorage.version || '';
          });
        }

        return localStorage.version;
      });
    }
  }]);

  return _STORE;
}(_module._MODULE);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsInJlZ2lzdGVyZWQiLCJzYW1lSGFzaGxlc3NVcmxzIiwicmVsb2FkZWQiLCJpbmplY3RDb250ZW50U2NyaXB0IiwiaGlzdG9yeSIsIm1hdGNoZXMiLCJmaW5kTWF0Y2hpbmdFbnRyaWVzIiwiZW50cmllcyIsImZpbHRlck1hdGNoZXMiLCJsb2NrZWQiLCJsb2NrZWRFbnRyaWVzIiwiZW50cnkiLCJoYXNoU2Vuc2l0aXZlIiwidGFicyIsImV4ZWN1dGVTY3JpcHQiLCJmaWxlIiwiYWxsRnJhbWVzIiwicnVuQXQiLCJpbnNlcnRDU1MiLCJlIiwidG9TdHJpbmciLCJoYXNobGVzc1BhZ2VVcmwiLCJub25Mb2NrZWRFbnRyaWVzIiwicGFnZVVybCIsImVudHJ5VXJsIiwibG9ja2VkRW50cmllc0NvdW50Iiwibm9uTG9ja2VkRW50cmllc0NvdW50Iiwib25OYW1pbmdSZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwid2luZG93SW5mbyIsInByaXYiLCJpbmNvZ25pdG8iLCJzYXZlSW5Qcml2Iiwib25TYXZlTmV3UmVxdWVzdCIsIm9uVXBkYXRlUmVxdWVzdCIsInRlbXBTYXZlRW50cnlNZXRhRGF0YSIsImRhdGEiLCJuYW1lIiwiYWRqdXN0TmFtZSIsIm5hbWluZyIsInJlbmFtZSIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiYXJlYSIsInN1YnN0cmluZyIsIl9HTE9CQUxfU0VUVElOR1MiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsImNvdW50ZXIiLCJnZXREb3VibGVOYW1lQ291bnQiLCJtZXRob2QiLCJ0cmltIiwiZmlyc3QiLCJ0b0xvY2FsZVN0cmluZyIsImV4aXN0aW5nTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwibCIsImNoZWNrcG9pbnQiLCJpc0RvdWJsZU5hbWUiLCJjaGVja3BvaW50X3N0YXJ0IiwiY2hlY2twb2ludF9lbmQiLCJ0ZXN0Iiwibm90aWZ5IiwiY29uZGl0aW9uIiwidHlwZSIsIm5vdGlmaWNhdGlvbnMiLCJpY29uVXJsIiwiZ2V0VVJMIiwib25TYXZlZEVudHJ5Iiwic2F2ZU5vdGUiLCJtaXNjIiwicGJtTm90ZSIsInZpcE5vdGUiLCJvbkZhaWxlZEltcG9ydCIsImVycm9yMSIsImVycm9yMiIsImVyck1lc3NhZ2UxIiwiZXJyTWVzc2FnZTIiLCJvbkltcG9ydEVycm9yIiwib25JbXBvcnRTdWNjZXNzIiwiZmFpbHVyZU5vdGUiLCJvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbiIsInN1Y2Nlc3NOb3RlIiwib25TYXZlRXJyb3IiLCJvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3IiLCJvbkRlbGV0ZUVycm9yIiwiZXJyb3JOb3RlIiwib25FcnJvciIsInBhZ2VBY3Rpb24iLCJoaWRlIiwic2hvdyIsInNldFBhbmVsIiwiaXNPcGVuIiwicGFuZWwiLCJzdG9yZUVudHJ5IiwiaWdub3JlSGFzaCIsIkFycmF5IiwiaXNBcnJheSIsInVwZGF0ZUVudHJ5IiwidGFiVXJsIiwicmVtb3ZlRW50cnkiLCJzYXZlZFVybCIsInNlbmRFbnRyeSIsImhhc2hsZXNzVXJsIiwiZW50cmllc0ZvclRoaXNUYWIiLCJzZW5kT3JkZXJlZE1hcmtzIiwibWFya3MiLCJ1cGRhdGVPbkNoYW5nZWRTeW5jIiwic2F2ZUFjdGl2YXRpb25TdGF0ZSIsInRvZ2dsZVN5bmMiLCJmaWVsZCIsInZhbCIsInN5bmMiLCJzZXRBcmVhcyIsInVwZGF0ZVNldHRpbmdzIiwidXBkYXRlciIsInNldHRpbmciLCJhZGRDdXN0b21NYXJrZXIiLCJrZXkiLCJzdHlsZSIsIm1hcmtlcnMiLCJyZW1vdmVDdXN0b21NYXJrZXIiLCJjaGFuZ2VTdHlsZSIsImNoYW5nZUJnQ29sb3IiLCJjb2xvciIsIm1hcmtlciIsInNwbGl0IiwicmVwbGFjZSIsImNoYW5nZUF1dG9Ob3RlU2V0dGluZyIsImF1dG9ub3RlIiwiY2hhbmdlTWFya01ldGhvZCIsIm1hcmttZXRob2QiLCJ0b2dnbGVTaG9ydGN1dFNldHRpbmciLCJjaGFuZ2VTaG9ydGN1dFNldHRpbmciLCJ2YWx1ZSIsImNoYW5nZVNvcnRPcHQiLCJzb3J0ZWQiLCJjaGFuZ2VWaWV3T3B0IiwidmlldyIsImNoYW5nZUN1c3RvbVNlYXJjaCIsInZhbHVlcyIsImN1c3RvbVNlYXJjaCIsImNoYW5nZUNvdW50UGVyUGFnZSIsInBwIiwidG9nZ2xlQ3RtU2V0dGluZyIsImNoYW5nZVNhdmVPcHQiLCJhdXRvc2F2ZSIsInRvZ2dsZUltbXV0T3B0IiwiaW1tdXQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwiZHJvcExvc3NlcyIsInRvZ2dsZUhhc2hPcHQiLCJ0b2dnbGVQcml2U2F2ZU9wdCIsImNoYW5nZU5hbWluZ09wdCIsInRvZ2dsZU5vdGVPcHQiLCJ0b2dnbGVRdWlja2J1dHRvbk9wdCIsInByb3AiLCJzd2l0Y2hRdWlja2J1dHRvbk9wdCIsInRvZ2dsZU5vdGlmaWNhdGlvbk9wdCIsImNoYW5nZU1pc2NTZXR0aW5nIiwidG9nZ2xlVEJCUG93ZXJTZXR0aW5nIiwidG9nZ2xlQXV0b2NzT3B0IiwiY2hhbmdlU0JTZXR0aW5ncyIsInVuZm9sZGVkIiwiY2hhbmdlVGhlbWVTZXR0aW5ncyIsInRoZW1lIiwiY2xlYW5FbnRyaWVzIiwibmFtZXMiLCJuYW1lc19sb2NhbCIsImxvc3QiLCJzYXZlRW50cnkiLCJzYXZlTmV3TmFtZSIsInVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uIiwic3luY2VkIiwicmVjZWl2ZWRDb21wbGV0ZUVudHJ5IiwiZm91bmQiLCJoYXNPd25Qcm9wZXJ0eSIsImRlbGV0ZUVudHJpZXMiLCJwb3AiLCJ1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24iLCJlbnRyeU5hbWUiLCJyZXN0b3JlZE1hcmtzIiwibG9zdE1hcmtzIiwib2xkTG9zdE1hcmtzIiwicmVzdG9yZWRNYXJrc0lEcyIsIm9sZExvc3RNYXJrc0lEcyIsImZvckVhY2giLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInBhZ2Vub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwidGFiRXZlbnRIYW5kbGVycyIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwidG9nZ2xlVGFiRXZlbnRIYW5kbGVycyIsImFkZFRhYkV2ZW50SGFuZGxlcnMiLCJiaW5kIiwicHJvcGVydGllcyIsInJlbW92ZVRhYkV2ZW50SGFuZGxlcnMiLCJldiIsInNlY3VyaXR5V2FybmluZyIsInNlbGYiLCJvcGVuQWRkb25QYWdlIiwib3BlbkluaXRQYWdlIiwib3BlblNlYXJjaCIsIndvcmQiLCJjdXN0b20iLCJkZWZhdWx0U2V0dGluZ3MiLCJfREVGQVVMVF9TVE9SQUdFIiwibm90ZVR5cGVzIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsIm5vdGVUeXBlIiwidG11aXBvcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3IiwidGJicG93ZXIiLCJ0aGVtZXMiLCJ1cGRhdGVIaXN0b3J5Iiwib3JkZXIiLCJmaXhIaXN0b3J5RGF0ZXMiLCJsYW5nIiwiZW4iLCJkZSIsImxhc3QiLCJtZXJnZUhpc3RvcmllcyIsIm5ld0hpc3RvcnkiLCJvbGRIaXN0b3J5Iiwib2xkRW50cmllcyIsIm9sZE5hbWVzIiwiYWNjZXB0ZWRFbnRyaWVzIiwidXJsRXhpc3RzIiwiX2VudHJpZXMiLCJhIiwic2V0U3RvcmFnZU9uVXBncmFkZSIsImlzRW1wdHkiLCJlbXB0eSIsImNoZWNrU3RvcmFnZU9uU3RhcnQiLCJpbXBvcnRTdG9yYWdlIiwiaW1wb3J0ZWRTdG9yYWdlIiwiaW1wb3J0U2V0dGluZ3MiLCJzdWNjZXNzIiwiaW1wb3J0SGlzdG9yeSIsInN1Y2Nlc3NfcyIsInN1Y2Nlc3NfaCIsIlByb21pc2UiLCJyZXNvbHZlIiwib3BlbkVudHJ5RGV0YWlsUGFnZSIsInBvcHVwVVJMIiwiZ2V0Q3VycmVudCIsImN1cnJlbnRXaW5kb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJfUE9SVCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsIk9ORU9GRiIsIkNPTk5FQ1RJT04iLCJfU1RPUkUiLCJpbml0IiwibG9jYWxTdG9yYWdlIiwiX3NldF9zeW5jIiwibWV0aCIsIl91cGRhdGUiLCJjb25zdHJ1Y3RvciIsIl9nZXRfbW9kZSIsImFyZWFfc2V0dGluZ3MiLCJfZ2V0X3ByaXZzYXZlIiwiX2dldF9uYW1pbmciLCJfZ2V0X3RiYnBvd2VyIiwiX2dldF9tYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJfc2V0X3N0b3JhZ2UiLCJfc2V0X3NldHRpbmdzIiwiX3NldF9oaXN0b3J5IiwiYXJlYV9oaXN0b3J5IiwiX3NldF92ZXJzaW9uIiwiX3NldF9sb2ciLCJfZ2V0X2xvZ3MiLCJNQVhfTE9HX0VOVFJJRVMiLCJzaGlmdCIsIl9zZXRfZW50cnkiLCJfdXBkYXRlX2VudHJ5IiwiY2FsbCIsIl9DT1BZIiwiX0VYVEVORCIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJ6IiwieSIsInMiLCJkb3dubG9hZCIsImNvcHkiLCJibWljb24iLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwibWV0YSIsInRhZ3MiLCJhY3Rpb25zIiwibGlua3MiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwianNfaW5qZWN0aW9uX2ZhaWx1cmUiLCJjc3NfaW5qZWN0aW9uX2ZhaWx1cmUiLCJnZXRLZXlCeVZhbHVlIiwic3JjIiwidGFyZ2V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiaCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9waWNzIiwiZXZlbnQiLCJoYW5kbGVyIiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvYmoiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJmIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9wYWdlbm90ZXMiLCJyIiwic2V0VGltZW91dCIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBQ0E7Ozs7QUFIQTtBQUtBLElBQUlBLGNBQUosQ0FBWTtBQUNWQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsMkJBQXFCLGdCQURsQjtBQUVILDZCQUF1QixPQUZwQjtBQUdILDBCQUFvQixPQUhqQjtBQUlILHlCQUFtQixPQUpoQjtBQUtILHNCQUFnQixRQUxiO0FBTUgsbUNBQTZCO0FBTjFCO0FBREMsR0FERTtBQVlWQyxRQUFNLEVBQUUsSUFaRTtBQWFWQyxTQUFPLEVBQUUsRUFiQztBQWNWQyxZQUFVLEVBQUUsRUFkRjtBQWdCVkMsVUFoQlUsc0JBZ0JDO0FBQUE7O0FBQ1QsUUFBTUMsY0FBYyxHQUFHLEtBQUtILE9BQUwsR0FBZUksT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxXQUFoQixHQUE4Qk4sT0FBcEU7QUFFQUksV0FBTyxDQUFDQyxPQUFSLENBQWdCRSxXQUFoQixDQUE0QkMsV0FBNUIsQ0FBd0MsVUFBQUMsT0FBTyxFQUFJO0FBQ2pEQywyQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFaLE9BQU8sRUFBSTtBQUN0QyxZQUFJLENBQUNBLE9BQUQsSUFBWUEsT0FBTyxLQUFLRyxjQUE1QixFQUE0QztBQUMxQyxjQUFNRixVQUFVLEdBQUcsS0FBSSxDQUFDQSxVQUFMLEdBQWtCUSxPQUFPLENBQUNJLE1BQTdDO0FBQ0EsY0FBTUMsV0FBVyxHQUFHTCxPQUFPLENBQUNNLGVBQVIsSUFBMkIsR0FBL0M7O0FBQ0EsY0FBSWQsVUFBVSxLQUFLQSxVQUFVLEtBQUssUUFBZixJQUEyQkEsVUFBVSxLQUFLLFNBQS9DLENBQWQsRUFBeUU7QUFDdkUsaUJBQUksQ0FBQ2UsSUFBTCxDQUFVZixVQUFVLEdBQUcsTUFBdkIsRUFBK0JhLFdBQS9CLEVBQTRDYixVQUE1QztBQUNELFdBRkQsTUFFTztBQUNMLGlCQUFJLENBQUNlLElBQUwsQ0FBVSxlQUFWO0FBQ0Q7QUFDRjtBQUNGLE9BVkQ7QUFXRCxLQVpEOztBQWFBTix5QkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFaLE9BQU8sRUFBSTtBQUN0QyxVQUFJQSxPQUFPLElBQUlBLE9BQU8sS0FBS0csY0FBM0IsRUFBMkMsS0FBSSxDQUFDYSxJQUFMLENBQVUsZUFBVjtBQUM1QyxLQUZEO0FBR0QsR0FuQ1M7QUFxQ1ZDLE9BckNVLG1CQXFDRjtBQUFBOztBQUNOUCx5QkFBU1EsR0FBVCxDQUFhLFNBQWIsRUFBd0IsS0FBS2xCLE9BQTdCLEVBRE0sQ0FHTjs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFVLHlCQUFTQyxHQUFULENBQWEsTUFBYixFQUFxQkMsSUFBckIsQ0FBMEIsVUFBQU8sSUFBSTtBQUFBLGFBQUksTUFBSSxDQUFDQyxRQUFMLENBQWNELElBQWQsQ0FBSjtBQUFBLEtBQTlCLFdBQ1M7QUFBQSxhQUFNLE1BQUksQ0FBQ0MsUUFBTCxDQUFjLElBQWQsQ0FBTjtBQUFBLEtBRFQsRUFFR1IsSUFGSCxDQUVRO0FBQUEsYUFBTSxNQUFJLENBQUNJLElBQUwsQ0FBVSxhQUFWLEVBQXlCLE1BQUksQ0FBQ2hCLE9BQTlCLEVBQXVDLE1BQUksQ0FBQ0MsVUFBNUMsQ0FBTjtBQUFBLEtBRlI7QUFHRCxHQXBEUztBQXFEVm1CLFVBckRVLG9CQXFEREEsU0FyREMsRUFxRFM7QUFDakIsUUFBTXJCLE1BQU0sR0FBRyxLQUFLQSxNQUFMLEdBQWNxQixTQUE3QjtBQUNBLFNBQUtDLHVCQUFMLENBQTZCdEIsTUFBN0I7QUFDQSxTQUFLdUIsWUFBTDtBQUNELEdBekRTO0FBMERWQyxRQTFEVSxvQkEwREQ7QUFDUCxRQUFJSixJQUFJLEdBQUcsQ0FBQyxLQUFLcEIsTUFBakI7QUFDQSxTQUFLcUIsUUFBTCxDQUFjRCxJQUFkO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLGVBQVYsRUFBMkJHLElBQTNCO0FBQ0QsR0E5RFM7QUErRFZLLGdCQS9EVSw0QkErRE87QUFBQTs7QUFDZmQseUJBQVNDLEdBQVQsQ0FBYSxNQUFiLEVBQXFCQyxJQUFyQixDQUEwQixVQUFBTyxJQUFJO0FBQUEsYUFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBY0QsSUFBZCxDQUFKO0FBQUEsS0FBOUI7QUFDRCxHQWpFUztBQWtFVkUseUJBbEVVLG1DQWtFY0ksRUFsRWQsRUFrRWtCO0FBQzFCckIsV0FBTyxDQUFDc0IsYUFBUixDQUFzQkMsT0FBdEIsQ0FBOEI7QUFDNUJDLFVBQUksRUFBRUgsRUFBRSxHQUFHO0FBQ1QsWUFBSSxtQkFESztBQUVULFlBQUksbUJBRks7QUFHVCxZQUFJO0FBSEssT0FBSCxHQUlKO0FBQ0YsWUFBSSxvQkFERjtBQUVGLFlBQUksb0JBRkY7QUFHRixZQUFJO0FBSEY7QUFMd0IsS0FBOUI7QUFXRCxHQTlFUztBQStFVkgsY0EvRVUsd0JBK0VHTyxHQS9FSCxFQStFUTtBQUFBOztBQUNoQixRQUFJLE9BQU9BLEdBQVAsS0FBZSxTQUFuQixFQUE4QjtBQUM1QixVQUFJQSxHQUFKLEVBQVMsS0FBS0MsYUFBTCxHQUFULEtBQ0ssS0FBS0MsZ0JBQUw7QUFDTixLQUhELE1BR087QUFDTHJCLDJCQUFTQyxHQUFULENBQWEsVUFBYixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQW9CLE9BQU8sRUFBSTtBQUN2QyxZQUFJQSxPQUFKLEVBQWEsTUFBSSxDQUFDRixhQUFMLEdBQWIsS0FDSyxNQUFJLENBQUNDLGdCQUFMO0FBQ04sT0FIRDtBQUlEO0FBQ0YsR0F6RlM7QUEwRlZELGVBMUZVLDJCQTBGTTtBQUFBOztBQUNkLFFBQUksQ0FBQyxLQUFLRyxVQUFWLEVBQXNCO0FBQ3BCLFVBQU1BLFVBQVUsR0FBRyxLQUFLQSxVQUFMLEdBQWtCO0FBQUEsZUFBTSxNQUFJLENBQUNWLE1BQUwsRUFBTjtBQUFBLE9BQXJDOztBQUVBbkIsYUFBTyxDQUFDc0IsYUFBUixDQUFzQlEsUUFBdEIsQ0FBK0I7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBL0I7QUFDQS9CLGFBQU8sQ0FBQ3NCLGFBQVIsQ0FBc0JVLFNBQXRCLENBQWdDNUIsV0FBaEMsQ0FBNEN5QixVQUE1QztBQUNEO0FBQ0YsR0FqR1M7QUFrR1ZGLGtCQWxHVSw4QkFrR1M7QUFDakIsUUFBSSxLQUFLRSxVQUFULEVBQXFCO0FBQ25CN0IsYUFBTyxDQUFDc0IsYUFBUixDQUFzQlEsUUFBdEIsQ0FBK0I7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBL0I7QUFDQS9CLGFBQU8sQ0FBQ3NCLGFBQVIsQ0FBc0JVLFNBQXRCLENBQWdDQyxjQUFoQyxDQUErQyxLQUFLSixVQUFwRDtBQUNBLFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDtBQUNGO0FBeEdTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3ZCZSxZQUFXO0FBQ3hCLFNBQU8sSUFBSXJDLGNBQUosQ0FBWTtBQUNqQkMsVUFBTSxFQUFFO0FBQ05DLFNBQUcsRUFBRTtBQUNILHlCQUFpQixRQURkO0FBRUgsZ0NBQXdCO0FBRnJCO0FBREMsS0FEUztBQVFqQndDLFNBQUssRUFBRTtBQUNMQyxPQUFDLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxDQUFDLFdBQUQ7QUFBWixPQURFO0FBRUxDLE9BQUMsRUFBRTtBQUFFRCxnQkFBUSxFQUFFLENBQUMsV0FBRDtBQUFaLE9BRkU7QUFHTEUsT0FBQyxFQUFFO0FBQUVGLGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaLE9BSEU7QUFJTEcsT0FBQyxFQUFFO0FBQUVILGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaLE9BSkU7QUFLTCxZQUFNO0FBQUVBLGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaLE9BTEQ7QUFNTEksT0FBQyxFQUFFO0FBQUVKLGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaLE9BTkU7QUFPTEssUUFBRSxFQUFFO0FBQUVMLGdCQUFRLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUFaLE9BUEM7QUFRTE0sT0FBQyxFQUFFO0FBQUVOLGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaO0FBUkUsS0FSVTtBQWtCakJPLFdBQU8sRUFBRSxFQWxCUTtBQW9CakI3QyxZQXBCaUIsc0JBb0JOO0FBQUE7O0FBQ1QsVUFBSThDLElBQUo7O0FBQ0EsV0FBSyxJQUFJQyxDQUFULElBQWMsS0FBS1gsS0FBbkIsRUFBMEI7QUFDeEJVLFlBQUksR0FBRyxLQUFLVixLQUFMLENBQVdXLENBQVgsQ0FBUDtBQUNBRCxZQUFJLENBQUNFLEVBQUwsR0FBVUQsQ0FBVjtBQUNBRCxZQUFJLENBQUNHLEtBQUwsR0FBYS9DLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixVQUFVSixDQUFDLEtBQUssSUFBTixHQUFhLElBQWIsR0FBb0JBLENBQTlCLENBQXhCLENBQWI7O0FBQ0FELFlBQUksQ0FBQ00sT0FBTCxHQUFlLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLGlCQUFnQixLQUFJLENBQUNDLE9BQUwsQ0FBYUYsS0FBYixFQUFvQkMsR0FBcEIsQ0FBaEI7QUFBQSxTQUFmO0FBQ0Q7O0FBQ0QsV0FBS0UsTUFBTDtBQUNELEtBN0JnQjtBQStCakJDLFVBL0JpQixrQkErQlZULEVBL0JVLEVBK0JOO0FBQ1QsVUFBSSxDQUFDLEtBQUtILE9BQUwsQ0FBYWEsUUFBYixDQUFzQlYsRUFBdEIsQ0FBTCxFQUFnQztBQUM5QjlDLGVBQU8sQ0FBQ3lELEtBQVIsQ0FBY0YsTUFBZCxDQUFxQixLQUFLckIsS0FBTCxDQUFXWSxFQUFYLENBQXJCO0FBQ0EsYUFBS0gsT0FBTCxDQUFhZSxJQUFiLENBQWtCWixFQUFsQjtBQUNEO0FBQ0YsS0FwQ2dCO0FBcUNqQmEsVUFyQ2lCLGtCQXFDVmIsRUFyQ1UsRUFxQ047QUFDVCxVQUFJLEtBQUtILE9BQUwsQ0FBYWEsUUFBYixDQUFzQlYsRUFBdEIsQ0FBSixFQUErQjtBQUM3QjlDLGVBQU8sQ0FBQ3lELEtBQVIsQ0FBY0UsTUFBZCxDQUFxQmIsRUFBckI7QUFDQSxhQUFLSCxPQUFMLENBQWFpQixNQUFiLENBQW9CLEtBQUtqQixPQUFMLENBQWFrQixPQUFiLENBQXFCZixFQUFyQixDQUFwQixFQUE4QyxDQUE5QztBQUNEO0FBQ0YsS0ExQ2dCO0FBMkNqQmdCLGFBM0NpQix1QkEyQ0w7QUFDVixVQUFJLEtBQUtuQixPQUFMLENBQWFvQixNQUFqQixFQUF5QjtBQUN2Qi9ELGVBQU8sQ0FBQ3lELEtBQVIsQ0FBY0ssU0FBZDtBQUNBLGFBQUtuQixPQUFMLEdBQWUsRUFBZjtBQUNEO0FBQ0YsS0FoRGdCO0FBaURqQnhCLFVBakRpQixrQkFpRFZFLEVBakRVLEVBaUROO0FBQ1QsVUFBSUEsRUFBSixFQUFRLEtBQUtpQyxNQUFMLEdBQVIsS0FDSyxLQUFLUSxTQUFMO0FBQ04sS0FwRGdCO0FBcURqQlIsVUFyRGlCLG9CQXFEUjtBQUFBOztBQUNQLFVBQU1YLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjs7QUFDQXJDLDJCQUFTQyxHQUFULENBQWEsV0FBYixFQUEwQkMsSUFBMUIsQ0FBK0IsVUFBQXdELFNBQVMsRUFBSTtBQUMxQyxhQUFLLElBQUluQixDQUFULElBQWMsTUFBSSxDQUFDWCxLQUFuQixFQUEwQjtBQUN4QixjQUFJOEIsU0FBUyxDQUFDbkIsQ0FBRCxDQUFULENBQWEsQ0FBYixDQUFKLEVBQXFCLE1BQUksQ0FBQ1UsTUFBTCxDQUFZVixDQUFaLEVBQXJCLEtBQ0ssTUFBSSxDQUFDYyxNQUFMLENBQVlkLENBQVo7QUFDTjtBQUNGLE9BTEQ7QUFNRCxLQTdEZ0I7QUE4RGpCUSxXQTlEaUIsbUJBOERURixLQTlEUyxFQThERkMsR0E5REUsRUE4REc7QUFDbEIsVUFBTU4sRUFBRSxHQUFHSyxLQUFLLENBQUNjLFVBQWpCO0FBQ0EsVUFBSW5CLEVBQUUsS0FBSyxHQUFYLEVBQWdCLEtBQUtsQyxJQUFMLENBQVUsYUFBVixFQUF5QnVDLEtBQUssQ0FBQ2UsYUFBL0IsRUFBaEIsS0FDSyxJQUFJcEIsRUFBRSxLQUFLLElBQVgsRUFBaUI5QyxPQUFPLENBQUNtRSxhQUFSLENBQXNCQyxJQUF0QixHQUFqQixLQUNBLEtBQUt4RCxJQUFMLENBQVUsU0FBU2tDLEVBQW5CLEVBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DO0FBQUVNLFdBQUcsRUFBRUEsR0FBRyxDQUFDTjtBQUFYLE9BQW5DO0FBQ047QUFuRWdCLEdBQVosQ0FBUDtBQXFFRCxDOztBQXpFRDs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSXRELGNBQUosQ0FBWTtBQUNWQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsZUFBUyxLQUROO0FBRUgsaUJBQVcsS0FGUjtBQUdILDJCQUFxQixLQUhsQjtBQUlILDZCQUF1QixLQUpwQjtBQUtILDZCQUF1QixLQUxwQjtBQU1ILDRCQUFzQixxQkFObkI7QUFPSCxnQ0FBMEIsbUJBUHZCO0FBUUgsd0NBQWtDLDJCQVIvQjtBQVNILG9CQUFjLGFBVFg7QUFVSCx5QkFBbUIsa0JBVmhCO0FBV0gsc0JBQWdCLEtBWGI7QUFZSCwrQkFBeUIsS0FadEI7QUFhSCxvQkFBYyxPQWJYO0FBY0gsOEJBQXdCLEtBZHJCO0FBZUgsc0NBQWdDLDBCQWY3QjtBQWdCSCxrQ0FBNEI7QUFoQnpCO0FBREMsR0FERTtBQXNCVjJFLEtBdEJVLGVBc0JOQyxLQXRCTSxFQXNCQ0MsTUF0QkQsRUFzQlM7QUFBQTs7QUFDakIsUUFBSUYsR0FBSixFQUFTRyxHQUFUOztBQUNBLFFBQUlGLEtBQUssQ0FBQ0csSUFBVixFQUFnQjtBQUNkSixTQUFHLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDRyxJQUFQLEVBQWFILEtBQUssQ0FBQ0ksT0FBTixHQUFnQixJQUFoQixHQUF1QkosS0FBSyxDQUFDSyxRQUE3QixHQUF3QyxHQUFyRCxDQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0xOLFNBQUcsR0FBRyxDQUFFLElBQUlPLElBQUosR0FBV0MsT0FBWCxFQUFGLEVBQXlCQyxxQkFBVVIsS0FBVixLQUFvQkEsS0FBN0MsQ0FBTjs7QUFDQSxVQUFJQyxNQUFNLElBQUksT0FBT0EsTUFBUCxLQUFrQixRQUFoQyxFQUEwQztBQUN4Q0YsV0FBRyxDQUFDWCxJQUFKLENBQVNhLE1BQVQ7QUFDRDtBQUNGOztBQUNEakUseUJBQVNRLEdBQVQsQ0FBYSxLQUFiLEVBQW9CdUQsR0FBcEIsRUFBeUI3RCxJQUF6QixDQUE4QjtBQUFBLGFBQU0sS0FBSSxDQUFDSSxJQUFMLENBQVUsMkJBQVYsRUFBdUN5RCxHQUF2QyxDQUFOO0FBQUEsS0FBOUI7QUFDRCxHQWpDUztBQWtDVlUsT0FsQ1UsbUJBa0NGO0FBQUE7O0FBQ056RSx5QkFBU1EsR0FBVCxDQUFhLEtBQWIsRUFBb0I7QUFBRWlFLFdBQUssRUFBRTtBQUFULEtBQXBCLEVBQXFDdkUsSUFBckMsQ0FBMEM7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGNBQVYsQ0FBTjtBQUFBLEtBQTFDO0FBQ0QsR0FwQ1M7QUFxQ1ZvRSxtQkFyQ1UsK0JBcUNVO0FBQ2xCLFNBQUtYLEdBQUwsQ0FBUyw0QkFBVDtBQUNELEdBdkNTO0FBd0NWWSwyQkF4Q1UsdUNBd0NrQjtBQUMxQixTQUFLWixHQUFMLENBQVMsNEJBQVQ7QUFDRCxHQTFDUztBQTJDVmEscUJBM0NVLCtCQTJDVVgsTUEzQ1YsRUEyQ2tCO0FBQzFCLFNBQUtGLEdBQUwsQ0FBUywwQkFBVCxFQUFxQ0UsTUFBckM7QUFDRCxHQTdDUztBQThDVlksa0JBOUNVLDhCQThDUztBQUNqQixTQUFLZCxHQUFMLENBQVMsVUFBVDtBQUNELEdBaERTO0FBaURWZSxhQWpEVSx5QkFpREk7QUFDWixTQUFLZixHQUFMLENBQVMsVUFBVDtBQUNELEdBbkRTO0FBb0RWZ0IsMEJBcERVLHNDQW9EaUI7QUFDekIsU0FBS2hCLEdBQUwsQ0FBUyxzQkFBVDtBQUNELEdBdERTO0FBdURWaUIsdUJBdkRVLG1DQXVEYztBQUN0QixTQUFLakIsR0FBTCxDQUFTLHVCQUFUO0FBQ0Q7QUF6RFMsQ0FBWixFOzs7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJN0UsY0FBSixDQUFZO0FBQ1ZDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxxQkFBZSxhQURaO0FBRUgsdUJBQWlCLGdCQUZkO0FBR0gsNkJBQXVCLGtCQUhwQjtBQUlILHFCQUFlLGtCQUpaO0FBS0gsdUJBQWlCLGlCQUxkO0FBTUgscUJBQWUsaUJBTlo7QUFPSCxzQkFBZ0I7QUFQYjtBQURDLEdBREU7QUFZVjZGLHVCQUFxQixFQUFFLEVBWmI7QUFhVkMsaUJBQWUsRUFBRSxFQWJQO0FBY1ZDLHFCQUFtQixFQUFFLElBZFg7QUFnQlZDLGdCQWhCVSwwQkFnQktDLEtBaEJMLEVBZ0JZO0FBQ3BCLFFBQUksS0FBS0oscUJBQUwsQ0FBMkJJLEtBQTNCLENBQUosRUFBdUM7QUFDckMsV0FBS0MsaUJBQUwsQ0FBdUJELEtBQXZCLEVBQThCLEtBQUtKLHFCQUFMLENBQTJCSSxLQUEzQixDQUE5QjtBQUNBLGFBQU8sS0FBS0oscUJBQUwsQ0FBMkJJLEtBQTNCLENBQVA7QUFDRDtBQUNGLEdBckJTO0FBdUJWRSxhQXZCVSx1QkF1QkVGLEtBdkJGLEVBdUJTRyxPQXZCVCxFQXVCa0I7QUFDMUIsUUFBSUEsT0FBTyxDQUFDQyxNQUFSLElBQWtCRCxPQUFPLENBQUNDLE1BQVIsS0FBbUIsVUFBekMsRUFBcUQ7QUFDbkQsV0FBS1IscUJBQUwsQ0FBMkJJLEtBQTNCLElBQW9DRyxPQUFPLENBQUNFLEdBQTVDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0osaUJBQUwsQ0FBdUJELEtBQXZCLEVBQThCRyxPQUFPLENBQUNFLEdBQXRDLEVBQTJDLElBQTNDO0FBQ0Q7QUFDRixHQTdCUztBQStCVkosbUJBL0JVLDZCQStCUUQsS0EvQlIsRUErQmVNLE1BL0JmLEVBK0J1QkMsUUEvQnZCLEVBK0JpQztBQUFBOztBQUN6QzVGLHlCQUFTQyxHQUFULENBQWEsVUFBYixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQTJGLFFBQVEsRUFBSTtBQUN4QyxVQUFJQSxRQUFRLENBQUNDLEtBQVQsQ0FBZUMsTUFBbkIsRUFBMkI7QUFDekIsYUFBSSxDQUFDQyxnQkFBTCxDQUFzQlgsS0FBdEIsRUFBNkJNLE1BQTdCLEVBQXFDQyxRQUFyQztBQUNEO0FBQ0YsS0FKRDtBQUtELEdBckNTO0FBdUNWSSxrQkF2Q1UsNEJBdUNPWCxLQXZDUCxFQXVDY00sTUF2Q2QsRUF1Q3NCQyxRQXZDdEIsRUF1Q2dDO0FBQUE7O0FBQ3hDLFFBQU1LLFVBQVUsR0FBRyxLQUFLZixlQUFMLENBQXFCRyxLQUFyQixDQUFuQjtBQUNBLFFBQU1hLGdCQUFnQixHQUFHRCxVQUFVLElBQUksc0JBQVVBLFVBQVUsQ0FBQ1AsR0FBckIsTUFBOEIsc0JBQVVDLE1BQVYsQ0FBckU7QUFDQSxRQUFNUSxRQUFRLEdBQUdGLFVBQVUsSUFBSSxDQUFDTCxRQUFoQzs7QUFFQSxRQUFJLENBQUNLLFVBQUQsSUFBZUUsUUFBbkIsRUFBNkI7QUFFM0IsV0FBS0MsbUJBQUwsQ0FBeUJmLEtBQXpCLEVBQWdDTSxNQUFoQyxFQUF3Q3pGLElBQXhDLENBQTZDLFlBQU07QUFFakRGLDZCQUFTQyxHQUFULENBQWEsU0FBYixFQUF3QkMsSUFBeEIsQ0FBNkIsVUFBQW1HLE9BQU8sRUFBSTtBQUN0QyxjQUFNQyxPQUFPLEdBQUcsTUFBSSxDQUFDQyxtQkFBTCxDQUF5QkYsT0FBekIsRUFBa0NWLE1BQWxDLENBQWhCOztBQUNBLGNBQU1hLE9BQU8sR0FBRyxNQUFJLENBQUNDLGFBQUwsQ0FBbUJILE9BQW5CLENBQWhCOztBQUVBLGNBQUlFLE9BQUosRUFBYTtBQUNYLGtCQUFJLENBQUNsRyxJQUFMLENBQVUsZUFBVixFQUEyQjtBQUN6QmtHLHFCQUFPLEVBQVBBLE9BRHlCO0FBRXpCckIsaUNBQW1CLEVBQUUsTUFBSSxDQUFDQSxtQkFGRDtBQUd6QnVCLG9CQUFNLEVBQUUsQ0FBQyxDQUFDSixPQUFPLENBQUNLLGFBQVIsQ0FBc0JsRDtBQUhQLGFBQTNCLEVBSUc7QUFBRVgsaUJBQUcsRUFBRXVDO0FBQVAsYUFKSDs7QUFNQSxrQkFBSSxDQUFDRixtQkFBTCxHQUEyQixJQUEzQjtBQUNEO0FBQ0YsU0FiRDtBQWNELE9BaEJEO0FBaUJELEtBbkJELE1Bb0JLLElBQUllLGdCQUFnQixJQUFJRCxVQUFVLENBQUNXLEtBQS9CLElBQXdDWCxVQUFVLENBQUNXLEtBQVgsQ0FBaUJDLGFBQTdELEVBQTRFO0FBQy9FLFdBQUt2RyxJQUFMLENBQVUsY0FBVixFQUEwQnFGLE1BQTFCO0FBQ0Q7QUFDRixHQW5FUztBQXFFVlMscUJBckVVLCtCQXFFVWYsS0FyRVYsRUFxRWlCSyxHQXJFakIsRUFxRXNCO0FBQUE7O0FBQzlCLFdBQU9oRyxPQUFPLENBQUNvSCxJQUFSLENBQWFDLGFBQWIsQ0FBMkIxQixLQUEzQixFQUFrQztBQUN2QzJCLFVBQUksRUFBRSw0Q0FEaUM7QUFFdkNDLGVBQVMsRUFBRSxJQUY0QjtBQUd2Q0MsV0FBSyxFQUFFO0FBSGdDLEtBQWxDLEVBS0poSCxJQUxJLENBS0MsWUFBTTtBQUNWLFlBQUksQ0FBQ2dGLGVBQUwsQ0FBcUJHLEtBQXJCLElBQThCO0FBQUVLLFdBQUcsRUFBSEE7QUFBRixPQUE5Qjs7QUFDQSxZQUFJLENBQUN5QixTQUFMLENBQWU5QixLQUFmO0FBQ0QsS0FSSSxXQVNFLFVBQUErQixDQUFDLEVBQUk7QUFDVixVQUFNbEQsR0FBRyxHQUFHa0QsQ0FBQyxDQUFDQyxRQUFGLEVBQVo7O0FBQ0EsVUFBSSxDQUFDbkQsR0FBRyxDQUFDaEIsUUFBSixDQUFhLHFDQUFiLENBQUwsRUFBMEQ7QUFDeEQsY0FBSSxDQUFDNUMsSUFBTCxDQUFVLDhCQUFWO0FBQ0Q7QUFDRixLQWRJLENBQVA7QUFlRCxHQXJGUztBQXVGVjZHLFdBdkZVLHFCQXVGQTlCLEtBdkZBLEVBdUZPO0FBQUE7O0FBQ2YzRixXQUFPLENBQUNvSCxJQUFSLENBQWFLLFNBQWIsQ0FBdUI5QixLQUF2QixFQUE4QjtBQUM1QjJCLFVBQUksRUFBRSwwQ0FEc0I7QUFFNUJDLGVBQVMsRUFBRTtBQUZpQixLQUE5QixXQUlTLFVBQUFHLENBQUMsRUFBSTtBQUNWLFVBQU1sRCxHQUFHLEdBQUdrRCxDQUFDLENBQUNDLFFBQUYsRUFBWjs7QUFDQSxVQUFJLENBQUNuRCxHQUFHLENBQUNoQixRQUFKLENBQWEscUNBQWIsQ0FBTCxFQUEwRDtBQUN4RCxjQUFJLENBQUM1QyxJQUFMLENBQVUsMEJBQVY7QUFDRDtBQUNGLEtBVEg7QUFVRCxHQWxHUztBQW9HVmlHLHFCQXBHVSwrQkFvR1VGLE9BcEdWLEVBb0dtQlgsR0FwR25CLEVBb0d3QjtBQUNoQyxRQUFNNEIsZUFBZSxHQUFHLHNCQUFVNUIsR0FBVixDQUF4QjtBQUNBLFFBQU1jLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUF4QjtBQUNBLFFBQU1HLGFBQWEsR0FBRyxFQUF0QjtBQUNBLFFBQU1ZLGdCQUFnQixHQUFHLEVBQXpCO0FBQ0EsUUFBSVgsS0FBSixFQUFXWSxPQUFYLEVBQW9CQyxRQUFwQjs7QUFFQSxTQUFLLElBQUlMLENBQVQsSUFBY1osT0FBZCxFQUF1QjtBQUNyQkksV0FBSyxHQUFHSixPQUFPLENBQUNZLENBQUQsQ0FBZjtBQUNBSSxhQUFPLEdBQUdaLEtBQUssQ0FBQ0MsYUFBTixHQUFzQm5CLEdBQXRCLEdBQTRCNEIsZUFBdEM7QUFDQUcsY0FBUSxHQUFHYixLQUFLLENBQUNDLGFBQU4sR0FBc0JELEtBQUssQ0FBQ2xCLEdBQTVCLEdBQWtDLHNCQUFVa0IsS0FBSyxDQUFDbEIsR0FBaEIsQ0FBN0M7O0FBRUEsVUFBSThCLE9BQU8sS0FBS0MsUUFBaEIsRUFBMEI7QUFDeEIsWUFBSWIsS0FBSyxDQUFDRixNQUFWLEVBQWtCQyxhQUFhLENBQUN2RCxJQUFkLENBQW1Cd0QsS0FBbkIsRUFBbEIsS0FDS1csZ0JBQWdCLENBQUNuRSxJQUFqQixDQUFzQndELEtBQXRCO0FBQ047QUFDRjs7QUFDRCxXQUFPO0FBQUVELG1CQUFhLEVBQWJBLGFBQUY7QUFBaUJZLHNCQUFnQixFQUFoQkE7QUFBakIsS0FBUDtBQUNELEdBdEhTO0FBd0hWZCxlQXhIVSx5QkF3SElILE9BeEhKLEVBd0hhO0FBQ3JCLFFBQU1LLGFBQWEsR0FBR0wsT0FBTyxDQUFDSyxhQUE5QjtBQUNBLFFBQU1ZLGdCQUFnQixHQUFHakIsT0FBTyxDQUFDaUIsZ0JBQWpDO0FBQ0EsUUFBTUcsa0JBQWtCLEdBQUdmLGFBQWEsQ0FBQ2xELE1BQXpDO0FBQ0EsUUFBTWtFLHFCQUFxQixHQUFHSixnQkFBZ0IsQ0FBQzlELE1BQS9DO0FBQ0EsUUFBSStDLE9BQUo7O0FBRUEsUUFBSWtCLGtCQUFrQixJQUFJQyxxQkFBMUIsRUFBaUQ7QUFDL0MsV0FBS3JILElBQUwsQ0FBVSx3QkFBVjtBQUNBa0csYUFBTyxHQUFHRyxhQUFWO0FBQ0QsS0FIRCxNQUlLLElBQUlnQixxQkFBSixFQUEyQjtBQUM5Qm5CLGFBQU8sR0FBRyxDQUFDZSxnQkFBZ0IsQ0FBQyxDQUFELENBQWpCLENBQVY7O0FBQ0EsVUFBSUkscUJBQXFCLEdBQUcsQ0FBNUIsRUFBK0I7QUFDN0IsYUFBS3JILElBQUwsQ0FBVSxnQ0FBVjtBQUNEOztBQUNELFdBQUtBLElBQUwsQ0FBVSxhQUFWLEVBQXlCa0csT0FBTyxDQUFDLENBQUQsQ0FBaEM7QUFDRDs7QUFDRCxRQUFJa0Isa0JBQUosRUFBd0I7QUFDdEIsV0FBS3BILElBQUwsQ0FBVSxhQUFWLEVBQXlCcUcsYUFBekI7QUFDRDs7QUFDRCxXQUFPSCxPQUFQO0FBQ0QsR0E5SVM7QUFnSlZvQixpQkFoSlUsMkJBZ0pNQyxNQWhKTixFQWdKY0MsWUFoSmQsRUFnSjRCO0FBQUE7O0FBQ3BDLFdBQU9wSSxPQUFPLENBQUNxSSxPQUFSLENBQWdCQyxjQUFoQixHQUNKOUgsSUFESSxDQUNDLFVBQUErSCxVQUFVLEVBQUk7QUFDbEIsVUFBTUMsSUFBSSxHQUFHRCxVQUFVLENBQUNFLFNBQXhCO0FBQ0EsVUFBSSxDQUFDRCxJQUFMLEVBQVdKLFlBQVksQ0FBQyxDQUFDSSxJQUFGLENBQVosQ0FBWCxLQUNLO0FBQ0hsSSw2QkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUFrSSxVQUFVLEVBQUk7QUFDMUMsY0FBSSxDQUFDQSxVQUFMLEVBQWlCLE1BQUksQ0FBQzlILElBQUwsQ0FBVSxZQUFWLEVBQWpCLEtBQ0t3SCxZQUFZLENBQUNNLFVBQUQsQ0FBWjtBQUNOLFNBSEQ7QUFJRDtBQUNGLEtBVkksQ0FBUDtBQVdELEdBNUpTO0FBNkpWQyxrQkE3SlUsNEJBNkpPekIsS0E3SlAsRUE2SmM7QUFBQTs7QUFDdEIsV0FBT2xILE9BQU8sQ0FBQ3FJLE9BQVIsQ0FBZ0JDLGNBQWhCLEdBQ0o5SCxJQURJLENBQ0MsVUFBQStILFVBQVUsRUFBSTtBQUNsQixVQUFJLENBQUNBLFVBQVUsQ0FBQ0UsU0FBaEIsRUFBMkIsTUFBSSxDQUFDN0gsSUFBTCxDQUFVLG9CQUFWLEVBQWdDc0csS0FBaEMsRUFBM0IsS0FDSztBQUNINUcsNkJBQVNDLEdBQVQsQ0FBYSxVQUFiLEVBQXlCQyxJQUF6QixDQUE4QixVQUFBa0ksVUFBVSxFQUFJO0FBQzFDLGNBQUksQ0FBQ0EsVUFBTCxFQUFpQixNQUFJLENBQUM5SCxJQUFMLENBQVUsWUFBVixFQUFqQixLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLG9CQUFWLEVBQWdDc0csS0FBaEM7QUFDTixTQUhEO0FBSUQ7QUFDRixLQVRJLENBQVA7QUFVRCxHQXhLUztBQXlLVjBCLGlCQXpLVSwyQkF5S00xQixLQXpLTixFQXlLYTtBQUFBOztBQUNyQixXQUFPbEgsT0FBTyxDQUFDcUksT0FBUixDQUFnQkMsY0FBaEIsR0FDSjlILElBREksQ0FDQyxVQUFBK0gsVUFBVSxFQUFJO0FBQ2xCLFVBQUksQ0FBQ0EsVUFBVSxDQUFDRSxTQUFoQixFQUEyQixNQUFJLENBQUM3SCxJQUFMLENBQVUsc0JBQVYsRUFBa0NzRyxLQUFsQyxFQUEzQixLQUNLO0FBQ0g1Ryw2QkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUFrSSxVQUFVLEVBQUk7QUFDMUMsY0FBSSxDQUFDQSxVQUFMLEVBQWlCLE1BQUksQ0FBQzlILElBQUwsQ0FBVSxZQUFWLEVBQWpCLEtBQ0ssTUFBSSxDQUFDQSxJQUFMLENBQVUsc0JBQVYsRUFBa0NzRyxLQUFsQztBQUNOLFNBSEQ7QUFJRDtBQUNGLEtBVEksQ0FBUDtBQVVELEdBcExTO0FBcUxWMkIsdUJBckxVLGlDQXFMWUMsSUFyTFosRUFxTGtCO0FBQzFCLFNBQUtyRCxtQkFBTCxHQUEyQnFELElBQTNCO0FBQ0Q7QUF2TFMsQ0FBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQ2UsWUFBVztBQUN4QixTQUFPLElBQUl0SixjQUFKLENBQVk7QUFDakJDLFVBQU0sRUFBRTtBQUNOQyxTQUFHLEVBQUU7QUFDSCw4QkFBc0IsTUFEbkI7QUFFSCx3QkFBZ0I7QUFGYjtBQURDLEtBRFM7QUFRakJxSixRQVJpQixnQkFRWjdCLEtBUlksRUFRTDtBQUFBOztBQUNWLFVBQUlBLEtBQUssQ0FBQzZCLElBQVYsRUFBZ0IsT0FBTyxLQUFLQyxVQUFMLENBQWdCOUIsS0FBSyxDQUFDNkIsSUFBdEIsRUFBNEI3QixLQUE1QixDQUFQOztBQUVoQjVHLDJCQUFTQyxHQUFULENBQWEsUUFBYixFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQXlJLE1BQU07QUFBQSxlQUFJLEtBQUksQ0FBQ0QsVUFBTCxDQUFnQixJQUFoQixFQUFzQjlCLEtBQXRCLEVBQTZCK0IsTUFBN0IsQ0FBSjtBQUFBLE9BQWxDLFdBQ1M7QUFBQSxlQUFNLEtBQUksQ0FBQ3JJLElBQUwsQ0FBVSxPQUFWLEVBQW1CLGNBQW5CLENBQU47QUFBQSxPQURUO0FBRUQsS0FiZ0I7QUFjakJzSSxVQWRpQixrQkFjVkMsT0FkVSxFQWNEQyxPQWRDLEVBY1FDLElBZFIsRUFjYztBQUFBOztBQUM3QkQsYUFBTyxHQUFHQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJDLDRCQUFpQkMsb0JBQWpCLEdBQXdDLENBQTdELENBQVY7O0FBRUFsSiwyQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFtRyxPQUFPLEVBQUk7QUFDdEMsWUFBSThDLE9BQU8sR0FBRyxNQUFJLENBQUNDLGtCQUFMLENBQXdCL0MsT0FBeEIsRUFBaUN5QyxPQUFqQyxDQUFkOztBQUNBLFlBQUlLLE9BQUosRUFBYUwsT0FBTyxJQUFJLFFBQVFLLE9BQU8sR0FBRyxDQUFsQixJQUF1QixHQUFsQzs7QUFDYixjQUFJLENBQUM3SSxJQUFMLENBQVUsZUFBVixFQUEyQnVJLE9BQTNCLEVBQW9DQyxPQUFwQyxFQUE2Q0MsSUFBN0M7QUFDRCxPQUpELFdBS087QUFBQSxlQUFNLE1BQUksQ0FBQ3pJLElBQUwsQ0FBVSxPQUFWLEVBQW1CLGNBQW5CLENBQU47QUFBQSxPQUxQO0FBTUQsS0F2QmdCO0FBd0JqQm9JLGNBeEJpQixzQkF3Qk5ELElBeEJNLEVBd0JBN0IsS0F4QkEsRUF3Qk95QyxNQXhCUCxFQXdCZTtBQUFBOztBQUM5QlosVUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUgsR0FDSlksTUFBTSxLQUFLLE9BQVgsR0FBcUJ6QyxLQUFLLENBQUNuRSxLQUFOLENBQVk2RyxJQUFaLEtBQXFCMUMsS0FBSyxDQUFDbkUsS0FBTixDQUFZNkcsSUFBWixFQUFyQixHQUEwQzFDLEtBQUssQ0FBQ2xCLEdBQXJFLEdBQ0EyRCxNQUFNLEtBQUssTUFBWCxHQUFxQixJQUFJL0UsSUFBSixDQUFTc0MsS0FBSyxDQUFDMkMsS0FBZixFQUFzQkMsY0FBdEIsRUFBckIsR0FBK0QsRUFGdEU7QUFJQWYsVUFBSSxHQUFHQSxJQUFJLENBQUNPLFNBQUwsQ0FBZSxDQUFmLEVBQWtCQyw0QkFBaUJDLG9CQUFqQixHQUF3QyxDQUExRCxDQUFQOztBQUVBbEosMkJBQVNDLEdBQVQsQ0FBYSxTQUFiLEVBQXdCQyxJQUF4QixDQUE2QixVQUFBbUcsT0FBTyxFQUFJO0FBQ3RDLFlBQUk4QyxPQUFPLEdBQUcsTUFBSSxDQUFDQyxrQkFBTCxDQUF3Qi9DLE9BQXhCLEVBQWlDb0MsSUFBakMsQ0FBZDs7QUFFQSxZQUFJVSxPQUFPLElBQUl2QyxLQUFLLENBQUNGLE1BQXJCLEVBQTZCO0FBQzNCLGdCQUFJLENBQUNwRyxJQUFMLENBQVUsaUNBQVYsRUFBNkMsMEJBQTdDLEVBQXlFbUksSUFBekU7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJVSxPQUFKLEVBQWFWLElBQUksSUFBSSxRQUFRVSxPQUFPLEdBQUcsQ0FBbEIsSUFBdUIsR0FBL0I7QUFDYnZDLGVBQUssQ0FBQzZCLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxnQkFBSSxDQUFDbkksSUFBTCxDQUFVLGFBQVYsRUFBeUJzRyxLQUF6QjtBQUNEO0FBQ0YsT0FWRCxXQVdPO0FBQUEsZUFBTSxNQUFJLENBQUN0RyxJQUFMLENBQVUsT0FBVixFQUFtQixjQUFuQixDQUFOO0FBQUEsT0FYUDtBQVlELEtBM0NnQjtBQTRDakI4SSxzQkE1Q2lCLDhCQTRDRS9DLE9BNUNGLEVBNENXb0MsSUE1Q1gsRUE0Q2lCO0FBQ2hDLFVBQUlnQixhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEQsT0FBTyxDQUFDRyxPQUFwQixDQUFwQjtBQUFBLFVBQ0lvRCxDQUFDLEdBQUdILGFBQWEsQ0FBQ2hHLE1BRHRCO0FBQUEsVUFFSTBGLE9BQU8sR0FBRyxDQUZkO0FBQUEsVUFHSVUsVUFISjs7QUFLQSxhQUFPRCxDQUFDLEVBQVIsRUFBWTtBQUNWQyxrQkFBVSxHQUFHSixhQUFhLENBQUNHLENBQUQsQ0FBMUI7QUFDQSxZQUFJLEtBQUtFLFlBQUwsQ0FBa0JyQixJQUFsQixFQUF3Qm9CLFVBQXhCLENBQUosRUFBeUNWLE9BQU87QUFDakQ7O0FBQ0QsYUFBT0EsT0FBUDtBQUNELEtBdkRnQjtBQXdEakJXLGdCQXhEaUIsd0JBd0RKckIsSUF4REksRUF3REVvQixVQXhERixFQXdEYztBQUM3QixVQUFJcEIsSUFBSSxLQUFLb0IsVUFBYixFQUF5QixPQUFPLElBQVA7QUFFekIsVUFBSUQsQ0FBQyxHQUFHbkIsSUFBSSxDQUFDaEYsTUFBYjtBQUFBLFVBQ0lzRyxnQkFBZ0IsR0FBR0YsVUFBVSxDQUFDYixTQUFYLENBQXFCLENBQXJCLEVBQXdCWSxDQUF4QixDQUR2QjtBQUFBLFVBRUlJLGNBRko7QUFJQSxVQUFJdkIsSUFBSSxLQUFLc0IsZ0JBQWIsRUFBK0IsT0FBTyxLQUFQO0FBRS9CQyxvQkFBYyxHQUFHSCxVQUFVLENBQUNiLFNBQVgsQ0FBcUJZLENBQXJCLEVBQXdCQyxVQUFVLENBQUNwRyxNQUFuQyxDQUFqQjtBQUVBLFVBQUksZUFBZXdHLElBQWYsQ0FBb0JELGNBQXBCLENBQUosRUFBeUMsT0FBTyxJQUFQO0FBRXpDLGFBQU8sS0FBUDtBQUNEO0FBdEVnQixHQUFaLENBQVA7QUF3RUQsQzs7QUE3RUQ7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNDZSxZQUFXO0FBQ3hCLFNBQU8sSUFBSTlLLGNBQUosQ0FBWTtBQUNqQkMsVUFBTSxFQUFFO0FBQ05DLFNBQUcsRUFBRTtBQUNILHVCQUFlLGNBRFo7QUFFSCw2QkFBcUIsYUFGbEI7QUFHSCwrQkFBdUIsYUFIcEI7QUFJSCwyQ0FBbUMsNkJBSmhDO0FBS0gsaUNBQXlCLGVBTHRCO0FBTUgsMkJBQW1CLGtCQU5oQjtBQU9ILDhCQUFzQixxQkFQbkI7QUFRSCxpQ0FBeUIseUJBUnRCO0FBU0gsc0JBQWMsYUFUWDtBQVVILHlCQUFpQixnQkFWZDtBQVdILHdCQUFnQixlQVhiO0FBWUgsNEJBQW9CLGlCQVpqQjtBQWFILGlCQUFTLFNBYk47QUFjSCxrQ0FBMEIsbUJBZHZCO0FBZUgsMENBQWtDLDJCQWYvQjtBQWdCSCx3Q0FBZ0MsMEJBaEI3QjtBQWlCSCxvQ0FBNEI7QUFqQnpCO0FBREMsS0FEUztBQXVCakI4SyxVQXZCaUIsa0JBdUJWQyxTQXZCVSxFQXVCQy9GLE9BdkJELEVBdUJVZ0csSUF2QlYsRUF1QmdCO0FBQy9CcEssMkJBQVNDLEdBQVQsQ0FBYSxVQUFiLEVBQXlCQyxJQUF6QixDQUE4QixVQUFBMkYsUUFBUSxFQUFJO0FBQ3hDLFlBQUlzRSxTQUFTLENBQUN0RSxRQUFELENBQWIsRUFBeUI7QUFDdkJuRyxpQkFBTyxDQUFDMkssYUFBUixDQUFzQnBILE1BQXRCLENBQTZCO0FBQzNCbUgsZ0JBQUksRUFBRSxPQURxQjtBQUUzQjNILGlCQUFLLEVBQUUsaUJBQWlCL0MsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCeUgsSUFBeEIsQ0FGRztBQUczQmhHLG1CQUFPLEVBQVBBLE9BSDJCO0FBSTNCa0csbUJBQU8sRUFBRTVLLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjRLLE1BQWhCLENBQXVCLGdCQUF2QjtBQUprQixXQUE3QjtBQU1EO0FBQ0YsT0FURDtBQVVELEtBbENnQjtBQW9DakJDLGdCQXBDaUIsMEJBb0NGO0FBQ2IsV0FBS04sTUFBTCxDQUNFLFVBQUFyRSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDUSxPQUFULENBQWlCb0UsUUFBckI7QUFBQSxPQURWLEVBRUUvSyxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0Isa0JBQXhCLENBRkYsRUFHRSxTQUhGO0FBS0QsS0ExQ2dCO0FBNENqQm1DLGVBNUNpQix5QkE0Q0g7QUFDWixXQUFLb0YsTUFBTCxDQUNFLFVBQUFyRSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDNkUsSUFBVCxDQUFjQyxPQUFsQjtBQUFBLE9BRFYsRUFFRWpMLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixVQUF4QixDQUZGLEVBR0UsT0FIRjtBQUtELEtBbERnQjtBQW9EakJrQyxvQkFwRGlCLDhCQW9ERTtBQUNqQixXQUFLcUYsTUFBTCxDQUNFLFVBQUFyRSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDNkUsSUFBVCxDQUFjRSxPQUFsQjtBQUFBLE9BRFYsRUFFRWxMLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixVQUF4QixDQUZGLEVBR0UsT0FIRjtBQUtELEtBMURnQjtBQTREakJrSSxrQkE1RGlCLDBCQTRERkMsTUE1REUsRUE0RE1DLE1BNUROLEVBNERjO0FBQzdCLFVBQU1DLFdBQVcsR0FBR3RMLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3Qm1JLE1BQXhCLENBQXBCO0FBQ0EsVUFBTUcsV0FBVyxHQUFHRixNQUFNLEdBQUcsU0FBU3JMLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3Qm9JLE1BQXhCLENBQVosR0FBOEMsRUFBeEU7QUFDQSxXQUFLYixNQUFMLENBQ0UsVUFBQXJFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM2RSxJQUFULENBQWNFLE9BQWxCO0FBQUEsT0FEVixFQUVFbEwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLHFCQUF4QixFQUErQ3FJLFdBQVcsR0FBR0MsV0FBN0QsQ0FGRixFQUdFLE9BSEY7QUFLRCxLQXBFZ0I7QUFzRWpCQyxpQkF0RWlCLHlCQXNFSGxILEtBdEVHLEVBc0VJO0FBQ25CLFdBQUtrRyxNQUFMLENBQ0UsVUFBQXJFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM2RSxJQUFULENBQWNFLE9BQWxCO0FBQUEsT0FEVixFQUVFbEwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLHFCQUF4QixFQUErQ2pELE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QnFCLEtBQXhCLENBQS9DLENBRkYsRUFHRSxTQUhGO0FBS0QsS0E1RWdCO0FBOEVqQm1ILG1CQTlFaUIsNkJBOEVDO0FBQ2hCLFdBQUtqQixNQUFMLENBQ0UsVUFBQXJFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM2RSxJQUFULENBQWNFLE9BQWxCO0FBQUEsT0FEVixFQUVFbEwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLHFCQUF4QixDQUZGLEVBR0UsU0FIRjtBQUtELEtBcEZnQjtBQXNGakIrQixxQkF0RmlCLCtCQXNGRztBQUNsQixXQUFLd0YsTUFBTCxDQUNFLFVBQUFyRSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDNkUsSUFBVCxDQUFjVSxXQUFsQjtBQUFBLE9BRFYsRUFFRTFMLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3Qiw0QkFBeEIsQ0FGRixFQUdFLFNBSEY7QUFLRCxLQTVGZ0I7QUE4RmpCZ0MsNkJBOUZpQix1Q0E4Rlc7QUFDMUIsV0FBS3VGLE1BQUwsQ0FDRSxVQUFBckUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQzZFLElBQVQsQ0FBY1UsV0FBbEI7QUFBQSxPQURWLEVBRUUxTCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsNEJBQXhCLENBRkYsRUFHRSxTQUhGO0FBS0QsS0FwR2dCO0FBc0dqQjBJLDJCQXRHaUIscUNBc0dTO0FBQ3hCLFdBQUtuQixNQUFMLENBQ0UsVUFBQXJFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM2RSxJQUFULENBQWNZLFdBQWxCO0FBQUEsT0FEVixFQUVFNUwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLDBCQUF4QixDQUZGLEVBR0UsU0FIRjtBQUtELEtBNUdnQjtBQThHakJpQyx1QkE5R2lCLGlDQThHSztBQUNwQixXQUFLc0YsTUFBTCxDQUNFLFVBQUFyRSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDNkUsSUFBVCxDQUFjVSxXQUFsQjtBQUFBLE9BRFYsRUFFRTFMLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QiwwQkFBeEIsQ0FGRixFQUdFLE9BSEY7QUFLRCxLQXBIZ0I7QUFzSGpCNEksZUF0SGlCLHVCQXNITHZILEtBdEhLLEVBc0hFO0FBQ2pCLFdBQUtrRyxNQUFMLENBQ0UsVUFBQXJFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNRLE9BQVQsQ0FBaUJvRSxRQUFyQjtBQUFBLE9BRFYsRUFFRS9LLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQkFBeEIsRUFBNkNqRCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JxQixLQUF4QixDQUE3QyxDQUZGLEVBR0UsT0FIRjtBQUtELEtBNUhnQjtBQThIakJ3SCwrQkE5SGlCLHVDQThIV3hILEtBOUhYLEVBOEhrQnlFLElBOUhsQixFQThId0I7QUFDdkMsV0FBS3lCLE1BQUwsQ0FDRSxVQUFBckUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQm9FLFFBQXJCO0FBQUEsT0FEVixFQUVFL0ssT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLG1CQUF4QixFQUE2Q2pELE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QnFCLEtBQXhCLEVBQStCeUUsSUFBL0IsQ0FBN0MsQ0FGRixFQUdFLE9BSEY7QUFLRCxLQXBJZ0I7QUFzSWpCZ0QsaUJBdElpQix5QkFzSUh6SCxLQXRJRyxFQXNJSTtBQUNuQixXQUFLa0csTUFBTCxDQUNFLFVBQUFyRSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDNkUsSUFBVCxDQUFjZ0IsU0FBbEI7QUFBQSxPQURWLEVBRUVoTSxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsWUFBeEIsRUFBc0NqRCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JxQixLQUF4QixDQUF0QyxDQUZGLEVBR0UsT0FIRjtBQUtELEtBNUlnQjtBQThJakJlLDRCQTlJaUIsc0NBOElVO0FBQ3pCLFdBQUttRixNQUFMLENBQ0UsVUFBQXJFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM2RSxJQUFULENBQWNFLE9BQWxCO0FBQUEsT0FEVixFQUVFbEwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLHNCQUF4QixDQUZGLEVBR0UsT0FIRjtBQUtELEtBcEpnQjtBQXNKakJxQyx5QkF0SmlCLG1DQXNKTztBQUN0QixXQUFLa0YsTUFBTCxDQUNFLFVBQUFyRSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDNkUsSUFBVCxDQUFjRSxPQUFsQjtBQUFBLE9BRFYsRUFFRWxMLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3Qix1QkFBeEIsQ0FGRixFQUdFLE9BSEY7QUFLRCxLQTVKZ0I7QUE4SmpCZ0osV0E5SmlCLG1CQThKVDNILEtBOUpTLEVBOEpGO0FBQ2IsV0FBS2tHLE1BQUwsQ0FDRSxVQUFBckUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQzZFLElBQVQsQ0FBY2dCLFNBQWxCO0FBQUEsT0FEVixFQUVFaE0sT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLFlBQXhCLEVBQXNDakQsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCcUIsS0FBeEIsQ0FBdEMsQ0FGRixFQUdFLE9BSEY7QUFLRDtBQXBLZ0IsR0FBWixDQUFQO0FBc0tELEM7O0FBMUtEOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0VlLFlBQVc7QUFDeEIsU0FBTyxJQUFJOUUsY0FBSixDQUFZO0FBQ2pCQyxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFO0FBQ0gsdUJBQWU7QUFEWjtBQURDLEtBRFM7QUFPakJJLFlBUGlCLHNCQU9OO0FBQUE7O0FBQ1RFLGFBQU8sQ0FBQ2tNLFVBQVIsQ0FBbUJsSyxTQUFuQixDQUE2QjVCLFdBQTdCLENBQXlDLFVBQUFnRCxHQUFHLEVBQUk7QUFDOUMsYUFBSSxDQUFDeEMsSUFBTCxDQUFVLHFCQUFWLEVBQWlDd0MsR0FBRyxDQUFDTixFQUFyQyxFQUF5Q00sR0FBRyxDQUFDNEMsR0FBN0M7O0FBQ0FoRyxlQUFPLENBQUNrTSxVQUFSLENBQW1CQyxJQUFuQixDQUF3Qi9JLEdBQUcsQ0FBQ04sRUFBNUI7QUFDRCxPQUhEO0FBSUQsS0FaZ0I7QUFjakJzSixRQWRpQixnQkFjWnpHLEtBZFksRUFjTDtBQUNWckYsMkJBQVNDLEdBQVQsQ0FBYSxVQUFiLEVBQXlCQyxJQUF6QixDQUE4QixVQUFBMkYsUUFBUSxFQUFJO0FBQ3hDLFlBQUksQ0FBQ0EsUUFBUSxDQUFDQyxLQUFULENBQWVDLE1BQXBCLEVBQTRCO0FBQzFCckcsaUJBQU8sQ0FBQ2tNLFVBQVIsQ0FBbUJFLElBQW5CLENBQXdCekcsS0FBeEI7QUFDRDtBQUNGLE9BSkQ7QUFLRDtBQXBCZ0IsR0FBWixDQUFQO0FBc0JELEM7O0FBMUJEOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0NlLFlBQVc7QUFDeEIsU0FBTyxJQUFJbkcsY0FBSixDQUFZO0FBQ2pCQyxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFO0FBQ0gseUJBQWlCLFVBRGQ7QUFFSCx1QkFBZSxVQUZaO0FBR0gsdUJBQWUsWUFIWjtBQUlILHVCQUFlLFlBSlo7QUFLSCx5QkFBaUIsYUFMZDtBQU1ILHlCQUFpQixhQU5kO0FBT0gsMEJBQWlCLFdBUGQ7QUFRSCxrQ0FBMEI7QUFSdkI7QUFEQyxLQURTO0FBY2pCb0gsV0FBTyxFQUFFLEVBZFE7QUFnQmpCdUYsWUFoQmlCLG9CQWdCUjFHLEtBaEJRLEVBZ0JESyxHQWhCQyxFQWdCSTtBQUNuQixXQUFLc0csTUFBTCxHQUFjOUwsSUFBZCxDQUFtQixVQUFBNEQsSUFBSSxFQUFJO0FBQ3pCLFlBQUlBLElBQUosRUFBVTtBQUNScEUsaUJBQU8sQ0FBQ21FLGFBQVIsQ0FBc0JrSSxRQUF0QixDQUErQjtBQUM3QkUsaUJBQUssRUFBRXZNLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjRLLE1BQWhCLHdDQUF1RGxGLEtBQXZELGNBQWdFSyxHQUFoRSxFQURzQjtBQUU3QkwsaUJBQUssRUFBTEE7QUFGNkIsV0FBL0I7QUFJRDtBQUNGLE9BUEQ7QUFRRCxLQXpCZ0I7QUEwQmpCMkcsVUExQmlCLG9CQTBCUjtBQUNQLGFBQU90TSxPQUFPLENBQUNtRSxhQUFSLENBQXNCbUksTUFBdEIsQ0FBNkIsRUFBN0IsQ0FBUDtBQUNELEtBNUJnQjtBQTZCakJFLGNBN0JpQixzQkE2Qk50RixLQTdCTSxFQTZCQztBQUNoQixVQUFNdUYsVUFBVSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY3pGLEtBQWQsSUFBdUIsQ0FBQ0EsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxhQUFqQyxHQUFpRCxDQUFDRCxLQUFLLENBQUNDLGFBQTNFO0FBQ0EsVUFBTUwsT0FBTyxHQUFHLEtBQUtBLE9BQXJCO0FBRUEsb0NBQWtCdEcsSUFBbEIsQ0FBdUIsVUFBQTRDLEdBQUcsRUFBSTtBQUM1QixZQUFNTixFQUFFLEdBQUdNLEdBQUcsQ0FBQ04sRUFBZjtBQUNBLFlBQU1rRCxHQUFHLEdBQUd5RyxVQUFVLEdBQUcsc0JBQVVySixHQUFHLENBQUM0QyxHQUFkLENBQUgsR0FBd0I1QyxHQUFHLENBQUM0QyxHQUFsRDtBQUVBYyxlQUFPLENBQUNoRSxFQUFELENBQVAsR0FBY2dFLE9BQU8sQ0FBQ2hFLEVBQUQsQ0FBUCxJQUFlLEVBQTdCO0FBQ0FnRSxlQUFPLENBQUNoRSxFQUFELENBQVAsQ0FBWWtELEdBQVosSUFBbUJrQixLQUFuQjtBQUNELE9BTkQ7QUFPRCxLQXhDZ0I7QUF5Q2pCMEYsZUF6Q2lCLHVCQXlDTDFGLEtBekNLLEVBeUNFO0FBQUE7O0FBQ2pCLFVBQU11RixVQUFVLEdBQUcsQ0FBQ3ZGLEtBQUssQ0FBQ0MsYUFBMUI7QUFDQSxVQUFNTCxPQUFPLEdBQUcsS0FBS0EsT0FBckI7QUFDQSxVQUFNaUIsUUFBUSxHQUFHMEUsVUFBVSxHQUFHLHNCQUFVdkYsS0FBSyxDQUFDbEIsR0FBaEIsQ0FBSCxHQUEwQmtCLEtBQUssQ0FBQ2xCLEdBQTNEOztBQUVBLFdBQUssSUFBSWxELEVBQVQsSUFBZWdFLE9BQWYsRUFBd0I7QUFDdEIsYUFBSyxJQUFJZCxHQUFULElBQWdCYyxPQUFPLENBQUNoRSxFQUFELENBQXZCLEVBQTZCO0FBQzNCLGNBQUlrRCxHQUFHLEtBQUsrQixRQUFaLEVBQXNCO0FBQ3BCakIsbUJBQU8sQ0FBQ2hFLEVBQUQsQ0FBUCxDQUFZa0QsR0FBWixJQUFtQmtCLEtBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUNELG9DQUFrQjFHLElBQWxCLENBQXVCLFVBQUE0QyxHQUFHLEVBQUk7QUFDNUIsWUFBTXlKLE1BQU0sR0FBR0osVUFBVSxHQUFHLHNCQUFVckosR0FBRyxDQUFDNEMsR0FBZCxDQUFILEdBQXdCNUMsR0FBRyxDQUFDNEMsR0FBckQ7O0FBRUEsWUFBSTZHLE1BQU0sS0FBSzlFLFFBQWYsRUFBeUI7QUFDdkIsZUFBSSxDQUFDbkgsSUFBTCxDQUFVLHFCQUFWLEVBQWlDc0csS0FBakM7QUFDRDtBQUNGLE9BTkQ7QUFPRCxLQTVEZ0I7QUE2RGpCNEYsZUE3RGlCLHVCQTZETC9ELElBN0RLLEVBNkRDL0MsR0E3REQsRUE2RE1tQixhQTdETixFQTZEcUI7QUFBQTs7QUFDcEMsVUFBTUwsT0FBTyxHQUFHLEtBQUtBLE9BQXJCO0FBQ0EsVUFBTWlCLFFBQVEsR0FBR1osYUFBYSxHQUFHbkIsR0FBSCxHQUFTLHNCQUFVQSxHQUFWLENBQXZDOztBQUVBLFdBQUssSUFBSWxELEVBQVQsSUFBZWdFLE9BQWYsRUFBd0I7QUFDdEIsYUFBSyxJQUFJaUcsUUFBVCxJQUFxQmpHLE9BQU8sQ0FBQ2hFLEVBQUQsQ0FBNUIsRUFBa0M7QUFDaEMsY0FBSWlLLFFBQVEsS0FBS2hGLFFBQWpCLEVBQTJCO0FBQ3pCLG1CQUFPakIsT0FBTyxDQUFDaEUsRUFBRCxDQUFQLENBQVlpSyxRQUFaLENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0Qsb0NBQWtCdk0sSUFBbEIsQ0FBdUIsVUFBQTRDLEdBQUcsRUFBSTtBQUM1QixZQUFNeUosTUFBTSxHQUFHMUYsYUFBYSxHQUFHL0QsR0FBRyxDQUFDNEMsR0FBUCxHQUFhLHNCQUFVNUMsR0FBRyxDQUFDNEMsR0FBZCxDQUF6Qzs7QUFDQSxZQUFJNkcsTUFBTSxLQUFLOUUsUUFBZixFQUF5QjtBQUN2QixnQkFBSSxDQUFDbkgsSUFBTCxDQUFVLHVCQUFWO0FBQ0Q7QUFDRixPQUxEO0FBTUQsS0E5RWdCO0FBK0VqQm9NLGFBL0VpQix1QkErRUw7QUFBQTs7QUFDVixvQ0FBa0J4TSxJQUFsQixDQUF1QixVQUFBNEMsR0FBRyxFQUFJO0FBQzVCLFlBQU02SixXQUFXLEdBQUcsc0JBQVU3SixHQUFHLENBQUM0QyxHQUFkLENBQXBCO0FBQ0EsWUFBTWtILGlCQUFpQixHQUFHLE1BQUksQ0FBQ3BHLE9BQUwsQ0FBYTFELEdBQUcsQ0FBQ04sRUFBakIsQ0FBMUI7QUFDQSxZQUFJb0UsS0FBSyxHQUFHLElBQVo7O0FBQ0EsWUFBSWdHLGlCQUFKLEVBQXVCO0FBQ3JCaEcsZUFBSyxHQUFHZ0csaUJBQWlCLENBQUM5SixHQUFHLENBQUM0QyxHQUFMLENBQWpCLElBQThCa0gsaUJBQWlCLENBQUNELFdBQUQsQ0FBdkQ7QUFDRDs7QUFDRCxjQUFJLENBQUNyTSxJQUFMLENBQVUscUJBQVYsRUFBaUNzRyxLQUFqQztBQUNELE9BUkQ7QUFTRCxLQXpGZ0I7QUEwRmpCaUcsb0JBMUZpQiw0QkEwRkFDLEtBMUZBLEVBMEZPO0FBQ3RCLFdBQUt4TSxJQUFMLENBQVUscUJBQVYsRUFBaUN3TSxLQUFqQztBQUNEO0FBNUZnQixHQUFaLENBQVA7QUE4RkQsQzs7QUFqR0QsNEU7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUdBLElBQUk1TixjQUFKLENBQVk7QUFDVkMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHFCQUFlLCtCQURaO0FBRUgsdUJBQWlCLHFCQUZkO0FBR0gscUJBQWUsWUFIWjtBQUtILDhCQUF3QixhQUxyQjtBQU1ILGlDQUEyQix1QkFOeEI7QUFPSCwyQkFBcUIsZUFQbEI7QUFRSCxvQ0FBOEIsa0JBUjNCO0FBU0gsaUNBQTJCLHVCQVR4QjtBQVVILGlDQUEyQix1QkFWeEI7QUFXSCw0QkFBc0Isa0JBWG5CO0FBWUgsZ0NBQTBCLGVBWnZCO0FBYUgsOEJBQXdCLGdCQWJyQjtBQWNILG1DQUE2QixxQkFkMUI7QUFlSCw2QkFBdUIsZUFmcEI7QUFnQkgsNkJBQXVCLG1CQWhCcEI7QUFpQkgsa0NBQTRCLGlCQWpCekI7QUFrQkgsZ0NBQTBCLGVBbEJ2QjtBQW1CSCx1Q0FBaUMsc0JBbkI5QjtBQW9CSCx1Q0FBaUMsc0JBcEI5QjtBQXFCSCxxQ0FBK0IsdUJBckI1QjtBQXNCSCw2QkFBdUIsbUJBdEJwQjtBQXVCSCw2QkFBdUIsbUJBdkJwQjtBQXdCSCxpQ0FBMkIsdUJBeEJ4QjtBQXlCSCw2QkFBdUIsZUF6QnBCO0FBMEJILDZCQUF1QixlQTFCcEI7QUEyQkgsc0NBQWdDLG9CQTNCN0I7QUE0QkgsZ0NBQTBCLG9CQTVCdkI7QUE2QkgsK0JBQXlCLGlCQTdCdEI7QUErQkgsOEJBQXdCLG9CQS9CckI7QUFnQ0gsMkJBQXFCLGlCQWhDbEI7QUFrQ0gscUJBQWUsV0FsQ1o7QUFtQ0gsdUJBQWlCLGFBbkNkO0FBb0NILDhCQUF3Qix5QkFwQ3JCO0FBcUNILHdCQUFrQixlQXJDZjtBQXNDSCw4QkFBd0IsMEJBdENyQjtBQXVDSCx1QkFBaUIsY0F2Q2Q7QUF3Q0gsb0JBQWMsV0F4Q1g7QUF5Q0gscUJBQWUsWUF6Q1o7QUEwQ0gsb0JBQWMsV0ExQ1g7QUEyQ0gsaUJBQVcsUUEzQ1I7QUE2Q0gsNkJBQXVCLGtCQTdDcEI7QUE4Q0gsK0JBQXlCLHFCQTlDdEI7QUErQ0gsMkJBQXFCO0FBL0NsQjtBQURDLEdBREU7QUFvRFYyTixxQkFBbUIsRUFBRSxLQXBEWDtBQXNEVjtBQUNBQyxxQkF2RFUsK0JBdURVM04sTUF2RFYsRUF1RGtCO0FBQzFCVyx5QkFBU2dELE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEIsVUFBQTZDLFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNDLEtBQVQsQ0FBZXpHLE1BQWYsR0FBd0JBLE1BQXhCO0FBQWdDLGFBQU93RyxRQUFQO0FBQWtCLEtBQTVGO0FBQ0QsR0F6RFM7QUEyRFY7QUFDQW9ILFlBNURVLHNCQTREQ0MsS0E1REQsRUE0RFFDLEdBNURSLEVBNERhO0FBQUE7O0FBQ3JCbk4seUJBQVNnRCxNQUFULENBQWdCLE1BQWhCLEVBQXdCLFVBQVNvSyxJQUFULEVBQWU7QUFDckNBLFVBQUksQ0FBQ0YsS0FBRCxDQUFKLEdBQWNDLEdBQWQ7QUFDQSxXQUFLRSxRQUFMLENBQWNELElBQWQ7QUFDQSxhQUFPQSxJQUFQO0FBQ0QsS0FKRCxFQUlHLE9BSkgsRUFNR2xOLElBTkgsQ0FNUSxZQUFNO0FBQ1ZGLDJCQUFTZ0QsTUFBVCxDQUFnQixNQUFoQixFQUF3QixVQUFBb0ssSUFBSSxFQUFJO0FBQzlCQSxZQUFJLENBQUNGLEtBQUQsQ0FBSixHQUFjQyxHQUFkO0FBQ0EsZUFBT0MsSUFBUDtBQUNELE9BSEQsRUFHRyxNQUhILFdBS08sWUFBTTtBQUNYLGFBQUksQ0FBQzlNLElBQUwsQ0FBVSxPQUFWLEVBQW1CLG1CQUFuQjs7QUFDQSxhQUFJLENBQUNBLElBQUwsQ0FBVSxvQkFBVixFQUFnQzRNLEtBQWhDO0FBQ0QsT0FSRCxFQVNDaE4sSUFURCxDQVNNO0FBQUEsZUFBTSxLQUFJLENBQUNJLElBQUwsQ0FBVSwrQkFBK0I0TSxLQUF6QyxFQUFnREEsS0FBaEQsRUFBdURDLEdBQXZELENBQU47QUFBQSxPQVROO0FBVUQsS0FqQkg7QUFrQkQsR0EvRVM7QUFpRlY7QUFDQUcsZ0JBbEZVLDBCQWtGS0MsT0FsRkwsRUFrRmNDLE9BbEZkLEVBa0Z1QnhKLEtBbEZ2QixFQWtGOEI7QUFBQTs7QUFDdENoRSx5QkFBU2dELE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEJ1SyxPQUE1QixFQUNHck4sSUFESCxDQUNRO0FBQUEsYUFBTSxNQUFJLENBQUNJLElBQUwsQ0FBVSxhQUFha04sT0FBYixHQUF1QixXQUFqQyxDQUFOO0FBQUEsS0FEUixXQUVTLFlBQU07QUFBRSxVQUFJeEosS0FBSixFQUFXLE1BQUksQ0FBQzFELElBQUwsQ0FBVSxPQUFWLEVBQW1CMEQsS0FBbkI7QUFBNEIsS0FGeEQ7QUFHRCxHQXRGUztBQXVGVnlKLGlCQXZGVSwyQkF1Rk1DLEdBdkZOLEVBdUZXQyxLQXZGWCxFQXVGa0I7QUFDMUIsU0FBS0wsY0FBTCxDQUNFLFVBQUF6SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDK0gsT0FBVCxDQUFpQkYsR0FBakIsSUFBeUI7QUFBRUMsYUFBSyxFQUFMQTtBQUFGLE9BQXpCO0FBQW9DLGFBQU85SCxRQUFQO0FBQWtCLEtBRHRFLEVBRUUsUUFGRixFQUdFLGtCQUhGO0FBS0QsR0E3RlM7QUE4RlZnSSxvQkE5RlUsOEJBOEZTSCxHQTlGVCxFQThGYztBQUN0QixTQUFLSixjQUFMLENBQ0UsVUFBQXpILFFBQVEsRUFBSTtBQUFFLGFBQU9BLFFBQVEsQ0FBQytILE9BQVQsQ0FBaUJGLEdBQWpCLENBQVA7QUFBOEIsYUFBTzdILFFBQVA7QUFBa0IsS0FEaEUsRUFFRSxRQUZGLEVBR0UscUJBSEY7QUFLRCxHQXBHUztBQXFHVmlJLGFBckdVLHVCQXFHRUosR0FyR0YsRUFxR09DLEtBckdQLEVBcUdjO0FBQ3RCLFFBQUksQ0FBQ0QsR0FBTCxFQUFVLE9BQU8sS0FBUDtBQUVWLFNBQUtKLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQytILE9BQVQsQ0FBaUJGLEdBQWpCLEVBQXNCQyxLQUF0QixHQUE4QkEsS0FBOUI7QUFBcUMsYUFBTzlILFFBQVA7QUFBa0IsS0FEdkUsRUFFRSxPQUZGLEVBR0Usa0JBSEY7QUFLRCxHQTdHUztBQThHVmtJLGVBOUdVLHlCQThHSUwsR0E5R0osRUE4R1NNLEtBOUdULEVBOEdnQjtBQUN4QixTQUFLVixjQUFMLENBQ0UsVUFBQXpILFFBQVEsRUFBSTtBQUNWLFVBQUlvSSxNQUFNLEdBQUdwSSxRQUFRLENBQUMrSCxPQUFULENBQWlCRixHQUFqQixDQUFiOztBQUVBLFVBQUlPLE1BQUosRUFBWTtBQUNWLFlBQUlDLEtBQUssR0FBR0QsTUFBTSxDQUFDTixLQUFQLENBQWFPLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBWjtBQUFBLFlBQ0l0RSxDQUFDLEdBQUdzRSxLQUFLLENBQUN6SyxNQURkO0FBQUEsWUFDc0JrSyxLQUR0Qjs7QUFHQSxlQUFPL0QsQ0FBQyxFQUFSLEVBQVk7QUFDVitELGVBQUssR0FBR08sS0FBSyxDQUFDdEUsQ0FBRCxDQUFiOztBQUNBLGNBQUkrRCxLQUFLLENBQUN6SyxRQUFOLENBQWUsa0JBQWYsQ0FBSixFQUF3QztBQUN0QzJDLG9CQUFRLENBQUMrSCxPQUFULENBQWlCRixHQUFqQixFQUFzQkMsS0FBdEIsR0FBOEJNLE1BQU0sQ0FBQ04sS0FBUCxDQUFhUSxPQUFiLENBQXFCLHdCQUFyQixFQUErQyxzQkFBc0JILEtBQXJFLENBQTlCO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsYUFBT25JLFFBQVA7QUFDRCxLQWpCSCxFQWtCRSxVQWxCRixFQW1CRSxrQkFuQkY7QUFxQkQsR0FwSVM7QUFxSVZ1SSx1QkFySVUsaUNBcUlZVixHQXJJWixFQXFJaUJXLFFBcklqQixFQXFJMkI7QUFDbkMsU0FBS2YsY0FBTCxDQUNFLFVBQUF6SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDK0gsT0FBVCxDQUFpQkYsR0FBakIsRUFBc0JXLFFBQXRCLEdBQWlDQSxRQUFqQztBQUEyQyxhQUFPeEksUUFBUDtBQUFrQixLQUQ3RSxFQUVFLFVBRkYsRUFHRSw0QkFIRjtBQUtELEdBM0lTO0FBNElWeUksa0JBNUlVLDRCQTRJT2pGLE1BNUlQLEVBNEllO0FBQ3ZCLFNBQUtpRSxjQUFMLENBQ0UsVUFBQXpILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUM2RSxJQUFULENBQWM2RCxVQUFkLEdBQTJCbEYsTUFBM0I7QUFBbUMsYUFBT3hELFFBQVA7QUFBa0IsS0FEckUsRUFFRSxhQUZGLEVBR0Usd0JBSEY7QUFLRCxHQWxKUztBQW1KVjJJLHVCQW5KVSxpQ0FtSllkLEdBbkpaLEVBbUppQmpJLE1BbkpqQixFQW1KeUI7QUFDakMsU0FBSzZILGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ25DLFNBQVQsQ0FBbUJnSyxHQUFuQixFQUF3QixDQUF4QixJQUE2QmpJLE1BQTdCO0FBQXFDLGFBQU9JLFFBQVA7QUFBa0IsS0FEdkUsRUFFRSxVQUZGLEVBR0UsdUJBSEY7QUFLRCxHQXpKUztBQTBKVjRJLHVCQTFKVSxpQ0EwSllmLEdBMUpaLEVBMEppQmdCLEtBMUpqQixFQTBKd0I7QUFDaEMsU0FBS3BCLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ25DLFNBQVQsQ0FBbUJnSyxHQUFuQixFQUF3QixDQUF4QixJQUE2QmdCLEtBQTdCO0FBQW9DLGFBQU83SSxRQUFQO0FBQWtCLEtBRHRFLEVBRUUsVUFGRixFQUdFLHNCQUhGO0FBS0QsR0FoS1M7QUFpS1Y4SSxlQWpLVSx5QkFpS0lELEtBaktKLEVBaUtXO0FBQ25CLFNBQUtwQixjQUFMLENBQ0UsVUFBQXpILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNRLE9BQVQsQ0FBaUJ1SSxNQUFqQixHQUEwQkYsS0FBMUI7QUFBaUMsYUFBTzdJLFFBQVA7QUFBa0IsS0FEbkUsRUFFRSxNQUZGO0FBSUQsR0F0S1M7QUF1S1ZnSixlQXZLVSx5QkF1S0lILEtBdktKLEVBdUtXO0FBQ25CLFNBQUtwQixjQUFMLENBQ0UsVUFBQXpILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNRLE9BQVQsQ0FBaUJ5SSxJQUFqQixHQUF3QkosS0FBeEI7QUFBK0IsYUFBTzdJLFFBQVA7QUFBa0IsS0FEakUsRUFFRSxNQUZGO0FBSUQsR0E1S1M7QUE2S1ZrSixvQkE3S1UsOEJBNktTQyxNQTdLVCxFQTZLaUI7QUFDekIsU0FBSzFCLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQzZFLElBQVQsQ0FBY3VFLFlBQWQsR0FBNkJELE1BQTdCO0FBQXFDLGFBQU9uSixRQUFQO0FBQWtCLEtBRHZFLEVBRUUsZUFGRixFQUdFLDBCQUhGO0FBS0QsR0FuTFM7QUFvTFZxSixvQkFwTFUsOEJBb0xTUixLQXBMVCxFQW9MZ0I7QUFDeEIsU0FBS3BCLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQjhJLEVBQWpCLEdBQXNCVCxLQUF0QjtBQUE2QixhQUFPN0ksUUFBUDtBQUFrQixLQUQvRCxFQUVFLGdCQUZGO0FBSUQsR0F6TFM7QUEwTFZ1SixrQkExTFUsNEJBMExPMUIsR0ExTFAsRUEwTFlnQixLQTFMWixFQTBMbUI7QUFDM0IsU0FBS3BCLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ25DLFNBQVQsQ0FBbUJnSyxHQUFuQixFQUF3QixDQUF4QixJQUE2QmdCLEtBQTdCO0FBQW9DLGFBQU83SSxRQUFQO0FBQWtCLEtBRHRFLEVBRUUsS0FGRixFQUdFLGdCQUhGO0FBS0QsR0FoTVM7QUFpTVZ3SixlQWpNVSx5QkFpTUlsQyxHQWpNSixFQWlNUztBQUNqQixTQUFLRyxjQUFMLENBQ0UsVUFBQXpILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNRLE9BQVQsQ0FBaUJpSixRQUFqQixHQUE0Qm5DLEdBQTVCO0FBQWlDLGFBQU90SCxRQUFQO0FBQWtCLEtBRG5FLEVBRUUsU0FGRixFQUdFLHFCQUhGO0FBS0QsR0F2TVM7QUF3TVYwSixnQkF4TVUsMEJBd01LcEMsR0F4TUwsRUF3TVU7QUFDbEIsU0FBS0csY0FBTCxDQUNFLFVBQUF6SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDUSxPQUFULENBQWlCbUosS0FBakIsR0FBeUJyQyxHQUF6QjtBQUE4QixhQUFPdEgsUUFBUDtBQUFrQixLQURoRSxFQUVFLFVBRkYsRUFHRSxxQkFIRjtBQUtELEdBOU1TO0FBK01WNEoscUJBL01VLCtCQStNVXRDLEdBL01WLEVBK01lO0FBQ3ZCLFNBQUtHLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQnFKLFVBQWpCLEdBQThCdkMsR0FBOUI7QUFBbUMsYUFBT3RILFFBQVA7QUFBa0IsS0FEckUsRUFFRSxlQUZGLEVBR0UscUJBSEY7QUFLRCxHQXJOUztBQXNOVjhKLGVBdE5VLHlCQXNOSXhDLEdBdE5KLEVBc05TO0FBQ2pCLFNBQUtHLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQjhGLFVBQWpCLEdBQThCZ0IsR0FBOUI7QUFBbUMsYUFBT3RILFFBQVA7QUFBa0IsS0FEckUsRUFFRSxTQUZGO0FBSUQsR0EzTlM7QUE0TlYrSixtQkE1TlUsNkJBNE5RekMsR0E1TlIsRUE0TmE7QUFDckIsU0FBS0csY0FBTCxDQUNFLFVBQUF6SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDUSxPQUFULENBQWlCK0IsVUFBakIsR0FBOEIrRSxHQUE5QjtBQUFtQyxhQUFPdEgsUUFBUDtBQUFrQixLQURyRSxFQUVFLGFBRkYsRUFHRSxpQkFIRjtBQUtELEdBbE9TO0FBbU9WZ0ssaUJBbk9VLDJCQW1PTTFDLEdBbk9OLEVBbU9XO0FBQ25CLFNBQUtHLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQnNDLE1BQWpCLEdBQTBCd0UsR0FBMUI7QUFBK0IsYUFBT3RILFFBQVA7QUFBa0IsS0FEakUsRUFFRSxRQUZGLEVBR0UsbUJBSEY7QUFLRCxHQXpPUztBQTBPVmlLLGVBMU9VLHlCQTBPSTNDLEdBMU9KLEVBME9TO0FBQ2pCLFNBQUtHLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQm9FLFFBQWpCLEdBQTRCMEMsR0FBNUI7QUFBaUMsYUFBT3RILFFBQVA7QUFBa0IsS0FEbkUsRUFFRSxTQUZGLEVBR0UsbUJBSEY7QUFLRCxHQWhQUztBQWlQVmtLLHNCQWpQVSxnQ0FpUFdDLElBalBYLEVBaVBpQjdDLEdBalBqQixFQWlQc0I7QUFDOUIsU0FBS0csY0FBTCxDQUNFLFVBQUF6SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDUSxPQUFULENBQWlCMkosSUFBakIsSUFBeUI3QyxHQUF6QjtBQUE4QixhQUFPdEgsUUFBUDtBQUFrQixLQURoRSxFQUVFLGFBRkYsRUFHRSxxQkFIRjtBQUtELEdBdlBTO0FBd1BWb0ssc0JBeFBVLGdDQXdQV0QsSUF4UFgsRUF3UGlCN0MsR0F4UGpCLEVBd1BzQjtBQUM5QixTQUFLRyxjQUFMLENBQ0UsVUFBQXpILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNRLE9BQVQsQ0FBaUIySixJQUFqQixJQUF5QjdDLEdBQXpCO0FBQThCLGFBQU90SCxRQUFQO0FBQWtCLEtBRGhFLEVBRUUsYUFGRixFQUdFLHFCQUhGO0FBS0QsR0E5UFM7QUErUFZxSyx1QkEvUFUsaUNBK1BZRixJQS9QWixFQStQa0I3QyxHQS9QbEIsRUErUHVCO0FBQy9CLFNBQUtHLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQzZFLElBQVQsQ0FBY3NGLElBQWQsSUFBc0I3QyxHQUF0QjtBQUEyQixhQUFPdEgsUUFBUDtBQUFrQixLQUQ3RCxFQUVFLGNBRkYsRUFHRSxtQkFIRjtBQUtELEdBclFTO0FBc1FWc0ssbUJBdFFVLDZCQXNRUUgsSUF0UVIsRUFzUWM3QyxHQXRRZCxFQXNRbUI7QUFDM0IsU0FBS0csY0FBTCxDQUNFLFVBQUF6SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDNkUsSUFBVCxDQUFjc0YsSUFBZCxJQUFzQjdDLEdBQXRCO0FBQTJCLGFBQU90SCxRQUFQO0FBQWtCLEtBRDdELEVBRUUsTUFGRixFQUdFLG1CQUhGO0FBS0QsR0E1UVM7QUE2UVZ1Syx1QkE3UVUsaUNBNlFZSixJQTdRWixFQTZRa0I3QyxHQTdRbEIsRUE2UXVCO0FBQy9CLFNBQUtHLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQzZFLElBQVQsQ0FBY3NGLElBQWQsSUFBc0I3QyxHQUF0QjtBQUEyQixhQUFPdEgsUUFBUDtBQUFrQixLQUQ3RCxFQUVFLFVBRkYsRUFHRSxtQkFIRjtBQUtELEdBblJTO0FBb1JWd0ssaUJBcFJVLDJCQW9STWxELEdBcFJOLEVBb1JXO0FBQ25CLFNBQUtHLGNBQUwsQ0FDRSxVQUFBekgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxNQUFmLEdBQXdCb0gsR0FBeEI7QUFBNkIsYUFBT3RILFFBQVA7QUFBa0IsS0FEL0QsRUFFRSxRQUZGLEVBR0UsbUJBSEY7QUFLRCxHQTFSUztBQTJSVnlLLGtCQTNSVSw0QkEyUk94TixHQTNSUCxFQTJSWXlOLFFBM1JaLEVBMlJzQjtBQUM5QnZRLHlCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBNkMsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQzFELEVBQVQsQ0FBWTJFLElBQVosQ0FBaUJoRSxHQUFqQixFQUFzQnlOLFFBQXRCLEdBQWlDQSxRQUFqQztBQUEyQyxhQUFPMUssUUFBUDtBQUFrQixLQUF2RztBQUNELEdBN1JTO0FBOFJWMksscUJBOVJVLCtCQThSVUMsS0E5UlYsRUE4UmlCO0FBQ3pCelEseUJBQVNnRCxNQUFULENBQWdCLFVBQWhCLEVBQTRCLFVBQUE2QyxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDMUQsRUFBVCxDQUFZc08sS0FBWixHQUFvQkEsS0FBcEI7QUFBMkIsYUFBTzVLLFFBQVA7QUFBa0IsS0FBdkY7QUFDRCxHQWhTUztBQWtTVjtBQUNBNkssY0FuU1Usd0JBbVNHQyxLQW5TSCxFQW1TVTVILElBblNWLEVBbVNnQjtBQUFBOztBQUN4QixRQUFJLENBQUM0SCxLQUFLLENBQUNsTixNQUFYLEVBQW1CO0FBRW5Cc0YsUUFBSSxHQUFHLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLE1BQXpDO0FBRUEsUUFBSTZILFdBQVcsR0FBRyxFQUFsQjtBQUVBLFdBQU81USxxQkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQXFELE9BQU8sRUFBSTtBQUMzQyxVQUFJOUQsQ0FBQyxHQUFHb08sS0FBSyxDQUFDbE4sTUFBZDtBQUFBLFVBQXNCZ0YsSUFBdEI7O0FBQ0EsYUFBT2xHLENBQUMsRUFBUixFQUFZO0FBQ1ZrRyxZQUFJLEdBQUdrSSxLQUFLLENBQUNwTyxDQUFELENBQVo7QUFDQSxZQUFJOEQsT0FBTyxDQUFDRyxPQUFSLENBQWdCaUMsSUFBaEIsQ0FBSixFQUEyQnBDLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmlDLElBQWhCLEVBQXNCb0ksSUFBdEIsQ0FBMkJwTixNQUEzQixHQUFvQyxDQUFwQyxDQUEzQixLQUNLbU4sV0FBVyxDQUFDeE4sSUFBWixDQUFpQnFGLElBQWpCO0FBQ047O0FBQ0QsYUFBT3BDLE9BQVA7QUFDRCxLQVJNLEVBUUowQyxJQVJJLEVBU043SSxJQVRNLENBU0QsWUFBTTtBQUFFLFVBQUk2SSxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUFFLGNBQUksQ0FBQ3pJLElBQUwsQ0FBVSxpQkFBVjtBQUErQjtBQUFDLEtBVC9ELFdBVUE7QUFBQSxhQUFNLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLE9BQVYsRUFBbUIscUJBQW5CLENBQU47QUFBQSxLQVZBLEVBV05KLElBWE0sQ0FXRCxZQUFNO0FBQUUsVUFBSTZJLElBQUksS0FBSyxNQUFULElBQW1CNkgsV0FBVyxDQUFDbk4sTUFBbkMsRUFBMkM7QUFBRSxjQUFJLENBQUNpTixZQUFMLENBQWtCRSxXQUFsQixFQUErQixPQUEvQjtBQUEwQztBQUFDLEtBWC9GLENBQVA7QUFZRCxHQXRUUztBQXVUVkUsV0F2VFUscUJBdVRBbEssS0F2VEEsRUF1VE87QUFBQTs7QUFDZkEsU0FBSyxDQUFDaUssSUFBTixHQUFhLEVBQWI7QUFDQSxRQUFNcEksSUFBSSxHQUFHN0IsS0FBSyxDQUFDNkIsSUFBbkI7O0FBQ0F6SSx5QkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQXFELE9BQU8sRUFBSTtBQUNwQ0EsYUFBTyxDQUFDRyxPQUFSLENBQWdCaUMsSUFBaEIsSUFBd0I3QixLQUF4QjtBQUNBLGFBQU9QLE9BQVA7QUFDRCxLQUhELEVBSUduRyxJQUpILENBSVEsVUFBQW1HLE9BQU87QUFBQSxhQUFJLE1BQUksQ0FBQy9GLElBQUwsQ0FBVSxhQUFWLEVBQXlCK0YsT0FBTyxDQUFDRyxPQUFSLENBQWdCaUMsSUFBaEIsQ0FBekIsQ0FBSjtBQUFBLEtBSmYsV0FLUztBQUFBLGFBQU0sTUFBSSxDQUFDbkksSUFBTCxDQUFVLG1CQUFWLEVBQStCLGtCQUEvQixDQUFOO0FBQUEsS0FMVDtBQU1ELEdBaFVTO0FBaVVWeVEsYUFqVVUsdUJBaVVFbEksT0FqVUYsRUFpVVdDLE9BalVYLEVBaVVvQkMsSUFqVXBCLEVBaVUwQjtBQUFBOztBQUNsQy9JLHlCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUQsT0FBTyxFQUFJO0FBQ3BDLFVBQU1PLEtBQUssR0FBRyxrQkFBTVAsT0FBTyxDQUFDRyxPQUFSLENBQWdCcUMsT0FBaEIsQ0FBTixDQUFkO0FBQ0FqQyxXQUFLLENBQUM2QixJQUFOLEdBQWFLLE9BQWI7QUFDQXpDLGFBQU8sQ0FBQ0csT0FBUixDQUFnQnNDLE9BQWhCLElBQTJCbEMsS0FBM0I7QUFDQSxhQUFPUCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JxQyxPQUFoQixDQUFQO0FBQ0EsYUFBT3hDLE9BQVA7QUFDRCxLQU5ELEVBTUcwQyxJQU5ILEVBT0c3SSxJQVBILENBT1EsVUFBQW1HLE9BQU87QUFBQSxhQUFJLE1BQUksQ0FBQy9GLElBQUwsQ0FBVSxrQ0FBVixFQUE4QytGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQnNDLE9BQWhCLENBQTlDLEVBQXdFRCxPQUF4RSxDQUFKO0FBQUEsS0FQZixXQVFTO0FBQUEsYUFBTSxNQUFJLENBQUN2SSxJQUFMLENBQVUscUJBQVYsRUFBaUMsb0JBQWpDLENBQU47QUFBQSxLQVJUO0FBU0QsR0EzVVM7QUE0VVYwUSx5QkE1VVUsbUNBNFVjcEssS0E1VWQsRUE0VXFCbUMsSUE1VXJCLEVBNFUyQjtBQUFBOztBQUNuQ0EsUUFBSSxHQUFHLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDbkMsS0FBSyxDQUFDcUssTUFBTixHQUFlLE1BQWYsR0FBd0IsT0FBakU7QUFFQSxRQUFNeEksSUFBSSxHQUFHN0IsS0FBSyxDQUFDNkIsSUFBbkI7QUFDQSxRQUFNeUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDdEssS0FBSyxDQUFDbEIsR0FBdEM7QUFDQSxRQUFJeUwsS0FBSyxHQUFHLElBQVo7O0FBRUFuUix5QkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQXFELE9BQU8sRUFBSTtBQUNwQyxVQUFJNksscUJBQUosRUFBMkI7QUFDekI3SyxlQUFPLENBQUNHLE9BQVIsQ0FBZ0JpQyxJQUFoQixJQUF3QjdCLEtBQXhCO0FBQ0FQLGVBQU8sQ0FBQ0csT0FBUixDQUFnQmlDLElBQWhCLEVBQXNCb0ksSUFBdEIsR0FBNkJ4SyxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JpQyxJQUFoQixFQUFzQm9JLElBQXRCLElBQThCLEVBQTNEO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBSSxDQUFDeEssT0FBTyxDQUFDRyxPQUFSLENBQWdCaUMsSUFBaEIsQ0FBTCxFQUE0QjtBQUMxQjBJLGVBQUssR0FBRyxLQUFSO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU92SyxLQUFLLENBQUNxSyxNQUFiOztBQUNBLGVBQUssSUFBSTdKLENBQVQsSUFBY1IsS0FBZCxFQUFxQjtBQUNuQixnQkFBSUEsS0FBSyxDQUFDd0ssY0FBTixDQUFxQmhLLENBQXJCLENBQUosRUFBNkI7QUFDM0JmLHFCQUFPLENBQUNHLE9BQVIsQ0FBZ0JpQyxJQUFoQixFQUFzQnJCLENBQXRCLElBQTJCUixLQUFLLENBQUNRLENBQUQsQ0FBaEM7QUFDRDtBQUNGOztBQUNEZixpQkFBTyxDQUFDRyxPQUFSLENBQWdCaUMsSUFBaEIsRUFBc0JvSSxJQUF0QixHQUE2QnhLLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmlDLElBQWhCLEVBQXNCb0ksSUFBdEIsSUFBOEIsRUFBM0Q7QUFDRDtBQUNGOztBQUVELGFBQU94SyxPQUFQO0FBQ0QsS0FuQkQsRUFtQkcwQyxJQW5CSCxXQW9CUyxVQUFDM0IsQ0FBRDtBQUFBLGFBQU8sTUFBSSxDQUFDOUcsSUFBTCxDQUFVLHFCQUFWLEVBQWlDLG9CQUFqQyxDQUFQO0FBQUEsS0FwQlQsRUFxQkdKLElBckJILENBcUJRLFlBQU07QUFBRSxVQUFJLENBQUNpUixLQUFMLEVBQVk7QUFBRSxjQUFJLENBQUNILHVCQUFMLENBQTZCcEssS0FBN0IsRUFBb0NBLEtBQUssQ0FBQ3FLLE1BQU4sR0FBZSxPQUFmLEdBQXlCLE1BQTdEO0FBQXVFO0FBQUMsS0FyQnRHLEVBc0JHL1EsSUF0QkgsQ0FzQlE7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLHFDQUFWLEVBQWlEc0csS0FBakQsQ0FBTjtBQUFBLEtBdEJSO0FBdUJELEdBMVdTO0FBMldWeUssZUEzV1UseUJBMldJVixLQTNXSixFQTJXVzVILElBM1dYLEVBMldpQjtBQUFBOztBQUN6QixRQUFJLENBQUM0SCxLQUFLLENBQUNsTixNQUFYLEVBQW1CO0FBRW5Cc0YsUUFBSSxHQUFHLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLE1BQXpDO0FBRUEsUUFBSTZILFdBQVcsR0FBRyxFQUFsQjtBQUVBLFdBQU81USxxQkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQXFELE9BQU8sRUFBSTtBQUMzQyxVQUFJb0MsSUFBSixFQUFVL0MsR0FBVixFQUFlbUIsYUFBZjs7QUFFQSxhQUFPOEosS0FBSyxDQUFDbE4sTUFBYixFQUFxQjtBQUNuQmdGLFlBQUksR0FBR2tJLEtBQUssQ0FBQ1csR0FBTixFQUFQOztBQUNBLFlBQUlqTCxPQUFPLENBQUNHLE9BQVIsSUFBbUJrRCxNQUFNLENBQUNDLElBQVAsQ0FBWXRELE9BQU8sQ0FBQ0csT0FBcEIsRUFBNkJqRCxPQUE3QixDQUFxQ2tGLElBQXJDLE1BQStDLENBQUMsQ0FBdkUsRUFBMEU7QUFDeEUvQyxhQUFHLEdBQUdXLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmlDLElBQWhCLEVBQXNCL0MsR0FBNUI7QUFDQW1CLHVCQUFhLEdBQUdSLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmlDLElBQWhCLEVBQXNCNUIsYUFBdEM7QUFFQSxpQkFBT1IsT0FBTyxDQUFDRyxPQUFSLENBQWdCaUMsSUFBaEIsQ0FBUDs7QUFDQSxnQkFBSSxDQUFDbkksSUFBTCxDQUFVLGVBQVYsRUFBMkJtSSxJQUEzQixFQUFpQy9DLEdBQWpDLEVBQXNDbUIsYUFBdEM7QUFDRCxTQU5ELE1BTU87QUFDTCtKLHFCQUFXLENBQUN4TixJQUFaLENBQWlCcUYsSUFBakI7QUFDRDtBQUNGOztBQUNELGFBQU9wQyxPQUFQO0FBQ0QsS0FoQk0sRUFnQkowQyxJQWhCSSxXQWlCRTtBQUFBLGFBQU0sTUFBSSxDQUFDekksSUFBTCxDQUFVLHVCQUFWLEVBQW1DLGlCQUFuQyxDQUFOO0FBQUEsS0FqQkYsRUFrQkpKLElBbEJJLENBa0JDLFlBQU07QUFBRSxVQUFJNkksSUFBSSxLQUFLLE1BQVQsSUFBbUI2SCxXQUFXLENBQUNuTixNQUFuQyxFQUEyQztBQUFFLGNBQUksQ0FBQzROLGFBQUwsQ0FBbUJULFdBQW5CLEVBQWdDLE9BQWhDO0FBQTJDO0FBQUMsS0FsQmxHLEVBbUJKMVEsSUFuQkksQ0FtQkM7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGlCQUFWLENBQU47QUFBQSxLQW5CRCxDQUFQO0FBb0JELEdBdFlTO0FBdVlWaVIsMEJBdllVLG9DQXVZZUMsU0F2WWYsRUF1WTBCQyxhQXZZMUIsRUF1WXlDQyxTQXZZekMsRUF1WW9EM0ksSUF2WXBELEVBdVkwRDtBQUNsRS9JLHlCQUFTQyxHQUFULENBQWEsVUFBYixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQTJGLFFBQVEsRUFBSTtBQUN4QyxVQUFJQSxRQUFRLENBQUNRLE9BQVQsQ0FBaUJxSixVQUFqQixLQUFnQyxJQUFwQyxFQUEwQztBQUN4QzFQLDZCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUQsT0FBTyxFQUFJO0FBQ3BDLGNBQU1zTCxZQUFZLEdBQUd0TCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JnTCxTQUFoQixFQUEyQlgsSUFBM0IsSUFBbUMsRUFBeEQ7QUFDQSxjQUFNZSxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLGNBQU1DLGVBQWUsR0FBRyxFQUF4QjtBQUVBeEwsaUJBQU8sQ0FBQ0csT0FBUixDQUFnQmdMLFNBQWhCLEVBQTJCMUUsS0FBM0IsR0FBbUMyRSxhQUFuQztBQUVBQSx1QkFBYSxDQUFDSyxPQUFkLENBQXNCLFVBQUFDLElBQUk7QUFBQSxtQkFBSUgsZ0JBQWdCLENBQUN4TyxJQUFqQixDQUFzQjJPLElBQUksQ0FBQ3ZQLEVBQTNCLENBQUo7QUFBQSxXQUExQjtBQUVBLGNBQUlvSCxDQUFDLEdBQUcrSCxZQUFZLENBQUNsTyxNQUFyQjtBQUFBLGNBQTZCakIsRUFBN0I7O0FBRUEsaUJBQU9vSCxDQUFDLEVBQVIsRUFBWTtBQUNWcEgsY0FBRSxHQUFHbVAsWUFBWSxDQUFDL0gsQ0FBRCxDQUFaLENBQWdCcEgsRUFBckI7O0FBQ0EsZ0JBQUlvUCxnQkFBZ0IsQ0FBQzFPLFFBQWpCLENBQTBCVixFQUExQixDQUFKLEVBQW1DO0FBQ2pDbVAsMEJBQVksQ0FBQ3JPLE1BQWIsQ0FBb0JzRyxDQUFwQixFQUF1QixDQUF2QjtBQUNELGFBRkQsTUFFTztBQUNMaUksNkJBQWUsQ0FBQ3pPLElBQWhCLENBQXFCWixFQUFyQjtBQUNEO0FBQ0Y7O0FBRURrUCxtQkFBUyxDQUFDSSxPQUFWLENBQWtCLFVBQUFDLElBQUksRUFBSTtBQUN4QixnQkFBSSxDQUFDRixlQUFlLENBQUMzTyxRQUFoQixDQUF5QjZPLElBQUksQ0FBQ3ZQLEVBQTlCLENBQUwsRUFBd0NtUCxZQUFZLENBQUN2TyxJQUFiLENBQWtCMk8sSUFBbEI7QUFDekMsV0FGRDtBQUlBMUwsaUJBQU8sQ0FBQ0csT0FBUixDQUFnQmdMLFNBQWhCLEVBQTJCWCxJQUEzQixHQUFrQ2MsWUFBbEM7QUFFQSxpQkFBT3RMLE9BQVA7QUFDRCxTQTNCRCxFQTJCRzBDLElBM0JIO0FBNEJEO0FBQ0YsS0EvQkQ7QUFnQ0QsR0F4YVM7QUF5YVZpSixXQXphVSxxQkF5YUF2SixJQXphQSxFQXlhTTBFLEdBemFOLEVBeWFXO0FBQUE7O0FBQ25CLFFBQU04RSxNQUFNLEdBQUc5RSxHQUFHLEdBQUcsT0FBSCxHQUFhLE1BQS9CO0FBQ0EsUUFBTStFLE1BQU0sR0FBRy9FLEdBQUcsR0FBRyxNQUFILEdBQVksT0FBOUI7QUFFQSxRQUFJdkcsS0FBSjs7QUFFQTVHLHlCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUQsT0FBTyxFQUFJO0FBQ3BDTyxXQUFLLEdBQUcsa0JBQU1QLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmlDLElBQWhCLENBQU4sQ0FBUjtBQUNBN0IsV0FBSyxDQUFDcUssTUFBTixHQUFlOUQsR0FBZjtBQUNBLGFBQU85RyxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JpQyxJQUFoQixDQUFQO0FBQ0EsYUFBT3BDLE9BQVA7QUFDRCxLQUxELEVBS0c0TCxNQUxILEVBT0cvUixJQVBILENBT1EsWUFBTTtBQUNWRiwyQkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQXFELE9BQU8sRUFBSTtBQUNwQ0EsZUFBTyxDQUFDRyxPQUFSLENBQWdCaUMsSUFBaEIsSUFBd0I3QixLQUF4QjtBQUNBLGVBQU9QLE9BQVA7QUFDRCxPQUhELEVBR0c2TCxNQUhILEVBS0NoUyxJQUxELENBS007QUFBQSxlQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGtDQUFWLEVBQThDc0csS0FBOUMsQ0FBTjtBQUFBLE9BTE4sV0FNTztBQUFBLGVBQU0sTUFBSSxDQUFDdEcsSUFBTCxDQUFVLG1CQUFWLEVBQStCbUksSUFBL0IsQ0FBTjtBQUFBLE9BTlA7QUFPRCxLQWZIO0FBZ0JELEdBL2JTO0FBZ2NWMEosWUFoY1Usc0JBZ2NDeEIsS0FoY0QsRUFnY1F5QixHQWhjUixFQWdjYTtBQUFBOztBQUNyQnBTLHlCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUQsT0FBTyxFQUFJO0FBQ3BDLFVBQU1HLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUF4QjtBQUNBbUssV0FBSyxDQUFDdkQsSUFBTixDQUFXMEUsT0FBWCxDQUFtQixVQUFBckosSUFBSTtBQUFBLGVBQUksTUFBSSxDQUFDNEosYUFBTCxDQUFtQjdMLE9BQU8sQ0FBQ2lDLElBQUQsQ0FBMUIsRUFBa0MySixHQUFsQyxDQUFKO0FBQUEsT0FBdkI7QUFDQSxhQUFPL0wsT0FBUDtBQUNELEtBSkQsRUFJRyxNQUpILEVBS0duRyxJQUxILENBS1EsWUFBTTtBQUNWLGFBQU9GLHFCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUQsT0FBTyxFQUFJO0FBQzNDLFlBQU1HLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUF4QjtBQUNBbUssYUFBSyxDQUFDMkIsS0FBTixDQUFZUixPQUFaLENBQW9CLFVBQUFySixJQUFJO0FBQUEsaUJBQUksTUFBSSxDQUFDNEosYUFBTCxDQUFtQjdMLE9BQU8sQ0FBQ2lDLElBQUQsQ0FBMUIsRUFBa0MySixHQUFsQyxDQUFKO0FBQUEsU0FBeEI7QUFDQSxlQUFPL0wsT0FBUDtBQUNELE9BSk0sRUFJSixPQUpJLENBQVA7QUFLRCxLQVhIO0FBWUQsR0E3Y1M7QUE4Y1ZrTSxXQTljVSxxQkE4Y0FILEdBOWNBLEVBOGNLeEwsS0E5Y0wsRUE4Y1k7QUFBQTs7QUFDcEIsUUFBTW1DLElBQUksR0FBR25DLEtBQUssQ0FBQ3FLLE1BQU4sR0FBZSxNQUFmLEdBQXdCLE9BQXJDO0FBQ0EsUUFBTXhJLElBQUksR0FBRzdCLEtBQUssQ0FBQzZCLElBQW5COztBQUVBekkseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxRCxPQUFPLEVBQUk7QUFDcEMsVUFBTW1NLFdBQVcsR0FBR25NLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmlDLElBQWhCLENBQXBCO0FBQ0EsVUFBTWdLLEVBQUUsR0FBRyxJQUFJQyxNQUFKLENBQVcsTUFBSU4sR0FBSixHQUFRLEtBQVIsR0FBY0EsR0FBZCxHQUFrQixTQUFsQixHQUE0QkEsR0FBNUIsR0FBZ0MsU0FBaEMsR0FBMENBLEdBQTFDLEdBQThDLEdBQXpELENBQVg7O0FBQ0EsVUFBSUksV0FBVyxDQUFDSixHQUFoQixFQUFxQjtBQUNuQkksbUJBQVcsQ0FBQ0osR0FBWixHQUFrQkksV0FBVyxDQUFDSixHQUFaLENBQ2ZqRSxPQURlLENBQ1BzRSxFQURPLEVBQ0gsR0FERyxFQUVmdEUsT0FGZSxDQUVQLFNBRk8sRUFFSSxFQUZKLEVBR2ZBLE9BSGUsQ0FHUCxRQUhPLEVBR0csR0FISCxDQUFsQjtBQUlEOztBQUNELGFBQU85SCxPQUFQO0FBQ0QsS0FWRCxFQVVHMEMsSUFWSCxFQVdHN0ksSUFYSCxDQVdRLFVBQUFtRyxPQUFPO0FBQUEsYUFBSSxPQUFJLENBQUMvRixJQUFMLENBQVUsa0NBQVYsRUFBOEMrRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JpQyxJQUFoQixDQUE5QyxDQUFKO0FBQUEsS0FYZjtBQVlELEdBOWRTO0FBK2RWa0ssUUEvZFUsa0JBK2RIUCxHQS9kRyxFQStkRXhMLEtBL2RGLEVBK2RTO0FBQUE7O0FBQ2pCLFFBQU1tQyxJQUFJLEdBQUduQyxLQUFLLENBQUNxSyxNQUFOLEdBQWUsTUFBZixHQUF3QixPQUFyQztBQUNBLFFBQU14SSxJQUFJLEdBQUc3QixLQUFLLENBQUM2QixJQUFuQjs7QUFDQXpJLHlCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBcUQsT0FBTyxFQUFJO0FBQ3BDLGFBQUksQ0FBQ2dNLGFBQUwsQ0FBbUJoTSxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JpQyxJQUFoQixDQUFuQixFQUEwQzJKLEdBQTFDOztBQUNBLGFBQU8vTCxPQUFQO0FBQ0QsS0FIRCxFQUdHMEMsSUFISDtBQUlELEdBdGVTO0FBdWVWc0osZUF2ZVUseUJBdWVJekwsS0F2ZUosRUF1ZVd3TCxHQXZlWCxFQXVlZ0I7QUFDeEIsUUFBSSxDQUFDQSxHQUFMLEVBQVV4TCxLQUFLLENBQUN3TCxHQUFOLEdBQVksRUFBWixDQUFWLEtBQ0ssSUFBSSxDQUFDeEwsS0FBSyxDQUFDd0wsR0FBWCxFQUFnQnhMLEtBQUssQ0FBQ3dMLEdBQU4sR0FBWUEsR0FBWixDQUFoQixLQUNBO0FBQ0gsVUFBTUssRUFBRSxHQUFHLElBQUlDLE1BQUosQ0FBVyxNQUFJTixHQUFKLEdBQVEsS0FBUixHQUFjQSxHQUFkLEdBQWtCLFNBQWxCLEdBQTRCQSxHQUE1QixHQUFnQyxTQUFoQyxHQUEwQ0EsR0FBMUMsR0FBOEMsR0FBekQsRUFBOEQsR0FBOUQsQ0FBWDs7QUFDQSxVQUFJeEwsS0FBSyxDQUFDd0wsR0FBTixDQUFVUSxNQUFWLENBQWlCSCxFQUFqQixNQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQy9CN0wsYUFBSyxDQUFDd0wsR0FBTixJQUFhLE1BQU1BLEdBQW5CO0FBQ0Q7QUFDRjtBQUNELFNBQUs5UixJQUFMLENBQVUsa0NBQVYsRUFBOENzRyxLQUE5QztBQUNBLFdBQU9BLEtBQVA7QUFDRCxHQWxmUztBQW9mVjtBQUNBaU0saUJBcmZVLDJCQXFmTW5OLEdBcmZOLEVBcWZXb04sS0FyZlgsRUFxZmtCO0FBQzFCOVMseUJBQVNnRCxNQUFULENBQWdCLFdBQWhCLEVBQTZCLFVBQUErUCxTQUFTLEVBQUk7QUFDeENBLGVBQVMsQ0FBQ3JOLEdBQUQsQ0FBVCxHQUFpQm9OLEtBQWpCO0FBQ0EsYUFBT0MsU0FBUDtBQUNELEtBSEQ7QUFJRCxHQTFmUztBQTRmVkMsK0JBNWZVLDJDQTRmc0I7QUFDOUJ0VCxXQUFPLENBQUN1VCxPQUFSLENBQWdCQyxTQUFoQixDQUEwQnBULFdBQTFCLENBQXNDLEtBQUtxVCxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLQyxnQkFBdEIsQ0FBdEM7QUFDRCxHQTlmUztBQStmVkEsa0JBL2ZVLDRCQStmT0MsV0EvZlAsRUErZm9CO0FBQzVCLFFBQUlBLFdBQVcsQ0FBQ3hOLFFBQWhCLEVBQTBCLEtBQUt2RixJQUFMLENBQVUsa0JBQVY7QUFDMUIsUUFBSStTLFdBQVcsQ0FBQ2hOLE9BQWhCLEVBQXlCLEtBQUsvRixJQUFMLENBQVUsaUJBQVY7QUFDekIsUUFBSStTLFdBQVcsQ0FBQ04sU0FBaEIsRUFBMkIsS0FBS3pTLElBQUwsQ0FBVSxtQkFBVjtBQUM1QjtBQW5nQlMsQ0FBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDRGUsWUFBVztBQUN4QixTQUFPLElBQUlwQixjQUFKLENBQVk7QUFDakJDLFVBQU0sRUFBRTtBQUNOQyxTQUFHLEVBQUU7QUFDSCx5QkFBaUIsd0JBRGQ7QUFFSDtBQUNBLCtCQUF1QixlQUhwQjtBQUlILGdDQUF3QixlQUpyQjtBQUtILCtCQUF1QixlQUxwQjtBQU1ILHVCQUFlLFlBTlo7QUFPSCx3QkFBZ0I7QUFQYjtBQURDLEtBRFM7QUFZakJrVSxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFLDhDQURGO0FBRUoxTixjQUFRLEVBQUUsa0RBRk47QUFHSlEsYUFBTyxFQUFFLGlEQUhMO0FBSUptTixVQUFJLEVBQUUsNkNBSkY7QUFLSkMsVUFBSSxFQUFFLGdEQUxGO0FBTUpDLGFBQU8sRUFBRSxpREFOTDtBQU9KQyxVQUFJLEVBQUUsOENBUEY7QUFRSixnQkFBUSxnREFSSjtBQVNKdkcsVUFBSSxFQUFFO0FBVEYsS0FaVztBQXVCakJ3RyxvQkFBZ0IsRUFBRTtBQUNoQkMsaUJBQVcsRUFBRSxJQURHO0FBRWhCQyxlQUFTLEVBQUU7QUFGSyxLQXZCRDtBQTRCakJ0VSxZQTVCaUIsc0JBNEJOO0FBQUE7O0FBQ1RRLDJCQUFTQyxHQUFULENBQWEsTUFBYixFQUFxQkMsSUFBckIsQ0FBMEIsVUFBQU8sSUFBSTtBQUFBLGVBQUksS0FBSSxDQUFDc1Qsc0JBQUwsQ0FBNEJ0VCxJQUE1QixDQUFKO0FBQUEsT0FBOUI7QUFDRCxLQTlCZ0I7QUFnQ2pCdVQsdUJBaENpQixpQ0FnQ0s7QUFDcEIsVUFBSSxDQUFDLEtBQUtKLGdCQUFMLENBQXNCQyxXQUEzQixFQUF3QztBQUN0QyxZQUFNQSxXQUFXLEdBQUcsS0FBS0QsZ0JBQUwsQ0FBc0JDLFdBQXRCLEdBQW9DLEtBQUtBLFdBQUwsQ0FBaUJJLElBQWpCLENBQXNCLElBQXRCLENBQXhEO0FBQ0F2VSxlQUFPLENBQUNvSCxJQUFSLENBQWErTSxXQUFiLENBQXlCL1QsV0FBekIsQ0FBcUMrVCxXQUFyQztBQUNEOztBQUVELFVBQUksQ0FBQyxLQUFLRCxnQkFBTCxDQUFzQkUsU0FBM0IsRUFBc0M7QUFDcEMsWUFBTUEsU0FBUyxHQUFHLEtBQUtGLGdCQUFMLENBQXNCRSxTQUF0QixHQUFrQyxLQUFLQSxTQUFMLENBQWVHLElBQWYsQ0FBb0IsSUFBcEIsQ0FBcEQ7QUFDQXZVLGVBQU8sQ0FBQ29ILElBQVIsQ0FBYWdOLFNBQWIsQ0FBdUJoVSxXQUF2QixDQUFtQ2dVLFNBQW5DLEVBQThDO0FBQUVJLG9CQUFVLEVBQUUsQ0FBQyxRQUFEO0FBQWQsU0FBOUM7QUFDRDtBQUNGLEtBMUNnQjtBQTJDakJDLDBCQTNDaUIsb0NBMkNRO0FBQUE7O0FBQ3ZCLE9BQUMsYUFBRCxFQUFnQixXQUFoQixFQUE2QnJDLE9BQTdCLENBQXFDLFVBQUFzQyxFQUFFLEVBQUk7QUFDekMsWUFBSSxNQUFJLENBQUNSLGdCQUFMLENBQXNCUSxFQUF0QixDQUFKLEVBQStCO0FBQzdCMVUsaUJBQU8sQ0FBQ29ILElBQVIsQ0FBYXNOLEVBQWIsRUFBaUJ6UyxjQUFqQixDQUFnQyxNQUFJLENBQUNpUyxnQkFBTCxDQUFzQlEsRUFBdEIsQ0FBaEM7QUFDRDtBQUNGLE9BSkQ7QUFLQSxXQUFLUixnQkFBTCxHQUF3QixFQUF4QjtBQUNELEtBbERnQjtBQW1EakJHLDBCQW5EaUIsa0NBbURNaFQsRUFuRE4sRUFtRFU7QUFDekIsVUFBSUEsRUFBSixFQUFRLEtBQUtpVCxtQkFBTCxHQUFSLEtBQ0ssS0FBS0csc0JBQUw7QUFDTixLQXREZ0I7QUF1RGpCTixlQXZEaUIsdUJBdURML1EsR0F2REssRUF1REE7QUFDZixXQUFLeEMsSUFBTCxDQUFVLGVBQVYsRUFBMkJ3QyxHQUFHLENBQUN1QyxLQUEvQixFQUF1Q3ZDLEdBQUcsQ0FBQzRDLEdBQUosSUFBVyxFQUFsRDtBQUNELEtBekRnQjtBQTBEakJvTyxhQTFEaUIscUJBMERQek8sS0ExRE8sRUEwREFHLE9BMURBLEVBMERTO0FBQ3hCLFVBQUlBLE9BQU8sQ0FBQ0UsR0FBWixFQUFpQjtBQUNmLGFBQUtwRixJQUFMLENBQVUsYUFBVixFQUF5QitFLEtBQXpCLEVBQWdDRyxPQUFoQztBQUNELE9BRkQsTUFHSyxJQUFJQSxPQUFPLENBQUNDLE1BQVIsSUFBa0JELE9BQU8sQ0FBQ0MsTUFBUixLQUFtQixVQUF6QyxFQUFxRDtBQUN4RCxhQUFLbkYsSUFBTCxDQUFVLGVBQVYsRUFBMkIrRSxLQUEzQjtBQUNEO0FBQ0YsS0FqRWdCO0FBbUVqQnZCLFFBbkVpQixnQkFtRVp3UCxJQW5FWSxFQW1FTjNDLEtBbkVNLEVBbUVDO0FBQ2hCMkMsVUFBSSxHQUFHLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkIsQ0FBQ0EsSUFBRCxDQUEzQixHQUFvQ0EsSUFBM0M7QUFDQTNDLFdBQUssR0FBRyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCLENBQUNBLEtBQUQsQ0FBNUIsR0FBc0NBLEtBQTlDO0FBQ0EsVUFBSS9HLENBQUMsR0FBRzBKLElBQUksQ0FBQzdQLE1BQWI7QUFBQSxVQUNJNFEsZUFBZSxHQUFHLEtBRHRCO0FBQUEsVUFFSTNPLEdBRko7O0FBR0EsYUFBT2tFLENBQUMsRUFBUixFQUFZO0FBQ1YsU0FBQyxVQUFTMEssSUFBVCxFQUFlMUssQ0FBZixFQUFrQjtBQUNqQmxFLGFBQUcsR0FBRzROLElBQUksQ0FBQzFKLENBQUQsQ0FBVjtBQUNBbEssaUJBQU8sQ0FBQ29ILElBQVIsQ0FBYTdELE1BQWIsQ0FBb0I7QUFBRXlDLGVBQUcsRUFBRTROLElBQUksQ0FBQzFKLENBQUQ7QUFBWCxXQUFwQixXQUNTLFlBQU07QUFDWCxnQkFBSSxDQUFDeUssZUFBTCxFQUFzQkMsSUFBSSxDQUFDaFUsSUFBTCxDQUFVLGlCQUFWO0FBQ3RCK1QsMkJBQWUsR0FBRyxJQUFsQjtBQUNELFdBSkgsRUFLR25VLElBTEgsQ0FLUSxZQUFNO0FBQ1YsZ0JBQUl5USxLQUFKLEVBQVcyRCxJQUFJLENBQUNoVSxJQUFMLENBQVUsY0FBVixFQUEwQjtBQUFFb0YsaUJBQUcsRUFBRUEsR0FBUDtBQUFZK0Msa0JBQUksRUFBRWtJLEtBQUssQ0FBQy9HLENBQUQ7QUFBdkIsYUFBMUI7QUFDWixXQVBIO0FBUUQsU0FWRCxFQVVHLElBVkgsRUFVU0EsQ0FWVDtBQVdEO0FBQ0YsS0F0RmdCO0FBdUZqQjJLLGlCQXZGaUIseUJBdUZIL1IsRUF2RkcsRUF1RkM7QUFDaEIsV0FBS3NCLElBQUwsQ0FBVSxLQUFLd1AsSUFBTCxDQUFVOVEsRUFBVixDQUFWO0FBQ0QsS0F6RmdCO0FBMEZqQmdTLGdCQTFGaUIsd0JBMEZKbFYsT0ExRkksRUEwRktDLFVBMUZMLEVBMEZpQjtBQUNoQyxVQUFJQSxVQUFVLElBQUlBLFVBQVUsS0FBSyxTQUE3QixJQUEwQ0EsVUFBVSxLQUFLLFFBQTdELEVBQXVFLEtBQUtnVixhQUFMLENBQW1CLE1BQW5CO0FBQ3hFLEtBNUZnQjtBQTZGakJFLGNBN0ZpQixzQkE2Rk5DLElBN0ZNLEVBNkZBO0FBQUE7O0FBQ2YxVSwyQkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUEyRixRQUFRLEVBQUk7QUFDeEMsWUFBSThPLE1BQU0sR0FBRzlPLFFBQVEsQ0FBQzZFLElBQVQsQ0FBY3VFLFlBQTNCO0FBQUEsWUFBeUN2SixHQUF6QztBQUNBLFlBQUlpUCxNQUFKLEVBQVlqUCxHQUFHLEdBQUcsYUFBYWlQLE1BQU0sQ0FBQyxDQUFELENBQW5CLEdBQXlCRCxJQUF6QixHQUFnQ0MsTUFBTSxDQUFDLENBQUQsQ0FBNUMsQ0FBWixLQUNLalAsR0FBRyxHQUFHLGFBQWFoRyxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsS0FBeEIsQ0FBYixHQUE4QyxzQkFBOUMsR0FBdUUrUixJQUE3RTs7QUFDTCxjQUFJLENBQUM1USxJQUFMLENBQVU0QixHQUFWO0FBQ0QsT0FMRDtBQU1EO0FBcEdnQixHQUFaLENBQVA7QUFzR0QsQzs7QUExR0Q7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBLElBQUl4RyxjQUFKLENBQVk7QUFDVkMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILG9CQUFjLHFCQURYO0FBRUgscUJBQWUscUJBRlo7QUFHSCx1QkFBaUIscUJBSGQ7QUFJSCx3QkFBa0I7QUFKZjtBQURDLEdBREU7QUFVVmtPLGdCQVZVLDBCQVVLekgsUUFWTCxFQVVlO0FBQ3ZCLFFBQUk7QUFDRixVQUFNK08sZUFBZSxHQUFHQyw0QkFBaUJoUCxRQUF6Qzs7QUFFQSxVQUFJLENBQUNBLFFBQVEsQ0FBQ25DLFNBQWQsRUFBeUI7QUFDdkJtQyxnQkFBUSxHQUFHK08sZUFBWDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1sUixTQUFTLEdBQUdtQyxRQUFRLENBQUNuQyxTQUEzQjtBQUNBLFlBQU1rSyxPQUFPLEdBQUcvSCxRQUFRLENBQUMrSCxPQUF6QjtBQUNBLFlBQU12SCxPQUFPLEdBQUdSLFFBQVEsQ0FBQ1EsT0FBekI7QUFDQSxZQUFNcUUsSUFBSSxHQUFHN0UsUUFBUSxDQUFDNkUsSUFBdEI7QUFDQSxZQUFNb0ssU0FBUyxHQUFHLG9EQUFvRDVHLEtBQXBELENBQTBELEdBQTFELENBQWxCOztBQUVBLFlBQUksQ0FBQ3hLLFNBQVMsQ0FBQ3hCLENBQWYsRUFBa0I7QUFDaEJ3QixtQkFBUyxDQUFDeEIsQ0FBVixHQUFjMFMsZUFBZSxDQUFDbFIsU0FBaEIsQ0FBMEJ4QixDQUF4QztBQUNBd0ksY0FBSSxDQUFDcUssUUFBTCxHQUFnQkgsZUFBZSxDQUFDbEssSUFBaEIsQ0FBcUJxSyxRQUFyQztBQUNBckssY0FBSSxDQUFDc0ssV0FBTCxHQUFtQkosZUFBZSxDQUFDbEssSUFBaEIsQ0FBcUJzSyxXQUF4QztBQUNEOztBQUNELFlBQUksQ0FBQ3RSLFNBQVMsQ0FBQ3VSLE9BQWYsRUFBd0I7QUFDdEJ2UixtQkFBUyxDQUFDdVIsT0FBVixHQUFvQkwsZUFBZSxDQUFDbFIsU0FBaEIsQ0FBMEJ1UixPQUE5QztBQUNBdlIsbUJBQVMsQ0FBQ3dSLFNBQVYsR0FBc0JOLGVBQWUsQ0FBQ2xSLFNBQWhCLENBQTBCd1IsU0FBaEQ7QUFDRDs7QUFDRCxZQUFJLENBQUN4UixTQUFTLENBQUMxQixDQUFWLENBQVksQ0FBWixDQUFMLEVBQXFCO0FBQ25CMEIsbUJBQVMsQ0FBQzFCLENBQVYsQ0FBWSxDQUFaLElBQWlCNFMsZUFBZSxDQUFDbFIsU0FBaEIsQ0FBMEIxQixDQUExQixDQUE0QixDQUE1QixDQUFqQjtBQUNEOztBQUNELFlBQUksQ0FBQzBCLFNBQVMsQ0FBQ3ZCLEVBQWYsRUFBbUI7QUFDakJ1QixtQkFBUyxDQUFDdkIsRUFBVixHQUFleVMsZUFBZSxDQUFDbFIsU0FBaEIsQ0FBMEJ2QixFQUF6QztBQUNEOztBQUNELFlBQUksQ0FBQ3VCLFNBQVMsQ0FBQ3lSLEVBQWYsRUFBbUI7QUFDakJ6UixtQkFBUyxDQUFDeVIsRUFBVixHQUFlUCxlQUFlLENBQUNsUixTQUFoQixDQUEwQnlSLEVBQXpDO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDdkgsT0FBTyxDQUFDL0wsQ0FBUixDQUFVOEwsS0FBZixFQUFzQjtBQUNwQixjQUFJQSxLQUFKOztBQUNBLGVBQUssSUFBSTlMLENBQVQsSUFBYytMLE9BQWQsRUFBdUI7QUFDckJELGlCQUFLLEdBQUdDLE9BQU8sQ0FBQy9MLENBQUQsQ0FBZjtBQUNBK0wsbUJBQU8sQ0FBQy9MLENBQUQsQ0FBUCxHQUFhO0FBQUU4TCxtQkFBSyxFQUFMQTtBQUFGLGFBQWI7QUFDRDtBQUNGOztBQUVELFlBQUksQ0FBQ3RILE9BQU8sQ0FBQ3VJLE1BQWIsRUFBcUI7QUFDbkJ2SSxpQkFBTyxDQUFDdUksTUFBUixHQUFpQmdHLGVBQWUsQ0FBQ3ZPLE9BQWhCLENBQXdCdUksTUFBekM7QUFDRDs7QUFDRCxZQUFJLENBQUN2SSxPQUFPLENBQUN5SSxJQUFiLEVBQW1CO0FBQ2pCekksaUJBQU8sQ0FBQ3lJLElBQVIsR0FBZThGLGVBQWUsQ0FBQ3ZPLE9BQWhCLENBQXdCeUksSUFBdkM7QUFDRDs7QUFDRCxZQUFJLE9BQU96SSxPQUFPLENBQUMrQixVQUFmLEtBQThCLFNBQWxDLEVBQTZDO0FBQzNDL0IsaUJBQU8sQ0FBQytCLFVBQVIsR0FBcUJ3TSxlQUFlLENBQUN2TyxPQUFoQixDQUF3QitCLFVBQTdDO0FBQ0Q7O0FBQ0QsWUFBSSxPQUFPL0IsT0FBTyxDQUFDbUosS0FBZixLQUF5QixTQUE3QixFQUF3QztBQUN0Q25KLGlCQUFPLENBQUNtSixLQUFSLEdBQWdCb0YsZUFBZSxDQUFDdk8sT0FBaEIsQ0FBd0JtSixLQUF4QztBQUNEOztBQUNELFlBQUksT0FBT25KLE9BQU8sQ0FBQzhGLFVBQWYsS0FBOEIsU0FBbEMsRUFBNkM7QUFDM0M5RixpQkFBTyxDQUFDOEYsVUFBUixHQUFxQnlJLGVBQWUsQ0FBQ3ZPLE9BQWhCLENBQXdCOEYsVUFBN0M7QUFDRDs7QUFDRCxZQUFJLE9BQU85RixPQUFPLENBQUNxSixVQUFmLEtBQThCLFNBQWxDLEVBQTZDO0FBQzNDckosaUJBQU8sQ0FBQ3FKLFVBQVIsR0FBcUJrRixlQUFlLENBQUN2TyxPQUFoQixDQUF3QnFKLFVBQTdDO0FBQ0Q7O0FBRURvRixpQkFBUyxDQUFDaEQsT0FBVixDQUFrQixVQUFBc0QsUUFBUSxFQUFJO0FBQzVCLGNBQUksT0FBTzFLLElBQUksQ0FBQzBLLFFBQUQsQ0FBWCxLQUEwQixTQUE5QixFQUF5QztBQUN2QzFLLGdCQUFJLENBQUMwSyxRQUFELENBQUosR0FBaUJSLGVBQWUsQ0FBQ2xLLElBQWhCLENBQXFCMEssUUFBckIsQ0FBakI7QUFDRDtBQUNGLFNBSkQ7O0FBS0EsWUFBSSxDQUFDMUssSUFBSSxDQUFDMkssT0FBVixFQUFtQjtBQUNqQjNLLGNBQUksQ0FBQzJLLE9BQUwsR0FBZVQsZUFBZSxDQUFDbEssSUFBaEIsQ0FBcUIySyxPQUFwQztBQUNEOztBQUNELFlBQUksT0FBTzNLLElBQUksQ0FBQzRLLFVBQVosS0FBMkIsU0FBL0IsRUFBMEM7QUFDeEM1SyxjQUFJLENBQUM0SyxVQUFMLEdBQWtCVixlQUFlLENBQUNsSyxJQUFoQixDQUFxQjRLLFVBQXZDO0FBQ0Q7O0FBQ0QsWUFBSSxPQUFPNUssSUFBSSxDQUFDNkssYUFBWixLQUE4QixTQUFsQyxFQUE2QztBQUMzQzdLLGNBQUksQ0FBQzZLLGFBQUwsR0FBcUJYLGVBQWUsQ0FBQ2xLLElBQWhCLENBQXFCNkssYUFBMUM7QUFDRDs7QUFDRCxZQUFJLENBQUM3SyxJQUFJLENBQUM2RCxVQUFWLEVBQXNCO0FBQ3BCN0QsY0FBSSxDQUFDNkQsVUFBTCxHQUFrQnFHLGVBQWUsQ0FBQ2xLLElBQWhCLENBQXFCNkQsVUFBdkM7QUFDRDs7QUFDRCxZQUFJLE9BQU83RCxJQUFJLENBQUM4SyxRQUFaLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3RDOUssY0FBSSxDQUFDOEssUUFBTCxHQUFnQlosZUFBZSxDQUFDbEssSUFBaEIsQ0FBcUI4SyxRQUFyQztBQUNEOztBQUVELFlBQUksQ0FBQzNQLFFBQVEsQ0FBQzFELEVBQWQsRUFBa0I7QUFDaEIwRCxrQkFBUSxDQUFDMUQsRUFBVCxHQUFjeVMsZUFBZSxDQUFDelMsRUFBOUI7QUFDRCxTQUZELE1BRU8sSUFBSSxPQUFPMEQsUUFBUSxDQUFDMUQsRUFBVCxDQUFZc1QsTUFBbkIsS0FBOEIsU0FBbEMsRUFBNkM7QUFDbEQ1UCxrQkFBUSxDQUFDMUQsRUFBVCxDQUFZMkUsSUFBWixDQUFpQjJPLE1BQWpCLEdBQTBCYixlQUFlLENBQUN6UyxFQUFoQixDQUFtQjJFLElBQW5CLENBQXdCMk8sTUFBbEQ7QUFDQTVQLGtCQUFRLENBQUMxRCxFQUFULENBQVlzTyxLQUFaLEdBQW9CbUUsZUFBZSxDQUFDelMsRUFBaEIsQ0FBbUJzTyxLQUF2QztBQUNEOztBQUVELFlBQUksT0FBTzVLLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxNQUF0QixLQUFpQyxTQUFyQyxFQUFnRDtBQUM5Q0Ysa0JBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxNQUFmLEdBQXdCNk8sZUFBZSxDQUFDOU8sS0FBaEIsQ0FBc0JDLE1BQTlDO0FBQ0Q7QUFDRjtBQUNGLEtBMUZELENBMEZFLE9BQU1xQixDQUFOLEVBQVM7QUFDVCxXQUFLOUcsSUFBTCxDQUFVLE9BQVYsRUFBbUIsaUNBQW5CO0FBQ0EsYUFBT3VGLFFBQVA7QUFDRDs7QUFDRCxXQUFPQSxRQUFQO0FBQ0QsR0ExR1M7QUEyR1Y2UCxlQTNHVSx5QkEyR0lyUCxPQTNHSixFQTJHYTtBQUNyQixXQUFPQSxPQUFPLENBQUNzUCxLQUFmO0FBRUEsUUFBSW5QLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUF0QjtBQUFBLFFBQ0ltSyxLQUFLLEdBQUdqSCxNQUFNLENBQUNDLElBQVAsQ0FBWW5ELE9BQVosQ0FEWjtBQUFBLFFBRUlvRCxDQUFDLEdBQUcrRyxLQUFLLENBQUNsTixNQUZkO0FBQUEsUUFHSW1ELEtBSEo7QUFLQSxRQUFJLENBQUNnRCxDQUFMLEVBQVEsT0FBT3ZELE9BQVA7O0FBRVIsV0FBT3VELENBQUMsRUFBUixFQUFZO0FBQ1ZoRCxXQUFLLEdBQUcsS0FBS2dQLGVBQUwsQ0FBcUJwUCxPQUFPLENBQUNtSyxLQUFLLENBQUMvRyxDQUFELENBQU4sQ0FBNUIsQ0FBUjtBQUNBaEQsV0FBSyxDQUFDcUssTUFBTixHQUFlLE9BQU9ySyxLQUFLLENBQUNxSyxNQUFiLEtBQXdCLFdBQXhCLEdBQXNDLEtBQXRDLEdBQThDckssS0FBSyxDQUFDcUssTUFBbkU7QUFDRDs7QUFFRCxXQUFPNUssT0FBUDtBQUNELEdBM0hTO0FBNEhWdVAsaUJBNUhVLDJCQTRITWhQLEtBNUhOLEVBNEhhO0FBQ3JCLFFBQU1pUCxJQUFJLEdBQUduVyxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsS0FBeEIsQ0FBYjtBQUNBLFFBQUksT0FBT2lFLEtBQUssQ0FBQzJDLEtBQWIsS0FBdUIsUUFBM0IsRUFBcUMzQyxLQUFLLENBQUMyQyxLQUFOLEdBQWMsSUFBSWpGLElBQUosQ0FBUyxDQUFDc0MsS0FBSyxDQUFDMkMsS0FBTixDQUFZc00sSUFBWixLQUFxQmpQLEtBQUssQ0FBQzJDLEtBQU4sQ0FBWXVNLEVBQWpDLElBQXVDbFAsS0FBSyxDQUFDMkMsS0FBTixDQUFZd00sRUFBbkQsSUFBeURuUCxLQUFLLENBQUMyQyxLQUFoRSxFQUF1RTRFLE9BQXZFLENBQStFLEtBQS9FLEVBQXFGLEdBQXJGLENBQVQsRUFBb0c1SixPQUFwRyxFQUFkO0FBQ3JDLFFBQUksT0FBT3FDLEtBQUssQ0FBQ29QLElBQWIsS0FBc0IsUUFBMUIsRUFBb0NwUCxLQUFLLENBQUNvUCxJQUFOLEdBQWEsSUFBSTFSLElBQUosQ0FBUyxDQUFDc0MsS0FBSyxDQUFDb1AsSUFBTixDQUFXSCxJQUFYLEtBQW9CalAsS0FBSyxDQUFDb1AsSUFBTixDQUFXRixFQUEvQixJQUFxQ2xQLEtBQUssQ0FBQ29QLElBQU4sQ0FBV0QsRUFBaEQsSUFBc0RuUCxLQUFLLENBQUNvUCxJQUE3RCxFQUFtRTdILE9BQW5FLENBQTJFLEtBQTNFLEVBQWlGLEdBQWpGLENBQVQsRUFBZ0c1SixPQUFoRyxFQUFiO0FBQ3BDLFdBQU9xQyxLQUFQO0FBQ0QsR0FqSVM7QUFrSVZxUCxnQkFsSVUsMEJBa0lLQyxVQWxJTCxFQWtJaUJuTixJQWxJakIsRUFrSXVCO0FBQy9CLFdBQU8vSSxxQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFpVyxVQUFVLEVBQUk7QUFFaEQsVUFBSTNQLE9BQU8sR0FBRzBQLFVBQVUsQ0FBQzFQLE9BQXpCO0FBQUEsVUFDSW1LLEtBQUssR0FBR2pILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbkQsT0FBWixDQURaO0FBQUEsVUFFSW9ELENBQUMsR0FBRytHLEtBQUssQ0FBQ2xOLE1BRmQ7QUFBQSxVQUdJbEIsQ0FBQyxHQUFHLENBSFI7QUFBQSxVQUlJNlQsVUFBVSxHQUFHRCxVQUFVLENBQUMzUCxPQUo1QjtBQUFBLFVBS0k2UCxRQUFRLEdBQUczTSxNQUFNLENBQUNDLElBQVAsQ0FBWXlNLFVBQVosQ0FMZjtBQUFBLFVBTUlFLGVBQWUsR0FBRyxFQU50QjtBQUFBLFVBT0k3TixJQVBKO0FBQUEsVUFPVTdCLEtBUFY7QUFBQSxVQU9pQmxCLEdBUGpCO0FBQUEsVUFPc0I2USxTQVB0QjtBQUFBLFVBT2lDblAsQ0FQakM7O0FBU0EsYUFBTzdFLENBQUMsR0FBR3FILENBQVgsRUFBY3JILENBQUMsRUFBZixFQUFtQjtBQUNqQmtHLFlBQUksR0FBR2tJLEtBQUssQ0FBQ3BPLENBQUQsQ0FBWjtBQUNBZ1UsaUJBQVMsR0FBRyxLQUFaOztBQUVBLFlBQUksQ0FBQ0YsUUFBUSxDQUFDblQsUUFBVCxDQUFrQnVGLElBQWxCLENBQUwsRUFBOEI7QUFDNUI3QixlQUFLLEdBQUdKLE9BQU8sQ0FBQ2lDLElBQUQsQ0FBZjtBQUNBL0MsYUFBRyxHQUFHa0IsS0FBSyxDQUFDbEIsR0FBWjs7QUFFQSxlQUFLMEIsQ0FBTCxJQUFVZ1AsVUFBVixFQUFzQjtBQUNwQixnQkFBSUEsVUFBVSxDQUFDaFAsQ0FBRCxDQUFWLENBQWMxQixHQUFkLEtBQXNCQSxHQUExQixFQUErQjtBQUM3QjZRLHVCQUFTLEdBQUcsSUFBWjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxjQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZDNQLGlCQUFLLENBQUNxSyxNQUFOLEdBQWVsSSxJQUFJLEtBQUssTUFBeEI7QUFDQXVOLDJCQUFlLENBQUM3TixJQUFELENBQWYsR0FBd0I3QixLQUF4QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPNUcscUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFxRCxPQUFPLEVBQUk7QUFDM0MsWUFBTW1RLFFBQVEsR0FBR25RLE9BQU8sQ0FBQ0csT0FBekI7O0FBRUEsYUFBSyxJQUFJaVEsQ0FBVCxJQUFjSCxlQUFkLEVBQStCO0FBQzdCRSxrQkFBUSxDQUFDQyxDQUFELENBQVIsR0FBY0gsZUFBZSxDQUFDRyxDQUFELENBQTdCO0FBQ0Q7O0FBQ0QsZUFBT3BRLE9BQVA7QUFDRCxPQVBNLEVBT0owQyxJQVBJLENBQVA7QUFRRCxLQXhDTSxDQUFQO0FBeUNELEdBNUtTO0FBOEtWMk4scUJBOUtVLGlDQThLeUM7QUFBQTs7QUFBQSxRQUEvQnRXLFdBQStCLHVFQUFqQixHQUFpQjtBQUFBLFFBQVpiLFVBQVk7O0FBQ2pEUyx5QkFBUzJXLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEJ6VyxJQUExQixDQUErQixVQUFBMFcsS0FBSyxFQUFJO0FBQ3RDLFVBQUlBLEtBQUosRUFBVztBQUNULFlBQUlyWCxVQUFVLEtBQUssU0FBbkIsRUFBOEIsS0FBSSxDQUFDZSxJQUFMLENBQVUsT0FBVixFQUFtQixvQ0FBbkI7QUFDOUIsZUFBT04scUJBQVNRLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLE9BQXhCLENBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRCxLQU5ELEVBT0NOLElBUEQsQ0FPTTtBQUFBLGFBQU1GLHFCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBNkMsUUFBUTtBQUFBLGVBQUksS0FBSSxDQUFDeUgsY0FBTCxDQUFvQnpILFFBQXBCLENBQUo7QUFBQSxPQUFwQyxFQUF1RSxNQUF2RSxDQUFOO0FBQUEsS0FQTixFQVFDM0YsSUFSRCxDQVFNO0FBQUEsYUFBTUYscUJBQVNnRCxNQUFULENBQWdCLFVBQWhCLEVBQTRCLFVBQUE2QyxRQUFRO0FBQUEsZUFBSSxLQUFJLENBQUN5SCxjQUFMLENBQW9CekgsUUFBcEIsQ0FBSjtBQUFBLE9BQXBDLEVBQXVFLE9BQXZFLENBQU47QUFBQSxLQVJOLEVBU0MzRixJQVRELENBU007QUFBQSxhQUFNRixxQkFBU1EsR0FBVCxDQUFhLFNBQWIsRUFBd0IsTUFBeEIsQ0FBTjtBQUFBLEtBVE4sRUFVQTtBQVZBLEtBV0NOLElBWEQsQ0FXTTtBQUFBLGFBQU0sS0FBSSxDQUFDSSxJQUFMLENBQVUscUJBQVYsRUFBaUNGLFdBQWpDLENBQU47QUFBQSxLQVhOLFdBWU8sVUFBQWdILENBQUMsRUFBSTtBQUNWLFdBQUksQ0FBQzlHLElBQUwsQ0FBVSxxQkFBVixFQUFpQ0YsV0FBakM7O0FBQ0EsV0FBSSxDQUFDRSxJQUFMLENBQVUsT0FBVixFQUFtQix5QkFBbkIsRUFBOEM4RyxDQUFDLENBQUNDLFFBQUYsRUFBOUM7QUFDRCxLQWZEO0FBZ0JELEdBL0xTO0FBZ01Wd1AscUJBaE1VLGlDQWdNWTtBQUFBOztBQUNwQjdXLHlCQUFTMlcsT0FBVCxDQUFpQixNQUFqQixFQUF5QnpXLElBQXpCLENBQThCLFVBQUEwVyxLQUFLLEVBQUk7QUFDckMsVUFBSUEsS0FBSixFQUFXO0FBQ1QsY0FBSSxDQUFDdFcsSUFBTCxDQUFVLE9BQVYsRUFBbUIsb0NBQW5CO0FBQ0Q7O0FBQ0QsYUFBT04scUJBQVNRLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCLENBQVA7QUFDRCxLQUxELEVBTUNOLElBTkQsQ0FNTTtBQUFBLGFBQU1GLHFCQUFTMlcsT0FBVCxDQUFpQixPQUFqQixFQUEwQnpXLElBQTFCLENBQStCLFVBQUEwVyxLQUFLLEVBQUk7QUFDbEQsWUFBSUEsS0FBSixFQUFXO0FBQ1QsZ0JBQUksQ0FBQ3RXLElBQUwsQ0FBVSxPQUFWLEVBQW1CLG1DQUFuQjtBQUNEOztBQUNELGVBQU9OLHFCQUFTUSxHQUFULENBQWEsU0FBYixFQUF3QixPQUF4QixDQUFQO0FBQ0QsT0FMVyxDQUFOO0FBQUEsS0FOTixFQVlDTixJQVpELENBWU07QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGlCQUFWLENBQU47QUFBQSxLQVpOLFdBYU87QUFBQSxhQUFNLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLGlCQUFWLENBQU47QUFBQSxLQWJQO0FBY0QsR0EvTVM7QUFnTlZ3VyxlQWhOVSx5QkFnTklDLGVBaE5KLEVBZ05xQmhPLElBaE5yQixFQWdOMkI7QUFBQTs7QUFDbkMsUUFBSWxELFFBQVEsR0FBR2tSLGVBQWUsQ0FBQ2xSLFFBQS9CO0FBQUEsUUFDSVEsT0FBTyxHQUFHMFEsZUFBZSxDQUFDMVEsT0FEOUI7QUFHQSxRQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDUixRQUFqQixFQUEyQixLQUFLdkYsSUFBTCxDQUFVLGVBQVYsRUFBMkIsb0JBQTNCLEVBQTNCLEtBQ0s7QUFDSCxVQUFJLENBQUMrRixPQUFMLEVBQWM7QUFDWixZQUFJLENBQUNSLFFBQVEsQ0FBQ25DLFNBQWQsRUFBeUIsS0FBS3BELElBQUwsQ0FBVSxlQUFWLEVBQTJCLGdDQUEzQixFQUE2RCx1QkFBN0QsRUFBekIsS0FDSyxLQUFLMFcsY0FBTCxDQUFvQm5SLFFBQXBCLEVBQThCa0QsSUFBOUIsRUFBb0M3SSxJQUFwQyxDQUF5QyxVQUFBK1csT0FBTyxFQUFJO0FBQ3ZELGNBQUksQ0FBQ0EsT0FBTCxFQUFjLE1BQUksQ0FBQzNXLElBQUwsQ0FBVSxlQUFWLEVBQTJCLGdDQUEzQixFQUE2RCx1QkFBN0QsRUFBZCxLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLGdDQUFWLEVBQTRDLGdDQUE1QztBQUNOLFNBSEk7QUFJTixPQU5ELE1BT0ssSUFBSSxDQUFDdUYsUUFBTCxFQUFlO0FBQ2xCLGFBQUtxUixhQUFMLENBQW1CN1EsT0FBbkIsRUFBNEIwQyxJQUE1QixFQUFrQzdJLElBQWxDLENBQXVDLFVBQUErVyxPQUFPLEVBQUk7QUFDaEQsY0FBSSxDQUFDQSxPQUFMLEVBQWMsTUFBSSxDQUFDM1csSUFBTCxDQUFVLGVBQVYsRUFBMkIsaUNBQTNCLEVBQThELHNCQUE5RCxFQUFkLEtBQ0ssTUFBSSxDQUFDQSxJQUFMLENBQVUsbUNBQVY7QUFDTixTQUhEO0FBSUQsT0FMSSxNQUtFO0FBQ0wsYUFBSzBXLGNBQUwsQ0FBb0JuUixRQUFwQixFQUE4QmtELElBQTlCLEVBQW9DN0ksSUFBcEMsQ0FBeUMsVUFBQWlYLFNBQVMsRUFBSTtBQUNwRCxnQkFBSSxDQUFDRCxhQUFMLENBQW1CN1EsT0FBbkIsRUFBNEIwQyxJQUE1QixFQUFrQzdJLElBQWxDLENBQXVDLFVBQUFrWCxTQUFTLEVBQUk7QUFDbEQsZ0JBQUksQ0FBQ0QsU0FBTCxFQUFnQjtBQUNkLGtCQUFJLENBQUNDLFNBQUwsRUFBZ0IsTUFBSSxDQUFDOVcsSUFBTCxDQUFVLGVBQVYsRUFBMkIsdUJBQTNCLEVBQW9ELHNCQUFwRCxFQUFoQixLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLCtCQUFWLEVBQTJDLHVCQUEzQztBQUNOLGFBSEQsTUFHTztBQUNMLGtCQUFJNlcsU0FBUyxLQUFLLFVBQWxCLEVBQThCO0FBQzVCLG9CQUFJLENBQUNDLFNBQUwsRUFBZ0IsTUFBSSxDQUFDOVcsSUFBTCxDQUFVLGVBQVYsRUFBMkIsc0JBQTNCLEVBQW1ELHVCQUFuRCxFQUFoQixLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLCtCQUFWLEVBQTJDLHVCQUEzQztBQUNOLGVBSEQsTUFHTztBQUNMLG9CQUFJLENBQUM4VyxTQUFMLEVBQWdCLE1BQUksQ0FBQzlXLElBQUwsQ0FBVSxnQ0FBVixFQUE0QyxzQkFBNUMsRUFBaEIsS0FDSyxNQUFJLENBQUNBLElBQUwsQ0FBVSxxREFBVjtBQUNOO0FBQ0Y7QUFDRixXQWJEO0FBY0QsU0FmRDtBQWdCRDtBQUNGO0FBQ0YsR0FyUFM7QUFzUFYwVyxnQkF0UFUsMEJBc1BLblIsUUF0UEwsRUFzUGVrRCxJQXRQZixFQXNQcUI7QUFBQTs7QUFDN0IsUUFBSSxDQUFDbEQsUUFBUSxDQUFDbkMsU0FBZCxFQUF5QixPQUFPMlQsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQWhCLENBQVA7QUFFekIsV0FBT3RYLHFCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBNkMsUUFBUTtBQUFBLGFBQUksTUFBSSxDQUFDeUgsY0FBTCxDQUFvQnpILFFBQXBCLENBQUo7QUFBQSxLQUFwQyxFQUF1RWtELElBQXZFLEVBQ0o3SSxJQURJLENBQ0M7QUFBQSxhQUFNLElBQU47QUFBQSxLQURELFdBRUU7QUFBQSxhQUFNLEtBQU47QUFBQSxLQUZGLENBQVA7QUFHRCxHQTVQUztBQTZQVmdYLGVBN1BVLHlCQTZQSTdRLE9BN1BKLEVBNlBhMEMsSUE3UGIsRUE2UG1CO0FBQzNCLFdBQU8sS0FBS2tOLGNBQUwsQ0FBb0IsS0FBS1AsYUFBTCxDQUFtQnJQLE9BQW5CLEVBQTRCLElBQTVCLENBQXBCLEVBQXVEMEMsSUFBdkQsRUFDSjdJLElBREksQ0FDQztBQUFBLGFBQU0sSUFBTjtBQUFBLEtBREQsV0FFRTtBQUFBLGFBQU0sS0FBTjtBQUFBLEtBRkYsQ0FBUDtBQUdEO0FBalFTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0ZlLFlBQVc7QUFDeEIsU0FBTyxJQUFJaEIsY0FBSixDQUFZO0FBQ2pCQyxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFO0FBQ0gsc0JBQWM7QUFEWDtBQURDLEtBRFM7QUFPakJtWSx1QkFQaUIsK0JBT0c5TyxJQVBILEVBT1M7QUFDeEIsVUFBTStPLFFBQVEsR0FBRzlYLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjRLLE1BQWhCLENBQXVCLHNDQUF2QixDQUFqQjtBQUVBN0ssYUFBTyxDQUFDcUksT0FBUixDQUFnQjBQLFVBQWhCLEdBQTZCdlgsSUFBN0IsQ0FBa0MsVUFBQXdYLGFBQWEsRUFBSTtBQUVqRGhZLGVBQU8sQ0FBQ3FJLE9BQVIsQ0FBZ0I5RSxNQUFoQixDQUF1QjtBQUNyQnlDLGFBQUcsRUFBRThSLFFBQVEsR0FBRyxHQUFYLEdBQWlCRyxrQkFBa0IsQ0FBQ2xQLElBQUQsQ0FEbkI7QUFFckIyQixjQUFJLEVBQUUsT0FGZTtBQUdyQndOLGdCQUFNLEVBQUVGLGFBQWEsQ0FBQ0UsTUFBZCxHQUF1QixFQUhWO0FBSXJCQyxlQUFLLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxhQUFhLENBQUNHLEtBQXZCLEVBQThCLEdBQTlCLENBSmM7QUFLckIxUCxtQkFBUyxFQUFFdVAsYUFBYSxDQUFDdlA7QUFMSixTQUF2QjtBQU9ELE9BVEQ7QUFVRDtBQXBCZ0IsR0FBWixDQUFQO0FBc0JELEM7O0FBMUJEOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQSxJQUFJNlAsWUFBSixDQUFVO0FBQ1J2UCxNQUFJLEVBQUUsWUFERTtBQUVSMkIsTUFBSSxFQUFFLFlBRkU7QUFHUjZOLG9CQUFrQixFQUFFLElBSFo7QUFJUjlZLFFBQU0sRUFBRTtBQUNOK1ksVUFBTSxFQUFFLENBQ04sYUFETSxFQUVOLGVBRk0sRUFHTixjQUhNLEVBSU4sa0JBSk0sRUFLTixpQkFMTSxFQU1OLGdDQU5NLEVBT04sb0JBUE0sRUFRTixvQkFSTSxFQVNOLGNBVE0sRUFVTixzQkFWTSxFQVdOLHVCQVhNLEVBWU4seUJBWk0sRUFhTiwyQkFiTSxFQWNOLGdDQWRNLEVBZU4sMEJBZk0sRUFnQk4sOEJBaEJNLEVBaUJOLGVBakJNLEVBa0JOLGFBbEJNLEVBbUJOLGVBbkJNLEVBb0JOLGlCQXBCTSxFQXFCTixtQkFyQk0sRUFzQk4sa0JBdEJNLEVBdUJOLE9BdkJNLEVBd0JOLE9BeEJNLEVBeUJOLE9BekJNLEVBMEJOLFFBMUJNLEVBMkJOLE9BM0JNLEVBNEJOLE9BNUJNLEVBNkJOLG1CQTdCTSxFQThCTiwwQkE5Qk0sRUErQk4sa0JBL0JNLEVBZ0NOLHlCQWhDTSxFQWlDTixjQWpDTSxFQWtDTixlQWxDTSxFQW1DTixzQkFuQ00sRUFvQ04sY0FwQ00sRUFxQ04sY0FyQ00sRUFzQ04sY0F0Q00sRUF1Q04sNEJBdkNNLEVBd0NOLHNCQXhDTSxFQXlDTixtQkF6Q00sRUEwQ04sMkJBMUNNLEVBMkNOLHlCQTNDTSxFQTRDTixnQkE1Q00sRUE2Q04sYUE3Q00sQ0FERjtBQWdETkMsY0FBVSxFQUFFLENBQ1YsYUFEVSxFQUVWLGVBRlUsRUFHVixjQUhVLEVBSVYsa0JBSlUsRUFLVix1QkFMVSxFQU1WLGFBTlUsRUFPVixtQkFQVSxFQVFWLG1CQVJVLEVBU1YsaUJBVFUsRUFVVixjQVZVLEVBV1YsZ0JBWFUsRUFZVixrQkFaVSxFQWFWLFlBYlUsRUFjVixtQkFkVSxFQWVWLFlBZlUsRUFnQlYsYUFoQlUsRUFpQlYsYUFqQlUsRUFrQlYscUJBbEJVLEVBbUJWLHVCQW5CVSxFQW9CVixxQkFwQlU7QUFoRE47QUFKQSxDQUFWLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUNBOzs7O0FBQ0E7Ozs7OztxQkFHZSxJQUFJQyxhQUFKLENBQVc7QUFFeEJDLE1BRndCLGtCQUVqQjtBQUFBOztBQUNMM1ksV0FBTyxDQUFDdVQsT0FBUixDQUFnQjdGLElBQWhCLENBQXFCL0osTUFBckIsQ0FBNEIsTUFBNUI7QUFFQSxXQUFPM0QsT0FBTyxDQUFDdVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0JyUyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQW9ZLFlBQVksRUFBSTtBQUN0RCxVQUFJbEwsSUFBSSxHQUFHa0wsWUFBWSxJQUFJQSxZQUFZLENBQUNsTCxJQUE3QixHQUFvQ2tMLFlBQVksQ0FBQ2xMLElBQWpELEdBQXdEeUgsNEJBQWlCekgsSUFBcEY7QUFDQSxhQUFPLEtBQUksQ0FBQ21MLFNBQUwsQ0FBZW5MLElBQWYsQ0FBUDtBQUNELEtBSE0sQ0FBUDtBQUlELEdBVHVCO0FBV3hCNU0sS0FYd0IsZUFXcEIwTSxLQVhvQixFQVdiQyxHQVhhLEVBV1I7QUFDZCxRQUFNcUwsSUFBSSxHQUFHLEtBQUssVUFBVXRMLEtBQWYsQ0FBYjtBQUNBLFFBQUksQ0FBQ3NMLElBQUwsRUFBVyxNQUFNLFdBQVd0TCxLQUFYLEdBQW1CLGlCQUF6QjtBQUNYLFdBQU8sS0FBSyxVQUFVQSxLQUFmLEVBQXNCQyxHQUF0QixDQUFQO0FBQ0QsR0FmdUI7QUFnQnhCbkssUUFoQndCLG9CQWdCUjtBQUNkLFdBQU8sS0FBS3lWLE9BQUwsdUJBQVA7QUFDRCxHQWxCdUI7QUFvQnhCOUIsU0FwQndCLHFCQW9CRDtBQUFBLFFBQWY1TixJQUFlLHVFQUFSLE1BQVE7QUFDckIsV0FBT3JKLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0JsSyxJQUFoQixFQUFzQjlJLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBK1MsT0FBTyxFQUFJO0FBQ2pELFVBQUksQ0FBQ0EsT0FBRCxJQUFhLENBQUN2SixNQUFNLENBQUNDLElBQVAsQ0FBWXNKLE9BQVosRUFBcUJ4UCxNQUF0QixJQUFnQ3dQLE9BQU8sQ0FBQ3lGLFdBQVIsS0FBd0JoUCxNQUFyRSxJQUFnRixDQUFDdUosT0FBTyxDQUFDNU0sT0FBN0YsRUFBc0csT0FBTyxJQUFQO0FBQ3RHLGFBQU8sS0FBUDtBQUNELEtBSE0sQ0FBUDtBQUlELEdBekJ1QjtBQTBCeEJzUyxXQTFCd0IsdUJBMEJaO0FBQ1YsV0FBT2paLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0IsS0FBSzJGLGFBQXJCLEVBQW9DM1ksR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUErUyxPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDcE4sUUFBckIsSUFBaUNvTixPQUFPLENBQUNwTixRQUFSLENBQWlCQyxLQUFqQixDQUF1QnpHLE1BQTVELEVBQW9FLE9BQU8sSUFBUDtBQUNwRSxhQUFPLEtBQVA7QUFDRCxLQUhNLENBQVA7QUFJRCxHQS9CdUI7QUFnQ3hCd1osZUFoQ3dCLDJCQWdDUjtBQUNkLFdBQU9uWixPQUFPLENBQUN1VCxPQUFSLENBQWdCLEtBQUsyRixhQUFyQixFQUFvQzNZLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBK1MsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ3BOLFFBQXpCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxhQUFPb04sT0FBTyxDQUFDcE4sUUFBUixDQUFpQlEsT0FBakIsQ0FBeUIrQixVQUFoQztBQUNELEtBSE0sQ0FBUDtBQUlELEdBckN1QjtBQXNDeEIwUSxhQXRDd0IseUJBc0NWO0FBQ1osV0FBT3BaLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0IsS0FBSzJGLGFBQXJCLEVBQW9DM1ksR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUErUyxPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDcE4sUUFBekIsRUFBbUMsT0FBTyxRQUFQO0FBQ25DLGFBQU9vTixPQUFPLENBQUNwTixRQUFSLENBQWlCUSxPQUFqQixDQUF5QnNDLE1BQWhDO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0EzQ3VCO0FBNEN4Qm9RLGVBNUN3QiwyQkE0Q1I7QUFDZCxXQUFPclosT0FBTyxDQUFDdVQsT0FBUixDQUFnQixLQUFLMkYsYUFBckIsRUFBb0MzWSxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQStTLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNwTixRQUF6QixFQUFtQyxPQUFPLEtBQVA7QUFDbkMsYUFBT29OLE9BQU8sQ0FBQ3BOLFFBQVIsQ0FBaUI2RSxJQUFqQixDQUFzQjhLLFFBQTdCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0FqRHVCO0FBa0R4QndELGNBbER3QiwwQkFrRFQ7QUFDYixXQUFPdFosT0FBTyxDQUFDdVQsT0FBUixDQUFnQixLQUFLMkYsYUFBckIsRUFBb0MzWSxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQStTLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNwTixRQUFSLENBQWlCK0gsT0FBckI7QUFBQSxLQUF0RCxDQUFQO0FBQ0QsR0FwRHVCO0FBcUR4QnFMLGdCQXJEd0IsNEJBcURQO0FBQ2YsV0FBT3ZaLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0IsS0FBSzJGLGFBQXJCLEVBQW9DM1ksR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUErUyxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDcE4sUUFBUixDQUFpQm5DLFNBQXJCO0FBQUEsS0FBdEQsQ0FBUDtBQUNELEdBdkR1QjtBQXlEeEJ3VixjQXpEd0IsMEJBeURFO0FBQUE7O0FBQUEsUUFBYm5RLElBQWEsdUVBQU4sSUFBTTtBQUN4QixXQUFPLEtBQUtvUSxhQUFMLENBQW1CcFEsSUFBbkIsRUFBeUI3SSxJQUF6QixDQUE4QjtBQUFBLGFBQU0sTUFBSSxDQUFDa1osWUFBTCxDQUFrQnJRLElBQWxCLENBQU47QUFBQSxLQUE5QixDQUFQO0FBQ0QsR0EzRHVCO0FBNER4QndQLFdBNUR3QixxQkE0RGRuTCxJQTVEYyxFQTREUjtBQUFBOztBQUNkLFdBQU8xTixPQUFPLENBQUN1VCxPQUFSLENBQWdCWCxLQUFoQixDQUFzQjlSLEdBQXRCLENBQTBCO0FBQUU0TSxVQUFJLEVBQUVBO0FBQVIsS0FBMUIsRUFDSmxOLElBREksQ0FDQztBQUFBLGFBQU1SLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0I3RixJQUFoQixDQUFxQjVNLEdBQXJCLENBQXlCO0FBQUU0TSxZQUFJLEVBQUVBO0FBQVIsT0FBekIsQ0FBTjtBQUFBLEtBREQsRUFFSmxOLElBRkksQ0FFQztBQUFBLGFBQU0sTUFBSSxDQUFDbU4sUUFBTCxDQUFjRCxJQUFkLENBQU47QUFBQSxLQUZELENBQVA7QUFHRCxHQWhFdUI7QUFpRXhCK0wsZUFqRXdCLDJCQWlFaUI7QUFBQSxRQUEzQnBRLElBQTJCLHVFQUFwQixLQUFLNlAsYUFBZTtBQUN2QyxXQUFPbFosT0FBTyxDQUFDdVQsT0FBUixDQUFnQmxLLElBQWhCLEVBQXNCOUksR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUErUyxPQUFPLEVBQUk7QUFDakQsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDcE4sUUFBekIsRUFBbUMsT0FBT25HLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0JsSyxJQUFoQixFQUFzQnZJLEdBQXRCLENBQTBCO0FBQUVxRixnQkFBUSxFQUFFLGtCQUFNZ1AsNEJBQWlCaFAsUUFBdkI7QUFBWixPQUExQixDQUFQO0FBQ3BDLEtBRk0sQ0FBUDtBQUdELEdBckV1QjtBQXNFeEJ1VCxjQXRFd0IsMEJBc0VlO0FBQUEsUUFBMUJyUSxJQUEwQix1RUFBbkIsS0FBS3NRLFlBQWM7QUFDckMsV0FBTzNaLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0JsSyxJQUFoQixFQUFzQjlJLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBK1MsT0FBTyxFQUFJO0FBQ2pELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQzVNLE9BQXpCLEVBQWtDLE9BQU8zRyxPQUFPLENBQUN1VCxPQUFSLENBQWdCbEssSUFBaEIsRUFBc0J2SSxHQUF0QixDQUEwQjtBQUFFNkYsZUFBTyxFQUFFLGtCQUFNd08sNEJBQWlCeE8sT0FBdkI7QUFBWCxPQUExQixDQUFQO0FBQ25DLEtBRk0sQ0FBUDtBQUdELEdBMUV1QjtBQTJFeEJpVCxjQTNFd0Isd0JBMkVYaGEsT0EzRVcsRUEyRUY7QUFDcEIsV0FBT0ksT0FBTyxDQUFDdVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0I5UixHQUF0QixDQUEwQjtBQUFFbEIsYUFBTyxFQUFFQTtBQUFYLEtBQTFCLEVBQ0pZLElBREksQ0FDQztBQUFBLGFBQU1SLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0I3RixJQUFoQixDQUFxQjVNLEdBQXJCLENBQXlCO0FBQUVsQixlQUFPLEVBQUVBO0FBQVgsT0FBekIsQ0FBTjtBQUFBLEtBREQsQ0FBUDtBQUVELEdBOUV1QjtBQStFeEJpYSxVQS9Fd0Isb0JBK0VmeFYsR0EvRWUsRUErRVY7QUFDWixRQUFJQSxHQUFHLENBQUNVLEtBQVIsRUFBZTtBQUNiLGFBQU8vRSxPQUFPLENBQUN1VCxPQUFSLENBQWdCWCxLQUFoQixDQUFzQjlSLEdBQXRCLENBQTBCO0FBQUVtVCxZQUFJLEVBQUU7QUFBUixPQUExQixDQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFLNkYsU0FBTCxHQUFpQnRaLElBQWpCLENBQXNCLFVBQUF5VCxJQUFJLEVBQUk7QUFDbkNBLFVBQUksQ0FBQ3ZRLElBQUwsQ0FBVVcsR0FBVjtBQUNBLFVBQUk0UCxJQUFJLENBQUNsUSxNQUFMLEdBQWN3Riw0QkFBaUJ3USxlQUFuQyxFQUFvRDlGLElBQUksQ0FBQytGLEtBQUw7QUFDcEQsYUFBT2hhLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0JYLEtBQWhCLENBQXNCOVIsR0FBdEIsQ0FBMEI7QUFBRW1ULFlBQUksRUFBRUE7QUFBUixPQUExQixDQUFQO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0F4RnVCO0FBeUZ4QmdHLFlBekZ3QixzQkF5RmIvUyxLQXpGYSxFQXlGTjtBQUFBOztBQUNoQixXQUFPbEgsT0FBTyxDQUFDdVQsT0FBUixDQUFnQixLQUFLb0csWUFBckIsRUFBbUNwWixHQUFuQyxHQUF5Q0MsSUFBekMsQ0FBOEMsVUFBQStTLE9BQU8sRUFBSTtBQUM5RCxVQUFJNU0sT0FBTyxHQUFHNE0sT0FBTyxDQUFDNU0sT0FBdEI7QUFDQSxVQUFJcUQsTUFBTSxDQUFDQyxJQUFQLENBQVl0RCxPQUFPLENBQUNHLE9BQXBCLEVBQTZCdEQsUUFBN0IsQ0FBc0MwRCxLQUFLLENBQUM2QixJQUE1QyxDQUFKLEVBQXVELE9BQU8sTUFBSSxDQUFDbVIsYUFBTCxDQUFtQmhULEtBQW5CLENBQVA7QUFDdkRQLGFBQU8sQ0FBQ0csT0FBUixDQUFnQkksS0FBSyxDQUFDNkIsSUFBdEIsSUFBOEI3QixLQUE5QjtBQUNBLGFBQU9sSCxPQUFPLENBQUN1VCxPQUFSLENBQWdCLE1BQUksQ0FBQ29HLFlBQXJCLEVBQW1DN1ksR0FBbkMsQ0FBdUM7QUFBRTZGLGVBQU8sRUFBRUE7QUFBWCxPQUF2QyxDQUFQO0FBQ0QsS0FMTSxDQUFQO0FBTUQsR0FoR3VCO0FBa0d4Qm9TLFNBbEd3QixtQkFrR2hCdkwsS0FsR2dCLEVBa0dUSyxPQWxHUyxFQWtHOEI7QUFBQTs7QUFBQSxRQUE5QnhFLElBQThCLHVFQUF2QixLQUFLLFVBQVVtRSxLQUFmLENBQXVCO0FBQ3BELFdBQU94TixPQUFPLENBQUN1VCxPQUFSLENBQWdCbEssSUFBaEIsRUFBc0I5SSxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQStTLE9BQU8sRUFBSTtBQUMvQyxVQUFJLENBQUNBLE9BQU8sQ0FBQy9GLEtBQUQsQ0FBWixFQUFxQjtBQUNuQitGLGVBQU8sQ0FBQy9GLEtBQUQsQ0FBUCxHQUFpQixrQkFBTTJILDRCQUFpQjNILEtBQWpCLENBQU4sQ0FBakI7QUFDRDs7QUFDRCxVQUFNbEssTUFBTSxHQUFHLEVBQWY7QUFDQUEsWUFBTSxDQUFDa0ssS0FBRCxDQUFOLEdBQWdCSyxPQUFPLENBQUNzTSxJQUFSLENBQWEsTUFBYixFQUFtQjVHLE9BQU8sQ0FBQy9GLEtBQUQsQ0FBMUIsQ0FBaEI7QUFFQSxhQUFPeE4sT0FBTyxDQUFDdVQsT0FBUixDQUFnQmxLLElBQWhCLEVBQXNCdkksR0FBdEIsQ0FBMEJ3QyxNQUExQixFQUFrQzlDLElBQWxDLENBQXVDO0FBQUEsZUFBTThDLE1BQU0sQ0FBQ2tLLEtBQUQsQ0FBWjtBQUFBLE9BQXZDLENBQVA7QUFDRCxLQVJJLENBQVA7QUFTRDtBQTVHdUIsQ0FBWCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O1FBRVM0TSxLLEdBQUFBLFc7UUFBT0MsTyxHQUFBQSxtQjtRQUFTQyxlLEdBQUFBLDZCO1FBQWlCOWEsTyxHQUFBQSxlO1FBQVNrWixNLEdBQUFBLGE7UUFBUUosSyxHQUFBQSxXO1FBQU9pQyxhLEdBQUFBLHlCO1FBQWVDLFMsR0FBQUEsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ1RsRTtBQUNiNWEsU0FBTyxFQUFFSSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFdBQWhCLEdBQThCTixPQUQxQjtBQUVidUcsVUFBUSxFQUFDO0FBQ1BuQyxhQUFTLEVBQUU7QUFDVHlXLE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLElBQW5CLENBRE07QUFFVEMsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FGTTtBQUdUQyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUhNO0FBSVRqWSxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUpNO0FBS1RILE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLENBTE07QUFNVEQsT0FBQyxFQUFFLENBQUMsVUFBRCxFQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FOTTtBQU9ULFlBQU0sQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FQRztBQVFUSCxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLElBQVgsQ0FSTTtBQVNURSxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLElBQVgsQ0FUTTtBQVVURyxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FWTTtBQVdULFdBQUssQ0FBQyxFQUFELEVBQUssSUFBTCxDQVhJO0FBWVQsV0FBSyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBWkk7QUFhVCtTLGFBQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLEtBQWxCLENBYkE7QUFjVEMsZUFBUyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsQ0FkRjtBQWVUL1MsUUFBRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULENBZks7QUFnQlRnVCxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTDtBQWhCSyxLQURKO0FBbUJQdkgsV0FBTyxFQUFFO0FBQ1AsV0FBSztBQUFFRCxhQUFLLEVBQUU7QUFBVCxPQURFO0FBRVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUZFO0FBR1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUhFO0FBSVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUpFO0FBS1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxFO0FBTVA5TCxPQUFDLEVBQUU7QUFBRThMLGFBQUssRUFBRTtBQUFUO0FBTkksS0FuQkY7QUEyQlB0SCxXQUFPLEVBQUU7QUFDUGlKLGNBQVEsRUFBRSxJQURIO0FBRVBsSCxnQkFBVSxFQUFFLEtBRkw7QUFHUHNILGdCQUFVLEVBQUUsSUFITDtBQUlQRixXQUFLLEVBQUUsS0FKQTtBQUtQN0csWUFBTSxFQUFFLE9BTEQ7QUFNUDJSLGNBQVEsRUFBRSxNQU5IO0FBT1BDLFVBQUksRUFBRSxNQVBDO0FBUVA5UCxjQUFRLEVBQUUsSUFSSDtBQVNQbUUsWUFBTSxFQUFFLFdBVEQ7QUFVUEUsVUFBSSxFQUFFLE1BVkM7QUFXUEssUUFBRSxFQUFFLEVBWEc7QUFZUGhELGdCQUFVLEVBQUU7QUFaTCxLQTNCRjtBQXlDUHJHLFNBQUssRUFBRTtBQUNMekcsWUFBTSxFQUFFLElBREg7QUFFTDBHLFlBQU0sRUFBRTtBQUZILEtBekNBO0FBNkNQMkUsUUFBSSxFQUFFO0FBQ0o4UCxZQUFNLEVBQUUsSUFESjtBQUVKekYsY0FBUSxFQUFFLElBRk47QUFHSkMsaUJBQVcsRUFBRSxJQUhUO0FBSUpNLGdCQUFVLEVBQUUsS0FKUjtBQUtKQyxtQkFBYSxFQUFFLEtBTFg7QUFNSmtGLGVBQVMsRUFBRSxLQU5QO0FBT0pyUCxpQkFBVyxFQUFFLElBUFQ7QUFRSkUsaUJBQVcsRUFBRSxJQVJUO0FBU0pYLGFBQU8sRUFBRSxJQVRMO0FBVUorUCxpQkFBVyxFQUFFLEtBVlQ7QUFXSmhQLGVBQVMsRUFBRSxJQVhQO0FBWUpkLGFBQU8sRUFBRSxJQVpMO0FBYUpxRSxrQkFBWSxFQUFFLEtBYlY7QUFjSm9HLGFBQU8sRUFBRSxXQWRMO0FBZUo5RyxnQkFBVSxFQUFFLE9BZlI7QUFnQkpvTSxpQkFBVyxFQUFFLElBaEJUO0FBaUJKbkYsY0FBUSxFQUFFO0FBakJOLEtBN0NDO0FBZ0VQclQsTUFBRSxFQUFFO0FBQ0YyRSxVQUFJLEVBQUU7QUFDSjhULFlBQUksRUFBRTtBQUFFckssa0JBQVEsRUFBRTtBQUFaLFNBREY7QUFFSnNLLFlBQUksRUFBRTtBQUFFdEssa0JBQVEsRUFBRTtBQUFaLFNBRkY7QUFHSnVDLGFBQUssRUFBRTtBQUFFdkMsa0JBQVEsRUFBRTtBQUFaLFNBSEg7QUFJSjNDLGVBQU8sRUFBRTtBQUFFMkMsa0JBQVEsRUFBRTtBQUFaLFNBSkw7QUFLSnVLLGVBQU8sRUFBRTtBQUFFdkssa0JBQVEsRUFBRTtBQUFaLFNBTEw7QUFNSnpELGFBQUssRUFBRTtBQUFFeUQsa0JBQVEsRUFBRTtBQUFaLFNBTkg7QUFPSndLLGFBQUssRUFBRTtBQUFFeEssa0JBQVEsRUFBRTtBQUFaLFNBUEg7QUFRSmtGLGNBQU0sRUFBRTtBQUFFbEYsa0JBQVEsRUFBRTtBQUFaO0FBUkosT0FESjtBQVdGRSxXQUFLLEVBQUU7QUFYTDtBQWhFRyxHQUZJO0FBZ0ZicEssU0FBTyxFQUFFO0FBQ1BHLFdBQU8sRUFBRTtBQURGLEdBaEZJO0FBbUZidU0sV0FBUyxFQUFFLEVBbkZFO0FBb0ZiM0YsTUFBSSxFQUFFO0FBQ0p2SCxZQUFRLEVBQUUsS0FETjtBQUVKUSxXQUFPLEVBQUUsS0FGTDtBQUdKME0sYUFBUyxFQUFFO0FBSFA7QUFwRk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQUE7QUFFYjdKLHNCQUFvQixFQUFFLEVBRlQ7QUFJYnVRLGlCQUFlLEVBQUUsRUFKSjtBQU1idUIsYUFBVyxFQUFFO0FBQ1hDLGFBQVMsRUFBRSxTQURBO0FBRVhDLFNBQUssRUFBRSxTQUZJO0FBR1hDLFVBQU0sRUFBRSxTQUhHO0FBSVhDLFVBQU0sRUFBRSxTQUpHO0FBS1hDLE9BQUcsRUFBRSxTQUxNO0FBTVhDLFVBQU0sRUFBRSxTQU5HO0FBT1hDLFFBQUksRUFBRSxTQVBLO0FBUVhDLFNBQUssRUFBRTtBQVJJO0FBTkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQUE7QUFDYkMsVUFBUSxFQUFFLENBREc7QUFFYkMsMEJBQXdCLEVBQUUsQ0FGYjtBQUdiQyxVQUFRLEVBQUUsQ0FIRztBQUliQyxrQkFBZ0IsRUFBRSxDQUpMO0FBS2JDLHVCQUFxQixFQUFFLENBTFY7QUFNYkMsc0JBQW9CLEVBQUUsQ0FOVDtBQU9iQyxnQkFBYyxFQUFFLENBUEg7QUFRYkMscUJBQW1CLEVBQUUsQ0FSUjtBQVNiQyxtQkFBaUIsRUFBRSxDQVROO0FBVWJDLG1CQUFpQixFQUFFLEVBVk47QUFXYkMscUJBQW1CLEVBQUUsRUFYUjtBQVliQyxtQkFBaUIsRUFBRSxFQVpOO0FBYWJDLHFCQUFtQixFQUFFLEVBYlI7QUFjYkMsa0JBQWdCLEVBQUUsRUFkTDtBQWViQyxxQkFBbUIsRUFBRSxFQWZSO0FBZ0JiQyxrQkFBZ0IsRUFBRSxFQWhCTDtBQWlCYkMsb0JBQWtCLEVBQUUsRUFqQlA7QUFrQmJDLGlCQUFlLEVBQUUsRUFsQko7QUFtQmJDLG9DQUFrQyxFQUFFLEVBbkJ2QjtBQW9CYkMscUNBQW1DLEVBQUUsRUFwQnhCO0FBcUJiQyxtQ0FBaUMsRUFBRSxFQXJCdEI7QUFzQmJDLG9CQUFrQixFQUFFLEVBdEJQO0FBdUJiQyxzQkFBb0IsRUFBRSxFQXZCVDtBQXdCYkMsdUJBQXFCLEVBQUUsRUF4QlY7QUF5QmJDLHVCQUFxQixFQUFFLEVBekJWO0FBMEJiQyxnQ0FBOEIsRUFBRSxFQTFCbkI7QUEyQmJDLGlDQUErQixFQUFFLEVBM0JwQjtBQTRCYkMsY0FBWSxFQUFFLEVBNUJEO0FBNkJiQyx5QkFBdUIsRUFBRSxFQTdCWjtBQThCYkMsb0NBQWtDLEVBQUUsRUE5QnZCO0FBK0JiQyxtQkFBaUIsRUFBRSxFQS9CTjtBQWdDYkMsaUJBQWUsRUFBRSxFQWhDSjtBQWlDYkMsNEJBQTBCLEVBQUUsRUFqQ2Y7QUFrQ2JDLDRCQUEwQixFQUFFLEVBbENmO0FBbUNiQyw0QkFBMEIsRUFBRSxFQW5DZjtBQW9DYkMsd0JBQXNCLEVBQUUsRUFwQ1g7QUFxQ2JDLHNCQUFvQixFQUFFLEVBckNUO0FBc0NiQyx1QkFBcUIsRUFBRSxFQXRDVjtBQXdDYkMsZUF4Q2EseUJBd0NDNVEsR0F4Q0QsRUF3Q007QUFDakIsU0FBSyxJQUFJTyxHQUFULElBQWdCLElBQWhCLEVBQXNCO0FBQ3BCLFVBQUksS0FBS0EsR0FBTCxLQUFhUCxHQUFqQixFQUFzQjtBQUNwQixlQUFPTyxHQUFQO0FBQ0E7QUFDRDtBQUNGOztBQUNELFdBQU8sRUFBUDtBQUNEO0FBaERZLEM7Ozs7Ozs7Ozs7O0FDQWYseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTW9NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQVNrRSxHQUFULEVBQWM7QUFDMUIsTUFBTUMsTUFBTSxHQUFHN1IsS0FBSyxDQUFDQyxPQUFOLENBQWMyUixHQUFkLElBQXFCLEVBQXJCLEdBQTBCLEVBQXpDO0FBQ0EsTUFBSTdRLEdBQUo7O0FBQ0EsT0FBSyxJQUFJNkMsSUFBVCxJQUFpQmdPLEdBQWpCLEVBQXNCO0FBQ3BCLFFBQUlBLEdBQUcsQ0FBQzVNLGNBQUosQ0FBbUJwQixJQUFuQixDQUFKLEVBQThCO0FBQzVCN0MsU0FBRyxHQUFHNlEsR0FBRyxDQUFDaE8sSUFBRCxDQUFUOztBQUNBLFVBQUk3QyxHQUFHLEtBQUssSUFBUixJQUFnQixRQUFPQSxHQUFQLE1BQWUsUUFBbkMsRUFBNkM7QUFDM0M4USxjQUFNLENBQUNqTyxJQUFELENBQU4sR0FBZThKLEtBQUssQ0FBQzNNLEdBQUQsQ0FBcEI7QUFDRCxPQUZELE1BR0U4USxNQUFNLENBQUNqTyxJQUFELENBQU4sR0FBZTdDLEdBQWY7QUFDSDtBQUNGOztBQUNELFNBQU84USxNQUFQO0FBQ0QsQ0FiRDs7UUFlU25FLEssR0FBQUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlQ7O0FBRUEsSUFBTUcsYUFBYSxHQUFHLElBQUkvYSxlQUFKLENBQVk7QUFDaENNLFVBRGdDLHNCQUNyQjtBQUFBOztBQUNUMGUsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFBbmEsS0FBSyxFQUFJO0FBQ3hDLFVBQU1nRCxJQUFJLEdBQUdoRCxLQUFLLENBQUNvYSxRQUFOLENBQWVsUSxLQUFmLENBQXFCLEdBQXJCLEVBQTBCb0QsR0FBMUIsRUFBYjs7QUFDQSxVQUFJLENBQUMsZUFBRCxFQUFrQixnQkFBbEIsRUFBb0MsZUFBcEMsRUFBcUQsa0JBQXJELEVBQXlFcE8sUUFBekUsQ0FBa0Y4RCxJQUFsRixDQUFKLEVBQTZGO0FBQzNGLGFBQUksQ0FBQzFHLElBQUwsQ0FBVSx1QkFBVixFQUFtQztBQUNqQzhELGlCQUFPLEVBQUVKLEtBQUssQ0FBQ0ksT0FEa0I7QUFFakNDLGtCQUFRLEVBQUVMLEtBQUssQ0FBQ29hLFFBQU4sQ0FBZWxRLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEJvRCxHQUExQixHQUFnQ3BELEtBQWhDLENBQXNDLEdBQXRDLEVBQTJDd0wsS0FBM0MsS0FBcUQsR0FBckQsR0FBMkQxVixLQUFLLENBQUNxYSxNQUFqRSxHQUEwRSxHQUExRSxHQUFnRnJhLEtBQUssQ0FBQ3NhLEtBRi9EO0FBR2pDbmEsY0FBSSxFQUFHLElBQUlHLElBQUosRUFBRCxDQUFhQyxPQUFiO0FBSDJCLFNBQW5DO0FBS0Q7QUFDRixLQVRELEVBU0csS0FUSDtBQVVEO0FBWitCLENBQVosQ0FBdEI7O3FCQWVlMFYsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ2pCQSxVQUFTc0UsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQ2xDLE9BQUssSUFBSWpjLENBQVQsSUFBY2ljLElBQWQ7QUFDRSxRQUFJLENBQUNELElBQUksQ0FBQ2hjLENBQUQsQ0FBVCxFQUFjZ2MsSUFBSSxDQUFDaGMsQ0FBRCxDQUFKLEdBQVVpYyxJQUFJLENBQUNqYyxDQUFELENBQWQ7QUFEaEI7O0FBR0EsU0FBT2djLElBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRCxJQUFNdkUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFXO0FBRWpDLFNBQU90YSxPQUFPLENBQUNvSCxJQUFSLENBQWEyWCxLQUFiLENBQW1CO0FBQUUvRyxpQkFBYSxFQUFFLElBQWpCO0FBQXVCclksVUFBTSxFQUFFO0FBQS9CLEdBQW5CLEVBQTBEYSxJQUExRCxDQUErRCxVQUFBNEcsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQyxDQUFELENBQVI7QUFBQSxHQUFuRSxDQUFQO0FBQ0QsQ0FIRDs7UUFLU2tULGUsR0FBQUEsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFQsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU3hVLEdBQVQsRUFBYztBQUM5QixNQUFNZ1osQ0FBQyxHQUFHaFosR0FBRyxDQUFDaVosV0FBSixDQUFnQixHQUFoQixDQUFWO0FBQ0EsTUFBSUQsQ0FBQyxLQUFLLENBQUMsQ0FBWCxFQUFjLE9BQU9oWixHQUFQLENBQWQsS0FDSyxPQUFPQSxHQUFHLENBQUNrWixNQUFKLENBQVcsQ0FBWCxFQUFjRixDQUFkLENBQVA7QUFDTixDQUpEOztRQU1TeEUsUyxHQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVCxJQUFJMkUsTUFBTSxHQUFHLEVBQWI7Ozs7Ozs7Ozs7O3VCQUlLQyxLLEVBQU9DLE8sRUFBUztBQUNqQixVQUFJLENBQUNGLE1BQU0sQ0FBQ0MsS0FBRCxDQUFYLEVBQW9CRCxNQUFNLENBQUNDLEtBQUQsQ0FBTixHQUFnQixFQUFoQjtBQUVwQkQsWUFBTSxDQUFDQyxLQUFELENBQU4sQ0FBYzFiLElBQWQsQ0FBbUIyYixPQUFuQjtBQUNEOzs7eUJBQ0k1ZixNLEVBQWlCO0FBQUE7O0FBQUEsd0NBQU42ZixJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDcEI3ZixZQUFNLEdBQUdBLE1BQU0sQ0FBQytPLEtBQVAsQ0FBYSxHQUFiLENBQVQ7QUFFQSxVQUFJM0wsQ0FBQyxHQUFHLENBQVI7QUFBQSxVQUFXcUgsQ0FBQyxHQUFHekssTUFBTSxDQUFDc0UsTUFBdEI7QUFBQSxVQUE4QndiLEtBQTlCOztBQUVBLGFBQU8xYyxDQUFDLEdBQUdxSCxDQUFYLEVBQWNySCxDQUFDLEVBQWYsRUFBbUI7QUFDakIwYyxhQUFLLEdBQUdKLE1BQU0sQ0FBQzFmLE1BQU0sQ0FBQ29ELENBQUQsQ0FBUCxDQUFkO0FBRUEsWUFBSTBjLEtBQUosRUFDRUEsS0FBSyxDQUFDbk4sT0FBTixDQUFjLFVBQUFpTixPQUFPO0FBQUEsaUJBQUlBLE9BQU8sQ0FBQ0csS0FBUixDQUFjLEtBQWQsRUFBb0JGLElBQXBCLENBQUo7QUFBQSxTQUFyQjtBQUNIO0FBQ0Y7Ozs0QkFDT0YsSyxFQUFnQjtBQUFBLHlDQUFORSxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDdEIsYUFBT3RmLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQndmLFdBQWhCLENBQTRCO0FBQUUvSyxVQUFFLEVBQUUwSyxLQUFOO0FBQWFFLFlBQUksRUFBRUEsSUFBbkI7QUFBeUJJLFlBQUksRUFBRTtBQUEvQixPQUE1QixXQUF5RSxZQUFNLENBQUUsQ0FBakYsQ0FBUDtBQUNEOzs7MEJBQ0tDLE8sRUFBU0MsSSxFQUFnQjtBQUFBLHlDQUFQQyxLQUFPO0FBQVBBLGFBQU87QUFBQTs7QUFDN0IsYUFBTyxZQUFtQjtBQUFBLDJDQUFQQyxLQUFPO0FBQVBBLGVBQU87QUFBQTs7QUFDeEIsZUFBT0YsSUFBSSxDQUFDSixLQUFMLENBQVdHLE9BQVgsRUFBb0JFLEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxLQUFiLENBQXBCLENBQVA7QUFDRCxPQUZEO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWF0Z0IsTzs7UUFBQUEsTzs7O0FBRVgsbUJBQVl3Z0IsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmOztBQUVBLFNBQUtDLENBQUwsSUFBVUQsR0FBVjtBQUFlLFlBQUtDLENBQUwsSUFBVUQsR0FBRyxDQUFDQyxDQUFELENBQWI7QUFBZjs7QUFFQSxRQUFJeGdCLE1BQU0sR0FBRyxNQUFLQSxNQUFsQjtBQUFBLFFBQ0l5Z0IsU0FESjtBQUFBLFFBQ2VELENBRGY7QUFBQSxRQUNrQnZZLENBRGxCO0FBQUEsUUFDcUIyWCxPQURyQjs7QUFHQSxRQUFJNWYsTUFBTSxLQUFLeWdCLFNBQVMsR0FBR3pnQixNQUFNLENBQUNDLEdBQXhCLENBQVYsRUFBd0M7QUFDdEMsV0FBS2dJLENBQUwsSUFBVXdZLFNBQVYsRUFBcUI7QUFDbkJiLGVBQU8sR0FBR2EsU0FBUyxDQUFDeFksQ0FBRCxDQUFuQjtBQUNBLFlBQUksTUFBSzJYLE9BQUwsQ0FBSixFQUNFLE1BQUtoZSxFQUFMLENBQVFxRyxDQUFSLEVBQVcsTUFBSytMLEtBQUwsZ0NBQWlCLE1BQUs0TCxPQUFMLENBQWpCLENBQVg7QUFDSDtBQUNGOztBQUNELEtBQUMsTUFBS3ZmLFFBQU4sSUFBa0IsTUFBS0EsUUFBTCxFQUFsQjtBQWZlO0FBZ0JoQjs7O0VBbEIwQnFnQixxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYTdILEs7O1FBQUFBLEs7OztBQUVYLGlCQUFZMEgsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmLCtFQUFNQSxHQUFOO0FBRUEsVUFBS0ksSUFBTCxHQUFZLElBQVo7QUFFQSxRQUFNMVYsSUFBSSxHQUFHLE1BQUtBLElBQWxCO0FBRUExSyxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JvZ0IsU0FBaEIsQ0FBMEJqZ0IsV0FBMUIsQ0FBc0MsTUFBS3FULEtBQUwsZ0NBQWlCLE1BQUs2TSxXQUF0QixDQUF0QztBQUVBLFFBQUk1VixJQUFJLEtBQUssWUFBVCxJQUF5QkEsSUFBSSxLQUFLLFlBQXRDLEVBQW9ELE1BQUs2VixXQUFMOztBQUVwRCxVQUFLQyxrQkFBTDs7QUFYZTtBQVloQjs7OzsyQkFDTS9nQixNLEVBQVE7QUFDYixXQUFLK2dCLGtCQUFMLENBQXdCL2dCLE1BQXhCO0FBQ0Q7Ozt1Q0FDa0JBLE0sRUFBUTtBQUN6QkEsWUFBTSxHQUFHQSxNQUFNLElBQUksS0FBS0EsTUFBeEI7QUFDQSxVQUFJZ2hCLFlBQUosRUFBa0JDLHFCQUFsQjs7QUFFQSxVQUFJamhCLE1BQUosRUFBWTtBQUNWZ2hCLG9CQUFZLEdBQUdoaEIsTUFBTSxDQUFDK1ksTUFBdEI7O0FBQ0EsWUFBSWlJLFlBQUosRUFBa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEIsaUNBQWNBLFlBQWQ7QUFBQSxrQkFBUy9ZLENBQVQ7QUFDRSxtQkFBS3JHLEVBQUwsQ0FBUXFHLENBQVIsRUFBVyxLQUFLK0wsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS2dNLFdBQXRCLEVBQW1DL1gsQ0FBbkMsQ0FBWDtBQURGO0FBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHakI7O0FBQ0RnWiw2QkFBcUIsR0FBR2poQixNQUFNLENBQUNnWixVQUEvQjs7QUFDQSxZQUFJaUkscUJBQUosRUFBMkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsa0NBQWNBLHFCQUFkO0FBQUEsa0JBQVNDLENBQVQ7QUFDRSxtQkFBS3RmLEVBQUwsQ0FBUXNmLENBQVIsRUFBVyxLQUFLbE4sS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS21OLFdBQXRCLEVBQW1DRCxDQUFuQyxDQUFYO0FBREY7QUFEeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUcxQjtBQUNGO0FBQ0Y7OztnQ0FDV0UsRyxFQUFLMVksTSxFQUFRQyxZLEVBQWM7QUFDckN5WSxTQUFHLENBQUN2QixJQUFKLEdBQVd1QixHQUFHLENBQUN2QixJQUFKLElBQVksRUFBdkI7QUFDQSxVQUFJQSxJQUFJLEdBQUcsR0FBR1MsTUFBSCxDQUFVYyxHQUFHLENBQUNuTSxFQUFkLEVBQWtCbU0sR0FBRyxDQUFDdkIsSUFBdEIsQ0FBWDtBQUNBLFVBQUksQ0FBQ25YLE1BQUQsSUFBVyxDQUFDQSxNQUFNLENBQUNZLElBQXZCLEVBQTZCdVcsSUFBSSxHQUFHQSxJQUFJLENBQUNTLE1BQUwsQ0FBWTVYLE1BQVosRUFBb0JDLFlBQXBCLENBQVA7QUFDN0IsV0FBS3hILElBQUwsQ0FBVTRlLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JGLElBQXRCO0FBQ0EsVUFBSXVCLEdBQUcsQ0FBQ25CLElBQVIsRUFBYyxPQUFPLElBQVAsQ0FMdUIsQ0FLVjs7QUFDM0IsYUFBTyxLQUFQO0FBQ0Q7OztnQ0FDV2hZLEMsRUFBWTtBQUN0QixVQUFNZ0QsSUFBSSxHQUFHLEtBQUtBLElBQWxCOztBQURzQix3Q0FBTjRVLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUV0QixVQUFJOWEsR0FBRyxHQUFHO0FBQUVrUSxVQUFFLEVBQUVoTixDQUFOO0FBQVM0WCxZQUFJLEVBQUVBO0FBQWYsT0FBVjtBQUNBLFVBQUk1VSxJQUFJLEtBQUssU0FBYixFQUF3QjFLLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQndmLFdBQWhCLENBQTRCamIsR0FBNUIsV0FBdUMsWUFBTSxDQUFFLENBQS9DLEVBQXhCLEtBQ0ssSUFBSWtHLElBQUksS0FBSyxZQUFiLEVBQTJCO0FBQzlCLFlBQU1vVyxPQUFPLEdBQUd4QixJQUFJLENBQUNBLElBQUksQ0FBQ3ZiLE1BQUwsR0FBYyxDQUFmLENBQXBCO0FBQ0EsWUFBSVgsR0FBSjs7QUFDQSxZQUFJMGQsT0FBTyxLQUFLQyxTQUFaLEtBQTBCM2QsR0FBRyxHQUFHMGQsT0FBTyxDQUFDMWQsR0FBeEMsQ0FBSixFQUFrRDtBQUNoRCxjQUFJQSxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUNwQnBELG1CQUFPLENBQUNvSCxJQUFSLENBQWEyWCxLQUFiLENBQW1CO0FBQUVwZixvQkFBTSxFQUFFO0FBQVYsYUFBbkIsRUFBcUNhLElBQXJDLENBQTBDLFVBQUE0RyxJQUFJLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEQsc0NBQWdCQSxJQUFoQjtBQUFBLHNCQUFTaEUsSUFBVDtBQUNFcEQseUJBQU8sQ0FBQ29ILElBQVIsQ0FBYXFZLFdBQWIsQ0FBeUJyYyxJQUFHLENBQUNOLEVBQTdCLEVBQWlDMEIsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqRCxhQUhEO0FBSUQsV0FMRCxNQUtPO0FBQ0x4RSxtQkFBTyxDQUFDb0gsSUFBUixDQUFhcVksV0FBYixDQUF5QnFCLE9BQU8sQ0FBQzFkLEdBQWpDLEVBQXNDb0IsR0FBdEMsV0FBaUQsWUFBTSxDQUFFLENBQXpEO0FBQ0Q7QUFDRixTQVRELE1BU087QUFDTHhFLGlCQUFPLENBQUNvSCxJQUFSLENBQWEyWCxLQUFiLENBQW1CO0FBQUM7QUFBRCxXQUFuQixFQUFnRXZlLElBQWhFLENBQXFFLFVBQUE0RyxJQUFJLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDM0Usb0NBQWdCQSxJQUFoQjtBQUFBLG9CQUFTaEUsS0FBVDtBQUNFcEQsdUJBQU8sQ0FBQ29ILElBQVIsQ0FBYXFZLFdBQWIsQ0FBeUJyYyxLQUFHLENBQUNOLEVBQTdCLEVBQWlDMEIsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7Z0NBQ1drRCxDLEVBQVk7QUFBQSx5Q0FBTjRYLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixVQUFNOWEsR0FBRyxHQUFHO0FBQUVrUSxVQUFFLEVBQUVoTixDQUFOO0FBQVM0WCxZQUFJLEVBQUVBO0FBQWYsT0FBWjtBQUNBLFVBQUksS0FBS2MsSUFBVCxFQUFlLEtBQUtBLElBQUwsQ0FBVVEsV0FBVixDQUFzQnBjLEdBQXRCO0FBQ2hCOzs7a0NBQ2E7QUFDWixVQUFJLENBQUMsS0FBSytULGtCQUFWLEVBQThCO0FBQzVCLGFBQUt5SSxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLeE4sS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS3VOLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTVosSUFBSSxHQUFHLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWFwZ0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCK2dCLE9BQWhCLENBQXdCO0FBQUVqWSxZQUFJLEVBQUUsS0FBS0E7QUFBYixPQUF4QixDQUF0QztBQUNBcVgsVUFBSSxDQUFDYyxZQUFMLENBQWtCOWdCLFdBQWxCLENBQThCO0FBQUEsZUFBTSxNQUFJLENBQUNnZ0IsSUFBTCxHQUFZLElBQWxCO0FBQUEsT0FBOUI7QUFDRDs7OzJDQUNzQmUsRSxFQUFJO0FBQUE7O0FBQ3pCbmhCLGFBQU8sQ0FBQ0MsT0FBUixDQUFnQm1oQixTQUFoQixDQUEwQmhoQixXQUExQixDQUFzQyxVQUFBZ2dCLElBQUksRUFBSTtBQUM1Q0EsWUFBSSxDQUFDQyxTQUFMLENBQWVqZ0IsV0FBZixDQUEyQixNQUFJLENBQUNxVCxLQUFMLENBQVcsTUFBWCxFQUFpQixNQUFJLENBQUM2TSxXQUF0QixDQUEzQjtBQUNBLFNBQUNhLEVBQUQsSUFBT0EsRUFBRSxFQUFUO0FBQ0QsT0FIRDtBQUlEOzs7O0VBeEZ3QjNoQixlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYWtaLE07O1FBQUFBLE07OztBQUVYLGtCQUFZc0gsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmLGdGQUFNQSxHQUFOO0FBRUEsVUFBS3FCLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBRUEsVUFBS3BJLGFBQUwsR0FBcUIvRCw0QkFBaUJ6SCxJQUFqQixDQUFzQnZILFFBQXRCLEdBQWlDLE1BQWpDLEdBQTBDLE9BQS9EO0FBQ0EsVUFBS3dULFlBQUwsR0FBb0J4RSw0QkFBaUJ6SCxJQUFqQixDQUFzQi9HLE9BQXRCLEdBQWdDLE1BQWhDLEdBQXlDLE9BQTdEO0FBQ0EsVUFBSzRhLGNBQUwsR0FBc0JwTSw0QkFBaUJ6SCxJQUFqQixDQUFzQjJGLFNBQXRCLEdBQWtDLE1BQWxDLEdBQTJDLE9BQWpFO0FBUmU7QUFTaEI7Ozs7MkJBRU07QUFBQTs7QUFDTCxhQUFPclQsT0FBTyxDQUFDdVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0JyUyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQStTLE9BQU8sRUFBSTtBQUNqRCxZQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQzdGLElBQXZCLEVBQTZCO0FBQzNCLGdCQUFJLENBQUNDLFFBQUwsQ0FBYzRGLE9BQU8sQ0FBQzdGLElBQXRCO0FBQ0Q7QUFDRixPQUpNLENBQVA7QUFLRDs7OzZCQUVRQSxJLEVBQU07QUFDYixXQUFLLElBQUlyRSxJQUFULElBQWlCcUUsSUFBakIsRUFBdUI7QUFDckIsYUFBSyxVQUFVckUsSUFBZixJQUF1QnFFLElBQUksQ0FBQ3JFLElBQUQsQ0FBSixHQUFhLE1BQWIsR0FBc0IsT0FBN0M7QUFDRDtBQUNGOzs7b0NBRWU7QUFBQTs7QUFDZCxXQUFLc1AsSUFBTCxHQUFZblksSUFBWixDQUFpQjtBQUFBLGVBQU0sTUFBSSxDQUFDSSxJQUFMLENBQVUsNkJBQVYsQ0FBTjtBQUFBLE9BQWpCO0FBQ0Q7OzswQkFFc0I7QUFBQTs7QUFBQSxVQUFuQjRNLEtBQW1CLHVFQUFYLFNBQVc7O0FBQ3JCLFVBQUksS0FBSzhULFlBQVQsRUFBdUI7QUFDckIsZUFBUSxJQUFJM0osT0FBSixDQUFZLFVBQUE2SixDQUFDO0FBQUEsaUJBQUloRCxNQUFNLENBQUNpRCxVQUFQLENBQWtCO0FBQUEsbUJBQU1ELENBQUMsQ0FBQyxNQUFJLENBQUNqaEIsR0FBTCxDQUFTaU4sS0FBVCxDQUFELENBQVA7QUFBQSxXQUFsQixFQUE0QyxFQUE1QyxDQUFKO0FBQUEsU0FBYixDQUFSO0FBQ0Q7O0FBQ0QsVUFBTXNMLElBQUksR0FBRyxLQUFLLFVBQVV0TCxLQUFmLENBQWI7QUFDQSxVQUFJLENBQUNzTCxJQUFMLEVBQVcsTUFBTSxXQUFXdEwsS0FBWCxHQUFtQixpQkFBekI7O0FBRVgsVUFBSSxDQUFDLEtBQUs2VCxXQUFWLEVBQXVCO0FBQ3JCLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxhQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBRUEsZUFBTyxLQUFLMUksSUFBTCxHQUFZblksSUFBWixDQUFpQixZQUFNO0FBQzVCLGdCQUFJLENBQUM4Z0IsWUFBTCxHQUFvQixLQUFwQjtBQUNBLGlCQUFPLE1BQUksQ0FBQyxVQUFVOVQsS0FBWCxDQUFKLEVBQVA7QUFDRCxTQUhNLENBQVA7QUFJRDs7QUFDRCxhQUFPLEtBQUssVUFBVUEsS0FBZixHQUFQO0FBQ0Q7OzttQ0FFYztBQUFBOztBQUNiLGFBQU94TixPQUFPLENBQUN1VCxPQUFSLENBQWdCWCxLQUFoQixDQUFzQnJTLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1ksWUFBWSxFQUFJO0FBQ3RELGVBQU81WSxPQUFPLENBQUN1VCxPQUFSLENBQWdCN0YsSUFBaEIsQ0FBcUJuTixHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQWtoQixhQUFhLEVBQUk7QUFDdEQsV0FBQyxTQUFELEVBQVksTUFBWixFQUFvQnRQLE9BQXBCLENBQTRCLFVBQUE1RSxLQUFLLEVBQUk7QUFDbkNvTCx3QkFBWSxDQUFDcEwsS0FBRCxDQUFaLEdBQXNCb0wsWUFBWSxDQUFDcEwsS0FBRCxDQUFaLElBQXVCa1UsYUFBYSxDQUFDbFUsS0FBRCxDQUExRDtBQUNELFdBRkQ7QUFHQSxjQUFJLE1BQUksQ0FBQzBMLGFBQUwsS0FBdUIsTUFBM0IsRUFBbUNOLFlBQVksQ0FBQ3pTLFFBQWIsR0FBd0J1YixhQUFhLENBQUN2YixRQUF0QztBQUNuQyxpQkFBTyxNQUFJLENBQUN3YixZQUFMLEdBQW9CbmhCLElBQXBCLENBQXlCLFVBQUFtRyxPQUFPLEVBQUk7QUFDekNpUyx3QkFBWSxDQUFDalMsT0FBYixHQUF1QkEsT0FBdkI7QUFDQSxtQkFBT2lTLFlBQVA7QUFDRCxXQUhNLENBQVA7QUFJRCxTQVRNLENBQVA7QUFVRCxPQVhNLENBQVA7QUFZRDs7O3lDQUNvQjtBQUNuQixhQUFPNVksT0FBTyxDQUFDdVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0JyUyxHQUF0QixFQUFQO0FBQ0Q7OzswQ0FDcUI7QUFDcEIsYUFBT1AsT0FBTyxDQUFDdVQsT0FBUixDQUFnQjdGLElBQWhCLENBQXFCbk4sR0FBckIsRUFBUDtBQUNEOzs7bUNBQ2M7QUFDYixhQUFPUCxPQUFPLENBQUN1VCxPQUFSLENBQWdCN0YsSUFBaEIsQ0FBcUJuTixHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQWtoQixhQUFhLEVBQUk7QUFDdEQsWUFBTUUsYUFBYSxHQUFHRixhQUFhLENBQUMvYSxPQUFwQztBQUVBLGVBQU8zRyxPQUFPLENBQUN1VCxPQUFSLENBQWdCWCxLQUFoQixDQUFzQnJTLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1ksWUFBWSxFQUFJO0FBQ3RELGNBQU1pSixZQUFZLEdBQUdqSixZQUFZLENBQUNqUyxPQUFsQztBQUNBLGNBQUksQ0FBQ2liLGFBQUwsRUFBb0IsT0FBT0MsWUFBUDtBQUNwQixjQUFJLENBQUNBLFlBQUwsRUFBbUIsT0FBT0QsYUFBUCxDQUhtQyxDQUt0RDs7QUFDQSxlQUFLLElBQUlsYSxDQUFULElBQWNtYSxZQUFZLENBQUMvYSxPQUEzQjtBQUFvQzhhLHlCQUFhLENBQUM5YSxPQUFkLENBQXNCWSxDQUF0QixJQUEyQm1hLFlBQVksQ0FBQy9hLE9BQWIsQ0FBcUJZLENBQXJCLENBQTNCO0FBQXBDOztBQUVBLGlCQUFPa2EsYUFBUDtBQUNELFNBVE0sQ0FBUDtBQVVELE9BYk0sQ0FBUDtBQWNEOzs7b0NBQ2U7QUFDZCxhQUFPNWhCLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0IsS0FBSzJGLGFBQXJCLEVBQW9DM1ksR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUErUyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDcE4sUUFBUixJQUFvQmdQLDRCQUFpQmhQLFFBQXpDO0FBQUEsT0FBdEQsQ0FBUDtBQUNEOzs7Z0NBQ1c7QUFDVixhQUFPbkcsT0FBTyxDQUFDdVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0JyUyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQW9ZLFlBQVksRUFBSTtBQUN0RCxZQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDM0UsSUFBbkMsRUFBeUMsT0FBTyxFQUFQO0FBQ3pDLGVBQU8yRSxZQUFZLENBQUMzRSxJQUFwQjtBQUNELE9BSE0sQ0FBUDtBQUlEOzs7bUNBQ2M7QUFDYixhQUFPalUsT0FBTyxDQUFDdVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0JyUyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQW9ZLFlBQVksRUFBSTtBQUN0RCxZQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDaFosT0FBbkMsRUFBNEM7QUFDMUMsaUJBQU9JLE9BQU8sQ0FBQ3VULE9BQVIsQ0FBZ0I3RixJQUFoQixDQUFxQm5OLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBa2hCLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDOWhCLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT2daLFlBQVksQ0FBQ2haLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCSixlIiwiZmlsZSI6ImJhY2tncm91bmQvYmFja2dyb3VuZC53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFja2dyb3VuZC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi4vaWNvbnMvb24xNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24xOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb242NC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy90bTQ4LnBuZydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkFHRSBmcm9tICcuL3N0b3JhZ2UnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9lcnJvci1sb2dnaW5nJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlcidcclxuaW1wb3J0IF9OT1RJRklDQVRJT05TIGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgX1RBQlMgZnJvbSAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCBfV0lORE9XUyBmcm9tICcuL21vZHVsZXMvd2luZG93cydcclxuaW1wb3J0IF9TSURFQkFSUyBmcm9tICcuL21vZHVsZXMvc2lkZWJhcnMnXHJcbmltcG9ydCBfTkFNRVIgZnJvbSAnLi9tb2R1bGVzL25hbWVyJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dC1tZW51J1xyXG5pbXBvcnQgX1BBR0VBQ1RJT04gZnJvbSAnLi9tb2R1bGVzL3BhZ2UtYWN0aW9uJ1xyXG4vL2ltcG9ydCBfSURCIGZyb20gJy4vbW9kdWxlcy9pbmRleGVkZGInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL3N0b3JlLW1hbmFnZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3RvZ2dsZU9uSW1wb3J0JyxcclxuICAgICAgJ2luaXRpYWxpemVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnbWlncmF0ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdjaGVja2VkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAndG9nZ2xlOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnRiYnBvd2VyLXNldHRpbmdzJzogJ3NldFRCQkFjdGlvbidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmU6IHRydWUsXHJcbiAgdmVyc2lvbjogJycsXHJcbiAgbG9hZFJlYXNvbjogJycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFZlcnNpb24gPSB0aGlzLnZlcnNpb24gPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgICBpZiAoIXZlcnNpb24gfHwgdmVyc2lvbiAhPT0gY3VycmVudFZlcnNpb24pIHtcclxuICAgICAgICAgIGNvbnN0IGxvYWRSZWFzb24gPSB0aGlzLmxvYWRSZWFzb24gPSBkZXRhaWxzLnJlYXNvbjtcclxuICAgICAgICAgIGNvbnN0IHByZXZWZXJzaW9uID0gZGV0YWlscy5wcmV2aW91c1ZlcnNpb24gfHwgJzInO1xyXG4gICAgICAgICAgaWYgKGxvYWRSZWFzb24gJiYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnIHx8IGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGxvYWRSZWFzb24gKyAnOmFwcCcsIHByZXZWZXJzaW9uLCBsb2FkUmVhc29uKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCd2ZXJzaW9uJywgdGhpcy52ZXJzaW9uKTtcclxuXHJcbiAgICAvL19JREIoKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG4gICAgX1NJREVCQVJTKCk7XHJcbiAgICBfUEFHRUFDVElPTigpO1xyXG5cclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5hY3RpdmF0ZSh0cnVlKSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzdGFydGVkOmFwcCcsIHRoaXMudmVyc2lvbiwgdGhpcy5sb2FkUmVhc29uKSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShhY3RpdmF0ZSkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBhY3RpdmF0ZTtcclxuICAgIHRoaXMudG9nZ2xlQnJvd3NlckFjdGlvbkljb24oYWN0aXZlKTtcclxuICAgIHRoaXMuc2V0VEJCQWN0aW9uKCk7XHJcbiAgfSxcclxuICB0b2dnbGUoKSB7XHJcbiAgICBsZXQgbW9kZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgIHRoaXMuYWN0aXZhdGUobW9kZSk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6YWRkb24nLCBtb2RlKTtcclxuICB9LFxyXG4gIHRvZ2dsZU9uSW1wb3J0KCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQnJvd3NlckFjdGlvbkljb24ob24pIHtcclxuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgcGF0aDogb24gPyB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vbjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vbjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vbjMyLnBuZydcclxuICAgICAgfSA6IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29mZjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vZmYxOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb2ZmMzIucG5nJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldFRCQkFjdGlvbihhZGQpIHtcclxuICAgIGlmICh0eXBlb2YgYWRkID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgaWYgKGFkZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3RiYnBvd2VyJykudGhlbihlbmFibGVkID0+IHtcclxuICAgICAgICBpZiAoZW5hYmxlZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZGRUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgdGJiSGFuZGxlciA9IHRoaXMudGJiSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJycgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGJiSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmVUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKHRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJ2NvbnRlbnQvdGJiLW1lbnUvdGJiLW1lbnUuaHRtbCcgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQucmVtb3ZlTGlzdGVuZXIodGhpcy50YmJIYW5kbGVyKTtcclxuICAgICAgdGhpcy50YmJIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnOiAndXBkYXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIG06IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgdzogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICBkOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIGI6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgJy1iJzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBuOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIHNiOiB7IGNvbnRleHRzOiBbJ2FsbCcsICd0YWInXSB9LFxyXG4gICAgICBjOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBbXSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3R4XycgKyAoaSA9PT0gJy1iJyA/ICdkYicgOiBpKSk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKGluZm9zLCB0YWIpID0+IHRoaXMub25DbGljayhpbmZvcywgdGFiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoaWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5jcmVhdGUodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlKGlkKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQuc3BsaWNlKHRoaXMuY3JlYXRlZC5pbmRleE9mKGlkKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZShvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVBbGwoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2hvcnRjdXRzJykudGhlbihzaG9ydGN1dHMgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgaWYgKHNob3J0Y3V0c1tpXVsyXSkgdGhpcy5jcmVhdGUoaSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGljayhpbmZvcywgdGFiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gaW5mb3MubWVudUl0ZW1JZDtcclxuICAgICAgaWYgKGlkID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCBpbmZvcy5zZWxlY3Rpb25UZXh0KTtcclxuICAgICAgZWxzZSBpZiAoaWQgPT09ICdzYicpIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5vcGVuKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCdjdHg6JyArIGlkLCBudWxsLCBudWxsLCB7IHRhYjogdGFiLmlkIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0xPR19LRVlTIGZyb20gJy4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZXJyb3InOiAnbG9nJyxcclxuICAgICAgJ3dhcm5pbmcnOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6ZGVsZXRlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcyc6ICdvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzJyxcclxuICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAnZXJyb3I6aW1wb3J0JzogJ2xvZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnOiAnbG9nJyxcclxuICAgICAgJ2NsZWFyOmxvZ3MnOiAnY2xlYXInLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCc6ICdvbkNTU0luamVjdGlvbkZhaWx1cmUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbG9nKGVycm9yLCByZXBvcnQpIHtcclxuICAgIGxldCBsb2csIG1zZztcclxuICAgIGlmIChlcnJvci50aW1lKSB7XHJcbiAgICAgIGxvZyA9IFtlcnJvci50aW1lLCBlcnJvci5tZXNzYWdlICsgJyBbJyArIGVycm9yLmxvY2F0aW9uICsgJ10nXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZyA9IFsobmV3IERhdGUoKS5nZXRUaW1lKCkpLCBfTE9HX0tFWVNbZXJyb3JdIHx8IGVycm9yXTtcclxuICAgICAgaWYgKHJlcG9ydCAmJiB0eXBlb2YgcmVwb3J0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGxvZy5wdXNoKHJlcG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgbG9nKS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzIGxvZ2dlZDplcnJvcicsIGxvZykpO1xyXG4gIH0sXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIHsgY2xlYXI6IHRydWUgfSkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncycpKTtcclxuICB9LFxyXG4gIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyk7XHJcbiAgfSxcclxuICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFJlc3RvcmF0aW9uKHJlcG9ydCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScsIHJlcG9ydCk7XHJcbiAgfSxcclxuICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfdXJsJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFBCTSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3BibScpO1xyXG4gIH0sXHJcbiAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2pzX2luamVjdGlvbl9mYWlsdXJlJyk7XHJcbiAgfSxcclxuICBvbkNTU0luamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnY3NzX2luamVjdGlvbl9mYWlsdXJlJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2hhbmdlZDp1cmwnOiAnb25VUkxDaGFuZ2UnLFxyXG4gICAgICAnY29tcGxldGVkOnRhYic6ICdvblRhYkNvbXBsZXRlZCcsXHJcbiAgICAgICdjbGlja2VkOnBhZ2UtYWN0aW9uJzogJ2hhbmRsZUluamVjdGlvbnMnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nOiAnb25TYXZlTmV3UmVxdWVzdCcsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ29uVXBkYXRlUmVxdWVzdCcsXHJcbiAgICAgICduYW1lOmVudHJ5Pyc6ICdvbk5hbWluZ1JlcXVlc3QnLFxyXG4gICAgICAnb3BlbmVkOmVudHJ5JzogJ3RlbXBTYXZlRW50cnlNZXRhRGF0YSdcclxuICAgIH1cclxuICB9LFxyXG4gIHF1ZXVlZEZvclRhYkNvbXBsZXRlZDoge30sXHJcbiAgaW5qZWN0ZWRTY3JpcHRzOiB7fSxcclxuICByZWNlbnRseU9wZW5lZEVudHJ5OiBudWxsLFxyXG5cclxuICBvblRhYkNvbXBsZXRlZCh0YWJJZCkge1xyXG4gICAgaWYgKHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSkge1xyXG4gICAgICB0aGlzLmF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pO1xyXG4gICAgICBkZWxldGUgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uVVJMQ2hhbmdlKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgIT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdID0gY2hhbmdlZC51cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBjaGFuZ2VkLnVybCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIG5ld1VybCwgbm9SZWxvYWQpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmFkZG9uLmF1dG9jcykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGhhbmRsZUluamVjdGlvbnModGFiSWQsIG5ld1VybCwgbm9SZWxvYWQpIHtcclxuICAgIGNvbnN0IHJlZ2lzdGVyZWQgPSB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF07XHJcbiAgICBjb25zdCBzYW1lSGFzaGxlc3NVcmxzID0gcmVnaXN0ZXJlZCAmJiBfSEFTSExFU1MocmVnaXN0ZXJlZC51cmwpID09PSBfSEFTSExFU1MobmV3VXJsKTtcclxuICAgIGNvbnN0IHJlbG9hZGVkID0gcmVnaXN0ZXJlZCAmJiAhbm9SZWxvYWQ7XHJcblxyXG4gICAgaWYgKCFyZWdpc3RlcmVkIHx8IHJlbG9hZGVkKSB7XHJcblxyXG4gICAgICB0aGlzLmluamVjdENvbnRlbnRTY3JpcHQodGFiSWQsIG5ld1VybCkudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIG5ld1VybCk7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5maWx0ZXJNYXRjaGVzKG1hdGNoZXMpO1xyXG5cclxuICAgICAgICAgIGlmIChlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZW50cmllczpmb3VuZCcsIHtcclxuICAgICAgICAgICAgICBlbnRyaWVzLFxyXG4gICAgICAgICAgICAgIHJlY2VudGx5T3BlbmVkRW50cnk6IHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSxcclxuICAgICAgICAgICAgICBsb2NrZWQ6ICEhbWF0Y2hlcy5sb2NrZWRFbnRyaWVzLmxlbmd0aFxyXG4gICAgICAgICAgICB9LCB7IHRhYjogdGFiSWQgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNhbWVIYXNobGVzc1VybHMgJiYgcmVnaXN0ZXJlZC5lbnRyeSAmJiByZWdpc3RlcmVkLmVudHJ5Lmhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdoYXNoOmNoYW5nZWQnLCBuZXdVcmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdENvbnRlbnRTY3JpcHQodGFiSWQsIHVybCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy5leGVjdXRlU2NyaXB0KHRhYklkLCB7XHJcbiAgICAgIGZpbGU6ICcuLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMnLFxyXG4gICAgICBhbGxGcmFtZXM6IHRydWUsXHJcbiAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfaWRsZSdcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF0gPSB7IHVybCB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0Q1NTKHRhYklkKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW1zZy5pbmNsdWRlcygnTWlzc2luZyBob3N0IHBlcm1pc3Npb24gZm9yIHRoZSB0YWInKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbnNlcnRDU1ModGFiSWQpIHtcclxuICAgIGJyb3dzZXIudGFicy5pbnNlcnRDU1ModGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi5jc3MnLFxyXG4gICAgICBhbGxGcmFtZXM6IHRydWVcclxuICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zdCBtc2cgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCFtc2cuaW5jbHVkZXMoJ01pc3NpbmcgaG9zdCBwZXJtaXNzaW9uIGZvciB0aGUgdGFiJykpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBmaW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIHVybCkge1xyXG4gICAgY29uc3QgaGFzaGxlc3NQYWdlVXJsID0gX0hBU0hMRVNTKHVybCk7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgbGV0IGVudHJ5LCBwYWdlVXJsLCBlbnRyeVVybDtcclxuXHJcbiAgICBmb3IgKGxldCBlIGluIGVudHJpZXMpIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2VdO1xyXG4gICAgICBwYWdlVXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IHVybCA6IGhhc2hsZXNzUGFnZVVybDtcclxuICAgICAgZW50cnlVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gZW50cnkudXJsIDogX0hBU0hMRVNTKGVudHJ5LnVybCk7XHJcblxyXG4gICAgICBpZiAocGFnZVVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICBpZiAoZW50cnkubG9ja2VkKSBsb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIGVsc2Ugbm9uTG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbG9ja2VkRW50cmllcywgbm9uTG9ja2VkRW50cmllcyB9O1xyXG4gIH0sXHJcblxyXG4gIGZpbHRlck1hdGNoZXMobWF0Y2hlcykge1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IG1hdGNoZXMubG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLm5vbkxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzQ291bnQgPSBsb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXNDb3VudCA9IG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgbGV0IGVudHJpZXM7XHJcblxyXG4gICAgaWYgKGxvY2tlZEVudHJpZXNDb3VudCAmJiBub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIGVudHJpZXMgPSBsb2NrZWRFbnRyaWVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIGVudHJpZXMgPSBbbm9uTG9ja2VkRW50cmllc1swXV07XHJcbiAgICAgIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kJywgZW50cmllc1swXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBsb2NrZWRFbnRyaWVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG4gIH0sXHJcblxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbXBvcnQnOiAnb25GYWlsZWRJbXBvcnQnLFxyXG4gICAgICAgICdlcnJvcjppbXBvcnQnOiAnb25JbXBvcnRFcnJvcicsXHJcbiAgICAgICAgJ2ltcG9ydGVkOnN0b3JhZ2UnOiAnb25JbXBvcnRTdWNjZXNzJyxcclxuICAgICAgICAnZXJyb3InOiAnb25FcnJvcicsXHJcbiAgICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnkoY29uZGl0aW9uLCBtZXNzYWdlLCB0eXBlKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKHNldHRpbmdzKSkge1xyXG4gICAgICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGV4dG1hcmtlcjogJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHR5cGUpLFxyXG4gICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uVXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdpY29ucy90bTQ4LnBuZycpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVkRW50cnkoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZWRfZW50cnknKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MucGJtTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9wYm0nKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV91cmwnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkSW1wb3J0KGVycm9yMSwgZXJyb3IyKSB7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UxID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IxKTtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTIgPSBlcnJvcjIgPyAnXFxuXFxuJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMikgOiAnJztcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9mYWlsdXJlJywgZXJyTWVzc2FnZTEgKyBlcnJNZXNzYWdlMiksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydEVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfd2FybmluZycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0U3VjY2VzcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5zdWNjZXNzTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yKGVycm9yLCBuYW1lKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IsIG5hbWUpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2pzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNTU0luamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3NzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzaG93J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnBhZ2VBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBhZ2UtYWN0aW9uJywgdGFiLmlkLCB0YWIudXJsKTtcclxuICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uaGlkZSh0YWIuaWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyh0YWJJZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5zaG93KHRhYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9HRVRfQUNUSVZFX1RBQiwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FjdGl2YXRlZDp0YWInOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2VudHJ5OmZvdW5kJzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAndXBkYXRlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6J3NlbmRFbnRyeScsXHJcbiAgICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnOiAnc2VuZE9yZGVyZWRNYXJrcydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuXHJcbiAgICBzZXRQYW5lbCh0YWJJZCwgdXJsKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuKCkudGhlbihvcGVuID0+IHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9IEFycmF5LmlzQXJyYXkoZW50cnkpID8gIWVudHJ5WzBdLmhhc2hTZW5zaXRpdmUgOiAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZyc6ICd0b2dnbGVIYXNoT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnOiAndG9nZ2xlUHJpdlNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJzogJ3RvZ2dsZU5vdGVPcHQnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAndG9nZ2xlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJzogJ3RvZ2dsZU5vdGlmaWNhdGlvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnOiAndG9nZ2xlVEJCUG93ZXJTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnOiAnY2hhbmdlU29ydE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJzogJ2NoYW5nZVZpZXdPcHQnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZyc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcblxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInOiAncmVtb3ZlQ3VzdG9tTWFya2VyJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJzogJ2FkZEN1c3RvbU1hcmtlcicsXHJcblxyXG4gICAgICAnbmFtZWQ6ZW50cnknOiAnc2F2ZUVudHJ5JyxcclxuICAgICAgJ3JlbmFtZWQ6ZW50cnknOiAnc2F2ZU5ld05hbWUnLFxyXG4gICAgICAnZ3JhbnRlZDp1cGRhdGUtZW50cnknOiAndXBkYXRlRW50cnlPblBhZ2VBY3Rpb24nLFxyXG4gICAgICAnZGVsZXRlOmVudHJpZXMnOiAnZGVsZXRlRW50cmllcycsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICd1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY2xlYW46ZW50cmllcyc6ICdjbGVhbkVudHJpZXMnLFxyXG4gICAgICAnc3luYzplbnRyeSc6ICdzeW5jRW50cnknLFxyXG4gICAgICAndGFnOmVudHJpZXMnOiAndGFnRW50cmllcycsXHJcbiAgICAgICdyZW1vdmU6dGFnJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICdhZGQ6dGFnJzogJ2FkZFRhZycsXHJcblxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYic6ICdjaGFuZ2VTQlNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSc6ICdjaGFuZ2VUaGVtZVNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJzogJ3VwZGF0ZVBhZ2VOb3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZU9uQ2hhbmdlZFN5bmM6IGZhbHNlLFxyXG5cclxuICAvLyBBRERPTiBNRVRIT0RTXHJcbiAgc2F2ZUFjdGl2YXRpb25TdGF0ZShhY3RpdmUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmFjdGl2ZSA9IGFjdGl2ZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTWU5DIE1FVEhPRFNcclxuICB0b2dnbGVTeW5jKGZpZWxkLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIGZ1bmN0aW9uKHN5bmMpIHtcclxuICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgIHRoaXMuc2V0QXJlYXMoc3luYyk7XHJcbiAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgfSwgJ2xvY2FsJylcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBzeW5jID0+IHtcclxuICAgICAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICAgICAgfSwgJ3N5bmMnKVxyXG5cclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6dG9nZ2xlLXN5bmMnLCBmaWVsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU0VUVElOR1MgTUVUSE9EU1xyXG4gIHVwZGF0ZVNldHRpbmdzKHVwZGF0ZXIsIHNldHRpbmcsIGVycm9yKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgdXBkYXRlcilcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOicgKyBzZXR0aW5nICsgJy1zZXR0aW5ncycpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBpZiAoZXJyb3IpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xyXG4gIH0sXHJcbiAgYWRkQ3VzdG9tTWFya2VyKGtleSwgc3R5bGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gIHsgc3R5bGUgfTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IG1hcmtlci5zdHlsZS5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUF1dG9Ob3RlU2V0dGluZyhrZXksIGF1dG9ub3RlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5hdXRvbm90ZSA9IGF1dG9ub3RlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvbm90ZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3RvZ2dsZV9hdXRvbm90ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNYXJrTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPSBtZXRob2Q7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmstbWV0aG9kJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbWFya19tZXRob2QnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2hvcnRjdXRTZXR0aW5nKGtleSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzFdID0gc3RhdHVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX190b2dnbGVfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2hvcnRjdXRTZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMF0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU29ydE9wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzb3J0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVZpZXdPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS52aWV3ID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ZpZXcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ3VzdG9tU2VhcmNoKHZhbHVlcykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCA9IHZhbHVlczsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3VzdG9tLXNlYXJjaCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zZWFyY2gnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ291bnRQZXJQYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkucHAgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY291bnQtcGVyLXBhZ2UnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQ3RtU2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzJdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N0bScsXHJcbiAgICAgICdlcnJvcl9zYXZlX2N0bSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXRPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaW1tdXQgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2ltbXV0b3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRHJvcExvc3Nlc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdkcm9wbG9zc2Vzb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSGFzaE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdoYXNob3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVByaXZTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ByaXZzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfcHJpdidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VOYW1pbmdPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkubmFtaW5nID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICduYW1pbmcnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9uYW1pbmcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICBzd2l0Y2hRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RpZmljYXRpb25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNaXNjU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWlzYycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVUQkJQb3dlclNldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3RiYnBvd2VyJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUF1dG9jc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvY3MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvY3MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU0JTZXR0aW5ncyh0YWIsIHVuZm9sZGVkKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50YWJzW3RhYl0udW5mb2xkZWQgPSB1bmZvbGRlZDsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG4gIGNoYW5nZVRoZW1lU2V0dGluZ3ModGhlbWUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRoZW1lID0gdGhlbWU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSElTVE9SWSBNRVRIT0RTXHJcbiAgY2xlYW5FbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGkgPSBuYW1lcy5sZW5ndGgsIG5hbWU7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllc1tuYW1lXSkgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ2xvY2FsJykgeyB0aGlzLmVtaXQoJ2NsZWFuZWQ6ZW50cmllcycpOyB9fSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2NsZWFuX2hpc3RvcnknKSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5jbGVhbkVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSk7XHJcbiAgfSxcclxuICBzYXZlRW50cnkoZW50cnkpIHtcclxuICAgIGVudHJ5Lmxvc3QgPSBbXTtcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCdzYXZlZDplbnRyeScsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5JywgJ2Vycm9yX3NhdmVfZW50cnknKSk7XHJcbiAgfSxcclxuICBzYXZlTmV3TmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV0pO1xyXG4gICAgICBlbnRyeS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdID0gZW50cnk7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1uYW1lJywgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdLCBvbGROYW1lKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgYXJlYSkge1xyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgY29uc3QgcmVjZWl2ZWRDb21wbGV0ZUVudHJ5ID0gISFlbnRyeS51cmw7XHJcbiAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAocmVjZWl2ZWRDb21wbGV0ZUVudHJ5KSB7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkuZW50cmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGVudHJ5LnN5bmNlZDtcclxuICAgICAgICAgIGZvciAobGV0IGUgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5Lmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdW2VdID0gZW50cnlbZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmICghZm91bmQpIHsgdGhpcy51cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgZW50cnkuc3luY2VkID8gJ2xvY2FsJyA6ICdzeW5jJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1vbi1zYXZlJywgZW50cnkpKTtcclxuICB9LFxyXG4gIGRlbGV0ZUVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzICYmIE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHVybCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS51cmw7XHJcbiAgICAgICAgICBoYXNoU2Vuc2l0aXZlID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyeScsIG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3MgPSBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzdG9yZWRNYXJrc0lEcyA9IFtdO1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzSURzID0gW107XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJlc3RvcmVkTWFya3MuZm9yRWFjaChtYXJrID0+IHJlc3RvcmVkTWFya3NJRHMucHVzaChtYXJrLmlkKSk7XHJcblxyXG4gICAgICAgICAgbGV0IGwgPSBvbGRMb3N0TWFya3MubGVuZ3RoLCBpZDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gb2xkTG9zdE1hcmtzW2xdLmlkO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNYXJrc0lEcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrc0lEcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvc3RNYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9sZExvc3RNYXJrc0lEcy5pbmNsdWRlcyhtYXJrLmlkKSkgb2xkTG9zdE1hcmtzLnB1c2gobWFyayk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIGNvbnN0IGFyZWFfMSA9IHZhbCA/ICdsb2NhbCcgOiAnc3luYyc7XHJcbiAgICBjb25zdCBhcmVhXzIgPSB2YWwgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGxldCBlbnRyeTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYV8xKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhXzIpXHJcblxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXN5bmMnLCBlbnRyeSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnN5bmMtZW50cnknLCBuYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGFnRW50cmllcyhuYW1lcywgdGFnKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgbmFtZXMuc3luYy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sICdzeW5jJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgICAgICBuYW1lcy5sb2NhbC5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgJ2xvY2FsJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZEVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnKTtcclxuICAgICAgaWYgKHN0b3JlZEVudHJ5LnRhZykge1xyXG4gICAgICAgIHN0b3JlZEVudHJ5LnRhZyA9IHN0b3JlZEVudHJ5LnRhZ1xyXG4gICAgICAgICAgLnJlcGxhY2UocngsICcgJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzfFxccyQvLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9LywgJyAnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgdGhpcy5hZGRUYWdUb0VudHJ5KGhpc3RvcnkuZW50cmllc1tuYW1lXSwgdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIGFkZFRhZ1RvRW50cnkoZW50cnksIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIGVudHJ5LnRhZyA9ICcnO1xyXG4gICAgZWxzZSBpZiAoIWVudHJ5LnRhZykgZW50cnkudGFnID0gdGFnO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcsICdnJyk7XHJcbiAgICAgIGlmIChlbnRyeS50YWcuc2VhcmNoKHJ4KSA9PT0gLTEpIHtcclxuICAgICAgICBlbnRyeS50YWcgKz0gJyAnICsgdGFnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcblxyXG4gIC8vIFBBR0UgTk9URSBNRVRIT0RTXHJcbiAgdXBkYXRlUGFnZU5vdGVzKHVybCwgbm90ZXMpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgncGFnZW5vdGVzJywgcGFnZW5vdGVzID0+IHtcclxuICAgICAgcGFnZW5vdGVzW3VybF0gPSBub3RlcztcclxuICAgICAgcmV0dXJuIHBhZ2Vub3RlcztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMub25TdG9yYWdlQ2hhbmdlZCkpO1xyXG4gIH0sXHJcbiAgb25TdG9yYWdlQ2hhbmdlZChjaGFuZ2VkSXRlbSkge1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnNldHRpbmdzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c2V0dGluZ3MnKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5oaXN0b3J5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6aGlzdG9yeScpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnBhZ2Vub3RlcykgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Vub3RlcycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGVUYWJFdmVudEhhbmRsZXJzJyxcclxuICAgICAgICAvLydzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICBsb2dzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWxvZ3MnLFxyXG4gICAgICBleHBvcnQ6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9ZXhwb3J0JyxcclxuICAgICAgc3luYzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zeW5jJ1xyXG4gICAgfSxcclxuICAgIHRhYkV2ZW50SGFuZGxlcnM6IHtcclxuICAgICAgb25BY3RpdmF0ZWQ6IG51bGwsXHJcbiAgICAgIG9uVXBkYXRlZDogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMudG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhtb2RlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25BY3RpdmF0ZWQgPSB0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25BY3RpdmF0ZWQgPSB0aGlzLm9uQWN0aXZhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKG9uQWN0aXZhdGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25VcGRhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25VcGRhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCA9IHRoaXMub25VcGRhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihvblVwZGF0ZWQsIHsgcHJvcGVydGllczogWydzdGF0dXMnXSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIFsnb25BY3RpdmF0ZWQnLCAnb25VcGRhdGVkJ10uZm9yRWFjaChldiA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFic1tldl0ucmVtb3ZlTGlzdGVuZXIodGhpcy50YWJFdmVudEhhbmRsZXJzW2V2XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YWJFdmVudEhhbmRsZXJzID0ge307XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfSxcclxuICAgIG9uQWN0aXZhdGVkKHRhYikge1xyXG4gICAgICB0aGlzLmVtaXQoJ2FjdGl2YXRlZDp0YWInLCB0YWIudGFiSWQsICh0YWIudXJsIHx8ICcnKSk7XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGVkKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VkLnVybCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDp1cmwnLCB0YWJJZCwgY2hhbmdlZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZDp0YWInLCB0YWJJZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbih1cmxzLCBuYW1lcykge1xyXG4gICAgICB1cmxzID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnID8gW3VybHNdIDogdXJscztcclxuICAgICAgbmFtZXMgPSB0eXBlb2YgbmFtZXMgPT09ICdzdHJpbmcnID8gW25hbWVzXSA6IG5hbWVzO1xyXG4gICAgICBsZXQgbCA9IHVybHMubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICB1cmw7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAoZnVuY3Rpb24oc2VsZiwgbCkge1xyXG4gICAgICAgICAgdXJsID0gdXJsc1tsXTtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IHVybHNbbF0gfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlY3VyaXR5V2FybmluZykgc2VsZi5lbWl0KCdmYWlsZWQ6b3Blbi10YWInKTtcclxuICAgICAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5hbWVzKSBzZWxmLmVtaXQoJ29wZW5lZDplbnRyeScsIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWVzW2xdIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSh0aGlzLCBsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5BZGRvblBhZ2UoaWQpIHtcclxuICAgICAgdGhpcy5vcGVuKHRoaXMudXJsc1tpZF0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0UGFnZSh2ZXJzaW9uLCBsb2FkUmVhc29uKSB7XHJcbiAgICAgIGlmIChsb2FkUmVhc29uICYmIGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJyB8fCBsb2FkUmVhc29uID09PSAndXBkYXRlJykgdGhpcy5vcGVuQWRkb25QYWdlKCduZXdzJyk7XHJcbiAgICB9LFxyXG4gICAgb3BlblNlYXJjaCh3b3JkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgY3VzdG9tID0gc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2gsIHVybDtcclxuICAgICAgICBpZiAoY3VzdG9tKSB1cmwgPSAnaHR0cHM6Ly8nICsgY3VzdG9tWzBdICsgd29yZCArIGN1c3RvbVsxXTtcclxuICAgICAgICBlbHNlIHVybCA9ICdodHRwczovLycgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nICsgd29yZDtcclxuICAgICAgICB0aGlzLm9wZW4odXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2luc3RhbGw6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnY2hlY2s6c3RvcmFnZSc6ICdjaGVja1N0b3JhZ2VPblN0YXJ0JyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJzogJ2ltcG9ydFN0b3JhZ2UnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3M7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykge1xyXG4gICAgICAgIHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gc2V0dGluZ3MuaGlzdG9yeTtcclxuICAgICAgICBjb25zdCBtaXNjID0gc2V0dGluZ3MubWlzYztcclxuICAgICAgICBjb25zdCBub3RlVHlwZXMgPSAncGJtTm90ZSBjaGFuZ2VkTm90ZSBlcnJvck5vdGUgc3VjY2Vzc05vdGUgdmlwTm90ZScuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMubikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLm4gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLm47XHJcbiAgICAgICAgICBtaXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgICBtaXNjLm5vdGVvbmNsaWNrID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmFycm93dXApIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd3VwID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd3VwO1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93ZG93biA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3dkb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5kWzBdKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuZFswXSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuc2IpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuc2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmNtKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuY20gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmNtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc2Nbbm90ZVR5cGVdICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RlcGxhaW52aWV3ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXBsYWludmlldyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5tYXJrbWV0aG9kKSB7XHJcbiAgICAgICAgICBtaXNjLm1hcmttZXRob2QgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MudGJicG93ZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy50YmJwb3dlciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zYikge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2I7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc2IudGhlbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRhYnMudGhlbWVzID0gZGVmYXVsdFNldHRpbmdzLnNiLnRhYnMudGhlbWVzO1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGhlbWUgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGhlbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmF1dG9jcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeS1vbi1yZXN0b3JhdGlvbicsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJyxcclxuICAgICAgJ3VwZGF0ZWQ6bG9ncycsXHJcbiAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpzYXZlb3B0LXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnLFxyXG4gICAgICAnZW50cmllczpmb3VuZCcsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cmllcycsXHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncycsXHJcbiAgICAgICdpbXBvcnRlZDpoaXN0b3J5JyxcclxuICAgICAgJ2N0eDptJyxcclxuICAgICAgJ2N0eDpkJyxcclxuICAgICAgJ2N0eDpiJyxcclxuICAgICAgJ2N0eDotYicsXHJcbiAgICAgICdjdHg6bicsXHJcbiAgICAgICdjdHg6YycsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ2NoYW5nZWQ6dXJsJ1xyXG4gICAgXSxcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAnZW50cnk6Zm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6b3JkZXJlZC1tYXJrcydcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfU1RPUkV9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG5cclxuICBpbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMucmVtb3ZlKCdsb2dzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBzeW5jID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zeW5jID8gbG9jYWxTdG9yYWdlLnN5bmMgOiBfREVGQVVMVF9TVE9SQUdFLnN5bmM7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZXRfc3luYyhzeW5jKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldChmaWVsZCwgdmFsKSB7XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX3NldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuICAgIHJldHVybiB0aGlzWydfc2V0XycgKyBmaWVsZF0odmFsKTtcclxuICB9LFxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlKC4uLmFyZ3MpO1xyXG4gIH0sXHJcblxyXG4gIGlzRW1wdHkoYXJlYSA9ICdzeW5jJykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgKCFPYmplY3Qua2V5cyhzdG9yYWdlKS5sZW5ndGggJiYgc3RvcmFnZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ByaXZzYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90YmJwb3dlcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG5cclxuICBfc2V0X3N0b3JhZ2UoYXJlYSA9IG51bGwpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXRfc2V0dGluZ3MoYXJlYSkudGhlbigoKSA9PiB0aGlzLl9zZXRfaGlzdG9yeShhcmVhKSk7XHJcbiAgfSxcclxuICBfc2V0X3N5bmMoc3luYykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBzeW5jOiBzeW5jIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHN5bmM6IHN5bmMgfSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0QXJlYXMoc3luYykpO1xyXG4gIH0sXHJcbiAgX3NldF9zZXR0aW5ncyhhcmVhID0gdGhpcy5hcmVhX3NldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBzZXR0aW5nczogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncykgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfaGlzdG9yeShhcmVhID0gdGhpcy5hcmVhX2hpc3RvcnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgaGlzdG9yeTogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5oaXN0b3J5KSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF92ZXJzaW9uKHZlcnNpb24pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pKTtcclxuICB9LFxyXG4gIF9zZXRfbG9nKGxvZykge1xyXG4gICAgaWYgKGxvZy5jbGVhcikge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IFtdIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldF9sb2dzKCkudGhlbihsb2dzID0+IHtcclxuICAgICAgbG9ncy5wdXNoKGxvZyk7XHJcbiAgICAgIGlmIChsb2dzLmxlbmd0aCA+IF9HTE9CQUxfU0VUVElOR1MuTUFYX0xPR19FTlRSSUVTKSBsb2dzLnNoaWZ0KCk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogbG9ncyB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9lbnRyeShlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgbGV0IGhpc3RvcnkgPSBzdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKGVudHJ5Lm5hbWUpKSByZXR1cm4gdGhpcy5fdXBkYXRlX2VudHJ5KGVudHJ5KTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLnNldCh7IGhpc3Rvcnk6IGhpc3RvcnkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfdXBkYXRlKGZpZWxkLCB1cGRhdGVyLCBhcmVhID0gdGhpc1snYXJlYV8nICsgZmllbGRdKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlW2ZpZWxkXSkge1xyXG4gICAgICAgICAgc3RvcmFnZVtmaWVsZF0gPSBfQ09QWShfREVGQVVMVF9TVE9SQUdFW2ZpZWxkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xyXG4gICAgICAgIHVwZGF0ZVtmaWVsZF0gPSB1cGRhdGVyLmNhbGwodGhpcywgc3RvcmFnZVtmaWVsZF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh1cGRhdGUpLnRoZW4oKCkgPT4gdXBkYXRlW2ZpZWxkXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfRVhURU5ELCBfR0VUX0FDVElWRV9UQUIsIF9NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuICBqc19pbmplY3Rpb25fZmFpbHVyZTogMzcsXHJcbiAgY3NzX2luamVjdGlvbl9mYWlsdXJlOiAzOCxcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjMyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy90bTQ4LnBuZ1wiOyIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=