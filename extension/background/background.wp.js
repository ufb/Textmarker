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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsInJlZ2lzdGVyZWQiLCJzYW1lSGFzaGxlc3NVcmxzIiwicmVsb2FkZWQiLCJpbmplY3QiLCJsYXN0RnJhbWVJZCIsImlmcmFtZXMiLCJ3ZWJOYXZpZ2F0aW9uIiwiZ2V0QWxsRnJhbWVzIiwiZnJhbWVzIiwiZm9yRWFjaCIsImZyYW1lIiwiZnJhbWVJZCIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsImluamVjdENvbnRlbnRTY3JpcHQiLCJoaXN0b3J5IiwibWF0Y2hlcyIsImZpbmRNYXRjaGluZ0VudHJpZXMiLCJlbnRyaWVzIiwiZmlsdGVyTWF0Y2hlcyIsImxvY2tlZCIsImxvY2tlZEVudHJpZXMiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJydW5BdCIsImluc2VydENTUyIsImUiLCJ0b1N0cmluZyIsImhhc2hsZXNzUGFnZVVybCIsIm5vbkxvY2tlZEVudHJpZXMiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJsb2NrZWRFbnRyaWVzQ291bnQiLCJub25Mb2NrZWRFbnRyaWVzQ291bnQiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsImxhc3QiLCJvbk5hbWluZ1JlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJ3aW5kb3dJbmZvIiwicHJpdiIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwidmlwTm90ZSIsIm9uRmFpbGVkSW1wb3J0IiwiZXJyb3IxIiwiZXJyb3IyIiwiZXJyTWVzc2FnZTEiLCJlcnJNZXNzYWdlMiIsIm9uSW1wb3J0RXJyb3IiLCJvbkltcG9ydFN1Y2Nlc3MiLCJmYWlsdXJlTm90ZSIsIm9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uIiwic3VjY2Vzc05vdGUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwicGFnZUFjdGlvbiIsImhpZGUiLCJzaG93Iiwic2V0UGFuZWwiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwiQXJyYXkiLCJpc0FycmF5IiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsInNldEFyZWFzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwiY29ycmVjdE5hbWUiLCJ1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbiIsIml0ZXJhdGlvbiIsInN5bmNlZCIsInJlY2VpdmVkQ29tcGxldGVFbnRyeSIsImZvdW5kIiwiaGFzT3duUHJvcGVydHkiLCJkZWxldGVFbnRyaWVzIiwicG9wIiwidXBkYXRlRW50cnlPblJlc3RvcmF0aW9uIiwiZW50cnlOYW1lIiwicmVzdG9yZWRNYXJrcyIsImxvc3RNYXJrcyIsIm9sZExvc3RNYXJrcyIsInJlc3RvcmVkTWFya3NJRHMiLCJvbGRMb3N0TWFya3NJRHMiLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInBhZ2Vub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwidGFiRXZlbnRIYW5kbGVycyIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwidG9nZ2xlVGFiRXZlbnRIYW5kbGVycyIsImFkZFRhYkV2ZW50SGFuZGxlcnMiLCJiaW5kIiwicHJvcGVydGllcyIsInJlbW92ZVRhYkV2ZW50SGFuZGxlcnMiLCJldiIsInNlY3VyaXR5V2FybmluZyIsInNlbGYiLCJvcGVuQWRkb25QYWdlIiwib3BlbkluaXRQYWdlIiwib3BlblNlYXJjaCIsIndvcmQiLCJjdXN0b20iLCJkZWZhdWx0U2V0dGluZ3MiLCJfREVGQVVMVF9TVE9SQUdFIiwibm90ZVR5cGVzIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsIm5vdGVUeXBlIiwidG11aXBvcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3IiwidGJicG93ZXIiLCJ0aGVtZXMiLCJ1cGRhdGVIaXN0b3J5Iiwib3JkZXIiLCJmaXhIaXN0b3J5RGF0ZXMiLCJsYW5nIiwiZW4iLCJkZSIsIm1lcmdlSGlzdG9yaWVzIiwibmV3SGlzdG9yeSIsIm9sZEhpc3RvcnkiLCJvbGRFbnRyaWVzIiwib2xkTmFtZXMiLCJhY2NlcHRlZEVudHJpZXMiLCJ1cmxFeGlzdHMiLCJfZW50cmllcyIsImEiLCJzZXRTdG9yYWdlT25VcGdyYWRlIiwiaXNFbXB0eSIsImVtcHR5IiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcGVuRW50cnlEZXRhaWxQYWdlIiwicG9wdXBVUkwiLCJnZXRDdXJyZW50IiwiY3VycmVudFdpbmRvdyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1pbiIsIl9QT1JUIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsIl9TVE9SRSIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJfc2V0X3N5bmMiLCJtZXRoIiwiX3VwZGF0ZSIsImNvbnN0cnVjdG9yIiwiX2dldF9tb2RlIiwiYXJlYV9zZXR0aW5ncyIsIl9nZXRfcHJpdnNhdmUiLCJfZ2V0X25hbWluZyIsIl9nZXRfdGJicG93ZXIiLCJfZ2V0X21hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsIl9zZXRfc3RvcmFnZSIsIl9zZXRfc2V0dGluZ3MiLCJfc2V0X2hpc3RvcnkiLCJhcmVhX2hpc3RvcnkiLCJfc2V0X3ZlcnNpb24iLCJfc2V0X2xvZyIsIl9nZXRfbG9ncyIsIk1BWF9MT0dfRU5UUklFUyIsInNoaWZ0IiwiX3NldF9lbnRyeSIsIl91cGRhdGVfZW50cnkiLCJjYWxsIiwiX0NPUFkiLCJfRVhURU5EIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsInoiLCJ5IiwicyIsImRvd25sb2FkIiwiY29weSIsImJtaWNvbiIsIm92ZXJ3cml0ZSIsImNoYW5nZWROb3RlIiwicHJvZ3Jlc3NiYXIiLCJtZXRhIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJqc19pbmplY3Rpb25fZmFpbHVyZSIsImNzc19pbmplY3Rpb25fZmFpbHVyZSIsImdldEtleUJ5VmFsdWUiLCJzcmMiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZW5hbWUiLCJsaW5lbm8iLCJjb2xubyIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJoIiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJ0b3BpY3MiLCJldmVudCIsImhhbmRsZXIiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm9iaiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsImYiLCJwb3N0TWVzc2FnZSIsInJlcSIsImxhc3RBcmciLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0IiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJhcmVhX3BhZ2Vub3RlcyIsInIiLCJzZXRUaW1lb3V0Iiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q2QsYUFBT3hpQixPQUFPLENBQUNxVSxPQUFSLENBQWdCLEtBQUswRixhQUFyQixFQUFvQ3haLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBNlQsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ2xPLFFBQVIsSUFBb0I4UCw0QkFBaUI5UCxRQUF6QztBQUFBLE9BQXRELENBQVA7QUFDRDs7O2dDQUNXO0FBQ1YsYUFBT25HLE9BQU8sQ0FBQ3FVLE9BQVIsQ0FBZ0JYLEtBQWhCLENBQXNCblQsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFpWixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQzFFLElBQW5DLEVBQXlDLE9BQU8sRUFBUDtBQUN6QyxlQUFPMEUsWUFBWSxDQUFDMUUsSUFBcEI7QUFDRCxPQUhNLENBQVA7QUFJRDs7O21DQUNjO0FBQ2IsYUFBTy9VLE9BQU8sQ0FBQ3FVLE9BQVIsQ0FBZ0JYLEtBQWhCLENBQXNCblQsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFpWixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQzdaLE9BQW5DLEVBQTRDO0FBQzFDLGlCQUFPSSxPQUFPLENBQUNxVSxPQUFSLENBQWdCL0YsSUFBaEIsQ0FBcUIvTixHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQThoQixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQzFpQixPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU82WixZQUFZLENBQUM3WixPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QkosZSIsImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2JhY2tncm91bmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL2ljb25zL29uMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzIucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uNjQucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvdG00OC5wbmcnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL21vZHVsZXMvZXJyb3ItbG9nZ2luZydcclxuaW1wb3J0ICcuL21vZHVsZXMvaW5qZWN0aW9uLW1hbmFnZXInXHJcbmltcG9ydCBfTk9USUZJQ0FUSU9OUyBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IF9UQUJTIGZyb20gJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgX1dJTkRPV1MgZnJvbSAnLi9tb2R1bGVzL3dpbmRvd3MnXHJcbmltcG9ydCBfU0lERUJBUlMgZnJvbSAnLi9tb2R1bGVzL3NpZGViYXJzJ1xyXG5pbXBvcnQgX05BTUVSIGZyb20gJy4vbW9kdWxlcy9uYW1lcidcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHQtbWVudSdcclxuaW1wb3J0IF9QQUdFQUNUSU9OIGZyb20gJy4vbW9kdWxlcy9wYWdlLWFjdGlvbidcclxuLy9pbXBvcnQgX0lEQiBmcm9tICcuL21vZHVsZXMvaW5kZXhlZGRiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9zdG9yZS1tYW5hZ2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd0b2dnbGVPbkltcG9ydCcsXHJcbiAgICAgICdpbml0aWFsaXplZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ21pZ3JhdGVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnY2hlY2tlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZTphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDp0YmJwb3dlci1zZXR0aW5ncyc6ICdzZXRUQkJBY3Rpb24nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZlOiB0cnVlLFxyXG4gIHZlcnNpb246ICcnLFxyXG4gIGxvYWRSZWFzb246ICcnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy52ZXJzaW9uID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uIHx8IHZlcnNpb24gIT09IGN1cnJlbnRWZXJzaW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2FkUmVhc29uID0gdGhpcy5sb2FkUmVhc29uID0gZGV0YWlscy5yZWFzb247XHJcbiAgICAgICAgICBjb25zdCBwcmV2VmVyc2lvbiA9IGRldGFpbHMucHJldmlvdXNWZXJzaW9uIHx8ICcyJztcclxuICAgICAgICAgIGlmIChsb2FkUmVhc29uICYmIChsb2FkUmVhc29uID09PSAndXBkYXRlJyB8fCBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChsb2FkUmVhc29uICsgJzphcHAnLCBwcmV2VmVyc2lvbiwgbG9hZFJlYXNvbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uID09PSBjdXJyZW50VmVyc2lvbikgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLnNldCgndmVyc2lvbicsIHRoaXMudmVyc2lvbik7XHJcblxyXG4gICAgLy9fSURCKCk7XHJcbiAgICBfTk9USUZJQ0FUSU9OUygpO1xyXG4gICAgX1RBQlMoKTtcclxuICAgIF9OQU1FUigpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1dJTkRPV1MoKTtcclxuICAgIF9TSURFQkFSUygpO1xyXG4gICAgX1BBR0VBQ1RJT04oKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYWN0aXZhdGUodHJ1ZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnc3RhcnRlZDphcHAnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9hZFJlYXNvbikpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoYWN0aXZhdGUpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gYWN0aXZhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldFRCQkFjdGlvbigpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IG1vZGUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB0aGlzLmFjdGl2YXRlKG1vZGUpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOmFkZG9uJywgbW9kZSk7XHJcbiAgfSxcclxuICB0b2dnbGVPbkltcG9ydCgpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKG9uKSB7XHJcbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHBhdGg6IG9uID8ge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb24xNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vZmYxNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29mZjMyLnBuZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRUQkJBY3Rpb24oYWRkKSB7XHJcbiAgICBpZiAodHlwZW9mIGFkZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGlmIChhZGQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd0YmJwb3dlcicpLnRoZW4oZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IHRiYkhhbmRsZXIgPSB0aGlzLnRiYkhhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICcnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRiYkhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdjb250ZW50L3RiYi1tZW51L3RiYi1tZW51Lmh0bWwnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMudGJiSGFuZGxlcik7XHJcbiAgICAgIHRoaXMudGJiSGFuZGxlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtczoge1xyXG4gICAgICBtOiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIHc6IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgZDogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBiOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgbjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBzYjogeyBjb250ZXh0czogWydhbGwnLCAndGFiJ10gfSxcclxuICAgICAgYzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogW10sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpdGVtLmlkID0gaTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2N0eF8nICsgKGkgPT09ICctYicgPyAnZGInIDogaSkpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9IChpbmZvcywgdGFiKSA9PiB0aGlzLm9uQ2xpY2soaW5mb3MsIHRhYik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMuY3JlYXRlKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZShpZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnNwbGljZSh0aGlzLmNyZWF0ZWQuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsKCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGUob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVkO1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3Nob3J0Y3V0cycpLnRoZW4oc2hvcnRjdXRzID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzaG9ydGN1dHNbaV1bMl0pIHRoaXMuY3JlYXRlKGkpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soaW5mb3MsIHRhYikge1xyXG4gICAgICBjb25zdCBpZCA9IGluZm9zLm1lbnVJdGVtSWQ7XHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgcmVwb3J0KSB7XHJcbiAgICBsZXQgbG9nLCBtc2c7XHJcbiAgICBpZiAoZXJyb3IudGltZSkge1xyXG4gICAgICBsb2cgPSBbZXJyb3IudGltZSwgZXJyb3IubWVzc2FnZSArICcgWycgKyBlcnJvci5sb2NhdGlvbiArICddJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2cgPSBbKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgX0xPR19LRVlTW2Vycm9yXSB8fCBlcnJvcl07XHJcbiAgICAgIGlmIChyZXBvcnQgJiYgdHlwZW9mIHJlcG9ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsb2cucHVzaChyZXBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihyZXBvcnQpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnLCByZXBvcnQpO1xyXG4gIH0sXHJcbiAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3VybCcpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9wYm0nKTtcclxuICB9LFxyXG4gIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdqc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH0sXHJcbiAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoYW5nZWQ6dXJsJzogJ29uVVJMQ2hhbmdlJyxcclxuICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnb25UYWJDb21wbGV0ZWQnLFxyXG4gICAgICAnY2xpY2tlZDpwYWdlLWFjdGlvbic6ICdoYW5kbGVJbmplY3Rpb25zJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JzogJ29uU2F2ZU5ld1JlcXVlc3QnLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdvblVwZGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnbmFtZTplbnRyeT8nOiAnb25OYW1pbmdSZXF1ZXN0JyxcclxuICAgICAgJ29wZW5lZDplbnRyeSc6ICd0ZW1wU2F2ZUVudHJ5TWV0YURhdGEnXHJcbiAgICB9XHJcbiAgfSxcclxuICBxdWV1ZWRGb3JUYWJDb21wbGV0ZWQ6IHt9LFxyXG4gIGluamVjdGVkU2NyaXB0czoge30sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgb25UYWJDb21wbGV0ZWQodGFiSWQpIHtcclxuICAgIGlmICh0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKTtcclxuICAgICAgZGVsZXRlIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblVSTENoYW5nZSh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSA9IGNoYW5nZWQudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgY2hhbmdlZC51cmwsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUluamVjdGlvbnModGFiSWQsIG5ld1VybCwgbm9SZWxvYWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBoYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKSB7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkID0gdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdO1xyXG4gICAgY29uc3Qgc2FtZUhhc2hsZXNzVXJscyA9IHJlZ2lzdGVyZWQgJiYgX0hBU0hMRVNTKHJlZ2lzdGVyZWQudXJsKSA9PT0gX0hBU0hMRVNTKG5ld1VybCk7XHJcbiAgICBjb25zdCByZWxvYWRlZCA9IHJlZ2lzdGVyZWQgJiYgIW5vUmVsb2FkO1xyXG5cclxuICAgIGlmICghcmVnaXN0ZXJlZCB8fCByZWxvYWRlZCkge1xyXG4gICAgICB0aGlzLmluamVjdCh0YWJJZCwgbmV3VXJsLCAwKS50aGVuKGxhc3RGcmFtZUlkID0+IHtcclxuICAgICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBpZiAoc2V0dGluZ3MuYWRkb24uaWZyYW1lcykge1xyXG4gICAgICAgICAgICBicm93c2VyLndlYk5hdmlnYXRpb24uZ2V0QWxsRnJhbWVzKHsgdGFiSWQgfSkudGhlbihmcmFtZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGZyYW1lcy5mb3JFYWNoKGZyYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmcmFtZS5mcmFtZUlkICE9PSBsYXN0RnJhbWVJZCkgdGhpcy5pbmplY3QodGFiSWQsIGZyYW1lLnVybCwgZnJhbWUuZnJhbWVJZCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNhbWVIYXNobGVzc1VybHMgJiYgcmVnaXN0ZXJlZC5lbnRyeSAmJiByZWdpc3RlcmVkLmVudHJ5Lmhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdoYXNoOmNoYW5nZWQnLCBuZXdVcmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwsIGZyYW1lSWQpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIHVybCk7XHJcbiAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZmlsdGVyTWF0Y2hlcyhtYXRjaGVzLCBmcmFtZUlkKTtcclxuXHJcbiAgICAgICAgaWYgKGVudHJpZXMpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cmllczpmb3VuZCcsIHtcclxuICAgICAgICAgICAgZW50cmllcyxcclxuICAgICAgICAgICAgcmVjZW50bHlPcGVuZWRFbnRyeTogdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5LFxyXG4gICAgICAgICAgICBsb2NrZWQ6ICEhbWF0Y2hlcy5sb2NrZWRFbnRyaWVzLmxlbmd0aFxyXG4gICAgICAgICAgfSwgeyB0YWI6IHRhYklkLCBmcmFtZUlkIH0pO1xyXG5cclxuICAgICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBmcmFtZUlkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0Q29udGVudFNjcmlwdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcycsXHJcbiAgICAgIGZyYW1lSWQsXHJcbiAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfaWRsZSdcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF0gPSB7IHVybCB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0Q1NTKHRhYklkLCBmcmFtZUlkKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW1zZy5pbmNsdWRlcygnTWlzc2luZyBob3N0IHBlcm1pc3Npb24gZm9yIHRoZSB0YWInKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbnNlcnRDU1ModGFiSWQsIGZyYW1lSWQpIHtcclxuICAgIGJyb3dzZXIudGFicy5pbnNlcnRDU1ModGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi5jc3MnLFxyXG4gICAgICBmcmFtZUlkXHJcbiAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwpIHtcclxuICAgIGNvbnN0IGhhc2hsZXNzUGFnZVVybCA9IF9IQVNITEVTUyh1cmwpO1xyXG4gICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGxldCBlbnRyeSwgcGFnZVVybCwgZW50cnlVcmw7XHJcblxyXG4gICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tlXTtcclxuICAgICAgaWYgKGVudHJ5LnVybCkge1xyXG4gICAgICAgIHBhZ2VVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gdXJsIDogaGFzaGxlc3NQYWdlVXJsO1xyXG4gICAgICAgIGVudHJ5VXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IGVudHJ5LnVybCA6IF9IQVNITEVTUyhlbnRyeS51cmwpO1xyXG5cclxuICAgICAgICBpZiAocGFnZVVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBlbHNlIG5vbkxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBsb2NrZWRFbnRyaWVzLCBub25Mb2NrZWRFbnRyaWVzIH07XHJcbiAgfSxcclxuXHJcbiAgZmlsdGVyTWF0Y2hlcyhtYXRjaGVzLCBmcmFtZUlkKSB7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5sb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IG1hdGNoZXMubm9uTG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXNDb3VudCA9IGxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllc0NvdW50ID0gbm9uTG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBsZXQgZW50cmllcztcclxuXHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50ICYmIG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnKTtcclxuICAgICAgZW50cmllcyA9IGxvY2tlZEVudHJpZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgLy8gaWYgbXVsdGlwbGUgZW50cmllcyB3aXRoIHNhbWUgdXJsIGZvdW5kOiB0YWtlIGxhdGVzdFxyXG4gICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiAocHJldi5sYXN0ID4gY3VycmVudC5sYXN0KSA/IHByZXYgOiBjdXJyZW50KV07XHJcbiAgICAgIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVtaXQoJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZnJhbWVJZCkgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZCcsIGVudHJpZXNbMF0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICBpZiAoIWZyYW1lSWQpIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBsb2NrZWRFbnRyaWVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG4gIH0sXHJcblxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbXBvcnQnOiAnb25GYWlsZWRJbXBvcnQnLFxyXG4gICAgICAgICdlcnJvcjppbXBvcnQnOiAnb25JbXBvcnRFcnJvcicsXHJcbiAgICAgICAgJ2ltcG9ydGVkOnN0b3JhZ2UnOiAnb25JbXBvcnRTdWNjZXNzJyxcclxuICAgICAgICAnZXJyb3InOiAnb25FcnJvcicsXHJcbiAgICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnkoY29uZGl0aW9uLCBtZXNzYWdlLCB0eXBlKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKHNldHRpbmdzKSkge1xyXG4gICAgICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGV4dG1hcmtlcjogJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHR5cGUpLFxyXG4gICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uVXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdpY29ucy90bTQ4LnBuZycpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVkRW50cnkoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZWRfZW50cnknKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MucGJtTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9wYm0nKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV91cmwnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkSW1wb3J0KGVycm9yMSwgZXJyb3IyKSB7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UxID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IxKTtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTIgPSBlcnJvcjIgPyAnXFxuXFxuJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMikgOiAnJztcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9mYWlsdXJlJywgZXJyTWVzc2FnZTEgKyBlcnJNZXNzYWdlMiksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydEVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfd2FybmluZycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0U3VjY2VzcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5zdWNjZXNzTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yKGVycm9yLCBuYW1lKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IsIG5hbWUpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2pzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNTU0luamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3NzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdjb21wbGV0ZWQ6dGFiJzogJ3Nob3cnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGFiID0+IHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cGFnZS1hY3Rpb24nLCB0YWIuaWQsIHRhYi51cmwpO1xyXG4gICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5oaWRlKHRhYi5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93KHRhYklkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLmFkZG9uLmF1dG9jcykge1xyXG4gICAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLnNob3codGFiSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0dFVF9BQ1RJVkVfVEFCLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnYWN0aXZhdGVkOnRhYic6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2NoYW5nZWQ6dXJsJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnZW50cnk6Zm91bmQnOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICd1cGRhdGVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzonc2VuZEVudHJ5JyxcclxuICAgICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcyc6ICdzZW5kT3JkZXJlZE1hcmtzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IHt9LFxyXG5cclxuICAgIHNldFBhbmVsKHRhYklkLCB1cmwpIHtcclxuICAgICAgdGhpcy5pc09wZW4oKS50aGVuKG9wZW4gPT4ge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICBicm93c2VyLnNpZGViYXJBY3Rpb24uc2V0UGFuZWwoe1xyXG4gICAgICAgICAgICBwYW5lbDogYnJvd3Nlci5ydW50aW1lLmdldFVSTChgY29udGVudC9zaWRlYmFyL3NpZGViYXIuaHRtbCMke3RhYklkfV8ke3VybH1gKSxcclxuICAgICAgICAgICAgdGFiSWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zaWRlYmFyQWN0aW9uLmlzT3Blbih7fSk7XHJcbiAgICB9LFxyXG4gICAgc3RvcmVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gQXJyYXkuaXNBcnJheShlbnRyeSkgPyAhZW50cnlbMF0uaGFzaFNlbnNpdGl2ZSA6ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG5cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGFiLmlkO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBlbnRyaWVzW2lkXSA9IGVudHJpZXNbaWRdIHx8IFtdO1xyXG4gICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1MoZW50cnkudXJsKSA6IGVudHJ5LnVybDtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCB1cmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmICh1cmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRW50cnkobmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaGFzaFNlbnNpdGl2ZSA/IHVybCA6IF9IQVNITEVTUyh1cmwpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHNhdmVkVXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAoc2F2ZWRVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlbnRyaWVzW2lkXVtzYXZlZFVybF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdGFiLnVybCA6IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpkZWxldGVkLWZvci10YWInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRFbnRyeSgpIHtcclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc2hsZXNzVXJsID0gX0hBU0hMRVNTKHRhYi51cmwpO1xyXG4gICAgICAgIGNvbnN0IGVudHJpZXNGb3JUaGlzVGFiID0gdGhpcy5lbnRyaWVzW3RhYi5pZF07XHJcbiAgICAgICAgbGV0IGVudHJ5ID0gbnVsbDtcclxuICAgICAgICBpZiAoZW50cmllc0ZvclRoaXNUYWIpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc0ZvclRoaXNUYWJbdGFiLnVybF0gfHwgZW50cmllc0ZvclRoaXNUYWJbaGFzaGxlc3NVcmxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kLWZvci10YWInLCBlbnRyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRPcmRlcmVkTWFya3MobWFya3MpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlbnRyeTpvcmRlcmVkLW1hcmtzJywgbWFya3MpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3JlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAnc2F2ZUFjdGl2YXRpb25TdGF0ZScsXHJcbiAgICAgICd0b2dnbGU6c3luYyc6ICd0b2dnbGVTeW5jJyxcclxuXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZyc6ICdjaGFuZ2VTdHlsZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZyc6ICdjaGFuZ2VBdXRvTm90ZVNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmJnLXNldHRpbmcnOiAnY2hhbmdlQmdDb2xvcicsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZyc6ICdjaGFuZ2VNYXJrTWV0aG9kJyxcclxuICAgICAgJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJzogJ3RvZ2dsZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZyc6ICdjaGFuZ2VTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOmN0bS1zZXR0aW5nJzogJ3RvZ2dsZUN0bVNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZyc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJzogJ3RvZ2dsZUltbXV0T3B0JyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnOiAndG9nZ2xlRHJvcExvc3Nlc09wdCcsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJzogJ3RvZ2dsZUhhc2hPcHQnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZyc6ICd0b2dnbGVQcml2U2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnOiAndG9nZ2xlTm90ZU9wdCcsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICd0b2dnbGVRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnOiAndG9nZ2xlTm90aWZpY2F0aW9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZyc6ICd0b2dnbGVUQkJQb3dlclNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZyc6ICdjaGFuZ2VTb3J0T3B0JyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnOiAnY2hhbmdlVmlld09wdCcsXHJcbiAgICAgICdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnOiAndG9nZ2xlQXV0b2NzT3B0JyxcclxuICAgICAgJ2NoYW5nZTppZnJhbWUtc2V0dGluZyc6ICd0b2dnbGVJRnJhbWVPcHQnLFxyXG5cclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJzogJ3JlbW92ZUN1c3RvbU1hcmtlcicsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcic6ICdhZGRDdXN0b21NYXJrZXInLFxyXG5cclxuICAgICAgJ25hbWVkOmVudHJ5JzogJ3NhdmVFbnRyeScsXHJcbiAgICAgICdyZW5hbWVkOmVudHJ5JzogJ3NhdmVOZXdOYW1lJyxcclxuICAgICAgJ2NvcnJlY3QtbmFtZTplbnRyeSc6ICdjb3JyZWN0TmFtZScsXHJcbiAgICAgICdncmFudGVkOnVwZGF0ZS1lbnRyeSc6ICd1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcyc6ICdkZWxldGVFbnRyaWVzJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ3VwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbicsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJzogJ2NsZWFuRW50cmllcycsXHJcbiAgICAgICdzeW5jOmVudHJ5JzogJ3N5bmNFbnRyeScsXHJcbiAgICAgICd0YWc6ZW50cmllcyc6ICd0YWdFbnRyaWVzJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnOiAncmVtb3ZlVGFnJyxcclxuICAgICAgJ2FkZDp0YWcnOiAnYWRkVGFnJyxcclxuXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJzogJ2NoYW5nZVNCU2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJzogJ2NoYW5nZVRoZW1lU2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnOiAndXBkYXRlUGFnZU5vdGVzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlT25DaGFuZ2VkU3luYzogZmFsc2UsXHJcblxyXG4gIC8vIEFERE9OIE1FVEhPRFNcclxuICBzYXZlQWN0aXZhdGlvblN0YXRlKGFjdGl2ZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYWN0aXZlID0gYWN0aXZlOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNZTkMgTUVUSE9EU1xyXG4gIHRvZ2dsZVN5bmMoZmllbGQsIHZhbCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgZnVuY3Rpb24oc3luYykge1xyXG4gICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgdGhpcy5zZXRBcmVhcyhzeW5jKTtcclxuICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICB9LCAnbG9jYWwnKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIHN5bmMgPT4ge1xyXG4gICAgICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgICAgICByZXR1cm4gc3luYztcclxuICAgICAgICB9LCAnc3luYycpXHJcblxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3RvZ2dsZV9zeW5jJyk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDp0b2dnbGUtc3luYycsIGZpZWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndG9nZ2xlZDpzeW5jIHRvZ2dsZWQ6c3luYy0nICsgZmllbGQsIGZpZWxkLCB2YWwpKVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTRVRUSU5HUyBNRVRIT0RTXHJcbiAgdXBkYXRlU2V0dGluZ3ModXBkYXRlciwgc2V0dGluZywgZXJyb3IpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCB1cGRhdGVyKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6JyArIHNldHRpbmcgKyAnLXNldHRpbmdzJykpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7IGlmIChlcnJvcikgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTsgfSk7XHJcbiAgfSxcclxuICBhZGRDdXN0b21NYXJrZXIoa2V5LCBzdHlsZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0gPSAgeyBzdHlsZSB9OyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfYWRkX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICByZW1vdmVDdXN0b21NYXJrZXIoa2V5KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IGRlbGV0ZSBzZXR0aW5ncy5tYXJrZXJzW2tleV07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9yZW1vdmVfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVN0eWxlKGtleSwgc3R5bGUpIHtcclxuICAgIGlmICgha2V5KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBzdHlsZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc3R5bGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VCZ0NvbG9yKGtleSwgY29sb3IpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgbWFya2VyID0gc2V0dGluZ3MubWFya2Vyc1trZXldO1xyXG5cclxuICAgICAgICBpZiAobWFya2VyKSB7XHJcbiAgICAgICAgICBsZXQgc3BsaXQgPSBtYXJrZXIuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgICAgICBsID0gc3BsaXQubGVuZ3RoLCBzdHlsZTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gc3BsaXRbbF07XHJcbiAgICAgICAgICAgIGlmIChzdHlsZS5pbmNsdWRlcygnYmFja2dyb3VuZC1jb2xvcicpKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gbWFya2VyLnN0eWxlLnJlcGxhY2UoL2JhY2tncm91bmQtY29sb3I6Iy57Nn0vLCAnYmFja2dyb3VuZC1jb2xvcjonICsgY29sb3IpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgICAgfSxcclxuICAgICAgJ2JnLWNvbG9yJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQXV0b05vdGVTZXR0aW5nKGtleSwgYXV0b25vdGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLmF1dG9ub3RlID0gYXV0b25vdGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2F1dG9ub3RlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfdG9nZ2xlX2F1dG9ub3RlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU1hcmtNZXRob2QobWV0aG9kKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9IG1ldGhvZDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFyay1tZXRob2QnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVTaG9ydGN1dFNldHRpbmcoa2V5LCBzdGF0dXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMV0gPSBzdGF0dXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfX3RvZ2dsZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTaG9ydGN1dFNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVswXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTb3J0T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc29ydGVkID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3NvcnQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlVmlld09wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnZpZXcgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAndmlldydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VDdXN0b21TZWFyY2godmFsdWVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoID0gdmFsdWVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdXN0b20tc2VhcmNoJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NlYXJjaCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VDb3VudFBlclBhZ2UodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5wcCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjb3VudC1wZXItcGFnZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVDdG1TZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMl0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3RtJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY3RtJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNhdmVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3NhdmVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVJbW11dE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pbW11dCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaW1tdXRvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVEcm9wTG9zc2VzT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2Ryb3Bsb3NzZXNvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVIYXNoT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2ggPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2hhc2hvcHQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUHJpdlNhdmVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdiA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncHJpdnNhdmVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9wcml2J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU5hbWluZ09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmcgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25hbWluZycsXHJcbiAgICAgICdlcnJvcl9zYXZlX25hbWluZydcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3Rlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbm90aWZ5J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVF1aWNrYnV0dG9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5W3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdxdWlja2J1dHRvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2Rvd25sb2FkJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHN3aXRjaFF1aWNrYnV0dG9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5W3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdxdWlja2J1dHRvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2Rvd25sb2FkJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGlmaWNhdGlvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbm90aWZ5J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU1pc2NTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtaXNjJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVRCQlBvd2VyU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAndGJicG93ZXInLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQXV0b2NzT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2F1dG9jcycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9jcydcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVJRnJhbWVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmlmcmFtZXMgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2lmcmFtZXMnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9pZnJhbWVzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNCU2V0dGluZ3ModGFiLCB1bmZvbGRlZCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGFic1t0YWJdLnVuZm9sZGVkID0gdW5mb2xkZWQ7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuICBjaGFuZ2VUaGVtZVNldHRpbmdzKHRoZW1lKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50aGVtZSA9IHRoZW1lOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEhJU1RPUlkgTUVUSE9EU1xyXG4gIGNsZWFuRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBpID0gbmFtZXMubGVuZ3RoLCBuYW1lO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXNbbmFtZV0pIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZWxzZSBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdsb2NhbCcpIHsgdGhpcy5lbWl0KCdjbGVhbmVkOmVudHJpZXMnKTsgfX0pXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9jbGVhbl9oaXN0b3J5JykpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuY2xlYW5FbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pO1xyXG4gIH0sXHJcbiAgc2F2ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBlbnRyeS5sb3N0ID0gW107XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgnc2F2ZWQ6ZW50cnknLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeScsICdlcnJvcl9zYXZlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgc2F2ZU5ld05hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdKTtcclxuICAgICAgZW50cnkubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSA9IGVudHJ5O1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktbmFtZScsIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSwgb2xkTmFtZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgY29ycmVjdE5hbWUobmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5uYW1lID0gbmFtZTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBhcmVhLCBpdGVyYXRpb24gPSAwKSB7XHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBpdGVyYXRpb24rKztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIGNvbnN0IHJlY2VpdmVkQ29tcGxldGVFbnRyeSA9ICEhZW50cnkudXJsO1xyXG4gICAgbGV0IGZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaWYgKHJlY2VpdmVkQ29tcGxldGVFbnRyeSkge1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LmVudHJpZXNbbmFtZV0pIHtcclxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBlbnRyeS5zeW5jZWQ7XHJcbiAgICAgICAgICBmb3IgKGxldCBlIGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5oYXNPd25Qcm9wZXJ0eShlKSkge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXVtlXSA9IGVudHJ5W2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoIWZvdW5kICYmIGl0ZXJhdGlvbiA8IDIpIHsgdGhpcy51cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgZW50cnkuc3luY2VkID8gJ2xvY2FsJyA6ICdzeW5jJywgaXRlcmF0aW9uKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLCBlbnRyeSkpO1xyXG4gIH0sXHJcbiAgZGVsZXRlRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXMgJiYgT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgdXJsID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLnVybCB8fCAnJztcclxuICAgICAgICAgIGhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0uaGFzaFNlbnNpdGl2ZSB8fCAnJztcclxuXHJcbiAgICAgICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdkZWxldGVkOmVudHJ5JywgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3MgPSBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzdG9yZWRNYXJrc0lEcyA9IFtdO1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzSURzID0gW107XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJlc3RvcmVkTWFya3MuZm9yRWFjaChtYXJrID0+IHJlc3RvcmVkTWFya3NJRHMucHVzaChtYXJrLmlkKSk7XHJcblxyXG4gICAgICAgICAgbGV0IGwgPSBvbGRMb3N0TWFya3MubGVuZ3RoLCBpZDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gb2xkTG9zdE1hcmtzW2xdLmlkO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNYXJrc0lEcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrc0lEcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvc3RNYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9sZExvc3RNYXJrc0lEcy5pbmNsdWRlcyhtYXJrLmlkKSkgb2xkTG9zdE1hcmtzLnB1c2gobWFyayk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIGNvbnN0IGFyZWFfMSA9IHZhbCA/ICdsb2NhbCcgOiAnc3luYyc7XHJcbiAgICBjb25zdCBhcmVhXzIgPSB2YWwgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGxldCBlbnRyeTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYV8xKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhXzIpXHJcblxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXN5bmMnLCBlbnRyeSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnN5bmMtZW50cnknLCBuYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGFnRW50cmllcyhuYW1lcywgdGFnKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgbmFtZXMuc3luYy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sICdzeW5jJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgICAgICBuYW1lcy5sb2NhbC5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgJ2xvY2FsJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZEVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnKTtcclxuICAgICAgaWYgKHN0b3JlZEVudHJ5LnRhZykge1xyXG4gICAgICAgIHN0b3JlZEVudHJ5LnRhZyA9IHN0b3JlZEVudHJ5LnRhZ1xyXG4gICAgICAgICAgLnJlcGxhY2UocngsICcgJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzfFxccyQvLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9LywgJyAnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgdGhpcy5hZGRUYWdUb0VudHJ5KGhpc3RvcnkuZW50cmllc1tuYW1lXSwgdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIGFkZFRhZ1RvRW50cnkoZW50cnksIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIGVudHJ5LnRhZyA9ICcnO1xyXG4gICAgZWxzZSBpZiAoIWVudHJ5LnRhZykgZW50cnkudGFnID0gdGFnO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcsICdnJyk7XHJcbiAgICAgIGlmIChlbnRyeS50YWcuc2VhcmNoKHJ4KSA9PT0gLTEpIHtcclxuICAgICAgICBlbnRyeS50YWcgKz0gJyAnICsgdGFnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcblxyXG4gIC8vIFBBR0UgTk9URSBNRVRIT0RTXHJcbiAgdXBkYXRlUGFnZU5vdGVzKHVybCwgbm90ZXMpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgncGFnZW5vdGVzJywgcGFnZW5vdGVzID0+IHtcclxuICAgICAgcGFnZW5vdGVzW3VybF0gPSBub3RlcztcclxuICAgICAgcmV0dXJuIHBhZ2Vub3RlcztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMub25TdG9yYWdlQ2hhbmdlZCkpO1xyXG4gIH0sXHJcbiAgb25TdG9yYWdlQ2hhbmdlZChjaGFuZ2VkSXRlbSkge1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnNldHRpbmdzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c2V0dGluZ3MnKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5oaXN0b3J5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6aGlzdG9yeScpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnBhZ2Vub3RlcykgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Vub3RlcycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGVUYWJFdmVudEhhbmRsZXJzJyxcclxuICAgICAgICAvLydzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICBsb2dzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWxvZ3MnLFxyXG4gICAgICBleHBvcnQ6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9ZXhwb3J0JyxcclxuICAgICAgc3luYzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zeW5jJ1xyXG4gICAgfSxcclxuICAgIHRhYkV2ZW50SGFuZGxlcnM6IHtcclxuICAgICAgb25BY3RpdmF0ZWQ6IG51bGwsXHJcbiAgICAgIG9uVXBkYXRlZDogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMudG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhtb2RlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25BY3RpdmF0ZWQgPSB0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25BY3RpdmF0ZWQgPSB0aGlzLm9uQWN0aXZhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKG9uQWN0aXZhdGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25VcGRhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25VcGRhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCA9IHRoaXMub25VcGRhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihvblVwZGF0ZWQsIHsgcHJvcGVydGllczogWydzdGF0dXMnXSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIFsnb25BY3RpdmF0ZWQnLCAnb25VcGRhdGVkJ10uZm9yRWFjaChldiA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFic1tldl0ucmVtb3ZlTGlzdGVuZXIodGhpcy50YWJFdmVudEhhbmRsZXJzW2V2XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YWJFdmVudEhhbmRsZXJzID0ge307XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfSxcclxuICAgIG9uQWN0aXZhdGVkKHRhYikge1xyXG4gICAgICB0aGlzLmVtaXQoJ2FjdGl2YXRlZDp0YWInLCB0YWIudGFiSWQsICh0YWIudXJsIHx8ICcnKSk7XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGVkKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VkLnVybCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDp1cmwnLCB0YWJJZCwgY2hhbmdlZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZDp0YWInLCB0YWJJZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbih1cmxzLCBuYW1lcykge1xyXG4gICAgICB1cmxzID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnID8gW3VybHNdIDogdXJscztcclxuICAgICAgbmFtZXMgPSB0eXBlb2YgbmFtZXMgPT09ICdzdHJpbmcnID8gW25hbWVzXSA6IG5hbWVzO1xyXG4gICAgICBsZXQgbCA9IHVybHMubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICB1cmw7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAoZnVuY3Rpb24oc2VsZiwgbCkge1xyXG4gICAgICAgICAgdXJsID0gdXJsc1tsXTtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IHVybHNbbF0gfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlY3VyaXR5V2FybmluZykgc2VsZi5lbWl0KCdmYWlsZWQ6b3Blbi10YWInKTtcclxuICAgICAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5hbWVzKSBzZWxmLmVtaXQoJ29wZW5lZDplbnRyeScsIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWVzW2xdIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSh0aGlzLCBsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5BZGRvblBhZ2UoaWQpIHtcclxuICAgICAgdGhpcy5vcGVuKHRoaXMudXJsc1tpZF0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0UGFnZSh2ZXJzaW9uLCBsb2FkUmVhc29uKSB7XHJcbiAgICAgIGlmIChsb2FkUmVhc29uICYmIGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJyB8fCBsb2FkUmVhc29uID09PSAndXBkYXRlJykgdGhpcy5vcGVuQWRkb25QYWdlKCduZXdzJyk7XHJcbiAgICB9LFxyXG4gICAgb3BlblNlYXJjaCh3b3JkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgY3VzdG9tID0gc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2gsIHVybDtcclxuICAgICAgICBpZiAoY3VzdG9tKSB1cmwgPSAnaHR0cHM6Ly8nICsgY3VzdG9tWzBdICsgd29yZCArIGN1c3RvbVsxXTtcclxuICAgICAgICBlbHNlIHVybCA9ICdodHRwczovLycgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nICsgd29yZDtcclxuICAgICAgICB0aGlzLm9wZW4odXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2luc3RhbGw6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnY2hlY2s6c3RvcmFnZSc6ICdjaGVja1N0b3JhZ2VPblN0YXJ0JyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJzogJ2ltcG9ydFN0b3JhZ2UnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3M7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykge1xyXG4gICAgICAgIHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gc2V0dGluZ3MuaGlzdG9yeTtcclxuICAgICAgICBjb25zdCBtaXNjID0gc2V0dGluZ3MubWlzYztcclxuICAgICAgICBjb25zdCBub3RlVHlwZXMgPSAncGJtTm90ZSBjaGFuZ2VkTm90ZSBlcnJvck5vdGUgc3VjY2Vzc05vdGUgdmlwTm90ZScuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMubikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLm4gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLm47XHJcbiAgICAgICAgICBtaXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgICBtaXNjLm5vdGVvbmNsaWNrID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmFycm93dXApIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd3VwID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd3VwO1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93ZG93biA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3dkb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5kWzBdKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuZFswXSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuc2IpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuc2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmNtKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuY20gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmNtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc2Nbbm90ZVR5cGVdICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RlcGxhaW52aWV3ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXBsYWludmlldyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5tYXJrbWV0aG9kKSB7XHJcbiAgICAgICAgICBtaXNjLm1hcmttZXRob2QgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MudGJicG93ZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy50YmJwb3dlciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zYikge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2I7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc2IudGhlbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRhYnMudGhlbWVzID0gZGVmYXVsdFNldHRpbmdzLnNiLnRhYnMudGhlbWVzO1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGhlbWUgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGhlbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmF1dG9jcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmlmcmFtZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3MuYWRkb24uaWZyYW1lcyA9IGRlZmF1bHRTZXR0aW5ncy5hZGRvbi5pZnJhbWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeS1vbi1yZXN0b3JhdGlvbicsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJyxcclxuICAgICAgJ3VwZGF0ZWQ6bG9ncycsXHJcbiAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpzYXZlb3B0LXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnLFxyXG4gICAgICAnZW50cmllczpmb3VuZCcsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cmllcycsXHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncycsXHJcbiAgICAgICdpbXBvcnRlZDpoaXN0b3J5JyxcclxuICAgICAgJ2N0eDptJyxcclxuICAgICAgJ2N0eDpkJyxcclxuICAgICAgJ2N0eDpiJyxcclxuICAgICAgJ2N0eDotYicsXHJcbiAgICAgICdjdHg6bicsXHJcbiAgICAgICdjdHg6YycsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ2NoYW5nZWQ6dXJsJ1xyXG4gICAgXSxcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAnZW50cnk6Zm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6b3JkZXJlZC1tYXJrcydcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfU1RPUkV9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG5cclxuICBpbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMucmVtb3ZlKCdsb2dzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBzeW5jID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zeW5jID8gbG9jYWxTdG9yYWdlLnN5bmMgOiBfREVGQVVMVF9TVE9SQUdFLnN5bmM7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZXRfc3luYyhzeW5jKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldChmaWVsZCwgdmFsKSB7XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX3NldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuICAgIHJldHVybiB0aGlzWydfc2V0XycgKyBmaWVsZF0odmFsKTtcclxuICB9LFxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlKC4uLmFyZ3MpO1xyXG4gIH0sXHJcblxyXG4gIGlzRW1wdHkoYXJlYSA9ICdzeW5jJykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgKCFPYmplY3Qua2V5cyhzdG9yYWdlKS5sZW5ndGggJiYgc3RvcmFnZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ByaXZzYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90YmJwb3dlcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG5cclxuICBfc2V0X3N0b3JhZ2UoYXJlYSA9IG51bGwpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXRfc2V0dGluZ3MoYXJlYSkudGhlbigoKSA9PiB0aGlzLl9zZXRfaGlzdG9yeShhcmVhKSk7XHJcbiAgfSxcclxuICBfc2V0X3N5bmMoc3luYykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBzeW5jOiBzeW5jIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHN5bmM6IHN5bmMgfSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0QXJlYXMoc3luYykpO1xyXG4gIH0sXHJcbiAgX3NldF9zZXR0aW5ncyhhcmVhID0gdGhpcy5hcmVhX3NldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBzZXR0aW5nczogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncykgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfaGlzdG9yeShhcmVhID0gdGhpcy5hcmVhX2hpc3RvcnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgaGlzdG9yeTogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5oaXN0b3J5KSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF92ZXJzaW9uKHZlcnNpb24pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pKTtcclxuICB9LFxyXG4gIF9zZXRfbG9nKGxvZykge1xyXG4gICAgaWYgKGxvZy5jbGVhcikge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IFtdIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldF9sb2dzKCkudGhlbihsb2dzID0+IHtcclxuICAgICAgbG9ncy5wdXNoKGxvZyk7XHJcbiAgICAgIGlmIChsb2dzLmxlbmd0aCA+IF9HTE9CQUxfU0VUVElOR1MuTUFYX0xPR19FTlRSSUVTKSBsb2dzLnNoaWZ0KCk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogbG9ncyB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9lbnRyeShlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgbGV0IGhpc3RvcnkgPSBzdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKGVudHJ5Lm5hbWUpKSByZXR1cm4gdGhpcy5fdXBkYXRlX2VudHJ5KGVudHJ5KTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLnNldCh7IGhpc3Rvcnk6IGhpc3RvcnkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfdXBkYXRlKGZpZWxkLCB1cGRhdGVyLCBhcmVhID0gdGhpc1snYXJlYV8nICsgZmllbGRdKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlW2ZpZWxkXSkge1xyXG4gICAgICAgICAgc3RvcmFnZVtmaWVsZF0gPSBfQ09QWShfREVGQVVMVF9TVE9SQUdFW2ZpZWxkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xyXG4gICAgICAgIHVwZGF0ZVtmaWVsZF0gPSB1cGRhdGVyLmNhbGwodGhpcywgc3RvcmFnZVtmaWVsZF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh1cGRhdGUpLnRoZW4oKCkgPT4gdXBkYXRlW2ZpZWxkXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfRVhURU5ELCBfR0VUX0FDVElWRV9UQUIsIF9NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuICBqc19pbmplY3Rpb25fZmFpbHVyZTogMzcsXHJcbiAgY3NzX2luamVjdGlvbl9mYWlsdXJlOiAzOCxcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjMyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy90bTQ4LnBuZ1wiOyIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==