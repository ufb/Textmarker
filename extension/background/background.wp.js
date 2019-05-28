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
      console.log('pass:', req.ev);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsInJlZ2lzdGVyZWQiLCJzYW1lSGFzaGxlc3NVcmxzIiwicmVsb2FkZWQiLCJpbmplY3QiLCJsYXN0RnJhbWVJZCIsImlmcmFtZXMiLCJ3ZWJOYXZpZ2F0aW9uIiwiZ2V0QWxsRnJhbWVzIiwiZnJhbWVzIiwiZm9yRWFjaCIsImZyYW1lIiwiZnJhbWVJZCIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsImluamVjdENvbnRlbnRTY3JpcHQiLCJoaXN0b3J5IiwibWF0Y2hlcyIsImZpbmRNYXRjaGluZ0VudHJpZXMiLCJlbnRyaWVzIiwiZmlsdGVyTWF0Y2hlcyIsImxvY2tlZCIsImxvY2tlZEVudHJpZXMiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJydW5BdCIsImluc2VydENTUyIsImUiLCJ0b1N0cmluZyIsImhhc2hsZXNzUGFnZVVybCIsIm5vbkxvY2tlZEVudHJpZXMiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJsb2NrZWRFbnRyaWVzQ291bnQiLCJub25Mb2NrZWRFbnRyaWVzQ291bnQiLCJvbk5hbWluZ1JlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJ3aW5kb3dJbmZvIiwicHJpdiIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwidmlwTm90ZSIsIm9uRmFpbGVkSW1wb3J0IiwiZXJyb3IxIiwiZXJyb3IyIiwiZXJyTWVzc2FnZTEiLCJlcnJNZXNzYWdlMiIsIm9uSW1wb3J0RXJyb3IiLCJvbkltcG9ydFN1Y2Nlc3MiLCJmYWlsdXJlTm90ZSIsIm9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uIiwic3VjY2Vzc05vdGUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwicGFnZUFjdGlvbiIsImhpZGUiLCJzaG93Iiwic2V0UGFuZWwiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwiQXJyYXkiLCJpc0FycmF5IiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsInNldEFyZWFzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwidXBkYXRlRW50cnlPblBhZ2VBY3Rpb24iLCJzeW5jZWQiLCJyZWNlaXZlZENvbXBsZXRlRW50cnkiLCJmb3VuZCIsImhhc093blByb3BlcnR5IiwiZGVsZXRlRW50cmllcyIsInBvcCIsInVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbiIsImVudHJ5TmFtZSIsInJlc3RvcmVkTWFya3MiLCJsb3N0TWFya3MiLCJvbGRMb3N0TWFya3MiLCJyZXN0b3JlZE1hcmtzSURzIiwib2xkTG9zdE1hcmtzSURzIiwibWFyayIsInN5bmNFbnRyeSIsImFyZWFfMSIsImFyZWFfMiIsInRhZ0VudHJpZXMiLCJ0YWciLCJhZGRUYWdUb0VudHJ5IiwibG9jYWwiLCJyZW1vdmVUYWciLCJzdG9yZWRFbnRyeSIsInJ4IiwiUmVnRXhwIiwiYWRkVGFnIiwic2VhcmNoIiwidXBkYXRlUGFnZU5vdGVzIiwibm90ZXMiLCJwYWdlbm90ZXMiLCJyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlciIsInN0b3JhZ2UiLCJvbkNoYW5nZWQiLCJwcm94eSIsIm9uU3RvcmFnZUNoYW5nZWQiLCJjaGFuZ2VkSXRlbSIsInVybHMiLCJuZXdzIiwiaW5mbyIsImhlbHAiLCJjb250YWN0IiwibG9ncyIsInRhYkV2ZW50SGFuZGxlcnMiLCJvbkFjdGl2YXRlZCIsIm9uVXBkYXRlZCIsInRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMiLCJhZGRUYWJFdmVudEhhbmRsZXJzIiwiYmluZCIsInByb3BlcnRpZXMiLCJyZW1vdmVUYWJFdmVudEhhbmRsZXJzIiwiZXYiLCJzZWN1cml0eVdhcm5pbmciLCJzZWxmIiwib3BlbkFkZG9uUGFnZSIsIm9wZW5Jbml0UGFnZSIsIm9wZW5TZWFyY2giLCJ3b3JkIiwiY3VzdG9tIiwiZGVmYXVsdFNldHRpbmdzIiwiX0RFRkFVTFRfU1RPUkFHRSIsIm5vdGVUeXBlcyIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwiY20iLCJub3RlVHlwZSIsInRtdWlwb3MiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsInRiYnBvd2VyIiwidGhlbWVzIiwidXBkYXRlSGlzdG9yeSIsIm9yZGVyIiwiZml4SGlzdG9yeURhdGVzIiwibGFuZyIsImVuIiwiZGUiLCJsYXN0IiwibWVyZ2VIaXN0b3JpZXMiLCJuZXdIaXN0b3J5Iiwib2xkSGlzdG9yeSIsIm9sZEVudHJpZXMiLCJvbGROYW1lcyIsImFjY2VwdGVkRW50cmllcyIsInVybEV4aXN0cyIsIl9lbnRyaWVzIiwiYSIsInNldFN0b3JhZ2VPblVwZ3JhZGUiLCJpc0VtcHR5IiwiZW1wdHkiLCJjaGVja1N0b3JhZ2VPblN0YXJ0IiwiaW1wb3J0U3RvcmFnZSIsImltcG9ydGVkU3RvcmFnZSIsImltcG9ydFNldHRpbmdzIiwic3VjY2VzcyIsImltcG9ydEhpc3RvcnkiLCJzdWNjZXNzX3MiLCJzdWNjZXNzX2giLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wZW5FbnRyeURldGFpbFBhZ2UiLCJwb3B1cFVSTCIsImdldEN1cnJlbnQiLCJjdXJyZW50V2luZG93IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWluIiwiX1BPUlQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJPTkVPRkYiLCJDT05ORUNUSU9OIiwiX1NUT1JFIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsIl9zZXRfc3luYyIsIm1ldGgiLCJfdXBkYXRlIiwiY29uc3RydWN0b3IiLCJfZ2V0X21vZGUiLCJhcmVhX3NldHRpbmdzIiwiX2dldF9wcml2c2F2ZSIsIl9nZXRfbmFtaW5nIiwiX2dldF90YmJwb3dlciIsIl9nZXRfbWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwiX3NldF9zdG9yYWdlIiwiX3NldF9zZXR0aW5ncyIsIl9zZXRfaGlzdG9yeSIsImFyZWFfaGlzdG9yeSIsIl9zZXRfdmVyc2lvbiIsIl9zZXRfbG9nIiwiX2dldF9sb2dzIiwiTUFYX0xPR19FTlRSSUVTIiwic2hpZnQiLCJfc2V0X2VudHJ5IiwiX3VwZGF0ZV9lbnRyeSIsImNhbGwiLCJfQ09QWSIsIl9FWFRFTkQiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwieiIsInkiLCJzIiwiZG93bmxvYWQiLCJjb3B5IiwiYm1pY29uIiwib3ZlcndyaXRlIiwiY2hhbmdlZE5vdGUiLCJwcm9ncmVzc2JhciIsIm1ldGEiLCJ0YWdzIiwiYWN0aW9ucyIsImxpbmtzIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImpzX2luamVjdGlvbl9mYWlsdXJlIiwiY3NzX2luamVjdGlvbl9mYWlsdXJlIiwiZ2V0S2V5QnlWYWx1ZSIsInNyYyIsInRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImgiLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsInRvcGljcyIsImV2ZW50IiwiaGFuZGxlciIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0Iiwib2JqIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiZiIsInBvc3RNZXNzYWdlIiwicmVxIiwiY29uc29sZSIsImxhc3RBcmciLCJ1bmRlZmluZWQiLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0IiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJhcmVhX3BhZ2Vub3RlcyIsInIiLCJzZXRUaW1lb3V0Iiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlE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QjNOLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBMmhCLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDdmlCLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT3daLFlBQVksQ0FBQ3haLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCSixlIiwiZmlsZSI6ImJhY2tncm91bmQvYmFja2dyb3VuZC53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFja2dyb3VuZC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi4vaWNvbnMvb24xNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24xOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb242NC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy90bTQ4LnBuZydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkFHRSBmcm9tICcuL3N0b3JhZ2UnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9lcnJvci1sb2dnaW5nJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlcidcclxuaW1wb3J0IF9OT1RJRklDQVRJT05TIGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgX1RBQlMgZnJvbSAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCBfV0lORE9XUyBmcm9tICcuL21vZHVsZXMvd2luZG93cydcclxuaW1wb3J0IF9TSURFQkFSUyBmcm9tICcuL21vZHVsZXMvc2lkZWJhcnMnXHJcbmltcG9ydCBfTkFNRVIgZnJvbSAnLi9tb2R1bGVzL25hbWVyJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dC1tZW51J1xyXG5pbXBvcnQgX1BBR0VBQ1RJT04gZnJvbSAnLi9tb2R1bGVzL3BhZ2UtYWN0aW9uJ1xyXG4vL2ltcG9ydCBfSURCIGZyb20gJy4vbW9kdWxlcy9pbmRleGVkZGInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL3N0b3JlLW1hbmFnZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3RvZ2dsZU9uSW1wb3J0JyxcclxuICAgICAgJ2luaXRpYWxpemVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnbWlncmF0ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdjaGVja2VkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAndG9nZ2xlOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnRiYnBvd2VyLXNldHRpbmdzJzogJ3NldFRCQkFjdGlvbidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmU6IHRydWUsXHJcbiAgdmVyc2lvbjogJycsXHJcbiAgbG9hZFJlYXNvbjogJycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFZlcnNpb24gPSB0aGlzLnZlcnNpb24gPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgICBpZiAoIXZlcnNpb24gfHwgdmVyc2lvbiAhPT0gY3VycmVudFZlcnNpb24pIHtcclxuICAgICAgICAgIGNvbnN0IGxvYWRSZWFzb24gPSB0aGlzLmxvYWRSZWFzb24gPSBkZXRhaWxzLnJlYXNvbjtcclxuICAgICAgICAgIGNvbnN0IHByZXZWZXJzaW9uID0gZGV0YWlscy5wcmV2aW91c1ZlcnNpb24gfHwgJzInO1xyXG4gICAgICAgICAgaWYgKGxvYWRSZWFzb24gJiYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnIHx8IGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGxvYWRSZWFzb24gKyAnOmFwcCcsIHByZXZWZXJzaW9uLCBsb2FkUmVhc29uKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCd2ZXJzaW9uJywgdGhpcy52ZXJzaW9uKTtcclxuXHJcbiAgICAvL19JREIoKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG4gICAgX1NJREVCQVJTKCk7XHJcbiAgICBfUEFHRUFDVElPTigpO1xyXG5cclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5hY3RpdmF0ZSh0cnVlKSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzdGFydGVkOmFwcCcsIHRoaXMudmVyc2lvbiwgdGhpcy5sb2FkUmVhc29uKSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShhY3RpdmF0ZSkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBhY3RpdmF0ZTtcclxuICAgIHRoaXMudG9nZ2xlQnJvd3NlckFjdGlvbkljb24oYWN0aXZlKTtcclxuICAgIHRoaXMuc2V0VEJCQWN0aW9uKCk7XHJcbiAgfSxcclxuICB0b2dnbGUoKSB7XHJcbiAgICBsZXQgbW9kZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgIHRoaXMuYWN0aXZhdGUobW9kZSk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6YWRkb24nLCBtb2RlKTtcclxuICB9LFxyXG4gIHRvZ2dsZU9uSW1wb3J0KCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQnJvd3NlckFjdGlvbkljb24ob24pIHtcclxuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgcGF0aDogb24gPyB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vbjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vbjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vbjMyLnBuZydcclxuICAgICAgfSA6IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29mZjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vZmYxOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb2ZmMzIucG5nJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldFRCQkFjdGlvbihhZGQpIHtcclxuICAgIGlmICh0eXBlb2YgYWRkID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgaWYgKGFkZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3RiYnBvd2VyJykudGhlbihlbmFibGVkID0+IHtcclxuICAgICAgICBpZiAoZW5hYmxlZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZGRUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgdGJiSGFuZGxlciA9IHRoaXMudGJiSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJycgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGJiSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmVUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKHRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJ2NvbnRlbnQvdGJiLW1lbnUvdGJiLW1lbnUuaHRtbCcgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQucmVtb3ZlTGlzdGVuZXIodGhpcy50YmJIYW5kbGVyKTtcclxuICAgICAgdGhpcy50YmJIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnOiAndXBkYXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIG06IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgdzogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICBkOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIGI6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgJy1iJzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBuOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIHNiOiB7IGNvbnRleHRzOiBbJ2FsbCcsICd0YWInXSB9LFxyXG4gICAgICBjOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBbXSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3R4XycgKyAoaSA9PT0gJy1iJyA/ICdkYicgOiBpKSk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKGluZm9zLCB0YWIpID0+IHRoaXMub25DbGljayhpbmZvcywgdGFiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoaWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5jcmVhdGUodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlKGlkKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQuc3BsaWNlKHRoaXMuY3JlYXRlZC5pbmRleE9mKGlkKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZShvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVBbGwoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2hvcnRjdXRzJykudGhlbihzaG9ydGN1dHMgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgaWYgKHNob3J0Y3V0c1tpXVsyXSkgdGhpcy5jcmVhdGUoaSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGljayhpbmZvcywgdGFiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gaW5mb3MubWVudUl0ZW1JZDtcclxuICAgICAgaWYgKGlkID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCBpbmZvcy5zZWxlY3Rpb25UZXh0KTtcclxuICAgICAgZWxzZSBpZiAoaWQgPT09ICdzYicpIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5vcGVuKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCdjdHg6JyArIGlkLCBudWxsLCBudWxsLCB7IHRhYjogdGFiLmlkIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0xPR19LRVlTIGZyb20gJy4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZXJyb3InOiAnbG9nJyxcclxuICAgICAgJ3dhcm5pbmcnOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6ZGVsZXRlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcyc6ICdvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzJyxcclxuICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAnZXJyb3I6aW1wb3J0JzogJ2xvZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnOiAnbG9nJyxcclxuICAgICAgJ2NsZWFyOmxvZ3MnOiAnY2xlYXInLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCc6ICdvbkNTU0luamVjdGlvbkZhaWx1cmUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbG9nKGVycm9yLCByZXBvcnQpIHtcclxuICAgIGxldCBsb2csIG1zZztcclxuICAgIGlmIChlcnJvci50aW1lKSB7XHJcbiAgICAgIGxvZyA9IFtlcnJvci50aW1lLCBlcnJvci5tZXNzYWdlICsgJyBbJyArIGVycm9yLmxvY2F0aW9uICsgJ10nXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZyA9IFsobmV3IERhdGUoKS5nZXRUaW1lKCkpLCBfTE9HX0tFWVNbZXJyb3JdIHx8IGVycm9yXTtcclxuICAgICAgaWYgKHJlcG9ydCAmJiB0eXBlb2YgcmVwb3J0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGxvZy5wdXNoKHJlcG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgbG9nKS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzIGxvZ2dlZDplcnJvcicsIGxvZykpO1xyXG4gIH0sXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIHsgY2xlYXI6IHRydWUgfSkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncycpKTtcclxuICB9LFxyXG4gIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyk7XHJcbiAgfSxcclxuICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFJlc3RvcmF0aW9uKHJlcG9ydCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScsIHJlcG9ydCk7XHJcbiAgfSxcclxuICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfdXJsJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFBCTSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3BibScpO1xyXG4gIH0sXHJcbiAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2pzX2luamVjdGlvbl9mYWlsdXJlJyk7XHJcbiAgfSxcclxuICBvbkNTU0luamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnY3NzX2luamVjdGlvbl9mYWlsdXJlJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2hhbmdlZDp1cmwnOiAnb25VUkxDaGFuZ2UnLFxyXG4gICAgICAnY29tcGxldGVkOnRhYic6ICdvblRhYkNvbXBsZXRlZCcsXHJcbiAgICAgICdjbGlja2VkOnBhZ2UtYWN0aW9uJzogJ2hhbmRsZUluamVjdGlvbnMnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nOiAnb25TYXZlTmV3UmVxdWVzdCcsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ29uVXBkYXRlUmVxdWVzdCcsXHJcbiAgICAgICduYW1lOmVudHJ5Pyc6ICdvbk5hbWluZ1JlcXVlc3QnLFxyXG4gICAgICAnb3BlbmVkOmVudHJ5JzogJ3RlbXBTYXZlRW50cnlNZXRhRGF0YSdcclxuICAgIH1cclxuICB9LFxyXG4gIHF1ZXVlZEZvclRhYkNvbXBsZXRlZDoge30sXHJcbiAgaW5qZWN0ZWRTY3JpcHRzOiB7fSxcclxuICByZWNlbnRseU9wZW5lZEVudHJ5OiBudWxsLFxyXG5cclxuICBvblRhYkNvbXBsZXRlZCh0YWJJZCkge1xyXG4gICAgaWYgKHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSkge1xyXG4gICAgICB0aGlzLmF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pO1xyXG4gICAgICBkZWxldGUgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uVVJMQ2hhbmdlKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgIT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdID0gY2hhbmdlZC51cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBjaGFuZ2VkLnVybCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIG5ld1VybCwgbm9SZWxvYWQpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmFkZG9uLmF1dG9jcykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGhhbmRsZUluamVjdGlvbnModGFiSWQsIG5ld1VybCwgbm9SZWxvYWQpIHtcclxuICAgIGNvbnN0IHJlZ2lzdGVyZWQgPSB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF07XHJcbiAgICBjb25zdCBzYW1lSGFzaGxlc3NVcmxzID0gcmVnaXN0ZXJlZCAmJiBfSEFTSExFU1MocmVnaXN0ZXJlZC51cmwpID09PSBfSEFTSExFU1MobmV3VXJsKTtcclxuICAgIGNvbnN0IHJlbG9hZGVkID0gcmVnaXN0ZXJlZCAmJiAhbm9SZWxvYWQ7XHJcblxyXG4gICAgaWYgKCFyZWdpc3RlcmVkIHx8IHJlbG9hZGVkKSB7XHJcbiAgICAgIHRoaXMuaW5qZWN0KHRhYklkLCBuZXdVcmwsIDApLnRoZW4obGFzdEZyYW1lSWQgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICAgIGlmIChzZXR0aW5ncy5hZGRvbi5pZnJhbWVzKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXIud2ViTmF2aWdhdGlvbi5nZXRBbGxGcmFtZXMoeyB0YWJJZCB9KS50aGVuKGZyYW1lcyA9PiB7XHJcbiAgICAgICAgICAgICAgZnJhbWVzLmZvckVhY2goZnJhbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmZyYW1lSWQgIT09IGxhc3RGcmFtZUlkKSB0aGlzLmluamVjdCh0YWJJZCwgZnJhbWUudXJsLCBmcmFtZS5mcmFtZUlkKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2FtZUhhc2hsZXNzVXJscyAmJiByZWdpc3RlcmVkLmVudHJ5ICYmIHJlZ2lzdGVyZWQuZW50cnkuaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2hhc2g6Y2hhbmdlZCcsIG5ld1VybCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0KHRhYklkLCB1cmwsIGZyYW1lSWQpIHtcclxuICAgIHJldHVybiB0aGlzLmluamVjdENvbnRlbnRTY3JpcHQodGFiSWQsIHVybCwgZnJhbWVJZCkudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmZpbmRNYXRjaGluZ0VudHJpZXMoaGlzdG9yeSwgdXJsKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5maWx0ZXJNYXRjaGVzKG1hdGNoZXMpO1xyXG5cclxuICAgICAgICBpZiAoZW50cmllcykge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyaWVzOmZvdW5kJywge1xyXG4gICAgICAgICAgICBlbnRyaWVzLFxyXG4gICAgICAgICAgICByZWNlbnRseU9wZW5lZEVudHJ5OiB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnksXHJcbiAgICAgICAgICAgIGxvY2tlZDogISFtYXRjaGVzLmxvY2tlZEVudHJpZXMubGVuZ3RoXHJcbiAgICAgICAgICB9LCB7IHRhYjogdGFiSWQsIGZyYW1lSWQgfSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGZyYW1lSWQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwsIGZyYW1lSWQpIHtcclxuICAgIHJldHVybiBicm93c2VyLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzJyxcclxuICAgICAgZnJhbWVJZCxcclxuICAgICAgcnVuQXQ6ICdkb2N1bWVudF9pZGxlJ1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5qZWN0ZWRTY3JpcHRzW3RhYklkXSA9IHsgdXJsIH07XHJcbiAgICAgICAgdGhpcy5pbnNlcnRDU1ModGFiSWQsIGZyYW1lSWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluc2VydENTUyh0YWJJZCwgZnJhbWVJZCkge1xyXG4gICAgYnJvd3Nlci50YWJzLmluc2VydENTUyh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLmNzcycsXHJcbiAgICAgIGZyYW1lSWRcclxuICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zdCBtc2cgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCFtc2cuaW5jbHVkZXMoJ01pc3NpbmcgaG9zdCBwZXJtaXNzaW9uIGZvciB0aGUgdGFiJykpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBmaW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIHVybCkge1xyXG4gICAgY29uc3QgaGFzaGxlc3NQYWdlVXJsID0gX0hBU0hMRVNTKHVybCk7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgbGV0IGVudHJ5LCBwYWdlVXJsLCBlbnRyeVVybDtcclxuXHJcbiAgICBmb3IgKGxldCBlIGluIGVudHJpZXMpIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2VdO1xyXG4gICAgICBwYWdlVXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IHVybCA6IGhhc2hsZXNzUGFnZVVybDtcclxuICAgICAgZW50cnlVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gZW50cnkudXJsIDogX0hBU0hMRVNTKGVudHJ5LnVybCk7XHJcblxyXG4gICAgICBpZiAocGFnZVVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICBpZiAoZW50cnkubG9ja2VkKSBsb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIGVsc2Ugbm9uTG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbG9ja2VkRW50cmllcywgbm9uTG9ja2VkRW50cmllcyB9O1xyXG4gIH0sXHJcblxyXG4gIGZpbHRlck1hdGNoZXMobWF0Y2hlcykge1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IG1hdGNoZXMubG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLm5vbkxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzQ291bnQgPSBsb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXNDb3VudCA9IG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgbGV0IGVudHJpZXM7XHJcblxyXG4gICAgaWYgKGxvY2tlZEVudHJpZXNDb3VudCAmJiBub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIGVudHJpZXMgPSBsb2NrZWRFbnRyaWVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIGVudHJpZXMgPSBbbm9uTG9ja2VkRW50cmllc1swXV07XHJcbiAgICAgIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kJywgZW50cmllc1swXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBsb2NrZWRFbnRyaWVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG4gIH0sXHJcblxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbXBvcnQnOiAnb25GYWlsZWRJbXBvcnQnLFxyXG4gICAgICAgICdlcnJvcjppbXBvcnQnOiAnb25JbXBvcnRFcnJvcicsXHJcbiAgICAgICAgJ2ltcG9ydGVkOnN0b3JhZ2UnOiAnb25JbXBvcnRTdWNjZXNzJyxcclxuICAgICAgICAnZXJyb3InOiAnb25FcnJvcicsXHJcbiAgICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnkoY29uZGl0aW9uLCBtZXNzYWdlLCB0eXBlKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKHNldHRpbmdzKSkge1xyXG4gICAgICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGV4dG1hcmtlcjogJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHR5cGUpLFxyXG4gICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uVXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdpY29ucy90bTQ4LnBuZycpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVkRW50cnkoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZWRfZW50cnknKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MucGJtTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9wYm0nKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV91cmwnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkSW1wb3J0KGVycm9yMSwgZXJyb3IyKSB7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UxID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IxKTtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTIgPSBlcnJvcjIgPyAnXFxuXFxuJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMikgOiAnJztcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9mYWlsdXJlJywgZXJyTWVzc2FnZTEgKyBlcnJNZXNzYWdlMiksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydEVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfd2FybmluZycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0U3VjY2VzcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5zdWNjZXNzTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yKGVycm9yLCBuYW1lKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IsIG5hbWUpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2pzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNTU0luamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3NzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdjb21wbGV0ZWQ6dGFiJzogJ3Nob3cnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGFiID0+IHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cGFnZS1hY3Rpb24nLCB0YWIuaWQsIHRhYi51cmwpO1xyXG4gICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5oaWRlKHRhYi5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93KHRhYklkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLmFkZG9uLmF1dG9jcykge1xyXG4gICAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLnNob3codGFiSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0dFVF9BQ1RJVkVfVEFCLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnYWN0aXZhdGVkOnRhYic6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2NoYW5nZWQ6dXJsJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnZW50cnk6Zm91bmQnOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICd1cGRhdGVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzonc2VuZEVudHJ5JyxcclxuICAgICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcyc6ICdzZW5kT3JkZXJlZE1hcmtzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IHt9LFxyXG5cclxuICAgIHNldFBhbmVsKHRhYklkLCB1cmwpIHtcclxuICAgICAgdGhpcy5pc09wZW4oKS50aGVuKG9wZW4gPT4ge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICBicm93c2VyLnNpZGViYXJBY3Rpb24uc2V0UGFuZWwoe1xyXG4gICAgICAgICAgICBwYW5lbDogYnJvd3Nlci5ydW50aW1lLmdldFVSTChgY29udGVudC9zaWRlYmFyL3NpZGViYXIuaHRtbCMke3RhYklkfV8ke3VybH1gKSxcclxuICAgICAgICAgICAgdGFiSWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zaWRlYmFyQWN0aW9uLmlzT3Blbih7fSk7XHJcbiAgICB9LFxyXG4gICAgc3RvcmVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gQXJyYXkuaXNBcnJheShlbnRyeSkgPyAhZW50cnlbMF0uaGFzaFNlbnNpdGl2ZSA6ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG5cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGFiLmlkO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBlbnRyaWVzW2lkXSA9IGVudHJpZXNbaWRdIHx8IFtdO1xyXG4gICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1MoZW50cnkudXJsKSA6IGVudHJ5LnVybDtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCB1cmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmICh1cmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRW50cnkobmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaGFzaFNlbnNpdGl2ZSA/IHVybCA6IF9IQVNITEVTUyh1cmwpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHNhdmVkVXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAoc2F2ZWRVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlbnRyaWVzW2lkXVtzYXZlZFVybF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdGFiLnVybCA6IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpkZWxldGVkLWZvci10YWInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRFbnRyeSgpIHtcclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc2hsZXNzVXJsID0gX0hBU0hMRVNTKHRhYi51cmwpO1xyXG4gICAgICAgIGNvbnN0IGVudHJpZXNGb3JUaGlzVGFiID0gdGhpcy5lbnRyaWVzW3RhYi5pZF07XHJcbiAgICAgICAgbGV0IGVudHJ5ID0gbnVsbDtcclxuICAgICAgICBpZiAoZW50cmllc0ZvclRoaXNUYWIpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc0ZvclRoaXNUYWJbdGFiLnVybF0gfHwgZW50cmllc0ZvclRoaXNUYWJbaGFzaGxlc3NVcmxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kLWZvci10YWInLCBlbnRyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRPcmRlcmVkTWFya3MobWFya3MpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlbnRyeTpvcmRlcmVkLW1hcmtzJywgbWFya3MpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3JlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAnc2F2ZUFjdGl2YXRpb25TdGF0ZScsXHJcbiAgICAgICd0b2dnbGU6c3luYyc6ICd0b2dnbGVTeW5jJyxcclxuXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZyc6ICdjaGFuZ2VTdHlsZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZyc6ICdjaGFuZ2VBdXRvTm90ZVNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmJnLXNldHRpbmcnOiAnY2hhbmdlQmdDb2xvcicsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZyc6ICdjaGFuZ2VNYXJrTWV0aG9kJyxcclxuICAgICAgJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJzogJ3RvZ2dsZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZyc6ICdjaGFuZ2VTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOmN0bS1zZXR0aW5nJzogJ3RvZ2dsZUN0bVNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZyc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJzogJ3RvZ2dsZUltbXV0T3B0JyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnOiAndG9nZ2xlRHJvcExvc3Nlc09wdCcsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJzogJ3RvZ2dsZUhhc2hPcHQnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZyc6ICd0b2dnbGVQcml2U2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnOiAndG9nZ2xlTm90ZU9wdCcsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICd0b2dnbGVRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnOiAndG9nZ2xlTm90aWZpY2F0aW9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZyc6ICd0b2dnbGVUQkJQb3dlclNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZyc6ICdjaGFuZ2VTb3J0T3B0JyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnOiAnY2hhbmdlVmlld09wdCcsXHJcbiAgICAgICdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnOiAndG9nZ2xlQXV0b2NzT3B0JyxcclxuICAgICAgJ2NoYW5nZTppZnJhbWUtc2V0dGluZyc6ICd0b2dnbGVJRnJhbWVPcHQnLFxyXG5cclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJzogJ3JlbW92ZUN1c3RvbU1hcmtlcicsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcic6ICdhZGRDdXN0b21NYXJrZXInLFxyXG5cclxuICAgICAgJ25hbWVkOmVudHJ5JzogJ3NhdmVFbnRyeScsXHJcbiAgICAgICdyZW5hbWVkOmVudHJ5JzogJ3NhdmVOZXdOYW1lJyxcclxuICAgICAgJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JzogJ3VwZGF0ZUVudHJ5T25QYWdlQWN0aW9uJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJzogJ2RlbGV0ZUVudHJpZXMnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAndXBkYXRlRW50cnlPblJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnOiAnY2xlYW5FbnRyaWVzJyxcclxuICAgICAgJ3N5bmM6ZW50cnknOiAnc3luY0VudHJ5JyxcclxuICAgICAgJ3RhZzplbnRyaWVzJzogJ3RhZ0VudHJpZXMnLFxyXG4gICAgICAncmVtb3ZlOnRhZyc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAnYWRkOnRhZyc6ICdhZGRUYWcnLFxyXG5cclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInOiAnY2hhbmdlU0JTZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnOiAnY2hhbmdlVGhlbWVTZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZSc6ICd1cGRhdGVQYWdlTm90ZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVPbkNoYW5nZWRTeW5jOiBmYWxzZSxcclxuXHJcbiAgLy8gQURET04gTUVUSE9EU1xyXG4gIHNhdmVBY3RpdmF0aW9uU3RhdGUoYWN0aXZlKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hY3RpdmUgPSBhY3RpdmU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU1lOQyBNRVRIT0RTXHJcbiAgdG9nZ2xlU3luYyhmaWVsZCwgdmFsKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBmdW5jdGlvbihzeW5jKSB7XHJcbiAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICB0aGlzLnNldEFyZWFzKHN5bmMpO1xyXG4gICAgICByZXR1cm4gc3luYztcclxuICAgIH0sICdsb2NhbCcpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgc3luYyA9PiB7XHJcbiAgICAgICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgICAgIH0sICdzeW5jJylcclxuXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfdG9nZ2xlX3N5bmMnKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnRvZ2dsZS1zeW5jJywgZmllbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd0b2dnbGVkOnN5bmMgdG9nZ2xlZDpzeW5jLScgKyBmaWVsZCwgZmllbGQsIHZhbCkpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNFVFRJTkdTIE1FVEhPRFNcclxuICB1cGRhdGVTZXR0aW5ncyh1cGRhdGVyLCBzZXR0aW5nLCBlcnJvcikge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHVwZGF0ZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDonICsgc2V0dGluZyArICctc2V0dGluZ3MnKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgaWYgKGVycm9yKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpOyB9KTtcclxuICB9LFxyXG4gIGFkZEN1c3RvbU1hcmtlcihrZXksIHN0eWxlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XSA9ICB7IHN0eWxlIH07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9hZGRfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHJlbW92ZUN1c3RvbU1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgZGVsZXRlIHNldHRpbmdzLm1hcmtlcnNba2V5XTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX3JlbW92ZV9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU3R5bGUoa2V5LCBzdHlsZSkge1xyXG4gICAgaWYgKCFrZXkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IHN0eWxlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUJnQ29sb3Ioa2V5LCBjb2xvcikge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSBzZXR0aW5ncy5tYXJrZXJzW2tleV07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIpIHtcclxuICAgICAgICAgIGxldCBzcGxpdCA9IG1hcmtlci5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsIHN0eWxlO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzcGxpdFtsXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBtYXJrZXIuc3R5bGUucmVwbGFjZSgvYmFja2dyb3VuZC1jb2xvcjojLns2fS8sICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBjb2xvcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgICB9LFxyXG4gICAgICAnYmctY29sb3InLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VBdXRvTm90ZVNldHRpbmcoa2V5LCBhdXRvbm90ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uYXV0b25vdGUgPSBhdXRvbm90ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b25vdGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV90b2dnbGVfYXV0b25vdGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWFya01ldGhvZChtZXRob2QpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID0gbWV0aG9kOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrLW1ldGhvZCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX21hcmtfbWV0aG9kJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNob3J0Y3V0U2V0dGluZyhrZXksIHN0YXR1cykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsxXSA9IHN0YXR1czsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNob3J0Y3V0U2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzBdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmltbXV0ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpbW11dG9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZURyb3BMb3NzZXNPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnZHJvcGxvc3Nlc29wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUhhc2hPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaGFzaG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVQcml2U2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdwcml2c2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX3ByaXYnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTmFtaW5nT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lm5hbWluZyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbmFtaW5nJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbmFtaW5nJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3dpdGNoUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90aWZpY2F0aW9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3RpZmljYXRpb24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWlzY1NldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21pc2MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVEJCUG93ZXJTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd0YmJwb3dlcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVBdXRvY3NPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b2NzJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b2NzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUlGcmFtZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uaWZyYW1lcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaWZyYW1lcycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2lmcmFtZXMnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU0JTZXR0aW5ncyh0YWIsIHVuZm9sZGVkKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50YWJzW3RhYl0udW5mb2xkZWQgPSB1bmZvbGRlZDsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG4gIGNoYW5nZVRoZW1lU2V0dGluZ3ModGhlbWUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRoZW1lID0gdGhlbWU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSElTVE9SWSBNRVRIT0RTXHJcbiAgY2xlYW5FbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGkgPSBuYW1lcy5sZW5ndGgsIG5hbWU7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllc1tuYW1lXSkgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ2xvY2FsJykgeyB0aGlzLmVtaXQoJ2NsZWFuZWQ6ZW50cmllcycpOyB9fSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2NsZWFuX2hpc3RvcnknKSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5jbGVhbkVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSk7XHJcbiAgfSxcclxuICBzYXZlRW50cnkoZW50cnkpIHtcclxuICAgIGVudHJ5Lmxvc3QgPSBbXTtcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCdzYXZlZDplbnRyeScsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5JywgJ2Vycm9yX3NhdmVfZW50cnknKSk7XHJcbiAgfSxcclxuICBzYXZlTmV3TmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV0pO1xyXG4gICAgICBlbnRyeS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdID0gZW50cnk7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1uYW1lJywgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdLCBvbGROYW1lKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgYXJlYSkge1xyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgY29uc3QgcmVjZWl2ZWRDb21wbGV0ZUVudHJ5ID0gISFlbnRyeS51cmw7XHJcbiAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAocmVjZWl2ZWRDb21wbGV0ZUVudHJ5KSB7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkuZW50cmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGVudHJ5LnN5bmNlZDtcclxuICAgICAgICAgIGZvciAobGV0IGUgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5Lmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdW2VdID0gZW50cnlbZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmICghZm91bmQpIHsgdGhpcy51cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgZW50cnkuc3luY2VkID8gJ2xvY2FsJyA6ICdzeW5jJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1vbi1zYXZlJywgZW50cnkpKTtcclxuICB9LFxyXG4gIGRlbGV0ZUVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzICYmIE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHVybCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS51cmw7XHJcbiAgICAgICAgICBoYXNoU2Vuc2l0aXZlID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyeScsIG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3MgPSBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzdG9yZWRNYXJrc0lEcyA9IFtdO1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzSURzID0gW107XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJlc3RvcmVkTWFya3MuZm9yRWFjaChtYXJrID0+IHJlc3RvcmVkTWFya3NJRHMucHVzaChtYXJrLmlkKSk7XHJcblxyXG4gICAgICAgICAgbGV0IGwgPSBvbGRMb3N0TWFya3MubGVuZ3RoLCBpZDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gb2xkTG9zdE1hcmtzW2xdLmlkO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNYXJrc0lEcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrc0lEcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvc3RNYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9sZExvc3RNYXJrc0lEcy5pbmNsdWRlcyhtYXJrLmlkKSkgb2xkTG9zdE1hcmtzLnB1c2gobWFyayk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIGNvbnN0IGFyZWFfMSA9IHZhbCA/ICdsb2NhbCcgOiAnc3luYyc7XHJcbiAgICBjb25zdCBhcmVhXzIgPSB2YWwgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGxldCBlbnRyeTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYV8xKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhXzIpXHJcblxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXN5bmMnLCBlbnRyeSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnN5bmMtZW50cnknLCBuYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGFnRW50cmllcyhuYW1lcywgdGFnKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgbmFtZXMuc3luYy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sICdzeW5jJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgICAgICBuYW1lcy5sb2NhbC5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgJ2xvY2FsJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZEVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnKTtcclxuICAgICAgaWYgKHN0b3JlZEVudHJ5LnRhZykge1xyXG4gICAgICAgIHN0b3JlZEVudHJ5LnRhZyA9IHN0b3JlZEVudHJ5LnRhZ1xyXG4gICAgICAgICAgLnJlcGxhY2UocngsICcgJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzfFxccyQvLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9LywgJyAnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgdGhpcy5hZGRUYWdUb0VudHJ5KGhpc3RvcnkuZW50cmllc1tuYW1lXSwgdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIGFkZFRhZ1RvRW50cnkoZW50cnksIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIGVudHJ5LnRhZyA9ICcnO1xyXG4gICAgZWxzZSBpZiAoIWVudHJ5LnRhZykgZW50cnkudGFnID0gdGFnO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcsICdnJyk7XHJcbiAgICAgIGlmIChlbnRyeS50YWcuc2VhcmNoKHJ4KSA9PT0gLTEpIHtcclxuICAgICAgICBlbnRyeS50YWcgKz0gJyAnICsgdGFnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcblxyXG4gIC8vIFBBR0UgTk9URSBNRVRIT0RTXHJcbiAgdXBkYXRlUGFnZU5vdGVzKHVybCwgbm90ZXMpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgncGFnZW5vdGVzJywgcGFnZW5vdGVzID0+IHtcclxuICAgICAgcGFnZW5vdGVzW3VybF0gPSBub3RlcztcclxuICAgICAgcmV0dXJuIHBhZ2Vub3RlcztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMub25TdG9yYWdlQ2hhbmdlZCkpO1xyXG4gIH0sXHJcbiAgb25TdG9yYWdlQ2hhbmdlZChjaGFuZ2VkSXRlbSkge1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnNldHRpbmdzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c2V0dGluZ3MnKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5oaXN0b3J5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6aGlzdG9yeScpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnBhZ2Vub3RlcykgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Vub3RlcycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGVUYWJFdmVudEhhbmRsZXJzJyxcclxuICAgICAgICAvLydzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICBsb2dzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWxvZ3MnLFxyXG4gICAgICBleHBvcnQ6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9ZXhwb3J0JyxcclxuICAgICAgc3luYzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zeW5jJ1xyXG4gICAgfSxcclxuICAgIHRhYkV2ZW50SGFuZGxlcnM6IHtcclxuICAgICAgb25BY3RpdmF0ZWQ6IG51bGwsXHJcbiAgICAgIG9uVXBkYXRlZDogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMudG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhtb2RlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25BY3RpdmF0ZWQgPSB0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25BY3RpdmF0ZWQgPSB0aGlzLm9uQWN0aXZhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKG9uQWN0aXZhdGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25VcGRhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25VcGRhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCA9IHRoaXMub25VcGRhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihvblVwZGF0ZWQsIHsgcHJvcGVydGllczogWydzdGF0dXMnXSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIFsnb25BY3RpdmF0ZWQnLCAnb25VcGRhdGVkJ10uZm9yRWFjaChldiA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFic1tldl0ucmVtb3ZlTGlzdGVuZXIodGhpcy50YWJFdmVudEhhbmRsZXJzW2V2XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YWJFdmVudEhhbmRsZXJzID0ge307XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfSxcclxuICAgIG9uQWN0aXZhdGVkKHRhYikge1xyXG4gICAgICB0aGlzLmVtaXQoJ2FjdGl2YXRlZDp0YWInLCB0YWIudGFiSWQsICh0YWIudXJsIHx8ICcnKSk7XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGVkKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VkLnVybCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDp1cmwnLCB0YWJJZCwgY2hhbmdlZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZDp0YWInLCB0YWJJZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbih1cmxzLCBuYW1lcykge1xyXG4gICAgICB1cmxzID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnID8gW3VybHNdIDogdXJscztcclxuICAgICAgbmFtZXMgPSB0eXBlb2YgbmFtZXMgPT09ICdzdHJpbmcnID8gW25hbWVzXSA6IG5hbWVzO1xyXG4gICAgICBsZXQgbCA9IHVybHMubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICB1cmw7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAoZnVuY3Rpb24oc2VsZiwgbCkge1xyXG4gICAgICAgICAgdXJsID0gdXJsc1tsXTtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IHVybHNbbF0gfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlY3VyaXR5V2FybmluZykgc2VsZi5lbWl0KCdmYWlsZWQ6b3Blbi10YWInKTtcclxuICAgICAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5hbWVzKSBzZWxmLmVtaXQoJ29wZW5lZDplbnRyeScsIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWVzW2xdIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSh0aGlzLCBsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5BZGRvblBhZ2UoaWQpIHtcclxuICAgICAgdGhpcy5vcGVuKHRoaXMudXJsc1tpZF0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0UGFnZSh2ZXJzaW9uLCBsb2FkUmVhc29uKSB7XHJcbiAgICAgIGlmIChsb2FkUmVhc29uICYmIGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJyB8fCBsb2FkUmVhc29uID09PSAndXBkYXRlJykgdGhpcy5vcGVuQWRkb25QYWdlKCduZXdzJyk7XHJcbiAgICB9LFxyXG4gICAgb3BlblNlYXJjaCh3b3JkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgY3VzdG9tID0gc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2gsIHVybDtcclxuICAgICAgICBpZiAoY3VzdG9tKSB1cmwgPSAnaHR0cHM6Ly8nICsgY3VzdG9tWzBdICsgd29yZCArIGN1c3RvbVsxXTtcclxuICAgICAgICBlbHNlIHVybCA9ICdodHRwczovLycgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nICsgd29yZDtcclxuICAgICAgICB0aGlzLm9wZW4odXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2luc3RhbGw6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnY2hlY2s6c3RvcmFnZSc6ICdjaGVja1N0b3JhZ2VPblN0YXJ0JyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJzogJ2ltcG9ydFN0b3JhZ2UnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3M7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykge1xyXG4gICAgICAgIHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gc2V0dGluZ3MuaGlzdG9yeTtcclxuICAgICAgICBjb25zdCBtaXNjID0gc2V0dGluZ3MubWlzYztcclxuICAgICAgICBjb25zdCBub3RlVHlwZXMgPSAncGJtTm90ZSBjaGFuZ2VkTm90ZSBlcnJvck5vdGUgc3VjY2Vzc05vdGUgdmlwTm90ZScuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMubikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLm4gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLm47XHJcbiAgICAgICAgICBtaXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgICBtaXNjLm5vdGVvbmNsaWNrID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmFycm93dXApIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd3VwID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd3VwO1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93ZG93biA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3dkb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5kWzBdKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuZFswXSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuc2IpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuc2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmNtKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuY20gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmNtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc2Nbbm90ZVR5cGVdICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RlcGxhaW52aWV3ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXBsYWludmlldyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5tYXJrbWV0aG9kKSB7XHJcbiAgICAgICAgICBtaXNjLm1hcmttZXRob2QgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MudGJicG93ZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy50YmJwb3dlciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zYikge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2I7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc2IudGhlbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRhYnMudGhlbWVzID0gZGVmYXVsdFNldHRpbmdzLnNiLnRhYnMudGhlbWVzO1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGhlbWUgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGhlbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmF1dG9jcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmlmcmFtZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3MuYWRkb24uaWZyYW1lcyA9IGRlZmF1bHRTZXR0aW5ncy5hZGRvbi5pZnJhbWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeS1vbi1yZXN0b3JhdGlvbicsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJyxcclxuICAgICAgJ3VwZGF0ZWQ6bG9ncycsXHJcbiAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpzYXZlb3B0LXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnLFxyXG4gICAgICAnZW50cmllczpmb3VuZCcsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cmllcycsXHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncycsXHJcbiAgICAgICdpbXBvcnRlZDpoaXN0b3J5JyxcclxuICAgICAgJ2N0eDptJyxcclxuICAgICAgJ2N0eDpkJyxcclxuICAgICAgJ2N0eDpiJyxcclxuICAgICAgJ2N0eDotYicsXHJcbiAgICAgICdjdHg6bicsXHJcbiAgICAgICdjdHg6YycsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ2NoYW5nZWQ6dXJsJ1xyXG4gICAgXSxcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAnZW50cnk6Zm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6b3JkZXJlZC1tYXJrcydcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfU1RPUkV9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG5cclxuICBpbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMucmVtb3ZlKCdsb2dzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBzeW5jID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zeW5jID8gbG9jYWxTdG9yYWdlLnN5bmMgOiBfREVGQVVMVF9TVE9SQUdFLnN5bmM7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZXRfc3luYyhzeW5jKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldChmaWVsZCwgdmFsKSB7XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX3NldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuICAgIHJldHVybiB0aGlzWydfc2V0XycgKyBmaWVsZF0odmFsKTtcclxuICB9LFxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlKC4uLmFyZ3MpO1xyXG4gIH0sXHJcblxyXG4gIGlzRW1wdHkoYXJlYSA9ICdzeW5jJykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgKCFPYmplY3Qua2V5cyhzdG9yYWdlKS5sZW5ndGggJiYgc3RvcmFnZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ByaXZzYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90YmJwb3dlcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG5cclxuICBfc2V0X3N0b3JhZ2UoYXJlYSA9IG51bGwpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXRfc2V0dGluZ3MoYXJlYSkudGhlbigoKSA9PiB0aGlzLl9zZXRfaGlzdG9yeShhcmVhKSk7XHJcbiAgfSxcclxuICBfc2V0X3N5bmMoc3luYykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBzeW5jOiBzeW5jIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHN5bmM6IHN5bmMgfSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0QXJlYXMoc3luYykpO1xyXG4gIH0sXHJcbiAgX3NldF9zZXR0aW5ncyhhcmVhID0gdGhpcy5hcmVhX3NldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBzZXR0aW5nczogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncykgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfaGlzdG9yeShhcmVhID0gdGhpcy5hcmVhX2hpc3RvcnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgaGlzdG9yeTogX0NPUFkoX0RFRkFVTFRfU1RPUkFHRS5oaXN0b3J5KSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF92ZXJzaW9uKHZlcnNpb24pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pKTtcclxuICB9LFxyXG4gIF9zZXRfbG9nKGxvZykge1xyXG4gICAgaWYgKGxvZy5jbGVhcikge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IFtdIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldF9sb2dzKCkudGhlbihsb2dzID0+IHtcclxuICAgICAgbG9ncy5wdXNoKGxvZyk7XHJcbiAgICAgIGlmIChsb2dzLmxlbmd0aCA+IF9HTE9CQUxfU0VUVElOR1MuTUFYX0xPR19FTlRSSUVTKSBsb2dzLnNoaWZ0KCk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogbG9ncyB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9lbnRyeShlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgbGV0IGhpc3RvcnkgPSBzdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKGVudHJ5Lm5hbWUpKSByZXR1cm4gdGhpcy5fdXBkYXRlX2VudHJ5KGVudHJ5KTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLnNldCh7IGhpc3Rvcnk6IGhpc3RvcnkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfdXBkYXRlKGZpZWxkLCB1cGRhdGVyLCBhcmVhID0gdGhpc1snYXJlYV8nICsgZmllbGRdKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlW2ZpZWxkXSkge1xyXG4gICAgICAgICAgc3RvcmFnZVtmaWVsZF0gPSBfQ09QWShfREVGQVVMVF9TVE9SQUdFW2ZpZWxkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xyXG4gICAgICAgIHVwZGF0ZVtmaWVsZF0gPSB1cGRhdGVyLmNhbGwodGhpcywgc3RvcmFnZVtmaWVsZF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh1cGRhdGUpLnRoZW4oKCkgPT4gdXBkYXRlW2ZpZWxkXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfRVhURU5ELCBfR0VUX0FDVElWRV9UQUIsIF9NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuICBqc19pbmplY3Rpb25fZmFpbHVyZTogMzcsXHJcbiAgY3NzX2luamVjdGlvbl9mYWlsdXJlOiAzOCxcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjMyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy90bTQ4LnBuZ1wiOyIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7Y29uc29sZS5sb2coJ3Bhc3M6JywgcmVxLmV2KTtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=