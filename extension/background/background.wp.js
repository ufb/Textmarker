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
    }); // _STORAGE.get('version').then(version => {
    //   if (version && version === currentVersion) this.emit('check:storage');
    // });
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


var _ref;

var _storage = __webpack_require__(/*! ./../storage */ "./background/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _utils = __webpack_require__(/*! ./../utils */ "./background/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new _utils._MODULE((_ref = {
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
}, _defineProperty(_ref, "autoinject", function autoinject(infos) {
  if (!this.iframeInjections && infos.frameId !== 0) return false;
  if (this.autoinject) this.inject(infos);
}), _defineProperty(_ref, "injectManually", function injectManually(tabId, url) {
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
}), _defineProperty(_ref, "inject", function inject(infos) {
  var _this3 = this;

  this.injectContentScript(infos).then(function () {
    return _this3.collectEntries(infos);
  });
}), _defineProperty(_ref, "injectContentScript", function injectContentScript(infos) {
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
}), _defineProperty(_ref, "insertCSS", function insertCSS(tabId, frameId) {
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
}), _defineProperty(_ref, "collectEntries", function collectEntries(infos, hashSensitive) {
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
}), _defineProperty(_ref, "findMatchingEntries", function findMatchingEntries(history, url, hashSensitive) {
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
}), _defineProperty(_ref, "filterMatches", function filterMatches(matches, frameId) {
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
}), _defineProperty(_ref, "onNamingRequest", function onNamingRequest(sender, sendResponse) {
  var _this7 = this;

  return browser.windows.getLastFocused().then(function (windowInfo) {
    var priv = windowInfo.incognito;
    if (!priv) sendResponse(!priv);else {
      _storage2["default"].get('privsave').then(function (saveInPriv) {
        if (!saveInPriv) _this7.emit('failed:pbm');else sendResponse(saveInPriv);
      });
    }
  });
}), _defineProperty(_ref, "onSaveNewRequest", function onSaveNewRequest(entry) {
  var _this8 = this;

  return browser.windows.getLastFocused().then(function (windowInfo) {
    if (!windowInfo.incognito) _this8.emit('granted:save-entry', entry);else {
      _storage2["default"].get('privsave').then(function (saveInPriv) {
        if (!saveInPriv) _this8.emit('failed:pbm');else _this8.emit('granted:save-entry', entry);
      });
    }
  });
}), _defineProperty(_ref, "onUpdateRequest", function onUpdateRequest(entry) {
  var _this9 = this;

  return browser.windows.getLastFocused().then(function (windowInfo) {
    if (!windowInfo.incognito) _this9.emit('granted:update-entry', entry);else {
      _storage2["default"].get('privsave').then(function (saveInPriv) {
        if (!saveInPriv) _this9.emit('failed:pbm');else _this9.emit('granted:update-entry', entry);
      });
    }
  });
}), _defineProperty(_ref, "tempSaveEntryMetaData", function tempSaveEntryMetaData(data) {
  this.recentlyOpenedEntry = data;
}), _ref));

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
exports._BGPORT = exports._PRIVPORT = exports._PORT = undefined;

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
function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
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
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = tabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _tab = _step2.value;
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
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
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _tab2 = _step3.value;
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
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
        }
      }
    }
  }]);

  return _PORT;
}(_module._MODULE);

var _PRIVPORT =
/*#__PURE__*/
function (_PORT2) {
  _inherits(_PRIVPORT, _PORT2);

  function _PRIVPORT(obj) {
    var _this2;

    _classCallCheck(this, _PRIVPORT);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_PRIVPORT).call(this, obj));
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
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = events[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var e = _step4.value;
            this.on(e, this.proxy(this, this.postMessage, e));
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

var _BGPORT =
/*#__PURE__*/
function (_PORT3) {
  _inherits(_BGPORT, _PORT3);

  function _BGPORT(obj) {
    var _this3;

    _classCallCheck(this, _BGPORT);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_BGPORT).call(this, obj));
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
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = events[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var e = _step5.value;
            this.on(e, this.proxy(this, this.postMessage, e));
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvY29udGV4dC1tZW51LmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9pbmplY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvbmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9tb2R1bGVzL3BhZ2UtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy9zaWRlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvc3RvcmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvdmVyc2lvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvbW9kdWxlcy93ZWItbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL21vZHVsZXMvd2luZG93cy5qcyIsIndlYnBhY2s6Ly8vLi9iYWNrZ3JvdW5kL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYmFja2dyb3VuZC9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2JhY2tncm91bmQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9sb2cta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9pY29ucy9vZmYxNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvb2ZmMTgucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uMTYucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uMTgucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uMzIucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uMzYucG5nIiwid2VicGFjazovLy8uL2ljb25zL29uNjQucG5nIiwid2VicGFjazovLy8uL2ljb25zL3RtNDgucG5nIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbIl9NT0RVTEUiLCJldmVudHMiLCJFTlYiLCJhY3RpdmUiLCJ2ZXJzaW9uIiwibG9hZFJlYXNvbiIsImF1dG9pbml0IiwiY3VycmVudFZlcnNpb24iLCJicm93c2VyIiwicnVudGltZSIsImdldE1hbmlmZXN0Iiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImRldGFpbHMiLCJfU1RPUkFHRSIsImdldCIsInRoZW4iLCJyZWFzb24iLCJwcmV2VmVyc2lvbiIsInByZXZpb3VzVmVyc2lvbiIsImVtaXQiLCJzdGFydCIsInNldCIsIm1vZGUiLCJhY3RpdmF0ZSIsInRvZ2dsZUJyb3dzZXJBY3Rpb25JY29uIiwic2V0VEJCQWN0aW9uIiwidG9nZ2xlIiwidG9nZ2xlT25JbXBvcnQiLCJvbiIsImJyb3dzZXJBY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImFkZCIsImFkZFRCQkhhbmRsZXIiLCJyZW1vdmVUQkJIYW5kbGVyIiwiZW5hYmxlZCIsInRiYkhhbmRsZXIiLCJzZXRQb3B1cCIsInBvcHVwIiwib25DbGlja2VkIiwicmVtb3ZlTGlzdGVuZXIiLCJpdGVtcyIsIm0iLCJjb250ZXh0cyIsInciLCJkIiwiYiIsIm4iLCJzYiIsImMiLCJjcmVhdGVkIiwiaXRlbSIsImkiLCJpZCIsInRpdGxlIiwiaTE4biIsImdldE1lc3NhZ2UiLCJvbmNsaWNrIiwiaW5mb3MiLCJ0YWIiLCJvbkNsaWNrIiwidXBkYXRlIiwiY3JlYXRlIiwiaW5jbHVkZXMiLCJtZW51cyIsInB1c2giLCJyZW1vdmUiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVtb3ZlQWxsIiwibGVuZ3RoIiwic2hvcnRjdXRzIiwibWVudUl0ZW1JZCIsInNlbGVjdGlvblRleHQiLCJzaWRlYmFyQWN0aW9uIiwib3BlbiIsInBlcm1pc3Npb25zIiwiY29udGFpbnMiLCJncmFudGVkIiwibG9nIiwiZXJyb3IiLCJpbmZvIiwibXNnIiwidGltZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwiX0xPR19LRVlTIiwicmVwb3J0IiwiYXR0ZW1wdCIsInVybCIsImNsZWFyIiwib25NaXhlZEVudHJ5VHlwZXMiLCJvbk11bHRpcGxlVW5sb2NrZWRFbnRyaWVzIiwib25GYWlsZWRSZXN0b3JhdGlvbiIsIm9uT3BlblRhYkZhaWx1cmUiLCJvbkZhaWxlZFBCTSIsIm9uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZSIsImVyciIsIm9uQ1NTSW5qZWN0aW9uRmFpbHVyZSIsIm9uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uIiwidHlwZSIsImF1dG9pbmplY3QiLCJpZnJhbWVJbmplY3Rpb25zIiwicmVjZW50bHlPcGVuZWRFbnRyeSIsInVwZGF0ZUluamVjdGlvblN0YXR1cyIsInNldHRpbmdzIiwiYWRkb24iLCJhdXRvY3MiLCJpZnJhbWVzIiwib25GZXRjaEVudHJpZXNSZXF1ZXN0Iiwic2VuZGVyIiwiY29sbGVjdEVudHJpZXMiLCJ0YWJJZCIsImZyYW1lSWQiLCJpbmplY3QiLCJpbmplY3RDb250ZW50U2NyaXB0Iiwid2ViTmF2aWdhdGlvbiIsImdldEFsbEZyYW1lcyIsImZyYW1lcyIsImZvckVhY2giLCJmcmFtZSIsImZpbGUiLCJhbGxGcmFtZXMiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImluc2VydENTUyIsImUiLCJ0b1N0cmluZyIsInJlcXVlc3QiLCJoYXNoU2Vuc2l0aXZlIiwiaGlzdG9yeSIsIm1hdGNoZXMiLCJmaW5kTWF0Y2hpbmdFbnRyaWVzIiwiZW50cmllcyIsImZpbHRlck1hdGNoZXMiLCJsb2NrZWQiLCJsb2NrZWRFbnRyaWVzIiwibm9uTG9ja2VkRW50cmllcyIsImVudHJ5IiwicGFnZVVybCIsImVudHJ5VXJsIiwibG9ja2VkRW50cmllc0NvdW50Iiwibm9uTG9ja2VkRW50cmllc0NvdW50IiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJsYXN0Iiwic2VuZFJlc3BvbnNlIiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwid2luZG93SW5mbyIsInByaXYiLCJpbmNvZ25pdG8iLCJzYXZlSW5Qcml2IiwiZGF0YSIsIm5hbWUiLCJhZGp1c3ROYW1lIiwibmFtaW5nIiwicmVuYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJhcmVhIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiY291bnRlciIsImdldERvdWJsZU5hbWVDb3VudCIsIm1ldGhvZCIsInRyaW0iLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwiZXhpc3RpbmdOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsIiwiY2hlY2twb2ludCIsImlzRG91YmxlTmFtZSIsImNoZWNrcG9pbnRfc3RhcnQiLCJjaGVja3BvaW50X2VuZCIsInRlc3QiLCJub3RpZnkiLCJjb25kaXRpb24iLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsImdldFVSTCIsIm9uU2F2ZWRFbnRyeSIsInNhdmVOb3RlIiwibWlzYyIsInBibU5vdGUiLCJ2aXBOb3RlIiwib25GYWlsZWRJbXBvcnQiLCJlcnJvcjEiLCJlcnJvcjIiLCJlcnJNZXNzYWdlMSIsImVyck1lc3NhZ2UyIiwib25JbXBvcnRFcnJvciIsIm9uSW1wb3J0U3VjY2VzcyIsImZhaWx1cmVOb3RlIiwib25TdWNjZXNzZnVsUmVzdG9yYXRpb24iLCJzdWNjZXNzTm90ZSIsImF1dG9SZXRyeSIsIm9uU2F2ZUVycm9yIiwib25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yIiwib25EZWxldGVFcnJvciIsImVycm9yTm90ZSIsImxvYWROb3RlIiwib25FcnJvciIsInBhZ2VBY3Rpb24iLCJoaWRlIiwic2hvdyIsInNldFBhbmVsIiwidGFiSW5mb3MiLCJpc09wZW4iLCJwYW5lbCIsInN0b3JlRW50cnkiLCJpZ25vcmVIYXNoIiwiQXJyYXkiLCJpc0FycmF5IiwidXBkYXRlRW50cnkiLCJ0YWJVcmwiLCJyZW1vdmVFbnRyeSIsInNhdmVkVXJsIiwic2VuZEVudHJ5IiwiaGFzaGxlc3NVcmwiLCJlbnRyaWVzRm9yVGhpc1RhYiIsInNlbmRPcmRlcmVkTWFya3MiLCJtYXJrcyIsInVwZGF0ZU9uQ2hhbmdlZFN5bmMiLCJzYXZlQWN0aXZhdGlvblN0YXRlIiwidG9nZ2xlU3luYyIsImZpZWxkIiwidmFsIiwic3luYyIsInNldEFyZWFzIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVyIiwic2V0dGluZyIsImFkZEN1c3RvbU1hcmtlciIsImtleSIsInN0eWxlIiwibWFya2VycyIsInJlbW92ZUN1c3RvbU1hcmtlciIsImNoYW5nZVN0eWxlIiwiY2hhbmdlQmdDb2xvciIsImNvbG9yIiwibWFya2VyIiwic3BsaXQiLCJyZXBsYWNlIiwiY2hhbmdlQXV0b05vdGVTZXR0aW5nIiwiYXV0b25vdGUiLCJjaGFuZ2VNYXJrTWV0aG9kIiwibWFya21ldGhvZCIsInRvZ2dsZVNob3J0Y3V0U2V0dGluZyIsInN0YXR1cyIsImNoYW5nZVNob3J0Y3V0U2V0dGluZyIsInZhbHVlIiwiY2hhbmdlU29ydE9wdCIsInNvcnRlZCIsImNoYW5nZVZpZXdPcHQiLCJ2aWV3IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwidmFsdWVzIiwiY3VzdG9tU2VhcmNoIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwicHAiLCJ0b2dnbGVDdG1TZXR0aW5nIiwiY2hhbmdlU2F2ZU9wdCIsImF1dG9zYXZlIiwidG9nZ2xlSW1tdXRPcHQiLCJpbW11dCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJkcm9wTG9zc2VzIiwidG9nZ2xlQXV0b1JldHJ5T3B0IiwidG9nZ2xlSGFzaE9wdCIsInRvZ2dsZVByaXZTYXZlT3B0IiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlTm90ZU9wdCIsInRvZ2dsZVF1aWNrYnV0dG9uT3B0IiwicHJvcCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90aWZpY2F0aW9uT3B0IiwiY2hhbmdlTWlzY1NldHRpbmciLCJ0b2dnbGVUQkJQb3dlclNldHRpbmciLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJjaGFuZ2VTQlNldHRpbmdzIiwidW5mb2xkZWQiLCJjaGFuZ2VUaGVtZVNldHRpbmdzIiwidGhlbWUiLCJjbGVhbkVudHJpZXMiLCJuYW1lcyIsIm5hbWVzX2xvY2FsIiwibG9zdCIsInNhdmVFbnRyeSIsInNhdmVOZXdOYW1lIiwiY29ycmVjdE5hbWUiLCJ1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbiIsIml0ZXJhdGlvbiIsInN5bmNlZCIsInJlY2VpdmVkQ29tcGxldGVFbnRyeSIsImZvdW5kIiwiaGFzT3duUHJvcGVydHkiLCJkZWxldGVFbnRyaWVzIiwicG9wIiwidXBkYXRlRW50cnlPblJlc3RvcmF0aW9uIiwiZW50cnlOYW1lIiwicmVzdG9yZWRNYXJrcyIsImxvc3RNYXJrcyIsIm9sZExvc3RNYXJrcyIsInJlc3RvcmVkTWFya3NJRHMiLCJvbGRMb3N0TWFya3NJRHMiLCJtYXJrIiwic3luY0VudHJ5IiwiYXJlYV8xIiwiYXJlYV8yIiwidGFnRW50cmllcyIsInRhZyIsImFkZFRhZ1RvRW50cnkiLCJsb2NhbCIsInJlbW92ZVRhZyIsInN0b3JlZEVudHJ5IiwicngiLCJSZWdFeHAiLCJhZGRUYWciLCJzZWFyY2giLCJ1cGRhdGVQYWdlTm90ZXMiLCJub3RlcyIsInBhZ2Vub3RlcyIsInJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsInByb3h5Iiwib25TdG9yYWdlQ2hhbmdlZCIsImNoYW5nZWRJdGVtIiwidXJscyIsIm5ld3MiLCJoZWxwIiwiY29udGFjdCIsInRyb3VibGVzaG9vdGluZyIsImxvZ3MiLCJ0YWJFdmVudEhhbmRsZXJzIiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJ0b2dnbGVUYWJFdmVudEhhbmRsZXJzIiwiYWRkVGFiRXZlbnRIYW5kbGVycyIsImJpbmQiLCJyZW1vdmVUYWJFdmVudEhhbmRsZXJzIiwiZXYiLCJjaGFuZ2VkIiwic2VjdXJpdHlXYXJuaW5nIiwic2VsZiIsIm9wZW5BZGRvblBhZ2UiLCJvcGVuSW5pdFBhZ2UiLCJvcGVuU2VhcmNoIiwid29yZCIsImN1c3RvbSIsImRlZmF1bHRTZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJub3RlVHlwZXMiLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwiYXJyb3d1cCIsImFycm93ZG93biIsImNtIiwibm90ZVR5cGUiLCJ0bXVpcG9zIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJub3RlZm9udHNpemUiLCJ0YmJwb3dlciIsInRoZW1lcyIsInVwZGF0ZUhpc3RvcnkiLCJvcmRlciIsImZpeEhpc3RvcnlEYXRlcyIsImxhbmciLCJlbiIsImRlIiwibWVyZ2VIaXN0b3JpZXMiLCJuZXdIaXN0b3J5Iiwib2xkSGlzdG9yeSIsIm9sZEVudHJpZXMiLCJvbGROYW1lcyIsImFjY2VwdGVkRW50cmllcyIsInVybEV4aXN0cyIsIl9lbnRyaWVzIiwiYSIsInNldFN0b3JhZ2VPblVwZ3JhZGUiLCJfIiwiaXNFbXB0eSIsImVtcHR5IiwiY2hlY2tTdG9yYWdlT25TdGFydCIsImltcG9ydFN0b3JhZ2UiLCJpbXBvcnRlZFN0b3JhZ2UiLCJpbXBvcnRTZXR0aW5ncyIsInN1Y2Nlc3MiLCJpbXBvcnRIaXN0b3J5Iiwic3VjY2Vzc19zIiwic3VjY2Vzc19oIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwZXJtaXNzaW9uIiwib25ET01Db250ZW50TG9hZGVkIiwib3BlbkVudHJ5RGV0YWlsUGFnZSIsInBvcHVwVVJMIiwiZ2V0Q3VycmVudCIsImN1cnJlbnRXaW5kb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJfQkdQT1JUIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsIl9TVE9SRSIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJfc2V0X3N5bmMiLCJtZXRoIiwiX3VwZGF0ZSIsImNvbnN0cnVjdG9yIiwiX2dldF9tb2RlIiwiYXJlYV9zZXR0aW5ncyIsIl9nZXRfcHJpdnNhdmUiLCJfZ2V0X25hbWluZyIsIl9nZXRfdGJicG93ZXIiLCJfZ2V0X21hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsIl9zZXRfc3RvcmFnZSIsIl9zZXRfc2V0dGluZ3MiLCJfc2V0X2hpc3RvcnkiLCJhcmVhX2hpc3RvcnkiLCJfc2V0X3ZlcnNpb24iLCJfc2V0X2xvZyIsIl9nZXRfbG9ncyIsIk1BWF9MT0dfRU5UUklFUyIsInNoaWZ0IiwiX3NldF9lbnRyeSIsIl91cGRhdGVfZW50cnkiLCJjYWxsIiwiX0NPUFkiLCJfRVhURU5EIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsInoiLCJ5IiwicyIsImRvd25sb2FkIiwiY29weSIsImJtaWNvbiIsIm92ZXJ3cml0ZSIsImNoYW5nZWROb3RlIiwicHJvZ3Jlc3NiYXIiLCJtZXRhIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJqc19pbmplY3Rpb25fZmFpbHVyZSIsImNzc19pbmplY3Rpb25fZmFpbHVyZSIsIm1pc3NpbmdfcGVybWlzc2lvbl93biIsImdldEtleUJ5VmFsdWUiLCJzcmMiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZW5hbWUiLCJsaW5lbm8iLCJjb2xubyIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJoIiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJ0b3BpY3MiLCJldmVudCIsImhhbmRsZXIiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm9iaiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJfUE9SVCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwicmVnaXN0ZXJPbmVPZmZFdmVudHMiLCJyZXEiLCJsYXN0QXJnIiwiX1BSSVZQT1JUIiwicG9ydCIsInBvcnRMaXN0ZW5lciIsImNvbm5lY3QiLCJyZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsInBvc3RNZXNzYWdlIiwibGlzdGVuZXIiLCJwb3J0cyIsInJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJwIiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJhcmVhX3BhZ2Vub3RlcyIsInIiLCJzZXRUaW1lb3V0Iiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Q0QsU0FUTSxDQUFQO0FBVUQsT0FiTSxDQUFQO0FBY0Q7OztvQ0FDZTtBQUNkLGFBQU85aUIsT0FBTyxDQUFDb1UsT0FBUixDQUFnQixLQUFLOEYsYUFBckIsRUFBb0MzWixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQTRULE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNoTyxRQUFSLElBQW9CNFAsNEJBQWlCNVAsUUFBekM7QUFBQSxPQUF0RCxDQUFQO0FBQ0Q7OztnQ0FDVztBQUNWLGFBQU9wRyxPQUFPLENBQUNvVSxPQUFSLENBQWdCWCxLQUFoQixDQUFzQmxULEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1osWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM5RSxJQUFuQyxFQUF5QyxPQUFPLEVBQVA7QUFDekMsZUFBTzhFLFlBQVksQ0FBQzlFLElBQXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU85VSxPQUFPLENBQUNvVSxPQUFSLENBQWdCWCxLQUFoQixDQUFzQmxULEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1osWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNoYSxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT0ksT0FBTyxDQUFDb1UsT0FBUixDQUFnQmpHLElBQWhCLENBQXFCNU4sR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFvaUIsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUNoakIsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPZ2EsWUFBWSxDQUFDaGEsT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUJKLGUiLCJmaWxlIjoiYmFja2dyb3VuZC9iYWNrZ3JvdW5kLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYWNrZ3JvdW5kL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9pY29ucy9vbjE2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjE4LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjMyLnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjM2LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vbjY0LnBuZydcclxuaW1wb3J0ICcuLi9pY29ucy9vZmYxNi5wbmcnXHJcbmltcG9ydCAnLi4vaWNvbnMvb2ZmMTgucG5nJ1xyXG5pbXBvcnQgJy4uL2ljb25zL3RtNDgucG5nJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vc3RvcmFnZSdcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2Vycm9yLWxvZ2dpbmcnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2luamVjdGlvbi1tYW5hZ2VyJ1xyXG5pbXBvcnQgX1dFQk5BVklHQVRJT04gZnJvbSAnLi9tb2R1bGVzL3dlYi1uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgX05PVElGSUNBVElPTlMgZnJvbSAnLi9tb2R1bGVzL25vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBfVEFCUyBmcm9tICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0IF9XSU5ET1dTIGZyb20gJy4vbW9kdWxlcy93aW5kb3dzJ1xyXG5pbXBvcnQgX1NJREVCQVJTIGZyb20gJy4vbW9kdWxlcy9zaWRlYmFycydcclxuaW1wb3J0IF9OQU1FUiBmcm9tICcuL21vZHVsZXMvbmFtZXInXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0LW1lbnUnXHJcbmltcG9ydCBfUEFHRUFDVElPTiBmcm9tICcuL21vZHVsZXMvcGFnZS1hY3Rpb24nXHJcbi8vaW1wb3J0IF9JREIgZnJvbSAnLi9tb2R1bGVzL2luZGV4ZWRkYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3ZlcnNpb24tbWFuYWdlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvc3RvcmUtbWFuYWdlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlT25JbXBvcnQnLFxyXG4gICAgICAnaW5pdGlhbGl6ZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICdtaWdyYXRlZDpzdG9yYWdlJzogJ3N0YXJ0JyxcclxuICAgICAgJ2NoZWNrZWQ6c3RvcmFnZSc6ICdzdGFydCcsXHJcbiAgICAgICd0b2dnbGU6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6dGJicG93ZXItc2V0dGluZ3MnOiAnc2V0VEJCQWN0aW9uJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2ZTogdHJ1ZSxcclxuICB2ZXJzaW9uOiAnJyxcclxuICBsb2FkUmVhc29uOiAnJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IHRoaXMudmVyc2lvbiA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3ZlcnNpb24nKS50aGVuKHZlcnNpb24gPT4ge1xyXG4gICAgICAgIGlmICghdmVyc2lvbiB8fCB2ZXJzaW9uICE9PSBjdXJyZW50VmVyc2lvbikge1xyXG4gICAgICAgICAgY29uc3QgbG9hZFJlYXNvbiA9IHRoaXMubG9hZFJlYXNvbiA9IGRldGFpbHMucmVhc29uO1xyXG4gICAgICAgICAgY29uc3QgcHJldlZlcnNpb24gPSBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbiB8fCAnMic7XHJcbiAgICAgICAgICBpZiAobG9hZFJlYXNvbiAmJiAobG9hZFJlYXNvbiA9PT0gJ3VwZGF0ZScgfHwgbG9hZFJlYXNvbiA9PT0gJ2luc3RhbGwnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobG9hZFJlYXNvbiArICc6YXBwJywgcHJldlZlcnNpb24sIGxvYWRSZWFzb24pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGVjazpzdG9yYWdlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gX1NUT1JBR0UuZ2V0KCd2ZXJzaW9uJykudGhlbih2ZXJzaW9uID0+IHtcclxuICAgIC8vICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbiA9PT0gY3VycmVudFZlcnNpb24pIHRoaXMuZW1pdCgnY2hlY2s6c3RvcmFnZScpO1xyXG4gICAgLy8gfSk7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBfU1RPUkFHRS5zZXQoJ3ZlcnNpb24nLCB0aGlzLnZlcnNpb24pO1xyXG5cclxuICAgIC8vX0lEQigpO1xyXG4gICAgX1dFQk5BVklHQVRJT04oKTtcclxuICAgIF9OT1RJRklDQVRJT05TKCk7XHJcbiAgICBfVEFCUygpO1xyXG4gICAgX05BTUVSKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfV0lORE9XUygpO1xyXG4gICAgX1NJREVCQVJTKCk7XHJcbiAgICBfUEFHRUFDVElPTigpO1xyXG5cclxuICAgIF9TVE9SQUdFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLmFjdGl2YXRlKG1vZGUpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5hY3RpdmF0ZSh0cnVlKSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzdGFydGVkOmFwcCcsIHRoaXMudmVyc2lvbiwgdGhpcy5sb2FkUmVhc29uKSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShhY3RpdmF0ZSkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBhY3RpdmF0ZTtcclxuICAgIHRoaXMudG9nZ2xlQnJvd3NlckFjdGlvbkljb24oYWN0aXZlKTtcclxuICAgIHRoaXMuc2V0VEJCQWN0aW9uKCk7XHJcbiAgfSxcclxuICB0b2dnbGUoKSB7XHJcbiAgICBsZXQgbW9kZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgIHRoaXMuYWN0aXZhdGUobW9kZSk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6YWRkb24nLCBtb2RlKTtcclxuICB9LFxyXG4gIHRvZ2dsZU9uSW1wb3J0KCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMuYWN0aXZhdGUobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQnJvd3NlckFjdGlvbkljb24ob24pIHtcclxuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgcGF0aDogb24gPyB7XHJcbiAgICAgICAgMTY6ICcuLi9pY29ucy9vbjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vbjE4LnBuZycsXHJcbiAgICAgICAgMzI6ICcuLi9pY29ucy9vbjMyLnBuZydcclxuICAgICAgfSA6IHtcclxuICAgICAgICAxNjogJy4uL2ljb25zL29mZjE2LnBuZycsXHJcbiAgICAgICAgMTg6ICcuLi9pY29ucy9vZmYxOC5wbmcnLFxyXG4gICAgICAgIDMyOiAnLi4vaWNvbnMvb2ZmMzIucG5nJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldFRCQkFjdGlvbihhZGQpIHtcclxuICAgIGlmICh0eXBlb2YgYWRkID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgaWYgKGFkZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVUQkJIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ3RiYnBvd2VyJykudGhlbihlbmFibGVkID0+IHtcclxuICAgICAgICBpZiAoZW5hYmxlZCkgdGhpcy5hZGRUQkJIYW5kbGVyKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZVRCQkhhbmRsZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZGRUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnRiYkhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgdGJiSGFuZGxlciA9IHRoaXMudGJiSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJycgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGJiSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmVUQkJIYW5kbGVyKCkge1xyXG4gICAgaWYgKHRoaXMudGJiSGFuZGxlcikge1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoeyBwb3B1cDogJ2NvbnRlbnQvdGJiLW1lbnUvdGJiLW1lbnUuaHRtbCcgfSk7XHJcbiAgICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQucmVtb3ZlTGlzdGVuZXIodGhpcy50YmJIYW5kbGVyKTtcclxuICAgICAgdGhpcy50YmJIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAndG9nZ2xlJyxcclxuICAgICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnOiAndXBkYXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIG06IHsgY29udGV4dHM6IFsnc2VsZWN0aW9uJ10gfSxcclxuICAgICAgdzogeyBjb250ZXh0czogWydzZWxlY3Rpb24nXSB9LFxyXG4gICAgICBkOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIGI6IHsgY29udGV4dHM6IFsnZnJhbWUnLCAnbGluaycsICdwYWdlJ10gfSxcclxuICAgICAgJy1iJzogeyBjb250ZXh0czogWydmcmFtZScsICdsaW5rJywgJ3BhZ2UnXSB9LFxyXG4gICAgICBuOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH0sXHJcbiAgICAgIHNiOiB7IGNvbnRleHRzOiBbJ2FsbCcsICd0YWInXSB9LFxyXG4gICAgICBjOiB7IGNvbnRleHRzOiBbJ2ZyYW1lJywgJ2xpbmsnLCAncGFnZSddIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBbXSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3R4XycgKyAoaSA9PT0gJy1iJyA/ICdkYicgOiBpKSk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKGluZm9zLCB0YWIpID0+IHRoaXMub25DbGljayhpbmZvcywgdGFiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoaWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5jcmVhdGUodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZC5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5jcmVhdGVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgIGJyb3dzZXIubWVudXMucmVtb3ZlKGlkKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQuc3BsaWNlKHRoaXMuY3JlYXRlZC5pbmRleE9mKGlkKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgYnJvd3Nlci5tZW51cy5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZShvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVBbGwoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgIF9TVE9SQUdFLmdldCgnc2hvcnRjdXRzJykudGhlbihzaG9ydGN1dHMgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgaWYgKHNob3J0Y3V0c1tpXVsyXSkgdGhpcy5jcmVhdGUoaSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGljayhpbmZvcywgdGFiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gaW5mb3MubWVudUl0ZW1JZDtcclxuXHJcbiAgICAgIGlmIChpZCA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgaW5mb3Muc2VsZWN0aW9uVGV4dCk7XHJcbiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2InKSBicm93c2VyLnNpZGViYXJBY3Rpb24ub3BlbigpO1xyXG4gICAgICBlbHNlIGlmIChpZCA9PT0gJ2MnKSB7XHJcbiAgICAgICAgYnJvd3Nlci5wZXJtaXNzaW9ucy5jb250YWlucyh7IHBlcm1pc3Npb25zOiBbJ2NsaXBib2FyZFdyaXRlJ10gfSkudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgZ3JhbnRlZCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnY3R4OicgKyBpZCwgbnVsbCwgbnVsbCwgeyB0YWI6IHRhYi5pZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2Vycm9yJzogJ2xvZycsXHJcbiAgICAgICd3YXJuaW5nJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6c2F2ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyeSc6ICdsb2cnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ29uRmFpbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcyc6ICdvbk1peGVkRW50cnlUeXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICdmYWlsZWQ6cGJtJzogJ29uRmFpbGVkUEJNJyxcclxuICAgICAgJ2ZhaWxlZDpvcGVuLXRhYic6ICdvbk9wZW5UYWJGYWlsdXJlJyxcclxuICAgICAgJ2Vycm9yOmltcG9ydCc6ICdsb2cnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJzogJ2xvZycsXHJcbiAgICAgICdjbGVhcjpsb2dzJzogJ2NsZWFyJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ2xvZycsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LWNvbnRlbnQtc2NyaXB0JzogJ29uU2NyaXB0SW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnOiAnb25DU1NJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgJ21pc3NpbmctcGVybWlzc2lvbjp3ZWJOYXZpZ2F0aW9uJzogJ29uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZyhlcnJvciwgaW5mbykge1xyXG4gICAgbGV0IGxvZywgbXNnO1xyXG4gICAgaWYgKGVycm9yLnRpbWUpIHtcclxuICAgICAgbG9nID0gW2Vycm9yLnRpbWUsIGVycm9yLm1lc3NhZ2UgKyAnIFsnICsgZXJyb3IubG9jYXRpb24gKyAnXSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nID0gWyhuZXcgRGF0ZSgpLmdldFRpbWUoKSksIF9MT0dfS0VZU1tlcnJvcl0gfHwgZXJyb3JdO1xyXG4gICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgIGlmIChpbmZvLnJlcG9ydCAmJiB0eXBlb2YgaW5mby5yZXBvcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBsb2cucHVzaChpbmZvLnJlcG9ydCk7XHJcbiAgICAgICAgICBpZiAoaW5mby5hdHRlbXB0KSBsb2cucHVzaChpbmZvLmF0dGVtcHQpO1xyXG4gICAgICAgICAgaWYgKGluZm8udXJsKSBsb2cucHVzaChpbmZvLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpbmZvID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgbG9nLnB1c2goaW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfU1RPUkFHRS5zZXQoJ2xvZycsIGxvZykudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bG9ncyBsb2dnZWQ6ZXJyb3InLCBsb2cpKTtcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgX1NUT1JBR0Uuc2V0KCdsb2cnLCB7IGNsZWFyOiB0cnVlIH0pLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmxvZ3MnKSk7XHJcbiAgfSxcclxuICBvbk1peGVkRW50cnlUeXBlcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMScpO1xyXG4gIH0sXHJcbiAgb25NdWx0aXBsZVVubG9ja2VkRW50cmllcygpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMicpO1xyXG4gIH0sXHJcbiAgb25GYWlsZWRSZXN0b3JhdGlvbihpbmZvKSB7XHJcbiAgICB0aGlzLmxvZygnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJywgaW5mbyk7XHJcbiAgfSxcclxuICBvbk9wZW5UYWJGYWlsdXJlKCkge1xyXG4gICAgdGhpcy5sb2coJ25vdGVfdXJsJyk7XHJcbiAgfSxcclxuICBvbkZhaWxlZFBCTSgpIHtcclxuICAgIHRoaXMubG9nKCdub3RlX3BibScpO1xyXG4gIH0sXHJcbiAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKGVycikge1xyXG4gICAgdGhpcy5sb2coJ2pzX2luamVjdGlvbl9mYWlsdXJlJywgZXJyKTtcclxuICB9LFxyXG4gIG9uQ1NTSW5qZWN0aW9uRmFpbHVyZSgpIHtcclxuICAgIHRoaXMubG9nKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKTtcclxuICB9LFxyXG4gIG9uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uKCkge1xyXG4gICAgdGhpcy5sb2coJ21pc3NpbmdfcGVybWlzc2lvbl93bicpO1xyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZG9tOmxvYWRlZCc6ICdhdXRvaW5qZWN0JyxcclxuICAgICAgJ2NsaWNrZWQ6cGFnZS1hY3Rpb24nOiAnaW5qZWN0TWFudWFsbHknLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nOiAnb25TYXZlTmV3UmVxdWVzdCcsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ29uVXBkYXRlUmVxdWVzdCcsXHJcbiAgICAgICduYW1lOmVudHJ5Pyc6ICdvbk5hbWluZ1JlcXVlc3QnLFxyXG4gICAgICAnb3BlbmVkOmVudHJ5JzogJ3RlbXBTYXZlRW50cnlNZXRhRGF0YScsXHJcbiAgICAgICdmZXRjaDplbnRyaWVzJzogJ29uRmV0Y2hFbnRyaWVzUmVxdWVzdCcsXHJcbiAgICAgICd1cGRhdGVkOmF1dG9jcy1zZXR0aW5ncyc6ICd1cGRhdGVJbmplY3Rpb25TdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDppZnJhbWVzLXNldHRpbmdzJzogJ3VwZGF0ZUluamVjdGlvblN0YXR1cydcclxuICAgIH1cclxuICB9LFxyXG4gIGF1dG9pbmplY3Q6IHRydWUsXHJcbiAgaWZyYW1lSW5qZWN0aW9uczogdHJ1ZSxcclxuICByZWNlbnRseU9wZW5lZEVudHJ5OiBudWxsLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlSW5qZWN0aW9uU3RhdHVzKCk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlSW5qZWN0aW9uU3RhdHVzKCkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICB0aGlzLmF1dG9pbmplY3QgPSAhc2V0dGluZ3MgfHwgc2V0dGluZ3MuYWRkb24uYXV0b2NzID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmlmcmFtZUluamVjdGlvbnMgPSAhc2V0dGluZ3MgfHwgc2V0dGluZ3MuYWRkb24uaWZyYW1lcyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uRmV0Y2hFbnRyaWVzUmVxdWVzdCh1cmwsIHNlbmRlcikge1xyXG4gICAgdGhpcy5jb2xsZWN0RW50cmllcyh7IHRhYklkOiBzZW5kZXIudGFiLmlkLCB1cmwsIGZyYW1lSWQ6IHNlbmRlci5mcmFtZUlkIH0sIHRydWUpO1xyXG4gIH0sXHJcblxyXG4gIGF1dG9pbmplY3QoaW5mb3MpIHtcclxuICAgIGlmICghdGhpcy5pZnJhbWVJbmplY3Rpb25zICYmIGluZm9zLmZyYW1lSWQgIT09IDApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICh0aGlzLmF1dG9pbmplY3QpIHRoaXMuaW5qZWN0KGluZm9zKTtcclxuICB9LFxyXG5cclxuICBpbmplY3RNYW51YWxseSh0YWJJZCwgdXJsKSB7XHJcbiAgICBjb25zdCBmcmFtZUlkID0gIXRoaXMuaWZyYW1lSW5qZWN0aW9ucyA/IDAgOiBudWxsO1xyXG4gICAgdGhpcy5pbmplY3RDb250ZW50U2NyaXB0KHsgdGFiSWQsIHVybCwgZnJhbWVJZCB9KS50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKGJyb3dzZXIud2ViTmF2aWdhdGlvbiAmJiBicm93c2VyLndlYk5hdmlnYXRpb24uZ2V0QWxsRnJhbWVzICYmIHRoaXMuaWZyYW1lSW5qZWN0aW9ucykge1xyXG4gICAgICAgIGJyb3dzZXIud2ViTmF2aWdhdGlvbi5nZXRBbGxGcmFtZXMoeyB0YWJJZCB9KVxyXG4gICAgICAgICAgLnRoZW4oZnJhbWVzID0+IGZyYW1lcy5mb3JFYWNoKGZyYW1lID0+IHRoaXMuY29sbGVjdEVudHJpZXMoeyB0YWJJZCwgdXJsOiBmcmFtZS51cmwsIGZyYW1lSWQ6IGZyYW1lLmZyYW1lSWQgfSkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3RFbnRyaWVzKHsgdGFiSWQsIHVybCwgZnJhbWVJZCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0KGluZm9zKSB7XHJcbiAgICB0aGlzLmluamVjdENvbnRlbnRTY3JpcHQoaW5mb3MpLnRoZW4oKCkgPT4gdGhpcy5jb2xsZWN0RW50cmllcyhpbmZvcykpO1xyXG4gIH0sXHJcblxyXG4gIGluamVjdENvbnRlbnRTY3JpcHQoaW5mb3MpIHtcclxuICAgIGNvbnN0IHsgdGFiSWQsIHVybCwgZnJhbWVJZCB9ID0gaW5mb3M7XHJcbiAgICBjb25zdCBkZXRhaWxzID0geyBmaWxlOiAnLi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzJyB9O1xyXG4gICAgaWYgKGZyYW1lSWQgPT09IG51bGwpIHtcclxuICAgICAgZGV0YWlscy5hbGxGcmFtZXMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGV0YWlscy5mcmFtZUlkID0gZnJhbWVJZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIGRldGFpbHMpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuaW5zZXJ0Q1NTKHRhYklkLCBmcmFtZUlkKSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGZyYW1lSWQgPT09IDAgJiYgIW1zZy5pbmNsdWRlcygnaG9zdCBwZXJtaXNzaW9uJykgJiYgIW1zZy5pbmNsdWRlcygnTWVzc2FnZSBtYW5hZ2VyIGRpc2Nvbm5lY3RlZCcpKSB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoJ2luamVjdGVkPycsIHsgdGFiSWQsIGZyYW1lSWQ6IGZyYW1lSWQgfHwgMCB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmluc2VydENTUyh0YWJJZCwgZnJhbWVJZCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnLCBgJHttc2d9XFxuVVJMOiAke3VybH1gKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICBpbnNlcnRDU1ModGFiSWQsIGZyYW1lSWQpIHtcclxuICAgIGNvbnN0IGRldGFpbHMgPSB7IGZpbGU6ICcuLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24uY3NzJyB9O1xyXG4gICAgaWYgKGZyYW1lSWQgPT09IG51bGwpIHtcclxuICAgICAgZGV0YWlscy5hbGxGcmFtZXMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGV0YWlscy5mcmFtZUlkID0gZnJhbWVJZDtcclxuICAgIH1cclxuXHJcbiAgICBicm93c2VyLnRhYnMuaW5zZXJ0Q1NTKHRhYklkLCBkZXRhaWxzKVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbXNnLmluY2x1ZGVzKCdNaXNzaW5nIGhvc3QgcGVybWlzc2lvbiBmb3IgdGhlIHRhYicpICYmICFtc2cuaW5jbHVkZXMoJ01lc3NhZ2UgbWFuYWdlciBkaXNjb25uZWN0ZWQnKSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6aW5qZWN0LXN0eWxlc2hlZXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGNvbGxlY3RFbnRyaWVzKGluZm9zLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICBjb25zdCB7IHRhYklkLCB1cmwsIGZyYW1lSWQgfSA9IGluZm9zO1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZmluZE1hdGNoaW5nRW50cmllcyhoaXN0b3J5LCB1cmwsIGhhc2hTZW5zaXRpdmUpO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5maWx0ZXJNYXRjaGVzKG1hdGNoZXMsIGZyYW1lSWQpO1xyXG5cclxuICAgICAgaWYgKGVudHJpZXMpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2VudHJpZXM6Zm91bmQnLCB7XHJcbiAgICAgICAgICBlbnRyaWVzLFxyXG4gICAgICAgICAgcmVjZW50bHlPcGVuZWRFbnRyeTogdGhpcy5yZWNlbnRseU9wZW5lZEVudHJ5LFxyXG4gICAgICAgICAgbG9ja2VkOiAhIW1hdGNoZXMubG9ja2VkRW50cmllcy5sZW5ndGhcclxuICAgICAgICB9LCB7IHRhYjogdGFiSWQsIGZyYW1lSWQgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGZpbmRNYXRjaGluZ0VudHJpZXMoaGlzdG9yeSwgdXJsLCBoYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgY29uc3Qgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG4gICAgbGV0IGVudHJ5LCBwYWdlVXJsLCBlbnRyeVVybDtcclxuXHJcbiAgICBmb3IgKGxldCBlIGluIGVudHJpZXMpIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2VdO1xyXG4gICAgICBpZiAoZW50cnkudXJsKSB7XHJcbiAgICAgICAgcGFnZVVybCA9IGhhc2hTZW5zaXRpdmUgfHwgZW50cnkuaGFzaFNlbnNpdGl2ZSA/IHVybCA6IF9IQVNITEVTUyh1cmwpO1xyXG4gICAgICAgIGVudHJ5VXJsID0gaGFzaFNlbnNpdGl2ZSB8fCBlbnRyeS5oYXNoU2Vuc2l0aXZlID8gZW50cnkudXJsIDogX0hBU0hMRVNTKGVudHJ5LnVybCk7XHJcblxyXG4gICAgICAgIGlmIChwYWdlVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgaWYgKGVudHJ5LmxvY2tlZCkgbG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgIGVsc2Ugbm9uTG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IGxvY2tlZEVudHJpZXMsIG5vbkxvY2tlZEVudHJpZXMgfTtcclxuICB9LFxyXG5cclxuICBmaWx0ZXJNYXRjaGVzKG1hdGNoZXMsIGZyYW1lSWQpIHtcclxuICAgIGNvbnN0IGxvY2tlZEVudHJpZXMgPSBtYXRjaGVzLmxvY2tlZEVudHJpZXM7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzID0gbWF0Y2hlcy5ub25Mb2NrZWRFbnRyaWVzO1xyXG4gICAgY29uc3QgbG9ja2VkRW50cmllc0NvdW50ID0gbG9ja2VkRW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBub25Mb2NrZWRFbnRyaWVzQ291bnQgPSBub25Mb2NrZWRFbnRyaWVzLmxlbmd0aDtcclxuICAgIGxldCBlbnRyaWVzO1xyXG5cclxuICAgIGlmIChsb2NrZWRFbnRyaWVzQ291bnQgJiYgbm9uTG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnd2FybjptaXhlZC1lbnRyeS10eXBlcycpO1xyXG4gICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCkge1xyXG4gICAgICAvLyBpZiBtdWx0aXBsZSBlbnRyaWVzIHdpdGggc2FtZSB1cmwgZm91bmQ6IHRha2UgbGF0ZXN0XHJcbiAgICAgIGVudHJpZXMgPSBbbm9uTG9ja2VkRW50cmllcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IChwcmV2Lmxhc3QgPiBjdXJyZW50Lmxhc3QpID8gcHJldiA6IGN1cnJlbnQpXTtcclxuICAgICAgaWYgKG5vbkxvY2tlZEVudHJpZXNDb3VudCA+IDEpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5T3BlbmVkRW50cnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmcmFtZUlkKSB0aGlzLmVtaXQoJ2VudHJ5OmZvdW5kJywgZW50cmllc1swXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9ja2VkRW50cmllc0NvdW50KSB7XHJcbiAgICAgIGVudHJpZXMgPSBsb2NrZWRFbnRyaWVzO1xyXG4gICAgICBpZiAoIWZyYW1lSWQpIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQnLCBsb2NrZWRFbnRyaWVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG4gIH0sXHJcblxyXG4gIG9uTmFtaW5nUmVxdWVzdChzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaXYgPSB3aW5kb3dJbmZvLmluY29nbml0bztcclxuICAgICAgICBpZiAoIXByaXYpIHNlbmRSZXNwb25zZSghcHJpdik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBfU1RPUkFHRS5nZXQoJ3ByaXZzYXZlJykudGhlbihzYXZlSW5Qcml2ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzYXZlSW5Qcml2KSB0aGlzLmVtaXQoJ2ZhaWxlZDpwYm0nKTtcclxuICAgICAgICAgICAgZWxzZSBzZW5kUmVzcG9uc2Uoc2F2ZUluUHJpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TYXZlTmV3UmVxdWVzdChlbnRyeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCgpXHJcbiAgICAgIC50aGVuKHdpbmRvd0luZm8gPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93SW5mby5pbmNvZ25pdG8pIHRoaXMuZW1pdCgnZ3JhbnRlZDpzYXZlLWVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX1NUT1JBR0UuZ2V0KCdwcml2c2F2ZScpLnRoZW4oc2F2ZUluUHJpdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2F2ZUluUHJpdikgdGhpcy5lbWl0KCdmYWlsZWQ6cGJtJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdncmFudGVkOnNhdmUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgb25VcGRhdGVSZXF1ZXN0KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKClcclxuICAgICAgLnRoZW4od2luZG93SW5mbyA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3dJbmZvLmluY29nbml0bykgdGhpcy5lbWl0KCdncmFudGVkOnVwZGF0ZS1lbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIF9TVE9SQUdFLmdldCgncHJpdnNhdmUnKS50aGVuKHNhdmVJblByaXYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNhdmVJblByaXYpIHRoaXMuZW1pdCgnZmFpbGVkOnBibScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZ3JhbnRlZDp1cGRhdGUtZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGVtcFNhdmVFbnRyeU1ldGFEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucmVjZW50bHlPcGVuZWRFbnRyeSA9IGRhdGE7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SQUdFIGZyb20gJy4vLi4vc3RvcmFnZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkOnNhdmUtZW50cnknOiAnbmFtZScsXHJcbiAgICAgICAgJ3JlbmFtZTplbnRyeSc6ICdyZW5hbWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbmFtZShlbnRyeSkge1xyXG4gICAgICBpZiAoZW50cnkubmFtZSkgcmV0dXJuIHRoaXMuYWRqdXN0TmFtZShlbnRyeS5uYW1lLCBlbnRyeSk7XHJcblxyXG4gICAgICBfU1RPUkFHRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHRoaXMuYWRqdXN0TmFtZShudWxsLCBlbnRyeSwgbmFtaW5nKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9uYW1pbmcnKSk7XHJcbiAgICB9LFxyXG4gICAgcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpIHtcclxuICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuZXdOYW1lKTtcclxuICAgICAgICBpZiAoY291bnRlcikgbmV3TmFtZSArPSAnICgnICsgKGNvdW50ZXIgKyAxKSArICcpJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZWQ6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGFkanVzdE5hbWUobmFtZSwgZW50cnksIG1ldGhvZCkge1xyXG4gICAgICBuYW1lID0gbmFtZSA/IG5hbWUgOlxyXG4gICAgICAgICAgICAgbWV0aG9kID09PSAndGl0bGUnID8gZW50cnkudGl0bGUudHJpbSgpID8gZW50cnkudGl0bGUudHJpbSgpIDogZW50cnkudXJsIDpcclxuICAgICAgICAgICAgIG1ldGhvZCA9PT0gJ2RhdGUnID8gKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSA6ICcnO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKTtcclxuXHJcbiAgICAgIF9TVE9SQUdFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgJiYgZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnLCAnZXJyb3JfZG91YmxlX2xvY2tlZF9uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjb3VudGVyKSBuYW1lICs9ICcgKCcgKyAoY291bnRlciArIDEpICsgJyknO1xyXG4gICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ25hbWVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfbmFtaW5nJykpO1xyXG4gICAgfSxcclxuICAgIGdldERvdWJsZU5hbWVDb3VudChoaXN0b3J5LCBuYW1lKSB7XHJcbiAgICAgIGxldCBleGlzdGluZ05hbWVzID0gT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBleGlzdGluZ05hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgY2hlY2twb2ludDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBjaGVja3BvaW50ID0gZXhpc3RpbmdOYW1lc1tsXTtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkpIGNvdW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRlcjtcclxuICAgIH0sXHJcbiAgICBpc0RvdWJsZU5hbWUobmFtZSwgY2hlY2twb2ludCkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gY2hlY2twb2ludCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBsZXQgbCA9IG5hbWUubGVuZ3RoLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9zdGFydCA9IGNoZWNrcG9pbnQuc3Vic3RyaW5nKDAsIGwpLFxyXG4gICAgICAgICAgY2hlY2twb2ludF9lbmQ7XHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gY2hlY2twb2ludF9zdGFydCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY2hlY2twb2ludF9lbmQgPSBjaGVja3BvaW50LnN1YnN0cmluZyhsLCBjaGVja3BvaW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoL15cXHMqXFwoXFxkK1xcKSQvLnRlc3QoY2hlY2twb2ludF9lbmQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5JzogJ29uU2F2ZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOnVwZGF0ZS1lbnRyeSc6ICdvblNhdmVFcnJvcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzYXZlLWVudHJ5LWRvdWJsZS1sb2NrZWQnOiAnb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yJyxcclxuICAgICAgICAnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJzogJ29uRGVsZXRlRXJyb3InLFxyXG4gICAgICAgICdmYWlsZWQ6b3Blbi10YWInOiAnb25PcGVuVGFiRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdvbkZhaWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ29uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnZmFpbGVkOnBibSc6ICdvbkZhaWxlZFBCTScsXHJcbiAgICAgICAgJ2ZhaWxlZDppbXBvcnQnOiAnb25GYWlsZWRJbXBvcnQnLFxyXG4gICAgICAgICdlcnJvcjppbXBvcnQnOiAnb25JbXBvcnRFcnJvcicsXHJcbiAgICAgICAgJ2ltcG9ydGVkOnN0b3JhZ2UnOiAnb25JbXBvcnRTdWNjZXNzJyxcclxuICAgICAgICAnZXJyb3InOiAnb25FcnJvcicsXHJcbiAgICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnOiAnb25NaXhlZEVudHJ5VHlwZXMnLFxyXG4gICAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnOiAnb25NdWx0aXBsZVVubG9ja2VkRW50cmllcycsXHJcbiAgICAgICAgJ2ZhaWxlZDppbmplY3QtY29udGVudC1zY3JpcHQnOiAnb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlJyxcclxuICAgICAgICAnZmFpbGVkOmluamVjdC1zdHlsZXNoZWV0JzogJ29uQ1NTSW5qZWN0aW9uRmFpbHVyZScsXHJcbiAgICAgICAgJ21pc3NpbmctcGVybWlzc2lvbjp3ZWJOYXZpZ2F0aW9uJzogJ29uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeShjb25kaXRpb24sIG1lc3NhZ2UsIHR5cGUpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChjb25kaXRpb24oc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZXh0bWFya2VyOiAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodHlwZSksXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb25Vcmw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2ljb25zL3RtNDgucG5nJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2F2ZWRFbnRyeSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlZF9lbnRyeScpLFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhaWxlZFBCTSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5wYm1Ob3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3BibScpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuVGFiRmFpbHVyZSgpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3VybCcpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRJbXBvcnQoZXJyb3IxLCBlcnJvcjIpIHtcclxuICAgICAgY29uc3QgZXJyTWVzc2FnZTEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcjEpO1xyXG4gICAgICBjb25zdCBlcnJNZXNzYWdlMiA9IGVycm9yMiA/ICdcXG5cXG4nICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IyKSA6ICcnO1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X2ZhaWx1cmUnLCBlcnJNZXNzYWdlMSArIGVyck1lc3NhZ2UyKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW1wb3J0RXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy52aXBOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX2ltcG9ydF93YXJuaW5nJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IpKSxcclxuICAgICAgICAnd2FybmluZydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25JbXBvcnRTdWNjZXNzKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfaW1wb3J0X3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NaXhlZEVudHJ5VHlwZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTXVsdGlwbGVVbmxvY2tlZEVudHJpZXMoKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yJyksXHJcbiAgICAgICAgJ3dhcm5pbmcnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3VjY2Vzc2Z1bFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnN1Y2Nlc3NOb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX3N1Y2Nlc3MnKSxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GYWlsZWRSZXN0b3JhdGlvbihpbmZvKSB7XHJcbiAgICAgIGxldCBtc2cgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlJyk7XHJcbiAgICAgIGlmIChpbmZvICYmIGluZm8uYXV0b1JldHJ5KSBtc2cgKz0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2F1dG9fcmV0cnknKTtcclxuXHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MuZmFpbHVyZU5vdGUsXHJcbiAgICAgICAgbXNnLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MuaGlzdG9yeS5zYXZlTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9zYXZlX2ZhaWx1cmUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TYXZlTG9ja2VkRG91YmxlTmFtZUVycm9yKGVycm9yLCBuYW1lKSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZU5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfc2F2ZV9mYWlsdXJlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZXJyb3IsIG5hbWUpKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgc2V0dGluZ3MgPT4gc2V0dGluZ3MubWlzYy5lcnJvck5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfZXJyb3InLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlcnJvcikpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25TY3JpcHRJbmplY3Rpb25GYWlsdXJlKGVycikge1xyXG4gICAgICBsZXQgbXNnID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2pzX2luamVjdGlvbl9mYWlsdXJlJyk7XHJcbiAgICAgIGlmIChlcnIpIG1zZyArPSBgXFxuXFxuJHtlcnJ9XFxuXFxuYDtcclxuXHJcbiAgICAgIHRoaXMubm90aWZ5KFxyXG4gICAgICAgIHNldHRpbmdzID0+IHNldHRpbmdzLm1pc2MubG9hZE5vdGUsXHJcbiAgICAgICAgbXNnLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DU1NJbmplY3Rpb25GYWlsdXJlKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmxvYWROb3RlLFxyXG4gICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjc3NfaW5qZWN0aW9uX2ZhaWx1cmUnKSxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTWlzc2luZ1dlYk5hdmlnYXRpb25QZXJtaXNzaW9uKCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLnZpcE5vdGUsXHJcbiAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ21pc3NpbmdfcGVybWlzc2lvbl93bicpLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICB0aGlzLm5vdGlmeShcclxuICAgICAgICBzZXR0aW5ncyA9PiBzZXR0aW5ncy5taXNjLmVycm9yTm90ZSxcclxuICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9lcnJvcicsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVycm9yKSksXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZG9tOmxvYWRlZCc6ICdzaG93JyxcclxuICAgICAgICAndXBkYXRlZDphdXRvY3Mtc2V0dGluZ3MnOiAndXBkYXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcih0YWIgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwYWdlLWFjdGlvbicsIHRhYi5pZCwgdGFiLnVybCk7XHJcbiAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLmhpZGUodGFiLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3coaW5mb3MpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgYnJvd3Nlci5wYWdlQWN0aW9uLnNob3coaW5mb3MudGFiSWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gIXNldHRpbmdzIHx8IHNldHRpbmdzLmFkZG9uLmF1dG9jcyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0dFVF9BQ1RJVkVfVEFCLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnYWN0aXZhdGVkOnRhYic6ICdzZXRQYW5lbCcsXHJcbiAgICAgICAgJ2NoYW5nZWQ6dXJsJzogJ3NldFBhbmVsJyxcclxuICAgICAgICAnZW50cnk6Zm91bmQnOiAnc3RvcmVFbnRyeScsXHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ3N0b3JlRW50cnknLFxyXG4gICAgICAgICd1cGRhdGVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzonc2VuZEVudHJ5JyxcclxuICAgICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcyc6ICdzZW5kT3JkZXJlZE1hcmtzJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IHt9LFxyXG5cclxuICAgIHNldFBhbmVsKHRhYklkLCB0YWJJbmZvcykge1xyXG4gICAgICB0aGlzLmlzT3BlbigpLnRoZW4ob3BlbiA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IHRhYkluZm9zLnVybCB8fCAnYmxhbmsnO1xyXG4gICAgICAgICAgYnJvd3Nlci5zaWRlYmFyQWN0aW9uLnNldFBhbmVsKHtcclxuICAgICAgICAgICAgcGFuZWw6IGJyb3dzZXIucnVudGltZS5nZXRVUkwoYGNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLmh0bWwjJHt0YWJJZH1fJHt1cmx9YCksXHJcbiAgICAgICAgICAgIHRhYklkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc2lkZWJhckFjdGlvbi5pc09wZW4oe30pO1xyXG4gICAgfSxcclxuICAgIHN0b3JlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9IEFycmF5LmlzQXJyYXkoZW50cnkpID8gIWVudHJ5WzBdLmhhc2hTZW5zaXRpdmUgOiAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuXHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHRhYi5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgZW50cmllc1tpZF0gPSBlbnRyaWVzW2lkXSB8fCBbXTtcclxuICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgICAgY29uc3QgZW50cnlVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKGVudHJ5LnVybCkgOiBlbnRyeS51cmw7XHJcblxyXG4gICAgICBmb3IgKGxldCBpZCBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdXJsIGluIGVudHJpZXNbaWRdKSB7XHJcbiAgICAgICAgICBpZiAodXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBlbnRyaWVzW2lkXVt1cmxdID0gZW50cnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCB0YWJVcmwgPSBpZ25vcmVIYXNoID8gX0hBU0hMRVNTKHRhYi51cmwpIDogdGFiLnVybDtcclxuXHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6Zm91bmQtZm9yLXRhYicsIGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUVudHJ5KG5hbWUsIHVybCwgaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgICBjb25zdCBlbnRyeVVybCA9IGhhc2hTZW5zaXRpdmUgPyB1cmwgOiBfSEFTSExFU1ModXJsKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlkIGluIGVudHJpZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBzYXZlZFVybCBpbiBlbnRyaWVzW2lkXSkge1xyXG4gICAgICAgICAgaWYgKHNhdmVkVXJsID09PSBlbnRyeVVybCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZW50cmllc1tpZF1bc2F2ZWRVcmxdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFiVXJsID0gaGFzaFNlbnNpdGl2ZSA/IHRhYi51cmwgOiBfSEFTSExFU1ModGFiLnVybCk7XHJcbiAgICAgICAgaWYgKHRhYlVybCA9PT0gZW50cnlVcmwpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kRW50cnkoKSB7XHJcbiAgICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgICBjb25zdCBoYXNobGVzc1VybCA9IF9IQVNITEVTUyh0YWIudXJsKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzRm9yVGhpc1RhYiA9IHRoaXMuZW50cmllc1t0YWIuaWRdO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXNGb3JUaGlzVGFiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNGb3JUaGlzVGFiW3RhYi51cmxdIHx8IGVudHJpZXNGb3JUaGlzVGFiW2hhc2hsZXNzVXJsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeTpmb3VuZC1mb3ItdGFiJywgZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kT3JkZXJlZE1hcmtzKG1hcmtzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZW50cnk6b3JkZXJlZC1tYXJrcycsIG1hcmtzKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZWdpc3RlclN0b3JhZ2VDaGFuZ2VkSGFuZGxlcicsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3NhdmVBY3RpdmF0aW9uU3RhdGUnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnOiAndG9nZ2xlU3luYycsXHJcblxyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnOiAnY2hhbmdlQXV0b05vdGVTZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJzogJ2NoYW5nZUJnQ29sb3InLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZyc6ICd0b2dnbGVTaG9ydGN1dFNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnOiAnY2hhbmdlU2hvcnRjdXRTZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZyc6ICd0b2dnbGVDdG1TZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZyc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9SZXRyeS1zZXR0aW5nJzogJ3RvZ2dsZUF1dG9SZXRyeU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJzogJ3RvZ2dsZUhhc2hPcHQnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZyc6ICd0b2dnbGVQcml2U2F2ZU9wdCcsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnOiAndG9nZ2xlTm90ZU9wdCcsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICd0b2dnbGVRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZyc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnOiAndG9nZ2xlTm90aWZpY2F0aW9uT3B0JyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnOiAnY2hhbmdlTWlzY1NldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZyc6ICdjaGFuZ2VNaXNjU2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZyc6ICd0b2dnbGVUQkJQb3dlclNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZyc6ICdjaGFuZ2VTb3J0T3B0JyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnOiAnY2hhbmdlVmlld09wdCcsXHJcbiAgICAgICdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcbiAgICAgICdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnOiAndG9nZ2xlQXV0b2NzT3B0JyxcclxuICAgICAgJ2NoYW5nZTppZnJhbWUtc2V0dGluZyc6ICd0b2dnbGVJRnJhbWVPcHQnLFxyXG5cclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJzogJ3JlbW92ZUN1c3RvbU1hcmtlcicsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcic6ICdhZGRDdXN0b21NYXJrZXInLFxyXG5cclxuICAgICAgJ25hbWVkOmVudHJ5JzogJ3NhdmVFbnRyeScsXHJcbiAgICAgICdyZW5hbWVkOmVudHJ5JzogJ3NhdmVOZXdOYW1lJyxcclxuICAgICAgJ2NvcnJlY3QtbmFtZTplbnRyeSc6ICdjb3JyZWN0TmFtZScsXHJcbiAgICAgICdncmFudGVkOnVwZGF0ZS1lbnRyeSc6ICd1cGRhdGVFbnRyeU9uUGFnZUFjdGlvbicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcyc6ICdkZWxldGVFbnRyaWVzJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ3VwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbicsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJzogJ2NsZWFuRW50cmllcycsXHJcbiAgICAgICdzeW5jOmVudHJ5JzogJ3N5bmNFbnRyeScsXHJcbiAgICAgICd0YWc6ZW50cmllcyc6ICd0YWdFbnRyaWVzJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnOiAncmVtb3ZlVGFnJyxcclxuICAgICAgJ2FkZDp0YWcnOiAnYWRkVGFnJyxcclxuXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJzogJ2NoYW5nZVNCU2V0dGluZ3MnLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJzogJ2NoYW5nZVRoZW1lU2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnOiAndXBkYXRlUGFnZU5vdGVzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlT25DaGFuZ2VkU3luYzogZmFsc2UsXHJcblxyXG4gIC8vIEFERE9OIE1FVEhPRFNcclxuICBzYXZlQWN0aXZhdGlvblN0YXRlKGFjdGl2ZSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuYWRkb24uYWN0aXZlID0gYWN0aXZlOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFNZTkMgTUVUSE9EU1xyXG4gIHRvZ2dsZVN5bmMoZmllbGQsIHZhbCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzeW5jJywgZnVuY3Rpb24oc3luYykge1xyXG4gICAgICBzeW5jW2ZpZWxkXSA9IHZhbDtcclxuICAgICAgdGhpcy5zZXRBcmVhcyhzeW5jKTtcclxuICAgICAgcmV0dXJuIHN5bmM7XHJcbiAgICB9LCAnbG9jYWwnKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnc3luYycsIHN5bmMgPT4ge1xyXG4gICAgICAgICAgc3luY1tmaWVsZF0gPSB2YWw7XHJcbiAgICAgICAgICByZXR1cm4gc3luYztcclxuICAgICAgICB9LCAnc3luYycpXHJcblxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX3RvZ2dsZV9zeW5jJyk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDp0b2dnbGUtc3luYycsIGZpZWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndG9nZ2xlZDpzeW5jIHRvZ2dsZWQ6c3luYy0nICsgZmllbGQsIGZpZWxkLCB2YWwpKVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICAvLyBTRVRUSU5HUyBNRVRIT0RTXHJcbiAgdXBkYXRlU2V0dGluZ3ModXBkYXRlciwgc2V0dGluZywgZXJyb3IpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnc2V0dGluZ3MnLCB1cGRhdGVyKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3VwZGF0ZWQ6JyArIHNldHRpbmcgKyAnLXNldHRpbmdzJykpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7IGlmIChlcnJvcikgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTsgfSk7XHJcbiAgfSxcclxuICBhZGRDdXN0b21NYXJrZXIoa2V5LCBzdHlsZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0gPSAgeyBzdHlsZSB9OyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnZXJyb3JfYWRkX21hcmtlcidcclxuICAgICk7XHJcbiAgfSxcclxuICByZW1vdmVDdXN0b21NYXJrZXIoa2V5KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IGRlbGV0ZSBzZXR0aW5ncy5tYXJrZXJzW2tleV07IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdlcnJvcl9yZW1vdmVfbWFya2VyJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVN0eWxlKGtleSwgc3R5bGUpIHtcclxuICAgIGlmICgha2V5KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5tYXJrZXJzW2tleV0uc3R5bGUgPSBzdHlsZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnc3R5bGUnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9zdHlsZSdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VCZ0NvbG9yKGtleSwgY29sb3IpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgbWFya2VyID0gc2V0dGluZ3MubWFya2Vyc1trZXldO1xyXG5cclxuICAgICAgICBpZiAobWFya2VyKSB7XHJcbiAgICAgICAgICBsZXQgc3BsaXQgPSBtYXJrZXIuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgICAgICBsID0gc3BsaXQubGVuZ3RoLCBzdHlsZTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gc3BsaXRbbF07XHJcbiAgICAgICAgICAgIGlmIChzdHlsZS5pbmNsdWRlcygnYmFja2dyb3VuZC1jb2xvcicpKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3MubWFya2Vyc1trZXldLnN0eWxlID0gbWFya2VyLnN0eWxlLnJlcGxhY2UoL2JhY2tncm91bmQtY29sb3I6Iy57Nn0vLCAnYmFja2dyb3VuZC1jb2xvcjonICsgY29sb3IpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgICAgfSxcclxuICAgICAgJ2JnLWNvbG9yJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfc3R5bGUnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlQXV0b05vdGVTZXR0aW5nKGtleSwgYXV0b25vdGUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWFya2Vyc1trZXldLmF1dG9ub3RlID0gYXV0b25vdGU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2F1dG9ub3RlJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfdG9nZ2xlX2F1dG9ub3RlJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU1hcmtNZXRob2QobWV0aG9kKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9IG1ldGhvZDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbWFyay1tZXRob2QnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVTaG9ydGN1dFNldHRpbmcoa2V5LCBzdGF0dXMpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMV0gPSBzdGF0dXM7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3Nob3J0Y3V0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfX3RvZ2dsZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTaG9ydGN1dFNldHRpbmcoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zaG9ydGN1dHNba2V5XVswXSA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdzaG9ydGN1dCcsXHJcbiAgICAgICdlcnJvcl9zYXZlX2NoYW5nZV9zYydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VTb3J0T3B0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc29ydGVkID0gdmFsdWU7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3NvcnQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgY2hhbmdlVmlld09wdCh2YWx1ZSkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnZpZXcgPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAndmlldydcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VDdXN0b21TZWFyY2godmFsdWVzKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLm1pc2MuY3VzdG9tU2VhcmNoID0gdmFsdWVzOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjdXN0b20tc2VhcmNoJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY2hhbmdlX3NlYXJjaCdcclxuICAgICk7XHJcbiAgfSxcclxuICBjaGFuZ2VDb3VudFBlclBhZ2UodmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5wcCA9IHZhbHVlOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdjb3VudC1wZXItcGFnZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVDdG1TZXR0aW5nKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMl0gPSB2YWx1ZTsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnY3RtJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfY3RtJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNhdmVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmUgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ3NhdmVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9hdXRvc2F2ZSdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVJbW11dE9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5pbW11dCA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnaW1tdXRvcHQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRHJvcExvc3Nlc09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdkcm9wbG9zc2Vzb3B0J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZUF1dG9SZXRyeU9wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5hdXRvUmV0cnkgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2F1dG9SZXRyeW9wdCdcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVIYXNoT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2ggPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2hhc2hvcHQnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUHJpdlNhdmVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdiA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAncHJpdnNhdmVvcHQnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9wcml2J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU5hbWluZ09wdCh2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmcgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ25hbWluZycsXHJcbiAgICAgICdlcnJvcl9zYXZlX25hbWluZydcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5LnNhdmVOb3RlID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdub3Rlb3B0JyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbm90aWZ5J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVF1aWNrYnV0dG9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5W3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdxdWlja2J1dHRvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2Rvd25sb2FkJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHN3aXRjaFF1aWNrYnV0dG9uT3B0KHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5oaXN0b3J5W3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdxdWlja2J1dHRvbicsXHJcbiAgICAgICdlcnJvcl9zYXZlX2Rvd25sb2FkJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGlmaWNhdGlvbk9wdChwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgJ2Vycm9yX3NhdmVfbm90aWZ5J1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZU1pc2NTZXR0aW5nKHByb3AsIHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5taXNjW3Byb3BdID0gdmFsOyByZXR1cm4gc2V0dGluZ3M7IH0sXHJcbiAgICAgICdtaXNjJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHRvZ2dsZVRCQlBvd2VyU2V0dGluZyhwcm9wLCB2YWwpIHtcclxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoXHJcbiAgICAgIHNldHRpbmdzID0+IHsgc2V0dGluZ3MubWlzY1twcm9wXSA9IHZhbDsgcmV0dXJuIHNldHRpbmdzOyB9LFxyXG4gICAgICAndGJicG93ZXInLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9ibWljb24nXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQXV0b2NzT3B0KHZhbCkge1xyXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncyhcclxuICAgICAgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5hZGRvbi5hdXRvY3MgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2F1dG9jcycsXHJcbiAgICAgICdlcnJvcl9zYXZlX2F1dG9jcydcclxuICAgICk7XHJcbiAgfSxcclxuICB0b2dnbGVJRnJhbWVPcHQodmFsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKFxyXG4gICAgICBzZXR0aW5ncyA9PiB7IHNldHRpbmdzLmFkZG9uLmlmcmFtZXMgPSB2YWw7IHJldHVybiBzZXR0aW5nczsgfSxcclxuICAgICAgJ2lmcmFtZXMnLFxyXG4gICAgICAnZXJyb3Jfc2F2ZV9pZnJhbWVzJ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGNoYW5nZVNCU2V0dGluZ3ModGFiLCB1bmZvbGRlZCkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdzZXR0aW5ncycsIHNldHRpbmdzID0+IHsgc2V0dGluZ3Muc2IudGFic1t0YWJdLnVuZm9sZGVkID0gdW5mb2xkZWQ7IHJldHVybiBzZXR0aW5nczsgfSk7XHJcbiAgfSxcclxuICBjaGFuZ2VUaGVtZVNldHRpbmdzKHRoZW1lKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4geyBzZXR0aW5ncy5zYi50aGVtZSA9IHRoZW1lOyByZXR1cm4gc2V0dGluZ3M7IH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEhJU1RPUlkgTUVUSE9EU1xyXG4gIGNsZWFuRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBpID0gbmFtZXMubGVuZ3RoLCBuYW1lO1xyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXNbbmFtZV0pIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZWxzZSBuYW1lc19sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYSlcclxuICAgIC50aGVuKCgpID0+IHsgaWYgKGFyZWEgPT09ICdsb2NhbCcpIHsgdGhpcy5lbWl0KCdjbGVhbmVkOmVudHJpZXMnKTsgfX0pXHJcbiAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9jbGVhbl9oaXN0b3J5JykpXHJcbiAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuY2xlYW5FbnRyaWVzKG5hbWVzX2xvY2FsLCAnbG9jYWwnKTsgfX0pO1xyXG4gIH0sXHJcbiAgc2F2ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBlbnRyeS5sb3N0ID0gW107XHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihoaXN0b3J5ID0+IHRoaXMuZW1pdCgnc2F2ZWQ6ZW50cnknLCBoaXN0b3J5LmVudHJpZXNbbmFtZV0pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6c2F2ZS1lbnRyeScsICdlcnJvcl9zYXZlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgc2F2ZU5ld05hbWUob2xkTmFtZSwgbmV3TmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gX0NPUFkoaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdKTtcclxuICAgICAgZW50cnkubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSA9IGVudHJ5O1xyXG4gICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktbmFtZScsIGhpc3RvcnkuZW50cmllc1tuZXdOYW1lXSwgb2xkTmFtZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDp1cGRhdGUtZW50cnknLCAnZXJyb3JfdXBkYXRlX2VudHJ5JykpO1xyXG4gIH0sXHJcbiAgY29ycmVjdE5hbWUobmFtZSwgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5uYW1lID0gbmFtZTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25QYWdlQWN0aW9uKGVudHJ5LCBhcmVhLCBpdGVyYXRpb24gPSAwKSB7XHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICBpdGVyYXRpb24rKztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZW50cnkubmFtZTtcclxuICAgIGNvbnN0IHJlY2VpdmVkQ29tcGxldGVFbnRyeSA9ICEhZW50cnkudXJsO1xyXG4gICAgbGV0IGZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgaWYgKHJlY2VpdmVkQ29tcGxldGVFbnRyeSkge1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLmxvc3QgfHwgW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LmVudHJpZXNbbmFtZV0pIHtcclxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBlbnRyeS5zeW5jZWQ7XHJcbiAgICAgICAgICBmb3IgKGxldCBlIGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5oYXNPd25Qcm9wZXJ0eShlKSkge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkuZW50cmllc1tuYW1lXVtlXSA9IGVudHJ5W2VdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbbmFtZV0ubG9zdCA9IGhpc3RvcnkuZW50cmllc1tuYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnVwZGF0ZS1lbnRyeScsICdlcnJvcl91cGRhdGVfZW50cnknKSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBpZiAoIWZvdW5kICYmIGl0ZXJhdGlvbiA8IDIpIHsgdGhpcy51cGRhdGVFbnRyeU9uUGFnZUFjdGlvbihlbnRyeSwgZW50cnkuc3luY2VkID8gJ2xvY2FsJyA6ICdzeW5jJywgaXRlcmF0aW9uKTsgfX0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLCBlbnRyeSkpO1xyXG4gIH0sXHJcbiAgZGVsZXRlRW50cmllcyhuYW1lcywgYXJlYSkge1xyXG4gICAgaWYgKCFuYW1lcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBhcmVhID0gdHlwZW9mIGFyZWEgPT09ICdzdHJpbmcnID8gYXJlYSA6ICdzeW5jJztcclxuXHJcbiAgICBsZXQgbmFtZXNfbG9jYWwgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGxldCBuYW1lLCB1cmwsIGhhc2hTZW5zaXRpdmU7XHJcblxyXG4gICAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgIGlmIChoaXN0b3J5LmVudHJpZXMgJiYgT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgdXJsID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdLnVybCB8fCAnJztcclxuICAgICAgICAgIGhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5LmVudHJpZXNbbmFtZV0uaGFzaFNlbnNpdGl2ZSB8fCAnJztcclxuXHJcbiAgICAgICAgICBkZWxldGUgaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdkZWxldGVkOmVudHJ5JywgbmFtZSwgdXJsLCBoYXNoU2Vuc2l0aXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmFtZXNfbG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHRoaXMuZW1pdCgnZmFpbGVkOmRlbGV0ZS1lbnRyaWVzJywgJ2Vycm9yX2RlbF9lbnRyeScpKVxyXG4gICAgICAudGhlbigoKSA9PiB7IGlmIChhcmVhID09PSAnc3luYycgJiYgbmFtZXNfbG9jYWwubGVuZ3RoKSB7IHRoaXMuZGVsZXRlRW50cmllcyhuYW1lc19sb2NhbCwgJ2xvY2FsJyk7IH19KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2RlbGV0ZWQ6ZW50cmllcycpKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25SZXN0b3JhdGlvbihlbnRyeU5hbWUsIHJlc3RvcmVkTWFya3MsIGxvc3RNYXJrcywgYXJlYSkge1xyXG4gICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGlzdG9yeS5kcm9wTG9zc2VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvbGRMb3N0TWFya3MgPSBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0IHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgcmVzdG9yZWRNYXJrc0lEcyA9IFtdO1xyXG4gICAgICAgICAgY29uc3Qgb2xkTG9zdE1hcmtzSURzID0gW107XHJcblxyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW2VudHJ5TmFtZV0ubWFya3MgPSByZXN0b3JlZE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJlc3RvcmVkTWFya3MuZm9yRWFjaChtYXJrID0+IHJlc3RvcmVkTWFya3NJRHMucHVzaChtYXJrLmlkKSk7XHJcblxyXG4gICAgICAgICAgbGV0IGwgPSBvbGRMb3N0TWFya3MubGVuZ3RoLCBpZDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gb2xkTG9zdE1hcmtzW2xdLmlkO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNYXJrc0lEcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBvbGRMb3N0TWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9sZExvc3RNYXJrc0lEcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvc3RNYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9sZExvc3RNYXJrc0lEcy5pbmNsdWRlcyhtYXJrLmlkKSkgb2xkTG9zdE1hcmtzLnB1c2gobWFyayk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnlOYW1lXS5sb3N0ID0gb2xkTG9zdE1hcmtzO1xyXG5cclxuICAgICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgICAgIH0sIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN5bmNFbnRyeShuYW1lLCB2YWwpIHtcclxuICAgIGNvbnN0IGFyZWFfMSA9IHZhbCA/ICdsb2NhbCcgOiAnc3luYyc7XHJcbiAgICBjb25zdCBhcmVhXzIgPSB2YWwgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIGxldCBlbnRyeTtcclxuXHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgZW50cnkgPSBfQ09QWShoaXN0b3J5LmVudHJpZXNbbmFtZV0pO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSB2YWw7XHJcbiAgICAgIGRlbGV0ZSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfSwgYXJlYV8xKVxyXG5cclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIF9TVE9SQUdFLnVwZGF0ZSgnaGlzdG9yeScsIGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgaGlzdG9yeS5lbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICB9LCBhcmVhXzIpXHJcblxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZW1pdCgndXBkYXRlZDplbnRyeSB1cGRhdGVkOmVudHJ5LXN5bmMnLCBlbnRyeSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnN5bmMtZW50cnknLCBuYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdGFnRW50cmllcyhuYW1lcywgdGFnKSB7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuICAgICAgbmFtZXMuc3luYy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sICdzeW5jJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcbiAgICAgICAgICBuYW1lcy5sb2NhbC5mb3JFYWNoKG5hbWUgPT4gdGhpcy5hZGRUYWdUb0VudHJ5KGVudHJpZXNbbmFtZV0sIHRhZykpO1xyXG4gICAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICAgICAgfSwgJ2xvY2FsJyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcblxyXG4gICAgX1NUT1JBR0UudXBkYXRlKCdoaXN0b3J5JywgaGlzdG9yeSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZEVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAoJ14nK3RhZysnJHxeJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJ1xcXFxzfFxcXFxzJyt0YWcrJyQnKTtcclxuICAgICAgaWYgKHN0b3JlZEVudHJ5LnRhZykge1xyXG4gICAgICAgIHN0b3JlZEVudHJ5LnRhZyA9IHN0b3JlZEVudHJ5LnRhZ1xyXG4gICAgICAgICAgLnJlcGxhY2UocngsICcgJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzfFxccyQvLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9LywgJyAnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgIH0sIGFyZWEpXHJcbiAgICAgIC50aGVuKGhpc3RvcnkgPT4gdGhpcy5lbWl0KCd1cGRhdGVkOmVudHJ5IHVwZGF0ZWQ6ZW50cnktdGFncycsIGhpc3RvcnkuZW50cmllc1tuYW1lXSkpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKHRhZywgZW50cnkpIHtcclxuICAgIGNvbnN0IGFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgY29uc3QgbmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgdGhpcy5hZGRUYWdUb0VudHJ5KGhpc3RvcnkuZW50cmllc1tuYW1lXSwgdGFnKTtcclxuICAgICAgcmV0dXJuIGhpc3Rvcnk7XHJcbiAgICB9LCBhcmVhKTtcclxuICB9LFxyXG4gIGFkZFRhZ1RvRW50cnkoZW50cnksIHRhZykge1xyXG4gICAgaWYgKCF0YWcpIGVudHJ5LnRhZyA9ICcnO1xyXG4gICAgZWxzZSBpZiAoIWVudHJ5LnRhZykgZW50cnkudGFnID0gdGFnO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCgnXicrdGFnKyckfF4nK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnXFxcXHN8XFxcXHMnK3RhZysnJCcsICdnJyk7XHJcbiAgICAgIGlmIChlbnRyeS50YWcuc2VhcmNoKHJ4KSA9PT0gLTEpIHtcclxuICAgICAgICBlbnRyeS50YWcgKz0gJyAnICsgdGFnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6ZW50cnkgdXBkYXRlZDplbnRyeS10YWdzJywgZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH0sXHJcblxyXG4gIC8vIFBBR0UgTk9URSBNRVRIT0RTXHJcbiAgdXBkYXRlUGFnZU5vdGVzKHVybCwgbm90ZXMpIHtcclxuICAgIF9TVE9SQUdFLnVwZGF0ZSgncGFnZW5vdGVzJywgcGFnZW5vdGVzID0+IHtcclxuICAgICAgcGFnZW5vdGVzW3VybF0gPSBub3RlcztcclxuICAgICAgcmV0dXJuIHBhZ2Vub3RlcztcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlZ2lzdGVyU3RvcmFnZUNoYW5nZWRIYW5kbGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMub25TdG9yYWdlQ2hhbmdlZCkpO1xyXG4gIH0sXHJcbiAgb25TdG9yYWdlQ2hhbmdlZChjaGFuZ2VkSXRlbSkge1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnNldHRpbmdzKSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c2V0dGluZ3MnKTtcclxuICAgIGlmIChjaGFuZ2VkSXRlbS5oaXN0b3J5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6aGlzdG9yeScpO1xyXG4gICAgaWYgKGNoYW5nZWRJdGVtLnBhZ2Vub3RlcykgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Vub3RlcycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICd0b2dnbGVUYWJFdmVudEhhbmRsZXJzJyxcclxuICAgICAgICAnc3RhcnRlZDphcHAnOiAnb3BlbkluaXRQYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKSc6ICdvcGVuQWRkb25QYWdlJyxcclxuICAgICAgICAnb3BlbjphZGRvbi1wYWdlKHRiYiknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ29wZW46YWRkb24tcGFnZShhbSknOiAnb3BlbkFkZG9uUGFnZScsXHJcbiAgICAgICAgJ2xvb2t1cDp3b3JkJzogJ29wZW5TZWFyY2gnLFxyXG4gICAgICAgICdvcGVuOmVudHJpZXMnOiAnb3BlbidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVybHM6IHtcclxuICAgICAgbmV3czogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1uZXdzJyxcclxuICAgICAgc2V0dGluZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9c2V0dGluZ3MnLFxyXG4gICAgICBoaXN0b3J5OiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPWhpc3RvcnknLFxyXG4gICAgICBpbmZvOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPW5ldycsXHJcbiAgICAgIGhlbHA6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bWFudWFsJyxcclxuICAgICAgY29udGFjdDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1jb250YWN0JyxcclxuICAgICAgdHJvdWJsZXNob290aW5nOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPXRyb3VibGVzaG9vdGluZycsXHJcbiAgICAgIGxvZ3M6ICdjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5odG1sI3BhZ2U9bG9ncycsXHJcbiAgICAgIGV4cG9ydDogJ2NvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmh0bWwjcGFnZT1leHBvcnQnLFxyXG4gICAgICBzeW5jOiAnY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2UuaHRtbCNwYWdlPXN5bmMnXHJcbiAgICB9LFxyXG4gICAgdGFiRXZlbnRIYW5kbGVyczoge1xyXG4gICAgICBvbkFjdGl2YXRlZDogbnVsbCxcclxuICAgICAgb25VcGRhdGVkOiBudWxsXHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBfU1RPUkFHRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy50b2dnbGVUYWJFdmVudEhhbmRsZXJzKG1vZGUpKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVGFiRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgaWYgKCF0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25BY3RpdmF0ZWQpIHtcclxuICAgICAgICBjb25zdCBvbkFjdGl2YXRlZCA9IHRoaXMudGFiRXZlbnRIYW5kbGVycy5vbkFjdGl2YXRlZCA9IHRoaXMub25BY3RpdmF0ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICBicm93c2VyLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIob25BY3RpdmF0ZWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXMudGFiRXZlbnRIYW5kbGVycy5vblVwZGF0ZWQpIHtcclxuICAgICAgICBjb25zdCBvblVwZGF0ZWQgPSB0aGlzLnRhYkV2ZW50SGFuZGxlcnMub25VcGRhdGVkID0gdGhpcy5vblVwZGF0ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICBicm93c2VyLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKG9uVXBkYXRlZC8qLCB7IHByb3BlcnRpZXM6IFsnc3RhdHVzJ10gfSovKTsgLy8gRVNSIHRocm93cyB3cm9uZyBhcmd1bWVudCB0eXBlIGVycm9yIHdoZW4gdXNpbmcgZmlsdGVyc1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFiRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgWydvbkFjdGl2YXRlZCcsICdvblVwZGF0ZWQnXS5mb3JFYWNoKGV2ID0+IHtcclxuICAgICAgICBpZiAodGhpcy50YWJFdmVudEhhbmRsZXJzW2V2XSkge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzW2V2XS5yZW1vdmVMaXN0ZW5lcih0aGlzLnRhYkV2ZW50SGFuZGxlcnNbZXZdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnRhYkV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUYWJFdmVudEhhbmRsZXJzKG9uKSB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRUYWJFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVUYWJFdmVudEhhbmRsZXJzKCk7XHJcbiAgICB9LFxyXG4gICAgb25BY3RpdmF0ZWQodGFiKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWN0aXZhdGVkOnRhYicsIHRhYi50YWJJZCwgKHRhYi51cmwgfHwgJycpKTtcclxuICAgIH0sXHJcbiAgICBvblVwZGF0ZWQodGFiSWQsIGNoYW5nZWQsIHRhYikge1xyXG4gICAgICBpZiAoY2hhbmdlZC51cmwpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6dXJsJywgdGFiSWQsIGNoYW5nZWQsIHRhYik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3Blbih1cmxzLCBuYW1lcykge1xyXG4gICAgICB1cmxzID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnID8gW3VybHNdIDogdXJscztcclxuICAgICAgbmFtZXMgPSB0eXBlb2YgbmFtZXMgPT09ICdzdHJpbmcnID8gW25hbWVzXSA6IG5hbWVzO1xyXG4gICAgICBsZXQgbCA9IHVybHMubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdXJpdHlXYXJuaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICB1cmw7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAoZnVuY3Rpb24oc2VsZiwgbCkge1xyXG4gICAgICAgICAgdXJsID0gdXJsc1tsXTtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IHVybHNbbF0gfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlY3VyaXR5V2FybmluZykgc2VsZi5lbWl0KCdmYWlsZWQ6b3Blbi10YWInKTtcclxuICAgICAgICAgICAgICBzZWN1cml0eVdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5hbWVzKSBzZWxmLmVtaXQoJ29wZW5lZDplbnRyeScsIHsgdXJsOiB1cmwsIG5hbWU6IG5hbWVzW2xdIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSh0aGlzLCBsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wZW5BZGRvblBhZ2UoaWQpIHtcclxuICAgICAgdGhpcy5vcGVuKHRoaXMudXJsc1tpZF0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0UGFnZSh2ZXJzaW9uLCBsb2FkUmVhc29uKSB7XHJcbiAgICAgIGlmIChsb2FkUmVhc29uKSB7XHJcbiAgICAgICAgaWYgKGxvYWRSZWFzb24gPT09ICdpbnN0YWxsJykgdGhpcy5vcGVuQWRkb25QYWdlKCdoZWxwJyk7XHJcbiAgICAgICAgLy9lbHNlIGlmIChsb2FkUmVhc29uID09PSAndXBkYXRlJykgdGhpcy5vcGVuQWRkb25QYWdlKCduZXdzJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuU2VhcmNoKHdvcmQpIHtcclxuICAgICAgX1NUT1JBR0UuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBjdXN0b20gPSBzZXR0aW5ncy5taXNjLmN1c3RvbVNlYXJjaCwgdXJsO1xyXG4gICAgICAgIGlmIChjdXN0b20pIHVybCA9ICdodHRwczovLycgKyBjdXN0b21bMF0gKyB3b3JkICsgY3VzdG9tWzFdO1xyXG4gICAgICAgIGVsc2UgdXJsID0gJ2h0dHBzOi8vJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycgKyB3b3JkO1xyXG4gICAgICAgIHRoaXMub3Blbih1cmwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JBR0UgZnJvbSAnLi8uLi9zdG9yYWdlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLy4uLy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGU6YXBwJzogJ3NldFN0b3JhZ2VPblVwZ3JhZGUnLFxyXG4gICAgICAnaW5zdGFsbDphcHAnOiAnc2V0U3RvcmFnZU9uVXBncmFkZScsXHJcbiAgICAgICdjaGVjazpzdG9yYWdlJzogJ2NoZWNrU3RvcmFnZU9uU3RhcnQnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnOiAnaW1wb3J0U3RvcmFnZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cGRhdGVTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncztcclxuXHJcbiAgICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBzZXR0aW5ncy5oaXN0b3J5O1xyXG4gICAgICAgIGNvbnN0IG1pc2MgPSBzZXR0aW5ncy5taXNjO1xyXG4gICAgICAgIGNvbnN0IG5vdGVUeXBlcyA9ICdwYm1Ob3RlIGNoYW5nZWROb3RlIGVycm9yTm90ZSBzdWNjZXNzTm90ZSB2aXBOb3RlIGxvYWROb3RlJy5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5uKSB7XHJcbiAgICAgICAgICBzaG9ydGN1dHMubiA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMubjtcclxuICAgICAgICAgIG1pc2Mubm90ZWljb24gPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgICAgICAgIG1pc2Mubm90ZW9uY2xpY2sgPSBkZWZhdWx0U2V0dGluZ3MubWlzYy5ub3Rlb25jbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuYXJyb3d1cCkge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLmFycm93dXAgPSBkZWZhdWx0U2V0dGluZ3Muc2hvcnRjdXRzLmFycm93dXA7XHJcbiAgICAgICAgICBzaG9ydGN1dHMuYXJyb3dkb3duID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5hcnJvd2Rvd247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmRbMF0pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5kWzBdID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5kWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNob3J0Y3V0cy5zYikge1xyXG4gICAgICAgICAgc2hvcnRjdXRzLnNiID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5zYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaG9ydGN1dHMuY20pIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5jbSA9IGRlZmF1bHRTZXR0aW5ncy5zaG9ydGN1dHMuY207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2hvcnRjdXRzLmMpIHtcclxuICAgICAgICAgIHNob3J0Y3V0cy5jID0gZGVmYXVsdFNldHRpbmdzLnNob3J0Y3V0cy5jO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZXJzLm0uc3R5bGUpIHtcclxuICAgICAgICAgIGxldCBzdHlsZTtcclxuICAgICAgICAgIGZvciAobGV0IG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgICBzdHlsZSA9IG1hcmtlcnNbbV07XHJcbiAgICAgICAgICAgIG1hcmtlcnNbbV0gPSB7IHN0eWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpc3Rvcnkuc29ydGVkKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnNvcnRlZCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNvcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5LnZpZXcpIHtcclxuICAgICAgICAgIGhpc3RvcnkudmlldyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5zYXZlSW5Qcml2ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3Rvcnkuc2F2ZUluUHJpdiA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LnNhdmVJblByaXY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pbW11dCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmltbXV0ID0gZGVmYXVsdFNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5pZ25vcmVIYXNoICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuaWdub3JlSGFzaCA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5Lmlnbm9yZUhhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5kcm9wTG9zc2VzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIGhpc3RvcnkuZHJvcExvc3NlcyA9IGRlZmF1bHRTZXR0aW5ncy5oaXN0b3J5LmRyb3BMb3NzZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgaGlzdG9yeS5hdXRvUmV0cnkgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgaGlzdG9yeS5hdXRvUmV0cnkgPSBkZWZhdWx0U2V0dGluZ3MuaGlzdG9yeS5hdXRvUmV0cnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RlVHlwZXMuZm9yRWFjaChub3RlVHlwZSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc2Nbbm90ZVR5cGVdICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgbWlzY1tub3RlVHlwZV0gPSBkZWZhdWx0U2V0dGluZ3MubWlzY1tub3RlVHlwZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFtaXNjLnRtdWlwb3MpIHtcclxuICAgICAgICAgIG1pc2MudG11aXBvcyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RldHJhbnNwICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXRyYW5zcCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy5ub3RlcGxhaW52aWV3ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZXBsYWludmlldyA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWlzYy5ub3RlZm9udHNpemUpIHtcclxuICAgICAgICAgIG1pc2Mubm90ZWZvbnRzaXplID0gZGVmYXVsdFNldHRpbmdzLm1pc2Mubm90ZWZvbnRzaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG1pc2MubWFya21ldGhvZCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIG1pc2MubWFya21ldGhvZCA9IGRlZmF1bHRTZXR0aW5ncy5taXNjLm1hcmttZXRob2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbWlzYy50YmJwb3dlciAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBtaXNjLnRiYnBvd2VyID0gZGVmYXVsdFNldHRpbmdzLm1pc2MudGJicG93ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNiKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYiA9IGRlZmF1bHRTZXR0aW5ncy5zYjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5zYi50aGVtZXMgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgc2V0dGluZ3Muc2IudGFicy50aGVtZXMgPSBkZWZhdWx0U2V0dGluZ3Muc2IudGFicy50aGVtZXM7XHJcbiAgICAgICAgICBzZXR0aW5ncy5zYi50aGVtZSA9IGRlZmF1bHRTZXR0aW5ncy5zYi50aGVtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWRkb24uYXV0b2NzICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgIHNldHRpbmdzLmFkZG9uLmF1dG9jcyA9IGRlZmF1bHRTZXR0aW5ncy5hZGRvbi5hdXRvY3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuYWRkb24uaWZyYW1lcyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzID0gZGVmYXVsdFNldHRpbmdzLmFkZG9uLmlmcmFtZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kJyk7XHJcbiAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxuICB9LFxyXG4gIHVwZGF0ZUhpc3RvcnkoaGlzdG9yeSkge1xyXG4gICAgZGVsZXRlIGhpc3Rvcnkub3JkZXI7XHJcblxyXG4gICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgIGVudHJ5O1xyXG5cclxuICAgIGlmICghbCkgcmV0dXJuIGhpc3Rvcnk7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBlbnRyeSA9IHRoaXMuZml4SGlzdG9yeURhdGVzKGVudHJpZXNbbmFtZXNbbF1dKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gdHlwZW9mIGVudHJ5LnN5bmNlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGlzdG9yeTtcclxuICB9LFxyXG4gIGZpeEhpc3RvcnlEYXRlcyhlbnRyeSkge1xyXG4gICAgY29uc3QgbGFuZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKTtcclxuICAgIGlmICh0eXBlb2YgZW50cnkuZmlyc3QgIT09ICdudW1iZXInKSBlbnRyeS5maXJzdCA9IG5ldyBEYXRlKChlbnRyeS5maXJzdFtsYW5nXSB8fCBlbnRyeS5maXJzdC5lbiB8fCBlbnRyeS5maXJzdC5kZSB8fCBlbnRyeS5maXJzdCkucmVwbGFjZSgvXFwuL2csJyAnKSkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKHR5cGVvZiBlbnRyeS5sYXN0ICE9PSAnbnVtYmVyJykgZW50cnkubGFzdCA9IG5ldyBEYXRlKChlbnRyeS5sYXN0W2xhbmddIHx8IGVudHJ5Lmxhc3QuZW4gfHwgZW50cnkubGFzdC5kZSB8fCBlbnRyeS5sYXN0KS5yZXBsYWNlKC9cXC4vZywnICcpKS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfSxcclxuICBtZXJnZUhpc3RvcmllcyhuZXdIaXN0b3J5LCBhcmVhKSB7XHJcbiAgICByZXR1cm4gX1NUT1JBR0UuZ2V0KCdoaXN0b3J5JykudGhlbihvbGRIaXN0b3J5ID0+IHtcclxuXHJcbiAgICAgIGxldCBlbnRyaWVzID0gbmV3SGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKSxcclxuICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgIG9sZEVudHJpZXMgPSBvbGRIaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBvbGROYW1lcyA9IE9iamVjdC5rZXlzKG9sZEVudHJpZXMpLFxyXG4gICAgICAgICAgYWNjZXB0ZWRFbnRyaWVzID0ge30sXHJcbiAgICAgICAgICBuYW1lLCBlbnRyeSwgdXJsLCB1cmxFeGlzdHMsIGU7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICB1cmxFeGlzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCFvbGROYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgdXJsID0gZW50cnkudXJsO1xyXG5cclxuICAgICAgICAgIGZvciAoZSBpbiBvbGRFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRFbnRyaWVzW2VdLnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgdXJsRXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF1cmxFeGlzdHMpIHtcclxuICAgICAgICAgICAgZW50cnkuc3luY2VkID0gYXJlYSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgICAgICBhY2NlcHRlZEVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ2hpc3RvcnknLCBoaXN0b3J5ID0+IHtcclxuICAgICAgICBjb25zdCBfZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYSBpbiBhY2NlcHRlZEVudHJpZXMpIHtcclxuICAgICAgICAgIF9lbnRyaWVzW2FdID0gYWNjZXB0ZWRFbnRyaWVzW2FdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgfSwgYXJlYSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXRTdG9yYWdlT25VcGdyYWRlKF8sIGxvYWRSZWFzb24pIHtcclxuICAgIF9TVE9SQUdFLmlzRW1wdHkoJ2xvY2FsJykudGhlbihlbXB0eSA9PiB7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIGlmIChsb2FkUmVhc29uICE9PSAnaW5zdGFsbCcpIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZScpO1xyXG4gICAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdzeW5jJykpXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksICdsb2NhbCcpKVxyXG4gICAgLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKSlcclxuICAgIC8vLnRoZW4oKCkgPT4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ2xvY2FsJykpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmVtaXQoJ2luaXRpYWxpemVkOnN0b3JhZ2UnKSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZDpzdG9yYWdlJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCAnZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24nLCBlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjaGVja1N0b3JhZ2VPblN0YXJ0KCkge1xyXG4gICAgX1NUT1JBR0UuaXNFbXB0eSgnc3luYycpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX1NUT1JBR0Uuc2V0KCdzdG9yYWdlJywgJ3N5bmMnKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBfU1RPUkFHRS5pc0VtcHR5KCdsb2NhbCcpLnRoZW4oZW1wdHkgPT4ge1xyXG4gICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgJ2Vycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBfU1RPUkFHRS5zZXQoJ3N0b3JhZ2UnLCAnbG9jYWwnKTtcclxuICAgIH0pKVxyXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdjaGVja2VkOnN0b3JhZ2UnKSlcclxuICAgIC5jYXRjaCgoKSA9PiB0aGlzLmVtaXQoJ2NoZWNrZWQ6c3RvcmFnZScpKTtcclxuICB9LFxyXG4gIGltcG9ydFN0b3JhZ2UoaW1wb3J0ZWRTdG9yYWdlLCBhcmVhKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSBpbXBvcnRlZFN0b3JhZ2Uuc2V0dGluZ3MsXHJcbiAgICAgICAgaGlzdG9yeSA9IGltcG9ydGVkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgIGlmICghaGlzdG9yeSAmJiAhc2V0dGluZ3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfZW1wdHknKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIWhpc3RvcnkpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLnNob3J0Y3V0cykgdGhpcy5lbWl0KCdmYWlsZWQ6aW1wb3J0JywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICBlbHNlIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB0aGlzLmVtaXQoJ2ZhaWxlZDppbXBvcnQnLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ltcG9ydGVkOnN0b3JhZ2UgaW1wb3J0ZWQ6aGlzdG9yeScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpLnRoZW4oc3VjY2Vzc19zID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1wb3J0SGlzdG9yeShoaXN0b3J5LCBhcmVhKS50aGVuKHN1Y2Nlc3NfaCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3VjY2Vzc19zKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfc2V0dGluZ3MnLCAnZXJyb3JfaW1wb3J0X2hpc3RvcnknKTtcclxuICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOmhpc3RvcnknLCAnZXJyb3JfaW1wb3J0X3NldHRpbmdzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NfcyA9PT0gJ291dGRhdGVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZmFpbGVkOmltcG9ydCcsICdlcnJvcl9pbXBvcnRfaGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdlcnJvcjppbXBvcnQgaW1wb3J0ZWQ6aGlzdG9yeScsICdlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzX2gpIHRoaXMuZW1pdCgnZXJyb3I6aW1wb3J0IGltcG9ydGVkOnNldHRpbmdzJywgJ2Vycm9yX2ltcG9ydF9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgnaW1wb3J0ZWQ6c3RvcmFnZSBpbXBvcnRlZDpzZXR0aW5ncyBpbXBvcnRlZDpoaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW1wb3J0U2V0dGluZ3Moc2V0dGluZ3MsIGFyZWEpIHtcclxuICAgIGlmICghc2V0dGluZ3Muc2hvcnRjdXRzKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCdvdXRkYXRlZCcpO1xyXG5cclxuICAgIHJldHVybiBfU1RPUkFHRS51cGRhdGUoJ3NldHRpbmdzJywgc2V0dGluZ3MgPT4gdGhpcy51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyksIGFyZWEpXHJcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICB9LFxyXG4gIGltcG9ydEhpc3RvcnkoaGlzdG9yeSwgYXJlYSkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVyZ2VIaXN0b3JpZXModGhpcy51cGRhdGVIaXN0b3J5KGhpc3RvcnksIHRydWUpLCBhcmVhKVxyXG4gICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdncmFudGVkLXBlcm1pc3Npb246d2ViTmF2aWdhdGlvbic6ICdhZGRMaXN0ZW5lcidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBjb25zdCBwZXJtaXNzaW9uID0geyBwZXJtaXNzaW9uczogWyd3ZWJOYXZpZ2F0aW9uJ10gfTtcclxuXHJcbiAgICAgIGJyb3dzZXIucGVybWlzc2lvbnMuY29udGFpbnMocGVybWlzc2lvbikudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ21pc3NpbmctcGVybWlzc2lvbjp3ZWJOYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZGRMaXN0ZW5lcigpIHtcclxuICAgICAgYnJvd3Nlci53ZWJOYXZpZ2F0aW9uLm9uRE9NQ29udGVudExvYWRlZC5hZGRMaXN0ZW5lcihpbmZvcyA9PiB0aGlzLmVtaXQoJ2RvbTpsb2FkZWQnLCBpbmZvcykpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkFHRSBmcm9tICcuLy4uL3N0b3JhZ2UnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndmlldzplbnRyeSc6ICdvcGVuRW50cnlEZXRhaWxQYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5FbnRyeURldGFpbFBhZ2UobmFtZSkge1xyXG4gICAgICBjb25zdCBwb3B1cFVSTCA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwoJ2NvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuaHRtbCcpO1xyXG5cclxuICAgICAgYnJvd3Nlci53aW5kb3dzLmdldEN1cnJlbnQoKS50aGVuKGN1cnJlbnRXaW5kb3cgPT4ge1xyXG5cclxuICAgICAgICBicm93c2VyLndpbmRvd3MuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogcG9wdXBVUkwgKyAnIycgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCAtIDIyLFxyXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWluKGN1cnJlbnRXaW5kb3cud2lkdGgsIDk4MCksXHJcbiAgICAgICAgICBpbmNvZ25pdG86IGN1cnJlbnRXaW5kb3cuaW5jb2duaXRvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9CR1BPUlQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxubmV3IF9CR1BPUlQoe1xyXG4gIG5hbWU6ICdiYWNrZ3JvdW5kJyxcclxuICB0eXBlOiAnYmFja2dyb3VuZCcsXHJcbiAgcG9zdHBvbmVDb25uZWN0aW9uOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdzdGFydGVkOmFwcCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYycsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICd1cGRhdGVkOmhpc3Rvcnktb24tcmVzdG9yYXRpb24nLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZScsXHJcbiAgICAgICd1cGRhdGVkOmxvZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdG0tc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnLFxyXG4gICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2F2ZW9wdC1zZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWFya2VyLXNldHRpbmdzJyxcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJpZXMnLFxyXG4gICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0ZWQ6aGlzdG9yeScsXHJcbiAgICAgICdjdHg6bScsXHJcbiAgICAgICdjdHg6ZCcsXHJcbiAgICAgICdjdHg6YicsXHJcbiAgICAgICdjdHg6LWInLFxyXG4gICAgICAnY3R4Om4nLFxyXG4gICAgICAnY3R4OmMnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICdjaGFuZ2VkOnVybCcsXHJcbiAgICAgICdpbmplY3RlZD8nXHJcbiAgICBdLFxyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnc3RhcnRlZDphcHAnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW9uLXNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknLFxyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYicsXHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9TVE9SRX0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi8uLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5yZW1vdmUoJ2xvZ3MnKTtcclxuXHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgbGV0IHN5bmMgPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLnN5bmMgPyBsb2NhbFN0b3JhZ2Uuc3luYyA6IF9ERUZBVUxUX1NUT1JBR0Uuc3luYztcclxuICAgICAgcmV0dXJuIHRoaXMuX3NldF9zeW5jKHN5bmMpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0KGZpZWxkLCB2YWwpIHtcclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfc2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG4gICAgcmV0dXJuIHRoaXNbJ19zZXRfJyArIGZpZWxkXSh2YWwpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGUoLi4uYXJncyk7XHJcbiAgfSxcclxuXHJcbiAgaXNFbXB0eShhcmVhID0gJ3N5bmMnKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAoIU9iamVjdC5rZXlzKHN0b3JhZ2UpLmxlbmd0aCAmJiBzdG9yYWdlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHx8ICFzdG9yYWdlLmhpc3RvcnkpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfcHJpdnNhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc2F2ZUluUHJpdjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RiYnBvd2VyKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRiYnBvd2VyO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcblxyXG4gIF9zZXRfc3RvcmFnZShhcmVhID0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NldF9zZXR0aW5ncyhhcmVhKS50aGVuKCgpID0+IHRoaXMuX3NldF9oaXN0b3J5KGFyZWEpKTtcclxuICB9LFxyXG4gIF9zZXRfc3luYyhzeW5jKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IHN5bmM6IHN5bmMgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuc2V0KHsgc3luYzogc3luYyB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXRBcmVhcyhzeW5jKSk7XHJcbiAgfSxcclxuICBfc2V0X3NldHRpbmdzKGFyZWEgPSB0aGlzLmFyZWFfc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW2FyZWFdLnNldCh7IHNldHRpbmdzOiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX3NldF9oaXN0b3J5KGFyZWEgPSB0aGlzLmFyZWFfaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2UuaGlzdG9yeSkgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVthcmVhXS5zZXQoeyBoaXN0b3J5OiBfQ09QWShfREVGQVVMVF9TVE9SQUdFLmhpc3RvcnkpIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X3ZlcnNpb24odmVyc2lvbikge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGJyb3dzZXIuc3RvcmFnZS5zeW5jLnNldCh7IHZlcnNpb246IHZlcnNpb24gfSkpO1xyXG4gIH0sXHJcbiAgX3NldF9sb2cobG9nKSB7XHJcbiAgICBpZiAobG9nLmNsZWFyKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgbG9nczogW10gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0X2xvZ3MoKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICBsb2dzLnB1c2gobG9nKTtcclxuICAgICAgaWYgKGxvZ3MubGVuZ3RoID4gX0dMT0JBTF9TRVRUSU5HUy5NQVhfTE9HX0VOVFJJRVMpIGxvZ3Muc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBsb2dzOiBsb2dzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfc2V0X2VudHJ5KGVudHJ5KSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9oaXN0b3J5XS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBsZXQgaGlzdG9yeSA9IHN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMoZW50cnkubmFtZSkpIHJldHVybiB0aGlzLl91cGRhdGVfZW50cnkoZW50cnkpO1xyXG4gICAgICBoaXN0b3J5LmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfaGlzdG9yeV0uc2V0KHsgaGlzdG9yeTogaGlzdG9yeSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF91cGRhdGUoZmllbGQsIHVwZGF0ZXIsIGFyZWEgPSB0aGlzWydhcmVhXycgKyBmaWVsZF0pIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2VbZmllbGRdKSB7XHJcbiAgICAgICAgICBzdG9yYWdlW2ZpZWxkXSA9IF9DT1BZKF9ERUZBVUxUX1NUT1JBR0VbZmllbGRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcbiAgICAgICAgdXBkYXRlW2ZpZWxkXSA9IHVwZGF0ZXIuY2FsbCh0aGlzLCBzdG9yYWdlW2ZpZWxkXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbYXJlYV0uc2V0KHVwZGF0ZSkudGhlbigoKSA9PiB1cGRhdGVbZmllbGRdKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfQkdQT1JUIH0gZnJvbSAnLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0VYVEVORCwgX0dFVF9BQ1RJVkVfVEFCLCBfTU9EVUxFLCBfU1RPUkUsIF9CR1BPUlQsIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWUsXHJcbiAgICAgIGF1dG9SZXRyeTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBub3RlZm9udHNpemU6IDEyLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBsb2FkTm90ZTogZmFsc2UsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ3RtJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcbiAganNfaW5qZWN0aW9uX2ZhaWx1cmU6IDM3LFxyXG4gIGNzc19pbmplY3Rpb25fZmFpbHVyZTogMzgsXHJcbiAgbWlzc2luZ19wZXJtaXNzaW9uX3duOiAzOSxcclxuXHJcbiAgZ2V0S2V5QnlWYWx1ZSh2YWwpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIGlmICh0aGlzW2tleV0gPT0gdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vLi4vaWNvbnMvb2ZmMTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uLy4uL2ljb25zL29mZjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjMyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy9vbjY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi8uLi9pY29ucy90bTQ4LnBuZ1wiOyIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGlmICghdXJsKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShhcmdzWzBdLnRhYklkLCB7IGV2OiBldmVudCwgd2FpdDogdHJ1ZSB9LCB7IGZyYW1lSWQ6IGFyZ3NbMF0uZnJhbWVJZCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgIHRoaXMucmVnaXN0ZXJPbmVPZmZFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3Rlck9uZU9mZkV2ZW50cyhldmVudHMuT05FT0ZGKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbmVPZmZFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgfHwgKCBldmVudHMgPSB0aGlzLmV2ZW50cy5PTkVPRkYpO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgX1BSSVZQT1JUIGV4dGVuZHMgX1BPUlQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xyXG4gICAgICAgICAgIXRoaXMucG9ydCB8fCB0aGlzLnBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKHRoaXMucG9ydExpc3RlbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLkNPTk5FQ1RJT047XHJcblxyXG4gICAgICAgIGlmIChldmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiBgJHt0aGlzLm5hbWV9XyR7dGhpcy5pZH1gIH0pO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5wb3J0TGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpO1xyXG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgX0JHUE9SVCBleHRlbmRzIF9QT1JUIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnBvcnRzID0ge307XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck9uQ29ubmVjdExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHMuQ09OTkVDVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJPbkNvbm5lY3RMaXN0ZW5lcigpIHtcclxuICAgICAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3J0cyA9IHRoaXMucG9ydHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKTtcclxuICAgICAgICAgICAgcG9ydHNbcG9ydC5uYW1lXSA9IHBvcnQ7XHJcbiAgICAgICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBvcnRzW3BvcnQubmFtZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IHBvcnRzID0gdGhpcy5wb3J0cztcclxuICAgICAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcCBpbiBwb3J0cykge1xyXG4gICAgICAgICAgICBpZiAocG9ydHMuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICBwb3J0c1twXS5wb3N0TWVzc2FnZShtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBfUE9SVCwgX1BSSVZQT1JULCBfQkdQT1JUIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=