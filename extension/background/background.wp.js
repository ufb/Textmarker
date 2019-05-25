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
      this.attemptInjections(tabId, changed.url);
    }
  },
  attemptInjections: function attemptInjections(tabId, newUrl) {
    var _this = this;

    _storage2["default"].get('settings').then(function (settings) {
      if (settings.addon.autocs) {
        _this.handleInjections(tabId, newUrl);
      }
    });
  },
  handleInjections: function handleInjections(tabId, newUrl) {
    var _this2 = this;

    var registered = this.injectedScripts[tabId];
    var sameHashlessUrls = registered && (0, _utils._HASHLESS)(registered.url) === (0, _utils._HASHLESS)(newUrl);
    var reloaded = registered && (registered.url === newUrl || !sameHashlessUrls);

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
      console.log('failed to inject content script', e.toString());

      _this3.emit('failed:inject-content-script');
    });
  },
  insertCSS: function insertCSS(tabId) {
    var _this4 = this;

    browser.tabs.insertCSS(tabId, {
      file: '../content/page-injections/injection.css',
      allFrames: true
    })["catch"](function (e) {
      console.log('failed to inject css', e.toString());

      _this4.emit('failed:inject-stylesheet');
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
        return true;
      }, browser.i18n.getMessage('js_injection_failure'), 'error');
    },
    onCSSInjectionFailure: function onCSSInjectionFailure() {
      this.notify(function (settings) {
        return true;
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
      this.area_settings = sync.settings ? 'sync' : 'local';
      this.area_history = sync.history ? 'sync' : 'local';
      this.area_pagenotes = sync.pagenotes ? 'sync' : 'local';
      return sync;
    }, 'local').then(function () {
      _storage2["default"].update('sync', function (sync) {
        sync[field] = val;
        return sync;
      })["catch"](function () {
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
    ONEOFF: ['started:app', 'toggled:addon', 'toggled:sync', 'toggled:sync-settings', 'updated:settings', 'updated:history', 'updated:history-on-restoration', 'updated:entry-sync', 'updated:entry-name', 'updated:logs', 'updated:ctm-settings', 'updated:misc-settings', 'updated:naming-settings', 'updated:bg-color-settings', 'updated:custom-search-settings', 'updated:saveopt-settings', 'updated:mark-method-settings', 'entries:found', 'saved:entry', 'deleted:entry', 'deleted:entries', 'imported:settings', 'imported:history', 'ctx:m', 'ctx:d', 'ctx:b', 'ctx:-b', 'ctx:n', 'ctx:c', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:undo', 'sidebar:redo', 'sidebar:copy', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'sidebar:retry-restoration', 'sidebar:selected-marker', 'opened:sidebar', 'changed:url'],
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

var _utils = __webpack_require__(/*! ./utils */ "./background/utils.js");

var _defaultStorage = __webpack_require__(/*! ./../data/default-storage */ "./data/default-storage.js");

var _defaultStorage2 = _interopRequireDefault(_defaultStorage);

var _globalSettings = __webpack_require__(/*! ./../data/global-settings */ "./data/global-settings.js");

var _globalSettings2 = _interopRequireDefault(_globalSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = new _utils._MODULE({
  initialized: false,
  initializing: false,
  area_settings: _defaultStorage2["default"].sync.settings ? 'sync' : 'local',
  area_history: _defaultStorage2["default"].sync.history ? 'sync' : 'local',
  area_pagenotes: _defaultStorage2["default"].sync.pagenotes ? 'sync' : 'local',
  init: function init() {
    var _this = this;

    browser.storage.sync.remove('logs');
    return browser.storage.local.get().then(function (localStorage) {
      var sync = localStorage && localStorage.sync ? localStorage.sync : _defaultStorage2["default"].sync;
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
        storage[field] = (0, _utils._COPY)(_defaultStorage2["default"][field]);
      }

      var update = {};
      update[field] = updater.call(_this7, storage[field]);
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
exports._HASHLESS = exports._ERRORTRACKER = exports._PORT = exports._MODULE = exports._GET_ACTIVE_TAB = exports._EXTEND = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../utils/copy */ "./utils/copy.js");

var _extend = __webpack_require__(/*! ./../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _getActiveTab = __webpack_require__(/*! ./../utils/getActiveTab */ "./utils/getActiveTab.js");

var _module = __webpack_require__(/*! ./../utils/module */ "./utils/module.js");

var _port = __webpack_require__(/*! ./../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../utils/hashless */ "./utils/hashless.js");

var _errorTracker = __webpack_require__(/*! ./../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports._COPY = _copy._COPY;
exports._EXTEND = _extend2["default"];
exports._GET_ACTIVE_TAB = _getActiveTab._GET_ACTIVE_TAB;
exports._MODULE = _module._MODULE;
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwic2V0dGluZ3MiLCJhZGRvbiIsImF1dG9jcyIsImhhbmRsZUluamVjdGlvbnMiLCJyZWdpc3RlcmVkIiwic2FtZUhhc2hsZXNzVXJscyIsInJlbG9hZGVkIiwiaW5qZWN0Q29udGVudFNjcmlwdCIsImhpc3RvcnkiLCJtYXRjaGVzIiwiZmluZE1hdGNoaW5nRW50cmllcyIsImVudHJpZXMiLCJmaWx0ZXJNYXRjaGVzIiwibG9ja2VkIiwibG9ja2VkRW50cmllcyIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsInRhYnMiLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsImFsbEZyYW1lcyIsInJ1bkF0IiwiaW5zZXJ0Q1NTIiwiZSIsImNvbnNvbGUiLCJ0b1N0cmluZyIsImhhc2hsZXNzUGFnZVVybCIsIm5vbkxvY2tlZEVudHJpZXMiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJsb2NrZWRFbnRyaWVzQ291bnQiLCJub25Mb2NrZWRFbnRyaWVzQ291bnQiLCJvbk5hbWluZ1JlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJ3aW5kb3dJbmZvIiwicHJpdiIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwib25GYWlsZWRJbXBvcnQiLCJlcnJvcjEiLCJlcnJvcjIiLCJlcnJNZXNzYWdlMSIsImVyck1lc3NhZ2UyIiwib25JbXBvcnRFcnJvciIsIm9uSW1wb3J0U3VjY2VzcyIsImZhaWx1cmVOb3RlIiwib25TdWNjZXNzZnVsUmVzdG9yYXRpb24iLCJzdWNjZXNzTm90ZSIsIm9uU2F2ZUVycm9yIiwib25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yIiwib25EZWxldGVFcnJvciIsImVycm9yTm90ZSIsIm9uRXJyb3IiLCJwYWdlQWN0aW9uIiwiaGlkZSIsInNob3ciLCJzZXRQYW5lbCIsImlzT3BlbiIsInBhbmVsIiwic3RvcmVFbnRyeSIsImlnbm9yZUhhc2giLCJ1cGRhdGVFbnRyeSIsInRhYlVybCIsInJlbW92ZUVudHJ5Iiwic2F2ZWRVcmwiLCJzZW5kRW50cnkiLCJoYXNobGVzc1VybCIsImVudHJpZXNGb3JUaGlzVGFiIiwic2VuZE9yZGVyZWRNYXJrcyIsIm1hcmtzIiwidXBkYXRlT25DaGFuZ2VkU3luYyIsInNhdmVBY3RpdmF0aW9uU3RhdGUiLCJ0b2dnbGVTeW5jIiwiZmllbGQiLCJ2YWwiLCJzeW5jIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwicGFnZW5vdGVzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwidXBkYXRlRW50cnlPblBhZ2VBY3Rpb24iLCJzeW5jZWQiLCJyZWNlaXZlZENvbXBsZXRlRW50cnkiLCJmb3VuZCIsImhhc093blByb3BlcnR5IiwiZGVsZXRlRW50cmllcyIsInBvcCIsInVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbiIsImVudHJ5TmFtZSIsInJlc3RvcmVkTWFya3MiLCJsb3N0TWFya3MiLCJvbGRMb3N0TWFya3MiLCJyZXN0b3JlZE1hcmtzSURzIiwib2xkTG9zdE1hcmtzSURzIiwiZm9yRWFjaCIsIm1hcmsiLCJzeW5jRW50cnkiLCJhcmVhXzEiLCJhcmVhXzIiLCJ0YWdFbnRyaWVzIiwidGFnIiwiYWRkVGFnVG9FbnRyeSIsImxvY2FsIiwicmVtb3ZlVGFnIiwic3RvcmVkRW50cnkiLCJyeCIsIlJlZ0V4cCIsImFkZFRhZyIsInNlYXJjaCIsInVwZGF0ZVBhZ2VOb3RlcyIsIm5vdGVzIiwicmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIiLCJzdG9yYWdlIiwib25DaGFuZ2VkIiwicHJveHkiLCJvblN0b3JhZ2VDaGFuZ2VkIiwiY2hhbmdlZEl0ZW0iLCJ1cmxzIiwibmV3cyIsImluZm8iLCJoZWxwIiwiY29udGFjdCIsImxvZ3MiLCJ0YWJFdmVudEhhbmRsZXJzIiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJ0b2dnbGVUYWJFdmVudEhhbmRsZXJzIiwiYWRkVGFiRXZlbnRIYW5kbGVycyIsImJpbmQiLCJwcm9wZXJ0aWVzIiwicmVtb3ZlVGFiRXZlbnRIYW5kbGVycyIsImV2Iiwic2VjdXJpdHlXYXJuaW5nIiwic2VsZiIsIm9wZW5BZGRvblBhZ2UiLCJvcGVuSW5pdFBhZ2UiLCJvcGVuU2VhcmNoIiwid29yZCIsImN1c3RvbSIsImRlZmF1bHRTZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJub3RlVHlwZXMiLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwiYXJyb3d1cCIsImFycm93ZG93biIsImNtIiwibm90ZVR5cGUiLCJ0bXVpcG9zIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJ0YmJwb3dlciIsInRoZW1lcyIsInVwZGF0ZUhpc3RvcnkiLCJvcmRlciIsImZpeEhpc3RvcnlEYXRlcyIsImxhbmciLCJlbiIsImRlIiwibGFzdCIsIm1lcmdlSGlzdG9yaWVzIiwibmV3SGlzdG9yeSIsIm9sZEhpc3RvcnkiLCJvbGRFbnRyaWVzIiwib2xkTmFtZXMiLCJhY2NlcHRlZEVudHJpZXMiLCJ1cmxFeGlzdHMiLCJfZW50cmllcyIsImEiLCJzZXRTdG9yYWdlT25VcGdyYWRlIiwiaXNFbXB0eSIsImVtcHR5IiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcGVuRW50cnlEZXRhaWxQYWdlIiwicG9wdXBVUkwiLCJnZXRDdXJyZW50IiwiY3VycmVudFdpbmRvdyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1pbiIsIl9QT1JUIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsIl9zZXRfc3luYyIsInIiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibWV0aCIsIl91cGRhdGUiLCJjb25zdHJ1Y3RvciIsIl9nZXRfc3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsIl9nZXRfc2V0dGluZ3MiLCJfZ2V0X2xvZ3MiLCJfZ2V0X3ZlcnNpb24iLCJfZ2V0X21vZGUiLCJfZ2V0X3ByaXZzYXZlIiwiX2dldF9uYW1pbmciLCJfZ2V0X3RiYnBvd2VyIiwiX2dldF9tYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJfc2V0X3N0b3JhZ2UiLCJfc2V0X3NldHRpbmdzIiwiX3NldF9oaXN0b3J5IiwiX3NldF92ZXJzaW9uIiwiX3NldF9sb2ciLCJNQVhfTE9HX0VOVFJJRVMiLCJzaGlmdCIsIl9zZXRfZW50cnkiLCJfdXBkYXRlX2VudHJ5IiwiY2FsbCIsIl9DT1BZIiwiX0VYVEVORCIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJ6IiwieSIsInMiLCJkb3dubG9hZCIsImNvcHkiLCJibWljb24iLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwibWV0YSIsInRhZ3MiLCJhY3Rpb25zIiwibGlua3MiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwiZ2V0S2V5QnlWYWx1ZSIsInNyYyIsInRhcmdldCIsIkFycmF5IiwiaXNBcnJheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImgiLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsInRvcGljcyIsImV2ZW50IiwiaGFuZGxlciIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0Iiwib2JqIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiZiIsInBvc3RNZXNzYWdlIiwicmVxIiwibGFzdEFyZyIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFF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c0I3YyxHQUF0QjtBQUNoQjs7O2tDQUNhO0FBQ1osVUFBSSxDQUFDLEtBQUs4VCxrQkFBVixFQUE4QjtBQUM1QixhQUFLbUosT0FBTDtBQUNBLGFBQUtDLHNCQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS0Esc0JBQUwsQ0FBNEIsS0FBS2xPLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtpTyxPQUF0QixDQUE1QjtBQUNEO0FBQ0Y7Ozs4QkFDUztBQUFBOztBQUNSLFVBQU1aLElBQUksR0FBRyxLQUFLQSxJQUFMLEdBQVksS0FBS0EsSUFBTCxJQUFhN2dCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQndoQixPQUFoQixDQUF3QjtBQUFFMVksWUFBSSxFQUFFLEtBQUtBO0FBQWIsT0FBeEIsQ0FBdEM7QUFDQThYLFVBQUksQ0FBQ2MsWUFBTCxDQUFrQnZoQixXQUFsQixDQUE4QjtBQUFBLGVBQU0sTUFBSSxDQUFDeWdCLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JlLEUsRUFBSTtBQUFBOztBQUN6QjVoQixhQUFPLENBQUNDLE9BQVIsQ0FBZ0I0aEIsU0FBaEIsQ0FBMEJ6aEIsV0FBMUIsQ0FBc0MsVUFBQXlnQixJQUFJLEVBQUk7QUFDNUNBLFlBQUksQ0FBQ0MsU0FBTCxDQUFlMWdCLFdBQWYsQ0FBMkIsTUFBSSxDQUFDb1QsS0FBTCxDQUFXLE1BQVgsRUFBaUIsTUFBSSxDQUFDdU4sV0FBdEIsQ0FBM0I7QUFDQSxTQUFDYSxFQUFELElBQU9BLEVBQUUsRUFBVDtBQUNELE9BSEQ7QUFJRDs7OztFQXhGd0JwaUIsZSIsImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2JhY2tncm91bmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL2ljb25zL29uMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzIucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uNjQucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvdG00OC5wbmcnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL21vZHVsZXMvZXJyb3ItbG9nZ2luZydcclxuaW1wb3J0ICcuL21vZHVsZXMvaW5qZWN0aW9uLW1hbmFnZXInXHJcbmltcG9ydCBfTk9USUZJQ0FUSU9OUyBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IF9UQUJTIGZyb20gJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgX1dJTkRPV1MgZnJvbSAnLi9tb2R1bGVzL3dpbmRvd3MnXHJcbmltcG9ydCBfU0lERUJBUlMgZnJvbSAnLi9tb2R1bGVzL3NpZGViYXJzJ1xyXG5pbXBvcnQgX05BTUVSIGZyb20gJy4vbW9kdWxlcy9uYW1lcidcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHQtbWVudSdcclxuaW1wb3J0IF9QQUdFQUNUSU9OIGZyb20gJy4vbW9kdWxlcy9wYWdlLWFjdGlvbidcclxuLy9pbXBvcnQgX0lEQiBmcm9tICcuL21vZHVsZXMvaW5kZXhlZGRiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9zdG9yZS1tYW5hZ2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd0b2dnbGVPbkltcG9ydCcsXHJcbiAgICAgICdpbml0aWFsaXplZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ21pZ3JhdGVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnY2hlY2tlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZTphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDp0YmJwb3dlci1zZXR0aW5ncyc6ICdzZXRUQkJBY3Rpb24nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZlOiB0cnVlLFxyXG4gIHZlcnNpb246ICcnLFxyXG4gIGxvYWRSZWFzb246ICcnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy52ZXJzaW9uID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uIHx8IHZlcnNpb24gIT09IGN1cnJlbnRWZXJzaW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2FkUmVhc29uID0gdGhpcy5sb2FkUmVhc29uID0gZGV0YWlscy5yZWFzb247XHJcbiAgICAgICAgICBjb25zdCBwcmV2VmVyc2lvbiA9IGRldGFpbHMucHJldmlvdXNWZXJzaW9uIHx8ICcyJztcclxuICAgICAgICAgIGlmIChsb2FkUmVhc29uICYmIChsb2FkUmVhc29uID09PSAndXBkYXRlJyB8fCBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChsb2FkUmVhc29uICsgJzphcHAnLCBwcmV2VmVyc2lvbiwgbG9hZFJlYXNvbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uID09PSBjdXJyZW50VmVyc2lvbikgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLnNldCgndmVyc2lvbicsIHRoaXMudmVyc2lvbik7XHJcblxyXG4gICAgLy9fSURCKCk7XHJcbiAgICBfTk9USUZJQ0FUSU9OUygpO1xyXG4gICAgX1RBQlMoKTtcclxuICAgIF9OQU1FUigpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1dJTkRPV1MoKTtcclxuICAgIF9TSURFQkFSUygpO1xyXG4gICAgX1BBR0VBQ1RJT04oKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYWN0aXZhdGUodHJ1ZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnc3RhcnRlZDphcHAnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9hZFJlYXNvbikpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoYWN0aXZhdGUpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gYWN0aXZhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldFRCQkFjdGlvbigpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IG1vZGUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB0aGlzLmFjdGl2YXRlKG1vZGUpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOmFkZG9uJywgbW9kZSk7XHJcbiAgfSxcclxuICB0b2dnbGVPbkltcG9ydCgpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKG9uKSB7XHJcbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHBhdGg6IG9uID8ge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb24xNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vZmYxNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29mZjMyLnBuZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRUQkJBY3Rpb24oYWRkKSB7XHJcbiAgICBpZiAodHlwZW9mIGFkZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGlmIChhZGQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd0YmJwb3dlcicpLnRoZW4oZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IHRiYkhhbmRsZXIgPSB0aGlzLnRiYkhhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICcnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRiYkhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdjb250ZW50L3RiYi1tZW51L3RiYi1tZW51Lmh0bWwnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMudGJiSGFuZGxlcik7XHJcbiAgICAgIHRoaXMudGJiSGFuZGxlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtczoge1xyXG4gICAgICBtOiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIHc6IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgZDogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBiOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgbjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBzYjogeyBjb250ZXh0czogWydhbGwnLCAndGFiJ10gfSxcclxuICAgICAgYzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogW10sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpdGVtLmlkID0gaTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2N0eF8nICsgKGkgPT09ICctYicgPyAnZGInIDogaSkpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9IChpbmZvcywgdGFiKSA9PiB0aGlzLm9uQ2xpY2soaW5mb3MsIHRhYik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMuY3JlYXRlKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZShpZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnNwbGljZSh0aGlzLmNyZWF0ZWQuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsKCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGUob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVkO1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3Nob3J0Y3V0cycpLnRoZW4oc2hvcnRjdXRzID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzaG9ydGN1dHNbaV1bMl0pIHRoaXMuY3JlYXRlKGkpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soaW5mb3MsIHRhYikge1xyXG4gICAgICBjb25zdCBpZCA9IGluZm9zLm1lbnVJdGVtSWQ7XHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgcmVwb3J0KSB7XHJcbiAgICBsZXQgbG9nLCBtc2c7XHJcbiAgICBpZiAoZXJyb3IudGltZSkge1xyXG4gICAgICBsb2cgPSBbZXJyb3IudGltZSwgZXJyb3IubWVzc2FnZSArICcgWycgKyBlcnJvci5sb2NhdGlvbiArICddJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2cgPSBbKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgX0xPR19LRVlTW2Vycm9yXSB8fCBlcnJvcl07XHJcbiAgICAgIGlmIChyZXBvcnQgJiYgdHlwZW9mIHJlcG9ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsb2cucHVzaChyZXBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihyZXBvcnQpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnLCByZXBvcnQpO1xyXG4gIH0sXHJcbiAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3VybCcpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9wYm0nKTtcclxuICB9LFxyXG4gIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdqc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH0sXHJcbiAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoYW5nZWQ6dXJsJzogJ29uVVJMQ2hhbmdlJyxcclxuICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnb25UYWJDb21wbGV0ZWQnLFxyXG4gICAgICAnY2xpY2tlZDpwYWdlLWFjdGlvbic6ICdoYW5kbGVJbmplY3Rpb25zJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JzogJ29uU2F2ZU5ld1JlcXVlc3QnLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdvblVwZGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnbmFtZTplbnRyeT8nOiAnb25OYW1pbmdSZXF1ZXN0JyxcclxuICAgICAgJ29wZW5lZDplbnRyeSc6ICd0ZW1wU2F2ZUVudHJ5TWV0YURhdGEnXHJcbiAgICB9XHJcbiAgfSxcclxuICBxdWV1ZWRGb3JUYWJDb21wbGV0ZWQ6IHt9LFxyXG4gIGluamVjdGVkU2NyaXB0czoge30sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgb25UYWJDb21wbGV0ZWQodGFiSWQpIHtcclxuICAgIGlmICh0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKTtcclxuICAgICAgZGVsZXRlIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblVSTENoYW5nZSh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSA9IGNoYW5nZWQudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgY2hhbmdlZC51cmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmFkZG9uLmF1dG9jcykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsKSB7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkID0gdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdO1xyXG4gICAgY29uc3Qgc2FtZUhhc2hsZXNzVXJscyA9IHJlZ2lzdGVyZWQgJiYgX0hBU0hMRVNTKHJlZ2lzdGVyZWQudXJsKSA9PT0gX0hBU0hMRVNTKG5ld1VybCk7XHJcbiAgICBjb25zdCByZWxvYWRlZCA9IHJlZ2lzdGVyZWQgJiYgKHJlZ2lzdGVyZWQudXJsID09PSBuZXdVcmwgfHwgIXNhbWVIYXNobGVzc1VybHMpO1xyXG5cclxuICAgIGlmICghcmVnaXN0ZXJlZCB8fCByZWxvYWRlZCkge1xyXG5cclxuICAgICAgdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCBuZXdVcmwpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCBuZXdVcmwpO1xyXG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZmlsdGVyTWF0Y2hlcyhtYXRjaGVzKTtcclxuXHJcbiAgICAgICAgICBpZiAoZW50cmllcykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJpZXM6Zm91bmQnLCB7XHJcbiAgICAgICAgICAgICAgZW50cmllcyxcclxuICAgICAgICAgICAgICByZWNlbnRseU9wZW5lZEVudHJ5OiB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnksXHJcbiAgICAgICAgICAgICAgbG9ja2VkOiAhIW1hdGNoZXMubG9ja2VkRW50cmllcy5sZW5ndGhcclxuICAgICAgICAgICAgfSwgeyB0YWI6IHRhYklkIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzYW1lSGFzaGxlc3NVcmxzICYmIHJlZ2lzdGVyZWQuZW50cnkgJiYgcmVnaXN0ZXJlZC5lbnRyeS5oYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaGFzaDpjaGFuZ2VkJywgbmV3VXJsKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBpbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwpIHtcclxuICAgIHJldHVybiBicm93c2VyLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzJyxcclxuICAgICAgYWxsRnJhbWVzOiB0cnVlLFxyXG4gICAgICBydW5BdDogJ2RvY3VtZW50X2lkbGUnXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdID0geyB1cmwgfTtcclxuICAgICAgICB0aGlzLmluc2VydENTUyh0YWJJZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIGluamVjdCBjb250ZW50IHNjcmlwdCcsIGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0Jyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluc2VydENTUyh0YWJJZCkge1xyXG4gICAgYnJvd3Nlci50YWJzLmluc2VydENTUyh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLmNzcycsXHJcbiAgICAgIGFsbEZyYW1lczogdHJ1ZVxyXG4gICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gaW5qZWN0IGNzcycsIGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwpIHtcclxuICAgIGNvbnN0IGhhc2hsZXNzUGFnZVVybCA9IF9IQVNITEVTUyh1cmwpO1xyXG4gICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGxldCBlbnRyeSwgcGFnZVVybCwgZW50cnlVcmw7XHJcblxyXG4gICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tlXTtcclxuICAgICAgcGFnZVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyB1cmwgOiBoYXNobGVzc1BhZ2VVcmw7XHJcbiAgICAgIGVudHJ5VXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IGVudHJ5LnVybCA6IF9IQVNITEVTUyhlbnRyeS51cmwpO1xyXG5cclxuICAgICAgaWYgKHBhZ2VVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmxvY2tlZCkgbG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICBlbHNlIG5vbkxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IGxvY2tlZEVudHJpZXMsIG5vbkxvY2tlZEVudHJpZXMgfTtcclxuICB9LFxyXG5cclxuICBmaWx0ZXJNYXRjaGVzKG1hdGNoZXMpIHtcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLmxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5ub25Mb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllc0NvdW50ID0gbG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzQ291bnQgPSBub25Mb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGxldCBlbnRyaWVzO1xyXG5cclxuICAgIGlmIChsb2NrZWRFbnRyaWVzQ291bnQgJiYgbm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnd2FybjptaXhlZC1lbnRyeS10eXBlcycpO1xyXG4gICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50ID4gMSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG4gIH0sXHJcblxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbXBvcnQnOiAnb25GYWlsZWRJbXBvcnQnLFxyXG4gICAgICAgICdlcnJvcjppbXBvcnQnOiAnb25JbXBvcnRFcnJvcicsXHJcbiAgICAgICAgJ2ltcG9ydGVkOnN0b3JhZ2UnOiAnb25JbXBvcnRTdWNjZXNzJyxcclxuICAgICAgICAnZXJyb3InOiAnb25FcnJvcicsXHJcbiAgICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnkoY29uZGl0aW9uLCBtZXNzYWdlLCB0eXBlKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKHNldHRpbmdzKSkge1xyXG4gICAgICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGV4dG1hcmtlcjogJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHR5cGUpLFxyXG4gICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uVXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdpY29ucy90bTQ4LnBuZycpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVkRW50cnkoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZWRfZW50cnknKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MucGJtTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9wYm0nKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHRydWUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfdXJsJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZEltcG9ydChlcnJvcjEsIGVycm9yMikge1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMSk7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UyID0gZXJyb3IyID8gJ1xcblxcbicgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjIpIDogJyc7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHRydWUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X2ZhaWx1cmUnLCBlcnJNZXNzYWdlMSArIGVyck1lc3NhZ2UyKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0RXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfd2FybmluZycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0U3VjY2VzcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdWNjZXNzZnVsUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2Muc3VjY2Vzc05vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcihlcnJvciwgbmFtZSkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yLCBuYW1lKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlbGV0ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnanNfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gdHJ1ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3NzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzaG93J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnBhZ2VBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBhZ2UtYWN0aW9uJywgdGFiLmlkLCB0YWIudXJsKTtcclxuICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uaGlkZSh0YWIuaWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyh0YWJJZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5zaG93KHRhYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9HRVRfQUNUSVZFX1RBQiwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FjdGl2YXRlZDp0YWInOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2VudHJ5OmZvdW5kJzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAndXBkYXRlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6J3NlbmRFbnRyeScsXHJcbiAgICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnOiAnc2VuZE9yZGVyZWRNYXJrcydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuXHJcbiAgICBzZXRQYW5lbCh0YWJJZCwgdXJsKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuKCkudGhlbihvcGVuID0+IHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG5cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGFiLmlkO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBlbnRyaWVzW2lkXSA9IGVudHJpZXNbaWRdIHx8IFtdO1xyXG4gICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1MoZW50cnkudXJsKSA6IGVudHJ5LnVybDtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCB1cmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmICh1cmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRW50cnkobmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaGFzaFNlbnNpdGl2ZSA/IHVybCA6IF9IQVNITEVTUyh1cmwpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHNhdmVkVXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAoc2F2ZWRVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlbnRyaWVzW2lkXVtzYXZlZFVybF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdGFiLnVybCA6IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpkZWxldGVkLWZvci10YWInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRFbnRyeSgpIHtcclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc2hsZXNzVXJsID0gX0hBU0hMRVNTKHRhYi51cmwpO1xyXG5cclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZyc6ICd0b2dnbGVIYXNoT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnOiAndG9nZ2xlUHJpdlNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJzogJ3RvZ2dsZU5vdGVPcHQnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAndG9nZ2xlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJzogJ3RvZ2dsZU5vdGlmaWNhdGlvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnOiAndG9nZ2xlVEJCUG93ZXJTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnOiAnY2hhbmdlU29ydE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJzogJ2NoYW5nZVZpZXdPcHQnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZyc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcblxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInOiAncmVtb3ZlQ3VzdG9tTWFya2VyJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJzogJ2FkZEN1c3RvbU1hcmtlcicsXHJcblxyXG4gICAgICAnbmFtZWQ6ZW50cnknOiAnc2F2ZUVudHJ5JyxcclxuICAgICAgJ3JlbmFtZWQ6ZW50cnknOiAnc2F2ZU5ld05hbWUnLFxyXG4gICAgICAnZ3JhbnRlZDp1cGRhdGUtZW50cnknOiAndXBkYXRlRW50cnlPblBhZ2VBY3Rpb24nLFxyXG4gICAgICAnZGVsZXRlOmVudHJpZXMnOiAnZGVsZXRlRW50cmllcycsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICd1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY2xlYW46ZW50cmllcyc6ICdjbGVhbkVudHJpZXMnLFxyXG4gICAgICAnc3luYzplbnRyeSc6ICdzeW5jRW50cnknLFxyXG4gICAgICAndGFnOmVudHJpZXMnOiAndGFnRW50cmllcycsXHJcbiAgICAgICdyZW1vdmU6dGFnJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICdhZGQ6dGFnJzogJ2FkZFRhZycsXHJcblxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYic6ICdjaGFuZ2VTQlNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSc6ICdjaGFuZ2VUaGVtZVNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJzogJ3VwZGF0ZVBhZ2VOb3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZU9uQ2hhbmdlZFN5bmM6IGZhbHNlLFxyXG5cclxuICAvLyBBRERPTiBNRVRIT0RTXHJcbiAgc2F2ZUFjdGl2YXRpb25TdGF0ZShhY3RpdmUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmFjdGl2ZSA9IGFjdGl2ZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTWU5DIE1FVEhPRFNcclxuICB0b2dnbGVTeW5jKGZpZWxkLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIGZ1bmN0aW9uKHN5bmMpIHtcclxuXHJcbiAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG5cclxuICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IHN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgfSwgJ2xvY2FsJylcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBzeW5jID0+IHtcclxuICAgICAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfdG9nZ2xlX3N5bmMnKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnRvZ2dsZS1zeW5jJywgZmllbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd0b2dnbGVkOnN5bmMgdG9nZ2xlZDpzeW5jLScgKyBmaWVsZCwgZmllbGQsIHZhbCkpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNFVFRJTkdTIE1FVEhPRFNcclxuICB1cGRhdGVTZXR0aW5ncyh1cGRhdGVyLCBzZXR0aW5nLCBlcnJvcikge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHVwZGF0ZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDonICsgc2V0dGluZyArICctc2V0dGluZ3MnKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgaWYgKGVycm9yKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpOyB9KTtcclxuICB9LFxyXG4gIGFkZEN1c3RvbU1hcmtlcihrZXksIHN0eWxlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XSA9ICB7IHN0eWxlIH07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9hZGRfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHJlbW92ZUN1c3RvbU1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgZGVsZXRlIHNldHRpbmdzLm1hcmtlcnNba2V5XTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX3JlbW92ZV9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU3R5bGUoa2V5LCBzdHlsZSkge1xyXG4gICAgaWYgKCFrZXkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IHN0eWxlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUJnQ29sb3Ioa2V5LCBjb2xvcikge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSBzZXR0aW5ncy5tYXJrZXJzW2tleV07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIpIHtcclxuICAgICAgICAgIGxldCBzcGxpdCA9IG1hcmtlci5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsIHN0eWxlO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzcGxpdFtsXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBtYXJrZXIuc3R5bGUucmVwbGFjZSgvYmFja2dyb3VuZC1jb2xvcjojLns2fS8sICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBjb2xvcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgICB9LFxyXG4gICAgICAnYmctY29sb3InLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VBdXRvTm90ZVNldHRpbmcoa2V5LCBhdXRvbm90ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uYXV0b25vdGUgPSBhdXRvbm90ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b25vdGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV90b2dnbGVfYXV0b25vdGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWFya01ldGhvZChtZXRob2QpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID0gbWV0aG9kOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrLW1ldGhvZCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX21hcmtfbWV0aG9kJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNob3J0Y3V0U2V0dGluZyhrZXksIHN0YXR1cykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsxXSA9IHN0YXR1czsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNob3J0Y3V0U2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzBdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmltbXV0ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpbW11dG9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZURyb3BMb3NzZXNPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnZHJvcGxvc3Nlc29wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUhhc2hPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaGFzaG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVQcml2U2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdwcml2c2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX3ByaXYnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTmFtaW5nT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lm5hbWluZyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbmFtaW5nJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbmFtaW5nJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3dpdGNoUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90aWZpY2F0aW9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3RpZmljYXRpb24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWlzY1NldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21pc2MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVEJCUG93ZXJTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd0YmJwb3dlcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVBdXRvY3NPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b2NzJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b2NzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNCU2V0dGluZ3ModGFiLCB1bmZvbGRlZCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGFic1t0YWJdLnVuZm9sZGVkID0gdW5mb2xkZWQ7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuICBjaGFuZ2VUaGVtZVNldHRpbmdzKHRoZW1lKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50aGVtZSA9IHRoZW1lOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEhJU1RPUlkgTUVUSE9EU1xyXG4gIGNsZWFuRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBpID0gbmFtZXMubGVuZ3RoLCBuYW1lO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXNbbmFtZV0pIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZWxzZSBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdsb2NhbCcpIHsgdGhpcy5lbWl0KCdjbGVhbmVkOmVudHJpZXMnKTsgfX0pXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9jbGVhbl9oaXN0b3J5JykpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuY2xlYW5FbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pO1xyXG4gIH0sXHJcbiAgc2F2ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBlbnRyeS5sb3N0ID0gW107XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgnc2F2ZWQ6ZW50cnknLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeScsICdlcnJvcl9zYXZlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgc2F2ZU5ld05hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdKTtcclxuICAgICAgZW50cnkubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSA9IGVudHJ5O1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktbmFtZScsIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSwgb2xkTmFtZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGFyZWEpIHtcclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIGNvbnN0IHJlY2VpdmVkQ29tcGxldGVFbnRyeSA9ICEhZW50cnkudXJsO1xyXG4gICAgbGV0IGZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaWYgKHJlY2VpdmVkQ29tcGxldGVFbnRyeSkge1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LmVudHJpZXNbbmFtZV0pIHtcclxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBlbnRyeS5zeW5jZWQ7XHJcbiAgICAgICAgICBmb3IgKGxldCBlIGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5oYXNPd25Qcm9wZXJ0eShlKSkge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXVtlXSA9IGVudHJ5W2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoIWZvdW5kKSB7IHRoaXMudXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGVudHJ5LnN5bmNlZCA/ICdsb2NhbCcgOiAnc3luYycpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktb24tc2F2ZScsIGVudHJ5KSk7XHJcbiAgfSxcclxuICBkZWxldGVFbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllcyAmJiBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB1cmwgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0udXJsO1xyXG4gICAgICAgICAgaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5oYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cnknLCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpkZWxldGUtZW50cmllcycsICdlcnJvcl9kZWxfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmRlbGV0ZUVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdkZWxldGVkOmVudHJpZXMnKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24oZW50cnlOYW1lLCByZXN0b3JlZE1hcmtzLCBsb3N0TWFya3MsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzID0gaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICAgIGNvbnN0IHJlc3RvcmVkTWFya3NJRHMgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrc0lEcyA9IFtdO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLm1hcmtzID0gcmVzdG9yZWRNYXJrcztcclxuXHJcbiAgICAgICAgICByZXN0b3JlZE1hcmtzLmZvckVhY2gobWFyayA9PiByZXN0b3JlZE1hcmtzSURzLnB1c2gobWFyay5pZCkpO1xyXG5cclxuICAgICAgICAgIGxldCBsID0gb2xkTG9zdE1hcmtzLmxlbmd0aCwgaWQ7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IG9sZExvc3RNYXJrc1tsXS5pZDtcclxuICAgICAgICAgICAgaWYgKHJlc3RvcmVkTWFya3NJRHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3NJRHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsb3N0TWFya3MuZm9yRWFjaChtYXJrID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvbGRMb3N0TWFya3NJRHMuaW5jbHVkZXMobWFyay5pZCkpIG9sZExvc3RNYXJrcy5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCA9IG9sZExvc3RNYXJrcztcclxuXHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzeW5jRW50cnkobmFtZSwgdmFsKSB7XHJcbiAgICBjb25zdCBhcmVhXzEgPSB2YWwgPyAnbG9jYWwnIDogJ3N5bmMnO1xyXG4gICAgY29uc3QgYXJlYV8yID0gdmFsID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBsZXQgZW50cnk7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW25hbWVdKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdmFsO1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWFfMSlcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYV8yKVxyXG5cclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1zeW5jJywgZW50cnkpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzeW5jLWVudHJ5JywgbmFtZSkpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRhZ0VudHJpZXMobmFtZXMsIHRhZykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgIG5hbWVzLnN5bmMuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCAnc3luYycpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICAgICAgbmFtZXMubG9jYWwuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sICdsb2NhbCcpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHJlbW92ZVRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWRFbnRyeSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJyk7XHJcbiAgICAgIGlmIChzdG9yZWRFbnRyeS50YWcpIHtcclxuICAgICAgICBzdG9yZWRFbnRyeS50YWcgPSBzdG9yZWRFbnRyeS50YWdcclxuICAgICAgICAgIC5yZXBsYWNlKHJ4LCAnICcpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXlxcc3xcXHMkLywgJycpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXFxzezIsfS8sICcgJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKTtcclxuICB9LFxyXG4gIGFkZFRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkVGFnVG9FbnRyeShoaXN0b3J5LmVudHJpZXNbbmFtZV0sIHRhZyk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSk7XHJcbiAgfSxcclxuICBhZGRUYWdUb0VudHJ5KGVudHJ5LCB0YWcpIHtcclxuICAgIGlmICghdGFnKSBlbnRyeS50YWcgPSAnJztcclxuICAgIGVsc2UgaWYgKCFlbnRyeS50YWcpIGVudHJ5LnRhZyA9IHRhZztcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnLCAnZycpO1xyXG4gICAgICBpZiAoZW50cnkudGFnLnNlYXJjaChyeCkgPT09IC0xKSB7XHJcbiAgICAgICAgZW50cnkudGFnICs9ICcgJyArIHRhZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGVudHJ5KTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG5cclxuICAvLyBQQUdFIE5PVEUgTUVUSE9EU1xyXG4gIHVwZGF0ZVBhZ2VOb3Rlcyh1cmwsIG5vdGVzKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3BhZ2Vub3RlcycsIHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgIHBhZ2Vub3Rlc1t1cmxdID0gbm90ZXM7XHJcbiAgICAgIHJldHVybiBwYWdlbm90ZXM7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLm9uU3RvcmFnZUNoYW5nZWQpKTtcclxuICB9LFxyXG4gIG9uU3RvcmFnZUNoYW5nZWQoY2hhbmdlZEl0ZW0pIHtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5zZXR0aW5ncykgdGhpcy5lbWl0KCd1cGRhdGVkOnNldHRpbmdzJyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uaGlzdG9yeSkgdGhpcy5lbWl0KCd1cGRhdGVkOmhpc3RvcnknKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5wYWdlbm90ZXMpIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlbm90ZXMnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlVGFiRXZlbnRIYW5kbGVycycsXHJcbiAgICAgICAgLy8nc3RhcnRlZDphcHAnOiAnb3BlbkluaXRQYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHRiYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShhbSknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ2xvb2t1cDp3b3JkJzogJ29wZW5TZWFyY2gnLFxyXG4gICAgICAgICdvcGVuOmVudHJpZXMnOiAnb3BlbidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVybHM6IHtcclxuICAgICAgbmV3czogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXdzJyxcclxuICAgICAgc2V0dGluZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c2V0dGluZ3MnLFxyXG4gICAgICBoaXN0b3J5OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWhpc3RvcnknLFxyXG4gICAgICBpbmZvOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ldycsXHJcbiAgICAgIGhlbHA6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bWFudWFsJyxcclxuICAgICAgY29udGFjdDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1jb250YWN0JyxcclxuICAgICAgbG9nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1sb2dzJyxcclxuICAgICAgZXhwb3J0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWV4cG9ydCcsXHJcbiAgICAgIHN5bmM6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c3luYydcclxuICAgIH0sXHJcbiAgICB0YWJFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgIG9uQWN0aXZhdGVkOiBudWxsLFxyXG4gICAgICBvblVwZGF0ZWQ6IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMobW9kZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uQWN0aXZhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkID0gdGhpcy5vbkFjdGl2YXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihvbkFjdGl2YXRlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQgPSB0aGlzLm9uVXBkYXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIob25VcGRhdGVkLCB7IHByb3BlcnRpZXM6IFsnc3RhdHVzJ10gfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBbJ29uQWN0aXZhdGVkJywgJ29uVXBkYXRlZCddLmZvckVhY2goZXYgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnNbZXZdLnJlbW92ZUxpc3RlbmVyKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFiRXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZFRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH0sXHJcbiAgICBvbkFjdGl2YXRlZCh0YWIpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhY3RpdmF0ZWQ6dGFiJywgdGFiLnRhYklkLCAodGFiLnVybCB8fCAnJykpO1xyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlZCh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgICBpZiAoY2hhbmdlZC51cmwpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQ6dGFiJywgdGFiSWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW4odXJscywgbmFtZXMpIHtcclxuICAgICAgdXJscyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJyA/IFt1cmxzXSA6IHVybHM7XHJcbiAgICAgIG5hbWVzID0gdHlwZW9mIG5hbWVzID09PSAnc3RyaW5nJyA/IFtuYW1lc10gOiBuYW1lcztcclxuICAgICAgbGV0IGwgPSB1cmxzLmxlbmd0aCxcclxuICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IGZhbHNlLFxyXG4gICAgICAgICAgdXJsO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uKHNlbGYsIGwpIHtcclxuICAgICAgICAgIHVybCA9IHVybHNbbF07XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiB1cmxzW2xdIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZWN1cml0eVdhcm5pbmcpIHNlbGYuZW1pdCgnZmFpbGVkOm9wZW4tdGFiJyk7XHJcbiAgICAgICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuYW1lcykgc2VsZi5lbWl0KCdvcGVuZWQ6ZW50cnknLCB7IHVybDogdXJsLCBuYW1lOiBuYW1lc1tsXSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkodGhpcywgbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuQWRkb25QYWdlKGlkKSB7XHJcbiAgICAgIHRoaXMub3Blbih0aGlzLnVybHNbaWRdKTtcclxuICAgIH0sXHJcbiAgICBvcGVuSW5pdFBhZ2UodmVyc2lvbiwgbG9hZFJlYXNvbikge1xyXG4gICAgICBpZiAobG9hZFJlYXNvbiAmJiBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcgfHwgbG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScpIHRoaXMub3BlbkFkZG9uUGFnZSgnbmV3cycpO1xyXG4gICAgfSxcclxuICAgIG9wZW5TZWFyY2god29yZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IGN1c3RvbSA9IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoLCB1cmw7XHJcbiAgICAgICAgaWYgKGN1c3RvbSkgdXJsID0gJ2h0dHBzOi8vJyArIGN1c3RvbVswXSArIHdvcmQgKyBjdXN0b21bMV07XHJcbiAgICAgICAgZWxzZSB1cmwgPSAnaHR0cHM6Ly8nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyArIHdvcmQ7XHJcbiAgICAgICAgdGhpcy5vcGVuKHVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZTphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdpbnN0YWxsOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2NoZWNrOnN0b3JhZ2UnOiAnY2hlY2tTdG9yYWdlT25TdGFydCcsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZSc6ICdpbXBvcnRTdG9yYWdlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHNldHRpbmdzLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IHNldHRpbmdzLm1pc2M7XHJcbiAgICAgICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlJy5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5uKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMubiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMubjtcclxuICAgICAgICAgIG1pc2Mubm90ZWljb24gPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgICAgICAgIG1pc2Mubm90ZW9uY2xpY2sgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3Rlb25jbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuYXJyb3d1cCkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93dXAgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93dXA7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3dkb3duID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd2Rvd247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmRbMF0pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5kWzBdID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5kWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5zYikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5zYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuY20pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5jbSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuY207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcmtlcnMubS5zdHlsZSkge1xyXG4gICAgICAgICAgbGV0IHN0eWxlO1xyXG4gICAgICAgICAgZm9yIChsZXQgbSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gbWFya2Vyc1ttXTtcclxuICAgICAgICAgICAgbWFya2Vyc1ttXSA9IHsgc3R5bGUgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGlzdG9yeS5zb3J0ZWQpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc29ydGVkID0gZGVmYXVsdFNldHRpbmdzLmhpc3Rvcnkuc29ydGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWhpc3Rvcnkudmlldykge1xyXG4gICAgICAgICAgaGlzdG9yeS52aWV3ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkudmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LnNhdmVJblByaXYgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5zYXZlSW5Qcml2ID0gZGVmYXVsdFNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmltbXV0ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaW1tdXQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5Lmlnbm9yZUhhc2ggIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pZ25vcmVIYXNoID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmRyb3BMb3NzZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5kcm9wTG9zc2VzID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vdGVUeXBlcy5mb3JFYWNoKG5vdGVUeXBlID0+IHtcclxuICAgICAgICAgIGlmICghbWlzY1tub3RlVHlwZV0pIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RlcGxhaW52aWV3ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXBsYWludmlldyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5tYXJrbWV0aG9kKSB7XHJcbiAgICAgICAgICBtaXNjLm1hcmttZXRob2QgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MudGJicG93ZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy50YmJwb3dlciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zYikge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2I7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc2IudGhlbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRhYnMudGhlbWVzID0gZGVmYXVsdFNldHRpbmdzLnNiLnRhYnMudGhlbWVzO1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGhlbWUgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGhlbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmF1dG9jcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZScsXHJcbiAgICAgICd1cGRhdGVkOmxvZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2F2ZW9wdC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJyxcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJpZXMnLFxyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICdjdHg6bScsXHJcbiAgICAgICdjdHg6ZCcsXHJcbiAgICAgICdjdHg6YicsXHJcbiAgICAgICdjdHg6LWInLFxyXG4gICAgICAnY3R4Om4nLFxyXG4gICAgICAnY3R4OmMnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICdjaGFuZ2VkOnVybCdcclxuICAgIF0sXHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfTU9EVUxFKHtcclxuXHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gIGluaXRpYWxpemluZzogZmFsc2UsXHJcbiAgYXJlYV9zZXR0aW5nczogX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJyxcclxuICBhcmVhX2hpc3Rvcnk6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJyxcclxuICBhcmVhX3BhZ2Vub3RlczogX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCcsXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoJ2xvZ3MnKTtcclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgbGV0IHN5bmMgPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLnN5bmMgPyBsb2NhbFN0b3JhZ2Uuc3luYyA6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYztcclxuICAgICAgcmV0dXJuIHRoaXMuX3NldF9zeW5jKHN5bmMpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9LFxyXG4gIHNldChmaWVsZCwgdmFsKSB7XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX3NldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuICAgIHJldHVybiB0aGlzWydfc2V0XycgKyBmaWVsZF0odmFsKTtcclxuICB9LFxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlKC4uLmFyZ3MpO1xyXG4gIH0sXHJcblxyXG4gIGlzRW1wdHkoYXJlYSA9ICdzeW5jJykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgKCFPYmplY3Qua2V5cyhzdG9yYWdlKS5sZW5ndGggJiYgc3RvcmFnZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH0sXHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiAoc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ByaXZzYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90YmJwb3dlcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG5cclxuICBfc2V0X3N0b3JhZ2UoYXJlYSA9IG51bGwpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXRfc2V0dGluZ3MoYXJlYSkudGhlbigoKSA9PiB0aGlzLl9zZXRfaGlzdG9yeShhcmVhKSk7XHJcbiAgfSxcclxuICBfc2V0X3N5bmMoc3luYykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBzeW5jOiBzeW5jIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHN5bmM6IHN5bmMgfSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IHN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3NldHRpbmdzKGFyZWEgPSB0aGlzLmFyZWFfc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IHNldHRpbmdzOiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9oaXN0b3J5KGFyZWEgPSB0aGlzLmFyZWFfaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBoaXN0b3J5OiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLmhpc3RvcnkpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3ZlcnNpb24odmVyc2lvbikge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSkpO1xyXG4gIH0sXHJcbiAgX3NldF9sb2cobG9nKSB7XHJcbiAgICBpZiAobG9nLmNsZWFyKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogW10gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0X2xvZ3MoKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICBsb2dzLnB1c2gobG9nKTtcclxuICAgICAgaWYgKGxvZ3MubGVuZ3RoID4gX0dMT0JBTF9TRVRUSU5HUy5NQVhfTE9HX0VOVFJJRVMpIGxvZ3Muc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBsb2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2VudHJ5KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgaGlzdG9yeSA9IHN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMoZW50cnkubmFtZSkpIHJldHVybiB0aGlzLl91cGRhdGVfZW50cnkoZW50cnkpO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uc2V0KHsgaGlzdG9yeTogaGlzdG9yeSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF91cGRhdGUoZmllbGQsIHVwZGF0ZXIsIGFyZWEgPSB0aGlzWydhcmVhXycgKyBmaWVsZF0pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2VbZmllbGRdKSB7XHJcbiAgICAgICAgICBzdG9yYWdlW2ZpZWxkXSA9IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0VbZmllbGRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgdXBkYXRlW2ZpZWxkXSA9IHVwZGF0ZXIuY2FsbCh0aGlzLCBzdG9yYWdlW2ZpZWxkXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHVwZGF0ZSkudGhlbigoKSA9PiB1cGRhdGVbZmllbGRdKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9FWFRFTkQsIF9HRVRfQUNUSVZFX1RBQiwgX01PRFVMRSwgX1BPUlQsIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAnJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb242NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvdG00OC5wbmdcIjsiLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKCk7XHJcbiAgfVxyXG4gIGV4dGVuZChldmVudHMpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cyk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cyB8fCB0aGlzLmV2ZW50cztcclxuICAgIGxldCBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=