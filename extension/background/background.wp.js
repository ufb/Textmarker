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
    } else if (sameHashlessUrls && registered.entry && registered.entry.hashSensitive) {
      this.emit('hash:changed', newUrl);
    }
  },
  inject: function inject(tabId, url, frameId) {
    var _this3 = this;

    return this.injectContentScript(tabId, url, frameId).then(function () {
      _storage2["default"].get('history').then(function (history) {
        var matches = _this3.findMatchingEntries(history, url);

        var entries = _this3.filterMatches(matches, frameId);

        if (entries) {
          _this3.emit('entries:found', {
            entries: entries,
            recentlyOpenedEntry: _this3.recentlyOpenedEntry,
            locked: !!matches.lockedEntries.length
          }, {
            tab: tabId,
            frameId: frameId
          });

          _this3.recentlyOpenedEntry = null;
        }
      });

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
  findMatchingEntries: function findMatchingEntries(history, url) {
    var hashlessPageUrl = (0, _utils._HASHLESS)(url);
    var entries = history.entries;
    var lockedEntries = [];
    var nonLockedEntries = [];
    var entry, pageUrl, entryUrl;

    for (var e in entries) {
      entry = entries[e];

      if (entry.url) {
        pageUrl = entry.hashSensitive ? url : hashlessPageUrl;
        entryUrl = entry.hashSensitive ? entry.url : (0, _utils._HASHLESS)(entry.url);

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
    var _this6 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      var priv = windowInfo.incognito;
      if (!priv) sendResponse(!priv);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this6.emit('failed:pbm');else sendResponse(saveInPriv);
        });
      }
    });
  },
  onSaveNewRequest: function onSaveNewRequest(entry) {
    var _this7 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this7.emit('granted:save-entry', entry);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this7.emit('failed:pbm');else _this7.emit('granted:save-entry', entry);
        });
      }
    });
  },
  onUpdateRequest: function onUpdateRequest(entry) {
    var _this8 = this;

    return browser.windows.getLastFocused().then(function (windowInfo) {
      if (!windowInfo.incognito) _this8.emit('granted:update-entry', entry);else {
        _storage2["default"].get('privsave').then(function (saveInPriv) {
          if (!saveInPriv) _this8.emit('failed:pbm');else _this8.emit('granted:update-entry', entry);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsInJlZ2lzdGVyZWQiLCJzYW1lSGFzaGxlc3NVcmxzIiwicmVsb2FkZWQiLCJpbmplY3QiLCJsYXN0RnJhbWVJZCIsImlmcmFtZXMiLCJ3ZWJOYXZpZ2F0aW9uIiwiZ2V0QWxsRnJhbWVzIiwiZnJhbWVzIiwiZm9yRWFjaCIsImZyYW1lIiwiZnJhbWVJZCIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsImluamVjdENvbnRlbnRTY3JpcHQiLCJoaXN0b3J5IiwibWF0Y2hlcyIsImZpbmRNYXRjaGluZ0VudHJpZXMiLCJlbnRyaWVzIiwiZmlsdGVyTWF0Y2hlcyIsImxvY2tlZCIsImxvY2tlZEVudHJpZXMiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJydW5BdCIsImluc2VydENTUyIsImUiLCJ0b1N0cmluZyIsImhhc2hsZXNzUGFnZVVybCIsIm5vbkxvY2tlZEVudHJpZXMiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJsb2NrZWRFbnRyaWVzQ291bnQiLCJub25Mb2NrZWRFbnRyaWVzQ291bnQiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsImxhc3QiLCJvbk5hbWluZ1JlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJ3aW5kb3dJbmZvIiwicHJpdiIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwidmlwTm90ZSIsIm9uRmFpbGVkSW1wb3J0IiwiZXJyb3IxIiwiZXJyb3IyIiwiZXJyTWVzc2FnZTEiLCJlcnJNZXNzYWdlMiIsIm9uSW1wb3J0RXJyb3IiLCJvbkltcG9ydFN1Y2Nlc3MiLCJmYWlsdXJlTm90ZSIsIm9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uIiwic3VjY2Vzc05vdGUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwicGFnZUFjdGlvbiIsImhpZGUiLCJzaG93Iiwic2V0UGFuZWwiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwiQXJyYXkiLCJpc0FycmF5IiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsInNldEFyZWFzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwiY29ycmVjdE5hbWUiLCJ1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbiIsIml0ZXJhdGlvbiIsInN5bmNlZCIsInJlY2VpdmVkQ29tcGxldGVFbnRyeSIsImZvdW5kIiwiaGFzT3duUHJvcGVydHkiLCJkZWxldGVFbnRyaWVzIiwicG9wIiwidXBkYXRlRW50cnlPblJlc3RvcmF0aW9uIiwiZW50cnlOYW1lIiwicmVzdG9yZWRNYXJrcyIsImxvc3RNYXJrcyIsIm9sZExvc3RNYXJrcyIsInJlc3RvcmVkTWFya3NJRHMiLCJvbGRMb3N0TWFya3NJRHMiLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInBhZ2Vub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwidGFiRXZlbnRIYW5kbGVycyIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwidG9nZ2xlVGFiRXZlbnRIYW5kbGVycyIsImFkZFRhYkV2ZW50SGFuZGxlcnMiLCJiaW5kIiwicHJvcGVydGllcyIsInJlbW92ZVRhYkV2ZW50SGFuZGxlcnMiLCJldiIsInNlY3VyaXR5V2FybmluZyIsInNlbGYiLCJvcGVuQWRkb25QYWdlIiwib3BlbkluaXRQYWdlIiwib3BlblNlYXJjaCIsIndvcmQiLCJjdXN0b20iLCJkZWZhdWx0U2V0dGluZ3MiLCJfREVGQVVMVF9TVE9SQUdFIiwibm90ZVR5cGVzIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsIm5vdGVUeXBlIiwidG11aXBvcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwibm90ZWZvbnRzaXplIiwidGJicG93ZXIiLCJ0aGVtZXMiLCJ1cGRhdGVIaXN0b3J5Iiwib3JkZXIiLCJmaXhIaXN0b3J5RGF0ZXMiLCJsYW5nIiwiZW4iLCJkZSIsIm1lcmdlSGlzdG9yaWVzIiwibmV3SGlzdG9yeSIsIm9sZEhpc3RvcnkiLCJvbGRFbnRyaWVzIiwib2xkTmFtZXMiLCJhY2NlcHRlZEVudHJpZXMiLCJ1cmxFeGlzdHMiLCJfZW50cmllcyIsImEiLCJzZXRTdG9yYWdlT25VcGdyYWRlIiwiaXNFbXB0eSIsImVtcHR5IiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcGVuRW50cnlEZXRhaWxQYWdlIiwicG9wdXBVUkwiLCJnZXRDdXJyZW50IiwiY3VycmVudFdpbmRvdyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1pbiIsIl9QT1JUIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsIl9TVE9SRSIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJfc2V0X3N5bmMiLCJtZXRoIiwiX3VwZGF0ZSIsImNvbnN0cnVjdG9yIiwiX2dldF9tb2RlIiwiYXJlYV9zZXR0aW5ncyIsIl9nZXRfcHJpdnNhdmUiLCJfZ2V0X25hbWluZyIsIl9nZXRfdGJicG93ZXIiLCJfZ2V0X21hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsIl9zZXRfc3RvcmFnZSIsIl9zZXRfc2V0dGluZ3MiLCJfc2V0X2hpc3RvcnkiLCJhcmVhX2hpc3RvcnkiLCJfc2V0X3ZlcnNpb24iLCJfc2V0X2xvZyIsIl9nZXRfbG9ncyIsIk1BWF9MT0dfRU5UUklFUyIsInNoaWZ0IiwiX3NldF9lbnRyeSIsIl91cGRhdGVfZW50cnkiLCJjYWxsIiwiX0NPUFkiLCJfRVhURU5EIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsInoiLCJ5IiwicyIsImRvd25sb2FkIiwiY29weSIsImJtaWNvbiIsIm92ZXJ3cml0ZSIsImNoYW5nZWROb3RlIiwicHJvZ3Jlc3NiYXIiLCJtZXRhIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJqc19pbmplY3Rpb25fZmFpbHVyZSIsImNzc19pbmplY3Rpb25fZmFpbHVyZSIsImdldEtleUJ5VmFsdWUiLCJzcmMiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZW5hbWUiLCJsaW5lbm8iLCJjb2xubyIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJoIiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJ0b3BpY3MiLCJldmVudCIsImhhbmRsZXIiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm9iaiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsImYiLCJwb3N0TWVzc2FnZSIsInJlcSIsImxhc3RBcmciLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0IiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJhcmVhX3BhZ2Vub3RlcyIsInIiLCJzZXRUaW1lb3V0Iiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FB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QU1EOzs7O0VBdEd5QkosZSIsImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2JhY2tncm91bmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL2ljb25zL29uMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzIucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uNjQucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvdG00OC5wbmcnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL21vZHVsZXMvZXJyb3ItbG9nZ2luZydcclxuaW1wb3J0ICcuL21vZHVsZXMvaW5qZWN0aW9uLW1hbmFnZXInXHJcbmltcG9ydCBfTk9USUZJQ0FUSU9OUyBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IF9UQUJTIGZyb20gJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgX1dJTkRPV1MgZnJvbSAnLi9tb2R1bGVzL3dpbmRvd3MnXHJcbmltcG9ydCBfU0lERUJBUlMgZnJvbSAnLi9tb2R1bGVzL3NpZGViYXJzJ1xyXG5pbXBvcnQgX05BTUVSIGZyb20gJy4vbW9kdWxlcy9uYW1lcidcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHQtbWVudSdcclxuaW1wb3J0IF9QQUdFQUNUSU9OIGZyb20gJy4vbW9kdWxlcy9wYWdlLWFjdGlvbidcclxuLy9pbXBvcnQgX0lEQiBmcm9tICcuL21vZHVsZXMvaW5kZXhlZGRiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9zdG9yZS1tYW5hZ2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd0b2dnbGVPbkltcG9ydCcsXHJcbiAgICAgICdpbml0aWFsaXplZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ21pZ3JhdGVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnY2hlY2tlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZTphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDp0YmJwb3dlci1zZXR0aW5ncyc6ICdzZXRUQkJBY3Rpb24nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZlOiB0cnVlLFxyXG4gIHZlcnNpb246ICcnLFxyXG4gIGxvYWRSZWFzb246ICcnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy52ZXJzaW9uID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uIHx8IHZlcnNpb24gIT09IGN1cnJlbnRWZXJzaW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2FkUmVhc29uID0gdGhpcy5sb2FkUmVhc29uID0gZGV0YWlscy5yZWFzb247XHJcbiAgICAgICAgICBjb25zdCBwcmV2VmVyc2lvbiA9IGRldGFpbHMucHJldmlvdXNWZXJzaW9uIHx8ICcyJztcclxuICAgICAgICAgIGlmIChsb2FkUmVhc29uICYmIChsb2FkUmVhc29uID09PSAndXBkYXRlJyB8fCBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChsb2FkUmVhc29uICsgJzphcHAnLCBwcmV2VmVyc2lvbiwgbG9hZFJlYXNvbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uID09PSBjdXJyZW50VmVyc2lvbikgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLnNldCgndmVyc2lvbicsIHRoaXMudmVyc2lvbik7XHJcblxyXG4gICAgLy9fSURCKCk7XHJcbiAgICBfTk9USUZJQ0FUSU9OUygpO1xyXG4gICAgX1RBQlMoKTtcclxuICAgIF9OQU1FUigpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1dJTkRPV1MoKTtcclxuICAgIF9TSURFQkFSUygpO1xyXG4gICAgX1BBR0VBQ1RJT04oKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYWN0aXZhdGUodHJ1ZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnc3RhcnRlZDphcHAnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9hZFJlYXNvbikpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoYWN0aXZhdGUpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gYWN0aXZhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldFRCQkFjdGlvbigpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IG1vZGUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB0aGlzLmFjdGl2YXRlKG1vZGUpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOmFkZG9uJywgbW9kZSk7XHJcbiAgfSxcclxuICB0b2dnbGVPbkltcG9ydCgpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKG9uKSB7XHJcbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHBhdGg6IG9uID8ge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb24xNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vZmYxNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29mZjMyLnBuZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRUQkJBY3Rpb24oYWRkKSB7XHJcbiAgICBpZiAodHlwZW9mIGFkZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGlmIChhZGQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd0YmJwb3dlcicpLnRoZW4oZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IHRiYkhhbmRsZXIgPSB0aGlzLnRiYkhhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICcnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRiYkhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdjb250ZW50L3RiYi1tZW51L3RiYi1tZW51Lmh0bWwnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMudGJiSGFuZGxlcik7XHJcbiAgICAgIHRoaXMudGJiSGFuZGxlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtczoge1xyXG4gICAgICBtOiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIHc6IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgZDogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBiOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgbjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBzYjogeyBjb250ZXh0czogWydhbGwnLCAndGFiJ10gfSxcclxuICAgICAgYzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogW10sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpdGVtLmlkID0gaTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2N0eF8nICsgKGkgPT09ICctYicgPyAnZGInIDogaSkpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9IChpbmZvcywgdGFiKSA9PiB0aGlzLm9uQ2xpY2soaW5mb3MsIHRhYik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMuY3JlYXRlKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZShpZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnNwbGljZSh0aGlzLmNyZWF0ZWQuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsKCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGUob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVkO1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3Nob3J0Y3V0cycpLnRoZW4oc2hvcnRjdXRzID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzaG9ydGN1dHNbaV1bMl0pIHRoaXMuY3JlYXRlKGkpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soaW5mb3MsIHRhYikge1xyXG4gICAgICBjb25zdCBpZCA9IGluZm9zLm1lbnVJdGVtSWQ7XHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgcmVwb3J0KSB7XHJcbiAgICBsZXQgbG9nLCBtc2c7XHJcbiAgICBpZiAoZXJyb3IudGltZSkge1xyXG4gICAgICBsb2cgPSBbZXJyb3IudGltZSwgZXJyb3IubWVzc2FnZSArICcgWycgKyBlcnJvci5sb2NhdGlvbiArICddJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2cgPSBbKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgX0xPR19LRVlTW2Vycm9yXSB8fCBlcnJvcl07XHJcbiAgICAgIGlmIChyZXBvcnQgJiYgdHlwZW9mIHJlcG9ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsb2cucHVzaChyZXBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihyZXBvcnQpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnLCByZXBvcnQpO1xyXG4gIH0sXHJcbiAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3VybCcpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9wYm0nKTtcclxuICB9LFxyXG4gIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdqc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH0sXHJcbiAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoYW5nZWQ6dXJsJzogJ29uVVJMQ2hhbmdlJyxcclxuICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnb25UYWJDb21wbGV0ZWQnLFxyXG4gICAgICAnY2xpY2tlZDpwYWdlLWFjdGlvbic6ICdoYW5kbGVJbmplY3Rpb25zJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JzogJ29uU2F2ZU5ld1JlcXVlc3QnLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdvblVwZGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnbmFtZTplbnRyeT8nOiAnb25OYW1pbmdSZXF1ZXN0JyxcclxuICAgICAgJ29wZW5lZDplbnRyeSc6ICd0ZW1wU2F2ZUVudHJ5TWV0YURhdGEnXHJcbiAgICB9XHJcbiAgfSxcclxuICBxdWV1ZWRGb3JUYWJDb21wbGV0ZWQ6IHt9LFxyXG4gIGluamVjdGVkU2NyaXB0czoge30sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgb25UYWJDb21wbGV0ZWQodGFiSWQpIHtcclxuICAgIGlmICh0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKTtcclxuICAgICAgZGVsZXRlIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblVSTENoYW5nZSh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSA9IGNoYW5nZWQudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgY2hhbmdlZC51cmwsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUluamVjdGlvbnModGFiSWQsIG5ld1VybCwgbm9SZWxvYWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBoYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKSB7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkID0gdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdO1xyXG4gICAgY29uc3Qgc2FtZUhhc2hsZXNzVXJscyA9IHJlZ2lzdGVyZWQgJiYgX0hBU0hMRVNTKHJlZ2lzdGVyZWQudXJsKSA9PT0gX0hBU0hMRVNTKG5ld1VybCk7XHJcbiAgICBjb25zdCByZWxvYWRlZCA9IHJlZ2lzdGVyZWQgJiYgIW5vUmVsb2FkO1xyXG5cclxuICAgIGlmICghcmVnaXN0ZXJlZCB8fCByZWxvYWRlZCkge1xyXG4gICAgICB0aGlzLmluamVjdCh0YWJJZCwgbmV3VXJsLCAwKS50aGVuKGxhc3RGcmFtZUlkID0+IHtcclxuICAgICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBpZiAoc2V0dGluZ3MuYWRkb24uaWZyYW1lcykge1xyXG4gICAgICAgICAgICBicm93c2VyLndlYk5hdmlnYXRpb24uZ2V0QWxsRnJhbWVzKHsgdGFiSWQgfSkudGhlbihmcmFtZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGZyYW1lcy5mb3JFYWNoKGZyYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmcmFtZS5mcmFtZUlkICE9PSBsYXN0RnJhbWVJZCkgdGhpcy5pbmplY3QodGFiSWQsIGZyYW1lLnVybCwgZnJhbWUuZnJhbWVJZCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNhbWVIYXNobGVzc1VybHMgJiYgcmVnaXN0ZXJlZC5lbnRyeSAmJiByZWdpc3RlcmVkLmVudHJ5Lmhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdoYXNoOmNoYW5nZWQnLCBuZXdVcmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwsIGZyYW1lSWQpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIHVybCk7XHJcbiAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZmlsdGVyTWF0Y2hlcyhtYXRjaGVzLCBmcmFtZUlkKTtcclxuXHJcbiAgICAgICAgaWYgKGVudHJpZXMpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cmllczpmb3VuZCcsIHtcclxuICAgICAgICAgICAgZW50cmllcyxcclxuICAgICAgICAgICAgcmVjZW50bHlPcGVuZWRFbnRyeTogdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5LFxyXG4gICAgICAgICAgICBsb2NrZWQ6ICEhbWF0Y2hlcy5sb2NrZWRFbnRyaWVzLmxlbmd0aFxyXG4gICAgICAgICAgfSwgeyB0YWI6IHRhYklkLCBmcmFtZUlkIH0pO1xyXG5cclxuICAgICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBmcmFtZUlkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0Q29udGVudFNjcmlwdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcycsXHJcbiAgICAgIGZyYW1lSWQsXHJcbiAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfaWRsZSdcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF0gPSB7IHVybCB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0Q1NTKHRhYklkLCBmcmFtZUlkKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW1zZy5pbmNsdWRlcygnTWlzc2luZyBob3N0IHBlcm1pc3Npb24gZm9yIHRoZSB0YWInKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbnNlcnRDU1ModGFiSWQsIGZyYW1lSWQpIHtcclxuICAgIGJyb3dzZXIudGFicy5pbnNlcnRDU1ModGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi5jc3MnLFxyXG4gICAgICBmcmFtZUlkXHJcbiAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwpIHtcclxuICAgIGNvbnN0IGhhc2hsZXNzUGFnZVVybCA9IF9IQVNITEVTUyh1cmwpO1xyXG4gICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGxldCBlbnRyeSwgcGFnZVVybCwgZW50cnlVcmw7XHJcblxyXG4gICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tlXTtcclxuICAgICAgaWYgKGVudHJ5LnVybCkge1xyXG4gICAgICAgIHBhZ2VVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gdXJsIDogaGFzaGxlc3NQYWdlVXJsO1xyXG4gICAgICAgIGVudHJ5VXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IGVudHJ5LnVybCA6IF9IQVNITEVTUyhlbnRyeS51cmwpO1xyXG5cclxuICAgICAgICBpZiAocGFnZVVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBlbHNlIG5vbkxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBsb2NrZWRFbnRyaWVzLCBub25Mb2NrZWRFbnRyaWVzIH07XHJcbiAgfSxcclxuXHJcbiAgZmlsdGVyTWF0Y2hlcyhtYXRjaGVzLCBmcmFtZUlkKSB7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5sb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IG1hdGNoZXMubm9uTG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXNDb3VudCA9IGxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllc0NvdW50ID0gbm9uTG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBsZXQgZW50cmllcztcclxuXHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50ICYmIG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnKTtcclxuICAgICAgZW50cmllcyA9IGxvY2tlZEVudHJpZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgLy8gaWYgbXVsdGlwbGUgZW50cmllcyB3aXRoIHNhbWUgdXJsIGZvdW5kOiB0YWtlIGxhdGVzdFxyXG4gICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiAocHJldi5sYXN0ID4gY3VycmVudC5sYXN0KSA/IHByZXYgOiBjdXJyZW50KV07XHJcbiAgICAgIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVtaXQoJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZnJhbWVJZCkgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZCcsIGVudHJpZXNbMF0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcztcclxuICAgICAgaWYgKCFmcmFtZUlkKSB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kJywgbG9ja2VkRW50cmllcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50cmllcztcclxuICB9LFxyXG5cclxuICBvbk5hbWluZ1JlcXVlc3Qoc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBjb25zdCBwcml2ID0gd2luZG93SW5mby5pbmNvZ25pdG87XHJcbiAgICAgICAgaWYgKCFwcml2KSBzZW5kUmVzcG9uc2UoIXByaXYpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2Ugc2VuZFJlc3BvbnNlKHNhdmVJblByaXYpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uU2F2ZU5ld1JlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uVXBkYXRlUmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRlbXBTYXZlRW50cnlNZXRhRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBkYXRhO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZ3JhbnRlZDpzYXZlLWVudHJ5JzogJ25hbWUnLFxyXG4gICAgICAgICdyZW5hbWU6ZW50cnknOiAncmVuYW1lJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hbWUoZW50cnkpIHtcclxuICAgICAgaWYgKGVudHJ5Lm5hbWUpIHJldHVybiB0aGlzLmFkanVzdE5hbWUoZW50cnkubmFtZSwgZW50cnkpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB0aGlzLmFkanVzdE5hbWUobnVsbCwgZW50cnksIG5hbWluZykpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIHJlbmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmV3TmFtZSk7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIpIG5ld05hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5hbWVkOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBhZGp1c3ROYW1lKG5hbWUsIGVudHJ5LCBtZXRob2QpIHtcclxuICAgICAgbmFtZSA9IG5hbWUgPyBuYW1lIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ3RpdGxlJyA/IGVudHJ5LnRpdGxlLnRyaW0oKSA/IGVudHJ5LnRpdGxlLnRyaW0oKSA6IGVudHJ5LnVybCA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICdkYXRlJyA/IChuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSkgOiAnJztcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyICYmIGVudHJ5LmxvY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJywgJ2Vycm9yX2RvdWJsZV9sb2NrZWRfbmFtZScsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY291bnRlcikgbmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICAgIGVudHJ5Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCduYW1lZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBnZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSkge1xyXG4gICAgICBsZXQgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcyksXHJcbiAgICAgICAgICBsID0gZXhpc3RpbmdOYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBjb3VudGVyID0gMCxcclxuICAgICAgICAgIGNoZWNrcG9pbnQ7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgY2hlY2twb2ludCA9IGV4aXN0aW5nTmFtZXNbbF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpKSBjb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9LFxyXG4gICAgaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpIHtcclxuICAgICAgaWYgKG5hbWUgPT09IGNoZWNrcG9pbnQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgbGV0IGwgPSBuYW1lLmxlbmd0aCxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfc3RhcnQgPSBjaGVja3BvaW50LnN1YnN0cmluZygwLCBsKSxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfZW5kO1xyXG5cclxuICAgICAgaWYgKG5hbWUgIT09IGNoZWNrcG9pbnRfc3RhcnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGNoZWNrcG9pbnRfZW5kID0gY2hlY2twb2ludC5zdWJzdHJpbmcobCwgY2hlY2twb2ludC5sZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKC9eXFxzKlxcKFxcZCtcXCkkLy50ZXN0KGNoZWNrcG9pbnRfZW5kKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdvblNhdmVkRW50cnknLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJzogJ29uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cmllcyc6ICdvbkRlbGV0ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAgICdmYWlsZWQ6aW1wb3J0JzogJ29uRmFpbGVkSW1wb3J0JyxcclxuICAgICAgICAnZXJyb3I6aW1wb3J0JzogJ29uSW1wb3J0RXJyb3InLFxyXG4gICAgICAgICdpbXBvcnRlZDpzdG9yYWdlJzogJ29uSW1wb3J0U3VjY2VzcycsXHJcbiAgICAgICAgJ2Vycm9yJzogJ29uRXJyb3InLFxyXG4gICAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCc6ICdvbkNTU0luamVjdGlvbkZhaWx1cmUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5KGNvbmRpdGlvbiwgbWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihzZXR0aW5ncykpIHtcclxuICAgICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RleHRtYXJrZXI6ICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0eXBlKSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnaWNvbnMvdG00OC5wbmcnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlZEVudHJ5KCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVkX2VudHJ5JyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnBibU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcGJtJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfdXJsJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZEltcG9ydChlcnJvcjEsIGVycm9yMikge1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMSk7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UyID0gZXJyb3IyID8gJ1xcblxcbicgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjIpIDogJyc7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfZmFpbHVyZScsIGVyck1lc3NhZ2UxICsgZXJyTWVzc2FnZTIpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3dhcm5pbmcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydFN1Y2Nlc3MoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdWNjZXNzZnVsUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2Muc3VjY2Vzc05vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcihlcnJvciwgbmFtZSkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yLCBuYW1lKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlbGV0ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdqc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnY29tcGxldGVkOnRhYic6ICdzaG93J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnBhZ2VBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBhZ2UtYWN0aW9uJywgdGFiLmlkLCB0YWIudXJsKTtcclxuICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uaGlkZSh0YWIuaWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyh0YWJJZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5zaG93KHRhYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9HRVRfQUNUSVZFX1RBQiwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FjdGl2YXRlZDp0YWInOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2VudHJ5OmZvdW5kJzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAndXBkYXRlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6J3NlbmRFbnRyeScsXHJcbiAgICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnOiAnc2VuZE9yZGVyZWRNYXJrcydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuXHJcbiAgICBzZXRQYW5lbCh0YWJJZCwgdXJsKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuKCkudGhlbihvcGVuID0+IHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9IEFycmF5LmlzQXJyYXkoZW50cnkpID8gIWVudHJ5WzBdLmhhc2hTZW5zaXRpdmUgOiAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZyc6ICd0b2dnbGVIYXNoT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnOiAndG9nZ2xlUHJpdlNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJzogJ3RvZ2dsZU5vdGVPcHQnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAndG9nZ2xlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJzogJ3RvZ2dsZU5vdGlmaWNhdGlvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnOiAndG9nZ2xlVEJCUG93ZXJTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnOiAnY2hhbmdlU29ydE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJzogJ2NoYW5nZVZpZXdPcHQnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZyc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcbiAgICAgICdjaGFuZ2U6aWZyYW1lLXNldHRpbmcnOiAndG9nZ2xlSUZyYW1lT3B0JyxcclxuXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcic6ICdyZW1vdmVDdXN0b21NYXJrZXInLFxyXG4gICAgICAnYWRkOmN1c3RvbS1tYXJrZXInOiAnYWRkQ3VzdG9tTWFya2VyJyxcclxuXHJcbiAgICAgICduYW1lZDplbnRyeSc6ICdzYXZlRW50cnknLFxyXG4gICAgICAncmVuYW1lZDplbnRyeSc6ICdzYXZlTmV3TmFtZScsXHJcbiAgICAgICdjb3JyZWN0LW5hbWU6ZW50cnknOiAnY29ycmVjdE5hbWUnLFxyXG4gICAgICAnZ3JhbnRlZDp1cGRhdGUtZW50cnknOiAndXBkYXRlRW50cnlPblBhZ2VBY3Rpb24nLFxyXG4gICAgICAnZGVsZXRlOmVudHJpZXMnOiAnZGVsZXRlRW50cmllcycsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICd1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY2xlYW46ZW50cmllcyc6ICdjbGVhbkVudHJpZXMnLFxyXG4gICAgICAnc3luYzplbnRyeSc6ICdzeW5jRW50cnknLFxyXG4gICAgICAndGFnOmVudHJpZXMnOiAndGFnRW50cmllcycsXHJcbiAgICAgICdyZW1vdmU6dGFnJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICdhZGQ6dGFnJzogJ2FkZFRhZycsXHJcblxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYic6ICdjaGFuZ2VTQlNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSc6ICdjaGFuZ2VUaGVtZVNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJzogJ3VwZGF0ZVBhZ2VOb3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZU9uQ2hhbmdlZFN5bmM6IGZhbHNlLFxyXG5cclxuICAvLyBBRERPTiBNRVRIT0RTXHJcbiAgc2F2ZUFjdGl2YXRpb25TdGF0ZShhY3RpdmUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmFjdGl2ZSA9IGFjdGl2ZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTWU5DIE1FVEhPRFNcclxuICB0b2dnbGVTeW5jKGZpZWxkLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIGZ1bmN0aW9uKHN5bmMpIHtcclxuICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgIHRoaXMuc2V0QXJlYXMoc3luYyk7XHJcbiAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgfSwgJ2xvY2FsJylcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBzeW5jID0+IHtcclxuICAgICAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICAgICAgfSwgJ3N5bmMnKVxyXG5cclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6dG9nZ2xlLXN5bmMnLCBmaWVsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU0VUVElOR1MgTUVUSE9EU1xyXG4gIHVwZGF0ZVNldHRpbmdzKHVwZGF0ZXIsIHNldHRpbmcsIGVycm9yKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgdXBkYXRlcilcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOicgKyBzZXR0aW5nICsgJy1zZXR0aW5ncycpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBpZiAoZXJyb3IpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xyXG4gIH0sXHJcbiAgYWRkQ3VzdG9tTWFya2VyKGtleSwgc3R5bGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gIHsgc3R5bGUgfTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IG1hcmtlci5zdHlsZS5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUF1dG9Ob3RlU2V0dGluZyhrZXksIGF1dG9ub3RlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5hdXRvbm90ZSA9IGF1dG9ub3RlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvbm90ZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3RvZ2dsZV9hdXRvbm90ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNYXJrTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPSBtZXRob2Q7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmstbWV0aG9kJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbWFya19tZXRob2QnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2hvcnRjdXRTZXR0aW5nKGtleSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzFdID0gc3RhdHVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX190b2dnbGVfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2hvcnRjdXRTZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMF0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU29ydE9wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzb3J0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVZpZXdPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS52aWV3ID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ZpZXcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ3VzdG9tU2VhcmNoKHZhbHVlcykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCA9IHZhbHVlczsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3VzdG9tLXNlYXJjaCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zZWFyY2gnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ291bnRQZXJQYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkucHAgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY291bnQtcGVyLXBhZ2UnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQ3RtU2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzJdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N0bScsXHJcbiAgICAgICdlcnJvcl9zYXZlX2N0bSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXRPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaW1tdXQgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2ltbXV0b3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRHJvcExvc3Nlc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdkcm9wbG9zc2Vzb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSGFzaE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdoYXNob3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVByaXZTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ByaXZzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfcHJpdidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VOYW1pbmdPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkubmFtaW5nID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICduYW1pbmcnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9uYW1pbmcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICBzd2l0Y2hRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RpZmljYXRpb25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNaXNjU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWlzYydcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVUQkJQb3dlclNldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3RiYnBvd2VyJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUF1dG9jc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvY3MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvY3MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSUZyYW1lT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpZnJhbWVzJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfaWZyYW1lcydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTQlNldHRpbmdzKHRhYiwgdW5mb2xkZWQpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRhYnNbdGFiXS51bmZvbGRlZCA9IHVuZm9sZGVkOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcbiAgY2hhbmdlVGhlbWVTZXR0aW5ncyh0aGVtZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGhlbWUgPSB0aGVtZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBISVNUT1JZIE1FVEhPRFNcclxuICBjbGVhbkVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgaSA9IG5hbWVzLmxlbmd0aCwgbmFtZTtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzW25hbWVdKSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdC5sZW5ndGggPSAwO1xyXG4gICAgICAgIGVsc2UgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnbG9jYWwnKSB7IHRoaXMuZW1pdCgnY2xlYW5lZDplbnRyaWVzJyk7IH19KVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfY2xlYW5faGlzdG9yeScpKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmNsZWFuRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KTtcclxuICB9LFxyXG4gIHNhdmVFbnRyeShlbnRyeSkge1xyXG4gICAgZW50cnkubG9zdCA9IFtdO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3NhdmVkOmVudHJ5JywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnNhdmUtZW50cnknLCAnZXJyb3Jfc2F2ZV9lbnRyeScpKTtcclxuICB9LFxyXG4gIHNhdmVOZXdOYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tvbGROYW1lXSk7XHJcbiAgICAgIGVudHJ5Lm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmV3TmFtZV0gPSBlbnRyeTtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW5hbWUnLCBoaXN0b3J5LmVudHJpZXNbbmV3TmFtZV0sIG9sZE5hbWUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKTtcclxuICB9LFxyXG4gIGNvcnJlY3ROYW1lKG5hbWUsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubmFtZSA9IG5hbWU7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgYXJlYSwgaXRlcmF0aW9uID0gMCkge1xyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgaXRlcmF0aW9uKys7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBjb25zdCByZWNlaXZlZENvbXBsZXRlRW50cnkgPSAhIWVudHJ5LnVybDtcclxuICAgIGxldCBmb3VuZCA9IHRydWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGlmIChyZWNlaXZlZENvbXBsZXRlRW50cnkpIHtcclxuICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghaGlzdG9yeS5lbnRyaWVzW25hbWVdKSB7XHJcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWxldGUgZW50cnkuc3luY2VkO1xyXG4gICAgICAgICAgZm9yIChsZXQgZSBpbiBlbnRyeSkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuaGFzT3duUHJvcGVydHkoZSkpIHtcclxuICAgICAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV1bZV0gPSBlbnRyeVtlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKCFmb3VuZCAmJiBpdGVyYXRpb24gPCAyKSB7IHRoaXMudXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGVudHJ5LnN5bmNlZCA/ICdsb2NhbCcgOiAnc3luYycsIGl0ZXJhdGlvbik7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1vbi1zYXZlJywgZW50cnkpKTtcclxuICB9LFxyXG4gIGRlbGV0ZUVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzICYmIE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHVybCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS51cmwgfHwgJyc7XHJcbiAgICAgICAgICBoYXNoU2Vuc2l0aXZlID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmhhc2hTZW5zaXRpdmUgfHwgJyc7XHJcblxyXG4gICAgICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyeScsIG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpkZWxldGUtZW50cmllcycsICdlcnJvcl9kZWxfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmRlbGV0ZUVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdkZWxldGVkOmVudHJpZXMnKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24oZW50cnlOYW1lLCByZXN0b3JlZE1hcmtzLCBsb3N0TWFya3MsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzID0gaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICAgIGNvbnN0IHJlc3RvcmVkTWFya3NJRHMgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrc0lEcyA9IFtdO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLm1hcmtzID0gcmVzdG9yZWRNYXJrcztcclxuXHJcbiAgICAgICAgICByZXN0b3JlZE1hcmtzLmZvckVhY2gobWFyayA9PiByZXN0b3JlZE1hcmtzSURzLnB1c2gobWFyay5pZCkpO1xyXG5cclxuICAgICAgICAgIGxldCBsID0gb2xkTG9zdE1hcmtzLmxlbmd0aCwgaWQ7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IG9sZExvc3RNYXJrc1tsXS5pZDtcclxuICAgICAgICAgICAgaWYgKHJlc3RvcmVkTWFya3NJRHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3NJRHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsb3N0TWFya3MuZm9yRWFjaChtYXJrID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvbGRMb3N0TWFya3NJRHMuaW5jbHVkZXMobWFyay5pZCkpIG9sZExvc3RNYXJrcy5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCA9IG9sZExvc3RNYXJrcztcclxuXHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzeW5jRW50cnkobmFtZSwgdmFsKSB7XHJcbiAgICBjb25zdCBhcmVhXzEgPSB2YWwgPyAnbG9jYWwnIDogJ3N5bmMnO1xyXG4gICAgY29uc3QgYXJlYV8yID0gdmFsID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBsZXQgZW50cnk7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW25hbWVdKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdmFsO1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWFfMSlcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYV8yKVxyXG5cclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1zeW5jJywgZW50cnkpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzeW5jLWVudHJ5JywgbmFtZSkpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRhZ0VudHJpZXMobmFtZXMsIHRhZykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgIG5hbWVzLnN5bmMuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCAnc3luYycpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICAgICAgbmFtZXMubG9jYWwuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sICdsb2NhbCcpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHJlbW92ZVRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWRFbnRyeSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJyk7XHJcbiAgICAgIGlmIChzdG9yZWRFbnRyeS50YWcpIHtcclxuICAgICAgICBzdG9yZWRFbnRyeS50YWcgPSBzdG9yZWRFbnRyeS50YWdcclxuICAgICAgICAgIC5yZXBsYWNlKHJ4LCAnICcpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXlxcc3xcXHMkLywgJycpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXFxzezIsfS8sICcgJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKTtcclxuICB9LFxyXG4gIGFkZFRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkVGFnVG9FbnRyeShoaXN0b3J5LmVudHJpZXNbbmFtZV0sIHRhZyk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSk7XHJcbiAgfSxcclxuICBhZGRUYWdUb0VudHJ5KGVudHJ5LCB0YWcpIHtcclxuICAgIGlmICghdGFnKSBlbnRyeS50YWcgPSAnJztcclxuICAgIGVsc2UgaWYgKCFlbnRyeS50YWcpIGVudHJ5LnRhZyA9IHRhZztcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnLCAnZycpO1xyXG4gICAgICBpZiAoZW50cnkudGFnLnNlYXJjaChyeCkgPT09IC0xKSB7XHJcbiAgICAgICAgZW50cnkudGFnICs9ICcgJyArIHRhZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGVudHJ5KTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG5cclxuICAvLyBQQUdFIE5PVEUgTUVUSE9EU1xyXG4gIHVwZGF0ZVBhZ2VOb3Rlcyh1cmwsIG5vdGVzKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3BhZ2Vub3RlcycsIHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgIHBhZ2Vub3Rlc1t1cmxdID0gbm90ZXM7XHJcbiAgICAgIHJldHVybiBwYWdlbm90ZXM7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLm9uU3RvcmFnZUNoYW5nZWQpKTtcclxuICB9LFxyXG4gIG9uU3RvcmFnZUNoYW5nZWQoY2hhbmdlZEl0ZW0pIHtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5zZXR0aW5ncykgdGhpcy5lbWl0KCd1cGRhdGVkOnNldHRpbmdzJyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uaGlzdG9yeSkgdGhpcy5lbWl0KCd1cGRhdGVkOmhpc3RvcnknKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5wYWdlbm90ZXMpIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlbm90ZXMnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlVGFiRXZlbnRIYW5kbGVycycsXHJcbiAgICAgICAgLy8nc3RhcnRlZDphcHAnOiAnb3BlbkluaXRQYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHRiYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShhbSknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ2xvb2t1cDp3b3JkJzogJ29wZW5TZWFyY2gnLFxyXG4gICAgICAgICdvcGVuOmVudHJpZXMnOiAnb3BlbidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVybHM6IHtcclxuICAgICAgbmV3czogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXdzJyxcclxuICAgICAgc2V0dGluZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c2V0dGluZ3MnLFxyXG4gICAgICBoaXN0b3J5OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWhpc3RvcnknLFxyXG4gICAgICBpbmZvOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ldycsXHJcbiAgICAgIGhlbHA6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bWFudWFsJyxcclxuICAgICAgY29udGFjdDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1jb250YWN0JyxcclxuICAgICAgbG9nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1sb2dzJyxcclxuICAgICAgZXhwb3J0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWV4cG9ydCcsXHJcbiAgICAgIHN5bmM6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c3luYydcclxuICAgIH0sXHJcbiAgICB0YWJFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgIG9uQWN0aXZhdGVkOiBudWxsLFxyXG4gICAgICBvblVwZGF0ZWQ6IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMobW9kZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uQWN0aXZhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkID0gdGhpcy5vbkFjdGl2YXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihvbkFjdGl2YXRlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQgPSB0aGlzLm9uVXBkYXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIob25VcGRhdGVkLCB7IHByb3BlcnRpZXM6IFsnc3RhdHVzJ10gfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBbJ29uQWN0aXZhdGVkJywgJ29uVXBkYXRlZCddLmZvckVhY2goZXYgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnNbZXZdLnJlbW92ZUxpc3RlbmVyKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFiRXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZFRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH0sXHJcbiAgICBvbkFjdGl2YXRlZCh0YWIpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhY3RpdmF0ZWQ6dGFiJywgdGFiLnRhYklkLCAodGFiLnVybCB8fCAnJykpO1xyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlZCh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgICBpZiAoY2hhbmdlZC51cmwpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQ6dGFiJywgdGFiSWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW4odXJscywgbmFtZXMpIHtcclxuICAgICAgdXJscyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJyA/IFt1cmxzXSA6IHVybHM7XHJcbiAgICAgIG5hbWVzID0gdHlwZW9mIG5hbWVzID09PSAnc3RyaW5nJyA/IFtuYW1lc10gOiBuYW1lcztcclxuICAgICAgbGV0IGwgPSB1cmxzLmxlbmd0aCxcclxuICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IGZhbHNlLFxyXG4gICAgICAgICAgdXJsO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uKHNlbGYsIGwpIHtcclxuICAgICAgICAgIHVybCA9IHVybHNbbF07XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiB1cmxzW2xdIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZWN1cml0eVdhcm5pbmcpIHNlbGYuZW1pdCgnZmFpbGVkOm9wZW4tdGFiJyk7XHJcbiAgICAgICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuYW1lcykgc2VsZi5lbWl0KCdvcGVuZWQ6ZW50cnknLCB7IHVybDogdXJsLCBuYW1lOiBuYW1lc1tsXSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkodGhpcywgbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuQWRkb25QYWdlKGlkKSB7XHJcbiAgICAgIHRoaXMub3Blbih0aGlzLnVybHNbaWRdKTtcclxuICAgIH0sXHJcbiAgICBvcGVuSW5pdFBhZ2UodmVyc2lvbiwgbG9hZFJlYXNvbikge1xyXG4gICAgICBpZiAobG9hZFJlYXNvbiAmJiBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcgfHwgbG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScpIHRoaXMub3BlbkFkZG9uUGFnZSgnbmV3cycpO1xyXG4gICAgfSxcclxuICAgIG9wZW5TZWFyY2god29yZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IGN1c3RvbSA9IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoLCB1cmw7XHJcbiAgICAgICAgaWYgKGN1c3RvbSkgdXJsID0gJ2h0dHBzOi8vJyArIGN1c3RvbVswXSArIHdvcmQgKyBjdXN0b21bMV07XHJcbiAgICAgICAgZWxzZSB1cmwgPSAnaHR0cHM6Ly8nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyArIHdvcmQ7XHJcbiAgICAgICAgdGhpcy5vcGVuKHVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZTphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdpbnN0YWxsOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2NoZWNrOnN0b3JhZ2UnOiAnY2hlY2tTdG9yYWdlT25TdGFydCcsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZSc6ICdpbXBvcnRTdG9yYWdlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHNldHRpbmdzLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IHNldHRpbmdzLm1pc2M7XHJcbiAgICAgICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlIHZpcE5vdGUnLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLm4pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5uID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5uO1xyXG4gICAgICAgICAgbWlzYy5ub3RlaWNvbiA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgICAgICAgbWlzYy5ub3Rlb25jbGljayA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5hcnJvd3VwKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3d1cCA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3d1cDtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd2Rvd24gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93ZG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuZFswXSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmRbMF0gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLnNiKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLnNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5jbSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmNtID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5jbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWFya2Vycy5tLnN0eWxlKSB7XHJcbiAgICAgICAgICBsZXQgc3R5bGU7XHJcbiAgICAgICAgICBmb3IgKGxldCBtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBtYXJrZXJzW21dO1xyXG4gICAgICAgICAgICBtYXJrZXJzW21dID0geyBzdHlsZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnNvcnRlZCkge1xyXG4gICAgICAgICAgaGlzdG9yeS5zb3J0ZWQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGlzdG9yeS52aWV3KSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3Rvcnkuc2F2ZUluUHJpdiAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNhdmVJblByaXYgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaW1tdXQgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pbW11dCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaWdub3JlSGFzaCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5Lmlnbm9yZUhhc2ggPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuZHJvcExvc3NlcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmRyb3BMb3NzZXMgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm90ZVR5cGVzLmZvckVhY2gobm90ZVR5cGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBtaXNjW25vdGVUeXBlXSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIG1pc2Nbbm90ZVR5cGVdID0gZGVmYXVsdFNldHRpbmdzLm1pc2Nbbm90ZVR5cGVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbWlzYy50bXVpcG9zKSB7XHJcbiAgICAgICAgICBtaXNjLnRtdWlwb3MgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXRyYW5zcCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGV0cmFuc3AgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXBsYWludmlldyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGVwbGFpbnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlcGxhaW52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1pc2Mubm90ZWZvbnRzaXplKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGVmb250c2l6ZSA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVmb250c2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtaXNjLm1hcmttZXRob2QpIHtcclxuICAgICAgICAgIG1pc2MubWFya21ldGhvZCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm1hcmttZXRob2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy50YmJwb3dlciAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLnRiYnBvd2VyID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNiKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zYjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5zYi50aGVtZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGFicy50aGVtZXMgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGFicy50aGVtZXM7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50aGVtZSA9IGRlZmF1bHRTZXR0aW5ncy5zYi50aGVtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWRkb24uYXV0b2NzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IGRlZmF1bHRTZXR0aW5ncy5hZGRvbi5hdXRvY3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWRkb24uaWZyYW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzID0gZGVmYXVsdFNldHRpbmdzLmFkZG9uLmlmcmFtZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJyk7XHJcbiAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxuICB9LFxyXG4gIHVwZGF0ZUhpc3RvcnkoaGlzdG9yeSkge1xyXG4gICAgZGVsZXRlIGhpc3Rvcnkub3JkZXI7XHJcblxyXG4gICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgIGVudHJ5O1xyXG5cclxuICAgIGlmICghbCkgcmV0dXJuIGhpc3Rvcnk7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBlbnRyeSA9IHRoaXMuZml4SGlzdG9yeURhdGVzKGVudHJpZXNbbmFtZXNbbF1dKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdHlwZW9mIGVudHJ5LnN5bmNlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGlzdG9yeTtcclxuICB9LFxyXG4gIGZpeEhpc3RvcnlEYXRlcyhlbnRyeSkge1xyXG4gICAgY29uc3QgbGFuZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkuZmlyc3QgIT09ICdudW1iZXInKSBlbnRyeS5maXJzdCA9IG5ldyBEYXRlKChlbnRyeS5maXJzdFtsYW5nXSB8fCBlbnRyeS5maXJzdC5lbiB8fCBlbnRyeS5maXJzdC5kZSB8fCBlbnRyeS5maXJzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5sYXN0ICE9PSAnbnVtYmVyJykgZW50cnkubGFzdCA9IG5ldyBEYXRlKChlbnRyeS5sYXN0W2xhbmddIHx8IGVudHJ5Lmxhc3QuZW4gfHwgZW50cnkubGFzdC5kZSB8fCBlbnRyeS5sYXN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuICBtZXJnZUhpc3RvcmllcyhuZXdIaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihvbGRIaXN0b3J5ID0+IHtcclxuXHJcbiAgICAgIGxldCBlbnRyaWVzID0gbmV3SGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgIG9sZEVudHJpZXMgPSBvbGRIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBvbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZEVudHJpZXMpLFxyXG4gICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzID0ge30sXHJcbiAgICAgICAgICBuYW1lLCBlbnRyeSwgdXJsLCB1cmxFeGlzdHMsIGU7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICB1cmxFeGlzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCFvbGROYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdXJsID0gZW50cnkudXJsO1xyXG5cclxuICAgICAgICAgIGZvciAoZSBpbiBvbGRFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRFbnRyaWVzW2VdLnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgdXJsRXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF1cmxFeGlzdHMpIHtcclxuICAgICAgICAgICAgZW50cnkuc3luY2VkID0gYXJlYSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgICAgICBhY2NlcHRlZEVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBfZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYSBpbiBhY2NlcHRlZEVudHJpZXMpIHtcclxuICAgICAgICAgIF9lbnRyaWVzW2FdID0gYWNjZXB0ZWRFbnRyaWVzW2FdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgfSwgYXJlYSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXRTdG9yYWdlT25VcGdyYWRlKHByZXZWZXJzaW9uID0gJzInLCBsb2FkUmVhc29uKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICBpZiAobG9hZFJlYXNvbiAhPT0gJ2luc3RhbGwnKSB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUnKTtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCAnc3luYycpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJykpXHJcbiAgICAvLy50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pKVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnLCBwcmV2VmVyc2lvbik7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24nLCBlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjaGVja1N0b3JhZ2VPblN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnc3luYycpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgIH0pKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKTtcclxuICB9LFxyXG4gIGltcG9ydFN0b3JhZ2UoaW1wb3J0ZWRTdG9yYWdlLCBhcmVhKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSBpbXBvcnRlZFN0b3JhZ2Uuc2V0dGluZ3MsXHJcbiAgICAgICAgaGlzdG9yeSA9IGltcG9ydGVkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgIGlmICghaGlzdG9yeSAmJiAhc2V0dGluZ3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfZW1wdHknKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIWhpc3RvcnkpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICBlbHNlIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2Vzc19zID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3NfaCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3VjY2Vzc19zKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NfcyA9PT0gJ291dGRhdGVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpzZXR0aW5ncyBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpIHtcclxuICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCdvdXRkYXRlZCcpO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9LFxyXG4gIGltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVyZ2VIaXN0b3JpZXModGhpcy51cGRhdGVIaXN0b3J5KGhpc3RvcnksIHRydWUpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd2aWV3OmVudHJ5JzogJ29wZW5FbnRyeURldGFpbFBhZ2UnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3BlbkVudHJ5RGV0YWlsUGFnZShuYW1lKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwVVJMID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnY29udGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5odG1sJyk7XHJcblxyXG4gICAgICBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgpLnRoZW4oY3VycmVudFdpbmRvdyA9PiB7XHJcblxyXG4gICAgICAgIGJyb3dzZXIud2luZG93cy5jcmVhdGUoe1xyXG4gICAgICAgICAgdXJsOiBwb3B1cFVSTCArICcjJyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcclxuICAgICAgICAgIHR5cGU6ICdwYW5lbCcsXHJcbiAgICAgICAgICBoZWlnaHQ6IGN1cnJlbnRXaW5kb3cuaGVpZ2h0IC0gMjIsXHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5taW4oY3VycmVudFdpbmRvdy53aWR0aCwgOTgwKSxcclxuICAgICAgICAgIGluY29nbml0bzogY3VycmVudFdpbmRvdy5pbmNvZ25pdG9cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxubmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYmFja2dyb3VuZCcsXHJcbiAgdHlwZTogJ2JhY2tncm91bmQnLFxyXG4gIHBvc3Rwb25lQ29ubmVjdGlvbjogdHJ1ZSxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5LW9uLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnLFxyXG4gICAgICAndXBkYXRlZDpsb2dzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmJnLWNvbG9yLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3VzdG9tLXNlYXJjaC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNhdmVvcHQtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncycsXHJcbiAgICAgICdlbnRyaWVzOmZvdW5kJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyaWVzJyxcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknLFxyXG4gICAgICAnY3R4Om0nLFxyXG4gICAgICAnY3R4OmQnLFxyXG4gICAgICAnY3R4OmInLFxyXG4gICAgICAnY3R4Oi1iJyxcclxuICAgICAgJ2N0eDpuJyxcclxuICAgICAgJ2N0eDpjJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAnY2hhbmdlZDp1cmwnXHJcbiAgICBdLFxyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9TVE9SRX0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoJ2xvZ3MnKTtcclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgbGV0IHN5bmMgPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLnN5bmMgPyBsb2NhbFN0b3JhZ2Uuc3luYyA6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYztcclxuICAgICAgcmV0dXJuIHRoaXMuX3NldF9zeW5jKHN5bmMpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0KGZpZWxkLCB2YWwpIHtcclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfc2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG4gICAgcmV0dXJuIHRoaXNbJ19zZXRfJyArIGZpZWxkXSh2YWwpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGUoLi4uYXJncyk7XHJcbiAgfSxcclxuXHJcbiAgaXNFbXB0eShhcmVhID0gJ3N5bmMnKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAoIU9iamVjdC5rZXlzKHN0b3JhZ2UpLmxlbmd0aCAmJiBzdG9yYWdlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfcHJpdnNhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RiYnBvd2VyKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcblxyXG4gIF9zZXRfc3RvcmFnZShhcmVhID0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NldF9zZXR0aW5ncyhhcmVhKS50aGVuKCgpID0+IHRoaXMuX3NldF9oaXN0b3J5KGFyZWEpKTtcclxuICB9LFxyXG4gIF9zZXRfc3luYyhzeW5jKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHN5bmM6IHN5bmMgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgc3luYzogc3luYyB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXRBcmVhcyhzeW5jKSk7XHJcbiAgfSxcclxuICBfc2V0X3NldHRpbmdzKGFyZWEgPSB0aGlzLmFyZWFfc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IHNldHRpbmdzOiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9oaXN0b3J5KGFyZWEgPSB0aGlzLmFyZWFfaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBoaXN0b3J5OiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLmhpc3RvcnkpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3ZlcnNpb24odmVyc2lvbikge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSkpO1xyXG4gIH0sXHJcbiAgX3NldF9sb2cobG9nKSB7XHJcbiAgICBpZiAobG9nLmNsZWFyKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogW10gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0X2xvZ3MoKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICBsb2dzLnB1c2gobG9nKTtcclxuICAgICAgaWYgKGxvZ3MubGVuZ3RoID4gX0dMT0JBTF9TRVRUSU5HUy5NQVhfTE9HX0VOVFJJRVMpIGxvZ3Muc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBsb2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2VudHJ5KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgaGlzdG9yeSA9IHN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMoZW50cnkubmFtZSkpIHJldHVybiB0aGlzLl91cGRhdGVfZW50cnkoZW50cnkpO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uc2V0KHsgaGlzdG9yeTogaGlzdG9yeSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF91cGRhdGUoZmllbGQsIHVwZGF0ZXIsIGFyZWEgPSB0aGlzWydhcmVhXycgKyBmaWVsZF0pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2VbZmllbGRdKSB7XHJcbiAgICAgICAgICBzdG9yYWdlW2ZpZWxkXSA9IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0VbZmllbGRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgdXBkYXRlW2ZpZWxkXSA9IHVwZGF0ZXIuY2FsbCh0aGlzLCBzdG9yYWdlW2ZpZWxkXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHVwZGF0ZSkudGhlbigoKSA9PiB1cGRhdGVbZmllbGRdKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9FWFRFTkQsIF9HRVRfQUNUSVZFX1RBQiwgX01PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgbm90ZWZvbnRzaXplOiAxMixcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAndG0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuICBqc19pbmplY3Rpb25fZmFpbHVyZTogMzcsXHJcbiAgY3NzX2luamVjdGlvbl9mYWlsdXJlOiAzOCxcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjMyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy90bTQ4LnBuZ1wiOyIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==