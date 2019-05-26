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
      console.log('injected:', tabId, url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93aW5kb3dzLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL2ljb25zL29mZjE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24xOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb24zNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb242NC5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdG00OC5wbmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImFjdGl2ZSIsInZlcnNpb24iLCJsb2FkUmVhc29uIiwiYXV0b2luaXQiLCJjdXJyZW50VmVyc2lvbiIsImJyb3dzZXIiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsIl9TVE9SQUdFIiwiZ2V0IiwidGhlbiIsInJlYXNvbiIsInByZXZWZXJzaW9uIiwicHJldmlvdXNWZXJzaW9uIiwiZW1pdCIsInN0YXJ0Iiwic2V0IiwibW9kZSIsImFjdGl2YXRlIiwidG9nZ2xlQnJvd3NlckFjdGlvbkljb24iLCJzZXRUQkJBY3Rpb24iLCJ0b2dnbGUiLCJ0b2dnbGVPbkltcG9ydCIsIm9uIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiYWRkIiwiYWRkVEJCSGFuZGxlciIsInJlbW92ZVRCQkhhbmRsZXIiLCJlbmFibGVkIiwidGJiSGFuZGxlciIsInNldFBvcHVwIiwicG9wdXAiLCJvbkNsaWNrZWQiLCJyZW1vdmVMaXN0ZW5lciIsIml0ZW1zIiwibSIsImNvbnRleHRzIiwidyIsImQiLCJiIiwibiIsInNiIiwiYyIsImNyZWF0ZWQiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9uY2xpY2siLCJpbmZvcyIsInRhYiIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJjcmVhdGUiLCJpbmNsdWRlcyIsIm1lbnVzIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZW1vdmVBbGwiLCJsZW5ndGgiLCJzaG9ydGN1dHMiLCJtZW51SXRlbUlkIiwic2VsZWN0aW9uVGV4dCIsInNpZGViYXJBY3Rpb24iLCJvcGVuIiwibG9nIiwiZXJyb3IiLCJyZXBvcnQiLCJtc2ciLCJ0aW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwiRGF0ZSIsImdldFRpbWUiLCJfTE9HX0tFWVMiLCJjbGVhciIsIm9uTWl4ZWRFbnRyeVR5cGVzIiwib25NdWx0aXBsZVVubG9ja2VkRW50cmllcyIsIm9uRmFpbGVkUmVzdG9yYXRpb24iLCJvbk9wZW5UYWJGYWlsdXJlIiwib25GYWlsZWRQQk0iLCJvblNjcmlwdEluamVjdGlvbkZhaWx1cmUiLCJvbkNTU0luamVjdGlvbkZhaWx1cmUiLCJxdWV1ZWRGb3JUYWJDb21wbGV0ZWQiLCJpbmplY3RlZFNjcmlwdHMiLCJyZWNlbnRseU9wZW5lZEVudHJ5Iiwib25UYWJDb21wbGV0ZWQiLCJ0YWJJZCIsImF0dGVtcHRJbmplY3Rpb25zIiwib25VUkxDaGFuZ2UiLCJjaGFuZ2VkIiwic3RhdHVzIiwidXJsIiwibmV3VXJsIiwic2V0dGluZ3MiLCJhZGRvbiIsImF1dG9jcyIsImhhbmRsZUluamVjdGlvbnMiLCJyZWdpc3RlcmVkIiwic2FtZUhhc2hsZXNzVXJscyIsInJlbG9hZGVkIiwiaW5qZWN0Q29udGVudFNjcmlwdCIsImhpc3RvcnkiLCJtYXRjaGVzIiwiZmluZE1hdGNoaW5nRW50cmllcyIsImVudHJpZXMiLCJmaWx0ZXJNYXRjaGVzIiwibG9ja2VkIiwibG9ja2VkRW50cmllcyIsImVudHJ5IiwiaGFzaFNlbnNpdGl2ZSIsInRhYnMiLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsImFsbEZyYW1lcyIsInJ1bkF0IiwiY29uc29sZSIsImluc2VydENTUyIsImUiLCJ0b1N0cmluZyIsImhhc2hsZXNzUGFnZVVybCIsIm5vbkxvY2tlZEVudHJpZXMiLCJwYWdlVXJsIiwiZW50cnlVcmwiLCJsb2NrZWRFbnRyaWVzQ291bnQiLCJub25Mb2NrZWRFbnRyaWVzQ291bnQiLCJvbk5hbWluZ1JlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJ3aW5kb3dJbmZvIiwicHJpdiIsImluY29nbml0byIsInNhdmVJblByaXYiLCJvblNhdmVOZXdSZXF1ZXN0Iiwib25VcGRhdGVSZXF1ZXN0IiwidGVtcFNhdmVFbnRyeU1ldGFEYXRhIiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9ucyIsImljb25VcmwiLCJnZXRVUkwiLCJvblNhdmVkRW50cnkiLCJzYXZlTm90ZSIsIm1pc2MiLCJwYm1Ob3RlIiwidmlwTm90ZSIsIm9uRmFpbGVkSW1wb3J0IiwiZXJyb3IxIiwiZXJyb3IyIiwiZXJyTWVzc2FnZTEiLCJlcnJNZXNzYWdlMiIsIm9uSW1wb3J0RXJyb3IiLCJvbkltcG9ydFN1Y2Nlc3MiLCJmYWlsdXJlTm90ZSIsIm9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uIiwic3VjY2Vzc05vdGUiLCJvblNhdmVFcnJvciIsIm9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvciIsIm9uRGVsZXRlRXJyb3IiLCJlcnJvck5vdGUiLCJvbkVycm9yIiwicGFnZUFjdGlvbiIsImhpZGUiLCJzaG93Iiwic2V0UGFuZWwiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsInNldEFyZWFzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwidXBkYXRlRW50cnlPblBhZ2VBY3Rpb24iLCJzeW5jZWQiLCJyZWNlaXZlZENvbXBsZXRlRW50cnkiLCJmb3VuZCIsImhhc093blByb3BlcnR5IiwiZGVsZXRlRW50cmllcyIsInBvcCIsInVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbiIsImVudHJ5TmFtZSIsInJlc3RvcmVkTWFya3MiLCJsb3N0TWFya3MiLCJvbGRMb3N0TWFya3MiLCJyZXN0b3JlZE1hcmtzSURzIiwib2xkTG9zdE1hcmtzSURzIiwiZm9yRWFjaCIsIm1hcmsiLCJzeW5jRW50cnkiLCJhcmVhXzEiLCJhcmVhXzIiLCJ0YWdFbnRyaWVzIiwidGFnIiwiYWRkVGFnVG9FbnRyeSIsImxvY2FsIiwicmVtb3ZlVGFnIiwic3RvcmVkRW50cnkiLCJyeCIsIlJlZ0V4cCIsImFkZFRhZyIsInNlYXJjaCIsInVwZGF0ZVBhZ2VOb3RlcyIsIm5vdGVzIiwicGFnZW5vdGVzIiwicmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIiLCJzdG9yYWdlIiwib25DaGFuZ2VkIiwicHJveHkiLCJvblN0b3JhZ2VDaGFuZ2VkIiwiY2hhbmdlZEl0ZW0iLCJ1cmxzIiwibmV3cyIsImluZm8iLCJoZWxwIiwiY29udGFjdCIsImxvZ3MiLCJ0YWJFdmVudEhhbmRsZXJzIiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJ0b2dnbGVUYWJFdmVudEhhbmRsZXJzIiwiYWRkVGFiRXZlbnRIYW5kbGVycyIsImJpbmQiLCJwcm9wZXJ0aWVzIiwicmVtb3ZlVGFiRXZlbnRIYW5kbGVycyIsImV2Iiwic2VjdXJpdHlXYXJuaW5nIiwic2VsZiIsIm9wZW5BZGRvblBhZ2UiLCJvcGVuSW5pdFBhZ2UiLCJvcGVuU2VhcmNoIiwid29yZCIsImN1c3RvbSIsImRlZmF1bHRTZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJub3RlVHlwZXMiLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwiYXJyb3d1cCIsImFycm93ZG93biIsImNtIiwibm90ZVR5cGUiLCJ0bXVpcG9zIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJ0YmJwb3dlciIsInRoZW1lcyIsInVwZGF0ZUhpc3RvcnkiLCJvcmRlciIsImZpeEhpc3RvcnlEYXRlcyIsImxhbmciLCJlbiIsImRlIiwibGFzdCIsIm1lcmdlSGlzdG9yaWVzIiwibmV3SGlzdG9yeSIsIm9sZEhpc3RvcnkiLCJvbGRFbnRyaWVzIiwib2xkTmFtZXMiLCJhY2NlcHRlZEVudHJpZXMiLCJ1cmxFeGlzdHMiLCJfZW50cmllcyIsImEiLCJzZXRTdG9yYWdlT25VcGdyYWRlIiwiaXNFbXB0eSIsImVtcHR5IiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcGVuRW50cnlEZXRhaWxQYWdlIiwicG9wdXBVUkwiLCJnZXRDdXJyZW50IiwiY3VycmVudFdpbmRvdyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1pbiIsIl9QT1JUIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsIl9TVE9SRSIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJfc2V0X3N5bmMiLCJtZXRoIiwiX3VwZGF0ZSIsImNvbnN0cnVjdG9yIiwiX2dldF9tb2RlIiwiYXJlYV9zZXR0aW5ncyIsIl9nZXRfcHJpdnNhdmUiLCJfZ2V0X25hbWluZyIsIl9nZXRfdGJicG93ZXIiLCJfZ2V0X21hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsIl9zZXRfc3RvcmFnZSIsIl9zZXRfc2V0dGluZ3MiLCJfc2V0X2hpc3RvcnkiLCJhcmVhX2hpc3RvcnkiLCJfc2V0X3ZlcnNpb24iLCJfc2V0X2xvZyIsIl9nZXRfbG9ncyIsIk1BWF9MT0dfRU5UUklFUyIsInNoaWZ0IiwiX3NldF9lbnRyeSIsIl91cGRhdGVfZW50cnkiLCJjYWxsIiwiX0NPUFkiLCJfRVhURU5EIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsInoiLCJ5IiwicyIsImRvd25sb2FkIiwiY29weSIsImJtaWNvbiIsIm92ZXJ3cml0ZSIsImNoYW5nZWROb3RlIiwicHJvZ3Jlc3NiYXIiLCJtZXRhIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJnZXRLZXlCeVZhbHVlIiwic3JjIiwidGFyZ2V0IiwiQXJyYXkiLCJpc0FycmF5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiaCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwidG9waWNzIiwiZXZlbnQiLCJoYW5kbGVyIiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvYmoiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJmIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9wYWdlbm90ZXMiLCJyIiwic2V0VGltZW91dCIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBQ0E7Ozs7QUFIQTtBQUtBLElBQUlBLGNBQUosQ0FBWTtBQUNWQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsMkJBQXFCLGdCQURsQjtBQUVILDZCQUF1QixPQUZwQjtBQUdILDBCQUFvQixPQUhqQjtBQUlILHlCQUFtQixPQUpoQjtBQUtILHNCQUFnQixRQUxiO0FBTUgsbUNBQTZCO0FBTjFCO0FBREMsR0FERTtBQVlWQyxRQUFNLEVBQUUsSUFaRTtBQWFWQyxTQUFPLEVBQUUsRUFiQztBQWNWQyxZQUFVLEVBQUUsRUFkRjtBQWdCVkMsVUFoQlUsc0JBZ0JDO0FBQUE7O0FBQ1QsUUFBTUMsY0FBYyxHQUFHLEtBQUtILE9BQUwsR0FBZUksT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxXQUFoQixHQUE4Qk4sT0FBcEU7QUFFQUksV0FBTyxDQUFDQyxPQUFSLENBQWdCRSxXQUFoQixDQUE0QkMsV0FBNUIsQ0FBd0MsVUFBQUMsT0FBTyxFQUFJO0FBQ2pEQywyQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFaLE9BQU8sRUFBSTtBQUN0QyxZQUFJLENBQUNBLE9BQUQsSUFBWUEsT0FBTyxLQUFLRyxjQUE1QixFQUE0QztBQUMxQyxjQUFNRixVQUFVLEdBQUcsS0FBSSxDQUFDQSxVQUFMLEdBQWtCUSxPQUFPLENBQUNJLE1BQTdDO0FBQ0EsY0FBTUMsV0FBVyxHQUFHTCxPQUFPLENBQUNNLGVBQVIsSUFBMkIsR0FBL0M7O0FBQ0EsY0FBSWQsVUFBVSxLQUFLQSxVQUFVLEtBQUssUUFBZixJQUEyQkEsVUFBVSxLQUFLLFNBQS9DLENBQWQsRUFBeUU7QUFDdkUsaUJBQUksQ0FBQ2UsSUFBTCxDQUFVZixVQUFVLEdBQUcsTUFBdkIsRUFBK0JhLFdBQS9CLEVBQTRDYixVQUE1QztBQUNELFdBRkQsTUFFTztBQUNMLGlCQUFJLENBQUNlLElBQUwsQ0FBVSxlQUFWO0FBQ0Q7QUFDRjtBQUNGLE9BVkQ7QUFXRCxLQVpEOztBQWFBTix5QkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFaLE9BQU8sRUFBSTtBQUN0QyxVQUFJQSxPQUFPLElBQUlBLE9BQU8sS0FBS0csY0FBM0IsRUFBMkMsS0FBSSxDQUFDYSxJQUFMLENBQVUsZUFBVjtBQUM1QyxLQUZEO0FBR0QsR0FuQ1M7QUFxQ1ZDLE9BckNVLG1CQXFDRjtBQUFBOztBQUNOUCx5QkFBU1EsR0FBVCxDQUFhLFNBQWIsRUFBd0IsS0FBS2xCLE9BQTdCLEVBRE0sQ0FHTjs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFVLHlCQUFTQyxHQUFULENBQWEsTUFBYixFQUFxQkMsSUFBckIsQ0FBMEIsVUFBQU8sSUFBSTtBQUFBLGFBQUksTUFBSSxDQUFDQyxRQUFMLENBQWNELElBQWQsQ0FBSjtBQUFBLEtBQTlCLFdBQ1M7QUFBQSxhQUFNLE1BQUksQ0FBQ0MsUUFBTCxDQUFjLElBQWQsQ0FBTjtBQUFBLEtBRFQsRUFFR1IsSUFGSCxDQUVRO0FBQUEsYUFBTSxNQUFJLENBQUNJLElBQUwsQ0FBVSxhQUFWLEVBQXlCLE1BQUksQ0FBQ2hCLE9BQTlCLEVBQXVDLE1BQUksQ0FBQ0MsVUFBNUMsQ0FBTjtBQUFBLEtBRlI7QUFHRCxHQXBEUztBQXFEVm1CLFVBckRVLG9CQXFEREEsU0FyREMsRUFxRFM7QUFDakIsUUFBTXJCLE1BQU0sR0FBRyxLQUFLQSxNQUFMLEdBQWNxQixTQUE3QjtBQUNBLFNBQUtDLHVCQUFMLENBQTZCdEIsTUFBN0I7QUFDQSxTQUFLdUIsWUFBTDtBQUNELEdBekRTO0FBMERWQyxRQTFEVSxvQkEwREQ7QUFDUCxRQUFJSixJQUFJLEdBQUcsQ0FBQyxLQUFLcEIsTUFBakI7QUFDQSxTQUFLcUIsUUFBTCxDQUFjRCxJQUFkO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLGVBQVYsRUFBMkJHLElBQTNCO0FBQ0QsR0E5RFM7QUErRFZLLGdCQS9EVSw0QkErRE87QUFBQTs7QUFDZmQseUJBQVNDLEdBQVQsQ0FBYSxNQUFiLEVBQXFCQyxJQUFyQixDQUEwQixVQUFBTyxJQUFJO0FBQUEsYUFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBY0QsSUFBZCxDQUFKO0FBQUEsS0FBOUI7QUFDRCxHQWpFUztBQWtFVkUseUJBbEVVLG1DQWtFY0ksRUFsRWQsRUFrRWtCO0FBQzFCckIsV0FBTyxDQUFDc0IsYUFBUixDQUFzQkMsT0FBdEIsQ0FBOEI7QUFDNUJDLFVBQUksRUFBRUgsRUFBRSxHQUFHO0FBQ1QsWUFBSSxtQkFESztBQUVULFlBQUksbUJBRks7QUFHVCxZQUFJO0FBSEssT0FBSCxHQUlKO0FBQ0YsWUFBSSxvQkFERjtBQUVGLFlBQUksb0JBRkY7QUFHRixZQUFJO0FBSEY7QUFMd0IsS0FBOUI7QUFXRCxHQTlFUztBQStFVkgsY0EvRVUsd0JBK0VHTyxHQS9FSCxFQStFUTtBQUFBOztBQUNoQixRQUFJLE9BQU9BLEdBQVAsS0FBZSxTQUFuQixFQUE4QjtBQUM1QixVQUFJQSxHQUFKLEVBQVMsS0FBS0MsYUFBTCxHQUFULEtBQ0ssS0FBS0MsZ0JBQUw7QUFDTixLQUhELE1BR087QUFDTHJCLDJCQUFTQyxHQUFULENBQWEsVUFBYixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQW9CLE9BQU8sRUFBSTtBQUN2QyxZQUFJQSxPQUFKLEVBQWEsTUFBSSxDQUFDRixhQUFMLEdBQWIsS0FDSyxNQUFJLENBQUNDLGdCQUFMO0FBQ04sT0FIRDtBQUlEO0FBQ0YsR0F6RlM7QUEwRlZELGVBMUZVLDJCQTBGTTtBQUFBOztBQUNkLFFBQUksQ0FBQyxLQUFLRyxVQUFWLEVBQXNCO0FBQ3BCLFVBQU1BLFVBQVUsR0FBRyxLQUFLQSxVQUFMLEdBQWtCO0FBQUEsZUFBTSxNQUFJLENBQUNWLE1BQUwsRUFBTjtBQUFBLE9BQXJDOztBQUVBbkIsYUFBTyxDQUFDc0IsYUFBUixDQUFzQlEsUUFBdEIsQ0FBK0I7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBL0I7QUFDQS9CLGFBQU8sQ0FBQ3NCLGFBQVIsQ0FBc0JVLFNBQXRCLENBQWdDNUIsV0FBaEMsQ0FBNEN5QixVQUE1QztBQUNEO0FBQ0YsR0FqR1M7QUFrR1ZGLGtCQWxHVSw4QkFrR1M7QUFDakIsUUFBSSxLQUFLRSxVQUFULEVBQXFCO0FBQ25CN0IsYUFBTyxDQUFDc0IsYUFBUixDQUFzQlEsUUFBdEIsQ0FBK0I7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBL0I7QUFDQS9CLGFBQU8sQ0FBQ3NCLGFBQVIsQ0FBc0JVLFNBQXRCLENBQWdDQyxjQUFoQyxDQUErQyxLQUFLSixVQUFwRDtBQUNBLFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDtBQUNGO0FBeEdTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3ZCZSxZQUFXO0FBQ3hCLFNBQU8sSUFBSXJDLGNBQUosQ0FBWTtBQUNqQkMsVUFBTSxFQUFFO0FBQ05DLFNBQUcsRUFBRTtBQUNILHlCQUFpQixRQURkO0FBRUgsZ0NBQXdCO0FBRnJCO0FBREMsS0FEUztBQVFqQndDLFNBQUssRUFBRTtBQUNMQyxPQUFDLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxDQUFDLFdBQUQ7QUFBWixPQURFO0FBRUxDLE9BQUMsRUFBRTtBQUFFRCxnQkFBUSxFQUFFLENBQUMsV0FBRDtBQUFaLE9BRkU7QUFHTEUsT0FBQyxFQUFFO0FBQUVGLGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaLE9BSEU7QUFJTEcsT0FBQyxFQUFFO0FBQUVILGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaLE9BSkU7QUFLTCxZQUFNO0FBQUVBLGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaLE9BTEQ7QUFNTEksT0FBQyxFQUFFO0FBQUVKLGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaLE9BTkU7QUFPTEssUUFBRSxFQUFFO0FBQUVMLGdCQUFRLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUFaLE9BUEM7QUFRTE0sT0FBQyxFQUFFO0FBQUVOLGdCQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQjtBQUFaO0FBUkUsS0FSVTtBQWtCakJPLFdBQU8sRUFBRSxFQWxCUTtBQW9CakI3QyxZQXBCaUIsc0JBb0JOO0FBQUE7O0FBQ1QsVUFBSThDLElBQUo7O0FBQ0EsV0FBSyxJQUFJQyxDQUFULElBQWMsS0FBS1gsS0FBbkIsRUFBMEI7QUFDeEJVLFlBQUksR0FBRyxLQUFLVixLQUFMLENBQVdXLENBQVgsQ0FBUDtBQUNBRCxZQUFJLENBQUNFLEVBQUwsR0FBVUQsQ0FBVjtBQUNBRCxZQUFJLENBQUNHLEtBQUwsR0FBYS9DLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixVQUFVSixDQUFDLEtBQUssSUFBTixHQUFhLElBQWIsR0FBb0JBLENBQTlCLENBQXhCLENBQWI7O0FBQ0FELFlBQUksQ0FBQ00sT0FBTCxHQUFlLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLGlCQUFnQixLQUFJLENBQUNDLE9BQUwsQ0FBYUYsS0FBYixFQUFvQkMsR0FBcEIsQ0FBaEI7QUFBQSxTQUFmO0FBQ0Q7O0FBQ0QsV0FBS0UsTUFBTDtBQUNELEtBN0JnQjtBQStCakJDLFVBL0JpQixrQkErQlZULEVBL0JVLEVBK0JOO0FBQ1QsVUFBSSxDQUFDLEtBQUtILE9BQUwsQ0FBYWEsUUFBYixDQUFzQlYsRUFBdEIsQ0FBTCxFQUFnQztBQUM5QjlDLGVBQU8sQ0FBQ3lELEtBQVIsQ0FBY0YsTUFBZCxDQUFxQixLQUFLckIsS0FBTCxDQUFXWSxFQUFYLENBQXJCO0FBQ0EsYUFBS0gsT0FBTCxDQUFhZSxJQUFiLENBQWtCWixFQUFsQjtBQUNEO0FBQ0YsS0FwQ2dCO0FBcUNqQmEsVUFyQ2lCLGtCQXFDVmIsRUFyQ1UsRUFxQ047QUFDVCxVQUFJLEtBQUtILE9BQUwsQ0FBYWEsUUFBYixDQUFzQlYsRUFBdEIsQ0FBSixFQUErQjtBQUM3QjlDLGVBQU8sQ0FBQ3lELEtBQVIsQ0FBY0UsTUFBZCxDQUFxQmIsRUFBckI7QUFDQSxhQUFLSCxPQUFMLENBQWFpQixNQUFiLENBQW9CLEtBQUtqQixPQUFMLENBQWFrQixPQUFiLENBQXFCZixFQUFyQixDQUFwQixFQUE4QyxDQUE5QztBQUNEO0FBQ0YsS0ExQ2dCO0FBMkNqQmdCLGFBM0NpQix1QkEyQ0w7QUFDVixVQUFJLEtBQUtuQixPQUFMLENBQWFvQixNQUFqQixFQUF5QjtBQUN2Qi9ELGVBQU8sQ0FBQ3lELEtBQVIsQ0FBY0ssU0FBZDtBQUNBLGFBQUtuQixPQUFMLEdBQWUsRUFBZjtBQUNEO0FBQ0YsS0FoRGdCO0FBaURqQnhCLFVBakRpQixrQkFpRFZFLEVBakRVLEVBaUROO0FBQ1QsVUFBSUEsRUFBSixFQUFRLEtBQUtpQyxNQUFMLEdBQVIsS0FDSyxLQUFLUSxTQUFMO0FBQ04sS0FwRGdCO0FBcURqQlIsVUFyRGlCLG9CQXFEUjtBQUFBOztBQUNQLFVBQU1YLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjs7QUFDQXJDLDJCQUFTQyxHQUFULENBQWEsV0FBYixFQUEwQkMsSUFBMUIsQ0FBK0IsVUFBQXdELFNBQVMsRUFBSTtBQUMxQyxhQUFLLElBQUluQixDQUFULElBQWMsTUFBSSxDQUFDWCxLQUFuQixFQUEwQjtBQUN4QixjQUFJOEIsU0FBUyxDQUFDbkIsQ0FBRCxDQUFULENBQWEsQ0FBYixDQUFKLEVBQXFCLE1BQUksQ0FBQ1UsTUFBTCxDQUFZVixDQUFaLEVBQXJCLEtBQ0ssTUFBSSxDQUFDYyxNQUFMLENBQVlkLENBQVo7QUFDTjtBQUNGLE9BTEQ7QUFNRCxLQTdEZ0I7QUE4RGpCUSxXQTlEaUIsbUJBOERURixLQTlEUyxFQThERkMsR0E5REUsRUE4REc7QUFDbEIsVUFBTU4sRUFBRSxHQUFHSyxLQUFLLENBQUNjLFVBQWpCO0FBQ0EsVUFBSW5CLEVBQUUsS0FBSyxHQUFYLEVBQWdCLEtBQUtsQyxJQUFMLENBQVUsYUFBVixFQUF5QnVDLEtBQUssQ0FBQ2UsYUFBL0IsRUFBaEIsS0FDSyxJQUFJcEIsRUFBRSxLQUFLLElBQVgsRUFBaUI5QyxPQUFPLENBQUNtRSxhQUFSLENBQXNCQyxJQUF0QixHQUFqQixLQUNBLEtBQUt4RCxJQUFMLENBQVUsU0FBU2tDLEVBQW5CLEVBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DO0FBQUVNLFdBQUcsRUFBRUEsR0FBRyxDQUFDTjtBQUFYLE9BQW5DO0FBQ047QUFuRWdCLEdBQVosQ0FBUDtBQXFFRCxDOztBQXpFRDs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSXRELGNBQUosQ0FBWTtBQUNWQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsZUFBUyxLQUROO0FBRUgsaUJBQVcsS0FGUjtBQUdILDJCQUFxQixLQUhsQjtBQUlILDZCQUF1QixLQUpwQjtBQUtILDZCQUF1QixLQUxwQjtBQU1ILDRCQUFzQixxQkFObkI7QUFPSCxnQ0FBMEIsbUJBUHZCO0FBUUgsd0NBQWtDLDJCQVIvQjtBQVNILG9CQUFjLGFBVFg7QUFVSCx5QkFBbUIsa0JBVmhCO0FBV0gsc0JBQWdCLEtBWGI7QUFZSCwrQkFBeUIsS0FadEI7QUFhSCxvQkFBYyxPQWJYO0FBY0gsOEJBQXdCLEtBZHJCO0FBZUgsc0NBQWdDLDBCQWY3QjtBQWdCSCxrQ0FBNEI7QUFoQnpCO0FBREMsR0FERTtBQXNCVjJFLEtBdEJVLGVBc0JOQyxLQXRCTSxFQXNCQ0MsTUF0QkQsRUFzQlM7QUFBQTs7QUFDakIsUUFBSUYsR0FBSixFQUFTRyxHQUFUOztBQUNBLFFBQUlGLEtBQUssQ0FBQ0csSUFBVixFQUFnQjtBQUNkSixTQUFHLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDRyxJQUFQLEVBQWFILEtBQUssQ0FBQ0ksT0FBTixHQUFnQixJQUFoQixHQUF1QkosS0FBSyxDQUFDSyxRQUE3QixHQUF3QyxHQUFyRCxDQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0xOLFNBQUcsR0FBRyxDQUFFLElBQUlPLElBQUosR0FBV0MsT0FBWCxFQUFGLEVBQXlCQyxxQkFBVVIsS0FBVixLQUFvQkEsS0FBN0MsQ0FBTjs7QUFDQSxVQUFJQyxNQUFNLElBQUksT0FBT0EsTUFBUCxLQUFrQixRQUFoQyxFQUEwQztBQUN4Q0YsV0FBRyxDQUFDWCxJQUFKLENBQVNhLE1BQVQ7QUFDRDtBQUNGOztBQUNEakUseUJBQVNRLEdBQVQsQ0FBYSxLQUFiLEVBQW9CdUQsR0FBcEIsRUFBeUI3RCxJQUF6QixDQUE4QjtBQUFBLGFBQU0sS0FBSSxDQUFDSSxJQUFMLENBQVUsMkJBQVYsRUFBdUN5RCxHQUF2QyxDQUFOO0FBQUEsS0FBOUI7QUFDRCxHQWpDUztBQWtDVlUsT0FsQ1UsbUJBa0NGO0FBQUE7O0FBQ056RSx5QkFBU1EsR0FBVCxDQUFhLEtBQWIsRUFBb0I7QUFBRWlFLFdBQUssRUFBRTtBQUFULEtBQXBCLEVBQXFDdkUsSUFBckMsQ0FBMEM7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGNBQVYsQ0FBTjtBQUFBLEtBQTFDO0FBQ0QsR0FwQ1M7QUFxQ1ZvRSxtQkFyQ1UsK0JBcUNVO0FBQ2xCLFNBQUtYLEdBQUwsQ0FBUyw0QkFBVDtBQUNELEdBdkNTO0FBd0NWWSwyQkF4Q1UsdUNBd0NrQjtBQUMxQixTQUFLWixHQUFMLENBQVMsNEJBQVQ7QUFDRCxHQTFDUztBQTJDVmEscUJBM0NVLCtCQTJDVVgsTUEzQ1YsRUEyQ2tCO0FBQzFCLFNBQUtGLEdBQUwsQ0FBUywwQkFBVCxFQUFxQ0UsTUFBckM7QUFDRCxHQTdDUztBQThDVlksa0JBOUNVLDhCQThDUztBQUNqQixTQUFLZCxHQUFMLENBQVMsVUFBVDtBQUNELEdBaERTO0FBaURWZSxhQWpEVSx5QkFpREk7QUFDWixTQUFLZixHQUFMLENBQVMsVUFBVDtBQUNELEdBbkRTO0FBb0RWZ0IsMEJBcERVLHNDQW9EaUI7QUFDekIsU0FBS2hCLEdBQUwsQ0FBUyxzQkFBVDtBQUNELEdBdERTO0FBdURWaUIsdUJBdkRVLG1DQXVEYztBQUN0QixTQUFLakIsR0FBTCxDQUFTLHVCQUFUO0FBQ0Q7QUF6RFMsQ0FBWixFOzs7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJN0UsY0FBSixDQUFZO0FBQ1ZDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxxQkFBZSxhQURaO0FBRUgsdUJBQWlCLGdCQUZkO0FBR0gsNkJBQXVCLGtCQUhwQjtBQUlILHFCQUFlLGtCQUpaO0FBS0gsdUJBQWlCLGlCQUxkO0FBTUgscUJBQWUsaUJBTlo7QUFPSCxzQkFBZ0I7QUFQYjtBQURDLEdBREU7QUFZVjZGLHVCQUFxQixFQUFFLEVBWmI7QUFhVkMsaUJBQWUsRUFBRSxFQWJQO0FBY1ZDLHFCQUFtQixFQUFFLElBZFg7QUFnQlZDLGdCQWhCVSwwQkFnQktDLEtBaEJMLEVBZ0JZO0FBQ3BCLFFBQUksS0FBS0oscUJBQUwsQ0FBMkJJLEtBQTNCLENBQUosRUFBdUM7QUFDckMsV0FBS0MsaUJBQUwsQ0FBdUJELEtBQXZCLEVBQThCLEtBQUtKLHFCQUFMLENBQTJCSSxLQUEzQixDQUE5QjtBQUNBLGFBQU8sS0FBS0oscUJBQUwsQ0FBMkJJLEtBQTNCLENBQVA7QUFDRDtBQUNGLEdBckJTO0FBdUJWRSxhQXZCVSx1QkF1QkVGLEtBdkJGLEVBdUJTRyxPQXZCVCxFQXVCa0I7QUFDMUIsUUFBSUEsT0FBTyxDQUFDQyxNQUFSLElBQWtCRCxPQUFPLENBQUNDLE1BQVIsS0FBbUIsVUFBekMsRUFBcUQ7QUFDbkQsV0FBS1IscUJBQUwsQ0FBMkJJLEtBQTNCLElBQW9DRyxPQUFPLENBQUNFLEdBQTVDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0osaUJBQUwsQ0FBdUJELEtBQXZCLEVBQThCRyxPQUFPLENBQUNFLEdBQXRDO0FBQ0Q7QUFDRixHQTdCUztBQStCVkosbUJBL0JVLDZCQStCUUQsS0EvQlIsRUErQmVNLE1BL0JmLEVBK0J1QjtBQUFBOztBQUMvQjNGLHlCQUFTQyxHQUFULENBQWEsVUFBYixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQTBGLFFBQVEsRUFBSTtBQUN4QyxVQUFJQSxRQUFRLENBQUNDLEtBQVQsQ0FBZUMsTUFBbkIsRUFBMkI7QUFDekIsYUFBSSxDQUFDQyxnQkFBTCxDQUFzQlYsS0FBdEIsRUFBNkJNLE1BQTdCO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FyQ1M7QUF1Q1ZJLGtCQXZDVSw0QkF1Q09WLEtBdkNQLEVBdUNjTSxNQXZDZCxFQXVDc0I7QUFBQTs7QUFDOUIsUUFBTUssVUFBVSxHQUFHLEtBQUtkLGVBQUwsQ0FBcUJHLEtBQXJCLENBQW5CO0FBQ0EsUUFBTVksZ0JBQWdCLEdBQUdELFVBQVUsSUFBSSxzQkFBVUEsVUFBVSxDQUFDTixHQUFyQixNQUE4QixzQkFBVUMsTUFBVixDQUFyRTtBQUNBLFFBQU1PLFFBQVEsR0FBR0YsVUFBVSxLQUFLQSxVQUFVLENBQUNOLEdBQVgsS0FBbUJDLE1BQW5CLElBQTZCLENBQUNNLGdCQUFuQyxDQUEzQjs7QUFFQSxRQUFJLENBQUNELFVBQUQsSUFBZUUsUUFBbkIsRUFBNkI7QUFFM0IsV0FBS0MsbUJBQUwsQ0FBeUJkLEtBQXpCLEVBQWdDTSxNQUFoQyxFQUF3Q3pGLElBQXhDLENBQTZDLFlBQU07QUFFakRGLDZCQUFTQyxHQUFULENBQWEsU0FBYixFQUF3QkMsSUFBeEIsQ0FBNkIsVUFBQWtHLE9BQU8sRUFBSTtBQUN0QyxjQUFNQyxPQUFPLEdBQUcsTUFBSSxDQUFDQyxtQkFBTCxDQUF5QkYsT0FBekIsRUFBa0NULE1BQWxDLENBQWhCOztBQUNBLGNBQU1ZLE9BQU8sR0FBRyxNQUFJLENBQUNDLGFBQUwsQ0FBbUJILE9BQW5CLENBQWhCOztBQUVBLGNBQUlFLE9BQUosRUFBYTtBQUNYLGtCQUFJLENBQUNqRyxJQUFMLENBQVUsZUFBVixFQUEyQjtBQUN6QmlHLHFCQUFPLEVBQVBBLE9BRHlCO0FBRXpCcEIsaUNBQW1CLEVBQUUsTUFBSSxDQUFDQSxtQkFGRDtBQUd6QnNCLG9CQUFNLEVBQUUsQ0FBQyxDQUFDSixPQUFPLENBQUNLLGFBQVIsQ0FBc0JqRDtBQUhQLGFBQTNCLEVBSUc7QUFBRVgsaUJBQUcsRUFBRXVDO0FBQVAsYUFKSDs7QUFNQSxrQkFBSSxDQUFDRixtQkFBTCxHQUEyQixJQUEzQjtBQUNEO0FBQ0YsU0FiRDtBQWNELE9BaEJEO0FBaUJELEtBbkJELE1Bb0JLLElBQUljLGdCQUFnQixJQUFJRCxVQUFVLENBQUNXLEtBQS9CLElBQXdDWCxVQUFVLENBQUNXLEtBQVgsQ0FBaUJDLGFBQTdELEVBQTRFO0FBQy9FLFdBQUt0RyxJQUFMLENBQVUsY0FBVixFQUEwQnFGLE1BQTFCO0FBQ0Q7QUFDRixHQW5FUztBQXFFVlEscUJBckVVLCtCQXFFVWQsS0FyRVYsRUFxRWlCSyxHQXJFakIsRUFxRXNCO0FBQUE7O0FBQzlCLFdBQU9oRyxPQUFPLENBQUNtSCxJQUFSLENBQWFDLGFBQWIsQ0FBMkJ6QixLQUEzQixFQUFrQztBQUN2QzBCLFVBQUksRUFBRSw0Q0FEaUM7QUFFdkNDLGVBQVMsRUFBRSxJQUY0QjtBQUd2Q0MsV0FBSyxFQUFFO0FBSGdDLEtBQWxDLEVBS0ovRyxJQUxJLENBS0MsWUFBTTtBQUNWZ0gsYUFBTyxDQUFDbkQsR0FBUixDQUFZLFdBQVosRUFBeUJzQixLQUF6QixFQUFnQ0ssR0FBaEM7QUFDQSxZQUFJLENBQUNSLGVBQUwsQ0FBcUJHLEtBQXJCLElBQThCO0FBQUVLLFdBQUcsRUFBSEE7QUFBRixPQUE5Qjs7QUFDQSxZQUFJLENBQUN5QixTQUFMLENBQWU5QixLQUFmO0FBQ0QsS0FUSSxXQVVFLFVBQUErQixDQUFDLEVBQUk7QUFDVkYsYUFBTyxDQUFDbkQsR0FBUixDQUFZLGlDQUFaLEVBQStDcUQsQ0FBQyxDQUFDQyxRQUFGLEVBQS9DOztBQUNBLFlBQUksQ0FBQy9HLElBQUwsQ0FBVSw4QkFBVjtBQUNELEtBYkksQ0FBUDtBQWNELEdBcEZTO0FBc0ZWNkcsV0F0RlUscUJBc0ZBOUIsS0F0RkEsRUFzRk87QUFBQTs7QUFDZjNGLFdBQU8sQ0FBQ21ILElBQVIsQ0FBYU0sU0FBYixDQUF1QjlCLEtBQXZCLEVBQThCO0FBQzVCMEIsVUFBSSxFQUFFLDBDQURzQjtBQUU1QkMsZUFBUyxFQUFFO0FBRmlCLEtBQTlCLFdBSVMsVUFBQUksQ0FBQyxFQUFJO0FBQ1ZGLGFBQU8sQ0FBQ25ELEdBQVIsQ0FBWSxzQkFBWixFQUFvQ3FELENBQUMsQ0FBQ0MsUUFBRixFQUFwQzs7QUFDQSxZQUFJLENBQUMvRyxJQUFMLENBQVUsMEJBQVY7QUFDRCxLQVBIO0FBUUQsR0EvRlM7QUFpR1ZnRyxxQkFqR1UsK0JBaUdVRixPQWpHVixFQWlHbUJWLEdBakduQixFQWlHd0I7QUFDaEMsUUFBTTRCLGVBQWUsR0FBRyxzQkFBVTVCLEdBQVYsQ0FBeEI7QUFDQSxRQUFNYSxPQUFPLEdBQUdILE9BQU8sQ0FBQ0csT0FBeEI7QUFDQSxRQUFNRyxhQUFhLEdBQUcsRUFBdEI7QUFDQSxRQUFNYSxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLFFBQUlaLEtBQUosRUFBV2EsT0FBWCxFQUFvQkMsUUFBcEI7O0FBRUEsU0FBSyxJQUFJTCxDQUFULElBQWNiLE9BQWQsRUFBdUI7QUFDckJJLFdBQUssR0FBR0osT0FBTyxDQUFDYSxDQUFELENBQWY7QUFDQUksYUFBTyxHQUFHYixLQUFLLENBQUNDLGFBQU4sR0FBc0JsQixHQUF0QixHQUE0QjRCLGVBQXRDO0FBQ0FHLGNBQVEsR0FBR2QsS0FBSyxDQUFDQyxhQUFOLEdBQXNCRCxLQUFLLENBQUNqQixHQUE1QixHQUFrQyxzQkFBVWlCLEtBQUssQ0FBQ2pCLEdBQWhCLENBQTdDOztBQUVBLFVBQUk4QixPQUFPLEtBQUtDLFFBQWhCLEVBQTBCO0FBQ3hCLFlBQUlkLEtBQUssQ0FBQ0YsTUFBVixFQUFrQkMsYUFBYSxDQUFDdEQsSUFBZCxDQUFtQnVELEtBQW5CLEVBQWxCLEtBQ0tZLGdCQUFnQixDQUFDbkUsSUFBakIsQ0FBc0J1RCxLQUF0QjtBQUNOO0FBQ0Y7O0FBQ0QsV0FBTztBQUFFRCxtQkFBYSxFQUFiQSxhQUFGO0FBQWlCYSxzQkFBZ0IsRUFBaEJBO0FBQWpCLEtBQVA7QUFDRCxHQW5IUztBQXFIVmYsZUFySFUseUJBcUhJSCxPQXJISixFQXFIYTtBQUNyQixRQUFNSyxhQUFhLEdBQUdMLE9BQU8sQ0FBQ0ssYUFBOUI7QUFDQSxRQUFNYSxnQkFBZ0IsR0FBR2xCLE9BQU8sQ0FBQ2tCLGdCQUFqQztBQUNBLFFBQU1HLGtCQUFrQixHQUFHaEIsYUFBYSxDQUFDakQsTUFBekM7QUFDQSxRQUFNa0UscUJBQXFCLEdBQUdKLGdCQUFnQixDQUFDOUQsTUFBL0M7QUFDQSxRQUFJOEMsT0FBSjs7QUFFQSxRQUFJbUIsa0JBQWtCLElBQUlDLHFCQUExQixFQUFpRDtBQUMvQyxXQUFLckgsSUFBTCxDQUFVLHdCQUFWO0FBQ0FpRyxhQUFPLEdBQUdHLGFBQVY7QUFDRCxLQUhELE1BSUssSUFBSWlCLHFCQUFKLEVBQTJCO0FBQzlCcEIsYUFBTyxHQUFHLENBQUNnQixnQkFBZ0IsQ0FBQyxDQUFELENBQWpCLENBQVY7O0FBQ0EsVUFBSUkscUJBQXFCLEdBQUcsQ0FBNUIsRUFBK0I7QUFDN0IsYUFBS3JILElBQUwsQ0FBVSxnQ0FBVjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT2lHLE9BQVA7QUFDRCxHQXZJUztBQXlJVnFCLGlCQXpJVSwyQkF5SU1DLE1BeklOLEVBeUljQyxZQXpJZCxFQXlJNEI7QUFBQTs7QUFDcEMsV0FBT3BJLE9BQU8sQ0FBQ3FJLE9BQVIsQ0FBZ0JDLGNBQWhCLEdBQ0o5SCxJQURJLENBQ0MsVUFBQStILFVBQVUsRUFBSTtBQUNsQixVQUFNQyxJQUFJLEdBQUdELFVBQVUsQ0FBQ0UsU0FBeEI7QUFDQSxVQUFJLENBQUNELElBQUwsRUFBV0osWUFBWSxDQUFDLENBQUNJLElBQUYsQ0FBWixDQUFYLEtBQ0s7QUFDSGxJLDZCQUFTQyxHQUFULENBQWEsVUFBYixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQWtJLFVBQVUsRUFBSTtBQUMxQyxjQUFJLENBQUNBLFVBQUwsRUFBaUIsTUFBSSxDQUFDOUgsSUFBTCxDQUFVLFlBQVYsRUFBakIsS0FDS3dILFlBQVksQ0FBQ00sVUFBRCxDQUFaO0FBQ04sU0FIRDtBQUlEO0FBQ0YsS0FWSSxDQUFQO0FBV0QsR0FySlM7QUFzSlZDLGtCQXRKVSw0QkFzSk8xQixLQXRKUCxFQXNKYztBQUFBOztBQUN0QixXQUFPakgsT0FBTyxDQUFDcUksT0FBUixDQUFnQkMsY0FBaEIsR0FDSjlILElBREksQ0FDQyxVQUFBK0gsVUFBVSxFQUFJO0FBQ2xCLFVBQUksQ0FBQ0EsVUFBVSxDQUFDRSxTQUFoQixFQUEyQixNQUFJLENBQUM3SCxJQUFMLENBQVUsb0JBQVYsRUFBZ0NxRyxLQUFoQyxFQUEzQixLQUNLO0FBQ0gzRyw2QkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUFrSSxVQUFVLEVBQUk7QUFDMUMsY0FBSSxDQUFDQSxVQUFMLEVBQWlCLE1BQUksQ0FBQzlILElBQUwsQ0FBVSxZQUFWLEVBQWpCLEtBQ0ssTUFBSSxDQUFDQSxJQUFMLENBQVUsb0JBQVYsRUFBZ0NxRyxLQUFoQztBQUNOLFNBSEQ7QUFJRDtBQUNGLEtBVEksQ0FBUDtBQVVELEdBaktTO0FBa0tWMkIsaUJBbEtVLDJCQWtLTTNCLEtBbEtOLEVBa0thO0FBQUE7O0FBQ3JCLFdBQU9qSCxPQUFPLENBQUNxSSxPQUFSLENBQWdCQyxjQUFoQixHQUNKOUgsSUFESSxDQUNDLFVBQUErSCxVQUFVLEVBQUk7QUFDbEIsVUFBSSxDQUFDQSxVQUFVLENBQUNFLFNBQWhCLEVBQTJCLE1BQUksQ0FBQzdILElBQUwsQ0FBVSxzQkFBVixFQUFrQ3FHLEtBQWxDLEVBQTNCLEtBQ0s7QUFDSDNHLDZCQUFTQyxHQUFULENBQWEsVUFBYixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQWtJLFVBQVUsRUFBSTtBQUMxQyxjQUFJLENBQUNBLFVBQUwsRUFBaUIsTUFBSSxDQUFDOUgsSUFBTCxDQUFVLFlBQVYsRUFBakIsS0FDSyxNQUFJLENBQUNBLElBQUwsQ0FBVSxzQkFBVixFQUFrQ3FHLEtBQWxDO0FBQ04sU0FIRDtBQUlEO0FBQ0YsS0FUSSxDQUFQO0FBVUQsR0E3S1M7QUE4S1Y0Qix1QkE5S1UsaUNBOEtZQyxJQTlLWixFQThLa0I7QUFDMUIsU0FBS3JELG1CQUFMLEdBQTJCcUQsSUFBM0I7QUFDRDtBQWhMUyxDQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNDZSxZQUFXO0FBQ3hCLFNBQU8sSUFBSXRKLGNBQUosQ0FBWTtBQUNqQkMsVUFBTSxFQUFFO0FBQ05DLFNBQUcsRUFBRTtBQUNILDhCQUFzQixNQURuQjtBQUVILHdCQUFnQjtBQUZiO0FBREMsS0FEUztBQVFqQnFKLFFBUmlCLGdCQVFaOUIsS0FSWSxFQVFMO0FBQUE7O0FBQ1YsVUFBSUEsS0FBSyxDQUFDOEIsSUFBVixFQUFnQixPQUFPLEtBQUtDLFVBQUwsQ0FBZ0IvQixLQUFLLENBQUM4QixJQUF0QixFQUE0QjlCLEtBQTVCLENBQVA7O0FBRWhCM0csMkJBQVNDLEdBQVQsQ0FBYSxRQUFiLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBeUksTUFBTTtBQUFBLGVBQUksS0FBSSxDQUFDRCxVQUFMLENBQWdCLElBQWhCLEVBQXNCL0IsS0FBdEIsRUFBNkJnQyxNQUE3QixDQUFKO0FBQUEsT0FBbEMsV0FDUztBQUFBLGVBQU0sS0FBSSxDQUFDckksSUFBTCxDQUFVLE9BQVYsRUFBbUIsY0FBbkIsQ0FBTjtBQUFBLE9BRFQ7QUFFRCxLQWJnQjtBQWNqQnNJLFVBZGlCLGtCQWNWQyxPQWRVLEVBY0RDLE9BZEMsRUFjUUMsSUFkUixFQWNjO0FBQUE7O0FBQzdCRCxhQUFPLEdBQUdBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQixDQUFsQixFQUFxQkMsNEJBQWlCQyxvQkFBakIsR0FBd0MsQ0FBN0QsQ0FBVjs7QUFFQWxKLDJCQUFTQyxHQUFULENBQWEsU0FBYixFQUF3QkMsSUFBeEIsQ0FBNkIsVUFBQWtHLE9BQU8sRUFBSTtBQUN0QyxZQUFJK0MsT0FBTyxHQUFHLE1BQUksQ0FBQ0Msa0JBQUwsQ0FBd0JoRCxPQUF4QixFQUFpQzBDLE9BQWpDLENBQWQ7O0FBQ0EsWUFBSUssT0FBSixFQUFhTCxPQUFPLElBQUksUUFBUUssT0FBTyxHQUFHLENBQWxCLElBQXVCLEdBQWxDOztBQUNiLGNBQUksQ0FBQzdJLElBQUwsQ0FBVSxlQUFWLEVBQTJCdUksT0FBM0IsRUFBb0NDLE9BQXBDLEVBQTZDQyxJQUE3QztBQUNELE9BSkQsV0FLTztBQUFBLGVBQU0sTUFBSSxDQUFDekksSUFBTCxDQUFVLE9BQVYsRUFBbUIsY0FBbkIsQ0FBTjtBQUFBLE9BTFA7QUFNRCxLQXZCZ0I7QUF3QmpCb0ksY0F4QmlCLHNCQXdCTkQsSUF4Qk0sRUF3QkE5QixLQXhCQSxFQXdCTzBDLE1BeEJQLEVBd0JlO0FBQUE7O0FBQzlCWixVQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSCxHQUNKWSxNQUFNLEtBQUssT0FBWCxHQUFxQjFDLEtBQUssQ0FBQ2xFLEtBQU4sQ0FBWTZHLElBQVosS0FBcUIzQyxLQUFLLENBQUNsRSxLQUFOLENBQVk2RyxJQUFaLEVBQXJCLEdBQTBDM0MsS0FBSyxDQUFDakIsR0FBckUsR0FDQTJELE1BQU0sS0FBSyxNQUFYLEdBQXFCLElBQUkvRSxJQUFKLENBQVNxQyxLQUFLLENBQUM0QyxLQUFmLEVBQXNCQyxjQUF0QixFQUFyQixHQUErRCxFQUZ0RTtBQUlBZixVQUFJLEdBQUdBLElBQUksQ0FBQ08sU0FBTCxDQUFlLENBQWYsRUFBa0JDLDRCQUFpQkMsb0JBQWpCLEdBQXdDLENBQTFELENBQVA7O0FBRUFsSiwyQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUFrRyxPQUFPLEVBQUk7QUFDdEMsWUFBSStDLE9BQU8sR0FBRyxNQUFJLENBQUNDLGtCQUFMLENBQXdCaEQsT0FBeEIsRUFBaUNxQyxJQUFqQyxDQUFkOztBQUVBLFlBQUlVLE9BQU8sSUFBSXhDLEtBQUssQ0FBQ0YsTUFBckIsRUFBNkI7QUFDM0IsZ0JBQUksQ0FBQ25HLElBQUwsQ0FBVSxpQ0FBVixFQUE2QywwQkFBN0MsRUFBeUVtSSxJQUF6RTtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlVLE9BQUosRUFBYVYsSUFBSSxJQUFJLFFBQVFVLE9BQU8sR0FBRyxDQUFsQixJQUF1QixHQUEvQjtBQUNieEMsZUFBSyxDQUFDOEIsSUFBTixHQUFhQSxJQUFiOztBQUNBLGdCQUFJLENBQUNuSSxJQUFMLENBQVUsYUFBVixFQUF5QnFHLEtBQXpCO0FBQ0Q7QUFDRixPQVZELFdBV087QUFBQSxlQUFNLE1BQUksQ0FBQ3JHLElBQUwsQ0FBVSxPQUFWLEVBQW1CLGNBQW5CLENBQU47QUFBQSxPQVhQO0FBWUQsS0EzQ2dCO0FBNENqQjhJLHNCQTVDaUIsOEJBNENFaEQsT0E1Q0YsRUE0Q1dxQyxJQTVDWCxFQTRDaUI7QUFDaEMsVUFBSWdCLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVl2RCxPQUFPLENBQUNHLE9BQXBCLENBQXBCO0FBQUEsVUFDSXFELENBQUMsR0FBR0gsYUFBYSxDQUFDaEcsTUFEdEI7QUFBQSxVQUVJMEYsT0FBTyxHQUFHLENBRmQ7QUFBQSxVQUdJVSxVQUhKOztBQUtBLGFBQU9ELENBQUMsRUFBUixFQUFZO0FBQ1ZDLGtCQUFVLEdBQUdKLGFBQWEsQ0FBQ0csQ0FBRCxDQUExQjtBQUNBLFlBQUksS0FBS0UsWUFBTCxDQUFrQnJCLElBQWxCLEVBQXdCb0IsVUFBeEIsQ0FBSixFQUF5Q1YsT0FBTztBQUNqRDs7QUFDRCxhQUFPQSxPQUFQO0FBQ0QsS0F2RGdCO0FBd0RqQlcsZ0JBeERpQix3QkF3REpyQixJQXhESSxFQXdERW9CLFVBeERGLEVBd0RjO0FBQzdCLFVBQUlwQixJQUFJLEtBQUtvQixVQUFiLEVBQXlCLE9BQU8sSUFBUDtBQUV6QixVQUFJRCxDQUFDLEdBQUduQixJQUFJLENBQUNoRixNQUFiO0FBQUEsVUFDSXNHLGdCQUFnQixHQUFHRixVQUFVLENBQUNiLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0JZLENBQXhCLENBRHZCO0FBQUEsVUFFSUksY0FGSjtBQUlBLFVBQUl2QixJQUFJLEtBQUtzQixnQkFBYixFQUErQixPQUFPLEtBQVA7QUFFL0JDLG9CQUFjLEdBQUdILFVBQVUsQ0FBQ2IsU0FBWCxDQUFxQlksQ0FBckIsRUFBd0JDLFVBQVUsQ0FBQ3BHLE1BQW5DLENBQWpCO0FBRUEsVUFBSSxlQUFld0csSUFBZixDQUFvQkQsY0FBcEIsQ0FBSixFQUF5QyxPQUFPLElBQVA7QUFFekMsYUFBTyxLQUFQO0FBQ0Q7QUF0RWdCLEdBQVosQ0FBUDtBQXdFRCxDOztBQTdFRDs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0NlLFlBQVc7QUFDeEIsU0FBTyxJQUFJOUssY0FBSixDQUFZO0FBQ2pCQyxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFO0FBQ0gsdUJBQWUsY0FEWjtBQUVILDZCQUFxQixhQUZsQjtBQUdILCtCQUF1QixhQUhwQjtBQUlILDJDQUFtQyw2QkFKaEM7QUFLSCxpQ0FBeUIsZUFMdEI7QUFNSCwyQkFBbUIsa0JBTmhCO0FBT0gsOEJBQXNCLHFCQVBuQjtBQVFILGlDQUF5Qix5QkFSdEI7QUFTSCxzQkFBYyxhQVRYO0FBVUgseUJBQWlCLGdCQVZkO0FBV0gsd0JBQWdCLGVBWGI7QUFZSCw0QkFBb0IsaUJBWmpCO0FBYUgsaUJBQVMsU0FiTjtBQWNILGtDQUEwQixtQkFkdkI7QUFlSCwwQ0FBa0MsMkJBZi9CO0FBZ0JILHdDQUFnQywwQkFoQjdCO0FBaUJILG9DQUE0QjtBQWpCekI7QUFEQyxLQURTO0FBdUJqQjhLLFVBdkJpQixrQkF1QlZDLFNBdkJVLEVBdUJDL0YsT0F2QkQsRUF1QlVnRyxJQXZCVixFQXVCZ0I7QUFDL0JwSywyQkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUEwRixRQUFRLEVBQUk7QUFDeEMsWUFBSXVFLFNBQVMsQ0FBQ3ZFLFFBQUQsQ0FBYixFQUF5QjtBQUN2QmxHLGlCQUFPLENBQUMySyxhQUFSLENBQXNCcEgsTUFBdEIsQ0FBNkI7QUFDM0JtSCxnQkFBSSxFQUFFLE9BRHFCO0FBRTNCM0gsaUJBQUssRUFBRSxpQkFBaUIvQyxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0J5SCxJQUF4QixDQUZHO0FBRzNCaEcsbUJBQU8sRUFBUEEsT0FIMkI7QUFJM0JrRyxtQkFBTyxFQUFFNUssT0FBTyxDQUFDQyxPQUFSLENBQWdCNEssTUFBaEIsQ0FBdUIsZ0JBQXZCO0FBSmtCLFdBQTdCO0FBTUQ7QUFDRixPQVREO0FBVUQsS0FsQ2dCO0FBb0NqQkMsZ0JBcENpQiwwQkFvQ0Y7QUFDYixXQUFLTixNQUFMLENBQ0UsVUFBQXRFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNRLE9BQVQsQ0FBaUJxRSxRQUFyQjtBQUFBLE9BRFYsRUFFRS9LLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixrQkFBeEIsQ0FGRixFQUdFLFNBSEY7QUFLRCxLQTFDZ0I7QUE0Q2pCbUMsZUE1Q2lCLHlCQTRDSDtBQUNaLFdBQUtvRixNQUFMLENBQ0UsVUFBQXRFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM4RSxJQUFULENBQWNDLE9BQWxCO0FBQUEsT0FEVixFQUVFakwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLFVBQXhCLENBRkYsRUFHRSxPQUhGO0FBS0QsS0FsRGdCO0FBb0RqQmtDLG9CQXBEaUIsOEJBb0RFO0FBQ2pCLFdBQUtxRixNQUFMLENBQ0UsVUFBQXRFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM4RSxJQUFULENBQWNFLE9BQWxCO0FBQUEsT0FEVixFQUVFbEwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLFVBQXhCLENBRkYsRUFHRSxPQUhGO0FBS0QsS0ExRGdCO0FBNERqQmtJLGtCQTVEaUIsMEJBNERGQyxNQTVERSxFQTRETUMsTUE1RE4sRUE0RGM7QUFDN0IsVUFBTUMsV0FBVyxHQUFHdEwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCbUksTUFBeEIsQ0FBcEI7QUFDQSxVQUFNRyxXQUFXLEdBQUdGLE1BQU0sR0FBRyxTQUFTckwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCb0ksTUFBeEIsQ0FBWixHQUE4QyxFQUF4RTtBQUNBLFdBQUtiLE1BQUwsQ0FDRSxVQUFBdEUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQzhFLElBQVQsQ0FBY0UsT0FBbEI7QUFBQSxPQURWLEVBRUVsTCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IscUJBQXhCLEVBQStDcUksV0FBVyxHQUFHQyxXQUE3RCxDQUZGLEVBR0UsT0FIRjtBQUtELEtBcEVnQjtBQXNFakJDLGlCQXRFaUIseUJBc0VIbEgsS0F0RUcsRUFzRUk7QUFDbkIsV0FBS2tHLE1BQUwsQ0FDRSxVQUFBdEUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQzhFLElBQVQsQ0FBY0UsT0FBbEI7QUFBQSxPQURWLEVBRUVsTCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IscUJBQXhCLEVBQStDakQsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCcUIsS0FBeEIsQ0FBL0MsQ0FGRixFQUdFLFNBSEY7QUFLRCxLQTVFZ0I7QUE4RWpCbUgsbUJBOUVpQiw2QkE4RUM7QUFDaEIsV0FBS2pCLE1BQUwsQ0FDRSxVQUFBdEUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQzhFLElBQVQsQ0FBY0UsT0FBbEI7QUFBQSxPQURWLEVBRUVsTCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IscUJBQXhCLENBRkYsRUFHRSxTQUhGO0FBS0QsS0FwRmdCO0FBc0ZqQitCLHFCQXRGaUIsK0JBc0ZHO0FBQ2xCLFdBQUt3RixNQUFMLENBQ0UsVUFBQXRFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM4RSxJQUFULENBQWNVLFdBQWxCO0FBQUEsT0FEVixFQUVFMUwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLDRCQUF4QixDQUZGLEVBR0UsU0FIRjtBQUtELEtBNUZnQjtBQThGakJnQyw2QkE5RmlCLHVDQThGVztBQUMxQixXQUFLdUYsTUFBTCxDQUNFLFVBQUF0RSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDOEUsSUFBVCxDQUFjVSxXQUFsQjtBQUFBLE9BRFYsRUFFRTFMLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3Qiw0QkFBeEIsQ0FGRixFQUdFLFNBSEY7QUFLRCxLQXBHZ0I7QUFzR2pCMEksMkJBdEdpQixxQ0FzR1M7QUFDeEIsV0FBS25CLE1BQUwsQ0FDRSxVQUFBdEUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQzhFLElBQVQsQ0FBY1ksV0FBbEI7QUFBQSxPQURWLEVBRUU1TCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsMEJBQXhCLENBRkYsRUFHRSxTQUhGO0FBS0QsS0E1R2dCO0FBOEdqQmlDLHVCQTlHaUIsaUNBOEdLO0FBQ3BCLFdBQUtzRixNQUFMLENBQ0UsVUFBQXRFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM4RSxJQUFULENBQWNVLFdBQWxCO0FBQUEsT0FEVixFQUVFMUwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLDBCQUF4QixDQUZGLEVBR0UsT0FIRjtBQUtELEtBcEhnQjtBQXNIakI0SSxlQXRIaUIsdUJBc0hMdkgsS0F0SEssRUFzSEU7QUFDakIsV0FBS2tHLE1BQUwsQ0FDRSxVQUFBdEUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQnFFLFFBQXJCO0FBQUEsT0FEVixFQUVFL0ssT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLG1CQUF4QixFQUE2Q2pELE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QnFCLEtBQXhCLENBQTdDLENBRkYsRUFHRSxPQUhGO0FBS0QsS0E1SGdCO0FBOEhqQndILCtCQTlIaUIsdUNBOEhXeEgsS0E5SFgsRUE4SGtCeUUsSUE5SGxCLEVBOEh3QjtBQUN2QyxXQUFLeUIsTUFBTCxDQUNFLFVBQUF0RSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDUSxPQUFULENBQWlCcUUsUUFBckI7QUFBQSxPQURWLEVBRUUvSyxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUJBQXhCLEVBQTZDakQsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCcUIsS0FBeEIsRUFBK0J5RSxJQUEvQixDQUE3QyxDQUZGLEVBR0UsT0FIRjtBQUtELEtBcElnQjtBQXNJakJnRCxpQkF0SWlCLHlCQXNJSHpILEtBdElHLEVBc0lJO0FBQ25CLFdBQUtrRyxNQUFMLENBQ0UsVUFBQXRFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM4RSxJQUFULENBQWNnQixTQUFsQjtBQUFBLE9BRFYsRUFFRWhNLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QixZQUF4QixFQUFzQ2pELE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsVUFBYixDQUF3QnFCLEtBQXhCLENBQXRDLENBRkYsRUFHRSxPQUhGO0FBS0QsS0E1SWdCO0FBOElqQmUsNEJBOUlpQixzQ0E4SVU7QUFDekIsV0FBS21GLE1BQUwsQ0FDRSxVQUFBdEUsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQzhFLElBQVQsQ0FBY0UsT0FBbEI7QUFBQSxPQURWLEVBRUVsTCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0Isc0JBQXhCLENBRkYsRUFHRSxPQUhGO0FBS0QsS0FwSmdCO0FBc0pqQnFDLHlCQXRKaUIsbUNBc0pPO0FBQ3RCLFdBQUtrRixNQUFMLENBQ0UsVUFBQXRFLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUM4RSxJQUFULENBQWNFLE9BQWxCO0FBQUEsT0FEVixFQUVFbEwsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxVQUFiLENBQXdCLHVCQUF4QixDQUZGLEVBR0UsT0FIRjtBQUtELEtBNUpnQjtBQThKakJnSixXQTlKaUIsbUJBOEpUM0gsS0E5SlMsRUE4SkY7QUFDYixXQUFLa0csTUFBTCxDQUNFLFVBQUF0RSxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDOEUsSUFBVCxDQUFjZ0IsU0FBbEI7QUFBQSxPQURWLEVBRUVoTSxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsWUFBeEIsRUFBc0NqRCxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JxQixLQUF4QixDQUF0QyxDQUZGLEVBR0UsT0FIRjtBQUtEO0FBcEtnQixHQUFaLENBQVA7QUFzS0QsQzs7QUExS0Q7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDRWUsWUFBVztBQUN4QixTQUFPLElBQUk5RSxjQUFKLENBQVk7QUFDakJDLFVBQU0sRUFBRTtBQUNOQyxTQUFHLEVBQUU7QUFDSCx1QkFBZTtBQURaO0FBREMsS0FEUztBQU9qQkksWUFQaUIsc0JBT047QUFBQTs7QUFDVEUsYUFBTyxDQUFDa00sVUFBUixDQUFtQmxLLFNBQW5CLENBQTZCNUIsV0FBN0IsQ0FBeUMsVUFBQWdELEdBQUcsRUFBSTtBQUM5QyxhQUFJLENBQUN4QyxJQUFMLENBQVUscUJBQVYsRUFBaUN3QyxHQUFHLENBQUNOLEVBQXJDLEVBQXlDTSxHQUFHLENBQUM0QyxHQUE3Qzs7QUFDQWhHLGVBQU8sQ0FBQ2tNLFVBQVIsQ0FBbUJDLElBQW5CLENBQXdCL0ksR0FBRyxDQUFDTixFQUE1QjtBQUNELE9BSEQ7QUFJRCxLQVpnQjtBQWNqQnNKLFFBZGlCLGdCQWNaekcsS0FkWSxFQWNMO0FBQ1ZyRiwyQkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUEwRixRQUFRLEVBQUk7QUFDeEMsWUFBSSxDQUFDQSxRQUFRLENBQUNDLEtBQVQsQ0FBZUMsTUFBcEIsRUFBNEI7QUFDMUJwRyxpQkFBTyxDQUFDa00sVUFBUixDQUFtQkUsSUFBbkIsQ0FBd0J6RyxLQUF4QjtBQUNEO0FBQ0YsT0FKRDtBQUtEO0FBcEJnQixHQUFaLENBQVA7QUFzQkQsQzs7QUExQkQ7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQ2UsWUFBVztBQUN4QixTQUFPLElBQUluRyxjQUFKLENBQVk7QUFDakJDLFVBQU0sRUFBRTtBQUNOQyxTQUFHLEVBQUU7QUFDSCx5QkFBaUIsVUFEZDtBQUVILHVCQUFlLFVBRlo7QUFHSCx1QkFBZSxZQUhaO0FBSUgsdUJBQWUsWUFKWjtBQUtILHlCQUFpQixhQUxkO0FBTUgseUJBQWlCLGFBTmQ7QUFPSCwwQkFBaUIsV0FQZDtBQVFILGtDQUEwQjtBQVJ2QjtBQURDLEtBRFM7QUFjakJtSCxXQUFPLEVBQUUsRUFkUTtBQWdCakJ3RixZQWhCaUIsb0JBZ0JSMUcsS0FoQlEsRUFnQkRLLEdBaEJDLEVBZ0JJO0FBQ25CLFdBQUtzRyxNQUFMLEdBQWM5TCxJQUFkLENBQW1CLFVBQUE0RCxJQUFJLEVBQUk7QUFDekIsWUFBSUEsSUFBSixFQUFVO0FBQ1JwRSxpQkFBTyxDQUFDbUUsYUFBUixDQUFzQmtJLFFBQXRCLENBQStCO0FBQzdCRSxpQkFBSyxFQUFFdk0sT0FBTyxDQUFDQyxPQUFSLENBQWdCNEssTUFBaEIsd0NBQXVEbEYsS0FBdkQsY0FBZ0VLLEdBQWhFLEVBRHNCO0FBRTdCTCxpQkFBSyxFQUFMQTtBQUY2QixXQUEvQjtBQUlEO0FBQ0YsT0FQRDtBQVFELEtBekJnQjtBQTBCakIyRyxVQTFCaUIsb0JBMEJSO0FBQ1AsYUFBT3RNLE9BQU8sQ0FBQ21FLGFBQVIsQ0FBc0JtSSxNQUF0QixDQUE2QixFQUE3QixDQUFQO0FBQ0QsS0E1QmdCO0FBNkJqQkUsY0E3QmlCLHNCQTZCTnZGLEtBN0JNLEVBNkJDO0FBQ2hCLFVBQU13RixVQUFVLEdBQUcsQ0FBQ3hGLEtBQUssQ0FBQ0MsYUFBMUI7QUFDQSxVQUFNTCxPQUFPLEdBQUcsS0FBS0EsT0FBckI7QUFFQSxvQ0FBa0JyRyxJQUFsQixDQUF1QixVQUFBNEMsR0FBRyxFQUFJO0FBQzVCLFlBQU1OLEVBQUUsR0FBR00sR0FBRyxDQUFDTixFQUFmO0FBQ0EsWUFBTWtELEdBQUcsR0FBR3lHLFVBQVUsR0FBRyxzQkFBVXJKLEdBQUcsQ0FBQzRDLEdBQWQsQ0FBSCxHQUF3QjVDLEdBQUcsQ0FBQzRDLEdBQWxEO0FBRUFhLGVBQU8sQ0FBQy9ELEVBQUQsQ0FBUCxHQUFjK0QsT0FBTyxDQUFDL0QsRUFBRCxDQUFQLElBQWUsRUFBN0I7QUFDQStELGVBQU8sQ0FBQy9ELEVBQUQsQ0FBUCxDQUFZa0QsR0FBWixJQUFtQmlCLEtBQW5CO0FBQ0QsT0FORDtBQU9ELEtBeENnQjtBQXlDakJ5RixlQXpDaUIsdUJBeUNMekYsS0F6Q0ssRUF5Q0U7QUFBQTs7QUFDakIsVUFBTXdGLFVBQVUsR0FBRyxDQUFDeEYsS0FBSyxDQUFDQyxhQUExQjtBQUNBLFVBQU1MLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjtBQUNBLFVBQU1rQixRQUFRLEdBQUcwRSxVQUFVLEdBQUcsc0JBQVV4RixLQUFLLENBQUNqQixHQUFoQixDQUFILEdBQTBCaUIsS0FBSyxDQUFDakIsR0FBM0Q7O0FBRUEsV0FBSyxJQUFJbEQsRUFBVCxJQUFlK0QsT0FBZixFQUF3QjtBQUN0QixhQUFLLElBQUliLEdBQVQsSUFBZ0JhLE9BQU8sQ0FBQy9ELEVBQUQsQ0FBdkIsRUFBNkI7QUFDM0IsY0FBSWtELEdBQUcsS0FBSytCLFFBQVosRUFBc0I7QUFDcEJsQixtQkFBTyxDQUFDL0QsRUFBRCxDQUFQLENBQVlrRCxHQUFaLElBQW1CaUIsS0FBbkI7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0Qsb0NBQWtCekcsSUFBbEIsQ0FBdUIsVUFBQTRDLEdBQUcsRUFBSTtBQUM1QixZQUFNdUosTUFBTSxHQUFHRixVQUFVLEdBQUcsc0JBQVVySixHQUFHLENBQUM0QyxHQUFkLENBQUgsR0FBd0I1QyxHQUFHLENBQUM0QyxHQUFyRDs7QUFFQSxZQUFJMkcsTUFBTSxLQUFLNUUsUUFBZixFQUF5QjtBQUN2QixlQUFJLENBQUNuSCxJQUFMLENBQVUscUJBQVYsRUFBaUNxRyxLQUFqQztBQUNEO0FBQ0YsT0FORDtBQU9ELEtBNURnQjtBQTZEakIyRixlQTdEaUIsdUJBNkRMN0QsSUE3REssRUE2REMvQyxHQTdERCxFQTZETWtCLGFBN0ROLEVBNkRxQjtBQUFBOztBQUNwQyxVQUFNTCxPQUFPLEdBQUcsS0FBS0EsT0FBckI7QUFDQSxVQUFNa0IsUUFBUSxHQUFHYixhQUFhLEdBQUdsQixHQUFILEdBQVMsc0JBQVVBLEdBQVYsQ0FBdkM7O0FBRUEsV0FBSyxJQUFJbEQsRUFBVCxJQUFlK0QsT0FBZixFQUF3QjtBQUN0QixhQUFLLElBQUlnRyxRQUFULElBQXFCaEcsT0FBTyxDQUFDL0QsRUFBRCxDQUE1QixFQUFrQztBQUNoQyxjQUFJK0osUUFBUSxLQUFLOUUsUUFBakIsRUFBMkI7QUFDekIsbUJBQU9sQixPQUFPLENBQUMvRCxFQUFELENBQVAsQ0FBWStKLFFBQVosQ0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxvQ0FBa0JyTSxJQUFsQixDQUF1QixVQUFBNEMsR0FBRyxFQUFJO0FBQzVCLFlBQU11SixNQUFNLEdBQUd6RixhQUFhLEdBQUc5RCxHQUFHLENBQUM0QyxHQUFQLEdBQWEsc0JBQVU1QyxHQUFHLENBQUM0QyxHQUFkLENBQXpDOztBQUNBLFlBQUkyRyxNQUFNLEtBQUs1RSxRQUFmLEVBQXlCO0FBQ3ZCLGdCQUFJLENBQUNuSCxJQUFMLENBQVUsdUJBQVY7QUFDRDtBQUNGLE9BTEQ7QUFNRCxLQTlFZ0I7QUErRWpCa00sYUEvRWlCLHVCQStFTDtBQUFBOztBQUNWLG9DQUFrQnRNLElBQWxCLENBQXVCLFVBQUE0QyxHQUFHLEVBQUk7QUFDNUIsWUFBTTJKLFdBQVcsR0FBRyxzQkFBVTNKLEdBQUcsQ0FBQzRDLEdBQWQsQ0FBcEI7QUFFQSxZQUFNZ0gsaUJBQWlCLEdBQUcsTUFBSSxDQUFDbkcsT0FBTCxDQUFhekQsR0FBRyxDQUFDTixFQUFqQixDQUExQjtBQUNBLFlBQUltRSxLQUFLLEdBQUcsSUFBWjs7QUFDQSxZQUFJK0YsaUJBQUosRUFBdUI7QUFDckIvRixlQUFLLEdBQUcrRixpQkFBaUIsQ0FBQzVKLEdBQUcsQ0FBQzRDLEdBQUwsQ0FBakIsSUFBOEJnSCxpQkFBaUIsQ0FBQ0QsV0FBRCxDQUF2RDtBQUNEOztBQUNELGNBQUksQ0FBQ25NLElBQUwsQ0FBVSxxQkFBVixFQUFpQ3FHLEtBQWpDO0FBQ0QsT0FURDtBQVVELEtBMUZnQjtBQTJGakJnRyxvQkEzRmlCLDRCQTJGQUMsS0EzRkEsRUEyRk87QUFDdEIsV0FBS3RNLElBQUwsQ0FBVSxxQkFBVixFQUFpQ3NNLEtBQWpDO0FBQ0Q7QUE3RmdCLEdBQVosQ0FBUDtBQStGRCxDOztBQWxHRCw0RTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBR0EsSUFBSTFOLGNBQUosQ0FBWTtBQUNWQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gscUJBQWUsK0JBRFo7QUFFSCx1QkFBaUIscUJBRmQ7QUFHSCxxQkFBZSxZQUhaO0FBS0gsOEJBQXdCLGFBTHJCO0FBTUgsaUNBQTJCLHVCQU54QjtBQU9ILDJCQUFxQixlQVBsQjtBQVFILG9DQUE4QixrQkFSM0I7QUFTSCxpQ0FBMkIsdUJBVHhCO0FBVUgsaUNBQTJCLHVCQVZ4QjtBQVdILDRCQUFzQixrQkFYbkI7QUFZSCxnQ0FBMEIsZUFadkI7QUFhSCw4QkFBd0IsZ0JBYnJCO0FBY0gsbUNBQTZCLHFCQWQxQjtBQWVILDZCQUF1QixlQWZwQjtBQWdCSCw2QkFBdUIsbUJBaEJwQjtBQWlCSCxrQ0FBNEIsaUJBakJ6QjtBQWtCSCxnQ0FBMEIsZUFsQnZCO0FBbUJILHVDQUFpQyxzQkFuQjlCO0FBb0JILHVDQUFpQyxzQkFwQjlCO0FBcUJILHFDQUErQix1QkFyQjVCO0FBc0JILDZCQUF1QixtQkF0QnBCO0FBdUJILDZCQUF1QixtQkF2QnBCO0FBd0JILGlDQUEyQix1QkF4QnhCO0FBeUJILDZCQUF1QixlQXpCcEI7QUEwQkgsNkJBQXVCLGVBMUJwQjtBQTJCSCxzQ0FBZ0Msb0JBM0I3QjtBQTRCSCxnQ0FBMEIsb0JBNUJ2QjtBQTZCSCwrQkFBeUIsaUJBN0J0QjtBQStCSCw4QkFBd0Isb0JBL0JyQjtBQWdDSCwyQkFBcUIsaUJBaENsQjtBQWtDSCxxQkFBZSxXQWxDWjtBQW1DSCx1QkFBaUIsYUFuQ2Q7QUFvQ0gsOEJBQXdCLHlCQXBDckI7QUFxQ0gsd0JBQWtCLGVBckNmO0FBc0NILDhCQUF3QiwwQkF0Q3JCO0FBdUNILHVCQUFpQixjQXZDZDtBQXdDSCxvQkFBYyxXQXhDWDtBQXlDSCxxQkFBZSxZQXpDWjtBQTBDSCxvQkFBYyxXQTFDWDtBQTJDSCxpQkFBVyxRQTNDUjtBQTZDSCw2QkFBdUIsa0JBN0NwQjtBQThDSCwrQkFBeUIscUJBOUN0QjtBQStDSCwyQkFBcUI7QUEvQ2xCO0FBREMsR0FERTtBQW9EVnlOLHFCQUFtQixFQUFFLEtBcERYO0FBc0RWO0FBQ0FDLHFCQXZEVSwrQkF1RFV6TixNQXZEVixFQXVEa0I7QUFDMUJXLHlCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBNEMsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ0MsS0FBVCxDQUFleEcsTUFBZixHQUF3QkEsTUFBeEI7QUFBZ0MsYUFBT3VHLFFBQVA7QUFBa0IsS0FBNUY7QUFDRCxHQXpEUztBQTJEVjtBQUNBbUgsWUE1RFUsc0JBNERDQyxLQTVERCxFQTREUUMsR0E1RFIsRUE0RGE7QUFBQTs7QUFDckJqTix5QkFBU2dELE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsVUFBU2tLLElBQVQsRUFBZTtBQUNyQ0EsVUFBSSxDQUFDRixLQUFELENBQUosR0FBY0MsR0FBZDtBQUNBLFdBQUtFLFFBQUwsQ0FBY0QsSUFBZDtBQUNBLGFBQU9BLElBQVA7QUFDRCxLQUpELEVBSUcsT0FKSCxFQU1HaE4sSUFOSCxDQU1RLFlBQU07QUFDVkYsMkJBQVNnRCxNQUFULENBQWdCLE1BQWhCLEVBQXdCLFVBQUFrSyxJQUFJLEVBQUk7QUFDOUJBLFlBQUksQ0FBQ0YsS0FBRCxDQUFKLEdBQWNDLEdBQWQ7QUFDQSxlQUFPQyxJQUFQO0FBQ0QsT0FIRCxFQUdHLE1BSEgsV0FLTyxZQUFNO0FBQ1gsYUFBSSxDQUFDNU0sSUFBTCxDQUFVLE9BQVYsRUFBbUIsbUJBQW5COztBQUNBLGFBQUksQ0FBQ0EsSUFBTCxDQUFVLG9CQUFWLEVBQWdDME0sS0FBaEM7QUFDRCxPQVJELEVBU0M5TSxJQVRELENBU007QUFBQSxlQUFNLEtBQUksQ0FBQ0ksSUFBTCxDQUFVLCtCQUErQjBNLEtBQXpDLEVBQWdEQSxLQUFoRCxFQUF1REMsR0FBdkQsQ0FBTjtBQUFBLE9BVE47QUFVRCxLQWpCSDtBQWtCRCxHQS9FUztBQWlGVjtBQUNBRyxnQkFsRlUsMEJBa0ZLQyxPQWxGTCxFQWtGY0MsT0FsRmQsRUFrRnVCdEosS0FsRnZCLEVBa0Y4QjtBQUFBOztBQUN0Q2hFLHlCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QnFLLE9BQTVCLEVBQ0duTixJQURILENBQ1E7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGFBQWFnTixPQUFiLEdBQXVCLFdBQWpDLENBQU47QUFBQSxLQURSLFdBRVMsWUFBTTtBQUFFLFVBQUl0SixLQUFKLEVBQVcsTUFBSSxDQUFDMUQsSUFBTCxDQUFVLE9BQVYsRUFBbUIwRCxLQUFuQjtBQUE0QixLQUZ4RDtBQUdELEdBdEZTO0FBdUZWdUosaUJBdkZVLDJCQXVGTUMsR0F2Rk4sRUF1RldDLEtBdkZYLEVBdUZrQjtBQUMxQixTQUFLTCxjQUFMLENBQ0UsVUFBQXhILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUM4SCxPQUFULENBQWlCRixHQUFqQixJQUF5QjtBQUFFQyxhQUFLLEVBQUxBO0FBQUYsT0FBekI7QUFBb0MsYUFBTzdILFFBQVA7QUFBa0IsS0FEdEUsRUFFRSxRQUZGLEVBR0Usa0JBSEY7QUFLRCxHQTdGUztBQThGVitILG9CQTlGVSw4QkE4RlNILEdBOUZULEVBOEZjO0FBQ3RCLFNBQUtKLGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQUUsYUFBT0EsUUFBUSxDQUFDOEgsT0FBVCxDQUFpQkYsR0FBakIsQ0FBUDtBQUE4QixhQUFPNUgsUUFBUDtBQUFrQixLQURoRSxFQUVFLFFBRkYsRUFHRSxxQkFIRjtBQUtELEdBcEdTO0FBcUdWZ0ksYUFyR1UsdUJBcUdFSixHQXJHRixFQXFHT0MsS0FyR1AsRUFxR2M7QUFDdEIsUUFBSSxDQUFDRCxHQUFMLEVBQVUsT0FBTyxLQUFQO0FBRVYsU0FBS0osY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDOEgsT0FBVCxDQUFpQkYsR0FBakIsRUFBc0JDLEtBQXRCLEdBQThCQSxLQUE5QjtBQUFxQyxhQUFPN0gsUUFBUDtBQUFrQixLQUR2RSxFQUVFLE9BRkYsRUFHRSxrQkFIRjtBQUtELEdBN0dTO0FBOEdWaUksZUE5R1UseUJBOEdJTCxHQTlHSixFQThHU00sS0E5R1QsRUE4R2dCO0FBQ3hCLFNBQUtWLGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQ1YsVUFBSW1JLE1BQU0sR0FBR25JLFFBQVEsQ0FBQzhILE9BQVQsQ0FBaUJGLEdBQWpCLENBQWI7O0FBRUEsVUFBSU8sTUFBSixFQUFZO0FBQ1YsWUFBSUMsS0FBSyxHQUFHRCxNQUFNLENBQUNOLEtBQVAsQ0FBYU8sS0FBYixDQUFtQixHQUFuQixDQUFaO0FBQUEsWUFDSXBFLENBQUMsR0FBR29FLEtBQUssQ0FBQ3ZLLE1BRGQ7QUFBQSxZQUNzQmdLLEtBRHRCOztBQUdBLGVBQU83RCxDQUFDLEVBQVIsRUFBWTtBQUNWNkQsZUFBSyxHQUFHTyxLQUFLLENBQUNwRSxDQUFELENBQWI7O0FBQ0EsY0FBSTZELEtBQUssQ0FBQ3ZLLFFBQU4sQ0FBZSxrQkFBZixDQUFKLEVBQXdDO0FBQ3RDMEMsb0JBQVEsQ0FBQzhILE9BQVQsQ0FBaUJGLEdBQWpCLEVBQXNCQyxLQUF0QixHQUE4Qk0sTUFBTSxDQUFDTixLQUFQLENBQWFRLE9BQWIsQ0FBcUIsd0JBQXJCLEVBQStDLHNCQUFzQkgsS0FBckUsQ0FBOUI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxhQUFPbEksUUFBUDtBQUNELEtBakJILEVBa0JFLFVBbEJGLEVBbUJFLGtCQW5CRjtBQXFCRCxHQXBJUztBQXFJVnNJLHVCQXJJVSxpQ0FxSVlWLEdBcklaLEVBcUlpQlcsUUFySWpCLEVBcUkyQjtBQUNuQyxTQUFLZixjQUFMLENBQ0UsVUFBQXhILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUM4SCxPQUFULENBQWlCRixHQUFqQixFQUFzQlcsUUFBdEIsR0FBaUNBLFFBQWpDO0FBQTJDLGFBQU92SSxRQUFQO0FBQWtCLEtBRDdFLEVBRUUsVUFGRixFQUdFLDRCQUhGO0FBS0QsR0EzSVM7QUE0SVZ3SSxrQkE1SVUsNEJBNElPL0UsTUE1SVAsRUE0SWU7QUFDdkIsU0FBSytELGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQzhFLElBQVQsQ0FBYzJELFVBQWQsR0FBMkJoRixNQUEzQjtBQUFtQyxhQUFPekQsUUFBUDtBQUFrQixLQURyRSxFQUVFLGFBRkYsRUFHRSx3QkFIRjtBQUtELEdBbEpTO0FBbUpWMEksdUJBbkpVLGlDQW1KWWQsR0FuSlosRUFtSmlCL0gsTUFuSmpCLEVBbUp5QjtBQUNqQyxTQUFLMkgsY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDbEMsU0FBVCxDQUFtQjhKLEdBQW5CLEVBQXdCLENBQXhCLElBQTZCL0gsTUFBN0I7QUFBcUMsYUFBT0csUUFBUDtBQUFrQixLQUR2RSxFQUVFLFVBRkYsRUFHRSx1QkFIRjtBQUtELEdBekpTO0FBMEpWMkksdUJBMUpVLGlDQTBKWWYsR0ExSlosRUEwSmlCZ0IsS0ExSmpCLEVBMEp3QjtBQUNoQyxTQUFLcEIsY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDbEMsU0FBVCxDQUFtQjhKLEdBQW5CLEVBQXdCLENBQXhCLElBQTZCZ0IsS0FBN0I7QUFBb0MsYUFBTzVJLFFBQVA7QUFBa0IsS0FEdEUsRUFFRSxVQUZGLEVBR0Usc0JBSEY7QUFLRCxHQWhLUztBQWlLVjZJLGVBaktVLHlCQWlLSUQsS0FqS0osRUFpS1c7QUFDbkIsU0FBS3BCLGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQnNJLE1BQWpCLEdBQTBCRixLQUExQjtBQUFpQyxhQUFPNUksUUFBUDtBQUFrQixLQURuRSxFQUVFLE1BRkY7QUFJRCxHQXRLUztBQXVLVitJLGVBdktVLHlCQXVLSUgsS0F2S0osRUF1S1c7QUFDbkIsU0FBS3BCLGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQndJLElBQWpCLEdBQXdCSixLQUF4QjtBQUErQixhQUFPNUksUUFBUDtBQUFrQixLQURqRSxFQUVFLE1BRkY7QUFJRCxHQTVLUztBQTZLVmlKLG9CQTdLVSw4QkE2S1NDLE1BN0tULEVBNktpQjtBQUN6QixTQUFLMUIsY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDOEUsSUFBVCxDQUFjcUUsWUFBZCxHQUE2QkQsTUFBN0I7QUFBcUMsYUFBT2xKLFFBQVA7QUFBa0IsS0FEdkUsRUFFRSxlQUZGLEVBR0UsMEJBSEY7QUFLRCxHQW5MUztBQW9MVm9KLG9CQXBMVSw4QkFvTFNSLEtBcExULEVBb0xnQjtBQUN4QixTQUFLcEIsY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDUSxPQUFULENBQWlCNkksRUFBakIsR0FBc0JULEtBQXRCO0FBQTZCLGFBQU81SSxRQUFQO0FBQWtCLEtBRC9ELEVBRUUsZ0JBRkY7QUFJRCxHQXpMUztBQTBMVnNKLGtCQTFMVSw0QkEwTE8xQixHQTFMUCxFQTBMWWdCLEtBMUxaLEVBMExtQjtBQUMzQixTQUFLcEIsY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDbEMsU0FBVCxDQUFtQjhKLEdBQW5CLEVBQXdCLENBQXhCLElBQTZCZ0IsS0FBN0I7QUFBb0MsYUFBTzVJLFFBQVA7QUFBa0IsS0FEdEUsRUFFRSxLQUZGLEVBR0UsZ0JBSEY7QUFLRCxHQWhNUztBQWlNVnVKLGVBak1VLHlCQWlNSWxDLEdBak1KLEVBaU1TO0FBQ2pCLFNBQUtHLGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQmdKLFFBQWpCLEdBQTRCbkMsR0FBNUI7QUFBaUMsYUFBT3JILFFBQVA7QUFBa0IsS0FEbkUsRUFFRSxTQUZGLEVBR0UscUJBSEY7QUFLRCxHQXZNUztBQXdNVnlKLGdCQXhNVSwwQkF3TUtwQyxHQXhNTCxFQXdNVTtBQUNsQixTQUFLRyxjQUFMLENBQ0UsVUFBQXhILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNRLE9BQVQsQ0FBaUJrSixLQUFqQixHQUF5QnJDLEdBQXpCO0FBQThCLGFBQU9ySCxRQUFQO0FBQWtCLEtBRGhFLEVBRUUsVUFGRixFQUdFLHFCQUhGO0FBS0QsR0E5TVM7QUErTVYySixxQkEvTVUsK0JBK01VdEMsR0EvTVYsRUErTWU7QUFDdkIsU0FBS0csY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDUSxPQUFULENBQWlCb0osVUFBakIsR0FBOEJ2QyxHQUE5QjtBQUFtQyxhQUFPckgsUUFBUDtBQUFrQixLQURyRSxFQUVFLGVBRkYsRUFHRSxxQkFIRjtBQUtELEdBck5TO0FBc05WNkosZUF0TlUseUJBc05JeEMsR0F0TkosRUFzTlM7QUFDakIsU0FBS0csY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDUSxPQUFULENBQWlCK0YsVUFBakIsR0FBOEJjLEdBQTlCO0FBQW1DLGFBQU9ySCxRQUFQO0FBQWtCLEtBRHJFLEVBRUUsU0FGRjtBQUlELEdBM05TO0FBNE5WOEosbUJBNU5VLDZCQTROUXpDLEdBNU5SLEVBNE5hO0FBQ3JCLFNBQUtHLGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQmdDLFVBQWpCLEdBQThCNkUsR0FBOUI7QUFBbUMsYUFBT3JILFFBQVA7QUFBa0IsS0FEckUsRUFFRSxhQUZGLEVBR0UsaUJBSEY7QUFLRCxHQWxPUztBQW1PVitKLGlCQW5PVSwyQkFtT00xQyxHQW5PTixFQW1PVztBQUNuQixTQUFLRyxjQUFMLENBQ0UsVUFBQXhILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNRLE9BQVQsQ0FBaUJ1QyxNQUFqQixHQUEwQnNFLEdBQTFCO0FBQStCLGFBQU9ySCxRQUFQO0FBQWtCLEtBRGpFLEVBRUUsUUFGRixFQUdFLG1CQUhGO0FBS0QsR0F6T1M7QUEwT1ZnSyxlQTFPVSx5QkEwT0kzQyxHQTFPSixFQTBPUztBQUNqQixTQUFLRyxjQUFMLENBQ0UsVUFBQXhILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNRLE9BQVQsQ0FBaUJxRSxRQUFqQixHQUE0QndDLEdBQTVCO0FBQWlDLGFBQU9ySCxRQUFQO0FBQWtCLEtBRG5FLEVBRUUsU0FGRixFQUdFLG1CQUhGO0FBS0QsR0FoUFM7QUFpUFZpSyxzQkFqUFUsZ0NBaVBXQyxJQWpQWCxFQWlQaUI3QyxHQWpQakIsRUFpUHNCO0FBQzlCLFNBQUtHLGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ1EsT0FBVCxDQUFpQjBKLElBQWpCLElBQXlCN0MsR0FBekI7QUFBOEIsYUFBT3JILFFBQVA7QUFBa0IsS0FEaEUsRUFFRSxhQUZGLEVBR0UscUJBSEY7QUFLRCxHQXZQUztBQXdQVm1LLHNCQXhQVSxnQ0F3UFdELElBeFBYLEVBd1BpQjdDLEdBeFBqQixFQXdQc0I7QUFDOUIsU0FBS0csY0FBTCxDQUNFLFVBQUF4SCxRQUFRLEVBQUk7QUFBRUEsY0FBUSxDQUFDUSxPQUFULENBQWlCMEosSUFBakIsSUFBeUI3QyxHQUF6QjtBQUE4QixhQUFPckgsUUFBUDtBQUFrQixLQURoRSxFQUVFLGFBRkYsRUFHRSxxQkFIRjtBQUtELEdBOVBTO0FBK1BWb0ssdUJBL1BVLGlDQStQWUYsSUEvUFosRUErUGtCN0MsR0EvUGxCLEVBK1B1QjtBQUMvQixTQUFLRyxjQUFMLENBQ0UsVUFBQXhILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUM4RSxJQUFULENBQWNvRixJQUFkLElBQXNCN0MsR0FBdEI7QUFBMkIsYUFBT3JILFFBQVA7QUFBa0IsS0FEN0QsRUFFRSxjQUZGLEVBR0UsbUJBSEY7QUFLRCxHQXJRUztBQXNRVnFLLG1CQXRRVSw2QkFzUVFILElBdFFSLEVBc1FjN0MsR0F0UWQsRUFzUW1CO0FBQzNCLFNBQUtHLGNBQUwsQ0FDRSxVQUFBeEgsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQzhFLElBQVQsQ0FBY29GLElBQWQsSUFBc0I3QyxHQUF0QjtBQUEyQixhQUFPckgsUUFBUDtBQUFrQixLQUQ3RCxFQUVFLE1BRkYsRUFHRSxtQkFIRjtBQUtELEdBNVFTO0FBNlFWc0ssdUJBN1FVLGlDQTZRWUosSUE3UVosRUE2UWtCN0MsR0E3UWxCLEVBNlF1QjtBQUMvQixTQUFLRyxjQUFMLENBQ0UsVUFBQXhILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUM4RSxJQUFULENBQWNvRixJQUFkLElBQXNCN0MsR0FBdEI7QUFBMkIsYUFBT3JILFFBQVA7QUFBa0IsS0FEN0QsRUFFRSxVQUZGLEVBR0UsbUJBSEY7QUFLRCxHQW5SUztBQW9SVnVLLGlCQXBSVSwyQkFvUk1sRCxHQXBSTixFQW9SVztBQUNuQixTQUFLRyxjQUFMLENBQ0UsVUFBQXhILFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUNDLEtBQVQsQ0FBZUMsTUFBZixHQUF3Qm1ILEdBQXhCO0FBQTZCLGFBQU9ySCxRQUFQO0FBQWtCLEtBRC9ELEVBRUUsUUFGRixFQUdFLG1CQUhGO0FBS0QsR0ExUlM7QUEyUlZ3SyxrQkEzUlUsNEJBMlJPdE4sR0EzUlAsRUEyUll1TixRQTNSWixFQTJSc0I7QUFDOUJyUSx5QkFBU2dELE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEIsVUFBQTRDLFFBQVEsRUFBSTtBQUFFQSxjQUFRLENBQUN6RCxFQUFULENBQVkwRSxJQUFaLENBQWlCL0QsR0FBakIsRUFBc0J1TixRQUF0QixHQUFpQ0EsUUFBakM7QUFBMkMsYUFBT3pLLFFBQVA7QUFBa0IsS0FBdkc7QUFDRCxHQTdSUztBQThSVjBLLHFCQTlSVSwrQkE4UlVDLEtBOVJWLEVBOFJpQjtBQUN6QnZRLHlCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBNEMsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ3pELEVBQVQsQ0FBWW9PLEtBQVosR0FBb0JBLEtBQXBCO0FBQTJCLGFBQU8zSyxRQUFQO0FBQWtCLEtBQXZGO0FBQ0QsR0FoU1M7QUFrU1Y7QUFDQTRLLGNBblNVLHdCQW1TR0MsS0FuU0gsRUFtU1UxSCxJQW5TVixFQW1TZ0I7QUFBQTs7QUFDeEIsUUFBSSxDQUFDMEgsS0FBSyxDQUFDaE4sTUFBWCxFQUFtQjtBQUVuQnNGLFFBQUksR0FBRyxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxNQUF6QztBQUVBLFFBQUkySCxXQUFXLEdBQUcsRUFBbEI7QUFFQSxXQUFPMVEscUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFvRCxPQUFPLEVBQUk7QUFDM0MsVUFBSTdELENBQUMsR0FBR2tPLEtBQUssQ0FBQ2hOLE1BQWQ7QUFBQSxVQUFzQmdGLElBQXRCOztBQUNBLGFBQU9sRyxDQUFDLEVBQVIsRUFBWTtBQUNWa0csWUFBSSxHQUFHZ0ksS0FBSyxDQUFDbE8sQ0FBRCxDQUFaO0FBQ0EsWUFBSTZELE9BQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLENBQUosRUFBMkJyQyxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JrQyxJQUFoQixFQUFzQmtJLElBQXRCLENBQTJCbE4sTUFBM0IsR0FBb0MsQ0FBcEMsQ0FBM0IsS0FDS2lOLFdBQVcsQ0FBQ3ROLElBQVosQ0FBaUJxRixJQUFqQjtBQUNOOztBQUNELGFBQU9yQyxPQUFQO0FBQ0QsS0FSTSxFQVFKMkMsSUFSSSxFQVNON0ksSUFUTSxDQVNELFlBQU07QUFBRSxVQUFJNkksSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFBRSxjQUFJLENBQUN6SSxJQUFMLENBQVUsaUJBQVY7QUFBK0I7QUFBQyxLQVQvRCxXQVVBO0FBQUEsYUFBTSxNQUFJLENBQUNBLElBQUwsQ0FBVSxPQUFWLEVBQW1CLHFCQUFuQixDQUFOO0FBQUEsS0FWQSxFQVdOSixJQVhNLENBV0QsWUFBTTtBQUFFLFVBQUk2SSxJQUFJLEtBQUssTUFBVCxJQUFtQjJILFdBQVcsQ0FBQ2pOLE1BQW5DLEVBQTJDO0FBQUUsY0FBSSxDQUFDK00sWUFBTCxDQUFrQkUsV0FBbEIsRUFBK0IsT0FBL0I7QUFBMEM7QUFBQyxLQVgvRixDQUFQO0FBWUQsR0F0VFM7QUF1VFZFLFdBdlRVLHFCQXVUQWpLLEtBdlRBLEVBdVRPO0FBQUE7O0FBQ2ZBLFNBQUssQ0FBQ2dLLElBQU4sR0FBYSxFQUFiO0FBQ0EsUUFBTWxJLElBQUksR0FBRzlCLEtBQUssQ0FBQzhCLElBQW5COztBQUNBekkseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFvRCxPQUFPLEVBQUk7QUFDcENBLGFBQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLElBQXdCOUIsS0FBeEI7QUFDQSxhQUFPUCxPQUFQO0FBQ0QsS0FIRCxFQUlHbEcsSUFKSCxDQUlRLFVBQUFrRyxPQUFPO0FBQUEsYUFBSSxNQUFJLENBQUM5RixJQUFMLENBQVUsYUFBVixFQUF5QjhGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLENBQXpCLENBQUo7QUFBQSxLQUpmLFdBS1M7QUFBQSxhQUFNLE1BQUksQ0FBQ25JLElBQUwsQ0FBVSxtQkFBVixFQUErQixrQkFBL0IsQ0FBTjtBQUFBLEtBTFQ7QUFNRCxHQWhVUztBQWlVVnVRLGFBalVVLHVCQWlVRWhJLE9BalVGLEVBaVVXQyxPQWpVWCxFQWlVb0JDLElBalVwQixFQWlVMEI7QUFBQTs7QUFDbEMvSSx5QkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQW9ELE9BQU8sRUFBSTtBQUNwQyxVQUFNTyxLQUFLLEdBQUcsa0JBQU1QLE9BQU8sQ0FBQ0csT0FBUixDQUFnQnNDLE9BQWhCLENBQU4sQ0FBZDtBQUNBbEMsV0FBSyxDQUFDOEIsSUFBTixHQUFhSyxPQUFiO0FBQ0ExQyxhQUFPLENBQUNHLE9BQVIsQ0FBZ0J1QyxPQUFoQixJQUEyQm5DLEtBQTNCO0FBQ0EsYUFBT1AsT0FBTyxDQUFDRyxPQUFSLENBQWdCc0MsT0FBaEIsQ0FBUDtBQUNBLGFBQU96QyxPQUFQO0FBQ0QsS0FORCxFQU1HMkMsSUFOSCxFQU9HN0ksSUFQSCxDQU9RLFVBQUFrRyxPQUFPO0FBQUEsYUFBSSxNQUFJLENBQUM5RixJQUFMLENBQVUsa0NBQVYsRUFBOEM4RixPQUFPLENBQUNHLE9BQVIsQ0FBZ0J1QyxPQUFoQixDQUE5QyxFQUF3RUQsT0FBeEUsQ0FBSjtBQUFBLEtBUGYsV0FRUztBQUFBLGFBQU0sTUFBSSxDQUFDdkksSUFBTCxDQUFVLHFCQUFWLEVBQWlDLG9CQUFqQyxDQUFOO0FBQUEsS0FSVDtBQVNELEdBM1VTO0FBNFVWd1EseUJBNVVVLG1DQTRVY25LLEtBNVVkLEVBNFVxQm9DLElBNVVyQixFQTRVMkI7QUFBQTs7QUFDbkNBLFFBQUksR0FBRyxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQ3BDLEtBQUssQ0FBQ29LLE1BQU4sR0FBZSxNQUFmLEdBQXdCLE9BQWpFO0FBRUEsUUFBTXRJLElBQUksR0FBRzlCLEtBQUssQ0FBQzhCLElBQW5CO0FBQ0EsUUFBTXVJLHFCQUFxQixHQUFHLENBQUMsQ0FBQ3JLLEtBQUssQ0FBQ2pCLEdBQXRDO0FBQ0EsUUFBSXVMLEtBQUssR0FBRyxJQUFaOztBQUVBalIseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFvRCxPQUFPLEVBQUk7QUFDcEMsVUFBSTRLLHFCQUFKLEVBQTJCO0FBQ3pCNUssZUFBTyxDQUFDRyxPQUFSLENBQWdCa0MsSUFBaEIsSUFBd0I5QixLQUF4QjtBQUNBUCxlQUFPLENBQUNHLE9BQVIsQ0FBZ0JrQyxJQUFoQixFQUFzQmtJLElBQXRCLEdBQTZCdkssT0FBTyxDQUFDRyxPQUFSLENBQWdCa0MsSUFBaEIsRUFBc0JrSSxJQUF0QixJQUE4QixFQUEzRDtBQUNELE9BSEQsTUFHTztBQUNMLFlBQUksQ0FBQ3ZLLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLENBQUwsRUFBNEI7QUFDMUJ3SSxlQUFLLEdBQUcsS0FBUjtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPdEssS0FBSyxDQUFDb0ssTUFBYjs7QUFDQSxlQUFLLElBQUkzSixDQUFULElBQWNULEtBQWQsRUFBcUI7QUFDbkIsZ0JBQUlBLEtBQUssQ0FBQ3VLLGNBQU4sQ0FBcUI5SixDQUFyQixDQUFKLEVBQTZCO0FBQzNCaEIscUJBQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLEVBQXNCckIsQ0FBdEIsSUFBMkJULEtBQUssQ0FBQ1MsQ0FBRCxDQUFoQztBQUNEO0FBQ0Y7O0FBQ0RoQixpQkFBTyxDQUFDRyxPQUFSLENBQWdCa0MsSUFBaEIsRUFBc0JrSSxJQUF0QixHQUE2QnZLLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLEVBQXNCa0ksSUFBdEIsSUFBOEIsRUFBM0Q7QUFDRDtBQUNGOztBQUVELGFBQU92SyxPQUFQO0FBQ0QsS0FuQkQsRUFtQkcyQyxJQW5CSCxXQW9CUyxVQUFDM0IsQ0FBRDtBQUFBLGFBQU8sTUFBSSxDQUFDOUcsSUFBTCxDQUFVLHFCQUFWLEVBQWlDLG9CQUFqQyxDQUFQO0FBQUEsS0FwQlQsRUFxQkdKLElBckJILENBcUJRLFlBQU07QUFBRSxVQUFJLENBQUMrUSxLQUFMLEVBQVk7QUFBRSxjQUFJLENBQUNILHVCQUFMLENBQTZCbkssS0FBN0IsRUFBb0NBLEtBQUssQ0FBQ29LLE1BQU4sR0FBZSxPQUFmLEdBQXlCLE1BQTdEO0FBQXVFO0FBQUMsS0FyQnRHLEVBc0JHN1EsSUF0QkgsQ0FzQlE7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLHFDQUFWLEVBQWlEcUcsS0FBakQsQ0FBTjtBQUFBLEtBdEJSO0FBdUJELEdBMVdTO0FBMldWd0ssZUEzV1UseUJBMldJVixLQTNXSixFQTJXVzFILElBM1dYLEVBMldpQjtBQUFBOztBQUN6QixRQUFJLENBQUMwSCxLQUFLLENBQUNoTixNQUFYLEVBQW1CO0FBRW5Cc0YsUUFBSSxHQUFHLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLE1BQXpDO0FBRUEsUUFBSTJILFdBQVcsR0FBRyxFQUFsQjtBQUVBLFdBQU8xUSxxQkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQW9ELE9BQU8sRUFBSTtBQUMzQyxVQUFJcUMsSUFBSixFQUFVL0MsR0FBVixFQUFla0IsYUFBZjs7QUFFQSxhQUFPNkosS0FBSyxDQUFDaE4sTUFBYixFQUFxQjtBQUNuQmdGLFlBQUksR0FBR2dJLEtBQUssQ0FBQ1csR0FBTixFQUFQOztBQUNBLFlBQUloTCxPQUFPLENBQUNHLE9BQVIsSUFBbUJtRCxNQUFNLENBQUNDLElBQVAsQ0FBWXZELE9BQU8sQ0FBQ0csT0FBcEIsRUFBNkJoRCxPQUE3QixDQUFxQ2tGLElBQXJDLE1BQStDLENBQUMsQ0FBdkUsRUFBMEU7QUFDeEUvQyxhQUFHLEdBQUdVLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLEVBQXNCL0MsR0FBNUI7QUFDQWtCLHVCQUFhLEdBQUdSLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLEVBQXNCN0IsYUFBdEM7QUFFQSxpQkFBT1IsT0FBTyxDQUFDRyxPQUFSLENBQWdCa0MsSUFBaEIsQ0FBUDs7QUFDQSxnQkFBSSxDQUFDbkksSUFBTCxDQUFVLGVBQVYsRUFBMkJtSSxJQUEzQixFQUFpQy9DLEdBQWpDLEVBQXNDa0IsYUFBdEM7QUFDRCxTQU5ELE1BTU87QUFDTDhKLHFCQUFXLENBQUN0TixJQUFaLENBQWlCcUYsSUFBakI7QUFDRDtBQUNGOztBQUNELGFBQU9yQyxPQUFQO0FBQ0QsS0FoQk0sRUFnQkoyQyxJQWhCSSxXQWlCRTtBQUFBLGFBQU0sTUFBSSxDQUFDekksSUFBTCxDQUFVLHVCQUFWLEVBQW1DLGlCQUFuQyxDQUFOO0FBQUEsS0FqQkYsRUFrQkpKLElBbEJJLENBa0JDLFlBQU07QUFBRSxVQUFJNkksSUFBSSxLQUFLLE1BQVQsSUFBbUIySCxXQUFXLENBQUNqTixNQUFuQyxFQUEyQztBQUFFLGNBQUksQ0FBQzBOLGFBQUwsQ0FBbUJULFdBQW5CLEVBQWdDLE9BQWhDO0FBQTJDO0FBQUMsS0FsQmxHLEVBbUJKeFEsSUFuQkksQ0FtQkM7QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGlCQUFWLENBQU47QUFBQSxLQW5CRCxDQUFQO0FBb0JELEdBdFlTO0FBdVlWK1EsMEJBdllVLG9DQXVZZUMsU0F2WWYsRUF1WTBCQyxhQXZZMUIsRUF1WXlDQyxTQXZZekMsRUF1WW9EekksSUF2WXBELEVBdVkwRDtBQUNsRS9JLHlCQUFTQyxHQUFULENBQWEsVUFBYixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQTBGLFFBQVEsRUFBSTtBQUN4QyxVQUFJQSxRQUFRLENBQUNRLE9BQVQsQ0FBaUJvSixVQUFqQixLQUFnQyxJQUFwQyxFQUEwQztBQUN4Q3hQLDZCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBb0QsT0FBTyxFQUFJO0FBQ3BDLGNBQU1xTCxZQUFZLEdBQUdyTCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IrSyxTQUFoQixFQUEyQlgsSUFBM0IsSUFBbUMsRUFBeEQ7QUFDQSxjQUFNZSxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLGNBQU1DLGVBQWUsR0FBRyxFQUF4QjtBQUVBdkwsaUJBQU8sQ0FBQ0csT0FBUixDQUFnQitLLFNBQWhCLEVBQTJCMUUsS0FBM0IsR0FBbUMyRSxhQUFuQztBQUVBQSx1QkFBYSxDQUFDSyxPQUFkLENBQXNCLFVBQUFDLElBQUk7QUFBQSxtQkFBSUgsZ0JBQWdCLENBQUN0TyxJQUFqQixDQUFzQnlPLElBQUksQ0FBQ3JQLEVBQTNCLENBQUo7QUFBQSxXQUExQjtBQUVBLGNBQUlvSCxDQUFDLEdBQUc2SCxZQUFZLENBQUNoTyxNQUFyQjtBQUFBLGNBQTZCakIsRUFBN0I7O0FBRUEsaUJBQU9vSCxDQUFDLEVBQVIsRUFBWTtBQUNWcEgsY0FBRSxHQUFHaVAsWUFBWSxDQUFDN0gsQ0FBRCxDQUFaLENBQWdCcEgsRUFBckI7O0FBQ0EsZ0JBQUlrUCxnQkFBZ0IsQ0FBQ3hPLFFBQWpCLENBQTBCVixFQUExQixDQUFKLEVBQW1DO0FBQ2pDaVAsMEJBQVksQ0FBQ25PLE1BQWIsQ0FBb0JzRyxDQUFwQixFQUF1QixDQUF2QjtBQUNELGFBRkQsTUFFTztBQUNMK0gsNkJBQWUsQ0FBQ3ZPLElBQWhCLENBQXFCWixFQUFyQjtBQUNEO0FBQ0Y7O0FBRURnUCxtQkFBUyxDQUFDSSxPQUFWLENBQWtCLFVBQUFDLElBQUksRUFBSTtBQUN4QixnQkFBSSxDQUFDRixlQUFlLENBQUN6TyxRQUFoQixDQUF5QjJPLElBQUksQ0FBQ3JQLEVBQTlCLENBQUwsRUFBd0NpUCxZQUFZLENBQUNyTyxJQUFiLENBQWtCeU8sSUFBbEI7QUFDekMsV0FGRDtBQUlBekwsaUJBQU8sQ0FBQ0csT0FBUixDQUFnQitLLFNBQWhCLEVBQTJCWCxJQUEzQixHQUFrQ2MsWUFBbEM7QUFFQSxpQkFBT3JMLE9BQVA7QUFDRCxTQTNCRCxFQTJCRzJDLElBM0JIO0FBNEJEO0FBQ0YsS0EvQkQ7QUFnQ0QsR0F4YVM7QUF5YVYrSSxXQXphVSxxQkF5YUFySixJQXphQSxFQXlhTXdFLEdBemFOLEVBeWFXO0FBQUE7O0FBQ25CLFFBQU04RSxNQUFNLEdBQUc5RSxHQUFHLEdBQUcsT0FBSCxHQUFhLE1BQS9CO0FBQ0EsUUFBTStFLE1BQU0sR0FBRy9FLEdBQUcsR0FBRyxNQUFILEdBQVksT0FBOUI7QUFFQSxRQUFJdEcsS0FBSjs7QUFFQTNHLHlCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBb0QsT0FBTyxFQUFJO0FBQ3BDTyxXQUFLLEdBQUcsa0JBQU1QLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLENBQU4sQ0FBUjtBQUNBOUIsV0FBSyxDQUFDb0ssTUFBTixHQUFlOUQsR0FBZjtBQUNBLGFBQU83RyxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JrQyxJQUFoQixDQUFQO0FBQ0EsYUFBT3JDLE9BQVA7QUFDRCxLQUxELEVBS0cyTCxNQUxILEVBT0c3UixJQVBILENBT1EsWUFBTTtBQUNWRiwyQkFBU2dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQW9ELE9BQU8sRUFBSTtBQUNwQ0EsZUFBTyxDQUFDRyxPQUFSLENBQWdCa0MsSUFBaEIsSUFBd0I5QixLQUF4QjtBQUNBLGVBQU9QLE9BQVA7QUFDRCxPQUhELEVBR0c0TCxNQUhILEVBS0M5UixJQUxELENBS007QUFBQSxlQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGtDQUFWLEVBQThDcUcsS0FBOUMsQ0FBTjtBQUFBLE9BTE4sV0FNTztBQUFBLGVBQU0sTUFBSSxDQUFDckcsSUFBTCxDQUFVLG1CQUFWLEVBQStCbUksSUFBL0IsQ0FBTjtBQUFBLE9BTlA7QUFPRCxLQWZIO0FBZ0JELEdBL2JTO0FBZ2NWd0osWUFoY1Usc0JBZ2NDeEIsS0FoY0QsRUFnY1F5QixHQWhjUixFQWdjYTtBQUFBOztBQUNyQmxTLHlCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBb0QsT0FBTyxFQUFJO0FBQ3BDLFVBQU1HLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUF4QjtBQUNBa0ssV0FBSyxDQUFDdkQsSUFBTixDQUFXMEUsT0FBWCxDQUFtQixVQUFBbkosSUFBSTtBQUFBLGVBQUksTUFBSSxDQUFDMEosYUFBTCxDQUFtQjVMLE9BQU8sQ0FBQ2tDLElBQUQsQ0FBMUIsRUFBa0N5SixHQUFsQyxDQUFKO0FBQUEsT0FBdkI7QUFDQSxhQUFPOUwsT0FBUDtBQUNELEtBSkQsRUFJRyxNQUpILEVBS0dsRyxJQUxILENBS1EsWUFBTTtBQUNWLGFBQU9GLHFCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBb0QsT0FBTyxFQUFJO0FBQzNDLFlBQU1HLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUF4QjtBQUNBa0ssYUFBSyxDQUFDMkIsS0FBTixDQUFZUixPQUFaLENBQW9CLFVBQUFuSixJQUFJO0FBQUEsaUJBQUksTUFBSSxDQUFDMEosYUFBTCxDQUFtQjVMLE9BQU8sQ0FBQ2tDLElBQUQsQ0FBMUIsRUFBa0N5SixHQUFsQyxDQUFKO0FBQUEsU0FBeEI7QUFDQSxlQUFPOUwsT0FBUDtBQUNELE9BSk0sRUFJSixPQUpJLENBQVA7QUFLRCxLQVhIO0FBWUQsR0E3Y1M7QUE4Y1ZpTSxXQTljVSxxQkE4Y0FILEdBOWNBLEVBOGNLdkwsS0E5Y0wsRUE4Y1k7QUFBQTs7QUFDcEIsUUFBTW9DLElBQUksR0FBR3BDLEtBQUssQ0FBQ29LLE1BQU4sR0FBZSxNQUFmLEdBQXdCLE9BQXJDO0FBQ0EsUUFBTXRJLElBQUksR0FBRzlCLEtBQUssQ0FBQzhCLElBQW5COztBQUVBekkseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFvRCxPQUFPLEVBQUk7QUFDcEMsVUFBTWtNLFdBQVcsR0FBR2xNLE9BQU8sQ0FBQ0csT0FBUixDQUFnQmtDLElBQWhCLENBQXBCO0FBQ0EsVUFBTThKLEVBQUUsR0FBRyxJQUFJQyxNQUFKLENBQVcsTUFBSU4sR0FBSixHQUFRLEtBQVIsR0FBY0EsR0FBZCxHQUFrQixTQUFsQixHQUE0QkEsR0FBNUIsR0FBZ0MsU0FBaEMsR0FBMENBLEdBQTFDLEdBQThDLEdBQXpELENBQVg7O0FBQ0EsVUFBSUksV0FBVyxDQUFDSixHQUFoQixFQUFxQjtBQUNuQkksbUJBQVcsQ0FBQ0osR0FBWixHQUFrQkksV0FBVyxDQUFDSixHQUFaLENBQ2ZqRSxPQURlLENBQ1BzRSxFQURPLEVBQ0gsR0FERyxFQUVmdEUsT0FGZSxDQUVQLFNBRk8sRUFFSSxFQUZKLEVBR2ZBLE9BSGUsQ0FHUCxRQUhPLEVBR0csR0FISCxDQUFsQjtBQUlEOztBQUNELGFBQU83SCxPQUFQO0FBQ0QsS0FWRCxFQVVHMkMsSUFWSCxFQVdHN0ksSUFYSCxDQVdRLFVBQUFrRyxPQUFPO0FBQUEsYUFBSSxPQUFJLENBQUM5RixJQUFMLENBQVUsa0NBQVYsRUFBOEM4RixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JrQyxJQUFoQixDQUE5QyxDQUFKO0FBQUEsS0FYZjtBQVlELEdBOWRTO0FBK2RWZ0ssUUEvZFUsa0JBK2RIUCxHQS9kRyxFQStkRXZMLEtBL2RGLEVBK2RTO0FBQUE7O0FBQ2pCLFFBQU1vQyxJQUFJLEdBQUdwQyxLQUFLLENBQUNvSyxNQUFOLEdBQWUsTUFBZixHQUF3QixPQUFyQztBQUNBLFFBQU10SSxJQUFJLEdBQUc5QixLQUFLLENBQUM4QixJQUFuQjs7QUFDQXpJLHlCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixVQUFBb0QsT0FBTyxFQUFJO0FBQ3BDLGFBQUksQ0FBQytMLGFBQUwsQ0FBbUIvTCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JrQyxJQUFoQixDQUFuQixFQUEwQ3lKLEdBQTFDOztBQUNBLGFBQU85TCxPQUFQO0FBQ0QsS0FIRCxFQUdHMkMsSUFISDtBQUlELEdBdGVTO0FBdWVWb0osZUF2ZVUseUJBdWVJeEwsS0F2ZUosRUF1ZVd1TCxHQXZlWCxFQXVlZ0I7QUFDeEIsUUFBSSxDQUFDQSxHQUFMLEVBQVV2TCxLQUFLLENBQUN1TCxHQUFOLEdBQVksRUFBWixDQUFWLEtBQ0ssSUFBSSxDQUFDdkwsS0FBSyxDQUFDdUwsR0FBWCxFQUFnQnZMLEtBQUssQ0FBQ3VMLEdBQU4sR0FBWUEsR0FBWixDQUFoQixLQUNBO0FBQ0gsVUFBTUssRUFBRSxHQUFHLElBQUlDLE1BQUosQ0FBVyxNQUFJTixHQUFKLEdBQVEsS0FBUixHQUFjQSxHQUFkLEdBQWtCLFNBQWxCLEdBQTRCQSxHQUE1QixHQUFnQyxTQUFoQyxHQUEwQ0EsR0FBMUMsR0FBOEMsR0FBekQsRUFBOEQsR0FBOUQsQ0FBWDs7QUFDQSxVQUFJdkwsS0FBSyxDQUFDdUwsR0FBTixDQUFVUSxNQUFWLENBQWlCSCxFQUFqQixNQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQy9CNUwsYUFBSyxDQUFDdUwsR0FBTixJQUFhLE1BQU1BLEdBQW5CO0FBQ0Q7QUFDRjtBQUNELFNBQUs1UixJQUFMLENBQVUsa0NBQVYsRUFBOENxRyxLQUE5QztBQUNBLFdBQU9BLEtBQVA7QUFDRCxHQWxmUztBQW9mVjtBQUNBZ00saUJBcmZVLDJCQXFmTWpOLEdBcmZOLEVBcWZXa04sS0FyZlgsRUFxZmtCO0FBQzFCNVMseUJBQVNnRCxNQUFULENBQWdCLFdBQWhCLEVBQTZCLFVBQUE2UCxTQUFTLEVBQUk7QUFDeENBLGVBQVMsQ0FBQ25OLEdBQUQsQ0FBVCxHQUFpQmtOLEtBQWpCO0FBQ0EsYUFBT0MsU0FBUDtBQUNELEtBSEQ7QUFJRCxHQTFmUztBQTRmVkMsK0JBNWZVLDJDQTRmc0I7QUFDOUJwVCxXQUFPLENBQUNxVCxPQUFSLENBQWdCQyxTQUFoQixDQUEwQmxULFdBQTFCLENBQXNDLEtBQUttVCxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLQyxnQkFBdEIsQ0FBdEM7QUFDRCxHQTlmUztBQStmVkEsa0JBL2ZVLDRCQStmT0MsV0EvZlAsRUErZm9CO0FBQzVCLFFBQUlBLFdBQVcsQ0FBQ3ZOLFFBQWhCLEVBQTBCLEtBQUt0RixJQUFMLENBQVUsa0JBQVY7QUFDMUIsUUFBSTZTLFdBQVcsQ0FBQy9NLE9BQWhCLEVBQXlCLEtBQUs5RixJQUFMLENBQVUsaUJBQVY7QUFDekIsUUFBSTZTLFdBQVcsQ0FBQ04sU0FBaEIsRUFBMkIsS0FBS3ZTLElBQUwsQ0FBVSxtQkFBVjtBQUM1QjtBQW5nQlMsQ0FBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDRGUsWUFBVztBQUN4QixTQUFPLElBQUlwQixjQUFKLENBQVk7QUFDakJDLFVBQU0sRUFBRTtBQUNOQyxTQUFHLEVBQUU7QUFDSCx5QkFBaUIsd0JBRGQ7QUFFSDtBQUNBLCtCQUF1QixlQUhwQjtBQUlILGdDQUF3QixlQUpyQjtBQUtILCtCQUF1QixlQUxwQjtBQU1ILHVCQUFlLFlBTlo7QUFPSCx3QkFBZ0I7QUFQYjtBQURDLEtBRFM7QUFZakJnVSxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFLDhDQURGO0FBRUp6TixjQUFRLEVBQUUsa0RBRk47QUFHSlEsYUFBTyxFQUFFLGlEQUhMO0FBSUprTixVQUFJLEVBQUUsNkNBSkY7QUFLSkMsVUFBSSxFQUFFLGdEQUxGO0FBTUpDLGFBQU8sRUFBRSxpREFOTDtBQU9KQyxVQUFJLEVBQUUsOENBUEY7QUFRSixnQkFBUSxnREFSSjtBQVNKdkcsVUFBSSxFQUFFO0FBVEYsS0FaVztBQXVCakJ3RyxvQkFBZ0IsRUFBRTtBQUNoQkMsaUJBQVcsRUFBRSxJQURHO0FBRWhCQyxlQUFTLEVBQUU7QUFGSyxLQXZCRDtBQTRCakJwVSxZQTVCaUIsc0JBNEJOO0FBQUE7O0FBQ1RRLDJCQUFTQyxHQUFULENBQWEsTUFBYixFQUFxQkMsSUFBckIsQ0FBMEIsVUFBQU8sSUFBSTtBQUFBLGVBQUksS0FBSSxDQUFDb1Qsc0JBQUwsQ0FBNEJwVCxJQUE1QixDQUFKO0FBQUEsT0FBOUI7QUFDRCxLQTlCZ0I7QUFnQ2pCcVQsdUJBaENpQixpQ0FnQ0s7QUFDcEIsVUFBSSxDQUFDLEtBQUtKLGdCQUFMLENBQXNCQyxXQUEzQixFQUF3QztBQUN0QyxZQUFNQSxXQUFXLEdBQUcsS0FBS0QsZ0JBQUwsQ0FBc0JDLFdBQXRCLEdBQW9DLEtBQUtBLFdBQUwsQ0FBaUJJLElBQWpCLENBQXNCLElBQXRCLENBQXhEO0FBQ0FyVSxlQUFPLENBQUNtSCxJQUFSLENBQWE4TSxXQUFiLENBQXlCN1QsV0FBekIsQ0FBcUM2VCxXQUFyQztBQUNEOztBQUVELFVBQUksQ0FBQyxLQUFLRCxnQkFBTCxDQUFzQkUsU0FBM0IsRUFBc0M7QUFDcEMsWUFBTUEsU0FBUyxHQUFHLEtBQUtGLGdCQUFMLENBQXNCRSxTQUF0QixHQUFrQyxLQUFLQSxTQUFMLENBQWVHLElBQWYsQ0FBb0IsSUFBcEIsQ0FBcEQ7QUFDQXJVLGVBQU8sQ0FBQ21ILElBQVIsQ0FBYStNLFNBQWIsQ0FBdUI5VCxXQUF2QixDQUFtQzhULFNBQW5DLEVBQThDO0FBQUVJLG9CQUFVLEVBQUUsQ0FBQyxRQUFEO0FBQWQsU0FBOUM7QUFDRDtBQUNGLEtBMUNnQjtBQTJDakJDLDBCQTNDaUIsb0NBMkNRO0FBQUE7O0FBQ3ZCLE9BQUMsYUFBRCxFQUFnQixXQUFoQixFQUE2QnJDLE9BQTdCLENBQXFDLFVBQUFzQyxFQUFFLEVBQUk7QUFDekMsWUFBSSxNQUFJLENBQUNSLGdCQUFMLENBQXNCUSxFQUF0QixDQUFKLEVBQStCO0FBQzdCeFUsaUJBQU8sQ0FBQ21ILElBQVIsQ0FBYXFOLEVBQWIsRUFBaUJ2UyxjQUFqQixDQUFnQyxNQUFJLENBQUMrUixnQkFBTCxDQUFzQlEsRUFBdEIsQ0FBaEM7QUFDRDtBQUNGLE9BSkQ7QUFLQSxXQUFLUixnQkFBTCxHQUF3QixFQUF4QjtBQUNELEtBbERnQjtBQW1EakJHLDBCQW5EaUIsa0NBbURNOVMsRUFuRE4sRUFtRFU7QUFDekIsVUFBSUEsRUFBSixFQUFRLEtBQUsrUyxtQkFBTCxHQUFSLEtBQ0ssS0FBS0csc0JBQUw7QUFDTixLQXREZ0I7QUF1RGpCTixlQXZEaUIsdUJBdURMN1EsR0F2REssRUF1REE7QUFDZixXQUFLeEMsSUFBTCxDQUFVLGVBQVYsRUFBMkJ3QyxHQUFHLENBQUN1QyxLQUEvQixFQUF1Q3ZDLEdBQUcsQ0FBQzRDLEdBQUosSUFBVyxFQUFsRDtBQUNELEtBekRnQjtBQTBEakJrTyxhQTFEaUIscUJBMERQdk8sS0ExRE8sRUEwREFHLE9BMURBLEVBMERTO0FBQ3hCLFVBQUlBLE9BQU8sQ0FBQ0UsR0FBWixFQUFpQjtBQUNmLGFBQUtwRixJQUFMLENBQVUsYUFBVixFQUF5QitFLEtBQXpCLEVBQWdDRyxPQUFoQztBQUNELE9BRkQsTUFHSyxJQUFJQSxPQUFPLENBQUNDLE1BQVIsSUFBa0JELE9BQU8sQ0FBQ0MsTUFBUixLQUFtQixVQUF6QyxFQUFxRDtBQUN4RCxhQUFLbkYsSUFBTCxDQUFVLGVBQVYsRUFBMkIrRSxLQUEzQjtBQUNEO0FBQ0YsS0FqRWdCO0FBbUVqQnZCLFFBbkVpQixnQkFtRVpzUCxJQW5FWSxFQW1FTjNDLEtBbkVNLEVBbUVDO0FBQ2hCMkMsVUFBSSxHQUFHLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkIsQ0FBQ0EsSUFBRCxDQUEzQixHQUFvQ0EsSUFBM0M7QUFDQTNDLFdBQUssR0FBRyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCLENBQUNBLEtBQUQsQ0FBNUIsR0FBc0NBLEtBQTlDO0FBQ0EsVUFBSTdHLENBQUMsR0FBR3dKLElBQUksQ0FBQzNQLE1BQWI7QUFBQSxVQUNJMFEsZUFBZSxHQUFHLEtBRHRCO0FBQUEsVUFFSXpPLEdBRko7O0FBR0EsYUFBT2tFLENBQUMsRUFBUixFQUFZO0FBQ1YsU0FBQyxVQUFTd0ssSUFBVCxFQUFleEssQ0FBZixFQUFrQjtBQUNqQmxFLGFBQUcsR0FBRzBOLElBQUksQ0FBQ3hKLENBQUQsQ0FBVjtBQUNBbEssaUJBQU8sQ0FBQ21ILElBQVIsQ0FBYTVELE1BQWIsQ0FBb0I7QUFBRXlDLGVBQUcsRUFBRTBOLElBQUksQ0FBQ3hKLENBQUQ7QUFBWCxXQUFwQixXQUNTLFlBQU07QUFDWCxnQkFBSSxDQUFDdUssZUFBTCxFQUFzQkMsSUFBSSxDQUFDOVQsSUFBTCxDQUFVLGlCQUFWO0FBQ3RCNlQsMkJBQWUsR0FBRyxJQUFsQjtBQUNELFdBSkgsRUFLR2pVLElBTEgsQ0FLUSxZQUFNO0FBQ1YsZ0JBQUl1USxLQUFKLEVBQVcyRCxJQUFJLENBQUM5VCxJQUFMLENBQVUsY0FBVixFQUEwQjtBQUFFb0YsaUJBQUcsRUFBRUEsR0FBUDtBQUFZK0Msa0JBQUksRUFBRWdJLEtBQUssQ0FBQzdHLENBQUQ7QUFBdkIsYUFBMUI7QUFDWixXQVBIO0FBUUQsU0FWRCxFQVVHLElBVkgsRUFVU0EsQ0FWVDtBQVdEO0FBQ0YsS0F0RmdCO0FBdUZqQnlLLGlCQXZGaUIseUJBdUZIN1IsRUF2RkcsRUF1RkM7QUFDaEIsV0FBS3NCLElBQUwsQ0FBVSxLQUFLc1AsSUFBTCxDQUFVNVEsRUFBVixDQUFWO0FBQ0QsS0F6RmdCO0FBMEZqQjhSLGdCQTFGaUIsd0JBMEZKaFYsT0ExRkksRUEwRktDLFVBMUZMLEVBMEZpQjtBQUNoQyxVQUFJQSxVQUFVLElBQUlBLFVBQVUsS0FBSyxTQUE3QixJQUEwQ0EsVUFBVSxLQUFLLFFBQTdELEVBQXVFLEtBQUs4VSxhQUFMLENBQW1CLE1BQW5CO0FBQ3hFLEtBNUZnQjtBQTZGakJFLGNBN0ZpQixzQkE2Rk5DLElBN0ZNLEVBNkZBO0FBQUE7O0FBQ2Z4VSwyQkFBU0MsR0FBVCxDQUFhLFVBQWIsRUFBeUJDLElBQXpCLENBQThCLFVBQUEwRixRQUFRLEVBQUk7QUFDeEMsWUFBSTZPLE1BQU0sR0FBRzdPLFFBQVEsQ0FBQzhFLElBQVQsQ0FBY3FFLFlBQTNCO0FBQUEsWUFBeUNySixHQUF6QztBQUNBLFlBQUkrTyxNQUFKLEVBQVkvTyxHQUFHLEdBQUcsYUFBYStPLE1BQU0sQ0FBQyxDQUFELENBQW5CLEdBQXlCRCxJQUF6QixHQUFnQ0MsTUFBTSxDQUFDLENBQUQsQ0FBNUMsQ0FBWixLQUNLL08sR0FBRyxHQUFHLGFBQWFoRyxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsS0FBeEIsQ0FBYixHQUE4QyxzQkFBOUMsR0FBdUU2UixJQUE3RTs7QUFDTCxjQUFJLENBQUMxUSxJQUFMLENBQVU0QixHQUFWO0FBQ0QsT0FMRDtBQU1EO0FBcEdnQixHQUFaLENBQVA7QUFzR0QsQzs7QUExR0Q7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBLElBQUl4RyxjQUFKLENBQVk7QUFDVkMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILG9CQUFjLHFCQURYO0FBRUgscUJBQWUscUJBRlo7QUFHSCx1QkFBaUIscUJBSGQ7QUFJSCx3QkFBa0I7QUFKZjtBQURDLEdBREU7QUFVVmdPLGdCQVZVLDBCQVVLeEgsUUFWTCxFQVVlO0FBQ3ZCLFFBQUk7QUFDRixVQUFNOE8sZUFBZSxHQUFHQyw0QkFBaUIvTyxRQUF6Qzs7QUFFQSxVQUFJLENBQUNBLFFBQVEsQ0FBQ2xDLFNBQWQsRUFBeUI7QUFDdkJrQyxnQkFBUSxHQUFHOE8sZUFBWDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1oUixTQUFTLEdBQUdrQyxRQUFRLENBQUNsQyxTQUEzQjtBQUNBLFlBQU1nSyxPQUFPLEdBQUc5SCxRQUFRLENBQUM4SCxPQUF6QjtBQUNBLFlBQU10SCxPQUFPLEdBQUdSLFFBQVEsQ0FBQ1EsT0FBekI7QUFDQSxZQUFNc0UsSUFBSSxHQUFHOUUsUUFBUSxDQUFDOEUsSUFBdEI7QUFDQSxZQUFNa0ssU0FBUyxHQUFHLG9EQUFvRDVHLEtBQXBELENBQTBELEdBQTFELENBQWxCOztBQUVBLFlBQUksQ0FBQ3RLLFNBQVMsQ0FBQ3hCLENBQWYsRUFBa0I7QUFDaEJ3QixtQkFBUyxDQUFDeEIsQ0FBVixHQUFjd1MsZUFBZSxDQUFDaFIsU0FBaEIsQ0FBMEJ4QixDQUF4QztBQUNBd0ksY0FBSSxDQUFDbUssUUFBTCxHQUFnQkgsZUFBZSxDQUFDaEssSUFBaEIsQ0FBcUJtSyxRQUFyQztBQUNBbkssY0FBSSxDQUFDb0ssV0FBTCxHQUFtQkosZUFBZSxDQUFDaEssSUFBaEIsQ0FBcUJvSyxXQUF4QztBQUNEOztBQUNELFlBQUksQ0FBQ3BSLFNBQVMsQ0FBQ3FSLE9BQWYsRUFBd0I7QUFDdEJyUixtQkFBUyxDQUFDcVIsT0FBVixHQUFvQkwsZUFBZSxDQUFDaFIsU0FBaEIsQ0FBMEJxUixPQUE5QztBQUNBclIsbUJBQVMsQ0FBQ3NSLFNBQVYsR0FBc0JOLGVBQWUsQ0FBQ2hSLFNBQWhCLENBQTBCc1IsU0FBaEQ7QUFDRDs7QUFDRCxZQUFJLENBQUN0UixTQUFTLENBQUMxQixDQUFWLENBQVksQ0FBWixDQUFMLEVBQXFCO0FBQ25CMEIsbUJBQVMsQ0FBQzFCLENBQVYsQ0FBWSxDQUFaLElBQWlCMFMsZUFBZSxDQUFDaFIsU0FBaEIsQ0FBMEIxQixDQUExQixDQUE0QixDQUE1QixDQUFqQjtBQUNEOztBQUNELFlBQUksQ0FBQzBCLFNBQVMsQ0FBQ3ZCLEVBQWYsRUFBbUI7QUFDakJ1QixtQkFBUyxDQUFDdkIsRUFBVixHQUFldVMsZUFBZSxDQUFDaFIsU0FBaEIsQ0FBMEJ2QixFQUF6QztBQUNEOztBQUNELFlBQUksQ0FBQ3VCLFNBQVMsQ0FBQ3VSLEVBQWYsRUFBbUI7QUFDakJ2UixtQkFBUyxDQUFDdVIsRUFBVixHQUFlUCxlQUFlLENBQUNoUixTQUFoQixDQUEwQnVSLEVBQXpDO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDdkgsT0FBTyxDQUFDN0wsQ0FBUixDQUFVNEwsS0FBZixFQUFzQjtBQUNwQixjQUFJQSxLQUFKOztBQUNBLGVBQUssSUFBSTVMLENBQVQsSUFBYzZMLE9BQWQsRUFBdUI7QUFDckJELGlCQUFLLEdBQUdDLE9BQU8sQ0FBQzdMLENBQUQsQ0FBZjtBQUNBNkwsbUJBQU8sQ0FBQzdMLENBQUQsQ0FBUCxHQUFhO0FBQUU0TCxtQkFBSyxFQUFMQTtBQUFGLGFBQWI7QUFDRDtBQUNGOztBQUVELFlBQUksQ0FBQ3JILE9BQU8sQ0FBQ3NJLE1BQWIsRUFBcUI7QUFDbkJ0SSxpQkFBTyxDQUFDc0ksTUFBUixHQUFpQmdHLGVBQWUsQ0FBQ3RPLE9BQWhCLENBQXdCc0ksTUFBekM7QUFDRDs7QUFDRCxZQUFJLENBQUN0SSxPQUFPLENBQUN3SSxJQUFiLEVBQW1CO0FBQ2pCeEksaUJBQU8sQ0FBQ3dJLElBQVIsR0FBZThGLGVBQWUsQ0FBQ3RPLE9BQWhCLENBQXdCd0ksSUFBdkM7QUFDRDs7QUFDRCxZQUFJLE9BQU94SSxPQUFPLENBQUNnQyxVQUFmLEtBQThCLFNBQWxDLEVBQTZDO0FBQzNDaEMsaUJBQU8sQ0FBQ2dDLFVBQVIsR0FBcUJzTSxlQUFlLENBQUN0TyxPQUFoQixDQUF3QmdDLFVBQTdDO0FBQ0Q7O0FBQ0QsWUFBSSxPQUFPaEMsT0FBTyxDQUFDa0osS0FBZixLQUF5QixTQUE3QixFQUF3QztBQUN0Q2xKLGlCQUFPLENBQUNrSixLQUFSLEdBQWdCb0YsZUFBZSxDQUFDdE8sT0FBaEIsQ0FBd0JrSixLQUF4QztBQUNEOztBQUNELFlBQUksT0FBT2xKLE9BQU8sQ0FBQytGLFVBQWYsS0FBOEIsU0FBbEMsRUFBNkM7QUFDM0MvRixpQkFBTyxDQUFDK0YsVUFBUixHQUFxQnVJLGVBQWUsQ0FBQ3RPLE9BQWhCLENBQXdCK0YsVUFBN0M7QUFDRDs7QUFDRCxZQUFJLE9BQU8vRixPQUFPLENBQUNvSixVQUFmLEtBQThCLFNBQWxDLEVBQTZDO0FBQzNDcEosaUJBQU8sQ0FBQ29KLFVBQVIsR0FBcUJrRixlQUFlLENBQUN0TyxPQUFoQixDQUF3Qm9KLFVBQTdDO0FBQ0Q7O0FBRURvRixpQkFBUyxDQUFDaEQsT0FBVixDQUFrQixVQUFBc0QsUUFBUSxFQUFJO0FBQzVCLGNBQUksT0FBT3hLLElBQUksQ0FBQ3dLLFFBQUQsQ0FBWCxLQUEwQixTQUE5QixFQUF5QztBQUN2Q3hLLGdCQUFJLENBQUN3SyxRQUFELENBQUosR0FBaUJSLGVBQWUsQ0FBQ2hLLElBQWhCLENBQXFCd0ssUUFBckIsQ0FBakI7QUFDRDtBQUNGLFNBSkQ7O0FBS0EsWUFBSSxDQUFDeEssSUFBSSxDQUFDeUssT0FBVixFQUFtQjtBQUNqQnpLLGNBQUksQ0FBQ3lLLE9BQUwsR0FBZVQsZUFBZSxDQUFDaEssSUFBaEIsQ0FBcUJ5SyxPQUFwQztBQUNEOztBQUNELFlBQUksT0FBT3pLLElBQUksQ0FBQzBLLFVBQVosS0FBMkIsU0FBL0IsRUFBMEM7QUFDeEMxSyxjQUFJLENBQUMwSyxVQUFMLEdBQWtCVixlQUFlLENBQUNoSyxJQUFoQixDQUFxQjBLLFVBQXZDO0FBQ0Q7O0FBQ0QsWUFBSSxPQUFPMUssSUFBSSxDQUFDMkssYUFBWixLQUE4QixTQUFsQyxFQUE2QztBQUMzQzNLLGNBQUksQ0FBQzJLLGFBQUwsR0FBcUJYLGVBQWUsQ0FBQ2hLLElBQWhCLENBQXFCMkssYUFBMUM7QUFDRDs7QUFDRCxZQUFJLENBQUMzSyxJQUFJLENBQUMyRCxVQUFWLEVBQXNCO0FBQ3BCM0QsY0FBSSxDQUFDMkQsVUFBTCxHQUFrQnFHLGVBQWUsQ0FBQ2hLLElBQWhCLENBQXFCMkQsVUFBdkM7QUFDRDs7QUFDRCxZQUFJLE9BQU8zRCxJQUFJLENBQUM0SyxRQUFaLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3RDNUssY0FBSSxDQUFDNEssUUFBTCxHQUFnQlosZUFBZSxDQUFDaEssSUFBaEIsQ0FBcUI0SyxRQUFyQztBQUNEOztBQUVELFlBQUksQ0FBQzFQLFFBQVEsQ0FBQ3pELEVBQWQsRUFBa0I7QUFDaEJ5RCxrQkFBUSxDQUFDekQsRUFBVCxHQUFjdVMsZUFBZSxDQUFDdlMsRUFBOUI7QUFDRCxTQUZELE1BRU8sSUFBSSxPQUFPeUQsUUFBUSxDQUFDekQsRUFBVCxDQUFZb1QsTUFBbkIsS0FBOEIsU0FBbEMsRUFBNkM7QUFDbEQzUCxrQkFBUSxDQUFDekQsRUFBVCxDQUFZMEUsSUFBWixDQUFpQjBPLE1BQWpCLEdBQTBCYixlQUFlLENBQUN2UyxFQUFoQixDQUFtQjBFLElBQW5CLENBQXdCME8sTUFBbEQ7QUFDQTNQLGtCQUFRLENBQUN6RCxFQUFULENBQVlvTyxLQUFaLEdBQW9CbUUsZUFBZSxDQUFDdlMsRUFBaEIsQ0FBbUJvTyxLQUF2QztBQUNEOztBQUVELFlBQUksT0FBTzNLLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxNQUF0QixLQUFpQyxTQUFyQyxFQUFnRDtBQUM5Q0Ysa0JBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxNQUFmLEdBQXdCNE8sZUFBZSxDQUFDN08sS0FBaEIsQ0FBc0JDLE1BQTlDO0FBQ0Q7QUFDRjtBQUNGLEtBMUZELENBMEZFLE9BQU1zQixDQUFOLEVBQVM7QUFDVCxXQUFLOUcsSUFBTCxDQUFVLE9BQVYsRUFBbUIsaUNBQW5CO0FBQ0EsYUFBT3NGLFFBQVA7QUFDRDs7QUFDRCxXQUFPQSxRQUFQO0FBQ0QsR0ExR1M7QUEyR1Y0UCxlQTNHVSx5QkEyR0lwUCxPQTNHSixFQTJHYTtBQUNyQixXQUFPQSxPQUFPLENBQUNxUCxLQUFmO0FBRUEsUUFBSWxQLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUF0QjtBQUFBLFFBQ0lrSyxLQUFLLEdBQUcvRyxNQUFNLENBQUNDLElBQVAsQ0FBWXBELE9BQVosQ0FEWjtBQUFBLFFBRUlxRCxDQUFDLEdBQUc2RyxLQUFLLENBQUNoTixNQUZkO0FBQUEsUUFHSWtELEtBSEo7QUFLQSxRQUFJLENBQUNpRCxDQUFMLEVBQVEsT0FBT3hELE9BQVA7O0FBRVIsV0FBT3dELENBQUMsRUFBUixFQUFZO0FBQ1ZqRCxXQUFLLEdBQUcsS0FBSytPLGVBQUwsQ0FBcUJuUCxPQUFPLENBQUNrSyxLQUFLLENBQUM3RyxDQUFELENBQU4sQ0FBNUIsQ0FBUjtBQUNBakQsV0FBSyxDQUFDb0ssTUFBTixHQUFlLE9BQU9wSyxLQUFLLENBQUNvSyxNQUFiLEtBQXdCLFdBQXhCLEdBQXNDLEtBQXRDLEdBQThDcEssS0FBSyxDQUFDb0ssTUFBbkU7QUFDRDs7QUFFRCxXQUFPM0ssT0FBUDtBQUNELEdBM0hTO0FBNEhWc1AsaUJBNUhVLDJCQTRITS9PLEtBNUhOLEVBNEhhO0FBQ3JCLFFBQU1nUCxJQUFJLEdBQUdqVyxPQUFPLENBQUNnRCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsS0FBeEIsQ0FBYjtBQUNBLFFBQUksT0FBT2dFLEtBQUssQ0FBQzRDLEtBQWIsS0FBdUIsUUFBM0IsRUFBcUM1QyxLQUFLLENBQUM0QyxLQUFOLEdBQWMsSUFBSWpGLElBQUosQ0FBUyxDQUFDcUMsS0FBSyxDQUFDNEMsS0FBTixDQUFZb00sSUFBWixLQUFxQmhQLEtBQUssQ0FBQzRDLEtBQU4sQ0FBWXFNLEVBQWpDLElBQXVDalAsS0FBSyxDQUFDNEMsS0FBTixDQUFZc00sRUFBbkQsSUFBeURsUCxLQUFLLENBQUM0QyxLQUFoRSxFQUF1RTBFLE9BQXZFLENBQStFLEtBQS9FLEVBQXFGLEdBQXJGLENBQVQsRUFBb0cxSixPQUFwRyxFQUFkO0FBQ3JDLFFBQUksT0FBT29DLEtBQUssQ0FBQ21QLElBQWIsS0FBc0IsUUFBMUIsRUFBb0NuUCxLQUFLLENBQUNtUCxJQUFOLEdBQWEsSUFBSXhSLElBQUosQ0FBUyxDQUFDcUMsS0FBSyxDQUFDbVAsSUFBTixDQUFXSCxJQUFYLEtBQW9CaFAsS0FBSyxDQUFDbVAsSUFBTixDQUFXRixFQUEvQixJQUFxQ2pQLEtBQUssQ0FBQ21QLElBQU4sQ0FBV0QsRUFBaEQsSUFBc0RsUCxLQUFLLENBQUNtUCxJQUE3RCxFQUFtRTdILE9BQW5FLENBQTJFLEtBQTNFLEVBQWlGLEdBQWpGLENBQVQsRUFBZ0cxSixPQUFoRyxFQUFiO0FBQ3BDLFdBQU9vQyxLQUFQO0FBQ0QsR0FqSVM7QUFrSVZvUCxnQkFsSVUsMEJBa0lLQyxVQWxJTCxFQWtJaUJqTixJQWxJakIsRUFrSXVCO0FBQy9CLFdBQU8vSSxxQkFBU0MsR0FBVCxDQUFhLFNBQWIsRUFBd0JDLElBQXhCLENBQTZCLFVBQUErVixVQUFVLEVBQUk7QUFFaEQsVUFBSTFQLE9BQU8sR0FBR3lQLFVBQVUsQ0FBQ3pQLE9BQXpCO0FBQUEsVUFDSWtLLEtBQUssR0FBRy9HLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZcEQsT0FBWixDQURaO0FBQUEsVUFFSXFELENBQUMsR0FBRzZHLEtBQUssQ0FBQ2hOLE1BRmQ7QUFBQSxVQUdJbEIsQ0FBQyxHQUFHLENBSFI7QUFBQSxVQUlJMlQsVUFBVSxHQUFHRCxVQUFVLENBQUMxUCxPQUo1QjtBQUFBLFVBS0k0UCxRQUFRLEdBQUd6TSxNQUFNLENBQUNDLElBQVAsQ0FBWXVNLFVBQVosQ0FMZjtBQUFBLFVBTUlFLGVBQWUsR0FBRyxFQU50QjtBQUFBLFVBT0kzTixJQVBKO0FBQUEsVUFPVTlCLEtBUFY7QUFBQSxVQU9pQmpCLEdBUGpCO0FBQUEsVUFPc0IyUSxTQVB0QjtBQUFBLFVBT2lDalAsQ0FQakM7O0FBU0EsYUFBTzdFLENBQUMsR0FBR3FILENBQVgsRUFBY3JILENBQUMsRUFBZixFQUFtQjtBQUNqQmtHLFlBQUksR0FBR2dJLEtBQUssQ0FBQ2xPLENBQUQsQ0FBWjtBQUNBOFQsaUJBQVMsR0FBRyxLQUFaOztBQUVBLFlBQUksQ0FBQ0YsUUFBUSxDQUFDalQsUUFBVCxDQUFrQnVGLElBQWxCLENBQUwsRUFBOEI7QUFDNUI5QixlQUFLLEdBQUdKLE9BQU8sQ0FBQ2tDLElBQUQsQ0FBZjtBQUNBL0MsYUFBRyxHQUFHaUIsS0FBSyxDQUFDakIsR0FBWjs7QUFFQSxlQUFLMEIsQ0FBTCxJQUFVOE8sVUFBVixFQUFzQjtBQUNwQixnQkFBSUEsVUFBVSxDQUFDOU8sQ0FBRCxDQUFWLENBQWMxQixHQUFkLEtBQXNCQSxHQUExQixFQUErQjtBQUM3QjJRLHVCQUFTLEdBQUcsSUFBWjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxjQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZDFQLGlCQUFLLENBQUNvSyxNQUFOLEdBQWVoSSxJQUFJLEtBQUssTUFBeEI7QUFDQXFOLDJCQUFlLENBQUMzTixJQUFELENBQWYsR0FBd0I5QixLQUF4QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPM0cscUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFVBQUFvRCxPQUFPLEVBQUk7QUFDM0MsWUFBTWtRLFFBQVEsR0FBR2xRLE9BQU8sQ0FBQ0csT0FBekI7O0FBRUEsYUFBSyxJQUFJZ1EsQ0FBVCxJQUFjSCxlQUFkLEVBQStCO0FBQzdCRSxrQkFBUSxDQUFDQyxDQUFELENBQVIsR0FBY0gsZUFBZSxDQUFDRyxDQUFELENBQTdCO0FBQ0Q7O0FBQ0QsZUFBT25RLE9BQVA7QUFDRCxPQVBNLEVBT0oyQyxJQVBJLENBQVA7QUFRRCxLQXhDTSxDQUFQO0FBeUNELEdBNUtTO0FBOEtWeU4scUJBOUtVLGlDQThLeUM7QUFBQTs7QUFBQSxRQUEvQnBXLFdBQStCLHVFQUFqQixHQUFpQjtBQUFBLFFBQVpiLFVBQVk7O0FBQ2pEUyx5QkFBU3lXLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEJ2VyxJQUExQixDQUErQixVQUFBd1csS0FBSyxFQUFJO0FBQ3RDLFVBQUlBLEtBQUosRUFBVztBQUNULFlBQUluWCxVQUFVLEtBQUssU0FBbkIsRUFBOEIsS0FBSSxDQUFDZSxJQUFMLENBQVUsT0FBVixFQUFtQixvQ0FBbkI7QUFDOUIsZUFBT04scUJBQVNRLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLE9BQXhCLENBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRCxLQU5ELEVBT0NOLElBUEQsQ0FPTTtBQUFBLGFBQU1GLHFCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBNEMsUUFBUTtBQUFBLGVBQUksS0FBSSxDQUFDd0gsY0FBTCxDQUFvQnhILFFBQXBCLENBQUo7QUFBQSxPQUFwQyxFQUF1RSxNQUF2RSxDQUFOO0FBQUEsS0FQTixFQVFDMUYsSUFSRCxDQVFNO0FBQUEsYUFBTUYscUJBQVNnRCxNQUFULENBQWdCLFVBQWhCLEVBQTRCLFVBQUE0QyxRQUFRO0FBQUEsZUFBSSxLQUFJLENBQUN3SCxjQUFMLENBQW9CeEgsUUFBcEIsQ0FBSjtBQUFBLE9BQXBDLEVBQXVFLE9BQXZFLENBQU47QUFBQSxLQVJOLEVBU0MxRixJQVRELENBU007QUFBQSxhQUFNRixxQkFBU1EsR0FBVCxDQUFhLFNBQWIsRUFBd0IsTUFBeEIsQ0FBTjtBQUFBLEtBVE4sRUFVQTtBQVZBLEtBV0NOLElBWEQsQ0FXTTtBQUFBLGFBQU0sS0FBSSxDQUFDSSxJQUFMLENBQVUscUJBQVYsRUFBaUNGLFdBQWpDLENBQU47QUFBQSxLQVhOLFdBWU8sVUFBQWdILENBQUMsRUFBSTtBQUNWLFdBQUksQ0FBQzlHLElBQUwsQ0FBVSxxQkFBVixFQUFpQ0YsV0FBakM7O0FBQ0EsV0FBSSxDQUFDRSxJQUFMLENBQVUsT0FBVixFQUFtQix5QkFBbkIsRUFBOEM4RyxDQUFDLENBQUNDLFFBQUYsRUFBOUM7QUFDRCxLQWZEO0FBZ0JELEdBL0xTO0FBZ01Wc1AscUJBaE1VLGlDQWdNWTtBQUFBOztBQUNwQjNXLHlCQUFTeVcsT0FBVCxDQUFpQixNQUFqQixFQUF5QnZXLElBQXpCLENBQThCLFVBQUF3VyxLQUFLLEVBQUk7QUFDckMsVUFBSUEsS0FBSixFQUFXO0FBQ1QsY0FBSSxDQUFDcFcsSUFBTCxDQUFVLE9BQVYsRUFBbUIsb0NBQW5CO0FBQ0Q7O0FBQ0QsYUFBT04scUJBQVNRLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCLENBQVA7QUFDRCxLQUxELEVBTUNOLElBTkQsQ0FNTTtBQUFBLGFBQU1GLHFCQUFTeVcsT0FBVCxDQUFpQixPQUFqQixFQUEwQnZXLElBQTFCLENBQStCLFVBQUF3VyxLQUFLLEVBQUk7QUFDbEQsWUFBSUEsS0FBSixFQUFXO0FBQ1QsZ0JBQUksQ0FBQ3BXLElBQUwsQ0FBVSxPQUFWLEVBQW1CLG1DQUFuQjtBQUNEOztBQUNELGVBQU9OLHFCQUFTUSxHQUFULENBQWEsU0FBYixFQUF3QixPQUF4QixDQUFQO0FBQ0QsT0FMVyxDQUFOO0FBQUEsS0FOTixFQVlDTixJQVpELENBWU07QUFBQSxhQUFNLE1BQUksQ0FBQ0ksSUFBTCxDQUFVLGlCQUFWLENBQU47QUFBQSxLQVpOLFdBYU87QUFBQSxhQUFNLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLGlCQUFWLENBQU47QUFBQSxLQWJQO0FBY0QsR0EvTVM7QUFnTlZzVyxlQWhOVSx5QkFnTklDLGVBaE5KLEVBZ05xQjlOLElBaE5yQixFQWdOMkI7QUFBQTs7QUFDbkMsUUFBSW5ELFFBQVEsR0FBR2lSLGVBQWUsQ0FBQ2pSLFFBQS9CO0FBQUEsUUFDSVEsT0FBTyxHQUFHeVEsZUFBZSxDQUFDelEsT0FEOUI7QUFHQSxRQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDUixRQUFqQixFQUEyQixLQUFLdEYsSUFBTCxDQUFVLGVBQVYsRUFBMkIsb0JBQTNCLEVBQTNCLEtBQ0s7QUFDSCxVQUFJLENBQUM4RixPQUFMLEVBQWM7QUFDWixZQUFJLENBQUNSLFFBQVEsQ0FBQ2xDLFNBQWQsRUFBeUIsS0FBS3BELElBQUwsQ0FBVSxlQUFWLEVBQTJCLGdDQUEzQixFQUE2RCx1QkFBN0QsRUFBekIsS0FDSyxLQUFLd1csY0FBTCxDQUFvQmxSLFFBQXBCLEVBQThCbUQsSUFBOUIsRUFBb0M3SSxJQUFwQyxDQUF5QyxVQUFBNlcsT0FBTyxFQUFJO0FBQ3ZELGNBQUksQ0FBQ0EsT0FBTCxFQUFjLE1BQUksQ0FBQ3pXLElBQUwsQ0FBVSxlQUFWLEVBQTJCLGdDQUEzQixFQUE2RCx1QkFBN0QsRUFBZCxLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLGdDQUFWLEVBQTRDLGdDQUE1QztBQUNOLFNBSEk7QUFJTixPQU5ELE1BT0ssSUFBSSxDQUFDc0YsUUFBTCxFQUFlO0FBQ2xCLGFBQUtvUixhQUFMLENBQW1CNVEsT0FBbkIsRUFBNEIyQyxJQUE1QixFQUFrQzdJLElBQWxDLENBQXVDLFVBQUE2VyxPQUFPLEVBQUk7QUFDaEQsY0FBSSxDQUFDQSxPQUFMLEVBQWMsTUFBSSxDQUFDelcsSUFBTCxDQUFVLGVBQVYsRUFBMkIsaUNBQTNCLEVBQThELHNCQUE5RCxFQUFkLEtBQ0ssTUFBSSxDQUFDQSxJQUFMLENBQVUsbUNBQVY7QUFDTixTQUhEO0FBSUQsT0FMSSxNQUtFO0FBQ0wsYUFBS3dXLGNBQUwsQ0FBb0JsUixRQUFwQixFQUE4Qm1ELElBQTlCLEVBQW9DN0ksSUFBcEMsQ0FBeUMsVUFBQStXLFNBQVMsRUFBSTtBQUNwRCxnQkFBSSxDQUFDRCxhQUFMLENBQW1CNVEsT0FBbkIsRUFBNEIyQyxJQUE1QixFQUFrQzdJLElBQWxDLENBQXVDLFVBQUFnWCxTQUFTLEVBQUk7QUFDbEQsZ0JBQUksQ0FBQ0QsU0FBTCxFQUFnQjtBQUNkLGtCQUFJLENBQUNDLFNBQUwsRUFBZ0IsTUFBSSxDQUFDNVcsSUFBTCxDQUFVLGVBQVYsRUFBMkIsdUJBQTNCLEVBQW9ELHNCQUFwRCxFQUFoQixLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLCtCQUFWLEVBQTJDLHVCQUEzQztBQUNOLGFBSEQsTUFHTztBQUNMLGtCQUFJMlcsU0FBUyxLQUFLLFVBQWxCLEVBQThCO0FBQzVCLG9CQUFJLENBQUNDLFNBQUwsRUFBZ0IsTUFBSSxDQUFDNVcsSUFBTCxDQUFVLGVBQVYsRUFBMkIsc0JBQTNCLEVBQW1ELHVCQUFuRCxFQUFoQixLQUNLLE1BQUksQ0FBQ0EsSUFBTCxDQUFVLCtCQUFWLEVBQTJDLHVCQUEzQztBQUNOLGVBSEQsTUFHTztBQUNMLG9CQUFJLENBQUM0VyxTQUFMLEVBQWdCLE1BQUksQ0FBQzVXLElBQUwsQ0FBVSxnQ0FBVixFQUE0QyxzQkFBNUMsRUFBaEIsS0FDSyxNQUFJLENBQUNBLElBQUwsQ0FBVSxxREFBVjtBQUNOO0FBQ0Y7QUFDRixXQWJEO0FBY0QsU0FmRDtBQWdCRDtBQUNGO0FBQ0YsR0FyUFM7QUFzUFZ3VyxnQkF0UFUsMEJBc1BLbFIsUUF0UEwsRUFzUGVtRCxJQXRQZixFQXNQcUI7QUFBQTs7QUFDN0IsUUFBSSxDQUFDbkQsUUFBUSxDQUFDbEMsU0FBZCxFQUF5QixPQUFPeVQsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQWhCLENBQVA7QUFFekIsV0FBT3BYLHFCQUFTZ0QsTUFBVCxDQUFnQixVQUFoQixFQUE0QixVQUFBNEMsUUFBUTtBQUFBLGFBQUksTUFBSSxDQUFDd0gsY0FBTCxDQUFvQnhILFFBQXBCLENBQUo7QUFBQSxLQUFwQyxFQUF1RW1ELElBQXZFLEVBQ0o3SSxJQURJLENBQ0M7QUFBQSxhQUFNLElBQU47QUFBQSxLQURELFdBRUU7QUFBQSxhQUFNLEtBQU47QUFBQSxLQUZGLENBQVA7QUFHRCxHQTVQUztBQTZQVjhXLGVBN1BVLHlCQTZQSTVRLE9BN1BKLEVBNlBhMkMsSUE3UGIsRUE2UG1CO0FBQzNCLFdBQU8sS0FBS2dOLGNBQUwsQ0FBb0IsS0FBS1AsYUFBTCxDQUFtQnBQLE9BQW5CLEVBQTRCLElBQTVCLENBQXBCLEVBQXVEMkMsSUFBdkQsRUFDSjdJLElBREksQ0FDQztBQUFBLGFBQU0sSUFBTjtBQUFBLEtBREQsV0FFRTtBQUFBLGFBQU0sS0FBTjtBQUFBLEtBRkYsQ0FBUDtBQUdEO0FBalFTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0ZlLFlBQVc7QUFDeEIsU0FBTyxJQUFJaEIsY0FBSixDQUFZO0FBQ2pCQyxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFO0FBQ0gsc0JBQWM7QUFEWDtBQURDLEtBRFM7QUFPakJpWSx1QkFQaUIsK0JBT0c1TyxJQVBILEVBT1M7QUFDeEIsVUFBTTZPLFFBQVEsR0FBRzVYLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjRLLE1BQWhCLENBQXVCLHNDQUF2QixDQUFqQjtBQUVBN0ssYUFBTyxDQUFDcUksT0FBUixDQUFnQndQLFVBQWhCLEdBQTZCclgsSUFBN0IsQ0FBa0MsVUFBQXNYLGFBQWEsRUFBSTtBQUVqRDlYLGVBQU8sQ0FBQ3FJLE9BQVIsQ0FBZ0I5RSxNQUFoQixDQUF1QjtBQUNyQnlDLGFBQUcsRUFBRTRSLFFBQVEsR0FBRyxHQUFYLEdBQWlCRyxrQkFBa0IsQ0FBQ2hQLElBQUQsQ0FEbkI7QUFFckIyQixjQUFJLEVBQUUsT0FGZTtBQUdyQnNOLGdCQUFNLEVBQUVGLGFBQWEsQ0FBQ0UsTUFBZCxHQUF1QixFQUhWO0FBSXJCQyxlQUFLLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxhQUFhLENBQUNHLEtBQXZCLEVBQThCLEdBQTlCLENBSmM7QUFLckJ4UCxtQkFBUyxFQUFFcVAsYUFBYSxDQUFDclA7QUFMSixTQUF2QjtBQU9ELE9BVEQ7QUFVRDtBQXBCZ0IsR0FBWixDQUFQO0FBc0JELEM7O0FBMUJEOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQSxJQUFJMlAsWUFBSixDQUFVO0FBQ1JyUCxNQUFJLEVBQUUsWUFERTtBQUVSMkIsTUFBSSxFQUFFLFlBRkU7QUFHUjJOLG9CQUFrQixFQUFFLElBSFo7QUFJUjVZLFFBQU0sRUFBRTtBQUNONlksVUFBTSxFQUFFLENBQ04sYUFETSxFQUVOLGVBRk0sRUFHTixjQUhNLEVBSU4sdUJBSk0sRUFLTixrQkFMTSxFQU1OLGlCQU5NLEVBT04sZ0NBUE0sRUFRTixvQkFSTSxFQVNOLG9CQVRNLEVBVU4sY0FWTSxFQVdOLHNCQVhNLEVBWU4sdUJBWk0sRUFhTix5QkFiTSxFQWNOLDJCQWRNLEVBZU4sZ0NBZk0sRUFnQk4sMEJBaEJNLEVBaUJOLDhCQWpCTSxFQWtCTixlQWxCTSxFQW1CTixhQW5CTSxFQW9CTixlQXBCTSxFQXFCTixpQkFyQk0sRUFzQk4sbUJBdEJNLEVBdUJOLGtCQXZCTSxFQXdCTixPQXhCTSxFQXlCTixPQXpCTSxFQTBCTixPQTFCTSxFQTJCTixRQTNCTSxFQTRCTixPQTVCTSxFQTZCTixPQTdCTSxFQThCTixtQkE5Qk0sRUErQk4sMEJBL0JNLEVBZ0NOLGtCQWhDTSxFQWlDTix5QkFqQ00sRUFrQ04sY0FsQ00sRUFtQ04sZUFuQ00sRUFvQ04sc0JBcENNLEVBcUNOLGNBckNNLEVBc0NOLGNBdENNLEVBdUNOLGNBdkNNLEVBd0NOLDRCQXhDTSxFQXlDTixzQkF6Q00sRUEwQ04sbUJBMUNNLEVBMkNOLDJCQTNDTSxFQTRDTix5QkE1Q00sRUE2Q04sZ0JBN0NNLEVBOENOLGFBOUNNLENBREY7QUFpRE5DLGNBQVUsRUFBRSxDQUNWLGFBRFUsRUFFVixlQUZVLEVBR1Ysa0JBSFUsRUFJVix1QkFKVSxFQUtWLGFBTFUsRUFNVixtQkFOVSxFQU9WLHVCQVBVLEVBUVYsbUJBUlUsRUFTVixpQkFUVSxFQVVWLGNBVlUsRUFXVixnQkFYVSxFQVlWLGtCQVpVLEVBYVYsWUFiVSxFQWNWLG1CQWRVLEVBZVYsWUFmVSxFQWdCVixhQWhCVSxFQWlCVixhQWpCVSxFQWtCVixxQkFsQlUsRUFtQlYsdUJBbkJVLEVBb0JWLHFCQXBCVTtBQWpETjtBQUpBLENBQVYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O3FCQUdlLElBQUlDLGFBQUosQ0FBVztBQUV4QkMsTUFGd0Isa0JBRWpCO0FBQUE7O0FBQ0x6WSxXQUFPLENBQUNxVCxPQUFSLENBQWdCN0YsSUFBaEIsQ0FBcUI3SixNQUFyQixDQUE0QixNQUE1QjtBQUVBLFdBQU8zRCxPQUFPLENBQUNxVCxPQUFSLENBQWdCWCxLQUFoQixDQUFzQm5TLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBa1ksWUFBWSxFQUFJO0FBQ3RELFVBQUlsTCxJQUFJLEdBQUdrTCxZQUFZLElBQUlBLFlBQVksQ0FBQ2xMLElBQTdCLEdBQW9Da0wsWUFBWSxDQUFDbEwsSUFBakQsR0FBd0R5SCw0QkFBaUJ6SCxJQUFwRjtBQUNBLGFBQU8sS0FBSSxDQUFDbUwsU0FBTCxDQUFlbkwsSUFBZixDQUFQO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0FUdUI7QUFXeEIxTSxLQVh3QixlQVdwQndNLEtBWG9CLEVBV2JDLEdBWGEsRUFXUjtBQUNkLFFBQU1xTCxJQUFJLEdBQUcsS0FBSyxVQUFVdEwsS0FBZixDQUFiO0FBQ0EsUUFBSSxDQUFDc0wsSUFBTCxFQUFXLE1BQU0sV0FBV3RMLEtBQVgsR0FBbUIsaUJBQXpCO0FBQ1gsV0FBTyxLQUFLLFVBQVVBLEtBQWYsRUFBc0JDLEdBQXRCLENBQVA7QUFDRCxHQWZ1QjtBQWdCeEJqSyxRQWhCd0Isb0JBZ0JSO0FBQ2QsV0FBTyxLQUFLdVYsT0FBTCx1QkFBUDtBQUNELEdBbEJ1QjtBQW9CeEI5QixTQXBCd0IscUJBb0JEO0FBQUEsUUFBZjFOLElBQWUsdUVBQVIsTUFBUTtBQUNyQixXQUFPckosT0FBTyxDQUFDcVQsT0FBUixDQUFnQmhLLElBQWhCLEVBQXNCOUksR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUE2UyxPQUFPLEVBQUk7QUFDakQsVUFBSSxDQUFDQSxPQUFELElBQWEsQ0FBQ3JKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZb0osT0FBWixFQUFxQnRQLE1BQXRCLElBQWdDc1AsT0FBTyxDQUFDeUYsV0FBUixLQUF3QjlPLE1BQXJFLElBQWdGLENBQUNxSixPQUFPLENBQUMzTSxPQUE3RixFQUFzRyxPQUFPLElBQVA7QUFDdEcsYUFBTyxLQUFQO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0F6QnVCO0FBMEJ4QnFTLFdBMUJ3Qix1QkEwQlo7QUFDVixXQUFPL1ksT0FBTyxDQUFDcVQsT0FBUixDQUFnQixLQUFLMkYsYUFBckIsRUFBb0N6WSxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQTZTLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuTixRQUFyQixJQUFpQ21OLE9BQU8sQ0FBQ25OLFFBQVIsQ0FBaUJDLEtBQWpCLENBQXVCeEcsTUFBNUQsRUFBb0UsT0FBTyxJQUFQO0FBQ3BFLGFBQU8sS0FBUDtBQUNELEtBSE0sQ0FBUDtBQUlELEdBL0J1QjtBQWdDeEJzWixlQWhDd0IsMkJBZ0NSO0FBQ2QsV0FBT2paLE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0IsS0FBSzJGLGFBQXJCLEVBQW9DelksR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUE2UyxPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDbk4sUUFBekIsRUFBbUMsT0FBTyxLQUFQO0FBQ25DLGFBQU9tTixPQUFPLENBQUNuTixRQUFSLENBQWlCUSxPQUFqQixDQUF5QmdDLFVBQWhDO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0FyQ3VCO0FBc0N4QndRLGFBdEN3Qix5QkFzQ1Y7QUFDWixXQUFPbFosT0FBTyxDQUFDcVQsT0FBUixDQUFnQixLQUFLMkYsYUFBckIsRUFBb0N6WSxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQTZTLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuTixRQUF6QixFQUFtQyxPQUFPLFFBQVA7QUFDbkMsYUFBT21OLE9BQU8sQ0FBQ25OLFFBQVIsQ0FBaUJRLE9BQWpCLENBQXlCdUMsTUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQTNDdUI7QUE0Q3hCa1EsZUE1Q3dCLDJCQTRDUjtBQUNkLFdBQU9uWixPQUFPLENBQUNxVCxPQUFSLENBQWdCLEtBQUsyRixhQUFyQixFQUFvQ3pZLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBNlMsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ25OLFFBQXpCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxhQUFPbU4sT0FBTyxDQUFDbk4sUUFBUixDQUFpQjhFLElBQWpCLENBQXNCNEssUUFBN0I7QUFDRCxLQUhNLENBQVA7QUFJRCxHQWpEdUI7QUFrRHhCd0QsY0FsRHdCLDBCQWtEVDtBQUNiLFdBQU9wWixPQUFPLENBQUNxVCxPQUFSLENBQWdCLEtBQUsyRixhQUFyQixFQUFvQ3pZLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBNlMsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ25OLFFBQVIsQ0FBaUI4SCxPQUFyQjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQXBEdUI7QUFxRHhCcUwsZ0JBckR3Qiw0QkFxRFA7QUFDZixXQUFPclosT0FBTyxDQUFDcVQsT0FBUixDQUFnQixLQUFLMkYsYUFBckIsRUFBb0N6WSxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQTZTLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNuTixRQUFSLENBQWlCbEMsU0FBckI7QUFBQSxLQUF0RCxDQUFQO0FBQ0QsR0F2RHVCO0FBeUR4QnNWLGNBekR3QiwwQkF5REU7QUFBQTs7QUFBQSxRQUFialEsSUFBYSx1RUFBTixJQUFNO0FBQ3hCLFdBQU8sS0FBS2tRLGFBQUwsQ0FBbUJsUSxJQUFuQixFQUF5QjdJLElBQXpCLENBQThCO0FBQUEsYUFBTSxNQUFJLENBQUNnWixZQUFMLENBQWtCblEsSUFBbEIsQ0FBTjtBQUFBLEtBQTlCLENBQVA7QUFDRCxHQTNEdUI7QUE0RHhCc1AsV0E1RHdCLHFCQTREZG5MLElBNURjLEVBNERSO0FBQUE7O0FBQ2QsV0FBT3hOLE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0JYLEtBQWhCLENBQXNCNVIsR0FBdEIsQ0FBMEI7QUFBRTBNLFVBQUksRUFBRUE7QUFBUixLQUExQixFQUNKaE4sSUFESSxDQUNDO0FBQUEsYUFBTVIsT0FBTyxDQUFDcVQsT0FBUixDQUFnQjdGLElBQWhCLENBQXFCMU0sR0FBckIsQ0FBeUI7QUFBRTBNLFlBQUksRUFBRUE7QUFBUixPQUF6QixDQUFOO0FBQUEsS0FERCxFQUVKaE4sSUFGSSxDQUVDO0FBQUEsYUFBTSxNQUFJLENBQUNpTixRQUFMLENBQWNELElBQWQsQ0FBTjtBQUFBLEtBRkQsQ0FBUDtBQUdELEdBaEV1QjtBQWlFeEIrTCxlQWpFd0IsMkJBaUVpQjtBQUFBLFFBQTNCbFEsSUFBMkIsdUVBQXBCLEtBQUsyUCxhQUFlO0FBQ3ZDLFdBQU9oWixPQUFPLENBQUNxVCxPQUFSLENBQWdCaEssSUFBaEIsRUFBc0I5SSxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQTZTLE9BQU8sRUFBSTtBQUNqRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuTixRQUF6QixFQUFtQyxPQUFPbEcsT0FBTyxDQUFDcVQsT0FBUixDQUFnQmhLLElBQWhCLEVBQXNCdkksR0FBdEIsQ0FBMEI7QUFBRW9GLGdCQUFRLEVBQUUsa0JBQU0rTyw0QkFBaUIvTyxRQUF2QjtBQUFaLE9BQTFCLENBQVA7QUFDcEMsS0FGTSxDQUFQO0FBR0QsR0FyRXVCO0FBc0V4QnNULGNBdEV3QiwwQkFzRWU7QUFBQSxRQUExQm5RLElBQTBCLHVFQUFuQixLQUFLb1EsWUFBYztBQUNyQyxXQUFPelosT0FBTyxDQUFDcVQsT0FBUixDQUFnQmhLLElBQWhCLEVBQXNCOUksR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUE2UyxPQUFPLEVBQUk7QUFDakQsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDM00sT0FBekIsRUFBa0MsT0FBTzFHLE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0JoSyxJQUFoQixFQUFzQnZJLEdBQXRCLENBQTBCO0FBQUU0RixlQUFPLEVBQUUsa0JBQU11Tyw0QkFBaUJ2TyxPQUF2QjtBQUFYLE9BQTFCLENBQVA7QUFDbkMsS0FGTSxDQUFQO0FBR0QsR0ExRXVCO0FBMkV4QmdULGNBM0V3Qix3QkEyRVg5WixPQTNFVyxFQTJFRjtBQUNwQixXQUFPSSxPQUFPLENBQUNxVCxPQUFSLENBQWdCWCxLQUFoQixDQUFzQjVSLEdBQXRCLENBQTBCO0FBQUVsQixhQUFPLEVBQUVBO0FBQVgsS0FBMUIsRUFDSlksSUFESSxDQUNDO0FBQUEsYUFBTVIsT0FBTyxDQUFDcVQsT0FBUixDQUFnQjdGLElBQWhCLENBQXFCMU0sR0FBckIsQ0FBeUI7QUFBRWxCLGVBQU8sRUFBRUE7QUFBWCxPQUF6QixDQUFOO0FBQUEsS0FERCxDQUFQO0FBRUQsR0E5RXVCO0FBK0V4QitaLFVBL0V3QixvQkErRWZ0VixHQS9FZSxFQStFVjtBQUNaLFFBQUlBLEdBQUcsQ0FBQ1UsS0FBUixFQUFlO0FBQ2IsYUFBTy9FLE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0JYLEtBQWhCLENBQXNCNVIsR0FBdEIsQ0FBMEI7QUFBRWlULFlBQUksRUFBRTtBQUFSLE9BQTFCLENBQVA7QUFDRDs7QUFDRCxXQUFPLEtBQUs2RixTQUFMLEdBQWlCcFosSUFBakIsQ0FBc0IsVUFBQXVULElBQUksRUFBSTtBQUNuQ0EsVUFBSSxDQUFDclEsSUFBTCxDQUFVVyxHQUFWO0FBQ0EsVUFBSTBQLElBQUksQ0FBQ2hRLE1BQUwsR0FBY3dGLDRCQUFpQnNRLGVBQW5DLEVBQW9EOUYsSUFBSSxDQUFDK0YsS0FBTDtBQUNwRCxhQUFPOVosT0FBTyxDQUFDcVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0I1UixHQUF0QixDQUEwQjtBQUFFaVQsWUFBSSxFQUFFQTtBQUFSLE9BQTFCLENBQVA7QUFDRCxLQUpNLENBQVA7QUFLRCxHQXhGdUI7QUF5RnhCZ0csWUF6RndCLHNCQXlGYjlTLEtBekZhLEVBeUZOO0FBQUE7O0FBQ2hCLFdBQU9qSCxPQUFPLENBQUNxVCxPQUFSLENBQWdCLEtBQUtvRyxZQUFyQixFQUFtQ2xaLEdBQW5DLEdBQXlDQyxJQUF6QyxDQUE4QyxVQUFBNlMsT0FBTyxFQUFJO0FBQzlELFVBQUkzTSxPQUFPLEdBQUcyTSxPQUFPLENBQUMzTSxPQUF0QjtBQUNBLFVBQUlzRCxNQUFNLENBQUNDLElBQVAsQ0FBWXZELE9BQU8sQ0FBQ0csT0FBcEIsRUFBNkJyRCxRQUE3QixDQUFzQ3lELEtBQUssQ0FBQzhCLElBQTVDLENBQUosRUFBdUQsT0FBTyxNQUFJLENBQUNpUixhQUFMLENBQW1CL1MsS0FBbkIsQ0FBUDtBQUN2RFAsYUFBTyxDQUFDRyxPQUFSLENBQWdCSSxLQUFLLENBQUM4QixJQUF0QixJQUE4QjlCLEtBQTlCO0FBQ0EsYUFBT2pILE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0IsTUFBSSxDQUFDb0csWUFBckIsRUFBbUMzWSxHQUFuQyxDQUF1QztBQUFFNEYsZUFBTyxFQUFFQTtBQUFYLE9BQXZDLENBQVA7QUFDRCxLQUxNLENBQVA7QUFNRCxHQWhHdUI7QUFrR3hCbVMsU0FsR3dCLG1CQWtHaEJ2TCxLQWxHZ0IsRUFrR1RLLE9BbEdTLEVBa0c4QjtBQUFBOztBQUFBLFFBQTlCdEUsSUFBOEIsdUVBQXZCLEtBQUssVUFBVWlFLEtBQWYsQ0FBdUI7QUFDcEQsV0FBT3ROLE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0JoSyxJQUFoQixFQUFzQjlJLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBNlMsT0FBTyxFQUFJO0FBQy9DLFVBQUksQ0FBQ0EsT0FBTyxDQUFDL0YsS0FBRCxDQUFaLEVBQXFCO0FBQ25CK0YsZUFBTyxDQUFDL0YsS0FBRCxDQUFQLEdBQWlCLGtCQUFNMkgsNEJBQWlCM0gsS0FBakIsQ0FBTixDQUFqQjtBQUNEOztBQUNELFVBQU1oSyxNQUFNLEdBQUcsRUFBZjtBQUNBQSxZQUFNLENBQUNnSyxLQUFELENBQU4sR0FBZ0JLLE9BQU8sQ0FBQ3NNLElBQVIsQ0FBYSxNQUFiLEVBQW1CNUcsT0FBTyxDQUFDL0YsS0FBRCxDQUExQixDQUFoQjtBQUVBLGFBQU90TixPQUFPLENBQUNxVCxPQUFSLENBQWdCaEssSUFBaEIsRUFBc0J2SSxHQUF0QixDQUEwQndDLE1BQTFCLEVBQWtDOUMsSUFBbEMsQ0FBdUM7QUFBQSxlQUFNOEMsTUFBTSxDQUFDZ0ssS0FBRCxDQUFaO0FBQUEsT0FBdkMsQ0FBUDtBQUNELEtBUkksQ0FBUDtBQVNEO0FBNUd1QixDQUFYLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7UUFFUzRNLEssR0FBQUEsVztRQUFPQyxPLEdBQUFBLG1CO1FBQVNDLGUsR0FBQUEsNkI7UUFBaUI1YSxPLEdBQUFBLGU7UUFBU2daLE0sR0FBQUEsYTtRQUFRSixLLEdBQUFBLFc7UUFBT2lDLGEsR0FBQUEseUI7UUFBZUMsUyxHQUFBQSxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDVGxFO0FBQ2IxYSxTQUFPLEVBQUVJLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkMsV0FBaEIsR0FBOEJOLE9BRDFCO0FBRWJzRyxVQUFRLEVBQUM7QUFDUGxDLGFBQVMsRUFBRTtBQUNUdVcsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FETTtBQUVUQyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUZNO0FBR1RDLE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLElBQW5CLENBSE07QUFJVC9YLE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLEtBQW5CLEVBQTBCLElBQTFCLENBSk07QUFLVEgsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FMTTtBQU1URCxPQUFDLEVBQUUsQ0FBQyxVQUFELEVBQWEsS0FBYixFQUFvQixJQUFwQixDQU5NO0FBT1QsWUFBTSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBVCxDQVBHO0FBUVRILE9BQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxDQVJNO0FBU1RFLE9BQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxDQVRNO0FBVVRHLE9BQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBVCxDQVZNO0FBV1QsV0FBSyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBWEk7QUFZVCxXQUFLLENBQUMsRUFBRCxFQUFLLElBQUwsQ0FaSTtBQWFUNlMsYUFBTyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsQ0FiQTtBQWNUQyxlQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixLQUFsQixDQWRGO0FBZVQ3UyxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FmSztBQWdCVDhTLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMO0FBaEJLLEtBREo7QUFtQlB2SCxXQUFPLEVBQUU7QUFDUCxXQUFLO0FBQUVELGFBQUssRUFBRTtBQUFULE9BREU7QUFFUCxXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BRkU7QUFHUCxXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BSEU7QUFJUCxXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BSkU7QUFLUCxXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BTEU7QUFNUDVMLE9BQUMsRUFBRTtBQUFFNEwsYUFBSyxFQUFFO0FBQVQ7QUFOSSxLQW5CRjtBQTJCUHJILFdBQU8sRUFBRTtBQUNQZ0osY0FBUSxFQUFFLElBREg7QUFFUGhILGdCQUFVLEVBQUUsS0FGTDtBQUdQb0gsZ0JBQVUsRUFBRSxJQUhMO0FBSVBGLFdBQUssRUFBRSxLQUpBO0FBS1AzRyxZQUFNLEVBQUUsT0FMRDtBQU1QeVIsY0FBUSxFQUFFLE1BTkg7QUFPUEMsVUFBSSxFQUFFLE1BUEM7QUFRUDVQLGNBQVEsRUFBRSxJQVJIO0FBU1BpRSxZQUFNLEVBQUUsV0FURDtBQVVQRSxVQUFJLEVBQUUsTUFWQztBQVdQSyxRQUFFLEVBQUUsRUFYRztBQVlQOUMsZ0JBQVUsRUFBRTtBQVpMLEtBM0JGO0FBeUNQdEcsU0FBSyxFQUFFO0FBQ0x4RyxZQUFNLEVBQUUsSUFESDtBQUVMeUcsWUFBTSxFQUFFO0FBRkgsS0F6Q0E7QUE2Q1A0RSxRQUFJLEVBQUU7QUFDSjRQLFlBQU0sRUFBRSxJQURKO0FBRUp6RixjQUFRLEVBQUUsSUFGTjtBQUdKQyxpQkFBVyxFQUFFLElBSFQ7QUFJSk0sZ0JBQVUsRUFBRSxLQUpSO0FBS0pDLG1CQUFhLEVBQUUsS0FMWDtBQU1Ka0YsZUFBUyxFQUFFLEtBTlA7QUFPSm5QLGlCQUFXLEVBQUUsSUFQVDtBQVFKRSxpQkFBVyxFQUFFLElBUlQ7QUFTSlgsYUFBTyxFQUFFLElBVEw7QUFVSjZQLGlCQUFXLEVBQUUsS0FWVDtBQVdKOU8sZUFBUyxFQUFFLElBWFA7QUFZSmQsYUFBTyxFQUFFLElBWkw7QUFhSm1FLGtCQUFZLEVBQUUsS0FiVjtBQWNKb0csYUFBTyxFQUFFLFdBZEw7QUFlSjlHLGdCQUFVLEVBQUUsT0FmUjtBQWdCSm9NLGlCQUFXLEVBQUUsSUFoQlQ7QUFpQkpuRixjQUFRLEVBQUU7QUFqQk4sS0E3Q0M7QUFnRVBuVCxNQUFFLEVBQUU7QUFDRjBFLFVBQUksRUFBRTtBQUNKNlQsWUFBSSxFQUFFO0FBQUVySyxrQkFBUSxFQUFFO0FBQVosU0FERjtBQUVKc0ssWUFBSSxFQUFFO0FBQUV0SyxrQkFBUSxFQUFFO0FBQVosU0FGRjtBQUdKdUMsYUFBSyxFQUFFO0FBQUV2QyxrQkFBUSxFQUFFO0FBQVosU0FISDtBQUlKM0MsZUFBTyxFQUFFO0FBQUUyQyxrQkFBUSxFQUFFO0FBQVosU0FKTDtBQUtKdUssZUFBTyxFQUFFO0FBQUV2SyxrQkFBUSxFQUFFO0FBQVosU0FMTDtBQU1KekQsYUFBSyxFQUFFO0FBQUV5RCxrQkFBUSxFQUFFO0FBQVosU0FOSDtBQU9Kd0ssYUFBSyxFQUFFO0FBQUV4SyxrQkFBUSxFQUFFO0FBQVosU0FQSDtBQVFKa0YsY0FBTSxFQUFFO0FBQUVsRixrQkFBUSxFQUFFO0FBQVo7QUFSSixPQURKO0FBV0ZFLFdBQUssRUFBRTtBQVhMO0FBaEVHLEdBRkk7QUFnRmJuSyxTQUFPLEVBQUU7QUFDUEcsV0FBTyxFQUFFO0FBREYsR0FoRkk7QUFtRmJzTSxXQUFTLEVBQUUsRUFuRkU7QUFvRmIzRixNQUFJLEVBQUU7QUFDSnRILFlBQVEsRUFBRSxLQUROO0FBRUpRLFdBQU8sRUFBRSxLQUZMO0FBR0p5TSxhQUFTLEVBQUU7QUFIUDtBQXBGTyxDOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBQTtBQUViM0osc0JBQW9CLEVBQUUsRUFGVDtBQUlicVEsaUJBQWUsRUFBRSxFQUpKO0FBTWJ1QixhQUFXLEVBQUU7QUFDWEMsYUFBUyxFQUFFLFNBREE7QUFFWEMsU0FBSyxFQUFFLFNBRkk7QUFHWEMsVUFBTSxFQUFFLFNBSEc7QUFJWEMsVUFBTSxFQUFFLFNBSkc7QUFLWEMsT0FBRyxFQUFFLFNBTE07QUFNWEMsVUFBTSxFQUFFLFNBTkc7QUFPWEMsUUFBSSxFQUFFLFNBUEs7QUFRWEMsU0FBSyxFQUFFO0FBUkk7QUFOQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBQTtBQUNiQyxVQUFRLEVBQUUsQ0FERztBQUViQywwQkFBd0IsRUFBRSxDQUZiO0FBR2JDLFVBQVEsRUFBRSxDQUhHO0FBSWJDLGtCQUFnQixFQUFFLENBSkw7QUFLYkMsdUJBQXFCLEVBQUUsQ0FMVjtBQU1iQyxzQkFBb0IsRUFBRSxDQU5UO0FBT2JDLGdCQUFjLEVBQUUsQ0FQSDtBQVFiQyxxQkFBbUIsRUFBRSxDQVJSO0FBU2JDLG1CQUFpQixFQUFFLENBVE47QUFVYkMsbUJBQWlCLEVBQUUsRUFWTjtBQVdiQyxxQkFBbUIsRUFBRSxFQVhSO0FBWWJDLG1CQUFpQixFQUFFLEVBWk47QUFhYkMscUJBQW1CLEVBQUUsRUFiUjtBQWNiQyxrQkFBZ0IsRUFBRSxFQWRMO0FBZWJDLHFCQUFtQixFQUFFLEVBZlI7QUFnQmJDLGtCQUFnQixFQUFFLEVBaEJMO0FBaUJiQyxvQkFBa0IsRUFBRSxFQWpCUDtBQWtCYkMsaUJBQWUsRUFBRSxFQWxCSjtBQW1CYkMsb0NBQWtDLEVBQUUsRUFuQnZCO0FBb0JiQyxxQ0FBbUMsRUFBRSxFQXBCeEI7QUFxQmJDLG1DQUFpQyxFQUFFLEVBckJ0QjtBQXNCYkMsb0JBQWtCLEVBQUUsRUF0QlA7QUF1QmJDLHNCQUFvQixFQUFFLEVBdkJUO0FBd0JiQyx1QkFBcUIsRUFBRSxFQXhCVjtBQXlCYkMsdUJBQXFCLEVBQUUsRUF6QlY7QUEwQmJDLGdDQUE4QixFQUFFLEVBMUJuQjtBQTJCYkMsaUNBQStCLEVBQUUsRUEzQnBCO0FBNEJiQyxjQUFZLEVBQUUsRUE1QkQ7QUE2QmJDLHlCQUF1QixFQUFFLEVBN0JaO0FBOEJiQyxvQ0FBa0MsRUFBRSxFQTlCdkI7QUErQmJDLG1CQUFpQixFQUFFLEVBL0JOO0FBZ0NiQyxpQkFBZSxFQUFFLEVBaENKO0FBaUNiQyw0QkFBMEIsRUFBRSxFQWpDZjtBQWtDYkMsNEJBQTBCLEVBQUUsRUFsQ2Y7QUFtQ2JDLDRCQUEwQixFQUFFLEVBbkNmO0FBb0NiQyx3QkFBc0IsRUFBRSxFQXBDWDtBQXNDYkMsZUF0Q2EseUJBc0NDMVEsR0F0Q0QsRUFzQ007QUFDakIsU0FBSyxJQUFJTyxHQUFULElBQWdCLElBQWhCLEVBQXNCO0FBQ3BCLFVBQUksS0FBS0EsR0FBTCxLQUFhUCxHQUFqQixFQUFzQjtBQUNwQixlQUFPTyxHQUFQO0FBQ0E7QUFDRDtBQUNGOztBQUNELFdBQU8sRUFBUDtBQUNEO0FBOUNZLEM7Ozs7Ozs7Ozs7O0FDQWYseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTW9NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQVNnRSxHQUFULEVBQWM7QUFDMUIsTUFBTUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsR0FBZCxJQUFxQixFQUFyQixHQUEwQixFQUF6QztBQUNBLE1BQUkzUSxHQUFKOztBQUNBLE9BQUssSUFBSTZDLElBQVQsSUFBaUI4TixHQUFqQixFQUFzQjtBQUNwQixRQUFJQSxHQUFHLENBQUMxTSxjQUFKLENBQW1CcEIsSUFBbkIsQ0FBSixFQUE4QjtBQUM1QjdDLFNBQUcsR0FBRzJRLEdBQUcsQ0FBQzlOLElBQUQsQ0FBVDs7QUFDQSxVQUFJN0MsR0FBRyxLQUFLLElBQVIsSUFBZ0IsUUFBT0EsR0FBUCxNQUFlLFFBQW5DLEVBQTZDO0FBQzNDNFEsY0FBTSxDQUFDL04sSUFBRCxDQUFOLEdBQWU4SixLQUFLLENBQUMzTSxHQUFELENBQXBCO0FBQ0QsT0FGRCxNQUdFNFEsTUFBTSxDQUFDL04sSUFBRCxDQUFOLEdBQWU3QyxHQUFmO0FBQ0g7QUFDRjs7QUFDRCxTQUFPNFEsTUFBUDtBQUNELENBYkQ7O1FBZVNqRSxLLEdBQUFBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZUOztBQUVBLElBQU1HLGFBQWEsR0FBRyxJQUFJN2EsZUFBSixDQUFZO0FBQ2hDTSxVQURnQyxzQkFDckI7QUFBQTs7QUFDVHdlLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQWphLEtBQUssRUFBSTtBQUN4QyxVQUFNK0MsSUFBSSxHQUFHL0MsS0FBSyxDQUFDa2EsUUFBTixDQUFlbFEsS0FBZixDQUFxQixHQUFyQixFQUEwQm9ELEdBQTFCLEVBQWI7O0FBQ0EsVUFBSSxDQUFDLGVBQUQsRUFBa0IsZ0JBQWxCLEVBQW9DLGVBQXBDLEVBQXFELGtCQUFyRCxFQUF5RWxPLFFBQXpFLENBQWtGNkQsSUFBbEYsQ0FBSixFQUE2RjtBQUMzRixhQUFJLENBQUN6RyxJQUFMLENBQVUsdUJBQVYsRUFBbUM7QUFDakM4RCxpQkFBTyxFQUFFSixLQUFLLENBQUNJLE9BRGtCO0FBRWpDQyxrQkFBUSxFQUFFTCxLQUFLLENBQUNrYSxRQUFOLENBQWVsUSxLQUFmLENBQXFCLEdBQXJCLEVBQTBCb0QsR0FBMUIsR0FBZ0NwRCxLQUFoQyxDQUFzQyxHQUF0QyxFQUEyQ3dMLEtBQTNDLEtBQXFELEdBQXJELEdBQTJEeFYsS0FBSyxDQUFDbWEsTUFBakUsR0FBMEUsR0FBMUUsR0FBZ0ZuYSxLQUFLLENBQUNvYSxLQUYvRDtBQUdqQ2phLGNBQUksRUFBRyxJQUFJRyxJQUFKLEVBQUQsQ0FBYUMsT0FBYjtBQUgyQixTQUFuQztBQUtEO0FBQ0YsS0FURCxFQVNHLEtBVEg7QUFVRDtBQVorQixDQUFaLENBQXRCOztxQkFlZXdWLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNqQkEsVUFBU3NFLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUNsQyxPQUFLLElBQUkvYixDQUFULElBQWMrYixJQUFkO0FBQ0UsUUFBSSxDQUFDRCxJQUFJLENBQUM5YixDQUFELENBQVQsRUFBYzhiLElBQUksQ0FBQzliLENBQUQsQ0FBSixHQUFVK2IsSUFBSSxDQUFDL2IsQ0FBRCxDQUFkO0FBRGhCOztBQUdBLFNBQU84YixJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQsSUFBTXZFLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVztBQUVqQyxTQUFPcGEsT0FBTyxDQUFDbUgsSUFBUixDQUFhMFgsS0FBYixDQUFtQjtBQUFFL0csaUJBQWEsRUFBRSxJQUFqQjtBQUF1Qm5ZLFVBQU0sRUFBRTtBQUEvQixHQUFuQixFQUEwRGEsSUFBMUQsQ0FBK0QsVUFBQTJHLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFSO0FBQUEsR0FBbkUsQ0FBUDtBQUNELENBSEQ7O1FBS1NpVCxlLEdBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xULElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVN0VSxHQUFULEVBQWM7QUFDOUIsTUFBTThZLENBQUMsR0FBRzlZLEdBQUcsQ0FBQytZLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLE1BQUlELENBQUMsS0FBSyxDQUFDLENBQVgsRUFBYyxPQUFPOVksR0FBUCxDQUFkLEtBQ0ssT0FBT0EsR0FBRyxDQUFDZ1osTUFBSixDQUFXLENBQVgsRUFBY0YsQ0FBZCxDQUFQO0FBQ04sQ0FKRDs7UUFNU3hFLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlQsSUFBSTJFLE1BQU0sR0FBRyxFQUFiOzs7Ozs7Ozs7Ozt1QkFJS0MsSyxFQUFPQyxPLEVBQVM7QUFDakIsVUFBSSxDQUFDRixNQUFNLENBQUNDLEtBQUQsQ0FBWCxFQUFvQkQsTUFBTSxDQUFDQyxLQUFELENBQU4sR0FBZ0IsRUFBaEI7QUFFcEJELFlBQU0sQ0FBQ0MsS0FBRCxDQUFOLENBQWN4YixJQUFkLENBQW1CeWIsT0FBbkI7QUFDRDs7O3lCQUNJMWYsTSxFQUFpQjtBQUFBOztBQUFBLHdDQUFOMmYsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3BCM2YsWUFBTSxHQUFHQSxNQUFNLENBQUM2TyxLQUFQLENBQWEsR0FBYixDQUFUO0FBRUEsVUFBSXpMLENBQUMsR0FBRyxDQUFSO0FBQUEsVUFBV3FILENBQUMsR0FBR3pLLE1BQU0sQ0FBQ3NFLE1BQXRCO0FBQUEsVUFBOEJzYixLQUE5Qjs7QUFFQSxhQUFPeGMsQ0FBQyxHQUFHcUgsQ0FBWCxFQUFjckgsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCd2MsYUFBSyxHQUFHSixNQUFNLENBQUN4ZixNQUFNLENBQUNvRCxDQUFELENBQVAsQ0FBZDtBQUVBLFlBQUl3YyxLQUFKLEVBQ0VBLEtBQUssQ0FBQ25OLE9BQU4sQ0FBYyxVQUFBaU4sT0FBTztBQUFBLGlCQUFJQSxPQUFPLENBQUNHLEtBQVIsQ0FBYyxLQUFkLEVBQW9CRixJQUFwQixDQUFKO0FBQUEsU0FBckI7QUFDSDtBQUNGOzs7NEJBQ09GLEssRUFBZ0I7QUFBQSx5Q0FBTkUsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLGFBQU9wZixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JzZixXQUFoQixDQUE0QjtBQUFFL0ssVUFBRSxFQUFFMEssS0FBTjtBQUFhRSxZQUFJLEVBQUVBLElBQW5CO0FBQXlCSSxZQUFJLEVBQUU7QUFBL0IsT0FBNUIsV0FBeUUsWUFBTSxDQUFFLENBQWpGLENBQVA7QUFDRDs7OzBCQUNLQyxPLEVBQVNDLEksRUFBZ0I7QUFBQSx5Q0FBUEMsS0FBTztBQUFQQSxhQUFPO0FBQUE7O0FBQzdCLGFBQU8sWUFBbUI7QUFBQSwyQ0FBUEMsS0FBTztBQUFQQSxlQUFPO0FBQUE7O0FBQ3hCLGVBQU9GLElBQUksQ0FBQ0osS0FBTCxDQUFXRyxPQUFYLEVBQW9CRSxLQUFLLENBQUNFLE1BQU4sQ0FBYUQsS0FBYixDQUFwQixDQUFQO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhcGdCLE87O1FBQUFBLE87OztBQUVYLG1CQUFZc2dCLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZjs7QUFFQSxTQUFLQyxDQUFMLElBQVVELEdBQVY7QUFBZSxZQUFLQyxDQUFMLElBQVVELEdBQUcsQ0FBQ0MsQ0FBRCxDQUFiO0FBQWY7O0FBRUEsUUFBSXRnQixNQUFNLEdBQUcsTUFBS0EsTUFBbEI7QUFBQSxRQUNJdWdCLFNBREo7QUFBQSxRQUNlRCxDQURmO0FBQUEsUUFDa0JyWSxDQURsQjtBQUFBLFFBQ3FCeVgsT0FEckI7O0FBR0EsUUFBSTFmLE1BQU0sS0FBS3VnQixTQUFTLEdBQUd2Z0IsTUFBTSxDQUFDQyxHQUF4QixDQUFWLEVBQXdDO0FBQ3RDLFdBQUtnSSxDQUFMLElBQVVzWSxTQUFWLEVBQXFCO0FBQ25CYixlQUFPLEdBQUdhLFNBQVMsQ0FBQ3RZLENBQUQsQ0FBbkI7QUFDQSxZQUFJLE1BQUt5WCxPQUFMLENBQUosRUFDRSxNQUFLOWQsRUFBTCxDQUFRcUcsQ0FBUixFQUFXLE1BQUs2TCxLQUFMLGdDQUFpQixNQUFLNEwsT0FBTCxDQUFqQixDQUFYO0FBQ0g7QUFDRjs7QUFDRCxLQUFDLE1BQUtyZixRQUFOLElBQWtCLE1BQUtBLFFBQUwsRUFBbEI7QUFmZTtBQWdCaEI7OztFQWxCMEJtZ0IscUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWE3SCxLOztRQUFBQSxLOzs7QUFFWCxpQkFBWTBILEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZiwrRUFBTUEsR0FBTjtBQUVBLFVBQUtJLElBQUwsR0FBWSxJQUFaO0FBRUEsUUFBTXhWLElBQUksR0FBRyxNQUFLQSxJQUFsQjtBQUVBMUssV0FBTyxDQUFDQyxPQUFSLENBQWdCa2dCLFNBQWhCLENBQTBCL2YsV0FBMUIsQ0FBc0MsTUFBS21ULEtBQUwsZ0NBQWlCLE1BQUs2TSxXQUF0QixDQUF0QztBQUVBLFFBQUkxVixJQUFJLEtBQUssWUFBVCxJQUF5QkEsSUFBSSxLQUFLLFlBQXRDLEVBQW9ELE1BQUsyVixXQUFMOztBQUVwRCxVQUFLQyxrQkFBTDs7QUFYZTtBQVloQjs7OzsyQkFDTTdnQixNLEVBQVE7QUFDYixXQUFLNmdCLGtCQUFMLENBQXdCN2dCLE1BQXhCO0FBQ0Q7Ozt1Q0FDa0JBLE0sRUFBUTtBQUN6QkEsWUFBTSxHQUFHQSxNQUFNLElBQUksS0FBS0EsTUFBeEI7QUFDQSxVQUFJOGdCLFlBQUosRUFBa0JDLHFCQUFsQjs7QUFFQSxVQUFJL2dCLE1BQUosRUFBWTtBQUNWOGdCLG9CQUFZLEdBQUc5Z0IsTUFBTSxDQUFDNlksTUFBdEI7O0FBQ0EsWUFBSWlJLFlBQUosRUFBa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEIsaUNBQWNBLFlBQWQ7QUFBQSxrQkFBUzdZLENBQVQ7QUFDRSxtQkFBS3JHLEVBQUwsQ0FBUXFHLENBQVIsRUFBVyxLQUFLNkwsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS2dNLFdBQXRCLEVBQW1DN1gsQ0FBbkMsQ0FBWDtBQURGO0FBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHakI7O0FBQ0Q4WSw2QkFBcUIsR0FBRy9nQixNQUFNLENBQUM4WSxVQUEvQjs7QUFDQSxZQUFJaUkscUJBQUosRUFBMkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsa0NBQWNBLHFCQUFkO0FBQUEsa0JBQVNDLENBQVQ7QUFDRSxtQkFBS3BmLEVBQUwsQ0FBUW9mLENBQVIsRUFBVyxLQUFLbE4sS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS21OLFdBQXRCLEVBQW1DRCxDQUFuQyxDQUFYO0FBREY7QUFEeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUcxQjtBQUNGO0FBQ0Y7OztnQ0FDV0UsRyxFQUFLeFksTSxFQUFRQyxZLEVBQWM7QUFDckN1WSxTQUFHLENBQUN2QixJQUFKLEdBQVd1QixHQUFHLENBQUN2QixJQUFKLElBQVksRUFBdkI7QUFDQSxVQUFJQSxJQUFJLEdBQUcsR0FBR1MsTUFBSCxDQUFVYyxHQUFHLENBQUNuTSxFQUFkLEVBQWtCbU0sR0FBRyxDQUFDdkIsSUFBdEIsQ0FBWDtBQUNBLFVBQUksQ0FBQ2pYLE1BQUQsSUFBVyxDQUFDQSxNQUFNLENBQUNZLElBQXZCLEVBQTZCcVcsSUFBSSxHQUFHQSxJQUFJLENBQUNTLE1BQUwsQ0FBWTFYLE1BQVosRUFBb0JDLFlBQXBCLENBQVA7QUFDN0IsV0FBS3hILElBQUwsQ0FBVTBlLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JGLElBQXRCO0FBQ0EsVUFBSXVCLEdBQUcsQ0FBQ25CLElBQVIsRUFBYyxPQUFPLElBQVAsQ0FMdUIsQ0FLVjs7QUFDM0IsYUFBTyxLQUFQO0FBQ0Q7OztnQ0FDVzlYLEMsRUFBWTtBQUN0QixVQUFNZ0QsSUFBSSxHQUFHLEtBQUtBLElBQWxCOztBQURzQix3Q0FBTjBVLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUV0QixVQUFJNWEsR0FBRyxHQUFHO0FBQUVnUSxVQUFFLEVBQUU5TSxDQUFOO0FBQVMwWCxZQUFJLEVBQUVBO0FBQWYsT0FBVjtBQUNBLFVBQUkxVSxJQUFJLEtBQUssU0FBYixFQUF3QjFLLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnNmLFdBQWhCLENBQTRCL2EsR0FBNUIsV0FBdUMsWUFBTSxDQUFFLENBQS9DLEVBQXhCLEtBQ0ssSUFBSWtHLElBQUksS0FBSyxZQUFiLEVBQTJCO0FBQzlCLFlBQU1rVyxPQUFPLEdBQUd4QixJQUFJLENBQUNBLElBQUksQ0FBQ3JiLE1BQUwsR0FBYyxDQUFmLENBQXBCO0FBQ0EsWUFBSVgsR0FBSjs7QUFDQSxZQUFJd2QsT0FBTyxLQUFLQyxTQUFaLEtBQTBCemQsR0FBRyxHQUFHd2QsT0FBTyxDQUFDeGQsR0FBeEMsQ0FBSixFQUFrRDtBQUNoRCxjQUFJQSxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUNwQnBELG1CQUFPLENBQUNtSCxJQUFSLENBQWEwWCxLQUFiLENBQW1CO0FBQUVsZixvQkFBTSxFQUFFO0FBQVYsYUFBbkIsRUFBcUNhLElBQXJDLENBQTBDLFVBQUEyRyxJQUFJLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEQsc0NBQWdCQSxJQUFoQjtBQUFBLHNCQUFTL0QsSUFBVDtBQUNFcEQseUJBQU8sQ0FBQ21ILElBQVIsQ0FBYW9ZLFdBQWIsQ0FBeUJuYyxJQUFHLENBQUNOLEVBQTdCLEVBQWlDMEIsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqRCxhQUhEO0FBSUQsV0FMRCxNQUtPO0FBQ0x4RSxtQkFBTyxDQUFDbUgsSUFBUixDQUFhb1ksV0FBYixDQUF5QnFCLE9BQU8sQ0FBQ3hkLEdBQWpDLEVBQXNDb0IsR0FBdEMsV0FBaUQsWUFBTSxDQUFFLENBQXpEO0FBQ0Q7QUFDRixTQVRELE1BU087QUFDTHhFLGlCQUFPLENBQUNtSCxJQUFSLENBQWEwWCxLQUFiLENBQW1CO0FBQUM7QUFBRCxXQUFuQixFQUFnRXJlLElBQWhFLENBQXFFLFVBQUEyRyxJQUFJLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDM0Usb0NBQWdCQSxJQUFoQjtBQUFBLG9CQUFTL0QsS0FBVDtBQUNFcEQsdUJBQU8sQ0FBQ21ILElBQVIsQ0FBYW9ZLFdBQWIsQ0FBeUJuYyxLQUFHLENBQUNOLEVBQTdCLEVBQWlDMEIsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7Z0NBQ1drRCxDLEVBQVk7QUFBQSx5Q0FBTjBYLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixVQUFNNWEsR0FBRyxHQUFHO0FBQUVnUSxVQUFFLEVBQUU5TSxDQUFOO0FBQVMwWCxZQUFJLEVBQUVBO0FBQWYsT0FBWjtBQUNBLFVBQUksS0FBS2MsSUFBVCxFQUFlLEtBQUtBLElBQUwsQ0FBVVEsV0FBVixDQUFzQmxjLEdBQXRCO0FBQ2hCOzs7a0NBQ2E7QUFDWixVQUFJLENBQUMsS0FBSzZULGtCQUFWLEVBQThCO0FBQzVCLGFBQUt5SSxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLeE4sS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS3VOLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTVosSUFBSSxHQUFHLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWFsZ0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCNmdCLE9BQWhCLENBQXdCO0FBQUUvWCxZQUFJLEVBQUUsS0FBS0E7QUFBYixPQUF4QixDQUF0QztBQUNBbVgsVUFBSSxDQUFDYyxZQUFMLENBQWtCNWdCLFdBQWxCLENBQThCO0FBQUEsZUFBTSxNQUFJLENBQUM4ZixJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCZSxFLEVBQUk7QUFBQTs7QUFDekJqaEIsYUFBTyxDQUFDQyxPQUFSLENBQWdCaWhCLFNBQWhCLENBQTBCOWdCLFdBQTFCLENBQXNDLFVBQUE4ZixJQUFJLEVBQUk7QUFDNUNBLFlBQUksQ0FBQ0MsU0FBTCxDQUFlL2YsV0FBZixDQUEyQixNQUFJLENBQUNtVCxLQUFMLENBQVcsTUFBWCxFQUFpQixNQUFJLENBQUM2TSxXQUF0QixDQUEzQjtBQUNBLFNBQUNhLEVBQUQsSUFBT0EsRUFBRSxFQUFUO0FBQ0QsT0FIRDtBQUlEOzs7O0VBeEZ3QnpoQixlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYWdaLE07O1FBQUFBLE07OztBQUVYLGtCQUFZc0gsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmLGdGQUFNQSxHQUFOO0FBRUEsVUFBS3FCLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBRUEsVUFBS3BJLGFBQUwsR0FBcUIvRCw0QkFBaUJ6SCxJQUFqQixDQUFzQnRILFFBQXRCLEdBQWlDLE1BQWpDLEdBQTBDLE9BQS9EO0FBQ0EsVUFBS3VULFlBQUwsR0FBb0J4RSw0QkFBaUJ6SCxJQUFqQixDQUFzQjlHLE9BQXRCLEdBQWdDLE1BQWhDLEdBQXlDLE9BQTdEO0FBQ0EsVUFBSzJhLGNBQUwsR0FBc0JwTSw0QkFBaUJ6SCxJQUFqQixDQUFzQjJGLFNBQXRCLEdBQWtDLE1BQWxDLEdBQTJDLE9BQWpFO0FBUmU7QUFTaEI7Ozs7MkJBRU07QUFBQTs7QUFDTCxhQUFPblQsT0FBTyxDQUFDcVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0JuUyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQTZTLE9BQU8sRUFBSTtBQUNqRCxZQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQzdGLElBQXZCLEVBQTZCO0FBQzNCLGdCQUFJLENBQUNDLFFBQUwsQ0FBYzRGLE9BQU8sQ0FBQzdGLElBQXRCO0FBQ0Q7QUFDRixPQUpNLENBQVA7QUFLRDs7OzZCQUVRQSxJLEVBQU07QUFDYixXQUFLLElBQUluRSxJQUFULElBQWlCbUUsSUFBakIsRUFBdUI7QUFDckIsYUFBSyxVQUFVbkUsSUFBZixJQUF1Qm1FLElBQUksQ0FBQ25FLElBQUQsQ0FBSixHQUFhLE1BQWIsR0FBc0IsT0FBN0M7QUFDRDtBQUNGOzs7MEJBRXNCO0FBQUE7O0FBQUEsVUFBbkJpRSxLQUFtQix1RUFBWCxTQUFXOztBQUNyQixVQUFJLEtBQUs4VCxZQUFULEVBQXVCO0FBQ3JCLGVBQVEsSUFBSTNKLE9BQUosQ0FBWSxVQUFBNkosQ0FBQztBQUFBLGlCQUFJaEQsTUFBTSxDQUFDaUQsVUFBUCxDQUFrQjtBQUFBLG1CQUFNRCxDQUFDLENBQUMsTUFBSSxDQUFDL2dCLEdBQUwsQ0FBUytNLEtBQVQsQ0FBRCxDQUFQO0FBQUEsV0FBbEIsRUFBNEMsRUFBNUMsQ0FBSjtBQUFBLFNBQWIsQ0FBUjtBQUNEOztBQUNELFVBQU1zTCxJQUFJLEdBQUcsS0FBSyxVQUFVdEwsS0FBZixDQUFiO0FBQ0EsVUFBSSxDQUFDc0wsSUFBTCxFQUFXLE1BQU0sV0FBV3RMLEtBQVgsR0FBbUIsaUJBQXpCOztBQUVYLFVBQUksQ0FBQyxLQUFLNlQsV0FBVixFQUF1QjtBQUNyQixhQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsYUFBS0QsV0FBTCxHQUFtQixJQUFuQjtBQUVBLGVBQU8sS0FBSzFJLElBQUwsR0FBWWpZLElBQVosQ0FBaUIsWUFBTTtBQUM1QixnQkFBSSxDQUFDNGdCLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxpQkFBTyxNQUFJLENBQUMsVUFBVTlULEtBQVgsQ0FBSixFQUFQO0FBQ0QsU0FITSxDQUFQO0FBSUQ7O0FBQ0QsYUFBTyxLQUFLLFVBQVVBLEtBQWYsR0FBUDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixhQUFPdE4sT0FBTyxDQUFDcVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0JuUyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQWtZLFlBQVksRUFBSTtBQUN0RCxlQUFPMVksT0FBTyxDQUFDcVQsT0FBUixDQUFnQjdGLElBQWhCLENBQXFCak4sR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFnaEIsYUFBYSxFQUFJO0FBQ3RELFdBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0J0UCxPQUFwQixDQUE0QixVQUFBNUUsS0FBSyxFQUFJO0FBQ25Db0wsd0JBQVksQ0FBQ3BMLEtBQUQsQ0FBWixHQUFzQm9MLFlBQVksQ0FBQ3BMLEtBQUQsQ0FBWixJQUF1QmtVLGFBQWEsQ0FBQ2xVLEtBQUQsQ0FBMUQ7QUFDRCxXQUZEO0FBR0EsY0FBSSxNQUFJLENBQUMwTCxhQUFMLEtBQXVCLE1BQTNCLEVBQW1DTixZQUFZLENBQUN4UyxRQUFiLEdBQXdCc2IsYUFBYSxDQUFDdGIsUUFBdEM7QUFDbkMsaUJBQU8sTUFBSSxDQUFDdWIsWUFBTCxHQUFvQmpoQixJQUFwQixDQUF5QixVQUFBa0csT0FBTyxFQUFJO0FBQ3pDZ1Msd0JBQVksQ0FBQ2hTLE9BQWIsR0FBdUJBLE9BQXZCO0FBQ0EsbUJBQU9nUyxZQUFQO0FBQ0QsV0FITSxDQUFQO0FBSUQsU0FUTSxDQUFQO0FBVUQsT0FYTSxDQUFQO0FBWUQ7Ozt5Q0FDb0I7QUFDbkIsYUFBTzFZLE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0JYLEtBQWhCLENBQXNCblMsR0FBdEIsRUFBUDtBQUNEOzs7MENBQ3FCO0FBQ3BCLGFBQU9QLE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0I3RixJQUFoQixDQUFxQmpOLEdBQXJCLEVBQVA7QUFDRDs7O21DQUNjO0FBQ2IsYUFBT1AsT0FBTyxDQUFDcVQsT0FBUixDQUFnQjdGLElBQWhCLENBQXFCak4sR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFnaEIsYUFBYSxFQUFJO0FBQ3RELFlBQU1FLGFBQWEsR0FBR0YsYUFBYSxDQUFDOWEsT0FBcEM7QUFFQSxlQUFPMUcsT0FBTyxDQUFDcVQsT0FBUixDQUFnQlgsS0FBaEIsQ0FBc0JuUyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQWtZLFlBQVksRUFBSTtBQUN0RCxjQUFNaUosWUFBWSxHQUFHakosWUFBWSxDQUFDaFMsT0FBbEM7QUFDQSxjQUFJLENBQUNnYixhQUFMLEVBQW9CLE9BQU9DLFlBQVA7QUFDcEIsY0FBSSxDQUFDQSxZQUFMLEVBQW1CLE9BQU9ELGFBQVAsQ0FIbUMsQ0FLdEQ7O0FBQ0EsZUFBSyxJQUFJaGEsQ0FBVCxJQUFjaWEsWUFBWSxDQUFDOWEsT0FBM0I7QUFBb0M2YSx5QkFBYSxDQUFDN2EsT0FBZCxDQUFzQmEsQ0FBdEIsSUFBMkJpYSxZQUFZLENBQUM5YSxPQUFiLENBQXFCYSxDQUFyQixDQUEzQjtBQUFwQzs7QUFFQSxpQkFBT2dhLGFBQVA7QUFDRCxTQVRNLENBQVA7QUFVRCxPQWJNLENBQVA7QUFjRDs7O29DQUNlO0FBQ2QsYUFBTzFoQixPQUFPLENBQUNxVCxPQUFSLENBQWdCLEtBQUsyRixhQUFyQixFQUFvQ3pZLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBNlMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ25OLFFBQVIsSUFBb0IrTyw0QkFBaUIvTyxRQUF6QztBQUFBLE9BQXRELENBQVA7QUFDRDs7O2dDQUNXO0FBQ1YsYUFBT2xHLE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0JYLEtBQWhCLENBQXNCblMsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFrWSxZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQzNFLElBQW5DLEVBQXlDLE9BQU8sRUFBUDtBQUN6QyxlQUFPMkUsWUFBWSxDQUFDM0UsSUFBcEI7QUFDRCxPQUhNLENBQVA7QUFJRDs7O21DQUNjO0FBQ2IsYUFBTy9ULE9BQU8sQ0FBQ3FULE9BQVIsQ0FBZ0JYLEtBQWhCLENBQXNCblMsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFrWSxZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQzlZLE9BQW5DLEVBQTRDO0FBQzFDLGlCQUFPSSxPQUFPLENBQUNxVCxPQUFSLENBQWdCN0YsSUFBaEIsQ0FBcUJqTixHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQWdoQixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQzVoQixPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU84WSxZQUFZLENBQUM5WSxPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBbEd5QkosZSIsImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2JhY2tncm91bmQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL2ljb25zL29uMTYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzIucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uMzYucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29uNjQucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL29mZjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxOC5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvdG00OC5wbmcnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL21vZHVsZXMvZXJyb3ItbG9nZ2luZydcclxuaW1wb3J0ICcuL21vZHVsZXMvaW5qZWN0aW9uLW1hbmFnZXInXHJcbmltcG9ydCBfTk9USUZJQ0FUSU9OUyBmcm9tICcuL21vZHVsZXMvbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IF9UQUJTIGZyb20gJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgX1dJTkRPV1MgZnJvbSAnLi9tb2R1bGVzL3dpbmRvd3MnXHJcbmltcG9ydCBfU0lERUJBUlMgZnJvbSAnLi9tb2R1bGVzL3NpZGViYXJzJ1xyXG5pbXBvcnQgX05BTUVSIGZyb20gJy4vbW9kdWxlcy9uYW1lcidcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHQtbWVudSdcclxuaW1wb3J0IF9QQUdFQUNUSU9OIGZyb20gJy4vbW9kdWxlcy9wYWdlLWFjdGlvbidcclxuLy9pbXBvcnQgX0lEQiBmcm9tICcuL21vZHVsZXMvaW5kZXhlZGRiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9zdG9yZS1tYW5hZ2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd0b2dnbGVPbkltcG9ydCcsXHJcbiAgICAgICdpbml0aWFsaXplZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ21pZ3JhdGVkOnN0b3JhZ2UnOiAnc3RhcnQnLFxyXG4gICAgICAnY2hlY2tlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZTphZGRvbic6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDp0YmJwb3dlci1zZXR0aW5ncyc6ICdzZXRUQkJBY3Rpb24nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZlOiB0cnVlLFxyXG4gIHZlcnNpb246ICcnLFxyXG4gIGxvYWRSZWFzb246ICcnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy52ZXJzaW9uID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgndmVyc2lvbicpLnRoZW4odmVyc2lvbiA9PiB7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uIHx8IHZlcnNpb24gIT09IGN1cnJlbnRWZXJzaW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2FkUmVhc29uID0gdGhpcy5sb2FkUmVhc29uID0gZGV0YWlscy5yZWFzb247XHJcbiAgICAgICAgICBjb25zdCBwcmV2VmVyc2lvbiA9IGRldGFpbHMucHJldmlvdXNWZXJzaW9uIHx8ICcyJztcclxuICAgICAgICAgIGlmIChsb2FkUmVhc29uICYmIChsb2FkUmVhc29uID09PSAndXBkYXRlJyB8fCBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChsb2FkUmVhc29uICsgJzphcHAnLCBwcmV2VmVyc2lvbiwgbG9hZFJlYXNvbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoZWNrOnN0b3JhZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uID09PSBjdXJyZW50VmVyc2lvbikgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIF9TVE9SQUdFLnNldCgndmVyc2lvbicsIHRoaXMudmVyc2lvbik7XHJcblxyXG4gICAgLy9fSURCKCk7XHJcbiAgICBfTk9USUZJQ0FUSU9OUygpO1xyXG4gICAgX1RBQlMoKTtcclxuICAgIF9OQU1FUigpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1dJTkRPV1MoKTtcclxuICAgIF9TSURFQkFSUygpO1xyXG4gICAgX1BBR0VBQ1RJT04oKTtcclxuXHJcbiAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5hY3RpdmF0ZShtb2RlKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuYWN0aXZhdGUodHJ1ZSkpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnc3RhcnRlZDphcHAnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9hZFJlYXNvbikpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoYWN0aXZhdGUpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gYWN0aXZhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKGFjdGl2ZSk7XHJcbiAgICB0aGlzLnNldFRCQkFjdGlvbigpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgbGV0IG1vZGUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB0aGlzLmFjdGl2YXRlKG1vZGUpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOmFkZG9uJywgbW9kZSk7XHJcbiAgfSxcclxuICB0b2dnbGVPbkltcG9ydCgpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uKG9uKSB7XHJcbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHBhdGg6IG9uID8ge1xyXG4gICAgICAgIDE2OiAnLi4vaWNvbnMvb24xNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb24xOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb24zMi5wbmcnXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vZmYxNi5wbmcnLFxyXG4gICAgICAgIDE4OiAnLi4vaWNvbnMvb2ZmMTgucG5nJyxcclxuICAgICAgICAzMjogJy4uL2ljb25zL29mZjMyLnBuZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRUQkJBY3Rpb24oYWRkKSB7XHJcbiAgICBpZiAodHlwZW9mIGFkZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGlmIChhZGQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlVEJCSGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCd0YmJwb3dlcicpLnRoZW4oZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQpIHRoaXMuYWRkVEJCSGFuZGxlcigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICghdGhpcy50YmJIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IHRiYkhhbmRsZXIgPSB0aGlzLnRiYkhhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICcnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRiYkhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlVEJCSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdjb250ZW50L3RiYi1tZW51L3RiYi1tZW51Lmh0bWwnIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMudGJiSGFuZGxlcik7XHJcbiAgICAgIHRoaXMudGJiSGFuZGxlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtczoge1xyXG4gICAgICBtOiB7IGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddIH0sXHJcbiAgICAgIHc6IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgZDogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBiOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgICctYic6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgbjogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBzYjogeyBjb250ZXh0czogWydhbGwnLCAndGFiJ10gfSxcclxuICAgICAgYzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogW10sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpdGVtLmlkID0gaTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2N0eF8nICsgKGkgPT09ICctYicgPyAnZGInIDogaSkpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9IChpbmZvcywgdGFiKSA9PiB0aGlzLm9uQ2xpY2soaW5mb3MsIHRhYik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKGlkKSB7XHJcbiAgICAgIGlmICghdGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMuY3JlYXRlKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICBicm93c2VyLm1lbnVzLnJlbW92ZShpZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkLnNwbGljZSh0aGlzLmNyZWF0ZWQuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsKCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGUob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVkO1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3Nob3J0Y3V0cycpLnRoZW4oc2hvcnRjdXRzID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzaG9ydGN1dHNbaV1bMl0pIHRoaXMuY3JlYXRlKGkpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soaW5mb3MsIHRhYikge1xyXG4gICAgICBjb25zdCBpZCA9IGluZm9zLm1lbnVJdGVtSWQ7XHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgcmVwb3J0KSB7XHJcbiAgICBsZXQgbG9nLCBtc2c7XHJcbiAgICBpZiAoZXJyb3IudGltZSkge1xyXG4gICAgICBsb2cgPSBbZXJyb3IudGltZSwgZXJyb3IubWVzc2FnZSArICcgWycgKyBlcnJvci5sb2NhdGlvbiArICddJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2cgPSBbKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgX0xPR19LRVlTW2Vycm9yXSB8fCBlcnJvcl07XHJcbiAgICAgIGlmIChyZXBvcnQgJiYgdHlwZW9mIHJlcG9ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsb2cucHVzaChyZXBvcnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihyZXBvcnQpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnLCByZXBvcnQpO1xyXG4gIH0sXHJcbiAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3VybCcpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRQQk0oKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9wYm0nKTtcclxuICB9LFxyXG4gIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdqc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH0sXHJcbiAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NoYW5nZWQ6dXJsJzogJ29uVVJMQ2hhbmdlJyxcclxuICAgICAgJ2NvbXBsZXRlZDp0YWInOiAnb25UYWJDb21wbGV0ZWQnLFxyXG4gICAgICAnY2xpY2tlZDpwYWdlLWFjdGlvbic6ICdoYW5kbGVJbmplY3Rpb25zJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JzogJ29uU2F2ZU5ld1JlcXVlc3QnLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdvblVwZGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnbmFtZTplbnRyeT8nOiAnb25OYW1pbmdSZXF1ZXN0JyxcclxuICAgICAgJ29wZW5lZDplbnRyeSc6ICd0ZW1wU2F2ZUVudHJ5TWV0YURhdGEnXHJcbiAgICB9XHJcbiAgfSxcclxuICBxdWV1ZWRGb3JUYWJDb21wbGV0ZWQ6IHt9LFxyXG4gIGluamVjdGVkU2NyaXB0czoge30sXHJcbiAgcmVjZW50bHlPcGVuZWRFbnRyeTogbnVsbCxcclxuXHJcbiAgb25UYWJDb21wbGV0ZWQodGFiSWQpIHtcclxuICAgIGlmICh0aGlzLnF1ZXVlZEZvclRhYkNvbXBsZXRlZFt0YWJJZF0pIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgdGhpcy5xdWV1ZWRGb3JUYWJDb21wbGV0ZWRbdGFiSWRdKTtcclxuICAgICAgZGVsZXRlIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvblVSTENoYW5nZSh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHRoaXMucXVldWVkRm9yVGFiQ29tcGxldGVkW3RhYklkXSA9IGNoYW5nZWQudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdHRlbXB0SW5qZWN0aW9ucyh0YWJJZCwgY2hhbmdlZC51cmwpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF0dGVtcHRJbmplY3Rpb25zKHRhYklkLCBuZXdVcmwpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmFkZG9uLmF1dG9jcykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlSW5qZWN0aW9ucyh0YWJJZCwgbmV3VXJsKSB7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkID0gdGhpcy5pbmplY3RlZFNjcmlwdHNbdGFiSWRdO1xyXG4gICAgY29uc3Qgc2FtZUhhc2hsZXNzVXJscyA9IHJlZ2lzdGVyZWQgJiYgX0hBU0hMRVNTKHJlZ2lzdGVyZWQudXJsKSA9PT0gX0hBU0hMRVNTKG5ld1VybCk7XHJcbiAgICBjb25zdCByZWxvYWRlZCA9IHJlZ2lzdGVyZWQgJiYgKHJlZ2lzdGVyZWQudXJsID09PSBuZXdVcmwgfHwgIXNhbWVIYXNobGVzc1VybHMpO1xyXG5cclxuICAgIGlmICghcmVnaXN0ZXJlZCB8fCByZWxvYWRlZCkge1xyXG5cclxuICAgICAgdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCBuZXdVcmwpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCBuZXdVcmwpO1xyXG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZmlsdGVyTWF0Y2hlcyhtYXRjaGVzKTtcclxuXHJcbiAgICAgICAgICBpZiAoZW50cmllcykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2VudHJpZXM6Zm91bmQnLCB7XHJcbiAgICAgICAgICAgICAgZW50cmllcyxcclxuICAgICAgICAgICAgICByZWNlbnRseU9wZW5lZEVudHJ5OiB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnksXHJcbiAgICAgICAgICAgICAgbG9ja2VkOiAhIW1hdGNoZXMubG9ja2VkRW50cmllcy5sZW5ndGhcclxuICAgICAgICAgICAgfSwgeyB0YWI6IHRhYklkIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5ID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzYW1lSGFzaGxlc3NVcmxzICYmIHJlZ2lzdGVyZWQuZW50cnkgJiYgcmVnaXN0ZXJlZC5lbnRyeS5oYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaGFzaDpjaGFuZ2VkJywgbmV3VXJsKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBpbmplY3RDb250ZW50U2NyaXB0KHRhYklkLCB1cmwpIHtcclxuICAgIHJldHVybiBicm93c2VyLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwge1xyXG4gICAgICBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzJyxcclxuICAgICAgYWxsRnJhbWVzOiB0cnVlLFxyXG4gICAgICBydW5BdDogJ2RvY3VtZW50X2lkbGUnXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luamVjdGVkOicsIHRhYklkLCB1cmwpO1xyXG4gICAgICAgIHRoaXMuaW5qZWN0ZWRTY3JpcHRzW3RhYklkXSA9IHsgdXJsIH07XHJcbiAgICAgICAgdGhpcy5pbnNlcnRDU1ModGFiSWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBpbmplY3QgY29udGVudCBzY3JpcHQnLCBlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOmluamVjdC1jb250ZW50LXNjcmlwdCcpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbnNlcnRDU1ModGFiSWQpIHtcclxuICAgIGJyb3dzZXIudGFicy5pbnNlcnRDU1ModGFiSWQsIHtcclxuICAgICAgZmlsZTogJy4uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi5jc3MnLFxyXG4gICAgICBhbGxGcmFtZXM6IHRydWVcclxuICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIGluamVjdCBjc3MnLCBlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0Jyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGZpbmRNYXRjaGluZ0VudHJpZXMoaGlzdG9yeSwgdXJsKSB7XHJcbiAgICBjb25zdCBoYXNobGVzc1BhZ2VVcmwgPSBfSEFTSExFU1ModXJsKTtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gW107XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gW107XHJcbiAgICBsZXQgZW50cnksIHBhZ2VVcmwsIGVudHJ5VXJsO1xyXG5cclxuICAgIGZvciAobGV0IGUgaW4gZW50cmllcykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbZV07XHJcbiAgICAgIHBhZ2VVcmwgPSBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gdXJsIDogaGFzaGxlc3NQYWdlVXJsO1xyXG4gICAgICBlbnRyeVVybCA9IGVudHJ5Lmhhc2hTZW5zaXRpdmUgPyBlbnRyeS51cmwgOiBfSEFTSExFU1MoZW50cnkudXJsKTtcclxuXHJcbiAgICAgIGlmIChwYWdlVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBsb2NrZWRFbnRyaWVzLCBub25Mb2NrZWRFbnRyaWVzIH07XHJcbiAgfSxcclxuXHJcbiAgZmlsdGVyTWF0Y2hlcyhtYXRjaGVzKSB7XHJcbiAgICBjb25zdCBsb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5sb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IG1hdGNoZXMubm9uTG9ja2VkRW50cmllcztcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXNDb3VudCA9IGxvY2tlZEVudHJpZXMubGVuZ3RoO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllc0NvdW50ID0gbm9uTG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBsZXQgZW50cmllcztcclxuXHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50ICYmIG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnKTtcclxuICAgICAgZW50cmllcyA9IGxvY2tlZEVudHJpZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChub25Mb2NrZWRFbnRyaWVzQ291bnQpIHtcclxuICAgICAgZW50cmllcyA9IFtub25Mb2NrZWRFbnRyaWVzWzBdXTtcclxuICAgICAgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCA+IDEpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50cmllcztcclxuICB9LFxyXG5cclxuICBvbk5hbWluZ1JlcXVlc3Qoc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBjb25zdCBwcml2ID0gd2luZG93SW5mby5pbmNvZ25pdG87XHJcbiAgICAgICAgaWYgKCFwcml2KSBzZW5kUmVzcG9uc2UoIXByaXYpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2Ugc2VuZFJlc3BvbnNlKHNhdmVJblByaXYpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uU2F2ZU5ld1JlcXVlc3QoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoKVxyXG4gICAgICAudGhlbih3aW5kb3dJbmZvID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvd0luZm8uaW5jb2duaXRvKSB0aGlzLmVtaXQoJ2dyYW50ZWQ6c2F2ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG9uVXBkYXRlUmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRlbXBTYXZlRW50cnlNZXRhRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBkYXRhO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZ3JhbnRlZDpzYXZlLWVudHJ5JzogJ25hbWUnLFxyXG4gICAgICAgICdyZW5hbWU6ZW50cnknOiAncmVuYW1lJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hbWUoZW50cnkpIHtcclxuICAgICAgaWYgKGVudHJ5Lm5hbWUpIHJldHVybiB0aGlzLmFkanVzdE5hbWUoZW50cnkubmFtZSwgZW50cnkpO1xyXG5cclxuICAgICAgX1NUT1JBR0UuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB0aGlzLmFkanVzdE5hbWUobnVsbCwgZW50cnksIG5hbWluZykpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIHJlbmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmV3TmFtZSk7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIpIG5ld05hbWUgKz0gJyAoJyArIChjb3VudGVyICsgMSkgKyAnKSc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5hbWVkOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBhZGp1c3ROYW1lKG5hbWUsIGVudHJ5LCBtZXRob2QpIHtcclxuICAgICAgbmFtZSA9IG5hbWUgPyBuYW1lIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ3RpdGxlJyA/IGVudHJ5LnRpdGxlLnRyaW0oKSA/IGVudHJ5LnRpdGxlLnRyaW0oKSA6IGVudHJ5LnVybCA6XHJcbiAgICAgICAgICAgICBtZXRob2QgPT09ICdkYXRlJyA/IChuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSkgOiAnJztcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gdGhpcy5nZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyICYmIGVudHJ5LmxvY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJywgJ2Vycm9yX2RvdWJsZV9sb2NrZWRfbmFtZScsIG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY291bnRlcikgbmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICAgIGVudHJ5Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCduYW1lZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX25hbWluZycpKTtcclxuICAgIH0sXHJcbiAgICBnZXREb3VibGVOYW1lQ291bnQoaGlzdG9yeSwgbmFtZSkge1xyXG4gICAgICBsZXQgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcyksXHJcbiAgICAgICAgICBsID0gZXhpc3RpbmdOYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBjb3VudGVyID0gMCxcclxuICAgICAgICAgIGNoZWNrcG9pbnQ7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgY2hlY2twb2ludCA9IGV4aXN0aW5nTmFtZXNbbF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpKSBjb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9LFxyXG4gICAgaXNEb3VibGVOYW1lKG5hbWUsIGNoZWNrcG9pbnQpIHtcclxuICAgICAgaWYgKG5hbWUgPT09IGNoZWNrcG9pbnQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgbGV0IGwgPSBuYW1lLmxlbmd0aCxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfc3RhcnQgPSBjaGVja3BvaW50LnN1YnN0cmluZygwLCBsKSxcclxuICAgICAgICAgIGNoZWNrcG9pbnRfZW5kO1xyXG5cclxuICAgICAgaWYgKG5hbWUgIT09IGNoZWNrcG9pbnRfc3RhcnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGNoZWNrcG9pbnRfZW5kID0gY2hlY2twb2ludC5zdWJzdHJpbmcobCwgY2hlY2twb2ludC5sZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKC9eXFxzKlxcKFxcZCtcXCkkLy50ZXN0KGNoZWNrcG9pbnRfZW5kKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdvblNhdmVkRW50cnknLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDp1cGRhdGUtZW50cnknOiAnb25TYXZlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeS1kb3VibGUtbG9ja2VkJzogJ29uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpkZWxldGUtZW50cmllcyc6ICdvbkRlbGV0ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOm9wZW4tdGFiJzogJ29uT3BlblRhYkZhaWx1cmUnLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnb25GYWlsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdvblN1Y2Nlc3NmdWxSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2ZhaWxlZDpwYm0nOiAnb25GYWlsZWRQQk0nLFxyXG4gICAgICAgICdmYWlsZWQ6aW1wb3J0JzogJ29uRmFpbGVkSW1wb3J0JyxcclxuICAgICAgICAnZXJyb3I6aW1wb3J0JzogJ29uSW1wb3J0RXJyb3InLFxyXG4gICAgICAgICdpbXBvcnRlZDpzdG9yYWdlJzogJ29uSW1wb3J0U3VjY2VzcycsXHJcbiAgICAgICAgJ2Vycm9yJzogJ29uRXJyb3InLFxyXG4gICAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJzogJ29uTWl4ZWRFbnRyeVR5cGVzJyxcclxuICAgICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJzogJ29uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMnLFxyXG4gICAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3Qtc3R5bGVzaGVldCc6ICdvbkNTU0luamVjdGlvbkZhaWx1cmUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5KGNvbmRpdGlvbiwgbWVzc2FnZSwgdHlwZSkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbihzZXR0aW5ncykpIHtcclxuICAgICAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RleHRtYXJrZXI6ICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0eXBlKSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvblVybDogYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnaWNvbnMvdG00OC5wbmcnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlZEVudHJ5KCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVkX2VudHJ5JyksXHJcbiAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFpbGVkUEJNKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnBibU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcGJtJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfdXJsJyksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZEltcG9ydChlcnJvcjEsIGVycm9yMikge1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yMSk7XHJcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UyID0gZXJyb3IyID8gJ1xcblxcbicgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjIpIDogJyc7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfZmFpbHVyZScsIGVyck1lc3NhZ2UxICsgZXJyTWVzc2FnZTIpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRFcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3dhcm5pbmcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICd3YXJuaW5nJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkltcG9ydFN1Y2Nlc3MoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MudmlwTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9pbXBvcnRfc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEnKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5mYWlsdXJlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzInKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TdWNjZXNzZnVsUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2Muc3VjY2Vzc05vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fc3VjY2VzcycpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmZhaWx1cmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZUxvY2tlZERvdWJsZU5hbWVFcnJvcihlcnJvciwgbmFtZSkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3NhdmVfZmFpbHVyZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yLCBuYW1lKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlbGV0ZUVycm9yKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZXJyb3JOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2Vycm9yJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdqc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Nzc19pbmplY3Rpb25fZmFpbHVyZScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnc2hvdydcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YWIgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwYWdlLWFjdGlvbicsIHRhYi5pZCwgdGFiLnVybCk7XHJcbiAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLmhpZGUodGFiLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3codGFiSWQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MuYWRkb24uYXV0b2NzKSB7XHJcbiAgICAgICAgICBicm93c2VyLnBhZ2VBY3Rpb24uc2hvdyh0YWJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfR0VUX0FDVElWRV9UQUIsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdhY3RpdmF0ZWQ6dGFiJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnc2V0UGFuZWwnLFxyXG4gICAgICAgICdlbnRyeTpmb3VuZCc6ICdzdG9yZUVudHJ5JyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOidzZW5kRW50cnknLFxyXG4gICAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJzogJ3NlbmRPcmRlcmVkTWFya3MnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczoge30sXHJcblxyXG4gICAgc2V0UGFuZWwodGFiSWQsIHVybCkge1xyXG4gICAgICB0aGlzLmlzT3BlbigpLnRoZW4ob3BlbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5zZXRQYW5lbCh7XHJcbiAgICAgICAgICAgIHBhbmVsOiBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBjb250ZW50L3NpZGViYXIvc2lkZWJhci5odG1sIyR7dGFiSWR9XyR7dXJsfWApLFxyXG4gICAgICAgICAgICB0YWJJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnNpZGViYXJBY3Rpb24uaXNPcGVuKHt9KTtcclxuICAgIH0sXHJcbiAgICBzdG9yZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW50cmllc0ZvclRoaXNUYWIgPSB0aGlzLmVudHJpZXNbdGFiLmlkXTtcclxuICAgICAgICBsZXQgZW50cnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChlbnRyaWVzRm9yVGhpc1RhYikge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzRm9yVGhpc1RhYlt0YWIudXJsXSB8fCBlbnRyaWVzRm9yVGhpc1RhYltoYXNobGVzc1VybF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE9yZGVyZWRNYXJrcyhtYXJrcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2VudHJ5Om9yZGVyZWQtbWFya3MnLCBtYXJrcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXInLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdzYXZlQWN0aXZhdGlvblN0YXRlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJzogJ3RvZ2dsZVN5bmMnLFxyXG5cclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJzogJ2NoYW5nZVN0eWxlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJzogJ2NoYW5nZUF1dG9Ob3RlU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZyc6ICdjaGFuZ2VCZ0NvbG9yJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJzogJ2NoYW5nZU1hcmtNZXRob2QnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnOiAndG9nZ2xlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJzogJ2NoYW5nZVNob3J0Y3V0U2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnOiAndG9nZ2xlQ3RtU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJzogJ2NoYW5nZVNhdmVPcHQnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnOiAndG9nZ2xlSGFzaE9wdCcsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJzogJ3RvZ2dsZVByaXZTYXZlT3B0JyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZyc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZyc6ICd0b2dnbGVOb3RlT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3RvZ2dsZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZyc6ICd0b2dnbGVOb3RpZmljYXRpb25PcHQnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJzogJ2NoYW5nZU1pc2NTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJzogJ3RvZ2dsZVRCQlBvd2VyU2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJzogJ2NoYW5nZVNvcnRPcHQnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZyc6ICdjaGFuZ2VWaWV3T3B0JyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgJ2NoYW5nZTphdXRvY3Mtc2V0dGluZyc6ICd0b2dnbGVBdXRvY3NPcHQnLFxyXG5cclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJzogJ3JlbW92ZUN1c3RvbU1hcmtlcicsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcic6ICdhZGRDdXN0b21NYXJrZXInLFxyXG5cclxuICAgICAgJ25hbWVkOmVudHJ5JzogJ3NhdmVFbnRyeScsXHJcbiAgICAgICdyZW5hbWVkOmVudHJ5JzogJ3NhdmVOZXdOYW1lJyxcclxuICAgICAgJ2dyYW50ZWQ6dXBkYXRlLWVudHJ5JzogJ3VwZGF0ZUVudHJ5T25QYWdlQWN0aW9uJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJzogJ2RlbGV0ZUVudHJpZXMnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAndXBkYXRlRW50cnlPblJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnOiAnY2xlYW5FbnRyaWVzJyxcclxuICAgICAgJ3N5bmM6ZW50cnknOiAnc3luY0VudHJ5JyxcclxuICAgICAgJ3RhZzplbnRyaWVzJzogJ3RhZ0VudHJpZXMnLFxyXG4gICAgICAncmVtb3ZlOnRhZyc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAnYWRkOnRhZyc6ICdhZGRUYWcnLFxyXG5cclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInOiAnY2hhbmdlU0JTZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnOiAnY2hhbmdlVGhlbWVTZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZSc6ICd1cGRhdGVQYWdlTm90ZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVPbkNoYW5nZWRTeW5jOiBmYWxzZSxcclxuXHJcbiAgLy8gQURET04gTUVUSE9EU1xyXG4gIHNhdmVBY3RpdmF0aW9uU3RhdGUoYWN0aXZlKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hY3RpdmUgPSBhY3RpdmU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU1lOQyBNRVRIT0RTXHJcbiAgdG9nZ2xlU3luYyhmaWVsZCwgdmFsKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBmdW5jdGlvbihzeW5jKSB7XHJcbiAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICB0aGlzLnNldEFyZWFzKHN5bmMpO1xyXG4gICAgICByZXR1cm4gc3luYztcclxuICAgIH0sICdsb2NhbCcpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgc3luYyA9PiB7XHJcbiAgICAgICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgICAgIH0sICdzeW5jJylcclxuXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfdG9nZ2xlX3N5bmMnKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnRvZ2dsZS1zeW5jJywgZmllbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd0b2dnbGVkOnN5bmMgdG9nZ2xlZDpzeW5jLScgKyBmaWVsZCwgZmllbGQsIHZhbCkpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNFVFRJTkdTIE1FVEhPRFNcclxuICB1cGRhdGVTZXR0aW5ncyh1cGRhdGVyLCBzZXR0aW5nLCBlcnJvcikge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHVwZGF0ZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDonICsgc2V0dGluZyArICctc2V0dGluZ3MnKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgaWYgKGVycm9yKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpOyB9KTtcclxuICB9LFxyXG4gIGFkZEN1c3RvbU1hcmtlcihrZXksIHN0eWxlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XSA9ICB7IHN0eWxlIH07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9hZGRfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHJlbW92ZUN1c3RvbU1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgZGVsZXRlIHNldHRpbmdzLm1hcmtlcnNba2V5XTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX3JlbW92ZV9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU3R5bGUoa2V5LCBzdHlsZSkge1xyXG4gICAgaWYgKCFrZXkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IHN0eWxlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUJnQ29sb3Ioa2V5LCBjb2xvcikge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSBzZXR0aW5ncy5tYXJrZXJzW2tleV07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIpIHtcclxuICAgICAgICAgIGxldCBzcGxpdCA9IG1hcmtlci5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsIHN0eWxlO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzcGxpdFtsXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBtYXJrZXIuc3R5bGUucmVwbGFjZSgvYmFja2dyb3VuZC1jb2xvcjojLns2fS8sICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBjb2xvcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgICB9LFxyXG4gICAgICAnYmctY29sb3InLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VBdXRvTm90ZVNldHRpbmcoa2V5LCBhdXRvbm90ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uYXV0b25vdGUgPSBhdXRvbm90ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b25vdGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV90b2dnbGVfYXV0b25vdGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWFya01ldGhvZChtZXRob2QpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID0gbWV0aG9kOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrLW1ldGhvZCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX21hcmtfbWV0aG9kJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNob3J0Y3V0U2V0dGluZyhrZXksIHN0YXR1cykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsxXSA9IHN0YXR1czsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNob3J0Y3V0U2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzBdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmltbXV0ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpbW11dG9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZURyb3BMb3NzZXNPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnZHJvcGxvc3Nlc29wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUhhc2hPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaGFzaG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVQcml2U2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdwcml2c2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX3ByaXYnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTmFtaW5nT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lm5hbWluZyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbmFtaW5nJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbmFtaW5nJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3dpdGNoUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90aWZpY2F0aW9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3RpZmljYXRpb24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWlzY1NldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21pc2MnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVEJCUG93ZXJTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd0YmJwb3dlcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVBdXRvY3NPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b2NzJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b2NzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNCU2V0dGluZ3ModGFiLCB1bmZvbGRlZCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGFic1t0YWJdLnVuZm9sZGVkID0gdW5mb2xkZWQ7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuICBjaGFuZ2VUaGVtZVNldHRpbmdzKHRoZW1lKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50aGVtZSA9IHRoZW1lOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEhJU1RPUlkgTUVUSE9EU1xyXG4gIGNsZWFuRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBpID0gbmFtZXMubGVuZ3RoLCBuYW1lO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXNbbmFtZV0pIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZWxzZSBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdsb2NhbCcpIHsgdGhpcy5lbWl0KCdjbGVhbmVkOmVudHJpZXMnKTsgfX0pXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9jbGVhbl9oaXN0b3J5JykpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuY2xlYW5FbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pO1xyXG4gIH0sXHJcbiAgc2F2ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBlbnRyeS5sb3N0ID0gW107XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgnc2F2ZWQ6ZW50cnknLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeScsICdlcnJvcl9zYXZlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgc2F2ZU5ld05hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdKTtcclxuICAgICAgZW50cnkubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSA9IGVudHJ5O1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktbmFtZScsIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSwgb2xkTmFtZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGFyZWEpIHtcclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIGNvbnN0IHJlY2VpdmVkQ29tcGxldGVFbnRyeSA9ICEhZW50cnkudXJsO1xyXG4gICAgbGV0IGZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaWYgKHJlY2VpdmVkQ29tcGxldGVFbnRyeSkge1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LmVudHJpZXNbbmFtZV0pIHtcclxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBlbnRyeS5zeW5jZWQ7XHJcbiAgICAgICAgICBmb3IgKGxldCBlIGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5oYXNPd25Qcm9wZXJ0eShlKSkge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXVtlXSA9IGVudHJ5W2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoIWZvdW5kKSB7IHRoaXMudXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGVudHJ5LnN5bmNlZCA/ICdsb2NhbCcgOiAnc3luYycpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktb24tc2F2ZScsIGVudHJ5KSk7XHJcbiAgfSxcclxuICBkZWxldGVFbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllcyAmJiBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB1cmwgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0udXJsO1xyXG4gICAgICAgICAgaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5oYXNoU2Vuc2l0aXZlO1xyXG5cclxuICAgICAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cnknLCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpkZWxldGUtZW50cmllcycsICdlcnJvcl9kZWxfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ3N5bmMnICYmIG5hbWVzX2xvY2FsLmxlbmd0aCkgeyB0aGlzLmRlbGV0ZUVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdkZWxldGVkOmVudHJpZXMnKSk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uUmVzdG9yYXRpb24oZW50cnlOYW1lLCByZXN0b3JlZE1hcmtzLCBsb3N0TWFya3MsIGFyZWEpIHtcclxuICAgIF9TVE9SQUdFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzID0gaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgICAgIGNvbnN0IHJlc3RvcmVkTWFya3NJRHMgPSBbXTtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrc0lEcyA9IFtdO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLm1hcmtzID0gcmVzdG9yZWRNYXJrcztcclxuXHJcbiAgICAgICAgICByZXN0b3JlZE1hcmtzLmZvckVhY2gobWFyayA9PiByZXN0b3JlZE1hcmtzSURzLnB1c2gobWFyay5pZCkpO1xyXG5cclxuICAgICAgICAgIGxldCBsID0gb2xkTG9zdE1hcmtzLmxlbmd0aCwgaWQ7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IG9sZExvc3RNYXJrc1tsXS5pZDtcclxuICAgICAgICAgICAgaWYgKHJlc3RvcmVkTWFya3NJRHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3NJRHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsb3N0TWFya3MuZm9yRWFjaChtYXJrID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvbGRMb3N0TWFya3NJRHMuaW5jbHVkZXMobWFyay5pZCkpIG9sZExvc3RNYXJrcy5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubG9zdCA9IG9sZExvc3RNYXJrcztcclxuXHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzeW5jRW50cnkobmFtZSwgdmFsKSB7XHJcbiAgICBjb25zdCBhcmVhXzEgPSB2YWwgPyAnbG9jYWwnIDogJ3N5bmMnO1xyXG4gICAgY29uc3QgYXJlYV8yID0gdmFsID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICBsZXQgZW50cnk7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW25hbWVdKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdmFsO1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWFfMSlcclxuXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYV8yKVxyXG5cclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1zeW5jJywgZW50cnkpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzeW5jLWVudHJ5JywgbmFtZSkpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHRhZ0VudHJpZXMobmFtZXMsIHRhZykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgIG5hbWVzLnN5bmMuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCAnc3luYycpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICAgICAgbmFtZXMubG9jYWwuZm9yRWFjaChuYW1lID0+IHRoaXMuYWRkVGFnVG9FbnRyeShlbnRyaWVzW25hbWVdLCB0YWcpKTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sICdsb2NhbCcpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHJlbW92ZVRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWRFbnRyeSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJyk7XHJcbiAgICAgIGlmIChzdG9yZWRFbnRyeS50YWcpIHtcclxuICAgICAgICBzdG9yZWRFbnRyeS50YWcgPSBzdG9yZWRFbnRyeS50YWdcclxuICAgICAgICAgIC5yZXBsYWNlKHJ4LCAnICcpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXlxcc3xcXHMkLywgJycpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXFxzezIsfS8sICcgJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKTtcclxuICB9LFxyXG4gIGFkZFRhZyh0YWcsIGVudHJ5KSB7XHJcbiAgICBjb25zdCBhcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkVGFnVG9FbnRyeShoaXN0b3J5LmVudHJpZXNbbmFtZV0sIHRhZyk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSk7XHJcbiAgfSxcclxuICBhZGRUYWdUb0VudHJ5KGVudHJ5LCB0YWcpIHtcclxuICAgIGlmICghdGFnKSBlbnRyeS50YWcgPSAnJztcclxuICAgIGVsc2UgaWYgKCFlbnRyeS50YWcpIGVudHJ5LnRhZyA9IHRhZztcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnLCAnZycpO1xyXG4gICAgICBpZiAoZW50cnkudGFnLnNlYXJjaChyeCkgPT09IC0xKSB7XHJcbiAgICAgICAgZW50cnkudGFnICs9ICcgJyArIHRhZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGVudHJ5KTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG5cclxuICAvLyBQQUdFIE5PVEUgTUVUSE9EU1xyXG4gIHVwZGF0ZVBhZ2VOb3Rlcyh1cmwsIG5vdGVzKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3BhZ2Vub3RlcycsIHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgIHBhZ2Vub3Rlc1t1cmxdID0gbm90ZXM7XHJcbiAgICAgIHJldHVybiBwYWdlbm90ZXM7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLm9uU3RvcmFnZUNoYW5nZWQpKTtcclxuICB9LFxyXG4gIG9uU3RvcmFnZUNoYW5nZWQoY2hhbmdlZEl0ZW0pIHtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5zZXR0aW5ncykgdGhpcy5lbWl0KCd1cGRhdGVkOnNldHRpbmdzJyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uaGlzdG9yeSkgdGhpcy5lbWl0KCd1cGRhdGVkOmhpc3RvcnknKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5wYWdlbm90ZXMpIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlbm90ZXMnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlVGFiRXZlbnRIYW5kbGVycycsXHJcbiAgICAgICAgLy8nc3RhcnRlZDphcHAnOiAnb3BlbkluaXRQYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHRiYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShhbSknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ2xvb2t1cDp3b3JkJzogJ29wZW5TZWFyY2gnLFxyXG4gICAgICAgICdvcGVuOmVudHJpZXMnOiAnb3BlbidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVybHM6IHtcclxuICAgICAgbmV3czogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXdzJyxcclxuICAgICAgc2V0dGluZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c2V0dGluZ3MnLFxyXG4gICAgICBoaXN0b3J5OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWhpc3RvcnknLFxyXG4gICAgICBpbmZvOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ldycsXHJcbiAgICAgIGhlbHA6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bWFudWFsJyxcclxuICAgICAgY29udGFjdDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1jb250YWN0JyxcclxuICAgICAgbG9nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1sb2dzJyxcclxuICAgICAgZXhwb3J0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWV4cG9ydCcsXHJcbiAgICAgIHN5bmM6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c3luYydcclxuICAgIH0sXHJcbiAgICB0YWJFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgIG9uQWN0aXZhdGVkOiBudWxsLFxyXG4gICAgICBvblVwZGF0ZWQ6IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMobW9kZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uQWN0aXZhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkID0gdGhpcy5vbkFjdGl2YXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihvbkFjdGl2YXRlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQgPSB0aGlzLm9uVXBkYXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIob25VcGRhdGVkLCB7IHByb3BlcnRpZXM6IFsnc3RhdHVzJ10gfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBbJ29uQWN0aXZhdGVkJywgJ29uVXBkYXRlZCddLmZvckVhY2goZXYgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnNbZXZdLnJlbW92ZUxpc3RlbmVyKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFiRXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZFRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH0sXHJcbiAgICBvbkFjdGl2YXRlZCh0YWIpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhY3RpdmF0ZWQ6dGFiJywgdGFiLnRhYklkLCAodGFiLnVybCB8fCAnJykpO1xyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlZCh0YWJJZCwgY2hhbmdlZCkge1xyXG4gICAgICBpZiAoY2hhbmdlZC51cmwpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoYW5nZWQuc3RhdHVzICYmIGNoYW5nZWQuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQ6dGFiJywgdGFiSWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW4odXJscywgbmFtZXMpIHtcclxuICAgICAgdXJscyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJyA/IFt1cmxzXSA6IHVybHM7XHJcbiAgICAgIG5hbWVzID0gdHlwZW9mIG5hbWVzID09PSAnc3RyaW5nJyA/IFtuYW1lc10gOiBuYW1lcztcclxuICAgICAgbGV0IGwgPSB1cmxzLmxlbmd0aCxcclxuICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IGZhbHNlLFxyXG4gICAgICAgICAgdXJsO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uKHNlbGYsIGwpIHtcclxuICAgICAgICAgIHVybCA9IHVybHNbbF07XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiB1cmxzW2xdIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZWN1cml0eVdhcm5pbmcpIHNlbGYuZW1pdCgnZmFpbGVkOm9wZW4tdGFiJyk7XHJcbiAgICAgICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuYW1lcykgc2VsZi5lbWl0KCdvcGVuZWQ6ZW50cnknLCB7IHVybDogdXJsLCBuYW1lOiBuYW1lc1tsXSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkodGhpcywgbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuQWRkb25QYWdlKGlkKSB7XHJcbiAgICAgIHRoaXMub3Blbih0aGlzLnVybHNbaWRdKTtcclxuICAgIH0sXHJcbiAgICBvcGVuSW5pdFBhZ2UodmVyc2lvbiwgbG9hZFJlYXNvbikge1xyXG4gICAgICBpZiAobG9hZFJlYXNvbiAmJiBsb2FkUmVhc29uID09PSAnaW5zdGFsbCcgfHwgbG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScpIHRoaXMub3BlbkFkZG9uUGFnZSgnbmV3cycpO1xyXG4gICAgfSxcclxuICAgIG9wZW5TZWFyY2god29yZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IGN1c3RvbSA9IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoLCB1cmw7XHJcbiAgICAgICAgaWYgKGN1c3RvbSkgdXJsID0gJ2h0dHBzOi8vJyArIGN1c3RvbVswXSArIHdvcmQgKyBjdXN0b21bMV07XHJcbiAgICAgICAgZWxzZSB1cmwgPSAnaHR0cHM6Ly8nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyArIHdvcmQ7XHJcbiAgICAgICAgdGhpcy5vcGVuKHVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZTphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdpbnN0YWxsOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2NoZWNrOnN0b3JhZ2UnOiAnY2hlY2tTdG9yYWdlT25TdGFydCcsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZSc6ICdpbXBvcnRTdG9yYWdlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHNldHRpbmdzLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IHNldHRpbmdzLm1pc2M7XHJcbiAgICAgICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlIHZpcE5vdGUnLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLm4pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5uID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5uO1xyXG4gICAgICAgICAgbWlzYy5ub3RlaWNvbiA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgICAgICAgbWlzYy5ub3Rlb25jbGljayA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5hcnJvd3VwKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3d1cCA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3d1cDtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd2Rvd24gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93ZG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuZFswXSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmRbMF0gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLnNiKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLnNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5jbSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmNtID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5jbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWFya2Vycy5tLnN0eWxlKSB7XHJcbiAgICAgICAgICBsZXQgc3R5bGU7XHJcbiAgICAgICAgICBmb3IgKGxldCBtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBtYXJrZXJzW21dO1xyXG4gICAgICAgICAgICBtYXJrZXJzW21dID0geyBzdHlsZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnNvcnRlZCkge1xyXG4gICAgICAgICAgaGlzdG9yeS5zb3J0ZWQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGlzdG9yeS52aWV3KSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3Rvcnkuc2F2ZUluUHJpdiAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNhdmVJblByaXYgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaW1tdXQgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pbW11dCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuaWdub3JlSGFzaCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5Lmlnbm9yZUhhc2ggPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pZ25vcmVIYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGhpc3RvcnkuZHJvcExvc3NlcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmRyb3BMb3NzZXMgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm90ZVR5cGVzLmZvckVhY2gobm90ZVR5cGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBtaXNjW25vdGVUeXBlXSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIG1pc2Nbbm90ZVR5cGVdID0gZGVmYXVsdFNldHRpbmdzLm1pc2Nbbm90ZVR5cGVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbWlzYy50bXVpcG9zKSB7XHJcbiAgICAgICAgICBtaXNjLnRtdWlwb3MgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXRyYW5zcCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGV0cmFuc3AgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2Mubm90ZXBsYWludmlldyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLm5vdGVwbGFpbnZpZXcgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlcGxhaW52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1pc2MubWFya21ldGhvZCkge1xyXG4gICAgICAgICAgbWlzYy5tYXJrbWV0aG9kID0gZGVmYXVsdFNldHRpbmdzLm1pc2MubWFya21ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLnRiYnBvd2VyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2MudGJicG93ZXIgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2IpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzLnNiLnRoZW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50YWJzLnRoZW1lcyA9IGRlZmF1bHRTZXR0aW5ncy5zYi50YWJzLnRoZW1lcztcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRoZW1lID0gZGVmYXVsdFNldHRpbmdzLnNiLnRoZW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gZGVmYXVsdFNldHRpbmdzLmFkZG9uLmF1dG9jcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnKTtcclxuICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gIH0sXHJcbiAgdXBkYXRlSGlzdG9yeShoaXN0b3J5KSB7XHJcbiAgICBkZWxldGUgaGlzdG9yeS5vcmRlcjtcclxuXHJcbiAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgZW50cnk7XHJcblxyXG4gICAgaWYgKCFsKSByZXR1cm4gaGlzdG9yeTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGVudHJ5ID0gdGhpcy5maXhIaXN0b3J5RGF0ZXMoZW50cmllc1tuYW1lc1tsXV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB0eXBlb2YgZW50cnkuc3luY2VkID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoaXN0b3J5O1xyXG4gIH0sXHJcbiAgZml4SGlzdG9yeURhdGVzKGVudHJ5KSB7XHJcbiAgICBjb25zdCBsYW5nID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5maXJzdCAhPT0gJ251bWJlcicpIGVudHJ5LmZpcnN0ID0gbmV3IERhdGUoKGVudHJ5LmZpcnN0W2xhbmddIHx8IGVudHJ5LmZpcnN0LmVuIHx8IGVudHJ5LmZpcnN0LmRlIHx8IGVudHJ5LmZpcnN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5Lmxhc3QgIT09ICdudW1iZXInKSBlbnRyeS5sYXN0ID0gbmV3IERhdGUoKGVudHJ5Lmxhc3RbbGFuZ10gfHwgZW50cnkubGFzdC5lbiB8fCBlbnRyeS5sYXN0LmRlIHx8IGVudHJ5Lmxhc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG4gIG1lcmdlSGlzdG9yaWVzKG5ld0hpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKG9sZEhpc3RvcnkgPT4ge1xyXG5cclxuICAgICAgbGV0IGVudHJpZXMgPSBuZXdIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgb2xkRW50cmllcyA9IG9sZEhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG9sZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRW50cmllcyksXHJcbiAgICAgICAgICBhY2NlcHRlZEVudHJpZXMgPSB7fSxcclxuICAgICAgICAgIG5hbWUsIGVudHJ5LCB1cmwsIHVybEV4aXN0cywgZTtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIHVybEV4aXN0cyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIW9sZE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB1cmwgPSBlbnRyeS51cmw7XHJcblxyXG4gICAgICAgICAgZm9yIChlIGluIG9sZEVudHJpZXMpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEVudHJpZXNbZV0udXJsID09PSB1cmwpIHtcclxuICAgICAgICAgICAgICB1cmxFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXVybEV4aXN0cykge1xyXG4gICAgICAgICAgICBlbnRyeS5zeW5jZWQgPSBhcmVhID09PSAnc3luYyc7XHJcbiAgICAgICAgICAgIGFjY2VwdGVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBhIGluIGFjY2VwdGVkRW50cmllcykge1xyXG4gICAgICAgICAgX2VudHJpZXNbYV0gPSBhY2NlcHRlZEVudHJpZXNbYV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICB9LCBhcmVhKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldFN0b3JhZ2VPblVwZ3JhZGUocHJldlZlcnNpb24gPSAnMicsIGxvYWRSZWFzb24pIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIGlmIChsb2FkUmVhc29uICE9PSAnaW5zdGFsbCcpIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZScpO1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdzeW5jJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKSlcclxuICAgIC8vLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnLCBwcmV2VmVyc2lvbikpXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScsIHByZXZWZXJzaW9uKTtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbicsIGUudG9TdHJpbmcoKSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNoZWNrU3RvcmFnZU9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdzeW5jJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgfSkpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpO1xyXG4gIH0sXHJcbiAgaW1wb3J0U3RvcmFnZShpbXBvcnRlZFN0b3JhZ2UsIGFyZWEpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IGltcG9ydGVkU3RvcmFnZS5zZXR0aW5ncyxcclxuICAgICAgICBoaXN0b3J5ID0gaW1wb3J0ZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgaWYgKCFoaXN0b3J5ICYmICFzZXR0aW5ncykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9lbXB0eScpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICghaGlzdG9yeSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzX3MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2Vzc19oID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzX3MpIHtcclxuICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoc3VjY2Vzc19zID09PSAnb3V0ZGF0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOnNldHRpbmdzIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkge1xyXG4gICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ291dGRhdGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH0sXHJcbiAgaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXJnZUhpc3Rvcmllcyh0aGlzLnVwZGF0ZUhpc3RvcnkoaGlzdG9yeSwgdHJ1ZSksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3ZpZXc6ZW50cnknOiAnb3BlbkVudHJ5RGV0YWlsUGFnZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuRW50cnlEZXRhaWxQYWdlKG5hbWUpIHtcclxuICAgICAgY29uc3QgcG9wdXBVUkwgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdjb250ZW50L2RldGFpbC12aWV3L2RldGFpbC12aWV3Lmh0bWwnKTtcclxuXHJcbiAgICAgIGJyb3dzZXIud2luZG93cy5nZXRDdXJyZW50KCkudGhlbihjdXJyZW50V2luZG93ID0+IHtcclxuXHJcbiAgICAgICAgYnJvd3Nlci53aW5kb3dzLmNyZWF0ZSh7XHJcbiAgICAgICAgICB1cmw6IHBvcHVwVVJMICsgJyMnICsgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxyXG4gICAgICAgICAgdHlwZTogJ3BhbmVsJyxcclxuICAgICAgICAgIGhlaWdodDogY3VycmVudFdpbmRvdy5oZWlnaHQgLSAyMixcclxuICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbihjdXJyZW50V2luZG93LndpZHRoLCA5ODApLFxyXG4gICAgICAgICAgaW5jb2duaXRvOiBjdXJyZW50V2luZG93LmluY29nbml0b1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5uZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdiYWNrZ3JvdW5kJyxcclxuICB0eXBlOiAnYmFja2dyb3VuZCcsXHJcbiAgcG9zdHBvbmVDb25uZWN0aW9uOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYycsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5LW9uLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnLFxyXG4gICAgICAndXBkYXRlZDpsb2dzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3RtLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmJnLWNvbG9yLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6Y3VzdG9tLXNlYXJjaC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnNhdmVvcHQtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncycsXHJcbiAgICAgICdlbnRyaWVzOmZvdW5kJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyaWVzJyxcclxuICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknLFxyXG4gICAgICAnY3R4Om0nLFxyXG4gICAgICAnY3R4OmQnLFxyXG4gICAgICAnY3R4OmInLFxyXG4gICAgICAnY3R4Oi1iJyxcclxuICAgICAgJ2N0eDpuJyxcclxuICAgICAgJ2N0eDpjJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAnY2hhbmdlZDp1cmwnXHJcbiAgICBdLFxyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3RlcycsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9TVE9SRX0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoJ2xvZ3MnKTtcclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgbGV0IHN5bmMgPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLnN5bmMgPyBsb2NhbFN0b3JhZ2Uuc3luYyA6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYztcclxuICAgICAgcmV0dXJuIHRoaXMuX3NldF9zeW5jKHN5bmMpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0KGZpZWxkLCB2YWwpIHtcclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfc2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG4gICAgcmV0dXJuIHRoaXNbJ19zZXRfJyArIGZpZWxkXSh2YWwpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGUoLi4uYXJncyk7XHJcbiAgfSxcclxuXHJcbiAgaXNFbXB0eShhcmVhID0gJ3N5bmMnKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAoIU9iamVjdC5rZXlzKHN0b3JhZ2UpLmxlbmd0aCAmJiBzdG9yYWdlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfcHJpdnNhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RiYnBvd2VyKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcblxyXG4gIF9zZXRfc3RvcmFnZShhcmVhID0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NldF9zZXR0aW5ncyhhcmVhKS50aGVuKCgpID0+IHRoaXMuX3NldF9oaXN0b3J5KGFyZWEpKTtcclxuICB9LFxyXG4gIF9zZXRfc3luYyhzeW5jKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHN5bmM6IHN5bmMgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgc3luYzogc3luYyB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXRBcmVhcyhzeW5jKSk7XHJcbiAgfSxcclxuICBfc2V0X3NldHRpbmdzKGFyZWEgPSB0aGlzLmFyZWFfc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IHNldHRpbmdzOiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9oaXN0b3J5KGFyZWEgPSB0aGlzLmFyZWFfaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBoaXN0b3J5OiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLmhpc3RvcnkpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3ZlcnNpb24odmVyc2lvbikge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSkpO1xyXG4gIH0sXHJcbiAgX3NldF9sb2cobG9nKSB7XHJcbiAgICBpZiAobG9nLmNsZWFyKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogW10gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0X2xvZ3MoKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICBsb2dzLnB1c2gobG9nKTtcclxuICAgICAgaWYgKGxvZ3MubGVuZ3RoID4gX0dMT0JBTF9TRVRUSU5HUy5NQVhfTE9HX0VOVFJJRVMpIGxvZ3Muc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBsb2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2VudHJ5KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgaGlzdG9yeSA9IHN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMoZW50cnkubmFtZSkpIHJldHVybiB0aGlzLl91cGRhdGVfZW50cnkoZW50cnkpO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uc2V0KHsgaGlzdG9yeTogaGlzdG9yeSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF91cGRhdGUoZmllbGQsIHVwZGF0ZXIsIGFyZWEgPSB0aGlzWydhcmVhXycgKyBmaWVsZF0pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2VbZmllbGRdKSB7XHJcbiAgICAgICAgICBzdG9yYWdlW2ZpZWxkXSA9IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0VbZmllbGRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgdXBkYXRlW2ZpZWxkXSA9IHVwZGF0ZXIuY2FsbCh0aGlzLCBzdG9yYWdlW2ZpZWxkXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHVwZGF0ZSkudGhlbigoKSA9PiB1cGRhdGVbZmllbGRdKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9FWFRFTkQsIF9HRVRfQUNUSVZFX1RBQiwgX01PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uNjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL3RtNDgucG5nXCI7IiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=