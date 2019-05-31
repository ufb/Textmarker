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
    if (!this.done.length) return this;
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

      var size = this.size.w ? 'width:' + this.size.w + ';height:' + this.size.h + ';' : '';
      BODY.appendChild(el);
      el.setAttribute('style', 'display:block;top:' + top + 'px;left:' + left + 'px;');
      el.getElementsByTagName('textarea')[0].setAttribute('style', size);
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
      'updated:misc-settings': 'updateTransp',
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
    this.updateTransp();
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
  updateTransp: function updateTransp() {
    var bodyClasses = window.document.body.classList;

    _store2["default"].get('settings').then(function (settings) {
      if (settings && settings.misc) {
        if (settings.misc.notetransp) bodyClasses.add('tmnotes--0_8');else bodyClasses.remove('tmnotes--0_8');
        if (settings.misc.noteplainview) bodyClasses.add('tmnotes--plain-view');else bodyClasses.remove('tmnotes--plain-view');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJ1cGRhdGVkIiwicmVzdG9yaW5nIiwiaWZyYW1lIiwibmFtZSIsInVuZGVmaW5lZCIsImlzTmV3IiwiZW50cmllcyIsImxvY2tlZCIsImhhc2hTZW5zaXRpdmUiLCJ0bWlkIiwibm90ZUNvbG9yIiwiaW1tdXQiLCJyZWRlc2NyaWJpbmciLCJhdXRvaW5pdCIsInVwZGF0ZVN0YXR1cyIsInJlc3VtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnlTZXR0aW5ncyIsImhpc3RvcnkiLCJuYW1pbmciLCJpZ25vcmVIYXNoIiwiZW1pdCIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsIl9nZXRfYm1pY29uIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwibWlzYyIsImJtaWNvbiIsIl9nZXRfbm90ZWljb24iLCJub3RlaWNvbiIsIl9nZXRfbm90ZW9uY2xpY2siLCJub3Rlb25jbGljayIsIl9nZXRfdG11aXBvcyIsInRtdWlwb3MiLCJfZ2V0X2F1dG9zYXZlIiwiYXV0b3NhdmUiLCJfZ2V0X2ltbXV0IiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiX2dldF9tb2RlIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X25hbWluZyIsInJldHJ5QWN0aXZlIiwidXBkYXRlU3RvcmUiLCJ3aW5kb3ciLCJwYXJlbnQiLCJVUkwiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsImJvb2ttYXJrIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbkVudHJpZXNGb3VuZCIsIm9uIiwicHJveHkiLCJzdGFydFJlc3RvcmF0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwicmVjZW50bHlPcGVuZWRFbnRyeSIsInVwZGF0ZU5hbWUiLCJmaXJzdEVudHJ5IiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvU3RyaW5nIiwiX0JPT0tNQVJLIiwibWFyayIsImFuY2hvciIsIndyYXBwZXJzIiwidyIsImtleURhdGEiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYWN0aXZhdGUiLCJyZWdpc3RlckhhbmRsZXIiLCJyZW1vdmVMaXN0ZW5lcnMiLCJhZGRMaXN0ZW5lciIsImJ1dHRvbiIsInRhcmdldCIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIiwiX01BUksiLCJwcmVTZXR0aW5ncyIsImRlZmF1bHRzIiwiaXNJbW11dCIsInN0eWxlIiwiY29uZHMiLCJ0ZXh0Iiwibm90ZSIsImQiLCJpZGNvdW50Iiwic2ltcGxlIiwicmFuZ2UiLCJzdGFydE9mZnNldCIsImVuZE9mZnNldCIsImNvbnRhaW5lcnMiLCJhbmNob3JOb2RlUG9zaXRpb24iLCJmb2N1c05vZGVQb3NpdGlvbiIsImRlc2NyaWJlX2ltbXV0Iiwibm9kZXMiLCJuIiwiY3JlYXRlV3JhcHBlcnMiLCJsYXN0SW5kZXgiLCJub2RlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJzdXJyb3VuZENvbnRlbnRzIiwicHVzaCIsInBhcmVudE5vZGUiLCJub3JtYWxpemUiLCJkZWZpbmVQb3NpdGlvbiIsInNldEJvb2ttYXJrIiwiZGVzY3JpYmUiLCJyZWdpc3RlckNsaWNrTGlzdGVuZXJzIiwid3JhcHBlciIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImluY2x1ZGluZ09mZnNldHMiLCJmaXJzdFdyYXBwZXIiLCJsYXN0V3JhcHBlciIsImZpcnN0UGFyZW50IiwibGFzdFBhcmVudCIsImFuY2hvclByZXYiLCJmb2N1c1ByZXYiLCJ3aGljaENoaWxkIiwicHJldmlvdXNTaWJsaW5nIiwibm9kZVR5cGUiLCJkYXRhIiwiY29udGFpbmVyIiwicmVwbGFjZUNoaWxkIiwiZmlyc3RDaGlsZCIsInNlbGYiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb2xsZWN0Tm9kZXMiLCJjb2xsYXBzZVRvU3RhcnQiLCJjcmVhdGUiLCJjaGlsZCIsImluY2x1ZGluZ1RleHROb2RlcyIsImNoaWxkcmVuIiwiYyIsIm51bWJlciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic3RhcnQiLCJzdGFydENvbnRhaW5lciIsImVuZCIsImVuZENvbnRhaW5lciIsInNpbmdsZU5vZGUiLCJwYXJlbnRJc1RNIiwiaGFzQXR0cmlidXRlIiwiZ3JhbXBhIiwiZ3JhbmRncmFtcGEiLCJmVE5QIiwibyIsIm4xIiwibm9kZU5hbWUiLCJwMSIsIm4yIiwicDIiLCJwMyIsInA0Iiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiYW5jaG9yTm9kZSIsImZvY3VzTm9kZSIsInMiLCJwIiwiYXBwZW5kZWQiLCJoZWlnaHQiLCJwb3B1cCIsImVsIiwiYmdDb2xvclJlZ0V4cCIsImJnQ29sb3IiLCJjb2xvckJ0biIsIm0iLCJtYXRjaCIsImFwcGVuZENoaWxkIiwiYmFja2dyb3VuZCIsInBvcCIsInJlbW92ZUNoaWxkIiwic2hvdyIsInBvcHVwSGVpZ2h0Iiwib25Nb3VzZWRvd24iLCJzZWxlY3Rpb25Qb3NpdGlvbiIsImdldFJhbmdlQXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJvZmZzZXRIZWlnaHQiLCJNYXRoIiwibWF4IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJhcHBseSIsImF1dG9ub3RlIiwidW5kbyIsIm5vQXV0b3NhdmUiLCJ1bmRvQm9va21hcmsiLCJyZWRvIiwiY3V0T3V0IiwidG9CZVJlbW92ZWQiLCJpbmRpY2VzIiwic21hbGxlc3RJRCIsImZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzIiwiaiIsIngiLCJtYXJrc0ludGVyc2VjdCIsImluY2x1ZGVzIiwic29ydCIsInNoaWZ0IiwibWluIiwic3BsaWNlIiwiZ2V0QnlJZCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsImZvckVhY2giLCJhcmciLCJvcHRpb25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoaWdobGlnaHQiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHRDb250ZW50Iiwic2lsZW50IiwiaW1tdXRhYmxlIiwic2F2ZSIsInJlcXVlc3QiLCJncmFudGVkIiwic3ViIiwiaTE4biIsImdldE1lc3NhZ2UiLCJwcm9tcHQiLCJyZXRyaWV2ZUVudHJ5IiwiY29uZmlybWVkIiwiY29uZmlybSIsImNvcHkiLCJmaW5kTWFyayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRyaW0iLCJzdG9yZSIsIm9yZGVyIiwib3JkZXJNYXJrc1Zpc3VhbGx5IiwicmVjcmVhdGUiLCJfU0VMRUNUSU9OIiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJhcmVhX2hpc3RvcnkiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXRUaW1lb3V0Iiwic2V0IiwicmVtb3ZlQm9va21hcmsiLCJtYXJrMSIsIm1hcmsyIiwibTEiLCJtMiIsImJiMSIsImJiMiIsInRvcDEiLCJ0b3AyIiwibWFwIiwid3JhcHBlcnMxIiwidzEiLCJpZDEiLCJ3cmFwcGVyczIiLCJpZDIiLCJ3MiIsIm9uTWFya2VyS2V5Iiwib25Ib3RrZXkiLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0Iiwia0QiLCJvbkhhc2hDaGFuZ2UiLCJjb2xvciIsIkJPRFkiLCJET00iLCJjbGljayIsImtleXVwIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwibWFya0NsaWNrSGFuZGxlciIsInZpc2libGUiLCJyZWNlbnRseVVwZGF0ZWQiLCJzZXR0aW5nc01vZGUiLCJ0Iiwic2l6ZSIsImgiLCJkcmFnRFgiLCJkcmFnRFkiLCJtdXRhdGlvbk9ic2VydmVyIiwiYWRqdXN0Tm90ZURhdGFPYmplY3QiLCJjcmVhdGVOb3RlRWxlbWVudCIsImFkZExpc3RlbmVycyIsImFkZE1hcmtMaXN0ZW5lcnMiLCJub3RlRGF0YSIsImhlYWRlciIsImFjdGlvbnMiLCJkZWwiLCJnZWFyIiwicGFsZXR0ZSIsInRleHRFbGVtZW50IiwiZGVsVGV4dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pblRleHQiLCJnZWFyVGV4dCIsImNsYXNzTmFtZSIsInZhbHVlIiwiYXR0ZW1wdFVwZGF0ZSIsIl9kZWxldGUiLCJoaWRlIiwicmVtb3ZlTWFya0xpc3RlbmVycyIsImZvcmNlIiwiaW5uZXJXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRQb3NpdGlvbiIsIm9mZnNldCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIiLCJicmluZ1VwRnJvbnQiLCJ6SW5kZXgiLCJkaXNjb25uZWN0IiwidG9nZ2xlIiwidG9nZ2xlUGFsZXR0ZSIsImNoYW5nZUNvbG9yIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dGFyZWEiLCJjb25maWciLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJzYXZlU2l6ZSIsIm9ic2VydmUiLCJyZWN0IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvbkRyYWdTdGFydCIsInBhZ2VYIiwicGFnZVkiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJtdXRhdGlvbnNMaXN0Iiwid2lkdGgiLCJub3RlcyIsImRyYWdIYW5kbGVyIiwiZHJhZ1N0b3BIYW5kbGVyIiwidXBkYXRlVHJhbnNwIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJtZXRoIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJzdGFydERyYWdnaW5nTm90ZSIsImVtaXREcmFnRXZlbnQiLCJzdG9wRHJhZ2dpbmdOb3RlIiwiZG9jIiwic2VuZE5vdGVzU3RhdGUiLCJyZXBvcnQiLCJhdXRvUGF1c2UiLCJrZXlkb3duIiwic2VsZWN0aW9uY2hhbmdlIiwic2VsZWN0aW9uQ29sbGFwc2VkIiwic2hpZnRTZW5zaXRpdmVLZXlzIiwia2V5Q29kZU1hcCIsImlzRWRpdGFibGUiLCJ0YWdOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiZGVsZWdhdGUiLCJ0b0xvd2VyQ2FzZSIsImtleUNvZGUiLCJtb2RLZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiYXJyb3dLZXlzIiwibG9ja2VkQWN0aW9ucyIsImZ1bmN0aW9uS2V5cyIsImRlZmF1bHRNYXJrZXJzIiwib3JpZ0tleSIsImlzTWFya2VyS2V5IiwiaXNDdXN0b21NYXJrZXJLZXkiLCJzZXR0aW5nIiwic2hvcnRjdXQiLCJzMSIsInMyIiwicmVzdG9yZWQiLCJmYWlsZWQiLCJmYWlsdXJlUmVwb3J0IiwiSW1tdXRSZXN0b3JlciIsIlJlc3RvcmVyIiwicmV0cnkiLCJvbkZhaWx1cmUiLCJnZXRSZXBvcnQiLCJtc2ciLCJyZWFzb24iLCJSZXN0b3JlckJhc2UiLCJhcmVhIiwicHJvYyIsImNiIiwicmVjIiwiZXhwaXJlIiwibGwiLCJ0ZW1wIiwicXVldWUiLCJjYWNoZSIsInBoYXNlIiwic2VsZWN0aW9uVHJpYWwiLCJjaHVua0R1cmF0aW9uIiwiX3RpbWVyIiwib29tIiwiaW5pdCIsIm5vdyIsInBvc3Rwb25lZCIsImNvbnZlcnREZXNjcmlwdGlvbiIsImNyZWF0ZVRlbXBPYmplY3QiLCJjb252ZXJ0ZWRDb25kcyIsImZpcnN0Tm9kZU5hbWUiLCJmaXJzdFBhcmVudE5vZGVOYW1lIiwiZmlyc3RUZXh0Tm9kZVBvc2l0aW9uIiwiZmlyc3ROb2RlUG9zaXRpb24iLCJmaXJzdFBhcmVudE5vZGVQb3NpdGlvbiIsImZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uIiwidHJpbW1lZFRleHQiLCJzcXVlZXplZFRleHQiLCJzcXVlZXplIiwidGV4dExlbmd0aCIsInRyaW1tZWRUZXh0TGVuZ3RoIiwic3F1ZWV6ZWRUZXh0TGVuZ3RoIiwicG9zc2libGVQb3NpdGlvbnMiLCJwb3NzaWJsZUVuZFBvc2l0aW9ucyIsInBvc3NpYmxlU3RhcnROb2RlcyIsInBvc3NpYmxlRW5kcyIsInBvc3NpYmxlRm9jdXNPZmZzZXRzIiwic29ydFF1ZXVlQnlJZCIsInNldEJvZHlTZWxlY3Rpb24iLCJnZXRUZXh0UG9zaXRpb25zIiwicG9zdHBvbmVPdmVybGFwcGluZ3MiLCJmaW5kUG9zc2libGVFeHRyZW1hIiwicnVsZU91dE11bHRpcGxlcyIsInJlc3RvcmVSYW5nZXMiLCJ0aW1lciIsInJlcyIsInRyaW1tZWRTZWxlY3Rpb25UZXh0IiwiYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyIsImVuZFBvc2l0aW9ucyIsIm1hcmtUZW1wIiwic29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJtYXhQb3NpdGlvbiIsInBvc2l0aW9ucyIsInBvczEiLCJwb3MyIiwicG9zdHBvbmUiLCJjdXRPdXRGb3IiLCJhbHJlYWR5SW5jbHVkZWQiLCJib2R5VGV4dE5vZGVzIiwic2F0aXNmaWVkIiwiY2hhcnMiLCJuZXh0U3RhcnRGb3VuZCIsImVuZGluZ3NJblRoaXNOb2RlIiwibm9kZXNUZXh0Iiwibm9kZXNUZXh0TGVuZ3RoIiwiZGlmZiIsImYiLCJxIiwicG9zc2libGVGb2N1c09mZnNldCIsInN0YXJ0Rm91bmRGb3IiLCJoYXNFbmRpbmdzSW5UaGlzTm9kZSIsImVuZEZvdW5kRm9yIiwic2F0aXNmaWVzRGVzY3JpcHRpb24iLCJmaW5kRm9jdXNPZmZzZXQiLCJncmFuZGdyYW5kZ3JhbXBhIiwibWF0Y2hlcyIsInN0YXJ0Tm9kZSIsInN0YXJ0Tm9kZVBvc2l0aW9uIiwic2V0TWF0Y2hpbmdFbmQiLCJlbmROb2RlIiwiZW5kTm9kZVBvc2l0aW9uIiwiZm9jdXNPZmZzZXQiLCJkZXNjcmlwdGlvbiIsInJlbGV2YW50Tm9kZVRleHQiLCJtYXJrVGV4dCIsInRleHRzTWF0Y2giLCJub2RlVGV4dCIsImNvdW50ZXIiLCJ0ZXN0IiwiY3JlYXRlUmFuZ2UiLCJyZWNvbGxlY3ROb2RlcyIsInNsaWNlIiwiY29udGV4dCIsImN1cnJlbnRDaGlsZCIsInByb2Nlc3NJbkNodW5rcyIsInJlc3RvcmVSYW5nZSIsImdldE5vZGUiLCJ0ZXh0Tm9kZVBvc2l0aW9uIiwicmFuZ2VDb3VudCIsImRlZmluZWQiLCJyZWR1Y2VUb09uZVJhbmdlIiwicmV0cmlldmVUZXh0IiwiYWRqdXN0Iiwic2VsZWN0QWxsQ2hpbGRyZW4iLCJwcm9wcyIsImlzU2ltcGxlIiwiZm9jdXMiLCJpc0JhY2t3YXJkcyIsInJldmVyc2UiLCJmaXJzdFRleHROb2RlIiwibGFzdFRleHROb2RlIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJ3aG9sZURvY3VtZW50IiwiZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJmaWx0ZXIiLCJpc1NlbGVjdGFibGUiLCJpc0JsYW5rIiwiaGFzTm9ybWFsUGFyZW50IiwiY29udGFpbnNOb2RlIiwiaXRlcmF0b3IiLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiYWNjZXB0Tm9kZSIsInBhcmVudE5vZGVzIiwidGV4dE5vZGUiLCJmaXJzdE5vZGUiLCJsYXN0Tm9kZSIsIm5leHROb2RlIiwidHJpbVNlbGVjdGlvbiIsInJlZHVjZVRvU2VsZWN0YWJsZSIsImNvbGxlY3RQYXJlbnROb2RlcyIsIm1hcmtXcmFwcGVycyIsIm5ld1NlZ21lbnQiLCJwcmV2IiwibmV4dCIsIm5leHRTaWJsaW5nIiwidW5zaGlmdCIsImFuY2hvck9mZnNldCIsInN1YnN0ciIsInNlbCIsInJnIiwic2VsZWN0Tm9kZSIsInBhcmVudHMiLCJub2RlVGV4dHMiLCJqb2luIiwibm9kZTEiLCJub2RlMiIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwicmFuZ2UwIiwibGFzdFJhbmdlIiwidGFnIiwidG9VcHBlckNhc2UiLCJpc0NoaWxkT2YiLCJzZWFyY2giLCJhdHRhY2hlZCIsImJ1dHRvbnMiLCJzaG93biIsImNyZWF0ZUJ1dHRvbnMiLCJ1cGRhdGVTdGF0ZSIsInNob3VsZEF0dGFjaCIsInJlbmRlciIsImJ0biIsImIiLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJ1cGRhdGVQb3NpdGlvbiIsInRtdWkiLCJub3Rlc0J1dHRvbiIsImJvb2ttYXJrQnV0dG9uIiwidHlwZSIsInRvZ2dsZU5vdGVzIiwib25Ob3RlQWRkZWQiLCJvbkxhc3ROb3RlUmVtb3ZlZCIsIm9uQm9va21hcmtBZGRlZCIsIm9uQm9va21hcmtSZW1vdmVkIiwiT05FT0ZGIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInoiLCJ5IiwiYXJyb3d1cCIsImFycm93ZG93biIsInNiIiwiY20iLCJzYXZlSW5Qcml2IiwiZHJvcExvc3NlcyIsImRvd25sb2FkIiwic29ydGVkIiwidmlldyIsInBwIiwiYXV0b2NzIiwiaWZyYW1lcyIsIm92ZXJ3cml0ZSIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiY2hhbmdlZE5vdGUiLCJlcnJvck5vdGUiLCJ2aXBOb3RlIiwiY3VzdG9tU2VhcmNoIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInRhYnMiLCJtZXRhIiwidW5mb2xkZWQiLCJ0YWdzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsInN5bmMiLCJNQVhfTE9HX0VOVFJJRVMiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidmFsIiwicHJvcCIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImRvbUV2ZW50cyIsImdlbmVyYWxIYW5kbGVyIiwiX2V4dHJhIiwiZXJyb3IiLCJmaWxlIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImFyZ3MiLCJ0b3BpYyIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJ0YWIiLCJmcmFtZUlkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX3BhZ2Vub3RlcyIsImxvY2FsIiwic2V0QXJlYXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FB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Z0JpdkIsS0FBaEIsQ0FBc0J2d0IsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUEyd0IsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM5SCxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT3puQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IycEIsSUFBaEIsQ0FBcUJqckIsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUE0d0IsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUMvSCxPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU84SCxZQUFZLENBQUM5SCxPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QjVxQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGFzaG9wdC1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJzogJ3NldFN5bmNGb3JFbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnOiAncmVuYW1lRW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBlbnY6ICdpbmplY3Rpb24nLFxyXG5cclxuICB1cmw6ICcnLFxyXG4gIGhhc2hsZXNzVVJMOiAnJyxcclxuXHJcbiAgdXBkYXRlZDogZmFsc2UsXHJcbiAgcmVzdG9yaW5nOiBmYWxzZSxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzID8gc2V0dGluZ3MuaGlzdG9yeSA6IG51bGw7XHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcgPT09ICdtYXJrJztcclxuICAgICAgICB0aGlzLmhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaCA9PT0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOnN0b3JlLXN0YXR1cycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVuYW1lRW50cnkoZW50cnksIG9sZE5hbWUpIHtcclxuICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5uYW1lID09PSBvbGROYW1lICYmICF0aGlzLmxvY2tlZCkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgICBpZiAodGhpcy5lbnRyaWVzW29sZE5hbWVdKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNldFN5bmNGb3JFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCAmJiB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0pIHtcclxuICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdLnN5bmNlZCA9IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW1vdmVFbnRyeShkZWxldGVkRW50cnkpIHtcclxuICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgaWYgKGVudHJpZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgbmFtZSA9PT0gZGVsZXRlZEVudHJ5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgYWRkRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkKSB0aGlzLm5hbWUgPSBlbnRyaWVzWzBdLm5hbWU7XHJcbiAgICBjb25zdCBlID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBlOyBpKyspIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcclxuICAgIHRoaXMuaW1tdXQgPSAhIWVudHJpZXNbMF0uaW1tdXQ7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9ibWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ibWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3Rlb25jbGljaygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RtdWlwb3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2ltbXV0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5cclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZSdcclxuaW1wb3J0ICcuL21vZHVsZXMvY29udGV4dG1lbnUnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbm90ZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RtdWknXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlci1wb3B1cCdcclxuaW1wb3J0ICcuL21vZHVsZXMvYXV0by1tYXJrZXInXHJcblxyXG5pbXBvcnQgJy4vbWFpbidcclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0IF9SRVNUT1JFUiBmcm9tICcuL21vZHVsZXMvcmVzdG9yZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ29uU2F2ZWRFbnRyeScsXHJcbiAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAndXBkYXRlU3RvcmUnLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZFBhZ2VTdGF0ZScsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuXHJcbiAgICAgIC8vIEBSRVNUT1JFUlxyXG4gICAgICAnZW50cmllczpmb3VuZCc6ICdvbkVudHJpZXNGb3VuZCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXRyeUFjdGl2ZTogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdG9yZSgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVN0b3JlKCkge1xyXG4gICAgX1NUT1JFLmlmcmFtZSA9IHdpbmRvdyAhPT0gd2luZG93LnBhcmVudC53aW5kb3c7XHJcbiAgICBfU1RPUkUudXJsID0gd2luZG93LmRvY3VtZW50LlVSTDtcclxuICAgIF9TVE9SRS5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyhfU1RPUkUudXJsKTtcclxuICB9LFxyXG4gIG9uU2F2ZWRFbnRyeShlbnRyeSkge1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKGVudHJ5LnVybCA9PT0gdXJsKSB7XHJcbiAgICAgIF9TVE9SRS5hZGRFbnRyaWVzKFtlbnRyeV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIHRoaXMucmV0cnlBY3RpdmUgPSB0cnVlO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgc2VuZFBhZ2VTdGF0ZShpbmZvKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3BhZ2Utc3RhdGUnLCB7XHJcbiAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgYm9va21hcms6ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJyksXHJcbiAgICAgIHJldHJ5QWN0aXZlOiB0aGlzLnJldHJ5QWN0aXZlXHJcbiAgICB9LCBpbmZvKTtcclxuICB9LFxyXG5cclxuICAvLyBAUkVTVE9SRVJcclxuICBvbkVudHJpZXNGb3VuZChpbmZvKSB7XHJcbiAgICBpZiAoIV9TVE9SRS51cGRhdGVkKSB7XHJcbiAgICAgIHRoaXMub24oJ3VwZGF0ZWQ6c3RvcmUtc3RhdHVzJywgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnN0YXJ0UmVzdG9yYXRpb24sIGluZm8pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnRSZXN0b3JhdGlvbihpbmZvKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0UmVzdG9yYXRpb24oaW5mbykge1xyXG4gICAgbGV0IGVudHJpZXMgPSBpbmZvLmVudHJpZXM7XHJcbiAgICBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc107XHJcbiAgICBfU1RPUkUubG9ja2VkID0gaW5mby5sb2NrZWQ7XHJcbiAgICBfUkVTVE9SRVIoKTtcclxuICAgIF9TVE9SRS5hZGRFbnRyaWVzKGVudHJpZXMpO1xyXG4gICAgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgaWYgKGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSkgdGhpcy51cGRhdGVOYW1lKGVudHJpZXMsIGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bWFya3MnLCBpbmZvLmVudHJpZXMpO1xyXG4gIH0sXHJcbiAgdXBkYXRlTmFtZShlbnRyaWVzLCByZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKHJlY2VudGx5T3BlbmVkRW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLm5hbWUgPSByZWNlbnRseU9wZW5lZEVudHJ5Lm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInOiAnc2V0TWFya2VyJ1xyXG4gICAgfVxyXG5cdH0sXHJcblxyXG4gIGhhbmRsZXI6IG51bGwsXHJcbiAgbWFya2VyOiAnbScsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRNYXJrZXIoa2V5KSB7XHJcbiAgICB0aGlzLm1hcmtlciA9IGtleTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkICYmICF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2VsZWN0ZWQgJiYgdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdGFydExpc3RlbmluZygpIHtcclxuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZXVwLmJpbmQodGhpcyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Nb3VzZXVwKCkge1xyXG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWVuZCcsIHRoaXMubWFya2VyKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0JPT0tNQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5hbmNob3IgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0KG1hcmspIHtcclxuICAgIG1hcmsgPSBtYXJrIHx8IHRoaXMubWFyaztcclxuXHJcbiAgICBsZXQgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcbiAgICAgICAgYW5jaG9yID0gd3JhcHBlcnNbMF07XHJcblxyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIGFuY2hvci5pZCA9ICd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcic7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG5cclxuICAgIHRoaXMubWFyayA9IG1hcms7XHJcbiAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgbGV0IG1hcmsgPSB0aGlzLm1hcmssXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3IsXHJcbiAgICAgICAgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGg7XHJcblxyXG4gICAgYW5jaG9yLmlkID0gJyc7XHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG4gIHNjcm9sbEludG9WaWV3KGJtKSB7XHJcbiAgICBpZiAoYm0gfHwgKGJtID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpKSlcclxuICAgICAgYm0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdhY3RpdmF0ZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2ZTogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcclxuICB9LFxyXG5cclxuICBhY3RpdmF0ZShvbikge1xyXG4gICAgaWYgKG9uICYmICF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlcigpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghb24gJiYgdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlZ2lzdGVySGFuZGxlcigpIHtcclxuICAgIHRoaXMuYWRkTGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKSB7XHJcbiAgICAgICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIF9TVE9SRS50bWlkID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0sIHdpbmRvdy5kb2N1bWVudCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IobWFya2VyLCBrZXksIHByZVNldHRpbmdzLCBpbW11dCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiwgZGVmYXVsdHM7XHJcblxyXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XHJcblx0XHRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG1hcmtlci5zZWxlY3Rpb247XHJcbiAgICB0aGlzLmltbXV0ID0gX1NUT1JFLnJlZGVzY3JpYmluZyA/IG1hcmtlci5pc0ltbXV0IDogaW1tdXQ7XHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgYm9va21hcms6IGZhbHNlLFxyXG4gICAgICBjb25kczogbnVsbCxcclxuICAgICAgdGV4dDogc2VsZWN0aW9uLnRleHQsXHJcbiAgICAgIG5vdGU6IG51bGxcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBkIGluIGRlZmF1bHRzKSB7XHJcbiAgICAgIGlmICghcHJlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoZCkpIHtcclxuICAgICAgICBwcmVTZXR0aW5nc1tkXSA9IGRlZmF1bHRzW2RdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVTZXR0aW5ncy5pZCA9IHByZVNldHRpbmdzLmlkIHx8ICsrbWFya2VyLmlkY291bnQ7XHJcblx0XHR0aGlzLmlkID0gcHJlU2V0dGluZ3MuaWQ7XHJcblx0XHR0aGlzLnNpbXBsZSA9IHNlbGVjdGlvbi5zaW1wbGU7XHJcblxyXG5cdFx0bGV0IHJhbmdlID0gdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5yYW5nZTtcclxuXHJcblx0XHR0aGlzLnN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQ7XHJcblx0XHR0aGlzLmVuZE9mZnNldCA9IHJhbmdlLmVuZE9mZnNldDtcclxuXHJcblx0XHR0aGlzLndyYXBwZXJzID0gbnVsbDtcclxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YSA9IHtcclxuXHRcdFx0aWQ6IHByZVNldHRpbmdzLmlkLFxyXG5cdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0c3R5bGU6IHByZVNldHRpbmdzLnN0eWxlLFxyXG5cdFx0XHRjb25kczogcHJlU2V0dGluZ3MuY29uZHMsXHJcblx0XHRcdHRleHQ6IHByZVNldHRpbmdzLnRleHQsXHJcblx0XHRcdGJvb2ttYXJrOiBwcmVTZXR0aW5ncy5ib29rbWFyayxcclxuICAgICAgbm90ZTogcHJlU2V0dGluZ3Mubm90ZSxcclxuICAgICAgc3luY2VkOiBwcmVTZXR0aW5ncy5zeW5jZWRcclxuXHRcdH07XHJcblxyXG4gICAgaWYgKHRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHtcclxuICAgICAgdGhpcy5kZXNjcmliZV9pbW11dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Y3JlYXRlKHJhbmdlKSB7XHJcbiAgICByYW5nZSA9IHJhbmdlIHx8IHRoaXMucmFuZ2U7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgc3R5bGUgPSB0aGlzLmtleURhdGEuc3R5bGUsXHJcbiAgICAgICAgbm9kZXMgPSBzZWxlY3Rpb24ubm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzIHx8IHRoaXMuY3JlYXRlV3JhcHBlcnMoc3R5bGUsIG4pLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIGxhc3RJbmRleCA9IG4gLSAxLFxyXG4gICAgICAgIG5vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICAgIGlmICghaSkgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgdGhpcy5zdGFydE9mZnNldCk7XHJcblxyXG4gICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KVxyXG4gICAgICAgIHJhbmdlLnNldEVuZChub2RlLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgICByYW5nZS5zdXJyb3VuZENvbnRlbnRzKHdyYXBwZXJzW2ldKTtcclxuICAgICAgdGhpcy5jb250YWluZXJzLnB1c2god3JhcHBlcnNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgICBub2RlLnBhcmVudE5vZGUubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbihsYXN0SW5kZXgpO1xyXG5cclxuICAgIGlmICh0aGlzLmtleURhdGEuYm9va21hcmspIHRoaXMubWFya2VyLnNldEJvb2ttYXJrKHRoaXMsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHRoaXMuZGVzY3JpYmUoKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbiAgcmVnaXN0ZXJDbGlja0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIGZvciAobGV0IHdyYXBwZXIgb2Ygd3JhcHBlcnMpIHtcclxuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya2VyLnByb3h5KHRoaXMsIHRoaXMub25DbGljayksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DbGljayhlKSB7XHJcbiAgICBsZXQgZXZlbnQ7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgZXZlbnQgPSAnY2xpY2tlZDptYXJrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZSArICdfMCc7XHJcbiAgICAgIGV2ZW50ID0gJ2FjdGl2YXRlZDptYXJrJztcclxuICAgIH1cclxuICAgIHRoaXMubWFya2VyLmVtaXQoZXZlbnQsIHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIGJvb2ttYXJrOiAhIXRoaXMua2V5RGF0YS5ib29rbWFyayxcclxuICAgICAgbm90ZTogISF0aGlzLmtleURhdGEubm90ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlZmluZVBvc2l0aW9uKG4sIGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgIGxldCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBuID0gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IHdyYXBwZXJzLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBmaXJzdFdyYXBwZXIgPSB3cmFwcGVyc1swXTtcclxuICAgIGNvbnN0IGxhc3RXcmFwcGVyID0gd3JhcHBlcnNbbl07XHJcbiAgICBjb25zdCBmaXJzdFBhcmVudCA9IGZpcnN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgbGFzdFBhcmVudCA9IGxhc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgYW5jaG9yUHJldiwgZm9jdXNQcmV2O1xyXG5cclxuICAgIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGZpcnN0UGFyZW50LCBmaXJzdFdyYXBwZXIsIHRydWUpIC0gMTtcclxuICAgIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQobGFzdFBhcmVudCwgbGFzdFdyYXBwZXIsIHRydWUpO1xyXG5cclxuICAgIGFuY2hvclByZXYgPSBmaXJzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgZm9jdXNQcmV2ID0gbGFzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgIGlmIChhbmNob3JQcmV2ICYmIGFuY2hvclByZXYubm9kZVR5cGUgPT09IDEpIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uICs9IDE7XHJcbiAgICBpZiAoIWZvY3VzUHJldiB8fCBmb2N1c1ByZXYubm9kZVR5cGUgPT09IDMgfHwgZmlyc3RQYXJlbnQgPT09IGxhc3RQYXJlbnQpIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gLT0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IDA7XHJcbiAgICBpZiAodGhpcy5mb2N1c05vZGVQb3NpdGlvbiA8IDApIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSAwO1xyXG5cclxuICAgIGlmIChpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSBhbmNob3JQcmV2ICYmIGFuY2hvclByZXYuZGF0YSA/IGFuY2hvclByZXYuZGF0YS5sZW5ndGggOiAwO1xyXG4gICAgICB0aGlzLmVuZE9mZnNldCA9IHRoaXMuc2ltcGxlID8gdGhpcy5zdGFydE9mZnNldCArIHRoaXMua2V5RGF0YS50ZXh0Lmxlbmd0aCA6IHRoaXMuZW5kT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24odW5kZWZpbmVkLCB0cnVlKVxyXG4gICAgICAgIC5kZXNjcmliZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHR1bmRvKCkge1xyXG5cdFx0bGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcblx0XHRcdFx0d3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzLFxyXG5cdFx0XHRcdHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcblx0XHRcdFx0Y29udGFpbmVyLCB3cmFwcGVyO1xyXG5cclxuXHRcdHdoaWxlICh3LS0pIHtcclxuXHRcdFx0Y29udGFpbmVyID0gY29udGFpbmVyc1t3XTtcclxuXHRcdFx0d3JhcHBlciA9IHdyYXBwZXJzW3ddO1xyXG5cdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XHJcblx0XHRcdGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRyZWRvKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY29udGFpbmVyc1swXS5jaGlsZE5vZGVzW3RoaXMuYW5jaG9yTm9kZVBvc2l0aW9uXSwgdGhpcy5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoY29udGFpbmVyc1tjb250YWluZXJzLmxlbmd0aCAtIDFdLmNoaWxkTm9kZXNbdGhpcy5mb2N1c05vZGVQb3NpdGlvbl0sIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uLmNvbGxlY3ROb2RlcygpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSgpO1xyXG5cdH1cclxuXHR3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGluY2x1ZGluZ1RleHROb2Rlcykge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHRsZXQgY2hpbGRyZW4gPSBpbmNsdWRpbmdUZXh0Tm9kZXMgfHwgY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdFx0XHRjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0XHRcdGkgPSAwO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblx0Y3JlYXRlV3JhcHBlcnMoc3R5bGUsIG51bWJlcikge1xyXG5cdFx0bGV0IHdyYXBwZXJzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgd3JhcHBlcjtcclxuXHJcblx0XHRmb3IgKCA7IGkgPCBudW1iZXI7IGkrKykge1xyXG5cdFx0XHR3cmFwcGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZS5yZXBsYWNlKC87L2csICchaW1wb3J0YW50OycpKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnLCB0aGlzLmlkICsgJ18nICsgaSk7XHJcbiAgICAgIC8vd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NvbnRleHRtZW51JywgJ3RleHRtYXJrZXItY3RtJyk7XHJcblx0XHRcdHdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gd3JhcHBlcnM7XHJcblx0fVxyXG4gIGRlc2NyaWJlKCkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcblx0XHRjb25zdCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xyXG5cdFx0Y29uc3QgZW5kID0gcmFuZ2UuZW5kQ29udGFpbmVyO1xyXG5cdFx0Y29uc3Qgc2luZ2xlTm9kZSA9IHRoaXMuc2ltcGxlO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy53cmFwcGVyc1swXS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgcGFyZW50SXNUTSA9IHBhcmVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuXHRcdGNvbnN0IGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgZ3JhbmRncmFtcGEgPSBncmFtcGEucGFyZW50Tm9kZSB8fCAwO1xyXG5cdFx0Y29uc3QgZlROUCA9IHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuXHRcdFx0bzogdGhpcy5zdGFydE9mZnNldCxcclxuXHRcdFx0bjE6IHBhcmVudElzVE0gPyAnVE0nIDogcGFyZW50Lm5vZGVOYW1lLFxyXG5cdFx0XHRwMTogZlROUCxcclxuXHRcdFx0bjI6IGdyYW1wYS5ub2RlTmFtZSxcclxuXHRcdFx0cDI6IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCksXHJcblx0XHRcdHAzOiBncmFuZGdyYW1wYSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYSwgZ3JhbXBhKSA6IHVuZGVmaW5lZCxcclxuXHRcdFx0cDQ6IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEucGFyZW50Tm9kZSwgZ3JhbmRncmFtcGEpIDogdW5kZWZpbmVkXHJcblx0XHR9O1xyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuXHR9XHJcbiAgZGVzY3JpYmVfaW1tdXQoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBsZXQgc3RhcnQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBlbmQgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChzdGFydCAhPT0gYm9keSkge1xyXG4gICAgICBzdGFydFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKHN0YXJ0LnBhcmVudE5vZGUsIHN0YXJ0KSk7XHJcbiAgICAgIHN0YXJ0ID0gc3RhcnQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHdoaWxlIChlbmQgIT09IGJvZHkpIHtcclxuICAgICAgZW5kUG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoZW5kLnBhcmVudE5vZGUsIGVuZCkpO1xyXG4gICAgICBlbmQgPSBlbmQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgIHA6IHN0YXJ0UG9zaXRpb25cclxuICAgICAgfSxcclxuICAgICAgZToge1xyXG4gICAgICAgIG86IHRoaXMuZW5kT2Zmc2V0LFxyXG4gICAgICAgIHA6IGVuZFBvc2l0aW9uXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgfVxyXG5cdH0sXHJcblxyXG4gIGhhbmRsZXI6IG51bGwsXHJcbiAgYXBwZW5kZWQ6IGZhbHNlLFxyXG4gIGhlaWdodDogMCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAncG9wdXAnO1xyXG4gICAgICB0aGlzLm1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cCcpO1xyXG4gICAgY29uc3QgYmdDb2xvclJlZ0V4cCA9IC9iYWNrZ3JvdW5kLWNvbG9yOigjW2EtZjAtOV17Nn0pLztcclxuICAgIGxldCBiZ0NvbG9yLCBjb2xvckJ0bjtcclxuICAgIGZvciAobGV0IG0gaW4gdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgIGJnQ29sb3IgPSB0aGlzLm1hcmtlcnNbbV0uc3R5bGUubWF0Y2goYmdDb2xvclJlZ0V4cCk7XHJcbiAgICAgIGlmIChiZ0NvbG9yKSB7XHJcbiAgICAgICAgY29sb3JCdG4gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cGNvbG9yJyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JCdG4pO1xyXG4gICAgICAgIGNvbG9yQnRuLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yLnBvcCgpO1xyXG4gICAgICAgIGNvbG9yQnRuLmlkID0gJ3RtcG9wdXBjb2xvci0tJyArIG07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93KCkge1xyXG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBwb3B1cC5zdHlsZTtcclxuICAgIGxldCBwb3B1cEhlaWdodDtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNlZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0aW9uUG9zaXRpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IHNlbGVjdGlvblBvc2l0aW9uLnRvcCAtIHNlbGVjdGlvblBvc2l0aW9uLmhlaWdodCArIHdpbmRvdy5zY3JvbGxZICsgJ3B4JztcclxuICAgICAgc3R5bGUubGVmdCA9IHNlbGVjdGlvblBvc2l0aW9uLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCArICdweCc7XHJcblxyXG4gICAgICBwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IE1hdGgubWF4KDAsIHBhcnNlSW50KHN0eWxlLnRvcCkgLSBwb3B1cEhlaWdodCkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0KSAhPT0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSArIHBvcHVwSGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWlnaHQgPSBwb3B1cEhlaWdodDtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKCFzZWxlY3RlZCkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTW91c2Vkb3duKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSAnVE1QT1BVUENPTE9SJykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJywgZWwuaWQuc3BsaXQoJy0tJykucG9wKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLIGZyb20gJy4vbWFyay1pdGVtJ1xyXG5pbXBvcnQgX0JPT0tNQVJLIGZyb20gJy4vYm9va21hcmsnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG5cdFx0RU5WOiB7XHJcblx0XHRcdCdzZXQ6ZW50cmllcyc6ICd1cGRhdGVJRCcsXHJcblx0XHRcdCdwcmVzc2VkOm1hcmtlci1rZXknOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAncHJlc3NlZDpob3RrZXknOiAnb25Ib3RrZXknLFxyXG4gICAgICAnY2xpY2tlZDpwb3B1cC1tYXJrZXInOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnc2VsZWN0aW9uLWVuZCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdyZWNyZWF0ZScsXHJcbiAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdjdHg6LWInOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAnY3R4OmQnOiAncmVtb3ZlJyxcclxuICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ2N0eDpuJzogJ2FkZE5vdGUnLFxyXG4gICAgICAnY3R4OmMnOiAnY29weScsXHJcbiAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J2NoYW5nZWQ6bm90ZS1jb2xvcic6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgJ2NoYW5nZWQ6bm90ZS1zaXplJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyayc6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JzogJ2ltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJzogJ3NhdmUnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJzogJ3VuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JzogJ2NvcHknLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdvbkhhc2hDaGFuZ2UnXHJcblx0XHR9XHJcblx0fSxcclxuXHRzZWxlY3Rpb246IG51bGwsXHJcblx0ZG9uZTogW10sXHJcblx0dW5kb25lOiBbXSxcclxuXHR2aXN1YWxseU9yZGVyZWRNYXJrczogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgYm9va21hcms6IG51bGwsXHJcbiAgcmVtb3ZlZEJvb2ttYXJrOiBudWxsLFxyXG5cdGlkY291bnQ6IDAsXHJcblx0bWFya1Njcm9sbFBvczogLTEsXHJcblxyXG4gIHVwZGF0ZUlEKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICBjb25zdCBpZHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuXHJcbiAgICAgIGlmICghbG9ja2VkICYmIGVudHJ5LmlkY291bnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya3MgPSAoZW50cnkubWFya3MgfHwgW10pLmNvbmNhdChlbnRyeS5sb3N0IHx8IFtdKSxcclxuICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgIHdoaWxlIChkLS0pIHtcclxuICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pZGNvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaWRzKTtcclxuICB9LFxyXG5cdG1hcmsoa2V5LCBkYXRhLCBpbW11dCkge1xyXG5cdFx0dGhpcy51bmRvbmUubGVuZ3RoID0gMDtcclxuXHJcbiAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgIGlmIChkYXRhLmF1dG9ub3RlKSB0aGlzLmVtaXQoJ2FkZDpub3RlJywgbWFyaywgZGF0YS5hdXRvbm90ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG1hcms7XHJcblx0fSxcclxuXHR1bmRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0aWYgKGRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmUucG9wKCk7XHJcbiAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgIHRoaXMudW5kb25lLnB1c2gobWFyay51bmRvKCkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYm9va21hcmspIHRoaXMudW5kb0Jvb2ttYXJrKCk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG5cdHJlZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0aWYgKHVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMudW5kb25lLnBvcCgpO1xyXG5cclxuICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgW21hcmtdKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG4gIGN1dE91dChpKSB7XHJcbiAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICBpbmRpY2VzID0gW2ldLFxyXG4gICAgICAgIG1hcmssIHNtYWxsZXN0SUQ7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICBmb3IgKHZhciB4ID0gaiArIDE7IHggPCBsOyB4KyspIHtcclxuICAgICAgICBtYXJrID0gZG9uZVt4XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgaWYgKCF0b0JlUmVtb3ZlZC5pbmNsdWRlcyh4KSkgdG9CZVJlbW92ZWQucHVzaCh4KTtcclxuICAgICAgICAgIGluZGljZXMucHVzaCh4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW5kaWNlcy5zb3J0KCk7XHJcbiAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xyXG4gICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG4gICAgc21hbGxlc3RJRCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHRvQmVSZW1vdmVkKTtcclxuXHJcbiAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5zcGxpY2UodG9CZVJlbW92ZWQucG9wKCksIDEpWzBdLnVuZG8oKTtcclxuICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNtYWxsZXN0SUQ7XHJcbiAgfSxcclxuICByZW1vdmUoaWQpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgaWQgPSBpZCA/IGlkIDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICBsZXQgbWFyayA9IHRoaXMuZ2V0QnlJZChpZC5zcGxpdCgnXycpWzBdKSxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICBwb3NpdGlvbiA9IGRvbmUuaW5kZXhPZihtYXJrKSxcclxuICAgICAgICBzbWFsbGVzdElELCBpO1xyXG5cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgdGhpcy51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMudW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLnVuZG9uZS5sZW5ndGgpIHRoaXMucmVkbyh0cnVlKTtcclxuXHJcbiAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZFswXSk7XHJcbiAgfSxcclxuICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpXHJcbiAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gaGlnaGxpZ2h0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShoaWdobGlnaHQudGV4dENvbnRlbnQpLCBoaWdobGlnaHQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb25lID0gW107XHJcbiAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gW107XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IC0xO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgncmVzdW1lZDptYXJrZXJzJywgZW50cnkpO1xyXG4gIH0sXHJcbiAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICB0aGlzLmlzSW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gdHJ1ZTtcclxuICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgfSxcclxuICBzYXZlKCkge1xyXG4gICAgY29uc3QgaWZyYW1lID0gX1NUT1JFLmlmcmFtZTtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcblxyXG4gICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICBpZiAoX1NUT1JFLmlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGlmICghbG9ja2VkICYmIG5hbWluZyA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGlmcmFtZSA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgIGlmIChfU1RPUkUubmFtZSkgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBjb25maXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG4gICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cdH0sXHJcbiAgYXV0b3NhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgndW5zYXZlZC1jaGFuZ2VzJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNvcHkoKSB7XHJcbiAgICBjb25zdCBtYXJrID0gdGhpcy5maW5kTWFyaygpO1xyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCByYW5nZSA9IG1hcmsucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBtYXJrLnNlbGVjdGlvbi5zZWxmO1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KHdyYXBwZXJzWzBdLCAwKTtcclxuICAgIHJhbmdlLnNldEVuZCh3cmFwcGVyc1t3cmFwcGVycy5sZW5ndGggLSAxXSwgMSk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2VsZWN0aW9uLnRvU3RyaW5nKCkudHJpbSgpLnJlcGxhY2UoLyhcXHJcXG4pezEsfS9nLCAnXFxyXFxuJykpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gIH0sXHJcbiAgc3RvcmUobWFyaywgc2F2ZSwgb3JkZXIpIHtcclxuXHRcdHRoaXMuZG9uZS5wdXNoKG1hcmspO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHRpZiAob3JkZXIpIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblx0fSxcclxuICByZWNyZWF0ZShtYXJrKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcbiAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgfSxcclxuICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIHRoaXMuZG9uZSk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChfU1RPUkUubmFtZSA9PT0gbWFyay5rZXlEYXRhLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkpIHtcclxuICAgICAgICB0aGlzLmdvdG9NYXJrKG1hcmspO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLnJlZGVzY3JpYmluZykge1xyXG4gICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQ6cmVzdG9yYXRpb24tcHJvY2VzcycpO1xyXG4gIH0sXHJcbiAgYWRkTm90ZShpZCkge1xyXG4gICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICB9LFxyXG4gIHNhdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAoIV9TVE9SRS5sb2NrZWQpIHJldHVybiB0aGlzLmF1dG9zYXZlKCk7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IHRoaXMuZ2V0QnlJZChpZCkua2V5RGF0YTtcclxuICAgIGNvbnN0IHN5bmNlZCA9IHR5cGVvZiBtYXJrLnN5bmNlZCA9PT0gJ2Jvb2xlYW4nID8gbWFyay5zeW5jZWQgOiBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgIG1hcmtzOiBbbWFya10sXHJcbiAgICAgIG5hbWU6IG1hcmsudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSxcclxuICAgICAgc3luY2VkXHJcbiAgICB9O1xyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgZW50cnkpO1xyXG4gIH0sXHJcbiAgZ290b01hcmsobWFyaykge1xyXG4gICAgY29uc3QgbWFya0VsZW1lbnRzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcztcclxuICAgIGxldCBlbCwgcG9zLCBpZDtcclxuICAgIGlmIChtYXJrIHx8IG1hcmsgPT09IDApIHtcclxuICAgICAgaWYgKHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IG1hcmsgKyAxO1xyXG4gICAgICAgIGVsID0gbWFya0VsZW1lbnRzW21hcmtdO1xyXG4gICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZD1cIicgKyBpZCArICdfMFwiXScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3MgPSB0aGlzLm1hcmtTY3JvbGxQb3M7XHJcbiAgICAgIGVsID0gbWFya0VsZW1lbnRzW3Bvc107XHJcbiAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG5cclxuXHRcdGlmICghbWFyayB8fCB0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHRoaXMuZ2V0QnlJZChpZCkub25DbGljayhpZCk7XHJcbiAgICB0aGlzLmluZGljYXRlTWFyayhpZCk7XHJcbiAgfSxcclxuXHRnb3RvTmV4dE1hcmsoZGlyKSB7XHJcblx0XHRjb25zdCBsID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5sZW5ndGg7XHJcblxyXG5cdFx0dGhpcy5tYXJrU2Nyb2xsUG9zICs9IGRpcjtcclxuXHJcblx0XHRpZiAodGhpcy5tYXJrU2Nyb2xsUG9zIDwgMCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbCAtIDE7XHJcblx0XHRlbHNlIGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPj0gbCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gMDtcclxuXHJcblx0XHR0aGlzLmdvdG9NYXJrKCk7XHJcblx0fSxcclxuICBpbmRpY2F0ZU1hcmsoaWQpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSlcclxuICAgICAgLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICBjb25zdCB0bXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkXj1cIicgKyBpZCArICdfXCJdJykpO1xyXG5cclxuICAgIHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKSwgMjAwMCk7XHJcbiAgfSxcclxuICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcmssXHJcbiAgICAgICAgbWFyayA9IHRoaXMuZmluZE1hcmsobSk7XHJcblxyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGJvb2ttYXJrKSB7XHJcbiAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbmV3IF9CT09LTUFSSygpLnNldChtYXJrKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2FkZGVkOmJvb2ttYXJrJyk7XHJcbiAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHVuZG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgfSxcclxuICByZW1vdmVCb29rbWFyaygpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoIWJvb2ttYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gYm9va21hcms7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgIGlmIChib29rbWFyaykgYm9va21hcmsuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9LFxyXG4gIGdldEJ5SWQoaWQsIHBvcykge1xyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmUsXHJcblx0XHRcdCAgZCA9IGRvbmUubGVuZ3RoLFxyXG5cdFx0XHQgIG1hcms7XHJcblxyXG5cdFx0d2hpbGUgKGQtLSkge1xyXG5cdFx0XHRtYXJrID0gZG9uZVtkXTtcclxuXHJcblx0XHRcdGlmIChtYXJrLmtleURhdGEuaWQgPT0gaWQpXHJcblx0XHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbWFyaywgcG9zaXRpb246IGQgfSA6IG1hcms7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBudWxsLCBwb3NpdGlvbjogbnVsbCB9IDogZmFsc2U7XHJcblx0fSxcclxuXHRmaW5kTWFyayh4KSB7XHJcblx0XHR4ID0geCA/IHggOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG5cdFx0bGV0IG1hcmsgPSAheCA/XHJcblx0XHRcdHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV0gOlxyXG5cdFx0XHRcdHR5cGVvZiB4ID09PSAnc3RyaW5nJyA/XHJcblx0XHRcdHRoaXMuZ2V0QnlJZCh4LnNwbGl0KCdfJylbMF0pIDpcclxuXHRcdFx0eDtcclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcbiAgc29ydEJ5SWQoKSB7XHJcbiAgICB0aGlzLmRvbmUuc29ydCgobWFyazEsIG1hcmsyKSA9PiBtYXJrMS5pZCAtIG1hcmsyLmlkKTtcclxuICB9LFxyXG5cdG9yZGVyTWFya3NWaXN1YWxseSgpIHtcclxuXHRcdHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkJD1cIl8wXCJdJykpLnNvcnQoKG0xLCBtMikgPT4ge1xyXG5cdFx0XHRsZXQgYmIxID0gbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRiYjIgPSBtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdHRvcDEgPSBiYjEudG9wLFxyXG5cdFx0XHRcdFx0dG9wMiA9IGJiMi50b3A7XHJcblxyXG5cdFx0XHRpZiAodG9wMSA8IHRvcDIpIHJldHVybiAtMTtcclxuXHRcdFx0ZWxzZSBpZiAodG9wMiA8IHRvcDEpIHJldHVybiAxO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAoYmIxLmxlZnQgPCBiYjIubGVmdCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubWFwKG1hcmsgPT4gcGFyc2VJbnQobWFyay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpO1xyXG4gICAgaWYgKCFfU1RPUkUuaWZyYW1lKSB0aGlzLmVtaXQoJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnLCB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMpO1xyXG5cdH0sXHJcbiAgbWFya3NJbnRlcnNlY3QobWFyazEsIG1hcmsyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMxID0gbWFyazEud3JhcHBlcnMsXHJcbiAgICAgICAgdzEgPSB3cmFwcGVyczEubGVuZ3RoLFxyXG4gICAgICAgIGlkMSA9IG1hcmsxLmlkLFxyXG4gICAgICAgIHdyYXBwZXJzMiA9IG1hcmsyLndyYXBwZXJzLFxyXG4gICAgICAgIGlkMiA9IG1hcmsyLmlkLFxyXG4gICAgICAgIHcyLCB0bXMsIGw7XHJcblxyXG4gICAgd2hpbGUgKHcxLS0pIHtcclxuICAgICAgdzIgPSB3cmFwcGVyczIubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAodzItLSkge1xyXG4gICAgICAgIHRtcyA9IHdyYXBwZXJzMVt3MV0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRdJyk7XHJcbiAgICAgICAgbCA9IHRtcy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgaWYgKHRtc1tsXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKVswXSA9PSBpZDIpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcbiAgb25NYXJrZXJLZXkoZSwga2V5KSB7XHJcblx0XHRsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTigpO1xyXG5cclxuXHRcdGlmICghc2VsZWN0aW9uLm5vZGVzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGUpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykga2V5ID0gZTtcclxuXHRcdFx0ZWxzZSB0aGlzLnByZXZlbnREZWZhdWx0KGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0a2V5ID0ga2V5IHx8ICdtJztcclxuXHRcdH1cclxuXHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoX1NUT1JFLmlzTmV3KSB7XHJcbiAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogISFzZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IF9TVE9SRS5pbW11dDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhrZXksIHNldHRpbmdzLm1hcmtlcnNba2V5XSwgdGhpcy5pc0ltbXV0KSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHR9LFxyXG4gIG9uSG90a2V5KGtleSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc3dpdGNoKGtleSkge1xyXG4gICAgICBjYXNlICd6Jzogc2VsZi51bmRvKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd5Jzogc2VsZi5yZWRvKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdzJzogc2VsZi5zYXZlKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdiJzogc2VsZi5zZXRCb29rbWFyaygpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAnYXJyb3d1cCc6IHNlbGYuZ290b05leHRNYXJrKC0xKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93ZG93bic6IHNlbGYuZ290b05leHRNYXJrKDEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAnZCc6IHNlbGYucmVtb3ZlKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdjJzogc2VsZi5jb3B5KCk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJldmVudERlZmF1bHQoZSkge1xyXG5cdFx0aWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdHJldHJpZXZlRW50cnkoKSB7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgY29uc3QgaXNOZXcgPSBfU1RPUkUuaXNOZXc7XHJcbiAgICBjb25zdCBuYW1lID0gX1NUT1JFLm5hbWU7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSAhbG9ja2VkICYmIF9TVE9SRS5lbnRyaWVzW25hbWVdID8gX1NUT1JFLmVudHJpZXNbbmFtZV0gOiB7fTtcclxuXHJcbiAgICBlbnRyeS5tYXJrcyA9IHRoaXMuY29sbGVjdE1hcmtzKCk7XHJcblx0XHRlbnRyeS5sYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBlbnRyeS5ib29rbWFya2VkID0gISF0aGlzLmJvb2ttYXJrO1xyXG4gICAgZW50cnkudGl0bGUgPSB3aW5kb3cuZG9jdW1lbnQudGl0bGU7XHJcblx0XHRlbnRyeS5jb3VudCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuXHRcdGVudHJ5LmlkY291bnQgPSB0aGlzLmlkY291bnQ7XHJcbiAgICBlbnRyeS5pbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IGVudHJ5LmltbXV0O1xyXG5cclxuICAgIGlmIChpc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgZW50cnkuZmlyc3QgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbnRyeS51cmwgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZSA/IHdpbmRvdy5kb2N1bWVudC5VUkwgOiBfSEFTSExFU1Mod2luZG93LmRvY3VtZW50LlVSTCk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuICAgICAgZW50cnkubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgICBlbnRyeS5oYXNoU2Vuc2l0aXZlID0gX1NUT1JFLmhhc2hTZW5zaXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgZW50cnkubmFtZSA9IGxvY2tlZCA/XHJcbiAgICAgIGVudHJ5Lm1hcmtzWzBdLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkgOlxyXG4gICAgICBpc05ldyB8fCAhZW50cnkubmFtZSA/IG5hbWUgOiBlbnRyeS5uYW1lO1xyXG5cclxuXHRcdHJldHVybiBlbnRyeTtcclxuXHR9LFxyXG4gIGNvbGxlY3RNYXJrcygpIHtcclxuICAgIGxldCBkb25lID0gdGhpcy5kb25lO1xyXG4gICAgbGV0IGwgPSBkb25lLmxlbmd0aDtcclxuICAgIGNvbnN0IG1hcmtzID0gW107XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgZG9uZSA9IFtkb25lW2wtMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIGwgPSBkb25lLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBtID0gMCwga0Q7IG0gPCBsOyBtKyspIHtcclxuXHRcdFx0a0QgPSBkb25lW21dLmtleURhdGE7XHJcbiAgICAgIGRlbGV0ZSBrRC5zeW5jZWQ7XHJcblx0XHRcdG1hcmtzLnB1c2goa0QpO1xyXG5cdFx0fVxyXG4gICAgcmV0dXJuIG1hcmtzO1xyXG4gIH0sXHJcbiAgb25IYXNoQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5yZXN1bWUobnVsbCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3VtZWQtb24taGFzaGNoYW5nZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXJrLCBjb2xvcikge1xyXG5cclxuICBjb25zdCBCT0RZID0gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhZGRNYXJrTGlzdGVuZXJzJyxcclxuICAgICAgICAnZHJhZzpub3RlJzogJ29uRHJhZycsXHJcbiAgICAgICAgJ2RyYWdzdG9wOm5vdGUnOiAnb25EcmFnRW5kJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdfZGVsZXRlJyxcclxuICAgICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICdoaWRlJyxcclxuICAgICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2JyaW5nVXBGcm9udCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYXR0ZW1wdFVwZGF0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoc3RhcnQ6IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBlbDogbnVsbCxcclxuICAgIG1hcmssXHJcbiAgICBjb2xvcjogY29sb3IgfHwgJycsXHJcbiAgICBtYXJrQ2xpY2tIYW5kbGVyOiBudWxsLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIHJlY2VudGx5VXBkYXRlZDogZmFsc2UsXHJcbiAgICBzZXR0aW5nc01vZGU6IGZhbHNlLFxyXG4gICAgcG9zOiB7IGw6IG51bGwsIHQ6IG51bGwgfSxcclxuICAgIHNpemU6IHsgdzogbnVsbCwgaDogbnVsbCB9LFxyXG4gICAgZHJhZ0RYOiAwLFxyXG4gICAgZHJhZ0RZOiAwLFxyXG4gICAgbXV0YXRpb25PYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGp1c3ROb3RlRGF0YU9iamVjdCgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZU5vdGVFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWRkTWFya0xpc3RlbmVycygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGp1c3ROb3RlRGF0YU9iamVjdCgpIHtcclxuICAgICAgY29uc3Qgbm90ZURhdGEgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlO1xyXG4gICAgICBpZiAodHlwZW9mIG5vdGVEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCAneWVsbG93JyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFub3RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBub3RlRGF0YS5wb3MgfHwgdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbm90ZURhdGEuc2l6ZSB8fCB0aGlzLnNpemU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVOb3RlRWxlbWVudCgpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGUnKTtcclxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVoZWFkZXInKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWFjdGlvbnMnKTtcclxuICAgICAgY29uc3QgZGVsID0gdGhpcy5kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVkZWxldGUnKTtcclxuICAgICAgY29uc3QgbWluID0gdGhpcy5taW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVtaW5pbWl6ZScpO1xyXG4gICAgICBjb25zdCBnZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY3VzdG9taXplJyk7XHJcbiAgICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLnBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVwYWxldHRlJyk7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dDtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yO1xyXG4gICAgICBfU1RPUkUubm90ZUNvbG9yID0gY29sb3I7XHJcbiAgICAgIGNvbnN0IGRlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICAgIGNvbnN0IG1pblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjAxMykpO1xyXG4gICAgICBjb25zdCBnZWFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNjk5KSk7XHJcblxyXG4gICAgICBbJ2dyZWVuJywgJ3doaXRlJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJywgJ3B1cnBsZScsICdibHVlJywgJ3R1cnF1b2lzZSddLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY29sb3InKTtcclxuICAgICAgICBjb2xvci5jbGFzc05hbWUgPSAndG1ub3RlY29sb3ItLScgKyBjO1xyXG4gICAgICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicsIGMpO1xyXG4gICAgICAgIHBhbGV0dGUuYXBwZW5kQ2hpbGQoY29sb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHAuc2V0QXR0cmlidXRlKCdkYXRhLXRtLW5vdGUnLCB0cnVlKTtcclxuICAgICAgZGVsLmFwcGVuZENoaWxkKGRlbFRleHQpO1xyXG4gICAgICBtaW4uYXBwZW5kQ2hpbGQobWluVGV4dCk7XHJcbiAgICAgIGdlYXIuYXBwZW5kQ2hpbGQoZ2VhclRleHQpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZ2Vhcik7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChtaW4pO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKHApO1xyXG4gICAgICBub3RlLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgaWYgKHRleHQpIHAudmFsdWUgPSB0ZXh0O1xyXG5cclxuICAgICAgcC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB0aGlzLmF0dGVtcHRVcGRhdGUoZSwgZS50YXJnZXQsIHRydWUpLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX2RlbGV0ZSgpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZSA9ICcnO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgIHRoaXMucmVtb3ZlTWFya0xpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bm90ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgYXR0ZW1wdFVwZGF0ZShlLCBlbCwgZm9yY2UpIHtcclxuICAgICAgaWYgKGZvcmNlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCF0aGlzLnJlY2VudGx5VXBkYXRlZCkge1xyXG4gICAgICAgIHRoaXMucmVjZW50bHlVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZShlbCksIDMwMDApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVsKSB7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dCA9IGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bm90ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICAgIHRoaXMucmVjZW50bHlVcGRhdGVkID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc2hvdygpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBpbm5lcldpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICBsZXQgcG9zLCBsZWZ0LCB0b3A7XHJcblxyXG4gICAgICBpZiAodGhpcy5wb3MubCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHBvcyA9IHRoaXMucG9zO1xyXG4gICAgICAgIHRvcCA9IHBvcy50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBwb3MubDtcclxuICAgICAgICB0b3AgPSB0aGlzLnBvcy50ID0gcG9zLnQgKyBwb3Mub2Zmc2V0O1xyXG4gICAgICB9XHJcbiAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcblxyXG4gICAgICBpZiAobGVmdCArIDM0MCA+IGlubmVyV2luZG93V2lkdGgpIHtcclxuICAgICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IGlubmVyV2luZG93V2lkdGggLSAzNDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemUudyA/ICd3aWR0aDonICsgdGhpcy5zaXplLncgKyAnO2hlaWdodDonICsgdGhpcy5zaXplLmggKyAnOycgOiAnJztcclxuXHJcbiAgICAgIEJPRFkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7dG9wOicgKyB0b3AgKyAncHg7bGVmdDonICsgbGVmdCArICdweDsnKTtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsIHNpemUpO1xyXG4gICAgICB0aGlzLmNvbm5lY3RNdXRhdGlvbk9ic2VydmVyKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYnJpbmdVcEZyb250KCkge1xyXG4gICAgICBBcnJheS5mcm9tKEJPRFkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpKS5mb3JFYWNoKG5vdGUgPT4ge1xyXG4gICAgICAgIGlmIChub3RlID09PSB0aGlzLmVsKSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDc7XHJcbiAgICAgICAgZWxzZSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDY7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKSB7XHJcbiAgICAgIEJPRFkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKHRoaXMudmlzaWJsZSkgdGhpcy5oaWRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUGFsZXR0ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLnBhbGV0dGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldHRpbmdzTW9kZSA9ICF0aGlzLnNldHRpbmdzTW9kZTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb2xvcihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tJyArIHRoaXMuY29sb3IpO1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSBfU1RPUkUubm90ZUNvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgIHRoaXMudG9nZ2xlUGFsZXR0ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1jb2xvcicsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZE1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ25vdGVvbmNsaWNrJykudGhlbihub3Rlb25jbGljayA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGVvbmNsaWNrKSB7XHJcbiAgICAgICAgICBpZiAoISF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5tYXJrQ2xpY2tIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHRoaXMubWFyay53cmFwcGVycykge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGUnKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlTWFya0xpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya0xpc3RlbmVycygpIHtcclxuICAgICAgaWYgKCF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb25uZWN0TXV0YXRpb25PYnNlcnZlcigpIHtcclxuICAgICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddIH07XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyIHx8IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5zYXZlU2l6ZSkpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRleHRhcmVhLCBjb25maWcpO1xyXG4gICAgfSxcclxuICAgIGdldFBvc2l0aW9uKCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5tYXJrLndyYXBwZXJzW3RoaXMubWFyay53cmFwcGVycy5sZW5ndGggLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0OiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIEJPRFkuY2xpZW50VG9wLFxyXG4gICAgICAgIGw6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIEJPRFkuY2xpZW50TGVmdCxcclxuICAgICAgICBvZmZzZXQ6IHJlY3QuaGVpZ2h0XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgb25EcmFnU3RhcnQoZSwgZWwpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRyYWdEWCA9IGUucGFnZVggLSB0aGlzLnBvcy5sO1xyXG4gICAgICB0aGlzLmRyYWdEWSA9IGUucGFnZVkgLSB0aGlzLnBvcy50O1xyXG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0OmRyYWcnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIG9uRHJhZyhub3RlLCBlKSB7XHJcbiAgICAgIGlmIChub3RlID09PSB0aGlzLm1hcmsuaWQpIHtcclxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvcy5sID0gZS5wYWdlWCAtIHRoaXMuZHJhZ0RYO1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvcy50ID0gZS5wYWdlWSAtIHRoaXMuZHJhZ0RZO1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EcmFnRW5kKCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnBvcyA9IHRoaXMucG9zO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1wb3MnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIHNhdmVTaXplKG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBtdXRhdGlvbnNMaXN0WzBdLnRhcmdldC5zdHlsZTtcclxuICAgICAgdGhpcy5zaXplID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5zaXplID0geyB3OiBzdHlsZS53aWR0aCwgaDogc3R5bGUuaGVpZ2h0IH07XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLXNpemUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTk9URSBmcm9tICcuL25vdGUnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3JlbW92ZU5vdGVTdG9yYWdlJyxcclxuICAgICAgJ3Jlc3RvcmU6bm90ZXMnOiAncmVzdG9yZScsXHJcbiAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICd0b2dnbGU6bm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlVHJhbnNwJyxcclxuICAgICAgJ3N0YXJ0OmRyYWcnOiAnc3RhcnREcmFnZ2luZ05vdGUnLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZE5vdGVzU3RhdGUnLFxyXG4gICAgICAnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucyc6ICdyZXBvcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbm90ZXM6IHt9LFxyXG4gIHRvZ2dsZTogbnVsbCxcclxuICBkcmFnSGFuZGxlcjogbnVsbCxcclxuICBkcmFnU3RvcEhhbmRsZXI6IG51bGwsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVRyYW5zcCgpO1xyXG4gIH0sXHJcbiAgYWRkKG1hcmssIGNvbG9yKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3Rlc1ttYXJrLmlkXTtcclxuICAgIGlmIChub3RlKSByZXR1cm4gbm90ZTtcclxuICAgIGlmICghX1NUT1JFLnJlc3RvcmluZykgdGhpcy5lbWl0KCdhZGRlZDpub3RlJyk7XHJcbiAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgfSxcclxuICByZXN0b3JlKG1hcmtzKSB7XHJcbiAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgIGlmIChtYXJrLmtleURhdGEubm90ZSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1hcmspO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICB0aGlzLmFkZChtYXJrLCBjb2xvcikuc2hvdygpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgIGRlbGV0ZSB0aGlzLm5vdGVzW2lkXTtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkodGhpcy5ub3RlcykpIHRoaXMuZW1pdCgncmVtb3ZlZDpsYXN0LW5vdGUnKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGUoaWQpIHtcclxuICAgIGlmICh0aGlzLm5vdGVzW2lkXSkgdGhpcy5ub3Rlc1tpZF0ucmVtb3ZlKCk7XHJcbiAgfSxcclxuICB0b2dnbGVBbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMubm90ZXMpIHJldHVybjtcclxuICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgIGxldCBtZXRoID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKS5sZW5ndGggPyAnaGlkZScgOiAnc2hvdycsXHJcbiAgICAgICAgY29uZGl0aW9uID0gbWV0aCA9PT0gJ2hpZGUnID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIG5vdGU7XHJcbiAgICBmb3IgKGxldCBuIGluIG5vdGVzKSB7XHJcbiAgICAgIG5vdGUgPSBub3Rlc1tuXTtcclxuICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgbm90ZVttZXRoXSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVUcmFuc3AoKSB7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncyAmJiBzZXR0aW5ncy5taXNjKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcCkgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXBsYWludmlldykgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS1wbGFpbi12aWV3Jyk7XHJcbiAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBpc0VtcHR5KG9iaikge1xyXG4gICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICB9LFxyXG4gIHN0YXJ0RHJhZ2dpbmdOb3RlKG5vdGUpIHtcclxuICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlciA9IChlKSA9PiB0aGlzLmVtaXREcmFnRXZlbnQobm90ZSwgZSk7XHJcbiAgICBjb25zdCBkcmFnU3RvcEhhbmRsZXIgPSB0aGlzLmRyYWdTdG9wSGFuZGxlciA9IChlKSA9PiB0aGlzLnN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSk7XHJcbiAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKSB7XHJcbiAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdkcmFnc3RvcDpub3RlJywgbm90ZSwgZSk7XHJcbiAgfSxcclxuICBlbWl0RHJhZ0V2ZW50KG5vdGUsIGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZW1pdCgnZHJhZzpub3RlJywgbm90ZSwgZSk7XHJcbiAgfSxcclxuICBzZW5kTm90ZXNTdGF0ZShpbmZvKSB7XHJcbiAgICB0aGlzLmVtaXQoJ25vdGVzLXN0YXRlJywgIXRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSwgaW5mbyk7XHJcbiAgfSxcclxuICByZXBvcnQoKSB7XHJcbiAgICB0aGlzLmlzRW1wdHkodGhpcy5ub3RlcykgfHwgdGhpcy5lbWl0KCdhZGRlZDpub3RlJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogd2luZG93LmRvY3VtZW50LFxyXG4gIGF1dG9QYXVzZTogdHJ1ZSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDpyZXN0b3JhdGlvbnMnOiAncmVtb3ZlTGlzdGVuZXJzJyxcclxuICAgICAgJ2NvbXBsZXRlZDpyZXN0b3JhdGlvbi1wcm9jZXNzJzogJ2FkZExpc3RlbmVycydcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAga2V5ZG93bjoge1xyXG4gICAgICAgICcqJzogJ2RlbGVnYXRlJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Rpb25jaGFuZ2U6IHtcclxuICAgICAgICAnKic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNlbGVjdGlvbkNvbGxhcHNlZDogdHJ1ZSxcclxuICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICBrZXlDb2RlTWFwOiB7XHJcbiAgICAnMTMnOiAnRW50ZXInLFxyXG4gICAgJzQ4JzogJzAnLCAnNDknOiAnMScsICc1MCc6ICcyJywgJzUxJzogJzMnLCAnNTInOiAnNCcsXHJcbiAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICcxNzEnOiAnKycsICcxNzMnOiAnLSdcclxuICB9LFxyXG5cclxuICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZWwudGFnTmFtZTtcclxuXHJcbiAgICByZXR1cm4gKG5hbWUgPT09ICdURVhUQVJFQScgfHwgbmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJyk7XHJcbiAgfSxcclxuICBkZWxlZ2F0ZShlKSB7XHJcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgbW9kS2V5ID0gKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleSksXHJcbiAgICAgICAgYXJyb3dLZXlzID0gWydhcnJvd2Rvd24nLCAnYXJyb3d1cCddLFxyXG4gICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgIGZ1bmN0aW9uS2V5cyA9IGxvY2tlZEFjdGlvbnMuY29uY2F0KGFycm93S2V5cykuY29uY2F0KCdjJyksXHJcbiAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJ107XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zaGlmdFNlbnNpdGl2ZUtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIGtleSA9IHRoaXMua2V5Q29kZU1hcFtrZXlDb2RlXTtcclxuXHJcbiAgICBpZiAoIWZ1bmN0aW9uS2V5cy5pbmNsdWRlcyhrZXkpICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICBjb25zdCBpc0N1c3RvbU1hcmtlcktleSA9IGlzTWFya2VyS2V5ICYmICFkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICBpZiAoaXNDdXN0b21NYXJrZXJLZXkpIGtleSA9ICdjbSc7XHJcbiAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgIGlmICghc2V0dGluZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBpZiAoIW1vZEtleSkge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdbMV0pIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG9ydGN1dCA9IHNldHRpbmdbMF0uc3BsaXQoJy0nKTtcclxuICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgIGNvbnN0IHMyID0gc2hvcnRjdXRbMV07XHJcblxyXG4gICAgICAgIGlmICghZVtzMV0gfHwgKHMyICYmICFlW3MyXSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGlzTWFya2VyS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgncHJlc3NlZDpob3RrZXknLCBrZXkpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uQ29sbGFwc2VkID0gd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uQ29sbGFwc2VkICE9PSBzZWxlY3Rpb25Db2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNlbGVjdGlvbicsICFzZWxlY3Rpb25Db2xsYXBzZWQpO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNvbGxhcHNlZCA9IHNlbGVjdGlvbkNvbGxhcHNlZDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4uL19zdG9yZSdcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5jbGFzcyBSZXN0b3JlckJhc2UgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIHRoaXMubG9zdCA9IFtdO1xyXG4gICAgdGhpcy5mYWlsdXJlUmVwb3J0ID0ge307XHJcbiAgICB0aGlzLnJlc3RvcmVkID0gW107XHJcbiAgICB0aGlzLmFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnc3RhcnRlZDpyZXN0b3JhdGlvbicsIGVudHJ5Lm1hcmtzLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW5DaHVua3MoZGF0YSwgcHJvYywgY2IpIHtcclxuICAgIHByb2MgPSBwcm9jLmJpbmQodGhpcyk7XHJcbiAgICBjYiA9IGNiLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIHJlYygpIHtcclxuXHRcdFx0bGV0IGV4cGlyZSA9ICtuZXcgRGF0ZSgpICsgNTAwO1xyXG5cclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdHRyeSB7XHJcbiAgICAgICAgICBwcm9jKGRhdGEuc2hpZnQoKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHR9IHdoaWxlIChkYXRhLmxlbmd0aCA+IDAgJiYgZXhwaXJlID4gK25ldyBEYXRlKCkpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDApO1xyXG5cdFx0XHRlbHNlIGNiKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuICByZXBvcnQoKSB7XHJcbiAgICBsZXQgbGwgPSB0aGlzLmxvc3QubGVuZ3RoO1xyXG4gICAgaWYgKGxsKSB7XHJcbiAgICAgIHdoaWxlKGxsLS0pIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5sb3N0W2xsXS50ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCgnbG9zdDptYXJrcycsIHRoaXMuZmFpbHVyZVJlcG9ydCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJywgdGhpcy5lbnRyeS5uYW1lLCB0aGlzLnJlc3RvcmVkLCB0aGlzLmxvc3QsIHRoaXMuYXJlYSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnF1ZXVlID0gW107XHJcbiAgICB0aGlzLmNhY2hlID0gW107XHJcbiAgICB0aGlzLnBoYXNlID0gMTtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwgPSAwO1xyXG4gICAgdGhpcy5jaHVua0R1cmF0aW9uID0gNTAwO1xyXG4gICAgdGhpcy5fdGltZXIgPSArbmV3IERhdGUoKSArIHRoaXMuY2h1bmtEdXJhdGlvbjtcclxuICAgIHRoaXMub29tID0gZW50cnkubWFya3MubGVuZ3RoID09PSAxICYmIGVudHJ5Lm1hcmtzWzBdLmlkID09IDE7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGltZXIoKSB7XHJcbiAgICBjb25zdCB0aW1lciA9IHRoaXMuX3RpbWVyO1xyXG4gICAgdGhpcy5fdGltZXIgPSArbmV3IERhdGUoKSArIHRoaXMuY2h1bmtEdXJhdGlvbjtcclxuICAgIHJldHVybiB0aW1lcjtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBlbnRyeSA9IHRoaXMuZW50cnksXHJcbiAgICAgICAgbm93ID0gW10sIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIG1hcmtzID0gZW50cnkubWFya3MsXHJcbiAgICAgICAgbCA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgbWFyaztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcblxyXG4gICAgICB0aGlzLmNvbnZlcnREZXNjcmlwdGlvbihtYXJrKS5jcmVhdGVUZW1wT2JqZWN0KG1hcmspO1xyXG5cclxuICAgICAgaWYgKG1hcmsuY29uZHMubjEgPT09ICdUTScpIHBvc3Rwb25lZC5wdXNoKG1hcmspO1xyXG4gICAgICBlbHNlIG5vdy5wdXNoKG1hcmspO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucXVldWUucHVzaChub3cpO1xyXG5cclxuICAgIGZvciAoaSA9IDAsIGwgPSBwb3N0cG9uZWQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbcG9zdHBvbmVkW2ldXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXN0b3JlKCk7XHJcbiAgfVxyXG4gIGNvbnZlcnREZXNjcmlwdGlvbihtYXJrKSB7XHJcbiAgICBpZiAodHlwZW9mIG1hcmsuY29uZHMubyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbGV0IGNvbmRzID0gbWFyay5jb25kcyxcclxuICAgICAgICAgIGNvbnZlcnRlZENvbmRzID0ge1xyXG4gICAgICAgICAgICBvOiBjb25kcy5zdGFydE9mZnNldCxcclxuICAgICAgICAgICAgbjE6IGNvbmRzLmZpcnN0Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIG4yOiBjb25kcy5maXJzdFBhcmVudE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBwMTogY29uZHMuZmlyc3RUZXh0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMjogY29uZHMuZmlyc3ROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAzOiBjb25kcy5maXJzdFBhcmVudE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDQ6IGNvbmRzLmZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uXHJcbiAgICAgICAgICB9O1xyXG4gICAgICBkZWxldGUgbWFyay5jb25kcztcclxuICAgICAgbWFyay5jb25kcyA9IGNvbnZlcnRlZENvbmRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGNyZWF0ZVRlbXBPYmplY3QobWFyaykge1xyXG4gICAgbGV0IHRleHQgPSBtYXJrLnRleHQsXHJcbiAgICAgICAgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKSxcclxuICAgICAgICBzcXVlZXplZFRleHQgPSB0aGlzLnNxdWVlemUobWFyay50ZXh0KTtcclxuXHJcbiAgICBtYXJrLnRlbXAgPSB7XHJcbiAgICAgIHRleHRMZW5ndGg6IHRleHQubGVuZ3RoLFxyXG4gICAgICB0cmltbWVkVGV4dDogdHJpbW1lZFRleHQsXHJcbiAgICAgIHRyaW1tZWRUZXh0TGVuZ3RoOiB0cmltbWVkVGV4dC5sZW5ndGgsXHJcbiAgICAgIHNxdWVlemVkVGV4dDogc3F1ZWV6ZWRUZXh0LFxyXG4gICAgICBzcXVlZXplZFRleHRMZW5ndGg6IHNxdWVlemVkVGV4dC5sZW5ndGgsXHJcbiAgICAgIHBvc3NpYmxlUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZHM6IHt9LFxyXG4gICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0czogW11cclxuICAgIH07XHJcblxyXG4gICAgbWFyay5zeW5jZWQgPSB0aGlzLmVudHJ5LnN5bmNlZDtcclxuICB9XHJcbiAgcmVzdG9yZSgpIHtcclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAyKSB0aGlzLnNvcnRRdWV1ZUJ5SWQoKTtcclxuXHJcbiAgICBsZXQgbWFya3MgPSB0aGlzLm1hcmtzID0gdGhpcy5xdWV1ZS5zaGlmdCgpLFxyXG4gICAgICAgIGxlbmd0aCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMDtcclxuXHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuXHJcbiAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0Qm9keVNlbGVjdGlvbih3aW5kb3cuZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgIC5nZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGhhc2UgPT09IDEgJiYgbGVuZ3RoID4gMSlcclxuICAgICAgICAgIHRoaXMucG9zdHBvbmVPdmVybGFwcGluZ3MoKTtcclxuXHJcbiAgICAgIHRoaXMuZmluZFBvc3NpYmxlRXh0cmVtYSgpXHJcbiAgICAgICAgICAucnVsZU91dE11bHRpcGxlcygpXHJcbiAgICAgICAgICAucmVzdG9yZVJhbmdlcygpO1xyXG5cclxuICAgICAgdGhpcy5waGFzZSsrO1xyXG5cclxuICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPCArbmV3IERhdGUoKSkgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc3RvcmUoKSwgMCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlc3RvcmUoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHRoaXMucmVwb3J0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHRoaXMucmVwb3J0KCk7XHJcbiAgfVxyXG4gIHNvcnRRdWV1ZUJ5SWQoKSB7XHJcbiAgICBsZXQgbWFya3MgPSB0aGlzLnF1ZXVlLFxyXG4gICAgICAgIGwgPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgdGVtcCA9IFtdLFxyXG4gICAgICAgIHJlcyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG1hcmssIHQ7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBpZiAoIW1hcmtzW2xdLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXVswXTtcclxuICAgICAgdGVtcFttYXJrLmlkXSA9IG1hcms7XHJcbiAgICB9XHJcbiAgICB0aGlzLnF1ZXVlID0gW107XHJcblxyXG4gICAgZm9yICh0ID0gdGVtcC5sZW5ndGg7IGkgPCB0OyBpKyspIHtcclxuICAgICAgaWYgKHRlbXBbaV0pIHRoaXMucXVldWUucHVzaChbdGVtcFtpXV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGdldFRleHRQb3NpdGlvbnMobWFya3MsIGwpIHtcclxuICAgIGxldCB0cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQsXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdLFxyXG4gICAgICAgIGVuZFBvc2l0aW9ucyA9IFtdLFxyXG4gICAgICAgIG1hcmssIG1hcmtUZW1wLCBzcXVlZXplZFRleHQsIHNxdWVlemVkVGV4dExlbmd0aCwgcCwgZW5kUG9zaXRpb247XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBwID0gdW5kZWZpbmVkO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG5cclxuICAgICAgaWYgKCFtYXJrVGVtcCkge1xyXG4gICAgICAgIG1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCkge1xyXG5cclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5jb25jYXQobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucyA9IGVuZFBvc2l0aW9ucy5jb25jYXQobWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0O1xyXG4gICAgICAgIHNxdWVlemVkVGV4dExlbmd0aCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dExlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHAgIT09IC0xKSB7XHJcbiAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBwID0gLTE7XHJcbiAgICAgICAgICBwID0gdHJpbW1lZFNlbGVjdGlvblRleHQuaW5kZXhPZihzcXVlZXplZFRleHQsIHAgKyAxKTtcclxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gcCArIHNxdWVlemVkVGV4dExlbmd0aDtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIGVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zLnBvcCgpO1xyXG5cclxuICAgICAgICBpZiAoIW1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8xJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMoYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyk7XHJcbiAgICB0aGlzLm1heFBvc2l0aW9uID0gTWF0aC5tYXguYXBwbHkobnVsbCwgZW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMocG9zaXRpb25zKSB7XHJcbiAgICBsZXQgbCA9IHBvc2l0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgdGVtcCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHBvcywgc3RhcnQsIHQ7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBwb3MgPSBwb3NpdGlvbnNbbF07XHJcbiAgICAgIHN0YXJ0ID0gcG9zWzBdO1xyXG5cclxuICAgICAgaWYgKHRlbXBbc3RhcnRdKSB0ZW1wLnNwbGljZShzdGFydCArIDEsIDAsIHBvcyk7XHJcbiAgICAgIGVsc2UgdGVtcFtzdGFydF0gPSBwb3M7XHJcbiAgICB9XHJcbiAgICB0ID0gdGVtcC5sZW5ndGg7XHJcbiAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IHQ7IGkrKylcclxuICAgICAgaWYgKHRlbXBbaV0pIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKHRlbXBbaV0pO1xyXG4gIH1cclxuICBwb3N0cG9uZU92ZXJsYXBwaW5ncygpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgcG9zMSwgcG9zMiwgaSwgbTEsIG0yLCBpZDEsIGlkMiwgaWQ7XHJcblxyXG4gICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgIHdoaWxlIChwLS0gPiAxKSB7XHJcbiAgICAgICAgcG9zMSA9IHBvc2l0aW9uc1twIC0gMV07XHJcbiAgICAgICAgcG9zMiA9IHBvc2l0aW9uc1twXTtcclxuICAgICAgICBtMSA9IHBvczFbMl07XHJcbiAgICAgICAgbTIgPSBwb3MyWzJdO1xyXG4gICAgICAgIGlkMSA9IG0xLmlkO1xyXG4gICAgICAgIGlkMiA9IG0yLmlkO1xyXG5cclxuICAgICAgICBpZiAoaWQxID09PSBpZDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocG9zMVsxXSA+IHBvczJbMF0gJiYgcG9zMVswXSA8IHBvczJbMV0pIHtcclxuXHJcbiAgICAgICAgICBpZiAoaWQxIDwgaWQyKSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQyO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMik7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWQgPSBpZDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0xKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcDsgaSsrKVxyXG4gICAgICAgIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3V0T3V0Rm9yKGlkKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlKHAtLSkge1xyXG4gICAgICBpZiAocG9zaXRpb25zW3BdWzJdLmlkID09PSBpZClcclxuICAgICAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuc3BsaWNlKHAsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0cG9uZShtYXJrKSB7XHJcbiAgICBsZXQgcXVldWUgPSB0aGlzLnF1ZXVlLFxyXG4gICAgICAgIGwgPSBxdWV1ZS5sZW5ndGgsXHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBpZiAocXVldWVbbF1bMF0gPT09IG1hcmspIHtcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWFscmVhZHlJbmNsdWRlZClcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFttYXJrXSk7XHJcbiAgfVxyXG4gIGZpbmRQb3NzaWJsZUV4dHJlbWEoKSB7XHJcbiAgICBsZXQgbm9kZXMgPSB0aGlzLmJvZHlUZXh0Tm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzID8gbm9kZXMubGVuZ3RoIDogMCxcclxuICAgICAgICBpbmRpY2VzID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHBoYXNlID0gdGhpcy5waGFzZSxcclxuICAgICAgICBjYWNoZSA9IHRoaXMuY2FjaGUgPSBbXSxcclxuICAgICAgICBzYXRpc2ZpZWQgPSBbXSxcclxuICAgICAgICBpID0gMCwgY2hhcnMgPSAwLFxyXG4gICAgICAgIG5leHRTdGFydEZvdW5kLCBlbmRpbmdzSW5UaGlzTm9kZSxcclxuICAgICAgICBub2RlLCBub2Rlc1RleHQsIG5vZGVzVGV4dExlbmd0aCxcclxuICAgICAgICBtYXJrLCBkaWZmLCBsLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgZSwgZiwgaWQsIHAsIHEsIHgsIG0sXHJcbiAgICAgICAgcG9zc2libGVGb2N1c09mZnNldCwgc3RhcnRGb3VuZEZvciwgcG9zdHBvbmVkLCBoYXNFbmRpbmdzSW5UaGlzTm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIG5vZGVzVGV4dCA9IHRoaXMuc3F1ZWV6ZShub2RlLmRhdGEpO1xyXG4gICAgICBub2Rlc1RleHRMZW5ndGggPSBub2Rlc1RleHQubGVuZ3RoO1xyXG4gICAgICBjaGFycyArPSBub2Rlc1RleHRMZW5ndGg7XHJcbiAgICAgIGwgPSBpbmRpY2VzLmxlbmd0aDtcclxuICAgICAgc3RhcnRGb3VuZEZvciA9IFtdO1xyXG4gICAgICBwb3N0cG9uZWQgPSBbXTtcclxuICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBudWxsO1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBpbmRpY2VzW2xdWzBdO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uID0gaW5kaWNlc1tsXVsxXTtcclxuICAgICAgICBtYXJrID0gaW5kaWNlc1tsXVsyXTtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgfHwgW107XHJcbiAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yID0gbWFyay50ZW1wLmVuZEZvdW5kRm9yIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIGNoYXJzID4gc3RhcnRQb3NpdGlvbiAmJlxyXG4gICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGggPCBtYXJrLnRlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoaGFzRW5kaW5nc0luVGhpc05vZGUgJiYgaGFzRW5kaW5nc0luVGhpc05vZGUuaWQgPCBtYXJrLmlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkpIHtcclxuICAgICAgICAgICAgICBpZiAocGhhc2UgPT09IDEgJiYgaWQgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLnB1c2goeyBub2RlOiBub2RlLCBwb3M6IGkgfSk7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IucHVzaChzdGFydFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICBzdGFydEZvdW5kRm9yLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICAhbWFyay50ZW1wLmVuZEZvdW5kRm9yLmluY2x1ZGVzKGVuZFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgKGNoYXJzIC0gZW5kUG9zaXRpb24pID49IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChNYXRoLm1pbi5hcHBseShudWxsLCBzdGFydEZvdW5kRm9yKSA8IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zc2libGVGb2N1c09mZnNldCA9IHRoaXMuZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIGVuZFBvc2l0aW9uIC0gKGNoYXJzIC0gbm9kZXNUZXh0TGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZUZvY3VzT2Zmc2V0cy5wdXNoKHBvc3NpYmxlRm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl0gPSB7XHJcbiAgICAgICAgICAgICAgbm9kZTogbm9kZSxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IHBvc3NpYmxlRm9jdXNPZmZzZXQsXHJcbiAgICAgICAgICAgICAgcG9zOiBpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICghc2F0aXNmaWVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIGNhY2hlLnB1c2gobWFyayk7XHJcbiAgICAgICAgICAgICAgc2F0aXNmaWVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG1hcms7XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwKSBmb3IgKHggPSAwOyB4IDwgcDsgeCsrKSB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbeF0pO1xyXG5cclxuICAgICAgaWYgKGNoYXJzID4gdGhpcy5tYXhQb3NpdGlvbikgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAocGhhc2UgIT09IDEgfHwgdGhpcy5vb20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG1hcmsgPSB0aGlzLm1hcmtzW2ldO1xyXG4gICAgICAgIGlmICghc2F0aXNmaWVkLmluY2x1ZGVzKG1hcmsuaWQpKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzInKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJ1bGVPdXRNdWx0aXBsZXMoKSB7XHJcbiAgICBsZXQgY2FjaGUgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBjYWNoZS5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgcG9zc2libGVTdGFydE5vZGVzLCBwLCBub2RlLCBwYXJlbnQsIGdyYW1wYSwgZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbmRncmFtcGEsIG1hdGNoZXMsIGZhaWxlZCwgcSxcclxuICAgICAgICBwb3NzaWJsZUVuZHMsIHN0YXJ0Rm91bmRGb3IsIGNvbmRzLCBzdGFydE9mZnNldCwgdGVtcCwgdGV4dExlbmd0aCwgc3RhcnQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gY2FjaGVbaV07XHJcbiAgICAgIG1hdGNoZXMgPSBbXTtcclxuICAgICAgZmFpbGVkID0gZmFsc2U7XHJcbiAgICAgIHRlbXAgPSBtYXJrLnRlbXA7XHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlcyA9IHRlbXAucG9zc2libGVTdGFydE5vZGVzO1xyXG4gICAgICBwb3NzaWJsZUVuZHMgPSB0ZW1wLnBvc3NpYmxlRW5kcztcclxuICAgICAgc3RhcnRGb3VuZEZvciA9IHRlbXAuc3RhcnRGb3VuZEZvclxyXG4gICAgICBwID0gcG9zc2libGVTdGFydE5vZGVzLmxlbmd0aDtcclxuICAgICAgY29uZHMgPSBtYXJrLmNvbmRzO1xyXG4gICAgICBzdGFydE9mZnNldCA9IGNvbmRzLm87XHJcbiAgICAgIHRleHRMZW5ndGggPSB0ZW1wLnRleHRMZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCA+IDEpIHtcclxuICAgICAgICB3aGlsZSAocC0tKSB7XHJcbiAgICAgICAgICBub2RlID0gcG9zc2libGVTdGFydE5vZGVzW3BdLm5vZGU7XHJcbiAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlIHx8IDA7XHJcblxyXG4gICAgICAgICAgaWYgKCFncmFtcGEgfHwgY29uZHMucDMgPT09IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCkpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkgcCA9IDA7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDEpIHAgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBxID0gbWF0Y2hlcy5wb3AoKTtcclxuICAgICAgICAgICAgICBwYXJlbnQgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcV0ubm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgIGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlIHx8IDA7XHJcbiAgICAgICAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcbiAgICAgICAgICAgICAgZ3JhbmRncmFuZGdyYW1wYSA9IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFuZGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAoIWdyYW5kZ3JhbmRncmFtcGEgfHwgY29uZHMucDQgPT09IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW5kZ3JhbXBhLCBncmFuZGdyYW1wYSkpICYmXHJcbiAgICAgICAgICAgICAgICAgIChwb3NzaWJsZUVuZHNbc3RhcnRGb3VuZEZvcltxXV0ub2Zmc2V0IC0gc3RhcnRPZmZzZXQpID09PSB0ZXh0TGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgcCA9IHE7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwKSBwID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBwID0gMDtcclxuXHJcbiAgICAgIHAgPSBwIHx8IDA7XHJcblxyXG4gICAgICBzdGFydCA9IG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXNbcF07XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGUgPSBzdGFydC5ub2RlO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb24gPSBzdGFydC5wb3M7XHJcblxyXG4gICAgICB0aGlzLnNldE1hdGNoaW5nRW5kKG1hcmssIHApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNldE1hdGNoaW5nRW5kKG1hcmssIHApIHtcclxuICAgIGxldCBzdGFydFBvc2l0aW9uID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3JbcF0sXHJcbiAgICAgICAgZW5kID0gbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXTtcclxuXHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZSA9IGVuZC5ub2RlO1xyXG4gICAgbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbiA9IGVuZC5wb3M7XHJcbiAgICBtYXJrLnRlbXAuZm9jdXNPZmZzZXQgPSBlbmQub2Zmc2V0O1xyXG4gIH1cclxuICBzYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSB7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbXBhID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwLFxyXG4gICAgICAgIHN0YXJ0T2Zmc2V0ID0gZGVzY3JpcHRpb24ubyxcclxuICAgICAgICByZWxldmFudE5vZGVUZXh0ID0gbm9kZS5kYXRhLnN1YnN0cmluZyhzdGFydE9mZnNldCkudHJpbSgpLFxyXG4gICAgICAgIGwgPSByZWxldmFudE5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGVtcC50cmltbWVkVGV4dCxcclxuICAgICAgICBtID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0TGVuZ3RoLFxyXG4gICAgICAgIHRleHRzTWF0Y2g7XHJcblxyXG4gICAgaWYgKG0gPD0gbCkge1xyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKG1hcmtUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KSkgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGV4dHNNYXRjaCAmJlxyXG4gICAgICAocGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjEgfHwgKGRlc2NyaXB0aW9uLm4xID09PSAnVE0nICYmIHBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKSAmJlxyXG4gICAgICAoIWdyYW1wYSB8fCBncmFtcGEubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4yKSAmJlxyXG4gICAgICB0aGlzLndoaWNoQ2hpbGQocGFyZW50Tm9kZSwgbm9kZSkgPT09IGRlc2NyaXB0aW9uLnAxXHJcbiAgICApO1xyXG4gIH1cclxuICBmaW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgbikge1xyXG4gICAgbGV0IG5vZGVUZXh0ID0gbm9kZS5kYXRhLFxyXG4gICAgICAgIGwgPSBub2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNxdWVlemUobm9kZVRleHRbaV0pKSBjb3VudGVyKys7XHJcblxyXG4gICAgICBpZiAoY291bnRlciA9PT0gbikgcmV0dXJuICgvXFxzJC8udGVzdChtYXJrLnRleHQpID8gaSArIDIgOiBpICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc3RvcmVSYW5nZXMoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIG1hcmtzID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIG1hcmtUZW1wLCBzdGFydCwgZW5kLCBmb2N1c09mZnNldDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcbiAgICAgIHN0YXJ0ID0gbWFya1RlbXAuc3RhcnROb2RlO1xyXG4gICAgICBlbmQgPSBtYXJrVGVtcC5lbmROb2RlO1xyXG4gICAgICBmb2N1c09mZnNldCA9IG1hcmtUZW1wLmZvY3VzT2Zmc2V0O1xyXG5cclxuICAgICAgaWYgKCFzdGFydCB8fCAhZW5kIHx8ICEodHlwZW9mIGZvY3VzT2Zmc2V0ID09PSAnbnVtYmVyJykpIHtcclxuICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8zJykgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIG1hcmsuY29uZHMubyk7XHJcbiAgICAgICAgICByYW5nZS5zZXRFbmQoZW5kLCBmb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgIC8vc2VsZWN0aW9uLnJlc3VtZShyYW5nZSk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmVkOnJhbmdlJywgbWFyayk7XHJcbiAgICAgICAgICBkZWxldGUgbWFyay5zeW5jZWQ7XHJcbiAgICAgICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24ucmVjb2xsZWN0Tm9kZXMobWFyayk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgbWFyay50ZW1wO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRCb2R5U2VsZWN0aW9uKGVsKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsKys7XHJcblxyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDEpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihlbCk7XHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblRyaWFsIDwgNCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Qm9keVNlbGVjdGlvbihlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSAnICc7XHJcbiAgICAgICAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSBbXTtcclxuICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy5zcXVlZXplKHRoaXMuc2VsZWN0aW9uLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYm9keVRleHROb2RlcyA9IHRoaXMuc2VsZWN0aW9uLm5vZGVzID8gdGhpcy5zZWxlY3Rpb24ubm9kZXMuc2xpY2UoKSA6IFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzcXVlZXplKHRleHQpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSA/IHRleHQucmVwbGFjZSgvXFx0fFxcc3xcXG58XFxyL2csICcnKSA6IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgd2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBjb250ZXh0KSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBjaGlsZHJlbiA9IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHQgICAgYyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdCAgICBwb3MgPSAwLCBpID0gMCwgY3VycmVudENoaWxkO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBjdXJyZW50Q2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkKSByZXR1cm4gcG9zO1xyXG5cclxuXHRcdFx0aWYgKGNvbnRleHQpIHtcclxuXHRcdFx0XHRpZiAoY3VycmVudENoaWxkLm5vZGVOYW1lID09PSBjb250ZXh0KSBwb3MrKztcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEoY3VycmVudENoaWxkLm5vZGVUeXBlID09PSAzICYmICFjdXJyZW50Q2hpbGQuZGF0YSkpIHBvcysrO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBJbW11dFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgdGhpcy5yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICBjb25zdCBtYXJrcyA9IHRoaXMubWFya3MgPSBbLi4uZW50cnkubWFya3Muc29ydCgobTEsIG0yKSA9PiBtMS5pZCAtIG0yLmlkKV07XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzSW5DaHVua3MobWFya3MsIHRoaXMucmVzdG9yZVJhbmdlLCB0aGlzLnJlcG9ydCk7XHJcbiAgfVxyXG5cclxuICByZXN0b3JlUmFuZ2UobWFyaykge1xyXG4gICAgY29uc3QgY29uZHMgPSBtYXJrLmNvbmRzO1xyXG4gICAgY29uc3Qgc3RhcnQgPSBjb25kcy5zO1xyXG4gICAgY29uc3QgZW5kID0gY29uZHMuZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMuZ2V0Tm9kZShzdGFydC5wKSwgc3RhcnQubyk7XHJcbiAgICAgIHJhbmdlLnNldEVuZCh0aGlzLmdldE5vZGUoZW5kLnApLCBlbmQubyk7XHJcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICBkZWxldGUgbWFyay5zeW5jZWQ7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldE5vZGUocG9zaXRpb24pIHtcclxuICAgIGNvbnN0IHRleHROb2RlUG9zaXRpb24gPSBwb3NpdGlvblswXTtcclxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgICBsID0gcG9zaXRpb24ubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlKGwtLSA+IDEpIHtcclxuICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bcG9zaXRpb25bbF1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGUuY2hpbGROb2Rlc1t0ZXh0Tm9kZVBvc2l0aW9uXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRyZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdyZXN0b3JlOm1hcmtzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdsb3N0Om1hcmtzJzogJ29uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3Jlc3VtZWQ6bWFya2Vycyc6ICdyZXRyeSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiBudWxsLFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICByZXN0b3JlZDogMCxcclxuICAgIGZhaWxlZDogMCxcclxuICAgIGZhaWx1cmVSZXBvcnQ6IHt9LFxyXG5cclxuICAgIHJlc3RvcmUoZW50cmllcykge1xyXG4gICAgICBpZiAoIWVudHJpZXMpIHJldHVybjtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJpZXMpKSBlbnRyaWVzID0gW2VudHJpZXNdO1xyXG5cclxuICAgICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcclxuICAgICAgdGhpcy5jb3VudCA9IGVudHJpZXMubGVuZ3RoO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdzdGFydGVkOnJlc3RvcmF0aW9ucycpO1xyXG4gICAgICBfU1RPUkUucmVzdG9yaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBfU1RPUkUucmVzdG9yaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFpbGVkKSB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JhdGlvbicsIHRoaXMuZ2V0UmVwb3J0KCkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJlcG9ydCgpIHtcclxuICAgICAgY29uc3QgcmVwb3J0ID0gdGhpcy5mYWlsdXJlUmVwb3J0O1xyXG4gICAgICBsZXQgbXNnID0gJyc7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gcmVwb3J0KSB7XHJcbiAgICAgICAgbXNnICs9IGAke3JlcG9ydFtpXS5yZWFzb259IDogJHtyZXBvcnRbaV0udGV4dH1cXG5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtc2c7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9TRUxFQ1RJT04ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihub2RlLCBvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCkgdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG5cclxuICAgIGlmIChub2RlIHx8ICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcclxuICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmRlZmluZWQgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZShub2RlKVxyXG4gICAgICAgICAgICAucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdE5vZGVzKHRydWUpXHJcbiAgICAgICAgICAgIC5yZXRyaWV2ZVRleHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmNvbGxlY3ROb2RlcygpXHJcbiAgICAgICAgICAgIC8vLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5hZGp1c3QoKVxyXG4gICAgICAgICAgICAvLy51cGRhdGUoKVxyXG4gICAgICAgICAgICAvLy5yZXRyaWV2ZVRleHQoKTtcclxuICAgICAgfVxyXG4gICAgICB0cnkgeyBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7IH0gY2F0Y2goZSkge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZShub2RlKSB7XHJcbiAgICB0aGlzLnNlbGYuc2VsZWN0QWxsQ2hpbGRyZW4obm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHVwZGF0ZShzZWxlY3Rpb24pIHtcclxuICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuc2VsZiA9IHNlbGVjdGlvbjtcclxuICAgIGVsc2Ugc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIGxldCBwcm9wcyA9IFsnZm9jdXNOb2RlJywgJ2FuY2hvck5vZGUnLCAnZm9jdXNPZmZzZXQnLCAnYW5jaG9yT2Zmc2V0J10sXHJcbiAgICAgICAgaSA9IHByb3BzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB0aGlzW3Byb3BzW2ldXSA9IHNlbGVjdGlvbltwcm9wc1tpXV07XHJcblxyXG4gICAgdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgdGhpcy5zaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGFkanVzdCgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzID0gdGhpcy5mb2N1c05vZGU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykpIHRoaXMucmV2ZXJzZShhbmNob3IsIGZvY3VzKTtcclxuICAgIGVsc2UgdGhpcy5ub3JtYWxpemUoYW5jaG9yLCBmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIG5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZSxcclxuXHJcbiAgICAgICAgZmlyc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbMF0sXHJcbiAgICAgICAgbGFzdFRleHROb2RlID0gdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGlmIChmaXJzdFRleHROb2RlICE9PSBhbmNob3IpXHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KGZpcnN0VGV4dE5vZGUsIGZpcnN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBmaXJzdFRleHROb2RlLmRhdGEudHJpbUxlZnQoKS5sZW5ndGgpO1xyXG5cclxuICAgIGlmIChsYXN0VGV4dE5vZGUgIT09IGZvY3VzKVxyXG4gICAgICByYW5nZS5zZXRFbmQobGFzdFRleHROb2RlLCBsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSAobGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gbGFzdFRleHROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoKSk7XHJcbiAgfVxyXG4gIGNvbGxlY3ROb2Rlcyh3aG9sZURvY3VtZW50KSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHdob2xlRG9jdW1lbnQgPyB3aW5kb3cuZG9jdW1lbnQuYm9keSA6IHRoaXMuZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKTtcclxuICAgIGNvbnN0IGZpbHRlciA9IHdob2xlRG9jdW1lbnQgP1xyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxmLmlzU2VsZWN0YWJsZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKSA6XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGVjdGlvbi5jb250YWluc05vZGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSk7XHJcblxyXG4gICAgY29uc3QgaXRlcmF0b3IgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKGNvbnRhaW5lciwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIHtcclxuICAgICAgICAgIGFjY2VwdE5vZGUobm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKG5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBsZXQgbm9kZXMgPSBbXSxcclxuICAgICAgICBwYXJlbnROb2RlcyA9IFtdLFxyXG5cclxuICAgICAgICB0ZXh0Tm9kZSwgcGFyZW50LCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIHdoaWxlKHRleHROb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkge1xyXG4gICAgICBub2Rlcy5wdXNoKHRleHROb2RlKTtcclxuICAgIH1cclxuICAgIG5vZGVzID0gdGhpcy50cmltU2VsZWN0aW9uKG5vZGVzKTtcclxuICAgIC8vdGhpcy5ub2RlcyA9IHRoaXMub3B0aW9ucy5wcm9ncmFtbWF0aWNhbGx5ID8gdGhpcy5yZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIDogbm9kZXM7XHJcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5yZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlcyA9IHRoaXMuY29sbGVjdFBhcmVudE5vZGVzKHRoaXMubm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZWNvbGxlY3ROb2RlcyhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrV3JhcHBlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXj1cIicgKyBtYXJrLmlkICsgJ19cIl0nKSk7XHJcbiAgICBjb25zdCBtID0gbWFya1dyYXBwZXJzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5ld1NlZ21lbnQgPSBtYXJrV3JhcHBlcnMubWFwKGVsID0+IGVsLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGNvbnN0IHByZXYgPSBtYXJrV3JhcHBlcnNbMF0ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgY29uc3QgbmV4dCA9IG1hcmtXcmFwcGVyc1ttLTFdLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ID0gbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgZW5kID0gbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbjtcclxuXHJcbiAgICBpZiAocHJldiAmJiBwcmV2Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQudW5zaGlmdChwcmV2KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC5wdXNoKG5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZXMuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIC4uLm5ld1NlZ21lbnQpO1xyXG4gIH1cclxuICB0cmltU2VsZWN0aW9uKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBsZXQgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBmaXJzdE5vZGUgPSBub2Rlc1swXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBmaXJzdE5vZGUgJiYgZmlyc3ROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoIDw9IHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICBub2Rlcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBsYXN0Tm9kZSAmJiB0aGlzLmlzQmxhbmsobGFzdE5vZGUuZGF0YS5zdWJzdHIoMCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSkpIHtcclxuICAgICAgICBub2Rlcy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICByZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbCA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IHJnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UocmcpO1xyXG5cclxuICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICByZy5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgICByZXR1cm4gISFzZWwudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZSh0aGlzLnJhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIGNvbGxlY3RQYXJlbnROb2Rlcyhub2Rlcykge1xyXG4gICAgbGV0IGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgcGFyZW50cyA9IFtdLCBpID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcGFyZW50cy5wdXNoKG5vZGVzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH1cclxuICByZXRyaWV2ZVRleHQoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcyxcclxuICAgICAgICBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG5vZGVUZXh0cyA9IFtdLFxyXG4gICAgICAgIHRleHQ7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIG5vZGVUZXh0cy5wdXNoKG5vZGVzW2ldLmRhdGEpO1xyXG5cclxuICAgIGwgLT0gMTtcclxuXHJcbiAgICBpZiAobm9kZVRleHRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAoIXRoaXMuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQsIHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0LCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0ZXh0ID0gdGhpcy50ZXh0ID0gbm9kZVRleHRzLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBub2RlMSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIG5vZGUyID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICB3aGlsZSAobm9kZTEgPSBub2RlMS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgaWYgKChub2RlMS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlMikgJiAweDEwKSA9PT0gMHgxMClcclxuICAgICAgICAgIHJldHVybiBub2RlMTtcclxuICAgIH1cclxuICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuYm9keTtcclxuICB9XHJcbiAgcmV2ZXJzZShhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoZm9jdXMsIHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoYW5jaG9yLCBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlKHNlbGVjdGlvbikuYWRqdXN0KHNlbGVjdGlvbi5hbmNob3JOb2RlLCBzZWxlY3Rpb24uZm9jdXNOb2RlKTtcclxuICB9XHJcbiAgcmVkdWNlVG9PbmVSYW5nZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2VDb3VudCA9IHNlbGVjdGlvbi5yYW5nZUNvdW50LFxyXG4gICAgICAgIHJhbmdlMCA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbGFzdFJhbmdlO1xyXG5cclxuICAgIGlmIChyYW5nZUNvdW50IDwgMikgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgbGFzdFJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQocmFuZ2VDb3VudCAtIDEpO1xyXG5cclxuICAgIHJhbmdlMC5zZXRTdGFydChyYW5nZTAuc3RhcnRDb250YWluZXIsIHJhbmdlMC5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZTAuc2V0RW5kKGxhc3RSYW5nZS5lbmRDb250YWluZXIsIGxhc3RSYW5nZS5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZTApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBoYXNOb3JtYWxQYXJlbnQobm9kZSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgdGFnID0gcGFyZW50LnRhZ05hbWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0YWcgIT09ICdTQ1JJUFQnICYmIHRhZyAhPT0gJ1NUWUxFJyAmJiB0YWcgIT09ICdMSU5LJyAmJiB0YWcgIT09ICdNRVRBJyAmJlxyXG4gICAgICB0YWcgIT09ICdCQVNFJyAmJiB0YWcgIT09ICdUSVRMRScgJiYgdGFnICE9PSAnTk9TQ1JJUFQnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0lNRycgJiYgdGFnICE9PSAnSUZSQU1FJyAmJiB0YWcgIT09ICdFTUJFRCcgJiYgdGFnICE9PSAnUEFSQU0nICYmXHJcbiAgICAgIHRhZyAhPT0gJ1ZJREVPJyAmJiB0YWcgIT09ICdBVURJTycgJiYgdGFnICE9PSAnU09VUkNFJyAmJiB0YWcgIT09ICdUUkFDSycgJiZcclxuICAgICAgdGFnICE9PSAnQ0FOVkFTJyAmJiB0YWcgIT09ICdNQVAnICYmIHRhZyAhPT0gJ0FSRUEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ01BVEgnICYmIHRhZyAhPT0gJ09CSkVDVCcgJiZcclxuICAgICAgIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ3N2ZycpIC8vJiZcclxuICAgICAgLy8hdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnbWF0aCcpXHJcbiAgICApO1xyXG4gIH1cclxuICBpc0NoaWxkT2Yobm9kZSwgbm9kZVR5cGUpIHtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBub2RlVHlwZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlzQmxhbmsobm9kZSkge1xyXG4gICAgbGV0IHRleHQ7XHJcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZS5kYXRhID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGUuZGF0YTtcclxuICAgICAgZWxzZSB0ZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQuc2VhcmNoKC9bXlxcc1xcblxcclxcdF0vZykgPT09IC0xO1xyXG4gIH1cclxuICBpc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHBvc2l0aW9uID0gYW5jaG9yLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwb3NpdGlvbiA9PT0gMiB8fFxyXG4gICAgICBwb3NpdGlvbiA9PT0gMTAgfHxcclxuICAgICAgKCFwb3NpdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0ID4gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSk7XHJcbiAgfVxyXG4gIGlzU2ltcGxlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3JOb2RlID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXNOb2RlID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBhbmNob3JOb2RlID09PSBmb2N1c05vZGUgJiZcclxuICAgICAgYW5jaG9yTm9kZS5ub2RlVHlwZSA9PT0gMyAmJlxyXG4gICAgICAoIWFuY2hvck5vZGUubmV4dFNpYmxpbmcgfHwgKGFuY2hvck5vZGUubmV4dFNpYmxpbmcuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXNOb2RlKSAhPT0gNCkpKTtcclxuICB9XHJcbiAgaXNTZWxlY3RhYmxlKG5vZGUpIHtcclxuICAgIHRoaXMucmFuZ2Uuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgIHJldHVybiAhIXRoaXMuc2VsZi50b1N0cmluZygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlU3RhdGUnLFxyXG4gICAgICAnYWRkZWQ6bm90ZSc6ICdvbk5vdGVBZGRlZCcsXHJcbiAgICAgICdhZGRlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrQWRkZWQnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnb25MYXN0Tm90ZVJlbW92ZWQnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrUmVtb3ZlZCdcclxuICAgIH1cclxuXHR9LFxyXG4gIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gIGVsOiBudWxsLFxyXG5cclxuICBhdHRhY2hlZDogZmFsc2UsXHJcblxyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG5vdGVzOiB7XHJcbiAgICAgIGVsOiBudWxsLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2hvd246IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYm9va21hcms6IHtcclxuICAgICAgZWw6IG51bGwsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBzaG93bjogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBib29rbWFyazogZmFsc2UsXHJcbiAgbm90ZXM6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xyXG4gIH0sXHJcbiAgdXBkYXRlU3RhdGUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdibWljb24nKS50aGVuKGJtaWNvbiA9PiB7XHJcbiAgICAgIHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ID0gYm1pY29uO1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ID0gbm90ZWljb24pO1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgfSxcclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBzaG91bGRBdHRhY2ggPVxyXG4gICAgICAodGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgJiYgdGhpcy5ib29rbWFyaykgfHxcclxuICAgICAgKHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ICYmIHRoaXMubm90ZXMpO1xyXG5cclxuICAgIGlmIChzaG91bGRBdHRhY2gpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXR0YWNoZWQgJiYgIXNob3VsZEF0dGFjaCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMsIGJ0bjtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtdWknKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgIGJ0biA9IGJ1dHRvbnNbYl07XHJcbiAgICAgIGlmIChidG4uc2hvdyAmJiAhYnRuLnNob3duICYmIHRoaXNbYl0pIHRoaXMuYWRkQnV0dG9uKGIpO1xyXG4gICAgICBlbHNlIGlmIChidG4uc2hvd24gJiYgKCF0aGlzW2JdIHx8ICFidG4uc2hvdykpIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFidXR0b25zLm5vdGVzLnNob3duICYmICFidXR0b25zLmJvb2ttYXJrLnNob3duKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRhY2hlZCA9IHRydWU7XHJcbiAgfSxcclxuICByZW1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucztcclxuXHJcbiAgICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICAgIGlmIChidXR0b25zW2JdLnNob3duKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtdWkpO1xyXG4gICAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVCdXR0b25zKCkge1xyXG4gICAgY29uc3Qgbm90ZXNCdXR0b24gPSB0aGlzLmJ1dHRvbnMubm90ZXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3Rlc3RvZ2dsZScpO1xyXG4gICAgY29uc3QgYm9va21hcmtCdXR0b24gPSB0aGlzLmJ1dHRvbnMuYm9va21hcmsuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ibScpO1xyXG4gICAgbm90ZXNCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGVzJyk7XHJcbiAgICBib29rbWFya0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICB9LFxyXG4gIGFkZEJ1dHRvbih0eXBlKSB7XHJcbiAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IGJ0bi5oYW5kbGVyID0gdHlwZSA9PT0gJ25vdGVzJyA/XHJcbiAgICAgIHRoaXMudG9nZ2xlTm90ZXMuYmluZCh0aGlzKSA6XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRtdWkuYXBwZW5kQ2hpbGQoYnRuLmVsKTtcclxuICAgIGJ0bi5zaG93biA9IHRydWU7XHJcblxyXG4gICAgYnRuLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQnV0dG9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG5cclxuICAgIHRtdWkucmVtb3ZlQ2hpbGQoYnRuLmVsKTtcclxuICAgIGJ0bi5zaG93biA9IGZhbHNlO1xyXG5cclxuICAgIGJ0bi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bi5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3RtdWlwb3MnKVxyXG4gICAgICAudGhlbihwb3MgPT4gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcG9zLnNwbGl0KCctJykubWFwKHAgPT4gcCArICc6MXB4OycpLmpvaW4oJyAnKSkpO1xyXG4gIH0sXHJcbiAgb25Ob3RlQWRkZWQoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkxhc3ROb3RlUmVtb3ZlZCgpIHtcclxuICAgIHRoaXMubm90ZXMgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkJvb2ttYXJrQWRkZWQoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkJvb2ttYXJrUmVtb3ZlZCgpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcygpIHtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVzJyk7XHJcbiAgfSxcclxuICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzY3JvbGwtdG8tYm9va21hcmsnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdpbmplY3Rpb24nLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnY29weTptYXJrcycsXHJcbiAgICAgICdzYXZlOmVudHJ5PycsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JyxcclxuICAgICAgJ2xvb2t1cDp3b3JkJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FjdGl2YXRlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnLFxyXG5cclxuICAgICAgLy8gQFJFU1RPUkVSXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbicsXHJcbiAgXHRcdCdmYWlsZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJyxcclxuICAgICAgJ2NhbmNlbGVkOnNhdmUtYWZ0ZXItY2FuY2VsZWQtcmVzdG9yYXRpb24nXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9ET01NT0RVTEUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBvYmouX2JvdW5kID0ge307XHJcbiAgICBvYmouX2V4dHJhQm91bmQgPSBbXTtcclxuXHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnNNYW51YWxseSB8fCB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgIXRoaXMuYXV0b1BhdXNlIHx8IHRoaXMuc2V0QXV0b1BhdXNlKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2V0QXV0b1BhdXNlKCkge1xyXG4gICAgdGhpcy5vbigndG9nZ2xlZDphZGRvbicsIG9uID0+IHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkLCAnJyk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9