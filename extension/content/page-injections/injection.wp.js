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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/page-injections/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/_shared/utils.js":
/*!**********************************!*\
  !*** ./content/_shared/utils.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PRIVPORT = exports._PORT = exports._STORE = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

var _store = __webpack_require__(/*! ./../../utils/store */ "./utils/store.js");

var _port = __webpack_require__(/*! ./../../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../../utils/hashless */ "./utils/hashless.js");

var _l10n = __webpack_require__(/*! ./../../utils/l10n */ "./utils/l10n.js");

var _l10n2 = _interopRequireDefault(_l10n);

var _errorTracker = __webpack_require__(/*! ./../../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports._COPY = _copy._COPY;
exports._GET_ACTIVE_TAB = _getActiveTab._GET_ACTIVE_TAB;
exports._EXTEND = _extend2["default"];
exports._MODULE = _module._MODULE;
exports._DOMMODULE = _dommodule._DOMMODULE;
exports._STORE = _store._STORE;
exports._PORT = _port._PORT;
exports._PRIVPORT = _port._PRIVPORT;
exports._L10N = _l10n2["default"];
exports._ERRORTRACKER = _errorTracker2["default"];
exports._HASHLESS = _hashless._HASHLESS;

/***/ }),

/***/ "./content/page-injections/_store.js":
/*!*******************************************!*\
  !*** ./content/page-injections/_store.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._STORE({
  events: {
    ENV: {
      'toggled:sync': 'onToggledSync'
    }
  },
  env: 'injection',
  url: '',
  hashlessURL: '',
  updated: false,
  restoring: false,
  iframe: false,
  name: undefined,
  isNew: true,
  //entry: null,
  entries: {},
  locked: false,
  hashSensitive: false,
  tmid: '',
  noteColor: 'yellow',
  noteFontSize: 12,
  immut: false,
  redescribing: false,
  resume: function resume() {
    this.entries = {};
    this.name = undefined;
    this.tmid = '';
    this.isNew = true;
  },
  updateLocation: function updateLocation() {
    this.iframe = window !== window.parent.window;
    this.url = window.document.URL;
    this.hashlessURL = (0, _utils._HASHLESS)(this.url);
  },
  updateStatus: function updateStatus() {
    var _this = this;

    if (!this.isNew || document.querySelector('[data-tm-id]')) return;
    return this.get('settings').then(function (settings) {
      var historySettings = settings ? settings.history : null;

      if (historySettings) {
        _this.locked = historySettings.naming === 'mark';
        _this.hashSensitive = historySettings.ignoreHash === false;
      }

      _this.updated = true;

      _this.emit('updated:store-status');
    });
  },
  renameEntry: function renameEntry(entry, oldName) {
    if (this.name && this.name === oldName && !this.locked) {
      this.name = entry.name;

      if (this.entries[oldName]) {
        this.entries[entry.name] = entry;
        delete this.entries[oldName];
      }
    }
  },
  setSyncForEntry: function setSyncForEntry(entry) {
    if (!this.locked && this.entries[entry.name]) {
      this.entries[entry.name].synced = entry.synced;
    }
  },
  removeEntry: function removeEntry(deletedEntry) {
    if (this.locked) return false;
    var entries = this.entries;

    for (var name in entries) {
      if (entries.hasOwnProperty(name) && name === deletedEntry) {
        delete this.entries[name];
        break;
      }
    }

    this.name = undefined;
    this.isNew = true;
  },
  addEntries: function addEntries(entries) {
    if (!entries) return false;
    var firstEntry = entries[0];
    var e = entries.length;
    if (!this.locked) this.name = firstEntry.name;

    for (var i = 0, entry; i < e; i++) {
      entry = entries[i];
      this.entries[entry.name] = entry;
    }

    this.isNew = false;
    this.immut = !!firstEntry.immut;
    this.hashSensitive = firstEntry.hashSensitive;
  },
  _get_bmicon: function _get_bmicon() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.bmicon;
    });
  },
  _get_noteicon: function _get_noteicon() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteicon;
    });
  },
  _get_noteonclick: function _get_noteonclick() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteonclick;
    });
  },
  _get_tmuipos: function _get_tmuipos() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.tmuipos;
    });
  },
  _get_autosave: function _get_autosave() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.autosave;
    });
  },
  _get_immut: function _get_immut() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.immut;
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
  _get_mode: function _get_mode() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_naming: function _get_naming() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return 'custom';
      return storage.settings.history.naming;
    });
  }
});

/***/ }),

/***/ "./content/page-injections/index.js":
/*!******************************************!*\
  !*** ./content/page-injections/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/page-injections/sass/index.scss");

var _utils = __webpack_require__(/*! ../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(/*! ./port */ "./content/page-injections/port.js");

__webpack_require__(/*! ./modules/page */ "./content/page-injections/modules/page.js");

__webpack_require__(/*! ./modules/contextmenu */ "./content/page-injections/modules/contextmenu.js");

__webpack_require__(/*! ./modules/marker */ "./content/page-injections/modules/marker.js");

__webpack_require__(/*! ./modules/notes */ "./content/page-injections/modules/notes.js");

__webpack_require__(/*! ./modules/tmui */ "./content/page-injections/modules/tmui.js");

__webpack_require__(/*! ./modules/marker-popup */ "./content/page-injections/modules/marker-popup.js");

__webpack_require__(/*! ./modules/auto-marker */ "./content/page-injections/modules/auto-marker.js");

__webpack_require__(/*! ./main */ "./content/page-injections/main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/page-injections/main.js":
/*!*****************************************!*\
  !*** ./content/page-injections/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

var _restorer = __webpack_require__(/*! ./modules/restorer */ "./content/page-injections/modules/restorer.js");

var _restorer2 = _interopRequireDefault(_restorer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'opened:sidebar': 'sendPageState',
      'failed:restoration': 'activateRetry',
      'succeeded:restoration': 'deactivateRetry',
      'update:entry?': 'deactivateRetry',
      'updated:naming-settings': 'updateStatus',
      'updated:hashopt-settings': 'updateStatus',
      'updated:entry-sync': 'setSyncForEntry',
      'updated:entry-name': 'renameEntry',
      'saved:entry': 'onSavedEntry',
      'deleted:entry': 'removeEntry',
      'resumed-on-hashchange': 'onResumed',
      // @RESTORER
      'entries:found': 'onEntriesFound',
      // register at BG
      'injected?': 'notifyBG'
    }
  },
  retryActive: false,
  restorer: null,
  autoinit: function autoinit() {
    _store2["default"].updateLocation();

    _store2["default"].updateStatus();

    if (!this.iframe) {
      window.addEventListener('hashchange', this.proxy(this, this.onHashChange), false);
    }
  },
  onHashChange: function onHashChange() {
    if (_store2["default"].hashSensitive) {
      this.emit('hashchange');
    }
  },
  onResumed: function onResumed() {
    _store2["default"].updateLocation();

    _store2["default"].isNew || _store2["default"].resume();
    this.emit('fetch:entries', _store2["default"].url);
  },
  onSavedEntry: function onSavedEntry(entry) {
    var ignoreHash = !entry.hashSensitive;
    var url = ignoreHash ? _store2["default"].hashlessURL : _store2["default"].url;

    if (entry.url === url) {
      _store2["default"].addEntries([entry]);
    }
  },
  activateRetry: function activateRetry() {
    this.retryActive = true;
  },
  deactivateRetry: function deactivateRetry() {
    this.retryActive = false;
  },
  sendPageState: function sendPageState(info) {
    this.emit('page-state', {
      selection: !window.getSelection().isCollapsed,
      bookmark: !!document.getElementById('textmarker-bookmark-anchor'),
      retryActive: this.retryActive
    }, info);
  },
  updateStatus: function updateStatus() {
    _store2["default"].updateStatus();
  },
  setSyncForEntry: function setSyncForEntry() {
    _store2["default"].setSyncForEntry.apply(_store2["default"], arguments);
  },
  renameEntry: function renameEntry() {
    _store2["default"].renameEntry.apply(_store2["default"], arguments);
  },
  removeEntry: function removeEntry() {
    _store2["default"].removeEntry.apply(_store2["default"], arguments);
  },
  // @RESTORER
  onEntriesFound: function onEntriesFound(info) {
    if (!_store2["default"].updated) {
      this.on('updated:store-status', this.proxy(this, this.startRestoration, info));
    } else {
      this.startRestoration(info);
    }
  },
  startRestoration: function startRestoration(info) {
    var entries = info.entries;
    entries = Array.isArray(entries) ? entries : [entries];
    _store2["default"].locked = info.locked;
    if (!this.restorer) this.restorer = (0, _restorer2["default"])();

    _store2["default"].addEntries(entries);

    this.emit('set:entries', entries);
    if (info.recentlyOpenedEntry) this.updateName(entries, info.recentlyOpenedEntry);
    this.emit('restore:marks', info.entries);
  },
  updateName: function updateName(entries, recentlyOpenedEntry) {
    var firstEntry = entries[0];
    var ignoreHash = !firstEntry.hashSensitive;
    var url = ignoreHash ? _store2["default"].hashlessURL : _store2["default"].url;

    if (recentlyOpenedEntry.url === url) {
      _store2["default"].name = recentlyOpenedEntry.name;
    }
  },
  notifyBG: function notifyBG(sender, sendResponse) {
    sendResponse(true);
  }
});

/***/ }),

/***/ "./content/page-injections/modules/auto-marker.js":
/*!********************************************************!*\
  !*** ./content/page-injections/modules/auto-marker.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  events: {
    ENV: {
      'updated:mark-method-settings': 'update',
      'changed:selection': 'onSelectionChange',
      'sidebar:selected-marker': 'setMarker'
    }
  },
  handler: null,
  marker: 'm',
  autoinit: function autoinit() {
    this.update();
  },
  update: function update() {
    var _this = this;

    _store2["default"].get('settings').then(function (settings) {
      _this.active = settings.misc.markmethod === 'auto';
    });
  },
  setMarker: function setMarker(key) {
    this.marker = key;
  },
  onSelectionChange: function onSelectionChange(selected) {
    if (this.active) {
      if (selected && !this.listening) {
        this.startListening();
      } else if (!selected && this.listening) {
        this.stopListening();
      }
    } else if (this.listening) {
      this.stopListening();
    }
  },
  startListening: function startListening() {
    if (!this.listening) {
      var handler = this.handler = this.onMouseup.bind(this);
      window.document.body.addEventListener('mouseup', handler, false);
      this.listening = true;
    }
  },
  stopListening: function stopListening() {
    if (this.listening) {
      window.document.body.removeEventListener('mouseup', this.handler, false);
      this.listening = false;
    }
  },
  onMouseup: function onMouseup() {
    this.stopListening();
    var selection = window.getSelection().toString();
    if (selection) this.emit('selection-end', this.marker);
  }
});

/***/ }),

/***/ "./content/page-injections/modules/bookmark.js":
/*!*****************************************************!*\
  !*** ./content/page-injections/modules/bookmark.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _BOOKMARK = /*#__PURE__*/function () {
  function _BOOKMARK() {
    _classCallCheck(this, _BOOKMARK);

    this.mark = null;
    this.anchor = null;
  }

  _createClass(_BOOKMARK, [{
    key: "set",
    value: function set(mark) {
      mark = mark || this.mark;
      var wrappers = mark.wrappers,
          w = wrappers.length,
          anchor = wrappers[0];
      mark.keyData.bookmark = true;
      anchor.id = 'textmarker-bookmark-anchor';

      while (w--) {
        wrappers[w].classList.add('textmarker-bookmark');
      }

      this.mark = mark;
      this.anchor = anchor;
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      var mark = this.mark,
          anchor = this.anchor,
          wrappers = mark.wrappers,
          w = wrappers.length;
      anchor.id = '';
      mark.keyData.bookmark = false;

      while (w--) {
        wrappers[w].classList.remove('textmarker-bookmark');
      }
    }
  }, {
    key: "scrollIntoView",
    value: function scrollIntoView(bm) {
      if (bm || (bm = window.document.getElementById('textmarker-bookmark-anchor'))) bm.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }]);

  return _BOOKMARK;
}();

exports["default"] = _BOOKMARK;

/***/ }),

/***/ "./content/page-injections/modules/contextmenu.js":
/*!********************************************************!*\
  !*** ./content/page-injections/modules/contextmenu.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  events: {
    ENV: {
      'toggled:addon': 'activate'
    }
  },
  active: false,
  autoinit: function autoinit() {
    this.activate(true);
  },
  activate: function activate(on) {
    if (on && !this.active) {
      this.registerHandler();
      this.active = true;
    } else if (!on && this.active) {
      this.removeListeners();
      this.active = false;
    }
  },
  registerHandler: function registerHandler() {
    this.addListener('mousedown', function (e) {
      if (e.button === 2) {
        if (e.target.classList.contains('textmarker-highlight')) {
          _store2["default"].tmid = e.target.getAttribute('data-tm-id');
        } else _store2["default"].tmid = '';
      }
    }, window.document);
  }
});

/***/ }),

/***/ "./content/page-injections/modules/mark-item.js":
/*!******************************************************!*\
  !*** ./content/page-injections/modules/mark-item.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _MARK = /*#__PURE__*/function () {
  function _MARK(marker, key, preSettings, immut) {
    _classCallCheck(this, _MARK);

    var selection, defaults;
    this.marker = marker;
    selection = this.selection = marker.selection;
    this.immut = _store2["default"].redescribing ? marker.isImmut : immut;
    defaults = {
      style: '',
      bookmark: false,
      conds: null,
      text: selection.text,
      note: null
    };

    for (var d in defaults) {
      if (!preSettings.hasOwnProperty(d)) {
        preSettings[d] = defaults[d];
      }
    }

    preSettings.id = preSettings.id || ++marker.idcount;
    this.id = preSettings.id;
    this.simple = selection.simple;
    var range = this.range = selection.range;
    this.startOffset = range.startOffset;
    this.endOffset = range.endOffset;
    this.wrappers = null;
    this.containers = [];
    this.anchorNodePosition = null;
    this.focusNodePosition = null;
    this.keyData = {
      id: preSettings.id,
      key: key,
      style: preSettings.style,
      conds: preSettings.conds,
      text: preSettings.text,
      bookmark: preSettings.bookmark,
      note: preSettings.note,
      synced: preSettings.synced
    };

    if (this.immut && (_store2["default"].redescribing || !this.keyData.conds)) {
      this.describe_immut();
    }
  }

  _createClass(_MARK, [{
    key: "create",
    value: function create(range) {
      range = range || this.range;
      var selection = this.selection,
          style = this.keyData.style,
          nodes = selection.nodes,
          n = nodes.length,
          wrappers = this.wrappers = this.wrappers || this.createWrappers(style, n),
          i = 0,
          lastIndex = n - 1,
          node;

      for (; i < n; i++) {
        node = nodes[i];
        range.selectNodeContents(node);
        if (!i) range.setStart(node, this.startOffset);
        if (i === lastIndex) range.setEnd(node, this.endOffset);
        range.surroundContents(wrappers[i]);
        this.containers.push(wrappers[i].parentNode);
        node.parentNode.normalize();
      }

      this.definePosition(lastIndex);
      if (this.keyData.bookmark) this.marker.setBookmark(this, false);
      if (!this.immut && (_store2["default"].redescribing || !this.keyData.conds)) this.describe();
      this.registerClickListeners();
      return this;
    }
  }, {
    key: "registerClickListeners",
    value: function registerClickListeners() {
      var wrappers = this.wrappers;

      var _iterator = _createForOfIteratorHelper(wrappers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var wrapper = _step.value;
          wrapper.addEventListener('click', this.marker.proxy(this, this.onClick), false);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var event;

      if (e.target) {
        e.stopPropagation();
        _store2["default"].tmid = e.target.getAttribute('data-tm-id');
        event = 'clicked:mark';
      } else {
        _store2["default"].tmid = e + '_0';
        event = 'activated:mark';
      }

      this.marker.emit(event, {
        id: this.id,
        bookmark: !!this.keyData.bookmark,
        note: !!this.keyData.note
      });
    }
  }, {
    key: "definePosition",
    value: function definePosition(n, includingOffsets) {
      var wrappers = this.wrappers;
      n = typeof n === 'number' ? n : wrappers.length - 1;
      var firstWrapper = wrappers[0];
      var lastWrapper = wrappers[n];
      var firstParent = firstWrapper.parentNode;
      var lastParent = lastWrapper.parentNode;
      var anchorPrev, focusPrev;
      this.anchorNodePosition = this.whichChild(firstParent, firstWrapper, true) - 1;
      this.focusNodePosition = this.whichChild(lastParent, lastWrapper, true);
      anchorPrev = firstWrapper.previousSibling;
      focusPrev = lastWrapper.previousSibling;
      if (anchorPrev && anchorPrev.nodeType === 1) this.anchorNodePosition += 1;
      if (!focusPrev || focusPrev.nodeType === 3 || firstParent === lastParent) this.focusNodePosition -= 1;
      if (this.anchorNodePosition < 0) this.anchorNodePosition = 0;
      if (this.focusNodePosition < 0) this.focusNodePosition = 0;

      if (includingOffsets) {
        this.startOffset = anchorPrev && anchorPrev.data ? anchorPrev.data.length : 0;
        this.endOffset = this.simple ? this.startOffset + this.keyData.text.length : this.endOffset;
      }

      return this;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.definePosition(undefined, true).describe();
      return this;
    }
  }, {
    key: "undo",
    value: function undo() {
      var containers = this.containers,
          wrappers = this.wrappers,
          w = wrappers.length,
          container,
          wrapper;

      while (w--) {
        container = containers[w];
        wrapper = wrappers[w];
        container.replaceChild(wrapper.firstChild, wrapper);
        container.normalize();
      }

      return this;
    }
  }, {
    key: "redo",
    value: function redo() {
      var containers = this.containers,
          selection = this.selection.self,
          range = this.range;
      range.setStart(containers[0].childNodes[this.anchorNodePosition], this.startOffset);
      range.setEnd(containers[containers.length - 1].childNodes[this.focusNodePosition], this.endOffset);
      selection.removeAllRanges();
      selection.addRange(range);
      this.selection.collectNodes();
      selection.collapseToStart();
      return this.create();
    }
  }, {
    key: "whichChild",
    value: function whichChild(parent, child, includingTextNodes) {
      if (!parent || !child) {
        return null;
      }

      var children = includingTextNodes || child.nodeType === 3 ? parent.childNodes : parent.children,
          c = children.length,
          i = 0;

      for (; i < c; i++) {
        if (children[i] === child) {
          return i;
        }
      }
    }
  }, {
    key: "createWrappers",
    value: function createWrappers(style, number) {
      var wrappers = [],
          i = 0,
          wrapper;

      for (; i < number; i++) {
        wrapper = window.document.createElement('span');
        wrapper.classList.add('textmarker-highlight');
        wrapper.setAttribute('style', style.replace(/;/g, '!important;'));
        wrapper.setAttribute('data-tm-id', this.id + '_' + i); //wrapper.setAttribute('contextmenu', 'textmarker-ctm');

        wrappers.push(wrapper);
      }

      return wrappers;
    }
  }, {
    key: "describe",
    value: function describe() {
      var range = this.range;
      var selection = this.selection;
      var start = range.startContainer;
      var end = range.endContainer;
      var singleNode = this.simple;
      var parent = this.wrappers[0].parentNode;
      var parentIsTM = parent.hasAttribute('data-tm-id');
      var grampa = parent.parentNode;
      var grandgrampa = grampa.parentNode || 0;
      var fTNP = this.anchorNodePosition;
      this.keyData.conds = {
        o: this.startOffset,
        n1: parentIsTM ? 'TM' : parent.nodeName,
        p1: fTNP,
        n2: grampa.nodeName,
        p2: this.whichChild(grampa, parent),
        p3: grandgrampa ? this.whichChild(grandgrampa, grampa) : undefined,
        p4: grandgrampa && grandgrampa.parentNode ? this.whichChild(grandgrampa.parentNode, grandgrampa) : undefined
      };
      return this.keyData.conds;
    }
  }, {
    key: "describe_immut",
    value: function describe_immut() {
      var selection = this.selection;
      var startPosition = [];
      var endPosition = [];
      var body = document.body;
      var start = selection.anchorNode,
          end = selection.focusNode;

      while (start !== body) {
        startPosition.push(this.whichChild(start.parentNode, start));
        start = start.parentNode;
      }

      while (end !== body) {
        endPosition.push(this.whichChild(end.parentNode, end));
        end = end.parentNode;
      }

      this.keyData.conds = {
        s: {
          o: this.startOffset,
          p: startPosition
        },
        e: {
          o: this.endOffset,
          p: endPosition
        }
      };
      return this.keyData.conds;
    }
  }]);

  return _MARK;
}();

exports["default"] = _MARK;

/***/ }),

/***/ "./content/page-injections/modules/marker-popup.js":
/*!*********************************************************!*\
  !*** ./content/page-injections/modules/marker-popup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  events: {
    ENV: {
      'updated:marker-settings': 'recreate',
      'updated:mark-method-settings': 'update',
      'changed:selection': 'onSelectionChange'
    }
  },
  handler: null,
  appended: false,
  height: 0,
  autoinit: function autoinit() {
    var _this = this;

    this.update().then(function () {
      return _this.create();
    });
  },
  recreate: function recreate() {
    var _this2 = this;

    this.remove().update().then(function () {
      return _this2.create();
    });
  },
  update: function update() {
    var _this3 = this;

    return _store2["default"].get('settings').then(function (settings) {
      _this3.active = settings.misc.markmethod === 'popup';
      _this3.markers = settings.markers;
    });
  },
  create: function create() {
    var popup = this.el = window.document.createElement('tmpopup');
    var bgColorRegExp = /background-color:(#[a-f0-9]{6})/;
    var bgColor, colorBtn;

    for (var m in this.markers) {
      bgColor = this.markers[m].style.match(bgColorRegExp);

      if (bgColor) {
        colorBtn = window.document.createElement('tmpopupcolor');
        popup.appendChild(colorBtn);
        colorBtn.style.background = bgColor.pop();
        colorBtn.id = 'tmpopupcolor--' + m;
      }
    }
  },
  remove: function remove() {
    if (this.appended) {
      window.document.body.removeChild(this.el);
      this.el.removeEventListener('mousedown', this.handler, false);
      this.appended = false;
    }

    return this;
  },
  show: function show() {
    var popup = this.el;
    var style = popup.style;
    var popupHeight;

    if (!this.appended) {
      window.document.body.appendChild(popup);
      var handler = this.handler = this.onMousedown.bind(this);
      popup.addEventListener('mousedown', handler, false);
      this.appended = true;
      var selectionPosition = window.getSelection().getRangeAt(0).getBoundingClientRect();
      style.top = selectionPosition.top - selectionPosition.height + window.scrollY + 'px';
      style.left = selectionPosition.left + window.scrollX + 'px';
      popupHeight = popup.offsetHeight;
      style.top = Math.max(0, parseInt(style.top) - popupHeight) + 'px';
    } else if ((popupHeight = popup.offsetHeight) !== this.height) {
      style.top = parseInt(style.top) + popupHeight - this.height + 'px';
    }

    this.height = popupHeight;
  },
  onSelectionChange: function onSelectionChange(selected) {
    if (this.active) {
      if (!selected) this.remove();else this.show();
    } else if (this.appended) {
      this.remove();
    }
  },
  onMousedown: function onMousedown(e) {
    e.preventDefault();
    e.stopPropagation();
    var el = e.target;

    if (el.nodeName === 'TMPOPUPCOLOR') {
      this.emit('clicked:popup-marker', el.id.split('--').pop());
    }
  }
});

/***/ }),

/***/ "./content/page-injections/modules/marker.js":
/*!***************************************************!*\
  !*** ./content/page-injections/modules/marker.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _globalSettings = __webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js");

var _globalSettings2 = _interopRequireDefault(_globalSettings);

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

var _markItem = __webpack_require__(/*! ./mark-item */ "./content/page-injections/modules/mark-item.js");

var _markItem2 = _interopRequireDefault(_markItem);

var _bookmark = __webpack_require__(/*! ./bookmark */ "./content/page-injections/modules/bookmark.js");

var _bookmark2 = _interopRequireDefault(_bookmark);

var _selection = __webpack_require__(/*! ./selection */ "./content/page-injections/modules/selection.js");

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'set:entries': 'updateID',
      'pressed:marker-key': 'onMarkerKey',
      'pressed:hotkey': 'onHotkey',
      'clicked:popup-marker': 'onMarkerKey',
      'selection-end': 'onMarkerKey',
      'restored:range': 'recreate',
      'finished:all-restorations': 'onFinishedRestoration',
      'ctx:b': 'setBookmark',
      'ctx:-b': 'removeBookmark',
      'ctx:d': 'remove',
      'ctx:m': 'onMarkerKey',
      'ctx:n': 'addNote',
      'ctx:c': 'copy',
      'updated:note': 'saveNote',
      'removed:note': 'saveNote',
      'changed:note-color': 'saveNote',
      'changed:note-pos': 'saveNote',
      'changed:note-size': 'saveNote',
      'sidebar:highlight': 'onMarkerKey',
      'sidebar:delete-highlight': 'remove',
      'sidebar:bookmark': 'setBookmark',
      'sidebar:delete-bookmark': 'removeBookmark',
      'sidebar:note': 'addNote',
      'sidebar:immut': 'immut',
      'sidebar:save-changes': 'save',
      'sidebar:retry-restoration': 'resume',
      'restorer:retry-restoration': 'resume',
      'sidebar:undo': 'undo',
      'sidebar:redo': 'redo',
      'sidebar:copy': 'copy',
      'sidebar:next-mark': 'gotoMark',
      'sidebar:scroll-to-bookmark': 'scrollToBookmark',
      'scroll-to-bookmark': 'scrollToBookmark',
      'clicked:mark': 'gotoMark',
      'hashchange': 'onHashChange'
    }
  },
  selection: null,
  done: [],
  undone: [],
  visuallyOrderedMarks: [],
  visuallyOrderedMarkIDs: [],
  bookmark: null,
  removedBookmark: null,
  idcount: 0,
  markScrollPos: -1,
  updateID: function updateID(entries) {
    var l = entries.length;
    var locked = _store2["default"].locked;
    var ids = [];

    for (var i = 0, entry; i < l; i++) {
      entry = entries[i];

      if (!locked && entry.idcount) {
        return this.idcount = entry.idcount;
      } else {
        var marks = (entry.marks || []).concat(entry.lost || []),
            d = marks.length;

        if (d) {
          while (d--) {
            ids.push(marks[d].id);
          }
        }
      }
    }

    this.idcount = Math.max.apply(null, ids);
  },
  mark: function mark(key, data, immut) {
    this.undone.length = 0;
    var mark = new _markItem2["default"](this, key, data, immut).create();
    if (data.autonote) this.emit('add:note', mark, data.autonote);
    return mark;
  },
  undo: function undo(noAutosave) {
    if (_store2["default"].locked) return;
    var done = this.done;

    if (done.length) {
      var mark = this.done.pop();
      var id = mark.id;
      this.undone.push(mark.undo());
      if (this.bookmark) this.undoBookmark();
      this.emit('removed:mark', id);
    }

    noAutosave || this.autosave();
  },
  redo: function redo(noAutosave) {
    if (_store2["default"].locked) return;
    var undone = this.undone;

    if (undone.length) {
      var mark = this.undone.pop();
      this.done.push(mark.redo());
      this.emit('restore:notes', [mark]);
    }

    noAutosave || this.autosave();
  },
  cutOut: function cutOut(i) {
    var marker = this,
        done = this.done,
        l = done.length,
        toBeRemoved = [i],
        indices = [i],
        mark,
        smallestID;

    function findIndicesOfAffectedMarks(j) {
      for (var x = j + 1; x < l; x++) {
        mark = done[x];

        if (marker.marksIntersect(done[j], mark)) {
          if (!toBeRemoved.includes(x)) toBeRemoved.push(x);
          indices.push(x);
        }
      }

      indices.sort();
      toBeRemoved.sort();
    }

    while (indices.length) {
      findIndicesOfAffectedMarks(indices.shift());
    }

    smallestID = Math.min.apply(null, toBeRemoved);

    while (toBeRemoved.length) {
      this.done.splice(toBeRemoved.pop(), 1)[0].undo();
      this.undone.pop();
    }

    return smallestID;
  },
  remove: function remove(id) {
    if (_store2["default"].locked) return;
    id = id ? id : _store2["default"].tmid ? _store2["default"].tmid : '';
    if (!id) return this.undo();
    var mark = this.getById(id.split('_')[0]),
        done = this.done,
        l = done.length,
        position = done.indexOf(mark),
        smallestID,
        i;

    if (position === l - 1) {
      this.undo();
      this.undone.pop();
    } else {
      if (!this.undone.length) {
        smallestID = this.cutOut(position);
        this.done.forEach(function (mark) {
          if (mark.id > smallestID) mark.resume();
        });
        this.autosave();
      } else {
        i = this.undone.length;

        while (this.undone.length) {
          this.redo(true);
        }

        smallestID = this.cutOut(position);
        this.done.forEach(function (mark) {
          if (mark.id > smallestID) mark.resume();
        });

        while (i--) {
          this.undo(true);
        }

        this.autosave();
      }
    }

    this.emit('removed:mark', id[0]);
  },
  resume: function resume(arg, options) {
    Array.from(document.getElementsByClassName('textmarker-highlight')).forEach(function (highlight) {
      var container = highlight.parentNode;
      container.replaceChild(document.createTextNode(highlight.textContent), highlight);
      container.normalize();
    });
    this.done = [];
    this.undone = [];
    this.visuallyOrderedMarks = [];
    this.visuallyOrderedMarkIDs = [];
    this.bookmark = null;
    this.removedBookmark = null;
    this.markScrollPos = -1;
    var entry = !arg && _store2["default"].name && _store2["default"].entries[_store2["default"].name] ? _store2["default"].entries[_store2["default"].name] : null;
    if (!options || !options.silent) this.emit('resumed:markers', entry);
  },
  immut: function immut(immutable) {
    this.isImmut = immutable;
    _store2["default"].redescribing = true;
    _store2["default"].immut = immutable;
    this.resume();
  },
  save: function save() {
    var _this = this;

    var iframe = _store2["default"].iframe;
    var locked = _store2["default"].locked;

    _store2["default"].get('naming').then(function (naming) {
      if (_store2["default"].isNew || locked) {
        if (!locked && naming === 'custom') {
          _this.request('name:entry?').then(function (granted) {
            if (granted) {
              var sub = iframe ? browser.i18n.getMessage('nm_message_iframe') : '';
              _store2["default"].name = window.prompt(browser.i18n.getMessage('nm_message', sub));
              if (_store2["default"].name) _this.emit('save:entry?', _this.retrieveEntry());
            }
          });
        } else {
          var confirmed = true;
          if (iframe) confirmed = window.confirm(browser.i18n.getMessage('nm_message_iframe'));

          if (confirmed) {
            _this.emit('save:entry?', _this.retrieveEntry());
          }
        }
      } else {
        _this.emit('update:entry?', _this.retrieveEntry());
      }
    });
  },
  autosave: function autosave() {
    var _this2 = this;

    _store2["default"].get('autosave').then(function (autosave) {
      if (autosave) _this2.save();else _this2.emit('unsaved-changes');
    });
  },
  copy: function copy(granted) {
    if (_store2["default"].url.search(/^https/) === -1) {
      alert(browser.i18n.getMessage('nm_message_copy_httpsonly'));
    } else if (granted === false) {
      alert(browser.i18n.getMessage('nm_message_copy_nopermission'));
    } else if (!navigator.clipboard || !navigator.clipboard.writeText) {
      alert(browser.i18n.getMessage('nm_message_copy_nosupport'));
    } else {
      var mark = this.findMark();
      if (!mark) return false;
      var range = mark.range;
      var selection = mark.selection.self;
      var wrappers = mark.wrappers;
      range.setStart(wrappers[0], 0);
      range.setEnd(wrappers[wrappers.length - 1], 1);
      selection.addRange(range);
      navigator.clipboard.writeText(selection.toString().trim().replace(/(\r\n){1,}/g, '\r\n'));
      selection.collapseToStart();
    }
  },
  store: function store(mark, save, order) {
    this.done.push(mark);
    if (save !== false) this.autosave();
    if (order) this.orderMarksVisually();
  },
  recreate: function recreate(mark) {
    this.selection = new _selection2["default"]();
    this.store(this.mark(mark.key, mark), false, false);
  },
  onFinishedRestoration: function onFinishedRestoration() {
    if (!this.done.length) {
      return this.emit('completed:restoration-process');
    }

    this.emit('restore:notes', this.done);

    if (_store2["default"].locked) {
      var mark = this.done[this.done.length - 1];

      if (_store2["default"].name === mark.keyData.text.trim().substring(0, _globalSettings2["default"].MAX_ENTRY_NAME_CHARS - 1)) {
        this.gotoMark(mark);
      }
    } else {
      this.sortById();
      this.scrollToBookmark();
    }

    this.orderMarksVisually();

    if (_store2["default"].redescribing) {
      _store2["default"].redescribing = false;
      this.save();
    }

    this.emit('completed:restoration-process');
  },
  addNote: function addNote(id) {
    this.emit('add:note', this.findMark(id));
  },
  saveNote: function saveNote(id) {
    if (!_store2["default"].locked) return this.autosave();
    var mark = this.getById(id).keyData;
    var synced = typeof mark.synced === 'boolean' ? mark.synced : _store2["default"].area_history === 'sync';
    var entry = {
      marks: [mark],
      name: mark.text.trim().substring(0, _globalSettings2["default"].MAX_ENTRY_NAME_CHARS - 1),
      synced: synced
    };
    this.emit('update:entry?', entry);
  },
  gotoMark: function gotoMark(mark) {
    var markElements = this.visuallyOrderedMarks;
    var el, pos, id;

    if (mark || mark === 0) {
      if (typeof mark === 'number') {
        this.markScrollPos = mark + 1;
        el = markElements[mark];
        id = el.getAttribute('data-tm-id').split('_')[0];
      } else {
        id = mark.id;
        el = document.querySelector('.textmarker-highlight[data-tm-id="' + id + '_0"]');
      }
    } else {
      pos = this.markScrollPos;
      el = markElements[pos];
      id = el.getAttribute('data-tm-id').split('_')[0];
    }

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    if (!mark || typeof mark === 'number') this.getById(id).onClick(id);
    this.indicateMark(id);
  },
  gotoNextMark: function gotoNextMark(dir) {
    var l = this.visuallyOrderedMarks.length;
    this.markScrollPos += dir;
    if (this.markScrollPos < 0) this.markScrollPos = l - 1;else if (this.markScrollPos >= l) this.markScrollPos = 0;
    this.gotoMark();
  },
  indicateMark: function indicateMark(id) {
    Array.from(document.querySelectorAll('.textmarker-highlight--active')).forEach(function (tm) {
      return tm.classList.remove('textmarker-highlight--active');
    });
    var tms = Array.from(document.querySelectorAll('.textmarker-highlight[data-tm-id^="' + id + '_"]'));
    tms.forEach(function (tm) {
      return tm.classList.add('textmarker-highlight--active');
    });
    window.setTimeout(function () {
      return tms.forEach(function (tm) {
        return tm.classList.remove('textmarker-highlight--active');
      });
    }, 2000);
  },
  setBookmark: function setBookmark(m, save) {
    if (_store2["default"].locked) return;
    var bookmark = this.bookmark,
        mark = this.findMark(m);
    if (!mark) return false;

    if (bookmark) {
      bookmark.remove();
      this.emit('removed:bookmark');
    }

    this.bookmark = new _bookmark2["default"]().set(mark);
    this.emit('added:bookmark');
    if (save !== false) this.autosave();
  },
  undoBookmark: function undoBookmark() {
    this.bookmark = null;
    this.emit('removed:bookmark');
  },
  removeBookmark: function removeBookmark() {
    if (_store2["default"].locked) return;
    var bookmark = this.bookmark;
    if (!bookmark) return false;
    bookmark.remove();
    this.bookmark = null;
    this.removedBookmark = bookmark;
    this.emit('removed:bookmark');
    this.autosave();
  },
  scrollToBookmark: function scrollToBookmark() {
    var bookmark = this.bookmark;
    if (bookmark) bookmark.scrollIntoView();
  },
  getById: function getById(id, pos) {
    var done = this.done,
        d = done.length,
        mark;

    while (d--) {
      mark = done[d];
      if (mark.keyData.id == id) return pos ? {
        mark: mark,
        position: d
      } : mark;
    }

    return pos ? {
      mark: null,
      position: null
    } : false;
  },
  findMark: function findMark(x) {
    x = x ? x : _store2["default"].tmid ? _store2["default"].tmid : '';
    var mark = !x ? this.done[this.done.length - 1] : typeof x === 'string' ? this.getById(x.split('_')[0]) : x;
    return mark;
  },
  sortById: function sortById() {
    this.done.sort(function (mark1, mark2) {
      return mark1.id - mark2.id;
    });
  },
  orderMarksVisually: function orderMarksVisually() {
    this.visuallyOrderedMarks = Array.from(document.querySelectorAll('.textmarker-highlight[data-tm-id$="_0"]')).sort(function (m1, m2) {
      var bb1 = m1.getBoundingClientRect(),
          bb2 = m2.getBoundingClientRect(),
          top1 = bb1.top,
          top2 = bb2.top;
      if (top1 < top2) return -1;else if (top2 < top1) return 1;else {
        if (bb1.left < bb2.left) return -1;
        return 1;
      }
    });
    this.visuallyOrderedMarkIDs = this.visuallyOrderedMarks.map(function (mark) {
      return parseInt(mark.getAttribute('data-tm-id'));
    });
    if (!_store2["default"].iframe) this.emit('visually-ordered:marks', this.visuallyOrderedMarkIDs);
  },
  marksIntersect: function marksIntersect(mark1, mark2) {
    var wrappers1 = mark1.wrappers,
        w1 = wrappers1.length,
        id1 = mark1.id,
        wrappers2 = mark2.wrappers,
        id2 = mark2.id,
        w2,
        tms,
        l;

    while (w1--) {
      w2 = wrappers2.length;

      while (w2--) {
        tms = wrappers1[w1].querySelectorAll('[data-tm-id]');
        l = tms.length;

        while (l--) {
          if (tms[l].getAttribute('data-tm-id')[0] == id2) return true;
        }
      }
    }

    return false;
  },
  onMarkerKey: function onMarkerKey(e, key) {
    var _this3 = this;

    var selection = this.selection = new _selection2["default"]();
    if (!selection.nodes) return false;

    if (e) {
      if (typeof e === 'string') key = e;else this.preventDefault(e);
    } else {
      key = key || 'm';
    }

    _store2["default"].get('settings').then(function (settings) {
      if (_store2["default"].isNew) {
        _this3.isImmut = typeof _this3.isImmut === 'boolean' ? _this3.isImmut : !!settings.history.immut;
      } else {
        _this3.isImmut = typeof _this3.isImmut === 'boolean' ? _this3.isImmut : _store2["default"].immut;
      }

      _this3.store(_this3.mark(key, settings.markers[key], _this3.isImmut), true, true);
    });
  },
  onHotkey: function onHotkey(key) {
    var self = this;

    switch (key) {
      case 'z':
        self.undo();
        break;

      case 'y':
        self.redo();
        break;

      case 's':
        self.save();
        break;

      case 'b':
        self.setBookmark();
        break;

      case 'arrowup':
        self.gotoNextMark(-1);
        break;

      case 'arrowdown':
        self.gotoNextMark(1);
        break;

      case 'd':
        self.remove();
        break;

      case 'c':
        self.copy();
        break;

      case 'n':
        self.addNote();
        break;
    }
  },
  preventDefault: function preventDefault(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }

    return this;
  },
  retrieveEntry: function retrieveEntry() {
    var locked = _store2["default"].locked;
    var isNew = _store2["default"].isNew;
    var name = _store2["default"].name;
    var entry = !locked && _store2["default"].entries[name] ? _store2["default"].entries[name] : {};
    entry.marks = this.collectMarks();
    entry.last = new Date().getTime();
    entry.bookmarked = !!this.bookmark;
    entry.title = window.document.title;
    entry.count = entry.marks.length;
    entry.idcount = this.idcount;
    entry.immut = typeof this.isImmut === 'boolean' ? this.isImmut : entry.immut;

    if (isNew || locked) {
      entry.first = entry.last;
      entry.url = _store2["default"].hashSensitive ? window.document.URL : (0, _utils._HASHLESS)(window.document.URL);
      entry.synced = _store2["default"].area_history === 'sync';
      entry.locked = locked;
      entry.hashSensitive = _store2["default"].hashSensitive;
    }

    entry.name = locked ? entry.marks[0].text.trim().substring(0, _globalSettings2["default"].MAX_ENTRY_NAME_CHARS - 1) : isNew || !entry.name ? name : entry.name;
    return entry;
  },
  collectMarks: function collectMarks() {
    var done = this.done;
    var l = done.length;
    var marks = [];

    if (_store2["default"].locked) {
      done = [done[l - 1]];
    }

    l = done.length;

    for (var m = 0, kD; m < l; m++) {
      kD = done[m].keyData;
      delete kD.synced;
      marks.push(kD);
    }

    return marks;
  },
  onHashChange: function onHashChange() {
    this.resume(null, {
      silent: true
    });
    this.emit('resumed-on-hashchange');
  }
});

/***/ }),

/***/ "./content/page-injections/modules/note.js":
/*!*************************************************!*\
  !*** ./content/page-injections/modules/note.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (mark, color) {
  var BODY = window.document.body;
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'updated:misc-settings': 'addMarkListeners',
        'drag:note': 'onDrag',
        'dragstop:note': 'onDragEnd'
      },
      DOM: {
        click: {
          'tmnotedelete': '_delete',
          'tmnoteminimize': 'hide',
          'tmnotecustomize': 'togglePalette',
          'tmnotecolor': 'changeColor',
          'textarea': 'bringUpFront'
        },
        keyup: {
          'textarea': 'attemptUpdate'
        },
        mousedown: {
          'tmnoteheader': 'onDragStart'
        },
        touchstart: {
          'tmnoteheader': 'onDragStart'
        }
      }
    },
    addListenersManually: true,
    el: null,
    mark: mark,
    color: color || '',
    markClickHandler: null,
    text: '',
    visible: false,
    recentlyUpdated: false,
    settingsMode: false,
    pos: {
      l: null,
      t: null
    },
    size: {
      w: null,
      h: null
    },
    dragDX: 0,
    dragDY: 0,
    mutationObserver: null,
    autoinit: function autoinit() {
      this.adjustNoteDataObject();
      this.createNoteElement();
      this.addListeners();
      this.addMarkListeners();
    },
    adjustNoteDataObject: function adjustNoteDataObject() {
      var noteData = this.mark.keyData.note;

      if (typeof noteData === 'string') {
        this.mark.keyData.note = {
          text: noteData,
          color: this.color || 'yellow'
        };
      } else if (!noteData) {
        this.mark.keyData.note = {
          text: noteData,
          color: this.color || _store2["default"].noteColor
        };
      } else {
        this.pos = noteData.pos || this.pos;
        this.size = noteData.size || this.size;
      }

      this.fs = this.mark.keyData.note.fs = this.mark.keyData.note.fs || _store2["default"].noteFontSize;
    },
    createNoteElement: function createNoteElement() {
      var _this = this;

      var note = this.el = document.createElement('tmnote');
      var header = this.header = document.createElement('tmnoteheader');
      var actions = this.actions = document.createElement('tmnoteactions');
      var del = this.del = document.createElement('tmnotedelete');
      var min = this.min = document.createElement('tmnoteminimize');
      var gear = document.createElement('tmnotecustomize');
      var palette = this.palette = document.createElement('tmnotepalette');
      var p = this.textElement = document.createElement('textarea');
      var text = this.mark.keyData.note.text;
      var color = this.color = this.mark.keyData.note.color || _store2["default"].noteColor;
      _store2["default"].noteColor = color;
      var delText = document.createTextNode(String.fromCharCode(10005));
      var minText = document.createTextNode(String.fromCharCode(0x2013));
      var gearText = document.createTextNode(String.fromCharCode(0x2699));
      ['green', 'white', 'yellow', 'orange', 'red', 'purple', 'blue', 'turquoise'].forEach(function (c) {
        var color = document.createElement('tmnotecolor');
        color.className = 'tmnotecolor--' + c;
        color.setAttribute('data-color', c);
        palette.appendChild(color);
      });
      p.setAttribute('data-tm-note', true);
      del.appendChild(delText);
      min.appendChild(minText);
      gear.appendChild(gearText);
      note.appendChild(header);
      actions.appendChild(gear);
      actions.appendChild(del);
      actions.appendChild(min);
      note.appendChild(actions);
      note.appendChild(p);
      note.classList.add('tmnote--' + color);
      if (text) p.value = text;
      p.addEventListener('blur', function (e) {
        return _this.attemptUpdate(e, e.target, true);
      }, false);
    },
    _delete: function _delete() {
      this.remove();
      this.mark.keyData.note = '';
    },
    remove: function remove() {
      this.hide();
      this.removeMarkListeners();
      this.emit('removed:note', this.mark.id);
    },
    attemptUpdate: function attemptUpdate(e, el, force) {
      var _this2 = this;

      if (e.keyCode === 27) this.hide();

      if (force) {
        this.update(el);
      } else if (!this.recentlyUpdated) {
        this.recentlyUpdated = true;
        window.setTimeout(function () {
          return _this2.update(el);
        }, 3000);
      }
    },
    update: function update(el) {
      this.mark.keyData.note.text = el.value;
      this.emit('updated:note', this.mark.id);
      this.recentlyUpdated = false;
    },
    show: function show() {
      var el = this.el;
      var innerWindowWidth = window.innerWidth;
      var pos, left, top;

      if (this.pos.l !== null) {
        pos = this.pos;
        top = pos.t;
      } else {
        pos = this.getPosition();
        left = this.pos.l = pos.l;
        top = this.pos.t = pos.t + pos.offset;
      }

      left = this.pos.l = pos.l;

      if (left + 340 > innerWindowWidth) {
        left = this.pos.l = innerWindowWidth - 340;
      }

      var size = this.size.w ? "width:".concat(this.size.w, ";height:").concat(this.size.h, ";") : '';
      var fontSize = "font-size: ".concat(this.fs, "px !important;");
      BODY.appendChild(el);
      el.setAttribute('style', "display:block;top:".concat(top, "px;left:").concat(left, "px;"));
      el.getElementsByTagName('textarea')[0].setAttribute('style', size + fontSize);
      this.connectMutationObserver();
      this.visible = true;
      this.textElement.focus();
    },
    bringUpFront: function bringUpFront() {
      var _this3 = this;

      Array.from(BODY.getElementsByTagName('tmnote')).forEach(function (note) {
        if (note === _this3.el) note.style.zIndex = 2147483647;else note.style.zIndex = 2147483646;
      });
    },
    hide: function hide() {
      BODY.removeChild(this.el);
      this.mutationObserver.disconnect();
      this.visible = false;
    },
    toggle: function toggle() {
      if (this.visible) this.hide();else this.show();
    },
    togglePalette: function togglePalette() {
      if (this.settingsMode) {
        this.el.removeChild(this.palette);
      } else {
        this.el.appendChild(this.palette);
      }

      this.settingsMode = !this.settingsMode;
    },
    changeColor: function changeColor(e, el) {
      this.el.classList.remove('tmnote--' + this.color);
      var color = this.color = _store2["default"].noteColor = el.getAttribute('data-color');
      this.el.classList.add('tmnote--' + color);
      this.mark.keyData.note.color = color;
      this.togglePalette();
      this.emit('changed:note-color', this.mark.id);
    },
    addMarkListeners: function addMarkListeners() {
      var _this4 = this;

      _store2["default"].get('noteonclick').then(function (noteonclick) {
        if (noteonclick) {
          if (!!_this4.markClickHandler) return;

          var handler = _this4.markClickHandler = function () {
            return _this4.toggle();
          };

          var _iterator = _createForOfIteratorHelper(_this4.mark.wrappers),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var wrapper = _step.value;
              wrapper.addEventListener('click', handler, false);
              wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          _this4.removeMarkListeners();
        }
      });
    },
    removeMarkListeners: function removeMarkListeners() {
      if (!this.markClickHandler) return;

      var _iterator2 = _createForOfIteratorHelper(this.mark.wrappers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var wrapper = _step2.value;
          wrapper.removeEventListener('click', this.markClickHandler, false);
          wrapper.removeAttribute('title');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    connectMutationObserver: function connectMutationObserver() {
      var textarea = this.el.getElementsByTagName('textarea')[0];
      var config = {
        attributeFilter: ['style']
      };
      var observer = this.mutationObserver = this.mutationObserver || new MutationObserver(this.proxy(this, this.saveSize));
      observer.observe(textarea, config);
    },
    getPosition: function getPosition() {
      var rect = this.mark.wrappers[this.mark.wrappers.length - 1].getBoundingClientRect();
      return {
        t: rect.top + window.pageYOffset - BODY.clientTop,
        l: rect.left + window.pageXOffset - BODY.clientLeft,
        offset: rect.height
      };
    },
    onDragStart: function onDragStart(e, el) {
      e.preventDefault();
      this.dragDX = e.pageX - this.pos.l;
      this.dragDY = e.pageY - this.pos.t;
      this.emit('start:drag', this.mark.id);
    },
    onDrag: function onDrag(note, e) {
      if (note === this.mark.id) {
        var el = this.el;
        var left = this.pos.l = e.pageX - this.dragDX;
        var top = this.pos.t = e.pageY - this.dragDY;
        el.style.left = left + 'px';
        el.style.top = top + 'px';
      }
    },
    onDragEnd: function onDragEnd() {
      this.mark.keyData.note.pos = this.pos;
      this.emit('changed:note-pos', this.mark.id);
    },
    saveSize: function saveSize(mutationsList) {
      var style = mutationsList[0].target.style;
      this.size = this.mark.keyData.note.size = {
        w: style.width,
        h: style.height
      };
      this.emit('changed:note-size', this.mark.id);
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/***/ }),

/***/ "./content/page-injections/modules/notes.js":
/*!**************************************************!*\
  !*** ./content/page-injections/modules/notes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

var _note = __webpack_require__(/*! ./note */ "./content/page-injections/modules/note.js");

var _note2 = _interopRequireDefault(_note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

new _utils._MODULE({
  events: {
    ENV: {
      'add:note': 'addAndShow',
      'removed:note': 'removeNoteStorage',
      'restore:notes': 'restore',
      'removed:mark': 'removeNote',
      'toggle:notes': 'toggleAll',
      'sidebar:toggle-notes': 'toggleAll',
      'updated:misc-settings': 'updateStyle',
      'start:drag': 'startDraggingNote',
      'opened:sidebar': 'sendNotesState',
      'finished:all-restorations': 'report'
    }
  },
  notes: {},
  toggle: null,
  dragHandler: null,
  dragStopHandler: null,
  autoinit: function autoinit() {
    this.updateStyle();
  },
  add: function add(mark, color) {
    var note = this.notes[mark.id];
    if (note) return note;
    if (!_store2["default"].restoring) this.emit('added:note');
    return this.notes[mark.id] = new _note2["default"](mark, color);
  },
  restore: function restore(marks) {
    var _iterator = _createForOfIteratorHelper(marks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mark = _step.value;

        if (mark.keyData.note) {
          this.add(mark);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  addAndShow: function addAndShow(mark, color) {
    this.add(mark, color).show();
  },
  removeNoteStorage: function removeNoteStorage(id) {
    delete this.notes[id];
    if (this.isEmpty(this.notes)) this.emit('removed:last-note');
  },
  removeNote: function removeNote(id) {
    if (this.notes[id]) this.notes[id].remove();
  },
  toggleAll: function toggleAll() {
    if (!this.notes) return;
    var notes = this.notes;
    var meth = window.document.getElementsByTagName('tmnote').length ? 'hide' : 'show',
        condition = meth === 'hide' ? true : false,
        note;

    for (var n in notes) {
      note = notes[n];

      if (note.visible === condition) {
        note[meth]();
      }
    }
  },
  updateStyle: function updateStyle() {
    var bodyClasses = window.document.body.classList;

    _store2["default"].get('settings').then(function (settings) {
      if (settings && settings.misc) {
        if (settings.misc.notetransp) bodyClasses.add('tmnotes--0_8');else bodyClasses.remove('tmnotes--0_8');
        if (settings.misc.noteplainview) bodyClasses.add('tmnotes--plain-view');else bodyClasses.remove('tmnotes--plain-view');
        _store2["default"].noteFontSize = settings.misc.notefontsize || 12;
      }
    });
  },
  isEmpty: function isEmpty(obj) {
    return !Object.keys(obj).length;
  },
  startDraggingNote: function startDraggingNote(note) {
    var _this = this;

    var dragHandler = this.dragHandler = function (e) {
      return _this.emitDragEvent(note, e);
    };

    var dragStopHandler = this.dragStopHandler = function (e) {
      return _this.stopDraggingNote(note, e);
    };

    var doc = window.document;
    doc.addEventListener('mousemove', dragHandler, false);
    doc.addEventListener('mouseup', dragStopHandler, false);
    doc.addEventListener('touchmove', dragHandler, false);
    doc.addEventListener('touchend', dragStopHandler, false);
  },
  stopDraggingNote: function stopDraggingNote(note, e) {
    var doc = window.document;
    doc.removeEventListener('mousemove', this.dragHandler, false);
    doc.removeEventListener('mouseup', this.dragStopHandler, false);
    doc.removeEventListener('touchmove', this.dragHandler, false);
    doc.removeEventListener('touchend', this.dragStopHandler, false);
    this.emit('dragstop:note', note, e);
  },
  emitDragEvent: function emitDragEvent(note, e) {
    e.preventDefault();
    this.emit('drag:note', note, e);
  },
  sendNotesState: function sendNotesState(info) {
    this.emit('notes-state', !this.isEmpty(this.notes), info);
  },
  report: function report() {
    this.isEmpty(this.notes) || this.emit('added:note');
  }
});

/***/ }),

/***/ "./content/page-injections/modules/page.js":
/*!*************************************************!*\
  !*** ./content/page-injections/modules/page.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  el: window.document,
  autoPause: true,
  events: {
    ENV: {
      'started:restorations': 'removeListeners',
      'completed:restoration-process': 'addListeners'
    },
    DOM: {
      keydown: {
        '*': 'delegate'
      },
      selectionchange: {
        '*': 'onSelectionChange'
      }
    }
  },
  selectionCollapsed: true,
  shiftSensitiveKeys: [13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 171, 173],
  keyCodeMap: {
    '13': 'Enter',
    '48': '0',
    '49': '1',
    '50': '2',
    '51': '3',
    '52': '4',
    '53': '5',
    '54': '6',
    '55': '7',
    '56': '8',
    '57': '9',
    '171': '+',
    '173': '-'
  },
  isEditable: function isEditable(el) {
    var name = el.tagName;
    return name === 'TEXTAREA' || name === 'INPUT' || el.contentEditable === 'true';
  },
  delegate: function delegate(e) {
    var _this = this;

    var key = e.key.toLowerCase();
    var keyCode = e.keyCode,
        modKey = e.metaKey || e.ctrlKey || e.altKey || e.shiftKey,
        arrowKeys = ['arrowdown', 'arrowup'],
        lockedActions = ['b', 's', 'y', 'z', 'd'],
        functionKeys = lockedActions.concat(arrowKeys).concat(['c', 'n']),
        defaultMarkers = ['m', '2', '3'];
    if (_store2["default"].locked && lockedActions.includes(key)) return true;
    if (this.shiftSensitiveKeys.includes(keyCode)) key = this.keyCodeMap[keyCode];
    if (!functionKeys.includes(key) && window.getSelection().isCollapsed) return true;
    if (this.isEditable(e.target)) return true;

    _store2["default"].get('settings').then(function (settings) {
      if (!settings) return true;
      var origKey = key;
      var markers = settings.markers;
      var shortcuts = settings.shortcuts;
      var isMarkerKey = markers[key];
      var isCustomMarkerKey = isMarkerKey && !defaultMarkers.includes(key);
      if (isCustomMarkerKey) key = 'cm';
      var setting = shortcuts[key];
      if (!setting) return true;

      if (!modKey) {
        if (key === 'w' && !setting[0] && setting[1]) {
          _this.emit('lookup:word', window.getSelection().toString());
        } else if (isMarkerKey && !setting[0] && setting[1]) {
          _this.emit('pressed:marker-key', e, origKey);
        }
      } else {
        if (!setting[1]) return true;
        var shortcut = setting[0].split('-');
        var s1 = shortcut[0];
        var s2 = shortcut[1];
        if (!e[s1] || s2 && !e[s2]) return true;
        if (key === 'w') _this.emit('lookup:word', window.getSelection().toString());else if (isMarkerKey) {
          _this.emit('pressed:marker-key', e, origKey);
        } else _this.emit('pressed:hotkey', key);
      }
    });
  },
  onSelectionChange: function onSelectionChange(e) {
    var selectionCollapsed = window.getSelection().isCollapsed;

    if (this.selectionCollapsed !== selectionCollapsed) {
      this.emit('changed:selection', !selectionCollapsed);
      this.selectionCollapsed = selectionCollapsed;
    }
  }
});

/***/ }),

/***/ "./content/page-injections/modules/restorer.js":
/*!*****************************************************!*\
  !*** ./content/page-injections/modules/restorer.js ***!
  \*****************************************************/
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
        'restore:marks': 'restore',
        'lost:marks': 'onFailure',
        'finished:restoration': 'onFinishedRestoration',
        'resumed:markers': 'retry',
        'resumed-on-hashchange': 'resume'
      }
    },
    entries: null,
    count: 0,
    restored: 0,
    failed: 0,
    attempt: 0,
    failureReport: {},
    restore: function restore(entries) {
      var _this8 = this;

      if (!entries) return;
      if (!Array.isArray(entries)) entries = [entries];
      this.entries = entries;
      this.count = entries.length;
      this.attempt++;
      this.emit('started:restorations');
      _store2["default"].restoring = true;
      entries.forEach(function (entry) {
        if (entry.marks && entry.marks.length) {
          if (entry.immut) new ImmutRestorer(entry);else new Restorer(entry);
        } else {
          _this8.onFinishedRestoration();
        }
      });
    },
    resume: function resume() {
      this.restored = 0;
      this.failed = 0;
      this.failureReport = {};
    },
    retry: function retry(entry) {
      entry = entry ? [entry] : this.entries;
      this.resume();
      this.restore(entry);
    },
    onFailure: function onFailure(report) {
      this.failed++;

      for (var i in report) {
        this.failureReport[i] = report[i];
      }
    },
    onFinishedRestoration: function onFinishedRestoration() {
      var _this9 = this;

      if (++this.restored === this.count) {
        _store2["default"].restoring = false;

        if (this.failed) {
          if (this.attempt === 1) {
            _store2["default"].get('settings').then(function (settings) {
              if (!settings || !settings.history || settings.history.autoRetry) {
                _this9.emit('failed:restoration', {
                  report: _this9.getReport(),
                  attempt: _this9.attempt,
                  autoRetry: true
                });

                setTimeout(function () {
                  return _this9.emit('restorer:retry-restoration');
                }, 5000);
              } else {
                _this9.finish(false);
              }
            });
          } else {
            this.finish(false);
          }
        } else {
          this.finish(true);
        }
      }
    },
    finish: function finish(success) {
      if (success) this.emit('succeeded:restoration');else this.emit('failed:restoration', {
        url: _store2["default"].url,
        report: this.getReport(),
        attempt: this.attempt
      });
      this.emit('finished:all-restorations');
    },
    getReport: function getReport() {
      var report = this.failureReport;
      var msg = '';

      for (var i in report) {
        msg += "".concat(report[i].reason, " : ").concat(report[i].text, "\n");
      }

      return msg;
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

var _selection = __webpack_require__(/*! ./selection */ "./content/page-injections/modules/selection.js");

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var RestorerBase = /*#__PURE__*/function (_MODULE2) {
  _inherits(RestorerBase, _MODULE2);

  var _super = _createSuper(RestorerBase);

  function RestorerBase(entry) {
    var _this;

    _classCallCheck(this, RestorerBase);

    _this = _super.call(this, entry);
    _this.entry = entry;
    _this.lost = [];
    _this.failureReport = {};
    _this.restored = [];
    _this.area = entry.synced ? 'sync' : 'local';

    _this.emit('started:restoration', entry.marks.length);

    return _this;
  }

  _createClass(RestorerBase, [{
    key: "processInChunks",
    value: function processInChunks(data, proc, cb) {
      proc = proc.bind(this);
      cb = cb.bind(this);

      (function rec() {
        var _this2 = this;

        var expire = +new Date() + 500;

        do {
          try {
            proc(data.shift());
          } catch (e) {
            setTimeout(function () {
              return _this2.emit('failed:restore-range', e.toString());
            }, 0);
          }
        } while (data.length > 0 && expire > +new Date());

        if (data.length > 0) window.setTimeout(function () {
          return rec();
        }, 0);else cb();
      })();
    }
  }, {
    key: "report",
    value: function report() {
      var ll = this.lost.length;

      if (ll) {
        while (ll--) {
          delete this.lost[ll].temp;
        }

        this.emit('lost:marks', this.failureReport);
      }

      this.emit('finished:restoration', this.entry.name, this.restored, this.lost, this.area);
    }
  }]);

  return RestorerBase;
}(_utils._MODULE);

var Restorer = /*#__PURE__*/function (_RestorerBase) {
  _inherits(Restorer, _RestorerBase);

  var _super2 = _createSuper(Restorer);

  function Restorer(entry) {
    var _this3;

    _classCallCheck(this, Restorer);

    _this3 = _super2.call(this, entry);
    _this3.queue = [];
    _this3.cache = [];
    _this3.phase = 1;
    _this3.selectionTrial = 0;
    _this3.chunkDuration = 500;
    _this3._timer = +new Date() + _this3.chunkDuration;
    _this3.oom = entry.marks.length === 1 && entry.marks[0].id == 1;

    _this3.init();

    return _this3;
  }

  _createClass(Restorer, [{
    key: "init",
    value: function init() {
      var entry = this.entry,
          now = [],
          postponed = [],
          marks = entry.marks,
          l = marks.length,
          i = 0,
          mark;

      for (; i < l; i++) {
        mark = marks[i];
        this.convertDescription(mark).createTempObject(mark);
        if (mark.conds.n1 === 'TM') postponed.push(mark);else now.push(mark);
      }

      this.queue.push(now);

      for (i = 0, l = postponed.length; i < l; i++) {
        this.queue.push([postponed[i]]);
      }

      this.restore();
    }
  }, {
    key: "convertDescription",
    value: function convertDescription(mark) {
      if (typeof mark.conds.o === 'undefined') {
        var conds = mark.conds,
            convertedConds = {
          o: conds.startOffset,
          n1: conds.firstNodeName,
          n2: conds.firstParentNodeName,
          p1: conds.firstTextNodePosition,
          p2: conds.firstNodePosition,
          p3: conds.firstParentNodePosition,
          p4: conds.firstGrampaNodePosition
        };
        delete mark.conds;
        mark.conds = convertedConds;
      }

      return this;
    }
  }, {
    key: "createTempObject",
    value: function createTempObject(mark) {
      var text = mark.text,
          trimmedText = text.trim(),
          squeezedText = this.squeeze(mark.text);
      mark.temp = {
        textLength: text.length,
        trimmedText: trimmedText,
        trimmedTextLength: trimmedText.length,
        squeezedText: squeezedText,
        squeezedTextLength: squeezedText.length,
        possiblePositions: [],
        possibleEndPositions: [],
        possibleStartNodes: [],
        possibleEnds: {},
        possibleFocusOffsets: []
      };
      mark.synced = this.entry.synced;
    }
  }, {
    key: "restore",
    value: function restore() {
      var _this4 = this;

      if (this.phase === 2) this.sortQueueById();
      var marks = this.marks = this.queue.shift(),
          length = marks ? marks.length : 0;
      this.length = length;

      if (length) {
        this.setBodySelection(window.document.body).getTextPositions(marks, length);
        if (this.phase === 1 && length > 1) this.postponeOverlappings();
        this.findPossibleExtrema().ruleOutMultiples().restoreRanges();
        this.phase++;

        if (this.queue.length) {
          if (this.timer < +new Date()) setTimeout(function () {
            return _this4.restore();
          }, 0);else this.restore();
        } else this.report();
      } else this.report();
    }
  }, {
    key: "sortQueueById",
    value: function sortQueueById() {
      var marks = this.queue,
          l = marks ? marks.length : 0,
          temp = [],
          res = [],
          i = 0,
          mark,
          t;

      while (l--) {
        if (!marks[l].length) continue;
        mark = marks[l][0];
        temp[mark.id] = mark;
      }

      this.queue = [];

      for (t = temp.length; i < t; i++) {
        if (temp[i]) this.queue.push([temp[i]]);
      }

      return this;
    }
  }, {
    key: "getTextPositions",
    value: function getTextPositions(marks, l) {
      var trimmedSelectionText = this.trimmedSelectionText,
          allPossibleStartPositions = this.allPossibleStartPositions = [],
          endPositions = [],
          mark,
          markTemp,
          squeezedText,
          squeezedTextLength,
          p,
          endPosition;

      while (l--) {
        p = undefined;
        mark = marks[l];
        markTemp = mark.temp;

        if (!markTemp) {
          marks.splice(l, 1);
          continue;
        }

        if (markTemp.possiblePositions.length) {
          allPossibleStartPositions = allPossibleStartPositions.concat(markTemp.possiblePositions);
          endPositions = endPositions.concat(markTemp.possibleEndPositions);
        } else {
          squeezedText = markTemp.squeezedText;
          squeezedTextLength = markTemp.squeezedTextLength;

          while (p !== -1) {
            if (p === undefined) p = -1;
            p = trimmedSelectionText.indexOf(squeezedText, p + 1);
            endPosition = p + squeezedTextLength;
            markTemp.possiblePositions.push([p, endPosition, mark]);
            markTemp.possibleEndPositions.push(endPosition);
            allPossibleStartPositions.push([p, endPosition, mark]);
            endPositions.push(endPosition);
          }

          markTemp.possiblePositions.pop();
          allPossibleStartPositions.pop();
          endPositions.pop();

          if (!markTemp.possiblePositions.length) {
            this.lost.push(mark);
            this.failureReport[mark.id] = {
              text: mark.text,
              reason: browser.i18n.getMessage('note_restoration_failure_reason_1')
            };
          }
        }
      }

      this.sortPossibleStartPositions(allPossibleStartPositions);
      this.maxPosition = Math.max.apply(null, endPositions);
      return this;
    }
  }, {
    key: "sortPossibleStartPositions",
    value: function sortPossibleStartPositions(positions) {
      var l = positions.length,
          temp = [],
          i = 0,
          pos,
          start,
          t;

      while (l--) {
        pos = positions[l];
        start = pos[0];
        if (temp[start]) temp.splice(start + 1, 0, pos);else temp[start] = pos;
      }

      t = temp.length;
      this.allPossibleStartPositions = [];

      for (; i < t; i++) {
        if (temp[i]) this.allPossibleStartPositions.push(temp[i]);
      }
    }
  }, {
    key: "postponeOverlappings",
    value: function postponeOverlappings() {
      var positions = this.allPossibleStartPositions,
          p = positions.length,
          postponed = [],
          pos1,
          pos2,
          i,
          m1,
          m2,
          id1,
          id2,
          id;

      if (p > 1) {
        while (p-- > 1) {
          pos1 = positions[p - 1];
          pos2 = positions[p];
          m1 = pos1[2];
          m2 = pos2[2];
          id1 = m1.id;
          id2 = m2.id;
          if (id1 === id2) continue;

          if (pos1[1] > pos2[0] && pos1[0] < pos2[1]) {
            if (id1 < id2) {
              id = id2;

              if (!postponed.includes(id)) {
                this.postpone(m2);
                postponed.push(id);
              }
            } else {
              id = id1;

              if (!postponed.includes(id)) {
                this.postpone(m1);
                postponed.push(id);
              }
            }
          }
        }

        p = postponed.length;

        for (i = 0; i < p; i++) {
          this.cutOutFor(postponed[i]);
        }
      }

      return this;
    }
  }, {
    key: "cutOutFor",
    value: function cutOutFor(id) {
      var positions = this.allPossibleStartPositions,
          p = positions.length;

      while (p--) {
        if (positions[p][2].id === id) this.allPossibleStartPositions.splice(p, 1);
      }
    }
  }, {
    key: "postpone",
    value: function postpone(mark) {
      var queue = this.queue,
          l = queue.length,
          alreadyIncluded = false;

      while (l--) {
        if (queue[l][0] === mark) {
          alreadyIncluded = true;
          break;
        }
      }

      if (!alreadyIncluded) this.queue.push([mark]);
    }
  }, {
    key: "findPossibleExtrema",
    value: function findPossibleExtrema() {
      var nodes = this.bodyTextNodes,
          n = nodes ? nodes.length : 0,
          indices = this.allPossibleStartPositions,
          phase = this.phase,
          cache = this.cache = [],
          satisfied = [],
          i = 0,
          chars = 0,
          nextStartFound,
          endingsInThisNode,
          node,
          nodesText,
          nodesTextLength,
          mark,
          diff,
          l,
          startPosition,
          endPosition,
          e,
          f,
          id,
          p,
          q,
          x,
          m,
          possibleFocusOffset,
          startFoundFor,
          postponed,
          hasEndingsInThisNode;

      for (; i < n; i++) {
        node = nodes[i];
        nodesText = this.squeeze(node.data);
        nodesTextLength = nodesText.length;
        chars += nodesTextLength;
        l = indices.length;
        startFoundFor = [];
        postponed = [];
        hasEndingsInThisNode = null;

        while (l--) {
          startPosition = indices[l][0];
          endPosition = indices[l][1];
          mark = indices[l][2];
          id = mark.id;
          mark.temp.startFoundFor = mark.temp.startFoundFor || [];
          mark.temp.endFoundFor = mark.temp.endFoundFor || [];

          if (!mark.temp.startFoundFor.includes(startPosition) && chars > startPosition && mark.temp.possibleStartNodes.length < mark.temp.possiblePositions.length) {
            if (hasEndingsInThisNode && hasEndingsInThisNode.id < mark.id) {
              if (phase === 1) {
                this.postpone(mark);
                postponed.push(id);
              }

              indices.splice(l, 1);
              continue;
            } else {
              if (!this.satisfiesDescription(mark, node)) {
                if (phase === 1 && id !== 1) {
                  this.postpone(mark);
                  postponed.push(id);
                }

                indices.splice(l, 1);
                continue;
              } else {
                mark.temp.possibleStartNodes.push({
                  node: node,
                  pos: i
                });
                mark.temp.startFoundFor.push(startPosition);
                startFoundFor.push(id);
              }
            }
          }

          if (mark.temp.startFoundFor.includes(startPosition) && !mark.temp.endFoundFor.includes(endPosition) && chars - endPosition >= 0) {
            if (Math.min.apply(null, startFoundFor) < id) {
              if (phase === 1) {
                this.postpone(mark);
                postponed.push(id);
              }

              indices.splice(l, 1);
            } else {
              possibleFocusOffset = this.findFocusOffset(mark, node, endPosition - (chars - nodesTextLength));
              mark.temp.possibleFocusOffsets.push(possibleFocusOffset);
              mark.temp.endFoundFor.push(endPosition);
              mark.temp.possibleEnds[startPosition] = {
                node: node,
                offset: possibleFocusOffset,
                pos: i
              };

              if (!satisfied.includes(id)) {
                cache.push(mark);
                satisfied.push(id);
              }

              hasEndingsInThisNode = mark;
              indices.splice(l, 1);
            }
          }
        }

        p = postponed.length;
        if (p) for (x = 0; x < p; x++) {
          this.cutOutFor(postponed[x]);
        }
        if (chars > this.maxPosition) break;
      }

      if (phase !== 1 || this.oom) {
        for (var _i = 0; _i < this.marks.length; _i++) {
          var _mark = this.marks[_i];

          if (!satisfied.includes(_mark.id)) {
            this.lost.push(_mark);
            this.failureReport[_mark.id] = {
              text: _mark.text,
              reason: browser.i18n.getMessage('note_restoration_failure_reason_2')
            };
          }
        }
      }

      return this;
    }
  }, {
    key: "ruleOutMultiples",
    value: function ruleOutMultiples() {
      var cache = this.cache,
          i = cache.length,
          mark,
          possibleStartNodes,
          p,
          node,
          parent,
          grampa,
          grandgrampa,
          grandgrandgrampa,
          matches,
          failed,
          q,
          possibleEnds,
          startFoundFor,
          conds,
          startOffset,
          temp,
          textLength,
          start;

      while (i--) {
        mark = cache[i];
        matches = [];
        failed = false;
        temp = mark.temp;
        possibleStartNodes = temp.possibleStartNodes;
        possibleEnds = temp.possibleEnds;
        startFoundFor = temp.startFoundFor;
        p = possibleStartNodes.length;
        conds = mark.conds;
        startOffset = conds.o;
        textLength = temp.textLength;

        if (p > 1) {
          while (p--) {
            node = possibleStartNodes[p].node;
            parent = node.parentNode.parentNode;
            grampa = parent.parentNode || 0;

            if (!grampa || conds.p3 === this.whichChild(grampa, parent)) {
              matches.push(p);
            }
          }

          if (!matches.length) p = 0;else {
            if (matches.length === 1) p = matches[0];else {
              p = undefined;

              while (matches.length) {
                q = matches.pop();
                parent = possibleStartNodes[q].node.parentNode;
                grampa = parent.parentNode || 0;
                grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0;
                grandgrandgrampa = grandgrampa && grandgrampa.parentNode ? grandgrampa.parentNode : 0;

                if ((!grandgrandgrampa || conds.p4 === this.whichChild(grandgrandgrampa, grandgrampa)) && possibleEnds[startFoundFor[q]].offset - startOffset === textLength) {
                  p = q;
                  break;
                }
              }

              if (!p) p = 0;
            }
          }
        } else p = 0;

        p = p || 0;
        start = mark.temp.possibleStartNodes[p];
        mark.temp.startNode = start.node;
        mark.temp.startNodePosition = start.pos;
        this.setMatchingEnd(mark, p);
      }

      return this;
    }
  }, {
    key: "setMatchingEnd",
    value: function setMatchingEnd(mark, p) {
      var startPosition = mark.temp.startFoundFor[p],
          end = mark.temp.possibleEnds[startPosition];
      mark.temp.endNode = end.node;
      mark.temp.endNodePosition = end.pos;
      mark.temp.focusOffset = end.offset;
    }
  }, {
    key: "satisfiesDescription",
    value: function satisfiesDescription(mark, node) {
      var description = mark.conds,
          parentNode = node.parentNode,
          grampa = parentNode.parentNode,
          grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0,
          startOffset = description.o,
          relevantNodeText = node.data.substring(startOffset).trim(),
          l = relevantNodeText.length,
          markText = mark.temp.trimmedText,
          m = mark.temp.trimmedTextLength,
          textsMatch;

      if (m <= l) {
        textsMatch = this.squeeze(relevantNodeText).indexOf(this.squeeze(markText)) === 0;
      } else {
        textsMatch = this.squeeze(markText).indexOf(this.squeeze(relevantNodeText)) === 0;
      }

      return textsMatch && (parentNode.nodeName === description.n1 || description.n1 === 'TM' && parentNode.hasAttribute('data-tm-id')) && (!grampa || grampa.nodeName === description.n2) && this.whichChild(parentNode, node) === description.p1;
    }
  }, {
    key: "findFocusOffset",
    value: function findFocusOffset(mark, node, n) {
      var nodeText = node.data,
          l = nodeText.length,
          i = 0,
          counter = 0;

      for (; i < l; i++) {
        if (this.squeeze(nodeText[i])) counter++;
        if (counter === n) return /\s$/.test(mark.text) ? i + 2 : i + 1;
      }
    }
  }, {
    key: "restoreRanges",
    value: function restoreRanges() {
      var _this5 = this;

      var range = document.createRange(),
          selection = this.selection,
          marks = this.cache,
          i = marks.length,
          mark,
          markTemp,
          start,
          end,
          focusOffset;

      while (i--) {
        mark = marks[i];
        markTemp = mark.temp;
        start = markTemp.startNode;
        end = markTemp.endNode;
        focusOffset = markTemp.focusOffset;

        if (!start || !end || !(typeof focusOffset === 'number')) {
          this.lost.push(mark);
          this.failureReport[mark.id] = {
            text: mark.text,
            reason: browser.i18n.getMessage('note_restoration_failure_reason_3')
          };
        } else {
          try {
            range.setStart(start, mark.conds.o);
            range.setEnd(end, focusOffset);
            selection.self.removeAllRanges();
            selection.self.addRange(range); //selection.resume(range);

            this.emit('restored:range', mark);
            delete mark.synced;
            this.restored.push(mark);
            selection.recollectNodes(mark);
          } catch (e) {
            this.lost.push(mark);
            setTimeout(function () {
              return _this5.emit('failed:restore-range', e.toString());
            }, 0);
          }

          delete mark.temp;
        }
      }
    }
  }, {
    key: "setBodySelection",
    value: function setBodySelection(el) {
      this.selectionTrial++;

      if (this.phase === 1) {
        this.selection = new _selection2["default"](el);

        if (!this.selection.text) {
          if (this.selectionTrial < 4) {
            return this.setBodySelection(el);
          } else {
            this.trimmedSelectionText = ' ';
            this.bodyTextNodes = [];
            return this;
          }
        }

        this.trimmedSelectionText = this.squeeze(this.selection.text);
      }

      this.bodyTextNodes = this.selection.nodes ? this.selection.nodes.slice() : [];
      return this;
    }
  }, {
    key: "squeeze",
    value: function squeeze(text) {
      return typeof text === 'string' ? text.replace(/\t|\s|\n|\r/g, '') : undefined;
    }
  }, {
    key: "whichChild",
    value: function whichChild(parent, child, context) {
      if (!parent || !child) return null;
      var children = child.nodeType === 3 ? parent.childNodes : parent.children,
          c = children.length,
          pos = 0,
          i = 0,
          currentChild;

      for (; i < c; i++) {
        currentChild = children[i];
        if (currentChild === child) return pos;

        if (context) {
          if (currentChild.nodeName === context) pos++;
        } else {
          if (!(currentChild.nodeType === 3 && !currentChild.data)) pos++;
        }
      }
    }
  }, {
    key: "timer",
    get: function get() {
      var timer = this._timer;
      this._timer = +new Date() + this.chunkDuration;
      return timer;
    }
  }]);

  return Restorer;
}(RestorerBase);

var ImmutRestorer = /*#__PURE__*/function (_RestorerBase2) {
  _inherits(ImmutRestorer, _RestorerBase2);

  var _super3 = _createSuper(ImmutRestorer);

  function ImmutRestorer(entry) {
    var _this6;

    _classCallCheck(this, ImmutRestorer);

    _this6 = _super3.call(this, entry);
    _this6.selection = window.getSelection();
    _this6.range = document.createRange();

    var marks = _this6.marks = _toConsumableArray(entry.marks.sort(function (m1, m2) {
      return m1.id - m2.id;
    }));

    _this6.processInChunks(marks, _this6.restoreRange, _this6.report);

    return _this6;
  }

  _createClass(ImmutRestorer, [{
    key: "restoreRange",
    value: function restoreRange(mark) {
      var _this7 = this;

      var conds = mark.conds;
      var start = conds.s;
      var end = conds.e;
      var selection = this.selection;
      var range = this.range;

      try {
        range.setStart(this.getNode(start.p), start.o);
        range.setEnd(this.getNode(end.p), end.o);
        selection.removeAllRanges();
        selection.addRange(range);
        this.emit('restored:range', mark);
        delete mark.synced;
        this.restored.push(mark);
      } catch (e) {
        this.lost.push(mark);
        setTimeout(function () {
          return _this7.emit('failed:restore-range', e.toString());
        }, 0);
      }
    }
  }, {
    key: "getNode",
    value: function getNode(position) {
      var textNodePosition = position[0];
      var node = document.body,
          l = position.length;

      while (l-- > 1) {
        node = node.children[position[l]];
      }

      return node.childNodes[textNodePosition];
    }
  }]);

  return ImmutRestorer;
}(RestorerBase);

/***/ }),

/***/ "./content/page-injections/modules/selection.js":
/*!******************************************************!*\
  !*** ./content/page-injections/modules/selection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _SELECTION = /*#__PURE__*/function () {
  function _SELECTION(node, options) {
    _classCallCheck(this, _SELECTION);

    this.options = options || {};
    var selection = this.self = window.getSelection();
    if (selection.rangeCount) this.range = selection.getRangeAt(0);

    if (node || !selection.isCollapsed) {
      if (node) {
        this.defined = node;
        this.create(node).reduceToOneRange().update().collectNodes(true).retrieveText();
      } else {
        this.text = selection.toString();
        this.reduceToOneRange().update().collectNodes() //.update()
        .adjust(); //.update()
        //.retrieveText();
      }

      try {
        selection.collapseToStart();
      } catch (e) {}
    }
  }

  _createClass(_SELECTION, [{
    key: "create",
    value: function create(node) {
      this.self.selectAllChildren(node);
      return this;
    }
  }, {
    key: "update",
    value: function update(selection) {
      if (selection) this.self = selection;else selection = this.self;
      var props = ['focusNode', 'anchorNode', 'focusOffset', 'anchorOffset'],
          i = props.length;

      while (i--) {
        this[props[i]] = selection[props[i]];
      }

      this.range = selection.getRangeAt(0);
      this.simple = this.isSimple();
      return this;
    }
  }, {
    key: "adjust",
    value: function adjust() {
      var selection = this.self,
          anchor = this.anchorNode,
          focus = this.focusNode;
      if (this.isBackwards(anchor, focus)) this.reverse(anchor, focus);else this.normalize(anchor, focus);
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize(anchor, focus) {
      var selection = this.self,
          range = this.range,
          firstTextNode = this.nodes[0],
          lastTextNode = this.nodes[this.nodes.length - 1];
      if (firstTextNode !== anchor) range.setStart(firstTextNode, firstTextNode.data.length - firstTextNode.data.trimLeft().length);
      if (lastTextNode !== focus) range.setEnd(lastTextNode, lastTextNode.data.length - (lastTextNode.data.length - lastTextNode.data.trimRight().length));
    }
  }, {
    key: "collectNodes",
    value: function collectNodes(wholeDocument) {
      var self = this;
      var selection = this.self;
      var container = wholeDocument ? window.document.body : this.getCommonAncestorContainer();
      var filter = wholeDocument ? function (node) {
        return self.isSelectable(node) && !self.isBlank(node) && self.hasNormalParent(node);
      } : function (node) {
        return selection.containsNode(node) && !self.isBlank(node) && self.hasNormalParent(node);
      };
      var iterator = window.document.createNodeIterator(container, NodeFilter.SHOW_TEXT, {
        acceptNode: function acceptNode(node) {
          return filter(node);
        }
      }, false);
      var nodes = [],
          parentNodes = [],
          textNode,
          parent,
          firstNode,
          lastNode;

      while (textNode = iterator.nextNode()) {
        nodes.push(textNode);
      }

      nodes = this.trimSelection(nodes); //this.nodes = this.options.programmatically ? this.reduceToSelectable(nodes) : nodes;

      this.nodes = this.reduceToSelectable(nodes);
      this.parentNodes = this.collectParentNodes(this.nodes);
      return this;
    }
  }, {
    key: "recollectNodes",
    value: function recollectNodes(mark) {
      var _this$nodes;

      var markWrappers = Array.from(document.querySelectorAll('[data-tm-id^="' + mark.id + '_"]'));
      var m = markWrappers.length;
      var newSegment = markWrappers.map(function (el) {
        return el.firstChild;
      });
      var prev = markWrappers[0].previousSibling;
      var next = markWrappers[m - 1].nextSibling;
      var start = mark.temp.startNodePosition;
      var end = mark.temp.endNodePosition;

      if (prev && prev.nodeType === 3) {
        newSegment.unshift(prev);
      }

      if (next && next.nodeType === 3) {
        newSegment.push(next);
      }

      (_this$nodes = this.nodes).splice.apply(_this$nodes, [start, end - start + 1].concat(_toConsumableArray(newSegment)));
    }
  }, {
    key: "trimSelection",
    value: function trimSelection(nodes) {
      var selection = this.self;
      var firstNode, lastNode;

      if (nodes.length > 1) {
        firstNode = nodes[0];

        if (selection.anchorNode === firstNode && firstNode.data.trimRight().length <= selection.anchorOffset) {
          nodes.shift();
        }

        lastNode = nodes[nodes.length - 1];

        if (selection.focusNode === lastNode && this.isBlank(lastNode.data.substr(0, selection.focusOffset))) {
          nodes.pop();
        }
      }

      return nodes;
    }
  }, {
    key: "reduceToSelectable",
    value: function reduceToSelectable(nodes) {
      var sel = this.self;
      var rg = document.createRange();
      sel.removeAllRanges();
      sel.addRange(rg);
      nodes = nodes.filter(function (node) {
        rg.selectNode(node);
        return !!sel.toString();
      });
      sel.removeAllRanges();
      sel.addRange(this.range);
      return nodes;
    }
  }, {
    key: "collectParentNodes",
    value: function collectParentNodes(nodes) {
      var l = nodes.length,
          parents = [],
          i = 0;

      for (; i < l; i++) {
        parents.push(nodes[i].parentNode);
      }

      return parents;
    }
  }, {
    key: "retrieveText",
    value: function retrieveText() {
      var range = this.range,
          nodes = this.nodes,
          l = nodes.length,
          i = 0,
          nodeTexts = [],
          text;

      for (; i < l; i++) {
        nodeTexts.push(nodes[i].data);
      }

      l -= 1;

      if (nodeTexts.length) {
        if (!this.defined) {
          if (this.simple) {
            //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset, selection.focusOffset);
            nodeTexts[0] = nodeTexts[0].substring(range.startOffset, range.endOffset);
          } else {
            //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset);
            //nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : selection.focusOffset);
            nodeTexts[0] = nodeTexts[0].substring(range.startOffset);
            nodeTexts[l] = nodeTexts[l].substring(0, range.endOffset);
          }
        }

        text = this.text = nodeTexts.join('');
      }

      return this;
    }
  }, {
    key: "getCommonAncestorContainer",
    value: function getCommonAncestorContainer() {
      var selection = this.self,
          node1 = selection.anchorNode,
          node2 = selection.focusNode;

      while (node1 = node1.parentNode) {
        if ((node1.compareDocumentPosition(node2) & 0x10) === 0x10) return node1;
      }

      return window.document.body;
    }
  }, {
    key: "reverse",
    value: function reverse(anchor, focus) {
      var range = window.document.createRange(),
          selection = this.self;
      range.setStart(focus, selection.focusOffset);
      range.setEnd(anchor, selection.anchorOffset);
      selection.removeAllRanges();
      selection.addRange(range);
      this.update(selection).adjust(selection.anchorNode, selection.focusNode);
    }
  }, {
    key: "reduceToOneRange",
    value: function reduceToOneRange() {
      var selection = this.self,
          rangeCount = selection.rangeCount,
          range0 = this.range,
          lastRange;
      if (rangeCount < 2) return this;
      lastRange = selection.getRangeAt(rangeCount - 1);
      range0.setStart(range0.startContainer, range0.startOffset);
      range0.setEnd(lastRange.endContainer, lastRange.endOffset);
      selection.removeAllRanges();
      selection.addRange(range0);
      return this;
    }
  }, {
    key: "hasNormalParent",
    value: function hasNormalParent(node) {
      var parent = node.parentNode;
      var tag = parent.tagName.toUpperCase();
      return tag !== 'SCRIPT' && tag !== 'STYLE' && tag !== 'LINK' && tag !== 'META' && tag !== 'BASE' && tag !== 'TITLE' && tag !== 'NOSCRIPT' && tag !== 'IMG' && tag !== 'IFRAME' && tag !== 'EMBED' && tag !== 'PARAM' && tag !== 'VIDEO' && tag !== 'AUDIO' && tag !== 'SOURCE' && tag !== 'TRACK' && tag !== 'CANVAS' && tag !== 'MAP' && tag !== 'AREA' && tag !== 'MATH' && tag !== 'OBJECT' && // Ruby annotations:
      // For whatever reason <rt> can be selected, but `getSelection().toString()` won't contain its text content!
      tag !== 'RP' && tag !== 'RT' && tag !== 'RTC' && !this.isChildOf(parent, 'svg') //&&
      //!this.isChildOf(parent, 'math')
      ;
    }
  }, {
    key: "isChildOf",
    value: function isChildOf(node, nodeType) {
      while (node) {
        if (node.nodeName === nodeType) return true;
        node = node.parentNode;
      }

      return false;
    }
  }, {
    key: "isBlank",
    value: function isBlank(node) {
      var text;
      if (typeof node === 'string') text = node;else {
        if (node && typeof node.data === 'string') text = node.data;else text = this.text;
      }
      return text.search(/[^\s\n\r\t]/g) === -1;
    }
  }, {
    key: "isBackwards",
    value: function isBackwards(anchor, focus) {
      var selection = this.self,
          position = anchor.compareDocumentPosition(focus);
      return position === 2 || position === 10 || !position && selection.anchorOffset > selection.focusOffset;
    }
  }, {
    key: "isSimple",
    value: function isSimple() {
      var selection = this.self,
          anchorNode = selection.anchorNode,
          focusNode = selection.focusNode;
      return anchorNode === focusNode && anchorNode.nodeType === 3 && (!anchorNode.nextSibling || anchorNode.nextSibling.compareDocumentPosition(focusNode) !== 4);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(node) {
      this.range.selectNode(node);
      return !!this.self.toString();
    }
  }]);

  return _SELECTION;
}();

exports["default"] = _SELECTION;

/***/ }),

/***/ "./content/page-injections/modules/tmui.js":
/*!*************************************************!*\
  !*** ./content/page-injections/modules/tmui.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  events: {
    ENV: {
      'updated:misc-settings': 'updateState',
      'added:note': 'onNoteAdded',
      'added:bookmark': 'onBookmarkAdded',
      'removed:last-note': 'onLastNoteRemoved',
      'removed:bookmark': 'onBookmarkRemoved'
    }
  },
  addListenersManually: true,
  el: null,
  attached: false,
  buttons: {
    notes: {
      el: null,
      show: false,
      shown: false
    },
    bookmark: {
      el: null,
      show: false,
      shown: false
    }
  },
  bookmark: false,
  notes: false,
  autoinit: function autoinit() {
    this.createButtons();
    this.updateState();
  },
  updateState: function updateState() {
    var _this = this;

    _store2["default"].get('bmicon').then(function (bmicon) {
      _this.buttons.bookmark.show = bmicon;
      return _store2["default"].get('noteicon').then(function (noteicon) {
        return _this.buttons.notes.show = noteicon;
      });
    }).then(function () {
      return _this.update();
    });
  },
  update: function update() {
    var shouldAttach = this.buttons.bookmark.show && this.bookmark || this.buttons.notes.show && this.notes;

    if (shouldAttach) {
      this.render();
    } else if (this.attached && !shouldAttach) {
      this.remove();
    }
  },
  render: function render() {
    var buttons = this.buttons,
        btn;

    if (!this.attached) {
      var el = this.el = window.document.createElement('tmui');
      window.document.body.appendChild(el);
    }

    for (var b in buttons) {
      btn = buttons[b];
      if (btn.show && !btn.shown && this[b]) this.addButton(b);else if (btn.shown && (!this[b] || !btn.show)) this.removeButton(b);
    }

    if (!buttons.notes.shown && !buttons.bookmark.shown) {
      this.remove();
    } else {
      this.updatePosition();
      this.addListeners();
    }

    this.attached = true;
  },
  remove: function remove() {
    if (this.attached) {
      var tmui = this.el;
      var buttons = this.buttons;

      for (var b in buttons) {
        if (buttons[b].shown) {
          this.removeButton(b);
        }
      }

      window.document.body.removeChild(tmui);
      this.attached = false;
    }
  },
  createButtons: function createButtons() {
    var notesButton = this.buttons.notes.el = window.document.createElement('tmnotestoggle');
    var bookmarkButton = this.buttons.bookmark.el = window.document.createElement('tmbm');
    notesButton.title = browser.i18n.getMessage('toggle_notes');
    bookmarkButton.title = browser.i18n.getMessage('bm_scroll');
  },
  addButton: function addButton(type) {
    var tmui = this.el;
    var btn = this.buttons[type];
    var self = this;
    var handler = btn.handler = type === 'notes' ? this.toggleNotes.bind(this) : this.scrollToBookmark.bind(this);
    tmui.appendChild(btn.el);
    btn.shown = true;
    btn.el.addEventListener('click', handler, false);
  },
  removeButton: function removeButton(type) {
    var tmui = this.el;
    var btn = this.buttons[type];
    tmui.removeChild(btn.el);
    btn.shown = false;
    btn.el.removeEventListener('click', btn.handler, false);
  },
  updatePosition: function updatePosition() {
    var _this2 = this;

    _store2["default"].get('tmuipos').then(function (pos) {
      return _this2.el.setAttribute('style', pos.split('-').map(function (p) {
        return p + ':1px;';
      }).join(' '));
    });
  },
  onNoteAdded: function onNoteAdded() {
    this.notes = true;
    this.update();
  },
  onLastNoteRemoved: function onLastNoteRemoved() {
    this.notes = false;
    this.update();
  },
  onBookmarkAdded: function onBookmarkAdded() {
    this.bookmark = true;
    this.update();
  },
  onBookmarkRemoved: function onBookmarkRemoved() {
    this.bookmark = false;
    this.update();
  },
  toggleNotes: function toggleNotes() {
    this.emit('toggle:notes');
  },
  scrollToBookmark: function scrollToBookmark() {
    this.emit('scroll-to-bookmark');
  }
});

/***/ }),

/***/ "./content/page-injections/port.js":
/*!*****************************************!*\
  !*** ./content/page-injections/port.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: ['copy:marks', 'save:entry?', 'update:entry?', 'lookup:word', 'error:browser-console', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'activated:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note', 'page-state', 'notes-state', 'visually-ordered:marks', 'fetch:entries', // @RESTORER
    'finished:restoration', 'failed:restoration', 'succeeded:restoration', 'failed:restore-range', 'canceled:save-after-canceled-restoration']
  }
});

/***/ }),

/***/ "./content/page-injections/sass/index.scss":
/*!*************************************************!*\
  !*** ./content/page-injections/sass/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "./utils/dommodule.js":
/*!****************************!*\
  !*** ./utils/dommodule.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._DOMMODULE = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

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

var _DOMMODULE = /*#__PURE__*/exports._DOMMODULE = function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  var _super = _createSuper(_DOMMODULE);

  function _DOMMODULE(obj) {
    var _this;

    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];
    _this = _super.call(this, obj);
    _this.addListenersManually || _this.addListeners();
    !_this.autoPause || _this.setAutoPause();
    return _this;
  }

  _createClass(_DOMMODULE, [{
    key: "generalHandler",
    value: function generalHandler(subMap, type, e) {
      var el = e.target,
          selector,
          _sel,
          meth,
          f,
          isId,
          isClass,
          isDoc;

      for (selector in subMap) {
        f = selector[0];
        _sel = selector;
        isId = f === '#';
        isClass = f === '.';
        isDoc = f === '*';
        if (isId || isClass) selector = selector.substr(1);

        if (isDoc || isClass && el.classList.contains(selector) || isId && el.id === selector || el.nodeName.toLowerCase() === selector) {
          meth = subMap[_sel];
          if (typeof meth === 'function') meth(e, el);else if (this[meth]) this[meth](e, el);
          break;
        }
      }
    }
  }, {
    key: "setAutoPause",
    value: function setAutoPause() {
      var _this2 = this;

      this.on('toggled:addon', function (on) {
        if (on) _this2.addListeners();else _this2.removeListeners();
      });
    }
  }, {
    key: "addListener",
    value: function addListener(type, meth, el) {
      el = el || this.el;
      var handler = typeof meth === 'function' ? meth : this[meth];
      el.addEventListener(type, handler, false);

      if (el === this.el) {
        if (!this._bound[type]) this._bound[type] = [];

        this._bound[type].push(handler);
      } else {
        this._extraBound.push([el, type, handler]);
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var events = this.events,
          domEvents,
          el,
          subMap,
          type,
          handler;
      if (!events || !(domEvents = events.DOM) || !(el = this.el)) return false;

      for (type in domEvents) {
        subMap = domEvents[type];
        handler = this.proxy(this, this.generalHandler, subMap, type);
        el.addEventListener(type, handler, false);
        if (!this._bound[type]) this._bound[type] = [];

        this._bound[type].push(handler);
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var type, _bound, l;

      for (type in this._bound) {
        _bound = this._bound[type];
        l = _bound.length;

        while (l--) {
          this.el.removeEventListener(type, _bound[l], false);

          _bound.splice(l, 1);
        }
      }

      var _extra = this._extraBound,
          i = 0,
          set;
      l = _extra.length;

      for (; i < l; i++) {
        set = _extra[i];
        set[0].removeEventListener(set[1], set[2], false);
      }
    }
  }]);

  return _DOMMODULE;
}(_module._MODULE);

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

/***/ "./utils/l10n.js":
/*!***********************!*\
  !*** ./utils/l10n.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  document.addEventListener('DOMContentLoaded', function () {
    return translateDocument();
  }, {
    capture: false,
    passive: true,
    once: true
  });
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
* Translates a HTMl page in the web l10n style from the Add-on SDK with WebExtensions strings.
* Modified by underflyingbirches
*
* @author Martin Giger
* @see {@link https://gist.github.com/freaktechnik/4a72bc0711d9bc82cf3b075bcc292953}
* @license MPL-2.0
*/
function translateDocument() {
  var el, data, dataset; // Set the language attribute of the document.

  document.documentElement.setAttribute('lang', browser.i18n.getUILanguage().replace('_', '-')); // Get all elements that are marked as being translateable.

  var textElements = document.querySelectorAll('*[data-l10n-id]');
  var attrElements = document.querySelectorAll('*[data-l10n-attr]');

  var _iterator = _createForOfIteratorHelper(textElements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      el = _step.value;
      dataset = el.dataset;
      var l10nId = dataset.l10nId;

      if (l10nId) {
        data = browser.i18n.getMessage(l10nId, '');

        if (data && data != '??') {
          el.textContent = data;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(attrElements),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      el = _step2.value;
      dataset = el.dataset;
      ['Title', 'Placeholder', 'Href'].forEach(function (attr) {
        var l10nAttr = dataset['l10n' + attr];

        if (l10nAttr) {
          data = browser.i18n.getMessage(l10nAttr);

          if (data && data != '??') {
            el.setAttribute(attr.toLowerCase(), data);
          }
        }
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX1BSSVZQT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJ1cGRhdGVkIiwicmVzdG9yaW5nIiwiaWZyYW1lIiwibmFtZSIsInVuZGVmaW5lZCIsImlzTmV3IiwiZW50cmllcyIsImxvY2tlZCIsImhhc2hTZW5zaXRpdmUiLCJ0bWlkIiwibm90ZUNvbG9yIiwibm90ZUZvbnRTaXplIiwiaW1tdXQiLCJyZWRlc2NyaWJpbmciLCJyZXN1bWUiLCJ1cGRhdGVMb2NhdGlvbiIsIndpbmRvdyIsInBhcmVudCIsImRvY3VtZW50IiwiVVJMIiwidXBkYXRlU3RhdHVzIiwicXVlcnlTZWxlY3RvciIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnlTZXR0aW5ncyIsImhpc3RvcnkiLCJuYW1pbmciLCJpZ25vcmVIYXNoIiwiZW1pdCIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJmaXJzdEVudHJ5IiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInJlc3RvcmVyIiwiYXV0b2luaXQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJveHkiLCJvbkhhc2hDaGFuZ2UiLCJvblJlc3VtZWQiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsImJvb2ttYXJrIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbkVudHJpZXNGb3VuZCIsIm9uIiwic3RhcnRSZXN0b3JhdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsInJlY2VudGx5T3BlbmVkRW50cnkiLCJ1cGRhdGVOYW1lIiwibm90aWZ5QkciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJoYW5kbGVyIiwibWFya2VyIiwidXBkYXRlIiwibWFya21ldGhvZCIsInNldE1hcmtlciIsImtleSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJsaXN0ZW5pbmciLCJzdGFydExpc3RlbmluZyIsInN0b3BMaXN0ZW5pbmciLCJvbk1vdXNldXAiLCJiaW5kIiwiYm9keSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b1N0cmluZyIsIl9CT09LTUFSSyIsIm1hcmsiLCJhbmNob3IiLCJ3cmFwcGVycyIsInciLCJrZXlEYXRhIiwiaWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJibSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImFjdGl2YXRlIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVtb3ZlTGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJidXR0b24iLCJ0YXJnZXQiLCJjb250YWlucyIsImdldEF0dHJpYnV0ZSIsIl9NQVJLIiwicHJlU2V0dGluZ3MiLCJkZWZhdWx0cyIsImlzSW1tdXQiLCJzdHlsZSIsImNvbmRzIiwidGV4dCIsIm5vdGUiLCJkIiwiaWRjb3VudCIsInNpbXBsZSIsInJhbmdlIiwic3RhcnRPZmZzZXQiLCJlbmRPZmZzZXQiLCJjb250YWluZXJzIiwiYW5jaG9yTm9kZVBvc2l0aW9uIiwiZm9jdXNOb2RlUG9zaXRpb24iLCJkZXNjcmliZV9pbW11dCIsIm5vZGVzIiwibiIsImNyZWF0ZVdyYXBwZXJzIiwibGFzdEluZGV4Iiwibm9kZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNldFN0YXJ0Iiwic2V0RW5kIiwic3Vycm91bmRDb250ZW50cyIsInB1c2giLCJwYXJlbnROb2RlIiwibm9ybWFsaXplIiwiZGVmaW5lUG9zaXRpb24iLCJzZXRCb29rbWFyayIsImRlc2NyaWJlIiwicmVnaXN0ZXJDbGlja0xpc3RlbmVycyIsIndyYXBwZXIiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicmVjcmVhdGUiLCJwb3B1cCIsImVsIiwiYmdDb2xvclJlZ0V4cCIsImJnQ29sb3IiLCJjb2xvckJ0biIsIm0iLCJtYXRjaCIsImFwcGVuZENoaWxkIiwiYmFja2dyb3VuZCIsInBvcCIsInJlbW92ZUNoaWxkIiwic2hvdyIsInBvcHVwSGVpZ2h0Iiwib25Nb3VzZWRvd24iLCJzZWxlY3Rpb25Qb3NpdGlvbiIsImdldFJhbmdlQXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJvZmZzZXRIZWlnaHQiLCJNYXRoIiwibWF4IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJhcHBseSIsImF1dG9ub3RlIiwidW5kbyIsIm5vQXV0b3NhdmUiLCJ1bmRvQm9va21hcmsiLCJyZWRvIiwiY3V0T3V0IiwidG9CZVJlbW92ZWQiLCJpbmRpY2VzIiwic21hbGxlc3RJRCIsImZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzIiwiaiIsIngiLCJtYXJrc0ludGVyc2VjdCIsImluY2x1ZGVzIiwic29ydCIsInNoaWZ0IiwibWluIiwic3BsaWNlIiwiZ2V0QnlJZCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsImZvckVhY2giLCJhcmciLCJvcHRpb25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoaWdobGlnaHQiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHRDb250ZW50Iiwic2lsZW50IiwiaW1tdXRhYmxlIiwic2F2ZSIsInJlcXVlc3QiLCJncmFudGVkIiwic3ViIiwiaTE4biIsImdldE1lc3NhZ2UiLCJwcm9tcHQiLCJyZXRyaWV2ZUVudHJ5IiwiY29uZmlybWVkIiwiY29uZmlybSIsImNvcHkiLCJzZWFyY2giLCJhbGVydCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImZpbmRNYXJrIiwidHJpbSIsInN0b3JlIiwib3JkZXIiLCJvcmRlck1hcmtzVmlzdWFsbHkiLCJfU0VMRUNUSU9OIiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJhcmVhX2hpc3RvcnkiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXRUaW1lb3V0Iiwic2V0IiwicmVtb3ZlQm9va21hcmsiLCJtYXJrMSIsIm1hcmsyIiwibTEiLCJtMiIsImJiMSIsImJiMiIsInRvcDEiLCJ0b3AyIiwibWFwIiwid3JhcHBlcnMxIiwidzEiLCJpZDEiLCJ3cmFwcGVyczIiLCJpZDIiLCJ3MiIsIm9uTWFya2VyS2V5Iiwib25Ib3RrZXkiLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0Iiwia0QiLCJjb2xvciIsIkJPRFkiLCJET00iLCJjbGljayIsImtleXVwIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwibWFya0NsaWNrSGFuZGxlciIsInZpc2libGUiLCJyZWNlbnRseVVwZGF0ZWQiLCJzZXR0aW5nc01vZGUiLCJ0Iiwic2l6ZSIsImgiLCJkcmFnRFgiLCJkcmFnRFkiLCJtdXRhdGlvbk9ic2VydmVyIiwiYWRqdXN0Tm90ZURhdGFPYmplY3QiLCJjcmVhdGVOb3RlRWxlbWVudCIsImFkZExpc3RlbmVycyIsImFkZE1hcmtMaXN0ZW5lcnMiLCJub3RlRGF0YSIsImZzIiwiaGVhZGVyIiwiYWN0aW9ucyIsImRlbCIsImdlYXIiLCJwYWxldHRlIiwidGV4dEVsZW1lbnQiLCJkZWxUZXh0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluVGV4dCIsImdlYXJUZXh0IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJhdHRlbXB0VXBkYXRlIiwiX2RlbGV0ZSIsImhpZGUiLCJyZW1vdmVNYXJrTGlzdGVuZXJzIiwiZm9yY2UiLCJrZXlDb2RlIiwiaW5uZXJXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRQb3NpdGlvbiIsIm9mZnNldCIsImZvbnRTaXplIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25uZWN0TXV0YXRpb25PYnNlcnZlciIsImZvY3VzIiwiYnJpbmdVcEZyb250IiwiekluZGV4IiwiZGlzY29ubmVjdCIsInRvZ2dsZSIsInRvZ2dsZVBhbGV0dGUiLCJjaGFuZ2VDb2xvciIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRhcmVhIiwiY29uZmlnIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwic2F2ZVNpemUiLCJvYnNlcnZlIiwicmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib25EcmFnU3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwib25EcmFnIiwib25EcmFnRW5kIiwibXV0YXRpb25zTGlzdCIsIndpZHRoIiwibm90ZXMiLCJkcmFnSGFuZGxlciIsImRyYWdTdG9wSGFuZGxlciIsInVwZGF0ZVN0eWxlIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJtZXRoIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsIm5vdGVmb250c2l6ZSIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJzdGFydERyYWdnaW5nTm90ZSIsImVtaXREcmFnRXZlbnQiLCJzdG9wRHJhZ2dpbmdOb3RlIiwiZG9jIiwic2VuZE5vdGVzU3RhdGUiLCJyZXBvcnQiLCJhdXRvUGF1c2UiLCJrZXlkb3duIiwic2VsZWN0aW9uY2hhbmdlIiwic2VsZWN0aW9uQ29sbGFwc2VkIiwic2hpZnRTZW5zaXRpdmVLZXlzIiwia2V5Q29kZU1hcCIsImlzRWRpdGFibGUiLCJ0YWdOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiZGVsZWdhdGUiLCJ0b0xvd2VyQ2FzZSIsIm1vZEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJhcnJvd0tleXMiLCJsb2NrZWRBY3Rpb25zIiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJvcmlnS2V5IiwiaXNNYXJrZXJLZXkiLCJpc0N1c3RvbU1hcmtlcktleSIsInNldHRpbmciLCJzaG9ydGN1dCIsInMxIiwiczIiLCJyZXN0b3JlZCIsImZhaWxlZCIsImF0dGVtcHQiLCJmYWlsdXJlUmVwb3J0IiwiSW1tdXRSZXN0b3JlciIsIlJlc3RvcmVyIiwicmV0cnkiLCJvbkZhaWx1cmUiLCJhdXRvUmV0cnkiLCJnZXRSZXBvcnQiLCJmaW5pc2giLCJzdWNjZXNzIiwibXNnIiwicmVhc29uIiwiUmVzdG9yZXJCYXNlIiwiYXJlYSIsInByb2MiLCJjYiIsInJlYyIsImV4cGlyZSIsImxsIiwidGVtcCIsInF1ZXVlIiwiY2FjaGUiLCJwaGFzZSIsInNlbGVjdGlvblRyaWFsIiwiY2h1bmtEdXJhdGlvbiIsIl90aW1lciIsIm9vbSIsImluaXQiLCJub3ciLCJwb3N0cG9uZWQiLCJjb252ZXJ0RGVzY3JpcHRpb24iLCJjcmVhdGVUZW1wT2JqZWN0IiwiY29udmVydGVkQ29uZHMiLCJmaXJzdE5vZGVOYW1lIiwiZmlyc3RQYXJlbnROb2RlTmFtZSIsImZpcnN0VGV4dE5vZGVQb3NpdGlvbiIsImZpcnN0Tm9kZVBvc2l0aW9uIiwiZmlyc3RQYXJlbnROb2RlUG9zaXRpb24iLCJmaXJzdEdyYW1wYU5vZGVQb3NpdGlvbiIsInRyaW1tZWRUZXh0Iiwic3F1ZWV6ZWRUZXh0Iiwic3F1ZWV6ZSIsInRleHRMZW5ndGgiLCJ0cmltbWVkVGV4dExlbmd0aCIsInNxdWVlemVkVGV4dExlbmd0aCIsInBvc3NpYmxlUG9zaXRpb25zIiwicG9zc2libGVFbmRQb3NpdGlvbnMiLCJwb3NzaWJsZVN0YXJ0Tm9kZXMiLCJwb3NzaWJsZUVuZHMiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0cyIsInNvcnRRdWV1ZUJ5SWQiLCJzZXRCb2R5U2VsZWN0aW9uIiwiZ2V0VGV4dFBvc2l0aW9ucyIsInBvc3Rwb25lT3ZlcmxhcHBpbmdzIiwiZmluZFBvc3NpYmxlRXh0cmVtYSIsInJ1bGVPdXRNdWx0aXBsZXMiLCJyZXN0b3JlUmFuZ2VzIiwidGltZXIiLCJyZXMiLCJ0cmltbWVkU2VsZWN0aW9uVGV4dCIsImFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJlbmRQb3NpdGlvbnMiLCJtYXJrVGVtcCIsInNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwibWF4UG9zaXRpb24iLCJwb3NpdGlvbnMiLCJwb3MxIiwicG9zMiIsInBvc3Rwb25lIiwiY3V0T3V0Rm9yIiwiYWxyZWFkeUluY2x1ZGVkIiwiYm9keVRleHROb2RlcyIsInNhdGlzZmllZCIsImNoYXJzIiwibmV4dFN0YXJ0Rm91bmQiLCJlbmRpbmdzSW5UaGlzTm9kZSIsIm5vZGVzVGV4dCIsIm5vZGVzVGV4dExlbmd0aCIsImRpZmYiLCJmIiwicSIsInBvc3NpYmxlRm9jdXNPZmZzZXQiLCJzdGFydEZvdW5kRm9yIiwiaGFzRW5kaW5nc0luVGhpc05vZGUiLCJlbmRGb3VuZEZvciIsInNhdGlzZmllc0Rlc2NyaXB0aW9uIiwiZmluZEZvY3VzT2Zmc2V0IiwiZ3JhbmRncmFuZGdyYW1wYSIsIm1hdGNoZXMiLCJzdGFydE5vZGUiLCJzdGFydE5vZGVQb3NpdGlvbiIsInNldE1hdGNoaW5nRW5kIiwiZW5kTm9kZSIsImVuZE5vZGVQb3NpdGlvbiIsImZvY3VzT2Zmc2V0IiwiZGVzY3JpcHRpb24iLCJyZWxldmFudE5vZGVUZXh0IiwibWFya1RleHQiLCJ0ZXh0c01hdGNoIiwibm9kZVRleHQiLCJjb3VudGVyIiwidGVzdCIsImNyZWF0ZVJhbmdlIiwicmVjb2xsZWN0Tm9kZXMiLCJzbGljZSIsImNvbnRleHQiLCJjdXJyZW50Q2hpbGQiLCJwcm9jZXNzSW5DaHVua3MiLCJyZXN0b3JlUmFuZ2UiLCJnZXROb2RlIiwidGV4dE5vZGVQb3NpdGlvbiIsInJhbmdlQ291bnQiLCJkZWZpbmVkIiwicmVkdWNlVG9PbmVSYW5nZSIsInJldHJpZXZlVGV4dCIsImFkanVzdCIsInNlbGVjdEFsbENoaWxkcmVuIiwicHJvcHMiLCJpc1NpbXBsZSIsImlzQmFja3dhcmRzIiwicmV2ZXJzZSIsImZpcnN0VGV4dE5vZGUiLCJsYXN0VGV4dE5vZGUiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsIndob2xlRG9jdW1lbnQiLCJnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lciIsImZpbHRlciIsImlzU2VsZWN0YWJsZSIsImlzQmxhbmsiLCJoYXNOb3JtYWxQYXJlbnQiLCJjb250YWluc05vZGUiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJ0cmltU2VsZWN0aW9uIiwicmVkdWNlVG9TZWxlY3RhYmxlIiwiY29sbGVjdFBhcmVudE5vZGVzIiwibWFya1dyYXBwZXJzIiwibmV3U2VnbWVudCIsInByZXYiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJ1bnNoaWZ0IiwiYW5jaG9yT2Zmc2V0Iiwic3Vic3RyIiwic2VsIiwicmciLCJzZWxlY3ROb2RlIiwicGFyZW50cyIsIm5vZGVUZXh0cyIsImpvaW4iLCJub2RlMSIsIm5vZGUyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJyYW5nZTAiLCJsYXN0UmFuZ2UiLCJ0YWciLCJ0b1VwcGVyQ2FzZSIsImlzQ2hpbGRPZiIsImF0dGFjaGVkIiwiYnV0dG9ucyIsInNob3duIiwiY3JlYXRlQnV0dG9ucyIsInVwZGF0ZVN0YXRlIiwic2hvdWxkQXR0YWNoIiwicmVuZGVyIiwiYnRuIiwiYiIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInVwZGF0ZVBvc2l0aW9uIiwidG11aSIsIm5vdGVzQnV0dG9uIiwiYm9va21hcmtCdXR0b24iLCJ0eXBlIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJPTkVPRkYiLCJ2ZXJzaW9uIiwicnVudGltZSIsImdldE1hbmlmZXN0IiwieiIsInkiLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiZG93bmxvYWQiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJhdXRvY3MiLCJpZnJhbWVzIiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJsb2FkTm90ZSIsImN1c3RvbVNlYXJjaCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsImxpbmtzIiwidGhlbWVzIiwidGhlbWUiLCJwYWdlbm90ZXMiLCJzeW5jIiwiTUFYX0xPR19FTlRSSUVTIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInZhbCIsInByb3AiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJhcmdzIiwidG9waWMiLCJzZW5kTWVzc2FnZSIsInRhYklkIiwiZXYiLCJ3YWl0IiwiZnJhbWVJZCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJyZWdpc3Rlck9uZU9mZkV2ZW50cyIsInJlcSIsImxhc3RBcmciLCJ0YWIiLCJwb3J0IiwicG9ydExpc3RlbmVyIiwiY29ubmVjdCIsInJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzIiwicmVtb3ZlTGlzdGVuZXIiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJsaXN0ZW5lciIsIl9CR1BPUlQiLCJwb3J0cyIsInJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX3BhZ2Vub3RlcyIsImxvY2FsIiwic2V0QXJlYXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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LFlBQVksQ0FBQ2hJLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCM3JCLGUiLCJmaWxlIjoiY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCwgX1BSSVZQT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfUFJJVlBPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnb25Ub2dnbGVkU3luYydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBlbnY6ICdpbmplY3Rpb24nLFxyXG5cclxuICB1cmw6ICcnLFxyXG4gIGhhc2hsZXNzVVJMOiAnJyxcclxuXHJcbiAgdXBkYXRlZDogZmFsc2UsXHJcbiAgcmVzdG9yaW5nOiBmYWxzZSxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgbm90ZUZvbnRTaXplOiAxMixcclxuICBpbW11dDogZmFsc2UsXHJcbiAgcmVkZXNjcmliaW5nOiBmYWxzZSxcclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5lbnRyaWVzID0ge307XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnRtaWQgPSAnJztcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZUxvY2F0aW9uKCkge1xyXG4gICAgdGhpcy5pZnJhbWUgPSB3aW5kb3cgIT09IHdpbmRvdy5wYXJlbnQud2luZG93O1xyXG4gICAgdGhpcy51cmwgPSB3aW5kb3cuZG9jdW1lbnQuVVJMO1xyXG4gICAgdGhpcy5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyh0aGlzLnVybCk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlZDpzdG9yZS1zdGF0dXMnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlbmFtZUVudHJ5KGVudHJ5LCBvbGROYW1lKSB7XHJcbiAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMubmFtZSA9PT0gb2xkTmFtZSAmJiAhdGhpcy5sb2NrZWQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gZW50cnkubmFtZTtcclxuICAgICAgaWYgKHRoaXMuZW50cmllc1tvbGROYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXRTeW5jRm9yRW50cnkoZW50cnkpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQgJiYgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXS5zeW5jZWQgPSBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlRW50cnkoZGVsZXRlZEVudHJ5KSB7XHJcbiAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGlmIChlbnRyaWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIG5hbWUgPT09IGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIGFkZEVudHJpZXMoZW50cmllcykge1xyXG4gICAgaWYgKCFlbnRyaWVzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICBjb25zdCBlID0gZW50cmllcy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCkgdGhpcy5uYW1lID0gZmlyc3RFbnRyeS5uYW1lO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZmlyc3RFbnRyeS5pbW11dDtcclxuICAgIHRoaXMuaGFzaFNlbnNpdGl2ZSA9IGZpcnN0RW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICB9LFxyXG5cclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdG11aSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyLXBvcHVwJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9hdXRvLW1hcmtlcidcclxuXHJcbmltcG9ydCAnLi9tYWluJ1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0IF9SRVNUT1JFUiBmcm9tICcuL21vZHVsZXMvcmVzdG9yZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmRQYWdlU3RhdGUnLFxyXG5cclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG5cclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmhhc2hvcHQtc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYyc6ICdzZXRTeW5jRm9yRW50cnknLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJzogJ3JlbmFtZUVudHJ5JyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgJ3Jlc3VtZWQtb24taGFzaGNoYW5nZSc6ICdvblJlc3VtZWQnLFxyXG5cclxuICAgICAgLy8gQFJFU1RPUkVSXHJcbiAgICAgICdlbnRyaWVzOmZvdW5kJzogJ29uRW50cmllc0ZvdW5kJyxcclxuXHJcbiAgICAgIC8vIHJlZ2lzdGVyIGF0IEJHXHJcbiAgICAgICdpbmplY3RlZD8nOiAnbm90aWZ5QkcnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmV0cnlBY3RpdmU6IGZhbHNlLFxyXG4gIHJlc3RvcmVyOiBudWxsLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS51cGRhdGVMb2NhdGlvbigpO1xyXG4gICAgX1NUT1JFLnVwZGF0ZVN0YXR1cygpO1xyXG4gICAgaWYgKCF0aGlzLmlmcmFtZSkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMucHJveHkodGhpcywgdGhpcy5vbkhhc2hDaGFuZ2UpLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25IYXNoQ2hhbmdlKCkge1xyXG4gICAgaWYgKF9TVE9SRS5oYXNoU2Vuc2l0aXZlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnaGFzaGNoYW5nZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25SZXN1bWVkKCkge1xyXG4gICAgX1NUT1JFLnVwZGF0ZUxvY2F0aW9uKCk7XHJcbiAgICBfU1RPUkUuaXNOZXcgfHwgX1NUT1JFLnJlc3VtZSgpO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnZmV0Y2g6ZW50cmllcycsIF9TVE9SRS51cmwpO1xyXG4gIH0sXHJcbiAgb25TYXZlZEVudHJ5KGVudHJ5KSB7XHJcbiAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAoZW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLmFkZEVudHJpZXMoW2VudHJ5XSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IHRydWU7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICB0aGlzLnJldHJ5QWN0aXZlID0gZmFsc2U7XHJcbiAgfSxcclxuICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgncGFnZS1zdGF0ZScsIHtcclxuICAgICAgc2VsZWN0aW9uOiAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkLFxyXG4gICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgcmV0cnlBY3RpdmU6IHRoaXMucmV0cnlBY3RpdmVcclxuICAgIH0sIGluZm8pO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVN0YXR1cygpIHtcclxuICAgIF9TVE9SRS51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG4gIHNldFN5bmNGb3JFbnRyeSguLi5hcmdzKSB7XHJcbiAgICBfU1RPUkUuc2V0U3luY0ZvckVudHJ5KC4uLmFyZ3MpO1xyXG4gIH0sXHJcbiAgcmVuYW1lRW50cnkoLi4uYXJncykge1xyXG4gICAgX1NUT1JFLnJlbmFtZUVudHJ5KC4uLmFyZ3MpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlRW50cnkoLi4uYXJncykge1xyXG4gICAgX1NUT1JFLnJlbW92ZUVudHJ5KC4uLmFyZ3MpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEBSRVNUT1JFUlxyXG4gIG9uRW50cmllc0ZvdW5kKGluZm8pIHtcclxuICAgIGlmICghX1NUT1JFLnVwZGF0ZWQpIHtcclxuICAgICAgdGhpcy5vbigndXBkYXRlZDpzdG9yZS1zdGF0dXMnLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc3RhcnRSZXN0b3JhdGlvbiwgaW5mbykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGFydFJlc3RvcmF0aW9uKGluZm8pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnRSZXN0b3JhdGlvbihpbmZvKSB7XHJcbiAgICBsZXQgZW50cmllcyA9IGluZm8uZW50cmllcztcclxuICAgIGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGVudHJpZXMpID8gZW50cmllcyA6IFtlbnRyaWVzXTtcclxuICAgIF9TVE9SRS5sb2NrZWQgPSBpbmZvLmxvY2tlZDtcclxuICAgIGlmICghdGhpcy5yZXN0b3JlcikgdGhpcy5yZXN0b3JlciA9IF9SRVNUT1JFUigpO1xyXG4gICAgX1NUT1JFLmFkZEVudHJpZXMoZW50cmllcyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NldDplbnRyaWVzJywgZW50cmllcyk7XHJcbiAgICBpZiAoaW5mby5yZWNlbnRseU9wZW5lZEVudHJ5KSB0aGlzLnVwZGF0ZU5hbWUoZW50cmllcywgaW5mby5yZWNlbnRseU9wZW5lZEVudHJ5KTtcclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTptYXJrcycsIGluZm8uZW50cmllcyk7XHJcbiAgfSxcclxuICB1cGRhdGVOYW1lKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFmaXJzdEVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBub3RpZnlCRyhzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgc2VuZFJlc3BvbnNlKHRydWUpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJzogJ3NldE1hcmtlcidcclxuICAgIH1cclxuXHR9LFxyXG5cclxuICBoYW5kbGVyOiBudWxsLFxyXG4gIG1hcmtlcjogJ20nLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0TWFya2VyKGtleSkge1xyXG4gICAgdGhpcy5tYXJrZXIgPSBrZXk7XHJcbiAgfSxcclxuICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZCAmJiAhdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkICYmIHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2V1cC5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdG9wTGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTW91c2V1cCgpIHtcclxuICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1lbmQnLCB0aGlzLm1hcmtlcik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9CT09LTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXJrID0gbnVsbDtcclxuICAgIHRoaXMuYW5jaG9yID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldChtYXJrKSB7XHJcbiAgICBtYXJrID0gbWFyayB8fCB0aGlzLm1hcms7XHJcblxyXG4gICAgbGV0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG4gICAgICAgIGFuY2hvciA9IHdyYXBwZXJzWzBdO1xyXG5cclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IHRydWU7XHJcbiAgICBhbmNob3IuaWQgPSAndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuXHJcbiAgICB0aGlzLm1hcmsgPSBtYXJrO1xyXG4gICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGxldCBtYXJrID0gdGhpcy5tYXJrLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yLFxyXG4gICAgICAgIHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoO1xyXG5cclxuICAgIGFuY2hvci5pZCA9ICcnO1xyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG4gIH1cclxuICBzY3JvbGxJbnRvVmlldyhibSkge1xyXG4gICAgaWYgKGJtIHx8IChibSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSkpXHJcbiAgICAgIGJtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAnYWN0aXZhdGUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUodHJ1ZSk7XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZhdGUob24pIHtcclxuICAgIGlmIChvbiAmJiAhdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlckhhbmRsZXIoKTtcclxuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIW9uICYmIHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZWdpc3RlckhhbmRsZXIoKSB7XHJcbiAgICB0aGlzLmFkZExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGV4dG1hcmtlci1oaWdobGlnaHQnKSkge1xyXG4gICAgICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBfU1RPUkUudG1pZCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9LCB3aW5kb3cuZG9jdW1lbnQpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcmtlciwga2V5LCBwcmVTZXR0aW5ncywgaW1tdXQpIHtcclxuICAgIGxldCBzZWxlY3Rpb24sIGRlZmF1bHRzO1xyXG5cclxuXHRcdHRoaXMubWFya2VyID0gbWFya2VyO1xyXG5cdFx0c2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBtYXJrZXIuc2VsZWN0aW9uO1xyXG4gICAgdGhpcy5pbW11dCA9IF9TVE9SRS5yZWRlc2NyaWJpbmcgPyBtYXJrZXIuaXNJbW11dCA6IGltbXV0O1xyXG5cclxuICAgIGRlZmF1bHRzID0ge1xyXG4gICAgICBzdHlsZTogJycsXHJcbiAgICAgIGJvb2ttYXJrOiBmYWxzZSxcclxuICAgICAgY29uZHM6IG51bGwsXHJcbiAgICAgIHRleHQ6IHNlbGVjdGlvbi50ZXh0LFxyXG4gICAgICBub3RlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZCBpbiBkZWZhdWx0cykge1xyXG4gICAgICBpZiAoIXByZVNldHRpbmdzLmhhc093blByb3BlcnR5KGQpKSB7XHJcbiAgICAgICAgcHJlU2V0dGluZ3NbZF0gPSBkZWZhdWx0c1tkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlU2V0dGluZ3MuaWQgPSBwcmVTZXR0aW5ncy5pZCB8fCArK21hcmtlci5pZGNvdW50O1xyXG5cdFx0dGhpcy5pZCA9IHByZVNldHRpbmdzLmlkO1xyXG5cdFx0dGhpcy5zaW1wbGUgPSBzZWxlY3Rpb24uc2ltcGxlO1xyXG5cclxuXHRcdGxldCByYW5nZSA9IHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24ucmFuZ2U7XHJcblxyXG5cdFx0dGhpcy5zdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0O1xyXG5cdFx0dGhpcy5lbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXQ7XHJcblxyXG5cdFx0dGhpcy53cmFwcGVycyA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcclxuXHJcblx0XHR0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IG51bGw7XHJcblx0XHR0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmtleURhdGEgPSB7XHJcblx0XHRcdGlkOiBwcmVTZXR0aW5ncy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdHN0eWxlOiBwcmVTZXR0aW5ncy5zdHlsZSxcclxuXHRcdFx0Y29uZHM6IHByZVNldHRpbmdzLmNvbmRzLFxyXG5cdFx0XHR0ZXh0OiBwcmVTZXR0aW5ncy50ZXh0LFxyXG5cdFx0XHRib29rbWFyazogcHJlU2V0dGluZ3MuYm9va21hcmssXHJcbiAgICAgIG5vdGU6IHByZVNldHRpbmdzLm5vdGUsXHJcbiAgICAgIHN5bmNlZDogcHJlU2V0dGluZ3Muc3luY2VkXHJcblx0XHR9O1xyXG5cclxuICAgIGlmICh0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB7XHJcbiAgICAgIHRoaXMuZGVzY3JpYmVfaW1tdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cdGNyZWF0ZShyYW5nZSkge1xyXG4gICAgcmFuZ2UgPSByYW5nZSB8fCB0aGlzLnJhbmdlO1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIHN0eWxlID0gdGhpcy5rZXlEYXRhLnN0eWxlLFxyXG4gICAgICAgIG5vZGVzID0gc2VsZWN0aW9uLm5vZGVzLFxyXG4gICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzID0gdGhpcy53cmFwcGVycyB8fCB0aGlzLmNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBuKSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBsYXN0SW5kZXggPSBuIC0gMSxcclxuICAgICAgICBub2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgICBpZiAoIWkpIHJhbmdlLnNldFN0YXJ0KG5vZGUsIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG5cclxuICAgICAgaWYgKGkgPT09IGxhc3RJbmRleClcclxuICAgICAgICByYW5nZS5zZXRFbmQobm9kZSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgICAgcmFuZ2Uuc3Vycm91bmRDb250ZW50cyh3cmFwcGVyc1tpXSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKHdyYXBwZXJzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgICAgbm9kZS5wYXJlbnROb2RlLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24obGFzdEluZGV4KTtcclxuXHJcbiAgICBpZiAodGhpcy5rZXlEYXRhLmJvb2ttYXJrKSB0aGlzLm1hcmtlci5zZXRCb29rbWFyayh0aGlzLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB0aGlzLmRlc2NyaWJlKCk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlckNsaWNrTGlzdGVuZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG4gIHJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hcmtlci5wcm94eSh0aGlzLCB0aGlzLm9uQ2xpY2spLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uQ2xpY2soZSkge1xyXG4gICAgbGV0IGV2ZW50O1xyXG4gICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgIGV2ZW50ID0gJ2NsaWNrZWQ6bWFyayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUgKyAnXzAnO1xyXG4gICAgICBldmVudCA9ICdhY3RpdmF0ZWQ6bWFyayc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hcmtlci5lbWl0KGV2ZW50LCB7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBib29rbWFyazogISF0aGlzLmtleURhdGEuYm9va21hcmssXHJcbiAgICAgIG5vdGU6ICEhdGhpcy5rZXlEYXRhLm5vdGVcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWZpbmVQb3NpdGlvbihuLCBpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICBsZXQgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgbiA9IHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gOiB3cmFwcGVycy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgZmlyc3RXcmFwcGVyID0gd3JhcHBlcnNbMF07XHJcbiAgICBjb25zdCBsYXN0V3JhcHBlciA9IHdyYXBwZXJzW25dO1xyXG4gICAgY29uc3QgZmlyc3RQYXJlbnQgPSBmaXJzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGxhc3RQYXJlbnQgPSBsYXN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgbGV0IGFuY2hvclByZXYsIGZvY3VzUHJldjtcclxuXHJcbiAgICB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChmaXJzdFBhcmVudCwgZmlyc3RXcmFwcGVyLCB0cnVlKSAtIDE7XHJcbiAgICB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGxhc3RQYXJlbnQsIGxhc3RXcmFwcGVyLCB0cnVlKTtcclxuXHJcbiAgICBhbmNob3JQcmV2ID0gZmlyc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuICAgIGZvY3VzUHJldiA9IGxhc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICBpZiAoYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2Lm5vZGVUeXBlID09PSAxKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiArPSAxO1xyXG4gICAgaWYgKCFmb2N1c1ByZXYgfHwgZm9jdXNQcmV2Lm5vZGVUeXBlID09PSAzIHx8IGZpcnN0UGFyZW50ID09PSBsYXN0UGFyZW50KSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIC09IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSAwO1xyXG4gICAgaWYgKHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gMDtcclxuXHJcbiAgICBpZiAoaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2LmRhdGEgPyBhbmNob3JQcmV2LmRhdGEubGVuZ3RoIDogMDtcclxuICAgICAgdGhpcy5lbmRPZmZzZXQgPSB0aGlzLnNpbXBsZSA/IHRoaXMuc3RhcnRPZmZzZXQgKyB0aGlzLmtleURhdGEudGV4dC5sZW5ndGggOiB0aGlzLmVuZE9mZnNldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKHVuZGVmaW5lZCwgdHJ1ZSlcclxuICAgICAgICAuZGVzY3JpYmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblx0dW5kbygpIHtcclxuXHRcdGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG5cdFx0XHRcdHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyxcclxuXHRcdFx0XHR3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG5cdFx0XHRcdGNvbnRhaW5lciwgd3JhcHBlcjtcclxuXHJcblx0XHR3aGlsZSAody0tKSB7XHJcblx0XHRcdGNvbnRhaW5lciA9IGNvbnRhaW5lcnNbd107XHJcblx0XHRcdHdyYXBwZXIgPSB3cmFwcGVyc1t3XTtcclxuXHRcdFx0Y29udGFpbmVyLnJlcGxhY2VDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xyXG5cdFx0XHRjb250YWluZXIubm9ybWFsaXplKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cmVkbygpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGNvbnRhaW5lcnNbMF0uY2hpbGROb2Rlc1t0aGlzLmFuY2hvck5vZGVQb3NpdGlvbl0sIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGNvbnRhaW5lcnNbY29udGFpbmVycy5sZW5ndGggLSAxXS5jaGlsZE5vZGVzW3RoaXMuZm9jdXNOb2RlUG9zaXRpb25dLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbi5jb2xsZWN0Tm9kZXMoKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoKTtcclxuXHR9XHJcblx0d2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBpbmNsdWRpbmdUZXh0Tm9kZXMpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdFx0bGV0IGNoaWxkcmVuID0gaW5jbHVkaW5nVGV4dE5vZGVzIHx8IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHRcdFx0YyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdFx0XHRpID0gMDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG5cdGNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBudW1iZXIpIHtcclxuXHRcdGxldCB3cmFwcGVycyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHdyYXBwZXI7XHJcblxyXG5cdFx0Zm9yICggOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuXHRcdFx0d3JhcHBlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1oaWdobGlnaHQnKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUucmVwbGFjZSgvOy9nLCAnIWltcG9ydGFudDsnKSk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJywgdGhpcy5pZCArICdfJyArIGkpO1xyXG4gICAgICAvL3dyYXBwZXIuc2V0QXR0cmlidXRlKCdjb250ZXh0bWVudScsICd0ZXh0bWFya2VyLWN0bScpO1xyXG5cdFx0XHR3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdyYXBwZXJzO1xyXG5cdH1cclxuICBkZXNjcmliZSgpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG5cdFx0Y29uc3Qgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IHNpbmdsZU5vZGUgPSB0aGlzLnNpbXBsZTtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMud3JhcHBlcnNbMF0ucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHBhcmVudElzVE0gPSBwYXJlbnQuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcblx0XHRjb25zdCBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGdyYW5kZ3JhbXBhID0gZ3JhbXBhLnBhcmVudE5vZGUgfHwgMDtcclxuXHRcdGNvbnN0IGZUTlAgPSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbjtcclxuXHJcblx0XHR0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcblx0XHRcdG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcblx0XHRcdG4xOiBwYXJlbnRJc1RNID8gJ1RNJyA6IHBhcmVudC5ub2RlTmFtZSxcclxuXHRcdFx0cDE6IGZUTlAsXHJcblx0XHRcdG4yOiBncmFtcGEubm9kZU5hbWUsXHJcblx0XHRcdHAyOiB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpLFxyXG5cdFx0XHRwMzogZ3JhbmRncmFtcGEgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEsIGdyYW1wYSkgOiB1bmRlZmluZWQsXHJcblx0XHRcdHA0OiBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUsIGdyYW5kZ3JhbXBhKSA6IHVuZGVmaW5lZFxyXG5cdFx0fTtcclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcblx0fVxyXG4gIGRlc2NyaWJlX2ltbXV0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBlbmRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgbGV0IHN0YXJ0ID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZW5kID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQgIT09IGJvZHkpIHtcclxuICAgICAgc3RhcnRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChzdGFydC5wYXJlbnROb2RlLCBzdGFydCkpO1xyXG4gICAgICBzdGFydCA9IHN0YXJ0LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoZW5kICE9PSBib2R5KSB7XHJcbiAgICAgIGVuZFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKGVuZC5wYXJlbnROb2RlLCBlbmQpKTtcclxuICAgICAgZW5kID0gZW5kLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgbzogdGhpcy5zdGFydE9mZnNldCxcclxuICAgICAgICBwOiBzdGFydFBvc2l0aW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIGU6IHtcclxuICAgICAgICBvOiB0aGlzLmVuZE9mZnNldCxcclxuICAgICAgICBwOiBlbmRQb3NpdGlvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1hcmtlci1zZXR0aW5ncyc6ICdyZWNyZWF0ZScsXHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgIH1cclxuXHR9LFxyXG5cclxuICBoYW5kbGVyOiBudWxsLFxyXG4gIGFwcGVuZGVkOiBmYWxzZSxcclxuICBoZWlnaHQ6IDAsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKS50aGVuKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xyXG4gIH0sXHJcblxyXG4gIHJlY3JlYXRlKCkge1xyXG4gICAgdGhpcy5yZW1vdmUoKS51cGRhdGUoKS50aGVuKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAncG9wdXAnO1xyXG4gICAgICB0aGlzLm1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cCcpO1xyXG4gICAgY29uc3QgYmdDb2xvclJlZ0V4cCA9IC9iYWNrZ3JvdW5kLWNvbG9yOigjW2EtZjAtOV17Nn0pLztcclxuICAgIGxldCBiZ0NvbG9yLCBjb2xvckJ0bjtcclxuICAgIGZvciAobGV0IG0gaW4gdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgIGJnQ29sb3IgPSB0aGlzLm1hcmtlcnNbbV0uc3R5bGUubWF0Y2goYmdDb2xvclJlZ0V4cCk7XHJcbiAgICAgIGlmIChiZ0NvbG9yKSB7XHJcbiAgICAgICAgY29sb3JCdG4gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cGNvbG9yJyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JCdG4pO1xyXG4gICAgICAgIGNvbG9yQnRuLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yLnBvcCgpO1xyXG4gICAgICAgIGNvbG9yQnRuLmlkID0gJ3RtcG9wdXBjb2xvci0tJyArIG07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9LFxyXG4gIHNob3coKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBzdHlsZSA9IHBvcHVwLnN0eWxlO1xyXG4gICAgbGV0IHBvcHVwSGVpZ2h0O1xyXG5cclxuICAgIGlmICghdGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5hcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gc2VsZWN0aW9uUG9zaXRpb24udG9wIC0gc2VsZWN0aW9uUG9zaXRpb24uaGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgKyAncHgnO1xyXG4gICAgICBzdHlsZS5sZWZ0ID0gc2VsZWN0aW9uUG9zaXRpb24ubGVmdCArIHdpbmRvdy5zY3JvbGxYICsgJ3B4JztcclxuXHJcbiAgICAgIHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gTWF0aC5tYXgoMCwgcGFyc2VJbnQoc3R5bGUudG9wKSAtIHBvcHVwSGVpZ2h0KSArICdweCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgocG9wdXBIZWlnaHQgPSBwb3B1cC5vZmZzZXRIZWlnaHQpICE9PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApICsgcG9wdXBIZWlnaHQgLSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhlaWdodCA9IHBvcHVwSGVpZ2h0O1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoIXNlbGVjdGVkKSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Nb3VzZWRvd24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdUTVBPUFVQQ09MT1InKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwb3B1cC1tYXJrZXInLCBlbC5pZC5zcGxpdCgnLS0nKS5wb3AoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUksgZnJvbSAnLi9tYXJrLWl0ZW0nXHJcbmltcG9ydCBfQk9PS01BUksgZnJvbSAnLi9ib29rbWFyaydcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcblx0XHRFTlY6IHtcclxuXHRcdFx0J3NldDplbnRyaWVzJzogJ3VwZGF0ZUlEJyxcclxuXHRcdFx0J3ByZXNzZWQ6bWFya2VyLWtleSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdwcmVzc2VkOmhvdGtleSc6ICdvbkhvdGtleScsXHJcbiAgICAgICdjbGlja2VkOnBvcHVwLW1hcmtlcic6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdzZWxlY3Rpb24tZW5kJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3Jlc3RvcmVkOnJhbmdlJzogJ3JlY3JlYXRlJyxcclxuICAgICAgJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2N0eDpiJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgJ2N0eDotYic6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICdjdHg6ZCc6ICdyZW1vdmUnLFxyXG4gICAgICAnY3R4Om0nOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnY3R4Om4nOiAnYWRkTm90ZScsXHJcbiAgICAgICdjdHg6Yyc6ICdjb3B5JyxcclxuICAgICAgJ3VwZGF0ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcbiAgICAgICdyZW1vdmVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnY2hhbmdlZDpub3RlLWNvbG9yJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J2NoYW5nZWQ6bm90ZS1wb3MnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAnY2hhbmdlZDpub3RlLXNpemUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnc2lkZWJhcjpoaWdobGlnaHQnOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JzogJ3JlbW92ZScsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJzogJ3JlbW92ZUJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnOiAnaW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnOiAnc2F2ZScsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJzogJ3Jlc3VtZScsXHJcbiAgICAgICdyZXN0b3JlcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJzogJ3VuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JzogJ2NvcHknLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdvbkhhc2hDaGFuZ2UnXHJcblx0XHR9XHJcblx0fSxcclxuXHRzZWxlY3Rpb246IG51bGwsXHJcblx0ZG9uZTogW10sXHJcblx0dW5kb25lOiBbXSxcclxuXHR2aXN1YWxseU9yZGVyZWRNYXJrczogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgYm9va21hcms6IG51bGwsXHJcbiAgcmVtb3ZlZEJvb2ttYXJrOiBudWxsLFxyXG5cdGlkY291bnQ6IDAsXHJcblx0bWFya1Njcm9sbFBvczogLTEsXHJcblxyXG4gIHVwZGF0ZUlEKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICBjb25zdCBpZHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuXHJcbiAgICAgIGlmICghbG9ja2VkICYmIGVudHJ5LmlkY291bnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya3MgPSAoZW50cnkubWFya3MgfHwgW10pLmNvbmNhdChlbnRyeS5sb3N0IHx8IFtdKSxcclxuICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgIHdoaWxlIChkLS0pIHtcclxuICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pZGNvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaWRzKTtcclxuICB9LFxyXG5cdG1hcmsoa2V5LCBkYXRhLCBpbW11dCkge1xyXG5cdFx0dGhpcy51bmRvbmUubGVuZ3RoID0gMDtcclxuXHJcbiAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgIGlmIChkYXRhLmF1dG9ub3RlKSB0aGlzLmVtaXQoJ2FkZDpub3RlJywgbWFyaywgZGF0YS5hdXRvbm90ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG1hcms7XHJcblx0fSxcclxuXHR1bmRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0aWYgKGRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmUucG9wKCk7XHJcbiAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgIHRoaXMudW5kb25lLnB1c2gobWFyay51bmRvKCkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYm9va21hcmspIHRoaXMudW5kb0Jvb2ttYXJrKCk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG5cdHJlZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0aWYgKHVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMudW5kb25lLnBvcCgpO1xyXG5cclxuICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgW21hcmtdKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG4gIGN1dE91dChpKSB7XHJcbiAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICBpbmRpY2VzID0gW2ldLFxyXG4gICAgICAgIG1hcmssIHNtYWxsZXN0SUQ7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICBmb3IgKHZhciB4ID0gaiArIDE7IHggPCBsOyB4KyspIHtcclxuICAgICAgICBtYXJrID0gZG9uZVt4XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgaWYgKCF0b0JlUmVtb3ZlZC5pbmNsdWRlcyh4KSkgdG9CZVJlbW92ZWQucHVzaCh4KTtcclxuICAgICAgICAgIGluZGljZXMucHVzaCh4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW5kaWNlcy5zb3J0KCk7XHJcbiAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xyXG4gICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG4gICAgc21hbGxlc3RJRCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHRvQmVSZW1vdmVkKTtcclxuXHJcbiAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5zcGxpY2UodG9CZVJlbW92ZWQucG9wKCksIDEpWzBdLnVuZG8oKTtcclxuICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNtYWxsZXN0SUQ7XHJcbiAgfSxcclxuICByZW1vdmUoaWQpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgaWQgPSBpZCA/IGlkIDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICBsZXQgbWFyayA9IHRoaXMuZ2V0QnlJZChpZC5zcGxpdCgnXycpWzBdKSxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICBwb3NpdGlvbiA9IGRvbmUuaW5kZXhPZihtYXJrKSxcclxuICAgICAgICBzbWFsbGVzdElELCBpO1xyXG5cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgdGhpcy51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMudW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLnVuZG9uZS5sZW5ndGgpIHRoaXMucmVkbyh0cnVlKTtcclxuXHJcbiAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZFswXSk7XHJcbiAgfSxcclxuICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpXHJcbiAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gaGlnaGxpZ2h0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShoaWdobGlnaHQudGV4dENvbnRlbnQpLCBoaWdobGlnaHQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb25lID0gW107XHJcbiAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gW107XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IC0xO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgncmVzdW1lZDptYXJrZXJzJywgZW50cnkpO1xyXG4gIH0sXHJcbiAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICB0aGlzLmlzSW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gdHJ1ZTtcclxuICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgfSxcclxuICBzYXZlKCkge1xyXG4gICAgY29uc3QgaWZyYW1lID0gX1NUT1JFLmlmcmFtZTtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcblxyXG4gICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICBpZiAoX1NUT1JFLmlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGlmICghbG9ja2VkICYmIG5hbWluZyA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGlmcmFtZSA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgIGlmIChfU1RPUkUubmFtZSkgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBjb25maXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG4gICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cdH0sXHJcbiAgYXV0b3NhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgndW5zYXZlZC1jaGFuZ2VzJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNvcHkoZ3JhbnRlZCkge1xyXG4gICAgaWYgKF9TVE9SRS51cmwuc2VhcmNoKC9eaHR0cHMvKSA9PT0gLTEpIHtcclxuICAgICAgYWxlcnQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfY29weV9odHRwc29ubHknKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChncmFudGVkID09PSBmYWxzZSkge1xyXG4gICAgICBhbGVydChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9jb3B5X25vcGVybWlzc2lvbicpKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkIHx8ICFuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCkge1xyXG4gICAgICBhbGVydChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9jb3B5X25vc3VwcG9ydCcpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmZpbmRNYXJrKCk7XHJcbiAgICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCByYW5nZSA9IG1hcmsucmFuZ2U7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IG1hcmsuc2VsZWN0aW9uLnNlbGY7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycztcclxuXHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHdyYXBwZXJzWzBdLCAwKTtcclxuICAgICAgcmFuZ2Uuc2V0RW5kKHdyYXBwZXJzW3dyYXBwZXJzLmxlbmd0aCAtIDFdLCAxKTtcclxuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICBcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2VsZWN0aW9uLnRvU3RyaW5nKCkudHJpbSgpLnJlcGxhY2UoLyhcXHJcXG4pezEsfS9nLCAnXFxyXFxuJykpO1xyXG4gICAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdG9yZShtYXJrLCBzYXZlLCBvcmRlcikge1xyXG5cdFx0dGhpcy5kb25lLnB1c2gobWFyayk7XHJcbiAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdGlmIChvcmRlcikgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHR9LFxyXG4gIHJlY3JlYXRlKG1hcmspIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKG1hcmsua2V5LCBtYXJrKSwgZmFsc2UsIGZhbHNlKTtcclxuICB9LFxyXG4gIG9uRmluaXNoZWRSZXN0b3JhdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5kb25lLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbWl0KCdjb21wbGV0ZWQ6cmVzdG9yYXRpb24tcHJvY2VzcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIHRoaXMuZG9uZSk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChfU1RPUkUubmFtZSA9PT0gbWFyay5rZXlEYXRhLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkpIHtcclxuICAgICAgICB0aGlzLmdvdG9NYXJrKG1hcmspO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLnJlZGVzY3JpYmluZykge1xyXG4gICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQ6cmVzdG9yYXRpb24tcHJvY2VzcycpO1xyXG4gIH0sXHJcbiAgYWRkTm90ZShpZCkge1xyXG4gICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICB9LFxyXG4gIHNhdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAoIV9TVE9SRS5sb2NrZWQpIHJldHVybiB0aGlzLmF1dG9zYXZlKCk7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IHRoaXMuZ2V0QnlJZChpZCkua2V5RGF0YTtcclxuICAgIGNvbnN0IHN5bmNlZCA9IHR5cGVvZiBtYXJrLnN5bmNlZCA9PT0gJ2Jvb2xlYW4nID8gbWFyay5zeW5jZWQgOiBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgIG1hcmtzOiBbbWFya10sXHJcbiAgICAgIG5hbWU6IG1hcmsudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSxcclxuICAgICAgc3luY2VkXHJcbiAgICB9O1xyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgZW50cnkpO1xyXG4gIH0sXHJcbiAgZ290b01hcmsobWFyaykge1xyXG4gICAgY29uc3QgbWFya0VsZW1lbnRzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcztcclxuICAgIGxldCBlbCwgcG9zLCBpZDtcclxuICAgIGlmIChtYXJrIHx8IG1hcmsgPT09IDApIHtcclxuICAgICAgaWYgKHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IG1hcmsgKyAxO1xyXG4gICAgICAgIGVsID0gbWFya0VsZW1lbnRzW21hcmtdO1xyXG4gICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZD1cIicgKyBpZCArICdfMFwiXScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3MgPSB0aGlzLm1hcmtTY3JvbGxQb3M7XHJcbiAgICAgIGVsID0gbWFya0VsZW1lbnRzW3Bvc107XHJcbiAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG5cclxuXHRcdGlmICghbWFyayB8fCB0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHRoaXMuZ2V0QnlJZChpZCkub25DbGljayhpZCk7XHJcbiAgICB0aGlzLmluZGljYXRlTWFyayhpZCk7XHJcbiAgfSxcclxuXHRnb3RvTmV4dE1hcmsoZGlyKSB7XHJcblx0XHRjb25zdCBsID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5sZW5ndGg7XHJcblxyXG5cdFx0dGhpcy5tYXJrU2Nyb2xsUG9zICs9IGRpcjtcclxuXHJcblx0XHRpZiAodGhpcy5tYXJrU2Nyb2xsUG9zIDwgMCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbCAtIDE7XHJcblx0XHRlbHNlIGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPj0gbCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gMDtcclxuXHJcblx0XHR0aGlzLmdvdG9NYXJrKCk7XHJcblx0fSxcclxuICBpbmRpY2F0ZU1hcmsoaWQpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSlcclxuICAgICAgLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICBjb25zdCB0bXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkXj1cIicgKyBpZCArICdfXCJdJykpO1xyXG5cclxuICAgIHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKSwgMjAwMCk7XHJcbiAgfSxcclxuICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcmssXHJcbiAgICAgICAgbWFyayA9IHRoaXMuZmluZE1hcmsobSk7XHJcblxyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGJvb2ttYXJrKSB7XHJcbiAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbmV3IF9CT09LTUFSSygpLnNldChtYXJrKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2FkZGVkOmJvb2ttYXJrJyk7XHJcbiAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHVuZG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgfSxcclxuICByZW1vdmVCb29rbWFyaygpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoIWJvb2ttYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gYm9va21hcms7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgIGlmIChib29rbWFyaykgYm9va21hcmsuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9LFxyXG4gIGdldEJ5SWQoaWQsIHBvcykge1xyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmUsXHJcblx0XHRcdCAgZCA9IGRvbmUubGVuZ3RoLFxyXG5cdFx0XHQgIG1hcms7XHJcblxyXG5cdFx0d2hpbGUgKGQtLSkge1xyXG5cdFx0XHRtYXJrID0gZG9uZVtkXTtcclxuXHJcblx0XHRcdGlmIChtYXJrLmtleURhdGEuaWQgPT0gaWQpXHJcblx0XHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbWFyaywgcG9zaXRpb246IGQgfSA6IG1hcms7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBudWxsLCBwb3NpdGlvbjogbnVsbCB9IDogZmFsc2U7XHJcblx0fSxcclxuXHRmaW5kTWFyayh4KSB7XHJcblx0XHR4ID0geCA/IHggOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG5cdFx0bGV0IG1hcmsgPSAheCA/XHJcblx0XHRcdHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV0gOlxyXG5cdFx0XHRcdHR5cGVvZiB4ID09PSAnc3RyaW5nJyA/XHJcblx0XHRcdHRoaXMuZ2V0QnlJZCh4LnNwbGl0KCdfJylbMF0pIDpcclxuXHRcdFx0eDtcclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcbiAgc29ydEJ5SWQoKSB7XHJcbiAgICB0aGlzLmRvbmUuc29ydCgobWFyazEsIG1hcmsyKSA9PiBtYXJrMS5pZCAtIG1hcmsyLmlkKTtcclxuICB9LFxyXG5cdG9yZGVyTWFya3NWaXN1YWxseSgpIHtcclxuXHRcdHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkJD1cIl8wXCJdJykpLnNvcnQoKG0xLCBtMikgPT4ge1xyXG5cdFx0XHRsZXQgYmIxID0gbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRiYjIgPSBtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdHRvcDEgPSBiYjEudG9wLFxyXG5cdFx0XHRcdFx0dG9wMiA9IGJiMi50b3A7XHJcblxyXG5cdFx0XHRpZiAodG9wMSA8IHRvcDIpIHJldHVybiAtMTtcclxuXHRcdFx0ZWxzZSBpZiAodG9wMiA8IHRvcDEpIHJldHVybiAxO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAoYmIxLmxlZnQgPCBiYjIubGVmdCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubWFwKG1hcmsgPT4gcGFyc2VJbnQobWFyay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpO1xyXG4gICAgaWYgKCFfU1RPUkUuaWZyYW1lKSB0aGlzLmVtaXQoJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnLCB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMpO1xyXG5cdH0sXHJcbiAgbWFya3NJbnRlcnNlY3QobWFyazEsIG1hcmsyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMxID0gbWFyazEud3JhcHBlcnMsXHJcbiAgICAgICAgdzEgPSB3cmFwcGVyczEubGVuZ3RoLFxyXG4gICAgICAgIGlkMSA9IG1hcmsxLmlkLFxyXG4gICAgICAgIHdyYXBwZXJzMiA9IG1hcmsyLndyYXBwZXJzLFxyXG4gICAgICAgIGlkMiA9IG1hcmsyLmlkLFxyXG4gICAgICAgIHcyLCB0bXMsIGw7XHJcblxyXG4gICAgd2hpbGUgKHcxLS0pIHtcclxuICAgICAgdzIgPSB3cmFwcGVyczIubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAodzItLSkge1xyXG4gICAgICAgIHRtcyA9IHdyYXBwZXJzMVt3MV0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRdJyk7XHJcbiAgICAgICAgbCA9IHRtcy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgaWYgKHRtc1tsXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKVswXSA9PSBpZDIpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcbiAgb25NYXJrZXJLZXkoZSwga2V5KSB7XHJcblx0XHRsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTigpO1xyXG5cclxuXHRcdGlmICghc2VsZWN0aW9uLm5vZGVzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGUpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykga2V5ID0gZTtcclxuXHRcdFx0ZWxzZSB0aGlzLnByZXZlbnREZWZhdWx0KGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0a2V5ID0ga2V5IHx8ICdtJztcclxuXHRcdH1cclxuXHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoX1NUT1JFLmlzTmV3KSB7XHJcbiAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogISFzZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IF9TVE9SRS5pbW11dDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhrZXksIHNldHRpbmdzLm1hcmtlcnNba2V5XSwgdGhpcy5pc0ltbXV0KSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHR9LFxyXG4gIG9uSG90a2V5KGtleSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc3dpdGNoKGtleSkge1xyXG4gICAgICBjYXNlICd6Jzogc2VsZi51bmRvKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd5Jzogc2VsZi5yZWRvKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdzJzogc2VsZi5zYXZlKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdiJzogc2VsZi5zZXRCb29rbWFyaygpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAnYXJyb3d1cCc6IHNlbGYuZ290b05leHRNYXJrKC0xKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93ZG93bic6IHNlbGYuZ290b05leHRNYXJrKDEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAnZCc6IHNlbGYucmVtb3ZlKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdjJzogc2VsZi5jb3B5KCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICduJzogc2VsZi5hZGROb3RlKCk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJldmVudERlZmF1bHQoZSkge1xyXG5cdFx0aWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdHJldHJpZXZlRW50cnkoKSB7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgY29uc3QgaXNOZXcgPSBfU1RPUkUuaXNOZXc7XHJcbiAgICBjb25zdCBuYW1lID0gX1NUT1JFLm5hbWU7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSAhbG9ja2VkICYmIF9TVE9SRS5lbnRyaWVzW25hbWVdID8gX1NUT1JFLmVudHJpZXNbbmFtZV0gOiB7fTtcclxuXHJcbiAgICBlbnRyeS5tYXJrcyA9IHRoaXMuY29sbGVjdE1hcmtzKCk7XHJcblx0XHRlbnRyeS5sYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBlbnRyeS5ib29rbWFya2VkID0gISF0aGlzLmJvb2ttYXJrO1xyXG4gICAgZW50cnkudGl0bGUgPSB3aW5kb3cuZG9jdW1lbnQudGl0bGU7XHJcblx0XHRlbnRyeS5jb3VudCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuXHRcdGVudHJ5LmlkY291bnQgPSB0aGlzLmlkY291bnQ7XHJcbiAgICBlbnRyeS5pbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IGVudHJ5LmltbXV0O1xyXG5cclxuICAgIGlmIChpc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgZW50cnkuZmlyc3QgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbnRyeS51cmwgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZSA/IHdpbmRvdy5kb2N1bWVudC5VUkwgOiBfSEFTSExFU1Mod2luZG93LmRvY3VtZW50LlVSTCk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuICAgICAgZW50cnkubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgICBlbnRyeS5oYXNoU2Vuc2l0aXZlID0gX1NUT1JFLmhhc2hTZW5zaXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgZW50cnkubmFtZSA9IGxvY2tlZCA/XHJcbiAgICAgIGVudHJ5Lm1hcmtzWzBdLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkgOlxyXG4gICAgICBpc05ldyB8fCAhZW50cnkubmFtZSA/IG5hbWUgOiBlbnRyeS5uYW1lO1xyXG5cclxuXHRcdHJldHVybiBlbnRyeTtcclxuXHR9LFxyXG4gIGNvbGxlY3RNYXJrcygpIHtcclxuICAgIGxldCBkb25lID0gdGhpcy5kb25lO1xyXG4gICAgbGV0IGwgPSBkb25lLmxlbmd0aDtcclxuICAgIGNvbnN0IG1hcmtzID0gW107XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgZG9uZSA9IFtkb25lW2wtMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIGwgPSBkb25lLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBtID0gMCwga0Q7IG0gPCBsOyBtKyspIHtcclxuXHRcdFx0a0QgPSBkb25lW21dLmtleURhdGE7XHJcbiAgICAgIGRlbGV0ZSBrRC5zeW5jZWQ7XHJcblx0XHRcdG1hcmtzLnB1c2goa0QpO1xyXG5cdFx0fVxyXG4gICAgcmV0dXJuIG1hcmtzO1xyXG4gIH0sXHJcbiAgb25IYXNoQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5yZXN1bWUobnVsbCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3VtZWQtb24taGFzaGNoYW5nZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXJrLCBjb2xvcikge1xyXG5cclxuICBjb25zdCBCT0RZID0gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhZGRNYXJrTGlzdGVuZXJzJyxcclxuICAgICAgICAnZHJhZzpub3RlJzogJ29uRHJhZycsXHJcbiAgICAgICAgJ2RyYWdzdG9wOm5vdGUnOiAnb25EcmFnRW5kJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdfZGVsZXRlJyxcclxuICAgICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICdoaWRlJyxcclxuICAgICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2JyaW5nVXBGcm9udCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYXR0ZW1wdFVwZGF0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoc3RhcnQ6IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBlbDogbnVsbCxcclxuICAgIG1hcmssXHJcbiAgICBjb2xvcjogY29sb3IgfHwgJycsXHJcbiAgICBtYXJrQ2xpY2tIYW5kbGVyOiBudWxsLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIHJlY2VudGx5VXBkYXRlZDogZmFsc2UsXHJcbiAgICBzZXR0aW5nc01vZGU6IGZhbHNlLFxyXG4gICAgcG9zOiB7IGw6IG51bGwsIHQ6IG51bGwgfSxcclxuICAgIHNpemU6IHsgdzogbnVsbCwgaDogbnVsbCB9LFxyXG4gICAgZHJhZ0RYOiAwLFxyXG4gICAgZHJhZ0RZOiAwLFxyXG4gICAgbXV0YXRpb25PYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGp1c3ROb3RlRGF0YU9iamVjdCgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZU5vdGVFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWRkTWFya0xpc3RlbmVycygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGp1c3ROb3RlRGF0YU9iamVjdCgpIHtcclxuICAgICAgY29uc3Qgbm90ZURhdGEgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlO1xyXG4gICAgICBpZiAodHlwZW9mIG5vdGVEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCAneWVsbG93JyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFub3RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBub3RlRGF0YS5wb3MgfHwgdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbm90ZURhdGEuc2l6ZSB8fCB0aGlzLnNpemU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mcyA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuZnMgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmZzIHx8IF9TVE9SRS5ub3RlRm9udFNpemU7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlJyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlaGVhZGVyJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVhY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IGRlbCA9IHRoaXMuZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlZGVsZXRlJyk7XHJcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlbWluaW1pemUnKTtcclxuICAgICAgY29uc3QgZ2VhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWN1c3RvbWl6ZScpO1xyXG4gICAgICBjb25zdCBwYWxldHRlID0gdGhpcy5wYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlcGFsZXR0ZScpO1xyXG4gICAgICBjb25zdCBwID0gdGhpcy50ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvcjtcclxuICAgICAgX1NUT1JFLm5vdGVDb2xvciA9IGNvbG9yO1xyXG4gICAgICBjb25zdCBkZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSkpO1xyXG4gICAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDIwMTMpKTtcclxuICAgICAgY29uc3QgZ2VhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjY5OSkpO1xyXG5cclxuICAgICAgWydncmVlbicsICd3aGl0ZScsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCcsICdwdXJwbGUnLCAnYmx1ZScsICd0dXJxdW9pc2UnXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWNvbG9yJyk7XHJcbiAgICAgICAgY29sb3IuY2xhc3NOYW1lID0gJ3Rtbm90ZWNvbG9yLS0nICsgYztcclxuICAgICAgICBjb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCBjKTtcclxuICAgICAgICBwYWxldHRlLmFwcGVuZENoaWxkKGNvbG9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1ub3RlJywgdHJ1ZSk7XHJcbiAgICAgIGRlbC5hcHBlbmRDaGlsZChkZWxUZXh0KTtcclxuICAgICAgbWluLmFwcGVuZENoaWxkKG1pblRleHQpO1xyXG4gICAgICBnZWFyLmFwcGVuZENoaWxkKGdlYXJUZXh0KTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB0aGlzLmhpZGUoKTtcclxuICAgICAgaWYgKGZvcmNlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCF0aGlzLnJlY2VudGx5VXBkYXRlZCkge1xyXG4gICAgICAgIHRoaXMucmVjZW50bHlVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZShlbCksIDMwMDApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVsKSB7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dCA9IGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bm90ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICAgIHRoaXMucmVjZW50bHlVcGRhdGVkID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc2hvdygpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBpbm5lcldpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICBsZXQgcG9zLCBsZWZ0LCB0b3A7XHJcblxyXG4gICAgICBpZiAodGhpcy5wb3MubCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHBvcyA9IHRoaXMucG9zO1xyXG4gICAgICAgIHRvcCA9IHBvcy50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBwb3MubDtcclxuICAgICAgICB0b3AgPSB0aGlzLnBvcy50ID0gcG9zLnQgKyBwb3Mub2Zmc2V0O1xyXG4gICAgICB9XHJcbiAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcblxyXG4gICAgICBpZiAobGVmdCArIDM0MCA+IGlubmVyV2luZG93V2lkdGgpIHtcclxuICAgICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IGlubmVyV2luZG93V2lkdGggLSAzNDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemUudyA/IGB3aWR0aDoke3RoaXMuc2l6ZS53fTtoZWlnaHQ6JHt0aGlzLnNpemUuaH07YCA6ICcnO1xyXG4gICAgICBjb25zdCBmb250U2l6ZSA9IGBmb250LXNpemU6ICR7dGhpcy5mc31weCAhaW1wb3J0YW50O2A7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBkaXNwbGF5OmJsb2NrO3RvcDoke3RvcH1weDtsZWZ0OiR7bGVmdH1weDtgKTtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsIChzaXplICsgZm9udFNpemUpKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnRleHRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9LFxyXG4gICAgYnJpbmdVcEZyb250KCkge1xyXG4gICAgICBBcnJheS5mcm9tKEJPRFkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpKS5mb3JFYWNoKG5vdGUgPT4ge1xyXG4gICAgICAgIGlmIChub3RlID09PSB0aGlzLmVsKSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDc7XHJcbiAgICAgICAgZWxzZSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDY7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKSB7XHJcbiAgICAgIEJPRFkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKHRoaXMudmlzaWJsZSkgdGhpcy5oaWRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUGFsZXR0ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLnBhbGV0dGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldHRpbmdzTW9kZSA9ICF0aGlzLnNldHRpbmdzTW9kZTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb2xvcihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tJyArIHRoaXMuY29sb3IpO1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSBfU1RPUkUubm90ZUNvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgIHRoaXMudG9nZ2xlUGFsZXR0ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1jb2xvcicsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZE1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ25vdGVvbmNsaWNrJykudGhlbihub3Rlb25jbGljayA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGVvbmNsaWNrKSB7XHJcbiAgICAgICAgICBpZiAoISF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5tYXJrQ2xpY2tIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHRoaXMubWFyay53cmFwcGVycykge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGUnKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlTWFya0xpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya0xpc3RlbmVycygpIHtcclxuICAgICAgaWYgKCF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb25uZWN0TXV0YXRpb25PYnNlcnZlcigpIHtcclxuICAgICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddIH07XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyIHx8IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5zYXZlU2l6ZSkpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRleHRhcmVhLCBjb25maWcpO1xyXG4gICAgfSxcclxuICAgIGdldFBvc2l0aW9uKCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5tYXJrLndyYXBwZXJzW3RoaXMubWFyay53cmFwcGVycy5sZW5ndGggLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0OiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIEJPRFkuY2xpZW50VG9wLFxyXG4gICAgICAgIGw6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIEJPRFkuY2xpZW50TGVmdCxcclxuICAgICAgICBvZmZzZXQ6IHJlY3QuaGVpZ2h0XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgb25EcmFnU3RhcnQoZSwgZWwpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRyYWdEWCA9IGUucGFnZVggLSB0aGlzLnBvcy5sO1xyXG4gICAgICB0aGlzLmRyYWdEWSA9IGUucGFnZVkgLSB0aGlzLnBvcy50O1xyXG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0OmRyYWcnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIG9uRHJhZyhub3RlLCBlKSB7XHJcbiAgICAgIGlmIChub3RlID09PSB0aGlzLm1hcmsuaWQpIHtcclxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvcy5sID0gZS5wYWdlWCAtIHRoaXMuZHJhZ0RYO1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvcy50ID0gZS5wYWdlWSAtIHRoaXMuZHJhZ0RZO1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EcmFnRW5kKCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnBvcyA9IHRoaXMucG9zO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1wb3MnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIHNhdmVTaXplKG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBtdXRhdGlvbnNMaXN0WzBdLnRhcmdldC5zdHlsZTtcclxuICAgICAgdGhpcy5zaXplID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5zaXplID0geyB3OiBzdHlsZS53aWR0aCwgaDogc3R5bGUuaGVpZ2h0IH07XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLXNpemUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTk9URSBmcm9tICcuL25vdGUnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3JlbW92ZU5vdGVTdG9yYWdlJyxcclxuICAgICAgJ3Jlc3RvcmU6bm90ZXMnOiAncmVzdG9yZScsXHJcbiAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICd0b2dnbGU6bm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlU3R5bGUnLFxyXG4gICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kTm90ZXNTdGF0ZScsXHJcbiAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ3JlcG9ydCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBub3Rlczoge30sXHJcbiAgdG9nZ2xlOiBudWxsLFxyXG4gIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gIGRyYWdTdG9wSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICB9LFxyXG4gIGFkZChtYXJrLCBjb2xvcikge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZXNbbWFyay5pZF07XHJcbiAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICBpZiAoIV9TVE9SRS5yZXN0b3JpbmcpIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgcmV0dXJuIHRoaXMubm90ZXNbbWFyay5pZF0gPSBuZXcgX05PVEUobWFyaywgY29sb3IpO1xyXG4gIH0sXHJcbiAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgZm9yIChsZXQgbWFyayBvZiBtYXJrcykge1xyXG4gICAgICBpZiAobWFyay5rZXlEYXRhLm5vdGUpIHtcclxuICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkQW5kU2hvdyhtYXJrLCBjb2xvcikge1xyXG4gICAgdGhpcy5hZGQobWFyaywgY29sb3IpLnNob3coKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGVTdG9yYWdlKGlkKSB7XHJcbiAgICBkZWxldGUgdGhpcy5ub3Rlc1tpZF07XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQWxsKCkge1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICBjb25zdCBub3RlcyA9IHRoaXMubm90ZXM7XHJcbiAgICBsZXQgbWV0aCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlJykubGVuZ3RoID8gJ2hpZGUnIDogJ3Nob3cnLFxyXG4gICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICBub3RlO1xyXG4gICAgZm9yIChsZXQgbiBpbiBub3Rlcykge1xyXG4gICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgIGlmIChub3RlLnZpc2libGUgPT09IGNvbmRpdGlvbikge1xyXG4gICAgICAgIG5vdGVbbWV0aF0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlU3R5bGUoKSB7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncyAmJiBzZXR0aW5ncy5taXNjKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcCkgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXBsYWludmlldykgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS1wbGFpbi12aWV3Jyk7XHJcbiAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgICBfU1RPUkUubm90ZUZvbnRTaXplID0gc2V0dGluZ3MubWlzYy5ub3RlZm9udHNpemUgfHwgMTI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgaXNFbXB0eShvYmopIHtcclxuICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbiAgfSxcclxuICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIgPSAoZSkgPT4gdGhpcy5lbWl0RHJhZ0V2ZW50KG5vdGUsIGUpO1xyXG4gICAgY29uc3QgZHJhZ1N0b3BIYW5kbGVyID0gdGhpcy5kcmFnU3RvcEhhbmRsZXIgPSAoZSkgPT4gdGhpcy5zdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpO1xyXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gIH0sXHJcbiAgZW1pdERyYWdFdmVudChub3RlLCBlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bm90ZScsIG5vdGUsIGUpO1xyXG4gIH0sXHJcbiAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgdGhpcy5lbWl0KCdub3Rlcy1zdGF0ZScsICF0aGlzLmlzRW1wdHkodGhpcy5ub3RlcyksIGluZm8pO1xyXG4gIH0sXHJcbiAgcmVwb3J0KCkge1xyXG4gICAgdGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpIHx8IHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IHdpbmRvdy5kb2N1bWVudCxcclxuICBhdXRvUGF1c2U6IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb25zJzogJ3JlbW92ZUxpc3RlbmVycycsXHJcbiAgICAgICdjb21wbGV0ZWQ6cmVzdG9yYXRpb24tcHJvY2Vzcyc6ICdhZGRMaXN0ZW5lcnMnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGtleWRvd246IHtcclxuICAgICAgICAnKic6ICdkZWxlZ2F0ZSdcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgJyonOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZWxlY3Rpb25Db2xsYXBzZWQ6IHRydWUsXHJcbiAgc2hpZnRTZW5zaXRpdmVLZXlzOiBbMTMsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCAxNzEsIDE3M10sXHJcbiAga2V5Q29kZU1hcDoge1xyXG4gICAgJzEzJzogJ0VudGVyJyxcclxuICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgJzUzJzogJzUnLCAnNTQnOiAnNicsICc1NSc6ICc3JywgJzU2JzogJzgnLCAnNTcnOiAnOScsXHJcbiAgICAnMTcxJzogJysnLCAnMTczJzogJy0nXHJcbiAgfSxcclxuXHJcbiAgaXNFZGl0YWJsZShlbCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGVsLnRhZ05hbWU7XHJcblxyXG4gICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gIH0sXHJcbiAgZGVsZWdhdGUoZSkge1xyXG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlLFxyXG4gICAgICAgIG1vZEtleSA9IChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkpLFxyXG4gICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICBsb2NrZWRBY3Rpb25zID0gWydiJywgJ3MnLCAneScsICd6JywgJ2QnXSxcclxuICAgICAgICBmdW5jdGlvbktleXMgPSBsb2NrZWRBY3Rpb25zLmNvbmNhdChhcnJvd0tleXMpLmNvbmNhdChbJ2MnLCAnbiddKSxcclxuICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnXTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCAmJiBsb2NrZWRBY3Rpb25zLmluY2x1ZGVzKGtleSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLnNoaWZ0U2Vuc2l0aXZlS2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkga2V5ID0gdGhpcy5rZXlDb2RlTWFwW2tleUNvZGVdO1xyXG5cclxuICAgIGlmICghZnVuY3Rpb25LZXlzLmluY2x1ZGVzKGtleSkgJiYgd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0VkaXRhYmxlKGUudGFyZ2V0KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuXHJcbiAgICAgIGlmICghc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgb3JpZ0tleSA9IGtleTtcclxuICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgY29uc3QgaXNNYXJrZXJLZXkgPSBtYXJrZXJzW2tleV07XHJcbiAgICAgIGNvbnN0IGlzQ3VzdG9tTWFya2VyS2V5ID0gaXNNYXJrZXJLZXkgJiYgIWRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKGtleSk7XHJcbiAgICAgIGlmIChpc0N1c3RvbU1hcmtlcktleSkga2V5ID0gJ2NtJztcclxuICAgICAgY29uc3Qgc2V0dGluZyA9IHNob3J0Y3V0c1trZXldO1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5nKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICghbW9kS2V5KSB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3cnICYmICFzZXR0aW5nWzBdICYmIHNldHRpbmdbMV0pIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzTWFya2VyS2V5ICYmICFzZXR0aW5nWzBdICYmIHNldHRpbmdbMV0pIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncHJlc3NlZDptYXJrZXIta2V5JywgZSwgb3JpZ0tleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghc2V0dGluZ1sxXSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0ID0gc2V0dGluZ1swXS5zcGxpdCgnLScpO1xyXG4gICAgICAgIGNvbnN0IHMxID0gc2hvcnRjdXRbMF07XHJcbiAgICAgICAgY29uc3QgczIgPSBzaG9ydGN1dFsxXTtcclxuXHJcbiAgICAgICAgaWYgKCFlW3MxXSB8fCAoczIgJiYgIWVbczJdKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChrZXkgPT09ICd3JykgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncHJlc3NlZDptYXJrZXIta2V5JywgZSwgb3JpZ0tleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCdwcmVzc2VkOmhvdGtleScsIGtleSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvblNlbGVjdGlvbkNoYW5nZShlKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25Db2xsYXBzZWQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQ7XHJcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25Db2xsYXBzZWQgIT09IHNlbGVjdGlvbkNvbGxhcHNlZCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6c2VsZWN0aW9uJywgIXNlbGVjdGlvbkNvbGxhcHNlZCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ29sbGFwc2VkID0gc2VsZWN0aW9uQ29sbGFwc2VkO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbmNsYXNzIFJlc3RvcmVyQmFzZSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5sb3N0ID0gW107XHJcbiAgICB0aGlzLmZhaWx1cmVSZXBvcnQgPSB7fTtcclxuICAgIHRoaXMucmVzdG9yZWQgPSBbXTtcclxuICAgIHRoaXMuYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdzdGFydGVkOnJlc3RvcmF0aW9uJywgZW50cnkubWFya3MubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NJbkNodW5rcyhkYXRhLCBwcm9jLCBjYikge1xyXG4gICAgcHJvYyA9IHByb2MuYmluZCh0aGlzKTtcclxuICAgIGNiID0gY2IuYmluZCh0aGlzKTtcclxuXHJcblx0XHQoZnVuY3Rpb24gcmVjKCkge1xyXG5cdFx0XHRsZXQgZXhwaXJlID0gK25ldyBEYXRlKCkgKyA1MDA7XHJcblxyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0dHJ5IHtcclxuICAgICAgICAgIHByb2MoZGF0YS5zaGlmdCgpKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHRcdH0gd2hpbGUgKGRhdGEubGVuZ3RoID4gMCAmJiBleHBpcmUgPiArbmV3IERhdGUoKSk7XHJcblxyXG5cdFx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByZWMoKSwgMCk7XHJcblx0XHRcdGVsc2UgY2IoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG4gIHJlcG9ydCgpIHtcclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdsb3N0Om1hcmtzJywgdGhpcy5mYWlsdXJlUmVwb3J0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmVudHJ5Lm5hbWUsIHRoaXMucmVzdG9yZWQsIHRoaXMubG9zdCwgdGhpcy5hcmVhKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgIHRoaXMuY2FjaGUgPSBbXTtcclxuICAgIHRoaXMucGhhc2UgPSAxO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCA9IDA7XHJcbiAgICB0aGlzLmNodW5rRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgdGhpcy5vb20gPSBlbnRyeS5tYXJrcy5sZW5ndGggPT09IDEgJiYgZW50cnkubWFya3NbMF0uaWQgPT0gMTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lcigpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRpbWVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbnRyeSxcclxuICAgICAgICBub3cgPSBbXSwgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICBsID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBtYXJrO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuXHJcbiAgICAgIHRoaXMuY29udmVydERlc2NyaXB0aW9uKG1hcmspLmNyZWF0ZVRlbXBPYmplY3QobWFyayk7XHJcblxyXG4gICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgIGVsc2Ugbm93LnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHBvc3Rwb25lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc3RvcmUoKTtcclxuICB9XHJcbiAgY29udmVydERlc2NyaXB0aW9uKG1hcmspIHtcclxuICAgIGlmICh0eXBlb2YgbWFyay5jb25kcy5vID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgY29udmVydGVkQ29uZHMgPSB7XHJcbiAgICAgICAgICAgIG86IGNvbmRzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgbjI6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIHAxOiBjb25kcy5maXJzdFRleHROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDM6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwNDogY29uZHMuZmlyc3RHcmFtcGFOb2RlUG9zaXRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICBtYXJrLmNvbmRzID0gY29udmVydGVkQ29uZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3JlYXRlVGVtcE9iamVjdChtYXJrKSB7XHJcbiAgICBsZXQgdGV4dCA9IG1hcmsudGV4dCxcclxuICAgICAgICB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLFxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgIG1hcmsudGVtcCA9IHtcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHRyaW1tZWRUZXh0OiB0cmltbWVkVGV4dCxcclxuICAgICAgdHJpbW1lZFRleHRMZW5ndGg6IHRyaW1tZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0OiBzcXVlZXplZFRleHQsXHJcbiAgICAgIHNxdWVlemVkVGV4dExlbmd0aDogc3F1ZWV6ZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZFBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtYXJrLnN5bmNlZCA9IHRoaXMuZW50cnkuc3luY2VkO1xyXG4gIH1cclxuICByZXN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDIpIHRoaXMuc29ydFF1ZXVlQnlJZCgpO1xyXG5cclxuICAgIGxldCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgLmdldFRleHRQb3NpdGlvbnMobWFya3MsIGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5waGFzZSA9PT0gMSAmJiBsZW5ndGggPiAxKVxyXG4gICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgdGhpcy5maW5kUG9zc2libGVFeHRyZW1hKClcclxuICAgICAgICAgIC5ydWxlT3V0TXVsdGlwbGVzKClcclxuICAgICAgICAgIC5yZXN0b3JlUmFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8ICtuZXcgRGF0ZSgpKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzdG9yZSgpLCAwKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICB9XHJcbiAgc29ydFF1ZXVlQnlJZCgpIHtcclxuICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbWFyaywgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmICghbWFya3NbbF0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdWzBdO1xyXG4gICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgIH1cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5xdWV1ZS5wdXNoKFt0ZW1wW2ldXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgbGV0IHRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCxcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHNxdWVlemVkVGV4dCwgc3F1ZWV6ZWRUZXh0TGVuZ3RoLCBwLCBlbmRQb3NpdGlvbjtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHAgPSB1bmRlZmluZWQ7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICBpZiAoIW1hcmtUZW1wKSB7XHJcbiAgICAgICAgbWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gZW5kUG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzcXVlZXplZFRleHQgPSBtYXJrVGVtcC5zcXVlZXplZFRleHQ7XHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAocCAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIHAgPSAtMTtcclxuICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHNxdWVlemVkVGV4dCwgcCArIDEpO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBwICsgc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICghbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzEnKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcclxuICAgIGxldCBsID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgcG9zLCBzdGFydCwgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHBvcyA9IHBvc2l0aW9uc1tsXTtcclxuICAgICAgc3RhcnQgPSBwb3NbMF07XHJcblxyXG4gICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgZWxzZSB0ZW1wW3N0YXJ0XSA9IHBvcztcclxuICAgIH1cclxuICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBpIDwgdDsgaSsrKVxyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgfVxyXG4gIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBwb3MxLCBwb3MyLCBpLCBtMSwgbTIsIGlkMSwgaWQyLCBpZDtcclxuXHJcbiAgICBpZiAocCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHAtLSA+IDEpIHtcclxuICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICBwb3MyID0gcG9zaXRpb25zW3BdO1xyXG4gICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICBtMiA9IHBvczJbMl07XHJcbiAgICAgICAgaWQxID0gbTEuaWQ7XHJcbiAgICAgICAgaWQyID0gbTIuaWQ7XHJcblxyXG4gICAgICAgIGlmIChpZDEgPT09IGlkMikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG5cclxuICAgICAgICAgIGlmIChpZDEgPCBpZDIpIHtcclxuICAgICAgICAgICAgaWQgPSBpZDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGlkMTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwOyBpKyspXHJcbiAgICAgICAgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjdXRPdXRGb3IoaWQpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUocC0tKSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbnNbcF1bMl0uaWQgPT09IGlkKVxyXG4gICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3Rwb25lKG1hcmspIHtcclxuICAgIGxldCBxdWV1ZSA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYWxyZWFkeUluY2x1ZGVkKVxyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICB9XHJcbiAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgIGxldCBub2RlcyA9IHRoaXMuYm9keVRleHROb2RlcyxcclxuICAgICAgICBuID0gbm9kZXMgPyBub2Rlcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcGhhc2UgPSB0aGlzLnBoYXNlLFxyXG4gICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZSA9IFtdLFxyXG4gICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLCBjaGFycyA9IDAsXHJcbiAgICAgICAgbmV4dFN0YXJ0Rm91bmQsIGVuZGluZ3NJblRoaXNOb2RlLFxyXG4gICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIGRpZmYsIGwsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBlLCBmLCBpZCwgcCwgcSwgeCwgbSxcclxuICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0LCBzdGFydEZvdW5kRm9yLCBwb3N0cG9uZWQsIGhhc0VuZGluZ3NJblRoaXNOb2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgbm9kZXNUZXh0ID0gdGhpcy5zcXVlZXplKG5vZGUuZGF0YSk7XHJcbiAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNoYXJzICs9IG5vZGVzVGV4dExlbmd0aDtcclxuICAgICAgbCA9IGluZGljZXMubGVuZ3RoO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgIHBvc3Rwb25lZCA9IFtdO1xyXG4gICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGluZGljZXNbbF1bMF07XHJcbiAgICAgICAgZW5kUG9zaXRpb24gPSBpbmRpY2VzW2xdWzFdO1xyXG4gICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciB8fCBbXTtcclxuICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLmxlbmd0aCA8IG1hcmsudGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMucHVzaCh7IG5vZGU6IG5vZGUsIHBvczogaSB9KTtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIHN0YXJ0Rm91bmRGb3IucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICFtYXJrLnRlbXAuZW5kRm91bmRGb3IuaW5jbHVkZXMoZW5kUG9zaXRpb24pICYmXHJcbiAgICAgICAgICAoY2hhcnMgLSBlbmRQb3NpdGlvbikgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHN0YXJ0Rm91bmRGb3IpIDwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0ID0gdGhpcy5maW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgZW5kUG9zaXRpb24gLSAoY2hhcnMgLSBub2Rlc1RleHRMZW5ndGgpKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvci5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXSA9IHtcclxuICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zc2libGVGb2N1c09mZnNldCxcclxuICAgICAgICAgICAgICBwb3M6IGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICBzYXRpc2ZpZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICBpZiAoY2hhcnMgPiB0aGlzLm1heFBvc2l0aW9uKSBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChwaGFzZSAhPT0gMSB8fCB0aGlzLm9vbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbWFyayA9IHRoaXMubWFya3NbaV07XHJcbiAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMobWFyay5pZCkpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMicpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IGNhY2hlLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIG5vZGUsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgZ3JhbmRncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxLFxyXG4gICAgICAgIHBvc3NpYmxlRW5kcywgc3RhcnRGb3VuZEZvciwgY29uZHMsIHN0YXJ0T2Zmc2V0LCB0ZW1wLCB0ZXh0TGVuZ3RoLCBzdGFydDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBjYWNoZVtpXTtcclxuICAgICAgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzID0gdGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgIHBvc3NpYmxlRW5kcyA9IHRlbXAucG9zc2libGVFbmRzO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gdGVtcC5zdGFydEZvdW5kRm9yXHJcbiAgICAgIHAgPSBwb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoO1xyXG4gICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY29uZHMubztcclxuICAgICAgdGV4dExlbmd0aCA9IHRlbXAudGV4dExlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwID4gMSkge1xyXG4gICAgICAgIHdoaWxlIChwLS0pIHtcclxuICAgICAgICAgIG5vZGUgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcF0ubm9kZTtcclxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAoIWdyYW1wYSB8fCBjb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gocCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSBwID0gMDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkgcCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHEgPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5ub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW5kZ3JhbXBhID0gZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICghZ3JhbmRncmFuZGdyYW1wYSB8fCBjb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbXBhKSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHBvc3NpYmxlRW5kc1tzdGFydEZvdW5kRm9yW3FdXS5vZmZzZXQgLSBzdGFydE9mZnNldCkgPT09IHRleHRMZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwID0gcTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHAgPSAwO1xyXG5cclxuICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgIHN0YXJ0ID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZSA9IHN0YXJ0Lm5vZGU7XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbiA9IHN0YXJ0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuc2V0TWF0Y2hpbmdFbmQobWFyaywgcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvcltwXSxcclxuICAgICAgICBlbmQgPSBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dO1xyXG5cclxuICAgIG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uID0gZW5kLnBvcztcclxuICAgIG1hcmsudGVtcC5mb2N1c09mZnNldCA9IGVuZC5vZmZzZXQ7XHJcbiAgfVxyXG4gIHNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpIHtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFtcGEgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBkZXNjcmlwdGlvbi5vLFxyXG4gICAgICAgIHJlbGV2YW50Tm9kZVRleHQgPSBub2RlLmRhdGEuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0KS50cmltKCksXHJcbiAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0LFxyXG4gICAgICAgIG0gPSBtYXJrLnRlbXAudHJpbW1lZFRleHRMZW5ndGgsXHJcbiAgICAgICAgdGV4dHNNYXRjaDtcclxuXHJcbiAgICBpZiAobSA8PSBsKSB7XHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUobWFya1RleHQpKSA9PT0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUobWFya1RleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpKSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0ZXh0c01hdGNoICYmXHJcbiAgICAgIChwYXJlbnROb2RlLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMSB8fCAoZGVzY3JpcHRpb24ubjEgPT09ICdUTScgJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpICYmXHJcbiAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgIHRoaXMud2hpY2hDaGlsZChwYXJlbnROb2RlLCBub2RlKSA9PT0gZGVzY3JpcHRpb24ucDFcclxuICAgICk7XHJcbiAgfVxyXG4gIGZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBuKSB7XHJcbiAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgbCA9IG5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3F1ZWV6ZShub2RlVGV4dFtpXSkpIGNvdW50ZXIrKztcclxuXHJcbiAgICAgIGlmIChjb3VudGVyID09PSBuKSByZXR1cm4gKC9cXHMkLy50ZXN0KG1hcmsudGV4dCkgPyBpICsgMiA6IGkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzdG9yZVJhbmdlcygpIHtcclxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHN0YXJ0LCBlbmQsIGZvY3VzT2Zmc2V0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgIGVuZCA9IG1hcmtUZW1wLmVuZE5vZGU7XHJcbiAgICAgIGZvY3VzT2Zmc2V0ID0gbWFya1RlbXAuZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSkge1xyXG4gICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzMnKSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgIHJhbmdlLnNldEVuZChlbmQsIGZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgLy9zZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5yZWNvbGxlY3ROb2RlcyhtYXJrKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBtYXJrLnRlbXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJvZHlTZWxlY3Rpb24oZWwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwrKztcclxuXHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKGVsKTtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHJpYWwgPCA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRCb2R5U2VsZWN0aW9uKGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9ICcgJztcclxuICAgICAgICAgIHRoaXMuYm9keVRleHROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUodGhpcy5zZWxlY3Rpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gdGhpcy5zZWxlY3Rpb24ubm9kZXMgPyB0aGlzLnNlbGVjdGlvbi5ub2Rlcy5zbGljZSgpIDogW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpID8gdGV4dC5yZXBsYWNlKC9cXHR8XFxzfFxcbnxcXHIvZywgJycpIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICB3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGNvbnRleHQpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdCAgICBjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0ICAgIHBvcyA9IDAsIGkgPSAwLCBjdXJyZW50Q2hpbGQ7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnRDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGQpIHJldHVybiBwb3M7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZU5hbWUgPT09IGNvbnRleHQpIHBvcysrO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICBpZiAoIShjdXJyZW50Q2hpbGQubm9kZVR5cGUgPT09IDMgJiYgIWN1cnJlbnRDaGlsZC5kYXRhKSkgcG9zKys7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEltbXV0UmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IFsuLi5lbnRyeS5tYXJrcy5zb3J0KChtMSwgbTIpID0+IG0xLmlkIC0gbTIuaWQpXTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NJbkNodW5rcyhtYXJrcywgdGhpcy5yZXN0b3JlUmFuZ2UsIHRoaXMucmVwb3J0KTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVSYW5nZShtYXJrKSB7XHJcbiAgICBjb25zdCBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICBjb25zdCBzdGFydCA9IGNvbmRzLnM7XHJcbiAgICBjb25zdCBlbmQgPSBjb25kcy5lO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQodGhpcy5nZXROb2RlKHN0YXJ0LnApLCBzdGFydC5vKTtcclxuICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMuZ2V0Tm9kZShlbmQucCksIGVuZC5vKTtcclxuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmVkOnJhbmdlJywgbWFyayk7XHJcbiAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Tm9kZShwb3NpdGlvbikge1xyXG4gICAgY29uc3QgdGV4dE5vZGVQb3NpdGlvbiA9IHBvc2l0aW9uWzBdO1xyXG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgIGwgPSBwb3NpdGlvbi5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUobC0tID4gMSkge1xyXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltwb3NpdGlvbltsXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZS5jaGlsZE5vZGVzW3RleHROb2RlUG9zaXRpb25dO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG5cdHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3Jlc3RvcmU6bWFya3MnOiAncmVzdG9yZScsXHJcbiAgICAgICAgJ2xvc3Q6bWFya3MnOiAnb25GYWlsdXJlJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAncmVzdW1lZDptYXJrZXJzJzogJ3JldHJ5JyxcclxuICAgICAgICAncmVzdW1lZC1vbi1oYXNoY2hhbmdlJzogJ3Jlc3VtZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiBudWxsLFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICByZXN0b3JlZDogMCxcclxuICAgIGZhaWxlZDogMCxcclxuICAgIGF0dGVtcHQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgICAgdGhpcy5hdHRlbXB0Kys7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb25zJyk7XHJcbiAgICAgIF9TVE9SRS5yZXN0b3JpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoZW50cnkubWFya3MgJiYgZW50cnkubWFya3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoZW50cnkuaW1tdXQpIG5ldyBJbW11dFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgICAgIGVsc2UgbmV3IFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbkZpbmlzaGVkUmVzdG9yYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgdGhpcy5yZXN0b3JlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbGVkID0gMDtcclxuICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0ID0ge307XHJcbiAgICB9LFxyXG4gICAgcmV0cnkoZW50cnkpIHtcclxuICAgICAgZW50cnkgPSBlbnRyeSA/IFtlbnRyeV0gOiB0aGlzLmVudHJpZXM7XHJcbiAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICAgIHRoaXMucmVzdG9yZShlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgb25GYWlsdXJlKHJlcG9ydCkge1xyXG4gICAgICB0aGlzLmZhaWxlZCsrO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHJlcG9ydCkgdGhpcy5mYWlsdXJlUmVwb3J0W2ldID0gcmVwb3J0W2ldO1xyXG4gICAgfSxcclxuICAgIG9uRmluaXNoZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgaWYgKCsrdGhpcy5yZXN0b3JlZCA9PT0gdGhpcy5jb3VudCkge1xyXG4gICAgICAgIF9TVE9SRS5yZXN0b3JpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmF0dGVtcHQgPT09IDEpIHtcclxuICAgICAgICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNldHRpbmdzIHx8ICFzZXR0aW5ncy5oaXN0b3J5IHx8IHNldHRpbmdzLmhpc3RvcnkuYXV0b1JldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JhdGlvbicsIHsgcmVwb3J0OiB0aGlzLmdldFJlcG9ydCgpLCBhdHRlbXB0OiB0aGlzLmF0dGVtcHQsIGF1dG9SZXRyeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdyZXN0b3JlcjpyZXRyeS1yZXN0b3JhdGlvbicpLCA1MDAwKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaChmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZmluaXNoKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZpbmlzaChzdWNjZXNzKSB7XHJcbiAgICAgIGlmIChzdWNjZXNzKSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgeyB1cmw6IF9TVE9SRS51cmwsIHJlcG9ydDogdGhpcy5nZXRSZXBvcnQoKSwgYXR0ZW1wdDogdGhpcy5hdHRlbXB0IH0pO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgIH0sXHJcbiAgICBnZXRSZXBvcnQoKSB7XHJcbiAgICAgIGNvbnN0IHJlcG9ydCA9IHRoaXMuZmFpbHVyZVJlcG9ydDtcclxuICAgICAgbGV0IG1zZyA9ICcnO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHJlcG9ydCkge1xyXG4gICAgICAgIG1zZyArPSBgJHtyZXBvcnRbaV0ucmVhc29ufSA6ICR7cmVwb3J0W2ldLnRleHR9XFxuYDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbXNnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfU0VMRUNUSU9OIHtcclxuXHJcbiAgY29uc3RydWN0b3Iobm9kZSwgb3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQpIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuXHJcbiAgICBpZiAobm9kZSB8fCAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbmVkID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUobm9kZSlcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmNvbGxlY3ROb2Rlcyh0cnVlKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXMoKVxyXG4gICAgICAgICAgICAvLy51cGRhdGUoKVxyXG4gICAgICAgICAgICAuYWRqdXN0KClcclxuICAgICAgICAgICAgLy8udXBkYXRlKClcclxuICAgICAgICAgICAgLy8ucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB3aG9sZURvY3VtZW50ID8gd2luZG93LmRvY3VtZW50LmJvZHkgOiB0aGlzLmdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyKCk7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSB3aG9sZURvY3VtZW50ID9cclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZi5pc1NlbGVjdGFibGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSkgOlxyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxlY3Rpb24uY29udGFpbnNOb2RlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpO1xyXG5cclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgbGV0IG5vZGVzID0gW10sXHJcbiAgICAgICAgcGFyZW50Tm9kZXMgPSBbXSxcclxuXHJcbiAgICAgICAgdGV4dE5vZGUsIHBhcmVudCwgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICB3aGlsZSh0ZXh0Tm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkpIHtcclxuICAgICAgbm9kZXMucHVzaCh0ZXh0Tm9kZSk7XHJcbiAgICB9XHJcbiAgICBub2RlcyA9IHRoaXMudHJpbVNlbGVjdGlvbihub2Rlcyk7XHJcbiAgICAvL3RoaXMubm9kZXMgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSA6IG5vZGVzO1xyXG4gICAgdGhpcy5ub2RlcyA9IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKTtcclxuICAgIHRoaXMucGFyZW50Tm9kZXMgPSB0aGlzLmNvbGxlY3RQYXJlbnROb2Rlcyh0aGlzLm5vZGVzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVjb2xsZWN0Tm9kZXMobWFyaykge1xyXG4gICAgY29uc3QgbWFya1dyYXBwZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF49XCInICsgbWFyay5pZCArICdfXCJdJykpO1xyXG4gICAgY29uc3QgbSA9IG1hcmtXcmFwcGVycy5sZW5ndGg7XHJcbiAgICBjb25zdCBuZXdTZWdtZW50ID0gbWFya1dyYXBwZXJzLm1hcChlbCA9PiBlbC5maXJzdENoaWxkKTtcclxuXHJcbiAgICBjb25zdCBwcmV2ID0gbWFya1dyYXBwZXJzWzBdLnByZXZpb3VzU2libGluZztcclxuICAgIGNvbnN0IG5leHQgPSBtYXJrV3JhcHBlcnNbbS0xXS5uZXh0U2libGluZztcclxuXHJcbiAgICBjb25zdCBzdGFydCA9IG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbjtcclxuICAgIGNvbnN0IGVuZCA9IG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb247XHJcblxyXG4gICAgaWYgKHByZXYgJiYgcHJldi5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnVuc2hpZnQocHJldik7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dCAmJiBuZXh0Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQucHVzaChuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5vZGVzLnNwbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCAuLi5uZXdTZWdtZW50KTtcclxuICB9XHJcbiAgdHJpbVNlbGVjdGlvbihub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgbGV0IGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgZmlyc3ROb2RlID0gbm9kZXNbMF07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gZmlyc3ROb2RlICYmIGZpcnN0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCA8PSBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KSB7XHJcbiAgICAgICAgbm9kZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Tm9kZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbGFzdE5vZGUgJiYgdGhpcy5pc0JsYW5rKGxhc3ROb2RlLmRhdGEuc3Vic3RyKDAsIHNlbGVjdGlvbi5mb2N1c09mZnNldCkpKSB7XHJcbiAgICAgICAgbm9kZXMucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgcmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWwgPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCByZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHJnKTtcclxuXHJcbiAgICBub2RlcyA9IG5vZGVzLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgcmcuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgICAgcmV0dXJuICEhc2VsLnRvU3RyaW5nKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UodGhpcy5yYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICBjb2xsZWN0UGFyZW50Tm9kZXMobm9kZXMpIHtcclxuICAgIGxldCBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHBhcmVudHMgPSBbXSwgaSA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHBhcmVudHMucHVzaChub2Rlc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50cztcclxuICB9XHJcbiAgcmV0cmlldmVUZXh0KCkge1xyXG4gICAgbGV0IHJhbmdlID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBub2RlcyA9IHRoaXMubm9kZXMsXHJcbiAgICAgICAgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBub2RlVGV4dHMgPSBbXSxcclxuICAgICAgICB0ZXh0O1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBub2RlVGV4dHMucHVzaChub2Rlc1tpXS5kYXRhKTtcclxuXHJcbiAgICBsIC09IDE7XHJcblxyXG4gICAgaWYgKG5vZGVUZXh0cy5sZW5ndGgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0LCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgIC8vIFJ1YnkgYW5ub3RhdGlvbnM6XHJcbiAgICAgIC8vIEZvciB3aGF0ZXZlciByZWFzb24gPHJ0PiBjYW4gYmUgc2VsZWN0ZWQsIGJ1dCBgZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKWAgd29uJ3QgY29udGFpbiBpdHMgdGV4dCBjb250ZW50IVxyXG4gICAgICB0YWcgIT09ICdSUCcgJiYgdGFnICE9PSAnUlQnICYmIHRhZyAhPT0gJ1JUQycgJiZcclxuICAgICAgIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ3N2ZycpIC8vJiZcclxuICAgICAgLy8hdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnbWF0aCcpXHJcbiAgICApO1xyXG4gIH1cclxuICBpc0NoaWxkT2Yobm9kZSwgbm9kZVR5cGUpIHtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBub2RlVHlwZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlzQmxhbmsobm9kZSkge1xyXG4gICAgbGV0IHRleHQ7XHJcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZS5kYXRhID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGUuZGF0YTtcclxuICAgICAgZWxzZSB0ZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQuc2VhcmNoKC9bXlxcc1xcblxcclxcdF0vZykgPT09IC0xO1xyXG4gIH1cclxuICBpc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHBvc2l0aW9uID0gYW5jaG9yLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwb3NpdGlvbiA9PT0gMiB8fFxyXG4gICAgICBwb3NpdGlvbiA9PT0gMTAgfHxcclxuICAgICAgKCFwb3NpdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0ID4gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSk7XHJcbiAgfVxyXG4gIGlzU2ltcGxlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3JOb2RlID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXNOb2RlID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBhbmNob3JOb2RlID09PSBmb2N1c05vZGUgJiZcclxuICAgICAgYW5jaG9yTm9kZS5ub2RlVHlwZSA9PT0gMyAmJlxyXG4gICAgICAoIWFuY2hvck5vZGUubmV4dFNpYmxpbmcgfHwgKGFuY2hvck5vZGUubmV4dFNpYmxpbmcuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXNOb2RlKSAhPT0gNCkpKTtcclxuICB9XHJcbiAgaXNTZWxlY3RhYmxlKG5vZGUpIHtcclxuICAgIHRoaXMucmFuZ2Uuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgIHJldHVybiAhIXRoaXMuc2VsZi50b1N0cmluZygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlU3RhdGUnLFxyXG4gICAgICAnYWRkZWQ6bm90ZSc6ICdvbk5vdGVBZGRlZCcsXHJcbiAgICAgICdhZGRlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrQWRkZWQnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnb25MYXN0Tm90ZVJlbW92ZWQnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrUmVtb3ZlZCdcclxuICAgIH1cclxuXHR9LFxyXG4gIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gIGVsOiBudWxsLFxyXG5cclxuICBhdHRhY2hlZDogZmFsc2UsXHJcblxyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG5vdGVzOiB7XHJcbiAgICAgIGVsOiBudWxsLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2hvd246IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYm9va21hcms6IHtcclxuICAgICAgZWw6IG51bGwsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBzaG93bjogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBib29rbWFyazogZmFsc2UsXHJcbiAgbm90ZXM6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xyXG4gIH0sXHJcbiAgdXBkYXRlU3RhdGUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdibWljb24nKS50aGVuKGJtaWNvbiA9PiB7XHJcbiAgICAgIHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ID0gYm1pY29uO1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ID0gbm90ZWljb24pO1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgfSxcclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBzaG91bGRBdHRhY2ggPVxyXG4gICAgICAodGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgJiYgdGhpcy5ib29rbWFyaykgfHxcclxuICAgICAgKHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ICYmIHRoaXMubm90ZXMpO1xyXG5cclxuICAgIGlmIChzaG91bGRBdHRhY2gpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXR0YWNoZWQgJiYgIXNob3VsZEF0dGFjaCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMsIGJ0bjtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtdWknKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgIGJ0biA9IGJ1dHRvbnNbYl07XHJcbiAgICAgIGlmIChidG4uc2hvdyAmJiAhYnRuLnNob3duICYmIHRoaXNbYl0pIHRoaXMuYWRkQnV0dG9uKGIpO1xyXG4gICAgICBlbHNlIGlmIChidG4uc2hvd24gJiYgKCF0aGlzW2JdIHx8ICFidG4uc2hvdykpIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFidXR0b25zLm5vdGVzLnNob3duICYmICFidXR0b25zLmJvb2ttYXJrLnNob3duKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRhY2hlZCA9IHRydWU7XHJcbiAgfSxcclxuICByZW1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucztcclxuXHJcbiAgICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICAgIGlmIChidXR0b25zW2JdLnNob3duKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtdWkpO1xyXG4gICAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVCdXR0b25zKCkge1xyXG4gICAgY29uc3Qgbm90ZXNCdXR0b24gPSB0aGlzLmJ1dHRvbnMubm90ZXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3Rlc3RvZ2dsZScpO1xyXG4gICAgY29uc3QgYm9va21hcmtCdXR0b24gPSB0aGlzLmJ1dHRvbnMuYm9va21hcmsuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ibScpO1xyXG4gICAgbm90ZXNCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGVzJyk7XHJcbiAgICBib29rbWFya0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICB9LFxyXG4gIGFkZEJ1dHRvbih0eXBlKSB7XHJcbiAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IGJ0bi5oYW5kbGVyID0gdHlwZSA9PT0gJ25vdGVzJyA/XHJcbiAgICAgIHRoaXMudG9nZ2xlTm90ZXMuYmluZCh0aGlzKSA6XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRtdWkuYXBwZW5kQ2hpbGQoYnRuLmVsKTtcclxuICAgIGJ0bi5zaG93biA9IHRydWU7XHJcblxyXG4gICAgYnRuLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQnV0dG9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG5cclxuICAgIHRtdWkucmVtb3ZlQ2hpbGQoYnRuLmVsKTtcclxuICAgIGJ0bi5zaG93biA9IGZhbHNlO1xyXG5cclxuICAgIGJ0bi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bi5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3RtdWlwb3MnKVxyXG4gICAgICAudGhlbihwb3MgPT4gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcG9zLnNwbGl0KCctJykubWFwKHAgPT4gcCArICc6MXB4OycpLmpvaW4oJyAnKSkpO1xyXG4gIH0sXHJcbiAgb25Ob3RlQWRkZWQoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkxhc3ROb3RlUmVtb3ZlZCgpIHtcclxuICAgIHRoaXMubm90ZXMgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkJvb2ttYXJrQWRkZWQoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkJvb2ttYXJrUmVtb3ZlZCgpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcygpIHtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVzJyk7XHJcbiAgfSxcclxuICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzY3JvbGwtdG8tYm9va21hcmsnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdpbmplY3Rpb24nLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnY29weTptYXJrcycsXHJcbiAgICAgICdzYXZlOmVudHJ5PycsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JyxcclxuICAgICAgJ2xvb2t1cDp3b3JkJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FjdGl2YXRlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnLFxyXG4gICAgICAnZmV0Y2g6ZW50cmllcycsXHJcblxyXG4gICAgICAvLyBAUkVTVE9SRVJcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJyxcclxuICBcdFx0J2ZhaWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLFxyXG4gICAgICAnY2FuY2VsZWQ6c2F2ZS1hZnRlci1jYW5jZWxlZC1yZXN0b3JhdGlvbidcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWUsXHJcbiAgICAgIGF1dG9SZXRyeTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBub3RlZm9udHNpemU6IDEyLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBsb2FkTm90ZTogZmFsc2UsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ3RtJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9ET01NT0RVTEUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBvYmouX2JvdW5kID0ge307XHJcbiAgICBvYmouX2V4dHJhQm91bmQgPSBbXTtcclxuXHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnNNYW51YWxseSB8fCB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgIXRoaXMuYXV0b1BhdXNlIHx8IHRoaXMuc2V0QXV0b1BhdXNlKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2V0QXV0b1BhdXNlKCkge1xyXG4gICAgdGhpcy5vbigndG9nZ2xlZDphZGRvbicsIG9uID0+IHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGlmICghdXJsKSByZXR1cm4gJyc7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQsICcnKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInLCAnSHJlZiddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UoYXJnc1swXS50YWJJZCwgeyBldjogZXZlbnQsIHdhaXQ6IHRydWUgfSwgeyBmcmFtZUlkOiBhcmdzWzBdLmZyYW1lSWQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyT25lT2ZmRXZlbnRzKCk7XHJcbiAgfVxyXG4gIGV4dGVuZChldmVudHMpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJPbmVPZmZFdmVudHMoZXZlbnRzLk9ORU9GRik7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT25lT2ZmRXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzIHx8ICggZXZlbnRzID0gdGhpcy5ldmVudHMuT05FT0ZGKTtcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZSBvZiBldmVudHMpIHtcclxuICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIF9QUklWUE9SVCBleHRlbmRzIF9QT1JUIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucG9ydExpc3RlbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcclxuICAgICAgICAgICF0aGlzLnBvcnQgfHwgdGhpcy5wb3J0Lm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcih0aGlzLnBvcnRMaXN0ZW5lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50cy5DT05ORUNUSU9OO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogYCR7dGhpcy5uYW1lfV8ke3RoaXMuaWR9YCB9KTtcclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMucG9ydExpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKTtcclxuICAgICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIF9CR1BPUlQgZXh0ZW5kcyBfUE9SVCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5wb3J0cyA9IHt9O1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJPbkNvbm5lY3RMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLkNPTk5FQ1RJT047XHJcblxyXG4gICAgICAgIGlmIChldmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9ydHMgPSB0aGlzLnBvcnRzO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHBvcnRzW3BvcnQubmFtZV0gPSBwb3J0O1xyXG4gICAgICAgICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBwb3J0c1twb3J0Lm5hbWVdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBwb3J0cyA9IHRoaXMucG9ydHM7XHJcbiAgICAgICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHAgaW4gcG9ydHMpIHtcclxuICAgICAgICAgICAgaWYgKHBvcnRzLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgcG9ydHNbcF0ucG9zdE1lc3NhZ2UobXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgX1BPUlQsIF9QUklWUE9SVCwgX0JHUE9SVCB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9