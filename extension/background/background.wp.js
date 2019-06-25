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
      'opened:entry': 'tempSaveEntryMetaData',
      'fetch:entries': 'onFetchEntriesRequest'
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
  onFetchEntriesRequest: function onFetchEntriesRequest(url, sender) {
    this.collectEntries(sender.tab.id, url, sender.frameId, true);
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

    if (!this.injectedScripts[tabId] || !noReload) {
      this.inject(tabId, newUrl, 0).then(function (lastFrameId) {
        _storage2["default"].get('settings').then(function (settings) {
          if (settings.addon.iframes) {
            browser.webNavigation.getAllFrames({
              tabId: tabId
            }).then(function (frames) {
              frames.forEach(function (frame) {
                if (frame.frameId !== lastFrameId) _this2.inject(tabId, frame.url, frame.frameId);
              });
            });
          }
        });
      });
    }
  },
  inject: function inject(tabId, url, frameId) {
    var _this3 = this;

    return this.injectContentScript(tabId, url, frameId).then(function () {
      _this3.collectEntries(tabId, url, frameId);

      return frameId;
    });
  },
  injectContentScript: function injectContentScript(tabId, url, frameId) {
    var _this4 = this;

    return browser.tabs.executeScript(tabId, {
      file: '../content/page-injections/injection.wp.js',
      frameId: frameId,
      runAt: 'document_idle'
    }).then(function () {
      _this4.injectedScripts[tabId] = {
        url: url
      };

      _this4.insertCSS(tabId, frameId);
    })["catch"](function (e) {
      var msg = e.toString();

      if (!msg.includes('Missing host permission for the tab')) {
        _this4.emit('failed:inject-content-script');
      }
    });
  },
  insertCSS: function insertCSS(tabId, frameId) {
    var _this5 = this;

    browser.tabs.insertCSS(tabId, {
      file: '../content/page-injections/injection.css',
      frameId: frameId
    })["catch"](function (e) {
      var msg = e.toString();

      if (!msg.includes('Missing host permission for the tab')) {
        _this5.emit('failed:inject-stylesheet');
      }
    });
  },
  collectEntries: function collectEntries(tabId, url, frameId, hashSensitive) {
    var _this6 = this;

    _storage2["default"].get('history').then(function (history) {
      var matches = _this6.findMatchingEntries(history, url, hashSensitive);

      var entries = _this6.filterMatches(matches, frameId);

      if (entries) {
        _this6.emit('entries:found', {
          entries: entries,
          recentlyOpenedEntry: _this6.recentlyOpenedEntry,
          locked: !!matches.lockedEntries.length
        }, {
          tab: tabId,
          frameId: frameId
        });

        _this6.recentlyOpenedEntry = null;
      }
    });
  },
  findMatchingEntries: function findMatchingEntries(history, url, hashSensitive) {
    var entries = history.entries;
    var lockedEntries = [];
    var nonLockedEntries = [];
    var entry, pageUrl, entryUrl;

    for (var e in entries) {
      entry = entries[e];

      if (entry.url) {
        pageUrl = hashSensitive || entry.hashSensitive ? url : (0, _utils._HASHLESS)(url);
        entryUrl = hashSensitive || entry.hashSensitive ? entry.url : (0, _utils._HASHLESS)(entry.url);

        if (pageUrl === entryUrl) {
          if (entry.locked) lockedEntries.push(entry);else nonLockedEntries.push(entry);
        }
      }
    }

    return {
      lockedEntries: lockedEntries,
      nonLockedEntries: nonLockedEntries
    };
  },
  filterMatches: function filterMatches(matches, frameId) {
    var lockedEntries = matches.lockedEntries;
    var nonLockedEntries = matches.nonLockedEntries;
    var lockedEntriesCount = lockedEntries.length;
    var nonLockedEntriesCount = nonLockedEntries.length;
    var entries;

    if (lockedEntriesCount && nonLockedEntriesCount) {
      this.emit('warn:mixed-entry-types');
      entries = lockedEntries;
    } else if (nonLockedEntriesCount) {
      // if multiple entries with same url found: take latest
      entries = [nonLockedEntries.reduce(function (prev, current) {
        return prev.last > current.last ? prev : current;
      })];

      if (nonLockedEntriesCount > 1) {
        this.recentlyOpenedEntry = null;
        this.emit('warn:multiple-unlocked-entries');
      }

      if (!frameId) this.emit('entry:found', entries[0]);
    }

    if (lockedEntriesCount) {
      entries = lockedEntries;
      if (!frameId) this.emit('entry:found', lockedEntries);
    }

    return entries;
  },
  onNamingRequest: function onNamingRequest(sender, sendResponse) {
    var _this7 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      var priv = windowInfo.incognito;
      if (!priv) sendResponse(!priv);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this7.emit('failed:pbm');else sendResponse(saveInPriv);
        });
      }
    });
  },
  onSaveNewRequest: function onSaveNewRequest(entry) {
    var _this8 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this8.emit('granted:save-entry', entry);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this8.emit('failed:pbm');else _this8.emit('granted:save-entry', entry);
        });
      }
    });
  },
  onUpdateRequest: function onUpdateRequest(entry) {
    var _this9 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this9.emit('granted:update-entry', entry);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this9.emit('failed:pbm');else _this9.emit('granted:update-entry', entry);
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
        'completed:tab': 'show'
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
      'change:iframe-setting': 'toggleIFrameOpt',
      'remove:custom-marker': 'removeCustomMarker',
      'add:custom-marker': 'addCustomMarker',
      'named:entry': 'saveEntry',
      'renamed:entry': 'saveNewName',
      'correct-name:entry': 'correctName',
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
    }, 'misc');
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
  toggleIFrameOpt: function toggleIFrameOpt(val) {
    this.updateSettings(function (settings) {
      settings.addon.iframes = val;
      return settings;
    }, 'iframes', 'error_save_iframes');
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
  correctName: function correctName(name, area) {
    _storage2["default"].update('history', function (history) {
      history.entries[name].name = name;
      return history;
    }, area);
  },
  updateEntryOnPageAction: function updateEntryOnPageAction(entry, area) {
    var _this6 = this;

    var iteration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    area = typeof area === 'string' ? area : entry.synced ? 'sync' : 'local';
    iteration++;
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
      if (!found && iteration < 2) {
        _this6.updateEntryOnPageAction(entry, entry.synced ? 'local' : 'sync', iteration);
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
          url = history.entries[name].url || '';
          hashSensitive = history.entries[name].hashSensitive || '';
          delete history.entries[name];

          _this7.emit('deleted:entry', name, url, hashSensitive);
        } else {
          names_local.push(name);
        }
      }

      return history;
    }, area)["catch"](function (e) {
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
        'started:app': 'openInitPage',
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
      troubleshooting: 'content/addon-page/addon-page.html#page=troubleshooting',
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
      if (loadReason) {
        if (loadReason === 'install') this.openAddonPage('help');else if (loadReason === 'update') this.openAddonPage('news');
      }
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

        if (!misc.notefontsize) {
          misc.notefontsize = defaultSettings.misc.notefontsize;
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

        if (typeof settings.addon.iframes !== 'boolean') {
          settings.addon.iframes = defaultSettings.addon.iframes;
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
    CONNECTION: ['started:app', 'toggled:addon', 'toggled:sync', 'updated:settings', 'updated:entry-on-save', 'saved:entry', 'updated:pagenotes', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note', 'page-state', 'notes-state', 'entry:found', 'entry:found-for-tab', 'entry:deleted-for-tab', 'entry:ordered-marks', 'hashchange']
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
      autocs: true,
      iframes: true
    },
    misc: {
      bmicon: true,
      noteicon: true,
      noteonclick: true,
      notetransp: false,
      noteplainview: false,
      notefontsize: 12,
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
      theme: 'tm'
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

        if (lastArg && (tab = lastArg.tab)) {
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
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
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
            browser.tabs.sendMessage(lastArg.tab, msg, {
              frameId: lastArg.frameId || 0
            })["catch"](function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwib25GZXRjaEVudHJpZXNSZXF1ZXN0Iiwic2VuZGVyIiwiY29sbGVjdEVudHJpZXMiLCJmcmFtZUlkIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsImluamVjdCIsImxhc3RGcmFtZUlkIiwiaWZyYW1lcyIsIndlYk5hdmlnYXRpb24iLCJnZXRBbGxGcmFtZXMiLCJmcmFtZXMiLCJmb3JFYWNoIiwiZnJhbWUiLCJpbmplY3RDb250ZW50U2NyaXB0IiwidGFicyIsImV4ZWN1dGVTY3JpcHQiLCJmaWxlIiwicnVuQXQiLCJpbnNlcnRDU1MiLCJlIiwidG9TdHJpbmciLCJoYXNoU2Vuc2l0aXZlIiwiaGlzdG9yeSIsIm1hdGNoZXMiLCJmaW5kTWF0Y2hpbmdFbnRyaWVzIiwiZW50cmllcyIsImZpbHRlck1hdGNoZXMiLCJsb2NrZWQiLCJsb2NrZWRFbnRyaWVzIiwibm9uTG9ja2VkRW50cmllcyIsImVudHJ5IiwicGFnZVVybCIsImVudHJ5VXJsIiwibG9ja2VkRW50cmllc0NvdW50Iiwibm9uTG9ja2VkRW50cmllc0NvdW50IiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJsYXN0Iiwib25OYW1pbmdSZXF1ZXN0Iiwic2VuZFJlc3BvbnNlIiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwid2luZG93SW5mbyIsInByaXYiLCJpbmNvZ25pdG8iLCJzYXZlSW5Qcml2Iiwib25TYXZlTmV3UmVxdWVzdCIsIm9uVXBkYXRlUmVxdWVzdCIsInRlbXBTYXZlRW50cnlNZXRhRGF0YSIsImRhdGEiLCJuYW1lIiwiYWRqdXN0TmFtZSIsIm5hbWluZyIsInJlbmFtZSIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiYXJlYSIsInN1YnN0cmluZyIsIl9HTE9CQUxfU0VUVElOR1MiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsImNvdW50ZXIiLCJnZXREb3VibGVOYW1lQ291bnQiLCJtZXRob2QiLCJ0cmltIiwiZmlyc3QiLCJ0b0xvY2FsZVN0cmluZyIsImV4aXN0aW5nTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwibCIsImNoZWNrcG9pbnQiLCJpc0RvdWJsZU5hbWUiLCJjaGVja3BvaW50X3N0YXJ0IiwiY2hlY2twb2ludF9lbmQiLCJ0ZXN0Iiwibm90aWZ5IiwiY29uZGl0aW9uIiwidHlwZSIsIm5vdGlmaWNhdGlvbnMiLCJpY29uVXJsIiwiZ2V0VVJMIiwib25TYXZlZEVudHJ5Iiwic2F2ZU5vdGUiLCJtaXNjIiwicGJtTm90ZSIsInZpcE5vdGUiLCJvbkZhaWxlZEltcG9ydCIsImVycm9yMSIsImVycm9yMiIsImVyck1lc3NhZ2UxIiwiZXJyTWVzc2FnZTIiLCJvbkltcG9ydEVycm9yIiwib25JbXBvcnRTdWNjZXNzIiwiZmFpbHVyZU5vdGUiLCJvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbiIsInN1Y2Nlc3NOb3RlIiwib25TYXZlRXJyb3IiLCJvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3IiLCJvbkRlbGV0ZUVycm9yIiwiZXJyb3JOb3RlIiwib25FcnJvciIsInBhZ2VBY3Rpb24iLCJoaWRlIiwic2hvdyIsInNldFBhbmVsIiwiaXNPcGVuIiwicGFuZWwiLCJzdG9yZUVudHJ5IiwiaWdub3JlSGFzaCIsIkFycmF5IiwiaXNBcnJheSIsInVwZGF0ZUVudHJ5IiwidGFiVXJsIiwicmVtb3ZlRW50cnkiLCJzYXZlZFVybCIsInNlbmRFbnRyeSIsImhhc2hsZXNzVXJsIiwiZW50cmllc0ZvclRoaXNUYWIiLCJzZW5kT3JkZXJlZE1hcmtzIiwibWFya3MiLCJ1cGRhdGVPbkNoYW5nZWRTeW5jIiwic2F2ZUFjdGl2YXRpb25TdGF0ZSIsInRvZ2dsZVN5bmMiLCJmaWVsZCIsInZhbCIsInN5bmMiLCJzZXRBcmVhcyIsInVwZGF0ZVNldHRpbmdzIiwidXBkYXRlciIsInNldHRpbmciLCJhZGRDdXN0b21NYXJrZXIiLCJrZXkiLCJzdHlsZSIsIm1hcmtlcnMiLCJyZW1vdmVDdXN0b21NYXJrZXIiLCJjaGFuZ2VTdHlsZSIsImNoYW5nZUJnQ29sb3IiLCJjb2xvciIsIm1hcmtlciIsInNwbGl0IiwicmVwbGFjZSIsImNoYW5nZUF1dG9Ob3RlU2V0dGluZyIsImF1dG9ub3RlIiwiY2hhbmdlTWFya01ldGhvZCIsIm1hcmttZXRob2QiLCJ0b2dnbGVTaG9ydGN1dFNldHRpbmciLCJjaGFuZ2VTaG9ydGN1dFNldHRpbmciLCJ2YWx1ZSIsImNoYW5nZVNvcnRPcHQiLCJzb3J0ZWQiLCJjaGFuZ2VWaWV3T3B0IiwidmlldyIsImNoYW5nZUN1c3RvbVNlYXJjaCIsInZhbHVlcyIsImN1c3RvbVNlYXJjaCIsImNoYW5nZUNvdW50UGVyUGFnZSIsInBwIiwidG9nZ2xlQ3RtU2V0dGluZyIsImNoYW5nZVNhdmVPcHQiLCJhdXRvc2F2ZSIsInRvZ2dsZUltbXV0T3B0IiwiaW1tdXQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwiZHJvcExvc3NlcyIsInRvZ2dsZUhhc2hPcHQiLCJ0b2dnbGVQcml2U2F2ZU9wdCIsImNoYW5nZU5hbWluZ09wdCIsInRvZ2dsZU5vdGVPcHQiLCJ0b2dnbGVRdWlja2J1dHRvbk9wdCIsInByb3AiLCJzd2l0Y2hRdWlja2J1dHRvbk9wdCIsInRvZ2dsZU5vdGlmaWNhdGlvbk9wdCIsImNoYW5nZU1pc2NTZXR0aW5nIiwidG9nZ2xlVEJCUG93ZXJTZXR0aW5nIiwidG9nZ2xlQXV0b2NzT3B0IiwidG9nZ2xlSUZyYW1lT3B0IiwiY2hhbmdlU0JTZXR0aW5ncyIsInVuZm9sZGVkIiwiY2hhbmdlVGhlbWVTZXR0aW5ncyIsInRoZW1lIiwiY2xlYW5FbnRyaWVzIiwibmFtZXMiLCJuYW1lc19sb2NhbCIsImxvc3QiLCJzYXZlRW50cnkiLCJzYXZlTmV3TmFtZSIsImNvcnJlY3ROYW1lIiwidXBkYXRlRW50cnlPblBhZ2VBY3Rpb24iLCJpdGVyYXRpb24iLCJzeW5jZWQiLCJyZWNlaXZlZENvbXBsZXRlRW50cnkiLCJmb3VuZCIsImhhc093blByb3BlcnR5IiwiZGVsZXRlRW50cmllcyIsInBvcCIsInVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbiIsImVudHJ5TmFtZSIsInJlc3RvcmVkTWFya3MiLCJsb3N0TWFya3MiLCJvbGRMb3N0TWFya3MiLCJyZXN0b3JlZE1hcmtzSURzIiwib2xkTG9zdE1hcmtzSURzIiwibWFyayIsInN5bmNFbnRyeSIsImFyZWFfMSIsImFyZWFfMiIsInRhZ0VudHJpZXMiLCJ0YWciLCJhZGRUYWdUb0VudHJ5IiwibG9jYWwiLCJyZW1vdmVUYWciLCJzdG9yZWRFbnRyeSIsInJ4IiwiUmVnRXhwIiwiYWRkVGFnIiwic2VhcmNoIiwidXBkYXRlUGFnZU5vdGVzIiwibm90ZXMiLCJwYWdlbm90ZXMiLCJyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlciIsInN0b3JhZ2UiLCJvbkNoYW5nZWQiLCJwcm94eSIsIm9uU3RvcmFnZUNoYW5nZWQiLCJjaGFuZ2VkSXRlbSIsInVybHMiLCJuZXdzIiwiaW5mbyIsImhlbHAiLCJjb250YWN0IiwidHJvdWJsZXNob290aW5nIiwibG9ncyIsInRhYkV2ZW50SGFuZGxlcnMiLCJvbkFjdGl2YXRlZCIsIm9uVXBkYXRlZCIsInRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMiLCJhZGRUYWJFdmVudEhhbmRsZXJzIiwiYmluZCIsInByb3BlcnRpZXMiLCJyZW1vdmVUYWJFdmVudEhhbmRsZXJzIiwiZXYiLCJzZWN1cml0eVdhcm5pbmciLCJzZWxmIiwib3BlbkFkZG9uUGFnZSIsIm9wZW5Jbml0UGFnZSIsIm9wZW5TZWFyY2giLCJ3b3JkIiwiY3VzdG9tIiwiZGVmYXVsdFNldHRpbmdzIiwiX0RFRkFVTFRfU1RPUkFHRSIsIm5vdGVUeXBlcyIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwiY20iLCJub3RlVHlwZSIsInRtdWlwb3MiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsIm5vdGVmb250c2l6ZSIsInRiYnBvd2VyIiwidGhlbWVzIiwidXBkYXRlSGlzdG9yeSIsIm9yZGVyIiwiZml4SGlzdG9yeURhdGVzIiwibGFuZyIsImVuIiwiZGUiLCJtZXJnZUhpc3RvcmllcyIsIm5ld0hpc3RvcnkiLCJvbGRIaXN0b3J5Iiwib2xkRW50cmllcyIsIm9sZE5hbWVzIiwiYWNjZXB0ZWRFbnRyaWVzIiwidXJsRXhpc3RzIiwiX2VudHJpZXMiLCJhIiwic2V0U3RvcmFnZU9uVXBncmFkZSIsImlzRW1wdHkiLCJlbXB0eSIsImNoZWNrU3RvcmFnZU9uU3RhcnQiLCJpbXBvcnRTdG9yYWdlIiwiaW1wb3J0ZWRTdG9yYWdlIiwiaW1wb3J0U2V0dGluZ3MiLCJzdWNjZXNzIiwiaW1wb3J0SGlzdG9yeSIsInN1Y2Nlc3NfcyIsInN1Y2Nlc3NfaCIsIlByb21pc2UiLCJyZXNvbHZlIiwib3BlbkVudHJ5RGV0YWlsUGFnZSIsInBvcHVwVVJMIiwiZ2V0Q3VycmVudCIsImN1cnJlbnRXaW5kb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJfUE9SVCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsIk9ORU9GRiIsIkNPTk5FQ1RJT04iLCJfU1RPUkUiLCJpbml0IiwibG9jYWxTdG9yYWdlIiwiX3NldF9zeW5jIiwibWV0aCIsIl91cGRhdGUiLCJjb25zdHJ1Y3RvciIsIl9nZXRfbW9kZSIsImFyZWFfc2V0dGluZ3MiLCJfZ2V0X3ByaXZzYXZlIiwiX2dldF9uYW1pbmciLCJfZ2V0X3RiYnBvd2VyIiwiX2dldF9tYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJfc2V0X3N0b3JhZ2UiLCJfc2V0X3NldHRpbmdzIiwiX3NldF9oaXN0b3J5IiwiYXJlYV9oaXN0b3J5IiwiX3NldF92ZXJzaW9uIiwiX3NldF9sb2ciLCJfZ2V0X2xvZ3MiLCJNQVhfTE9HX0VOVFJJRVMiLCJzaGlmdCIsIl9zZXRfZW50cnkiLCJfdXBkYXRlX2VudHJ5IiwiY2FsbCIsIl9DT1BZIiwiX0VYVEVORCIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJ6IiwieSIsInMiLCJkb3dubG9hZCIsImNvcHkiLCJibWljb24iLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwibWV0YSIsInRhZ3MiLCJhY3Rpb25zIiwibGlua3MiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwianNfaW5qZWN0aW9uX2ZhaWx1cmUiLCJjc3NfaW5qZWN0aW9uX2ZhaWx1cmUiLCJnZXRLZXlCeVZhbHVlIiwic3JjIiwidGFyZ2V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiaCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9waWNzIiwiZXZlbnQiLCJoYW5kbGVyIiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvYmoiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJmIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJsYXN0QXJnIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9wYWdlbm90ZXMiLCJyIiwic2V0VGltZW91dCIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QWdCL0YsSUFBaEIsQ0FBcUI3TixHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQThoQixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQzFpQixPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU82WixZQUFZLENBQUM3WixPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QkosZSIsImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2JhY2tncm91bmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL2ljb25zL29uMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzIucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uNjQucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvdG00OC5wbmcnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL21vZHVsZXMvZXJyb3ItbG9nZ2luZydcclxuaW1wb3J0ICcuL21vZHVsZXMvaW5qZWN0aW9uLW1hbmFnZXInXHJcbmltcG9ydCBfTk9USUZJQ0FUSU9OUyBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IF9UQUJTIGZyb20gJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgX1dJTkRPV1MgZnJvbSAnLi9tb2R1bGVzL3dpbmRvd3MnXHJcbmltcG9ydCBfU0lERUJBUlMgZnJvbSAnLi9tb2R1bGVzL3NpZGViYXJzJ1xyXG5pbXBvcnQgX05BTUVSIGZyb20gJy4vbW9kdWxlcy9uYW1lcidcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHQtbWVudSdcclxuaW1wb3J0IF9QQUdFQUNUSU9OIGZyb20gJy4vbW9kdWxlcy9wYWdlLWFjdGlvbidcclxuLy9pbXBvcnQgX0lEQiBmcm9tICcuL21vZHVsZXMvaW5kZXhlZGRiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9zdG9yZS1tYW5hZ2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd0b2dnbGVPbkltcG9ydCcsXHJcbiAgICAgICdpbml0aWFsaXplZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ21pZ3JhdGVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnY2hlY2tlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZTphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDp0YmJwb3dlci1zZXR0aW5ncyc6ICdzZXRUQkJBY3Rpb24nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZlOiB0cnVlLFxyXG4gIHZlcnNpb246ICcnLFxyXG4gIGxvYWRSZWFzb246ICcnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy52ZXJzaW9uID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uIHx8IHZlcnNpb24gIT09IGN1cnJlbnRWZXJzaW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2FkUmVhc29uID0gdGhpcy5sb2FkUmVhc29uID0gZGV0YWlscy5yZWFzb247XHJcbiAgICAgICAgICBjb25zdCBwcmV2VmVyc2lvbiA9IGRldGFpbHMucHJldmlvdXNWZXJzaW9uIHx8ICcyJztcclxuICAgICAgICAgIGlmIChsb2FkUmVhc29uICYmIChsb2FkUmVhc29uID09PSAndXBkYXRlJyB8fCBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChsb2FkUmVhc29uICsgJzphcHAnLCBwcmV2VmVyc2lvbiwgbG9hZFJlYXNvbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uID09PSBjdXJyZW50VmVyc2lvbikgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLnNldCgndmVyc2lvbicsIHRoaXMudmVyc2lvbik7XHJcblxyXG4gICAgLy9fSURCKCk7XHJcbiAgICBfTk9USUZJQ0FUSU9OUygpO1xyXG4gICAgX1RBQlMoKTtcclxuICAgIF9OQU1FUigpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1dJTkRPV1MoKTtcclxuICAgIF9TSURFQkFSUygpO1xyXG4gICAgX1BBR0VBQ1RJT04oKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYWN0aXZhdGUodHJ1ZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnc3RhcnRlZDphcHAnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9hZFJlYXNvbikpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoYWN0aXZhdGUpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gYWN0aXZhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldFRCQkFjdGlvbigpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IG1vZGUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB0aGlzLmFjdGl2YXRlKG1vZGUpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOmFkZG9uJywgbW9kZSk7XHJcbiAgfSxcclxuICB0b2dnbGVPbkltcG9ydCgpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKG9uKSB7XHJcbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHBhdGg6IG9uID8ge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb24xNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vZmYxNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29mZjMyLnBuZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRUQkJBY3Rpb24oYWRkKSB7XHJcbiAgICBpZiAodHlwZW9mIGFkZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGlmIChhZGQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd0YmJwb3dlcicpLnRoZW4oZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IHRiYkhhbmRsZXIgPSB0aGlzLnRiYkhhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICcnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRiYkhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdjb250ZW50L3RiYi1tZW51L3RiYi1tZW51Lmh0bWwnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMudGJiSGFuZGxlcik7XHJcbiAgICAgIHRoaXMudGJiSGFuZGxlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtczoge1xyXG4gICAgICBtOiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIHc6IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgZDogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBiOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgbjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBzYjogeyBjb250ZXh0czogWydhbGwnLCAndGFiJ10gfSxcclxuICAgICAgYzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogW10sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpdGVtLmlkID0gaTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2N0eF8nICsgKGkgPT09ICctYicgPyAnZGInIDogaSkpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9IChpbmZvcywgdGFiKSA9PiB0aGlzLm9uQ2xpY2soaW5mb3MsIHRhYik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMuY3JlYXRlKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZShpZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnNwbGljZSh0aGlzLmNyZWF0ZWQuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsKCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGUob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVkO1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3Nob3J0Y3V0cycpLnRoZW4oc2hvcnRjdXRzID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzaG9ydGN1dHNbaV1bMl0pIHRoaXMuY3JlYXRlKGkpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soaW5mb3MsIHRhYikge1xyXG4gICAgICBjb25zdCBpZCA9IGluZm9zLm1lbnVJdGVtSWQ7XHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgcmVwb3J0KSB7XHJcbiAgICBsZXQgbG9nLCBtc2c7XHJcbiAgICBpZiAoZXJyb3IudGltZSkge1xyXG4gICAgICBsb2cgPSBbZXJyb3IudGltZSwgZXJyb3IubWVzc2FnZSArICcgWycgKyBlcnJvci5sb2NhdGlvbiArICddJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2cgPSBbKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgX0xPR19LRVlTW2Vycm9yXSB8fCBlcnJvcl07XHJcbiAgICAgIGlmIChyZXBvcnQgJiYgdHlwZW9mIHJlcG9ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsb2cucHVzaChyZXBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihyZXBvcnQpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnLCByZXBvcnQpO1xyXG4gIH0sXHJcbiAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3VybCcpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9wYm0nKTtcclxuICB9LFxyXG4gIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdqc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH0sXHJcbiAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoYW5nZWQ6dXJsJzogJ29uVVJMQ2hhbmdlJyxcclxuICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnb25UYWJDb21wbGV0ZWQnLFxyXG4gICAgICAnY2xpY2tlZDpwYWdlLWFjdGlvbic6ICdoYW5kbGVJbmplY3Rpb25zJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JzogJ29uU2F2ZU5ld1JlcXVlc3QnLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdvblVwZGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnbmFtZTplbnRyeT8nOiAnb25OYW1pbmdSZXF1ZXN0JyxcclxuICAgICAgJ29wZW5lZDplbnRyeSc6ICd0ZW1wU2F2ZUVudHJ5TWV0YURhdGEnLFxyXG4gICAgICAnZmV0Y2g6ZW50cmllcyc6ICdvbkZldGNoRW50cmllc1JlcXVlc3QnXHJcbiAgICB9XHJcbiAgfSxcclxuICBxdWV1ZWRGb3JUYWJDb21wbGV0ZWQ6IHt9LFxyXG4gIGluamVjdGVkU2NyaXB0czoge30sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgb25UYWJDb21wbGV0ZWQodGFiSWQpIHtcclxuICAgIGlmICh0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKTtcclxuICAgICAgZGVsZXRlIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblVSTENoYW5nZSh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSA9IGNoYW5nZWQudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgY2hhbmdlZC51cmwsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uRmV0Y2hFbnRyaWVzUmVxdWVzdCh1cmwsIHNlbmRlcikge1xyXG4gICAgdGhpcy5jb2xsZWN0RW50cmllcyhzZW5kZXIudGFiLmlkLCB1cmwsIHNlbmRlci5mcmFtZUlkLCB0cnVlKTtcclxuICB9LFxyXG5cclxuICBhdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF0gfHwgIW5vUmVsb2FkKSB7XHJcbiAgICAgIHRoaXMuaW5qZWN0KHRhYklkLCBuZXdVcmwsIDApLnRoZW4obGFzdEZyYW1lSWQgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICAgIGlmIChzZXR0aW5ncy5hZGRvbi5pZnJhbWVzKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXIud2ViTmF2aWdhdGlvbi5nZXRBbGxGcmFtZXMoeyB0YWJJZCB9KS50aGVuKGZyYW1lcyA9PiB7XHJcbiAgICAgICAgICAgICAgZnJhbWVzLmZvckVhY2goZnJhbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmZyYW1lSWQgIT09IGxhc3RGcmFtZUlkKSB0aGlzLmluamVjdCh0YWJJZCwgZnJhbWUudXJsLCBmcmFtZS5mcmFtZUlkKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwsIGZyYW1lSWQpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgdGhpcy5jb2xsZWN0RW50cmllcyh0YWJJZCwgdXJsLCBmcmFtZUlkKTtcclxuICAgICAgcmV0dXJuIGZyYW1lSWQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwsIGZyYW1lSWQpIHtcclxuICAgIHJldHVybiBicm93c2VyLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzJyxcclxuICAgICAgZnJhbWVJZCxcclxuICAgICAgcnVuQXQ6ICdkb2N1bWVudF9pZGxlJ1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5qZWN0ZWRTY3JpcHRzW3RhYklkXSA9IHsgdXJsIH07XHJcbiAgICAgICAgdGhpcy5pbnNlcnRDU1ModGFiSWQsIGZyYW1lSWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluc2VydENTUyh0YWJJZCwgZnJhbWVJZCkge1xyXG4gICAgYnJvd3Nlci50YWJzLmluc2VydENTUyh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLmNzcycsXHJcbiAgICAgIGZyYW1lSWRcclxuICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zdCBtc2cgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCFtc2cuaW5jbHVkZXMoJ01pc3NpbmcgaG9zdCBwZXJtaXNzaW9uIGZvciB0aGUgdGFiJykpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBjb2xsZWN0RW50cmllcyh0YWJJZCwgdXJsLCBmcmFtZUlkLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIHVybCwgaGFzaFNlbnNpdGl2ZSk7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmZpbHRlck1hdGNoZXMobWF0Y2hlcywgZnJhbWVJZCk7XHJcblxyXG4gICAgICBpZiAoZW50cmllcykge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cmllczpmb3VuZCcsIHtcclxuICAgICAgICAgIGVudHJpZXMsXHJcbiAgICAgICAgICByZWNlbnRseU9wZW5lZEVudHJ5OiB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnksXHJcbiAgICAgICAgICBsb2NrZWQ6ICEhbWF0Y2hlcy5sb2NrZWRFbnRyaWVzLmxlbmd0aFxyXG4gICAgICAgIH0sIHsgdGFiOiB0YWJJZCwgZnJhbWVJZCB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwsIGhhc2hTZW5zaXRpdmUpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gW107XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gW107XHJcbiAgICBsZXQgZW50cnksIHBhZ2VVcmwsIGVudHJ5VXJsO1xyXG5cclxuICAgIGZvciAobGV0IGUgaW4gZW50cmllcykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbZV07XHJcbiAgICAgIGlmIChlbnRyeS51cmwpIHtcclxuICAgICAgICBwYWdlVXJsID0gaGFzaFNlbnNpdGl2ZSB8fCBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gdXJsIDogX0hBU0hMRVNTKHVybCk7XHJcbiAgICAgICAgZW50cnlVcmwgPSBoYXNoU2Vuc2l0aXZlIHx8IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyBlbnRyeS51cmwgOiBfSEFTSExFU1MoZW50cnkudXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHBhZ2VVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICBpZiAoZW50cnkubG9ja2VkKSBsb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgICAgZWxzZSBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbG9ja2VkRW50cmllcywgbm9uTG9ja2VkRW50cmllcyB9O1xyXG4gIH0sXHJcblxyXG4gIGZpbHRlck1hdGNoZXMobWF0Y2hlcywgZnJhbWVJZCkge1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IG1hdGNoZXMubG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLm5vbkxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzQ291bnQgPSBsb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXNDb3VudCA9IG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgbGV0IGVudHJpZXM7XHJcblxyXG4gICAgaWYgKGxvY2tlZEVudHJpZXNDb3VudCAmJiBub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIGVudHJpZXMgPSBsb2NrZWRFbnRyaWVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIC8vIGlmIG11bHRpcGxlIGVudHJpZXMgd2l0aCBzYW1lIHVybCBmb3VuZDogdGFrZSBsYXRlc3RcclxuICAgICAgZW50cmllcyA9IFtub25Mb2NrZWRFbnRyaWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gKHByZXYubGFzdCA+IGN1cnJlbnQubGFzdCkgPyBwcmV2IDogY3VycmVudCldO1xyXG4gICAgICBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50ID4gMSkge1xyXG4gICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWZyYW1lSWQpIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBlbnRyaWVzWzBdKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgZW50cmllcyA9IGxvY2tlZEVudHJpZXM7XHJcbiAgICAgIGlmICghZnJhbWVJZCkgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZCcsIGxvY2tlZEVudHJpZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVudHJpZXM7XHJcbiAgfSxcclxuXHJcbiAgb25OYW1pbmdSZXF1ZXN0KHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJpdiA9IHdpbmRvd0luZm8uaW5jb2duaXRvO1xyXG4gICAgICAgIGlmICghcHJpdikgc2VuZFJlc3BvbnNlKCFwcml2KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHNlbmRSZXNwb25zZShzYXZlSW5Qcml2KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblNhdmVOZXdSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblVwZGF0ZVJlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0ZW1wU2F2ZUVudHJ5TWV0YURhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gZGF0YTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2dyYW50ZWQ6c2F2ZS1lbnRyeSc6ICduYW1lJyxcclxuICAgICAgICAncmVuYW1lOmVudHJ5JzogJ3JlbmFtZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBuYW1lKGVudHJ5KSB7XHJcbiAgICAgIGlmIChlbnRyeS5uYW1lKSByZXR1cm4gdGhpcy5hZGp1c3ROYW1lKGVudHJ5Lm5hbWUsIGVudHJ5KTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4gdGhpcy5hZGp1c3ROYW1lKG51bGwsIGVudHJ5LCBuYW1pbmcpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICByZW5hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgICBuZXdOYW1lID0gbmV3TmFtZS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IHRoaXMuZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5ld05hbWUpO1xyXG4gICAgICAgIGlmIChjb3VudGVyKSBuZXdOYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuYW1lZDplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgYWRqdXN0TmFtZShuYW1lLCBlbnRyeSwgbWV0aG9kKSB7XHJcbiAgICAgIG5hbWUgPSBuYW1lID8gbmFtZSA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICd0aXRsZScgPyBlbnRyeS50aXRsZS50cmltKCkgPyBlbnRyeS50aXRsZS50cmltKCkgOiBlbnRyeS51cmwgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAnZGF0ZScgPyAobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpIDogJyc7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IHRoaXMuZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRlciAmJiBlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnNhdmUtZW50cnktZG91YmxlLWxvY2tlZCcsICdlcnJvcl9kb3VibGVfbG9ja2VkX25hbWUnLCBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGNvdW50ZXIpIG5hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgICBlbnRyeS5uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnbmFtZWQ6ZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5hbWUpIHtcclxuICAgICAgbGV0IGV4aXN0aW5nTmFtZXMgPSBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IGV4aXN0aW5nTmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgY291bnRlciA9IDAsXHJcbiAgICAgICAgICBjaGVja3BvaW50O1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIGNoZWNrcG9pbnQgPSBleGlzdGluZ05hbWVzW2xdO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSkgY291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgfSxcclxuICAgIGlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSB7XHJcbiAgICAgIGlmIChuYW1lID09PSBjaGVja3BvaW50KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBsID0gbmFtZS5sZW5ndGgsXHJcbiAgICAgICAgICBjaGVja3BvaW50X3N0YXJ0ID0gY2hlY2twb2ludC5zdWJzdHJpbmcoMCwgbCksXHJcbiAgICAgICAgICBjaGVja3BvaW50X2VuZDtcclxuXHJcbiAgICAgIGlmIChuYW1lICE9PSBjaGVja3BvaW50X3N0YXJ0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBjaGVja3BvaW50X2VuZCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKGwsIGNoZWNrcG9pbnQubGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICgvXlxccypcXChcXGQrXFwpJC8udGVzdChjaGVja3BvaW50X2VuZCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnb25TYXZlZEVudHJ5JyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnktZG91YmxlLWxvY2tlZCc6ICdvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnOiAnb25EZWxldGVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnb25TdWNjZXNzZnVsUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgICAnZmFpbGVkOmltcG9ydCc6ICdvbkZhaWxlZEltcG9ydCcsXHJcbiAgICAgICAgJ2Vycm9yOmltcG9ydCc6ICdvbkltcG9ydEVycm9yJyxcclxuICAgICAgICAnaW1wb3J0ZWQ6c3RvcmFnZSc6ICdvbkltcG9ydFN1Y2Nlc3MnLFxyXG4gICAgICAgICdlcnJvcic6ICdvbkVycm9yJyxcclxuICAgICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcyc6ICdvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCc6ICdvblNjcmlwdEluamVjdGlvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeShjb25kaXRpb24sIG1lc3NhZ2UsIHR5cGUpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZXh0bWFya2VyOiAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodHlwZSksXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2ljb25zL3RtNDgucG5nJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZWRFbnRyeSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlZF9lbnRyeScpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFBCTSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5wYm1Ob3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3BibScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3VybCcpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRJbXBvcnQoZXJyb3IxLCBlcnJvcjIpIHtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjEpO1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMiA9IGVycm9yMiA/ICdcXG5cXG4nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IyKSA6ICcnO1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X2ZhaWx1cmUnLCBlcnJNZXNzYWdlMSArIGVyck1lc3NhZ2UyKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0RXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF93YXJuaW5nJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRTdWNjZXNzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnN1Y2Nlc3NOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3IoZXJyb3IsIG5hbWUpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvciwgbmFtZSkpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZWxldGVFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNjcmlwdEluamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnanNfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnc2hvdydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YWIgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwYWdlLWFjdGlvbicsIHRhYi5pZCwgdGFiLnVybCk7XHJcbiAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLmhpZGUodGFiLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3codGFiSWQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uc2hvdyh0YWJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfR0VUX0FDVElWRV9UQUIsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdhY3RpdmF0ZWQ6dGFiJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdlbnRyeTpmb3VuZCc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOidzZW5kRW50cnknLFxyXG4gICAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJzogJ3NlbmRPcmRlcmVkTWFya3MnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczoge30sXHJcblxyXG4gICAgc2V0UGFuZWwodGFiSWQsIHVybCkge1xyXG4gICAgICB0aGlzLmlzT3BlbigpLnRoZW4ob3BlbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5zZXRQYW5lbCh7XHJcbiAgICAgICAgICAgIHBhbmVsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBjb250ZW50L3NpZGViYXIvc2lkZWJhci5odG1sIyR7dGFiSWR9XyR7dXJsfWApLFxyXG4gICAgICAgICAgICB0YWJJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnNpZGViYXJBY3Rpb24uaXNPcGVuKHt9KTtcclxuICAgIH0sXHJcbiAgICBzdG9yZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSBBcnJheS5pc0FycmF5KGVudHJ5KSA/ICFlbnRyeVswXS5oYXNoU2Vuc2l0aXZlIDogIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcblxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0YWIuaWQ7XHJcbiAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyh0YWIudXJsKSA6IHRhYi51cmw7XHJcblxyXG4gICAgICAgIGVudHJpZXNbaWRdID0gZW50cmllc1tpZF0gfHwgW107XHJcbiAgICAgICAgZW50cmllc1tpZF1bdXJsXSA9IGVudHJ5O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyhlbnRyeS51cmwpIDogZW50cnkudXJsO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgICAgZW50cmllc1tpZF1bdXJsXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyh0YWIudXJsKSA6IHRhYi51cmw7XHJcblxyXG4gICAgICAgIGlmICh0YWJVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kLWZvci10YWInLCBlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVFbnRyeShuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdXJsIDogX0hBU0hMRVNTKHVybCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2F2ZWRVcmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmIChzYXZlZFVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbaWRdW3NhdmVkVXJsXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGhhc2hTZW5zaXRpdmUgPyB0YWIudXJsIDogX0hBU0hMRVNTKHRhYi51cmwpO1xyXG4gICAgICAgIGlmICh0YWJVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZEVudHJ5KCkge1xyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzaGxlc3NVcmwgPSBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgY29uc3QgZW50cmllc0ZvclRoaXNUYWIgPSB0aGlzLmVudHJpZXNbdGFiLmlkXTtcclxuICAgICAgICBsZXQgZW50cnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChlbnRyaWVzRm9yVGhpc1RhYikge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzRm9yVGhpc1RhYlt0YWIudXJsXSB8fCBlbnRyaWVzRm9yVGhpc1RhYltoYXNobGVzc1VybF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE9yZGVyZWRNYXJrcyhtYXJrcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5Om9yZGVyZWQtbWFya3MnLCBtYXJrcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXInLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdzYXZlQWN0aXZhdGlvblN0YXRlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJzogJ3RvZ2dsZVN5bmMnLFxyXG5cclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJzogJ2NoYW5nZVN0eWxlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJzogJ2NoYW5nZUF1dG9Ob3RlU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZyc6ICdjaGFuZ2VCZ0NvbG9yJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJzogJ2NoYW5nZU1hcmtNZXRob2QnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnOiAndG9nZ2xlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJzogJ2NoYW5nZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnOiAndG9nZ2xlQ3RtU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJzogJ2NoYW5nZVNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnOiAndG9nZ2xlSGFzaE9wdCcsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJzogJ3RvZ2dsZVByaXZTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZyc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZyc6ICd0b2dnbGVOb3RlT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3RvZ2dsZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZyc6ICd0b2dnbGVOb3RpZmljYXRpb25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJzogJ3RvZ2dsZVRCQlBvd2VyU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJzogJ2NoYW5nZVNvcnRPcHQnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZyc6ICdjaGFuZ2VWaWV3T3B0JyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvY3Mtc2V0dGluZyc6ICd0b2dnbGVBdXRvY3NPcHQnLFxyXG4gICAgICAnY2hhbmdlOmlmcmFtZS1zZXR0aW5nJzogJ3RvZ2dsZUlGcmFtZU9wdCcsXHJcblxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInOiAncmVtb3ZlQ3VzdG9tTWFya2VyJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJzogJ2FkZEN1c3RvbU1hcmtlcicsXHJcblxyXG4gICAgICAnbmFtZWQ6ZW50cnknOiAnc2F2ZUVudHJ5JyxcclxuICAgICAgJ3JlbmFtZWQ6ZW50cnknOiAnc2F2ZU5ld05hbWUnLFxyXG4gICAgICAnY29ycmVjdC1uYW1lOmVudHJ5JzogJ2NvcnJlY3ROYW1lJyxcclxuICAgICAgJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JzogJ3VwZGF0ZUVudHJ5T25QYWdlQWN0aW9uJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJzogJ2RlbGV0ZUVudHJpZXMnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAndXBkYXRlRW50cnlPblJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnOiAnY2xlYW5FbnRyaWVzJyxcclxuICAgICAgJ3N5bmM6ZW50cnknOiAnc3luY0VudHJ5JyxcclxuICAgICAgJ3RhZzplbnRyaWVzJzogJ3RhZ0VudHJpZXMnLFxyXG4gICAgICAncmVtb3ZlOnRhZyc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAnYWRkOnRhZyc6ICdhZGRUYWcnLFxyXG5cclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInOiAnY2hhbmdlU0JTZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnOiAnY2hhbmdlVGhlbWVTZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZSc6ICd1cGRhdGVQYWdlTm90ZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVPbkNoYW5nZWRTeW5jOiBmYWxzZSxcclxuXHJcbiAgLy8gQURET04gTUVUSE9EU1xyXG4gIHNhdmVBY3RpdmF0aW9uU3RhdGUoYWN0aXZlKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hY3RpdmUgPSBhY3RpdmU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU1lOQyBNRVRIT0RTXHJcbiAgdG9nZ2xlU3luYyhmaWVsZCwgdmFsKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBmdW5jdGlvbihzeW5jKSB7XHJcbiAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICB0aGlzLnNldEFyZWFzKHN5bmMpO1xyXG4gICAgICByZXR1cm4gc3luYztcclxuICAgIH0sICdsb2NhbCcpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgc3luYyA9PiB7XHJcbiAgICAgICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgICAgIH0sICdzeW5jJylcclxuXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfdG9nZ2xlX3N5bmMnKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnRvZ2dsZS1zeW5jJywgZmllbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd0b2dnbGVkOnN5bmMgdG9nZ2xlZDpzeW5jLScgKyBmaWVsZCwgZmllbGQsIHZhbCkpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNFVFRJTkdTIE1FVEhPRFNcclxuICB1cGRhdGVTZXR0aW5ncyh1cGRhdGVyLCBzZXR0aW5nLCBlcnJvcikge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHVwZGF0ZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDonICsgc2V0dGluZyArICctc2V0dGluZ3MnKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgaWYgKGVycm9yKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpOyB9KTtcclxuICB9LFxyXG4gIGFkZEN1c3RvbU1hcmtlcihrZXksIHN0eWxlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XSA9ICB7IHN0eWxlIH07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9hZGRfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHJlbW92ZUN1c3RvbU1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgZGVsZXRlIHNldHRpbmdzLm1hcmtlcnNba2V5XTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX3JlbW92ZV9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU3R5bGUoa2V5LCBzdHlsZSkge1xyXG4gICAgaWYgKCFrZXkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IHN0eWxlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUJnQ29sb3Ioa2V5LCBjb2xvcikge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSBzZXR0aW5ncy5tYXJrZXJzW2tleV07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIpIHtcclxuICAgICAgICAgIGxldCBzcGxpdCA9IG1hcmtlci5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsIHN0eWxlO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzcGxpdFtsXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBtYXJrZXIuc3R5bGUucmVwbGFjZSgvYmFja2dyb3VuZC1jb2xvcjojLns2fS8sICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBjb2xvcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgICB9LFxyXG4gICAgICAnYmctY29sb3InLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VBdXRvTm90ZVNldHRpbmcoa2V5LCBhdXRvbm90ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uYXV0b25vdGUgPSBhdXRvbm90ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b25vdGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV90b2dnbGVfYXV0b25vdGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWFya01ldGhvZChtZXRob2QpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID0gbWV0aG9kOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrLW1ldGhvZCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX21hcmtfbWV0aG9kJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNob3J0Y3V0U2V0dGluZyhrZXksIHN0YXR1cykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsxXSA9IHN0YXR1czsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNob3J0Y3V0U2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzBdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmltbXV0ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpbW11dG9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZURyb3BMb3NzZXNPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnZHJvcGxvc3Nlc29wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUhhc2hPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaGFzaG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVQcml2U2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdwcml2c2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX3ByaXYnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTmFtaW5nT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lm5hbWluZyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbmFtaW5nJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbmFtaW5nJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3dpdGNoUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90aWZpY2F0aW9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3RpZmljYXRpb24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWlzY1NldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21pc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVEJCUG93ZXJTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd0YmJwb3dlcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVBdXRvY3NPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b2NzJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b2NzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUlGcmFtZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uaWZyYW1lcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaWZyYW1lcycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2lmcmFtZXMnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU0JTZXR0aW5ncyh0YWIsIHVuZm9sZGVkKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50YWJzW3RhYl0udW5mb2xkZWQgPSB1bmZvbGRlZDsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG4gIGNoYW5nZVRoZW1lU2V0dGluZ3ModGhlbWUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRoZW1lID0gdGhlbWU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSElTVE9SWSBNRVRIT0RTXHJcbiAgY2xlYW5FbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGkgPSBuYW1lcy5sZW5ndGgsIG5hbWU7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllc1tuYW1lXSkgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ2xvY2FsJykgeyB0aGlzLmVtaXQoJ2NsZWFuZWQ6ZW50cmllcycpOyB9fSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2NsZWFuX2hpc3RvcnknKSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5jbGVhbkVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSk7XHJcbiAgfSxcclxuICBzYXZlRW50cnkoZW50cnkpIHtcclxuICAgIGVudHJ5Lmxvc3QgPSBbXTtcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCdzYXZlZDplbnRyeScsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5JywgJ2Vycm9yX3NhdmVfZW50cnknKSk7XHJcbiAgfSxcclxuICBzYXZlTmV3TmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV0pO1xyXG4gICAgICBlbnRyeS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdID0gZW50cnk7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1uYW1lJywgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdLCBvbGROYW1lKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICBjb3JyZWN0TmFtZShuYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLm5hbWUgPSBuYW1lO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGFyZWEsIGl0ZXJhdGlvbiA9IDApIHtcclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGl0ZXJhdGlvbisrO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgY29uc3QgcmVjZWl2ZWRDb21wbGV0ZUVudHJ5ID0gISFlbnRyeS51cmw7XHJcbiAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAocmVjZWl2ZWRDb21wbGV0ZUVudHJ5KSB7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkuZW50cmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGVudHJ5LnN5bmNlZDtcclxuICAgICAgICAgIGZvciAobGV0IGUgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5Lmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdW2VdID0gZW50cnlbZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmICghZm91bmQgJiYgaXRlcmF0aW9uIDwgMikgeyB0aGlzLnVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBlbnRyeS5zeW5jZWQgPyAnbG9jYWwnIDogJ3N5bmMnLCBpdGVyYXRpb24pOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktb24tc2F2ZScsIGVudHJ5KSk7XHJcbiAgfSxcclxuICBkZWxldGVFbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllcyAmJiBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB1cmwgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0udXJsIHx8ICcnO1xyXG4gICAgICAgICAgaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5oYXNoU2Vuc2l0aXZlIHx8ICcnO1xyXG5cclxuICAgICAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cnknLCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnLCAnZXJyb3JfZGVsX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5kZWxldGVFbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyaWVzJykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblJlc3RvcmF0aW9uKGVudHJ5TmFtZSwgcmVzdG9yZWRNYXJrcywgbG9zdE1hcmtzLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPT09IHRydWUpIHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrcyA9IGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgICBjb25zdCByZXN0b3JlZE1hcmtzSURzID0gW107XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3NJRHMgPSBbXTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5tYXJrcyA9IHJlc3RvcmVkTWFya3M7XHJcblxyXG4gICAgICAgICAgcmVzdG9yZWRNYXJrcy5mb3JFYWNoKG1hcmsgPT4gcmVzdG9yZWRNYXJrc0lEcy5wdXNoKG1hcmsuaWQpKTtcclxuXHJcbiAgICAgICAgICBsZXQgbCA9IG9sZExvc3RNYXJrcy5sZW5ndGgsIGlkO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWQgPSBvbGRMb3N0TWFya3NbbF0uaWQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN0b3JlZE1hcmtzSURzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzSURzLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbG9zdE1hcmtzLmZvckVhY2gobWFyayA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb2xkTG9zdE1hcmtzSURzLmluY2x1ZGVzKG1hcmsuaWQpKSBvbGRMb3N0TWFya3MucHVzaChtYXJrKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgPSBvbGRMb3N0TWFya3M7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3luY0VudHJ5KG5hbWUsIHZhbCkge1xyXG4gICAgY29uc3QgYXJlYV8xID0gdmFsID8gJ2xvY2FsJyA6ICdzeW5jJztcclxuICAgIGNvbnN0IGFyZWFfMiA9IHZhbCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgbGV0IGVudHJ5O1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tuYW1lXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHZhbDtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhXzEpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWFfMilcclxuXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktc3luYycsIGVudHJ5KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c3luYy1lbnRyeScsIG5hbWUpKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0YWdFbnRyaWVzKG5hbWVzLCB0YWcpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICBuYW1lcy5zeW5jLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgJ3N5bmMnKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgICAgIG5hbWVzLmxvY2FsLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCAnbG9jYWwnKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3Qgc3RvcmVkRW50cnkgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcpO1xyXG4gICAgICBpZiAoc3RvcmVkRW50cnkudGFnKSB7XHJcbiAgICAgICAgc3RvcmVkRW50cnkudGFnID0gc3RvcmVkRW50cnkudGFnXHJcbiAgICAgICAgICAucmVwbGFjZShyeCwgJyAnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL15cXHN8XFxzJC8sICcnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcc3syLH0vLCAnICcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSk7XHJcbiAgfSxcclxuICBhZGRUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFRhZ1RvRW50cnkoaGlzdG9yeS5lbnRyaWVzW25hbWVdLCB0YWcpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpO1xyXG4gIH0sXHJcbiAgYWRkVGFnVG9FbnRyeShlbnRyeSwgdGFnKSB7XHJcbiAgICBpZiAoIXRhZykgZW50cnkudGFnID0gJyc7XHJcbiAgICBlbHNlIGlmICghZW50cnkudGFnKSBlbnRyeS50YWcgPSB0YWc7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJywgJ2cnKTtcclxuICAgICAgaWYgKGVudHJ5LnRhZy5zZWFyY2gocngpID09PSAtMSkge1xyXG4gICAgICAgIGVudHJ5LnRhZyArPSAnICcgKyB0YWc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBlbnRyeSk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUEFHRSBOT1RFIE1FVEhPRFNcclxuICB1cGRhdGVQYWdlTm90ZXModXJsLCBub3Rlcykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdwYWdlbm90ZXMnLCBwYWdlbm90ZXMgPT4ge1xyXG4gICAgICBwYWdlbm90ZXNbdXJsXSA9IG5vdGVzO1xyXG4gICAgICByZXR1cm4gcGFnZW5vdGVzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5vblN0b3JhZ2VDaGFuZ2VkKSk7XHJcbiAgfSxcclxuICBvblN0b3JhZ2VDaGFuZ2VkKGNoYW5nZWRJdGVtKSB7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uc2V0dGluZ3MpIHRoaXMuZW1pdCgndXBkYXRlZDpzZXR0aW5ncycpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLmhpc3RvcnkpIHRoaXMuZW1pdCgndXBkYXRlZDpoaXN0b3J5Jyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0ucGFnZW5vdGVzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6cGFnZW5vdGVzJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZVRhYkV2ZW50SGFuZGxlcnMnLFxyXG4gICAgICAgICdzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICB0cm91Ymxlc2hvb3Rpbmc6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9dHJvdWJsZXNob290aW5nJyxcclxuICAgICAgbG9nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1sb2dzJyxcclxuICAgICAgZXhwb3J0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWV4cG9ydCcsXHJcbiAgICAgIHN5bmM6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c3luYydcclxuICAgIH0sXHJcbiAgICB0YWJFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgIG9uQWN0aXZhdGVkOiBudWxsLFxyXG4gICAgICBvblVwZGF0ZWQ6IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMobW9kZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uQWN0aXZhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkID0gdGhpcy5vbkFjdGl2YXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihvbkFjdGl2YXRlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQgPSB0aGlzLm9uVXBkYXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIob25VcGRhdGVkLCB7IHByb3BlcnRpZXM6IFsnc3RhdHVzJ10gfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBbJ29uQWN0aXZhdGVkJywgJ29uVXBkYXRlZCddLmZvckVhY2goZXYgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnNbZXZdLnJlbW92ZUxpc3RlbmVyKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFiRXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZFRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH0sXHJcbiAgICBvbkFjdGl2YXRlZCh0YWIpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhY3RpdmF0ZWQ6dGFiJywgdGFiLnRhYklkLCAodGFiLnVybCB8fCAnJykpO1xyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlZCh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgICBpZiAoY2hhbmdlZC51cmwpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQ6dGFiJywgdGFiSWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW4odXJscywgbmFtZXMpIHtcclxuICAgICAgdXJscyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJyA/IFt1cmxzXSA6IHVybHM7XHJcbiAgICAgIG5hbWVzID0gdHlwZW9mIG5hbWVzID09PSAnc3RyaW5nJyA/IFtuYW1lc10gOiBuYW1lcztcclxuICAgICAgbGV0IGwgPSB1cmxzLmxlbmd0aCxcclxuICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IGZhbHNlLFxyXG4gICAgICAgICAgdXJsO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uKHNlbGYsIGwpIHtcclxuICAgICAgICAgIHVybCA9IHVybHNbbF07XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiB1cmxzW2xdIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZWN1cml0eVdhcm5pbmcpIHNlbGYuZW1pdCgnZmFpbGVkOm9wZW4tdGFiJyk7XHJcbiAgICAgICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuYW1lcykgc2VsZi5lbWl0KCdvcGVuZWQ6ZW50cnknLCB7IHVybDogdXJsLCBuYW1lOiBuYW1lc1tsXSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkodGhpcywgbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuQWRkb25QYWdlKGlkKSB7XHJcbiAgICAgIHRoaXMub3Blbih0aGlzLnVybHNbaWRdKTtcclxuICAgIH0sXHJcbiAgICBvcGVuSW5pdFBhZ2UodmVyc2lvbiwgbG9hZFJlYXNvbikge1xyXG4gICAgICBpZiAobG9hZFJlYXNvbikge1xyXG4gICAgICAgIGlmIChsb2FkUmVhc29uID09PSAnaW5zdGFsbCcpIHRoaXMub3BlbkFkZG9uUGFnZSgnaGVscCcpO1xyXG4gICAgICAgIGVsc2UgaWYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnKSB0aGlzLm9wZW5BZGRvblBhZ2UoJ25ld3MnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5TZWFyY2god29yZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IGN1c3RvbSA9IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoLCB1cmw7XHJcbiAgICAgICAgaWYgKGN1c3RvbSkgdXJsID0gJ2h0dHBzOi8vJyArIGN1c3RvbVswXSArIHdvcmQgKyBjdXN0b21bMV07XHJcbiAgICAgICAgZWxzZSB1cmwgPSAnaHR0cHM6Ly8nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyArIHdvcmQ7XHJcbiAgICAgICAgdGhpcy5vcGVuKHVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZTphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdpbnN0YWxsOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2NoZWNrOnN0b3JhZ2UnOiAnY2hlY2tTdG9yYWdlT25TdGFydCcsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZSc6ICdpbXBvcnRTdG9yYWdlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHNldHRpbmdzLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IHNldHRpbmdzLm1pc2M7XHJcbiAgICAgICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlIHZpcE5vdGUnLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLm4pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5uID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5uO1xyXG4gICAgICAgICAgbWlzYy5ub3RlaWNvbiA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgICAgICAgbWlzYy5ub3Rlb25jbGljayA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5hcnJvd3VwKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3d1cCA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3d1cDtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd2Rvd24gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93ZG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuZFswXSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmRbMF0gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLnNiKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLnNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5jbSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmNtID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5jbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWFya2Vycy5tLnN0eWxlKSB7XHJcbiAgICAgICAgICBsZXQgc3R5bGU7XHJcbiAgICAgICAgICBmb3IgKGxldCBtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBtYXJrZXJzW21dO1xyXG4gICAgICAgICAgICBtYXJrZXJzW21dID0geyBzdHlsZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnNvcnRlZCkge1xyXG4gICAgICAgICAgaGlzdG9yeS5zb3J0ZWQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGlzdG9yeS52aWV3KSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3Rvcnkuc2F2ZUluUHJpdiAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNhdmVJblByaXYgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaW1tdXQgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pbW11dCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaWdub3JlSGFzaCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5Lmlnbm9yZUhhc2ggPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuZHJvcExvc3NlcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmRyb3BMb3NzZXMgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm90ZVR5cGVzLmZvckVhY2gobm90ZVR5cGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBtaXNjW25vdGVUeXBlXSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIG1pc2Nbbm90ZVR5cGVdID0gZGVmYXVsdFNldHRpbmdzLm1pc2Nbbm90ZVR5cGVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbWlzYy50bXVpcG9zKSB7XHJcbiAgICAgICAgICBtaXNjLnRtdWlwb3MgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXRyYW5zcCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGV0cmFuc3AgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXBsYWludmlldyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGVwbGFpbnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlcGxhaW52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1pc2Mubm90ZWZvbnRzaXplKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGVmb250c2l6ZSA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVmb250c2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtaXNjLm1hcmttZXRob2QpIHtcclxuICAgICAgICAgIG1pc2MubWFya21ldGhvZCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm1hcmttZXRob2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy50YmJwb3dlciAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLnRiYnBvd2VyID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNiKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zYjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5zYi50aGVtZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGFicy50aGVtZXMgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGFicy50aGVtZXM7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50aGVtZSA9IGRlZmF1bHRTZXR0aW5ncy5zYi50aGVtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWRkb24uYXV0b2NzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IGRlZmF1bHRTZXR0aW5ncy5hZGRvbi5hdXRvY3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWRkb24uaWZyYW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzID0gZGVmYXVsdFNldHRpbmdzLmFkZG9uLmlmcmFtZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJyk7XHJcbiAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxuICB9LFxyXG4gIHVwZGF0ZUhpc3RvcnkoaGlzdG9yeSkge1xyXG4gICAgZGVsZXRlIGhpc3Rvcnkub3JkZXI7XHJcblxyXG4gICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgIGVudHJ5O1xyXG5cclxuICAgIGlmICghbCkgcmV0dXJuIGhpc3Rvcnk7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBlbnRyeSA9IHRoaXMuZml4SGlzdG9yeURhdGVzKGVudHJpZXNbbmFtZXNbbF1dKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdHlwZW9mIGVudHJ5LnN5bmNlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGlzdG9yeTtcclxuICB9LFxyXG4gIGZpeEhpc3RvcnlEYXRlcyhlbnRyeSkge1xyXG4gICAgY29uc3QgbGFuZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkuZmlyc3QgIT09ICdudW1iZXInKSBlbnRyeS5maXJzdCA9IG5ldyBEYXRlKChlbnRyeS5maXJzdFtsYW5nXSB8fCBlbnRyeS5maXJzdC5lbiB8fCBlbnRyeS5maXJzdC5kZSB8fCBlbnRyeS5maXJzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5sYXN0ICE9PSAnbnVtYmVyJykgZW50cnkubGFzdCA9IG5ldyBEYXRlKChlbnRyeS5sYXN0W2xhbmddIHx8IGVudHJ5Lmxhc3QuZW4gfHwgZW50cnkubGFzdC5kZSB8fCBlbnRyeS5sYXN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuICBtZXJnZUhpc3RvcmllcyhuZXdIaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihvbGRIaXN0b3J5ID0+IHtcclxuXHJcbiAgICAgIGxldCBlbnRyaWVzID0gbmV3SGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgIG9sZEVudHJpZXMgPSBvbGRIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBvbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZEVudHJpZXMpLFxyXG4gICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzID0ge30sXHJcbiAgICAgICAgICBuYW1lLCBlbnRyeSwgdXJsLCB1cmxFeGlzdHMsIGU7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICB1cmxFeGlzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCFvbGROYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdXJsID0gZW50cnkudXJsO1xyXG5cclxuICAgICAgICAgIGZvciAoZSBpbiBvbGRFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRFbnRyaWVzW2VdLnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgdXJsRXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF1cmxFeGlzdHMpIHtcclxuICAgICAgICAgICAgZW50cnkuc3luY2VkID0gYXJlYSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgICAgICBhY2NlcHRlZEVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBfZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYSBpbiBhY2NlcHRlZEVudHJpZXMpIHtcclxuICAgICAgICAgIF9lbnRyaWVzW2FdID0gYWNjZXB0ZWRFbnRyaWVzW2FdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgfSwgYXJlYSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXRTdG9yYWdlT25VcGdyYWRlKHByZXZWZXJzaW9uID0gJzInLCBsb2FkUmVhc29uKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICBpZiAobG9hZFJlYXNvbiAhPT0gJ2luc3RhbGwnKSB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUnKTtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCAnc3luYycpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJykpXHJcbiAgICAvLy50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pKVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnLCBwcmV2VmVyc2lvbik7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24nLCBlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjaGVja1N0b3JhZ2VPblN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnc3luYycpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgIH0pKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKTtcclxuICB9LFxyXG4gIGltcG9ydFN0b3JhZ2UoaW1wb3J0ZWRTdG9yYWdlLCBhcmVhKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSBpbXBvcnRlZFN0b3JhZ2Uuc2V0dGluZ3MsXHJcbiAgICAgICAgaGlzdG9yeSA9IGltcG9ydGVkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgIGlmICghaGlzdG9yeSAmJiAhc2V0dGluZ3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfZW1wdHknKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIWhpc3RvcnkpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICBlbHNlIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2Vzc19zID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3NfaCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3VjY2Vzc19zKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NfcyA9PT0gJ291dGRhdGVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpzZXR0aW5ncyBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpIHtcclxuICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCdvdXRkYXRlZCcpO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9LFxyXG4gIGltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVyZ2VIaXN0b3JpZXModGhpcy51cGRhdGVIaXN0b3J5KGhpc3RvcnksIHRydWUpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd2aWV3OmVudHJ5JzogJ29wZW5FbnRyeURldGFpbFBhZ2UnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3BlbkVudHJ5RGV0YWlsUGFnZShuYW1lKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwVVJMID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnY29udGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5odG1sJyk7XHJcblxyXG4gICAgICBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgpLnRoZW4oY3VycmVudFdpbmRvdyA9PiB7XHJcblxyXG4gICAgICAgIGJyb3dzZXIud2luZG93cy5jcmVhdGUoe1xyXG4gICAgICAgICAgdXJsOiBwb3B1cFVSTCArICcjJyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcclxuICAgICAgICAgIHR5cGU6ICdwYW5lbCcsXHJcbiAgICAgICAgICBoZWlnaHQ6IGN1cnJlbnRXaW5kb3cuaGVpZ2h0IC0gMjIsXHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5taW4oY3VycmVudFdpbmRvdy53aWR0aCwgOTgwKSxcclxuICAgICAgICAgIGluY29nbml0bzogY3VycmVudFdpbmRvdy5pbmNvZ25pdG9cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxubmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYmFja2dyb3VuZCcsXHJcbiAgdHlwZTogJ2JhY2tncm91bmQnLFxyXG4gIHBvc3Rwb25lQ29ubmVjdGlvbjogdHJ1ZSxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5LW9uLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnLFxyXG4gICAgICAndXBkYXRlZDpsb2dzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmJnLWNvbG9yLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3VzdG9tLXNlYXJjaC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNhdmVvcHQtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncycsXHJcbiAgICAgICdlbnRyaWVzOmZvdW5kJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyaWVzJyxcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknLFxyXG4gICAgICAnY3R4Om0nLFxyXG4gICAgICAnY3R4OmQnLFxyXG4gICAgICAnY3R4OmInLFxyXG4gICAgICAnY3R4Oi1iJyxcclxuICAgICAgJ2N0eDpuJyxcclxuICAgICAgJ2N0eDpjJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAnY2hhbmdlZDp1cmwnXHJcbiAgICBdLFxyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1NUT1JFfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLnJlbW92ZSgnbG9ncycpO1xyXG5cclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgc3luYyA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2Uuc3luYyA/IGxvY2FsU3RvcmFnZS5zeW5jIDogX0RFRkFVTFRfU1RPUkFHRS5zeW5jO1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2V0X3N5bmMoc3luYyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXQoZmllbGQsIHZhbCkge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19zZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcbiAgICByZXR1cm4gdGhpc1snX3NldF8nICsgZmllbGRdKHZhbCk7XHJcbiAgfSxcclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICBpc0VtcHR5KGFyZWEgPSAnc3luYycpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICghT2JqZWN0LmtleXMoc3RvcmFnZSkubGVuZ3RoICYmIHN0b3JhZ2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcml2c2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdGJicG93ZXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuXHJcbiAgX3NldF9zdG9yYWdlKGFyZWEgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0X3NldHRpbmdzKGFyZWEpLnRoZW4oKCkgPT4gdGhpcy5fc2V0X2hpc3RvcnkoYXJlYSkpO1xyXG4gIH0sXHJcbiAgX3NldF9zeW5jKHN5bmMpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgc3luYzogc3luYyB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeW5jOiBzeW5jIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldEFyZWFzKHN5bmMpKTtcclxuICB9LFxyXG4gIF9zZXRfc2V0dGluZ3MoYXJlYSA9IHRoaXMuYXJlYV9zZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgc2V0dGluZ3M6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2hpc3RvcnkoYXJlYSA9IHRoaXMuYXJlYV9oaXN0b3J5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IGhpc3Rvcnk6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0UuaGlzdG9yeSkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfdmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KSk7XHJcbiAgfSxcclxuICBfc2V0X2xvZyhsb2cpIHtcclxuICAgIGlmIChsb2cuY2xlYXIpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBbXSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9nZXRfbG9ncygpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgIGxvZ3MucHVzaChsb2cpO1xyXG4gICAgICBpZiAobG9ncy5sZW5ndGggPiBfR0xPQkFMX1NFVFRJTkdTLk1BWF9MT0dfRU5UUklFUykgbG9ncy5zaGlmdCgpO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IGxvZ3MgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfZW50cnkoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBoaXN0b3J5ID0gc3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmNsdWRlcyhlbnRyeS5uYW1lKSkgcmV0dXJuIHRoaXMuX3VwZGF0ZV9lbnRyeShlbnRyeSk7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5zZXQoeyBoaXN0b3J5OiBoaXN0b3J5IH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3VwZGF0ZShmaWVsZCwgdXBkYXRlciwgYXJlYSA9IHRoaXNbJ2FyZWFfJyArIGZpZWxkXSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmICghc3RvcmFnZVtmaWVsZF0pIHtcclxuICAgICAgICAgIHN0b3JhZ2VbZmllbGRdID0gX0NPUFkoX0RFRkFVTFRfU1RPUkFHRVtmaWVsZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cGRhdGUgPSB7fTtcclxuICAgICAgICB1cGRhdGVbZmllbGRdID0gdXBkYXRlci5jYWxsKHRoaXMsIHN0b3JhZ2VbZmllbGRdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQodXBkYXRlKS50aGVuKCgpID0+IHVwZGF0ZVtmaWVsZF0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0VYVEVORCwgX0dFVF9BQ1RJVkVfVEFCLCBfTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBub3RlZm9udHNpemU6IDEyLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICd0bSdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG4gIGpzX2luamVjdGlvbl9mYWlsdXJlOiAzNyxcclxuICBjc3NfaW5qZWN0aW9uX2ZhaWx1cmU6IDM4LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uNjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL3RtNDgucG5nXCI7IiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9