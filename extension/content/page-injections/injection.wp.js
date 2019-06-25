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
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._STORE = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

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
      'entries:found': 'onEntriesFound'
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
  update: function update() {
    var _this2 = this;

    return _store2["default"].get('settings').then(function (settings) {
      _this2.active = settings.misc.markmethod === 'popup';
      _this2.markers = settings.markers;
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
  copy: function copy() {
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
        functionKeys = lockedActions.concat(arrowKeys).concat('c'),
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
    failureReport: {},
    restore: function restore(entries) {
      if (!entries) return;
      if (!Array.isArray(entries)) entries = [entries];
      this.entries = entries;
      this.count = entries.length;
      this.emit('started:restorations');
      _store2["default"].restoring = true;
      entries.forEach(function (entry) {
        if (entry.immut) new ImmutRestorer(entry);else new Restorer(entry);
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
      if (++this.restored === this.count) {
        this.emit('finished:all-restorations');
        _store2["default"].restoring = false;
        if (this.failed) this.emit('failed:restoration', this.getReport());else this.emit('succeeded:restoration');
      }
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
      return tag !== 'SCRIPT' && tag !== 'STYLE' && tag !== 'LINK' && tag !== 'META' && tag !== 'BASE' && tag !== 'TITLE' && tag !== 'NOSCRIPT' && tag !== 'IMG' && tag !== 'IFRAME' && tag !== 'EMBED' && tag !== 'PARAM' && tag !== 'VIDEO' && tag !== 'AUDIO' && tag !== 'SOURCE' && tag !== 'TRACK' && tag !== 'CANVAS' && tag !== 'MAP' && tag !== 'AREA' && tag !== 'MATH' && tag !== 'OBJECT' && !this.isChildOf(parent, 'svg') //&&
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
      notefontsize: 12,
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

        if (lastArg && (tab = lastArg.tab)) {
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
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJ1cGRhdGVkIiwicmVzdG9yaW5nIiwiaWZyYW1lIiwibmFtZSIsInVuZGVmaW5lZCIsImlzTmV3IiwiZW50cmllcyIsImxvY2tlZCIsImhhc2hTZW5zaXRpdmUiLCJ0bWlkIiwibm90ZUNvbG9yIiwibm90ZUZvbnRTaXplIiwiaW1tdXQiLCJyZWRlc2NyaWJpbmciLCJyZXN1bWUiLCJ1cGRhdGVMb2NhdGlvbiIsIndpbmRvdyIsInBhcmVudCIsImRvY3VtZW50IiwiVVJMIiwidXBkYXRlU3RhdHVzIiwicXVlcnlTZWxlY3RvciIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnlTZXR0aW5ncyIsImhpc3RvcnkiLCJuYW1pbmciLCJpZ25vcmVIYXNoIiwiZW1pdCIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJmaXJzdEVudHJ5IiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInJlc3RvcmVyIiwiYXV0b2luaXQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJveHkiLCJvbkhhc2hDaGFuZ2UiLCJvblJlc3VtZWQiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsImJvb2ttYXJrIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbkVudHJpZXNGb3VuZCIsIm9uIiwic3RhcnRSZXN0b3JhdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsInJlY2VudGx5T3BlbmVkRW50cnkiLCJ1cGRhdGVOYW1lIiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9TdHJpbmciLCJfQk9PS01BUksiLCJtYXJrIiwiYW5jaG9yIiwid3JhcHBlcnMiLCJ3Iiwia2V5RGF0YSIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYm0iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhY3RpdmF0ZSIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5jbHVkaW5nT2Zmc2V0cyIsImZpcnN0V3JhcHBlciIsImxhc3RXcmFwcGVyIiwiZmlyc3RQYXJlbnQiLCJsYXN0UGFyZW50IiwiYW5jaG9yUHJldiIsImZvY3VzUHJldiIsIndoaWNoQ2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJub2RlVHlwZSIsImRhdGEiLCJjb250YWluZXIiLCJyZXBsYWNlQ2hpbGQiLCJmaXJzdENoaWxkIiwic2VsZiIsImNoaWxkTm9kZXMiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbGxlY3ROb2RlcyIsImNvbGxhcHNlVG9TdGFydCIsImNyZWF0ZSIsImNoaWxkIiwiaW5jbHVkaW5nVGV4dE5vZGVzIiwiY2hpbGRyZW4iLCJjIiwibnVtYmVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJzdGFydCIsInN0YXJ0Q29udGFpbmVyIiwiZW5kIiwiZW5kQ29udGFpbmVyIiwic2luZ2xlTm9kZSIsInBhcmVudElzVE0iLCJoYXNBdHRyaWJ1dGUiLCJncmFtcGEiLCJncmFuZGdyYW1wYSIsImZUTlAiLCJvIiwibjEiLCJub2RlTmFtZSIsInAxIiwibjIiLCJwMiIsInAzIiwicDQiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJhbmNob3JOb2RlIiwiZm9jdXNOb2RlIiwicyIsInAiLCJhcHBlbmRlZCIsImhlaWdodCIsInBvcHVwIiwiZWwiLCJiZ0NvbG9yUmVnRXhwIiwiYmdDb2xvciIsImNvbG9yQnRuIiwibSIsIm1hdGNoIiwiYXBwZW5kQ2hpbGQiLCJiYWNrZ3JvdW5kIiwicG9wIiwicmVtb3ZlQ2hpbGQiLCJzaG93IiwicG9wdXBIZWlnaHQiLCJvbk1vdXNlZG93biIsInNlbGVjdGlvblBvc2l0aW9uIiwiZ2V0UmFuZ2VBdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFkiLCJsZWZ0Iiwic2Nyb2xsWCIsIm9mZnNldEhlaWdodCIsIk1hdGgiLCJtYXgiLCJwYXJzZUludCIsInByZXZlbnREZWZhdWx0Iiwic3BsaXQiLCJkb25lIiwidW5kb25lIiwidmlzdWFsbHlPcmRlcmVkTWFya3MiLCJ2aXN1YWxseU9yZGVyZWRNYXJrSURzIiwicmVtb3ZlZEJvb2ttYXJrIiwibWFya1Njcm9sbFBvcyIsInVwZGF0ZUlEIiwibCIsImlkcyIsIm1hcmtzIiwiY29uY2F0IiwibG9zdCIsImFwcGx5IiwiYXV0b25vdGUiLCJ1bmRvIiwibm9BdXRvc2F2ZSIsInVuZG9Cb29rbWFyayIsInJlZG8iLCJjdXRPdXQiLCJ0b0JlUmVtb3ZlZCIsImluZGljZXMiLCJzbWFsbGVzdElEIiwiZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3MiLCJqIiwieCIsIm1hcmtzSW50ZXJzZWN0IiwiaW5jbHVkZXMiLCJzb3J0Iiwic2hpZnQiLCJtaW4iLCJzcGxpY2UiLCJnZXRCeUlkIiwicG9zaXRpb24iLCJpbmRleE9mIiwiZm9yRWFjaCIsImFyZyIsIm9wdGlvbnMiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhpZ2hsaWdodCIsImNyZWF0ZVRleHROb2RlIiwidGV4dENvbnRlbnQiLCJzaWxlbnQiLCJpbW11dGFibGUiLCJzYXZlIiwicmVxdWVzdCIsImdyYW50ZWQiLCJzdWIiLCJpMThuIiwiZ2V0TWVzc2FnZSIsInByb21wdCIsInJldHJpZXZlRW50cnkiLCJjb25maXJtZWQiLCJjb25maXJtIiwiY29weSIsImZpbmRNYXJrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidHJpbSIsInN0b3JlIiwib3JkZXIiLCJvcmRlck1hcmtzVmlzdWFsbHkiLCJyZWNyZWF0ZSIsIl9TRUxFQ1RJT04iLCJvbkZpbmlzaGVkUmVzdG9yYXRpb24iLCJzdWJzdHJpbmciLCJfR0xPQkFMX1NFVFRJTkdTIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJnb3RvTWFyayIsInNvcnRCeUlkIiwic2Nyb2xsVG9Cb29rbWFyayIsImFkZE5vdGUiLCJzYXZlTm90ZSIsImFyZWFfaGlzdG9yeSIsIm1hcmtFbGVtZW50cyIsInBvcyIsImluZGljYXRlTWFyayIsImdvdG9OZXh0TWFyayIsImRpciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0bSIsInRtcyIsInNldFRpbWVvdXQiLCJzZXQiLCJyZW1vdmVCb29rbWFyayIsIm1hcmsxIiwibWFyazIiLCJtMSIsIm0yIiwiYmIxIiwiYmIyIiwidG9wMSIsInRvcDIiLCJtYXAiLCJ3cmFwcGVyczEiLCJ3MSIsImlkMSIsIndyYXBwZXJzMiIsImlkMiIsIncyIiwib25NYXJrZXJLZXkiLCJvbkhvdGtleSIsImNvbGxlY3RNYXJrcyIsImxhc3QiLCJEYXRlIiwiZ2V0VGltZSIsImJvb2ttYXJrZWQiLCJ0aXRsZSIsImNvdW50IiwiZmlyc3QiLCJrRCIsImNvbG9yIiwiQk9EWSIsIkRPTSIsImNsaWNrIiwia2V5dXAiLCJtb3VzZWRvd24iLCJ0b3VjaHN0YXJ0IiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJtYXJrQ2xpY2tIYW5kbGVyIiwidmlzaWJsZSIsInJlY2VudGx5VXBkYXRlZCIsInNldHRpbmdzTW9kZSIsInQiLCJzaXplIiwiaCIsImRyYWdEWCIsImRyYWdEWSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJhZGp1c3ROb3RlRGF0YU9iamVjdCIsImNyZWF0ZU5vdGVFbGVtZW50IiwiYWRkTGlzdGVuZXJzIiwiYWRkTWFya0xpc3RlbmVycyIsIm5vdGVEYXRhIiwiZnMiLCJoZWFkZXIiLCJhY3Rpb25zIiwiZGVsIiwiZ2VhciIsInBhbGV0dGUiLCJ0ZXh0RWxlbWVudCIsImRlbFRleHQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5UZXh0IiwiZ2VhclRleHQiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImF0dGVtcHRVcGRhdGUiLCJfZGVsZXRlIiwiaGlkZSIsInJlbW92ZU1hcmtMaXN0ZW5lcnMiLCJmb3JjZSIsImlubmVyV2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiZ2V0UG9zaXRpb24iLCJvZmZzZXQiLCJmb250U2l6ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIiLCJicmluZ1VwRnJvbnQiLCJ6SW5kZXgiLCJkaXNjb25uZWN0IiwidG9nZ2xlIiwidG9nZ2xlUGFsZXR0ZSIsImNoYW5nZUNvbG9yIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dGFyZWEiLCJjb25maWciLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJzYXZlU2l6ZSIsIm9ic2VydmUiLCJyZWN0IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvbkRyYWdTdGFydCIsInBhZ2VYIiwicGFnZVkiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJtdXRhdGlvbnNMaXN0Iiwid2lkdGgiLCJub3RlcyIsImRyYWdIYW5kbGVyIiwiZHJhZ1N0b3BIYW5kbGVyIiwidXBkYXRlU3R5bGUiLCJfTk9URSIsInJlc3RvcmUiLCJhZGRBbmRTaG93IiwicmVtb3ZlTm90ZVN0b3JhZ2UiLCJpc0VtcHR5IiwicmVtb3ZlTm90ZSIsInRvZ2dsZUFsbCIsIm1ldGgiLCJjb25kaXRpb24iLCJib2R5Q2xhc3NlcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwibm90ZWZvbnRzaXplIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsInN0YXJ0RHJhZ2dpbmdOb3RlIiwiZW1pdERyYWdFdmVudCIsInN0b3BEcmFnZ2luZ05vdGUiLCJkb2MiLCJzZW5kTm90ZXNTdGF0ZSIsInJlcG9ydCIsImF1dG9QYXVzZSIsImtleWRvd24iLCJzZWxlY3Rpb25jaGFuZ2UiLCJzZWxlY3Rpb25Db2xsYXBzZWQiLCJzaGlmdFNlbnNpdGl2ZUtleXMiLCJrZXlDb2RlTWFwIiwiaXNFZGl0YWJsZSIsInRhZ05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJkZWxlZ2F0ZSIsInRvTG93ZXJDYXNlIiwia2V5Q29kZSIsIm1vZEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJhcnJvd0tleXMiLCJsb2NrZWRBY3Rpb25zIiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJvcmlnS2V5IiwiaXNNYXJrZXJLZXkiLCJpc0N1c3RvbU1hcmtlcktleSIsInNldHRpbmciLCJzaG9ydGN1dCIsInMxIiwiczIiLCJyZXN0b3JlZCIsImZhaWxlZCIsImZhaWx1cmVSZXBvcnQiLCJJbW11dFJlc3RvcmVyIiwiUmVzdG9yZXIiLCJyZXRyeSIsIm9uRmFpbHVyZSIsImdldFJlcG9ydCIsIm1zZyIsInJlYXNvbiIsIlJlc3RvcmVyQmFzZSIsImFyZWEiLCJwcm9jIiwiY2IiLCJyZWMiLCJleHBpcmUiLCJsbCIsInRlbXAiLCJxdWV1ZSIsImNhY2hlIiwicGhhc2UiLCJzZWxlY3Rpb25UcmlhbCIsImNodW5rRHVyYXRpb24iLCJfdGltZXIiLCJvb20iLCJpbml0Iiwibm93IiwicG9zdHBvbmVkIiwiY29udmVydERlc2NyaXB0aW9uIiwiY3JlYXRlVGVtcE9iamVjdCIsImNvbnZlcnRlZENvbmRzIiwiZmlyc3ROb2RlTmFtZSIsImZpcnN0UGFyZW50Tm9kZU5hbWUiLCJmaXJzdFRleHROb2RlUG9zaXRpb24iLCJmaXJzdE5vZGVQb3NpdGlvbiIsImZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uIiwiZmlyc3RHcmFtcGFOb2RlUG9zaXRpb24iLCJ0cmltbWVkVGV4dCIsInNxdWVlemVkVGV4dCIsInNxdWVlemUiLCJ0ZXh0TGVuZ3RoIiwidHJpbW1lZFRleHRMZW5ndGgiLCJzcXVlZXplZFRleHRMZW5ndGgiLCJwb3NzaWJsZVBvc2l0aW9ucyIsInBvc3NpYmxlRW5kUG9zaXRpb25zIiwicG9zc2libGVTdGFydE5vZGVzIiwicG9zc2libGVFbmRzIiwicG9zc2libGVGb2N1c09mZnNldHMiLCJzb3J0UXVldWVCeUlkIiwic2V0Qm9keVNlbGVjdGlvbiIsImdldFRleHRQb3NpdGlvbnMiLCJwb3N0cG9uZU92ZXJsYXBwaW5ncyIsImZpbmRQb3NzaWJsZUV4dHJlbWEiLCJydWxlT3V0TXVsdGlwbGVzIiwicmVzdG9yZVJhbmdlcyIsInRpbWVyIiwicmVzIiwidHJpbW1lZFNlbGVjdGlvblRleHQiLCJhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwiZW5kUG9zaXRpb25zIiwibWFya1RlbXAiLCJzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyIsIm1heFBvc2l0aW9uIiwicG9zaXRpb25zIiwicG9zMSIsInBvczIiLCJwb3N0cG9uZSIsImN1dE91dEZvciIsImFscmVhZHlJbmNsdWRlZCIsImJvZHlUZXh0Tm9kZXMiLCJzYXRpc2ZpZWQiLCJjaGFycyIsIm5leHRTdGFydEZvdW5kIiwiZW5kaW5nc0luVGhpc05vZGUiLCJub2Rlc1RleHQiLCJub2Rlc1RleHRMZW5ndGgiLCJkaWZmIiwiZiIsInEiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0Iiwic3RhcnRGb3VuZEZvciIsImhhc0VuZGluZ3NJblRoaXNOb2RlIiwiZW5kRm91bmRGb3IiLCJzYXRpc2ZpZXNEZXNjcmlwdGlvbiIsImZpbmRGb2N1c09mZnNldCIsImdyYW5kZ3JhbmRncmFtcGEiLCJtYXRjaGVzIiwic3RhcnROb2RlIiwic3RhcnROb2RlUG9zaXRpb24iLCJzZXRNYXRjaGluZ0VuZCIsImVuZE5vZGUiLCJlbmROb2RlUG9zaXRpb24iLCJmb2N1c09mZnNldCIsImRlc2NyaXB0aW9uIiwicmVsZXZhbnROb2RlVGV4dCIsIm1hcmtUZXh0IiwidGV4dHNNYXRjaCIsIm5vZGVUZXh0IiwiY291bnRlciIsInRlc3QiLCJjcmVhdGVSYW5nZSIsInJlY29sbGVjdE5vZGVzIiwic2xpY2UiLCJjb250ZXh0IiwiY3VycmVudENoaWxkIiwicHJvY2Vzc0luQ2h1bmtzIiwicmVzdG9yZVJhbmdlIiwiZ2V0Tm9kZSIsInRleHROb2RlUG9zaXRpb24iLCJyYW5nZUNvdW50IiwiZGVmaW5lZCIsInJlZHVjZVRvT25lUmFuZ2UiLCJyZXRyaWV2ZVRleHQiLCJhZGp1c3QiLCJzZWxlY3RBbGxDaGlsZHJlbiIsInByb3BzIiwiaXNTaW1wbGUiLCJmb2N1cyIsImlzQmFja3dhcmRzIiwicmV2ZXJzZSIsImZpcnN0VGV4dE5vZGUiLCJsYXN0VGV4dE5vZGUiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsIndob2xlRG9jdW1lbnQiLCJnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lciIsImZpbHRlciIsImlzU2VsZWN0YWJsZSIsImlzQmxhbmsiLCJoYXNOb3JtYWxQYXJlbnQiLCJjb250YWluc05vZGUiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJ0cmltU2VsZWN0aW9uIiwicmVkdWNlVG9TZWxlY3RhYmxlIiwiY29sbGVjdFBhcmVudE5vZGVzIiwibWFya1dyYXBwZXJzIiwibmV3U2VnbWVudCIsInByZXYiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJ1bnNoaWZ0IiwiYW5jaG9yT2Zmc2V0Iiwic3Vic3RyIiwic2VsIiwicmciLCJzZWxlY3ROb2RlIiwicGFyZW50cyIsIm5vZGVUZXh0cyIsImpvaW4iLCJub2RlMSIsIm5vZGUyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJyYW5nZTAiLCJsYXN0UmFuZ2UiLCJ0YWciLCJ0b1VwcGVyQ2FzZSIsImlzQ2hpbGRPZiIsInNlYXJjaCIsImF0dGFjaGVkIiwiYnV0dG9ucyIsInNob3duIiwiY3JlYXRlQnV0dG9ucyIsInVwZGF0ZVN0YXRlIiwic2hvdWxkQXR0YWNoIiwicmVuZGVyIiwiYnRuIiwiYiIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInVwZGF0ZVBvc2l0aW9uIiwidG11aSIsIm5vdGVzQnV0dG9uIiwiYm9va21hcmtCdXR0b24iLCJ0eXBlIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJPTkVPRkYiLCJ2ZXJzaW9uIiwicnVudGltZSIsImdldE1hbmlmZXN0IiwieiIsInkiLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiZG93bmxvYWQiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJhdXRvY3MiLCJpZnJhbWVzIiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJjdXN0b21TZWFyY2giLCJwcm9ncmVzc2JhciIsInRiYnBvd2VyIiwidGFicyIsIm1ldGEiLCJ1bmZvbGRlZCIsInRhZ3MiLCJsaW5rcyIsInRoZW1lcyIsInRoZW1lIiwicGFnZW5vdGVzIiwic3luYyIsIk1BWF9MT0dfRU5UUklFUyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJzcmMiLCJ2YWwiLCJwcm9wIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJzZXRBdXRvUGF1c2UiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwiZG9tRXZlbnRzIiwiZ2VuZXJhbEhhbmRsZXIiLCJfZXh0cmEiLCJlcnJvciIsImZpbGUiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsImxpbmVubyIsImNvbG5vIiwidGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiYXJncyIsInRvcGljIiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibGFzdEFyZyIsInRhYiIsImZyYW1lSWQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiX0RFRkFVTFRfU1RPUkFHRSIsImFyZWFfcGFnZW5vdGVzIiwibG9jYWwiLCJzZXRBcmVhcyIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImxvZ3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7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UixDQUFnQmt2QixLQUFoQixDQUFzQnp3QixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQTZ3QixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQ0ssSUFBbkMsRUFBeUMsT0FBTyxFQUFQO0FBQ3pDLGVBQU9MLFlBQVksQ0FBQ0ssSUFBcEI7QUFDRCxPQUhNLENBQVA7QUFJRDs7O21DQUNjO0FBQ2IsYUFBTzd2QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JrdkIsS0FBaEIsQ0FBc0J6d0IsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUE2d0IsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM5SCxPQUFuQyxFQUE0QztBQUMxQyxpQkFBTzFuQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0I0cEIsSUFBaEIsQ0FBcUJuckIsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUE4d0IsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUMvSCxPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU84SCxZQUFZLENBQUM5SCxPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QmxyQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnb25Ub2dnbGVkU3luYydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBlbnY6ICdpbmplY3Rpb24nLFxyXG5cclxuICB1cmw6ICcnLFxyXG4gIGhhc2hsZXNzVVJMOiAnJyxcclxuXHJcbiAgdXBkYXRlZDogZmFsc2UsXHJcbiAgcmVzdG9yaW5nOiBmYWxzZSxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgbm90ZUZvbnRTaXplOiAxMixcclxuICBpbW11dDogZmFsc2UsXHJcbiAgcmVkZXNjcmliaW5nOiBmYWxzZSxcclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5lbnRyaWVzID0ge307XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnRtaWQgPSAnJztcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZUxvY2F0aW9uKCkge1xyXG4gICAgdGhpcy5pZnJhbWUgPSB3aW5kb3cgIT09IHdpbmRvdy5wYXJlbnQud2luZG93O1xyXG4gICAgdGhpcy51cmwgPSB3aW5kb3cuZG9jdW1lbnQuVVJMO1xyXG4gICAgdGhpcy5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyh0aGlzLnVybCk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlZDpzdG9yZS1zdGF0dXMnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlbmFtZUVudHJ5KGVudHJ5LCBvbGROYW1lKSB7XHJcbiAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMubmFtZSA9PT0gb2xkTmFtZSAmJiAhdGhpcy5sb2NrZWQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gZW50cnkubmFtZTtcclxuICAgICAgaWYgKHRoaXMuZW50cmllc1tvbGROYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXRTeW5jRm9yRW50cnkoZW50cnkpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQgJiYgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXS5zeW5jZWQgPSBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlRW50cnkoZGVsZXRlZEVudHJ5KSB7XHJcbiAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGlmIChlbnRyaWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIG5hbWUgPT09IGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIGFkZEVudHJpZXMoZW50cmllcykge1xyXG4gICAgaWYgKCFlbnRyaWVzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICBjb25zdCBlID0gZW50cmllcy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCkgdGhpcy5uYW1lID0gZmlyc3RFbnRyeS5uYW1lO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZmlyc3RFbnRyeS5pbW11dDtcclxuICAgIHRoaXMuaGFzaFNlbnNpdGl2ZSA9IGZpcnN0RW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICB9LFxyXG5cclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdG11aSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyLXBvcHVwJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9hdXRvLW1hcmtlcidcclxuXHJcbmltcG9ydCAnLi9tYWluJ1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0IF9SRVNUT1JFUiBmcm9tICcuL21vZHVsZXMvcmVzdG9yZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmRQYWdlU3RhdGUnLFxyXG5cclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG5cclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmhhc2hvcHQtc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYyc6ICdzZXRTeW5jRm9yRW50cnknLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJzogJ3JlbmFtZUVudHJ5JyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgJ3Jlc3VtZWQtb24taGFzaGNoYW5nZSc6ICdvblJlc3VtZWQnLFxyXG5cclxuICAgICAgLy8gQFJFU1RPUkVSXHJcbiAgICAgICdlbnRyaWVzOmZvdW5kJzogJ29uRW50cmllc0ZvdW5kJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJldHJ5QWN0aXZlOiBmYWxzZSxcclxuICByZXN0b3JlcjogbnVsbCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUudXBkYXRlTG9jYXRpb24oKTtcclxuICAgIF9TVE9SRS51cGRhdGVTdGF0dXMoKTtcclxuICAgIGlmICghdGhpcy5pZnJhbWUpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMub25IYXNoQ2hhbmdlKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uSGFzaENoYW5nZSgpIHtcclxuICAgIGlmIChfU1RPUkUuaGFzaFNlbnNpdGl2ZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2hhc2hjaGFuZ2UnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uUmVzdW1lZCgpIHtcclxuICAgIF9TVE9SRS51cGRhdGVMb2NhdGlvbigpO1xyXG4gICAgX1NUT1JFLmlzTmV3IHx8IF9TVE9SRS5yZXN1bWUoKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2ZldGNoOmVudHJpZXMnLCBfU1RPUkUudXJsKTtcclxuICB9LFxyXG4gIG9uU2F2ZWRFbnRyeShlbnRyeSkge1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKGVudHJ5LnVybCA9PT0gdXJsKSB7XHJcbiAgICAgIF9TVE9SRS5hZGRFbnRyaWVzKFtlbnRyeV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIHRoaXMucmV0cnlBY3RpdmUgPSB0cnVlO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgc2VuZFBhZ2VTdGF0ZShpbmZvKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3BhZ2Utc3RhdGUnLCB7XHJcbiAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgYm9va21hcms6ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJyksXHJcbiAgICAgIHJldHJ5QWN0aXZlOiB0aGlzLnJldHJ5QWN0aXZlXHJcbiAgICB9LCBpbmZvKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVTdGF0dXMoKSB7XHJcbiAgICBfU1RPUkUudXBkYXRlU3RhdHVzKCk7XHJcbiAgfSxcclxuICBzZXRTeW5jRm9yRW50cnkoLi4uYXJncykge1xyXG4gICAgX1NUT1JFLnNldFN5bmNGb3JFbnRyeSguLi5hcmdzKTtcclxuICB9LFxyXG4gIHJlbmFtZUVudHJ5KC4uLmFyZ3MpIHtcclxuICAgIF9TVE9SRS5yZW5hbWVFbnRyeSguLi5hcmdzKTtcclxuICB9LFxyXG4gIHJlbW92ZUVudHJ5KC4uLmFyZ3MpIHtcclxuICAgIF9TVE9SRS5yZW1vdmVFbnRyeSguLi5hcmdzKTtcclxuICB9LFxyXG5cclxuICAvLyBAUkVTVE9SRVJcclxuICBvbkVudHJpZXNGb3VuZChpbmZvKSB7XHJcbiAgICBpZiAoIV9TVE9SRS51cGRhdGVkKSB7XHJcbiAgICAgIHRoaXMub24oJ3VwZGF0ZWQ6c3RvcmUtc3RhdHVzJywgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnN0YXJ0UmVzdG9yYXRpb24sIGluZm8pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnRSZXN0b3JhdGlvbihpbmZvKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0UmVzdG9yYXRpb24oaW5mbykge1xyXG4gICAgbGV0IGVudHJpZXMgPSBpbmZvLmVudHJpZXM7XHJcbiAgICBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc107XHJcbiAgICBfU1RPUkUubG9ja2VkID0gaW5mby5sb2NrZWQ7XHJcbiAgICBpZiAoIXRoaXMucmVzdG9yZXIpIHRoaXMucmVzdG9yZXIgPSBfUkVTVE9SRVIoKTtcclxuICAgIF9TVE9SRS5hZGRFbnRyaWVzKGVudHJpZXMpO1xyXG4gICAgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgaWYgKGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSkgdGhpcy51cGRhdGVOYW1lKGVudHJpZXMsIGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bWFya3MnLCBpbmZvLmVudHJpZXMpO1xyXG4gIH0sXHJcbiAgdXBkYXRlTmFtZShlbnRyaWVzLCByZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKHJlY2VudGx5T3BlbmVkRW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLm5hbWUgPSByZWNlbnRseU9wZW5lZEVudHJ5Lm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInOiAnc2V0TWFya2VyJ1xyXG4gICAgfVxyXG5cdH0sXHJcblxyXG4gIGhhbmRsZXI6IG51bGwsXHJcbiAgbWFya2VyOiAnbScsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRNYXJrZXIoa2V5KSB7XHJcbiAgICB0aGlzLm1hcmtlciA9IGtleTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkICYmICF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2VsZWN0ZWQgJiYgdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdGFydExpc3RlbmluZygpIHtcclxuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZXVwLmJpbmQodGhpcyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Nb3VzZXVwKCkge1xyXG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWVuZCcsIHRoaXMubWFya2VyKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0JPT0tNQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5hbmNob3IgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0KG1hcmspIHtcclxuICAgIG1hcmsgPSBtYXJrIHx8IHRoaXMubWFyaztcclxuXHJcbiAgICBsZXQgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcbiAgICAgICAgYW5jaG9yID0gd3JhcHBlcnNbMF07XHJcblxyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIGFuY2hvci5pZCA9ICd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcic7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG5cclxuICAgIHRoaXMubWFyayA9IG1hcms7XHJcbiAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgbGV0IG1hcmsgPSB0aGlzLm1hcmssXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3IsXHJcbiAgICAgICAgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGg7XHJcblxyXG4gICAgYW5jaG9yLmlkID0gJyc7XHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG4gIHNjcm9sbEludG9WaWV3KGJtKSB7XHJcbiAgICBpZiAoYm0gfHwgKGJtID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpKSlcclxuICAgICAgYm0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdhY3RpdmF0ZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2ZTogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcclxuICB9LFxyXG5cclxuICBhY3RpdmF0ZShvbikge1xyXG4gICAgaWYgKG9uICYmICF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlcigpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghb24gJiYgdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlZ2lzdGVySGFuZGxlcigpIHtcclxuICAgIHRoaXMuYWRkTGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKSB7XHJcbiAgICAgICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIF9TVE9SRS50bWlkID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0sIHdpbmRvdy5kb2N1bWVudCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IobWFya2VyLCBrZXksIHByZVNldHRpbmdzLCBpbW11dCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiwgZGVmYXVsdHM7XHJcblxyXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XHJcblx0XHRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG1hcmtlci5zZWxlY3Rpb247XHJcbiAgICB0aGlzLmltbXV0ID0gX1NUT1JFLnJlZGVzY3JpYmluZyA/IG1hcmtlci5pc0ltbXV0IDogaW1tdXQ7XHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgYm9va21hcms6IGZhbHNlLFxyXG4gICAgICBjb25kczogbnVsbCxcclxuICAgICAgdGV4dDogc2VsZWN0aW9uLnRleHQsXHJcbiAgICAgIG5vdGU6IG51bGxcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBkIGluIGRlZmF1bHRzKSB7XHJcbiAgICAgIGlmICghcHJlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoZCkpIHtcclxuICAgICAgICBwcmVTZXR0aW5nc1tkXSA9IGRlZmF1bHRzW2RdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVTZXR0aW5ncy5pZCA9IHByZVNldHRpbmdzLmlkIHx8ICsrbWFya2VyLmlkY291bnQ7XHJcblx0XHR0aGlzLmlkID0gcHJlU2V0dGluZ3MuaWQ7XHJcblx0XHR0aGlzLnNpbXBsZSA9IHNlbGVjdGlvbi5zaW1wbGU7XHJcblxyXG5cdFx0bGV0IHJhbmdlID0gdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5yYW5nZTtcclxuXHJcblx0XHR0aGlzLnN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQ7XHJcblx0XHR0aGlzLmVuZE9mZnNldCA9IHJhbmdlLmVuZE9mZnNldDtcclxuXHJcblx0XHR0aGlzLndyYXBwZXJzID0gbnVsbDtcclxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YSA9IHtcclxuXHRcdFx0aWQ6IHByZVNldHRpbmdzLmlkLFxyXG5cdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0c3R5bGU6IHByZVNldHRpbmdzLnN0eWxlLFxyXG5cdFx0XHRjb25kczogcHJlU2V0dGluZ3MuY29uZHMsXHJcblx0XHRcdHRleHQ6IHByZVNldHRpbmdzLnRleHQsXHJcblx0XHRcdGJvb2ttYXJrOiBwcmVTZXR0aW5ncy5ib29rbWFyayxcclxuICAgICAgbm90ZTogcHJlU2V0dGluZ3Mubm90ZSxcclxuICAgICAgc3luY2VkOiBwcmVTZXR0aW5ncy5zeW5jZWRcclxuXHRcdH07XHJcblxyXG4gICAgaWYgKHRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHtcclxuICAgICAgdGhpcy5kZXNjcmliZV9pbW11dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Y3JlYXRlKHJhbmdlKSB7XHJcbiAgICByYW5nZSA9IHJhbmdlIHx8IHRoaXMucmFuZ2U7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgc3R5bGUgPSB0aGlzLmtleURhdGEuc3R5bGUsXHJcbiAgICAgICAgbm9kZXMgPSBzZWxlY3Rpb24ubm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzIHx8IHRoaXMuY3JlYXRlV3JhcHBlcnMoc3R5bGUsIG4pLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIGxhc3RJbmRleCA9IG4gLSAxLFxyXG4gICAgICAgIG5vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICAgIGlmICghaSkgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgdGhpcy5zdGFydE9mZnNldCk7XHJcblxyXG4gICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KVxyXG4gICAgICAgIHJhbmdlLnNldEVuZChub2RlLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgICByYW5nZS5zdXJyb3VuZENvbnRlbnRzKHdyYXBwZXJzW2ldKTtcclxuICAgICAgdGhpcy5jb250YWluZXJzLnB1c2god3JhcHBlcnNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgICBub2RlLnBhcmVudE5vZGUubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbihsYXN0SW5kZXgpO1xyXG5cclxuICAgIGlmICh0aGlzLmtleURhdGEuYm9va21hcmspIHRoaXMubWFya2VyLnNldEJvb2ttYXJrKHRoaXMsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHRoaXMuZGVzY3JpYmUoKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbiAgcmVnaXN0ZXJDbGlja0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIGZvciAobGV0IHdyYXBwZXIgb2Ygd3JhcHBlcnMpIHtcclxuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya2VyLnByb3h5KHRoaXMsIHRoaXMub25DbGljayksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DbGljayhlKSB7XHJcbiAgICBsZXQgZXZlbnQ7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgZXZlbnQgPSAnY2xpY2tlZDptYXJrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZSArICdfMCc7XHJcbiAgICAgIGV2ZW50ID0gJ2FjdGl2YXRlZDptYXJrJztcclxuICAgIH1cclxuICAgIHRoaXMubWFya2VyLmVtaXQoZXZlbnQsIHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIGJvb2ttYXJrOiAhIXRoaXMua2V5RGF0YS5ib29rbWFyayxcclxuICAgICAgbm90ZTogISF0aGlzLmtleURhdGEubm90ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlZmluZVBvc2l0aW9uKG4sIGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgIGxldCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBuID0gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IHdyYXBwZXJzLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBmaXJzdFdyYXBwZXIgPSB3cmFwcGVyc1swXTtcclxuICAgIGNvbnN0IGxhc3RXcmFwcGVyID0gd3JhcHBlcnNbbl07XHJcbiAgICBjb25zdCBmaXJzdFBhcmVudCA9IGZpcnN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgbGFzdFBhcmVudCA9IGxhc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgYW5jaG9yUHJldiwgZm9jdXNQcmV2O1xyXG5cclxuICAgIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGZpcnN0UGFyZW50LCBmaXJzdFdyYXBwZXIsIHRydWUpIC0gMTtcclxuICAgIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQobGFzdFBhcmVudCwgbGFzdFdyYXBwZXIsIHRydWUpO1xyXG5cclxuICAgIGFuY2hvclByZXYgPSBmaXJzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgZm9jdXNQcmV2ID0gbGFzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgIGlmIChhbmNob3JQcmV2ICYmIGFuY2hvclByZXYubm9kZVR5cGUgPT09IDEpIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uICs9IDE7XHJcbiAgICBpZiAoIWZvY3VzUHJldiB8fCBmb2N1c1ByZXYubm9kZVR5cGUgPT09IDMgfHwgZmlyc3RQYXJlbnQgPT09IGxhc3RQYXJlbnQpIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gLT0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IDA7XHJcbiAgICBpZiAodGhpcy5mb2N1c05vZGVQb3NpdGlvbiA8IDApIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSAwO1xyXG5cclxuICAgIGlmIChpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSBhbmNob3JQcmV2ICYmIGFuY2hvclByZXYuZGF0YSA/IGFuY2hvclByZXYuZGF0YS5sZW5ndGggOiAwO1xyXG4gICAgICB0aGlzLmVuZE9mZnNldCA9IHRoaXMuc2ltcGxlID8gdGhpcy5zdGFydE9mZnNldCArIHRoaXMua2V5RGF0YS50ZXh0Lmxlbmd0aCA6IHRoaXMuZW5kT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24odW5kZWZpbmVkLCB0cnVlKVxyXG4gICAgICAgIC5kZXNjcmliZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHR1bmRvKCkge1xyXG5cdFx0bGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcblx0XHRcdFx0d3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzLFxyXG5cdFx0XHRcdHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcblx0XHRcdFx0Y29udGFpbmVyLCB3cmFwcGVyO1xyXG5cclxuXHRcdHdoaWxlICh3LS0pIHtcclxuXHRcdFx0Y29udGFpbmVyID0gY29udGFpbmVyc1t3XTtcclxuXHRcdFx0d3JhcHBlciA9IHdyYXBwZXJzW3ddO1xyXG5cdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XHJcblx0XHRcdGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRyZWRvKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY29udGFpbmVyc1swXS5jaGlsZE5vZGVzW3RoaXMuYW5jaG9yTm9kZVBvc2l0aW9uXSwgdGhpcy5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoY29udGFpbmVyc1tjb250YWluZXJzLmxlbmd0aCAtIDFdLmNoaWxkTm9kZXNbdGhpcy5mb2N1c05vZGVQb3NpdGlvbl0sIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uLmNvbGxlY3ROb2RlcygpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSgpO1xyXG5cdH1cclxuXHR3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGluY2x1ZGluZ1RleHROb2Rlcykge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHRsZXQgY2hpbGRyZW4gPSBpbmNsdWRpbmdUZXh0Tm9kZXMgfHwgY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdFx0XHRjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0XHRcdGkgPSAwO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblx0Y3JlYXRlV3JhcHBlcnMoc3R5bGUsIG51bWJlcikge1xyXG5cdFx0bGV0IHdyYXBwZXJzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgd3JhcHBlcjtcclxuXHJcblx0XHRmb3IgKCA7IGkgPCBudW1iZXI7IGkrKykge1xyXG5cdFx0XHR3cmFwcGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZS5yZXBsYWNlKC87L2csICchaW1wb3J0YW50OycpKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnLCB0aGlzLmlkICsgJ18nICsgaSk7XHJcbiAgICAgIC8vd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NvbnRleHRtZW51JywgJ3RleHRtYXJrZXItY3RtJyk7XHJcblx0XHRcdHdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gd3JhcHBlcnM7XHJcblx0fVxyXG4gIGRlc2NyaWJlKCkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcblx0XHRjb25zdCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xyXG5cdFx0Y29uc3QgZW5kID0gcmFuZ2UuZW5kQ29udGFpbmVyO1xyXG5cdFx0Y29uc3Qgc2luZ2xlTm9kZSA9IHRoaXMuc2ltcGxlO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy53cmFwcGVyc1swXS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgcGFyZW50SXNUTSA9IHBhcmVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuXHRcdGNvbnN0IGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgZ3JhbmRncmFtcGEgPSBncmFtcGEucGFyZW50Tm9kZSB8fCAwO1xyXG5cdFx0Y29uc3QgZlROUCA9IHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuXHRcdFx0bzogdGhpcy5zdGFydE9mZnNldCxcclxuXHRcdFx0bjE6IHBhcmVudElzVE0gPyAnVE0nIDogcGFyZW50Lm5vZGVOYW1lLFxyXG5cdFx0XHRwMTogZlROUCxcclxuXHRcdFx0bjI6IGdyYW1wYS5ub2RlTmFtZSxcclxuXHRcdFx0cDI6IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCksXHJcblx0XHRcdHAzOiBncmFuZGdyYW1wYSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYSwgZ3JhbXBhKSA6IHVuZGVmaW5lZCxcclxuXHRcdFx0cDQ6IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEucGFyZW50Tm9kZSwgZ3JhbmRncmFtcGEpIDogdW5kZWZpbmVkXHJcblx0XHR9O1xyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuXHR9XHJcbiAgZGVzY3JpYmVfaW1tdXQoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBsZXQgc3RhcnQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBlbmQgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChzdGFydCAhPT0gYm9keSkge1xyXG4gICAgICBzdGFydFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKHN0YXJ0LnBhcmVudE5vZGUsIHN0YXJ0KSk7XHJcbiAgICAgIHN0YXJ0ID0gc3RhcnQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHdoaWxlIChlbmQgIT09IGJvZHkpIHtcclxuICAgICAgZW5kUG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoZW5kLnBhcmVudE5vZGUsIGVuZCkpO1xyXG4gICAgICBlbmQgPSBlbmQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgIHA6IHN0YXJ0UG9zaXRpb25cclxuICAgICAgfSxcclxuICAgICAgZToge1xyXG4gICAgICAgIG86IHRoaXMuZW5kT2Zmc2V0LFxyXG4gICAgICAgIHA6IGVuZFBvc2l0aW9uXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgfVxyXG5cdH0sXHJcblxyXG4gIGhhbmRsZXI6IG51bGwsXHJcbiAgYXBwZW5kZWQ6IGZhbHNlLFxyXG4gIGhlaWdodDogMCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAncG9wdXAnO1xyXG4gICAgICB0aGlzLm1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cCcpO1xyXG4gICAgY29uc3QgYmdDb2xvclJlZ0V4cCA9IC9iYWNrZ3JvdW5kLWNvbG9yOigjW2EtZjAtOV17Nn0pLztcclxuICAgIGxldCBiZ0NvbG9yLCBjb2xvckJ0bjtcclxuICAgIGZvciAobGV0IG0gaW4gdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgIGJnQ29sb3IgPSB0aGlzLm1hcmtlcnNbbV0uc3R5bGUubWF0Y2goYmdDb2xvclJlZ0V4cCk7XHJcbiAgICAgIGlmIChiZ0NvbG9yKSB7XHJcbiAgICAgICAgY29sb3JCdG4gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cGNvbG9yJyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JCdG4pO1xyXG4gICAgICAgIGNvbG9yQnRuLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yLnBvcCgpO1xyXG4gICAgICAgIGNvbG9yQnRuLmlkID0gJ3RtcG9wdXBjb2xvci0tJyArIG07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93KCkge1xyXG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBwb3B1cC5zdHlsZTtcclxuICAgIGxldCBwb3B1cEhlaWdodDtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNlZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0aW9uUG9zaXRpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IHNlbGVjdGlvblBvc2l0aW9uLnRvcCAtIHNlbGVjdGlvblBvc2l0aW9uLmhlaWdodCArIHdpbmRvdy5zY3JvbGxZICsgJ3B4JztcclxuICAgICAgc3R5bGUubGVmdCA9IHNlbGVjdGlvblBvc2l0aW9uLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCArICdweCc7XHJcblxyXG4gICAgICBwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IE1hdGgubWF4KDAsIHBhcnNlSW50KHN0eWxlLnRvcCkgLSBwb3B1cEhlaWdodCkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0KSAhPT0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSArIHBvcHVwSGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWlnaHQgPSBwb3B1cEhlaWdodDtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKCFzZWxlY3RlZCkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTW91c2Vkb3duKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSAnVE1QT1BVUENPTE9SJykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJywgZWwuaWQuc3BsaXQoJy0tJykucG9wKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLIGZyb20gJy4vbWFyay1pdGVtJ1xyXG5pbXBvcnQgX0JPT0tNQVJLIGZyb20gJy4vYm9va21hcmsnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG5cdFx0RU5WOiB7XHJcblx0XHRcdCdzZXQ6ZW50cmllcyc6ICd1cGRhdGVJRCcsXHJcblx0XHRcdCdwcmVzc2VkOm1hcmtlci1rZXknOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAncHJlc3NlZDpob3RrZXknOiAnb25Ib3RrZXknLFxyXG4gICAgICAnY2xpY2tlZDpwb3B1cC1tYXJrZXInOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnc2VsZWN0aW9uLWVuZCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdyZWNyZWF0ZScsXHJcbiAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdjdHg6LWInOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAnY3R4OmQnOiAncmVtb3ZlJyxcclxuICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ2N0eDpuJzogJ2FkZE5vdGUnLFxyXG4gICAgICAnY3R4OmMnOiAnY29weScsXHJcbiAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J2NoYW5nZWQ6bm90ZS1jb2xvcic6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgJ2NoYW5nZWQ6bm90ZS1zaXplJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyayc6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JzogJ2ltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJzogJ3NhdmUnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJzogJ3VuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JzogJ2NvcHknLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdvbkhhc2hDaGFuZ2UnXHJcblx0XHR9XHJcblx0fSxcclxuXHRzZWxlY3Rpb246IG51bGwsXHJcblx0ZG9uZTogW10sXHJcblx0dW5kb25lOiBbXSxcclxuXHR2aXN1YWxseU9yZGVyZWRNYXJrczogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgYm9va21hcms6IG51bGwsXHJcbiAgcmVtb3ZlZEJvb2ttYXJrOiBudWxsLFxyXG5cdGlkY291bnQ6IDAsXHJcblx0bWFya1Njcm9sbFBvczogLTEsXHJcblxyXG4gIHVwZGF0ZUlEKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICBjb25zdCBpZHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuXHJcbiAgICAgIGlmICghbG9ja2VkICYmIGVudHJ5LmlkY291bnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya3MgPSAoZW50cnkubWFya3MgfHwgW10pLmNvbmNhdChlbnRyeS5sb3N0IHx8IFtdKSxcclxuICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgIHdoaWxlIChkLS0pIHtcclxuICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pZGNvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaWRzKTtcclxuICB9LFxyXG5cdG1hcmsoa2V5LCBkYXRhLCBpbW11dCkge1xyXG5cdFx0dGhpcy51bmRvbmUubGVuZ3RoID0gMDtcclxuXHJcbiAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgIGlmIChkYXRhLmF1dG9ub3RlKSB0aGlzLmVtaXQoJ2FkZDpub3RlJywgbWFyaywgZGF0YS5hdXRvbm90ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG1hcms7XHJcblx0fSxcclxuXHR1bmRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0aWYgKGRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmUucG9wKCk7XHJcbiAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgIHRoaXMudW5kb25lLnB1c2gobWFyay51bmRvKCkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYm9va21hcmspIHRoaXMudW5kb0Jvb2ttYXJrKCk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG5cdHJlZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0aWYgKHVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMudW5kb25lLnBvcCgpO1xyXG5cclxuICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgW21hcmtdKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG4gIGN1dE91dChpKSB7XHJcbiAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICBpbmRpY2VzID0gW2ldLFxyXG4gICAgICAgIG1hcmssIHNtYWxsZXN0SUQ7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICBmb3IgKHZhciB4ID0gaiArIDE7IHggPCBsOyB4KyspIHtcclxuICAgICAgICBtYXJrID0gZG9uZVt4XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgaWYgKCF0b0JlUmVtb3ZlZC5pbmNsdWRlcyh4KSkgdG9CZVJlbW92ZWQucHVzaCh4KTtcclxuICAgICAgICAgIGluZGljZXMucHVzaCh4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW5kaWNlcy5zb3J0KCk7XHJcbiAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xyXG4gICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG4gICAgc21hbGxlc3RJRCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHRvQmVSZW1vdmVkKTtcclxuXHJcbiAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5zcGxpY2UodG9CZVJlbW92ZWQucG9wKCksIDEpWzBdLnVuZG8oKTtcclxuICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNtYWxsZXN0SUQ7XHJcbiAgfSxcclxuICByZW1vdmUoaWQpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgaWQgPSBpZCA/IGlkIDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICBsZXQgbWFyayA9IHRoaXMuZ2V0QnlJZChpZC5zcGxpdCgnXycpWzBdKSxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICBwb3NpdGlvbiA9IGRvbmUuaW5kZXhPZihtYXJrKSxcclxuICAgICAgICBzbWFsbGVzdElELCBpO1xyXG5cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgdGhpcy51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMudW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLnVuZG9uZS5sZW5ndGgpIHRoaXMucmVkbyh0cnVlKTtcclxuXHJcbiAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZFswXSk7XHJcbiAgfSxcclxuICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpXHJcbiAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gaGlnaGxpZ2h0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShoaWdobGlnaHQudGV4dENvbnRlbnQpLCBoaWdobGlnaHQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb25lID0gW107XHJcbiAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gW107XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IC0xO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgncmVzdW1lZDptYXJrZXJzJywgZW50cnkpO1xyXG4gIH0sXHJcbiAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICB0aGlzLmlzSW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gdHJ1ZTtcclxuICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgfSxcclxuICBzYXZlKCkge1xyXG4gICAgY29uc3QgaWZyYW1lID0gX1NUT1JFLmlmcmFtZTtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcblxyXG4gICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICBpZiAoX1NUT1JFLmlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGlmICghbG9ja2VkICYmIG5hbWluZyA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGlmcmFtZSA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgIGlmIChfU1RPUkUubmFtZSkgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBjb25maXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG4gICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cdH0sXHJcbiAgYXV0b3NhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgndW5zYXZlZC1jaGFuZ2VzJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNvcHkoKSB7XHJcbiAgICBjb25zdCBtYXJrID0gdGhpcy5maW5kTWFyaygpO1xyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCByYW5nZSA9IG1hcmsucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBtYXJrLnNlbGVjdGlvbi5zZWxmO1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KHdyYXBwZXJzWzBdLCAwKTtcclxuICAgIHJhbmdlLnNldEVuZCh3cmFwcGVyc1t3cmFwcGVycy5sZW5ndGggLSAxXSwgMSk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2VsZWN0aW9uLnRvU3RyaW5nKCkudHJpbSgpLnJlcGxhY2UoLyhcXHJcXG4pezEsfS9nLCAnXFxyXFxuJykpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gIH0sXHJcbiAgc3RvcmUobWFyaywgc2F2ZSwgb3JkZXIpIHtcclxuXHRcdHRoaXMuZG9uZS5wdXNoKG1hcmspO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHRpZiAob3JkZXIpIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblx0fSxcclxuICByZWNyZWF0ZShtYXJrKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcbiAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgfSxcclxuICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnY29tcGxldGVkOnJlc3RvcmF0aW9uLXByb2Nlc3MnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoX1NUT1JFLm5hbWUgPT09IG1hcmsua2V5RGF0YS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvTWFyayhtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3J0QnlJZCgpO1xyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5yZWRlc2NyaWJpbmcpIHtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnY29tcGxldGVkOnJlc3RvcmF0aW9uLXByb2Nlc3MnKTtcclxuICB9LFxyXG4gIGFkZE5vdGUoaWQpIHtcclxuICAgIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCB0aGlzLmZpbmRNYXJrKGlkKSk7XHJcbiAgfSxcclxuICBzYXZlTm90ZShpZCkge1xyXG4gICAgaWYgKCFfU1RPUkUubG9ja2VkKSByZXR1cm4gdGhpcy5hdXRvc2F2ZSgpO1xyXG5cclxuICAgIGNvbnN0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQpLmtleURhdGE7XHJcbiAgICBjb25zdCBzeW5jZWQgPSB0eXBlb2YgbWFyay5zeW5jZWQgPT09ICdib29sZWFuJyA/IG1hcmsuc3luY2VkIDogX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICBtYXJrczogW21hcmtdLFxyXG4gICAgICBuYW1lOiBtYXJrLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSksXHJcbiAgICAgIHN5bmNlZFxyXG4gICAgfTtcclxuICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGdvdG9NYXJrKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtFbGVtZW50cyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3M7XHJcbiAgICBsZXQgZWwsIHBvcywgaWQ7XHJcbiAgICBpZiAobWFyayB8fCBtYXJrID09PSAwKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSBtYXJrICsgMTtcclxuICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1ttYXJrXTtcclxuICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG4gICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQ9XCInICsgaWQgKyAnXzBcIl0nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9zID0gdGhpcy5tYXJrU2Nyb2xsUG9zO1xyXG4gICAgICBlbCA9IG1hcmtFbGVtZW50c1twb3NdO1xyXG4gICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuXHJcblx0XHRpZiAoIW1hcmsgfHwgdHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB0aGlzLmdldEJ5SWQoaWQpLm9uQ2xpY2soaWQpO1xyXG4gICAgdGhpcy5pbmRpY2F0ZU1hcmsoaWQpO1xyXG4gIH0sXHJcblx0Z290b05leHRNYXJrKGRpcikge1xyXG5cdFx0Y29uc3QgbCA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubGVuZ3RoO1xyXG5cclxuXHRcdHRoaXMubWFya1Njcm9sbFBvcyArPSBkaXI7XHJcblxyXG5cdFx0aWYgKHRoaXMubWFya1Njcm9sbFBvcyA8IDApIHRoaXMubWFya1Njcm9sbFBvcyA9IGwgLSAxO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5tYXJrU2Nyb2xsUG9zID49IGwpIHRoaXMubWFya1Njcm9sbFBvcyA9IDA7XHJcblxyXG5cdFx0dGhpcy5nb3RvTWFyaygpO1xyXG5cdH0sXHJcbiAgaW5kaWNhdGVNYXJrKGlkKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpXHJcbiAgICAgIC5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgY29uc3QgdG1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZF49XCInICsgaWQgKyAnX1wiXScpKTtcclxuXHJcbiAgICB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSksIDIwMDApO1xyXG4gIH0sXHJcbiAgc2V0Qm9va21hcmsobSwgc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrLFxyXG4gICAgICAgIG1hcmsgPSB0aGlzLmZpbmRNYXJrKG0pO1xyXG5cclxuICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChib29rbWFyaykge1xyXG4gICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib29rbWFyayA9IG5ldyBfQk9PS01BUksoKS5zZXQobWFyayk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdhZGRlZDpib29rbWFyaycpO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICB1bmRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgaWYgKCFib29rbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IGJvb2ttYXJrO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoYm9va21hcmspIGJvb2ttYXJrLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkLCBwb3MpIHtcclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lLFxyXG5cdFx0XHQgIGQgPSBkb25lLmxlbmd0aCxcclxuXHRcdFx0ICBtYXJrO1xyXG5cclxuXHRcdHdoaWxlIChkLS0pIHtcclxuXHRcdFx0bWFyayA9IGRvbmVbZF07XHJcblxyXG5cdFx0XHRpZiAobWFyay5rZXlEYXRhLmlkID09IGlkKVxyXG5cdFx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG1hcmssIHBvc2l0aW9uOiBkIH0gOiBtYXJrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbnVsbCwgcG9zaXRpb246IG51bGwgfSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0ZmluZE1hcmsoeCkge1xyXG5cdFx0eCA9IHggPyB4IDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuXHRcdGxldCBtYXJrID0gIXggP1xyXG5cdFx0XHR0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdIDpcclxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ3N0cmluZycgP1xyXG5cdFx0XHR0aGlzLmdldEJ5SWQoeC5zcGxpdCgnXycpWzBdKSA6XHJcblx0XHRcdHg7XHJcblx0XHRyZXR1cm4gbWFyaztcclxuXHR9LFxyXG4gIHNvcnRCeUlkKCkge1xyXG4gICAgdGhpcy5kb25lLnNvcnQoKG1hcmsxLCBtYXJrMikgPT4gbWFyazEuaWQgLSBtYXJrMi5pZCk7XHJcbiAgfSxcclxuXHRvcmRlck1hcmtzVmlzdWFsbHkoKSB7XHJcblx0XHR0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZCQ9XCJfMFwiXScpKS5zb3J0KChtMSwgbTIpID0+IHtcclxuXHRcdFx0bGV0IGJiMSA9IG0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0YmIyID0gbTIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHR0b3AxID0gYmIxLnRvcCxcclxuXHRcdFx0XHRcdHRvcDIgPSBiYjIudG9wO1xyXG5cclxuXHRcdFx0aWYgKHRvcDEgPCB0b3AyKSByZXR1cm4gLTE7XHJcblx0XHRcdGVsc2UgaWYgKHRvcDIgPCB0b3AxKSByZXR1cm4gMTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGJiMS5sZWZ0IDwgYmIyLmxlZnQpIHJldHVybiAtMTtcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLm1hcChtYXJrID0+IHBhcnNlSW50KG1hcmsuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKTtcclxuICAgIGlmICghX1NUT1JFLmlmcmFtZSkgdGhpcy5lbWl0KCd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJywgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzKTtcclxuXHR9LFxyXG4gIG1hcmtzSW50ZXJzZWN0KG1hcmsxLCBtYXJrMikge1xyXG5cdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICBpZDEgPSBtYXJrMS5pZCxcclxuICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICB3MiwgdG1zLCBsO1xyXG5cclxuICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKHcyLS0pIHtcclxuICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG4gIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0bGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuXHJcblx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGtleSA9IGU7XHJcblx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGtleSA9IGtleSB8fCAnbSc7XHJcblx0XHR9XHJcblxyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldykge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6ICEhc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBfU1RPUkUuaW1tdXQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgfSk7XHJcblx0fSxcclxuICBvbkhvdGtleShrZXkpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHNlbGYucmVkbygpOyBicmVhaztcclxuICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93dXAnOiBzZWxmLmdvdG9OZXh0TWFyaygtMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhcnJvd2Rvd24nOiBzZWxmLmdvdG9OZXh0TWFyaygxKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYyc6IHNlbGYuY29weSgpOyBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRyZXRyaWV2ZUVudHJ5KCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgY29uc3QgbmFtZSA9IF9TVE9SRS5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0ZW50cnkubGFzdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0ZW50cnkuY291bnQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcblx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICBpZiAoaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcbiAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgaXNOZXcgfHwgIWVudHJ5Lm5hbWUgPyBuYW1lIDogZW50cnkubmFtZTtcclxuXHJcblx0XHRyZXR1cm4gZW50cnk7XHJcblx0fSxcclxuICBjb2xsZWN0TWFya3MoKSB7XHJcbiAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICBjb25zdCBtYXJrcyA9IFtdO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgIH1cclxuXHJcbiAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdGtEID0gZG9uZVttXS5rZXlEYXRhO1xyXG4gICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdH1cclxuICAgIHJldHVybiBtYXJrcztcclxuICB9LFxyXG4gIG9uSGFzaENoYW5nZSgpIHtcclxuICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZnMgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmZzID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5mcyB8fCBfU1RPUkUubm90ZUZvbnRTaXplO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZU5vdGVFbGVtZW50KCkge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZScpO1xyXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWhlYWRlcicpO1xyXG4gICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlYWN0aW9ucycpO1xyXG4gICAgICBjb25zdCBkZWwgPSB0aGlzLmRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWRlbGV0ZScpO1xyXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLm1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZW1pbmltaXplJyk7XHJcbiAgICAgIGNvbnN0IGdlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjdXN0b21pemUnKTtcclxuICAgICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMucGFsZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXBhbGV0dGUnKTtcclxuICAgICAgY29uc3QgcCA9IHRoaXMudGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0O1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yIHx8IF9TVE9SRS5ub3RlQ29sb3I7XHJcbiAgICAgIF9TVE9SRS5ub3RlQ29sb3IgPSBjb2xvcjtcclxuICAgICAgY29uc3QgZGVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgICAgY29uc3QgbWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDEzKSk7XHJcbiAgICAgIGNvbnN0IGdlYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDI2OTkpKTtcclxuXHJcbiAgICAgIFsnZ3JlZW4nLCAnd2hpdGUnLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnLCAncHVycGxlJywgJ2JsdWUnLCAndHVycXVvaXNlJ10uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBsZXQgY29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjb2xvcicpO1xyXG4gICAgICAgIGNvbG9yLmNsYXNzTmFtZSA9ICd0bW5vdGVjb2xvci0tJyArIGM7XHJcbiAgICAgICAgY29sb3Iuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgYyk7XHJcbiAgICAgICAgcGFsZXR0ZS5hcHBlbmRDaGlsZChjb2xvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0tbm90ZScsIHRydWUpO1xyXG4gICAgICBkZWwuYXBwZW5kQ2hpbGQoZGVsVGV4dCk7XHJcbiAgICAgIG1pbi5hcHBlbmRDaGlsZChtaW5UZXh0KTtcclxuICAgICAgZ2Vhci5hcHBlbmRDaGlsZChnZWFyVGV4dCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChnZWFyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKG1pbik7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICBpZiAodGV4dCkgcC52YWx1ZSA9IHRleHQ7XHJcblxyXG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHRoaXMuYXR0ZW1wdFVwZGF0ZShlLCBlLnRhcmdldCwgdHJ1ZSksIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0gJyc7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBhdHRlbXB0VXBkYXRlKGUsIGVsLCBmb3JjZSkge1xyXG4gICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXRoaXMucmVjZW50bHlVcGRhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlKGVsKSwgMzAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZWwpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0ID0gZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93KCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGlubmVyV2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgIGxldCBwb3MsIGxlZnQsIHRvcDtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBvcy5sICE9PSBudWxsKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5wb3M7XHJcbiAgICAgICAgdG9wID0gcG9zLnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG4gICAgICAgIHRvcCA9IHRoaXMucG9zLnQgPSBwb3MudCArIHBvcy5vZmZzZXQ7XHJcbiAgICAgIH1cclxuICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBwb3MubDtcclxuXHJcbiAgICAgIGlmIChsZWZ0ICsgMzQwID4gaW5uZXJXaW5kb3dXaWR0aCkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gaW5uZXJXaW5kb3dXaWR0aCAtIDM0MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZS53ID8gYHdpZHRoOiR7dGhpcy5zaXplLnd9O2hlaWdodDoke3RoaXMuc2l6ZS5ofTtgIDogJyc7XHJcbiAgICAgIGNvbnN0IGZvbnRTaXplID0gYGZvbnQtc2l6ZTogJHt0aGlzLmZzfXB4ICFpbXBvcnRhbnQ7YDtcclxuXHJcbiAgICAgIEJPRFkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGRpc3BsYXk6YmxvY2s7dG9wOiR7dG9wfXB4O2xlZnQ6JHtsZWZ0fXB4O2ApO1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgKHNpemUgKyBmb250U2l6ZSkpO1xyXG4gICAgICB0aGlzLmNvbm5lY3RNdXRhdGlvbk9ic2VydmVyKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYnJpbmdVcEZyb250KCkge1xyXG4gICAgICBBcnJheS5mcm9tKEJPRFkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpKS5mb3JFYWNoKG5vdGUgPT4ge1xyXG4gICAgICAgIGlmIChub3RlID09PSB0aGlzLmVsKSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDc7XHJcbiAgICAgICAgZWxzZSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDY7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKSB7XHJcbiAgICAgIEJPRFkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKHRoaXMudmlzaWJsZSkgdGhpcy5oaWRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUGFsZXR0ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLnBhbGV0dGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldHRpbmdzTW9kZSA9ICF0aGlzLnNldHRpbmdzTW9kZTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb2xvcihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tJyArIHRoaXMuY29sb3IpO1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSBfU1RPUkUubm90ZUNvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgIHRoaXMudG9nZ2xlUGFsZXR0ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1jb2xvcicsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZE1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ25vdGVvbmNsaWNrJykudGhlbihub3Rlb25jbGljayA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGVvbmNsaWNrKSB7XHJcbiAgICAgICAgICBpZiAoISF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5tYXJrQ2xpY2tIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHRoaXMubWFyay53cmFwcGVycykge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGUnKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlTWFya0xpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya0xpc3RlbmVycygpIHtcclxuICAgICAgaWYgKCF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb25uZWN0TXV0YXRpb25PYnNlcnZlcigpIHtcclxuICAgICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddIH07XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyIHx8IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5zYXZlU2l6ZSkpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRleHRhcmVhLCBjb25maWcpO1xyXG4gICAgfSxcclxuICAgIGdldFBvc2l0aW9uKCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5tYXJrLndyYXBwZXJzW3RoaXMubWFyay53cmFwcGVycy5sZW5ndGggLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0OiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIEJPRFkuY2xpZW50VG9wLFxyXG4gICAgICAgIGw6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIEJPRFkuY2xpZW50TGVmdCxcclxuICAgICAgICBvZmZzZXQ6IHJlY3QuaGVpZ2h0XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgb25EcmFnU3RhcnQoZSwgZWwpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRyYWdEWCA9IGUucGFnZVggLSB0aGlzLnBvcy5sO1xyXG4gICAgICB0aGlzLmRyYWdEWSA9IGUucGFnZVkgLSB0aGlzLnBvcy50O1xyXG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0OmRyYWcnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIG9uRHJhZyhub3RlLCBlKSB7XHJcbiAgICAgIGlmIChub3RlID09PSB0aGlzLm1hcmsuaWQpIHtcclxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvcy5sID0gZS5wYWdlWCAtIHRoaXMuZHJhZ0RYO1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvcy50ID0gZS5wYWdlWSAtIHRoaXMuZHJhZ0RZO1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EcmFnRW5kKCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnBvcyA9IHRoaXMucG9zO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1wb3MnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIHNhdmVTaXplKG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBtdXRhdGlvbnNMaXN0WzBdLnRhcmdldC5zdHlsZTtcclxuICAgICAgdGhpcy5zaXplID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5zaXplID0geyB3OiBzdHlsZS53aWR0aCwgaDogc3R5bGUuaGVpZ2h0IH07XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLXNpemUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTk9URSBmcm9tICcuL25vdGUnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3JlbW92ZU5vdGVTdG9yYWdlJyxcclxuICAgICAgJ3Jlc3RvcmU6bm90ZXMnOiAncmVzdG9yZScsXHJcbiAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICd0b2dnbGU6bm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlU3R5bGUnLFxyXG4gICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kTm90ZXNTdGF0ZScsXHJcbiAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ3JlcG9ydCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBub3Rlczoge30sXHJcbiAgdG9nZ2xlOiBudWxsLFxyXG4gIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gIGRyYWdTdG9wSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICB9LFxyXG4gIGFkZChtYXJrLCBjb2xvcikge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZXNbbWFyay5pZF07XHJcbiAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICBpZiAoIV9TVE9SRS5yZXN0b3JpbmcpIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgcmV0dXJuIHRoaXMubm90ZXNbbWFyay5pZF0gPSBuZXcgX05PVEUobWFyaywgY29sb3IpO1xyXG4gIH0sXHJcbiAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgZm9yIChsZXQgbWFyayBvZiBtYXJrcykge1xyXG4gICAgICBpZiAobWFyay5rZXlEYXRhLm5vdGUpIHtcclxuICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkQW5kU2hvdyhtYXJrLCBjb2xvcikge1xyXG4gICAgdGhpcy5hZGQobWFyaywgY29sb3IpLnNob3coKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGVTdG9yYWdlKGlkKSB7XHJcbiAgICBkZWxldGUgdGhpcy5ub3Rlc1tpZF07XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQWxsKCkge1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICBjb25zdCBub3RlcyA9IHRoaXMubm90ZXM7XHJcbiAgICBsZXQgbWV0aCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlJykubGVuZ3RoID8gJ2hpZGUnIDogJ3Nob3cnLFxyXG4gICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICBub3RlO1xyXG4gICAgZm9yIChsZXQgbiBpbiBub3Rlcykge1xyXG4gICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgIGlmIChub3RlLnZpc2libGUgPT09IGNvbmRpdGlvbikge1xyXG4gICAgICAgIG5vdGVbbWV0aF0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlU3R5bGUoKSB7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncyAmJiBzZXR0aW5ncy5taXNjKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcCkgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXBsYWludmlldykgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS1wbGFpbi12aWV3Jyk7XHJcbiAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgICBfU1RPUkUubm90ZUZvbnRTaXplID0gc2V0dGluZ3MubWlzYy5ub3RlZm9udHNpemUgfHwgMTI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgaXNFbXB0eShvYmopIHtcclxuICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbiAgfSxcclxuICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIgPSAoZSkgPT4gdGhpcy5lbWl0RHJhZ0V2ZW50KG5vdGUsIGUpO1xyXG4gICAgY29uc3QgZHJhZ1N0b3BIYW5kbGVyID0gdGhpcy5kcmFnU3RvcEhhbmRsZXIgPSAoZSkgPT4gdGhpcy5zdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpO1xyXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gIH0sXHJcbiAgZW1pdERyYWdFdmVudChub3RlLCBlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bm90ZScsIG5vdGUsIGUpO1xyXG4gIH0sXHJcbiAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgdGhpcy5lbWl0KCdub3Rlcy1zdGF0ZScsICF0aGlzLmlzRW1wdHkodGhpcy5ub3RlcyksIGluZm8pO1xyXG4gIH0sXHJcbiAgcmVwb3J0KCkge1xyXG4gICAgdGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpIHx8IHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IHdpbmRvdy5kb2N1bWVudCxcclxuICBhdXRvUGF1c2U6IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb25zJzogJ3JlbW92ZUxpc3RlbmVycycsXHJcbiAgICAgICdjb21wbGV0ZWQ6cmVzdG9yYXRpb24tcHJvY2Vzcyc6ICdhZGRMaXN0ZW5lcnMnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGtleWRvd246IHtcclxuICAgICAgICAnKic6ICdkZWxlZ2F0ZSdcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgJyonOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZWxlY3Rpb25Db2xsYXBzZWQ6IHRydWUsXHJcbiAgc2hpZnRTZW5zaXRpdmVLZXlzOiBbMTMsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCAxNzEsIDE3M10sXHJcbiAga2V5Q29kZU1hcDoge1xyXG4gICAgJzEzJzogJ0VudGVyJyxcclxuICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgJzUzJzogJzUnLCAnNTQnOiAnNicsICc1NSc6ICc3JywgJzU2JzogJzgnLCAnNTcnOiAnOScsXHJcbiAgICAnMTcxJzogJysnLCAnMTczJzogJy0nXHJcbiAgfSxcclxuXHJcbiAgaXNFZGl0YWJsZShlbCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGVsLnRhZ05hbWU7XHJcblxyXG4gICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gIH0sXHJcbiAgZGVsZWdhdGUoZSkge1xyXG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlLFxyXG4gICAgICAgIG1vZEtleSA9IChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkpLFxyXG4gICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICBsb2NrZWRBY3Rpb25zID0gWydiJywgJ3MnLCAneScsICd6JywgJ2QnXSxcclxuICAgICAgICBmdW5jdGlvbktleXMgPSBsb2NrZWRBY3Rpb25zLmNvbmNhdChhcnJvd0tleXMpLmNvbmNhdCgnYycpLFxyXG4gICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkICYmIGxvY2tlZEFjdGlvbnMuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hpZnRTZW5zaXRpdmVLZXlzLmluY2x1ZGVzKGtleUNvZGUpKSBrZXkgPSB0aGlzLmtleUNvZGVNYXBba2V5Q29kZV07XHJcblxyXG4gICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUoZS50YXJnZXQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBjb25zdCBvcmlnS2V5ID0ga2V5O1xyXG4gICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICBjb25zdCBpc01hcmtlcktleSA9IG1hcmtlcnNba2V5XTtcclxuICAgICAgY29uc3QgaXNDdXN0b21NYXJrZXJLZXkgPSBpc01hcmtlcktleSAmJiAhZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICBjb25zdCBzZXR0aW5nID0gc2hvcnRjdXRzW2tleV07XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAndycgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5nWzFdKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgczEgPSBzaG9ydGN1dFswXTtcclxuICAgICAgICBjb25zdCBzMiA9IHNob3J0Y3V0WzFdO1xyXG5cclxuICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3ByZXNzZWQ6aG90a2V5Jywga2V5KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbkNvbGxhcHNlZCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZDtcclxuICAgIGlmICh0aGlzLnNlbGVjdGlvbkNvbGxhcHNlZCAhPT0gc2VsZWN0aW9uQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzZWxlY3Rpb24nLCAhc2VsZWN0aW9uQ29sbGFwc2VkKTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25Db2xsYXBzZWQgPSBzZWxlY3Rpb25Db2xsYXBzZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0luQ2h1bmtzKGRhdGEsIHByb2MsIGNiKSB7XHJcbiAgICBwcm9jID0gcHJvYy5iaW5kKHRoaXMpO1xyXG4gICAgY2IgPSBjYi5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdChmdW5jdGlvbiByZWMoKSB7XHJcblx0XHRcdGxldCBleHBpcmUgPSArbmV3IERhdGUoKSArIDUwMDtcclxuXHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHR0cnkge1xyXG4gICAgICAgICAgcHJvYyhkYXRhLnNoaWZ0KCkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdFx0fSB3aGlsZSAoZGF0YS5sZW5ndGggPiAwICYmIGV4cGlyZSA+ICtuZXcgRGF0ZSgpKTtcclxuXHJcblx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHJlYygpLCAwKTtcclxuXHRcdFx0ZWxzZSBjYigpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbiAgcmVwb3J0KCkge1xyXG4gICAgbGV0IGxsID0gdGhpcy5sb3N0Lmxlbmd0aDtcclxuICAgIGlmIChsbCkge1xyXG4gICAgICB3aGlsZShsbC0tKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubG9zdFtsbF0udGVtcDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ2xvc3Q6bWFya3MnLCB0aGlzLmZhaWx1cmVSZXBvcnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdmaW5pc2hlZDpyZXN0b3JhdGlvbicsIHRoaXMuZW50cnkubmFtZSwgdGhpcy5yZXN0b3JlZCwgdGhpcy5sb3N0LCB0aGlzLmFyZWEpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5jYWNoZSA9IFtdO1xyXG4gICAgdGhpcy5waGFzZSA9IDE7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsID0gMDtcclxuICAgIHRoaXMuY2h1bmtEdXJhdGlvbiA9IDUwMDtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICB0aGlzLm9vbSA9IGVudHJ5Lm1hcmtzLmxlbmd0aCA9PT0gMSAmJiBlbnRyeS5tYXJrc1swXS5pZCA9PSAxO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpbWVyKCkge1xyXG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICByZXR1cm4gdGltZXI7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZW50cnkgPSB0aGlzLmVudHJ5LFxyXG4gICAgICAgIG5vdyA9IFtdLCBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzLFxyXG4gICAgICAgIGwgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIG1hcms7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG5cclxuICAgICAgdGhpcy5jb252ZXJ0RGVzY3JpcHRpb24obWFyaykuY3JlYXRlVGVtcE9iamVjdChtYXJrKTtcclxuXHJcbiAgICAgIGlmIChtYXJrLmNvbmRzLm4xID09PSAnVE0nKSBwb3N0cG9uZWQucHVzaChtYXJrKTtcclxuICAgICAgZWxzZSBub3cucHVzaChtYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnF1ZXVlLnB1c2gobm93KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gcG9zdHBvbmVkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW3Bvc3Rwb25lZFtpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzdG9yZSgpO1xyXG4gIH1cclxuICBjb252ZXJ0RGVzY3JpcHRpb24obWFyaykge1xyXG4gICAgaWYgKHR5cGVvZiBtYXJrLmNvbmRzLm8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxldCBjb25kcyA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgICBjb252ZXJ0ZWRDb25kcyA9IHtcclxuICAgICAgICAgICAgbzogY29uZHMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgICAgIG4xOiBjb25kcy5maXJzdE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBuMjogY29uZHMuZmlyc3RQYXJlbnROb2RlTmFtZSxcclxuICAgICAgICAgICAgcDE6IGNvbmRzLmZpcnN0VGV4dE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDI6IGNvbmRzLmZpcnN0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMzogY29uZHMuZmlyc3RQYXJlbnROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHA0OiBjb25kcy5maXJzdEdyYW1wYU5vZGVQb3NpdGlvblxyXG4gICAgICAgICAgfTtcclxuICAgICAgZGVsZXRlIG1hcmsuY29uZHM7XHJcbiAgICAgIG1hcmsuY29uZHMgPSBjb252ZXJ0ZWRDb25kcztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjcmVhdGVUZW1wT2JqZWN0KG1hcmspIHtcclxuICAgIGxldCB0ZXh0ID0gbWFyay50ZXh0LFxyXG4gICAgICAgIHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCksXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gdGhpcy5zcXVlZXplKG1hcmsudGV4dCk7XHJcblxyXG4gICAgbWFyay50ZW1wID0ge1xyXG4gICAgICB0ZXh0TGVuZ3RoOiB0ZXh0Lmxlbmd0aCxcclxuICAgICAgdHJpbW1lZFRleHQ6IHRyaW1tZWRUZXh0LFxyXG4gICAgICB0cmltbWVkVGV4dExlbmd0aDogdHJpbW1lZFRleHQubGVuZ3RoLFxyXG4gICAgICBzcXVlZXplZFRleHQ6IHNxdWVlemVkVGV4dCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoOiBzcXVlZXplZFRleHQubGVuZ3RoLFxyXG4gICAgICBwb3NzaWJsZVBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRzOiB7fSxcclxuICAgICAgcG9zc2libGVGb2N1c09mZnNldHM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcmsuc3luY2VkID0gdGhpcy5lbnRyeS5zeW5jZWQ7XHJcbiAgfVxyXG4gIHJlc3RvcmUoKSB7XHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMikgdGhpcy5zb3J0UXVldWVCeUlkKCk7XHJcblxyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMucXVldWUuc2hpZnQoKSxcclxuICAgICAgICBsZW5ndGggPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcblxyXG4gICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldEJvZHlTZWxlY3Rpb24od2luZG93LmRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgICAuZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBoYXNlID09PSAxICYmIGxlbmd0aCA+IDEpXHJcbiAgICAgICAgICB0aGlzLnBvc3Rwb25lT3ZlcmxhcHBpbmdzKCk7XHJcblxyXG4gICAgICB0aGlzLmZpbmRQb3NzaWJsZUV4dHJlbWEoKVxyXG4gICAgICAgICAgLnJ1bGVPdXRNdWx0aXBsZXMoKVxyXG4gICAgICAgICAgLnJlc3RvcmVSYW5nZXMoKTtcclxuXHJcbiAgICAgIHRoaXMucGhhc2UrKztcclxuXHJcbiAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDwgK25ldyBEYXRlKCkpIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXN0b3JlKCksIDApO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gIH1cclxuICBzb3J0UXVldWVCeUlkKCkge1xyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICByZXMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBtYXJrLCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKCFtYXJrc1tsXS5sZW5ndGgpIGNvbnRpbnVlO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF1bMF07XHJcbiAgICAgIHRlbXBbbWFyay5pZF0gPSBtYXJrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG5cclxuICAgIGZvciAodCA9IHRlbXAubGVuZ3RoOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLnF1ZXVlLnB1c2goW3RlbXBbaV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsKSB7XHJcbiAgICBsZXQgdHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0LFxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3F1ZWV6ZWRUZXh0LCBzcXVlZXplZFRleHRMZW5ndGgsIHAsIGVuZFBvc2l0aW9uO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcCA9IHVuZGVmaW5lZDtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuXHJcbiAgICAgIGlmICghbWFya1RlbXApIHtcclxuICAgICAgICBtYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBlbmRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dDtcclxuICAgICAgICBzcXVlZXplZFRleHRMZW5ndGggPSBtYXJrVGVtcC5zcXVlZXplZFRleHRMZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChwICE9PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgcCA9IC0xO1xyXG4gICAgICAgICAgcCA9IHRyaW1tZWRTZWxlY3Rpb25UZXh0LmluZGV4T2Yoc3F1ZWV6ZWRUZXh0LCBwICsgMSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IHAgKyBzcXVlZXplZFRleHRMZW5ndGg7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucy5wb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMScpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgdGhpcy5tYXhQb3NpdGlvbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKHBvc2l0aW9ucykge1xyXG4gICAgbGV0IGwgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBwb3MsIHN0YXJ0LCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcG9zID0gcG9zaXRpb25zW2xdO1xyXG4gICAgICBzdGFydCA9IHBvc1swXTtcclxuXHJcbiAgICAgIGlmICh0ZW1wW3N0YXJ0XSkgdGVtcC5zcGxpY2Uoc3RhcnQgKyAxLCAwLCBwb3MpO1xyXG4gICAgICBlbHNlIHRlbXBbc3RhcnRdID0gcG9zO1xyXG4gICAgfVxyXG4gICAgdCA9IHRlbXAubGVuZ3RoO1xyXG4gICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW107XHJcblxyXG4gICAgZm9yICg7IGkgPCB0OyBpKyspXHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaCh0ZW1wW2ldKTtcclxuICB9XHJcbiAgcG9zdHBvbmVPdmVybGFwcGluZ3MoKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIHBvczEsIHBvczIsIGksIG0xLCBtMiwgaWQxLCBpZDIsIGlkO1xyXG5cclxuICAgIGlmIChwID4gMSkge1xyXG4gICAgICB3aGlsZSAocC0tID4gMSkge1xyXG4gICAgICAgIHBvczEgPSBwb3NpdGlvbnNbcCAtIDFdO1xyXG4gICAgICAgIHBvczIgPSBwb3NpdGlvbnNbcF07XHJcbiAgICAgICAgbTEgPSBwb3MxWzJdO1xyXG4gICAgICAgIG0yID0gcG9zMlsyXTtcclxuICAgICAgICBpZDEgPSBtMS5pZDtcclxuICAgICAgICBpZDIgPSBtMi5pZDtcclxuXHJcbiAgICAgICAgaWYgKGlkMSA9PT0gaWQyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHBvczFbMV0gPiBwb3MyWzBdICYmIHBvczFbMF0gPCBwb3MyWzFdKSB7XHJcblxyXG4gICAgICAgICAgaWYgKGlkMSA8IGlkMikge1xyXG4gICAgICAgICAgICBpZCA9IGlkMjtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTIpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQxO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMSk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IHA7IGkrKylcclxuICAgICAgICB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGN1dE91dEZvcihpZCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShwLS0pIHtcclxuICAgICAgaWYgKHBvc2l0aW9uc1twXVsyXS5pZCA9PT0gaWQpXHJcbiAgICAgICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnNwbGljZShwLCAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9zdHBvbmUobWFyaykge1xyXG4gICAgbGV0IHF1ZXVlID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gcXVldWUubGVuZ3RoLFxyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKHF1ZXVlW2xdWzBdID09PSBtYXJrKSB7XHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbHJlYWR5SW5jbHVkZWQpXHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbbWFya10pO1xyXG4gIH1cclxuICBmaW5kUG9zc2libGVFeHRyZW1hKCkge1xyXG4gICAgbGV0IG5vZGVzID0gdGhpcy5ib2R5VGV4dE5vZGVzLFxyXG4gICAgICAgIG4gPSBub2RlcyA/IG5vZGVzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgaW5kaWNlcyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwaGFzZSA9IHRoaXMucGhhc2UsXHJcbiAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlID0gW10sXHJcbiAgICAgICAgc2F0aXNmaWVkID0gW10sXHJcbiAgICAgICAgaSA9IDAsIGNoYXJzID0gMCxcclxuICAgICAgICBuZXh0U3RhcnRGb3VuZCwgZW5kaW5nc0luVGhpc05vZGUsXHJcbiAgICAgICAgbm9kZSwgbm9kZXNUZXh0LCBub2Rlc1RleHRMZW5ndGgsXHJcbiAgICAgICAgbWFyaywgZGlmZiwgbCwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIGUsIGYsIGlkLCBwLCBxLCB4LCBtLFxyXG4gICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQsIHN0YXJ0Rm91bmRGb3IsIHBvc3Rwb25lZCwgaGFzRW5kaW5nc0luVGhpc05vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBub2Rlc1RleHQgPSB0aGlzLnNxdWVlemUobm9kZS5kYXRhKTtcclxuICAgICAgbm9kZXNUZXh0TGVuZ3RoID0gbm9kZXNUZXh0Lmxlbmd0aDtcclxuICAgICAgY2hhcnMgKz0gbm9kZXNUZXh0TGVuZ3RoO1xyXG4gICAgICBsID0gaW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSBbXTtcclxuICAgICAgcG9zdHBvbmVkID0gW107XHJcbiAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBzdGFydFBvc2l0aW9uID0gaW5kaWNlc1tsXVswXTtcclxuICAgICAgICBlbmRQb3NpdGlvbiA9IGluZGljZXNbbF1bMV07XHJcbiAgICAgICAgbWFyayA9IGluZGljZXNbbF1bMl07XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yIHx8IFtdO1xyXG4gICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvciA9IG1hcmsudGVtcC5lbmRGb3VuZEZvciB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIW1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICBjaGFycyA+IHN0YXJ0UG9zaXRpb24gJiZcclxuICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoIDwgbWFyay50ZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGhhc0VuZGluZ3NJblRoaXNOb2RlICYmIGhhc0VuZGluZ3NJblRoaXNOb2RlLmlkIDwgbWFyay5pZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxICYmIGlkICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5wdXNoKHsgbm9kZTogbm9kZSwgcG9zOiBpIH0pO1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLnB1c2goc3RhcnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgc3RhcnRGb3VuZEZvci5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgIW1hcmsudGVtcC5lbmRGb3VuZEZvci5pbmNsdWRlcyhlbmRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIChjaGFycyAtIGVuZFBvc2l0aW9uKSA+PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5taW4uYXBwbHkobnVsbCwgc3RhcnRGb3VuZEZvcikgPCBpZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQgPSB0aGlzLmZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBlbmRQb3NpdGlvbiAtIChjaGFycyAtIG5vZGVzVGV4dExlbmd0aCkpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVGb2N1c09mZnNldHMucHVzaChwb3NzaWJsZUZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dID0ge1xyXG4gICAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiBwb3NzaWJsZUZvY3VzT2Zmc2V0LFxyXG4gICAgICAgICAgICAgIHBvczogaVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBjYWNoZS5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgICAgIHNhdGlzZmllZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBtYXJrO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCkgZm9yICh4ID0gMDsgeCA8IHA7IHgrKykgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW3hdKTtcclxuXHJcbiAgICAgIGlmIChjaGFycyA+IHRoaXMubWF4UG9zaXRpb24pIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKHBoYXNlICE9PSAxIHx8IHRoaXMub29tKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBtYXJrID0gdGhpcy5tYXJrc1tpXTtcclxuICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhtYXJrLmlkKSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8yJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBydWxlT3V0TXVsdGlwbGVzKCkge1xyXG4gICAgbGV0IGNhY2hlID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gY2FjaGUubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIHBvc3NpYmxlU3RhcnROb2RlcywgcCwgbm9kZSwgcGFyZW50LCBncmFtcGEsIGdyYW5kZ3JhbXBhLCBncmFuZGdyYW5kZ3JhbXBhLCBtYXRjaGVzLCBmYWlsZWQsIHEsXHJcbiAgICAgICAgcG9zc2libGVFbmRzLCBzdGFydEZvdW5kRm9yLCBjb25kcywgc3RhcnRPZmZzZXQsIHRlbXAsIHRleHRMZW5ndGgsIHN0YXJ0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IGNhY2hlW2ldO1xyXG4gICAgICBtYXRjaGVzID0gW107XHJcbiAgICAgIGZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICB0ZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXMgPSB0ZW1wLnBvc3NpYmxlU3RhcnROb2RlcztcclxuICAgICAgcG9zc2libGVFbmRzID0gdGVtcC5wb3NzaWJsZUVuZHM7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSB0ZW1wLnN0YXJ0Rm91bmRGb3JcclxuICAgICAgcCA9IHBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGg7XHJcbiAgICAgIGNvbmRzID0gbWFyay5jb25kcztcclxuICAgICAgc3RhcnRPZmZzZXQgPSBjb25kcy5vO1xyXG4gICAgICB0ZXh0TGVuZ3RoID0gdGVtcC50ZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgICAgd2hpbGUgKHAtLSkge1xyXG4gICAgICAgICAgbm9kZSA9IHBvc3NpYmxlU3RhcnROb2Rlc1twXS5ub2RlO1xyXG4gICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG5cclxuICAgICAgICAgIGlmICghZ3JhbXBhIHx8IGNvbmRzLnAzID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHAgPSAwO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAxKSBwID0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcSA9IG1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgcGFyZW50ID0gcG9zc2libGVTdGFydE5vZGVzW3FdLm5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbmRncmFtcGEgPSBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgKCFncmFuZGdyYW5kZ3JhbXBhIHx8IGNvbmRzLnA0ID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFuZGdyYW1wYSwgZ3JhbmRncmFtcGEpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAocG9zc2libGVFbmRzW3N0YXJ0Rm91bmRGb3JbcV1dLm9mZnNldCAtIHN0YXJ0T2Zmc2V0KSA9PT0gdGV4dExlbmd0aFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHAgPSBxO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcCkgcCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgcCA9IDA7XHJcblxyXG4gICAgICBwID0gcCB8fCAwO1xyXG5cclxuICAgICAgc3RhcnQgPSBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzW3BdO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlID0gc3RhcnQubm9kZTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uID0gc3RhcnQucG9zO1xyXG5cclxuICAgICAgdGhpcy5zZXRNYXRjaGluZ0VuZChtYXJrLCBwKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXRNYXRjaGluZ0VuZChtYXJrLCBwKSB7XHJcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yW3BdLFxyXG4gICAgICAgIGVuZCA9IG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl07XHJcblxyXG4gICAgbWFyay50ZW1wLmVuZE5vZGUgPSBlbmQubm9kZTtcclxuICAgIG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb24gPSBlbmQucG9zO1xyXG4gICAgbWFyay50ZW1wLmZvY3VzT2Zmc2V0ID0gZW5kLm9mZnNldDtcclxuICB9XHJcbiAgc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbWFyay5jb25kcyxcclxuICAgICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW1wYSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMCxcclxuICAgICAgICBzdGFydE9mZnNldCA9IGRlc2NyaXB0aW9uLm8sXHJcbiAgICAgICAgcmVsZXZhbnROb2RlVGV4dCA9IG5vZGUuZGF0YS5zdWJzdHJpbmcoc3RhcnRPZmZzZXQpLnRyaW0oKSxcclxuICAgICAgICBsID0gcmVsZXZhbnROb2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgbWFya1RleHQgPSBtYXJrLnRlbXAudHJpbW1lZFRleHQsXHJcbiAgICAgICAgbSA9IG1hcmsudGVtcC50cmltbWVkVGV4dExlbmd0aCxcclxuICAgICAgICB0ZXh0c01hdGNoO1xyXG5cclxuICAgIGlmIChtIDw9IGwpIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkpID09PSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkpID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRleHRzTWF0Y2ggJiZcclxuICAgICAgKHBhcmVudE5vZGUubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4xIHx8IChkZXNjcmlwdGlvbi5uMSA9PT0gJ1RNJyAmJiBwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSkgJiZcclxuICAgICAgKCFncmFtcGEgfHwgZ3JhbXBhLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMikgJiZcclxuICAgICAgdGhpcy53aGljaENoaWxkKHBhcmVudE5vZGUsIG5vZGUpID09PSBkZXNjcmlwdGlvbi5wMVxyXG4gICAgKTtcclxuICB9XHJcbiAgZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIG4pIHtcclxuICAgIGxldCBub2RlVGV4dCA9IG5vZGUuZGF0YSxcclxuICAgICAgICBsID0gbm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBjb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zcXVlZXplKG5vZGVUZXh0W2ldKSkgY291bnRlcisrO1xyXG5cclxuICAgICAgaWYgKGNvdW50ZXIgPT09IG4pIHJldHVybiAoL1xccyQvLnRlc3QobWFyay50ZXh0KSA/IGkgKyAyIDogaSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXN0b3JlUmFuZ2VzKCkge1xyXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBtYXJrcyA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3RhcnQsIGVuZCwgZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBzdGFydCA9IG1hcmtUZW1wLnN0YXJ0Tm9kZTtcclxuICAgICAgZW5kID0gbWFya1RlbXAuZW5kTm9kZTtcclxuICAgICAgZm9jdXNPZmZzZXQgPSBtYXJrVGVtcC5mb2N1c09mZnNldDtcclxuXHJcbiAgICAgIGlmICghc3RhcnQgfHwgIWVuZCB8fCAhKHR5cGVvZiBmb2N1c09mZnNldCA9PT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMycpIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCBtYXJrLmNvbmRzLm8pO1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKGVuZCwgZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAvL3NlbGVjdGlvbi5yZXN1bWUocmFuZ2UpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnJlY29sbGVjdE5vZGVzKG1hcmspO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIG1hcmsudGVtcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Qm9keVNlbGVjdGlvbihlbCkge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCsrO1xyXG5cclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oZWwpO1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uLnRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25UcmlhbCA8IDQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNldEJvZHlTZWxlY3Rpb24oZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gJyAnO1xyXG4gICAgICAgICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gW107XHJcbiAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMuc3F1ZWV6ZSh0aGlzLnNlbGVjdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSB0aGlzLnNlbGVjdGlvbi5ub2RlcyA/IHRoaXMuc2VsZWN0aW9uLm5vZGVzLnNsaWNlKCkgOiBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc3F1ZWV6ZSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykgPyB0ZXh0LnJlcGxhY2UoL1xcdHxcXHN8XFxufFxcci9nLCAnJykgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgY29udGV4dCkge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgY2hpbGRyZW4gPSBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0ICAgIGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHQgICAgcG9zID0gMCwgaSA9IDAsIGN1cnJlbnRDaGlsZDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgY3VycmVudENoaWxkID0gY2hpbGRyZW5baV07XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudENoaWxkID09PSBjaGlsZCkgcmV0dXJuIHBvcztcclxuXHJcblx0XHRcdGlmIChjb250ZXh0KSB7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZC5ub2RlTmFtZSA9PT0gY29udGV4dCkgcG9zKys7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgIGlmICghKGN1cnJlbnRDaGlsZC5ub2RlVHlwZSA9PT0gMyAmJiAhY3VycmVudENoaWxkLmRhdGEpKSBwb3MrKztcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgSW1tdXRSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHRoaXMucmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgY29uc3QgbWFya3MgPSB0aGlzLm1hcmtzID0gWy4uLmVudHJ5Lm1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbTEuaWQgLSBtMi5pZCldO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc0luQ2h1bmtzKG1hcmtzLCB0aGlzLnJlc3RvcmVSYW5nZSwgdGhpcy5yZXBvcnQpO1xyXG4gIH1cclxuXHJcbiAgcmVzdG9yZVJhbmdlKG1hcmspIHtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknLFxyXG4gICAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAncmVzdW1lJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IG51bGwsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHJlc3RvcmVkOiAwLFxyXG4gICAgZmFpbGVkOiAwLFxyXG4gICAgZmFpbHVyZVJlcG9ydDoge30sXHJcblxyXG4gICAgcmVzdG9yZShlbnRyaWVzKSB7XHJcbiAgICAgIGlmICghZW50cmllcykgcmV0dXJuO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIGVudHJpZXMgPSBbZW50cmllc107XHJcblxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4gICAgICB0aGlzLmNvdW50ID0gZW50cmllcy5sZW5ndGg7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb25zJyk7XHJcbiAgICAgIF9TVE9SRS5yZXN0b3JpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoZW50cnkuaW1tdXQpIG5ldyBJbW11dFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgICBlbHNlIG5ldyBSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgdGhpcy5yZXN0b3JlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbGVkID0gMDtcclxuICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0ID0ge307XHJcbiAgICB9LFxyXG4gICAgcmV0cnkoZW50cnkpIHtcclxuICAgICAgZW50cnkgPSBlbnRyeSA/IFtlbnRyeV0gOiB0aGlzLmVudHJpZXM7XHJcbiAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICAgIHRoaXMucmVzdG9yZShlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgb25GYWlsdXJlKHJlcG9ydCkge1xyXG4gICAgICB0aGlzLmZhaWxlZCsrO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHJlcG9ydCkgdGhpcy5mYWlsdXJlUmVwb3J0W2ldID0gcmVwb3J0W2ldO1xyXG4gICAgfSxcclxuICAgIG9uRmluaXNoZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgaWYgKCsrdGhpcy5yZXN0b3JlZCA9PT0gdGhpcy5jb3VudCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucycpO1xyXG4gICAgICAgIF9TVE9SRS5yZXN0b3JpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLy8udXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC8vLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC8vLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7IHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTsgfSBjYXRjaChlKSB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG5vZGUpIHtcclxuICAgIHRoaXMuc2VsZi5zZWxlY3RBbGxDaGlsZHJlbihub2RlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKHNlbGVjdGlvbikge1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5zZWxmID0gc2VsZWN0aW9uO1xyXG4gICAgZWxzZSBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgbGV0IHByb3BzID0gWydmb2N1c05vZGUnLCAnYW5jaG9yTm9kZScsICdmb2N1c09mZnNldCcsICdhbmNob3JPZmZzZXQnXSxcclxuICAgICAgICBpID0gcHJvcHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHRoaXNbcHJvcHNbaV1dID0gc2VsZWN0aW9uW3Byb3BzW2ldXTtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICB0aGlzLnNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgYWRqdXN0KCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXMgPSB0aGlzLmZvY3VzTm9kZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSkgdGhpcy5yZXZlcnNlKGFuY2hvciwgZm9jdXMpO1xyXG4gICAgZWxzZSB0aGlzLm5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgbm9ybWFsaXplKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG5cclxuICAgICAgICBmaXJzdFRleHROb2RlID0gdGhpcy5ub2Rlc1swXSxcclxuICAgICAgICBsYXN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgaWYgKGZpcnN0VGV4dE5vZGUgIT09IGFuY2hvcilcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQoZmlyc3RUZXh0Tm9kZSwgZmlyc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGZpcnN0VGV4dE5vZGUuZGF0YS50cmltTGVmdCgpLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGxhc3RUZXh0Tm9kZSAhPT0gZm9jdXMpXHJcbiAgICAgIHJhbmdlLnNldEVuZChsYXN0VGV4dE5vZGUsIGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIChsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBsYXN0VGV4dE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGgpKTtcclxuICB9XHJcbiAgY29sbGVjdE5vZGVzKHdob2xlRG9jdW1lbnQpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpO1xyXG4gICAgY29uc3QgZmlsdGVyID0gd2hvbGVEb2N1bWVudCA/XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGYuaXNTZWxlY3RhYmxlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpIDpcclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKTtcclxuXHJcbiAgICBjb25zdCBpdGVyYXRvciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoY29udGFpbmVyLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwge1xyXG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGxldCBub2RlcyA9IFtdLFxyXG4gICAgICAgIHBhcmVudE5vZGVzID0gW10sXHJcblxyXG4gICAgICAgIHRleHROb2RlLCBwYXJlbnQsIGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgd2hpbGUodGV4dE5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSB7XHJcbiAgICAgIG5vZGVzLnB1c2godGV4dE5vZGUpO1xyXG4gICAgfVxyXG4gICAgbm9kZXMgPSB0aGlzLnRyaW1TZWxlY3Rpb24obm9kZXMpO1xyXG4gICAgLy90aGlzLm5vZGVzID0gdGhpcy5vcHRpb25zLnByb2dyYW1tYXRpY2FsbHkgPyB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2RlcykgOiBub2RlcztcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcyk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGVzID0gdGhpcy5jb2xsZWN0UGFyZW50Tm9kZXModGhpcy5ub2Rlcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlY29sbGVjdE5vZGVzKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtXcmFwcGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRePVwiJyArIG1hcmsuaWQgKyAnX1wiXScpKTtcclxuICAgIGNvbnN0IG0gPSBtYXJrV3JhcHBlcnMubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV3U2VnbWVudCA9IG1hcmtXcmFwcGVycy5tYXAoZWwgPT4gZWwuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgY29uc3QgcHJldiA9IG1hcmtXcmFwcGVyc1swXS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBjb25zdCBuZXh0ID0gbWFya1dyYXBwZXJzW20tMV0ubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb247XHJcbiAgICBjb25zdCBlbmQgPSBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uO1xyXG5cclxuICAgIGlmIChwcmV2ICYmIHByZXYubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC51bnNoaWZ0KHByZXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnB1c2gobmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgLi4ubmV3U2VnbWVudCk7XHJcbiAgfVxyXG4gIHRyaW1TZWxlY3Rpb24obm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGxldCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGZpcnN0Tm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmFuY2hvck5vZGUgPT09IGZpcnN0Tm9kZSAmJiBmaXJzdE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGggPD0gc2VsZWN0aW9uLmFuY2hvck9mZnNldCkge1xyXG4gICAgICAgIG5vZGVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5mb2N1c05vZGUgPT09IGxhc3ROb2RlICYmIHRoaXMuaXNCbGFuayhsYXN0Tm9kZS5kYXRhLnN1YnN0cigwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKSkge1xyXG4gICAgICAgIG5vZGVzLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIHJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgcmcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZShyZyk7XHJcblxyXG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgIHJnLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICAgIHJldHVybiAhIXNlbC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHRoaXMucmFuZ2UpO1xyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgY29sbGVjdFBhcmVudE5vZGVzKG5vZGVzKSB7XHJcbiAgICBsZXQgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBwYXJlbnRzID0gW10sIGkgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBwYXJlbnRzLnB1c2gobm9kZXNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgfVxyXG4gIHJldHJpZXZlVGV4dCgpIHtcclxuICAgIGxldCByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbm9kZXMgPSB0aGlzLm5vZGVzLFxyXG4gICAgICAgIGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbm9kZVRleHRzID0gW10sXHJcbiAgICAgICAgdGV4dDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgbm9kZVRleHRzLnB1c2gobm9kZXNbaV0uZGF0YSk7XHJcblxyXG4gICAgbCAtPSAxO1xyXG5cclxuICAgIGlmIChub2RlVGV4dHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdGhpcy5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgIC8vbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCB0aGlzLmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRleHQgPSB0aGlzLnRleHQgPSBub2RlVGV4dHMuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIG5vZGUxID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgbm9kZTIgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChub2RlMSA9IG5vZGUxLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUyKSAmIDB4MTApID09PSAweDEwKVxyXG4gICAgICAgICAgcmV0dXJuIG5vZGUxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuICByZXZlcnNlKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCByYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChmb2N1cywgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChhbmNob3IsIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoc2VsZWN0aW9uKS5hZGp1c3Qoc2VsZWN0aW9uLmFuY2hvck5vZGUsIHNlbGVjdGlvbi5mb2N1c05vZGUpO1xyXG4gIH1cclxuICByZWR1Y2VUb09uZVJhbmdlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZUNvdW50ID0gc2VsZWN0aW9uLnJhbmdlQ291bnQsXHJcbiAgICAgICAgcmFuZ2UwID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBsYXN0UmFuZ2U7XHJcblxyXG4gICAgaWYgKHJhbmdlQ291bnQgPCAyKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBsYXN0UmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdChyYW5nZUNvdW50IC0gMSk7XHJcblxyXG4gICAgcmFuZ2UwLnNldFN0YXJ0KHJhbmdlMC5zdGFydENvbnRhaW5lciwgcmFuZ2UwLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlMC5zZXRFbmQobGFzdFJhbmdlLmVuZENvbnRhaW5lciwgbGFzdFJhbmdlLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGhhc05vcm1hbFBhcmVudChub2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YWcgPSBwYXJlbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRhZyAhPT0gJ1NDUklQVCcgJiYgdGFnICE9PSAnU1RZTEUnICYmIHRhZyAhPT0gJ0xJTksnICYmIHRhZyAhPT0gJ01FVEEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0JBU0UnICYmIHRhZyAhPT0gJ1RJVExFJyAmJiB0YWcgIT09ICdOT1NDUklQVCcgJiZcclxuICAgICAgdGFnICE9PSAnSU1HJyAmJiB0YWcgIT09ICdJRlJBTUUnICYmIHRhZyAhPT0gJ0VNQkVEJyAmJiB0YWcgIT09ICdQQVJBTScgJiZcclxuICAgICAgdGFnICE9PSAnVklERU8nICYmIHRhZyAhPT0gJ0FVRElPJyAmJiB0YWcgIT09ICdTT1VSQ0UnICYmIHRhZyAhPT0gJ1RSQUNLJyAmJlxyXG4gICAgICB0YWcgIT09ICdDQU5WQVMnICYmIHRhZyAhPT0gJ01BUCcgJiYgdGFnICE9PSAnQVJFQScgJiZcclxuICAgICAgdGFnICE9PSAnTUFUSCcgJiYgdGFnICE9PSAnT0JKRUNUJyAmJlxyXG4gICAgICAhdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnc3ZnJykgLy8mJlxyXG4gICAgICAvLyF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdtYXRoJylcclxuICAgICk7XHJcbiAgfVxyXG4gIGlzQ2hpbGRPZihub2RlLCBub2RlVHlwZSkge1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5vZGVUeXBlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaXNCbGFuayhub2RlKSB7XHJcbiAgICBsZXQgdGV4dDtcclxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChub2RlICYmIHR5cGVvZiBub2RlLmRhdGEgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZS5kYXRhO1xyXG4gICAgICBlbHNlIHRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dC5zZWFyY2goL1teXFxzXFxuXFxyXFx0XS9nKSA9PT0gLTE7XHJcbiAgfVxyXG4gIGlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcG9zaXRpb24gPSBhbmNob3IuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvc2l0aW9uID09PSAyIHx8XHJcbiAgICAgIHBvc2l0aW9uID09PSAxMCB8fFxyXG4gICAgICAoIXBvc2l0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKTtcclxuICB9XHJcbiAgaXNTaW1wbGUoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvck5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1c05vZGUgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGFuY2hvck5vZGUgPT09IGZvY3VzTm9kZSAmJlxyXG4gICAgICBhbmNob3JOb2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgICghYW5jaG9yTm9kZS5uZXh0U2libGluZyB8fCAoYW5jaG9yTm9kZS5uZXh0U2libGluZy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1c05vZGUpICE9PSA0KSkpO1xyXG4gIH1cclxuICBpc1NlbGVjdGFibGUobm9kZSkge1xyXG4gICAgdGhpcy5yYW5nZS5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgcmV0dXJuICEhdGhpcy5zZWxmLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0ZScsXHJcbiAgICAgICdhZGRlZDpub3RlJzogJ29uTm90ZUFkZGVkJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdvbkxhc3ROb3RlUmVtb3ZlZCcsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtSZW1vdmVkJ1xyXG4gICAgfVxyXG5cdH0sXHJcbiAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgZWw6IG51bGwsXHJcblxyXG4gIGF0dGFjaGVkOiBmYWxzZSxcclxuXHJcbiAgYnV0dG9uczoge1xyXG4gICAgbm90ZXM6IHtcclxuICAgICAgZWw6IG51bGwsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBzaG93bjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBib29rbWFyazoge1xyXG4gICAgICBlbDogbnVsbCxcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJvb2ttYXJrOiBmYWxzZSxcclxuICBub3RlczogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgfSxcclxuICB1cGRhdGVTdGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgdGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgPSBibWljb247XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdub3RlaWNvbicpLnRoZW4obm90ZWljb24gPT4gdGhpcy5idXR0b25zLm5vdGVzLnNob3cgPSBub3RlaWNvbik7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9LFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IHNob3VsZEF0dGFjaCA9XHJcbiAgICAgICh0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyAmJiB0aGlzLmJvb2ttYXJrKSB8fFxyXG4gICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgaWYgKHNob3VsZEF0dGFjaCkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hdHRhY2hlZCAmJiAhc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgIGlmICghdGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG11aScpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgaWYgKGJ0bi5zaG93ICYmICFidG4uc2hvd24gJiYgdGhpc1tiXSkgdGhpcy5hZGRCdXR0b24oYik7XHJcbiAgICAgIGVsc2UgaWYgKGJ0bi5zaG93biAmJiAoIXRoaXNbYl0gfHwgIWJ0bi5zaG93KSkgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWJ1dHRvbnMubm90ZXMuc2hvd24gJiYgIWJ1dHRvbnMuYm9va21hcmsuc2hvd24pIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dGFjaGVkID0gdHJ1ZTtcclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbnNbYl0uc2hvd24pIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBub3Rlc0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ub3Rlcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVzdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICBub3Rlc0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZXMnKTtcclxuICAgIGJvb2ttYXJrQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2JtX3Njcm9sbCcpO1xyXG4gIH0sXHJcbiAgYWRkQnV0dG9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gYnRuLmhhbmRsZXIgPSB0eXBlID09PSAnbm90ZXMnID9cclxuICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdG11aS5hcHBlbmRDaGlsZChidG4uZWwpO1xyXG4gICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICBidG4uZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcblxyXG4gICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgYnRuLnNob3duID0gZmFsc2U7XHJcblxyXG4gICAgYnRuLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuLmhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgX1NUT1JFLmdldCgndG11aXBvcycpXHJcbiAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgfSxcclxuICBvbk5vdGVBZGRlZCgpIHtcclxuICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uQm9va21hcmtBZGRlZCgpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uQm9va21hcmtSZW1vdmVkKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZXMnKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3Njcm9sbC10by1ib29rbWFyaycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2luamVjdGlvbicsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjb3B5Om1hcmtzJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nLFxyXG4gICAgICAnbG9va3VwOndvcmQnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcycsXHJcbiAgICAgICdmZXRjaDplbnRyaWVzJyxcclxuXHJcbiAgICAgIC8vIEBSRVNUT1JFUlxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG4gIFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgbm90ZWZvbnRzaXplOiAxMixcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAndG0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQsICcnKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInLCAnSHJlZiddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==