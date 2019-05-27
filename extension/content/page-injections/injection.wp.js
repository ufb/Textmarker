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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeVNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJyZW5hbWVFbnRyeSIsImVudHJ5Iiwib2xkTmFtZSIsInNldFN5bmNGb3JFbnRyeSIsInN5bmNlZCIsInJlbW92ZUVudHJ5IiwiZGVsZXRlZEVudHJ5IiwiaGFzT3duUHJvcGVydHkiLCJhZGRFbnRyaWVzIiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInNldFBhZ2VQYXJhbXMiLCJ3aW5kb3ciLCJwYXJlbnQiLCJVUkwiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJlbWl0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJib29rbWFyayIsImdldEVsZW1lbnRCeUlkIiwib25FbnRyaWVzRm91bmQiLCJ1cGRhdGVFbnRyeVN0b3JhZ2UiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwidXBkYXRlTmFtZVN0b3JhZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJmaXJzdEVudHJ5IiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvU3RyaW5nIiwiX0JPT0tNQVJLIiwibWFyayIsImFuY2hvciIsIndyYXBwZXJzIiwidyIsImtleURhdGEiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYWN0aXZhdGUiLCJvbiIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGlnaGxpZ2h0IiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0Q29udGVudCIsInNpbGVudCIsImltbXV0YWJsZSIsInNhdmUiLCJyZXF1ZXN0IiwiZ3JhbnRlZCIsInN1YiIsImkxOG4iLCJnZXRNZXNzYWdlIiwicHJvbXB0IiwicmV0cmlldmVFbnRyeSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJjb3B5IiwiZmluZE1hcmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0cmltIiwic3RvcmUiLCJvcmRlciIsIm9yZGVyTWFya3NWaXN1YWxseSIsInJlY3JlYXRlIiwiX1NFTEVDVElPTiIsIm9uRmluaXNoZWRSZXN0b3JhdGlvbiIsInN1YnN0cmluZyIsIl9HTE9CQUxfU0VUVElOR1MiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsImdvdG9NYXJrIiwic29ydEJ5SWQiLCJzY3JvbGxUb0Jvb2ttYXJrIiwiYWRkTm90ZSIsInNhdmVOb3RlIiwiYXJlYV9oaXN0b3J5IiwibWFya0VsZW1lbnRzIiwicG9zIiwiaW5kaWNhdGVNYXJrIiwiZ290b05leHRNYXJrIiwiZGlyIiwicXVlcnlTZWxlY3RvckFsbCIsInRtIiwidG1zIiwic2V0VGltZW91dCIsInNldCIsInJlbW92ZUJvb2ttYXJrIiwibWFyazEiLCJtYXJrMiIsIm0xIiwibTIiLCJiYjEiLCJiYjIiLCJ0b3AxIiwidG9wMiIsIm1hcCIsIndyYXBwZXJzMSIsIncxIiwiaWQxIiwid3JhcHBlcnMyIiwiaWQyIiwidzIiLCJvbk1hcmtlcktleSIsIm9uSG90a2V5IiwiY29sbGVjdE1hcmtzIiwibGFzdCIsIkRhdGUiLCJnZXRUaW1lIiwiYm9va21hcmtlZCIsInRpdGxlIiwiY291bnQiLCJmaXJzdCIsImtEIiwib25IYXNoQ2hhbmdlIiwiY29sb3IiLCJCT0RZIiwiRE9NIiwiY2xpY2siLCJrZXl1cCIsIm1vdXNlZG93biIsInRvdWNoc3RhcnQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsIm1hcmtDbGlja0hhbmRsZXIiLCJ2aXNpYmxlIiwicmVjZW50bHlVcGRhdGVkIiwic2V0dGluZ3NNb2RlIiwidCIsInNpemUiLCJoIiwiZHJhZ0RYIiwiZHJhZ0RZIiwibXV0YXRpb25PYnNlcnZlciIsImFkanVzdE5vdGVEYXRhT2JqZWN0IiwiY3JlYXRlTm90ZUVsZW1lbnQiLCJhZGRMaXN0ZW5lcnMiLCJhZGRNYXJrTGlzdGVuZXJzIiwibm90ZURhdGEiLCJoZWFkZXIiLCJhY3Rpb25zIiwiZGVsIiwiZ2VhciIsInBhbGV0dGUiLCJ0ZXh0RWxlbWVudCIsImRlbFRleHQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5UZXh0IiwiZ2VhclRleHQiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImF0dGVtcHRVcGRhdGUiLCJfZGVsZXRlIiwiaGlkZSIsInJlbW92ZU1hcmtMaXN0ZW5lcnMiLCJmb3JjZSIsImlubmVyV2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiZ2V0UG9zaXRpb24iLCJvZmZzZXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbm5lY3RNdXRhdGlvbk9ic2VydmVyIiwiYnJpbmdVcEZyb250IiwiekluZGV4IiwiZGlzY29ubmVjdCIsInRvZ2dsZSIsInRvZ2dsZVBhbGV0dGUiLCJjaGFuZ2VDb2xvciIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRhcmVhIiwiY29uZmlnIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwic2F2ZVNpemUiLCJvYnNlcnZlIiwicmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib25EcmFnU3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwib25EcmFnIiwib25EcmFnRW5kIiwibXV0YXRpb25zTGlzdCIsIndpZHRoIiwibm90ZXMiLCJkcmFnSGFuZGxlciIsImRyYWdTdG9wSGFuZGxlciIsInVwZGF0ZVRyYW5zcCIsIl9OT1RFIiwicmVzdG9yZSIsImFkZEFuZFNob3ciLCJyZW1vdmVOb3RlU3RvcmFnZSIsImlzRW1wdHkiLCJyZW1vdmVOb3RlIiwidG9nZ2xlQWxsIiwibWV0aCIsImNvbmRpdGlvbiIsImJvZHlDbGFzc2VzIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwic3RhcnREcmFnZ2luZ05vdGUiLCJlbWl0RHJhZ0V2ZW50Iiwic3RvcERyYWdnaW5nTm90ZSIsImRvYyIsInNlbmROb3Rlc1N0YXRlIiwiYXV0b1BhdXNlIiwia2V5ZG93biIsInNlbGVjdGlvbmNoYW5nZSIsInNoaWZ0U2Vuc2l0aXZlS2V5cyIsImtleUNvZGVNYXAiLCJpc0VkaXRhYmxlIiwidGFnTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImRlbGVnYXRlIiwidG9Mb3dlckNhc2UiLCJrZXlDb2RlIiwibW9kS2V5IiwibWV0YUtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsImFycm93S2V5cyIsImxvY2tlZEFjdGlvbnMiLCJmdW5jdGlvbktleXMiLCJkZWZhdWx0TWFya2VycyIsIm9yaWdLZXkiLCJpc01hcmtlcktleSIsImlzQ3VzdG9tTWFya2VyS2V5Iiwic2V0dGluZyIsInNob3J0Y3V0IiwiczEiLCJzMiIsInJlc3RvcmVkIiwiZmFpbGVkIiwiZmFpbHVyZVJlcG9ydCIsIkltbXV0UmVzdG9yZXIiLCJSZXN0b3JlciIsInJldHJ5Iiwib25GYWlsdXJlIiwicmVwb3J0IiwiZ2V0UmVwb3J0IiwibXNnIiwicmVhc29uIiwiUmVzdG9yZXJCYXNlIiwiYXJlYSIsInByb2MiLCJjYiIsInJlYyIsImV4cGlyZSIsImxsIiwidGVtcCIsInF1ZXVlIiwiY2FjaGUiLCJwaGFzZSIsInNlbGVjdGlvblRyaWFsIiwiY2h1bmtEdXJhdGlvbiIsIl90aW1lciIsIm9vbSIsImluaXQiLCJub3ciLCJwb3N0cG9uZWQiLCJjb252ZXJ0RGVzY3JpcHRpb24iLCJjcmVhdGVUZW1wT2JqZWN0IiwiY29udmVydGVkQ29uZHMiLCJmaXJzdE5vZGVOYW1lIiwiZmlyc3RQYXJlbnROb2RlTmFtZSIsImZpcnN0VGV4dE5vZGVQb3NpdGlvbiIsImZpcnN0Tm9kZVBvc2l0aW9uIiwiZmlyc3RQYXJlbnROb2RlUG9zaXRpb24iLCJmaXJzdEdyYW1wYU5vZGVQb3NpdGlvbiIsInRyaW1tZWRUZXh0Iiwic3F1ZWV6ZWRUZXh0Iiwic3F1ZWV6ZSIsInRleHRMZW5ndGgiLCJ0cmltbWVkVGV4dExlbmd0aCIsInNxdWVlemVkVGV4dExlbmd0aCIsInBvc3NpYmxlUG9zaXRpb25zIiwicG9zc2libGVFbmRQb3NpdGlvbnMiLCJwb3NzaWJsZVN0YXJ0Tm9kZXMiLCJwb3NzaWJsZUVuZHMiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0cyIsInNvcnRRdWV1ZUJ5SWQiLCJzZXRCb2R5U2VsZWN0aW9uIiwiZ2V0VGV4dFBvc2l0aW9ucyIsInBvc3Rwb25lT3ZlcmxhcHBpbmdzIiwiZmluZFBvc3NpYmxlRXh0cmVtYSIsInJ1bGVPdXRNdWx0aXBsZXMiLCJyZXN0b3JlUmFuZ2VzIiwidGltZXIiLCJyZXMiLCJ0cmltbWVkU2VsZWN0aW9uVGV4dCIsImFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJlbmRQb3NpdGlvbnMiLCJtYXJrVGVtcCIsInNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwibWF4UG9zaXRpb24iLCJwb3NpdGlvbnMiLCJwb3MxIiwicG9zMiIsInBvc3Rwb25lIiwiY3V0T3V0Rm9yIiwiYWxyZWFkeUluY2x1ZGVkIiwiYm9keVRleHROb2RlcyIsInNhdGlzZmllZCIsImNoYXJzIiwibmV4dFN0YXJ0Rm91bmQiLCJlbmRpbmdzSW5UaGlzTm9kZSIsIm5vZGVzVGV4dCIsIm5vZGVzVGV4dExlbmd0aCIsImRpZmYiLCJmIiwicSIsInBvc3NpYmxlRm9jdXNPZmZzZXQiLCJzdGFydEZvdW5kRm9yIiwiaGFzRW5kaW5nc0luVGhpc05vZGUiLCJlbmRGb3VuZEZvciIsInNhdGlzZmllc0Rlc2NyaXB0aW9uIiwiZmluZEZvY3VzT2Zmc2V0IiwiZ3JhbmRncmFuZGdyYW1wYSIsIm1hdGNoZXMiLCJzdGFydE5vZGUiLCJzdGFydE5vZGVQb3NpdGlvbiIsInNldE1hdGNoaW5nRW5kIiwiZW5kTm9kZSIsImVuZE5vZGVQb3NpdGlvbiIsImZvY3VzT2Zmc2V0IiwiZGVzY3JpcHRpb24iLCJyZWxldmFudE5vZGVUZXh0IiwibWFya1RleHQiLCJ0ZXh0c01hdGNoIiwibm9kZVRleHQiLCJjb3VudGVyIiwidGVzdCIsImNyZWF0ZVJhbmdlIiwicmVjb2xsZWN0Tm9kZXMiLCJzbGljZSIsImNvbnRleHQiLCJjdXJyZW50Q2hpbGQiLCJwcm9jZXNzSW5DaHVua3MiLCJyZXN0b3JlUmFuZ2UiLCJnZXROb2RlIiwidGV4dE5vZGVQb3NpdGlvbiIsInJhbmdlQ291bnQiLCJkZWZpbmVkIiwicmVkdWNlVG9PbmVSYW5nZSIsInJldHJpZXZlVGV4dCIsImFkanVzdCIsInNlbGVjdEFsbENoaWxkcmVuIiwicHJvcHMiLCJpc1NpbXBsZSIsImZvY3VzIiwiaXNCYWNrd2FyZHMiLCJyZXZlcnNlIiwiZmlyc3RUZXh0Tm9kZSIsImxhc3RUZXh0Tm9kZSIsInRyaW1MZWZ0IiwidHJpbVJpZ2h0Iiwid2hvbGVEb2N1bWVudCIsImdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwiZmlsdGVyIiwiaXNTZWxlY3RhYmxlIiwiaXNCbGFuayIsImhhc05vcm1hbFBhcmVudCIsImNvbnRhaW5zTm9kZSIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfVEVYVCIsImFjY2VwdE5vZGUiLCJwYXJlbnROb2RlcyIsInRleHROb2RlIiwiZmlyc3ROb2RlIiwibGFzdE5vZGUiLCJuZXh0Tm9kZSIsInRyaW1TZWxlY3Rpb24iLCJyZWR1Y2VUb1NlbGVjdGFibGUiLCJjb2xsZWN0UGFyZW50Tm9kZXMiLCJtYXJrV3JhcHBlcnMiLCJuZXdTZWdtZW50IiwicHJldiIsIm5leHQiLCJuZXh0U2libGluZyIsInVuc2hpZnQiLCJhbmNob3JPZmZzZXQiLCJzdWJzdHIiLCJzZWwiLCJyZyIsInNlbGVjdE5vZGUiLCJwYXJlbnRzIiwibm9kZVRleHRzIiwiam9pbiIsIm5vZGUxIiwibm9kZTIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInJhbmdlMCIsImxhc3RSYW5nZSIsInRhZyIsInRvVXBwZXJDYXNlIiwiaXNDaGlsZE9mIiwic2VhcmNoIiwiYXR0YWNoZWQiLCJidXR0b25zIiwic2hvd24iLCJjcmVhdGVCdXR0b25zIiwidXBkYXRlU3RhdGUiLCJzaG91bGRBdHRhY2giLCJyZW5kZXIiLCJidG4iLCJiIiwiYWRkQnV0dG9uIiwicmVtb3ZlQnV0dG9uIiwidXBkYXRlUG9zaXRpb24iLCJ0bXVpIiwibm90ZXNCdXR0b24iLCJib29rbWFya0J1dHRvbiIsInR5cGUiLCJ0b2dnbGVOb3RlcyIsIm9uTm90ZUFkZGVkIiwib25MYXN0Tm90ZVJlbW92ZWQiLCJvbkJvb2ttYXJrQWRkZWQiLCJvbkJvb2ttYXJrUmVtb3ZlZCIsIk9ORU9GRiIsInZlcnNpb24iLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJ6IiwieSIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJzYiIsImNtIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJkb3dubG9hZCIsInNvcnRlZCIsInZpZXciLCJwcCIsImF1dG9jcyIsIm92ZXJ3cml0ZSIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiY2hhbmdlZE5vdGUiLCJlcnJvck5vdGUiLCJ2aXBOb3RlIiwiY3VzdG9tU2VhcmNoIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInRhYnMiLCJtZXRhIiwidW5mb2xkZWQiLCJ0YWdzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsInN5bmMiLCJNQVhfTE9HX0VOVFJJRVMiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidmFsIiwicHJvcCIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImRvbUV2ZW50cyIsImdlbmVyYWxIYW5kbGVyIiwiX2V4dHJhIiwiZXJyb3IiLCJmaWxlIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImFyZ3MiLCJ0b3BpYyIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJ0YWIiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiX0RFRkFVTFRfU1RPUkFHRSIsImFyZWFfcGFnZW5vdGVzIiwibG9jYWwiLCJzZXRBcmVhcyIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImxvZ3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBRVNBLEssR0FBQUEsVztRQUFPQyxlLEdBQUFBLDZCO1FBQWlCQyxPLEdBQUFBLG1CO1FBQVNDLE8sR0FBQUEsZTtRQUFTQyxVLEdBQUFBLHFCO1FBQVlDLE0sR0FBQUEsYTtRQUFRQyxLLEdBQUFBLFc7UUFBT0MsSyxHQUFBQSxpQjtRQUFPQyxhLEdBQUFBLHlCO1FBQWVDLFMsR0FBQUEsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hwRzs7cUJBRWUsSUFBSUosYUFBSixDQUFXO0FBQ3hCSyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsc0JBQWdCLGVBRGI7QUFFSCxpQ0FBMkIsY0FGeEI7QUFHSCxrQ0FBNEIsY0FIekI7QUFJSCw0QkFBc0IsaUJBSm5CO0FBS0gsNEJBQXNCLGFBTG5CO0FBTUgsdUJBQWlCLGFBTmQ7QUFPSCxvQkFBYztBQVBYO0FBREMsR0FEZ0I7QUFheEJDLEtBQUcsRUFBRSxXQWJtQjtBQWV4QkMsS0FBRyxFQUFFLEVBZm1CO0FBZ0J4QkMsYUFBVyxFQUFFLEVBaEJXO0FBa0J4QkMsUUFBTSxFQUFFLEtBbEJnQjtBQW1CeEJDLE1BQUksRUFBRUMsU0FuQmtCO0FBb0J4QkMsT0FBSyxFQUFFLElBcEJpQjtBQXFCeEI7QUFDQUMsU0FBTyxFQUFFLEVBdEJlO0FBdUJ4QkMsUUFBTSxFQUFFLEtBdkJnQjtBQXdCeEJDLGVBQWEsRUFBRSxLQXhCUztBQXlCeEJDLE1BQUksRUFBRSxFQXpCa0I7QUEwQnhCQyxXQUFTLEVBQUUsUUExQmE7QUEyQnhCQyxPQUFLLEVBQUUsS0EzQmlCO0FBNEJ4QkMsY0FBWSxFQUFFLEtBNUJVO0FBOEJ4QkMsVUE5QndCLHNCQThCYjtBQUNULFNBQUtDLFlBQUw7QUFDRCxHQWhDdUI7QUFrQ3hCQyxRQWxDd0Isb0JBa0NmO0FBQ1AsU0FBS1QsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLSCxJQUFMLEdBQVlDLFNBQVo7QUFDQSxTQUFLSyxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtKLEtBQUwsR0FBYSxJQUFiO0FBQ0QsR0F2Q3VCO0FBeUN4QlMsY0F6Q3dCLDBCQXlDVDtBQUFBOztBQUNiLFFBQUksQ0FBQyxLQUFLVCxLQUFOLElBQWVXLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQixFQUEyRCxPQUQ5QyxDQUNxRDs7QUFFbEUsU0FBS0MsR0FBTCxDQUFTLFVBQVQsRUFBcUJDLElBQXJCLENBQTBCLFVBQUFDLFFBQVEsRUFBSTtBQUNwQyxVQUFNQyxlQUFlLEdBQUdELFFBQVEsR0FBR0EsUUFBUSxDQUFDRSxPQUFaLEdBQXNCLElBQXREOztBQUNBLFVBQUlELGVBQUosRUFBcUI7QUFDbkIsYUFBSSxDQUFDZCxNQUFMLEdBQWNjLGVBQWUsQ0FBQ0UsTUFBaEIsS0FBMkIsTUFBekM7QUFDQSxhQUFJLENBQUNmLGFBQUwsR0FBcUJhLGVBQWUsQ0FBQ0csVUFBaEIsS0FBK0IsS0FBcEQ7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQW5EdUI7QUFxRHhCQyxhQXJEd0IsdUJBcURaQyxLQXJEWSxFQXFETEMsT0FyREssRUFxREk7QUFDMUIsUUFBSSxLQUFLeEIsSUFBTCxJQUFhLEtBQUtBLElBQUwsS0FBY3dCLE9BQTNCLElBQXNDLENBQUMsS0FBS3BCLE1BQWhELEVBQXdEO0FBQ3RELFdBQUtKLElBQUwsR0FBWXVCLEtBQUssQ0FBQ3ZCLElBQWxCOztBQUNBLFVBQUksS0FBS0csT0FBTCxDQUFhcUIsT0FBYixDQUFKLEVBQTJCO0FBQ3pCLGFBQUtyQixPQUFMLENBQWFvQixLQUFLLENBQUN2QixJQUFuQixJQUEyQnVCLEtBQTNCO0FBQ0EsZUFBTyxLQUFLcEIsT0FBTCxDQUFhcUIsT0FBYixDQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBN0R1QjtBQStEeEJDLGlCQS9Ed0IsMkJBK0RSRixLQS9EUSxFQStERDtBQUNyQixRQUFJLENBQUMsS0FBS25CLE1BQU4sSUFBZ0IsS0FBS0QsT0FBTCxDQUFhb0IsS0FBSyxDQUFDdkIsSUFBbkIsQ0FBcEIsRUFBOEM7QUFDNUMsV0FBS0csT0FBTCxDQUFhb0IsS0FBSyxDQUFDdkIsSUFBbkIsRUFBeUIwQixNQUF6QixHQUFrQ0gsS0FBSyxDQUFDRyxNQUF4QztBQUNEO0FBQ0YsR0FuRXVCO0FBcUV4QkMsYUFyRXdCLHVCQXFFWkMsWUFyRVksRUFxRUU7QUFDeEIsUUFBSSxLQUFLeEIsTUFBVCxFQUFpQixPQUFPLEtBQVA7QUFFakIsUUFBTUQsT0FBTyxHQUFHLEtBQUtBLE9BQXJCOztBQUNBLFNBQUssSUFBSUgsSUFBVCxJQUFpQkcsT0FBakIsRUFBMEI7QUFDeEIsVUFBSUEsT0FBTyxDQUFDMEIsY0FBUixDQUF1QjdCLElBQXZCLEtBQWdDQSxJQUFJLEtBQUs0QixZQUE3QyxFQUEyRDtBQUN6RCxlQUFPLEtBQUt6QixPQUFMLENBQWFILElBQWIsQ0FBUDtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxTQUFLQSxJQUFMLEdBQVlDLFNBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNELEdBakZ1QjtBQW1GeEI0QixZQW5Gd0Isc0JBbUZiM0IsT0FuRmEsRUFtRko7QUFDbEIsUUFBSSxDQUFDLEtBQUtDLE1BQVYsRUFBa0IsS0FBS0osSUFBTCxHQUFZRyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdILElBQXZCO0FBQ2xCLFFBQU0rQixDQUFDLEdBQUc1QixPQUFPLENBQUM2QixNQUFsQjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdWLEtBQWhCLEVBQXVCVSxDQUFDLEdBQUdGLENBQTNCLEVBQThCRSxDQUFDLEVBQS9CLEVBQW1DO0FBQ2pDVixXQUFLLEdBQUdwQixPQUFPLENBQUM4QixDQUFELENBQWY7QUFDQSxXQUFLOUIsT0FBTCxDQUFhb0IsS0FBSyxDQUFDdkIsSUFBbkIsSUFBMkJ1QixLQUEzQjtBQUNEOztBQUNELFNBQUtyQixLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUtNLEtBQUwsR0FBYSxDQUFDLENBQUNMLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssS0FBMUI7QUFDRCxHQTVGdUI7QUE4RnhCMEIsYUE5RndCLHlCQThGVjtBQUNaLFdBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ3RCLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBb0IsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ25CLFFBQXpCLEVBQW1DLE9BQU8sSUFBUDtBQUNuQyxhQUFPbUIsT0FBTyxDQUFDbkIsUUFBUixDQUFpQnFCLElBQWpCLENBQXNCQyxNQUE3QjtBQUNELEtBSE0sQ0FBUDtBQUlELEdBbkd1QjtBQW9HeEJDLGVBcEd3QiwyQkFvR1I7QUFDZCxXQUFPTCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuQixRQUF6QixFQUFtQyxPQUFPLElBQVA7QUFDbkMsYUFBT21CLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJxQixJQUFqQixDQUFzQkcsUUFBN0I7QUFDRCxLQUhNLENBQVA7QUFJRCxHQXpHdUI7QUEwR3hCQyxrQkExR3dCLDhCQTBHTDtBQUNqQixXQUFPUCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuQixRQUF6QixFQUFtQyxPQUFPLElBQVA7QUFDbkMsYUFBT21CLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJxQixJQUFqQixDQUFzQkssV0FBN0I7QUFDRCxLQUhNLENBQVA7QUFJRCxHQS9HdUI7QUFnSHhCQyxjQWhId0IsMEJBZ0hUO0FBQ2IsV0FBT1QsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DdEIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFvQixPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDbkIsUUFBekIsRUFBbUMsT0FBTyxJQUFQO0FBQ25DLGFBQU9tQixPQUFPLENBQUNuQixRQUFSLENBQWlCcUIsSUFBakIsQ0FBc0JPLE9BQTdCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0FySHVCO0FBc0h4QkMsZUF0SHdCLDJCQXNIUjtBQUNkLFdBQU9YLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ3RCLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBb0IsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ25CLFFBQXpCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxhQUFPbUIsT0FBTyxDQUFDbkIsUUFBUixDQUFpQkUsT0FBakIsQ0FBeUI0QixRQUFoQztBQUNELEtBSE0sQ0FBUDtBQUlELEdBM0h1QjtBQTRIeEJDLFlBNUh3Qix3QkE0SFg7QUFDWCxXQUFPYixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuQixRQUF6QixFQUFtQyxPQUFPLEtBQVA7QUFDbkMsYUFBT21CLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJFLE9BQWpCLENBQXlCWCxLQUFoQztBQUNELEtBSE0sQ0FBUDtBQUlELEdBakl1QjtBQWtJeEJ5QyxjQWxJd0IsMEJBa0lUO0FBQ2IsV0FBT2QsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DdEIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFvQixPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDbkIsUUFBUixDQUFpQmlDLE9BQXJCO0FBQUEsS0FBdEQsQ0FBUDtBQUNELEdBcEl1QjtBQXFJeEJDLGdCQXJJd0IsNEJBcUlQO0FBQ2YsV0FBT2hCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ3RCLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBb0IsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJtQyxTQUFyQjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQXZJdUI7QUF3SXhCQyxXQXhJd0IsdUJBd0laO0FBQ1YsV0FBT2xCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ3RCLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBb0IsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ25CLFFBQXJCLElBQWlDbUIsT0FBTyxDQUFDbkIsUUFBUixDQUFpQnFDLEtBQWpCLENBQXVCQyxNQUE1RCxFQUFvRSxPQUFPLElBQVA7QUFDcEUsYUFBTyxLQUFQO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0E3SXVCO0FBOEl4QkMsYUE5SXdCLHlCQThJVjtBQUNaLFdBQU9yQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuQixRQUF6QixFQUFtQyxPQUFPLFFBQVA7QUFDbkMsYUFBT21CLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJFLE9BQWpCLENBQXlCQyxNQUFoQztBQUNELEtBSE0sQ0FBUDtBQUlEO0FBbkp1QixDQUFYLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7O0FBRUE7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlqQyxjQUFKLENBQVk7QUFDVk8sUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHFCQUFlLG9CQURaO0FBRUgsK0JBQXlCLGVBRnRCO0FBR0gsd0JBQWtCLGVBSGY7QUFJSCw0QkFBc0IsZUFKbkI7QUFLSCwrQkFBeUIsaUJBTHRCO0FBTUgsdUJBQWlCLGlCQU5kO0FBUUg7QUFDQSx1QkFBaUI7QUFUZDtBQURDLEdBREU7QUFlVjhELGFBQVcsRUFBRSxLQWZIO0FBaUJWL0MsVUFqQlUsc0JBaUJDO0FBQ1QsU0FBS2dELGFBQUw7QUFDRCxHQW5CUztBQXFCVkEsZUFyQlUsMkJBcUJNO0FBQ2RyRSx1QkFBT1UsTUFBUCxHQUFnQjRELE1BQU0sS0FBS0EsTUFBTSxDQUFDQyxNQUFQLENBQWNELE1BQXpDO0FBQ0F0RSx1QkFBT1EsR0FBUCxHQUFhOEQsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQmdELEdBQTdCO0FBQ0F4RSx1QkFBT1MsV0FBUCxHQUFxQixzQkFBVVQsbUJBQU9RLEdBQWpCLENBQXJCO0FBQ0QsR0F6QlM7QUEwQlZpRSxjQTFCVSx3QkEwQkd2QyxLQTFCSCxFQTBCVTtBQUNsQixRQUFNRixVQUFVLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDbEIsYUFBMUI7QUFDQSxRQUFNUixHQUFHLEdBQUd3QixVQUFVLEdBQUdoQyxtQkFBT1MsV0FBVixHQUF3QlQsbUJBQU9RLEdBQXJEOztBQUVBLFFBQUkwQixLQUFLLENBQUMxQixHQUFOLEtBQWNBLEdBQWxCLEVBQXVCO0FBQ3JCUix5QkFBT3lDLFVBQVAsQ0FBa0IsQ0FBQ1AsS0FBRCxDQUFsQjtBQUNEO0FBQ0YsR0FqQ1M7QUFrQ1Z3QyxlQWxDVSwyQkFrQ007QUFDZCxTQUFLTixXQUFMLEdBQW1CLElBQW5CO0FBQ0QsR0FwQ1M7QUFxQ1ZPLGlCQXJDVSw2QkFxQ1E7QUFDaEIsU0FBS1AsV0FBTCxHQUFtQixLQUFuQjtBQUNELEdBdkNTO0FBd0NWUSxlQXhDVSx5QkF3Q0lDLElBeENKLEVBd0NVO0FBQ2xCLFNBQUtDLElBQUwsQ0FBVSxZQUFWLEVBQXdCO0FBQ3RCQyxlQUFTLEVBQUUsQ0FBQ1QsTUFBTSxDQUFDVSxZQUFQLEdBQXNCQyxXQURaO0FBRXRCQyxjQUFRLEVBQUUsQ0FBQyxDQUFDMUQsUUFBUSxDQUFDMkQsY0FBVCxDQUF3Qiw0QkFBeEIsQ0FGVTtBQUd0QmYsaUJBQVcsRUFBRSxLQUFLQTtBQUhJLEtBQXhCLEVBSUdTLElBSkg7QUFLRCxHQTlDUztBQWdEVjtBQUNBTyxnQkFqRFUsMEJBaURLUCxJQWpETCxFQWlEVztBQUNuQjtBQUNBLFNBQUtRLGtCQUFMLENBQXdCUixJQUFJLENBQUMvRCxPQUE3QjtBQUNBLFFBQUkrRCxJQUFJLENBQUNTLG1CQUFULEVBQThCLEtBQUtDLGlCQUFMLENBQXVCVixJQUFJLENBQUMvRCxPQUE1QixFQUFxQytELElBQUksQ0FBQ1MsbUJBQTFDO0FBQzlCLFNBQUtSLElBQUwsQ0FBVSxlQUFWLEVBQTJCRCxJQUFJLENBQUMvRCxPQUFoQztBQUNELEdBdERTO0FBdURWdUUsb0JBdkRVLDhCQXVEU3ZFLE9BdkRULEVBdURrQjtBQUMxQkEsV0FBTyxHQUFHMEUsS0FBSyxDQUFDQyxPQUFOLENBQWMzRSxPQUFkLElBQXlCQSxPQUF6QixHQUFtQyxDQUFDQSxPQUFELENBQTdDOztBQUNBZCx1QkFBT3lDLFVBQVAsQ0FBa0IzQixPQUFsQjs7QUFDQSxTQUFLZ0UsSUFBTCxDQUFVLGFBQVYsRUFBeUJoRSxPQUF6QjtBQUNELEdBM0RTO0FBNERWeUUsbUJBNURVLDZCQTREUXpFLE9BNURSLEVBNERpQndFLG1CQTVEakIsRUE0RHNDO0FBQzlDLFFBQU1JLFVBQVUsR0FBRzVFLE9BQU8sQ0FBQyxDQUFELENBQTFCO0FBQ0EsUUFBTWtCLFVBQVUsR0FBRyxDQUFDMEQsVUFBVSxDQUFDMUUsYUFBL0I7QUFDQSxRQUFNUixHQUFHLEdBQUd3QixVQUFVLEdBQUdoQyxtQkFBT1MsV0FBVixHQUF3QlQsbUJBQU9RLEdBQXJEOztBQUVBLFFBQUk4RSxtQkFBbUIsQ0FBQzlFLEdBQXBCLEtBQTRCQSxHQUFoQyxFQUFxQztBQUNuQ1IseUJBQU9XLElBQVAsR0FBYzJFLG1CQUFtQixDQUFDM0UsSUFBbEM7QUFDRDtBQUNGO0FBcEVTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSVosaUJBQUosQ0FBZTtBQUNkTSxRQUFNLEVBQUU7QUFDTEMsT0FBRyxFQUFFO0FBQ0gsc0NBQWdDLFFBRDdCO0FBRUgsMkJBQXFCLG1CQUZsQjtBQUdILGlDQUEyQjtBQUh4QjtBQURBLEdBRE07QUFTYnFGLFNBQU8sRUFBRSxJQVRJO0FBVWJDLFFBQU0sRUFBRSxHQVZLO0FBWWJ2RSxVQVphLHNCQVlGO0FBQ1QsU0FBS3dFLE1BQUw7QUFDRCxHQWRZO0FBZ0JiQSxRQWhCYSxvQkFnQko7QUFBQTs7QUFDUDdGLHVCQUFPMEIsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLFVBQUFDLFFBQVEsRUFBSTtBQUN0QyxXQUFJLENBQUNzQyxNQUFMLEdBQWN0QyxRQUFRLENBQUNxQixJQUFULENBQWM2QyxVQUFkLEtBQTZCLE1BQTNDO0FBQ0QsS0FGRDtBQUdELEdBcEJZO0FBcUJiQyxXQXJCYSxxQkFxQkhDLEdBckJHLEVBcUJFO0FBQ2IsU0FBS0osTUFBTCxHQUFjSSxHQUFkO0FBQ0QsR0F2Qlk7QUF3QmJDLG1CQXhCYSw2QkF3QktDLFFBeEJMLEVBd0JlO0FBQzFCLFFBQUksS0FBS2hDLE1BQVQsRUFBaUI7QUFDZixVQUFJZ0MsUUFBUSxJQUFJLENBQUMsS0FBS0MsU0FBdEIsRUFBaUM7QUFDL0IsYUFBS0MsY0FBTDtBQUNELE9BRkQsTUFHSyxJQUFJLENBQUNGLFFBQUQsSUFBYSxLQUFLQyxTQUF0QixFQUFpQztBQUNwQyxhQUFLRSxhQUFMO0FBQ0Q7QUFDRixLQVBELE1BUUssSUFBSSxLQUFLRixTQUFULEVBQW9CO0FBQ3ZCLFdBQUtFLGFBQUw7QUFDRDtBQUNGLEdBcENZO0FBcUNiRCxnQkFyQ2EsNEJBcUNJO0FBQ2YsUUFBSSxDQUFDLEtBQUtELFNBQVYsRUFBcUI7QUFDbkIsVUFBTVIsT0FBTyxHQUFHLEtBQUtBLE9BQUwsR0FBZSxLQUFLVyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBL0I7QUFDQWpDLFlBQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JnRixJQUFoQixDQUFxQkMsZ0JBQXJCLENBQXNDLFNBQXRDLEVBQWlEZCxPQUFqRCxFQUEwRCxLQUExRDtBQUNBLFdBQUtRLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNGLEdBM0NZO0FBNENiRSxlQTVDYSwyQkE0Q0c7QUFDZCxRQUFJLEtBQUtGLFNBQVQsRUFBb0I7QUFDbEI3QixZQUFNLENBQUM5QyxRQUFQLENBQWdCZ0YsSUFBaEIsQ0FBcUJFLG1CQUFyQixDQUF5QyxTQUF6QyxFQUFvRCxLQUFLZixPQUF6RCxFQUFrRSxLQUFsRTtBQUNBLFdBQUtRLFNBQUwsR0FBaUIsS0FBakI7QUFDRDtBQUNGLEdBakRZO0FBa0RiRyxXQWxEYSx1QkFrREQ7QUFDVixTQUFLRCxhQUFMO0FBQ0EsUUFBTXRCLFNBQVMsR0FBR1QsTUFBTSxDQUFDVSxZQUFQLEdBQXNCMkIsUUFBdEIsRUFBbEI7QUFDQSxRQUFJNUIsU0FBSixFQUFlLEtBQUtELElBQUwsQ0FBVSxlQUFWLEVBQTJCLEtBQUtjLE1BQWhDO0FBQ2hCO0FBdERZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7Ozs7SUFFcUJnQixTOzs7QUFFbkIsdUJBQWM7QUFBQTs7QUFDWixTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7Ozs7d0JBRUdELEksRUFBTTtBQUNSQSxVQUFJLEdBQUdBLElBQUksSUFBSSxLQUFLQSxJQUFwQjtBQUVBLFVBQUlFLFFBQVEsR0FBR0YsSUFBSSxDQUFDRSxRQUFwQjtBQUFBLFVBQ0lDLENBQUMsR0FBR0QsUUFBUSxDQUFDcEUsTUFEakI7QUFBQSxVQUVJbUUsTUFBTSxHQUFHQyxRQUFRLENBQUMsQ0FBRCxDQUZyQjtBQUlBRixVQUFJLENBQUNJLE9BQUwsQ0FBYS9CLFFBQWIsR0FBd0IsSUFBeEI7QUFDQTRCLFlBQU0sQ0FBQ0ksRUFBUCxHQUFZLDRCQUFaOztBQUVBLGFBQU9GLENBQUMsRUFBUjtBQUNFRCxnQkFBUSxDQUFDQyxDQUFELENBQVIsQ0FBWUcsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIscUJBQTFCO0FBREY7O0FBR0EsV0FBS1AsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlELElBQUksR0FBRyxLQUFLQSxJQUFoQjtBQUFBLFVBQ0lDLE1BQU0sR0FBRyxLQUFLQSxNQURsQjtBQUFBLFVBRUlDLFFBQVEsR0FBR0YsSUFBSSxDQUFDRSxRQUZwQjtBQUFBLFVBR0lDLENBQUMsR0FBR0QsUUFBUSxDQUFDcEUsTUFIakI7QUFLQW1FLFlBQU0sQ0FBQ0ksRUFBUCxHQUFZLEVBQVo7QUFDQUwsVUFBSSxDQUFDSSxPQUFMLENBQWEvQixRQUFiLEdBQXdCLEtBQXhCOztBQUVBLGFBQU84QixDQUFDLEVBQVI7QUFDRUQsZ0JBQVEsQ0FBQ0MsQ0FBRCxDQUFSLENBQVlHLFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCLHFCQUE3QjtBQURGO0FBRUQ7OzttQ0FDY0MsRSxFQUFJO0FBQ2pCLFVBQUlBLEVBQUUsS0FBS0EsRUFBRSxHQUFHaEQsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQjJELGNBQWhCLENBQStCLDRCQUEvQixDQUFWLENBQU4sRUFDRW1DLEVBQUUsQ0FBQ0MsY0FBSCxDQUFrQjtBQUFFQyxnQkFBUSxFQUFFLFFBQVo7QUFBc0JDLGFBQUssRUFBRTtBQUE3QixPQUFsQjtBQUNIOzs7Ozs7cUJBeENrQmIsUzs7Ozs7Ozs7Ozs7Ozs7QUNGckI7O0FBQ0E7Ozs7OztBQUVBLElBQUk3RyxpQkFBSixDQUFlO0FBQ2JNLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCx1QkFBaUI7QUFEZDtBQURDLEdBREs7QUFNYjRELFFBQU0sRUFBRSxLQU5LO0FBUWI3QyxVQVJhLHNCQVFGO0FBQ1QsU0FBS3FHLFFBQUwsQ0FBYyxJQUFkO0FBQ0QsR0FWWTtBQVliQSxVQVphLG9CQVlKQyxFQVpJLEVBWUE7QUFDWCxRQUFJQSxFQUFFLElBQUksQ0FBQyxLQUFLekQsTUFBaEIsRUFBd0I7QUFDdEIsV0FBSzBELGVBQUw7QUFDQSxXQUFLMUQsTUFBTCxHQUFjLElBQWQ7QUFDRCxLQUhELE1BSUssSUFBSSxDQUFDeUQsRUFBRCxJQUFPLEtBQUt6RCxNQUFoQixFQUF3QjtBQUMzQixXQUFLMkQsZUFBTDtBQUNBLFdBQUszRCxNQUFMLEdBQWMsS0FBZDtBQUNEO0FBQ0YsR0FyQlk7QUFzQmIwRCxpQkF0QmEsNkJBc0JLO0FBQ2hCLFNBQUtFLFdBQUwsQ0FBaUIsV0FBakIsRUFBOEIsVUFBQXBGLENBQUMsRUFBSTtBQUNqQyxVQUFJQSxDQUFDLENBQUNxRixNQUFGLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEIsWUFBSXJGLENBQUMsQ0FBQ3NGLE1BQUYsQ0FBU2IsU0FBVCxDQUFtQmMsUUFBbkIsQ0FBNEIsc0JBQTVCLENBQUosRUFBeUQ7QUFDdkRqSSw2QkFBT2lCLElBQVAsR0FBY3lCLENBQUMsQ0FBQ3NGLE1BQUYsQ0FBU0UsWUFBVCxDQUFzQixZQUF0QixDQUFkO0FBQ0QsU0FGRCxNQUdLbEksbUJBQU9pQixJQUFQLEdBQWMsRUFBZDtBQUNOO0FBQ0YsS0FQRCxFQU9HcUQsTUFBTSxDQUFDOUMsUUFQVjtBQVFEO0FBL0JZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7Ozs7SUFFcUIyRyxLOzs7QUFFbkIsaUJBQVl2QyxNQUFaLEVBQW9CSSxHQUFwQixFQUF5Qm9DLFdBQXpCLEVBQXNDakgsS0FBdEMsRUFBNkM7QUFBQTs7QUFDM0MsUUFBSTRELFNBQUosRUFBZXNELFFBQWY7QUFFRixTQUFLekMsTUFBTCxHQUFjQSxNQUFkO0FBQ0FiLGFBQVMsR0FBRyxLQUFLQSxTQUFMLEdBQWlCYSxNQUFNLENBQUNiLFNBQXBDO0FBQ0UsU0FBSzVELEtBQUwsR0FBYW5CLG1CQUFPb0IsWUFBUCxHQUFzQndFLE1BQU0sQ0FBQzBDLE9BQTdCLEdBQXVDbkgsS0FBcEQ7QUFFQWtILFlBQVEsR0FBRztBQUNURSxXQUFLLEVBQUUsRUFERTtBQUVUckQsY0FBUSxFQUFFLEtBRkQ7QUFHVHNELFdBQUssRUFBRSxJQUhFO0FBSVRDLFVBQUksRUFBRTFELFNBQVMsQ0FBQzBELElBSlA7QUFLVEMsVUFBSSxFQUFFO0FBTEcsS0FBWDs7QUFPQSxTQUFLLElBQUlDLENBQVQsSUFBY04sUUFBZCxFQUF3QjtBQUN0QixVQUFJLENBQUNELFdBQVcsQ0FBQzVGLGNBQVosQ0FBMkJtRyxDQUEzQixDQUFMLEVBQW9DO0FBQ2xDUCxtQkFBVyxDQUFDTyxDQUFELENBQVgsR0FBaUJOLFFBQVEsQ0FBQ00sQ0FBRCxDQUF6QjtBQUNEO0FBQ0Y7O0FBQ0RQLGVBQVcsQ0FBQ2xCLEVBQVosR0FBaUJrQixXQUFXLENBQUNsQixFQUFaLElBQWtCLEVBQUV0QixNQUFNLENBQUNnRCxPQUE1QztBQUNGLFNBQUsxQixFQUFMLEdBQVVrQixXQUFXLENBQUNsQixFQUF0QjtBQUNBLFNBQUsyQixNQUFMLEdBQWM5RCxTQUFTLENBQUM4RCxNQUF4QjtBQUVBLFFBQUlDLEtBQUssR0FBRyxLQUFLQSxLQUFMLEdBQWEvRCxTQUFTLENBQUMrRCxLQUFuQztBQUVBLFNBQUtDLFdBQUwsR0FBbUJELEtBQUssQ0FBQ0MsV0FBekI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCRixLQUFLLENBQUNFLFNBQXZCO0FBRUEsU0FBS2pDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRSxTQUFLa0MsVUFBTCxHQUFrQixFQUFsQjtBQUVGLFNBQUtDLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFFQSxTQUFLbEMsT0FBTCxHQUFlO0FBQ2RDLFFBQUUsRUFBRWtCLFdBQVcsQ0FBQ2xCLEVBREY7QUFFZGxCLFNBQUcsRUFBRUEsR0FGUztBQUdkdUMsV0FBSyxFQUFFSCxXQUFXLENBQUNHLEtBSEw7QUFJZEMsV0FBSyxFQUFFSixXQUFXLENBQUNJLEtBSkw7QUFLZEMsVUFBSSxFQUFFTCxXQUFXLENBQUNLLElBTEo7QUFNZHZELGNBQVEsRUFBRWtELFdBQVcsQ0FBQ2xELFFBTlI7QUFPWHdELFVBQUksRUFBRU4sV0FBVyxDQUFDTSxJQVBQO0FBUVhyRyxZQUFNLEVBQUUrRixXQUFXLENBQUMvRjtBQVJULEtBQWY7O0FBV0UsUUFBSSxLQUFLbEIsS0FBTCxLQUFlbkIsbUJBQU9vQixZQUFQLElBQXVCLENBQUMsS0FBSzZGLE9BQUwsQ0FBYXVCLEtBQXBELENBQUosRUFBZ0U7QUFDOUQsV0FBS1ksY0FBTDtBQUNEO0FBQ0Y7Ozs7MkJBRUtOLEssRUFBTztBQUNYQSxXQUFLLEdBQUdBLEtBQUssSUFBSSxLQUFLQSxLQUF0QjtBQUNBLFVBQUkvRCxTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFBQSxVQUNJd0QsS0FBSyxHQUFHLEtBQUt0QixPQUFMLENBQWFzQixLQUR6QjtBQUFBLFVBRUljLEtBQUssR0FBR3RFLFNBQVMsQ0FBQ3NFLEtBRnRCO0FBQUEsVUFHSUMsQ0FBQyxHQUFHRCxLQUFLLENBQUMxRyxNQUhkO0FBQUEsVUFJSW9FLFFBQVEsR0FBRyxLQUFLQSxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsSUFBaUIsS0FBS3dDLGNBQUwsQ0FBb0JoQixLQUFwQixFQUEyQmUsQ0FBM0IsQ0FKaEQ7QUFBQSxVQUtJMUcsQ0FBQyxHQUFHLENBTFI7QUFBQSxVQU1JNEcsU0FBUyxHQUFHRixDQUFDLEdBQUcsQ0FOcEI7QUFBQSxVQU9JRyxJQVBKOztBQVNBLGFBQU83RyxDQUFDLEdBQUcwRyxDQUFYLEVBQWMxRyxDQUFDLEVBQWYsRUFBbUI7QUFDakI2RyxZQUFJLEdBQUdKLEtBQUssQ0FBQ3pHLENBQUQsQ0FBWjtBQUNBa0csYUFBSyxDQUFDWSxrQkFBTixDQUF5QkQsSUFBekI7QUFDQSxZQUFJLENBQUM3RyxDQUFMLEVBQVFrRyxLQUFLLENBQUNhLFFBQU4sQ0FBZUYsSUFBZixFQUFxQixLQUFLVixXQUExQjtBQUVSLFlBQUluRyxDQUFDLEtBQUs0RyxTQUFWLEVBQ0VWLEtBQUssQ0FBQ2MsTUFBTixDQUFhSCxJQUFiLEVBQW1CLEtBQUtULFNBQXhCO0FBRUZGLGFBQUssQ0FBQ2UsZ0JBQU4sQ0FBdUI5QyxRQUFRLENBQUNuRSxDQUFELENBQS9CO0FBQ0EsYUFBS3FHLFVBQUwsQ0FBZ0JhLElBQWhCLENBQXFCL0MsUUFBUSxDQUFDbkUsQ0FBRCxDQUFSLENBQVltSCxVQUFqQztBQUVBTixZQUFJLENBQUNNLFVBQUwsQ0FBZ0JDLFNBQWhCO0FBQ0Q7O0FBRUQsV0FBS0MsY0FBTCxDQUFvQlQsU0FBcEI7QUFFQSxVQUFJLEtBQUt2QyxPQUFMLENBQWEvQixRQUFqQixFQUEyQixLQUFLVSxNQUFMLENBQVlzRSxXQUFaLENBQXdCLElBQXhCLEVBQThCLEtBQTlCO0FBRTNCLFVBQUksQ0FBQyxLQUFLL0ksS0FBTixLQUFnQm5CLG1CQUFPb0IsWUFBUCxJQUF1QixDQUFDLEtBQUs2RixPQUFMLENBQWF1QixLQUFyRCxDQUFKLEVBQWlFLEtBQUsyQixRQUFMO0FBRW5FLFdBQUtDLHNCQUFMO0FBRUEsYUFBTyxJQUFQO0FBQ0E7Ozs2Q0FDeUI7QUFDdkIsVUFBTXJELFFBQVEsR0FBRyxLQUFLQSxRQUF0QjtBQUR1QjtBQUFBO0FBQUE7O0FBQUE7QUFFdkIsNkJBQW9CQSxRQUFwQiw4SEFBOEI7QUFBQSxjQUFyQnNELE9BQXFCO0FBQzVCQSxpQkFBTyxDQUFDNUQsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsS0FBS2IsTUFBTCxDQUFZMEUsS0FBWixDQUFrQixJQUFsQixFQUF3QixLQUFLQyxPQUE3QixDQUFsQyxFQUF5RSxLQUF6RTtBQUNEO0FBSnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLeEI7Ozs0QkFDTzdILEMsRUFBRztBQUNULFVBQUk4SCxLQUFKOztBQUNBLFVBQUk5SCxDQUFDLENBQUNzRixNQUFOLEVBQWM7QUFDWnRGLFNBQUMsQ0FBQytILGVBQUY7QUFDQXpLLDJCQUFPaUIsSUFBUCxHQUFjeUIsQ0FBQyxDQUFDc0YsTUFBRixDQUFTRSxZQUFULENBQXNCLFlBQXRCLENBQWQ7QUFDQXNDLGFBQUssR0FBRyxjQUFSO0FBQ0QsT0FKRCxNQUlPO0FBQ0x4SywyQkFBT2lCLElBQVAsR0FBY3lCLENBQUMsR0FBRyxJQUFsQjtBQUNBOEgsYUFBSyxHQUFHLGdCQUFSO0FBQ0Q7O0FBQ0QsV0FBSzVFLE1BQUwsQ0FBWWQsSUFBWixDQUFpQjBGLEtBQWpCLEVBQXdCO0FBQ3RCdEQsVUFBRSxFQUFFLEtBQUtBLEVBRGE7QUFFdEJoQyxnQkFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLK0IsT0FBTCxDQUFhL0IsUUFGSDtBQUd0QndELFlBQUksRUFBRSxDQUFDLENBQUMsS0FBS3pCLE9BQUwsQ0FBYXlCO0FBSEMsT0FBeEI7QUFLRDs7O21DQUNjWSxDLEVBQUdvQixnQixFQUFrQjtBQUNsQyxVQUFJM0QsUUFBUSxHQUFHLEtBQUtBLFFBQXBCO0FBQ0F1QyxPQUFDLEdBQUcsT0FBT0EsQ0FBUCxLQUFhLFFBQWIsR0FBd0JBLENBQXhCLEdBQTRCdkMsUUFBUSxDQUFDcEUsTUFBVCxHQUFrQixDQUFsRDtBQUNBLFVBQU1nSSxZQUFZLEdBQUc1RCxRQUFRLENBQUMsQ0FBRCxDQUE3QjtBQUNBLFVBQU02RCxXQUFXLEdBQUc3RCxRQUFRLENBQUN1QyxDQUFELENBQTVCO0FBQ0EsVUFBTXVCLFdBQVcsR0FBR0YsWUFBWSxDQUFDWixVQUFqQztBQUNBLFVBQU1lLFVBQVUsR0FBR0YsV0FBVyxDQUFDYixVQUEvQjtBQUNBLFVBQUlnQixVQUFKLEVBQWdCQyxTQUFoQjtBQUVBLFdBQUs5QixrQkFBTCxHQUEwQixLQUFLK0IsVUFBTCxDQUFnQkosV0FBaEIsRUFBNkJGLFlBQTdCLEVBQTJDLElBQTNDLElBQW1ELENBQTdFO0FBQ0EsV0FBS3hCLGlCQUFMLEdBQXlCLEtBQUs4QixVQUFMLENBQWdCSCxVQUFoQixFQUE0QkYsV0FBNUIsRUFBeUMsSUFBekMsQ0FBekI7QUFFQUcsZ0JBQVUsR0FBR0osWUFBWSxDQUFDTyxlQUExQjtBQUNBRixlQUFTLEdBQUdKLFdBQVcsQ0FBQ00sZUFBeEI7QUFFQSxVQUFJSCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0ksUUFBWCxLQUF3QixDQUExQyxFQUE2QyxLQUFLakMsa0JBQUwsSUFBMkIsQ0FBM0I7QUFDN0MsVUFBSSxDQUFDOEIsU0FBRCxJQUFjQSxTQUFTLENBQUNHLFFBQVYsS0FBdUIsQ0FBckMsSUFBMENOLFdBQVcsS0FBS0MsVUFBOUQsRUFBMEUsS0FBSzNCLGlCQUFMLElBQTBCLENBQTFCO0FBRTFFLFVBQUksS0FBS0Qsa0JBQUwsR0FBMEIsQ0FBOUIsRUFBaUMsS0FBS0Esa0JBQUwsR0FBMEIsQ0FBMUI7QUFDakMsVUFBSSxLQUFLQyxpQkFBTCxHQUF5QixDQUE3QixFQUFnQyxLQUFLQSxpQkFBTCxHQUF5QixDQUF6Qjs7QUFFaEMsVUFBSXVCLGdCQUFKLEVBQXNCO0FBQ3BCLGFBQUszQixXQUFMLEdBQW1CZ0MsVUFBVSxJQUFJQSxVQUFVLENBQUNLLElBQXpCLEdBQWdDTCxVQUFVLENBQUNLLElBQVgsQ0FBZ0J6SSxNQUFoRCxHQUF5RCxDQUE1RTtBQUNBLGFBQUtxRyxTQUFMLEdBQWlCLEtBQUtILE1BQUwsR0FBYyxLQUFLRSxXQUFMLEdBQW1CLEtBQUs5QixPQUFMLENBQWF3QixJQUFiLENBQWtCOUYsTUFBbkQsR0FBNEQsS0FBS3FHLFNBQWxGO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtpQixjQUFMLENBQW9CckosU0FBcEIsRUFBK0IsSUFBL0IsRUFDS3VKLFFBREw7QUFHQSxhQUFPLElBQVA7QUFDRDs7OzJCQUNLO0FBQ04sVUFBSWxCLFVBQVUsR0FBRyxLQUFLQSxVQUF0QjtBQUFBLFVBQ0VsQyxRQUFRLEdBQUcsS0FBS0EsUUFEbEI7QUFBQSxVQUVFQyxDQUFDLEdBQUdELFFBQVEsQ0FBQ3BFLE1BRmY7QUFBQSxVQUdFMEksU0FIRjtBQUFBLFVBR2FoQixPQUhiOztBQUtBLGFBQU9yRCxDQUFDLEVBQVIsRUFBWTtBQUNYcUUsaUJBQVMsR0FBR3BDLFVBQVUsQ0FBQ2pDLENBQUQsQ0FBdEI7QUFDQXFELGVBQU8sR0FBR3RELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFsQjtBQUNBcUUsaUJBQVMsQ0FBQ0MsWUFBVixDQUF1QmpCLE9BQU8sQ0FBQ2tCLFVBQS9CLEVBQTJDbEIsT0FBM0M7QUFDQWdCLGlCQUFTLENBQUNyQixTQUFWO0FBQ0E7O0FBQ0QsYUFBTyxJQUFQO0FBQ0E7OzsyQkFDTTtBQUNKLFVBQUlmLFVBQVUsR0FBRyxLQUFLQSxVQUF0QjtBQUFBLFVBQ0lsRSxTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFleUcsSUFEL0I7QUFBQSxVQUVJMUMsS0FBSyxHQUFHLEtBQUtBLEtBRmpCO0FBSUFBLFdBQUssQ0FBQ2EsUUFBTixDQUFlVixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWN3QyxVQUFkLENBQXlCLEtBQUt2QyxrQkFBOUIsQ0FBZixFQUFrRSxLQUFLSCxXQUF2RTtBQUNBRCxXQUFLLENBQUNjLE1BQU4sQ0FBYVgsVUFBVSxDQUFDQSxVQUFVLENBQUN0RyxNQUFYLEdBQW9CLENBQXJCLENBQVYsQ0FBa0M4SSxVQUFsQyxDQUE2QyxLQUFLdEMsaUJBQWxELENBQWIsRUFBbUYsS0FBS0gsU0FBeEY7QUFFQWpFLGVBQVMsQ0FBQzJHLGVBQVY7QUFDQTNHLGVBQVMsQ0FBQzRHLFFBQVYsQ0FBbUI3QyxLQUFuQjtBQUVBLFdBQUsvRCxTQUFMLENBQWU2RyxZQUFmO0FBQ0E3RyxlQUFTLENBQUM4RyxlQUFWO0FBRUEsYUFBTyxLQUFLQyxNQUFMLEVBQVA7QUFDRjs7OytCQUNVdkgsTSxFQUFRd0gsSyxFQUFPQyxrQixFQUFvQjtBQUM3QyxVQUFJLENBQUN6SCxNQUFELElBQVcsQ0FBQ3dILEtBQWhCLEVBQXVCO0FBQUUsZUFBTyxJQUFQO0FBQWM7O0FBQ3ZDLFVBQUlFLFFBQVEsR0FBR0Qsa0JBQWtCLElBQUlELEtBQUssQ0FBQ1osUUFBTixLQUFtQixDQUF6QyxHQUE2QzVHLE1BQU0sQ0FBQ2tILFVBQXBELEdBQWlFbEgsTUFBTSxDQUFDMEgsUUFBdkY7QUFBQSxVQUNFQyxDQUFDLEdBQUdELFFBQVEsQ0FBQ3RKLE1BRGY7QUFBQSxVQUVFQyxDQUFDLEdBQUcsQ0FGTjs7QUFJRSxhQUFRQSxDQUFDLEdBQUdzSixDQUFaLEVBQWV0SixDQUFDLEVBQWhCLEVBQW9CO0FBQ2xCLFlBQUlxSixRQUFRLENBQUNySixDQUFELENBQVIsS0FBZ0JtSixLQUFwQixFQUEyQjtBQUN6QixpQkFBT25KLENBQVA7QUFDRDtBQUNGO0FBQ0g7OzttQ0FDYzJGLEssRUFBTzRELE0sRUFBUTtBQUM3QixVQUFJcEYsUUFBUSxHQUFHLEVBQWY7QUFBQSxVQUNNbkUsQ0FBQyxHQUFHLENBRFY7QUFBQSxVQUVNeUgsT0FGTjs7QUFJQSxhQUFRekgsQ0FBQyxHQUFHdUosTUFBWixFQUFvQnZKLENBQUMsRUFBckIsRUFBeUI7QUFDeEJ5SCxlQUFPLEdBQUcvRixNQUFNLENBQUM5QyxRQUFQLENBQWdCNEssYUFBaEIsQ0FBOEIsTUFBOUIsQ0FBVjtBQUNHL0IsZUFBTyxDQUFDbEQsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0Isc0JBQXRCO0FBQ0hpRCxlQUFPLENBQUNnQyxZQUFSLENBQXFCLE9BQXJCLEVBQThCOUQsS0FBSyxDQUFDK0QsT0FBTixDQUFjLElBQWQsRUFBb0IsYUFBcEIsQ0FBOUI7QUFDQWpDLGVBQU8sQ0FBQ2dDLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUMsS0FBS25GLEVBQUwsR0FBVSxHQUFWLEdBQWdCdEUsQ0FBbkQsRUFKd0IsQ0FLckI7O0FBQ0htRSxnQkFBUSxDQUFDK0MsSUFBVCxDQUFjTyxPQUFkO0FBQ0E7O0FBQ0QsYUFBT3RELFFBQVA7QUFDQTs7OytCQUNXO0FBQ1QsVUFBTStCLEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUNBLFVBQU0vRCxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDRixVQUFNd0gsS0FBSyxHQUFHekQsS0FBSyxDQUFDMEQsY0FBcEI7QUFDQSxVQUFNQyxHQUFHLEdBQUczRCxLQUFLLENBQUM0RCxZQUFsQjtBQUNBLFVBQU1DLFVBQVUsR0FBRyxLQUFLOUQsTUFBeEI7QUFDRSxVQUFNdEUsTUFBTSxHQUFHLEtBQUt3QyxRQUFMLENBQWMsQ0FBZCxFQUFpQmdELFVBQWhDO0FBQ0EsVUFBTTZDLFVBQVUsR0FBR3JJLE1BQU0sQ0FBQ3NJLFlBQVAsQ0FBb0IsWUFBcEIsQ0FBbkI7QUFDRixVQUFNQyxNQUFNLEdBQUd2SSxNQUFNLENBQUN3RixVQUF0QjtBQUNFLFVBQU1nRCxXQUFXLEdBQUdELE1BQU0sQ0FBQy9DLFVBQVAsSUFBcUIsQ0FBekM7QUFDRixVQUFNaUQsSUFBSSxHQUFHLEtBQUs5RCxrQkFBbEI7QUFFQSxXQUFLakMsT0FBTCxDQUFhdUIsS0FBYixHQUFxQjtBQUNwQnlFLFNBQUMsRUFBRSxLQUFLbEUsV0FEWTtBQUVwQm1FLFVBQUUsRUFBRU4sVUFBVSxHQUFHLElBQUgsR0FBVXJJLE1BQU0sQ0FBQzRJLFFBRlg7QUFHcEJDLFVBQUUsRUFBRUosSUFIZ0I7QUFJcEJLLFVBQUUsRUFBRVAsTUFBTSxDQUFDSyxRQUpTO0FBS3BCRyxVQUFFLEVBQUUsS0FBS3JDLFVBQUwsQ0FBZ0I2QixNQUFoQixFQUF3QnZJLE1BQXhCLENBTGdCO0FBTXBCZ0osVUFBRSxFQUFFUixXQUFXLEdBQUcsS0FBSzlCLFVBQUwsQ0FBZ0I4QixXQUFoQixFQUE2QkQsTUFBN0IsQ0FBSCxHQUEwQ2xNLFNBTnJDO0FBT3BCNE0sVUFBRSxFQUFFVCxXQUFXLElBQUlBLFdBQVcsQ0FBQ2hELFVBQTNCLEdBQXdDLEtBQUtrQixVQUFMLENBQWdCOEIsV0FBVyxDQUFDaEQsVUFBNUIsRUFBd0NnRCxXQUF4QyxDQUF4QyxHQUErRm5NO0FBUC9FLE9BQXJCO0FBU0UsYUFBTyxLQUFLcUcsT0FBTCxDQUFhdUIsS0FBcEI7QUFDRjs7O3FDQUNpQjtBQUNmLFVBQU16RCxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxVQUFNMEksYUFBYSxHQUFHLEVBQXRCO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsVUFBTWxILElBQUksR0FBR2hGLFFBQVEsQ0FBQ2dGLElBQXRCO0FBRUEsVUFBSStGLEtBQUssR0FBR3hILFNBQVMsQ0FBQzRJLFVBQXRCO0FBQUEsVUFDSWxCLEdBQUcsR0FBRzFILFNBQVMsQ0FBQzZJLFNBRHBCOztBQUdBLGFBQU9yQixLQUFLLEtBQUsvRixJQUFqQixFQUF1QjtBQUNyQmlILHFCQUFhLENBQUMzRCxJQUFkLENBQW1CLEtBQUttQixVQUFMLENBQWdCc0IsS0FBSyxDQUFDeEMsVUFBdEIsRUFBa0N3QyxLQUFsQyxDQUFuQjtBQUNBQSxhQUFLLEdBQUdBLEtBQUssQ0FBQ3hDLFVBQWQ7QUFDRDs7QUFDRCxhQUFPMEMsR0FBRyxLQUFLakcsSUFBZixFQUFxQjtBQUNuQmtILG1CQUFXLENBQUM1RCxJQUFaLENBQWlCLEtBQUttQixVQUFMLENBQWdCd0IsR0FBRyxDQUFDMUMsVUFBcEIsRUFBZ0MwQyxHQUFoQyxDQUFqQjtBQUNBQSxXQUFHLEdBQUdBLEdBQUcsQ0FBQzFDLFVBQVY7QUFDRDs7QUFFRCxXQUFLOUMsT0FBTCxDQUFhdUIsS0FBYixHQUFxQjtBQUNuQnFGLFNBQUMsRUFBRTtBQUNEWixXQUFDLEVBQUUsS0FBS2xFLFdBRFA7QUFFRCtFLFdBQUMsRUFBRUw7QUFGRixTQURnQjtBQUtuQi9LLFNBQUMsRUFBRTtBQUNEdUssV0FBQyxFQUFFLEtBQUtqRSxTQURQO0FBRUQ4RSxXQUFDLEVBQUVKO0FBRkY7QUFMZ0IsT0FBckI7QUFVQSxhQUFPLEtBQUt6RyxPQUFMLENBQWF1QixLQUFwQjtBQUNEOzs7Ozs7cUJBM1BrQkwsSzs7Ozs7Ozs7Ozs7Ozs7QUNGckI7O0FBQ0E7Ozs7OztBQUVBLElBQUlwSSxpQkFBSixDQUFlO0FBQ2RNLFFBQU0sRUFBRTtBQUNMQyxPQUFHLEVBQUU7QUFDSCxzQ0FBZ0MsUUFEN0I7QUFFSCwyQkFBcUI7QUFGbEI7QUFEQSxHQURNO0FBUWJxRixTQUFPLEVBQUUsSUFSSTtBQVNib0ksVUFBUSxFQUFFLEtBVEc7QUFVYkMsUUFBTSxFQUFFLENBVks7QUFZYjNNLFVBWmEsc0JBWUY7QUFBQTs7QUFDVCxTQUFLd0UsTUFBTCxHQUFjbEUsSUFBZCxDQUFtQjtBQUFBLGFBQU0sS0FBSSxDQUFDbUssTUFBTCxFQUFOO0FBQUEsS0FBbkI7QUFDRCxHQWRZO0FBZ0JiakcsUUFoQmEsb0JBZ0JKO0FBQUE7O0FBQ1AsV0FBTzdGLG1CQUFPMEIsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLFVBQUFDLFFBQVEsRUFBSTtBQUM3QyxZQUFJLENBQUNzQyxNQUFMLEdBQWN0QyxRQUFRLENBQUNxQixJQUFULENBQWM2QyxVQUFkLEtBQTZCLE9BQTNDO0FBQ0EsWUFBSSxDQUFDakMsT0FBTCxHQUFlakMsUUFBUSxDQUFDaUMsT0FBeEI7QUFDRCxLQUhNLENBQVA7QUFJRCxHQXJCWTtBQXNCYmlJLFFBdEJhLG9CQXNCSjtBQUNQLFFBQU1tQyxLQUFLLEdBQUcsS0FBS0MsRUFBTCxHQUFVNUosTUFBTSxDQUFDOUMsUUFBUCxDQUFnQjRLLGFBQWhCLENBQThCLFNBQTlCLENBQXhCO0FBQ0EsUUFBTStCLGFBQWEsR0FBRyxpQ0FBdEI7QUFDQSxRQUFJQyxPQUFKLEVBQWFDLFFBQWI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFULElBQWMsS0FBS3pLLE9BQW5CLEVBQTRCO0FBQzFCdUssYUFBTyxHQUFHLEtBQUt2SyxPQUFMLENBQWF5SyxDQUFiLEVBQWdCL0YsS0FBaEIsQ0FBc0JnRyxLQUF0QixDQUE0QkosYUFBNUIsQ0FBVjs7QUFDQSxVQUFJQyxPQUFKLEVBQWE7QUFDWEMsZ0JBQVEsR0FBRy9KLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0I0SyxhQUFoQixDQUE4QixjQUE5QixDQUFYO0FBQ0E2QixhQUFLLENBQUNPLFdBQU4sQ0FBa0JILFFBQWxCO0FBQ0FBLGdCQUFRLENBQUM5RixLQUFULENBQWVrRyxVQUFmLEdBQTRCTCxPQUFPLENBQUNNLEdBQVIsRUFBNUI7QUFDQUwsZ0JBQVEsQ0FBQ25ILEVBQVQsR0FBYyxtQkFBbUJvSCxDQUFqQztBQUNEO0FBQ0Y7QUFDRixHQW5DWTtBQW9DYmpILFFBcENhLG9CQW9DSjtBQUNQLFFBQUksS0FBSzBHLFFBQVQsRUFBbUI7QUFDakJ6SixZQUFNLENBQUM5QyxRQUFQLENBQWdCZ0YsSUFBaEIsQ0FBcUJtSSxXQUFyQixDQUFpQyxLQUFLVCxFQUF0QztBQUNBLFdBQUtBLEVBQUwsQ0FBUXhILG1CQUFSLENBQTRCLFdBQTVCLEVBQXlDLEtBQUtmLE9BQTlDLEVBQXVELEtBQXZEO0FBQ0EsV0FBS29JLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDtBQUNGLEdBMUNZO0FBMkNiYSxNQTNDYSxrQkEyQ047QUFDTCxRQUFNWCxLQUFLLEdBQUcsS0FBS0MsRUFBbkI7QUFDQSxRQUFNM0YsS0FBSyxHQUFHMEYsS0FBSyxDQUFDMUYsS0FBcEI7QUFDQSxRQUFJc0csV0FBSjs7QUFFQSxRQUFJLENBQUMsS0FBS2QsUUFBVixFQUFvQjtBQUNsQnpKLFlBQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JnRixJQUFoQixDQUFxQmdJLFdBQXJCLENBQWlDUCxLQUFqQztBQUNBLFVBQU10SSxPQUFPLEdBQUcsS0FBS0EsT0FBTCxHQUFlLEtBQUttSixXQUFMLENBQWlCdkksSUFBakIsQ0FBc0IsSUFBdEIsQ0FBL0I7QUFDQTBILFdBQUssQ0FBQ3hILGdCQUFOLENBQXVCLFdBQXZCLEVBQW9DZCxPQUFwQyxFQUE2QyxLQUE3QztBQUNBLFdBQUtvSSxRQUFMLEdBQWdCLElBQWhCO0FBRUEsVUFBTWdCLGlCQUFpQixHQUFHekssTUFBTSxDQUFDVSxZQUFQLEdBQXNCZ0ssVUFBdEIsQ0FBaUMsQ0FBakMsRUFBb0NDLHFCQUFwQyxFQUExQjtBQUVBMUcsV0FBSyxDQUFDMkcsR0FBTixHQUFZSCxpQkFBaUIsQ0FBQ0csR0FBbEIsR0FBd0JILGlCQUFpQixDQUFDZixNQUExQyxHQUFtRDFKLE1BQU0sQ0FBQzZLLE9BQTFELEdBQW9FLElBQWhGO0FBQ0E1RyxXQUFLLENBQUM2RyxJQUFOLEdBQWFMLGlCQUFpQixDQUFDSyxJQUFsQixHQUF5QjlLLE1BQU0sQ0FBQytLLE9BQWhDLEdBQTBDLElBQXZEO0FBRUFSLGlCQUFXLEdBQUdaLEtBQUssQ0FBQ3FCLFlBQXBCO0FBRUEvRyxXQUFLLENBQUMyRyxHQUFOLEdBQVlLLFFBQVEsQ0FBQ2hILEtBQUssQ0FBQzJHLEdBQVAsQ0FBUixHQUFzQkwsV0FBdEIsR0FBb0MsSUFBaEQ7QUFDRCxLQWRELE1BZUssSUFBSSxDQUFDQSxXQUFXLEdBQUdaLEtBQUssQ0FBQ3FCLFlBQXJCLE1BQXVDLEtBQUt0QixNQUFoRCxFQUF3RDtBQUMzRHpGLFdBQUssQ0FBQzJHLEdBQU4sR0FBWUssUUFBUSxDQUFDaEgsS0FBSyxDQUFDMkcsR0FBUCxDQUFSLEdBQXNCTCxXQUF0QixHQUFvQyxLQUFLYixNQUF6QyxHQUFrRCxJQUE5RDtBQUNEOztBQUNELFNBQUtBLE1BQUwsR0FBY2EsV0FBZDtBQUNELEdBbkVZO0FBb0ViNUksbUJBcEVhLDZCQW9FS0MsUUFwRUwsRUFvRWU7QUFDMUIsUUFBSSxLQUFLaEMsTUFBVCxFQUFpQjtBQUNmLFVBQUksQ0FBQ2dDLFFBQUwsRUFBZSxLQUFLbUIsTUFBTCxHQUFmLEtBQ0ssS0FBS3VILElBQUw7QUFDTixLQUhELE1BSUssSUFBSSxLQUFLYixRQUFULEVBQW1CO0FBQ3RCLFdBQUsxRyxNQUFMO0FBQ0Q7QUFDRixHQTVFWTtBQTZFYnlILGFBN0VhLHVCQTZFRHBNLENBN0VDLEVBNkVFO0FBQ2JBLEtBQUMsQ0FBQzhNLGNBQUY7QUFDQTlNLEtBQUMsQ0FBQytILGVBQUY7QUFDQSxRQUFNeUQsRUFBRSxHQUFHeEwsQ0FBQyxDQUFDc0YsTUFBYjs7QUFDQSxRQUFJa0csRUFBRSxDQUFDZixRQUFILEtBQWdCLGNBQXBCLEVBQW9DO0FBQ2xDLFdBQUtySSxJQUFMLENBQVUsc0JBQVYsRUFBa0NvSixFQUFFLENBQUNoSCxFQUFILENBQU11SSxLQUFOLENBQVksSUFBWixFQUFrQmYsR0FBbEIsRUFBbEM7QUFDRDtBQUNGO0FBcEZZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJNU8sY0FBSixDQUFZO0FBQ1hPLFFBQU0sRUFBRTtBQUNQQyxPQUFHLEVBQUU7QUFDSixxQkFBZSxVQURYO0FBRUosNEJBQXNCLGFBRmxCO0FBR0Qsd0JBQWtCLFVBSGpCO0FBSUQsOEJBQXdCLGFBSnZCO0FBS0QsdUJBQWlCLGFBTGhCO0FBTUQsd0JBQWtCLFVBTmpCO0FBT0QsbUNBQTZCLHVCQVA1QjtBQVFELGVBQVMsYUFSUjtBQVNELGdCQUFVLGdCQVRUO0FBVUQsZUFBUyxRQVZSO0FBV0QsZUFBUyxhQVhSO0FBWUQsZUFBUyxTQVpSO0FBYUQsZUFBUyxNQWJSO0FBY0Qsc0JBQWdCLFVBZGY7QUFlRCxzQkFBZ0IsVUFmZjtBQWdCSiw0QkFBc0IsVUFoQmxCO0FBaUJKLDBCQUFvQixVQWpCaEI7QUFrQkQsMkJBQXFCLFVBbEJwQjtBQW1CSiwyQkFBcUIsYUFuQmpCO0FBb0JELGtDQUE0QixRQXBCM0I7QUFxQkQsMEJBQW9CLGFBckJuQjtBQXNCRCxpQ0FBMkIsZ0JBdEIxQjtBQXVCRCxzQkFBZ0IsU0F2QmY7QUF3QkQsdUJBQWlCLE9BeEJoQjtBQXlCRCw4QkFBd0IsTUF6QnZCO0FBMEJELG1DQUE2QixRQTFCNUI7QUEyQkQsc0JBQWdCLE1BM0JmO0FBNEJELHNCQUFnQixNQTVCZjtBQTZCRCxzQkFBZ0IsTUE3QmY7QUE4QkQsMkJBQXFCLFVBOUJwQjtBQStCRCxvQ0FBOEIsa0JBL0I3QjtBQWdDRCw0QkFBc0Isa0JBaENyQjtBQWlDRCxzQkFBZ0IsVUFqQ2Y7QUFrQ0Qsb0JBQWM7QUFsQ2I7QUFERSxHQURHO0FBdUNYeUUsV0FBUyxFQUFFLElBdkNBO0FBd0NYMkssTUFBSSxFQUFFLEVBeENLO0FBeUNYQyxRQUFNLEVBQUUsRUF6Q0c7QUEwQ1hDLHNCQUFvQixFQUFFLEVBMUNYO0FBMkNYQyx3QkFBc0IsRUFBRSxFQTNDYjtBQTRDVjNLLFVBQVEsRUFBRSxJQTVDQTtBQTZDVjRLLGlCQUFlLEVBQUUsSUE3Q1A7QUE4Q1hsSCxTQUFPLEVBQUUsQ0E5Q0U7QUErQ1htSCxlQUFhLEVBQUUsQ0FBQyxDQS9DTDtBQWlEVkMsVUFqRFUsb0JBaUREbFAsT0FqREMsRUFpRFE7QUFDaEIsUUFBTW1QLENBQUMsR0FBR25QLE9BQU8sQ0FBQzZCLE1BQWxCO0FBQ0EsUUFBTTVCLE1BQU0sR0FBR2YsbUJBQU9lLE1BQXRCO0FBQ0EsUUFBTW1QLEdBQUcsR0FBRyxFQUFaOztBQUVBLFNBQUssSUFBSXROLENBQUMsR0FBRyxDQUFSLEVBQVdWLEtBQWhCLEVBQXVCVSxDQUFDLEdBQUdxTixDQUEzQixFQUE4QnJOLENBQUMsRUFBL0IsRUFBbUM7QUFFakNWLFdBQUssR0FBR3BCLE9BQU8sQ0FBQzhCLENBQUQsQ0FBZjs7QUFFQSxVQUFJLENBQUM3QixNQUFELElBQVdtQixLQUFLLENBQUMwRyxPQUFyQixFQUE4QjtBQUM1QixlQUFPLEtBQUtBLE9BQUwsR0FBZTFHLEtBQUssQ0FBQzBHLE9BQTVCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSXVILEtBQUssR0FBRyxDQUFDak8sS0FBSyxDQUFDaU8sS0FBTixJQUFlLEVBQWhCLEVBQW9CQyxNQUFwQixDQUEyQmxPLEtBQUssQ0FBQ21PLElBQU4sSUFBYyxFQUF6QyxDQUFaO0FBQUEsWUFDSTFILENBQUMsR0FBR3dILEtBQUssQ0FBQ3hOLE1BRGQ7O0FBR0EsWUFBSWdHLENBQUosRUFBTztBQUNMLGlCQUFPQSxDQUFDLEVBQVIsRUFBWTtBQUNWdUgsZUFBRyxDQUFDcEcsSUFBSixDQUFTcUcsS0FBSyxDQUFDeEgsQ0FBRCxDQUFMLENBQVN6QixFQUFsQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUNELFNBQUswQixPQUFMLEdBQWUwSCxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsS0FBVCxDQUFlLElBQWYsRUFBcUJOLEdBQXJCLENBQWY7QUFDRCxHQXhFUztBQXlFWHJKLE1BekVXLGdCQXlFTmIsR0F6RU0sRUF5RURvRixJQXpFQyxFQXlFS2pLLEtBekVMLEVBeUVZO0FBQ3RCLFNBQUt3TyxNQUFMLENBQVloTixNQUFaLEdBQXFCLENBQXJCO0FBRUUsUUFBTWtFLElBQUksR0FBRyxJQUFJc0IscUJBQUosQ0FBVSxJQUFWLEVBQWdCbkMsR0FBaEIsRUFBcUJvRixJQUFyQixFQUEyQmpLLEtBQTNCLEVBQWtDMkssTUFBbEMsRUFBYjtBQUVBLFFBQUlWLElBQUksQ0FBQ3FGLFFBQVQsRUFBbUIsS0FBSzNMLElBQUwsQ0FBVSxVQUFWLEVBQXNCK0IsSUFBdEIsRUFBNEJ1RSxJQUFJLENBQUNxRixRQUFqQztBQUVyQixXQUFPNUosSUFBUDtBQUNBLEdBakZVO0FBa0ZYNkosTUFsRlcsZ0JBa0ZOQyxVQWxGTSxFQWtGTTtBQUNkLFFBQUkzUSxtQkFBT2UsTUFBWCxFQUFtQjtBQUVyQixRQUFJMk8sSUFBSSxHQUFHLEtBQUtBLElBQWhCOztBQUVBLFFBQUlBLElBQUksQ0FBQy9NLE1BQVQsRUFBaUI7QUFDYixVQUFNa0UsSUFBSSxHQUFHLEtBQUs2SSxJQUFMLENBQVVoQixHQUFWLEVBQWI7QUFDQSxVQUFNeEgsRUFBRSxHQUFHTCxJQUFJLENBQUNLLEVBQWhCO0FBRUEsV0FBS3lJLE1BQUwsQ0FBWTdGLElBQVosQ0FBaUJqRCxJQUFJLENBQUM2SixJQUFMLEVBQWpCO0FBRUEsVUFBSSxLQUFLeEwsUUFBVCxFQUFtQixLQUFLMEwsWUFBTDtBQUVuQixXQUFLOUwsSUFBTCxDQUFVLGNBQVYsRUFBMEJvQyxFQUExQjtBQUNEOztBQUVEeUosY0FBVSxJQUFJLEtBQUtqTixRQUFMLEVBQWQ7QUFDRixHQW5HVTtBQW9HWG1OLE1BcEdXLGdCQW9HTkYsVUFwR00sRUFvR007QUFDZCxRQUFJM1EsbUJBQU9lLE1BQVgsRUFBbUI7QUFFbkIsUUFBSTRPLE1BQU0sR0FBRyxLQUFLQSxNQUFsQjs7QUFFRixRQUFJQSxNQUFNLENBQUNoTixNQUFYLEVBQW1CO0FBQ2YsVUFBTWtFLElBQUksR0FBRyxLQUFLOEksTUFBTCxDQUFZakIsR0FBWixFQUFiO0FBRUEsV0FBS2dCLElBQUwsQ0FBVTVGLElBQVYsQ0FBZWpELElBQUksQ0FBQ2dLLElBQUwsRUFBZjtBQUVBLFdBQUsvTCxJQUFMLENBQVUsZUFBVixFQUEyQixDQUFDK0IsSUFBRCxDQUEzQjtBQUNEOztBQUVEOEosY0FBVSxJQUFJLEtBQUtqTixRQUFMLEVBQWQ7QUFDRixHQWxIVTtBQW1IVm9OLFFBbkhVLGtCQW1ISGxPLENBbkhHLEVBbUhBO0FBQ1IsUUFBSWdELE1BQU0sR0FBRyxJQUFiO0FBQUEsUUFDSThKLElBQUksR0FBRyxLQUFLQSxJQURoQjtBQUFBLFFBRUlPLENBQUMsR0FBR1AsSUFBSSxDQUFDL00sTUFGYjtBQUFBLFFBR0lvTyxXQUFXLEdBQUcsQ0FBQ25PLENBQUQsQ0FIbEI7QUFBQSxRQUlJb08sT0FBTyxHQUFHLENBQUNwTyxDQUFELENBSmQ7QUFBQSxRQUtJaUUsSUFMSjtBQUFBLFFBS1VvSyxVQUxWOztBQU9BLGFBQVNDLDBCQUFULENBQW9DQyxDQUFwQyxFQUF1QztBQUNyQyxXQUFLLElBQUlDLENBQUMsR0FBR0QsQ0FBQyxHQUFHLENBQWpCLEVBQW9CQyxDQUFDLEdBQUduQixDQUF4QixFQUEyQm1CLENBQUMsRUFBNUIsRUFBZ0M7QUFDOUJ2SyxZQUFJLEdBQUc2SSxJQUFJLENBQUMwQixDQUFELENBQVg7O0FBRUEsWUFBSXhMLE1BQU0sQ0FBQ3lMLGNBQVAsQ0FBc0IzQixJQUFJLENBQUN5QixDQUFELENBQTFCLEVBQStCdEssSUFBL0IsQ0FBSixFQUEwQztBQUN4QyxjQUFJLENBQUNrSyxXQUFXLENBQUNPLFFBQVosQ0FBcUJGLENBQXJCLENBQUwsRUFBOEJMLFdBQVcsQ0FBQ2pILElBQVosQ0FBaUJzSCxDQUFqQjtBQUM5QkosaUJBQU8sQ0FBQ2xILElBQVIsQ0FBYXNILENBQWI7QUFDRDtBQUNGOztBQUNESixhQUFPLENBQUNPLElBQVI7QUFDQVIsaUJBQVcsQ0FBQ1EsSUFBWjtBQUNEOztBQUNELFdBQU9QLE9BQU8sQ0FBQ3JPLE1BQWYsRUFBdUI7QUFDckJ1TyxnQ0FBMEIsQ0FBQ0YsT0FBTyxDQUFDUSxLQUFSLEVBQUQsQ0FBMUI7QUFDRDs7QUFDRFAsY0FBVSxHQUFHWCxJQUFJLENBQUNtQixHQUFMLENBQVNqQixLQUFULENBQWUsSUFBZixFQUFxQk8sV0FBckIsQ0FBYjs7QUFFQSxXQUFPQSxXQUFXLENBQUNwTyxNQUFuQixFQUEyQjtBQUN6QixXQUFLK00sSUFBTCxDQUFVZ0MsTUFBVixDQUFpQlgsV0FBVyxDQUFDckMsR0FBWixFQUFqQixFQUFvQyxDQUFwQyxFQUF1QyxDQUF2QyxFQUEwQ2dDLElBQTFDO0FBQ0EsV0FBS2YsTUFBTCxDQUFZakIsR0FBWjtBQUNEOztBQUVELFdBQU91QyxVQUFQO0FBQ0QsR0FsSlM7QUFtSlY1SixRQW5KVSxrQkFtSkhILEVBbkpHLEVBbUpDO0FBQ1QsUUFBSWxILG1CQUFPZSxNQUFYLEVBQW1CO0FBRW5CbUcsTUFBRSxHQUFHQSxFQUFFLEdBQUdBLEVBQUgsR0FBUWxILG1CQUFPaUIsSUFBUCxHQUFjakIsbUJBQU9pQixJQUFyQixHQUE0QixFQUEzQztBQUVBLFFBQUksQ0FBQ2lHLEVBQUwsRUFBUyxPQUFPLEtBQUt3SixJQUFMLEVBQVA7QUFFVCxRQUFJN0osSUFBSSxHQUFHLEtBQUs4SyxPQUFMLENBQWF6SyxFQUFFLENBQUN1SSxLQUFILENBQVMsR0FBVCxFQUFjLENBQWQsQ0FBYixDQUFYO0FBQUEsUUFDSUMsSUFBSSxHQUFHLEtBQUtBLElBRGhCO0FBQUEsUUFFSU8sQ0FBQyxHQUFHUCxJQUFJLENBQUMvTSxNQUZiO0FBQUEsUUFHSWlQLFFBQVEsR0FBR2xDLElBQUksQ0FBQ21DLE9BQUwsQ0FBYWhMLElBQWIsQ0FIZjtBQUFBLFFBSUlvSyxVQUpKO0FBQUEsUUFJZ0JyTyxDQUpoQjs7QUFNQSxRQUFJZ1AsUUFBUSxLQUFLM0IsQ0FBQyxHQUFHLENBQXJCLEVBQXdCO0FBQ3RCLFdBQUtTLElBQUw7QUFDQSxXQUFLZixNQUFMLENBQVlqQixHQUFaO0FBQ0QsS0FIRCxNQUtLO0FBQ0gsVUFBSSxDQUFDLEtBQUtpQixNQUFMLENBQVloTixNQUFqQixFQUF5QjtBQUN2QnNPLGtCQUFVLEdBQUcsS0FBS0gsTUFBTCxDQUFZYyxRQUFaLENBQWI7QUFFQSxhQUFLbEMsSUFBTCxDQUFVb0MsT0FBVixDQUFrQixVQUFTakwsSUFBVCxFQUFlO0FBQy9CLGNBQUlBLElBQUksQ0FBQ0ssRUFBTCxHQUFVK0osVUFBZCxFQUEwQnBLLElBQUksQ0FBQ3RGLE1BQUw7QUFDM0IsU0FGRDtBQUlBLGFBQUttQyxRQUFMO0FBQ0QsT0FSRCxNQVFPO0FBQ0xkLFNBQUMsR0FBRyxLQUFLK00sTUFBTCxDQUFZaE4sTUFBaEI7O0FBRUEsZUFBTyxLQUFLZ04sTUFBTCxDQUFZaE4sTUFBbkI7QUFBMkIsZUFBS2tPLElBQUwsQ0FBVSxJQUFWO0FBQTNCOztBQUVBSSxrQkFBVSxHQUFHLEtBQUtILE1BQUwsQ0FBWWMsUUFBWixDQUFiO0FBRUEsYUFBS2xDLElBQUwsQ0FBVW9DLE9BQVYsQ0FBa0IsVUFBU2pMLElBQVQsRUFBZTtBQUMvQixjQUFJQSxJQUFJLENBQUNLLEVBQUwsR0FBVStKLFVBQWQsRUFBMEJwSyxJQUFJLENBQUN0RixNQUFMO0FBQzNCLFNBRkQ7O0FBSUEsZUFBT3FCLENBQUMsRUFBUjtBQUFZLGVBQUs4TixJQUFMLENBQVUsSUFBVjtBQUFaOztBQUVBLGFBQUtoTixRQUFMO0FBQ0Q7QUFDRjs7QUFDRCxTQUFLb0IsSUFBTCxDQUFVLGNBQVYsRUFBMEJvQyxFQUFFLENBQUMsQ0FBRCxDQUE1QjtBQUNELEdBL0xTO0FBZ01WM0YsUUFoTVUsa0JBZ01Id1EsR0FoTUcsRUFnTUVDLE9BaE1GLEVBZ01XO0FBQ25CeE0sU0FBSyxDQUFDeU0sSUFBTixDQUFXelEsUUFBUSxDQUFDMFEsc0JBQVQsQ0FBZ0Msc0JBQWhDLENBQVgsRUFDR0osT0FESCxDQUNXLFVBQUFLLFNBQVMsRUFBSTtBQUNwQixVQUFNOUcsU0FBUyxHQUFHOEcsU0FBUyxDQUFDcEksVUFBNUI7QUFDQXNCLGVBQVMsQ0FBQ0MsWUFBVixDQUF1QjlKLFFBQVEsQ0FBQzRRLGNBQVQsQ0FBd0JELFNBQVMsQ0FBQ0UsV0FBbEMsQ0FBdkIsRUFBdUVGLFNBQXZFO0FBQ0E5RyxlQUFTLENBQUNyQixTQUFWO0FBQ0QsS0FMSDtBQU9BLFNBQUswRixJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsRUFBNUI7QUFDQSxTQUFLQyxzQkFBTCxHQUE4QixFQUE5QjtBQUNBLFNBQUszSyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBSzRLLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQUMsQ0FBdEI7QUFFQSxRQUFNN04sS0FBSyxHQUFHLENBQUM2UCxHQUFELElBQVEvUixtQkFBT1csSUFBZixJQUF1QlgsbUJBQU9jLE9BQVAsQ0FBZWQsbUJBQU9XLElBQXRCLENBQXZCLEdBQXFEWCxtQkFBT2MsT0FBUCxDQUFlZCxtQkFBT1csSUFBdEIsQ0FBckQsR0FBbUYsSUFBakc7QUFFQSxRQUFJLENBQUNxUixPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDTSxNQUF6QixFQUFpQyxLQUFLeE4sSUFBTCxDQUFVLGlCQUFWLEVBQTZCNUMsS0FBN0I7QUFDbEMsR0FuTlM7QUFvTlZmLE9BcE5VLGlCQW9OSm9SLFNBcE5JLEVBb05PO0FBQ2YsU0FBS2pLLE9BQUwsR0FBZWlLLFNBQWY7QUFDQXZTLHVCQUFPb0IsWUFBUCxHQUFzQixJQUF0QjtBQUNBcEIsdUJBQU9tQixLQUFQLEdBQWVvUixTQUFmO0FBQ0EsU0FBS2hSLE1BQUw7QUFDRCxHQXpOUztBQTBOVmlSLE1BMU5VLGtCQTBOSDtBQUFBOztBQUNMLFFBQU05UixNQUFNLEdBQUdWLG1CQUFPVSxNQUF0QjtBQUNBLFFBQU1LLE1BQU0sR0FBR2YsbUJBQU9lLE1BQXRCOztBQUVBZix1QkFBTzBCLEdBQVAsQ0FBVyxRQUFYLEVBQXFCQyxJQUFyQixDQUEwQixVQUFBSSxNQUFNLEVBQUk7QUFDbEMsVUFBSS9CLG1CQUFPYSxLQUFQLElBQWdCRSxNQUFwQixFQUE0QjtBQUMxQixZQUFJLENBQUNBLE1BQUQsSUFBV2dCLE1BQU0sS0FBSyxRQUExQixFQUFvQztBQUNsQyxlQUFJLENBQUMwUSxPQUFMLENBQWEsYUFBYixFQUE0QjlRLElBQTVCLENBQWlDLFVBQUErUSxPQUFPLEVBQUk7QUFDMUMsZ0JBQUlBLE9BQUosRUFBYTtBQUNYLGtCQUFNQyxHQUFHLEdBQUdqUyxNQUFNLEdBQUdvQyxPQUFPLENBQUM4UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUJBQXhCLENBQUgsR0FBa0QsRUFBcEU7QUFFQTdTLGlDQUFPVyxJQUFQLEdBQWMyRCxNQUFNLENBQUN3TyxNQUFQLENBQWNoUSxPQUFPLENBQUM4UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsWUFBeEIsRUFBc0NGLEdBQXRDLENBQWQsQ0FBZDtBQUNBLGtCQUFJM1MsbUJBQU9XLElBQVgsRUFBaUIsS0FBSSxDQUFDbUUsSUFBTCxDQUFVLGFBQVYsRUFBeUIsS0FBSSxDQUFDaU8sYUFBTCxFQUF6QjtBQUNsQjtBQUNGLFdBUEQ7QUFRRCxTQVRELE1BU087QUFDTCxjQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxjQUFJdFMsTUFBSixFQUFZc1MsU0FBUyxHQUFHMU8sTUFBTSxDQUFDMk8sT0FBUCxDQUFlblEsT0FBTyxDQUFDOFAsSUFBUixDQUFhQyxVQUFiLENBQXdCLG1CQUF4QixDQUFmLENBQVo7O0FBQ1osY0FBSUcsU0FBSixFQUFlO0FBQ2IsaUJBQUksQ0FBQ2xPLElBQUwsQ0FBVSxhQUFWLEVBQXlCLEtBQUksQ0FBQ2lPLGFBQUwsRUFBekI7QUFDRDtBQUNGO0FBQ0YsT0FqQkQsTUFpQk87QUFDTCxhQUFJLENBQUNqTyxJQUFMLENBQVUsZUFBVixFQUEyQixLQUFJLENBQUNpTyxhQUFMLEVBQTNCO0FBQ0Q7QUFDRixLQXJCRDtBQXNCRixHQXBQVTtBQXFQVnJQLFVBclBVLHNCQXFQQztBQUFBOztBQUNUMUQsdUJBQU8wQixHQUFQLENBQVcsVUFBWCxFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQStCLFFBQVEsRUFBSTtBQUN0QyxVQUFJQSxRQUFKLEVBQWMsTUFBSSxDQUFDOE8sSUFBTCxHQUFkLEtBQ0ssTUFBSSxDQUFDMU4sSUFBTCxDQUFVLGlCQUFWO0FBQ04sS0FIRDtBQUlELEdBMVBTO0FBMlBWb08sTUEzUFUsa0JBMlBIO0FBQ0wsUUFBTXJNLElBQUksR0FBRyxLQUFLc00sUUFBTCxFQUFiO0FBQ0EsUUFBSSxDQUFDdE0sSUFBTCxFQUFXLE9BQU8sS0FBUDtBQUNYLFFBQU1pQyxLQUFLLEdBQUdqQyxJQUFJLENBQUNpQyxLQUFuQjtBQUNBLFFBQU0vRCxTQUFTLEdBQUc4QixJQUFJLENBQUM5QixTQUFMLENBQWV5RyxJQUFqQztBQUNBLFFBQU16RSxRQUFRLEdBQUdGLElBQUksQ0FBQ0UsUUFBdEI7QUFFQStCLFNBQUssQ0FBQ2EsUUFBTixDQUFlNUMsUUFBUSxDQUFDLENBQUQsQ0FBdkIsRUFBNEIsQ0FBNUI7QUFDQStCLFNBQUssQ0FBQ2MsTUFBTixDQUFhN0MsUUFBUSxDQUFDQSxRQUFRLENBQUNwRSxNQUFULEdBQWtCLENBQW5CLENBQXJCLEVBQTRDLENBQTVDO0FBQ0FvQyxhQUFTLENBQUM0RyxRQUFWLENBQW1CN0MsS0FBbkI7QUFDRnNLLGFBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJ2TyxTQUFTLENBQUM0QixRQUFWLEdBQXFCNE0sSUFBckIsR0FBNEJqSCxPQUE1QixDQUFvQyxhQUFwQyxFQUFtRCxNQUFuRCxDQUE5QjtBQUNFdkgsYUFBUyxDQUFDOEcsZUFBVjtBQUNELEdBdlFTO0FBd1FWMkgsT0F4UVUsaUJBd1FKM00sSUF4UUksRUF3UUUyTCxJQXhRRixFQXdRUWlCLEtBeFFSLEVBd1FlO0FBQ3pCLFNBQUsvRCxJQUFMLENBQVU1RixJQUFWLENBQWVqRCxJQUFmO0FBQ0UsUUFBSTJMLElBQUksS0FBSyxLQUFiLEVBQW9CLEtBQUs5TyxRQUFMO0FBQ3RCLFFBQUkrUCxLQUFKLEVBQVcsS0FBS0Msa0JBQUw7QUFDWCxHQTVRVTtBQTZRVkMsVUE3UVUsb0JBNlFEOU0sSUE3UUMsRUE2UUs7QUFDYixTQUFLOUIsU0FBTCxHQUFpQixJQUFJNk8sc0JBQUosRUFBakI7QUFDQSxTQUFLSixLQUFMLENBQVcsS0FBSzNNLElBQUwsQ0FBVUEsSUFBSSxDQUFDYixHQUFmLEVBQW9CYSxJQUFwQixDQUFYLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDO0FBQ0QsR0FoUlM7QUFpUlZnTix1QkFqUlUsbUNBaVJjO0FBQ3RCLFFBQUksQ0FBQyxLQUFLbkUsSUFBTCxDQUFVL00sTUFBZixFQUF1QixPQUFPLElBQVA7QUFFdkIsU0FBS21DLElBQUwsQ0FBVSxlQUFWLEVBQTJCLEtBQUs0SyxJQUFoQzs7QUFFQSxRQUFJMVAsbUJBQU9lLE1BQVgsRUFBbUI7QUFDakIsVUFBTThGLElBQUksR0FBRyxLQUFLNkksSUFBTCxDQUFVLEtBQUtBLElBQUwsQ0FBVS9NLE1BQVYsR0FBbUIsQ0FBN0IsQ0FBYjs7QUFDQSxVQUFJM0MsbUJBQU9XLElBQVAsS0FBZ0JrRyxJQUFJLENBQUNJLE9BQUwsQ0FBYXdCLElBQWIsQ0FBa0I4SyxJQUFsQixHQUF5Qk8sU0FBekIsQ0FBbUMsQ0FBbkMsRUFBc0NDLDRCQUFpQkMsb0JBQWpCLEdBQXdDLENBQTlFLENBQXBCLEVBQXNHO0FBQ3BHLGFBQUtDLFFBQUwsQ0FBY3BOLElBQWQ7QUFDRDtBQUNGLEtBTEQsTUFLTztBQUNMLFdBQUtxTixRQUFMO0FBQ0EsV0FBS0MsZ0JBQUw7QUFDRDs7QUFDRCxTQUFLVCxrQkFBTDs7QUFFQSxRQUFJMVQsbUJBQU9vQixZQUFYLEVBQXlCO0FBQ3ZCcEIseUJBQU9vQixZQUFQLEdBQXNCLEtBQXRCO0FBQ0EsV0FBS29SLElBQUw7QUFDRDtBQUNGLEdBclNTO0FBc1NWNEIsU0F0U1UsbUJBc1NGbE4sRUF0U0UsRUFzU0U7QUFDVixTQUFLcEMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsS0FBS3FPLFFBQUwsQ0FBY2pNLEVBQWQsQ0FBdEI7QUFDRCxHQXhTUztBQXlTVm1OLFVBelNVLG9CQXlTRG5OLEVBelNDLEVBeVNHO0FBQ1gsUUFBSSxDQUFDbEgsbUJBQU9lLE1BQVosRUFBb0IsT0FBTyxLQUFLMkMsUUFBTCxFQUFQO0FBRXBCLFFBQU1tRCxJQUFJLEdBQUcsS0FBSzhLLE9BQUwsQ0FBYXpLLEVBQWIsRUFBaUJELE9BQTlCO0FBQ0EsUUFBTTVFLE1BQU0sR0FBRyxPQUFPd0UsSUFBSSxDQUFDeEUsTUFBWixLQUF1QixTQUF2QixHQUFtQ3dFLElBQUksQ0FBQ3hFLE1BQXhDLEdBQWlEckMsbUJBQU9zVSxZQUFQLEtBQXdCLE1BQXhGO0FBRUEsUUFBTXBTLEtBQUssR0FBRztBQUNaaU8sV0FBSyxFQUFFLENBQUN0SixJQUFELENBREs7QUFFWmxHLFVBQUksRUFBRWtHLElBQUksQ0FBQzRCLElBQUwsQ0FBVThLLElBQVYsR0FBaUJPLFNBQWpCLENBQTJCLENBQTNCLEVBQThCQyw0QkFBaUJDLG9CQUFqQixHQUF3QyxDQUF0RSxDQUZNO0FBR1ozUixZQUFNLEVBQU5BO0FBSFksS0FBZDtBQUtBLFNBQUt5QyxJQUFMLENBQVUsZUFBVixFQUEyQjVDLEtBQTNCO0FBQ0QsR0FyVFM7QUFzVFYrUixVQXRUVSxvQkFzVERwTixJQXRUQyxFQXNUSztBQUNiLFFBQU0wTixZQUFZLEdBQUcsS0FBSzNFLG9CQUExQjtBQUNBLFFBQUkxQixFQUFKLEVBQVFzRyxHQUFSLEVBQWF0TixFQUFiOztBQUNBLFFBQUlMLElBQUksSUFBSUEsSUFBSSxLQUFLLENBQXJCLEVBQXdCO0FBQ3RCLFVBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixhQUFLa0osYUFBTCxHQUFxQmxKLElBQUksR0FBRyxDQUE1QjtBQUNBcUgsVUFBRSxHQUFHcUcsWUFBWSxDQUFDMU4sSUFBRCxDQUFqQjtBQUNBSyxVQUFFLEdBQUdnSCxFQUFFLENBQUNoRyxZQUFILENBQWdCLFlBQWhCLEVBQThCdUgsS0FBOUIsQ0FBb0MsR0FBcEMsRUFBeUMsQ0FBekMsQ0FBTDtBQUNELE9BSkQsTUFJTztBQUNMdkksVUFBRSxHQUFHTCxJQUFJLENBQUNLLEVBQVY7QUFDQWdILFVBQUUsR0FBRzFNLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1Q0FBdUN5RixFQUF2QyxHQUE0QyxNQUFuRSxDQUFMO0FBQ0Q7QUFDRixLQVRELE1BU087QUFDTHNOLFNBQUcsR0FBRyxLQUFLekUsYUFBWDtBQUNBN0IsUUFBRSxHQUFHcUcsWUFBWSxDQUFDQyxHQUFELENBQWpCO0FBQ0F0TixRQUFFLEdBQUdnSCxFQUFFLENBQUNoRyxZQUFILENBQWdCLFlBQWhCLEVBQThCdUgsS0FBOUIsQ0FBb0MsR0FBcEMsRUFBeUMsQ0FBekMsQ0FBTDtBQUNEOztBQUVEdkIsTUFBRSxDQUFDM0csY0FBSCxDQUFrQjtBQUFFQyxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQWxCO0FBRUYsUUFBSSxDQUFDWixJQUFELElBQVMsT0FBT0EsSUFBUCxLQUFnQixRQUE3QixFQUF1QyxLQUFLOEssT0FBTCxDQUFhekssRUFBYixFQUFpQnFELE9BQWpCLENBQXlCckQsRUFBekI7QUFDckMsU0FBS3VOLFlBQUwsQ0FBa0J2TixFQUFsQjtBQUNELEdBNVVTO0FBNlVYd04sY0E3VVcsd0JBNlVFQyxHQTdVRixFQTZVTztBQUNqQixRQUFNMUUsQ0FBQyxHQUFHLEtBQUtMLG9CQUFMLENBQTBCak4sTUFBcEM7QUFFQSxTQUFLb04sYUFBTCxJQUFzQjRFLEdBQXRCO0FBRUEsUUFBSSxLQUFLNUUsYUFBTCxHQUFxQixDQUF6QixFQUE0QixLQUFLQSxhQUFMLEdBQXFCRSxDQUFDLEdBQUcsQ0FBekIsQ0FBNUIsS0FDSyxJQUFJLEtBQUtGLGFBQUwsSUFBc0JFLENBQTFCLEVBQTZCLEtBQUtGLGFBQUwsR0FBcUIsQ0FBckI7QUFFbEMsU0FBS2tFLFFBQUw7QUFDQSxHQXRWVTtBQXVWVlEsY0F2VlUsd0JBdVZHdk4sRUF2VkgsRUF1Vk87QUFDZjFCLFNBQUssQ0FBQ3lNLElBQU4sQ0FBV3pRLFFBQVEsQ0FBQ29ULGdCQUFULENBQTBCLCtCQUExQixDQUFYLEVBQ0c5QyxPQURILENBQ1csVUFBQStDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUMxTixTQUFILENBQWFFLE1BQWIsQ0FBb0IsOEJBQXBCLENBQUo7QUFBQSxLQURiO0FBR0EsUUFBTXlOLEdBQUcsR0FBR3RQLEtBQUssQ0FBQ3lNLElBQU4sQ0FBV3pRLFFBQVEsQ0FBQ29ULGdCQUFULENBQTBCLHdDQUF3QzFOLEVBQXhDLEdBQTZDLEtBQXZFLENBQVgsQ0FBWjtBQUVBNE4sT0FBRyxDQUFDaEQsT0FBSixDQUFZLFVBQUErQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDMU4sU0FBSCxDQUFhQyxHQUFiLENBQWlCLDhCQUFqQixDQUFKO0FBQUEsS0FBZDtBQUVBOUMsVUFBTSxDQUFDeVEsVUFBUCxDQUFrQjtBQUFBLGFBQU1ELEdBQUcsQ0FBQ2hELE9BQUosQ0FBWSxVQUFBK0MsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQzFOLFNBQUgsQ0FBYUUsTUFBYixDQUFvQiw4QkFBcEIsQ0FBSjtBQUFBLE9BQWQsQ0FBTjtBQUFBLEtBQWxCLEVBQWdHLElBQWhHO0FBQ0QsR0FoV1M7QUFpV1Y2QyxhQWpXVSx1QkFpV0VvRSxDQWpXRixFQWlXS2tFLElBaldMLEVBaVdXO0FBQ25CLFFBQUl4UyxtQkFBT2UsTUFBWCxFQUFtQjtBQUVuQixRQUFJbUUsUUFBUSxHQUFHLEtBQUtBLFFBQXBCO0FBQUEsUUFDSTJCLElBQUksR0FBRyxLQUFLc00sUUFBTCxDQUFjN0UsQ0FBZCxDQURYO0FBR0EsUUFBSSxDQUFDekgsSUFBTCxFQUFXLE9BQU8sS0FBUDs7QUFFWCxRQUFJM0IsUUFBSixFQUFjO0FBQ1pBLGNBQVEsQ0FBQ21DLE1BQVQ7QUFDQSxXQUFLdkMsSUFBTCxDQUFVLGtCQUFWO0FBQ0Q7O0FBRUQsU0FBS0ksUUFBTCxHQUFnQixJQUFJMEIscUJBQUosR0FBZ0JvTyxHQUFoQixDQUFvQm5PLElBQXBCLENBQWhCO0FBRUEsU0FBSy9CLElBQUwsQ0FBVSxnQkFBVjtBQUNBLFFBQUkwTixJQUFJLEtBQUssS0FBYixFQUFvQixLQUFLOU8sUUFBTDtBQUNyQixHQWxYUztBQW1YVmtOLGNBblhVLDBCQW1YSztBQUNiLFNBQUsxTCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0osSUFBTCxDQUFVLGtCQUFWO0FBQ0QsR0F0WFM7QUF1WFZtUSxnQkF2WFUsNEJBdVhPO0FBQ2YsUUFBSWpWLG1CQUFPZSxNQUFYLEVBQW1CO0FBRW5CLFFBQUltRSxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFFQSxRQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEtBQVA7QUFFZkEsWUFBUSxDQUFDbUMsTUFBVDtBQUNBLFNBQUtuQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBSzRLLGVBQUwsR0FBdUI1SyxRQUF2QjtBQUNBLFNBQUtKLElBQUwsQ0FBVSxrQkFBVjtBQUNBLFNBQUtwQixRQUFMO0FBQ0QsR0FuWVM7QUFvWVZ5USxrQkFwWVUsOEJBb1lTO0FBQ2pCLFFBQUlqUCxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFFQSxRQUFJQSxRQUFKLEVBQWNBLFFBQVEsQ0FBQ3FDLGNBQVQ7QUFDZixHQXhZUztBQXlZVm9LLFNBellVLG1CQXlZRnpLLEVBellFLEVBeVlFc04sR0F6WUYsRUF5WU87QUFDakIsUUFBSTlFLElBQUksR0FBRyxLQUFLQSxJQUFoQjtBQUFBLFFBQ0cvRyxDQUFDLEdBQUcrRyxJQUFJLENBQUMvTSxNQURaO0FBQUEsUUFFR2tFLElBRkg7O0FBSUEsV0FBTzhCLENBQUMsRUFBUixFQUFZO0FBQ1g5QixVQUFJLEdBQUc2SSxJQUFJLENBQUMvRyxDQUFELENBQVg7QUFFQSxVQUFJOUIsSUFBSSxDQUFDSSxPQUFMLENBQWFDLEVBQWIsSUFBbUJBLEVBQXZCLEVBQ0MsT0FBT3NOLEdBQUcsR0FBRztBQUFFM04sWUFBSSxFQUFFQSxJQUFSO0FBQWMrSyxnQkFBUSxFQUFFako7QUFBeEIsT0FBSCxHQUFpQzlCLElBQTNDO0FBQ0Q7O0FBQ0QsV0FBTzJOLEdBQUcsR0FBRztBQUFFM04sVUFBSSxFQUFFLElBQVI7QUFBYytLLGNBQVEsRUFBRTtBQUF4QixLQUFILEdBQW9DLEtBQTlDO0FBQ0EsR0FyWlU7QUFzWlh1QixVQXRaVyxvQkFzWkYvQixDQXRaRSxFQXNaQztBQUNYQSxLQUFDLEdBQUdBLENBQUMsR0FBR0EsQ0FBSCxHQUFPcFIsbUJBQU9pQixJQUFQLEdBQWNqQixtQkFBT2lCLElBQXJCLEdBQTRCLEVBQXhDO0FBRUEsUUFBSTRGLElBQUksR0FBRyxDQUFDdUssQ0FBRCxHQUNWLEtBQUsxQixJQUFMLENBQVUsS0FBS0EsSUFBTCxDQUFVL00sTUFBVixHQUFtQixDQUE3QixDQURVLEdBRVQsT0FBT3lPLENBQVAsS0FBYSxRQUFiLEdBQ0QsS0FBS08sT0FBTCxDQUFhUCxDQUFDLENBQUMzQixLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsQ0FBYixDQURDLEdBRUQyQixDQUpEO0FBS0EsV0FBT3ZLLElBQVA7QUFDQSxHQS9aVTtBQWdhVnFOLFVBaGFVLHNCQWdhQztBQUNULFNBQUt4RSxJQUFMLENBQVU2QixJQUFWLENBQWUsVUFBQzJELEtBQUQsRUFBUUMsS0FBUjtBQUFBLGFBQWtCRCxLQUFLLENBQUNoTyxFQUFOLEdBQVdpTyxLQUFLLENBQUNqTyxFQUFuQztBQUFBLEtBQWY7QUFDRCxHQWxhUztBQW1hWHdNLG9CQW5hVyxnQ0FtYVU7QUFDcEIsU0FBSzlELG9CQUFMLEdBQTRCcEssS0FBSyxDQUFDeU0sSUFBTixDQUFXelEsUUFBUSxDQUFDb1QsZ0JBQVQsQ0FBMEIseUNBQTFCLENBQVgsRUFBaUZyRCxJQUFqRixDQUFzRixVQUFDNkQsRUFBRCxFQUFLQyxFQUFMLEVBQVk7QUFDN0gsVUFBSUMsR0FBRyxHQUFHRixFQUFFLENBQUNuRyxxQkFBSCxFQUFWO0FBQUEsVUFDRXNHLEdBQUcsR0FBR0YsRUFBRSxDQUFDcEcscUJBQUgsRUFEUjtBQUFBLFVBRUV1RyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ3BHLEdBRmI7QUFBQSxVQUdFdUcsSUFBSSxHQUFHRixHQUFHLENBQUNyRyxHQUhiO0FBS0EsVUFBSXNHLElBQUksR0FBR0MsSUFBWCxFQUFpQixPQUFPLENBQUMsQ0FBUixDQUFqQixLQUNLLElBQUlBLElBQUksR0FBR0QsSUFBWCxFQUFpQixPQUFPLENBQVAsQ0FBakIsS0FDQTtBQUNKLFlBQUlGLEdBQUcsQ0FBQ2xHLElBQUosR0FBV21HLEdBQUcsQ0FBQ25HLElBQW5CLEVBQXlCLE9BQU8sQ0FBQyxDQUFSO0FBQ3pCLGVBQU8sQ0FBUDtBQUNBO0FBQ0QsS0FaMkIsQ0FBNUI7QUFhRSxTQUFLUyxzQkFBTCxHQUE4QixLQUFLRCxvQkFBTCxDQUEwQjhGLEdBQTFCLENBQThCLFVBQUE3TyxJQUFJO0FBQUEsYUFBSTBJLFFBQVEsQ0FBQzFJLElBQUksQ0FBQ3FCLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBRCxDQUFaO0FBQUEsS0FBbEMsQ0FBOUI7QUFDQSxTQUFLcEQsSUFBTCxDQUFVLHdCQUFWLEVBQW9DLEtBQUsrSyxzQkFBekM7QUFDRixHQW5iVTtBQW9iVndCLGdCQXBiVSwwQkFvYks2RCxLQXBiTCxFQW9iWUMsS0FwYlosRUFvYm1CO0FBQzdCLFFBQUlRLFNBQVMsR0FBR1QsS0FBSyxDQUFDbk8sUUFBdEI7QUFBQSxRQUNNNk8sRUFBRSxHQUFHRCxTQUFTLENBQUNoVCxNQURyQjtBQUFBLFFBRU1rVCxHQUFHLEdBQUdYLEtBQUssQ0FBQ2hPLEVBRmxCO0FBQUEsUUFHTTRPLFNBQVMsR0FBR1gsS0FBSyxDQUFDcE8sUUFIeEI7QUFBQSxRQUlNZ1AsR0FBRyxHQUFHWixLQUFLLENBQUNqTyxFQUpsQjtBQUFBLFFBS004TyxFQUxOO0FBQUEsUUFLVWxCLEdBTFY7QUFBQSxRQUtlN0UsQ0FMZjs7QUFPRSxXQUFPMkYsRUFBRSxFQUFULEVBQWE7QUFDWEksUUFBRSxHQUFHRixTQUFTLENBQUNuVCxNQUFmOztBQUNBLGFBQU9xVCxFQUFFLEVBQVQsRUFBYTtBQUNYbEIsV0FBRyxHQUFHYSxTQUFTLENBQUNDLEVBQUQsQ0FBVCxDQUFjaEIsZ0JBQWQsQ0FBK0IsY0FBL0IsQ0FBTjtBQUNBM0UsU0FBQyxHQUFHNkUsR0FBRyxDQUFDblMsTUFBUjs7QUFDQSxlQUFPc04sQ0FBQyxFQUFSLEVBQVk7QUFDVixjQUFJNkUsR0FBRyxDQUFDN0UsQ0FBRCxDQUFILENBQU8vSCxZQUFQLENBQW9CLFlBQXBCLEVBQWtDLENBQWxDLEtBQXdDNk4sR0FBNUMsRUFDRSxPQUFPLElBQVA7QUFDSDtBQUNGO0FBQ0Y7O0FBQ0QsV0FBTyxLQUFQO0FBQ0YsR0F4Y1U7QUF5Y1ZFLGFBemNVLHVCQXljRXZULENBemNGLEVBeWNLc0QsR0F6Y0wsRUF5Y1U7QUFBQTs7QUFDcEIsUUFBSWpCLFNBQVMsR0FBRyxLQUFLQSxTQUFMLEdBQWlCLElBQUk2TyxzQkFBSixFQUFqQztBQUVBLFFBQUksQ0FBQzdPLFNBQVMsQ0FBQ3NFLEtBQWYsRUFBc0IsT0FBTyxLQUFQOztBQUVwQixRQUFJM0csQ0FBSixFQUFPO0FBQ1IsVUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBakIsRUFBMkJzRCxHQUFHLEdBQUd0RCxDQUFOLENBQTNCLEtBQ0ssS0FBSzhNLGNBQUwsQ0FBb0I5TSxDQUFwQjtBQUNMLEtBSEMsTUFHSztBQUNOc0QsU0FBRyxHQUFHQSxHQUFHLElBQUksR0FBYjtBQUNBOztBQUVDaEcsdUJBQU8wQixHQUFQLENBQVcsVUFBWCxFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQUMsUUFBUSxFQUFJO0FBQ3RDLFVBQUk1QixtQkFBT2EsS0FBWCxFQUFrQjtBQUNoQixjQUFJLENBQUN5SCxPQUFMLEdBQWUsT0FBTyxNQUFJLENBQUNBLE9BQVosS0FBd0IsU0FBeEIsR0FBb0MsTUFBSSxDQUFDQSxPQUF6QyxHQUFtRCxDQUFDLENBQUMxRyxRQUFRLENBQUNFLE9BQVQsQ0FBaUJYLEtBQXJGO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBSSxDQUFDbUgsT0FBTCxHQUFlLE9BQU8sTUFBSSxDQUFDQSxPQUFaLEtBQXdCLFNBQXhCLEdBQW9DLE1BQUksQ0FBQ0EsT0FBekMsR0FBbUR0SSxtQkFBT21CLEtBQXpFO0FBQ0Q7O0FBQ0QsWUFBSSxDQUFDcVMsS0FBTCxDQUFXLE1BQUksQ0FBQzNNLElBQUwsQ0FBVWIsR0FBVixFQUFlcEUsUUFBUSxDQUFDaUMsT0FBVCxDQUFpQm1DLEdBQWpCLENBQWYsRUFBc0MsTUFBSSxDQUFDc0MsT0FBM0MsQ0FBWCxFQUFnRSxJQUFoRSxFQUFzRSxJQUF0RTtBQUNELEtBUEQ7QUFRRixHQTdkVTtBQThkVjROLFVBOWRVLG9CQThkRGxRLEdBOWRDLEVBOGRJO0FBQ1osUUFBSXdGLElBQUksR0FBRyxJQUFYOztBQUNBLFlBQU94RixHQUFQO0FBQ0UsV0FBSyxHQUFMO0FBQVV3RixZQUFJLENBQUNrRixJQUFMO0FBQWE7O0FBQ3ZCLFdBQUssR0FBTDtBQUFVbEYsWUFBSSxDQUFDcUYsSUFBTDtBQUFhOztBQUN2QixXQUFLLEdBQUw7QUFBVXJGLFlBQUksQ0FBQ2dILElBQUw7QUFBYTs7QUFDdkIsV0FBSyxHQUFMO0FBQVVoSCxZQUFJLENBQUN0QixXQUFMO0FBQW9COztBQUNqQyxXQUFLLFNBQUw7QUFBZ0JzQixZQUFJLENBQUNrSixZQUFMLENBQWtCLENBQUMsQ0FBbkI7QUFBdUI7O0FBQ3ZDLFdBQUssV0FBTDtBQUFrQmxKLFlBQUksQ0FBQ2tKLFlBQUwsQ0FBa0IsQ0FBbEI7QUFBc0I7O0FBQ3hDLFdBQUssR0FBTDtBQUFVbEosWUFBSSxDQUFDbkUsTUFBTDtBQUFlOztBQUN0QixXQUFLLEdBQUw7QUFBVW1FLFlBQUksQ0FBQzBILElBQUw7QUFBYTtBQVJ6QjtBQVVELEdBMWVTO0FBMmVWMUQsZ0JBM2VVLDBCQTJlSzlNLENBM2VMLEVBMmVRO0FBQ2xCLFFBQUlBLENBQUMsSUFBSUEsQ0FBQyxDQUFDOE0sY0FBWCxFQUEyQjtBQUMxQjlNLE9BQUMsQ0FBQzhNLGNBQUY7QUFDQTlNLE9BQUMsQ0FBQytILGVBQUY7QUFDQTs7QUFDRCxXQUFPLElBQVA7QUFDQSxHQWpmVTtBQWtmWHNJLGVBbGZXLDJCQWtmSztBQUNiLFFBQU1oUyxNQUFNLEdBQUdmLG1CQUFPZSxNQUF0QjtBQUNBLFFBQU1GLEtBQUssR0FBR2IsbUJBQU9hLEtBQXJCO0FBQ0EsUUFBTUYsSUFBSSxHQUFHWCxtQkFBT1csSUFBcEI7QUFFQSxRQUFNdUIsS0FBSyxHQUFHLENBQUNuQixNQUFELElBQVdmLG1CQUFPYyxPQUFQLENBQWVILElBQWYsQ0FBWCxHQUFrQ1gsbUJBQU9jLE9BQVAsQ0FBZUgsSUFBZixDQUFsQyxHQUF5RCxFQUF2RTtBQUVBdUIsU0FBSyxDQUFDaU8sS0FBTixHQUFjLEtBQUtnRyxZQUFMLEVBQWQ7QUFDRmpVLFNBQUssQ0FBQ2tVLElBQU4sR0FBYSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBYjtBQUNFcFUsU0FBSyxDQUFDcVUsVUFBTixHQUFtQixDQUFDLENBQUMsS0FBS3JSLFFBQTFCO0FBQ0FoRCxTQUFLLENBQUNzVSxLQUFOLEdBQWNsUyxNQUFNLENBQUM5QyxRQUFQLENBQWdCZ1YsS0FBOUI7QUFDRnRVLFNBQUssQ0FBQ3VVLEtBQU4sR0FBY3ZVLEtBQUssQ0FBQ2lPLEtBQU4sQ0FBWXhOLE1BQTFCO0FBQ0FULFNBQUssQ0FBQzBHLE9BQU4sR0FBZ0IsS0FBS0EsT0FBckI7QUFDRTFHLFNBQUssQ0FBQ2YsS0FBTixHQUFjLE9BQU8sS0FBS21ILE9BQVosS0FBd0IsU0FBeEIsR0FBb0MsS0FBS0EsT0FBekMsR0FBbURwRyxLQUFLLENBQUNmLEtBQXZFOztBQUVBLFFBQUlOLEtBQUssSUFBSUUsTUFBYixFQUFxQjtBQUNuQm1CLFdBQUssQ0FBQ3dVLEtBQU4sR0FBY3hVLEtBQUssQ0FBQ2tVLElBQXBCO0FBQ0FsVSxXQUFLLENBQUMxQixHQUFOLEdBQVlSLG1CQUFPZ0IsYUFBUCxHQUF1QnNELE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JnRCxHQUF2QyxHQUE2QyxzQkFBVUYsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQmdELEdBQTFCLENBQXpEO0FBQ0F0QyxXQUFLLENBQUNHLE1BQU4sR0FBZXJDLG1CQUFPc1UsWUFBUCxLQUF3QixNQUF2QztBQUNBcFMsV0FBSyxDQUFDbkIsTUFBTixHQUFlQSxNQUFmO0FBQ0FtQixXQUFLLENBQUNsQixhQUFOLEdBQXNCaEIsbUJBQU9nQixhQUE3QjtBQUNEOztBQUVEa0IsU0FBSyxDQUFDdkIsSUFBTixHQUFhSSxNQUFNLEdBQ2pCbUIsS0FBSyxDQUFDaU8sS0FBTixDQUFZLENBQVosRUFBZTFILElBQWYsQ0FBb0I4SyxJQUFwQixHQUEyQk8sU0FBM0IsQ0FBcUMsQ0FBckMsRUFBd0NDLDRCQUFpQkMsb0JBQWpCLEdBQXdDLENBQWhGLENBRGlCLEdBRWpCblQsS0FBSyxHQUFHRixJQUFILEdBQVV1QixLQUFLLENBQUN2QixJQUZ2QjtBQUlGLFdBQU91QixLQUFQO0FBQ0EsR0E5Z0JVO0FBK2dCVmlVLGNBL2dCVSwwQkErZ0JLO0FBQ2IsUUFBSXpHLElBQUksR0FBRyxLQUFLQSxJQUFoQjtBQUNBLFFBQUlPLENBQUMsR0FBR1AsSUFBSSxDQUFDL00sTUFBYjtBQUNBLFFBQU13TixLQUFLLEdBQUcsRUFBZDs7QUFFQSxRQUFJblEsbUJBQU9lLE1BQVgsRUFBbUI7QUFDakIyTyxVQUFJLEdBQUcsQ0FBQ0EsSUFBSSxDQUFDTyxDQUFDLEdBQUMsQ0FBSCxDQUFMLENBQVA7QUFDRDs7QUFFREEsS0FBQyxHQUFHUCxJQUFJLENBQUMvTSxNQUFUOztBQUVBLFNBQUssSUFBSTJMLENBQUMsR0FBRyxDQUFSLEVBQVdxSSxFQUFoQixFQUFvQnJJLENBQUMsR0FBRzJCLENBQXhCLEVBQTJCM0IsQ0FBQyxFQUE1QixFQUFnQztBQUNqQ3FJLFFBQUUsR0FBR2pILElBQUksQ0FBQ3BCLENBQUQsQ0FBSixDQUFRckgsT0FBYjtBQUNHLGFBQU8wUCxFQUFFLENBQUN0VSxNQUFWO0FBQ0g4TixXQUFLLENBQUNyRyxJQUFOLENBQVc2TSxFQUFYO0FBQ0E7O0FBQ0MsV0FBT3hHLEtBQVA7QUFDRCxHQWhpQlM7QUFpaUJWeUcsY0FqaUJVLDBCQWlpQks7QUFDYixTQUFLclYsTUFBTCxDQUFZLElBQVosRUFBa0I7QUFBRStRLFlBQU0sRUFBRTtBQUFWLEtBQWxCO0FBQ0EsU0FBS3hOLElBQUwsQ0FBVSx1QkFBVjtBQUNEO0FBcGlCUyxDQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNKZSxVQUFTK0IsSUFBVCxFQUFlZ1EsS0FBZixFQUFzQjtBQUVuQyxNQUFNQyxJQUFJLEdBQUd4UyxNQUFNLENBQUM5QyxRQUFQLENBQWdCZ0YsSUFBN0I7QUFFQSxTQUFPLElBQUl6RyxpQkFBSixDQUFlO0FBQ3RCTSxVQUFNLEVBQUU7QUFDSkMsU0FBRyxFQUFFO0FBQ0gsaUNBQXlCLGtCQUR0QjtBQUVILHFCQUFhLFFBRlY7QUFHSCx5QkFBaUI7QUFIZCxPQUREO0FBTUp5VyxTQUFHLEVBQUU7QUFDSEMsYUFBSyxFQUFFO0FBQ0wsMEJBQWdCLFNBRFg7QUFFTCw0QkFBa0IsTUFGYjtBQUdMLDZCQUFtQixlQUhkO0FBSUwseUJBQWUsYUFKVjtBQUtMLHNCQUFZO0FBTFAsU0FESjtBQVFIQyxhQUFLLEVBQUU7QUFDTCxzQkFBWTtBQURQLFNBUko7QUFXSEMsaUJBQVMsRUFBRTtBQUNULDBCQUFnQjtBQURQLFNBWFI7QUFjSEMsa0JBQVUsRUFBRTtBQUNWLDBCQUFnQjtBQUROO0FBZFQ7QUFORCxLQURjO0FBMEJwQkMsd0JBQW9CLEVBQUUsSUExQkY7QUEyQnBCbEosTUFBRSxFQUFFLElBM0JnQjtBQTRCcEJySCxRQUFJLEVBQUpBLElBNUJvQjtBQTZCcEJnUSxTQUFLLEVBQUVBLEtBQUssSUFBSSxFQTdCSTtBQThCcEJRLG9CQUFnQixFQUFFLElBOUJFO0FBK0JwQjVPLFFBQUksRUFBRSxFQS9CYztBQWdDcEI2TyxXQUFPLEVBQUUsS0FoQ1c7QUFpQ3BCQyxtQkFBZSxFQUFFLEtBakNHO0FBa0NwQkMsZ0JBQVksRUFBRSxLQWxDTTtBQW1DcEJoRCxPQUFHLEVBQUU7QUFBRXZFLE9BQUMsRUFBRSxJQUFMO0FBQVd3SCxPQUFDLEVBQUU7QUFBZCxLQW5DZTtBQW9DcEJDLFFBQUksRUFBRTtBQUFFMVEsT0FBQyxFQUFFLElBQUw7QUFBVzJRLE9BQUMsRUFBRTtBQUFkLEtBcENjO0FBcUNwQkMsVUFBTSxFQUFFLENBckNZO0FBc0NwQkMsVUFBTSxFQUFFLENBdENZO0FBdUNwQkMsb0JBQWdCLEVBQUUsSUF2Q0U7QUF5Q3BCelcsWUF6Q29CLHNCQXlDVDtBQUNULFdBQUswVyxvQkFBTDtBQUNBLFdBQUtDLGlCQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNBLFdBQUtDLGdCQUFMO0FBQ0QsS0E5Q21CO0FBZ0RwQkgsd0JBaERvQixrQ0FnREc7QUFDckIsVUFBTUksUUFBUSxHQUFHLEtBQUt0UixJQUFMLENBQVVJLE9BQVYsQ0FBa0J5QixJQUFuQzs7QUFDQSxVQUFJLE9BQU95UCxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLGFBQUt0UixJQUFMLENBQVVJLE9BQVYsQ0FBa0J5QixJQUFsQixHQUF5QjtBQUFFRCxjQUFJLEVBQUUwUCxRQUFSO0FBQWtCdEIsZUFBSyxFQUFFLEtBQUtBLEtBQUwsSUFBYztBQUF2QyxTQUF6QjtBQUNELE9BRkQsTUFHSyxJQUFJLENBQUNzQixRQUFMLEVBQWU7QUFDbEIsYUFBS3RSLElBQUwsQ0FBVUksT0FBVixDQUFrQnlCLElBQWxCLEdBQXlCO0FBQUVELGNBQUksRUFBRTBQLFFBQVI7QUFBa0J0QixlQUFLLEVBQUUsS0FBS0EsS0FBTCxJQUFjN1csbUJBQU9rQjtBQUE5QyxTQUF6QjtBQUNELE9BRkksTUFFRTtBQUNMLGFBQUtzVCxHQUFMLEdBQVcyRCxRQUFRLENBQUMzRCxHQUFULElBQWdCLEtBQUtBLEdBQWhDO0FBQ0EsYUFBS2tELElBQUwsR0FBWVMsUUFBUSxDQUFDVCxJQUFULElBQWlCLEtBQUtBLElBQWxDO0FBQ0Q7QUFDRixLQTNEbUI7QUE0RHBCTSxxQkE1RG9CLCtCQTREQTtBQUFBOztBQUNsQixVQUFNdFAsSUFBSSxHQUFHLEtBQUt3RixFQUFMLEdBQVUxTSxRQUFRLENBQUM0SyxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBQ0EsVUFBTWdNLE1BQU0sR0FBRyxLQUFLQSxNQUFMLEdBQWM1VyxRQUFRLENBQUM0SyxhQUFULENBQXVCLGNBQXZCLENBQTdCO0FBQ0EsVUFBTWlNLE9BQU8sR0FBRyxLQUFLQSxPQUFMLEdBQWU3VyxRQUFRLENBQUM0SyxhQUFULENBQXVCLGVBQXZCLENBQS9CO0FBQ0EsVUFBTWtNLEdBQUcsR0FBRyxLQUFLQSxHQUFMLEdBQVc5VyxRQUFRLENBQUM0SyxhQUFULENBQXVCLGNBQXZCLENBQXZCO0FBQ0EsVUFBTXFGLEdBQUcsR0FBRyxLQUFLQSxHQUFMLEdBQVdqUSxRQUFRLENBQUM0SyxhQUFULENBQXVCLGdCQUF2QixDQUF2QjtBQUNBLFVBQU1tTSxJQUFJLEdBQUcvVyxRQUFRLENBQUM0SyxhQUFULENBQXVCLGlCQUF2QixDQUFiO0FBQ0EsVUFBTW9NLE9BQU8sR0FBRyxLQUFLQSxPQUFMLEdBQWVoWCxRQUFRLENBQUM0SyxhQUFULENBQXVCLGVBQXZCLENBQS9CO0FBQ0EsVUFBTTBCLENBQUMsR0FBRyxLQUFLMkssV0FBTCxHQUFtQmpYLFFBQVEsQ0FBQzRLLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBN0I7QUFDQSxVQUFNM0QsSUFBSSxHQUFHLEtBQUs1QixJQUFMLENBQVVJLE9BQVYsQ0FBa0J5QixJQUFsQixDQUF1QkQsSUFBcEM7QUFDQSxVQUFNb08sS0FBSyxHQUFHLEtBQUtBLEtBQUwsR0FBYSxLQUFLaFEsSUFBTCxDQUFVSSxPQUFWLENBQWtCeUIsSUFBbEIsQ0FBdUJtTyxLQUF2QixJQUFnQzdXLG1CQUFPa0IsU0FBbEU7QUFDQWxCLHlCQUFPa0IsU0FBUCxHQUFtQjJWLEtBQW5CO0FBQ0EsVUFBTTZCLE9BQU8sR0FBR2xYLFFBQVEsQ0FBQzRRLGNBQVQsQ0FBd0J1RyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsS0FBcEIsQ0FBeEIsQ0FBaEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdyWCxRQUFRLENBQUM0USxjQUFULENBQXdCdUcsTUFBTSxDQUFDQyxZQUFQLENBQW9CLE1BQXBCLENBQXhCLENBQWhCO0FBQ0EsVUFBTUUsUUFBUSxHQUFHdFgsUUFBUSxDQUFDNFEsY0FBVCxDQUF3QnVHLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixNQUFwQixDQUF4QixDQUFqQjtBQUVBLE9BQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsUUFBbkIsRUFBNkIsUUFBN0IsRUFBdUMsS0FBdkMsRUFBOEMsUUFBOUMsRUFBd0QsTUFBeEQsRUFBZ0UsV0FBaEUsRUFBNkU5RyxPQUE3RSxDQUFxRixVQUFBNUYsQ0FBQyxFQUFJO0FBQ3hGLFlBQUkySyxLQUFLLEdBQUdyVixRQUFRLENBQUM0SyxhQUFULENBQXVCLGFBQXZCLENBQVo7QUFDQXlLLGFBQUssQ0FBQ2tDLFNBQU4sR0FBa0Isa0JBQWtCN00sQ0FBcEM7QUFDQTJLLGFBQUssQ0FBQ3hLLFlBQU4sQ0FBbUIsWUFBbkIsRUFBaUNILENBQWpDO0FBQ0FzTSxlQUFPLENBQUNoSyxXQUFSLENBQW9CcUksS0FBcEI7QUFDRCxPQUxEO0FBT0EvSSxPQUFDLENBQUN6QixZQUFGLENBQWUsY0FBZixFQUErQixJQUEvQjtBQUNBaU0sU0FBRyxDQUFDOUosV0FBSixDQUFnQmtLLE9BQWhCO0FBQ0FqSCxTQUFHLENBQUNqRCxXQUFKLENBQWdCcUssT0FBaEI7QUFDQU4sVUFBSSxDQUFDL0osV0FBTCxDQUFpQnNLLFFBQWpCO0FBQ0FwUSxVQUFJLENBQUM4RixXQUFMLENBQWlCNEosTUFBakI7QUFDQUMsYUFBTyxDQUFDN0osV0FBUixDQUFvQitKLElBQXBCO0FBQ0FGLGFBQU8sQ0FBQzdKLFdBQVIsQ0FBb0I4SixHQUFwQjtBQUNBRCxhQUFPLENBQUM3SixXQUFSLENBQW9CaUQsR0FBcEI7QUFDQS9JLFVBQUksQ0FBQzhGLFdBQUwsQ0FBaUI2SixPQUFqQjtBQUNBM1AsVUFBSSxDQUFDOEYsV0FBTCxDQUFpQlYsQ0FBakI7QUFDQXBGLFVBQUksQ0FBQ3ZCLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFheVAsS0FBaEM7QUFDQSxVQUFJcE8sSUFBSixFQUFVcUYsQ0FBQyxDQUFDa0wsS0FBRixHQUFVdlEsSUFBVjtBQUVWcUYsT0FBQyxDQUFDckgsZ0JBQUYsQ0FBbUIsTUFBbkIsRUFBMkIsVUFBQS9ELENBQUM7QUFBQSxlQUFJLEtBQUksQ0FBQ3VXLGFBQUwsQ0FBbUJ2VyxDQUFuQixFQUFzQkEsQ0FBQyxDQUFDc0YsTUFBeEIsRUFBZ0MsSUFBaEMsQ0FBSjtBQUFBLE9BQTVCLEVBQXVFLEtBQXZFO0FBQ0QsS0FqR21CO0FBa0dwQmtSLFdBbEdvQixxQkFrR1Y7QUFDUixXQUFLN1IsTUFBTDtBQUNBLFdBQUtSLElBQUwsQ0FBVUksT0FBVixDQUFrQnlCLElBQWxCLEdBQXlCLEVBQXpCO0FBQ0QsS0FyR21CO0FBc0dwQnJCLFVBdEdvQixvQkFzR1g7QUFDUCxXQUFLOFIsSUFBTDtBQUNBLFdBQUtDLG1CQUFMO0FBQ0EsV0FBS3RVLElBQUwsQ0FBVSxjQUFWLEVBQTBCLEtBQUsrQixJQUFMLENBQVVLLEVBQXBDO0FBQ0QsS0ExR21CO0FBMkdwQitSLGlCQTNHb0IseUJBMkdOdlcsQ0EzR00sRUEyR0h3TCxFQTNHRyxFQTJHQ21MLEtBM0dELEVBMkdRO0FBQUE7O0FBQzFCLFVBQUlBLEtBQUosRUFBVztBQUNULGFBQUt4VCxNQUFMLENBQVlxSSxFQUFaO0FBQ0QsT0FGRCxNQUdLLElBQUksQ0FBQyxLQUFLcUosZUFBVixFQUEyQjtBQUM5QixhQUFLQSxlQUFMLEdBQXVCLElBQXZCO0FBQ0FqVCxjQUFNLENBQUN5USxVQUFQLENBQWtCO0FBQUEsaUJBQU0sTUFBSSxDQUFDbFAsTUFBTCxDQUFZcUksRUFBWixDQUFOO0FBQUEsU0FBbEIsRUFBeUMsSUFBekM7QUFDRDtBQUNGLEtBbkhtQjtBQW9IcEJySSxVQXBIb0Isa0JBb0hicUksRUFwSGEsRUFvSFQ7QUFDVCxXQUFLckgsSUFBTCxDQUFVSSxPQUFWLENBQWtCeUIsSUFBbEIsQ0FBdUJELElBQXZCLEdBQThCeUYsRUFBRSxDQUFDOEssS0FBakM7QUFDQSxXQUFLbFUsSUFBTCxDQUFVLGNBQVYsRUFBMEIsS0FBSytCLElBQUwsQ0FBVUssRUFBcEM7QUFDQSxXQUFLcVEsZUFBTCxHQUF1QixLQUF2QjtBQUNELEtBeEhtQjtBQXlIcEIzSSxRQXpIb0Isa0JBeUhiO0FBQ0wsVUFBTVYsRUFBRSxHQUFHLEtBQUtBLEVBQWhCO0FBQ0EsVUFBTW9MLGdCQUFnQixHQUFHaFYsTUFBTSxDQUFDaVYsVUFBaEM7QUFFQSxVQUFJL0UsR0FBSixFQUFTcEYsSUFBVCxFQUFlRixHQUFmOztBQUVBLFVBQUksS0FBS3NGLEdBQUwsQ0FBU3ZFLENBQVQsS0FBZSxJQUFuQixFQUF5QjtBQUN2QnVFLFdBQUcsR0FBRyxLQUFLQSxHQUFYO0FBQ0F0RixXQUFHLEdBQUdzRixHQUFHLENBQUNpRCxDQUFWO0FBQ0QsT0FIRCxNQUdPO0FBQ0xqRCxXQUFHLEdBQUcsS0FBS2dGLFdBQUwsRUFBTjtBQUVBcEssWUFBSSxHQUFHLEtBQUtvRixHQUFMLENBQVN2RSxDQUFULEdBQWF1RSxHQUFHLENBQUN2RSxDQUF4QjtBQUNBZixXQUFHLEdBQUcsS0FBS3NGLEdBQUwsQ0FBU2lELENBQVQsR0FBYWpELEdBQUcsQ0FBQ2lELENBQUosR0FBUWpELEdBQUcsQ0FBQ2lGLE1BQS9CO0FBQ0Q7O0FBQ0RySyxVQUFJLEdBQUcsS0FBS29GLEdBQUwsQ0FBU3ZFLENBQVQsR0FBYXVFLEdBQUcsQ0FBQ3ZFLENBQXhCOztBQUVBLFVBQUliLElBQUksR0FBRyxHQUFQLEdBQWFrSyxnQkFBakIsRUFBbUM7QUFDakNsSyxZQUFJLEdBQUcsS0FBS29GLEdBQUwsQ0FBU3ZFLENBQVQsR0FBYXFKLGdCQUFnQixHQUFHLEdBQXZDO0FBQ0Q7O0FBRUQsVUFBTTVCLElBQUksR0FBRyxLQUFLQSxJQUFMLENBQVUxUSxDQUFWLEdBQWMsV0FBVyxLQUFLMFEsSUFBTCxDQUFVMVEsQ0FBckIsR0FBeUIsVUFBekIsR0FBc0MsS0FBSzBRLElBQUwsQ0FBVUMsQ0FBaEQsR0FBb0QsR0FBbEUsR0FBd0UsRUFBckY7QUFFQWIsVUFBSSxDQUFDdEksV0FBTCxDQUFpQk4sRUFBakI7QUFDQUEsUUFBRSxDQUFDN0IsWUFBSCxDQUFnQixPQUFoQixFQUF5Qix1QkFBdUI2QyxHQUF2QixHQUE2QixVQUE3QixHQUEwQ0UsSUFBMUMsR0FBaUQsS0FBMUU7QUFDQWxCLFFBQUUsQ0FBQ3dMLG9CQUFILENBQXdCLFVBQXhCLEVBQW9DLENBQXBDLEVBQXVDck4sWUFBdkMsQ0FBb0QsT0FBcEQsRUFBNkRxTCxJQUE3RDtBQUNBLFdBQUtpQyx1QkFBTDtBQUNBLFdBQUtyQyxPQUFMLEdBQWUsSUFBZjtBQUNELEtBckptQjtBQXNKcEJzQyxnQkF0Sm9CLDBCQXNKTDtBQUFBOztBQUNicFUsV0FBSyxDQUFDeU0sSUFBTixDQUFXNkUsSUFBSSxDQUFDNEMsb0JBQUwsQ0FBMEIsUUFBMUIsQ0FBWCxFQUFnRDVILE9BQWhELENBQXdELFVBQUFwSixJQUFJLEVBQUk7QUFDOUQsWUFBSUEsSUFBSSxLQUFLLE1BQUksQ0FBQ3dGLEVBQWxCLEVBQXNCeEYsSUFBSSxDQUFDSCxLQUFMLENBQVdzUixNQUFYLEdBQW9CLFVBQXBCLENBQXRCLEtBQ0tuUixJQUFJLENBQUNILEtBQUwsQ0FBV3NSLE1BQVgsR0FBb0IsVUFBcEI7QUFDTixPQUhEO0FBSUQsS0EzSm1CO0FBNEpwQlYsUUE1Sm9CLGtCQTRKYjtBQUNMckMsVUFBSSxDQUFDbkksV0FBTCxDQUFpQixLQUFLVCxFQUF0QjtBQUNBLFdBQUs0SixnQkFBTCxDQUFzQmdDLFVBQXRCO0FBQ0EsV0FBS3hDLE9BQUwsR0FBZSxLQUFmO0FBQ0QsS0FoS21CO0FBaUtwQnlDLFVBaktvQixvQkFpS1g7QUFDUCxVQUFJLEtBQUt6QyxPQUFULEVBQWtCLEtBQUs2QixJQUFMLEdBQWxCLEtBQ0ssS0FBS3ZLLElBQUw7QUFDTixLQXBLbUI7QUFxS3BCb0wsaUJBcktvQiwyQkFxS0o7QUFDZCxVQUFJLEtBQUt4QyxZQUFULEVBQXVCO0FBQ3JCLGFBQUt0SixFQUFMLENBQVFTLFdBQVIsQ0FBb0IsS0FBSzZKLE9BQXpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS3RLLEVBQUwsQ0FBUU0sV0FBUixDQUFvQixLQUFLZ0ssT0FBekI7QUFDRDs7QUFDRCxXQUFLaEIsWUFBTCxHQUFvQixDQUFDLEtBQUtBLFlBQTFCO0FBQ0QsS0E1S21CO0FBNktwQnlDLGVBN0tvQix1QkE2S1J2WCxDQTdLUSxFQTZLTHdMLEVBN0tLLEVBNktEO0FBQ2pCLFdBQUtBLEVBQUwsQ0FBUS9HLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLGFBQWEsS0FBS3dQLEtBQTNDO0FBQ0EsVUFBTUEsS0FBSyxHQUFHLEtBQUtBLEtBQUwsR0FBYTdXLG1CQUFPa0IsU0FBUCxHQUFtQmdOLEVBQUUsQ0FBQ2hHLFlBQUgsQ0FBZ0IsWUFBaEIsQ0FBOUM7QUFDQSxXQUFLZ0csRUFBTCxDQUFRL0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsYUFBYXlQLEtBQW5DO0FBQ0EsV0FBS2hRLElBQUwsQ0FBVUksT0FBVixDQUFrQnlCLElBQWxCLENBQXVCbU8sS0FBdkIsR0FBK0JBLEtBQS9CO0FBQ0EsV0FBS21ELGFBQUw7QUFDQSxXQUFLbFYsSUFBTCxDQUFVLG9CQUFWLEVBQWdDLEtBQUsrQixJQUFMLENBQVVLLEVBQTFDO0FBQ0QsS0FwTG1CO0FBc0xwQmdSLG9CQXRMb0IsOEJBc0xEO0FBQUE7O0FBQ2pCbFkseUJBQU8wQixHQUFQLENBQVcsYUFBWCxFQUEwQkMsSUFBMUIsQ0FBK0IsVUFBQTJCLFdBQVcsRUFBSTtBQUM1QyxZQUFJQSxXQUFKLEVBQWlCO0FBQ2YsY0FBSSxDQUFDLENBQUMsTUFBSSxDQUFDK1QsZ0JBQVgsRUFBNkI7O0FBRTdCLGNBQU0xUixPQUFPLEdBQUcsTUFBSSxDQUFDMFIsZ0JBQUwsR0FBd0I7QUFBQSxtQkFBTSxNQUFJLENBQUMwQyxNQUFMLEVBQU47QUFBQSxXQUF4Qzs7QUFIZTtBQUFBO0FBQUE7O0FBQUE7QUFLZixpQ0FBb0IsTUFBSSxDQUFDbFQsSUFBTCxDQUFVRSxRQUE5Qiw4SEFBd0M7QUFBQSxrQkFBL0JzRCxPQUErQjtBQUN0Q0EscUJBQU8sQ0FBQzVELGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDZCxPQUFsQyxFQUEyQyxLQUEzQztBQUNBMEUscUJBQU8sQ0FBQ2dDLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEJ2SixPQUFPLENBQUM4UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsYUFBeEIsQ0FBOUI7QUFDRDtBQVJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTaEIsU0FURCxNQVNPO0FBQ0wsZ0JBQUksQ0FBQ3VHLG1CQUFMO0FBQ0Q7QUFDRixPQWJEO0FBY0QsS0FyTW1CO0FBc01wQkEsdUJBdE1vQixpQ0FzTUU7QUFDcEIsVUFBSSxDQUFDLEtBQUsvQixnQkFBVixFQUE0QjtBQURSO0FBQUE7QUFBQTs7QUFBQTtBQUVwQiw4QkFBb0IsS0FBS3hRLElBQUwsQ0FBVUUsUUFBOUIsbUlBQXdDO0FBQUEsY0FBL0JzRCxPQUErQjtBQUN0Q0EsaUJBQU8sQ0FBQzNELG1CQUFSLENBQTRCLE9BQTVCLEVBQXFDLEtBQUsyUSxnQkFBMUMsRUFBNEQsS0FBNUQ7QUFDQWhOLGlCQUFPLENBQUM2UCxlQUFSLENBQXdCLE9BQXhCO0FBQ0Q7QUFMbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1yQixLQTVNbUI7QUE2TXBCUCwyQkE3TW9CLHFDQTZNTTtBQUN4QixVQUFNUSxRQUFRLEdBQUcsS0FBS2pNLEVBQUwsQ0FBUXdMLG9CQUFSLENBQTZCLFVBQTdCLEVBQXlDLENBQXpDLENBQWpCO0FBQ0EsVUFBTVUsTUFBTSxHQUFHO0FBQUVDLHVCQUFlLEVBQUUsQ0FBQyxPQUFEO0FBQW5CLE9BQWY7QUFDQSxVQUFNQyxRQUFRLEdBQUcsS0FBS3hDLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLElBQXlCLElBQUl5QyxnQkFBSixDQUFxQixLQUFLalEsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS2tRLFFBQXRCLENBQXJCLENBQWxFO0FBQ0FGLGNBQVEsQ0FBQ0csT0FBVCxDQUFpQk4sUUFBakIsRUFBMkJDLE1BQTNCO0FBQ0QsS0FsTm1CO0FBbU5wQlosZUFuTm9CLHlCQW1OTjtBQUNaLFVBQU1rQixJQUFJLEdBQUcsS0FBSzdULElBQUwsQ0FBVUUsUUFBVixDQUFtQixLQUFLRixJQUFMLENBQVVFLFFBQVYsQ0FBbUJwRSxNQUFuQixHQUE0QixDQUEvQyxFQUFrRHNNLHFCQUFsRCxFQUFiO0FBQ0EsYUFBTztBQUNMd0ksU0FBQyxFQUFFaUQsSUFBSSxDQUFDeEwsR0FBTCxHQUFXNUssTUFBTSxDQUFDcVcsV0FBbEIsR0FBZ0M3RCxJQUFJLENBQUM4RCxTQURuQztBQUVMM0ssU0FBQyxFQUFFeUssSUFBSSxDQUFDdEwsSUFBTCxHQUFZOUssTUFBTSxDQUFDdVcsV0FBbkIsR0FBaUMvRCxJQUFJLENBQUNnRSxVQUZwQztBQUdMckIsY0FBTSxFQUFFaUIsSUFBSSxDQUFDMU07QUFIUixPQUFQO0FBS0QsS0ExTm1CO0FBMk5wQitNLGVBM05vQix1QkEyTlJyWSxDQTNOUSxFQTJOTHdMLEVBM05LLEVBMk5EO0FBQ2pCeEwsT0FBQyxDQUFDOE0sY0FBRjtBQUNBLFdBQUtvSSxNQUFMLEdBQWNsVixDQUFDLENBQUNzWSxLQUFGLEdBQVUsS0FBS3hHLEdBQUwsQ0FBU3ZFLENBQWpDO0FBQ0EsV0FBSzRILE1BQUwsR0FBY25WLENBQUMsQ0FBQ3VZLEtBQUYsR0FBVSxLQUFLekcsR0FBTCxDQUFTaUQsQ0FBakM7QUFDQSxXQUFLM1MsSUFBTCxDQUFVLFlBQVYsRUFBd0IsS0FBSytCLElBQUwsQ0FBVUssRUFBbEM7QUFDRCxLQWhPbUI7QUFpT3BCZ1UsVUFqT29CLGtCQWlPYnhTLElBak9hLEVBaU9QaEcsQ0FqT08sRUFpT0o7QUFDZCxVQUFJZ0csSUFBSSxLQUFLLEtBQUs3QixJQUFMLENBQVVLLEVBQXZCLEVBQTJCO0FBQ3pCLFlBQU1nSCxFQUFFLEdBQUcsS0FBS0EsRUFBaEI7QUFDQSxZQUFJa0IsSUFBSSxHQUFHLEtBQUtvRixHQUFMLENBQVN2RSxDQUFULEdBQWF2TixDQUFDLENBQUNzWSxLQUFGLEdBQVUsS0FBS3BELE1BQXZDO0FBQ0EsWUFBSTFJLEdBQUcsR0FBRyxLQUFLc0YsR0FBTCxDQUFTaUQsQ0FBVCxHQUFhL1UsQ0FBQyxDQUFDdVksS0FBRixHQUFVLEtBQUtwRCxNQUF0QztBQUNBM0osVUFBRSxDQUFDM0YsS0FBSCxDQUFTNkcsSUFBVCxHQUFnQkEsSUFBSSxHQUFHLElBQXZCO0FBQ0FsQixVQUFFLENBQUMzRixLQUFILENBQVMyRyxHQUFULEdBQWVBLEdBQUcsR0FBRyxJQUFyQjtBQUNEO0FBQ0YsS0F6T21CO0FBME9wQmlNLGFBMU9vQix1QkEwT1I7QUFDVixXQUFLdFUsSUFBTCxDQUFVSSxPQUFWLENBQWtCeUIsSUFBbEIsQ0FBdUI4TCxHQUF2QixHQUE2QixLQUFLQSxHQUFsQztBQUNBLFdBQUsxUCxJQUFMLENBQVUsa0JBQVYsRUFBOEIsS0FBSytCLElBQUwsQ0FBVUssRUFBeEM7QUFDRCxLQTdPbUI7QUE4T3BCc1QsWUE5T29CLG9CQThPWFksYUE5T1csRUE4T0k7QUFDdEIsVUFBTTdTLEtBQUssR0FBRzZTLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJwVCxNQUFqQixDQUF3Qk8sS0FBdEM7QUFDQSxXQUFLbVAsSUFBTCxHQUFZLEtBQUs3USxJQUFMLENBQVVJLE9BQVYsQ0FBa0J5QixJQUFsQixDQUF1QmdQLElBQXZCLEdBQThCO0FBQUUxUSxTQUFDLEVBQUV1QixLQUFLLENBQUM4UyxLQUFYO0FBQWtCMUQsU0FBQyxFQUFFcFAsS0FBSyxDQUFDeUY7QUFBM0IsT0FBMUM7QUFDQSxXQUFLbEosSUFBTCxDQUFVLG1CQUFWLEVBQStCLEtBQUsrQixJQUFMLENBQVVLLEVBQXpDO0FBQ0Q7QUFsUG1CLEdBQWYsQ0FBUDtBQW9QRCxDOztBQTNQRDs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSXBILGNBQUosQ0FBWTtBQUNWTyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsa0JBQVksWUFEVDtBQUVILHNCQUFnQixtQkFGYjtBQUdILHVCQUFpQixTQUhkO0FBSUgsc0JBQWdCLFlBSmI7QUFLSCxzQkFBZ0IsV0FMYjtBQU1ILDhCQUF3QixXQU5yQjtBQU9ILCtCQUF5QixjQVB0QjtBQVFILG9CQUFjLG1CQVJYO0FBU0gsd0JBQWtCO0FBVGY7QUFEQyxHQURFO0FBZVZnYixPQUFLLEVBQUUsRUFmRztBQWdCVnZCLFFBQU0sRUFBRSxJQWhCRTtBQWlCVndCLGFBQVcsRUFBRSxJQWpCSDtBQWtCVkMsaUJBQWUsRUFBRSxJQWxCUDtBQW9CVm5hLFVBcEJVLHNCQW9CQztBQUNQLFNBQUtvYSxZQUFMO0FBQ0gsR0F0QlM7QUF1QlZyVSxLQXZCVSxlQXVCTlAsSUF2Qk0sRUF1QkFnUSxLQXZCQSxFQXVCTztBQUNmLFFBQU1uTyxJQUFJLEdBQUcsS0FBSzRTLEtBQUwsQ0FBV3pVLElBQUksQ0FBQ0ssRUFBaEIsQ0FBYjtBQUNBLFFBQUl3QixJQUFKLEVBQVUsT0FBT0EsSUFBUDtBQUNWLFNBQUs1RCxJQUFMLENBQVUsWUFBVjtBQUNBLFdBQU8sS0FBS3dXLEtBQUwsQ0FBV3pVLElBQUksQ0FBQ0ssRUFBaEIsSUFBc0IsSUFBSXdVLGlCQUFKLENBQVU3VSxJQUFWLEVBQWdCZ1EsS0FBaEIsQ0FBN0I7QUFDRCxHQTVCUztBQTZCVjhFLFNBN0JVLG1CQTZCRnhMLEtBN0JFLEVBNkJLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2IsMkJBQWlCQSxLQUFqQiw4SEFBd0I7QUFBQSxZQUFmdEosSUFBZTs7QUFDdEIsWUFBSUEsSUFBSSxDQUFDSSxPQUFMLENBQWF5QixJQUFqQixFQUF1QjtBQUNyQixlQUFLdEIsR0FBTCxDQUFTUCxJQUFUO0FBQ0Q7QUFDRjtBQUxZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNZCxHQW5DUztBQW9DVitVLFlBcENVLHNCQW9DQy9VLElBcENELEVBb0NPZ1EsS0FwQ1AsRUFvQ2M7QUFDdEIsU0FBS3pQLEdBQUwsQ0FBU1AsSUFBVCxFQUFlZ1EsS0FBZixFQUFzQmpJLElBQXRCO0FBQ0QsR0F0Q1M7QUF1Q1ZpTixtQkF2Q1UsNkJBdUNRM1UsRUF2Q1IsRUF1Q1k7QUFDcEIsV0FBTyxLQUFLb1UsS0FBTCxDQUFXcFUsRUFBWCxDQUFQO0FBQ0EsUUFBSSxLQUFLNFUsT0FBTCxDQUFhLEtBQUtSLEtBQWxCLENBQUosRUFBOEIsS0FBS3hXLElBQUwsQ0FBVSxtQkFBVjtBQUMvQixHQTFDUztBQTJDVmlYLFlBM0NVLHNCQTJDQzdVLEVBM0NELEVBMkNLO0FBQ2IsUUFBSSxLQUFLb1UsS0FBTCxDQUFXcFUsRUFBWCxDQUFKLEVBQW9CLEtBQUtvVSxLQUFMLENBQVdwVSxFQUFYLEVBQWVHLE1BQWY7QUFDckIsR0E3Q1M7QUE4Q1YyVSxXQTlDVSx1QkE4Q0U7QUFDVixRQUFJLENBQUMsS0FBS1YsS0FBVixFQUFpQjtBQUNqQixRQUFNQSxLQUFLLEdBQUcsS0FBS0EsS0FBbkI7QUFDQSxRQUFJVyxJQUFJLEdBQUczWCxNQUFNLENBQUM5QyxRQUFQLENBQWdCa1ksb0JBQWhCLENBQXFDLFFBQXJDLEVBQStDL1csTUFBL0MsR0FBd0QsTUFBeEQsR0FBaUUsTUFBNUU7QUFBQSxRQUNJdVosU0FBUyxHQUFHRCxJQUFJLEtBQUssTUFBVCxHQUFrQixJQUFsQixHQUF5QixLQUR6QztBQUFBLFFBRUl2VCxJQUZKOztBQUdBLFNBQUssSUFBSVksQ0FBVCxJQUFjZ1MsS0FBZCxFQUFxQjtBQUNuQjVTLFVBQUksR0FBRzRTLEtBQUssQ0FBQ2hTLENBQUQsQ0FBWjs7QUFDQSxVQUFJWixJQUFJLENBQUM0TyxPQUFMLEtBQWlCNEUsU0FBckIsRUFBZ0M7QUFDOUJ4VCxZQUFJLENBQUN1VCxJQUFELENBQUo7QUFDRDtBQUNGO0FBQ0YsR0ExRFM7QUEyRFZSLGNBM0RVLDBCQTJESztBQUNiLFFBQU1VLFdBQVcsR0FBRzdYLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JnRixJQUFoQixDQUFxQlcsU0FBekM7O0FBQ0FuSCx1QkFBTzBCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxRQUFRLEVBQUk7QUFDdEMsVUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUNxQixJQUF6QixFQUErQjtBQUM3QixZQUFJckIsUUFBUSxDQUFDcUIsSUFBVCxDQUFjbVosVUFBbEIsRUFBOEJELFdBQVcsQ0FBQy9VLEdBQVosQ0FBZ0IsY0FBaEIsRUFBOUIsS0FDSytVLFdBQVcsQ0FBQzlVLE1BQVosQ0FBbUIsY0FBbkI7QUFDTCxZQUFJekYsUUFBUSxDQUFDcUIsSUFBVCxDQUFjb1osYUFBbEIsRUFBaUNGLFdBQVcsQ0FBQy9VLEdBQVosQ0FBZ0IscUJBQWhCLEVBQWpDLEtBQ0srVSxXQUFXLENBQUM5VSxNQUFaLENBQW1CLHFCQUFuQjtBQUNOO0FBQ0YsS0FQRDtBQVFELEdBckVTO0FBc0VWeVUsU0F0RVUsbUJBc0VGUSxHQXRFRSxFQXNFRztBQUNYLFdBQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUIzWixNQUF6QjtBQUNELEdBeEVTO0FBeUVWOFosbUJBekVVLDZCQXlFUS9ULElBekVSLEVBeUVjO0FBQUE7O0FBQ3RCLFFBQU02UyxXQUFXLEdBQUcsS0FBS0EsV0FBTCxHQUFtQixVQUFDN1ksQ0FBRDtBQUFBLGFBQU8sS0FBSSxDQUFDZ2EsYUFBTCxDQUFtQmhVLElBQW5CLEVBQXlCaEcsQ0FBekIsQ0FBUDtBQUFBLEtBQXZDOztBQUNBLFFBQU04WSxlQUFlLEdBQUcsS0FBS0EsZUFBTCxHQUF1QixVQUFDOVksQ0FBRDtBQUFBLGFBQU8sS0FBSSxDQUFDaWEsZ0JBQUwsQ0FBc0JqVSxJQUF0QixFQUE0QmhHLENBQTVCLENBQVA7QUFBQSxLQUEvQzs7QUFDQSxRQUFNa2EsR0FBRyxHQUFHdFksTUFBTSxDQUFDOUMsUUFBbkI7QUFDQW9iLE9BQUcsQ0FBQ25XLGdCQUFKLENBQXFCLFdBQXJCLEVBQWtDOFUsV0FBbEMsRUFBK0MsS0FBL0M7QUFDQXFCLE9BQUcsQ0FBQ25XLGdCQUFKLENBQXFCLFNBQXJCLEVBQWdDK1UsZUFBaEMsRUFBaUQsS0FBakQ7QUFDQW9CLE9BQUcsQ0FBQ25XLGdCQUFKLENBQXFCLFdBQXJCLEVBQWtDOFUsV0FBbEMsRUFBK0MsS0FBL0M7QUFDQXFCLE9BQUcsQ0FBQ25XLGdCQUFKLENBQXFCLFVBQXJCLEVBQWlDK1UsZUFBakMsRUFBa0QsS0FBbEQ7QUFDRCxHQWpGUztBQWtGVm1CLGtCQWxGVSw0QkFrRk9qVSxJQWxGUCxFQWtGYWhHLENBbEZiLEVBa0ZnQjtBQUN4QixRQUFNa2EsR0FBRyxHQUFHdFksTUFBTSxDQUFDOUMsUUFBbkI7QUFDQW9iLE9BQUcsQ0FBQ2xXLG1CQUFKLENBQXdCLFdBQXhCLEVBQXFDLEtBQUs2VSxXQUExQyxFQUF1RCxLQUF2RDtBQUNBcUIsT0FBRyxDQUFDbFcsbUJBQUosQ0FBd0IsU0FBeEIsRUFBbUMsS0FBSzhVLGVBQXhDLEVBQXlELEtBQXpEO0FBQ0FvQixPQUFHLENBQUNsVyxtQkFBSixDQUF3QixXQUF4QixFQUFxQyxLQUFLNlUsV0FBMUMsRUFBdUQsS0FBdkQ7QUFDQXFCLE9BQUcsQ0FBQ2xXLG1CQUFKLENBQXdCLFVBQXhCLEVBQW9DLEtBQUs4VSxlQUF6QyxFQUEwRCxLQUExRDtBQUVBLFNBQUsxVyxJQUFMLENBQVUsZUFBVixFQUEyQjRELElBQTNCLEVBQWlDaEcsQ0FBakM7QUFDRCxHQTFGUztBQTJGVmdhLGVBM0ZVLHlCQTJGSWhVLElBM0ZKLEVBMkZVaEcsQ0EzRlYsRUEyRmE7QUFDckJBLEtBQUMsQ0FBQzhNLGNBQUY7QUFDQSxTQUFLMUssSUFBTCxDQUFVLFdBQVYsRUFBdUI0RCxJQUF2QixFQUE2QmhHLENBQTdCO0FBQ0QsR0E5RlM7QUErRlZtYSxnQkEvRlUsMEJBK0ZLaFksSUEvRkwsRUErRlc7QUFDbkIsU0FBS0MsSUFBTCxDQUFVLGFBQVYsRUFBeUIsQ0FBQyxLQUFLZ1gsT0FBTCxDQUFhLEtBQUtSLEtBQWxCLENBQTFCLEVBQW9EelcsSUFBcEQ7QUFDRDtBQWpHUyxDQUFaLEU7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBQ0E7Ozs7OztBQUVBLElBQUk5RSxpQkFBSixDQUFlO0FBQ2JtTyxJQUFFLEVBQUU1SixNQUFNLENBQUM5QyxRQURFO0FBRWJzYixXQUFTLEVBQUUsSUFGRTtBQUdiemMsUUFBTSxFQUFFO0FBQ04wVyxPQUFHLEVBQUU7QUFDSGdHLGFBQU8sRUFBRTtBQUNQLGFBQUs7QUFERSxPQUROO0FBSUhDLHFCQUFlLEVBQUU7QUFDZixhQUFLO0FBRFU7QUFKZDtBQURDLEdBSEs7QUFjYkMsb0JBQWtCLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEdBQTdDLEVBQWtELEdBQWxELENBZFA7QUFlYkMsWUFBVSxFQUFFO0FBQ1YsVUFBTSxPQURJO0FBRVYsVUFBTSxHQUZJO0FBRUMsVUFBTSxHQUZQO0FBRVksVUFBTSxHQUZsQjtBQUV1QixVQUFNLEdBRjdCO0FBRWtDLFVBQU0sR0FGeEM7QUFHVixVQUFNLEdBSEk7QUFHQyxVQUFNLEdBSFA7QUFHWSxVQUFNLEdBSGxCO0FBR3VCLFVBQU0sR0FIN0I7QUFHa0MsVUFBTSxHQUh4QztBQUlWLFdBQU8sR0FKRztBQUlFLFdBQU87QUFKVCxHQWZDO0FBc0JiQyxZQXRCYSxzQkFzQkZqUCxFQXRCRSxFQXNCRTtBQUNiLFFBQU12TixJQUFJLEdBQUd1TixFQUFFLENBQUNrUCxPQUFoQjtBQUVBLFdBQVF6YyxJQUFJLEtBQUssVUFBVCxJQUF1QkEsSUFBSSxLQUFLLE9BQWhDLElBQTJDdU4sRUFBRSxDQUFDbVAsZUFBSCxLQUF1QixNQUExRTtBQUNELEdBMUJZO0FBMkJiQyxVQTNCYSxvQkEyQko1YSxDQTNCSSxFQTJCRDtBQUFBOztBQUNWLFFBQUlzRCxHQUFHLEdBQUd0RCxDQUFDLENBQUNzRCxHQUFGLENBQU11WCxXQUFOLEVBQVY7QUFDQSxRQUFNQyxPQUFPLEdBQUc5YSxDQUFDLENBQUM4YSxPQUFsQjtBQUFBLFFBQ0lDLE1BQU0sR0FBSS9hLENBQUMsQ0FBQ2diLE9BQUYsSUFBYWhiLENBQUMsQ0FBQ2liLE9BQWYsSUFBMEJqYixDQUFDLENBQUNrYixNQUE1QixJQUFzQ2xiLENBQUMsQ0FBQ21iLFFBRHREO0FBQUEsUUFFSUMsU0FBUyxHQUFHLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FGaEI7QUFBQSxRQUdJQyxhQUFhLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FIcEI7QUFBQSxRQUlJQyxZQUFZLEdBQUdELGFBQWEsQ0FBQzNOLE1BQWQsQ0FBcUIwTixTQUFyQixFQUFnQzFOLE1BQWhDLENBQXVDLEdBQXZDLENBSm5CO0FBQUEsUUFLSTZOLGNBQWMsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUxyQjtBQU9BLFFBQUlqZSxtQkFBT2UsTUFBUCxJQUFpQmdkLGFBQWEsQ0FBQ3pNLFFBQWQsQ0FBdUJ0TCxHQUF2QixDQUFyQixFQUFrRCxPQUFPLElBQVA7QUFFbEQsUUFBSSxLQUFLaVgsa0JBQUwsQ0FBd0IzTCxRQUF4QixDQUFpQ2tNLE9BQWpDLENBQUosRUFBK0N4WCxHQUFHLEdBQUcsS0FBS2tYLFVBQUwsQ0FBZ0JNLE9BQWhCLENBQU47QUFFL0MsUUFBSSxDQUFDUSxZQUFZLENBQUMxTSxRQUFiLENBQXNCdEwsR0FBdEIsQ0FBRCxJQUErQjFCLE1BQU0sQ0FBQ1UsWUFBUCxHQUFzQkMsV0FBekQsRUFBc0UsT0FBTyxJQUFQO0FBRXRFLFFBQUksS0FBS2tZLFVBQUwsQ0FBZ0J6YSxDQUFDLENBQUNzRixNQUFsQixDQUFKLEVBQStCLE9BQU8sSUFBUDs7QUFFL0JoSSx1QkFBTzBCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxRQUFRLEVBQUk7QUFFdEMsVUFBSSxDQUFDQSxRQUFMLEVBQWUsT0FBTyxJQUFQO0FBRWYsVUFBTXNjLE9BQU8sR0FBR2xZLEdBQWhCO0FBQ0EsVUFBTW5DLE9BQU8sR0FBR2pDLFFBQVEsQ0FBQ2lDLE9BQXpCO0FBQ0EsVUFBTUUsU0FBUyxHQUFHbkMsUUFBUSxDQUFDbUMsU0FBM0I7QUFDQSxVQUFNb2EsV0FBVyxHQUFHdGEsT0FBTyxDQUFDbUMsR0FBRCxDQUEzQjtBQUNBLFVBQU1vWSxpQkFBaUIsR0FBR0QsV0FBVyxJQUFJLENBQUNGLGNBQWMsQ0FBQzNNLFFBQWYsQ0FBd0J0TCxHQUF4QixDQUExQztBQUNBLFVBQUlvWSxpQkFBSixFQUF1QnBZLEdBQUcsR0FBRyxJQUFOO0FBQ3ZCLFVBQU1xWSxPQUFPLEdBQUd0YSxTQUFTLENBQUNpQyxHQUFELENBQXpCO0FBRUEsVUFBSSxDQUFDcVksT0FBTCxFQUFjLE9BQU8sSUFBUDs7QUFFZCxVQUFJLENBQUNaLE1BQUwsRUFBYTtBQUNYLFlBQUl6WCxHQUFHLEtBQUssR0FBUixJQUFlLENBQUNxWSxPQUFPLENBQUMsQ0FBRCxDQUF2QixJQUE4QkEsT0FBTyxDQUFDLENBQUQsQ0FBekMsRUFBOEM7QUFDNUMsZUFBSSxDQUFDdlosSUFBTCxDQUFVLGFBQVYsRUFBeUJSLE1BQU0sQ0FBQ1UsWUFBUCxHQUFzQjJCLFFBQXRCLEVBQXpCO0FBQ0QsU0FGRCxNQUdLLElBQUl3WCxXQUFXLElBQUksQ0FBQ0UsT0FBTyxDQUFDLENBQUQsQ0FBdkIsSUFBOEJBLE9BQU8sQ0FBQyxDQUFELENBQXpDLEVBQThDO0FBQ2pELGVBQUksQ0FBQ3ZaLElBQUwsQ0FBVSxvQkFBVixFQUFnQ3BDLENBQWhDLEVBQW1Dd2IsT0FBbkM7QUFDRDtBQUNGLE9BUEQsTUFPTztBQUNMLFlBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUQsQ0FBWixFQUFpQixPQUFPLElBQVA7QUFFakIsWUFBTUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVc1TyxLQUFYLENBQWlCLEdBQWpCLENBQWpCO0FBQ0EsWUFBTThPLEVBQUUsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBbkI7QUFDQSxZQUFNRSxFQUFFLEdBQUdGLFFBQVEsQ0FBQyxDQUFELENBQW5CO0FBRUEsWUFBSSxDQUFDNWIsQ0FBQyxDQUFDNmIsRUFBRCxDQUFGLElBQVdDLEVBQUUsSUFBSSxDQUFDOWIsQ0FBQyxDQUFDOGIsRUFBRCxDQUF2QixFQUE4QixPQUFPLElBQVA7QUFFOUIsWUFBSXhZLEdBQUcsS0FBSyxHQUFaLEVBQWlCLEtBQUksQ0FBQ2xCLElBQUwsQ0FBVSxhQUFWLEVBQXlCUixNQUFNLENBQUNVLFlBQVAsR0FBc0IyQixRQUF0QixFQUF6QixFQUFqQixLQUVLLElBQUl3WCxXQUFKLEVBQWlCO0FBQ3BCLGVBQUksQ0FBQ3JaLElBQUwsQ0FBVSxvQkFBVixFQUFnQ3BDLENBQWhDLEVBQW1Dd2IsT0FBbkM7QUFDRCxTQUZJLE1BR0EsS0FBSSxDQUFDcFosSUFBTCxDQUFVLGdCQUFWLEVBQTRCa0IsR0FBNUI7QUFDTjtBQUNGLEtBckNEO0FBc0NELEdBbEZZO0FBbUZiQyxtQkFuRmEsNkJBbUZLdkQsQ0FuRkwsRUFtRlE7QUFDbkIsU0FBS29DLElBQUwsQ0FBVSxtQkFBVixFQUErQixDQUFDUixNQUFNLENBQUNVLFlBQVAsR0FBc0JDLFdBQXREO0FBQ0Q7QUFyRlksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDcXBCZSxZQUFXO0FBRXpCLFNBQU8sSUFBSW5GLGNBQUosQ0FBWTtBQUNoQk8sVUFBTSxFQUFFO0FBQ05DLFNBQUcsRUFBRTtBQUNILHlCQUFpQixTQURkO0FBRUgsc0JBQWMsV0FGWDtBQUdILGdDQUF3Qix1QkFIckI7QUFJSCwyQkFBbUI7QUFKaEI7QUFEQyxLQURRO0FBVWhCUSxXQUFPLEVBQUUsSUFWTztBQVdoQjJWLFNBQUssRUFBRSxDQVhTO0FBWWhCZ0ksWUFBUSxFQUFFLENBWk07QUFhaEJDLFVBQU0sRUFBRSxDQWJRO0FBY2hCQyxpQkFBYSxFQUFFLEVBZEM7QUFnQmhCaEQsV0FoQmdCLG1CQWdCUjdhLE9BaEJRLEVBZ0JDO0FBQ2YsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDZCxVQUFJLENBQUMwRSxLQUFLLENBQUNDLE9BQU4sQ0FBYzNFLE9BQWQsQ0FBTCxFQUE2QkEsT0FBTyxHQUFHLENBQUNBLE9BQUQsQ0FBVjtBQUU3QixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLMlYsS0FBTCxHQUFhM1YsT0FBTyxDQUFDNkIsTUFBckI7QUFFQTdCLGFBQU8sQ0FBQ2dSLE9BQVIsQ0FBZ0IsVUFBQTVQLEtBQUssRUFBSTtBQUN2QixZQUFJQSxLQUFLLENBQUNmLEtBQVYsRUFBaUIsSUFBSXlkLGFBQUosQ0FBa0IxYyxLQUFsQixFQUFqQixLQUNLLElBQUkyYyxRQUFKLENBQWEzYyxLQUFiO0FBQ04sT0FIRDtBQUlELEtBM0JlO0FBNEJoQlgsVUE1QmdCLG9CQTRCUDtBQUNQLFdBQUtrZCxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0QsS0FoQ2U7QUFpQ2hCRyxTQWpDZ0IsaUJBaUNWNWMsS0FqQ1UsRUFpQ0g7QUFDWEEsV0FBSyxHQUFHQSxLQUFLLEdBQUcsQ0FBQ0EsS0FBRCxDQUFILEdBQWEsS0FBS3BCLE9BQS9CO0FBQ0EsV0FBS1MsTUFBTDtBQUNBLFdBQUtvYSxPQUFMLENBQWF6WixLQUFiO0FBQ0QsS0FyQ2U7QUFzQ2hCNmMsYUF0Q2dCLHFCQXNDTkMsTUF0Q00sRUFzQ0U7QUFDaEIsV0FBS04sTUFBTDs7QUFDQSxXQUFLLElBQUk5YixDQUFULElBQWNvYyxNQUFkO0FBQXNCLGFBQUtMLGFBQUwsQ0FBbUIvYixDQUFuQixJQUF3Qm9jLE1BQU0sQ0FBQ3BjLENBQUQsQ0FBOUI7QUFBdEI7QUFDRCxLQXpDZTtBQTBDaEJpUix5QkExQ2dCLG1DQTBDUTtBQUN0QixVQUFJLEVBQUUsS0FBSzRLLFFBQVAsS0FBb0IsS0FBS2hJLEtBQTdCLEVBQW9DO0FBQ2xDLGFBQUszUixJQUFMLENBQVUsMkJBQVY7QUFDQSxZQUFJLEtBQUs0WixNQUFULEVBQWlCLEtBQUs1WixJQUFMLENBQVUsb0JBQVYsRUFBZ0MsS0FBS21hLFNBQUwsRUFBaEMsRUFBakIsS0FDSyxLQUFLbmEsSUFBTCxDQUFVLHVCQUFWO0FBQ047QUFDRixLQWhEZTtBQWlEaEJtYSxhQWpEZ0IsdUJBaURKO0FBQ1YsVUFBTUQsTUFBTSxHQUFHLEtBQUtMLGFBQXBCO0FBQ0EsVUFBSU8sR0FBRyxHQUFHLEVBQVY7O0FBQ0EsV0FBSyxJQUFJdGMsQ0FBVCxJQUFjb2MsTUFBZCxFQUFzQjtBQUNwQkUsV0FBRyxjQUFPRixNQUFNLENBQUNwYyxDQUFELENBQU4sQ0FBVXVjLE1BQWpCLGdCQUE2QkgsTUFBTSxDQUFDcGMsQ0FBRCxDQUFOLENBQVU2RixJQUF2QyxPQUFIO0FBQ0Q7O0FBQ0QsYUFBT3lXLEdBQVA7QUFDRDtBQXhEZSxHQUFaLENBQVA7QUEwREEsQzs7QUFwdEJEOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNRSxZOzs7OztBQUVKLHdCQUFZbGQsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixzRkFBTUEsS0FBTjtBQUVBLFVBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUttTyxJQUFMLEdBQVksRUFBWjtBQUNBLFVBQUtzTyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsVUFBS0YsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUtZLElBQUwsR0FBWW5kLEtBQUssQ0FBQ0csTUFBTixHQUFlLE1BQWYsR0FBd0IsT0FBcEM7O0FBRUEsVUFBS3lDLElBQUwsQ0FBVSxxQkFBVixFQUFpQzVDLEtBQUssQ0FBQ2lPLEtBQU4sQ0FBWXhOLE1BQTdDOztBQVRpQjtBQVVsQjs7OztvQ0FFZXlJLEksRUFBTWtVLEksRUFBTUMsRSxFQUFJO0FBQzlCRCxVQUFJLEdBQUdBLElBQUksQ0FBQy9ZLElBQUwsQ0FBVSxJQUFWLENBQVA7QUFDQWdaLFFBQUUsR0FBR0EsRUFBRSxDQUFDaFosSUFBSCxDQUFRLElBQVIsQ0FBTDs7QUFFRixPQUFDLFNBQVNpWixHQUFULEdBQWU7QUFBQTs7QUFDZixZQUFJQyxNQUFNLEdBQUcsQ0FBQyxJQUFJcEosSUFBSixFQUFELEdBQWMsR0FBM0I7O0FBRUEsV0FBRztBQUNGLGNBQUk7QUFDRWlKLGdCQUFJLENBQUNsVSxJQUFJLENBQUNvRyxLQUFMLEVBQUQsQ0FBSjtBQUNELFdBRkwsQ0FFTSxPQUFNOU8sQ0FBTixFQUFTO0FBQ1RxUyxzQkFBVSxDQUFDO0FBQUEscUJBQU0sTUFBSSxDQUFDalEsSUFBTCxDQUFVLHNCQUFWLEVBQWtDcEMsQ0FBQyxDQUFDaUUsUUFBRixFQUFsQyxDQUFOO0FBQUEsYUFBRCxFQUF3RCxDQUF4RCxDQUFWO0FBQ0Q7QUFFTCxTQVBELFFBT1N5RSxJQUFJLENBQUN6SSxNQUFMLEdBQWMsQ0FBZCxJQUFtQjhjLE1BQU0sR0FBRyxDQUFDLElBQUlwSixJQUFKLEVBUHRDOztBQVNBLFlBQUlqTCxJQUFJLENBQUN6SSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUIyQixNQUFNLENBQUN5USxVQUFQLENBQWtCO0FBQUEsaUJBQU15SyxHQUFHLEVBQVQ7QUFBQSxTQUFsQixFQUErQixDQUEvQixFQUFyQixLQUNLRCxFQUFFO0FBQ1AsT0FkRDtBQWVBOzs7NkJBQ1M7QUFDUCxVQUFJRyxFQUFFLEdBQUcsS0FBS3JQLElBQUwsQ0FBVTFOLE1BQW5COztBQUNBLFVBQUkrYyxFQUFKLEVBQVE7QUFDTixlQUFNQSxFQUFFLEVBQVIsRUFBWTtBQUNWLGlCQUFPLEtBQUtyUCxJQUFMLENBQVVxUCxFQUFWLEVBQWNDLElBQXJCO0FBQ0Q7O0FBQ0QsYUFBSzdhLElBQUwsQ0FBVSxZQUFWLEVBQXdCLEtBQUs2WixhQUE3QjtBQUNEOztBQUNELFdBQUs3WixJQUFMLENBQVUsc0JBQVYsRUFBa0MsS0FBSzVDLEtBQUwsQ0FBV3ZCLElBQTdDLEVBQW1ELEtBQUs4ZCxRQUF4RCxFQUFrRSxLQUFLcE8sSUFBdkUsRUFBNkUsS0FBS2dQLElBQWxGO0FBQ0Q7Ozs7RUEzQ3dCdmYsYzs7SUE4Q3JCK2UsUTs7Ozs7QUFFSixvQkFBWTNjLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsbUZBQU1BLEtBQU47QUFFQSxXQUFLMGQsS0FBTCxHQUFhLEVBQWI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsR0FBckI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBQyxJQUFJNUosSUFBSixFQUFELEdBQWMsT0FBSzJKLGFBQWpDO0FBQ0EsV0FBS0UsR0FBTCxHQUFXaGUsS0FBSyxDQUFDaU8sS0FBTixDQUFZeE4sTUFBWixLQUF1QixDQUF2QixJQUE0QlQsS0FBSyxDQUFDaU8sS0FBTixDQUFZLENBQVosRUFBZWpKLEVBQWYsSUFBcUIsQ0FBNUQ7O0FBRUEsV0FBS2laLElBQUw7O0FBWGlCO0FBWWxCOzs7OzJCQU9NO0FBQ0wsVUFBSWplLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUFBLFVBQ0lrZSxHQUFHLEdBQUcsRUFEVjtBQUFBLFVBQ2NDLFNBQVMsR0FBRyxFQUQxQjtBQUFBLFVBRUlsUSxLQUFLLEdBQUdqTyxLQUFLLENBQUNpTyxLQUZsQjtBQUFBLFVBR0lGLENBQUMsR0FBR0UsS0FBSyxDQUFDeE4sTUFIZDtBQUFBLFVBSUlDLENBQUMsR0FBRyxDQUpSO0FBQUEsVUFJV2lFLElBSlg7O0FBTUEsYUFBT2pFLENBQUMsR0FBR3FOLENBQVgsRUFBY3JOLENBQUMsRUFBZixFQUFtQjtBQUNqQmlFLFlBQUksR0FBR3NKLEtBQUssQ0FBQ3ZOLENBQUQsQ0FBWjtBQUVBLGFBQUswZCxrQkFBTCxDQUF3QnpaLElBQXhCLEVBQThCMFosZ0JBQTlCLENBQStDMVosSUFBL0M7QUFFQSxZQUFJQSxJQUFJLENBQUMyQixLQUFMLENBQVcwRSxFQUFYLEtBQWtCLElBQXRCLEVBQTRCbVQsU0FBUyxDQUFDdlcsSUFBVixDQUFlakQsSUFBZixFQUE1QixLQUNLdVosR0FBRyxDQUFDdFcsSUFBSixDQUFTakQsSUFBVDtBQUNOOztBQUVELFdBQUsrWSxLQUFMLENBQVc5VixJQUFYLENBQWdCc1csR0FBaEI7O0FBRUEsV0FBS3hkLENBQUMsR0FBRyxDQUFKLEVBQU9xTixDQUFDLEdBQUdvUSxTQUFTLENBQUMxZCxNQUExQixFQUFrQ0MsQ0FBQyxHQUFHcU4sQ0FBdEMsRUFBeUNyTixDQUFDLEVBQTFDLEVBQThDO0FBQzVDLGFBQUtnZCxLQUFMLENBQVc5VixJQUFYLENBQWdCLENBQUN1VyxTQUFTLENBQUN6ZCxDQUFELENBQVYsQ0FBaEI7QUFDRDs7QUFFRCxXQUFLK1ksT0FBTDtBQUNEOzs7dUNBQ2tCOVUsSSxFQUFNO0FBQ3ZCLFVBQUksT0FBT0EsSUFBSSxDQUFDMkIsS0FBTCxDQUFXeUUsQ0FBbEIsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkMsWUFBSXpFLEtBQUssR0FBRzNCLElBQUksQ0FBQzJCLEtBQWpCO0FBQUEsWUFDSWdZLGNBQWMsR0FBRztBQUNmdlQsV0FBQyxFQUFFekUsS0FBSyxDQUFDTyxXQURNO0FBRWZtRSxZQUFFLEVBQUUxRSxLQUFLLENBQUNpWSxhQUZLO0FBR2ZwVCxZQUFFLEVBQUU3RSxLQUFLLENBQUNrWSxtQkFISztBQUlmdFQsWUFBRSxFQUFFNUUsS0FBSyxDQUFDbVkscUJBSks7QUFLZnJULFlBQUUsRUFBRTlFLEtBQUssQ0FBQ29ZLGlCQUxLO0FBTWZyVCxZQUFFLEVBQUUvRSxLQUFLLENBQUNxWSx1QkFOSztBQU9mclQsWUFBRSxFQUFFaEYsS0FBSyxDQUFDc1k7QUFQSyxTQURyQjtBQVVBLGVBQU9qYSxJQUFJLENBQUMyQixLQUFaO0FBQ0EzQixZQUFJLENBQUMyQixLQUFMLEdBQWFnWSxjQUFiO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztxQ0FDZ0IzWixJLEVBQU07QUFDckIsVUFBSTRCLElBQUksR0FBRzVCLElBQUksQ0FBQzRCLElBQWhCO0FBQUEsVUFDSXNZLFdBQVcsR0FBR3RZLElBQUksQ0FBQzhLLElBQUwsRUFEbEI7QUFBQSxVQUVJeU4sWUFBWSxHQUFHLEtBQUtDLE9BQUwsQ0FBYXBhLElBQUksQ0FBQzRCLElBQWxCLENBRm5CO0FBSUE1QixVQUFJLENBQUM4WSxJQUFMLEdBQVk7QUFDVnVCLGtCQUFVLEVBQUV6WSxJQUFJLENBQUM5RixNQURQO0FBRVZvZSxtQkFBVyxFQUFFQSxXQUZIO0FBR1ZJLHlCQUFpQixFQUFFSixXQUFXLENBQUNwZSxNQUhyQjtBQUlWcWUsb0JBQVksRUFBRUEsWUFKSjtBQUtWSSwwQkFBa0IsRUFBRUosWUFBWSxDQUFDcmUsTUFMdkI7QUFNVjBlLHlCQUFpQixFQUFFLEVBTlQ7QUFPVkMsNEJBQW9CLEVBQUUsRUFQWjtBQVFWQywwQkFBa0IsRUFBRSxFQVJWO0FBU1ZDLG9CQUFZLEVBQUUsRUFUSjtBQVVWQyw0QkFBb0IsRUFBRTtBQVZaLE9BQVo7QUFhQTVhLFVBQUksQ0FBQ3hFLE1BQUwsR0FBYyxLQUFLSCxLQUFMLENBQVdHLE1BQXpCO0FBQ0Q7Ozs4QkFDUztBQUFBOztBQUNSLFVBQUksS0FBS3lkLEtBQUwsS0FBZSxDQUFuQixFQUFzQixLQUFLNEIsYUFBTDtBQUV0QixVQUFJdlIsS0FBSyxHQUFHLEtBQUtBLEtBQUwsR0FBYSxLQUFLeVAsS0FBTCxDQUFXcE8sS0FBWCxFQUF6QjtBQUFBLFVBQ0k3TyxNQUFNLEdBQUd3TixLQUFLLEdBQUdBLEtBQUssQ0FBQ3hOLE1BQVQsR0FBa0IsQ0FEcEM7QUFHQSxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsVUFBSUEsTUFBSixFQUFZO0FBQ1YsYUFBS2dmLGdCQUFMLENBQXNCcmQsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQmdGLElBQXRDLEVBQ0tvYixnQkFETCxDQUNzQnpSLEtBRHRCLEVBQzZCeE4sTUFEN0I7QUFHQSxZQUFJLEtBQUttZCxLQUFMLEtBQWUsQ0FBZixJQUFvQm5kLE1BQU0sR0FBRyxDQUFqQyxFQUNJLEtBQUtrZixvQkFBTDtBQUVKLGFBQUtDLG1CQUFMLEdBQ0tDLGdCQURMLEdBRUtDLGFBRkw7QUFJQSxhQUFLbEMsS0FBTDs7QUFFQSxZQUFJLEtBQUtGLEtBQUwsQ0FBV2pkLE1BQWYsRUFBdUI7QUFDckIsY0FBSSxLQUFLc2YsS0FBTCxHQUFhLENBQUMsSUFBSTVMLElBQUosRUFBbEIsRUFBOEJ0QixVQUFVLENBQUM7QUFBQSxtQkFBTSxNQUFJLENBQUM0RyxPQUFMLEVBQU47QUFBQSxXQUFELEVBQXVCLENBQXZCLENBQVYsQ0FBOUIsS0FDSyxLQUFLQSxPQUFMO0FBQ04sU0FIRCxNQUlLLEtBQUtxRCxNQUFMO0FBQ04sT0FsQkQsTUFtQkssS0FBS0EsTUFBTDtBQUNOOzs7b0NBQ2U7QUFDZCxVQUFJN08sS0FBSyxHQUFHLEtBQUt5UCxLQUFqQjtBQUFBLFVBQ0kzUCxDQUFDLEdBQUdFLEtBQUssR0FBR0EsS0FBSyxDQUFDeE4sTUFBVCxHQUFrQixDQUQvQjtBQUFBLFVBRUlnZCxJQUFJLEdBQUcsRUFGWDtBQUFBLFVBR0l1QyxHQUFHLEdBQUcsRUFIVjtBQUFBLFVBSUl0ZixDQUFDLEdBQUcsQ0FKUjtBQUFBLFVBS0lpRSxJQUxKO0FBQUEsVUFLVTRRLENBTFY7O0FBT0EsYUFBT3hILENBQUMsRUFBUixFQUFZO0FBQ1YsWUFBSSxDQUFDRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTdE4sTUFBZCxFQUFzQjtBQUN0QmtFLFlBQUksR0FBR3NKLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQUFQO0FBQ0EwUCxZQUFJLENBQUM5WSxJQUFJLENBQUNLLEVBQU4sQ0FBSixHQUFnQkwsSUFBaEI7QUFDRDs7QUFDRCxXQUFLK1ksS0FBTCxHQUFhLEVBQWI7O0FBRUEsV0FBS25JLENBQUMsR0FBR2tJLElBQUksQ0FBQ2hkLE1BQWQsRUFBc0JDLENBQUMsR0FBRzZVLENBQTFCLEVBQTZCN1UsQ0FBQyxFQUE5QixFQUFrQztBQUNoQyxZQUFJK2MsSUFBSSxDQUFDL2MsQ0FBRCxDQUFSLEVBQWEsS0FBS2dkLEtBQUwsQ0FBVzlWLElBQVgsQ0FBZ0IsQ0FBQzZWLElBQUksQ0FBQy9jLENBQUQsQ0FBTCxDQUFoQjtBQUNkOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7cUNBQ2dCdU4sSyxFQUFPRixDLEVBQUc7QUFDekIsVUFBSWtTLG9CQUFvQixHQUFHLEtBQUtBLG9CQUFoQztBQUFBLFVBQ0lDLHlCQUF5QixHQUFHLEtBQUtBLHlCQUFMLEdBQWlDLEVBRGpFO0FBQUEsVUFFSUMsWUFBWSxHQUFHLEVBRm5CO0FBQUEsVUFHSXhiLElBSEo7QUFBQSxVQUdVeWIsUUFIVjtBQUFBLFVBR29CdEIsWUFIcEI7QUFBQSxVQUdrQ0ksa0JBSGxDO0FBQUEsVUFHc0R0VCxDQUh0RDtBQUFBLFVBR3lESixXQUh6RDs7QUFLQSxhQUFPdUMsQ0FBQyxFQUFSLEVBQVk7QUFDVm5DLFNBQUMsR0FBR2xOLFNBQUo7QUFDQWlHLFlBQUksR0FBR3NKLEtBQUssQ0FBQ0YsQ0FBRCxDQUFaO0FBQ0FxUyxnQkFBUSxHQUFHemIsSUFBSSxDQUFDOFksSUFBaEI7O0FBRUEsWUFBSSxDQUFDMkMsUUFBTCxFQUFlO0FBQ2JuUyxlQUFLLENBQUN1QixNQUFOLENBQWF6QixDQUFiLEVBQWdCLENBQWhCO0FBQ0E7QUFDRDs7QUFFRCxZQUFJcVMsUUFBUSxDQUFDakIsaUJBQVQsQ0FBMkIxZSxNQUEvQixFQUF1QztBQUVyQ3lmLG1DQUF5QixHQUFHQSx5QkFBeUIsQ0FBQ2hTLE1BQTFCLENBQWlDa1MsUUFBUSxDQUFDakIsaUJBQTFDLENBQTVCO0FBQ0FnQixzQkFBWSxHQUFHQSxZQUFZLENBQUNqUyxNQUFiLENBQW9Ca1MsUUFBUSxDQUFDaEIsb0JBQTdCLENBQWY7QUFFRCxTQUxELE1BS087QUFFTE4sc0JBQVksR0FBR3NCLFFBQVEsQ0FBQ3RCLFlBQXhCO0FBQ0FJLDRCQUFrQixHQUFHa0IsUUFBUSxDQUFDbEIsa0JBQTlCOztBQUVBLGlCQUFPdFQsQ0FBQyxLQUFLLENBQUMsQ0FBZCxFQUFpQjtBQUNmLGdCQUFJQSxDQUFDLEtBQUtsTixTQUFWLEVBQXFCa04sQ0FBQyxHQUFHLENBQUMsQ0FBTDtBQUNyQkEsYUFBQyxHQUFHcVUsb0JBQW9CLENBQUN0USxPQUFyQixDQUE2Qm1QLFlBQTdCLEVBQTJDbFQsQ0FBQyxHQUFHLENBQS9DLENBQUo7QUFDQUosdUJBQVcsR0FBR0ksQ0FBQyxHQUFHc1Qsa0JBQWxCO0FBQ0FrQixvQkFBUSxDQUFDakIsaUJBQVQsQ0FBMkJ2WCxJQUEzQixDQUFnQyxDQUFDZ0UsQ0FBRCxFQUFJSixXQUFKLEVBQWlCN0csSUFBakIsQ0FBaEM7QUFDQXliLG9CQUFRLENBQUNoQixvQkFBVCxDQUE4QnhYLElBQTlCLENBQW1DNEQsV0FBbkM7QUFDQTBVLHFDQUF5QixDQUFDdFksSUFBMUIsQ0FBK0IsQ0FBQ2dFLENBQUQsRUFBSUosV0FBSixFQUFpQjdHLElBQWpCLENBQS9CO0FBQ0F3Yix3QkFBWSxDQUFDdlksSUFBYixDQUFrQjRELFdBQWxCO0FBQ0Q7O0FBRUQ0VSxrQkFBUSxDQUFDakIsaUJBQVQsQ0FBMkIzUyxHQUEzQjtBQUNBMFQsbUNBQXlCLENBQUMxVCxHQUExQjtBQUNBMlQsc0JBQVksQ0FBQzNULEdBQWI7O0FBRUEsY0FBSSxDQUFDNFQsUUFBUSxDQUFDakIsaUJBQVQsQ0FBMkIxZSxNQUFoQyxFQUF3QztBQUN0QyxpQkFBSzBOLElBQUwsQ0FBVXZHLElBQVYsQ0FBZWpELElBQWY7QUFDQSxpQkFBSzhYLGFBQUwsQ0FBbUI5WCxJQUFJLENBQUNLLEVBQXhCLElBQThCO0FBQUV1QixrQkFBSSxFQUFFNUIsSUFBSSxDQUFDNEIsSUFBYjtBQUFtQjBXLG9CQUFNLEVBQUVyYyxPQUFPLENBQUM4UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUNBQXhCO0FBQTNCLGFBQTlCO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFdBQUswUCwwQkFBTCxDQUFnQ0gseUJBQWhDO0FBQ0EsV0FBS0ksV0FBTCxHQUFtQmxTLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQjZSLFlBQXJCLENBQW5CO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsrQ0FDMEJJLFMsRUFBVztBQUNwQyxVQUFJeFMsQ0FBQyxHQUFHd1MsU0FBUyxDQUFDOWYsTUFBbEI7QUFBQSxVQUNJZ2QsSUFBSSxHQUFHLEVBRFg7QUFBQSxVQUVJL2MsQ0FBQyxHQUFHLENBRlI7QUFBQSxVQUdJNFIsR0FISjtBQUFBLFVBR1NqSSxLQUhUO0FBQUEsVUFHZ0JrTCxDQUhoQjs7QUFLQSxhQUFPeEgsQ0FBQyxFQUFSLEVBQVk7QUFDVnVFLFdBQUcsR0FBR2lPLFNBQVMsQ0FBQ3hTLENBQUQsQ0FBZjtBQUNBMUQsYUFBSyxHQUFHaUksR0FBRyxDQUFDLENBQUQsQ0FBWDtBQUVBLFlBQUltTCxJQUFJLENBQUNwVCxLQUFELENBQVIsRUFBaUJvVCxJQUFJLENBQUNqTyxNQUFMLENBQVluRixLQUFLLEdBQUcsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEJpSSxHQUExQixFQUFqQixLQUNLbUwsSUFBSSxDQUFDcFQsS0FBRCxDQUFKLEdBQWNpSSxHQUFkO0FBQ047O0FBQ0RpRCxPQUFDLEdBQUdrSSxJQUFJLENBQUNoZCxNQUFUO0FBQ0EsV0FBS3lmLHlCQUFMLEdBQWlDLEVBQWpDOztBQUVBLGFBQU94ZixDQUFDLEdBQUc2VSxDQUFYLEVBQWM3VSxDQUFDLEVBQWY7QUFDRSxZQUFJK2MsSUFBSSxDQUFDL2MsQ0FBRCxDQUFSLEVBQWEsS0FBS3dmLHlCQUFMLENBQStCdFksSUFBL0IsQ0FBb0M2VixJQUFJLENBQUMvYyxDQUFELENBQXhDO0FBRGY7QUFFRDs7OzJDQUNzQjtBQUNyQixVQUFJNmYsU0FBUyxHQUFHLEtBQUtMLHlCQUFyQjtBQUFBLFVBQ0l0VSxDQUFDLEdBQUcyVSxTQUFTLENBQUM5ZixNQURsQjtBQUFBLFVBRUkwZCxTQUFTLEdBQUcsRUFGaEI7QUFBQSxVQUdJcUMsSUFISjtBQUFBLFVBR1VDLElBSFY7QUFBQSxVQUdnQi9mLENBSGhCO0FBQUEsVUFHbUJ3UyxFQUhuQjtBQUFBLFVBR3VCQyxFQUh2QjtBQUFBLFVBRzJCUSxHQUgzQjtBQUFBLFVBR2dDRSxHQUhoQztBQUFBLFVBR3FDN08sRUFIckM7O0FBS0EsVUFBSTRHLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDVCxlQUFPQSxDQUFDLEtBQUssQ0FBYixFQUFnQjtBQUNkNFUsY0FBSSxHQUFHRCxTQUFTLENBQUMzVSxDQUFDLEdBQUcsQ0FBTCxDQUFoQjtBQUNBNlUsY0FBSSxHQUFHRixTQUFTLENBQUMzVSxDQUFELENBQWhCO0FBQ0FzSCxZQUFFLEdBQUdzTixJQUFJLENBQUMsQ0FBRCxDQUFUO0FBQ0FyTixZQUFFLEdBQUdzTixJQUFJLENBQUMsQ0FBRCxDQUFUO0FBQ0E5TSxhQUFHLEdBQUdULEVBQUUsQ0FBQ2xPLEVBQVQ7QUFDQTZPLGFBQUcsR0FBR1YsRUFBRSxDQUFDbk8sRUFBVDtBQUVBLGNBQUkyTyxHQUFHLEtBQUtFLEdBQVosRUFBaUI7O0FBRWpCLGNBQUkyTSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVDLElBQUksQ0FBQyxDQUFELENBQWQsSUFBcUJELElBQUksQ0FBQyxDQUFELENBQUosR0FBVUMsSUFBSSxDQUFDLENBQUQsQ0FBdkMsRUFBNEM7QUFFMUMsZ0JBQUk5TSxHQUFHLEdBQUdFLEdBQVYsRUFBZTtBQUNiN08sZ0JBQUUsR0FBRzZPLEdBQUw7O0FBRUEsa0JBQUksQ0FBQ3NLLFNBQVMsQ0FBQy9PLFFBQVYsQ0FBbUJwSyxFQUFuQixDQUFMLEVBQTZCO0FBQzNCLHFCQUFLMGIsUUFBTCxDQUFjdk4sRUFBZDtBQUNBZ0wseUJBQVMsQ0FBQ3ZXLElBQVYsQ0FBZTVDLEVBQWY7QUFDRDtBQUNGLGFBUEQsTUFRSztBQUNIQSxnQkFBRSxHQUFHMk8sR0FBTDs7QUFFQSxrQkFBSSxDQUFDd0ssU0FBUyxDQUFDL08sUUFBVixDQUFtQnBLLEVBQW5CLENBQUwsRUFBNkI7QUFDM0IscUJBQUswYixRQUFMLENBQWN4TixFQUFkO0FBQ0FpTCx5QkFBUyxDQUFDdlcsSUFBVixDQUFlNUMsRUFBZjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUNENEcsU0FBQyxHQUFHdVMsU0FBUyxDQUFDMWQsTUFBZDs7QUFFQSxhQUFLQyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdrTCxDQUFoQixFQUFtQmxMLENBQUMsRUFBcEI7QUFDRSxlQUFLaWdCLFNBQUwsQ0FBZXhDLFNBQVMsQ0FBQ3pkLENBQUQsQ0FBeEI7QUFERjtBQUVEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7OEJBQ1NzRSxFLEVBQUk7QUFDWixVQUFJdWIsU0FBUyxHQUFHLEtBQUtMLHlCQUFyQjtBQUFBLFVBQ0l0VSxDQUFDLEdBQUcyVSxTQUFTLENBQUM5ZixNQURsQjs7QUFHQSxhQUFNbUwsQ0FBQyxFQUFQLEVBQVc7QUFDVCxZQUFJMlUsU0FBUyxDQUFDM1UsQ0FBRCxDQUFULENBQWEsQ0FBYixFQUFnQjVHLEVBQWhCLEtBQXVCQSxFQUEzQixFQUNFLEtBQUtrYix5QkFBTCxDQUErQjFRLE1BQS9CLENBQXNDNUQsQ0FBdEMsRUFBeUMsQ0FBekM7QUFDSDtBQUNGOzs7NkJBQ1FqSCxJLEVBQU07QUFDYixVQUFJK1ksS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBQUEsVUFDSTNQLENBQUMsR0FBRzJQLEtBQUssQ0FBQ2pkLE1BRGQ7QUFBQSxVQUVJbWdCLGVBQWUsR0FBRyxLQUZ0Qjs7QUFJQSxhQUFPN1MsQ0FBQyxFQUFSLEVBQVk7QUFDVixZQUFJMlAsS0FBSyxDQUFDM1AsQ0FBRCxDQUFMLENBQVMsQ0FBVCxNQUFnQnBKLElBQXBCLEVBQTBCO0FBQ3hCaWMseUJBQWUsR0FBRyxJQUFsQjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJLENBQUNBLGVBQUwsRUFDRSxLQUFLbEQsS0FBTCxDQUFXOVYsSUFBWCxDQUFnQixDQUFDakQsSUFBRCxDQUFoQjtBQUNIOzs7MENBQ3FCO0FBQ3BCLFVBQUl3QyxLQUFLLEdBQUcsS0FBSzBaLGFBQWpCO0FBQUEsVUFDSXpaLENBQUMsR0FBR0QsS0FBSyxHQUFHQSxLQUFLLENBQUMxRyxNQUFULEdBQWtCLENBRC9CO0FBQUEsVUFFSXFPLE9BQU8sR0FBRyxLQUFLb1IseUJBRm5CO0FBQUEsVUFHSXRDLEtBQUssR0FBRyxLQUFLQSxLQUhqQjtBQUFBLFVBSUlELEtBQUssR0FBRyxLQUFLQSxLQUFMLEdBQWEsRUFKekI7QUFBQSxVQUtJbUQsU0FBUyxHQUFHLEVBTGhCO0FBQUEsVUFNSXBnQixDQUFDLEdBQUcsQ0FOUjtBQUFBLFVBTVdxZ0IsS0FBSyxHQUFHLENBTm5CO0FBQUEsVUFPSUMsY0FQSjtBQUFBLFVBT29CQyxpQkFQcEI7QUFBQSxVQVFJMVosSUFSSjtBQUFBLFVBUVUyWixTQVJWO0FBQUEsVUFRcUJDLGVBUnJCO0FBQUEsVUFTSXhjLElBVEo7QUFBQSxVQVNVeWMsSUFUVjtBQUFBLFVBU2dCclQsQ0FUaEI7QUFBQSxVQVNtQnhDLGFBVG5CO0FBQUEsVUFTa0NDLFdBVGxDO0FBQUEsVUFTK0NoTCxDQVQvQztBQUFBLFVBU2tENmdCLENBVGxEO0FBQUEsVUFTcURyYyxFQVRyRDtBQUFBLFVBU3lENEcsQ0FUekQ7QUFBQSxVQVM0RDBWLENBVDVEO0FBQUEsVUFTK0RwUyxDQVQvRDtBQUFBLFVBU2tFOUMsQ0FUbEU7QUFBQSxVQVVJbVYsbUJBVko7QUFBQSxVQVV5QkMsYUFWekI7QUFBQSxVQVV3Q3JELFNBVnhDO0FBQUEsVUFVbURzRCxvQkFWbkQ7O0FBWUEsYUFBTy9nQixDQUFDLEdBQUcwRyxDQUFYLEVBQWMxRyxDQUFDLEVBQWYsRUFBbUI7QUFDakI2RyxZQUFJLEdBQUdKLEtBQUssQ0FBQ3pHLENBQUQsQ0FBWjtBQUNBd2dCLGlCQUFTLEdBQUcsS0FBS25DLE9BQUwsQ0FBYXhYLElBQUksQ0FBQzJCLElBQWxCLENBQVo7QUFDQWlZLHVCQUFlLEdBQUdELFNBQVMsQ0FBQ3pnQixNQUE1QjtBQUNBc2dCLGFBQUssSUFBSUksZUFBVDtBQUNBcFQsU0FBQyxHQUFHZSxPQUFPLENBQUNyTyxNQUFaO0FBQ0ErZ0IscUJBQWEsR0FBRyxFQUFoQjtBQUNBckQsaUJBQVMsR0FBRyxFQUFaO0FBQ0FzRCw0QkFBb0IsR0FBRyxJQUF2Qjs7QUFFQSxlQUFPMVQsQ0FBQyxFQUFSLEVBQVk7QUFDVnhDLHVCQUFhLEdBQUd1RCxPQUFPLENBQUNmLENBQUQsQ0FBUCxDQUFXLENBQVgsQ0FBaEI7QUFDQXZDLHFCQUFXLEdBQUdzRCxPQUFPLENBQUNmLENBQUQsQ0FBUCxDQUFXLENBQVgsQ0FBZDtBQUNBcEosY0FBSSxHQUFHbUssT0FBTyxDQUFDZixDQUFELENBQVAsQ0FBVyxDQUFYLENBQVA7QUFDQS9JLFlBQUUsR0FBR0wsSUFBSSxDQUFDSyxFQUFWO0FBRUFMLGNBQUksQ0FBQzhZLElBQUwsQ0FBVStELGFBQVYsR0FBMEI3YyxJQUFJLENBQUM4WSxJQUFMLENBQVUrRCxhQUFWLElBQTJCLEVBQXJEO0FBQ0E3YyxjQUFJLENBQUM4WSxJQUFMLENBQVVpRSxXQUFWLEdBQXdCL2MsSUFBSSxDQUFDOFksSUFBTCxDQUFVaUUsV0FBVixJQUF5QixFQUFqRDs7QUFFQSxjQUNFLENBQUMvYyxJQUFJLENBQUM4WSxJQUFMLENBQVUrRCxhQUFWLENBQXdCcFMsUUFBeEIsQ0FBaUM3RCxhQUFqQyxDQUFELElBQ0F3VixLQUFLLEdBQUd4VixhQURSLElBRUE1RyxJQUFJLENBQUM4WSxJQUFMLENBQVU0QixrQkFBVixDQUE2QjVlLE1BQTdCLEdBQXNDa0UsSUFBSSxDQUFDOFksSUFBTCxDQUFVMEIsaUJBQVYsQ0FBNEIxZSxNQUhwRSxFQUlFO0FBQ0EsZ0JBQUlnaEIsb0JBQW9CLElBQUlBLG9CQUFvQixDQUFDemMsRUFBckIsR0FBMEJMLElBQUksQ0FBQ0ssRUFBM0QsRUFBK0Q7QUFDN0Qsa0JBQUk0WSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLHFCQUFLOEMsUUFBTCxDQUFjL2IsSUFBZDtBQUNBd1oseUJBQVMsQ0FBQ3ZXLElBQVYsQ0FBZTVDLEVBQWY7QUFDRDs7QUFDRDhKLHFCQUFPLENBQUNVLE1BQVIsQ0FBZXpCLENBQWYsRUFBa0IsQ0FBbEI7QUFFQTtBQUNELGFBUkQsTUFRTztBQUNMLGtCQUFJLENBQUMsS0FBSzRULG9CQUFMLENBQTBCaGQsSUFBMUIsRUFBZ0M0QyxJQUFoQyxDQUFMLEVBQTRDO0FBQzFDLG9CQUFJcVcsS0FBSyxLQUFLLENBQVYsSUFBZTVZLEVBQUUsS0FBSyxDQUExQixFQUE2QjtBQUMzQix1QkFBSzBiLFFBQUwsQ0FBYy9iLElBQWQ7QUFDQXdaLDJCQUFTLENBQUN2VyxJQUFWLENBQWU1QyxFQUFmO0FBQ0Q7O0FBQ0Q4Six1QkFBTyxDQUFDVSxNQUFSLENBQWV6QixDQUFmLEVBQWtCLENBQWxCO0FBRUE7QUFDRCxlQVJELE1BU0s7QUFDSHBKLG9CQUFJLENBQUM4WSxJQUFMLENBQVU0QixrQkFBVixDQUE2QnpYLElBQTdCLENBQWtDO0FBQUVMLHNCQUFJLEVBQUVBLElBQVI7QUFBYytLLHFCQUFHLEVBQUU1UjtBQUFuQixpQkFBbEM7QUFDQWlFLG9CQUFJLENBQUM4WSxJQUFMLENBQVUrRCxhQUFWLENBQXdCNVosSUFBeEIsQ0FBNkIyRCxhQUE3QjtBQUNBaVcsNkJBQWEsQ0FBQzVaLElBQWQsQ0FBbUI1QyxFQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxjQUNFTCxJQUFJLENBQUM4WSxJQUFMLENBQVUrRCxhQUFWLENBQXdCcFMsUUFBeEIsQ0FBaUM3RCxhQUFqQyxLQUNBLENBQUM1RyxJQUFJLENBQUM4WSxJQUFMLENBQVVpRSxXQUFWLENBQXNCdFMsUUFBdEIsQ0FBK0I1RCxXQUEvQixDQURELElBRUN1VixLQUFLLEdBQUd2VixXQUFULElBQXlCLENBSDNCLEVBSUU7QUFDQSxnQkFBSTRDLElBQUksQ0FBQ21CLEdBQUwsQ0FBU2pCLEtBQVQsQ0FBZSxJQUFmLEVBQXFCa1QsYUFBckIsSUFBc0N4YyxFQUExQyxFQUE4QztBQUM1QyxrQkFBSTRZLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YscUJBQUs4QyxRQUFMLENBQWMvYixJQUFkO0FBQ0F3Wix5QkFBUyxDQUFDdlcsSUFBVixDQUFlNUMsRUFBZjtBQUNEOztBQUNEOEoscUJBQU8sQ0FBQ1UsTUFBUixDQUFlekIsQ0FBZixFQUFrQixDQUFsQjtBQUNELGFBTkQsTUFNTztBQUNMd1QsaUNBQW1CLEdBQUcsS0FBS0ssZUFBTCxDQUFxQmpkLElBQXJCLEVBQTJCNEMsSUFBM0IsRUFBaUNpRSxXQUFXLElBQUl1VixLQUFLLEdBQUdJLGVBQVosQ0FBNUMsQ0FBdEI7QUFDQXhjLGtCQUFJLENBQUM4WSxJQUFMLENBQVU4QixvQkFBVixDQUErQjNYLElBQS9CLENBQW9DMlosbUJBQXBDO0FBQ0E1YyxrQkFBSSxDQUFDOFksSUFBTCxDQUFVaUUsV0FBVixDQUFzQjlaLElBQXRCLENBQTJCNEQsV0FBM0I7QUFDQTdHLGtCQUFJLENBQUM4WSxJQUFMLENBQVU2QixZQUFWLENBQXVCL1QsYUFBdkIsSUFBd0M7QUFDdENoRSxvQkFBSSxFQUFFQSxJQURnQztBQUV0Q2dRLHNCQUFNLEVBQUVnSyxtQkFGOEI7QUFHdENqUCxtQkFBRyxFQUFFNVI7QUFIaUMsZUFBeEM7O0FBS0Esa0JBQUksQ0FBQ29nQixTQUFTLENBQUMxUixRQUFWLENBQW1CcEssRUFBbkIsQ0FBTCxFQUE2QjtBQUMzQjJZLHFCQUFLLENBQUMvVixJQUFOLENBQVdqRCxJQUFYO0FBQ0FtYyx5QkFBUyxDQUFDbFosSUFBVixDQUFlNUMsRUFBZjtBQUNEOztBQUVEeWMsa0NBQW9CLEdBQUc5YyxJQUF2QjtBQUNBbUsscUJBQU8sQ0FBQ1UsTUFBUixDQUFlekIsQ0FBZixFQUFrQixDQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRG5DLFNBQUMsR0FBR3VTLFNBQVMsQ0FBQzFkLE1BQWQ7QUFFQSxZQUFJbUwsQ0FBSixFQUFPLEtBQUtzRCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd0RCxDQUFoQixFQUFtQnNELENBQUMsRUFBcEI7QUFBd0IsZUFBS3lSLFNBQUwsQ0FBZXhDLFNBQVMsQ0FBQ2pQLENBQUQsQ0FBeEI7QUFBeEI7QUFFUCxZQUFJNlIsS0FBSyxHQUFHLEtBQUtULFdBQWpCLEVBQThCO0FBQy9COztBQUNELFVBQUkxQyxLQUFLLEtBQUssQ0FBVixJQUFlLEtBQUtJLEdBQXhCLEVBQTZCO0FBQzNCLGFBQUssSUFBSXRkLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsS0FBS3VOLEtBQUwsQ0FBV3hOLE1BQS9CLEVBQXVDQyxFQUFDLEVBQXhDLEVBQTRDO0FBQzFDLGNBQUlpRSxLQUFJLEdBQUcsS0FBS3NKLEtBQUwsQ0FBV3ZOLEVBQVgsQ0FBWDs7QUFDQSxjQUFJLENBQUNvZ0IsU0FBUyxDQUFDMVIsUUFBVixDQUFtQnpLLEtBQUksQ0FBQ0ssRUFBeEIsQ0FBTCxFQUFrQztBQUNoQyxpQkFBS21KLElBQUwsQ0FBVXZHLElBQVYsQ0FBZWpELEtBQWY7QUFDQSxpQkFBSzhYLGFBQUwsQ0FBbUI5WCxLQUFJLENBQUNLLEVBQXhCLElBQThCO0FBQUV1QixrQkFBSSxFQUFFNUIsS0FBSSxDQUFDNEIsSUFBYjtBQUFtQjBXLG9CQUFNLEVBQUVyYyxPQUFPLENBQUM4UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUNBQXhCO0FBQTNCLGFBQTlCO0FBQ0Q7QUFDRjtBQUNGOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7dUNBQ2tCO0FBQ2pCLFVBQUlnTixLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFBQSxVQUNJamQsQ0FBQyxHQUFHaWQsS0FBSyxDQUFDbGQsTUFEZDtBQUFBLFVBRUlrRSxJQUZKO0FBQUEsVUFFVTBhLGtCQUZWO0FBQUEsVUFFOEJ6VCxDQUY5QjtBQUFBLFVBRWlDckUsSUFGakM7QUFBQSxVQUV1Q2xGLE1BRnZDO0FBQUEsVUFFK0N1SSxNQUYvQztBQUFBLFVBRXVEQyxXQUZ2RDtBQUFBLFVBRW9FZ1gsZ0JBRnBFO0FBQUEsVUFFc0ZDLE9BRnRGO0FBQUEsVUFFK0Z0RixNQUYvRjtBQUFBLFVBRXVHOEUsQ0FGdkc7QUFBQSxVQUdJaEMsWUFISjtBQUFBLFVBR2tCa0MsYUFIbEI7QUFBQSxVQUdpQ2xiLEtBSGpDO0FBQUEsVUFHd0NPLFdBSHhDO0FBQUEsVUFHcUQ0VyxJQUhyRDtBQUFBLFVBRzJEdUIsVUFIM0Q7QUFBQSxVQUd1RTNVLEtBSHZFOztBQUtBLGFBQU8zSixDQUFDLEVBQVIsRUFBWTtBQUNWaUUsWUFBSSxHQUFHZ1osS0FBSyxDQUFDamQsQ0FBRCxDQUFaO0FBQ0FvaEIsZUFBTyxHQUFHLEVBQVY7QUFDQXRGLGNBQU0sR0FBRyxLQUFUO0FBQ0FpQixZQUFJLEdBQUc5WSxJQUFJLENBQUM4WSxJQUFaO0FBQ0E0QiwwQkFBa0IsR0FBRzVCLElBQUksQ0FBQzRCLGtCQUExQjtBQUNBQyxvQkFBWSxHQUFHN0IsSUFBSSxDQUFDNkIsWUFBcEI7QUFDQWtDLHFCQUFhLEdBQUcvRCxJQUFJLENBQUMrRCxhQUFyQjtBQUNBNVYsU0FBQyxHQUFHeVQsa0JBQWtCLENBQUM1ZSxNQUF2QjtBQUNBNkYsYUFBSyxHQUFHM0IsSUFBSSxDQUFDMkIsS0FBYjtBQUNBTyxtQkFBVyxHQUFHUCxLQUFLLENBQUN5RSxDQUFwQjtBQUNBaVUsa0JBQVUsR0FBR3ZCLElBQUksQ0FBQ3VCLFVBQWxCOztBQUVBLFlBQUlwVCxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1QsaUJBQU9BLENBQUMsRUFBUixFQUFZO0FBQ1ZyRSxnQkFBSSxHQUFHOFgsa0JBQWtCLENBQUN6VCxDQUFELENBQWxCLENBQXNCckUsSUFBN0I7QUFDQWxGLGtCQUFNLEdBQUdrRixJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQXpCO0FBQ0ErQyxrQkFBTSxHQUFHdkksTUFBTSxDQUFDd0YsVUFBUCxJQUFxQixDQUE5Qjs7QUFFQSxnQkFBSSxDQUFDK0MsTUFBRCxJQUFXdEUsS0FBSyxDQUFDK0UsRUFBTixLQUFhLEtBQUt0QyxVQUFMLENBQWdCNkIsTUFBaEIsRUFBd0J2SSxNQUF4QixDQUE1QixFQUE2RDtBQUMzRHlmLHFCQUFPLENBQUNsYSxJQUFSLENBQWFnRSxDQUFiO0FBQ0Q7QUFDRjs7QUFFRCxjQUFJLENBQUNrVyxPQUFPLENBQUNyaEIsTUFBYixFQUFxQm1MLENBQUMsR0FBRyxDQUFKLENBQXJCLEtBQ0s7QUFDSCxnQkFBSWtXLE9BQU8sQ0FBQ3JoQixNQUFSLEtBQW1CLENBQXZCLEVBQTBCbUwsQ0FBQyxHQUFHa1csT0FBTyxDQUFDLENBQUQsQ0FBWCxDQUExQixLQUNLO0FBQ0hsVyxlQUFDLEdBQUdsTixTQUFKOztBQUVBLHFCQUFPb2pCLE9BQU8sQ0FBQ3JoQixNQUFmLEVBQXVCO0FBQ3JCNmdCLGlCQUFDLEdBQUdRLE9BQU8sQ0FBQ3RWLEdBQVIsRUFBSjtBQUNBbkssc0JBQU0sR0FBR2dkLGtCQUFrQixDQUFDaUMsQ0FBRCxDQUFsQixDQUFzQi9aLElBQXRCLENBQTJCTSxVQUFwQztBQUNBK0Msc0JBQU0sR0FBR3ZJLE1BQU0sQ0FBQ3dGLFVBQVAsSUFBcUIsQ0FBOUI7QUFDQWdELDJCQUFXLEdBQUdELE1BQU0sSUFBSUEsTUFBTSxDQUFDL0MsVUFBakIsR0FBOEIrQyxNQUFNLENBQUMvQyxVQUFyQyxHQUFrRCxDQUFoRTtBQUNBZ2EsZ0NBQWdCLEdBQUdoWCxXQUFXLElBQUlBLFdBQVcsQ0FBQ2hELFVBQTNCLEdBQXdDZ0QsV0FBVyxDQUFDaEQsVUFBcEQsR0FBaUUsQ0FBcEY7O0FBRUEsb0JBQ0ksQ0FBQyxDQUFDZ2EsZ0JBQUQsSUFBcUJ2YixLQUFLLENBQUNnRixFQUFOLEtBQWEsS0FBS3ZDLFVBQUwsQ0FBZ0I4WSxnQkFBaEIsRUFBa0NoWCxXQUFsQyxDQUFuQyxLQUNDeVUsWUFBWSxDQUFDa0MsYUFBYSxDQUFDRixDQUFELENBQWQsQ0FBWixDQUErQi9KLE1BQS9CLEdBQXdDMVEsV0FBekMsS0FBMERtWSxVQUY5RCxFQUdJO0FBQ0FwVCxtQkFBQyxHQUFHMFYsQ0FBSjtBQUNBO0FBQ0g7QUFDRjs7QUFFRCxrQkFBSSxDQUFDMVYsQ0FBTCxFQUFRQSxDQUFDLEdBQUcsQ0FBSjtBQUNUO0FBQ0Y7QUFDRixTQXBDRCxNQW9DT0EsQ0FBQyxHQUFHLENBQUo7O0FBRVBBLFNBQUMsR0FBR0EsQ0FBQyxJQUFJLENBQVQ7QUFFQXZCLGFBQUssR0FBRzFGLElBQUksQ0FBQzhZLElBQUwsQ0FBVTRCLGtCQUFWLENBQTZCelQsQ0FBN0IsQ0FBUjtBQUNBakgsWUFBSSxDQUFDOFksSUFBTCxDQUFVc0UsU0FBVixHQUFzQjFYLEtBQUssQ0FBQzlDLElBQTVCO0FBQ0E1QyxZQUFJLENBQUM4WSxJQUFMLENBQVV1RSxpQkFBVixHQUE4QjNYLEtBQUssQ0FBQ2lJLEdBQXBDO0FBRUEsYUFBSzJQLGNBQUwsQ0FBb0J0ZCxJQUFwQixFQUEwQmlILENBQTFCO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OzttQ0FDY2pILEksRUFBTWlILEMsRUFBRztBQUN0QixVQUFJTCxhQUFhLEdBQUc1RyxJQUFJLENBQUM4WSxJQUFMLENBQVUrRCxhQUFWLENBQXdCNVYsQ0FBeEIsQ0FBcEI7QUFBQSxVQUNJckIsR0FBRyxHQUFHNUYsSUFBSSxDQUFDOFksSUFBTCxDQUFVNkIsWUFBVixDQUF1Qi9ULGFBQXZCLENBRFY7QUFHQTVHLFVBQUksQ0FBQzhZLElBQUwsQ0FBVXlFLE9BQVYsR0FBb0IzWCxHQUFHLENBQUNoRCxJQUF4QjtBQUNBNUMsVUFBSSxDQUFDOFksSUFBTCxDQUFVMEUsZUFBVixHQUE0QjVYLEdBQUcsQ0FBQytILEdBQWhDO0FBQ0EzTixVQUFJLENBQUM4WSxJQUFMLENBQVUyRSxXQUFWLEdBQXdCN1gsR0FBRyxDQUFDZ04sTUFBNUI7QUFDRDs7O3lDQUNvQjVTLEksRUFBTTRDLEksRUFBTTtBQUMvQixVQUFJOGEsV0FBVyxHQUFHMWQsSUFBSSxDQUFDMkIsS0FBdkI7QUFBQSxVQUNJdUIsVUFBVSxHQUFHTixJQUFJLENBQUNNLFVBRHRCO0FBQUEsVUFFSStDLE1BQU0sR0FBRy9DLFVBQVUsQ0FBQ0EsVUFGeEI7QUFBQSxVQUdJZ0QsV0FBVyxHQUFHRCxNQUFNLElBQUlBLE1BQU0sQ0FBQy9DLFVBQWpCLEdBQThCK0MsTUFBTSxDQUFDL0MsVUFBckMsR0FBa0QsQ0FIcEU7QUFBQSxVQUlJaEIsV0FBVyxHQUFHd2IsV0FBVyxDQUFDdFgsQ0FKOUI7QUFBQSxVQUtJdVgsZ0JBQWdCLEdBQUcvYSxJQUFJLENBQUMyQixJQUFMLENBQVUwSSxTQUFWLENBQW9CL0ssV0FBcEIsRUFBaUN3SyxJQUFqQyxFQUx2QjtBQUFBLFVBTUl0RCxDQUFDLEdBQUd1VSxnQkFBZ0IsQ0FBQzdoQixNQU56QjtBQUFBLFVBT0k4aEIsUUFBUSxHQUFHNWQsSUFBSSxDQUFDOFksSUFBTCxDQUFVb0IsV0FQekI7QUFBQSxVQVFJelMsQ0FBQyxHQUFHekgsSUFBSSxDQUFDOFksSUFBTCxDQUFVd0IsaUJBUmxCO0FBQUEsVUFTSXVELFVBVEo7O0FBV0EsVUFBSXBXLENBQUMsSUFBSTJCLENBQVQsRUFBWTtBQUNWeVUsa0JBQVUsR0FBRyxLQUFLekQsT0FBTCxDQUFhdUQsZ0JBQWIsRUFBK0IzUyxPQUEvQixDQUF1QyxLQUFLb1AsT0FBTCxDQUFhd0QsUUFBYixDQUF2QyxNQUFtRSxDQUFoRjtBQUNELE9BRkQsTUFFTztBQUNMQyxrQkFBVSxHQUFHLEtBQUt6RCxPQUFMLENBQWF3RCxRQUFiLEVBQXVCNVMsT0FBdkIsQ0FBK0IsS0FBS29QLE9BQUwsQ0FBYXVELGdCQUFiLENBQS9CLE1BQW1FLENBQWhGO0FBQ0Q7O0FBRUQsYUFDRUUsVUFBVSxLQUNUM2EsVUFBVSxDQUFDb0QsUUFBWCxLQUF3Qm9YLFdBQVcsQ0FBQ3JYLEVBQXBDLElBQTJDcVgsV0FBVyxDQUFDclgsRUFBWixLQUFtQixJQUFuQixJQUEyQm5ELFVBQVUsQ0FBQzhDLFlBQVgsQ0FBd0IsWUFBeEIsQ0FEN0QsQ0FBVixLQUVDLENBQUNDLE1BQUQsSUFBV0EsTUFBTSxDQUFDSyxRQUFQLEtBQW9Cb1gsV0FBVyxDQUFDbFgsRUFGNUMsS0FHQSxLQUFLcEMsVUFBTCxDQUFnQmxCLFVBQWhCLEVBQTRCTixJQUE1QixNQUFzQzhhLFdBQVcsQ0FBQ25YLEVBSnBEO0FBTUQ7OztvQ0FDZXZHLEksRUFBTTRDLEksRUFBTUgsQyxFQUFHO0FBQzdCLFVBQUlxYixRQUFRLEdBQUdsYixJQUFJLENBQUMyQixJQUFwQjtBQUFBLFVBQ0k2RSxDQUFDLEdBQUcwVSxRQUFRLENBQUNoaUIsTUFEakI7QUFBQSxVQUVJQyxDQUFDLEdBQUcsQ0FGUjtBQUFBLFVBRVdnaUIsT0FBTyxHQUFHLENBRnJCOztBQUlBLGFBQU9oaUIsQ0FBQyxHQUFHcU4sQ0FBWCxFQUFjck4sQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCLFlBQUksS0FBS3FlLE9BQUwsQ0FBYTBELFFBQVEsQ0FBQy9oQixDQUFELENBQXJCLENBQUosRUFBK0JnaUIsT0FBTztBQUV0QyxZQUFJQSxPQUFPLEtBQUt0YixDQUFoQixFQUFtQixPQUFRLE1BQU11YixJQUFOLENBQVdoZSxJQUFJLENBQUM0QixJQUFoQixJQUF3QjdGLENBQUMsR0FBRyxDQUE1QixHQUFnQ0EsQ0FBQyxHQUFHLENBQTVDO0FBQ3BCO0FBQ0Y7OztvQ0FDZTtBQUFBOztBQUNkLFVBQUlrRyxLQUFLLEdBQUd0SCxRQUFRLENBQUNzakIsV0FBVCxFQUFaO0FBQUEsVUFDSS9mLFNBQVMsR0FBRyxLQUFLQSxTQURyQjtBQUFBLFVBRUlvTCxLQUFLLEdBQUcsS0FBSzBQLEtBRmpCO0FBQUEsVUFHSWpkLENBQUMsR0FBR3VOLEtBQUssQ0FBQ3hOLE1BSGQ7QUFBQSxVQUlJa0UsSUFKSjtBQUFBLFVBSVV5YixRQUpWO0FBQUEsVUFJb0IvVixLQUpwQjtBQUFBLFVBSTJCRSxHQUozQjtBQUFBLFVBSWdDNlgsV0FKaEM7O0FBTUEsYUFBTzFoQixDQUFDLEVBQVIsRUFBWTtBQUNWaUUsWUFBSSxHQUFHc0osS0FBSyxDQUFDdk4sQ0FBRCxDQUFaO0FBQ0EwZixnQkFBUSxHQUFHemIsSUFBSSxDQUFDOFksSUFBaEI7QUFDQXBULGFBQUssR0FBRytWLFFBQVEsQ0FBQzJCLFNBQWpCO0FBQ0F4WCxXQUFHLEdBQUc2VixRQUFRLENBQUM4QixPQUFmO0FBQ0FFLG1CQUFXLEdBQUdoQyxRQUFRLENBQUNnQyxXQUF2Qjs7QUFFQSxZQUFJLENBQUMvWCxLQUFELElBQVUsQ0FBQ0UsR0FBWCxJQUFrQixFQUFFLE9BQU82WCxXQUFQLEtBQXVCLFFBQXpCLENBQXRCLEVBQTBEO0FBQ3hELGVBQUtqVSxJQUFMLENBQVV2RyxJQUFWLENBQWVqRCxJQUFmO0FBQ0EsZUFBSzhYLGFBQUwsQ0FBbUI5WCxJQUFJLENBQUNLLEVBQXhCLElBQThCO0FBQUV1QixnQkFBSSxFQUFFNUIsSUFBSSxDQUFDNEIsSUFBYjtBQUFtQjBXLGtCQUFNLEVBQUVyYyxPQUFPLENBQUM4UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUNBQXhCO0FBQTNCLFdBQTlCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsY0FBSTtBQUNGL0osaUJBQUssQ0FBQ2EsUUFBTixDQUFlNEMsS0FBZixFQUFzQjFGLElBQUksQ0FBQzJCLEtBQUwsQ0FBV3lFLENBQWpDO0FBQ0FuRSxpQkFBSyxDQUFDYyxNQUFOLENBQWE2QyxHQUFiLEVBQWtCNlgsV0FBbEI7QUFDQXZmLHFCQUFTLENBQUN5RyxJQUFWLENBQWVFLGVBQWY7QUFDQTNHLHFCQUFTLENBQUN5RyxJQUFWLENBQWVHLFFBQWYsQ0FBd0I3QyxLQUF4QixFQUpFLENBS0Y7O0FBQ0EsaUJBQUtoRSxJQUFMLENBQVUsZ0JBQVYsRUFBNEIrQixJQUE1QjtBQUNBLG1CQUFPQSxJQUFJLENBQUN4RSxNQUFaO0FBQ0EsaUJBQUtvYyxRQUFMLENBQWMzVSxJQUFkLENBQW1CakQsSUFBbkI7QUFDQTlCLHFCQUFTLENBQUNnZ0IsY0FBVixDQUF5QmxlLElBQXpCO0FBQ0QsV0FWRCxDQVVFLE9BQU1uRSxDQUFOLEVBQVM7QUFDVCxpQkFBSzJOLElBQUwsQ0FBVXZHLElBQVYsQ0FBZWpELElBQWY7QUFDQWtPLHNCQUFVLENBQUM7QUFBQSxxQkFBTSxNQUFJLENBQUNqUSxJQUFMLENBQVUsc0JBQVYsRUFBa0NwQyxDQUFDLENBQUNpRSxRQUFGLEVBQWxDLENBQU47QUFBQSxhQUFELEVBQXdELENBQXhELENBQVY7QUFDRDs7QUFDRCxpQkFBT0UsSUFBSSxDQUFDOFksSUFBWjtBQUNEO0FBQ0Y7QUFDRjs7O3FDQUVnQnpSLEUsRUFBSTtBQUNuQixXQUFLNlIsY0FBTDs7QUFFQSxVQUFJLEtBQUtELEtBQUwsS0FBZSxDQUFuQixFQUFzQjtBQUNwQixhQUFLL2EsU0FBTCxHQUFpQixJQUFJNk8sc0JBQUosQ0FBZTFGLEVBQWYsQ0FBakI7O0FBQ0EsWUFBSSxDQUFDLEtBQUtuSixTQUFMLENBQWUwRCxJQUFwQixFQUEwQjtBQUN4QixjQUFJLEtBQUtzWCxjQUFMLEdBQXNCLENBQTFCLEVBQTZCO0FBQzNCLG1CQUFPLEtBQUs0QixnQkFBTCxDQUFzQnpULEVBQXRCLENBQVA7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBS2lVLG9CQUFMLEdBQTRCLEdBQTVCO0FBQ0EsaUJBQUtZLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxhQUFLWixvQkFBTCxHQUE0QixLQUFLbEIsT0FBTCxDQUFhLEtBQUtsYyxTQUFMLENBQWUwRCxJQUE1QixDQUE1QjtBQUNEOztBQUVELFdBQUtzYSxhQUFMLEdBQXFCLEtBQUtoZSxTQUFMLENBQWVzRSxLQUFmLEdBQXVCLEtBQUt0RSxTQUFMLENBQWVzRSxLQUFmLENBQXFCMmIsS0FBckIsRUFBdkIsR0FBc0QsRUFBM0U7QUFFQSxhQUFPLElBQVA7QUFDRDs7OzRCQUNPdmMsSSxFQUFNO0FBQ1osYUFBUSxPQUFPQSxJQUFQLEtBQWdCLFFBQWpCLEdBQTZCQSxJQUFJLENBQUM2RCxPQUFMLENBQWEsY0FBYixFQUE2QixFQUE3QixDQUE3QixHQUFnRTFMLFNBQXZFO0FBQ0Q7OzsrQkFDVTJELE0sRUFBUXdILEssRUFBT2taLE8sRUFBUztBQUNuQyxVQUFJLENBQUMxZ0IsTUFBRCxJQUFXLENBQUN3SCxLQUFoQixFQUF1QixPQUFPLElBQVA7QUFFdkIsVUFBSUUsUUFBUSxHQUFHRixLQUFLLENBQUNaLFFBQU4sS0FBbUIsQ0FBbkIsR0FBdUI1RyxNQUFNLENBQUNrSCxVQUE5QixHQUEyQ2xILE1BQU0sQ0FBQzBILFFBQWpFO0FBQUEsVUFDSUMsQ0FBQyxHQUFHRCxRQUFRLENBQUN0SixNQURqQjtBQUFBLFVBRUk2UixHQUFHLEdBQUcsQ0FGVjtBQUFBLFVBRWE1UixDQUFDLEdBQUcsQ0FGakI7QUFBQSxVQUVvQnNpQixZQUZwQjs7QUFJRSxhQUFRdGlCLENBQUMsR0FBR3NKLENBQVosRUFBZXRKLENBQUMsRUFBaEIsRUFBb0I7QUFDbEJzaUIsb0JBQVksR0FBR2paLFFBQVEsQ0FBQ3JKLENBQUQsQ0FBdkI7QUFFSCxZQUFJc2lCLFlBQVksS0FBS25aLEtBQXJCLEVBQTRCLE9BQU95SSxHQUFQOztBQUU1QixZQUFJeVEsT0FBSixFQUFhO0FBQ1osY0FBSUMsWUFBWSxDQUFDL1gsUUFBYixLQUEwQjhYLE9BQTlCLEVBQXVDelEsR0FBRztBQUUxQyxTQUhELE1BR087QUFDRixjQUFJLEVBQUUwUSxZQUFZLENBQUMvWixRQUFiLEtBQTBCLENBQTFCLElBQStCLENBQUMrWixZQUFZLENBQUM5WixJQUEvQyxDQUFKLEVBQTBEb0osR0FBRztBQUM5RDtBQUNKO0FBQ0Q7Ozt3QkF4aUJZO0FBQ1YsVUFBTXlOLEtBQUssR0FBRyxLQUFLaEMsTUFBbkI7QUFDQSxXQUFLQSxNQUFMLEdBQWMsQ0FBQyxJQUFJNUosSUFBSixFQUFELEdBQWMsS0FBSzJKLGFBQWpDO0FBQ0EsYUFBT2lDLEtBQVA7QUFDRDs7OztFQXBCb0I3QyxZOztJQTJqQmpCUixhOzs7OztBQUVKLHlCQUFZMWMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQix3RkFBTUEsS0FBTjtBQUVBLFdBQUs2QyxTQUFMLEdBQWlCVCxNQUFNLENBQUNVLFlBQVAsRUFBakI7QUFDQSxXQUFLOEQsS0FBTCxHQUFhdEgsUUFBUSxDQUFDc2pCLFdBQVQsRUFBYjs7QUFDQSxRQUFNM1UsS0FBSyxHQUFHLE9BQUtBLEtBQUwsc0JBQWlCak8sS0FBSyxDQUFDaU8sS0FBTixDQUFZb0IsSUFBWixDQUFpQixVQUFDNkQsRUFBRCxFQUFLQyxFQUFMO0FBQUEsYUFBWUQsRUFBRSxDQUFDbE8sRUFBSCxHQUFRbU8sRUFBRSxDQUFDbk8sRUFBdkI7QUFBQSxLQUFqQixDQUFqQixDQUFkOztBQUVBLFdBQUtpZSxlQUFMLENBQXFCaFYsS0FBckIsRUFBNEIsT0FBS2lWLFlBQWpDLEVBQStDLE9BQUtwRyxNQUFwRDs7QUFQaUI7QUFRbEI7Ozs7aUNBRVluWSxJLEVBQU07QUFBQTs7QUFDakIsVUFBTTJCLEtBQUssR0FBRzNCLElBQUksQ0FBQzJCLEtBQW5CO0FBQ0EsVUFBTStELEtBQUssR0FBRy9ELEtBQUssQ0FBQ3FGLENBQXBCO0FBQ0EsVUFBTXBCLEdBQUcsR0FBR2pFLEtBQUssQ0FBQzlGLENBQWxCO0FBQ0EsVUFBTXFDLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFVBQU0rRCxLQUFLLEdBQUcsS0FBS0EsS0FBbkI7O0FBRUEsVUFBSTtBQUNGQSxhQUFLLENBQUNhLFFBQU4sQ0FBZSxLQUFLMGIsT0FBTCxDQUFhOVksS0FBSyxDQUFDdUIsQ0FBbkIsQ0FBZixFQUFzQ3ZCLEtBQUssQ0FBQ1UsQ0FBNUM7QUFDQW5FLGFBQUssQ0FBQ2MsTUFBTixDQUFhLEtBQUt5YixPQUFMLENBQWE1WSxHQUFHLENBQUNxQixDQUFqQixDQUFiLEVBQWtDckIsR0FBRyxDQUFDUSxDQUF0QztBQUNBbEksaUJBQVMsQ0FBQzJHLGVBQVY7QUFDQTNHLGlCQUFTLENBQUM0RyxRQUFWLENBQW1CN0MsS0FBbkI7QUFDQSxhQUFLaEUsSUFBTCxDQUFVLGdCQUFWLEVBQTRCK0IsSUFBNUI7QUFDQSxlQUFPQSxJQUFJLENBQUN4RSxNQUFaO0FBQ0EsYUFBS29jLFFBQUwsQ0FBYzNVLElBQWQsQ0FBbUJqRCxJQUFuQjtBQUNELE9BUkQsQ0FRRSxPQUFNbkUsQ0FBTixFQUFTO0FBQ1QsYUFBSzJOLElBQUwsQ0FBVXZHLElBQVYsQ0FBZWpELElBQWY7QUFDQWtPLGtCQUFVLENBQUM7QUFBQSxpQkFBTSxNQUFJLENBQUNqUSxJQUFMLENBQVUsc0JBQVYsRUFBa0NwQyxDQUFDLENBQUNpRSxRQUFGLEVBQWxDLENBQU47QUFBQSxTQUFELEVBQXdELENBQXhELENBQVY7QUFDRDtBQUNGOzs7NEJBQ09pTCxRLEVBQVU7QUFDaEIsVUFBTTBULGdCQUFnQixHQUFHMVQsUUFBUSxDQUFDLENBQUQsQ0FBakM7QUFDQSxVQUFJbkksSUFBSSxHQUFHakksUUFBUSxDQUFDZ0YsSUFBcEI7QUFBQSxVQUNJeUosQ0FBQyxHQUFHMkIsUUFBUSxDQUFDalAsTUFEakI7O0FBR0EsYUFBTXNOLENBQUMsS0FBSyxDQUFaLEVBQWU7QUFDYnhHLFlBQUksR0FBR0EsSUFBSSxDQUFDd0MsUUFBTCxDQUFjMkYsUUFBUSxDQUFDM0IsQ0FBRCxDQUF0QixDQUFQO0FBQ0Q7O0FBQ0QsYUFBT3hHLElBQUksQ0FBQ2dDLFVBQUwsQ0FBZ0I2WixnQkFBaEIsQ0FBUDtBQUNEOzs7O0VBekN5QmxHLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1bUI1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJ4TCxVOzs7QUFFbkIsc0JBQVluSyxJQUFaLEVBQWtCdUksT0FBbEIsRUFBMkI7QUFBQTs7QUFFekIsU0FBS0EsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUI7QUFFQSxRQUFJak4sU0FBUyxHQUFHLEtBQUt5RyxJQUFMLEdBQVlsSCxNQUFNLENBQUNVLFlBQVAsRUFBNUI7QUFFQSxRQUFJRCxTQUFTLENBQUN3Z0IsVUFBZCxFQUEwQixLQUFLemMsS0FBTCxHQUFhL0QsU0FBUyxDQUFDaUssVUFBVixDQUFxQixDQUFyQixDQUFiOztBQUUxQixRQUFJdkYsSUFBSSxJQUFJLENBQUMxRSxTQUFTLENBQUNFLFdBQXZCLEVBQW9DO0FBQ2xDLFVBQUl3RSxJQUFKLEVBQVU7QUFDUixhQUFLK2IsT0FBTCxHQUFlL2IsSUFBZjtBQUVBLGFBQUtxQyxNQUFMLENBQVlyQyxJQUFaLEVBQ0tnYyxnQkFETCxHQUVLNWYsTUFGTCxHQUdLK0YsWUFITCxDQUdrQixJQUhsQixFQUlLOFosWUFKTDtBQUtELE9BUkQsTUFRTztBQUNMLGFBQUtqZCxJQUFMLEdBQVkxRCxTQUFTLENBQUM0QixRQUFWLEVBQVo7QUFDQSxhQUFLOGUsZ0JBQUwsR0FDSzVmLE1BREwsR0FFSytGLFlBRkwsR0FHSTtBQUhKLFNBSUsrWixNQUpMLEdBRkssQ0FPRDtBQUNBO0FBQ0w7O0FBQ0QsVUFBSTtBQUFFNWdCLGlCQUFTLENBQUM4RyxlQUFWO0FBQThCLE9BQXBDLENBQXFDLE9BQU1uSixDQUFOLEVBQVMsQ0FBRTtBQUNqRDtBQUNGOzs7OzJCQUVNK0csSSxFQUFNO0FBQ1gsV0FBSytCLElBQUwsQ0FBVW9hLGlCQUFWLENBQTRCbmMsSUFBNUI7QUFFQSxhQUFPLElBQVA7QUFDRDs7OzJCQUNNMUUsUyxFQUFXO0FBQ2hCLFVBQUlBLFNBQUosRUFBZSxLQUFLeUcsSUFBTCxHQUFZekcsU0FBWixDQUFmLEtBQ0tBLFNBQVMsR0FBRyxLQUFLeUcsSUFBakI7QUFFTCxVQUFJcWEsS0FBSyxHQUFHLENBQUMsV0FBRCxFQUFjLFlBQWQsRUFBNEIsYUFBNUIsRUFBMkMsY0FBM0MsQ0FBWjtBQUFBLFVBQ0lqakIsQ0FBQyxHQUFHaWpCLEtBQUssQ0FBQ2xqQixNQURkOztBQUdBLGFBQU9DLENBQUMsRUFBUjtBQUFZLGFBQUtpakIsS0FBSyxDQUFDampCLENBQUQsQ0FBVixJQUFpQm1DLFNBQVMsQ0FBQzhnQixLQUFLLENBQUNqakIsQ0FBRCxDQUFOLENBQTFCO0FBQVo7O0FBRUEsV0FBS2tHLEtBQUwsR0FBYS9ELFNBQVMsQ0FBQ2lLLFVBQVYsQ0FBcUIsQ0FBckIsQ0FBYjtBQUNBLFdBQUtuRyxNQUFMLEdBQWMsS0FBS2lkLFFBQUwsRUFBZDtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJL2dCLFNBQVMsR0FBRyxLQUFLeUcsSUFBckI7QUFBQSxVQUNJMUUsTUFBTSxHQUFHLEtBQUs2RyxVQURsQjtBQUFBLFVBRUlvWSxLQUFLLEdBQUcsS0FBS25ZLFNBRmpCO0FBSUEsVUFBSSxLQUFLb1ksV0FBTCxDQUFpQmxmLE1BQWpCLEVBQXlCaWYsS0FBekIsQ0FBSixFQUFxQyxLQUFLRSxPQUFMLENBQWFuZixNQUFiLEVBQXFCaWYsS0FBckIsRUFBckMsS0FDSyxLQUFLL2IsU0FBTCxDQUFlbEQsTUFBZixFQUF1QmlmLEtBQXZCO0FBRUwsYUFBTyxJQUFQO0FBQ0Q7Ozs4QkFDU2pmLE0sRUFBUWlmLEssRUFBTztBQUN2QixVQUFJaGhCLFNBQVMsR0FBRyxLQUFLeUcsSUFBckI7QUFBQSxVQUNJMUMsS0FBSyxHQUFHLEtBQUtBLEtBRGpCO0FBQUEsVUFHSW9kLGFBQWEsR0FBRyxLQUFLN2MsS0FBTCxDQUFXLENBQVgsQ0FIcEI7QUFBQSxVQUlJOGMsWUFBWSxHQUFHLEtBQUs5YyxLQUFMLENBQVcsS0FBS0EsS0FBTCxDQUFXMUcsTUFBWCxHQUFvQixDQUEvQixDQUpuQjtBQU1BLFVBQUl1akIsYUFBYSxLQUFLcGYsTUFBdEIsRUFDRWdDLEtBQUssQ0FBQ2EsUUFBTixDQUFldWMsYUFBZixFQUE4QkEsYUFBYSxDQUFDOWEsSUFBZCxDQUFtQnpJLE1BQW5CLEdBQTRCdWpCLGFBQWEsQ0FBQzlhLElBQWQsQ0FBbUJnYixRQUFuQixHQUE4QnpqQixNQUF4RjtBQUVGLFVBQUl3akIsWUFBWSxLQUFLSixLQUFyQixFQUNFamQsS0FBSyxDQUFDYyxNQUFOLENBQWF1YyxZQUFiLEVBQTJCQSxZQUFZLENBQUMvYSxJQUFiLENBQWtCekksTUFBbEIsSUFBNEJ3akIsWUFBWSxDQUFDL2EsSUFBYixDQUFrQnpJLE1BQWxCLEdBQTJCd2pCLFlBQVksQ0FBQy9hLElBQWIsQ0FBa0JpYixTQUFsQixHQUE4QjFqQixNQUFyRixDQUEzQjtBQUNIOzs7aUNBQ1kyakIsYSxFQUFlO0FBQzFCLFVBQU05YSxJQUFJLEdBQUcsSUFBYjtBQUNBLFVBQU16RyxTQUFTLEdBQUcsS0FBS3lHLElBQXZCO0FBQ0EsVUFBTUgsU0FBUyxHQUFHaWIsYUFBYSxHQUFHaGlCLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JnRixJQUFuQixHQUEwQixLQUFLK2YsMEJBQUwsRUFBekQ7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLGFBQWEsR0FDdEIsVUFBQzdjLElBQUQ7QUFBQSxlQUFXK0IsSUFBSSxDQUFDaWIsWUFBTCxDQUFrQmhkLElBQWxCLEtBQTJCLENBQUMrQixJQUFJLENBQUNrYixPQUFMLENBQWFqZCxJQUFiLENBQTVCLElBQWtEK0IsSUFBSSxDQUFDbWIsZUFBTCxDQUFxQmxkLElBQXJCLENBQTdEO0FBQUEsT0FEc0IsR0FFdEIsVUFBQ0EsSUFBRDtBQUFBLGVBQVcxRSxTQUFTLENBQUM2aEIsWUFBVixDQUF1Qm5kLElBQXZCLEtBQWdDLENBQUMrQixJQUFJLENBQUNrYixPQUFMLENBQWFqZCxJQUFiLENBQWpDLElBQXVEK0IsSUFBSSxDQUFDbWIsZUFBTCxDQUFxQmxkLElBQXJCLENBQWxFO0FBQUEsT0FGTjtBQUlBLFVBQU1vZCxRQUFRLEdBQUd2aUIsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQnNsQixrQkFBaEIsQ0FBbUN6YixTQUFuQyxFQUE4QzBiLFVBQVUsQ0FBQ0MsU0FBekQsRUFBb0U7QUFDL0VDLGtCQUQrRSxzQkFDcEV4ZCxJQURvRSxFQUM5RDtBQUNmLGlCQUFPK2MsTUFBTSxDQUFDL2MsSUFBRCxDQUFiO0FBQ0Q7QUFIOEUsT0FBcEUsRUFJVixLQUpVLENBQWpCO0FBTUEsVUFBSUosS0FBSyxHQUFHLEVBQVo7QUFBQSxVQUNJNmQsV0FBVyxHQUFHLEVBRGxCO0FBQUEsVUFHSUMsUUFISjtBQUFBLFVBR2M1aUIsTUFIZDtBQUFBLFVBR3NCNmlCLFNBSHRCO0FBQUEsVUFHaUNDLFFBSGpDOztBQUtBLGFBQU1GLFFBQVEsR0FBR04sUUFBUSxDQUFDUyxRQUFULEVBQWpCLEVBQXNDO0FBQ3BDamUsYUFBSyxDQUFDUyxJQUFOLENBQVdxZCxRQUFYO0FBQ0Q7O0FBQ0Q5ZCxXQUFLLEdBQUcsS0FBS2tlLGFBQUwsQ0FBbUJsZSxLQUFuQixDQUFSLENBdEIwQixDQXVCMUI7O0FBQ0EsV0FBS0EsS0FBTCxHQUFhLEtBQUttZSxrQkFBTCxDQUF3Qm5lLEtBQXhCLENBQWI7QUFDQSxXQUFLNmQsV0FBTCxHQUFtQixLQUFLTyxrQkFBTCxDQUF3QixLQUFLcGUsS0FBN0IsQ0FBbkI7QUFFQSxhQUFPLElBQVA7QUFDRDs7O21DQUNjeEMsSSxFQUFNO0FBQUE7O0FBQ25CLFVBQU02Z0IsWUFBWSxHQUFHbGlCLEtBQUssQ0FBQ3lNLElBQU4sQ0FBV3pRLFFBQVEsQ0FBQ29ULGdCQUFULENBQTBCLG1CQUFtQi9OLElBQUksQ0FBQ0ssRUFBeEIsR0FBNkIsS0FBdkQsQ0FBWCxDQUFyQjtBQUNBLFVBQU1vSCxDQUFDLEdBQUdvWixZQUFZLENBQUMva0IsTUFBdkI7QUFDQSxVQUFNZ2xCLFVBQVUsR0FBR0QsWUFBWSxDQUFDaFMsR0FBYixDQUFpQixVQUFBeEgsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQzNDLFVBQVA7QUFBQSxPQUFuQixDQUFuQjtBQUVBLFVBQU1xYyxJQUFJLEdBQUdGLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0J4YyxlQUE3QjtBQUNBLFVBQU0yYyxJQUFJLEdBQUdILFlBQVksQ0FBQ3BaLENBQUMsR0FBQyxDQUFILENBQVosQ0FBa0J3WixXQUEvQjtBQUVBLFVBQU12YixLQUFLLEdBQUcxRixJQUFJLENBQUM4WSxJQUFMLENBQVV1RSxpQkFBeEI7QUFDQSxVQUFNelgsR0FBRyxHQUFHNUYsSUFBSSxDQUFDOFksSUFBTCxDQUFVMEUsZUFBdEI7O0FBRUEsVUFBSXVELElBQUksSUFBSUEsSUFBSSxDQUFDemMsUUFBTCxLQUFrQixDQUE5QixFQUFpQztBQUMvQndjLGtCQUFVLENBQUNJLE9BQVgsQ0FBbUJILElBQW5CO0FBQ0Q7O0FBQ0QsVUFBSUMsSUFBSSxJQUFJQSxJQUFJLENBQUMxYyxRQUFMLEtBQWtCLENBQTlCLEVBQWlDO0FBQy9Cd2Msa0JBQVUsQ0FBQzdkLElBQVgsQ0FBZ0IrZCxJQUFoQjtBQUNEOztBQUVELDBCQUFLeGUsS0FBTCxFQUFXcUksTUFBWCxxQkFBa0JuRixLQUFsQixFQUF5QkUsR0FBRyxHQUFHRixLQUFOLEdBQWMsQ0FBdkMsNEJBQTZDb2IsVUFBN0M7QUFDRDs7O2tDQUNhdGUsSyxFQUFPO0FBQ25CLFVBQU10RSxTQUFTLEdBQUcsS0FBS3lHLElBQXZCO0FBQ0EsVUFBSTRiLFNBQUosRUFBZUMsUUFBZjs7QUFFQSxVQUFJaGUsS0FBSyxDQUFDMUcsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCeWtCLGlCQUFTLEdBQUcvZCxLQUFLLENBQUMsQ0FBRCxDQUFqQjs7QUFDQSxZQUFJdEUsU0FBUyxDQUFDNEksVUFBVixLQUF5QnlaLFNBQXpCLElBQXNDQSxTQUFTLENBQUNoYyxJQUFWLENBQWVpYixTQUFmLEdBQTJCMWpCLE1BQTNCLElBQXFDb0MsU0FBUyxDQUFDaWpCLFlBQXpGLEVBQXVHO0FBQ3JHM2UsZUFBSyxDQUFDbUksS0FBTjtBQUNEOztBQUNENlYsZ0JBQVEsR0FBR2hlLEtBQUssQ0FBQ0EsS0FBSyxDQUFDMUcsTUFBTixHQUFlLENBQWhCLENBQWhCOztBQUNBLFlBQUlvQyxTQUFTLENBQUM2SSxTQUFWLEtBQXdCeVosUUFBeEIsSUFBb0MsS0FBS1gsT0FBTCxDQUFhVyxRQUFRLENBQUNqYyxJQUFULENBQWM2YyxNQUFkLENBQXFCLENBQXJCLEVBQXdCbGpCLFNBQVMsQ0FBQ3VmLFdBQWxDLENBQWIsQ0FBeEMsRUFBc0c7QUFDcEdqYixlQUFLLENBQUNxRixHQUFOO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPckYsS0FBUDtBQUNEOzs7dUNBQ2tCQSxLLEVBQU87QUFDeEIsVUFBTTZlLEdBQUcsR0FBRyxLQUFLMWMsSUFBakI7QUFDQSxVQUFNMmMsRUFBRSxHQUFHM21CLFFBQVEsQ0FBQ3NqQixXQUFULEVBQVg7QUFFQW9ELFNBQUcsQ0FBQ3hjLGVBQUo7QUFDQXdjLFNBQUcsQ0FBQ3ZjLFFBQUosQ0FBYXdjLEVBQWI7QUFFQTllLFdBQUssR0FBR0EsS0FBSyxDQUFDbWQsTUFBTixDQUFhLFVBQUEvYyxJQUFJLEVBQUk7QUFDM0IwZSxVQUFFLENBQUNDLFVBQUgsQ0FBYzNlLElBQWQ7QUFDQSxlQUFPLENBQUMsQ0FBQ3llLEdBQUcsQ0FBQ3ZoQixRQUFKLEVBQVQ7QUFDRCxPQUhPLENBQVI7QUFLQXVoQixTQUFHLENBQUN4YyxlQUFKO0FBQ0F3YyxTQUFHLENBQUN2YyxRQUFKLENBQWEsS0FBSzdDLEtBQWxCO0FBRUEsYUFBT08sS0FBUDtBQUNEOzs7dUNBQ2tCQSxLLEVBQU87QUFDeEIsVUFBSTRHLENBQUMsR0FBRzVHLEtBQUssQ0FBQzFHLE1BQWQ7QUFBQSxVQUNJMGxCLE9BQU8sR0FBRyxFQURkO0FBQUEsVUFDa0J6bEIsQ0FBQyxHQUFHLENBRHRCOztBQUdBLGFBQU9BLENBQUMsR0FBR3FOLENBQVgsRUFBY3JOLENBQUMsRUFBZjtBQUFtQnlsQixlQUFPLENBQUN2ZSxJQUFSLENBQWFULEtBQUssQ0FBQ3pHLENBQUQsQ0FBTCxDQUFTbUgsVUFBdEI7QUFBbkI7O0FBRUEsYUFBT3NlLE9BQVA7QUFDRDs7O21DQUNjO0FBQ2IsVUFBSXZmLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUFBLFVBQ0lPLEtBQUssR0FBRyxLQUFLQSxLQURqQjtBQUFBLFVBRUk0RyxDQUFDLEdBQUc1RyxLQUFLLENBQUMxRyxNQUZkO0FBQUEsVUFHSUMsQ0FBQyxHQUFHLENBSFI7QUFBQSxVQUlJMGxCLFNBQVMsR0FBRyxFQUpoQjtBQUFBLFVBS0k3ZixJQUxKOztBQU9BLGFBQU83RixDQUFDLEdBQUdxTixDQUFYLEVBQWNyTixDQUFDLEVBQWY7QUFBbUIwbEIsaUJBQVMsQ0FBQ3hlLElBQVYsQ0FBZVQsS0FBSyxDQUFDekcsQ0FBRCxDQUFMLENBQVN3SSxJQUF4QjtBQUFuQjs7QUFFQTZFLE9BQUMsSUFBSSxDQUFMOztBQUVBLFVBQUlxWSxTQUFTLENBQUMzbEIsTUFBZCxFQUFzQjtBQUNwQixZQUFJLENBQUMsS0FBSzZpQixPQUFWLEVBQW1CO0FBQ2pCLGNBQUksS0FBSzNjLE1BQVQsRUFBaUI7QUFDZjtBQUNBeWYscUJBQVMsQ0FBQyxDQUFELENBQVQsR0FBZUEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFheFUsU0FBYixDQUF1QmhMLEtBQUssQ0FBQ0MsV0FBN0IsRUFBMENELEtBQUssQ0FBQ0UsU0FBaEQsQ0FBZjtBQUNELFdBSEQsTUFHTztBQUNMO0FBQ0E7QUFDQXNmLHFCQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVBLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXhVLFNBQWIsQ0FBdUJoTCxLQUFLLENBQUNDLFdBQTdCLENBQWY7QUFDQXVmLHFCQUFTLENBQUNyWSxDQUFELENBQVQsR0FBZXFZLFNBQVMsQ0FBQ3JZLENBQUQsQ0FBVCxDQUFhNkQsU0FBYixDQUF1QixDQUF2QixFQUEwQmhMLEtBQUssQ0FBQ0UsU0FBaEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBQ0RQLFlBQUksR0FBRyxLQUFLQSxJQUFMLEdBQVk2ZixTQUFTLENBQUNDLElBQVYsQ0FBZSxFQUFmLENBQW5CO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztpREFDNEI7QUFDM0IsVUFBSXhqQixTQUFTLEdBQUcsS0FBS3lHLElBQXJCO0FBQUEsVUFDSWdkLEtBQUssR0FBR3pqQixTQUFTLENBQUM0SSxVQUR0QjtBQUFBLFVBRUk4YSxLQUFLLEdBQUcxakIsU0FBUyxDQUFDNkksU0FGdEI7O0FBSUEsYUFBTzRhLEtBQUssR0FBR0EsS0FBSyxDQUFDemUsVUFBckIsRUFBaUM7QUFDN0IsWUFBSSxDQUFDeWUsS0FBSyxDQUFDRSx1QkFBTixDQUE4QkQsS0FBOUIsSUFBdUMsSUFBeEMsTUFBa0QsSUFBdEQsRUFDRSxPQUFPRCxLQUFQO0FBQ0w7O0FBQ0QsYUFBT2xrQixNQUFNLENBQUM5QyxRQUFQLENBQWdCZ0YsSUFBdkI7QUFDRDs7OzRCQUNPTSxNLEVBQVFpZixLLEVBQU87QUFDckIsVUFBSWpkLEtBQUssR0FBR3hFLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JzakIsV0FBaEIsRUFBWjtBQUFBLFVBQ0kvZixTQUFTLEdBQUcsS0FBS3lHLElBRHJCO0FBR0ExQyxXQUFLLENBQUNhLFFBQU4sQ0FBZW9jLEtBQWYsRUFBc0JoaEIsU0FBUyxDQUFDdWYsV0FBaEM7QUFDQXhiLFdBQUssQ0FBQ2MsTUFBTixDQUFhOUMsTUFBYixFQUFxQi9CLFNBQVMsQ0FBQ2lqQixZQUEvQjtBQUVBampCLGVBQVMsQ0FBQzJHLGVBQVY7QUFDQTNHLGVBQVMsQ0FBQzRHLFFBQVYsQ0FBbUI3QyxLQUFuQjtBQUVBLFdBQUtqRCxNQUFMLENBQVlkLFNBQVosRUFBdUI0Z0IsTUFBdkIsQ0FBOEI1Z0IsU0FBUyxDQUFDNEksVUFBeEMsRUFBb0Q1SSxTQUFTLENBQUM2SSxTQUE5RDtBQUNEOzs7dUNBQ2tCO0FBQ2pCLFVBQUk3SSxTQUFTLEdBQUcsS0FBS3lHLElBQXJCO0FBQUEsVUFDSStaLFVBQVUsR0FBR3hnQixTQUFTLENBQUN3Z0IsVUFEM0I7QUFBQSxVQUVJb0QsTUFBTSxHQUFHLEtBQUs3ZixLQUZsQjtBQUFBLFVBR0k4ZixTQUhKO0FBS0EsVUFBSXJELFVBQVUsR0FBRyxDQUFqQixFQUFvQixPQUFPLElBQVA7QUFFcEJxRCxlQUFTLEdBQUc3akIsU0FBUyxDQUFDaUssVUFBVixDQUFxQnVXLFVBQVUsR0FBRyxDQUFsQyxDQUFaO0FBRUFvRCxZQUFNLENBQUNoZixRQUFQLENBQWdCZ2YsTUFBTSxDQUFDbmMsY0FBdkIsRUFBdUNtYyxNQUFNLENBQUM1ZixXQUE5QztBQUNBNGYsWUFBTSxDQUFDL2UsTUFBUCxDQUFjZ2YsU0FBUyxDQUFDbGMsWUFBeEIsRUFBc0NrYyxTQUFTLENBQUM1ZixTQUFoRDtBQUVBakUsZUFBUyxDQUFDMkcsZUFBVjtBQUNBM0csZUFBUyxDQUFDNEcsUUFBVixDQUFtQmdkLE1BQW5CO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OztvQ0FDZWxmLEksRUFBTTtBQUNwQixVQUFNbEYsTUFBTSxHQUFHa0YsSUFBSSxDQUFDTSxVQUFwQjtBQUNBLFVBQU04ZSxHQUFHLEdBQUd0a0IsTUFBTSxDQUFDNlksT0FBUCxDQUFlMEwsV0FBZixFQUFaO0FBRUEsYUFDRUQsR0FBRyxLQUFLLFFBQVIsSUFBb0JBLEdBQUcsS0FBSyxPQUE1QixJQUF1Q0EsR0FBRyxLQUFLLE1BQS9DLElBQXlEQSxHQUFHLEtBQUssTUFBakUsSUFDQUEsR0FBRyxLQUFLLE1BRFIsSUFDa0JBLEdBQUcsS0FBSyxPQUQxQixJQUNxQ0EsR0FBRyxLQUFLLFVBRDdDLElBRUFBLEdBQUcsS0FBSyxLQUZSLElBRWlCQSxHQUFHLEtBQUssUUFGekIsSUFFcUNBLEdBQUcsS0FBSyxPQUY3QyxJQUV3REEsR0FBRyxLQUFLLE9BRmhFLElBR0FBLEdBQUcsS0FBSyxPQUhSLElBR21CQSxHQUFHLEtBQUssT0FIM0IsSUFHc0NBLEdBQUcsS0FBSyxRQUg5QyxJQUcwREEsR0FBRyxLQUFLLE9BSGxFLElBSUFBLEdBQUcsS0FBSyxRQUpSLElBSW9CQSxHQUFHLEtBQUssS0FKNUIsSUFJcUNBLEdBQUcsS0FBSyxNQUo3QyxJQUtBQSxHQUFHLEtBQUssTUFMUixJQUtrQkEsR0FBRyxLQUFLLFFBTDFCLElBTUEsQ0FBQyxLQUFLRSxTQUFMLENBQWV4a0IsTUFBZixFQUF1QixLQUF2QixDQVBILENBT2lDO0FBQy9CO0FBUkY7QUFVRDs7OzhCQUNTa0YsSSxFQUFNMEIsUSxFQUFVO0FBQ3hCLGFBQU8xQixJQUFQLEVBQWE7QUFDWCxZQUFJQSxJQUFJLENBQUMwRCxRQUFMLEtBQWtCaEMsUUFBdEIsRUFBZ0MsT0FBTyxJQUFQO0FBQ2hDMUIsWUFBSSxHQUFHQSxJQUFJLENBQUNNLFVBQVo7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRDs7OzRCQUNPTixJLEVBQU07QUFDWixVQUFJaEIsSUFBSjtBQUNBLFVBQUksT0FBT2dCLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEJoQixJQUFJLEdBQUdnQixJQUFQLENBQTlCLEtBQ0s7QUFDSCxZQUFJQSxJQUFJLElBQUksT0FBT0EsSUFBSSxDQUFDMkIsSUFBWixLQUFxQixRQUFqQyxFQUEyQzNDLElBQUksR0FBR2dCLElBQUksQ0FBQzJCLElBQVosQ0FBM0MsS0FDSzNDLElBQUksR0FBRyxLQUFLQSxJQUFaO0FBQ047QUFDRCxhQUFPQSxJQUFJLENBQUN1Z0IsTUFBTCxDQUFZLGNBQVosTUFBZ0MsQ0FBQyxDQUF4QztBQUNEOzs7Z0NBQ1dsaUIsTSxFQUFRaWYsSyxFQUFPO0FBQ3pCLFVBQUloaEIsU0FBUyxHQUFHLEtBQUt5RyxJQUFyQjtBQUFBLFVBQ0lvRyxRQUFRLEdBQUc5SyxNQUFNLENBQUM0aEIsdUJBQVAsQ0FBK0IzQyxLQUEvQixDQURmO0FBR0EsYUFDRW5VLFFBQVEsS0FBSyxDQUFiLElBQ0FBLFFBQVEsS0FBSyxFQURiLElBRUMsQ0FBQ0EsUUFBRCxJQUFhN00sU0FBUyxDQUFDaWpCLFlBQVYsR0FBeUJqakIsU0FBUyxDQUFDdWYsV0FIbkQ7QUFJRDs7OytCQUNVO0FBQ1QsVUFBSXZmLFNBQVMsR0FBRyxLQUFLeUcsSUFBckI7QUFBQSxVQUNJbUMsVUFBVSxHQUFHNUksU0FBUyxDQUFDNEksVUFEM0I7QUFBQSxVQUVJQyxTQUFTLEdBQUc3SSxTQUFTLENBQUM2SSxTQUYxQjtBQUlBLGFBQ0VELFVBQVUsS0FBS0MsU0FBZixJQUNBRCxVQUFVLENBQUN4QyxRQUFYLEtBQXdCLENBRHhCLEtBRUMsQ0FBQ3dDLFVBQVUsQ0FBQ21hLFdBQVosSUFBNEJuYSxVQUFVLENBQUNtYSxXQUFYLENBQXVCWSx1QkFBdkIsQ0FBK0M5YSxTQUEvQyxNQUE4RCxDQUYzRixDQURGO0FBSUQ7OztpQ0FDWW5FLEksRUFBTTtBQUNqQixXQUFLWCxLQUFMLENBQVdzZixVQUFYLENBQXNCM2UsSUFBdEI7QUFDQSxhQUFPLENBQUMsQ0FBQyxLQUFLK0IsSUFBTCxDQUFVN0UsUUFBVixFQUFUO0FBQ0Q7Ozs7OztxQkEvUmtCaU4sVTs7Ozs7Ozs7Ozs7Ozs7QUNGckI7O0FBQ0E7Ozs7OztBQUVBLElBQUk3VCxpQkFBSixDQUFlO0FBQ2RNLFFBQU0sRUFBRTtBQUNMQyxPQUFHLEVBQUU7QUFDSCwrQkFBeUIsYUFEdEI7QUFFSCxvQkFBYyxhQUZYO0FBR0gsd0JBQWtCLGlCQUhmO0FBSUgsMkJBQXFCLG1CQUpsQjtBQUtILDBCQUFvQjtBQUxqQjtBQURBLEdBRE07QUFVYjhXLHNCQUFvQixFQUFFLElBVlQ7QUFXYmxKLElBQUUsRUFBRSxJQVhTO0FBYWIrYSxVQUFRLEVBQUUsS0FiRztBQWViQyxTQUFPLEVBQUU7QUFDUDVOLFNBQUssRUFBRTtBQUNMcE4sUUFBRSxFQUFFLElBREM7QUFFTFUsVUFBSSxFQUFFLEtBRkQ7QUFHTHVhLFdBQUssRUFBRTtBQUhGLEtBREE7QUFNUGprQixZQUFRLEVBQUU7QUFDUmdKLFFBQUUsRUFBRSxJQURJO0FBRVJVLFVBQUksRUFBRSxLQUZFO0FBR1J1YSxXQUFLLEVBQUU7QUFIQztBQU5ILEdBZkk7QUE0QmJqa0IsVUFBUSxFQUFFLEtBNUJHO0FBNkJib1csT0FBSyxFQUFFLEtBN0JNO0FBK0JiamEsVUEvQmEsc0JBK0JGO0FBQ1QsU0FBSytuQixhQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNELEdBbENZO0FBbUNiQSxhQW5DYSx5QkFtQ0M7QUFBQTs7QUFDWnJwQix1QkFBTzBCLEdBQVAsQ0FBVyxRQUFYLEVBQXFCQyxJQUFyQixDQUEwQixVQUFBdUIsTUFBTSxFQUFJO0FBQ2xDLFdBQUksQ0FBQ2dtQixPQUFMLENBQWFoa0IsUUFBYixDQUFzQjBKLElBQXRCLEdBQTZCMUwsTUFBN0I7QUFDQSxhQUFPbEQsbUJBQU8wQixHQUFQLENBQVcsVUFBWCxFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQXlCLFFBQVE7QUFBQSxlQUFJLEtBQUksQ0FBQzhsQixPQUFMLENBQWE1TixLQUFiLENBQW1CMU0sSUFBbkIsR0FBMEJ4TCxRQUE5QjtBQUFBLE9BQXBDLENBQVA7QUFDRCxLQUhELEVBSUd6QixJQUpILENBSVE7QUFBQSxhQUFNLEtBQUksQ0FBQ2tFLE1BQUwsRUFBTjtBQUFBLEtBSlI7QUFLRCxHQXpDWTtBQTBDYkEsUUExQ2Esb0JBMENKO0FBQ1AsUUFBTXlqQixZQUFZLEdBQ2YsS0FBS0osT0FBTCxDQUFhaGtCLFFBQWIsQ0FBc0IwSixJQUF0QixJQUE4QixLQUFLMUosUUFBcEMsSUFDQyxLQUFLZ2tCLE9BQUwsQ0FBYTVOLEtBQWIsQ0FBbUIxTSxJQUFuQixJQUEyQixLQUFLME0sS0FGbkM7O0FBSUEsUUFBSWdPLFlBQUosRUFBa0I7QUFDaEIsV0FBS0MsTUFBTDtBQUNELEtBRkQsTUFHSyxJQUFJLEtBQUtOLFFBQUwsSUFBaUIsQ0FBQ0ssWUFBdEIsRUFBb0M7QUFDdkMsV0FBS2ppQixNQUFMO0FBQ0Q7QUFDRixHQXJEWTtBQXNEYmtpQixRQXREYSxvQkFzREo7QUFDUCxRQUFJTCxPQUFPLEdBQUcsS0FBS0EsT0FBbkI7QUFBQSxRQUE0Qk0sR0FBNUI7O0FBRUEsUUFBSSxDQUFDLEtBQUtQLFFBQVYsRUFBb0I7QUFDbEIsVUFBTS9hLEVBQUUsR0FBRyxLQUFLQSxFQUFMLEdBQVU1SixNQUFNLENBQUM5QyxRQUFQLENBQWdCNEssYUFBaEIsQ0FBOEIsTUFBOUIsQ0FBckI7QUFDQTlILFlBQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JnRixJQUFoQixDQUFxQmdJLFdBQXJCLENBQWlDTixFQUFqQztBQUNEOztBQUNELFNBQUssSUFBSXViLENBQVQsSUFBY1AsT0FBZCxFQUF1QjtBQUNyQk0sU0FBRyxHQUFHTixPQUFPLENBQUNPLENBQUQsQ0FBYjtBQUNBLFVBQUlELEdBQUcsQ0FBQzVhLElBQUosSUFBWSxDQUFDNGEsR0FBRyxDQUFDTCxLQUFqQixJQUEwQixLQUFLTSxDQUFMLENBQTlCLEVBQXVDLEtBQUtDLFNBQUwsQ0FBZUQsQ0FBZixFQUF2QyxLQUNLLElBQUlELEdBQUcsQ0FBQ0wsS0FBSixLQUFjLENBQUMsS0FBS00sQ0FBTCxDQUFELElBQVksQ0FBQ0QsR0FBRyxDQUFDNWEsSUFBL0IsQ0FBSixFQUEwQyxLQUFLK2EsWUFBTCxDQUFrQkYsQ0FBbEI7QUFDaEQ7O0FBQ0QsUUFBSSxDQUFDUCxPQUFPLENBQUM1TixLQUFSLENBQWM2TixLQUFmLElBQXdCLENBQUNELE9BQU8sQ0FBQ2hrQixRQUFSLENBQWlCaWtCLEtBQTlDLEVBQXFEO0FBQ25ELFdBQUs5aEIsTUFBTDtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUt1aUIsY0FBTDtBQUNBLFdBQUszUixZQUFMO0FBQ0Q7O0FBRUQsU0FBS2dSLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRCxHQTFFWTtBQTJFYjVoQixRQTNFYSxvQkEyRUo7QUFDUCxRQUFJLEtBQUs0aEIsUUFBVCxFQUFtQjtBQUNqQixVQUFNWSxJQUFJLEdBQUcsS0FBSzNiLEVBQWxCO0FBQ0EsVUFBTWdiLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjs7QUFFQSxXQUFLLElBQUlPLENBQVQsSUFBY1AsT0FBZCxFQUF1QjtBQUNyQixZQUFJQSxPQUFPLENBQUNPLENBQUQsQ0FBUCxDQUFXTixLQUFmLEVBQXNCO0FBQ3BCLGVBQUtRLFlBQUwsQ0FBa0JGLENBQWxCO0FBQ0Q7QUFDRjs7QUFFRG5sQixZQUFNLENBQUM5QyxRQUFQLENBQWdCZ0YsSUFBaEIsQ0FBcUJtSSxXQUFyQixDQUFpQ2tiLElBQWpDO0FBQ0EsV0FBS1osUUFBTCxHQUFnQixLQUFoQjtBQUNEO0FBQ0YsR0F6Rlk7QUEwRmJHLGVBMUZhLDJCQTBGRztBQUNkLFFBQU1VLFdBQVcsR0FBRyxLQUFLWixPQUFMLENBQWE1TixLQUFiLENBQW1CcE4sRUFBbkIsR0FBd0I1SixNQUFNLENBQUM5QyxRQUFQLENBQWdCNEssYUFBaEIsQ0FBOEIsZUFBOUIsQ0FBNUM7QUFDQSxRQUFNMmQsY0FBYyxHQUFHLEtBQUtiLE9BQUwsQ0FBYWhrQixRQUFiLENBQXNCZ0osRUFBdEIsR0FBMkI1SixNQUFNLENBQUM5QyxRQUFQLENBQWdCNEssYUFBaEIsQ0FBOEIsTUFBOUIsQ0FBbEQ7QUFDQTBkLGVBQVcsQ0FBQ3RULEtBQVosR0FBb0IxVCxPQUFPLENBQUM4UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsY0FBeEIsQ0FBcEI7QUFDQWtYLGtCQUFjLENBQUN2VCxLQUFmLEdBQXVCMVQsT0FBTyxDQUFDOFAsSUFBUixDQUFhQyxVQUFiLENBQXdCLFdBQXhCLENBQXZCO0FBQ0QsR0EvRlk7QUFnR2I2VyxXQWhHYSxxQkFnR0hNLElBaEdHLEVBZ0dHO0FBQ2QsUUFBTUgsSUFBSSxHQUFHLEtBQUszYixFQUFsQjtBQUNBLFFBQU1zYixHQUFHLEdBQUcsS0FBS04sT0FBTCxDQUFhYyxJQUFiLENBQVo7QUFDQSxRQUFNeGUsSUFBSSxHQUFHLElBQWI7QUFDQSxRQUFNN0YsT0FBTyxHQUFHNmpCLEdBQUcsQ0FBQzdqQixPQUFKLEdBQWNxa0IsSUFBSSxLQUFLLE9BQVQsR0FDNUIsS0FBS0MsV0FBTCxDQUFpQjFqQixJQUFqQixDQUFzQixJQUF0QixDQUQ0QixHQUU1QixLQUFLNE4sZ0JBQUwsQ0FBc0I1TixJQUF0QixDQUEyQixJQUEzQixDQUZGO0FBSUFzakIsUUFBSSxDQUFDcmIsV0FBTCxDQUFpQmdiLEdBQUcsQ0FBQ3RiLEVBQXJCO0FBQ0FzYixPQUFHLENBQUNMLEtBQUosR0FBWSxJQUFaO0FBRUFLLE9BQUcsQ0FBQ3RiLEVBQUosQ0FBT3pILGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDZCxPQUFqQyxFQUEwQyxLQUExQztBQUNELEdBNUdZO0FBNkdiZ2tCLGNBN0dhLHdCQTZHQUssSUE3R0EsRUE2R007QUFDakIsUUFBTUgsSUFBSSxHQUFHLEtBQUszYixFQUFsQjtBQUNBLFFBQU1zYixHQUFHLEdBQUcsS0FBS04sT0FBTCxDQUFhYyxJQUFiLENBQVo7QUFFQUgsUUFBSSxDQUFDbGIsV0FBTCxDQUFpQjZhLEdBQUcsQ0FBQ3RiLEVBQXJCO0FBQ0FzYixPQUFHLENBQUNMLEtBQUosR0FBWSxLQUFaO0FBRUFLLE9BQUcsQ0FBQ3RiLEVBQUosQ0FBT3hILG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DOGlCLEdBQUcsQ0FBQzdqQixPQUF4QyxFQUFpRCxLQUFqRDtBQUNELEdBckhZO0FBc0hiaWtCLGdCQXRIYSw0QkFzSEk7QUFBQTs7QUFDZjVwQix1QkFBTzBCLEdBQVAsQ0FBVyxTQUFYLEVBQ0dDLElBREgsQ0FDUSxVQUFBNlMsR0FBRztBQUFBLGFBQUksTUFBSSxDQUFDdEcsRUFBTCxDQUFRN0IsWUFBUixDQUFxQixPQUFyQixFQUE4Qm1JLEdBQUcsQ0FBQy9FLEtBQUosQ0FBVSxHQUFWLEVBQWVpRyxHQUFmLENBQW1CLFVBQUE1SCxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxHQUFHLE9BQVI7QUFBQSxPQUFwQixFQUFxQ3lhLElBQXJDLENBQTBDLEdBQTFDLENBQTlCLENBQUo7QUFBQSxLQURYO0FBRUQsR0F6SFk7QUEwSGIyQixhQTFIYSx5QkEwSEM7QUFDWixTQUFLNU8sS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLelYsTUFBTDtBQUNELEdBN0hZO0FBOEhic2tCLG1CQTlIYSwrQkE4SE87QUFDbEIsU0FBSzdPLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS3pWLE1BQUw7QUFDRCxHQWpJWTtBQWtJYnVrQixpQkFsSWEsNkJBa0lLO0FBQ2hCLFNBQUtsbEIsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtXLE1BQUw7QUFDRCxHQXJJWTtBQXNJYndrQixtQkF0SWEsK0JBc0lPO0FBQ2xCLFNBQUtubEIsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtXLE1BQUw7QUFDRCxHQXpJWTtBQTBJYm9rQixhQTFJYSx5QkEwSUM7QUFDWixTQUFLbmxCLElBQUwsQ0FBVSxjQUFWO0FBQ0QsR0E1SVk7QUE2SWJxUCxrQkE3SWEsOEJBNklNO0FBQ2pCLFNBQUtyUCxJQUFMLENBQVUsb0JBQVY7QUFDRDtBQS9JWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztxQkFFZSxJQUFJN0UsWUFBSixDQUFVO0FBQ3ZCVSxNQUFJLEVBQUUsV0FEaUI7QUFFdkJxcEIsTUFBSSxFQUFFLFNBRmlCO0FBR3ZCM3BCLFFBQU0sRUFBRTtBQUNOaXFCLFVBQU0sRUFBRSxDQUNOLFlBRE0sRUFFTixhQUZNLEVBR04sZUFITSxFQUlOLGFBSk0sRUFLTix1QkFMTSxFQU1OLG1CQU5NLEVBT04saUJBUE0sRUFRTixjQVJNLEVBU04sZ0JBVE0sRUFVTixnQkFWTSxFQVdOLGtCQVhNLEVBWU4sWUFaTSxFQWFOLG1CQWJNLEVBY04sWUFkTSxFQWVOLGFBZk0sRUFnQk4sd0JBaEJNLEVBa0JOO0FBQ0EsMEJBbkJNLEVBb0JSLG9CQXBCUSxFQXFCTix1QkFyQk0sRUFzQk4sc0JBdEJNLEVBdUJOLDBDQXZCTTtBQURGO0FBSGUsQ0FBVixDOzs7Ozs7Ozs7OztBQ0ZmLHlDOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBZTtBQUNiQyxTQUFPLEVBQUV6bkIsT0FBTyxDQUFDMG5CLE9BQVIsQ0FBZ0JDLFdBQWhCLEdBQThCRixPQUQxQjtBQUViM29CLFVBQVEsRUFBQztBQUNQbUMsYUFBUyxFQUFFO0FBQ1QybUIsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FETTtBQUVUQyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUZNO0FBR1Q5YyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUhNO0FBSVQzQixPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUpNO0FBS1R1ZCxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUxNO0FBTVQ5Z0IsT0FBQyxFQUFFLENBQUMsVUFBRCxFQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FOTTtBQU9ULFlBQU0sQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FQRztBQVFUMkYsT0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxJQUFYLENBUk07QUFTVHRILE9BQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxDQVRNO0FBVVRzQyxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FWTTtBQVdULFdBQUssQ0FBQyxFQUFELEVBQUssSUFBTCxDQVhJO0FBWVQsV0FBSyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBWkk7QUFhVHNoQixhQUFPLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixLQUFsQixDQWJBO0FBY1RDLGVBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLEtBQWxCLENBZEY7QUFlVEMsUUFBRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULENBZks7QUFnQlRDLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMO0FBaEJLLEtBREo7QUFtQlBsbkIsV0FBTyxFQUFFO0FBQ1AsV0FBSztBQUFFMEUsYUFBSyxFQUFFO0FBQVQsT0FERTtBQUVQLFdBQUs7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FGRTtBQUdQLFdBQUs7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FIRTtBQUlQLFdBQUs7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FKRTtBQUtQLFdBQUs7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FMRTtBQU1QK0YsT0FBQyxFQUFFO0FBQUUvRixhQUFLLEVBQUU7QUFBVDtBQU5JLEtBbkJGO0FBMkJQekcsV0FBTyxFQUFFO0FBQ1A0QixjQUFRLEVBQUUsSUFESDtBQUVQc25CLGdCQUFVLEVBQUUsS0FGTDtBQUdQQyxnQkFBVSxFQUFFLElBSEw7QUFJUDlwQixXQUFLLEVBQUUsS0FKQTtBQUtQWSxZQUFNLEVBQUUsT0FMRDtBQU1QbXBCLGNBQVEsRUFBRSxNQU5IO0FBT1BoWSxVQUFJLEVBQUUsTUFQQztBQVFQbUIsY0FBUSxFQUFFLElBUkg7QUFTUDhXLFlBQU0sRUFBRSxXQVREO0FBVVBDLFVBQUksRUFBRSxNQVZDO0FBV1BDLFFBQUUsRUFBRSxFQVhHO0FBWVBycEIsZ0JBQVUsRUFBRTtBQVpMLEtBM0JGO0FBeUNQaUMsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxJQURIO0FBRUxvbkIsWUFBTSxFQUFFO0FBRkgsS0F6Q0E7QUE2Q1Byb0IsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRSxJQURKO0FBRUpFLGNBQVEsRUFBRSxJQUZOO0FBR0pFLGlCQUFXLEVBQUUsSUFIVDtBQUlKOFksZ0JBQVUsRUFBRSxLQUpSO0FBS0pDLG1CQUFhLEVBQUUsS0FMWDtBQU1Ka1AsZUFBUyxFQUFFLEtBTlA7QUFPSkMsaUJBQVcsRUFBRSxJQVBUO0FBUUpDLGlCQUFXLEVBQUUsSUFSVDtBQVNKQyxhQUFPLEVBQUUsSUFUTDtBQVVKQyxpQkFBVyxFQUFFLEtBVlQ7QUFXSkMsZUFBUyxFQUFFLElBWFA7QUFZSkMsYUFBTyxFQUFFLElBWkw7QUFhSkMsa0JBQVksRUFBRSxLQWJWO0FBY0p0b0IsYUFBTyxFQUFFLFdBZEw7QUFlSnNDLGdCQUFVLEVBQUUsT0FmUjtBQWdCSmltQixpQkFBVyxFQUFFLElBaEJUO0FBaUJKQyxjQUFRLEVBQUU7QUFqQk4sS0E3Q0M7QUFnRVBsQixNQUFFLEVBQUU7QUFDRm1CLFVBQUksRUFBRTtBQUNKQyxZQUFJLEVBQUU7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBREY7QUFFSkMsWUFBSSxFQUFFO0FBQUVELGtCQUFRLEVBQUU7QUFBWixTQUZGO0FBR0o3USxhQUFLLEVBQUU7QUFBRTZRLGtCQUFRLEVBQUU7QUFBWixTQUhIO0FBSUp0b0IsZUFBTyxFQUFFO0FBQUVzb0Isa0JBQVEsRUFBRTtBQUFaLFNBSkw7QUFLSjlULGVBQU8sRUFBRTtBQUFFOFQsa0JBQVEsRUFBRTtBQUFaLFNBTEw7QUFNSmhjLGFBQUssRUFBRTtBQUFFZ2Msa0JBQVEsRUFBRTtBQUFaLFNBTkg7QUFPSkUsYUFBSyxFQUFFO0FBQUVGLGtCQUFRLEVBQUU7QUFBWixTQVBIO0FBUUpHLGNBQU0sRUFBRTtBQUFFSCxrQkFBUSxFQUFFO0FBQVo7QUFSSixPQURKO0FBV0ZJLFdBQUssRUFBRTtBQVhMO0FBaEVHLEdBRkk7QUFnRmJ6cUIsU0FBTyxFQUFFO0FBQ1BoQixXQUFPLEVBQUU7QUFERixHQWhGSTtBQW1GYjByQixXQUFTLEVBQUUsRUFuRkU7QUFvRmJDLE1BQUksRUFBRTtBQUNKN3FCLFlBQVEsRUFBRSxLQUROO0FBRUpFLFdBQU8sRUFBRSxLQUZMO0FBR0owcUIsYUFBUyxFQUFFO0FBSFA7QUFwRk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQUE7QUFFYnhZLHNCQUFvQixFQUFFLEVBRlQ7QUFJYjBZLGlCQUFlLEVBQUUsRUFKSjtBQU1iQyxhQUFXLEVBQUU7QUFDWEMsYUFBUyxFQUFFLFNBREE7QUFFWEMsU0FBSyxFQUFFLFNBRkk7QUFHWEMsVUFBTSxFQUFFLFNBSEc7QUFJWEMsVUFBTSxFQUFFLFNBSkc7QUFLWEMsT0FBRyxFQUFFLFNBTE07QUFNWEMsVUFBTSxFQUFFLFNBTkc7QUFPWEMsUUFBSSxFQUFFLFNBUEs7QUFRWEMsU0FBSyxFQUFFO0FBUkk7QUFOQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmLElBQU14dEIsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBU3l0QixHQUFULEVBQWM7QUFDMUIsTUFBTXBsQixNQUFNLEdBQUd4QyxLQUFLLENBQUNDLE9BQU4sQ0FBYzJuQixHQUFkLElBQXFCLEVBQXJCLEdBQTBCLEVBQXpDO0FBQ0EsTUFBSUMsR0FBSjs7QUFDQSxPQUFLLElBQUlDLElBQVQsSUFBaUJGLEdBQWpCLEVBQXNCO0FBQ3BCLFFBQUlBLEdBQUcsQ0FBQzVxQixjQUFKLENBQW1COHFCLElBQW5CLENBQUosRUFBOEI7QUFDNUJELFNBQUcsR0FBR0QsR0FBRyxDQUFDRSxJQUFELENBQVQ7O0FBQ0EsVUFBSUQsR0FBRyxLQUFLLElBQVIsSUFBZ0IsUUFBT0EsR0FBUCxNQUFlLFFBQW5DLEVBQTZDO0FBQzNDcmxCLGNBQU0sQ0FBQ3NsQixJQUFELENBQU4sR0FBZTN0QixLQUFLLENBQUMwdEIsR0FBRCxDQUFwQjtBQUNELE9BRkQsTUFHRXJsQixNQUFNLENBQUNzbEIsSUFBRCxDQUFOLEdBQWVELEdBQWY7QUFDSDtBQUNGOztBQUNELFNBQU9ybEIsTUFBUDtBQUNELENBYkQ7O1FBZVNySSxLLEdBQUFBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUksVTs7UUFBQUEsVTs7O0FBRVgsc0JBQVl1YyxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2ZBLE9BQUcsQ0FBQ2lSLE1BQUosR0FBYSxFQUFiO0FBQ0FqUixPQUFHLENBQUNrUixXQUFKLEdBQWtCLEVBQWxCO0FBRUEsb0ZBQU1sUixHQUFOO0FBRUEsVUFBS2xGLG9CQUFMLElBQTZCLE1BQUthLFlBQUwsRUFBN0I7QUFDQSxLQUFDLE1BQUs2RSxTQUFOLElBQW1CLE1BQUsyUSxZQUFMLEVBQW5CO0FBUGU7QUFRaEI7Ozs7bUNBQ2NDLE0sRUFBUTFELEksRUFBTXRuQixDLEVBQUc7QUFDOUIsVUFBSXdMLEVBQUUsR0FBR3hMLENBQUMsQ0FBQ3NGLE1BQVg7QUFBQSxVQUNJMmxCLFFBREo7QUFBQSxVQUNjQyxJQURkO0FBQUEsVUFDb0IzUixJQURwQjtBQUFBLFVBQzBCc0gsQ0FEMUI7QUFBQSxVQUM2QnNLLElBRDdCO0FBQUEsVUFDbUNDLE9BRG5DO0FBQUEsVUFDNENDLEtBRDVDOztBQUdBLFdBQUtKLFFBQUwsSUFBaUJELE1BQWpCLEVBQXlCO0FBQ3ZCbkssU0FBQyxHQUFHb0ssUUFBUSxDQUFDLENBQUQsQ0FBWjtBQUNBQyxZQUFJLEdBQUdELFFBQVA7QUFDQUUsWUFBSSxHQUFHdEssQ0FBQyxLQUFLLEdBQWI7QUFDQXVLLGVBQU8sR0FBR3ZLLENBQUMsS0FBSyxHQUFoQjtBQUNBd0ssYUFBSyxHQUFHeEssQ0FBQyxLQUFLLEdBQWQ7QUFFQSxZQUFJc0ssSUFBSSxJQUFJQyxPQUFaLEVBQXFCSCxRQUFRLEdBQUdBLFFBQVEsQ0FBQzFGLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBWDs7QUFFckIsWUFBSThGLEtBQUssSUFDTEQsT0FBTyxJQUFJNWYsRUFBRSxDQUFDL0csU0FBSCxDQUFhYyxRQUFiLENBQXNCMGxCLFFBQXRCLENBRFgsSUFFQUUsSUFBSSxJQUFJM2YsRUFBRSxDQUFDaEgsRUFBSCxLQUFVeW1CLFFBRmxCLElBR0F6ZixFQUFFLENBQUNmLFFBQUgsQ0FBWW9RLFdBQVosT0FBOEJvUSxRQUhsQyxFQUlFO0FBRUExUixjQUFJLEdBQUd5UixNQUFNLENBQUNFLElBQUQsQ0FBYjtBQUVBLGNBQUksT0FBTzNSLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0NBLElBQUksQ0FBQ3ZaLENBQUQsRUFBSXdMLEVBQUosQ0FBSixDQUFoQyxLQUNLLElBQUksS0FBSytOLElBQUwsQ0FBSixFQUFnQixLQUFLQSxJQUFMLEVBQVd2WixDQUFYLEVBQWN3TCxFQUFkO0FBRXJCO0FBQ0Q7QUFDRjtBQUNGOzs7bUNBQ2M7QUFBQTs7QUFDYixXQUFLdkcsRUFBTCxDQUFRLGVBQVIsRUFBeUIsVUFBQUEsRUFBRSxFQUFJO0FBQzdCLFlBQUlBLEVBQUosRUFBUSxNQUFJLENBQUNzUSxZQUFMLEdBQVIsS0FDSyxNQUFJLENBQUNwUSxlQUFMO0FBQ04sT0FIRDtBQUlEOzs7Z0NBQ1dtaUIsSSxFQUFNL04sSSxFQUFNL04sRSxFQUFJO0FBQzFCQSxRQUFFLEdBQUdBLEVBQUUsSUFBSSxLQUFLQSxFQUFoQjtBQUNBLFVBQU12SSxPQUFPLEdBQUcsT0FBT3NXLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkJBLElBQTdCLEdBQW9DLEtBQUtBLElBQUwsQ0FBcEQ7QUFFQS9OLFFBQUUsQ0FBQ3pILGdCQUFILENBQW9CdWpCLElBQXBCLEVBQTBCcmtCLE9BQTFCLEVBQW1DLEtBQW5DOztBQUVBLFVBQUl1SSxFQUFFLEtBQUssS0FBS0EsRUFBaEIsRUFBb0I7QUFDbEIsWUFBSSxDQUFDLEtBQUtxZixNQUFMLENBQVl2RCxJQUFaLENBQUwsRUFBd0IsS0FBS3VELE1BQUwsQ0FBWXZELElBQVosSUFBb0IsRUFBcEI7O0FBQ3hCLGFBQUt1RCxNQUFMLENBQVl2RCxJQUFaLEVBQWtCbGdCLElBQWxCLENBQXVCbkUsT0FBdkI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLNm5CLFdBQUwsQ0FBaUIxakIsSUFBakIsQ0FBc0IsQ0FBQ29FLEVBQUQsRUFBSzhiLElBQUwsRUFBV3JrQixPQUFYLENBQXRCO0FBQ0Q7QUFDRjs7O21DQUNjO0FBQ2IsVUFBSXRGLE1BQU0sR0FBRyxLQUFLQSxNQUFsQjtBQUFBLFVBQ0kydEIsU0FESjtBQUFBLFVBQ2U5ZixFQURmO0FBQUEsVUFDbUJ3ZixNQURuQjtBQUFBLFVBQzJCMUQsSUFEM0I7QUFBQSxVQUNpQ3JrQixPQURqQztBQUdBLFVBQUksQ0FBQ3RGLE1BQUQsSUFBVyxFQUFFMnRCLFNBQVMsR0FBRzN0QixNQUFNLENBQUMwVyxHQUFyQixDQUFYLElBQXdDLEVBQUU3SSxFQUFFLEdBQUcsS0FBS0EsRUFBWixDQUE1QyxFQUE2RCxPQUFPLEtBQVA7O0FBRTdELFdBQUs4YixJQUFMLElBQWFnRSxTQUFiLEVBQXdCO0FBQ3RCTixjQUFNLEdBQUdNLFNBQVMsQ0FBQ2hFLElBQUQsQ0FBbEI7QUFDQXJrQixlQUFPLEdBQUcsS0FBSzJFLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUsyakIsY0FBdEIsRUFBc0NQLE1BQXRDLEVBQThDMUQsSUFBOUMsQ0FBVjtBQUNBOWIsVUFBRSxDQUFDekgsZ0JBQUgsQ0FBb0J1akIsSUFBcEIsRUFBMEJya0IsT0FBMUIsRUFBbUMsS0FBbkM7QUFDQSxZQUFJLENBQUMsS0FBSzRuQixNQUFMLENBQVl2RCxJQUFaLENBQUwsRUFBd0IsS0FBS3VELE1BQUwsQ0FBWXZELElBQVosSUFBb0IsRUFBcEI7O0FBQ3hCLGFBQUt1RCxNQUFMLENBQVl2RCxJQUFaLEVBQWtCbGdCLElBQWxCLENBQXVCbkUsT0FBdkI7QUFDRDtBQUNGOzs7c0NBQ2lCO0FBQ2hCLFVBQUlxa0IsSUFBSixFQUFVdUQsTUFBVixFQUFrQnRkLENBQWxCOztBQUVBLFdBQUsrWixJQUFMLElBQWEsS0FBS3VELE1BQWxCLEVBQTBCO0FBQ3hCQSxjQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZdkQsSUFBWixDQUFUO0FBQ0EvWixTQUFDLEdBQUdzZCxNQUFNLENBQUM1cUIsTUFBWDs7QUFDQSxlQUFPc04sQ0FBQyxFQUFSLEVBQVk7QUFDVixlQUFLL0IsRUFBTCxDQUFReEgsbUJBQVIsQ0FBNEJzakIsSUFBNUIsRUFBa0N1RCxNQUFNLENBQUN0ZCxDQUFELENBQXhDLEVBQTZDLEtBQTdDOztBQUNBc2QsZ0JBQU0sQ0FBQzdiLE1BQVAsQ0FBY3pCLENBQWQsRUFBaUIsQ0FBakI7QUFDRDtBQUNGOztBQUVELFVBQUlpZSxNQUFNLEdBQUcsS0FBS1YsV0FBbEI7QUFBQSxVQUErQjVxQixDQUFDLEdBQUcsQ0FBbkM7QUFBQSxVQUFzQ29TLEdBQXRDO0FBQ0EvRSxPQUFDLEdBQUdpZSxNQUFNLENBQUN2ckIsTUFBWDs7QUFFQSxhQUFPQyxDQUFDLEdBQUdxTixDQUFYLEVBQWNyTixDQUFDLEVBQWYsRUFBbUI7QUFDakJvUyxXQUFHLEdBQUdrWixNQUFNLENBQUN0ckIsQ0FBRCxDQUFaO0FBQ0FvUyxXQUFHLENBQUMsQ0FBRCxDQUFILENBQU90TyxtQkFBUCxDQUEyQnNPLEdBQUcsQ0FBQyxDQUFELENBQTlCLEVBQW1DQSxHQUFHLENBQUMsQ0FBRCxDQUF0QyxFQUEyQyxLQUEzQztBQUNEO0FBQ0Y7Ozs7RUEzRjZCbFYsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhDOztBQUVBLElBQU1LLGFBQWEsR0FBRyxJQUFJTCxlQUFKLENBQVk7QUFDaEN1QixVQURnQyxzQkFDckI7QUFBQTs7QUFDVGlELFVBQU0sQ0FBQ21DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUEwbkIsS0FBSyxFQUFJO0FBQ3hDLFVBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWU1ZSxLQUFmLENBQXFCLEdBQXJCLEVBQTBCZixHQUExQixFQUFiOztBQUNBLFVBQUksQ0FBQyxlQUFELEVBQWtCLGdCQUFsQixFQUFvQyxlQUFwQyxFQUFxRCxrQkFBckQsRUFBeUU0QyxRQUF6RSxDQUFrRjhjLElBQWxGLENBQUosRUFBNkY7QUFDM0YsYUFBSSxDQUFDdHBCLElBQUwsQ0FBVSx1QkFBVixFQUFtQztBQUNqQ3dwQixpQkFBTyxFQUFFSCxLQUFLLENBQUNHLE9BRGtCO0FBRWpDQyxrQkFBUSxFQUFFSixLQUFLLENBQUNFLFFBQU4sQ0FBZTVlLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEJmLEdBQTFCLEdBQWdDZSxLQUFoQyxDQUFzQyxHQUF0QyxFQUEyQytCLEtBQTNDLEtBQXFELEdBQXJELEdBQTJEMmMsS0FBSyxDQUFDSyxNQUFqRSxHQUEwRSxHQUExRSxHQUFnRkwsS0FBSyxDQUFDTSxLQUYvRDtBQUdqQ0MsY0FBSSxFQUFHLElBQUlyWSxJQUFKLEVBQUQsQ0FBYUMsT0FBYjtBQUgyQixTQUFuQztBQUtEO0FBQ0YsS0FURCxFQVNHLEtBVEg7QUFVRDtBQVorQixDQUFaLENBQXRCOztxQkFlZW5XLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNqQkEsVUFBU3d1QixJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDbEMsT0FBSyxJQUFJaHNCLENBQVQsSUFBY2dzQixJQUFkO0FBQ0UsUUFBSSxDQUFDRCxJQUFJLENBQUMvckIsQ0FBRCxDQUFULEVBQWMrckIsSUFBSSxDQUFDL3JCLENBQUQsQ0FBSixHQUFVZ3NCLElBQUksQ0FBQ2hzQixDQUFELENBQWQ7QUFEaEI7O0FBR0EsU0FBTytyQixJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQsSUFBTS91QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFFakMsU0FBT2tELE9BQU8sQ0FBQ21wQixJQUFSLENBQWE0QyxLQUFiLENBQW1CO0FBQUVDLGlCQUFhLEVBQUUsSUFBakI7QUFBdUI1cUIsVUFBTSxFQUFFO0FBQS9CLEdBQW5CLEVBQTBEdkMsSUFBMUQsQ0FBK0QsVUFBQXNxQixJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUjtBQUFBLEdBQW5FLENBQVA7QUFDRCxDQUhEOztRQUtTcnNCLGUsR0FBQUEsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFQsSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU0ksR0FBVCxFQUFjO0FBQzlCLE1BQU1tWCxDQUFDLEdBQUduWCxHQUFHLENBQUN1dUIsV0FBSixDQUFnQixHQUFoQixDQUFWO0FBQ0EsTUFBSXBYLENBQUMsS0FBSyxDQUFDLENBQVgsRUFBYyxPQUFPblgsR0FBUCxDQUFkLEtBQ0ssT0FBT0EsR0FBRyxDQUFDeW5CLE1BQUosQ0FBVyxDQUFYLEVBQWN0USxDQUFkLENBQVA7QUFDTixDQUpEOztRQU1TdlgsUyxHQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDdUNNLFlBQVc7QUFDeEJvQixVQUFRLENBQUNpRixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEM7QUFBQSxXQUFNdW9CLGlCQUFpQixFQUF2QjtBQUFBLEdBQTlDLEVBQXlFO0FBQ3ZFQyxXQUFPLEVBQUUsS0FEOEQ7QUFFdkVDLFdBQU8sRUFBRSxJQUY4RDtBQUd2RUMsUUFBSSxFQUFFO0FBSGlFLEdBQXpFO0FBS0QsQzs7QUFuREQ7Ozs7Ozs7O0FBUUEsU0FBU0gsaUJBQVQsR0FBNkI7QUFDM0IsTUFBSTlnQixFQUFKLEVBQVE5QyxJQUFSLEVBQWNna0IsT0FBZCxDQUQyQixDQUUzQjs7QUFDQTV0QixVQUFRLENBQUM2dEIsZUFBVCxDQUF5QmhqQixZQUF6QixDQUFzQyxNQUF0QyxFQUE4Q3ZKLE9BQU8sQ0FBQzhQLElBQVIsQ0FBYTBjLGFBQWIsR0FBNkJoakIsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBOUMsRUFIMkIsQ0FJM0I7O0FBQ0EsTUFBTWlqQixZQUFZLEdBQUcvdEIsUUFBUSxDQUFDb1QsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQXJCO0FBQ0EsTUFBTTRhLFlBQVksR0FBR2h1QixRQUFRLENBQUNvVCxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBckI7QUFOMkI7QUFBQTtBQUFBOztBQUFBO0FBUTNCLHlCQUFVMmEsWUFBViw4SEFBd0I7QUFBcEJyaEIsUUFBb0I7QUFDdEJraEIsYUFBTyxHQUFHbGhCLEVBQUUsQ0FBQ2toQixPQUFiO0FBQ0EsVUFBTUssTUFBTSxHQUFHTCxPQUFPLENBQUNLLE1BQXZCOztBQUVBLFVBQUlBLE1BQUosRUFBWTtBQUNWcmtCLFlBQUksR0FBR3RJLE9BQU8sQ0FBQzhQLElBQVIsQ0FBYUMsVUFBYixDQUF3QjRjLE1BQXhCLENBQVA7O0FBRUEsWUFBR3JrQixJQUFJLElBQUlBLElBQUksSUFBSSxJQUFuQixFQUF5QjtBQUN2QjhDLFlBQUUsQ0FBQ21FLFdBQUgsR0FBaUJqSCxJQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQW5CMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFvQjNCLDBCQUFVb2tCLFlBQVYsbUlBQXdCO0FBQXBCdGhCLFFBQW9CO0FBQ3RCa2hCLGFBQU8sR0FBR2xoQixFQUFFLENBQUNraEIsT0FBYjtBQUVBLE9BQUMsT0FBRCxFQUFVLGFBQVYsRUFBeUJ0ZCxPQUF6QixDQUFpQyxVQUFBNGQsSUFBSSxFQUFJO0FBQ3ZDLFlBQU1DLFFBQVEsR0FBR1AsT0FBTyxDQUFDLFNBQVNNLElBQVYsQ0FBeEI7O0FBRUEsWUFBSUMsUUFBSixFQUFjO0FBQ1p2a0IsY0FBSSxHQUFHdEksT0FBTyxDQUFDOFAsSUFBUixDQUFhQyxVQUFiLENBQXdCOGMsUUFBeEIsQ0FBUDs7QUFFQSxjQUFJdmtCLElBQUksSUFBSUEsSUFBSSxJQUFJLElBQXBCLEVBQTBCO0FBQ3hCOEMsY0FBRSxDQUFDN0IsWUFBSCxDQUFnQnFqQixJQUFJLENBQUNuUyxXQUFMLEVBQWhCLEVBQW9DblMsSUFBcEM7QUFDRDtBQUNGO0FBQ0YsT0FWRDtBQVdEO0FBbEMwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUM1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0QsSUFBSXdrQixNQUFNLEdBQUcsRUFBYjs7Ozs7Ozs7Ozs7dUJBSUtwbEIsSyxFQUFPN0UsTyxFQUFTO0FBQ2pCLFVBQUksQ0FBQ2lxQixNQUFNLENBQUNwbEIsS0FBRCxDQUFYLEVBQW9Cb2xCLE1BQU0sQ0FBQ3BsQixLQUFELENBQU4sR0FBZ0IsRUFBaEI7QUFFcEJvbEIsWUFBTSxDQUFDcGxCLEtBQUQsQ0FBTixDQUFjVixJQUFkLENBQW1CbkUsT0FBbkI7QUFDRDs7O3lCQUNJdEYsTSxFQUFpQjtBQUFBOztBQUFBLHdDQUFOd3ZCLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNwQnh2QixZQUFNLEdBQUdBLE1BQU0sQ0FBQ29QLEtBQVAsQ0FBYSxHQUFiLENBQVQ7QUFFQSxVQUFJN00sQ0FBQyxHQUFHLENBQVI7QUFBQSxVQUFXcU4sQ0FBQyxHQUFHNVAsTUFBTSxDQUFDc0MsTUFBdEI7QUFBQSxVQUE4Qm10QixLQUE5Qjs7QUFFQSxhQUFPbHRCLENBQUMsR0FBR3FOLENBQVgsRUFBY3JOLENBQUMsRUFBZixFQUFtQjtBQUNqQmt0QixhQUFLLEdBQUdGLE1BQU0sQ0FBQ3Z2QixNQUFNLENBQUN1QyxDQUFELENBQVAsQ0FBZDtBQUVBLFlBQUlrdEIsS0FBSixFQUNFQSxLQUFLLENBQUNoZSxPQUFOLENBQWMsVUFBQW5NLE9BQU87QUFBQSxpQkFBSUEsT0FBTyxDQUFDNkssS0FBUixDQUFjLEtBQWQsRUFBb0JxZixJQUFwQixDQUFKO0FBQUEsU0FBckI7QUFDSDtBQUNGOzs7NEJBQ09ybEIsSyxFQUFnQjtBQUFBLHlDQUFOcWxCLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixhQUFPL3NCLE9BQU8sQ0FBQzBuQixPQUFSLENBQWdCdUYsV0FBaEIsQ0FBNEI7QUFBRUMsVUFBRSxFQUFFeGxCLEtBQU47QUFBYXFsQixZQUFJLEVBQUVBLElBQW5CO0FBQXlCSSxZQUFJLEVBQUU7QUFBL0IsT0FBNUIsV0FBeUUsWUFBTSxDQUFFLENBQWpGLENBQVA7QUFDRDs7OzBCQUNLaEwsTyxFQUFTaUwsSSxFQUFnQjtBQUFBLHlDQUFQQyxLQUFPO0FBQVBBLGFBQU87QUFBQTs7QUFDN0IsYUFBTyxZQUFtQjtBQUFBLDJDQUFQQyxLQUFPO0FBQVBBLGVBQU87QUFBQTs7QUFDeEIsZUFBT0YsSUFBSSxDQUFDMWYsS0FBTCxDQUFXeVUsT0FBWCxFQUFvQmtMLEtBQUssQ0FBQy9mLE1BQU4sQ0FBYWdnQixLQUFiLENBQXBCLENBQVA7QUFDRCxPQUZEO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWF0d0IsTzs7UUFBQUEsTzs7O0FBRVgsbUJBQVl3YyxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2Y7O0FBRUEsU0FBS3JQLENBQUwsSUFBVXFQLEdBQVY7QUFBZSxZQUFLclAsQ0FBTCxJQUFVcVAsR0FBRyxDQUFDclAsQ0FBRCxDQUFiO0FBQWY7O0FBRUEsUUFBSTVNLE1BQU0sR0FBRyxNQUFLQSxNQUFsQjtBQUFBLFFBQ0lnd0IsU0FESjtBQUFBLFFBQ2VwakIsQ0FEZjtBQUFBLFFBQ2tCdkssQ0FEbEI7QUFBQSxRQUNxQmlELE9BRHJCOztBQUdBLFFBQUl0RixNQUFNLEtBQUtnd0IsU0FBUyxHQUFHaHdCLE1BQU0sQ0FBQ0MsR0FBeEIsQ0FBVixFQUF3QztBQUN0QyxXQUFLb0MsQ0FBTCxJQUFVMnRCLFNBQVYsRUFBcUI7QUFDbkIxcUIsZUFBTyxHQUFHMHFCLFNBQVMsQ0FBQzN0QixDQUFELENBQW5CO0FBQ0EsWUFBSSxNQUFLaUQsT0FBTCxDQUFKLEVBQ0UsTUFBS2dDLEVBQUwsQ0FBUWpGLENBQVIsRUFBVyxNQUFLNEgsS0FBTCxnQ0FBaUIsTUFBSzNFLE9BQUwsQ0FBakIsQ0FBWDtBQUNIO0FBQ0Y7O0FBQ0QsS0FBQyxNQUFLdEUsUUFBTixJQUFrQixNQUFLQSxRQUFMLEVBQWxCO0FBZmU7QUFnQmhCOzs7RUFsQjBCaXZCLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhcndCLEs7O1FBQUFBLEs7OztBQUVYLGlCQUFZcWMsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmLCtFQUFNQSxHQUFOO0FBRUEsVUFBS2lVLElBQUwsR0FBWSxJQUFaO0FBRUEsUUFBTXZHLElBQUksR0FBRyxNQUFLQSxJQUFsQjtBQUVBbG5CLFdBQU8sQ0FBQzBuQixPQUFSLENBQWdCZ0csU0FBaEIsQ0FBMEIxb0IsV0FBMUIsQ0FBc0MsTUFBS3dDLEtBQUwsZ0NBQWlCLE1BQUttbUIsV0FBdEIsQ0FBdEM7QUFFQSxRQUFJekcsSUFBSSxLQUFLLFlBQVQsSUFBeUJBLElBQUksS0FBSyxZQUF0QyxFQUFvRCxNQUFLMEcsV0FBTDs7QUFFcEQsVUFBS0Msa0JBQUw7O0FBWGU7QUFZaEI7Ozs7MkJBQ010d0IsTSxFQUFRO0FBQ2IsV0FBS3N3QixrQkFBTCxDQUF3QnR3QixNQUF4QjtBQUNEOzs7dUNBQ2tCQSxNLEVBQVE7QUFDekJBLFlBQU0sR0FBR0EsTUFBTSxJQUFJLEtBQUtBLE1BQXhCO0FBQ0EsVUFBSXV3QixZQUFKLEVBQWtCQyxxQkFBbEI7O0FBRUEsVUFBSXh3QixNQUFKLEVBQVk7QUFDVnV3QixvQkFBWSxHQUFHdndCLE1BQU0sQ0FBQ2lxQixNQUF0Qjs7QUFDQSxZQUFJc0csWUFBSixFQUFrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNoQixpQ0FBY0EsWUFBZDtBQUFBLGtCQUFTbHVCLENBQVQ7QUFDRSxtQkFBS2lGLEVBQUwsQ0FBUWpGLENBQVIsRUFBVyxLQUFLNEgsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS3lsQixXQUF0QixFQUFtQ3J0QixDQUFuQyxDQUFYO0FBREY7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqQjs7QUFDRG11Qiw2QkFBcUIsR0FBR3h3QixNQUFNLENBQUN5d0IsVUFBL0I7O0FBQ0EsWUFBSUQscUJBQUosRUFBMkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsa0NBQWNBLHFCQUFkO0FBQUEsa0JBQVN0TixDQUFUO0FBQ0UsbUJBQUs1YixFQUFMLENBQVE0YixDQUFSLEVBQVcsS0FBS2paLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUt5bUIsV0FBdEIsRUFBbUN4TixDQUFuQyxDQUFYO0FBREY7QUFEeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUcxQjtBQUNGO0FBQ0Y7OztnQ0FDV3lOLEcsRUFBS0MsTSxFQUFRQyxZLEVBQWM7QUFDckNGLFNBQUcsQ0FBQ25CLElBQUosR0FBV21CLEdBQUcsQ0FBQ25CLElBQUosSUFBWSxFQUF2QjtBQUNBLFVBQUlBLElBQUksR0FBRyxHQUFHemYsTUFBSCxDQUFVNGdCLEdBQUcsQ0FBQ2hCLEVBQWQsRUFBa0JnQixHQUFHLENBQUNuQixJQUF0QixDQUFYO0FBQ0EsVUFBSSxDQUFDb0IsTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQ3R3QixJQUF2QixFQUE2Qmt2QixJQUFJLEdBQUdBLElBQUksQ0FBQ3pmLE1BQUwsQ0FBWTZnQixNQUFaLEVBQW9CQyxZQUFwQixDQUFQO0FBQzdCLFdBQUtwc0IsSUFBTCxDQUFVMEwsS0FBVixDQUFnQixJQUFoQixFQUFzQnFmLElBQXRCO0FBQ0EsVUFBSW1CLEdBQUcsQ0FBQ2YsSUFBUixFQUFjLE9BQU8sSUFBUCxDQUx1QixDQUtWOztBQUMzQixhQUFPLEtBQVA7QUFDRDs7O2dDQUNXdnRCLEMsRUFBWTtBQUN0QixVQUFNc25CLElBQUksR0FBRyxLQUFLQSxJQUFsQjs7QUFEc0Isd0NBQU42RixJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFFdEIsVUFBSTNRLEdBQUcsR0FBRztBQUFFOFEsVUFBRSxFQUFFdHRCLENBQU47QUFBU210QixZQUFJLEVBQUVBO0FBQWYsT0FBVjtBQUNBLFVBQUk3RixJQUFJLEtBQUssU0FBYixFQUF3QmxuQixPQUFPLENBQUMwbkIsT0FBUixDQUFnQnVGLFdBQWhCLENBQTRCN1EsR0FBNUIsV0FBdUMsWUFBTSxDQUFFLENBQS9DLEVBQXhCLEtBQ0ssSUFBSThLLElBQUksS0FBSyxZQUFiLEVBQTJCO0FBQzlCLFlBQU1tSCxPQUFPLEdBQUd0QixJQUFJLENBQUNBLElBQUksQ0FBQ2x0QixNQUFMLEdBQWMsQ0FBZixDQUFwQjtBQUNBLFlBQUl5dUIsR0FBSjs7QUFDQSxZQUFJRCxPQUFPLEtBQUt2d0IsU0FBWixLQUEwQnd3QixHQUFHLEdBQUdELE9BQU8sQ0FBQ0MsR0FBeEMsQ0FBSixFQUFrRDtBQUNoRCxjQUFJQSxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUNwQnR1QixtQkFBTyxDQUFDbXBCLElBQVIsQ0FBYTRDLEtBQWIsQ0FBbUI7QUFBRTNxQixvQkFBTSxFQUFFO0FBQVYsYUFBbkIsRUFBcUN2QyxJQUFyQyxDQUEwQyxVQUFBc3FCLElBQUksRUFBSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNoRCxzQ0FBZ0JBLElBQWhCO0FBQUEsc0JBQVNtRixJQUFUO0FBQ0V0dUIseUJBQU8sQ0FBQ21wQixJQUFSLENBQWE4RCxXQUFiLENBQXlCcUIsSUFBRyxDQUFDbHFCLEVBQTdCLEVBQWlDZ1ksR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqRCxhQUhEO0FBSUQsV0FMRCxNQUtPO0FBQ0xwYyxtQkFBTyxDQUFDbXBCLElBQVIsQ0FBYThELFdBQWIsQ0FBeUJvQixPQUFPLENBQUNDLEdBQWpDLEVBQXNDbFMsR0FBdEMsV0FBaUQsWUFBTSxDQUFFLENBQXpEO0FBQ0Q7QUFDRixTQVRELE1BU087QUFDTHBjLGlCQUFPLENBQUNtcEIsSUFBUixDQUFhNEMsS0FBYixDQUFtQjtBQUFDO0FBQUQsV0FBbkIsRUFBZ0VsdEIsSUFBaEUsQ0FBcUUsVUFBQXNxQixJQUFJLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDM0Usb0NBQWdCQSxJQUFoQjtBQUFBLG9CQUFTbUYsS0FBVDtBQUNFdHVCLHVCQUFPLENBQUNtcEIsSUFBUixDQUFhOEQsV0FBYixDQUF5QnFCLEtBQUcsQ0FBQ2xxQixFQUE3QixFQUFpQ2dZLEdBQWpDLFdBQTRDLFlBQU0sQ0FBRSxDQUFwRDtBQURGO0FBRDJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHNUUsV0FIRDtBQUlEO0FBQ0Y7QUFDRjs7O2dDQUNXeGMsQyxFQUFZO0FBQUEseUNBQU5tdEIsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLFVBQU0zUSxHQUFHLEdBQUc7QUFBRThRLFVBQUUsRUFBRXR0QixDQUFOO0FBQVNtdEIsWUFBSSxFQUFFQTtBQUFmLE9BQVo7QUFDQSxVQUFJLEtBQUtVLElBQVQsRUFBZSxLQUFLQSxJQUFMLENBQVVRLFdBQVYsQ0FBc0I3UixHQUF0QjtBQUNoQjs7O2tDQUNhO0FBQ1osVUFBSSxDQUFDLEtBQUttUyxrQkFBVixFQUE4QjtBQUM1QixhQUFLQyxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLam5CLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtnbkIsT0FBdEIsQ0FBNUI7QUFDRDtBQUNGOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFNZixJQUFJLEdBQUcsS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYXp0QixPQUFPLENBQUMwbkIsT0FBUixDQUFnQjhHLE9BQWhCLENBQXdCO0FBQUUzd0IsWUFBSSxFQUFFLEtBQUtBO0FBQWIsT0FBeEIsQ0FBdEM7QUFDQTR2QixVQUFJLENBQUNpQixZQUFMLENBQWtCMXBCLFdBQWxCLENBQThCO0FBQUEsZUFBTSxNQUFJLENBQUN5b0IsSUFBTCxHQUFZLElBQWxCO0FBQUEsT0FBOUI7QUFDRDs7OzJDQUNzQmhSLEUsRUFBSTtBQUFBOztBQUN6QnpjLGFBQU8sQ0FBQzBuQixPQUFSLENBQWdCaUgsU0FBaEIsQ0FBMEIzcEIsV0FBMUIsQ0FBc0MsVUFBQXlvQixJQUFJLEVBQUk7QUFDNUNBLFlBQUksQ0FBQ0MsU0FBTCxDQUFlMW9CLFdBQWYsQ0FBMkIsTUFBSSxDQUFDd0MsS0FBTCxDQUFXLE1BQVgsRUFBaUIsTUFBSSxDQUFDbW1CLFdBQXRCLENBQTNCO0FBQ0EsU0FBQ2xSLEVBQUQsSUFBT0EsRUFBRSxFQUFUO0FBQ0QsT0FIRDtBQUlEOzs7O0VBeEZ3QnpmLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGM0I7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhRSxNOztRQUFBQSxNOzs7QUFFWCxrQkFBWXNjLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZixnRkFBTUEsR0FBTjtBQUVBLFVBQUtvVixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUVBLFVBQUszdUIsYUFBTCxHQUFxQjR1Qiw0QkFBaUJuRixJQUFqQixDQUFzQjdxQixRQUF0QixHQUFpQyxNQUFqQyxHQUEwQyxPQUEvRDtBQUNBLFVBQUswUyxZQUFMLEdBQW9Cc2QsNEJBQWlCbkYsSUFBakIsQ0FBc0IzcUIsT0FBdEIsR0FBZ0MsTUFBaEMsR0FBeUMsT0FBN0Q7QUFDQSxVQUFLK3ZCLGNBQUwsR0FBc0JELDRCQUFpQm5GLElBQWpCLENBQXNCRCxTQUF0QixHQUFrQyxNQUFsQyxHQUEyQyxPQUFqRTtBQVJlO0FBU2hCOzs7OzJCQUVNO0FBQUE7O0FBQ0wsYUFBTzFwQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IrdUIsS0FBaEIsQ0FBc0Jwd0IsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFvQixPQUFPLEVBQUk7QUFDakQsWUFBSUEsT0FBTyxJQUFJQSxPQUFPLENBQUMwcEIsSUFBdkIsRUFBNkI7QUFDM0IsZ0JBQUksQ0FBQ3NGLFFBQUwsQ0FBY2h2QixPQUFPLENBQUMwcEIsSUFBdEI7QUFDRDtBQUNGLE9BSk0sQ0FBUDtBQUtEOzs7NkJBRVFBLEksRUFBTTtBQUNiLFdBQUssSUFBSXBOLElBQVQsSUFBaUJvTixJQUFqQixFQUF1QjtBQUNyQixhQUFLLFVBQVVwTixJQUFmLElBQXVCb04sSUFBSSxDQUFDcE4sSUFBRCxDQUFKLEdBQWEsTUFBYixHQUFzQixPQUE3QztBQUNEO0FBQ0Y7OztvQ0FFZTtBQUFBOztBQUNkLFdBQUtjLElBQUwsR0FBWXhlLElBQVosQ0FBaUI7QUFBQSxlQUFNLE1BQUksQ0FBQ21ELElBQUwsQ0FBVSw2QkFBVixDQUFOO0FBQUEsT0FBakI7QUFDRDs7OzBCQUVzQjtBQUFBOztBQUFBLFVBQW5Ca3RCLEtBQW1CLHVFQUFYLFNBQVc7O0FBQ3JCLFVBQUksS0FBS0wsWUFBVCxFQUF1QjtBQUNyQixlQUFRLElBQUlNLE9BQUosQ0FBWSxVQUFBQyxDQUFDO0FBQUEsaUJBQUk1dEIsTUFBTSxDQUFDeVEsVUFBUCxDQUFrQjtBQUFBLG1CQUFNbWQsQ0FBQyxDQUFDLE1BQUksQ0FBQ3h3QixHQUFMLENBQVNzd0IsS0FBVCxDQUFELENBQVA7QUFBQSxXQUFsQixFQUE0QyxFQUE1QyxDQUFKO0FBQUEsU0FBYixDQUFSO0FBQ0Q7O0FBQ0QsVUFBTS9WLElBQUksR0FBRyxLQUFLLFVBQVUrVixLQUFmLENBQWI7QUFDQSxVQUFJLENBQUMvVixJQUFMLEVBQVcsTUFBTSxXQUFXK1YsS0FBWCxHQUFtQixpQkFBekI7O0FBRVgsVUFBSSxDQUFDLEtBQUtOLFdBQVYsRUFBdUI7QUFDckIsYUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLGFBQUtELFdBQUwsR0FBbUIsSUFBbkI7QUFFQSxlQUFPLEtBQUt2UixJQUFMLEdBQVl4ZSxJQUFaLENBQWlCLFlBQU07QUFDNUIsZ0JBQUksQ0FBQ2d3QixZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsaUJBQU8sTUFBSSxDQUFDLFVBQVVLLEtBQVgsQ0FBSixFQUFQO0FBQ0QsU0FITSxDQUFQO0FBSUQ7O0FBQ0QsYUFBTyxLQUFLLFVBQVVBLEtBQWYsR0FBUDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixhQUFPbHZCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQit1QixLQUFoQixDQUFzQnB3QixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXd3QixZQUFZLEVBQUk7QUFDdEQsZUFBT3J2QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IwcEIsSUFBaEIsQ0FBcUIvcUIsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUF5d0IsYUFBYSxFQUFJO0FBQ3RELFdBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0J0Z0IsT0FBcEIsQ0FBNEIsVUFBQWtnQixLQUFLLEVBQUk7QUFDbkNHLHdCQUFZLENBQUNILEtBQUQsQ0FBWixHQUFzQkcsWUFBWSxDQUFDSCxLQUFELENBQVosSUFBdUJJLGFBQWEsQ0FBQ0osS0FBRCxDQUExRDtBQUNELFdBRkQ7QUFHQSxjQUFJLE1BQUksQ0FBQ2h2QixhQUFMLEtBQXVCLE1BQTNCLEVBQW1DbXZCLFlBQVksQ0FBQ3Z3QixRQUFiLEdBQXdCd3dCLGFBQWEsQ0FBQ3h3QixRQUF0QztBQUNuQyxpQkFBTyxNQUFJLENBQUN5d0IsWUFBTCxHQUFvQjF3QixJQUFwQixDQUF5QixVQUFBRyxPQUFPLEVBQUk7QUFDekNxd0Isd0JBQVksQ0FBQ3J3QixPQUFiLEdBQXVCQSxPQUF2QjtBQUNBLG1CQUFPcXdCLFlBQVA7QUFDRCxXQUhNLENBQVA7QUFJRCxTQVRNLENBQVA7QUFVRCxPQVhNLENBQVA7QUFZRDs7O3lDQUNvQjtBQUNuQixhQUFPcnZCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQit1QixLQUFoQixDQUFzQnB3QixHQUF0QixFQUFQO0FBQ0Q7OzswQ0FDcUI7QUFDcEIsYUFBT29CLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjBwQixJQUFoQixDQUFxQi9xQixHQUFyQixFQUFQO0FBQ0Q7OzttQ0FDYztBQUNiLGFBQU9vQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IwcEIsSUFBaEIsQ0FBcUIvcUIsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUF5d0IsYUFBYSxFQUFJO0FBQ3RELFlBQU1FLGFBQWEsR0FBR0YsYUFBYSxDQUFDdHdCLE9BQXBDO0FBRUEsZUFBT2dCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQit1QixLQUFoQixDQUFzQnB3QixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXd3QixZQUFZLEVBQUk7QUFDdEQsY0FBTUksWUFBWSxHQUFHSixZQUFZLENBQUNyd0IsT0FBbEM7QUFDQSxjQUFJLENBQUN3d0IsYUFBTCxFQUFvQixPQUFPQyxZQUFQO0FBQ3BCLGNBQUksQ0FBQ0EsWUFBTCxFQUFtQixPQUFPRCxhQUFQLENBSG1DLENBS3REOztBQUNBLGVBQUssSUFBSTV2QixDQUFULElBQWM2dkIsWUFBWSxDQUFDenhCLE9BQTNCO0FBQW9Dd3hCLHlCQUFhLENBQUN4eEIsT0FBZCxDQUFzQjRCLENBQXRCLElBQTJCNnZCLFlBQVksQ0FBQ3p4QixPQUFiLENBQXFCNEIsQ0FBckIsQ0FBM0I7QUFBcEM7O0FBRUEsaUJBQU80dkIsYUFBUDtBQUNELFNBVE0sQ0FBUDtBQVVELE9BYk0sQ0FBUDtBQWNEOzs7b0NBQ2U7QUFDZCxhQUFPeHZCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ3RCLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBb0IsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ25CLFFBQVIsSUFBb0Jnd0IsNEJBQWlCaHdCLFFBQXpDO0FBQUEsT0FBdEQsQ0FBUDtBQUNEOzs7Z0NBQ1c7QUFDVixhQUFPa0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCK3VCLEtBQWhCLENBQXNCcHdCLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBd3dCLFlBQVksRUFBSTtBQUN0RCxZQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDSyxJQUFuQyxFQUF5QyxPQUFPLEVBQVA7QUFDekMsZUFBT0wsWUFBWSxDQUFDSyxJQUFwQjtBQUNELE9BSE0sQ0FBUDtBQUlEOzs7bUNBQ2M7QUFDYixhQUFPMXZCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQit1QixLQUFoQixDQUFzQnB3QixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXd3QixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQzVILE9BQW5DLEVBQTRDO0FBQzFDLGlCQUFPem5CLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjBwQixJQUFoQixDQUFxQi9xQixHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQXl3QixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQzdILE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBTzRILFlBQVksQ0FBQzVILE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCenFCLGUiLCJmaWxlIjoiY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnb25Ub2dnbGVkU3luYycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDpoYXNob3B0LXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnOiAnc2V0U3luY0ZvckVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZSc6ICdyZW5hbWVFbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnOiAncmVzdW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGVudjogJ2luamVjdGlvbicsXHJcblxyXG4gIHVybDogJycsXHJcbiAgaGFzaGxlc3NVUkw6ICcnLFxyXG5cclxuICBpZnJhbWU6IGZhbHNlLFxyXG4gIG5hbWU6IHVuZGVmaW5lZCxcclxuICBpc05ldzogdHJ1ZSxcclxuICAvL2VudHJ5OiBudWxsLFxyXG4gIGVudHJpZXM6IHt9LFxyXG4gIGxvY2tlZDogZmFsc2UsXHJcbiAgaGFzaFNlbnNpdGl2ZTogZmFsc2UsXHJcbiAgdG1pZDogJycsXHJcbiAgbm90ZUNvbG9yOiAneWVsbG93JyxcclxuICBpbW11dDogZmFsc2UsXHJcbiAgcmVkZXNjcmliaW5nOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xyXG4gIH0sXHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZW50cmllcyA9IHt9O1xyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy50bWlkID0gJyc7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVTdGF0dXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOZXcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG0taWRdJykpIHJldHVybjsvL3Nob3cgbm90aWZpY2F0aW9uXHJcblxyXG4gICAgdGhpcy5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzID8gc2V0dGluZ3MuaGlzdG9yeSA6IG51bGw7XHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcgPT09ICdtYXJrJztcclxuICAgICAgICB0aGlzLmhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaCA9PT0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlbmFtZUVudHJ5KGVudHJ5LCBvbGROYW1lKSB7XHJcbiAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMubmFtZSA9PT0gb2xkTmFtZSAmJiAhdGhpcy5sb2NrZWQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gZW50cnkubmFtZTtcclxuICAgICAgaWYgKHRoaXMuZW50cmllc1tvbGROYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXRTeW5jRm9yRW50cnkoZW50cnkpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQgJiYgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXS5zeW5jZWQgPSBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlRW50cnkoZGVsZXRlZEVudHJ5KSB7XHJcbiAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGlmIChlbnRyaWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIG5hbWUgPT09IGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIGFkZEVudHJpZXMoZW50cmllcykge1xyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCkgdGhpcy5uYW1lID0gZW50cmllc1swXS5uYW1lO1xyXG4gICAgY29uc3QgZSA9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgZTsgaSsrKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTmV3ID0gZmFsc2U7XHJcbiAgICB0aGlzLmltbXV0ID0gISFlbnRyaWVzWzBdLmltbXV0O1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfYm1pY29uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MuYm1pY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVpY29uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZW9uY2xpY2soKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3Rlb25jbGljaztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90bXVpcG9zKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudG11aXBvcztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9hdXRvc2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9pbW11dCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuXHJcbmltcG9ydCAnLi9tb2R1bGVzL3BhZ2UnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2NvbnRleHRtZW51J1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL25vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90bXVpJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrZXItcG9wdXAnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2F1dG8tbWFya2VyJ1xyXG5cclxuaW1wb3J0ICcuL21haW4nXHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCBfUkVTVE9SRVIgZnJvbSAnLi9tb2R1bGVzL3Jlc3RvcmVyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICd1cGRhdGVFbnRyeVN0b3JhZ2UnLFxyXG4gICAgICAncmVzdW1lZC1vbi1oYXNoY2hhbmdlJzogJ3NldFBhZ2VQYXJhbXMnLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZFBhZ2VTdGF0ZScsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuXHJcbiAgICAgIC8vIEBSRVNUT1JFUlxyXG4gICAgICAnZW50cmllczpmb3VuZCc6ICdvbkVudHJpZXNGb3VuZCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXRyeUFjdGl2ZTogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5zZXRQYWdlUGFyYW1zKCk7XHJcbiAgfSxcclxuXHJcbiAgc2V0UGFnZVBhcmFtcygpIHtcclxuICAgIF9TVE9SRS5pZnJhbWUgPSB3aW5kb3cgIT09IHdpbmRvdy5wYXJlbnQud2luZG93O1xyXG4gICAgX1NUT1JFLnVybCA9IHdpbmRvdy5kb2N1bWVudC5VUkw7XHJcbiAgICBfU1RPUkUuaGFzaGxlc3NVUkwgPSBfSEFTSExFU1MoX1NUT1JFLnVybCk7XHJcbiAgfSxcclxuICBvblNhdmVkRW50cnkoZW50cnkpIHtcclxuICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyBfU1RPUkUuaGFzaGxlc3NVUkwgOiBfU1RPUkUudXJsO1xyXG5cclxuICAgIGlmIChlbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICBfU1RPUkUuYWRkRW50cmllcyhbZW50cnldKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICB0aGlzLnJldHJ5QWN0aXZlID0gdHJ1ZTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIHRoaXMucmV0cnlBY3RpdmUgPSBmYWxzZTtcclxuICB9LFxyXG4gIHNlbmRQYWdlU3RhdGUoaW5mbykge1xyXG4gICAgdGhpcy5lbWl0KCdwYWdlLXN0YXRlJywge1xyXG4gICAgICBzZWxlY3Rpb246ICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQsXHJcbiAgICAgIGJvb2ttYXJrOiAhIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpLFxyXG4gICAgICByZXRyeUFjdGl2ZTogdGhpcy5yZXRyeUFjdGl2ZVxyXG4gICAgfSwgaW5mbyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gQFJFU1RPUkVSXHJcbiAgb25FbnRyaWVzRm91bmQoaW5mbykge1xyXG4gICAgX1JFU1RPUkVSKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUVudHJ5U3RvcmFnZShpbmZvLmVudHJpZXMpO1xyXG4gICAgaWYgKGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSkgdGhpcy51cGRhdGVOYW1lU3RvcmFnZShpbmZvLmVudHJpZXMsIGluZm8ucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bWFya3MnLCBpbmZvLmVudHJpZXMpO1xyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlTdG9yYWdlKGVudHJpZXMpIHtcclxuICAgIGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGVudHJpZXMpID8gZW50cmllcyA6IFtlbnRyaWVzXTtcclxuICAgIF9TVE9SRS5hZGRFbnRyaWVzKGVudHJpZXMpO1xyXG4gICAgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gIH0sXHJcbiAgdXBkYXRlTmFtZVN0b3JhZ2UoZW50cmllcywgcmVjZW50bHlPcGVuZWRFbnRyeSkge1xyXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICBjb25zdCBpZ25vcmVIYXNoID0gIWZpcnN0RW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyBfU1RPUkUuaGFzaGxlc3NVUkwgOiBfU1RPUkUudXJsO1xyXG5cclxuICAgIGlmIChyZWNlbnRseU9wZW5lZEVudHJ5LnVybCA9PT0gdXJsKSB7XHJcbiAgICAgIF9TVE9SRS5uYW1lID0gcmVjZW50bHlPcGVuZWRFbnRyeS5uYW1lO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJzogJ3NldE1hcmtlcidcclxuICAgIH1cclxuXHR9LFxyXG5cclxuICBoYW5kbGVyOiBudWxsLFxyXG4gIG1hcmtlcjogJ20nLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0TWFya2VyKGtleSkge1xyXG4gICAgdGhpcy5tYXJrZXIgPSBrZXk7XHJcbiAgfSxcclxuICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZCAmJiAhdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkICYmIHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2V1cC5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdG9wTGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTW91c2V1cCgpIHtcclxuICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1lbmQnLCB0aGlzLm1hcmtlcik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9CT09LTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXJrID0gbnVsbDtcclxuICAgIHRoaXMuYW5jaG9yID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldChtYXJrKSB7XHJcbiAgICBtYXJrID0gbWFyayB8fCB0aGlzLm1hcms7XHJcblxyXG4gICAgbGV0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG4gICAgICAgIGFuY2hvciA9IHdyYXBwZXJzWzBdO1xyXG5cclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IHRydWU7XHJcbiAgICBhbmNob3IuaWQgPSAndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuXHJcbiAgICB0aGlzLm1hcmsgPSBtYXJrO1xyXG4gICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGxldCBtYXJrID0gdGhpcy5tYXJrLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yLFxyXG4gICAgICAgIHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoO1xyXG5cclxuICAgIGFuY2hvci5pZCA9ICcnO1xyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG4gIH1cclxuICBzY3JvbGxJbnRvVmlldyhibSkge1xyXG4gICAgaWYgKGJtIHx8IChibSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSkpXHJcbiAgICAgIGJtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAnYWN0aXZhdGUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUodHJ1ZSk7XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZhdGUob24pIHtcclxuICAgIGlmIChvbiAmJiAhdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlckhhbmRsZXIoKTtcclxuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIW9uICYmIHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZWdpc3RlckhhbmRsZXIoKSB7XHJcbiAgICB0aGlzLmFkZExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGV4dG1hcmtlci1oaWdobGlnaHQnKSkge1xyXG4gICAgICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBfU1RPUkUudG1pZCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9LCB3aW5kb3cuZG9jdW1lbnQpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcmtlciwga2V5LCBwcmVTZXR0aW5ncywgaW1tdXQpIHtcclxuICAgIGxldCBzZWxlY3Rpb24sIGRlZmF1bHRzO1xyXG5cclxuXHRcdHRoaXMubWFya2VyID0gbWFya2VyO1xyXG5cdFx0c2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBtYXJrZXIuc2VsZWN0aW9uO1xyXG4gICAgdGhpcy5pbW11dCA9IF9TVE9SRS5yZWRlc2NyaWJpbmcgPyBtYXJrZXIuaXNJbW11dCA6IGltbXV0O1xyXG5cclxuICAgIGRlZmF1bHRzID0ge1xyXG4gICAgICBzdHlsZTogJycsXHJcbiAgICAgIGJvb2ttYXJrOiBmYWxzZSxcclxuICAgICAgY29uZHM6IG51bGwsXHJcbiAgICAgIHRleHQ6IHNlbGVjdGlvbi50ZXh0LFxyXG4gICAgICBub3RlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZCBpbiBkZWZhdWx0cykge1xyXG4gICAgICBpZiAoIXByZVNldHRpbmdzLmhhc093blByb3BlcnR5KGQpKSB7XHJcbiAgICAgICAgcHJlU2V0dGluZ3NbZF0gPSBkZWZhdWx0c1tkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlU2V0dGluZ3MuaWQgPSBwcmVTZXR0aW5ncy5pZCB8fCArK21hcmtlci5pZGNvdW50O1xyXG5cdFx0dGhpcy5pZCA9IHByZVNldHRpbmdzLmlkO1xyXG5cdFx0dGhpcy5zaW1wbGUgPSBzZWxlY3Rpb24uc2ltcGxlO1xyXG5cclxuXHRcdGxldCByYW5nZSA9IHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24ucmFuZ2U7XHJcblxyXG5cdFx0dGhpcy5zdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0O1xyXG5cdFx0dGhpcy5lbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXQ7XHJcblxyXG5cdFx0dGhpcy53cmFwcGVycyA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcclxuXHJcblx0XHR0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IG51bGw7XHJcblx0XHR0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmtleURhdGEgPSB7XHJcblx0XHRcdGlkOiBwcmVTZXR0aW5ncy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdHN0eWxlOiBwcmVTZXR0aW5ncy5zdHlsZSxcclxuXHRcdFx0Y29uZHM6IHByZVNldHRpbmdzLmNvbmRzLFxyXG5cdFx0XHR0ZXh0OiBwcmVTZXR0aW5ncy50ZXh0LFxyXG5cdFx0XHRib29rbWFyazogcHJlU2V0dGluZ3MuYm9va21hcmssXHJcbiAgICAgIG5vdGU6IHByZVNldHRpbmdzLm5vdGUsXHJcbiAgICAgIHN5bmNlZDogcHJlU2V0dGluZ3Muc3luY2VkXHJcblx0XHR9O1xyXG5cclxuICAgIGlmICh0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB7XHJcbiAgICAgIHRoaXMuZGVzY3JpYmVfaW1tdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cdGNyZWF0ZShyYW5nZSkge1xyXG4gICAgcmFuZ2UgPSByYW5nZSB8fCB0aGlzLnJhbmdlO1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIHN0eWxlID0gdGhpcy5rZXlEYXRhLnN0eWxlLFxyXG4gICAgICAgIG5vZGVzID0gc2VsZWN0aW9uLm5vZGVzLFxyXG4gICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzID0gdGhpcy53cmFwcGVycyB8fCB0aGlzLmNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBuKSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBsYXN0SW5kZXggPSBuIC0gMSxcclxuICAgICAgICBub2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgICBpZiAoIWkpIHJhbmdlLnNldFN0YXJ0KG5vZGUsIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG5cclxuICAgICAgaWYgKGkgPT09IGxhc3RJbmRleClcclxuICAgICAgICByYW5nZS5zZXRFbmQobm9kZSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgICAgcmFuZ2Uuc3Vycm91bmRDb250ZW50cyh3cmFwcGVyc1tpXSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKHdyYXBwZXJzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgICAgbm9kZS5wYXJlbnROb2RlLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24obGFzdEluZGV4KTtcclxuXHJcbiAgICBpZiAodGhpcy5rZXlEYXRhLmJvb2ttYXJrKSB0aGlzLm1hcmtlci5zZXRCb29rbWFyayh0aGlzLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB0aGlzLmRlc2NyaWJlKCk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlckNsaWNrTGlzdGVuZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG4gIHJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hcmtlci5wcm94eSh0aGlzLCB0aGlzLm9uQ2xpY2spLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uQ2xpY2soZSkge1xyXG4gICAgbGV0IGV2ZW50O1xyXG4gICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgIGV2ZW50ID0gJ2NsaWNrZWQ6bWFyayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUgKyAnXzAnO1xyXG4gICAgICBldmVudCA9ICdhY3RpdmF0ZWQ6bWFyayc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hcmtlci5lbWl0KGV2ZW50LCB7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBib29rbWFyazogISF0aGlzLmtleURhdGEuYm9va21hcmssXHJcbiAgICAgIG5vdGU6ICEhdGhpcy5rZXlEYXRhLm5vdGVcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWZpbmVQb3NpdGlvbihuLCBpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICBsZXQgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgbiA9IHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gOiB3cmFwcGVycy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgZmlyc3RXcmFwcGVyID0gd3JhcHBlcnNbMF07XHJcbiAgICBjb25zdCBsYXN0V3JhcHBlciA9IHdyYXBwZXJzW25dO1xyXG4gICAgY29uc3QgZmlyc3RQYXJlbnQgPSBmaXJzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGxhc3RQYXJlbnQgPSBsYXN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgbGV0IGFuY2hvclByZXYsIGZvY3VzUHJldjtcclxuXHJcbiAgICB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChmaXJzdFBhcmVudCwgZmlyc3RXcmFwcGVyLCB0cnVlKSAtIDE7XHJcbiAgICB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGxhc3RQYXJlbnQsIGxhc3RXcmFwcGVyLCB0cnVlKTtcclxuXHJcbiAgICBhbmNob3JQcmV2ID0gZmlyc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuICAgIGZvY3VzUHJldiA9IGxhc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICBpZiAoYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2Lm5vZGVUeXBlID09PSAxKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiArPSAxO1xyXG4gICAgaWYgKCFmb2N1c1ByZXYgfHwgZm9jdXNQcmV2Lm5vZGVUeXBlID09PSAzIHx8IGZpcnN0UGFyZW50ID09PSBsYXN0UGFyZW50KSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIC09IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSAwO1xyXG4gICAgaWYgKHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gMDtcclxuXHJcbiAgICBpZiAoaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2LmRhdGEgPyBhbmNob3JQcmV2LmRhdGEubGVuZ3RoIDogMDtcclxuICAgICAgdGhpcy5lbmRPZmZzZXQgPSB0aGlzLnNpbXBsZSA/IHRoaXMuc3RhcnRPZmZzZXQgKyB0aGlzLmtleURhdGEudGV4dC5sZW5ndGggOiB0aGlzLmVuZE9mZnNldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKHVuZGVmaW5lZCwgdHJ1ZSlcclxuICAgICAgICAuZGVzY3JpYmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblx0dW5kbygpIHtcclxuXHRcdGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG5cdFx0XHRcdHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyxcclxuXHRcdFx0XHR3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG5cdFx0XHRcdGNvbnRhaW5lciwgd3JhcHBlcjtcclxuXHJcblx0XHR3aGlsZSAody0tKSB7XHJcblx0XHRcdGNvbnRhaW5lciA9IGNvbnRhaW5lcnNbd107XHJcblx0XHRcdHdyYXBwZXIgPSB3cmFwcGVyc1t3XTtcclxuXHRcdFx0Y29udGFpbmVyLnJlcGxhY2VDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xyXG5cdFx0XHRjb250YWluZXIubm9ybWFsaXplKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cmVkbygpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGNvbnRhaW5lcnNbMF0uY2hpbGROb2Rlc1t0aGlzLmFuY2hvck5vZGVQb3NpdGlvbl0sIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGNvbnRhaW5lcnNbY29udGFpbmVycy5sZW5ndGggLSAxXS5jaGlsZE5vZGVzW3RoaXMuZm9jdXNOb2RlUG9zaXRpb25dLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbi5jb2xsZWN0Tm9kZXMoKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoKTtcclxuXHR9XHJcblx0d2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBpbmNsdWRpbmdUZXh0Tm9kZXMpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdFx0bGV0IGNoaWxkcmVuID0gaW5jbHVkaW5nVGV4dE5vZGVzIHx8IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHRcdFx0YyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdFx0XHRpID0gMDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG5cdGNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBudW1iZXIpIHtcclxuXHRcdGxldCB3cmFwcGVycyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHdyYXBwZXI7XHJcblxyXG5cdFx0Zm9yICggOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuXHRcdFx0d3JhcHBlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1oaWdobGlnaHQnKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUucmVwbGFjZSgvOy9nLCAnIWltcG9ydGFudDsnKSk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJywgdGhpcy5pZCArICdfJyArIGkpO1xyXG4gICAgICAvL3dyYXBwZXIuc2V0QXR0cmlidXRlKCdjb250ZXh0bWVudScsICd0ZXh0bWFya2VyLWN0bScpO1xyXG5cdFx0XHR3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdyYXBwZXJzO1xyXG5cdH1cclxuICBkZXNjcmliZSgpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG5cdFx0Y29uc3Qgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IHNpbmdsZU5vZGUgPSB0aGlzLnNpbXBsZTtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMud3JhcHBlcnNbMF0ucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHBhcmVudElzVE0gPSBwYXJlbnQuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcblx0XHRjb25zdCBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGdyYW5kZ3JhbXBhID0gZ3JhbXBhLnBhcmVudE5vZGUgfHwgMDtcclxuXHRcdGNvbnN0IGZUTlAgPSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbjtcclxuXHJcblx0XHR0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcblx0XHRcdG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcblx0XHRcdG4xOiBwYXJlbnRJc1RNID8gJ1RNJyA6IHBhcmVudC5ub2RlTmFtZSxcclxuXHRcdFx0cDE6IGZUTlAsXHJcblx0XHRcdG4yOiBncmFtcGEubm9kZU5hbWUsXHJcblx0XHRcdHAyOiB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpLFxyXG5cdFx0XHRwMzogZ3JhbmRncmFtcGEgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEsIGdyYW1wYSkgOiB1bmRlZmluZWQsXHJcblx0XHRcdHA0OiBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUsIGdyYW5kZ3JhbXBhKSA6IHVuZGVmaW5lZFxyXG5cdFx0fTtcclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcblx0fVxyXG4gIGRlc2NyaWJlX2ltbXV0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBlbmRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgbGV0IHN0YXJ0ID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZW5kID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQgIT09IGJvZHkpIHtcclxuICAgICAgc3RhcnRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChzdGFydC5wYXJlbnROb2RlLCBzdGFydCkpO1xyXG4gICAgICBzdGFydCA9IHN0YXJ0LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoZW5kICE9PSBib2R5KSB7XHJcbiAgICAgIGVuZFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKGVuZC5wYXJlbnROb2RlLCBlbmQpKTtcclxuICAgICAgZW5kID0gZW5kLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgbzogdGhpcy5zdGFydE9mZnNldCxcclxuICAgICAgICBwOiBzdGFydFBvc2l0aW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIGU6IHtcclxuICAgICAgICBvOiB0aGlzLmVuZE9mZnNldCxcclxuICAgICAgICBwOiBlbmRQb3NpdGlvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgIH1cclxuXHR9LFxyXG5cclxuICBoYW5kbGVyOiBudWxsLFxyXG4gIGFwcGVuZGVkOiBmYWxzZSxcclxuICBoZWlnaHQ6IDAsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKS50aGVuKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ3BvcHVwJztcclxuICAgICAgdGhpcy5tYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXAnKTtcclxuICAgIGNvbnN0IGJnQ29sb3JSZWdFeHAgPSAvYmFja2dyb3VuZC1jb2xvcjooI1thLWYwLTldezZ9KS87XHJcbiAgICBsZXQgYmdDb2xvciwgY29sb3JCdG47XHJcbiAgICBmb3IgKGxldCBtIGluIHRoaXMubWFya2Vycykge1xyXG4gICAgICBiZ0NvbG9yID0gdGhpcy5tYXJrZXJzW21dLnN0eWxlLm1hdGNoKGJnQ29sb3JSZWdFeHApO1xyXG4gICAgICBpZiAoYmdDb2xvcikge1xyXG4gICAgICAgIGNvbG9yQnRuID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXBjb2xvcicpO1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGNvbG9yQnRuKTtcclxuICAgICAgICBjb2xvckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gYmdDb2xvci5wb3AoKTtcclxuICAgICAgICBjb2xvckJ0bi5pZCA9ICd0bXBvcHVwY29sb3ItLScgKyBtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5hcHBlbmRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvdygpIHtcclxuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IHN0eWxlID0gcG9wdXAuc3R5bGU7XHJcbiAgICBsZXQgcG9wdXBIZWlnaHQ7XHJcblxyXG4gICAgaWYgKCF0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZWRvd24uYmluZCh0aGlzKTtcclxuICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmFwcGVuZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvblBvc2l0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICBzdHlsZS50b3AgPSBzZWxlY3Rpb25Qb3NpdGlvbi50b3AgLSBzZWxlY3Rpb25Qb3NpdGlvbi5oZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSArICdweCc7XHJcbiAgICAgIHN0eWxlLmxlZnQgPSBzZWxlY3Rpb25Qb3NpdGlvbi5sZWZ0ICsgd2luZG93LnNjcm9sbFggKyAncHgnO1xyXG5cclxuICAgICAgcG9wdXBIZWlnaHQgPSBwb3B1cC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApIC0gcG9wdXBIZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0KSAhPT0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSArIHBvcHVwSGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWlnaHQgPSBwb3B1cEhlaWdodDtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKCFzZWxlY3RlZCkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uTW91c2Vkb3duKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSAnVE1QT1BVUENPTE9SJykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJywgZWwuaWQuc3BsaXQoJy0tJykucG9wKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLIGZyb20gJy4vbWFyay1pdGVtJ1xyXG5pbXBvcnQgX0JPT0tNQVJLIGZyb20gJy4vYm9va21hcmsnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG5cdFx0RU5WOiB7XHJcblx0XHRcdCdzZXQ6ZW50cmllcyc6ICd1cGRhdGVJRCcsXHJcblx0XHRcdCdwcmVzc2VkOm1hcmtlci1rZXknOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAncHJlc3NlZDpob3RrZXknOiAnb25Ib3RrZXknLFxyXG4gICAgICAnY2xpY2tlZDpwb3B1cC1tYXJrZXInOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnc2VsZWN0aW9uLWVuZCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdyZWNyZWF0ZScsXHJcbiAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdjdHg6LWInOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAnY3R4OmQnOiAncmVtb3ZlJyxcclxuICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ2N0eDpuJzogJ2FkZE5vdGUnLFxyXG4gICAgICAnY3R4OmMnOiAnY29weScsXHJcbiAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J2NoYW5nZWQ6bm90ZS1jb2xvcic6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgJ2NoYW5nZWQ6bm90ZS1zaXplJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyayc6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JzogJ2ltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJzogJ3NhdmUnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJzogJ3VuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JzogJ2NvcHknLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdvbkhhc2hDaGFuZ2UnXHJcblx0XHR9XHJcblx0fSxcclxuXHRzZWxlY3Rpb246IG51bGwsXHJcblx0ZG9uZTogW10sXHJcblx0dW5kb25lOiBbXSxcclxuXHR2aXN1YWxseU9yZGVyZWRNYXJrczogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgYm9va21hcms6IG51bGwsXHJcbiAgcmVtb3ZlZEJvb2ttYXJrOiBudWxsLFxyXG5cdGlkY291bnQ6IDAsXHJcblx0bWFya1Njcm9sbFBvczogLTEsXHJcblxyXG4gIHVwZGF0ZUlEKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICBjb25zdCBpZHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuXHJcbiAgICAgIGlmICghbG9ja2VkICYmIGVudHJ5LmlkY291bnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya3MgPSAoZW50cnkubWFya3MgfHwgW10pLmNvbmNhdChlbnRyeS5sb3N0IHx8IFtdKSxcclxuICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgIHdoaWxlIChkLS0pIHtcclxuICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pZGNvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaWRzKTtcclxuICB9LFxyXG5cdG1hcmsoa2V5LCBkYXRhLCBpbW11dCkge1xyXG5cdFx0dGhpcy51bmRvbmUubGVuZ3RoID0gMDtcclxuXHJcbiAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgIGlmIChkYXRhLmF1dG9ub3RlKSB0aGlzLmVtaXQoJ2FkZDpub3RlJywgbWFyaywgZGF0YS5hdXRvbm90ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG1hcms7XHJcblx0fSxcclxuXHR1bmRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0aWYgKGRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmUucG9wKCk7XHJcbiAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgIHRoaXMudW5kb25lLnB1c2gobWFyay51bmRvKCkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYm9va21hcmspIHRoaXMudW5kb0Jvb2ttYXJrKCk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG5cdHJlZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0aWYgKHVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMudW5kb25lLnBvcCgpO1xyXG5cclxuICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgW21hcmtdKTtcclxuICAgIH1cclxuXHJcbiAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHR9LFxyXG4gIGN1dE91dChpKSB7XHJcbiAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICBpbmRpY2VzID0gW2ldLFxyXG4gICAgICAgIG1hcmssIHNtYWxsZXN0SUQ7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICBmb3IgKHZhciB4ID0gaiArIDE7IHggPCBsOyB4KyspIHtcclxuICAgICAgICBtYXJrID0gZG9uZVt4XTtcclxuXHJcbiAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgaWYgKCF0b0JlUmVtb3ZlZC5pbmNsdWRlcyh4KSkgdG9CZVJlbW92ZWQucHVzaCh4KTtcclxuICAgICAgICAgIGluZGljZXMucHVzaCh4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW5kaWNlcy5zb3J0KCk7XHJcbiAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xyXG4gICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG4gICAgc21hbGxlc3RJRCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHRvQmVSZW1vdmVkKTtcclxuXHJcbiAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5zcGxpY2UodG9CZVJlbW92ZWQucG9wKCksIDEpWzBdLnVuZG8oKTtcclxuICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNtYWxsZXN0SUQ7XHJcbiAgfSxcclxuICByZW1vdmUoaWQpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgaWQgPSBpZCA/IGlkIDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICBsZXQgbWFyayA9IHRoaXMuZ2V0QnlJZChpZC5zcGxpdCgnXycpWzBdKSxcclxuICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICBwb3NpdGlvbiA9IGRvbmUuaW5kZXhPZihtYXJrKSxcclxuICAgICAgICBzbWFsbGVzdElELCBpO1xyXG5cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgdGhpcy51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMudW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLnVuZG9uZS5sZW5ndGgpIHRoaXMucmVkbyh0cnVlKTtcclxuXHJcbiAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZFswXSk7XHJcbiAgfSxcclxuICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpXHJcbiAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gaGlnaGxpZ2h0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShoaWdobGlnaHQudGV4dENvbnRlbnQpLCBoaWdobGlnaHQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb25lID0gW107XHJcbiAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IFtdO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gW107XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IC0xO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgncmVzdW1lZDptYXJrZXJzJywgZW50cnkpO1xyXG4gIH0sXHJcbiAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICB0aGlzLmlzSW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gdHJ1ZTtcclxuICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgfSxcclxuICBzYXZlKCkge1xyXG4gICAgY29uc3QgaWZyYW1lID0gX1NUT1JFLmlmcmFtZTtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcblxyXG4gICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICBpZiAoX1NUT1JFLmlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGlmICghbG9ja2VkICYmIG5hbWluZyA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGlmcmFtZSA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgIGlmIChfU1RPUkUubmFtZSkgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBjb25maXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG4gICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cdH0sXHJcbiAgYXV0b3NhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgndW5zYXZlZC1jaGFuZ2VzJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNvcHkoKSB7XHJcbiAgICBjb25zdCBtYXJrID0gdGhpcy5maW5kTWFyaygpO1xyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCByYW5nZSA9IG1hcmsucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBtYXJrLnNlbGVjdGlvbi5zZWxmO1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KHdyYXBwZXJzWzBdLCAwKTtcclxuICAgIHJhbmdlLnNldEVuZCh3cmFwcGVyc1t3cmFwcGVycy5sZW5ndGggLSAxXSwgMSk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2VsZWN0aW9uLnRvU3RyaW5nKCkudHJpbSgpLnJlcGxhY2UoLyhcXHJcXG4pezEsfS9nLCAnXFxyXFxuJykpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gIH0sXHJcbiAgc3RvcmUobWFyaywgc2F2ZSwgb3JkZXIpIHtcclxuXHRcdHRoaXMuZG9uZS5wdXNoKG1hcmspO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHRpZiAob3JkZXIpIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblx0fSxcclxuICByZWNyZWF0ZShtYXJrKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcbiAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgfSxcclxuICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIHRoaXMuZG9uZSk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChfU1RPUkUubmFtZSA9PT0gbWFyay5rZXlEYXRhLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkpIHtcclxuICAgICAgICB0aGlzLmdvdG9NYXJrKG1hcmspO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLnJlZGVzY3JpYmluZykge1xyXG4gICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkTm90ZShpZCkge1xyXG4gICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICB9LFxyXG4gIHNhdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAoIV9TVE9SRS5sb2NrZWQpIHJldHVybiB0aGlzLmF1dG9zYXZlKCk7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IHRoaXMuZ2V0QnlJZChpZCkua2V5RGF0YTtcclxuICAgIGNvbnN0IHN5bmNlZCA9IHR5cGVvZiBtYXJrLnN5bmNlZCA9PT0gJ2Jvb2xlYW4nID8gbWFyay5zeW5jZWQgOiBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgIG1hcmtzOiBbbWFya10sXHJcbiAgICAgIG5hbWU6IG1hcmsudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSxcclxuICAgICAgc3luY2VkXHJcbiAgICB9O1xyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgZW50cnkpO1xyXG4gIH0sXHJcbiAgZ290b01hcmsobWFyaykge1xyXG4gICAgY29uc3QgbWFya0VsZW1lbnRzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcztcclxuICAgIGxldCBlbCwgcG9zLCBpZDtcclxuICAgIGlmIChtYXJrIHx8IG1hcmsgPT09IDApIHtcclxuICAgICAgaWYgKHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IG1hcmsgKyAxO1xyXG4gICAgICAgIGVsID0gbWFya0VsZW1lbnRzW21hcmtdO1xyXG4gICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZD1cIicgKyBpZCArICdfMFwiXScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3MgPSB0aGlzLm1hcmtTY3JvbGxQb3M7XHJcbiAgICAgIGVsID0gbWFya0VsZW1lbnRzW3Bvc107XHJcbiAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG5cclxuXHRcdGlmICghbWFyayB8fCB0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHRoaXMuZ2V0QnlJZChpZCkub25DbGljayhpZCk7XHJcbiAgICB0aGlzLmluZGljYXRlTWFyayhpZCk7XHJcbiAgfSxcclxuXHRnb3RvTmV4dE1hcmsoZGlyKSB7XHJcblx0XHRjb25zdCBsID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5sZW5ndGg7XHJcblxyXG5cdFx0dGhpcy5tYXJrU2Nyb2xsUG9zICs9IGRpcjtcclxuXHJcblx0XHRpZiAodGhpcy5tYXJrU2Nyb2xsUG9zIDwgMCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbCAtIDE7XHJcblx0XHRlbHNlIGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPj0gbCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gMDtcclxuXHJcblx0XHR0aGlzLmdvdG9NYXJrKCk7XHJcblx0fSxcclxuICBpbmRpY2F0ZU1hcmsoaWQpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSlcclxuICAgICAgLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICBjb25zdCB0bXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkXj1cIicgKyBpZCArICdfXCJdJykpO1xyXG5cclxuICAgIHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKSwgMjAwMCk7XHJcbiAgfSxcclxuICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcmssXHJcbiAgICAgICAgbWFyayA9IHRoaXMuZmluZE1hcmsobSk7XHJcblxyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGJvb2ttYXJrKSB7XHJcbiAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbmV3IF9CT09LTUFSSygpLnNldChtYXJrKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2FkZGVkOmJvb2ttYXJrJyk7XHJcbiAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHVuZG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgfSxcclxuICByZW1vdmVCb29rbWFyaygpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoIWJvb2ttYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gYm9va21hcms7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgIGlmIChib29rbWFyaykgYm9va21hcmsuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9LFxyXG4gIGdldEJ5SWQoaWQsIHBvcykge1xyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmUsXHJcblx0XHRcdCAgZCA9IGRvbmUubGVuZ3RoLFxyXG5cdFx0XHQgIG1hcms7XHJcblxyXG5cdFx0d2hpbGUgKGQtLSkge1xyXG5cdFx0XHRtYXJrID0gZG9uZVtkXTtcclxuXHJcblx0XHRcdGlmIChtYXJrLmtleURhdGEuaWQgPT0gaWQpXHJcblx0XHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbWFyaywgcG9zaXRpb246IGQgfSA6IG1hcms7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBudWxsLCBwb3NpdGlvbjogbnVsbCB9IDogZmFsc2U7XHJcblx0fSxcclxuXHRmaW5kTWFyayh4KSB7XHJcblx0XHR4ID0geCA/IHggOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG5cdFx0bGV0IG1hcmsgPSAheCA/XHJcblx0XHRcdHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV0gOlxyXG5cdFx0XHRcdHR5cGVvZiB4ID09PSAnc3RyaW5nJyA/XHJcblx0XHRcdHRoaXMuZ2V0QnlJZCh4LnNwbGl0KCdfJylbMF0pIDpcclxuXHRcdFx0eDtcclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcbiAgc29ydEJ5SWQoKSB7XHJcbiAgICB0aGlzLmRvbmUuc29ydCgobWFyazEsIG1hcmsyKSA9PiBtYXJrMS5pZCAtIG1hcmsyLmlkKTtcclxuICB9LFxyXG5cdG9yZGVyTWFya3NWaXN1YWxseSgpIHtcclxuXHRcdHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkJD1cIl8wXCJdJykpLnNvcnQoKG0xLCBtMikgPT4ge1xyXG5cdFx0XHRsZXQgYmIxID0gbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRiYjIgPSBtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdHRvcDEgPSBiYjEudG9wLFxyXG5cdFx0XHRcdFx0dG9wMiA9IGJiMi50b3A7XHJcblxyXG5cdFx0XHRpZiAodG9wMSA8IHRvcDIpIHJldHVybiAtMTtcclxuXHRcdFx0ZWxzZSBpZiAodG9wMiA8IHRvcDEpIHJldHVybiAxO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAoYmIxLmxlZnQgPCBiYjIubGVmdCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubWFwKG1hcmsgPT4gcGFyc2VJbnQobWFyay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpO1xyXG4gICAgdGhpcy5lbWl0KCd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJywgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzKTtcclxuXHR9LFxyXG4gIG1hcmtzSW50ZXJzZWN0KG1hcmsxLCBtYXJrMikge1xyXG5cdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICBpZDEgPSBtYXJrMS5pZCxcclxuICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICB3MiwgdG1zLCBsO1xyXG5cclxuICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKHcyLS0pIHtcclxuICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG4gIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0bGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuXHJcblx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGtleSA9IGU7XHJcblx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGtleSA9IGtleSB8fCAnbSc7XHJcblx0XHR9XHJcblxyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldykge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6ICEhc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBfU1RPUkUuaW1tdXQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgfSk7XHJcblx0fSxcclxuICBvbkhvdGtleShrZXkpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHNlbGYucmVkbygpOyBicmVhaztcclxuICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93dXAnOiBzZWxmLmdvdG9OZXh0TWFyaygtMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhcnJvd2Rvd24nOiBzZWxmLmdvdG9OZXh0TWFyaygxKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYyc6IHNlbGYuY29weSgpOyBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRyZXRyaWV2ZUVudHJ5KCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgY29uc3QgbmFtZSA9IF9TVE9SRS5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0ZW50cnkubGFzdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0ZW50cnkuY291bnQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcblx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICBpZiAoaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcbiAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgaXNOZXcgPyBuYW1lIDogZW50cnkubmFtZTtcclxuXHJcblx0XHRyZXR1cm4gZW50cnk7XHJcblx0fSxcclxuICBjb2xsZWN0TWFya3MoKSB7XHJcbiAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICBjb25zdCBtYXJrcyA9IFtdO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgIH1cclxuXHJcbiAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdGtEID0gZG9uZVttXS5rZXlEYXRhO1xyXG4gICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdH1cclxuICAgIHJldHVybiBtYXJrcztcclxuICB9LFxyXG4gIG9uSGFzaENoYW5nZSgpIHtcclxuICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlJyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlaGVhZGVyJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVhY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IGRlbCA9IHRoaXMuZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlZGVsZXRlJyk7XHJcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlbWluaW1pemUnKTtcclxuICAgICAgY29uc3QgZ2VhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWN1c3RvbWl6ZScpO1xyXG4gICAgICBjb25zdCBwYWxldHRlID0gdGhpcy5wYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlcGFsZXR0ZScpO1xyXG4gICAgICBjb25zdCBwID0gdGhpcy50ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvcjtcclxuICAgICAgX1NUT1JFLm5vdGVDb2xvciA9IGNvbG9yO1xyXG4gICAgICBjb25zdCBkZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSkpO1xyXG4gICAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDIwMTMpKTtcclxuICAgICAgY29uc3QgZ2VhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjY5OSkpO1xyXG5cclxuICAgICAgWydncmVlbicsICd3aGl0ZScsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCcsICdwdXJwbGUnLCAnYmx1ZScsICd0dXJxdW9pc2UnXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWNvbG9yJyk7XHJcbiAgICAgICAgY29sb3IuY2xhc3NOYW1lID0gJ3Rtbm90ZWNvbG9yLS0nICsgYztcclxuICAgICAgICBjb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCBjKTtcclxuICAgICAgICBwYWxldHRlLmFwcGVuZENoaWxkKGNvbG9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1ub3RlJywgdHJ1ZSk7XHJcbiAgICAgIGRlbC5hcHBlbmRDaGlsZChkZWxUZXh0KTtcclxuICAgICAgbWluLmFwcGVuZENoaWxkKG1pblRleHQpO1xyXG4gICAgICBnZWFyLmFwcGVuZENoaWxkKGdlYXJUZXh0KTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdhZGQ6bm90ZSc6ICdhZGRBbmRTaG93JyxcclxuICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdyZW1vdmVOb3RlU3RvcmFnZScsXHJcbiAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAncmVtb3ZlZDptYXJrJzogJ3JlbW92ZU5vdGUnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVRyYW5zcCcsXHJcbiAgICAgICdzdGFydDpkcmFnJzogJ3N0YXJ0RHJhZ2dpbmdOb3RlJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG5vdGVzOiB7fSxcclxuICB0b2dnbGU6IG51bGwsXHJcbiAgZHJhZ0hhbmRsZXI6IG51bGwsXHJcbiAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVUcmFuc3AoKTtcclxuICB9LFxyXG4gIGFkZChtYXJrLCBjb2xvcikge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZXNbbWFyay5pZF07XHJcbiAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICB0aGlzLmVtaXQoJ2FkZGVkOm5vdGUnKTtcclxuICAgIHJldHVybiB0aGlzLm5vdGVzW21hcmsuaWRdID0gbmV3IF9OT1RFKG1hcmssIGNvbG9yKTtcclxuICB9LFxyXG4gIHJlc3RvcmUobWFya3MpIHtcclxuICAgIGZvciAobGV0IG1hcmsgb2YgbWFya3MpIHtcclxuICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWFyayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGFkZEFuZFNob3cobWFyaywgY29sb3IpIHtcclxuICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlU3RvcmFnZShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSkgdGhpcy5lbWl0KCdyZW1vdmVkOmxhc3Qtbm90ZScpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgaWYgKHRoaXMubm90ZXNbaWRdKSB0aGlzLm5vdGVzW2lkXS5yZW1vdmUoKTtcclxuICB9LFxyXG4gIHRvZ2dsZUFsbCgpIHtcclxuICAgIGlmICghdGhpcy5ub3RlcykgcmV0dXJuO1xyXG4gICAgY29uc3Qgbm90ZXMgPSB0aGlzLm5vdGVzO1xyXG4gICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICBjb25kaXRpb24gPSBtZXRoID09PSAnaGlkZScgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgbm90ZTtcclxuICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgbm90ZSA9IG5vdGVzW25dO1xyXG4gICAgICBpZiAobm90ZS52aXNpYmxlID09PSBjb25kaXRpb24pIHtcclxuICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZVRyYW5zcCgpIHtcclxuICAgIGNvbnN0IGJvZHlDbGFzc2VzID0gd2luZG93LmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzICYmIHNldHRpbmdzLm1pc2MpIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MubWlzYy5ub3RldHJhbnNwKSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3MubWlzYy5ub3RlcGxhaW52aWV3KSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tcGxhaW4tdmlldycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGlzRW1wdHkob2JqKSB7XHJcbiAgICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gIH0sXHJcbiAgc3RhcnREcmFnZ2luZ05vdGUobm90ZSkge1xyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyID0gKGUpID0+IHRoaXMuZW1pdERyYWdFdmVudChub3RlLCBlKTtcclxuICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICBzdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpIHtcclxuICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2RyYWdzdG9wOm5vdGUnLCBub3RlLCBlKTtcclxuICB9LFxyXG4gIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5lbWl0KCdkcmFnOm5vdGUnLCBub3RlLCBlKTtcclxuICB9LFxyXG4gIHNlbmROb3Rlc1N0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgnbm90ZXMtc3RhdGUnLCAhdGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpLCBpbmZvKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgYXV0b1BhdXNlOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRE9NOiB7XHJcbiAgICAgIGtleWRvd246IHtcclxuICAgICAgICAnKic6ICdkZWxlZ2F0ZSdcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgJyonOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICBrZXlDb2RlTWFwOiB7XHJcbiAgICAnMTMnOiAnRW50ZXInLFxyXG4gICAgJzQ4JzogJzAnLCAnNDknOiAnMScsICc1MCc6ICcyJywgJzUxJzogJzMnLCAnNTInOiAnNCcsXHJcbiAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICcxNzEnOiAnKycsICcxNzMnOiAnLSdcclxuICB9LFxyXG5cclxuICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZWwudGFnTmFtZTtcclxuXHJcbiAgICByZXR1cm4gKG5hbWUgPT09ICdURVhUQVJFQScgfHwgbmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJyk7XHJcbiAgfSxcclxuICBkZWxlZ2F0ZShlKSB7XHJcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgbW9kS2V5ID0gKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleSksXHJcbiAgICAgICAgYXJyb3dLZXlzID0gWydhcnJvd2Rvd24nLCAnYXJyb3d1cCddLFxyXG4gICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgIGZ1bmN0aW9uS2V5cyA9IGxvY2tlZEFjdGlvbnMuY29uY2F0KGFycm93S2V5cykuY29uY2F0KCdjJyksXHJcbiAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJ107XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zaGlmdFNlbnNpdGl2ZUtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIGtleSA9IHRoaXMua2V5Q29kZU1hcFtrZXlDb2RlXTtcclxuXHJcbiAgICBpZiAoIWZ1bmN0aW9uS2V5cy5pbmNsdWRlcyhrZXkpICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICBjb25zdCBpc0N1c3RvbU1hcmtlcktleSA9IGlzTWFya2VyS2V5ICYmICFkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICBpZiAoaXNDdXN0b21NYXJrZXJLZXkpIGtleSA9ICdjbSc7XHJcbiAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgIGlmICghc2V0dGluZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBpZiAoIW1vZEtleSkge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdbMV0pIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG9ydGN1dCA9IHNldHRpbmdbMF0uc3BsaXQoJy0nKTtcclxuICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgIGNvbnN0IHMyID0gc2hvcnRjdXRbMV07XHJcblxyXG4gICAgICAgIGlmICghZVtzMV0gfHwgKHMyICYmICFlW3MyXSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGlzTWFya2VyS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgncHJlc3NlZDpob3RrZXknLCBrZXkpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNlbGVjdGlvbicsICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0luQ2h1bmtzKGRhdGEsIHByb2MsIGNiKSB7XHJcbiAgICBwcm9jID0gcHJvYy5iaW5kKHRoaXMpO1xyXG4gICAgY2IgPSBjYi5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdChmdW5jdGlvbiByZWMoKSB7XHJcblx0XHRcdGxldCBleHBpcmUgPSArbmV3IERhdGUoKSArIDUwMDtcclxuXHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHR0cnkge1xyXG4gICAgICAgICAgcHJvYyhkYXRhLnNoaWZ0KCkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdFx0fSB3aGlsZSAoZGF0YS5sZW5ndGggPiAwICYmIGV4cGlyZSA+ICtuZXcgRGF0ZSgpKTtcclxuXHJcblx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHJlYygpLCAwKTtcclxuXHRcdFx0ZWxzZSBjYigpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbiAgcmVwb3J0KCkge1xyXG4gICAgbGV0IGxsID0gdGhpcy5sb3N0Lmxlbmd0aDtcclxuICAgIGlmIChsbCkge1xyXG4gICAgICB3aGlsZShsbC0tKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubG9zdFtsbF0udGVtcDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ2xvc3Q6bWFya3MnLCB0aGlzLmZhaWx1cmVSZXBvcnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdmaW5pc2hlZDpyZXN0b3JhdGlvbicsIHRoaXMuZW50cnkubmFtZSwgdGhpcy5yZXN0b3JlZCwgdGhpcy5sb3N0LCB0aGlzLmFyZWEpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5jYWNoZSA9IFtdO1xyXG4gICAgdGhpcy5waGFzZSA9IDE7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsID0gMDtcclxuICAgIHRoaXMuY2h1bmtEdXJhdGlvbiA9IDUwMDtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICB0aGlzLm9vbSA9IGVudHJ5Lm1hcmtzLmxlbmd0aCA9PT0gMSAmJiBlbnRyeS5tYXJrc1swXS5pZCA9PSAxO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpbWVyKCkge1xyXG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICByZXR1cm4gdGltZXI7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZW50cnkgPSB0aGlzLmVudHJ5LFxyXG4gICAgICAgIG5vdyA9IFtdLCBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzLFxyXG4gICAgICAgIGwgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIG1hcms7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG5cclxuICAgICAgdGhpcy5jb252ZXJ0RGVzY3JpcHRpb24obWFyaykuY3JlYXRlVGVtcE9iamVjdChtYXJrKTtcclxuXHJcbiAgICAgIGlmIChtYXJrLmNvbmRzLm4xID09PSAnVE0nKSBwb3N0cG9uZWQucHVzaChtYXJrKTtcclxuICAgICAgZWxzZSBub3cucHVzaChtYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnF1ZXVlLnB1c2gobm93KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gcG9zdHBvbmVkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW3Bvc3Rwb25lZFtpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzdG9yZSgpO1xyXG4gIH1cclxuICBjb252ZXJ0RGVzY3JpcHRpb24obWFyaykge1xyXG4gICAgaWYgKHR5cGVvZiBtYXJrLmNvbmRzLm8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxldCBjb25kcyA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgICBjb252ZXJ0ZWRDb25kcyA9IHtcclxuICAgICAgICAgICAgbzogY29uZHMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgICAgIG4xOiBjb25kcy5maXJzdE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBuMjogY29uZHMuZmlyc3RQYXJlbnROb2RlTmFtZSxcclxuICAgICAgICAgICAgcDE6IGNvbmRzLmZpcnN0VGV4dE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDI6IGNvbmRzLmZpcnN0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMzogY29uZHMuZmlyc3RQYXJlbnROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHA0OiBjb25kcy5maXJzdEdyYW1wYU5vZGVQb3NpdGlvblxyXG4gICAgICAgICAgfTtcclxuICAgICAgZGVsZXRlIG1hcmsuY29uZHM7XHJcbiAgICAgIG1hcmsuY29uZHMgPSBjb252ZXJ0ZWRDb25kcztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjcmVhdGVUZW1wT2JqZWN0KG1hcmspIHtcclxuICAgIGxldCB0ZXh0ID0gbWFyay50ZXh0LFxyXG4gICAgICAgIHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCksXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gdGhpcy5zcXVlZXplKG1hcmsudGV4dCk7XHJcblxyXG4gICAgbWFyay50ZW1wID0ge1xyXG4gICAgICB0ZXh0TGVuZ3RoOiB0ZXh0Lmxlbmd0aCxcclxuICAgICAgdHJpbW1lZFRleHQ6IHRyaW1tZWRUZXh0LFxyXG4gICAgICB0cmltbWVkVGV4dExlbmd0aDogdHJpbW1lZFRleHQubGVuZ3RoLFxyXG4gICAgICBzcXVlZXplZFRleHQ6IHNxdWVlemVkVGV4dCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoOiBzcXVlZXplZFRleHQubGVuZ3RoLFxyXG4gICAgICBwb3NzaWJsZVBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRzOiB7fSxcclxuICAgICAgcG9zc2libGVGb2N1c09mZnNldHM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcmsuc3luY2VkID0gdGhpcy5lbnRyeS5zeW5jZWQ7XHJcbiAgfVxyXG4gIHJlc3RvcmUoKSB7XHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMikgdGhpcy5zb3J0UXVldWVCeUlkKCk7XHJcblxyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMucXVldWUuc2hpZnQoKSxcclxuICAgICAgICBsZW5ndGggPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcblxyXG4gICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldEJvZHlTZWxlY3Rpb24od2luZG93LmRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgICAuZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBoYXNlID09PSAxICYmIGxlbmd0aCA+IDEpXHJcbiAgICAgICAgICB0aGlzLnBvc3Rwb25lT3ZlcmxhcHBpbmdzKCk7XHJcblxyXG4gICAgICB0aGlzLmZpbmRQb3NzaWJsZUV4dHJlbWEoKVxyXG4gICAgICAgICAgLnJ1bGVPdXRNdWx0aXBsZXMoKVxyXG4gICAgICAgICAgLnJlc3RvcmVSYW5nZXMoKTtcclxuXHJcbiAgICAgIHRoaXMucGhhc2UrKztcclxuXHJcbiAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDwgK25ldyBEYXRlKCkpIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXN0b3JlKCksIDApO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gIH1cclxuICBzb3J0UXVldWVCeUlkKCkge1xyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICByZXMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBtYXJrLCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKCFtYXJrc1tsXS5sZW5ndGgpIGNvbnRpbnVlO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF1bMF07XHJcbiAgICAgIHRlbXBbbWFyay5pZF0gPSBtYXJrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG5cclxuICAgIGZvciAodCA9IHRlbXAubGVuZ3RoOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLnF1ZXVlLnB1c2goW3RlbXBbaV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsKSB7XHJcbiAgICBsZXQgdHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0LFxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3F1ZWV6ZWRUZXh0LCBzcXVlZXplZFRleHRMZW5ndGgsIHAsIGVuZFBvc2l0aW9uO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcCA9IHVuZGVmaW5lZDtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuXHJcbiAgICAgIGlmICghbWFya1RlbXApIHtcclxuICAgICAgICBtYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBlbmRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dDtcclxuICAgICAgICBzcXVlZXplZFRleHRMZW5ndGggPSBtYXJrVGVtcC5zcXVlZXplZFRleHRMZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChwICE9PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgcCA9IC0xO1xyXG4gICAgICAgICAgcCA9IHRyaW1tZWRTZWxlY3Rpb25UZXh0LmluZGV4T2Yoc3F1ZWV6ZWRUZXh0LCBwICsgMSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IHAgKyBzcXVlZXplZFRleHRMZW5ndGg7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucy5wb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMScpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgdGhpcy5tYXhQb3NpdGlvbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKHBvc2l0aW9ucykge1xyXG4gICAgbGV0IGwgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBwb3MsIHN0YXJ0LCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcG9zID0gcG9zaXRpb25zW2xdO1xyXG4gICAgICBzdGFydCA9IHBvc1swXTtcclxuXHJcbiAgICAgIGlmICh0ZW1wW3N0YXJ0XSkgdGVtcC5zcGxpY2Uoc3RhcnQgKyAxLCAwLCBwb3MpO1xyXG4gICAgICBlbHNlIHRlbXBbc3RhcnRdID0gcG9zO1xyXG4gICAgfVxyXG4gICAgdCA9IHRlbXAubGVuZ3RoO1xyXG4gICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW107XHJcblxyXG4gICAgZm9yICg7IGkgPCB0OyBpKyspXHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaCh0ZW1wW2ldKTtcclxuICB9XHJcbiAgcG9zdHBvbmVPdmVybGFwcGluZ3MoKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIHBvczEsIHBvczIsIGksIG0xLCBtMiwgaWQxLCBpZDIsIGlkO1xyXG5cclxuICAgIGlmIChwID4gMSkge1xyXG4gICAgICB3aGlsZSAocC0tID4gMSkge1xyXG4gICAgICAgIHBvczEgPSBwb3NpdGlvbnNbcCAtIDFdO1xyXG4gICAgICAgIHBvczIgPSBwb3NpdGlvbnNbcF07XHJcbiAgICAgICAgbTEgPSBwb3MxWzJdO1xyXG4gICAgICAgIG0yID0gcG9zMlsyXTtcclxuICAgICAgICBpZDEgPSBtMS5pZDtcclxuICAgICAgICBpZDIgPSBtMi5pZDtcclxuXHJcbiAgICAgICAgaWYgKGlkMSA9PT0gaWQyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHBvczFbMV0gPiBwb3MyWzBdICYmIHBvczFbMF0gPCBwb3MyWzFdKSB7XHJcblxyXG4gICAgICAgICAgaWYgKGlkMSA8IGlkMikge1xyXG4gICAgICAgICAgICBpZCA9IGlkMjtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTIpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQxO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMSk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IHA7IGkrKylcclxuICAgICAgICB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGN1dE91dEZvcihpZCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShwLS0pIHtcclxuICAgICAgaWYgKHBvc2l0aW9uc1twXVsyXS5pZCA9PT0gaWQpXHJcbiAgICAgICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnNwbGljZShwLCAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9zdHBvbmUobWFyaykge1xyXG4gICAgbGV0IHF1ZXVlID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gcXVldWUubGVuZ3RoLFxyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKHF1ZXVlW2xdWzBdID09PSBtYXJrKSB7XHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbHJlYWR5SW5jbHVkZWQpXHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbbWFya10pO1xyXG4gIH1cclxuICBmaW5kUG9zc2libGVFeHRyZW1hKCkge1xyXG4gICAgbGV0IG5vZGVzID0gdGhpcy5ib2R5VGV4dE5vZGVzLFxyXG4gICAgICAgIG4gPSBub2RlcyA/IG5vZGVzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgaW5kaWNlcyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwaGFzZSA9IHRoaXMucGhhc2UsXHJcbiAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlID0gW10sXHJcbiAgICAgICAgc2F0aXNmaWVkID0gW10sXHJcbiAgICAgICAgaSA9IDAsIGNoYXJzID0gMCxcclxuICAgICAgICBuZXh0U3RhcnRGb3VuZCwgZW5kaW5nc0luVGhpc05vZGUsXHJcbiAgICAgICAgbm9kZSwgbm9kZXNUZXh0LCBub2Rlc1RleHRMZW5ndGgsXHJcbiAgICAgICAgbWFyaywgZGlmZiwgbCwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIGUsIGYsIGlkLCBwLCBxLCB4LCBtLFxyXG4gICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQsIHN0YXJ0Rm91bmRGb3IsIHBvc3Rwb25lZCwgaGFzRW5kaW5nc0luVGhpc05vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBub2Rlc1RleHQgPSB0aGlzLnNxdWVlemUobm9kZS5kYXRhKTtcclxuICAgICAgbm9kZXNUZXh0TGVuZ3RoID0gbm9kZXNUZXh0Lmxlbmd0aDtcclxuICAgICAgY2hhcnMgKz0gbm9kZXNUZXh0TGVuZ3RoO1xyXG4gICAgICBsID0gaW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSBbXTtcclxuICAgICAgcG9zdHBvbmVkID0gW107XHJcbiAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBzdGFydFBvc2l0aW9uID0gaW5kaWNlc1tsXVswXTtcclxuICAgICAgICBlbmRQb3NpdGlvbiA9IGluZGljZXNbbF1bMV07XHJcbiAgICAgICAgbWFyayA9IGluZGljZXNbbF1bMl07XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yIHx8IFtdO1xyXG4gICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvciA9IG1hcmsudGVtcC5lbmRGb3VuZEZvciB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIW1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICBjaGFycyA+IHN0YXJ0UG9zaXRpb24gJiZcclxuICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoIDwgbWFyay50ZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGhhc0VuZGluZ3NJblRoaXNOb2RlICYmIGhhc0VuZGluZ3NJblRoaXNOb2RlLmlkIDwgbWFyay5pZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxICYmIGlkICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5wdXNoKHsgbm9kZTogbm9kZSwgcG9zOiBpIH0pO1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLnB1c2goc3RhcnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgc3RhcnRGb3VuZEZvci5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgIW1hcmsudGVtcC5lbmRGb3VuZEZvci5pbmNsdWRlcyhlbmRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIChjaGFycyAtIGVuZFBvc2l0aW9uKSA+PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5taW4uYXBwbHkobnVsbCwgc3RhcnRGb3VuZEZvcikgPCBpZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQgPSB0aGlzLmZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBlbmRQb3NpdGlvbiAtIChjaGFycyAtIG5vZGVzVGV4dExlbmd0aCkpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVGb2N1c09mZnNldHMucHVzaChwb3NzaWJsZUZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dID0ge1xyXG4gICAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiBwb3NzaWJsZUZvY3VzT2Zmc2V0LFxyXG4gICAgICAgICAgICAgIHBvczogaVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBjYWNoZS5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgICAgIHNhdGlzZmllZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBtYXJrO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCkgZm9yICh4ID0gMDsgeCA8IHA7IHgrKykgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW3hdKTtcclxuXHJcbiAgICAgIGlmIChjaGFycyA+IHRoaXMubWF4UG9zaXRpb24pIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKHBoYXNlICE9PSAxIHx8IHRoaXMub29tKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBtYXJrID0gdGhpcy5tYXJrc1tpXTtcclxuICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhtYXJrLmlkKSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8yJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBydWxlT3V0TXVsdGlwbGVzKCkge1xyXG4gICAgbGV0IGNhY2hlID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gY2FjaGUubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIHBvc3NpYmxlU3RhcnROb2RlcywgcCwgbm9kZSwgcGFyZW50LCBncmFtcGEsIGdyYW5kZ3JhbXBhLCBncmFuZGdyYW5kZ3JhbXBhLCBtYXRjaGVzLCBmYWlsZWQsIHEsXHJcbiAgICAgICAgcG9zc2libGVFbmRzLCBzdGFydEZvdW5kRm9yLCBjb25kcywgc3RhcnRPZmZzZXQsIHRlbXAsIHRleHRMZW5ndGgsIHN0YXJ0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IGNhY2hlW2ldO1xyXG4gICAgICBtYXRjaGVzID0gW107XHJcbiAgICAgIGZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICB0ZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXMgPSB0ZW1wLnBvc3NpYmxlU3RhcnROb2RlcztcclxuICAgICAgcG9zc2libGVFbmRzID0gdGVtcC5wb3NzaWJsZUVuZHM7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSB0ZW1wLnN0YXJ0Rm91bmRGb3JcclxuICAgICAgcCA9IHBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGg7XHJcbiAgICAgIGNvbmRzID0gbWFyay5jb25kcztcclxuICAgICAgc3RhcnRPZmZzZXQgPSBjb25kcy5vO1xyXG4gICAgICB0ZXh0TGVuZ3RoID0gdGVtcC50ZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgICAgd2hpbGUgKHAtLSkge1xyXG4gICAgICAgICAgbm9kZSA9IHBvc3NpYmxlU3RhcnROb2Rlc1twXS5ub2RlO1xyXG4gICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG5cclxuICAgICAgICAgIGlmICghZ3JhbXBhIHx8IGNvbmRzLnAzID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHAgPSAwO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAxKSBwID0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcSA9IG1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgcGFyZW50ID0gcG9zc2libGVTdGFydE5vZGVzW3FdLm5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbmRncmFtcGEgPSBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgKCFncmFuZGdyYW5kZ3JhbXBhIHx8IGNvbmRzLnA0ID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFuZGdyYW1wYSwgZ3JhbmRncmFtcGEpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAocG9zc2libGVFbmRzW3N0YXJ0Rm91bmRGb3JbcV1dLm9mZnNldCAtIHN0YXJ0T2Zmc2V0KSA9PT0gdGV4dExlbmd0aFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHAgPSBxO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcCkgcCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgcCA9IDA7XHJcblxyXG4gICAgICBwID0gcCB8fCAwO1xyXG5cclxuICAgICAgc3RhcnQgPSBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzW3BdO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlID0gc3RhcnQubm9kZTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uID0gc3RhcnQucG9zO1xyXG5cclxuICAgICAgdGhpcy5zZXRNYXRjaGluZ0VuZChtYXJrLCBwKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXRNYXRjaGluZ0VuZChtYXJrLCBwKSB7XHJcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yW3BdLFxyXG4gICAgICAgIGVuZCA9IG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl07XHJcblxyXG4gICAgbWFyay50ZW1wLmVuZE5vZGUgPSBlbmQubm9kZTtcclxuICAgIG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb24gPSBlbmQucG9zO1xyXG4gICAgbWFyay50ZW1wLmZvY3VzT2Zmc2V0ID0gZW5kLm9mZnNldDtcclxuICB9XHJcbiAgc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbWFyay5jb25kcyxcclxuICAgICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW1wYSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMCxcclxuICAgICAgICBzdGFydE9mZnNldCA9IGRlc2NyaXB0aW9uLm8sXHJcbiAgICAgICAgcmVsZXZhbnROb2RlVGV4dCA9IG5vZGUuZGF0YS5zdWJzdHJpbmcoc3RhcnRPZmZzZXQpLnRyaW0oKSxcclxuICAgICAgICBsID0gcmVsZXZhbnROb2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgbWFya1RleHQgPSBtYXJrLnRlbXAudHJpbW1lZFRleHQsXHJcbiAgICAgICAgbSA9IG1hcmsudGVtcC50cmltbWVkVGV4dExlbmd0aCxcclxuICAgICAgICB0ZXh0c01hdGNoO1xyXG5cclxuICAgIGlmIChtIDw9IGwpIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkpID09PSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkpID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRleHRzTWF0Y2ggJiZcclxuICAgICAgKHBhcmVudE5vZGUubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4xIHx8IChkZXNjcmlwdGlvbi5uMSA9PT0gJ1RNJyAmJiBwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSkgJiZcclxuICAgICAgKCFncmFtcGEgfHwgZ3JhbXBhLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMikgJiZcclxuICAgICAgdGhpcy53aGljaENoaWxkKHBhcmVudE5vZGUsIG5vZGUpID09PSBkZXNjcmlwdGlvbi5wMVxyXG4gICAgKTtcclxuICB9XHJcbiAgZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIG4pIHtcclxuICAgIGxldCBub2RlVGV4dCA9IG5vZGUuZGF0YSxcclxuICAgICAgICBsID0gbm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBjb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zcXVlZXplKG5vZGVUZXh0W2ldKSkgY291bnRlcisrO1xyXG5cclxuICAgICAgaWYgKGNvdW50ZXIgPT09IG4pIHJldHVybiAoL1xccyQvLnRlc3QobWFyay50ZXh0KSA/IGkgKyAyIDogaSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXN0b3JlUmFuZ2VzKCkge1xyXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBtYXJrcyA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3RhcnQsIGVuZCwgZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBzdGFydCA9IG1hcmtUZW1wLnN0YXJ0Tm9kZTtcclxuICAgICAgZW5kID0gbWFya1RlbXAuZW5kTm9kZTtcclxuICAgICAgZm9jdXNPZmZzZXQgPSBtYXJrVGVtcC5mb2N1c09mZnNldDtcclxuXHJcbiAgICAgIGlmICghc3RhcnQgfHwgIWVuZCB8fCAhKHR5cGVvZiBmb2N1c09mZnNldCA9PT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMycpIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCBtYXJrLmNvbmRzLm8pO1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKGVuZCwgZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAvL3NlbGVjdGlvbi5yZXN1bWUocmFuZ2UpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnJlY29sbGVjdE5vZGVzKG1hcmspO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIG1hcmsudGVtcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Qm9keVNlbGVjdGlvbihlbCkge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCsrO1xyXG5cclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oZWwpO1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uLnRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25UcmlhbCA8IDQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNldEJvZHlTZWxlY3Rpb24oZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gJyAnO1xyXG4gICAgICAgICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gW107XHJcbiAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMuc3F1ZWV6ZSh0aGlzLnNlbGVjdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSB0aGlzLnNlbGVjdGlvbi5ub2RlcyA/IHRoaXMuc2VsZWN0aW9uLm5vZGVzLnNsaWNlKCkgOiBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc3F1ZWV6ZSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykgPyB0ZXh0LnJlcGxhY2UoL1xcdHxcXHN8XFxufFxcci9nLCAnJykgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgY29udGV4dCkge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgY2hpbGRyZW4gPSBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0ICAgIGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHQgICAgcG9zID0gMCwgaSA9IDAsIGN1cnJlbnRDaGlsZDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgY3VycmVudENoaWxkID0gY2hpbGRyZW5baV07XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudENoaWxkID09PSBjaGlsZCkgcmV0dXJuIHBvcztcclxuXHJcblx0XHRcdGlmIChjb250ZXh0KSB7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZC5ub2RlTmFtZSA9PT0gY29udGV4dCkgcG9zKys7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgIGlmICghKGN1cnJlbnRDaGlsZC5ub2RlVHlwZSA9PT0gMyAmJiAhY3VycmVudENoaWxkLmRhdGEpKSBwb3MrKztcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgSW1tdXRSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHRoaXMucmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgY29uc3QgbWFya3MgPSB0aGlzLm1hcmtzID0gWy4uLmVudHJ5Lm1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbTEuaWQgLSBtMi5pZCldO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc0luQ2h1bmtzKG1hcmtzLCB0aGlzLnJlc3RvcmVSYW5nZSwgdGhpcy5yZXBvcnQpO1xyXG4gIH1cclxuXHJcbiAgcmVzdG9yZVJhbmdlKG1hcmspIHtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLy8udXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC8vLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC8vLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7IHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTsgfSBjYXRjaChlKSB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG5vZGUpIHtcclxuICAgIHRoaXMuc2VsZi5zZWxlY3RBbGxDaGlsZHJlbihub2RlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKHNlbGVjdGlvbikge1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5zZWxmID0gc2VsZWN0aW9uO1xyXG4gICAgZWxzZSBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgbGV0IHByb3BzID0gWydmb2N1c05vZGUnLCAnYW5jaG9yTm9kZScsICdmb2N1c09mZnNldCcsICdhbmNob3JPZmZzZXQnXSxcclxuICAgICAgICBpID0gcHJvcHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHRoaXNbcHJvcHNbaV1dID0gc2VsZWN0aW9uW3Byb3BzW2ldXTtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICB0aGlzLnNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgYWRqdXN0KCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXMgPSB0aGlzLmZvY3VzTm9kZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSkgdGhpcy5yZXZlcnNlKGFuY2hvciwgZm9jdXMpO1xyXG4gICAgZWxzZSB0aGlzLm5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgbm9ybWFsaXplKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG5cclxuICAgICAgICBmaXJzdFRleHROb2RlID0gdGhpcy5ub2Rlc1swXSxcclxuICAgICAgICBsYXN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgaWYgKGZpcnN0VGV4dE5vZGUgIT09IGFuY2hvcilcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQoZmlyc3RUZXh0Tm9kZSwgZmlyc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGZpcnN0VGV4dE5vZGUuZGF0YS50cmltTGVmdCgpLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGxhc3RUZXh0Tm9kZSAhPT0gZm9jdXMpXHJcbiAgICAgIHJhbmdlLnNldEVuZChsYXN0VGV4dE5vZGUsIGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIChsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBsYXN0VGV4dE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGgpKTtcclxuICB9XHJcbiAgY29sbGVjdE5vZGVzKHdob2xlRG9jdW1lbnQpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpO1xyXG4gICAgY29uc3QgZmlsdGVyID0gd2hvbGVEb2N1bWVudCA/XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGYuaXNTZWxlY3RhYmxlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpIDpcclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKTtcclxuXHJcbiAgICBjb25zdCBpdGVyYXRvciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoY29udGFpbmVyLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwge1xyXG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGxldCBub2RlcyA9IFtdLFxyXG4gICAgICAgIHBhcmVudE5vZGVzID0gW10sXHJcblxyXG4gICAgICAgIHRleHROb2RlLCBwYXJlbnQsIGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgd2hpbGUodGV4dE5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSB7XHJcbiAgICAgIG5vZGVzLnB1c2godGV4dE5vZGUpO1xyXG4gICAgfVxyXG4gICAgbm9kZXMgPSB0aGlzLnRyaW1TZWxlY3Rpb24obm9kZXMpO1xyXG4gICAgLy90aGlzLm5vZGVzID0gdGhpcy5vcHRpb25zLnByb2dyYW1tYXRpY2FsbHkgPyB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2RlcykgOiBub2RlcztcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcyk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGVzID0gdGhpcy5jb2xsZWN0UGFyZW50Tm9kZXModGhpcy5ub2Rlcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlY29sbGVjdE5vZGVzKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtXcmFwcGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRePVwiJyArIG1hcmsuaWQgKyAnX1wiXScpKTtcclxuICAgIGNvbnN0IG0gPSBtYXJrV3JhcHBlcnMubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV3U2VnbWVudCA9IG1hcmtXcmFwcGVycy5tYXAoZWwgPT4gZWwuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgY29uc3QgcHJldiA9IG1hcmtXcmFwcGVyc1swXS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBjb25zdCBuZXh0ID0gbWFya1dyYXBwZXJzW20tMV0ubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb247XHJcbiAgICBjb25zdCBlbmQgPSBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uO1xyXG5cclxuICAgIGlmIChwcmV2ICYmIHByZXYubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC51bnNoaWZ0KHByZXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnB1c2gobmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgLi4ubmV3U2VnbWVudCk7XHJcbiAgfVxyXG4gIHRyaW1TZWxlY3Rpb24obm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGxldCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGZpcnN0Tm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmFuY2hvck5vZGUgPT09IGZpcnN0Tm9kZSAmJiBmaXJzdE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGggPD0gc2VsZWN0aW9uLmFuY2hvck9mZnNldCkge1xyXG4gICAgICAgIG5vZGVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5mb2N1c05vZGUgPT09IGxhc3ROb2RlICYmIHRoaXMuaXNCbGFuayhsYXN0Tm9kZS5kYXRhLnN1YnN0cigwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKSkge1xyXG4gICAgICAgIG5vZGVzLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIHJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgcmcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZShyZyk7XHJcblxyXG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgIHJnLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICAgIHJldHVybiAhIXNlbC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHRoaXMucmFuZ2UpO1xyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgY29sbGVjdFBhcmVudE5vZGVzKG5vZGVzKSB7XHJcbiAgICBsZXQgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBwYXJlbnRzID0gW10sIGkgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBwYXJlbnRzLnB1c2gobm9kZXNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgfVxyXG4gIHJldHJpZXZlVGV4dCgpIHtcclxuICAgIGxldCByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbm9kZXMgPSB0aGlzLm5vZGVzLFxyXG4gICAgICAgIGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbm9kZVRleHRzID0gW10sXHJcbiAgICAgICAgdGV4dDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgbm9kZVRleHRzLnB1c2gobm9kZXNbaV0uZGF0YSk7XHJcblxyXG4gICAgbCAtPSAxO1xyXG5cclxuICAgIGlmIChub2RlVGV4dHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdGhpcy5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgIC8vbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCB0aGlzLmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRleHQgPSB0aGlzLnRleHQgPSBub2RlVGV4dHMuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIG5vZGUxID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgbm9kZTIgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChub2RlMSA9IG5vZGUxLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUyKSAmIDB4MTApID09PSAweDEwKVxyXG4gICAgICAgICAgcmV0dXJuIG5vZGUxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuICByZXZlcnNlKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCByYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChmb2N1cywgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChhbmNob3IsIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoc2VsZWN0aW9uKS5hZGp1c3Qoc2VsZWN0aW9uLmFuY2hvck5vZGUsIHNlbGVjdGlvbi5mb2N1c05vZGUpO1xyXG4gIH1cclxuICByZWR1Y2VUb09uZVJhbmdlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZUNvdW50ID0gc2VsZWN0aW9uLnJhbmdlQ291bnQsXHJcbiAgICAgICAgcmFuZ2UwID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBsYXN0UmFuZ2U7XHJcblxyXG4gICAgaWYgKHJhbmdlQ291bnQgPCAyKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBsYXN0UmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdChyYW5nZUNvdW50IC0gMSk7XHJcblxyXG4gICAgcmFuZ2UwLnNldFN0YXJ0KHJhbmdlMC5zdGFydENvbnRhaW5lciwgcmFuZ2UwLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlMC5zZXRFbmQobGFzdFJhbmdlLmVuZENvbnRhaW5lciwgbGFzdFJhbmdlLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGhhc05vcm1hbFBhcmVudChub2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YWcgPSBwYXJlbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRhZyAhPT0gJ1NDUklQVCcgJiYgdGFnICE9PSAnU1RZTEUnICYmIHRhZyAhPT0gJ0xJTksnICYmIHRhZyAhPT0gJ01FVEEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0JBU0UnICYmIHRhZyAhPT0gJ1RJVExFJyAmJiB0YWcgIT09ICdOT1NDUklQVCcgJiZcclxuICAgICAgdGFnICE9PSAnSU1HJyAmJiB0YWcgIT09ICdJRlJBTUUnICYmIHRhZyAhPT0gJ0VNQkVEJyAmJiB0YWcgIT09ICdQQVJBTScgJiZcclxuICAgICAgdGFnICE9PSAnVklERU8nICYmIHRhZyAhPT0gJ0FVRElPJyAmJiB0YWcgIT09ICdTT1VSQ0UnICYmIHRhZyAhPT0gJ1RSQUNLJyAmJlxyXG4gICAgICB0YWcgIT09ICdDQU5WQVMnICYmIHRhZyAhPT0gJ01BUCcgJiYgdGFnICE9PSAnQVJFQScgJiZcclxuICAgICAgdGFnICE9PSAnTUFUSCcgJiYgdGFnICE9PSAnT0JKRUNUJyAmJlxyXG4gICAgICAhdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnc3ZnJykgLy8mJlxyXG4gICAgICAvLyF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdtYXRoJylcclxuICAgICk7XHJcbiAgfVxyXG4gIGlzQ2hpbGRPZihub2RlLCBub2RlVHlwZSkge1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5vZGVUeXBlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaXNCbGFuayhub2RlKSB7XHJcbiAgICBsZXQgdGV4dDtcclxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChub2RlICYmIHR5cGVvZiBub2RlLmRhdGEgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZS5kYXRhO1xyXG4gICAgICBlbHNlIHRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dC5zZWFyY2goL1teXFxzXFxuXFxyXFx0XS9nKSA9PT0gLTE7XHJcbiAgfVxyXG4gIGlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcG9zaXRpb24gPSBhbmNob3IuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvc2l0aW9uID09PSAyIHx8XHJcbiAgICAgIHBvc2l0aW9uID09PSAxMCB8fFxyXG4gICAgICAoIXBvc2l0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKTtcclxuICB9XHJcbiAgaXNTaW1wbGUoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvck5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1c05vZGUgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGFuY2hvck5vZGUgPT09IGZvY3VzTm9kZSAmJlxyXG4gICAgICBhbmNob3JOb2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgICghYW5jaG9yTm9kZS5uZXh0U2libGluZyB8fCAoYW5jaG9yTm9kZS5uZXh0U2libGluZy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1c05vZGUpICE9PSA0KSkpO1xyXG4gIH1cclxuICBpc1NlbGVjdGFibGUobm9kZSkge1xyXG4gICAgdGhpcy5yYW5nZS5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgcmV0dXJuICEhdGhpcy5zZWxmLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0ZScsXHJcbiAgICAgICdhZGRlZDpub3RlJzogJ29uTm90ZUFkZGVkJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdvbkxhc3ROb3RlUmVtb3ZlZCcsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtSZW1vdmVkJ1xyXG4gICAgfVxyXG5cdH0sXHJcbiAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgZWw6IG51bGwsXHJcblxyXG4gIGF0dGFjaGVkOiBmYWxzZSxcclxuXHJcbiAgYnV0dG9uczoge1xyXG4gICAgbm90ZXM6IHtcclxuICAgICAgZWw6IG51bGwsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBzaG93bjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBib29rbWFyazoge1xyXG4gICAgICBlbDogbnVsbCxcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJvb2ttYXJrOiBmYWxzZSxcclxuICBub3RlczogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgfSxcclxuICB1cGRhdGVTdGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgdGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgPSBibWljb247XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdub3RlaWNvbicpLnRoZW4obm90ZWljb24gPT4gdGhpcy5idXR0b25zLm5vdGVzLnNob3cgPSBub3RlaWNvbik7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9LFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IHNob3VsZEF0dGFjaCA9XHJcbiAgICAgICh0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyAmJiB0aGlzLmJvb2ttYXJrKSB8fFxyXG4gICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgaWYgKHNob3VsZEF0dGFjaCkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hdHRhY2hlZCAmJiAhc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgIGlmICghdGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG11aScpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgaWYgKGJ0bi5zaG93ICYmICFidG4uc2hvd24gJiYgdGhpc1tiXSkgdGhpcy5hZGRCdXR0b24oYik7XHJcbiAgICAgIGVsc2UgaWYgKGJ0bi5zaG93biAmJiAoIXRoaXNbYl0gfHwgIWJ0bi5zaG93KSkgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWJ1dHRvbnMubm90ZXMuc2hvd24gJiYgIWJ1dHRvbnMuYm9va21hcmsuc2hvd24pIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dGFjaGVkID0gdHJ1ZTtcclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbnNbYl0uc2hvd24pIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBub3Rlc0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ub3Rlcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVzdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICBub3Rlc0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZXMnKTtcclxuICAgIGJvb2ttYXJrQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2JtX3Njcm9sbCcpO1xyXG4gIH0sXHJcbiAgYWRkQnV0dG9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gYnRuLmhhbmRsZXIgPSB0eXBlID09PSAnbm90ZXMnID9cclxuICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdG11aS5hcHBlbmRDaGlsZChidG4uZWwpO1xyXG4gICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICBidG4uZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcblxyXG4gICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgYnRuLnNob3duID0gZmFsc2U7XHJcblxyXG4gICAgYnRuLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuLmhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgX1NUT1JFLmdldCgndG11aXBvcycpXHJcbiAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgfSxcclxuICBvbk5vdGVBZGRlZCgpIHtcclxuICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uQm9va21hcmtBZGRlZCgpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uQm9va21hcmtSZW1vdmVkKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZXMnKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3Njcm9sbC10by1ib29rbWFyaycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2luamVjdGlvbicsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjb3B5Om1hcmtzJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nLFxyXG4gICAgICAnbG9va3VwOndvcmQnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcycsXHJcblxyXG4gICAgICAvLyBAUkVTVE9SRVJcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJyxcclxuICBcdFx0J2ZhaWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLFxyXG4gICAgICAnY2FuY2VsZWQ6c2F2ZS1hZnRlci1jYW5jZWxlZC1yZXN0b3JhdGlvbidcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=