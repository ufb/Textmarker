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
        browser.webNavigation.getAllFrames({
          tabId: tabId
        }).then(function (frames) {
          frames.forEach(function (frame) {
            if (frame.frameId !== lastFrameId) _this2.inject(tabId, frame.url, frame.frameId);
          });
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

        var entries = _this3.filterMatches(matches);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsInJlZ2lzdGVyZWQiLCJzYW1lSGFzaGxlc3NVcmxzIiwicmVsb2FkZWQiLCJpbmplY3QiLCJsYXN0RnJhbWVJZCIsIndlYk5hdmlnYXRpb24iLCJnZXRBbGxGcmFtZXMiLCJmcmFtZXMiLCJmb3JFYWNoIiwiZnJhbWUiLCJmcmFtZUlkIiwiZW50cnkiLCJoYXNoU2Vuc2l0aXZlIiwiaW5qZWN0Q29udGVudFNjcmlwdCIsImhpc3RvcnkiLCJtYXRjaGVzIiwiZmluZE1hdGNoaW5nRW50cmllcyIsImVudHJpZXMiLCJmaWx0ZXJNYXRjaGVzIiwibG9ja2VkIiwibG9ja2VkRW50cmllcyIsInRhYnMiLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsInJ1bkF0IiwiaW5zZXJ0Q1NTIiwiZSIsInRvU3RyaW5nIiwiaGFzaGxlc3NQYWdlVXJsIiwibm9uTG9ja2VkRW50cmllcyIsInBhZ2VVcmwiLCJlbnRyeVVybCIsImxvY2tlZEVudHJpZXNDb3VudCIsIm5vbkxvY2tlZEVudHJpZXNDb3VudCIsIm9uTmFtaW5nUmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIndpbmRvd3MiLCJnZXRMYXN0Rm9jdXNlZCIsIndpbmRvd0luZm8iLCJwcml2IiwiaW5jb2duaXRvIiwic2F2ZUluUHJpdiIsIm9uU2F2ZU5ld1JlcXVlc3QiLCJvblVwZGF0ZVJlcXVlc3QiLCJ0ZW1wU2F2ZUVudHJ5TWV0YURhdGEiLCJkYXRhIiwibmFtZSIsImFkanVzdE5hbWUiLCJuYW1pbmciLCJyZW5hbWUiLCJvbGROYW1lIiwibmV3TmFtZSIsImFyZWEiLCJzdWJzdHJpbmciLCJfR0xPQkFMX1NFVFRJTkdTIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJjb3VudGVyIiwiZ2V0RG91YmxlTmFtZUNvdW50IiwibWV0aG9kIiwidHJpbSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJleGlzdGluZ05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImwiLCJjaGVja3BvaW50IiwiaXNEb3VibGVOYW1lIiwiY2hlY2twb2ludF9zdGFydCIsImNoZWNrcG9pbnRfZW5kIiwidGVzdCIsIm5vdGlmeSIsImNvbmRpdGlvbiIsInR5cGUiLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImdldFVSTCIsIm9uU2F2ZWRFbnRyeSIsInNhdmVOb3RlIiwibWlzYyIsInBibU5vdGUiLCJ2aXBOb3RlIiwib25GYWlsZWRJbXBvcnQiLCJlcnJvcjEiLCJlcnJvcjIiLCJlcnJNZXNzYWdlMSIsImVyck1lc3NhZ2UyIiwib25JbXBvcnRFcnJvciIsIm9uSW1wb3J0U3VjY2VzcyIsImZhaWx1cmVOb3RlIiwib25TdWNjZXNzZnVsUmVzdG9yYXRpb24iLCJzdWNjZXNzTm90ZSIsIm9uU2F2ZUVycm9yIiwib25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yIiwib25EZWxldGVFcnJvciIsImVycm9yTm90ZSIsIm9uRXJyb3IiLCJwYWdlQWN0aW9uIiwiaGlkZSIsInNob3ciLCJzZXRQYW5lbCIsImlzT3BlbiIsInBhbmVsIiwic3RvcmVFbnRyeSIsImlnbm9yZUhhc2giLCJBcnJheSIsImlzQXJyYXkiLCJ1cGRhdGVFbnRyeSIsInRhYlVybCIsInJlbW92ZUVudHJ5Iiwic2F2ZWRVcmwiLCJzZW5kRW50cnkiLCJoYXNobGVzc1VybCIsImVudHJpZXNGb3JUaGlzVGFiIiwic2VuZE9yZGVyZWRNYXJrcyIsIm1hcmtzIiwidXBkYXRlT25DaGFuZ2VkU3luYyIsInNhdmVBY3RpdmF0aW9uU3RhdGUiLCJ0b2dnbGVTeW5jIiwiZmllbGQiLCJ2YWwiLCJzeW5jIiwic2V0QXJlYXMiLCJ1cGRhdGVTZXR0aW5ncyIsInVwZGF0ZXIiLCJzZXR0aW5nIiwiYWRkQ3VzdG9tTWFya2VyIiwia2V5Iiwic3R5bGUiLCJtYXJrZXJzIiwicmVtb3ZlQ3VzdG9tTWFya2VyIiwiY2hhbmdlU3R5bGUiLCJjaGFuZ2VCZ0NvbG9yIiwiY29sb3IiLCJtYXJrZXIiLCJzcGxpdCIsInJlcGxhY2UiLCJjaGFuZ2VBdXRvTm90ZVNldHRpbmciLCJhdXRvbm90ZSIsImNoYW5nZU1hcmtNZXRob2QiLCJtYXJrbWV0aG9kIiwidG9nZ2xlU2hvcnRjdXRTZXR0aW5nIiwiY2hhbmdlU2hvcnRjdXRTZXR0aW5nIiwidmFsdWUiLCJjaGFuZ2VTb3J0T3B0Iiwic29ydGVkIiwiY2hhbmdlVmlld09wdCIsInZpZXciLCJjaGFuZ2VDdXN0b21TZWFyY2giLCJ2YWx1ZXMiLCJjdXN0b21TZWFyY2giLCJjaGFuZ2VDb3VudFBlclBhZ2UiLCJwcCIsInRvZ2dsZUN0bVNldHRpbmciLCJjaGFuZ2VTYXZlT3B0IiwiYXV0b3NhdmUiLCJ0b2dnbGVJbW11dE9wdCIsImltbXV0IiwidG9nZ2xlRHJvcExvc3Nlc09wdCIsImRyb3BMb3NzZXMiLCJ0b2dnbGVIYXNoT3B0IiwidG9nZ2xlUHJpdlNhdmVPcHQiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVOb3RlT3B0IiwidG9nZ2xlUXVpY2tidXR0b25PcHQiLCJwcm9wIiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RpZmljYXRpb25PcHQiLCJjaGFuZ2VNaXNjU2V0dGluZyIsInRvZ2dsZVRCQlBvd2VyU2V0dGluZyIsInRvZ2dsZUF1dG9jc09wdCIsImNoYW5nZVNCU2V0dGluZ3MiLCJ1bmZvbGRlZCIsImNoYW5nZVRoZW1lU2V0dGluZ3MiLCJ0aGVtZSIsImNsZWFuRW50cmllcyIsIm5hbWVzIiwibmFtZXNfbG9jYWwiLCJsb3N0Iiwic2F2ZUVudHJ5Iiwic2F2ZU5ld05hbWUiLCJ1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbiIsInN5bmNlZCIsInJlY2VpdmVkQ29tcGxldGVFbnRyeSIsImZvdW5kIiwiaGFzT3duUHJvcGVydHkiLCJkZWxldGVFbnRyaWVzIiwicG9wIiwidXBkYXRlRW50cnlPblJlc3RvcmF0aW9uIiwiZW50cnlOYW1lIiwicmVzdG9yZWRNYXJrcyIsImxvc3RNYXJrcyIsIm9sZExvc3RNYXJrcyIsInJlc3RvcmVkTWFya3NJRHMiLCJvbGRMb3N0TWFya3NJRHMiLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInBhZ2Vub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwidGFiRXZlbnRIYW5kbGVycyIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwidG9nZ2xlVGFiRXZlbnRIYW5kbGVycyIsImFkZFRhYkV2ZW50SGFuZGxlcnMiLCJiaW5kIiwicHJvcGVydGllcyIsInJlbW92ZVRhYkV2ZW50SGFuZGxlcnMiLCJldiIsInNlY3VyaXR5V2FybmluZyIsInNlbGYiLCJvcGVuQWRkb25QYWdlIiwib3BlbkluaXRQYWdlIiwib3BlblNlYXJjaCIsIndvcmQiLCJjdXN0b20iLCJkZWZhdWx0U2V0dGluZ3MiLCJfREVGQVVMVF9TVE9SQUdFIiwibm90ZVR5cGVzIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsIm5vdGVUeXBlIiwidG11aXBvcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3IiwidGJicG93ZXIiLCJ0aGVtZXMiLCJ1cGRhdGVIaXN0b3J5Iiwib3JkZXIiLCJmaXhIaXN0b3J5RGF0ZXMiLCJsYW5nIiwiZW4iLCJkZSIsImxhc3QiLCJtZXJnZUhpc3RvcmllcyIsIm5ld0hpc3RvcnkiLCJvbGRIaXN0b3J5Iiwib2xkRW50cmllcyIsIm9sZE5hbWVzIiwiYWNjZXB0ZWRFbnRyaWVzIiwidXJsRXhpc3RzIiwiX2VudHJpZXMiLCJhIiwic2V0U3RvcmFnZU9uVXBncmFkZSIsImlzRW1wdHkiLCJlbXB0eSIsImNoZWNrU3RvcmFnZU9uU3RhcnQiLCJpbXBvcnRTdG9yYWdlIiwiaW1wb3J0ZWRTdG9yYWdlIiwiaW1wb3J0U2V0dGluZ3MiLCJzdWNjZXNzIiwiaW1wb3J0SGlzdG9yeSIsInN1Y2Nlc3NfcyIsInN1Y2Nlc3NfaCIsIlByb21pc2UiLCJyZXNvbHZlIiwib3BlbkVudHJ5RGV0YWlsUGFnZSIsInBvcHVwVVJMIiwiZ2V0Q3VycmVudCIsImN1cnJlbnRXaW5kb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJfUE9SVCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsIk9ORU9GRiIsIkNPTk5FQ1RJT04iLCJfU1RPUkUiLCJpbml0IiwibG9jYWxTdG9yYWdlIiwiX3NldF9zeW5jIiwibWV0aCIsIl91cGRhdGUiLCJjb25zdHJ1Y3RvciIsIl9nZXRfbW9kZSIsImFyZWFfc2V0dGluZ3MiLCJfZ2V0X3ByaXZzYXZlIiwiX2dldF9uYW1pbmciLCJfZ2V0X3RiYnBvd2VyIiwiX2dldF9tYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJfc2V0X3N0b3JhZ2UiLCJfc2V0X3NldHRpbmdzIiwiX3NldF9oaXN0b3J5IiwiYXJlYV9oaXN0b3J5IiwiX3NldF92ZXJzaW9uIiwiX3NldF9sb2ciLCJfZ2V0X2xvZ3MiLCJNQVhfTE9HX0VOVFJJRVMiLCJzaGlmdCIsIl9zZXRfZW50cnkiLCJfdXBkYXRlX2VudHJ5IiwiY2FsbCIsIl9DT1BZIiwiX0VYVEVORCIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJ6IiwieSIsInMiLCJkb3dubG9hZCIsImNvcHkiLCJibWljb24iLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwibWV0YSIsInRhZ3MiLCJhY3Rpb25zIiwibGlua3MiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwianNfaW5qZWN0aW9uX2ZhaWx1cmUiLCJjc3NfaW5qZWN0aW9uX2ZhaWx1cmUiLCJnZXRLZXlCeVZhbHVlIiwic3JjIiwidGFyZ2V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiaCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9waWNzIiwiZXZlbnQiLCJoYW5kbGVyIiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvYmoiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJmIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9wYWdlbm90ZXMiLCJyIiwic2V0VGltZW91dCIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtB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QXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU92VSxPQUFPLENBQUM2VCxPQUFSLENBQWdCWCxLQUFoQixDQUFzQjNTLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBMFksWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUN0WixPQUFuQyxFQUE0QztBQUMxQyxpQkFBT0ksT0FBTyxDQUFDNlQsT0FBUixDQUFnQjVGLElBQWhCLENBQXFCMU4sR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUF3aEIsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUNwaUIsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPc1osWUFBWSxDQUFDdFosT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUJKLGUiLCJmaWxlIjoiYmFja2dyb3VuZC9iYWNrZ3JvdW5kLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYWNrZ3JvdW5kL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9pY29ucy9vbjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjMyLnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjM2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjY0LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL3RtNDgucG5nJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vc3RvcmFnZSdcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2Vycm9yLWxvZ2dpbmcnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2luamVjdGlvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgX05PVElGSUNBVElPTlMgZnJvbSAnLi9tb2R1bGVzL25vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBfVEFCUyBmcm9tICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0IF9XSU5ET1dTIGZyb20gJy4vbW9kdWxlcy93aW5kb3dzJ1xyXG5pbXBvcnQgX1NJREVCQVJTIGZyb20gJy4vbW9kdWxlcy9zaWRlYmFycydcclxuaW1wb3J0IF9OQU1FUiBmcm9tICcuL21vZHVsZXMvbmFtZXInXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0LW1lbnUnXHJcbmltcG9ydCBfUEFHRUFDVElPTiBmcm9tICcuL21vZHVsZXMvcGFnZS1hY3Rpb24nXHJcbi8vaW1wb3J0IF9JREIgZnJvbSAnLi9tb2R1bGVzL2luZGV4ZWRkYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3ZlcnNpb24tbWFuYWdlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvc3RvcmUtbWFuYWdlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlT25JbXBvcnQnLFxyXG4gICAgICAnaW5pdGlhbGl6ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdtaWdyYXRlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ2NoZWNrZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICd0b2dnbGU6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6dGJicG93ZXItc2V0dGluZ3MnOiAnc2V0VEJCQWN0aW9uJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2ZTogdHJ1ZSxcclxuICB2ZXJzaW9uOiAnJyxcclxuICBsb2FkUmVhc29uOiAnJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IHRoaXMudmVyc2lvbiA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICAgIGlmICghdmVyc2lvbiB8fCB2ZXJzaW9uICE9PSBjdXJyZW50VmVyc2lvbikge1xyXG4gICAgICAgICAgY29uc3QgbG9hZFJlYXNvbiA9IHRoaXMubG9hZFJlYXNvbiA9IGRldGFpbHMucmVhc29uO1xyXG4gICAgICAgICAgY29uc3QgcHJldlZlcnNpb24gPSBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbiB8fCAnMic7XHJcbiAgICAgICAgICBpZiAobG9hZFJlYXNvbiAmJiAobG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScgfHwgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobG9hZFJlYXNvbiArICc6YXBwJywgcHJldlZlcnNpb24sIGxvYWRSZWFzb24pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbiA9PT0gY3VycmVudFZlcnNpb24pIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ3ZlcnNpb24nLCB0aGlzLnZlcnNpb24pO1xyXG5cclxuICAgIC8vX0lEQigpO1xyXG4gICAgX05PVElGSUNBVElPTlMoKTtcclxuICAgIF9UQUJTKCk7XHJcbiAgICBfTkFNRVIoKTtcclxuICAgIF9DVE0oKTtcclxuICAgIF9XSU5ET1dTKCk7XHJcbiAgICBfU0lERUJBUlMoKTtcclxuICAgIF9QQUdFQUNUSU9OKCk7XHJcblxyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFjdGl2YXRlKHRydWUpKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6YXBwJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvYWRSZWFzb24pKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGFjdGl2YXRlKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGFjdGl2YXRlO1xyXG4gICAgdGhpcy50b2dnbGVCcm93c2VyQWN0aW9uSWNvbihhY3RpdmUpO1xyXG4gICAgdGhpcy5zZXRUQkJBY3Rpb24oKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIGxldCBtb2RlID0gIXRoaXMuYWN0aXZlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZShtb2RlKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDphZGRvbicsIG1vZGUpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlT25JbXBvcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGVCcm93c2VyQWN0aW9uSWNvbihvbikge1xyXG4gICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEljb24oe1xyXG4gICAgICBwYXRoOiBvbiA/IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29uMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29uMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29uMzIucG5nJ1xyXG4gICAgICB9IDoge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb2ZmMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29mZjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vZmYzMi5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0VEJCQWN0aW9uKGFkZCkge1xyXG4gICAgaWYgKHR5cGVvZiBhZGQgPT09ICdib29sZWFuJykge1xyXG4gICAgICBpZiAoYWRkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndGJicG93ZXInKS50aGVuKGVuYWJsZWQgPT4ge1xyXG4gICAgICAgIGlmIChlbmFibGVkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFkZFRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBjb25zdCB0YmJIYW5kbGVyID0gdGhpcy50YmJIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YmJIYW5kbGVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZVRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAodGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnY29udGVudC90YmItbWVudS90YmItbWVudS5odG1sJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLnRiYkhhbmRsZXIpO1xyXG4gICAgICB0aGlzLnRiYkhhbmRsZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXRlbXM6IHtcclxuICAgICAgbTogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICB3OiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIGQ6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgYjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICAnLWInOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIG46IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgc2I6IHsgY29udGV4dHM6IFsnYWxsJywgJ3RhYiddIH0sXHJcbiAgICAgIGM6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IFtdLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBsZXQgaXRlbTtcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgaXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgaXRlbS5pZCA9IGk7XHJcbiAgICAgICAgaXRlbS50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjdHhfJyArIChpID09PSAnLWInID8gJ2RiJyA6IGkpKTtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSAoaW5mb3MsIHRhYikgPT4gdGhpcy5vbkNsaWNrKGluZm9zLCB0YWIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZShpZCkge1xyXG4gICAgICBpZiAoIXRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLmNyZWF0ZSh0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmUoaWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5zcGxpY2UodGhpcy5jcmVhdGVkLmluZGV4T2YoaWQpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUFsbCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5sZW5ndGgpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKG9uKSB7XHJcbiAgICAgIGlmIChvbikgdGhpcy51cGRhdGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUFsbCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlZDtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzaG9ydGN1dHMnKS50aGVuKHNob3J0Y3V0cyA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICBpZiAoc2hvcnRjdXRzW2ldWzJdKSB0aGlzLmNyZWF0ZShpKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrKGluZm9zLCB0YWIpIHtcclxuICAgICAgY29uc3QgaWQgPSBpbmZvcy5tZW51SXRlbUlkO1xyXG4gICAgICBpZiAoaWQgPT09ICd3JykgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIGluZm9zLnNlbGVjdGlvblRleHQpO1xyXG4gICAgICBlbHNlIGlmIChpZCA9PT0gJ3NiJykgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLm9wZW4oKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ2N0eDonICsgaWQsIG51bGwsIG51bGwsIHsgdGFiOiB0YWIuaWQgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlcnJvcic6ICdsb2cnLFxyXG4gICAgICAnd2FybmluZyc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICdlcnJvcjppbXBvcnQnOiAnbG9nJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZSc6ICdsb2cnLFxyXG4gICAgICAnY2xlYXI6bG9ncyc6ICdjbGVhcicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCc6ICdvblNjcmlwdEluamVjdGlvbkZhaWx1cmUnLFxyXG4gICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsb2coZXJyb3IsIHJlcG9ydCkge1xyXG4gICAgbGV0IGxvZywgbXNnO1xyXG4gICAgaWYgKGVycm9yLnRpbWUpIHtcclxuICAgICAgbG9nID0gW2Vycm9yLnRpbWUsIGVycm9yLm1lc3NhZ2UgKyAnIFsnICsgZXJyb3IubG9jYXRpb24gKyAnXSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nID0gWyhuZXcgRGF0ZSgpLmdldFRpbWUoKSksIF9MT0dfS0VZU1tlcnJvcl0gfHwgZXJyb3JdO1xyXG4gICAgICBpZiAocmVwb3J0ICYmIHR5cGVvZiByZXBvcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbG9nLnB1c2gocmVwb3J0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCBsb2cpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MgbG9nZ2VkOmVycm9yJywgbG9nKSk7XHJcbiAgfSxcclxuICBjbGVhcigpIHtcclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgeyBjbGVhcjogdHJ1ZSB9KS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzJykpO1xyXG4gIH0sXHJcbiAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKTtcclxuICB9LFxyXG4gIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUmVzdG9yYXRpb24ocmVwb3J0KSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJywgcmVwb3J0KTtcclxuICB9LFxyXG4gIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV91cmwnKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcGJtJyk7XHJcbiAgfSxcclxuICBvblNjcmlwdEluamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnanNfaW5qZWN0aW9uX2ZhaWx1cmUnKTtcclxuICB9LFxyXG4gIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdjaGFuZ2VkOnVybCc6ICdvblVSTENoYW5nZScsXHJcbiAgICAgICdjb21wbGV0ZWQ6dGFiJzogJ29uVGFiQ29tcGxldGVkJyxcclxuICAgICAgJ2NsaWNrZWQ6cGFnZS1hY3Rpb24nOiAnaGFuZGxlSW5qZWN0aW9ucycsXHJcbiAgICAgICdzYXZlOmVudHJ5Pyc6ICdvblNhdmVOZXdSZXF1ZXN0JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnb25VcGRhdGVSZXF1ZXN0JyxcclxuICAgICAgJ25hbWU6ZW50cnk/JzogJ29uTmFtaW5nUmVxdWVzdCcsXHJcbiAgICAgICdvcGVuZWQ6ZW50cnknOiAndGVtcFNhdmVFbnRyeU1ldGFEYXRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcXVldWVkRm9yVGFiQ29tcGxldGVkOiB7fSxcclxuICBpbmplY3RlZFNjcmlwdHM6IHt9LFxyXG4gIHJlY2VudGx5T3BlbmVkRW50cnk6IG51bGwsXHJcblxyXG4gIG9uVGFiQ29tcGxldGVkKHRhYklkKSB7XHJcbiAgICBpZiAodGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKSB7XHJcbiAgICAgIHRoaXMuYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSk7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF07XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25VUkxDaGFuZ2UodGFiSWQsIGNoYW5nZWQpIHtcclxuICAgIGlmIChjaGFuZ2VkLnN0YXR1cyAmJiBjaGFuZ2VkLnN0YXR1cyAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0gPSBjaGFuZ2VkLnVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIGNoYW5nZWQudXJsLCB0cnVlKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCkge1xyXG4gICAgY29uc3QgcmVnaXN0ZXJlZCA9IHRoaXMuaW5qZWN0ZWRTY3JpcHRzW3RhYklkXTtcclxuICAgIGNvbnN0IHNhbWVIYXNobGVzc1VybHMgPSByZWdpc3RlcmVkICYmIF9IQVNITEVTUyhyZWdpc3RlcmVkLnVybCkgPT09IF9IQVNITEVTUyhuZXdVcmwpO1xyXG4gICAgY29uc3QgcmVsb2FkZWQgPSByZWdpc3RlcmVkICYmICFub1JlbG9hZDtcclxuXHJcbiAgICBpZiAoIXJlZ2lzdGVyZWQgfHwgcmVsb2FkZWQpIHtcclxuICAgICAgdGhpcy5pbmplY3QodGFiSWQsIG5ld1VybCwgMCkudGhlbihsYXN0RnJhbWVJZCA9PiB7XHJcbiAgICAgICAgYnJvd3Nlci53ZWJOYXZpZ2F0aW9uLmdldEFsbEZyYW1lcyh7IHRhYklkIH0pLnRoZW4oZnJhbWVzID0+IHtcclxuICAgICAgICAgIGZyYW1lcy5mb3JFYWNoKGZyYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGZyYW1lLmZyYW1lSWQgIT09IGxhc3RGcmFtZUlkKSB0aGlzLmluamVjdCh0YWJJZCwgZnJhbWUudXJsLCBmcmFtZS5mcmFtZUlkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNhbWVIYXNobGVzc1VybHMgJiYgcmVnaXN0ZXJlZC5lbnRyeSAmJiByZWdpc3RlcmVkLmVudHJ5Lmhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdoYXNoOmNoYW5nZWQnLCBuZXdVcmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwsIGZyYW1lSWQpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIHVybCk7XHJcbiAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZmlsdGVyTWF0Y2hlcyhtYXRjaGVzKTtcclxuXHJcbiAgICAgICAgaWYgKGVudHJpZXMpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cmllczpmb3VuZCcsIHtcclxuICAgICAgICAgICAgZW50cmllcyxcclxuICAgICAgICAgICAgcmVjZW50bHlPcGVuZWRFbnRyeTogdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5LFxyXG4gICAgICAgICAgICBsb2NrZWQ6ICEhbWF0Y2hlcy5sb2NrZWRFbnRyaWVzLmxlbmd0aFxyXG4gICAgICAgICAgfSwgeyB0YWI6IHRhYklkLCBmcmFtZUlkIH0pO1xyXG5cclxuICAgICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBmcmFtZUlkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0Q29udGVudFNjcmlwdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcycsXHJcbiAgICAgIGZyYW1lSWQsXHJcbiAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfaWRsZSdcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF0gPSB7IHVybCB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0Q1NTKHRhYklkLCBmcmFtZUlkKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW1zZy5pbmNsdWRlcygnTWlzc2luZyBob3N0IHBlcm1pc3Npb24gZm9yIHRoZSB0YWInKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbnNlcnRDU1ModGFiSWQsIGZyYW1lSWQpIHtcclxuICAgIGJyb3dzZXIudGFicy5pbnNlcnRDU1ModGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi5jc3MnLFxyXG4gICAgICBmcmFtZUlkXHJcbiAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwpIHtcclxuICAgIGNvbnN0IGhhc2hsZXNzUGFnZVVybCA9IF9IQVNITEVTUyh1cmwpO1xyXG4gICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGxldCBlbnRyeSwgcGFnZVVybCwgZW50cnlVcmw7XHJcblxyXG4gICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tlXTtcclxuICAgICAgcGFnZVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyB1cmwgOiBoYXNobGVzc1BhZ2VVcmw7XHJcbiAgICAgIGVudHJ5VXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IGVudHJ5LnVybCA6IF9IQVNITEVTUyhlbnRyeS51cmwpO1xyXG5cclxuICAgICAgaWYgKHBhZ2VVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmxvY2tlZCkgbG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICBlbHNlIG5vbkxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IGxvY2tlZEVudHJpZXMsIG5vbkxvY2tlZEVudHJpZXMgfTtcclxuICB9LFxyXG5cclxuICBmaWx0ZXJNYXRjaGVzKG1hdGNoZXMpIHtcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLmxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5ub25Mb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllc0NvdW50ID0gbG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzQ291bnQgPSBub25Mb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGxldCBlbnRyaWVzO1xyXG5cclxuICAgIGlmIChsb2NrZWRFbnRyaWVzQ291bnQgJiYgbm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnd2FybjptaXhlZC1lbnRyeS10eXBlcycpO1xyXG4gICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50ID4gMSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZCcsIGVudHJpZXNbMF0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kJywgbG9ja2VkRW50cmllcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50cmllcztcclxuICB9LFxyXG5cclxuICBvbk5hbWluZ1JlcXVlc3Qoc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBjb25zdCBwcml2ID0gd2luZG93SW5mby5pbmNvZ25pdG87XHJcbiAgICAgICAgaWYgKCFwcml2KSBzZW5kUmVzcG9uc2UoIXByaXYpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2Ugc2VuZFJlc3BvbnNlKHNhdmVJblByaXYpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uU2F2ZU5ld1JlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uVXBkYXRlUmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRlbXBTYXZlRW50cnlNZXRhRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBkYXRhO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZ3JhbnRlZDpzYXZlLWVudHJ5JzogJ25hbWUnLFxyXG4gICAgICAgICdyZW5hbWU6ZW50cnknOiAncmVuYW1lJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hbWUoZW50cnkpIHtcclxuICAgICAgaWYgKGVudHJ5Lm5hbWUpIHJldHVybiB0aGlzLmFkanVzdE5hbWUoZW50cnkubmFtZSwgZW50cnkpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB0aGlzLmFkanVzdE5hbWUobnVsbCwgZW50cnksIG5hbWluZykpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIHJlbmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmV3TmFtZSk7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIpIG5ld05hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5hbWVkOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBhZGp1c3ROYW1lKG5hbWUsIGVudHJ5LCBtZXRob2QpIHtcclxuICAgICAgbmFtZSA9IG5hbWUgPyBuYW1lIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ3RpdGxlJyA/IGVudHJ5LnRpdGxlLnRyaW0oKSA/IGVudHJ5LnRpdGxlLnRyaW0oKSA6IGVudHJ5LnVybCA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICdkYXRlJyA/IChuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSkgOiAnJztcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyICYmIGVudHJ5LmxvY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJywgJ2Vycm9yX2RvdWJsZV9sb2NrZWRfbmFtZScsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY291bnRlcikgbmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICAgIGVudHJ5Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCduYW1lZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBnZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSkge1xyXG4gICAgICBsZXQgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcyksXHJcbiAgICAgICAgICBsID0gZXhpc3RpbmdOYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBjb3VudGVyID0gMCxcclxuICAgICAgICAgIGNoZWNrcG9pbnQ7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgY2hlY2twb2ludCA9IGV4aXN0aW5nTmFtZXNbbF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpKSBjb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9LFxyXG4gICAgaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpIHtcclxuICAgICAgaWYgKG5hbWUgPT09IGNoZWNrcG9pbnQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgbGV0IGwgPSBuYW1lLmxlbmd0aCxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfc3RhcnQgPSBjaGVja3BvaW50LnN1YnN0cmluZygwLCBsKSxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfZW5kO1xyXG5cclxuICAgICAgaWYgKG5hbWUgIT09IGNoZWNrcG9pbnRfc3RhcnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGNoZWNrcG9pbnRfZW5kID0gY2hlY2twb2ludC5zdWJzdHJpbmcobCwgY2hlY2twb2ludC5sZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKC9eXFxzKlxcKFxcZCtcXCkkLy50ZXN0KGNoZWNrcG9pbnRfZW5kKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdvblNhdmVkRW50cnknLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJzogJ29uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cmllcyc6ICdvbkRlbGV0ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAgICdmYWlsZWQ6aW1wb3J0JzogJ29uRmFpbGVkSW1wb3J0JyxcclxuICAgICAgICAnZXJyb3I6aW1wb3J0JzogJ29uSW1wb3J0RXJyb3InLFxyXG4gICAgICAgICdpbXBvcnRlZDpzdG9yYWdlJzogJ29uSW1wb3J0U3VjY2VzcycsXHJcbiAgICAgICAgJ2Vycm9yJzogJ29uRXJyb3InLFxyXG4gICAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCc6ICdvbkNTU0luamVjdGlvbkZhaWx1cmUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5KGNvbmRpdGlvbiwgbWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihzZXR0aW5ncykpIHtcclxuICAgICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RleHRtYXJrZXI6ICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0eXBlKSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnaWNvbnMvdG00OC5wbmcnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlZEVudHJ5KCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVkX2VudHJ5JyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnBibU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcGJtJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfdXJsJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZEltcG9ydChlcnJvcjEsIGVycm9yMikge1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMSk7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UyID0gZXJyb3IyID8gJ1xcblxcbicgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjIpIDogJyc7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfZmFpbHVyZScsIGVyck1lc3NhZ2UxICsgZXJyTWVzc2FnZTIpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3dhcm5pbmcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydFN1Y2Nlc3MoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdWNjZXNzZnVsUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2Muc3VjY2Vzc05vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcihlcnJvciwgbmFtZSkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yLCBuYW1lKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlbGV0ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdqc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnY29tcGxldGVkOnRhYic6ICdzaG93J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnBhZ2VBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBhZ2UtYWN0aW9uJywgdGFiLmlkLCB0YWIudXJsKTtcclxuICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uaGlkZSh0YWIuaWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyh0YWJJZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5zaG93KHRhYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9HRVRfQUNUSVZFX1RBQiwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FjdGl2YXRlZDp0YWInOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2VudHJ5OmZvdW5kJzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAndXBkYXRlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6J3NlbmRFbnRyeScsXHJcbiAgICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnOiAnc2VuZE9yZGVyZWRNYXJrcydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuXHJcbiAgICBzZXRQYW5lbCh0YWJJZCwgdXJsKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuKCkudGhlbihvcGVuID0+IHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9IEFycmF5LmlzQXJyYXkoZW50cnkpID8gIWVudHJ5WzBdLmhhc2hTZW5zaXRpdmUgOiAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZyc6ICd0b2dnbGVIYXNoT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnOiAndG9nZ2xlUHJpdlNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJzogJ3RvZ2dsZU5vdGVPcHQnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAndG9nZ2xlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJzogJ3RvZ2dsZU5vdGlmaWNhdGlvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnOiAndG9nZ2xlVEJCUG93ZXJTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnOiAnY2hhbmdlU29ydE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJzogJ2NoYW5nZVZpZXdPcHQnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZyc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcblxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInOiAncmVtb3ZlQ3VzdG9tTWFya2VyJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJzogJ2FkZEN1c3RvbU1hcmtlcicsXHJcblxyXG4gICAgICAnbmFtZWQ6ZW50cnknOiAnc2F2ZUVudHJ5JyxcclxuICAgICAgJ3JlbmFtZWQ6ZW50cnknOiAnc2F2ZU5ld05hbWUnLFxyXG4gICAgICAnZ3JhbnRlZDp1cGRhdGUtZW50cnknOiAndXBkYXRlRW50cnlPblBhZ2VBY3Rpb24nLFxyXG4gICAgICAnZGVsZXRlOmVudHJpZXMnOiAnZGVsZXRlRW50cmllcycsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICd1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY2xlYW46ZW50cmllcyc6ICdjbGVhbkVudHJpZXMnLFxyXG4gICAgICAnc3luYzplbnRyeSc6ICdzeW5jRW50cnknLFxyXG4gICAgICAndGFnOmVudHJpZXMnOiAndGFnRW50cmllcycsXHJcbiAgICAgICdyZW1vdmU6dGFnJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICdhZGQ6dGFnJzogJ2FkZFRhZycsXHJcblxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYic6ICdjaGFuZ2VTQlNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSc6ICdjaGFuZ2VUaGVtZVNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJzogJ3VwZGF0ZVBhZ2VOb3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZU9uQ2hhbmdlZFN5bmM6IGZhbHNlLFxyXG5cclxuICAvLyBBRERPTiBNRVRIT0RTXHJcbiAgc2F2ZUFjdGl2YXRpb25TdGF0ZShhY3RpdmUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmFjdGl2ZSA9IGFjdGl2ZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTWU5DIE1FVEhPRFNcclxuICB0b2dnbGVTeW5jKGZpZWxkLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIGZ1bmN0aW9uKHN5bmMpIHtcclxuICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgIHRoaXMuc2V0QXJlYXMoc3luYyk7XHJcbiAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgfSwgJ2xvY2FsJylcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBzeW5jID0+IHtcclxuICAgICAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICAgICAgfSwgJ3N5bmMnKVxyXG5cclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6dG9nZ2xlLXN5bmMnLCBmaWVsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU0VUVElOR1MgTUVUSE9EU1xyXG4gIHVwZGF0ZVNldHRpbmdzKHVwZGF0ZXIsIHNldHRpbmcsIGVycm9yKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgdXBkYXRlcilcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOicgKyBzZXR0aW5nICsgJy1zZXR0aW5ncycpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBpZiAoZXJyb3IpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xyXG4gIH0sXHJcbiAgYWRkQ3VzdG9tTWFya2VyKGtleSwgc3R5bGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gIHsgc3R5bGUgfTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IG1hcmtlci5zdHlsZS5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUF1dG9Ob3RlU2V0dGluZyhrZXksIGF1dG9ub3RlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5hdXRvbm90ZSA9IGF1dG9ub3RlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvbm90ZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3RvZ2dsZV9hdXRvbm90ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNYXJrTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPSBtZXRob2Q7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmstbWV0aG9kJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbWFya19tZXRob2QnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2hvcnRjdXRTZXR0aW5nKGtleSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzFdID0gc3RhdHVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX190b2dnbGVfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2hvcnRjdXRTZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMF0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU29ydE9wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzb3J0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVZpZXdPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS52aWV3ID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ZpZXcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ3VzdG9tU2VhcmNoKHZhbHVlcykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCA9IHZhbHVlczsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3VzdG9tLXNlYXJjaCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zZWFyY2gnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ291bnRQZXJQYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkucHAgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY291bnQtcGVyLXBhZ2UnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQ3RtU2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzJdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N0bScsXHJcbiAgICAgICdlcnJvcl9zYXZlX2N0bSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXRPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaW1tdXQgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2ltbXV0b3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRHJvcExvc3Nlc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdkcm9wbG9zc2Vzb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSGFzaE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdoYXNob3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVByaXZTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ByaXZzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfcHJpdidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VOYW1pbmdPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkubmFtaW5nID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICduYW1pbmcnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9uYW1pbmcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICBzd2l0Y2hRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RpZmljYXRpb25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNaXNjU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWlzYycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVUQkJQb3dlclNldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3RiYnBvd2VyJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUF1dG9jc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvY3MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvY3MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU0JTZXR0aW5ncyh0YWIsIHVuZm9sZGVkKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50YWJzW3RhYl0udW5mb2xkZWQgPSB1bmZvbGRlZDsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG4gIGNoYW5nZVRoZW1lU2V0dGluZ3ModGhlbWUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRoZW1lID0gdGhlbWU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSElTVE9SWSBNRVRIT0RTXHJcbiAgY2xlYW5FbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGkgPSBuYW1lcy5sZW5ndGgsIG5hbWU7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllc1tuYW1lXSkgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ2xvY2FsJykgeyB0aGlzLmVtaXQoJ2NsZWFuZWQ6ZW50cmllcycpOyB9fSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2NsZWFuX2hpc3RvcnknKSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5jbGVhbkVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSk7XHJcbiAgfSxcclxuICBzYXZlRW50cnkoZW50cnkpIHtcclxuICAgIGVudHJ5Lmxvc3QgPSBbXTtcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCdzYXZlZDplbnRyeScsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5JywgJ2Vycm9yX3NhdmVfZW50cnknKSk7XHJcbiAgfSxcclxuICBzYXZlTmV3TmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV0pO1xyXG4gICAgICBlbnRyeS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdID0gZW50cnk7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1uYW1lJywgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdLCBvbGROYW1lKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgYXJlYSkge1xyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgY29uc3QgcmVjZWl2ZWRDb21wbGV0ZUVudHJ5ID0gISFlbnRyeS51cmw7XHJcbiAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAocmVjZWl2ZWRDb21wbGV0ZUVudHJ5KSB7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkuZW50cmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGVudHJ5LnN5bmNlZDtcclxuICAgICAgICAgIGZvciAobGV0IGUgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5Lmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdW2VdID0gZW50cnlbZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmICghZm91bmQpIHsgdGhpcy51cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgZW50cnkuc3luY2VkID8gJ2xvY2FsJyA6ICdzeW5jJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1vbi1zYXZlJywgZW50cnkpKTtcclxuICB9LFxyXG4gIGRlbGV0ZUVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzICYmIE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHVybCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS51cmw7XHJcbiAgICAgICAgICBoYXNoU2Vuc2l0aXZlID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyeScsIG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3MgPSBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzdG9yZWRNYXJrc0lEcyA9IFtdO1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzSURzID0gW107XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJlc3RvcmVkTWFya3MuZm9yRWFjaChtYXJrID0+IHJlc3RvcmVkTWFya3NJRHMucHVzaChtYXJrLmlkKSk7XHJcblxyXG4gICAgICAgICAgbGV0IGwgPSBvbGRMb3N0TWFya3MubGVuZ3RoLCBpZDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gb2xkTG9zdE1hcmtzW2xdLmlkO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNYXJrc0lEcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrc0lEcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvc3RNYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9sZExvc3RNYXJrc0lEcy5pbmNsdWRlcyhtYXJrLmlkKSkgb2xkTG9zdE1hcmtzLnB1c2gobWFyayk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIGNvbnN0IGFyZWFfMSA9IHZhbCA/ICdsb2NhbCcgOiAnc3luYyc7XHJcbiAgICBjb25zdCBhcmVhXzIgPSB2YWwgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGxldCBlbnRyeTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYV8xKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhXzIpXHJcblxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXN5bmMnLCBlbnRyeSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnN5bmMtZW50cnknLCBuYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGFnRW50cmllcyhuYW1lcywgdGFnKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgbmFtZXMuc3luYy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sICdzeW5jJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgICAgICBuYW1lcy5sb2NhbC5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgJ2xvY2FsJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZEVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnKTtcclxuICAgICAgaWYgKHN0b3JlZEVudHJ5LnRhZykge1xyXG4gICAgICAgIHN0b3JlZEVudHJ5LnRhZyA9IHN0b3JlZEVudHJ5LnRhZ1xyXG4gICAgICAgICAgLnJlcGxhY2UocngsICcgJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzfFxccyQvLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9LywgJyAnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgdGhpcy5hZGRUYWdUb0VudHJ5KGhpc3RvcnkuZW50cmllc1tuYW1lXSwgdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIGFkZFRhZ1RvRW50cnkoZW50cnksIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIGVudHJ5LnRhZyA9ICcnO1xyXG4gICAgZWxzZSBpZiAoIWVudHJ5LnRhZykgZW50cnkudGFnID0gdGFnO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcsICdnJyk7XHJcbiAgICAgIGlmIChlbnRyeS50YWcuc2VhcmNoKHJ4KSA9PT0gLTEpIHtcclxuICAgICAgICBlbnRyeS50YWcgKz0gJyAnICsgdGFnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcblxyXG4gIC8vIFBBR0UgTk9URSBNRVRIT0RTXHJcbiAgdXBkYXRlUGFnZU5vdGVzKHVybCwgbm90ZXMpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgncGFnZW5vdGVzJywgcGFnZW5vdGVzID0+IHtcclxuICAgICAgcGFnZW5vdGVzW3VybF0gPSBub3RlcztcclxuICAgICAgcmV0dXJuIHBhZ2Vub3RlcztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMub25TdG9yYWdlQ2hhbmdlZCkpO1xyXG4gIH0sXHJcbiAgb25TdG9yYWdlQ2hhbmdlZChjaGFuZ2VkSXRlbSkge1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnNldHRpbmdzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c2V0dGluZ3MnKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5oaXN0b3J5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6aGlzdG9yeScpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnBhZ2Vub3RlcykgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Vub3RlcycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGVUYWJFdmVudEhhbmRsZXJzJyxcclxuICAgICAgICAvLydzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICBsb2dzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWxvZ3MnLFxyXG4gICAgICBleHBvcnQ6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9ZXhwb3J0JyxcclxuICAgICAgc3luYzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zeW5jJ1xyXG4gICAgfSxcclxuICAgIHRhYkV2ZW50SGFuZGxlcnM6IHtcclxuICAgICAgb25BY3RpdmF0ZWQ6IG51bGwsXHJcbiAgICAgIG9uVXBkYXRlZDogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMudG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhtb2RlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25BY3RpdmF0ZWQgPSB0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25BY3RpdmF0ZWQgPSB0aGlzLm9uQWN0aXZhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKG9uQWN0aXZhdGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25VcGRhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25VcGRhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCA9IHRoaXMub25VcGRhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihvblVwZGF0ZWQsIHsgcHJvcGVydGllczogWydzdGF0dXMnXSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIFsnb25BY3RpdmF0ZWQnLCAnb25VcGRhdGVkJ10uZm9yRWFjaChldiA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFic1tldl0ucmVtb3ZlTGlzdGVuZXIodGhpcy50YWJFdmVudEhhbmRsZXJzW2V2XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YWJFdmVudEhhbmRsZXJzID0ge307XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfSxcclxuICAgIG9uQWN0aXZhdGVkKHRhYikge1xyXG4gICAgICB0aGlzLmVtaXQoJ2FjdGl2YXRlZDp0YWInLCB0YWIudGFiSWQsICh0YWIudXJsIHx8ICcnKSk7XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGVkKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VkLnVybCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDp1cmwnLCB0YWJJZCwgY2hhbmdlZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZDp0YWInLCB0YWJJZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbih1cmxzLCBuYW1lcykge1xyXG4gICAgICB1cmxzID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnID8gW3VybHNdIDogdXJscztcclxuICAgICAgbmFtZXMgPSB0eXBlb2YgbmFtZXMgPT09ICdzdHJpbmcnID8gW25hbWVzXSA6IG5hbWVzO1xyXG4gICAgICBsZXQgbCA9IHVybHMubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICB1cmw7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAoZnVuY3Rpb24oc2VsZiwgbCkge1xyXG4gICAgICAgICAgdXJsID0gdXJsc1tsXTtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IHVybHNbbF0gfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlY3VyaXR5V2FybmluZykgc2VsZi5lbWl0KCdmYWlsZWQ6b3Blbi10YWInKTtcclxuICAgICAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5hbWVzKSBzZWxmLmVtaXQoJ29wZW5lZDplbnRyeScsIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWVzW2xdIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSh0aGlzLCBsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5BZGRvblBhZ2UoaWQpIHtcclxuICAgICAgdGhpcy5vcGVuKHRoaXMudXJsc1tpZF0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0UGFnZSh2ZXJzaW9uLCBsb2FkUmVhc29uKSB7XHJcbiAgICAgIGlmIChsb2FkUmVhc29uICYmIGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJyB8fCBsb2FkUmVhc29uID09PSAndXBkYXRlJykgdGhpcy5vcGVuQWRkb25QYWdlKCduZXdzJyk7XHJcbiAgICB9LFxyXG4gICAgb3BlblNlYXJjaCh3b3JkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgY3VzdG9tID0gc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2gsIHVybDtcclxuICAgICAgICBpZiAoY3VzdG9tKSB1cmwgPSAnaHR0cHM6Ly8nICsgY3VzdG9tWzBdICsgd29yZCArIGN1c3RvbVsxXTtcclxuICAgICAgICBlbHNlIHVybCA9ICdodHRwczovLycgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nICsgd29yZDtcclxuICAgICAgICB0aGlzLm9wZW4odXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2luc3RhbGw6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnY2hlY2s6c3RvcmFnZSc6ICdjaGVja1N0b3JhZ2VPblN0YXJ0JyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJzogJ2ltcG9ydFN0b3JhZ2UnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3M7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykge1xyXG4gICAgICAgIHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gc2V0dGluZ3MuaGlzdG9yeTtcclxuICAgICAgICBjb25zdCBtaXNjID0gc2V0dGluZ3MubWlzYztcclxuICAgICAgICBjb25zdCBub3RlVHlwZXMgPSAncGJtTm90ZSBjaGFuZ2VkTm90ZSBlcnJvck5vdGUgc3VjY2Vzc05vdGUgdmlwTm90ZScuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMubikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLm4gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLm47XHJcbiAgICAgICAgICBtaXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgICBtaXNjLm5vdGVvbmNsaWNrID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmFycm93dXApIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd3VwID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd3VwO1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93ZG93biA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3dkb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5kWzBdKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuZFswXSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuc2IpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuc2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmNtKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuY20gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmNtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc2Nbbm90ZVR5cGVdICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RlcGxhaW52aWV3ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXBsYWludmlldyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5tYXJrbWV0aG9kKSB7XHJcbiAgICAgICAgICBtaXNjLm1hcmttZXRob2QgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MudGJicG93ZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy50YmJwb3dlciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zYikge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2I7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc2IudGhlbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRhYnMudGhlbWVzID0gZGVmYXVsdFNldHRpbmdzLnNiLnRhYnMudGhlbWVzO1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGhlbWUgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGhlbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmF1dG9jcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeS1vbi1yZXN0b3JhdGlvbicsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJyxcclxuICAgICAgJ3VwZGF0ZWQ6bG9ncycsXHJcbiAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpzYXZlb3B0LXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnLFxyXG4gICAgICAnZW50cmllczpmb3VuZCcsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cmllcycsXHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncycsXHJcbiAgICAgICdpbXBvcnRlZDpoaXN0b3J5JyxcclxuICAgICAgJ2N0eDptJyxcclxuICAgICAgJ2N0eDpkJyxcclxuICAgICAgJ2N0eDpiJyxcclxuICAgICAgJ2N0eDotYicsXHJcbiAgICAgICdjdHg6bicsXHJcbiAgICAgICdjdHg6YycsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ2NoYW5nZWQ6dXJsJ1xyXG4gICAgXSxcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAnZW50cnk6Zm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6b3JkZXJlZC1tYXJrcydcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfU1RPUkV9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG5cclxuICBpbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMucmVtb3ZlKCdsb2dzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBzeW5jID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zeW5jID8gbG9jYWxTdG9yYWdlLnN5bmMgOiBfREVGQVVMVF9TVE9SQUdFLnN5bmM7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZXRfc3luYyhzeW5jKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldChmaWVsZCwgdmFsKSB7XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX3NldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuICAgIHJldHVybiB0aGlzWydfc2V0XycgKyBmaWVsZF0odmFsKTtcclxuICB9LFxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlKC4uLmFyZ3MpO1xyXG4gIH0sXHJcblxyXG4gIGlzRW1wdHkoYXJlYSA9ICdzeW5jJykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgKCFPYmplY3Qua2V5cyhzdG9yYWdlKS5sZW5ndGggJiYgc3RvcmFnZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ByaXZzYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90YmJwb3dlcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG5cclxuICBfc2V0X3N0b3JhZ2UoYXJlYSA9IG51bGwpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXRfc2V0dGluZ3MoYXJlYSkudGhlbigoKSA9PiB0aGlzLl9zZXRfaGlzdG9yeShhcmVhKSk7XHJcbiAgfSxcclxuICBfc2V0X3N5bmMoc3luYykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBzeW5jOiBzeW5jIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHN5bmM6IHN5bmMgfSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0QXJlYXMoc3luYykpO1xyXG4gIH0sXHJcbiAgX3NldF9zZXR0aW5ncyhhcmVhID0gdGhpcy5hcmVhX3NldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBzZXR0aW5nczogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncykgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfaGlzdG9yeShhcmVhID0gdGhpcy5hcmVhX2hpc3RvcnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgaGlzdG9yeTogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5oaXN0b3J5KSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF92ZXJzaW9uKHZlcnNpb24pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pKTtcclxuICB9LFxyXG4gIF9zZXRfbG9nKGxvZykge1xyXG4gICAgaWYgKGxvZy5jbGVhcikge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IFtdIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldF9sb2dzKCkudGhlbihsb2dzID0+IHtcclxuICAgICAgbG9ncy5wdXNoKGxvZyk7XHJcbiAgICAgIGlmIChsb2dzLmxlbmd0aCA+IF9HTE9CQUxfU0VUVElOR1MuTUFYX0xPR19FTlRSSUVTKSBsb2dzLnNoaWZ0KCk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogbG9ncyB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9lbnRyeShlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgbGV0IGhpc3RvcnkgPSBzdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKGVudHJ5Lm5hbWUpKSByZXR1cm4gdGhpcy5fdXBkYXRlX2VudHJ5KGVudHJ5KTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLnNldCh7IGhpc3Rvcnk6IGhpc3RvcnkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfdXBkYXRlKGZpZWxkLCB1cGRhdGVyLCBhcmVhID0gdGhpc1snYXJlYV8nICsgZmllbGRdKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlW2ZpZWxkXSkge1xyXG4gICAgICAgICAgc3RvcmFnZVtmaWVsZF0gPSBfQ09QWShfREVGQVVMVF9TVE9SQUdFW2ZpZWxkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xyXG4gICAgICAgIHVwZGF0ZVtmaWVsZF0gPSB1cGRhdGVyLmNhbGwodGhpcywgc3RvcmFnZVtmaWVsZF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh1cGRhdGUpLnRoZW4oKCkgPT4gdXBkYXRlW2ZpZWxkXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfRVhURU5ELCBfR0VUX0FDVElWRV9UQUIsIF9NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuICBqc19pbmplY3Rpb25fZmFpbHVyZTogMzcsXHJcbiAgY3NzX2luamVjdGlvbl9mYWlsdXJlOiAzOCxcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjMyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy90bTQ4LnBuZ1wiOyIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==