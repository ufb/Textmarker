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
      'change:iframe-setting': 'toggleIFrameOpt',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsInJlZ2lzdGVyZWQiLCJzYW1lSGFzaGxlc3NVcmxzIiwicmVsb2FkZWQiLCJpbmplY3QiLCJsYXN0RnJhbWVJZCIsImlmcmFtZXMiLCJ3ZWJOYXZpZ2F0aW9uIiwiZ2V0QWxsRnJhbWVzIiwiZnJhbWVzIiwiZm9yRWFjaCIsImZyYW1lIiwiZnJhbWVJZCIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsImluamVjdENvbnRlbnRTY3JpcHQiLCJoaXN0b3J5IiwibWF0Y2hlcyIsImZpbmRNYXRjaGluZ0VudHJpZXMiLCJlbnRyaWVzIiwiZmlsdGVyTWF0Y2hlcyIsImxvY2tlZCIsImxvY2tlZEVudHJpZXMiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJydW5BdCIsImluc2VydENTUyIsImUiLCJ0b1N0cmluZyIsImhhc2hsZXNzUGFnZVVybCIsIm5vbkxvY2tlZEVudHJpZXMiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJsb2NrZWRFbnRyaWVzQ291bnQiLCJub25Mb2NrZWRFbnRyaWVzQ291bnQiLCJvbk5hbWluZ1JlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJ3aW5kb3dJbmZvIiwicHJpdiIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwidmlwTm90ZSIsIm9uRmFpbGVkSW1wb3J0IiwiZXJyb3IxIiwiZXJyb3IyIiwiZXJyTWVzc2FnZTEiLCJlcnJNZXNzYWdlMiIsIm9uSW1wb3J0RXJyb3IiLCJvbkltcG9ydFN1Y2Nlc3MiLCJmYWlsdXJlTm90ZSIsIm9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uIiwic3VjY2Vzc05vdGUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwicGFnZUFjdGlvbiIsImhpZGUiLCJzaG93Iiwic2V0UGFuZWwiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwiQXJyYXkiLCJpc0FycmF5IiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsInNldEFyZWFzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwidXBkYXRlRW50cnlPblBhZ2VBY3Rpb24iLCJzeW5jZWQiLCJyZWNlaXZlZENvbXBsZXRlRW50cnkiLCJmb3VuZCIsImhhc093blByb3BlcnR5IiwiZGVsZXRlRW50cmllcyIsInBvcCIsInVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbiIsImVudHJ5TmFtZSIsInJlc3RvcmVkTWFya3MiLCJsb3N0TWFya3MiLCJvbGRMb3N0TWFya3MiLCJyZXN0b3JlZE1hcmtzSURzIiwib2xkTG9zdE1hcmtzSURzIiwibWFyayIsInN5bmNFbnRyeSIsImFyZWFfMSIsImFyZWFfMiIsInRhZ0VudHJpZXMiLCJ0YWciLCJhZGRUYWdUb0VudHJ5IiwibG9jYWwiLCJyZW1vdmVUYWciLCJzdG9yZWRFbnRyeSIsInJ4IiwiUmVnRXhwIiwiYWRkVGFnIiwic2VhcmNoIiwidXBkYXRlUGFnZU5vdGVzIiwibm90ZXMiLCJwYWdlbm90ZXMiLCJyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlciIsInN0b3JhZ2UiLCJvbkNoYW5nZWQiLCJwcm94eSIsIm9uU3RvcmFnZUNoYW5nZWQiLCJjaGFuZ2VkSXRlbSIsInVybHMiLCJuZXdzIiwiaW5mbyIsImhlbHAiLCJjb250YWN0IiwibG9ncyIsInRhYkV2ZW50SGFuZGxlcnMiLCJvbkFjdGl2YXRlZCIsIm9uVXBkYXRlZCIsInRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMiLCJhZGRUYWJFdmVudEhhbmRsZXJzIiwiYmluZCIsInByb3BlcnRpZXMiLCJyZW1vdmVUYWJFdmVudEhhbmRsZXJzIiwiZXYiLCJzZWN1cml0eVdhcm5pbmciLCJzZWxmIiwib3BlbkFkZG9uUGFnZSIsIm9wZW5Jbml0UGFnZSIsIm9wZW5TZWFyY2giLCJ3b3JkIiwiY3VzdG9tIiwiZGVmYXVsdFNldHRpbmdzIiwiX0RFRkFVTFRfU1RPUkFHRSIsIm5vdGVUeXBlcyIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwiY20iLCJub3RlVHlwZSIsInRtdWlwb3MiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsInRiYnBvd2VyIiwidGhlbWVzIiwidXBkYXRlSGlzdG9yeSIsIm9yZGVyIiwiZml4SGlzdG9yeURhdGVzIiwibGFuZyIsImVuIiwiZGUiLCJsYXN0IiwibWVyZ2VIaXN0b3JpZXMiLCJuZXdIaXN0b3J5Iiwib2xkSGlzdG9yeSIsIm9sZEVudHJpZXMiLCJvbGROYW1lcyIsImFjY2VwdGVkRW50cmllcyIsInVybEV4aXN0cyIsIl9lbnRyaWVzIiwiYSIsInNldFN0b3JhZ2VPblVwZ3JhZGUiLCJpc0VtcHR5IiwiZW1wdHkiLCJjaGVja1N0b3JhZ2VPblN0YXJ0IiwiaW1wb3J0U3RvcmFnZSIsImltcG9ydGVkU3RvcmFnZSIsImltcG9ydFNldHRpbmdzIiwic3VjY2VzcyIsImltcG9ydEhpc3RvcnkiLCJzdWNjZXNzX3MiLCJzdWNjZXNzX2giLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wZW5FbnRyeURldGFpbFBhZ2UiLCJwb3B1cFVSTCIsImdldEN1cnJlbnQiLCJjdXJyZW50V2luZG93IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWluIiwiX1BPUlQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJPTkVPRkYiLCJDT05ORUNUSU9OIiwiX1NUT1JFIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsIl9zZXRfc3luYyIsIm1ldGgiLCJfdXBkYXRlIiwiY29uc3RydWN0b3IiLCJfZ2V0X21vZGUiLCJhcmVhX3NldHRpbmdzIiwiX2dldF9wcml2c2F2ZSIsIl9nZXRfbmFtaW5nIiwiX2dldF90YmJwb3dlciIsIl9nZXRfbWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwiX3NldF9zdG9yYWdlIiwiX3NldF9zZXR0aW5ncyIsIl9zZXRfaGlzdG9yeSIsImFyZWFfaGlzdG9yeSIsIl9zZXRfdmVyc2lvbiIsIl9zZXRfbG9nIiwiX2dldF9sb2dzIiwiTUFYX0xPR19FTlRSSUVTIiwic2hpZnQiLCJfc2V0X2VudHJ5IiwiX3VwZGF0ZV9lbnRyeSIsImNhbGwiLCJfQ09QWSIsIl9FWFRFTkQiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwieiIsInkiLCJzIiwiZG93bmxvYWQiLCJjb3B5IiwiYm1pY29uIiwib3ZlcndyaXRlIiwiY2hhbmdlZE5vdGUiLCJwcm9ncmVzc2JhciIsIm1ldGEiLCJ0YWdzIiwiYWN0aW9ucyIsImxpbmtzIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImpzX2luamVjdGlvbl9mYWlsdXJlIiwiY3NzX2luamVjdGlvbl9mYWlsdXJlIiwiZ2V0S2V5QnlWYWx1ZSIsInNyYyIsInRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImgiLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsInRvcGljcyIsImV2ZW50IiwiaGFuZGxlciIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0Iiwib2JqIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiZiIsInBvc3RNZXNzYWdlIiwicmVxIiwibGFzdEFyZyIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfcGFnZW5vdGVzIiwiciIsInNldFRpbWVvdXQiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFp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LElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU93WixZQUFZLENBQUN4WixPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QkosZSIsImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2JhY2tncm91bmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL2ljb25zL29uMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzIucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uNjQucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvdG00OC5wbmcnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL21vZHVsZXMvZXJyb3ItbG9nZ2luZydcclxuaW1wb3J0ICcuL21vZHVsZXMvaW5qZWN0aW9uLW1hbmFnZXInXHJcbmltcG9ydCBfTk9USUZJQ0FUSU9OUyBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IF9UQUJTIGZyb20gJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgX1dJTkRPV1MgZnJvbSAnLi9tb2R1bGVzL3dpbmRvd3MnXHJcbmltcG9ydCBfU0lERUJBUlMgZnJvbSAnLi9tb2R1bGVzL3NpZGViYXJzJ1xyXG5pbXBvcnQgX05BTUVSIGZyb20gJy4vbW9kdWxlcy9uYW1lcidcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHQtbWVudSdcclxuaW1wb3J0IF9QQUdFQUNUSU9OIGZyb20gJy4vbW9kdWxlcy9wYWdlLWFjdGlvbidcclxuLy9pbXBvcnQgX0lEQiBmcm9tICcuL21vZHVsZXMvaW5kZXhlZGRiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9zdG9yZS1tYW5hZ2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd0b2dnbGVPbkltcG9ydCcsXHJcbiAgICAgICdpbml0aWFsaXplZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ21pZ3JhdGVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnY2hlY2tlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZTphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDp0YmJwb3dlci1zZXR0aW5ncyc6ICdzZXRUQkJBY3Rpb24nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZlOiB0cnVlLFxyXG4gIHZlcnNpb246ICcnLFxyXG4gIGxvYWRSZWFzb246ICcnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy52ZXJzaW9uID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uIHx8IHZlcnNpb24gIT09IGN1cnJlbnRWZXJzaW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2FkUmVhc29uID0gdGhpcy5sb2FkUmVhc29uID0gZGV0YWlscy5yZWFzb247XHJcbiAgICAgICAgICBjb25zdCBwcmV2VmVyc2lvbiA9IGRldGFpbHMucHJldmlvdXNWZXJzaW9uIHx8ICcyJztcclxuICAgICAgICAgIGlmIChsb2FkUmVhc29uICYmIChsb2FkUmVhc29uID09PSAndXBkYXRlJyB8fCBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChsb2FkUmVhc29uICsgJzphcHAnLCBwcmV2VmVyc2lvbiwgbG9hZFJlYXNvbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uID09PSBjdXJyZW50VmVyc2lvbikgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLnNldCgndmVyc2lvbicsIHRoaXMudmVyc2lvbik7XHJcblxyXG4gICAgLy9fSURCKCk7XHJcbiAgICBfTk9USUZJQ0FUSU9OUygpO1xyXG4gICAgX1RBQlMoKTtcclxuICAgIF9OQU1FUigpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1dJTkRPV1MoKTtcclxuICAgIF9TSURFQkFSUygpO1xyXG4gICAgX1BBR0VBQ1RJT04oKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYWN0aXZhdGUodHJ1ZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnc3RhcnRlZDphcHAnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9hZFJlYXNvbikpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoYWN0aXZhdGUpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gYWN0aXZhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldFRCQkFjdGlvbigpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IG1vZGUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB0aGlzLmFjdGl2YXRlKG1vZGUpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOmFkZG9uJywgbW9kZSk7XHJcbiAgfSxcclxuICB0b2dnbGVPbkltcG9ydCgpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKG9uKSB7XHJcbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHBhdGg6IG9uID8ge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb24xNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vZmYxNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29mZjMyLnBuZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRUQkJBY3Rpb24oYWRkKSB7XHJcbiAgICBpZiAodHlwZW9mIGFkZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGlmIChhZGQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd0YmJwb3dlcicpLnRoZW4oZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IHRiYkhhbmRsZXIgPSB0aGlzLnRiYkhhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICcnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRiYkhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdjb250ZW50L3RiYi1tZW51L3RiYi1tZW51Lmh0bWwnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMudGJiSGFuZGxlcik7XHJcbiAgICAgIHRoaXMudGJiSGFuZGxlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtczoge1xyXG4gICAgICBtOiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIHc6IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgZDogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBiOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgbjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBzYjogeyBjb250ZXh0czogWydhbGwnLCAndGFiJ10gfSxcclxuICAgICAgYzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogW10sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpdGVtLmlkID0gaTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2N0eF8nICsgKGkgPT09ICctYicgPyAnZGInIDogaSkpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9IChpbmZvcywgdGFiKSA9PiB0aGlzLm9uQ2xpY2soaW5mb3MsIHRhYik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMuY3JlYXRlKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZShpZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnNwbGljZSh0aGlzLmNyZWF0ZWQuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsKCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGUob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVkO1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3Nob3J0Y3V0cycpLnRoZW4oc2hvcnRjdXRzID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzaG9ydGN1dHNbaV1bMl0pIHRoaXMuY3JlYXRlKGkpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soaW5mb3MsIHRhYikge1xyXG4gICAgICBjb25zdCBpZCA9IGluZm9zLm1lbnVJdGVtSWQ7XHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgcmVwb3J0KSB7XHJcbiAgICBsZXQgbG9nLCBtc2c7XHJcbiAgICBpZiAoZXJyb3IudGltZSkge1xyXG4gICAgICBsb2cgPSBbZXJyb3IudGltZSwgZXJyb3IubWVzc2FnZSArICcgWycgKyBlcnJvci5sb2NhdGlvbiArICddJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2cgPSBbKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgX0xPR19LRVlTW2Vycm9yXSB8fCBlcnJvcl07XHJcbiAgICAgIGlmIChyZXBvcnQgJiYgdHlwZW9mIHJlcG9ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsb2cucHVzaChyZXBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihyZXBvcnQpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnLCByZXBvcnQpO1xyXG4gIH0sXHJcbiAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3VybCcpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9wYm0nKTtcclxuICB9LFxyXG4gIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdqc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH0sXHJcbiAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoYW5nZWQ6dXJsJzogJ29uVVJMQ2hhbmdlJyxcclxuICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnb25UYWJDb21wbGV0ZWQnLFxyXG4gICAgICAnY2xpY2tlZDpwYWdlLWFjdGlvbic6ICdoYW5kbGVJbmplY3Rpb25zJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JzogJ29uU2F2ZU5ld1JlcXVlc3QnLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdvblVwZGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnbmFtZTplbnRyeT8nOiAnb25OYW1pbmdSZXF1ZXN0JyxcclxuICAgICAgJ29wZW5lZDplbnRyeSc6ICd0ZW1wU2F2ZUVudHJ5TWV0YURhdGEnXHJcbiAgICB9XHJcbiAgfSxcclxuICBxdWV1ZWRGb3JUYWJDb21wbGV0ZWQ6IHt9LFxyXG4gIGluamVjdGVkU2NyaXB0czoge30sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgb25UYWJDb21wbGV0ZWQodGFiSWQpIHtcclxuICAgIGlmICh0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKTtcclxuICAgICAgZGVsZXRlIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblVSTENoYW5nZSh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSA9IGNoYW5nZWQudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgY2hhbmdlZC51cmwsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUluamVjdGlvbnModGFiSWQsIG5ld1VybCwgbm9SZWxvYWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBoYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKSB7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkID0gdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdO1xyXG4gICAgY29uc3Qgc2FtZUhhc2hsZXNzVXJscyA9IHJlZ2lzdGVyZWQgJiYgX0hBU0hMRVNTKHJlZ2lzdGVyZWQudXJsKSA9PT0gX0hBU0hMRVNTKG5ld1VybCk7XHJcbiAgICBjb25zdCByZWxvYWRlZCA9IHJlZ2lzdGVyZWQgJiYgIW5vUmVsb2FkO1xyXG5cclxuICAgIGlmICghcmVnaXN0ZXJlZCB8fCByZWxvYWRlZCkge1xyXG4gICAgICB0aGlzLmluamVjdCh0YWJJZCwgbmV3VXJsLCAwKS50aGVuKGxhc3RGcmFtZUlkID0+IHtcclxuICAgICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBpZiAoc2V0dGluZ3MuYWRkb24uaWZyYW1lcykge1xyXG4gICAgICAgICAgICBicm93c2VyLndlYk5hdmlnYXRpb24uZ2V0QWxsRnJhbWVzKHsgdGFiSWQgfSkudGhlbihmcmFtZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGZyYW1lcy5mb3JFYWNoKGZyYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmcmFtZS5mcmFtZUlkICE9PSBsYXN0RnJhbWVJZCkgdGhpcy5pbmplY3QodGFiSWQsIGZyYW1lLnVybCwgZnJhbWUuZnJhbWVJZCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNhbWVIYXNobGVzc1VybHMgJiYgcmVnaXN0ZXJlZC5lbnRyeSAmJiByZWdpc3RlcmVkLmVudHJ5Lmhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdoYXNoOmNoYW5nZWQnLCBuZXdVcmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwsIGZyYW1lSWQpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIHVybCk7XHJcbiAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZmlsdGVyTWF0Y2hlcyhtYXRjaGVzKTtcclxuXHJcbiAgICAgICAgaWYgKGVudHJpZXMpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cmllczpmb3VuZCcsIHtcclxuICAgICAgICAgICAgZW50cmllcyxcclxuICAgICAgICAgICAgcmVjZW50bHlPcGVuZWRFbnRyeTogdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5LFxyXG4gICAgICAgICAgICBsb2NrZWQ6ICEhbWF0Y2hlcy5sb2NrZWRFbnRyaWVzLmxlbmd0aFxyXG4gICAgICAgICAgfSwgeyB0YWI6IHRhYklkLCBmcmFtZUlkIH0pO1xyXG5cclxuICAgICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBmcmFtZUlkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0Q29udGVudFNjcmlwdCh0YWJJZCwgdXJsLCBmcmFtZUlkKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcycsXHJcbiAgICAgIGZyYW1lSWQsXHJcbiAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfaWRsZSdcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF0gPSB7IHVybCB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0Q1NTKHRhYklkLCBmcmFtZUlkKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW1zZy5pbmNsdWRlcygnTWlzc2luZyBob3N0IHBlcm1pc3Npb24gZm9yIHRoZSB0YWInKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbnNlcnRDU1ModGFiSWQsIGZyYW1lSWQpIHtcclxuICAgIGJyb3dzZXIudGFicy5pbnNlcnRDU1ModGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi5jc3MnLFxyXG4gICAgICBmcmFtZUlkXHJcbiAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwpIHtcclxuICAgIGNvbnN0IGhhc2hsZXNzUGFnZVVybCA9IF9IQVNITEVTUyh1cmwpO1xyXG4gICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGxldCBlbnRyeSwgcGFnZVVybCwgZW50cnlVcmw7XHJcblxyXG4gICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tlXTtcclxuICAgICAgcGFnZVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyB1cmwgOiBoYXNobGVzc1BhZ2VVcmw7XHJcbiAgICAgIGVudHJ5VXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IGVudHJ5LnVybCA6IF9IQVNITEVTUyhlbnRyeS51cmwpO1xyXG5cclxuICAgICAgaWYgKHBhZ2VVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmxvY2tlZCkgbG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICBlbHNlIG5vbkxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IGxvY2tlZEVudHJpZXMsIG5vbkxvY2tlZEVudHJpZXMgfTtcclxuICB9LFxyXG5cclxuICBmaWx0ZXJNYXRjaGVzKG1hdGNoZXMpIHtcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLmxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5ub25Mb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllc0NvdW50ID0gbG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzQ291bnQgPSBub25Mb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGxldCBlbnRyaWVzO1xyXG5cclxuICAgIGlmIChsb2NrZWRFbnRyaWVzQ291bnQgJiYgbm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnd2FybjptaXhlZC1lbnRyeS10eXBlcycpO1xyXG4gICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50ID4gMSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZCcsIGVudHJpZXNbMF0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kJywgbG9ja2VkRW50cmllcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50cmllcztcclxuICB9LFxyXG5cclxuICBvbk5hbWluZ1JlcXVlc3Qoc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBjb25zdCBwcml2ID0gd2luZG93SW5mby5pbmNvZ25pdG87XHJcbiAgICAgICAgaWYgKCFwcml2KSBzZW5kUmVzcG9uc2UoIXByaXYpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2Ugc2VuZFJlc3BvbnNlKHNhdmVJblByaXYpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uU2F2ZU5ld1JlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uVXBkYXRlUmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRlbXBTYXZlRW50cnlNZXRhRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBkYXRhO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZ3JhbnRlZDpzYXZlLWVudHJ5JzogJ25hbWUnLFxyXG4gICAgICAgICdyZW5hbWU6ZW50cnknOiAncmVuYW1lJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hbWUoZW50cnkpIHtcclxuICAgICAgaWYgKGVudHJ5Lm5hbWUpIHJldHVybiB0aGlzLmFkanVzdE5hbWUoZW50cnkubmFtZSwgZW50cnkpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB0aGlzLmFkanVzdE5hbWUobnVsbCwgZW50cnksIG5hbWluZykpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIHJlbmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmV3TmFtZSk7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIpIG5ld05hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5hbWVkOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBhZGp1c3ROYW1lKG5hbWUsIGVudHJ5LCBtZXRob2QpIHtcclxuICAgICAgbmFtZSA9IG5hbWUgPyBuYW1lIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ3RpdGxlJyA/IGVudHJ5LnRpdGxlLnRyaW0oKSA/IGVudHJ5LnRpdGxlLnRyaW0oKSA6IGVudHJ5LnVybCA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICdkYXRlJyA/IChuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSkgOiAnJztcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyICYmIGVudHJ5LmxvY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJywgJ2Vycm9yX2RvdWJsZV9sb2NrZWRfbmFtZScsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY291bnRlcikgbmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICAgIGVudHJ5Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCduYW1lZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBnZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSkge1xyXG4gICAgICBsZXQgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcyksXHJcbiAgICAgICAgICBsID0gZXhpc3RpbmdOYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBjb3VudGVyID0gMCxcclxuICAgICAgICAgIGNoZWNrcG9pbnQ7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgY2hlY2twb2ludCA9IGV4aXN0aW5nTmFtZXNbbF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpKSBjb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9LFxyXG4gICAgaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpIHtcclxuICAgICAgaWYgKG5hbWUgPT09IGNoZWNrcG9pbnQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgbGV0IGwgPSBuYW1lLmxlbmd0aCxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfc3RhcnQgPSBjaGVja3BvaW50LnN1YnN0cmluZygwLCBsKSxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfZW5kO1xyXG5cclxuICAgICAgaWYgKG5hbWUgIT09IGNoZWNrcG9pbnRfc3RhcnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGNoZWNrcG9pbnRfZW5kID0gY2hlY2twb2ludC5zdWJzdHJpbmcobCwgY2hlY2twb2ludC5sZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKC9eXFxzKlxcKFxcZCtcXCkkLy50ZXN0KGNoZWNrcG9pbnRfZW5kKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdvblNhdmVkRW50cnknLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJzogJ29uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cmllcyc6ICdvbkRlbGV0ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAgICdmYWlsZWQ6aW1wb3J0JzogJ29uRmFpbGVkSW1wb3J0JyxcclxuICAgICAgICAnZXJyb3I6aW1wb3J0JzogJ29uSW1wb3J0RXJyb3InLFxyXG4gICAgICAgICdpbXBvcnRlZDpzdG9yYWdlJzogJ29uSW1wb3J0U3VjY2VzcycsXHJcbiAgICAgICAgJ2Vycm9yJzogJ29uRXJyb3InLFxyXG4gICAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCc6ICdvbkNTU0luamVjdGlvbkZhaWx1cmUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5KGNvbmRpdGlvbiwgbWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihzZXR0aW5ncykpIHtcclxuICAgICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RleHRtYXJrZXI6ICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0eXBlKSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnaWNvbnMvdG00OC5wbmcnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlZEVudHJ5KCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVkX2VudHJ5JyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnBibU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcGJtJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfdXJsJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZEltcG9ydChlcnJvcjEsIGVycm9yMikge1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMSk7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UyID0gZXJyb3IyID8gJ1xcblxcbicgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjIpIDogJyc7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfZmFpbHVyZScsIGVyck1lc3NhZ2UxICsgZXJyTWVzc2FnZTIpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3dhcm5pbmcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydFN1Y2Nlc3MoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdWNjZXNzZnVsUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2Muc3VjY2Vzc05vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcihlcnJvciwgbmFtZSkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yLCBuYW1lKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlbGV0ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdqc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnY29tcGxldGVkOnRhYic6ICdzaG93J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnBhZ2VBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBhZ2UtYWN0aW9uJywgdGFiLmlkLCB0YWIudXJsKTtcclxuICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uaGlkZSh0YWIuaWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyh0YWJJZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5zaG93KHRhYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9HRVRfQUNUSVZFX1RBQiwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FjdGl2YXRlZDp0YWInOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2VudHJ5OmZvdW5kJzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAndXBkYXRlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6J3NlbmRFbnRyeScsXHJcbiAgICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnOiAnc2VuZE9yZGVyZWRNYXJrcydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuXHJcbiAgICBzZXRQYW5lbCh0YWJJZCwgdXJsKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuKCkudGhlbihvcGVuID0+IHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9IEFycmF5LmlzQXJyYXkoZW50cnkpID8gIWVudHJ5WzBdLmhhc2hTZW5zaXRpdmUgOiAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZyc6ICd0b2dnbGVIYXNoT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnOiAndG9nZ2xlUHJpdlNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJzogJ3RvZ2dsZU5vdGVPcHQnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAndG9nZ2xlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJzogJ3RvZ2dsZU5vdGlmaWNhdGlvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnOiAndG9nZ2xlVEJCUG93ZXJTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnOiAnY2hhbmdlU29ydE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJzogJ2NoYW5nZVZpZXdPcHQnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZyc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcbiAgICAgICdjaGFuZ2U6aWZyYW1lLXNldHRpbmcnOiAndG9nZ2xlSUZyYW1lT3B0JyxcclxuXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcic6ICdyZW1vdmVDdXN0b21NYXJrZXInLFxyXG4gICAgICAnYWRkOmN1c3RvbS1tYXJrZXInOiAnYWRkQ3VzdG9tTWFya2VyJyxcclxuXHJcbiAgICAgICduYW1lZDplbnRyeSc6ICdzYXZlRW50cnknLFxyXG4gICAgICAncmVuYW1lZDplbnRyeSc6ICdzYXZlTmV3TmFtZScsXHJcbiAgICAgICdncmFudGVkOnVwZGF0ZS1lbnRyeSc6ICd1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcyc6ICdkZWxldGVFbnRyaWVzJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ3VwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbicsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJzogJ2NsZWFuRW50cmllcycsXHJcbiAgICAgICdzeW5jOmVudHJ5JzogJ3N5bmNFbnRyeScsXHJcbiAgICAgICd0YWc6ZW50cmllcyc6ICd0YWdFbnRyaWVzJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnOiAncmVtb3ZlVGFnJyxcclxuICAgICAgJ2FkZDp0YWcnOiAnYWRkVGFnJyxcclxuXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJzogJ2NoYW5nZVNCU2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJzogJ2NoYW5nZVRoZW1lU2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnOiAndXBkYXRlUGFnZU5vdGVzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlT25DaGFuZ2VkU3luYzogZmFsc2UsXHJcblxyXG4gIC8vIEFERE9OIE1FVEhPRFNcclxuICBzYXZlQWN0aXZhdGlvblN0YXRlKGFjdGl2ZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYWN0aXZlID0gYWN0aXZlOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNZTkMgTUVUSE9EU1xyXG4gIHRvZ2dsZVN5bmMoZmllbGQsIHZhbCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgZnVuY3Rpb24oc3luYykge1xyXG4gICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgdGhpcy5zZXRBcmVhcyhzeW5jKTtcclxuICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICB9LCAnbG9jYWwnKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIHN5bmMgPT4ge1xyXG4gICAgICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgICAgICByZXR1cm4gc3luYztcclxuICAgICAgICB9LCAnc3luYycpXHJcblxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3RvZ2dsZV9zeW5jJyk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDp0b2dnbGUtc3luYycsIGZpZWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndG9nZ2xlZDpzeW5jIHRvZ2dsZWQ6c3luYy0nICsgZmllbGQsIGZpZWxkLCB2YWwpKVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTRVRUSU5HUyBNRVRIT0RTXHJcbiAgdXBkYXRlU2V0dGluZ3ModXBkYXRlciwgc2V0dGluZywgZXJyb3IpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCB1cGRhdGVyKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6JyArIHNldHRpbmcgKyAnLXNldHRpbmdzJykpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7IGlmIChlcnJvcikgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTsgfSk7XHJcbiAgfSxcclxuICBhZGRDdXN0b21NYXJrZXIoa2V5LCBzdHlsZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0gPSAgeyBzdHlsZSB9OyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfYWRkX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICByZW1vdmVDdXN0b21NYXJrZXIoa2V5KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IGRlbGV0ZSBzZXR0aW5ncy5tYXJrZXJzW2tleV07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9yZW1vdmVfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVN0eWxlKGtleSwgc3R5bGUpIHtcclxuICAgIGlmICgha2V5KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBzdHlsZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc3R5bGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VCZ0NvbG9yKGtleSwgY29sb3IpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgbWFya2VyID0gc2V0dGluZ3MubWFya2Vyc1trZXldO1xyXG5cclxuICAgICAgICBpZiAobWFya2VyKSB7XHJcbiAgICAgICAgICBsZXQgc3BsaXQgPSBtYXJrZXIuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgICAgICBsID0gc3BsaXQubGVuZ3RoLCBzdHlsZTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gc3BsaXRbbF07XHJcbiAgICAgICAgICAgIGlmIChzdHlsZS5pbmNsdWRlcygnYmFja2dyb3VuZC1jb2xvcicpKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gbWFya2VyLnN0eWxlLnJlcGxhY2UoL2JhY2tncm91bmQtY29sb3I6Iy57Nn0vLCAnYmFja2dyb3VuZC1jb2xvcjonICsgY29sb3IpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgICAgfSxcclxuICAgICAgJ2JnLWNvbG9yJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQXV0b05vdGVTZXR0aW5nKGtleSwgYXV0b25vdGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLmF1dG9ub3RlID0gYXV0b25vdGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2F1dG9ub3RlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfdG9nZ2xlX2F1dG9ub3RlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU1hcmtNZXRob2QobWV0aG9kKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9IG1ldGhvZDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFyay1tZXRob2QnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVTaG9ydGN1dFNldHRpbmcoa2V5LCBzdGF0dXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMV0gPSBzdGF0dXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfX3RvZ2dsZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTaG9ydGN1dFNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVswXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTb3J0T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc29ydGVkID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3NvcnQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlVmlld09wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnZpZXcgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAndmlldydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VDdXN0b21TZWFyY2godmFsdWVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoID0gdmFsdWVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdXN0b20tc2VhcmNoJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NlYXJjaCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VDb3VudFBlclBhZ2UodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5wcCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjb3VudC1wZXItcGFnZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVDdG1TZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMl0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3RtJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY3RtJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNhdmVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3NhdmVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVJbW11dE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pbW11dCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaW1tdXRvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVEcm9wTG9zc2VzT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2Ryb3Bsb3NzZXNvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVIYXNoT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2ggPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2hhc2hvcHQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUHJpdlNhdmVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdiA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncHJpdnNhdmVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9wcml2J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU5hbWluZ09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmcgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25hbWluZycsXHJcbiAgICAgICdlcnJvcl9zYXZlX25hbWluZydcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3Rlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbm90aWZ5J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVF1aWNrYnV0dG9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5W3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdxdWlja2J1dHRvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2Rvd25sb2FkJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHN3aXRjaFF1aWNrYnV0dG9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5W3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdxdWlja2J1dHRvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2Rvd25sb2FkJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGlmaWNhdGlvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbm90aWZ5J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU1pc2NTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtaXNjJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVRCQlBvd2VyU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAndGJicG93ZXInLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQXV0b2NzT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2F1dG9jcycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9jcydcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVJRnJhbWVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmlmcmFtZXMgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2lmcmFtZXMnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9pZnJhbWVzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNCU2V0dGluZ3ModGFiLCB1bmZvbGRlZCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGFic1t0YWJdLnVuZm9sZGVkID0gdW5mb2xkZWQ7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuICBjaGFuZ2VUaGVtZVNldHRpbmdzKHRoZW1lKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50aGVtZSA9IHRoZW1lOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEhJU1RPUlkgTUVUSE9EU1xyXG4gIGNsZWFuRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBpID0gbmFtZXMubGVuZ3RoLCBuYW1lO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXNbbmFtZV0pIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZWxzZSBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdsb2NhbCcpIHsgdGhpcy5lbWl0KCdjbGVhbmVkOmVudHJpZXMnKTsgfX0pXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9jbGVhbl9oaXN0b3J5JykpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuY2xlYW5FbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pO1xyXG4gIH0sXHJcbiAgc2F2ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBlbnRyeS5sb3N0ID0gW107XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgnc2F2ZWQ6ZW50cnknLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeScsICdlcnJvcl9zYXZlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgc2F2ZU5ld05hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdKTtcclxuICAgICAgZW50cnkubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSA9IGVudHJ5O1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktbmFtZScsIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSwgb2xkTmFtZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGFyZWEpIHtcclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIGNvbnN0IHJlY2VpdmVkQ29tcGxldGVFbnRyeSA9ICEhZW50cnkudXJsO1xyXG4gICAgbGV0IGZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaWYgKHJlY2VpdmVkQ29tcGxldGVFbnRyeSkge1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LmVudHJpZXNbbmFtZV0pIHtcclxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBlbnRyeS5zeW5jZWQ7XHJcbiAgICAgICAgICBmb3IgKGxldCBlIGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5oYXNPd25Qcm9wZXJ0eShlKSkge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXVtlXSA9IGVudHJ5W2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoIWZvdW5kKSB7IHRoaXMudXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGVudHJ5LnN5bmNlZCA/ICdsb2NhbCcgOiAnc3luYycpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktb24tc2F2ZScsIGVudHJ5KSk7XHJcbiAgfSxcclxuICBkZWxldGVFbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllcyAmJiBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB1cmwgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0udXJsO1xyXG4gICAgICAgICAgaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5oYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cnknLCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpkZWxldGUtZW50cmllcycsICdlcnJvcl9kZWxfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmRlbGV0ZUVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdkZWxldGVkOmVudHJpZXMnKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24oZW50cnlOYW1lLCByZXN0b3JlZE1hcmtzLCBsb3N0TWFya3MsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzID0gaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICAgIGNvbnN0IHJlc3RvcmVkTWFya3NJRHMgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrc0lEcyA9IFtdO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLm1hcmtzID0gcmVzdG9yZWRNYXJrcztcclxuXHJcbiAgICAgICAgICByZXN0b3JlZE1hcmtzLmZvckVhY2gobWFyayA9PiByZXN0b3JlZE1hcmtzSURzLnB1c2gobWFyay5pZCkpO1xyXG5cclxuICAgICAgICAgIGxldCBsID0gb2xkTG9zdE1hcmtzLmxlbmd0aCwgaWQ7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IG9sZExvc3RNYXJrc1tsXS5pZDtcclxuICAgICAgICAgICAgaWYgKHJlc3RvcmVkTWFya3NJRHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3NJRHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsb3N0TWFya3MuZm9yRWFjaChtYXJrID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvbGRMb3N0TWFya3NJRHMuaW5jbHVkZXMobWFyay5pZCkpIG9sZExvc3RNYXJrcy5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCA9IG9sZExvc3RNYXJrcztcclxuXHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzeW5jRW50cnkobmFtZSwgdmFsKSB7XHJcbiAgICBjb25zdCBhcmVhXzEgPSB2YWwgPyAnbG9jYWwnIDogJ3N5bmMnO1xyXG4gICAgY29uc3QgYXJlYV8yID0gdmFsID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBsZXQgZW50cnk7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW25hbWVdKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdmFsO1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWFfMSlcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYV8yKVxyXG5cclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1zeW5jJywgZW50cnkpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzeW5jLWVudHJ5JywgbmFtZSkpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRhZ0VudHJpZXMobmFtZXMsIHRhZykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgIG5hbWVzLnN5bmMuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCAnc3luYycpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICAgICAgbmFtZXMubG9jYWwuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sICdsb2NhbCcpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHJlbW92ZVRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWRFbnRyeSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJyk7XHJcbiAgICAgIGlmIChzdG9yZWRFbnRyeS50YWcpIHtcclxuICAgICAgICBzdG9yZWRFbnRyeS50YWcgPSBzdG9yZWRFbnRyeS50YWdcclxuICAgICAgICAgIC5yZXBsYWNlKHJ4LCAnICcpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXlxcc3xcXHMkLywgJycpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXFxzezIsfS8sICcgJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKTtcclxuICB9LFxyXG4gIGFkZFRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkVGFnVG9FbnRyeShoaXN0b3J5LmVudHJpZXNbbmFtZV0sIHRhZyk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSk7XHJcbiAgfSxcclxuICBhZGRUYWdUb0VudHJ5KGVudHJ5LCB0YWcpIHtcclxuICAgIGlmICghdGFnKSBlbnRyeS50YWcgPSAnJztcclxuICAgIGVsc2UgaWYgKCFlbnRyeS50YWcpIGVudHJ5LnRhZyA9IHRhZztcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnLCAnZycpO1xyXG4gICAgICBpZiAoZW50cnkudGFnLnNlYXJjaChyeCkgPT09IC0xKSB7XHJcbiAgICAgICAgZW50cnkudGFnICs9ICcgJyArIHRhZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGVudHJ5KTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG5cclxuICAvLyBQQUdFIE5PVEUgTUVUSE9EU1xyXG4gIHVwZGF0ZVBhZ2VOb3Rlcyh1cmwsIG5vdGVzKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3BhZ2Vub3RlcycsIHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgIHBhZ2Vub3Rlc1t1cmxdID0gbm90ZXM7XHJcbiAgICAgIHJldHVybiBwYWdlbm90ZXM7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLm9uU3RvcmFnZUNoYW5nZWQpKTtcclxuICB9LFxyXG4gIG9uU3RvcmFnZUNoYW5nZWQoY2hhbmdlZEl0ZW0pIHtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5zZXR0aW5ncykgdGhpcy5lbWl0KCd1cGRhdGVkOnNldHRpbmdzJyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uaGlzdG9yeSkgdGhpcy5lbWl0KCd1cGRhdGVkOmhpc3RvcnknKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5wYWdlbm90ZXMpIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlbm90ZXMnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlVGFiRXZlbnRIYW5kbGVycycsXHJcbiAgICAgICAgLy8nc3RhcnRlZDphcHAnOiAnb3BlbkluaXRQYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHRiYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShhbSknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ2xvb2t1cDp3b3JkJzogJ29wZW5TZWFyY2gnLFxyXG4gICAgICAgICdvcGVuOmVudHJpZXMnOiAnb3BlbidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVybHM6IHtcclxuICAgICAgbmV3czogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXdzJyxcclxuICAgICAgc2V0dGluZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c2V0dGluZ3MnLFxyXG4gICAgICBoaXN0b3J5OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWhpc3RvcnknLFxyXG4gICAgICBpbmZvOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ldycsXHJcbiAgICAgIGhlbHA6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bWFudWFsJyxcclxuICAgICAgY29udGFjdDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1jb250YWN0JyxcclxuICAgICAgbG9nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1sb2dzJyxcclxuICAgICAgZXhwb3J0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWV4cG9ydCcsXHJcbiAgICAgIHN5bmM6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c3luYydcclxuICAgIH0sXHJcbiAgICB0YWJFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgIG9uQWN0aXZhdGVkOiBudWxsLFxyXG4gICAgICBvblVwZGF0ZWQ6IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMobW9kZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uQWN0aXZhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkID0gdGhpcy5vbkFjdGl2YXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihvbkFjdGl2YXRlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQgPSB0aGlzLm9uVXBkYXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIob25VcGRhdGVkLCB7IHByb3BlcnRpZXM6IFsnc3RhdHVzJ10gfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBbJ29uQWN0aXZhdGVkJywgJ29uVXBkYXRlZCddLmZvckVhY2goZXYgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnNbZXZdLnJlbW92ZUxpc3RlbmVyKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFiRXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZFRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH0sXHJcbiAgICBvbkFjdGl2YXRlZCh0YWIpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhY3RpdmF0ZWQ6dGFiJywgdGFiLnRhYklkLCAodGFiLnVybCB8fCAnJykpO1xyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlZCh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgICBpZiAoY2hhbmdlZC51cmwpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQ6dGFiJywgdGFiSWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW4odXJscywgbmFtZXMpIHtcclxuICAgICAgdXJscyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJyA/IFt1cmxzXSA6IHVybHM7XHJcbiAgICAgIG5hbWVzID0gdHlwZW9mIG5hbWVzID09PSAnc3RyaW5nJyA/IFtuYW1lc10gOiBuYW1lcztcclxuICAgICAgbGV0IGwgPSB1cmxzLmxlbmd0aCxcclxuICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IGZhbHNlLFxyXG4gICAgICAgICAgdXJsO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uKHNlbGYsIGwpIHtcclxuICAgICAgICAgIHVybCA9IHVybHNbbF07XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiB1cmxzW2xdIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZWN1cml0eVdhcm5pbmcpIHNlbGYuZW1pdCgnZmFpbGVkOm9wZW4tdGFiJyk7XHJcbiAgICAgICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuYW1lcykgc2VsZi5lbWl0KCdvcGVuZWQ6ZW50cnknLCB7IHVybDogdXJsLCBuYW1lOiBuYW1lc1tsXSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkodGhpcywgbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuQWRkb25QYWdlKGlkKSB7XHJcbiAgICAgIHRoaXMub3Blbih0aGlzLnVybHNbaWRdKTtcclxuICAgIH0sXHJcbiAgICBvcGVuSW5pdFBhZ2UodmVyc2lvbiwgbG9hZFJlYXNvbikge1xyXG4gICAgICBpZiAobG9hZFJlYXNvbiAmJiBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcgfHwgbG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScpIHRoaXMub3BlbkFkZG9uUGFnZSgnbmV3cycpO1xyXG4gICAgfSxcclxuICAgIG9wZW5TZWFyY2god29yZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IGN1c3RvbSA9IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoLCB1cmw7XHJcbiAgICAgICAgaWYgKGN1c3RvbSkgdXJsID0gJ2h0dHBzOi8vJyArIGN1c3RvbVswXSArIHdvcmQgKyBjdXN0b21bMV07XHJcbiAgICAgICAgZWxzZSB1cmwgPSAnaHR0cHM6Ly8nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyArIHdvcmQ7XHJcbiAgICAgICAgdGhpcy5vcGVuKHVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZTphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdpbnN0YWxsOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2NoZWNrOnN0b3JhZ2UnOiAnY2hlY2tTdG9yYWdlT25TdGFydCcsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZSc6ICdpbXBvcnRTdG9yYWdlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHNldHRpbmdzLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IHNldHRpbmdzLm1pc2M7XHJcbiAgICAgICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlIHZpcE5vdGUnLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLm4pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5uID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5uO1xyXG4gICAgICAgICAgbWlzYy5ub3RlaWNvbiA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgICAgICAgbWlzYy5ub3Rlb25jbGljayA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5hcnJvd3VwKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3d1cCA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3d1cDtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd2Rvd24gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93ZG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuZFswXSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmRbMF0gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLnNiKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLnNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5jbSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmNtID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5jbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWFya2Vycy5tLnN0eWxlKSB7XHJcbiAgICAgICAgICBsZXQgc3R5bGU7XHJcbiAgICAgICAgICBmb3IgKGxldCBtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBtYXJrZXJzW21dO1xyXG4gICAgICAgICAgICBtYXJrZXJzW21dID0geyBzdHlsZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnNvcnRlZCkge1xyXG4gICAgICAgICAgaGlzdG9yeS5zb3J0ZWQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGlzdG9yeS52aWV3KSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3Rvcnkuc2F2ZUluUHJpdiAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNhdmVJblByaXYgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaW1tdXQgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pbW11dCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaWdub3JlSGFzaCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5Lmlnbm9yZUhhc2ggPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuZHJvcExvc3NlcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmRyb3BMb3NzZXMgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm90ZVR5cGVzLmZvckVhY2gobm90ZVR5cGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBtaXNjW25vdGVUeXBlXSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIG1pc2Nbbm90ZVR5cGVdID0gZGVmYXVsdFNldHRpbmdzLm1pc2Nbbm90ZVR5cGVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbWlzYy50bXVpcG9zKSB7XHJcbiAgICAgICAgICBtaXNjLnRtdWlwb3MgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXRyYW5zcCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGV0cmFuc3AgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXBsYWludmlldyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGVwbGFpbnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlcGxhaW52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1pc2MubWFya21ldGhvZCkge1xyXG4gICAgICAgICAgbWlzYy5tYXJrbWV0aG9kID0gZGVmYXVsdFNldHRpbmdzLm1pc2MubWFya21ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLnRiYnBvd2VyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2MudGJicG93ZXIgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2IpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzLnNiLnRoZW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50YWJzLnRoZW1lcyA9IGRlZmF1bHRTZXR0aW5ncy5zYi50YWJzLnRoZW1lcztcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRoZW1lID0gZGVmYXVsdFNldHRpbmdzLnNiLnRoZW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gZGVmYXVsdFNldHRpbmdzLmFkZG9uLmF1dG9jcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLmFkZG9uLmlmcmFtZXMgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uaWZyYW1lcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnKTtcclxuICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gIH0sXHJcbiAgdXBkYXRlSGlzdG9yeShoaXN0b3J5KSB7XHJcbiAgICBkZWxldGUgaGlzdG9yeS5vcmRlcjtcclxuXHJcbiAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgZW50cnk7XHJcblxyXG4gICAgaWYgKCFsKSByZXR1cm4gaGlzdG9yeTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGVudHJ5ID0gdGhpcy5maXhIaXN0b3J5RGF0ZXMoZW50cmllc1tuYW1lc1tsXV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB0eXBlb2YgZW50cnkuc3luY2VkID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoaXN0b3J5O1xyXG4gIH0sXHJcbiAgZml4SGlzdG9yeURhdGVzKGVudHJ5KSB7XHJcbiAgICBjb25zdCBsYW5nID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5maXJzdCAhPT0gJ251bWJlcicpIGVudHJ5LmZpcnN0ID0gbmV3IERhdGUoKGVudHJ5LmZpcnN0W2xhbmddIHx8IGVudHJ5LmZpcnN0LmVuIHx8IGVudHJ5LmZpcnN0LmRlIHx8IGVudHJ5LmZpcnN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5Lmxhc3QgIT09ICdudW1iZXInKSBlbnRyeS5sYXN0ID0gbmV3IERhdGUoKGVudHJ5Lmxhc3RbbGFuZ10gfHwgZW50cnkubGFzdC5lbiB8fCBlbnRyeS5sYXN0LmRlIHx8IGVudHJ5Lmxhc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG4gIG1lcmdlSGlzdG9yaWVzKG5ld0hpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKG9sZEhpc3RvcnkgPT4ge1xyXG5cclxuICAgICAgbGV0IGVudHJpZXMgPSBuZXdIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgb2xkRW50cmllcyA9IG9sZEhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG9sZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRW50cmllcyksXHJcbiAgICAgICAgICBhY2NlcHRlZEVudHJpZXMgPSB7fSxcclxuICAgICAgICAgIG5hbWUsIGVudHJ5LCB1cmwsIHVybEV4aXN0cywgZTtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIHVybEV4aXN0cyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIW9sZE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB1cmwgPSBlbnRyeS51cmw7XHJcblxyXG4gICAgICAgICAgZm9yIChlIGluIG9sZEVudHJpZXMpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEVudHJpZXNbZV0udXJsID09PSB1cmwpIHtcclxuICAgICAgICAgICAgICB1cmxFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXVybEV4aXN0cykge1xyXG4gICAgICAgICAgICBlbnRyeS5zeW5jZWQgPSBhcmVhID09PSAnc3luYyc7XHJcbiAgICAgICAgICAgIGFjY2VwdGVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBhIGluIGFjY2VwdGVkRW50cmllcykge1xyXG4gICAgICAgICAgX2VudHJpZXNbYV0gPSBhY2NlcHRlZEVudHJpZXNbYV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICB9LCBhcmVhKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldFN0b3JhZ2VPblVwZ3JhZGUocHJldlZlcnNpb24gPSAnMicsIGxvYWRSZWFzb24pIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIGlmIChsb2FkUmVhc29uICE9PSAnaW5zdGFsbCcpIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZScpO1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdzeW5jJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKSlcclxuICAgIC8vLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnLCBwcmV2VmVyc2lvbikpXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKTtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbicsIGUudG9TdHJpbmcoKSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNoZWNrU3RvcmFnZU9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdzeW5jJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgfSkpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpO1xyXG4gIH0sXHJcbiAgaW1wb3J0U3RvcmFnZShpbXBvcnRlZFN0b3JhZ2UsIGFyZWEpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IGltcG9ydGVkU3RvcmFnZS5zZXR0aW5ncyxcclxuICAgICAgICBoaXN0b3J5ID0gaW1wb3J0ZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgaWYgKCFoaXN0b3J5ICYmICFzZXR0aW5ncykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9lbXB0eScpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICghaGlzdG9yeSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzX3MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2Vzc19oID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzX3MpIHtcclxuICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoc3VjY2Vzc19zID09PSAnb3V0ZGF0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOnNldHRpbmdzIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkge1xyXG4gICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ291dGRhdGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH0sXHJcbiAgaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXJnZUhpc3Rvcmllcyh0aGlzLnVwZGF0ZUhpc3RvcnkoaGlzdG9yeSwgdHJ1ZSksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3ZpZXc6ZW50cnknOiAnb3BlbkVudHJ5RGV0YWlsUGFnZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuRW50cnlEZXRhaWxQYWdlKG5hbWUpIHtcclxuICAgICAgY29uc3QgcG9wdXBVUkwgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdjb250ZW50L2RldGFpbC12aWV3L2RldGFpbC12aWV3Lmh0bWwnKTtcclxuXHJcbiAgICAgIGJyb3dzZXIud2luZG93cy5nZXRDdXJyZW50KCkudGhlbihjdXJyZW50V2luZG93ID0+IHtcclxuXHJcbiAgICAgICAgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh7XHJcbiAgICAgICAgICB1cmw6IHBvcHVwVVJMICsgJyMnICsgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxyXG4gICAgICAgICAgdHlwZTogJ3BhbmVsJyxcclxuICAgICAgICAgIGhlaWdodDogY3VycmVudFdpbmRvdy5oZWlnaHQgLSAyMixcclxuICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbihjdXJyZW50V2luZG93LndpZHRoLCA5ODApLFxyXG4gICAgICAgICAgaW5jb2duaXRvOiBjdXJyZW50V2luZG93LmluY29nbml0b1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5uZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdiYWNrZ3JvdW5kJyxcclxuICB0eXBlOiAnYmFja2dyb3VuZCcsXHJcbiAgcG9zdHBvbmVDb25uZWN0aW9uOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZScsXHJcbiAgICAgICd1cGRhdGVkOmxvZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2F2ZW9wdC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJyxcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJpZXMnLFxyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICdjdHg6bScsXHJcbiAgICAgICdjdHg6ZCcsXHJcbiAgICAgICdjdHg6YicsXHJcbiAgICAgICdjdHg6LWInLFxyXG4gICAgICAnY3R4Om4nLFxyXG4gICAgICAnY3R4OmMnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICdjaGFuZ2VkOnVybCdcclxuICAgIF0sXHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3RlcycsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1NUT1JFfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLnJlbW92ZSgnbG9ncycpO1xyXG5cclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgc3luYyA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2Uuc3luYyA/IGxvY2FsU3RvcmFnZS5zeW5jIDogX0RFRkFVTFRfU1RPUkFHRS5zeW5jO1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2V0X3N5bmMoc3luYyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXQoZmllbGQsIHZhbCkge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19zZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcbiAgICByZXR1cm4gdGhpc1snX3NldF8nICsgZmllbGRdKHZhbCk7XHJcbiAgfSxcclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICBpc0VtcHR5KGFyZWEgPSAnc3luYycpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICghT2JqZWN0LmtleXMoc3RvcmFnZSkubGVuZ3RoICYmIHN0b3JhZ2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcml2c2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdGJicG93ZXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuXHJcbiAgX3NldF9zdG9yYWdlKGFyZWEgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0X3NldHRpbmdzKGFyZWEpLnRoZW4oKCkgPT4gdGhpcy5fc2V0X2hpc3RvcnkoYXJlYSkpO1xyXG4gIH0sXHJcbiAgX3NldF9zeW5jKHN5bmMpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgc3luYzogc3luYyB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeW5jOiBzeW5jIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldEFyZWFzKHN5bmMpKTtcclxuICB9LFxyXG4gIF9zZXRfc2V0dGluZ3MoYXJlYSA9IHRoaXMuYXJlYV9zZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgc2V0dGluZ3M6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2hpc3RvcnkoYXJlYSA9IHRoaXMuYXJlYV9oaXN0b3J5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IGhpc3Rvcnk6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0UuaGlzdG9yeSkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfdmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KSk7XHJcbiAgfSxcclxuICBfc2V0X2xvZyhsb2cpIHtcclxuICAgIGlmIChsb2cuY2xlYXIpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBbXSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9nZXRfbG9ncygpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgIGxvZ3MucHVzaChsb2cpO1xyXG4gICAgICBpZiAobG9ncy5sZW5ndGggPiBfR0xPQkFMX1NFVFRJTkdTLk1BWF9MT0dfRU5UUklFUykgbG9ncy5zaGlmdCgpO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IGxvZ3MgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfZW50cnkoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBoaXN0b3J5ID0gc3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmNsdWRlcyhlbnRyeS5uYW1lKSkgcmV0dXJuIHRoaXMuX3VwZGF0ZV9lbnRyeShlbnRyeSk7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5zZXQoeyBoaXN0b3J5OiBoaXN0b3J5IH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3VwZGF0ZShmaWVsZCwgdXBkYXRlciwgYXJlYSA9IHRoaXNbJ2FyZWFfJyArIGZpZWxkXSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmICghc3RvcmFnZVtmaWVsZF0pIHtcclxuICAgICAgICAgIHN0b3JhZ2VbZmllbGRdID0gX0NPUFkoX0RFRkFVTFRfU1RPUkFHRVtmaWVsZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cGRhdGUgPSB7fTtcclxuICAgICAgICB1cGRhdGVbZmllbGRdID0gdXBkYXRlci5jYWxsKHRoaXMsIHN0b3JhZ2VbZmllbGRdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQodXBkYXRlKS50aGVuKCgpID0+IHVwZGF0ZVtmaWVsZF0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0VYVEVORCwgX0dFVF9BQ1RJVkVfVEFCLCBfTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcbiAganNfaW5qZWN0aW9uX2ZhaWx1cmU6IDM3LFxyXG4gIGNzc19pbmplY3Rpb25fZmFpbHVyZTogMzgsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb242NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvdG00OC5wbmdcIjsiLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKCk7XHJcbiAgfVxyXG4gIGV4dGVuZChldmVudHMpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cyk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cyB8fCB0aGlzLmV2ZW50cztcclxuICAgIGxldCBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==