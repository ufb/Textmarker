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

var _BOOKMARK =
/*#__PURE__*/
function () {
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _MARK =
/*#__PURE__*/
function () {
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var wrapper = _step.value;
          wrapper.addEventListener('click', this.marker.proxy(this, this.onClick), false);
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

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this4.mark.wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var wrapper = _step.value;
              wrapper.addEventListener('click', handler, false);
              wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
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
        } else {
          _this4.removeMarkListeners();
        }
      });
    },
    removeMarkListeners: function removeMarkListeners() {
      if (!this.markClickHandler) return;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.mark.wrappers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var wrapper = _step2.value;
          wrapper.removeEventListener('click', this.markClickHandler, false);
          wrapper.removeAttribute('title');
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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = marks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var mark = _step.value;

        if (mark.keyData.note) {
          this.add(mark);
        }
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RestorerBase =
/*#__PURE__*/
function (_MODULE2) {
  _inherits(RestorerBase, _MODULE2);

  function RestorerBase(entry) {
    var _this;

    _classCallCheck(this, RestorerBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RestorerBase).call(this, entry));
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

var Restorer =
/*#__PURE__*/
function (_RestorerBase) {
  _inherits(Restorer, _RestorerBase);

  function Restorer(entry) {
    var _this3;

    _classCallCheck(this, Restorer);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Restorer).call(this, entry));
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

var ImmutRestorer =
/*#__PURE__*/
function (_RestorerBase2) {
  _inherits(ImmutRestorer, _RestorerBase2);

  function ImmutRestorer(entry) {
    var _this6;

    _classCallCheck(this, ImmutRestorer);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ImmutRestorer).call(this, entry));
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _SELECTION =
/*#__PURE__*/
function () {
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _DOMMODULE =
/*#__PURE__*/
exports._DOMMODULE = function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  function _DOMMODULE(obj) {
    var _this;

    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(_DOMMODULE).call(this, obj));
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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = attrElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX1BSSVZQT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJ1cGRhdGVkIiwicmVzdG9yaW5nIiwiaWZyYW1lIiwibmFtZSIsInVuZGVmaW5lZCIsImlzTmV3IiwiZW50cmllcyIsImxvY2tlZCIsImhhc2hTZW5zaXRpdmUiLCJ0bWlkIiwibm90ZUNvbG9yIiwibm90ZUZvbnRTaXplIiwiaW1tdXQiLCJyZWRlc2NyaWJpbmciLCJyZXN1bWUiLCJ1cGRhdGVMb2NhdGlvbiIsIndpbmRvdyIsInBhcmVudCIsImRvY3VtZW50IiwiVVJMIiwidXBkYXRlU3RhdHVzIiwicXVlcnlTZWxlY3RvciIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnlTZXR0aW5ncyIsImhpc3RvcnkiLCJuYW1pbmciLCJpZ25vcmVIYXNoIiwiZW1pdCIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJmaXJzdEVudHJ5IiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInJlc3RvcmVyIiwiYXV0b2luaXQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJveHkiLCJvbkhhc2hDaGFuZ2UiLCJvblJlc3VtZWQiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsImJvb2ttYXJrIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbkVudHJpZXNGb3VuZCIsIm9uIiwic3RhcnRSZXN0b3JhdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsInJlY2VudGx5T3BlbmVkRW50cnkiLCJ1cGRhdGVOYW1lIiwibm90aWZ5QkciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJoYW5kbGVyIiwibWFya2VyIiwidXBkYXRlIiwibWFya21ldGhvZCIsInNldE1hcmtlciIsImtleSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJsaXN0ZW5pbmciLCJzdGFydExpc3RlbmluZyIsInN0b3BMaXN0ZW5pbmciLCJvbk1vdXNldXAiLCJiaW5kIiwiYm9keSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b1N0cmluZyIsIl9CT09LTUFSSyIsIm1hcmsiLCJhbmNob3IiLCJ3cmFwcGVycyIsInciLCJrZXlEYXRhIiwiaWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJibSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImFjdGl2YXRlIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVtb3ZlTGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJidXR0b24iLCJ0YXJnZXQiLCJjb250YWlucyIsImdldEF0dHJpYnV0ZSIsIl9NQVJLIiwicHJlU2V0dGluZ3MiLCJkZWZhdWx0cyIsImlzSW1tdXQiLCJzdHlsZSIsImNvbmRzIiwidGV4dCIsIm5vdGUiLCJkIiwiaWRjb3VudCIsInNpbXBsZSIsInJhbmdlIiwic3RhcnRPZmZzZXQiLCJlbmRPZmZzZXQiLCJjb250YWluZXJzIiwiYW5jaG9yTm9kZVBvc2l0aW9uIiwiZm9jdXNOb2RlUG9zaXRpb24iLCJkZXNjcmliZV9pbW11dCIsIm5vZGVzIiwibiIsImNyZWF0ZVdyYXBwZXJzIiwibGFzdEluZGV4Iiwibm9kZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNldFN0YXJ0Iiwic2V0RW5kIiwic3Vycm91bmRDb250ZW50cyIsInB1c2giLCJwYXJlbnROb2RlIiwibm9ybWFsaXplIiwiZGVmaW5lUG9zaXRpb24iLCJzZXRCb29rbWFyayIsImRlc2NyaWJlIiwicmVnaXN0ZXJDbGlja0xpc3RlbmVycyIsIndyYXBwZXIiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicmVjcmVhdGUiLCJwb3B1cCIsImVsIiwiYmdDb2xvclJlZ0V4cCIsImJnQ29sb3IiLCJjb2xvckJ0biIsIm0iLCJtYXRjaCIsImFwcGVuZENoaWxkIiwiYmFja2dyb3VuZCIsInBvcCIsInJlbW92ZUNoaWxkIiwic2hvdyIsInBvcHVwSGVpZ2h0Iiwib25Nb3VzZWRvd24iLCJzZWxlY3Rpb25Qb3NpdGlvbiIsImdldFJhbmdlQXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJvZmZzZXRIZWlnaHQiLCJNYXRoIiwibWF4IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJhcHBseSIsImF1dG9ub3RlIiwidW5kbyIsIm5vQXV0b3NhdmUiLCJ1bmRvQm9va21hcmsiLCJyZWRvIiwiY3V0T3V0IiwidG9CZVJlbW92ZWQiLCJpbmRpY2VzIiwic21hbGxlc3RJRCIsImZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzIiwiaiIsIngiLCJtYXJrc0ludGVyc2VjdCIsImluY2x1ZGVzIiwic29ydCIsInNoaWZ0IiwibWluIiwic3BsaWNlIiwiZ2V0QnlJZCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsImZvckVhY2giLCJhcmciLCJvcHRpb25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoaWdobGlnaHQiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHRDb250ZW50Iiwic2lsZW50IiwiaW1tdXRhYmxlIiwic2F2ZSIsInJlcXVlc3QiLCJncmFudGVkIiwic3ViIiwiaTE4biIsImdldE1lc3NhZ2UiLCJwcm9tcHQiLCJyZXRyaWV2ZUVudHJ5IiwiY29uZmlybWVkIiwiY29uZmlybSIsImNvcHkiLCJzZWFyY2giLCJhbGVydCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImZpbmRNYXJrIiwidHJpbSIsInN0b3JlIiwib3JkZXIiLCJvcmRlck1hcmtzVmlzdWFsbHkiLCJfU0VMRUNUSU9OIiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJhcmVhX2hpc3RvcnkiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXRUaW1lb3V0Iiwic2V0IiwicmVtb3ZlQm9va21hcmsiLCJtYXJrMSIsIm1hcmsyIiwibTEiLCJtMiIsImJiMSIsImJiMiIsInRvcDEiLCJ0b3AyIiwibWFwIiwid3JhcHBlcnMxIiwidzEiLCJpZDEiLCJ3cmFwcGVyczIiLCJpZDIiLCJ3MiIsIm9uTWFya2VyS2V5Iiwib25Ib3RrZXkiLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0Iiwia0QiLCJjb2xvciIsIkJPRFkiLCJET00iLCJjbGljayIsImtleXVwIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwibWFya0NsaWNrSGFuZGxlciIsInZpc2libGUiLCJyZWNlbnRseVVwZGF0ZWQiLCJzZXR0aW5nc01vZGUiLCJ0Iiwic2l6ZSIsImgiLCJkcmFnRFgiLCJkcmFnRFkiLCJtdXRhdGlvbk9ic2VydmVyIiwiYWRqdXN0Tm90ZURhdGFPYmplY3QiLCJjcmVhdGVOb3RlRWxlbWVudCIsImFkZExpc3RlbmVycyIsImFkZE1hcmtMaXN0ZW5lcnMiLCJub3RlRGF0YSIsImZzIiwiaGVhZGVyIiwiYWN0aW9ucyIsImRlbCIsImdlYXIiLCJwYWxldHRlIiwidGV4dEVsZW1lbnQiLCJkZWxUZXh0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluVGV4dCIsImdlYXJUZXh0IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJhdHRlbXB0VXBkYXRlIiwiX2RlbGV0ZSIsImhpZGUiLCJyZW1vdmVNYXJrTGlzdGVuZXJzIiwiZm9yY2UiLCJrZXlDb2RlIiwiaW5uZXJXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRQb3NpdGlvbiIsIm9mZnNldCIsImZvbnRTaXplIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25uZWN0TXV0YXRpb25PYnNlcnZlciIsImZvY3VzIiwiYnJpbmdVcEZyb250IiwiekluZGV4IiwiZGlzY29ubmVjdCIsInRvZ2dsZSIsInRvZ2dsZVBhbGV0dGUiLCJjaGFuZ2VDb2xvciIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRhcmVhIiwiY29uZmlnIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwic2F2ZVNpemUiLCJvYnNlcnZlIiwicmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib25EcmFnU3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwib25EcmFnIiwib25EcmFnRW5kIiwibXV0YXRpb25zTGlzdCIsIndpZHRoIiwibm90ZXMiLCJkcmFnSGFuZGxlciIsImRyYWdTdG9wSGFuZGxlciIsInVwZGF0ZVN0eWxlIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJtZXRoIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsIm5vdGVmb250c2l6ZSIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJzdGFydERyYWdnaW5nTm90ZSIsImVtaXREcmFnRXZlbnQiLCJzdG9wRHJhZ2dpbmdOb3RlIiwiZG9jIiwic2VuZE5vdGVzU3RhdGUiLCJyZXBvcnQiLCJhdXRvUGF1c2UiLCJrZXlkb3duIiwic2VsZWN0aW9uY2hhbmdlIiwic2VsZWN0aW9uQ29sbGFwc2VkIiwic2hpZnRTZW5zaXRpdmVLZXlzIiwia2V5Q29kZU1hcCIsImlzRWRpdGFibGUiLCJ0YWdOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiZGVsZWdhdGUiLCJ0b0xvd2VyQ2FzZSIsIm1vZEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJhcnJvd0tleXMiLCJsb2NrZWRBY3Rpb25zIiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJvcmlnS2V5IiwiaXNNYXJrZXJLZXkiLCJpc0N1c3RvbU1hcmtlcktleSIsInNldHRpbmciLCJzaG9ydGN1dCIsInMxIiwiczIiLCJyZXN0b3JlZCIsImZhaWxlZCIsImF0dGVtcHQiLCJmYWlsdXJlUmVwb3J0IiwiSW1tdXRSZXN0b3JlciIsIlJlc3RvcmVyIiwicmV0cnkiLCJvbkZhaWx1cmUiLCJhdXRvUmV0cnkiLCJnZXRSZXBvcnQiLCJmaW5pc2giLCJzdWNjZXNzIiwibXNnIiwicmVhc29uIiwiUmVzdG9yZXJCYXNlIiwiYXJlYSIsInByb2MiLCJjYiIsInJlYyIsImV4cGlyZSIsImxsIiwidGVtcCIsInF1ZXVlIiwiY2FjaGUiLCJwaGFzZSIsInNlbGVjdGlvblRyaWFsIiwiY2h1bmtEdXJhdGlvbiIsIl90aW1lciIsIm9vbSIsImluaXQiLCJub3ciLCJwb3N0cG9uZWQiLCJjb252ZXJ0RGVzY3JpcHRpb24iLCJjcmVhdGVUZW1wT2JqZWN0IiwiY29udmVydGVkQ29uZHMiLCJmaXJzdE5vZGVOYW1lIiwiZmlyc3RQYXJlbnROb2RlTmFtZSIsImZpcnN0VGV4dE5vZGVQb3NpdGlvbiIsImZpcnN0Tm9kZVBvc2l0aW9uIiwiZmlyc3RQYXJlbnROb2RlUG9zaXRpb24iLCJmaXJzdEdyYW1wYU5vZGVQb3NpdGlvbiIsInRyaW1tZWRUZXh0Iiwic3F1ZWV6ZWRUZXh0Iiwic3F1ZWV6ZSIsInRleHRMZW5ndGgiLCJ0cmltbWVkVGV4dExlbmd0aCIsInNxdWVlemVkVGV4dExlbmd0aCIsInBvc3NpYmxlUG9zaXRpb25zIiwicG9zc2libGVFbmRQb3NpdGlvbnMiLCJwb3NzaWJsZVN0YXJ0Tm9kZXMiLCJwb3NzaWJsZUVuZHMiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0cyIsInNvcnRRdWV1ZUJ5SWQiLCJzZXRCb2R5U2VsZWN0aW9uIiwiZ2V0VGV4dFBvc2l0aW9ucyIsInBvc3Rwb25lT3ZlcmxhcHBpbmdzIiwiZmluZFBvc3NpYmxlRXh0cmVtYSIsInJ1bGVPdXRNdWx0aXBsZXMiLCJyZXN0b3JlUmFuZ2VzIiwidGltZXIiLCJyZXMiLCJ0cmltbWVkU2VsZWN0aW9uVGV4dCIsImFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJlbmRQb3NpdGlvbnMiLCJtYXJrVGVtcCIsInNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwibWF4UG9zaXRpb24iLCJwb3NpdGlvbnMiLCJwb3MxIiwicG9zMiIsInBvc3Rwb25lIiwiY3V0T3V0Rm9yIiwiYWxyZWFkeUluY2x1ZGVkIiwiYm9keVRleHROb2RlcyIsInNhdGlzZmllZCIsImNoYXJzIiwibmV4dFN0YXJ0Rm91bmQiLCJlbmRpbmdzSW5UaGlzTm9kZSIsIm5vZGVzVGV4dCIsIm5vZGVzVGV4dExlbmd0aCIsImRpZmYiLCJmIiwicSIsInBvc3NpYmxlRm9jdXNPZmZzZXQiLCJzdGFydEZvdW5kRm9yIiwiaGFzRW5kaW5nc0luVGhpc05vZGUiLCJlbmRGb3VuZEZvciIsInNhdGlzZmllc0Rlc2NyaXB0aW9uIiwiZmluZEZvY3VzT2Zmc2V0IiwiZ3JhbmRncmFuZGdyYW1wYSIsIm1hdGNoZXMiLCJzdGFydE5vZGUiLCJzdGFydE5vZGVQb3NpdGlvbiIsInNldE1hdGNoaW5nRW5kIiwiZW5kTm9kZSIsImVuZE5vZGVQb3NpdGlvbiIsImZvY3VzT2Zmc2V0IiwiZGVzY3JpcHRpb24iLCJyZWxldmFudE5vZGVUZXh0IiwibWFya1RleHQiLCJ0ZXh0c01hdGNoIiwibm9kZVRleHQiLCJjb3VudGVyIiwidGVzdCIsImNyZWF0ZVJhbmdlIiwicmVjb2xsZWN0Tm9kZXMiLCJzbGljZSIsImNvbnRleHQiLCJjdXJyZW50Q2hpbGQiLCJwcm9jZXNzSW5DaHVua3MiLCJyZXN0b3JlUmFuZ2UiLCJnZXROb2RlIiwidGV4dE5vZGVQb3NpdGlvbiIsInJhbmdlQ291bnQiLCJkZWZpbmVkIiwicmVkdWNlVG9PbmVSYW5nZSIsInJldHJpZXZlVGV4dCIsImFkanVzdCIsInNlbGVjdEFsbENoaWxkcmVuIiwicHJvcHMiLCJpc1NpbXBsZSIsImlzQmFja3dhcmRzIiwicmV2ZXJzZSIsImZpcnN0VGV4dE5vZGUiLCJsYXN0VGV4dE5vZGUiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsIndob2xlRG9jdW1lbnQiLCJnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lciIsImZpbHRlciIsImlzU2VsZWN0YWJsZSIsImlzQmxhbmsiLCJoYXNOb3JtYWxQYXJlbnQiLCJjb250YWluc05vZGUiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJ0cmltU2VsZWN0aW9uIiwicmVkdWNlVG9TZWxlY3RhYmxlIiwiY29sbGVjdFBhcmVudE5vZGVzIiwibWFya1dyYXBwZXJzIiwibmV3U2VnbWVudCIsInByZXYiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJ1bnNoaWZ0IiwiYW5jaG9yT2Zmc2V0Iiwic3Vic3RyIiwic2VsIiwicmciLCJzZWxlY3ROb2RlIiwicGFyZW50cyIsIm5vZGVUZXh0cyIsImpvaW4iLCJub2RlMSIsIm5vZGUyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJyYW5nZTAiLCJsYXN0UmFuZ2UiLCJ0YWciLCJ0b1VwcGVyQ2FzZSIsImlzQ2hpbGRPZiIsImF0dGFjaGVkIiwiYnV0dG9ucyIsInNob3duIiwiY3JlYXRlQnV0dG9ucyIsInVwZGF0ZVN0YXRlIiwic2hvdWxkQXR0YWNoIiwicmVuZGVyIiwiYnRuIiwiYiIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInVwZGF0ZVBvc2l0aW9uIiwidG11aSIsIm5vdGVzQnV0dG9uIiwiYm9va21hcmtCdXR0b24iLCJ0eXBlIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJPTkVPRkYiLCJ2ZXJzaW9uIiwicnVudGltZSIsImdldE1hbmlmZXN0IiwieiIsInkiLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiZG93bmxvYWQiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJhdXRvY3MiLCJpZnJhbWVzIiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJsb2FkTm90ZSIsImN1c3RvbVNlYXJjaCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsImxpbmtzIiwidGhlbWVzIiwidGhlbWUiLCJwYWdlbm90ZXMiLCJzeW5jIiwiTUFYX0xPR19FTlRSSUVTIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInZhbCIsInByb3AiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJhcmdzIiwidG9waWMiLCJzZW5kTWVzc2FnZSIsInRhYklkIiwiZXYiLCJ3YWl0IiwiZnJhbWVJZCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJyZWdpc3Rlck9uZU9mZkV2ZW50cyIsInJlcSIsImxhc3RBcmciLCJ0YWIiLCJwb3J0IiwicG9ydExpc3RlbmVyIiwiY29ubmVjdCIsInJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzIiwicmVtb3ZlTGlzdGVuZXIiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJsaXN0ZW5lciIsIl9CR1BPUlQiLCJwb3J0cyIsInJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX3BhZ2Vub3RlcyIsImxvY2FsIiwic2V0QXJlYXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztB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QixDQUFzQm54QixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXV4QixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQ0ssSUFBbkMsRUFBeUMsT0FBTyxFQUFQO0FBQ3pDLGVBQU9MLFlBQVksQ0FBQ0ssSUFBcEI7QUFDRCxPQUhNLENBQVA7QUFJRDs7O21DQUNjO0FBQ2IsYUFBT3Z3QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0I0dkIsS0FBaEIsQ0FBc0JueEIsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUF1eEIsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNoSSxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT2xvQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JxcUIsSUFBaEIsQ0FBcUI1ckIsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUF3eEIsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUNqSSxPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU9nSSxZQUFZLENBQUNoSSxPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QjNyQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQsIF9QUklWUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX1BSSVZQT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX1NUT1JFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZW52OiAnaW5qZWN0aW9uJyxcclxuXHJcbiAgdXJsOiAnJyxcclxuICBoYXNobGVzc1VSTDogJycsXHJcblxyXG4gIHVwZGF0ZWQ6IGZhbHNlLFxyXG4gIHJlc3RvcmluZzogZmFsc2UsXHJcblxyXG4gIGlmcmFtZTogZmFsc2UsXHJcbiAgbmFtZTogdW5kZWZpbmVkLFxyXG4gIGlzTmV3OiB0cnVlLFxyXG4gIC8vZW50cnk6IG51bGwsXHJcbiAgZW50cmllczoge30sXHJcbiAgbG9ja2VkOiBmYWxzZSxcclxuICBoYXNoU2Vuc2l0aXZlOiBmYWxzZSxcclxuICB0bWlkOiAnJyxcclxuICBub3RlQ29sb3I6ICd5ZWxsb3cnLFxyXG4gIG5vdGVGb250U2l6ZTogMTIsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZW50cmllcyA9IHt9O1xyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy50bWlkID0gJyc7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVMb2NhdGlvbigpIHtcclxuICAgIHRoaXMuaWZyYW1lID0gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIHRoaXMudXJsID0gd2luZG93LmRvY3VtZW50LlVSTDtcclxuICAgIHRoaXMuaGFzaGxlc3NVUkwgPSBfSEFTSExFU1ModGhpcy51cmwpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVN0YXR1cygpIHtcclxuICAgIGlmICghdGhpcy5pc05ldyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10bS1pZF0nKSkgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgaGlzdG9yeVNldHRpbmdzID0gc2V0dGluZ3MgPyBzZXR0aW5ncy5oaXN0b3J5IDogbnVsbDtcclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gaGlzdG9yeVNldHRpbmdzLm5hbWluZyA9PT0gJ21hcmsnO1xyXG4gICAgICAgIHRoaXMuaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnlTZXR0aW5ncy5pZ25vcmVIYXNoID09PSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c3RvcmUtc3RhdHVzJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZW5hbWVFbnRyeShlbnRyeSwgb2xkTmFtZSkge1xyXG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUgPT09IG9sZE5hbWUgJiYgIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIGlmICh0aGlzLmVudHJpZXNbb2xkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0U3luY0ZvckVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkICYmIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSkge1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0uc3luY2VkID0gZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUVudHJ5KGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICBpZiAoZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lID09PSBkZWxldGVkRW50cnkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICBhZGRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGlmICghZW50cmllcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgY29uc3QgZSA9IGVudHJpZXMubGVuZ3RoO1xyXG5cclxuICAgIGlmICghdGhpcy5sb2NrZWQpIHRoaXMubmFtZSA9IGZpcnN0RW50cnkubmFtZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBlOyBpKyspIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcclxuICAgIHRoaXMuaW1tdXQgPSAhIWZpcnN0RW50cnkuaW1tdXQ7XHJcbiAgICB0aGlzLmhhc2hTZW5zaXRpdmUgPSBmaXJzdEVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9ibWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ibWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3Rlb25jbGljaygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RtdWlwb3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2ltbXV0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5cclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZSdcclxuaW1wb3J0ICcuL21vZHVsZXMvY29udGV4dG1lbnUnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbm90ZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RtdWknXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlci1wb3B1cCdcclxuaW1wb3J0ICcuL21vZHVsZXMvYXV0by1tYXJrZXInXHJcblxyXG5pbXBvcnQgJy4vbWFpbidcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCBfUkVTVE9SRVIgZnJvbSAnLi9tb2R1bGVzL3Jlc3RvcmVyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kUGFnZVN0YXRlJyxcclxuXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDpoYXNob3B0LXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnOiAnc2V0U3luY0ZvckVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZSc6ICdyZW5hbWVFbnRyeScsXHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICdvblNhdmVkRW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAnb25SZXN1bWVkJyxcclxuXHJcbiAgICAgIC8vIEBSRVNUT1JFUlxyXG4gICAgICAnZW50cmllczpmb3VuZCc6ICdvbkVudHJpZXNGb3VuZCcsXHJcblxyXG4gICAgICAvLyByZWdpc3RlciBhdCBCR1xyXG4gICAgICAnaW5qZWN0ZWQ/JzogJ25vdGlmeUJHJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJldHJ5QWN0aXZlOiBmYWxzZSxcclxuICByZXN0b3JlcjogbnVsbCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUudXBkYXRlTG9jYXRpb24oKTtcclxuICAgIF9TVE9SRS51cGRhdGVTdGF0dXMoKTtcclxuICAgIGlmICghdGhpcy5pZnJhbWUpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMub25IYXNoQ2hhbmdlKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uSGFzaENoYW5nZSgpIHtcclxuICAgIGlmIChfU1RPUkUuaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2hhc2hjaGFuZ2UnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uUmVzdW1lZCgpIHtcclxuICAgIF9TVE9SRS51cGRhdGVMb2NhdGlvbigpO1xyXG4gICAgX1NUT1JFLmlzTmV3IHx8IF9TVE9SRS5yZXN1bWUoKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2ZldGNoOmVudHJpZXMnLCBfU1RPUkUudXJsKTtcclxuICB9LFxyXG4gIG9uU2F2ZWRFbnRyeShlbnRyeSkge1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKGVudHJ5LnVybCA9PT0gdXJsKSB7XHJcbiAgICAgIF9TVE9SRS5hZGRFbnRyaWVzKFtlbnRyeV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIHRoaXMucmV0cnlBY3RpdmUgPSB0cnVlO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgc2VuZFBhZ2VTdGF0ZShpbmZvKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3BhZ2Utc3RhdGUnLCB7XHJcbiAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgYm9va21hcms6ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJyksXHJcbiAgICAgIHJldHJ5QWN0aXZlOiB0aGlzLnJldHJ5QWN0aXZlXHJcbiAgICB9LCBpbmZvKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVTdGF0dXMoKSB7XHJcbiAgICBfU1RPUkUudXBkYXRlU3RhdHVzKCk7XHJcbiAgfSxcclxuICBzZXRTeW5jRm9yRW50cnkoLi4uYXJncykge1xyXG4gICAgX1NUT1JFLnNldFN5bmNGb3JFbnRyeSguLi5hcmdzKTtcclxuICB9LFxyXG4gIHJlbmFtZUVudHJ5KC4uLmFyZ3MpIHtcclxuICAgIF9TVE9SRS5yZW5hbWVFbnRyeSguLi5hcmdzKTtcclxuICB9LFxyXG4gIHJlbW92ZUVudHJ5KC4uLmFyZ3MpIHtcclxuICAgIF9TVE9SRS5yZW1vdmVFbnRyeSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICAvLyBAUkVTVE9SRVJcclxuICBvbkVudHJpZXNGb3VuZChpbmZvKSB7XHJcbiAgICBpZiAoIV9TVE9SRS51cGRhdGVkKSB7XHJcbiAgICAgIHRoaXMub24oJ3VwZGF0ZWQ6c3RvcmUtc3RhdHVzJywgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnN0YXJ0UmVzdG9yYXRpb24sIGluZm8pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnRSZXN0b3JhdGlvbihpbmZvKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0UmVzdG9yYXRpb24oaW5mbykge1xyXG4gICAgbGV0IGVudHJpZXMgPSBpbmZvLmVudHJpZXM7XHJcbiAgICBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc107XHJcbiAgICBfU1RPUkUubG9ja2VkID0gaW5mby5sb2NrZWQ7XHJcbiAgICBpZiAoIXRoaXMucmVzdG9yZXIpIHRoaXMucmVzdG9yZXIgPSBfUkVTVE9SRVIoKTtcclxuICAgIF9TVE9SRS5hZGRFbnRyaWVzKGVudHJpZXMpO1xyXG4gICAgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgaWYgKGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSkgdGhpcy51cGRhdGVOYW1lKGVudHJpZXMsIGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bWFya3MnLCBpbmZvLmVudHJpZXMpO1xyXG4gIH0sXHJcbiAgdXBkYXRlTmFtZShlbnRyaWVzLCByZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKHJlY2VudGx5T3BlbmVkRW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLm5hbWUgPSByZWNlbnRseU9wZW5lZEVudHJ5Lm5hbWU7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbm90aWZ5Qkcoc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHNlbmRSZXNwb25zZSh0cnVlKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcic6ICdzZXRNYXJrZXInXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBtYXJrZXI6ICdtJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldE1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMubWFya2VyID0ga2V5O1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiB0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNldXAuYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbk1vdXNldXAoKSB7XHJcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgdGhpcy5tYXJrZXIpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQk9PS01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFyayA9IG51bGw7XHJcbiAgICB0aGlzLmFuY2hvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQobWFyaykge1xyXG4gICAgbWFyayA9IG1hcmsgfHwgdGhpcy5tYXJrO1xyXG5cclxuICAgIGxldCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuICAgICAgICBhbmNob3IgPSB3cmFwcGVyc1swXTtcclxuXHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgYW5jaG9yLmlkID0gJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJztcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcblxyXG4gICAgdGhpcy5tYXJrID0gbWFyaztcclxuICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZW1vdmUoKSB7XHJcbiAgICBsZXQgbWFyayA9IHRoaXMubWFyayxcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvcixcclxuICAgICAgICB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aDtcclxuXHJcbiAgICBhbmNob3IuaWQgPSAnJztcclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuICB9XHJcbiAgc2Nyb2xsSW50b1ZpZXcoYm0pIHtcclxuICAgIGlmIChibSB8fCAoYm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJykpKVxyXG4gICAgICBibS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKHRydWUpO1xyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlKG9uKSB7XHJcbiAgICBpZiAob24gJiYgIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVnaXN0ZXJIYW5kbGVyKCkge1xyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpIHtcclxuICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgX1NUT1JFLnRtaWQgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSwgd2luZG93LmRvY3VtZW50KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXJrZXIsIGtleSwgcHJlU2V0dGluZ3MsIGltbXV0KSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uLCBkZWZhdWx0cztcclxuXHJcblx0XHR0aGlzLm1hcmtlciA9IG1hcmtlcjtcclxuXHRcdHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbWFya2VyLnNlbGVjdGlvbjtcclxuICAgIHRoaXMuaW1tdXQgPSBfU1RPUkUucmVkZXNjcmliaW5nID8gbWFya2VyLmlzSW1tdXQgOiBpbW11dDtcclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICAgIGNvbmRzOiBudWxsLFxyXG4gICAgICB0ZXh0OiBzZWxlY3Rpb24udGV4dCxcclxuICAgICAgbm90ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGQgaW4gZGVmYXVsdHMpIHtcclxuICAgICAgaWYgKCFwcmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShkKSkge1xyXG4gICAgICAgIHByZVNldHRpbmdzW2RdID0gZGVmYXVsdHNbZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZVNldHRpbmdzLmlkID0gcHJlU2V0dGluZ3MuaWQgfHwgKyttYXJrZXIuaWRjb3VudDtcclxuXHRcdHRoaXMuaWQgPSBwcmVTZXR0aW5ncy5pZDtcclxuXHRcdHRoaXMuc2ltcGxlID0gc2VsZWN0aW9uLnNpbXBsZTtcclxuXHJcblx0XHRsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLnJhbmdlO1xyXG5cclxuXHRcdHRoaXMuc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldDtcclxuXHRcdHRoaXMuZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0O1xyXG5cclxuXHRcdHRoaXMud3JhcHBlcnMgPSBudWxsO1xyXG4gICAgdGhpcy5jb250YWluZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhID0ge1xyXG5cdFx0XHRpZDogcHJlU2V0dGluZ3MuaWQsXHJcblx0XHRcdGtleToga2V5LFxyXG5cdFx0XHRzdHlsZTogcHJlU2V0dGluZ3Muc3R5bGUsXHJcblx0XHRcdGNvbmRzOiBwcmVTZXR0aW5ncy5jb25kcyxcclxuXHRcdFx0dGV4dDogcHJlU2V0dGluZ3MudGV4dCxcclxuXHRcdFx0Ym9va21hcms6IHByZVNldHRpbmdzLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiBwcmVTZXR0aW5ncy5ub3RlLFxyXG4gICAgICBzeW5jZWQ6IHByZVNldHRpbmdzLnN5bmNlZFxyXG5cdFx0fTtcclxuXHJcbiAgICBpZiAodGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkge1xyXG4gICAgICB0aGlzLmRlc2NyaWJlX2ltbXV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHRjcmVhdGUocmFuZ2UpIHtcclxuICAgIHJhbmdlID0gcmFuZ2UgfHwgdGhpcy5yYW5nZTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBzdHlsZSA9IHRoaXMua2V5RGF0YS5zdHlsZSxcclxuICAgICAgICBub2RlcyA9IHNlbGVjdGlvbi5ub2RlcyxcclxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgfHwgdGhpcy5jcmVhdGVXcmFwcGVycyhzdHlsZSwgbiksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbGFzdEluZGV4ID0gbiAtIDEsXHJcbiAgICAgICAgbm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgICAgaWYgKCFpKSByYW5nZS5zZXRTdGFydChub2RlLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuXHJcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcnNbaV0pO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh3cmFwcGVyc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKHRoaXMua2V5RGF0YS5ib29rbWFyaykgdGhpcy5tYXJrZXIuc2V0Qm9va21hcmsodGhpcywgZmFsc2UpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkgdGhpcy5kZXNjcmliZSgpO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJDbGlja0xpc3RlbmVycygpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuICByZWdpc3RlckNsaWNrTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgZm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrZXIucHJveHkodGhpcywgdGhpcy5vbkNsaWNrKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNsaWNrKGUpIHtcclxuICAgIGxldCBldmVudDtcclxuICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICBldmVudCA9ICdjbGlja2VkOm1hcmsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlICsgJ18wJztcclxuICAgICAgZXZlbnQgPSAnYWN0aXZhdGVkOm1hcmsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXJrZXIuZW1pdChldmVudCwge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgYm9va21hcms6ICEhdGhpcy5rZXlEYXRhLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiAhIXRoaXMua2V5RGF0YS5ub3RlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVmaW5lUG9zaXRpb24obiwgaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgbGV0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIG4gPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogd3JhcHBlcnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGZpcnN0V3JhcHBlciA9IHdyYXBwZXJzWzBdO1xyXG4gICAgY29uc3QgbGFzdFdyYXBwZXIgPSB3cmFwcGVyc1tuXTtcclxuICAgIGNvbnN0IGZpcnN0UGFyZW50ID0gZmlyc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBsYXN0UGFyZW50ID0gbGFzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGxldCBhbmNob3JQcmV2LCBmb2N1c1ByZXY7XHJcblxyXG4gICAgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQoZmlyc3RQYXJlbnQsIGZpcnN0V3JhcHBlciwgdHJ1ZSkgLSAxO1xyXG4gICAgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChsYXN0UGFyZW50LCBsYXN0V3JhcHBlciwgdHJ1ZSk7XHJcblxyXG4gICAgYW5jaG9yUHJldiA9IGZpcnN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBmb2N1c1ByZXYgPSBsYXN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcblxyXG4gICAgaWYgKGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5ub2RlVHlwZSA9PT0gMSkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gKz0gMTtcclxuICAgIGlmICghZm9jdXNQcmV2IHx8IGZvY3VzUHJldi5ub2RlVHlwZSA9PT0gMyB8fCBmaXJzdFBhcmVudCA9PT0gbGFzdFBhcmVudCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiAtPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA8IDApIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gMDtcclxuICAgIGlmICh0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgaWYgKGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgICAgdGhpcy5zdGFydE9mZnNldCA9IGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5kYXRhID8gYW5jaG9yUHJldi5kYXRhLmxlbmd0aCA6IDA7XHJcbiAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdGhpcy5zaW1wbGUgPyB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5rZXlEYXRhLnRleHQubGVuZ3RoIDogdGhpcy5lbmRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbih1bmRlZmluZWQsIHRydWUpXHJcbiAgICAgICAgLmRlc2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cdHVuZG8oKSB7XHJcblx0XHRsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuXHRcdFx0XHR3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMsXHJcblx0XHRcdFx0dyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuXHRcdFx0XHRjb250YWluZXIsIHdyYXBwZXI7XHJcblxyXG5cdFx0d2hpbGUgKHctLSkge1xyXG5cdFx0XHRjb250YWluZXIgPSBjb250YWluZXJzW3ddO1xyXG5cdFx0XHR3cmFwcGVyID0gd3JhcHBlcnNbd107XHJcblx0XHRcdGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcclxuXHRcdFx0Y29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHJlZG8oKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChjb250YWluZXJzWzBdLmNoaWxkTm9kZXNbdGhpcy5hbmNob3JOb2RlUG9zaXRpb25dLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV0uY2hpbGROb2Rlc1t0aGlzLmZvY3VzTm9kZVBvc2l0aW9uXSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24uY29sbGVjdE5vZGVzKCk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKCk7XHJcblx0fVxyXG5cdHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgaW5jbHVkaW5nVGV4dE5vZGVzKSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdGxldCBjaGlsZHJlbiA9IGluY2x1ZGluZ1RleHROb2RlcyB8fCBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0XHRcdGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHRjcmVhdGVXcmFwcGVycyhzdHlsZSwgbnVtYmVyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICB3cmFwcGVyO1xyXG5cclxuXHRcdGZvciAoIDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcblx0XHRcdHdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0Jyk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UoLzsvZywgJyFpbXBvcnRhbnQ7JykpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcsIHRoaXMuaWQgKyAnXycgKyBpKTtcclxuICAgICAgLy93cmFwcGVyLnNldEF0dHJpYnV0ZSgnY29udGV4dG1lbnUnLCAndGV4dG1hcmtlci1jdG0nKTtcclxuXHRcdFx0d3JhcHBlcnMucHVzaCh3cmFwcGVyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3cmFwcGVycztcclxuXHR9XHJcbiAgZGVzY3JpYmUoKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XHJcblx0XHRjb25zdCBlbmQgPSByYW5nZS5lbmRDb250YWluZXI7XHJcblx0XHRjb25zdCBzaW5nbGVOb2RlID0gdGhpcy5zaW1wbGU7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLndyYXBwZXJzWzBdLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBwYXJlbnRJc1RNID0gcGFyZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG5cdFx0Y29uc3QgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBncmFuZGdyYW1wYSA9IGdyYW1wYS5wYXJlbnROb2RlIHx8IDA7XHJcblx0XHRjb25zdCBmVE5QID0gdGhpcy5hbmNob3JOb2RlUG9zaXRpb247XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG5cdFx0XHRvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG5cdFx0XHRuMTogcGFyZW50SXNUTSA/ICdUTScgOiBwYXJlbnQubm9kZU5hbWUsXHJcblx0XHRcdHAxOiBmVE5QLFxyXG5cdFx0XHRuMjogZ3JhbXBhLm5vZGVOYW1lLFxyXG5cdFx0XHRwMjogdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSxcclxuXHRcdFx0cDM6IGdyYW5kZ3JhbXBhID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLCBncmFtcGEpIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRwNDogZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYS5wYXJlbnROb2RlLCBncmFuZGdyYW1wYSkgOiB1bmRlZmluZWRcclxuXHRcdH07XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG5cdH1cclxuICBkZXNjcmliZV9pbW11dCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgZW5kUG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGxldCBzdGFydCA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGVuZCA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBib2R5KSB7XHJcbiAgICAgIHN0YXJ0UG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoc3RhcnQucGFyZW50Tm9kZSwgc3RhcnQpKTtcclxuICAgICAgc3RhcnQgPSBzdGFydC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGVuZCAhPT0gYm9keSkge1xyXG4gICAgICBlbmRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChlbmQucGFyZW50Tm9kZSwgZW5kKSk7XHJcbiAgICAgIGVuZCA9IGVuZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgcDogc3RhcnRQb3NpdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBlOiB7XHJcbiAgICAgICAgbzogdGhpcy5lbmRPZmZzZXQsXHJcbiAgICAgICAgcDogZW5kUG9zaXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrZXItc2V0dGluZ3MnOiAncmVjcmVhdGUnLFxyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBhcHBlbmRlZDogZmFsc2UsXHJcbiAgaGVpZ2h0OiAwLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICB9LFxyXG5cclxuICByZWNyZWF0ZSgpIHtcclxuICAgIHRoaXMucmVtb3ZlKCkudXBkYXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICB9LFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ3BvcHVwJztcclxuICAgICAgdGhpcy5tYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXAnKTtcclxuICAgIGNvbnN0IGJnQ29sb3JSZWdFeHAgPSAvYmFja2dyb3VuZC1jb2xvcjooI1thLWYwLTldezZ9KS87XHJcbiAgICBsZXQgYmdDb2xvciwgY29sb3JCdG47XHJcbiAgICBmb3IgKGxldCBtIGluIHRoaXMubWFya2Vycykge1xyXG4gICAgICBiZ0NvbG9yID0gdGhpcy5tYXJrZXJzW21dLnN0eWxlLm1hdGNoKGJnQ29sb3JSZWdFeHApO1xyXG4gICAgICBpZiAoYmdDb2xvcikge1xyXG4gICAgICAgIGNvbG9yQnRuID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXBjb2xvcicpO1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGNvbG9yQnRuKTtcclxuICAgICAgICBjb2xvckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gYmdDb2xvci5wb3AoKTtcclxuICAgICAgICBjb2xvckJ0bi5pZCA9ICd0bXBvcHVwY29sb3ItLScgKyBtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5hcHBlbmRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICBzaG93KCkge1xyXG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBwb3B1cC5zdHlsZTtcclxuICAgIGxldCBwb3B1cEhlaWdodDtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNlZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0aW9uUG9zaXRpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IHNlbGVjdGlvblBvc2l0aW9uLnRvcCAtIHNlbGVjdGlvblBvc2l0aW9uLmhlaWdodCArIHdpbmRvdy5zY3JvbGxZICsgJ3B4JztcclxuICAgICAgc3R5bGUubGVmdCA9IHNlbGVjdGlvblBvc2l0aW9uLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCArICdweCc7XHJcblxyXG4gICAgICBwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IE1hdGgubWF4KDAsIHBhcnNlSW50KHN0eWxlLnRvcCkgLSBwb3B1cEhlaWdodCkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0KSAhPT0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSArIHBvcHVwSGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWlnaHQgPSBwb3B1cEhlaWdodDtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKCFzZWxlY3RlZCkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTW91c2Vkb3duKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSAnVE1QT1BVUENPTE9SJykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJywgZWwuaWQuc3BsaXQoJy0tJykucG9wKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLIGZyb20gJy4vbWFyay1pdGVtJ1xyXG5pbXBvcnQgX0JPT0tNQVJLIGZyb20gJy4vYm9va21hcmsnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG5cdFx0RU5WOiB7XHJcblx0XHRcdCdzZXQ6ZW50cmllcyc6ICd1cGRhdGVJRCcsXHJcblx0XHRcdCdwcmVzc2VkOm1hcmtlci1rZXknOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAncHJlc3NlZDpob3RrZXknOiAnb25Ib3RrZXknLFxyXG4gICAgICAnY2xpY2tlZDpwb3B1cC1tYXJrZXInOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnc2VsZWN0aW9uLWVuZCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdyZWNyZWF0ZScsXHJcbiAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdjdHg6LWInOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAnY3R4OmQnOiAncmVtb3ZlJyxcclxuICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ2N0eDpuJzogJ2FkZE5vdGUnLFxyXG4gICAgICAnY3R4OmMnOiAnY29weScsXHJcbiAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J2NoYW5nZWQ6bm90ZS1jb2xvcic6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgJ2NoYW5nZWQ6bm90ZS1zaXplJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyayc6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JzogJ2ltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJzogJ3NhdmUnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAncmVzdG9yZXI6cmV0cnktcmVzdG9yYXRpb24nOiAncmVzdW1lJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbyc6ICd1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbyc6ICdyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weSc6ICdjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAnc2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnOiAnb25IYXNoQ2hhbmdlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2VsZWN0aW9uOiBudWxsLFxyXG5cdGRvbmU6IFtdLFxyXG5cdHVuZG9uZTogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya3M6IFtdLFxyXG5cdHZpc3VhbGx5T3JkZXJlZE1hcmtJRHM6IFtdLFxyXG4gIGJvb2ttYXJrOiBudWxsLFxyXG4gIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRpZGNvdW50OiAwLFxyXG5cdG1hcmtTY3JvbGxQb3M6IC0xLFxyXG5cclxuICB1cGRhdGVJRChlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBsID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgY29uc3QgaWRzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcblxyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcblxyXG4gICAgICBpZiAoIWxvY2tlZCAmJiBlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRjb3VudCA9IGVudHJ5LmlkY291bnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1hcmtzID0gKGVudHJ5Lm1hcmtzIHx8IFtdKS5jb25jYXQoZW50cnkubG9zdCB8fCBbXSksXHJcbiAgICAgICAgICAgIGQgPSBtYXJrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICB3aGlsZSAoZC0tKSB7XHJcbiAgICAgICAgICAgIGlkcy5wdXNoKG1hcmtzW2RdLmlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaWRjb3VudCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGlkcyk7XHJcbiAgfSxcclxuXHRtYXJrKGtleSwgZGF0YSwgaW1tdXQpIHtcclxuXHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IG5ldyBfTUFSSyh0aGlzLCBrZXksIGRhdGEsIGltbXV0KS5jcmVhdGUoKTtcclxuXHJcbiAgICBpZiAoZGF0YS5hdXRvbm90ZSkgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIG1hcmssIGRhdGEuYXV0b25vdGUpO1xyXG5cclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcblx0dW5kbyhub0F1dG9zYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lO1xyXG5cclxuXHRcdGlmIChkb25lLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lLnBvcCgpO1xyXG4gICAgICBjb25zdCBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICB0aGlzLnVuZG9uZS5wdXNoKG1hcmsudW5kbygpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmJvb2ttYXJrKSB0aGlzLnVuZG9Cb29rbWFyaygpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0fSxcclxuXHRyZWRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHVuZG9uZSA9IHRoaXMudW5kb25lO1xyXG5cclxuXHRcdGlmICh1bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgIHRoaXMuZG9uZS5wdXNoKG1hcmsucmVkbygpKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIFttYXJrXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0fSxcclxuICBjdXRPdXQoaSkge1xyXG4gICAgbGV0IG1hcmtlciA9IHRoaXMsXHJcbiAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgdG9CZVJlbW92ZWQgPSBbaV0sXHJcbiAgICAgICAgaW5kaWNlcyA9IFtpXSxcclxuICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGopIHtcclxuICAgICAgZm9yICh2YXIgeCA9IGogKyAxOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIubWFya3NJbnRlcnNlY3QoZG9uZVtqXSwgbWFyaykpIHtcclxuICAgICAgICAgIGlmICghdG9CZVJlbW92ZWQuaW5jbHVkZXMoeCkpIHRvQmVSZW1vdmVkLnB1c2goeCk7XHJcbiAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICB0b0JlUmVtb3ZlZC5zb3J0KCk7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3MoaW5kaWNlcy5zaGlmdCgpKTtcclxuICAgIH1cclxuICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgd2hpbGUgKHRvQmVSZW1vdmVkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmRvbmUuc3BsaWNlKHRvQmVSZW1vdmVkLnBvcCgpLCAxKVswXS51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzbWFsbGVzdElEO1xyXG4gIH0sXHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGlkID0gaWQgPyBpZCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcbiAgICBpZiAoIWlkKSByZXR1cm4gdGhpcy51bmRvKCk7XHJcblxyXG4gICAgbGV0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQuc3BsaXQoJ18nKVswXSksXHJcbiAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgcG9zaXRpb24gPSBkb25lLmluZGV4T2YobWFyayksXHJcbiAgICAgICAgc21hbGxlc3RJRCwgaTtcclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT09IGwgLSAxKSB7XHJcbiAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLnVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBzbWFsbGVzdElEID0gdGhpcy5jdXRPdXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpID0gdGhpcy51bmRvbmUubGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy51bmRvbmUubGVuZ3RoKSB0aGlzLnJlZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGktLSkgdGhpcy51bmRvKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWRbMF0pO1xyXG4gIH0sXHJcbiAgcmVzdW1lKGFyZywgb3B0aW9ucykge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKVxyXG4gICAgICAuZm9yRWFjaChoaWdobGlnaHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhpZ2hsaWdodC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGlnaGxpZ2h0LnRleHRDb250ZW50KSwgaGlnaGxpZ2h0KTtcclxuICAgICAgICBjb250YWluZXIubm9ybWFsaXplKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy51bmRvbmUgPSBbXTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBbXTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IFtdO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSAtMTtcclxuXHJcbiAgICBjb25zdCBlbnRyeSA9ICFhcmcgJiYgX1NUT1JFLm5hbWUgJiYgX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdID8gX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdIDogbnVsbDtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ3Jlc3VtZWQ6bWFya2VycycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGltbXV0KGltbXV0YWJsZSkge1xyXG4gICAgdGhpcy5pc0ltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IHRydWU7XHJcbiAgICBfU1RPUkUuaW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gIH0sXHJcbiAgc2F2ZSgpIHtcclxuICAgIGNvbnN0IGlmcmFtZSA9IF9TVE9SRS5pZnJhbWU7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICBpZiAoIWxvY2tlZCAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoJ25hbWU6ZW50cnk/JykudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICBfU1RPUkUubmFtZSA9IHdpbmRvdy5wcm9tcHQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2UnLCBzdWIpKTtcclxuICAgICAgICAgICAgICBpZiAoX1NUT1JFLm5hbWUpIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgY29uZmlybWVkID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChpZnJhbWUpIGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpKTtcclxuICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHR9LFxyXG4gIGF1dG9zYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgaWYgKGF1dG9zYXZlKSB0aGlzLnNhdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ3Vuc2F2ZWQtY2hhbmdlcycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjb3B5KGdyYW50ZWQpIHtcclxuICAgIGlmIChfU1RPUkUudXJsLnNlYXJjaCgvXmh0dHBzLykgPT09IC0xKSB7XHJcbiAgICAgIGFsZXJ0KGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2NvcHlfaHR0cHNvbmx5JykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZ3JhbnRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgYWxlcnQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfY29weV9ub3Blcm1pc3Npb24nKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghbmF2aWdhdG9yLmNsaXBib2FyZCB8fCAhbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQpIHtcclxuICAgICAgYWxlcnQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfY29weV9ub3N1cHBvcnQnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5maW5kTWFyaygpO1xyXG4gICAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuICAgICAgY29uc3QgcmFuZ2UgPSBtYXJrLnJhbmdlO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBtYXJrLnNlbGVjdGlvbi5zZWxmO1xyXG4gICAgICBjb25zdCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnM7XHJcblxyXG4gICAgICByYW5nZS5zZXRTdGFydCh3cmFwcGVyc1swXSwgMCk7XHJcbiAgICAgIHJhbmdlLnNldEVuZCh3cmFwcGVyc1t3cmFwcGVycy5sZW5ndGggLSAxXSwgMSk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGlvbi50b1N0cmluZygpLnRyaW0oKS5yZXBsYWNlKC8oXFxyXFxuKXsxLH0vZywgJ1xcclxcbicpKTtcclxuICAgICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RvcmUobWFyaywgc2F2ZSwgb3JkZXIpIHtcclxuXHRcdHRoaXMuZG9uZS5wdXNoKG1hcmspO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHRpZiAob3JkZXIpIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblx0fSxcclxuICByZWNyZWF0ZShtYXJrKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcbiAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgfSxcclxuICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnY29tcGxldGVkOnJlc3RvcmF0aW9uLXByb2Nlc3MnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoX1NUT1JFLm5hbWUgPT09IG1hcmsua2V5RGF0YS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvTWFyayhtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3J0QnlJZCgpO1xyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5yZWRlc2NyaWJpbmcpIHtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnY29tcGxldGVkOnJlc3RvcmF0aW9uLXByb2Nlc3MnKTtcclxuICB9LFxyXG4gIGFkZE5vdGUoaWQpIHtcclxuICAgIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCB0aGlzLmZpbmRNYXJrKGlkKSk7XHJcbiAgfSxcclxuICBzYXZlTm90ZShpZCkge1xyXG4gICAgaWYgKCFfU1RPUkUubG9ja2VkKSByZXR1cm4gdGhpcy5hdXRvc2F2ZSgpO1xyXG5cclxuICAgIGNvbnN0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQpLmtleURhdGE7XHJcbiAgICBjb25zdCBzeW5jZWQgPSB0eXBlb2YgbWFyay5zeW5jZWQgPT09ICdib29sZWFuJyA/IG1hcmsuc3luY2VkIDogX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICBtYXJrczogW21hcmtdLFxyXG4gICAgICBuYW1lOiBtYXJrLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSksXHJcbiAgICAgIHN5bmNlZFxyXG4gICAgfTtcclxuICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGdvdG9NYXJrKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtFbGVtZW50cyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3M7XHJcbiAgICBsZXQgZWwsIHBvcywgaWQ7XHJcbiAgICBpZiAobWFyayB8fCBtYXJrID09PSAwKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSBtYXJrICsgMTtcclxuICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1ttYXJrXTtcclxuICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG4gICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQ9XCInICsgaWQgKyAnXzBcIl0nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9zID0gdGhpcy5tYXJrU2Nyb2xsUG9zO1xyXG4gICAgICBlbCA9IG1hcmtFbGVtZW50c1twb3NdO1xyXG4gICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuXHJcblx0XHRpZiAoIW1hcmsgfHwgdHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB0aGlzLmdldEJ5SWQoaWQpLm9uQ2xpY2soaWQpO1xyXG4gICAgdGhpcy5pbmRpY2F0ZU1hcmsoaWQpO1xyXG4gIH0sXHJcblx0Z290b05leHRNYXJrKGRpcikge1xyXG5cdFx0Y29uc3QgbCA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubGVuZ3RoO1xyXG5cclxuXHRcdHRoaXMubWFya1Njcm9sbFBvcyArPSBkaXI7XHJcblxyXG5cdFx0aWYgKHRoaXMubWFya1Njcm9sbFBvcyA8IDApIHRoaXMubWFya1Njcm9sbFBvcyA9IGwgLSAxO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5tYXJrU2Nyb2xsUG9zID49IGwpIHRoaXMubWFya1Njcm9sbFBvcyA9IDA7XHJcblxyXG5cdFx0dGhpcy5nb3RvTWFyaygpO1xyXG5cdH0sXHJcbiAgaW5kaWNhdGVNYXJrKGlkKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpXHJcbiAgICAgIC5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgY29uc3QgdG1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZF49XCInICsgaWQgKyAnX1wiXScpKTtcclxuXHJcbiAgICB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSksIDIwMDApO1xyXG4gIH0sXHJcbiAgc2V0Qm9va21hcmsobSwgc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrLFxyXG4gICAgICAgIG1hcmsgPSB0aGlzLmZpbmRNYXJrKG0pO1xyXG5cclxuICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChib29rbWFyaykge1xyXG4gICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib29rbWFyayA9IG5ldyBfQk9PS01BUksoKS5zZXQobWFyayk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdhZGRlZDpib29rbWFyaycpO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICB1bmRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgaWYgKCFib29rbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IGJvb2ttYXJrO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoYm9va21hcmspIGJvb2ttYXJrLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkLCBwb3MpIHtcclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lLFxyXG5cdFx0XHQgIGQgPSBkb25lLmxlbmd0aCxcclxuXHRcdFx0ICBtYXJrO1xyXG5cclxuXHRcdHdoaWxlIChkLS0pIHtcclxuXHRcdFx0bWFyayA9IGRvbmVbZF07XHJcblxyXG5cdFx0XHRpZiAobWFyay5rZXlEYXRhLmlkID09IGlkKVxyXG5cdFx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG1hcmssIHBvc2l0aW9uOiBkIH0gOiBtYXJrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbnVsbCwgcG9zaXRpb246IG51bGwgfSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0ZmluZE1hcmsoeCkge1xyXG5cdFx0eCA9IHggPyB4IDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuXHRcdGxldCBtYXJrID0gIXggP1xyXG5cdFx0XHR0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdIDpcclxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ3N0cmluZycgP1xyXG5cdFx0XHR0aGlzLmdldEJ5SWQoeC5zcGxpdCgnXycpWzBdKSA6XHJcblx0XHRcdHg7XHJcblx0XHRyZXR1cm4gbWFyaztcclxuXHR9LFxyXG4gIHNvcnRCeUlkKCkge1xyXG4gICAgdGhpcy5kb25lLnNvcnQoKG1hcmsxLCBtYXJrMikgPT4gbWFyazEuaWQgLSBtYXJrMi5pZCk7XHJcbiAgfSxcclxuXHRvcmRlck1hcmtzVmlzdWFsbHkoKSB7XHJcblx0XHR0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZCQ9XCJfMFwiXScpKS5zb3J0KChtMSwgbTIpID0+IHtcclxuXHRcdFx0bGV0IGJiMSA9IG0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0YmIyID0gbTIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHR0b3AxID0gYmIxLnRvcCxcclxuXHRcdFx0XHRcdHRvcDIgPSBiYjIudG9wO1xyXG5cclxuXHRcdFx0aWYgKHRvcDEgPCB0b3AyKSByZXR1cm4gLTE7XHJcblx0XHRcdGVsc2UgaWYgKHRvcDIgPCB0b3AxKSByZXR1cm4gMTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGJiMS5sZWZ0IDwgYmIyLmxlZnQpIHJldHVybiAtMTtcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLm1hcChtYXJrID0+IHBhcnNlSW50KG1hcmsuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKTtcclxuICAgIGlmICghX1NUT1JFLmlmcmFtZSkgdGhpcy5lbWl0KCd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJywgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzKTtcclxuXHR9LFxyXG4gIG1hcmtzSW50ZXJzZWN0KG1hcmsxLCBtYXJrMikge1xyXG5cdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICBpZDEgPSBtYXJrMS5pZCxcclxuICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICB3MiwgdG1zLCBsO1xyXG5cclxuICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKHcyLS0pIHtcclxuICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG4gIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0bGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuXHJcblx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGtleSA9IGU7XHJcblx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGtleSA9IGtleSB8fCAnbSc7XHJcblx0XHR9XHJcblxyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldykge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6ICEhc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBfU1RPUkUuaW1tdXQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgfSk7XHJcblx0fSxcclxuICBvbkhvdGtleShrZXkpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHNlbGYucmVkbygpOyBicmVhaztcclxuICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93dXAnOiBzZWxmLmdvdG9OZXh0TWFyaygtMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhcnJvd2Rvd24nOiBzZWxmLmdvdG9OZXh0TWFyaygxKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYyc6IHNlbGYuY29weSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnbic6IHNlbGYuYWRkTm90ZSgpOyBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRyZXRyaWV2ZUVudHJ5KCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgY29uc3QgbmFtZSA9IF9TVE9SRS5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0ZW50cnkubGFzdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0ZW50cnkuY291bnQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcblx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICBpZiAoaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcbiAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgaXNOZXcgfHwgIWVudHJ5Lm5hbWUgPyBuYW1lIDogZW50cnkubmFtZTtcclxuXHJcblx0XHRyZXR1cm4gZW50cnk7XHJcblx0fSxcclxuICBjb2xsZWN0TWFya3MoKSB7XHJcbiAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICBjb25zdCBtYXJrcyA9IFtdO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgIH1cclxuXHJcbiAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdGtEID0gZG9uZVttXS5rZXlEYXRhO1xyXG4gICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdH1cclxuICAgIHJldHVybiBtYXJrcztcclxuICB9LFxyXG4gIG9uSGFzaENoYW5nZSgpIHtcclxuICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZnMgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmZzID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5mcyB8fCBfU1RPUkUubm90ZUZvbnRTaXplO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZU5vdGVFbGVtZW50KCkge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZScpO1xyXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWhlYWRlcicpO1xyXG4gICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlYWN0aW9ucycpO1xyXG4gICAgICBjb25zdCBkZWwgPSB0aGlzLmRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWRlbGV0ZScpO1xyXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLm1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZW1pbmltaXplJyk7XHJcbiAgICAgIGNvbnN0IGdlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjdXN0b21pemUnKTtcclxuICAgICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMucGFsZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXBhbGV0dGUnKTtcclxuICAgICAgY29uc3QgcCA9IHRoaXMudGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0O1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yIHx8IF9TVE9SRS5ub3RlQ29sb3I7XHJcbiAgICAgIF9TVE9SRS5ub3RlQ29sb3IgPSBjb2xvcjtcclxuICAgICAgY29uc3QgZGVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgICAgY29uc3QgbWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDEzKSk7XHJcbiAgICAgIGNvbnN0IGdlYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDI2OTkpKTtcclxuXHJcbiAgICAgIFsnZ3JlZW4nLCAnd2hpdGUnLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnLCAncHVycGxlJywgJ2JsdWUnLCAndHVycXVvaXNlJ10uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBsZXQgY29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjb2xvcicpO1xyXG4gICAgICAgIGNvbG9yLmNsYXNzTmFtZSA9ICd0bW5vdGVjb2xvci0tJyArIGM7XHJcbiAgICAgICAgY29sb3Iuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgYyk7XHJcbiAgICAgICAgcGFsZXR0ZS5hcHBlbmRDaGlsZChjb2xvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0tbm90ZScsIHRydWUpO1xyXG4gICAgICBkZWwuYXBwZW5kQ2hpbGQoZGVsVGV4dCk7XHJcbiAgICAgIG1pbi5hcHBlbmRDaGlsZChtaW5UZXh0KTtcclxuICAgICAgZ2Vhci5hcHBlbmRDaGlsZChnZWFyVGV4dCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChnZWFyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKG1pbik7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICBpZiAodGV4dCkgcC52YWx1ZSA9IHRleHQ7XHJcblxyXG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHRoaXMuYXR0ZW1wdFVwZGF0ZShlLCBlLnRhcmdldCwgdHJ1ZSksIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0gJyc7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBhdHRlbXB0VXBkYXRlKGUsIGVsLCBmb3JjZSkge1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgdGhpcy5oaWRlKCk7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyBgd2lkdGg6JHt0aGlzLnNpemUud307aGVpZ2h0OiR7dGhpcy5zaXplLmh9O2AgOiAnJztcclxuICAgICAgY29uc3QgZm9udFNpemUgPSBgZm9udC1zaXplOiAke3RoaXMuZnN9cHggIWltcG9ydGFudDtgO1xyXG5cclxuICAgICAgQk9EWS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZGlzcGxheTpibG9jazt0b3A6JHt0b3B9cHg7bGVmdDoke2xlZnR9cHg7YCk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAoc2l6ZSArIGZvbnRTaXplKSk7XHJcbiAgICAgIHRoaXMuY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy50ZXh0RWxlbWVudC5mb2N1cygpO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdhZGQ6bm90ZSc6ICdhZGRBbmRTaG93JyxcclxuICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdyZW1vdmVOb3RlU3RvcmFnZScsXHJcbiAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAncmVtb3ZlZDptYXJrJzogJ3JlbW92ZU5vdGUnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0eWxlJyxcclxuICAgICAgJ3N0YXJ0OmRyYWcnOiAnc3RhcnREcmFnZ2luZ05vdGUnLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZE5vdGVzU3RhdGUnLFxyXG4gICAgICAnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucyc6ICdyZXBvcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbm90ZXM6IHt9LFxyXG4gIHRvZ2dsZTogbnVsbCxcclxuICBkcmFnSGFuZGxlcjogbnVsbCxcclxuICBkcmFnU3RvcEhhbmRsZXI6IG51bGwsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XHJcbiAgfSxcclxuICBhZGQobWFyaywgY29sb3IpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgaWYgKG5vdGUpIHJldHVybiBub3RlO1xyXG4gICAgaWYgKCFfU1RPUkUucmVzdG9yaW5nKSB0aGlzLmVtaXQoJ2FkZGVkOm5vdGUnKTtcclxuICAgIHJldHVybiB0aGlzLm5vdGVzW21hcmsuaWRdID0gbmV3IF9OT1RFKG1hcmssIGNvbG9yKTtcclxuICB9LFxyXG4gIHJlc3RvcmUobWFya3MpIHtcclxuICAgIGZvciAobGV0IG1hcmsgb2YgbWFya3MpIHtcclxuICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWFyayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGFkZEFuZFNob3cobWFyaywgY29sb3IpIHtcclxuICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlU3RvcmFnZShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSkgdGhpcy5lbWl0KCdyZW1vdmVkOmxhc3Qtbm90ZScpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgaWYgKHRoaXMubm90ZXNbaWRdKSB0aGlzLm5vdGVzW2lkXS5yZW1vdmUoKTtcclxuICB9LFxyXG4gIHRvZ2dsZUFsbCgpIHtcclxuICAgIGlmICghdGhpcy5ub3RlcykgcmV0dXJuO1xyXG4gICAgY29uc3Qgbm90ZXMgPSB0aGlzLm5vdGVzO1xyXG4gICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICBjb25kaXRpb24gPSBtZXRoID09PSAnaGlkZScgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgbm90ZTtcclxuICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgbm90ZSA9IG5vdGVzW25dO1xyXG4gICAgICBpZiAobm90ZS52aXNpYmxlID09PSBjb25kaXRpb24pIHtcclxuICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZVN0eWxlKCkge1xyXG4gICAgY29uc3QgYm9keUNsYXNzZXMgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MgJiYgc2V0dGluZ3MubWlzYykge1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5taXNjLm5vdGV0cmFuc3ApIGJvZHlDbGFzc2VzLmFkZCgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXcpIGJvZHlDbGFzc2VzLmFkZCgndG1ub3Rlcy0tcGxhaW4tdmlldycpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS1wbGFpbi12aWV3Jyk7XHJcbiAgICAgICAgX1NUT1JFLm5vdGVGb250U2l6ZSA9IHNldHRpbmdzLm1pc2Mubm90ZWZvbnRzaXplIHx8IDEyO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGlzRW1wdHkob2JqKSB7XHJcbiAgICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gIH0sXHJcbiAgc3RhcnREcmFnZ2luZ05vdGUobm90ZSkge1xyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyID0gKGUpID0+IHRoaXMuZW1pdERyYWdFdmVudChub3RlLCBlKTtcclxuICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICBzdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpIHtcclxuICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2RyYWdzdG9wOm5vdGUnLCBub3RlLCBlKTtcclxuICB9LFxyXG4gIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5lbWl0KCdkcmFnOm5vdGUnLCBub3RlLCBlKTtcclxuICB9LFxyXG4gIHNlbmROb3Rlc1N0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgnbm90ZXMtc3RhdGUnLCAhdGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpLCBpbmZvKTtcclxuICB9LFxyXG4gIHJlcG9ydCgpIHtcclxuICAgIHRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSB8fCB0aGlzLmVtaXQoJ2FkZGVkOm5vdGUnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgYXV0b1BhdXNlOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOnJlc3RvcmF0aW9ucyc6ICdyZW1vdmVMaXN0ZW5lcnMnLFxyXG4gICAgICAnY29tcGxldGVkOnJlc3RvcmF0aW9uLXByb2Nlc3MnOiAnYWRkTGlzdGVuZXJzJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBrZXlkb3duOiB7XHJcbiAgICAgICAgJyonOiAnZGVsZWdhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdGlvbmNoYW5nZToge1xyXG4gICAgICAgICcqJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2VsZWN0aW9uQ29sbGFwc2VkOiB0cnVlLFxyXG4gIHNoaWZ0U2Vuc2l0aXZlS2V5czogWzEzLCA0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgMTcxLCAxNzNdLFxyXG4gIGtleUNvZGVNYXA6IHtcclxuICAgICcxMyc6ICdFbnRlcicsXHJcbiAgICAnNDgnOiAnMCcsICc0OSc6ICcxJywgJzUwJzogJzInLCAnNTEnOiAnMycsICc1Mic6ICc0JyxcclxuICAgICc1Myc6ICc1JywgJzU0JzogJzYnLCAnNTUnOiAnNycsICc1Nic6ICc4JywgJzU3JzogJzknLFxyXG4gICAgJzE3MSc6ICcrJywgJzE3Myc6ICctJ1xyXG4gIH0sXHJcblxyXG4gIGlzRWRpdGFibGUoZWwpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBlbC50YWdOYW1lO1xyXG5cclxuICAgIHJldHVybiAobmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBuYW1lID09PSAnSU5QVVQnIHx8IGVsLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnKTtcclxuICB9LFxyXG4gIGRlbGVnYXRlKGUpIHtcclxuICAgIGxldCBrZXkgPSBlLmtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZSxcclxuICAgICAgICBtb2RLZXkgPSAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5KSxcclxuICAgICAgICBhcnJvd0tleXMgPSBbJ2Fycm93ZG93bicsICdhcnJvd3VwJ10sXHJcbiAgICAgICAgbG9ja2VkQWN0aW9ucyA9IFsnYicsICdzJywgJ3knLCAneicsICdkJ10sXHJcbiAgICAgICAgZnVuY3Rpb25LZXlzID0gbG9ja2VkQWN0aW9ucy5jb25jYXQoYXJyb3dLZXlzKS5jb25jYXQoWydjJywgJ24nXSksXHJcbiAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJ107XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zaGlmdFNlbnNpdGl2ZUtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIGtleSA9IHRoaXMua2V5Q29kZU1hcFtrZXlDb2RlXTtcclxuXHJcbiAgICBpZiAoIWZ1bmN0aW9uS2V5cy5pbmNsdWRlcyhrZXkpICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICBjb25zdCBpc0N1c3RvbU1hcmtlcktleSA9IGlzTWFya2VyS2V5ICYmICFkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICBpZiAoaXNDdXN0b21NYXJrZXJLZXkpIGtleSA9ICdjbSc7XHJcbiAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgIGlmICghc2V0dGluZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBpZiAoIW1vZEtleSkge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdbMV0pIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG9ydGN1dCA9IHNldHRpbmdbMF0uc3BsaXQoJy0nKTtcclxuICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgIGNvbnN0IHMyID0gc2hvcnRjdXRbMV07XHJcblxyXG4gICAgICAgIGlmICghZVtzMV0gfHwgKHMyICYmICFlW3MyXSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGlzTWFya2VyS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgncHJlc3NlZDpob3RrZXknLCBrZXkpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uQ29sbGFwc2VkID0gd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uQ29sbGFwc2VkICE9PSBzZWxlY3Rpb25Db2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNlbGVjdGlvbicsICFzZWxlY3Rpb25Db2xsYXBzZWQpO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNvbGxhcHNlZCA9IHNlbGVjdGlvbkNvbGxhcHNlZDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4uL19zdG9yZSdcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5jbGFzcyBSZXN0b3JlckJhc2UgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIHRoaXMubG9zdCA9IFtdO1xyXG4gICAgdGhpcy5mYWlsdXJlUmVwb3J0ID0ge307XHJcbiAgICB0aGlzLnJlc3RvcmVkID0gW107XHJcbiAgICB0aGlzLmFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnc3RhcnRlZDpyZXN0b3JhdGlvbicsIGVudHJ5Lm1hcmtzLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW5DaHVua3MoZGF0YSwgcHJvYywgY2IpIHtcclxuICAgIHByb2MgPSBwcm9jLmJpbmQodGhpcyk7XHJcbiAgICBjYiA9IGNiLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIHJlYygpIHtcclxuXHRcdFx0bGV0IGV4cGlyZSA9ICtuZXcgRGF0ZSgpICsgNTAwO1xyXG5cclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdHRyeSB7XHJcbiAgICAgICAgICBwcm9jKGRhdGEuc2hpZnQoKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHR9IHdoaWxlIChkYXRhLmxlbmd0aCA+IDAgJiYgZXhwaXJlID4gK25ldyBEYXRlKCkpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDApO1xyXG5cdFx0XHRlbHNlIGNiKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuICByZXBvcnQoKSB7XHJcbiAgICBsZXQgbGwgPSB0aGlzLmxvc3QubGVuZ3RoO1xyXG4gICAgaWYgKGxsKSB7XHJcbiAgICAgIHdoaWxlKGxsLS0pIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5sb3N0W2xsXS50ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCgnbG9zdDptYXJrcycsIHRoaXMuZmFpbHVyZVJlcG9ydCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJywgdGhpcy5lbnRyeS5uYW1lLCB0aGlzLnJlc3RvcmVkLCB0aGlzLmxvc3QsIHRoaXMuYXJlYSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnF1ZXVlID0gW107XHJcbiAgICB0aGlzLmNhY2hlID0gW107XHJcbiAgICB0aGlzLnBoYXNlID0gMTtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwgPSAwO1xyXG4gICAgdGhpcy5jaHVua0R1cmF0aW9uID0gNTAwO1xyXG4gICAgdGhpcy5fdGltZXIgPSArbmV3IERhdGUoKSArIHRoaXMuY2h1bmtEdXJhdGlvbjtcclxuICAgIHRoaXMub29tID0gZW50cnkubWFya3MubGVuZ3RoID09PSAxICYmIGVudHJ5Lm1hcmtzWzBdLmlkID09IDE7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGltZXIoKSB7XHJcbiAgICBjb25zdCB0aW1lciA9IHRoaXMuX3RpbWVyO1xyXG4gICAgdGhpcy5fdGltZXIgPSArbmV3IERhdGUoKSArIHRoaXMuY2h1bmtEdXJhdGlvbjtcclxuICAgIHJldHVybiB0aW1lcjtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBlbnRyeSA9IHRoaXMuZW50cnksXHJcbiAgICAgICAgbm93ID0gW10sIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIG1hcmtzID0gZW50cnkubWFya3MsXHJcbiAgICAgICAgbCA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgbWFyaztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcblxyXG4gICAgICB0aGlzLmNvbnZlcnREZXNjcmlwdGlvbihtYXJrKS5jcmVhdGVUZW1wT2JqZWN0KG1hcmspO1xyXG5cclxuICAgICAgaWYgKG1hcmsuY29uZHMubjEgPT09ICdUTScpIHBvc3Rwb25lZC5wdXNoKG1hcmspO1xyXG4gICAgICBlbHNlIG5vdy5wdXNoKG1hcmspO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucXVldWUucHVzaChub3cpO1xyXG5cclxuICAgIGZvciAoaSA9IDAsIGwgPSBwb3N0cG9uZWQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbcG9zdHBvbmVkW2ldXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXN0b3JlKCk7XHJcbiAgfVxyXG4gIGNvbnZlcnREZXNjcmlwdGlvbihtYXJrKSB7XHJcbiAgICBpZiAodHlwZW9mIG1hcmsuY29uZHMubyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbGV0IGNvbmRzID0gbWFyay5jb25kcyxcclxuICAgICAgICAgIGNvbnZlcnRlZENvbmRzID0ge1xyXG4gICAgICAgICAgICBvOiBjb25kcy5zdGFydE9mZnNldCxcclxuICAgICAgICAgICAgbjE6IGNvbmRzLmZpcnN0Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIG4yOiBjb25kcy5maXJzdFBhcmVudE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBwMTogY29uZHMuZmlyc3RUZXh0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMjogY29uZHMuZmlyc3ROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAzOiBjb25kcy5maXJzdFBhcmVudE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDQ6IGNvbmRzLmZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uXHJcbiAgICAgICAgICB9O1xyXG4gICAgICBkZWxldGUgbWFyay5jb25kcztcclxuICAgICAgbWFyay5jb25kcyA9IGNvbnZlcnRlZENvbmRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGNyZWF0ZVRlbXBPYmplY3QobWFyaykge1xyXG4gICAgbGV0IHRleHQgPSBtYXJrLnRleHQsXHJcbiAgICAgICAgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKSxcclxuICAgICAgICBzcXVlZXplZFRleHQgPSB0aGlzLnNxdWVlemUobWFyay50ZXh0KTtcclxuXHJcbiAgICBtYXJrLnRlbXAgPSB7XHJcbiAgICAgIHRleHRMZW5ndGg6IHRleHQubGVuZ3RoLFxyXG4gICAgICB0cmltbWVkVGV4dDogdHJpbW1lZFRleHQsXHJcbiAgICAgIHRyaW1tZWRUZXh0TGVuZ3RoOiB0cmltbWVkVGV4dC5sZW5ndGgsXHJcbiAgICAgIHNxdWVlemVkVGV4dDogc3F1ZWV6ZWRUZXh0LFxyXG4gICAgICBzcXVlZXplZFRleHRMZW5ndGg6IHNxdWVlemVkVGV4dC5sZW5ndGgsXHJcbiAgICAgIHBvc3NpYmxlUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZHM6IHt9LFxyXG4gICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0czogW11cclxuICAgIH07XHJcblxyXG4gICAgbWFyay5zeW5jZWQgPSB0aGlzLmVudHJ5LnN5bmNlZDtcclxuICB9XHJcbiAgcmVzdG9yZSgpIHtcclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAyKSB0aGlzLnNvcnRRdWV1ZUJ5SWQoKTtcclxuXHJcbiAgICBsZXQgbWFya3MgPSB0aGlzLm1hcmtzID0gdGhpcy5xdWV1ZS5zaGlmdCgpLFxyXG4gICAgICAgIGxlbmd0aCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMDtcclxuXHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuXHJcbiAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0Qm9keVNlbGVjdGlvbih3aW5kb3cuZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgIC5nZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGhhc2UgPT09IDEgJiYgbGVuZ3RoID4gMSlcclxuICAgICAgICAgIHRoaXMucG9zdHBvbmVPdmVybGFwcGluZ3MoKTtcclxuXHJcbiAgICAgIHRoaXMuZmluZFBvc3NpYmxlRXh0cmVtYSgpXHJcbiAgICAgICAgICAucnVsZU91dE11bHRpcGxlcygpXHJcbiAgICAgICAgICAucmVzdG9yZVJhbmdlcygpO1xyXG5cclxuICAgICAgdGhpcy5waGFzZSsrO1xyXG5cclxuICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPCArbmV3IERhdGUoKSkgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc3RvcmUoKSwgMCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlc3RvcmUoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHRoaXMucmVwb3J0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHRoaXMucmVwb3J0KCk7XHJcbiAgfVxyXG4gIHNvcnRRdWV1ZUJ5SWQoKSB7XHJcbiAgICBsZXQgbWFya3MgPSB0aGlzLnF1ZXVlLFxyXG4gICAgICAgIGwgPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgdGVtcCA9IFtdLFxyXG4gICAgICAgIHJlcyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG1hcmssIHQ7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBpZiAoIW1hcmtzW2xdLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXVswXTtcclxuICAgICAgdGVtcFttYXJrLmlkXSA9IG1hcms7XHJcbiAgICB9XHJcbiAgICB0aGlzLnF1ZXVlID0gW107XHJcblxyXG4gICAgZm9yICh0ID0gdGVtcC5sZW5ndGg7IGkgPCB0OyBpKyspIHtcclxuICAgICAgaWYgKHRlbXBbaV0pIHRoaXMucXVldWUucHVzaChbdGVtcFtpXV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGdldFRleHRQb3NpdGlvbnMobWFya3MsIGwpIHtcclxuICAgIGxldCB0cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQsXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdLFxyXG4gICAgICAgIGVuZFBvc2l0aW9ucyA9IFtdLFxyXG4gICAgICAgIG1hcmssIG1hcmtUZW1wLCBzcXVlZXplZFRleHQsIHNxdWVlemVkVGV4dExlbmd0aCwgcCwgZW5kUG9zaXRpb247XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBwID0gdW5kZWZpbmVkO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG5cclxuICAgICAgaWYgKCFtYXJrVGVtcCkge1xyXG4gICAgICAgIG1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCkge1xyXG5cclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5jb25jYXQobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucyA9IGVuZFBvc2l0aW9ucy5jb25jYXQobWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0O1xyXG4gICAgICAgIHNxdWVlemVkVGV4dExlbmd0aCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dExlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHAgIT09IC0xKSB7XHJcbiAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBwID0gLTE7XHJcbiAgICAgICAgICBwID0gdHJpbW1lZFNlbGVjdGlvblRleHQuaW5kZXhPZihzcXVlZXplZFRleHQsIHAgKyAxKTtcclxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gcCArIHNxdWVlemVkVGV4dExlbmd0aDtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIGVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zLnBvcCgpO1xyXG5cclxuICAgICAgICBpZiAoIW1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8xJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMoYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyk7XHJcbiAgICB0aGlzLm1heFBvc2l0aW9uID0gTWF0aC5tYXguYXBwbHkobnVsbCwgZW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMocG9zaXRpb25zKSB7XHJcbiAgICBsZXQgbCA9IHBvc2l0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgdGVtcCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHBvcywgc3RhcnQsIHQ7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBwb3MgPSBwb3NpdGlvbnNbbF07XHJcbiAgICAgIHN0YXJ0ID0gcG9zWzBdO1xyXG5cclxuICAgICAgaWYgKHRlbXBbc3RhcnRdKSB0ZW1wLnNwbGljZShzdGFydCArIDEsIDAsIHBvcyk7XHJcbiAgICAgIGVsc2UgdGVtcFtzdGFydF0gPSBwb3M7XHJcbiAgICB9XHJcbiAgICB0ID0gdGVtcC5sZW5ndGg7XHJcbiAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IHQ7IGkrKylcclxuICAgICAgaWYgKHRlbXBbaV0pIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKHRlbXBbaV0pO1xyXG4gIH1cclxuICBwb3N0cG9uZU92ZXJsYXBwaW5ncygpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgcG9zMSwgcG9zMiwgaSwgbTEsIG0yLCBpZDEsIGlkMiwgaWQ7XHJcblxyXG4gICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgIHdoaWxlIChwLS0gPiAxKSB7XHJcbiAgICAgICAgcG9zMSA9IHBvc2l0aW9uc1twIC0gMV07XHJcbiAgICAgICAgcG9zMiA9IHBvc2l0aW9uc1twXTtcclxuICAgICAgICBtMSA9IHBvczFbMl07XHJcbiAgICAgICAgbTIgPSBwb3MyWzJdO1xyXG4gICAgICAgIGlkMSA9IG0xLmlkO1xyXG4gICAgICAgIGlkMiA9IG0yLmlkO1xyXG5cclxuICAgICAgICBpZiAoaWQxID09PSBpZDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocG9zMVsxXSA+IHBvczJbMF0gJiYgcG9zMVswXSA8IHBvczJbMV0pIHtcclxuXHJcbiAgICAgICAgICBpZiAoaWQxIDwgaWQyKSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQyO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMik7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWQgPSBpZDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0xKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcDsgaSsrKVxyXG4gICAgICAgIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3V0T3V0Rm9yKGlkKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlKHAtLSkge1xyXG4gICAgICBpZiAocG9zaXRpb25zW3BdWzJdLmlkID09PSBpZClcclxuICAgICAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuc3BsaWNlKHAsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0cG9uZShtYXJrKSB7XHJcbiAgICBsZXQgcXVldWUgPSB0aGlzLnF1ZXVlLFxyXG4gICAgICAgIGwgPSBxdWV1ZS5sZW5ndGgsXHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBpZiAocXVldWVbbF1bMF0gPT09IG1hcmspIHtcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWFscmVhZHlJbmNsdWRlZClcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFttYXJrXSk7XHJcbiAgfVxyXG4gIGZpbmRQb3NzaWJsZUV4dHJlbWEoKSB7XHJcbiAgICBsZXQgbm9kZXMgPSB0aGlzLmJvZHlUZXh0Tm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzID8gbm9kZXMubGVuZ3RoIDogMCxcclxuICAgICAgICBpbmRpY2VzID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHBoYXNlID0gdGhpcy5waGFzZSxcclxuICAgICAgICBjYWNoZSA9IHRoaXMuY2FjaGUgPSBbXSxcclxuICAgICAgICBzYXRpc2ZpZWQgPSBbXSxcclxuICAgICAgICBpID0gMCwgY2hhcnMgPSAwLFxyXG4gICAgICAgIG5leHRTdGFydEZvdW5kLCBlbmRpbmdzSW5UaGlzTm9kZSxcclxuICAgICAgICBub2RlLCBub2Rlc1RleHQsIG5vZGVzVGV4dExlbmd0aCxcclxuICAgICAgICBtYXJrLCBkaWZmLCBsLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgZSwgZiwgaWQsIHAsIHEsIHgsIG0sXHJcbiAgICAgICAgcG9zc2libGVGb2N1c09mZnNldCwgc3RhcnRGb3VuZEZvciwgcG9zdHBvbmVkLCBoYXNFbmRpbmdzSW5UaGlzTm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIG5vZGVzVGV4dCA9IHRoaXMuc3F1ZWV6ZShub2RlLmRhdGEpO1xyXG4gICAgICBub2Rlc1RleHRMZW5ndGggPSBub2Rlc1RleHQubGVuZ3RoO1xyXG4gICAgICBjaGFycyArPSBub2Rlc1RleHRMZW5ndGg7XHJcbiAgICAgIGwgPSBpbmRpY2VzLmxlbmd0aDtcclxuICAgICAgc3RhcnRGb3VuZEZvciA9IFtdO1xyXG4gICAgICBwb3N0cG9uZWQgPSBbXTtcclxuICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBudWxsO1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBpbmRpY2VzW2xdWzBdO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uID0gaW5kaWNlc1tsXVsxXTtcclxuICAgICAgICBtYXJrID0gaW5kaWNlc1tsXVsyXTtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgfHwgW107XHJcbiAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yID0gbWFyay50ZW1wLmVuZEZvdW5kRm9yIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIGNoYXJzID4gc3RhcnRQb3NpdGlvbiAmJlxyXG4gICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGggPCBtYXJrLnRlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoaGFzRW5kaW5nc0luVGhpc05vZGUgJiYgaGFzRW5kaW5nc0luVGhpc05vZGUuaWQgPCBtYXJrLmlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkpIHtcclxuICAgICAgICAgICAgICBpZiAocGhhc2UgPT09IDEgJiYgaWQgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLnB1c2goeyBub2RlOiBub2RlLCBwb3M6IGkgfSk7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IucHVzaChzdGFydFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICBzdGFydEZvdW5kRm9yLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICAhbWFyay50ZW1wLmVuZEZvdW5kRm9yLmluY2x1ZGVzKGVuZFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgKGNoYXJzIC0gZW5kUG9zaXRpb24pID49IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChNYXRoLm1pbi5hcHBseShudWxsLCBzdGFydEZvdW5kRm9yKSA8IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zc2libGVGb2N1c09mZnNldCA9IHRoaXMuZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIGVuZFBvc2l0aW9uIC0gKGNoYXJzIC0gbm9kZXNUZXh0TGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZUZvY3VzT2Zmc2V0cy5wdXNoKHBvc3NpYmxlRm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl0gPSB7XHJcbiAgICAgICAgICAgICAgbm9kZTogbm9kZSxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IHBvc3NpYmxlRm9jdXNPZmZzZXQsXHJcbiAgICAgICAgICAgICAgcG9zOiBpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICghc2F0aXNmaWVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIGNhY2hlLnB1c2gobWFyayk7XHJcbiAgICAgICAgICAgICAgc2F0aXNmaWVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG1hcms7XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwKSBmb3IgKHggPSAwOyB4IDwgcDsgeCsrKSB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbeF0pO1xyXG5cclxuICAgICAgaWYgKGNoYXJzID4gdGhpcy5tYXhQb3NpdGlvbikgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAocGhhc2UgIT09IDEgfHwgdGhpcy5vb20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG1hcmsgPSB0aGlzLm1hcmtzW2ldO1xyXG4gICAgICAgIGlmICghc2F0aXNmaWVkLmluY2x1ZGVzKG1hcmsuaWQpKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzInKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJ1bGVPdXRNdWx0aXBsZXMoKSB7XHJcbiAgICBsZXQgY2FjaGUgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBjYWNoZS5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgcG9zc2libGVTdGFydE5vZGVzLCBwLCBub2RlLCBwYXJlbnQsIGdyYW1wYSwgZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbmRncmFtcGEsIG1hdGNoZXMsIGZhaWxlZCwgcSxcclxuICAgICAgICBwb3NzaWJsZUVuZHMsIHN0YXJ0Rm91bmRGb3IsIGNvbmRzLCBzdGFydE9mZnNldCwgdGVtcCwgdGV4dExlbmd0aCwgc3RhcnQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gY2FjaGVbaV07XHJcbiAgICAgIG1hdGNoZXMgPSBbXTtcclxuICAgICAgZmFpbGVkID0gZmFsc2U7XHJcbiAgICAgIHRlbXAgPSBtYXJrLnRlbXA7XHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlcyA9IHRlbXAucG9zc2libGVTdGFydE5vZGVzO1xyXG4gICAgICBwb3NzaWJsZUVuZHMgPSB0ZW1wLnBvc3NpYmxlRW5kcztcclxuICAgICAgc3RhcnRGb3VuZEZvciA9IHRlbXAuc3RhcnRGb3VuZEZvclxyXG4gICAgICBwID0gcG9zc2libGVTdGFydE5vZGVzLmxlbmd0aDtcclxuICAgICAgY29uZHMgPSBtYXJrLmNvbmRzO1xyXG4gICAgICBzdGFydE9mZnNldCA9IGNvbmRzLm87XHJcbiAgICAgIHRleHRMZW5ndGggPSB0ZW1wLnRleHRMZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCA+IDEpIHtcclxuICAgICAgICB3aGlsZSAocC0tKSB7XHJcbiAgICAgICAgICBub2RlID0gcG9zc2libGVTdGFydE5vZGVzW3BdLm5vZGU7XHJcbiAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlIHx8IDA7XHJcblxyXG4gICAgICAgICAgaWYgKCFncmFtcGEgfHwgY29uZHMucDMgPT09IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCkpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkgcCA9IDA7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDEpIHAgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBxID0gbWF0Y2hlcy5wb3AoKTtcclxuICAgICAgICAgICAgICBwYXJlbnQgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcV0ubm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgIGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlIHx8IDA7XHJcbiAgICAgICAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcbiAgICAgICAgICAgICAgZ3JhbmRncmFuZGdyYW1wYSA9IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFuZGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAoIWdyYW5kZ3JhbmRncmFtcGEgfHwgY29uZHMucDQgPT09IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW5kZ3JhbXBhLCBncmFuZGdyYW1wYSkpICYmXHJcbiAgICAgICAgICAgICAgICAgIChwb3NzaWJsZUVuZHNbc3RhcnRGb3VuZEZvcltxXV0ub2Zmc2V0IC0gc3RhcnRPZmZzZXQpID09PSB0ZXh0TGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgcCA9IHE7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwKSBwID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBwID0gMDtcclxuXHJcbiAgICAgIHAgPSBwIHx8IDA7XHJcblxyXG4gICAgICBzdGFydCA9IG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXNbcF07XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGUgPSBzdGFydC5ub2RlO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb24gPSBzdGFydC5wb3M7XHJcblxyXG4gICAgICB0aGlzLnNldE1hdGNoaW5nRW5kKG1hcmssIHApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNldE1hdGNoaW5nRW5kKG1hcmssIHApIHtcclxuICAgIGxldCBzdGFydFBvc2l0aW9uID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3JbcF0sXHJcbiAgICAgICAgZW5kID0gbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXTtcclxuXHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZSA9IGVuZC5ub2RlO1xyXG4gICAgbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbiA9IGVuZC5wb3M7XHJcbiAgICBtYXJrLnRlbXAuZm9jdXNPZmZzZXQgPSBlbmQub2Zmc2V0O1xyXG4gIH1cclxuICBzYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSB7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbXBhID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwLFxyXG4gICAgICAgIHN0YXJ0T2Zmc2V0ID0gZGVzY3JpcHRpb24ubyxcclxuICAgICAgICByZWxldmFudE5vZGVUZXh0ID0gbm9kZS5kYXRhLnN1YnN0cmluZyhzdGFydE9mZnNldCkudHJpbSgpLFxyXG4gICAgICAgIGwgPSByZWxldmFudE5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGVtcC50cmltbWVkVGV4dCxcclxuICAgICAgICBtID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0TGVuZ3RoLFxyXG4gICAgICAgIHRleHRzTWF0Y2g7XHJcblxyXG4gICAgaWYgKG0gPD0gbCkge1xyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKG1hcmtUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KSkgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGV4dHNNYXRjaCAmJlxyXG4gICAgICAocGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjEgfHwgKGRlc2NyaXB0aW9uLm4xID09PSAnVE0nICYmIHBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKSAmJlxyXG4gICAgICAoIWdyYW1wYSB8fCBncmFtcGEubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4yKSAmJlxyXG4gICAgICB0aGlzLndoaWNoQ2hpbGQocGFyZW50Tm9kZSwgbm9kZSkgPT09IGRlc2NyaXB0aW9uLnAxXHJcbiAgICApO1xyXG4gIH1cclxuICBmaW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgbikge1xyXG4gICAgbGV0IG5vZGVUZXh0ID0gbm9kZS5kYXRhLFxyXG4gICAgICAgIGwgPSBub2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNxdWVlemUobm9kZVRleHRbaV0pKSBjb3VudGVyKys7XHJcblxyXG4gICAgICBpZiAoY291bnRlciA9PT0gbikgcmV0dXJuICgvXFxzJC8udGVzdChtYXJrLnRleHQpID8gaSArIDIgOiBpICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc3RvcmVSYW5nZXMoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIG1hcmtzID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIG1hcmtUZW1wLCBzdGFydCwgZW5kLCBmb2N1c09mZnNldDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcbiAgICAgIHN0YXJ0ID0gbWFya1RlbXAuc3RhcnROb2RlO1xyXG4gICAgICBlbmQgPSBtYXJrVGVtcC5lbmROb2RlO1xyXG4gICAgICBmb2N1c09mZnNldCA9IG1hcmtUZW1wLmZvY3VzT2Zmc2V0O1xyXG5cclxuICAgICAgaWYgKCFzdGFydCB8fCAhZW5kIHx8ICEodHlwZW9mIGZvY3VzT2Zmc2V0ID09PSAnbnVtYmVyJykpIHtcclxuICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8zJykgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIG1hcmsuY29uZHMubyk7XHJcbiAgICAgICAgICByYW5nZS5zZXRFbmQoZW5kLCBmb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgIC8vc2VsZWN0aW9uLnJlc3VtZShyYW5nZSk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmVkOnJhbmdlJywgbWFyayk7XHJcbiAgICAgICAgICBkZWxldGUgbWFyay5zeW5jZWQ7XHJcbiAgICAgICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24ucmVjb2xsZWN0Tm9kZXMobWFyayk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgbWFyay50ZW1wO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRCb2R5U2VsZWN0aW9uKGVsKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsKys7XHJcblxyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDEpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihlbCk7XHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblRyaWFsIDwgNCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Qm9keVNlbGVjdGlvbihlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSAnICc7XHJcbiAgICAgICAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSBbXTtcclxuICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy5zcXVlZXplKHRoaXMuc2VsZWN0aW9uLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYm9keVRleHROb2RlcyA9IHRoaXMuc2VsZWN0aW9uLm5vZGVzID8gdGhpcy5zZWxlY3Rpb24ubm9kZXMuc2xpY2UoKSA6IFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzcXVlZXplKHRleHQpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSA/IHRleHQucmVwbGFjZSgvXFx0fFxcc3xcXG58XFxyL2csICcnKSA6IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgd2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBjb250ZXh0KSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBjaGlsZHJlbiA9IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHQgICAgYyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdCAgICBwb3MgPSAwLCBpID0gMCwgY3VycmVudENoaWxkO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBjdXJyZW50Q2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkKSByZXR1cm4gcG9zO1xyXG5cclxuXHRcdFx0aWYgKGNvbnRleHQpIHtcclxuXHRcdFx0XHRpZiAoY3VycmVudENoaWxkLm5vZGVOYW1lID09PSBjb250ZXh0KSBwb3MrKztcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEoY3VycmVudENoaWxkLm5vZGVUeXBlID09PSAzICYmICFjdXJyZW50Q2hpbGQuZGF0YSkpIHBvcysrO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBJbW11dFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgdGhpcy5yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICBjb25zdCBtYXJrcyA9IHRoaXMubWFya3MgPSBbLi4uZW50cnkubWFya3Muc29ydCgobTEsIG0yKSA9PiBtMS5pZCAtIG0yLmlkKV07XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzSW5DaHVua3MobWFya3MsIHRoaXMucmVzdG9yZVJhbmdlLCB0aGlzLnJlcG9ydCk7XHJcbiAgfVxyXG5cclxuICByZXN0b3JlUmFuZ2UobWFyaykge1xyXG4gICAgY29uc3QgY29uZHMgPSBtYXJrLmNvbmRzO1xyXG4gICAgY29uc3Qgc3RhcnQgPSBjb25kcy5zO1xyXG4gICAgY29uc3QgZW5kID0gY29uZHMuZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMuZ2V0Tm9kZShzdGFydC5wKSwgc3RhcnQubyk7XHJcbiAgICAgIHJhbmdlLnNldEVuZCh0aGlzLmdldE5vZGUoZW5kLnApLCBlbmQubyk7XHJcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICBkZWxldGUgbWFyay5zeW5jZWQ7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldE5vZGUocG9zaXRpb24pIHtcclxuICAgIGNvbnN0IHRleHROb2RlUG9zaXRpb24gPSBwb3NpdGlvblswXTtcclxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgICBsID0gcG9zaXRpb24ubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlKGwtLSA+IDEpIHtcclxuICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bcG9zaXRpb25bbF1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGUuY2hpbGROb2Rlc1t0ZXh0Tm9kZVBvc2l0aW9uXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRyZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdyZXN0b3JlOm1hcmtzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdsb3N0Om1hcmtzJzogJ29uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3Jlc3VtZWQ6bWFya2Vycyc6ICdyZXRyeScsXHJcbiAgICAgICAgJ3Jlc3VtZWQtb24taGFzaGNoYW5nZSc6ICdyZXN1bWUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBhdHRlbXB0OiAwLFxyXG4gICAgZmFpbHVyZVJlcG9ydDoge30sXHJcblxyXG4gICAgcmVzdG9yZShlbnRyaWVzKSB7XHJcbiAgICAgIGlmICghZW50cmllcykgcmV0dXJuO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIGVudHJpZXMgPSBbZW50cmllc107XHJcblxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4gICAgICB0aGlzLmNvdW50ID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuYXR0ZW1wdCsrO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdzdGFydGVkOnJlc3RvcmF0aW9ucycpO1xyXG4gICAgICBfU1RPUkUucmVzdG9yaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5Lm1hcmtzICYmIGVudHJ5Lm1hcmtzLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgICBlbHNlIG5ldyBSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25GaW5pc2hlZFJlc3RvcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICBfU1RPUkUucmVzdG9yaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFpbGVkKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hdHRlbXB0ID09PSAxKSB7XHJcbiAgICAgICAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZXR0aW5ncyB8fCAhc2V0dGluZ3MuaGlzdG9yeSB8fCBzZXR0aW5ncy5oaXN0b3J5LmF1dG9SZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yYXRpb24nLCB7IHJlcG9ydDogdGhpcy5nZXRSZXBvcnQoKSwgYXR0ZW1wdDogdGhpcy5hdHRlbXB0LCBhdXRvUmV0cnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgncmVzdG9yZXI6cmV0cnktcmVzdG9yYXRpb24nKSwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2goZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmZpbmlzaCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaW5pc2goc3VjY2Vzcykge1xyXG4gICAgICBpZiAoc3VjY2VzcykgdGhpcy5lbWl0KCdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JhdGlvbicsIHsgdXJsOiBfU1RPUkUudXJsLCByZXBvcnQ6IHRoaXMuZ2V0UmVwb3J0KCksIGF0dGVtcHQ6IHRoaXMuYXR0ZW1wdCB9KTtcclxuICAgICAgdGhpcy5lbWl0KCdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJyk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLy8udXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC8vLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC8vLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7IHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTsgfSBjYXRjaChlKSB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG5vZGUpIHtcclxuICAgIHRoaXMuc2VsZi5zZWxlY3RBbGxDaGlsZHJlbihub2RlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKHNlbGVjdGlvbikge1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5zZWxmID0gc2VsZWN0aW9uO1xyXG4gICAgZWxzZSBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgbGV0IHByb3BzID0gWydmb2N1c05vZGUnLCAnYW5jaG9yTm9kZScsICdmb2N1c09mZnNldCcsICdhbmNob3JPZmZzZXQnXSxcclxuICAgICAgICBpID0gcHJvcHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHRoaXNbcHJvcHNbaV1dID0gc2VsZWN0aW9uW3Byb3BzW2ldXTtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICB0aGlzLnNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgYWRqdXN0KCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXMgPSB0aGlzLmZvY3VzTm9kZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSkgdGhpcy5yZXZlcnNlKGFuY2hvciwgZm9jdXMpO1xyXG4gICAgZWxzZSB0aGlzLm5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgbm9ybWFsaXplKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG5cclxuICAgICAgICBmaXJzdFRleHROb2RlID0gdGhpcy5ub2Rlc1swXSxcclxuICAgICAgICBsYXN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgaWYgKGZpcnN0VGV4dE5vZGUgIT09IGFuY2hvcilcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQoZmlyc3RUZXh0Tm9kZSwgZmlyc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGZpcnN0VGV4dE5vZGUuZGF0YS50cmltTGVmdCgpLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGxhc3RUZXh0Tm9kZSAhPT0gZm9jdXMpXHJcbiAgICAgIHJhbmdlLnNldEVuZChsYXN0VGV4dE5vZGUsIGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIChsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBsYXN0VGV4dE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGgpKTtcclxuICB9XHJcbiAgY29sbGVjdE5vZGVzKHdob2xlRG9jdW1lbnQpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpO1xyXG4gICAgY29uc3QgZmlsdGVyID0gd2hvbGVEb2N1bWVudCA/XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGYuaXNTZWxlY3RhYmxlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpIDpcclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKTtcclxuXHJcbiAgICBjb25zdCBpdGVyYXRvciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoY29udGFpbmVyLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwge1xyXG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGxldCBub2RlcyA9IFtdLFxyXG4gICAgICAgIHBhcmVudE5vZGVzID0gW10sXHJcblxyXG4gICAgICAgIHRleHROb2RlLCBwYXJlbnQsIGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgd2hpbGUodGV4dE5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSB7XHJcbiAgICAgIG5vZGVzLnB1c2godGV4dE5vZGUpO1xyXG4gICAgfVxyXG4gICAgbm9kZXMgPSB0aGlzLnRyaW1TZWxlY3Rpb24obm9kZXMpO1xyXG4gICAgLy90aGlzLm5vZGVzID0gdGhpcy5vcHRpb25zLnByb2dyYW1tYXRpY2FsbHkgPyB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2RlcykgOiBub2RlcztcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcyk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGVzID0gdGhpcy5jb2xsZWN0UGFyZW50Tm9kZXModGhpcy5ub2Rlcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlY29sbGVjdE5vZGVzKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtXcmFwcGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRePVwiJyArIG1hcmsuaWQgKyAnX1wiXScpKTtcclxuICAgIGNvbnN0IG0gPSBtYXJrV3JhcHBlcnMubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV3U2VnbWVudCA9IG1hcmtXcmFwcGVycy5tYXAoZWwgPT4gZWwuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgY29uc3QgcHJldiA9IG1hcmtXcmFwcGVyc1swXS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBjb25zdCBuZXh0ID0gbWFya1dyYXBwZXJzW20tMV0ubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb247XHJcbiAgICBjb25zdCBlbmQgPSBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uO1xyXG5cclxuICAgIGlmIChwcmV2ICYmIHByZXYubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC51bnNoaWZ0KHByZXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnB1c2gobmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgLi4ubmV3U2VnbWVudCk7XHJcbiAgfVxyXG4gIHRyaW1TZWxlY3Rpb24obm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGxldCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGZpcnN0Tm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmFuY2hvck5vZGUgPT09IGZpcnN0Tm9kZSAmJiBmaXJzdE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGggPD0gc2VsZWN0aW9uLmFuY2hvck9mZnNldCkge1xyXG4gICAgICAgIG5vZGVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5mb2N1c05vZGUgPT09IGxhc3ROb2RlICYmIHRoaXMuaXNCbGFuayhsYXN0Tm9kZS5kYXRhLnN1YnN0cigwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKSkge1xyXG4gICAgICAgIG5vZGVzLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIHJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgcmcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZShyZyk7XHJcblxyXG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgIHJnLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICAgIHJldHVybiAhIXNlbC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHRoaXMucmFuZ2UpO1xyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgY29sbGVjdFBhcmVudE5vZGVzKG5vZGVzKSB7XHJcbiAgICBsZXQgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBwYXJlbnRzID0gW10sIGkgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBwYXJlbnRzLnB1c2gobm9kZXNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgfVxyXG4gIHJldHJpZXZlVGV4dCgpIHtcclxuICAgIGxldCByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbm9kZXMgPSB0aGlzLm5vZGVzLFxyXG4gICAgICAgIGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbm9kZVRleHRzID0gW10sXHJcbiAgICAgICAgdGV4dDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgbm9kZVRleHRzLnB1c2gobm9kZXNbaV0uZGF0YSk7XHJcblxyXG4gICAgbCAtPSAxO1xyXG5cclxuICAgIGlmIChub2RlVGV4dHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdGhpcy5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgIC8vbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCB0aGlzLmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRleHQgPSB0aGlzLnRleHQgPSBub2RlVGV4dHMuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIG5vZGUxID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgbm9kZTIgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChub2RlMSA9IG5vZGUxLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUyKSAmIDB4MTApID09PSAweDEwKVxyXG4gICAgICAgICAgcmV0dXJuIG5vZGUxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuICByZXZlcnNlKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCByYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChmb2N1cywgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChhbmNob3IsIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoc2VsZWN0aW9uKS5hZGp1c3Qoc2VsZWN0aW9uLmFuY2hvck5vZGUsIHNlbGVjdGlvbi5mb2N1c05vZGUpO1xyXG4gIH1cclxuICByZWR1Y2VUb09uZVJhbmdlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZUNvdW50ID0gc2VsZWN0aW9uLnJhbmdlQ291bnQsXHJcbiAgICAgICAgcmFuZ2UwID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBsYXN0UmFuZ2U7XHJcblxyXG4gICAgaWYgKHJhbmdlQ291bnQgPCAyKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBsYXN0UmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdChyYW5nZUNvdW50IC0gMSk7XHJcblxyXG4gICAgcmFuZ2UwLnNldFN0YXJ0KHJhbmdlMC5zdGFydENvbnRhaW5lciwgcmFuZ2UwLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlMC5zZXRFbmQobGFzdFJhbmdlLmVuZENvbnRhaW5lciwgbGFzdFJhbmdlLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGhhc05vcm1hbFBhcmVudChub2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YWcgPSBwYXJlbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRhZyAhPT0gJ1NDUklQVCcgJiYgdGFnICE9PSAnU1RZTEUnICYmIHRhZyAhPT0gJ0xJTksnICYmIHRhZyAhPT0gJ01FVEEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0JBU0UnICYmIHRhZyAhPT0gJ1RJVExFJyAmJiB0YWcgIT09ICdOT1NDUklQVCcgJiZcclxuICAgICAgdGFnICE9PSAnSU1HJyAmJiB0YWcgIT09ICdJRlJBTUUnICYmIHRhZyAhPT0gJ0VNQkVEJyAmJiB0YWcgIT09ICdQQVJBTScgJiZcclxuICAgICAgdGFnICE9PSAnVklERU8nICYmIHRhZyAhPT0gJ0FVRElPJyAmJiB0YWcgIT09ICdTT1VSQ0UnICYmIHRhZyAhPT0gJ1RSQUNLJyAmJlxyXG4gICAgICB0YWcgIT09ICdDQU5WQVMnICYmIHRhZyAhPT0gJ01BUCcgJiYgdGFnICE9PSAnQVJFQScgJiZcclxuICAgICAgdGFnICE9PSAnTUFUSCcgJiYgdGFnICE9PSAnT0JKRUNUJyAmJlxyXG4gICAgICAvLyBSdWJ5IGFubm90YXRpb25zOlxyXG4gICAgICAvLyBGb3Igd2hhdGV2ZXIgcmVhc29uIDxydD4gY2FuIGJlIHNlbGVjdGVkLCBidXQgYGdldFNlbGVjdGlvbigpLnRvU3RyaW5nKClgIHdvbid0IGNvbnRhaW4gaXRzIHRleHQgY29udGVudCFcclxuICAgICAgdGFnICE9PSAnUlAnICYmIHRhZyAhPT0gJ1JUJyAmJiB0YWcgIT09ICdSVEMnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnOiAnb25Ob3RlQWRkZWQnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya0FkZGVkJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya1JlbW92ZWQnXHJcbiAgICB9XHJcblx0fSxcclxuICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICBlbDogbnVsbCxcclxuXHJcbiAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICBidXR0b25zOiB7XHJcbiAgICBub3Rlczoge1xyXG4gICAgICBlbDogbnVsbCxcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJvb2ttYXJrOiB7XHJcbiAgICAgIGVsOiBudWxsLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2hvd246IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYm9va21hcms6IGZhbHNlLFxyXG4gIG5vdGVzOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcclxuICB9LFxyXG4gIHVwZGF0ZVN0YXRlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYm1pY29uJykudGhlbihibWljb24gPT4ge1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ25vdGVpY29uJykudGhlbihub3RlaWNvbiA9PiB0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyA9IG5vdGVpY29uKTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgKHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ICYmIHRoaXMuYm9va21hcmspIHx8XHJcbiAgICAgICh0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyAmJiB0aGlzLm5vdGVzKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBidXR0b25zID0gdGhpcy5idXR0b25zLCBidG47XHJcblxyXG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXVpJyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICBidG4gPSBidXR0b25zW2JdO1xyXG4gICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgZWxzZSBpZiAoYnRuLnNob3duICYmICghdGhpc1tiXSB8fCAhYnRuLnNob3cpKSB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgIH1cclxuICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gIH0sXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnM7XHJcblxyXG4gICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICBpZiAoYnV0dG9uc1tiXS5zaG93bikge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXVpKTtcclxuICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IG5vdGVzQnV0dG9uID0gdGhpcy5idXR0b25zLm5vdGVzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXN0b2dnbGUnKTtcclxuICAgIGNvbnN0IGJvb2ttYXJrQnV0dG9uID0gdGhpcy5idXR0b25zLmJvb2ttYXJrLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtYm0nKTtcclxuICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgYm9va21hcmtCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnYm1fc2Nyb2xsJyk7XHJcbiAgfSxcclxuICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBidG4uaGFuZGxlciA9IHR5cGUgPT09ICdub3RlcycgP1xyXG4gICAgICB0aGlzLnRvZ2dsZU5vdGVzLmJpbmQodGhpcykgOlxyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0bXVpLmFwcGVuZENoaWxkKGJ0bi5lbCk7XHJcbiAgICBidG4uc2hvd24gPSB0cnVlO1xyXG5cclxuICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHJlbW92ZUJ1dHRvbih0eXBlKSB7XHJcbiAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuXHJcbiAgICB0bXVpLnJlbW92ZUNoaWxkKGJ0bi5lbCk7XHJcbiAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICBidG4uZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG4uaGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCd0bXVpcG9zJylcclxuICAgICAgLnRoZW4ocG9zID0+IHRoaXMuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBvcy5zcGxpdCgnLScpLm1hcChwID0+IHAgKyAnOjFweDsnKS5qb2luKCcgJykpKTtcclxuICB9LFxyXG4gIG9uTm90ZUFkZGVkKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25MYXN0Tm90ZVJlbW92ZWQoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25Cb29rbWFya1JlbW92ZWQoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gIH0sXHJcbiAgc2Nyb2xsVG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnaW5qZWN0aW9uJyxcclxuICB0eXBlOiAnY29udGVudCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJyxcclxuICAgICAgJ2ZldGNoOmVudHJpZXMnLFxyXG5cclxuICAgICAgLy8gQFJFU1RPUkVSXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbicsXHJcbiAgXHRcdCdmYWlsZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJyxcclxuICAgICAgJ2NhbmNlbGVkOnNhdmUtYWZ0ZXItY2FuY2VsZWQtcmVzdG9yYXRpb24nXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlLFxyXG4gICAgICBhdXRvUmV0cnk6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgbm90ZWZvbnRzaXplOiAxMixcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgbG9hZE5vdGU6IGZhbHNlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICd0bSdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBpZiAoIXVybCkgcmV0dXJuICcnO1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkLCAnJyk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJywgJ0hyZWYnXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGFyZ3NbMF0udGFiSWQsIHsgZXY6IGV2ZW50LCB3YWl0OiB0cnVlIH0sIHsgZnJhbWVJZDogYXJnc1swXS5mcmFtZUlkIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgdGhpcy5yZWdpc3Rlck9uZU9mZkV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyT25lT2ZmRXZlbnRzKGV2ZW50cy5PTkVPRkYpO1xyXG4gIH1cclxuICByZWdpc3Rlck9uZU9mZkV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyB8fCAoIGV2ZW50cyA9IHRoaXMuZXZlbnRzLk9ORU9GRik7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBfUFJJVlBPUlQgZXh0ZW5kcyBfUE9SVCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAhdGhpcy5wb3J0IHx8IHRoaXMucG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIodGhpcy5wb3J0TGlzdGVuZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHMuQ09OTkVDVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgICAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IGAke3RoaXMubmFtZX1fJHt0aGlzLmlkfWAgfSk7XHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLnBvcnRMaXN0ZW5lciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSk7XHJcbiAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBfQkdQT1JUIGV4dGVuZHMgX1BPUlQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMucG9ydHMgPSB7fTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50cy5DT05ORUNUSU9OO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlck9uQ29ubmVjdExpc3RlbmVyKCkge1xyXG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcnRzID0gdGhpcy5wb3J0cztcclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpO1xyXG4gICAgICAgICAgICBwb3J0c1twb3J0Lm5hbWVdID0gcG9ydDtcclxuICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3J0Lm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgcG9ydHNbcG9ydC5uYW1lXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgcG9ydHMgPSB0aGlzLnBvcnRzO1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwIGluIHBvcnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgIHBvcnRzW3BdLnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9QT1JULCBfUFJJVlBPUlQsIF9CR1BPUlQgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==