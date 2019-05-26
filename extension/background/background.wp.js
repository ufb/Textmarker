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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwibm9SZWxvYWQiLCJzZXR0aW5ncyIsImFkZG9uIiwiYXV0b2NzIiwiaGFuZGxlSW5qZWN0aW9ucyIsInJlZ2lzdGVyZWQiLCJzYW1lSGFzaGxlc3NVcmxzIiwicmVsb2FkZWQiLCJpbmplY3RDb250ZW50U2NyaXB0IiwiaGlzdG9yeSIsIm1hdGNoZXMiLCJmaW5kTWF0Y2hpbmdFbnRyaWVzIiwiZW50cmllcyIsImZpbHRlck1hdGNoZXMiLCJsb2NrZWQiLCJsb2NrZWRFbnRyaWVzIiwiZW50cnkiLCJoYXNoU2Vuc2l0aXZlIiwidGFicyIsImV4ZWN1dGVTY3JpcHQiLCJmaWxlIiwiYWxsRnJhbWVzIiwicnVuQXQiLCJpbnNlcnRDU1MiLCJlIiwidG9TdHJpbmciLCJoYXNobGVzc1BhZ2VVcmwiLCJub25Mb2NrZWRFbnRyaWVzIiwicGFnZVVybCIsImVudHJ5VXJsIiwibG9ja2VkRW50cmllc0NvdW50Iiwibm9uTG9ja2VkRW50cmllc0NvdW50Iiwib25OYW1pbmdSZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwid2luZG93SW5mbyIsInByaXYiLCJpbmNvZ25pdG8iLCJzYXZlSW5Qcml2Iiwib25TYXZlTmV3UmVxdWVzdCIsIm9uVXBkYXRlUmVxdWVzdCIsInRlbXBTYXZlRW50cnlNZXRhRGF0YSIsImRhdGEiLCJuYW1lIiwiYWRqdXN0TmFtZSIsIm5hbWluZyIsInJlbmFtZSIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiYXJlYSIsInN1YnN0cmluZyIsIl9HTE9CQUxfU0VUVElOR1MiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsImNvdW50ZXIiLCJnZXREb3VibGVOYW1lQ291bnQiLCJtZXRob2QiLCJ0cmltIiwiZmlyc3QiLCJ0b0xvY2FsZVN0cmluZyIsImV4aXN0aW5nTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwibCIsImNoZWNrcG9pbnQiLCJpc0RvdWJsZU5hbWUiLCJjaGVja3BvaW50X3N0YXJ0IiwiY2hlY2twb2ludF9lbmQiLCJ0ZXN0Iiwibm90aWZ5IiwiY29uZGl0aW9uIiwidHlwZSIsIm5vdGlmaWNhdGlvbnMiLCJpY29uVXJsIiwiZ2V0VVJMIiwib25TYXZlZEVudHJ5Iiwic2F2ZU5vdGUiLCJtaXNjIiwicGJtTm90ZSIsInZpcE5vdGUiLCJvbkZhaWxlZEltcG9ydCIsImVycm9yMSIsImVycm9yMiIsImVyck1lc3NhZ2UxIiwiZXJyTWVzc2FnZTIiLCJvbkltcG9ydEVycm9yIiwib25JbXBvcnRTdWNjZXNzIiwiZmFpbHVyZU5vdGUiLCJvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbiIsInN1Y2Nlc3NOb3RlIiwib25TYXZlRXJyb3IiLCJvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3IiLCJvbkRlbGV0ZUVycm9yIiwiZXJyb3JOb3RlIiwib25FcnJvciIsInBhZ2VBY3Rpb24iLCJoaWRlIiwic2hvdyIsInNldFBhbmVsIiwiaXNPcGVuIiwicGFuZWwiLCJzdG9yZUVudHJ5IiwiaWdub3JlSGFzaCIsInVwZGF0ZUVudHJ5IiwidGFiVXJsIiwicmVtb3ZlRW50cnkiLCJzYXZlZFVybCIsInNlbmRFbnRyeSIsImhhc2hsZXNzVXJsIiwiZW50cmllc0ZvclRoaXNUYWIiLCJzZW5kT3JkZXJlZE1hcmtzIiwibWFya3MiLCJ1cGRhdGVPbkNoYW5nZWRTeW5jIiwic2F2ZUFjdGl2YXRpb25TdGF0ZSIsInRvZ2dsZVN5bmMiLCJmaWVsZCIsInZhbCIsInN5bmMiLCJzZXRBcmVhcyIsInVwZGF0ZVNldHRpbmdzIiwidXBkYXRlciIsInNldHRpbmciLCJhZGRDdXN0b21NYXJrZXIiLCJrZXkiLCJzdHlsZSIsIm1hcmtlcnMiLCJyZW1vdmVDdXN0b21NYXJrZXIiLCJjaGFuZ2VTdHlsZSIsImNoYW5nZUJnQ29sb3IiLCJjb2xvciIsIm1hcmtlciIsInNwbGl0IiwicmVwbGFjZSIsImNoYW5nZUF1dG9Ob3RlU2V0dGluZyIsImF1dG9ub3RlIiwiY2hhbmdlTWFya01ldGhvZCIsIm1hcmttZXRob2QiLCJ0b2dnbGVTaG9ydGN1dFNldHRpbmciLCJjaGFuZ2VTaG9ydGN1dFNldHRpbmciLCJ2YWx1ZSIsImNoYW5nZVNvcnRPcHQiLCJzb3J0ZWQiLCJjaGFuZ2VWaWV3T3B0IiwidmlldyIsImNoYW5nZUN1c3RvbVNlYXJjaCIsInZhbHVlcyIsImN1c3RvbVNlYXJjaCIsImNoYW5nZUNvdW50UGVyUGFnZSIsInBwIiwidG9nZ2xlQ3RtU2V0dGluZyIsImNoYW5nZVNhdmVPcHQiLCJhdXRvc2F2ZSIsInRvZ2dsZUltbXV0T3B0IiwiaW1tdXQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwiZHJvcExvc3NlcyIsInRvZ2dsZUhhc2hPcHQiLCJ0b2dnbGVQcml2U2F2ZU9wdCIsImNoYW5nZU5hbWluZ09wdCIsInRvZ2dsZU5vdGVPcHQiLCJ0b2dnbGVRdWlja2J1dHRvbk9wdCIsInByb3AiLCJzd2l0Y2hRdWlja2J1dHRvbk9wdCIsInRvZ2dsZU5vdGlmaWNhdGlvbk9wdCIsImNoYW5nZU1pc2NTZXR0aW5nIiwidG9nZ2xlVEJCUG93ZXJTZXR0aW5nIiwidG9nZ2xlQXV0b2NzT3B0IiwiY2hhbmdlU0JTZXR0aW5ncyIsInVuZm9sZGVkIiwiY2hhbmdlVGhlbWVTZXR0aW5ncyIsInRoZW1lIiwiY2xlYW5FbnRyaWVzIiwibmFtZXMiLCJuYW1lc19sb2NhbCIsImxvc3QiLCJzYXZlRW50cnkiLCJzYXZlTmV3TmFtZSIsInVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uIiwic3luY2VkIiwicmVjZWl2ZWRDb21wbGV0ZUVudHJ5IiwiZm91bmQiLCJoYXNPd25Qcm9wZXJ0eSIsImRlbGV0ZUVudHJpZXMiLCJwb3AiLCJ1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24iLCJlbnRyeU5hbWUiLCJyZXN0b3JlZE1hcmtzIiwibG9zdE1hcmtzIiwib2xkTG9zdE1hcmtzIiwicmVzdG9yZWRNYXJrc0lEcyIsIm9sZExvc3RNYXJrc0lEcyIsImZvckVhY2giLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInBhZ2Vub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwidGFiRXZlbnRIYW5kbGVycyIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwidG9nZ2xlVGFiRXZlbnRIYW5kbGVycyIsImFkZFRhYkV2ZW50SGFuZGxlcnMiLCJiaW5kIiwicHJvcGVydGllcyIsInJlbW92ZVRhYkV2ZW50SGFuZGxlcnMiLCJldiIsInNlY3VyaXR5V2FybmluZyIsInNlbGYiLCJvcGVuQWRkb25QYWdlIiwib3BlbkluaXRQYWdlIiwib3BlblNlYXJjaCIsIndvcmQiLCJjdXN0b20iLCJkZWZhdWx0U2V0dGluZ3MiLCJfREVGQVVMVF9TVE9SQUdFIiwibm90ZVR5cGVzIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsIm5vdGVUeXBlIiwidG11aXBvcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3IiwidGJicG93ZXIiLCJ0aGVtZXMiLCJ1cGRhdGVIaXN0b3J5Iiwib3JkZXIiLCJmaXhIaXN0b3J5RGF0ZXMiLCJsYW5nIiwiZW4iLCJkZSIsImxhc3QiLCJtZXJnZUhpc3RvcmllcyIsIm5ld0hpc3RvcnkiLCJvbGRIaXN0b3J5Iiwib2xkRW50cmllcyIsIm9sZE5hbWVzIiwiYWNjZXB0ZWRFbnRyaWVzIiwidXJsRXhpc3RzIiwiX2VudHJpZXMiLCJhIiwic2V0U3RvcmFnZU9uVXBncmFkZSIsImlzRW1wdHkiLCJlbXB0eSIsImNoZWNrU3RvcmFnZU9uU3RhcnQiLCJpbXBvcnRTdG9yYWdlIiwiaW1wb3J0ZWRTdG9yYWdlIiwiaW1wb3J0U2V0dGluZ3MiLCJzdWNjZXNzIiwiaW1wb3J0SGlzdG9yeSIsInN1Y2Nlc3NfcyIsInN1Y2Nlc3NfaCIsIlByb21pc2UiLCJyZXNvbHZlIiwib3BlbkVudHJ5RGV0YWlsUGFnZSIsInBvcHVwVVJMIiwiZ2V0Q3VycmVudCIsImN1cnJlbnRXaW5kb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJfUE9SVCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsIk9ORU9GRiIsIkNPTk5FQ1RJT04iLCJfU1RPUkUiLCJpbml0IiwibG9jYWxTdG9yYWdlIiwiX3NldF9zeW5jIiwibWV0aCIsIl91cGRhdGUiLCJjb25zdHJ1Y3RvciIsIl9nZXRfbW9kZSIsImFyZWFfc2V0dGluZ3MiLCJfZ2V0X3ByaXZzYXZlIiwiX2dldF9uYW1pbmciLCJfZ2V0X3RiYnBvd2VyIiwiX2dldF9tYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJfc2V0X3N0b3JhZ2UiLCJfc2V0X3NldHRpbmdzIiwiX3NldF9oaXN0b3J5IiwiYXJlYV9oaXN0b3J5IiwiX3NldF92ZXJzaW9uIiwiX3NldF9sb2ciLCJfZ2V0X2xvZ3MiLCJNQVhfTE9HX0VOVFJJRVMiLCJzaGlmdCIsIl9zZXRfZW50cnkiLCJfdXBkYXRlX2VudHJ5IiwiY2FsbCIsIl9DT1BZIiwiX0VYVEVORCIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJ6IiwieSIsInMiLCJkb3dubG9hZCIsImNvcHkiLCJibWljb24iLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwibWV0YSIsInRhZ3MiLCJhY3Rpb25zIiwibGlua3MiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwianNfaW5qZWN0aW9uX2ZhaWx1cmUiLCJjc3NfaW5qZWN0aW9uX2ZhaWx1cmUiLCJnZXRLZXlCeVZhbHVlIiwic3JjIiwidGFyZ2V0IiwiQXJyYXkiLCJpc0FycmF5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiaCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9waWNzIiwiZXZlbnQiLCJoYW5kbGVyIiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvYmoiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJmIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9wYWdlbm90ZXMiLCJyIiwic2V0VGltZW91dCIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtB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QUFzQm5TLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBa1ksWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM5WSxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT0ksT0FBTyxDQUFDcVQsT0FBUixDQUFnQjdGLElBQWhCLENBQXFCak4sR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFraEIsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUM5aEIsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPOFksWUFBWSxDQUFDOVksT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUJKLGUiLCJmaWxlIjoiYmFja2dyb3VuZC9iYWNrZ3JvdW5kLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYWNrZ3JvdW5kL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9pY29ucy9vbjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjMyLnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjM2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjY0LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL3RtNDgucG5nJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vc3RvcmFnZSdcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2Vycm9yLWxvZ2dpbmcnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2luamVjdGlvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgX05PVElGSUNBVElPTlMgZnJvbSAnLi9tb2R1bGVzL25vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBfVEFCUyBmcm9tICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0IF9XSU5ET1dTIGZyb20gJy4vbW9kdWxlcy93aW5kb3dzJ1xyXG5pbXBvcnQgX1NJREVCQVJTIGZyb20gJy4vbW9kdWxlcy9zaWRlYmFycydcclxuaW1wb3J0IF9OQU1FUiBmcm9tICcuL21vZHVsZXMvbmFtZXInXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0LW1lbnUnXHJcbmltcG9ydCBfUEFHRUFDVElPTiBmcm9tICcuL21vZHVsZXMvcGFnZS1hY3Rpb24nXHJcbi8vaW1wb3J0IF9JREIgZnJvbSAnLi9tb2R1bGVzL2luZGV4ZWRkYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3ZlcnNpb24tbWFuYWdlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvc3RvcmUtbWFuYWdlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlT25JbXBvcnQnLFxyXG4gICAgICAnaW5pdGlhbGl6ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdtaWdyYXRlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ2NoZWNrZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICd0b2dnbGU6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6dGJicG93ZXItc2V0dGluZ3MnOiAnc2V0VEJCQWN0aW9uJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2ZTogdHJ1ZSxcclxuICB2ZXJzaW9uOiAnJyxcclxuICBsb2FkUmVhc29uOiAnJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IHRoaXMudmVyc2lvbiA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICAgIGlmICghdmVyc2lvbiB8fCB2ZXJzaW9uICE9PSBjdXJyZW50VmVyc2lvbikge1xyXG4gICAgICAgICAgY29uc3QgbG9hZFJlYXNvbiA9IHRoaXMubG9hZFJlYXNvbiA9IGRldGFpbHMucmVhc29uO1xyXG4gICAgICAgICAgY29uc3QgcHJldlZlcnNpb24gPSBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbiB8fCAnMic7XHJcbiAgICAgICAgICBpZiAobG9hZFJlYXNvbiAmJiAobG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScgfHwgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobG9hZFJlYXNvbiArICc6YXBwJywgcHJldlZlcnNpb24sIGxvYWRSZWFzb24pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbiA9PT0gY3VycmVudFZlcnNpb24pIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ3ZlcnNpb24nLCB0aGlzLnZlcnNpb24pO1xyXG5cclxuICAgIC8vX0lEQigpO1xyXG4gICAgX05PVElGSUNBVElPTlMoKTtcclxuICAgIF9UQUJTKCk7XHJcbiAgICBfTkFNRVIoKTtcclxuICAgIF9DVE0oKTtcclxuICAgIF9XSU5ET1dTKCk7XHJcbiAgICBfU0lERUJBUlMoKTtcclxuICAgIF9QQUdFQUNUSU9OKCk7XHJcblxyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmFjdGl2YXRlKHRydWUpKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6YXBwJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvYWRSZWFzb24pKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGFjdGl2YXRlKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGFjdGl2YXRlO1xyXG4gICAgdGhpcy50b2dnbGVCcm93c2VyQWN0aW9uSWNvbihhY3RpdmUpO1xyXG4gICAgdGhpcy5zZXRUQkJBY3Rpb24oKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIGxldCBtb2RlID0gIXRoaXMuYWN0aXZlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZShtb2RlKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDphZGRvbicsIG1vZGUpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlT25JbXBvcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGVCcm93c2VyQWN0aW9uSWNvbihvbikge1xyXG4gICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEljb24oe1xyXG4gICAgICBwYXRoOiBvbiA/IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29uMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29uMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29uMzIucG5nJ1xyXG4gICAgICB9IDoge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb2ZmMTYucG5nJyxcclxuICAgICAgICAxODogJy4uL2ljb25zL29mZjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vZmYzMi5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0VEJCQWN0aW9uKGFkZCkge1xyXG4gICAgaWYgKHR5cGVvZiBhZGQgPT09ICdib29sZWFuJykge1xyXG4gICAgICBpZiAoYWRkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndGJicG93ZXInKS50aGVuKGVuYWJsZWQgPT4ge1xyXG4gICAgICAgIGlmIChlbmFibGVkKSB0aGlzLmFkZFRCQkhhbmRsZXIoKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFkZFRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBjb25zdCB0YmJIYW5kbGVyID0gdGhpcy50YmJIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YmJIYW5kbGVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZVRCQkhhbmRsZXIoKSB7XHJcbiAgICBpZiAodGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7IHBvcHVwOiAnY29udGVudC90YmItbWVudS90YmItbWVudS5odG1sJyB9KTtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLnRiYkhhbmRsZXIpO1xyXG4gICAgICB0aGlzLnRiYkhhbmRsZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXRlbXM6IHtcclxuICAgICAgbTogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICB3OiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIGQ6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgYjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICAnLWInOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIG46IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgc2I6IHsgY29udGV4dHM6IFsnYWxsJywgJ3RhYiddIH0sXHJcbiAgICAgIGM6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IFtdLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBsZXQgaXRlbTtcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgaXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgaXRlbS5pZCA9IGk7XHJcbiAgICAgICAgaXRlbS50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjdHhfJyArIChpID09PSAnLWInID8gJ2RiJyA6IGkpKTtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSAoaW5mb3MsIHRhYikgPT4gdGhpcy5vbkNsaWNrKGluZm9zLCB0YWIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZShpZCkge1xyXG4gICAgICBpZiAoIXRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLmNyZWF0ZSh0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmUoaWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5zcGxpY2UodGhpcy5jcmVhdGVkLmluZGV4T2YoaWQpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUFsbCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5sZW5ndGgpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKG9uKSB7XHJcbiAgICAgIGlmIChvbikgdGhpcy51cGRhdGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUFsbCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlZDtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzaG9ydGN1dHMnKS50aGVuKHNob3J0Y3V0cyA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICBpZiAoc2hvcnRjdXRzW2ldWzJdKSB0aGlzLmNyZWF0ZShpKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrKGluZm9zLCB0YWIpIHtcclxuICAgICAgY29uc3QgaWQgPSBpbmZvcy5tZW51SXRlbUlkO1xyXG4gICAgICBpZiAoaWQgPT09ICd3JykgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIGluZm9zLnNlbGVjdGlvblRleHQpO1xyXG4gICAgICBlbHNlIGlmIChpZCA9PT0gJ3NiJykgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLm9wZW4oKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ2N0eDonICsgaWQsIG51bGwsIG51bGwsIHsgdGFiOiB0YWIuaWQgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlcnJvcic6ICdsb2cnLFxyXG4gICAgICAnd2FybmluZyc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cnknOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICdlcnJvcjppbXBvcnQnOiAnbG9nJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZSc6ICdsb2cnLFxyXG4gICAgICAnY2xlYXI6bG9ncyc6ICdjbGVhcicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCc6ICdvblNjcmlwdEluamVjdGlvbkZhaWx1cmUnLFxyXG4gICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsb2coZXJyb3IsIHJlcG9ydCkge1xyXG4gICAgbGV0IGxvZywgbXNnO1xyXG4gICAgaWYgKGVycm9yLnRpbWUpIHtcclxuICAgICAgbG9nID0gW2Vycm9yLnRpbWUsIGVycm9yLm1lc3NhZ2UgKyAnIFsnICsgZXJyb3IubG9jYXRpb24gKyAnXSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nID0gWyhuZXcgRGF0ZSgpLmdldFRpbWUoKSksIF9MT0dfS0VZU1tlcnJvcl0gfHwgZXJyb3JdO1xyXG4gICAgICBpZiAocmVwb3J0ICYmIHR5cGVvZiByZXBvcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbG9nLnB1c2gocmVwb3J0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCBsb2cpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MgbG9nZ2VkOmVycm9yJywgbG9nKSk7XHJcbiAgfSxcclxuICBjbGVhcigpIHtcclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgeyBjbGVhcjogdHJ1ZSB9KS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzJykpO1xyXG4gIH0sXHJcbiAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKTtcclxuICB9LFxyXG4gIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUmVzdG9yYXRpb24ocmVwb3J0KSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJywgcmVwb3J0KTtcclxuICB9LFxyXG4gIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV91cmwnKTtcclxuICB9LFxyXG4gIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcGJtJyk7XHJcbiAgfSxcclxuICBvblNjcmlwdEluamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnanNfaW5qZWN0aW9uX2ZhaWx1cmUnKTtcclxuICB9LFxyXG4gIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdjaGFuZ2VkOnVybCc6ICdvblVSTENoYW5nZScsXHJcbiAgICAgICdjb21wbGV0ZWQ6dGFiJzogJ29uVGFiQ29tcGxldGVkJyxcclxuICAgICAgJ2NsaWNrZWQ6cGFnZS1hY3Rpb24nOiAnaGFuZGxlSW5qZWN0aW9ucycsXHJcbiAgICAgICdzYXZlOmVudHJ5Pyc6ICdvblNhdmVOZXdSZXF1ZXN0JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnb25VcGRhdGVSZXF1ZXN0JyxcclxuICAgICAgJ25hbWU6ZW50cnk/JzogJ29uTmFtaW5nUmVxdWVzdCcsXHJcbiAgICAgICdvcGVuZWQ6ZW50cnknOiAndGVtcFNhdmVFbnRyeU1ldGFEYXRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcXVldWVkRm9yVGFiQ29tcGxldGVkOiB7fSxcclxuICBpbmplY3RlZFNjcmlwdHM6IHt9LFxyXG4gIHJlY2VudGx5T3BlbmVkRW50cnk6IG51bGwsXHJcblxyXG4gIG9uVGFiQ29tcGxldGVkKHRhYklkKSB7XHJcbiAgICBpZiAodGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKSB7XHJcbiAgICAgIHRoaXMuYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSk7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF07XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25VUkxDaGFuZ2UodGFiSWQsIGNoYW5nZWQpIHtcclxuICAgIGlmIChjaGFuZ2VkLnN0YXR1cyAmJiBjaGFuZ2VkLnN0YXR1cyAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0gPSBjaGFuZ2VkLnVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIGNoYW5nZWQudXJsLCB0cnVlKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwsIG5vUmVsb2FkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsLCBub1JlbG9hZCkge1xyXG4gICAgY29uc3QgcmVnaXN0ZXJlZCA9IHRoaXMuaW5qZWN0ZWRTY3JpcHRzW3RhYklkXTtcclxuICAgIGNvbnN0IHNhbWVIYXNobGVzc1VybHMgPSByZWdpc3RlcmVkICYmIF9IQVNITEVTUyhyZWdpc3RlcmVkLnVybCkgPT09IF9IQVNITEVTUyhuZXdVcmwpO1xyXG4gICAgY29uc3QgcmVsb2FkZWQgPSByZWdpc3RlcmVkICYmICFub1JlbG9hZDtcclxuXHJcbiAgICBpZiAoIXJlZ2lzdGVyZWQgfHwgcmVsb2FkZWQpIHtcclxuXHJcbiAgICAgIHRoaXMuaW5qZWN0Q29udGVudFNjcmlwdCh0YWJJZCwgbmV3VXJsKS50aGVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmZpbmRNYXRjaGluZ0VudHJpZXMoaGlzdG9yeSwgbmV3VXJsKTtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmZpbHRlck1hdGNoZXMobWF0Y2hlcyk7XHJcblxyXG4gICAgICAgICAgaWYgKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdlbnRyaWVzOmZvdW5kJywge1xyXG4gICAgICAgICAgICAgIGVudHJpZXMsXHJcbiAgICAgICAgICAgICAgcmVjZW50bHlPcGVuZWRFbnRyeTogdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5LFxyXG4gICAgICAgICAgICAgIGxvY2tlZDogISFtYXRjaGVzLmxvY2tlZEVudHJpZXMubGVuZ3RoXHJcbiAgICAgICAgICAgIH0sIHsgdGFiOiB0YWJJZCB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2FtZUhhc2hsZXNzVXJscyAmJiByZWdpc3RlcmVkLmVudHJ5ICYmIHJlZ2lzdGVyZWQuZW50cnkuaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2hhc2g6Y2hhbmdlZCcsIG5ld1VybCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0Q29udGVudFNjcmlwdCh0YWJJZCwgdXJsKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcycsXHJcbiAgICAgIGFsbEZyYW1lczogdHJ1ZSxcclxuICAgICAgcnVuQXQ6ICdkb2N1bWVudF9pZGxlJ1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5qZWN0ZWRTY3JpcHRzW3RhYklkXSA9IHsgdXJsIH07XHJcbiAgICAgICAgdGhpcy5pbnNlcnRDU1ModGFiSWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluc2VydENTUyh0YWJJZCkge1xyXG4gICAgYnJvd3Nlci50YWJzLmluc2VydENTUyh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLmNzcycsXHJcbiAgICAgIGFsbEZyYW1lczogdHJ1ZVxyXG4gICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW1zZy5pbmNsdWRlcygnTWlzc2luZyBob3N0IHBlcm1pc3Npb24gZm9yIHRoZSB0YWInKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGZpbmRNYXRjaGluZ0VudHJpZXMoaGlzdG9yeSwgdXJsKSB7XHJcbiAgICBjb25zdCBoYXNobGVzc1BhZ2VVcmwgPSBfSEFTSExFU1ModXJsKTtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gW107XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gW107XHJcbiAgICBsZXQgZW50cnksIHBhZ2VVcmwsIGVudHJ5VXJsO1xyXG5cclxuICAgIGZvciAobGV0IGUgaW4gZW50cmllcykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbZV07XHJcbiAgICAgIHBhZ2VVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gdXJsIDogaGFzaGxlc3NQYWdlVXJsO1xyXG4gICAgICBlbnRyeVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyBlbnRyeS51cmwgOiBfSEFTSExFU1MoZW50cnkudXJsKTtcclxuXHJcbiAgICAgIGlmIChwYWdlVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBsb2NrZWRFbnRyaWVzLCBub25Mb2NrZWRFbnRyaWVzIH07XHJcbiAgfSxcclxuXHJcbiAgZmlsdGVyTWF0Y2hlcyhtYXRjaGVzKSB7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5sb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IG1hdGNoZXMubm9uTG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXNDb3VudCA9IGxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllc0NvdW50ID0gbm9uTG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBsZXQgZW50cmllcztcclxuXHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50ICYmIG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnKTtcclxuICAgICAgZW50cmllcyA9IGxvY2tlZEVudHJpZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgZW50cmllcyA9IFtub25Mb2NrZWRFbnRyaWVzWzBdXTtcclxuICAgICAgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCA+IDEpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50cmllcztcclxuICB9LFxyXG5cclxuICBvbk5hbWluZ1JlcXVlc3Qoc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBjb25zdCBwcml2ID0gd2luZG93SW5mby5pbmNvZ25pdG87XHJcbiAgICAgICAgaWYgKCFwcml2KSBzZW5kUmVzcG9uc2UoIXByaXYpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2Ugc2VuZFJlc3BvbnNlKHNhdmVJblByaXYpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uU2F2ZU5ld1JlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uVXBkYXRlUmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRlbXBTYXZlRW50cnlNZXRhRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBkYXRhO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZ3JhbnRlZDpzYXZlLWVudHJ5JzogJ25hbWUnLFxyXG4gICAgICAgICdyZW5hbWU6ZW50cnknOiAncmVuYW1lJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hbWUoZW50cnkpIHtcclxuICAgICAgaWYgKGVudHJ5Lm5hbWUpIHJldHVybiB0aGlzLmFkanVzdE5hbWUoZW50cnkubmFtZSwgZW50cnkpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB0aGlzLmFkanVzdE5hbWUobnVsbCwgZW50cnksIG5hbWluZykpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIHJlbmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmV3TmFtZSk7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIpIG5ld05hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5hbWVkOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBhZGp1c3ROYW1lKG5hbWUsIGVudHJ5LCBtZXRob2QpIHtcclxuICAgICAgbmFtZSA9IG5hbWUgPyBuYW1lIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ3RpdGxlJyA/IGVudHJ5LnRpdGxlLnRyaW0oKSA/IGVudHJ5LnRpdGxlLnRyaW0oKSA6IGVudHJ5LnVybCA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICdkYXRlJyA/IChuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSkgOiAnJztcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyICYmIGVudHJ5LmxvY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJywgJ2Vycm9yX2RvdWJsZV9sb2NrZWRfbmFtZScsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY291bnRlcikgbmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICAgIGVudHJ5Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCduYW1lZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBnZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSkge1xyXG4gICAgICBsZXQgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcyksXHJcbiAgICAgICAgICBsID0gZXhpc3RpbmdOYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBjb3VudGVyID0gMCxcclxuICAgICAgICAgIGNoZWNrcG9pbnQ7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgY2hlY2twb2ludCA9IGV4aXN0aW5nTmFtZXNbbF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpKSBjb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9LFxyXG4gICAgaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpIHtcclxuICAgICAgaWYgKG5hbWUgPT09IGNoZWNrcG9pbnQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgbGV0IGwgPSBuYW1lLmxlbmd0aCxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfc3RhcnQgPSBjaGVja3BvaW50LnN1YnN0cmluZygwLCBsKSxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfZW5kO1xyXG5cclxuICAgICAgaWYgKG5hbWUgIT09IGNoZWNrcG9pbnRfc3RhcnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGNoZWNrcG9pbnRfZW5kID0gY2hlY2twb2ludC5zdWJzdHJpbmcobCwgY2hlY2twb2ludC5sZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKC9eXFxzKlxcKFxcZCtcXCkkLy50ZXN0KGNoZWNrcG9pbnRfZW5kKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdvblNhdmVkRW50cnknLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJzogJ29uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cmllcyc6ICdvbkRlbGV0ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAgICdmYWlsZWQ6aW1wb3J0JzogJ29uRmFpbGVkSW1wb3J0JyxcclxuICAgICAgICAnZXJyb3I6aW1wb3J0JzogJ29uSW1wb3J0RXJyb3InLFxyXG4gICAgICAgICdpbXBvcnRlZDpzdG9yYWdlJzogJ29uSW1wb3J0U3VjY2VzcycsXHJcbiAgICAgICAgJ2Vycm9yJzogJ29uRXJyb3InLFxyXG4gICAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCc6ICdvbkNTU0luamVjdGlvbkZhaWx1cmUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5KGNvbmRpdGlvbiwgbWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihzZXR0aW5ncykpIHtcclxuICAgICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RleHRtYXJrZXI6ICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0eXBlKSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnaWNvbnMvdG00OC5wbmcnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlZEVudHJ5KCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVkX2VudHJ5JyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnBibU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcGJtJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfdXJsJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZEltcG9ydChlcnJvcjEsIGVycm9yMikge1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMSk7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UyID0gZXJyb3IyID8gJ1xcblxcbicgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjIpIDogJyc7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfZmFpbHVyZScsIGVyck1lc3NhZ2UxICsgZXJyTWVzc2FnZTIpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3dhcm5pbmcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydFN1Y2Nlc3MoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdWNjZXNzZnVsUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2Muc3VjY2Vzc05vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcihlcnJvciwgbmFtZSkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yLCBuYW1lKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlbGV0ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdqc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnc2hvdydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YWIgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwYWdlLWFjdGlvbicsIHRhYi5pZCwgdGFiLnVybCk7XHJcbiAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLmhpZGUodGFiLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3codGFiSWQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uc2hvdyh0YWJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfR0VUX0FDVElWRV9UQUIsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdhY3RpdmF0ZWQ6dGFiJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdlbnRyeTpmb3VuZCc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOidzZW5kRW50cnknLFxyXG4gICAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJzogJ3NlbmRPcmRlcmVkTWFya3MnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczoge30sXHJcblxyXG4gICAgc2V0UGFuZWwodGFiSWQsIHVybCkge1xyXG4gICAgICB0aGlzLmlzT3BlbigpLnRoZW4ob3BlbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5zZXRQYW5lbCh7XHJcbiAgICAgICAgICAgIHBhbmVsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBjb250ZW50L3NpZGViYXIvc2lkZWJhci5odG1sIyR7dGFiSWR9XyR7dXJsfWApLFxyXG4gICAgICAgICAgICB0YWJJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnNpZGViYXJBY3Rpb24uaXNPcGVuKHt9KTtcclxuICAgIH0sXHJcbiAgICBzdG9yZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW50cmllc0ZvclRoaXNUYWIgPSB0aGlzLmVudHJpZXNbdGFiLmlkXTtcclxuICAgICAgICBsZXQgZW50cnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChlbnRyaWVzRm9yVGhpc1RhYikge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzRm9yVGhpc1RhYlt0YWIudXJsXSB8fCBlbnRyaWVzRm9yVGhpc1RhYltoYXNobGVzc1VybF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE9yZGVyZWRNYXJrcyhtYXJrcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5Om9yZGVyZWQtbWFya3MnLCBtYXJrcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXInLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdzYXZlQWN0aXZhdGlvblN0YXRlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJzogJ3RvZ2dsZVN5bmMnLFxyXG5cclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJzogJ2NoYW5nZVN0eWxlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJzogJ2NoYW5nZUF1dG9Ob3RlU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZyc6ICdjaGFuZ2VCZ0NvbG9yJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJzogJ2NoYW5nZU1hcmtNZXRob2QnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnOiAndG9nZ2xlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJzogJ2NoYW5nZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnOiAndG9nZ2xlQ3RtU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJzogJ2NoYW5nZVNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnOiAndG9nZ2xlSGFzaE9wdCcsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJzogJ3RvZ2dsZVByaXZTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZyc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZyc6ICd0b2dnbGVOb3RlT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3RvZ2dsZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZyc6ICd0b2dnbGVOb3RpZmljYXRpb25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJzogJ3RvZ2dsZVRCQlBvd2VyU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJzogJ2NoYW5nZVNvcnRPcHQnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZyc6ICdjaGFuZ2VWaWV3T3B0JyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvY3Mtc2V0dGluZyc6ICd0b2dnbGVBdXRvY3NPcHQnLFxyXG5cclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJzogJ3JlbW92ZUN1c3RvbU1hcmtlcicsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcic6ICdhZGRDdXN0b21NYXJrZXInLFxyXG5cclxuICAgICAgJ25hbWVkOmVudHJ5JzogJ3NhdmVFbnRyeScsXHJcbiAgICAgICdyZW5hbWVkOmVudHJ5JzogJ3NhdmVOZXdOYW1lJyxcclxuICAgICAgJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JzogJ3VwZGF0ZUVudHJ5T25QYWdlQWN0aW9uJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJzogJ2RlbGV0ZUVudHJpZXMnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAndXBkYXRlRW50cnlPblJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnOiAnY2xlYW5FbnRyaWVzJyxcclxuICAgICAgJ3N5bmM6ZW50cnknOiAnc3luY0VudHJ5JyxcclxuICAgICAgJ3RhZzplbnRyaWVzJzogJ3RhZ0VudHJpZXMnLFxyXG4gICAgICAncmVtb3ZlOnRhZyc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAnYWRkOnRhZyc6ICdhZGRUYWcnLFxyXG5cclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInOiAnY2hhbmdlU0JTZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnOiAnY2hhbmdlVGhlbWVTZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZSc6ICd1cGRhdGVQYWdlTm90ZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVPbkNoYW5nZWRTeW5jOiBmYWxzZSxcclxuXHJcbiAgLy8gQURET04gTUVUSE9EU1xyXG4gIHNhdmVBY3RpdmF0aW9uU3RhdGUoYWN0aXZlKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hY3RpdmUgPSBhY3RpdmU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU1lOQyBNRVRIT0RTXHJcbiAgdG9nZ2xlU3luYyhmaWVsZCwgdmFsKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBmdW5jdGlvbihzeW5jKSB7XHJcbiAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICB0aGlzLnNldEFyZWFzKHN5bmMpO1xyXG4gICAgICByZXR1cm4gc3luYztcclxuICAgIH0sICdsb2NhbCcpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgc3luYyA9PiB7XHJcbiAgICAgICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgICAgIH0sICdzeW5jJylcclxuXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfdG9nZ2xlX3N5bmMnKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnRvZ2dsZS1zeW5jJywgZmllbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd0b2dnbGVkOnN5bmMgdG9nZ2xlZDpzeW5jLScgKyBmaWVsZCwgZmllbGQsIHZhbCkpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNFVFRJTkdTIE1FVEhPRFNcclxuICB1cGRhdGVTZXR0aW5ncyh1cGRhdGVyLCBzZXR0aW5nLCBlcnJvcikge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHVwZGF0ZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDonICsgc2V0dGluZyArICctc2V0dGluZ3MnKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgaWYgKGVycm9yKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpOyB9KTtcclxuICB9LFxyXG4gIGFkZEN1c3RvbU1hcmtlcihrZXksIHN0eWxlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XSA9ICB7IHN0eWxlIH07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9hZGRfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHJlbW92ZUN1c3RvbU1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgZGVsZXRlIHNldHRpbmdzLm1hcmtlcnNba2V5XTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX3JlbW92ZV9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU3R5bGUoa2V5LCBzdHlsZSkge1xyXG4gICAgaWYgKCFrZXkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IHN0eWxlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUJnQ29sb3Ioa2V5LCBjb2xvcikge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSBzZXR0aW5ncy5tYXJrZXJzW2tleV07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIpIHtcclxuICAgICAgICAgIGxldCBzcGxpdCA9IG1hcmtlci5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsIHN0eWxlO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzcGxpdFtsXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBtYXJrZXIuc3R5bGUucmVwbGFjZSgvYmFja2dyb3VuZC1jb2xvcjojLns2fS8sICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBjb2xvcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgICB9LFxyXG4gICAgICAnYmctY29sb3InLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VBdXRvTm90ZVNldHRpbmcoa2V5LCBhdXRvbm90ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uYXV0b25vdGUgPSBhdXRvbm90ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b25vdGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV90b2dnbGVfYXV0b25vdGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWFya01ldGhvZChtZXRob2QpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID0gbWV0aG9kOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrLW1ldGhvZCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX21hcmtfbWV0aG9kJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNob3J0Y3V0U2V0dGluZyhrZXksIHN0YXR1cykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsxXSA9IHN0YXR1czsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNob3J0Y3V0U2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzBdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmltbXV0ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpbW11dG9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZURyb3BMb3NzZXNPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnZHJvcGxvc3Nlc29wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUhhc2hPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaGFzaG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVQcml2U2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdwcml2c2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX3ByaXYnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTmFtaW5nT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lm5hbWluZyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbmFtaW5nJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbmFtaW5nJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3dpdGNoUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90aWZpY2F0aW9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3RpZmljYXRpb24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWlzY1NldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21pc2MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVEJCUG93ZXJTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd0YmJwb3dlcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVBdXRvY3NPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b2NzJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b2NzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNCU2V0dGluZ3ModGFiLCB1bmZvbGRlZCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGFic1t0YWJdLnVuZm9sZGVkID0gdW5mb2xkZWQ7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuICBjaGFuZ2VUaGVtZVNldHRpbmdzKHRoZW1lKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50aGVtZSA9IHRoZW1lOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEhJU1RPUlkgTUVUSE9EU1xyXG4gIGNsZWFuRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBpID0gbmFtZXMubGVuZ3RoLCBuYW1lO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXNbbmFtZV0pIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZWxzZSBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdsb2NhbCcpIHsgdGhpcy5lbWl0KCdjbGVhbmVkOmVudHJpZXMnKTsgfX0pXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9jbGVhbl9oaXN0b3J5JykpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuY2xlYW5FbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pO1xyXG4gIH0sXHJcbiAgc2F2ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBlbnRyeS5sb3N0ID0gW107XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgnc2F2ZWQ6ZW50cnknLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeScsICdlcnJvcl9zYXZlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgc2F2ZU5ld05hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdKTtcclxuICAgICAgZW50cnkubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSA9IGVudHJ5O1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktbmFtZScsIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSwgb2xkTmFtZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGFyZWEpIHtcclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIGNvbnN0IHJlY2VpdmVkQ29tcGxldGVFbnRyeSA9ICEhZW50cnkudXJsO1xyXG4gICAgbGV0IGZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaWYgKHJlY2VpdmVkQ29tcGxldGVFbnRyeSkge1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LmVudHJpZXNbbmFtZV0pIHtcclxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBlbnRyeS5zeW5jZWQ7XHJcbiAgICAgICAgICBmb3IgKGxldCBlIGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5oYXNPd25Qcm9wZXJ0eShlKSkge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXVtlXSA9IGVudHJ5W2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoIWZvdW5kKSB7IHRoaXMudXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGVudHJ5LnN5bmNlZCA/ICdsb2NhbCcgOiAnc3luYycpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktb24tc2F2ZScsIGVudHJ5KSk7XHJcbiAgfSxcclxuICBkZWxldGVFbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllcyAmJiBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB1cmwgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0udXJsO1xyXG4gICAgICAgICAgaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5oYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cnknLCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpkZWxldGUtZW50cmllcycsICdlcnJvcl9kZWxfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmRlbGV0ZUVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdkZWxldGVkOmVudHJpZXMnKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24oZW50cnlOYW1lLCByZXN0b3JlZE1hcmtzLCBsb3N0TWFya3MsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzID0gaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICAgIGNvbnN0IHJlc3RvcmVkTWFya3NJRHMgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrc0lEcyA9IFtdO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLm1hcmtzID0gcmVzdG9yZWRNYXJrcztcclxuXHJcbiAgICAgICAgICByZXN0b3JlZE1hcmtzLmZvckVhY2gobWFyayA9PiByZXN0b3JlZE1hcmtzSURzLnB1c2gobWFyay5pZCkpO1xyXG5cclxuICAgICAgICAgIGxldCBsID0gb2xkTG9zdE1hcmtzLmxlbmd0aCwgaWQ7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IG9sZExvc3RNYXJrc1tsXS5pZDtcclxuICAgICAgICAgICAgaWYgKHJlc3RvcmVkTWFya3NJRHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3NJRHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsb3N0TWFya3MuZm9yRWFjaChtYXJrID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvbGRMb3N0TWFya3NJRHMuaW5jbHVkZXMobWFyay5pZCkpIG9sZExvc3RNYXJrcy5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCA9IG9sZExvc3RNYXJrcztcclxuXHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzeW5jRW50cnkobmFtZSwgdmFsKSB7XHJcbiAgICBjb25zdCBhcmVhXzEgPSB2YWwgPyAnbG9jYWwnIDogJ3N5bmMnO1xyXG4gICAgY29uc3QgYXJlYV8yID0gdmFsID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBsZXQgZW50cnk7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW25hbWVdKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdmFsO1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWFfMSlcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYV8yKVxyXG5cclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1zeW5jJywgZW50cnkpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzeW5jLWVudHJ5JywgbmFtZSkpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRhZ0VudHJpZXMobmFtZXMsIHRhZykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgIG5hbWVzLnN5bmMuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCAnc3luYycpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICAgICAgbmFtZXMubG9jYWwuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sICdsb2NhbCcpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHJlbW92ZVRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWRFbnRyeSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJyk7XHJcbiAgICAgIGlmIChzdG9yZWRFbnRyeS50YWcpIHtcclxuICAgICAgICBzdG9yZWRFbnRyeS50YWcgPSBzdG9yZWRFbnRyeS50YWdcclxuICAgICAgICAgIC5yZXBsYWNlKHJ4LCAnICcpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXlxcc3xcXHMkLywgJycpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXFxzezIsfS8sICcgJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKTtcclxuICB9LFxyXG4gIGFkZFRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkVGFnVG9FbnRyeShoaXN0b3J5LmVudHJpZXNbbmFtZV0sIHRhZyk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSk7XHJcbiAgfSxcclxuICBhZGRUYWdUb0VudHJ5KGVudHJ5LCB0YWcpIHtcclxuICAgIGlmICghdGFnKSBlbnRyeS50YWcgPSAnJztcclxuICAgIGVsc2UgaWYgKCFlbnRyeS50YWcpIGVudHJ5LnRhZyA9IHRhZztcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnLCAnZycpO1xyXG4gICAgICBpZiAoZW50cnkudGFnLnNlYXJjaChyeCkgPT09IC0xKSB7XHJcbiAgICAgICAgZW50cnkudGFnICs9ICcgJyArIHRhZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGVudHJ5KTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG5cclxuICAvLyBQQUdFIE5PVEUgTUVUSE9EU1xyXG4gIHVwZGF0ZVBhZ2VOb3Rlcyh1cmwsIG5vdGVzKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3BhZ2Vub3RlcycsIHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgIHBhZ2Vub3Rlc1t1cmxdID0gbm90ZXM7XHJcbiAgICAgIHJldHVybiBwYWdlbm90ZXM7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLm9uU3RvcmFnZUNoYW5nZWQpKTtcclxuICB9LFxyXG4gIG9uU3RvcmFnZUNoYW5nZWQoY2hhbmdlZEl0ZW0pIHtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5zZXR0aW5ncykgdGhpcy5lbWl0KCd1cGRhdGVkOnNldHRpbmdzJyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uaGlzdG9yeSkgdGhpcy5lbWl0KCd1cGRhdGVkOmhpc3RvcnknKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5wYWdlbm90ZXMpIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlbm90ZXMnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlVGFiRXZlbnRIYW5kbGVycycsXHJcbiAgICAgICAgLy8nc3RhcnRlZDphcHAnOiAnb3BlbkluaXRQYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHRiYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShhbSknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ2xvb2t1cDp3b3JkJzogJ29wZW5TZWFyY2gnLFxyXG4gICAgICAgICdvcGVuOmVudHJpZXMnOiAnb3BlbidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVybHM6IHtcclxuICAgICAgbmV3czogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXdzJyxcclxuICAgICAgc2V0dGluZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c2V0dGluZ3MnLFxyXG4gICAgICBoaXN0b3J5OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWhpc3RvcnknLFxyXG4gICAgICBpbmZvOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ldycsXHJcbiAgICAgIGhlbHA6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bWFudWFsJyxcclxuICAgICAgY29udGFjdDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1jb250YWN0JyxcclxuICAgICAgbG9nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1sb2dzJyxcclxuICAgICAgZXhwb3J0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWV4cG9ydCcsXHJcbiAgICAgIHN5bmM6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c3luYydcclxuICAgIH0sXHJcbiAgICB0YWJFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgIG9uQWN0aXZhdGVkOiBudWxsLFxyXG4gICAgICBvblVwZGF0ZWQ6IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMobW9kZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uQWN0aXZhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkID0gdGhpcy5vbkFjdGl2YXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihvbkFjdGl2YXRlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQgPSB0aGlzLm9uVXBkYXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIob25VcGRhdGVkLCB7IHByb3BlcnRpZXM6IFsnc3RhdHVzJ10gfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBbJ29uQWN0aXZhdGVkJywgJ29uVXBkYXRlZCddLmZvckVhY2goZXYgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnNbZXZdLnJlbW92ZUxpc3RlbmVyKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFiRXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZFRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH0sXHJcbiAgICBvbkFjdGl2YXRlZCh0YWIpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhY3RpdmF0ZWQ6dGFiJywgdGFiLnRhYklkLCAodGFiLnVybCB8fCAnJykpO1xyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlZCh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgICBpZiAoY2hhbmdlZC51cmwpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQ6dGFiJywgdGFiSWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW4odXJscywgbmFtZXMpIHtcclxuICAgICAgdXJscyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJyA/IFt1cmxzXSA6IHVybHM7XHJcbiAgICAgIG5hbWVzID0gdHlwZW9mIG5hbWVzID09PSAnc3RyaW5nJyA/IFtuYW1lc10gOiBuYW1lcztcclxuICAgICAgbGV0IGwgPSB1cmxzLmxlbmd0aCxcclxuICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IGZhbHNlLFxyXG4gICAgICAgICAgdXJsO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uKHNlbGYsIGwpIHtcclxuICAgICAgICAgIHVybCA9IHVybHNbbF07XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiB1cmxzW2xdIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZWN1cml0eVdhcm5pbmcpIHNlbGYuZW1pdCgnZmFpbGVkOm9wZW4tdGFiJyk7XHJcbiAgICAgICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuYW1lcykgc2VsZi5lbWl0KCdvcGVuZWQ6ZW50cnknLCB7IHVybDogdXJsLCBuYW1lOiBuYW1lc1tsXSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkodGhpcywgbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuQWRkb25QYWdlKGlkKSB7XHJcbiAgICAgIHRoaXMub3Blbih0aGlzLnVybHNbaWRdKTtcclxuICAgIH0sXHJcbiAgICBvcGVuSW5pdFBhZ2UodmVyc2lvbiwgbG9hZFJlYXNvbikge1xyXG4gICAgICBpZiAobG9hZFJlYXNvbiAmJiBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcgfHwgbG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScpIHRoaXMub3BlbkFkZG9uUGFnZSgnbmV3cycpO1xyXG4gICAgfSxcclxuICAgIG9wZW5TZWFyY2god29yZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IGN1c3RvbSA9IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoLCB1cmw7XHJcbiAgICAgICAgaWYgKGN1c3RvbSkgdXJsID0gJ2h0dHBzOi8vJyArIGN1c3RvbVswXSArIHdvcmQgKyBjdXN0b21bMV07XHJcbiAgICAgICAgZWxzZSB1cmwgPSAnaHR0cHM6Ly8nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyArIHdvcmQ7XHJcbiAgICAgICAgdGhpcy5vcGVuKHVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZTphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdpbnN0YWxsOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2NoZWNrOnN0b3JhZ2UnOiAnY2hlY2tTdG9yYWdlT25TdGFydCcsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZSc6ICdpbXBvcnRTdG9yYWdlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHNldHRpbmdzLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IHNldHRpbmdzLm1pc2M7XHJcbiAgICAgICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlIHZpcE5vdGUnLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLm4pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5uID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5uO1xyXG4gICAgICAgICAgbWlzYy5ub3RlaWNvbiA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgICAgICAgbWlzYy5ub3Rlb25jbGljayA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5hcnJvd3VwKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3d1cCA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3d1cDtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd2Rvd24gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93ZG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuZFswXSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmRbMF0gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLnNiKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLnNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5jbSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmNtID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5jbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWFya2Vycy5tLnN0eWxlKSB7XHJcbiAgICAgICAgICBsZXQgc3R5bGU7XHJcbiAgICAgICAgICBmb3IgKGxldCBtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBtYXJrZXJzW21dO1xyXG4gICAgICAgICAgICBtYXJrZXJzW21dID0geyBzdHlsZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnNvcnRlZCkge1xyXG4gICAgICAgICAgaGlzdG9yeS5zb3J0ZWQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGlzdG9yeS52aWV3KSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3Rvcnkuc2F2ZUluUHJpdiAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNhdmVJblByaXYgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaW1tdXQgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pbW11dCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaWdub3JlSGFzaCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5Lmlnbm9yZUhhc2ggPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuZHJvcExvc3NlcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmRyb3BMb3NzZXMgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm90ZVR5cGVzLmZvckVhY2gobm90ZVR5cGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBtaXNjW25vdGVUeXBlXSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIG1pc2Nbbm90ZVR5cGVdID0gZGVmYXVsdFNldHRpbmdzLm1pc2Nbbm90ZVR5cGVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbWlzYy50bXVpcG9zKSB7XHJcbiAgICAgICAgICBtaXNjLnRtdWlwb3MgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXRyYW5zcCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGV0cmFuc3AgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXBsYWludmlldyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGVwbGFpbnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlcGxhaW52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1pc2MubWFya21ldGhvZCkge1xyXG4gICAgICAgICAgbWlzYy5tYXJrbWV0aG9kID0gZGVmYXVsdFNldHRpbmdzLm1pc2MubWFya21ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLnRiYnBvd2VyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2MudGJicG93ZXIgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2IpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzLnNiLnRoZW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50YWJzLnRoZW1lcyA9IGRlZmF1bHRTZXR0aW5ncy5zYi50YWJzLnRoZW1lcztcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRoZW1lID0gZGVmYXVsdFNldHRpbmdzLnNiLnRoZW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gZGVmYXVsdFNldHRpbmdzLmFkZG9uLmF1dG9jcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnKTtcclxuICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gIH0sXHJcbiAgdXBkYXRlSGlzdG9yeShoaXN0b3J5KSB7XHJcbiAgICBkZWxldGUgaGlzdG9yeS5vcmRlcjtcclxuXHJcbiAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgZW50cnk7XHJcblxyXG4gICAgaWYgKCFsKSByZXR1cm4gaGlzdG9yeTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGVudHJ5ID0gdGhpcy5maXhIaXN0b3J5RGF0ZXMoZW50cmllc1tuYW1lc1tsXV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB0eXBlb2YgZW50cnkuc3luY2VkID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoaXN0b3J5O1xyXG4gIH0sXHJcbiAgZml4SGlzdG9yeURhdGVzKGVudHJ5KSB7XHJcbiAgICBjb25zdCBsYW5nID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5maXJzdCAhPT0gJ251bWJlcicpIGVudHJ5LmZpcnN0ID0gbmV3IERhdGUoKGVudHJ5LmZpcnN0W2xhbmddIHx8IGVudHJ5LmZpcnN0LmVuIHx8IGVudHJ5LmZpcnN0LmRlIHx8IGVudHJ5LmZpcnN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5Lmxhc3QgIT09ICdudW1iZXInKSBlbnRyeS5sYXN0ID0gbmV3IERhdGUoKGVudHJ5Lmxhc3RbbGFuZ10gfHwgZW50cnkubGFzdC5lbiB8fCBlbnRyeS5sYXN0LmRlIHx8IGVudHJ5Lmxhc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG4gIG1lcmdlSGlzdG9yaWVzKG5ld0hpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKG9sZEhpc3RvcnkgPT4ge1xyXG5cclxuICAgICAgbGV0IGVudHJpZXMgPSBuZXdIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgb2xkRW50cmllcyA9IG9sZEhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG9sZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRW50cmllcyksXHJcbiAgICAgICAgICBhY2NlcHRlZEVudHJpZXMgPSB7fSxcclxuICAgICAgICAgIG5hbWUsIGVudHJ5LCB1cmwsIHVybEV4aXN0cywgZTtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIHVybEV4aXN0cyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIW9sZE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB1cmwgPSBlbnRyeS51cmw7XHJcblxyXG4gICAgICAgICAgZm9yIChlIGluIG9sZEVudHJpZXMpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEVudHJpZXNbZV0udXJsID09PSB1cmwpIHtcclxuICAgICAgICAgICAgICB1cmxFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXVybEV4aXN0cykge1xyXG4gICAgICAgICAgICBlbnRyeS5zeW5jZWQgPSBhcmVhID09PSAnc3luYyc7XHJcbiAgICAgICAgICAgIGFjY2VwdGVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBhIGluIGFjY2VwdGVkRW50cmllcykge1xyXG4gICAgICAgICAgX2VudHJpZXNbYV0gPSBhY2NlcHRlZEVudHJpZXNbYV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICB9LCBhcmVhKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldFN0b3JhZ2VPblVwZ3JhZGUocHJldlZlcnNpb24gPSAnMicsIGxvYWRSZWFzb24pIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIGlmIChsb2FkUmVhc29uICE9PSAnaW5zdGFsbCcpIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZScpO1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdzeW5jJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKSlcclxuICAgIC8vLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnLCBwcmV2VmVyc2lvbikpXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKTtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbicsIGUudG9TdHJpbmcoKSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNoZWNrU3RvcmFnZU9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdzeW5jJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgfSkpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpO1xyXG4gIH0sXHJcbiAgaW1wb3J0U3RvcmFnZShpbXBvcnRlZFN0b3JhZ2UsIGFyZWEpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IGltcG9ydGVkU3RvcmFnZS5zZXR0aW5ncyxcclxuICAgICAgICBoaXN0b3J5ID0gaW1wb3J0ZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgaWYgKCFoaXN0b3J5ICYmICFzZXR0aW5ncykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9lbXB0eScpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICghaGlzdG9yeSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzX3MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2Vzc19oID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzX3MpIHtcclxuICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoc3VjY2Vzc19zID09PSAnb3V0ZGF0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOnNldHRpbmdzIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkge1xyXG4gICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ291dGRhdGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH0sXHJcbiAgaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXJnZUhpc3Rvcmllcyh0aGlzLnVwZGF0ZUhpc3RvcnkoaGlzdG9yeSwgdHJ1ZSksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3ZpZXc6ZW50cnknOiAnb3BlbkVudHJ5RGV0YWlsUGFnZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuRW50cnlEZXRhaWxQYWdlKG5hbWUpIHtcclxuICAgICAgY29uc3QgcG9wdXBVUkwgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdjb250ZW50L2RldGFpbC12aWV3L2RldGFpbC12aWV3Lmh0bWwnKTtcclxuXHJcbiAgICAgIGJyb3dzZXIud2luZG93cy5nZXRDdXJyZW50KCkudGhlbihjdXJyZW50V2luZG93ID0+IHtcclxuXHJcbiAgICAgICAgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh7XHJcbiAgICAgICAgICB1cmw6IHBvcHVwVVJMICsgJyMnICsgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxyXG4gICAgICAgICAgdHlwZTogJ3BhbmVsJyxcclxuICAgICAgICAgIGhlaWdodDogY3VycmVudFdpbmRvdy5oZWlnaHQgLSAyMixcclxuICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbihjdXJyZW50V2luZG93LndpZHRoLCA5ODApLFxyXG4gICAgICAgICAgaW5jb2duaXRvOiBjdXJyZW50V2luZG93LmluY29nbml0b1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5uZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdiYWNrZ3JvdW5kJyxcclxuICB0eXBlOiAnYmFja2dyb3VuZCcsXHJcbiAgcG9zdHBvbmVDb25uZWN0aW9uOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZScsXHJcbiAgICAgICd1cGRhdGVkOmxvZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2F2ZW9wdC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJyxcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJpZXMnLFxyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICdjdHg6bScsXHJcbiAgICAgICdjdHg6ZCcsXHJcbiAgICAgICdjdHg6YicsXHJcbiAgICAgICdjdHg6LWInLFxyXG4gICAgICAnY3R4Om4nLFxyXG4gICAgICAnY3R4OmMnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICdjaGFuZ2VkOnVybCdcclxuICAgIF0sXHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3RlcycsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1NUT1JFfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLnJlbW92ZSgnbG9ncycpO1xyXG5cclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgc3luYyA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2Uuc3luYyA/IGxvY2FsU3RvcmFnZS5zeW5jIDogX0RFRkFVTFRfU1RPUkFHRS5zeW5jO1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2V0X3N5bmMoc3luYyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXQoZmllbGQsIHZhbCkge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19zZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcbiAgICByZXR1cm4gdGhpc1snX3NldF8nICsgZmllbGRdKHZhbCk7XHJcbiAgfSxcclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICBpc0VtcHR5KGFyZWEgPSAnc3luYycpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICghT2JqZWN0LmtleXMoc3RvcmFnZSkubGVuZ3RoICYmIHN0b3JhZ2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcml2c2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdGJicG93ZXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuXHJcbiAgX3NldF9zdG9yYWdlKGFyZWEgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0X3NldHRpbmdzKGFyZWEpLnRoZW4oKCkgPT4gdGhpcy5fc2V0X2hpc3RvcnkoYXJlYSkpO1xyXG4gIH0sXHJcbiAgX3NldF9zeW5jKHN5bmMpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgc3luYzogc3luYyB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeW5jOiBzeW5jIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldEFyZWFzKHN5bmMpKTtcclxuICB9LFxyXG4gIF9zZXRfc2V0dGluZ3MoYXJlYSA9IHRoaXMuYXJlYV9zZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgc2V0dGluZ3M6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2hpc3RvcnkoYXJlYSA9IHRoaXMuYXJlYV9oaXN0b3J5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IGhpc3Rvcnk6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0UuaGlzdG9yeSkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfdmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KSk7XHJcbiAgfSxcclxuICBfc2V0X2xvZyhsb2cpIHtcclxuICAgIGlmIChsb2cuY2xlYXIpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBbXSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9nZXRfbG9ncygpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgIGxvZ3MucHVzaChsb2cpO1xyXG4gICAgICBpZiAobG9ncy5sZW5ndGggPiBfR0xPQkFMX1NFVFRJTkdTLk1BWF9MT0dfRU5UUklFUykgbG9ncy5zaGlmdCgpO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IGxvZ3MgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfZW50cnkoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBoaXN0b3J5ID0gc3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmNsdWRlcyhlbnRyeS5uYW1lKSkgcmV0dXJuIHRoaXMuX3VwZGF0ZV9lbnRyeShlbnRyeSk7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5zZXQoeyBoaXN0b3J5OiBoaXN0b3J5IH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3VwZGF0ZShmaWVsZCwgdXBkYXRlciwgYXJlYSA9IHRoaXNbJ2FyZWFfJyArIGZpZWxkXSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmICghc3RvcmFnZVtmaWVsZF0pIHtcclxuICAgICAgICAgIHN0b3JhZ2VbZmllbGRdID0gX0NPUFkoX0RFRkFVTFRfU1RPUkFHRVtmaWVsZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cGRhdGUgPSB7fTtcclxuICAgICAgICB1cGRhdGVbZmllbGRdID0gdXBkYXRlci5jYWxsKHRoaXMsIHN0b3JhZ2VbZmllbGRdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQodXBkYXRlKS50aGVuKCgpID0+IHVwZGF0ZVtmaWVsZF0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0VYVEVORCwgX0dFVF9BQ1RJVkVfVEFCLCBfTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcbiAganNfaW5qZWN0aW9uX2ZhaWx1cmU6IDM3LFxyXG4gIGNzc19pbmplY3Rpb25fZmFpbHVyZTogMzgsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb242NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvdG00OC5wbmdcIjsiLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKCk7XHJcbiAgfVxyXG4gIGV4dGVuZChldmVudHMpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cyk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cyB8fCB0aGlzLmV2ZW50cztcclxuICAgIGxldCBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9