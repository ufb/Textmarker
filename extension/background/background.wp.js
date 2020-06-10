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

var _webNavigation = __webpack_require__(/*! ./modules/web-navigation */ "./background/modules/web-navigation.js");

var _webNavigation2 = _interopRequireDefault(_webNavigation);

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


    (0, _webNavigation2["default"])();
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
      var _this3 = this;

      var id = infos.menuItemId;
      if (id === 'w') this.emit('lookup:word', infos.selectionText);else if (id === 'sb') browser.sidebarAction.open();else if (id === 'c') {
        browser.permissions.contains({
          permissions: ['clipboardWrite']
        }).then(function (granted) {
          _this3.emit('ctx:' + id, granted, null, {
            tab: tab.id
          });
        });
      } else this.emit('ctx:' + id, null, null, {
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
      'failed:inject-stylesheet': 'onCSSInjectionFailure',
      'missing-permission:webNavigation': 'onMissingWebNavigationPermission'
    }
  },
  log: function log(error, info) {
    var _this = this;

    var log, msg;

    if (error.time) {
      log = [error.time, error.message + ' [' + error.location + ']'];
    } else {
      log = [new Date().getTime(), _logKeys2["default"][error] || error];

      if (info) {
        if (info.report && typeof info.report === 'string') {
          log.push(info.report);
          if (info.attempt) log.push(info.attempt);
          if (info.url) log.push(info.url);
        } else if (typeof info === 'string') {
          log.push(info);
        }
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
  onFailedRestoration: function onFailedRestoration(info) {
    this.log('note_restoration_failure', info);
  },
  onOpenTabFailure: function onOpenTabFailure() {
    this.log('note_url');
  },
  onFailedPBM: function onFailedPBM() {
    this.log('note_pbm');
  },
  onScriptInjectionFailure: function onScriptInjectionFailure(err) {
    this.log('js_injection_failure', err);
  },
  onCSSInjectionFailure: function onCSSInjectionFailure() {
    this.log('css_injection_failure');
  },
  onMissingWebNavigationPermission: function onMissingWebNavigationPermission() {
    this.log('missing_permission_wn');
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


var _MODULE2;

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new _utils._MODULE((_MODULE2 = {
  type: 'background',
  events: {
    ENV: {
      'dom:loaded': 'autoinject',
      'clicked:page-action': 'injectManually',
      'save:entry?': 'onSaveNewRequest',
      'update:entry?': 'onUpdateRequest',
      'name:entry?': 'onNamingRequest',
      'opened:entry': 'tempSaveEntryMetaData',
      'fetch:entries': 'onFetchEntriesRequest',
      'updated:autocs-settings': 'updateInjectionStatus',
      'updated:iframes-settings': 'updateInjectionStatus'
    }
  },
  autoinject: true,
  iframeInjections: true,
  recentlyOpenedEntry: null,
  autoinit: function autoinit() {
    this.updateInjectionStatus();
  },
  updateInjectionStatus: function updateInjectionStatus() {
    var _this = this;

    _storage2["default"].get('settings').then(function (settings) {
      _this.autoinject = !settings || settings.addon.autocs ? true : false;
      _this.iframeInjections = !settings || settings.addon.iframes ? true : false;
    });
  },
  onFetchEntriesRequest: function onFetchEntriesRequest(url, sender) {
    this.collectEntries({
      tabId: sender.tab.id,
      url: url,
      frameId: sender.frameId
    }, true);
  }
}, _defineProperty(_MODULE2, "autoinject", function autoinject(infos) {
  if (!this.iframeInjections && infos.frameId !== 0) return false;
  if (this.autoinject) this.inject(infos);
}), _defineProperty(_MODULE2, "injectManually", function injectManually(tabId, url) {
  var _this2 = this;

  var frameId = !this.iframeInjections ? 0 : null;
  this.injectContentScript({
    tabId: tabId,
    url: url,
    frameId: frameId
  }).then(function () {
    if (browser.webNavigation && browser.webNavigation.getAllFrames && _this2.iframeInjections) {
      browser.webNavigation.getAllFrames({
        tabId: tabId
      }).then(function (frames) {
        return frames.forEach(function (frame) {
          return _this2.collectEntries({
            tabId: tabId,
            url: frame.url,
            frameId: frame.frameId
          });
        });
      });
    } else {
      _this2.collectEntries({
        tabId: tabId,
        url: url,
        frameId: frameId
      });
    }
  });
}), _defineProperty(_MODULE2, "inject", function inject(infos) {
  var _this3 = this;

  this.injectContentScript(infos).then(function () {
    return _this3.collectEntries(infos);
  });
}), _defineProperty(_MODULE2, "injectContentScript", function injectContentScript(infos) {
  var _this4 = this;

  var tabId = infos.tabId,
      url = infos.url,
      frameId = infos.frameId;
  var details = {
    file: '../content/page-injections/injection.wp.js'
  };

  if (frameId === null) {
    details.allFrames = true;
  } else {
    details.frameId = frameId;
  }

  return browser.tabs.executeScript(tabId, details).then(function () {
    return _this4.insertCSS(tabId, frameId);
  })["catch"](function (e) {
    var msg = e.toString();

    if (frameId === 0 && !msg.includes('host permission') && !msg.includes('Message manager disconnected')) {
      _this4.request('injected?', {
        tabId: tabId,
        frameId: frameId || 0
      }).then(function () {
        return _this4.insertCSS(tabId, frameId);
      })["catch"](function () {
        return _this4.emit('failed:inject-content-script', "".concat(msg, "\nURL: ").concat(url));
      });
    }
  });
}), _defineProperty(_MODULE2, "insertCSS", function insertCSS(tabId, frameId) {
  var _this5 = this;

  var details = {
    file: '../content/page-injections/injection.css'
  };

  if (frameId === null) {
    details.allFrames = true;
  } else {
    details.frameId = frameId;
  }

  browser.tabs.insertCSS(tabId, details)["catch"](function (e) {
    var msg = e.toString();

    if (!msg.includes('Missing host permission for the tab') && !msg.includes('Message manager disconnected')) {
      _this5.emit('failed:inject-stylesheet');
    }
  });
}), _defineProperty(_MODULE2, "collectEntries", function collectEntries(infos, hashSensitive) {
  var _this6 = this;

  var tabId = infos.tabId,
      url = infos.url,
      frameId = infos.frameId;

  _storage2["default"].get('history').then(function (history) {
    var matches = _this6.findMatchingEntries(history, url, hashSensitive);

    var entries = _this6.filterMatches(matches, frameId);

    if (entries) {
      _this6.emit('entries:found', {
        entries: entries,
        recentlyOpenedEntry: _this6.recentlyOpenedEntry,
        locked: !!matches.lockedEntries.length
      }, {
        tab: tabId,
        frameId: frameId
      });

      _this6.recentlyOpenedEntry = null;
    }
  });
}), _defineProperty(_MODULE2, "findMatchingEntries", function findMatchingEntries(history, url, hashSensitive) {
  var entries = history.entries;
  var lockedEntries = [];
  var nonLockedEntries = [];
  var entry, pageUrl, entryUrl;

  for (var e in entries) {
    entry = entries[e];

    if (entry.url) {
      pageUrl = hashSensitive || entry.hashSensitive ? url : (0, _utils._HASHLESS)(url);
      entryUrl = hashSensitive || entry.hashSensitive ? entry.url : (0, _utils._HASHLESS)(entry.url);

      if (pageUrl === entryUrl) {
        if (entry.locked) lockedEntries.push(entry);else nonLockedEntries.push(entry);
      }
    }
  }

  return {
    lockedEntries: lockedEntries,
    nonLockedEntries: nonLockedEntries
  };
}), _defineProperty(_MODULE2, "filterMatches", function filterMatches(matches, frameId) {
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
    entries = lockedEntries;
    if (!frameId) this.emit('entry:found', lockedEntries);
  }

  return entries;
}), _defineProperty(_MODULE2, "onNamingRequest", function onNamingRequest(sender, sendResponse) {
  var _this7 = this;

  return browser.windows.getLastFocused().then(function (windowInfo) {
    var priv = windowInfo.incognito;
    if (!priv) sendResponse(!priv);else {
      _storage2["default"].get('privsave').then(function (saveInPriv) {
        if (!saveInPriv) _this7.emit('failed:pbm');else sendResponse(saveInPriv);
      });
    }
  });
}), _defineProperty(_MODULE2, "onSaveNewRequest", function onSaveNewRequest(entry) {
  var _this8 = this;

  return browser.windows.getLastFocused().then(function (windowInfo) {
    if (!windowInfo.incognito) _this8.emit('granted:save-entry', entry);else {
      _storage2["default"].get('privsave').then(function (saveInPriv) {
        if (!saveInPriv) _this8.emit('failed:pbm');else _this8.emit('granted:save-entry', entry);
      });
    }
  });
}), _defineProperty(_MODULE2, "onUpdateRequest", function onUpdateRequest(entry) {
  var _this9 = this;

  return browser.windows.getLastFocused().then(function (windowInfo) {
    if (!windowInfo.incognito) _this9.emit('granted:update-entry', entry);else {
      _storage2["default"].get('privsave').then(function (saveInPriv) {
        if (!saveInPriv) _this9.emit('failed:pbm');else _this9.emit('granted:update-entry', entry);
      });
    }
  });
}), _defineProperty(_MODULE2, "tempSaveEntryMetaData", function tempSaveEntryMetaData(data) {
  this.recentlyOpenedEntry = data;
}), _MODULE2));

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
        'failed:inject-stylesheet': 'onCSSInjectionFailure',
        'missing-permission:webNavigation': 'onMissingWebNavigationPermission'
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
    onFailedRestoration: function onFailedRestoration(info) {
      var msg = browser.i18n.getMessage('note_restoration_failure');
      if (info && info.autoRetry) msg += browser.i18n.getMessage('auto_retry');
      this.notify(function (settings) {
        return settings.misc.failureNote;
      }, msg, 'error');
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
    onScriptInjectionFailure: function onScriptInjectionFailure(err) {
      var msg = browser.i18n.getMessage('js_injection_failure');
      if (err) msg += "\n\n".concat(err, "\n\n");
      this.notify(function (settings) {
        return settings.misc.loadNote;
      }, msg, 'error');
    },
    onCSSInjectionFailure: function onCSSInjectionFailure() {
      this.notify(function (settings) {
        return settings.misc.loadNote;
      }, browser.i18n.getMessage('css_injection_failure'), 'error');
    },
    onMissingWebNavigationPermission: function onMissingWebNavigationPermission() {
      this.notify(function (settings) {
        return settings.misc.vipNote;
      }, browser.i18n.getMessage('missing_permission_wn'), 'error');
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
        'dom:loaded': 'show',
        'updated:autocs-settings': 'update'
      }
    },
    active: false,
    autoinit: function autoinit() {
      var _this = this;

      this.update();
      browser.pageAction.onClicked.addListener(function (tab) {
        _this.emit('clicked:page-action', tab.id, tab.url);

        browser.pageAction.hide(tab.id);
      });
    },
    show: function show(infos) {
      if (this.active) {
        browser.pageAction.show(infos.tabId);
      }
    },
    update: function update() {
      var _this2 = this;

      _storage2["default"].get('settings').then(function (settings) {
        _this2.active = !settings || settings.addon.autocs ? false : true;
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
    setPanel: function setPanel(tabId, tabInfos) {
      this.isOpen().then(function (open) {
        if (open) {
          var url = tabInfos.url || 'blank';
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
      'change:autoRetry-setting': 'toggleAutoRetryOpt',
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
      'sidebar:delete-entry': 'deleteEntries',
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
    }, 'immutopt');
  },
  toggleDropLossesOpt: function toggleDropLossesOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.dropLosses = val;
      return settings;
    }, 'droplossesopt');
  },
  toggleAutoRetryOpt: function toggleAutoRetryOpt(val) {
    this.updateSettings(function (settings) {
      settings.history.autoRetry = val;
      return settings;
    }, 'autoRetryopt');
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
    }, 'misc');
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
        'started:app': 'openInitPage',
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
      troubleshooting: 'content/addon-page/addon-page.html#page=troubleshooting',
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
        browser.tabs.onUpdated.addListener(onUpdated
        /*, { properties: ['status'] }*/
        ); // ESR throws wrong argument type error when using filters
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
    onUpdated: function onUpdated(tabId, changed, tab) {
      if (changed.url) {
        this.emit('changed:url', tabId, changed, tab);
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
      if (loadReason) {
        if (loadReason === 'install') this.openAddonPage('help'); //else if (loadReason === 'update') this.openAddonPage('news');
      }
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
        var noteTypes = 'pbmNote changedNote errorNote successNote vipNote loadNote'.split(' ');

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

        if (!shortcuts.c) {
          shortcuts.c = defaultSettings.shortcuts.c;
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

        if (typeof history.autoRetry !== 'boolean') {
          history.autoRetry = defaultSettings.history.autoRetry;
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

        if (!misc.notefontsize) {
          misc.notefontsize = defaultSettings.misc.notefontsize;
        }

        if (typeof misc.markmethod !== 'string') {
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
  setStorageOnUpgrade: function setStorageOnUpgrade(_, loadReason) {
    var _this = this;

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
      return _this.emit('initialized:storage');
    })["catch"](function (e) {
      _this.emit('initialized:storage');

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

/***/ "./background/modules/web-navigation.js":
/*!**********************************************!*\
  !*** ./background/modules/web-navigation.js ***!
  \**********************************************/
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
        'granted-permission:webNavigation': 'addListener'
      }
    },
    autoinit: function autoinit() {
      var _this = this;

      var permission = {
        permissions: ['webNavigation']
      };
      browser.permissions.contains(permission).then(function (granted) {
        if (granted) {
          _this.addListener();
        } else {
          _this.emit('missing-permission:webNavigation');
        }
      });
    },
    addListener: function addListener() {
      var _this2 = this;

      browser.webNavigation.onDOMContentLoaded.addListener(function (infos) {
        return _this2.emit('dom:loaded', infos);
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

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

new _utils._BGPORT({
  name: 'background',
  type: 'background',
  postponeConnection: true,
  events: {
    ONEOFF: ['started:app', 'toggled:addon', 'toggled:sync', 'updated:settings', 'updated:history', 'updated:history-on-restoration', 'updated:entry-sync', 'updated:entry-name', 'updated:logs', 'updated:ctm-settings', 'updated:misc-settings', 'updated:naming-settings', 'updated:bg-color-settings', 'updated:custom-search-settings', 'updated:saveopt-settings', 'updated:mark-method-settings', 'updated:marker-settings', 'entries:found', 'saved:entry', 'deleted:entry', 'deleted:entries', 'imported:settings', 'imported:history', 'ctx:m', 'ctx:d', 'ctx:b', 'ctx:-b', 'ctx:n', 'ctx:c', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:undo', 'sidebar:redo', 'sidebar:copy', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'sidebar:retry-restoration', 'sidebar:selected-marker', 'opened:sidebar', 'changed:url', 'injected?'],
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
exports._HASHLESS = exports._ERRORTRACKER = exports._BGPORT = exports._STORE = exports._MODULE = exports._GET_ACTIVE_TAB = exports._EXTEND = exports._COPY = undefined;

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
exports._BGPORT = _port._BGPORT;
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
      n: ['shiftKey', false, true],
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
      ignoreHash: true,
      autoRetry: true
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
      notefontsize: 12,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      vipNote: true,
      loadNote: false,
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
      theme: 'tm'
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
  missing_permission_wn: 39,
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  if (!url) return '';
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

var _default = /*#__PURE__*/function () {
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

      if (this.type === 'background') {
        return browser.tabs.sendMessage(args[0].tabId, {
          ev: event,
          wait: true
        }, {
          frameId: args[0].frameId
        });
      } else {
        return browser.runtime.sendMessage({
          ev: event,
          args: args,
          wait: true
        })["catch"](function () {});
      }
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _MODULE = /*#__PURE__*/exports._MODULE = function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  var _super = _createSuper(_MODULE);

  function _MODULE(obj) {
    var _this;

    _classCallCheck(this, _MODULE);

    _this = _super.call(this);

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
exports._BGPORT = exports._PRIVPORT = exports._PORT = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _PORT = /*#__PURE__*/function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  var _super = _createSuper(_PORT);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _super.call(this, obj);
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_this), _this.passMessage));

    _this.registerOneOffEvents();

    return _this;
  }

  _createClass(_PORT, [{
    key: "extend",
    value: function extend(events) {
      this.registerOneOffEvents(events.ONEOFF);
    }
  }, {
    key: "registerOneOffEvents",
    value: function registerOneOffEvents(events) {
      events || (events = this.events.ONEOFF);

      if (events) {
        var _iterator = _createForOfIteratorHelper(events),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var e = _step.value;
            this.on(e, this.proxy(this, this.sendMessage, e));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
              var _iterator2 = _createForOfIteratorHelper(tabs),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _tab = _step2.value;
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
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
            var _iterator3 = _createForOfIteratorHelper(tabs),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _tab2 = _step3.value;
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
      }
    }
  }]);

  return _PORT;
}(_module._MODULE);

var _PRIVPORT = /*#__PURE__*/function (_PORT2) {
  _inherits(_PRIVPORT, _PORT2);

  var _super2 = _createSuper(_PRIVPORT);

  function _PRIVPORT(obj) {
    var _this2;

    _classCallCheck(this, _PRIVPORT);

    _this2 = _super2.call(this, obj);
    _this2.port = null;
    _this2.portListener = null;

    _this2.connect();

    _this2.registerConnectionBasedEvents();

    window.addEventListener('pagehide', function () {
      !_this2.port || _this2.port.onMessage.removeListener(_this2.portListener);
    });
    return _this2;
  }

  _createClass(_PRIVPORT, [{
    key: "registerConnectionBasedEvents",
    value: function registerConnectionBasedEvents() {
      var events = this.events.CONNECTION;

      if (events) {
        var _iterator4 = _createForOfIteratorHelper(events),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var e = _step4.value;
            this.on(e, this.proxy(this, this.postMessage, e));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
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
    key: "connect",
    value: function connect() {
      var port = this.port = this.port || browser.runtime.connect({
        name: "".concat(this.name, "_").concat(this.id)
      });
      var listener = this.portListener = this.proxy(this, this.passMessage);
      port.onMessage.addListener(listener);
    }
  }]);

  return _PRIVPORT;
}(_PORT);

var _BGPORT = /*#__PURE__*/function (_PORT3) {
  _inherits(_BGPORT, _PORT3);

  var _super3 = _createSuper(_BGPORT);

  function _BGPORT(obj) {
    var _this3;

    _classCallCheck(this, _BGPORT);

    _this3 = _super3.call(this, obj);
    _this3.ports = {};

    _this3.registerOnConnectListener();

    _this3.registerConnectionBasedEvents();

    return _this3;
  }

  _createClass(_BGPORT, [{
    key: "registerConnectionBasedEvents",
    value: function registerConnectionBasedEvents() {
      var events = this.events.CONNECTION;

      if (events) {
        var _iterator5 = _createForOfIteratorHelper(events),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var e = _step5.value;
            this.on(e, this.proxy(this, this.postMessage, e));
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "registerOnConnectListener",
    value: function registerOnConnectListener() {
      var _this4 = this;

      browser.runtime.onConnect.addListener(function (port) {
        var ports = _this4.ports;

        var listener = _this4.proxy(_this4, _this4.passMessage);

        ports[port.name] = port;
        port.onMessage.addListener(listener);
        port.onDisconnect.addListener(function () {
          port.onMessage.removeListener(listener);
          delete ports[port.name];
        });
      });
    }
  }, {
    key: "postMessage",
    value: function postMessage(e) {
      var ports = this.ports;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var msg = {
        ev: e,
        args: args
      };

      for (var p in ports) {
        if (ports.hasOwnProperty(p)) {
          ports[p].postMessage(msg);
        }
      }
    }
  }]);

  return _BGPORT;
}(_PORT);

exports._PORT = _PORT;
exports._PRIVPORT = _PRIVPORT;
exports._BGPORT = _BGPORT;

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _STORE = /*#__PURE__*/exports._STORE = function (_MODULE2) {
  _inherits(_STORE, _MODULE2);

  var _super = _createSuper(_STORE);

  function _STORE(obj) {
    var _this;

    _classCallCheck(this, _STORE);

    _this = _super.call(this, obj);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93ZWItbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvd2luZG93cy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9sb2cta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb2ZmMTgucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uMTYucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uMTgucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uMzIucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uMzYucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uNjQucG5nIiwid2VicGFjazovLy8uL2ljb25zL3RtNDgucG5nIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbIl9NT0RVTEUiLCJldmVudHMiLCJFTlYiLCJhY3RpdmUiLCJ2ZXJzaW9uIiwibG9hZFJlYXNvbiIsImF1dG9pbml0IiwiY3VycmVudFZlcnNpb24iLCJicm93c2VyIiwicnVudGltZSIsImdldE1hbmlmZXN0Iiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImRldGFpbHMiLCJfU1RPUkFHRSIsImdldCIsInRoZW4iLCJyZWFzb24iLCJwcmV2VmVyc2lvbiIsInByZXZpb3VzVmVyc2lvbiIsImVtaXQiLCJzdGFydCIsInNldCIsIm1vZGUiLCJhY3RpdmF0ZSIsInRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uIiwic2V0VEJCQWN0aW9uIiwidG9nZ2xlIiwidG9nZ2xlT25JbXBvcnQiLCJvbiIsImJyb3dzZXJBY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImFkZCIsImFkZFRCQkhhbmRsZXIiLCJyZW1vdmVUQkJIYW5kbGVyIiwiZW5hYmxlZCIsInRiYkhhbmRsZXIiLCJzZXRQb3B1cCIsInBvcHVwIiwib25DbGlja2VkIiwicmVtb3ZlTGlzdGVuZXIiLCJpdGVtcyIsIm0iLCJjb250ZXh0cyIsInciLCJkIiwiYiIsIm4iLCJzYiIsImMiLCJjcmVhdGVkIiwiaXRlbSIsImkiLCJpZCIsInRpdGxlIiwiaTE4biIsImdldE1lc3NhZ2UiLCJvbmNsaWNrIiwiaW5mb3MiLCJ0YWIiLCJvbkNsaWNrIiwidXBkYXRlIiwiY3JlYXRlIiwiaW5jbHVkZXMiLCJtZW51cyIsInB1c2giLCJyZW1vdmUiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVtb3ZlQWxsIiwibGVuZ3RoIiwic2hvcnRjdXRzIiwibWVudUl0ZW1JZCIsInNlbGVjdGlvblRleHQiLCJzaWRlYmFyQWN0aW9uIiwib3BlbiIsInBlcm1pc3Npb25zIiwiY29udGFpbnMiLCJncmFudGVkIiwibG9nIiwiZXJyb3IiLCJpbmZvIiwibXNnIiwidGltZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiX0xPR19LRVlTIiwicmVwb3J0IiwiYXR0ZW1wdCIsInVybCIsImNsZWFyIiwib25NaXhlZEVudHJ5VHlwZXMiLCJvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzIiwib25GYWlsZWRSZXN0b3JhdGlvbiIsIm9uT3BlblRhYkZhaWx1cmUiLCJvbkZhaWxlZFBCTSIsIm9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSIsImVyciIsIm9uQ1NTSW5qZWN0aW9uRmFpbHVyZSIsIm9uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uIiwidHlwZSIsImF1dG9pbmplY3QiLCJpZnJhbWVJbmplY3Rpb25zIiwicmVjZW50bHlPcGVuZWRFbnRyeSIsInVwZGF0ZUluamVjdGlvblN0YXR1cyIsInNldHRpbmdzIiwiYWRkb24iLCJhdXRvY3MiLCJpZnJhbWVzIiwib25GZXRjaEVudHJpZXNSZXF1ZXN0Iiwic2VuZGVyIiwiY29sbGVjdEVudHJpZXMiLCJ0YWJJZCIsImZyYW1lSWQiLCJpbmplY3QiLCJpbmplY3RDb250ZW50U2NyaXB0Iiwid2ViTmF2aWdhdGlvbiIsImdldEFsbEZyYW1lcyIsImZyYW1lcyIsImZvckVhY2giLCJmcmFtZSIsImZpbGUiLCJhbGxGcmFtZXMiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImluc2VydENTUyIsImUiLCJ0b1N0cmluZyIsInJlcXVlc3QiLCJoYXNoU2Vuc2l0aXZlIiwiaGlzdG9yeSIsIm1hdGNoZXMiLCJmaW5kTWF0Y2hpbmdFbnRyaWVzIiwiZW50cmllcyIsImZpbHRlck1hdGNoZXMiLCJsb2NrZWQiLCJsb2NrZWRFbnRyaWVzIiwibm9uTG9ja2VkRW50cmllcyIsImVudHJ5IiwicGFnZVVybCIsImVudHJ5VXJsIiwibG9ja2VkRW50cmllc0NvdW50Iiwibm9uTG9ja2VkRW50cmllc0NvdW50IiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJsYXN0Iiwic2VuZFJlc3BvbnNlIiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwid2luZG93SW5mbyIsInByaXYiLCJpbmNvZ25pdG8iLCJzYXZlSW5Qcml2IiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImdldFVSTCIsIm9uU2F2ZWRFbnRyeSIsInNhdmVOb3RlIiwibWlzYyIsInBibU5vdGUiLCJ2aXBOb3RlIiwib25GYWlsZWRJbXBvcnQiLCJlcnJvcjEiLCJlcnJvcjIiLCJlcnJNZXNzYWdlMSIsImVyck1lc3NhZ2UyIiwib25JbXBvcnRFcnJvciIsIm9uSW1wb3J0U3VjY2VzcyIsImZhaWx1cmVOb3RlIiwib25TdWNjZXNzZnVsUmVzdG9yYXRpb24iLCJzdWNjZXNzTm90ZSIsImF1dG9SZXRyeSIsIm9uU2F2ZUVycm9yIiwib25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yIiwib25EZWxldGVFcnJvciIsImVycm9yTm90ZSIsImxvYWROb3RlIiwib25FcnJvciIsInBhZ2VBY3Rpb24iLCJoaWRlIiwic2hvdyIsInNldFBhbmVsIiwidGFiSW5mb3MiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwiQXJyYXkiLCJpc0FycmF5IiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsInNldEFyZWFzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsInN0YXR1cyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlQXV0b1JldHJ5T3B0IiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwiY29ycmVjdE5hbWUiLCJ1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbiIsIml0ZXJhdGlvbiIsInN5bmNlZCIsInJlY2VpdmVkQ29tcGxldGVFbnRyeSIsImZvdW5kIiwiaGFzT3duUHJvcGVydHkiLCJkZWxldGVFbnRyaWVzIiwicG9wIiwidXBkYXRlRW50cnlPblJlc3RvcmF0aW9uIiwiZW50cnlOYW1lIiwicmVzdG9yZWRNYXJrcyIsImxvc3RNYXJrcyIsIm9sZExvc3RNYXJrcyIsInJlc3RvcmVkTWFya3NJRHMiLCJvbGRMb3N0TWFya3NJRHMiLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInBhZ2Vub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJoZWxwIiwiY29udGFjdCIsInRyb3VibGVzaG9vdGluZyIsImxvZ3MiLCJ0YWJFdmVudEhhbmRsZXJzIiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJ0b2dnbGVUYWJFdmVudEhhbmRsZXJzIiwiYWRkVGFiRXZlbnRIYW5kbGVycyIsImJpbmQiLCJyZW1vdmVUYWJFdmVudEhhbmRsZXJzIiwiZXYiLCJjaGFuZ2VkIiwic2VjdXJpdHlXYXJuaW5nIiwic2VsZiIsIm9wZW5BZGRvblBhZ2UiLCJvcGVuSW5pdFBhZ2UiLCJvcGVuU2VhcmNoIiwid29yZCIsImN1c3RvbSIsImRlZmF1bHRTZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJub3RlVHlwZXMiLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwiYXJyb3d1cCIsImFycm93ZG93biIsImNtIiwibm90ZVR5cGUiLCJ0bXVpcG9zIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJub3RlZm9udHNpemUiLCJ0YmJwb3dlciIsInRoZW1lcyIsInVwZGF0ZUhpc3RvcnkiLCJvcmRlciIsImZpeEhpc3RvcnlEYXRlcyIsImxhbmciLCJlbiIsImRlIiwibWVyZ2VIaXN0b3JpZXMiLCJuZXdIaXN0b3J5Iiwib2xkSGlzdG9yeSIsIm9sZEVudHJpZXMiLCJvbGROYW1lcyIsImFjY2VwdGVkRW50cmllcyIsInVybEV4aXN0cyIsIl9lbnRyaWVzIiwiYSIsInNldFN0b3JhZ2VPblVwZ3JhZGUiLCJfIiwiaXNFbXB0eSIsImVtcHR5IiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwZXJtaXNzaW9uIiwib25ET01Db250ZW50TG9hZGVkIiwib3BlbkVudHJ5RGV0YWlsUGFnZSIsInBvcHVwVVJMIiwiZ2V0Q3VycmVudCIsImN1cnJlbnRXaW5kb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJfQkdQT1JUIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsIl9TVE9SRSIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJfc2V0X3N5bmMiLCJtZXRoIiwiX3VwZGF0ZSIsImNvbnN0cnVjdG9yIiwiX2dldF9tb2RlIiwiYXJlYV9zZXR0aW5ncyIsIl9nZXRfcHJpdnNhdmUiLCJfZ2V0X25hbWluZyIsIl9nZXRfdGJicG93ZXIiLCJfZ2V0X21hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsIl9zZXRfc3RvcmFnZSIsIl9zZXRfc2V0dGluZ3MiLCJfc2V0X2hpc3RvcnkiLCJhcmVhX2hpc3RvcnkiLCJfc2V0X3ZlcnNpb24iLCJfc2V0X2xvZyIsIl9nZXRfbG9ncyIsIk1BWF9MT0dfRU5UUklFUyIsInNoaWZ0IiwiX3NldF9lbnRyeSIsIl91cGRhdGVfZW50cnkiLCJjYWxsIiwiX0NPUFkiLCJfRVhURU5EIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsInoiLCJ5IiwicyIsImRvd25sb2FkIiwiY29weSIsImJtaWNvbiIsIm92ZXJ3cml0ZSIsImNoYW5nZWROb3RlIiwicHJvZ3Jlc3NiYXIiLCJtZXRhIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJqc19pbmplY3Rpb25fZmFpbHVyZSIsImNzc19pbmplY3Rpb25fZmFpbHVyZSIsIm1pc3NpbmdfcGVybWlzc2lvbl93biIsImdldEtleUJ5VmFsdWUiLCJzcmMiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZW5hbWUiLCJsaW5lbm8iLCJjb2xubyIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJoIiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJ0b3BpY3MiLCJldmVudCIsImhhbmRsZXIiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm9iaiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJfUE9SVCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwicmVnaXN0ZXJPbmVPZmZFdmVudHMiLCJyZXEiLCJsYXN0QXJnIiwiX1BSSVZQT1JUIiwicG9ydCIsInBvcnRMaXN0ZW5lciIsImNvbm5lY3QiLCJyZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsInBvc3RNZXNzYWdlIiwibGlzdGVuZXIiLCJwb3J0cyIsInJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJwIiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJhcmVhX3BhZ2Vub3RlcyIsInIiLCJzZXRUaW1lb3V0Iiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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RUFBb0MzWixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQTRULE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNoTyxRQUFSLElBQW9CNFAsNEJBQWlCNVAsUUFBekM7QUFBQSxPQUF0RCxDQUFQO0FBQ0Q7OztnQ0FDVztBQUNWLGFBQU9wRyxPQUFPLENBQUNvVSxPQUFSLENBQWdCWCxLQUFoQixDQUFzQmxULEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1osWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM5RSxJQUFuQyxFQUF5QyxPQUFPLEVBQVA7QUFDekMsZUFBTzhFLFlBQVksQ0FBQzlFLElBQXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU85VSxPQUFPLENBQUNvVSxPQUFSLENBQWdCWCxLQUFoQixDQUFzQmxULEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1osWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNoYSxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT0ksT0FBTyxDQUFDb1UsT0FBUixDQUFnQmpHLElBQWhCLENBQXFCNU4sR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFvaUIsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUNoakIsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPZ2EsWUFBWSxDQUFDaGEsT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUJKLGUiLCJmaWxlIjoiYmFja2dyb3VuZC9iYWNrZ3JvdW5kLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYWNrZ3JvdW5kL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9pY29ucy9vbjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjMyLnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjM2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjY0LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL3RtNDgucG5nJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vc3RvcmFnZSdcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2Vycm9yLWxvZ2dpbmcnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2luamVjdGlvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgX1dFQk5BVklHQVRJT04gZnJvbSAnLi9tb2R1bGVzL3dlYi1uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgX05PVElGSUNBVElPTlMgZnJvbSAnLi9tb2R1bGVzL25vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBfVEFCUyBmcm9tICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0IF9XSU5ET1dTIGZyb20gJy4vbW9kdWxlcy93aW5kb3dzJ1xyXG5pbXBvcnQgX1NJREVCQVJTIGZyb20gJy4vbW9kdWxlcy9zaWRlYmFycydcclxuaW1wb3J0IF9OQU1FUiBmcm9tICcuL21vZHVsZXMvbmFtZXInXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0LW1lbnUnXHJcbmltcG9ydCBfUEFHRUFDVElPTiBmcm9tICcuL21vZHVsZXMvcGFnZS1hY3Rpb24nXHJcbi8vaW1wb3J0IF9JREIgZnJvbSAnLi9tb2R1bGVzL2luZGV4ZWRkYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3ZlcnNpb24tbWFuYWdlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvc3RvcmUtbWFuYWdlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlT25JbXBvcnQnLFxyXG4gICAgICAnaW5pdGlhbGl6ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdtaWdyYXRlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ2NoZWNrZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICd0b2dnbGU6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6dGJicG93ZXItc2V0dGluZ3MnOiAnc2V0VEJCQWN0aW9uJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2ZTogdHJ1ZSxcclxuICB2ZXJzaW9uOiAnJyxcclxuICBsb2FkUmVhc29uOiAnJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IHRoaXMudmVyc2lvbiA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICAgIGlmICghdmVyc2lvbiB8fCB2ZXJzaW9uICE9PSBjdXJyZW50VmVyc2lvbikge1xyXG4gICAgICAgICAgY29uc3QgbG9hZFJlYXNvbiA9IHRoaXMubG9hZFJlYXNvbiA9IGRldGFpbHMucmVhc29uO1xyXG4gICAgICAgICAgY29uc3QgcHJldlZlcnNpb24gPSBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbiB8fCAnMic7XHJcbiAgICAgICAgICBpZiAobG9hZFJlYXNvbiAmJiAobG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScgfHwgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobG9hZFJlYXNvbiArICc6YXBwJywgcHJldlZlcnNpb24sIGxvYWRSZWFzb24pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbiA9PT0gY3VycmVudFZlcnNpb24pIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ3ZlcnNpb24nLCB0aGlzLnZlcnNpb24pO1xyXG5cclxuICAgIC8vX0lEQigpO1xyXG4gICAgX1dFQk5BVklHQVRJT04oKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG4gICAgX1NJREVCQVJTKCk7XHJcbiAgICBfUEFHRUFDVElPTigpO1xyXG5cclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5hY3RpdmF0ZSh0cnVlKSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzdGFydGVkOmFwcCcsIHRoaXMudmVyc2lvbiwgdGhpcy5sb2FkUmVhc29uKSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShhY3RpdmF0ZSkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBhY3RpdmF0ZTtcclxuICAgIHRoaXMudG9nZ2xlQnJvd3NlckFjdGlvbkljb24oYWN0aXZlKTtcclxuICAgIHRoaXMuc2V0VEJCQWN0aW9uKCk7XHJcbiAgfSxcclxuICB0b2dnbGUoKSB7XHJcbiAgICBsZXQgbW9kZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgIHRoaXMuYWN0aXZhdGUobW9kZSk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6YWRkb24nLCBtb2RlKTtcclxuICB9LFxyXG4gIHRvZ2dsZU9uSW1wb3J0KCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQnJvd3NlckFjdGlvbkljb24ob24pIHtcclxuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgcGF0aDogb24gPyB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vbjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vbjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vbjMyLnBuZydcclxuICAgICAgfSA6IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29mZjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vZmYxOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb2ZmMzIucG5nJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldFRCQkFjdGlvbihhZGQpIHtcclxuICAgIGlmICh0eXBlb2YgYWRkID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgaWYgKGFkZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3RiYnBvd2VyJykudGhlbihlbmFibGVkID0+IHtcclxuICAgICAgICBpZiAoZW5hYmxlZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZGRUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgdGJiSGFuZGxlciA9IHRoaXMudGJiSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJycgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGJiSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmVUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKHRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJ2NvbnRlbnQvdGJiLW1lbnUvdGJiLW1lbnUuaHRtbCcgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQucmVtb3ZlTGlzdGVuZXIodGhpcy50YmJIYW5kbGVyKTtcclxuICAgICAgdGhpcy50YmJIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnOiAndXBkYXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIG06IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgdzogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICBkOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIGI6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgJy1iJzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBuOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIHNiOiB7IGNvbnRleHRzOiBbJ2FsbCcsICd0YWInXSB9LFxyXG4gICAgICBjOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBbXSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3R4XycgKyAoaSA9PT0gJy1iJyA/ICdkYicgOiBpKSk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKGluZm9zLCB0YWIpID0+IHRoaXMub25DbGljayhpbmZvcywgdGFiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoaWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5jcmVhdGUodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlKGlkKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQuc3BsaWNlKHRoaXMuY3JlYXRlZC5pbmRleE9mKGlkKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZShvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVBbGwoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2hvcnRjdXRzJykudGhlbihzaG9ydGN1dHMgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgaWYgKHNob3J0Y3V0c1tpXVsyXSkgdGhpcy5jcmVhdGUoaSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGljayhpbmZvcywgdGFiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gaW5mb3MubWVudUl0ZW1JZDtcclxuXHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIGlmIChpZCA9PT0gJ2MnKSB7XHJcbiAgICAgICAgYnJvd3Nlci5wZXJtaXNzaW9ucy5jb250YWlucyh7IHBlcm1pc3Npb25zOiBbJ2NsaXBib2FyZFdyaXRlJ10gfSkudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgZ3JhbnRlZCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgJ21pc3NpbmctcGVybWlzc2lvbjp3ZWJOYXZpZ2F0aW9uJzogJ29uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgaW5mbykge1xyXG4gICAgbGV0IGxvZywgbXNnO1xyXG4gICAgaWYgKGVycm9yLnRpbWUpIHtcclxuICAgICAgbG9nID0gW2Vycm9yLnRpbWUsIGVycm9yLm1lc3NhZ2UgKyAnIFsnICsgZXJyb3IubG9jYXRpb24gKyAnXSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nID0gWyhuZXcgRGF0ZSgpLmdldFRpbWUoKSksIF9MT0dfS0VZU1tlcnJvcl0gfHwgZXJyb3JdO1xyXG4gICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgIGlmIChpbmZvLnJlcG9ydCAmJiB0eXBlb2YgaW5mby5yZXBvcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBsb2cucHVzaChpbmZvLnJlcG9ydCk7XHJcbiAgICAgICAgICBpZiAoaW5mby5hdHRlbXB0KSBsb2cucHVzaChpbmZvLmF0dGVtcHQpO1xyXG4gICAgICAgICAgaWYgKGluZm8udXJsKSBsb2cucHVzaChpbmZvLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpbmZvID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgbG9nLnB1c2goaW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihpbmZvKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJywgaW5mbyk7XHJcbiAgfSxcclxuICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfdXJsJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFBCTSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3BibScpO1xyXG4gIH0sXHJcbiAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKGVycikge1xyXG4gICAgdGhpcy5sb2coJ2pzX2luamVjdGlvbl9mYWlsdXJlJywgZXJyKTtcclxuICB9LFxyXG4gIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKTtcclxuICB9LFxyXG4gIG9uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uKCkge1xyXG4gICAgdGhpcy5sb2coJ21pc3NpbmdfcGVybWlzc2lvbl93bicpO1xyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZG9tOmxvYWRlZCc6ICdhdXRvaW5qZWN0JyxcclxuICAgICAgJ2NsaWNrZWQ6cGFnZS1hY3Rpb24nOiAnaW5qZWN0TWFudWFsbHknLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nOiAnb25TYXZlTmV3UmVxdWVzdCcsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ29uVXBkYXRlUmVxdWVzdCcsXHJcbiAgICAgICduYW1lOmVudHJ5Pyc6ICdvbk5hbWluZ1JlcXVlc3QnLFxyXG4gICAgICAnb3BlbmVkOmVudHJ5JzogJ3RlbXBTYXZlRW50cnlNZXRhRGF0YScsXHJcbiAgICAgICdmZXRjaDplbnRyaWVzJzogJ29uRmV0Y2hFbnRyaWVzUmVxdWVzdCcsXHJcbiAgICAgICd1cGRhdGVkOmF1dG9jcy1zZXR0aW5ncyc6ICd1cGRhdGVJbmplY3Rpb25TdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDppZnJhbWVzLXNldHRpbmdzJzogJ3VwZGF0ZUluamVjdGlvblN0YXR1cydcclxuICAgIH1cclxuICB9LFxyXG4gIGF1dG9pbmplY3Q6IHRydWUsXHJcbiAgaWZyYW1lSW5qZWN0aW9uczogdHJ1ZSxcclxuICByZWNlbnRseU9wZW5lZEVudHJ5OiBudWxsLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlSW5qZWN0aW9uU3RhdHVzKCk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlSW5qZWN0aW9uU3RhdHVzKCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICB0aGlzLmF1dG9pbmplY3QgPSAhc2V0dGluZ3MgfHwgc2V0dGluZ3MuYWRkb24uYXV0b2NzID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmlmcmFtZUluamVjdGlvbnMgPSAhc2V0dGluZ3MgfHwgc2V0dGluZ3MuYWRkb24uaWZyYW1lcyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uRmV0Y2hFbnRyaWVzUmVxdWVzdCh1cmwsIHNlbmRlcikge1xyXG4gICAgdGhpcy5jb2xsZWN0RW50cmllcyh7IHRhYklkOiBzZW5kZXIudGFiLmlkLCB1cmwsIGZyYW1lSWQ6IHNlbmRlci5mcmFtZUlkIH0sIHRydWUpO1xyXG4gIH0sXHJcblxyXG4gIGF1dG9pbmplY3QoaW5mb3MpIHtcclxuICAgIGlmICghdGhpcy5pZnJhbWVJbmplY3Rpb25zICYmIGluZm9zLmZyYW1lSWQgIT09IDApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICh0aGlzLmF1dG9pbmplY3QpIHRoaXMuaW5qZWN0KGluZm9zKTtcclxuICB9LFxyXG5cclxuICBpbmplY3RNYW51YWxseSh0YWJJZCwgdXJsKSB7XHJcbiAgICBjb25zdCBmcmFtZUlkID0gIXRoaXMuaWZyYW1lSW5qZWN0aW9ucyA/IDAgOiBudWxsO1xyXG4gICAgdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHsgdGFiSWQsIHVybCwgZnJhbWVJZCB9KS50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKGJyb3dzZXIud2ViTmF2aWdhdGlvbiAmJiBicm93c2VyLndlYk5hdmlnYXRpb24uZ2V0QWxsRnJhbWVzICYmIHRoaXMuaWZyYW1lSW5qZWN0aW9ucykge1xyXG4gICAgICAgIGJyb3dzZXIud2ViTmF2aWdhdGlvbi5nZXRBbGxGcmFtZXMoeyB0YWJJZCB9KVxyXG4gICAgICAgICAgLnRoZW4oZnJhbWVzID0+IGZyYW1lcy5mb3JFYWNoKGZyYW1lID0+IHRoaXMuY29sbGVjdEVudHJpZXMoeyB0YWJJZCwgdXJsOiBmcmFtZS51cmwsIGZyYW1lSWQ6IGZyYW1lLmZyYW1lSWQgfSkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3RFbnRyaWVzKHsgdGFiSWQsIHVybCwgZnJhbWVJZCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0KGluZm9zKSB7XHJcbiAgICB0aGlzLmluamVjdENvbnRlbnRTY3JpcHQoaW5mb3MpLnRoZW4oKCkgPT4gdGhpcy5jb2xsZWN0RW50cmllcyhpbmZvcykpO1xyXG4gIH0sXHJcblxyXG4gIGluamVjdENvbnRlbnRTY3JpcHQoaW5mb3MpIHtcclxuICAgIGNvbnN0IHsgdGFiSWQsIHVybCwgZnJhbWVJZCB9ID0gaW5mb3M7XHJcbiAgICBjb25zdCBkZXRhaWxzID0geyBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzJyB9O1xyXG4gICAgaWYgKGZyYW1lSWQgPT09IG51bGwpIHtcclxuICAgICAgZGV0YWlscy5hbGxGcmFtZXMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGV0YWlscy5mcmFtZUlkID0gZnJhbWVJZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIGRldGFpbHMpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuaW5zZXJ0Q1NTKHRhYklkLCBmcmFtZUlkKSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGZyYW1lSWQgPT09IDAgJiYgIW1zZy5pbmNsdWRlcygnaG9zdCBwZXJtaXNzaW9uJykgJiYgIW1zZy5pbmNsdWRlcygnTWVzc2FnZSBtYW5hZ2VyIGRpc2Nvbm5lY3RlZCcpKSB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoJ2luamVjdGVkPycsIHsgdGFiSWQsIGZyYW1lSWQ6IGZyYW1lSWQgfHwgMCB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmluc2VydENTUyh0YWJJZCwgZnJhbWVJZCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnLCBgJHttc2d9XFxuVVJMOiAke3VybH1gKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbnNlcnRDU1ModGFiSWQsIGZyYW1lSWQpIHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSB7IGZpbGU6ICcuLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24uY3NzJyB9O1xyXG4gICAgaWYgKGZyYW1lSWQgPT09IG51bGwpIHtcclxuICAgICAgZGV0YWlscy5hbGxGcmFtZXMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGV0YWlscy5mcmFtZUlkID0gZnJhbWVJZDtcclxuICAgIH1cclxuXHJcbiAgICBicm93c2VyLnRhYnMuaW5zZXJ0Q1NTKHRhYklkLCBkZXRhaWxzKVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpICYmICFtc2cuaW5jbHVkZXMoJ01lc3NhZ2UgbWFuYWdlciBkaXNjb25uZWN0ZWQnKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGNvbGxlY3RFbnRyaWVzKGluZm9zLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICBjb25zdCB7IHRhYklkLCB1cmwsIGZyYW1lSWQgfSA9IGluZm9zO1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5maWx0ZXJNYXRjaGVzKG1hdGNoZXMsIGZyYW1lSWQpO1xyXG5cclxuICAgICAgaWYgKGVudHJpZXMpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2VudHJpZXM6Zm91bmQnLCB7XHJcbiAgICAgICAgICBlbnRyaWVzLFxyXG4gICAgICAgICAgcmVjZW50bHlPcGVuZWRFbnRyeTogdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5LFxyXG4gICAgICAgICAgbG9ja2VkOiAhIW1hdGNoZXMubG9ja2VkRW50cmllcy5sZW5ndGhcclxuICAgICAgICB9LCB7IHRhYjogdGFiSWQsIGZyYW1lSWQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGZpbmRNYXRjaGluZ0VudHJpZXMoaGlzdG9yeSwgdXJsLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgbGV0IGVudHJ5LCBwYWdlVXJsLCBlbnRyeVVybDtcclxuXHJcbiAgICBmb3IgKGxldCBlIGluIGVudHJpZXMpIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2VdO1xyXG4gICAgICBpZiAoZW50cnkudXJsKSB7XHJcbiAgICAgICAgcGFnZVVybCA9IGhhc2hTZW5zaXRpdmUgfHwgZW50cnkuaGFzaFNlbnNpdGl2ZSA/IHVybCA6IF9IQVNITEVTUyh1cmwpO1xyXG4gICAgICAgIGVudHJ5VXJsID0gaGFzaFNlbnNpdGl2ZSB8fCBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gZW50cnkudXJsIDogX0hBU0hMRVNTKGVudHJ5LnVybCk7XHJcblxyXG4gICAgICAgIGlmIChwYWdlVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgaWYgKGVudHJ5LmxvY2tlZCkgbG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgIGVsc2Ugbm9uTG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IGxvY2tlZEVudHJpZXMsIG5vbkxvY2tlZEVudHJpZXMgfTtcclxuICB9LFxyXG5cclxuICBmaWx0ZXJNYXRjaGVzKG1hdGNoZXMsIGZyYW1lSWQpIHtcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLmxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5ub25Mb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllc0NvdW50ID0gbG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzQ291bnQgPSBub25Mb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGxldCBlbnRyaWVzO1xyXG5cclxuICAgIGlmIChsb2NrZWRFbnRyaWVzQ291bnQgJiYgbm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnd2FybjptaXhlZC1lbnRyeS10eXBlcycpO1xyXG4gICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICAvLyBpZiBtdWx0aXBsZSBlbnRyaWVzIHdpdGggc2FtZSB1cmwgZm91bmQ6IHRha2UgbGF0ZXN0XHJcbiAgICAgIGVudHJpZXMgPSBbbm9uTG9ja2VkRW50cmllcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IChwcmV2Lmxhc3QgPiBjdXJyZW50Lmxhc3QpID8gcHJldiA6IGN1cnJlbnQpXTtcclxuICAgICAgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCA+IDEpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmcmFtZUlkKSB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kJywgZW50cmllc1swXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIGVudHJpZXMgPSBsb2NrZWRFbnRyaWVzO1xyXG4gICAgICBpZiAoIWZyYW1lSWQpIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBsb2NrZWRFbnRyaWVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG4gIH0sXHJcblxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbXBvcnQnOiAnb25GYWlsZWRJbXBvcnQnLFxyXG4gICAgICAgICdlcnJvcjppbXBvcnQnOiAnb25JbXBvcnRFcnJvcicsXHJcbiAgICAgICAgJ2ltcG9ydGVkOnN0b3JhZ2UnOiAnb25JbXBvcnRTdWNjZXNzJyxcclxuICAgICAgICAnZXJyb3InOiAnb25FcnJvcicsXHJcbiAgICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICAgJ21pc3NpbmctcGVybWlzc2lvbjp3ZWJOYXZpZ2F0aW9uJzogJ29uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeShjb25kaXRpb24sIG1lc3NhZ2UsIHR5cGUpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZXh0bWFya2VyOiAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodHlwZSksXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2ljb25zL3RtNDgucG5nJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZWRFbnRyeSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlZF9lbnRyeScpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFBCTSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5wYm1Ob3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3BibScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3VybCcpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRJbXBvcnQoZXJyb3IxLCBlcnJvcjIpIHtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjEpO1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMiA9IGVycm9yMiA/ICdcXG5cXG4nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IyKSA6ICcnO1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X2ZhaWx1cmUnLCBlcnJNZXNzYWdlMSArIGVyck1lc3NhZ2UyKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0RXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF93YXJuaW5nJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRTdWNjZXNzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnN1Y2Nlc3NOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRSZXN0b3JhdGlvbihpbmZvKSB7XHJcbiAgICAgIGxldCBtc2cgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJyk7XHJcbiAgICAgIGlmIChpbmZvICYmIGluZm8uYXV0b1JldHJ5KSBtc2cgKz0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2F1dG9fcmV0cnknKTtcclxuXHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgbXNnLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yKGVycm9yLCBuYW1lKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IsIG5hbWUpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKGVycikge1xyXG4gICAgICBsZXQgbXNnID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2pzX2luamVjdGlvbl9mYWlsdXJlJyk7XHJcbiAgICAgIGlmIChlcnIpIG1zZyArPSBgXFxuXFxuJHtlcnJ9XFxuXFxuYDtcclxuXHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MubG9hZE5vdGUsXHJcbiAgICAgICAgbXNnLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmxvYWROb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ21pc3NpbmdfcGVybWlzc2lvbl93bicpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZG9tOmxvYWRlZCc6ICdzaG93JyxcclxuICAgICAgICAndXBkYXRlZDphdXRvY3Mtc2V0dGluZ3MnOiAndXBkYXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YWIgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwYWdlLWFjdGlvbicsIHRhYi5pZCwgdGFiLnVybCk7XHJcbiAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLmhpZGUodGFiLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3coaW5mb3MpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLnNob3coaW5mb3MudGFiSWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gIXNldHRpbmdzIHx8IHNldHRpbmdzLmFkZG9uLmF1dG9jcyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0dFVF9BQ1RJVkVfVEFCLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnYWN0aXZhdGVkOnRhYic6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2NoYW5nZWQ6dXJsJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnZW50cnk6Zm91bmQnOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICd1cGRhdGVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzonc2VuZEVudHJ5JyxcclxuICAgICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcyc6ICdzZW5kT3JkZXJlZE1hcmtzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IHt9LFxyXG5cclxuICAgIHNldFBhbmVsKHRhYklkLCB0YWJJbmZvcykge1xyXG4gICAgICB0aGlzLmlzT3BlbigpLnRoZW4ob3BlbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IHRhYkluZm9zLnVybCB8fCAnYmxhbmsnO1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9IEFycmF5LmlzQXJyYXkoZW50cnkpID8gIWVudHJ5WzBdLmhhc2hTZW5zaXRpdmUgOiAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9SZXRyeS1zZXR0aW5nJzogJ3RvZ2dsZUF1dG9SZXRyeU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJzogJ3RvZ2dsZUhhc2hPcHQnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZyc6ICd0b2dnbGVQcml2U2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnOiAndG9nZ2xlTm90ZU9wdCcsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICd0b2dnbGVRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnOiAndG9nZ2xlTm90aWZpY2F0aW9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZyc6ICd0b2dnbGVUQkJQb3dlclNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZyc6ICdjaGFuZ2VTb3J0T3B0JyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnOiAnY2hhbmdlVmlld09wdCcsXHJcbiAgICAgICdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnOiAndG9nZ2xlQXV0b2NzT3B0JyxcclxuICAgICAgJ2NoYW5nZTppZnJhbWUtc2V0dGluZyc6ICd0b2dnbGVJRnJhbWVPcHQnLFxyXG5cclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJzogJ3JlbW92ZUN1c3RvbU1hcmtlcicsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcic6ICdhZGRDdXN0b21NYXJrZXInLFxyXG5cclxuICAgICAgJ25hbWVkOmVudHJ5JzogJ3NhdmVFbnRyeScsXHJcbiAgICAgICdyZW5hbWVkOmVudHJ5JzogJ3NhdmVOZXdOYW1lJyxcclxuICAgICAgJ2NvcnJlY3QtbmFtZTplbnRyeSc6ICdjb3JyZWN0TmFtZScsXHJcbiAgICAgICdncmFudGVkOnVwZGF0ZS1lbnRyeSc6ICd1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcyc6ICdkZWxldGVFbnRyaWVzJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWVudHJ5JzogJ2RlbGV0ZUVudHJpZXMnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAndXBkYXRlRW50cnlPblJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnOiAnY2xlYW5FbnRyaWVzJyxcclxuICAgICAgJ3N5bmM6ZW50cnknOiAnc3luY0VudHJ5JyxcclxuICAgICAgJ3RhZzplbnRyaWVzJzogJ3RhZ0VudHJpZXMnLFxyXG4gICAgICAncmVtb3ZlOnRhZyc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAnYWRkOnRhZyc6ICdhZGRUYWcnLFxyXG5cclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInOiAnY2hhbmdlU0JTZXR0aW5ncycsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnOiAnY2hhbmdlVGhlbWVTZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZSc6ICd1cGRhdGVQYWdlTm90ZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVPbkNoYW5nZWRTeW5jOiBmYWxzZSxcclxuXHJcbiAgLy8gQURET04gTUVUSE9EU1xyXG4gIHNhdmVBY3RpdmF0aW9uU3RhdGUoYWN0aXZlKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hY3RpdmUgPSBhY3RpdmU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gU1lOQyBNRVRIT0RTXHJcbiAgdG9nZ2xlU3luYyhmaWVsZCwgdmFsKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3N5bmMnLCBmdW5jdGlvbihzeW5jKSB7XHJcbiAgICAgIHN5bmNbZmllbGRdID0gdmFsO1xyXG4gICAgICB0aGlzLnNldEFyZWFzKHN5bmMpO1xyXG4gICAgICByZXR1cm4gc3luYztcclxuICAgIH0sICdsb2NhbCcpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgc3luYyA9PiB7XHJcbiAgICAgICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgICAgIHJldHVybiBzeW5jO1xyXG4gICAgICAgIH0sICdzeW5jJylcclxuXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfdG9nZ2xlX3N5bmMnKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZmFpbGVkOnRvZ2dsZS1zeW5jJywgZmllbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd0b2dnbGVkOnN5bmMgdG9nZ2xlZDpzeW5jLScgKyBmaWVsZCwgZmllbGQsIHZhbCkpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNFVFRJTkdTIE1FVEhPRFNcclxuICB1cGRhdGVTZXR0aW5ncyh1cGRhdGVyLCBzZXR0aW5nLCBlcnJvcikge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHVwZGF0ZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDonICsgc2V0dGluZyArICctc2V0dGluZ3MnKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHsgaWYgKGVycm9yKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpOyB9KTtcclxuICB9LFxyXG4gIGFkZEN1c3RvbU1hcmtlcihrZXksIHN0eWxlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XSA9ICB7IHN0eWxlIH07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9hZGRfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHJlbW92ZUN1c3RvbU1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgZGVsZXRlIHNldHRpbmdzLm1hcmtlcnNba2V5XTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFya2VyJyxcclxuICAgICAgJ2Vycm9yX3JlbW92ZV9tYXJrZXInXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU3R5bGUoa2V5LCBzdHlsZSkge1xyXG4gICAgaWYgKCFrZXkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1hcmtlcnNba2V5XS5zdHlsZSA9IHN0eWxlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgICdlcnJvcl9zYXZlX3N0eWxlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUJnQ29sb3Ioa2V5LCBjb2xvcikge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSBzZXR0aW5ncy5tYXJrZXJzW2tleV07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIpIHtcclxuICAgICAgICAgIGxldCBzcGxpdCA9IG1hcmtlci5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsIHN0eWxlO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzcGxpdFtsXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBtYXJrZXIuc3R5bGUucmVwbGFjZSgvYmFja2dyb3VuZC1jb2xvcjojLns2fS8sICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBjb2xvcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgICB9LFxyXG4gICAgICAnYmctY29sb3InLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VBdXRvTm90ZVNldHRpbmcoa2V5LCBhdXRvbm90ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uYXV0b25vdGUgPSBhdXRvbm90ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b25vdGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV90b2dnbGVfYXV0b25vdGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWFya01ldGhvZChtZXRob2QpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID0gbWV0aG9kOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrLW1ldGhvZCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX21hcmtfbWV0aG9kJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNob3J0Y3V0U2V0dGluZyhrZXksIHN0YXR1cykge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsxXSA9IHN0YXR1czsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2hvcnRjdXQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNob3J0Y3V0U2V0dGluZyhrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNob3J0Y3V0c1trZXldWzBdID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNvcnRPcHQodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc29ydCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VWaWV3T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkudmlldyA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd2aWV3J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUN1c3RvbVNlYXJjaCh2YWx1ZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzYy5jdXN0b21TZWFyY2ggPSB2YWx1ZXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2N1c3RvbS1zZWFyY2gnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2VhcmNoJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZUNvdW50UGVyUGFnZSh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnBwID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2NvdW50LXBlci1wYWdlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUN0bVNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVsyXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdG0nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9jdG0nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9zYXZlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmltbXV0ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdpbW11dG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVEcm9wTG9zc2VzT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2Ryb3Bsb3NzZXNvcHQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQXV0b1JldHJ5T3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LmF1dG9SZXRyeSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b1JldHJ5b3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUhhc2hPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaGFzaG9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVQcml2U2F2ZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2ID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdwcml2c2F2ZW9wdCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX3ByaXYnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTmFtaW5nT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lm5hbWluZyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbmFtaW5nJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbmFtaW5nJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25vdGVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3dpdGNoUXVpY2tidXR0b25PcHQocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnlbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3F1aWNrYnV0dG9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfZG93bmxvYWQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90aWZpY2F0aW9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3RpZmljYXRpb24nLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ub3RpZnknXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlTWlzY1NldHRpbmcocHJvcCwgdmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2NbcHJvcF0gPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21pc2MnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVEJCUG93ZXJTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICd0YmJwb3dlcicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2JtaWNvbidcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVBdXRvY3NPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnYXV0b2NzJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfYXV0b2NzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUlGcmFtZU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uaWZyYW1lcyA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaWZyYW1lcycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2lmcmFtZXMnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlU0JTZXR0aW5ncyh0YWIsIHVuZm9sZGVkKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50YWJzW3RhYl0udW5mb2xkZWQgPSB1bmZvbGRlZDsgcmV0dXJuIHNldHRpbmdzOyB9KTtcclxuICB9LFxyXG4gIGNoYW5nZVRoZW1lU2V0dGluZ3ModGhlbWUpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLnNiLnRoZW1lID0gdGhlbWU7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSElTVE9SWSBNRVRIT0RTXHJcbiAgY2xlYW5FbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IGkgPSBuYW1lcy5sZW5ndGgsIG5hbWU7XHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllc1tuYW1lXSkgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QubGVuZ3RoID0gMDtcclxuICAgICAgICBlbHNlIG5hbWVzX2xvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoYXJlYSA9PT0gJ2xvY2FsJykgeyB0aGlzLmVtaXQoJ2NsZWFuZWQ6ZW50cmllcycpOyB9fSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2NsZWFuX2hpc3RvcnknKSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5jbGVhbkVudHJpZXMobmFtZXNfbG9jYWwsICdsb2NhbCcpOyB9fSk7XHJcbiAgfSxcclxuICBzYXZlRW50cnkoZW50cnkpIHtcclxuICAgIGVudHJ5Lmxvc3QgPSBbXTtcclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCdzYXZlZDplbnRyeScsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5JywgJ2Vycm9yX3NhdmVfZW50cnknKSk7XHJcbiAgfSxcclxuICBzYXZlTmV3TmFtZShvbGROYW1lLCBuZXdOYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV0pO1xyXG4gICAgICBlbnRyeS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdID0gZW50cnk7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS1uYW1lJywgaGlzdG9yeS5lbnRyaWVzW25ld05hbWVdLCBvbGROYW1lKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSk7XHJcbiAgfSxcclxuICBjb3JyZWN0TmFtZShuYW1lLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLm5hbWUgPSBuYW1lO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblBhZ2VBY3Rpb24oZW50cnksIGFyZWEsIGl0ZXJhdGlvbiA9IDApIHtcclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIGl0ZXJhdGlvbisrO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgY29uc3QgcmVjZWl2ZWRDb21wbGV0ZUVudHJ5ID0gISFlbnRyeS51cmw7XHJcbiAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBpZiAocmVjZWl2ZWRDb21wbGV0ZUVudHJ5KSB7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCB8fCBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkuZW50cmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGVudHJ5LnN5bmNlZDtcclxuICAgICAgICAgIGZvciAobGV0IGUgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5Lmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdW2VdID0gZW50cnlbZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6dXBkYXRlLWVudHJ5JywgJ2Vycm9yX3VwZGF0ZV9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmICghZm91bmQgJiYgaXRlcmF0aW9uIDwgMikgeyB0aGlzLnVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBlbnRyeS5zeW5jZWQgPyAnbG9jYWwnIDogJ3N5bmMnLCBpdGVyYXRpb24pOyB9fSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktb24tc2F2ZScsIGVudHJ5KSk7XHJcbiAgfSxcclxuICBkZWxldGVFbnRyaWVzKG5hbWVzLCBhcmVhKSB7XHJcbiAgICBpZiAoIW5hbWVzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGFyZWEgPSB0eXBlb2YgYXJlYSA9PT0gJ3N0cmluZycgPyBhcmVhIDogJ3N5bmMnO1xyXG5cclxuICAgIGxldCBuYW1lc19sb2NhbCA9IFtdO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgbGV0IG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZTtcclxuXHJcbiAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGhpc3RvcnkuZW50cmllcyAmJiBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB1cmwgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0udXJsIHx8ICcnO1xyXG4gICAgICAgICAgaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5oYXNoU2Vuc2l0aXZlIHx8ICcnO1xyXG5cclxuICAgICAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cnknLCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6ZGVsZXRlLWVudHJpZXMnLCAnZXJyb3JfZGVsX2VudHJ5JykpXHJcbiAgICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdzeW5jJyAmJiBuYW1lc19sb2NhbC5sZW5ndGgpIHsgdGhpcy5kZWxldGVFbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnZGVsZXRlZDplbnRyaWVzJykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPblJlc3RvcmF0aW9uKGVudHJ5TmFtZSwgcmVzdG9yZWRNYXJrcywgbG9zdE1hcmtzLCBhcmVhKSB7XHJcbiAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXMgPT09IHRydWUpIHtcclxuICAgICAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IG9sZExvc3RNYXJrcyA9IGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgICAgICBjb25zdCByZXN0b3JlZE1hcmtzSURzID0gW107XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3NJRHMgPSBbXTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5tYXJrcyA9IHJlc3RvcmVkTWFya3M7XHJcblxyXG4gICAgICAgICAgcmVzdG9yZWRNYXJrcy5mb3JFYWNoKG1hcmsgPT4gcmVzdG9yZWRNYXJrc0lEcy5wdXNoKG1hcmsuaWQpKTtcclxuXHJcbiAgICAgICAgICBsZXQgbCA9IG9sZExvc3RNYXJrcy5sZW5ndGgsIGlkO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWQgPSBvbGRMb3N0TWFya3NbbF0uaWQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN0b3JlZE1hcmtzSURzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb2xkTG9zdE1hcmtzSURzLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbG9zdE1hcmtzLmZvckVhY2gobWFyayA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb2xkTG9zdE1hcmtzSURzLmluY2x1ZGVzKG1hcmsuaWQpKSBvbGRMb3N0TWFya3MucHVzaChtYXJrKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeU5hbWVdLmxvc3QgPSBvbGRMb3N0TWFya3M7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgYXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3luY0VudHJ5KG5hbWUsIHZhbCkge1xyXG4gICAgY29uc3QgYXJlYV8xID0gdmFsID8gJ2xvY2FsJyA6ICdzeW5jJztcclxuICAgIGNvbnN0IGFyZWFfMiA9IHZhbCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgbGV0IGVudHJ5O1xyXG5cclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBlbnRyeSA9IF9DT1BZKGhpc3RvcnkuZW50cmllc1tuYW1lXSk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IHZhbDtcclxuICAgICAgZGVsZXRlIGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhXzEpXHJcblxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWFfMilcclxuXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktc3luYycsIGVudHJ5KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c3luYy1lbnRyeScsIG5hbWUpKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICB0YWdFbnRyaWVzKG5hbWVzLCB0YWcpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgICBuYW1lcy5zeW5jLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgJ3N5bmMnKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgICAgIG5hbWVzLmxvY2FsLmZvckVhY2gobmFtZSA9PiB0aGlzLmFkZFRhZ1RvRW50cnkoZW50cmllc1tuYW1lXSwgdGFnKSk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCAnbG9jYWwnKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3Qgc3RvcmVkRW50cnkgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcpO1xyXG4gICAgICBpZiAoc3RvcmVkRW50cnkudGFnKSB7XHJcbiAgICAgICAgc3RvcmVkRW50cnkudGFnID0gc3RvcmVkRW50cnkudGFnXHJcbiAgICAgICAgICAucmVwbGFjZShyeCwgJyAnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL15cXHN8XFxzJC8sICcnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcc3syLH0vLCAnICcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgICAgLnRoZW4oaGlzdG9yeSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgaGlzdG9yeS5lbnRyaWVzW25hbWVdKSk7XHJcbiAgfSxcclxuICBhZGRUYWcodGFnLCBlbnRyeSkge1xyXG4gICAgY29uc3QgYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFRhZ1RvRW50cnkoaGlzdG9yeS5lbnRyaWVzW25hbWVdLCB0YWcpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpO1xyXG4gIH0sXHJcbiAgYWRkVGFnVG9FbnRyeShlbnRyeSwgdGFnKSB7XHJcbiAgICBpZiAoIXRhZykgZW50cnkudGFnID0gJyc7XHJcbiAgICBlbHNlIGlmICghZW50cnkudGFnKSBlbnRyeS50YWcgPSB0YWc7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKCdeJyt0YWcrJyR8XicrdGFnKydcXFxcc3xcXFxccycrdGFnKydcXFxcc3xcXFxccycrdGFnKyckJywgJ2cnKTtcclxuICAgICAgaWYgKGVudHJ5LnRhZy5zZWFyY2gocngpID09PSAtMSkge1xyXG4gICAgICAgIGVudHJ5LnRhZyArPSAnICcgKyB0YWc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXRhZ3MnLCBlbnRyeSk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUEFHRSBOT1RFIE1FVEhPRFNcclxuICB1cGRhdGVQYWdlTm90ZXModXJsLCBub3Rlcykge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdwYWdlbm90ZXMnLCBwYWdlbm90ZXMgPT4ge1xyXG4gICAgICBwYWdlbm90ZXNbdXJsXSA9IG5vdGVzO1xyXG4gICAgICByZXR1cm4gcGFnZW5vdGVzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVnaXN0ZXJTdG9yYWdlQ2hhbmdlZEhhbmRsZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5vblN0b3JhZ2VDaGFuZ2VkKSk7XHJcbiAgfSxcclxuICBvblN0b3JhZ2VDaGFuZ2VkKGNoYW5nZWRJdGVtKSB7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0uc2V0dGluZ3MpIHRoaXMuZW1pdCgndXBkYXRlZDpzZXR0aW5ncycpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLmhpc3RvcnkpIHRoaXMuZW1pdCgndXBkYXRlZDpoaXN0b3J5Jyk7XHJcbiAgICBpZiAoY2hhbmdlZEl0ZW0ucGFnZW5vdGVzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6cGFnZW5vdGVzJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3RvZ2dsZVRhYkV2ZW50SGFuZGxlcnMnLFxyXG4gICAgICAgICdzdGFydGVkOmFwcCc6ICdvcGVuSW5pdFBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJzogJ29wZW5BZGRvblBhZ2UnLFxyXG4gICAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKGFtKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnbG9va3VwOndvcmQnOiAnb3BlblNlYXJjaCcsXHJcbiAgICAgICAgJ29wZW46ZW50cmllcyc6ICdvcGVuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXJsczoge1xyXG4gICAgICBuZXdzOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ld3MnLFxyXG4gICAgICBzZXR0aW5nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1zZXR0aW5ncycsXHJcbiAgICAgIGhpc3Rvcnk6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9aGlzdG9yeScsXHJcbiAgICAgIGluZm86ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bmV3JyxcclxuICAgICAgaGVscDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1tYW51YWwnLFxyXG4gICAgICBjb250YWN0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWNvbnRhY3QnLFxyXG4gICAgICB0cm91Ymxlc2hvb3Rpbmc6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9dHJvdWJsZXNob290aW5nJyxcclxuICAgICAgbG9nczogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1sb2dzJyxcclxuICAgICAgZXhwb3J0OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWV4cG9ydCcsXHJcbiAgICAgIHN5bmM6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c3luYydcclxuICAgIH0sXHJcbiAgICB0YWJFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgIG9uQWN0aXZhdGVkOiBudWxsLFxyXG4gICAgICBvblVwZGF0ZWQ6IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMobW9kZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uQWN0aXZhdGVkID0gdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uQWN0aXZhdGVkID0gdGhpcy5vbkFjdGl2YXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihvbkFjdGl2YXRlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy50YWJFdmVudEhhbmRsZXJzLm9uVXBkYXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQgPSB0aGlzLm9uVXBkYXRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIob25VcGRhdGVkLyosIHsgcHJvcGVydGllczogWydzdGF0dXMnXSB9Ki8pOyAvLyBFU1IgdGhyb3dzIHdyb25nIGFyZ3VtZW50IHR5cGUgZXJyb3Igd2hlbiB1c2luZyBmaWx0ZXJzXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWJFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICBbJ29uQWN0aXZhdGVkJywgJ29uVXBkYXRlZCddLmZvckVhY2goZXYgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnNbZXZdLnJlbW92ZUxpc3RlbmVyKHRoaXMudGFiRXZlbnRIYW5kbGVyc1tldl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFiRXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRhYkV2ZW50SGFuZGxlcnMob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZFRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZVRhYkV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH0sXHJcbiAgICBvbkFjdGl2YXRlZCh0YWIpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhY3RpdmF0ZWQ6dGFiJywgdGFiLnRhYklkLCAodGFiLnVybCB8fCAnJykpO1xyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlZCh0YWJJZCwgY2hhbmdlZCwgdGFiKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VkLnVybCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDp1cmwnLCB0YWJJZCwgY2hhbmdlZCwgdGFiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuKHVybHMsIG5hbWVzKSB7XHJcbiAgICAgIHVybHMgPSB0eXBlb2YgdXJscyA9PT0gJ3N0cmluZycgPyBbdXJsc10gOiB1cmxzO1xyXG4gICAgICBuYW1lcyA9IHR5cGVvZiBuYW1lcyA9PT0gJ3N0cmluZycgPyBbbmFtZXNdIDogbmFtZXM7XHJcbiAgICAgIGxldCBsID0gdXJscy5sZW5ndGgsXHJcbiAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSBmYWxzZSxcclxuICAgICAgICAgIHVybDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIChmdW5jdGlvbihzZWxmLCBsKSB7XHJcbiAgICAgICAgICB1cmwgPSB1cmxzW2xdO1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogdXJsc1tsXSB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghc2VjdXJpdHlXYXJuaW5nKSBzZWxmLmVtaXQoJ2ZhaWxlZDpvcGVuLXRhYicpO1xyXG4gICAgICAgICAgICAgIHNlY3VyaXR5V2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobmFtZXMpIHNlbGYuZW1pdCgnb3BlbmVkOmVudHJ5JywgeyB1cmw6IHVybCwgbmFtZTogbmFtZXNbbF0gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pKHRoaXMsIGwpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3BlbkFkZG9uUGFnZShpZCkge1xyXG4gICAgICB0aGlzLm9wZW4odGhpcy51cmxzW2lkXSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbkluaXRQYWdlKHZlcnNpb24sIGxvYWRSZWFzb24pIHtcclxuICAgICAgaWYgKGxvYWRSZWFzb24pIHtcclxuICAgICAgICBpZiAobG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnKSB0aGlzLm9wZW5BZGRvblBhZ2UoJ2hlbHAnKTtcclxuICAgICAgICAvL2Vsc2UgaWYgKGxvYWRSZWFzb24gPT09ICd1cGRhdGUnKSB0aGlzLm9wZW5BZGRvblBhZ2UoJ25ld3MnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5TZWFyY2god29yZCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IGN1c3RvbSA9IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoLCB1cmw7XHJcbiAgICAgICAgaWYgKGN1c3RvbSkgdXJsID0gJ2h0dHBzOi8vJyArIGN1c3RvbVswXSArIHdvcmQgKyBjdXN0b21bMV07XHJcbiAgICAgICAgZWxzZSB1cmwgPSAnaHR0cHM6Ly8nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyArIHdvcmQ7XHJcbiAgICAgICAgdGhpcy5vcGVuKHVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4vLi4vLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZTphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdpbnN0YWxsOmFwcCc6ICdzZXRTdG9yYWdlT25VcGdyYWRlJyxcclxuICAgICAgJ2NoZWNrOnN0b3JhZ2UnOiAnY2hlY2tTdG9yYWdlT25TdGFydCcsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZSc6ICdpbXBvcnRTdG9yYWdlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHNldHRpbmdzLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgbWlzYyA9IHNldHRpbmdzLm1pc2M7XHJcbiAgICAgICAgY29uc3Qgbm90ZVR5cGVzID0gJ3BibU5vdGUgY2hhbmdlZE5vdGUgZXJyb3JOb3RlIHN1Y2Nlc3NOb3RlIHZpcE5vdGUgbG9hZE5vdGUnLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLm4pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5uID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5uO1xyXG4gICAgICAgICAgbWlzYy5ub3RlaWNvbiA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgICAgICAgbWlzYy5ub3Rlb25jbGljayA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5hcnJvd3VwKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3d1cCA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuYXJyb3d1cDtcclxuICAgICAgICAgIHNob3J0Y3V0cy5hcnJvd2Rvd24gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93ZG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuZFswXSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmRbMF0gPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLnNiKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuc2IgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLnNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5jbSkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmNtID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5jbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuYykge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmMgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcmtlcnMubS5zdHlsZSkge1xyXG4gICAgICAgICAgbGV0IHN0eWxlO1xyXG4gICAgICAgICAgZm9yIChsZXQgbSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gbWFya2Vyc1ttXTtcclxuICAgICAgICAgICAgbWFya2Vyc1ttXSA9IHsgc3R5bGUgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGlzdG9yeS5zb3J0ZWQpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc29ydGVkID0gZGVmYXVsdFNldHRpbmdzLmhpc3Rvcnkuc29ydGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWhpc3Rvcnkudmlldykge1xyXG4gICAgICAgICAgaGlzdG9yeS52aWV3ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkudmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LnNhdmVJblByaXYgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5zYXZlSW5Qcml2ID0gZGVmYXVsdFNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmltbXV0ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaW1tdXQgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5Lmlnbm9yZUhhc2ggIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5pZ25vcmVIYXNoID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaWdub3JlSGFzaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmRyb3BMb3NzZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5kcm9wTG9zc2VzID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuZHJvcExvc3NlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LmF1dG9SZXRyeSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmF1dG9SZXRyeSA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmF1dG9SZXRyeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vdGVUeXBlcy5mb3JFYWNoKG5vdGVUeXBlID0+IHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgbWlzY1tub3RlVHlwZV0gIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICBtaXNjW25vdGVUeXBlXSA9IGRlZmF1bHRTZXR0aW5ncy5taXNjW25vdGVUeXBlXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIW1pc2MudG11aXBvcykge1xyXG4gICAgICAgICAgbWlzYy50bXVpcG9zID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudG11aXBvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLm5vdGV0cmFuc3AgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy5ub3RldHJhbnNwID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLm5vdGVwbGFpbnZpZXcgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgbWlzYy5ub3RlcGxhaW52aWV3ID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZXBsYWludmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtaXNjLm5vdGVmb250c2l6ZSkge1xyXG4gICAgICAgICAgbWlzYy5ub3RlZm9udHNpemUgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlZm9udHNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5tYXJrbWV0aG9kICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgbWlzYy5tYXJrbWV0aG9kID0gZGVmYXVsdFNldHRpbmdzLm1pc2MubWFya21ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaXNjLnRiYnBvd2VyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2MudGJicG93ZXIgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy50YmJwb3dlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2IpIHtcclxuICAgICAgICAgIHNldHRpbmdzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzLnNiLnRoZW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50YWJzLnRoZW1lcyA9IGRlZmF1bHRTZXR0aW5ncy5zYi50YWJzLnRoZW1lcztcclxuICAgICAgICAgIHNldHRpbmdzLnNiLnRoZW1lID0gZGVmYXVsdFNldHRpbmdzLnNiLnRoZW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3MuYWRkb24uYXV0b2NzID0gZGVmYXVsdFNldHRpbmdzLmFkZG9uLmF1dG9jcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLmFkZG9uLmlmcmFtZXMgPSBkZWZhdWx0U2V0dGluZ3MuYWRkb24uaWZyYW1lcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQnKTtcclxuICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gIH0sXHJcbiAgdXBkYXRlSGlzdG9yeShoaXN0b3J5KSB7XHJcbiAgICBkZWxldGUgaGlzdG9yeS5vcmRlcjtcclxuXHJcbiAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgZW50cnk7XHJcblxyXG4gICAgaWYgKCFsKSByZXR1cm4gaGlzdG9yeTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGVudHJ5ID0gdGhpcy5maXhIaXN0b3J5RGF0ZXMoZW50cmllc1tuYW1lc1tsXV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB0eXBlb2YgZW50cnkuc3luY2VkID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoaXN0b3J5O1xyXG4gIH0sXHJcbiAgZml4SGlzdG9yeURhdGVzKGVudHJ5KSB7XHJcbiAgICBjb25zdCBsYW5nID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5maXJzdCAhPT0gJ251bWJlcicpIGVudHJ5LmZpcnN0ID0gbmV3IERhdGUoKGVudHJ5LmZpcnN0W2xhbmddIHx8IGVudHJ5LmZpcnN0LmVuIHx8IGVudHJ5LmZpcnN0LmRlIHx8IGVudHJ5LmZpcnN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICBpZiAodHlwZW9mIGVudHJ5Lmxhc3QgIT09ICdudW1iZXInKSBlbnRyeS5sYXN0ID0gbmV3IERhdGUoKGVudHJ5Lmxhc3RbbGFuZ10gfHwgZW50cnkubGFzdC5lbiB8fCBlbnRyeS5sYXN0LmRlIHx8IGVudHJ5Lmxhc3QpLnJlcGxhY2UoL1xcLi9nLCcgJykpLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9LFxyXG4gIG1lcmdlSGlzdG9yaWVzKG5ld0hpc3RvcnksIGFyZWEpIHtcclxuICAgIHJldHVybiBfU1RPUkFHRS5nZXQoJ2hpc3RvcnknKS50aGVuKG9sZEhpc3RvcnkgPT4ge1xyXG5cclxuICAgICAgbGV0IGVudHJpZXMgPSBuZXdIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgb2xkRW50cmllcyA9IG9sZEhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIG9sZE5hbWVzID0gT2JqZWN0LmtleXMob2xkRW50cmllcyksXHJcbiAgICAgICAgICBhY2NlcHRlZEVudHJpZXMgPSB7fSxcclxuICAgICAgICAgIG5hbWUsIGVudHJ5LCB1cmwsIHVybEV4aXN0cywgZTtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIHVybEV4aXN0cyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIW9sZE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICB1cmwgPSBlbnRyeS51cmw7XHJcblxyXG4gICAgICAgICAgZm9yIChlIGluIG9sZEVudHJpZXMpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEVudHJpZXNbZV0udXJsID09PSB1cmwpIHtcclxuICAgICAgICAgICAgICB1cmxFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXVybEV4aXN0cykge1xyXG4gICAgICAgICAgICBlbnRyeS5zeW5jZWQgPSBhcmVhID09PSAnc3luYyc7XHJcbiAgICAgICAgICAgIGFjY2VwdGVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBhIGluIGFjY2VwdGVkRW50cmllcykge1xyXG4gICAgICAgICAgX2VudHJpZXNbYV0gPSBhY2NlcHRlZEVudHJpZXNbYV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICB9LCBhcmVhKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldFN0b3JhZ2VPblVwZ3JhZGUoXywgbG9hZFJlYXNvbikge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnbG9jYWwnKS50aGVuKGVtcHR5ID0+IHtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gIT09ICdpbnN0YWxsJykgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ3N5bmMnKSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpKVxyXG4gICAgLy8udGhlbigoKSA9PiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQ6c3RvcmFnZScpKVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnKTtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbicsIGUudG9TdHJpbmcoKSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNoZWNrU3RvcmFnZU9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5pc0VtcHR5KCdzeW5jJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnc3luYycpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIF9TVE9SQUdFLnNldCgnc3RvcmFnZScsICdsb2NhbCcpO1xyXG4gICAgfSkpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKVxyXG4gICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnY2hlY2tlZDpzdG9yYWdlJykpO1xyXG4gIH0sXHJcbiAgaW1wb3J0U3RvcmFnZShpbXBvcnRlZFN0b3JhZ2UsIGFyZWEpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IGltcG9ydGVkU3RvcmFnZS5zZXR0aW5ncyxcclxuICAgICAgICBoaXN0b3J5ID0gaW1wb3J0ZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgaWYgKCFoaXN0b3J5ICYmICFzZXR0aW5ncykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9lbXB0eScpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICghaGlzdG9yeSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGlmICghc3VjY2VzcykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkudGhlbihzdWNjZXNzX3MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbXBvcnRIaXN0b3J5KGhpc3RvcnksIGFyZWEpLnRoZW4oc3VjY2Vzc19oID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzX3MpIHtcclxuICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9zZXR0aW5ncycsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoc3VjY2Vzc19zID09PSAnb3V0ZGF0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2Vycm9yOmltcG9ydCBpbXBvcnRlZDpoaXN0b3J5JywgJ2Vycm9yX2ltcG9ydF9vdXRkYXRlZCcpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NfaCkgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6c2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdpbXBvcnRlZDpzdG9yYWdlIGltcG9ydGVkOnNldHRpbmdzIGltcG9ydGVkOmhpc3RvcnknKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbXBvcnRTZXR0aW5ncyhzZXR0aW5ncywgYXJlYSkge1xyXG4gICAgaWYgKCFzZXR0aW5ncy5zaG9ydGN1dHMpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ291dGRhdGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCBzZXR0aW5ncyA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSwgYXJlYSlcclxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcclxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gIH0sXHJcbiAgaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXJnZUhpc3Rvcmllcyh0aGlzLnVwZGF0ZUhpc3RvcnkoaGlzdG9yeSwgdHJ1ZSksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2dyYW50ZWQtcGVybWlzc2lvbjp3ZWJOYXZpZ2F0aW9uJzogJ2FkZExpc3RlbmVyJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb24gPSB7IHBlcm1pc3Npb25zOiBbJ3dlYk5hdmlnYXRpb24nXSB9O1xyXG5cclxuICAgICAgYnJvd3Nlci5wZXJtaXNzaW9ucy5jb250YWlucyhwZXJtaXNzaW9uKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnbWlzc2luZy1wZXJtaXNzaW9uOndlYk5hdmlnYXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFkZExpc3RlbmVyKCkge1xyXG4gICAgICBicm93c2VyLndlYk5hdmlnYXRpb24ub25ET01Db250ZW50TG9hZGVkLmFkZExpc3RlbmVyKGluZm9zID0+IHRoaXMuZW1pdCgnZG9tOmxvYWRlZCcsIGluZm9zKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd2aWV3OmVudHJ5JzogJ29wZW5FbnRyeURldGFpbFBhZ2UnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3BlbkVudHJ5RGV0YWlsUGFnZShuYW1lKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwVVJMID0gYnJvd3Nlci5ydW50aW1lLmdldFVSTCgnY29udGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5odG1sJyk7XHJcblxyXG4gICAgICBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgpLnRoZW4oY3VycmVudFdpbmRvdyA9PiB7XHJcblxyXG4gICAgICAgIGJyb3dzZXIud2luZG93cy5jcmVhdGUoe1xyXG4gICAgICAgICAgdXJsOiBwb3B1cFVSTCArICcjJyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcclxuICAgICAgICAgIHR5cGU6ICdwYW5lbCcsXHJcbiAgICAgICAgICBoZWlnaHQ6IGN1cnJlbnRXaW5kb3cuaGVpZ2h0IC0gMjIsXHJcbiAgICAgICAgICB3aWR0aDogTWF0aC5taW4oY3VycmVudFdpbmRvdy53aWR0aCwgOTgwKSxcclxuICAgICAgICAgIGluY29nbml0bzogY3VycmVudFdpbmRvdy5pbmNvZ25pdG9cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0JHUE9SVCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5uZXcgX0JHUE9SVCh7XHJcbiAgbmFtZTogJ2JhY2tncm91bmQnLFxyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBwb3N0cG9uZUNvbm5lY3Rpb246IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeS1vbi1yZXN0b3JhdGlvbicsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJyxcclxuICAgICAgJ3VwZGF0ZWQ6bG9ncycsXHJcbiAgICAgICd1cGRhdGVkOmN0bS1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpzYXZlb3B0LXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptYXJrZXItc2V0dGluZ3MnLFxyXG4gICAgICAnZW50cmllczpmb3VuZCcsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cmllcycsXHJcbiAgICAgICdpbXBvcnRlZDpzZXR0aW5ncycsXHJcbiAgICAgICdpbXBvcnRlZDpoaXN0b3J5JyxcclxuICAgICAgJ2N0eDptJyxcclxuICAgICAgJ2N0eDpkJyxcclxuICAgICAgJ2N0eDpiJyxcclxuICAgICAgJ2N0eDotYicsXHJcbiAgICAgICdjdHg6bicsXHJcbiAgICAgICdjdHg6YycsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ2NoYW5nZWQ6dXJsJyxcclxuICAgICAgJ2luamVjdGVkPydcclxuICAgIF0sXHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3RlcycsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1NUT1JFfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLnJlbW92ZSgnbG9ncycpO1xyXG5cclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgc3luYyA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2Uuc3luYyA/IGxvY2FsU3RvcmFnZS5zeW5jIDogX0RFRkFVTFRfU1RPUkFHRS5zeW5jO1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2V0X3N5bmMoc3luYyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXQoZmllbGQsIHZhbCkge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19zZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcbiAgICByZXR1cm4gdGhpc1snX3NldF8nICsgZmllbGRdKHZhbCk7XHJcbiAgfSxcclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICBpc0VtcHR5KGFyZWEgPSAnc3luYycpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICghT2JqZWN0LmtleXMoc3RvcmFnZSkubGVuZ3RoICYmIHN0b3JhZ2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcml2c2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zYXZlSW5Qcml2O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdGJicG93ZXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuXHJcbiAgX3NldF9zdG9yYWdlKGFyZWEgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0X3NldHRpbmdzKGFyZWEpLnRoZW4oKCkgPT4gdGhpcy5fc2V0X2hpc3RvcnkoYXJlYSkpO1xyXG4gIH0sXHJcbiAgX3NldF9zeW5jKHN5bmMpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgc3luYzogc3luYyB9KVxyXG4gICAgICAudGhlbigoKSA9PiBicm93c2VyLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeW5jOiBzeW5jIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldEFyZWFzKHN5bmMpKTtcclxuICB9LFxyXG4gIF9zZXRfc2V0dGluZ3MoYXJlYSA9IHRoaXMuYXJlYV9zZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHsgc2V0dGluZ3M6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2hpc3RvcnkoYXJlYSA9IHRoaXMuYXJlYV9oaXN0b3J5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5oaXN0b3J5KSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IGhpc3Rvcnk6IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0UuaGlzdG9yeSkgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfdmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgdmVyc2lvbjogdmVyc2lvbiB9KSk7XHJcbiAgfSxcclxuICBfc2V0X2xvZyhsb2cpIHtcclxuICAgIGlmIChsb2cuY2xlYXIpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBbXSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9nZXRfbG9ncygpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgIGxvZ3MucHVzaChsb2cpO1xyXG4gICAgICBpZiAobG9ncy5sZW5ndGggPiBfR0xPQkFMX1NFVFRJTkdTLk1BWF9MT0dfRU5UUklFUykgbG9ncy5zaGlmdCgpO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IGxvZ3M6IGxvZ3MgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9zZXRfZW50cnkoZW50cnkpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX2hpc3RvcnldLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGxldCBoaXN0b3J5ID0gc3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmNsdWRlcyhlbnRyeS5uYW1lKSkgcmV0dXJuIHRoaXMuX3VwZGF0ZV9lbnRyeShlbnRyeSk7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5zZXQoeyBoaXN0b3J5OiBoaXN0b3J5IH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3VwZGF0ZShmaWVsZCwgdXBkYXRlciwgYXJlYSA9IHRoaXNbJ2FyZWFfJyArIGZpZWxkXSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmICghc3RvcmFnZVtmaWVsZF0pIHtcclxuICAgICAgICAgIHN0b3JhZ2VbZmllbGRdID0gX0NPUFkoX0RFRkFVTFRfU1RPUkFHRVtmaWVsZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cGRhdGUgPSB7fTtcclxuICAgICAgICB1cGRhdGVbZmllbGRdID0gdXBkYXRlci5jYWxsKHRoaXMsIHN0b3JhZ2VbZmllbGRdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQodXBkYXRlKS50aGVuKCgpID0+IHVwZGF0ZVtmaWVsZF0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9CR1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfRVhURU5ELCBfR0VUX0FDVElWRV9UQUIsIF9NT0RVTEUsIF9TVE9SRSwgX0JHUE9SVCwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZSxcclxuICAgICAgYXV0b1JldHJ5OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG5vdGVmb250c2l6ZTogMTIsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGxvYWROb3RlOiBmYWxzZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAndG0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuICBqc19pbmplY3Rpb25fZmFpbHVyZTogMzcsXHJcbiAgY3NzX2luamVjdGlvbl9mYWlsdXJlOiAzOCxcclxuICBtaXNzaW5nX3Blcm1pc3Npb25fd246IDM5LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vZmYxNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uMzYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29uNjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL3RtNDgucG5nXCI7IiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiAnJztcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGFyZ3NbMF0udGFiSWQsIHsgZXY6IGV2ZW50LCB3YWl0OiB0cnVlIH0sIHsgZnJhbWVJZDogYXJnc1swXS5mcmFtZUlkIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgdGhpcy5yZWdpc3Rlck9uZU9mZkV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyT25lT2ZmRXZlbnRzKGV2ZW50cy5PTkVPRkYpO1xyXG4gIH1cclxuICByZWdpc3Rlck9uZU9mZkV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyB8fCAoIGV2ZW50cyA9IHRoaXMuZXZlbnRzLk9ORU9GRik7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBfUFJJVlBPUlQgZXh0ZW5kcyBfUE9SVCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAhdGhpcy5wb3J0IHx8IHRoaXMucG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIodGhpcy5wb3J0TGlzdGVuZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHMuQ09OTkVDVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgICAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IGAke3RoaXMubmFtZX1fJHt0aGlzLmlkfWAgfSk7XHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLnBvcnRMaXN0ZW5lciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSk7XHJcbiAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBfQkdQT1JUIGV4dGVuZHMgX1BPUlQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMucG9ydHMgPSB7fTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50cy5DT05ORUNUSU9OO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlck9uQ29ubmVjdExpc3RlbmVyKCkge1xyXG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcnRzID0gdGhpcy5wb3J0cztcclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpO1xyXG4gICAgICAgICAgICBwb3J0c1twb3J0Lm5hbWVdID0gcG9ydDtcclxuICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3J0Lm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgcG9ydHNbcG9ydC5uYW1lXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgcG9ydHMgPSB0aGlzLnBvcnRzO1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwIGluIHBvcnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgIHBvcnRzW3BdLnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9QT1JULCBfUFJJVlBPUlQsIF9CR1BPUlQgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==