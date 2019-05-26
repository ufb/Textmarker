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
      'toggled:sync': 'init',
      'updated:naming-settings': 'updateStatus',
      'updated:hashopt-settings': 'updateStatus',
      'updated:entry-sync': 'setSyncForEntry',
      'updated:entry-name': 'renameEntry',
      'deleted:entry': 'removeEntry',
      'hashchange': 'resume'
    }
  },
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
    key: "get",
    value: function get() {
      var _this3 = this;

      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

      if (this.initializing) {
        return new Promise(function (r) {
          return window.setTimeout(function () {
            return r(_this3.get(field));
          }, 10);
        });
      }

      var meth = this['_get_' + field];
      if (!meth) throw 'field ' + field + ' doesn\'t exist';

      if (!this.initialized) {
        this.initializing = true;
        this.initialized = true;
        return this.init().then(function () {
          _this3.initializing = false;
          return _this3['_get_' + field]();
        });
      }

      return this['_get_' + field]();
    }
  }, {
    key: "_get_storage",
    value: function _get_storage() {
      var _this4 = this;

      return browser.storage.local.get().then(function (localStorage) {
        return browser.storage.sync.get().then(function (syncedStorage) {
          ['version', 'logs'].forEach(function (field) {
            localStorage[field] = localStorage[field] || syncedStorage[field];
          });
          if (_this4.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
          return _this4._get_history().then(function (history) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwidXJsIiwiaGFzaGxlc3NVUkwiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeVNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJyZW5hbWVFbnRyeSIsImVudHJ5Iiwib2xkTmFtZSIsInNldFN5bmNGb3JFbnRyeSIsInN5bmNlZCIsInJlbW92ZUVudHJ5IiwiZGVsZXRlZEVudHJ5IiwiaGFzT3duUHJvcGVydHkiLCJhZGRFbnRyaWVzIiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInNldFBhZ2VQYXJhbXMiLCJ3aW5kb3ciLCJwYXJlbnQiLCJVUkwiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJlbWl0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJib29rbWFyayIsImdldEVsZW1lbnRCeUlkIiwib25FbnRyaWVzRm91bmQiLCJ1cGRhdGVFbnRyeVN0b3JhZ2UiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwidXBkYXRlTmFtZVN0b3JhZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJmaXJzdEVudHJ5IiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvU3RyaW5nIiwiX0JPT0tNQVJLIiwibWFyayIsImFuY2hvciIsIndyYXBwZXJzIiwidyIsImtleURhdGEiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYWN0aXZhdGUiLCJvbiIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGlnaGxpZ2h0IiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0Q29udGVudCIsInNpbGVudCIsImltbXV0YWJsZSIsInNhdmUiLCJyZXF1ZXN0IiwiZ3JhbnRlZCIsInN1YiIsImkxOG4iLCJnZXRNZXNzYWdlIiwicHJvbXB0IiwicmV0cmlldmVFbnRyeSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJjb3B5IiwiZmluZE1hcmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0cmltIiwic3RvcmUiLCJvcmRlciIsIm9yZGVyTWFya3NWaXN1YWxseSIsInJlY3JlYXRlIiwiX1NFTEVDVElPTiIsInByb2dyYW1tYXRpY2FsbHkiLCJvbkZpbmlzaGVkUmVzdG9yYXRpb24iLCJzdWJzdHJpbmciLCJfR0xPQkFMX1NFVFRJTkdTIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJnb3RvTWFyayIsInNvcnRCeUlkIiwic2Nyb2xsVG9Cb29rbWFyayIsImFkZE5vdGUiLCJzYXZlTm90ZSIsImFyZWFfaGlzdG9yeSIsIm1hcmtFbGVtZW50cyIsInBvcyIsImluZGljYXRlTWFyayIsImdvdG9OZXh0TWFyayIsImRpciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0bSIsInRtcyIsInNldFRpbWVvdXQiLCJzZXQiLCJyZW1vdmVCb29rbWFyayIsIm1hcmsxIiwibWFyazIiLCJtMSIsIm0yIiwiYmIxIiwiYmIyIiwidG9wMSIsInRvcDIiLCJtYXAiLCJ3cmFwcGVyczEiLCJ3MSIsImlkMSIsIndyYXBwZXJzMiIsImlkMiIsIncyIiwib25NYXJrZXJLZXkiLCJvbkhvdGtleSIsImNvbGxlY3RNYXJrcyIsImxhc3QiLCJEYXRlIiwiZ2V0VGltZSIsImJvb2ttYXJrZWQiLCJ0aXRsZSIsImNvdW50IiwiZmlyc3QiLCJrRCIsIm9uSGFzaENoYW5nZSIsImNvbG9yIiwiQk9EWSIsIkRPTSIsImNsaWNrIiwia2V5dXAiLCJtb3VzZWRvd24iLCJ0b3VjaHN0YXJ0IiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJtYXJrQ2xpY2tIYW5kbGVyIiwidmlzaWJsZSIsInJlY2VudGx5VXBkYXRlZCIsInNldHRpbmdzTW9kZSIsInQiLCJzaXplIiwiaCIsImRyYWdEWCIsImRyYWdEWSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJhZGp1c3ROb3RlRGF0YU9iamVjdCIsImNyZWF0ZU5vdGVFbGVtZW50IiwiYWRkTGlzdGVuZXJzIiwiYWRkTWFya0xpc3RlbmVycyIsIm5vdGVEYXRhIiwiaGVhZGVyIiwiYWN0aW9ucyIsImRlbCIsImdlYXIiLCJwYWxldHRlIiwidGV4dEVsZW1lbnQiLCJkZWxUZXh0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluVGV4dCIsImdlYXJUZXh0IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJhdHRlbXB0VXBkYXRlIiwiX2RlbGV0ZSIsImhpZGUiLCJyZW1vdmVNYXJrTGlzdGVuZXJzIiwiZm9yY2UiLCJpbm5lcldpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImdldFBvc2l0aW9uIiwib2Zmc2V0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25uZWN0TXV0YXRpb25PYnNlcnZlciIsImJyaW5nVXBGcm9udCIsInpJbmRleCIsImRpc2Nvbm5lY3QiLCJ0b2dnbGUiLCJ0b2dnbGVQYWxldHRlIiwiY2hhbmdlQ29sb3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZXh0YXJlYSIsImNvbmZpZyIsImF0dHJpYnV0ZUZpbHRlciIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsInNhdmVTaXplIiwib2JzZXJ2ZSIsInJlY3QiLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm9uRHJhZ1N0YXJ0IiwicGFnZVgiLCJwYWdlWSIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsIm11dGF0aW9uc0xpc3QiLCJ3aWR0aCIsIm5vdGVzIiwiZHJhZ0hhbmRsZXIiLCJkcmFnU3RvcEhhbmRsZXIiLCJ1cGRhdGVUcmFuc3AiLCJfTk9URSIsInJlc3RvcmUiLCJhZGRBbmRTaG93IiwicmVtb3ZlTm90ZVN0b3JhZ2UiLCJpc0VtcHR5IiwicmVtb3ZlTm90ZSIsInRvZ2dsZUFsbCIsIm1ldGgiLCJjb25kaXRpb24iLCJib2R5Q2xhc3NlcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsInN0YXJ0RHJhZ2dpbmdOb3RlIiwiZW1pdERyYWdFdmVudCIsInN0b3BEcmFnZ2luZ05vdGUiLCJkb2MiLCJzZW5kTm90ZXNTdGF0ZSIsImF1dG9QYXVzZSIsImtleWRvd24iLCJzZWxlY3Rpb25jaGFuZ2UiLCJzaGlmdFNlbnNpdGl2ZUtleXMiLCJrZXlDb2RlTWFwIiwiaXNFZGl0YWJsZSIsInRhZ05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJkZWxlZ2F0ZSIsInRvTG93ZXJDYXNlIiwia2V5Q29kZSIsIm1vZEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJhcnJvd0tleXMiLCJsb2NrZWRBY3Rpb25zIiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJvcmlnS2V5IiwiaXNNYXJrZXJLZXkiLCJpc0N1c3RvbU1hcmtlcktleSIsInNldHRpbmciLCJzaG9ydGN1dCIsInMxIiwiczIiLCJyZXN0b3JlZCIsImZhaWxlZCIsImZhaWx1cmVSZXBvcnQiLCJJbW11dFJlc3RvcmVyIiwiUmVzdG9yZXIiLCJyZXRyeSIsIm9uRmFpbHVyZSIsInJlcG9ydCIsImdldFJlcG9ydCIsIm1zZyIsInJlYXNvbiIsIlJlc3RvcmVyQmFzZSIsImFyZWEiLCJwcm9jIiwiY2IiLCJyZWMiLCJleHBpcmUiLCJsbCIsInRlbXAiLCJxdWV1ZSIsImNhY2hlIiwicGhhc2UiLCJzZWxlY3Rpb25UcmlhbCIsImNodW5rRHVyYXRpb24iLCJfdGltZXIiLCJvb20iLCJpbml0Iiwibm93IiwicG9zdHBvbmVkIiwiY29udmVydERlc2NyaXB0aW9uIiwiY3JlYXRlVGVtcE9iamVjdCIsImNvbnZlcnRlZENvbmRzIiwiZmlyc3ROb2RlTmFtZSIsImZpcnN0UGFyZW50Tm9kZU5hbWUiLCJmaXJzdFRleHROb2RlUG9zaXRpb24iLCJmaXJzdE5vZGVQb3NpdGlvbiIsImZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uIiwiZmlyc3RHcmFtcGFOb2RlUG9zaXRpb24iLCJ0cmltbWVkVGV4dCIsInNxdWVlemVkVGV4dCIsInNxdWVlemUiLCJ0ZXh0TGVuZ3RoIiwidHJpbW1lZFRleHRMZW5ndGgiLCJzcXVlZXplZFRleHRMZW5ndGgiLCJwb3NzaWJsZVBvc2l0aW9ucyIsInBvc3NpYmxlRW5kUG9zaXRpb25zIiwicG9zc2libGVTdGFydE5vZGVzIiwicG9zc2libGVFbmRzIiwicG9zc2libGVGb2N1c09mZnNldHMiLCJzb3J0UXVldWVCeUlkIiwic2V0Qm9keVNlbGVjdGlvbiIsImdldFRleHRQb3NpdGlvbnMiLCJwb3N0cG9uZU92ZXJsYXBwaW5ncyIsImZpbmRQb3NzaWJsZUV4dHJlbWEiLCJydWxlT3V0TXVsdGlwbGVzIiwicmVzdG9yZVJhbmdlcyIsInRpbWVyIiwicmVzIiwidHJpbW1lZFNlbGVjdGlvblRleHQiLCJhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwiZW5kUG9zaXRpb25zIiwibWFya1RlbXAiLCJzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyIsIm1heFBvc2l0aW9uIiwicG9zaXRpb25zIiwicG9zMSIsInBvczIiLCJwb3N0cG9uZSIsImN1dE91dEZvciIsImFscmVhZHlJbmNsdWRlZCIsImJvZHlUZXh0Tm9kZXMiLCJzYXRpc2ZpZWQiLCJjaGFycyIsIm5leHRTdGFydEZvdW5kIiwiZW5kaW5nc0luVGhpc05vZGUiLCJub2Rlc1RleHQiLCJub2Rlc1RleHRMZW5ndGgiLCJkaWZmIiwiZiIsInEiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0Iiwic3RhcnRGb3VuZEZvciIsImhhc0VuZGluZ3NJblRoaXNOb2RlIiwiZW5kRm91bmRGb3IiLCJzYXRpc2ZpZXNEZXNjcmlwdGlvbiIsImZpbmRGb2N1c09mZnNldCIsImdyYW5kZ3JhbmRncmFtcGEiLCJtYXRjaGVzIiwic3RhcnROb2RlIiwic3RhcnROb2RlUG9zaXRpb24iLCJzZXRNYXRjaGluZ0VuZCIsImVuZE5vZGUiLCJlbmROb2RlUG9zaXRpb24iLCJmb2N1c09mZnNldCIsImRlc2NyaXB0aW9uIiwicmVsZXZhbnROb2RlVGV4dCIsIm1hcmtUZXh0IiwidGV4dHNNYXRjaCIsIm5vZGVUZXh0IiwiY291bnRlciIsInRlc3QiLCJjcmVhdGVSYW5nZSIsInJlY29sbGVjdE5vZGVzIiwic2xpY2UiLCJjb250ZXh0IiwiY3VycmVudENoaWxkIiwicHJvY2Vzc0luQ2h1bmtzIiwicmVzdG9yZVJhbmdlIiwiZ2V0Tm9kZSIsInRleHROb2RlUG9zaXRpb24iLCJyYW5nZUNvdW50IiwiZGVmaW5lZCIsInJlZHVjZVRvT25lUmFuZ2UiLCJyZXRyaWV2ZVRleHQiLCJhZGp1c3QiLCJzZWxlY3RBbGxDaGlsZHJlbiIsInByb3BzIiwiaXNTaW1wbGUiLCJmb2N1cyIsImlzQmFja3dhcmRzIiwicmV2ZXJzZSIsImZpcnN0VGV4dE5vZGUiLCJsYXN0VGV4dE5vZGUiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsIndob2xlRG9jdW1lbnQiLCJnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lciIsImZpbHRlciIsImlzU2VsZWN0YWJsZSIsImlzQmxhbmsiLCJoYXNOb3JtYWxQYXJlbnQiLCJjb250YWluc05vZGUiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJ0cmltU2VsZWN0aW9uIiwicmVkdWNlVG9TZWxlY3RhYmxlIiwiY29sbGVjdFBhcmVudE5vZGVzIiwibWFya1dyYXBwZXJzIiwibmV3U2VnbWVudCIsInByZXYiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJ1bnNoaWZ0IiwiYW5jaG9yT2Zmc2V0Iiwic3Vic3RyIiwic2VsIiwicmciLCJzZWxlY3ROb2RlIiwicGFyZW50cyIsIm5vZGVUZXh0cyIsImpvaW4iLCJub2RlMSIsIm5vZGUyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJyYW5nZTAiLCJsYXN0UmFuZ2UiLCJ0YWciLCJ0b1VwcGVyQ2FzZSIsImlzQ2hpbGRPZiIsInNlYXJjaCIsImF0dGFjaGVkIiwiYnV0dG9ucyIsInNob3duIiwiY3JlYXRlQnV0dG9ucyIsInVwZGF0ZVN0YXRlIiwic2hvdWxkQXR0YWNoIiwicmVuZGVyIiwiYnRuIiwiYiIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInVwZGF0ZVBvc2l0aW9uIiwidG11aSIsIm5vdGVzQnV0dG9uIiwiYm9va21hcmtCdXR0b24iLCJ0eXBlIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJPTkVPRkYiLCJ2ZXJzaW9uIiwicnVudGltZSIsImdldE1hbmlmZXN0IiwieiIsInkiLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiZG93bmxvYWQiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJhdXRvY3MiLCJvdmVyd3JpdGUiLCJmYWlsdXJlTm90ZSIsInN1Y2Nlc3NOb3RlIiwicGJtTm90ZSIsImNoYW5nZWROb3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsImN1c3RvbVNlYXJjaCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsImxpbmtzIiwidGhlbWVzIiwidGhlbWUiLCJwYWdlbm90ZXMiLCJzeW5jIiwiTUFYX0xPR19FTlRSSUVTIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInZhbCIsInByb3AiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJhcmdzIiwidG9waWMiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJsYXN0QXJnIiwidGFiIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX3BhZ2Vub3RlcyIsImxvY2FsIiwic2V0QXJlYXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFH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QjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBbEd5QnpxQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ2luaXQnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGFzaG9wdC1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJzogJ3NldFN5bmNGb3JFbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnOiAncmVuYW1lRW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cmw6ICcnLFxyXG4gIGhhc2hsZXNzVVJMOiAnJyxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47Ly9zaG93IG5vdGlmaWNhdGlvblxyXG5cclxuICAgIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZW5hbWVFbnRyeShlbnRyeSwgb2xkTmFtZSkge1xyXG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUgPT09IG9sZE5hbWUgJiYgIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIGlmICh0aGlzLmVudHJpZXNbb2xkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0U3luY0ZvckVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkICYmIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSkge1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0uc3luY2VkID0gZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUVudHJ5KGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICBpZiAoZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lID09PSBkZWxldGVkRW50cnkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICBhZGRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQpIHRoaXMubmFtZSA9IGVudHJpZXNbMF0ubmFtZTtcclxuICAgIGNvbnN0IGUgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZW50cmllc1swXS5pbW11dDtcclxuICB9LFxyXG5cclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdG11aSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyLXBvcHVwJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9hdXRvLW1hcmtlcidcclxuXHJcbmltcG9ydCAnLi9tYWluJ1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5pbXBvcnQgX1JFU1RPUkVSIGZyb20gJy4vbW9kdWxlcy9yZXN0b3JlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlRW50cnlTdG9yYWdlJyxcclxuICAgICAgJ3Jlc3VtZWQtb24taGFzaGNoYW5nZSc6ICdzZXRQYWdlUGFyYW1zJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmRQYWdlU3RhdGUnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ2FjdGl2YXRlUmV0cnknLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcblxyXG4gICAgICAvLyBAUkVTVE9SRVJcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnOiAnb25FbnRyaWVzRm91bmQnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmV0cnlBY3RpdmU6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuc2V0UGFnZVBhcmFtcygpO1xyXG4gIH0sXHJcblxyXG4gIHNldFBhZ2VQYXJhbXMoKSB7XHJcbiAgICBfU1RPUkUuaWZyYW1lID0gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIF9TVE9SRS51cmwgPSB3aW5kb3cuZG9jdW1lbnQuVVJMO1xyXG4gICAgX1NUT1JFLmhhc2hsZXNzVVJMID0gX0hBU0hMRVNTKF9TVE9SRS51cmwpO1xyXG4gIH0sXHJcbiAgb25TYXZlZEVudHJ5KGVudHJ5KSB7XHJcbiAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAoZW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLmFkZEVudHJpZXMoW2VudHJ5XSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IHRydWU7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICB0aGlzLnJldHJ5QWN0aXZlID0gZmFsc2U7XHJcbiAgfSxcclxuICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgncGFnZS1zdGF0ZScsIHtcclxuICAgICAgc2VsZWN0aW9uOiAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkLFxyXG4gICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgcmV0cnlBY3RpdmU6IHRoaXMucmV0cnlBY3RpdmVcclxuICAgIH0sIGluZm8pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEBSRVNUT1JFUlxyXG4gIG9uRW50cmllc0ZvdW5kKGluZm8pIHtcclxuICAgIF9SRVNUT1JFUigpO1xyXG4gICAgdGhpcy51cGRhdGVFbnRyeVN0b3JhZ2UoaW5mby5lbnRyaWVzKTtcclxuICAgIGlmIChpbmZvLnJlY2VudGx5T3BlbmVkRW50cnkpIHRoaXMudXBkYXRlTmFtZVN0b3JhZ2UoaW5mby5lbnRyaWVzLCBpbmZvLnJlY2VudGx5T3BlbmVkRW50cnkpO1xyXG4gICAgdGhpcy5lbWl0KCdyZXN0b3JlOm1hcmtzJywgaW5mby5lbnRyaWVzKTtcclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5U3RvcmFnZShlbnRyaWVzKSB7XHJcbiAgICBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc107XHJcbiAgICBfU1RPUkUuYWRkRW50cmllcyhlbnRyaWVzKTtcclxuICAgIHRoaXMuZW1pdCgnc2V0OmVudHJpZXMnLCBlbnRyaWVzKTtcclxuICB9LFxyXG4gIHVwZGF0ZU5hbWVTdG9yYWdlKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFmaXJzdEVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcic6ICdzZXRNYXJrZXInXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBtYXJrZXI6ICdtJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldE1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMubWFya2VyID0ga2V5O1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiB0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNldXAuYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbk1vdXNldXAoKSB7XHJcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgdGhpcy5tYXJrZXIpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQk9PS01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFyayA9IG51bGw7XHJcbiAgICB0aGlzLmFuY2hvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQobWFyaykge1xyXG4gICAgbWFyayA9IG1hcmsgfHwgdGhpcy5tYXJrO1xyXG5cclxuICAgIGxldCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuICAgICAgICBhbmNob3IgPSB3cmFwcGVyc1swXTtcclxuXHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgYW5jaG9yLmlkID0gJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJztcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcblxyXG4gICAgdGhpcy5tYXJrID0gbWFyaztcclxuICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZW1vdmUoKSB7XHJcbiAgICBsZXQgbWFyayA9IHRoaXMubWFyayxcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvcixcclxuICAgICAgICB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aDtcclxuXHJcbiAgICBhbmNob3IuaWQgPSAnJztcclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuICB9XHJcbiAgc2Nyb2xsSW50b1ZpZXcoYm0pIHtcclxuICAgIGlmIChibSB8fCAoYm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJykpKVxyXG4gICAgICBibS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKHRydWUpO1xyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlKG9uKSB7XHJcbiAgICBpZiAob24gJiYgIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVnaXN0ZXJIYW5kbGVyKCkge1xyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpIHtcclxuICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgX1NUT1JFLnRtaWQgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSwgd2luZG93LmRvY3VtZW50KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXJrZXIsIGtleSwgcHJlU2V0dGluZ3MsIGltbXV0KSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uLCBkZWZhdWx0cztcclxuXHJcblx0XHR0aGlzLm1hcmtlciA9IG1hcmtlcjtcclxuXHRcdHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbWFya2VyLnNlbGVjdGlvbjtcclxuICAgIHRoaXMuaW1tdXQgPSBfU1RPUkUucmVkZXNjcmliaW5nID8gbWFya2VyLmlzSW1tdXQgOiBpbW11dDtcclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICAgIGNvbmRzOiBudWxsLFxyXG4gICAgICB0ZXh0OiBzZWxlY3Rpb24udGV4dCxcclxuICAgICAgbm90ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGQgaW4gZGVmYXVsdHMpIHtcclxuICAgICAgaWYgKCFwcmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShkKSkge1xyXG4gICAgICAgIHByZVNldHRpbmdzW2RdID0gZGVmYXVsdHNbZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZVNldHRpbmdzLmlkID0gcHJlU2V0dGluZ3MuaWQgfHwgKyttYXJrZXIuaWRjb3VudDtcclxuXHRcdHRoaXMuaWQgPSBwcmVTZXR0aW5ncy5pZDtcclxuXHRcdHRoaXMuc2ltcGxlID0gc2VsZWN0aW9uLnNpbXBsZTtcclxuXHJcblx0XHRsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLnJhbmdlO1xyXG5cclxuXHRcdHRoaXMuc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldDtcclxuXHRcdHRoaXMuZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0O1xyXG5cclxuXHRcdHRoaXMud3JhcHBlcnMgPSBudWxsO1xyXG4gICAgdGhpcy5jb250YWluZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhID0ge1xyXG5cdFx0XHRpZDogcHJlU2V0dGluZ3MuaWQsXHJcblx0XHRcdGtleToga2V5LFxyXG5cdFx0XHRzdHlsZTogcHJlU2V0dGluZ3Muc3R5bGUsXHJcblx0XHRcdGNvbmRzOiBwcmVTZXR0aW5ncy5jb25kcyxcclxuXHRcdFx0dGV4dDogcHJlU2V0dGluZ3MudGV4dCxcclxuXHRcdFx0Ym9va21hcms6IHByZVNldHRpbmdzLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiBwcmVTZXR0aW5ncy5ub3RlLFxyXG4gICAgICBzeW5jZWQ6IHByZVNldHRpbmdzLnN5bmNlZFxyXG5cdFx0fTtcclxuXHJcbiAgICBpZiAodGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkge1xyXG4gICAgICB0aGlzLmRlc2NyaWJlX2ltbXV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHRjcmVhdGUocmFuZ2UpIHtcclxuICAgIHJhbmdlID0gcmFuZ2UgfHwgdGhpcy5yYW5nZTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBzdHlsZSA9IHRoaXMua2V5RGF0YS5zdHlsZSxcclxuICAgICAgICBub2RlcyA9IHNlbGVjdGlvbi5ub2RlcyxcclxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgfHwgdGhpcy5jcmVhdGVXcmFwcGVycyhzdHlsZSwgbiksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbGFzdEluZGV4ID0gbiAtIDEsXHJcbiAgICAgICAgbm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgICAgaWYgKCFpKSByYW5nZS5zZXRTdGFydChub2RlLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuXHJcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcnNbaV0pO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh3cmFwcGVyc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKHRoaXMua2V5RGF0YS5ib29rbWFyaykgdGhpcy5tYXJrZXIuc2V0Qm9va21hcmsodGhpcywgZmFsc2UpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkgdGhpcy5kZXNjcmliZSgpO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJDbGlja0xpc3RlbmVycygpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuICByZWdpc3RlckNsaWNrTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgZm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrZXIucHJveHkodGhpcywgdGhpcy5vbkNsaWNrKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNsaWNrKGUpIHtcclxuICAgIGxldCBldmVudDtcclxuICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICBldmVudCA9ICdjbGlja2VkOm1hcmsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlICsgJ18wJztcclxuICAgICAgZXZlbnQgPSAnYWN0aXZhdGVkOm1hcmsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXJrZXIuZW1pdChldmVudCwge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgYm9va21hcms6ICEhdGhpcy5rZXlEYXRhLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiAhIXRoaXMua2V5RGF0YS5ub3RlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVmaW5lUG9zaXRpb24obiwgaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgbGV0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIG4gPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogd3JhcHBlcnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGZpcnN0V3JhcHBlciA9IHdyYXBwZXJzWzBdO1xyXG4gICAgY29uc3QgbGFzdFdyYXBwZXIgPSB3cmFwcGVyc1tuXTtcclxuICAgIGNvbnN0IGZpcnN0UGFyZW50ID0gZmlyc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBsYXN0UGFyZW50ID0gbGFzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGxldCBhbmNob3JQcmV2LCBmb2N1c1ByZXY7XHJcblxyXG4gICAgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQoZmlyc3RQYXJlbnQsIGZpcnN0V3JhcHBlciwgdHJ1ZSkgLSAxO1xyXG4gICAgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChsYXN0UGFyZW50LCBsYXN0V3JhcHBlciwgdHJ1ZSk7XHJcblxyXG4gICAgYW5jaG9yUHJldiA9IGZpcnN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBmb2N1c1ByZXYgPSBsYXN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcblxyXG4gICAgaWYgKGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5ub2RlVHlwZSA9PT0gMSkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gKz0gMTtcclxuICAgIGlmICghZm9jdXNQcmV2IHx8IGZvY3VzUHJldi5ub2RlVHlwZSA9PT0gMyB8fCBmaXJzdFBhcmVudCA9PT0gbGFzdFBhcmVudCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiAtPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA8IDApIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gMDtcclxuICAgIGlmICh0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgaWYgKGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgICAgdGhpcy5zdGFydE9mZnNldCA9IGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5kYXRhID8gYW5jaG9yUHJldi5kYXRhLmxlbmd0aCA6IDA7XHJcbiAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdGhpcy5zaW1wbGUgPyB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5rZXlEYXRhLnRleHQubGVuZ3RoIDogdGhpcy5lbmRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbih1bmRlZmluZWQsIHRydWUpXHJcbiAgICAgICAgLmRlc2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cdHVuZG8oKSB7XHJcblx0XHRsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuXHRcdFx0XHR3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMsXHJcblx0XHRcdFx0dyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuXHRcdFx0XHRjb250YWluZXIsIHdyYXBwZXI7XHJcblxyXG5cdFx0d2hpbGUgKHctLSkge1xyXG5cdFx0XHRjb250YWluZXIgPSBjb250YWluZXJzW3ddO1xyXG5cdFx0XHR3cmFwcGVyID0gd3JhcHBlcnNbd107XHJcblx0XHRcdGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcclxuXHRcdFx0Y29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHJlZG8oKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChjb250YWluZXJzWzBdLmNoaWxkTm9kZXNbdGhpcy5hbmNob3JOb2RlUG9zaXRpb25dLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV0uY2hpbGROb2Rlc1t0aGlzLmZvY3VzTm9kZVBvc2l0aW9uXSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24uY29sbGVjdE5vZGVzKCk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKCk7XHJcblx0fVxyXG5cdHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgaW5jbHVkaW5nVGV4dE5vZGVzKSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdGxldCBjaGlsZHJlbiA9IGluY2x1ZGluZ1RleHROb2RlcyB8fCBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0XHRcdGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHRjcmVhdGVXcmFwcGVycyhzdHlsZSwgbnVtYmVyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICB3cmFwcGVyO1xyXG5cclxuXHRcdGZvciAoIDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcblx0XHRcdHdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0Jyk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UoLzsvZywgJyFpbXBvcnRhbnQ7JykpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcsIHRoaXMuaWQgKyAnXycgKyBpKTtcclxuICAgICAgLy93cmFwcGVyLnNldEF0dHJpYnV0ZSgnY29udGV4dG1lbnUnLCAndGV4dG1hcmtlci1jdG0nKTtcclxuXHRcdFx0d3JhcHBlcnMucHVzaCh3cmFwcGVyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3cmFwcGVycztcclxuXHR9XHJcbiAgZGVzY3JpYmUoKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XHJcblx0XHRjb25zdCBlbmQgPSByYW5nZS5lbmRDb250YWluZXI7XHJcblx0XHRjb25zdCBzaW5nbGVOb2RlID0gdGhpcy5zaW1wbGU7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLndyYXBwZXJzWzBdLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBwYXJlbnRJc1RNID0gcGFyZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG5cdFx0Y29uc3QgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBncmFuZGdyYW1wYSA9IGdyYW1wYS5wYXJlbnROb2RlIHx8IDA7XHJcblx0XHRjb25zdCBmVE5QID0gdGhpcy5hbmNob3JOb2RlUG9zaXRpb247XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG5cdFx0XHRvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG5cdFx0XHRuMTogcGFyZW50SXNUTSA/ICdUTScgOiBwYXJlbnQubm9kZU5hbWUsXHJcblx0XHRcdHAxOiBmVE5QLFxyXG5cdFx0XHRuMjogZ3JhbXBhLm5vZGVOYW1lLFxyXG5cdFx0XHRwMjogdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSxcclxuXHRcdFx0cDM6IGdyYW5kZ3JhbXBhID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLCBncmFtcGEpIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRwNDogZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYS5wYXJlbnROb2RlLCBncmFuZGdyYW1wYSkgOiB1bmRlZmluZWRcclxuXHRcdH07XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG5cdH1cclxuICBkZXNjcmliZV9pbW11dCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgZW5kUG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGxldCBzdGFydCA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGVuZCA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBib2R5KSB7XHJcbiAgICAgIHN0YXJ0UG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoc3RhcnQucGFyZW50Tm9kZSwgc3RhcnQpKTtcclxuICAgICAgc3RhcnQgPSBzdGFydC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGVuZCAhPT0gYm9keSkge1xyXG4gICAgICBlbmRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChlbmQucGFyZW50Tm9kZSwgZW5kKSk7XHJcbiAgICAgIGVuZCA9IGVuZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgcDogc3RhcnRQb3NpdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBlOiB7XHJcbiAgICAgICAgbzogdGhpcy5lbmRPZmZzZXQsXHJcbiAgICAgICAgcDogZW5kUG9zaXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBhcHBlbmRlZDogZmFsc2UsXHJcbiAgaGVpZ2h0OiAwLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdwb3B1cCc7XHJcbiAgICAgIHRoaXMubWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwJyk7XHJcbiAgICBjb25zdCBiZ0NvbG9yUmVnRXhwID0gL2JhY2tncm91bmQtY29sb3I6KCNbYS1mMC05XXs2fSkvO1xyXG4gICAgbGV0IGJnQ29sb3IsIGNvbG9yQnRuO1xyXG4gICAgZm9yIChsZXQgbSBpbiB0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgYmdDb2xvciA9IHRoaXMubWFya2Vyc1ttXS5zdHlsZS5tYXRjaChiZ0NvbG9yUmVnRXhwKTtcclxuICAgICAgaWYgKGJnQ29sb3IpIHtcclxuICAgICAgICBjb2xvckJ0biA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwY29sb3InKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChjb2xvckJ0bik7XHJcbiAgICAgICAgY29sb3JCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3IucG9wKCk7XHJcbiAgICAgICAgY29sb3JCdG4uaWQgPSAndG1wb3B1cGNvbG9yLS0nICsgbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3coKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBzdHlsZSA9IHBvcHVwLnN0eWxlO1xyXG4gICAgbGV0IHBvcHVwSGVpZ2h0O1xyXG5cclxuICAgIGlmICghdGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5hcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gc2VsZWN0aW9uUG9zaXRpb24udG9wIC0gc2VsZWN0aW9uUG9zaXRpb24uaGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgKyAncHgnO1xyXG4gICAgICBzdHlsZS5sZWZ0ID0gc2VsZWN0aW9uUG9zaXRpb24ubGVmdCArIHdpbmRvdy5zY3JvbGxYICsgJ3B4JztcclxuXHJcbiAgICAgIHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSAtIHBvcHVwSGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKChwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodCkgIT09IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgIHN0eWxlLnRvcCA9IHBhcnNlSW50KHN0eWxlLnRvcCkgKyBwb3B1cEhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuICAgIHRoaXMuaGVpZ2h0ID0gcG9wdXBIZWlnaHQ7XHJcbiAgfSxcclxuICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIGlmICghc2VsZWN0ZWQpIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbk1vdXNlZG93bihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ1RNUE9QVVBDT0xPUicpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBvcHVwLW1hcmtlcicsIGVsLmlkLnNwbGl0KCctLScpLnBvcCgpKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSSyBmcm9tICcuL21hcmstaXRlbSdcclxuaW1wb3J0IF9CT09LTUFSSyBmcm9tICcuL2Jvb2ttYXJrJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuXHRcdEVOVjoge1xyXG5cdFx0XHQnc2V0OmVudHJpZXMnOiAndXBkYXRlSUQnLFxyXG5cdFx0XHQncHJlc3NlZDptYXJrZXIta2V5JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3ByZXNzZWQ6aG90a2V5JzogJ29uSG90a2V5JyxcclxuICAgICAgJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3NlbGVjdGlvbi1lbmQnOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAncmVzdG9yZWQ6cmFuZ2UnOiAncmVjcmVhdGUnLFxyXG4gICAgICAnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucyc6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY3R4OmInOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAnY3R4Oi1iJzogJ3JlbW92ZUJvb2ttYXJrJyxcclxuICAgICAgJ2N0eDpkJzogJ3JlbW92ZScsXHJcbiAgICAgICdjdHg6bSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdjdHg6bic6ICdhZGROb3RlJyxcclxuICAgICAgJ2N0eDpjJzogJ2NvcHknLFxyXG4gICAgICAndXBkYXRlZDpub3RlJzogJ3NhdmVOb3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdjaGFuZ2VkOm5vdGUtY29sb3InOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnY2hhbmdlZDpub3RlLXBvcyc6ICdzYXZlTm90ZScsXHJcbiAgICAgICdjaGFuZ2VkOm5vdGUtc2l6ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdzaWRlYmFyOmhpZ2hsaWdodCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnOiAncmVtb3ZlJyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJzogJ2FkZE5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCc6ICdpbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcyc6ICdzYXZlJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nOiAncmVzdW1lJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbyc6ICd1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbyc6ICdyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weSc6ICdjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAnc2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnOiAnb25IYXNoQ2hhbmdlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2VsZWN0aW9uOiBudWxsLFxyXG5cdGRvbmU6IFtdLFxyXG5cdHVuZG9uZTogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya3M6IFtdLFxyXG5cdHZpc3VhbGx5T3JkZXJlZE1hcmtJRHM6IFtdLFxyXG4gIGJvb2ttYXJrOiBudWxsLFxyXG4gIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRpZGNvdW50OiAwLFxyXG5cdG1hcmtTY3JvbGxQb3M6IC0xLFxyXG5cclxuICB1cGRhdGVJRChlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBsID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgY29uc3QgaWRzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcblxyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcblxyXG4gICAgICBpZiAoIWxvY2tlZCAmJiBlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRjb3VudCA9IGVudHJ5LmlkY291bnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1hcmtzID0gKGVudHJ5Lm1hcmtzIHx8IFtdKS5jb25jYXQoZW50cnkubG9zdCB8fCBbXSksXHJcbiAgICAgICAgICAgIGQgPSBtYXJrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICB3aGlsZSAoZC0tKSB7XHJcbiAgICAgICAgICAgIGlkcy5wdXNoKG1hcmtzW2RdLmlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaWRjb3VudCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGlkcyk7XHJcbiAgfSxcclxuXHRtYXJrKGtleSwgZGF0YSwgaW1tdXQpIHtcclxuXHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IG5ldyBfTUFSSyh0aGlzLCBrZXksIGRhdGEsIGltbXV0KS5jcmVhdGUoKTtcclxuXHJcbiAgICBpZiAoZGF0YS5hdXRvbm90ZSkgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIG1hcmssIGRhdGEuYXV0b25vdGUpO1xyXG5cclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcblx0dW5kbyhub0F1dG9zYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lO1xyXG5cclxuXHRcdGlmIChkb25lLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lLnBvcCgpO1xyXG4gICAgICBjb25zdCBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICB0aGlzLnVuZG9uZS5wdXNoKG1hcmsudW5kbygpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmJvb2ttYXJrKSB0aGlzLnVuZG9Cb29rbWFyaygpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0fSxcclxuXHRyZWRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHVuZG9uZSA9IHRoaXMudW5kb25lO1xyXG5cclxuXHRcdGlmICh1bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgIHRoaXMuZG9uZS5wdXNoKG1hcmsucmVkbygpKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIFttYXJrXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0fSxcclxuICBjdXRPdXQoaSkge1xyXG4gICAgbGV0IG1hcmtlciA9IHRoaXMsXHJcbiAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgdG9CZVJlbW92ZWQgPSBbaV0sXHJcbiAgICAgICAgaW5kaWNlcyA9IFtpXSxcclxuICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGopIHtcclxuICAgICAgZm9yICh2YXIgeCA9IGogKyAxOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIubWFya3NJbnRlcnNlY3QoZG9uZVtqXSwgbWFyaykpIHtcclxuICAgICAgICAgIGlmICghdG9CZVJlbW92ZWQuaW5jbHVkZXMoeCkpIHRvQmVSZW1vdmVkLnB1c2goeCk7XHJcbiAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICB0b0JlUmVtb3ZlZC5zb3J0KCk7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3MoaW5kaWNlcy5zaGlmdCgpKTtcclxuICAgIH1cclxuICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgd2hpbGUgKHRvQmVSZW1vdmVkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmRvbmUuc3BsaWNlKHRvQmVSZW1vdmVkLnBvcCgpLCAxKVswXS51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzbWFsbGVzdElEO1xyXG4gIH0sXHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGlkID0gaWQgPyBpZCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcbiAgICBpZiAoIWlkKSByZXR1cm4gdGhpcy51bmRvKCk7XHJcblxyXG4gICAgbGV0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQuc3BsaXQoJ18nKVswXSksXHJcbiAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgcG9zaXRpb24gPSBkb25lLmluZGV4T2YobWFyayksXHJcbiAgICAgICAgc21hbGxlc3RJRCwgaTtcclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT09IGwgLSAxKSB7XHJcbiAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLnVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBzbWFsbGVzdElEID0gdGhpcy5jdXRPdXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpID0gdGhpcy51bmRvbmUubGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy51bmRvbmUubGVuZ3RoKSB0aGlzLnJlZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGktLSkgdGhpcy51bmRvKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWRbMF0pO1xyXG4gIH0sXHJcbiAgcmVzdW1lKGFyZywgb3B0aW9ucykge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKVxyXG4gICAgICAuZm9yRWFjaChoaWdobGlnaHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhpZ2hsaWdodC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGlnaGxpZ2h0LnRleHRDb250ZW50KSwgaGlnaGxpZ2h0KTtcclxuICAgICAgICBjb250YWluZXIubm9ybWFsaXplKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy51bmRvbmUgPSBbXTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBbXTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IFtdO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSAtMTtcclxuXHJcbiAgICBjb25zdCBlbnRyeSA9ICFhcmcgJiYgX1NUT1JFLm5hbWUgJiYgX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdID8gX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdIDogbnVsbDtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ3Jlc3VtZWQ6bWFya2VycycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGltbXV0KGltbXV0YWJsZSkge1xyXG4gICAgdGhpcy5pc0ltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IHRydWU7XHJcbiAgICBfU1RPUkUuaW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gIH0sXHJcbiAgc2F2ZSgpIHtcclxuICAgIGNvbnN0IGlmcmFtZSA9IF9TVE9SRS5pZnJhbWU7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICBpZiAoIWxvY2tlZCAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoJ25hbWU6ZW50cnk/JykudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICBfU1RPUkUubmFtZSA9IHdpbmRvdy5wcm9tcHQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2UnLCBzdWIpKTtcclxuICAgICAgICAgICAgICBpZiAoX1NUT1JFLm5hbWUpIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgY29uZmlybWVkID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChpZnJhbWUpIGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpKTtcclxuICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHR9LFxyXG4gIGF1dG9zYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgaWYgKGF1dG9zYXZlKSB0aGlzLnNhdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ3Vuc2F2ZWQtY2hhbmdlcycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjb3B5KCkge1xyXG4gICAgY29uc3QgbWFyayA9IHRoaXMuZmluZE1hcmsoKTtcclxuICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBtYXJrLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbWFyay5zZWxlY3Rpb24uc2VsZjtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycztcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydCh3cmFwcGVyc1swXSwgMCk7XHJcbiAgICByYW5nZS5zZXRFbmQod3JhcHBlcnNbd3JhcHBlcnMubGVuZ3RoIC0gMV0sIDEpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGlvbi50b1N0cmluZygpLnRyaW0oKS5yZXBsYWNlKC8oXFxyXFxuKXsxLH0vZywgJ1xcclxcbicpKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuICB9LFxyXG4gIHN0b3JlKG1hcmssIHNhdmUsIG9yZGVyKSB7XHJcblx0XHR0aGlzLmRvbmUucHVzaChtYXJrKTtcclxuICAgIGlmIChzYXZlICE9PSBmYWxzZSkgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0aWYgKG9yZGVyKSB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cdH0sXHJcbiAgcmVjcmVhdGUobWFyaykge1xyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihudWxsLCB7IHByb2dyYW1tYXRpY2FsbHk6IHRydWUgfSk7XHJcbiAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgfSxcclxuICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIHRoaXMuZG9uZSk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChfU1RPUkUubmFtZSA9PT0gbWFyay5rZXlEYXRhLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkpIHtcclxuICAgICAgICB0aGlzLmdvdG9NYXJrKG1hcmspO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLnJlZGVzY3JpYmluZykge1xyXG4gICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkTm90ZShpZCkge1xyXG4gICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICB9LFxyXG4gIHNhdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAoIV9TVE9SRS5sb2NrZWQpIHJldHVybiB0aGlzLmF1dG9zYXZlKCk7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IHRoaXMuZ2V0QnlJZChpZCkua2V5RGF0YTtcclxuICAgIGNvbnN0IHN5bmNlZCA9IHR5cGVvZiBtYXJrLnN5bmNlZCA9PT0gJ2Jvb2xlYW4nID8gbWFyay5zeW5jZWQgOiBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgIG1hcmtzOiBbbWFya10sXHJcbiAgICAgIG5hbWU6IG1hcmsudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSxcclxuICAgICAgc3luY2VkXHJcbiAgICB9O1xyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgZW50cnkpO1xyXG4gIH0sXHJcbiAgZ290b01hcmsobWFyaykge1xyXG4gICAgY29uc3QgbWFya0VsZW1lbnRzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcztcclxuICAgIGxldCBlbCwgcG9zLCBpZDtcclxuICAgIGlmIChtYXJrIHx8IG1hcmsgPT09IDApIHtcclxuICAgICAgaWYgKHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IG1hcmsgKyAxO1xyXG4gICAgICAgIGVsID0gbWFya0VsZW1lbnRzW21hcmtdO1xyXG4gICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZD1cIicgKyBpZCArICdfMFwiXScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3MgPSB0aGlzLm1hcmtTY3JvbGxQb3M7XHJcbiAgICAgIGVsID0gbWFya0VsZW1lbnRzW3Bvc107XHJcbiAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG5cclxuXHRcdGlmICghbWFyayB8fCB0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHRoaXMuZ2V0QnlJZChpZCkub25DbGljayhpZCk7XHJcbiAgICB0aGlzLmluZGljYXRlTWFyayhpZCk7XHJcbiAgfSxcclxuXHRnb3RvTmV4dE1hcmsoZGlyKSB7XHJcblx0XHRjb25zdCBsID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5sZW5ndGg7XHJcblxyXG5cdFx0dGhpcy5tYXJrU2Nyb2xsUG9zICs9IGRpcjtcclxuXHJcblx0XHRpZiAodGhpcy5tYXJrU2Nyb2xsUG9zIDwgMCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbCAtIDE7XHJcblx0XHRlbHNlIGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPj0gbCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gMDtcclxuXHJcblx0XHR0aGlzLmdvdG9NYXJrKCk7XHJcblx0fSxcclxuICBpbmRpY2F0ZU1hcmsoaWQpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSlcclxuICAgICAgLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICBjb25zdCB0bXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkXj1cIicgKyBpZCArICdfXCJdJykpO1xyXG5cclxuICAgIHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKSwgMjAwMCk7XHJcbiAgfSxcclxuICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcmssXHJcbiAgICAgICAgbWFyayA9IHRoaXMuZmluZE1hcmsobSk7XHJcblxyXG4gICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGJvb2ttYXJrKSB7XHJcbiAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbmV3IF9CT09LTUFSSygpLnNldChtYXJrKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2FkZGVkOmJvb2ttYXJrJyk7XHJcbiAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHVuZG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgfSxcclxuICByZW1vdmVCb29rbWFyaygpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoIWJvb2ttYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gYm9va21hcms7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgIGlmIChib29rbWFyaykgYm9va21hcmsuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9LFxyXG4gIGdldEJ5SWQoaWQsIHBvcykge1xyXG5cdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmUsXHJcblx0XHRcdCAgZCA9IGRvbmUubGVuZ3RoLFxyXG5cdFx0XHQgIG1hcms7XHJcblxyXG5cdFx0d2hpbGUgKGQtLSkge1xyXG5cdFx0XHRtYXJrID0gZG9uZVtkXTtcclxuXHJcblx0XHRcdGlmIChtYXJrLmtleURhdGEuaWQgPT0gaWQpXHJcblx0XHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbWFyaywgcG9zaXRpb246IGQgfSA6IG1hcms7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBudWxsLCBwb3NpdGlvbjogbnVsbCB9IDogZmFsc2U7XHJcblx0fSxcclxuXHRmaW5kTWFyayh4KSB7XHJcblx0XHR4ID0geCA/IHggOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG5cdFx0bGV0IG1hcmsgPSAheCA/XHJcblx0XHRcdHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV0gOlxyXG5cdFx0XHRcdHR5cGVvZiB4ID09PSAnc3RyaW5nJyA/XHJcblx0XHRcdHRoaXMuZ2V0QnlJZCh4LnNwbGl0KCdfJylbMF0pIDpcclxuXHRcdFx0eDtcclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcbiAgc29ydEJ5SWQoKSB7XHJcbiAgICB0aGlzLmRvbmUuc29ydCgobWFyazEsIG1hcmsyKSA9PiBtYXJrMS5pZCAtIG1hcmsyLmlkKTtcclxuICB9LFxyXG5cdG9yZGVyTWFya3NWaXN1YWxseSgpIHtcclxuXHRcdHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkJD1cIl8wXCJdJykpLnNvcnQoKG0xLCBtMikgPT4ge1xyXG5cdFx0XHRsZXQgYmIxID0gbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRiYjIgPSBtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdHRvcDEgPSBiYjEudG9wLFxyXG5cdFx0XHRcdFx0dG9wMiA9IGJiMi50b3A7XHJcblxyXG5cdFx0XHRpZiAodG9wMSA8IHRvcDIpIHJldHVybiAtMTtcclxuXHRcdFx0ZWxzZSBpZiAodG9wMiA8IHRvcDEpIHJldHVybiAxO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAoYmIxLmxlZnQgPCBiYjIubGVmdCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubWFwKG1hcmsgPT4gcGFyc2VJbnQobWFyay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpO1xyXG4gICAgdGhpcy5lbWl0KCd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJywgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzKTtcclxuXHR9LFxyXG4gIG1hcmtzSW50ZXJzZWN0KG1hcmsxLCBtYXJrMikge1xyXG5cdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICBpZDEgPSBtYXJrMS5pZCxcclxuICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICB3MiwgdG1zLCBsO1xyXG5cclxuICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKHcyLS0pIHtcclxuICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG4gIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0bGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuXHJcblx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGtleSA9IGU7XHJcblx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGtleSA9IGtleSB8fCAnbSc7XHJcblx0XHR9XHJcblxyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldykge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6ICEhc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBfU1RPUkUuaW1tdXQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgfSk7XHJcblx0fSxcclxuICBvbkhvdGtleShrZXkpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHNlbGYucmVkbygpOyBicmVhaztcclxuICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93dXAnOiBzZWxmLmdvdG9OZXh0TWFyaygtMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhcnJvd2Rvd24nOiBzZWxmLmdvdG9OZXh0TWFyaygxKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgY2FzZSAnYyc6IHNlbGYuY29weSgpOyBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRyZXRyaWV2ZUVudHJ5KCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgY29uc3QgbmFtZSA9IF9TVE9SRS5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0ZW50cnkubGFzdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0ZW50cnkuY291bnQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcblx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICBpZiAoaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICBlbnRyeS5zeW5jZWQgPSBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcbiAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgaXNOZXcgPyBuYW1lIDogZW50cnkubmFtZTtcclxuXHJcblx0XHRyZXR1cm4gZW50cnk7XHJcblx0fSxcclxuICBjb2xsZWN0TWFya3MoKSB7XHJcbiAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICBjb25zdCBtYXJrcyA9IFtdO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgIH1cclxuXHJcbiAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdGtEID0gZG9uZVttXS5rZXlEYXRhO1xyXG4gICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdH1cclxuICAgIHJldHVybiBtYXJrcztcclxuICB9LFxyXG4gIG9uSGFzaENoYW5nZSgpIHtcclxuICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlJyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlaGVhZGVyJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVhY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IGRlbCA9IHRoaXMuZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlZGVsZXRlJyk7XHJcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlbWluaW1pemUnKTtcclxuICAgICAgY29uc3QgZ2VhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWN1c3RvbWl6ZScpO1xyXG4gICAgICBjb25zdCBwYWxldHRlID0gdGhpcy5wYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlcGFsZXR0ZScpO1xyXG4gICAgICBjb25zdCBwID0gdGhpcy50ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvcjtcclxuICAgICAgX1NUT1JFLm5vdGVDb2xvciA9IGNvbG9yO1xyXG4gICAgICBjb25zdCBkZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSkpO1xyXG4gICAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDIwMTMpKTtcclxuICAgICAgY29uc3QgZ2VhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjY5OSkpO1xyXG5cclxuICAgICAgWydncmVlbicsICd3aGl0ZScsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCcsICdwdXJwbGUnLCAnYmx1ZScsICd0dXJxdW9pc2UnXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWNvbG9yJyk7XHJcbiAgICAgICAgY29sb3IuY2xhc3NOYW1lID0gJ3Rtbm90ZWNvbG9yLS0nICsgYztcclxuICAgICAgICBjb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCBjKTtcclxuICAgICAgICBwYWxldHRlLmFwcGVuZENoaWxkKGNvbG9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1ub3RlJywgdHJ1ZSk7XHJcbiAgICAgIGRlbC5hcHBlbmRDaGlsZChkZWxUZXh0KTtcclxuICAgICAgbWluLmFwcGVuZENoaWxkKG1pblRleHQpO1xyXG4gICAgICBnZWFyLmFwcGVuZENoaWxkKGdlYXJUZXh0KTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdhZGQ6bm90ZSc6ICdhZGRBbmRTaG93JyxcclxuICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdyZW1vdmVOb3RlU3RvcmFnZScsXHJcbiAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAncmVtb3ZlZDptYXJrJzogJ3JlbW92ZU5vdGUnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVRyYW5zcCcsXHJcbiAgICAgICdzdGFydDpkcmFnJzogJ3N0YXJ0RHJhZ2dpbmdOb3RlJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG5vdGVzOiB7fSxcclxuICB0b2dnbGU6IG51bGwsXHJcbiAgZHJhZ0hhbmRsZXI6IG51bGwsXHJcbiAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVUcmFuc3AoKTtcclxuICB9LFxyXG4gIGFkZChtYXJrLCBjb2xvcikge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZXNbbWFyay5pZF07XHJcbiAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICB0aGlzLmVtaXQoJ2FkZGVkOm5vdGUnKTtcclxuICAgIHJldHVybiB0aGlzLm5vdGVzW21hcmsuaWRdID0gbmV3IF9OT1RFKG1hcmssIGNvbG9yKTtcclxuICB9LFxyXG4gIHJlc3RvcmUobWFya3MpIHtcclxuICAgIGZvciAobGV0IG1hcmsgb2YgbWFya3MpIHtcclxuICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWFyayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGFkZEFuZFNob3cobWFyaywgY29sb3IpIHtcclxuICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlU3RvcmFnZShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSkgdGhpcy5lbWl0KCdyZW1vdmVkOmxhc3Qtbm90ZScpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgaWYgKHRoaXMubm90ZXNbaWRdKSB0aGlzLm5vdGVzW2lkXS5yZW1vdmUoKTtcclxuICB9LFxyXG4gIHRvZ2dsZUFsbCgpIHtcclxuICAgIGlmICghdGhpcy5ub3RlcykgcmV0dXJuO1xyXG4gICAgY29uc3Qgbm90ZXMgPSB0aGlzLm5vdGVzO1xyXG4gICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICBjb25kaXRpb24gPSBtZXRoID09PSAnaGlkZScgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgbm90ZTtcclxuICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgbm90ZSA9IG5vdGVzW25dO1xyXG4gICAgICBpZiAobm90ZS52aXNpYmxlID09PSBjb25kaXRpb24pIHtcclxuICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZVRyYW5zcCgpIHtcclxuICAgIGNvbnN0IGJvZHlDbGFzc2VzID0gd2luZG93LmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKHNldHRpbmdzICYmIHNldHRpbmdzLm1pc2MpIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MubWlzYy5ub3RldHJhbnNwKSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3MubWlzYy5ub3RlcGxhaW52aWV3KSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tcGxhaW4tdmlldycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGlzRW1wdHkob2JqKSB7XHJcbiAgICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gIH0sXHJcbiAgc3RhcnREcmFnZ2luZ05vdGUobm90ZSkge1xyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyID0gKGUpID0+IHRoaXMuZW1pdERyYWdFdmVudChub3RlLCBlKTtcclxuICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICBzdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpIHtcclxuICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2RyYWdzdG9wOm5vdGUnLCBub3RlLCBlKTtcclxuICB9LFxyXG4gIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5lbWl0KCdkcmFnOm5vdGUnLCBub3RlLCBlKTtcclxuICB9LFxyXG4gIHNlbmROb3Rlc1N0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgnbm90ZXMtc3RhdGUnLCAhdGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpLCBpbmZvKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgYXV0b1BhdXNlOiB0cnVlLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRE9NOiB7XHJcbiAgICAgIGtleWRvd246IHtcclxuICAgICAgICAnKic6ICdkZWxlZ2F0ZSdcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgJyonOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICBrZXlDb2RlTWFwOiB7XHJcbiAgICAnMTMnOiAnRW50ZXInLFxyXG4gICAgJzQ4JzogJzAnLCAnNDknOiAnMScsICc1MCc6ICcyJywgJzUxJzogJzMnLCAnNTInOiAnNCcsXHJcbiAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICcxNzEnOiAnKycsICcxNzMnOiAnLSdcclxuICB9LFxyXG5cclxuICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZWwudGFnTmFtZTtcclxuXHJcbiAgICByZXR1cm4gKG5hbWUgPT09ICdURVhUQVJFQScgfHwgbmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJyk7XHJcbiAgfSxcclxuICBkZWxlZ2F0ZShlKSB7XHJcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgbW9kS2V5ID0gKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleSksXHJcbiAgICAgICAgYXJyb3dLZXlzID0gWydhcnJvd2Rvd24nLCAnYXJyb3d1cCddLFxyXG4gICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgIGZ1bmN0aW9uS2V5cyA9IGxvY2tlZEFjdGlvbnMuY29uY2F0KGFycm93S2V5cykuY29uY2F0KCdjJyksXHJcbiAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJ107XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zaGlmdFNlbnNpdGl2ZUtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIGtleSA9IHRoaXMua2V5Q29kZU1hcFtrZXlDb2RlXTtcclxuXHJcbiAgICBpZiAoIWZ1bmN0aW9uS2V5cy5pbmNsdWRlcyhrZXkpICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICBjb25zdCBpc0N1c3RvbU1hcmtlcktleSA9IGlzTWFya2VyS2V5ICYmICFkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICBpZiAoaXNDdXN0b21NYXJrZXJLZXkpIGtleSA9ICdjbSc7XHJcbiAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgIGlmICghc2V0dGluZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBpZiAoIW1vZEtleSkge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdbMV0pIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG9ydGN1dCA9IHNldHRpbmdbMF0uc3BsaXQoJy0nKTtcclxuICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgIGNvbnN0IHMyID0gc2hvcnRjdXRbMV07XHJcblxyXG4gICAgICAgIGlmICghZVtzMV0gfHwgKHMyICYmICFlW3MyXSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGlzTWFya2VyS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgncHJlc3NlZDpob3RrZXknLCBrZXkpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNlbGVjdGlvbicsICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0luQ2h1bmtzKGRhdGEsIHByb2MsIGNiKSB7XHJcbiAgICBwcm9jID0gcHJvYy5iaW5kKHRoaXMpO1xyXG4gICAgY2IgPSBjYi5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdChmdW5jdGlvbiByZWMoKSB7XHJcblx0XHRcdGxldCBleHBpcmUgPSArbmV3IERhdGUoKSArIDUwMDtcclxuXHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHR0cnkge1xyXG4gICAgICAgICAgcHJvYyhkYXRhLnNoaWZ0KCkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdFx0fSB3aGlsZSAoZGF0YS5sZW5ndGggPiAwICYmIGV4cGlyZSA+ICtuZXcgRGF0ZSgpKTtcclxuXHJcblx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHJlYygpLCAwKTtcclxuXHRcdFx0ZWxzZSBjYigpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbiAgcmVwb3J0KCkge1xyXG4gICAgbGV0IGxsID0gdGhpcy5sb3N0Lmxlbmd0aDtcclxuICAgIGlmIChsbCkge1xyXG4gICAgICB3aGlsZShsbC0tKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubG9zdFtsbF0udGVtcDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ2xvc3Q6bWFya3MnLCB0aGlzLmZhaWx1cmVSZXBvcnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdmaW5pc2hlZDpyZXN0b3JhdGlvbicsIHRoaXMuZW50cnkubmFtZSwgdGhpcy5yZXN0b3JlZCwgdGhpcy5sb3N0LCB0aGlzLmFyZWEpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5jYWNoZSA9IFtdO1xyXG4gICAgdGhpcy5waGFzZSA9IDE7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsID0gMDtcclxuICAgIHRoaXMuY2h1bmtEdXJhdGlvbiA9IDUwMDtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICB0aGlzLm9vbSA9IGVudHJ5Lm1hcmtzLmxlbmd0aCA9PT0gMSAmJiBlbnRyeS5tYXJrc1swXS5pZCA9PSAxO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpbWVyKCkge1xyXG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICByZXR1cm4gdGltZXI7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZW50cnkgPSB0aGlzLmVudHJ5LFxyXG4gICAgICAgIG5vdyA9IFtdLCBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzLFxyXG4gICAgICAgIGwgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIG1hcms7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG5cclxuICAgICAgdGhpcy5jb252ZXJ0RGVzY3JpcHRpb24obWFyaykuY3JlYXRlVGVtcE9iamVjdChtYXJrKTtcclxuXHJcbiAgICAgIGlmIChtYXJrLmNvbmRzLm4xID09PSAnVE0nKSBwb3N0cG9uZWQucHVzaChtYXJrKTtcclxuICAgICAgZWxzZSBub3cucHVzaChtYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnF1ZXVlLnB1c2gobm93KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gcG9zdHBvbmVkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW3Bvc3Rwb25lZFtpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzdG9yZSgpO1xyXG4gIH1cclxuICBjb252ZXJ0RGVzY3JpcHRpb24obWFyaykge1xyXG4gICAgaWYgKHR5cGVvZiBtYXJrLmNvbmRzLm8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxldCBjb25kcyA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgICBjb252ZXJ0ZWRDb25kcyA9IHtcclxuICAgICAgICAgICAgbzogY29uZHMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgICAgIG4xOiBjb25kcy5maXJzdE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBuMjogY29uZHMuZmlyc3RQYXJlbnROb2RlTmFtZSxcclxuICAgICAgICAgICAgcDE6IGNvbmRzLmZpcnN0VGV4dE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDI6IGNvbmRzLmZpcnN0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMzogY29uZHMuZmlyc3RQYXJlbnROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHA0OiBjb25kcy5maXJzdEdyYW1wYU5vZGVQb3NpdGlvblxyXG4gICAgICAgICAgfTtcclxuICAgICAgZGVsZXRlIG1hcmsuY29uZHM7XHJcbiAgICAgIG1hcmsuY29uZHMgPSBjb252ZXJ0ZWRDb25kcztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjcmVhdGVUZW1wT2JqZWN0KG1hcmspIHtcclxuICAgIGxldCB0ZXh0ID0gbWFyay50ZXh0LFxyXG4gICAgICAgIHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCksXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gdGhpcy5zcXVlZXplKG1hcmsudGV4dCk7XHJcblxyXG4gICAgbWFyay50ZW1wID0ge1xyXG4gICAgICB0ZXh0TGVuZ3RoOiB0ZXh0Lmxlbmd0aCxcclxuICAgICAgdHJpbW1lZFRleHQ6IHRyaW1tZWRUZXh0LFxyXG4gICAgICB0cmltbWVkVGV4dExlbmd0aDogdHJpbW1lZFRleHQubGVuZ3RoLFxyXG4gICAgICBzcXVlZXplZFRleHQ6IHNxdWVlemVkVGV4dCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoOiBzcXVlZXplZFRleHQubGVuZ3RoLFxyXG4gICAgICBwb3NzaWJsZVBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRzOiB7fSxcclxuICAgICAgcG9zc2libGVGb2N1c09mZnNldHM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcmsuc3luY2VkID0gdGhpcy5lbnRyeS5zeW5jZWQ7XHJcbiAgfVxyXG4gIHJlc3RvcmUoKSB7XHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMikgdGhpcy5zb3J0UXVldWVCeUlkKCk7XHJcblxyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMucXVldWUuc2hpZnQoKSxcclxuICAgICAgICBsZW5ndGggPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcblxyXG4gICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldEJvZHlTZWxlY3Rpb24od2luZG93LmRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgICAuZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBoYXNlID09PSAxICYmIGxlbmd0aCA+IDEpXHJcbiAgICAgICAgICB0aGlzLnBvc3Rwb25lT3ZlcmxhcHBpbmdzKCk7XHJcblxyXG4gICAgICB0aGlzLmZpbmRQb3NzaWJsZUV4dHJlbWEoKVxyXG4gICAgICAgICAgLnJ1bGVPdXRNdWx0aXBsZXMoKVxyXG4gICAgICAgICAgLnJlc3RvcmVSYW5nZXMoKTtcclxuXHJcbiAgICAgIHRoaXMucGhhc2UrKztcclxuXHJcbiAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDwgK25ldyBEYXRlKCkpIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXN0b3JlKCksIDApO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gIH1cclxuICBzb3J0UXVldWVCeUlkKCkge1xyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICByZXMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBtYXJrLCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKCFtYXJrc1tsXS5sZW5ndGgpIGNvbnRpbnVlO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF1bMF07XHJcbiAgICAgIHRlbXBbbWFyay5pZF0gPSBtYXJrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG5cclxuICAgIGZvciAodCA9IHRlbXAubGVuZ3RoOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLnF1ZXVlLnB1c2goW3RlbXBbaV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsKSB7XHJcbiAgICBsZXQgdHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0LFxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3F1ZWV6ZWRUZXh0LCBzcXVlZXplZFRleHRMZW5ndGgsIHAsIGVuZFBvc2l0aW9uO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcCA9IHVuZGVmaW5lZDtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuXHJcbiAgICAgIGlmICghbWFya1RlbXApIHtcclxuICAgICAgICBtYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBlbmRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dDtcclxuICAgICAgICBzcXVlZXplZFRleHRMZW5ndGggPSBtYXJrVGVtcC5zcXVlZXplZFRleHRMZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChwICE9PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgcCA9IC0xO1xyXG4gICAgICAgICAgcCA9IHRyaW1tZWRTZWxlY3Rpb25UZXh0LmluZGV4T2Yoc3F1ZWV6ZWRUZXh0LCBwICsgMSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IHAgKyBzcXVlZXplZFRleHRMZW5ndGg7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucy5wb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMScpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgdGhpcy5tYXhQb3NpdGlvbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKHBvc2l0aW9ucykge1xyXG4gICAgbGV0IGwgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBwb3MsIHN0YXJ0LCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcG9zID0gcG9zaXRpb25zW2xdO1xyXG4gICAgICBzdGFydCA9IHBvc1swXTtcclxuXHJcbiAgICAgIGlmICh0ZW1wW3N0YXJ0XSkgdGVtcC5zcGxpY2Uoc3RhcnQgKyAxLCAwLCBwb3MpO1xyXG4gICAgICBlbHNlIHRlbXBbc3RhcnRdID0gcG9zO1xyXG4gICAgfVxyXG4gICAgdCA9IHRlbXAubGVuZ3RoO1xyXG4gICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW107XHJcblxyXG4gICAgZm9yICg7IGkgPCB0OyBpKyspXHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaCh0ZW1wW2ldKTtcclxuICB9XHJcbiAgcG9zdHBvbmVPdmVybGFwcGluZ3MoKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIHBvczEsIHBvczIsIGksIG0xLCBtMiwgaWQxLCBpZDIsIGlkO1xyXG5cclxuICAgIGlmIChwID4gMSkge1xyXG4gICAgICB3aGlsZSAocC0tID4gMSkge1xyXG4gICAgICAgIHBvczEgPSBwb3NpdGlvbnNbcCAtIDFdO1xyXG4gICAgICAgIHBvczIgPSBwb3NpdGlvbnNbcF07XHJcbiAgICAgICAgbTEgPSBwb3MxWzJdO1xyXG4gICAgICAgIG0yID0gcG9zMlsyXTtcclxuICAgICAgICBpZDEgPSBtMS5pZDtcclxuICAgICAgICBpZDIgPSBtMi5pZDtcclxuXHJcbiAgICAgICAgaWYgKGlkMSA9PT0gaWQyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHBvczFbMV0gPiBwb3MyWzBdICYmIHBvczFbMF0gPCBwb3MyWzFdKSB7XHJcblxyXG4gICAgICAgICAgaWYgKGlkMSA8IGlkMikge1xyXG4gICAgICAgICAgICBpZCA9IGlkMjtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTIpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQxO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMSk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IHA7IGkrKylcclxuICAgICAgICB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGN1dE91dEZvcihpZCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShwLS0pIHtcclxuICAgICAgaWYgKHBvc2l0aW9uc1twXVsyXS5pZCA9PT0gaWQpXHJcbiAgICAgICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnNwbGljZShwLCAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9zdHBvbmUobWFyaykge1xyXG4gICAgbGV0IHF1ZXVlID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gcXVldWUubGVuZ3RoLFxyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKHF1ZXVlW2xdWzBdID09PSBtYXJrKSB7XHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbHJlYWR5SW5jbHVkZWQpXHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbbWFya10pO1xyXG4gIH1cclxuICBmaW5kUG9zc2libGVFeHRyZW1hKCkge1xyXG4gICAgbGV0IG5vZGVzID0gdGhpcy5ib2R5VGV4dE5vZGVzLFxyXG4gICAgICAgIG4gPSBub2RlcyA/IG5vZGVzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgaW5kaWNlcyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwaGFzZSA9IHRoaXMucGhhc2UsXHJcbiAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlID0gW10sXHJcbiAgICAgICAgc2F0aXNmaWVkID0gW10sXHJcbiAgICAgICAgaSA9IDAsIGNoYXJzID0gMCxcclxuICAgICAgICBuZXh0U3RhcnRGb3VuZCwgZW5kaW5nc0luVGhpc05vZGUsXHJcbiAgICAgICAgbm9kZSwgbm9kZXNUZXh0LCBub2Rlc1RleHRMZW5ndGgsXHJcbiAgICAgICAgbWFyaywgZGlmZiwgbCwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIGUsIGYsIGlkLCBwLCBxLCB4LCBtLFxyXG4gICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQsIHN0YXJ0Rm91bmRGb3IsIHBvc3Rwb25lZCwgaGFzRW5kaW5nc0luVGhpc05vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBub2Rlc1RleHQgPSB0aGlzLnNxdWVlemUobm9kZS5kYXRhKTtcclxuICAgICAgbm9kZXNUZXh0TGVuZ3RoID0gbm9kZXNUZXh0Lmxlbmd0aDtcclxuICAgICAgY2hhcnMgKz0gbm9kZXNUZXh0TGVuZ3RoO1xyXG4gICAgICBsID0gaW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSBbXTtcclxuICAgICAgcG9zdHBvbmVkID0gW107XHJcbiAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBzdGFydFBvc2l0aW9uID0gaW5kaWNlc1tsXVswXTtcclxuICAgICAgICBlbmRQb3NpdGlvbiA9IGluZGljZXNbbF1bMV07XHJcbiAgICAgICAgbWFyayA9IGluZGljZXNbbF1bMl07XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yIHx8IFtdO1xyXG4gICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvciA9IG1hcmsudGVtcC5lbmRGb3VuZEZvciB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIW1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICBjaGFycyA+IHN0YXJ0UG9zaXRpb24gJiZcclxuICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoIDwgbWFyay50ZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGhhc0VuZGluZ3NJblRoaXNOb2RlICYmIGhhc0VuZGluZ3NJblRoaXNOb2RlLmlkIDwgbWFyay5pZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxICYmIGlkICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5wdXNoKHsgbm9kZTogbm9kZSwgcG9zOiBpIH0pO1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLnB1c2goc3RhcnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgc3RhcnRGb3VuZEZvci5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgIW1hcmsudGVtcC5lbmRGb3VuZEZvci5pbmNsdWRlcyhlbmRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIChjaGFycyAtIGVuZFBvc2l0aW9uKSA+PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5taW4uYXBwbHkobnVsbCwgc3RhcnRGb3VuZEZvcikgPCBpZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQgPSB0aGlzLmZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBlbmRQb3NpdGlvbiAtIChjaGFycyAtIG5vZGVzVGV4dExlbmd0aCkpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVGb2N1c09mZnNldHMucHVzaChwb3NzaWJsZUZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dID0ge1xyXG4gICAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiBwb3NzaWJsZUZvY3VzT2Zmc2V0LFxyXG4gICAgICAgICAgICAgIHBvczogaVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBjYWNoZS5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgICAgIHNhdGlzZmllZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBtYXJrO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCkgZm9yICh4ID0gMDsgeCA8IHA7IHgrKykgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW3hdKTtcclxuXHJcbiAgICAgIGlmIChjaGFycyA+IHRoaXMubWF4UG9zaXRpb24pIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKHBoYXNlICE9PSAxIHx8IHRoaXMub29tKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBtYXJrID0gdGhpcy5tYXJrc1tpXTtcclxuICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhtYXJrLmlkKSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8yJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBydWxlT3V0TXVsdGlwbGVzKCkge1xyXG4gICAgbGV0IGNhY2hlID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gY2FjaGUubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIHBvc3NpYmxlU3RhcnROb2RlcywgcCwgbm9kZSwgcGFyZW50LCBncmFtcGEsIGdyYW5kZ3JhbXBhLCBncmFuZGdyYW5kZ3JhbXBhLCBtYXRjaGVzLCBmYWlsZWQsIHEsXHJcbiAgICAgICAgcG9zc2libGVFbmRzLCBzdGFydEZvdW5kRm9yLCBjb25kcywgc3RhcnRPZmZzZXQsIHRlbXAsIHRleHRMZW5ndGgsIHN0YXJ0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IGNhY2hlW2ldO1xyXG4gICAgICBtYXRjaGVzID0gW107XHJcbiAgICAgIGZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICB0ZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXMgPSB0ZW1wLnBvc3NpYmxlU3RhcnROb2RlcztcclxuICAgICAgcG9zc2libGVFbmRzID0gdGVtcC5wb3NzaWJsZUVuZHM7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSB0ZW1wLnN0YXJ0Rm91bmRGb3JcclxuICAgICAgcCA9IHBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGg7XHJcbiAgICAgIGNvbmRzID0gbWFyay5jb25kcztcclxuICAgICAgc3RhcnRPZmZzZXQgPSBjb25kcy5vO1xyXG4gICAgICB0ZXh0TGVuZ3RoID0gdGVtcC50ZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgICAgd2hpbGUgKHAtLSkge1xyXG4gICAgICAgICAgbm9kZSA9IHBvc3NpYmxlU3RhcnROb2Rlc1twXS5ub2RlO1xyXG4gICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG5cclxuICAgICAgICAgIGlmICghZ3JhbXBhIHx8IGNvbmRzLnAzID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHAgPSAwO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAxKSBwID0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcSA9IG1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgcGFyZW50ID0gcG9zc2libGVTdGFydE5vZGVzW3FdLm5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbmRncmFtcGEgPSBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgKCFncmFuZGdyYW5kZ3JhbXBhIHx8IGNvbmRzLnA0ID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFuZGdyYW1wYSwgZ3JhbmRncmFtcGEpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAocG9zc2libGVFbmRzW3N0YXJ0Rm91bmRGb3JbcV1dLm9mZnNldCAtIHN0YXJ0T2Zmc2V0KSA9PT0gdGV4dExlbmd0aFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHAgPSBxO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcCkgcCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgcCA9IDA7XHJcblxyXG4gICAgICBwID0gcCB8fCAwO1xyXG5cclxuICAgICAgc3RhcnQgPSBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzW3BdO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlID0gc3RhcnQubm9kZTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uID0gc3RhcnQucG9zO1xyXG5cclxuICAgICAgdGhpcy5zZXRNYXRjaGluZ0VuZChtYXJrLCBwKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXRNYXRjaGluZ0VuZChtYXJrLCBwKSB7XHJcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yW3BdLFxyXG4gICAgICAgIGVuZCA9IG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl07XHJcblxyXG4gICAgbWFyay50ZW1wLmVuZE5vZGUgPSBlbmQubm9kZTtcclxuICAgIG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb24gPSBlbmQucG9zO1xyXG4gICAgbWFyay50ZW1wLmZvY3VzT2Zmc2V0ID0gZW5kLm9mZnNldDtcclxuICB9XHJcbiAgc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbWFyay5jb25kcyxcclxuICAgICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW1wYSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMCxcclxuICAgICAgICBzdGFydE9mZnNldCA9IGRlc2NyaXB0aW9uLm8sXHJcbiAgICAgICAgcmVsZXZhbnROb2RlVGV4dCA9IG5vZGUuZGF0YS5zdWJzdHJpbmcoc3RhcnRPZmZzZXQpLnRyaW0oKSxcclxuICAgICAgICBsID0gcmVsZXZhbnROb2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgbWFya1RleHQgPSBtYXJrLnRlbXAudHJpbW1lZFRleHQsXHJcbiAgICAgICAgbSA9IG1hcmsudGVtcC50cmltbWVkVGV4dExlbmd0aCxcclxuICAgICAgICB0ZXh0c01hdGNoO1xyXG5cclxuICAgIGlmIChtIDw9IGwpIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkpID09PSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkpID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRleHRzTWF0Y2ggJiZcclxuICAgICAgKHBhcmVudE5vZGUubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4xIHx8IChkZXNjcmlwdGlvbi5uMSA9PT0gJ1RNJyAmJiBwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSkgJiZcclxuICAgICAgKCFncmFtcGEgfHwgZ3JhbXBhLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMikgJiZcclxuICAgICAgdGhpcy53aGljaENoaWxkKHBhcmVudE5vZGUsIG5vZGUpID09PSBkZXNjcmlwdGlvbi5wMVxyXG4gICAgKTtcclxuICB9XHJcbiAgZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIG4pIHtcclxuICAgIGxldCBub2RlVGV4dCA9IG5vZGUuZGF0YSxcclxuICAgICAgICBsID0gbm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBjb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zcXVlZXplKG5vZGVUZXh0W2ldKSkgY291bnRlcisrO1xyXG5cclxuICAgICAgaWYgKGNvdW50ZXIgPT09IG4pIHJldHVybiAoL1xccyQvLnRlc3QobWFyay50ZXh0KSA/IGkgKyAyIDogaSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXN0b3JlUmFuZ2VzKCkge1xyXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBtYXJrcyA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3RhcnQsIGVuZCwgZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBzdGFydCA9IG1hcmtUZW1wLnN0YXJ0Tm9kZTtcclxuICAgICAgZW5kID0gbWFya1RlbXAuZW5kTm9kZTtcclxuICAgICAgZm9jdXNPZmZzZXQgPSBtYXJrVGVtcC5mb2N1c09mZnNldDtcclxuXHJcbiAgICAgIGlmICghc3RhcnQgfHwgIWVuZCB8fCAhKHR5cGVvZiBmb2N1c09mZnNldCA9PT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMycpIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCBtYXJrLmNvbmRzLm8pO1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKGVuZCwgZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAvL3NlbGVjdGlvbi5yZXN1bWUocmFuZ2UpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnJlY29sbGVjdE5vZGVzKG1hcmspO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIG1hcmsudGVtcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Qm9keVNlbGVjdGlvbihlbCkge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCsrO1xyXG5cclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oZWwpO1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uLnRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25UcmlhbCA8IDQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNldEJvZHlTZWxlY3Rpb24oZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gJyAnO1xyXG4gICAgICAgICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gW107XHJcbiAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMuc3F1ZWV6ZSh0aGlzLnNlbGVjdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSB0aGlzLnNlbGVjdGlvbi5ub2RlcyA/IHRoaXMuc2VsZWN0aW9uLm5vZGVzLnNsaWNlKCkgOiBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc3F1ZWV6ZSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykgPyB0ZXh0LnJlcGxhY2UoL1xcdHxcXHN8XFxufFxcci9nLCAnJykgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgY29udGV4dCkge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgY2hpbGRyZW4gPSBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0ICAgIGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHQgICAgcG9zID0gMCwgaSA9IDAsIGN1cnJlbnRDaGlsZDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgY3VycmVudENoaWxkID0gY2hpbGRyZW5baV07XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudENoaWxkID09PSBjaGlsZCkgcmV0dXJuIHBvcztcclxuXHJcblx0XHRcdGlmIChjb250ZXh0KSB7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZC5ub2RlTmFtZSA9PT0gY29udGV4dCkgcG9zKys7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgIGlmICghKGN1cnJlbnRDaGlsZC5ub2RlVHlwZSA9PT0gMyAmJiAhY3VycmVudENoaWxkLmRhdGEpKSBwb3MrKztcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgSW1tdXRSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHRoaXMucmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgY29uc3QgbWFya3MgPSB0aGlzLm1hcmtzID0gWy4uLmVudHJ5Lm1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbTEuaWQgLSBtMi5pZCldO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc0luQ2h1bmtzKG1hcmtzLCB0aGlzLnJlc3RvcmVSYW5nZSwgdGhpcy5yZXBvcnQpO1xyXG4gIH1cclxuXHJcbiAgcmVzdG9yZVJhbmdlKG1hcmspIHtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB3aG9sZURvY3VtZW50ID8gd2luZG93LmRvY3VtZW50LmJvZHkgOiB0aGlzLmdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyKCk7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSB3aG9sZURvY3VtZW50ID9cclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZi5pc1NlbGVjdGFibGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSkgOlxyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxlY3Rpb24uY29udGFpbnNOb2RlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpO1xyXG5cclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgbGV0IG5vZGVzID0gW10sXHJcbiAgICAgICAgcGFyZW50Tm9kZXMgPSBbXSxcclxuXHJcbiAgICAgICAgdGV4dE5vZGUsIHBhcmVudCwgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICB3aGlsZSh0ZXh0Tm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkpIHtcclxuICAgICAgbm9kZXMucHVzaCh0ZXh0Tm9kZSk7XHJcbiAgICB9XHJcbiAgICBub2RlcyA9IHRoaXMudHJpbVNlbGVjdGlvbihub2Rlcyk7XHJcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5vcHRpb25zLnByb2dyYW1tYXRpY2FsbHkgPyB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2RlcykgOiBub2RlcztcclxuICAgIHRoaXMucGFyZW50Tm9kZXMgPSB0aGlzLmNvbGxlY3RQYXJlbnROb2Rlcyh0aGlzLm5vZGVzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVjb2xsZWN0Tm9kZXMobWFyaykge1xyXG4gICAgY29uc3QgbWFya1dyYXBwZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF49XCInICsgbWFyay5pZCArICdfXCJdJykpO1xyXG4gICAgY29uc3QgbSA9IG1hcmtXcmFwcGVycy5sZW5ndGg7XHJcbiAgICBjb25zdCBuZXdTZWdtZW50ID0gbWFya1dyYXBwZXJzLm1hcChlbCA9PiBlbC5maXJzdENoaWxkKTtcclxuXHJcbiAgICBjb25zdCBwcmV2ID0gbWFya1dyYXBwZXJzWzBdLnByZXZpb3VzU2libGluZztcclxuICAgIGNvbnN0IG5leHQgPSBtYXJrV3JhcHBlcnNbbS0xXS5uZXh0U2libGluZztcclxuXHJcbiAgICBjb25zdCBzdGFydCA9IG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbjtcclxuICAgIGNvbnN0IGVuZCA9IG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb247XHJcblxyXG4gICAgaWYgKHByZXYgJiYgcHJldi5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnVuc2hpZnQocHJldik7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dCAmJiBuZXh0Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQucHVzaChuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5vZGVzLnNwbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCAuLi5uZXdTZWdtZW50KTtcclxuICB9XHJcbiAgdHJpbVNlbGVjdGlvbihub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgbGV0IGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgZmlyc3ROb2RlID0gbm9kZXNbMF07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gZmlyc3ROb2RlICYmIGZpcnN0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCA8PSBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KSB7XHJcbiAgICAgICAgbm9kZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Tm9kZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbGFzdE5vZGUgJiYgdGhpcy5pc0JsYW5rKGxhc3ROb2RlLmRhdGEuc3Vic3RyKDAsIHNlbGVjdGlvbi5mb2N1c09mZnNldCkpKSB7XHJcbiAgICAgICAgbm9kZXMucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgcmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWwgPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCByZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHJnKTtcclxuXHJcbiAgICBub2RlcyA9IG5vZGVzLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgcmcuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgICAgcmV0dXJuICEhc2VsLnRvU3RyaW5nKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UodGhpcy5yYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICBjb2xsZWN0UGFyZW50Tm9kZXMobm9kZXMpIHtcclxuICAgIGxldCBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHBhcmVudHMgPSBbXSwgaSA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHBhcmVudHMucHVzaChub2Rlc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50cztcclxuICB9XHJcbiAgcmV0cmlldmVUZXh0KCkge1xyXG4gICAgbGV0IHJhbmdlID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBub2RlcyA9IHRoaXMubm9kZXMsXHJcbiAgICAgICAgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBub2RlVGV4dHMgPSBbXSxcclxuICAgICAgICB0ZXh0O1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBub2RlVGV4dHMucHVzaChub2Rlc1tpXS5kYXRhKTtcclxuXHJcbiAgICBsIC09IDE7XHJcblxyXG4gICAgaWYgKG5vZGVUZXh0cy5sZW5ndGgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0LCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnOiAnb25Ob3RlQWRkZWQnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya0FkZGVkJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya1JlbW92ZWQnXHJcbiAgICB9XHJcblx0fSxcclxuICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICBlbDogbnVsbCxcclxuXHJcbiAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICBidXR0b25zOiB7XHJcbiAgICBub3Rlczoge1xyXG4gICAgICBlbDogbnVsbCxcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJvb2ttYXJrOiB7XHJcbiAgICAgIGVsOiBudWxsLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2hvd246IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYm9va21hcms6IGZhbHNlLFxyXG4gIG5vdGVzOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcclxuICB9LFxyXG4gIHVwZGF0ZVN0YXRlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYm1pY29uJykudGhlbihibWljb24gPT4ge1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ25vdGVpY29uJykudGhlbihub3RlaWNvbiA9PiB0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyA9IG5vdGVpY29uKTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgKHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ICYmIHRoaXMuYm9va21hcmspIHx8XHJcbiAgICAgICh0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyAmJiB0aGlzLm5vdGVzKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBidXR0b25zID0gdGhpcy5idXR0b25zLCBidG47XHJcblxyXG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXVpJyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICBidG4gPSBidXR0b25zW2JdO1xyXG4gICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgZWxzZSBpZiAoYnRuLnNob3duICYmICghdGhpc1tiXSB8fCAhYnRuLnNob3cpKSB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgIH1cclxuICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gIH0sXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnM7XHJcblxyXG4gICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICBpZiAoYnV0dG9uc1tiXS5zaG93bikge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXVpKTtcclxuICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IG5vdGVzQnV0dG9uID0gdGhpcy5idXR0b25zLm5vdGVzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXN0b2dnbGUnKTtcclxuICAgIGNvbnN0IGJvb2ttYXJrQnV0dG9uID0gdGhpcy5idXR0b25zLmJvb2ttYXJrLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtYm0nKTtcclxuICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgYm9va21hcmtCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnYm1fc2Nyb2xsJyk7XHJcbiAgfSxcclxuICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBidG4uaGFuZGxlciA9IHR5cGUgPT09ICdub3RlcycgP1xyXG4gICAgICB0aGlzLnRvZ2dsZU5vdGVzLmJpbmQodGhpcykgOlxyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0bXVpLmFwcGVuZENoaWxkKGJ0bi5lbCk7XHJcbiAgICBidG4uc2hvd24gPSB0cnVlO1xyXG5cclxuICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHJlbW92ZUJ1dHRvbih0eXBlKSB7XHJcbiAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuXHJcbiAgICB0bXVpLnJlbW92ZUNoaWxkKGJ0bi5lbCk7XHJcbiAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICBidG4uZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG4uaGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCd0bXVpcG9zJylcclxuICAgICAgLnRoZW4ocG9zID0+IHRoaXMuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBvcy5zcGxpdCgnLScpLm1hcChwID0+IHAgKyAnOjFweDsnKS5qb2luKCcgJykpKTtcclxuICB9LFxyXG4gIG9uTm90ZUFkZGVkKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25MYXN0Tm90ZVJlbW92ZWQoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25Cb29rbWFya1JlbW92ZWQoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gIH0sXHJcbiAgc2Nyb2xsVG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnaW5qZWN0aW9uJyxcclxuICB0eXBlOiAnY29udGVudCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJyxcclxuXHJcbiAgICAgIC8vIEBSRVNUT1JFUlxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG4gIFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=