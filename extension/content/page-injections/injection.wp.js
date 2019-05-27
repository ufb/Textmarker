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

    if (!this.isNew || document.querySelector('[data-tm-id]')) return; //show notification

    this.get('settings').then(function (settings) {
      var historySettings = settings ? settings.history : null;

      if (historySettings) {
        _this.locked = historySettings.naming === 'mark';
        _this.hashSensitive = historySettings.ignoreHash === false;
      }
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
      'saved:entry': 'updateEntryStorage',
      'resumed-on-hashchange': 'setPageParams',
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
    this.setPageParams();
  },
  setPageParams: function setPageParams() {
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
    (0, _restorer2["default"])();
    this.updateEntryStorage(info.entries);
    if (info.recentlyOpenedEntry) this.updateNameStorage(info.entries, info.recentlyOpenedEntry);
    this.emit('restore:marks', info.entries);
  },
  updateEntryStorage: function updateEntryStorage(entries) {
    entries = Array.isArray(entries) ? entries : [entries];

    _store2["default"].addEntries(entries);

    this.emit('set:entries', entries);
  },
  updateNameStorage: function updateNameStorage(entries, recentlyOpenedEntry) {
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
      style.top = parseInt(style.top) - popupHeight + 'px';
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
    this.selection = new _selection2["default"](null, {
      programmatically: true
    });
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
    this.emit('visually-ordered:marks', this.visuallyOrderedMarkIDs);
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

    entry.name = locked ? entry.marks[0].text.trim().substring(0, _globalSettings2["default"].MAX_ENTRY_NAME_CHARS - 1) : isNew ? name : entry.name;
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
      'opened:sidebar': 'sendNotesState'
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
    this.emit('added:note');
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
    DOM: {
      keydown: {
        '*': 'delegate'
      },
      selectionchange: {
        '*': 'onSelectionChange'
      }
    }
  },
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
    this.emit('changed:selection', !window.getSelection().isCollapsed);
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
        data = browser.i18n.getMessage(l10nId);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeVNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJyZW5hbWVFbnRyeSIsImVudHJ5Iiwib2xkTmFtZSIsInNldFN5bmNGb3JFbnRyeSIsInN5bmNlZCIsInJlbW92ZUVudHJ5IiwiZGVsZXRlZEVudHJ5IiwiaGFzT3duUHJvcGVydHkiLCJhZGRFbnRyaWVzIiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInNldFBhZ2VQYXJhbXMiLCJ3aW5kb3ciLCJwYXJlbnQiLCJVUkwiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJlbWl0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJib29rbWFyayIsImdldEVsZW1lbnRCeUlkIiwib25FbnRyaWVzRm91bmQiLCJ1cGRhdGVFbnRyeVN0b3JhZ2UiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwidXBkYXRlTmFtZVN0b3JhZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJmaXJzdEVudHJ5IiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvU3RyaW5nIiwiX0JPT0tNQVJLIiwibWFyayIsImFuY2hvciIsIndyYXBwZXJzIiwidyIsImtleURhdGEiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYWN0aXZhdGUiLCJvbiIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGlnaGxpZ2h0IiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0Q29udGVudCIsInNpbGVudCIsImltbXV0YWJsZSIsInNhdmUiLCJyZXF1ZXN0IiwiZ3JhbnRlZCIsInN1YiIsImkxOG4iLCJnZXRNZXNzYWdlIiwicHJvbXB0IiwicmV0cmlldmVFbnRyeSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJjb3B5IiwiZmluZE1hcmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0cmltIiwic3RvcmUiLCJvcmRlciIsIm9yZGVyTWFya3NWaXN1YWxseSIsInJlY3JlYXRlIiwiX1NFTEVDVElPTiIsInByb2dyYW1tYXRpY2FsbHkiLCJvbkZpbmlzaGVkUmVzdG9yYXRpb24iLCJzdWJzdHJpbmciLCJfR0xPQkFMX1NFVFRJTkdTIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJnb3RvTWFyayIsInNvcnRCeUlkIiwic2Nyb2xsVG9Cb29rbWFyayIsImFkZE5vdGUiLCJzYXZlTm90ZSIsImFyZWFfaGlzdG9yeSIsIm1hcmtFbGVtZW50cyIsInBvcyIsImluZGljYXRlTWFyayIsImdvdG9OZXh0TWFyayIsImRpciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0bSIsInRtcyIsInNldFRpbWVvdXQiLCJzZXQiLCJyZW1vdmVCb29rbWFyayIsIm1hcmsxIiwibWFyazIiLCJtMSIsIm0yIiwiYmIxIiwiYmIyIiwidG9wMSIsInRvcDIiLCJtYXAiLCJ3cmFwcGVyczEiLCJ3MSIsImlkMSIsIndyYXBwZXJzMiIsImlkMiIsIncyIiwib25NYXJrZXJLZXkiLCJvbkhvdGtleSIsImNvbGxlY3RNYXJrcyIsImxhc3QiLCJEYXRlIiwiZ2V0VGltZSIsImJvb2ttYXJrZWQiLCJ0aXRsZSIsImNvdW50IiwiZmlyc3QiLCJrRCIsIm9uSGFzaENoYW5nZSIsImNvbG9yIiwiQk9EWSIsIkRPTSIsImNsaWNrIiwia2V5dXAiLCJtb3VzZWRvd24iLCJ0b3VjaHN0YXJ0IiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJtYXJrQ2xpY2tIYW5kbGVyIiwidmlzaWJsZSIsInJlY2VudGx5VXBkYXRlZCIsInNldHRpbmdzTW9kZSIsInQiLCJzaXplIiwiaCIsImRyYWdEWCIsImRyYWdEWSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJhZGp1c3ROb3RlRGF0YU9iamVjdCIsImNyZWF0ZU5vdGVFbGVtZW50IiwiYWRkTGlzdGVuZXJzIiwiYWRkTWFya0xpc3RlbmVycyIsIm5vdGVEYXRhIiwiaGVhZGVyIiwiYWN0aW9ucyIsImRlbCIsImdlYXIiLCJwYWxldHRlIiwidGV4dEVsZW1lbnQiLCJkZWxUZXh0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluVGV4dCIsImdlYXJUZXh0IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJhdHRlbXB0VXBkYXRlIiwiX2RlbGV0ZSIsImhpZGUiLCJyZW1vdmVNYXJrTGlzdGVuZXJzIiwiZm9yY2UiLCJpbm5lcldpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImdldFBvc2l0aW9uIiwib2Zmc2V0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25uZWN0TXV0YXRpb25PYnNlcnZlciIsImJyaW5nVXBGcm9udCIsInpJbmRleCIsImRpc2Nvbm5lY3QiLCJ0b2dnbGUiLCJ0b2dnbGVQYWxldHRlIiwiY2hhbmdlQ29sb3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZXh0YXJlYSIsImNvbmZpZyIsImF0dHJpYnV0ZUZpbHRlciIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsInNhdmVTaXplIiwib2JzZXJ2ZSIsInJlY3QiLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm9uRHJhZ1N0YXJ0IiwicGFnZVgiLCJwYWdlWSIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsIm11dGF0aW9uc0xpc3QiLCJ3aWR0aCIsIm5vdGVzIiwiZHJhZ0hhbmRsZXIiLCJkcmFnU3RvcEhhbmRsZXIiLCJ1cGRhdGVUcmFuc3AiLCJfTk9URSIsInJlc3RvcmUiLCJhZGRBbmRTaG93IiwicmVtb3ZlTm90ZVN0b3JhZ2UiLCJpc0VtcHR5IiwicmVtb3ZlTm90ZSIsInRvZ2dsZUFsbCIsIm1ldGgiLCJjb25kaXRpb24iLCJib2R5Q2xhc3NlcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsInN0YXJ0RHJhZ2dpbmdOb3RlIiwiZW1pdERyYWdFdmVudCIsInN0b3BEcmFnZ2luZ05vdGUiLCJkb2MiLCJzZW5kTm90ZXNTdGF0ZSIsImF1dG9QYXVzZSIsImtleWRvd24iLCJzZWxlY3Rpb25jaGFuZ2UiLCJzaGlmdFNlbnNpdGl2ZUtleXMiLCJrZXlDb2RlTWFwIiwiaXNFZGl0YWJsZSIsInRhZ05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJkZWxlZ2F0ZSIsInRvTG93ZXJDYXNlIiwia2V5Q29kZSIsIm1vZEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJhcnJvd0tleXMiLCJsb2NrZWRBY3Rpb25zIiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJvcmlnS2V5IiwiaXNNYXJrZXJLZXkiLCJpc0N1c3RvbU1hcmtlcktleSIsInNldHRpbmciLCJzaG9ydGN1dCIsInMxIiwiczIiLCJyZXN0b3JlZCIsImZhaWxlZCIsImZhaWx1cmVSZXBvcnQiLCJJbW11dFJlc3RvcmVyIiwiUmVzdG9yZXIiLCJyZXRyeSIsIm9uRmFpbHVyZSIsInJlcG9ydCIsImdldFJlcG9ydCIsIm1zZyIsInJlYXNvbiIsIlJlc3RvcmVyQmFzZSIsImFyZWEiLCJwcm9jIiwiY2IiLCJyZWMiLCJleHBpcmUiLCJsbCIsInRlbXAiLCJxdWV1ZSIsImNhY2hlIiwicGhhc2UiLCJzZWxlY3Rpb25UcmlhbCIsImNodW5rRHVyYXRpb24iLCJfdGltZXIiLCJvb20iLCJpbml0Iiwibm93IiwicG9zdHBvbmVkIiwiY29udmVydERlc2NyaXB0aW9uIiwiY3JlYXRlVGVtcE9iamVjdCIsImNvbnZlcnRlZENvbmRzIiwiZmlyc3ROb2RlTmFtZSIsImZpcnN0UGFyZW50Tm9kZU5hbWUiLCJmaXJzdFRleHROb2RlUG9zaXRpb24iLCJmaXJzdE5vZGVQb3NpdGlvbiIsImZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uIiwiZmlyc3RHcmFtcGFOb2RlUG9zaXRpb24iLCJ0cmltbWVkVGV4dCIsInNxdWVlemVkVGV4dCIsInNxdWVlemUiLCJ0ZXh0TGVuZ3RoIiwidHJpbW1lZFRleHRMZW5ndGgiLCJzcXVlZXplZFRleHRMZW5ndGgiLCJwb3NzaWJsZVBvc2l0aW9ucyIsInBvc3NpYmxlRW5kUG9zaXRpb25zIiwicG9zc2libGVTdGFydE5vZGVzIiwicG9zc2libGVFbmRzIiwicG9zc2libGVGb2N1c09mZnNldHMiLCJzb3J0UXVldWVCeUlkIiwic2V0Qm9keVNlbGVjdGlvbiIsImdldFRleHRQb3NpdGlvbnMiLCJwb3N0cG9uZU92ZXJsYXBwaW5ncyIsImZpbmRQb3NzaWJsZUV4dHJlbWEiLCJydWxlT3V0TXVsdGlwbGVzIiwicmVzdG9yZVJhbmdlcyIsInRpbWVyIiwicmVzIiwidHJpbW1lZFNlbGVjdGlvblRleHQiLCJhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwiZW5kUG9zaXRpb25zIiwibWFya1RlbXAiLCJzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyIsIm1heFBvc2l0aW9uIiwicG9zaXRpb25zIiwicG9zMSIsInBvczIiLCJwb3N0cG9uZSIsImN1dE91dEZvciIsImFscmVhZHlJbmNsdWRlZCIsImJvZHlUZXh0Tm9kZXMiLCJzYXRpc2ZpZWQiLCJjaGFycyIsIm5leHRTdGFydEZvdW5kIiwiZW5kaW5nc0luVGhpc05vZGUiLCJub2Rlc1RleHQiLCJub2Rlc1RleHRMZW5ndGgiLCJkaWZmIiwiZiIsInEiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0Iiwic3RhcnRGb3VuZEZvciIsImhhc0VuZGluZ3NJblRoaXNOb2RlIiwiZW5kRm91bmRGb3IiLCJzYXRpc2ZpZXNEZXNjcmlwdGlvbiIsImZpbmRGb2N1c09mZnNldCIsImdyYW5kZ3JhbmRncmFtcGEiLCJtYXRjaGVzIiwic3RhcnROb2RlIiwic3RhcnROb2RlUG9zaXRpb24iLCJzZXRNYXRjaGluZ0VuZCIsImVuZE5vZGUiLCJlbmROb2RlUG9zaXRpb24iLCJmb2N1c09mZnNldCIsImRlc2NyaXB0aW9uIiwicmVsZXZhbnROb2RlVGV4dCIsIm1hcmtUZXh0IiwidGV4dHNNYXRjaCIsIm5vZGVUZXh0IiwiY291bnRlciIsInRlc3QiLCJjcmVhdGVSYW5nZSIsInJlY29sbGVjdE5vZGVzIiwic2xpY2UiLCJjb250ZXh0IiwiY3VycmVudENoaWxkIiwicHJvY2Vzc0luQ2h1bmtzIiwicmVzdG9yZVJhbmdlIiwiZ2V0Tm9kZSIsInRleHROb2RlUG9zaXRpb24iLCJyYW5nZUNvdW50IiwiZGVmaW5lZCIsInJlZHVjZVRvT25lUmFuZ2UiLCJyZXRyaWV2ZVRleHQiLCJhZGp1c3QiLCJzZWxlY3RBbGxDaGlsZHJlbiIsInByb3BzIiwiaXNTaW1wbGUiLCJmb2N1cyIsImlzQmFja3dhcmRzIiwicmV2ZXJzZSIsImZpcnN0VGV4dE5vZGUiLCJsYXN0VGV4dE5vZGUiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsIndob2xlRG9jdW1lbnQiLCJnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lciIsImZpbHRlciIsImlzU2VsZWN0YWJsZSIsImlzQmxhbmsiLCJoYXNOb3JtYWxQYXJlbnQiLCJjb250YWluc05vZGUiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJ0cmltU2VsZWN0aW9uIiwicmVkdWNlVG9TZWxlY3RhYmxlIiwiY29sbGVjdFBhcmVudE5vZGVzIiwibWFya1dyYXBwZXJzIiwibmV3U2VnbWVudCIsInByZXYiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJ1bnNoaWZ0IiwiYW5jaG9yT2Zmc2V0Iiwic3Vic3RyIiwic2VsIiwicmciLCJzZWxlY3ROb2RlIiwicGFyZW50cyIsIm5vZGVUZXh0cyIsImpvaW4iLCJub2RlMSIsIm5vZGUyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJyYW5nZTAiLCJsYXN0UmFuZ2UiLCJ0YWciLCJ0b1VwcGVyQ2FzZSIsImlzQ2hpbGRPZiIsInNlYXJjaCIsImF0dGFjaGVkIiwiYnV0dG9ucyIsInNob3duIiwiY3JlYXRlQnV0dG9ucyIsInVwZGF0ZVN0YXRlIiwic2hvdWxkQXR0YWNoIiwicmVuZGVyIiwiYnRuIiwiYiIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInVwZGF0ZVBvc2l0aW9uIiwidG11aSIsIm5vdGVzQnV0dG9uIiwiYm9va21hcmtCdXR0b24iLCJ0eXBlIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJPTkVPRkYiLCJ2ZXJzaW9uIiwicnVudGltZSIsImdldE1hbmlmZXN0IiwieiIsInkiLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiZG93bmxvYWQiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJhdXRvY3MiLCJvdmVyd3JpdGUiLCJmYWlsdXJlTm90ZSIsInN1Y2Nlc3NOb3RlIiwicGJtTm90ZSIsImNoYW5nZWROb3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsImN1c3RvbVNlYXJjaCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsImxpbmtzIiwidGhlbWVzIiwidGhlbWUiLCJwYWdlbm90ZXMiLCJzeW5jIiwiTUFYX0xPR19FTlRSSUVTIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInZhbCIsInByb3AiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJhcmdzIiwidG9waWMiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJsYXN0QXJnIiwidGFiIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX3BhZ2Vub3RlcyIsImxvY2FsIiwic2V0QXJlYXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNB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LE9BQVIsQ0FBZ0IycEIsSUFBaEIsQ0FBcUJockIsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUEwd0IsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUM3SCxPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU80SCxZQUFZLENBQUM1SCxPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QjFxQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGFzaG9wdC1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJzogJ3NldFN5bmNGb3JFbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnOiAncmVuYW1lRW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBlbnY6ICdpbmplY3Rpb24nLFxyXG5cclxuICB1cmw6ICcnLFxyXG4gIGhhc2hsZXNzVVJMOiAnJyxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47Ly9zaG93IG5vdGlmaWNhdGlvblxyXG5cclxuICAgIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZW5hbWVFbnRyeShlbnRyeSwgb2xkTmFtZSkge1xyXG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUgPT09IG9sZE5hbWUgJiYgIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIGlmICh0aGlzLmVudHJpZXNbb2xkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0U3luY0ZvckVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkICYmIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSkge1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0uc3luY2VkID0gZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUVudHJ5KGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICBpZiAoZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lID09PSBkZWxldGVkRW50cnkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICBhZGRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQpIHRoaXMubmFtZSA9IGVudHJpZXNbMF0ubmFtZTtcclxuICAgIGNvbnN0IGUgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZW50cmllc1swXS5pbW11dDtcclxuICB9LFxyXG5cclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdG11aSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyLXBvcHVwJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9hdXRvLW1hcmtlcidcclxuXHJcbmltcG9ydCAnLi9tYWluJ1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5pbXBvcnQgX1JFU1RPUkVSIGZyb20gJy4vbW9kdWxlcy9yZXN0b3JlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlRW50cnlTdG9yYWdlJyxcclxuICAgICAgJ3Jlc3VtZWQtb24taGFzaGNoYW5nZSc6ICdzZXRQYWdlUGFyYW1zJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmRQYWdlU3RhdGUnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ2FjdGl2YXRlUmV0cnknLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcblxyXG4gICAgICAvLyBAUkVTVE9SRVJcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnOiAnb25FbnRyaWVzRm91bmQnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmV0cnlBY3RpdmU6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuc2V0UGFnZVBhcmFtcygpO1xyXG4gIH0sXHJcblxyXG4gIHNldFBhZ2VQYXJhbXMoKSB7XHJcbiAgICBfU1RPUkUuaWZyYW1lID0gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIF9TVE9SRS51cmwgPSB3aW5kb3cuZG9jdW1lbnQuVVJMO1xyXG4gICAgX1NUT1JFLmhhc2hsZXNzVVJMID0gX0hBU0hMRVNTKF9TVE9SRS51cmwpO1xyXG4gIH0sXHJcbiAgb25TYXZlZEVudHJ5KGVudHJ5KSB7XHJcbiAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAoZW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLmFkZEVudHJpZXMoW2VudHJ5XSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IHRydWU7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICB0aGlzLnJldHJ5QWN0aXZlID0gZmFsc2U7XHJcbiAgfSxcclxuICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgncGFnZS1zdGF0ZScsIHtcclxuICAgICAgc2VsZWN0aW9uOiAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkLFxyXG4gICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgcmV0cnlBY3RpdmU6IHRoaXMucmV0cnlBY3RpdmVcclxuICAgIH0sIGluZm8pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEBSRVNUT1JFUlxyXG4gIG9uRW50cmllc0ZvdW5kKGluZm8pIHtcclxuICAgIF9SRVNUT1JFUigpO1xyXG4gICAgdGhpcy51cGRhdGVFbnRyeVN0b3JhZ2UoaW5mby5lbnRyaWVzKTtcclxuICAgIGlmIChpbmZvLnJlY2VudGx5T3BlbmVkRW50cnkpIHRoaXMudXBkYXRlTmFtZVN0b3JhZ2UoaW5mby5lbnRyaWVzLCBpbmZvLnJlY2VudGx5T3BlbmVkRW50cnkpO1xyXG4gICAgdGhpcy5lbWl0KCdyZXN0b3JlOm1hcmtzJywgaW5mby5lbnRyaWVzKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5U3RvcmFnZShlbnRyaWVzKSB7XHJcbiAgICBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc107XHJcbiAgICBfU1RPUkUuYWRkRW50cmllcyhlbnRyaWVzKTtcclxuICAgIHRoaXMuZW1pdCgnc2V0OmVudHJpZXMnLCBlbnRyaWVzKTtcclxuICB9LFxyXG4gIHVwZGF0ZU5hbWVTdG9yYWdlKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFmaXJzdEVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcic6ICdzZXRNYXJrZXInXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBtYXJrZXI6ICdtJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldE1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMubWFya2VyID0ga2V5O1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiB0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNldXAuYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbk1vdXNldXAoKSB7XHJcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgdGhpcy5tYXJrZXIpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQk9PS01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFyayA9IG51bGw7XHJcbiAgICB0aGlzLmFuY2hvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQobWFyaykge1xyXG4gICAgbWFyayA9IG1hcmsgfHwgdGhpcy5tYXJrO1xyXG5cclxuICAgIGxldCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuICAgICAgICBhbmNob3IgPSB3cmFwcGVyc1swXTtcclxuXHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgYW5jaG9yLmlkID0gJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJztcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcblxyXG4gICAgdGhpcy5tYXJrID0gbWFyaztcclxuICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZW1vdmUoKSB7XHJcbiAgICBsZXQgbWFyayA9IHRoaXMubWFyayxcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvcixcclxuICAgICAgICB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aDtcclxuXHJcbiAgICBhbmNob3IuaWQgPSAnJztcclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuICB9XHJcbiAgc2Nyb2xsSW50b1ZpZXcoYm0pIHtcclxuICAgIGlmIChibSB8fCAoYm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJykpKVxyXG4gICAgICBibS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKHRydWUpO1xyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlKG9uKSB7XHJcbiAgICBpZiAob24gJiYgIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVnaXN0ZXJIYW5kbGVyKCkge1xyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpIHtcclxuICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgX1NUT1JFLnRtaWQgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSwgd2luZG93LmRvY3VtZW50KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXJrZXIsIGtleSwgcHJlU2V0dGluZ3MsIGltbXV0KSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uLCBkZWZhdWx0cztcclxuXHJcblx0XHR0aGlzLm1hcmtlciA9IG1hcmtlcjtcclxuXHRcdHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbWFya2VyLnNlbGVjdGlvbjtcclxuICAgIHRoaXMuaW1tdXQgPSBfU1RPUkUucmVkZXNjcmliaW5nID8gbWFya2VyLmlzSW1tdXQgOiBpbW11dDtcclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICAgIGNvbmRzOiBudWxsLFxyXG4gICAgICB0ZXh0OiBzZWxlY3Rpb24udGV4dCxcclxuICAgICAgbm90ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGQgaW4gZGVmYXVsdHMpIHtcclxuICAgICAgaWYgKCFwcmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShkKSkge1xyXG4gICAgICAgIHByZVNldHRpbmdzW2RdID0gZGVmYXVsdHNbZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZVNldHRpbmdzLmlkID0gcHJlU2V0dGluZ3MuaWQgfHwgKyttYXJrZXIuaWRjb3VudDtcclxuXHRcdHRoaXMuaWQgPSBwcmVTZXR0aW5ncy5pZDtcclxuXHRcdHRoaXMuc2ltcGxlID0gc2VsZWN0aW9uLnNpbXBsZTtcclxuXHJcblx0XHRsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLnJhbmdlO1xyXG5cclxuXHRcdHRoaXMuc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldDtcclxuXHRcdHRoaXMuZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0O1xyXG5cclxuXHRcdHRoaXMud3JhcHBlcnMgPSBudWxsO1xyXG4gICAgdGhpcy5jb250YWluZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhID0ge1xyXG5cdFx0XHRpZDogcHJlU2V0dGluZ3MuaWQsXHJcblx0XHRcdGtleToga2V5LFxyXG5cdFx0XHRzdHlsZTogcHJlU2V0dGluZ3Muc3R5bGUsXHJcblx0XHRcdGNvbmRzOiBwcmVTZXR0aW5ncy5jb25kcyxcclxuXHRcdFx0dGV4dDogcHJlU2V0dGluZ3MudGV4dCxcclxuXHRcdFx0Ym9va21hcms6IHByZVNldHRpbmdzLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiBwcmVTZXR0aW5ncy5ub3RlLFxyXG4gICAgICBzeW5jZWQ6IHByZVNldHRpbmdzLnN5bmNlZFxyXG5cdFx0fTtcclxuXHJcbiAgICBpZiAodGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkge1xyXG4gICAgICB0aGlzLmRlc2NyaWJlX2ltbXV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHRjcmVhdGUocmFuZ2UpIHtcclxuICAgIHJhbmdlID0gcmFuZ2UgfHwgdGhpcy5yYW5nZTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBzdHlsZSA9IHRoaXMua2V5RGF0YS5zdHlsZSxcclxuICAgICAgICBub2RlcyA9IHNlbGVjdGlvbi5ub2RlcyxcclxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgfHwgdGhpcy5jcmVhdGVXcmFwcGVycyhzdHlsZSwgbiksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbGFzdEluZGV4ID0gbiAtIDEsXHJcbiAgICAgICAgbm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgICAgaWYgKCFpKSByYW5nZS5zZXRTdGFydChub2RlLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuXHJcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcnNbaV0pO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh3cmFwcGVyc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKHRoaXMua2V5RGF0YS5ib29rbWFyaykgdGhpcy5tYXJrZXIuc2V0Qm9va21hcmsodGhpcywgZmFsc2UpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkgdGhpcy5kZXNjcmliZSgpO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJDbGlja0xpc3RlbmVycygpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuICByZWdpc3RlckNsaWNrTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgZm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrZXIucHJveHkodGhpcywgdGhpcy5vbkNsaWNrKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNsaWNrKGUpIHtcclxuICAgIGxldCBldmVudDtcclxuICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICBldmVudCA9ICdjbGlja2VkOm1hcmsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlICsgJ18wJztcclxuICAgICAgZXZlbnQgPSAnYWN0aXZhdGVkOm1hcmsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXJrZXIuZW1pdChldmVudCwge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgYm9va21hcms6ICEhdGhpcy5rZXlEYXRhLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiAhIXRoaXMua2V5RGF0YS5ub3RlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVmaW5lUG9zaXRpb24obiwgaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgbGV0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIG4gPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogd3JhcHBlcnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGZpcnN0V3JhcHBlciA9IHdyYXBwZXJzWzBdO1xyXG4gICAgY29uc3QgbGFzdFdyYXBwZXIgPSB3cmFwcGVyc1tuXTtcclxuICAgIGNvbnN0IGZpcnN0UGFyZW50ID0gZmlyc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBsYXN0UGFyZW50ID0gbGFzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGxldCBhbmNob3JQcmV2LCBmb2N1c1ByZXY7XHJcblxyXG4gICAgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQoZmlyc3RQYXJlbnQsIGZpcnN0V3JhcHBlciwgdHJ1ZSkgLSAxO1xyXG4gICAgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChsYXN0UGFyZW50LCBsYXN0V3JhcHBlciwgdHJ1ZSk7XHJcblxyXG4gICAgYW5jaG9yUHJldiA9IGZpcnN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBmb2N1c1ByZXYgPSBsYXN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcblxyXG4gICAgaWYgKGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5ub2RlVHlwZSA9PT0gMSkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gKz0gMTtcclxuICAgIGlmICghZm9jdXNQcmV2IHx8IGZvY3VzUHJldi5ub2RlVHlwZSA9PT0gMyB8fCBmaXJzdFBhcmVudCA9PT0gbGFzdFBhcmVudCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiAtPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA8IDApIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gMDtcclxuICAgIGlmICh0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgaWYgKGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgICAgdGhpcy5zdGFydE9mZnNldCA9IGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5kYXRhID8gYW5jaG9yUHJldi5kYXRhLmxlbmd0aCA6IDA7XHJcbiAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdGhpcy5zaW1wbGUgPyB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5rZXlEYXRhLnRleHQubGVuZ3RoIDogdGhpcy5lbmRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbih1bmRlZmluZWQsIHRydWUpXHJcbiAgICAgICAgLmRlc2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cdHVuZG8oKSB7XHJcblx0XHRsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuXHRcdFx0XHR3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMsXHJcblx0XHRcdFx0dyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuXHRcdFx0XHRjb250YWluZXIsIHdyYXBwZXI7XHJcblxyXG5cdFx0d2hpbGUgKHctLSkge1xyXG5cdFx0XHRjb250YWluZXIgPSBjb250YWluZXJzW3ddO1xyXG5cdFx0XHR3cmFwcGVyID0gd3JhcHBlcnNbd107XHJcblx0XHRcdGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcclxuXHRcdFx0Y29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHJlZG8oKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChjb250YWluZXJzWzBdLmNoaWxkTm9kZXNbdGhpcy5hbmNob3JOb2RlUG9zaXRpb25dLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV0uY2hpbGROb2Rlc1t0aGlzLmZvY3VzTm9kZVBvc2l0aW9uXSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24uY29sbGVjdE5vZGVzKCk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKCk7XHJcblx0fVxyXG5cdHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgaW5jbHVkaW5nVGV4dE5vZGVzKSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdGxldCBjaGlsZHJlbiA9IGluY2x1ZGluZ1RleHROb2RlcyB8fCBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0XHRcdGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHRjcmVhdGVXcmFwcGVycyhzdHlsZSwgbnVtYmVyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICB3cmFwcGVyO1xyXG5cclxuXHRcdGZvciAoIDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcblx0XHRcdHdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0Jyk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UoLzsvZywgJyFpbXBvcnRhbnQ7JykpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcsIHRoaXMuaWQgKyAnXycgKyBpKTtcclxuICAgICAgLy93cmFwcGVyLnNldEF0dHJpYnV0ZSgnY29udGV4dG1lbnUnLCAndGV4dG1hcmtlci1jdG0nKTtcclxuXHRcdFx0d3JhcHBlcnMucHVzaCh3cmFwcGVyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3cmFwcGVycztcclxuXHR9XHJcbiAgZGVzY3JpYmUoKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XHJcblx0XHRjb25zdCBlbmQgPSByYW5nZS5lbmRDb250YWluZXI7XHJcblx0XHRjb25zdCBzaW5nbGVOb2RlID0gdGhpcy5zaW1wbGU7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLndyYXBwZXJzWzBdLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBwYXJlbnRJc1RNID0gcGFyZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG5cdFx0Y29uc3QgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBncmFuZGdyYW1wYSA9IGdyYW1wYS5wYXJlbnROb2RlIHx8IDA7XHJcblx0XHRjb25zdCBmVE5QID0gdGhpcy5hbmNob3JOb2RlUG9zaXRpb247XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG5cdFx0XHRvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG5cdFx0XHRuMTogcGFyZW50SXNUTSA/ICdUTScgOiBwYXJlbnQubm9kZU5hbWUsXHJcblx0XHRcdHAxOiBmVE5QLFxyXG5cdFx0XHRuMjogZ3JhbXBhLm5vZGVOYW1lLFxyXG5cdFx0XHRwMjogdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSxcclxuXHRcdFx0cDM6IGdyYW5kZ3JhbXBhID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLCBncmFtcGEpIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRwNDogZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYS5wYXJlbnROb2RlLCBncmFuZGdyYW1wYSkgOiB1bmRlZmluZWRcclxuXHRcdH07XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG5cdH1cclxuICBkZXNjcmliZV9pbW11dCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgZW5kUG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGxldCBzdGFydCA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGVuZCA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBib2R5KSB7XHJcbiAgICAgIHN0YXJ0UG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoc3RhcnQucGFyZW50Tm9kZSwgc3RhcnQpKTtcclxuICAgICAgc3RhcnQgPSBzdGFydC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGVuZCAhPT0gYm9keSkge1xyXG4gICAgICBlbmRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChlbmQucGFyZW50Tm9kZSwgZW5kKSk7XHJcbiAgICAgIGVuZCA9IGVuZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgcDogc3RhcnRQb3NpdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBlOiB7XHJcbiAgICAgICAgbzogdGhpcy5lbmRPZmZzZXQsXHJcbiAgICAgICAgcDogZW5kUG9zaXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBhcHBlbmRlZDogZmFsc2UsXHJcbiAgaGVpZ2h0OiAwLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdwb3B1cCc7XHJcbiAgICAgIHRoaXMubWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwJyk7XHJcbiAgICBjb25zdCBiZ0NvbG9yUmVnRXhwID0gL2JhY2tncm91bmQtY29sb3I6KCNbYS1mMC05XXs2fSkvO1xyXG4gICAgbGV0IGJnQ29sb3IsIGNvbG9yQnRuO1xyXG4gICAgZm9yIChsZXQgbSBpbiB0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgYmdDb2xvciA9IHRoaXMubWFya2Vyc1ttXS5zdHlsZS5tYXRjaChiZ0NvbG9yUmVnRXhwKTtcclxuICAgICAgaWYgKGJnQ29sb3IpIHtcclxuICAgICAgICBjb2xvckJ0biA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwY29sb3InKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChjb2xvckJ0bik7XHJcbiAgICAgICAgY29sb3JCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3IucG9wKCk7XHJcbiAgICAgICAgY29sb3JCdG4uaWQgPSAndG1wb3B1cGNvbG9yLS0nICsgbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3coKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBzdHlsZSA9IHBvcHVwLnN0eWxlO1xyXG4gICAgbGV0IHBvcHVwSGVpZ2h0O1xyXG5cclxuICAgIGlmICghdGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5hcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gc2VsZWN0aW9uUG9zaXRpb24udG9wIC0gc2VsZWN0aW9uUG9zaXRpb24uaGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgKyAncHgnO1xyXG4gICAgICBzdHlsZS5sZWZ0ID0gc2VsZWN0aW9uUG9zaXRpb24ubGVmdCArIHdpbmRvdy5zY3JvbGxYICsgJ3B4JztcclxuXHJcbiAgICAgIHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSAtIHBvcHVwSGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKChwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodCkgIT09IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgIHN0eWxlLnRvcCA9IHBhcnNlSW50KHN0eWxlLnRvcCkgKyBwb3B1cEhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuICAgIHRoaXMuaGVpZ2h0ID0gcG9wdXBIZWlnaHQ7XHJcbiAgfSxcclxuICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIGlmICghc2VsZWN0ZWQpIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbk1vdXNlZG93bihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ1RNUE9QVVBDT0xPUicpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBvcHVwLW1hcmtlcicsIGVsLmlkLnNwbGl0KCctLScpLnBvcCgpKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSSyBmcm9tICcuL21hcmstaXRlbSdcclxuaW1wb3J0IF9CT09LTUFSSyBmcm9tICcuL2Jvb2ttYXJrJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuXHRcdEVOVjoge1xyXG5cdFx0XHQnc2V0OmVudHJpZXMnOiAndXBkYXRlSUQnLFxyXG5cdFx0XHQncHJlc3NlZDptYXJrZXIta2V5JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3ByZXNzZWQ6aG90a2V5JzogJ29uSG90a2V5JyxcclxuICAgICAgJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3NlbGVjdGlvbi1lbmQnOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAncmVzdG9yZWQ6cmFuZ2UnOiAncmVjcmVhdGUnLFxyXG4gICAgICAnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucyc6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY3R4OmInOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAnY3R4Oi1iJzogJ3JlbW92ZUJvb2ttYXJrJyxcclxuICAgICAgJ2N0eDpkJzogJ3JlbW92ZScsXHJcbiAgICAgICdjdHg6bSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdjdHg6bic6ICdhZGROb3RlJyxcclxuICAgICAgJ2N0eDpjJzogJ2NvcHknLFxyXG4gICAgICAndXBkYXRlZDpub3RlJzogJ3NhdmVOb3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdjaGFuZ2VkOm5vdGUtY29sb3InOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnY2hhbmdlZDpub3RlLXBvcyc6ICdzYXZlTm90ZScsXHJcbiAgICAgICdjaGFuZ2VkOm5vdGUtc2l6ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdzaWRlYmFyOmhpZ2hsaWdodCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnOiAncmVtb3ZlJyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJzogJ2FkZE5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCc6ICdpbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcyc6ICdzYXZlJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nOiAncmVzdW1lJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbyc6ICd1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbyc6ICdyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weSc6ICdjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAnc2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnOiAnb25IYXNoQ2hhbmdlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2VsZWN0aW9uOiBudWxsLFxyXG5cdGRvbmU6IFtdLFxyXG5cdHVuZG9uZTogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya3M6IFtdLFxyXG5cdHZpc3VhbGx5T3JkZXJlZE1hcmtJRHM6IFtdLFxyXG4gIGJvb2ttYXJrOiBudWxsLFxyXG4gIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRpZGNvdW50OiAwLFxyXG5cdG1hcmtTY3JvbGxQb3M6IC0xLFxyXG5cclxuICB1cGRhdGVJRChlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBsID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgY29uc3QgaWRzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcblxyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcblxyXG4gICAgICBpZiAoIWxvY2tlZCAmJiBlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRjb3VudCA9IGVudHJ5LmlkY291bnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1hcmtzID0gKGVudHJ5Lm1hcmtzIHx8IFtdKS5jb25jYXQoZW50cnkubG9zdCB8fCBbXSksXHJcbiAgICAgICAgICAgIGQgPSBtYXJrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICB3aGlsZSAoZC0tKSB7XHJcbiAgICAgICAgICAgIGlkcy5wdXNoKG1hcmtzW2RdLmlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaWRjb3VudCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGlkcyk7XHJcbiAgfSxcclxuXHRtYXJrKGtleSwgZGF0YSwgaW1tdXQpIHtcclxuXHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IG5ldyBfTUFSSyh0aGlzLCBrZXksIGRhdGEsIGltbXV0KS5jcmVhdGUoKTtcclxuXHJcbiAgICBpZiAoZGF0YS5hdXRvbm90ZSkgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIG1hcmssIGRhdGEuYXV0b25vdGUpO1xyXG5cclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcblx0dW5kbyhub0F1dG9zYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lO1xyXG5cclxuXHRcdGlmIChkb25lLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lLnBvcCgpO1xyXG4gICAgICBjb25zdCBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICB0aGlzLnVuZG9uZS5wdXNoKG1hcmsudW5kbygpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmJvb2ttYXJrKSB0aGlzLnVuZG9Cb29rbWFyaygpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0fSxcclxuXHRyZWRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHVuZG9uZSA9IHRoaXMudW5kb25lO1xyXG5cclxuXHRcdGlmICh1bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgIHRoaXMuZG9uZS5wdXNoKG1hcmsucmVkbygpKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIFttYXJrXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0fSxcclxuICBjdXRPdXQoaSkge1xyXG4gICAgbGV0IG1hcmtlciA9IHRoaXMsXHJcbiAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgdG9CZVJlbW92ZWQgPSBbaV0sXHJcbiAgICAgICAgaW5kaWNlcyA9IFtpXSxcclxuICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGopIHtcclxuICAgICAgZm9yICh2YXIgeCA9IGogKyAxOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIubWFya3NJbnRlcnNlY3QoZG9uZVtqXSwgbWFyaykpIHtcclxuICAgICAgICAgIGlmICghdG9CZVJlbW92ZWQuaW5jbHVkZXMoeCkpIHRvQmVSZW1vdmVkLnB1c2goeCk7XHJcbiAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICB0b0JlUmVtb3ZlZC5zb3J0KCk7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3MoaW5kaWNlcy5zaGlmdCgpKTtcclxuICAgIH1cclxuICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgd2hpbGUgKHRvQmVSZW1vdmVkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmRvbmUuc3BsaWNlKHRvQmVSZW1vdmVkLnBvcCgpLCAxKVswXS51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzbWFsbGVzdElEO1xyXG4gIH0sXHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGlkID0gaWQgPyBpZCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcbiAgICBpZiAoIWlkKSByZXR1cm4gdGhpcy51bmRvKCk7XHJcblxyXG4gICAgbGV0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQuc3BsaXQoJ18nKVswXSksXHJcbiAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgcG9zaXRpb24gPSBkb25lLmluZGV4T2YobWFyayksXHJcbiAgICAgICAgc21hbGxlc3RJRCwgaTtcclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT09IGwgLSAxKSB7XHJcbiAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLnVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBzbWFsbGVzdElEID0gdGhpcy5jdXRPdXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpID0gdGhpcy51bmRvbmUubGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy51bmRvbmUubGVuZ3RoKSB0aGlzLnJlZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGktLSkgdGhpcy51bmRvKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWRbMF0pO1xyXG4gIH0sXHJcbiAgcmVzdW1lKGFyZywgb3B0aW9ucykge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKVxyXG4gICAgICAuZm9yRWFjaChoaWdobGlnaHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhpZ2hsaWdodC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGlnaGxpZ2h0LnRleHRDb250ZW50KSwgaGlnaGxpZ2h0KTtcclxuICAgICAgICBjb250YWluZXIubm9ybWFsaXplKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy51bmRvbmUgPSBbXTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBbXTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IFtdO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSAtMTtcclxuXHJcbiAgICBjb25zdCBlbnRyeSA9ICFhcmcgJiYgX1NUT1JFLm5hbWUgJiYgX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdID8gX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdIDogbnVsbDtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ3Jlc3VtZWQ6bWFya2VycycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGltbXV0KGltbXV0YWJsZSkge1xyXG4gICAgdGhpcy5pc0ltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IHRydWU7XHJcbiAgICBfU1RPUkUuaW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gIH0sXHJcbiAgc2F2ZSgpIHtcclxuICAgIGNvbnN0IGlmcmFtZSA9IF9TVE9SRS5pZnJhbWU7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICBpZiAoIWxvY2tlZCAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoJ25hbWU6ZW50cnk/JykudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICBfU1RPUkUubmFtZSA9IHdpbmRvdy5wcm9tcHQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2UnLCBzdWIpKTtcclxuICAgICAgICAgICAgICBpZiAoX1NUT1JFLm5hbWUpIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgY29uZmlybWVkID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChpZnJhbWUpIGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpKTtcclxuICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHR9LFxyXG4gIGF1dG9zYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgaWYgKGF1dG9zYXZlKSB0aGlzLnNhdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ3Vuc2F2ZWQtY2hhbmdlcycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjb3B5KCkge1xyXG4gICAgY29uc3QgbWFyayA9IHRoaXMuZmluZE1hcmsoKTtcclxuICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBtYXJrLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbWFyay5zZWxlY3Rpb24uc2VsZjtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycztcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydCh3cmFwcGVyc1swXSwgMCk7XHJcbiAgICByYW5nZS5zZXRFbmQod3JhcHBlcnNbd3JhcHBlcnMubGVuZ3RoIC0gMV0sIDEpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGlvbi50b1N0cmluZygpLnRyaW0oKS5yZXBsYWNlKC8oXFxyXFxuKXsxLH0vZywgJ1xcclxcbicpKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuICB9LFxyXG4gIHN0b3JlKG1hcmssIHNhdmUsIG9yZGVyKSB7XHJcblx0XHR0aGlzLmRvbmUucHVzaChtYXJrKTtcclxuICAgIGlmIChzYXZlICE9PSBmYWxzZSkgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0aWYgKG9yZGVyKSB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cdH0sXHJcbiAgcmVjcmVhdGUobWFyaykge1xyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihudWxsLCB7IHByb2dyYW1tYXRpY2FsbHk6IHRydWUgfSk7XHJcbiAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgfSxcclxuICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIHRoaXMuZG9uZSk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChfU1RPUkUubmFtZSA9PT0gbWFyay5rZXlEYXRhLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkpIHtcclxuICAgICAgICB0aGlzLmdvdG9NYXJrKG1hcmspO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLnJlZGVzY3JpYmluZykge1xyXG4gICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkTm90ZShpZCkge1xyXG4gICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICB9LFxyXG4gIHNhdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAoIV9TVE9SRS5sb2NrZWQpIHJldHVybiB0aGlzLmF1dG9zYXZlKCk7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IHRoaXMuZ2V0QnlJZChpZCkua2V5RGF0YTtcclxuICAgIGNvbnN0IHN5bmNlZCA9IHR5cGVvZiBtYXJrLnN5bmNlZCA9PT0gJ2Jvb2xlYW4nID8gbWFyay5zeW5jZWQgOiBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgIG1hcmtzOiBbbWFya10sXHJcbiAgICAgIG5hbWU6IG1hcmsudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSxcclxuICAgICAgc3luY2VkXHJcbiAgICB9O1xyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgZW50cnkpO1xyXG4gIH0sXHJcbiAgZ290b01hcmsobWFyaykge1xyXG4gICAgY29uc3QgbWFya0VsZW1lbnRzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcztcclxuICAgIGxldCBlbCwgcG9zLCBpZDtcclxuICAgIGlmIChtYXJrIHx8IG1hcmsgPT09IDApIHtcclxuICAgICAgaWYgKHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IG1hcmsgKyAxO1xyXG4gICAgICAgIGVsID0gbWFya0VsZW1lbnRzW21hcmtdO1xyXG4gICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZD1cIicgKyBpZCArICdfMFwiXScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3MgPSB0aGlzLm1hcmtTY3JvbGxQb3M7XHJcbiAgICAgIGVsID0gbWFya0VsZW1lbnRzW3Bvc107XHJcbiAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG5cclxuXHRcdGlmICghbWFyayB8fCB0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHRoaXMuZ2V0QnlJZChpZCkub25DbGljayhpZCk7XHJcbiAgICB0aGlzLmluZGljYXRlTWFyayhpZCk7XHJcbiAgfSxcclxuXHRnb3RvTmV4dE1hcmsoZGlyKSB7XHJcblx0XHRjb25zdCBsID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5sZW5ndGg7XHJcblxyXG5cdFx0dGhpcy5tYXJrU2Nyb2xsUG9zICs9IGRpcjtcclxuXHJcblx0XHRpZiAodGhpcy5tYXJrU2Nyb2xsUG9zIDwgMCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbCAtIDE7XHJcblx0XHRlbHNlIGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPj0gbCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gMDtcclxuXHJcblx0XHR0aGlzLmdvdG9NYXJrKCk7XHJcblx0fSxcclxuICBpbmRpY2F0ZU1hcmsoaWQpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSlcclxuICAgICAgLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICBjb25zdCB0bXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkXj1cIicgKyBpZCArICdfXCJdJykpO1xyXG5cclxuICAgIHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKSwgMjAwMCk7XHJcbiAgfSxcclxuICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcmssXHJcbiAgICAgICAgbWFyayA9IHRoaXMuZmluZE1hcmsobSk7XHJcblxyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGJvb2ttYXJrKSB7XHJcbiAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbmV3IF9CT09LTUFSSygpLnNldChtYXJrKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2FkZGVkOmJvb2ttYXJrJyk7XHJcbiAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHVuZG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgfSxcclxuICByZW1vdmVCb29rbWFyaygpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoIWJvb2ttYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gYm9va21hcms7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgIGlmIChib29rbWFyaykgYm9va21hcmsuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9LFxyXG4gIGdldEJ5SWQoaWQsIHBvcykge1xyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmUsXHJcblx0XHRcdCAgZCA9IGRvbmUubGVuZ3RoLFxyXG5cdFx0XHQgIG1hcms7XHJcblxyXG5cdFx0d2hpbGUgKGQtLSkge1xyXG5cdFx0XHRtYXJrID0gZG9uZVtkXTtcclxuXHJcblx0XHRcdGlmIChtYXJrLmtleURhdGEuaWQgPT0gaWQpXHJcblx0XHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbWFyaywgcG9zaXRpb246IGQgfSA6IG1hcms7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBudWxsLCBwb3NpdGlvbjogbnVsbCB9IDogZmFsc2U7XHJcblx0fSxcclxuXHRmaW5kTWFyayh4KSB7XHJcblx0XHR4ID0geCA/IHggOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG5cdFx0bGV0IG1hcmsgPSAheCA/XHJcblx0XHRcdHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV0gOlxyXG5cdFx0XHRcdHR5cGVvZiB4ID09PSAnc3RyaW5nJyA/XHJcblx0XHRcdHRoaXMuZ2V0QnlJZCh4LnNwbGl0KCdfJylbMF0pIDpcclxuXHRcdFx0eDtcclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcbiAgc29ydEJ5SWQoKSB7XHJcbiAgICB0aGlzLmRvbmUuc29ydCgobWFyazEsIG1hcmsyKSA9PiBtYXJrMS5pZCAtIG1hcmsyLmlkKTtcclxuICB9LFxyXG5cdG9yZGVyTWFya3NWaXN1YWxseSgpIHtcclxuXHRcdHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkJD1cIl8wXCJdJykpLnNvcnQoKG0xLCBtMikgPT4ge1xyXG5cdFx0XHRsZXQgYmIxID0gbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRiYjIgPSBtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdHRvcDEgPSBiYjEudG9wLFxyXG5cdFx0XHRcdFx0dG9wMiA9IGJiMi50b3A7XHJcblxyXG5cdFx0XHRpZiAodG9wMSA8IHRvcDIpIHJldHVybiAtMTtcclxuXHRcdFx0ZWxzZSBpZiAodG9wMiA8IHRvcDEpIHJldHVybiAxO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAoYmIxLmxlZnQgPCBiYjIubGVmdCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubWFwKG1hcmsgPT4gcGFyc2VJbnQobWFyay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpO1xyXG4gICAgdGhpcy5lbWl0KCd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJywgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzKTtcclxuXHR9LFxyXG4gIG1hcmtzSW50ZXJzZWN0KG1hcmsxLCBtYXJrMikge1xyXG5cdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICBpZDEgPSBtYXJrMS5pZCxcclxuICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICB3MiwgdG1zLCBsO1xyXG5cclxuICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKHcyLS0pIHtcclxuICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG4gIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0bGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuXHJcblx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGtleSA9IGU7XHJcblx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGtleSA9IGtleSB8fCAnbSc7XHJcblx0XHR9XHJcblxyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldykge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6ICEhc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBfU1RPUkUuaW1tdXQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgfSk7XHJcblx0fSxcclxuICBvbkhvdGtleShrZXkpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHNlbGYucmVkbygpOyBicmVhaztcclxuICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93dXAnOiBzZWxmLmdvdG9OZXh0TWFyaygtMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhcnJvd2Rvd24nOiBzZWxmLmdvdG9OZXh0TWFyaygxKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYyc6IHNlbGYuY29weSgpOyBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRyZXRyaWV2ZUVudHJ5KCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgY29uc3QgbmFtZSA9IF9TVE9SRS5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0ZW50cnkubGFzdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0ZW50cnkuY291bnQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcblx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICBpZiAoaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcbiAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgaXNOZXcgPyBuYW1lIDogZW50cnkubmFtZTtcclxuXHJcblx0XHRyZXR1cm4gZW50cnk7XHJcblx0fSxcclxuICBjb2xsZWN0TWFya3MoKSB7XHJcbiAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICBjb25zdCBtYXJrcyA9IFtdO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgIH1cclxuXHJcbiAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdGtEID0gZG9uZVttXS5rZXlEYXRhO1xyXG4gICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdH1cclxuICAgIHJldHVybiBtYXJrcztcclxuICB9LFxyXG4gIG9uSGFzaENoYW5nZSgpIHtcclxuICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlJyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlaGVhZGVyJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVhY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IGRlbCA9IHRoaXMuZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlZGVsZXRlJyk7XHJcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlbWluaW1pemUnKTtcclxuICAgICAgY29uc3QgZ2VhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWN1c3RvbWl6ZScpO1xyXG4gICAgICBjb25zdCBwYWxldHRlID0gdGhpcy5wYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlcGFsZXR0ZScpO1xyXG4gICAgICBjb25zdCBwID0gdGhpcy50ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvcjtcclxuICAgICAgX1NUT1JFLm5vdGVDb2xvciA9IGNvbG9yO1xyXG4gICAgICBjb25zdCBkZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSkpO1xyXG4gICAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDIwMTMpKTtcclxuICAgICAgY29uc3QgZ2VhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjY5OSkpO1xyXG5cclxuICAgICAgWydncmVlbicsICd3aGl0ZScsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCcsICdwdXJwbGUnLCAnYmx1ZScsICd0dXJxdW9pc2UnXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWNvbG9yJyk7XHJcbiAgICAgICAgY29sb3IuY2xhc3NOYW1lID0gJ3Rtbm90ZWNvbG9yLS0nICsgYztcclxuICAgICAgICBjb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCBjKTtcclxuICAgICAgICBwYWxldHRlLmFwcGVuZENoaWxkKGNvbG9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1ub3RlJywgdHJ1ZSk7XHJcbiAgICAgIGRlbC5hcHBlbmRDaGlsZChkZWxUZXh0KTtcclxuICAgICAgbWluLmFwcGVuZENoaWxkKG1pblRleHQpO1xyXG4gICAgICBnZWFyLmFwcGVuZENoaWxkKGdlYXJUZXh0KTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdhZGQ6bm90ZSc6ICdhZGRBbmRTaG93JyxcclxuICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdyZW1vdmVOb3RlU3RvcmFnZScsXHJcbiAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAncmVtb3ZlZDptYXJrJzogJ3JlbW92ZU5vdGUnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVRyYW5zcCcsXHJcbiAgICAgICdzdGFydDpkcmFnJzogJ3N0YXJ0RHJhZ2dpbmdOb3RlJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG5vdGVzOiB7fSxcclxuICB0b2dnbGU6IG51bGwsXHJcbiAgZHJhZ0hhbmRsZXI6IG51bGwsXHJcbiAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVUcmFuc3AoKTtcclxuICB9LFxyXG4gIGFkZChtYXJrLCBjb2xvcikge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZXNbbWFyay5pZF07XHJcbiAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICB0aGlzLmVtaXQoJ2FkZGVkOm5vdGUnKTtcclxuICAgIHJldHVybiB0aGlzLm5vdGVzW21hcmsuaWRdID0gbmV3IF9OT1RFKG1hcmssIGNvbG9yKTtcclxuICB9LFxyXG4gIHJlc3RvcmUobWFya3MpIHtcclxuICAgIGZvciAobGV0IG1hcmsgb2YgbWFya3MpIHtcclxuICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWFyayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGFkZEFuZFNob3cobWFyaywgY29sb3IpIHtcclxuICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlU3RvcmFnZShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSkgdGhpcy5lbWl0KCdyZW1vdmVkOmxhc3Qtbm90ZScpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgaWYgKHRoaXMubm90ZXNbaWRdKSB0aGlzLm5vdGVzW2lkXS5yZW1vdmUoKTtcclxuICB9LFxyXG4gIHRvZ2dsZUFsbCgpIHtcclxuICAgIGlmICghdGhpcy5ub3RlcykgcmV0dXJuO1xyXG4gICAgY29uc3Qgbm90ZXMgPSB0aGlzLm5vdGVzO1xyXG4gICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICBjb25kaXRpb24gPSBtZXRoID09PSAnaGlkZScgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgbm90ZTtcclxuICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgbm90ZSA9IG5vdGVzW25dO1xyXG4gICAgICBpZiAobm90ZS52aXNpYmxlID09PSBjb25kaXRpb24pIHtcclxuICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZVRyYW5zcCgpIHtcclxuICAgIGNvbnN0IGJvZHlDbGFzc2VzID0gd2luZG93LmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzICYmIHNldHRpbmdzLm1pc2MpIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MubWlzYy5ub3RldHJhbnNwKSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3MubWlzYy5ub3RlcGxhaW52aWV3KSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tcGxhaW4tdmlldycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGlzRW1wdHkob2JqKSB7XHJcbiAgICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gIH0sXHJcbiAgc3RhcnREcmFnZ2luZ05vdGUobm90ZSkge1xyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyID0gKGUpID0+IHRoaXMuZW1pdERyYWdFdmVudChub3RlLCBlKTtcclxuICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICBzdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpIHtcclxuICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2RyYWdzdG9wOm5vdGUnLCBub3RlLCBlKTtcclxuICB9LFxyXG4gIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5lbWl0KCdkcmFnOm5vdGUnLCBub3RlLCBlKTtcclxuICB9LFxyXG4gIHNlbmROb3Rlc1N0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgnbm90ZXMtc3RhdGUnLCAhdGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpLCBpbmZvKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgYXV0b1BhdXNlOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRE9NOiB7XHJcbiAgICAgIGtleWRvd246IHtcclxuICAgICAgICAnKic6ICdkZWxlZ2F0ZSdcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgJyonOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICBrZXlDb2RlTWFwOiB7XHJcbiAgICAnMTMnOiAnRW50ZXInLFxyXG4gICAgJzQ4JzogJzAnLCAnNDknOiAnMScsICc1MCc6ICcyJywgJzUxJzogJzMnLCAnNTInOiAnNCcsXHJcbiAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICcxNzEnOiAnKycsICcxNzMnOiAnLSdcclxuICB9LFxyXG5cclxuICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZWwudGFnTmFtZTtcclxuXHJcbiAgICByZXR1cm4gKG5hbWUgPT09ICdURVhUQVJFQScgfHwgbmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJyk7XHJcbiAgfSxcclxuICBkZWxlZ2F0ZShlKSB7XHJcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgbW9kS2V5ID0gKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleSksXHJcbiAgICAgICAgYXJyb3dLZXlzID0gWydhcnJvd2Rvd24nLCAnYXJyb3d1cCddLFxyXG4gICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgIGZ1bmN0aW9uS2V5cyA9IGxvY2tlZEFjdGlvbnMuY29uY2F0KGFycm93S2V5cykuY29uY2F0KCdjJyksXHJcbiAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJ107XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zaGlmdFNlbnNpdGl2ZUtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIGtleSA9IHRoaXMua2V5Q29kZU1hcFtrZXlDb2RlXTtcclxuXHJcbiAgICBpZiAoIWZ1bmN0aW9uS2V5cy5pbmNsdWRlcyhrZXkpICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICBjb25zdCBpc0N1c3RvbU1hcmtlcktleSA9IGlzTWFya2VyS2V5ICYmICFkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICBpZiAoaXNDdXN0b21NYXJrZXJLZXkpIGtleSA9ICdjbSc7XHJcbiAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgIGlmICghc2V0dGluZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBpZiAoIW1vZEtleSkge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdbMV0pIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG9ydGN1dCA9IHNldHRpbmdbMF0uc3BsaXQoJy0nKTtcclxuICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgIGNvbnN0IHMyID0gc2hvcnRjdXRbMV07XHJcblxyXG4gICAgICAgIGlmICghZVtzMV0gfHwgKHMyICYmICFlW3MyXSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGlzTWFya2VyS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgncHJlc3NlZDpob3RrZXknLCBrZXkpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNlbGVjdGlvbicsICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0luQ2h1bmtzKGRhdGEsIHByb2MsIGNiKSB7XHJcbiAgICBwcm9jID0gcHJvYy5iaW5kKHRoaXMpO1xyXG4gICAgY2IgPSBjYi5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdChmdW5jdGlvbiByZWMoKSB7XHJcblx0XHRcdGxldCBleHBpcmUgPSArbmV3IERhdGUoKSArIDUwMDtcclxuXHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHR0cnkge1xyXG4gICAgICAgICAgcHJvYyhkYXRhLnNoaWZ0KCkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdFx0fSB3aGlsZSAoZGF0YS5sZW5ndGggPiAwICYmIGV4cGlyZSA+ICtuZXcgRGF0ZSgpKTtcclxuXHJcblx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHJlYygpLCAwKTtcclxuXHRcdFx0ZWxzZSBjYigpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbiAgcmVwb3J0KCkge1xyXG4gICAgbGV0IGxsID0gdGhpcy5sb3N0Lmxlbmd0aDtcclxuICAgIGlmIChsbCkge1xyXG4gICAgICB3aGlsZShsbC0tKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubG9zdFtsbF0udGVtcDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ2xvc3Q6bWFya3MnLCB0aGlzLmZhaWx1cmVSZXBvcnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdmaW5pc2hlZDpyZXN0b3JhdGlvbicsIHRoaXMuZW50cnkubmFtZSwgdGhpcy5yZXN0b3JlZCwgdGhpcy5sb3N0LCB0aGlzLmFyZWEpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5jYWNoZSA9IFtdO1xyXG4gICAgdGhpcy5waGFzZSA9IDE7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsID0gMDtcclxuICAgIHRoaXMuY2h1bmtEdXJhdGlvbiA9IDUwMDtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICB0aGlzLm9vbSA9IGVudHJ5Lm1hcmtzLmxlbmd0aCA9PT0gMSAmJiBlbnRyeS5tYXJrc1swXS5pZCA9PSAxO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpbWVyKCkge1xyXG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICByZXR1cm4gdGltZXI7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZW50cnkgPSB0aGlzLmVudHJ5LFxyXG4gICAgICAgIG5vdyA9IFtdLCBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzLFxyXG4gICAgICAgIGwgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIG1hcms7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG5cclxuICAgICAgdGhpcy5jb252ZXJ0RGVzY3JpcHRpb24obWFyaykuY3JlYXRlVGVtcE9iamVjdChtYXJrKTtcclxuXHJcbiAgICAgIGlmIChtYXJrLmNvbmRzLm4xID09PSAnVE0nKSBwb3N0cG9uZWQucHVzaChtYXJrKTtcclxuICAgICAgZWxzZSBub3cucHVzaChtYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnF1ZXVlLnB1c2gobm93KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gcG9zdHBvbmVkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW3Bvc3Rwb25lZFtpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzdG9yZSgpO1xyXG4gIH1cclxuICBjb252ZXJ0RGVzY3JpcHRpb24obWFyaykge1xyXG4gICAgaWYgKHR5cGVvZiBtYXJrLmNvbmRzLm8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxldCBjb25kcyA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgICBjb252ZXJ0ZWRDb25kcyA9IHtcclxuICAgICAgICAgICAgbzogY29uZHMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgICAgIG4xOiBjb25kcy5maXJzdE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBuMjogY29uZHMuZmlyc3RQYXJlbnROb2RlTmFtZSxcclxuICAgICAgICAgICAgcDE6IGNvbmRzLmZpcnN0VGV4dE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDI6IGNvbmRzLmZpcnN0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMzogY29uZHMuZmlyc3RQYXJlbnROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHA0OiBjb25kcy5maXJzdEdyYW1wYU5vZGVQb3NpdGlvblxyXG4gICAgICAgICAgfTtcclxuICAgICAgZGVsZXRlIG1hcmsuY29uZHM7XHJcbiAgICAgIG1hcmsuY29uZHMgPSBjb252ZXJ0ZWRDb25kcztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjcmVhdGVUZW1wT2JqZWN0KG1hcmspIHtcclxuICAgIGxldCB0ZXh0ID0gbWFyay50ZXh0LFxyXG4gICAgICAgIHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCksXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gdGhpcy5zcXVlZXplKG1hcmsudGV4dCk7XHJcblxyXG4gICAgbWFyay50ZW1wID0ge1xyXG4gICAgICB0ZXh0TGVuZ3RoOiB0ZXh0Lmxlbmd0aCxcclxuICAgICAgdHJpbW1lZFRleHQ6IHRyaW1tZWRUZXh0LFxyXG4gICAgICB0cmltbWVkVGV4dExlbmd0aDogdHJpbW1lZFRleHQubGVuZ3RoLFxyXG4gICAgICBzcXVlZXplZFRleHQ6IHNxdWVlemVkVGV4dCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoOiBzcXVlZXplZFRleHQubGVuZ3RoLFxyXG4gICAgICBwb3NzaWJsZVBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRzOiB7fSxcclxuICAgICAgcG9zc2libGVGb2N1c09mZnNldHM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcmsuc3luY2VkID0gdGhpcy5lbnRyeS5zeW5jZWQ7XHJcbiAgfVxyXG4gIHJlc3RvcmUoKSB7XHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMikgdGhpcy5zb3J0UXVldWVCeUlkKCk7XHJcblxyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMucXVldWUuc2hpZnQoKSxcclxuICAgICAgICBsZW5ndGggPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcblxyXG4gICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldEJvZHlTZWxlY3Rpb24od2luZG93LmRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgICAuZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBoYXNlID09PSAxICYmIGxlbmd0aCA+IDEpXHJcbiAgICAgICAgICB0aGlzLnBvc3Rwb25lT3ZlcmxhcHBpbmdzKCk7XHJcblxyXG4gICAgICB0aGlzLmZpbmRQb3NzaWJsZUV4dHJlbWEoKVxyXG4gICAgICAgICAgLnJ1bGVPdXRNdWx0aXBsZXMoKVxyXG4gICAgICAgICAgLnJlc3RvcmVSYW5nZXMoKTtcclxuXHJcbiAgICAgIHRoaXMucGhhc2UrKztcclxuXHJcbiAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDwgK25ldyBEYXRlKCkpIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXN0b3JlKCksIDApO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gIH1cclxuICBzb3J0UXVldWVCeUlkKCkge1xyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICByZXMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBtYXJrLCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKCFtYXJrc1tsXS5sZW5ndGgpIGNvbnRpbnVlO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF1bMF07XHJcbiAgICAgIHRlbXBbbWFyay5pZF0gPSBtYXJrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG5cclxuICAgIGZvciAodCA9IHRlbXAubGVuZ3RoOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLnF1ZXVlLnB1c2goW3RlbXBbaV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsKSB7XHJcbiAgICBsZXQgdHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0LFxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3F1ZWV6ZWRUZXh0LCBzcXVlZXplZFRleHRMZW5ndGgsIHAsIGVuZFBvc2l0aW9uO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcCA9IHVuZGVmaW5lZDtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuXHJcbiAgICAgIGlmICghbWFya1RlbXApIHtcclxuICAgICAgICBtYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBlbmRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dDtcclxuICAgICAgICBzcXVlZXplZFRleHRMZW5ndGggPSBtYXJrVGVtcC5zcXVlZXplZFRleHRMZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChwICE9PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgcCA9IC0xO1xyXG4gICAgICAgICAgcCA9IHRyaW1tZWRTZWxlY3Rpb25UZXh0LmluZGV4T2Yoc3F1ZWV6ZWRUZXh0LCBwICsgMSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IHAgKyBzcXVlZXplZFRleHRMZW5ndGg7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucy5wb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMScpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgdGhpcy5tYXhQb3NpdGlvbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKHBvc2l0aW9ucykge1xyXG4gICAgbGV0IGwgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBwb3MsIHN0YXJ0LCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcG9zID0gcG9zaXRpb25zW2xdO1xyXG4gICAgICBzdGFydCA9IHBvc1swXTtcclxuXHJcbiAgICAgIGlmICh0ZW1wW3N0YXJ0XSkgdGVtcC5zcGxpY2Uoc3RhcnQgKyAxLCAwLCBwb3MpO1xyXG4gICAgICBlbHNlIHRlbXBbc3RhcnRdID0gcG9zO1xyXG4gICAgfVxyXG4gICAgdCA9IHRlbXAubGVuZ3RoO1xyXG4gICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW107XHJcblxyXG4gICAgZm9yICg7IGkgPCB0OyBpKyspXHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaCh0ZW1wW2ldKTtcclxuICB9XHJcbiAgcG9zdHBvbmVPdmVybGFwcGluZ3MoKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIHBvczEsIHBvczIsIGksIG0xLCBtMiwgaWQxLCBpZDIsIGlkO1xyXG5cclxuICAgIGlmIChwID4gMSkge1xyXG4gICAgICB3aGlsZSAocC0tID4gMSkge1xyXG4gICAgICAgIHBvczEgPSBwb3NpdGlvbnNbcCAtIDFdO1xyXG4gICAgICAgIHBvczIgPSBwb3NpdGlvbnNbcF07XHJcbiAgICAgICAgbTEgPSBwb3MxWzJdO1xyXG4gICAgICAgIG0yID0gcG9zMlsyXTtcclxuICAgICAgICBpZDEgPSBtMS5pZDtcclxuICAgICAgICBpZDIgPSBtMi5pZDtcclxuXHJcbiAgICAgICAgaWYgKGlkMSA9PT0gaWQyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHBvczFbMV0gPiBwb3MyWzBdICYmIHBvczFbMF0gPCBwb3MyWzFdKSB7XHJcblxyXG4gICAgICAgICAgaWYgKGlkMSA8IGlkMikge1xyXG4gICAgICAgICAgICBpZCA9IGlkMjtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTIpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQxO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMSk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IHA7IGkrKylcclxuICAgICAgICB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGN1dE91dEZvcihpZCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShwLS0pIHtcclxuICAgICAgaWYgKHBvc2l0aW9uc1twXVsyXS5pZCA9PT0gaWQpXHJcbiAgICAgICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnNwbGljZShwLCAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9zdHBvbmUobWFyaykge1xyXG4gICAgbGV0IHF1ZXVlID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gcXVldWUubGVuZ3RoLFxyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKHF1ZXVlW2xdWzBdID09PSBtYXJrKSB7XHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbHJlYWR5SW5jbHVkZWQpXHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbbWFya10pO1xyXG4gIH1cclxuICBmaW5kUG9zc2libGVFeHRyZW1hKCkge1xyXG4gICAgbGV0IG5vZGVzID0gdGhpcy5ib2R5VGV4dE5vZGVzLFxyXG4gICAgICAgIG4gPSBub2RlcyA/IG5vZGVzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgaW5kaWNlcyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwaGFzZSA9IHRoaXMucGhhc2UsXHJcbiAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlID0gW10sXHJcbiAgICAgICAgc2F0aXNmaWVkID0gW10sXHJcbiAgICAgICAgaSA9IDAsIGNoYXJzID0gMCxcclxuICAgICAgICBuZXh0U3RhcnRGb3VuZCwgZW5kaW5nc0luVGhpc05vZGUsXHJcbiAgICAgICAgbm9kZSwgbm9kZXNUZXh0LCBub2Rlc1RleHRMZW5ndGgsXHJcbiAgICAgICAgbWFyaywgZGlmZiwgbCwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIGUsIGYsIGlkLCBwLCBxLCB4LCBtLFxyXG4gICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQsIHN0YXJ0Rm91bmRGb3IsIHBvc3Rwb25lZCwgaGFzRW5kaW5nc0luVGhpc05vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBub2Rlc1RleHQgPSB0aGlzLnNxdWVlemUobm9kZS5kYXRhKTtcclxuICAgICAgbm9kZXNUZXh0TGVuZ3RoID0gbm9kZXNUZXh0Lmxlbmd0aDtcclxuICAgICAgY2hhcnMgKz0gbm9kZXNUZXh0TGVuZ3RoO1xyXG4gICAgICBsID0gaW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSBbXTtcclxuICAgICAgcG9zdHBvbmVkID0gW107XHJcbiAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBzdGFydFBvc2l0aW9uID0gaW5kaWNlc1tsXVswXTtcclxuICAgICAgICBlbmRQb3NpdGlvbiA9IGluZGljZXNbbF1bMV07XHJcbiAgICAgICAgbWFyayA9IGluZGljZXNbbF1bMl07XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yIHx8IFtdO1xyXG4gICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvciA9IG1hcmsudGVtcC5lbmRGb3VuZEZvciB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIW1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICBjaGFycyA+IHN0YXJ0UG9zaXRpb24gJiZcclxuICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoIDwgbWFyay50ZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGhhc0VuZGluZ3NJblRoaXNOb2RlICYmIGhhc0VuZGluZ3NJblRoaXNOb2RlLmlkIDwgbWFyay5pZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxICYmIGlkICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5wdXNoKHsgbm9kZTogbm9kZSwgcG9zOiBpIH0pO1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLnB1c2goc3RhcnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgc3RhcnRGb3VuZEZvci5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgIW1hcmsudGVtcC5lbmRGb3VuZEZvci5pbmNsdWRlcyhlbmRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIChjaGFycyAtIGVuZFBvc2l0aW9uKSA+PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5taW4uYXBwbHkobnVsbCwgc3RhcnRGb3VuZEZvcikgPCBpZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQgPSB0aGlzLmZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBlbmRQb3NpdGlvbiAtIChjaGFycyAtIG5vZGVzVGV4dExlbmd0aCkpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVGb2N1c09mZnNldHMucHVzaChwb3NzaWJsZUZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dID0ge1xyXG4gICAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiBwb3NzaWJsZUZvY3VzT2Zmc2V0LFxyXG4gICAgICAgICAgICAgIHBvczogaVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBjYWNoZS5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgICAgIHNhdGlzZmllZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBtYXJrO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCkgZm9yICh4ID0gMDsgeCA8IHA7IHgrKykgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW3hdKTtcclxuXHJcbiAgICAgIGlmIChjaGFycyA+IHRoaXMubWF4UG9zaXRpb24pIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKHBoYXNlICE9PSAxIHx8IHRoaXMub29tKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBtYXJrID0gdGhpcy5tYXJrc1tpXTtcclxuICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhtYXJrLmlkKSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8yJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBydWxlT3V0TXVsdGlwbGVzKCkge1xyXG4gICAgbGV0IGNhY2hlID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gY2FjaGUubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIHBvc3NpYmxlU3RhcnROb2RlcywgcCwgbm9kZSwgcGFyZW50LCBncmFtcGEsIGdyYW5kZ3JhbXBhLCBncmFuZGdyYW5kZ3JhbXBhLCBtYXRjaGVzLCBmYWlsZWQsIHEsXHJcbiAgICAgICAgcG9zc2libGVFbmRzLCBzdGFydEZvdW5kRm9yLCBjb25kcywgc3RhcnRPZmZzZXQsIHRlbXAsIHRleHRMZW5ndGgsIHN0YXJ0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IGNhY2hlW2ldO1xyXG4gICAgICBtYXRjaGVzID0gW107XHJcbiAgICAgIGZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICB0ZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXMgPSB0ZW1wLnBvc3NpYmxlU3RhcnROb2RlcztcclxuICAgICAgcG9zc2libGVFbmRzID0gdGVtcC5wb3NzaWJsZUVuZHM7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSB0ZW1wLnN0YXJ0Rm91bmRGb3JcclxuICAgICAgcCA9IHBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGg7XHJcbiAgICAgIGNvbmRzID0gbWFyay5jb25kcztcclxuICAgICAgc3RhcnRPZmZzZXQgPSBjb25kcy5vO1xyXG4gICAgICB0ZXh0TGVuZ3RoID0gdGVtcC50ZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgICAgd2hpbGUgKHAtLSkge1xyXG4gICAgICAgICAgbm9kZSA9IHBvc3NpYmxlU3RhcnROb2Rlc1twXS5ub2RlO1xyXG4gICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG5cclxuICAgICAgICAgIGlmICghZ3JhbXBhIHx8IGNvbmRzLnAzID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHAgPSAwO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAxKSBwID0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcSA9IG1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgcGFyZW50ID0gcG9zc2libGVTdGFydE5vZGVzW3FdLm5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbmRncmFtcGEgPSBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgKCFncmFuZGdyYW5kZ3JhbXBhIHx8IGNvbmRzLnA0ID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFuZGdyYW1wYSwgZ3JhbmRncmFtcGEpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAocG9zc2libGVFbmRzW3N0YXJ0Rm91bmRGb3JbcV1dLm9mZnNldCAtIHN0YXJ0T2Zmc2V0KSA9PT0gdGV4dExlbmd0aFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHAgPSBxO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcCkgcCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgcCA9IDA7XHJcblxyXG4gICAgICBwID0gcCB8fCAwO1xyXG5cclxuICAgICAgc3RhcnQgPSBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzW3BdO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlID0gc3RhcnQubm9kZTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uID0gc3RhcnQucG9zO1xyXG5cclxuICAgICAgdGhpcy5zZXRNYXRjaGluZ0VuZChtYXJrLCBwKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXRNYXRjaGluZ0VuZChtYXJrLCBwKSB7XHJcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yW3BdLFxyXG4gICAgICAgIGVuZCA9IG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl07XHJcblxyXG4gICAgbWFyay50ZW1wLmVuZE5vZGUgPSBlbmQubm9kZTtcclxuICAgIG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb24gPSBlbmQucG9zO1xyXG4gICAgbWFyay50ZW1wLmZvY3VzT2Zmc2V0ID0gZW5kLm9mZnNldDtcclxuICB9XHJcbiAgc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbWFyay5jb25kcyxcclxuICAgICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW1wYSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMCxcclxuICAgICAgICBzdGFydE9mZnNldCA9IGRlc2NyaXB0aW9uLm8sXHJcbiAgICAgICAgcmVsZXZhbnROb2RlVGV4dCA9IG5vZGUuZGF0YS5zdWJzdHJpbmcoc3RhcnRPZmZzZXQpLnRyaW0oKSxcclxuICAgICAgICBsID0gcmVsZXZhbnROb2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgbWFya1RleHQgPSBtYXJrLnRlbXAudHJpbW1lZFRleHQsXHJcbiAgICAgICAgbSA9IG1hcmsudGVtcC50cmltbWVkVGV4dExlbmd0aCxcclxuICAgICAgICB0ZXh0c01hdGNoO1xyXG5cclxuICAgIGlmIChtIDw9IGwpIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkpID09PSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkpID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRleHRzTWF0Y2ggJiZcclxuICAgICAgKHBhcmVudE5vZGUubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4xIHx8IChkZXNjcmlwdGlvbi5uMSA9PT0gJ1RNJyAmJiBwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSkgJiZcclxuICAgICAgKCFncmFtcGEgfHwgZ3JhbXBhLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMikgJiZcclxuICAgICAgdGhpcy53aGljaENoaWxkKHBhcmVudE5vZGUsIG5vZGUpID09PSBkZXNjcmlwdGlvbi5wMVxyXG4gICAgKTtcclxuICB9XHJcbiAgZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIG4pIHtcclxuICAgIGxldCBub2RlVGV4dCA9IG5vZGUuZGF0YSxcclxuICAgICAgICBsID0gbm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBjb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zcXVlZXplKG5vZGVUZXh0W2ldKSkgY291bnRlcisrO1xyXG5cclxuICAgICAgaWYgKGNvdW50ZXIgPT09IG4pIHJldHVybiAoL1xccyQvLnRlc3QobWFyay50ZXh0KSA/IGkgKyAyIDogaSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXN0b3JlUmFuZ2VzKCkge1xyXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBtYXJrcyA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3RhcnQsIGVuZCwgZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBzdGFydCA9IG1hcmtUZW1wLnN0YXJ0Tm9kZTtcclxuICAgICAgZW5kID0gbWFya1RlbXAuZW5kTm9kZTtcclxuICAgICAgZm9jdXNPZmZzZXQgPSBtYXJrVGVtcC5mb2N1c09mZnNldDtcclxuXHJcbiAgICAgIGlmICghc3RhcnQgfHwgIWVuZCB8fCAhKHR5cGVvZiBmb2N1c09mZnNldCA9PT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMycpIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCBtYXJrLmNvbmRzLm8pO1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKGVuZCwgZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAvL3NlbGVjdGlvbi5yZXN1bWUocmFuZ2UpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnJlY29sbGVjdE5vZGVzKG1hcmspO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIG1hcmsudGVtcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Qm9keVNlbGVjdGlvbihlbCkge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCsrO1xyXG5cclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oZWwpO1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uLnRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25UcmlhbCA8IDQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNldEJvZHlTZWxlY3Rpb24oZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gJyAnO1xyXG4gICAgICAgICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gW107XHJcbiAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMuc3F1ZWV6ZSh0aGlzLnNlbGVjdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSB0aGlzLnNlbGVjdGlvbi5ub2RlcyA/IHRoaXMuc2VsZWN0aW9uLm5vZGVzLnNsaWNlKCkgOiBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc3F1ZWV6ZSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykgPyB0ZXh0LnJlcGxhY2UoL1xcdHxcXHN8XFxufFxcci9nLCAnJykgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgY29udGV4dCkge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgY2hpbGRyZW4gPSBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0ICAgIGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHQgICAgcG9zID0gMCwgaSA9IDAsIGN1cnJlbnRDaGlsZDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgY3VycmVudENoaWxkID0gY2hpbGRyZW5baV07XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudENoaWxkID09PSBjaGlsZCkgcmV0dXJuIHBvcztcclxuXHJcblx0XHRcdGlmIChjb250ZXh0KSB7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZC5ub2RlTmFtZSA9PT0gY29udGV4dCkgcG9zKys7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgIGlmICghKGN1cnJlbnRDaGlsZC5ub2RlVHlwZSA9PT0gMyAmJiAhY3VycmVudENoaWxkLmRhdGEpKSBwb3MrKztcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgSW1tdXRSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHRoaXMucmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgY29uc3QgbWFya3MgPSB0aGlzLm1hcmtzID0gWy4uLmVudHJ5Lm1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbTEuaWQgLSBtMi5pZCldO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc0luQ2h1bmtzKG1hcmtzLCB0aGlzLnJlc3RvcmVSYW5nZSwgdGhpcy5yZXBvcnQpO1xyXG4gIH1cclxuXHJcbiAgcmVzdG9yZVJhbmdlKG1hcmspIHtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLy8udXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC8vLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC8vLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7IHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTsgfSBjYXRjaChlKSB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG5vZGUpIHtcclxuICAgIHRoaXMuc2VsZi5zZWxlY3RBbGxDaGlsZHJlbihub2RlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKHNlbGVjdGlvbikge1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5zZWxmID0gc2VsZWN0aW9uO1xyXG4gICAgZWxzZSBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgbGV0IHByb3BzID0gWydmb2N1c05vZGUnLCAnYW5jaG9yTm9kZScsICdmb2N1c09mZnNldCcsICdhbmNob3JPZmZzZXQnXSxcclxuICAgICAgICBpID0gcHJvcHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHRoaXNbcHJvcHNbaV1dID0gc2VsZWN0aW9uW3Byb3BzW2ldXTtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICB0aGlzLnNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgYWRqdXN0KCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXMgPSB0aGlzLmZvY3VzTm9kZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSkgdGhpcy5yZXZlcnNlKGFuY2hvciwgZm9jdXMpO1xyXG4gICAgZWxzZSB0aGlzLm5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgbm9ybWFsaXplKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG5cclxuICAgICAgICBmaXJzdFRleHROb2RlID0gdGhpcy5ub2Rlc1swXSxcclxuICAgICAgICBsYXN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgaWYgKGZpcnN0VGV4dE5vZGUgIT09IGFuY2hvcilcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQoZmlyc3RUZXh0Tm9kZSwgZmlyc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGZpcnN0VGV4dE5vZGUuZGF0YS50cmltTGVmdCgpLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGxhc3RUZXh0Tm9kZSAhPT0gZm9jdXMpXHJcbiAgICAgIHJhbmdlLnNldEVuZChsYXN0VGV4dE5vZGUsIGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIChsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBsYXN0VGV4dE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGgpKTtcclxuICB9XHJcbiAgY29sbGVjdE5vZGVzKHdob2xlRG9jdW1lbnQpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpO1xyXG4gICAgY29uc3QgZmlsdGVyID0gd2hvbGVEb2N1bWVudCA/XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGYuaXNTZWxlY3RhYmxlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpIDpcclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKTtcclxuXHJcbiAgICBjb25zdCBpdGVyYXRvciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoY29udGFpbmVyLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwge1xyXG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGxldCBub2RlcyA9IFtdLFxyXG4gICAgICAgIHBhcmVudE5vZGVzID0gW10sXHJcblxyXG4gICAgICAgIHRleHROb2RlLCBwYXJlbnQsIGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgd2hpbGUodGV4dE5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSB7XHJcbiAgICAgIG5vZGVzLnB1c2godGV4dE5vZGUpO1xyXG4gICAgfVxyXG4gICAgbm9kZXMgPSB0aGlzLnRyaW1TZWxlY3Rpb24obm9kZXMpO1xyXG4gICAgLy90aGlzLm5vZGVzID0gdGhpcy5vcHRpb25zLnByb2dyYW1tYXRpY2FsbHkgPyB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2RlcykgOiBub2RlcztcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcyk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGVzID0gdGhpcy5jb2xsZWN0UGFyZW50Tm9kZXModGhpcy5ub2Rlcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlY29sbGVjdE5vZGVzKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtXcmFwcGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRePVwiJyArIG1hcmsuaWQgKyAnX1wiXScpKTtcclxuICAgIGNvbnN0IG0gPSBtYXJrV3JhcHBlcnMubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV3U2VnbWVudCA9IG1hcmtXcmFwcGVycy5tYXAoZWwgPT4gZWwuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgY29uc3QgcHJldiA9IG1hcmtXcmFwcGVyc1swXS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBjb25zdCBuZXh0ID0gbWFya1dyYXBwZXJzW20tMV0ubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb247XHJcbiAgICBjb25zdCBlbmQgPSBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uO1xyXG5cclxuICAgIGlmIChwcmV2ICYmIHByZXYubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC51bnNoaWZ0KHByZXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnB1c2gobmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgLi4ubmV3U2VnbWVudCk7XHJcbiAgfVxyXG4gIHRyaW1TZWxlY3Rpb24obm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGxldCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGZpcnN0Tm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmFuY2hvck5vZGUgPT09IGZpcnN0Tm9kZSAmJiBmaXJzdE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGggPD0gc2VsZWN0aW9uLmFuY2hvck9mZnNldCkge1xyXG4gICAgICAgIG5vZGVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5mb2N1c05vZGUgPT09IGxhc3ROb2RlICYmIHRoaXMuaXNCbGFuayhsYXN0Tm9kZS5kYXRhLnN1YnN0cigwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKSkge1xyXG4gICAgICAgIG5vZGVzLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIHJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgcmcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZShyZyk7XHJcblxyXG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgIHJnLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICAgIHJldHVybiAhIXNlbC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHRoaXMucmFuZ2UpO1xyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgY29sbGVjdFBhcmVudE5vZGVzKG5vZGVzKSB7XHJcbiAgICBsZXQgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBwYXJlbnRzID0gW10sIGkgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBwYXJlbnRzLnB1c2gobm9kZXNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgfVxyXG4gIHJldHJpZXZlVGV4dCgpIHtcclxuICAgIGxldCByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbm9kZXMgPSB0aGlzLm5vZGVzLFxyXG4gICAgICAgIGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbm9kZVRleHRzID0gW10sXHJcbiAgICAgICAgdGV4dDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgbm9kZVRleHRzLnB1c2gobm9kZXNbaV0uZGF0YSk7XHJcblxyXG4gICAgbCAtPSAxO1xyXG5cclxuICAgIGlmIChub2RlVGV4dHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdGhpcy5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgIC8vbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCB0aGlzLmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRleHQgPSB0aGlzLnRleHQgPSBub2RlVGV4dHMuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIG5vZGUxID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgbm9kZTIgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChub2RlMSA9IG5vZGUxLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUyKSAmIDB4MTApID09PSAweDEwKVxyXG4gICAgICAgICAgcmV0dXJuIG5vZGUxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuICByZXZlcnNlKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCByYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChmb2N1cywgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChhbmNob3IsIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoc2VsZWN0aW9uKS5hZGp1c3Qoc2VsZWN0aW9uLmFuY2hvck5vZGUsIHNlbGVjdGlvbi5mb2N1c05vZGUpO1xyXG4gIH1cclxuICByZWR1Y2VUb09uZVJhbmdlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZUNvdW50ID0gc2VsZWN0aW9uLnJhbmdlQ291bnQsXHJcbiAgICAgICAgcmFuZ2UwID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBsYXN0UmFuZ2U7XHJcblxyXG4gICAgaWYgKHJhbmdlQ291bnQgPCAyKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBsYXN0UmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdChyYW5nZUNvdW50IC0gMSk7XHJcblxyXG4gICAgcmFuZ2UwLnNldFN0YXJ0KHJhbmdlMC5zdGFydENvbnRhaW5lciwgcmFuZ2UwLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlMC5zZXRFbmQobGFzdFJhbmdlLmVuZENvbnRhaW5lciwgbGFzdFJhbmdlLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGhhc05vcm1hbFBhcmVudChub2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YWcgPSBwYXJlbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRhZyAhPT0gJ1NDUklQVCcgJiYgdGFnICE9PSAnU1RZTEUnICYmIHRhZyAhPT0gJ0xJTksnICYmIHRhZyAhPT0gJ01FVEEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0JBU0UnICYmIHRhZyAhPT0gJ1RJVExFJyAmJiB0YWcgIT09ICdOT1NDUklQVCcgJiZcclxuICAgICAgdGFnICE9PSAnSU1HJyAmJiB0YWcgIT09ICdJRlJBTUUnICYmIHRhZyAhPT0gJ0VNQkVEJyAmJiB0YWcgIT09ICdQQVJBTScgJiZcclxuICAgICAgdGFnICE9PSAnVklERU8nICYmIHRhZyAhPT0gJ0FVRElPJyAmJiB0YWcgIT09ICdTT1VSQ0UnICYmIHRhZyAhPT0gJ1RSQUNLJyAmJlxyXG4gICAgICB0YWcgIT09ICdDQU5WQVMnICYmIHRhZyAhPT0gJ01BUCcgJiYgdGFnICE9PSAnQVJFQScgJiZcclxuICAgICAgdGFnICE9PSAnTUFUSCcgJiYgdGFnICE9PSAnT0JKRUNUJyAmJlxyXG4gICAgICAhdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnc3ZnJykgLy8mJlxyXG4gICAgICAvLyF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdtYXRoJylcclxuICAgICk7XHJcbiAgfVxyXG4gIGlzQ2hpbGRPZihub2RlLCBub2RlVHlwZSkge1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5vZGVUeXBlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaXNCbGFuayhub2RlKSB7XHJcbiAgICBsZXQgdGV4dDtcclxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChub2RlICYmIHR5cGVvZiBub2RlLmRhdGEgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZS5kYXRhO1xyXG4gICAgICBlbHNlIHRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dC5zZWFyY2goL1teXFxzXFxuXFxyXFx0XS9nKSA9PT0gLTE7XHJcbiAgfVxyXG4gIGlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcG9zaXRpb24gPSBhbmNob3IuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvc2l0aW9uID09PSAyIHx8XHJcbiAgICAgIHBvc2l0aW9uID09PSAxMCB8fFxyXG4gICAgICAoIXBvc2l0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKTtcclxuICB9XHJcbiAgaXNTaW1wbGUoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvck5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1c05vZGUgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGFuY2hvck5vZGUgPT09IGZvY3VzTm9kZSAmJlxyXG4gICAgICBhbmNob3JOb2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgICghYW5jaG9yTm9kZS5uZXh0U2libGluZyB8fCAoYW5jaG9yTm9kZS5uZXh0U2libGluZy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1c05vZGUpICE9PSA0KSkpO1xyXG4gIH1cclxuICBpc1NlbGVjdGFibGUobm9kZSkge1xyXG4gICAgdGhpcy5yYW5nZS5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgcmV0dXJuICEhdGhpcy5zZWxmLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0ZScsXHJcbiAgICAgICdhZGRlZDpub3RlJzogJ29uTm90ZUFkZGVkJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdvbkxhc3ROb3RlUmVtb3ZlZCcsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtSZW1vdmVkJ1xyXG4gICAgfVxyXG5cdH0sXHJcbiAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgZWw6IG51bGwsXHJcblxyXG4gIGF0dGFjaGVkOiBmYWxzZSxcclxuXHJcbiAgYnV0dG9uczoge1xyXG4gICAgbm90ZXM6IHtcclxuICAgICAgZWw6IG51bGwsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBzaG93bjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBib29rbWFyazoge1xyXG4gICAgICBlbDogbnVsbCxcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJvb2ttYXJrOiBmYWxzZSxcclxuICBub3RlczogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgfSxcclxuICB1cGRhdGVTdGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgdGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgPSBibWljb247XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdub3RlaWNvbicpLnRoZW4obm90ZWljb24gPT4gdGhpcy5idXR0b25zLm5vdGVzLnNob3cgPSBub3RlaWNvbik7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9LFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IHNob3VsZEF0dGFjaCA9XHJcbiAgICAgICh0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyAmJiB0aGlzLmJvb2ttYXJrKSB8fFxyXG4gICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgaWYgKHNob3VsZEF0dGFjaCkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hdHRhY2hlZCAmJiAhc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgIGlmICghdGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG11aScpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgaWYgKGJ0bi5zaG93ICYmICFidG4uc2hvd24gJiYgdGhpc1tiXSkgdGhpcy5hZGRCdXR0b24oYik7XHJcbiAgICAgIGVsc2UgaWYgKGJ0bi5zaG93biAmJiAoIXRoaXNbYl0gfHwgIWJ0bi5zaG93KSkgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWJ1dHRvbnMubm90ZXMuc2hvd24gJiYgIWJ1dHRvbnMuYm9va21hcmsuc2hvd24pIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dGFjaGVkID0gdHJ1ZTtcclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbnNbYl0uc2hvd24pIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBub3Rlc0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ub3Rlcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVzdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICBub3Rlc0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZXMnKTtcclxuICAgIGJvb2ttYXJrQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2JtX3Njcm9sbCcpO1xyXG4gIH0sXHJcbiAgYWRkQnV0dG9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gYnRuLmhhbmRsZXIgPSB0eXBlID09PSAnbm90ZXMnID9cclxuICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdG11aS5hcHBlbmRDaGlsZChidG4uZWwpO1xyXG4gICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICBidG4uZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcblxyXG4gICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgYnRuLnNob3duID0gZmFsc2U7XHJcblxyXG4gICAgYnRuLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuLmhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgX1NUT1JFLmdldCgndG11aXBvcycpXHJcbiAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgfSxcclxuICBvbk5vdGVBZGRlZCgpIHtcclxuICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uQm9va21hcmtBZGRlZCgpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uQm9va21hcmtSZW1vdmVkKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZXMnKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3Njcm9sbC10by1ib29rbWFyaycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2luamVjdGlvbicsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjb3B5Om1hcmtzJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nLFxyXG4gICAgICAnbG9va3VwOndvcmQnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcycsXHJcblxyXG4gICAgICAvLyBAUkVTVE9SRVJcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJyxcclxuICBcdFx0J2ZhaWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLFxyXG4gICAgICAnY2FuY2VsZWQ6c2F2ZS1hZnRlci1jYW5jZWxlZC1yZXN0b3JhdGlvbidcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=