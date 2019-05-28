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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsInJlZ2lzdGVyZWQiLCJzYW1lSGFzaGxlc3NVcmxzIiwicmVsb2FkZWQiLCJpbmplY3QiLCJsYXN0RnJhbWVJZCIsImlmcmFtZXMiLCJ3ZWJOYXZpZ2F0aW9uIiwiZ2V0QWxsRnJhbWVzIiwiZnJhbWVzIiwiZm9yRWFjaCIsImZyYW1lIiwiZnJhbWVJZCIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsImluamVjdENvbnRlbnRTY3JpcHQiLCJoaXN0b3J5IiwibWF0Y2hlcyIsImZpbmRNYXRjaGluZ0VudHJpZXMiLCJlbnRyaWVzIiwiZmlsdGVyTWF0Y2hlcyIsImxvY2tlZCIsImxvY2tlZEVudHJpZXMiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJydW5BdCIsImluc2VydENTUyIsImUiLCJ0b1N0cmluZyIsImhhc2hsZXNzUGFnZVVybCIsIm5vbkxvY2tlZEVudHJpZXMiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJsb2NrZWRFbnRyaWVzQ291bnQiLCJub25Mb2NrZWRFbnRyaWVzQ291bnQiLCJvbk5hbWluZ1JlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJ3aW5kb3dJbmZvIiwicHJpdiIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwidmlwTm90ZSIsIm9uRmFpbGVkSW1wb3J0IiwiZXJyb3IxIiwiZXJyb3IyIiwiZXJyTWVzc2FnZTEiLCJlcnJNZXNzYWdlMiIsIm9uSW1wb3J0RXJyb3IiLCJvbkltcG9ydFN1Y2Nlc3MiLCJmYWlsdXJlTm90ZSIsIm9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uIiwic3VjY2Vzc05vdGUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwicGFnZUFjdGlvbiIsImhpZGUiLCJzaG93Iiwic2V0UGFuZWwiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwiQXJyYXkiLCJpc0FycmF5IiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsInNldEFyZWFzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwidXBkYXRlRW50cnlPblBhZ2VBY3Rpb24iLCJzeW5jZWQiLCJyZWNlaXZlZENvbXBsZXRlRW50cnkiLCJmb3VuZCIsImhhc093blByb3BlcnR5IiwiZGVsZXRlRW50cmllcyIsInBvcCIsInVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbiIsImVudHJ5TmFtZSIsInJlc3RvcmVkTWFya3MiLCJsb3N0TWFya3MiLCJvbGRMb3N0TWFya3MiLCJyZXN0b3JlZE1hcmtzSURzIiwib2xkTG9zdE1hcmtzSURzIiwibWFyayIsInN5bmNFbnRyeSIsImFyZWFfMSIsImFyZWFfMiIsInRhZ0VudHJpZXMiLCJ0YWciLCJhZGRUYWdUb0VudHJ5IiwibG9jYWwiLCJyZW1vdmVUYWciLCJzdG9yZWRFbnRyeSIsInJ4IiwiUmVnRXhwIiwiYWRkVGFnIiwic2VhcmNoIiwidXBkYXRlUGFnZU5vdGVzIiwibm90ZXMiLCJwYWdlbm90ZXMiLCJyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlciIsInN0b3JhZ2UiLCJvbkNoYW5nZWQiLCJwcm94eSIsIm9uU3RvcmFnZUNoYW5nZWQiLCJjaGFuZ2VkSXRlbSIsInVybHMiLCJuZXdzIiwiaW5mbyIsImhlbHAiLCJjb250YWN0IiwibG9ncyIsInRhYkV2ZW50SGFuZGxlcnMiLCJvbkFjdGl2YXRlZCIsIm9uVXBkYXRlZCIsInRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMiLCJhZGRUYWJFdmVudEhhbmRsZXJzIiwiYmluZCIsInByb3BlcnRpZXMiLCJyZW1vdmVUYWJFdmVudEhhbmRsZXJzIiwiZXYiLCJzZWN1cml0eVdhcm5pbmciLCJzZWxmIiwib3BlbkFkZG9uUGFnZSIsIm9wZW5Jbml0UGFnZSIsIm9wZW5TZWFyY2giLCJ3b3JkIiwiY3VzdG9tIiwiZGVmYXVsdFNldHRpbmdzIiwiX0RFRkFVTFRfU1RPUkFHRSIsIm5vdGVUeXBlcyIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwiY20iLCJub3RlVHlwZSIsInRtdWlwb3MiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsInRiYnBvd2VyIiwidGhlbWVzIiwidXBkYXRlSGlzdG9yeSIsIm9yZGVyIiwiZml4SGlzdG9yeURhdGVzIiwibGFuZyIsImVuIiwiZGUiLCJsYXN0IiwibWVyZ2VIaXN0b3JpZXMiLCJuZXdIaXN0b3J5Iiwib2xkSGlzdG9yeSIsIm9sZEVudHJpZXMiLCJvbGROYW1lcyIsImFjY2VwdGVkRW50cmllcyIsInVybEV4aXN0cyIsIl9lbnRyaWVzIiwiYSIsInNldFN0b3JhZ2VPblVwZ3JhZGUiLCJpc0VtcHR5IiwiZW1wdHkiLCJjaGVja1N0b3JhZ2VPblN0YXJ0IiwiaW1wb3J0U3RvcmFnZSIsImltcG9ydGVkU3RvcmFnZSIsImltcG9ydFNldHRpbmdzIiwic3VjY2VzcyIsImltcG9ydEhpc3RvcnkiLCJzdWNjZXNzX3MiLCJzdWNjZXNzX2giLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wZW5FbnRyeURldGFpbFBhZ2UiLCJwb3B1cFVSTCIsImdldEN1cnJlbnQiLCJjdXJyZW50V2luZG93IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWluIiwiX1BPUlQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJPTkVPRkYiLCJDT05ORUNUSU9OIiwiX1NUT1JFIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsIl9zZXRfc3luYyIsIm1ldGgiLCJfdXBkYXRlIiwiY29uc3RydWN0b3IiLCJfZ2V0X21vZGUiLCJhcmVhX3NldHRpbmdzIiwiX2dldF9wcml2c2F2ZSIsIl9nZXRfbmFtaW5nIiwiX2dldF90YmJwb3dlciIsIl9nZXRfbWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwiX3NldF9zdG9yYWdlIiwiX3NldF9zZXR0aW5ncyIsIl9zZXRfaGlzdG9yeSIsImFyZWFfaGlzdG9yeSIsIl9zZXRfdmVyc2lvbiIsIl9zZXRfbG9nIiwiX2dldF9sb2dzIiwiTUFYX0xPR19FTlRSSUVTIiwic2hpZnQiLCJfc2V0X2VudHJ5IiwiX3VwZGF0ZV9lbnRyeSIsImNhbGwiLCJfQ09QWSIsIl9FWFRFTkQiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwieiIsInkiLCJzIiwiZG93bmxvYWQiLCJjb3B5IiwiYm1pY29uIiwib3ZlcndyaXRlIiwiY2hhbmdlZE5vdGUiLCJwcm9ncmVzc2JhciIsIm1ldGEiLCJ0YWdzIiwiYWN0aW9ucyIsImxpbmtzIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImpzX2luamVjdGlvbl9mYWlsdXJlIiwiY3NzX2luamVjdGlvbl9mYWlsdXJlIiwiZ2V0S2V5QnlWYWx1ZSIsInNyYyIsInRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImgiLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsInRvcGljcyIsImV2ZW50IiwiaGFuZGxlciIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0Iiwib2JqIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiZiIsInBvc3RNZXNzYWdlIiwicmVxIiwibGFzdEFyZyIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfcGFnZW5vdGVzIiwiciIsInNldFRpbWVvdXQiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFp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cEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUJKLGUiLCJmaWxlIjoiYmFja2dyb3VuZC9iYWNrZ3JvdW5kLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYWNrZ3JvdW5kL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9pY29ucy9vbjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjMyLnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjM2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjY0LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL3RtNDgucG5nJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vc3RvcmFnZSdcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2Vycm9yLWxvZ2dpbmcnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2luamVjdGlvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgX05PVElGSUNBVElPTlMgZnJvbSAnLi9tb2R1bGVzL25vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBfVEFCUyBmcm9tICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0IF9XSU5ET1dTIGZyb20gJy4vbW9kdWxlcy93aW5kb3dzJ1xyXG5pbXBvcnQgX1NJREVCQVJTIGZyb20gJy4vbW9kdWxlcy9zaWRlYmFycydcclxuaW1wb3J0IF9OQU1FUiBmcm9tICcuL21vZHVsZXMvbmFtZXInXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0LW1lbnUnXHJcbmltcG9ydCBfUEFHRUFDVElPTiBmcm9tICcuL21vZHVsZXMvcGFnZS1hY3Rpb24nXHJcbi8vaW1wb3J0IF9JREIgZnJvbSAnLi9tb2R1bGVzL2luZGV4ZWRkYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3ZlcnNpb24tbWFuYWdlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvc3RvcmUtbWFuYWdlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlT25JbXBvcnQnLFxyXG4gICAgICAnaW5pdGlhbGl6ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdtaWdyYXRlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ2NoZWNrZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICd0b2dnbGU6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6dGJicG93ZXItc2V0dGluZ3MnOiAnc2V0VEJCQWN0aW9uJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2ZTogdHJ1ZSxcclxuICB2ZXJzaW9uOiAnJyxcclxuICBsb2FkUmVhc29uOiAnJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IHRoaXMudmVyc2lvbiA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICAgIGlmICghdmVyc2lvbiB8fCB2ZXJzaW9uICE9PSBjdXJyZW50VmVyc2lvbikge1xyXG4gICAgICAgICAgY29uc3QgbG9hZFJlYXNvbiA9IHRoaXMubG9hZFJlYXNvbiA9IGRldGFpbHMucmVhc29uO1xyXG4gICAgICAgICAgY29uc3QgcHJldlZlcnNpb24gPSBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbiB8fCAnMic7XHJcbiAgICAgICAgICBpZiAobG9hZFJlYXNvbiAmJiAobG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScgfHwgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobG9hZFJlYXNvbiArICc6YXBwJywgcHJldlZlcnNpb24sIGxvYWRSZWFzb24pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbiA9PT0gY3VycmVudFZlcnNpb24pIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ3ZlcnNpb24nLCB0aGlzLnZlcnNpb24pO1xyXG5cclxuICAgIC8vX0lEQigpO1xyXG4gICAgX05PVElGSUNBVElPTlMoKTtcclxuICAgIF9UQUJTKCk7XHJcbiAgICBfTkFNRVIoKTtcclxuICAgIF9DVE0oKTtcclxuICAgIF9XSU5ET1dTKCk7XHJcbiAgICBfU0lERUJBUlMoKTtcclxuICAgIF9QQUdFQUNUSU9OKCk7XHJcblxyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFjdGl2YXRlKHRydWUpKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6YXBwJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvYWRSZWFzb24pKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGFjdGl2YXRlKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGFjdGl2YXRlO1xyXG4gICAgdGhpcy50b2dnbGVCcm93c2VyQWN0aW9uSWNvbihhY3RpdmUpO1xyXG4gICAgdGhpcy5zZXRUQkJBY3Rpb24oKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIGxldCBtb2RlID0gIXRoaXMuYWN0aXZlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZShtb2RlKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDphZGRvbicsIG1vZGUpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlT25JbXBvcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGVCcm93c2VyQWN0aW9uSWNvbihvbikge1xyXG4gICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEljb24oe1xyXG4gICAgICBwYXRoOiBvbiA/IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29uMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29uMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29uMzIucG5nJ1xyXG4gICAgICB9IDoge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb2ZmMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29mZjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vZmYzMi5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0VEJCQWN0aW9uKGFkZCkge1xyXG4gICAgaWYgKHR5cGVvZiBhZGQgPT09ICdib29sZWFuJykge1xyXG4gICAgICBpZiAoYWRkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndGJicG93ZXInKS50aGVuKGVuYWJsZWQgPT4ge1xyXG4gICAgICAgIGlmIChlbmFibGVkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFkZFRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBjb25zdCB0YmJIYW5kbGVyID0gdGhpcy50YmJIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YmJIYW5kbGVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZVRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAodGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnY29udGVudC90YmItbWVudS90YmItbWVudS5odG1sJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLnRiYkhhbmRsZXIpO1xyXG4gICAgICB0aGlzLnRiYkhhbmRsZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXRlbXM6IHtcclxuICAgICAgbTogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICB3OiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIGQ6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgYjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICAnLWInOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIG46IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgc2I6IHsgY29udGV4dHM6IFsnYWxsJywgJ3RhYiddIH0sXHJcbiAgICAgIGM6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IFtdLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBsZXQgaXRlbTtcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgaXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgaXRlbS5pZCA9IGk7XHJcbiAgICAgICAgaXRlbS50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjdHhfJyArIChpID09PSAnLWInID8gJ2RiJyA6IGkpKTtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSAoaW5mb3MsIHRhYikgPT4gdGhpcy5vbkNsaWNrKGluZm9zLCB0YWIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZShpZCkge1xyXG4gICAgICBpZiAoIXRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLmNyZWF0ZSh0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmUoaWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5zcGxpY2UodGhpcy5jcmVhdGVkLmluZGV4T2YoaWQpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUFsbCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5sZW5ndGgpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKG9uKSB7XHJcbiAgICAgIGlmIChvbikgdGhpcy51cGRhdGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUFsbCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlZDtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzaG9ydGN1dHMnKS50aGVuKHNob3J0Y3V0cyA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICBpZiAoc2hvcnRjdXRzW2ldWzJdKSB0aGlzLmNyZWF0ZShpKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrKGluZm9zLCB0YWIpIHtcclxuICAgICAgY29uc3QgaWQgPSBpbmZvcy5tZW51SXRlbUlkO1xyXG4gICAgICBpZiAoaWQgPT09ICd3JykgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIGluZm9zLnNlbGVjdGlvblRleHQpO1xyXG4gICAgICBlbHNlIGlmIChpZCA9PT0gJ3NiJykgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLm9wZW4oKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ2N0eDonICsgaWQsIG51bGwsIG51bGwsIHsgdGFiOiB0YWIuaWQgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlcnJvcic6ICdsb2cnLFxyXG4gICAgICAnd2FybmluZyc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICdlcnJvcjppbXBvcnQnOiAnbG9nJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZSc6ICdsb2cnLFxyXG4gICAgICAnY2xlYXI6bG9ncyc6ICdjbGVhcicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCc6ICdvblNjcmlwdEluamVjdGlvbkZhaWx1cmUnLFxyXG4gICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsb2coZXJyb3IsIHJlcG9ydCkge1xyXG4gICAgbGV0IGxvZywgbXNnO1xyXG4gICAgaWYgKGVycm9yLnRpbWUpIHtcclxuICAgICAgbG9nID0gW2Vycm9yLnRpbWUsIGVycm9yLm1lc3NhZ2UgKyAnIFsnICsgZXJyb3IubG9jYXRpb24gKyAnXSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nID0gWyhuZXcgRGF0ZSgpLmdldFRpbWUoKSksIF9MT0dfS0VZU1tlcnJvcl0gfHwgZXJyb3JdO1xyXG4gICAgICBpZiAocmVwb3J0ICYmIHR5cGVvZiByZXBvcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbG9nLnB1c2gocmVwb3J0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCBsb2cpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MgbG9nZ2VkOmVycm9yJywgbG9nKSk7XHJcbiAgfSxcclxuICBjbGVhcigpIHtcclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgeyBjbGVhcjogdHJ1ZSB9KS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzJykpO1xyXG4gIH0sXHJcbiAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKTtcclxuICB9LFxyXG4gIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUmVzdG9yYXRpb24ocmVwb3J0KSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJywgcmVwb3J0KTtcclxuICB9LFxyXG4gIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV91cmwnKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcGJtJyk7XHJcbiAgfSxcclxuICBvblNjcmlwdEluamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnanNfaW5qZWN0aW9uX2ZhaWx1cmUnKTtcclxuICB9LFxyXG4gIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdjaGFuZ2VkOnVybCc6ICdvblVSTENoYW5nZScsXHJcbiAgICAgICdjb21wbGV0ZWQ6dGFiJzogJ29uVGFiQ29tcGxldGVkJyxcclxuICAgICAgJ2NsaWNrZWQ6cGFnZS1hY3Rpb24nOiAnaGFuZGxlSW5qZWN0aW9ucycsXHJcbiAgICAgICdzYXZlOmVudHJ5Pyc6ICdvblNhdmVOZXdSZXF1ZXN0JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnb25VcGRhdGVSZXF1ZXN0JyxcclxuICAgICAgJ25hbWU6ZW50cnk/JzogJ29uTmFtaW5nUmVxdWVzdCcsXHJcbiAgICAgICdvcGVuZWQ6ZW50cnknOiAndGVtcFNhdmVFbnRyeU1ldGFEYXRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcXVldWVkRm9yVGFiQ29tcGxldGVkOiB7fSxcclxuICBpbmplY3RlZFNjcmlwdHM6IHt9LFxyXG4gIHJlY2VudGx5T3BlbmVkRW50cnk6IG51bGwsXHJcblxyXG4gIG9uVGFiQ29tcGxldGVkKHRhYklkKSB7XHJcbiAgICBpZiAodGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKSB7XHJcbiAgICAgIHRoaXMuYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSk7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF07XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25VUkxDaGFuZ2UodGFiSWQsIGNoYW5nZWQpIHtcclxuICAgIGlmIChjaGFuZ2VkLnN0YXR1cyAmJiBjaGFuZ2VkLnN0YXR1cyAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0gPSBjaGFuZ2VkLnVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIGNoYW5nZWQudXJsLCB0cnVlKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCkge1xyXG4gICAgY29uc3QgcmVnaXN0ZXJlZCA9IHRoaXMuaW5qZWN0ZWRTY3JpcHRzW3RhYklkXTtcclxuICAgIGNvbnN0IHNhbWVIYXNobGVzc1VybHMgPSByZWdpc3RlcmVkICYmIF9IQVNITEVTUyhyZWdpc3RlcmVkLnVybCkgPT09IF9IQVNITEVTUyhuZXdVcmwpO1xyXG4gICAgY29uc3QgcmVsb2FkZWQgPSByZWdpc3RlcmVkICYmICFub1JlbG9hZDtcclxuXHJcbiAgICBpZiAoIXJlZ2lzdGVyZWQgfHwgcmVsb2FkZWQpIHtcclxuICAgICAgdGhpcy5pbmplY3QodGFiSWQsIG5ld1VybCwgMCkudGhlbihsYXN0RnJhbWVJZCA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmFkZG9uLmlmcmFtZXMpIHtcclxuICAgICAgICAgICAgYnJvd3Nlci53ZWJOYXZpZ2F0aW9uLmdldEFsbEZyYW1lcyh7IHRhYklkIH0pLnRoZW4oZnJhbWVzID0+IHtcclxuICAgICAgICAgICAgICBmcmFtZXMuZm9yRWFjaChmcmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUuZnJhbWVJZCAhPT0gbGFzdEZyYW1lSWQpIHRoaXMuaW5qZWN0KHRhYklkLCBmcmFtZS51cmwsIGZyYW1lLmZyYW1lSWQpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzYW1lSGFzaGxlc3NVcmxzICYmIHJlZ2lzdGVyZWQuZW50cnkgJiYgcmVnaXN0ZXJlZC5lbnRyeS5oYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaGFzaDpjaGFuZ2VkJywgbmV3VXJsKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBpbmplY3QodGFiSWQsIHVybCwgZnJhbWVJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0Q29udGVudFNjcmlwdCh0YWJJZCwgdXJsLCBmcmFtZUlkKS50aGVuKCgpID0+IHtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwpO1xyXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmZpbHRlck1hdGNoZXMobWF0Y2hlcyk7XHJcblxyXG4gICAgICAgIGlmIChlbnRyaWVzKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJpZXM6Zm91bmQnLCB7XHJcbiAgICAgICAgICAgIGVudHJpZXMsXHJcbiAgICAgICAgICAgIHJlY2VudGx5T3BlbmVkRW50cnk6IHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSxcclxuICAgICAgICAgICAgbG9ja2VkOiAhIW1hdGNoZXMubG9ja2VkRW50cmllcy5sZW5ndGhcclxuICAgICAgICAgIH0sIHsgdGFiOiB0YWJJZCwgZnJhbWVJZCB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZnJhbWVJZDtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluamVjdENvbnRlbnRTY3JpcHQodGFiSWQsIHVybCwgZnJhbWVJZCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy5leGVjdXRlU2NyaXB0KHRhYklkLCB7XHJcbiAgICAgIGZpbGU6ICcuLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMnLFxyXG4gICAgICBmcmFtZUlkLFxyXG4gICAgICBydW5BdDogJ2RvY3VtZW50X2lkbGUnXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdID0geyB1cmwgfTtcclxuICAgICAgICB0aGlzLmluc2VydENTUyh0YWJJZCwgZnJhbWVJZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zdCBtc2cgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCFtc2cuaW5jbHVkZXMoJ01pc3NpbmcgaG9zdCBwZXJtaXNzaW9uIGZvciB0aGUgdGFiJykpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5zZXJ0Q1NTKHRhYklkLCBmcmFtZUlkKSB7XHJcbiAgICBicm93c2VyLnRhYnMuaW5zZXJ0Q1NTKHRhYklkLCB7XHJcbiAgICAgIGZpbGU6ICcuLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24uY3NzJyxcclxuICAgICAgZnJhbWVJZFxyXG4gICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW1zZy5pbmNsdWRlcygnTWlzc2luZyBob3N0IHBlcm1pc3Npb24gZm9yIHRoZSB0YWInKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGZpbmRNYXRjaGluZ0VudHJpZXMoaGlzdG9yeSwgdXJsKSB7XHJcbiAgICBjb25zdCBoYXNobGVzc1BhZ2VVcmwgPSBfSEFTSExFU1ModXJsKTtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gW107XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gW107XHJcbiAgICBsZXQgZW50cnksIHBhZ2VVcmwsIGVudHJ5VXJsO1xyXG5cclxuICAgIGZvciAobGV0IGUgaW4gZW50cmllcykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbZV07XHJcbiAgICAgIHBhZ2VVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gdXJsIDogaGFzaGxlc3NQYWdlVXJsO1xyXG4gICAgICBlbnRyeVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyBlbnRyeS51cmwgOiBfSEFTSExFU1MoZW50cnkudXJsKTtcclxuXHJcbiAgICAgIGlmIChwYWdlVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBsb2NrZWRFbnRyaWVzLCBub25Mb2NrZWRFbnRyaWVzIH07XHJcbiAgfSxcclxuXHJcbiAgZmlsdGVyTWF0Y2hlcyhtYXRjaGVzKSB7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5sb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IG1hdGNoZXMubm9uTG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXNDb3VudCA9IGxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllc0NvdW50ID0gbm9uTG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBsZXQgZW50cmllcztcclxuXHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50ICYmIG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnKTtcclxuICAgICAgZW50cmllcyA9IGxvY2tlZEVudHJpZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgZW50cmllcyA9IFtub25Mb2NrZWRFbnRyaWVzWzBdXTtcclxuICAgICAgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCA+IDEpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcycpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBlbnRyaWVzWzBdKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZCcsIGxvY2tlZEVudHJpZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVudHJpZXM7XHJcbiAgfSxcclxuXHJcbiAgb25OYW1pbmdSZXF1ZXN0KHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJpdiA9IHdpbmRvd0luZm8uaW5jb2duaXRvO1xyXG4gICAgICAgIGlmICghcHJpdikgc2VuZFJlc3BvbnNlKCFwcml2KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHNlbmRSZXNwb25zZShzYXZlSW5Qcml2KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblNhdmVOZXdSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblVwZGF0ZVJlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0ZW1wU2F2ZUVudHJ5TWV0YURhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gZGF0YTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2dyYW50ZWQ6c2F2ZS1lbnRyeSc6ICduYW1lJyxcclxuICAgICAgICAncmVuYW1lOmVudHJ5JzogJ3JlbmFtZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBuYW1lKGVudHJ5KSB7XHJcbiAgICAgIGlmIChlbnRyeS5uYW1lKSByZXR1cm4gdGhpcy5hZGp1c3ROYW1lKGVudHJ5Lm5hbWUsIGVudHJ5KTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4gdGhpcy5hZGp1c3ROYW1lKG51bGwsIGVudHJ5LCBuYW1pbmcpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICByZW5hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgICBuZXdOYW1lID0gbmV3TmFtZS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IHRoaXMuZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5ld05hbWUpO1xyXG4gICAgICAgIGlmIChjb3VudGVyKSBuZXdOYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuYW1lZDplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgYWRqdXN0TmFtZShuYW1lLCBlbnRyeSwgbWV0aG9kKSB7XHJcbiAgICAgIG5hbWUgPSBuYW1lID8gbmFtZSA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICd0aXRsZScgPyBlbnRyeS50aXRsZS50cmltKCkgPyBlbnRyeS50aXRsZS50cmltKCkgOiBlbnRyeS51cmwgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAnZGF0ZScgPyAobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpIDogJyc7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IHRoaXMuZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRlciAmJiBlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnNhdmUtZW50cnktZG91YmxlLWxvY2tlZCcsICdlcnJvcl9kb3VibGVfbG9ja2VkX25hbWUnLCBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGNvdW50ZXIpIG5hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgICBlbnRyeS5uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnbmFtZWQ6ZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5hbWUpIHtcclxuICAgICAgbGV0IGV4aXN0aW5nTmFtZXMgPSBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IGV4aXN0aW5nTmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgY291bnRlciA9IDAsXHJcbiAgICAgICAgICBjaGVja3BvaW50O1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIGNoZWNrcG9pbnQgPSBleGlzdGluZ05hbWVzW2xdO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSkgY291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgfSxcclxuICAgIGlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSB7XHJcbiAgICAgIGlmIChuYW1lID09PSBjaGVja3BvaW50KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBsID0gbmFtZS5sZW5ndGgsXHJcbiAgICAgICAgICBjaGVja3BvaW50X3N0YXJ0ID0gY2hlY2twb2ludC5zdWJzdHJpbmcoMCwgbCksXHJcbiAgICAgICAgICBjaGVja3BvaW50X2VuZDtcclxuXHJcbiAgICAgIGlmIChuYW1lICE9PSBjaGVja3BvaW50X3N0YXJ0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBjaGVja3BvaW50X2VuZCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKGwsIGNoZWNrcG9pbnQubGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICgvXlxccypcXChcXGQrXFwpJC8udGVzdChjaGVja3BvaW50X2VuZCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnb25TYXZlZEVudHJ5JyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnktZG91YmxlLWxvY2tlZCc6ICdvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnOiAnb25EZWxldGVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnb25TdWNjZXNzZnVsUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgICAnZmFpbGVkOmltcG9ydCc6ICdvbkZhaWxlZEltcG9ydCcsXHJcbiAgICAgICAgJ2Vycm9yOmltcG9ydCc6ICdvbkltcG9ydEVycm9yJyxcclxuICAgICAgICAnaW1wb3J0ZWQ6c3RvcmFnZSc6ICdvbkltcG9ydFN1Y2Nlc3MnLFxyXG4gICAgICAgICdlcnJvcic6ICdvbkVycm9yJyxcclxuICAgICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcyc6ICdvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCc6ICdvblNjcmlwdEluamVjdGlvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeShjb25kaXRpb24sIG1lc3NhZ2UsIHR5cGUpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZXh0bWFya2VyOiAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodHlwZSksXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2ljb25zL3RtNDgucG5nJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZWRFbnRyeSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlZF9lbnRyeScpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFBCTSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5wYm1Ob3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3BibScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3VybCcpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRJbXBvcnQoZXJyb3IxLCBlcnJvcjIpIHtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjEpO1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMiA9IGVycm9yMiA/ICdcXG5cXG4nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IyKSA6ICcnO1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X2ZhaWx1cmUnLCBlcnJNZXNzYWdlMSArIGVyck1lc3NhZ2UyKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0RXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF93YXJuaW5nJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRTdWNjZXNzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnN1Y2Nlc3NOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3IoZXJyb3IsIG5hbWUpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvciwgbmFtZSkpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZWxldGVFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNjcmlwdEluamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnanNfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnc2hvdydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YWIgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwYWdlLWFjdGlvbicsIHRhYi5pZCwgdGFiLnVybCk7XHJcbiAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLmhpZGUodGFiLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3codGFiSWQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uc2hvdyh0YWJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfR0VUX0FDVElWRV9UQUIsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdhY3RpdmF0ZWQ6dGFiJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdlbnRyeTpmb3VuZCc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOidzZW5kRW50cnknLFxyXG4gICAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJzogJ3NlbmRPcmRlcmVkTWFya3MnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczoge30sXHJcblxyXG4gICAgc2V0UGFuZWwodGFiSWQsIHVybCkge1xyXG4gICAgICB0aGlzLmlzT3BlbigpLnRoZW4ob3BlbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5zZXRQYW5lbCh7XHJcbiAgICAgICAgICAgIHBhbmVsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBjb250ZW50L3NpZGViYXIvc2lkZWJhci5odG1sIyR7dGFiSWR9XyR7dXJsfWApLFxyXG4gICAgICAgICAgICB0YWJJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnNpZGViYXJBY3Rpb24uaXNPcGVuKHt9KTtcclxuICAgIH0sXHJcbiAgICBzdG9yZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSBBcnJheS5pc0FycmF5KGVudHJ5KSA/ICFlbnRyeVswXS5oYXNoU2Vuc2l0aXZlIDogIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcblxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0YWIuaWQ7XHJcbiAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyh0YWIudXJsKSA6IHRhYi51cmw7XHJcblxyXG4gICAgICAgIGVudHJpZXNbaWRdID0gZW50cmllc1tpZF0gfHwgW107XHJcbiAgICAgICAgZW50cmllc1tpZF1bdXJsXSA9IGVudHJ5O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyhlbnRyeS51cmwpIDogZW50cnkudXJsO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgICAgZW50cmllc1tpZF1bdXJsXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyh0YWIudXJsKSA6IHRhYi51cmw7XHJcblxyXG4gICAgICAgIGlmICh0YWJVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kLWZvci10YWInLCBlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVFbnRyeShuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdXJsIDogX0hBU0hMRVNTKHVybCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2F2ZWRVcmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmIChzYXZlZFVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbaWRdW3NhdmVkVXJsXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGhhc2hTZW5zaXRpdmUgPyB0YWIudXJsIDogX0hBU0hMRVNTKHRhYi51cmwpO1xyXG4gICAgICAgIGlmICh0YWJVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZEVudHJ5KCkge1xyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzaGxlc3NVcmwgPSBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgY29uc3QgZW50cmllc0ZvclRoaXNUYWIgPSB0aGlzLmVudHJpZXNbdGFiLmlkXTtcclxuICAgICAgICBsZXQgZW50cnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChlbnRyaWVzRm9yVGhpc1RhYikge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzRm9yVGhpc1RhYlt0YWIudXJsXSB8fCBlbnRyaWVzRm9yVGhpc1RhYltoYXNobGVzc1VybF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE9yZGVyZWRNYXJrcyhtYXJrcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5Om9yZGVyZWQtbWFya3MnLCBtYXJrcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXInLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdzYXZlQWN0aXZhdGlvblN0YXRlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJzogJ3RvZ2dsZVN5bmMnLFxyXG5cclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJzogJ2NoYW5nZVN0eWxlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJzogJ2NoYW5nZUF1dG9Ob3RlU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZyc6ICdjaGFuZ2VCZ0NvbG9yJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJzogJ2NoYW5nZU1hcmtNZXRob2QnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnOiAndG9nZ2xlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJzogJ2NoYW5nZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnOiAndG9nZ2xlQ3RtU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJzogJ2NoYW5nZVNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnOiAndG9nZ2xlSGFzaE9wdCcsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJzogJ3RvZ2dsZVByaXZTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZyc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZyc6ICd0b2dnbGVOb3RlT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3RvZ2dsZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZyc6ICd0b2dnbGVOb3RpZmljYXRpb25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJzogJ3RvZ2dsZVRCQlBvd2VyU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJzogJ2NoYW5nZVNvcnRPcHQnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZyc6ICdjaGFuZ2VWaWV3T3B0JyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvY3Mtc2V0dGluZyc6ICd0b2dnbGVBdXRvY3NPcHQnLFxyXG4gICAgICAnY2hhbmdlOmlmcmFtZS1zZXR0aW5nJzogJ3RvZ2dsZUlGcmFtZU9wdCcsXHJcblxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInOiAncmVtb3ZlQ3VzdG9tTWFya2VyJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJzogJ2FkZEN1c3RvbU1hcmtlcicsXHJcblxyXG4gICAgICAnbmFtZWQ6ZW50cnknOiAnc2F2ZUVudHJ5JyxcclxuICAgICAgJ3JlbmFtZWQ6ZW50cnknOiAnc2F2ZU5ld05hbWUnLFxyXG4gICAgICAnZ3JhbnRlZDp1cGRhdGUtZW50cnknOiAndXBkYXRlRW50cnlPblBhZ2VBY3Rpb24nLFxyXG4gICAgICAnZGVsZXRlOmVudHJpZXMnOiAnZGVsZXRlRW50cmllcycsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICd1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY2xlYW46ZW50cmllcyc6ICdjbGVhbkVudHJpZXMnLFxyXG4gICAgICAnc3luYzplbnRyeSc6ICdzeW5jRW50cnknLFxyXG4gICAgICAndGFnOmVudHJpZXMnOiAndGFnRW50cmllcycsXHJcbiAgICAgICdyZW1vdmU6dGFnJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICdhZGQ6dGFnJzogJ2FkZFRhZycsXHJcblxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYic6ICdjaGFuZ2VTQlNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSc6ICdjaGFuZ2VUaGVtZVNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJzogJ3VwZGF0ZVBhZ2VOb3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZU9uQ2hhbmdlZFN5bmM6IGZhbHNlLFxyXG5cclxuICAvLyBBRERPTiBNRVRIT0RTXHJcbiAgc2F2ZUFjdGl2YXRpb25TdGF0ZShhY3RpdmUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmFjdGl2ZSA9IGFjdGl2ZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTWU5DIE1FVEhPRFNcclxuICB0b2dnbGVTeW5jKGZpZWxkLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIGZ1bmN0aW9uKHN5bmMpIHtcclxuICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgIHRoaXMuc2V0QXJlYXMoc3luYyk7XHJcbiAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgfSwgJ2xvY2FsJylcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBzeW5jID0+IHtcclxuICAgICAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICAgICAgfSwgJ3N5bmMnKVxyXG5cclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6dG9nZ2xlLXN5bmMnLCBmaWVsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU0VUVElOR1MgTUVUSE9EU1xyXG4gIHVwZGF0ZVNldHRpbmdzKHVwZGF0ZXIsIHNldHRpbmcsIGVycm9yKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgdXBkYXRlcilcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOicgKyBzZXR0aW5nICsgJy1zZXR0aW5ncycpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBpZiAoZXJyb3IpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xyXG4gIH0sXHJcbiAgYWRkQ3VzdG9tTWFya2VyKGtleSwgc3R5bGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gIHsgc3R5bGUgfTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IG1hcmtlci5zdHlsZS5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUF1dG9Ob3RlU2V0dGluZyhrZXksIGF1dG9ub3RlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5hdXRvbm90ZSA9IGF1dG9ub3RlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvbm90ZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3RvZ2dsZV9hdXRvbm90ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNYXJrTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPSBtZXRob2Q7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmstbWV0aG9kJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbWFya19tZXRob2QnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2hvcnRjdXRTZXR0aW5nKGtleSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzFdID0gc3RhdHVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX190b2dnbGVfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2hvcnRjdXRTZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMF0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU29ydE9wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzb3J0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVZpZXdPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS52aWV3ID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ZpZXcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ3VzdG9tU2VhcmNoKHZhbHVlcykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCA9IHZhbHVlczsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3VzdG9tLXNlYXJjaCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zZWFyY2gnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ291bnRQZXJQYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkucHAgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY291bnQtcGVyLXBhZ2UnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQ3RtU2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzJdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N0bScsXHJcbiAgICAgICdlcnJvcl9zYXZlX2N0bSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXRPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaW1tdXQgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2ltbXV0b3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRHJvcExvc3Nlc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdkcm9wbG9zc2Vzb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSGFzaE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdoYXNob3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVByaXZTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ByaXZzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfcHJpdidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VOYW1pbmdPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkubmFtaW5nID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICduYW1pbmcnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9uYW1pbmcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICBzd2l0Y2hRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RpZmljYXRpb25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNaXNjU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWlzYycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVUQkJQb3dlclNldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3RiYnBvd2VyJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUF1dG9jc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvY3MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvY3MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSUZyYW1lT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpZnJhbWVzJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfaWZyYW1lcydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTQlNldHRpbmdzKHRhYiwgdW5mb2xkZWQpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRhYnNbdGFiXS51bmZvbGRlZCA9IHVuZm9sZGVkOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcbiAgY2hhbmdlVGhlbWVTZXR0aW5ncyh0aGVtZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGhlbWUgPSB0aGVtZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBISVNUT1JZIE1FVEhPRFNcclxuICBjbGVhbkVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgaSA9IG5hbWVzLmxlbmd0aCwgbmFtZTtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzW25hbWVdKSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdC5sZW5ndGggPSAwO1xyXG4gICAgICAgIGVsc2UgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnbG9jYWwnKSB7IHRoaXMuZW1pdCgnY2xlYW5lZDplbnRyaWVzJyk7IH19KVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfY2xlYW5faGlzdG9yeScpKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmNsZWFuRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KTtcclxuICB9LFxyXG4gIHNhdmVFbnRyeShlbnRyeSkge1xyXG4gICAgZW50cnkubG9zdCA9IFtdO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3NhdmVkOmVudHJ5JywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnNhdmUtZW50cnknLCAnZXJyb3Jfc2F2ZV9lbnRyeScpKTtcclxuICB9LFxyXG4gIHNhdmVOZXdOYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tvbGROYW1lXSk7XHJcbiAgICAgIGVudHJ5Lm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmV3TmFtZV0gPSBlbnRyeTtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW5hbWUnLCBoaXN0b3J5LmVudHJpZXNbbmV3TmFtZV0sIG9sZE5hbWUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBhcmVhKSB7XHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBjb25zdCByZWNlaXZlZENvbXBsZXRlRW50cnkgPSAhIWVudHJ5LnVybDtcclxuICAgIGxldCBmb3VuZCA9IHRydWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGlmIChyZWNlaXZlZENvbXBsZXRlRW50cnkpIHtcclxuICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghaGlzdG9yeS5lbnRyaWVzW25hbWVdKSB7XHJcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWxldGUgZW50cnkuc3luY2VkO1xyXG4gICAgICAgICAgZm9yIChsZXQgZSBpbiBlbnRyeSkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuaGFzT3duUHJvcGVydHkoZSkpIHtcclxuICAgICAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV1bZV0gPSBlbnRyeVtlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKCFmb3VuZCkgeyB0aGlzLnVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBlbnRyeS5zeW5jZWQgPyAnbG9jYWwnIDogJ3N5bmMnKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLCBlbnRyeSkpO1xyXG4gIH0sXHJcbiAgZGVsZXRlRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXMgJiYgT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgdXJsID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLnVybDtcclxuICAgICAgICAgIGhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0uaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdkZWxldGVkOmVudHJ5JywgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnLCAnZXJyb3JfZGVsX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5kZWxldGVFbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyaWVzJykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblJlc3RvcmF0aW9uKGVudHJ5TmFtZSwgcmVzdG9yZWRNYXJrcywgbG9zdE1hcmtzLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPT09IHRydWUpIHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrcyA9IGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgICBjb25zdCByZXN0b3JlZE1hcmtzSURzID0gW107XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3NJRHMgPSBbXTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5tYXJrcyA9IHJlc3RvcmVkTWFya3M7XHJcblxyXG4gICAgICAgICAgcmVzdG9yZWRNYXJrcy5mb3JFYWNoKG1hcmsgPT4gcmVzdG9yZWRNYXJrc0lEcy5wdXNoKG1hcmsuaWQpKTtcclxuXHJcbiAgICAgICAgICBsZXQgbCA9IG9sZExvc3RNYXJrcy5sZW5ndGgsIGlkO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWQgPSBvbGRMb3N0TWFya3NbbF0uaWQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN0b3JlZE1hcmtzSURzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzSURzLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbG9zdE1hcmtzLmZvckVhY2gobWFyayA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb2xkTG9zdE1hcmtzSURzLmluY2x1ZGVzKG1hcmsuaWQpKSBvbGRMb3N0TWFya3MucHVzaChtYXJrKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgPSBvbGRMb3N0TWFya3M7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3luY0VudHJ5KG5hbWUsIHZhbCkge1xyXG4gICAgY29uc3QgYXJlYV8xID0gdmFsID8gJ2xvY2FsJyA6ICdzeW5jJztcclxuICAgIGNvbnN0IGFyZWFfMiA9IHZhbCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgbGV0IGVudHJ5O1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tuYW1lXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHZhbDtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhXzEpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWFfMilcclxuXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktc3luYycsIGVudHJ5KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c3luYy1lbnRyeScsIG5hbWUpKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0YWdFbnRyaWVzKG5hbWVzLCB0YWcpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICBuYW1lcy5zeW5jLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgJ3N5bmMnKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgICAgIG5hbWVzLmxvY2FsLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCAnbG9jYWwnKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3Qgc3RvcmVkRW50cnkgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcpO1xyXG4gICAgICBpZiAoc3RvcmVkRW50cnkudGFnKSB7XHJcbiAgICAgICAgc3RvcmVkRW50cnkudGFnID0gc3RvcmVkRW50cnkudGFnXHJcbiAgICAgICAgICAucmVwbGFjZShyeCwgJyAnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL15cXHN8XFxzJC8sICcnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcc3syLH0vLCAnICcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSk7XHJcbiAgfSxcclxuICBhZGRUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFRhZ1RvRW50cnkoaGlzdG9yeS5lbnRyaWVzW25hbWVdLCB0YWcpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpO1xyXG4gIH0sXHJcbiAgYWRkVGFnVG9FbnRyeShlbnRyeSwgdGFnKSB7XHJcbiAgICBpZiAoIXRhZykgZW50cnkudGFnID0gJyc7XHJcbiAgICBlbHNlIGlmICghZW50cnkudGFnKSBlbnRyeS50YWcgPSB0YWc7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJywgJ2cnKTtcclxuICAgICAgaWYgKGVudHJ5LnRhZy5zZWFyY2gocngpID09PSAtMSkge1xyXG4gICAgICAgIGVudHJ5LnRhZyArPSAnICcgKyB0YWc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBlbnRyeSk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUEFHRSBOT1RFIE1FVEhPRFNcclxuICB1cGRhdGVQYWdlTm90ZXModXJsLCBub3Rlcykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdwYWdlbm90ZXMnLCBwYWdlbm90ZXMgPT4ge1xyXG4gICAgICBwYWdlbm90ZXNbdXJsXSA9IG5vdGVzO1xyXG4gICAgICByZXR1cm4gcGFnZW5vdGVzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5vblN0b3JhZ2VDaGFuZ2VkKSk7XHJcbiAgfSxcclxuICBvblN0b3JhZ2VDaGFuZ2VkKGNoYW5nZWRJdGVtKSB7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uc2V0dGluZ3MpIHRoaXMuZW1pdCgndXBkYXRlZDpzZXR0aW5ncycpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLmhpc3RvcnkpIHRoaXMuZW1pdCgndXBkYXRlZDpoaXN0b3J5Jyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0ucGFnZW5vdGVzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6cGFnZW5vdGVzJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZVRhYkV2ZW50SGFuZGxlcnMnLFxyXG4gICAgICAgIC8vJ3N0YXJ0ZWQ6YXBwJzogJ29wZW5Jbml0UGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShzYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZSh0YmIpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UoYW0pJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdsb29rdXA6d29yZCc6ICdvcGVuU2VhcmNoJyxcclxuICAgICAgICAnb3BlbjplbnRyaWVzJzogJ29wZW4nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cmxzOiB7XHJcbiAgICAgIG5ld3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3cycsXHJcbiAgICAgIHNldHRpbmdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPXNldHRpbmdzJyxcclxuICAgICAgaGlzdG9yeTogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1oaXN0b3J5JyxcclxuICAgICAgaW5mbzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXcnLFxyXG4gICAgICBoZWxwOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW1hbnVhbCcsXHJcbiAgICAgIGNvbnRhY3Q6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9Y29udGFjdCcsXHJcbiAgICAgIGxvZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bG9ncycsXHJcbiAgICAgIGV4cG9ydDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1leHBvcnQnLFxyXG4gICAgICBzeW5jOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPXN5bmMnXHJcbiAgICB9LFxyXG4gICAgdGFiRXZlbnRIYW5kbGVyczoge1xyXG4gICAgICBvbkFjdGl2YXRlZDogbnVsbCxcclxuICAgICAgb25VcGRhdGVkOiBudWxsXHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy50b2dnbGVUYWJFdmVudEhhbmRsZXJzKG1vZGUpKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVGFiRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgaWYgKCF0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25BY3RpdmF0ZWQpIHtcclxuICAgICAgICBjb25zdCBvbkFjdGl2YXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCA9IHRoaXMub25BY3RpdmF0ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICBicm93c2VyLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIob25BY3RpdmF0ZWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQpIHtcclxuICAgICAgICBjb25zdCBvblVwZGF0ZWQgPSB0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25VcGRhdGVkID0gdGhpcy5vblVwZGF0ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICBicm93c2VyLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKG9uVXBkYXRlZCwgeyBwcm9wZXJ0aWVzOiBbJ3N0YXR1cyddIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFiRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgWydvbkFjdGl2YXRlZCcsICdvblVwZGF0ZWQnXS5mb3JFYWNoKGV2ID0+IHtcclxuICAgICAgICBpZiAodGhpcy50YWJFdmVudEhhbmRsZXJzW2V2XSkge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzW2V2XS5yZW1vdmVMaXN0ZW5lcih0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnRhYkV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUYWJFdmVudEhhbmRsZXJzKG9uKSB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRUYWJFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVUYWJFdmVudEhhbmRsZXJzKCk7XHJcbiAgICB9LFxyXG4gICAgb25BY3RpdmF0ZWQodGFiKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWN0aXZhdGVkOnRhYicsIHRhYi50YWJJZCwgKHRhYi51cmwgfHwgJycpKTtcclxuICAgIH0sXHJcbiAgICBvblVwZGF0ZWQodGFiSWQsIGNoYW5nZWQpIHtcclxuICAgICAgaWYgKGNoYW5nZWQudXJsKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnVybCcsIHRhYklkLCBjaGFuZ2VkKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChjaGFuZ2VkLnN0YXR1cyAmJiBjaGFuZ2VkLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY29tcGxldGVkOnRhYicsIHRhYklkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuKHVybHMsIG5hbWVzKSB7XHJcbiAgICAgIHVybHMgPSB0eXBlb2YgdXJscyA9PT0gJ3N0cmluZycgPyBbdXJsc10gOiB1cmxzO1xyXG4gICAgICBuYW1lcyA9IHR5cGVvZiBuYW1lcyA9PT0gJ3N0cmluZycgPyBbbmFtZXNdIDogbmFtZXM7XHJcbiAgICAgIGxldCBsID0gdXJscy5sZW5ndGgsXHJcbiAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSBmYWxzZSxcclxuICAgICAgICAgIHVybDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIChmdW5jdGlvbihzZWxmLCBsKSB7XHJcbiAgICAgICAgICB1cmwgPSB1cmxzW2xdO1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogdXJsc1tsXSB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghc2VjdXJpdHlXYXJuaW5nKSBzZWxmLmVtaXQoJ2ZhaWxlZDpvcGVuLXRhYicpO1xyXG4gICAgICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobmFtZXMpIHNlbGYuZW1pdCgnb3BlbmVkOmVudHJ5JywgeyB1cmw6IHVybCwgbmFtZTogbmFtZXNbbF0gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pKHRoaXMsIGwpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3BlbkFkZG9uUGFnZShpZCkge1xyXG4gICAgICB0aGlzLm9wZW4odGhpcy51cmxzW2lkXSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbkluaXRQYWdlKHZlcnNpb24sIGxvYWRSZWFzb24pIHtcclxuICAgICAgaWYgKGxvYWRSZWFzb24gJiYgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnIHx8IGxvYWRSZWFzb24gPT09ICd1cGRhdGUnKSB0aGlzLm9wZW5BZGRvblBhZ2UoJ25ld3MnKTtcclxuICAgIH0sXHJcbiAgICBvcGVuU2VhcmNoKHdvcmQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBjdXN0b20gPSBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCwgdXJsO1xyXG4gICAgICAgIGlmIChjdXN0b20pIHVybCA9ICdodHRwczovLycgKyBjdXN0b21bMF0gKyB3b3JkICsgY3VzdG9tWzFdO1xyXG4gICAgICAgIGVsc2UgdXJsID0gJ2h0dHBzOi8vJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycgKyB3b3JkO1xyXG4gICAgICAgIHRoaXMub3Blbih1cmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGU6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnaW5zdGFsbDphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdjaGVjazpzdG9yYWdlJzogJ2NoZWNrU3RvcmFnZU9uU3RhcnQnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnOiAnaW1wb3J0U3RvcmFnZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cGRhdGVTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncztcclxuXHJcbiAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBzZXR0aW5ncy5oaXN0b3J5O1xyXG4gICAgICAgIGNvbnN0IG1pc2MgPSBzZXR0aW5ncy5taXNjO1xyXG4gICAgICAgIGNvbnN0IG5vdGVUeXBlcyA9ICdwYm1Ob3RlIGNoYW5nZWROb3RlIGVycm9yTm90ZSBzdWNjZXNzTm90ZSB2aXBOb3RlJy5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5uKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMubiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMubjtcclxuICAgICAgICAgIG1pc2Mubm90ZWljb24gPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgICAgICAgIG1pc2Mubm90ZW9uY2xpY2sgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3Rlb25jbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuYXJyb3d1cCkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93dXAgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93dXA7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3dkb3duID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd2Rvd247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmRbMF0pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5kWzBdID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5kWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5zYikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5zYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuY20pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5jbSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuY207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcmtlcnMubS5zdHlsZSkge1xyXG4gICAgICAgICAgbGV0IHN0eWxlO1xyXG4gICAgICAgICAgZm9yIChsZXQgbSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gbWFya2Vyc1ttXTtcclxuICAgICAgICAgICAgbWFya2Vyc1ttXSA9IHsgc3R5bGUgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGlzdG9yeS5zb3J0ZWQpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc29ydGVkID0gZGVmYXVsdFNldHRpbmdzLmhpc3Rvcnkuc29ydGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWhpc3Rvcnkudmlldykge1xyXG4gICAgICAgICAgaGlzdG9yeS52aWV3ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkudmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LnNhdmVJblByaXYgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5zYXZlSW5Qcml2ID0gZGVmYXVsdFNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmltbXV0ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaW1tdXQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5Lmlnbm9yZUhhc2ggIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pZ25vcmVIYXNoID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmRyb3BMb3NzZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5kcm9wTG9zc2VzID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vdGVUeXBlcy5mb3JFYWNoKG5vdGVUeXBlID0+IHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgbWlzY1tub3RlVHlwZV0gIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICBtaXNjW25vdGVUeXBlXSA9IGRlZmF1bHRTZXR0aW5ncy5taXNjW25vdGVUeXBlXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIW1pc2MudG11aXBvcykge1xyXG4gICAgICAgICAgbWlzYy50bXVpcG9zID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudG11aXBvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLm5vdGV0cmFuc3AgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy5ub3RldHJhbnNwID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLm5vdGVwbGFpbnZpZXcgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy5ub3RlcGxhaW52aWV3ID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZXBsYWludmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtaXNjLm1hcmttZXRob2QpIHtcclxuICAgICAgICAgIG1pc2MubWFya21ldGhvZCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm1hcmttZXRob2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy50YmJwb3dlciAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLnRiYnBvd2VyID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNiKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zYjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5zYi50aGVtZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGFicy50aGVtZXMgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGFicy50aGVtZXM7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50aGVtZSA9IGRlZmF1bHRTZXR0aW5ncy5zYi50aGVtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWRkb24uYXV0b2NzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IGRlZmF1bHRTZXR0aW5ncy5hZGRvbi5hdXRvY3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWRkb24uaWZyYW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzID0gZGVmYXVsdFNldHRpbmdzLmFkZG9uLmlmcmFtZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJyk7XHJcbiAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxuICB9LFxyXG4gIHVwZGF0ZUhpc3RvcnkoaGlzdG9yeSkge1xyXG4gICAgZGVsZXRlIGhpc3Rvcnkub3JkZXI7XHJcblxyXG4gICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgIGVudHJ5O1xyXG5cclxuICAgIGlmICghbCkgcmV0dXJuIGhpc3Rvcnk7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBlbnRyeSA9IHRoaXMuZml4SGlzdG9yeURhdGVzKGVudHJpZXNbbmFtZXNbbF1dKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdHlwZW9mIGVudHJ5LnN5bmNlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGlzdG9yeTtcclxuICB9LFxyXG4gIGZpeEhpc3RvcnlEYXRlcyhlbnRyeSkge1xyXG4gICAgY29uc3QgbGFuZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkuZmlyc3QgIT09ICdudW1iZXInKSBlbnRyeS5maXJzdCA9IG5ldyBEYXRlKChlbnRyeS5maXJzdFtsYW5nXSB8fCBlbnRyeS5maXJzdC5lbiB8fCBlbnRyeS5maXJzdC5kZSB8fCBlbnRyeS5maXJzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5sYXN0ICE9PSAnbnVtYmVyJykgZW50cnkubGFzdCA9IG5ldyBEYXRlKChlbnRyeS5sYXN0W2xhbmddIHx8IGVudHJ5Lmxhc3QuZW4gfHwgZW50cnkubGFzdC5kZSB8fCBlbnRyeS5sYXN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuICBtZXJnZUhpc3RvcmllcyhuZXdIaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihvbGRIaXN0b3J5ID0+IHtcclxuXHJcbiAgICAgIGxldCBlbnRyaWVzID0gbmV3SGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgIG9sZEVudHJpZXMgPSBvbGRIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBvbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZEVudHJpZXMpLFxyXG4gICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzID0ge30sXHJcbiAgICAgICAgICBuYW1lLCBlbnRyeSwgdXJsLCB1cmxFeGlzdHMsIGU7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICB1cmxFeGlzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCFvbGROYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdXJsID0gZW50cnkudXJsO1xyXG5cclxuICAgICAgICAgIGZvciAoZSBpbiBvbGRFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRFbnRyaWVzW2VdLnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgdXJsRXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF1cmxFeGlzdHMpIHtcclxuICAgICAgICAgICAgZW50cnkuc3luY2VkID0gYXJlYSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgICAgICBhY2NlcHRlZEVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBfZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYSBpbiBhY2NlcHRlZEVudHJpZXMpIHtcclxuICAgICAgICAgIF9lbnRyaWVzW2FdID0gYWNjZXB0ZWRFbnRyaWVzW2FdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgfSwgYXJlYSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXRTdG9yYWdlT25VcGdyYWRlKHByZXZWZXJzaW9uID0gJzInLCBsb2FkUmVhc29uKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICBpZiAobG9hZFJlYXNvbiAhPT0gJ2luc3RhbGwnKSB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUnKTtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCAnc3luYycpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJykpXHJcbiAgICAvLy50aGVuKCgpID0+IF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pKVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnLCBwcmV2VmVyc2lvbik7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24nLCBlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjaGVja1N0b3JhZ2VPblN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnc3luYycpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgIH0pKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKTtcclxuICB9LFxyXG4gIGltcG9ydFN0b3JhZ2UoaW1wb3J0ZWRTdG9yYWdlLCBhcmVhKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSBpbXBvcnRlZFN0b3JhZ2Uuc2V0dGluZ3MsXHJcbiAgICAgICAgaGlzdG9yeSA9IGltcG9ydGVkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgIGlmICghaGlzdG9yeSAmJiAhc2V0dGluZ3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfZW1wdHknKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIWhpc3RvcnkpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICBlbHNlIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2Vzc19zID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3NfaCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3VjY2Vzc19zKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NfcyA9PT0gJ291dGRhdGVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpzZXR0aW5ncyBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpIHtcclxuICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCdvdXRkYXRlZCcpO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9LFxyXG4gIGltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVyZ2VIaXN0b3JpZXModGhpcy51cGRhdGVIaXN0b3J5KGhpc3RvcnksIHRydWUpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd2aWV3OmVudHJ5JzogJ29wZW5FbnRyeURldGFpbFBhZ2UnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3BlbkVudHJ5RGV0YWlsUGFnZShuYW1lKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwVVJMID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnY29udGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5odG1sJyk7XHJcblxyXG4gICAgICBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgpLnRoZW4oY3VycmVudFdpbmRvdyA9PiB7XHJcblxyXG4gICAgICAgIGJyb3dzZXIud2luZG93cy5jcmVhdGUoe1xyXG4gICAgICAgICAgdXJsOiBwb3B1cFVSTCArICcjJyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcclxuICAgICAgICAgIHR5cGU6ICdwYW5lbCcsXHJcbiAgICAgICAgICBoZWlnaHQ6IGN1cnJlbnRXaW5kb3cuaGVpZ2h0IC0gMjIsXHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5taW4oY3VycmVudFdpbmRvdy53aWR0aCwgOTgwKSxcclxuICAgICAgICAgIGluY29nbml0bzogY3VycmVudFdpbmRvdy5pbmNvZ25pdG9cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxubmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYmFja2dyb3VuZCcsXHJcbiAgdHlwZTogJ2JhY2tncm91bmQnLFxyXG4gIHBvc3Rwb25lQ29ubmVjdGlvbjogdHJ1ZSxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5LW9uLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnLFxyXG4gICAgICAndXBkYXRlZDpsb2dzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmJnLWNvbG9yLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3VzdG9tLXNlYXJjaC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNhdmVvcHQtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncycsXHJcbiAgICAgICdlbnRyaWVzOmZvdW5kJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyaWVzJyxcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknLFxyXG4gICAgICAnY3R4Om0nLFxyXG4gICAgICAnY3R4OmQnLFxyXG4gICAgICAnY3R4OmInLFxyXG4gICAgICAnY3R4Oi1iJyxcclxuICAgICAgJ2N0eDpuJyxcclxuICAgICAgJ2N0eDpjJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAnY2hhbmdlZDp1cmwnXHJcbiAgICBdLFxyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9TVE9SRX0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoJ2xvZ3MnKTtcclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgbGV0IHN5bmMgPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLnN5bmMgPyBsb2NhbFN0b3JhZ2Uuc3luYyA6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYztcclxuICAgICAgcmV0dXJuIHRoaXMuX3NldF9zeW5jKHN5bmMpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0KGZpZWxkLCB2YWwpIHtcclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfc2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG4gICAgcmV0dXJuIHRoaXNbJ19zZXRfJyArIGZpZWxkXSh2YWwpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGUoLi4uYXJncyk7XHJcbiAgfSxcclxuXHJcbiAgaXNFbXB0eShhcmVhID0gJ3N5bmMnKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAoIU9iamVjdC5rZXlzKHN0b3JhZ2UpLmxlbmd0aCAmJiBzdG9yYWdlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfcHJpdnNhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RiYnBvd2VyKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcblxyXG4gIF9zZXRfc3RvcmFnZShhcmVhID0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NldF9zZXR0aW5ncyhhcmVhKS50aGVuKCgpID0+IHRoaXMuX3NldF9oaXN0b3J5KGFyZWEpKTtcclxuICB9LFxyXG4gIF9zZXRfc3luYyhzeW5jKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHN5bmM6IHN5bmMgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgc3luYzogc3luYyB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXRBcmVhcyhzeW5jKSk7XHJcbiAgfSxcclxuICBfc2V0X3NldHRpbmdzKGFyZWEgPSB0aGlzLmFyZWFfc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IHNldHRpbmdzOiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9oaXN0b3J5KGFyZWEgPSB0aGlzLmFyZWFfaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBoaXN0b3J5OiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLmhpc3RvcnkpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3ZlcnNpb24odmVyc2lvbikge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSkpO1xyXG4gIH0sXHJcbiAgX3NldF9sb2cobG9nKSB7XHJcbiAgICBpZiAobG9nLmNsZWFyKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogW10gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0X2xvZ3MoKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICBsb2dzLnB1c2gobG9nKTtcclxuICAgICAgaWYgKGxvZ3MubGVuZ3RoID4gX0dMT0JBTF9TRVRUSU5HUy5NQVhfTE9HX0VOVFJJRVMpIGxvZ3Muc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBsb2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2VudHJ5KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgaGlzdG9yeSA9IHN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMoZW50cnkubmFtZSkpIHJldHVybiB0aGlzLl91cGRhdGVfZW50cnkoZW50cnkpO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uc2V0KHsgaGlzdG9yeTogaGlzdG9yeSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF91cGRhdGUoZmllbGQsIHVwZGF0ZXIsIGFyZWEgPSB0aGlzWydhcmVhXycgKyBmaWVsZF0pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2VbZmllbGRdKSB7XHJcbiAgICAgICAgICBzdG9yYWdlW2ZpZWxkXSA9IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0VbZmllbGRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgdXBkYXRlW2ZpZWxkXSA9IHVwZGF0ZXIuY2FsbCh0aGlzLCBzdG9yYWdlW2ZpZWxkXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHVwZGF0ZSkudGhlbigoKSA9PiB1cGRhdGVbZmllbGRdKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9FWFRFTkQsIF9HRVRfQUNUSVZFX1RBQiwgX01PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG4gIGpzX2luamVjdGlvbl9mYWlsdXJlOiAzNyxcclxuICBjc3NfaW5qZWN0aW9uX2ZhaWx1cmU6IDM4LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uNjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL3RtNDgucG5nXCI7IiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9