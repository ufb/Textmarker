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
      'toggled:sync': 'onToggledSync',
      'updated:naming-settings': 'updateStatus',
      'updated:hashopt-settings': 'updateStatus',
      'updated:entry-sync': 'setSyncForEntry',
      'updated:entry-name': 'renameEntry',
      'deleted:entry': 'removeEntry',
      'hashchange': 'resume'
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
  autoinit: function autoinit() {
    this.updateStatus();
  },
  resume: function resume() {
    this.entries = {};
    this.name = undefined;
    this.tmid = '';
    this.isNew = true;
  },
  updateStatus: function updateStatus() {
    var _this = this;

    if (!this.isNew || document.querySelector('[data-tm-id]')) return;
    this.get('settings').then(function (settings) {
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
    if (!this.locked) this.name = entries[0].name;
    var e = entries.length;

    for (var i = 0, entry; i < e; i++) {
      entry = entries[i];
      this.entries[entry.name] = entry;
    }

    this.isNew = false;
    this.immut = !!entries[0].immut;
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
      'saved:entry': 'onSavedEntry',
      'resumed-on-hashchange': 'updateStore',
      'opened:sidebar': 'sendPageState',
      'failed:restoration': 'activateRetry',
      'succeeded:restoration': 'deactivateRetry',
      'update:entry?': 'deactivateRetry',
      // @RESTORER
      'entries:found': 'onEntriesFound'
    }
  },
  retryActive: false,
  autoinit: function autoinit() {
    this.updateStore();
  },
  updateStore: function updateStore() {
    _store2["default"].iframe = window !== window.parent.window;
    _store2["default"].url = window.document.URL;
    _store2["default"].hashlessURL = (0, _utils._HASHLESS)(_store2["default"].url);
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
    (0, _restorer2["default"])();

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
        'resumed:markers': 'retry'
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
    ONEOFF: ['copy:marks', 'save:entry?', 'update:entry?', 'lookup:word', 'error:browser-console', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'activated:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note', 'page-state', 'notes-state', 'visually-ordered:marks', // @RESTORER
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
      ['Title', 'Placeholder'].forEach(function (attr) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJ1cGRhdGVkIiwicmVzdG9yaW5nIiwiaWZyYW1lIiwibmFtZSIsInVuZGVmaW5lZCIsImlzTmV3IiwiZW50cmllcyIsImxvY2tlZCIsImhhc2hTZW5zaXRpdmUiLCJ0bWlkIiwibm90ZUNvbG9yIiwibm90ZUZvbnRTaXplIiwiaW1tdXQiLCJyZWRlc2NyaWJpbmciLCJhdXRvaW5pdCIsInVwZGF0ZVN0YXR1cyIsInJlc3VtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnlTZXR0aW5ncyIsImhpc3RvcnkiLCJuYW1pbmciLCJpZ25vcmVIYXNoIiwiZW1pdCIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsIl9nZXRfYm1pY29uIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwibWlzYyIsImJtaWNvbiIsIl9nZXRfbm90ZWljb24iLCJub3RlaWNvbiIsIl9nZXRfbm90ZW9uY2xpY2siLCJub3Rlb25jbGljayIsIl9nZXRfdG11aXBvcyIsInRtdWlwb3MiLCJfZ2V0X2F1dG9zYXZlIiwiYXV0b3NhdmUiLCJfZ2V0X2ltbXV0IiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiX2dldF9tb2RlIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X25hbWluZyIsInJldHJ5QWN0aXZlIiwidXBkYXRlU3RvcmUiLCJ3aW5kb3ciLCJwYXJlbnQiLCJVUkwiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsImJvb2ttYXJrIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbkVudHJpZXNGb3VuZCIsIm9uIiwicHJveHkiLCJzdGFydFJlc3RvcmF0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwicmVjZW50bHlPcGVuZWRFbnRyeSIsInVwZGF0ZU5hbWUiLCJmaXJzdEVudHJ5IiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvU3RyaW5nIiwiX0JPT0tNQVJLIiwibWFyayIsImFuY2hvciIsIndyYXBwZXJzIiwidyIsImtleURhdGEiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYWN0aXZhdGUiLCJyZWdpc3RlckhhbmRsZXIiLCJyZW1vdmVMaXN0ZW5lcnMiLCJhZGRMaXN0ZW5lciIsImJ1dHRvbiIsInRhcmdldCIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIiwiX01BUksiLCJwcmVTZXR0aW5ncyIsImRlZmF1bHRzIiwiaXNJbW11dCIsInN0eWxlIiwiY29uZHMiLCJ0ZXh0Iiwibm90ZSIsImQiLCJpZGNvdW50Iiwic2ltcGxlIiwicmFuZ2UiLCJzdGFydE9mZnNldCIsImVuZE9mZnNldCIsImNvbnRhaW5lcnMiLCJhbmNob3JOb2RlUG9zaXRpb24iLCJmb2N1c05vZGVQb3NpdGlvbiIsImRlc2NyaWJlX2ltbXV0Iiwibm9kZXMiLCJuIiwiY3JlYXRlV3JhcHBlcnMiLCJsYXN0SW5kZXgiLCJub2RlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJzdXJyb3VuZENvbnRlbnRzIiwicHVzaCIsInBhcmVudE5vZGUiLCJub3JtYWxpemUiLCJkZWZpbmVQb3NpdGlvbiIsInNldEJvb2ttYXJrIiwiZGVzY3JpYmUiLCJyZWdpc3RlckNsaWNrTGlzdGVuZXJzIiwid3JhcHBlciIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImluY2x1ZGluZ09mZnNldHMiLCJmaXJzdFdyYXBwZXIiLCJsYXN0V3JhcHBlciIsImZpcnN0UGFyZW50IiwibGFzdFBhcmVudCIsImFuY2hvclByZXYiLCJmb2N1c1ByZXYiLCJ3aGljaENoaWxkIiwicHJldmlvdXNTaWJsaW5nIiwibm9kZVR5cGUiLCJkYXRhIiwiY29udGFpbmVyIiwicmVwbGFjZUNoaWxkIiwiZmlyc3RDaGlsZCIsInNlbGYiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb2xsZWN0Tm9kZXMiLCJjb2xsYXBzZVRvU3RhcnQiLCJjcmVhdGUiLCJjaGlsZCIsImluY2x1ZGluZ1RleHROb2RlcyIsImNoaWxkcmVuIiwiYyIsIm51bWJlciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic3RhcnQiLCJzdGFydENvbnRhaW5lciIsImVuZCIsImVuZENvbnRhaW5lciIsInNpbmdsZU5vZGUiLCJwYXJlbnRJc1RNIiwiaGFzQXR0cmlidXRlIiwiZ3JhbXBhIiwiZ3JhbmRncmFtcGEiLCJmVE5QIiwibyIsIm4xIiwibm9kZU5hbWUiLCJwMSIsIm4yIiwicDIiLCJwMyIsInA0Iiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiYW5jaG9yTm9kZSIsImZvY3VzTm9kZSIsInMiLCJwIiwiYXBwZW5kZWQiLCJoZWlnaHQiLCJwb3B1cCIsImVsIiwiYmdDb2xvclJlZ0V4cCIsImJnQ29sb3IiLCJjb2xvckJ0biIsIm0iLCJtYXRjaCIsImFwcGVuZENoaWxkIiwiYmFja2dyb3VuZCIsInBvcCIsInJlbW92ZUNoaWxkIiwic2hvdyIsInBvcHVwSGVpZ2h0Iiwib25Nb3VzZWRvd24iLCJzZWxlY3Rpb25Qb3NpdGlvbiIsImdldFJhbmdlQXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJvZmZzZXRIZWlnaHQiLCJNYXRoIiwibWF4IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJhcHBseSIsImF1dG9ub3RlIiwidW5kbyIsIm5vQXV0b3NhdmUiLCJ1bmRvQm9va21hcmsiLCJyZWRvIiwiY3V0T3V0IiwidG9CZVJlbW92ZWQiLCJpbmRpY2VzIiwic21hbGxlc3RJRCIsImZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzIiwiaiIsIngiLCJtYXJrc0ludGVyc2VjdCIsImluY2x1ZGVzIiwic29ydCIsInNoaWZ0IiwibWluIiwic3BsaWNlIiwiZ2V0QnlJZCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsImZvckVhY2giLCJhcmciLCJvcHRpb25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoaWdobGlnaHQiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHRDb250ZW50Iiwic2lsZW50IiwiaW1tdXRhYmxlIiwic2F2ZSIsInJlcXVlc3QiLCJncmFudGVkIiwic3ViIiwiaTE4biIsImdldE1lc3NhZ2UiLCJwcm9tcHQiLCJyZXRyaWV2ZUVudHJ5IiwiY29uZmlybWVkIiwiY29uZmlybSIsImNvcHkiLCJmaW5kTWFyayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRyaW0iLCJzdG9yZSIsIm9yZGVyIiwib3JkZXJNYXJrc1Zpc3VhbGx5IiwicmVjcmVhdGUiLCJfU0VMRUNUSU9OIiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJhcmVhX2hpc3RvcnkiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXRUaW1lb3V0Iiwic2V0IiwicmVtb3ZlQm9va21hcmsiLCJtYXJrMSIsIm1hcmsyIiwibTEiLCJtMiIsImJiMSIsImJiMiIsInRvcDEiLCJ0b3AyIiwibWFwIiwid3JhcHBlcnMxIiwidzEiLCJpZDEiLCJ3cmFwcGVyczIiLCJpZDIiLCJ3MiIsIm9uTWFya2VyS2V5Iiwib25Ib3RrZXkiLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0Iiwia0QiLCJvbkhhc2hDaGFuZ2UiLCJjb2xvciIsIkJPRFkiLCJET00iLCJjbGljayIsImtleXVwIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwibWFya0NsaWNrSGFuZGxlciIsInZpc2libGUiLCJyZWNlbnRseVVwZGF0ZWQiLCJzZXR0aW5nc01vZGUiLCJ0Iiwic2l6ZSIsImgiLCJkcmFnRFgiLCJkcmFnRFkiLCJtdXRhdGlvbk9ic2VydmVyIiwiYWRqdXN0Tm90ZURhdGFPYmplY3QiLCJjcmVhdGVOb3RlRWxlbWVudCIsImFkZExpc3RlbmVycyIsImFkZE1hcmtMaXN0ZW5lcnMiLCJub3RlRGF0YSIsImZzIiwiaGVhZGVyIiwiYWN0aW9ucyIsImRlbCIsImdlYXIiLCJwYWxldHRlIiwidGV4dEVsZW1lbnQiLCJkZWxUZXh0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluVGV4dCIsImdlYXJUZXh0IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJhdHRlbXB0VXBkYXRlIiwiX2RlbGV0ZSIsImhpZGUiLCJyZW1vdmVNYXJrTGlzdGVuZXJzIiwiZm9yY2UiLCJpbm5lcldpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImdldFBvc2l0aW9uIiwib2Zmc2V0IiwiZm9udFNpemUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbm5lY3RNdXRhdGlvbk9ic2VydmVyIiwiYnJpbmdVcEZyb250IiwiekluZGV4IiwiZGlzY29ubmVjdCIsInRvZ2dsZSIsInRvZ2dsZVBhbGV0dGUiLCJjaGFuZ2VDb2xvciIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRhcmVhIiwiY29uZmlnIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwic2F2ZVNpemUiLCJvYnNlcnZlIiwicmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib25EcmFnU3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwib25EcmFnIiwib25EcmFnRW5kIiwibXV0YXRpb25zTGlzdCIsIndpZHRoIiwibm90ZXMiLCJkcmFnSGFuZGxlciIsImRyYWdTdG9wSGFuZGxlciIsInVwZGF0ZVN0eWxlIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJtZXRoIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsIm5vdGVmb250c2l6ZSIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJzdGFydERyYWdnaW5nTm90ZSIsImVtaXREcmFnRXZlbnQiLCJzdG9wRHJhZ2dpbmdOb3RlIiwiZG9jIiwic2VuZE5vdGVzU3RhdGUiLCJyZXBvcnQiLCJhdXRvUGF1c2UiLCJrZXlkb3duIiwic2VsZWN0aW9uY2hhbmdlIiwic2VsZWN0aW9uQ29sbGFwc2VkIiwic2hpZnRTZW5zaXRpdmVLZXlzIiwia2V5Q29kZU1hcCIsImlzRWRpdGFibGUiLCJ0YWdOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiZGVsZWdhdGUiLCJ0b0xvd2VyQ2FzZSIsImtleUNvZGUiLCJtb2RLZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiYXJyb3dLZXlzIiwibG9ja2VkQWN0aW9ucyIsImZ1bmN0aW9uS2V5cyIsImRlZmF1bHRNYXJrZXJzIiwib3JpZ0tleSIsImlzTWFya2VyS2V5IiwiaXNDdXN0b21NYXJrZXJLZXkiLCJzZXR0aW5nIiwic2hvcnRjdXQiLCJzMSIsInMyIiwicmVzdG9yZWQiLCJmYWlsZWQiLCJmYWlsdXJlUmVwb3J0IiwiSW1tdXRSZXN0b3JlciIsIlJlc3RvcmVyIiwicmV0cnkiLCJvbkZhaWx1cmUiLCJnZXRSZXBvcnQiLCJtc2ciLCJyZWFzb24iLCJSZXN0b3JlckJhc2UiLCJhcmVhIiwicHJvYyIsImNiIiwicmVjIiwiZXhwaXJlIiwibGwiLCJ0ZW1wIiwicXVldWUiLCJjYWNoZSIsInBoYXNlIiwic2VsZWN0aW9uVHJpYWwiLCJjaHVua0R1cmF0aW9uIiwiX3RpbWVyIiwib29tIiwiaW5pdCIsIm5vdyIsInBvc3Rwb25lZCIsImNvbnZlcnREZXNjcmlwdGlvbiIsImNyZWF0ZVRlbXBPYmplY3QiLCJjb252ZXJ0ZWRDb25kcyIsImZpcnN0Tm9kZU5hbWUiLCJmaXJzdFBhcmVudE5vZGVOYW1lIiwiZmlyc3RUZXh0Tm9kZVBvc2l0aW9uIiwiZmlyc3ROb2RlUG9zaXRpb24iLCJmaXJzdFBhcmVudE5vZGVQb3NpdGlvbiIsImZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uIiwidHJpbW1lZFRleHQiLCJzcXVlZXplZFRleHQiLCJzcXVlZXplIiwidGV4dExlbmd0aCIsInRyaW1tZWRUZXh0TGVuZ3RoIiwic3F1ZWV6ZWRUZXh0TGVuZ3RoIiwicG9zc2libGVQb3NpdGlvbnMiLCJwb3NzaWJsZUVuZFBvc2l0aW9ucyIsInBvc3NpYmxlU3RhcnROb2RlcyIsInBvc3NpYmxlRW5kcyIsInBvc3NpYmxlRm9jdXNPZmZzZXRzIiwic29ydFF1ZXVlQnlJZCIsInNldEJvZHlTZWxlY3Rpb24iLCJnZXRUZXh0UG9zaXRpb25zIiwicG9zdHBvbmVPdmVybGFwcGluZ3MiLCJmaW5kUG9zc2libGVFeHRyZW1hIiwicnVsZU91dE11bHRpcGxlcyIsInJlc3RvcmVSYW5nZXMiLCJ0aW1lciIsInJlcyIsInRyaW1tZWRTZWxlY3Rpb25UZXh0IiwiYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyIsImVuZFBvc2l0aW9ucyIsIm1hcmtUZW1wIiwic29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJtYXhQb3NpdGlvbiIsInBvc2l0aW9ucyIsInBvczEiLCJwb3MyIiwicG9zdHBvbmUiLCJjdXRPdXRGb3IiLCJhbHJlYWR5SW5jbHVkZWQiLCJib2R5VGV4dE5vZGVzIiwic2F0aXNmaWVkIiwiY2hhcnMiLCJuZXh0U3RhcnRGb3VuZCIsImVuZGluZ3NJblRoaXNOb2RlIiwibm9kZXNUZXh0Iiwibm9kZXNUZXh0TGVuZ3RoIiwiZGlmZiIsImYiLCJxIiwicG9zc2libGVGb2N1c09mZnNldCIsInN0YXJ0Rm91bmRGb3IiLCJoYXNFbmRpbmdzSW5UaGlzTm9kZSIsImVuZEZvdW5kRm9yIiwic2F0aXNmaWVzRGVzY3JpcHRpb24iLCJmaW5kRm9jdXNPZmZzZXQiLCJncmFuZGdyYW5kZ3JhbXBhIiwibWF0Y2hlcyIsInN0YXJ0Tm9kZSIsInN0YXJ0Tm9kZVBvc2l0aW9uIiwic2V0TWF0Y2hpbmdFbmQiLCJlbmROb2RlIiwiZW5kTm9kZVBvc2l0aW9uIiwiZm9jdXNPZmZzZXQiLCJkZXNjcmlwdGlvbiIsInJlbGV2YW50Tm9kZVRleHQiLCJtYXJrVGV4dCIsInRleHRzTWF0Y2giLCJub2RlVGV4dCIsImNvdW50ZXIiLCJ0ZXN0IiwiY3JlYXRlUmFuZ2UiLCJyZWNvbGxlY3ROb2RlcyIsInNsaWNlIiwiY29udGV4dCIsImN1cnJlbnRDaGlsZCIsInByb2Nlc3NJbkNodW5rcyIsInJlc3RvcmVSYW5nZSIsImdldE5vZGUiLCJ0ZXh0Tm9kZVBvc2l0aW9uIiwicmFuZ2VDb3VudCIsImRlZmluZWQiLCJyZWR1Y2VUb09uZVJhbmdlIiwicmV0cmlldmVUZXh0IiwiYWRqdXN0Iiwic2VsZWN0QWxsQ2hpbGRyZW4iLCJwcm9wcyIsImlzU2ltcGxlIiwiZm9jdXMiLCJpc0JhY2t3YXJkcyIsInJldmVyc2UiLCJmaXJzdFRleHROb2RlIiwibGFzdFRleHROb2RlIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJ3aG9sZURvY3VtZW50IiwiZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJmaWx0ZXIiLCJpc1NlbGVjdGFibGUiLCJpc0JsYW5rIiwiaGFzTm9ybWFsUGFyZW50IiwiY29udGFpbnNOb2RlIiwiaXRlcmF0b3IiLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiYWNjZXB0Tm9kZSIsInBhcmVudE5vZGVzIiwidGV4dE5vZGUiLCJmaXJzdE5vZGUiLCJsYXN0Tm9kZSIsIm5leHROb2RlIiwidHJpbVNlbGVjdGlvbiIsInJlZHVjZVRvU2VsZWN0YWJsZSIsImNvbGxlY3RQYXJlbnROb2RlcyIsIm1hcmtXcmFwcGVycyIsIm5ld1NlZ21lbnQiLCJwcmV2IiwibmV4dCIsIm5leHRTaWJsaW5nIiwidW5zaGlmdCIsImFuY2hvck9mZnNldCIsInN1YnN0ciIsInNlbCIsInJnIiwic2VsZWN0Tm9kZSIsInBhcmVudHMiLCJub2RlVGV4dHMiLCJqb2luIiwibm9kZTEiLCJub2RlMiIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwicmFuZ2UwIiwibGFzdFJhbmdlIiwidGFnIiwidG9VcHBlckNhc2UiLCJpc0NoaWxkT2YiLCJzZWFyY2giLCJhdHRhY2hlZCIsImJ1dHRvbnMiLCJzaG93biIsImNyZWF0ZUJ1dHRvbnMiLCJ1cGRhdGVTdGF0ZSIsInNob3VsZEF0dGFjaCIsInJlbmRlciIsImJ0biIsImIiLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJ1cGRhdGVQb3NpdGlvbiIsInRtdWkiLCJub3Rlc0J1dHRvbiIsImJvb2ttYXJrQnV0dG9uIiwidHlwZSIsInRvZ2dsZU5vdGVzIiwib25Ob3RlQWRkZWQiLCJvbkxhc3ROb3RlUmVtb3ZlZCIsIm9uQm9va21hcmtBZGRlZCIsIm9uQm9va21hcmtSZW1vdmVkIiwiT05FT0ZGIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInoiLCJ5IiwiYXJyb3d1cCIsImFycm93ZG93biIsInNiIiwiY20iLCJzYXZlSW5Qcml2IiwiZHJvcExvc3NlcyIsImRvd25sb2FkIiwic29ydGVkIiwidmlldyIsInBwIiwiYXV0b2NzIiwiaWZyYW1lcyIsIm92ZXJ3cml0ZSIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiY2hhbmdlZE5vdGUiLCJlcnJvck5vdGUiLCJ2aXBOb3RlIiwiY3VzdG9tU2VhcmNoIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInRhYnMiLCJtZXRhIiwidW5mb2xkZWQiLCJ0YWdzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsInN5bmMiLCJNQVhfTE9HX0VOVFJJRVMiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidmFsIiwicHJvcCIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImRvbUV2ZW50cyIsImdlbmVyYWxIYW5kbGVyIiwiX2V4dHJhIiwiZXJyb3IiLCJmaWxlIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImFyZ3MiLCJ0b3BpYyIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJ0YWIiLCJmcmFtZUlkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX3BhZ2Vub3RlcyIsImxvY2FsIiwic2V0QXJlYXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFB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MENDLElBQTFDLENBQStDLFVBQUFxQixPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDcEIsUUFBUixJQUFvQnN3Qiw0QkFBaUJ0d0IsUUFBekM7QUFBQSxPQUF0RCxDQUFQO0FBQ0Q7OztnQ0FDVztBQUNWLGFBQU9tQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvdkIsS0FBaEIsQ0FBc0Ixd0IsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUE4d0IsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNLLElBQW5DLEVBQXlDLE9BQU8sRUFBUDtBQUN6QyxlQUFPTCxZQUFZLENBQUNLLElBQXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU8vdkIsT0FBTyxDQUFDQyxPQUFSLENBQWdCb3ZCLEtBQWhCLENBQXNCMXdCLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBOHdCLFlBQVksRUFBSTtBQUN0RCxZQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDOUgsT0FBbkMsRUFBNEM7QUFDMUMsaUJBQU81bkIsT0FBTyxDQUFDQyxPQUFSLENBQWdCOHBCLElBQWhCLENBQXFCcHJCLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBK3dCLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDL0gsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPOEgsWUFBWSxDQUFDOUgsT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUJockIsZSIsImZpbGUiOiJjb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdvblRvZ2dsZWRTeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmhhc2hvcHQtc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYyc6ICdzZXRTeW5jRm9yRW50cnknLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJzogJ3JlbmFtZUVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdyZXN1bWUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZW52OiAnaW5qZWN0aW9uJyxcclxuXHJcbiAgdXJsOiAnJyxcclxuICBoYXNobGVzc1VSTDogJycsXHJcblxyXG4gIHVwZGF0ZWQ6IGZhbHNlLFxyXG4gIHJlc3RvcmluZzogZmFsc2UsXHJcblxyXG4gIGlmcmFtZTogZmFsc2UsXHJcbiAgbmFtZTogdW5kZWZpbmVkLFxyXG4gIGlzTmV3OiB0cnVlLFxyXG4gIC8vZW50cnk6IG51bGwsXHJcbiAgZW50cmllczoge30sXHJcbiAgbG9ja2VkOiBmYWxzZSxcclxuICBoYXNoU2Vuc2l0aXZlOiBmYWxzZSxcclxuICB0bWlkOiAnJyxcclxuICBub3RlQ29sb3I6ICd5ZWxsb3cnLFxyXG4gIG5vdGVGb250U2l6ZTogMTIsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzID8gc2V0dGluZ3MuaGlzdG9yeSA6IG51bGw7XHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcgPT09ICdtYXJrJztcclxuICAgICAgICB0aGlzLmhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaCA9PT0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOnN0b3JlLXN0YXR1cycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVuYW1lRW50cnkoZW50cnksIG9sZE5hbWUpIHtcclxuICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5uYW1lID09PSBvbGROYW1lICYmICF0aGlzLmxvY2tlZCkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgICBpZiAodGhpcy5lbnRyaWVzW29sZE5hbWVdKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNldFN5bmNGb3JFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCAmJiB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0pIHtcclxuICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdLnN5bmNlZCA9IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW1vdmVFbnRyeShkZWxldGVkRW50cnkpIHtcclxuICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgaWYgKGVudHJpZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgbmFtZSA9PT0gZGVsZXRlZEVudHJ5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgYWRkRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkKSB0aGlzLm5hbWUgPSBlbnRyaWVzWzBdLm5hbWU7XHJcbiAgICBjb25zdCBlID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBlOyBpKyspIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcclxuICAgIHRoaXMuaW1tdXQgPSAhIWVudHJpZXNbMF0uaW1tdXQ7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9ibWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ibWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3Rlb25jbGljaygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RtdWlwb3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2ltbXV0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5cclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZSdcclxuaW1wb3J0ICcuL21vZHVsZXMvY29udGV4dG1lbnUnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbm90ZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RtdWknXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlci1wb3B1cCdcclxuaW1wb3J0ICcuL21vZHVsZXMvYXV0by1tYXJrZXInXHJcblxyXG5pbXBvcnQgJy4vbWFpbidcclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0IF9SRVNUT1JFUiBmcm9tICcuL21vZHVsZXMvcmVzdG9yZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAndXBkYXRlU3RvcmUnLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZFBhZ2VTdGF0ZScsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuXHJcbiAgICAgIC8vIEBSRVNUT1JFUlxyXG4gICAgICAnZW50cmllczpmb3VuZCc6ICdvbkVudHJpZXNGb3VuZCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXRyeUFjdGl2ZTogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdG9yZSgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVN0b3JlKCkge1xyXG4gICAgX1NUT1JFLmlmcmFtZSA9IHdpbmRvdyAhPT0gd2luZG93LnBhcmVudC53aW5kb3c7XHJcbiAgICBfU1RPUkUudXJsID0gd2luZG93LmRvY3VtZW50LlVSTDtcclxuICAgIF9TVE9SRS5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyhfU1RPUkUudXJsKTtcclxuICB9LFxyXG4gIG9uU2F2ZWRFbnRyeShlbnRyeSkge1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKGVudHJ5LnVybCA9PT0gdXJsKSB7XHJcbiAgICAgIF9TVE9SRS5hZGRFbnRyaWVzKFtlbnRyeV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIHRoaXMucmV0cnlBY3RpdmUgPSB0cnVlO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgc2VuZFBhZ2VTdGF0ZShpbmZvKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3BhZ2Utc3RhdGUnLCB7XHJcbiAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgYm9va21hcms6ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJyksXHJcbiAgICAgIHJldHJ5QWN0aXZlOiB0aGlzLnJldHJ5QWN0aXZlXHJcbiAgICB9LCBpbmZvKTtcclxuICB9LFxyXG5cclxuICAvLyBAUkVTVE9SRVJcclxuICBvbkVudHJpZXNGb3VuZChpbmZvKSB7XHJcbiAgICBpZiAoIV9TVE9SRS51cGRhdGVkKSB7XHJcbiAgICAgIHRoaXMub24oJ3VwZGF0ZWQ6c3RvcmUtc3RhdHVzJywgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnN0YXJ0UmVzdG9yYXRpb24sIGluZm8pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnRSZXN0b3JhdGlvbihpbmZvKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0UmVzdG9yYXRpb24oaW5mbykge1xyXG4gICAgbGV0IGVudHJpZXMgPSBpbmZvLmVudHJpZXM7XHJcbiAgICBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc107XHJcbiAgICBfU1RPUkUubG9ja2VkID0gaW5mby5sb2NrZWQ7XHJcbiAgICBfUkVTVE9SRVIoKTtcclxuICAgIF9TVE9SRS5hZGRFbnRyaWVzKGVudHJpZXMpO1xyXG4gICAgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgaWYgKGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSkgdGhpcy51cGRhdGVOYW1lKGVudHJpZXMsIGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bWFya3MnLCBpbmZvLmVudHJpZXMpO1xyXG4gIH0sXHJcbiAgdXBkYXRlTmFtZShlbnRyaWVzLCByZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKHJlY2VudGx5T3BlbmVkRW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLm5hbWUgPSByZWNlbnRseU9wZW5lZEVudHJ5Lm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInOiAnc2V0TWFya2VyJ1xyXG4gICAgfVxyXG5cdH0sXHJcblxyXG4gIGhhbmRsZXI6IG51bGwsXHJcbiAgbWFya2VyOiAnbScsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRNYXJrZXIoa2V5KSB7XHJcbiAgICB0aGlzLm1hcmtlciA9IGtleTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkICYmICF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2VsZWN0ZWQgJiYgdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdGFydExpc3RlbmluZygpIHtcclxuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZXVwLmJpbmQodGhpcyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Nb3VzZXVwKCkge1xyXG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWVuZCcsIHRoaXMubWFya2VyKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0JPT0tNQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5hbmNob3IgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0KG1hcmspIHtcclxuICAgIG1hcmsgPSBtYXJrIHx8IHRoaXMubWFyaztcclxuXHJcbiAgICBsZXQgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcbiAgICAgICAgYW5jaG9yID0gd3JhcHBlcnNbMF07XHJcblxyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIGFuY2hvci5pZCA9ICd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcic7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG5cclxuICAgIHRoaXMubWFyayA9IG1hcms7XHJcbiAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgbGV0IG1hcmsgPSB0aGlzLm1hcmssXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3IsXHJcbiAgICAgICAgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGg7XHJcblxyXG4gICAgYW5jaG9yLmlkID0gJyc7XHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG4gIHNjcm9sbEludG9WaWV3KGJtKSB7XHJcbiAgICBpZiAoYm0gfHwgKGJtID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpKSlcclxuICAgICAgYm0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdhY3RpdmF0ZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2ZTogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcclxuICB9LFxyXG5cclxuICBhY3RpdmF0ZShvbikge1xyXG4gICAgaWYgKG9uICYmICF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlcigpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghb24gJiYgdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlZ2lzdGVySGFuZGxlcigpIHtcclxuICAgIHRoaXMuYWRkTGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKSB7XHJcbiAgICAgICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIF9TVE9SRS50bWlkID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0sIHdpbmRvdy5kb2N1bWVudCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IobWFya2VyLCBrZXksIHByZVNldHRpbmdzLCBpbW11dCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiwgZGVmYXVsdHM7XHJcblxyXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XHJcblx0XHRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG1hcmtlci5zZWxlY3Rpb247XHJcbiAgICB0aGlzLmltbXV0ID0gX1NUT1JFLnJlZGVzY3JpYmluZyA/IG1hcmtlci5pc0ltbXV0IDogaW1tdXQ7XHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgYm9va21hcms6IGZhbHNlLFxyXG4gICAgICBjb25kczogbnVsbCxcclxuICAgICAgdGV4dDogc2VsZWN0aW9uLnRleHQsXHJcbiAgICAgIG5vdGU6IG51bGxcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBkIGluIGRlZmF1bHRzKSB7XHJcbiAgICAgIGlmICghcHJlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoZCkpIHtcclxuICAgICAgICBwcmVTZXR0aW5nc1tkXSA9IGRlZmF1bHRzW2RdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVTZXR0aW5ncy5pZCA9IHByZVNldHRpbmdzLmlkIHx8ICsrbWFya2VyLmlkY291bnQ7XHJcblx0XHR0aGlzLmlkID0gcHJlU2V0dGluZ3MuaWQ7XHJcblx0XHR0aGlzLnNpbXBsZSA9IHNlbGVjdGlvbi5zaW1wbGU7XHJcblxyXG5cdFx0bGV0IHJhbmdlID0gdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5yYW5nZTtcclxuXHJcblx0XHR0aGlzLnN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQ7XHJcblx0XHR0aGlzLmVuZE9mZnNldCA9IHJhbmdlLmVuZE9mZnNldDtcclxuXHJcblx0XHR0aGlzLndyYXBwZXJzID0gbnVsbDtcclxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YSA9IHtcclxuXHRcdFx0aWQ6IHByZVNldHRpbmdzLmlkLFxyXG5cdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0c3R5bGU6IHByZVNldHRpbmdzLnN0eWxlLFxyXG5cdFx0XHRjb25kczogcHJlU2V0dGluZ3MuY29uZHMsXHJcblx0XHRcdHRleHQ6IHByZVNldHRpbmdzLnRleHQsXHJcblx0XHRcdGJvb2ttYXJrOiBwcmVTZXR0aW5ncy5ib29rbWFyayxcclxuICAgICAgbm90ZTogcHJlU2V0dGluZ3Mubm90ZSxcclxuICAgICAgc3luY2VkOiBwcmVTZXR0aW5ncy5zeW5jZWRcclxuXHRcdH07XHJcblxyXG4gICAgaWYgKHRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHtcclxuICAgICAgdGhpcy5kZXNjcmliZV9pbW11dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Y3JlYXRlKHJhbmdlKSB7XHJcbiAgICByYW5nZSA9IHJhbmdlIHx8IHRoaXMucmFuZ2U7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgc3R5bGUgPSB0aGlzLmtleURhdGEuc3R5bGUsXHJcbiAgICAgICAgbm9kZXMgPSBzZWxlY3Rpb24ubm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzIHx8IHRoaXMuY3JlYXRlV3JhcHBlcnMoc3R5bGUsIG4pLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIGxhc3RJbmRleCA9IG4gLSAxLFxyXG4gICAgICAgIG5vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICAgIGlmICghaSkgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgdGhpcy5zdGFydE9mZnNldCk7XHJcblxyXG4gICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KVxyXG4gICAgICAgIHJhbmdlLnNldEVuZChub2RlLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgICByYW5nZS5zdXJyb3VuZENvbnRlbnRzKHdyYXBwZXJzW2ldKTtcclxuICAgICAgdGhpcy5jb250YWluZXJzLnB1c2god3JhcHBlcnNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgICBub2RlLnBhcmVudE5vZGUubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbihsYXN0SW5kZXgpO1xyXG5cclxuICAgIGlmICh0aGlzLmtleURhdGEuYm9va21hcmspIHRoaXMubWFya2VyLnNldEJvb2ttYXJrKHRoaXMsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHRoaXMuZGVzY3JpYmUoKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbiAgcmVnaXN0ZXJDbGlja0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIGZvciAobGV0IHdyYXBwZXIgb2Ygd3JhcHBlcnMpIHtcclxuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya2VyLnByb3h5KHRoaXMsIHRoaXMub25DbGljayksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DbGljayhlKSB7XHJcbiAgICBsZXQgZXZlbnQ7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgZXZlbnQgPSAnY2xpY2tlZDptYXJrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZSArICdfMCc7XHJcbiAgICAgIGV2ZW50ID0gJ2FjdGl2YXRlZDptYXJrJztcclxuICAgIH1cclxuICAgIHRoaXMubWFya2VyLmVtaXQoZXZlbnQsIHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIGJvb2ttYXJrOiAhIXRoaXMua2V5RGF0YS5ib29rbWFyayxcclxuICAgICAgbm90ZTogISF0aGlzLmtleURhdGEubm90ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlZmluZVBvc2l0aW9uKG4sIGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgIGxldCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBuID0gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IHdyYXBwZXJzLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBmaXJzdFdyYXBwZXIgPSB3cmFwcGVyc1swXTtcclxuICAgIGNvbnN0IGxhc3RXcmFwcGVyID0gd3JhcHBlcnNbbl07XHJcbiAgICBjb25zdCBmaXJzdFBhcmVudCA9IGZpcnN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgbGFzdFBhcmVudCA9IGxhc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgYW5jaG9yUHJldiwgZm9jdXNQcmV2O1xyXG5cclxuICAgIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGZpcnN0UGFyZW50LCBmaXJzdFdyYXBwZXIsIHRydWUpIC0gMTtcclxuICAgIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQobGFzdFBhcmVudCwgbGFzdFdyYXBwZXIsIHRydWUpO1xyXG5cclxuICAgIGFuY2hvclByZXYgPSBmaXJzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgZm9jdXNQcmV2ID0gbGFzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgIGlmIChhbmNob3JQcmV2ICYmIGFuY2hvclByZXYubm9kZVR5cGUgPT09IDEpIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uICs9IDE7XHJcbiAgICBpZiAoIWZvY3VzUHJldiB8fCBmb2N1c1ByZXYubm9kZVR5cGUgPT09IDMgfHwgZmlyc3RQYXJlbnQgPT09IGxhc3RQYXJlbnQpIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gLT0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IDA7XHJcbiAgICBpZiAodGhpcy5mb2N1c05vZGVQb3NpdGlvbiA8IDApIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSAwO1xyXG5cclxuICAgIGlmIChpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSBhbmNob3JQcmV2ICYmIGFuY2hvclByZXYuZGF0YSA/IGFuY2hvclByZXYuZGF0YS5sZW5ndGggOiAwO1xyXG4gICAgICB0aGlzLmVuZE9mZnNldCA9IHRoaXMuc2ltcGxlID8gdGhpcy5zdGFydE9mZnNldCArIHRoaXMua2V5RGF0YS50ZXh0Lmxlbmd0aCA6IHRoaXMuZW5kT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24odW5kZWZpbmVkLCB0cnVlKVxyXG4gICAgICAgIC5kZXNjcmliZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHR1bmRvKCkge1xyXG5cdFx0bGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcblx0XHRcdFx0d3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzLFxyXG5cdFx0XHRcdHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcblx0XHRcdFx0Y29udGFpbmVyLCB3cmFwcGVyO1xyXG5cclxuXHRcdHdoaWxlICh3LS0pIHtcclxuXHRcdFx0Y29udGFpbmVyID0gY29udGFpbmVyc1t3XTtcclxuXHRcdFx0d3JhcHBlciA9IHdyYXBwZXJzW3ddO1xyXG5cdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XHJcblx0XHRcdGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRyZWRvKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY29udGFpbmVyc1swXS5jaGlsZE5vZGVzW3RoaXMuYW5jaG9yTm9kZVBvc2l0aW9uXSwgdGhpcy5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoY29udGFpbmVyc1tjb250YWluZXJzLmxlbmd0aCAtIDFdLmNoaWxkTm9kZXNbdGhpcy5mb2N1c05vZGVQb3NpdGlvbl0sIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uLmNvbGxlY3ROb2RlcygpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSgpO1xyXG5cdH1cclxuXHR3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGluY2x1ZGluZ1RleHROb2Rlcykge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHRsZXQgY2hpbGRyZW4gPSBpbmNsdWRpbmdUZXh0Tm9kZXMgfHwgY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdFx0XHRjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0XHRcdGkgPSAwO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblx0Y3JlYXRlV3JhcHBlcnMoc3R5bGUsIG51bWJlcikge1xyXG5cdFx0bGV0IHdyYXBwZXJzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgd3JhcHBlcjtcclxuXHJcblx0XHRmb3IgKCA7IGkgPCBudW1iZXI7IGkrKykge1xyXG5cdFx0XHR3cmFwcGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZS5yZXBsYWNlKC87L2csICchaW1wb3J0YW50OycpKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnLCB0aGlzLmlkICsgJ18nICsgaSk7XHJcbiAgICAgIC8vd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NvbnRleHRtZW51JywgJ3RleHRtYXJrZXItY3RtJyk7XHJcblx0XHRcdHdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gd3JhcHBlcnM7XHJcblx0fVxyXG4gIGRlc2NyaWJlKCkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcblx0XHRjb25zdCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xyXG5cdFx0Y29uc3QgZW5kID0gcmFuZ2UuZW5kQ29udGFpbmVyO1xyXG5cdFx0Y29uc3Qgc2luZ2xlTm9kZSA9IHRoaXMuc2ltcGxlO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy53cmFwcGVyc1swXS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgcGFyZW50SXNUTSA9IHBhcmVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuXHRcdGNvbnN0IGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgZ3JhbmRncmFtcGEgPSBncmFtcGEucGFyZW50Tm9kZSB8fCAwO1xyXG5cdFx0Y29uc3QgZlROUCA9IHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuXHRcdFx0bzogdGhpcy5zdGFydE9mZnNldCxcclxuXHRcdFx0bjE6IHBhcmVudElzVE0gPyAnVE0nIDogcGFyZW50Lm5vZGVOYW1lLFxyXG5cdFx0XHRwMTogZlROUCxcclxuXHRcdFx0bjI6IGdyYW1wYS5ub2RlTmFtZSxcclxuXHRcdFx0cDI6IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCksXHJcblx0XHRcdHAzOiBncmFuZGdyYW1wYSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYSwgZ3JhbXBhKSA6IHVuZGVmaW5lZCxcclxuXHRcdFx0cDQ6IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEucGFyZW50Tm9kZSwgZ3JhbmRncmFtcGEpIDogdW5kZWZpbmVkXHJcblx0XHR9O1xyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuXHR9XHJcbiAgZGVzY3JpYmVfaW1tdXQoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBsZXQgc3RhcnQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBlbmQgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChzdGFydCAhPT0gYm9keSkge1xyXG4gICAgICBzdGFydFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKHN0YXJ0LnBhcmVudE5vZGUsIHN0YXJ0KSk7XHJcbiAgICAgIHN0YXJ0ID0gc3RhcnQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHdoaWxlIChlbmQgIT09IGJvZHkpIHtcclxuICAgICAgZW5kUG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoZW5kLnBhcmVudE5vZGUsIGVuZCkpO1xyXG4gICAgICBlbmQgPSBlbmQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgIHA6IHN0YXJ0UG9zaXRpb25cclxuICAgICAgfSxcclxuICAgICAgZToge1xyXG4gICAgICAgIG86IHRoaXMuZW5kT2Zmc2V0LFxyXG4gICAgICAgIHA6IGVuZFBvc2l0aW9uXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgfVxyXG5cdH0sXHJcblxyXG4gIGhhbmRsZXI6IG51bGwsXHJcbiAgYXBwZW5kZWQ6IGZhbHNlLFxyXG4gIGhlaWdodDogMCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAncG9wdXAnO1xyXG4gICAgICB0aGlzLm1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cCcpO1xyXG4gICAgY29uc3QgYmdDb2xvclJlZ0V4cCA9IC9iYWNrZ3JvdW5kLWNvbG9yOigjW2EtZjAtOV17Nn0pLztcclxuICAgIGxldCBiZ0NvbG9yLCBjb2xvckJ0bjtcclxuICAgIGZvciAobGV0IG0gaW4gdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgIGJnQ29sb3IgPSB0aGlzLm1hcmtlcnNbbV0uc3R5bGUubWF0Y2goYmdDb2xvclJlZ0V4cCk7XHJcbiAgICAgIGlmIChiZ0NvbG9yKSB7XHJcbiAgICAgICAgY29sb3JCdG4gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cGNvbG9yJyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JCdG4pO1xyXG4gICAgICAgIGNvbG9yQnRuLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yLnBvcCgpO1xyXG4gICAgICAgIGNvbG9yQnRuLmlkID0gJ3RtcG9wdXBjb2xvci0tJyArIG07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93KCkge1xyXG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBwb3B1cC5zdHlsZTtcclxuICAgIGxldCBwb3B1cEhlaWdodDtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNlZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0aW9uUG9zaXRpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IHNlbGVjdGlvblBvc2l0aW9uLnRvcCAtIHNlbGVjdGlvblBvc2l0aW9uLmhlaWdodCArIHdpbmRvdy5zY3JvbGxZICsgJ3B4JztcclxuICAgICAgc3R5bGUubGVmdCA9IHNlbGVjdGlvblBvc2l0aW9uLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCArICdweCc7XHJcblxyXG4gICAgICBwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IE1hdGgubWF4KDAsIHBhcnNlSW50KHN0eWxlLnRvcCkgLSBwb3B1cEhlaWdodCkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0KSAhPT0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSArIHBvcHVwSGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWlnaHQgPSBwb3B1cEhlaWdodDtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKCFzZWxlY3RlZCkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTW91c2Vkb3duKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSAnVE1QT1BVUENPTE9SJykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJywgZWwuaWQuc3BsaXQoJy0tJykucG9wKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLIGZyb20gJy4vbWFyay1pdGVtJ1xyXG5pbXBvcnQgX0JPT0tNQVJLIGZyb20gJy4vYm9va21hcmsnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG5cdFx0RU5WOiB7XHJcblx0XHRcdCdzZXQ6ZW50cmllcyc6ICd1cGRhdGVJRCcsXHJcblx0XHRcdCdwcmVzc2VkOm1hcmtlci1rZXknOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAncHJlc3NlZDpob3RrZXknOiAnb25Ib3RrZXknLFxyXG4gICAgICAnY2xpY2tlZDpwb3B1cC1tYXJrZXInOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnc2VsZWN0aW9uLWVuZCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdyZWNyZWF0ZScsXHJcbiAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdjdHg6LWInOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAnY3R4OmQnOiAncmVtb3ZlJyxcclxuICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ2N0eDpuJzogJ2FkZE5vdGUnLFxyXG4gICAgICAnY3R4OmMnOiAnY29weScsXHJcbiAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J2NoYW5nZWQ6bm90ZS1jb2xvcic6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgJ2NoYW5nZWQ6bm90ZS1zaXplJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyayc6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JzogJ2ltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJzogJ3NhdmUnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJzogJ3VuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JzogJ2NvcHknLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdvbkhhc2hDaGFuZ2UnXHJcblx0XHR9XHJcblx0fSxcclxuXHRzZWxlY3Rpb246IG51bGwsXHJcblx0ZG9uZTogW10sXHJcblx0dW5kb25lOiBbXSxcclxuXHR2aXN1YWxseU9yZGVyZWRNYXJrczogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgYm9va21hcms6IG51bGwsXHJcbiAgcmVtb3ZlZEJvb2ttYXJrOiBudWxsLFxyXG5cdGlkY291bnQ6IDAsXHJcblx0bWFya1Njcm9sbFBvczogLTEsXHJcblxyXG4gIHVwZGF0ZUlEKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICBjb25zdCBpZHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuXHJcbiAgICAgIGlmICghbG9ja2VkICYmIGVudHJ5LmlkY291bnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya3MgPSAoZW50cnkubWFya3MgfHwgW10pLmNvbmNhdChlbnRyeS5sb3N0IHx8IFtdKSxcclxuICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgIHdoaWxlIChkLS0pIHtcclxuICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pZGNvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaWRzKTtcclxuICB9LFxyXG5cdG1hcmsoa2V5LCBkYXRhLCBpbW11dCkge1xyXG5cdFx0dGhpcy51bmRvbmUubGVuZ3RoID0gMDtcclxuXHJcbiAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgIGlmIChkYXRhLmF1dG9ub3RlKSB0aGlzLmVtaXQoJ2FkZDpub3RlJywgbWFyaywgZGF0YS5hdXRvbm90ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG1hcms7XHJcblx0fSxcclxuXHR1bmRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0aWYgKGRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmUucG9wKCk7XHJcbiAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgIHRoaXMudW5kb25lLnB1c2gobWFyay51bmRvKCkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYm9va21hcmspIHRoaXMudW5kb0Jvb2ttYXJrKCk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG5cdHJlZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0aWYgKHVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMudW5kb25lLnBvcCgpO1xyXG5cclxuICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgW21hcmtdKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG4gIGN1dE91dChpKSB7XHJcbiAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICBpbmRpY2VzID0gW2ldLFxyXG4gICAgICAgIG1hcmssIHNtYWxsZXN0SUQ7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICBmb3IgKHZhciB4ID0gaiArIDE7IHggPCBsOyB4KyspIHtcclxuICAgICAgICBtYXJrID0gZG9uZVt4XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgaWYgKCF0b0JlUmVtb3ZlZC5pbmNsdWRlcyh4KSkgdG9CZVJlbW92ZWQucHVzaCh4KTtcclxuICAgICAgICAgIGluZGljZXMucHVzaCh4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW5kaWNlcy5zb3J0KCk7XHJcbiAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xyXG4gICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG4gICAgc21hbGxlc3RJRCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHRvQmVSZW1vdmVkKTtcclxuXHJcbiAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5zcGxpY2UodG9CZVJlbW92ZWQucG9wKCksIDEpWzBdLnVuZG8oKTtcclxuICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNtYWxsZXN0SUQ7XHJcbiAgfSxcclxuICByZW1vdmUoaWQpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgaWQgPSBpZCA/IGlkIDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICBsZXQgbWFyayA9IHRoaXMuZ2V0QnlJZChpZC5zcGxpdCgnXycpWzBdKSxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICBwb3NpdGlvbiA9IGRvbmUuaW5kZXhPZihtYXJrKSxcclxuICAgICAgICBzbWFsbGVzdElELCBpO1xyXG5cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgdGhpcy51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMudW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLnVuZG9uZS5sZW5ndGgpIHRoaXMucmVkbyh0cnVlKTtcclxuXHJcbiAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZFswXSk7XHJcbiAgfSxcclxuICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpXHJcbiAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gaGlnaGxpZ2h0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShoaWdobGlnaHQudGV4dENvbnRlbnQpLCBoaWdobGlnaHQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb25lID0gW107XHJcbiAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gW107XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IC0xO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgncmVzdW1lZDptYXJrZXJzJywgZW50cnkpO1xyXG4gIH0sXHJcbiAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICB0aGlzLmlzSW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gdHJ1ZTtcclxuICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgfSxcclxuICBzYXZlKCkge1xyXG4gICAgY29uc3QgaWZyYW1lID0gX1NUT1JFLmlmcmFtZTtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcblxyXG4gICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICBpZiAoX1NUT1JFLmlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGlmICghbG9ja2VkICYmIG5hbWluZyA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGlmcmFtZSA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgIGlmIChfU1RPUkUubmFtZSkgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBjb25maXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG4gICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cdH0sXHJcbiAgYXV0b3NhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgndW5zYXZlZC1jaGFuZ2VzJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNvcHkoKSB7XHJcbiAgICBjb25zdCBtYXJrID0gdGhpcy5maW5kTWFyaygpO1xyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCByYW5nZSA9IG1hcmsucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBtYXJrLnNlbGVjdGlvbi5zZWxmO1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KHdyYXBwZXJzWzBdLCAwKTtcclxuICAgIHJhbmdlLnNldEVuZCh3cmFwcGVyc1t3cmFwcGVycy5sZW5ndGggLSAxXSwgMSk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2VsZWN0aW9uLnRvU3RyaW5nKCkudHJpbSgpLnJlcGxhY2UoLyhcXHJcXG4pezEsfS9nLCAnXFxyXFxuJykpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gIH0sXHJcbiAgc3RvcmUobWFyaywgc2F2ZSwgb3JkZXIpIHtcclxuXHRcdHRoaXMuZG9uZS5wdXNoKG1hcmspO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHRpZiAob3JkZXIpIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblx0fSxcclxuICByZWNyZWF0ZShtYXJrKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcbiAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgfSxcclxuICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnY29tcGxldGVkOnJlc3RvcmF0aW9uLXByb2Nlc3MnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoX1NUT1JFLm5hbWUgPT09IG1hcmsua2V5RGF0YS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvTWFyayhtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3J0QnlJZCgpO1xyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5yZWRlc2NyaWJpbmcpIHtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnY29tcGxldGVkOnJlc3RvcmF0aW9uLXByb2Nlc3MnKTtcclxuICB9LFxyXG4gIGFkZE5vdGUoaWQpIHtcclxuICAgIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCB0aGlzLmZpbmRNYXJrKGlkKSk7XHJcbiAgfSxcclxuICBzYXZlTm90ZShpZCkge1xyXG4gICAgaWYgKCFfU1RPUkUubG9ja2VkKSByZXR1cm4gdGhpcy5hdXRvc2F2ZSgpO1xyXG5cclxuICAgIGNvbnN0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQpLmtleURhdGE7XHJcbiAgICBjb25zdCBzeW5jZWQgPSB0eXBlb2YgbWFyay5zeW5jZWQgPT09ICdib29sZWFuJyA/IG1hcmsuc3luY2VkIDogX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICBtYXJrczogW21hcmtdLFxyXG4gICAgICBuYW1lOiBtYXJrLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSksXHJcbiAgICAgIHN5bmNlZFxyXG4gICAgfTtcclxuICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGdvdG9NYXJrKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtFbGVtZW50cyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3M7XHJcbiAgICBsZXQgZWwsIHBvcywgaWQ7XHJcbiAgICBpZiAobWFyayB8fCBtYXJrID09PSAwKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSBtYXJrICsgMTtcclxuICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1ttYXJrXTtcclxuICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG4gICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQ9XCInICsgaWQgKyAnXzBcIl0nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9zID0gdGhpcy5tYXJrU2Nyb2xsUG9zO1xyXG4gICAgICBlbCA9IG1hcmtFbGVtZW50c1twb3NdO1xyXG4gICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuXHJcblx0XHRpZiAoIW1hcmsgfHwgdHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB0aGlzLmdldEJ5SWQoaWQpLm9uQ2xpY2soaWQpO1xyXG4gICAgdGhpcy5pbmRpY2F0ZU1hcmsoaWQpO1xyXG4gIH0sXHJcblx0Z290b05leHRNYXJrKGRpcikge1xyXG5cdFx0Y29uc3QgbCA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubGVuZ3RoO1xyXG5cclxuXHRcdHRoaXMubWFya1Njcm9sbFBvcyArPSBkaXI7XHJcblxyXG5cdFx0aWYgKHRoaXMubWFya1Njcm9sbFBvcyA8IDApIHRoaXMubWFya1Njcm9sbFBvcyA9IGwgLSAxO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5tYXJrU2Nyb2xsUG9zID49IGwpIHRoaXMubWFya1Njcm9sbFBvcyA9IDA7XHJcblxyXG5cdFx0dGhpcy5nb3RvTWFyaygpO1xyXG5cdH0sXHJcbiAgaW5kaWNhdGVNYXJrKGlkKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpXHJcbiAgICAgIC5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgY29uc3QgdG1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZF49XCInICsgaWQgKyAnX1wiXScpKTtcclxuXHJcbiAgICB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSksIDIwMDApO1xyXG4gIH0sXHJcbiAgc2V0Qm9va21hcmsobSwgc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrLFxyXG4gICAgICAgIG1hcmsgPSB0aGlzLmZpbmRNYXJrKG0pO1xyXG5cclxuICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChib29rbWFyaykge1xyXG4gICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib29rbWFyayA9IG5ldyBfQk9PS01BUksoKS5zZXQobWFyayk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdhZGRlZDpib29rbWFyaycpO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICB1bmRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgaWYgKCFib29rbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IGJvb2ttYXJrO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoYm9va21hcmspIGJvb2ttYXJrLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkLCBwb3MpIHtcclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lLFxyXG5cdFx0XHQgIGQgPSBkb25lLmxlbmd0aCxcclxuXHRcdFx0ICBtYXJrO1xyXG5cclxuXHRcdHdoaWxlIChkLS0pIHtcclxuXHRcdFx0bWFyayA9IGRvbmVbZF07XHJcblxyXG5cdFx0XHRpZiAobWFyay5rZXlEYXRhLmlkID09IGlkKVxyXG5cdFx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG1hcmssIHBvc2l0aW9uOiBkIH0gOiBtYXJrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbnVsbCwgcG9zaXRpb246IG51bGwgfSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0ZmluZE1hcmsoeCkge1xyXG5cdFx0eCA9IHggPyB4IDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuXHRcdGxldCBtYXJrID0gIXggP1xyXG5cdFx0XHR0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdIDpcclxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ3N0cmluZycgP1xyXG5cdFx0XHR0aGlzLmdldEJ5SWQoeC5zcGxpdCgnXycpWzBdKSA6XHJcblx0XHRcdHg7XHJcblx0XHRyZXR1cm4gbWFyaztcclxuXHR9LFxyXG4gIHNvcnRCeUlkKCkge1xyXG4gICAgdGhpcy5kb25lLnNvcnQoKG1hcmsxLCBtYXJrMikgPT4gbWFyazEuaWQgLSBtYXJrMi5pZCk7XHJcbiAgfSxcclxuXHRvcmRlck1hcmtzVmlzdWFsbHkoKSB7XHJcblx0XHR0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZCQ9XCJfMFwiXScpKS5zb3J0KChtMSwgbTIpID0+IHtcclxuXHRcdFx0bGV0IGJiMSA9IG0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0YmIyID0gbTIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHR0b3AxID0gYmIxLnRvcCxcclxuXHRcdFx0XHRcdHRvcDIgPSBiYjIudG9wO1xyXG5cclxuXHRcdFx0aWYgKHRvcDEgPCB0b3AyKSByZXR1cm4gLTE7XHJcblx0XHRcdGVsc2UgaWYgKHRvcDIgPCB0b3AxKSByZXR1cm4gMTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGJiMS5sZWZ0IDwgYmIyLmxlZnQpIHJldHVybiAtMTtcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLm1hcChtYXJrID0+IHBhcnNlSW50KG1hcmsuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKTtcclxuICAgIGlmICghX1NUT1JFLmlmcmFtZSkgdGhpcy5lbWl0KCd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJywgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzKTtcclxuXHR9LFxyXG4gIG1hcmtzSW50ZXJzZWN0KG1hcmsxLCBtYXJrMikge1xyXG5cdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICBpZDEgPSBtYXJrMS5pZCxcclxuICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICB3MiwgdG1zLCBsO1xyXG5cclxuICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKHcyLS0pIHtcclxuICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG4gIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0bGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuXHJcblx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGtleSA9IGU7XHJcblx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGtleSA9IGtleSB8fCAnbSc7XHJcblx0XHR9XHJcblxyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldykge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6ICEhc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBfU1RPUkUuaW1tdXQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgfSk7XHJcblx0fSxcclxuICBvbkhvdGtleShrZXkpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHNlbGYucmVkbygpOyBicmVhaztcclxuICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93dXAnOiBzZWxmLmdvdG9OZXh0TWFyaygtMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhcnJvd2Rvd24nOiBzZWxmLmdvdG9OZXh0TWFyaygxKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYyc6IHNlbGYuY29weSgpOyBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRyZXRyaWV2ZUVudHJ5KCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgY29uc3QgbmFtZSA9IF9TVE9SRS5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0ZW50cnkubGFzdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0ZW50cnkuY291bnQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcblx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICBpZiAoaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcbiAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgaXNOZXcgfHwgIWVudHJ5Lm5hbWUgPyBuYW1lIDogZW50cnkubmFtZTtcclxuXHJcblx0XHRyZXR1cm4gZW50cnk7XHJcblx0fSxcclxuICBjb2xsZWN0TWFya3MoKSB7XHJcbiAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICBjb25zdCBtYXJrcyA9IFtdO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgIH1cclxuXHJcbiAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdGtEID0gZG9uZVttXS5rZXlEYXRhO1xyXG4gICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdH1cclxuICAgIHJldHVybiBtYXJrcztcclxuICB9LFxyXG4gIG9uSGFzaENoYW5nZSgpIHtcclxuICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZnMgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmZzID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5mcyB8fCBfU1RPUkUubm90ZUZvbnRTaXplO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZU5vdGVFbGVtZW50KCkge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZScpO1xyXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWhlYWRlcicpO1xyXG4gICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlYWN0aW9ucycpO1xyXG4gICAgICBjb25zdCBkZWwgPSB0aGlzLmRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWRlbGV0ZScpO1xyXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLm1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZW1pbmltaXplJyk7XHJcbiAgICAgIGNvbnN0IGdlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjdXN0b21pemUnKTtcclxuICAgICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMucGFsZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXBhbGV0dGUnKTtcclxuICAgICAgY29uc3QgcCA9IHRoaXMudGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0O1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yIHx8IF9TVE9SRS5ub3RlQ29sb3I7XHJcbiAgICAgIF9TVE9SRS5ub3RlQ29sb3IgPSBjb2xvcjtcclxuICAgICAgY29uc3QgZGVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgICAgY29uc3QgbWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDEzKSk7XHJcbiAgICAgIGNvbnN0IGdlYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDI2OTkpKTtcclxuXHJcbiAgICAgIFsnZ3JlZW4nLCAnd2hpdGUnLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnLCAncHVycGxlJywgJ2JsdWUnLCAndHVycXVvaXNlJ10uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBsZXQgY29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjb2xvcicpO1xyXG4gICAgICAgIGNvbG9yLmNsYXNzTmFtZSA9ICd0bW5vdGVjb2xvci0tJyArIGM7XHJcbiAgICAgICAgY29sb3Iuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgYyk7XHJcbiAgICAgICAgcGFsZXR0ZS5hcHBlbmRDaGlsZChjb2xvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0tbm90ZScsIHRydWUpO1xyXG4gICAgICBkZWwuYXBwZW5kQ2hpbGQoZGVsVGV4dCk7XHJcbiAgICAgIG1pbi5hcHBlbmRDaGlsZChtaW5UZXh0KTtcclxuICAgICAgZ2Vhci5hcHBlbmRDaGlsZChnZWFyVGV4dCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChnZWFyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKG1pbik7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICBpZiAodGV4dCkgcC52YWx1ZSA9IHRleHQ7XHJcblxyXG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHRoaXMuYXR0ZW1wdFVwZGF0ZShlLCBlLnRhcmdldCwgdHJ1ZSksIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0gJyc7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBhdHRlbXB0VXBkYXRlKGUsIGVsLCBmb3JjZSkge1xyXG4gICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXRoaXMucmVjZW50bHlVcGRhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlKGVsKSwgMzAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZWwpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0ID0gZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93KCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGlubmVyV2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgIGxldCBwb3MsIGxlZnQsIHRvcDtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBvcy5sICE9PSBudWxsKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5wb3M7XHJcbiAgICAgICAgdG9wID0gcG9zLnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG4gICAgICAgIHRvcCA9IHRoaXMucG9zLnQgPSBwb3MudCArIHBvcy5vZmZzZXQ7XHJcbiAgICAgIH1cclxuICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBwb3MubDtcclxuXHJcbiAgICAgIGlmIChsZWZ0ICsgMzQwID4gaW5uZXJXaW5kb3dXaWR0aCkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gaW5uZXJXaW5kb3dXaWR0aCAtIDM0MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZS53ID8gYHdpZHRoOiR7dGhpcy5zaXplLnd9O2hlaWdodDoke3RoaXMuc2l6ZS5ofTtgIDogJyc7XHJcbiAgICAgIGNvbnN0IGZvbnRTaXplID0gYGZvbnQtc2l6ZTogJHt0aGlzLmZzfXB4ICFpbXBvcnRhbnQ7YDtcclxuXHJcbiAgICAgIEJPRFkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGRpc3BsYXk6YmxvY2s7dG9wOiR7dG9wfXB4O2xlZnQ6JHtsZWZ0fXB4O2ApO1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgKHNpemUgKyBmb250U2l6ZSkpO1xyXG4gICAgICB0aGlzLmNvbm5lY3RNdXRhdGlvbk9ic2VydmVyKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYnJpbmdVcEZyb250KCkge1xyXG4gICAgICBBcnJheS5mcm9tKEJPRFkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpKS5mb3JFYWNoKG5vdGUgPT4ge1xyXG4gICAgICAgIGlmIChub3RlID09PSB0aGlzLmVsKSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDc7XHJcbiAgICAgICAgZWxzZSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDY7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKSB7XHJcbiAgICAgIEJPRFkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKHRoaXMudmlzaWJsZSkgdGhpcy5oaWRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUGFsZXR0ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLnBhbGV0dGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldHRpbmdzTW9kZSA9ICF0aGlzLnNldHRpbmdzTW9kZTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb2xvcihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tJyArIHRoaXMuY29sb3IpO1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSBfU1RPUkUubm90ZUNvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgIHRoaXMudG9nZ2xlUGFsZXR0ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1jb2xvcicsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZE1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ25vdGVvbmNsaWNrJykudGhlbihub3Rlb25jbGljayA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGVvbmNsaWNrKSB7XHJcbiAgICAgICAgICBpZiAoISF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5tYXJrQ2xpY2tIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHRoaXMubWFyay53cmFwcGVycykge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGUnKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlTWFya0xpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya0xpc3RlbmVycygpIHtcclxuICAgICAgaWYgKCF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb25uZWN0TXV0YXRpb25PYnNlcnZlcigpIHtcclxuICAgICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddIH07XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyIHx8IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5zYXZlU2l6ZSkpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRleHRhcmVhLCBjb25maWcpO1xyXG4gICAgfSxcclxuICAgIGdldFBvc2l0aW9uKCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5tYXJrLndyYXBwZXJzW3RoaXMubWFyay53cmFwcGVycy5sZW5ndGggLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0OiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIEJPRFkuY2xpZW50VG9wLFxyXG4gICAgICAgIGw6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIEJPRFkuY2xpZW50TGVmdCxcclxuICAgICAgICBvZmZzZXQ6IHJlY3QuaGVpZ2h0XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgb25EcmFnU3RhcnQoZSwgZWwpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRyYWdEWCA9IGUucGFnZVggLSB0aGlzLnBvcy5sO1xyXG4gICAgICB0aGlzLmRyYWdEWSA9IGUucGFnZVkgLSB0aGlzLnBvcy50O1xyXG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0OmRyYWcnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIG9uRHJhZyhub3RlLCBlKSB7XHJcbiAgICAgIGlmIChub3RlID09PSB0aGlzLm1hcmsuaWQpIHtcclxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvcy5sID0gZS5wYWdlWCAtIHRoaXMuZHJhZ0RYO1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvcy50ID0gZS5wYWdlWSAtIHRoaXMuZHJhZ0RZO1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EcmFnRW5kKCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnBvcyA9IHRoaXMucG9zO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1wb3MnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIHNhdmVTaXplKG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBtdXRhdGlvbnNMaXN0WzBdLnRhcmdldC5zdHlsZTtcclxuICAgICAgdGhpcy5zaXplID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5zaXplID0geyB3OiBzdHlsZS53aWR0aCwgaDogc3R5bGUuaGVpZ2h0IH07XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLXNpemUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTk9URSBmcm9tICcuL25vdGUnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3JlbW92ZU5vdGVTdG9yYWdlJyxcclxuICAgICAgJ3Jlc3RvcmU6bm90ZXMnOiAncmVzdG9yZScsXHJcbiAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICd0b2dnbGU6bm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlU3R5bGUnLFxyXG4gICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kTm90ZXNTdGF0ZScsXHJcbiAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ3JlcG9ydCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBub3Rlczoge30sXHJcbiAgdG9nZ2xlOiBudWxsLFxyXG4gIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gIGRyYWdTdG9wSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICB9LFxyXG4gIGFkZChtYXJrLCBjb2xvcikge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZXNbbWFyay5pZF07XHJcbiAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICBpZiAoIV9TVE9SRS5yZXN0b3JpbmcpIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgcmV0dXJuIHRoaXMubm90ZXNbbWFyay5pZF0gPSBuZXcgX05PVEUobWFyaywgY29sb3IpO1xyXG4gIH0sXHJcbiAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgZm9yIChsZXQgbWFyayBvZiBtYXJrcykge1xyXG4gICAgICBpZiAobWFyay5rZXlEYXRhLm5vdGUpIHtcclxuICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkQW5kU2hvdyhtYXJrLCBjb2xvcikge1xyXG4gICAgdGhpcy5hZGQobWFyaywgY29sb3IpLnNob3coKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGVTdG9yYWdlKGlkKSB7XHJcbiAgICBkZWxldGUgdGhpcy5ub3Rlc1tpZF07XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQWxsKCkge1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICBjb25zdCBub3RlcyA9IHRoaXMubm90ZXM7XHJcbiAgICBsZXQgbWV0aCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlJykubGVuZ3RoID8gJ2hpZGUnIDogJ3Nob3cnLFxyXG4gICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICBub3RlO1xyXG4gICAgZm9yIChsZXQgbiBpbiBub3Rlcykge1xyXG4gICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgIGlmIChub3RlLnZpc2libGUgPT09IGNvbmRpdGlvbikge1xyXG4gICAgICAgIG5vdGVbbWV0aF0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlU3R5bGUoKSB7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncyAmJiBzZXR0aW5ncy5taXNjKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcCkgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXBsYWludmlldykgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS1wbGFpbi12aWV3Jyk7XHJcbiAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgICBfU1RPUkUubm90ZUZvbnRTaXplID0gc2V0dGluZ3MubWlzYy5ub3RlZm9udHNpemUgfHwgMTI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgaXNFbXB0eShvYmopIHtcclxuICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbiAgfSxcclxuICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIgPSAoZSkgPT4gdGhpcy5lbWl0RHJhZ0V2ZW50KG5vdGUsIGUpO1xyXG4gICAgY29uc3QgZHJhZ1N0b3BIYW5kbGVyID0gdGhpcy5kcmFnU3RvcEhhbmRsZXIgPSAoZSkgPT4gdGhpcy5zdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpO1xyXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gIH0sXHJcbiAgZW1pdERyYWdFdmVudChub3RlLCBlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bm90ZScsIG5vdGUsIGUpO1xyXG4gIH0sXHJcbiAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgdGhpcy5lbWl0KCdub3Rlcy1zdGF0ZScsICF0aGlzLmlzRW1wdHkodGhpcy5ub3RlcyksIGluZm8pO1xyXG4gIH0sXHJcbiAgcmVwb3J0KCkge1xyXG4gICAgdGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpIHx8IHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IHdpbmRvdy5kb2N1bWVudCxcclxuICBhdXRvUGF1c2U6IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb25zJzogJ3JlbW92ZUxpc3RlbmVycycsXHJcbiAgICAgICdjb21wbGV0ZWQ6cmVzdG9yYXRpb24tcHJvY2Vzcyc6ICdhZGRMaXN0ZW5lcnMnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGtleWRvd246IHtcclxuICAgICAgICAnKic6ICdkZWxlZ2F0ZSdcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgJyonOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZWxlY3Rpb25Db2xsYXBzZWQ6IHRydWUsXHJcbiAgc2hpZnRTZW5zaXRpdmVLZXlzOiBbMTMsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCAxNzEsIDE3M10sXHJcbiAga2V5Q29kZU1hcDoge1xyXG4gICAgJzEzJzogJ0VudGVyJyxcclxuICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgJzUzJzogJzUnLCAnNTQnOiAnNicsICc1NSc6ICc3JywgJzU2JzogJzgnLCAnNTcnOiAnOScsXHJcbiAgICAnMTcxJzogJysnLCAnMTczJzogJy0nXHJcbiAgfSxcclxuXHJcbiAgaXNFZGl0YWJsZShlbCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGVsLnRhZ05hbWU7XHJcblxyXG4gICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gIH0sXHJcbiAgZGVsZWdhdGUoZSkge1xyXG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlLFxyXG4gICAgICAgIG1vZEtleSA9IChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkpLFxyXG4gICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICBsb2NrZWRBY3Rpb25zID0gWydiJywgJ3MnLCAneScsICd6JywgJ2QnXSxcclxuICAgICAgICBmdW5jdGlvbktleXMgPSBsb2NrZWRBY3Rpb25zLmNvbmNhdChhcnJvd0tleXMpLmNvbmNhdCgnYycpLFxyXG4gICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkICYmIGxvY2tlZEFjdGlvbnMuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hpZnRTZW5zaXRpdmVLZXlzLmluY2x1ZGVzKGtleUNvZGUpKSBrZXkgPSB0aGlzLmtleUNvZGVNYXBba2V5Q29kZV07XHJcblxyXG4gICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUoZS50YXJnZXQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBjb25zdCBvcmlnS2V5ID0ga2V5O1xyXG4gICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICBjb25zdCBpc01hcmtlcktleSA9IG1hcmtlcnNba2V5XTtcclxuICAgICAgY29uc3QgaXNDdXN0b21NYXJrZXJLZXkgPSBpc01hcmtlcktleSAmJiAhZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICBjb25zdCBzZXR0aW5nID0gc2hvcnRjdXRzW2tleV07XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAndycgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5nWzFdKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgczEgPSBzaG9ydGN1dFswXTtcclxuICAgICAgICBjb25zdCBzMiA9IHNob3J0Y3V0WzFdO1xyXG5cclxuICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3ByZXNzZWQ6aG90a2V5Jywga2V5KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbkNvbGxhcHNlZCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZDtcclxuICAgIGlmICh0aGlzLnNlbGVjdGlvbkNvbGxhcHNlZCAhPT0gc2VsZWN0aW9uQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzZWxlY3Rpb24nLCAhc2VsZWN0aW9uQ29sbGFwc2VkKTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25Db2xsYXBzZWQgPSBzZWxlY3Rpb25Db2xsYXBzZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0luQ2h1bmtzKGRhdGEsIHByb2MsIGNiKSB7XHJcbiAgICBwcm9jID0gcHJvYy5iaW5kKHRoaXMpO1xyXG4gICAgY2IgPSBjYi5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdChmdW5jdGlvbiByZWMoKSB7XHJcblx0XHRcdGxldCBleHBpcmUgPSArbmV3IERhdGUoKSArIDUwMDtcclxuXHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHR0cnkge1xyXG4gICAgICAgICAgcHJvYyhkYXRhLnNoaWZ0KCkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdFx0fSB3aGlsZSAoZGF0YS5sZW5ndGggPiAwICYmIGV4cGlyZSA+ICtuZXcgRGF0ZSgpKTtcclxuXHJcblx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHJlYygpLCAwKTtcclxuXHRcdFx0ZWxzZSBjYigpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbiAgcmVwb3J0KCkge1xyXG4gICAgbGV0IGxsID0gdGhpcy5sb3N0Lmxlbmd0aDtcclxuICAgIGlmIChsbCkge1xyXG4gICAgICB3aGlsZShsbC0tKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubG9zdFtsbF0udGVtcDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ2xvc3Q6bWFya3MnLCB0aGlzLmZhaWx1cmVSZXBvcnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdmaW5pc2hlZDpyZXN0b3JhdGlvbicsIHRoaXMuZW50cnkubmFtZSwgdGhpcy5yZXN0b3JlZCwgdGhpcy5sb3N0LCB0aGlzLmFyZWEpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5jYWNoZSA9IFtdO1xyXG4gICAgdGhpcy5waGFzZSA9IDE7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsID0gMDtcclxuICAgIHRoaXMuY2h1bmtEdXJhdGlvbiA9IDUwMDtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICB0aGlzLm9vbSA9IGVudHJ5Lm1hcmtzLmxlbmd0aCA9PT0gMSAmJiBlbnRyeS5tYXJrc1swXS5pZCA9PSAxO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpbWVyKCkge1xyXG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICByZXR1cm4gdGltZXI7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZW50cnkgPSB0aGlzLmVudHJ5LFxyXG4gICAgICAgIG5vdyA9IFtdLCBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzLFxyXG4gICAgICAgIGwgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIG1hcms7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG5cclxuICAgICAgdGhpcy5jb252ZXJ0RGVzY3JpcHRpb24obWFyaykuY3JlYXRlVGVtcE9iamVjdChtYXJrKTtcclxuXHJcbiAgICAgIGlmIChtYXJrLmNvbmRzLm4xID09PSAnVE0nKSBwb3N0cG9uZWQucHVzaChtYXJrKTtcclxuICAgICAgZWxzZSBub3cucHVzaChtYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnF1ZXVlLnB1c2gobm93KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gcG9zdHBvbmVkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW3Bvc3Rwb25lZFtpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzdG9yZSgpO1xyXG4gIH1cclxuICBjb252ZXJ0RGVzY3JpcHRpb24obWFyaykge1xyXG4gICAgaWYgKHR5cGVvZiBtYXJrLmNvbmRzLm8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxldCBjb25kcyA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgICBjb252ZXJ0ZWRDb25kcyA9IHtcclxuICAgICAgICAgICAgbzogY29uZHMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgICAgIG4xOiBjb25kcy5maXJzdE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBuMjogY29uZHMuZmlyc3RQYXJlbnROb2RlTmFtZSxcclxuICAgICAgICAgICAgcDE6IGNvbmRzLmZpcnN0VGV4dE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDI6IGNvbmRzLmZpcnN0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMzogY29uZHMuZmlyc3RQYXJlbnROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHA0OiBjb25kcy5maXJzdEdyYW1wYU5vZGVQb3NpdGlvblxyXG4gICAgICAgICAgfTtcclxuICAgICAgZGVsZXRlIG1hcmsuY29uZHM7XHJcbiAgICAgIG1hcmsuY29uZHMgPSBjb252ZXJ0ZWRDb25kcztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjcmVhdGVUZW1wT2JqZWN0KG1hcmspIHtcclxuICAgIGxldCB0ZXh0ID0gbWFyay50ZXh0LFxyXG4gICAgICAgIHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCksXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gdGhpcy5zcXVlZXplKG1hcmsudGV4dCk7XHJcblxyXG4gICAgbWFyay50ZW1wID0ge1xyXG4gICAgICB0ZXh0TGVuZ3RoOiB0ZXh0Lmxlbmd0aCxcclxuICAgICAgdHJpbW1lZFRleHQ6IHRyaW1tZWRUZXh0LFxyXG4gICAgICB0cmltbWVkVGV4dExlbmd0aDogdHJpbW1lZFRleHQubGVuZ3RoLFxyXG4gICAgICBzcXVlZXplZFRleHQ6IHNxdWVlemVkVGV4dCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoOiBzcXVlZXplZFRleHQubGVuZ3RoLFxyXG4gICAgICBwb3NzaWJsZVBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRzOiB7fSxcclxuICAgICAgcG9zc2libGVGb2N1c09mZnNldHM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcmsuc3luY2VkID0gdGhpcy5lbnRyeS5zeW5jZWQ7XHJcbiAgfVxyXG4gIHJlc3RvcmUoKSB7XHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMikgdGhpcy5zb3J0UXVldWVCeUlkKCk7XHJcblxyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMucXVldWUuc2hpZnQoKSxcclxuICAgICAgICBsZW5ndGggPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcblxyXG4gICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldEJvZHlTZWxlY3Rpb24od2luZG93LmRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgICAuZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBoYXNlID09PSAxICYmIGxlbmd0aCA+IDEpXHJcbiAgICAgICAgICB0aGlzLnBvc3Rwb25lT3ZlcmxhcHBpbmdzKCk7XHJcblxyXG4gICAgICB0aGlzLmZpbmRQb3NzaWJsZUV4dHJlbWEoKVxyXG4gICAgICAgICAgLnJ1bGVPdXRNdWx0aXBsZXMoKVxyXG4gICAgICAgICAgLnJlc3RvcmVSYW5nZXMoKTtcclxuXHJcbiAgICAgIHRoaXMucGhhc2UrKztcclxuXHJcbiAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDwgK25ldyBEYXRlKCkpIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXN0b3JlKCksIDApO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gIH1cclxuICBzb3J0UXVldWVCeUlkKCkge1xyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICByZXMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBtYXJrLCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKCFtYXJrc1tsXS5sZW5ndGgpIGNvbnRpbnVlO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF1bMF07XHJcbiAgICAgIHRlbXBbbWFyay5pZF0gPSBtYXJrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG5cclxuICAgIGZvciAodCA9IHRlbXAubGVuZ3RoOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLnF1ZXVlLnB1c2goW3RlbXBbaV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsKSB7XHJcbiAgICBsZXQgdHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0LFxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3F1ZWV6ZWRUZXh0LCBzcXVlZXplZFRleHRMZW5ndGgsIHAsIGVuZFBvc2l0aW9uO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcCA9IHVuZGVmaW5lZDtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuXHJcbiAgICAgIGlmICghbWFya1RlbXApIHtcclxuICAgICAgICBtYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBlbmRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dDtcclxuICAgICAgICBzcXVlZXplZFRleHRMZW5ndGggPSBtYXJrVGVtcC5zcXVlZXplZFRleHRMZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChwICE9PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgcCA9IC0xO1xyXG4gICAgICAgICAgcCA9IHRyaW1tZWRTZWxlY3Rpb25UZXh0LmluZGV4T2Yoc3F1ZWV6ZWRUZXh0LCBwICsgMSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IHAgKyBzcXVlZXplZFRleHRMZW5ndGg7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucy5wb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMScpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgdGhpcy5tYXhQb3NpdGlvbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKHBvc2l0aW9ucykge1xyXG4gICAgbGV0IGwgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBwb3MsIHN0YXJ0LCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcG9zID0gcG9zaXRpb25zW2xdO1xyXG4gICAgICBzdGFydCA9IHBvc1swXTtcclxuXHJcbiAgICAgIGlmICh0ZW1wW3N0YXJ0XSkgdGVtcC5zcGxpY2Uoc3RhcnQgKyAxLCAwLCBwb3MpO1xyXG4gICAgICBlbHNlIHRlbXBbc3RhcnRdID0gcG9zO1xyXG4gICAgfVxyXG4gICAgdCA9IHRlbXAubGVuZ3RoO1xyXG4gICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW107XHJcblxyXG4gICAgZm9yICg7IGkgPCB0OyBpKyspXHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaCh0ZW1wW2ldKTtcclxuICB9XHJcbiAgcG9zdHBvbmVPdmVybGFwcGluZ3MoKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIHBvczEsIHBvczIsIGksIG0xLCBtMiwgaWQxLCBpZDIsIGlkO1xyXG5cclxuICAgIGlmIChwID4gMSkge1xyXG4gICAgICB3aGlsZSAocC0tID4gMSkge1xyXG4gICAgICAgIHBvczEgPSBwb3NpdGlvbnNbcCAtIDFdO1xyXG4gICAgICAgIHBvczIgPSBwb3NpdGlvbnNbcF07XHJcbiAgICAgICAgbTEgPSBwb3MxWzJdO1xyXG4gICAgICAgIG0yID0gcG9zMlsyXTtcclxuICAgICAgICBpZDEgPSBtMS5pZDtcclxuICAgICAgICBpZDIgPSBtMi5pZDtcclxuXHJcbiAgICAgICAgaWYgKGlkMSA9PT0gaWQyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHBvczFbMV0gPiBwb3MyWzBdICYmIHBvczFbMF0gPCBwb3MyWzFdKSB7XHJcblxyXG4gICAgICAgICAgaWYgKGlkMSA8IGlkMikge1xyXG4gICAgICAgICAgICBpZCA9IGlkMjtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTIpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQxO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMSk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IHA7IGkrKylcclxuICAgICAgICB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGN1dE91dEZvcihpZCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShwLS0pIHtcclxuICAgICAgaWYgKHBvc2l0aW9uc1twXVsyXS5pZCA9PT0gaWQpXHJcbiAgICAgICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnNwbGljZShwLCAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9zdHBvbmUobWFyaykge1xyXG4gICAgbGV0IHF1ZXVlID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gcXVldWUubGVuZ3RoLFxyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKHF1ZXVlW2xdWzBdID09PSBtYXJrKSB7XHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbHJlYWR5SW5jbHVkZWQpXHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbbWFya10pO1xyXG4gIH1cclxuICBmaW5kUG9zc2libGVFeHRyZW1hKCkge1xyXG4gICAgbGV0IG5vZGVzID0gdGhpcy5ib2R5VGV4dE5vZGVzLFxyXG4gICAgICAgIG4gPSBub2RlcyA/IG5vZGVzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgaW5kaWNlcyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwaGFzZSA9IHRoaXMucGhhc2UsXHJcbiAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlID0gW10sXHJcbiAgICAgICAgc2F0aXNmaWVkID0gW10sXHJcbiAgICAgICAgaSA9IDAsIGNoYXJzID0gMCxcclxuICAgICAgICBuZXh0U3RhcnRGb3VuZCwgZW5kaW5nc0luVGhpc05vZGUsXHJcbiAgICAgICAgbm9kZSwgbm9kZXNUZXh0LCBub2Rlc1RleHRMZW5ndGgsXHJcbiAgICAgICAgbWFyaywgZGlmZiwgbCwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIGUsIGYsIGlkLCBwLCBxLCB4LCBtLFxyXG4gICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQsIHN0YXJ0Rm91bmRGb3IsIHBvc3Rwb25lZCwgaGFzRW5kaW5nc0luVGhpc05vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBub2Rlc1RleHQgPSB0aGlzLnNxdWVlemUobm9kZS5kYXRhKTtcclxuICAgICAgbm9kZXNUZXh0TGVuZ3RoID0gbm9kZXNUZXh0Lmxlbmd0aDtcclxuICAgICAgY2hhcnMgKz0gbm9kZXNUZXh0TGVuZ3RoO1xyXG4gICAgICBsID0gaW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSBbXTtcclxuICAgICAgcG9zdHBvbmVkID0gW107XHJcbiAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBzdGFydFBvc2l0aW9uID0gaW5kaWNlc1tsXVswXTtcclxuICAgICAgICBlbmRQb3NpdGlvbiA9IGluZGljZXNbbF1bMV07XHJcbiAgICAgICAgbWFyayA9IGluZGljZXNbbF1bMl07XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yIHx8IFtdO1xyXG4gICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvciA9IG1hcmsudGVtcC5lbmRGb3VuZEZvciB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIW1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICBjaGFycyA+IHN0YXJ0UG9zaXRpb24gJiZcclxuICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoIDwgbWFyay50ZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGhhc0VuZGluZ3NJblRoaXNOb2RlICYmIGhhc0VuZGluZ3NJblRoaXNOb2RlLmlkIDwgbWFyay5pZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxICYmIGlkICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5wdXNoKHsgbm9kZTogbm9kZSwgcG9zOiBpIH0pO1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLnB1c2goc3RhcnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgc3RhcnRGb3VuZEZvci5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgIW1hcmsudGVtcC5lbmRGb3VuZEZvci5pbmNsdWRlcyhlbmRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIChjaGFycyAtIGVuZFBvc2l0aW9uKSA+PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5taW4uYXBwbHkobnVsbCwgc3RhcnRGb3VuZEZvcikgPCBpZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQgPSB0aGlzLmZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBlbmRQb3NpdGlvbiAtIChjaGFycyAtIG5vZGVzVGV4dExlbmd0aCkpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVGb2N1c09mZnNldHMucHVzaChwb3NzaWJsZUZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dID0ge1xyXG4gICAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiBwb3NzaWJsZUZvY3VzT2Zmc2V0LFxyXG4gICAgICAgICAgICAgIHBvczogaVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBjYWNoZS5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgICAgIHNhdGlzZmllZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBtYXJrO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCkgZm9yICh4ID0gMDsgeCA8IHA7IHgrKykgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW3hdKTtcclxuXHJcbiAgICAgIGlmIChjaGFycyA+IHRoaXMubWF4UG9zaXRpb24pIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKHBoYXNlICE9PSAxIHx8IHRoaXMub29tKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBtYXJrID0gdGhpcy5tYXJrc1tpXTtcclxuICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhtYXJrLmlkKSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8yJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBydWxlT3V0TXVsdGlwbGVzKCkge1xyXG4gICAgbGV0IGNhY2hlID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gY2FjaGUubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIHBvc3NpYmxlU3RhcnROb2RlcywgcCwgbm9kZSwgcGFyZW50LCBncmFtcGEsIGdyYW5kZ3JhbXBhLCBncmFuZGdyYW5kZ3JhbXBhLCBtYXRjaGVzLCBmYWlsZWQsIHEsXHJcbiAgICAgICAgcG9zc2libGVFbmRzLCBzdGFydEZvdW5kRm9yLCBjb25kcywgc3RhcnRPZmZzZXQsIHRlbXAsIHRleHRMZW5ndGgsIHN0YXJ0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IGNhY2hlW2ldO1xyXG4gICAgICBtYXRjaGVzID0gW107XHJcbiAgICAgIGZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICB0ZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXMgPSB0ZW1wLnBvc3NpYmxlU3RhcnROb2RlcztcclxuICAgICAgcG9zc2libGVFbmRzID0gdGVtcC5wb3NzaWJsZUVuZHM7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSB0ZW1wLnN0YXJ0Rm91bmRGb3JcclxuICAgICAgcCA9IHBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGg7XHJcbiAgICAgIGNvbmRzID0gbWFyay5jb25kcztcclxuICAgICAgc3RhcnRPZmZzZXQgPSBjb25kcy5vO1xyXG4gICAgICB0ZXh0TGVuZ3RoID0gdGVtcC50ZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgICAgd2hpbGUgKHAtLSkge1xyXG4gICAgICAgICAgbm9kZSA9IHBvc3NpYmxlU3RhcnROb2Rlc1twXS5ub2RlO1xyXG4gICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG5cclxuICAgICAgICAgIGlmICghZ3JhbXBhIHx8IGNvbmRzLnAzID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHAgPSAwO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAxKSBwID0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcSA9IG1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgcGFyZW50ID0gcG9zc2libGVTdGFydE5vZGVzW3FdLm5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbmRncmFtcGEgPSBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgKCFncmFuZGdyYW5kZ3JhbXBhIHx8IGNvbmRzLnA0ID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFuZGdyYW1wYSwgZ3JhbmRncmFtcGEpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAocG9zc2libGVFbmRzW3N0YXJ0Rm91bmRGb3JbcV1dLm9mZnNldCAtIHN0YXJ0T2Zmc2V0KSA9PT0gdGV4dExlbmd0aFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHAgPSBxO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcCkgcCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgcCA9IDA7XHJcblxyXG4gICAgICBwID0gcCB8fCAwO1xyXG5cclxuICAgICAgc3RhcnQgPSBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzW3BdO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlID0gc3RhcnQubm9kZTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uID0gc3RhcnQucG9zO1xyXG5cclxuICAgICAgdGhpcy5zZXRNYXRjaGluZ0VuZChtYXJrLCBwKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXRNYXRjaGluZ0VuZChtYXJrLCBwKSB7XHJcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yW3BdLFxyXG4gICAgICAgIGVuZCA9IG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl07XHJcblxyXG4gICAgbWFyay50ZW1wLmVuZE5vZGUgPSBlbmQubm9kZTtcclxuICAgIG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb24gPSBlbmQucG9zO1xyXG4gICAgbWFyay50ZW1wLmZvY3VzT2Zmc2V0ID0gZW5kLm9mZnNldDtcclxuICB9XHJcbiAgc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbWFyay5jb25kcyxcclxuICAgICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW1wYSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMCxcclxuICAgICAgICBzdGFydE9mZnNldCA9IGRlc2NyaXB0aW9uLm8sXHJcbiAgICAgICAgcmVsZXZhbnROb2RlVGV4dCA9IG5vZGUuZGF0YS5zdWJzdHJpbmcoc3RhcnRPZmZzZXQpLnRyaW0oKSxcclxuICAgICAgICBsID0gcmVsZXZhbnROb2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgbWFya1RleHQgPSBtYXJrLnRlbXAudHJpbW1lZFRleHQsXHJcbiAgICAgICAgbSA9IG1hcmsudGVtcC50cmltbWVkVGV4dExlbmd0aCxcclxuICAgICAgICB0ZXh0c01hdGNoO1xyXG5cclxuICAgIGlmIChtIDw9IGwpIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkpID09PSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkpID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRleHRzTWF0Y2ggJiZcclxuICAgICAgKHBhcmVudE5vZGUubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4xIHx8IChkZXNjcmlwdGlvbi5uMSA9PT0gJ1RNJyAmJiBwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSkgJiZcclxuICAgICAgKCFncmFtcGEgfHwgZ3JhbXBhLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMikgJiZcclxuICAgICAgdGhpcy53aGljaENoaWxkKHBhcmVudE5vZGUsIG5vZGUpID09PSBkZXNjcmlwdGlvbi5wMVxyXG4gICAgKTtcclxuICB9XHJcbiAgZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIG4pIHtcclxuICAgIGxldCBub2RlVGV4dCA9IG5vZGUuZGF0YSxcclxuICAgICAgICBsID0gbm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBjb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zcXVlZXplKG5vZGVUZXh0W2ldKSkgY291bnRlcisrO1xyXG5cclxuICAgICAgaWYgKGNvdW50ZXIgPT09IG4pIHJldHVybiAoL1xccyQvLnRlc3QobWFyay50ZXh0KSA/IGkgKyAyIDogaSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXN0b3JlUmFuZ2VzKCkge1xyXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBtYXJrcyA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3RhcnQsIGVuZCwgZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBzdGFydCA9IG1hcmtUZW1wLnN0YXJ0Tm9kZTtcclxuICAgICAgZW5kID0gbWFya1RlbXAuZW5kTm9kZTtcclxuICAgICAgZm9jdXNPZmZzZXQgPSBtYXJrVGVtcC5mb2N1c09mZnNldDtcclxuXHJcbiAgICAgIGlmICghc3RhcnQgfHwgIWVuZCB8fCAhKHR5cGVvZiBmb2N1c09mZnNldCA9PT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMycpIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCBtYXJrLmNvbmRzLm8pO1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKGVuZCwgZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAvL3NlbGVjdGlvbi5yZXN1bWUocmFuZ2UpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnJlY29sbGVjdE5vZGVzKG1hcmspO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIG1hcmsudGVtcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Qm9keVNlbGVjdGlvbihlbCkge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCsrO1xyXG5cclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oZWwpO1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uLnRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25UcmlhbCA8IDQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNldEJvZHlTZWxlY3Rpb24oZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gJyAnO1xyXG4gICAgICAgICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gW107XHJcbiAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMuc3F1ZWV6ZSh0aGlzLnNlbGVjdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSB0aGlzLnNlbGVjdGlvbi5ub2RlcyA/IHRoaXMuc2VsZWN0aW9uLm5vZGVzLnNsaWNlKCkgOiBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc3F1ZWV6ZSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykgPyB0ZXh0LnJlcGxhY2UoL1xcdHxcXHN8XFxufFxcci9nLCAnJykgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgY29udGV4dCkge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgY2hpbGRyZW4gPSBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0ICAgIGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHQgICAgcG9zID0gMCwgaSA9IDAsIGN1cnJlbnRDaGlsZDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgY3VycmVudENoaWxkID0gY2hpbGRyZW5baV07XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudENoaWxkID09PSBjaGlsZCkgcmV0dXJuIHBvcztcclxuXHJcblx0XHRcdGlmIChjb250ZXh0KSB7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZC5ub2RlTmFtZSA9PT0gY29udGV4dCkgcG9zKys7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgIGlmICghKGN1cnJlbnRDaGlsZC5ub2RlVHlwZSA9PT0gMyAmJiAhY3VycmVudENoaWxkLmRhdGEpKSBwb3MrKztcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgSW1tdXRSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHRoaXMucmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgY29uc3QgbWFya3MgPSB0aGlzLm1hcmtzID0gWy4uLmVudHJ5Lm1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbTEuaWQgLSBtMi5pZCldO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc0luQ2h1bmtzKG1hcmtzLCB0aGlzLnJlc3RvcmVSYW5nZSwgdGhpcy5yZXBvcnQpO1xyXG4gIH1cclxuXHJcbiAgcmVzdG9yZVJhbmdlKG1hcmspIHtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnRlZDpyZXN0b3JhdGlvbnMnKTtcclxuICAgICAgX1NUT1JFLnJlc3RvcmluZyA9IHRydWU7XHJcblxyXG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeS5pbW11dCkgbmV3IEltbXV0UmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICAgIGVsc2UgbmV3IFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICB0aGlzLnJlc3RvcmVkID0gMDtcclxuICAgICAgdGhpcy5mYWlsZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWx1cmVSZXBvcnQgPSB7fTtcclxuICAgIH0sXHJcbiAgICByZXRyeShlbnRyeSkge1xyXG4gICAgICBlbnRyeSA9IGVudHJ5ID8gW2VudHJ5XSA6IHRoaXMuZW50cmllcztcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgdGhpcy5yZXN0b3JlKGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBvbkZhaWx1cmUocmVwb3J0KSB7XHJcbiAgICAgIHRoaXMuZmFpbGVkKys7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gcmVwb3J0KSB0aGlzLmZhaWx1cmVSZXBvcnRbaV0gPSByZXBvcnRbaV07XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBpZiAoKyt0aGlzLnJlc3RvcmVkID09PSB0aGlzLmNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJyk7XHJcbiAgICAgICAgX1NUT1JFLnJlc3RvcmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmZhaWxlZCkgdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmdldFJlcG9ydCgpKTtcclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRSZXBvcnQoKSB7XHJcbiAgICAgIGNvbnN0IHJlcG9ydCA9IHRoaXMuZmFpbHVyZVJlcG9ydDtcclxuICAgICAgbGV0IG1zZyA9ICcnO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHJlcG9ydCkge1xyXG4gICAgICAgIG1zZyArPSBgJHtyZXBvcnRbaV0ucmVhc29ufSA6ICR7cmVwb3J0W2ldLnRleHR9XFxuYDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbXNnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfU0VMRUNUSU9OIHtcclxuXHJcbiAgY29uc3RydWN0b3Iobm9kZSwgb3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQpIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuXHJcbiAgICBpZiAobm9kZSB8fCAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbmVkID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUobm9kZSlcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmNvbGxlY3ROb2Rlcyh0cnVlKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXMoKVxyXG4gICAgICAgICAgICAvLy51cGRhdGUoKVxyXG4gICAgICAgICAgICAuYWRqdXN0KClcclxuICAgICAgICAgICAgLy8udXBkYXRlKClcclxuICAgICAgICAgICAgLy8ucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB3aG9sZURvY3VtZW50ID8gd2luZG93LmRvY3VtZW50LmJvZHkgOiB0aGlzLmdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyKCk7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSB3aG9sZURvY3VtZW50ID9cclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZi5pc1NlbGVjdGFibGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSkgOlxyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxlY3Rpb24uY29udGFpbnNOb2RlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpO1xyXG5cclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgbGV0IG5vZGVzID0gW10sXHJcbiAgICAgICAgcGFyZW50Tm9kZXMgPSBbXSxcclxuXHJcbiAgICAgICAgdGV4dE5vZGUsIHBhcmVudCwgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICB3aGlsZSh0ZXh0Tm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkpIHtcclxuICAgICAgbm9kZXMucHVzaCh0ZXh0Tm9kZSk7XHJcbiAgICB9XHJcbiAgICBub2RlcyA9IHRoaXMudHJpbVNlbGVjdGlvbihub2Rlcyk7XHJcbiAgICAvL3RoaXMubm9kZXMgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSA6IG5vZGVzO1xyXG4gICAgdGhpcy5ub2RlcyA9IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKTtcclxuICAgIHRoaXMucGFyZW50Tm9kZXMgPSB0aGlzLmNvbGxlY3RQYXJlbnROb2Rlcyh0aGlzLm5vZGVzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVjb2xsZWN0Tm9kZXMobWFyaykge1xyXG4gICAgY29uc3QgbWFya1dyYXBwZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF49XCInICsgbWFyay5pZCArICdfXCJdJykpO1xyXG4gICAgY29uc3QgbSA9IG1hcmtXcmFwcGVycy5sZW5ndGg7XHJcbiAgICBjb25zdCBuZXdTZWdtZW50ID0gbWFya1dyYXBwZXJzLm1hcChlbCA9PiBlbC5maXJzdENoaWxkKTtcclxuXHJcbiAgICBjb25zdCBwcmV2ID0gbWFya1dyYXBwZXJzWzBdLnByZXZpb3VzU2libGluZztcclxuICAgIGNvbnN0IG5leHQgPSBtYXJrV3JhcHBlcnNbbS0xXS5uZXh0U2libGluZztcclxuXHJcbiAgICBjb25zdCBzdGFydCA9IG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbjtcclxuICAgIGNvbnN0IGVuZCA9IG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb247XHJcblxyXG4gICAgaWYgKHByZXYgJiYgcHJldi5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnVuc2hpZnQocHJldik7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dCAmJiBuZXh0Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQucHVzaChuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5vZGVzLnNwbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCAuLi5uZXdTZWdtZW50KTtcclxuICB9XHJcbiAgdHJpbVNlbGVjdGlvbihub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgbGV0IGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgZmlyc3ROb2RlID0gbm9kZXNbMF07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gZmlyc3ROb2RlICYmIGZpcnN0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCA8PSBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KSB7XHJcbiAgICAgICAgbm9kZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Tm9kZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbGFzdE5vZGUgJiYgdGhpcy5pc0JsYW5rKGxhc3ROb2RlLmRhdGEuc3Vic3RyKDAsIHNlbGVjdGlvbi5mb2N1c09mZnNldCkpKSB7XHJcbiAgICAgICAgbm9kZXMucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgcmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWwgPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCByZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHJnKTtcclxuXHJcbiAgICBub2RlcyA9IG5vZGVzLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgcmcuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgICAgcmV0dXJuICEhc2VsLnRvU3RyaW5nKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UodGhpcy5yYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICBjb2xsZWN0UGFyZW50Tm9kZXMobm9kZXMpIHtcclxuICAgIGxldCBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHBhcmVudHMgPSBbXSwgaSA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHBhcmVudHMucHVzaChub2Rlc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50cztcclxuICB9XHJcbiAgcmV0cmlldmVUZXh0KCkge1xyXG4gICAgbGV0IHJhbmdlID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBub2RlcyA9IHRoaXMubm9kZXMsXHJcbiAgICAgICAgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBub2RlVGV4dHMgPSBbXSxcclxuICAgICAgICB0ZXh0O1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBub2RlVGV4dHMucHVzaChub2Rlc1tpXS5kYXRhKTtcclxuXHJcbiAgICBsIC09IDE7XHJcblxyXG4gICAgaWYgKG5vZGVUZXh0cy5sZW5ndGgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0LCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnOiAnb25Ob3RlQWRkZWQnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya0FkZGVkJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya1JlbW92ZWQnXHJcbiAgICB9XHJcblx0fSxcclxuICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICBlbDogbnVsbCxcclxuXHJcbiAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICBidXR0b25zOiB7XHJcbiAgICBub3Rlczoge1xyXG4gICAgICBlbDogbnVsbCxcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJvb2ttYXJrOiB7XHJcbiAgICAgIGVsOiBudWxsLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2hvd246IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYm9va21hcms6IGZhbHNlLFxyXG4gIG5vdGVzOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcclxuICB9LFxyXG4gIHVwZGF0ZVN0YXRlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYm1pY29uJykudGhlbihibWljb24gPT4ge1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ25vdGVpY29uJykudGhlbihub3RlaWNvbiA9PiB0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyA9IG5vdGVpY29uKTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgKHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ICYmIHRoaXMuYm9va21hcmspIHx8XHJcbiAgICAgICh0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyAmJiB0aGlzLm5vdGVzKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBidXR0b25zID0gdGhpcy5idXR0b25zLCBidG47XHJcblxyXG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXVpJyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICBidG4gPSBidXR0b25zW2JdO1xyXG4gICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgZWxzZSBpZiAoYnRuLnNob3duICYmICghdGhpc1tiXSB8fCAhYnRuLnNob3cpKSB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgIH1cclxuICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gIH0sXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnM7XHJcblxyXG4gICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICBpZiAoYnV0dG9uc1tiXS5zaG93bikge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXVpKTtcclxuICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IG5vdGVzQnV0dG9uID0gdGhpcy5idXR0b25zLm5vdGVzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXN0b2dnbGUnKTtcclxuICAgIGNvbnN0IGJvb2ttYXJrQnV0dG9uID0gdGhpcy5idXR0b25zLmJvb2ttYXJrLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtYm0nKTtcclxuICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgYm9va21hcmtCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnYm1fc2Nyb2xsJyk7XHJcbiAgfSxcclxuICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBidG4uaGFuZGxlciA9IHR5cGUgPT09ICdub3RlcycgP1xyXG4gICAgICB0aGlzLnRvZ2dsZU5vdGVzLmJpbmQodGhpcykgOlxyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0bXVpLmFwcGVuZENoaWxkKGJ0bi5lbCk7XHJcbiAgICBidG4uc2hvd24gPSB0cnVlO1xyXG5cclxuICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHJlbW92ZUJ1dHRvbih0eXBlKSB7XHJcbiAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuXHJcbiAgICB0bXVpLnJlbW92ZUNoaWxkKGJ0bi5lbCk7XHJcbiAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICBidG4uZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG4uaGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCd0bXVpcG9zJylcclxuICAgICAgLnRoZW4ocG9zID0+IHRoaXMuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBvcy5zcGxpdCgnLScpLm1hcChwID0+IHAgKyAnOjFweDsnKS5qb2luKCcgJykpKTtcclxuICB9LFxyXG4gIG9uTm90ZUFkZGVkKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25MYXN0Tm90ZVJlbW92ZWQoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25Cb29rbWFya1JlbW92ZWQoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gIH0sXHJcbiAgc2Nyb2xsVG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnaW5qZWN0aW9uJyxcclxuICB0eXBlOiAnY29udGVudCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJyxcclxuXHJcbiAgICAgIC8vIEBSRVNUT1JFUlxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG4gIFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgbm90ZWZvbnRzaXplOiAxMixcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAndG0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQsICcnKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKCk7XHJcbiAgfVxyXG4gIGV4dGVuZChldmVudHMpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cyk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cyB8fCB0aGlzLmV2ZW50cztcclxuICAgIGxldCBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=