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
    key: "get",
    value: function get() {
      var _this3 = this;

      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

      if (this.initializing) {
        return new Promise(function (r) {
          return window.setTimeout(function () {
            return r(_this3.get(field));
          }, 10);
        });
      }

      var meth = this['_get_' + field];
      if (!meth) throw 'field ' + field + ' doesn\'t exist';

      if (!this.initialized) {
        this.initializing = true;
        this.initialized = true;
        return this.init().then(function () {
          _this3.initializing = false;
          return _this3['_get_' + field]();
        });
      }

      return this['_get_' + field]();
    }
  }, {
    key: "_get_storage",
    value: function _get_storage() {
      var _this4 = this;

      return browser.storage.local.get().then(function (localStorage) {
        return browser.storage.sync.get().then(function (syncedStorage) {
          ['version', 'logs'].forEach(function (field) {
            localStorage[field] = localStorage[field] || syncedStorage[field];
          });
          if (_this4.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
          return _this4._get_history().then(function (history) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwic2V0dGluZ3MiLCJhZGRvbiIsImF1dG9jcyIsImhhbmRsZUluamVjdGlvbnMiLCJyZWdpc3RlcmVkIiwic2FtZUhhc2hsZXNzVXJscyIsInJlbG9hZGVkIiwiaW5qZWN0Q29udGVudFNjcmlwdCIsImhpc3RvcnkiLCJtYXRjaGVzIiwiZmluZE1hdGNoaW5nRW50cmllcyIsImVudHJpZXMiLCJmaWx0ZXJNYXRjaGVzIiwibG9ja2VkIiwibG9ja2VkRW50cmllcyIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsInRhYnMiLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsImFsbEZyYW1lcyIsInJ1bkF0IiwiaW5zZXJ0Q1NTIiwiZSIsInRvU3RyaW5nIiwiaGFzaGxlc3NQYWdlVXJsIiwibm9uTG9ja2VkRW50cmllcyIsInBhZ2VVcmwiLCJlbnRyeVVybCIsImxvY2tlZEVudHJpZXNDb3VudCIsIm5vbkxvY2tlZEVudHJpZXNDb3VudCIsIm9uTmFtaW5nUmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIndpbmRvd3MiLCJnZXRMYXN0Rm9jdXNlZCIsIndpbmRvd0luZm8iLCJwcml2IiwiaW5jb2duaXRvIiwic2F2ZUluUHJpdiIsIm9uU2F2ZU5ld1JlcXVlc3QiLCJvblVwZGF0ZVJlcXVlc3QiLCJ0ZW1wU2F2ZUVudHJ5TWV0YURhdGEiLCJkYXRhIiwibmFtZSIsImFkanVzdE5hbWUiLCJuYW1pbmciLCJyZW5hbWUiLCJvbGROYW1lIiwibmV3TmFtZSIsImFyZWEiLCJzdWJzdHJpbmciLCJfR0xPQkFMX1NFVFRJTkdTIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJjb3VudGVyIiwiZ2V0RG91YmxlTmFtZUNvdW50IiwibWV0aG9kIiwidHJpbSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJleGlzdGluZ05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImwiLCJjaGVja3BvaW50IiwiaXNEb3VibGVOYW1lIiwiY2hlY2twb2ludF9zdGFydCIsImNoZWNrcG9pbnRfZW5kIiwidGVzdCIsIm5vdGlmeSIsImNvbmRpdGlvbiIsInR5cGUiLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImdldFVSTCIsIm9uU2F2ZWRFbnRyeSIsInNhdmVOb3RlIiwibWlzYyIsInBibU5vdGUiLCJ2aXBOb3RlIiwib25GYWlsZWRJbXBvcnQiLCJlcnJvcjEiLCJlcnJvcjIiLCJlcnJNZXNzYWdlMSIsImVyck1lc3NhZ2UyIiwib25JbXBvcnRFcnJvciIsIm9uSW1wb3J0U3VjY2VzcyIsImZhaWx1cmVOb3RlIiwib25TdWNjZXNzZnVsUmVzdG9yYXRpb24iLCJzdWNjZXNzTm90ZSIsIm9uU2F2ZUVycm9yIiwib25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yIiwib25EZWxldGVFcnJvciIsImVycm9yTm90ZSIsIm9uRXJyb3IiLCJwYWdlQWN0aW9uIiwiaGlkZSIsInNob3ciLCJzZXRQYW5lbCIsImlzT3BlbiIsInBhbmVsIiwic3RvcmVFbnRyeSIsImlnbm9yZUhhc2giLCJ1cGRhdGVFbnRyeSIsInRhYlVybCIsInJlbW92ZUVudHJ5Iiwic2F2ZWRVcmwiLCJzZW5kRW50cnkiLCJoYXNobGVzc1VybCIsImVudHJpZXNGb3JUaGlzVGFiIiwic2VuZE9yZGVyZWRNYXJrcyIsIm1hcmtzIiwidXBkYXRlT25DaGFuZ2VkU3luYyIsInNhdmVBY3RpdmF0aW9uU3RhdGUiLCJ0b2dnbGVTeW5jIiwiZmllbGQiLCJ2YWwiLCJzeW5jIiwic2V0QXJlYXMiLCJ1cGRhdGVTZXR0aW5ncyIsInVwZGF0ZXIiLCJzZXR0aW5nIiwiYWRkQ3VzdG9tTWFya2VyIiwia2V5Iiwic3R5bGUiLCJtYXJrZXJzIiwicmVtb3ZlQ3VzdG9tTWFya2VyIiwiY2hhbmdlU3R5bGUiLCJjaGFuZ2VCZ0NvbG9yIiwiY29sb3IiLCJtYXJrZXIiLCJzcGxpdCIsInJlcGxhY2UiLCJjaGFuZ2VBdXRvTm90ZVNldHRpbmciLCJhdXRvbm90ZSIsImNoYW5nZU1hcmtNZXRob2QiLCJtYXJrbWV0aG9kIiwidG9nZ2xlU2hvcnRjdXRTZXR0aW5nIiwiY2hhbmdlU2hvcnRjdXRTZXR0aW5nIiwidmFsdWUiLCJjaGFuZ2VTb3J0T3B0Iiwic29ydGVkIiwiY2hhbmdlVmlld09wdCIsInZpZXciLCJjaGFuZ2VDdXN0b21TZWFyY2giLCJ2YWx1ZXMiLCJjdXN0b21TZWFyY2giLCJjaGFuZ2VDb3VudFBlclBhZ2UiLCJwcCIsInRvZ2dsZUN0bVNldHRpbmciLCJjaGFuZ2VTYXZlT3B0IiwiYXV0b3NhdmUiLCJ0b2dnbGVJbW11dE9wdCIsImltbXV0IiwidG9nZ2xlRHJvcExvc3Nlc09wdCIsImRyb3BMb3NzZXMiLCJ0b2dnbGVIYXNoT3B0IiwidG9nZ2xlUHJpdlNhdmVPcHQiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVOb3RlT3B0IiwidG9nZ2xlUXVpY2tidXR0b25PcHQiLCJwcm9wIiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RpZmljYXRpb25PcHQiLCJjaGFuZ2VNaXNjU2V0dGluZyIsInRvZ2dsZVRCQlBvd2VyU2V0dGluZyIsInRvZ2dsZUF1dG9jc09wdCIsImNoYW5nZVNCU2V0dGluZ3MiLCJ1bmZvbGRlZCIsImNoYW5nZVRoZW1lU2V0dGluZ3MiLCJ0aGVtZSIsImNsZWFuRW50cmllcyIsIm5hbWVzIiwibmFtZXNfbG9jYWwiLCJsb3N0Iiwic2F2ZUVudHJ5Iiwic2F2ZU5ld05hbWUiLCJ1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbiIsInN5bmNlZCIsInJlY2VpdmVkQ29tcGxldGVFbnRyeSIsImZvdW5kIiwiaGFzT3duUHJvcGVydHkiLCJkZWxldGVFbnRyaWVzIiwicG9wIiwidXBkYXRlRW50cnlPblJlc3RvcmF0aW9uIiwiZW50cnlOYW1lIiwicmVzdG9yZWRNYXJrcyIsImxvc3RNYXJrcyIsIm9sZExvc3RNYXJrcyIsInJlc3RvcmVkTWFya3NJRHMiLCJvbGRMb3N0TWFya3NJRHMiLCJmb3JFYWNoIiwibWFyayIsInN5bmNFbnRyeSIsImFyZWFfMSIsImFyZWFfMiIsInRhZ0VudHJpZXMiLCJ0YWciLCJhZGRUYWdUb0VudHJ5IiwibG9jYWwiLCJyZW1vdmVUYWciLCJzdG9yZWRFbnRyeSIsInJ4IiwiUmVnRXhwIiwiYWRkVGFnIiwic2VhcmNoIiwidXBkYXRlUGFnZU5vdGVzIiwibm90ZXMiLCJwYWdlbm90ZXMiLCJyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlciIsInN0b3JhZ2UiLCJvbkNoYW5nZWQiLCJwcm94eSIsIm9uU3RvcmFnZUNoYW5nZWQiLCJjaGFuZ2VkSXRlbSIsInVybHMiLCJuZXdzIiwiaW5mbyIsImhlbHAiLCJjb250YWN0IiwibG9ncyIsInRhYkV2ZW50SGFuZGxlcnMiLCJvbkFjdGl2YXRlZCIsIm9uVXBkYXRlZCIsInRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMiLCJhZGRUYWJFdmVudEhhbmRsZXJzIiwiYmluZCIsInByb3BlcnRpZXMiLCJyZW1vdmVUYWJFdmVudEhhbmRsZXJzIiwiZXYiLCJzZWN1cml0eVdhcm5pbmciLCJzZWxmIiwib3BlbkFkZG9uUGFnZSIsIm9wZW5Jbml0UGFnZSIsIm9wZW5TZWFyY2giLCJ3b3JkIiwiY3VzdG9tIiwiZGVmYXVsdFNldHRpbmdzIiwiX0RFRkFVTFRfU1RPUkFHRSIsIm5vdGVUeXBlcyIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwiY20iLCJub3RlVHlwZSIsInRtdWlwb3MiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsInRiYnBvd2VyIiwidGhlbWVzIiwidXBkYXRlSGlzdG9yeSIsIm9yZGVyIiwiZml4SGlzdG9yeURhdGVzIiwibGFuZyIsImVuIiwiZGUiLCJsYXN0IiwibWVyZ2VIaXN0b3JpZXMiLCJuZXdIaXN0b3J5Iiwib2xkSGlzdG9yeSIsIm9sZEVudHJpZXMiLCJvbGROYW1lcyIsImFjY2VwdGVkRW50cmllcyIsInVybEV4aXN0cyIsIl9lbnRyaWVzIiwiYSIsInNldFN0b3JhZ2VPblVwZ3JhZGUiLCJpc0VtcHR5IiwiZW1wdHkiLCJjaGVja1N0b3JhZ2VPblN0YXJ0IiwiaW1wb3J0U3RvcmFnZSIsImltcG9ydGVkU3RvcmFnZSIsImltcG9ydFNldHRpbmdzIiwic3VjY2VzcyIsImltcG9ydEhpc3RvcnkiLCJzdWNjZXNzX3MiLCJzdWNjZXNzX2giLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wZW5FbnRyeURldGFpbFBhZ2UiLCJwb3B1cFVSTCIsImdldEN1cnJlbnQiLCJjdXJyZW50V2luZG93IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWluIiwiX1BPUlQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJPTkVPRkYiLCJDT05ORUNUSU9OIiwiX1NUT1JFIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsIl9zZXRfc3luYyIsIm1ldGgiLCJfdXBkYXRlIiwiY29uc3RydWN0b3IiLCJfZ2V0X21vZGUiLCJhcmVhX3NldHRpbmdzIiwiX2dldF9wcml2c2F2ZSIsIl9nZXRfbmFtaW5nIiwiX2dldF90YmJwb3dlciIsIl9nZXRfbWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwiX3NldF9zdG9yYWdlIiwiX3NldF9zZXR0aW5ncyIsIl9zZXRfaGlzdG9yeSIsImFyZWFfaGlzdG9yeSIsIl9zZXRfdmVyc2lvbiIsIl9zZXRfbG9nIiwiX2dldF9sb2dzIiwiTUFYX0xPR19FTlRSSUVTIiwic2hpZnQiLCJfc2V0X2VudHJ5IiwiX3VwZGF0ZV9lbnRyeSIsImNhbGwiLCJfQ09QWSIsIl9FWFRFTkQiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwieiIsInkiLCJzIiwiZG93bmxvYWQiLCJjb3B5IiwiYm1pY29uIiwib3ZlcndyaXRlIiwiY2hhbmdlZE5vdGUiLCJwcm9ncmVzc2JhciIsIm1ldGEiLCJ0YWdzIiwiYWN0aW9ucyIsImxpbmtzIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImpzX2luamVjdGlvbl9mYWlsdXJlIiwiY3NzX2luamVjdGlvbl9mYWlsdXJlIiwiZ2V0S2V5QnlWYWx1ZSIsInNyYyIsInRhcmdldCIsIkFycmF5IiwiaXNBcnJheSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImgiLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsInRvcGljcyIsImV2ZW50IiwiaGFuZGxlciIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0Iiwib2JqIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiZiIsInBvc3RNZXNzYWdlIiwicmVxIiwibGFzdEFyZyIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfcGFnZW5vdGVzIiwiciIsInNldFRpbWVvdXQiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtB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SSxPQUFPLENBQUNvVCxPQUFSLENBQWdCN0YsSUFBaEIsQ0FBcUJoTixHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQWloQixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQzdoQixPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU82WSxZQUFZLENBQUM3WSxPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBbEd5QkosZSIsImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2JhY2tncm91bmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL2ljb25zL29uMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzIucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uNjQucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvdG00OC5wbmcnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL21vZHVsZXMvZXJyb3ItbG9nZ2luZydcclxuaW1wb3J0ICcuL21vZHVsZXMvaW5qZWN0aW9uLW1hbmFnZXInXHJcbmltcG9ydCBfTk9USUZJQ0FUSU9OUyBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IF9UQUJTIGZyb20gJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgX1dJTkRPV1MgZnJvbSAnLi9tb2R1bGVzL3dpbmRvd3MnXHJcbmltcG9ydCBfU0lERUJBUlMgZnJvbSAnLi9tb2R1bGVzL3NpZGViYXJzJ1xyXG5pbXBvcnQgX05BTUVSIGZyb20gJy4vbW9kdWxlcy9uYW1lcidcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHQtbWVudSdcclxuaW1wb3J0IF9QQUdFQUNUSU9OIGZyb20gJy4vbW9kdWxlcy9wYWdlLWFjdGlvbidcclxuLy9pbXBvcnQgX0lEQiBmcm9tICcuL21vZHVsZXMvaW5kZXhlZGRiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9zdG9yZS1tYW5hZ2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd0b2dnbGVPbkltcG9ydCcsXHJcbiAgICAgICdpbml0aWFsaXplZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ21pZ3JhdGVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnY2hlY2tlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZTphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDp0YmJwb3dlci1zZXR0aW5ncyc6ICdzZXRUQkJBY3Rpb24nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZlOiB0cnVlLFxyXG4gIHZlcnNpb246ICcnLFxyXG4gIGxvYWRSZWFzb246ICcnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy52ZXJzaW9uID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uIHx8IHZlcnNpb24gIT09IGN1cnJlbnRWZXJzaW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2FkUmVhc29uID0gdGhpcy5sb2FkUmVhc29uID0gZGV0YWlscy5yZWFzb247XHJcbiAgICAgICAgICBjb25zdCBwcmV2VmVyc2lvbiA9IGRldGFpbHMucHJldmlvdXNWZXJzaW9uIHx8ICcyJztcclxuICAgICAgICAgIGlmIChsb2FkUmVhc29uICYmIChsb2FkUmVhc29uID09PSAndXBkYXRlJyB8fCBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChsb2FkUmVhc29uICsgJzphcHAnLCBwcmV2VmVyc2lvbiwgbG9hZFJlYXNvbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uID09PSBjdXJyZW50VmVyc2lvbikgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLnNldCgndmVyc2lvbicsIHRoaXMudmVyc2lvbik7XHJcblxyXG4gICAgLy9fSURCKCk7XHJcbiAgICBfTk9USUZJQ0FUSU9OUygpO1xyXG4gICAgX1RBQlMoKTtcclxuICAgIF9OQU1FUigpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1dJTkRPV1MoKTtcclxuICAgIF9TSURFQkFSUygpO1xyXG4gICAgX1BBR0VBQ1RJT04oKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYWN0aXZhdGUodHJ1ZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnc3RhcnRlZDphcHAnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9hZFJlYXNvbikpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoYWN0aXZhdGUpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gYWN0aXZhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldFRCQkFjdGlvbigpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IG1vZGUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB0aGlzLmFjdGl2YXRlKG1vZGUpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOmFkZG9uJywgbW9kZSk7XHJcbiAgfSxcclxuICB0b2dnbGVPbkltcG9ydCgpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKG9uKSB7XHJcbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHBhdGg6IG9uID8ge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb24xNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vZmYxNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29mZjMyLnBuZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRUQkJBY3Rpb24oYWRkKSB7XHJcbiAgICBpZiAodHlwZW9mIGFkZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGlmIChhZGQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd0YmJwb3dlcicpLnRoZW4oZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IHRiYkhhbmRsZXIgPSB0aGlzLnRiYkhhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICcnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRiYkhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdjb250ZW50L3RiYi1tZW51L3RiYi1tZW51Lmh0bWwnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMudGJiSGFuZGxlcik7XHJcbiAgICAgIHRoaXMudGJiSGFuZGxlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtczoge1xyXG4gICAgICBtOiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIHc6IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgZDogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBiOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgbjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBzYjogeyBjb250ZXh0czogWydhbGwnLCAndGFiJ10gfSxcclxuICAgICAgYzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogW10sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpdGVtLmlkID0gaTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2N0eF8nICsgKGkgPT09ICctYicgPyAnZGInIDogaSkpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9IChpbmZvcywgdGFiKSA9PiB0aGlzLm9uQ2xpY2soaW5mb3MsIHRhYik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMuY3JlYXRlKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZShpZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnNwbGljZSh0aGlzLmNyZWF0ZWQuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsKCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGUob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVkO1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3Nob3J0Y3V0cycpLnRoZW4oc2hvcnRjdXRzID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzaG9ydGN1dHNbaV1bMl0pIHRoaXMuY3JlYXRlKGkpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soaW5mb3MsIHRhYikge1xyXG4gICAgICBjb25zdCBpZCA9IGluZm9zLm1lbnVJdGVtSWQ7XHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgcmVwb3J0KSB7XHJcbiAgICBsZXQgbG9nLCBtc2c7XHJcbiAgICBpZiAoZXJyb3IudGltZSkge1xyXG4gICAgICBsb2cgPSBbZXJyb3IudGltZSwgZXJyb3IubWVzc2FnZSArICcgWycgKyBlcnJvci5sb2NhdGlvbiArICddJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2cgPSBbKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgX0xPR19LRVlTW2Vycm9yXSB8fCBlcnJvcl07XHJcbiAgICAgIGlmIChyZXBvcnQgJiYgdHlwZW9mIHJlcG9ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsb2cucHVzaChyZXBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihyZXBvcnQpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnLCByZXBvcnQpO1xyXG4gIH0sXHJcbiAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3VybCcpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9wYm0nKTtcclxuICB9LFxyXG4gIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdqc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH0sXHJcbiAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoYW5nZWQ6dXJsJzogJ29uVVJMQ2hhbmdlJyxcclxuICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnb25UYWJDb21wbGV0ZWQnLFxyXG4gICAgICAnY2xpY2tlZDpwYWdlLWFjdGlvbic6ICdoYW5kbGVJbmplY3Rpb25zJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JzogJ29uU2F2ZU5ld1JlcXVlc3QnLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdvblVwZGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnbmFtZTplbnRyeT8nOiAnb25OYW1pbmdSZXF1ZXN0JyxcclxuICAgICAgJ29wZW5lZDplbnRyeSc6ICd0ZW1wU2F2ZUVudHJ5TWV0YURhdGEnXHJcbiAgICB9XHJcbiAgfSxcclxuICBxdWV1ZWRGb3JUYWJDb21wbGV0ZWQ6IHt9LFxyXG4gIGluamVjdGVkU2NyaXB0czoge30sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgb25UYWJDb21wbGV0ZWQodGFiSWQpIHtcclxuICAgIGlmICh0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKTtcclxuICAgICAgZGVsZXRlIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblVSTENoYW5nZSh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSA9IGNoYW5nZWQudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgY2hhbmdlZC51cmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmFkZG9uLmF1dG9jcykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsKSB7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkID0gdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdO1xyXG4gICAgY29uc3Qgc2FtZUhhc2hsZXNzVXJscyA9IHJlZ2lzdGVyZWQgJiYgX0hBU0hMRVNTKHJlZ2lzdGVyZWQudXJsKSA9PT0gX0hBU0hMRVNTKG5ld1VybCk7XHJcbiAgICBjb25zdCByZWxvYWRlZCA9IHJlZ2lzdGVyZWQgJiYgKHJlZ2lzdGVyZWQudXJsID09PSBuZXdVcmwgfHwgIXNhbWVIYXNobGVzc1VybHMpO1xyXG5cclxuICAgIGlmICghcmVnaXN0ZXJlZCB8fCByZWxvYWRlZCkge1xyXG5cclxuICAgICAgdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCBuZXdVcmwpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCBuZXdVcmwpO1xyXG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZmlsdGVyTWF0Y2hlcyhtYXRjaGVzKTtcclxuXHJcbiAgICAgICAgICBpZiAoZW50cmllcykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJpZXM6Zm91bmQnLCB7XHJcbiAgICAgICAgICAgICAgZW50cmllcyxcclxuICAgICAgICAgICAgICByZWNlbnRseU9wZW5lZEVudHJ5OiB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnksXHJcbiAgICAgICAgICAgICAgbG9ja2VkOiAhIW1hdGNoZXMubG9ja2VkRW50cmllcy5sZW5ndGhcclxuICAgICAgICAgICAgfSwgeyB0YWI6IHRhYklkIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzYW1lSGFzaGxlc3NVcmxzICYmIHJlZ2lzdGVyZWQuZW50cnkgJiYgcmVnaXN0ZXJlZC5lbnRyeS5oYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaGFzaDpjaGFuZ2VkJywgbmV3VXJsKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBpbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwpIHtcclxuICAgIHJldHVybiBicm93c2VyLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzJyxcclxuICAgICAgYWxsRnJhbWVzOiB0cnVlLFxyXG4gICAgICBydW5BdDogJ2RvY3VtZW50X2lkbGUnXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdID0geyB1cmwgfTtcclxuICAgICAgICB0aGlzLmluc2VydENTUyh0YWJJZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zdCBtc2cgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCFtc2cuaW5jbHVkZXMoJ01pc3NpbmcgaG9zdCBwZXJtaXNzaW9uIGZvciB0aGUgdGFiJykpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5zZXJ0Q1NTKHRhYklkKSB7XHJcbiAgICBicm93c2VyLnRhYnMuaW5zZXJ0Q1NTKHRhYklkLCB7XHJcbiAgICAgIGZpbGU6ICcuLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24uY3NzJyxcclxuICAgICAgYWxsRnJhbWVzOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwpIHtcclxuICAgIGNvbnN0IGhhc2hsZXNzUGFnZVVybCA9IF9IQVNITEVTUyh1cmwpO1xyXG4gICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGNvbnN0IG5vbkxvY2tlZEVudHJpZXMgPSBbXTtcclxuICAgIGxldCBlbnRyeSwgcGFnZVVybCwgZW50cnlVcmw7XHJcblxyXG4gICAgZm9yIChsZXQgZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tlXTtcclxuICAgICAgcGFnZVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyB1cmwgOiBoYXNobGVzc1BhZ2VVcmw7XHJcbiAgICAgIGVudHJ5VXJsID0gZW50cnkuaGFzaFNlbnNpdGl2ZSA/IGVudHJ5LnVybCA6IF9IQVNITEVTUyhlbnRyeS51cmwpO1xyXG5cclxuICAgICAgaWYgKHBhZ2VVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmxvY2tlZCkgbG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICBlbHNlIG5vbkxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IGxvY2tlZEVudHJpZXMsIG5vbkxvY2tlZEVudHJpZXMgfTtcclxuICB9LFxyXG5cclxuICBmaWx0ZXJNYXRjaGVzKG1hdGNoZXMpIHtcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLmxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5ub25Mb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllc0NvdW50ID0gbG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzQ291bnQgPSBub25Mb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGxldCBlbnRyaWVzO1xyXG5cclxuICAgIGlmIChsb2NrZWRFbnRyaWVzQ291bnQgJiYgbm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnd2FybjptaXhlZC1lbnRyeS10eXBlcycpO1xyXG4gICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICBpZiAobm9uTG9ja2VkRW50cmllc0NvdW50ID4gMSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG4gIH0sXHJcblxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbXBvcnQnOiAnb25GYWlsZWRJbXBvcnQnLFxyXG4gICAgICAgICdlcnJvcjppbXBvcnQnOiAnb25JbXBvcnRFcnJvcicsXHJcbiAgICAgICAgJ2ltcG9ydGVkOnN0b3JhZ2UnOiAnb25JbXBvcnRTdWNjZXNzJyxcclxuICAgICAgICAnZXJyb3InOiAnb25FcnJvcicsXHJcbiAgICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnkoY29uZGl0aW9uLCBtZXNzYWdlLCB0eXBlKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKHNldHRpbmdzKSkge1xyXG4gICAgICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGV4dG1hcmtlcjogJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHR5cGUpLFxyXG4gICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uVXJsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdpY29ucy90bTQ4LnBuZycpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNhdmVkRW50cnkoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZWRfZW50cnknKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MucGJtTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9wYm0nKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uT3BlblRhYkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV91cmwnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkSW1wb3J0KGVycm9yMSwgZXJyb3IyKSB7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UxID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IxKTtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTIgPSBlcnJvcjIgPyAnXFxuXFxuJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMikgOiAnJztcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9mYWlsdXJlJywgZXJyTWVzc2FnZTEgKyBlcnJNZXNzYWdlMiksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydEVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfd2FybmluZycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0U3VjY2VzcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTWl4ZWRFbnRyeVR5cGVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbigpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5zdWNjZXNzTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9zdWNjZXNzJyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yKGVycm9yLCBuYW1lKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IsIG5hbWUpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2pzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNTU0luamVjdGlvbkZhaWx1cmUoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3NzX2luamVjdGlvbl9mYWlsdXJlJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzaG93J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnBhZ2VBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBhZ2UtYWN0aW9uJywgdGFiLmlkLCB0YWIudXJsKTtcclxuICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uaGlkZSh0YWIuaWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyh0YWJJZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hZGRvbi5hdXRvY3MpIHtcclxuICAgICAgICAgIGJyb3dzZXIucGFnZUFjdGlvbi5zaG93KHRhYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9HRVRfQUNUSVZFX1RBQiwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FjdGl2YXRlZDp0YWInOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2VudHJ5OmZvdW5kJzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAndXBkYXRlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6J3NlbmRFbnRyeScsXHJcbiAgICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnOiAnc2VuZE9yZGVyZWRNYXJrcydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuXHJcbiAgICBzZXRQYW5lbCh0YWJJZCwgdXJsKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuKCkudGhlbihvcGVuID0+IHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG5cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGFiLmlkO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBlbnRyaWVzW2lkXSA9IGVudHJpZXNbaWRdIHx8IFtdO1xyXG4gICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1MoZW50cnkudXJsKSA6IGVudHJ5LnVybDtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCB1cmwgaW4gZW50cmllc1tpZF0pIHtcclxuICAgICAgICAgIGlmICh1cmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGVudHJpZXNbaWRdW3VybF0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYlVybCA9IGlnbm9yZUhhc2ggPyBfSEFTSExFU1ModGFiLnVybCkgOiB0YWIudXJsO1xyXG5cclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRW50cnkobmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICAgIGNvbnN0IGVudHJ5VXJsID0gaGFzaFNlbnNpdGl2ZSA/IHVybCA6IF9IQVNITEVTUyh1cmwpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaWQgaW4gZW50cmllcykge1xyXG4gICAgICAgIGZvciAobGV0IHNhdmVkVXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAoc2F2ZWRVcmwgPT09IGVudHJ5VXJsKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlbnRyaWVzW2lkXVtzYXZlZFVybF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBoYXNoU2Vuc2l0aXZlID8gdGFiLnVybCA6IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBpZiAodGFiVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpkZWxldGVkLWZvci10YWInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNlbmRFbnRyeSgpIHtcclxuICAgICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc2hsZXNzVXJsID0gX0hBU0hMRVNTKHRhYi51cmwpO1xyXG5cclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZyc6ICd0b2dnbGVIYXNoT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnOiAndG9nZ2xlUHJpdlNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJzogJ3RvZ2dsZU5vdGVPcHQnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAndG9nZ2xlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJzogJ3RvZ2dsZU5vdGlmaWNhdGlvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnOiAndG9nZ2xlVEJCUG93ZXJTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnOiAnY2hhbmdlU29ydE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJzogJ2NoYW5nZVZpZXdPcHQnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZyc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcblxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInOiAncmVtb3ZlQ3VzdG9tTWFya2VyJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJzogJ2FkZEN1c3RvbU1hcmtlcicsXHJcblxyXG4gICAgICAnbmFtZWQ6ZW50cnknOiAnc2F2ZUVudHJ5JyxcclxuICAgICAgJ3JlbmFtZWQ6ZW50cnknOiAnc2F2ZU5ld05hbWUnLFxyXG4gICAgICAnZ3JhbnRlZDp1cGRhdGUtZW50cnknOiAndXBkYXRlRW50cnlPblBhZ2VBY3Rpb24nLFxyXG4gICAgICAnZGVsZXRlOmVudHJpZXMnOiAnZGVsZXRlRW50cmllcycsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICd1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY2xlYW46ZW50cmllcyc6ICdjbGVhbkVudHJpZXMnLFxyXG4gICAgICAnc3luYzplbnRyeSc6ICdzeW5jRW50cnknLFxyXG4gICAgICAndGFnOmVudHJpZXMnOiAndGFnRW50cmllcycsXHJcbiAgICAgICdyZW1vdmU6dGFnJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICdhZGQ6dGFnJzogJ2FkZFRhZycsXHJcblxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYic6ICdjaGFuZ2VTQlNldHRpbmdzJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSc6ICdjaGFuZ2VUaGVtZVNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJzogJ3VwZGF0ZVBhZ2VOb3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZU9uQ2hhbmdlZFN5bmM6IGZhbHNlLFxyXG5cclxuICAvLyBBRERPTiBNRVRIT0RTXHJcbiAgc2F2ZUFjdGl2YXRpb25TdGF0ZShhY3RpdmUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmFjdGl2ZSA9IGFjdGl2ZTsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTWU5DIE1FVEhPRFNcclxuICB0b2dnbGVTeW5jKGZpZWxkLCB2YWwpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIGZ1bmN0aW9uKHN5bmMpIHtcclxuICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgIHRoaXMuc2V0QXJlYXMoc3luYyk7XHJcbiAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgfSwgJ2xvY2FsJylcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBzeW5jID0+IHtcclxuICAgICAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICAgICAgfSwgJ3N5bmMnKVxyXG5cclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl90b2dnbGVfc3luYycpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6dG9nZ2xlLXN5bmMnLCBmaWVsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c3luYyB0b2dnbGVkOnN5bmMtJyArIGZpZWxkLCBmaWVsZCwgdmFsKSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU0VUVElOR1MgTUVUSE9EU1xyXG4gIHVwZGF0ZVNldHRpbmdzKHVwZGF0ZXIsIHNldHRpbmcsIGVycm9yKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgdXBkYXRlcilcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOicgKyBzZXR0aW5nICsgJy1zZXR0aW5ncycpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBpZiAoZXJyb3IpIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xyXG4gIH0sXHJcbiAgYWRkQ3VzdG9tTWFya2VyKGtleSwgc3R5bGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldID0gIHsgc3R5bGUgfTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX2FkZF9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ3VzdG9tTWFya2VyKGtleSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBkZWxldGUgc2V0dGluZ3MubWFya2Vyc1trZXldOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfcmVtb3ZlX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdHlsZShrZXksIHN0eWxlKSB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gc3R5bGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQmdDb2xvcihrZXksIGNvbG9yKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHNldHRpbmdzLm1hcmtlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlcikge1xyXG4gICAgICAgICAgbGV0IHNwbGl0ID0gbWFya2VyLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCwgc3R5bGU7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNwbGl0W2xdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IG1hcmtlci5zdHlsZS5yZXBsYWNlKC9iYWNrZ3JvdW5kLWNvbG9yOiMuezZ9LywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICAgIH0sXHJcbiAgICAgICdiZy1jb2xvcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUF1dG9Ob3RlU2V0dGluZyhrZXksIGF1dG9ub3RlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5hdXRvbm90ZSA9IGF1dG9ub3RlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvbm90ZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3RvZ2dsZV9hdXRvbm90ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNYXJrTWV0aG9kKG1ldGhvZCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPSBtZXRob2Q7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmstbWV0aG9kJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbWFya19tZXRob2QnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2hvcnRjdXRTZXR0aW5nKGtleSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzFdID0gc3RhdHVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX190b2dnbGVfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2hvcnRjdXRTZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMF0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU29ydE9wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzb3J0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVZpZXdPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS52aWV3ID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ZpZXcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ3VzdG9tU2VhcmNoKHZhbHVlcykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCA9IHZhbHVlczsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3VzdG9tLXNlYXJjaCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zZWFyY2gnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ291bnRQZXJQYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkucHAgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY291bnQtcGVyLXBhZ2UnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQ3RtU2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzJdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N0bScsXHJcbiAgICAgICdlcnJvcl9zYXZlX2N0bSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXRPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaW1tdXQgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2ltbXV0b3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRHJvcExvc3Nlc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdkcm9wbG9zc2Vzb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b3NhdmUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlSGFzaE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdoYXNob3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVByaXZTYXZlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXYgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3ByaXZzYXZlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfcHJpdidcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VOYW1pbmdPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkubmFtaW5nID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICduYW1pbmcnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9uYW1pbmcnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICBzd2l0Y2hRdWlja2J1dHRvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeVtwcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncXVpY2tidXR0b24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9kb3dubG9hZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RpZmljYXRpb25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX25vdGlmeSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VNaXNjU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWlzYycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVUQkJQb3dlclNldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3RiYnBvd2VyJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYm1pY29uJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUF1dG9jc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdhdXRvY3MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvY3MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU0JTZXR0aW5ncyh0YWIsIHVuZm9sZGVkKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50YWJzW3RhYl0udW5mb2xkZWQgPSB1bmZvbGRlZDsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG4gIGNoYW5nZVRoZW1lU2V0dGluZ3ModGhlbWUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRoZW1lID0gdGhlbWU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSElTVE9SWSBNRVRIT0RTXHJcbiAgY2xlYW5FbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGkgPSBuYW1lcy5sZW5ndGgsIG5hbWU7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllc1tuYW1lXSkgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ2xvY2FsJykgeyB0aGlzLmVtaXQoJ2NsZWFuZWQ6ZW50cmllcycpOyB9fSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2NsZWFuX2hpc3RvcnknKSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5jbGVhbkVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSk7XHJcbiAgfSxcclxuICBzYXZlRW50cnkoZW50cnkpIHtcclxuICAgIGVudHJ5Lmxvc3QgPSBbXTtcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCdzYXZlZDplbnRyeScsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5JywgJ2Vycm9yX3NhdmVfZW50cnknKSk7XHJcbiAgfSxcclxuICBzYXZlTmV3TmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV0pO1xyXG4gICAgICBlbnRyeS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdID0gZW50cnk7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1uYW1lJywgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdLCBvbGROYW1lKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgYXJlYSkge1xyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgY29uc3QgcmVjZWl2ZWRDb21wbGV0ZUVudHJ5ID0gISFlbnRyeS51cmw7XHJcbiAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAocmVjZWl2ZWRDb21wbGV0ZUVudHJ5KSB7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkuZW50cmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGVudHJ5LnN5bmNlZDtcclxuICAgICAgICAgIGZvciAobGV0IGUgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5Lmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdW2VdID0gZW50cnlbZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmICghZm91bmQpIHsgdGhpcy51cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgZW50cnkuc3luY2VkID8gJ2xvY2FsJyA6ICdzeW5jJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1vbi1zYXZlJywgZW50cnkpKTtcclxuICB9LFxyXG4gIGRlbGV0ZUVudHJpZXMobmFtZXMsIGFyZWEpIHtcclxuICAgIGlmICghbmFtZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgYXJlYSA9IHR5cGVvZiBhcmVhID09PSAnc3RyaW5nJyA/IGFyZWEgOiAnc3luYyc7XHJcblxyXG4gICAgbGV0IG5hbWVzX2xvY2FsID0gW107XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBsZXQgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICBpZiAoaGlzdG9yeS5lbnRyaWVzICYmIE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHVybCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS51cmw7XHJcbiAgICAgICAgICBoYXNoU2Vuc2l0aXZlID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyeScsIG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3MgPSBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzdG9yZWRNYXJrc0lEcyA9IFtdO1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzSURzID0gW107XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJlc3RvcmVkTWFya3MuZm9yRWFjaChtYXJrID0+IHJlc3RvcmVkTWFya3NJRHMucHVzaChtYXJrLmlkKSk7XHJcblxyXG4gICAgICAgICAgbGV0IGwgPSBvbGRMb3N0TWFya3MubGVuZ3RoLCBpZDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gb2xkTG9zdE1hcmtzW2xdLmlkO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNYXJrc0lEcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrc0lEcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvc3RNYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9sZExvc3RNYXJrc0lEcy5pbmNsdWRlcyhtYXJrLmlkKSkgb2xkTG9zdE1hcmtzLnB1c2gobWFyayk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIGNvbnN0IGFyZWFfMSA9IHZhbCA/ICdsb2NhbCcgOiAnc3luYyc7XHJcbiAgICBjb25zdCBhcmVhXzIgPSB2YWwgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGxldCBlbnRyeTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYV8xKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhXzIpXHJcblxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXN5bmMnLCBlbnRyeSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnN5bmMtZW50cnknLCBuYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGFnRW50cmllcyhuYW1lcywgdGFnKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgbmFtZXMuc3luYy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sICdzeW5jJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgICAgICBuYW1lcy5sb2NhbC5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgJ2xvY2FsJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZEVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnKTtcclxuICAgICAgaWYgKHN0b3JlZEVudHJ5LnRhZykge1xyXG4gICAgICAgIHN0b3JlZEVudHJ5LnRhZyA9IHN0b3JlZEVudHJ5LnRhZ1xyXG4gICAgICAgICAgLnJlcGxhY2UocngsICcgJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzfFxccyQvLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9LywgJyAnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgdGhpcy5hZGRUYWdUb0VudHJ5KGhpc3RvcnkuZW50cmllc1tuYW1lXSwgdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIGFkZFRhZ1RvRW50cnkoZW50cnksIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIGVudHJ5LnRhZyA9ICcnO1xyXG4gICAgZWxzZSBpZiAoIWVudHJ5LnRhZykgZW50cnkudGFnID0gdGFnO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcsICdnJyk7XHJcbiAgICAgIGlmIChlbnRyeS50YWcuc2VhcmNoKHJ4KSA9PT0gLTEpIHtcclxuICAgICAgICBlbnRyeS50YWcgKz0gJyAnICsgdGFnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcblxyXG4gIC8vIFBBR0UgTk9URSBNRVRIT0RTXHJcbiAgdXBkYXRlUGFnZU5vdGVzKHVybCwgbm90ZXMpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgncGFnZW5vdGVzJywgcGFnZW5vdGVzID0+IHtcclxuICAgICAgcGFnZW5vdGVzW3VybF0gPSBub3RlcztcclxuICAgICAgcmV0dXJuIHBhZ2Vub3RlcztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMub25TdG9yYWdlQ2hhbmdlZCkpO1xyXG4gIH0sXHJcbiAgb25TdG9yYWdlQ2hhbmdlZChjaGFuZ2VkSXRlbSkge1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnNldHRpbmdzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c2V0dGluZ3MnKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5oaXN0b3J5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6aGlzdG9yeScpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnBhZ2Vub3RlcykgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Vub3RlcycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGVUYWJFdmVudEhhbmRsZXJzJyxcclxuICAgICAgICAvLydzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICBsb2dzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWxvZ3MnLFxyXG4gICAgICBleHBvcnQ6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9ZXhwb3J0JyxcclxuICAgICAgc3luYzogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zeW5jJ1xyXG4gICAgfSxcclxuICAgIHRhYkV2ZW50SGFuZGxlcnM6IHtcclxuICAgICAgb25BY3RpdmF0ZWQ6IG51bGwsXHJcbiAgICAgIG9uVXBkYXRlZDogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMudG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhtb2RlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25BY3RpdmF0ZWQgPSB0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25BY3RpdmF0ZWQgPSB0aGlzLm9uQWN0aXZhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKG9uQWN0aXZhdGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25VcGRhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgb25VcGRhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCA9IHRoaXMub25VcGRhdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihvblVwZGF0ZWQsIHsgcHJvcGVydGllczogWydzdGF0dXMnXSB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgIFsnb25BY3RpdmF0ZWQnLCAnb25VcGRhdGVkJ10uZm9yRWFjaChldiA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFic1tldl0ucmVtb3ZlTGlzdGVuZXIodGhpcy50YWJFdmVudEhhbmRsZXJzW2V2XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YWJFdmVudEhhbmRsZXJzID0ge307XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlVGFiRXZlbnRIYW5kbGVycyhvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVGFiRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfSxcclxuICAgIG9uQWN0aXZhdGVkKHRhYikge1xyXG4gICAgICB0aGlzLmVtaXQoJ2FjdGl2YXRlZDp0YWInLCB0YWIudGFiSWQsICh0YWIudXJsIHx8ICcnKSk7XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGVkKHRhYklkLCBjaGFuZ2VkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VkLnVybCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDp1cmwnLCB0YWJJZCwgY2hhbmdlZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY2hhbmdlZC5zdGF0dXMgJiYgY2hhbmdlZC5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZDp0YWInLCB0YWJJZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbih1cmxzLCBuYW1lcykge1xyXG4gICAgICB1cmxzID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnID8gW3VybHNdIDogdXJscztcclxuICAgICAgbmFtZXMgPSB0eXBlb2YgbmFtZXMgPT09ICdzdHJpbmcnID8gW25hbWVzXSA6IG5hbWVzO1xyXG4gICAgICBsZXQgbCA9IHVybHMubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICB1cmw7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAoZnVuY3Rpb24oc2VsZiwgbCkge1xyXG4gICAgICAgICAgdXJsID0gdXJsc1tsXTtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IHVybHNbbF0gfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlY3VyaXR5V2FybmluZykgc2VsZi5lbWl0KCdmYWlsZWQ6b3Blbi10YWInKTtcclxuICAgICAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5hbWVzKSBzZWxmLmVtaXQoJ29wZW5lZDplbnRyeScsIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWVzW2xdIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSh0aGlzLCBsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5BZGRvblBhZ2UoaWQpIHtcclxuICAgICAgdGhpcy5vcGVuKHRoaXMudXJsc1tpZF0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0UGFnZSh2ZXJzaW9uLCBsb2FkUmVhc29uKSB7XHJcbiAgICAgIGlmIChsb2FkUmVhc29uICYmIGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJyB8fCBsb2FkUmVhc29uID09PSAndXBkYXRlJykgdGhpcy5vcGVuQWRkb25QYWdlKCduZXdzJyk7XHJcbiAgICB9LFxyXG4gICAgb3BlblNlYXJjaCh3b3JkKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgY3VzdG9tID0gc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2gsIHVybDtcclxuICAgICAgICBpZiAoY3VzdG9tKSB1cmwgPSAnaHR0cHM6Ly8nICsgY3VzdG9tWzBdICsgd29yZCArIGN1c3RvbVsxXTtcclxuICAgICAgICBlbHNlIHVybCA9ICdodHRwczovLycgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nICsgd29yZDtcclxuICAgICAgICB0aGlzLm9wZW4odXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2luc3RhbGw6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnY2hlY2s6c3RvcmFnZSc6ICdjaGVja1N0b3JhZ2VPblN0YXJ0JyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJzogJ2ltcG9ydFN0b3JhZ2UnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3M7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykge1xyXG4gICAgICAgIHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gc2V0dGluZ3MuaGlzdG9yeTtcclxuICAgICAgICBjb25zdCBtaXNjID0gc2V0dGluZ3MubWlzYztcclxuICAgICAgICBjb25zdCBub3RlVHlwZXMgPSAncGJtTm90ZSBjaGFuZ2VkTm90ZSBlcnJvck5vdGUgc3VjY2Vzc05vdGUgdmlwTm90ZScuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMubikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLm4gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLm47XHJcbiAgICAgICAgICBtaXNjLm5vdGVpY29uID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICAgICAgICBtaXNjLm5vdGVvbmNsaWNrID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmFycm93dXApIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd3VwID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd3VwO1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93ZG93biA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3dkb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5kWzBdKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuZFswXSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuc2IpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuc2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmNtKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuY20gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmNtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc2Nbbm90ZVR5cGVdICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RlcGxhaW52aWV3ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXBsYWludmlldyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5tYXJrbWV0aG9kKSB7XHJcbiAgICAgICAgICBtaXNjLm1hcmttZXRob2QgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MudGJicG93ZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy50YmJwb3dlciA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zYikge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2I7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc2IudGhlbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRhYnMudGhlbWVzID0gZGVmYXVsdFNldHRpbmdzLnNiLnRhYnMudGhlbWVzO1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGhlbWUgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGhlbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmFkZG9uLmF1dG9jcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcpO1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfSxcclxuICB1cGRhdGVIaXN0b3J5KGhpc3RvcnkpIHtcclxuICAgIGRlbGV0ZSBoaXN0b3J5Lm9yZGVyO1xyXG5cclxuICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICBlbnRyeTtcclxuXHJcbiAgICBpZiAoIWwpIHJldHVybiBoaXN0b3J5O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgZW50cnkgPSB0aGlzLmZpeEhpc3RvcnlEYXRlcyhlbnRyaWVzW25hbWVzW2xdXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHR5cGVvZiBlbnRyeS5zeW5jZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgfSxcclxuICBmaXhIaXN0b3J5RGF0ZXMoZW50cnkpIHtcclxuICAgIGNvbnN0IGxhbmcgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJyk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5LmZpcnN0ICE9PSAnbnVtYmVyJykgZW50cnkuZmlyc3QgPSBuZXcgRGF0ZSgoZW50cnkuZmlyc3RbbGFuZ10gfHwgZW50cnkuZmlyc3QuZW4gfHwgZW50cnkuZmlyc3QuZGUgfHwgZW50cnkuZmlyc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkubGFzdCAhPT0gJ251bWJlcicpIGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgoZW50cnkubGFzdFtsYW5nXSB8fCBlbnRyeS5sYXN0LmVuIHx8IGVudHJ5Lmxhc3QuZGUgfHwgZW50cnkubGFzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcbiAgbWVyZ2VIaXN0b3JpZXMobmV3SGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4ob2xkSGlzdG9yeSA9PiB7XHJcblxyXG4gICAgICBsZXQgZW50cmllcyA9IG5ld0hpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMoZW50cmllcyksXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBvbGRFbnRyaWVzID0gb2xkSGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgb2xkTmFtZXMgPSBPYmplY3Qua2V5cyhvbGRFbnRyaWVzKSxcclxuICAgICAgICAgIGFjY2VwdGVkRW50cmllcyA9IHt9LFxyXG4gICAgICAgICAgbmFtZSwgZW50cnksIHVybCwgdXJsRXhpc3RzLCBlO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgdXJsRXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghb2xkTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIHVybCA9IGVudHJ5LnVybDtcclxuXHJcbiAgICAgICAgICBmb3IgKGUgaW4gb2xkRW50cmllcykge1xyXG4gICAgICAgICAgICBpZiAob2xkRW50cmllc1tlXS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgIHVybEV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdXJsRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN5bmNlZCA9IGFyZWEgPT09ICdzeW5jJztcclxuICAgICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYWNjZXB0ZWRFbnRyaWVzKSB7XHJcbiAgICAgICAgICBfZW50cmllc1thXSA9IGFjY2VwdGVkRW50cmllc1thXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgIH0sIGFyZWEpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0U3RvcmFnZU9uVXBncmFkZShwcmV2VmVyc2lvbiA9ICcyJywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJywgcHJldlZlcnNpb24pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3N0b3JhZ2VfbWlncmF0aW9uJywgZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY2hlY2tTdG9yYWdlT25TdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ3N5bmMnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdzeW5jJyk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJyk7XHJcbiAgICB9KSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSk7XHJcbiAgfSxcclxuICBpbXBvcnRTdG9yYWdlKGltcG9ydGVkU3RvcmFnZSwgYXJlYSkge1xyXG4gICAgbGV0IHNldHRpbmdzID0gaW1wb3J0ZWRTdG9yYWdlLnNldHRpbmdzLFxyXG4gICAgICAgIGhpc3RvcnkgPSBpbXBvcnRlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcnkgJiYgIXNldHRpbmdzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2VtcHR5Jyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFoaXN0b3J5KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKS50aGVuKHN1Y2Nlc3NfcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkudGhlbihzdWNjZXNzX2ggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3Nfcykge1xyXG4gICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzX3MgPT09ICdvdXRkYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X291dGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc19oKSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpzZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6c2V0dGluZ3MgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGltcG9ydFNldHRpbmdzKHNldHRpbmdzLCBhcmVhKSB7XHJcbiAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb3V0ZGF0ZWQnKTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHRoaXMudXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfSxcclxuICBpbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiB0aGlzLm1lcmdlSGlzdG9yaWVzKHRoaXMudXBkYXRlSGlzdG9yeShoaXN0b3J5LCB0cnVlKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi91dGlscydcclxuXHJcbm5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZScsXHJcbiAgICAgICd1cGRhdGVkOmxvZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2F2ZW9wdC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJyxcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJpZXMnLFxyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICdjdHg6bScsXHJcbiAgICAgICdjdHg6ZCcsXHJcbiAgICAgICdjdHg6YicsXHJcbiAgICAgICdjdHg6LWInLFxyXG4gICAgICAnY3R4Om4nLFxyXG4gICAgICAnY3R4OmMnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICdjaGFuZ2VkOnVybCdcclxuICAgIF0sXHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1NUT1JFfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLnJlbW92ZSgnbG9ncycpO1xyXG5cclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgc3luYyA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2Uuc3luYyA/IGxvY2FsU3RvcmFnZS5zeW5jIDogX0RFRkFVTFRfU1RPUkFHRS5zeW5jO1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2V0X3N5bmMoc3luYyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXQoZmllbGQsIHZhbCkge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19zZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcbiAgICByZXR1cm4gdGhpc1snX3NldF8nICsgZmllbGRdKHZhbCk7XHJcbiAgfSxcclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICBpc0VtcHR5KGFyZWEgPSAnc3luYycpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICghT2JqZWN0LmtleXMoc3RvcmFnZSkubGVuZ3RoICYmIHN0b3JhZ2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcml2c2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdGJicG93ZXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuXHJcbiAgX3NldF9zdG9yYWdlKGFyZWEgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0X3NldHRpbmdzKGFyZWEpLnRoZW4oKCkgPT4gdGhpcy5fc2V0X2hpc3RvcnkoYXJlYSkpO1xyXG4gIH0sXHJcbiAgX3NldF9zeW5jKHN5bmMpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgc3luYzogc3luYyB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeW5jOiBzeW5jIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldEFyZWFzKHN5bmMpKTtcclxuICB9LFxyXG4gIF9zZXRfc2V0dGluZ3MoYXJlYSA9IHRoaXMuYXJlYV9zZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgc2V0dGluZ3M6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2hpc3RvcnkoYXJlYSA9IHRoaXMuYXJlYV9oaXN0b3J5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IGhpc3Rvcnk6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0UuaGlzdG9yeSkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfdmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KSk7XHJcbiAgfSxcclxuICBfc2V0X2xvZyhsb2cpIHtcclxuICAgIGlmIChsb2cuY2xlYXIpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBbXSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9nZXRfbG9ncygpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgIGxvZ3MucHVzaChsb2cpO1xyXG4gICAgICBpZiAobG9ncy5sZW5ndGggPiBfR0xPQkFMX1NFVFRJTkdTLk1BWF9MT0dfRU5UUklFUykgbG9ncy5zaGlmdCgpO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IGxvZ3MgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfZW50cnkoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBoaXN0b3J5ID0gc3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmNsdWRlcyhlbnRyeS5uYW1lKSkgcmV0dXJuIHRoaXMuX3VwZGF0ZV9lbnRyeShlbnRyeSk7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5zZXQoeyBoaXN0b3J5OiBoaXN0b3J5IH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3VwZGF0ZShmaWVsZCwgdXBkYXRlciwgYXJlYSA9IHRoaXNbJ2FyZWFfJyArIGZpZWxkXSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmICghc3RvcmFnZVtmaWVsZF0pIHtcclxuICAgICAgICAgIHN0b3JhZ2VbZmllbGRdID0gX0NPUFkoX0RFRkFVTFRfU1RPUkFHRVtmaWVsZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cGRhdGUgPSB7fTtcclxuICAgICAgICB1cGRhdGVbZmllbGRdID0gdXBkYXRlci5jYWxsKHRoaXMsIHN0b3JhZ2VbZmllbGRdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQodXBkYXRlKS50aGVuKCgpID0+IHVwZGF0ZVtmaWVsZF0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0VYVEVORCwgX0dFVF9BQ1RJVkVfVEFCLCBfTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcbiAganNfaW5qZWN0aW9uX2ZhaWx1cmU6IDM3LFxyXG4gIGNzc19pbmplY3Rpb25fZmFpbHVyZTogMzgsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24xOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb24zNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb242NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvdG00OC5wbmdcIjsiLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKCk7XHJcbiAgfVxyXG4gIGV4dGVuZChldmVudHMpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cyk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cyB8fCB0aGlzLmV2ZW50cztcclxuICAgIGxldCBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==