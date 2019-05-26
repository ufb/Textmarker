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
        this.collectNodes().reduceToOneRange().update().adjust().update().retrieveText();
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

      nodes = this.trimSelection(nodes);
      this.nodes = this.options.programmatically ? this.reduceToSelectable(nodes) : nodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeVNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJyZW5hbWVFbnRyeSIsImVudHJ5Iiwib2xkTmFtZSIsInNldFN5bmNGb3JFbnRyeSIsInN5bmNlZCIsInJlbW92ZUVudHJ5IiwiZGVsZXRlZEVudHJ5IiwiaGFzT3duUHJvcGVydHkiLCJhZGRFbnRyaWVzIiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInNldFBhZ2VQYXJhbXMiLCJ3aW5kb3ciLCJwYXJlbnQiLCJVUkwiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJlbWl0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJib29rbWFyayIsImdldEVsZW1lbnRCeUlkIiwib25FbnRyaWVzRm91bmQiLCJ1cGRhdGVFbnRyeVN0b3JhZ2UiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwidXBkYXRlTmFtZVN0b3JhZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJmaXJzdEVudHJ5IiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvU3RyaW5nIiwiX0JPT0tNQVJLIiwibWFyayIsImFuY2hvciIsIndyYXBwZXJzIiwidyIsImtleURhdGEiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYWN0aXZhdGUiLCJvbiIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGlnaGxpZ2h0IiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0Q29udGVudCIsInNpbGVudCIsImltbXV0YWJsZSIsInNhdmUiLCJyZXF1ZXN0IiwiZ3JhbnRlZCIsInN1YiIsImkxOG4iLCJnZXRNZXNzYWdlIiwicHJvbXB0IiwicmV0cmlldmVFbnRyeSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJjb3B5IiwiZmluZE1hcmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0cmltIiwic3RvcmUiLCJvcmRlciIsIm9yZGVyTWFya3NWaXN1YWxseSIsInJlY3JlYXRlIiwiX1NFTEVDVElPTiIsInByb2dyYW1tYXRpY2FsbHkiLCJvbkZpbmlzaGVkUmVzdG9yYXRpb24iLCJzdWJzdHJpbmciLCJfR0xPQkFMX1NFVFRJTkdTIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJnb3RvTWFyayIsInNvcnRCeUlkIiwic2Nyb2xsVG9Cb29rbWFyayIsImFkZE5vdGUiLCJzYXZlTm90ZSIsImFyZWFfaGlzdG9yeSIsIm1hcmtFbGVtZW50cyIsInBvcyIsImluZGljYXRlTWFyayIsImdvdG9OZXh0TWFyayIsImRpciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0bSIsInRtcyIsInNldFRpbWVvdXQiLCJzZXQiLCJyZW1vdmVCb29rbWFyayIsIm1hcmsxIiwibWFyazIiLCJtMSIsIm0yIiwiYmIxIiwiYmIyIiwidG9wMSIsInRvcDIiLCJtYXAiLCJ3cmFwcGVyczEiLCJ3MSIsImlkMSIsIndyYXBwZXJzMiIsImlkMiIsIncyIiwib25NYXJrZXJLZXkiLCJvbkhvdGtleSIsImNvbGxlY3RNYXJrcyIsImxhc3QiLCJEYXRlIiwiZ2V0VGltZSIsImJvb2ttYXJrZWQiLCJ0aXRsZSIsImNvdW50IiwiZmlyc3QiLCJrRCIsIm9uSGFzaENoYW5nZSIsImNvbG9yIiwiQk9EWSIsIkRPTSIsImNsaWNrIiwia2V5dXAiLCJtb3VzZWRvd24iLCJ0b3VjaHN0YXJ0IiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJtYXJrQ2xpY2tIYW5kbGVyIiwidmlzaWJsZSIsInJlY2VudGx5VXBkYXRlZCIsInNldHRpbmdzTW9kZSIsInQiLCJzaXplIiwiaCIsImRyYWdEWCIsImRyYWdEWSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJhZGp1c3ROb3RlRGF0YU9iamVjdCIsImNyZWF0ZU5vdGVFbGVtZW50IiwiYWRkTGlzdGVuZXJzIiwiYWRkTWFya0xpc3RlbmVycyIsIm5vdGVEYXRhIiwiaGVhZGVyIiwiYWN0aW9ucyIsImRlbCIsImdlYXIiLCJwYWxldHRlIiwidGV4dEVsZW1lbnQiLCJkZWxUZXh0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluVGV4dCIsImdlYXJUZXh0IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJhdHRlbXB0VXBkYXRlIiwiX2RlbGV0ZSIsImhpZGUiLCJyZW1vdmVNYXJrTGlzdGVuZXJzIiwiZm9yY2UiLCJpbm5lcldpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImdldFBvc2l0aW9uIiwib2Zmc2V0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25uZWN0TXV0YXRpb25PYnNlcnZlciIsImJyaW5nVXBGcm9udCIsInpJbmRleCIsImRpc2Nvbm5lY3QiLCJ0b2dnbGUiLCJ0b2dnbGVQYWxldHRlIiwiY2hhbmdlQ29sb3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZXh0YXJlYSIsImNvbmZpZyIsImF0dHJpYnV0ZUZpbHRlciIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsInNhdmVTaXplIiwib2JzZXJ2ZSIsInJlY3QiLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm9uRHJhZ1N0YXJ0IiwicGFnZVgiLCJwYWdlWSIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsIm11dGF0aW9uc0xpc3QiLCJ3aWR0aCIsIm5vdGVzIiwiZHJhZ0hhbmRsZXIiLCJkcmFnU3RvcEhhbmRsZXIiLCJ1cGRhdGVUcmFuc3AiLCJfTk9URSIsInJlc3RvcmUiLCJhZGRBbmRTaG93IiwicmVtb3ZlTm90ZVN0b3JhZ2UiLCJpc0VtcHR5IiwicmVtb3ZlTm90ZSIsInRvZ2dsZUFsbCIsIm1ldGgiLCJjb25kaXRpb24iLCJib2R5Q2xhc3NlcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsInN0YXJ0RHJhZ2dpbmdOb3RlIiwiZW1pdERyYWdFdmVudCIsInN0b3BEcmFnZ2luZ05vdGUiLCJkb2MiLCJzZW5kTm90ZXNTdGF0ZSIsImF1dG9QYXVzZSIsImtleWRvd24iLCJzZWxlY3Rpb25jaGFuZ2UiLCJzaGlmdFNlbnNpdGl2ZUtleXMiLCJrZXlDb2RlTWFwIiwiaXNFZGl0YWJsZSIsInRhZ05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJkZWxlZ2F0ZSIsInRvTG93ZXJDYXNlIiwia2V5Q29kZSIsIm1vZEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJhcnJvd0tleXMiLCJsb2NrZWRBY3Rpb25zIiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJvcmlnS2V5IiwiaXNNYXJrZXJLZXkiLCJpc0N1c3RvbU1hcmtlcktleSIsInNldHRpbmciLCJzaG9ydGN1dCIsInMxIiwiczIiLCJyZXN0b3JlZCIsImZhaWxlZCIsImZhaWx1cmVSZXBvcnQiLCJJbW11dFJlc3RvcmVyIiwiUmVzdG9yZXIiLCJyZXRyeSIsIm9uRmFpbHVyZSIsInJlcG9ydCIsImdldFJlcG9ydCIsIm1zZyIsInJlYXNvbiIsIlJlc3RvcmVyQmFzZSIsImFyZWEiLCJwcm9jIiwiY2IiLCJyZWMiLCJleHBpcmUiLCJsbCIsInRlbXAiLCJxdWV1ZSIsImNhY2hlIiwicGhhc2UiLCJzZWxlY3Rpb25UcmlhbCIsImNodW5rRHVyYXRpb24iLCJfdGltZXIiLCJvb20iLCJpbml0Iiwibm93IiwicG9zdHBvbmVkIiwiY29udmVydERlc2NyaXB0aW9uIiwiY3JlYXRlVGVtcE9iamVjdCIsImNvbnZlcnRlZENvbmRzIiwiZmlyc3ROb2RlTmFtZSIsImZpcnN0UGFyZW50Tm9kZU5hbWUiLCJmaXJzdFRleHROb2RlUG9zaXRpb24iLCJmaXJzdE5vZGVQb3NpdGlvbiIsImZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uIiwiZmlyc3RHcmFtcGFOb2RlUG9zaXRpb24iLCJ0cmltbWVkVGV4dCIsInNxdWVlemVkVGV4dCIsInNxdWVlemUiLCJ0ZXh0TGVuZ3RoIiwidHJpbW1lZFRleHRMZW5ndGgiLCJzcXVlZXplZFRleHRMZW5ndGgiLCJwb3NzaWJsZVBvc2l0aW9ucyIsInBvc3NpYmxlRW5kUG9zaXRpb25zIiwicG9zc2libGVTdGFydE5vZGVzIiwicG9zc2libGVFbmRzIiwicG9zc2libGVGb2N1c09mZnNldHMiLCJzb3J0UXVldWVCeUlkIiwic2V0Qm9keVNlbGVjdGlvbiIsImdldFRleHRQb3NpdGlvbnMiLCJwb3N0cG9uZU92ZXJsYXBwaW5ncyIsImZpbmRQb3NzaWJsZUV4dHJlbWEiLCJydWxlT3V0TXVsdGlwbGVzIiwicmVzdG9yZVJhbmdlcyIsInRpbWVyIiwicmVzIiwidHJpbW1lZFNlbGVjdGlvblRleHQiLCJhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwiZW5kUG9zaXRpb25zIiwibWFya1RlbXAiLCJzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyIsIm1heFBvc2l0aW9uIiwicG9zaXRpb25zIiwicG9zMSIsInBvczIiLCJwb3N0cG9uZSIsImN1dE91dEZvciIsImFscmVhZHlJbmNsdWRlZCIsImJvZHlUZXh0Tm9kZXMiLCJzYXRpc2ZpZWQiLCJjaGFycyIsIm5leHRTdGFydEZvdW5kIiwiZW5kaW5nc0luVGhpc05vZGUiLCJub2Rlc1RleHQiLCJub2Rlc1RleHRMZW5ndGgiLCJkaWZmIiwiZiIsInEiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0Iiwic3RhcnRGb3VuZEZvciIsImhhc0VuZGluZ3NJblRoaXNOb2RlIiwiZW5kRm91bmRGb3IiLCJzYXRpc2ZpZXNEZXNjcmlwdGlvbiIsImZpbmRGb2N1c09mZnNldCIsImdyYW5kZ3JhbmRncmFtcGEiLCJtYXRjaGVzIiwic3RhcnROb2RlIiwic3RhcnROb2RlUG9zaXRpb24iLCJzZXRNYXRjaGluZ0VuZCIsImVuZE5vZGUiLCJlbmROb2RlUG9zaXRpb24iLCJmb2N1c09mZnNldCIsImRlc2NyaXB0aW9uIiwicmVsZXZhbnROb2RlVGV4dCIsIm1hcmtUZXh0IiwidGV4dHNNYXRjaCIsIm5vZGVUZXh0IiwiY291bnRlciIsInRlc3QiLCJjcmVhdGVSYW5nZSIsInJlY29sbGVjdE5vZGVzIiwic2xpY2UiLCJjb250ZXh0IiwiY3VycmVudENoaWxkIiwicHJvY2Vzc0luQ2h1bmtzIiwicmVzdG9yZVJhbmdlIiwiZ2V0Tm9kZSIsInRleHROb2RlUG9zaXRpb24iLCJyYW5nZUNvdW50IiwiZGVmaW5lZCIsInJlZHVjZVRvT25lUmFuZ2UiLCJyZXRyaWV2ZVRleHQiLCJhZGp1c3QiLCJzZWxlY3RBbGxDaGlsZHJlbiIsInByb3BzIiwiaXNTaW1wbGUiLCJmb2N1cyIsImlzQmFja3dhcmRzIiwicmV2ZXJzZSIsImZpcnN0VGV4dE5vZGUiLCJsYXN0VGV4dE5vZGUiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsIndob2xlRG9jdW1lbnQiLCJnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lciIsImZpbHRlciIsImlzU2VsZWN0YWJsZSIsImlzQmxhbmsiLCJoYXNOb3JtYWxQYXJlbnQiLCJjb250YWluc05vZGUiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJ0cmltU2VsZWN0aW9uIiwicmVkdWNlVG9TZWxlY3RhYmxlIiwiY29sbGVjdFBhcmVudE5vZGVzIiwibWFya1dyYXBwZXJzIiwibmV3U2VnbWVudCIsInByZXYiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJ1bnNoaWZ0IiwiYW5jaG9yT2Zmc2V0Iiwic3Vic3RyIiwic2VsIiwicmciLCJzZWxlY3ROb2RlIiwicGFyZW50cyIsIm5vZGVUZXh0cyIsImpvaW4iLCJub2RlMSIsIm5vZGUyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJyYW5nZTAiLCJsYXN0UmFuZ2UiLCJ0YWciLCJ0b1VwcGVyQ2FzZSIsImlzQ2hpbGRPZiIsInNlYXJjaCIsImF0dGFjaGVkIiwiYnV0dG9ucyIsInNob3duIiwiY3JlYXRlQnV0dG9ucyIsInVwZGF0ZVN0YXRlIiwic2hvdWxkQXR0YWNoIiwicmVuZGVyIiwiYnRuIiwiYiIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInVwZGF0ZVBvc2l0aW9uIiwidG11aSIsIm5vdGVzQnV0dG9uIiwiYm9va21hcmtCdXR0b24iLCJ0eXBlIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJPTkVPRkYiLCJ2ZXJzaW9uIiwicnVudGltZSIsImdldE1hbmlmZXN0IiwieiIsInkiLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiZG93bmxvYWQiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJhdXRvY3MiLCJvdmVyd3JpdGUiLCJmYWlsdXJlTm90ZSIsInN1Y2Nlc3NOb3RlIiwicGJtTm90ZSIsImNoYW5nZWROb3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsImN1c3RvbVNlYXJjaCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsImxpbmtzIiwidGhlbWVzIiwidGhlbWUiLCJwYWdlbm90ZXMiLCJzeW5jIiwiTUFYX0xPR19FTlRSSUVTIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInZhbCIsInByb3AiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJhcmdzIiwidG9waWMiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJsYXN0QXJnIiwidGFiIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX3BhZ2Vub3RlcyIsImxvY2FsIiwic2V0QXJlYXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNB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QWhCLENBQXFCaHJCLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBMHdCLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDN0gsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPNEgsWUFBWSxDQUFDNUgsT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUIxcUIsZSIsImZpbGUiOiJjb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdvblRvZ2dsZWRTeW5jJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmhhc2hvcHQtc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYyc6ICdzZXRTeW5jRm9yRW50cnknLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJzogJ3JlbmFtZUVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdyZXN1bWUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZW52OiAnaW5qZWN0aW9uJyxcclxuXHJcbiAgdXJsOiAnJyxcclxuICBoYXNobGVzc1VSTDogJycsXHJcblxyXG4gIGlmcmFtZTogZmFsc2UsXHJcbiAgbmFtZTogdW5kZWZpbmVkLFxyXG4gIGlzTmV3OiB0cnVlLFxyXG4gIC8vZW50cnk6IG51bGwsXHJcbiAgZW50cmllczoge30sXHJcbiAgbG9ja2VkOiBmYWxzZSxcclxuICBoYXNoU2Vuc2l0aXZlOiBmYWxzZSxcclxuICB0bWlkOiAnJyxcclxuICBub3RlQ29sb3I6ICd5ZWxsb3cnLFxyXG4gIGltbXV0OiBmYWxzZSxcclxuICByZWRlc2NyaWJpbmc6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XHJcbiAgfSxcclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5lbnRyaWVzID0ge307XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnRtaWQgPSAnJztcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVN0YXR1cygpIHtcclxuICAgIGlmICghdGhpcy5pc05ldyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10bS1pZF0nKSkgcmV0dXJuOy8vc2hvdyBub3RpZmljYXRpb25cclxuXHJcbiAgICB0aGlzLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgaGlzdG9yeVNldHRpbmdzID0gc2V0dGluZ3MgPyBzZXR0aW5ncy5oaXN0b3J5IDogbnVsbDtcclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gaGlzdG9yeVNldHRpbmdzLm5hbWluZyA9PT0gJ21hcmsnO1xyXG4gICAgICAgIHRoaXMuaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnlTZXR0aW5ncy5pZ25vcmVIYXNoID09PSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVuYW1lRW50cnkoZW50cnksIG9sZE5hbWUpIHtcclxuICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5uYW1lID09PSBvbGROYW1lICYmICF0aGlzLmxvY2tlZCkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgICBpZiAodGhpcy5lbnRyaWVzW29sZE5hbWVdKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNldFN5bmNGb3JFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCAmJiB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0pIHtcclxuICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdLnN5bmNlZCA9IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW1vdmVFbnRyeShkZWxldGVkRW50cnkpIHtcclxuICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgaWYgKGVudHJpZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgbmFtZSA9PT0gZGVsZXRlZEVudHJ5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgYWRkRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkKSB0aGlzLm5hbWUgPSBlbnRyaWVzWzBdLm5hbWU7XHJcbiAgICBjb25zdCBlID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBlOyBpKyspIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcclxuICAgIHRoaXMuaW1tdXQgPSAhIWVudHJpZXNbMF0uaW1tdXQ7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9ibWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ibWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3Rlb25jbGljaygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RtdWlwb3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2ltbXV0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5cclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZSdcclxuaW1wb3J0ICcuL21vZHVsZXMvY29udGV4dG1lbnUnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbm90ZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RtdWknXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlci1wb3B1cCdcclxuaW1wb3J0ICcuL21vZHVsZXMvYXV0by1tYXJrZXInXHJcblxyXG5pbXBvcnQgJy4vbWFpbidcclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0IF9SRVNUT1JFUiBmcm9tICcuL21vZHVsZXMvcmVzdG9yZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5U3RvcmFnZScsXHJcbiAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAnc2V0UGFnZVBhcmFtcycsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kUGFnZVN0YXRlJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG5cclxuICAgICAgLy8gQFJFU1RPUkVSXHJcbiAgICAgICdlbnRyaWVzOmZvdW5kJzogJ29uRW50cmllc0ZvdW5kJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJldHJ5QWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnNldFBhZ2VQYXJhbXMoKTtcclxuICB9LFxyXG5cclxuICBzZXRQYWdlUGFyYW1zKCkge1xyXG4gICAgX1NUT1JFLmlmcmFtZSA9IHdpbmRvdyAhPT0gd2luZG93LnBhcmVudC53aW5kb3c7XHJcbiAgICBfU1RPUkUudXJsID0gd2luZG93LmRvY3VtZW50LlVSTDtcclxuICAgIF9TVE9SRS5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyhfU1RPUkUudXJsKTtcclxuICB9LFxyXG4gIG9uU2F2ZWRFbnRyeShlbnRyeSkge1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFlbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKGVudHJ5LnVybCA9PT0gdXJsKSB7XHJcbiAgICAgIF9TVE9SRS5hZGRFbnRyaWVzKFtlbnRyeV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIHRoaXMucmV0cnlBY3RpdmUgPSB0cnVlO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgc2VuZFBhZ2VTdGF0ZShpbmZvKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3BhZ2Utc3RhdGUnLCB7XHJcbiAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgYm9va21hcms6ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJyksXHJcbiAgICAgIHJldHJ5QWN0aXZlOiB0aGlzLnJldHJ5QWN0aXZlXHJcbiAgICB9LCBpbmZvKTtcclxuICB9LFxyXG5cclxuICAvLyBAUkVTVE9SRVJcclxuICBvbkVudHJpZXNGb3VuZChpbmZvKSB7XHJcbiAgICBfUkVTVE9SRVIoKTtcclxuICAgIHRoaXMudXBkYXRlRW50cnlTdG9yYWdlKGluZm8uZW50cmllcyk7XHJcbiAgICBpZiAoaW5mby5yZWNlbnRseU9wZW5lZEVudHJ5KSB0aGlzLnVwZGF0ZU5hbWVTdG9yYWdlKGluZm8uZW50cmllcywgaW5mby5yZWNlbnRseU9wZW5lZEVudHJ5KTtcclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTptYXJrcycsIGluZm8uZW50cmllcyk7XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeVN0b3JhZ2UoZW50cmllcykge1xyXG4gICAgZW50cmllcyA9IEFycmF5LmlzQXJyYXkoZW50cmllcykgPyBlbnRyaWVzIDogW2VudHJpZXNdO1xyXG4gICAgX1NUT1JFLmFkZEVudHJpZXMoZW50cmllcyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NldDplbnRyaWVzJywgZW50cmllcyk7XHJcbiAgfSxcclxuICB1cGRhdGVOYW1lU3RvcmFnZShlbnRyaWVzLCByZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IF9TVE9SRS5oYXNobGVzc1VSTCA6IF9TVE9SRS51cmw7XHJcblxyXG4gICAgaWYgKHJlY2VudGx5T3BlbmVkRW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLm5hbWUgPSByZWNlbnRseU9wZW5lZEVudHJ5Lm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInOiAnc2V0TWFya2VyJ1xyXG4gICAgfVxyXG5cdH0sXHJcblxyXG4gIGhhbmRsZXI6IG51bGwsXHJcbiAgbWFya2VyOiAnbScsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRNYXJrZXIoa2V5KSB7XHJcbiAgICB0aGlzLm1hcmtlciA9IGtleTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkICYmICF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghc2VsZWN0ZWQgJiYgdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdGFydExpc3RlbmluZygpIHtcclxuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZXVwLmJpbmQodGhpcyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Nb3VzZXVwKCkge1xyXG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWVuZCcsIHRoaXMubWFya2VyKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0JPT0tNQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5hbmNob3IgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0KG1hcmspIHtcclxuICAgIG1hcmsgPSBtYXJrIHx8IHRoaXMubWFyaztcclxuXHJcbiAgICBsZXQgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcbiAgICAgICAgYW5jaG9yID0gd3JhcHBlcnNbMF07XHJcblxyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIGFuY2hvci5pZCA9ICd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcic7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG5cclxuICAgIHRoaXMubWFyayA9IG1hcms7XHJcbiAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgbGV0IG1hcmsgPSB0aGlzLm1hcmssXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3IsXHJcbiAgICAgICAgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGg7XHJcblxyXG4gICAgYW5jaG9yLmlkID0gJyc7XHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG4gIHNjcm9sbEludG9WaWV3KGJtKSB7XHJcbiAgICBpZiAoYm0gfHwgKGJtID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpKSlcclxuICAgICAgYm0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdhY3RpdmF0ZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2ZTogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcclxuICB9LFxyXG5cclxuICBhY3RpdmF0ZShvbikge1xyXG4gICAgaWYgKG9uICYmICF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlcigpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghb24gJiYgdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlZ2lzdGVySGFuZGxlcigpIHtcclxuICAgIHRoaXMuYWRkTGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKSB7XHJcbiAgICAgICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIF9TVE9SRS50bWlkID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0sIHdpbmRvdy5kb2N1bWVudCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IobWFya2VyLCBrZXksIHByZVNldHRpbmdzLCBpbW11dCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiwgZGVmYXVsdHM7XHJcblxyXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XHJcblx0XHRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG1hcmtlci5zZWxlY3Rpb247XHJcbiAgICB0aGlzLmltbXV0ID0gX1NUT1JFLnJlZGVzY3JpYmluZyA/IG1hcmtlci5pc0ltbXV0IDogaW1tdXQ7XHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgYm9va21hcms6IGZhbHNlLFxyXG4gICAgICBjb25kczogbnVsbCxcclxuICAgICAgdGV4dDogc2VsZWN0aW9uLnRleHQsXHJcbiAgICAgIG5vdGU6IG51bGxcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBkIGluIGRlZmF1bHRzKSB7XHJcbiAgICAgIGlmICghcHJlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoZCkpIHtcclxuICAgICAgICBwcmVTZXR0aW5nc1tkXSA9IGRlZmF1bHRzW2RdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVTZXR0aW5ncy5pZCA9IHByZVNldHRpbmdzLmlkIHx8ICsrbWFya2VyLmlkY291bnQ7XHJcblx0XHR0aGlzLmlkID0gcHJlU2V0dGluZ3MuaWQ7XHJcblx0XHR0aGlzLnNpbXBsZSA9IHNlbGVjdGlvbi5zaW1wbGU7XHJcblxyXG5cdFx0bGV0IHJhbmdlID0gdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5yYW5nZTtcclxuXHJcblx0XHR0aGlzLnN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQ7XHJcblx0XHR0aGlzLmVuZE9mZnNldCA9IHJhbmdlLmVuZE9mZnNldDtcclxuXHJcblx0XHR0aGlzLndyYXBwZXJzID0gbnVsbDtcclxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YSA9IHtcclxuXHRcdFx0aWQ6IHByZVNldHRpbmdzLmlkLFxyXG5cdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0c3R5bGU6IHByZVNldHRpbmdzLnN0eWxlLFxyXG5cdFx0XHRjb25kczogcHJlU2V0dGluZ3MuY29uZHMsXHJcblx0XHRcdHRleHQ6IHByZVNldHRpbmdzLnRleHQsXHJcblx0XHRcdGJvb2ttYXJrOiBwcmVTZXR0aW5ncy5ib29rbWFyayxcclxuICAgICAgbm90ZTogcHJlU2V0dGluZ3Mubm90ZSxcclxuICAgICAgc3luY2VkOiBwcmVTZXR0aW5ncy5zeW5jZWRcclxuXHRcdH07XHJcblxyXG4gICAgaWYgKHRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHtcclxuICAgICAgdGhpcy5kZXNjcmliZV9pbW11dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Y3JlYXRlKHJhbmdlKSB7XHJcbiAgICByYW5nZSA9IHJhbmdlIHx8IHRoaXMucmFuZ2U7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgc3R5bGUgPSB0aGlzLmtleURhdGEuc3R5bGUsXHJcbiAgICAgICAgbm9kZXMgPSBzZWxlY3Rpb24ubm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzIHx8IHRoaXMuY3JlYXRlV3JhcHBlcnMoc3R5bGUsIG4pLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIGxhc3RJbmRleCA9IG4gLSAxLFxyXG4gICAgICAgIG5vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICAgIGlmICghaSkgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgdGhpcy5zdGFydE9mZnNldCk7XHJcblxyXG4gICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KVxyXG4gICAgICAgIHJhbmdlLnNldEVuZChub2RlLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgICByYW5nZS5zdXJyb3VuZENvbnRlbnRzKHdyYXBwZXJzW2ldKTtcclxuICAgICAgdGhpcy5jb250YWluZXJzLnB1c2god3JhcHBlcnNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgICBub2RlLnBhcmVudE5vZGUubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbihsYXN0SW5kZXgpO1xyXG5cclxuICAgIGlmICh0aGlzLmtleURhdGEuYm9va21hcmspIHRoaXMubWFya2VyLnNldEJvb2ttYXJrKHRoaXMsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHRoaXMuZGVzY3JpYmUoKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbiAgcmVnaXN0ZXJDbGlja0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIGZvciAobGV0IHdyYXBwZXIgb2Ygd3JhcHBlcnMpIHtcclxuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya2VyLnByb3h5KHRoaXMsIHRoaXMub25DbGljayksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DbGljayhlKSB7XHJcbiAgICBsZXQgZXZlbnQ7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgZXZlbnQgPSAnY2xpY2tlZDptYXJrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZSArICdfMCc7XHJcbiAgICAgIGV2ZW50ID0gJ2FjdGl2YXRlZDptYXJrJztcclxuICAgIH1cclxuICAgIHRoaXMubWFya2VyLmVtaXQoZXZlbnQsIHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIGJvb2ttYXJrOiAhIXRoaXMua2V5RGF0YS5ib29rbWFyayxcclxuICAgICAgbm90ZTogISF0aGlzLmtleURhdGEubm90ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlZmluZVBvc2l0aW9uKG4sIGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgIGxldCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBuID0gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IHdyYXBwZXJzLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBmaXJzdFdyYXBwZXIgPSB3cmFwcGVyc1swXTtcclxuICAgIGNvbnN0IGxhc3RXcmFwcGVyID0gd3JhcHBlcnNbbl07XHJcbiAgICBjb25zdCBmaXJzdFBhcmVudCA9IGZpcnN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgbGFzdFBhcmVudCA9IGxhc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgYW5jaG9yUHJldiwgZm9jdXNQcmV2O1xyXG5cclxuICAgIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGZpcnN0UGFyZW50LCBmaXJzdFdyYXBwZXIsIHRydWUpIC0gMTtcclxuICAgIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQobGFzdFBhcmVudCwgbGFzdFdyYXBwZXIsIHRydWUpO1xyXG5cclxuICAgIGFuY2hvclByZXYgPSBmaXJzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgZm9jdXNQcmV2ID0gbGFzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgIGlmIChhbmNob3JQcmV2ICYmIGFuY2hvclByZXYubm9kZVR5cGUgPT09IDEpIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uICs9IDE7XHJcbiAgICBpZiAoIWZvY3VzUHJldiB8fCBmb2N1c1ByZXYubm9kZVR5cGUgPT09IDMgfHwgZmlyc3RQYXJlbnQgPT09IGxhc3RQYXJlbnQpIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gLT0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IDA7XHJcbiAgICBpZiAodGhpcy5mb2N1c05vZGVQb3NpdGlvbiA8IDApIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSAwO1xyXG5cclxuICAgIGlmIChpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSBhbmNob3JQcmV2ICYmIGFuY2hvclByZXYuZGF0YSA/IGFuY2hvclByZXYuZGF0YS5sZW5ndGggOiAwO1xyXG4gICAgICB0aGlzLmVuZE9mZnNldCA9IHRoaXMuc2ltcGxlID8gdGhpcy5zdGFydE9mZnNldCArIHRoaXMua2V5RGF0YS50ZXh0Lmxlbmd0aCA6IHRoaXMuZW5kT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24odW5kZWZpbmVkLCB0cnVlKVxyXG4gICAgICAgIC5kZXNjcmliZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHR1bmRvKCkge1xyXG5cdFx0bGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcblx0XHRcdFx0d3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzLFxyXG5cdFx0XHRcdHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcblx0XHRcdFx0Y29udGFpbmVyLCB3cmFwcGVyO1xyXG5cclxuXHRcdHdoaWxlICh3LS0pIHtcclxuXHRcdFx0Y29udGFpbmVyID0gY29udGFpbmVyc1t3XTtcclxuXHRcdFx0d3JhcHBlciA9IHdyYXBwZXJzW3ddO1xyXG5cdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XHJcblx0XHRcdGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRyZWRvKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY29udGFpbmVyc1swXS5jaGlsZE5vZGVzW3RoaXMuYW5jaG9yTm9kZVBvc2l0aW9uXSwgdGhpcy5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoY29udGFpbmVyc1tjb250YWluZXJzLmxlbmd0aCAtIDFdLmNoaWxkTm9kZXNbdGhpcy5mb2N1c05vZGVQb3NpdGlvbl0sIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uLmNvbGxlY3ROb2RlcygpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSgpO1xyXG5cdH1cclxuXHR3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGluY2x1ZGluZ1RleHROb2Rlcykge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHRsZXQgY2hpbGRyZW4gPSBpbmNsdWRpbmdUZXh0Tm9kZXMgfHwgY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdFx0XHRjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0XHRcdGkgPSAwO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblx0Y3JlYXRlV3JhcHBlcnMoc3R5bGUsIG51bWJlcikge1xyXG5cdFx0bGV0IHdyYXBwZXJzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgd3JhcHBlcjtcclxuXHJcblx0XHRmb3IgKCA7IGkgPCBudW1iZXI7IGkrKykge1xyXG5cdFx0XHR3cmFwcGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZS5yZXBsYWNlKC87L2csICchaW1wb3J0YW50OycpKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnLCB0aGlzLmlkICsgJ18nICsgaSk7XHJcbiAgICAgIC8vd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NvbnRleHRtZW51JywgJ3RleHRtYXJrZXItY3RtJyk7XHJcblx0XHRcdHdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gd3JhcHBlcnM7XHJcblx0fVxyXG4gIGRlc2NyaWJlKCkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcblx0XHRjb25zdCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xyXG5cdFx0Y29uc3QgZW5kID0gcmFuZ2UuZW5kQ29udGFpbmVyO1xyXG5cdFx0Y29uc3Qgc2luZ2xlTm9kZSA9IHRoaXMuc2ltcGxlO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy53cmFwcGVyc1swXS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgcGFyZW50SXNUTSA9IHBhcmVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuXHRcdGNvbnN0IGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgZ3JhbmRncmFtcGEgPSBncmFtcGEucGFyZW50Tm9kZSB8fCAwO1xyXG5cdFx0Y29uc3QgZlROUCA9IHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuXHRcdFx0bzogdGhpcy5zdGFydE9mZnNldCxcclxuXHRcdFx0bjE6IHBhcmVudElzVE0gPyAnVE0nIDogcGFyZW50Lm5vZGVOYW1lLFxyXG5cdFx0XHRwMTogZlROUCxcclxuXHRcdFx0bjI6IGdyYW1wYS5ub2RlTmFtZSxcclxuXHRcdFx0cDI6IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCksXHJcblx0XHRcdHAzOiBncmFuZGdyYW1wYSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYSwgZ3JhbXBhKSA6IHVuZGVmaW5lZCxcclxuXHRcdFx0cDQ6IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEucGFyZW50Tm9kZSwgZ3JhbmRncmFtcGEpIDogdW5kZWZpbmVkXHJcblx0XHR9O1xyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuXHR9XHJcbiAgZGVzY3JpYmVfaW1tdXQoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBsZXQgc3RhcnQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBlbmQgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChzdGFydCAhPT0gYm9keSkge1xyXG4gICAgICBzdGFydFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKHN0YXJ0LnBhcmVudE5vZGUsIHN0YXJ0KSk7XHJcbiAgICAgIHN0YXJ0ID0gc3RhcnQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHdoaWxlIChlbmQgIT09IGJvZHkpIHtcclxuICAgICAgZW5kUG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoZW5kLnBhcmVudE5vZGUsIGVuZCkpO1xyXG4gICAgICBlbmQgPSBlbmQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgIHA6IHN0YXJ0UG9zaXRpb25cclxuICAgICAgfSxcclxuICAgICAgZToge1xyXG4gICAgICAgIG86IHRoaXMuZW5kT2Zmc2V0LFxyXG4gICAgICAgIHA6IGVuZFBvc2l0aW9uXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgfVxyXG5cdH0sXHJcblxyXG4gIGhhbmRsZXI6IG51bGwsXHJcbiAgYXBwZW5kZWQ6IGZhbHNlLFxyXG4gIGhlaWdodDogMCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAncG9wdXAnO1xyXG4gICAgICB0aGlzLm1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cCcpO1xyXG4gICAgY29uc3QgYmdDb2xvclJlZ0V4cCA9IC9iYWNrZ3JvdW5kLWNvbG9yOigjW2EtZjAtOV17Nn0pLztcclxuICAgIGxldCBiZ0NvbG9yLCBjb2xvckJ0bjtcclxuICAgIGZvciAobGV0IG0gaW4gdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgIGJnQ29sb3IgPSB0aGlzLm1hcmtlcnNbbV0uc3R5bGUubWF0Y2goYmdDb2xvclJlZ0V4cCk7XHJcbiAgICAgIGlmIChiZ0NvbG9yKSB7XHJcbiAgICAgICAgY29sb3JCdG4gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cGNvbG9yJyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JCdG4pO1xyXG4gICAgICAgIGNvbG9yQnRuLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yLnBvcCgpO1xyXG4gICAgICAgIGNvbG9yQnRuLmlkID0gJ3RtcG9wdXBjb2xvci0tJyArIG07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93KCkge1xyXG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBwb3B1cC5zdHlsZTtcclxuICAgIGxldCBwb3B1cEhlaWdodDtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNlZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0aW9uUG9zaXRpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IHNlbGVjdGlvblBvc2l0aW9uLnRvcCAtIHNlbGVjdGlvblBvc2l0aW9uLmhlaWdodCArIHdpbmRvdy5zY3JvbGxZICsgJ3B4JztcclxuICAgICAgc3R5bGUubGVmdCA9IHNlbGVjdGlvblBvc2l0aW9uLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCArICdweCc7XHJcblxyXG4gICAgICBwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIHN0eWxlLnRvcCA9IHBhcnNlSW50KHN0eWxlLnRvcCkgLSBwb3B1cEhlaWdodCArICdweCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgocG9wdXBIZWlnaHQgPSBwb3B1cC5vZmZzZXRIZWlnaHQpICE9PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApICsgcG9wdXBIZWlnaHQgLSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhlaWdodCA9IHBvcHVwSGVpZ2h0O1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoIXNlbGVjdGVkKSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Nb3VzZWRvd24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdUTVBPUFVQQ09MT1InKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwb3B1cC1tYXJrZXInLCBlbC5pZC5zcGxpdCgnLS0nKS5wb3AoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUksgZnJvbSAnLi9tYXJrLWl0ZW0nXHJcbmltcG9ydCBfQk9PS01BUksgZnJvbSAnLi9ib29rbWFyaydcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcblx0XHRFTlY6IHtcclxuXHRcdFx0J3NldDplbnRyaWVzJzogJ3VwZGF0ZUlEJyxcclxuXHRcdFx0J3ByZXNzZWQ6bWFya2VyLWtleSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdwcmVzc2VkOmhvdGtleSc6ICdvbkhvdGtleScsXHJcbiAgICAgICdjbGlja2VkOnBvcHVwLW1hcmtlcic6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdzZWxlY3Rpb24tZW5kJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3Jlc3RvcmVkOnJhbmdlJzogJ3JlY3JlYXRlJyxcclxuICAgICAgJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2N0eDpiJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgJ2N0eDotYic6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICdjdHg6ZCc6ICdyZW1vdmUnLFxyXG4gICAgICAnY3R4Om0nOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnY3R4Om4nOiAnYWRkTm90ZScsXHJcbiAgICAgICdjdHg6Yyc6ICdjb3B5JyxcclxuICAgICAgJ3VwZGF0ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcbiAgICAgICdyZW1vdmVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnY2hhbmdlZDpub3RlLWNvbG9yJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J2NoYW5nZWQ6bm90ZS1wb3MnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAnY2hhbmdlZDpub3RlLXNpemUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnc2lkZWJhcjpoaWdobGlnaHQnOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JzogJ3JlbW92ZScsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJzogJ3JlbW92ZUJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnOiAnaW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnOiAnc2F2ZScsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJzogJ3Jlc3VtZScsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nOiAndW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nOiAncmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknOiAnY29weScsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyayc6ICdzY3JvbGxUb0Jvb2ttYXJrJyxcclxuICAgICAgJ3Njcm9sbC10by1ib29rbWFyayc6ICdzY3JvbGxUb0Jvb2ttYXJrJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ29uSGFzaENoYW5nZSdcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNlbGVjdGlvbjogbnVsbCxcclxuXHRkb25lOiBbXSxcclxuXHR1bmRvbmU6IFtdLFxyXG5cdHZpc3VhbGx5T3JkZXJlZE1hcmtzOiBbXSxcclxuXHR2aXN1YWxseU9yZGVyZWRNYXJrSURzOiBbXSxcclxuICBib29rbWFyazogbnVsbCxcclxuICByZW1vdmVkQm9va21hcms6IG51bGwsXHJcblx0aWRjb3VudDogMCxcclxuXHRtYXJrU2Nyb2xsUG9zOiAtMSxcclxuXHJcbiAgdXBkYXRlSUQoZW50cmllcykge1xyXG4gICAgY29uc3QgbCA9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgIGNvbnN0IGlkcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGw7IGkrKykge1xyXG5cclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG5cclxuICAgICAgaWYgKCFsb2NrZWQgJiYgZW50cnkuaWRjb3VudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkY291bnQgPSBlbnRyeS5pZGNvdW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBtYXJrcyA9IChlbnRyeS5tYXJrcyB8fCBbXSkuY29uY2F0KGVudHJ5Lmxvc3QgfHwgW10pLFxyXG4gICAgICAgICAgICBkID0gbWFya3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoZCkge1xyXG4gICAgICAgICAgd2hpbGUgKGQtLSkge1xyXG4gICAgICAgICAgICBpZHMucHVzaChtYXJrc1tkXS5pZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlkY291bnQgPSBNYXRoLm1heC5hcHBseShudWxsLCBpZHMpO1xyXG4gIH0sXHJcblx0bWFyayhrZXksIGRhdGEsIGltbXV0KSB7XHJcblx0XHR0aGlzLnVuZG9uZS5sZW5ndGggPSAwO1xyXG5cclxuICAgIGNvbnN0IG1hcmsgPSBuZXcgX01BUksodGhpcywga2V5LCBkYXRhLCBpbW11dCkuY3JlYXRlKCk7XHJcblxyXG4gICAgaWYgKGRhdGEuYXV0b25vdGUpIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCBtYXJrLCBkYXRhLmF1dG9ub3RlKTtcclxuXHJcblx0XHRyZXR1cm4gbWFyaztcclxuXHR9LFxyXG5cdHVuZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcblx0XHRsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuXHJcblx0XHRpZiAoZG9uZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZS5wb3AoKTtcclxuICAgICAgY29uc3QgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgdGhpcy51bmRvbmUucHVzaChtYXJrLnVuZG8oKSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5ib29rbWFyaykgdGhpcy51bmRvQm9va21hcmsoKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vQXV0b3NhdmUgfHwgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdH0sXHJcblx0cmVkbyhub0F1dG9zYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB1bmRvbmUgPSB0aGlzLnVuZG9uZTtcclxuXHJcblx0XHRpZiAodW5kb25lLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy51bmRvbmUucG9wKCk7XHJcblxyXG4gICAgICB0aGlzLmRvbmUucHVzaChtYXJrLnJlZG8oKSk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCBbbWFya10pO1xyXG4gICAgfVxyXG5cclxuICAgIG5vQXV0b3NhdmUgfHwgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdH0sXHJcbiAgY3V0T3V0KGkpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgbCA9IGRvbmUubGVuZ3RoLFxyXG4gICAgICAgIHRvQmVSZW1vdmVkID0gW2ldLFxyXG4gICAgICAgIGluZGljZXMgPSBbaV0sXHJcbiAgICAgICAgbWFyaywgc21hbGxlc3RJRDtcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhqKSB7XHJcbiAgICAgIGZvciAodmFyIHggPSBqICsgMTsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgIG1hcmsgPSBkb25lW3hdO1xyXG5cclxuICAgICAgICBpZiAobWFya2VyLm1hcmtzSW50ZXJzZWN0KGRvbmVbal0sIG1hcmspKSB7XHJcbiAgICAgICAgICBpZiAoIXRvQmVSZW1vdmVkLmluY2x1ZGVzKHgpKSB0b0JlUmVtb3ZlZC5wdXNoKHgpO1xyXG4gICAgICAgICAgaW5kaWNlcy5wdXNoKHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpbmRpY2VzLnNvcnQoKTtcclxuICAgICAgdG9CZVJlbW92ZWQuc29ydCgpO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGluZGljZXMubGVuZ3RoKSB7XHJcbiAgICAgIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGluZGljZXMuc2hpZnQoKSk7XHJcbiAgICB9XHJcbiAgICBzbWFsbGVzdElEID0gTWF0aC5taW4uYXBwbHkobnVsbCwgdG9CZVJlbW92ZWQpO1xyXG5cclxuICAgIHdoaWxlICh0b0JlUmVtb3ZlZC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5kb25lLnNwbGljZSh0b0JlUmVtb3ZlZC5wb3AoKSwgMSlbMF0udW5kbygpO1xyXG4gICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc21hbGxlc3RJRDtcclxuICB9LFxyXG4gIHJlbW92ZShpZCkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBpZCA9IGlkID8gaWQgOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG4gICAgaWYgKCFpZCkgcmV0dXJuIHRoaXMudW5kbygpO1xyXG5cclxuICAgIGxldCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkLnNwbGl0KCdfJylbMF0pLFxyXG4gICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgbCA9IGRvbmUubGVuZ3RoLFxyXG4gICAgICAgIHBvc2l0aW9uID0gZG9uZS5pbmRleE9mKG1hcmspLFxyXG4gICAgICAgIHNtYWxsZXN0SUQsIGk7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uID09PSBsIC0gMSkge1xyXG4gICAgICB0aGlzLnVuZG8oKTtcclxuICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy51bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaSA9IHRoaXMudW5kb25lLmxlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMudW5kb25lLmxlbmd0aCkgdGhpcy5yZWRvKHRydWUpO1xyXG5cclxuICAgICAgICBzbWFsbGVzdElEID0gdGhpcy5jdXRPdXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdoaWxlIChpLS0pIHRoaXMudW5kbyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkWzBdKTtcclxuICB9LFxyXG4gIHJlc3VtZShhcmcsIG9wdGlvbnMpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dG1hcmtlci1oaWdobGlnaHQnKSlcclxuICAgICAgLmZvckVhY2goaGlnaGxpZ2h0ID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBoaWdobGlnaHQucGFyZW50Tm9kZTtcclxuICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGhpZ2hsaWdodC50ZXh0Q29udGVudCksIGhpZ2hsaWdodCk7XHJcbiAgICAgICAgY29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbmUgPSBbXTtcclxuICAgIHRoaXMudW5kb25lID0gW107XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gW107XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSBbXTtcclxuICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5tYXJrU2Nyb2xsUG9zID0gLTE7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSAhYXJnICYmIF9TVE9SRS5uYW1lICYmIF9TVE9SRS5lbnRyaWVzW19TVE9SRS5uYW1lXSA/IF9TVE9SRS5lbnRyaWVzW19TVE9SRS5uYW1lXSA6IG51bGw7XHJcblxyXG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdyZXN1bWVkOm1hcmtlcnMnLCBlbnRyeSk7XHJcbiAgfSxcclxuICBpbW11dChpbW11dGFibGUpIHtcclxuICAgIHRoaXMuaXNJbW11dCA9IGltbXV0YWJsZTtcclxuICAgIF9TVE9SRS5yZWRlc2NyaWJpbmcgPSB0cnVlO1xyXG4gICAgX1NUT1JFLmltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgdGhpcy5yZXN1bWUoKTtcclxuICB9LFxyXG4gIHNhdmUoKSB7XHJcbiAgICBjb25zdCBpZnJhbWUgPSBfU1RPUkUuaWZyYW1lO1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuXHJcbiAgICBfU1RPUkUuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB7XHJcbiAgICAgIGlmIChfU1RPUkUuaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgICAgaWYgKCFsb2NrZWQgJiYgbmFtaW5nID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KCduYW1lOmVudHJ5PycpLnRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3ViID0gaWZyYW1lID8gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykgOiAnJztcclxuXHJcbiAgICAgICAgICAgICAgX1NUT1JFLm5hbWUgPSB3aW5kb3cucHJvbXB0KGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlJywgc3ViKSk7XHJcbiAgICAgICAgICAgICAgaWYgKF9TVE9SRS5uYW1lKSB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGNvbmZpcm1lZCA9IHRydWU7XHJcbiAgICAgICAgICBpZiAoaWZyYW1lKSBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSk7XHJcbiAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblx0fSxcclxuICBhdXRvc2F2ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2F1dG9zYXZlJykudGhlbihhdXRvc2F2ZSA9PiB7XHJcbiAgICAgIGlmIChhdXRvc2F2ZSkgdGhpcy5zYXZlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCd1bnNhdmVkLWNoYW5nZXMnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY29weSgpIHtcclxuICAgIGNvbnN0IG1hcmsgPSB0aGlzLmZpbmRNYXJrKCk7XHJcbiAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuICAgIGNvbnN0IHJhbmdlID0gbWFyay5yYW5nZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IG1hcmsuc2VsZWN0aW9uLnNlbGY7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnM7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQod3JhcHBlcnNbMF0sIDApO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKHdyYXBwZXJzW3dyYXBwZXJzLmxlbmd0aCAtIDFdLCAxKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzZWxlY3Rpb24udG9TdHJpbmcoKS50cmltKCkucmVwbGFjZSgvKFxcclxcbil7MSx9L2csICdcXHJcXG4nKSk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcbiAgfSxcclxuICBzdG9yZShtYXJrLCBzYXZlLCBvcmRlcikge1xyXG5cdFx0dGhpcy5kb25lLnB1c2gobWFyayk7XHJcbiAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdGlmIChvcmRlcikgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHR9LFxyXG4gIHJlY3JlYXRlKG1hcmspIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04obnVsbCwgeyBwcm9ncmFtbWF0aWNhbGx5OiB0cnVlIH0pO1xyXG4gICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsobWFyay5rZXksIG1hcmspLCBmYWxzZSwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmRvbmUubGVuZ3RoKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoX1NUT1JFLm5hbWUgPT09IG1hcmsua2V5RGF0YS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvTWFyayhtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3J0QnlJZCgpO1xyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5yZWRlc2NyaWJpbmcpIHtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFkZE5vdGUoaWQpIHtcclxuICAgIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCB0aGlzLmZpbmRNYXJrKGlkKSk7XHJcbiAgfSxcclxuICBzYXZlTm90ZShpZCkge1xyXG4gICAgaWYgKCFfU1RPUkUubG9ja2VkKSByZXR1cm4gdGhpcy5hdXRvc2F2ZSgpO1xyXG5cclxuICAgIGNvbnN0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQpLmtleURhdGE7XHJcbiAgICBjb25zdCBzeW5jZWQgPSB0eXBlb2YgbWFyay5zeW5jZWQgPT09ICdib29sZWFuJyA/IG1hcmsuc3luY2VkIDogX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICBtYXJrczogW21hcmtdLFxyXG4gICAgICBuYW1lOiBtYXJrLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSksXHJcbiAgICAgIHN5bmNlZFxyXG4gICAgfTtcclxuICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGdvdG9NYXJrKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtFbGVtZW50cyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3M7XHJcbiAgICBsZXQgZWwsIHBvcywgaWQ7XHJcbiAgICBpZiAobWFyayB8fCBtYXJrID09PSAwKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSBtYXJrICsgMTtcclxuICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1ttYXJrXTtcclxuICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG4gICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQ9XCInICsgaWQgKyAnXzBcIl0nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9zID0gdGhpcy5tYXJrU2Nyb2xsUG9zO1xyXG4gICAgICBlbCA9IG1hcmtFbGVtZW50c1twb3NdO1xyXG4gICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuXHJcblx0XHRpZiAoIW1hcmsgfHwgdHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB0aGlzLmdldEJ5SWQoaWQpLm9uQ2xpY2soaWQpO1xyXG4gICAgdGhpcy5pbmRpY2F0ZU1hcmsoaWQpO1xyXG4gIH0sXHJcblx0Z290b05leHRNYXJrKGRpcikge1xyXG5cdFx0Y29uc3QgbCA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubGVuZ3RoO1xyXG5cclxuXHRcdHRoaXMubWFya1Njcm9sbFBvcyArPSBkaXI7XHJcblxyXG5cdFx0aWYgKHRoaXMubWFya1Njcm9sbFBvcyA8IDApIHRoaXMubWFya1Njcm9sbFBvcyA9IGwgLSAxO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5tYXJrU2Nyb2xsUG9zID49IGwpIHRoaXMubWFya1Njcm9sbFBvcyA9IDA7XHJcblxyXG5cdFx0dGhpcy5nb3RvTWFyaygpO1xyXG5cdH0sXHJcbiAgaW5kaWNhdGVNYXJrKGlkKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpXHJcbiAgICAgIC5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgY29uc3QgdG1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZF49XCInICsgaWQgKyAnX1wiXScpKTtcclxuXHJcbiAgICB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSksIDIwMDApO1xyXG4gIH0sXHJcbiAgc2V0Qm9va21hcmsobSwgc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrLFxyXG4gICAgICAgIG1hcmsgPSB0aGlzLmZpbmRNYXJrKG0pO1xyXG5cclxuICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChib29rbWFyaykge1xyXG4gICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib29rbWFyayA9IG5ldyBfQk9PS01BUksoKS5zZXQobWFyayk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdhZGRlZDpib29rbWFyaycpO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICB1bmRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgaWYgKCFib29rbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IGJvb2ttYXJrO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoYm9va21hcmspIGJvb2ttYXJrLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkLCBwb3MpIHtcclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lLFxyXG5cdFx0XHQgIGQgPSBkb25lLmxlbmd0aCxcclxuXHRcdFx0ICBtYXJrO1xyXG5cclxuXHRcdHdoaWxlIChkLS0pIHtcclxuXHRcdFx0bWFyayA9IGRvbmVbZF07XHJcblxyXG5cdFx0XHRpZiAobWFyay5rZXlEYXRhLmlkID09IGlkKVxyXG5cdFx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG1hcmssIHBvc2l0aW9uOiBkIH0gOiBtYXJrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbnVsbCwgcG9zaXRpb246IG51bGwgfSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0ZmluZE1hcmsoeCkge1xyXG5cdFx0eCA9IHggPyB4IDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuXHRcdGxldCBtYXJrID0gIXggP1xyXG5cdFx0XHR0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdIDpcclxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ3N0cmluZycgP1xyXG5cdFx0XHR0aGlzLmdldEJ5SWQoeC5zcGxpdCgnXycpWzBdKSA6XHJcblx0XHRcdHg7XHJcblx0XHRyZXR1cm4gbWFyaztcclxuXHR9LFxyXG4gIHNvcnRCeUlkKCkge1xyXG4gICAgdGhpcy5kb25lLnNvcnQoKG1hcmsxLCBtYXJrMikgPT4gbWFyazEuaWQgLSBtYXJrMi5pZCk7XHJcbiAgfSxcclxuXHRvcmRlck1hcmtzVmlzdWFsbHkoKSB7XHJcblx0XHR0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZCQ9XCJfMFwiXScpKS5zb3J0KChtMSwgbTIpID0+IHtcclxuXHRcdFx0bGV0IGJiMSA9IG0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0YmIyID0gbTIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHR0b3AxID0gYmIxLnRvcCxcclxuXHRcdFx0XHRcdHRvcDIgPSBiYjIudG9wO1xyXG5cclxuXHRcdFx0aWYgKHRvcDEgPCB0b3AyKSByZXR1cm4gLTE7XHJcblx0XHRcdGVsc2UgaWYgKHRvcDIgPCB0b3AxKSByZXR1cm4gMTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGJiMS5sZWZ0IDwgYmIyLmxlZnQpIHJldHVybiAtMTtcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLm1hcChtYXJrID0+IHBhcnNlSW50KG1hcmsuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKTtcclxuICAgIHRoaXMuZW1pdCgndmlzdWFsbHktb3JkZXJlZDptYXJrcycsIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyk7XHJcblx0fSxcclxuICBtYXJrc0ludGVyc2VjdChtYXJrMSwgbWFyazIpIHtcclxuXHRcdGxldCB3cmFwcGVyczEgPSBtYXJrMS53cmFwcGVycyxcclxuICAgICAgICB3MSA9IHdyYXBwZXJzMS5sZW5ndGgsXHJcbiAgICAgICAgaWQxID0gbWFyazEuaWQsXHJcbiAgICAgICAgd3JhcHBlcnMyID0gbWFyazIud3JhcHBlcnMsXHJcbiAgICAgICAgaWQyID0gbWFyazIuaWQsXHJcbiAgICAgICAgdzIsIHRtcywgbDtcclxuXHJcbiAgICB3aGlsZSAodzEtLSkge1xyXG4gICAgICB3MiA9IHdyYXBwZXJzMi5sZW5ndGg7XHJcbiAgICAgIHdoaWxlICh3Mi0tKSB7XHJcbiAgICAgICAgdG1zID0gd3JhcHBlcnMxW3cxXS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF0nKTtcclxuICAgICAgICBsID0gdG1zLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICBpZiAodG1zW2xdLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpWzBdID09IGlkMilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuICBvbk1hcmtlcktleShlLCBrZXkpIHtcclxuXHRcdGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcblxyXG5cdFx0aWYgKCFzZWxlY3Rpb24ubm9kZXMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAoZSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSBrZXkgPSBlO1xyXG5cdFx0XHRlbHNlIHRoaXMucHJldmVudERlZmF1bHQoZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRrZXkgPSBrZXkgfHwgJ20nO1xyXG5cdFx0fVxyXG5cclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChfU1RPUkUuaXNOZXcpIHtcclxuICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiAhIXNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogX1NUT1JFLmltbXV0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKGtleSwgc2V0dGluZ3MubWFya2Vyc1trZXldLCB0aGlzLmlzSW1tdXQpLCB0cnVlLCB0cnVlKTtcclxuICAgIH0pO1xyXG5cdH0sXHJcbiAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgIGNhc2UgJ3onOiBzZWxmLnVuZG8oKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3knOiBzZWxmLnJlZG8oKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3MnOiBzZWxmLnNhdmUoKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2InOiBzZWxmLnNldEJvb2ttYXJrKCk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhcnJvd3VwJzogc2VsZi5nb3RvTmV4dE1hcmsoLTEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAnYXJyb3dkb3duJzogc2VsZi5nb3RvTmV4dE1hcmsoMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdkJzogc2VsZi5yZW1vdmUoKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2MnOiBzZWxmLmNvcHkoKTsgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcmV2ZW50RGVmYXVsdChlKSB7XHJcblx0XHRpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0KSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0cmV0cmlldmVFbnRyeSgpIHtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICBjb25zdCBpc05ldyA9IF9TVE9SRS5pc05ldztcclxuICAgIGNvbnN0IG5hbWUgPSBfU1RPUkUubmFtZTtcclxuXHJcbiAgICBjb25zdCBlbnRyeSA9ICFsb2NrZWQgJiYgX1NUT1JFLmVudHJpZXNbbmFtZV0gPyBfU1RPUkUuZW50cmllc1tuYW1lXSA6IHt9O1xyXG5cclxuICAgIGVudHJ5Lm1hcmtzID0gdGhpcy5jb2xsZWN0TWFya3MoKTtcclxuXHRcdGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGVudHJ5LmJvb2ttYXJrZWQgPSAhIXRoaXMuYm9va21hcms7XHJcbiAgICBlbnRyeS50aXRsZSA9IHdpbmRvdy5kb2N1bWVudC50aXRsZTtcclxuXHRcdGVudHJ5LmNvdW50ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG5cdFx0ZW50cnkuaWRjb3VudCA9IHRoaXMuaWRjb3VudDtcclxuICAgIGVudHJ5LmltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogZW50cnkuaW1tdXQ7XHJcblxyXG4gICAgaWYgKGlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICBlbnRyeS5maXJzdCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgIGVudHJ5LnVybCA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlID8gd2luZG93LmRvY3VtZW50LlVSTCA6IF9IQVNITEVTUyh3aW5kb3cuZG9jdW1lbnQuVVJMKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG4gICAgICBlbnRyeS5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICAgIGVudHJ5Lmhhc2hTZW5zaXRpdmUgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRyeS5uYW1lID0gbG9ja2VkID9cclxuICAgICAgZW50cnkubWFya3NbMF0udGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSA6XHJcbiAgICAgIGlzTmV3ID8gbmFtZSA6IGVudHJ5Lm5hbWU7XHJcblxyXG5cdFx0cmV0dXJuIGVudHJ5O1xyXG5cdH0sXHJcbiAgY29sbGVjdE1hcmtzKCkge1xyXG4gICAgbGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcbiAgICBsZXQgbCA9IGRvbmUubGVuZ3RoO1xyXG4gICAgY29uc3QgbWFya3MgPSBbXTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICBkb25lID0gW2RvbmVbbC0xXV07XHJcbiAgICB9XHJcblxyXG4gICAgbCA9IGRvbmUubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IG0gPSAwLCBrRDsgbSA8IGw7IG0rKykge1xyXG5cdFx0XHRrRCA9IGRvbmVbbV0ua2V5RGF0YTtcclxuICAgICAgZGVsZXRlIGtELnN5bmNlZDtcclxuXHRcdFx0bWFya3MucHVzaChrRCk7XHJcblx0XHR9XHJcbiAgICByZXR1cm4gbWFya3M7XHJcbiAgfSxcclxuICBvbkhhc2hDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnJlc3VtZShudWxsLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgIHRoaXMuZW1pdCgncmVzdW1lZC1vbi1oYXNoY2hhbmdlJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmssIGNvbG9yKSB7XHJcblxyXG4gIGNvbnN0IEJPRFkgPSB3aW5kb3cuZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ2FkZE1hcmtMaXN0ZW5lcnMnLFxyXG4gICAgICAgICdkcmFnOm5vdGUnOiAnb25EcmFnJyxcclxuICAgICAgICAnZHJhZ3N0b3A6bm90ZSc6ICdvbkRyYWdFbmQnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAndG1ub3RlZGVsZXRlJzogJ19kZWxldGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZW1pbmltaXplJzogJ2hpZGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWN1c3RvbWl6ZSc6ICd0b2dnbGVQYWxldHRlJyxcclxuICAgICAgICAgICd0bW5vdGVjb2xvcic6ICdjaGFuZ2VDb2xvcicsXHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYnJpbmdVcEZyb250J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5dXA6IHtcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdhdHRlbXB0VXBkYXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2Vkb3duOiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG91Y2hzdGFydDoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgbWFyayxcclxuICAgIGNvbG9yOiBjb2xvciB8fCAnJyxcclxuICAgIG1hcmtDbGlja0hhbmRsZXI6IG51bGwsXHJcbiAgICB0ZXh0OiAnJyxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgcmVjZW50bHlVcGRhdGVkOiBmYWxzZSxcclxuICAgIHNldHRpbmdzTW9kZTogZmFsc2UsXHJcbiAgICBwb3M6IHsgbDogbnVsbCwgdDogbnVsbCB9LFxyXG4gICAgc2l6ZTogeyB3OiBudWxsLCBoOiBudWxsIH0sXHJcbiAgICBkcmFnRFg6IDAsXHJcbiAgICBkcmFnRFk6IDAsXHJcbiAgICBtdXRhdGlvbk9ic2VydmVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmFkanVzdE5vdGVEYXRhT2JqZWN0KCk7XHJcbiAgICAgIHRoaXMuY3JlYXRlTm90ZUVsZW1lbnQoKTtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5hZGRNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkanVzdE5vdGVEYXRhT2JqZWN0KCkge1xyXG4gICAgICBjb25zdCBub3RlRGF0YSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGU7XHJcbiAgICAgIGlmICh0eXBlb2Ygbm90ZURhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZSA9IHsgdGV4dDogbm90ZURhdGEsIGNvbG9yOiB0aGlzLmNvbG9yIHx8ICd5ZWxsb3cnIH07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIW5vdGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZSA9IHsgdGV4dDogbm90ZURhdGEsIGNvbG9yOiB0aGlzLmNvbG9yIHx8IF9TVE9SRS5ub3RlQ29sb3IgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBvcyA9IG5vdGVEYXRhLnBvcyB8fCB0aGlzLnBvcztcclxuICAgICAgICB0aGlzLnNpemUgPSBub3RlRGF0YS5zaXplIHx8IHRoaXMuc2l6ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZU5vdGVFbGVtZW50KCkge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZScpO1xyXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWhlYWRlcicpO1xyXG4gICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlYWN0aW9ucycpO1xyXG4gICAgICBjb25zdCBkZWwgPSB0aGlzLmRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWRlbGV0ZScpO1xyXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLm1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZW1pbmltaXplJyk7XHJcbiAgICAgIGNvbnN0IGdlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjdXN0b21pemUnKTtcclxuICAgICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMucGFsZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXBhbGV0dGUnKTtcclxuICAgICAgY29uc3QgcCA9IHRoaXMudGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0O1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yIHx8IF9TVE9SRS5ub3RlQ29sb3I7XHJcbiAgICAgIF9TVE9SRS5ub3RlQ29sb3IgPSBjb2xvcjtcclxuICAgICAgY29uc3QgZGVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgICAgY29uc3QgbWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDEzKSk7XHJcbiAgICAgIGNvbnN0IGdlYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDI2OTkpKTtcclxuXHJcbiAgICAgIFsnZ3JlZW4nLCAnd2hpdGUnLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnLCAncHVycGxlJywgJ2JsdWUnLCAndHVycXVvaXNlJ10uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBsZXQgY29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjb2xvcicpO1xyXG4gICAgICAgIGNvbG9yLmNsYXNzTmFtZSA9ICd0bW5vdGVjb2xvci0tJyArIGM7XHJcbiAgICAgICAgY29sb3Iuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgYyk7XHJcbiAgICAgICAgcGFsZXR0ZS5hcHBlbmRDaGlsZChjb2xvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0tbm90ZScsIHRydWUpO1xyXG4gICAgICBkZWwuYXBwZW5kQ2hpbGQoZGVsVGV4dCk7XHJcbiAgICAgIG1pbi5hcHBlbmRDaGlsZChtaW5UZXh0KTtcclxuICAgICAgZ2Vhci5hcHBlbmRDaGlsZChnZWFyVGV4dCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChnZWFyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKG1pbik7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICBpZiAodGV4dCkgcC52YWx1ZSA9IHRleHQ7XHJcblxyXG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHRoaXMuYXR0ZW1wdFVwZGF0ZShlLCBlLnRhcmdldCwgdHJ1ZSksIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0gJyc7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBhdHRlbXB0VXBkYXRlKGUsIGVsLCBmb3JjZSkge1xyXG4gICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXRoaXMucmVjZW50bHlVcGRhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlKGVsKSwgMzAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZWwpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0ID0gZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93KCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGlubmVyV2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgIGxldCBwb3MsIGxlZnQsIHRvcDtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBvcy5sICE9PSBudWxsKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5wb3M7XHJcbiAgICAgICAgdG9wID0gcG9zLnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG4gICAgICAgIHRvcCA9IHRoaXMucG9zLnQgPSBwb3MudCArIHBvcy5vZmZzZXQ7XHJcbiAgICAgIH1cclxuICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBwb3MubDtcclxuXHJcbiAgICAgIGlmIChsZWZ0ICsgMzQwID4gaW5uZXJXaW5kb3dXaWR0aCkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gaW5uZXJXaW5kb3dXaWR0aCAtIDM0MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZS53ID8gJ3dpZHRoOicgKyB0aGlzLnNpemUudyArICc7aGVpZ2h0OicgKyB0aGlzLnNpemUuaCArICc7JyA6ICcnO1xyXG5cclxuICAgICAgQk9EWS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jazt0b3A6JyArIHRvcCArICdweDtsZWZ0OicgKyBsZWZ0ICsgJ3B4OycpO1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc2l6ZSk7XHJcbiAgICAgIHRoaXMuY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBicmluZ1VwRnJvbnQoKSB7XHJcbiAgICAgIEFycmF5LmZyb20oQk9EWS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlJykpLmZvckVhY2gobm90ZSA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGUgPT09IHRoaXMuZWwpIG5vdGUuc3R5bGUuekluZGV4ID0gMjE0NzQ4MzY0NztcclxuICAgICAgICBlbHNlIG5vdGUuc3R5bGUuekluZGV4ID0gMjE0NzQ4MzY0NjtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgQk9EWS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB0aGlzLmhpZGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVQYWxldHRlKCkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5nc01vZGUpIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnBhbGV0dGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NNb2RlID0gIXRoaXMuc2V0dGluZ3NNb2RlO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvbG9yKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS0nICsgdGhpcy5jb2xvcik7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IF9TVE9SRS5ub3RlQ29sb3IgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgPSBjb2xvcjtcclxuICAgICAgdGhpcy50b2dnbGVQYWxldHRlKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLWNvbG9yJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkTWFya0xpc3RlbmVycygpIHtcclxuICAgICAgX1NUT1JFLmdldCgnbm90ZW9uY2xpY2snKS50aGVuKG5vdGVvbmNsaWNrID0+IHtcclxuICAgICAgICBpZiAobm90ZW9uY2xpY2spIHtcclxuICAgICAgICAgIGlmICghIXRoaXMubWFya0NsaWNrSGFuZGxlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLm1hcmtDbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCd0aXRsZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZScpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMubWFya0NsaWNrSGFuZGxlcikgcmV0dXJuO1xyXG4gICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHRoaXMubWFyay53cmFwcGVycykge1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hcmtDbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbm5lY3RNdXRhdGlvbk9ic2VydmVyKCkge1xyXG4gICAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ10gfTtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgfHwgbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnNhdmVTaXplKSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGV4dGFyZWEsIGNvbmZpZyk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLm1hcmsud3JhcHBlcnNbdGhpcy5tYXJrLndyYXBwZXJzLmxlbmd0aCAtIDFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHQ6IHJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gQk9EWS5jbGllbnRUb3AsXHJcbiAgICAgICAgbDogcmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gQk9EWS5jbGllbnRMZWZ0LFxyXG4gICAgICAgIG9mZnNldDogcmVjdC5oZWlnaHRcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWdTdGFydChlLCBlbCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZHJhZ0RYID0gZS5wYWdlWCAtIHRoaXMucG9zLmw7XHJcbiAgICAgIHRoaXMuZHJhZ0RZID0gZS5wYWdlWSAtIHRoaXMucG9zLnQ7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnQ6ZHJhZycsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgb25EcmFnKG5vdGUsIGUpIHtcclxuICAgICAgaWYgKG5vdGUgPT09IHRoaXMubWFyay5pZCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zLmwgPSBlLnBhZ2VYIC0gdGhpcy5kcmFnRFg7XHJcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMucG9zLnQgPSBlLnBhZ2VZIC0gdGhpcy5kcmFnRFk7XHJcbiAgICAgICAgZWwuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xyXG4gICAgICAgIGVsLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRyYWdFbmQoKSB7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUucG9zID0gdGhpcy5wb3M7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLXBvcycsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZVNpemUobXV0YXRpb25zTGlzdCkge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IG11dGF0aW9uc0xpc3RbMF0udGFyZ2V0LnN0eWxlO1xyXG4gICAgICB0aGlzLnNpemUgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnNpemUgPSB7IHc6IHN0eWxlLndpZHRoLCBoOiBzdHlsZS5oZWlnaHQgfTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtc2l6ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9OT1RFIGZyb20gJy4vbm90ZSdcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnYWRkOm5vdGUnOiAnYWRkQW5kU2hvdycsXHJcbiAgICAgICdyZW1vdmVkOm5vdGUnOiAncmVtb3ZlTm90ZVN0b3JhZ2UnLFxyXG4gICAgICAncmVzdG9yZTpub3Rlcyc6ICdyZXN0b3JlJyxcclxuICAgICAgJ3JlbW92ZWQ6bWFyayc6ICdyZW1vdmVOb3RlJyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICd1cGRhdGVUcmFuc3AnLFxyXG4gICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kTm90ZXNTdGF0ZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBub3Rlczoge30sXHJcbiAgdG9nZ2xlOiBudWxsLFxyXG4gIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gIGRyYWdTdG9wSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhbnNwKCk7XHJcbiAgfSxcclxuICBhZGQobWFyaywgY29sb3IpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgaWYgKG5vdGUpIHJldHVybiBub3RlO1xyXG4gICAgdGhpcy5lbWl0KCdhZGRlZDpub3RlJyk7XHJcbiAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgfSxcclxuICByZXN0b3JlKG1hcmtzKSB7XHJcbiAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgIGlmIChtYXJrLmtleURhdGEubm90ZSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1hcmspO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICB0aGlzLmFkZChtYXJrLCBjb2xvcikuc2hvdygpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgIGRlbGV0ZSB0aGlzLm5vdGVzW2lkXTtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkodGhpcy5ub3RlcykpIHRoaXMuZW1pdCgncmVtb3ZlZDpsYXN0LW5vdGUnKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGUoaWQpIHtcclxuICAgIGlmICh0aGlzLm5vdGVzW2lkXSkgdGhpcy5ub3Rlc1tpZF0ucmVtb3ZlKCk7XHJcbiAgfSxcclxuICB0b2dnbGVBbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMubm90ZXMpIHJldHVybjtcclxuICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgIGxldCBtZXRoID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKS5sZW5ndGggPyAnaGlkZScgOiAnc2hvdycsXHJcbiAgICAgICAgY29uZGl0aW9uID0gbWV0aCA9PT0gJ2hpZGUnID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIG5vdGU7XHJcbiAgICBmb3IgKGxldCBuIGluIG5vdGVzKSB7XHJcbiAgICAgIG5vdGUgPSBub3Rlc1tuXTtcclxuICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgbm90ZVttZXRoXSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVUcmFuc3AoKSB7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncyAmJiBzZXR0aW5ncy5taXNjKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcCkgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXBsYWludmlldykgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS1wbGFpbi12aWV3Jyk7XHJcbiAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBpc0VtcHR5KG9iaikge1xyXG4gICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICB9LFxyXG4gIHN0YXJ0RHJhZ2dpbmdOb3RlKG5vdGUpIHtcclxuICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlciA9IChlKSA9PiB0aGlzLmVtaXREcmFnRXZlbnQobm90ZSwgZSk7XHJcbiAgICBjb25zdCBkcmFnU3RvcEhhbmRsZXIgPSB0aGlzLmRyYWdTdG9wSGFuZGxlciA9IChlKSA9PiB0aGlzLnN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSk7XHJcbiAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKSB7XHJcbiAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdkcmFnc3RvcDpub3RlJywgbm90ZSwgZSk7XHJcbiAgfSxcclxuICBlbWl0RHJhZ0V2ZW50KG5vdGUsIGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZW1pdCgnZHJhZzpub3RlJywgbm90ZSwgZSk7XHJcbiAgfSxcclxuICBzZW5kTm90ZXNTdGF0ZShpbmZvKSB7XHJcbiAgICB0aGlzLmVtaXQoJ25vdGVzLXN0YXRlJywgIXRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSwgaW5mbyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogd2luZG93LmRvY3VtZW50LFxyXG4gIGF1dG9QYXVzZTogdHJ1ZSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBrZXlkb3duOiB7XHJcbiAgICAgICAgJyonOiAnZGVsZWdhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdGlvbmNoYW5nZToge1xyXG4gICAgICAgICcqJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2hpZnRTZW5zaXRpdmVLZXlzOiBbMTMsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCAxNzEsIDE3M10sXHJcbiAga2V5Q29kZU1hcDoge1xyXG4gICAgJzEzJzogJ0VudGVyJyxcclxuICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgJzUzJzogJzUnLCAnNTQnOiAnNicsICc1NSc6ICc3JywgJzU2JzogJzgnLCAnNTcnOiAnOScsXHJcbiAgICAnMTcxJzogJysnLCAnMTczJzogJy0nXHJcbiAgfSxcclxuXHJcbiAgaXNFZGl0YWJsZShlbCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGVsLnRhZ05hbWU7XHJcblxyXG4gICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gIH0sXHJcbiAgZGVsZWdhdGUoZSkge1xyXG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlLFxyXG4gICAgICAgIG1vZEtleSA9IChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkpLFxyXG4gICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICBsb2NrZWRBY3Rpb25zID0gWydiJywgJ3MnLCAneScsICd6JywgJ2QnXSxcclxuICAgICAgICBmdW5jdGlvbktleXMgPSBsb2NrZWRBY3Rpb25zLmNvbmNhdChhcnJvd0tleXMpLmNvbmNhdCgnYycpLFxyXG4gICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkICYmIGxvY2tlZEFjdGlvbnMuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hpZnRTZW5zaXRpdmVLZXlzLmluY2x1ZGVzKGtleUNvZGUpKSBrZXkgPSB0aGlzLmtleUNvZGVNYXBba2V5Q29kZV07XHJcblxyXG4gICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUoZS50YXJnZXQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBjb25zdCBvcmlnS2V5ID0ga2V5O1xyXG4gICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICBjb25zdCBpc01hcmtlcktleSA9IG1hcmtlcnNba2V5XTtcclxuICAgICAgY29uc3QgaXNDdXN0b21NYXJrZXJLZXkgPSBpc01hcmtlcktleSAmJiAhZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICBjb25zdCBzZXR0aW5nID0gc2hvcnRjdXRzW2tleV07XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAndycgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5nWzFdKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgczEgPSBzaG9ydGN1dFswXTtcclxuICAgICAgICBjb25zdCBzMiA9IHNob3J0Y3V0WzFdO1xyXG5cclxuICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3ByZXNzZWQ6aG90a2V5Jywga2V5KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzZWxlY3Rpb24nLCAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbmNsYXNzIFJlc3RvcmVyQmFzZSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5sb3N0ID0gW107XHJcbiAgICB0aGlzLmZhaWx1cmVSZXBvcnQgPSB7fTtcclxuICAgIHRoaXMucmVzdG9yZWQgPSBbXTtcclxuICAgIHRoaXMuYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdzdGFydGVkOnJlc3RvcmF0aW9uJywgZW50cnkubWFya3MubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NJbkNodW5rcyhkYXRhLCBwcm9jLCBjYikge1xyXG4gICAgcHJvYyA9IHByb2MuYmluZCh0aGlzKTtcclxuICAgIGNiID0gY2IuYmluZCh0aGlzKTtcclxuXHJcblx0XHQoZnVuY3Rpb24gcmVjKCkge1xyXG5cdFx0XHRsZXQgZXhwaXJlID0gK25ldyBEYXRlKCkgKyA1MDA7XHJcblxyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0dHJ5IHtcclxuICAgICAgICAgIHByb2MoZGF0YS5zaGlmdCgpKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHRcdH0gd2hpbGUgKGRhdGEubGVuZ3RoID4gMCAmJiBleHBpcmUgPiArbmV3IERhdGUoKSk7XHJcblxyXG5cdFx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByZWMoKSwgMCk7XHJcblx0XHRcdGVsc2UgY2IoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG4gIHJlcG9ydCgpIHtcclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdsb3N0Om1hcmtzJywgdGhpcy5mYWlsdXJlUmVwb3J0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmVudHJ5Lm5hbWUsIHRoaXMucmVzdG9yZWQsIHRoaXMubG9zdCwgdGhpcy5hcmVhKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgIHRoaXMuY2FjaGUgPSBbXTtcclxuICAgIHRoaXMucGhhc2UgPSAxO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCA9IDA7XHJcbiAgICB0aGlzLmNodW5rRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgdGhpcy5vb20gPSBlbnRyeS5tYXJrcy5sZW5ndGggPT09IDEgJiYgZW50cnkubWFya3NbMF0uaWQgPT0gMTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lcigpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRpbWVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbnRyeSxcclxuICAgICAgICBub3cgPSBbXSwgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICBsID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBtYXJrO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuXHJcbiAgICAgIHRoaXMuY29udmVydERlc2NyaXB0aW9uKG1hcmspLmNyZWF0ZVRlbXBPYmplY3QobWFyayk7XHJcblxyXG4gICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgIGVsc2Ugbm93LnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHBvc3Rwb25lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc3RvcmUoKTtcclxuICB9XHJcbiAgY29udmVydERlc2NyaXB0aW9uKG1hcmspIHtcclxuICAgIGlmICh0eXBlb2YgbWFyay5jb25kcy5vID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgY29udmVydGVkQ29uZHMgPSB7XHJcbiAgICAgICAgICAgIG86IGNvbmRzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgbjI6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIHAxOiBjb25kcy5maXJzdFRleHROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDM6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwNDogY29uZHMuZmlyc3RHcmFtcGFOb2RlUG9zaXRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICBtYXJrLmNvbmRzID0gY29udmVydGVkQ29uZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3JlYXRlVGVtcE9iamVjdChtYXJrKSB7XHJcbiAgICBsZXQgdGV4dCA9IG1hcmsudGV4dCxcclxuICAgICAgICB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLFxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgIG1hcmsudGVtcCA9IHtcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHRyaW1tZWRUZXh0OiB0cmltbWVkVGV4dCxcclxuICAgICAgdHJpbW1lZFRleHRMZW5ndGg6IHRyaW1tZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0OiBzcXVlZXplZFRleHQsXHJcbiAgICAgIHNxdWVlemVkVGV4dExlbmd0aDogc3F1ZWV6ZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZFBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtYXJrLnN5bmNlZCA9IHRoaXMuZW50cnkuc3luY2VkO1xyXG4gIH1cclxuICByZXN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDIpIHRoaXMuc29ydFF1ZXVlQnlJZCgpO1xyXG5cclxuICAgIGxldCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgLmdldFRleHRQb3NpdGlvbnMobWFya3MsIGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5waGFzZSA9PT0gMSAmJiBsZW5ndGggPiAxKVxyXG4gICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgdGhpcy5maW5kUG9zc2libGVFeHRyZW1hKClcclxuICAgICAgICAgIC5ydWxlT3V0TXVsdGlwbGVzKClcclxuICAgICAgICAgIC5yZXN0b3JlUmFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8ICtuZXcgRGF0ZSgpKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzdG9yZSgpLCAwKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICB9XHJcbiAgc29ydFF1ZXVlQnlJZCgpIHtcclxuICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbWFyaywgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmICghbWFya3NbbF0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdWzBdO1xyXG4gICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgIH1cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5xdWV1ZS5wdXNoKFt0ZW1wW2ldXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgbGV0IHRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCxcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHNxdWVlemVkVGV4dCwgc3F1ZWV6ZWRUZXh0TGVuZ3RoLCBwLCBlbmRQb3NpdGlvbjtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHAgPSB1bmRlZmluZWQ7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICBpZiAoIW1hcmtUZW1wKSB7XHJcbiAgICAgICAgbWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gZW5kUG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzcXVlZXplZFRleHQgPSBtYXJrVGVtcC5zcXVlZXplZFRleHQ7XHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAocCAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIHAgPSAtMTtcclxuICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHNxdWVlemVkVGV4dCwgcCArIDEpO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBwICsgc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICghbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzEnKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcclxuICAgIGxldCBsID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgcG9zLCBzdGFydCwgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHBvcyA9IHBvc2l0aW9uc1tsXTtcclxuICAgICAgc3RhcnQgPSBwb3NbMF07XHJcblxyXG4gICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgZWxzZSB0ZW1wW3N0YXJ0XSA9IHBvcztcclxuICAgIH1cclxuICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBpIDwgdDsgaSsrKVxyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgfVxyXG4gIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBwb3MxLCBwb3MyLCBpLCBtMSwgbTIsIGlkMSwgaWQyLCBpZDtcclxuXHJcbiAgICBpZiAocCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHAtLSA+IDEpIHtcclxuICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICBwb3MyID0gcG9zaXRpb25zW3BdO1xyXG4gICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICBtMiA9IHBvczJbMl07XHJcbiAgICAgICAgaWQxID0gbTEuaWQ7XHJcbiAgICAgICAgaWQyID0gbTIuaWQ7XHJcblxyXG4gICAgICAgIGlmIChpZDEgPT09IGlkMikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG5cclxuICAgICAgICAgIGlmIChpZDEgPCBpZDIpIHtcclxuICAgICAgICAgICAgaWQgPSBpZDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGlkMTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwOyBpKyspXHJcbiAgICAgICAgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjdXRPdXRGb3IoaWQpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUocC0tKSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbnNbcF1bMl0uaWQgPT09IGlkKVxyXG4gICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3Rwb25lKG1hcmspIHtcclxuICAgIGxldCBxdWV1ZSA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYWxyZWFkeUluY2x1ZGVkKVxyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICB9XHJcbiAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgIGxldCBub2RlcyA9IHRoaXMuYm9keVRleHROb2RlcyxcclxuICAgICAgICBuID0gbm9kZXMgPyBub2Rlcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcGhhc2UgPSB0aGlzLnBoYXNlLFxyXG4gICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZSA9IFtdLFxyXG4gICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLCBjaGFycyA9IDAsXHJcbiAgICAgICAgbmV4dFN0YXJ0Rm91bmQsIGVuZGluZ3NJblRoaXNOb2RlLFxyXG4gICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIGRpZmYsIGwsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBlLCBmLCBpZCwgcCwgcSwgeCwgbSxcclxuICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0LCBzdGFydEZvdW5kRm9yLCBwb3N0cG9uZWQsIGhhc0VuZGluZ3NJblRoaXNOb2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgbm9kZXNUZXh0ID0gdGhpcy5zcXVlZXplKG5vZGUuZGF0YSk7XHJcbiAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNoYXJzICs9IG5vZGVzVGV4dExlbmd0aDtcclxuICAgICAgbCA9IGluZGljZXMubGVuZ3RoO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgIHBvc3Rwb25lZCA9IFtdO1xyXG4gICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGluZGljZXNbbF1bMF07XHJcbiAgICAgICAgZW5kUG9zaXRpb24gPSBpbmRpY2VzW2xdWzFdO1xyXG4gICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciB8fCBbXTtcclxuICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLmxlbmd0aCA8IG1hcmsudGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMucHVzaCh7IG5vZGU6IG5vZGUsIHBvczogaSB9KTtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIHN0YXJ0Rm91bmRGb3IucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICFtYXJrLnRlbXAuZW5kRm91bmRGb3IuaW5jbHVkZXMoZW5kUG9zaXRpb24pICYmXHJcbiAgICAgICAgICAoY2hhcnMgLSBlbmRQb3NpdGlvbikgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHN0YXJ0Rm91bmRGb3IpIDwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0ID0gdGhpcy5maW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgZW5kUG9zaXRpb24gLSAoY2hhcnMgLSBub2Rlc1RleHRMZW5ndGgpKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvci5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXSA9IHtcclxuICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zc2libGVGb2N1c09mZnNldCxcclxuICAgICAgICAgICAgICBwb3M6IGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICBzYXRpc2ZpZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICBpZiAoY2hhcnMgPiB0aGlzLm1heFBvc2l0aW9uKSBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChwaGFzZSAhPT0gMSB8fCB0aGlzLm9vbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbWFyayA9IHRoaXMubWFya3NbaV07XHJcbiAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMobWFyay5pZCkpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMicpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IGNhY2hlLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIG5vZGUsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgZ3JhbmRncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxLFxyXG4gICAgICAgIHBvc3NpYmxlRW5kcywgc3RhcnRGb3VuZEZvciwgY29uZHMsIHN0YXJ0T2Zmc2V0LCB0ZW1wLCB0ZXh0TGVuZ3RoLCBzdGFydDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBjYWNoZVtpXTtcclxuICAgICAgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzID0gdGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgIHBvc3NpYmxlRW5kcyA9IHRlbXAucG9zc2libGVFbmRzO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gdGVtcC5zdGFydEZvdW5kRm9yXHJcbiAgICAgIHAgPSBwb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoO1xyXG4gICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY29uZHMubztcclxuICAgICAgdGV4dExlbmd0aCA9IHRlbXAudGV4dExlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwID4gMSkge1xyXG4gICAgICAgIHdoaWxlIChwLS0pIHtcclxuICAgICAgICAgIG5vZGUgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcF0ubm9kZTtcclxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAoIWdyYW1wYSB8fCBjb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gocCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSBwID0gMDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkgcCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHEgPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5ub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW5kZ3JhbXBhID0gZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICghZ3JhbmRncmFuZGdyYW1wYSB8fCBjb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbXBhKSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHBvc3NpYmxlRW5kc1tzdGFydEZvdW5kRm9yW3FdXS5vZmZzZXQgLSBzdGFydE9mZnNldCkgPT09IHRleHRMZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwID0gcTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHAgPSAwO1xyXG5cclxuICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgIHN0YXJ0ID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZSA9IHN0YXJ0Lm5vZGU7XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbiA9IHN0YXJ0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuc2V0TWF0Y2hpbmdFbmQobWFyaywgcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvcltwXSxcclxuICAgICAgICBlbmQgPSBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dO1xyXG5cclxuICAgIG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uID0gZW5kLnBvcztcclxuICAgIG1hcmsudGVtcC5mb2N1c09mZnNldCA9IGVuZC5vZmZzZXQ7XHJcbiAgfVxyXG4gIHNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpIHtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFtcGEgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBkZXNjcmlwdGlvbi5vLFxyXG4gICAgICAgIHJlbGV2YW50Tm9kZVRleHQgPSBub2RlLmRhdGEuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0KS50cmltKCksXHJcbiAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0LFxyXG4gICAgICAgIG0gPSBtYXJrLnRlbXAudHJpbW1lZFRleHRMZW5ndGgsXHJcbiAgICAgICAgdGV4dHNNYXRjaDtcclxuXHJcbiAgICBpZiAobSA8PSBsKSB7XHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUobWFya1RleHQpKSA9PT0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUobWFya1RleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpKSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0ZXh0c01hdGNoICYmXHJcbiAgICAgIChwYXJlbnROb2RlLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMSB8fCAoZGVzY3JpcHRpb24ubjEgPT09ICdUTScgJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpICYmXHJcbiAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgIHRoaXMud2hpY2hDaGlsZChwYXJlbnROb2RlLCBub2RlKSA9PT0gZGVzY3JpcHRpb24ucDFcclxuICAgICk7XHJcbiAgfVxyXG4gIGZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBuKSB7XHJcbiAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgbCA9IG5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3F1ZWV6ZShub2RlVGV4dFtpXSkpIGNvdW50ZXIrKztcclxuXHJcbiAgICAgIGlmIChjb3VudGVyID09PSBuKSByZXR1cm4gKC9cXHMkLy50ZXN0KG1hcmsudGV4dCkgPyBpICsgMiA6IGkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzdG9yZVJhbmdlcygpIHtcclxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHN0YXJ0LCBlbmQsIGZvY3VzT2Zmc2V0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgIGVuZCA9IG1hcmtUZW1wLmVuZE5vZGU7XHJcbiAgICAgIGZvY3VzT2Zmc2V0ID0gbWFya1RlbXAuZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSkge1xyXG4gICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzMnKSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgIHJhbmdlLnNldEVuZChlbmQsIGZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgLy9zZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5yZWNvbGxlY3ROb2RlcyhtYXJrKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBtYXJrLnRlbXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJvZHlTZWxlY3Rpb24oZWwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwrKztcclxuXHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKGVsKTtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHJpYWwgPCA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRCb2R5U2VsZWN0aW9uKGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9ICcgJztcclxuICAgICAgICAgIHRoaXMuYm9keVRleHROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUodGhpcy5zZWxlY3Rpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gdGhpcy5zZWxlY3Rpb24ubm9kZXMgPyB0aGlzLnNlbGVjdGlvbi5ub2Rlcy5zbGljZSgpIDogW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpID8gdGV4dC5yZXBsYWNlKC9cXHR8XFxzfFxcbnxcXHIvZywgJycpIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICB3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGNvbnRleHQpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdCAgICBjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0ICAgIHBvcyA9IDAsIGkgPSAwLCBjdXJyZW50Q2hpbGQ7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnRDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGQpIHJldHVybiBwb3M7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZU5hbWUgPT09IGNvbnRleHQpIHBvcysrO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICBpZiAoIShjdXJyZW50Q2hpbGQubm9kZVR5cGUgPT09IDMgJiYgIWN1cnJlbnRDaGlsZC5kYXRhKSkgcG9zKys7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEltbXV0UmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IFsuLi5lbnRyeS5tYXJrcy5zb3J0KChtMSwgbTIpID0+IG0xLmlkIC0gbTIuaWQpXTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NJbkNodW5rcyhtYXJrcywgdGhpcy5yZXN0b3JlUmFuZ2UsIHRoaXMucmVwb3J0KTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVSYW5nZShtYXJrKSB7XHJcbiAgICBjb25zdCBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICBjb25zdCBzdGFydCA9IGNvbmRzLnM7XHJcbiAgICBjb25zdCBlbmQgPSBjb25kcy5lO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQodGhpcy5nZXROb2RlKHN0YXJ0LnApLCBzdGFydC5vKTtcclxuICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMuZ2V0Tm9kZShlbmQucCksIGVuZC5vKTtcclxuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmVkOnJhbmdlJywgbWFyayk7XHJcbiAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Tm9kZShwb3NpdGlvbikge1xyXG4gICAgY29uc3QgdGV4dE5vZGVQb3NpdGlvbiA9IHBvc2l0aW9uWzBdO1xyXG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgIGwgPSBwb3NpdGlvbi5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUobC0tID4gMSkge1xyXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltwb3NpdGlvbltsXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZS5jaGlsZE5vZGVzW3RleHROb2RlUG9zaXRpb25dO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG5cdHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3Jlc3RvcmU6bWFya3MnOiAncmVzdG9yZScsXHJcbiAgICAgICAgJ2xvc3Q6bWFya3MnOiAnb25GYWlsdXJlJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAncmVzdW1lZDptYXJrZXJzJzogJ3JldHJ5J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IG51bGwsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHJlc3RvcmVkOiAwLFxyXG4gICAgZmFpbGVkOiAwLFxyXG4gICAgZmFpbHVyZVJlcG9ydDoge30sXHJcblxyXG4gICAgcmVzdG9yZShlbnRyaWVzKSB7XHJcbiAgICAgIGlmICghZW50cmllcykgcmV0dXJuO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIGVudHJpZXMgPSBbZW50cmllc107XHJcblxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4gICAgICB0aGlzLmNvdW50ID0gZW50cmllcy5sZW5ndGg7XHJcblxyXG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeS5pbW11dCkgbmV3IEltbXV0UmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICAgIGVsc2UgbmV3IFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICB0aGlzLnJlc3RvcmVkID0gMDtcclxuICAgICAgdGhpcy5mYWlsZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWx1cmVSZXBvcnQgPSB7fTtcclxuICAgIH0sXHJcbiAgICByZXRyeShlbnRyeSkge1xyXG4gICAgICBlbnRyeSA9IGVudHJ5ID8gW2VudHJ5XSA6IHRoaXMuZW50cmllcztcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgdGhpcy5yZXN0b3JlKGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBvbkZhaWx1cmUocmVwb3J0KSB7XHJcbiAgICAgIHRoaXMuZmFpbGVkKys7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gcmVwb3J0KSB0aGlzLmZhaWx1cmVSZXBvcnRbaV0gPSByZXBvcnRbaV07XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBpZiAoKyt0aGlzLnJlc3RvcmVkID09PSB0aGlzLmNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFpbGVkKSB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JhdGlvbicsIHRoaXMuZ2V0UmVwb3J0KCkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJlcG9ydCgpIHtcclxuICAgICAgY29uc3QgcmVwb3J0ID0gdGhpcy5mYWlsdXJlUmVwb3J0O1xyXG4gICAgICBsZXQgbXNnID0gJyc7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gcmVwb3J0KSB7XHJcbiAgICAgICAgbXNnICs9IGAke3JlcG9ydFtpXS5yZWFzb259IDogJHtyZXBvcnRbaV0udGV4dH1cXG5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtc2c7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9TRUxFQ1RJT04ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihub2RlLCBvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCkgdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG5cclxuICAgIGlmIChub2RlIHx8ICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcclxuICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmRlZmluZWQgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZShub2RlKVxyXG4gICAgICAgICAgICAucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdE5vZGVzKHRydWUpXHJcbiAgICAgICAgICAgIC5yZXRyaWV2ZVRleHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3ROb2RlcygpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5hZGp1c3QoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7IHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTsgfSBjYXRjaChlKSB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG5vZGUpIHtcclxuICAgIHRoaXMuc2VsZi5zZWxlY3RBbGxDaGlsZHJlbihub2RlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKHNlbGVjdGlvbikge1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5zZWxmID0gc2VsZWN0aW9uO1xyXG4gICAgZWxzZSBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgbGV0IHByb3BzID0gWydmb2N1c05vZGUnLCAnYW5jaG9yTm9kZScsICdmb2N1c09mZnNldCcsICdhbmNob3JPZmZzZXQnXSxcclxuICAgICAgICBpID0gcHJvcHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHRoaXNbcHJvcHNbaV1dID0gc2VsZWN0aW9uW3Byb3BzW2ldXTtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICB0aGlzLnNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgYWRqdXN0KCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXMgPSB0aGlzLmZvY3VzTm9kZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSkgdGhpcy5yZXZlcnNlKGFuY2hvciwgZm9jdXMpO1xyXG4gICAgZWxzZSB0aGlzLm5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgbm9ybWFsaXplKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG5cclxuICAgICAgICBmaXJzdFRleHROb2RlID0gdGhpcy5ub2Rlc1swXSxcclxuICAgICAgICBsYXN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgaWYgKGZpcnN0VGV4dE5vZGUgIT09IGFuY2hvcilcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQoZmlyc3RUZXh0Tm9kZSwgZmlyc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGZpcnN0VGV4dE5vZGUuZGF0YS50cmltTGVmdCgpLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGxhc3RUZXh0Tm9kZSAhPT0gZm9jdXMpXHJcbiAgICAgIHJhbmdlLnNldEVuZChsYXN0VGV4dE5vZGUsIGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIChsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBsYXN0VGV4dE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGgpKTtcclxuICB9XHJcbiAgY29sbGVjdE5vZGVzKHdob2xlRG9jdW1lbnQpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpO1xyXG4gICAgY29uc3QgZmlsdGVyID0gd2hvbGVEb2N1bWVudCA/XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGYuaXNTZWxlY3RhYmxlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpIDpcclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKTtcclxuXHJcbiAgICBjb25zdCBpdGVyYXRvciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoY29udGFpbmVyLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwge1xyXG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGxldCBub2RlcyA9IFtdLFxyXG4gICAgICAgIHBhcmVudE5vZGVzID0gW10sXHJcblxyXG4gICAgICAgIHRleHROb2RlLCBwYXJlbnQsIGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgd2hpbGUodGV4dE5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSB7XHJcbiAgICAgIG5vZGVzLnB1c2godGV4dE5vZGUpO1xyXG4gICAgfVxyXG4gICAgbm9kZXMgPSB0aGlzLnRyaW1TZWxlY3Rpb24obm9kZXMpO1xyXG4gICAgdGhpcy5ub2RlcyA9IHRoaXMub3B0aW9ucy5wcm9ncmFtbWF0aWNhbGx5ID8gdGhpcy5yZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIDogbm9kZXM7XHJcbiAgICB0aGlzLnBhcmVudE5vZGVzID0gdGhpcy5jb2xsZWN0UGFyZW50Tm9kZXModGhpcy5ub2Rlcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlY29sbGVjdE5vZGVzKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtXcmFwcGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRePVwiJyArIG1hcmsuaWQgKyAnX1wiXScpKTtcclxuICAgIGNvbnN0IG0gPSBtYXJrV3JhcHBlcnMubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV3U2VnbWVudCA9IG1hcmtXcmFwcGVycy5tYXAoZWwgPT4gZWwuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgY29uc3QgcHJldiA9IG1hcmtXcmFwcGVyc1swXS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBjb25zdCBuZXh0ID0gbWFya1dyYXBwZXJzW20tMV0ubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb247XHJcbiAgICBjb25zdCBlbmQgPSBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uO1xyXG5cclxuICAgIGlmIChwcmV2ICYmIHByZXYubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC51bnNoaWZ0KHByZXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnB1c2gobmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgLi4ubmV3U2VnbWVudCk7XHJcbiAgfVxyXG4gIHRyaW1TZWxlY3Rpb24obm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGxldCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGZpcnN0Tm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmFuY2hvck5vZGUgPT09IGZpcnN0Tm9kZSAmJiBmaXJzdE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGggPD0gc2VsZWN0aW9uLmFuY2hvck9mZnNldCkge1xyXG4gICAgICAgIG5vZGVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5mb2N1c05vZGUgPT09IGxhc3ROb2RlICYmIHRoaXMuaXNCbGFuayhsYXN0Tm9kZS5kYXRhLnN1YnN0cigwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKSkge1xyXG4gICAgICAgIG5vZGVzLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIHJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgcmcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZShyZyk7XHJcblxyXG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgIHJnLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICAgIHJldHVybiAhIXNlbC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHRoaXMucmFuZ2UpO1xyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgY29sbGVjdFBhcmVudE5vZGVzKG5vZGVzKSB7XHJcbiAgICBsZXQgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBwYXJlbnRzID0gW10sIGkgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBwYXJlbnRzLnB1c2gobm9kZXNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgfVxyXG4gIHJldHJpZXZlVGV4dCgpIHtcclxuICAgIGxldCByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbm9kZXMgPSB0aGlzLm5vZGVzLFxyXG4gICAgICAgIGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbm9kZVRleHRzID0gW10sXHJcbiAgICAgICAgdGV4dDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgbm9kZVRleHRzLnB1c2gobm9kZXNbaV0uZGF0YSk7XHJcblxyXG4gICAgbCAtPSAxO1xyXG5cclxuICAgIGlmIChub2RlVGV4dHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdGhpcy5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgIC8vbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCB0aGlzLmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRleHQgPSB0aGlzLnRleHQgPSBub2RlVGV4dHMuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIG5vZGUxID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgbm9kZTIgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChub2RlMSA9IG5vZGUxLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUyKSAmIDB4MTApID09PSAweDEwKVxyXG4gICAgICAgICAgcmV0dXJuIG5vZGUxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuICByZXZlcnNlKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCByYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChmb2N1cywgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChhbmNob3IsIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoc2VsZWN0aW9uKS5hZGp1c3Qoc2VsZWN0aW9uLmFuY2hvck5vZGUsIHNlbGVjdGlvbi5mb2N1c05vZGUpO1xyXG4gIH1cclxuICByZWR1Y2VUb09uZVJhbmdlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZUNvdW50ID0gc2VsZWN0aW9uLnJhbmdlQ291bnQsXHJcbiAgICAgICAgcmFuZ2UwID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBsYXN0UmFuZ2U7XHJcblxyXG4gICAgaWYgKHJhbmdlQ291bnQgPCAyKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBsYXN0UmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdChyYW5nZUNvdW50IC0gMSk7XHJcblxyXG4gICAgcmFuZ2UwLnNldFN0YXJ0KHJhbmdlMC5zdGFydENvbnRhaW5lciwgcmFuZ2UwLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlMC5zZXRFbmQobGFzdFJhbmdlLmVuZENvbnRhaW5lciwgbGFzdFJhbmdlLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGhhc05vcm1hbFBhcmVudChub2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YWcgPSBwYXJlbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRhZyAhPT0gJ1NDUklQVCcgJiYgdGFnICE9PSAnU1RZTEUnICYmIHRhZyAhPT0gJ0xJTksnICYmIHRhZyAhPT0gJ01FVEEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0JBU0UnICYmIHRhZyAhPT0gJ1RJVExFJyAmJiB0YWcgIT09ICdOT1NDUklQVCcgJiZcclxuICAgICAgdGFnICE9PSAnSU1HJyAmJiB0YWcgIT09ICdJRlJBTUUnICYmIHRhZyAhPT0gJ0VNQkVEJyAmJiB0YWcgIT09ICdQQVJBTScgJiZcclxuICAgICAgdGFnICE9PSAnVklERU8nICYmIHRhZyAhPT0gJ0FVRElPJyAmJiB0YWcgIT09ICdTT1VSQ0UnICYmIHRhZyAhPT0gJ1RSQUNLJyAmJlxyXG4gICAgICB0YWcgIT09ICdDQU5WQVMnICYmIHRhZyAhPT0gJ01BUCcgJiYgdGFnICE9PSAnQVJFQScgJiZcclxuICAgICAgdGFnICE9PSAnTUFUSCcgJiYgdGFnICE9PSAnT0JKRUNUJyAmJlxyXG4gICAgICAhdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnc3ZnJykgLy8mJlxyXG4gICAgICAvLyF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdtYXRoJylcclxuICAgICk7XHJcbiAgfVxyXG4gIGlzQ2hpbGRPZihub2RlLCBub2RlVHlwZSkge1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5vZGVUeXBlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaXNCbGFuayhub2RlKSB7XHJcbiAgICBsZXQgdGV4dDtcclxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChub2RlICYmIHR5cGVvZiBub2RlLmRhdGEgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZS5kYXRhO1xyXG4gICAgICBlbHNlIHRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dC5zZWFyY2goL1teXFxzXFxuXFxyXFx0XS9nKSA9PT0gLTE7XHJcbiAgfVxyXG4gIGlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcG9zaXRpb24gPSBhbmNob3IuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvc2l0aW9uID09PSAyIHx8XHJcbiAgICAgIHBvc2l0aW9uID09PSAxMCB8fFxyXG4gICAgICAoIXBvc2l0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKTtcclxuICB9XHJcbiAgaXNTaW1wbGUoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvck5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1c05vZGUgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGFuY2hvck5vZGUgPT09IGZvY3VzTm9kZSAmJlxyXG4gICAgICBhbmNob3JOb2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgICghYW5jaG9yTm9kZS5uZXh0U2libGluZyB8fCAoYW5jaG9yTm9kZS5uZXh0U2libGluZy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1c05vZGUpICE9PSA0KSkpO1xyXG4gIH1cclxuICBpc1NlbGVjdGFibGUobm9kZSkge1xyXG4gICAgdGhpcy5yYW5nZS5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgcmV0dXJuICEhdGhpcy5zZWxmLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0ZScsXHJcbiAgICAgICdhZGRlZDpub3RlJzogJ29uTm90ZUFkZGVkJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdvbkxhc3ROb3RlUmVtb3ZlZCcsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtSZW1vdmVkJ1xyXG4gICAgfVxyXG5cdH0sXHJcbiAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgZWw6IG51bGwsXHJcblxyXG4gIGF0dGFjaGVkOiBmYWxzZSxcclxuXHJcbiAgYnV0dG9uczoge1xyXG4gICAgbm90ZXM6IHtcclxuICAgICAgZWw6IG51bGwsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBzaG93bjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBib29rbWFyazoge1xyXG4gICAgICBlbDogbnVsbCxcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJvb2ttYXJrOiBmYWxzZSxcclxuICBub3RlczogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgfSxcclxuICB1cGRhdGVTdGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgdGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgPSBibWljb247XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdub3RlaWNvbicpLnRoZW4obm90ZWljb24gPT4gdGhpcy5idXR0b25zLm5vdGVzLnNob3cgPSBub3RlaWNvbik7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9LFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IHNob3VsZEF0dGFjaCA9XHJcbiAgICAgICh0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyAmJiB0aGlzLmJvb2ttYXJrKSB8fFxyXG4gICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgaWYgKHNob3VsZEF0dGFjaCkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hdHRhY2hlZCAmJiAhc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgIGlmICghdGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG11aScpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgaWYgKGJ0bi5zaG93ICYmICFidG4uc2hvd24gJiYgdGhpc1tiXSkgdGhpcy5hZGRCdXR0b24oYik7XHJcbiAgICAgIGVsc2UgaWYgKGJ0bi5zaG93biAmJiAoIXRoaXNbYl0gfHwgIWJ0bi5zaG93KSkgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWJ1dHRvbnMubm90ZXMuc2hvd24gJiYgIWJ1dHRvbnMuYm9va21hcmsuc2hvd24pIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dGFjaGVkID0gdHJ1ZTtcclxuICB9LFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbnNbYl0uc2hvd24pIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBub3Rlc0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ub3Rlcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVzdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICBub3Rlc0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZXMnKTtcclxuICAgIGJvb2ttYXJrQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2JtX3Njcm9sbCcpO1xyXG4gIH0sXHJcbiAgYWRkQnV0dG9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gYnRuLmhhbmRsZXIgPSB0eXBlID09PSAnbm90ZXMnID9cclxuICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdG11aS5hcHBlbmRDaGlsZChidG4uZWwpO1xyXG4gICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICBidG4uZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcblxyXG4gICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgYnRuLnNob3duID0gZmFsc2U7XHJcblxyXG4gICAgYnRuLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuLmhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgX1NUT1JFLmdldCgndG11aXBvcycpXHJcbiAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgfSxcclxuICBvbk5vdGVBZGRlZCgpIHtcclxuICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uQm9va21hcmtBZGRlZCgpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIG9uQm9va21hcmtSZW1vdmVkKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZXMnKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3Njcm9sbC10by1ib29rbWFyaycpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2luamVjdGlvbicsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjb3B5Om1hcmtzJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nLFxyXG4gICAgICAnbG9va3VwOndvcmQnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcycsXHJcblxyXG4gICAgICAvLyBAUkVTVE9SRVJcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJyxcclxuICBcdFx0J2ZhaWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLFxyXG4gICAgICAnY2FuY2VsZWQ6c2F2ZS1hZnRlci1jYW5jZWxlZC1yZXN0b3JhdGlvbidcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=