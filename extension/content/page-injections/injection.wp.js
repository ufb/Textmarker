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
      'saved:entry': 'onSavedEntry',
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
    var entries = info.entries;
    entries = Array.isArray(entries) ? entries : [entries];
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
      console.log('pass:', req.ev);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeVNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJyZW5hbWVFbnRyeSIsImVudHJ5Iiwib2xkTmFtZSIsInNldFN5bmNGb3JFbnRyeSIsInN5bmNlZCIsInJlbW92ZUVudHJ5IiwiZGVsZXRlZEVudHJ5IiwiaGFzT3duUHJvcGVydHkiLCJhZGRFbnRyaWVzIiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInNldFBhZ2VQYXJhbXMiLCJ3aW5kb3ciLCJwYXJlbnQiLCJVUkwiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJlbWl0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJib29rbWFyayIsImdldEVsZW1lbnRCeUlkIiwib25FbnRyaWVzRm91bmQiLCJBcnJheSIsImlzQXJyYXkiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwidXBkYXRlTmFtZSIsImZpcnN0RW50cnkiLCJoYW5kbGVyIiwibWFya2VyIiwidXBkYXRlIiwibWFya21ldGhvZCIsInNldE1hcmtlciIsImtleSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJsaXN0ZW5pbmciLCJzdGFydExpc3RlbmluZyIsInN0b3BMaXN0ZW5pbmciLCJvbk1vdXNldXAiLCJiaW5kIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9TdHJpbmciLCJfQk9PS01BUksiLCJtYXJrIiwiYW5jaG9yIiwid3JhcHBlcnMiLCJ3Iiwia2V5RGF0YSIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYm0iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhY3RpdmF0ZSIsIm9uIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVtb3ZlTGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJidXR0b24iLCJ0YXJnZXQiLCJjb250YWlucyIsImdldEF0dHJpYnV0ZSIsIl9NQVJLIiwicHJlU2V0dGluZ3MiLCJkZWZhdWx0cyIsImlzSW1tdXQiLCJzdHlsZSIsImNvbmRzIiwidGV4dCIsIm5vdGUiLCJkIiwiaWRjb3VudCIsInNpbXBsZSIsInJhbmdlIiwic3RhcnRPZmZzZXQiLCJlbmRPZmZzZXQiLCJjb250YWluZXJzIiwiYW5jaG9yTm9kZVBvc2l0aW9uIiwiZm9jdXNOb2RlUG9zaXRpb24iLCJkZXNjcmliZV9pbW11dCIsIm5vZGVzIiwibiIsImNyZWF0ZVdyYXBwZXJzIiwibGFzdEluZGV4Iiwibm9kZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNldFN0YXJ0Iiwic2V0RW5kIiwic3Vycm91bmRDb250ZW50cyIsInB1c2giLCJwYXJlbnROb2RlIiwibm9ybWFsaXplIiwiZGVmaW5lUG9zaXRpb24iLCJzZXRCb29rbWFyayIsImRlc2NyaWJlIiwicmVnaXN0ZXJDbGlja0xpc3RlbmVycyIsIndyYXBwZXIiLCJwcm94eSIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImluY2x1ZGluZ09mZnNldHMiLCJmaXJzdFdyYXBwZXIiLCJsYXN0V3JhcHBlciIsImZpcnN0UGFyZW50IiwibGFzdFBhcmVudCIsImFuY2hvclByZXYiLCJmb2N1c1ByZXYiLCJ3aGljaENoaWxkIiwicHJldmlvdXNTaWJsaW5nIiwibm9kZVR5cGUiLCJkYXRhIiwiY29udGFpbmVyIiwicmVwbGFjZUNoaWxkIiwiZmlyc3RDaGlsZCIsInNlbGYiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb2xsZWN0Tm9kZXMiLCJjb2xsYXBzZVRvU3RhcnQiLCJjcmVhdGUiLCJjaGlsZCIsImluY2x1ZGluZ1RleHROb2RlcyIsImNoaWxkcmVuIiwiYyIsIm51bWJlciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic3RhcnQiLCJzdGFydENvbnRhaW5lciIsImVuZCIsImVuZENvbnRhaW5lciIsInNpbmdsZU5vZGUiLCJwYXJlbnRJc1RNIiwiaGFzQXR0cmlidXRlIiwiZ3JhbXBhIiwiZ3JhbmRncmFtcGEiLCJmVE5QIiwibyIsIm4xIiwibm9kZU5hbWUiLCJwMSIsIm4yIiwicDIiLCJwMyIsInA0Iiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiYW5jaG9yTm9kZSIsImZvY3VzTm9kZSIsInMiLCJwIiwiYXBwZW5kZWQiLCJoZWlnaHQiLCJwb3B1cCIsImVsIiwiYmdDb2xvclJlZ0V4cCIsImJnQ29sb3IiLCJjb2xvckJ0biIsIm0iLCJtYXRjaCIsImFwcGVuZENoaWxkIiwiYmFja2dyb3VuZCIsInBvcCIsInJlbW92ZUNoaWxkIiwic2hvdyIsInBvcHVwSGVpZ2h0Iiwib25Nb3VzZWRvd24iLCJzZWxlY3Rpb25Qb3NpdGlvbiIsImdldFJhbmdlQXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJvZmZzZXRIZWlnaHQiLCJNYXRoIiwibWF4IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJhcHBseSIsImF1dG9ub3RlIiwidW5kbyIsIm5vQXV0b3NhdmUiLCJ1bmRvQm9va21hcmsiLCJyZWRvIiwiY3V0T3V0IiwidG9CZVJlbW92ZWQiLCJpbmRpY2VzIiwic21hbGxlc3RJRCIsImZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzIiwiaiIsIngiLCJtYXJrc0ludGVyc2VjdCIsImluY2x1ZGVzIiwic29ydCIsInNoaWZ0IiwibWluIiwic3BsaWNlIiwiZ2V0QnlJZCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsImZvckVhY2giLCJhcmciLCJvcHRpb25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoaWdobGlnaHQiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHRDb250ZW50Iiwic2lsZW50IiwiaW1tdXRhYmxlIiwic2F2ZSIsInJlcXVlc3QiLCJncmFudGVkIiwic3ViIiwiaTE4biIsImdldE1lc3NhZ2UiLCJwcm9tcHQiLCJyZXRyaWV2ZUVudHJ5IiwiY29uZmlybWVkIiwiY29uZmlybSIsImNvcHkiLCJmaW5kTWFyayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRyaW0iLCJzdG9yZSIsIm9yZGVyIiwib3JkZXJNYXJrc1Zpc3VhbGx5IiwicmVjcmVhdGUiLCJfU0VMRUNUSU9OIiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJhcmVhX2hpc3RvcnkiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXRUaW1lb3V0Iiwic2V0IiwicmVtb3ZlQm9va21hcmsiLCJtYXJrMSIsIm1hcmsyIiwibTEiLCJtMiIsImJiMSIsImJiMiIsInRvcDEiLCJ0b3AyIiwibWFwIiwid3JhcHBlcnMxIiwidzEiLCJpZDEiLCJ3cmFwcGVyczIiLCJpZDIiLCJ3MiIsIm9uTWFya2VyS2V5Iiwib25Ib3RrZXkiLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0Iiwia0QiLCJvbkhhc2hDaGFuZ2UiLCJjb2xvciIsIkJPRFkiLCJET00iLCJjbGljayIsImtleXVwIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwibWFya0NsaWNrSGFuZGxlciIsInZpc2libGUiLCJyZWNlbnRseVVwZGF0ZWQiLCJzZXR0aW5nc01vZGUiLCJ0Iiwic2l6ZSIsImgiLCJkcmFnRFgiLCJkcmFnRFkiLCJtdXRhdGlvbk9ic2VydmVyIiwiYWRqdXN0Tm90ZURhdGFPYmplY3QiLCJjcmVhdGVOb3RlRWxlbWVudCIsImFkZExpc3RlbmVycyIsImFkZE1hcmtMaXN0ZW5lcnMiLCJub3RlRGF0YSIsImhlYWRlciIsImFjdGlvbnMiLCJkZWwiLCJnZWFyIiwicGFsZXR0ZSIsInRleHRFbGVtZW50IiwiZGVsVGV4dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pblRleHQiLCJnZWFyVGV4dCIsImNsYXNzTmFtZSIsInZhbHVlIiwiYXR0ZW1wdFVwZGF0ZSIsIl9kZWxldGUiLCJoaWRlIiwicmVtb3ZlTWFya0xpc3RlbmVycyIsImZvcmNlIiwiaW5uZXJXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRQb3NpdGlvbiIsIm9mZnNldCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIiLCJicmluZ1VwRnJvbnQiLCJ6SW5kZXgiLCJkaXNjb25uZWN0IiwidG9nZ2xlIiwidG9nZ2xlUGFsZXR0ZSIsImNoYW5nZUNvbG9yIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dGFyZWEiLCJjb25maWciLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJzYXZlU2l6ZSIsIm9ic2VydmUiLCJyZWN0IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvbkRyYWdTdGFydCIsInBhZ2VYIiwicGFnZVkiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJtdXRhdGlvbnNMaXN0Iiwid2lkdGgiLCJub3RlcyIsImRyYWdIYW5kbGVyIiwiZHJhZ1N0b3BIYW5kbGVyIiwidXBkYXRlVHJhbnNwIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJtZXRoIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJzdGFydERyYWdnaW5nTm90ZSIsImVtaXREcmFnRXZlbnQiLCJzdG9wRHJhZ2dpbmdOb3RlIiwiZG9jIiwic2VuZE5vdGVzU3RhdGUiLCJhdXRvUGF1c2UiLCJrZXlkb3duIiwic2VsZWN0aW9uY2hhbmdlIiwic2VsZWN0aW9uQ29sbGFwc2VkIiwic2hpZnRTZW5zaXRpdmVLZXlzIiwia2V5Q29kZU1hcCIsImlzRWRpdGFibGUiLCJ0YWdOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiZGVsZWdhdGUiLCJ0b0xvd2VyQ2FzZSIsImtleUNvZGUiLCJtb2RLZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiYXJyb3dLZXlzIiwibG9ja2VkQWN0aW9ucyIsImZ1bmN0aW9uS2V5cyIsImRlZmF1bHRNYXJrZXJzIiwib3JpZ0tleSIsImlzTWFya2VyS2V5IiwiaXNDdXN0b21NYXJrZXJLZXkiLCJzZXR0aW5nIiwic2hvcnRjdXQiLCJzMSIsInMyIiwicmVzdG9yZWQiLCJmYWlsZWQiLCJmYWlsdXJlUmVwb3J0IiwiSW1tdXRSZXN0b3JlciIsIlJlc3RvcmVyIiwicmV0cnkiLCJvbkZhaWx1cmUiLCJyZXBvcnQiLCJnZXRSZXBvcnQiLCJtc2ciLCJyZWFzb24iLCJSZXN0b3JlckJhc2UiLCJhcmVhIiwicHJvYyIsImNiIiwicmVjIiwiZXhwaXJlIiwibGwiLCJ0ZW1wIiwicXVldWUiLCJjYWNoZSIsInBoYXNlIiwic2VsZWN0aW9uVHJpYWwiLCJjaHVua0R1cmF0aW9uIiwiX3RpbWVyIiwib29tIiwiaW5pdCIsIm5vdyIsInBvc3Rwb25lZCIsImNvbnZlcnREZXNjcmlwdGlvbiIsImNyZWF0ZVRlbXBPYmplY3QiLCJjb252ZXJ0ZWRDb25kcyIsImZpcnN0Tm9kZU5hbWUiLCJmaXJzdFBhcmVudE5vZGVOYW1lIiwiZmlyc3RUZXh0Tm9kZVBvc2l0aW9uIiwiZmlyc3ROb2RlUG9zaXRpb24iLCJmaXJzdFBhcmVudE5vZGVQb3NpdGlvbiIsImZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uIiwidHJpbW1lZFRleHQiLCJzcXVlZXplZFRleHQiLCJzcXVlZXplIiwidGV4dExlbmd0aCIsInRyaW1tZWRUZXh0TGVuZ3RoIiwic3F1ZWV6ZWRUZXh0TGVuZ3RoIiwicG9zc2libGVQb3NpdGlvbnMiLCJwb3NzaWJsZUVuZFBvc2l0aW9ucyIsInBvc3NpYmxlU3RhcnROb2RlcyIsInBvc3NpYmxlRW5kcyIsInBvc3NpYmxlRm9jdXNPZmZzZXRzIiwic29ydFF1ZXVlQnlJZCIsInNldEJvZHlTZWxlY3Rpb24iLCJnZXRUZXh0UG9zaXRpb25zIiwicG9zdHBvbmVPdmVybGFwcGluZ3MiLCJmaW5kUG9zc2libGVFeHRyZW1hIiwicnVsZU91dE11bHRpcGxlcyIsInJlc3RvcmVSYW5nZXMiLCJ0aW1lciIsInJlcyIsInRyaW1tZWRTZWxlY3Rpb25UZXh0IiwiYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyIsImVuZFBvc2l0aW9ucyIsIm1hcmtUZW1wIiwic29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJtYXhQb3NpdGlvbiIsInBvc2l0aW9ucyIsInBvczEiLCJwb3MyIiwicG9zdHBvbmUiLCJjdXRPdXRGb3IiLCJhbHJlYWR5SW5jbHVkZWQiLCJib2R5VGV4dE5vZGVzIiwic2F0aXNmaWVkIiwiY2hhcnMiLCJuZXh0U3RhcnRGb3VuZCIsImVuZGluZ3NJblRoaXNOb2RlIiwibm9kZXNUZXh0Iiwibm9kZXNUZXh0TGVuZ3RoIiwiZGlmZiIsImYiLCJxIiwicG9zc2libGVGb2N1c09mZnNldCIsInN0YXJ0Rm91bmRGb3IiLCJoYXNFbmRpbmdzSW5UaGlzTm9kZSIsImVuZEZvdW5kRm9yIiwic2F0aXNmaWVzRGVzY3JpcHRpb24iLCJmaW5kRm9jdXNPZmZzZXQiLCJncmFuZGdyYW5kZ3JhbXBhIiwibWF0Y2hlcyIsInN0YXJ0Tm9kZSIsInN0YXJ0Tm9kZVBvc2l0aW9uIiwic2V0TWF0Y2hpbmdFbmQiLCJlbmROb2RlIiwiZW5kTm9kZVBvc2l0aW9uIiwiZm9jdXNPZmZzZXQiLCJkZXNjcmlwdGlvbiIsInJlbGV2YW50Tm9kZVRleHQiLCJtYXJrVGV4dCIsInRleHRzTWF0Y2giLCJub2RlVGV4dCIsImNvdW50ZXIiLCJ0ZXN0IiwiY3JlYXRlUmFuZ2UiLCJyZWNvbGxlY3ROb2RlcyIsInNsaWNlIiwiY29udGV4dCIsImN1cnJlbnRDaGlsZCIsInByb2Nlc3NJbkNodW5rcyIsInJlc3RvcmVSYW5nZSIsImdldE5vZGUiLCJ0ZXh0Tm9kZVBvc2l0aW9uIiwicmFuZ2VDb3VudCIsImRlZmluZWQiLCJyZWR1Y2VUb09uZVJhbmdlIiwicmV0cmlldmVUZXh0IiwiYWRqdXN0Iiwic2VsZWN0QWxsQ2hpbGRyZW4iLCJwcm9wcyIsImlzU2ltcGxlIiwiZm9jdXMiLCJpc0JhY2t3YXJkcyIsInJldmVyc2UiLCJmaXJzdFRleHROb2RlIiwibGFzdFRleHROb2RlIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJ3aG9sZURvY3VtZW50IiwiZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJmaWx0ZXIiLCJpc1NlbGVjdGFibGUiLCJpc0JsYW5rIiwiaGFzTm9ybWFsUGFyZW50IiwiY29udGFpbnNOb2RlIiwiaXRlcmF0b3IiLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiYWNjZXB0Tm9kZSIsInBhcmVudE5vZGVzIiwidGV4dE5vZGUiLCJmaXJzdE5vZGUiLCJsYXN0Tm9kZSIsIm5leHROb2RlIiwidHJpbVNlbGVjdGlvbiIsInJlZHVjZVRvU2VsZWN0YWJsZSIsImNvbGxlY3RQYXJlbnROb2RlcyIsIm1hcmtXcmFwcGVycyIsIm5ld1NlZ21lbnQiLCJwcmV2IiwibmV4dCIsIm5leHRTaWJsaW5nIiwidW5zaGlmdCIsImFuY2hvck9mZnNldCIsInN1YnN0ciIsInNlbCIsInJnIiwic2VsZWN0Tm9kZSIsInBhcmVudHMiLCJub2RlVGV4dHMiLCJqb2luIiwibm9kZTEiLCJub2RlMiIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwicmFuZ2UwIiwibGFzdFJhbmdlIiwidGFnIiwidG9VcHBlckNhc2UiLCJpc0NoaWxkT2YiLCJzZWFyY2giLCJhdHRhY2hlZCIsImJ1dHRvbnMiLCJzaG93biIsImNyZWF0ZUJ1dHRvbnMiLCJ1cGRhdGVTdGF0ZSIsInNob3VsZEF0dGFjaCIsInJlbmRlciIsImJ0biIsImIiLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJ1cGRhdGVQb3NpdGlvbiIsInRtdWkiLCJub3Rlc0J1dHRvbiIsImJvb2ttYXJrQnV0dG9uIiwidHlwZSIsInRvZ2dsZU5vdGVzIiwib25Ob3RlQWRkZWQiLCJvbkxhc3ROb3RlUmVtb3ZlZCIsIm9uQm9va21hcmtBZGRlZCIsIm9uQm9va21hcmtSZW1vdmVkIiwiT05FT0ZGIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInoiLCJ5IiwiYXJyb3d1cCIsImFycm93ZG93biIsInNiIiwiY20iLCJzYXZlSW5Qcml2IiwiZHJvcExvc3NlcyIsImRvd25sb2FkIiwic29ydGVkIiwidmlldyIsInBwIiwiYXV0b2NzIiwiaWZyYW1lcyIsIm92ZXJ3cml0ZSIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiY2hhbmdlZE5vdGUiLCJlcnJvck5vdGUiLCJ2aXBOb3RlIiwiY3VzdG9tU2VhcmNoIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInRhYnMiLCJtZXRhIiwidW5mb2xkZWQiLCJ0YWdzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsInN5bmMiLCJNQVhfTE9HX0VOVFJJRVMiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidmFsIiwicHJvcCIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImRvbUV2ZW50cyIsImdlbmVyYWxIYW5kbGVyIiwiX2V4dHJhIiwiZXJyb3IiLCJmaWxlIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImFyZ3MiLCJ0b3BpYyIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsYXN0QXJnIiwidGFiIiwiZnJhbWVJZCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0Iiwib25Db25uZWN0IiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJfREVGQVVMVF9TVE9SQUdFIiwiYXJlYV9wYWdlbm90ZXMiLCJsb2NhbCIsInNldEFyZWFzIiwiZmllbGQiLCJQcm9taXNlIiwiciIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5IiwibG9ncyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7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Q1YsYUFBT2tCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm12QixLQUFoQixDQUFzQnh3QixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQTR3QixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQ0ssSUFBbkMsRUFBeUMsT0FBTyxFQUFQO0FBQ3pDLGVBQU9MLFlBQVksQ0FBQ0ssSUFBcEI7QUFDRCxPQUhNLENBQVA7QUFJRDs7O21DQUNjO0FBQ2IsYUFBTzl2QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JtdkIsS0FBaEIsQ0FBc0J4d0IsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUE0d0IsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNoSSxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT3puQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IycEIsSUFBaEIsQ0FBcUJockIsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUE2d0IsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUNqSSxPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU9nSSxZQUFZLENBQUNoSSxPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QnpxQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGFzaG9wdC1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJzogJ3NldFN5bmNGb3JFbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnOiAncmVuYW1lRW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBlbnY6ICdpbmplY3Rpb24nLFxyXG5cclxuICB1cmw6ICcnLFxyXG4gIGhhc2hsZXNzVVJMOiAnJyxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47Ly9zaG93IG5vdGlmaWNhdGlvblxyXG5cclxuICAgIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZW5hbWVFbnRyeShlbnRyeSwgb2xkTmFtZSkge1xyXG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUgPT09IG9sZE5hbWUgJiYgIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIGlmICh0aGlzLmVudHJpZXNbb2xkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0U3luY0ZvckVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkICYmIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSkge1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0uc3luY2VkID0gZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUVudHJ5KGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICBpZiAoZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lID09PSBkZWxldGVkRW50cnkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICBhZGRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQpIHRoaXMubmFtZSA9IGVudHJpZXNbMF0ubmFtZTtcclxuICAgIGNvbnN0IGUgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZW50cmllc1swXS5pbW11dDtcclxuICB9LFxyXG5cclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdG11aSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyLXBvcHVwJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9hdXRvLW1hcmtlcidcclxuXHJcbmltcG9ydCAnLi9tYWluJ1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5pbXBvcnQgX1JFU1RPUkVSIGZyb20gJy4vbW9kdWxlcy9yZXN0b3JlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAnb25TYXZlZEVudHJ5JyxcclxuICAgICAgJ3Jlc3VtZWQtb24taGFzaGNoYW5nZSc6ICdzZXRQYWdlUGFyYW1zJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmRQYWdlU3RhdGUnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ2FjdGl2YXRlUmV0cnknLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcblxyXG4gICAgICAvLyBAUkVTVE9SRVJcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnOiAnb25FbnRyaWVzRm91bmQnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmV0cnlBY3RpdmU6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuc2V0UGFnZVBhcmFtcygpO1xyXG4gIH0sXHJcblxyXG4gIHNldFBhZ2VQYXJhbXMoKSB7XHJcbiAgICBfU1RPUkUuaWZyYW1lID0gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIF9TVE9SRS51cmwgPSB3aW5kb3cuZG9jdW1lbnQuVVJMO1xyXG4gICAgX1NUT1JFLmhhc2hsZXNzVVJMID0gX0hBU0hMRVNTKF9TVE9SRS51cmwpO1xyXG4gIH0sXHJcbiAgb25TYXZlZEVudHJ5KGVudHJ5KSB7XHJcbiAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAoZW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLmFkZEVudHJpZXMoW2VudHJ5XSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IHRydWU7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICB0aGlzLnJldHJ5QWN0aXZlID0gZmFsc2U7XHJcbiAgfSxcclxuICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgncGFnZS1zdGF0ZScsIHtcclxuICAgICAgc2VsZWN0aW9uOiAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkLFxyXG4gICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgcmV0cnlBY3RpdmU6IHRoaXMucmV0cnlBY3RpdmVcclxuICAgIH0sIGluZm8pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEBSRVNUT1JFUlxyXG4gIG9uRW50cmllc0ZvdW5kKGluZm8pIHtcclxuICAgIGxldCBlbnRyaWVzID0gaW5mby5lbnRyaWVzO1xyXG4gICAgZW50cmllcyA9IEFycmF5LmlzQXJyYXkoZW50cmllcykgPyBlbnRyaWVzIDogW2VudHJpZXNdO1xyXG5cclxuICAgIF9SRVNUT1JFUigpO1xyXG4gICAgX1NUT1JFLmFkZEVudHJpZXMoZW50cmllcyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NldDplbnRyaWVzJywgZW50cmllcyk7XHJcbiAgICBpZiAoaW5mby5yZWNlbnRseU9wZW5lZEVudHJ5KSB0aGlzLnVwZGF0ZU5hbWUoZW50cmllcywgaW5mby5yZWNlbnRseU9wZW5lZEVudHJ5KTtcclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTptYXJrcycsIGluZm8uZW50cmllcyk7XHJcbiAgfSxcclxuICB1cGRhdGVOYW1lKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFmaXJzdEVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcic6ICdzZXRNYXJrZXInXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBtYXJrZXI6ICdtJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldE1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMubWFya2VyID0ga2V5O1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiB0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNldXAuYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbk1vdXNldXAoKSB7XHJcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgdGhpcy5tYXJrZXIpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQk9PS01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFyayA9IG51bGw7XHJcbiAgICB0aGlzLmFuY2hvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQobWFyaykge1xyXG4gICAgbWFyayA9IG1hcmsgfHwgdGhpcy5tYXJrO1xyXG5cclxuICAgIGxldCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuICAgICAgICBhbmNob3IgPSB3cmFwcGVyc1swXTtcclxuXHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgYW5jaG9yLmlkID0gJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJztcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcblxyXG4gICAgdGhpcy5tYXJrID0gbWFyaztcclxuICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZW1vdmUoKSB7XHJcbiAgICBsZXQgbWFyayA9IHRoaXMubWFyayxcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvcixcclxuICAgICAgICB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aDtcclxuXHJcbiAgICBhbmNob3IuaWQgPSAnJztcclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuICB9XHJcbiAgc2Nyb2xsSW50b1ZpZXcoYm0pIHtcclxuICAgIGlmIChibSB8fCAoYm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJykpKVxyXG4gICAgICBibS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKHRydWUpO1xyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlKG9uKSB7XHJcbiAgICBpZiAob24gJiYgIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVnaXN0ZXJIYW5kbGVyKCkge1xyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpIHtcclxuICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgX1NUT1JFLnRtaWQgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSwgd2luZG93LmRvY3VtZW50KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXJrZXIsIGtleSwgcHJlU2V0dGluZ3MsIGltbXV0KSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uLCBkZWZhdWx0cztcclxuXHJcblx0XHR0aGlzLm1hcmtlciA9IG1hcmtlcjtcclxuXHRcdHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbWFya2VyLnNlbGVjdGlvbjtcclxuICAgIHRoaXMuaW1tdXQgPSBfU1RPUkUucmVkZXNjcmliaW5nID8gbWFya2VyLmlzSW1tdXQgOiBpbW11dDtcclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICAgIGNvbmRzOiBudWxsLFxyXG4gICAgICB0ZXh0OiBzZWxlY3Rpb24udGV4dCxcclxuICAgICAgbm90ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGQgaW4gZGVmYXVsdHMpIHtcclxuICAgICAgaWYgKCFwcmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShkKSkge1xyXG4gICAgICAgIHByZVNldHRpbmdzW2RdID0gZGVmYXVsdHNbZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZVNldHRpbmdzLmlkID0gcHJlU2V0dGluZ3MuaWQgfHwgKyttYXJrZXIuaWRjb3VudDtcclxuXHRcdHRoaXMuaWQgPSBwcmVTZXR0aW5ncy5pZDtcclxuXHRcdHRoaXMuc2ltcGxlID0gc2VsZWN0aW9uLnNpbXBsZTtcclxuXHJcblx0XHRsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLnJhbmdlO1xyXG5cclxuXHRcdHRoaXMuc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldDtcclxuXHRcdHRoaXMuZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0O1xyXG5cclxuXHRcdHRoaXMud3JhcHBlcnMgPSBudWxsO1xyXG4gICAgdGhpcy5jb250YWluZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhID0ge1xyXG5cdFx0XHRpZDogcHJlU2V0dGluZ3MuaWQsXHJcblx0XHRcdGtleToga2V5LFxyXG5cdFx0XHRzdHlsZTogcHJlU2V0dGluZ3Muc3R5bGUsXHJcblx0XHRcdGNvbmRzOiBwcmVTZXR0aW5ncy5jb25kcyxcclxuXHRcdFx0dGV4dDogcHJlU2V0dGluZ3MudGV4dCxcclxuXHRcdFx0Ym9va21hcms6IHByZVNldHRpbmdzLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiBwcmVTZXR0aW5ncy5ub3RlLFxyXG4gICAgICBzeW5jZWQ6IHByZVNldHRpbmdzLnN5bmNlZFxyXG5cdFx0fTtcclxuXHJcbiAgICBpZiAodGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkge1xyXG4gICAgICB0aGlzLmRlc2NyaWJlX2ltbXV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHRjcmVhdGUocmFuZ2UpIHtcclxuICAgIHJhbmdlID0gcmFuZ2UgfHwgdGhpcy5yYW5nZTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBzdHlsZSA9IHRoaXMua2V5RGF0YS5zdHlsZSxcclxuICAgICAgICBub2RlcyA9IHNlbGVjdGlvbi5ub2RlcyxcclxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgfHwgdGhpcy5jcmVhdGVXcmFwcGVycyhzdHlsZSwgbiksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbGFzdEluZGV4ID0gbiAtIDEsXHJcbiAgICAgICAgbm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgICAgaWYgKCFpKSByYW5nZS5zZXRTdGFydChub2RlLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuXHJcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcnNbaV0pO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh3cmFwcGVyc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKHRoaXMua2V5RGF0YS5ib29rbWFyaykgdGhpcy5tYXJrZXIuc2V0Qm9va21hcmsodGhpcywgZmFsc2UpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkgdGhpcy5kZXNjcmliZSgpO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJDbGlja0xpc3RlbmVycygpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuICByZWdpc3RlckNsaWNrTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgZm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrZXIucHJveHkodGhpcywgdGhpcy5vbkNsaWNrKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNsaWNrKGUpIHtcclxuICAgIGxldCBldmVudDtcclxuICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICBldmVudCA9ICdjbGlja2VkOm1hcmsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlICsgJ18wJztcclxuICAgICAgZXZlbnQgPSAnYWN0aXZhdGVkOm1hcmsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXJrZXIuZW1pdChldmVudCwge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgYm9va21hcms6ICEhdGhpcy5rZXlEYXRhLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiAhIXRoaXMua2V5RGF0YS5ub3RlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVmaW5lUG9zaXRpb24obiwgaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgbGV0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIG4gPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogd3JhcHBlcnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGZpcnN0V3JhcHBlciA9IHdyYXBwZXJzWzBdO1xyXG4gICAgY29uc3QgbGFzdFdyYXBwZXIgPSB3cmFwcGVyc1tuXTtcclxuICAgIGNvbnN0IGZpcnN0UGFyZW50ID0gZmlyc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBsYXN0UGFyZW50ID0gbGFzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGxldCBhbmNob3JQcmV2LCBmb2N1c1ByZXY7XHJcblxyXG4gICAgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQoZmlyc3RQYXJlbnQsIGZpcnN0V3JhcHBlciwgdHJ1ZSkgLSAxO1xyXG4gICAgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChsYXN0UGFyZW50LCBsYXN0V3JhcHBlciwgdHJ1ZSk7XHJcblxyXG4gICAgYW5jaG9yUHJldiA9IGZpcnN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBmb2N1c1ByZXYgPSBsYXN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcblxyXG4gICAgaWYgKGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5ub2RlVHlwZSA9PT0gMSkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gKz0gMTtcclxuICAgIGlmICghZm9jdXNQcmV2IHx8IGZvY3VzUHJldi5ub2RlVHlwZSA9PT0gMyB8fCBmaXJzdFBhcmVudCA9PT0gbGFzdFBhcmVudCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiAtPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA8IDApIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gMDtcclxuICAgIGlmICh0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgaWYgKGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgICAgdGhpcy5zdGFydE9mZnNldCA9IGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5kYXRhID8gYW5jaG9yUHJldi5kYXRhLmxlbmd0aCA6IDA7XHJcbiAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdGhpcy5zaW1wbGUgPyB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5rZXlEYXRhLnRleHQubGVuZ3RoIDogdGhpcy5lbmRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbih1bmRlZmluZWQsIHRydWUpXHJcbiAgICAgICAgLmRlc2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cdHVuZG8oKSB7XHJcblx0XHRsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuXHRcdFx0XHR3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMsXHJcblx0XHRcdFx0dyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuXHRcdFx0XHRjb250YWluZXIsIHdyYXBwZXI7XHJcblxyXG5cdFx0d2hpbGUgKHctLSkge1xyXG5cdFx0XHRjb250YWluZXIgPSBjb250YWluZXJzW3ddO1xyXG5cdFx0XHR3cmFwcGVyID0gd3JhcHBlcnNbd107XHJcblx0XHRcdGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcclxuXHRcdFx0Y29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHJlZG8oKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChjb250YWluZXJzWzBdLmNoaWxkTm9kZXNbdGhpcy5hbmNob3JOb2RlUG9zaXRpb25dLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV0uY2hpbGROb2Rlc1t0aGlzLmZvY3VzTm9kZVBvc2l0aW9uXSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24uY29sbGVjdE5vZGVzKCk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKCk7XHJcblx0fVxyXG5cdHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgaW5jbHVkaW5nVGV4dE5vZGVzKSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdGxldCBjaGlsZHJlbiA9IGluY2x1ZGluZ1RleHROb2RlcyB8fCBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0XHRcdGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHRjcmVhdGVXcmFwcGVycyhzdHlsZSwgbnVtYmVyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICB3cmFwcGVyO1xyXG5cclxuXHRcdGZvciAoIDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcblx0XHRcdHdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0Jyk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UoLzsvZywgJyFpbXBvcnRhbnQ7JykpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcsIHRoaXMuaWQgKyAnXycgKyBpKTtcclxuICAgICAgLy93cmFwcGVyLnNldEF0dHJpYnV0ZSgnY29udGV4dG1lbnUnLCAndGV4dG1hcmtlci1jdG0nKTtcclxuXHRcdFx0d3JhcHBlcnMucHVzaCh3cmFwcGVyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3cmFwcGVycztcclxuXHR9XHJcbiAgZGVzY3JpYmUoKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XHJcblx0XHRjb25zdCBlbmQgPSByYW5nZS5lbmRDb250YWluZXI7XHJcblx0XHRjb25zdCBzaW5nbGVOb2RlID0gdGhpcy5zaW1wbGU7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLndyYXBwZXJzWzBdLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBwYXJlbnRJc1RNID0gcGFyZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG5cdFx0Y29uc3QgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBncmFuZGdyYW1wYSA9IGdyYW1wYS5wYXJlbnROb2RlIHx8IDA7XHJcblx0XHRjb25zdCBmVE5QID0gdGhpcy5hbmNob3JOb2RlUG9zaXRpb247XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG5cdFx0XHRvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG5cdFx0XHRuMTogcGFyZW50SXNUTSA/ICdUTScgOiBwYXJlbnQubm9kZU5hbWUsXHJcblx0XHRcdHAxOiBmVE5QLFxyXG5cdFx0XHRuMjogZ3JhbXBhLm5vZGVOYW1lLFxyXG5cdFx0XHRwMjogdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSxcclxuXHRcdFx0cDM6IGdyYW5kZ3JhbXBhID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLCBncmFtcGEpIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRwNDogZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYS5wYXJlbnROb2RlLCBncmFuZGdyYW1wYSkgOiB1bmRlZmluZWRcclxuXHRcdH07XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG5cdH1cclxuICBkZXNjcmliZV9pbW11dCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgZW5kUG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGxldCBzdGFydCA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGVuZCA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBib2R5KSB7XHJcbiAgICAgIHN0YXJ0UG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoc3RhcnQucGFyZW50Tm9kZSwgc3RhcnQpKTtcclxuICAgICAgc3RhcnQgPSBzdGFydC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGVuZCAhPT0gYm9keSkge1xyXG4gICAgICBlbmRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChlbmQucGFyZW50Tm9kZSwgZW5kKSk7XHJcbiAgICAgIGVuZCA9IGVuZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgcDogc3RhcnRQb3NpdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBlOiB7XHJcbiAgICAgICAgbzogdGhpcy5lbmRPZmZzZXQsXHJcbiAgICAgICAgcDogZW5kUG9zaXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBhcHBlbmRlZDogZmFsc2UsXHJcbiAgaGVpZ2h0OiAwLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdwb3B1cCc7XHJcbiAgICAgIHRoaXMubWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwJyk7XHJcbiAgICBjb25zdCBiZ0NvbG9yUmVnRXhwID0gL2JhY2tncm91bmQtY29sb3I6KCNbYS1mMC05XXs2fSkvO1xyXG4gICAgbGV0IGJnQ29sb3IsIGNvbG9yQnRuO1xyXG4gICAgZm9yIChsZXQgbSBpbiB0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgYmdDb2xvciA9IHRoaXMubWFya2Vyc1ttXS5zdHlsZS5tYXRjaChiZ0NvbG9yUmVnRXhwKTtcclxuICAgICAgaWYgKGJnQ29sb3IpIHtcclxuICAgICAgICBjb2xvckJ0biA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwY29sb3InKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChjb2xvckJ0bik7XHJcbiAgICAgICAgY29sb3JCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3IucG9wKCk7XHJcbiAgICAgICAgY29sb3JCdG4uaWQgPSAndG1wb3B1cGNvbG9yLS0nICsgbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3coKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBzdHlsZSA9IHBvcHVwLnN0eWxlO1xyXG4gICAgbGV0IHBvcHVwSGVpZ2h0O1xyXG5cclxuICAgIGlmICghdGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5hcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gc2VsZWN0aW9uUG9zaXRpb24udG9wIC0gc2VsZWN0aW9uUG9zaXRpb24uaGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgKyAncHgnO1xyXG4gICAgICBzdHlsZS5sZWZ0ID0gc2VsZWN0aW9uUG9zaXRpb24ubGVmdCArIHdpbmRvdy5zY3JvbGxYICsgJ3B4JztcclxuXHJcbiAgICAgIHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gTWF0aC5tYXgoMCwgcGFyc2VJbnQoc3R5bGUudG9wKSAtIHBvcHVwSGVpZ2h0KSArICdweCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgocG9wdXBIZWlnaHQgPSBwb3B1cC5vZmZzZXRIZWlnaHQpICE9PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApICsgcG9wdXBIZWlnaHQgLSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhlaWdodCA9IHBvcHVwSGVpZ2h0O1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoIXNlbGVjdGVkKSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25Nb3VzZWRvd24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdUTVBPUFVQQ09MT1InKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwb3B1cC1tYXJrZXInLCBlbC5pZC5zcGxpdCgnLS0nKS5wb3AoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUksgZnJvbSAnLi9tYXJrLWl0ZW0nXHJcbmltcG9ydCBfQk9PS01BUksgZnJvbSAnLi9ib29rbWFyaydcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcblx0ZXZlbnRzOiB7XHJcblx0XHRFTlY6IHtcclxuXHRcdFx0J3NldDplbnRyaWVzJzogJ3VwZGF0ZUlEJyxcclxuXHRcdFx0J3ByZXNzZWQ6bWFya2VyLWtleSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdwcmVzc2VkOmhvdGtleSc6ICdvbkhvdGtleScsXHJcbiAgICAgICdjbGlja2VkOnBvcHVwLW1hcmtlcic6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdzZWxlY3Rpb24tZW5kJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3Jlc3RvcmVkOnJhbmdlJzogJ3JlY3JlYXRlJyxcclxuICAgICAgJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2N0eDpiJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgJ2N0eDotYic6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICdjdHg6ZCc6ICdyZW1vdmUnLFxyXG4gICAgICAnY3R4Om0nOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnY3R4Om4nOiAnYWRkTm90ZScsXHJcbiAgICAgICdjdHg6Yyc6ICdjb3B5JyxcclxuICAgICAgJ3VwZGF0ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcbiAgICAgICdyZW1vdmVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnY2hhbmdlZDpub3RlLWNvbG9yJzogJ3NhdmVOb3RlJyxcclxuXHRcdFx0J2NoYW5nZWQ6bm90ZS1wb3MnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAnY2hhbmdlZDpub3RlLXNpemUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnc2lkZWJhcjpoaWdobGlnaHQnOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JzogJ3JlbW92ZScsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJzogJ3JlbW92ZUJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnOiAnaW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnOiAnc2F2ZScsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJzogJ3Jlc3VtZScsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nOiAndW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nOiAncmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknOiAnY29weScsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyayc6ICdzY3JvbGxUb0Jvb2ttYXJrJyxcclxuICAgICAgJ3Njcm9sbC10by1ib29rbWFyayc6ICdzY3JvbGxUb0Jvb2ttYXJrJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ29uSGFzaENoYW5nZSdcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNlbGVjdGlvbjogbnVsbCxcclxuXHRkb25lOiBbXSxcclxuXHR1bmRvbmU6IFtdLFxyXG5cdHZpc3VhbGx5T3JkZXJlZE1hcmtzOiBbXSxcclxuXHR2aXN1YWxseU9yZGVyZWRNYXJrSURzOiBbXSxcclxuICBib29rbWFyazogbnVsbCxcclxuICByZW1vdmVkQm9va21hcms6IG51bGwsXHJcblx0aWRjb3VudDogMCxcclxuXHRtYXJrU2Nyb2xsUG9zOiAtMSxcclxuXHJcbiAgdXBkYXRlSUQoZW50cmllcykge1xyXG4gICAgY29uc3QgbCA9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgIGNvbnN0IGlkcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGw7IGkrKykge1xyXG5cclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG5cclxuICAgICAgaWYgKCFsb2NrZWQgJiYgZW50cnkuaWRjb3VudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkY291bnQgPSBlbnRyeS5pZGNvdW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBtYXJrcyA9IChlbnRyeS5tYXJrcyB8fCBbXSkuY29uY2F0KGVudHJ5Lmxvc3QgfHwgW10pLFxyXG4gICAgICAgICAgICBkID0gbWFya3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoZCkge1xyXG4gICAgICAgICAgd2hpbGUgKGQtLSkge1xyXG4gICAgICAgICAgICBpZHMucHVzaChtYXJrc1tkXS5pZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlkY291bnQgPSBNYXRoLm1heC5hcHBseShudWxsLCBpZHMpO1xyXG4gIH0sXHJcblx0bWFyayhrZXksIGRhdGEsIGltbXV0KSB7XHJcblx0XHR0aGlzLnVuZG9uZS5sZW5ndGggPSAwO1xyXG5cclxuICAgIGNvbnN0IG1hcmsgPSBuZXcgX01BUksodGhpcywga2V5LCBkYXRhLCBpbW11dCkuY3JlYXRlKCk7XHJcblxyXG4gICAgaWYgKGRhdGEuYXV0b25vdGUpIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCBtYXJrLCBkYXRhLmF1dG9ub3RlKTtcclxuXHJcblx0XHRyZXR1cm4gbWFyaztcclxuXHR9LFxyXG5cdHVuZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcblx0XHRsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuXHJcblx0XHRpZiAoZG9uZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZS5wb3AoKTtcclxuICAgICAgY29uc3QgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgdGhpcy51bmRvbmUucHVzaChtYXJrLnVuZG8oKSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5ib29rbWFyaykgdGhpcy51bmRvQm9va21hcmsoKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vQXV0b3NhdmUgfHwgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdH0sXHJcblx0cmVkbyhub0F1dG9zYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB1bmRvbmUgPSB0aGlzLnVuZG9uZTtcclxuXHJcblx0XHRpZiAodW5kb25lLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy51bmRvbmUucG9wKCk7XHJcblxyXG4gICAgICB0aGlzLmRvbmUucHVzaChtYXJrLnJlZG8oKSk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCBbbWFya10pO1xyXG4gICAgfVxyXG5cclxuICAgIG5vQXV0b3NhdmUgfHwgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdH0sXHJcbiAgY3V0T3V0KGkpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgbCA9IGRvbmUubGVuZ3RoLFxyXG4gICAgICAgIHRvQmVSZW1vdmVkID0gW2ldLFxyXG4gICAgICAgIGluZGljZXMgPSBbaV0sXHJcbiAgICAgICAgbWFyaywgc21hbGxlc3RJRDtcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhqKSB7XHJcbiAgICAgIGZvciAodmFyIHggPSBqICsgMTsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgIG1hcmsgPSBkb25lW3hdO1xyXG5cclxuICAgICAgICBpZiAobWFya2VyLm1hcmtzSW50ZXJzZWN0KGRvbmVbal0sIG1hcmspKSB7XHJcbiAgICAgICAgICBpZiAoIXRvQmVSZW1vdmVkLmluY2x1ZGVzKHgpKSB0b0JlUmVtb3ZlZC5wdXNoKHgpO1xyXG4gICAgICAgICAgaW5kaWNlcy5wdXNoKHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpbmRpY2VzLnNvcnQoKTtcclxuICAgICAgdG9CZVJlbW92ZWQuc29ydCgpO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGluZGljZXMubGVuZ3RoKSB7XHJcbiAgICAgIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGluZGljZXMuc2hpZnQoKSk7XHJcbiAgICB9XHJcbiAgICBzbWFsbGVzdElEID0gTWF0aC5taW4uYXBwbHkobnVsbCwgdG9CZVJlbW92ZWQpO1xyXG5cclxuICAgIHdoaWxlICh0b0JlUmVtb3ZlZC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5kb25lLnNwbGljZSh0b0JlUmVtb3ZlZC5wb3AoKSwgMSlbMF0udW5kbygpO1xyXG4gICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc21hbGxlc3RJRDtcclxuICB9LFxyXG4gIHJlbW92ZShpZCkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBpZCA9IGlkID8gaWQgOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG4gICAgaWYgKCFpZCkgcmV0dXJuIHRoaXMudW5kbygpO1xyXG5cclxuICAgIGxldCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkLnNwbGl0KCdfJylbMF0pLFxyXG4gICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgbCA9IGRvbmUubGVuZ3RoLFxyXG4gICAgICAgIHBvc2l0aW9uID0gZG9uZS5pbmRleE9mKG1hcmspLFxyXG4gICAgICAgIHNtYWxsZXN0SUQsIGk7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uID09PSBsIC0gMSkge1xyXG4gICAgICB0aGlzLnVuZG8oKTtcclxuICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy51bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaSA9IHRoaXMudW5kb25lLmxlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMudW5kb25lLmxlbmd0aCkgdGhpcy5yZWRvKHRydWUpO1xyXG5cclxuICAgICAgICBzbWFsbGVzdElEID0gdGhpcy5jdXRPdXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdoaWxlIChpLS0pIHRoaXMudW5kbyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkWzBdKTtcclxuICB9LFxyXG4gIHJlc3VtZShhcmcsIG9wdGlvbnMpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dG1hcmtlci1oaWdobGlnaHQnKSlcclxuICAgICAgLmZvckVhY2goaGlnaGxpZ2h0ID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBoaWdobGlnaHQucGFyZW50Tm9kZTtcclxuICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGhpZ2hsaWdodC50ZXh0Q29udGVudCksIGhpZ2hsaWdodCk7XHJcbiAgICAgICAgY29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbmUgPSBbXTtcclxuICAgIHRoaXMudW5kb25lID0gW107XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gW107XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSBbXTtcclxuICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5tYXJrU2Nyb2xsUG9zID0gLTE7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSAhYXJnICYmIF9TVE9SRS5uYW1lICYmIF9TVE9SRS5lbnRyaWVzW19TVE9SRS5uYW1lXSA/IF9TVE9SRS5lbnRyaWVzW19TVE9SRS5uYW1lXSA6IG51bGw7XHJcblxyXG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdyZXN1bWVkOm1hcmtlcnMnLCBlbnRyeSk7XHJcbiAgfSxcclxuICBpbW11dChpbW11dGFibGUpIHtcclxuICAgIHRoaXMuaXNJbW11dCA9IGltbXV0YWJsZTtcclxuICAgIF9TVE9SRS5yZWRlc2NyaWJpbmcgPSB0cnVlO1xyXG4gICAgX1NUT1JFLmltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgdGhpcy5yZXN1bWUoKTtcclxuICB9LFxyXG4gIHNhdmUoKSB7XHJcbiAgICBjb25zdCBpZnJhbWUgPSBfU1RPUkUuaWZyYW1lO1xyXG4gICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuXHJcbiAgICBfU1RPUkUuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB7XHJcbiAgICAgIGlmIChfU1RPUkUuaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgICAgaWYgKCFsb2NrZWQgJiYgbmFtaW5nID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KCduYW1lOmVudHJ5PycpLnRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3ViID0gaWZyYW1lID8gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykgOiAnJztcclxuXHJcbiAgICAgICAgICAgICAgX1NUT1JFLm5hbWUgPSB3aW5kb3cucHJvbXB0KGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlJywgc3ViKSk7XHJcbiAgICAgICAgICAgICAgaWYgKF9TVE9SRS5uYW1lKSB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGNvbmZpcm1lZCA9IHRydWU7XHJcbiAgICAgICAgICBpZiAoaWZyYW1lKSBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSk7XHJcbiAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblx0fSxcclxuICBhdXRvc2F2ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2F1dG9zYXZlJykudGhlbihhdXRvc2F2ZSA9PiB7XHJcbiAgICAgIGlmIChhdXRvc2F2ZSkgdGhpcy5zYXZlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCd1bnNhdmVkLWNoYW5nZXMnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgY29weSgpIHtcclxuICAgIGNvbnN0IG1hcmsgPSB0aGlzLmZpbmRNYXJrKCk7XHJcbiAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuICAgIGNvbnN0IHJhbmdlID0gbWFyay5yYW5nZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IG1hcmsuc2VsZWN0aW9uLnNlbGY7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnM7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQod3JhcHBlcnNbMF0sIDApO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKHdyYXBwZXJzW3dyYXBwZXJzLmxlbmd0aCAtIDFdLCAxKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzZWxlY3Rpb24udG9TdHJpbmcoKS50cmltKCkucmVwbGFjZSgvKFxcclxcbil7MSx9L2csICdcXHJcXG4nKSk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcbiAgfSxcclxuICBzdG9yZShtYXJrLCBzYXZlLCBvcmRlcikge1xyXG5cdFx0dGhpcy5kb25lLnB1c2gobWFyayk7XHJcbiAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdGlmIChvcmRlcikgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHR9LFxyXG4gIHJlY3JlYXRlKG1hcmspIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKG1hcmsua2V5LCBtYXJrKSwgZmFsc2UsIGZhbHNlKTtcclxuICB9LFxyXG4gIG9uRmluaXNoZWRSZXN0b3JhdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5kb25lLmxlbmd0aCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgdGhpcy5kb25lKTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lW3RoaXMuZG9uZS5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKF9TVE9SRS5uYW1lID09PSBtYXJrLmtleURhdGEudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSkge1xyXG4gICAgICAgIHRoaXMuZ290b01hcmsobWFyayk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc29ydEJ5SWQoKTtcclxuICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cclxuICAgIGlmIChfU1RPUkUucmVkZXNjcmliaW5nKSB7XHJcbiAgICAgIF9TVE9SRS5yZWRlc2NyaWJpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZDpyZXN0b3JhdGlvbi1wcm9jZXNzJyk7XHJcbiAgfSxcclxuICBhZGROb3RlKGlkKSB7XHJcbiAgICB0aGlzLmVtaXQoJ2FkZDpub3RlJywgdGhpcy5maW5kTWFyayhpZCkpO1xyXG4gIH0sXHJcbiAgc2F2ZU5vdGUoaWQpIHtcclxuICAgIGlmICghX1NUT1JFLmxvY2tlZCkgcmV0dXJuIHRoaXMuYXV0b3NhdmUoKTtcclxuXHJcbiAgICBjb25zdCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkKS5rZXlEYXRhO1xyXG4gICAgY29uc3Qgc3luY2VkID0gdHlwZW9mIG1hcmsuc3luY2VkID09PSAnYm9vbGVhbicgPyBtYXJrLnN5bmNlZCA6IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuXHJcbiAgICBjb25zdCBlbnRyeSA9IHtcclxuICAgICAgbWFya3M6IFttYXJrXSxcclxuICAgICAgbmFtZTogbWFyay50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpLFxyXG4gICAgICBzeW5jZWRcclxuICAgIH07XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCBlbnRyeSk7XHJcbiAgfSxcclxuICBnb3RvTWFyayhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrRWxlbWVudHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzO1xyXG4gICAgbGV0IGVsLCBwb3MsIGlkO1xyXG4gICAgaWYgKG1hcmsgfHwgbWFyayA9PT0gMCkge1xyXG4gICAgICBpZiAodHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbWFyayArIDE7XHJcbiAgICAgICAgZWwgPSBtYXJrRWxlbWVudHNbbWFya107XHJcbiAgICAgICAgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKS5zcGxpdCgnXycpWzBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkPVwiJyArIGlkICsgJ18wXCJdJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBvcyA9IHRoaXMubWFya1Njcm9sbFBvcztcclxuICAgICAgZWwgPSBtYXJrRWxlbWVudHNbcG9zXTtcclxuICAgICAgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKS5zcGxpdCgnXycpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGVsLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcblxyXG5cdFx0aWYgKCFtYXJrIHx8IHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykgdGhpcy5nZXRCeUlkKGlkKS5vbkNsaWNrKGlkKTtcclxuICAgIHRoaXMuaW5kaWNhdGVNYXJrKGlkKTtcclxuICB9LFxyXG5cdGdvdG9OZXh0TWFyayhkaXIpIHtcclxuXHRcdGNvbnN0IGwgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLmxlbmd0aDtcclxuXHJcblx0XHR0aGlzLm1hcmtTY3JvbGxQb3MgKz0gZGlyO1xyXG5cclxuXHRcdGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPCAwKSB0aGlzLm1hcmtTY3JvbGxQb3MgPSBsIC0gMTtcclxuXHRcdGVsc2UgaWYgKHRoaXMubWFya1Njcm9sbFBvcyA+PSBsKSB0aGlzLm1hcmtTY3JvbGxQb3MgPSAwO1xyXG5cclxuXHRcdHRoaXMuZ290b01hcmsoKTtcclxuXHR9LFxyXG4gIGluZGljYXRlTWFyayhpZCkge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKVxyXG4gICAgICAuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgIGNvbnN0IHRtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWRePVwiJyArIGlkICsgJ19cIl0nKSk7XHJcblxyXG4gICAgdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpLCAyMDAwKTtcclxuICB9LFxyXG4gIHNldEJvb2ttYXJrKG0sIHNhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyayxcclxuICAgICAgICBtYXJrID0gdGhpcy5maW5kTWFyayhtKTtcclxuXHJcbiAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAoYm9va21hcmspIHtcclxuICAgICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYm9va21hcmsgPSBuZXcgX0JPT0tNQVJLKCkuc2V0KG1hcmspO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnYWRkZWQ6Ym9va21hcmsnKTtcclxuICAgIGlmIChzYXZlICE9PSBmYWxzZSkgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gIH0sXHJcbiAgdW5kb0Jvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICB9LFxyXG4gIHJlbW92ZUJvb2ttYXJrKCkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgIGlmICghYm9va21hcmspIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBib29rbWFyaztcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gIH0sXHJcbiAgc2Nyb2xsVG9Cb29rbWFyaygpIHtcclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgaWYgKGJvb2ttYXJrKSBib29rbWFyay5zY3JvbGxJbnRvVmlldygpO1xyXG4gIH0sXHJcbiAgZ2V0QnlJZChpZCwgcG9zKSB7XHJcblx0XHRsZXQgZG9uZSA9IHRoaXMuZG9uZSxcclxuXHRcdFx0ICBkID0gZG9uZS5sZW5ndGgsXHJcblx0XHRcdCAgbWFyaztcclxuXHJcblx0XHR3aGlsZSAoZC0tKSB7XHJcblx0XHRcdG1hcmsgPSBkb25lW2RdO1xyXG5cclxuXHRcdFx0aWYgKG1hcmsua2V5RGF0YS5pZCA9PSBpZClcclxuXHRcdFx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBtYXJrLCBwb3NpdGlvbjogZCB9IDogbWFyaztcclxuXHRcdH1cclxuXHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG51bGwsIHBvc2l0aW9uOiBudWxsIH0gOiBmYWxzZTtcclxuXHR9LFxyXG5cdGZpbmRNYXJrKHgpIHtcclxuXHRcdHggPSB4ID8geCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcblx0XHRsZXQgbWFyayA9ICF4ID9cclxuXHRcdFx0dGhpcy5kb25lW3RoaXMuZG9uZS5sZW5ndGggLSAxXSA6XHJcblx0XHRcdFx0dHlwZW9mIHggPT09ICdzdHJpbmcnID9cclxuXHRcdFx0dGhpcy5nZXRCeUlkKHguc3BsaXQoJ18nKVswXSkgOlxyXG5cdFx0XHR4O1xyXG5cdFx0cmV0dXJuIG1hcms7XHJcblx0fSxcclxuICBzb3J0QnlJZCgpIHtcclxuICAgIHRoaXMuZG9uZS5zb3J0KChtYXJrMSwgbWFyazIpID0+IG1hcmsxLmlkIC0gbWFyazIuaWQpO1xyXG4gIH0sXHJcblx0b3JkZXJNYXJrc1Zpc3VhbGx5KCkge1xyXG5cdFx0dGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQkPVwiXzBcIl0nKSkuc29ydCgobTEsIG0yKSA9PiB7XHJcblx0XHRcdGxldCBiYjEgPSBtMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdGJiMiA9IG0yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0dG9wMSA9IGJiMS50b3AsXHJcblx0XHRcdFx0XHR0b3AyID0gYmIyLnRvcDtcclxuXHJcblx0XHRcdGlmICh0b3AxIDwgdG9wMikgcmV0dXJuIC0xO1xyXG5cdFx0XHRlbHNlIGlmICh0b3AyIDwgdG9wMSkgcmV0dXJuIDE7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmIChiYjEubGVmdCA8IGJiMi5sZWZ0KSByZXR1cm4gLTE7XHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG4gICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5tYXAobWFyayA9PiBwYXJzZUludChtYXJrLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnLCB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMpO1xyXG5cdH0sXHJcbiAgbWFya3NJbnRlcnNlY3QobWFyazEsIG1hcmsyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMxID0gbWFyazEud3JhcHBlcnMsXHJcbiAgICAgICAgdzEgPSB3cmFwcGVyczEubGVuZ3RoLFxyXG4gICAgICAgIGlkMSA9IG1hcmsxLmlkLFxyXG4gICAgICAgIHdyYXBwZXJzMiA9IG1hcmsyLndyYXBwZXJzLFxyXG4gICAgICAgIGlkMiA9IG1hcmsyLmlkLFxyXG4gICAgICAgIHcyLCB0bXMsIGw7XHJcblxyXG4gICAgd2hpbGUgKHcxLS0pIHtcclxuICAgICAgdzIgPSB3cmFwcGVyczIubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAodzItLSkge1xyXG4gICAgICAgIHRtcyA9IHdyYXBwZXJzMVt3MV0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRdJyk7XHJcbiAgICAgICAgbCA9IHRtcy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgaWYgKHRtc1tsXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKVswXSA9PSBpZDIpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcbiAgb25NYXJrZXJLZXkoZSwga2V5KSB7XHJcblx0XHRsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTigpO1xyXG5cclxuXHRcdGlmICghc2VsZWN0aW9uLm5vZGVzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKGUpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykga2V5ID0gZTtcclxuXHRcdFx0ZWxzZSB0aGlzLnByZXZlbnREZWZhdWx0KGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0a2V5ID0ga2V5IHx8ICdtJztcclxuXHRcdH1cclxuXHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoX1NUT1JFLmlzTmV3KSB7XHJcbiAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogISFzZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IF9TVE9SRS5pbW11dDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhrZXksIHNldHRpbmdzLm1hcmtlcnNba2V5XSwgdGhpcy5pc0ltbXV0KSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHR9LFxyXG4gIG9uSG90a2V5KGtleSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc3dpdGNoKGtleSkge1xyXG4gICAgICBjYXNlICd6Jzogc2VsZi51bmRvKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd5Jzogc2VsZi5yZWRvKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdzJzogc2VsZi5zYXZlKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdiJzogc2VsZi5zZXRCb29rbWFyaygpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAnYXJyb3d1cCc6IHNlbGYuZ290b05leHRNYXJrKC0xKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fycm93ZG93bic6IHNlbGYuZ290b05leHRNYXJrKDEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAnZCc6IHNlbGYucmVtb3ZlKCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdjJzogc2VsZi5jb3B5KCk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJldmVudERlZmF1bHQoZSkge1xyXG5cdFx0aWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdHJldHJpZXZlRW50cnkoKSB7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgY29uc3QgaXNOZXcgPSBfU1RPUkUuaXNOZXc7XHJcbiAgICBjb25zdCBuYW1lID0gX1NUT1JFLm5hbWU7XHJcblxyXG4gICAgY29uc3QgZW50cnkgPSAhbG9ja2VkICYmIF9TVE9SRS5lbnRyaWVzW25hbWVdID8gX1NUT1JFLmVudHJpZXNbbmFtZV0gOiB7fTtcclxuXHJcbiAgICBlbnRyeS5tYXJrcyA9IHRoaXMuY29sbGVjdE1hcmtzKCk7XHJcblx0XHRlbnRyeS5sYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBlbnRyeS5ib29rbWFya2VkID0gISF0aGlzLmJvb2ttYXJrO1xyXG4gICAgZW50cnkudGl0bGUgPSB3aW5kb3cuZG9jdW1lbnQudGl0bGU7XHJcblx0XHRlbnRyeS5jb3VudCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuXHRcdGVudHJ5LmlkY291bnQgPSB0aGlzLmlkY291bnQ7XHJcbiAgICBlbnRyeS5pbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IGVudHJ5LmltbXV0O1xyXG5cclxuICAgIGlmIChpc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgZW50cnkuZmlyc3QgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbnRyeS51cmwgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZSA/IHdpbmRvdy5kb2N1bWVudC5VUkwgOiBfSEFTSExFU1Mod2luZG93LmRvY3VtZW50LlVSTCk7XHJcbiAgICAgIGVudHJ5LnN5bmNlZCA9IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuICAgICAgZW50cnkubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgICBlbnRyeS5oYXNoU2Vuc2l0aXZlID0gX1NUT1JFLmhhc2hTZW5zaXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgZW50cnkubmFtZSA9IGxvY2tlZCA/XHJcbiAgICAgIGVudHJ5Lm1hcmtzWzBdLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkgOlxyXG4gICAgICBpc05ldyA/IG5hbWUgOiBlbnRyeS5uYW1lO1xyXG5cclxuXHRcdHJldHVybiBlbnRyeTtcclxuXHR9LFxyXG4gIGNvbGxlY3RNYXJrcygpIHtcclxuICAgIGxldCBkb25lID0gdGhpcy5kb25lO1xyXG4gICAgbGV0IGwgPSBkb25lLmxlbmd0aDtcclxuICAgIGNvbnN0IG1hcmtzID0gW107XHJcblxyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgZG9uZSA9IFtkb25lW2wtMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIGwgPSBkb25lLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBtID0gMCwga0Q7IG0gPCBsOyBtKyspIHtcclxuXHRcdFx0a0QgPSBkb25lW21dLmtleURhdGE7XHJcbiAgICAgIGRlbGV0ZSBrRC5zeW5jZWQ7XHJcblx0XHRcdG1hcmtzLnB1c2goa0QpO1xyXG5cdFx0fVxyXG4gICAgcmV0dXJuIG1hcmtzO1xyXG4gIH0sXHJcbiAgb25IYXNoQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5yZXN1bWUobnVsbCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3VtZWQtb24taGFzaGNoYW5nZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXJrLCBjb2xvcikge1xyXG5cclxuICBjb25zdCBCT0RZID0gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhZGRNYXJrTGlzdGVuZXJzJyxcclxuICAgICAgICAnZHJhZzpub3RlJzogJ29uRHJhZycsXHJcbiAgICAgICAgJ2RyYWdzdG9wOm5vdGUnOiAnb25EcmFnRW5kJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdfZGVsZXRlJyxcclxuICAgICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICdoaWRlJyxcclxuICAgICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2JyaW5nVXBGcm9udCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYXR0ZW1wdFVwZGF0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoc3RhcnQ6IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBlbDogbnVsbCxcclxuICAgIG1hcmssXHJcbiAgICBjb2xvcjogY29sb3IgfHwgJycsXHJcbiAgICBtYXJrQ2xpY2tIYW5kbGVyOiBudWxsLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIHJlY2VudGx5VXBkYXRlZDogZmFsc2UsXHJcbiAgICBzZXR0aW5nc01vZGU6IGZhbHNlLFxyXG4gICAgcG9zOiB7IGw6IG51bGwsIHQ6IG51bGwgfSxcclxuICAgIHNpemU6IHsgdzogbnVsbCwgaDogbnVsbCB9LFxyXG4gICAgZHJhZ0RYOiAwLFxyXG4gICAgZHJhZ0RZOiAwLFxyXG4gICAgbXV0YXRpb25PYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGp1c3ROb3RlRGF0YU9iamVjdCgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZU5vdGVFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWRkTWFya0xpc3RlbmVycygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGp1c3ROb3RlRGF0YU9iamVjdCgpIHtcclxuICAgICAgY29uc3Qgbm90ZURhdGEgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlO1xyXG4gICAgICBpZiAodHlwZW9mIG5vdGVEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCAneWVsbG93JyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFub3RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBub3RlRGF0YS5wb3MgfHwgdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbm90ZURhdGEuc2l6ZSB8fCB0aGlzLnNpemU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVOb3RlRWxlbWVudCgpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGUnKTtcclxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVoZWFkZXInKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWFjdGlvbnMnKTtcclxuICAgICAgY29uc3QgZGVsID0gdGhpcy5kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVkZWxldGUnKTtcclxuICAgICAgY29uc3QgbWluID0gdGhpcy5taW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVtaW5pbWl6ZScpO1xyXG4gICAgICBjb25zdCBnZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY3VzdG9taXplJyk7XHJcbiAgICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLnBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVwYWxldHRlJyk7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dDtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yO1xyXG4gICAgICBfU1RPUkUubm90ZUNvbG9yID0gY29sb3I7XHJcbiAgICAgIGNvbnN0IGRlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICAgIGNvbnN0IG1pblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjAxMykpO1xyXG4gICAgICBjb25zdCBnZWFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNjk5KSk7XHJcblxyXG4gICAgICBbJ2dyZWVuJywgJ3doaXRlJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJywgJ3B1cnBsZScsICdibHVlJywgJ3R1cnF1b2lzZSddLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY29sb3InKTtcclxuICAgICAgICBjb2xvci5jbGFzc05hbWUgPSAndG1ub3RlY29sb3ItLScgKyBjO1xyXG4gICAgICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicsIGMpO1xyXG4gICAgICAgIHBhbGV0dGUuYXBwZW5kQ2hpbGQoY29sb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHAuc2V0QXR0cmlidXRlKCdkYXRhLXRtLW5vdGUnLCB0cnVlKTtcclxuICAgICAgZGVsLmFwcGVuZENoaWxkKGRlbFRleHQpO1xyXG4gICAgICBtaW4uYXBwZW5kQ2hpbGQobWluVGV4dCk7XHJcbiAgICAgIGdlYXIuYXBwZW5kQ2hpbGQoZ2VhclRleHQpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZ2Vhcik7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChtaW4pO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKHApO1xyXG4gICAgICBub3RlLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgaWYgKHRleHQpIHAudmFsdWUgPSB0ZXh0O1xyXG5cclxuICAgICAgcC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB0aGlzLmF0dGVtcHRVcGRhdGUoZSwgZS50YXJnZXQsIHRydWUpLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX2RlbGV0ZSgpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZSA9ICcnO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgIHRoaXMucmVtb3ZlTWFya0xpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bm90ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgYXR0ZW1wdFVwZGF0ZShlLCBlbCwgZm9yY2UpIHtcclxuICAgICAgaWYgKGZvcmNlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCF0aGlzLnJlY2VudGx5VXBkYXRlZCkge1xyXG4gICAgICAgIHRoaXMucmVjZW50bHlVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZShlbCksIDMwMDApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVsKSB7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dCA9IGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6bm90ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICAgIHRoaXMucmVjZW50bHlVcGRhdGVkID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc2hvdygpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBpbm5lcldpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICBsZXQgcG9zLCBsZWZ0LCB0b3A7XHJcblxyXG4gICAgICBpZiAodGhpcy5wb3MubCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHBvcyA9IHRoaXMucG9zO1xyXG4gICAgICAgIHRvcCA9IHBvcy50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBwb3MubDtcclxuICAgICAgICB0b3AgPSB0aGlzLnBvcy50ID0gcG9zLnQgKyBwb3Mub2Zmc2V0O1xyXG4gICAgICB9XHJcbiAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcblxyXG4gICAgICBpZiAobGVmdCArIDM0MCA+IGlubmVyV2luZG93V2lkdGgpIHtcclxuICAgICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IGlubmVyV2luZG93V2lkdGggLSAzNDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemUudyA/ICd3aWR0aDonICsgdGhpcy5zaXplLncgKyAnO2hlaWdodDonICsgdGhpcy5zaXplLmggKyAnOycgOiAnJztcclxuXHJcbiAgICAgIEJPRFkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7dG9wOicgKyB0b3AgKyAncHg7bGVmdDonICsgbGVmdCArICdweDsnKTtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsIHNpemUpO1xyXG4gICAgICB0aGlzLmNvbm5lY3RNdXRhdGlvbk9ic2VydmVyKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYnJpbmdVcEZyb250KCkge1xyXG4gICAgICBBcnJheS5mcm9tKEJPRFkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpKS5mb3JFYWNoKG5vdGUgPT4ge1xyXG4gICAgICAgIGlmIChub3RlID09PSB0aGlzLmVsKSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDc7XHJcbiAgICAgICAgZWxzZSBub3RlLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDY7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKSB7XHJcbiAgICAgIEJPRFkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKHRoaXMudmlzaWJsZSkgdGhpcy5oaWRlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUGFsZXR0ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLnBhbGV0dGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldHRpbmdzTW9kZSA9ICF0aGlzLnNldHRpbmdzTW9kZTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb2xvcihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tJyArIHRoaXMuY29sb3IpO1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSBfU1RPUkUubm90ZUNvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgIHRoaXMudG9nZ2xlUGFsZXR0ZSgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1jb2xvcicsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZE1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ25vdGVvbmNsaWNrJykudGhlbihub3Rlb25jbGljayA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGVvbmNsaWNrKSB7XHJcbiAgICAgICAgICBpZiAoISF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5tYXJrQ2xpY2tIYW5kbGVyID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHRoaXMubWFyay53cmFwcGVycykge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGUnKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlTWFya0xpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya0xpc3RlbmVycygpIHtcclxuICAgICAgaWYgKCF0aGlzLm1hcmtDbGlja0hhbmRsZXIpIHJldHVybjtcclxuICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb25uZWN0TXV0YXRpb25PYnNlcnZlcigpIHtcclxuICAgICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddIH07XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gdGhpcy5tdXRhdGlvbk9ic2VydmVyIHx8IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5zYXZlU2l6ZSkpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRleHRhcmVhLCBjb25maWcpO1xyXG4gICAgfSxcclxuICAgIGdldFBvc2l0aW9uKCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5tYXJrLndyYXBwZXJzW3RoaXMubWFyay53cmFwcGVycy5sZW5ndGggLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0OiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIEJPRFkuY2xpZW50VG9wLFxyXG4gICAgICAgIGw6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIEJPRFkuY2xpZW50TGVmdCxcclxuICAgICAgICBvZmZzZXQ6IHJlY3QuaGVpZ2h0XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgb25EcmFnU3RhcnQoZSwgZWwpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmRyYWdEWCA9IGUucGFnZVggLSB0aGlzLnBvcy5sO1xyXG4gICAgICB0aGlzLmRyYWdEWSA9IGUucGFnZVkgLSB0aGlzLnBvcy50O1xyXG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0OmRyYWcnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIG9uRHJhZyhub3RlLCBlKSB7XHJcbiAgICAgIGlmIChub3RlID09PSB0aGlzLm1hcmsuaWQpIHtcclxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvcy5sID0gZS5wYWdlWCAtIHRoaXMuZHJhZ0RYO1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvcy50ID0gZS5wYWdlWSAtIHRoaXMuZHJhZ0RZO1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EcmFnRW5kKCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnBvcyA9IHRoaXMucG9zO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1wb3MnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIHNhdmVTaXplKG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBtdXRhdGlvbnNMaXN0WzBdLnRhcmdldC5zdHlsZTtcclxuICAgICAgdGhpcy5zaXplID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5zaXplID0geyB3OiBzdHlsZS53aWR0aCwgaDogc3R5bGUuaGVpZ2h0IH07XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLXNpemUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTk9URSBmcm9tICcuL25vdGUnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAncmVtb3ZlZDpub3RlJzogJ3JlbW92ZU5vdGVTdG9yYWdlJyxcclxuICAgICAgJ3Jlc3RvcmU6bm90ZXMnOiAncmVzdG9yZScsXHJcbiAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICd0b2dnbGU6bm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlVHJhbnNwJyxcclxuICAgICAgJ3N0YXJ0OmRyYWcnOiAnc3RhcnREcmFnZ2luZ05vdGUnLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZE5vdGVzU3RhdGUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbm90ZXM6IHt9LFxyXG4gIHRvZ2dsZTogbnVsbCxcclxuICBkcmFnSGFuZGxlcjogbnVsbCxcclxuICBkcmFnU3RvcEhhbmRsZXI6IG51bGwsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVRyYW5zcCgpO1xyXG4gIH0sXHJcbiAgYWRkKG1hcmssIGNvbG9yKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3Rlc1ttYXJrLmlkXTtcclxuICAgIGlmIChub3RlKSByZXR1cm4gbm90ZTtcclxuICAgIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgcmV0dXJuIHRoaXMubm90ZXNbbWFyay5pZF0gPSBuZXcgX05PVEUobWFyaywgY29sb3IpO1xyXG4gIH0sXHJcbiAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgZm9yIChsZXQgbWFyayBvZiBtYXJrcykge1xyXG4gICAgICBpZiAobWFyay5rZXlEYXRhLm5vdGUpIHtcclxuICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkQW5kU2hvdyhtYXJrLCBjb2xvcikge1xyXG4gICAgdGhpcy5hZGQobWFyaywgY29sb3IpLnNob3coKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGVTdG9yYWdlKGlkKSB7XHJcbiAgICBkZWxldGUgdGhpcy5ub3Rlc1tpZF07XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlKGlkKSB7XHJcbiAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlQWxsKCkge1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICBjb25zdCBub3RlcyA9IHRoaXMubm90ZXM7XHJcbiAgICBsZXQgbWV0aCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlJykubGVuZ3RoID8gJ2hpZGUnIDogJ3Nob3cnLFxyXG4gICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICBub3RlO1xyXG4gICAgZm9yIChsZXQgbiBpbiBub3Rlcykge1xyXG4gICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgIGlmIChub3RlLnZpc2libGUgPT09IGNvbmRpdGlvbikge1xyXG4gICAgICAgIG5vdGVbbWV0aF0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlVHJhbnNwKCkge1xyXG4gICAgY29uc3QgYm9keUNsYXNzZXMgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoc2V0dGluZ3MgJiYgc2V0dGluZ3MubWlzYykge1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5taXNjLm5vdGV0cmFuc3ApIGJvZHlDbGFzc2VzLmFkZCgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXcpIGJvZHlDbGFzc2VzLmFkZCgndG1ub3Rlcy0tcGxhaW4tdmlldycpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS1wbGFpbi12aWV3Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgaXNFbXB0eShvYmopIHtcclxuICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbiAgfSxcclxuICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIgPSAoZSkgPT4gdGhpcy5lbWl0RHJhZ0V2ZW50KG5vdGUsIGUpO1xyXG4gICAgY29uc3QgZHJhZ1N0b3BIYW5kbGVyID0gdGhpcy5kcmFnU3RvcEhhbmRsZXIgPSAoZSkgPT4gdGhpcy5zdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpO1xyXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gIH0sXHJcbiAgZW1pdERyYWdFdmVudChub3RlLCBlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bm90ZScsIG5vdGUsIGUpO1xyXG4gIH0sXHJcbiAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgdGhpcy5lbWl0KCdub3Rlcy1zdGF0ZScsICF0aGlzLmlzRW1wdHkodGhpcy5ub3RlcyksIGluZm8pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IHdpbmRvdy5kb2N1bWVudCxcclxuICBhdXRvUGF1c2U6IHRydWUsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb25zJzogJ3JlbW92ZUxpc3RlbmVycycsXHJcbiAgICAgICdjb21wbGV0ZWQ6cmVzdG9yYXRpb24tcHJvY2Vzcyc6ICdhZGRMaXN0ZW5lcnMnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGtleWRvd246IHtcclxuICAgICAgICAnKic6ICdkZWxlZ2F0ZSdcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgJyonOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZWxlY3Rpb25Db2xsYXBzZWQ6IHRydWUsXHJcbiAgc2hpZnRTZW5zaXRpdmVLZXlzOiBbMTMsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCAxNzEsIDE3M10sXHJcbiAga2V5Q29kZU1hcDoge1xyXG4gICAgJzEzJzogJ0VudGVyJyxcclxuICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgJzUzJzogJzUnLCAnNTQnOiAnNicsICc1NSc6ICc3JywgJzU2JzogJzgnLCAnNTcnOiAnOScsXHJcbiAgICAnMTcxJzogJysnLCAnMTczJzogJy0nXHJcbiAgfSxcclxuXHJcbiAgaXNFZGl0YWJsZShlbCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGVsLnRhZ05hbWU7XHJcblxyXG4gICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gIH0sXHJcbiAgZGVsZWdhdGUoZSkge1xyXG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlLFxyXG4gICAgICAgIG1vZEtleSA9IChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkpLFxyXG4gICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICBsb2NrZWRBY3Rpb25zID0gWydiJywgJ3MnLCAneScsICd6JywgJ2QnXSxcclxuICAgICAgICBmdW5jdGlvbktleXMgPSBsb2NrZWRBY3Rpb25zLmNvbmNhdChhcnJvd0tleXMpLmNvbmNhdCgnYycpLFxyXG4gICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkICYmIGxvY2tlZEFjdGlvbnMuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hpZnRTZW5zaXRpdmVLZXlzLmluY2x1ZGVzKGtleUNvZGUpKSBrZXkgPSB0aGlzLmtleUNvZGVNYXBba2V5Q29kZV07XHJcblxyXG4gICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUoZS50YXJnZXQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBjb25zdCBvcmlnS2V5ID0ga2V5O1xyXG4gICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICBjb25zdCBpc01hcmtlcktleSA9IG1hcmtlcnNba2V5XTtcclxuICAgICAgY29uc3QgaXNDdXN0b21NYXJrZXJLZXkgPSBpc01hcmtlcktleSAmJiAhZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICBjb25zdCBzZXR0aW5nID0gc2hvcnRjdXRzW2tleV07XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAndycgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5nWzFdKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgczEgPSBzaG9ydGN1dFswXTtcclxuICAgICAgICBjb25zdCBzMiA9IHNob3J0Y3V0WzFdO1xyXG5cclxuICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3ByZXNzZWQ6aG90a2V5Jywga2V5KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbkNvbGxhcHNlZCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZDtcclxuICAgIGlmICh0aGlzLnNlbGVjdGlvbkNvbGxhcHNlZCAhPT0gc2VsZWN0aW9uQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzZWxlY3Rpb24nLCAhc2VsZWN0aW9uQ29sbGFwc2VkKTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25Db2xsYXBzZWQgPSBzZWxlY3Rpb25Db2xsYXBzZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5jbGFzcyBSZXN0b3JlckJhc2UgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIHRoaXMubG9zdCA9IFtdO1xyXG4gICAgdGhpcy5mYWlsdXJlUmVwb3J0ID0ge307XHJcbiAgICB0aGlzLnJlc3RvcmVkID0gW107XHJcbiAgICB0aGlzLmFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnc3RhcnRlZDpyZXN0b3JhdGlvbicsIGVudHJ5Lm1hcmtzLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW5DaHVua3MoZGF0YSwgcHJvYywgY2IpIHtcclxuICAgIHByb2MgPSBwcm9jLmJpbmQodGhpcyk7XHJcbiAgICBjYiA9IGNiLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIHJlYygpIHtcclxuXHRcdFx0bGV0IGV4cGlyZSA9ICtuZXcgRGF0ZSgpICsgNTAwO1xyXG5cclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdHRyeSB7XHJcbiAgICAgICAgICBwcm9jKGRhdGEuc2hpZnQoKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHR9IHdoaWxlIChkYXRhLmxlbmd0aCA+IDAgJiYgZXhwaXJlID4gK25ldyBEYXRlKCkpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDApO1xyXG5cdFx0XHRlbHNlIGNiKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuICByZXBvcnQoKSB7XHJcbiAgICBsZXQgbGwgPSB0aGlzLmxvc3QubGVuZ3RoO1xyXG4gICAgaWYgKGxsKSB7XHJcbiAgICAgIHdoaWxlKGxsLS0pIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5sb3N0W2xsXS50ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCgnbG9zdDptYXJrcycsIHRoaXMuZmFpbHVyZVJlcG9ydCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJywgdGhpcy5lbnRyeS5uYW1lLCB0aGlzLnJlc3RvcmVkLCB0aGlzLmxvc3QsIHRoaXMuYXJlYSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnF1ZXVlID0gW107XHJcbiAgICB0aGlzLmNhY2hlID0gW107XHJcbiAgICB0aGlzLnBoYXNlID0gMTtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwgPSAwO1xyXG4gICAgdGhpcy5jaHVua0R1cmF0aW9uID0gNTAwO1xyXG4gICAgdGhpcy5fdGltZXIgPSArbmV3IERhdGUoKSArIHRoaXMuY2h1bmtEdXJhdGlvbjtcclxuICAgIHRoaXMub29tID0gZW50cnkubWFya3MubGVuZ3RoID09PSAxICYmIGVudHJ5Lm1hcmtzWzBdLmlkID09IDE7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGltZXIoKSB7XHJcbiAgICBjb25zdCB0aW1lciA9IHRoaXMuX3RpbWVyO1xyXG4gICAgdGhpcy5fdGltZXIgPSArbmV3IERhdGUoKSArIHRoaXMuY2h1bmtEdXJhdGlvbjtcclxuICAgIHJldHVybiB0aW1lcjtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBlbnRyeSA9IHRoaXMuZW50cnksXHJcbiAgICAgICAgbm93ID0gW10sIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIG1hcmtzID0gZW50cnkubWFya3MsXHJcbiAgICAgICAgbCA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgbWFyaztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcblxyXG4gICAgICB0aGlzLmNvbnZlcnREZXNjcmlwdGlvbihtYXJrKS5jcmVhdGVUZW1wT2JqZWN0KG1hcmspO1xyXG5cclxuICAgICAgaWYgKG1hcmsuY29uZHMubjEgPT09ICdUTScpIHBvc3Rwb25lZC5wdXNoKG1hcmspO1xyXG4gICAgICBlbHNlIG5vdy5wdXNoKG1hcmspO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucXVldWUucHVzaChub3cpO1xyXG5cclxuICAgIGZvciAoaSA9IDAsIGwgPSBwb3N0cG9uZWQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbcG9zdHBvbmVkW2ldXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXN0b3JlKCk7XHJcbiAgfVxyXG4gIGNvbnZlcnREZXNjcmlwdGlvbihtYXJrKSB7XHJcbiAgICBpZiAodHlwZW9mIG1hcmsuY29uZHMubyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbGV0IGNvbmRzID0gbWFyay5jb25kcyxcclxuICAgICAgICAgIGNvbnZlcnRlZENvbmRzID0ge1xyXG4gICAgICAgICAgICBvOiBjb25kcy5zdGFydE9mZnNldCxcclxuICAgICAgICAgICAgbjE6IGNvbmRzLmZpcnN0Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIG4yOiBjb25kcy5maXJzdFBhcmVudE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBwMTogY29uZHMuZmlyc3RUZXh0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMjogY29uZHMuZmlyc3ROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAzOiBjb25kcy5maXJzdFBhcmVudE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDQ6IGNvbmRzLmZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uXHJcbiAgICAgICAgICB9O1xyXG4gICAgICBkZWxldGUgbWFyay5jb25kcztcclxuICAgICAgbWFyay5jb25kcyA9IGNvbnZlcnRlZENvbmRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGNyZWF0ZVRlbXBPYmplY3QobWFyaykge1xyXG4gICAgbGV0IHRleHQgPSBtYXJrLnRleHQsXHJcbiAgICAgICAgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKSxcclxuICAgICAgICBzcXVlZXplZFRleHQgPSB0aGlzLnNxdWVlemUobWFyay50ZXh0KTtcclxuXHJcbiAgICBtYXJrLnRlbXAgPSB7XHJcbiAgICAgIHRleHRMZW5ndGg6IHRleHQubGVuZ3RoLFxyXG4gICAgICB0cmltbWVkVGV4dDogdHJpbW1lZFRleHQsXHJcbiAgICAgIHRyaW1tZWRUZXh0TGVuZ3RoOiB0cmltbWVkVGV4dC5sZW5ndGgsXHJcbiAgICAgIHNxdWVlemVkVGV4dDogc3F1ZWV6ZWRUZXh0LFxyXG4gICAgICBzcXVlZXplZFRleHRMZW5ndGg6IHNxdWVlemVkVGV4dC5sZW5ndGgsXHJcbiAgICAgIHBvc3NpYmxlUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZHM6IHt9LFxyXG4gICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0czogW11cclxuICAgIH07XHJcblxyXG4gICAgbWFyay5zeW5jZWQgPSB0aGlzLmVudHJ5LnN5bmNlZDtcclxuICB9XHJcbiAgcmVzdG9yZSgpIHtcclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAyKSB0aGlzLnNvcnRRdWV1ZUJ5SWQoKTtcclxuXHJcbiAgICBsZXQgbWFya3MgPSB0aGlzLm1hcmtzID0gdGhpcy5xdWV1ZS5zaGlmdCgpLFxyXG4gICAgICAgIGxlbmd0aCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMDtcclxuXHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuXHJcbiAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0Qm9keVNlbGVjdGlvbih3aW5kb3cuZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgIC5nZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGhhc2UgPT09IDEgJiYgbGVuZ3RoID4gMSlcclxuICAgICAgICAgIHRoaXMucG9zdHBvbmVPdmVybGFwcGluZ3MoKTtcclxuXHJcbiAgICAgIHRoaXMuZmluZFBvc3NpYmxlRXh0cmVtYSgpXHJcbiAgICAgICAgICAucnVsZU91dE11bHRpcGxlcygpXHJcbiAgICAgICAgICAucmVzdG9yZVJhbmdlcygpO1xyXG5cclxuICAgICAgdGhpcy5waGFzZSsrO1xyXG5cclxuICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPCArbmV3IERhdGUoKSkgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc3RvcmUoKSwgMCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlc3RvcmUoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHRoaXMucmVwb3J0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHRoaXMucmVwb3J0KCk7XHJcbiAgfVxyXG4gIHNvcnRRdWV1ZUJ5SWQoKSB7XHJcbiAgICBsZXQgbWFya3MgPSB0aGlzLnF1ZXVlLFxyXG4gICAgICAgIGwgPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgdGVtcCA9IFtdLFxyXG4gICAgICAgIHJlcyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG1hcmssIHQ7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBpZiAoIW1hcmtzW2xdLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXVswXTtcclxuICAgICAgdGVtcFttYXJrLmlkXSA9IG1hcms7XHJcbiAgICB9XHJcbiAgICB0aGlzLnF1ZXVlID0gW107XHJcblxyXG4gICAgZm9yICh0ID0gdGVtcC5sZW5ndGg7IGkgPCB0OyBpKyspIHtcclxuICAgICAgaWYgKHRlbXBbaV0pIHRoaXMucXVldWUucHVzaChbdGVtcFtpXV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGdldFRleHRQb3NpdGlvbnMobWFya3MsIGwpIHtcclxuICAgIGxldCB0cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQsXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdLFxyXG4gICAgICAgIGVuZFBvc2l0aW9ucyA9IFtdLFxyXG4gICAgICAgIG1hcmssIG1hcmtUZW1wLCBzcXVlZXplZFRleHQsIHNxdWVlemVkVGV4dExlbmd0aCwgcCwgZW5kUG9zaXRpb247XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBwID0gdW5kZWZpbmVkO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG5cclxuICAgICAgaWYgKCFtYXJrVGVtcCkge1xyXG4gICAgICAgIG1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCkge1xyXG5cclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5jb25jYXQobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucyA9IGVuZFBvc2l0aW9ucy5jb25jYXQobWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0O1xyXG4gICAgICAgIHNxdWVlemVkVGV4dExlbmd0aCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dExlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHAgIT09IC0xKSB7XHJcbiAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBwID0gLTE7XHJcbiAgICAgICAgICBwID0gdHJpbW1lZFNlbGVjdGlvblRleHQuaW5kZXhPZihzcXVlZXplZFRleHQsIHAgKyAxKTtcclxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gcCArIHNxdWVlemVkVGV4dExlbmd0aDtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIGVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zLnBvcCgpO1xyXG5cclxuICAgICAgICBpZiAoIW1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8xJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMoYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyk7XHJcbiAgICB0aGlzLm1heFBvc2l0aW9uID0gTWF0aC5tYXguYXBwbHkobnVsbCwgZW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMocG9zaXRpb25zKSB7XHJcbiAgICBsZXQgbCA9IHBvc2l0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgdGVtcCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHBvcywgc3RhcnQsIHQ7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBwb3MgPSBwb3NpdGlvbnNbbF07XHJcbiAgICAgIHN0YXJ0ID0gcG9zWzBdO1xyXG5cclxuICAgICAgaWYgKHRlbXBbc3RhcnRdKSB0ZW1wLnNwbGljZShzdGFydCArIDEsIDAsIHBvcyk7XHJcbiAgICAgIGVsc2UgdGVtcFtzdGFydF0gPSBwb3M7XHJcbiAgICB9XHJcbiAgICB0ID0gdGVtcC5sZW5ndGg7XHJcbiAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IHQ7IGkrKylcclxuICAgICAgaWYgKHRlbXBbaV0pIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKHRlbXBbaV0pO1xyXG4gIH1cclxuICBwb3N0cG9uZU92ZXJsYXBwaW5ncygpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgcG9zMSwgcG9zMiwgaSwgbTEsIG0yLCBpZDEsIGlkMiwgaWQ7XHJcblxyXG4gICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgIHdoaWxlIChwLS0gPiAxKSB7XHJcbiAgICAgICAgcG9zMSA9IHBvc2l0aW9uc1twIC0gMV07XHJcbiAgICAgICAgcG9zMiA9IHBvc2l0aW9uc1twXTtcclxuICAgICAgICBtMSA9IHBvczFbMl07XHJcbiAgICAgICAgbTIgPSBwb3MyWzJdO1xyXG4gICAgICAgIGlkMSA9IG0xLmlkO1xyXG4gICAgICAgIGlkMiA9IG0yLmlkO1xyXG5cclxuICAgICAgICBpZiAoaWQxID09PSBpZDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocG9zMVsxXSA+IHBvczJbMF0gJiYgcG9zMVswXSA8IHBvczJbMV0pIHtcclxuXHJcbiAgICAgICAgICBpZiAoaWQxIDwgaWQyKSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQyO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMik7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWQgPSBpZDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0xKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcDsgaSsrKVxyXG4gICAgICAgIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3V0T3V0Rm9yKGlkKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlKHAtLSkge1xyXG4gICAgICBpZiAocG9zaXRpb25zW3BdWzJdLmlkID09PSBpZClcclxuICAgICAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuc3BsaWNlKHAsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0cG9uZShtYXJrKSB7XHJcbiAgICBsZXQgcXVldWUgPSB0aGlzLnF1ZXVlLFxyXG4gICAgICAgIGwgPSBxdWV1ZS5sZW5ndGgsXHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBpZiAocXVldWVbbF1bMF0gPT09IG1hcmspIHtcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWFscmVhZHlJbmNsdWRlZClcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFttYXJrXSk7XHJcbiAgfVxyXG4gIGZpbmRQb3NzaWJsZUV4dHJlbWEoKSB7XHJcbiAgICBsZXQgbm9kZXMgPSB0aGlzLmJvZHlUZXh0Tm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzID8gbm9kZXMubGVuZ3RoIDogMCxcclxuICAgICAgICBpbmRpY2VzID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHBoYXNlID0gdGhpcy5waGFzZSxcclxuICAgICAgICBjYWNoZSA9IHRoaXMuY2FjaGUgPSBbXSxcclxuICAgICAgICBzYXRpc2ZpZWQgPSBbXSxcclxuICAgICAgICBpID0gMCwgY2hhcnMgPSAwLFxyXG4gICAgICAgIG5leHRTdGFydEZvdW5kLCBlbmRpbmdzSW5UaGlzTm9kZSxcclxuICAgICAgICBub2RlLCBub2Rlc1RleHQsIG5vZGVzVGV4dExlbmd0aCxcclxuICAgICAgICBtYXJrLCBkaWZmLCBsLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgZSwgZiwgaWQsIHAsIHEsIHgsIG0sXHJcbiAgICAgICAgcG9zc2libGVGb2N1c09mZnNldCwgc3RhcnRGb3VuZEZvciwgcG9zdHBvbmVkLCBoYXNFbmRpbmdzSW5UaGlzTm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIG5vZGVzVGV4dCA9IHRoaXMuc3F1ZWV6ZShub2RlLmRhdGEpO1xyXG4gICAgICBub2Rlc1RleHRMZW5ndGggPSBub2Rlc1RleHQubGVuZ3RoO1xyXG4gICAgICBjaGFycyArPSBub2Rlc1RleHRMZW5ndGg7XHJcbiAgICAgIGwgPSBpbmRpY2VzLmxlbmd0aDtcclxuICAgICAgc3RhcnRGb3VuZEZvciA9IFtdO1xyXG4gICAgICBwb3N0cG9uZWQgPSBbXTtcclxuICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBudWxsO1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBpbmRpY2VzW2xdWzBdO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uID0gaW5kaWNlc1tsXVsxXTtcclxuICAgICAgICBtYXJrID0gaW5kaWNlc1tsXVsyXTtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgfHwgW107XHJcbiAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yID0gbWFyay50ZW1wLmVuZEZvdW5kRm9yIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIGNoYXJzID4gc3RhcnRQb3NpdGlvbiAmJlxyXG4gICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGggPCBtYXJrLnRlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoaGFzRW5kaW5nc0luVGhpc05vZGUgJiYgaGFzRW5kaW5nc0luVGhpc05vZGUuaWQgPCBtYXJrLmlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkpIHtcclxuICAgICAgICAgICAgICBpZiAocGhhc2UgPT09IDEgJiYgaWQgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLnB1c2goeyBub2RlOiBub2RlLCBwb3M6IGkgfSk7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IucHVzaChzdGFydFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICBzdGFydEZvdW5kRm9yLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICAhbWFyay50ZW1wLmVuZEZvdW5kRm9yLmluY2x1ZGVzKGVuZFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgKGNoYXJzIC0gZW5kUG9zaXRpb24pID49IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChNYXRoLm1pbi5hcHBseShudWxsLCBzdGFydEZvdW5kRm9yKSA8IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zc2libGVGb2N1c09mZnNldCA9IHRoaXMuZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIGVuZFBvc2l0aW9uIC0gKGNoYXJzIC0gbm9kZXNUZXh0TGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZUZvY3VzT2Zmc2V0cy5wdXNoKHBvc3NpYmxlRm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl0gPSB7XHJcbiAgICAgICAgICAgICAgbm9kZTogbm9kZSxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IHBvc3NpYmxlRm9jdXNPZmZzZXQsXHJcbiAgICAgICAgICAgICAgcG9zOiBpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICghc2F0aXNmaWVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIGNhY2hlLnB1c2gobWFyayk7XHJcbiAgICAgICAgICAgICAgc2F0aXNmaWVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG1hcms7XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwKSBmb3IgKHggPSAwOyB4IDwgcDsgeCsrKSB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbeF0pO1xyXG5cclxuICAgICAgaWYgKGNoYXJzID4gdGhpcy5tYXhQb3NpdGlvbikgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAocGhhc2UgIT09IDEgfHwgdGhpcy5vb20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG1hcmsgPSB0aGlzLm1hcmtzW2ldO1xyXG4gICAgICAgIGlmICghc2F0aXNmaWVkLmluY2x1ZGVzKG1hcmsuaWQpKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzInKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJ1bGVPdXRNdWx0aXBsZXMoKSB7XHJcbiAgICBsZXQgY2FjaGUgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBjYWNoZS5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgcG9zc2libGVTdGFydE5vZGVzLCBwLCBub2RlLCBwYXJlbnQsIGdyYW1wYSwgZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbmRncmFtcGEsIG1hdGNoZXMsIGZhaWxlZCwgcSxcclxuICAgICAgICBwb3NzaWJsZUVuZHMsIHN0YXJ0Rm91bmRGb3IsIGNvbmRzLCBzdGFydE9mZnNldCwgdGVtcCwgdGV4dExlbmd0aCwgc3RhcnQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gY2FjaGVbaV07XHJcbiAgICAgIG1hdGNoZXMgPSBbXTtcclxuICAgICAgZmFpbGVkID0gZmFsc2U7XHJcbiAgICAgIHRlbXAgPSBtYXJrLnRlbXA7XHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlcyA9IHRlbXAucG9zc2libGVTdGFydE5vZGVzO1xyXG4gICAgICBwb3NzaWJsZUVuZHMgPSB0ZW1wLnBvc3NpYmxlRW5kcztcclxuICAgICAgc3RhcnRGb3VuZEZvciA9IHRlbXAuc3RhcnRGb3VuZEZvclxyXG4gICAgICBwID0gcG9zc2libGVTdGFydE5vZGVzLmxlbmd0aDtcclxuICAgICAgY29uZHMgPSBtYXJrLmNvbmRzO1xyXG4gICAgICBzdGFydE9mZnNldCA9IGNvbmRzLm87XHJcbiAgICAgIHRleHRMZW5ndGggPSB0ZW1wLnRleHRMZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCA+IDEpIHtcclxuICAgICAgICB3aGlsZSAocC0tKSB7XHJcbiAgICAgICAgICBub2RlID0gcG9zc2libGVTdGFydE5vZGVzW3BdLm5vZGU7XHJcbiAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlIHx8IDA7XHJcblxyXG4gICAgICAgICAgaWYgKCFncmFtcGEgfHwgY29uZHMucDMgPT09IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCkpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkgcCA9IDA7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDEpIHAgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBxID0gbWF0Y2hlcy5wb3AoKTtcclxuICAgICAgICAgICAgICBwYXJlbnQgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcV0ubm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgIGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlIHx8IDA7XHJcbiAgICAgICAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcbiAgICAgICAgICAgICAgZ3JhbmRncmFuZGdyYW1wYSA9IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFuZGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAoIWdyYW5kZ3JhbmRncmFtcGEgfHwgY29uZHMucDQgPT09IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW5kZ3JhbXBhLCBncmFuZGdyYW1wYSkpICYmXHJcbiAgICAgICAgICAgICAgICAgIChwb3NzaWJsZUVuZHNbc3RhcnRGb3VuZEZvcltxXV0ub2Zmc2V0IC0gc3RhcnRPZmZzZXQpID09PSB0ZXh0TGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgcCA9IHE7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwKSBwID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBwID0gMDtcclxuXHJcbiAgICAgIHAgPSBwIHx8IDA7XHJcblxyXG4gICAgICBzdGFydCA9IG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXNbcF07XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGUgPSBzdGFydC5ub2RlO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb24gPSBzdGFydC5wb3M7XHJcblxyXG4gICAgICB0aGlzLnNldE1hdGNoaW5nRW5kKG1hcmssIHApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNldE1hdGNoaW5nRW5kKG1hcmssIHApIHtcclxuICAgIGxldCBzdGFydFBvc2l0aW9uID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3JbcF0sXHJcbiAgICAgICAgZW5kID0gbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXTtcclxuXHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZSA9IGVuZC5ub2RlO1xyXG4gICAgbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbiA9IGVuZC5wb3M7XHJcbiAgICBtYXJrLnRlbXAuZm9jdXNPZmZzZXQgPSBlbmQub2Zmc2V0O1xyXG4gIH1cclxuICBzYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSB7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbXBhID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwLFxyXG4gICAgICAgIHN0YXJ0T2Zmc2V0ID0gZGVzY3JpcHRpb24ubyxcclxuICAgICAgICByZWxldmFudE5vZGVUZXh0ID0gbm9kZS5kYXRhLnN1YnN0cmluZyhzdGFydE9mZnNldCkudHJpbSgpLFxyXG4gICAgICAgIGwgPSByZWxldmFudE5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGVtcC50cmltbWVkVGV4dCxcclxuICAgICAgICBtID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0TGVuZ3RoLFxyXG4gICAgICAgIHRleHRzTWF0Y2g7XHJcblxyXG4gICAgaWYgKG0gPD0gbCkge1xyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKG1hcmtUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KSkgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGV4dHNNYXRjaCAmJlxyXG4gICAgICAocGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjEgfHwgKGRlc2NyaXB0aW9uLm4xID09PSAnVE0nICYmIHBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKSAmJlxyXG4gICAgICAoIWdyYW1wYSB8fCBncmFtcGEubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4yKSAmJlxyXG4gICAgICB0aGlzLndoaWNoQ2hpbGQocGFyZW50Tm9kZSwgbm9kZSkgPT09IGRlc2NyaXB0aW9uLnAxXHJcbiAgICApO1xyXG4gIH1cclxuICBmaW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgbikge1xyXG4gICAgbGV0IG5vZGVUZXh0ID0gbm9kZS5kYXRhLFxyXG4gICAgICAgIGwgPSBub2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNxdWVlemUobm9kZVRleHRbaV0pKSBjb3VudGVyKys7XHJcblxyXG4gICAgICBpZiAoY291bnRlciA9PT0gbikgcmV0dXJuICgvXFxzJC8udGVzdChtYXJrLnRleHQpID8gaSArIDIgOiBpICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc3RvcmVSYW5nZXMoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIG1hcmtzID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIG1hcmtUZW1wLCBzdGFydCwgZW5kLCBmb2N1c09mZnNldDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcbiAgICAgIHN0YXJ0ID0gbWFya1RlbXAuc3RhcnROb2RlO1xyXG4gICAgICBlbmQgPSBtYXJrVGVtcC5lbmROb2RlO1xyXG4gICAgICBmb2N1c09mZnNldCA9IG1hcmtUZW1wLmZvY3VzT2Zmc2V0O1xyXG5cclxuICAgICAgaWYgKCFzdGFydCB8fCAhZW5kIHx8ICEodHlwZW9mIGZvY3VzT2Zmc2V0ID09PSAnbnVtYmVyJykpIHtcclxuICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8zJykgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIG1hcmsuY29uZHMubyk7XHJcbiAgICAgICAgICByYW5nZS5zZXRFbmQoZW5kLCBmb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgIC8vc2VsZWN0aW9uLnJlc3VtZShyYW5nZSk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmVkOnJhbmdlJywgbWFyayk7XHJcbiAgICAgICAgICBkZWxldGUgbWFyay5zeW5jZWQ7XHJcbiAgICAgICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24ucmVjb2xsZWN0Tm9kZXMobWFyayk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgbWFyay50ZW1wO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRCb2R5U2VsZWN0aW9uKGVsKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsKys7XHJcblxyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDEpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihlbCk7XHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblRyaWFsIDwgNCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Qm9keVNlbGVjdGlvbihlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSAnICc7XHJcbiAgICAgICAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSBbXTtcclxuICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy5zcXVlZXplKHRoaXMuc2VsZWN0aW9uLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYm9keVRleHROb2RlcyA9IHRoaXMuc2VsZWN0aW9uLm5vZGVzID8gdGhpcy5zZWxlY3Rpb24ubm9kZXMuc2xpY2UoKSA6IFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzcXVlZXplKHRleHQpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSA/IHRleHQucmVwbGFjZSgvXFx0fFxcc3xcXG58XFxyL2csICcnKSA6IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgd2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBjb250ZXh0KSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBjaGlsZHJlbiA9IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHQgICAgYyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdCAgICBwb3MgPSAwLCBpID0gMCwgY3VycmVudENoaWxkO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBjdXJyZW50Q2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkKSByZXR1cm4gcG9zO1xyXG5cclxuXHRcdFx0aWYgKGNvbnRleHQpIHtcclxuXHRcdFx0XHRpZiAoY3VycmVudENoaWxkLm5vZGVOYW1lID09PSBjb250ZXh0KSBwb3MrKztcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEoY3VycmVudENoaWxkLm5vZGVUeXBlID09PSAzICYmICFjdXJyZW50Q2hpbGQuZGF0YSkpIHBvcysrO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBJbW11dFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgdGhpcy5yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICBjb25zdCBtYXJrcyA9IHRoaXMubWFya3MgPSBbLi4uZW50cnkubWFya3Muc29ydCgobTEsIG0yKSA9PiBtMS5pZCAtIG0yLmlkKV07XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzSW5DaHVua3MobWFya3MsIHRoaXMucmVzdG9yZVJhbmdlLCB0aGlzLnJlcG9ydCk7XHJcbiAgfVxyXG5cclxuICByZXN0b3JlUmFuZ2UobWFyaykge1xyXG4gICAgY29uc3QgY29uZHMgPSBtYXJrLmNvbmRzO1xyXG4gICAgY29uc3Qgc3RhcnQgPSBjb25kcy5zO1xyXG4gICAgY29uc3QgZW5kID0gY29uZHMuZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMuZ2V0Tm9kZShzdGFydC5wKSwgc3RhcnQubyk7XHJcbiAgICAgIHJhbmdlLnNldEVuZCh0aGlzLmdldE5vZGUoZW5kLnApLCBlbmQubyk7XHJcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICBkZWxldGUgbWFyay5zeW5jZWQ7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldE5vZGUocG9zaXRpb24pIHtcclxuICAgIGNvbnN0IHRleHROb2RlUG9zaXRpb24gPSBwb3NpdGlvblswXTtcclxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgICBsID0gcG9zaXRpb24ubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlKGwtLSA+IDEpIHtcclxuICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bcG9zaXRpb25bbF1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGUuY2hpbGROb2Rlc1t0ZXh0Tm9kZVBvc2l0aW9uXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRyZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdyZXN0b3JlOm1hcmtzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdsb3N0Om1hcmtzJzogJ29uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3Jlc3VtZWQ6bWFya2Vycyc6ICdyZXRyeSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiBudWxsLFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICByZXN0b3JlZDogMCxcclxuICAgIGZhaWxlZDogMCxcclxuICAgIGZhaWx1cmVSZXBvcnQ6IHt9LFxyXG5cclxuICAgIHJlc3RvcmUoZW50cmllcykge1xyXG4gICAgICBpZiAoIWVudHJpZXMpIHJldHVybjtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJpZXMpKSBlbnRyaWVzID0gW2VudHJpZXNdO1xyXG5cclxuICAgICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcclxuICAgICAgdGhpcy5jb3VudCA9IGVudHJpZXMubGVuZ3RoO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdzdGFydGVkOnJlc3RvcmF0aW9ucycpO1xyXG5cclxuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoZW50cnkuaW1tdXQpIG5ldyBJbW11dFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgICBlbHNlIG5ldyBSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgdGhpcy5yZXN0b3JlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbGVkID0gMDtcclxuICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0ID0ge307XHJcbiAgICB9LFxyXG4gICAgcmV0cnkoZW50cnkpIHtcclxuICAgICAgZW50cnkgPSBlbnRyeSA/IFtlbnRyeV0gOiB0aGlzLmVudHJpZXM7XHJcbiAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICAgIHRoaXMucmVzdG9yZShlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgb25GYWlsdXJlKHJlcG9ydCkge1xyXG4gICAgICB0aGlzLmZhaWxlZCsrO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHJlcG9ydCkgdGhpcy5mYWlsdXJlUmVwb3J0W2ldID0gcmVwb3J0W2ldO1xyXG4gICAgfSxcclxuICAgIG9uRmluaXNoZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgaWYgKCsrdGhpcy5yZXN0b3JlZCA9PT0gdGhpcy5jb3VudCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucycpO1xyXG4gICAgICAgIGlmICh0aGlzLmZhaWxlZCkgdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmdldFJlcG9ydCgpKTtcclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRSZXBvcnQoKSB7XHJcbiAgICAgIGNvbnN0IHJlcG9ydCA9IHRoaXMuZmFpbHVyZVJlcG9ydDtcclxuICAgICAgbGV0IG1zZyA9ICcnO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHJlcG9ydCkge1xyXG4gICAgICAgIG1zZyArPSBgJHtyZXBvcnRbaV0ucmVhc29ufSA6ICR7cmVwb3J0W2ldLnRleHR9XFxuYDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbXNnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfU0VMRUNUSU9OIHtcclxuXHJcbiAgY29uc3RydWN0b3Iobm9kZSwgb3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQpIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuXHJcbiAgICBpZiAobm9kZSB8fCAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbmVkID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUobm9kZSlcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmNvbGxlY3ROb2Rlcyh0cnVlKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXMoKVxyXG4gICAgICAgICAgICAvLy51cGRhdGUoKVxyXG4gICAgICAgICAgICAuYWRqdXN0KClcclxuICAgICAgICAgICAgLy8udXBkYXRlKClcclxuICAgICAgICAgICAgLy8ucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB3aG9sZURvY3VtZW50ID8gd2luZG93LmRvY3VtZW50LmJvZHkgOiB0aGlzLmdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyKCk7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSB3aG9sZURvY3VtZW50ID9cclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZi5pc1NlbGVjdGFibGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSkgOlxyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxlY3Rpb24uY29udGFpbnNOb2RlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpO1xyXG5cclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgbGV0IG5vZGVzID0gW10sXHJcbiAgICAgICAgcGFyZW50Tm9kZXMgPSBbXSxcclxuXHJcbiAgICAgICAgdGV4dE5vZGUsIHBhcmVudCwgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICB3aGlsZSh0ZXh0Tm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkpIHtcclxuICAgICAgbm9kZXMucHVzaCh0ZXh0Tm9kZSk7XHJcbiAgICB9XHJcbiAgICBub2RlcyA9IHRoaXMudHJpbVNlbGVjdGlvbihub2Rlcyk7XHJcbiAgICAvL3RoaXMubm9kZXMgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSA6IG5vZGVzO1xyXG4gICAgdGhpcy5ub2RlcyA9IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKTtcclxuICAgIHRoaXMucGFyZW50Tm9kZXMgPSB0aGlzLmNvbGxlY3RQYXJlbnROb2Rlcyh0aGlzLm5vZGVzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVjb2xsZWN0Tm9kZXMobWFyaykge1xyXG4gICAgY29uc3QgbWFya1dyYXBwZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF49XCInICsgbWFyay5pZCArICdfXCJdJykpO1xyXG4gICAgY29uc3QgbSA9IG1hcmtXcmFwcGVycy5sZW5ndGg7XHJcbiAgICBjb25zdCBuZXdTZWdtZW50ID0gbWFya1dyYXBwZXJzLm1hcChlbCA9PiBlbC5maXJzdENoaWxkKTtcclxuXHJcbiAgICBjb25zdCBwcmV2ID0gbWFya1dyYXBwZXJzWzBdLnByZXZpb3VzU2libGluZztcclxuICAgIGNvbnN0IG5leHQgPSBtYXJrV3JhcHBlcnNbbS0xXS5uZXh0U2libGluZztcclxuXHJcbiAgICBjb25zdCBzdGFydCA9IG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbjtcclxuICAgIGNvbnN0IGVuZCA9IG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb247XHJcblxyXG4gICAgaWYgKHByZXYgJiYgcHJldi5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnVuc2hpZnQocHJldik7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dCAmJiBuZXh0Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQucHVzaChuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5vZGVzLnNwbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCAuLi5uZXdTZWdtZW50KTtcclxuICB9XHJcbiAgdHJpbVNlbGVjdGlvbihub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgbGV0IGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgZmlyc3ROb2RlID0gbm9kZXNbMF07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gZmlyc3ROb2RlICYmIGZpcnN0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCA8PSBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KSB7XHJcbiAgICAgICAgbm9kZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Tm9kZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbGFzdE5vZGUgJiYgdGhpcy5pc0JsYW5rKGxhc3ROb2RlLmRhdGEuc3Vic3RyKDAsIHNlbGVjdGlvbi5mb2N1c09mZnNldCkpKSB7XHJcbiAgICAgICAgbm9kZXMucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgcmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWwgPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCByZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHJnKTtcclxuXHJcbiAgICBub2RlcyA9IG5vZGVzLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgcmcuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgICAgcmV0dXJuICEhc2VsLnRvU3RyaW5nKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UodGhpcy5yYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICBjb2xsZWN0UGFyZW50Tm9kZXMobm9kZXMpIHtcclxuICAgIGxldCBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHBhcmVudHMgPSBbXSwgaSA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHBhcmVudHMucHVzaChub2Rlc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50cztcclxuICB9XHJcbiAgcmV0cmlldmVUZXh0KCkge1xyXG4gICAgbGV0IHJhbmdlID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBub2RlcyA9IHRoaXMubm9kZXMsXHJcbiAgICAgICAgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBub2RlVGV4dHMgPSBbXSxcclxuICAgICAgICB0ZXh0O1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBub2RlVGV4dHMucHVzaChub2Rlc1tpXS5kYXRhKTtcclxuXHJcbiAgICBsIC09IDE7XHJcblxyXG4gICAgaWYgKG5vZGVUZXh0cy5sZW5ndGgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0LCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnOiAnb25Ob3RlQWRkZWQnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya0FkZGVkJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya1JlbW92ZWQnXHJcbiAgICB9XHJcblx0fSxcclxuICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICBlbDogbnVsbCxcclxuXHJcbiAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICBidXR0b25zOiB7XHJcbiAgICBub3Rlczoge1xyXG4gICAgICBlbDogbnVsbCxcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJvb2ttYXJrOiB7XHJcbiAgICAgIGVsOiBudWxsLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2hvd246IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYm9va21hcms6IGZhbHNlLFxyXG4gIG5vdGVzOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcclxuICB9LFxyXG4gIHVwZGF0ZVN0YXRlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYm1pY29uJykudGhlbihibWljb24gPT4ge1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ25vdGVpY29uJykudGhlbihub3RlaWNvbiA9PiB0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyA9IG5vdGVpY29uKTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgKHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ICYmIHRoaXMuYm9va21hcmspIHx8XHJcbiAgICAgICh0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyAmJiB0aGlzLm5vdGVzKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBidXR0b25zID0gdGhpcy5idXR0b25zLCBidG47XHJcblxyXG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXVpJyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICBidG4gPSBidXR0b25zW2JdO1xyXG4gICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgZWxzZSBpZiAoYnRuLnNob3duICYmICghdGhpc1tiXSB8fCAhYnRuLnNob3cpKSB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgIH1cclxuICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gIH0sXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnM7XHJcblxyXG4gICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICBpZiAoYnV0dG9uc1tiXS5zaG93bikge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXVpKTtcclxuICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IG5vdGVzQnV0dG9uID0gdGhpcy5idXR0b25zLm5vdGVzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXN0b2dnbGUnKTtcclxuICAgIGNvbnN0IGJvb2ttYXJrQnV0dG9uID0gdGhpcy5idXR0b25zLmJvb2ttYXJrLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtYm0nKTtcclxuICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgYm9va21hcmtCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnYm1fc2Nyb2xsJyk7XHJcbiAgfSxcclxuICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBidG4uaGFuZGxlciA9IHR5cGUgPT09ICdub3RlcycgP1xyXG4gICAgICB0aGlzLnRvZ2dsZU5vdGVzLmJpbmQodGhpcykgOlxyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0bXVpLmFwcGVuZENoaWxkKGJ0bi5lbCk7XHJcbiAgICBidG4uc2hvd24gPSB0cnVlO1xyXG5cclxuICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9LFxyXG4gIHJlbW92ZUJ1dHRvbih0eXBlKSB7XHJcbiAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuXHJcbiAgICB0bXVpLnJlbW92ZUNoaWxkKGJ0bi5lbCk7XHJcbiAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICBidG4uZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG4uaGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCd0bXVpcG9zJylcclxuICAgICAgLnRoZW4ocG9zID0+IHRoaXMuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBvcy5zcGxpdCgnLScpLm1hcChwID0+IHAgKyAnOjFweDsnKS5qb2luKCcgJykpKTtcclxuICB9LFxyXG4gIG9uTm90ZUFkZGVkKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25MYXN0Tm90ZVJlbW92ZWQoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgdGhpcy5ib29rbWFyayA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgb25Cb29rbWFya1JlbW92ZWQoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gIH0sXHJcbiAgc2Nyb2xsVG9Cb29rbWFyaygpIHtcclxuICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnaW5qZWN0aW9uJyxcclxuICB0eXBlOiAnY29udGVudCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJyxcclxuXHJcbiAgICAgIC8vIEBSRVNUT1JFUlxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG4gIFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtjb25zb2xlLmxvZygncGFzczonLCByZXEuZXYpO1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==