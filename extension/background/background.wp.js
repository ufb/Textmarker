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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwic2V0dGluZ3MiLCJhZGRvbiIsImF1dG9jcyIsImhhbmRsZUluamVjdGlvbnMiLCJyZWdpc3RlcmVkIiwic2FtZUhhc2hsZXNzVXJscyIsInJlbG9hZGVkIiwiaW5qZWN0Q29udGVudFNjcmlwdCIsImhpc3RvcnkiLCJtYXRjaGVzIiwiZmluZE1hdGNoaW5nRW50cmllcyIsImVudHJpZXMiLCJmaWx0ZXJNYXRjaGVzIiwibG9ja2VkIiwibG9ja2VkRW50cmllcyIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsInRhYnMiLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsImFsbEZyYW1lcyIsInJ1bkF0IiwiaW5zZXJ0Q1NTIiwiZSIsImNvbnNvbGUiLCJ0b1N0cmluZyIsImhhc2hsZXNzUGFnZVVybCIsIm5vbkxvY2tlZEVudHJpZXMiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJsb2NrZWRFbnRyaWVzQ291bnQiLCJub25Mb2NrZWRFbnRyaWVzQ291bnQiLCJvbk5hbWluZ1JlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJ3aW5kb3dJbmZvIiwicHJpdiIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwidmlwTm90ZSIsIm9uRmFpbGVkSW1wb3J0IiwiZXJyb3IxIiwiZXJyb3IyIiwiZXJyTWVzc2FnZTEiLCJlcnJNZXNzYWdlMiIsIm9uSW1wb3J0RXJyb3IiLCJvbkltcG9ydFN1Y2Nlc3MiLCJmYWlsdXJlTm90ZSIsIm9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uIiwic3VjY2Vzc05vdGUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwicGFnZUFjdGlvbiIsImhpZGUiLCJzaG93Iiwic2V0UGFuZWwiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsInVwZGF0ZVNldHRpbmdzIiwidXBkYXRlciIsInNldHRpbmciLCJhZGRDdXN0b21NYXJrZXIiLCJrZXkiLCJzdHlsZSIsIm1hcmtlcnMiLCJyZW1vdmVDdXN0b21NYXJrZXIiLCJjaGFuZ2VTdHlsZSIsImNoYW5nZUJnQ29sb3IiLCJjb2xvciIsIm1hcmtlciIsInNwbGl0IiwicmVwbGFjZSIsImNoYW5nZUF1dG9Ob3RlU2V0dGluZyIsImF1dG9ub3RlIiwiY2hhbmdlTWFya01ldGhvZCIsIm1hcmttZXRob2QiLCJ0b2dnbGVTaG9ydGN1dFNldHRpbmciLCJjaGFuZ2VTaG9ydGN1dFNldHRpbmciLCJ2YWx1ZSIsImNoYW5nZVNvcnRPcHQiLCJzb3J0ZWQiLCJjaGFuZ2VWaWV3T3B0IiwidmlldyIsImNoYW5nZUN1c3RvbVNlYXJjaCIsInZhbHVlcyIsImN1c3RvbVNlYXJjaCIsImNoYW5nZUNvdW50UGVyUGFnZSIsInBwIiwidG9nZ2xlQ3RtU2V0dGluZyIsImNoYW5nZVNhdmVPcHQiLCJhdXRvc2F2ZSIsInRvZ2dsZUltbXV0T3B0IiwiaW1tdXQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwiZHJvcExvc3NlcyIsInRvZ2dsZUhhc2hPcHQiLCJ0b2dnbGVQcml2U2F2ZU9wdCIsImNoYW5nZU5hbWluZ09wdCIsInRvZ2dsZU5vdGVPcHQiLCJ0b2dnbGVRdWlja2J1dHRvbk9wdCIsInByb3AiLCJzd2l0Y2hRdWlja2J1dHRvbk9wdCIsInRvZ2dsZU5vdGlmaWNhdGlvbk9wdCIsImNoYW5nZU1pc2NTZXR0aW5nIiwidG9nZ2xlVEJCUG93ZXJTZXR0aW5nIiwidG9nZ2xlQXV0b2NzT3B0IiwiY2hhbmdlU0JTZXR0aW5ncyIsInVuZm9sZGVkIiwiY2hhbmdlVGhlbWVTZXR0aW5ncyIsInRoZW1lIiwiY2xlYW5FbnRyaWVzIiwibmFtZXMiLCJuYW1lc19sb2NhbCIsImxvc3QiLCJzYXZlRW50cnkiLCJzYXZlTmV3TmFtZSIsInVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uIiwic3luY2VkIiwicmVjZWl2ZWRDb21wbGV0ZUVudHJ5IiwiZm91bmQiLCJoYXNPd25Qcm9wZXJ0eSIsImRlbGV0ZUVudHJpZXMiLCJwb3AiLCJ1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24iLCJlbnRyeU5hbWUiLCJyZXN0b3JlZE1hcmtzIiwibG9zdE1hcmtzIiwib2xkTG9zdE1hcmtzIiwicmVzdG9yZWRNYXJrc0lEcyIsIm9sZExvc3RNYXJrc0lEcyIsImZvckVhY2giLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJpbmZvIiwiaGVscCIsImNvbnRhY3QiLCJsb2dzIiwidGFiRXZlbnRIYW5kbGVycyIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwidG9nZ2xlVGFiRXZlbnRIYW5kbGVycyIsImFkZFRhYkV2ZW50SGFuZGxlcnMiLCJiaW5kIiwicHJvcGVydGllcyIsInJlbW92ZVRhYkV2ZW50SGFuZGxlcnMiLCJldiIsInNlY3VyaXR5V2FybmluZyIsInNlbGYiLCJvcGVuQWRkb25QYWdlIiwib3BlbkluaXRQYWdlIiwib3BlblNlYXJjaCIsIndvcmQiLCJjdXN0b20iLCJkZWZhdWx0U2V0dGluZ3MiLCJfREVGQVVMVF9TVE9SQUdFIiwibm90ZVR5cGVzIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsIm5vdGVUeXBlIiwidG11aXBvcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3IiwidGJicG93ZXIiLCJ0aGVtZXMiLCJ1cGRhdGVIaXN0b3J5Iiwib3JkZXIiLCJmaXhIaXN0b3J5RGF0ZXMiLCJsYW5nIiwiZW4iLCJkZSIsImxhc3QiLCJtZXJnZUhpc3RvcmllcyIsIm5ld0hpc3RvcnkiLCJvbGRIaXN0b3J5Iiwib2xkRW50cmllcyIsIm9sZE5hbWVzIiwiYWNjZXB0ZWRFbnRyaWVzIiwidXJsRXhpc3RzIiwiX2VudHJpZXMiLCJhIiwic2V0U3RvcmFnZU9uVXBncmFkZSIsImlzRW1wdHkiLCJlbXB0eSIsImNoZWNrU3RvcmFnZU9uU3RhcnQiLCJpbXBvcnRTdG9yYWdlIiwiaW1wb3J0ZWRTdG9yYWdlIiwiaW1wb3J0U2V0dGluZ3MiLCJzdWNjZXNzIiwiaW1wb3J0SGlzdG9yeSIsInN1Y2Nlc3NfcyIsInN1Y2Nlc3NfaCIsIlByb21pc2UiLCJyZXNvbHZlIiwib3BlbkVudHJ5RGV0YWlsUGFnZSIsInBvcHVwVVJMIiwiZ2V0Q3VycmVudCIsImN1cnJlbnRXaW5kb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJfUE9SVCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsIk9ORU9GRiIsIkNPTk5FQ1RJT04iLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJfc2V0X3N5bmMiLCJyIiwid2luZG93Iiwic2V0VGltZW91dCIsIm1ldGgiLCJfdXBkYXRlIiwiY29uc3RydWN0b3IiLCJfZ2V0X3N0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5IiwiX2dldF9sb2NhbF9zdG9yYWdlIiwiX2dldF9zeW5jZWRfc3RvcmFnZSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9sb2dzIiwiX2dldF92ZXJzaW9uIiwiX2dldF9tb2RlIiwiX2dldF9wcml2c2F2ZSIsIl9nZXRfbmFtaW5nIiwiX2dldF90YmJwb3dlciIsIl9nZXRfbWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwiX3NldF9zdG9yYWdlIiwiX3NldF9zZXR0aW5ncyIsIl9zZXRfaGlzdG9yeSIsIl9zZXRfdmVyc2lvbiIsIl9zZXRfbG9nIiwiTUFYX0xPR19FTlRSSUVTIiwic2hpZnQiLCJfc2V0X2VudHJ5IiwiX3VwZGF0ZV9lbnRyeSIsImNhbGwiLCJfQ09QWSIsIl9FWFRFTkQiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwieiIsInkiLCJzIiwiZG93bmxvYWQiLCJjb3B5IiwiYm1pY29uIiwib3ZlcndyaXRlIiwiY2hhbmdlZE5vdGUiLCJwcm9ncmVzc2JhciIsIm1ldGEiLCJ0YWdzIiwiYWN0aW9ucyIsImxpbmtzIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImdldEtleUJ5VmFsdWUiLCJzcmMiLCJ0YXJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZW5hbWUiLCJsaW5lbm8iLCJjb2xubyIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJoIiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJ0b3BpY3MiLCJldmVudCIsImhhbmRsZXIiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm9iaiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsImYiLCJwb3N0TWVzc2FnZSIsInJlcSIsImxhc3RBcmciLCJ1bmRlZmluZWQiLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNB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ZmlsZSI6ImJhY2tncm91bmQvYmFja2dyb3VuZC53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFja2dyb3VuZC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi4vaWNvbnMvb24xNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24xOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb24zNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb242NC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy90bTQ4LnBuZydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkFHRSBmcm9tICcuL3N0b3JhZ2UnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9lcnJvci1sb2dnaW5nJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlcidcclxuaW1wb3J0IF9OT1RJRklDQVRJT05TIGZyb20gJy4vbW9kdWxlcy9ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgX1RBQlMgZnJvbSAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCBfV0lORE9XUyBmcm9tICcuL21vZHVsZXMvd2luZG93cydcclxuaW1wb3J0IF9TSURFQkFSUyBmcm9tICcuL21vZHVsZXMvc2lkZWJhcnMnXHJcbmltcG9ydCBfTkFNRVIgZnJvbSAnLi9tb2R1bGVzL25hbWVyJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dC1tZW51J1xyXG5pbXBvcnQgX1BBR0VBQ1RJT04gZnJvbSAnLi9tb2R1bGVzL3BhZ2UtYWN0aW9uJ1xyXG4vL2ltcG9ydCBfSURCIGZyb20gJy4vbW9kdWxlcy9pbmRleGVkZGInXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy92ZXJzaW9uLW1hbmFnZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL3N0b3JlLW1hbmFnZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3RvZ2dsZU9uSW1wb3J0JyxcclxuICAgICAgJ2luaXRpYWxpemVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnbWlncmF0ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdjaGVja2VkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAndG9nZ2xlOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnRiYnBvd2VyLXNldHRpbmdzJzogJ3NldFRCQkFjdGlvbidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmU6IHRydWUsXHJcbiAgdmVyc2lvbjogJycsXHJcbiAgbG9hZFJlYXNvbjogJycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFZlcnNpb24gPSB0aGlzLnZlcnNpb24gPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgICBpZiAoIXZlcnNpb24gfHwgdmVyc2lvbiAhPT0gY3VycmVudFZlcnNpb24pIHtcclxuICAgICAgICAgIGNvbnN0IGxvYWRSZWFzb24gPSB0aGlzLmxvYWRSZWFzb24gPSBkZXRhaWxzLnJlYXNvbjtcclxuICAgICAgICAgIGNvbnN0IHByZXZWZXJzaW9uID0gZGV0YWlscy5wcmV2aW91c1ZlcnNpb24gfHwgJzInO1xyXG4gICAgICAgICAgaWYgKGxvYWRSZWFzb24gJiYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnIHx8IGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGxvYWRSZWFzb24gKyAnOmFwcCcsIHByZXZWZXJzaW9uLCBsb2FkUmVhc29uKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCd2ZXJzaW9uJywgdGhpcy52ZXJzaW9uKTtcclxuXHJcbiAgICAvL19JREIoKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG4gICAgX1NJREVCQVJTKCk7XHJcbiAgICBfUEFHRUFDVElPTigpO1xyXG5cclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5hY3RpdmF0ZSh0cnVlKSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzdGFydGVkOmFwcCcsIHRoaXMudmVyc2lvbiwgdGhpcy5sb2FkUmVhc29uKSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShhY3RpdmF0ZSkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBhY3RpdmF0ZTtcclxuICAgIHRoaXMudG9nZ2xlQnJvd3NlckFjdGlvbkljb24oYWN0aXZlKTtcclxuICAgIHRoaXMuc2V0VEJCQWN0aW9uKCk7XHJcbiAgfSxcclxuICB0b2dnbGUoKSB7XHJcbiAgICBsZXQgbW9kZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgIHRoaXMuYWN0aXZhdGUobW9kZSk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6YWRkb24nLCBtb2RlKTtcclxuICB9LFxyXG4gIHRvZ2dsZU9uSW1wb3J0KCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQnJvd3NlckFjdGlvbkljb24ob24pIHtcclxuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgcGF0aDogb24gPyB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vbjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vbjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vbjMyLnBuZydcclxuICAgICAgfSA6IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29mZjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vZmYxOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb2ZmMzIucG5nJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldFRCQkFjdGlvbihhZGQpIHtcclxuICAgIGlmICh0eXBlb2YgYWRkID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgaWYgKGFkZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3RiYnBvd2VyJykudGhlbihlbmFibGVkID0+IHtcclxuICAgICAgICBpZiAoZW5hYmxlZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZGRUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgdGJiSGFuZGxlciA9IHRoaXMudGJiSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJycgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGJiSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmVUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKHRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJ2NvbnRlbnQvdGJiLW1lbnUvdGJiLW1lbnUuaHRtbCcgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQucmVtb3ZlTGlzdGVuZXIodGhpcy50YmJIYW5kbGVyKTtcclxuICAgICAgdGhpcy50YmJIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnOiAndXBkYXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIG06IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgdzogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICBkOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIGI6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgJy1iJzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBuOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIHNiOiB7IGNvbnRleHRzOiBbJ2FsbCcsICd0YWInXSB9LFxyXG4gICAgICBjOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBbXSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3R4XycgKyAoaSA9PT0gJy1iJyA/ICdkYicgOiBpKSk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKGluZm9zLCB0YWIpID0+IHRoaXMub25DbGljayhpbmZvcywgdGFiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoaWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5jcmVhdGUodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlKGlkKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQuc3BsaWNlKHRoaXMuY3JlYXRlZC5pbmRleE9mKGlkKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZShvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVBbGwoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2hvcnRjdXRzJykudGhlbihzaG9ydGN1dHMgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgaWYgKHNob3J0Y3V0c1tpXVsyXSkgdGhpcy5jcmVhdGUoaSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGljayhpbmZvcywgdGFiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gaW5mb3MubWVudUl0ZW1JZDtcclxuICAgICAgaWYgKGlkID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCBpbmZvcy5zZWxlY3Rpb25UZXh0KTtcclxuICAgICAgZWxzZSBpZiAoaWQgPT09ICdzYicpIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5vcGVuKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCdjdHg6JyArIGlkLCBudWxsLCBudWxsLCB7IHRhYjogdGFiLmlkIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0xPR19LRVlTIGZyb20gJy4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZXJyb3InOiAnbG9nJyxcclxuICAgICAgJ3dhcm5pbmcnOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6ZGVsZXRlLWVudHJ5JzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcyc6ICdvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzJyxcclxuICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAnZXJyb3I6aW1wb3J0JzogJ2xvZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnOiAnbG9nJyxcclxuICAgICAgJ2NsZWFyOmxvZ3MnOiAnY2xlYXInLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnOiAnbG9nJyxcclxuICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCc6ICdvbkNTU0luamVjdGlvbkZhaWx1cmUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbG9nKGVycm9yLCByZXBvcnQpIHtcclxuICAgIGxldCBsb2csIG1zZztcclxuICAgIGlmIChlcnJvci50aW1lKSB7XHJcbiAgICAgIGxvZyA9IFtlcnJvci50aW1lLCBlcnJvci5tZXNzYWdlICsgJyBbJyArIGVycm9yLmxvY2F0aW9uICsgJ10nXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZyA9IFsobmV3IERhdGUoKS5nZXRUaW1lKCkpLCBfTE9HX0tFWVNbZXJyb3JdIHx8IGVycm9yXTtcclxuICAgICAgaWYgKHJlcG9ydCAmJiB0eXBlb2YgcmVwb3J0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGxvZy5wdXNoKHJlcG9ydCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF9TVE9SQUdFLnNldCgnbG9nJywgbG9nKS50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDpsb2dzIGxvZ2dlZDplcnJvcicsIGxvZykpO1xyXG4gIH0sXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIHsgY2xlYXI6IHRydWUgfSkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncycpKTtcclxuICB9LFxyXG4gIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyk7XHJcbiAgfSxcclxuICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFJlc3RvcmF0aW9uKHJlcG9ydCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScsIHJlcG9ydCk7XHJcbiAgfSxcclxuICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfdXJsJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFBCTSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3BibScpO1xyXG4gIH0sXHJcbiAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2pzX2luamVjdGlvbl9mYWlsdXJlJyk7XHJcbiAgfSxcclxuICBvbkNTU0luamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICB0aGlzLmxvZygnY3NzX2luamVjdGlvbl9mYWlsdXJlJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2hhbmdlZDp1cmwnOiAnb25VUkxDaGFuZ2UnLFxyXG4gICAgICAnY29tcGxldGVkOnRhYic6ICdvblRhYkNvbXBsZXRlZCcsXHJcbiAgICAgICdjbGlja2VkOnBhZ2UtYWN0aW9uJzogJ2hhbmRsZUluamVjdGlvbnMnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nOiAnb25TYXZlTmV3UmVxdWVzdCcsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ29uVXBkYXRlUmVxdWVzdCcsXHJcbiAgICAgICduYW1lOmVudHJ5Pyc6ICdvbk5hbWluZ1JlcXVlc3QnLFxyXG4gICAgICAnb3BlbmVkOmVudHJ5JzogJ3RlbXBTYXZlRW50cnlNZXRhRGF0YSdcclxuICAgIH1cclxuICB9LFxyXG4gIHF1ZXVlZEZvclRhYkNvbXBsZXRlZDoge30sXHJcbiAgaW5qZWN0ZWRTY3JpcHRzOiB7fSxcclxuICByZWNlbnRseU9wZW5lZEVudHJ5OiBudWxsLFxyXG5cclxuICBvblRhYkNvbXBsZXRlZCh0YWJJZCkge1xyXG4gICAgaWYgKHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSkge1xyXG4gICAgICB0aGlzLmF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCB0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pO1xyXG4gICAgICBkZWxldGUgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uVVJMQ2hhbmdlKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgIT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdID0gY2hhbmdlZC51cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBjaGFuZ2VkLnVybCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXR0ZW1wdEluamVjdGlvbnModGFiSWQsIG5ld1VybCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBoYW5kbGVJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwpIHtcclxuICAgIGNvbnN0IHJlZ2lzdGVyZWQgPSB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF07XHJcbiAgICBjb25zdCBzYW1lSGFzaGxlc3NVcmxzID0gcmVnaXN0ZXJlZCAmJiBfSEFTSExFU1MocmVnaXN0ZXJlZC51cmwpID09PSBfSEFTSExFU1MobmV3VXJsKTtcclxuICAgIGNvbnN0IHJlbG9hZGVkID0gcmVnaXN0ZXJlZCAmJiAocmVnaXN0ZXJlZC51cmwgPT09IG5ld1VybCB8fCAhc2FtZUhhc2hsZXNzVXJscyk7XHJcblxyXG4gICAgaWYgKCFyZWdpc3RlcmVkIHx8IHJlbG9hZGVkKSB7XHJcblxyXG4gICAgICB0aGlzLmluamVjdENvbnRlbnRTY3JpcHQodGFiSWQsIG5ld1VybCkudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIG5ld1VybCk7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5maWx0ZXJNYXRjaGVzKG1hdGNoZXMpO1xyXG5cclxuICAgICAgICAgIGlmIChlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZW50cmllczpmb3VuZCcsIHtcclxuICAgICAgICAgICAgICBlbnRyaWVzLFxyXG4gICAgICAgICAgICAgIHJlY2VudGx5T3BlbmVkRW50cnk6IHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSxcclxuICAgICAgICAgICAgICBsb2NrZWQ6ICEhbWF0Y2hlcy5sb2NrZWRFbnRyaWVzLmxlbmd0aFxyXG4gICAgICAgICAgICB9LCB7IHRhYjogdGFiSWQgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNhbWVIYXNobGVzc1VybHMgJiYgcmVnaXN0ZXJlZC5lbnRyeSAmJiByZWdpc3RlcmVkLmVudHJ5Lmhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdoYXNoOmNoYW5nZWQnLCBuZXdVcmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdENvbnRlbnRTY3JpcHQodGFiSWQsIHVybCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy5leGVjdXRlU2NyaXB0KHRhYklkLCB7XHJcbiAgICAgIGZpbGU6ICcuLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMnLFxyXG4gICAgICBhbGxGcmFtZXM6IHRydWUsXHJcbiAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfaWRsZSdcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluamVjdGVkU2NyaXB0c1t0YWJJZF0gPSB7IHVybCB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0Q1NTKHRhYklkKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gaW5qZWN0IGNvbnRlbnQgc2NyaXB0JywgZS50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5zZXJ0Q1NTKHRhYklkKSB7XHJcbiAgICBicm93c2VyLnRhYnMuaW5zZXJ0Q1NTKHRhYklkLCB7XHJcbiAgICAgIGZpbGU6ICcuLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24uY3NzJyxcclxuICAgICAgYWxsRnJhbWVzOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBpbmplY3QgY3NzJywgZS50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCcpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBmaW5kTWF0Y2hpbmdFbnRyaWVzKGhpc3RvcnksIHVybCkge1xyXG4gICAgY29uc3QgaGFzaGxlc3NQYWdlVXJsID0gX0hBU0hMRVNTKHVybCk7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgbGV0IGVudHJ5LCBwYWdlVXJsLCBlbnRyeVVybDtcclxuXHJcbiAgICBmb3IgKGxldCBlIGluIGVudHJpZXMpIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2VdO1xyXG4gICAgICBwYWdlVXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IHVybCA6IGhhc2hsZXNzUGFnZVVybDtcclxuICAgICAgZW50cnlVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gZW50cnkudXJsIDogX0hBU0hMRVNTKGVudHJ5LnVybCk7XHJcblxyXG4gICAgICBpZiAocGFnZVVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICBpZiAoZW50cnkubG9ja2VkKSBsb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIGVsc2Ugbm9uTG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbG9ja2VkRW50cmllcywgbm9uTG9ja2VkRW50cmllcyB9O1xyXG4gIH0sXHJcblxyXG4gIGZpbHRlck1hdGNoZXMobWF0Y2hlcykge1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IG1hdGNoZXMubG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLm5vbkxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzQ291bnQgPSBsb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXNDb3VudCA9IG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgbGV0IGVudHJpZXM7XHJcblxyXG4gICAgaWYgKGxvY2tlZEVudHJpZXNDb3VudCAmJiBub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIGVudHJpZXMgPSBsb2NrZWRFbnRyaWVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIGVudHJpZXMgPSBbbm9uTG9ja2VkRW50cmllc1swXV07XHJcbiAgICAgIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVudHJpZXM7XHJcbiAgfSxcclxuXHJcbiAgb25OYW1pbmdSZXF1ZXN0KHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJpdiA9IHdpbmRvd0luZm8uaW5jb2duaXRvO1xyXG4gICAgICAgIGlmICghcHJpdikgc2VuZFJlc3BvbnNlKCFwcml2KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHNlbmRSZXNwb25zZShzYXZlSW5Qcml2KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblNhdmVOZXdSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBvblVwZGF0ZVJlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0ZW1wU2F2ZUVudHJ5TWV0YURhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gZGF0YTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2dyYW50ZWQ6c2F2ZS1lbnRyeSc6ICduYW1lJyxcclxuICAgICAgICAncmVuYW1lOmVudHJ5JzogJ3JlbmFtZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBuYW1lKGVudHJ5KSB7XHJcbiAgICAgIGlmIChlbnRyeS5uYW1lKSByZXR1cm4gdGhpcy5hZGp1c3ROYW1lKGVudHJ5Lm5hbWUsIGVudHJ5KTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4gdGhpcy5hZGp1c3ROYW1lKG51bGwsIGVudHJ5LCBuYW1pbmcpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICByZW5hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgICBuZXdOYW1lID0gbmV3TmFtZS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IHRoaXMuZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5ld05hbWUpO1xyXG4gICAgICAgIGlmIChjb3VudGVyKSBuZXdOYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuYW1lZDplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgYWRqdXN0TmFtZShuYW1lLCBlbnRyeSwgbWV0aG9kKSB7XHJcbiAgICAgIG5hbWUgPSBuYW1lID8gbmFtZSA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICd0aXRsZScgPyBlbnRyeS50aXRsZS50cmltKCkgPyBlbnRyeS50aXRsZS50cmltKCkgOiBlbnRyeS51cmwgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAnZGF0ZScgPyAobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpIDogJyc7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IHRoaXMuZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRlciAmJiBlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnNhdmUtZW50cnktZG91YmxlLWxvY2tlZCcsICdlcnJvcl9kb3VibGVfbG9ja2VkX25hbWUnLCBuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGNvdW50ZXIpIG5hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgICBlbnRyeS5uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnbmFtZWQ6ZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RG91YmxlTmFtZUNvdW50KGhpc3RvcnksIG5hbWUpIHtcclxuICAgICAgbGV0IGV4aXN0aW5nTmFtZXMgPSBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IGV4aXN0aW5nTmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgY291bnRlciA9IDAsXHJcbiAgICAgICAgICBjaGVja3BvaW50O1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIGNoZWNrcG9pbnQgPSBleGlzdGluZ05hbWVzW2xdO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSkgY291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgfSxcclxuICAgIGlzRG91YmxlTmFtZShuYW1lLCBjaGVja3BvaW50KSB7XHJcbiAgICAgIGlmIChuYW1lID09PSBjaGVja3BvaW50KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBsID0gbmFtZS5sZW5ndGgsXHJcbiAgICAgICAgICBjaGVja3BvaW50X3N0YXJ0ID0gY2hlY2twb2ludC5zdWJzdHJpbmcoMCwgbCksXHJcbiAgICAgICAgICBjaGVja3BvaW50X2VuZDtcclxuXHJcbiAgICAgIGlmIChuYW1lICE9PSBjaGVja3BvaW50X3N0YXJ0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBjaGVja3BvaW50X2VuZCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKGwsIGNoZWNrcG9pbnQubGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICgvXlxccypcXChcXGQrXFwpJC8udGVzdChjaGVja3BvaW50X2VuZCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnb25TYXZlZEVudHJ5JyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6dXBkYXRlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnNhdmUtZW50cnktZG91YmxlLWxvY2tlZCc6ICdvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnOiAnb25EZWxldGVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnb25TdWNjZXNzZnVsUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgICAnZmFpbGVkOmltcG9ydCc6ICdvbkZhaWxlZEltcG9ydCcsXHJcbiAgICAgICAgJ2Vycm9yOmltcG9ydCc6ICdvbkltcG9ydEVycm9yJyxcclxuICAgICAgICAnaW1wb3J0ZWQ6c3RvcmFnZSc6ICdvbkltcG9ydFN1Y2Nlc3MnLFxyXG4gICAgICAgICdlcnJvcic6ICdvbkVycm9yJyxcclxuICAgICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcyc6ICdvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCc6ICdvblNjcmlwdEluamVjdGlvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeShjb25kaXRpb24sIG1lc3NhZ2UsIHR5cGUpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZXh0bWFya2VyOiAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodHlwZSksXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2ljb25zL3RtNDgucG5nJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZWRFbnRyeSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlZF9lbnRyeScpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFBCTSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5wYm1Ob3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3BibScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3VybCcpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRJbXBvcnQoZXJyb3IxLCBlcnJvcjIpIHtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjEpO1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMiA9IGVycm9yMiA/ICdcXG5cXG4nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IyKSA6ICcnO1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X2ZhaWx1cmUnLCBlcnJNZXNzYWdlMSArIGVyck1lc3NhZ2UyKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0RXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF93YXJuaW5nJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRTdWNjZXNzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnN1Y2Nlc3NOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVMb2NrZWREb3VibGVOYW1lRXJyb3IoZXJyb3IsIG5hbWUpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvciwgbmFtZSkpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZWxldGVFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNjcmlwdEluamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnanNfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2NoYW5nZWQ6dXJsJzogJ3Nob3cnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGFiID0+IHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cGFnZS1hY3Rpb24nLCB0YWIuaWQsIHRhYi51cmwpO1xyXG4gICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5oaWRlKHRhYi5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93KHRhYklkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLmFkZG9uLmF1dG9jcykge1xyXG4gICAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLnNob3codGFiSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0dFVF9BQ1RJVkVfVEFCLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnYWN0aXZhdGVkOnRhYic6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2NoYW5nZWQ6dXJsJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnZW50cnk6Zm91bmQnOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICd1cGRhdGVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzonc2VuZEVudHJ5JyxcclxuICAgICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcyc6ICdzZW5kT3JkZXJlZE1hcmtzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IHt9LFxyXG5cclxuICAgIHNldFBhbmVsKHRhYklkLCB1cmwpIHtcclxuICAgICAgdGhpcy5pc09wZW4oKS50aGVuKG9wZW4gPT4ge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICBicm93c2VyLnNpZGViYXJBY3Rpb24uc2V0UGFuZWwoe1xyXG4gICAgICAgICAgICBwYW5lbDogYnJvd3Nlci5ydW50aW1lLmdldFVSTChgY29udGVudC9zaWRlYmFyL3NpZGViYXIuaHRtbCMke3RhYklkfV8ke3VybH1gKSxcclxuICAgICAgICAgICAgdGFiSWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zaWRlYmFyQWN0aW9uLmlzT3Blbih7fSk7XHJcbiAgICB9LFxyXG4gICAgc3RvcmVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcblxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0YWIuaWQ7XHJcbiAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyh0YWIudXJsKSA6IHRhYi51cmw7XHJcblxyXG4gICAgICAgIGVudHJpZXNbaWRdID0gZW50cmllc1tpZF0gfHwgW107XHJcbiAgICAgICAgZW50cmllc1tpZF1bdXJsXSA9IGVudHJ5O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyhlbnRyeS51cmwpIDogZW50cnkudXJsO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgICAgZW50cmllc1tpZF1bdXJsXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaWdub3JlSGFzaCA/IF9IQVNITEVTUyh0YWIudXJsKSA6IHRhYi51cmw7XHJcblxyXG4gICAgICAgIGlmICh0YWJVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kLWZvci10YWInLCBlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVFbnRyeShuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdXJsIDogX0hBU0hMRVNTKHVybCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2F2ZWRVcmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmIChzYXZlZFVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbaWRdW3NhdmVkVXJsXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGhhc2hTZW5zaXRpdmUgPyB0YWIudXJsIDogX0hBU0hMRVNTKHRhYi51cmwpO1xyXG4gICAgICAgIGlmICh0YWJVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZEVudHJ5KCkge1xyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzaGxlc3NVcmwgPSBfSEFTSExFU1ModGFiLnVybCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVudHJpZXNGb3JUaGlzVGFiID0gdGhpcy5lbnRyaWVzW3RhYi5pZF07XHJcbiAgICAgICAgbGV0IGVudHJ5ID0gbnVsbDtcclxuICAgICAgICBpZiAoZW50cmllc0ZvclRoaXNUYWIpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc0ZvclRoaXNUYWJbdGFiLnVybF0gfHwgZW50cmllc0ZvclRoaXNUYWJbaGFzaGxlc3NVcmxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kLWZvci10YWInLCBlbnRyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRPcmRlcmVkTWFya3MobWFya3MpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlbnRyeTpvcmRlcmVkLW1hcmtzJywgbWFya3MpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3JlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAnc2F2ZUFjdGl2YXRpb25TdGF0ZScsXHJcbiAgICAgICd0b2dnbGU6c3luYyc6ICd0b2dnbGVTeW5jJyxcclxuXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZyc6ICdjaGFuZ2VTdHlsZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZyc6ICdjaGFuZ2VBdXRvTm90ZVNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmJnLXNldHRpbmcnOiAnY2hhbmdlQmdDb2xvcicsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZyc6ICdjaGFuZ2VNYXJrTWV0aG9kJyxcclxuICAgICAgJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJzogJ3RvZ2dsZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZyc6ICdjaGFuZ2VTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOmN0bS1zZXR0aW5nJzogJ3RvZ2dsZUN0bVNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZyc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJzogJ3RvZ2dsZUltbXV0T3B0JyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnOiAndG9nZ2xlRHJvcExvc3Nlc09wdCcsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJzogJ3RvZ2dsZUhhc2hPcHQnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZyc6ICd0b2dnbGVQcml2U2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnOiAndG9nZ2xlTm90ZU9wdCcsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICd0b2dnbGVRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnOiAndG9nZ2xlTm90aWZpY2F0aW9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZyc6ICd0b2dnbGVUQkJQb3dlclNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZyc6ICdjaGFuZ2VTb3J0T3B0JyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnOiAnY2hhbmdlVmlld09wdCcsXHJcbiAgICAgICdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnOiAndG9nZ2xlQXV0b2NzT3B0JyxcclxuXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcic6ICdyZW1vdmVDdXN0b21NYXJrZXInLFxyXG4gICAgICAnYWRkOmN1c3RvbS1tYXJrZXInOiAnYWRkQ3VzdG9tTWFya2VyJyxcclxuXHJcbiAgICAgICduYW1lZDplbnRyeSc6ICdzYXZlRW50cnknLFxyXG4gICAgICAncmVuYW1lZDplbnRyeSc6ICdzYXZlTmV3TmFtZScsXHJcbiAgICAgICdncmFudGVkOnVwZGF0ZS1lbnRyeSc6ICd1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcyc6ICdkZWxldGVFbnRyaWVzJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ3VwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbicsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJzogJ2NsZWFuRW50cmllcycsXHJcbiAgICAgICdzeW5jOmVudHJ5JzogJ3N5bmNFbnRyeScsXHJcbiAgICAgICd0YWc6ZW50cmllcyc6ICd0YWdFbnRyaWVzJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnOiAncmVtb3ZlVGFnJyxcclxuICAgICAgJ2FkZDp0YWcnOiAnYWRkVGFnJyxcclxuXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJzogJ2NoYW5nZVNCU2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJzogJ2NoYW5nZVRoZW1lU2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnOiAndXBkYXRlUGFnZU5vdGVzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlT25DaGFuZ2VkU3luYzogZmFsc2UsXHJcblxyXG4gIC8vIEFERE9OIE1FVEhPRFNcclxuICBzYXZlQWN0aXZhdGlvblN0YXRlKGFjdGl2ZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYWN0aXZlID0gYWN0aXZlOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNZTkMgTUVUSE9EU1xyXG4gIHRvZ2dsZVN5bmMoZmllbGQsIHZhbCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgZnVuY3Rpb24oc3luYykge1xyXG5cclxuICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcblxyXG4gICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICB9LCAnbG9jYWwnKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIHN5bmMgPT4ge1xyXG4gICAgICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgICAgICByZXR1cm4gc3luYztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6dG9nZ2xlLXN5bmMnLCBmaWVsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU0VUVElOR1MgTUVUSE9EU1xyXG4gIHVwZGF0ZVNldHRpbmdzKHVwZGF0ZXIsIHNldHRpbmcsIGVycm9yKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgdXBkYXRlcilcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOicgKyBzZXR0aW5nICsgJy1zZXR0aW5ncycpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBpZiAoZXJyb3IpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xyXG4gIH0sXHJcbiAgYWRkQ3VzdG9tTWFya2VyKGtleSwgc3R5bGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gIHsgc3R5bGUgfTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IG1hcmtlci5zdHlsZS5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUF1dG9Ob3RlU2V0dGluZyhrZXksIGF1dG9ub3RlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5hdXRvbm90ZSA9IGF1dG9ub3RlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvbm90ZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3RvZ2dsZV9hdXRvbm90ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNYXJrTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPSBtZXRob2Q7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmstbWV0aG9kJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbWFya19tZXRob2QnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2hvcnRjdXRTZXR0aW5nKGtleSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzFdID0gc3RhdHVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX190b2dnbGVfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2hvcnRjdXRTZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMF0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU29ydE9wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzb3J0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVZpZXdPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS52aWV3ID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ZpZXcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ3VzdG9tU2VhcmNoKHZhbHVlcykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCA9IHZhbHVlczsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3VzdG9tLXNlYXJjaCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zZWFyY2gnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ291bnRQZXJQYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkucHAgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY291bnQtcGVyLXBhZ2UnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQ3RtU2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzJdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N0bScsXHJcbiAgICAgICdlcnJvcl9zYXZlX2N0bSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXRPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaW1tdXQgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2ltbXV0b3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRHJvcExvc3Nlc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdkcm9wbG9zc2Vzb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSGFzaE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdoYXNob3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVByaXZTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ByaXZzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfcHJpdidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VOYW1pbmdPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkubmFtaW5nID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICduYW1pbmcnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9uYW1pbmcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICBzd2l0Y2hRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RpZmljYXRpb25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNaXNjU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWlzYycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVUQkJQb3dlclNldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3RiYnBvd2VyJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUF1dG9jc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvY3MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvY3MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU0JTZXR0aW5ncyh0YWIsIHVuZm9sZGVkKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50YWJzW3RhYl0udW5mb2xkZWQgPSB1bmZvbGRlZDsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG4gIGNoYW5nZVRoZW1lU2V0dGluZ3ModGhlbWUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRoZW1lID0gdGhlbWU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSElTVE9SWSBNRVRIT0RTXHJcbiAgY2xlYW5FbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGkgPSBuYW1lcy5sZW5ndGgsIG5hbWU7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllc1tuYW1lXSkgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ2xvY2FsJykgeyB0aGlzLmVtaXQoJ2NsZWFuZWQ6ZW50cmllcycpOyB9fSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2NsZWFuX2hpc3RvcnknKSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5jbGVhbkVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSk7XHJcbiAgfSxcclxuICBzYXZlRW50cnkoZW50cnkpIHtcclxuICAgIGVudHJ5Lmxvc3QgPSBbXTtcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCdzYXZlZDplbnRyeScsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5JywgJ2Vycm9yX3NhdmVfZW50cnknKSk7XHJcbiAgfSxcclxuICBzYXZlTmV3TmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV0pO1xyXG4gICAgICBlbnRyeS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdID0gZW50cnk7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1uYW1lJywgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdLCBvbGROYW1lKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgYXJlYSkge1xyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgY29uc3QgcmVjZWl2ZWRDb21wbGV0ZUVudHJ5ID0gISFlbnRyeS51cmw7XHJcbiAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAocmVjZWl2ZWRDb21wbGV0ZUVudHJ5KSB7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkuZW50cmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGVudHJ5LnN5bmNlZDtcclxuICAgICAgICAgIGZvciAobGV0IGUgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5Lmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdW2VdID0gZW50cnlbZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmICghZm91bmQpIHsgdGhpcy51cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgZW50cnkuc3luY2VkID8gJ2xvY2FsJyA6ICdzeW5jJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1vbi1zYXZlJywgZW50cnkpKTtcclxuICB9LFxyXG4gIGRlbGV0ZUVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzICYmIE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHVybCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS51cmw7XHJcbiAgICAgICAgICBoYXNoU2Vuc2l0aXZlID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyeScsIG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3MgPSBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzdG9yZWRNYXJrc0lEcyA9IFtdO1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzSURzID0gW107XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJlc3RvcmVkTWFya3MuZm9yRWFjaChtYXJrID0+IHJlc3RvcmVkTWFya3NJRHMucHVzaChtYXJrLmlkKSk7XHJcblxyXG4gICAgICAgICAgbGV0IGwgPSBvbGRMb3N0TWFya3MubGVuZ3RoLCBpZDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gb2xkTG9zdE1hcmtzW2xdLmlkO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNYXJrc0lEcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrc0lEcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvc3RNYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9sZExvc3RNYXJrc0lEcy5pbmNsdWRlcyhtYXJrLmlkKSkgb2xkTG9zdE1hcmtzLnB1c2gobWFyayk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIGNvbnN0IGFyZWFfMSA9IHZhbCA/ICdsb2NhbCcgOiAnc3luYyc7XHJcbiAgICBjb25zdCBhcmVhXzIgPSB2YWwgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGxldCBlbnRyeTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYV8xKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhXzIpXHJcblxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXN5bmMnLCBlbnRyeSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnN5bmMtZW50cnknLCBuYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGFnRW50cmllcyhuYW1lcywgdGFnKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgbmFtZXMuc3luYy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sICdzeW5jJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgICAgICBuYW1lcy5sb2NhbC5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgJ2xvY2FsJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZEVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnKTtcclxuICAgICAgaWYgKHN0b3JlZEVudHJ5LnRhZykge1xyXG4gICAgICAgIHN0b3JlZEVudHJ5LnRhZyA9IHN0b3JlZEVudHJ5LnRhZ1xyXG4gICAgICAgICAgLnJlcGxhY2UocngsICcgJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzfFxccyQvLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9LywgJyAnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgdGhpcy5hZGRUYWdUb0VudHJ5KGhpc3RvcnkuZW50cmllc1tuYW1lXSwgdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIGFkZFRhZ1RvRW50cnkoZW50cnksIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIGVudHJ5LnRhZyA9ICcnO1xyXG4gICAgZWxzZSBpZiAoIWVudHJ5LnRhZykgZW50cnkudGFnID0gdGFnO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcsICdnJyk7XHJcbiAgICAgIGlmIChlbnRyeS50YWcuc2VhcmNoKHJ4KSA9PT0gLTEpIHtcclxuICAgICAgICBlbnRyeS50YWcgKz0gJyAnICsgdGFnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcblxyXG4gIC8vIFBBR0UgTk9URSBNRVRIT0RTXHJcbiAgdXBkYXRlUGFnZU5vdGVzKHVybCwgbm90ZXMpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgncGFnZW5vdGVzJywgcGFnZW5vdGVzID0+IHtcclxuICAgICAgcGFnZW5vdGVzW3VybF0gPSBub3RlcztcclxuICAgICAgcmV0dXJuIHBhZ2Vub3RlcztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMub25TdG9yYWdlQ2hhbmdlZCkpO1xyXG4gIH0sXHJcbiAgb25TdG9yYWdlQ2hhbmdlZChjaGFuZ2VkSXRlbSkge1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnNldHRpbmdzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c2V0dGluZ3MnKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5oaXN0b3J5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6aGlzdG9yeScpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnBhZ2Vub3RlcykgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Vub3RlcycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGVUYWJFdmVudEhhbmRsZXJzJyxcclxuICAgICAgICAvLydzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICBsb2dzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWxvZ3MnLFxyXG4gICAgICBleHBvcnQ6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9ZXhwb3J0JyxcclxuICAgICAgc3luYzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zeW5jJ1xyXG4gICAgfSxcclxuICAgIHRhYkV2ZW50SGFuZGxlcnM6IHtcclxuICAgICAgb25BY3RpdmF0ZWQ6IG51bGwsXHJcbiAgICAgIG9uVXBkYXRlZDogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMudG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhtb2RlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25BY3RpdmF0ZWQgPSB0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25BY3RpdmF0ZWQgPSB0aGlzLm9uQWN0aXZhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKG9uQWN0aXZhdGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25VcGRhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25VcGRhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCA9IHRoaXMub25VcGRhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihvblVwZGF0ZWQsIHsgcHJvcGVydGllczogWydzdGF0dXMnXSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIFsnb25BY3RpdmF0ZWQnLCAnb25VcGRhdGVkJ10uZm9yRWFjaChldiA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFic1tldl0ucmVtb3ZlTGlzdGVuZXIodGhpcy50YWJFdmVudEhhbmRsZXJzW2V2XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YWJFdmVudEhhbmRsZXJzID0ge307XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfSxcclxuICAgIG9uQWN0aXZhdGVkKHRhYikge1xyXG4gICAgICB0aGlzLmVtaXQoJ2FjdGl2YXRlZDp0YWInLCB0YWIudGFiSWQsICh0YWIudXJsIHx8ICcnKSk7XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGVkKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VkLnVybCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDp1cmwnLCB0YWJJZCwgY2hhbmdlZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZDp0YWInLCB0YWJJZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbih1cmxzLCBuYW1lcykge1xyXG4gICAgICB1cmxzID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnID8gW3VybHNdIDogdXJscztcclxuICAgICAgbmFtZXMgPSB0eXBlb2YgbmFtZXMgPT09ICdzdHJpbmcnID8gW25hbWVzXSA6IG5hbWVzO1xyXG4gICAgICBsZXQgbCA9IHVybHMubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICB1cmw7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAoZnVuY3Rpb24oc2VsZiwgbCkge1xyXG4gICAgICAgICAgdXJsID0gdXJsc1tsXTtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IHVybHNbbF0gfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlY3VyaXR5V2FybmluZykgc2VsZi5lbWl0KCdmYWlsZWQ6b3Blbi10YWInKTtcclxuICAgICAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5hbWVzKSBzZWxmLmVtaXQoJ29wZW5lZDplbnRyeScsIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWVzW2xdIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSh0aGlzLCBsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5BZGRvblBhZ2UoaWQpIHtcclxuICAgICAgdGhpcy5vcGVuKHRoaXMudXJsc1tpZF0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0UGFnZSh2ZXJzaW9uLCBsb2FkUmVhc29uKSB7XHJcbiAgICAgIGlmIChsb2FkUmVhc29uICYmIGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJyB8fCBsb2FkUmVhc29uID09PSAndXBkYXRlJykgdGhpcy5vcGVuQWRkb25QYWdlKCduZXdzJyk7XHJcbiAgICB9LFxyXG4gICAgb3BlblNlYXJjaCh3b3JkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgY3VzdG9tID0gc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2gsIHVybDtcclxuICAgICAgICBpZiAoY3VzdG9tKSB1cmwgPSAnaHR0cHM6Ly8nICsgY3VzdG9tWzBdICsgd29yZCArIGN1c3RvbVsxXTtcclxuICAgICAgICBlbHNlIHVybCA9ICdodHRwczovLycgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nICsgd29yZDtcclxuICAgICAgICB0aGlzLm9wZW4odXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2luc3RhbGw6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnY2hlY2s6c3RvcmFnZSc6ICdjaGVja1N0b3JhZ2VPblN0YXJ0JyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJzogJ2ltcG9ydFN0b3JhZ2UnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3M7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykge1xyXG4gICAgICAgIHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gc2V0dGluZ3MuaGlzdG9yeTtcclxuICAgICAgICBjb25zdCBtaXNjID0gc2V0dGluZ3MubWlzYztcclxuICAgICAgICBjb25zdCBub3RlVHlwZXMgPSAncGJtTm90ZSBjaGFuZ2VkTm90ZSBlcnJvck5vdGUgc3VjY2Vzc05vdGUgdmlwTm90ZScuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMubikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLm4gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLm47XHJcbiAgICAgICAgICBtaXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgICBtaXNjLm5vdGVvbmNsaWNrID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmFycm93dXApIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd3VwID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd3VwO1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93ZG93biA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3dkb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5kWzBdKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuZFswXSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuc2IpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuc2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmNtKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuY20gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmNtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc2Nbbm90ZVR5cGVdICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RlcGxhaW52aWV3ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXBsYWludmlldyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5tYXJrbWV0aG9kKSB7XHJcbiAgICAgICAgICBtaXNjLm1hcmttZXRob2QgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MudGJicG93ZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy50YmJwb3dlciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zYikge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2I7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc2IudGhlbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRhYnMudGhlbWVzID0gZGVmYXVsdFNldHRpbmdzLnNiLnRhYnMudGhlbWVzO1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGhlbWUgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGhlbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmF1dG9jcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZScsXHJcbiAgICAgICd1cGRhdGVkOmxvZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2F2ZW9wdC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJyxcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJpZXMnLFxyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICdjdHg6bScsXHJcbiAgICAgICdjdHg6ZCcsXHJcbiAgICAgICdjdHg6YicsXHJcbiAgICAgICdjdHg6LWInLFxyXG4gICAgICAnY3R4Om4nLFxyXG4gICAgICAnY3R4OmMnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICdjaGFuZ2VkOnVybCdcclxuICAgIF0sXHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfTU9EVUxFKHtcclxuXHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gIGluaXRpYWxpemluZzogZmFsc2UsXHJcbiAgYXJlYV9zZXR0aW5nczogX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJyxcclxuICBhcmVhX2hpc3Rvcnk6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJyxcclxuICBhcmVhX3BhZ2Vub3RlczogX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCcsXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoJ2xvZ3MnKTtcclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgbGV0IHN5bmMgPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLnN5bmMgPyBsb2NhbFN0b3JhZ2Uuc3luYyA6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYztcclxuICAgICAgcmV0dXJuIHRoaXMuX3NldF9zeW5jKHN5bmMpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9LFxyXG4gIHNldChmaWVsZCwgdmFsKSB7XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX3NldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuICAgIHJldHVybiB0aGlzWydfc2V0XycgKyBmaWVsZF0odmFsKTtcclxuICB9LFxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlKC4uLmFyZ3MpO1xyXG4gIH0sXHJcblxyXG4gIGlzRW1wdHkoYXJlYSA9ICdzeW5jJykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgKCFPYmplY3Qua2V5cyhzdG9yYWdlKS5sZW5ndGggJiYgc3RvcmFnZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH0sXHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiAoc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3ByaXZzYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90YmJwb3dlcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG5cclxuICBfc2V0X3N0b3JhZ2UoYXJlYSA9IG51bGwpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZXRfc2V0dGluZ3MoYXJlYSkudGhlbigoKSA9PiB0aGlzLl9zZXRfaGlzdG9yeShhcmVhKSk7XHJcbiAgfSxcclxuICBfc2V0X3N5bmMoc3luYykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBzeW5jOiBzeW5jIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHN5bmM6IHN5bmMgfSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IHN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3NldHRpbmdzKGFyZWEgPSB0aGlzLmFyZWFfc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IHNldHRpbmdzOiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9oaXN0b3J5KGFyZWEgPSB0aGlzLmFyZWFfaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBoaXN0b3J5OiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLmhpc3RvcnkpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3ZlcnNpb24odmVyc2lvbikge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSkpO1xyXG4gIH0sXHJcbiAgX3NldF9sb2cobG9nKSB7XHJcbiAgICBpZiAobG9nLmNsZWFyKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogW10gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0X2xvZ3MoKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICBsb2dzLnB1c2gobG9nKTtcclxuICAgICAgaWYgKGxvZ3MubGVuZ3RoID4gX0dMT0JBTF9TRVRUSU5HUy5NQVhfTE9HX0VOVFJJRVMpIGxvZ3Muc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBsb2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2VudHJ5KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgaGlzdG9yeSA9IHN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMoZW50cnkubmFtZSkpIHJldHVybiB0aGlzLl91cGRhdGVfZW50cnkoZW50cnkpO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uc2V0KHsgaGlzdG9yeTogaGlzdG9yeSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF91cGRhdGUoZmllbGQsIHVwZGF0ZXIsIGFyZWEgPSB0aGlzWydhcmVhXycgKyBmaWVsZF0pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2VbZmllbGRdKSB7XHJcbiAgICAgICAgICBzdG9yYWdlW2ZpZWxkXSA9IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0VbZmllbGRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgdXBkYXRlW2ZpZWxkXSA9IHVwZGF0ZXIuY2FsbCh0aGlzLCBzdG9yYWdlW2ZpZWxkXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHVwZGF0ZSkudGhlbigoKSA9PiB1cGRhdGVbZmllbGRdKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9FWFRFTkQsIF9HRVRfQUNUSVZFX1RBQiwgX01PRFVMRSwgX1BPUlQsIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjMyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy90bTQ4LnBuZ1wiOyIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==