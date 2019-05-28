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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvYXV0by1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ib29rbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2NvbnRleHRtZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFyay1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLXBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3Jlc3RvcmVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvdG11aS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2dsb2JhbC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwidXJsIiwiaGFzaGxlc3NVUkwiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeVNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJyZW5hbWVFbnRyeSIsImVudHJ5Iiwib2xkTmFtZSIsInNldFN5bmNGb3JFbnRyeSIsInN5bmNlZCIsInJlbW92ZUVudHJ5IiwiZGVsZXRlZEVudHJ5IiwiaGFzT3duUHJvcGVydHkiLCJhZGRFbnRyaWVzIiwiZSIsImxlbmd0aCIsImkiLCJfZ2V0X2JtaWNvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJfZ2V0X25vdGVpY29uIiwibm90ZWljb24iLCJfZ2V0X25vdGVvbmNsaWNrIiwibm90ZW9uY2xpY2siLCJfZ2V0X3RtdWlwb3MiLCJ0bXVpcG9zIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9pbW11dCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJyZXRyeUFjdGl2ZSIsInNldFBhZ2VQYXJhbXMiLCJ3aW5kb3ciLCJwYXJlbnQiLCJVUkwiLCJvblNhdmVkRW50cnkiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsImluZm8iLCJlbWl0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJib29rbWFyayIsImdldEVsZW1lbnRCeUlkIiwib25FbnRyaWVzRm91bmQiLCJBcnJheSIsImlzQXJyYXkiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwidXBkYXRlTmFtZSIsImZpcnN0RW50cnkiLCJoYW5kbGVyIiwibWFya2VyIiwidXBkYXRlIiwibWFya21ldGhvZCIsInNldE1hcmtlciIsImtleSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJsaXN0ZW5pbmciLCJzdGFydExpc3RlbmluZyIsInN0b3BMaXN0ZW5pbmciLCJvbk1vdXNldXAiLCJiaW5kIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9TdHJpbmciLCJfQk9PS01BUksiLCJtYXJrIiwiYW5jaG9yIiwid3JhcHBlcnMiLCJ3Iiwia2V5RGF0YSIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYm0iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhY3RpdmF0ZSIsIm9uIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVtb3ZlTGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJidXR0b24iLCJ0YXJnZXQiLCJjb250YWlucyIsImdldEF0dHJpYnV0ZSIsIl9NQVJLIiwicHJlU2V0dGluZ3MiLCJkZWZhdWx0cyIsImlzSW1tdXQiLCJzdHlsZSIsImNvbmRzIiwidGV4dCIsIm5vdGUiLCJkIiwiaWRjb3VudCIsInNpbXBsZSIsInJhbmdlIiwic3RhcnRPZmZzZXQiLCJlbmRPZmZzZXQiLCJjb250YWluZXJzIiwiYW5jaG9yTm9kZVBvc2l0aW9uIiwiZm9jdXNOb2RlUG9zaXRpb24iLCJkZXNjcmliZV9pbW11dCIsIm5vZGVzIiwibiIsImNyZWF0ZVdyYXBwZXJzIiwibGFzdEluZGV4Iiwibm9kZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNldFN0YXJ0Iiwic2V0RW5kIiwic3Vycm91bmRDb250ZW50cyIsInB1c2giLCJwYXJlbnROb2RlIiwibm9ybWFsaXplIiwiZGVmaW5lUG9zaXRpb24iLCJzZXRCb29rbWFyayIsImRlc2NyaWJlIiwicmVnaXN0ZXJDbGlja0xpc3RlbmVycyIsIndyYXBwZXIiLCJwcm94eSIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImluY2x1ZGluZ09mZnNldHMiLCJmaXJzdFdyYXBwZXIiLCJsYXN0V3JhcHBlciIsImZpcnN0UGFyZW50IiwibGFzdFBhcmVudCIsImFuY2hvclByZXYiLCJmb2N1c1ByZXYiLCJ3aGljaENoaWxkIiwicHJldmlvdXNTaWJsaW5nIiwibm9kZVR5cGUiLCJkYXRhIiwiY29udGFpbmVyIiwicmVwbGFjZUNoaWxkIiwiZmlyc3RDaGlsZCIsInNlbGYiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb2xsZWN0Tm9kZXMiLCJjb2xsYXBzZVRvU3RhcnQiLCJjcmVhdGUiLCJjaGlsZCIsImluY2x1ZGluZ1RleHROb2RlcyIsImNoaWxkcmVuIiwiYyIsIm51bWJlciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic3RhcnQiLCJzdGFydENvbnRhaW5lciIsImVuZCIsImVuZENvbnRhaW5lciIsInNpbmdsZU5vZGUiLCJwYXJlbnRJc1RNIiwiaGFzQXR0cmlidXRlIiwiZ3JhbXBhIiwiZ3JhbmRncmFtcGEiLCJmVE5QIiwibyIsIm4xIiwibm9kZU5hbWUiLCJwMSIsIm4yIiwicDIiLCJwMyIsInA0Iiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiYW5jaG9yTm9kZSIsImZvY3VzTm9kZSIsInMiLCJwIiwiYXBwZW5kZWQiLCJoZWlnaHQiLCJwb3B1cCIsImVsIiwiYmdDb2xvclJlZ0V4cCIsImJnQ29sb3IiLCJjb2xvckJ0biIsIm0iLCJtYXRjaCIsImFwcGVuZENoaWxkIiwiYmFja2dyb3VuZCIsInBvcCIsInJlbW92ZUNoaWxkIiwic2hvdyIsInBvcHVwSGVpZ2h0Iiwib25Nb3VzZWRvd24iLCJzZWxlY3Rpb25Qb3NpdGlvbiIsImdldFJhbmdlQXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJvZmZzZXRIZWlnaHQiLCJwYXJzZUludCIsInByZXZlbnREZWZhdWx0Iiwic3BsaXQiLCJkb25lIiwidW5kb25lIiwidmlzdWFsbHlPcmRlcmVkTWFya3MiLCJ2aXN1YWxseU9yZGVyZWRNYXJrSURzIiwicmVtb3ZlZEJvb2ttYXJrIiwibWFya1Njcm9sbFBvcyIsInVwZGF0ZUlEIiwibCIsImlkcyIsIm1hcmtzIiwiY29uY2F0IiwibG9zdCIsIk1hdGgiLCJtYXgiLCJhcHBseSIsImF1dG9ub3RlIiwidW5kbyIsIm5vQXV0b3NhdmUiLCJ1bmRvQm9va21hcmsiLCJyZWRvIiwiY3V0T3V0IiwidG9CZVJlbW92ZWQiLCJpbmRpY2VzIiwic21hbGxlc3RJRCIsImZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzIiwiaiIsIngiLCJtYXJrc0ludGVyc2VjdCIsImluY2x1ZGVzIiwic29ydCIsInNoaWZ0IiwibWluIiwic3BsaWNlIiwiZ2V0QnlJZCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsImZvckVhY2giLCJhcmciLCJvcHRpb25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoaWdobGlnaHQiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHRDb250ZW50Iiwic2lsZW50IiwiaW1tdXRhYmxlIiwic2F2ZSIsInJlcXVlc3QiLCJncmFudGVkIiwic3ViIiwiaTE4biIsImdldE1lc3NhZ2UiLCJwcm9tcHQiLCJyZXRyaWV2ZUVudHJ5IiwiY29uZmlybWVkIiwiY29uZmlybSIsImNvcHkiLCJmaW5kTWFyayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRyaW0iLCJzdG9yZSIsIm9yZGVyIiwib3JkZXJNYXJrc1Zpc3VhbGx5IiwicmVjcmVhdGUiLCJfU0VMRUNUSU9OIiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJhcmVhX2hpc3RvcnkiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXRUaW1lb3V0Iiwic2V0IiwicmVtb3ZlQm9va21hcmsiLCJtYXJrMSIsIm1hcmsyIiwibTEiLCJtMiIsImJiMSIsImJiMiIsInRvcDEiLCJ0b3AyIiwibWFwIiwid3JhcHBlcnMxIiwidzEiLCJpZDEiLCJ3cmFwcGVyczIiLCJpZDIiLCJ3MiIsIm9uTWFya2VyS2V5Iiwib25Ib3RrZXkiLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0Iiwia0QiLCJvbkhhc2hDaGFuZ2UiLCJjb2xvciIsIkJPRFkiLCJET00iLCJjbGljayIsImtleXVwIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwibWFya0NsaWNrSGFuZGxlciIsInZpc2libGUiLCJyZWNlbnRseVVwZGF0ZWQiLCJzZXR0aW5nc01vZGUiLCJ0Iiwic2l6ZSIsImgiLCJkcmFnRFgiLCJkcmFnRFkiLCJtdXRhdGlvbk9ic2VydmVyIiwiYWRqdXN0Tm90ZURhdGFPYmplY3QiLCJjcmVhdGVOb3RlRWxlbWVudCIsImFkZExpc3RlbmVycyIsImFkZE1hcmtMaXN0ZW5lcnMiLCJub3RlRGF0YSIsImhlYWRlciIsImFjdGlvbnMiLCJkZWwiLCJnZWFyIiwicGFsZXR0ZSIsInRleHRFbGVtZW50IiwiZGVsVGV4dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pblRleHQiLCJnZWFyVGV4dCIsImNsYXNzTmFtZSIsInZhbHVlIiwiYXR0ZW1wdFVwZGF0ZSIsIl9kZWxldGUiLCJoaWRlIiwicmVtb3ZlTWFya0xpc3RlbmVycyIsImZvcmNlIiwiaW5uZXJXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRQb3NpdGlvbiIsIm9mZnNldCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIiLCJicmluZ1VwRnJvbnQiLCJ6SW5kZXgiLCJkaXNjb25uZWN0IiwidG9nZ2xlIiwidG9nZ2xlUGFsZXR0ZSIsImNoYW5nZUNvbG9yIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dGFyZWEiLCJjb25maWciLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJzYXZlU2l6ZSIsIm9ic2VydmUiLCJyZWN0IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvbkRyYWdTdGFydCIsInBhZ2VYIiwicGFnZVkiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJtdXRhdGlvbnNMaXN0Iiwid2lkdGgiLCJub3RlcyIsImRyYWdIYW5kbGVyIiwiZHJhZ1N0b3BIYW5kbGVyIiwidXBkYXRlVHJhbnNwIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJtZXRoIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJzdGFydERyYWdnaW5nTm90ZSIsImVtaXREcmFnRXZlbnQiLCJzdG9wRHJhZ2dpbmdOb3RlIiwiZG9jIiwic2VuZE5vdGVzU3RhdGUiLCJhdXRvUGF1c2UiLCJrZXlkb3duIiwic2VsZWN0aW9uY2hhbmdlIiwic2hpZnRTZW5zaXRpdmVLZXlzIiwia2V5Q29kZU1hcCIsImlzRWRpdGFibGUiLCJ0YWdOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiZGVsZWdhdGUiLCJ0b0xvd2VyQ2FzZSIsImtleUNvZGUiLCJtb2RLZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiYXJyb3dLZXlzIiwibG9ja2VkQWN0aW9ucyIsImZ1bmN0aW9uS2V5cyIsImRlZmF1bHRNYXJrZXJzIiwib3JpZ0tleSIsImlzTWFya2VyS2V5IiwiaXNDdXN0b21NYXJrZXJLZXkiLCJzZXR0aW5nIiwic2hvcnRjdXQiLCJzMSIsInMyIiwicmVzdG9yZWQiLCJmYWlsZWQiLCJmYWlsdXJlUmVwb3J0IiwiSW1tdXRSZXN0b3JlciIsIlJlc3RvcmVyIiwicmV0cnkiLCJvbkZhaWx1cmUiLCJyZXBvcnQiLCJnZXRSZXBvcnQiLCJtc2ciLCJyZWFzb24iLCJSZXN0b3JlckJhc2UiLCJhcmVhIiwicHJvYyIsImNiIiwicmVjIiwiZXhwaXJlIiwibGwiLCJ0ZW1wIiwicXVldWUiLCJjYWNoZSIsInBoYXNlIiwic2VsZWN0aW9uVHJpYWwiLCJjaHVua0R1cmF0aW9uIiwiX3RpbWVyIiwib29tIiwiaW5pdCIsIm5vdyIsInBvc3Rwb25lZCIsImNvbnZlcnREZXNjcmlwdGlvbiIsImNyZWF0ZVRlbXBPYmplY3QiLCJjb252ZXJ0ZWRDb25kcyIsImZpcnN0Tm9kZU5hbWUiLCJmaXJzdFBhcmVudE5vZGVOYW1lIiwiZmlyc3RUZXh0Tm9kZVBvc2l0aW9uIiwiZmlyc3ROb2RlUG9zaXRpb24iLCJmaXJzdFBhcmVudE5vZGVQb3NpdGlvbiIsImZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uIiwidHJpbW1lZFRleHQiLCJzcXVlZXplZFRleHQiLCJzcXVlZXplIiwidGV4dExlbmd0aCIsInRyaW1tZWRUZXh0TGVuZ3RoIiwic3F1ZWV6ZWRUZXh0TGVuZ3RoIiwicG9zc2libGVQb3NpdGlvbnMiLCJwb3NzaWJsZUVuZFBvc2l0aW9ucyIsInBvc3NpYmxlU3RhcnROb2RlcyIsInBvc3NpYmxlRW5kcyIsInBvc3NpYmxlRm9jdXNPZmZzZXRzIiwic29ydFF1ZXVlQnlJZCIsInNldEJvZHlTZWxlY3Rpb24iLCJnZXRUZXh0UG9zaXRpb25zIiwicG9zdHBvbmVPdmVybGFwcGluZ3MiLCJmaW5kUG9zc2libGVFeHRyZW1hIiwicnVsZU91dE11bHRpcGxlcyIsInJlc3RvcmVSYW5nZXMiLCJ0aW1lciIsInJlcyIsInRyaW1tZWRTZWxlY3Rpb25UZXh0IiwiYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyIsImVuZFBvc2l0aW9ucyIsIm1hcmtUZW1wIiwic29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJtYXhQb3NpdGlvbiIsInBvc2l0aW9ucyIsInBvczEiLCJwb3MyIiwicG9zdHBvbmUiLCJjdXRPdXRGb3IiLCJhbHJlYWR5SW5jbHVkZWQiLCJib2R5VGV4dE5vZGVzIiwic2F0aXNmaWVkIiwiY2hhcnMiLCJuZXh0U3RhcnRGb3VuZCIsImVuZGluZ3NJblRoaXNOb2RlIiwibm9kZXNUZXh0Iiwibm9kZXNUZXh0TGVuZ3RoIiwiZGlmZiIsImYiLCJxIiwicG9zc2libGVGb2N1c09mZnNldCIsInN0YXJ0Rm91bmRGb3IiLCJoYXNFbmRpbmdzSW5UaGlzTm9kZSIsImVuZEZvdW5kRm9yIiwic2F0aXNmaWVzRGVzY3JpcHRpb24iLCJmaW5kRm9jdXNPZmZzZXQiLCJncmFuZGdyYW5kZ3JhbXBhIiwibWF0Y2hlcyIsInN0YXJ0Tm9kZSIsInN0YXJ0Tm9kZVBvc2l0aW9uIiwic2V0TWF0Y2hpbmdFbmQiLCJlbmROb2RlIiwiZW5kTm9kZVBvc2l0aW9uIiwiZm9jdXNPZmZzZXQiLCJkZXNjcmlwdGlvbiIsInJlbGV2YW50Tm9kZVRleHQiLCJtYXJrVGV4dCIsInRleHRzTWF0Y2giLCJub2RlVGV4dCIsImNvdW50ZXIiLCJ0ZXN0IiwiY3JlYXRlUmFuZ2UiLCJyZWNvbGxlY3ROb2RlcyIsInNsaWNlIiwiY29udGV4dCIsImN1cnJlbnRDaGlsZCIsInByb2Nlc3NJbkNodW5rcyIsInJlc3RvcmVSYW5nZSIsImdldE5vZGUiLCJ0ZXh0Tm9kZVBvc2l0aW9uIiwicmFuZ2VDb3VudCIsImRlZmluZWQiLCJyZWR1Y2VUb09uZVJhbmdlIiwicmV0cmlldmVUZXh0IiwiYWRqdXN0Iiwic2VsZWN0QWxsQ2hpbGRyZW4iLCJwcm9wcyIsImlzU2ltcGxlIiwiZm9jdXMiLCJpc0JhY2t3YXJkcyIsInJldmVyc2UiLCJmaXJzdFRleHROb2RlIiwibGFzdFRleHROb2RlIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJ3aG9sZURvY3VtZW50IiwiZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJmaWx0ZXIiLCJpc1NlbGVjdGFibGUiLCJpc0JsYW5rIiwiaGFzTm9ybWFsUGFyZW50IiwiY29udGFpbnNOb2RlIiwiaXRlcmF0b3IiLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiYWNjZXB0Tm9kZSIsInBhcmVudE5vZGVzIiwidGV4dE5vZGUiLCJmaXJzdE5vZGUiLCJsYXN0Tm9kZSIsIm5leHROb2RlIiwidHJpbVNlbGVjdGlvbiIsInJlZHVjZVRvU2VsZWN0YWJsZSIsImNvbGxlY3RQYXJlbnROb2RlcyIsIm1hcmtXcmFwcGVycyIsIm5ld1NlZ21lbnQiLCJwcmV2IiwibmV4dCIsIm5leHRTaWJsaW5nIiwidW5zaGlmdCIsImFuY2hvck9mZnNldCIsInN1YnN0ciIsInNlbCIsInJnIiwic2VsZWN0Tm9kZSIsInBhcmVudHMiLCJub2RlVGV4dHMiLCJqb2luIiwibm9kZTEiLCJub2RlMiIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwicmFuZ2UwIiwibGFzdFJhbmdlIiwidGFnIiwidG9VcHBlckNhc2UiLCJpc0NoaWxkT2YiLCJzZWFyY2giLCJhdHRhY2hlZCIsImJ1dHRvbnMiLCJzaG93biIsImNyZWF0ZUJ1dHRvbnMiLCJ1cGRhdGVTdGF0ZSIsInNob3VsZEF0dGFjaCIsInJlbmRlciIsImJ0biIsImIiLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJ1cGRhdGVQb3NpdGlvbiIsInRtdWkiLCJub3Rlc0J1dHRvbiIsImJvb2ttYXJrQnV0dG9uIiwidHlwZSIsInRvZ2dsZU5vdGVzIiwib25Ob3RlQWRkZWQiLCJvbkxhc3ROb3RlUmVtb3ZlZCIsIm9uQm9va21hcmtBZGRlZCIsIm9uQm9va21hcmtSZW1vdmVkIiwiT05FT0ZGIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInoiLCJ5IiwiYXJyb3d1cCIsImFycm93ZG93biIsInNiIiwiY20iLCJzYXZlSW5Qcml2IiwiZHJvcExvc3NlcyIsImRvd25sb2FkIiwic29ydGVkIiwidmlldyIsInBwIiwiYXV0b2NzIiwiaWZyYW1lcyIsIm92ZXJ3cml0ZSIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiY2hhbmdlZE5vdGUiLCJlcnJvck5vdGUiLCJ2aXBOb3RlIiwiY3VzdG9tU2VhcmNoIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInRhYnMiLCJtZXRhIiwidW5mb2xkZWQiLCJ0YWdzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsInN5bmMiLCJNQVhfTE9HX0VOVFJJRVMiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidmFsIiwicHJvcCIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImRvbUV2ZW50cyIsImdlbmVyYWxIYW5kbGVyIiwiX2V4dHJhIiwiZXJyb3IiLCJmaWxlIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImFyZ3MiLCJ0b3BpYyIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJ0YWIiLCJmcmFtZUlkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX3BhZ2Vub3RlcyIsImxvY2FsIiwic2V0QXJlYXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztRQUVTQSxLLEdBQUFBLFc7UUFBT0MsZSxHQUFBQSw2QjtRQUFpQkMsTyxHQUFBQSxtQjtRQUFTQyxPLEdBQUFBLGU7UUFBU0MsVSxHQUFBQSxxQjtRQUFZQyxNLEdBQUFBLGE7UUFBUUMsSyxHQUFBQSxXO1FBQU9DLEssR0FBQUEsaUI7UUFBT0MsYSxHQUFBQSx5QjtRQUFlQyxTLEdBQUFBLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYcEc7O3FCQUVlLElBQUlKLGFBQUosQ0FBVztBQUN4QkssUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQixlQURiO0FBRUgsaUNBQTJCLGNBRnhCO0FBR0gsa0NBQTRCLGNBSHpCO0FBSUgsNEJBQXNCLGlCQUpuQjtBQUtILDRCQUFzQixhQUxuQjtBQU1ILHVCQUFpQixhQU5kO0FBT0gsb0JBQWM7QUFQWDtBQURDLEdBRGdCO0FBYXhCQyxLQUFHLEVBQUUsV0FibUI7QUFleEJDLEtBQUcsRUFBRSxFQWZtQjtBQWdCeEJDLGFBQVcsRUFBRSxFQWhCVztBQWtCeEJDLFFBQU0sRUFBRSxLQWxCZ0I7QUFtQnhCQyxNQUFJLEVBQUVDLFNBbkJrQjtBQW9CeEJDLE9BQUssRUFBRSxJQXBCaUI7QUFxQnhCO0FBQ0FDLFNBQU8sRUFBRSxFQXRCZTtBQXVCeEJDLFFBQU0sRUFBRSxLQXZCZ0I7QUF3QnhCQyxlQUFhLEVBQUUsS0F4QlM7QUF5QnhCQyxNQUFJLEVBQUUsRUF6QmtCO0FBMEJ4QkMsV0FBUyxFQUFFLFFBMUJhO0FBMkJ4QkMsT0FBSyxFQUFFLEtBM0JpQjtBQTRCeEJDLGNBQVksRUFBRSxLQTVCVTtBQThCeEJDLFVBOUJ3QixzQkE4QmI7QUFDVCxTQUFLQyxZQUFMO0FBQ0QsR0FoQ3VCO0FBa0N4QkMsUUFsQ3dCLG9CQWtDZjtBQUNQLFNBQUtULE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0gsSUFBTCxHQUFZQyxTQUFaO0FBQ0EsU0FBS0ssSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLSixLQUFMLEdBQWEsSUFBYjtBQUNELEdBdkN1QjtBQXlDeEJTLGNBekN3QiwwQkF5Q1Q7QUFBQTs7QUFDYixRQUFJLENBQUMsS0FBS1QsS0FBTixJQUFlVyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkIsRUFBMkQsT0FEOUMsQ0FDcUQ7O0FBRWxFLFNBQUtDLEdBQUwsQ0FBUyxVQUFULEVBQXFCQyxJQUFyQixDQUEwQixVQUFBQyxRQUFRLEVBQUk7QUFDcEMsVUFBTUMsZUFBZSxHQUFHRCxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0UsT0FBWixHQUFzQixJQUF0RDs7QUFDQSxVQUFJRCxlQUFKLEVBQXFCO0FBQ25CLGFBQUksQ0FBQ2QsTUFBTCxHQUFjYyxlQUFlLENBQUNFLE1BQWhCLEtBQTJCLE1BQXpDO0FBQ0EsYUFBSSxDQUFDZixhQUFMLEdBQXFCYSxlQUFlLENBQUNHLFVBQWhCLEtBQStCLEtBQXBEO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FuRHVCO0FBcUR4QkMsYUFyRHdCLHVCQXFEWkMsS0FyRFksRUFxRExDLE9BckRLLEVBcURJO0FBQzFCLFFBQUksS0FBS3hCLElBQUwsSUFBYSxLQUFLQSxJQUFMLEtBQWN3QixPQUEzQixJQUFzQyxDQUFDLEtBQUtwQixNQUFoRCxFQUF3RDtBQUN0RCxXQUFLSixJQUFMLEdBQVl1QixLQUFLLENBQUN2QixJQUFsQjs7QUFDQSxVQUFJLEtBQUtHLE9BQUwsQ0FBYXFCLE9BQWIsQ0FBSixFQUEyQjtBQUN6QixhQUFLckIsT0FBTCxDQUFhb0IsS0FBSyxDQUFDdkIsSUFBbkIsSUFBMkJ1QixLQUEzQjtBQUNBLGVBQU8sS0FBS3BCLE9BQUwsQ0FBYXFCLE9BQWIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixHQTdEdUI7QUErRHhCQyxpQkEvRHdCLDJCQStEUkYsS0EvRFEsRUErREQ7QUFDckIsUUFBSSxDQUFDLEtBQUtuQixNQUFOLElBQWdCLEtBQUtELE9BQUwsQ0FBYW9CLEtBQUssQ0FBQ3ZCLElBQW5CLENBQXBCLEVBQThDO0FBQzVDLFdBQUtHLE9BQUwsQ0FBYW9CLEtBQUssQ0FBQ3ZCLElBQW5CLEVBQXlCMEIsTUFBekIsR0FBa0NILEtBQUssQ0FBQ0csTUFBeEM7QUFDRDtBQUNGLEdBbkV1QjtBQXFFeEJDLGFBckV3Qix1QkFxRVpDLFlBckVZLEVBcUVFO0FBQ3hCLFFBQUksS0FBS3hCLE1BQVQsRUFBaUIsT0FBTyxLQUFQO0FBRWpCLFFBQU1ELE9BQU8sR0FBRyxLQUFLQSxPQUFyQjs7QUFDQSxTQUFLLElBQUlILElBQVQsSUFBaUJHLE9BQWpCLEVBQTBCO0FBQ3hCLFVBQUlBLE9BQU8sQ0FBQzBCLGNBQVIsQ0FBdUI3QixJQUF2QixLQUFnQ0EsSUFBSSxLQUFLNEIsWUFBN0MsRUFBMkQ7QUFDekQsZUFBTyxLQUFLekIsT0FBTCxDQUFhSCxJQUFiLENBQVA7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0QsU0FBS0EsSUFBTCxHQUFZQyxTQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDRCxHQWpGdUI7QUFtRnhCNEIsWUFuRndCLHNCQW1GYjNCLE9BbkZhLEVBbUZKO0FBQ2xCLFFBQUksQ0FBQyxLQUFLQyxNQUFWLEVBQWtCLEtBQUtKLElBQUwsR0FBWUcsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxJQUF2QjtBQUNsQixRQUFNK0IsQ0FBQyxHQUFHNUIsT0FBTyxDQUFDNkIsTUFBbEI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXVixLQUFoQixFQUF1QlUsQ0FBQyxHQUFHRixDQUEzQixFQUE4QkUsQ0FBQyxFQUEvQixFQUFtQztBQUNqQ1YsV0FBSyxHQUFHcEIsT0FBTyxDQUFDOEIsQ0FBRCxDQUFmO0FBQ0EsV0FBSzlCLE9BQUwsQ0FBYW9CLEtBQUssQ0FBQ3ZCLElBQW5CLElBQTJCdUIsS0FBM0I7QUFDRDs7QUFDRCxTQUFLckIsS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLTSxLQUFMLEdBQWEsQ0FBQyxDQUFDTCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLEtBQTFCO0FBQ0QsR0E1RnVCO0FBOEZ4QjBCLGFBOUZ3Qix5QkE4RlY7QUFDWixXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuQixRQUF6QixFQUFtQyxPQUFPLElBQVA7QUFDbkMsYUFBT21CLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJxQixJQUFqQixDQUFzQkMsTUFBN0I7QUFDRCxLQUhNLENBQVA7QUFJRCxHQW5HdUI7QUFvR3hCQyxlQXBHd0IsMkJBb0dSO0FBQ2QsV0FBT0wsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DdEIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFvQixPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDbkIsUUFBekIsRUFBbUMsT0FBTyxJQUFQO0FBQ25DLGFBQU9tQixPQUFPLENBQUNuQixRQUFSLENBQWlCcUIsSUFBakIsQ0FBc0JHLFFBQTdCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0F6R3VCO0FBMEd4QkMsa0JBMUd3Qiw4QkEwR0w7QUFDakIsV0FBT1AsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DdEIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFvQixPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDbkIsUUFBekIsRUFBbUMsT0FBTyxJQUFQO0FBQ25DLGFBQU9tQixPQUFPLENBQUNuQixRQUFSLENBQWlCcUIsSUFBakIsQ0FBc0JLLFdBQTdCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0EvR3VCO0FBZ0h4QkMsY0FoSHdCLDBCQWdIVDtBQUNiLFdBQU9ULE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ3RCLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBb0IsT0FBTyxFQUFJO0FBQy9ELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ25CLFFBQXpCLEVBQW1DLE9BQU8sSUFBUDtBQUNuQyxhQUFPbUIsT0FBTyxDQUFDbkIsUUFBUixDQUFpQnFCLElBQWpCLENBQXNCTyxPQUE3QjtBQUNELEtBSE0sQ0FBUDtBQUlELEdBckh1QjtBQXNIeEJDLGVBdEh3QiwyQkFzSFI7QUFDZCxXQUFPWCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuQixRQUF6QixFQUFtQyxPQUFPLEtBQVA7QUFDbkMsYUFBT21CLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJFLE9BQWpCLENBQXlCNEIsUUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQTNIdUI7QUE0SHhCQyxZQTVId0Isd0JBNEhYO0FBQ1gsV0FBT2IsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DdEIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFvQixPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDbkIsUUFBekIsRUFBbUMsT0FBTyxLQUFQO0FBQ25DLGFBQU9tQixPQUFPLENBQUNuQixRQUFSLENBQWlCRSxPQUFqQixDQUF5QlgsS0FBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQWpJdUI7QUFrSXhCeUMsY0FsSXdCLDBCQWtJVDtBQUNiLFdBQU9kLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ3RCLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBb0IsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJpQyxPQUFyQjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQXBJdUI7QUFxSXhCQyxnQkFySXdCLDRCQXFJUDtBQUNmLFdBQU9oQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNuQixRQUFSLENBQWlCbUMsU0FBckI7QUFBQSxLQUF0RCxDQUFQO0FBQ0QsR0F2SXVCO0FBd0l4QkMsV0F4SXdCLHVCQXdJWjtBQUNWLFdBQU9sQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNuQixRQUFyQixJQUFpQ21CLE9BQU8sQ0FBQ25CLFFBQVIsQ0FBaUJxQyxLQUFqQixDQUF1QkMsTUFBNUQsRUFBb0UsT0FBTyxJQUFQO0FBQ3BFLGFBQU8sS0FBUDtBQUNELEtBSE0sQ0FBUDtBQUlELEdBN0l1QjtBQThJeEJDLGFBOUl3Qix5QkE4SVY7QUFDWixXQUFPckIsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DdEIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFvQixPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDbkIsUUFBekIsRUFBbUMsT0FBTyxRQUFQO0FBQ25DLGFBQU9tQixPQUFPLENBQUNuQixRQUFSLENBQWlCRSxPQUFqQixDQUF5QkMsTUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRDtBQW5KdUIsQ0FBWCxDOzs7Ozs7Ozs7Ozs7OztBQ0ZmOztBQUVBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJakMsY0FBSixDQUFZO0FBQ1ZPLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxxQkFBZSxjQURaO0FBRUgsK0JBQXlCLGVBRnRCO0FBR0gsd0JBQWtCLGVBSGY7QUFJSCw0QkFBc0IsZUFKbkI7QUFLSCwrQkFBeUIsaUJBTHRCO0FBTUgsdUJBQWlCLGlCQU5kO0FBUUg7QUFDQSx1QkFBaUI7QUFUZDtBQURDLEdBREU7QUFlVjhELGFBQVcsRUFBRSxLQWZIO0FBaUJWL0MsVUFqQlUsc0JBaUJDO0FBQ1QsU0FBS2dELGFBQUw7QUFDRCxHQW5CUztBQXFCVkEsZUFyQlUsMkJBcUJNO0FBQ2RyRSx1QkFBT1UsTUFBUCxHQUFnQjRELE1BQU0sS0FBS0EsTUFBTSxDQUFDQyxNQUFQLENBQWNELE1BQXpDO0FBQ0F0RSx1QkFBT1EsR0FBUCxHQUFhOEQsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQmdELEdBQTdCO0FBQ0F4RSx1QkFBT1MsV0FBUCxHQUFxQixzQkFBVVQsbUJBQU9RLEdBQWpCLENBQXJCO0FBQ0QsR0F6QlM7QUEwQlZpRSxjQTFCVSx3QkEwQkd2QyxLQTFCSCxFQTBCVTtBQUNsQixRQUFNRixVQUFVLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDbEIsYUFBMUI7QUFDQSxRQUFNUixHQUFHLEdBQUd3QixVQUFVLEdBQUdoQyxtQkFBT1MsV0FBVixHQUF3QlQsbUJBQU9RLEdBQXJEOztBQUVBLFFBQUkwQixLQUFLLENBQUMxQixHQUFOLEtBQWNBLEdBQWxCLEVBQXVCO0FBQ3JCUix5QkFBT3lDLFVBQVAsQ0FBa0IsQ0FBQ1AsS0FBRCxDQUFsQjtBQUNEO0FBQ0YsR0FqQ1M7QUFrQ1Z3QyxlQWxDVSwyQkFrQ007QUFDZCxTQUFLTixXQUFMLEdBQW1CLElBQW5CO0FBQ0QsR0FwQ1M7QUFxQ1ZPLGlCQXJDVSw2QkFxQ1E7QUFDaEIsU0FBS1AsV0FBTCxHQUFtQixLQUFuQjtBQUNELEdBdkNTO0FBd0NWUSxlQXhDVSx5QkF3Q0lDLElBeENKLEVBd0NVO0FBQ2xCLFNBQUtDLElBQUwsQ0FBVSxZQUFWLEVBQXdCO0FBQ3RCQyxlQUFTLEVBQUUsQ0FBQ1QsTUFBTSxDQUFDVSxZQUFQLEdBQXNCQyxXQURaO0FBRXRCQyxjQUFRLEVBQUUsQ0FBQyxDQUFDMUQsUUFBUSxDQUFDMkQsY0FBVCxDQUF3Qiw0QkFBeEIsQ0FGVTtBQUd0QmYsaUJBQVcsRUFBRSxLQUFLQTtBQUhJLEtBQXhCLEVBSUdTLElBSkg7QUFLRCxHQTlDUztBQWdEVjtBQUNBTyxnQkFqRFUsMEJBaURLUCxJQWpETCxFQWlEVztBQUNuQixRQUFJL0QsT0FBTyxHQUFHK0QsSUFBSSxDQUFDL0QsT0FBbkI7QUFDQUEsV0FBTyxHQUFHdUUsS0FBSyxDQUFDQyxPQUFOLENBQWN4RSxPQUFkLElBQXlCQSxPQUF6QixHQUFtQyxDQUFDQSxPQUFELENBQTdDO0FBRUE7O0FBQ0FkLHVCQUFPeUMsVUFBUCxDQUFrQjNCLE9BQWxCOztBQUNBLFNBQUtnRSxJQUFMLENBQVUsYUFBVixFQUF5QmhFLE9BQXpCO0FBQ0EsUUFBSStELElBQUksQ0FBQ1UsbUJBQVQsRUFBOEIsS0FBS0MsVUFBTCxDQUFnQjFFLE9BQWhCLEVBQXlCK0QsSUFBSSxDQUFDVSxtQkFBOUI7QUFDOUIsU0FBS1QsSUFBTCxDQUFVLGVBQVYsRUFBMkJELElBQUksQ0FBQy9ELE9BQWhDO0FBQ0QsR0ExRFM7QUEyRFYwRSxZQTNEVSxzQkEyREMxRSxPQTNERCxFQTJEVXlFLG1CQTNEVixFQTJEK0I7QUFDdkMsUUFBTUUsVUFBVSxHQUFHM0UsT0FBTyxDQUFDLENBQUQsQ0FBMUI7QUFDQSxRQUFNa0IsVUFBVSxHQUFHLENBQUN5RCxVQUFVLENBQUN6RSxhQUEvQjtBQUNBLFFBQU1SLEdBQUcsR0FBR3dCLFVBQVUsR0FBR2hDLG1CQUFPUyxXQUFWLEdBQXdCVCxtQkFBT1EsR0FBckQ7O0FBRUEsUUFBSStFLG1CQUFtQixDQUFDL0UsR0FBcEIsS0FBNEJBLEdBQWhDLEVBQXFDO0FBQ25DUix5QkFBT1csSUFBUCxHQUFjNEUsbUJBQW1CLENBQUM1RSxJQUFsQztBQUNEO0FBQ0Y7QUFuRVMsQ0FBWixFOzs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUNBOzs7Ozs7QUFFQSxJQUFJWixpQkFBSixDQUFlO0FBQ2RNLFFBQU0sRUFBRTtBQUNMQyxPQUFHLEVBQUU7QUFDSCxzQ0FBZ0MsUUFEN0I7QUFFSCwyQkFBcUIsbUJBRmxCO0FBR0gsaUNBQTJCO0FBSHhCO0FBREEsR0FETTtBQVNib0YsU0FBTyxFQUFFLElBVEk7QUFVYkMsUUFBTSxFQUFFLEdBVks7QUFZYnRFLFVBWmEsc0JBWUY7QUFDVCxTQUFLdUUsTUFBTDtBQUNELEdBZFk7QUFnQmJBLFFBaEJhLG9CQWdCSjtBQUFBOztBQUNQNUYsdUJBQU8wQixHQUFQLENBQVcsVUFBWCxFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQUMsUUFBUSxFQUFJO0FBQ3RDLFdBQUksQ0FBQ3NDLE1BQUwsR0FBY3RDLFFBQVEsQ0FBQ3FCLElBQVQsQ0FBYzRDLFVBQWQsS0FBNkIsTUFBM0M7QUFDRCxLQUZEO0FBR0QsR0FwQlk7QUFxQmJDLFdBckJhLHFCQXFCSEMsR0FyQkcsRUFxQkU7QUFDYixTQUFLSixNQUFMLEdBQWNJLEdBQWQ7QUFDRCxHQXZCWTtBQXdCYkMsbUJBeEJhLDZCQXdCS0MsUUF4QkwsRUF3QmU7QUFDMUIsUUFBSSxLQUFLL0IsTUFBVCxFQUFpQjtBQUNmLFVBQUkrQixRQUFRLElBQUksQ0FBQyxLQUFLQyxTQUF0QixFQUFpQztBQUMvQixhQUFLQyxjQUFMO0FBQ0QsT0FGRCxNQUdLLElBQUksQ0FBQ0YsUUFBRCxJQUFhLEtBQUtDLFNBQXRCLEVBQWlDO0FBQ3BDLGFBQUtFLGFBQUw7QUFDRDtBQUNGLEtBUEQsTUFRSyxJQUFJLEtBQUtGLFNBQVQsRUFBb0I7QUFDdkIsV0FBS0UsYUFBTDtBQUNEO0FBQ0YsR0FwQ1k7QUFxQ2JELGdCQXJDYSw0QkFxQ0k7QUFDZixRQUFJLENBQUMsS0FBS0QsU0FBVixFQUFxQjtBQUNuQixVQUFNUixPQUFPLEdBQUcsS0FBS0EsT0FBTCxHQUFlLEtBQUtXLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUEvQjtBQUNBaEMsWUFBTSxDQUFDOUMsUUFBUCxDQUFnQitFLElBQWhCLENBQXFCQyxnQkFBckIsQ0FBc0MsU0FBdEMsRUFBaURkLE9BQWpELEVBQTBELEtBQTFEO0FBQ0EsV0FBS1EsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0YsR0EzQ1k7QUE0Q2JFLGVBNUNhLDJCQTRDRztBQUNkLFFBQUksS0FBS0YsU0FBVCxFQUFvQjtBQUNsQjVCLFlBQU0sQ0FBQzlDLFFBQVAsQ0FBZ0IrRSxJQUFoQixDQUFxQkUsbUJBQXJCLENBQXlDLFNBQXpDLEVBQW9ELEtBQUtmLE9BQXpELEVBQWtFLEtBQWxFO0FBQ0EsV0FBS1EsU0FBTCxHQUFpQixLQUFqQjtBQUNEO0FBQ0YsR0FqRFk7QUFrRGJHLFdBbERhLHVCQWtERDtBQUNWLFNBQUtELGFBQUw7QUFDQSxRQUFNckIsU0FBUyxHQUFHVCxNQUFNLENBQUNVLFlBQVAsR0FBc0IwQixRQUF0QixFQUFsQjtBQUNBLFFBQUkzQixTQUFKLEVBQWUsS0FBS0QsSUFBTCxDQUFVLGVBQVYsRUFBMkIsS0FBS2EsTUFBaEM7QUFDaEI7QUF0RFksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7OztJQUVxQmdCLFM7OztBQUVuQix1QkFBYztBQUFBOztBQUNaLFNBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDRDs7Ozt3QkFFR0QsSSxFQUFNO0FBQ1JBLFVBQUksR0FBR0EsSUFBSSxJQUFJLEtBQUtBLElBQXBCO0FBRUEsVUFBSUUsUUFBUSxHQUFHRixJQUFJLENBQUNFLFFBQXBCO0FBQUEsVUFDSUMsQ0FBQyxHQUFHRCxRQUFRLENBQUNuRSxNQURqQjtBQUFBLFVBRUlrRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxDQUFELENBRnJCO0FBSUFGLFVBQUksQ0FBQ0ksT0FBTCxDQUFhOUIsUUFBYixHQUF3QixJQUF4QjtBQUNBMkIsWUFBTSxDQUFDSSxFQUFQLEdBQVksNEJBQVo7O0FBRUEsYUFBT0YsQ0FBQyxFQUFSO0FBQ0VELGdCQUFRLENBQUNDLENBQUQsQ0FBUixDQUFZRyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixxQkFBMUI7QUFERjs7QUFHQSxXQUFLUCxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFFQSxhQUFPLElBQVA7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSUQsSUFBSSxHQUFHLEtBQUtBLElBQWhCO0FBQUEsVUFDSUMsTUFBTSxHQUFHLEtBQUtBLE1BRGxCO0FBQUEsVUFFSUMsUUFBUSxHQUFHRixJQUFJLENBQUNFLFFBRnBCO0FBQUEsVUFHSUMsQ0FBQyxHQUFHRCxRQUFRLENBQUNuRSxNQUhqQjtBQUtBa0UsWUFBTSxDQUFDSSxFQUFQLEdBQVksRUFBWjtBQUNBTCxVQUFJLENBQUNJLE9BQUwsQ0FBYTlCLFFBQWIsR0FBd0IsS0FBeEI7O0FBRUEsYUFBTzZCLENBQUMsRUFBUjtBQUNFRCxnQkFBUSxDQUFDQyxDQUFELENBQVIsQ0FBWUcsU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkIscUJBQTdCO0FBREY7QUFFRDs7O21DQUNjQyxFLEVBQUk7QUFDakIsVUFBSUEsRUFBRSxLQUFLQSxFQUFFLEdBQUcvQyxNQUFNLENBQUM5QyxRQUFQLENBQWdCMkQsY0FBaEIsQ0FBK0IsNEJBQS9CLENBQVYsQ0FBTixFQUNFa0MsRUFBRSxDQUFDQyxjQUFILENBQWtCO0FBQUVDLGdCQUFRLEVBQUUsUUFBWjtBQUFzQkMsYUFBSyxFQUFFO0FBQTdCLE9BQWxCO0FBQ0g7Ozs7OztxQkF4Q2tCYixTOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7QUFDQTs7Ozs7O0FBRUEsSUFBSTVHLGlCQUFKLENBQWU7QUFDYk0sUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHVCQUFpQjtBQURkO0FBREMsR0FESztBQU1iNEQsUUFBTSxFQUFFLEtBTks7QUFRYjdDLFVBUmEsc0JBUUY7QUFDVCxTQUFLb0csUUFBTCxDQUFjLElBQWQ7QUFDRCxHQVZZO0FBWWJBLFVBWmEsb0JBWUpDLEVBWkksRUFZQTtBQUNYLFFBQUlBLEVBQUUsSUFBSSxDQUFDLEtBQUt4RCxNQUFoQixFQUF3QjtBQUN0QixXQUFLeUQsZUFBTDtBQUNBLFdBQUt6RCxNQUFMLEdBQWMsSUFBZDtBQUNELEtBSEQsTUFJSyxJQUFJLENBQUN3RCxFQUFELElBQU8sS0FBS3hELE1BQWhCLEVBQXdCO0FBQzNCLFdBQUswRCxlQUFMO0FBQ0EsV0FBSzFELE1BQUwsR0FBYyxLQUFkO0FBQ0Q7QUFDRixHQXJCWTtBQXNCYnlELGlCQXRCYSw2QkFzQks7QUFDaEIsU0FBS0UsV0FBTCxDQUFpQixXQUFqQixFQUE4QixVQUFBbkYsQ0FBQyxFQUFJO0FBQ2pDLFVBQUlBLENBQUMsQ0FBQ29GLE1BQUYsS0FBYSxDQUFqQixFQUFvQjtBQUNsQixZQUFJcEYsQ0FBQyxDQUFDcUYsTUFBRixDQUFTYixTQUFULENBQW1CYyxRQUFuQixDQUE0QixzQkFBNUIsQ0FBSixFQUF5RDtBQUN2RGhJLDZCQUFPaUIsSUFBUCxHQUFjeUIsQ0FBQyxDQUFDcUYsTUFBRixDQUFTRSxZQUFULENBQXNCLFlBQXRCLENBQWQ7QUFDRCxTQUZELE1BR0tqSSxtQkFBT2lCLElBQVAsR0FBYyxFQUFkO0FBQ047QUFDRixLQVBELEVBT0dxRCxNQUFNLENBQUM5QyxRQVBWO0FBUUQ7QUEvQlksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7OztJQUVxQjBHLEs7OztBQUVuQixpQkFBWXZDLE1BQVosRUFBb0JJLEdBQXBCLEVBQXlCb0MsV0FBekIsRUFBc0NoSCxLQUF0QyxFQUE2QztBQUFBOztBQUMzQyxRQUFJNEQsU0FBSixFQUFlcUQsUUFBZjtBQUVGLFNBQUt6QyxNQUFMLEdBQWNBLE1BQWQ7QUFDQVosYUFBUyxHQUFHLEtBQUtBLFNBQUwsR0FBaUJZLE1BQU0sQ0FBQ1osU0FBcEM7QUFDRSxTQUFLNUQsS0FBTCxHQUFhbkIsbUJBQU9vQixZQUFQLEdBQXNCdUUsTUFBTSxDQUFDMEMsT0FBN0IsR0FBdUNsSCxLQUFwRDtBQUVBaUgsWUFBUSxHQUFHO0FBQ1RFLFdBQUssRUFBRSxFQURFO0FBRVRwRCxjQUFRLEVBQUUsS0FGRDtBQUdUcUQsV0FBSyxFQUFFLElBSEU7QUFJVEMsVUFBSSxFQUFFekQsU0FBUyxDQUFDeUQsSUFKUDtBQUtUQyxVQUFJLEVBQUU7QUFMRyxLQUFYOztBQU9BLFNBQUssSUFBSUMsQ0FBVCxJQUFjTixRQUFkLEVBQXdCO0FBQ3RCLFVBQUksQ0FBQ0QsV0FBVyxDQUFDM0YsY0FBWixDQUEyQmtHLENBQTNCLENBQUwsRUFBb0M7QUFDbENQLG1CQUFXLENBQUNPLENBQUQsQ0FBWCxHQUFpQk4sUUFBUSxDQUFDTSxDQUFELENBQXpCO0FBQ0Q7QUFDRjs7QUFDRFAsZUFBVyxDQUFDbEIsRUFBWixHQUFpQmtCLFdBQVcsQ0FBQ2xCLEVBQVosSUFBa0IsRUFBRXRCLE1BQU0sQ0FBQ2dELE9BQTVDO0FBQ0YsU0FBSzFCLEVBQUwsR0FBVWtCLFdBQVcsQ0FBQ2xCLEVBQXRCO0FBQ0EsU0FBSzJCLE1BQUwsR0FBYzdELFNBQVMsQ0FBQzZELE1BQXhCO0FBRUEsUUFBSUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsR0FBYTlELFNBQVMsQ0FBQzhELEtBQW5DO0FBRUEsU0FBS0MsV0FBTCxHQUFtQkQsS0FBSyxDQUFDQyxXQUF6QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJGLEtBQUssQ0FBQ0UsU0FBdkI7QUFFQSxTQUFLakMsUUFBTCxHQUFnQixJQUFoQjtBQUNFLFNBQUtrQyxVQUFMLEdBQWtCLEVBQWxCO0FBRUYsU0FBS0Msa0JBQUwsR0FBMEIsSUFBMUI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQUVBLFNBQUtsQyxPQUFMLEdBQWU7QUFDZEMsUUFBRSxFQUFFa0IsV0FBVyxDQUFDbEIsRUFERjtBQUVkbEIsU0FBRyxFQUFFQSxHQUZTO0FBR2R1QyxXQUFLLEVBQUVILFdBQVcsQ0FBQ0csS0FITDtBQUlkQyxXQUFLLEVBQUVKLFdBQVcsQ0FBQ0ksS0FKTDtBQUtkQyxVQUFJLEVBQUVMLFdBQVcsQ0FBQ0ssSUFMSjtBQU1kdEQsY0FBUSxFQUFFaUQsV0FBVyxDQUFDakQsUUFOUjtBQU9YdUQsVUFBSSxFQUFFTixXQUFXLENBQUNNLElBUFA7QUFRWHBHLFlBQU0sRUFBRThGLFdBQVcsQ0FBQzlGO0FBUlQsS0FBZjs7QUFXRSxRQUFJLEtBQUtsQixLQUFMLEtBQWVuQixtQkFBT29CLFlBQVAsSUFBdUIsQ0FBQyxLQUFLNEYsT0FBTCxDQUFhdUIsS0FBcEQsQ0FBSixFQUFnRTtBQUM5RCxXQUFLWSxjQUFMO0FBQ0Q7QUFDRjs7OzsyQkFFS04sSyxFQUFPO0FBQ1hBLFdBQUssR0FBR0EsS0FBSyxJQUFJLEtBQUtBLEtBQXRCO0FBQ0EsVUFBSTlELFNBQVMsR0FBRyxLQUFLQSxTQUFyQjtBQUFBLFVBQ0l1RCxLQUFLLEdBQUcsS0FBS3RCLE9BQUwsQ0FBYXNCLEtBRHpCO0FBQUEsVUFFSWMsS0FBSyxHQUFHckUsU0FBUyxDQUFDcUUsS0FGdEI7QUFBQSxVQUdJQyxDQUFDLEdBQUdELEtBQUssQ0FBQ3pHLE1BSGQ7QUFBQSxVQUlJbUUsUUFBUSxHQUFHLEtBQUtBLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxJQUFpQixLQUFLd0MsY0FBTCxDQUFvQmhCLEtBQXBCLEVBQTJCZSxDQUEzQixDQUpoRDtBQUFBLFVBS0l6RyxDQUFDLEdBQUcsQ0FMUjtBQUFBLFVBTUkyRyxTQUFTLEdBQUdGLENBQUMsR0FBRyxDQU5wQjtBQUFBLFVBT0lHLElBUEo7O0FBU0EsYUFBTzVHLENBQUMsR0FBR3lHLENBQVgsRUFBY3pHLENBQUMsRUFBZixFQUFtQjtBQUNqQjRHLFlBQUksR0FBR0osS0FBSyxDQUFDeEcsQ0FBRCxDQUFaO0FBQ0FpRyxhQUFLLENBQUNZLGtCQUFOLENBQXlCRCxJQUF6QjtBQUNBLFlBQUksQ0FBQzVHLENBQUwsRUFBUWlHLEtBQUssQ0FBQ2EsUUFBTixDQUFlRixJQUFmLEVBQXFCLEtBQUtWLFdBQTFCO0FBRVIsWUFBSWxHLENBQUMsS0FBSzJHLFNBQVYsRUFDRVYsS0FBSyxDQUFDYyxNQUFOLENBQWFILElBQWIsRUFBbUIsS0FBS1QsU0FBeEI7QUFFRkYsYUFBSyxDQUFDZSxnQkFBTixDQUF1QjlDLFFBQVEsQ0FBQ2xFLENBQUQsQ0FBL0I7QUFDQSxhQUFLb0csVUFBTCxDQUFnQmEsSUFBaEIsQ0FBcUIvQyxRQUFRLENBQUNsRSxDQUFELENBQVIsQ0FBWWtILFVBQWpDO0FBRUFOLFlBQUksQ0FBQ00sVUFBTCxDQUFnQkMsU0FBaEI7QUFDRDs7QUFFRCxXQUFLQyxjQUFMLENBQW9CVCxTQUFwQjtBQUVBLFVBQUksS0FBS3ZDLE9BQUwsQ0FBYTlCLFFBQWpCLEVBQTJCLEtBQUtTLE1BQUwsQ0FBWXNFLFdBQVosQ0FBd0IsSUFBeEIsRUFBOEIsS0FBOUI7QUFFM0IsVUFBSSxDQUFDLEtBQUs5SSxLQUFOLEtBQWdCbkIsbUJBQU9vQixZQUFQLElBQXVCLENBQUMsS0FBSzRGLE9BQUwsQ0FBYXVCLEtBQXJELENBQUosRUFBaUUsS0FBSzJCLFFBQUw7QUFFbkUsV0FBS0Msc0JBQUw7QUFFQSxhQUFPLElBQVA7QUFDQTs7OzZDQUN5QjtBQUN2QixVQUFNckQsUUFBUSxHQUFHLEtBQUtBLFFBQXRCO0FBRHVCO0FBQUE7QUFBQTs7QUFBQTtBQUV2Qiw2QkFBb0JBLFFBQXBCLDhIQUE4QjtBQUFBLGNBQXJCc0QsT0FBcUI7QUFDNUJBLGlCQUFPLENBQUM1RCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxLQUFLYixNQUFMLENBQVkwRSxLQUFaLENBQWtCLElBQWxCLEVBQXdCLEtBQUtDLE9BQTdCLENBQWxDLEVBQXlFLEtBQXpFO0FBQ0Q7QUFKc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUt4Qjs7OzRCQUNPNUgsQyxFQUFHO0FBQ1QsVUFBSTZILEtBQUo7O0FBQ0EsVUFBSTdILENBQUMsQ0FBQ3FGLE1BQU4sRUFBYztBQUNackYsU0FBQyxDQUFDOEgsZUFBRjtBQUNBeEssMkJBQU9pQixJQUFQLEdBQWN5QixDQUFDLENBQUNxRixNQUFGLENBQVNFLFlBQVQsQ0FBc0IsWUFBdEIsQ0FBZDtBQUNBc0MsYUFBSyxHQUFHLGNBQVI7QUFDRCxPQUpELE1BSU87QUFDTHZLLDJCQUFPaUIsSUFBUCxHQUFjeUIsQ0FBQyxHQUFHLElBQWxCO0FBQ0E2SCxhQUFLLEdBQUcsZ0JBQVI7QUFDRDs7QUFDRCxXQUFLNUUsTUFBTCxDQUFZYixJQUFaLENBQWlCeUYsS0FBakIsRUFBd0I7QUFDdEJ0RCxVQUFFLEVBQUUsS0FBS0EsRUFEYTtBQUV0Qi9CLGdCQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUs4QixPQUFMLENBQWE5QixRQUZIO0FBR3RCdUQsWUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLekIsT0FBTCxDQUFheUI7QUFIQyxPQUF4QjtBQUtEOzs7bUNBQ2NZLEMsRUFBR29CLGdCLEVBQWtCO0FBQ2xDLFVBQUkzRCxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFDQXVDLE9BQUMsR0FBRyxPQUFPQSxDQUFQLEtBQWEsUUFBYixHQUF3QkEsQ0FBeEIsR0FBNEJ2QyxRQUFRLENBQUNuRSxNQUFULEdBQWtCLENBQWxEO0FBQ0EsVUFBTStILFlBQVksR0FBRzVELFFBQVEsQ0FBQyxDQUFELENBQTdCO0FBQ0EsVUFBTTZELFdBQVcsR0FBRzdELFFBQVEsQ0FBQ3VDLENBQUQsQ0FBNUI7QUFDQSxVQUFNdUIsV0FBVyxHQUFHRixZQUFZLENBQUNaLFVBQWpDO0FBQ0EsVUFBTWUsVUFBVSxHQUFHRixXQUFXLENBQUNiLFVBQS9CO0FBQ0EsVUFBSWdCLFVBQUosRUFBZ0JDLFNBQWhCO0FBRUEsV0FBSzlCLGtCQUFMLEdBQTBCLEtBQUsrQixVQUFMLENBQWdCSixXQUFoQixFQUE2QkYsWUFBN0IsRUFBMkMsSUFBM0MsSUFBbUQsQ0FBN0U7QUFDQSxXQUFLeEIsaUJBQUwsR0FBeUIsS0FBSzhCLFVBQUwsQ0FBZ0JILFVBQWhCLEVBQTRCRixXQUE1QixFQUF5QyxJQUF6QyxDQUF6QjtBQUVBRyxnQkFBVSxHQUFHSixZQUFZLENBQUNPLGVBQTFCO0FBQ0FGLGVBQVMsR0FBR0osV0FBVyxDQUFDTSxlQUF4QjtBQUVBLFVBQUlILFVBQVUsSUFBSUEsVUFBVSxDQUFDSSxRQUFYLEtBQXdCLENBQTFDLEVBQTZDLEtBQUtqQyxrQkFBTCxJQUEyQixDQUEzQjtBQUM3QyxVQUFJLENBQUM4QixTQUFELElBQWNBLFNBQVMsQ0FBQ0csUUFBVixLQUF1QixDQUFyQyxJQUEwQ04sV0FBVyxLQUFLQyxVQUE5RCxFQUEwRSxLQUFLM0IsaUJBQUwsSUFBMEIsQ0FBMUI7QUFFMUUsVUFBSSxLQUFLRCxrQkFBTCxHQUEwQixDQUE5QixFQUFpQyxLQUFLQSxrQkFBTCxHQUEwQixDQUExQjtBQUNqQyxVQUFJLEtBQUtDLGlCQUFMLEdBQXlCLENBQTdCLEVBQWdDLEtBQUtBLGlCQUFMLEdBQXlCLENBQXpCOztBQUVoQyxVQUFJdUIsZ0JBQUosRUFBc0I7QUFDcEIsYUFBSzNCLFdBQUwsR0FBbUJnQyxVQUFVLElBQUlBLFVBQVUsQ0FBQ0ssSUFBekIsR0FBZ0NMLFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQnhJLE1BQWhELEdBQXlELENBQTVFO0FBQ0EsYUFBS29HLFNBQUwsR0FBaUIsS0FBS0gsTUFBTCxHQUFjLEtBQUtFLFdBQUwsR0FBbUIsS0FBSzlCLE9BQUwsQ0FBYXdCLElBQWIsQ0FBa0I3RixNQUFuRCxHQUE0RCxLQUFLb0csU0FBbEY7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBS2lCLGNBQUwsQ0FBb0JwSixTQUFwQixFQUErQixJQUEvQixFQUNLc0osUUFETDtBQUdBLGFBQU8sSUFBUDtBQUNEOzs7MkJBQ0s7QUFDTixVQUFJbEIsVUFBVSxHQUFHLEtBQUtBLFVBQXRCO0FBQUEsVUFDRWxDLFFBQVEsR0FBRyxLQUFLQSxRQURsQjtBQUFBLFVBRUVDLENBQUMsR0FBR0QsUUFBUSxDQUFDbkUsTUFGZjtBQUFBLFVBR0V5SSxTQUhGO0FBQUEsVUFHYWhCLE9BSGI7O0FBS0EsYUFBT3JELENBQUMsRUFBUixFQUFZO0FBQ1hxRSxpQkFBUyxHQUFHcEMsVUFBVSxDQUFDakMsQ0FBRCxDQUF0QjtBQUNBcUQsZUFBTyxHQUFHdEQsUUFBUSxDQUFDQyxDQUFELENBQWxCO0FBQ0FxRSxpQkFBUyxDQUFDQyxZQUFWLENBQXVCakIsT0FBTyxDQUFDa0IsVUFBL0IsRUFBMkNsQixPQUEzQztBQUNBZ0IsaUJBQVMsQ0FBQ3JCLFNBQVY7QUFDQTs7QUFDRCxhQUFPLElBQVA7QUFDQTs7OzJCQUNNO0FBQ0osVUFBSWYsVUFBVSxHQUFHLEtBQUtBLFVBQXRCO0FBQUEsVUFDSWpFLFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWV3RyxJQUQvQjtBQUFBLFVBRUkxQyxLQUFLLEdBQUcsS0FBS0EsS0FGakI7QUFJQUEsV0FBSyxDQUFDYSxRQUFOLENBQWVWLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY3dDLFVBQWQsQ0FBeUIsS0FBS3ZDLGtCQUE5QixDQUFmLEVBQWtFLEtBQUtILFdBQXZFO0FBQ0FELFdBQUssQ0FBQ2MsTUFBTixDQUFhWCxVQUFVLENBQUNBLFVBQVUsQ0FBQ3JHLE1BQVgsR0FBb0IsQ0FBckIsQ0FBVixDQUFrQzZJLFVBQWxDLENBQTZDLEtBQUt0QyxpQkFBbEQsQ0FBYixFQUFtRixLQUFLSCxTQUF4RjtBQUVBaEUsZUFBUyxDQUFDMEcsZUFBVjtBQUNBMUcsZUFBUyxDQUFDMkcsUUFBVixDQUFtQjdDLEtBQW5CO0FBRUEsV0FBSzlELFNBQUwsQ0FBZTRHLFlBQWY7QUFDQTVHLGVBQVMsQ0FBQzZHLGVBQVY7QUFFQSxhQUFPLEtBQUtDLE1BQUwsRUFBUDtBQUNGOzs7K0JBQ1V0SCxNLEVBQVF1SCxLLEVBQU9DLGtCLEVBQW9CO0FBQzdDLFVBQUksQ0FBQ3hILE1BQUQsSUFBVyxDQUFDdUgsS0FBaEIsRUFBdUI7QUFBRSxlQUFPLElBQVA7QUFBYzs7QUFDdkMsVUFBSUUsUUFBUSxHQUFHRCxrQkFBa0IsSUFBSUQsS0FBSyxDQUFDWixRQUFOLEtBQW1CLENBQXpDLEdBQTZDM0csTUFBTSxDQUFDaUgsVUFBcEQsR0FBaUVqSCxNQUFNLENBQUN5SCxRQUF2RjtBQUFBLFVBQ0VDLENBQUMsR0FBR0QsUUFBUSxDQUFDckosTUFEZjtBQUFBLFVBRUVDLENBQUMsR0FBRyxDQUZOOztBQUlFLGFBQVFBLENBQUMsR0FBR3FKLENBQVosRUFBZXJKLENBQUMsRUFBaEIsRUFBb0I7QUFDbEIsWUFBSW9KLFFBQVEsQ0FBQ3BKLENBQUQsQ0FBUixLQUFnQmtKLEtBQXBCLEVBQTJCO0FBQ3pCLGlCQUFPbEosQ0FBUDtBQUNEO0FBQ0Y7QUFDSDs7O21DQUNjMEYsSyxFQUFPNEQsTSxFQUFRO0FBQzdCLFVBQUlwRixRQUFRLEdBQUcsRUFBZjtBQUFBLFVBQ01sRSxDQUFDLEdBQUcsQ0FEVjtBQUFBLFVBRU13SCxPQUZOOztBQUlBLGFBQVF4SCxDQUFDLEdBQUdzSixNQUFaLEVBQW9CdEosQ0FBQyxFQUFyQixFQUF5QjtBQUN4QndILGVBQU8sR0FBRzlGLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0IySyxhQUFoQixDQUE4QixNQUE5QixDQUFWO0FBQ0cvQixlQUFPLENBQUNsRCxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixzQkFBdEI7QUFDSGlELGVBQU8sQ0FBQ2dDLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEI5RCxLQUFLLENBQUMrRCxPQUFOLENBQWMsSUFBZCxFQUFvQixhQUFwQixDQUE5QjtBQUNBakMsZUFBTyxDQUFDZ0MsWUFBUixDQUFxQixZQUFyQixFQUFtQyxLQUFLbkYsRUFBTCxHQUFVLEdBQVYsR0FBZ0JyRSxDQUFuRCxFQUp3QixDQUtyQjs7QUFDSGtFLGdCQUFRLENBQUMrQyxJQUFULENBQWNPLE9BQWQ7QUFDQTs7QUFDRCxhQUFPdEQsUUFBUDtBQUNBOzs7K0JBQ1c7QUFDVCxVQUFNK0IsS0FBSyxHQUFHLEtBQUtBLEtBQW5CO0FBQ0EsVUFBTTlELFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNGLFVBQU11SCxLQUFLLEdBQUd6RCxLQUFLLENBQUMwRCxjQUFwQjtBQUNBLFVBQU1DLEdBQUcsR0FBRzNELEtBQUssQ0FBQzRELFlBQWxCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEtBQUs5RCxNQUF4QjtBQUNFLFVBQU1yRSxNQUFNLEdBQUcsS0FBS3VDLFFBQUwsQ0FBYyxDQUFkLEVBQWlCZ0QsVUFBaEM7QUFDQSxVQUFNNkMsVUFBVSxHQUFHcEksTUFBTSxDQUFDcUksWUFBUCxDQUFvQixZQUFwQixDQUFuQjtBQUNGLFVBQU1DLE1BQU0sR0FBR3RJLE1BQU0sQ0FBQ3VGLFVBQXRCO0FBQ0UsVUFBTWdELFdBQVcsR0FBR0QsTUFBTSxDQUFDL0MsVUFBUCxJQUFxQixDQUF6QztBQUNGLFVBQU1pRCxJQUFJLEdBQUcsS0FBSzlELGtCQUFsQjtBQUVBLFdBQUtqQyxPQUFMLENBQWF1QixLQUFiLEdBQXFCO0FBQ3BCeUUsU0FBQyxFQUFFLEtBQUtsRSxXQURZO0FBRXBCbUUsVUFBRSxFQUFFTixVQUFVLEdBQUcsSUFBSCxHQUFVcEksTUFBTSxDQUFDMkksUUFGWDtBQUdwQkMsVUFBRSxFQUFFSixJQUhnQjtBQUlwQkssVUFBRSxFQUFFUCxNQUFNLENBQUNLLFFBSlM7QUFLcEJHLFVBQUUsRUFBRSxLQUFLckMsVUFBTCxDQUFnQjZCLE1BQWhCLEVBQXdCdEksTUFBeEIsQ0FMZ0I7QUFNcEIrSSxVQUFFLEVBQUVSLFdBQVcsR0FBRyxLQUFLOUIsVUFBTCxDQUFnQjhCLFdBQWhCLEVBQTZCRCxNQUE3QixDQUFILEdBQTBDak0sU0FOckM7QUFPcEIyTSxVQUFFLEVBQUVULFdBQVcsSUFBSUEsV0FBVyxDQUFDaEQsVUFBM0IsR0FBd0MsS0FBS2tCLFVBQUwsQ0FBZ0I4QixXQUFXLENBQUNoRCxVQUE1QixFQUF3Q2dELFdBQXhDLENBQXhDLEdBQStGbE07QUFQL0UsT0FBckI7QUFTRSxhQUFPLEtBQUtvRyxPQUFMLENBQWF1QixLQUFwQjtBQUNGOzs7cUNBQ2lCO0FBQ2YsVUFBTXhELFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFVBQU15SSxhQUFhLEdBQUcsRUFBdEI7QUFDQSxVQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxVQUFNbEgsSUFBSSxHQUFHL0UsUUFBUSxDQUFDK0UsSUFBdEI7QUFFQSxVQUFJK0YsS0FBSyxHQUFHdkgsU0FBUyxDQUFDMkksVUFBdEI7QUFBQSxVQUNJbEIsR0FBRyxHQUFHekgsU0FBUyxDQUFDNEksU0FEcEI7O0FBR0EsYUFBT3JCLEtBQUssS0FBSy9GLElBQWpCLEVBQXVCO0FBQ3JCaUgscUJBQWEsQ0FBQzNELElBQWQsQ0FBbUIsS0FBS21CLFVBQUwsQ0FBZ0JzQixLQUFLLENBQUN4QyxVQUF0QixFQUFrQ3dDLEtBQWxDLENBQW5CO0FBQ0FBLGFBQUssR0FBR0EsS0FBSyxDQUFDeEMsVUFBZDtBQUNEOztBQUNELGFBQU8wQyxHQUFHLEtBQUtqRyxJQUFmLEVBQXFCO0FBQ25Ca0gsbUJBQVcsQ0FBQzVELElBQVosQ0FBaUIsS0FBS21CLFVBQUwsQ0FBZ0J3QixHQUFHLENBQUMxQyxVQUFwQixFQUFnQzBDLEdBQWhDLENBQWpCO0FBQ0FBLFdBQUcsR0FBR0EsR0FBRyxDQUFDMUMsVUFBVjtBQUNEOztBQUVELFdBQUs5QyxPQUFMLENBQWF1QixLQUFiLEdBQXFCO0FBQ25CcUYsU0FBQyxFQUFFO0FBQ0RaLFdBQUMsRUFBRSxLQUFLbEUsV0FEUDtBQUVEK0UsV0FBQyxFQUFFTDtBQUZGLFNBRGdCO0FBS25COUssU0FBQyxFQUFFO0FBQ0RzSyxXQUFDLEVBQUUsS0FBS2pFLFNBRFA7QUFFRDhFLFdBQUMsRUFBRUo7QUFGRjtBQUxnQixPQUFyQjtBQVVBLGFBQU8sS0FBS3pHLE9BQUwsQ0FBYXVCLEtBQXBCO0FBQ0Q7Ozs7OztxQkEzUGtCTCxLOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7QUFDQTs7Ozs7O0FBRUEsSUFBSW5JLGlCQUFKLENBQWU7QUFDZE0sUUFBTSxFQUFFO0FBQ0xDLE9BQUcsRUFBRTtBQUNILHNDQUFnQyxRQUQ3QjtBQUVILDJCQUFxQjtBQUZsQjtBQURBLEdBRE07QUFRYm9GLFNBQU8sRUFBRSxJQVJJO0FBU2JvSSxVQUFRLEVBQUUsS0FURztBQVViQyxRQUFNLEVBQUUsQ0FWSztBQVliMU0sVUFaYSxzQkFZRjtBQUFBOztBQUNULFNBQUt1RSxNQUFMLEdBQWNqRSxJQUFkLENBQW1CO0FBQUEsYUFBTSxLQUFJLENBQUNrSyxNQUFMLEVBQU47QUFBQSxLQUFuQjtBQUNELEdBZFk7QUFnQmJqRyxRQWhCYSxvQkFnQko7QUFBQTs7QUFDUCxXQUFPNUYsbUJBQU8wQixHQUFQLENBQVcsVUFBWCxFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQUMsUUFBUSxFQUFJO0FBQzdDLFlBQUksQ0FBQ3NDLE1BQUwsR0FBY3RDLFFBQVEsQ0FBQ3FCLElBQVQsQ0FBYzRDLFVBQWQsS0FBNkIsT0FBM0M7QUFDQSxZQUFJLENBQUNoQyxPQUFMLEdBQWVqQyxRQUFRLENBQUNpQyxPQUF4QjtBQUNELEtBSE0sQ0FBUDtBQUlELEdBckJZO0FBc0JiZ0ksUUF0QmEsb0JBc0JKO0FBQ1AsUUFBTW1DLEtBQUssR0FBRyxLQUFLQyxFQUFMLEdBQVUzSixNQUFNLENBQUM5QyxRQUFQLENBQWdCMkssYUFBaEIsQ0FBOEIsU0FBOUIsQ0FBeEI7QUFDQSxRQUFNK0IsYUFBYSxHQUFHLGlDQUF0QjtBQUNBLFFBQUlDLE9BQUosRUFBYUMsUUFBYjs7QUFDQSxTQUFLLElBQUlDLENBQVQsSUFBYyxLQUFLeEssT0FBbkIsRUFBNEI7QUFDMUJzSyxhQUFPLEdBQUcsS0FBS3RLLE9BQUwsQ0FBYXdLLENBQWIsRUFBZ0IvRixLQUFoQixDQUFzQmdHLEtBQXRCLENBQTRCSixhQUE1QixDQUFWOztBQUNBLFVBQUlDLE9BQUosRUFBYTtBQUNYQyxnQkFBUSxHQUFHOUosTUFBTSxDQUFDOUMsUUFBUCxDQUFnQjJLLGFBQWhCLENBQThCLGNBQTlCLENBQVg7QUFDQTZCLGFBQUssQ0FBQ08sV0FBTixDQUFrQkgsUUFBbEI7QUFDQUEsZ0JBQVEsQ0FBQzlGLEtBQVQsQ0FBZWtHLFVBQWYsR0FBNEJMLE9BQU8sQ0FBQ00sR0FBUixFQUE1QjtBQUNBTCxnQkFBUSxDQUFDbkgsRUFBVCxHQUFjLG1CQUFtQm9ILENBQWpDO0FBQ0Q7QUFDRjtBQUNGLEdBbkNZO0FBb0NiakgsUUFwQ2Esb0JBb0NKO0FBQ1AsUUFBSSxLQUFLMEcsUUFBVCxFQUFtQjtBQUNqQnhKLFlBQU0sQ0FBQzlDLFFBQVAsQ0FBZ0IrRSxJQUFoQixDQUFxQm1JLFdBQXJCLENBQWlDLEtBQUtULEVBQXRDO0FBQ0EsV0FBS0EsRUFBTCxDQUFReEgsbUJBQVIsQ0FBNEIsV0FBNUIsRUFBeUMsS0FBS2YsT0FBOUMsRUFBdUQsS0FBdkQ7QUFDQSxXQUFLb0ksUUFBTCxHQUFnQixLQUFoQjtBQUNEO0FBQ0YsR0ExQ1k7QUEyQ2JhLE1BM0NhLGtCQTJDTjtBQUNMLFFBQU1YLEtBQUssR0FBRyxLQUFLQyxFQUFuQjtBQUNBLFFBQU0zRixLQUFLLEdBQUcwRixLQUFLLENBQUMxRixLQUFwQjtBQUNBLFFBQUlzRyxXQUFKOztBQUVBLFFBQUksQ0FBQyxLQUFLZCxRQUFWLEVBQW9CO0FBQ2xCeEosWUFBTSxDQUFDOUMsUUFBUCxDQUFnQitFLElBQWhCLENBQXFCZ0ksV0FBckIsQ0FBaUNQLEtBQWpDO0FBQ0EsVUFBTXRJLE9BQU8sR0FBRyxLQUFLQSxPQUFMLEdBQWUsS0FBS21KLFdBQUwsQ0FBaUJ2SSxJQUFqQixDQUFzQixJQUF0QixDQUEvQjtBQUNBMEgsV0FBSyxDQUFDeEgsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0NkLE9BQXBDLEVBQTZDLEtBQTdDO0FBQ0EsV0FBS29JLFFBQUwsR0FBZ0IsSUFBaEI7QUFFQSxVQUFNZ0IsaUJBQWlCLEdBQUd4SyxNQUFNLENBQUNVLFlBQVAsR0FBc0IrSixVQUF0QixDQUFpQyxDQUFqQyxFQUFvQ0MscUJBQXBDLEVBQTFCO0FBRUExRyxXQUFLLENBQUMyRyxHQUFOLEdBQVlILGlCQUFpQixDQUFDRyxHQUFsQixHQUF3QkgsaUJBQWlCLENBQUNmLE1BQTFDLEdBQW1EekosTUFBTSxDQUFDNEssT0FBMUQsR0FBb0UsSUFBaEY7QUFDQTVHLFdBQUssQ0FBQzZHLElBQU4sR0FBYUwsaUJBQWlCLENBQUNLLElBQWxCLEdBQXlCN0ssTUFBTSxDQUFDOEssT0FBaEMsR0FBMEMsSUFBdkQ7QUFFQVIsaUJBQVcsR0FBR1osS0FBSyxDQUFDcUIsWUFBcEI7QUFFQS9HLFdBQUssQ0FBQzJHLEdBQU4sR0FBWUssUUFBUSxDQUFDaEgsS0FBSyxDQUFDMkcsR0FBUCxDQUFSLEdBQXNCTCxXQUF0QixHQUFvQyxJQUFoRDtBQUNELEtBZEQsTUFlSyxJQUFJLENBQUNBLFdBQVcsR0FBR1osS0FBSyxDQUFDcUIsWUFBckIsTUFBdUMsS0FBS3RCLE1BQWhELEVBQXdEO0FBQzNEekYsV0FBSyxDQUFDMkcsR0FBTixHQUFZSyxRQUFRLENBQUNoSCxLQUFLLENBQUMyRyxHQUFQLENBQVIsR0FBc0JMLFdBQXRCLEdBQW9DLEtBQUtiLE1BQXpDLEdBQWtELElBQTlEO0FBQ0Q7O0FBQ0QsU0FBS0EsTUFBTCxHQUFjYSxXQUFkO0FBQ0QsR0FuRVk7QUFvRWI1SSxtQkFwRWEsNkJBb0VLQyxRQXBFTCxFQW9FZTtBQUMxQixRQUFJLEtBQUsvQixNQUFULEVBQWlCO0FBQ2YsVUFBSSxDQUFDK0IsUUFBTCxFQUFlLEtBQUttQixNQUFMLEdBQWYsS0FDSyxLQUFLdUgsSUFBTDtBQUNOLEtBSEQsTUFJSyxJQUFJLEtBQUtiLFFBQVQsRUFBbUI7QUFDdEIsV0FBSzFHLE1BQUw7QUFDRDtBQUNGLEdBNUVZO0FBNkVieUgsYUE3RWEsdUJBNkVEbk0sQ0E3RUMsRUE2RUU7QUFDYkEsS0FBQyxDQUFDNk0sY0FBRjtBQUNBN00sS0FBQyxDQUFDOEgsZUFBRjtBQUNBLFFBQU15RCxFQUFFLEdBQUd2TCxDQUFDLENBQUNxRixNQUFiOztBQUNBLFFBQUlrRyxFQUFFLENBQUNmLFFBQUgsS0FBZ0IsY0FBcEIsRUFBb0M7QUFDbEMsV0FBS3BJLElBQUwsQ0FBVSxzQkFBVixFQUFrQ21KLEVBQUUsQ0FBQ2hILEVBQUgsQ0FBTXVJLEtBQU4sQ0FBWSxJQUFaLEVBQWtCZixHQUFsQixFQUFsQztBQUNEO0FBQ0Y7QUFwRlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUkzTyxjQUFKLENBQVk7QUFDWE8sUUFBTSxFQUFFO0FBQ1BDLE9BQUcsRUFBRTtBQUNKLHFCQUFlLFVBRFg7QUFFSiw0QkFBc0IsYUFGbEI7QUFHRCx3QkFBa0IsVUFIakI7QUFJRCw4QkFBd0IsYUFKdkI7QUFLRCx1QkFBaUIsYUFMaEI7QUFNRCx3QkFBa0IsVUFOakI7QUFPRCxtQ0FBNkIsdUJBUDVCO0FBUUQsZUFBUyxhQVJSO0FBU0QsZ0JBQVUsZ0JBVFQ7QUFVRCxlQUFTLFFBVlI7QUFXRCxlQUFTLGFBWFI7QUFZRCxlQUFTLFNBWlI7QUFhRCxlQUFTLE1BYlI7QUFjRCxzQkFBZ0IsVUFkZjtBQWVELHNCQUFnQixVQWZmO0FBZ0JKLDRCQUFzQixVQWhCbEI7QUFpQkosMEJBQW9CLFVBakJoQjtBQWtCRCwyQkFBcUIsVUFsQnBCO0FBbUJKLDJCQUFxQixhQW5CakI7QUFvQkQsa0NBQTRCLFFBcEIzQjtBQXFCRCwwQkFBb0IsYUFyQm5CO0FBc0JELGlDQUEyQixnQkF0QjFCO0FBdUJELHNCQUFnQixTQXZCZjtBQXdCRCx1QkFBaUIsT0F4QmhCO0FBeUJELDhCQUF3QixNQXpCdkI7QUEwQkQsbUNBQTZCLFFBMUI1QjtBQTJCRCxzQkFBZ0IsTUEzQmY7QUE0QkQsc0JBQWdCLE1BNUJmO0FBNkJELHNCQUFnQixNQTdCZjtBQThCRCwyQkFBcUIsVUE5QnBCO0FBK0JELG9DQUE4QixrQkEvQjdCO0FBZ0NELDRCQUFzQixrQkFoQ3JCO0FBaUNELHNCQUFnQixVQWpDZjtBQWtDRCxvQkFBYztBQWxDYjtBQURFLEdBREc7QUF1Q1h5RSxXQUFTLEVBQUUsSUF2Q0E7QUF3Q1gwSyxNQUFJLEVBQUUsRUF4Q0s7QUF5Q1hDLFFBQU0sRUFBRSxFQXpDRztBQTBDWEMsc0JBQW9CLEVBQUUsRUExQ1g7QUEyQ1hDLHdCQUFzQixFQUFFLEVBM0NiO0FBNENWMUssVUFBUSxFQUFFLElBNUNBO0FBNkNWMkssaUJBQWUsRUFBRSxJQTdDUDtBQThDWGxILFNBQU8sRUFBRSxDQTlDRTtBQStDWG1ILGVBQWEsRUFBRSxDQUFDLENBL0NMO0FBaURWQyxVQWpEVSxvQkFpRERqUCxPQWpEQyxFQWlEUTtBQUNoQixRQUFNa1AsQ0FBQyxHQUFHbFAsT0FBTyxDQUFDNkIsTUFBbEI7QUFDQSxRQUFNNUIsTUFBTSxHQUFHZixtQkFBT2UsTUFBdEI7QUFDQSxRQUFNa1AsR0FBRyxHQUFHLEVBQVo7O0FBRUEsU0FBSyxJQUFJck4sQ0FBQyxHQUFHLENBQVIsRUFBV1YsS0FBaEIsRUFBdUJVLENBQUMsR0FBR29OLENBQTNCLEVBQThCcE4sQ0FBQyxFQUEvQixFQUFtQztBQUVqQ1YsV0FBSyxHQUFHcEIsT0FBTyxDQUFDOEIsQ0FBRCxDQUFmOztBQUVBLFVBQUksQ0FBQzdCLE1BQUQsSUFBV21CLEtBQUssQ0FBQ3lHLE9BQXJCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0EsT0FBTCxHQUFlekcsS0FBSyxDQUFDeUcsT0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJdUgsS0FBSyxHQUFHLENBQUNoTyxLQUFLLENBQUNnTyxLQUFOLElBQWUsRUFBaEIsRUFBb0JDLE1BQXBCLENBQTJCak8sS0FBSyxDQUFDa08sSUFBTixJQUFjLEVBQXpDLENBQVo7QUFBQSxZQUNJMUgsQ0FBQyxHQUFHd0gsS0FBSyxDQUFDdk4sTUFEZDs7QUFHQSxZQUFJK0YsQ0FBSixFQUFPO0FBQ0wsaUJBQU9BLENBQUMsRUFBUixFQUFZO0FBQ1Z1SCxlQUFHLENBQUNwRyxJQUFKLENBQVNxRyxLQUFLLENBQUN4SCxDQUFELENBQUwsQ0FBU3pCLEVBQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0QsU0FBSzBCLE9BQUwsR0FBZTBILElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQk4sR0FBckIsQ0FBZjtBQUNELEdBeEVTO0FBeUVYckosTUF6RVcsZ0JBeUVOYixHQXpFTSxFQXlFRG9GLElBekVDLEVBeUVLaEssS0F6RUwsRUF5RVk7QUFDdEIsU0FBS3VPLE1BQUwsQ0FBWS9NLE1BQVosR0FBcUIsQ0FBckI7QUFFRSxRQUFNaUUsSUFBSSxHQUFHLElBQUlzQixxQkFBSixDQUFVLElBQVYsRUFBZ0JuQyxHQUFoQixFQUFxQm9GLElBQXJCLEVBQTJCaEssS0FBM0IsRUFBa0MwSyxNQUFsQyxFQUFiO0FBRUEsUUFBSVYsSUFBSSxDQUFDcUYsUUFBVCxFQUFtQixLQUFLMUwsSUFBTCxDQUFVLFVBQVYsRUFBc0I4QixJQUF0QixFQUE0QnVFLElBQUksQ0FBQ3FGLFFBQWpDO0FBRXJCLFdBQU81SixJQUFQO0FBQ0EsR0FqRlU7QUFrRlg2SixNQWxGVyxnQkFrRk5DLFVBbEZNLEVBa0ZNO0FBQ2QsUUFBSTFRLG1CQUFPZSxNQUFYLEVBQW1CO0FBRXJCLFFBQUkwTyxJQUFJLEdBQUcsS0FBS0EsSUFBaEI7O0FBRUEsUUFBSUEsSUFBSSxDQUFDOU0sTUFBVCxFQUFpQjtBQUNiLFVBQU1pRSxJQUFJLEdBQUcsS0FBSzZJLElBQUwsQ0FBVWhCLEdBQVYsRUFBYjtBQUNBLFVBQU14SCxFQUFFLEdBQUdMLElBQUksQ0FBQ0ssRUFBaEI7QUFFQSxXQUFLeUksTUFBTCxDQUFZN0YsSUFBWixDQUFpQmpELElBQUksQ0FBQzZKLElBQUwsRUFBakI7QUFFQSxVQUFJLEtBQUt2TCxRQUFULEVBQW1CLEtBQUt5TCxZQUFMO0FBRW5CLFdBQUs3TCxJQUFMLENBQVUsY0FBVixFQUEwQm1DLEVBQTFCO0FBQ0Q7O0FBRUR5SixjQUFVLElBQUksS0FBS2hOLFFBQUwsRUFBZDtBQUNGLEdBbkdVO0FBb0dYa04sTUFwR1csZ0JBb0dORixVQXBHTSxFQW9HTTtBQUNkLFFBQUkxUSxtQkFBT2UsTUFBWCxFQUFtQjtBQUVuQixRQUFJMk8sTUFBTSxHQUFHLEtBQUtBLE1BQWxCOztBQUVGLFFBQUlBLE1BQU0sQ0FBQy9NLE1BQVgsRUFBbUI7QUFDZixVQUFNaUUsSUFBSSxHQUFHLEtBQUs4SSxNQUFMLENBQVlqQixHQUFaLEVBQWI7QUFFQSxXQUFLZ0IsSUFBTCxDQUFVNUYsSUFBVixDQUFlakQsSUFBSSxDQUFDZ0ssSUFBTCxFQUFmO0FBRUEsV0FBSzlMLElBQUwsQ0FBVSxlQUFWLEVBQTJCLENBQUM4QixJQUFELENBQTNCO0FBQ0Q7O0FBRUQ4SixjQUFVLElBQUksS0FBS2hOLFFBQUwsRUFBZDtBQUNGLEdBbEhVO0FBbUhWbU4sUUFuSFUsa0JBbUhIak8sQ0FuSEcsRUFtSEE7QUFDUixRQUFJK0MsTUFBTSxHQUFHLElBQWI7QUFBQSxRQUNJOEosSUFBSSxHQUFHLEtBQUtBLElBRGhCO0FBQUEsUUFFSU8sQ0FBQyxHQUFHUCxJQUFJLENBQUM5TSxNQUZiO0FBQUEsUUFHSW1PLFdBQVcsR0FBRyxDQUFDbE8sQ0FBRCxDQUhsQjtBQUFBLFFBSUltTyxPQUFPLEdBQUcsQ0FBQ25PLENBQUQsQ0FKZDtBQUFBLFFBS0lnRSxJQUxKO0FBQUEsUUFLVW9LLFVBTFY7O0FBT0EsYUFBU0MsMEJBQVQsQ0FBb0NDLENBQXBDLEVBQXVDO0FBQ3JDLFdBQUssSUFBSUMsQ0FBQyxHQUFHRCxDQUFDLEdBQUcsQ0FBakIsRUFBb0JDLENBQUMsR0FBR25CLENBQXhCLEVBQTJCbUIsQ0FBQyxFQUE1QixFQUFnQztBQUM5QnZLLFlBQUksR0FBRzZJLElBQUksQ0FBQzBCLENBQUQsQ0FBWDs7QUFFQSxZQUFJeEwsTUFBTSxDQUFDeUwsY0FBUCxDQUFzQjNCLElBQUksQ0FBQ3lCLENBQUQsQ0FBMUIsRUFBK0J0SyxJQUEvQixDQUFKLEVBQTBDO0FBQ3hDLGNBQUksQ0FBQ2tLLFdBQVcsQ0FBQ08sUUFBWixDQUFxQkYsQ0FBckIsQ0FBTCxFQUE4QkwsV0FBVyxDQUFDakgsSUFBWixDQUFpQnNILENBQWpCO0FBQzlCSixpQkFBTyxDQUFDbEgsSUFBUixDQUFhc0gsQ0FBYjtBQUNEO0FBQ0Y7O0FBQ0RKLGFBQU8sQ0FBQ08sSUFBUjtBQUNBUixpQkFBVyxDQUFDUSxJQUFaO0FBQ0Q7O0FBQ0QsV0FBT1AsT0FBTyxDQUFDcE8sTUFBZixFQUF1QjtBQUNyQnNPLGdDQUEwQixDQUFDRixPQUFPLENBQUNRLEtBQVIsRUFBRCxDQUExQjtBQUNEOztBQUNEUCxjQUFVLEdBQUdYLElBQUksQ0FBQ21CLEdBQUwsQ0FBU2pCLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTyxXQUFyQixDQUFiOztBQUVBLFdBQU9BLFdBQVcsQ0FBQ25PLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQUs4TSxJQUFMLENBQVVnQyxNQUFWLENBQWlCWCxXQUFXLENBQUNyQyxHQUFaLEVBQWpCLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDZ0MsSUFBMUM7QUFDQSxXQUFLZixNQUFMLENBQVlqQixHQUFaO0FBQ0Q7O0FBRUQsV0FBT3VDLFVBQVA7QUFDRCxHQWxKUztBQW1KVjVKLFFBbkpVLGtCQW1KSEgsRUFuSkcsRUFtSkM7QUFDVCxRQUFJakgsbUJBQU9lLE1BQVgsRUFBbUI7QUFFbkJrRyxNQUFFLEdBQUdBLEVBQUUsR0FBR0EsRUFBSCxHQUFRakgsbUJBQU9pQixJQUFQLEdBQWNqQixtQkFBT2lCLElBQXJCLEdBQTRCLEVBQTNDO0FBRUEsUUFBSSxDQUFDZ0csRUFBTCxFQUFTLE9BQU8sS0FBS3dKLElBQUwsRUFBUDtBQUVULFFBQUk3SixJQUFJLEdBQUcsS0FBSzhLLE9BQUwsQ0FBYXpLLEVBQUUsQ0FBQ3VJLEtBQUgsQ0FBUyxHQUFULEVBQWMsQ0FBZCxDQUFiLENBQVg7QUFBQSxRQUNJQyxJQUFJLEdBQUcsS0FBS0EsSUFEaEI7QUFBQSxRQUVJTyxDQUFDLEdBQUdQLElBQUksQ0FBQzlNLE1BRmI7QUFBQSxRQUdJZ1AsUUFBUSxHQUFHbEMsSUFBSSxDQUFDbUMsT0FBTCxDQUFhaEwsSUFBYixDQUhmO0FBQUEsUUFJSW9LLFVBSko7QUFBQSxRQUlnQnBPLENBSmhCOztBQU1BLFFBQUkrTyxRQUFRLEtBQUszQixDQUFDLEdBQUcsQ0FBckIsRUFBd0I7QUFDdEIsV0FBS1MsSUFBTDtBQUNBLFdBQUtmLE1BQUwsQ0FBWWpCLEdBQVo7QUFDRCxLQUhELE1BS0s7QUFDSCxVQUFJLENBQUMsS0FBS2lCLE1BQUwsQ0FBWS9NLE1BQWpCLEVBQXlCO0FBQ3ZCcU8sa0JBQVUsR0FBRyxLQUFLSCxNQUFMLENBQVljLFFBQVosQ0FBYjtBQUVBLGFBQUtsQyxJQUFMLENBQVVvQyxPQUFWLENBQWtCLFVBQVNqTCxJQUFULEVBQWU7QUFDL0IsY0FBSUEsSUFBSSxDQUFDSyxFQUFMLEdBQVUrSixVQUFkLEVBQTBCcEssSUFBSSxDQUFDckYsTUFBTDtBQUMzQixTQUZEO0FBSUEsYUFBS21DLFFBQUw7QUFDRCxPQVJELE1BUU87QUFDTGQsU0FBQyxHQUFHLEtBQUs4TSxNQUFMLENBQVkvTSxNQUFoQjs7QUFFQSxlQUFPLEtBQUsrTSxNQUFMLENBQVkvTSxNQUFuQjtBQUEyQixlQUFLaU8sSUFBTCxDQUFVLElBQVY7QUFBM0I7O0FBRUFJLGtCQUFVLEdBQUcsS0FBS0gsTUFBTCxDQUFZYyxRQUFaLENBQWI7QUFFQSxhQUFLbEMsSUFBTCxDQUFVb0MsT0FBVixDQUFrQixVQUFTakwsSUFBVCxFQUFlO0FBQy9CLGNBQUlBLElBQUksQ0FBQ0ssRUFBTCxHQUFVK0osVUFBZCxFQUEwQnBLLElBQUksQ0FBQ3JGLE1BQUw7QUFDM0IsU0FGRDs7QUFJQSxlQUFPcUIsQ0FBQyxFQUFSO0FBQVksZUFBSzZOLElBQUwsQ0FBVSxJQUFWO0FBQVo7O0FBRUEsYUFBSy9NLFFBQUw7QUFDRDtBQUNGOztBQUNELFNBQUtvQixJQUFMLENBQVUsY0FBVixFQUEwQm1DLEVBQUUsQ0FBQyxDQUFELENBQTVCO0FBQ0QsR0EvTFM7QUFnTVYxRixRQWhNVSxrQkFnTUh1USxHQWhNRyxFQWdNRUMsT0FoTUYsRUFnTVc7QUFDbkIxTSxTQUFLLENBQUMyTSxJQUFOLENBQVd4USxRQUFRLENBQUN5USxzQkFBVCxDQUFnQyxzQkFBaEMsQ0FBWCxFQUNHSixPQURILENBQ1csVUFBQUssU0FBUyxFQUFJO0FBQ3BCLFVBQU05RyxTQUFTLEdBQUc4RyxTQUFTLENBQUNwSSxVQUE1QjtBQUNBc0IsZUFBUyxDQUFDQyxZQUFWLENBQXVCN0osUUFBUSxDQUFDMlEsY0FBVCxDQUF3QkQsU0FBUyxDQUFDRSxXQUFsQyxDQUF2QixFQUF1RUYsU0FBdkU7QUFDQTlHLGVBQVMsQ0FBQ3JCLFNBQVY7QUFDRCxLQUxIO0FBT0EsU0FBSzBGLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixFQUE1QjtBQUNBLFNBQUtDLHNCQUFMLEdBQThCLEVBQTlCO0FBQ0EsU0FBSzFLLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLMkssZUFBTCxHQUF1QixJQUF2QjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUVBLFFBQU01TixLQUFLLEdBQUcsQ0FBQzRQLEdBQUQsSUFBUTlSLG1CQUFPVyxJQUFmLElBQXVCWCxtQkFBT2MsT0FBUCxDQUFlZCxtQkFBT1csSUFBdEIsQ0FBdkIsR0FBcURYLG1CQUFPYyxPQUFQLENBQWVkLG1CQUFPVyxJQUF0QixDQUFyRCxHQUFtRixJQUFqRztBQUVBLFFBQUksQ0FBQ29SLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNNLE1BQXpCLEVBQWlDLEtBQUt2TixJQUFMLENBQVUsaUJBQVYsRUFBNkI1QyxLQUE3QjtBQUNsQyxHQW5OUztBQW9OVmYsT0FwTlUsaUJBb05KbVIsU0FwTkksRUFvTk87QUFDZixTQUFLakssT0FBTCxHQUFlaUssU0FBZjtBQUNBdFMsdUJBQU9vQixZQUFQLEdBQXNCLElBQXRCO0FBQ0FwQix1QkFBT21CLEtBQVAsR0FBZW1SLFNBQWY7QUFDQSxTQUFLL1EsTUFBTDtBQUNELEdBek5TO0FBME5WZ1IsTUExTlUsa0JBME5IO0FBQUE7O0FBQ0wsUUFBTTdSLE1BQU0sR0FBR1YsbUJBQU9VLE1BQXRCO0FBQ0EsUUFBTUssTUFBTSxHQUFHZixtQkFBT2UsTUFBdEI7O0FBRUFmLHVCQUFPMEIsR0FBUCxDQUFXLFFBQVgsRUFBcUJDLElBQXJCLENBQTBCLFVBQUFJLE1BQU0sRUFBSTtBQUNsQyxVQUFJL0IsbUJBQU9hLEtBQVAsSUFBZ0JFLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUksQ0FBQ0EsTUFBRCxJQUFXZ0IsTUFBTSxLQUFLLFFBQTFCLEVBQW9DO0FBQ2xDLGVBQUksQ0FBQ3lRLE9BQUwsQ0FBYSxhQUFiLEVBQTRCN1EsSUFBNUIsQ0FBaUMsVUFBQThRLE9BQU8sRUFBSTtBQUMxQyxnQkFBSUEsT0FBSixFQUFhO0FBQ1gsa0JBQU1DLEdBQUcsR0FBR2hTLE1BQU0sR0FBR29DLE9BQU8sQ0FBQzZQLElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQkFBeEIsQ0FBSCxHQUFrRCxFQUFwRTtBQUVBNVMsaUNBQU9XLElBQVAsR0FBYzJELE1BQU0sQ0FBQ3VPLE1BQVAsQ0FBYy9QLE9BQU8sQ0FBQzZQLElBQVIsQ0FBYUMsVUFBYixDQUF3QixZQUF4QixFQUFzQ0YsR0FBdEMsQ0FBZCxDQUFkO0FBQ0Esa0JBQUkxUyxtQkFBT1csSUFBWCxFQUFpQixLQUFJLENBQUNtRSxJQUFMLENBQVUsYUFBVixFQUF5QixLQUFJLENBQUNnTyxhQUFMLEVBQXpCO0FBQ2xCO0FBQ0YsV0FQRDtBQVFELFNBVEQsTUFTTztBQUNMLGNBQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUNBLGNBQUlyUyxNQUFKLEVBQVlxUyxTQUFTLEdBQUd6TyxNQUFNLENBQUMwTyxPQUFQLENBQWVsUSxPQUFPLENBQUM2UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUJBQXhCLENBQWYsQ0FBWjs7QUFDWixjQUFJRyxTQUFKLEVBQWU7QUFDYixpQkFBSSxDQUFDak8sSUFBTCxDQUFVLGFBQVYsRUFBeUIsS0FBSSxDQUFDZ08sYUFBTCxFQUF6QjtBQUNEO0FBQ0Y7QUFDRixPQWpCRCxNQWlCTztBQUNMLGFBQUksQ0FBQ2hPLElBQUwsQ0FBVSxlQUFWLEVBQTJCLEtBQUksQ0FBQ2dPLGFBQUwsRUFBM0I7QUFDRDtBQUNGLEtBckJEO0FBc0JGLEdBcFBVO0FBcVBWcFAsVUFyUFUsc0JBcVBDO0FBQUE7O0FBQ1QxRCx1QkFBTzBCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBK0IsUUFBUSxFQUFJO0FBQ3RDLFVBQUlBLFFBQUosRUFBYyxNQUFJLENBQUM2TyxJQUFMLEdBQWQsS0FDSyxNQUFJLENBQUN6TixJQUFMLENBQVUsaUJBQVY7QUFDTixLQUhEO0FBSUQsR0ExUFM7QUEyUFZtTyxNQTNQVSxrQkEyUEg7QUFDTCxRQUFNck0sSUFBSSxHQUFHLEtBQUtzTSxRQUFMLEVBQWI7QUFDQSxRQUFJLENBQUN0TSxJQUFMLEVBQVcsT0FBTyxLQUFQO0FBQ1gsUUFBTWlDLEtBQUssR0FBR2pDLElBQUksQ0FBQ2lDLEtBQW5CO0FBQ0EsUUFBTTlELFNBQVMsR0FBRzZCLElBQUksQ0FBQzdCLFNBQUwsQ0FBZXdHLElBQWpDO0FBQ0EsUUFBTXpFLFFBQVEsR0FBR0YsSUFBSSxDQUFDRSxRQUF0QjtBQUVBK0IsU0FBSyxDQUFDYSxRQUFOLENBQWU1QyxRQUFRLENBQUMsQ0FBRCxDQUF2QixFQUE0QixDQUE1QjtBQUNBK0IsU0FBSyxDQUFDYyxNQUFOLENBQWE3QyxRQUFRLENBQUNBLFFBQVEsQ0FBQ25FLE1BQVQsR0FBa0IsQ0FBbkIsQ0FBckIsRUFBNEMsQ0FBNUM7QUFDQW9DLGFBQVMsQ0FBQzJHLFFBQVYsQ0FBbUI3QyxLQUFuQjtBQUNGc0ssYUFBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QnRPLFNBQVMsQ0FBQzJCLFFBQVYsR0FBcUI0TSxJQUFyQixHQUE0QmpILE9BQTVCLENBQW9DLGFBQXBDLEVBQW1ELE1BQW5ELENBQTlCO0FBQ0V0SCxhQUFTLENBQUM2RyxlQUFWO0FBQ0QsR0F2UVM7QUF3UVYySCxPQXhRVSxpQkF3UUozTSxJQXhRSSxFQXdRRTJMLElBeFFGLEVBd1FRaUIsS0F4UVIsRUF3UWU7QUFDekIsU0FBSy9ELElBQUwsQ0FBVTVGLElBQVYsQ0FBZWpELElBQWY7QUFDRSxRQUFJMkwsSUFBSSxLQUFLLEtBQWIsRUFBb0IsS0FBSzdPLFFBQUw7QUFDdEIsUUFBSThQLEtBQUosRUFBVyxLQUFLQyxrQkFBTDtBQUNYLEdBNVFVO0FBNlFWQyxVQTdRVSxvQkE2UUQ5TSxJQTdRQyxFQTZRSztBQUNiLFNBQUs3QixTQUFMLEdBQWlCLElBQUk0TyxzQkFBSixFQUFqQjtBQUNBLFNBQUtKLEtBQUwsQ0FBVyxLQUFLM00sSUFBTCxDQUFVQSxJQUFJLENBQUNiLEdBQWYsRUFBb0JhLElBQXBCLENBQVgsRUFBc0MsS0FBdEMsRUFBNkMsS0FBN0M7QUFDRCxHQWhSUztBQWlSVmdOLHVCQWpSVSxtQ0FpUmM7QUFDdEIsUUFBSSxDQUFDLEtBQUtuRSxJQUFMLENBQVU5TSxNQUFmLEVBQXVCLE9BQU8sSUFBUDtBQUV2QixTQUFLbUMsSUFBTCxDQUFVLGVBQVYsRUFBMkIsS0FBSzJLLElBQWhDOztBQUVBLFFBQUl6UCxtQkFBT2UsTUFBWCxFQUFtQjtBQUNqQixVQUFNNkYsSUFBSSxHQUFHLEtBQUs2SSxJQUFMLENBQVUsS0FBS0EsSUFBTCxDQUFVOU0sTUFBVixHQUFtQixDQUE3QixDQUFiOztBQUNBLFVBQUkzQyxtQkFBT1csSUFBUCxLQUFnQmlHLElBQUksQ0FBQ0ksT0FBTCxDQUFhd0IsSUFBYixDQUFrQjhLLElBQWxCLEdBQXlCTyxTQUF6QixDQUFtQyxDQUFuQyxFQUFzQ0MsNEJBQWlCQyxvQkFBakIsR0FBd0MsQ0FBOUUsQ0FBcEIsRUFBc0c7QUFDcEcsYUFBS0MsUUFBTCxDQUFjcE4sSUFBZDtBQUNEO0FBQ0YsS0FMRCxNQUtPO0FBQ0wsV0FBS3FOLFFBQUw7QUFDQSxXQUFLQyxnQkFBTDtBQUNEOztBQUNELFNBQUtULGtCQUFMOztBQUVBLFFBQUl6VCxtQkFBT29CLFlBQVgsRUFBeUI7QUFDdkJwQix5QkFBT29CLFlBQVAsR0FBc0IsS0FBdEI7QUFDQSxXQUFLbVIsSUFBTDtBQUNEO0FBQ0YsR0FyU1M7QUFzU1Y0QixTQXRTVSxtQkFzU0ZsTixFQXRTRSxFQXNTRTtBQUNWLFNBQUtuQyxJQUFMLENBQVUsVUFBVixFQUFzQixLQUFLb08sUUFBTCxDQUFjak0sRUFBZCxDQUF0QjtBQUNELEdBeFNTO0FBeVNWbU4sVUF6U1Usb0JBeVNEbk4sRUF6U0MsRUF5U0c7QUFDWCxRQUFJLENBQUNqSCxtQkFBT2UsTUFBWixFQUFvQixPQUFPLEtBQUsyQyxRQUFMLEVBQVA7QUFFcEIsUUFBTWtELElBQUksR0FBRyxLQUFLOEssT0FBTCxDQUFhekssRUFBYixFQUFpQkQsT0FBOUI7QUFDQSxRQUFNM0UsTUFBTSxHQUFHLE9BQU91RSxJQUFJLENBQUN2RSxNQUFaLEtBQXVCLFNBQXZCLEdBQW1DdUUsSUFBSSxDQUFDdkUsTUFBeEMsR0FBaURyQyxtQkFBT3FVLFlBQVAsS0FBd0IsTUFBeEY7QUFFQSxRQUFNblMsS0FBSyxHQUFHO0FBQ1pnTyxXQUFLLEVBQUUsQ0FBQ3RKLElBQUQsQ0FESztBQUVaakcsVUFBSSxFQUFFaUcsSUFBSSxDQUFDNEIsSUFBTCxDQUFVOEssSUFBVixHQUFpQk8sU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEJDLDRCQUFpQkMsb0JBQWpCLEdBQXdDLENBQXRFLENBRk07QUFHWjFSLFlBQU0sRUFBTkE7QUFIWSxLQUFkO0FBS0EsU0FBS3lDLElBQUwsQ0FBVSxlQUFWLEVBQTJCNUMsS0FBM0I7QUFDRCxHQXJUUztBQXNUVjhSLFVBdFRVLG9CQXNURHBOLElBdFRDLEVBc1RLO0FBQ2IsUUFBTTBOLFlBQVksR0FBRyxLQUFLM0Usb0JBQTFCO0FBQ0EsUUFBSTFCLEVBQUosRUFBUXNHLEdBQVIsRUFBYXROLEVBQWI7O0FBQ0EsUUFBSUwsSUFBSSxJQUFJQSxJQUFJLEtBQUssQ0FBckIsRUFBd0I7QUFDdEIsVUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLGFBQUtrSixhQUFMLEdBQXFCbEosSUFBSSxHQUFHLENBQTVCO0FBQ0FxSCxVQUFFLEdBQUdxRyxZQUFZLENBQUMxTixJQUFELENBQWpCO0FBQ0FLLFVBQUUsR0FBR2dILEVBQUUsQ0FBQ2hHLFlBQUgsQ0FBZ0IsWUFBaEIsRUFBOEJ1SCxLQUE5QixDQUFvQyxHQUFwQyxFQUF5QyxDQUF6QyxDQUFMO0FBQ0QsT0FKRCxNQUlPO0FBQ0x2SSxVQUFFLEdBQUdMLElBQUksQ0FBQ0ssRUFBVjtBQUNBZ0gsVUFBRSxHQUFHek0sUUFBUSxDQUFDQyxhQUFULENBQXVCLHVDQUF1Q3dGLEVBQXZDLEdBQTRDLE1BQW5FLENBQUw7QUFDRDtBQUNGLEtBVEQsTUFTTztBQUNMc04sU0FBRyxHQUFHLEtBQUt6RSxhQUFYO0FBQ0E3QixRQUFFLEdBQUdxRyxZQUFZLENBQUNDLEdBQUQsQ0FBakI7QUFDQXROLFFBQUUsR0FBR2dILEVBQUUsQ0FBQ2hHLFlBQUgsQ0FBZ0IsWUFBaEIsRUFBOEJ1SCxLQUE5QixDQUFvQyxHQUFwQyxFQUF5QyxDQUF6QyxDQUFMO0FBQ0Q7O0FBRUR2QixNQUFFLENBQUMzRyxjQUFILENBQWtCO0FBQUVDLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBbEI7QUFFRixRQUFJLENBQUNaLElBQUQsSUFBUyxPQUFPQSxJQUFQLEtBQWdCLFFBQTdCLEVBQXVDLEtBQUs4SyxPQUFMLENBQWF6SyxFQUFiLEVBQWlCcUQsT0FBakIsQ0FBeUJyRCxFQUF6QjtBQUNyQyxTQUFLdU4sWUFBTCxDQUFrQnZOLEVBQWxCO0FBQ0QsR0E1VVM7QUE2VVh3TixjQTdVVyx3QkE2VUVDLEdBN1VGLEVBNlVPO0FBQ2pCLFFBQU0xRSxDQUFDLEdBQUcsS0FBS0wsb0JBQUwsQ0FBMEJoTixNQUFwQztBQUVBLFNBQUttTixhQUFMLElBQXNCNEUsR0FBdEI7QUFFQSxRQUFJLEtBQUs1RSxhQUFMLEdBQXFCLENBQXpCLEVBQTRCLEtBQUtBLGFBQUwsR0FBcUJFLENBQUMsR0FBRyxDQUF6QixDQUE1QixLQUNLLElBQUksS0FBS0YsYUFBTCxJQUFzQkUsQ0FBMUIsRUFBNkIsS0FBS0YsYUFBTCxHQUFxQixDQUFyQjtBQUVsQyxTQUFLa0UsUUFBTDtBQUNBLEdBdFZVO0FBdVZWUSxjQXZWVSx3QkF1Vkd2TixFQXZWSCxFQXVWTztBQUNmNUIsU0FBSyxDQUFDMk0sSUFBTixDQUFXeFEsUUFBUSxDQUFDbVQsZ0JBQVQsQ0FBMEIsK0JBQTFCLENBQVgsRUFDRzlDLE9BREgsQ0FDVyxVQUFBK0MsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQzFOLFNBQUgsQ0FBYUUsTUFBYixDQUFvQiw4QkFBcEIsQ0FBSjtBQUFBLEtBRGI7QUFHQSxRQUFNeU4sR0FBRyxHQUFHeFAsS0FBSyxDQUFDMk0sSUFBTixDQUFXeFEsUUFBUSxDQUFDbVQsZ0JBQVQsQ0FBMEIsd0NBQXdDMU4sRUFBeEMsR0FBNkMsS0FBdkUsQ0FBWCxDQUFaO0FBRUE0TixPQUFHLENBQUNoRCxPQUFKLENBQVksVUFBQStDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUMxTixTQUFILENBQWFDLEdBQWIsQ0FBaUIsOEJBQWpCLENBQUo7QUFBQSxLQUFkO0FBRUE3QyxVQUFNLENBQUN3USxVQUFQLENBQWtCO0FBQUEsYUFBTUQsR0FBRyxDQUFDaEQsT0FBSixDQUFZLFVBQUErQyxFQUFFO0FBQUEsZUFBSUEsRUFBRSxDQUFDMU4sU0FBSCxDQUFhRSxNQUFiLENBQW9CLDhCQUFwQixDQUFKO0FBQUEsT0FBZCxDQUFOO0FBQUEsS0FBbEIsRUFBZ0csSUFBaEc7QUFDRCxHQWhXUztBQWlXVjZDLGFBaldVLHVCQWlXRW9FLENBaldGLEVBaVdLa0UsSUFqV0wsRUFpV1c7QUFDbkIsUUFBSXZTLG1CQUFPZSxNQUFYLEVBQW1CO0FBRW5CLFFBQUltRSxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFBQSxRQUNJMEIsSUFBSSxHQUFHLEtBQUtzTSxRQUFMLENBQWM3RSxDQUFkLENBRFg7QUFHQSxRQUFJLENBQUN6SCxJQUFMLEVBQVcsT0FBTyxLQUFQOztBQUVYLFFBQUkxQixRQUFKLEVBQWM7QUFDWkEsY0FBUSxDQUFDa0MsTUFBVDtBQUNBLFdBQUt0QyxJQUFMLENBQVUsa0JBQVY7QUFDRDs7QUFFRCxTQUFLSSxRQUFMLEdBQWdCLElBQUl5QixxQkFBSixHQUFnQm9PLEdBQWhCLENBQW9Cbk8sSUFBcEIsQ0FBaEI7QUFFQSxTQUFLOUIsSUFBTCxDQUFVLGdCQUFWO0FBQ0EsUUFBSXlOLElBQUksS0FBSyxLQUFiLEVBQW9CLEtBQUs3TyxRQUFMO0FBQ3JCLEdBbFhTO0FBbVhWaU4sY0FuWFUsMEJBbVhLO0FBQ2IsU0FBS3pMLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLSixJQUFMLENBQVUsa0JBQVY7QUFDRCxHQXRYUztBQXVYVmtRLGdCQXZYVSw0QkF1WE87QUFDZixRQUFJaFYsbUJBQU9lLE1BQVgsRUFBbUI7QUFFbkIsUUFBSW1FLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUVBLFFBQUksQ0FBQ0EsUUFBTCxFQUFlLE9BQU8sS0FBUDtBQUVmQSxZQUFRLENBQUNrQyxNQUFUO0FBQ0EsU0FBS2xDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLMkssZUFBTCxHQUF1QjNLLFFBQXZCO0FBQ0EsU0FBS0osSUFBTCxDQUFVLGtCQUFWO0FBQ0EsU0FBS3BCLFFBQUw7QUFDRCxHQW5ZUztBQW9ZVndRLGtCQXBZVSw4QkFvWVM7QUFDakIsUUFBSWhQLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUVBLFFBQUlBLFFBQUosRUFBY0EsUUFBUSxDQUFDb0MsY0FBVDtBQUNmLEdBeFlTO0FBeVlWb0ssU0F6WVUsbUJBeVlGekssRUF6WUUsRUF5WUVzTixHQXpZRixFQXlZTztBQUNqQixRQUFJOUUsSUFBSSxHQUFHLEtBQUtBLElBQWhCO0FBQUEsUUFDRy9HLENBQUMsR0FBRytHLElBQUksQ0FBQzlNLE1BRFo7QUFBQSxRQUVHaUUsSUFGSDs7QUFJQSxXQUFPOEIsQ0FBQyxFQUFSLEVBQVk7QUFDWDlCLFVBQUksR0FBRzZJLElBQUksQ0FBQy9HLENBQUQsQ0FBWDtBQUVBLFVBQUk5QixJQUFJLENBQUNJLE9BQUwsQ0FBYUMsRUFBYixJQUFtQkEsRUFBdkIsRUFDQyxPQUFPc04sR0FBRyxHQUFHO0FBQUUzTixZQUFJLEVBQUVBLElBQVI7QUFBYytLLGdCQUFRLEVBQUVqSjtBQUF4QixPQUFILEdBQWlDOUIsSUFBM0M7QUFDRDs7QUFDRCxXQUFPMk4sR0FBRyxHQUFHO0FBQUUzTixVQUFJLEVBQUUsSUFBUjtBQUFjK0ssY0FBUSxFQUFFO0FBQXhCLEtBQUgsR0FBb0MsS0FBOUM7QUFDQSxHQXJaVTtBQXNaWHVCLFVBdFpXLG9CQXNaRi9CLENBdFpFLEVBc1pDO0FBQ1hBLEtBQUMsR0FBR0EsQ0FBQyxHQUFHQSxDQUFILEdBQU9uUixtQkFBT2lCLElBQVAsR0FBY2pCLG1CQUFPaUIsSUFBckIsR0FBNEIsRUFBeEM7QUFFQSxRQUFJMkYsSUFBSSxHQUFHLENBQUN1SyxDQUFELEdBQ1YsS0FBSzFCLElBQUwsQ0FBVSxLQUFLQSxJQUFMLENBQVU5TSxNQUFWLEdBQW1CLENBQTdCLENBRFUsR0FFVCxPQUFPd08sQ0FBUCxLQUFhLFFBQWIsR0FDRCxLQUFLTyxPQUFMLENBQWFQLENBQUMsQ0FBQzNCLEtBQUYsQ0FBUSxHQUFSLEVBQWEsQ0FBYixDQUFiLENBREMsR0FFRDJCLENBSkQ7QUFLQSxXQUFPdkssSUFBUDtBQUNBLEdBL1pVO0FBZ2FWcU4sVUFoYVUsc0JBZ2FDO0FBQ1QsU0FBS3hFLElBQUwsQ0FBVTZCLElBQVYsQ0FBZSxVQUFDMkQsS0FBRCxFQUFRQyxLQUFSO0FBQUEsYUFBa0JELEtBQUssQ0FBQ2hPLEVBQU4sR0FBV2lPLEtBQUssQ0FBQ2pPLEVBQW5DO0FBQUEsS0FBZjtBQUNELEdBbGFTO0FBbWFYd00sb0JBbmFXLGdDQW1hVTtBQUNwQixTQUFLOUQsb0JBQUwsR0FBNEJ0SyxLQUFLLENBQUMyTSxJQUFOLENBQVd4USxRQUFRLENBQUNtVCxnQkFBVCxDQUEwQix5Q0FBMUIsQ0FBWCxFQUFpRnJELElBQWpGLENBQXNGLFVBQUM2RCxFQUFELEVBQUtDLEVBQUwsRUFBWTtBQUM3SCxVQUFJQyxHQUFHLEdBQUdGLEVBQUUsQ0FBQ25HLHFCQUFILEVBQVY7QUFBQSxVQUNFc0csR0FBRyxHQUFHRixFQUFFLENBQUNwRyxxQkFBSCxFQURSO0FBQUEsVUFFRXVHLElBQUksR0FBR0YsR0FBRyxDQUFDcEcsR0FGYjtBQUFBLFVBR0V1RyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ3JHLEdBSGI7QUFLQSxVQUFJc0csSUFBSSxHQUFHQyxJQUFYLEVBQWlCLE9BQU8sQ0FBQyxDQUFSLENBQWpCLEtBQ0ssSUFBSUEsSUFBSSxHQUFHRCxJQUFYLEVBQWlCLE9BQU8sQ0FBUCxDQUFqQixLQUNBO0FBQ0osWUFBSUYsR0FBRyxDQUFDbEcsSUFBSixHQUFXbUcsR0FBRyxDQUFDbkcsSUFBbkIsRUFBeUIsT0FBTyxDQUFDLENBQVI7QUFDekIsZUFBTyxDQUFQO0FBQ0E7QUFDRCxLQVoyQixDQUE1QjtBQWFFLFNBQUtTLHNCQUFMLEdBQThCLEtBQUtELG9CQUFMLENBQTBCOEYsR0FBMUIsQ0FBOEIsVUFBQTdPLElBQUk7QUFBQSxhQUFJMEksUUFBUSxDQUFDMUksSUFBSSxDQUFDcUIsWUFBTCxDQUFrQixZQUFsQixDQUFELENBQVo7QUFBQSxLQUFsQyxDQUE5QjtBQUNBLFNBQUtuRCxJQUFMLENBQVUsd0JBQVYsRUFBb0MsS0FBSzhLLHNCQUF6QztBQUNGLEdBbmJVO0FBb2JWd0IsZ0JBcGJVLDBCQW9iSzZELEtBcGJMLEVBb2JZQyxLQXBiWixFQW9ibUI7QUFDN0IsUUFBSVEsU0FBUyxHQUFHVCxLQUFLLENBQUNuTyxRQUF0QjtBQUFBLFFBQ002TyxFQUFFLEdBQUdELFNBQVMsQ0FBQy9TLE1BRHJCO0FBQUEsUUFFTWlULEdBQUcsR0FBR1gsS0FBSyxDQUFDaE8sRUFGbEI7QUFBQSxRQUdNNE8sU0FBUyxHQUFHWCxLQUFLLENBQUNwTyxRQUh4QjtBQUFBLFFBSU1nUCxHQUFHLEdBQUdaLEtBQUssQ0FBQ2pPLEVBSmxCO0FBQUEsUUFLTThPLEVBTE47QUFBQSxRQUtVbEIsR0FMVjtBQUFBLFFBS2U3RSxDQUxmOztBQU9FLFdBQU8yRixFQUFFLEVBQVQsRUFBYTtBQUNYSSxRQUFFLEdBQUdGLFNBQVMsQ0FBQ2xULE1BQWY7O0FBQ0EsYUFBT29ULEVBQUUsRUFBVCxFQUFhO0FBQ1hsQixXQUFHLEdBQUdhLFNBQVMsQ0FBQ0MsRUFBRCxDQUFULENBQWNoQixnQkFBZCxDQUErQixjQUEvQixDQUFOO0FBQ0EzRSxTQUFDLEdBQUc2RSxHQUFHLENBQUNsUyxNQUFSOztBQUNBLGVBQU9xTixDQUFDLEVBQVIsRUFBWTtBQUNWLGNBQUk2RSxHQUFHLENBQUM3RSxDQUFELENBQUgsQ0FBTy9ILFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0MsQ0FBbEMsS0FBd0M2TixHQUE1QyxFQUNFLE9BQU8sSUFBUDtBQUNIO0FBQ0Y7QUFDRjs7QUFDRCxXQUFPLEtBQVA7QUFDRixHQXhjVTtBQXljVkUsYUF6Y1UsdUJBeWNFdFQsQ0F6Y0YsRUF5Y0txRCxHQXpjTCxFQXljVTtBQUFBOztBQUNwQixRQUFJaEIsU0FBUyxHQUFHLEtBQUtBLFNBQUwsR0FBaUIsSUFBSTRPLHNCQUFKLEVBQWpDO0FBRUEsUUFBSSxDQUFDNU8sU0FBUyxDQUFDcUUsS0FBZixFQUFzQixPQUFPLEtBQVA7O0FBRXBCLFFBQUkxRyxDQUFKLEVBQU87QUFDUixVQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQnFELEdBQUcsR0FBR3JELENBQU4sQ0FBM0IsS0FDSyxLQUFLNk0sY0FBTCxDQUFvQjdNLENBQXBCO0FBQ0wsS0FIQyxNQUdLO0FBQ05xRCxTQUFHLEdBQUdBLEdBQUcsSUFBSSxHQUFiO0FBQ0E7O0FBRUMvRix1QkFBTzBCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxRQUFRLEVBQUk7QUFDdEMsVUFBSTVCLG1CQUFPYSxLQUFYLEVBQWtCO0FBQ2hCLGNBQUksQ0FBQ3dILE9BQUwsR0FBZSxPQUFPLE1BQUksQ0FBQ0EsT0FBWixLQUF3QixTQUF4QixHQUFvQyxNQUFJLENBQUNBLE9BQXpDLEdBQW1ELENBQUMsQ0FBQ3pHLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQlgsS0FBckY7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFJLENBQUNrSCxPQUFMLEdBQWUsT0FBTyxNQUFJLENBQUNBLE9BQVosS0FBd0IsU0FBeEIsR0FBb0MsTUFBSSxDQUFDQSxPQUF6QyxHQUFtRHJJLG1CQUFPbUIsS0FBekU7QUFDRDs7QUFDRCxZQUFJLENBQUNvUyxLQUFMLENBQVcsTUFBSSxDQUFDM00sSUFBTCxDQUFVYixHQUFWLEVBQWVuRSxRQUFRLENBQUNpQyxPQUFULENBQWlCa0MsR0FBakIsQ0FBZixFQUFzQyxNQUFJLENBQUNzQyxPQUEzQyxDQUFYLEVBQWdFLElBQWhFLEVBQXNFLElBQXRFO0FBQ0QsS0FQRDtBQVFGLEdBN2RVO0FBOGRWNE4sVUE5ZFUsb0JBOGREbFEsR0E5ZEMsRUE4ZEk7QUFDWixRQUFJd0YsSUFBSSxHQUFHLElBQVg7O0FBQ0EsWUFBT3hGLEdBQVA7QUFDRSxXQUFLLEdBQUw7QUFBVXdGLFlBQUksQ0FBQ2tGLElBQUw7QUFBYTs7QUFDdkIsV0FBSyxHQUFMO0FBQVVsRixZQUFJLENBQUNxRixJQUFMO0FBQWE7O0FBQ3ZCLFdBQUssR0FBTDtBQUFVckYsWUFBSSxDQUFDZ0gsSUFBTDtBQUFhOztBQUN2QixXQUFLLEdBQUw7QUFBVWhILFlBQUksQ0FBQ3RCLFdBQUw7QUFBb0I7O0FBQ2pDLFdBQUssU0FBTDtBQUFnQnNCLFlBQUksQ0FBQ2tKLFlBQUwsQ0FBa0IsQ0FBQyxDQUFuQjtBQUF1Qjs7QUFDdkMsV0FBSyxXQUFMO0FBQWtCbEosWUFBSSxDQUFDa0osWUFBTCxDQUFrQixDQUFsQjtBQUFzQjs7QUFDeEMsV0FBSyxHQUFMO0FBQVVsSixZQUFJLENBQUNuRSxNQUFMO0FBQWU7O0FBQ3RCLFdBQUssR0FBTDtBQUFVbUUsWUFBSSxDQUFDMEgsSUFBTDtBQUFhO0FBUnpCO0FBVUQsR0ExZVM7QUEyZVYxRCxnQkEzZVUsMEJBMmVLN00sQ0EzZUwsRUEyZVE7QUFDbEIsUUFBSUEsQ0FBQyxJQUFJQSxDQUFDLENBQUM2TSxjQUFYLEVBQTJCO0FBQzFCN00sT0FBQyxDQUFDNk0sY0FBRjtBQUNBN00sT0FBQyxDQUFDOEgsZUFBRjtBQUNBOztBQUNELFdBQU8sSUFBUDtBQUNBLEdBamZVO0FBa2ZYc0ksZUFsZlcsMkJBa2ZLO0FBQ2IsUUFBTS9SLE1BQU0sR0FBR2YsbUJBQU9lLE1BQXRCO0FBQ0EsUUFBTUYsS0FBSyxHQUFHYixtQkFBT2EsS0FBckI7QUFDQSxRQUFNRixJQUFJLEdBQUdYLG1CQUFPVyxJQUFwQjtBQUVBLFFBQU11QixLQUFLLEdBQUcsQ0FBQ25CLE1BQUQsSUFBV2YsbUJBQU9jLE9BQVAsQ0FBZUgsSUFBZixDQUFYLEdBQWtDWCxtQkFBT2MsT0FBUCxDQUFlSCxJQUFmLENBQWxDLEdBQXlELEVBQXZFO0FBRUF1QixTQUFLLENBQUNnTyxLQUFOLEdBQWMsS0FBS2dHLFlBQUwsRUFBZDtBQUNGaFUsU0FBSyxDQUFDaVUsSUFBTixHQUFhLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFiO0FBQ0VuVSxTQUFLLENBQUNvVSxVQUFOLEdBQW1CLENBQUMsQ0FBQyxLQUFLcFIsUUFBMUI7QUFDQWhELFNBQUssQ0FBQ3FVLEtBQU4sR0FBY2pTLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0IrVSxLQUE5QjtBQUNGclUsU0FBSyxDQUFDc1UsS0FBTixHQUFjdFUsS0FBSyxDQUFDZ08sS0FBTixDQUFZdk4sTUFBMUI7QUFDQVQsU0FBSyxDQUFDeUcsT0FBTixHQUFnQixLQUFLQSxPQUFyQjtBQUNFekcsU0FBSyxDQUFDZixLQUFOLEdBQWMsT0FBTyxLQUFLa0gsT0FBWixLQUF3QixTQUF4QixHQUFvQyxLQUFLQSxPQUF6QyxHQUFtRG5HLEtBQUssQ0FBQ2YsS0FBdkU7O0FBRUEsUUFBSU4sS0FBSyxJQUFJRSxNQUFiLEVBQXFCO0FBQ25CbUIsV0FBSyxDQUFDdVUsS0FBTixHQUFjdlUsS0FBSyxDQUFDaVUsSUFBcEI7QUFDQWpVLFdBQUssQ0FBQzFCLEdBQU4sR0FBWVIsbUJBQU9nQixhQUFQLEdBQXVCc0QsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQmdELEdBQXZDLEdBQTZDLHNCQUFVRixNQUFNLENBQUM5QyxRQUFQLENBQWdCZ0QsR0FBMUIsQ0FBekQ7QUFDQXRDLFdBQUssQ0FBQ0csTUFBTixHQUFlckMsbUJBQU9xVSxZQUFQLEtBQXdCLE1BQXZDO0FBQ0FuUyxXQUFLLENBQUNuQixNQUFOLEdBQWVBLE1BQWY7QUFDQW1CLFdBQUssQ0FBQ2xCLGFBQU4sR0FBc0JoQixtQkFBT2dCLGFBQTdCO0FBQ0Q7O0FBRURrQixTQUFLLENBQUN2QixJQUFOLEdBQWFJLE1BQU0sR0FDakJtQixLQUFLLENBQUNnTyxLQUFOLENBQVksQ0FBWixFQUFlMUgsSUFBZixDQUFvQjhLLElBQXBCLEdBQTJCTyxTQUEzQixDQUFxQyxDQUFyQyxFQUF3Q0MsNEJBQWlCQyxvQkFBakIsR0FBd0MsQ0FBaEYsQ0FEaUIsR0FFakJsVCxLQUFLLEdBQUdGLElBQUgsR0FBVXVCLEtBQUssQ0FBQ3ZCLElBRnZCO0FBSUYsV0FBT3VCLEtBQVA7QUFDQSxHQTlnQlU7QUErZ0JWZ1UsY0EvZ0JVLDBCQStnQks7QUFDYixRQUFJekcsSUFBSSxHQUFHLEtBQUtBLElBQWhCO0FBQ0EsUUFBSU8sQ0FBQyxHQUFHUCxJQUFJLENBQUM5TSxNQUFiO0FBQ0EsUUFBTXVOLEtBQUssR0FBRyxFQUFkOztBQUVBLFFBQUlsUSxtQkFBT2UsTUFBWCxFQUFtQjtBQUNqQjBPLFVBQUksR0FBRyxDQUFDQSxJQUFJLENBQUNPLENBQUMsR0FBQyxDQUFILENBQUwsQ0FBUDtBQUNEOztBQUVEQSxLQUFDLEdBQUdQLElBQUksQ0FBQzlNLE1BQVQ7O0FBRUEsU0FBSyxJQUFJMEwsQ0FBQyxHQUFHLENBQVIsRUFBV3FJLEVBQWhCLEVBQW9CckksQ0FBQyxHQUFHMkIsQ0FBeEIsRUFBMkIzQixDQUFDLEVBQTVCLEVBQWdDO0FBQ2pDcUksUUFBRSxHQUFHakgsSUFBSSxDQUFDcEIsQ0FBRCxDQUFKLENBQVFySCxPQUFiO0FBQ0csYUFBTzBQLEVBQUUsQ0FBQ3JVLE1BQVY7QUFDSDZOLFdBQUssQ0FBQ3JHLElBQU4sQ0FBVzZNLEVBQVg7QUFDQTs7QUFDQyxXQUFPeEcsS0FBUDtBQUNELEdBaGlCUztBQWlpQlZ5RyxjQWppQlUsMEJBaWlCSztBQUNiLFNBQUtwVixNQUFMLENBQVksSUFBWixFQUFrQjtBQUFFOFEsWUFBTSxFQUFFO0FBQVYsS0FBbEI7QUFDQSxTQUFLdk4sSUFBTCxDQUFVLHVCQUFWO0FBQ0Q7QUFwaUJTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0plLFVBQVM4QixJQUFULEVBQWVnUSxLQUFmLEVBQXNCO0FBRW5DLE1BQU1DLElBQUksR0FBR3ZTLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0IrRSxJQUE3QjtBQUVBLFNBQU8sSUFBSXhHLGlCQUFKLENBQWU7QUFDdEJNLFVBQU0sRUFBRTtBQUNKQyxTQUFHLEVBQUU7QUFDSCxpQ0FBeUIsa0JBRHRCO0FBRUgscUJBQWEsUUFGVjtBQUdILHlCQUFpQjtBQUhkLE9BREQ7QUFNSndXLFNBQUcsRUFBRTtBQUNIQyxhQUFLLEVBQUU7QUFDTCwwQkFBZ0IsU0FEWDtBQUVMLDRCQUFrQixNQUZiO0FBR0wsNkJBQW1CLGVBSGQ7QUFJTCx5QkFBZSxhQUpWO0FBS0wsc0JBQVk7QUFMUCxTQURKO0FBUUhDLGFBQUssRUFBRTtBQUNMLHNCQUFZO0FBRFAsU0FSSjtBQVdIQyxpQkFBUyxFQUFFO0FBQ1QsMEJBQWdCO0FBRFAsU0FYUjtBQWNIQyxrQkFBVSxFQUFFO0FBQ1YsMEJBQWdCO0FBRE47QUFkVDtBQU5ELEtBRGM7QUEwQnBCQyx3QkFBb0IsRUFBRSxJQTFCRjtBQTJCcEJsSixNQUFFLEVBQUUsSUEzQmdCO0FBNEJwQnJILFFBQUksRUFBSkEsSUE1Qm9CO0FBNkJwQmdRLFNBQUssRUFBRUEsS0FBSyxJQUFJLEVBN0JJO0FBOEJwQlEsb0JBQWdCLEVBQUUsSUE5QkU7QUErQnBCNU8sUUFBSSxFQUFFLEVBL0JjO0FBZ0NwQjZPLFdBQU8sRUFBRSxLQWhDVztBQWlDcEJDLG1CQUFlLEVBQUUsS0FqQ0c7QUFrQ3BCQyxnQkFBWSxFQUFFLEtBbENNO0FBbUNwQmhELE9BQUcsRUFBRTtBQUFFdkUsT0FBQyxFQUFFLElBQUw7QUFBV3dILE9BQUMsRUFBRTtBQUFkLEtBbkNlO0FBb0NwQkMsUUFBSSxFQUFFO0FBQUUxUSxPQUFDLEVBQUUsSUFBTDtBQUFXMlEsT0FBQyxFQUFFO0FBQWQsS0FwQ2M7QUFxQ3BCQyxVQUFNLEVBQUUsQ0FyQ1k7QUFzQ3BCQyxVQUFNLEVBQUUsQ0F0Q1k7QUF1Q3BCQyxvQkFBZ0IsRUFBRSxJQXZDRTtBQXlDcEJ4VyxZQXpDb0Isc0JBeUNUO0FBQ1QsV0FBS3lXLG9CQUFMO0FBQ0EsV0FBS0MsaUJBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0MsZ0JBQUw7QUFDRCxLQTlDbUI7QUFnRHBCSCx3QkFoRG9CLGtDQWdERztBQUNyQixVQUFNSSxRQUFRLEdBQUcsS0FBS3RSLElBQUwsQ0FBVUksT0FBVixDQUFrQnlCLElBQW5DOztBQUNBLFVBQUksT0FBT3lQLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsYUFBS3RSLElBQUwsQ0FBVUksT0FBVixDQUFrQnlCLElBQWxCLEdBQXlCO0FBQUVELGNBQUksRUFBRTBQLFFBQVI7QUFBa0J0QixlQUFLLEVBQUUsS0FBS0EsS0FBTCxJQUFjO0FBQXZDLFNBQXpCO0FBQ0QsT0FGRCxNQUdLLElBQUksQ0FBQ3NCLFFBQUwsRUFBZTtBQUNsQixhQUFLdFIsSUFBTCxDQUFVSSxPQUFWLENBQWtCeUIsSUFBbEIsR0FBeUI7QUFBRUQsY0FBSSxFQUFFMFAsUUFBUjtBQUFrQnRCLGVBQUssRUFBRSxLQUFLQSxLQUFMLElBQWM1VyxtQkFBT2tCO0FBQTlDLFNBQXpCO0FBQ0QsT0FGSSxNQUVFO0FBQ0wsYUFBS3FULEdBQUwsR0FBVzJELFFBQVEsQ0FBQzNELEdBQVQsSUFBZ0IsS0FBS0EsR0FBaEM7QUFDQSxhQUFLa0QsSUFBTCxHQUFZUyxRQUFRLENBQUNULElBQVQsSUFBaUIsS0FBS0EsSUFBbEM7QUFDRDtBQUNGLEtBM0RtQjtBQTREcEJNLHFCQTVEb0IsK0JBNERBO0FBQUE7O0FBQ2xCLFVBQU10UCxJQUFJLEdBQUcsS0FBS3dGLEVBQUwsR0FBVXpNLFFBQVEsQ0FBQzJLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdkI7QUFDQSxVQUFNZ00sTUFBTSxHQUFHLEtBQUtBLE1BQUwsR0FBYzNXLFFBQVEsQ0FBQzJLLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBN0I7QUFDQSxVQUFNaU0sT0FBTyxHQUFHLEtBQUtBLE9BQUwsR0FBZTVXLFFBQVEsQ0FBQzJLLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBL0I7QUFDQSxVQUFNa00sR0FBRyxHQUFHLEtBQUtBLEdBQUwsR0FBVzdXLFFBQVEsQ0FBQzJLLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBdkI7QUFDQSxVQUFNcUYsR0FBRyxHQUFHLEtBQUtBLEdBQUwsR0FBV2hRLFFBQVEsQ0FBQzJLLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXZCO0FBQ0EsVUFBTW1NLElBQUksR0FBRzlXLFFBQVEsQ0FBQzJLLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWI7QUFDQSxVQUFNb00sT0FBTyxHQUFHLEtBQUtBLE9BQUwsR0FBZS9XLFFBQVEsQ0FBQzJLLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBL0I7QUFDQSxVQUFNMEIsQ0FBQyxHQUFHLEtBQUsySyxXQUFMLEdBQW1CaFgsUUFBUSxDQUFDMkssYUFBVCxDQUF1QixVQUF2QixDQUE3QjtBQUNBLFVBQU0zRCxJQUFJLEdBQUcsS0FBSzVCLElBQUwsQ0FBVUksT0FBVixDQUFrQnlCLElBQWxCLENBQXVCRCxJQUFwQztBQUNBLFVBQU1vTyxLQUFLLEdBQUcsS0FBS0EsS0FBTCxHQUFhLEtBQUtoUSxJQUFMLENBQVVJLE9BQVYsQ0FBa0J5QixJQUFsQixDQUF1Qm1PLEtBQXZCLElBQWdDNVcsbUJBQU9rQixTQUFsRTtBQUNBbEIseUJBQU9rQixTQUFQLEdBQW1CMFYsS0FBbkI7QUFDQSxVQUFNNkIsT0FBTyxHQUFHalgsUUFBUSxDQUFDMlEsY0FBVCxDQUF3QnVHLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixLQUFwQixDQUF4QixDQUFoQjtBQUNBLFVBQU1DLE9BQU8sR0FBR3BYLFFBQVEsQ0FBQzJRLGNBQVQsQ0FBd0J1RyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBeEIsQ0FBaEI7QUFDQSxVQUFNRSxRQUFRLEdBQUdyWCxRQUFRLENBQUMyUSxjQUFULENBQXdCdUcsTUFBTSxDQUFDQyxZQUFQLENBQW9CLE1BQXBCLENBQXhCLENBQWpCO0FBRUEsT0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixFQUE2QixRQUE3QixFQUF1QyxLQUF2QyxFQUE4QyxRQUE5QyxFQUF3RCxNQUF4RCxFQUFnRSxXQUFoRSxFQUE2RTlHLE9BQTdFLENBQXFGLFVBQUE1RixDQUFDLEVBQUk7QUFDeEYsWUFBSTJLLEtBQUssR0FBR3BWLFFBQVEsQ0FBQzJLLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWjtBQUNBeUssYUFBSyxDQUFDa0MsU0FBTixHQUFrQixrQkFBa0I3TSxDQUFwQztBQUNBMkssYUFBSyxDQUFDeEssWUFBTixDQUFtQixZQUFuQixFQUFpQ0gsQ0FBakM7QUFDQXNNLGVBQU8sQ0FBQ2hLLFdBQVIsQ0FBb0JxSSxLQUFwQjtBQUNELE9BTEQ7QUFPQS9JLE9BQUMsQ0FBQ3pCLFlBQUYsQ0FBZSxjQUFmLEVBQStCLElBQS9CO0FBQ0FpTSxTQUFHLENBQUM5SixXQUFKLENBQWdCa0ssT0FBaEI7QUFDQWpILFNBQUcsQ0FBQ2pELFdBQUosQ0FBZ0JxSyxPQUFoQjtBQUNBTixVQUFJLENBQUMvSixXQUFMLENBQWlCc0ssUUFBakI7QUFDQXBRLFVBQUksQ0FBQzhGLFdBQUwsQ0FBaUI0SixNQUFqQjtBQUNBQyxhQUFPLENBQUM3SixXQUFSLENBQW9CK0osSUFBcEI7QUFDQUYsYUFBTyxDQUFDN0osV0FBUixDQUFvQjhKLEdBQXBCO0FBQ0FELGFBQU8sQ0FBQzdKLFdBQVIsQ0FBb0JpRCxHQUFwQjtBQUNBL0ksVUFBSSxDQUFDOEYsV0FBTCxDQUFpQjZKLE9BQWpCO0FBQ0EzUCxVQUFJLENBQUM4RixXQUFMLENBQWlCVixDQUFqQjtBQUNBcEYsVUFBSSxDQUFDdkIsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQWF5UCxLQUFoQztBQUNBLFVBQUlwTyxJQUFKLEVBQVVxRixDQUFDLENBQUNrTCxLQUFGLEdBQVV2USxJQUFWO0FBRVZxRixPQUFDLENBQUNySCxnQkFBRixDQUFtQixNQUFuQixFQUEyQixVQUFBOUQsQ0FBQztBQUFBLGVBQUksS0FBSSxDQUFDc1csYUFBTCxDQUFtQnRXLENBQW5CLEVBQXNCQSxDQUFDLENBQUNxRixNQUF4QixFQUFnQyxJQUFoQyxDQUFKO0FBQUEsT0FBNUIsRUFBdUUsS0FBdkU7QUFDRCxLQWpHbUI7QUFrR3BCa1IsV0FsR29CLHFCQWtHVjtBQUNSLFdBQUs3UixNQUFMO0FBQ0EsV0FBS1IsSUFBTCxDQUFVSSxPQUFWLENBQWtCeUIsSUFBbEIsR0FBeUIsRUFBekI7QUFDRCxLQXJHbUI7QUFzR3BCckIsVUF0R29CLG9CQXNHWDtBQUNQLFdBQUs4UixJQUFMO0FBQ0EsV0FBS0MsbUJBQUw7QUFDQSxXQUFLclUsSUFBTCxDQUFVLGNBQVYsRUFBMEIsS0FBSzhCLElBQUwsQ0FBVUssRUFBcEM7QUFDRCxLQTFHbUI7QUEyR3BCK1IsaUJBM0dvQix5QkEyR050VyxDQTNHTSxFQTJHSHVMLEVBM0dHLEVBMkdDbUwsS0EzR0QsRUEyR1E7QUFBQTs7QUFDMUIsVUFBSUEsS0FBSixFQUFXO0FBQ1QsYUFBS3hULE1BQUwsQ0FBWXFJLEVBQVo7QUFDRCxPQUZELE1BR0ssSUFBSSxDQUFDLEtBQUtxSixlQUFWLEVBQTJCO0FBQzlCLGFBQUtBLGVBQUwsR0FBdUIsSUFBdkI7QUFDQWhULGNBQU0sQ0FBQ3dRLFVBQVAsQ0FBa0I7QUFBQSxpQkFBTSxNQUFJLENBQUNsUCxNQUFMLENBQVlxSSxFQUFaLENBQU47QUFBQSxTQUFsQixFQUF5QyxJQUF6QztBQUNEO0FBQ0YsS0FuSG1CO0FBb0hwQnJJLFVBcEhvQixrQkFvSGJxSSxFQXBIYSxFQW9IVDtBQUNULFdBQUtySCxJQUFMLENBQVVJLE9BQVYsQ0FBa0J5QixJQUFsQixDQUF1QkQsSUFBdkIsR0FBOEJ5RixFQUFFLENBQUM4SyxLQUFqQztBQUNBLFdBQUtqVSxJQUFMLENBQVUsY0FBVixFQUEwQixLQUFLOEIsSUFBTCxDQUFVSyxFQUFwQztBQUNBLFdBQUtxUSxlQUFMLEdBQXVCLEtBQXZCO0FBQ0QsS0F4SG1CO0FBeUhwQjNJLFFBekhvQixrQkF5SGI7QUFDTCxVQUFNVixFQUFFLEdBQUcsS0FBS0EsRUFBaEI7QUFDQSxVQUFNb0wsZ0JBQWdCLEdBQUcvVSxNQUFNLENBQUNnVixVQUFoQztBQUVBLFVBQUkvRSxHQUFKLEVBQVNwRixJQUFULEVBQWVGLEdBQWY7O0FBRUEsVUFBSSxLQUFLc0YsR0FBTCxDQUFTdkUsQ0FBVCxLQUFlLElBQW5CLEVBQXlCO0FBQ3ZCdUUsV0FBRyxHQUFHLEtBQUtBLEdBQVg7QUFDQXRGLFdBQUcsR0FBR3NGLEdBQUcsQ0FBQ2lELENBQVY7QUFDRCxPQUhELE1BR087QUFDTGpELFdBQUcsR0FBRyxLQUFLZ0YsV0FBTCxFQUFOO0FBRUFwSyxZQUFJLEdBQUcsS0FBS29GLEdBQUwsQ0FBU3ZFLENBQVQsR0FBYXVFLEdBQUcsQ0FBQ3ZFLENBQXhCO0FBQ0FmLFdBQUcsR0FBRyxLQUFLc0YsR0FBTCxDQUFTaUQsQ0FBVCxHQUFhakQsR0FBRyxDQUFDaUQsQ0FBSixHQUFRakQsR0FBRyxDQUFDaUYsTUFBL0I7QUFDRDs7QUFDRHJLLFVBQUksR0FBRyxLQUFLb0YsR0FBTCxDQUFTdkUsQ0FBVCxHQUFhdUUsR0FBRyxDQUFDdkUsQ0FBeEI7O0FBRUEsVUFBSWIsSUFBSSxHQUFHLEdBQVAsR0FBYWtLLGdCQUFqQixFQUFtQztBQUNqQ2xLLFlBQUksR0FBRyxLQUFLb0YsR0FBTCxDQUFTdkUsQ0FBVCxHQUFhcUosZ0JBQWdCLEdBQUcsR0FBdkM7QUFDRDs7QUFFRCxVQUFNNUIsSUFBSSxHQUFHLEtBQUtBLElBQUwsQ0FBVTFRLENBQVYsR0FBYyxXQUFXLEtBQUswUSxJQUFMLENBQVUxUSxDQUFyQixHQUF5QixVQUF6QixHQUFzQyxLQUFLMFEsSUFBTCxDQUFVQyxDQUFoRCxHQUFvRCxHQUFsRSxHQUF3RSxFQUFyRjtBQUVBYixVQUFJLENBQUN0SSxXQUFMLENBQWlCTixFQUFqQjtBQUNBQSxRQUFFLENBQUM3QixZQUFILENBQWdCLE9BQWhCLEVBQXlCLHVCQUF1QjZDLEdBQXZCLEdBQTZCLFVBQTdCLEdBQTBDRSxJQUExQyxHQUFpRCxLQUExRTtBQUNBbEIsUUFBRSxDQUFDd0wsb0JBQUgsQ0FBd0IsVUFBeEIsRUFBb0MsQ0FBcEMsRUFBdUNyTixZQUF2QyxDQUFvRCxPQUFwRCxFQUE2RHFMLElBQTdEO0FBQ0EsV0FBS2lDLHVCQUFMO0FBQ0EsV0FBS3JDLE9BQUwsR0FBZSxJQUFmO0FBQ0QsS0FySm1CO0FBc0pwQnNDLGdCQXRKb0IsMEJBc0pMO0FBQUE7O0FBQ2J0VSxXQUFLLENBQUMyTSxJQUFOLENBQVc2RSxJQUFJLENBQUM0QyxvQkFBTCxDQUEwQixRQUExQixDQUFYLEVBQWdENUgsT0FBaEQsQ0FBd0QsVUFBQXBKLElBQUksRUFBSTtBQUM5RCxZQUFJQSxJQUFJLEtBQUssTUFBSSxDQUFDd0YsRUFBbEIsRUFBc0J4RixJQUFJLENBQUNILEtBQUwsQ0FBV3NSLE1BQVgsR0FBb0IsVUFBcEIsQ0FBdEIsS0FDS25SLElBQUksQ0FBQ0gsS0FBTCxDQUFXc1IsTUFBWCxHQUFvQixVQUFwQjtBQUNOLE9BSEQ7QUFJRCxLQTNKbUI7QUE0SnBCVixRQTVKb0Isa0JBNEpiO0FBQ0xyQyxVQUFJLENBQUNuSSxXQUFMLENBQWlCLEtBQUtULEVBQXRCO0FBQ0EsV0FBSzRKLGdCQUFMLENBQXNCZ0MsVUFBdEI7QUFDQSxXQUFLeEMsT0FBTCxHQUFlLEtBQWY7QUFDRCxLQWhLbUI7QUFpS3BCeUMsVUFqS29CLG9CQWlLWDtBQUNQLFVBQUksS0FBS3pDLE9BQVQsRUFBa0IsS0FBSzZCLElBQUwsR0FBbEIsS0FDSyxLQUFLdkssSUFBTDtBQUNOLEtBcEttQjtBQXFLcEJvTCxpQkFyS29CLDJCQXFLSjtBQUNkLFVBQUksS0FBS3hDLFlBQVQsRUFBdUI7QUFDckIsYUFBS3RKLEVBQUwsQ0FBUVMsV0FBUixDQUFvQixLQUFLNkosT0FBekI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLdEssRUFBTCxDQUFRTSxXQUFSLENBQW9CLEtBQUtnSyxPQUF6QjtBQUNEOztBQUNELFdBQUtoQixZQUFMLEdBQW9CLENBQUMsS0FBS0EsWUFBMUI7QUFDRCxLQTVLbUI7QUE2S3BCeUMsZUE3S29CLHVCQTZLUnRYLENBN0tRLEVBNktMdUwsRUE3S0ssRUE2S0Q7QUFDakIsV0FBS0EsRUFBTCxDQUFRL0csU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsYUFBYSxLQUFLd1AsS0FBM0M7QUFDQSxVQUFNQSxLQUFLLEdBQUcsS0FBS0EsS0FBTCxHQUFhNVcsbUJBQU9rQixTQUFQLEdBQW1CK00sRUFBRSxDQUFDaEcsWUFBSCxDQUFnQixZQUFoQixDQUE5QztBQUNBLFdBQUtnRyxFQUFMLENBQVEvRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixhQUFheVAsS0FBbkM7QUFDQSxXQUFLaFEsSUFBTCxDQUFVSSxPQUFWLENBQWtCeUIsSUFBbEIsQ0FBdUJtTyxLQUF2QixHQUErQkEsS0FBL0I7QUFDQSxXQUFLbUQsYUFBTDtBQUNBLFdBQUtqVixJQUFMLENBQVUsb0JBQVYsRUFBZ0MsS0FBSzhCLElBQUwsQ0FBVUssRUFBMUM7QUFDRCxLQXBMbUI7QUFzTHBCZ1Isb0JBdExvQiw4QkFzTEQ7QUFBQTs7QUFDakJqWSx5QkFBTzBCLEdBQVAsQ0FBVyxhQUFYLEVBQTBCQyxJQUExQixDQUErQixVQUFBMkIsV0FBVyxFQUFJO0FBQzVDLFlBQUlBLFdBQUosRUFBaUI7QUFDZixjQUFJLENBQUMsQ0FBQyxNQUFJLENBQUM4VCxnQkFBWCxFQUE2Qjs7QUFFN0IsY0FBTTFSLE9BQU8sR0FBRyxNQUFJLENBQUMwUixnQkFBTCxHQUF3QjtBQUFBLG1CQUFNLE1BQUksQ0FBQzBDLE1BQUwsRUFBTjtBQUFBLFdBQXhDOztBQUhlO0FBQUE7QUFBQTs7QUFBQTtBQUtmLGlDQUFvQixNQUFJLENBQUNsVCxJQUFMLENBQVVFLFFBQTlCLDhIQUF3QztBQUFBLGtCQUEvQnNELE9BQStCO0FBQ3RDQSxxQkFBTyxDQUFDNUQsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NkLE9BQWxDLEVBQTJDLEtBQTNDO0FBQ0EwRSxxQkFBTyxDQUFDZ0MsWUFBUixDQUFxQixPQUFyQixFQUE4QnRKLE9BQU8sQ0FBQzZQLElBQVIsQ0FBYUMsVUFBYixDQUF3QixhQUF4QixDQUE5QjtBQUNEO0FBUmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNoQixTQVRELE1BU087QUFDTCxnQkFBSSxDQUFDdUcsbUJBQUw7QUFDRDtBQUNGLE9BYkQ7QUFjRCxLQXJNbUI7QUFzTXBCQSx1QkF0TW9CLGlDQXNNRTtBQUNwQixVQUFJLENBQUMsS0FBSy9CLGdCQUFWLEVBQTRCO0FBRFI7QUFBQTtBQUFBOztBQUFBO0FBRXBCLDhCQUFvQixLQUFLeFEsSUFBTCxDQUFVRSxRQUE5QixtSUFBd0M7QUFBQSxjQUEvQnNELE9BQStCO0FBQ3RDQSxpQkFBTyxDQUFDM0QsbUJBQVIsQ0FBNEIsT0FBNUIsRUFBcUMsS0FBSzJRLGdCQUExQyxFQUE0RCxLQUE1RDtBQUNBaE4saUJBQU8sQ0FBQzZQLGVBQVIsQ0FBd0IsT0FBeEI7QUFDRDtBQUxtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXJCLEtBNU1tQjtBQTZNcEJQLDJCQTdNb0IscUNBNk1NO0FBQ3hCLFVBQU1RLFFBQVEsR0FBRyxLQUFLak0sRUFBTCxDQUFRd0wsb0JBQVIsQ0FBNkIsVUFBN0IsRUFBeUMsQ0FBekMsQ0FBakI7QUFDQSxVQUFNVSxNQUFNLEdBQUc7QUFBRUMsdUJBQWUsRUFBRSxDQUFDLE9BQUQ7QUFBbkIsT0FBZjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxLQUFLeEMsZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsSUFBeUIsSUFBSXlDLGdCQUFKLENBQXFCLEtBQUtqUSxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLa1EsUUFBdEIsQ0FBckIsQ0FBbEU7QUFDQUYsY0FBUSxDQUFDRyxPQUFULENBQWlCTixRQUFqQixFQUEyQkMsTUFBM0I7QUFDRCxLQWxObUI7QUFtTnBCWixlQW5Ob0IseUJBbU5OO0FBQ1osVUFBTWtCLElBQUksR0FBRyxLQUFLN1QsSUFBTCxDQUFVRSxRQUFWLENBQW1CLEtBQUtGLElBQUwsQ0FBVUUsUUFBVixDQUFtQm5FLE1BQW5CLEdBQTRCLENBQS9DLEVBQWtEcU0scUJBQWxELEVBQWI7QUFDQSxhQUFPO0FBQ0x3SSxTQUFDLEVBQUVpRCxJQUFJLENBQUN4TCxHQUFMLEdBQVczSyxNQUFNLENBQUNvVyxXQUFsQixHQUFnQzdELElBQUksQ0FBQzhELFNBRG5DO0FBRUwzSyxTQUFDLEVBQUV5SyxJQUFJLENBQUN0TCxJQUFMLEdBQVk3SyxNQUFNLENBQUNzVyxXQUFuQixHQUFpQy9ELElBQUksQ0FBQ2dFLFVBRnBDO0FBR0xyQixjQUFNLEVBQUVpQixJQUFJLENBQUMxTTtBQUhSLE9BQVA7QUFLRCxLQTFObUI7QUEyTnBCK00sZUEzTm9CLHVCQTJOUnBZLENBM05RLEVBMk5MdUwsRUEzTkssRUEyTkQ7QUFDakJ2TCxPQUFDLENBQUM2TSxjQUFGO0FBQ0EsV0FBS29JLE1BQUwsR0FBY2pWLENBQUMsQ0FBQ3FZLEtBQUYsR0FBVSxLQUFLeEcsR0FBTCxDQUFTdkUsQ0FBakM7QUFDQSxXQUFLNEgsTUFBTCxHQUFjbFYsQ0FBQyxDQUFDc1ksS0FBRixHQUFVLEtBQUt6RyxHQUFMLENBQVNpRCxDQUFqQztBQUNBLFdBQUsxUyxJQUFMLENBQVUsWUFBVixFQUF3QixLQUFLOEIsSUFBTCxDQUFVSyxFQUFsQztBQUNELEtBaE9tQjtBQWlPcEJnVSxVQWpPb0Isa0JBaU9ieFMsSUFqT2EsRUFpT1AvRixDQWpPTyxFQWlPSjtBQUNkLFVBQUkrRixJQUFJLEtBQUssS0FBSzdCLElBQUwsQ0FBVUssRUFBdkIsRUFBMkI7QUFDekIsWUFBTWdILEVBQUUsR0FBRyxLQUFLQSxFQUFoQjtBQUNBLFlBQUlrQixJQUFJLEdBQUcsS0FBS29GLEdBQUwsQ0FBU3ZFLENBQVQsR0FBYXROLENBQUMsQ0FBQ3FZLEtBQUYsR0FBVSxLQUFLcEQsTUFBdkM7QUFDQSxZQUFJMUksR0FBRyxHQUFHLEtBQUtzRixHQUFMLENBQVNpRCxDQUFULEdBQWE5VSxDQUFDLENBQUNzWSxLQUFGLEdBQVUsS0FBS3BELE1BQXRDO0FBQ0EzSixVQUFFLENBQUMzRixLQUFILENBQVM2RyxJQUFULEdBQWdCQSxJQUFJLEdBQUcsSUFBdkI7QUFDQWxCLFVBQUUsQ0FBQzNGLEtBQUgsQ0FBUzJHLEdBQVQsR0FBZUEsR0FBRyxHQUFHLElBQXJCO0FBQ0Q7QUFDRixLQXpPbUI7QUEwT3BCaU0sYUExT29CLHVCQTBPUjtBQUNWLFdBQUt0VSxJQUFMLENBQVVJLE9BQVYsQ0FBa0J5QixJQUFsQixDQUF1QjhMLEdBQXZCLEdBQTZCLEtBQUtBLEdBQWxDO0FBQ0EsV0FBS3pQLElBQUwsQ0FBVSxrQkFBVixFQUE4QixLQUFLOEIsSUFBTCxDQUFVSyxFQUF4QztBQUNELEtBN09tQjtBQThPcEJzVCxZQTlPb0Isb0JBOE9YWSxhQTlPVyxFQThPSTtBQUN0QixVQUFNN1MsS0FBSyxHQUFHNlMsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQnBULE1BQWpCLENBQXdCTyxLQUF0QztBQUNBLFdBQUttUCxJQUFMLEdBQVksS0FBSzdRLElBQUwsQ0FBVUksT0FBVixDQUFrQnlCLElBQWxCLENBQXVCZ1AsSUFBdkIsR0FBOEI7QUFBRTFRLFNBQUMsRUFBRXVCLEtBQUssQ0FBQzhTLEtBQVg7QUFBa0IxRCxTQUFDLEVBQUVwUCxLQUFLLENBQUN5RjtBQUEzQixPQUExQztBQUNBLFdBQUtqSixJQUFMLENBQVUsbUJBQVYsRUFBK0IsS0FBSzhCLElBQUwsQ0FBVUssRUFBekM7QUFDRDtBQWxQbUIsR0FBZixDQUFQO0FBb1BELEM7O0FBM1BEOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJbkgsY0FBSixDQUFZO0FBQ1ZPLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxrQkFBWSxZQURUO0FBRUgsc0JBQWdCLG1CQUZiO0FBR0gsdUJBQWlCLFNBSGQ7QUFJSCxzQkFBZ0IsWUFKYjtBQUtILHNCQUFnQixXQUxiO0FBTUgsOEJBQXdCLFdBTnJCO0FBT0gsK0JBQXlCLGNBUHRCO0FBUUgsb0JBQWMsbUJBUlg7QUFTSCx3QkFBa0I7QUFUZjtBQURDLEdBREU7QUFlVithLE9BQUssRUFBRSxFQWZHO0FBZ0JWdkIsUUFBTSxFQUFFLElBaEJFO0FBaUJWd0IsYUFBVyxFQUFFLElBakJIO0FBa0JWQyxpQkFBZSxFQUFFLElBbEJQO0FBb0JWbGEsVUFwQlUsc0JBb0JDO0FBQ1AsU0FBS21hLFlBQUw7QUFDSCxHQXRCUztBQXVCVnJVLEtBdkJVLGVBdUJOUCxJQXZCTSxFQXVCQWdRLEtBdkJBLEVBdUJPO0FBQ2YsUUFBTW5PLElBQUksR0FBRyxLQUFLNFMsS0FBTCxDQUFXelUsSUFBSSxDQUFDSyxFQUFoQixDQUFiO0FBQ0EsUUFBSXdCLElBQUosRUFBVSxPQUFPQSxJQUFQO0FBQ1YsU0FBSzNELElBQUwsQ0FBVSxZQUFWO0FBQ0EsV0FBTyxLQUFLdVcsS0FBTCxDQUFXelUsSUFBSSxDQUFDSyxFQUFoQixJQUFzQixJQUFJd1UsaUJBQUosQ0FBVTdVLElBQVYsRUFBZ0JnUSxLQUFoQixDQUE3QjtBQUNELEdBNUJTO0FBNkJWOEUsU0E3QlUsbUJBNkJGeEwsS0E3QkUsRUE2Qks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDYiwyQkFBaUJBLEtBQWpCLDhIQUF3QjtBQUFBLFlBQWZ0SixJQUFlOztBQUN0QixZQUFJQSxJQUFJLENBQUNJLE9BQUwsQ0FBYXlCLElBQWpCLEVBQXVCO0FBQ3JCLGVBQUt0QixHQUFMLENBQVNQLElBQVQ7QUFDRDtBQUNGO0FBTFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1kLEdBbkNTO0FBb0NWK1UsWUFwQ1Usc0JBb0NDL1UsSUFwQ0QsRUFvQ09nUSxLQXBDUCxFQW9DYztBQUN0QixTQUFLelAsR0FBTCxDQUFTUCxJQUFULEVBQWVnUSxLQUFmLEVBQXNCakksSUFBdEI7QUFDRCxHQXRDUztBQXVDVmlOLG1CQXZDVSw2QkF1Q1EzVSxFQXZDUixFQXVDWTtBQUNwQixXQUFPLEtBQUtvVSxLQUFMLENBQVdwVSxFQUFYLENBQVA7QUFDQSxRQUFJLEtBQUs0VSxPQUFMLENBQWEsS0FBS1IsS0FBbEIsQ0FBSixFQUE4QixLQUFLdlcsSUFBTCxDQUFVLG1CQUFWO0FBQy9CLEdBMUNTO0FBMkNWZ1gsWUEzQ1Usc0JBMkNDN1UsRUEzQ0QsRUEyQ0s7QUFDYixRQUFJLEtBQUtvVSxLQUFMLENBQVdwVSxFQUFYLENBQUosRUFBb0IsS0FBS29VLEtBQUwsQ0FBV3BVLEVBQVgsRUFBZUcsTUFBZjtBQUNyQixHQTdDUztBQThDVjJVLFdBOUNVLHVCQThDRTtBQUNWLFFBQUksQ0FBQyxLQUFLVixLQUFWLEVBQWlCO0FBQ2pCLFFBQU1BLEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUNBLFFBQUlXLElBQUksR0FBRzFYLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JpWSxvQkFBaEIsQ0FBcUMsUUFBckMsRUFBK0M5VyxNQUEvQyxHQUF3RCxNQUF4RCxHQUFpRSxNQUE1RTtBQUFBLFFBQ0lzWixTQUFTLEdBQUdELElBQUksS0FBSyxNQUFULEdBQWtCLElBQWxCLEdBQXlCLEtBRHpDO0FBQUEsUUFFSXZULElBRko7O0FBR0EsU0FBSyxJQUFJWSxDQUFULElBQWNnUyxLQUFkLEVBQXFCO0FBQ25CNVMsVUFBSSxHQUFHNFMsS0FBSyxDQUFDaFMsQ0FBRCxDQUFaOztBQUNBLFVBQUlaLElBQUksQ0FBQzRPLE9BQUwsS0FBaUI0RSxTQUFyQixFQUFnQztBQUM5QnhULFlBQUksQ0FBQ3VULElBQUQsQ0FBSjtBQUNEO0FBQ0Y7QUFDRixHQTFEUztBQTJEVlIsY0EzRFUsMEJBMkRLO0FBQ2IsUUFBTVUsV0FBVyxHQUFHNVgsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQitFLElBQWhCLENBQXFCVyxTQUF6Qzs7QUFDQWxILHVCQUFPMEIsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLFVBQUFDLFFBQVEsRUFBSTtBQUN0QyxVQUFJQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ3FCLElBQXpCLEVBQStCO0FBQzdCLFlBQUlyQixRQUFRLENBQUNxQixJQUFULENBQWNrWixVQUFsQixFQUE4QkQsV0FBVyxDQUFDL1UsR0FBWixDQUFnQixjQUFoQixFQUE5QixLQUNLK1UsV0FBVyxDQUFDOVUsTUFBWixDQUFtQixjQUFuQjtBQUNMLFlBQUl4RixRQUFRLENBQUNxQixJQUFULENBQWNtWixhQUFsQixFQUFpQ0YsV0FBVyxDQUFDL1UsR0FBWixDQUFnQixxQkFBaEIsRUFBakMsS0FDSytVLFdBQVcsQ0FBQzlVLE1BQVosQ0FBbUIscUJBQW5CO0FBQ047QUFDRixLQVBEO0FBUUQsR0FyRVM7QUFzRVZ5VSxTQXRFVSxtQkFzRUZRLEdBdEVFLEVBc0VHO0FBQ1gsV0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsR0FBWixFQUFpQjFaLE1BQXpCO0FBQ0QsR0F4RVM7QUF5RVY2WixtQkF6RVUsNkJBeUVRL1QsSUF6RVIsRUF5RWM7QUFBQTs7QUFDdEIsUUFBTTZTLFdBQVcsR0FBRyxLQUFLQSxXQUFMLEdBQW1CLFVBQUM1WSxDQUFEO0FBQUEsYUFBTyxLQUFJLENBQUMrWixhQUFMLENBQW1CaFUsSUFBbkIsRUFBeUIvRixDQUF6QixDQUFQO0FBQUEsS0FBdkM7O0FBQ0EsUUFBTTZZLGVBQWUsR0FBRyxLQUFLQSxlQUFMLEdBQXVCLFVBQUM3WSxDQUFEO0FBQUEsYUFBTyxLQUFJLENBQUNnYSxnQkFBTCxDQUFzQmpVLElBQXRCLEVBQTRCL0YsQ0FBNUIsQ0FBUDtBQUFBLEtBQS9DOztBQUNBLFFBQU1pYSxHQUFHLEdBQUdyWSxNQUFNLENBQUM5QyxRQUFuQjtBQUNBbWIsT0FBRyxDQUFDblcsZ0JBQUosQ0FBcUIsV0FBckIsRUFBa0M4VSxXQUFsQyxFQUErQyxLQUEvQztBQUNBcUIsT0FBRyxDQUFDblcsZ0JBQUosQ0FBcUIsU0FBckIsRUFBZ0MrVSxlQUFoQyxFQUFpRCxLQUFqRDtBQUNBb0IsT0FBRyxDQUFDblcsZ0JBQUosQ0FBcUIsV0FBckIsRUFBa0M4VSxXQUFsQyxFQUErQyxLQUEvQztBQUNBcUIsT0FBRyxDQUFDblcsZ0JBQUosQ0FBcUIsVUFBckIsRUFBaUMrVSxlQUFqQyxFQUFrRCxLQUFsRDtBQUNELEdBakZTO0FBa0ZWbUIsa0JBbEZVLDRCQWtGT2pVLElBbEZQLEVBa0ZhL0YsQ0FsRmIsRUFrRmdCO0FBQ3hCLFFBQU1pYSxHQUFHLEdBQUdyWSxNQUFNLENBQUM5QyxRQUFuQjtBQUNBbWIsT0FBRyxDQUFDbFcsbUJBQUosQ0FBd0IsV0FBeEIsRUFBcUMsS0FBSzZVLFdBQTFDLEVBQXVELEtBQXZEO0FBQ0FxQixPQUFHLENBQUNsVyxtQkFBSixDQUF3QixTQUF4QixFQUFtQyxLQUFLOFUsZUFBeEMsRUFBeUQsS0FBekQ7QUFDQW9CLE9BQUcsQ0FBQ2xXLG1CQUFKLENBQXdCLFdBQXhCLEVBQXFDLEtBQUs2VSxXQUExQyxFQUF1RCxLQUF2RDtBQUNBcUIsT0FBRyxDQUFDbFcsbUJBQUosQ0FBd0IsVUFBeEIsRUFBb0MsS0FBSzhVLGVBQXpDLEVBQTBELEtBQTFEO0FBRUEsU0FBS3pXLElBQUwsQ0FBVSxlQUFWLEVBQTJCMkQsSUFBM0IsRUFBaUMvRixDQUFqQztBQUNELEdBMUZTO0FBMkZWK1osZUEzRlUseUJBMkZJaFUsSUEzRkosRUEyRlUvRixDQTNGVixFQTJGYTtBQUNyQkEsS0FBQyxDQUFDNk0sY0FBRjtBQUNBLFNBQUt6SyxJQUFMLENBQVUsV0FBVixFQUF1QjJELElBQXZCLEVBQTZCL0YsQ0FBN0I7QUFDRCxHQTlGUztBQStGVmthLGdCQS9GVSwwQkErRksvWCxJQS9GTCxFQStGVztBQUNuQixTQUFLQyxJQUFMLENBQVUsYUFBVixFQUF5QixDQUFDLEtBQUsrVyxPQUFMLENBQWEsS0FBS1IsS0FBbEIsQ0FBMUIsRUFBb0R4VyxJQUFwRDtBQUNEO0FBakdTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSTlFLGlCQUFKLENBQWU7QUFDYmtPLElBQUUsRUFBRTNKLE1BQU0sQ0FBQzlDLFFBREU7QUFFYnFiLFdBQVMsRUFBRSxJQUZFO0FBR2J4YyxRQUFNLEVBQUU7QUFDTnlXLE9BQUcsRUFBRTtBQUNIZ0csYUFBTyxFQUFFO0FBQ1AsYUFBSztBQURFLE9BRE47QUFJSEMscUJBQWUsRUFBRTtBQUNmLGFBQUs7QUFEVTtBQUpkO0FBREMsR0FISztBQWNiQyxvQkFBa0IsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsRUFBaUMsRUFBakMsRUFBcUMsRUFBckMsRUFBeUMsRUFBekMsRUFBNkMsR0FBN0MsRUFBa0QsR0FBbEQsQ0FkUDtBQWViQyxZQUFVLEVBQUU7QUFDVixVQUFNLE9BREk7QUFFVixVQUFNLEdBRkk7QUFFQyxVQUFNLEdBRlA7QUFFWSxVQUFNLEdBRmxCO0FBRXVCLFVBQU0sR0FGN0I7QUFFa0MsVUFBTSxHQUZ4QztBQUdWLFVBQU0sR0FISTtBQUdDLFVBQU0sR0FIUDtBQUdZLFVBQU0sR0FIbEI7QUFHdUIsVUFBTSxHQUg3QjtBQUdrQyxVQUFNLEdBSHhDO0FBSVYsV0FBTyxHQUpHO0FBSUUsV0FBTztBQUpULEdBZkM7QUFzQmJDLFlBdEJhLHNCQXNCRmpQLEVBdEJFLEVBc0JFO0FBQ2IsUUFBTXROLElBQUksR0FBR3NOLEVBQUUsQ0FBQ2tQLE9BQWhCO0FBRUEsV0FBUXhjLElBQUksS0FBSyxVQUFULElBQXVCQSxJQUFJLEtBQUssT0FBaEMsSUFBMkNzTixFQUFFLENBQUNtUCxlQUFILEtBQXVCLE1BQTFFO0FBQ0QsR0ExQlk7QUEyQmJDLFVBM0JhLG9CQTJCSjNhLENBM0JJLEVBMkJEO0FBQUE7O0FBQ1YsUUFBSXFELEdBQUcsR0FBR3JELENBQUMsQ0FBQ3FELEdBQUYsQ0FBTXVYLFdBQU4sRUFBVjtBQUNBLFFBQU1DLE9BQU8sR0FBRzdhLENBQUMsQ0FBQzZhLE9BQWxCO0FBQUEsUUFDSUMsTUFBTSxHQUFJOWEsQ0FBQyxDQUFDK2EsT0FBRixJQUFhL2EsQ0FBQyxDQUFDZ2IsT0FBZixJQUEwQmhiLENBQUMsQ0FBQ2liLE1BQTVCLElBQXNDamIsQ0FBQyxDQUFDa2IsUUFEdEQ7QUFBQSxRQUVJQyxTQUFTLEdBQUcsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQUZoQjtBQUFBLFFBR0lDLGFBQWEsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixDQUhwQjtBQUFBLFFBSUlDLFlBQVksR0FBR0QsYUFBYSxDQUFDM04sTUFBZCxDQUFxQjBOLFNBQXJCLEVBQWdDMU4sTUFBaEMsQ0FBdUMsR0FBdkMsQ0FKbkI7QUFBQSxRQUtJNk4sY0FBYyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBTHJCO0FBT0EsUUFBSWhlLG1CQUFPZSxNQUFQLElBQWlCK2MsYUFBYSxDQUFDek0sUUFBZCxDQUF1QnRMLEdBQXZCLENBQXJCLEVBQWtELE9BQU8sSUFBUDtBQUVsRCxRQUFJLEtBQUtpWCxrQkFBTCxDQUF3QjNMLFFBQXhCLENBQWlDa00sT0FBakMsQ0FBSixFQUErQ3hYLEdBQUcsR0FBRyxLQUFLa1gsVUFBTCxDQUFnQk0sT0FBaEIsQ0FBTjtBQUUvQyxRQUFJLENBQUNRLFlBQVksQ0FBQzFNLFFBQWIsQ0FBc0J0TCxHQUF0QixDQUFELElBQStCekIsTUFBTSxDQUFDVSxZQUFQLEdBQXNCQyxXQUF6RCxFQUFzRSxPQUFPLElBQVA7QUFFdEUsUUFBSSxLQUFLaVksVUFBTCxDQUFnQnhhLENBQUMsQ0FBQ3FGLE1BQWxCLENBQUosRUFBK0IsT0FBTyxJQUFQOztBQUUvQi9ILHVCQUFPMEIsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLFVBQUFDLFFBQVEsRUFBSTtBQUV0QyxVQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLElBQVA7QUFFZixVQUFNcWMsT0FBTyxHQUFHbFksR0FBaEI7QUFDQSxVQUFNbEMsT0FBTyxHQUFHakMsUUFBUSxDQUFDaUMsT0FBekI7QUFDQSxVQUFNRSxTQUFTLEdBQUduQyxRQUFRLENBQUNtQyxTQUEzQjtBQUNBLFVBQU1tYSxXQUFXLEdBQUdyYSxPQUFPLENBQUNrQyxHQUFELENBQTNCO0FBQ0EsVUFBTW9ZLGlCQUFpQixHQUFHRCxXQUFXLElBQUksQ0FBQ0YsY0FBYyxDQUFDM00sUUFBZixDQUF3QnRMLEdBQXhCLENBQTFDO0FBQ0EsVUFBSW9ZLGlCQUFKLEVBQXVCcFksR0FBRyxHQUFHLElBQU47QUFDdkIsVUFBTXFZLE9BQU8sR0FBR3JhLFNBQVMsQ0FBQ2dDLEdBQUQsQ0FBekI7QUFFQSxVQUFJLENBQUNxWSxPQUFMLEVBQWMsT0FBTyxJQUFQOztBQUVkLFVBQUksQ0FBQ1osTUFBTCxFQUFhO0FBQ1gsWUFBSXpYLEdBQUcsS0FBSyxHQUFSLElBQWUsQ0FBQ3FZLE9BQU8sQ0FBQyxDQUFELENBQXZCLElBQThCQSxPQUFPLENBQUMsQ0FBRCxDQUF6QyxFQUE4QztBQUM1QyxlQUFJLENBQUN0WixJQUFMLENBQVUsYUFBVixFQUF5QlIsTUFBTSxDQUFDVSxZQUFQLEdBQXNCMEIsUUFBdEIsRUFBekI7QUFDRCxTQUZELE1BR0ssSUFBSXdYLFdBQVcsSUFBSSxDQUFDRSxPQUFPLENBQUMsQ0FBRCxDQUF2QixJQUE4QkEsT0FBTyxDQUFDLENBQUQsQ0FBekMsRUFBOEM7QUFDakQsZUFBSSxDQUFDdFosSUFBTCxDQUFVLG9CQUFWLEVBQWdDcEMsQ0FBaEMsRUFBbUN1YixPQUFuQztBQUNEO0FBQ0YsT0FQRCxNQU9PO0FBQ0wsWUFBSSxDQUFDRyxPQUFPLENBQUMsQ0FBRCxDQUFaLEVBQWlCLE9BQU8sSUFBUDtBQUVqQixZQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBVzVPLEtBQVgsQ0FBaUIsR0FBakIsQ0FBakI7QUFDQSxZQUFNOE8sRUFBRSxHQUFHRCxRQUFRLENBQUMsQ0FBRCxDQUFuQjtBQUNBLFlBQU1FLEVBQUUsR0FBR0YsUUFBUSxDQUFDLENBQUQsQ0FBbkI7QUFFQSxZQUFJLENBQUMzYixDQUFDLENBQUM0YixFQUFELENBQUYsSUFBV0MsRUFBRSxJQUFJLENBQUM3YixDQUFDLENBQUM2YixFQUFELENBQXZCLEVBQThCLE9BQU8sSUFBUDtBQUU5QixZQUFJeFksR0FBRyxLQUFLLEdBQVosRUFBaUIsS0FBSSxDQUFDakIsSUFBTCxDQUFVLGFBQVYsRUFBeUJSLE1BQU0sQ0FBQ1UsWUFBUCxHQUFzQjBCLFFBQXRCLEVBQXpCLEVBQWpCLEtBRUssSUFBSXdYLFdBQUosRUFBaUI7QUFDcEIsZUFBSSxDQUFDcFosSUFBTCxDQUFVLG9CQUFWLEVBQWdDcEMsQ0FBaEMsRUFBbUN1YixPQUFuQztBQUNELFNBRkksTUFHQSxLQUFJLENBQUNuWixJQUFMLENBQVUsZ0JBQVYsRUFBNEJpQixHQUE1QjtBQUNOO0FBQ0YsS0FyQ0Q7QUFzQ0QsR0FsRlk7QUFtRmJDLG1CQW5GYSw2QkFtRkt0RCxDQW5GTCxFQW1GUTtBQUNuQixTQUFLb0MsSUFBTCxDQUFVLG1CQUFWLEVBQStCLENBQUNSLE1BQU0sQ0FBQ1UsWUFBUCxHQUFzQkMsV0FBdEQ7QUFDRDtBQXJGWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNxcEJlLFlBQVc7QUFFekIsU0FBTyxJQUFJbkYsY0FBSixDQUFZO0FBQ2hCTyxVQUFNLEVBQUU7QUFDTkMsU0FBRyxFQUFFO0FBQ0gseUJBQWlCLFNBRGQ7QUFFSCxzQkFBYyxXQUZYO0FBR0gsZ0NBQXdCLHVCQUhyQjtBQUlILDJCQUFtQjtBQUpoQjtBQURDLEtBRFE7QUFVaEJRLFdBQU8sRUFBRSxJQVZPO0FBV2hCMFYsU0FBSyxFQUFFLENBWFM7QUFZaEJnSSxZQUFRLEVBQUUsQ0FaTTtBQWFoQkMsVUFBTSxFQUFFLENBYlE7QUFjaEJDLGlCQUFhLEVBQUUsRUFkQztBQWdCaEJoRCxXQWhCZ0IsbUJBZ0JSNWEsT0FoQlEsRUFnQkM7QUFDZixVQUFJLENBQUNBLE9BQUwsRUFBYztBQUNkLFVBQUksQ0FBQ3VFLEtBQUssQ0FBQ0MsT0FBTixDQUFjeEUsT0FBZCxDQUFMLEVBQTZCQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBRCxDQUFWO0FBRTdCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFdBQUswVixLQUFMLEdBQWExVixPQUFPLENBQUM2QixNQUFyQjtBQUVBN0IsYUFBTyxDQUFDK1EsT0FBUixDQUFnQixVQUFBM1AsS0FBSyxFQUFJO0FBQ3ZCLFlBQUlBLEtBQUssQ0FBQ2YsS0FBVixFQUFpQixJQUFJd2QsYUFBSixDQUFrQnpjLEtBQWxCLEVBQWpCLEtBQ0ssSUFBSTBjLFFBQUosQ0FBYTFjLEtBQWI7QUFDTixPQUhEO0FBSUQsS0EzQmU7QUE0QmhCWCxVQTVCZ0Isb0JBNEJQO0FBQ1AsV0FBS2lkLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDRCxLQWhDZTtBQWlDaEJHLFNBakNnQixpQkFpQ1YzYyxLQWpDVSxFQWlDSDtBQUNYQSxXQUFLLEdBQUdBLEtBQUssR0FBRyxDQUFDQSxLQUFELENBQUgsR0FBYSxLQUFLcEIsT0FBL0I7QUFDQSxXQUFLUyxNQUFMO0FBQ0EsV0FBS21hLE9BQUwsQ0FBYXhaLEtBQWI7QUFDRCxLQXJDZTtBQXNDaEI0YyxhQXRDZ0IscUJBc0NOQyxNQXRDTSxFQXNDRTtBQUNoQixXQUFLTixNQUFMOztBQUNBLFdBQUssSUFBSTdiLENBQVQsSUFBY21jLE1BQWQ7QUFBc0IsYUFBS0wsYUFBTCxDQUFtQjliLENBQW5CLElBQXdCbWMsTUFBTSxDQUFDbmMsQ0FBRCxDQUE5QjtBQUF0QjtBQUNELEtBekNlO0FBMENoQmdSLHlCQTFDZ0IsbUNBMENRO0FBQ3RCLFVBQUksRUFBRSxLQUFLNEssUUFBUCxLQUFvQixLQUFLaEksS0FBN0IsRUFBb0M7QUFDbEMsYUFBSzFSLElBQUwsQ0FBVSwyQkFBVjtBQUNBLFlBQUksS0FBSzJaLE1BQVQsRUFBaUIsS0FBSzNaLElBQUwsQ0FBVSxvQkFBVixFQUFnQyxLQUFLa2EsU0FBTCxFQUFoQyxFQUFqQixLQUNLLEtBQUtsYSxJQUFMLENBQVUsdUJBQVY7QUFDTjtBQUNGLEtBaERlO0FBaURoQmthLGFBakRnQix1QkFpREo7QUFDVixVQUFNRCxNQUFNLEdBQUcsS0FBS0wsYUFBcEI7QUFDQSxVQUFJTyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxXQUFLLElBQUlyYyxDQUFULElBQWNtYyxNQUFkLEVBQXNCO0FBQ3BCRSxXQUFHLGNBQU9GLE1BQU0sQ0FBQ25jLENBQUQsQ0FBTixDQUFVc2MsTUFBakIsZ0JBQTZCSCxNQUFNLENBQUNuYyxDQUFELENBQU4sQ0FBVTRGLElBQXZDLE9BQUg7QUFDRDs7QUFDRCxhQUFPeVcsR0FBUDtBQUNEO0FBeERlLEdBQVosQ0FBUDtBQTBEQSxDOztBQXB0QkQ7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1FLFk7Ozs7O0FBRUosd0JBQVlqZCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHNGQUFNQSxLQUFOO0FBRUEsVUFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS2tPLElBQUwsR0FBWSxFQUFaO0FBQ0EsVUFBS3NPLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxVQUFLRixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsVUFBS1ksSUFBTCxHQUFZbGQsS0FBSyxDQUFDRyxNQUFOLEdBQWUsTUFBZixHQUF3QixPQUFwQzs7QUFFQSxVQUFLeUMsSUFBTCxDQUFVLHFCQUFWLEVBQWlDNUMsS0FBSyxDQUFDZ08sS0FBTixDQUFZdk4sTUFBN0M7O0FBVGlCO0FBVWxCOzs7O29DQUVld0ksSSxFQUFNa1UsSSxFQUFNQyxFLEVBQUk7QUFDOUJELFVBQUksR0FBR0EsSUFBSSxDQUFDL1ksSUFBTCxDQUFVLElBQVYsQ0FBUDtBQUNBZ1osUUFBRSxHQUFHQSxFQUFFLENBQUNoWixJQUFILENBQVEsSUFBUixDQUFMOztBQUVGLE9BQUMsU0FBU2laLEdBQVQsR0FBZTtBQUFBOztBQUNmLFlBQUlDLE1BQU0sR0FBRyxDQUFDLElBQUlwSixJQUFKLEVBQUQsR0FBYyxHQUEzQjs7QUFFQSxXQUFHO0FBQ0YsY0FBSTtBQUNFaUosZ0JBQUksQ0FBQ2xVLElBQUksQ0FBQ29HLEtBQUwsRUFBRCxDQUFKO0FBQ0QsV0FGTCxDQUVNLE9BQU03TyxDQUFOLEVBQVM7QUFDVG9TLHNCQUFVLENBQUM7QUFBQSxxQkFBTSxNQUFJLENBQUNoUSxJQUFMLENBQVUsc0JBQVYsRUFBa0NwQyxDQUFDLENBQUNnRSxRQUFGLEVBQWxDLENBQU47QUFBQSxhQUFELEVBQXdELENBQXhELENBQVY7QUFDRDtBQUVMLFNBUEQsUUFPU3lFLElBQUksQ0FBQ3hJLE1BQUwsR0FBYyxDQUFkLElBQW1CNmMsTUFBTSxHQUFHLENBQUMsSUFBSXBKLElBQUosRUFQdEM7O0FBU0EsWUFBSWpMLElBQUksQ0FBQ3hJLE1BQUwsR0FBYyxDQUFsQixFQUFxQjJCLE1BQU0sQ0FBQ3dRLFVBQVAsQ0FBa0I7QUFBQSxpQkFBTXlLLEdBQUcsRUFBVDtBQUFBLFNBQWxCLEVBQStCLENBQS9CLEVBQXJCLEtBQ0tELEVBQUU7QUFDUCxPQWREO0FBZUE7Ozs2QkFDUztBQUNQLFVBQUlHLEVBQUUsR0FBRyxLQUFLclAsSUFBTCxDQUFVek4sTUFBbkI7O0FBQ0EsVUFBSThjLEVBQUosRUFBUTtBQUNOLGVBQU1BLEVBQUUsRUFBUixFQUFZO0FBQ1YsaUJBQU8sS0FBS3JQLElBQUwsQ0FBVXFQLEVBQVYsRUFBY0MsSUFBckI7QUFDRDs7QUFDRCxhQUFLNWEsSUFBTCxDQUFVLFlBQVYsRUFBd0IsS0FBSzRaLGFBQTdCO0FBQ0Q7O0FBQ0QsV0FBSzVaLElBQUwsQ0FBVSxzQkFBVixFQUFrQyxLQUFLNUMsS0FBTCxDQUFXdkIsSUFBN0MsRUFBbUQsS0FBSzZkLFFBQXhELEVBQWtFLEtBQUtwTyxJQUF2RSxFQUE2RSxLQUFLZ1AsSUFBbEY7QUFDRDs7OztFQTNDd0J0ZixjOztJQThDckI4ZSxROzs7OztBQUVKLG9CQUFZMWMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixtRkFBTUEsS0FBTjtBQUVBLFdBQUt5ZCxLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLQyxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixHQUFyQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFDLElBQUk1SixJQUFKLEVBQUQsR0FBYyxPQUFLMkosYUFBakM7QUFDQSxXQUFLRSxHQUFMLEdBQVcvZCxLQUFLLENBQUNnTyxLQUFOLENBQVl2TixNQUFaLEtBQXVCLENBQXZCLElBQTRCVCxLQUFLLENBQUNnTyxLQUFOLENBQVksQ0FBWixFQUFlakosRUFBZixJQUFxQixDQUE1RDs7QUFFQSxXQUFLaVosSUFBTDs7QUFYaUI7QUFZbEI7Ozs7MkJBT007QUFDTCxVQUFJaGUsS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBQUEsVUFDSWllLEdBQUcsR0FBRyxFQURWO0FBQUEsVUFDY0MsU0FBUyxHQUFHLEVBRDFCO0FBQUEsVUFFSWxRLEtBQUssR0FBR2hPLEtBQUssQ0FBQ2dPLEtBRmxCO0FBQUEsVUFHSUYsQ0FBQyxHQUFHRSxLQUFLLENBQUN2TixNQUhkO0FBQUEsVUFJSUMsQ0FBQyxHQUFHLENBSlI7QUFBQSxVQUlXZ0UsSUFKWDs7QUFNQSxhQUFPaEUsQ0FBQyxHQUFHb04sQ0FBWCxFQUFjcE4sQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCZ0UsWUFBSSxHQUFHc0osS0FBSyxDQUFDdE4sQ0FBRCxDQUFaO0FBRUEsYUFBS3lkLGtCQUFMLENBQXdCelosSUFBeEIsRUFBOEIwWixnQkFBOUIsQ0FBK0MxWixJQUEvQztBQUVBLFlBQUlBLElBQUksQ0FBQzJCLEtBQUwsQ0FBVzBFLEVBQVgsS0FBa0IsSUFBdEIsRUFBNEJtVCxTQUFTLENBQUN2VyxJQUFWLENBQWVqRCxJQUFmLEVBQTVCLEtBQ0t1WixHQUFHLENBQUN0VyxJQUFKLENBQVNqRCxJQUFUO0FBQ047O0FBRUQsV0FBSytZLEtBQUwsQ0FBVzlWLElBQVgsQ0FBZ0JzVyxHQUFoQjs7QUFFQSxXQUFLdmQsQ0FBQyxHQUFHLENBQUosRUFBT29OLENBQUMsR0FBR29RLFNBQVMsQ0FBQ3pkLE1BQTFCLEVBQWtDQyxDQUFDLEdBQUdvTixDQUF0QyxFQUF5Q3BOLENBQUMsRUFBMUMsRUFBOEM7QUFDNUMsYUFBSytjLEtBQUwsQ0FBVzlWLElBQVgsQ0FBZ0IsQ0FBQ3VXLFNBQVMsQ0FBQ3hkLENBQUQsQ0FBVixDQUFoQjtBQUNEOztBQUVELFdBQUs4WSxPQUFMO0FBQ0Q7Ozt1Q0FDa0I5VSxJLEVBQU07QUFDdkIsVUFBSSxPQUFPQSxJQUFJLENBQUMyQixLQUFMLENBQVd5RSxDQUFsQixLQUF3QixXQUE1QixFQUF5QztBQUN2QyxZQUFJekUsS0FBSyxHQUFHM0IsSUFBSSxDQUFDMkIsS0FBakI7QUFBQSxZQUNJZ1ksY0FBYyxHQUFHO0FBQ2Z2VCxXQUFDLEVBQUV6RSxLQUFLLENBQUNPLFdBRE07QUFFZm1FLFlBQUUsRUFBRTFFLEtBQUssQ0FBQ2lZLGFBRks7QUFHZnBULFlBQUUsRUFBRTdFLEtBQUssQ0FBQ2tZLG1CQUhLO0FBSWZ0VCxZQUFFLEVBQUU1RSxLQUFLLENBQUNtWSxxQkFKSztBQUtmclQsWUFBRSxFQUFFOUUsS0FBSyxDQUFDb1ksaUJBTEs7QUFNZnJULFlBQUUsRUFBRS9FLEtBQUssQ0FBQ3FZLHVCQU5LO0FBT2ZyVCxZQUFFLEVBQUVoRixLQUFLLENBQUNzWTtBQVBLLFNBRHJCO0FBVUEsZUFBT2phLElBQUksQ0FBQzJCLEtBQVo7QUFDQTNCLFlBQUksQ0FBQzJCLEtBQUwsR0FBYWdZLGNBQWI7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O3FDQUNnQjNaLEksRUFBTTtBQUNyQixVQUFJNEIsSUFBSSxHQUFHNUIsSUFBSSxDQUFDNEIsSUFBaEI7QUFBQSxVQUNJc1ksV0FBVyxHQUFHdFksSUFBSSxDQUFDOEssSUFBTCxFQURsQjtBQUFBLFVBRUl5TixZQUFZLEdBQUcsS0FBS0MsT0FBTCxDQUFhcGEsSUFBSSxDQUFDNEIsSUFBbEIsQ0FGbkI7QUFJQTVCLFVBQUksQ0FBQzhZLElBQUwsR0FBWTtBQUNWdUIsa0JBQVUsRUFBRXpZLElBQUksQ0FBQzdGLE1BRFA7QUFFVm1lLG1CQUFXLEVBQUVBLFdBRkg7QUFHVkkseUJBQWlCLEVBQUVKLFdBQVcsQ0FBQ25lLE1BSHJCO0FBSVZvZSxvQkFBWSxFQUFFQSxZQUpKO0FBS1ZJLDBCQUFrQixFQUFFSixZQUFZLENBQUNwZSxNQUx2QjtBQU1WeWUseUJBQWlCLEVBQUUsRUFOVDtBQU9WQyw0QkFBb0IsRUFBRSxFQVBaO0FBUVZDLDBCQUFrQixFQUFFLEVBUlY7QUFTVkMsb0JBQVksRUFBRSxFQVRKO0FBVVZDLDRCQUFvQixFQUFFO0FBVlosT0FBWjtBQWFBNWEsVUFBSSxDQUFDdkUsTUFBTCxHQUFjLEtBQUtILEtBQUwsQ0FBV0csTUFBekI7QUFDRDs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBSSxLQUFLd2QsS0FBTCxLQUFlLENBQW5CLEVBQXNCLEtBQUs0QixhQUFMO0FBRXRCLFVBQUl2UixLQUFLLEdBQUcsS0FBS0EsS0FBTCxHQUFhLEtBQUt5UCxLQUFMLENBQVdwTyxLQUFYLEVBQXpCO0FBQUEsVUFDSTVPLE1BQU0sR0FBR3VOLEtBQUssR0FBR0EsS0FBSyxDQUFDdk4sTUFBVCxHQUFrQixDQURwQztBQUdBLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxVQUFJQSxNQUFKLEVBQVk7QUFDVixhQUFLK2UsZ0JBQUwsQ0FBc0JwZCxNQUFNLENBQUM5QyxRQUFQLENBQWdCK0UsSUFBdEMsRUFDS29iLGdCQURMLENBQ3NCelIsS0FEdEIsRUFDNkJ2TixNQUQ3QjtBQUdBLFlBQUksS0FBS2tkLEtBQUwsS0FBZSxDQUFmLElBQW9CbGQsTUFBTSxHQUFHLENBQWpDLEVBQ0ksS0FBS2lmLG9CQUFMO0FBRUosYUFBS0MsbUJBQUwsR0FDS0MsZ0JBREwsR0FFS0MsYUFGTDtBQUlBLGFBQUtsQyxLQUFMOztBQUVBLFlBQUksS0FBS0YsS0FBTCxDQUFXaGQsTUFBZixFQUF1QjtBQUNyQixjQUFJLEtBQUtxZixLQUFMLEdBQWEsQ0FBQyxJQUFJNUwsSUFBSixFQUFsQixFQUE4QnRCLFVBQVUsQ0FBQztBQUFBLG1CQUFNLE1BQUksQ0FBQzRHLE9BQUwsRUFBTjtBQUFBLFdBQUQsRUFBdUIsQ0FBdkIsQ0FBVixDQUE5QixLQUNLLEtBQUtBLE9BQUw7QUFDTixTQUhELE1BSUssS0FBS3FELE1BQUw7QUFDTixPQWxCRCxNQW1CSyxLQUFLQSxNQUFMO0FBQ047OztvQ0FDZTtBQUNkLFVBQUk3TyxLQUFLLEdBQUcsS0FBS3lQLEtBQWpCO0FBQUEsVUFDSTNQLENBQUMsR0FBR0UsS0FBSyxHQUFHQSxLQUFLLENBQUN2TixNQUFULEdBQWtCLENBRC9CO0FBQUEsVUFFSStjLElBQUksR0FBRyxFQUZYO0FBQUEsVUFHSXVDLEdBQUcsR0FBRyxFQUhWO0FBQUEsVUFJSXJmLENBQUMsR0FBRyxDQUpSO0FBQUEsVUFLSWdFLElBTEo7QUFBQSxVQUtVNFEsQ0FMVjs7QUFPQSxhQUFPeEgsQ0FBQyxFQUFSLEVBQVk7QUFDVixZQUFJLENBQUNFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNyTixNQUFkLEVBQXNCO0FBQ3RCaUUsWUFBSSxHQUFHc0osS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBUyxDQUFULENBQVA7QUFDQTBQLFlBQUksQ0FBQzlZLElBQUksQ0FBQ0ssRUFBTixDQUFKLEdBQWdCTCxJQUFoQjtBQUNEOztBQUNELFdBQUsrWSxLQUFMLEdBQWEsRUFBYjs7QUFFQSxXQUFLbkksQ0FBQyxHQUFHa0ksSUFBSSxDQUFDL2MsTUFBZCxFQUFzQkMsQ0FBQyxHQUFHNFUsQ0FBMUIsRUFBNkI1VSxDQUFDLEVBQTlCLEVBQWtDO0FBQ2hDLFlBQUk4YyxJQUFJLENBQUM5YyxDQUFELENBQVIsRUFBYSxLQUFLK2MsS0FBTCxDQUFXOVYsSUFBWCxDQUFnQixDQUFDNlYsSUFBSSxDQUFDOWMsQ0FBRCxDQUFMLENBQWhCO0FBQ2Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztxQ0FDZ0JzTixLLEVBQU9GLEMsRUFBRztBQUN6QixVQUFJa1Msb0JBQW9CLEdBQUcsS0FBS0Esb0JBQWhDO0FBQUEsVUFDSUMseUJBQXlCLEdBQUcsS0FBS0EseUJBQUwsR0FBaUMsRUFEakU7QUFBQSxVQUVJQyxZQUFZLEdBQUcsRUFGbkI7QUFBQSxVQUdJeGIsSUFISjtBQUFBLFVBR1V5YixRQUhWO0FBQUEsVUFHb0J0QixZQUhwQjtBQUFBLFVBR2tDSSxrQkFIbEM7QUFBQSxVQUdzRHRULENBSHREO0FBQUEsVUFHeURKLFdBSHpEOztBQUtBLGFBQU91QyxDQUFDLEVBQVIsRUFBWTtBQUNWbkMsU0FBQyxHQUFHak4sU0FBSjtBQUNBZ0csWUFBSSxHQUFHc0osS0FBSyxDQUFDRixDQUFELENBQVo7QUFDQXFTLGdCQUFRLEdBQUd6YixJQUFJLENBQUM4WSxJQUFoQjs7QUFFQSxZQUFJLENBQUMyQyxRQUFMLEVBQWU7QUFDYm5TLGVBQUssQ0FBQ3VCLE1BQU4sQ0FBYXpCLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQTtBQUNEOztBQUVELFlBQUlxUyxRQUFRLENBQUNqQixpQkFBVCxDQUEyQnplLE1BQS9CLEVBQXVDO0FBRXJDd2YsbUNBQXlCLEdBQUdBLHlCQUF5QixDQUFDaFMsTUFBMUIsQ0FBaUNrUyxRQUFRLENBQUNqQixpQkFBMUMsQ0FBNUI7QUFDQWdCLHNCQUFZLEdBQUdBLFlBQVksQ0FBQ2pTLE1BQWIsQ0FBb0JrUyxRQUFRLENBQUNoQixvQkFBN0IsQ0FBZjtBQUVELFNBTEQsTUFLTztBQUVMTixzQkFBWSxHQUFHc0IsUUFBUSxDQUFDdEIsWUFBeEI7QUFDQUksNEJBQWtCLEdBQUdrQixRQUFRLENBQUNsQixrQkFBOUI7O0FBRUEsaUJBQU90VCxDQUFDLEtBQUssQ0FBQyxDQUFkLEVBQWlCO0FBQ2YsZ0JBQUlBLENBQUMsS0FBS2pOLFNBQVYsRUFBcUJpTixDQUFDLEdBQUcsQ0FBQyxDQUFMO0FBQ3JCQSxhQUFDLEdBQUdxVSxvQkFBb0IsQ0FBQ3RRLE9BQXJCLENBQTZCbVAsWUFBN0IsRUFBMkNsVCxDQUFDLEdBQUcsQ0FBL0MsQ0FBSjtBQUNBSix1QkFBVyxHQUFHSSxDQUFDLEdBQUdzVCxrQkFBbEI7QUFDQWtCLG9CQUFRLENBQUNqQixpQkFBVCxDQUEyQnZYLElBQTNCLENBQWdDLENBQUNnRSxDQUFELEVBQUlKLFdBQUosRUFBaUI3RyxJQUFqQixDQUFoQztBQUNBeWIsb0JBQVEsQ0FBQ2hCLG9CQUFULENBQThCeFgsSUFBOUIsQ0FBbUM0RCxXQUFuQztBQUNBMFUscUNBQXlCLENBQUN0WSxJQUExQixDQUErQixDQUFDZ0UsQ0FBRCxFQUFJSixXQUFKLEVBQWlCN0csSUFBakIsQ0FBL0I7QUFDQXdiLHdCQUFZLENBQUN2WSxJQUFiLENBQWtCNEQsV0FBbEI7QUFDRDs7QUFFRDRVLGtCQUFRLENBQUNqQixpQkFBVCxDQUEyQjNTLEdBQTNCO0FBQ0EwVCxtQ0FBeUIsQ0FBQzFULEdBQTFCO0FBQ0EyVCxzQkFBWSxDQUFDM1QsR0FBYjs7QUFFQSxjQUFJLENBQUM0VCxRQUFRLENBQUNqQixpQkFBVCxDQUEyQnplLE1BQWhDLEVBQXdDO0FBQ3RDLGlCQUFLeU4sSUFBTCxDQUFVdkcsSUFBVixDQUFlakQsSUFBZjtBQUNBLGlCQUFLOFgsYUFBTCxDQUFtQjlYLElBQUksQ0FBQ0ssRUFBeEIsSUFBOEI7QUFBRXVCLGtCQUFJLEVBQUU1QixJQUFJLENBQUM0QixJQUFiO0FBQW1CMFcsb0JBQU0sRUFBRXBjLE9BQU8sQ0FBQzZQLElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQ0FBeEI7QUFBM0IsYUFBOUI7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsV0FBSzBQLDBCQUFMLENBQWdDSCx5QkFBaEM7QUFDQSxXQUFLSSxXQUFMLEdBQW1CbFMsSUFBSSxDQUFDQyxHQUFMLENBQVNDLEtBQVQsQ0FBZSxJQUFmLEVBQXFCNlIsWUFBckIsQ0FBbkI7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytDQUMwQkksUyxFQUFXO0FBQ3BDLFVBQUl4UyxDQUFDLEdBQUd3UyxTQUFTLENBQUM3ZixNQUFsQjtBQUFBLFVBQ0krYyxJQUFJLEdBQUcsRUFEWDtBQUFBLFVBRUk5YyxDQUFDLEdBQUcsQ0FGUjtBQUFBLFVBR0kyUixHQUhKO0FBQUEsVUFHU2pJLEtBSFQ7QUFBQSxVQUdnQmtMLENBSGhCOztBQUtBLGFBQU94SCxDQUFDLEVBQVIsRUFBWTtBQUNWdUUsV0FBRyxHQUFHaU8sU0FBUyxDQUFDeFMsQ0FBRCxDQUFmO0FBQ0ExRCxhQUFLLEdBQUdpSSxHQUFHLENBQUMsQ0FBRCxDQUFYO0FBRUEsWUFBSW1MLElBQUksQ0FBQ3BULEtBQUQsQ0FBUixFQUFpQm9ULElBQUksQ0FBQ2pPLE1BQUwsQ0FBWW5GLEtBQUssR0FBRyxDQUFwQixFQUF1QixDQUF2QixFQUEwQmlJLEdBQTFCLEVBQWpCLEtBQ0ttTCxJQUFJLENBQUNwVCxLQUFELENBQUosR0FBY2lJLEdBQWQ7QUFDTjs7QUFDRGlELE9BQUMsR0FBR2tJLElBQUksQ0FBQy9jLE1BQVQ7QUFDQSxXQUFLd2YseUJBQUwsR0FBaUMsRUFBakM7O0FBRUEsYUFBT3ZmLENBQUMsR0FBRzRVLENBQVgsRUFBYzVVLENBQUMsRUFBZjtBQUNFLFlBQUk4YyxJQUFJLENBQUM5YyxDQUFELENBQVIsRUFBYSxLQUFLdWYseUJBQUwsQ0FBK0J0WSxJQUEvQixDQUFvQzZWLElBQUksQ0FBQzljLENBQUQsQ0FBeEM7QUFEZjtBQUVEOzs7MkNBQ3NCO0FBQ3JCLFVBQUk0ZixTQUFTLEdBQUcsS0FBS0wseUJBQXJCO0FBQUEsVUFDSXRVLENBQUMsR0FBRzJVLFNBQVMsQ0FBQzdmLE1BRGxCO0FBQUEsVUFFSXlkLFNBQVMsR0FBRyxFQUZoQjtBQUFBLFVBR0lxQyxJQUhKO0FBQUEsVUFHVUMsSUFIVjtBQUFBLFVBR2dCOWYsQ0FIaEI7QUFBQSxVQUdtQnVTLEVBSG5CO0FBQUEsVUFHdUJDLEVBSHZCO0FBQUEsVUFHMkJRLEdBSDNCO0FBQUEsVUFHZ0NFLEdBSGhDO0FBQUEsVUFHcUM3TyxFQUhyQzs7QUFLQSxVQUFJNEcsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNULGVBQU9BLENBQUMsS0FBSyxDQUFiLEVBQWdCO0FBQ2Q0VSxjQUFJLEdBQUdELFNBQVMsQ0FBQzNVLENBQUMsR0FBRyxDQUFMLENBQWhCO0FBQ0E2VSxjQUFJLEdBQUdGLFNBQVMsQ0FBQzNVLENBQUQsQ0FBaEI7QUFDQXNILFlBQUUsR0FBR3NOLElBQUksQ0FBQyxDQUFELENBQVQ7QUFDQXJOLFlBQUUsR0FBR3NOLElBQUksQ0FBQyxDQUFELENBQVQ7QUFDQTlNLGFBQUcsR0FBR1QsRUFBRSxDQUFDbE8sRUFBVDtBQUNBNk8sYUFBRyxHQUFHVixFQUFFLENBQUNuTyxFQUFUO0FBRUEsY0FBSTJPLEdBQUcsS0FBS0UsR0FBWixFQUFpQjs7QUFFakIsY0FBSTJNLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUMsSUFBSSxDQUFDLENBQUQsQ0FBZCxJQUFxQkQsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxJQUFJLENBQUMsQ0FBRCxDQUF2QyxFQUE0QztBQUUxQyxnQkFBSTlNLEdBQUcsR0FBR0UsR0FBVixFQUFlO0FBQ2I3TyxnQkFBRSxHQUFHNk8sR0FBTDs7QUFFQSxrQkFBSSxDQUFDc0ssU0FBUyxDQUFDL08sUUFBVixDQUFtQnBLLEVBQW5CLENBQUwsRUFBNkI7QUFDM0IscUJBQUswYixRQUFMLENBQWN2TixFQUFkO0FBQ0FnTCx5QkFBUyxDQUFDdlcsSUFBVixDQUFlNUMsRUFBZjtBQUNEO0FBQ0YsYUFQRCxNQVFLO0FBQ0hBLGdCQUFFLEdBQUcyTyxHQUFMOztBQUVBLGtCQUFJLENBQUN3SyxTQUFTLENBQUMvTyxRQUFWLENBQW1CcEssRUFBbkIsQ0FBTCxFQUE2QjtBQUMzQixxQkFBSzBiLFFBQUwsQ0FBY3hOLEVBQWQ7QUFDQWlMLHlCQUFTLENBQUN2VyxJQUFWLENBQWU1QyxFQUFmO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0Q0RyxTQUFDLEdBQUd1UyxTQUFTLENBQUN6ZCxNQUFkOztBQUVBLGFBQUtDLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lMLENBQWhCLEVBQW1CakwsQ0FBQyxFQUFwQjtBQUNFLGVBQUtnZ0IsU0FBTCxDQUFleEMsU0FBUyxDQUFDeGQsQ0FBRCxDQUF4QjtBQURGO0FBRUQ7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs4QkFDU3FFLEUsRUFBSTtBQUNaLFVBQUl1YixTQUFTLEdBQUcsS0FBS0wseUJBQXJCO0FBQUEsVUFDSXRVLENBQUMsR0FBRzJVLFNBQVMsQ0FBQzdmLE1BRGxCOztBQUdBLGFBQU1rTCxDQUFDLEVBQVAsRUFBVztBQUNULFlBQUkyVSxTQUFTLENBQUMzVSxDQUFELENBQVQsQ0FBYSxDQUFiLEVBQWdCNUcsRUFBaEIsS0FBdUJBLEVBQTNCLEVBQ0UsS0FBS2tiLHlCQUFMLENBQStCMVEsTUFBL0IsQ0FBc0M1RCxDQUF0QyxFQUF5QyxDQUF6QztBQUNIO0FBQ0Y7Ozs2QkFDUWpILEksRUFBTTtBQUNiLFVBQUkrWSxLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFBQSxVQUNJM1AsQ0FBQyxHQUFHMlAsS0FBSyxDQUFDaGQsTUFEZDtBQUFBLFVBRUlrZ0IsZUFBZSxHQUFHLEtBRnRCOztBQUlBLGFBQU83UyxDQUFDLEVBQVIsRUFBWTtBQUNWLFlBQUkyUCxLQUFLLENBQUMzUCxDQUFELENBQUwsQ0FBUyxDQUFULE1BQWdCcEosSUFBcEIsRUFBMEI7QUFDeEJpYyx5QkFBZSxHQUFHLElBQWxCO0FBQ0E7QUFDRDtBQUNGOztBQUNELFVBQUksQ0FBQ0EsZUFBTCxFQUNFLEtBQUtsRCxLQUFMLENBQVc5VixJQUFYLENBQWdCLENBQUNqRCxJQUFELENBQWhCO0FBQ0g7OzswQ0FDcUI7QUFDcEIsVUFBSXdDLEtBQUssR0FBRyxLQUFLMFosYUFBakI7QUFBQSxVQUNJelosQ0FBQyxHQUFHRCxLQUFLLEdBQUdBLEtBQUssQ0FBQ3pHLE1BQVQsR0FBa0IsQ0FEL0I7QUFBQSxVQUVJb08sT0FBTyxHQUFHLEtBQUtvUix5QkFGbkI7QUFBQSxVQUdJdEMsS0FBSyxHQUFHLEtBQUtBLEtBSGpCO0FBQUEsVUFJSUQsS0FBSyxHQUFHLEtBQUtBLEtBQUwsR0FBYSxFQUp6QjtBQUFBLFVBS0ltRCxTQUFTLEdBQUcsRUFMaEI7QUFBQSxVQU1JbmdCLENBQUMsR0FBRyxDQU5SO0FBQUEsVUFNV29nQixLQUFLLEdBQUcsQ0FObkI7QUFBQSxVQU9JQyxjQVBKO0FBQUEsVUFPb0JDLGlCQVBwQjtBQUFBLFVBUUkxWixJQVJKO0FBQUEsVUFRVTJaLFNBUlY7QUFBQSxVQVFxQkMsZUFSckI7QUFBQSxVQVNJeGMsSUFUSjtBQUFBLFVBU1V5YyxJQVRWO0FBQUEsVUFTZ0JyVCxDQVRoQjtBQUFBLFVBU21CeEMsYUFUbkI7QUFBQSxVQVNrQ0MsV0FUbEM7QUFBQSxVQVMrQy9LLENBVC9DO0FBQUEsVUFTa0Q0Z0IsQ0FUbEQ7QUFBQSxVQVNxRHJjLEVBVHJEO0FBQUEsVUFTeUQ0RyxDQVR6RDtBQUFBLFVBUzREMFYsQ0FUNUQ7QUFBQSxVQVMrRHBTLENBVC9EO0FBQUEsVUFTa0U5QyxDQVRsRTtBQUFBLFVBVUltVixtQkFWSjtBQUFBLFVBVXlCQyxhQVZ6QjtBQUFBLFVBVXdDckQsU0FWeEM7QUFBQSxVQVVtRHNELG9CQVZuRDs7QUFZQSxhQUFPOWdCLENBQUMsR0FBR3lHLENBQVgsRUFBY3pHLENBQUMsRUFBZixFQUFtQjtBQUNqQjRHLFlBQUksR0FBR0osS0FBSyxDQUFDeEcsQ0FBRCxDQUFaO0FBQ0F1Z0IsaUJBQVMsR0FBRyxLQUFLbkMsT0FBTCxDQUFheFgsSUFBSSxDQUFDMkIsSUFBbEIsQ0FBWjtBQUNBaVksdUJBQWUsR0FBR0QsU0FBUyxDQUFDeGdCLE1BQTVCO0FBQ0FxZ0IsYUFBSyxJQUFJSSxlQUFUO0FBQ0FwVCxTQUFDLEdBQUdlLE9BQU8sQ0FBQ3BPLE1BQVo7QUFDQThnQixxQkFBYSxHQUFHLEVBQWhCO0FBQ0FyRCxpQkFBUyxHQUFHLEVBQVo7QUFDQXNELDRCQUFvQixHQUFHLElBQXZCOztBQUVBLGVBQU8xVCxDQUFDLEVBQVIsRUFBWTtBQUNWeEMsdUJBQWEsR0FBR3VELE9BQU8sQ0FBQ2YsQ0FBRCxDQUFQLENBQVcsQ0FBWCxDQUFoQjtBQUNBdkMscUJBQVcsR0FBR3NELE9BQU8sQ0FBQ2YsQ0FBRCxDQUFQLENBQVcsQ0FBWCxDQUFkO0FBQ0FwSixjQUFJLEdBQUdtSyxPQUFPLENBQUNmLENBQUQsQ0FBUCxDQUFXLENBQVgsQ0FBUDtBQUNBL0ksWUFBRSxHQUFHTCxJQUFJLENBQUNLLEVBQVY7QUFFQUwsY0FBSSxDQUFDOFksSUFBTCxDQUFVK0QsYUFBVixHQUEwQjdjLElBQUksQ0FBQzhZLElBQUwsQ0FBVStELGFBQVYsSUFBMkIsRUFBckQ7QUFDQTdjLGNBQUksQ0FBQzhZLElBQUwsQ0FBVWlFLFdBQVYsR0FBd0IvYyxJQUFJLENBQUM4WSxJQUFMLENBQVVpRSxXQUFWLElBQXlCLEVBQWpEOztBQUVBLGNBQ0UsQ0FBQy9jLElBQUksQ0FBQzhZLElBQUwsQ0FBVStELGFBQVYsQ0FBd0JwUyxRQUF4QixDQUFpQzdELGFBQWpDLENBQUQsSUFDQXdWLEtBQUssR0FBR3hWLGFBRFIsSUFFQTVHLElBQUksQ0FBQzhZLElBQUwsQ0FBVTRCLGtCQUFWLENBQTZCM2UsTUFBN0IsR0FBc0NpRSxJQUFJLENBQUM4WSxJQUFMLENBQVUwQixpQkFBVixDQUE0QnplLE1BSHBFLEVBSUU7QUFDQSxnQkFBSStnQixvQkFBb0IsSUFBSUEsb0JBQW9CLENBQUN6YyxFQUFyQixHQUEwQkwsSUFBSSxDQUFDSyxFQUEzRCxFQUErRDtBQUM3RCxrQkFBSTRZLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YscUJBQUs4QyxRQUFMLENBQWMvYixJQUFkO0FBQ0F3Wix5QkFBUyxDQUFDdlcsSUFBVixDQUFlNUMsRUFBZjtBQUNEOztBQUNEOEoscUJBQU8sQ0FBQ1UsTUFBUixDQUFlekIsQ0FBZixFQUFrQixDQUFsQjtBQUVBO0FBQ0QsYUFSRCxNQVFPO0FBQ0wsa0JBQUksQ0FBQyxLQUFLNFQsb0JBQUwsQ0FBMEJoZCxJQUExQixFQUFnQzRDLElBQWhDLENBQUwsRUFBNEM7QUFDMUMsb0JBQUlxVyxLQUFLLEtBQUssQ0FBVixJQUFlNVksRUFBRSxLQUFLLENBQTFCLEVBQTZCO0FBQzNCLHVCQUFLMGIsUUFBTCxDQUFjL2IsSUFBZDtBQUNBd1osMkJBQVMsQ0FBQ3ZXLElBQVYsQ0FBZTVDLEVBQWY7QUFDRDs7QUFDRDhKLHVCQUFPLENBQUNVLE1BQVIsQ0FBZXpCLENBQWYsRUFBa0IsQ0FBbEI7QUFFQTtBQUNELGVBUkQsTUFTSztBQUNIcEosb0JBQUksQ0FBQzhZLElBQUwsQ0FBVTRCLGtCQUFWLENBQTZCelgsSUFBN0IsQ0FBa0M7QUFBRUwsc0JBQUksRUFBRUEsSUFBUjtBQUFjK0sscUJBQUcsRUFBRTNSO0FBQW5CLGlCQUFsQztBQUNBZ0Usb0JBQUksQ0FBQzhZLElBQUwsQ0FBVStELGFBQVYsQ0FBd0I1WixJQUF4QixDQUE2QjJELGFBQTdCO0FBQ0FpVyw2QkFBYSxDQUFDNVosSUFBZCxDQUFtQjVDLEVBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUNELGNBQ0VMLElBQUksQ0FBQzhZLElBQUwsQ0FBVStELGFBQVYsQ0FBd0JwUyxRQUF4QixDQUFpQzdELGFBQWpDLEtBQ0EsQ0FBQzVHLElBQUksQ0FBQzhZLElBQUwsQ0FBVWlFLFdBQVYsQ0FBc0J0UyxRQUF0QixDQUErQjVELFdBQS9CLENBREQsSUFFQ3VWLEtBQUssR0FBR3ZWLFdBQVQsSUFBeUIsQ0FIM0IsRUFJRTtBQUNBLGdCQUFJNEMsSUFBSSxDQUFDbUIsR0FBTCxDQUFTakIsS0FBVCxDQUFlLElBQWYsRUFBcUJrVCxhQUFyQixJQUFzQ3hjLEVBQTFDLEVBQThDO0FBQzVDLGtCQUFJNFksS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZixxQkFBSzhDLFFBQUwsQ0FBYy9iLElBQWQ7QUFDQXdaLHlCQUFTLENBQUN2VyxJQUFWLENBQWU1QyxFQUFmO0FBQ0Q7O0FBQ0Q4SixxQkFBTyxDQUFDVSxNQUFSLENBQWV6QixDQUFmLEVBQWtCLENBQWxCO0FBQ0QsYUFORCxNQU1PO0FBQ0x3VCxpQ0FBbUIsR0FBRyxLQUFLSyxlQUFMLENBQXFCamQsSUFBckIsRUFBMkI0QyxJQUEzQixFQUFpQ2lFLFdBQVcsSUFBSXVWLEtBQUssR0FBR0ksZUFBWixDQUE1QyxDQUF0QjtBQUNBeGMsa0JBQUksQ0FBQzhZLElBQUwsQ0FBVThCLG9CQUFWLENBQStCM1gsSUFBL0IsQ0FBb0MyWixtQkFBcEM7QUFDQTVjLGtCQUFJLENBQUM4WSxJQUFMLENBQVVpRSxXQUFWLENBQXNCOVosSUFBdEIsQ0FBMkI0RCxXQUEzQjtBQUNBN0csa0JBQUksQ0FBQzhZLElBQUwsQ0FBVTZCLFlBQVYsQ0FBdUIvVCxhQUF2QixJQUF3QztBQUN0Q2hFLG9CQUFJLEVBQUVBLElBRGdDO0FBRXRDZ1Esc0JBQU0sRUFBRWdLLG1CQUY4QjtBQUd0Q2pQLG1CQUFHLEVBQUUzUjtBQUhpQyxlQUF4Qzs7QUFLQSxrQkFBSSxDQUFDbWdCLFNBQVMsQ0FBQzFSLFFBQVYsQ0FBbUJwSyxFQUFuQixDQUFMLEVBQTZCO0FBQzNCMlkscUJBQUssQ0FBQy9WLElBQU4sQ0FBV2pELElBQVg7QUFDQW1jLHlCQUFTLENBQUNsWixJQUFWLENBQWU1QyxFQUFmO0FBQ0Q7O0FBRUR5YyxrQ0FBb0IsR0FBRzljLElBQXZCO0FBQ0FtSyxxQkFBTyxDQUFDVSxNQUFSLENBQWV6QixDQUFmLEVBQWtCLENBQWxCO0FBQ0Q7QUFDRjtBQUNGOztBQUNEbkMsU0FBQyxHQUFHdVMsU0FBUyxDQUFDemQsTUFBZDtBQUVBLFlBQUlrTCxDQUFKLEVBQU8sS0FBS3NELENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3RELENBQWhCLEVBQW1Cc0QsQ0FBQyxFQUFwQjtBQUF3QixlQUFLeVIsU0FBTCxDQUFleEMsU0FBUyxDQUFDalAsQ0FBRCxDQUF4QjtBQUF4QjtBQUVQLFlBQUk2UixLQUFLLEdBQUcsS0FBS1QsV0FBakIsRUFBOEI7QUFDL0I7O0FBQ0QsVUFBSTFDLEtBQUssS0FBSyxDQUFWLElBQWUsS0FBS0ksR0FBeEIsRUFBNkI7QUFDM0IsYUFBSyxJQUFJcmQsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxLQUFLc04sS0FBTCxDQUFXdk4sTUFBL0IsRUFBdUNDLEVBQUMsRUFBeEMsRUFBNEM7QUFDMUMsY0FBSWdFLEtBQUksR0FBRyxLQUFLc0osS0FBTCxDQUFXdE4sRUFBWCxDQUFYOztBQUNBLGNBQUksQ0FBQ21nQixTQUFTLENBQUMxUixRQUFWLENBQW1CekssS0FBSSxDQUFDSyxFQUF4QixDQUFMLEVBQWtDO0FBQ2hDLGlCQUFLbUosSUFBTCxDQUFVdkcsSUFBVixDQUFlakQsS0FBZjtBQUNBLGlCQUFLOFgsYUFBTCxDQUFtQjlYLEtBQUksQ0FBQ0ssRUFBeEIsSUFBOEI7QUFBRXVCLGtCQUFJLEVBQUU1QixLQUFJLENBQUM0QixJQUFiO0FBQW1CMFcsb0JBQU0sRUFBRXBjLE9BQU8sQ0FBQzZQLElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQ0FBeEI7QUFBM0IsYUFBOUI7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozt1Q0FDa0I7QUFDakIsVUFBSWdOLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUFBLFVBQ0loZCxDQUFDLEdBQUdnZCxLQUFLLENBQUNqZCxNQURkO0FBQUEsVUFFSWlFLElBRko7QUFBQSxVQUVVMGEsa0JBRlY7QUFBQSxVQUU4QnpULENBRjlCO0FBQUEsVUFFaUNyRSxJQUZqQztBQUFBLFVBRXVDakYsTUFGdkM7QUFBQSxVQUUrQ3NJLE1BRi9DO0FBQUEsVUFFdURDLFdBRnZEO0FBQUEsVUFFb0VnWCxnQkFGcEU7QUFBQSxVQUVzRkMsT0FGdEY7QUFBQSxVQUUrRnRGLE1BRi9GO0FBQUEsVUFFdUc4RSxDQUZ2RztBQUFBLFVBR0loQyxZQUhKO0FBQUEsVUFHa0JrQyxhQUhsQjtBQUFBLFVBR2lDbGIsS0FIakM7QUFBQSxVQUd3Q08sV0FIeEM7QUFBQSxVQUdxRDRXLElBSHJEO0FBQUEsVUFHMkR1QixVQUgzRDtBQUFBLFVBR3VFM1UsS0FIdkU7O0FBS0EsYUFBTzFKLENBQUMsRUFBUixFQUFZO0FBQ1ZnRSxZQUFJLEdBQUdnWixLQUFLLENBQUNoZCxDQUFELENBQVo7QUFDQW1oQixlQUFPLEdBQUcsRUFBVjtBQUNBdEYsY0FBTSxHQUFHLEtBQVQ7QUFDQWlCLFlBQUksR0FBRzlZLElBQUksQ0FBQzhZLElBQVo7QUFDQTRCLDBCQUFrQixHQUFHNUIsSUFBSSxDQUFDNEIsa0JBQTFCO0FBQ0FDLG9CQUFZLEdBQUc3QixJQUFJLENBQUM2QixZQUFwQjtBQUNBa0MscUJBQWEsR0FBRy9ELElBQUksQ0FBQytELGFBQXJCO0FBQ0E1VixTQUFDLEdBQUd5VCxrQkFBa0IsQ0FBQzNlLE1BQXZCO0FBQ0E0RixhQUFLLEdBQUczQixJQUFJLENBQUMyQixLQUFiO0FBQ0FPLG1CQUFXLEdBQUdQLEtBQUssQ0FBQ3lFLENBQXBCO0FBQ0FpVSxrQkFBVSxHQUFHdkIsSUFBSSxDQUFDdUIsVUFBbEI7O0FBRUEsWUFBSXBULENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDVCxpQkFBT0EsQ0FBQyxFQUFSLEVBQVk7QUFDVnJFLGdCQUFJLEdBQUc4WCxrQkFBa0IsQ0FBQ3pULENBQUQsQ0FBbEIsQ0FBc0JyRSxJQUE3QjtBQUNBakYsa0JBQU0sR0FBR2lGLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBekI7QUFDQStDLGtCQUFNLEdBQUd0SSxNQUFNLENBQUN1RixVQUFQLElBQXFCLENBQTlCOztBQUVBLGdCQUFJLENBQUMrQyxNQUFELElBQVd0RSxLQUFLLENBQUMrRSxFQUFOLEtBQWEsS0FBS3RDLFVBQUwsQ0FBZ0I2QixNQUFoQixFQUF3QnRJLE1BQXhCLENBQTVCLEVBQTZEO0FBQzNEd2YscUJBQU8sQ0FBQ2xhLElBQVIsQ0FBYWdFLENBQWI7QUFDRDtBQUNGOztBQUVELGNBQUksQ0FBQ2tXLE9BQU8sQ0FBQ3BoQixNQUFiLEVBQXFCa0wsQ0FBQyxHQUFHLENBQUosQ0FBckIsS0FDSztBQUNILGdCQUFJa1csT0FBTyxDQUFDcGhCLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEJrTCxDQUFDLEdBQUdrVyxPQUFPLENBQUMsQ0FBRCxDQUFYLENBQTFCLEtBQ0s7QUFDSGxXLGVBQUMsR0FBR2pOLFNBQUo7O0FBRUEscUJBQU9takIsT0FBTyxDQUFDcGhCLE1BQWYsRUFBdUI7QUFDckI0Z0IsaUJBQUMsR0FBR1EsT0FBTyxDQUFDdFYsR0FBUixFQUFKO0FBQ0FsSyxzQkFBTSxHQUFHK2Msa0JBQWtCLENBQUNpQyxDQUFELENBQWxCLENBQXNCL1osSUFBdEIsQ0FBMkJNLFVBQXBDO0FBQ0ErQyxzQkFBTSxHQUFHdEksTUFBTSxDQUFDdUYsVUFBUCxJQUFxQixDQUE5QjtBQUNBZ0QsMkJBQVcsR0FBR0QsTUFBTSxJQUFJQSxNQUFNLENBQUMvQyxVQUFqQixHQUE4QitDLE1BQU0sQ0FBQy9DLFVBQXJDLEdBQWtELENBQWhFO0FBQ0FnYSxnQ0FBZ0IsR0FBR2hYLFdBQVcsSUFBSUEsV0FBVyxDQUFDaEQsVUFBM0IsR0FBd0NnRCxXQUFXLENBQUNoRCxVQUFwRCxHQUFpRSxDQUFwRjs7QUFFQSxvQkFDSSxDQUFDLENBQUNnYSxnQkFBRCxJQUFxQnZiLEtBQUssQ0FBQ2dGLEVBQU4sS0FBYSxLQUFLdkMsVUFBTCxDQUFnQjhZLGdCQUFoQixFQUFrQ2hYLFdBQWxDLENBQW5DLEtBQ0N5VSxZQUFZLENBQUNrQyxhQUFhLENBQUNGLENBQUQsQ0FBZCxDQUFaLENBQStCL0osTUFBL0IsR0FBd0MxUSxXQUF6QyxLQUEwRG1ZLFVBRjlELEVBR0k7QUFDQXBULG1CQUFDLEdBQUcwVixDQUFKO0FBQ0E7QUFDSDtBQUNGOztBQUVELGtCQUFJLENBQUMxVixDQUFMLEVBQVFBLENBQUMsR0FBRyxDQUFKO0FBQ1Q7QUFDRjtBQUNGLFNBcENELE1Bb0NPQSxDQUFDLEdBQUcsQ0FBSjs7QUFFUEEsU0FBQyxHQUFHQSxDQUFDLElBQUksQ0FBVDtBQUVBdkIsYUFBSyxHQUFHMUYsSUFBSSxDQUFDOFksSUFBTCxDQUFVNEIsa0JBQVYsQ0FBNkJ6VCxDQUE3QixDQUFSO0FBQ0FqSCxZQUFJLENBQUM4WSxJQUFMLENBQVVzRSxTQUFWLEdBQXNCMVgsS0FBSyxDQUFDOUMsSUFBNUI7QUFDQTVDLFlBQUksQ0FBQzhZLElBQUwsQ0FBVXVFLGlCQUFWLEdBQThCM1gsS0FBSyxDQUFDaUksR0FBcEM7QUFFQSxhQUFLMlAsY0FBTCxDQUFvQnRkLElBQXBCLEVBQTBCaUgsQ0FBMUI7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O21DQUNjakgsSSxFQUFNaUgsQyxFQUFHO0FBQ3RCLFVBQUlMLGFBQWEsR0FBRzVHLElBQUksQ0FBQzhZLElBQUwsQ0FBVStELGFBQVYsQ0FBd0I1VixDQUF4QixDQUFwQjtBQUFBLFVBQ0lyQixHQUFHLEdBQUc1RixJQUFJLENBQUM4WSxJQUFMLENBQVU2QixZQUFWLENBQXVCL1QsYUFBdkIsQ0FEVjtBQUdBNUcsVUFBSSxDQUFDOFksSUFBTCxDQUFVeUUsT0FBVixHQUFvQjNYLEdBQUcsQ0FBQ2hELElBQXhCO0FBQ0E1QyxVQUFJLENBQUM4WSxJQUFMLENBQVUwRSxlQUFWLEdBQTRCNVgsR0FBRyxDQUFDK0gsR0FBaEM7QUFDQTNOLFVBQUksQ0FBQzhZLElBQUwsQ0FBVTJFLFdBQVYsR0FBd0I3WCxHQUFHLENBQUNnTixNQUE1QjtBQUNEOzs7eUNBQ29CNVMsSSxFQUFNNEMsSSxFQUFNO0FBQy9CLFVBQUk4YSxXQUFXLEdBQUcxZCxJQUFJLENBQUMyQixLQUF2QjtBQUFBLFVBQ0l1QixVQUFVLEdBQUdOLElBQUksQ0FBQ00sVUFEdEI7QUFBQSxVQUVJK0MsTUFBTSxHQUFHL0MsVUFBVSxDQUFDQSxVQUZ4QjtBQUFBLFVBR0lnRCxXQUFXLEdBQUdELE1BQU0sSUFBSUEsTUFBTSxDQUFDL0MsVUFBakIsR0FBOEIrQyxNQUFNLENBQUMvQyxVQUFyQyxHQUFrRCxDQUhwRTtBQUFBLFVBSUloQixXQUFXLEdBQUd3YixXQUFXLENBQUN0WCxDQUo5QjtBQUFBLFVBS0l1WCxnQkFBZ0IsR0FBRy9hLElBQUksQ0FBQzJCLElBQUwsQ0FBVTBJLFNBQVYsQ0FBb0IvSyxXQUFwQixFQUFpQ3dLLElBQWpDLEVBTHZCO0FBQUEsVUFNSXRELENBQUMsR0FBR3VVLGdCQUFnQixDQUFDNWhCLE1BTnpCO0FBQUEsVUFPSTZoQixRQUFRLEdBQUc1ZCxJQUFJLENBQUM4WSxJQUFMLENBQVVvQixXQVB6QjtBQUFBLFVBUUl6UyxDQUFDLEdBQUd6SCxJQUFJLENBQUM4WSxJQUFMLENBQVV3QixpQkFSbEI7QUFBQSxVQVNJdUQsVUFUSjs7QUFXQSxVQUFJcFcsQ0FBQyxJQUFJMkIsQ0FBVCxFQUFZO0FBQ1Z5VSxrQkFBVSxHQUFHLEtBQUt6RCxPQUFMLENBQWF1RCxnQkFBYixFQUErQjNTLE9BQS9CLENBQXVDLEtBQUtvUCxPQUFMLENBQWF3RCxRQUFiLENBQXZDLE1BQW1FLENBQWhGO0FBQ0QsT0FGRCxNQUVPO0FBQ0xDLGtCQUFVLEdBQUcsS0FBS3pELE9BQUwsQ0FBYXdELFFBQWIsRUFBdUI1UyxPQUF2QixDQUErQixLQUFLb1AsT0FBTCxDQUFhdUQsZ0JBQWIsQ0FBL0IsTUFBbUUsQ0FBaEY7QUFDRDs7QUFFRCxhQUNFRSxVQUFVLEtBQ1QzYSxVQUFVLENBQUNvRCxRQUFYLEtBQXdCb1gsV0FBVyxDQUFDclgsRUFBcEMsSUFBMkNxWCxXQUFXLENBQUNyWCxFQUFaLEtBQW1CLElBQW5CLElBQTJCbkQsVUFBVSxDQUFDOEMsWUFBWCxDQUF3QixZQUF4QixDQUQ3RCxDQUFWLEtBRUMsQ0FBQ0MsTUFBRCxJQUFXQSxNQUFNLENBQUNLLFFBQVAsS0FBb0JvWCxXQUFXLENBQUNsWCxFQUY1QyxLQUdBLEtBQUtwQyxVQUFMLENBQWdCbEIsVUFBaEIsRUFBNEJOLElBQTVCLE1BQXNDOGEsV0FBVyxDQUFDblgsRUFKcEQ7QUFNRDs7O29DQUNldkcsSSxFQUFNNEMsSSxFQUFNSCxDLEVBQUc7QUFDN0IsVUFBSXFiLFFBQVEsR0FBR2xiLElBQUksQ0FBQzJCLElBQXBCO0FBQUEsVUFDSTZFLENBQUMsR0FBRzBVLFFBQVEsQ0FBQy9oQixNQURqQjtBQUFBLFVBRUlDLENBQUMsR0FBRyxDQUZSO0FBQUEsVUFFVytoQixPQUFPLEdBQUcsQ0FGckI7O0FBSUEsYUFBTy9oQixDQUFDLEdBQUdvTixDQUFYLEVBQWNwTixDQUFDLEVBQWYsRUFBbUI7QUFDakIsWUFBSSxLQUFLb2UsT0FBTCxDQUFhMEQsUUFBUSxDQUFDOWhCLENBQUQsQ0FBckIsQ0FBSixFQUErQitoQixPQUFPO0FBRXRDLFlBQUlBLE9BQU8sS0FBS3RiLENBQWhCLEVBQW1CLE9BQVEsTUFBTXViLElBQU4sQ0FBV2hlLElBQUksQ0FBQzRCLElBQWhCLElBQXdCNUYsQ0FBQyxHQUFHLENBQTVCLEdBQWdDQSxDQUFDLEdBQUcsQ0FBNUM7QUFDcEI7QUFDRjs7O29DQUNlO0FBQUE7O0FBQ2QsVUFBSWlHLEtBQUssR0FBR3JILFFBQVEsQ0FBQ3FqQixXQUFULEVBQVo7QUFBQSxVQUNJOWYsU0FBUyxHQUFHLEtBQUtBLFNBRHJCO0FBQUEsVUFFSW1MLEtBQUssR0FBRyxLQUFLMFAsS0FGakI7QUFBQSxVQUdJaGQsQ0FBQyxHQUFHc04sS0FBSyxDQUFDdk4sTUFIZDtBQUFBLFVBSUlpRSxJQUpKO0FBQUEsVUFJVXliLFFBSlY7QUFBQSxVQUlvQi9WLEtBSnBCO0FBQUEsVUFJMkJFLEdBSjNCO0FBQUEsVUFJZ0M2WCxXQUpoQzs7QUFNQSxhQUFPemhCLENBQUMsRUFBUixFQUFZO0FBQ1ZnRSxZQUFJLEdBQUdzSixLQUFLLENBQUN0TixDQUFELENBQVo7QUFDQXlmLGdCQUFRLEdBQUd6YixJQUFJLENBQUM4WSxJQUFoQjtBQUNBcFQsYUFBSyxHQUFHK1YsUUFBUSxDQUFDMkIsU0FBakI7QUFDQXhYLFdBQUcsR0FBRzZWLFFBQVEsQ0FBQzhCLE9BQWY7QUFDQUUsbUJBQVcsR0FBR2hDLFFBQVEsQ0FBQ2dDLFdBQXZCOztBQUVBLFlBQUksQ0FBQy9YLEtBQUQsSUFBVSxDQUFDRSxHQUFYLElBQWtCLEVBQUUsT0FBTzZYLFdBQVAsS0FBdUIsUUFBekIsQ0FBdEIsRUFBMEQ7QUFDeEQsZUFBS2pVLElBQUwsQ0FBVXZHLElBQVYsQ0FBZWpELElBQWY7QUFDQSxlQUFLOFgsYUFBTCxDQUFtQjlYLElBQUksQ0FBQ0ssRUFBeEIsSUFBOEI7QUFBRXVCLGdCQUFJLEVBQUU1QixJQUFJLENBQUM0QixJQUFiO0FBQW1CMFcsa0JBQU0sRUFBRXBjLE9BQU8sQ0FBQzZQLElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQ0FBeEI7QUFBM0IsV0FBOUI7QUFDRCxTQUhELE1BR087QUFDTCxjQUFJO0FBQ0YvSixpQkFBSyxDQUFDYSxRQUFOLENBQWU0QyxLQUFmLEVBQXNCMUYsSUFBSSxDQUFDMkIsS0FBTCxDQUFXeUUsQ0FBakM7QUFDQW5FLGlCQUFLLENBQUNjLE1BQU4sQ0FBYTZDLEdBQWIsRUFBa0I2WCxXQUFsQjtBQUNBdGYscUJBQVMsQ0FBQ3dHLElBQVYsQ0FBZUUsZUFBZjtBQUNBMUcscUJBQVMsQ0FBQ3dHLElBQVYsQ0FBZUcsUUFBZixDQUF3QjdDLEtBQXhCLEVBSkUsQ0FLRjs7QUFDQSxpQkFBSy9ELElBQUwsQ0FBVSxnQkFBVixFQUE0QjhCLElBQTVCO0FBQ0EsbUJBQU9BLElBQUksQ0FBQ3ZFLE1BQVo7QUFDQSxpQkFBS21jLFFBQUwsQ0FBYzNVLElBQWQsQ0FBbUJqRCxJQUFuQjtBQUNBN0IscUJBQVMsQ0FBQytmLGNBQVYsQ0FBeUJsZSxJQUF6QjtBQUNELFdBVkQsQ0FVRSxPQUFNbEUsQ0FBTixFQUFTO0FBQ1QsaUJBQUswTixJQUFMLENBQVV2RyxJQUFWLENBQWVqRCxJQUFmO0FBQ0FrTyxzQkFBVSxDQUFDO0FBQUEscUJBQU0sTUFBSSxDQUFDaFEsSUFBTCxDQUFVLHNCQUFWLEVBQWtDcEMsQ0FBQyxDQUFDZ0UsUUFBRixFQUFsQyxDQUFOO0FBQUEsYUFBRCxFQUF3RCxDQUF4RCxDQUFWO0FBQ0Q7O0FBQ0QsaUJBQU9FLElBQUksQ0FBQzhZLElBQVo7QUFDRDtBQUNGO0FBQ0Y7OztxQ0FFZ0J6UixFLEVBQUk7QUFDbkIsV0FBSzZSLGNBQUw7O0FBRUEsVUFBSSxLQUFLRCxLQUFMLEtBQWUsQ0FBbkIsRUFBc0I7QUFDcEIsYUFBSzlhLFNBQUwsR0FBaUIsSUFBSTRPLHNCQUFKLENBQWUxRixFQUFmLENBQWpCOztBQUNBLFlBQUksQ0FBQyxLQUFLbEosU0FBTCxDQUFleUQsSUFBcEIsRUFBMEI7QUFDeEIsY0FBSSxLQUFLc1gsY0FBTCxHQUFzQixDQUExQixFQUE2QjtBQUMzQixtQkFBTyxLQUFLNEIsZ0JBQUwsQ0FBc0J6VCxFQUF0QixDQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsaUJBQUtpVSxvQkFBTCxHQUE0QixHQUE1QjtBQUNBLGlCQUFLWSxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsbUJBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsYUFBS1osb0JBQUwsR0FBNEIsS0FBS2xCLE9BQUwsQ0FBYSxLQUFLamMsU0FBTCxDQUFleUQsSUFBNUIsQ0FBNUI7QUFDRDs7QUFFRCxXQUFLc2EsYUFBTCxHQUFxQixLQUFLL2QsU0FBTCxDQUFlcUUsS0FBZixHQUF1QixLQUFLckUsU0FBTCxDQUFlcUUsS0FBZixDQUFxQjJiLEtBQXJCLEVBQXZCLEdBQXNELEVBQTNFO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs0QkFDT3ZjLEksRUFBTTtBQUNaLGFBQVEsT0FBT0EsSUFBUCxLQUFnQixRQUFqQixHQUE2QkEsSUFBSSxDQUFDNkQsT0FBTCxDQUFhLGNBQWIsRUFBNkIsRUFBN0IsQ0FBN0IsR0FBZ0V6TCxTQUF2RTtBQUNEOzs7K0JBQ1UyRCxNLEVBQVF1SCxLLEVBQU9rWixPLEVBQVM7QUFDbkMsVUFBSSxDQUFDemdCLE1BQUQsSUFBVyxDQUFDdUgsS0FBaEIsRUFBdUIsT0FBTyxJQUFQO0FBRXZCLFVBQUlFLFFBQVEsR0FBR0YsS0FBSyxDQUFDWixRQUFOLEtBQW1CLENBQW5CLEdBQXVCM0csTUFBTSxDQUFDaUgsVUFBOUIsR0FBMkNqSCxNQUFNLENBQUN5SCxRQUFqRTtBQUFBLFVBQ0lDLENBQUMsR0FBR0QsUUFBUSxDQUFDckosTUFEakI7QUFBQSxVQUVJNFIsR0FBRyxHQUFHLENBRlY7QUFBQSxVQUVhM1IsQ0FBQyxHQUFHLENBRmpCO0FBQUEsVUFFb0JxaUIsWUFGcEI7O0FBSUUsYUFBUXJpQixDQUFDLEdBQUdxSixDQUFaLEVBQWVySixDQUFDLEVBQWhCLEVBQW9CO0FBQ2xCcWlCLG9CQUFZLEdBQUdqWixRQUFRLENBQUNwSixDQUFELENBQXZCO0FBRUgsWUFBSXFpQixZQUFZLEtBQUtuWixLQUFyQixFQUE0QixPQUFPeUksR0FBUDs7QUFFNUIsWUFBSXlRLE9BQUosRUFBYTtBQUNaLGNBQUlDLFlBQVksQ0FBQy9YLFFBQWIsS0FBMEI4WCxPQUE5QixFQUF1Q3pRLEdBQUc7QUFFMUMsU0FIRCxNQUdPO0FBQ0YsY0FBSSxFQUFFMFEsWUFBWSxDQUFDL1osUUFBYixLQUEwQixDQUExQixJQUErQixDQUFDK1osWUFBWSxDQUFDOVosSUFBL0MsQ0FBSixFQUEwRG9KLEdBQUc7QUFDOUQ7QUFDSjtBQUNEOzs7d0JBeGlCWTtBQUNWLFVBQU15TixLQUFLLEdBQUcsS0FBS2hDLE1BQW5CO0FBQ0EsV0FBS0EsTUFBTCxHQUFjLENBQUMsSUFBSTVKLElBQUosRUFBRCxHQUFjLEtBQUsySixhQUFqQztBQUNBLGFBQU9pQyxLQUFQO0FBQ0Q7Ozs7RUFwQm9CN0MsWTs7SUEyakJqQlIsYTs7Ozs7QUFFSix5QkFBWXpjLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsd0ZBQU1BLEtBQU47QUFFQSxXQUFLNkMsU0FBTCxHQUFpQlQsTUFBTSxDQUFDVSxZQUFQLEVBQWpCO0FBQ0EsV0FBSzZELEtBQUwsR0FBYXJILFFBQVEsQ0FBQ3FqQixXQUFULEVBQWI7O0FBQ0EsUUFBTTNVLEtBQUssR0FBRyxPQUFLQSxLQUFMLHNCQUFpQmhPLEtBQUssQ0FBQ2dPLEtBQU4sQ0FBWW9CLElBQVosQ0FBaUIsVUFBQzZELEVBQUQsRUFBS0MsRUFBTDtBQUFBLGFBQVlELEVBQUUsQ0FBQ2xPLEVBQUgsR0FBUW1PLEVBQUUsQ0FBQ25PLEVBQXZCO0FBQUEsS0FBakIsQ0FBakIsQ0FBZDs7QUFFQSxXQUFLaWUsZUFBTCxDQUFxQmhWLEtBQXJCLEVBQTRCLE9BQUtpVixZQUFqQyxFQUErQyxPQUFLcEcsTUFBcEQ7O0FBUGlCO0FBUWxCOzs7O2lDQUVZblksSSxFQUFNO0FBQUE7O0FBQ2pCLFVBQU0yQixLQUFLLEdBQUczQixJQUFJLENBQUMyQixLQUFuQjtBQUNBLFVBQU0rRCxLQUFLLEdBQUcvRCxLQUFLLENBQUNxRixDQUFwQjtBQUNBLFVBQU1wQixHQUFHLEdBQUdqRSxLQUFLLENBQUM3RixDQUFsQjtBQUNBLFVBQU1xQyxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxVQUFNOEQsS0FBSyxHQUFHLEtBQUtBLEtBQW5COztBQUVBLFVBQUk7QUFDRkEsYUFBSyxDQUFDYSxRQUFOLENBQWUsS0FBSzBiLE9BQUwsQ0FBYTlZLEtBQUssQ0FBQ3VCLENBQW5CLENBQWYsRUFBc0N2QixLQUFLLENBQUNVLENBQTVDO0FBQ0FuRSxhQUFLLENBQUNjLE1BQU4sQ0FBYSxLQUFLeWIsT0FBTCxDQUFhNVksR0FBRyxDQUFDcUIsQ0FBakIsQ0FBYixFQUFrQ3JCLEdBQUcsQ0FBQ1EsQ0FBdEM7QUFDQWpJLGlCQUFTLENBQUMwRyxlQUFWO0FBQ0ExRyxpQkFBUyxDQUFDMkcsUUFBVixDQUFtQjdDLEtBQW5CO0FBQ0EsYUFBSy9ELElBQUwsQ0FBVSxnQkFBVixFQUE0QjhCLElBQTVCO0FBQ0EsZUFBT0EsSUFBSSxDQUFDdkUsTUFBWjtBQUNBLGFBQUttYyxRQUFMLENBQWMzVSxJQUFkLENBQW1CakQsSUFBbkI7QUFDRCxPQVJELENBUUUsT0FBTWxFLENBQU4sRUFBUztBQUNULGFBQUswTixJQUFMLENBQVV2RyxJQUFWLENBQWVqRCxJQUFmO0FBQ0FrTyxrQkFBVSxDQUFDO0FBQUEsaUJBQU0sTUFBSSxDQUFDaFEsSUFBTCxDQUFVLHNCQUFWLEVBQWtDcEMsQ0FBQyxDQUFDZ0UsUUFBRixFQUFsQyxDQUFOO0FBQUEsU0FBRCxFQUF3RCxDQUF4RCxDQUFWO0FBQ0Q7QUFDRjs7OzRCQUNPaUwsUSxFQUFVO0FBQ2hCLFVBQU0wVCxnQkFBZ0IsR0FBRzFULFFBQVEsQ0FBQyxDQUFELENBQWpDO0FBQ0EsVUFBSW5JLElBQUksR0FBR2hJLFFBQVEsQ0FBQytFLElBQXBCO0FBQUEsVUFDSXlKLENBQUMsR0FBRzJCLFFBQVEsQ0FBQ2hQLE1BRGpCOztBQUdBLGFBQU1xTixDQUFDLEtBQUssQ0FBWixFQUFlO0FBQ2J4RyxZQUFJLEdBQUdBLElBQUksQ0FBQ3dDLFFBQUwsQ0FBYzJGLFFBQVEsQ0FBQzNCLENBQUQsQ0FBdEIsQ0FBUDtBQUNEOztBQUNELGFBQU94RyxJQUFJLENBQUNnQyxVQUFMLENBQWdCNlosZ0JBQWhCLENBQVA7QUFDRDs7OztFQXpDeUJsRyxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNW1CNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCeEwsVTs7O0FBRW5CLHNCQUFZbkssSUFBWixFQUFrQnVJLE9BQWxCLEVBQTJCO0FBQUE7O0FBRXpCLFNBQUtBLE9BQUwsR0FBZUEsT0FBTyxJQUFJLEVBQTFCO0FBRUEsUUFBSWhOLFNBQVMsR0FBRyxLQUFLd0csSUFBTCxHQUFZakgsTUFBTSxDQUFDVSxZQUFQLEVBQTVCO0FBRUEsUUFBSUQsU0FBUyxDQUFDdWdCLFVBQWQsRUFBMEIsS0FBS3pjLEtBQUwsR0FBYTlELFNBQVMsQ0FBQ2dLLFVBQVYsQ0FBcUIsQ0FBckIsQ0FBYjs7QUFFMUIsUUFBSXZGLElBQUksSUFBSSxDQUFDekUsU0FBUyxDQUFDRSxXQUF2QixFQUFvQztBQUNsQyxVQUFJdUUsSUFBSixFQUFVO0FBQ1IsYUFBSytiLE9BQUwsR0FBZS9iLElBQWY7QUFFQSxhQUFLcUMsTUFBTCxDQUFZckMsSUFBWixFQUNLZ2MsZ0JBREwsR0FFSzVmLE1BRkwsR0FHSytGLFlBSEwsQ0FHa0IsSUFIbEIsRUFJSzhaLFlBSkw7QUFLRCxPQVJELE1BUU87QUFDTCxhQUFLamQsSUFBTCxHQUFZekQsU0FBUyxDQUFDMkIsUUFBVixFQUFaO0FBQ0EsYUFBSzhlLGdCQUFMLEdBQ0s1ZixNQURMLEdBRUsrRixZQUZMLEdBR0k7QUFISixTQUlLK1osTUFKTCxHQUZLLENBT0Q7QUFDQTtBQUNMOztBQUNELFVBQUk7QUFBRTNnQixpQkFBUyxDQUFDNkcsZUFBVjtBQUE4QixPQUFwQyxDQUFxQyxPQUFNbEosQ0FBTixFQUFTLENBQUU7QUFDakQ7QUFDRjs7OzsyQkFFTThHLEksRUFBTTtBQUNYLFdBQUsrQixJQUFMLENBQVVvYSxpQkFBVixDQUE0Qm5jLElBQTVCO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFDTXpFLFMsRUFBVztBQUNoQixVQUFJQSxTQUFKLEVBQWUsS0FBS3dHLElBQUwsR0FBWXhHLFNBQVosQ0FBZixLQUNLQSxTQUFTLEdBQUcsS0FBS3dHLElBQWpCO0FBRUwsVUFBSXFhLEtBQUssR0FBRyxDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCLGFBQTVCLEVBQTJDLGNBQTNDLENBQVo7QUFBQSxVQUNJaGpCLENBQUMsR0FBR2dqQixLQUFLLENBQUNqakIsTUFEZDs7QUFHQSxhQUFPQyxDQUFDLEVBQVI7QUFBWSxhQUFLZ2pCLEtBQUssQ0FBQ2hqQixDQUFELENBQVYsSUFBaUJtQyxTQUFTLENBQUM2Z0IsS0FBSyxDQUFDaGpCLENBQUQsQ0FBTixDQUExQjtBQUFaOztBQUVBLFdBQUtpRyxLQUFMLEdBQWE5RCxTQUFTLENBQUNnSyxVQUFWLENBQXFCLENBQXJCLENBQWI7QUFDQSxXQUFLbkcsTUFBTCxHQUFjLEtBQUtpZCxRQUFMLEVBQWQ7QUFFQSxhQUFPLElBQVA7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSTlnQixTQUFTLEdBQUcsS0FBS3dHLElBQXJCO0FBQUEsVUFDSTFFLE1BQU0sR0FBRyxLQUFLNkcsVUFEbEI7QUFBQSxVQUVJb1ksS0FBSyxHQUFHLEtBQUtuWSxTQUZqQjtBQUlBLFVBQUksS0FBS29ZLFdBQUwsQ0FBaUJsZixNQUFqQixFQUF5QmlmLEtBQXpCLENBQUosRUFBcUMsS0FBS0UsT0FBTCxDQUFhbmYsTUFBYixFQUFxQmlmLEtBQXJCLEVBQXJDLEtBQ0ssS0FBSy9iLFNBQUwsQ0FBZWxELE1BQWYsRUFBdUJpZixLQUF2QjtBQUVMLGFBQU8sSUFBUDtBQUNEOzs7OEJBQ1NqZixNLEVBQVFpZixLLEVBQU87QUFDdkIsVUFBSS9nQixTQUFTLEdBQUcsS0FBS3dHLElBQXJCO0FBQUEsVUFDSTFDLEtBQUssR0FBRyxLQUFLQSxLQURqQjtBQUFBLFVBR0lvZCxhQUFhLEdBQUcsS0FBSzdjLEtBQUwsQ0FBVyxDQUFYLENBSHBCO0FBQUEsVUFJSThjLFlBQVksR0FBRyxLQUFLOWMsS0FBTCxDQUFXLEtBQUtBLEtBQUwsQ0FBV3pHLE1BQVgsR0FBb0IsQ0FBL0IsQ0FKbkI7QUFNQSxVQUFJc2pCLGFBQWEsS0FBS3BmLE1BQXRCLEVBQ0VnQyxLQUFLLENBQUNhLFFBQU4sQ0FBZXVjLGFBQWYsRUFBOEJBLGFBQWEsQ0FBQzlhLElBQWQsQ0FBbUJ4SSxNQUFuQixHQUE0QnNqQixhQUFhLENBQUM5YSxJQUFkLENBQW1CZ2IsUUFBbkIsR0FBOEJ4akIsTUFBeEY7QUFFRixVQUFJdWpCLFlBQVksS0FBS0osS0FBckIsRUFDRWpkLEtBQUssQ0FBQ2MsTUFBTixDQUFhdWMsWUFBYixFQUEyQkEsWUFBWSxDQUFDL2EsSUFBYixDQUFrQnhJLE1BQWxCLElBQTRCdWpCLFlBQVksQ0FBQy9hLElBQWIsQ0FBa0J4SSxNQUFsQixHQUEyQnVqQixZQUFZLENBQUMvYSxJQUFiLENBQWtCaWIsU0FBbEIsR0FBOEJ6akIsTUFBckYsQ0FBM0I7QUFDSDs7O2lDQUNZMGpCLGEsRUFBZTtBQUMxQixVQUFNOWEsSUFBSSxHQUFHLElBQWI7QUFDQSxVQUFNeEcsU0FBUyxHQUFHLEtBQUt3RyxJQUF2QjtBQUNBLFVBQU1ILFNBQVMsR0FBR2liLGFBQWEsR0FBRy9oQixNQUFNLENBQUM5QyxRQUFQLENBQWdCK0UsSUFBbkIsR0FBMEIsS0FBSytmLDBCQUFMLEVBQXpEO0FBQ0EsVUFBTUMsTUFBTSxHQUFHRixhQUFhLEdBQ3RCLFVBQUM3YyxJQUFEO0FBQUEsZUFBVytCLElBQUksQ0FBQ2liLFlBQUwsQ0FBa0JoZCxJQUFsQixLQUEyQixDQUFDK0IsSUFBSSxDQUFDa2IsT0FBTCxDQUFhamQsSUFBYixDQUE1QixJQUFrRCtCLElBQUksQ0FBQ21iLGVBQUwsQ0FBcUJsZCxJQUFyQixDQUE3RDtBQUFBLE9BRHNCLEdBRXRCLFVBQUNBLElBQUQ7QUFBQSxlQUFXekUsU0FBUyxDQUFDNGhCLFlBQVYsQ0FBdUJuZCxJQUF2QixLQUFnQyxDQUFDK0IsSUFBSSxDQUFDa2IsT0FBTCxDQUFhamQsSUFBYixDQUFqQyxJQUF1RCtCLElBQUksQ0FBQ21iLGVBQUwsQ0FBcUJsZCxJQUFyQixDQUFsRTtBQUFBLE9BRk47QUFJQSxVQUFNb2QsUUFBUSxHQUFHdGlCLE1BQU0sQ0FBQzlDLFFBQVAsQ0FBZ0JxbEIsa0JBQWhCLENBQW1DemIsU0FBbkMsRUFBOEMwYixVQUFVLENBQUNDLFNBQXpELEVBQW9FO0FBQy9FQyxrQkFEK0Usc0JBQ3BFeGQsSUFEb0UsRUFDOUQ7QUFDZixpQkFBTytjLE1BQU0sQ0FBQy9jLElBQUQsQ0FBYjtBQUNEO0FBSDhFLE9BQXBFLEVBSVYsS0FKVSxDQUFqQjtBQU1BLFVBQUlKLEtBQUssR0FBRyxFQUFaO0FBQUEsVUFDSTZkLFdBQVcsR0FBRyxFQURsQjtBQUFBLFVBR0lDLFFBSEo7QUFBQSxVQUdjM2lCLE1BSGQ7QUFBQSxVQUdzQjRpQixTQUh0QjtBQUFBLFVBR2lDQyxRQUhqQzs7QUFLQSxhQUFNRixRQUFRLEdBQUdOLFFBQVEsQ0FBQ1MsUUFBVCxFQUFqQixFQUFzQztBQUNwQ2plLGFBQUssQ0FBQ1MsSUFBTixDQUFXcWQsUUFBWDtBQUNEOztBQUNEOWQsV0FBSyxHQUFHLEtBQUtrZSxhQUFMLENBQW1CbGUsS0FBbkIsQ0FBUixDQXRCMEIsQ0F1QjFCOztBQUNBLFdBQUtBLEtBQUwsR0FBYSxLQUFLbWUsa0JBQUwsQ0FBd0JuZSxLQUF4QixDQUFiO0FBQ0EsV0FBSzZkLFdBQUwsR0FBbUIsS0FBS08sa0JBQUwsQ0FBd0IsS0FBS3BlLEtBQTdCLENBQW5CO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzttQ0FDY3hDLEksRUFBTTtBQUFBOztBQUNuQixVQUFNNmdCLFlBQVksR0FBR3BpQixLQUFLLENBQUMyTSxJQUFOLENBQVd4USxRQUFRLENBQUNtVCxnQkFBVCxDQUEwQixtQkFBbUIvTixJQUFJLENBQUNLLEVBQXhCLEdBQTZCLEtBQXZELENBQVgsQ0FBckI7QUFDQSxVQUFNb0gsQ0FBQyxHQUFHb1osWUFBWSxDQUFDOWtCLE1BQXZCO0FBQ0EsVUFBTStrQixVQUFVLEdBQUdELFlBQVksQ0FBQ2hTLEdBQWIsQ0FBaUIsVUFBQXhILEVBQUU7QUFBQSxlQUFJQSxFQUFFLENBQUMzQyxVQUFQO0FBQUEsT0FBbkIsQ0FBbkI7QUFFQSxVQUFNcWMsSUFBSSxHQUFHRixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCeGMsZUFBN0I7QUFDQSxVQUFNMmMsSUFBSSxHQUFHSCxZQUFZLENBQUNwWixDQUFDLEdBQUMsQ0FBSCxDQUFaLENBQWtCd1osV0FBL0I7QUFFQSxVQUFNdmIsS0FBSyxHQUFHMUYsSUFBSSxDQUFDOFksSUFBTCxDQUFVdUUsaUJBQXhCO0FBQ0EsVUFBTXpYLEdBQUcsR0FBRzVGLElBQUksQ0FBQzhZLElBQUwsQ0FBVTBFLGVBQXRCOztBQUVBLFVBQUl1RCxJQUFJLElBQUlBLElBQUksQ0FBQ3pjLFFBQUwsS0FBa0IsQ0FBOUIsRUFBaUM7QUFDL0J3YyxrQkFBVSxDQUFDSSxPQUFYLENBQW1CSCxJQUFuQjtBQUNEOztBQUNELFVBQUlDLElBQUksSUFBSUEsSUFBSSxDQUFDMWMsUUFBTCxLQUFrQixDQUE5QixFQUFpQztBQUMvQndjLGtCQUFVLENBQUM3ZCxJQUFYLENBQWdCK2QsSUFBaEI7QUFDRDs7QUFFRCwwQkFBS3hlLEtBQUwsRUFBV3FJLE1BQVgscUJBQWtCbkYsS0FBbEIsRUFBeUJFLEdBQUcsR0FBR0YsS0FBTixHQUFjLENBQXZDLDRCQUE2Q29iLFVBQTdDO0FBQ0Q7OztrQ0FDYXRlLEssRUFBTztBQUNuQixVQUFNckUsU0FBUyxHQUFHLEtBQUt3RyxJQUF2QjtBQUNBLFVBQUk0YixTQUFKLEVBQWVDLFFBQWY7O0FBRUEsVUFBSWhlLEtBQUssQ0FBQ3pHLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQndrQixpQkFBUyxHQUFHL2QsS0FBSyxDQUFDLENBQUQsQ0FBakI7O0FBQ0EsWUFBSXJFLFNBQVMsQ0FBQzJJLFVBQVYsS0FBeUJ5WixTQUF6QixJQUFzQ0EsU0FBUyxDQUFDaGMsSUFBVixDQUFlaWIsU0FBZixHQUEyQnpqQixNQUEzQixJQUFxQ29DLFNBQVMsQ0FBQ2dqQixZQUF6RixFQUF1RztBQUNyRzNlLGVBQUssQ0FBQ21JLEtBQU47QUFDRDs7QUFDRDZWLGdCQUFRLEdBQUdoZSxLQUFLLENBQUNBLEtBQUssQ0FBQ3pHLE1BQU4sR0FBZSxDQUFoQixDQUFoQjs7QUFDQSxZQUFJb0MsU0FBUyxDQUFDNEksU0FBVixLQUF3QnlaLFFBQXhCLElBQW9DLEtBQUtYLE9BQUwsQ0FBYVcsUUFBUSxDQUFDamMsSUFBVCxDQUFjNmMsTUFBZCxDQUFxQixDQUFyQixFQUF3QmpqQixTQUFTLENBQUNzZixXQUFsQyxDQUFiLENBQXhDLEVBQXNHO0FBQ3BHamIsZUFBSyxDQUFDcUYsR0FBTjtBQUNEO0FBQ0Y7O0FBQ0QsYUFBT3JGLEtBQVA7QUFDRDs7O3VDQUNrQkEsSyxFQUFPO0FBQ3hCLFVBQU02ZSxHQUFHLEdBQUcsS0FBSzFjLElBQWpCO0FBQ0EsVUFBTTJjLEVBQUUsR0FBRzFtQixRQUFRLENBQUNxakIsV0FBVCxFQUFYO0FBRUFvRCxTQUFHLENBQUN4YyxlQUFKO0FBQ0F3YyxTQUFHLENBQUN2YyxRQUFKLENBQWF3YyxFQUFiO0FBRUE5ZSxXQUFLLEdBQUdBLEtBQUssQ0FBQ21kLE1BQU4sQ0FBYSxVQUFBL2MsSUFBSSxFQUFJO0FBQzNCMGUsVUFBRSxDQUFDQyxVQUFILENBQWMzZSxJQUFkO0FBQ0EsZUFBTyxDQUFDLENBQUN5ZSxHQUFHLENBQUN2aEIsUUFBSixFQUFUO0FBQ0QsT0FITyxDQUFSO0FBS0F1aEIsU0FBRyxDQUFDeGMsZUFBSjtBQUNBd2MsU0FBRyxDQUFDdmMsUUFBSixDQUFhLEtBQUs3QyxLQUFsQjtBQUVBLGFBQU9PLEtBQVA7QUFDRDs7O3VDQUNrQkEsSyxFQUFPO0FBQ3hCLFVBQUk0RyxDQUFDLEdBQUc1RyxLQUFLLENBQUN6RyxNQUFkO0FBQUEsVUFDSXlsQixPQUFPLEdBQUcsRUFEZDtBQUFBLFVBQ2tCeGxCLENBQUMsR0FBRyxDQUR0Qjs7QUFHQSxhQUFPQSxDQUFDLEdBQUdvTixDQUFYLEVBQWNwTixDQUFDLEVBQWY7QUFBbUJ3bEIsZUFBTyxDQUFDdmUsSUFBUixDQUFhVCxLQUFLLENBQUN4RyxDQUFELENBQUwsQ0FBU2tILFVBQXRCO0FBQW5COztBQUVBLGFBQU9zZSxPQUFQO0FBQ0Q7OzttQ0FDYztBQUNiLFVBQUl2ZixLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFBQSxVQUNJTyxLQUFLLEdBQUcsS0FBS0EsS0FEakI7QUFBQSxVQUVJNEcsQ0FBQyxHQUFHNUcsS0FBSyxDQUFDekcsTUFGZDtBQUFBLFVBR0lDLENBQUMsR0FBRyxDQUhSO0FBQUEsVUFJSXlsQixTQUFTLEdBQUcsRUFKaEI7QUFBQSxVQUtJN2YsSUFMSjs7QUFPQSxhQUFPNUYsQ0FBQyxHQUFHb04sQ0FBWCxFQUFjcE4sQ0FBQyxFQUFmO0FBQW1CeWxCLGlCQUFTLENBQUN4ZSxJQUFWLENBQWVULEtBQUssQ0FBQ3hHLENBQUQsQ0FBTCxDQUFTdUksSUFBeEI7QUFBbkI7O0FBRUE2RSxPQUFDLElBQUksQ0FBTDs7QUFFQSxVQUFJcVksU0FBUyxDQUFDMWxCLE1BQWQsRUFBc0I7QUFDcEIsWUFBSSxDQUFDLEtBQUs0aUIsT0FBVixFQUFtQjtBQUNqQixjQUFJLEtBQUszYyxNQUFULEVBQWlCO0FBQ2Y7QUFDQXlmLHFCQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVBLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXhVLFNBQWIsQ0FBdUJoTCxLQUFLLENBQUNDLFdBQTdCLEVBQTBDRCxLQUFLLENBQUNFLFNBQWhELENBQWY7QUFDRCxXQUhELE1BR087QUFDTDtBQUNBO0FBQ0FzZixxQkFBUyxDQUFDLENBQUQsQ0FBVCxHQUFlQSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWF4VSxTQUFiLENBQXVCaEwsS0FBSyxDQUFDQyxXQUE3QixDQUFmO0FBQ0F1ZixxQkFBUyxDQUFDclksQ0FBRCxDQUFULEdBQWVxWSxTQUFTLENBQUNyWSxDQUFELENBQVQsQ0FBYTZELFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEJoTCxLQUFLLENBQUNFLFNBQWhDLENBQWY7QUFDRDtBQUNGOztBQUNEUCxZQUFJLEdBQUcsS0FBS0EsSUFBTCxHQUFZNmYsU0FBUyxDQUFDQyxJQUFWLENBQWUsRUFBZixDQUFuQjtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7aURBQzRCO0FBQzNCLFVBQUl2akIsU0FBUyxHQUFHLEtBQUt3RyxJQUFyQjtBQUFBLFVBQ0lnZCxLQUFLLEdBQUd4akIsU0FBUyxDQUFDMkksVUFEdEI7QUFBQSxVQUVJOGEsS0FBSyxHQUFHempCLFNBQVMsQ0FBQzRJLFNBRnRCOztBQUlBLGFBQU80YSxLQUFLLEdBQUdBLEtBQUssQ0FBQ3plLFVBQXJCLEVBQWlDO0FBQzdCLFlBQUksQ0FBQ3llLEtBQUssQ0FBQ0UsdUJBQU4sQ0FBOEJELEtBQTlCLElBQXVDLElBQXhDLE1BQWtELElBQXRELEVBQ0UsT0FBT0QsS0FBUDtBQUNMOztBQUNELGFBQU9qa0IsTUFBTSxDQUFDOUMsUUFBUCxDQUFnQitFLElBQXZCO0FBQ0Q7Ozs0QkFDT00sTSxFQUFRaWYsSyxFQUFPO0FBQ3JCLFVBQUlqZCxLQUFLLEdBQUd2RSxNQUFNLENBQUM5QyxRQUFQLENBQWdCcWpCLFdBQWhCLEVBQVo7QUFBQSxVQUNJOWYsU0FBUyxHQUFHLEtBQUt3RyxJQURyQjtBQUdBMUMsV0FBSyxDQUFDYSxRQUFOLENBQWVvYyxLQUFmLEVBQXNCL2dCLFNBQVMsQ0FBQ3NmLFdBQWhDO0FBQ0F4YixXQUFLLENBQUNjLE1BQU4sQ0FBYTlDLE1BQWIsRUFBcUI5QixTQUFTLENBQUNnakIsWUFBL0I7QUFFQWhqQixlQUFTLENBQUMwRyxlQUFWO0FBQ0ExRyxlQUFTLENBQUMyRyxRQUFWLENBQW1CN0MsS0FBbkI7QUFFQSxXQUFLakQsTUFBTCxDQUFZYixTQUFaLEVBQXVCMmdCLE1BQXZCLENBQThCM2dCLFNBQVMsQ0FBQzJJLFVBQXhDLEVBQW9EM0ksU0FBUyxDQUFDNEksU0FBOUQ7QUFDRDs7O3VDQUNrQjtBQUNqQixVQUFJNUksU0FBUyxHQUFHLEtBQUt3RyxJQUFyQjtBQUFBLFVBQ0krWixVQUFVLEdBQUd2Z0IsU0FBUyxDQUFDdWdCLFVBRDNCO0FBQUEsVUFFSW9ELE1BQU0sR0FBRyxLQUFLN2YsS0FGbEI7QUFBQSxVQUdJOGYsU0FISjtBQUtBLFVBQUlyRCxVQUFVLEdBQUcsQ0FBakIsRUFBb0IsT0FBTyxJQUFQO0FBRXBCcUQsZUFBUyxHQUFHNWpCLFNBQVMsQ0FBQ2dLLFVBQVYsQ0FBcUJ1VyxVQUFVLEdBQUcsQ0FBbEMsQ0FBWjtBQUVBb0QsWUFBTSxDQUFDaGYsUUFBUCxDQUFnQmdmLE1BQU0sQ0FBQ25jLGNBQXZCLEVBQXVDbWMsTUFBTSxDQUFDNWYsV0FBOUM7QUFDQTRmLFlBQU0sQ0FBQy9lLE1BQVAsQ0FBY2dmLFNBQVMsQ0FBQ2xjLFlBQXhCLEVBQXNDa2MsU0FBUyxDQUFDNWYsU0FBaEQ7QUFFQWhFLGVBQVMsQ0FBQzBHLGVBQVY7QUFDQTFHLGVBQVMsQ0FBQzJHLFFBQVYsQ0FBbUJnZCxNQUFuQjtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7b0NBQ2VsZixJLEVBQU07QUFDcEIsVUFBTWpGLE1BQU0sR0FBR2lGLElBQUksQ0FBQ00sVUFBcEI7QUFDQSxVQUFNOGUsR0FBRyxHQUFHcmtCLE1BQU0sQ0FBQzRZLE9BQVAsQ0FBZTBMLFdBQWYsRUFBWjtBQUVBLGFBQ0VELEdBQUcsS0FBSyxRQUFSLElBQW9CQSxHQUFHLEtBQUssT0FBNUIsSUFBdUNBLEdBQUcsS0FBSyxNQUEvQyxJQUF5REEsR0FBRyxLQUFLLE1BQWpFLElBQ0FBLEdBQUcsS0FBSyxNQURSLElBQ2tCQSxHQUFHLEtBQUssT0FEMUIsSUFDcUNBLEdBQUcsS0FBSyxVQUQ3QyxJQUVBQSxHQUFHLEtBQUssS0FGUixJQUVpQkEsR0FBRyxLQUFLLFFBRnpCLElBRXFDQSxHQUFHLEtBQUssT0FGN0MsSUFFd0RBLEdBQUcsS0FBSyxPQUZoRSxJQUdBQSxHQUFHLEtBQUssT0FIUixJQUdtQkEsR0FBRyxLQUFLLE9BSDNCLElBR3NDQSxHQUFHLEtBQUssUUFIOUMsSUFHMERBLEdBQUcsS0FBSyxPQUhsRSxJQUlBQSxHQUFHLEtBQUssUUFKUixJQUlvQkEsR0FBRyxLQUFLLEtBSjVCLElBSXFDQSxHQUFHLEtBQUssTUFKN0MsSUFLQUEsR0FBRyxLQUFLLE1BTFIsSUFLa0JBLEdBQUcsS0FBSyxRQUwxQixJQU1BLENBQUMsS0FBS0UsU0FBTCxDQUFldmtCLE1BQWYsRUFBdUIsS0FBdkIsQ0FQSCxDQU9pQztBQUMvQjtBQVJGO0FBVUQ7Ozs4QkFDU2lGLEksRUFBTTBCLFEsRUFBVTtBQUN4QixhQUFPMUIsSUFBUCxFQUFhO0FBQ1gsWUFBSUEsSUFBSSxDQUFDMEQsUUFBTCxLQUFrQmhDLFFBQXRCLEVBQWdDLE9BQU8sSUFBUDtBQUNoQzFCLFlBQUksR0FBR0EsSUFBSSxDQUFDTSxVQUFaO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFQO0FBQ0Q7Ozs0QkFDT04sSSxFQUFNO0FBQ1osVUFBSWhCLElBQUo7QUFDQSxVQUFJLE9BQU9nQixJQUFQLEtBQWdCLFFBQXBCLEVBQThCaEIsSUFBSSxHQUFHZ0IsSUFBUCxDQUE5QixLQUNLO0FBQ0gsWUFBSUEsSUFBSSxJQUFJLE9BQU9BLElBQUksQ0FBQzJCLElBQVosS0FBcUIsUUFBakMsRUFBMkMzQyxJQUFJLEdBQUdnQixJQUFJLENBQUMyQixJQUFaLENBQTNDLEtBQ0szQyxJQUFJLEdBQUcsS0FBS0EsSUFBWjtBQUNOO0FBQ0QsYUFBT0EsSUFBSSxDQUFDdWdCLE1BQUwsQ0FBWSxjQUFaLE1BQWdDLENBQUMsQ0FBeEM7QUFDRDs7O2dDQUNXbGlCLE0sRUFBUWlmLEssRUFBTztBQUN6QixVQUFJL2dCLFNBQVMsR0FBRyxLQUFLd0csSUFBckI7QUFBQSxVQUNJb0csUUFBUSxHQUFHOUssTUFBTSxDQUFDNGhCLHVCQUFQLENBQStCM0MsS0FBL0IsQ0FEZjtBQUdBLGFBQ0VuVSxRQUFRLEtBQUssQ0FBYixJQUNBQSxRQUFRLEtBQUssRUFEYixJQUVDLENBQUNBLFFBQUQsSUFBYTVNLFNBQVMsQ0FBQ2dqQixZQUFWLEdBQXlCaGpCLFNBQVMsQ0FBQ3NmLFdBSG5EO0FBSUQ7OzsrQkFDVTtBQUNULFVBQUl0ZixTQUFTLEdBQUcsS0FBS3dHLElBQXJCO0FBQUEsVUFDSW1DLFVBQVUsR0FBRzNJLFNBQVMsQ0FBQzJJLFVBRDNCO0FBQUEsVUFFSUMsU0FBUyxHQUFHNUksU0FBUyxDQUFDNEksU0FGMUI7QUFJQSxhQUNFRCxVQUFVLEtBQUtDLFNBQWYsSUFDQUQsVUFBVSxDQUFDeEMsUUFBWCxLQUF3QixDQUR4QixLQUVDLENBQUN3QyxVQUFVLENBQUNtYSxXQUFaLElBQTRCbmEsVUFBVSxDQUFDbWEsV0FBWCxDQUF1QlksdUJBQXZCLENBQStDOWEsU0FBL0MsTUFBOEQsQ0FGM0YsQ0FERjtBQUlEOzs7aUNBQ1luRSxJLEVBQU07QUFDakIsV0FBS1gsS0FBTCxDQUFXc2YsVUFBWCxDQUFzQjNlLElBQXRCO0FBQ0EsYUFBTyxDQUFDLENBQUMsS0FBSytCLElBQUwsQ0FBVTdFLFFBQVYsRUFBVDtBQUNEOzs7Ozs7cUJBL1JrQmlOLFU7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOztBQUNBOzs7Ozs7QUFFQSxJQUFJNVQsaUJBQUosQ0FBZTtBQUNkTSxRQUFNLEVBQUU7QUFDTEMsT0FBRyxFQUFFO0FBQ0gsK0JBQXlCLGFBRHRCO0FBRUgsb0JBQWMsYUFGWDtBQUdILHdCQUFrQixpQkFIZjtBQUlILDJCQUFxQixtQkFKbEI7QUFLSCwwQkFBb0I7QUFMakI7QUFEQSxHQURNO0FBVWI2VyxzQkFBb0IsRUFBRSxJQVZUO0FBV2JsSixJQUFFLEVBQUUsSUFYUztBQWFiK2EsVUFBUSxFQUFFLEtBYkc7QUFlYkMsU0FBTyxFQUFFO0FBQ1A1TixTQUFLLEVBQUU7QUFDTHBOLFFBQUUsRUFBRSxJQURDO0FBRUxVLFVBQUksRUFBRSxLQUZEO0FBR0x1YSxXQUFLLEVBQUU7QUFIRixLQURBO0FBTVBoa0IsWUFBUSxFQUFFO0FBQ1IrSSxRQUFFLEVBQUUsSUFESTtBQUVSVSxVQUFJLEVBQUUsS0FGRTtBQUdSdWEsV0FBSyxFQUFFO0FBSEM7QUFOSCxHQWZJO0FBNEJiaGtCLFVBQVEsRUFBRSxLQTVCRztBQTZCYm1XLE9BQUssRUFBRSxLQTdCTTtBQStCYmhhLFVBL0JhLHNCQStCRjtBQUNULFNBQUs4bkIsYUFBTDtBQUNBLFNBQUtDLFdBQUw7QUFDRCxHQWxDWTtBQW1DYkEsYUFuQ2EseUJBbUNDO0FBQUE7O0FBQ1pwcEIsdUJBQU8wQixHQUFQLENBQVcsUUFBWCxFQUFxQkMsSUFBckIsQ0FBMEIsVUFBQXVCLE1BQU0sRUFBSTtBQUNsQyxXQUFJLENBQUMrbEIsT0FBTCxDQUFhL2pCLFFBQWIsQ0FBc0J5SixJQUF0QixHQUE2QnpMLE1BQTdCO0FBQ0EsYUFBT2xELG1CQUFPMEIsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLFVBQUF5QixRQUFRO0FBQUEsZUFBSSxLQUFJLENBQUM2bEIsT0FBTCxDQUFhNU4sS0FBYixDQUFtQjFNLElBQW5CLEdBQTBCdkwsUUFBOUI7QUFBQSxPQUFwQyxDQUFQO0FBQ0QsS0FIRCxFQUlHekIsSUFKSCxDQUlRO0FBQUEsYUFBTSxLQUFJLENBQUNpRSxNQUFMLEVBQU47QUFBQSxLQUpSO0FBS0QsR0F6Q1k7QUEwQ2JBLFFBMUNhLG9CQTBDSjtBQUNQLFFBQU15akIsWUFBWSxHQUNmLEtBQUtKLE9BQUwsQ0FBYS9qQixRQUFiLENBQXNCeUosSUFBdEIsSUFBOEIsS0FBS3pKLFFBQXBDLElBQ0MsS0FBSytqQixPQUFMLENBQWE1TixLQUFiLENBQW1CMU0sSUFBbkIsSUFBMkIsS0FBSzBNLEtBRm5DOztBQUlBLFFBQUlnTyxZQUFKLEVBQWtCO0FBQ2hCLFdBQUtDLE1BQUw7QUFDRCxLQUZELE1BR0ssSUFBSSxLQUFLTixRQUFMLElBQWlCLENBQUNLLFlBQXRCLEVBQW9DO0FBQ3ZDLFdBQUtqaUIsTUFBTDtBQUNEO0FBQ0YsR0FyRFk7QUFzRGJraUIsUUF0RGEsb0JBc0RKO0FBQ1AsUUFBSUwsT0FBTyxHQUFHLEtBQUtBLE9BQW5CO0FBQUEsUUFBNEJNLEdBQTVCOztBQUVBLFFBQUksQ0FBQyxLQUFLUCxRQUFWLEVBQW9CO0FBQ2xCLFVBQU0vYSxFQUFFLEdBQUcsS0FBS0EsRUFBTCxHQUFVM0osTUFBTSxDQUFDOUMsUUFBUCxDQUFnQjJLLGFBQWhCLENBQThCLE1BQTlCLENBQXJCO0FBQ0E3SCxZQUFNLENBQUM5QyxRQUFQLENBQWdCK0UsSUFBaEIsQ0FBcUJnSSxXQUFyQixDQUFpQ04sRUFBakM7QUFDRDs7QUFDRCxTQUFLLElBQUl1YixDQUFULElBQWNQLE9BQWQsRUFBdUI7QUFDckJNLFNBQUcsR0FBR04sT0FBTyxDQUFDTyxDQUFELENBQWI7QUFDQSxVQUFJRCxHQUFHLENBQUM1YSxJQUFKLElBQVksQ0FBQzRhLEdBQUcsQ0FBQ0wsS0FBakIsSUFBMEIsS0FBS00sQ0FBTCxDQUE5QixFQUF1QyxLQUFLQyxTQUFMLENBQWVELENBQWYsRUFBdkMsS0FDSyxJQUFJRCxHQUFHLENBQUNMLEtBQUosS0FBYyxDQUFDLEtBQUtNLENBQUwsQ0FBRCxJQUFZLENBQUNELEdBQUcsQ0FBQzVhLElBQS9CLENBQUosRUFBMEMsS0FBSythLFlBQUwsQ0FBa0JGLENBQWxCO0FBQ2hEOztBQUNELFFBQUksQ0FBQ1AsT0FBTyxDQUFDNU4sS0FBUixDQUFjNk4sS0FBZixJQUF3QixDQUFDRCxPQUFPLENBQUMvakIsUUFBUixDQUFpQmdrQixLQUE5QyxFQUFxRDtBQUNuRCxXQUFLOWhCLE1BQUw7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLdWlCLGNBQUw7QUFDQSxXQUFLM1IsWUFBTDtBQUNEOztBQUVELFNBQUtnUixRQUFMLEdBQWdCLElBQWhCO0FBQ0QsR0ExRVk7QUEyRWI1aEIsUUEzRWEsb0JBMkVKO0FBQ1AsUUFBSSxLQUFLNGhCLFFBQVQsRUFBbUI7QUFDakIsVUFBTVksSUFBSSxHQUFHLEtBQUszYixFQUFsQjtBQUNBLFVBQU1nYixPQUFPLEdBQUcsS0FBS0EsT0FBckI7O0FBRUEsV0FBSyxJQUFJTyxDQUFULElBQWNQLE9BQWQsRUFBdUI7QUFDckIsWUFBSUEsT0FBTyxDQUFDTyxDQUFELENBQVAsQ0FBV04sS0FBZixFQUFzQjtBQUNwQixlQUFLUSxZQUFMLENBQWtCRixDQUFsQjtBQUNEO0FBQ0Y7O0FBRURsbEIsWUFBTSxDQUFDOUMsUUFBUCxDQUFnQitFLElBQWhCLENBQXFCbUksV0FBckIsQ0FBaUNrYixJQUFqQztBQUNBLFdBQUtaLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDtBQUNGLEdBekZZO0FBMEZiRyxlQTFGYSwyQkEwRkc7QUFDZCxRQUFNVSxXQUFXLEdBQUcsS0FBS1osT0FBTCxDQUFhNU4sS0FBYixDQUFtQnBOLEVBQW5CLEdBQXdCM0osTUFBTSxDQUFDOUMsUUFBUCxDQUFnQjJLLGFBQWhCLENBQThCLGVBQTlCLENBQTVDO0FBQ0EsUUFBTTJkLGNBQWMsR0FBRyxLQUFLYixPQUFMLENBQWEvakIsUUFBYixDQUFzQitJLEVBQXRCLEdBQTJCM0osTUFBTSxDQUFDOUMsUUFBUCxDQUFnQjJLLGFBQWhCLENBQThCLE1BQTlCLENBQWxEO0FBQ0EwZCxlQUFXLENBQUN0VCxLQUFaLEdBQW9CelQsT0FBTyxDQUFDNlAsSUFBUixDQUFhQyxVQUFiLENBQXdCLGNBQXhCLENBQXBCO0FBQ0FrWCxrQkFBYyxDQUFDdlQsS0FBZixHQUF1QnpULE9BQU8sQ0FBQzZQLElBQVIsQ0FBYUMsVUFBYixDQUF3QixXQUF4QixDQUF2QjtBQUNELEdBL0ZZO0FBZ0diNlcsV0FoR2EscUJBZ0dITSxJQWhHRyxFQWdHRztBQUNkLFFBQU1ILElBQUksR0FBRyxLQUFLM2IsRUFBbEI7QUFDQSxRQUFNc2IsR0FBRyxHQUFHLEtBQUtOLE9BQUwsQ0FBYWMsSUFBYixDQUFaO0FBQ0EsUUFBTXhlLElBQUksR0FBRyxJQUFiO0FBQ0EsUUFBTTdGLE9BQU8sR0FBRzZqQixHQUFHLENBQUM3akIsT0FBSixHQUFjcWtCLElBQUksS0FBSyxPQUFULEdBQzVCLEtBQUtDLFdBQUwsQ0FBaUIxakIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FENEIsR0FFNUIsS0FBSzROLGdCQUFMLENBQXNCNU4sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FGRjtBQUlBc2pCLFFBQUksQ0FBQ3JiLFdBQUwsQ0FBaUJnYixHQUFHLENBQUN0YixFQUFyQjtBQUNBc2IsT0FBRyxDQUFDTCxLQUFKLEdBQVksSUFBWjtBQUVBSyxPQUFHLENBQUN0YixFQUFKLENBQU96SCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ2QsT0FBakMsRUFBMEMsS0FBMUM7QUFDRCxHQTVHWTtBQTZHYmdrQixjQTdHYSx3QkE2R0FLLElBN0dBLEVBNkdNO0FBQ2pCLFFBQU1ILElBQUksR0FBRyxLQUFLM2IsRUFBbEI7QUFDQSxRQUFNc2IsR0FBRyxHQUFHLEtBQUtOLE9BQUwsQ0FBYWMsSUFBYixDQUFaO0FBRUFILFFBQUksQ0FBQ2xiLFdBQUwsQ0FBaUI2YSxHQUFHLENBQUN0YixFQUFyQjtBQUNBc2IsT0FBRyxDQUFDTCxLQUFKLEdBQVksS0FBWjtBQUVBSyxPQUFHLENBQUN0YixFQUFKLENBQU94SCxtQkFBUCxDQUEyQixPQUEzQixFQUFvQzhpQixHQUFHLENBQUM3akIsT0FBeEMsRUFBaUQsS0FBakQ7QUFDRCxHQXJIWTtBQXNIYmlrQixnQkF0SGEsNEJBc0hJO0FBQUE7O0FBQ2YzcEIsdUJBQU8wQixHQUFQLENBQVcsU0FBWCxFQUNHQyxJQURILENBQ1EsVUFBQTRTLEdBQUc7QUFBQSxhQUFJLE1BQUksQ0FBQ3RHLEVBQUwsQ0FBUTdCLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEJtSSxHQUFHLENBQUMvRSxLQUFKLENBQVUsR0FBVixFQUFlaUcsR0FBZixDQUFtQixVQUFBNUgsQ0FBQztBQUFBLGVBQUlBLENBQUMsR0FBRyxPQUFSO0FBQUEsT0FBcEIsRUFBcUN5YSxJQUFyQyxDQUEwQyxHQUExQyxDQUE5QixDQUFKO0FBQUEsS0FEWDtBQUVELEdBekhZO0FBMEhiMkIsYUExSGEseUJBMEhDO0FBQ1osU0FBSzVPLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS3pWLE1BQUw7QUFDRCxHQTdIWTtBQThIYnNrQixtQkE5SGEsK0JBOEhPO0FBQ2xCLFNBQUs3TyxLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUt6VixNQUFMO0FBQ0QsR0FqSVk7QUFrSWJ1a0IsaUJBbElhLDZCQWtJSztBQUNoQixTQUFLamxCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLVSxNQUFMO0FBQ0QsR0FySVk7QUFzSWJ3a0IsbUJBdElhLCtCQXNJTztBQUNsQixTQUFLbGxCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLVSxNQUFMO0FBQ0QsR0F6SVk7QUEwSWJva0IsYUExSWEseUJBMElDO0FBQ1osU0FBS2xsQixJQUFMLENBQVUsY0FBVjtBQUNELEdBNUlZO0FBNklib1Asa0JBN0lhLDhCQTZJTTtBQUNqQixTQUFLcFAsSUFBTCxDQUFVLG9CQUFWO0FBQ0Q7QUEvSVksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7cUJBRWUsSUFBSTdFLFlBQUosQ0FBVTtBQUN2QlUsTUFBSSxFQUFFLFdBRGlCO0FBRXZCb3BCLE1BQUksRUFBRSxTQUZpQjtBQUd2QjFwQixRQUFNLEVBQUU7QUFDTmdxQixVQUFNLEVBQUUsQ0FDTixZQURNLEVBRU4sYUFGTSxFQUdOLGVBSE0sRUFJTixhQUpNLEVBS04sdUJBTE0sRUFNTixtQkFOTSxFQU9OLGlCQVBNLEVBUU4sY0FSTSxFQVNOLGdCQVRNLEVBVU4sZ0JBVk0sRUFXTixrQkFYTSxFQVlOLFlBWk0sRUFhTixtQkFiTSxFQWNOLFlBZE0sRUFlTixhQWZNLEVBZ0JOLHdCQWhCTSxFQWtCTjtBQUNBLDBCQW5CTSxFQW9CUixvQkFwQlEsRUFxQk4sdUJBckJNLEVBc0JOLHNCQXRCTSxFQXVCTiwwQ0F2Qk07QUFERjtBQUhlLENBQVYsQzs7Ozs7Ozs7Ozs7QUNGZix5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQWU7QUFDYkMsU0FBTyxFQUFFeG5CLE9BQU8sQ0FBQ3luQixPQUFSLENBQWdCQyxXQUFoQixHQUE4QkYsT0FEMUI7QUFFYjFvQixVQUFRLEVBQUM7QUFDUG1DLGFBQVMsRUFBRTtBQUNUMG1CLE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLElBQW5CLENBRE07QUFFVEMsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FGTTtBQUdUOWMsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FITTtBQUlUM0IsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsQ0FKTTtBQUtUdWQsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FMTTtBQU1UOWdCLE9BQUMsRUFBRSxDQUFDLFVBQUQsRUFBYSxLQUFiLEVBQW9CLElBQXBCLENBTk07QUFPVCxZQUFNLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULENBUEc7QUFRVDJGLE9BQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxDQVJNO0FBU1R0SCxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLElBQVgsQ0FUTTtBQVVUc0MsT0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULENBVk07QUFXVCxXQUFLLENBQUMsRUFBRCxFQUFLLElBQUwsQ0FYSTtBQVlULFdBQUssQ0FBQyxFQUFELEVBQUssSUFBTCxDQVpJO0FBYVRzaEIsYUFBTyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsQ0FiQTtBQWNUQyxlQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixLQUFsQixDQWRGO0FBZVRDLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBVCxDQWZLO0FBZ0JUQyxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTDtBQWhCSyxLQURKO0FBbUJQam5CLFdBQU8sRUFBRTtBQUNQLFdBQUs7QUFBRXlFLGFBQUssRUFBRTtBQUFULE9BREU7QUFFUCxXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BRkU7QUFHUCxXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BSEU7QUFJUCxXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BSkU7QUFLUCxXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BTEU7QUFNUCtGLE9BQUMsRUFBRTtBQUFFL0YsYUFBSyxFQUFFO0FBQVQ7QUFOSSxLQW5CRjtBQTJCUHhHLFdBQU8sRUFBRTtBQUNQNEIsY0FBUSxFQUFFLElBREg7QUFFUHFuQixnQkFBVSxFQUFFLEtBRkw7QUFHUEMsZ0JBQVUsRUFBRSxJQUhMO0FBSVA3cEIsV0FBSyxFQUFFLEtBSkE7QUFLUFksWUFBTSxFQUFFLE9BTEQ7QUFNUGtwQixjQUFRLEVBQUUsTUFOSDtBQU9QaFksVUFBSSxFQUFFLE1BUEM7QUFRUG1CLGNBQVEsRUFBRSxJQVJIO0FBU1A4VyxZQUFNLEVBQUUsV0FURDtBQVVQQyxVQUFJLEVBQUUsTUFWQztBQVdQQyxRQUFFLEVBQUUsRUFYRztBQVlQcHBCLGdCQUFVLEVBQUU7QUFaTCxLQTNCRjtBQXlDUGlDLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUUsSUFESDtBQUVMbW5CLFlBQU0sRUFBRSxJQUZIO0FBR0xDLGFBQU8sRUFBRTtBQUhKLEtBekNBO0FBOENQcm9CLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsSUFESjtBQUVKRSxjQUFRLEVBQUUsSUFGTjtBQUdKRSxpQkFBVyxFQUFFLElBSFQ7QUFJSjZZLGdCQUFVLEVBQUUsS0FKUjtBQUtKQyxtQkFBYSxFQUFFLEtBTFg7QUFNSm1QLGVBQVMsRUFBRSxLQU5QO0FBT0pDLGlCQUFXLEVBQUUsSUFQVDtBQVFKQyxpQkFBVyxFQUFFLElBUlQ7QUFTSkMsYUFBTyxFQUFFLElBVEw7QUFVSkMsaUJBQVcsRUFBRSxLQVZUO0FBV0pDLGVBQVMsRUFBRSxJQVhQO0FBWUpDLGFBQU8sRUFBRSxJQVpMO0FBYUpDLGtCQUFZLEVBQUUsS0FiVjtBQWNKdG9CLGFBQU8sRUFBRSxXQWRMO0FBZUpxQyxnQkFBVSxFQUFFLE9BZlI7QUFnQkprbUIsaUJBQVcsRUFBRSxJQWhCVDtBQWlCSkMsY0FBUSxFQUFFO0FBakJOLEtBOUNDO0FBaUVQbkIsTUFBRSxFQUFFO0FBQ0ZvQixVQUFJLEVBQUU7QUFDSkMsWUFBSSxFQUFFO0FBQUVDLGtCQUFRLEVBQUU7QUFBWixTQURGO0FBRUpDLFlBQUksRUFBRTtBQUFFRCxrQkFBUSxFQUFFO0FBQVosU0FGRjtBQUdKOVEsYUFBSyxFQUFFO0FBQUU4USxrQkFBUSxFQUFFO0FBQVosU0FISDtBQUlKdG9CLGVBQU8sRUFBRTtBQUFFc29CLGtCQUFRLEVBQUU7QUFBWixTQUpMO0FBS0ovVCxlQUFPLEVBQUU7QUFBRStULGtCQUFRLEVBQUU7QUFBWixTQUxMO0FBTUpqYyxhQUFLLEVBQUU7QUFBRWljLGtCQUFRLEVBQUU7QUFBWixTQU5IO0FBT0pFLGFBQUssRUFBRTtBQUFFRixrQkFBUSxFQUFFO0FBQVosU0FQSDtBQVFKRyxjQUFNLEVBQUU7QUFBRUgsa0JBQVEsRUFBRTtBQUFaO0FBUkosT0FESjtBQVdGSSxXQUFLLEVBQUU7QUFYTDtBQWpFRyxHQUZJO0FBaUZienFCLFNBQU8sRUFBRTtBQUNQaEIsV0FBTyxFQUFFO0FBREYsR0FqRkk7QUFvRmIwckIsV0FBUyxFQUFFLEVBcEZFO0FBcUZiQyxNQUFJLEVBQUU7QUFDSjdxQixZQUFRLEVBQUUsS0FETjtBQUVKRSxXQUFPLEVBQUUsS0FGTDtBQUdKMHFCLGFBQVMsRUFBRTtBQUhQO0FBckZPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FBO0FBRWJ6WSxzQkFBb0IsRUFBRSxFQUZUO0FBSWIyWSxpQkFBZSxFQUFFLEVBSko7QUFNYkMsYUFBVyxFQUFFO0FBQ1hDLGFBQVMsRUFBRSxTQURBO0FBRVhDLFNBQUssRUFBRSxTQUZJO0FBR1hDLFVBQU0sRUFBRSxTQUhHO0FBSVhDLFVBQU0sRUFBRSxTQUpHO0FBS1hDLE9BQUcsRUFBRSxTQUxNO0FBTVhDLFVBQU0sRUFBRSxTQU5HO0FBT1hDLFFBQUksRUFBRSxTQVBLO0FBUVhDLFNBQUssRUFBRTtBQVJJO0FBTkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZixJQUFNeHRCLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQVN5dEIsR0FBVCxFQUFjO0FBQzFCLE1BQU1ybEIsTUFBTSxHQUFHMUMsS0FBSyxDQUFDQyxPQUFOLENBQWM4bkIsR0FBZCxJQUFxQixFQUFyQixHQUEwQixFQUF6QztBQUNBLE1BQUlDLEdBQUo7O0FBQ0EsT0FBSyxJQUFJQyxJQUFULElBQWlCRixHQUFqQixFQUFzQjtBQUNwQixRQUFJQSxHQUFHLENBQUM1cUIsY0FBSixDQUFtQjhxQixJQUFuQixDQUFKLEVBQThCO0FBQzVCRCxTQUFHLEdBQUdELEdBQUcsQ0FBQ0UsSUFBRCxDQUFUOztBQUNBLFVBQUlELEdBQUcsS0FBSyxJQUFSLElBQWdCLFFBQU9BLEdBQVAsTUFBZSxRQUFuQyxFQUE2QztBQUMzQ3RsQixjQUFNLENBQUN1bEIsSUFBRCxDQUFOLEdBQWUzdEIsS0FBSyxDQUFDMHRCLEdBQUQsQ0FBcEI7QUFDRCxPQUZELE1BR0V0bEIsTUFBTSxDQUFDdWxCLElBQUQsQ0FBTixHQUFlRCxHQUFmO0FBQ0g7QUFDRjs7QUFDRCxTQUFPdGxCLE1BQVA7QUFDRCxDQWJEOztRQWVTcEksSyxHQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFJLFU7O1FBQUFBLFU7OztBQUVYLHNCQUFZc2MsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmQSxPQUFHLENBQUNrUixNQUFKLEdBQWEsRUFBYjtBQUNBbFIsT0FBRyxDQUFDbVIsV0FBSixHQUFrQixFQUFsQjtBQUVBLG9GQUFNblIsR0FBTjtBQUVBLFVBQUtsRixvQkFBTCxJQUE2QixNQUFLYSxZQUFMLEVBQTdCO0FBQ0EsS0FBQyxNQUFLNkUsU0FBTixJQUFtQixNQUFLNFEsWUFBTCxFQUFuQjtBQVBlO0FBUWhCOzs7O21DQUNjQyxNLEVBQVEzRCxJLEVBQU1ybkIsQyxFQUFHO0FBQzlCLFVBQUl1TCxFQUFFLEdBQUd2TCxDQUFDLENBQUNxRixNQUFYO0FBQUEsVUFDSTRsQixRQURKO0FBQUEsVUFDY0MsSUFEZDtBQUFBLFVBQ29CNVIsSUFEcEI7QUFBQSxVQUMwQnNILENBRDFCO0FBQUEsVUFDNkJ1SyxJQUQ3QjtBQUFBLFVBQ21DQyxPQURuQztBQUFBLFVBQzRDQyxLQUQ1Qzs7QUFHQSxXQUFLSixRQUFMLElBQWlCRCxNQUFqQixFQUF5QjtBQUN2QnBLLFNBQUMsR0FBR3FLLFFBQVEsQ0FBQyxDQUFELENBQVo7QUFDQUMsWUFBSSxHQUFHRCxRQUFQO0FBQ0FFLFlBQUksR0FBR3ZLLENBQUMsS0FBSyxHQUFiO0FBQ0F3SyxlQUFPLEdBQUd4SyxDQUFDLEtBQUssR0FBaEI7QUFDQXlLLGFBQUssR0FBR3pLLENBQUMsS0FBSyxHQUFkO0FBRUEsWUFBSXVLLElBQUksSUFBSUMsT0FBWixFQUFxQkgsUUFBUSxHQUFHQSxRQUFRLENBQUMzRixNQUFULENBQWdCLENBQWhCLENBQVg7O0FBRXJCLFlBQUkrRixLQUFLLElBQ0xELE9BQU8sSUFBSTdmLEVBQUUsQ0FBQy9HLFNBQUgsQ0FBYWMsUUFBYixDQUFzQjJsQixRQUF0QixDQURYLElBRUFFLElBQUksSUFBSTVmLEVBQUUsQ0FBQ2hILEVBQUgsS0FBVTBtQixRQUZsQixJQUdBMWYsRUFBRSxDQUFDZixRQUFILENBQVlvUSxXQUFaLE9BQThCcVEsUUFIbEMsRUFJRTtBQUVBM1IsY0FBSSxHQUFHMFIsTUFBTSxDQUFDRSxJQUFELENBQWI7QUFFQSxjQUFJLE9BQU81UixJQUFQLEtBQWdCLFVBQXBCLEVBQWdDQSxJQUFJLENBQUN0WixDQUFELEVBQUl1TCxFQUFKLENBQUosQ0FBaEMsS0FDSyxJQUFJLEtBQUsrTixJQUFMLENBQUosRUFBZ0IsS0FBS0EsSUFBTCxFQUFXdFosQ0FBWCxFQUFjdUwsRUFBZDtBQUVyQjtBQUNEO0FBQ0Y7QUFDRjs7O21DQUNjO0FBQUE7O0FBQ2IsV0FBS3ZHLEVBQUwsQ0FBUSxlQUFSLEVBQXlCLFVBQUFBLEVBQUUsRUFBSTtBQUM3QixZQUFJQSxFQUFKLEVBQVEsTUFBSSxDQUFDc1EsWUFBTCxHQUFSLEtBQ0ssTUFBSSxDQUFDcFEsZUFBTDtBQUNOLE9BSEQ7QUFJRDs7O2dDQUNXbWlCLEksRUFBTS9OLEksRUFBTS9OLEUsRUFBSTtBQUMxQkEsUUFBRSxHQUFHQSxFQUFFLElBQUksS0FBS0EsRUFBaEI7QUFDQSxVQUFNdkksT0FBTyxHQUFHLE9BQU9zVyxJQUFQLEtBQWdCLFVBQWhCLEdBQTZCQSxJQUE3QixHQUFvQyxLQUFLQSxJQUFMLENBQXBEO0FBRUEvTixRQUFFLENBQUN6SCxnQkFBSCxDQUFvQnVqQixJQUFwQixFQUEwQnJrQixPQUExQixFQUFtQyxLQUFuQzs7QUFFQSxVQUFJdUksRUFBRSxLQUFLLEtBQUtBLEVBQWhCLEVBQW9CO0FBQ2xCLFlBQUksQ0FBQyxLQUFLc2YsTUFBTCxDQUFZeEQsSUFBWixDQUFMLEVBQXdCLEtBQUt3RCxNQUFMLENBQVl4RCxJQUFaLElBQW9CLEVBQXBCOztBQUN4QixhQUFLd0QsTUFBTCxDQUFZeEQsSUFBWixFQUFrQmxnQixJQUFsQixDQUF1Qm5FLE9BQXZCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBSzhuQixXQUFMLENBQWlCM2pCLElBQWpCLENBQXNCLENBQUNvRSxFQUFELEVBQUs4YixJQUFMLEVBQVdya0IsT0FBWCxDQUF0QjtBQUNEO0FBQ0Y7OzttQ0FDYztBQUNiLFVBQUlyRixNQUFNLEdBQUcsS0FBS0EsTUFBbEI7QUFBQSxVQUNJMnRCLFNBREo7QUFBQSxVQUNlL2YsRUFEZjtBQUFBLFVBQ21CeWYsTUFEbkI7QUFBQSxVQUMyQjNELElBRDNCO0FBQUEsVUFDaUNya0IsT0FEakM7QUFHQSxVQUFJLENBQUNyRixNQUFELElBQVcsRUFBRTJ0QixTQUFTLEdBQUczdEIsTUFBTSxDQUFDeVcsR0FBckIsQ0FBWCxJQUF3QyxFQUFFN0ksRUFBRSxHQUFHLEtBQUtBLEVBQVosQ0FBNUMsRUFBNkQsT0FBTyxLQUFQOztBQUU3RCxXQUFLOGIsSUFBTCxJQUFhaUUsU0FBYixFQUF3QjtBQUN0Qk4sY0FBTSxHQUFHTSxTQUFTLENBQUNqRSxJQUFELENBQWxCO0FBQ0Fya0IsZUFBTyxHQUFHLEtBQUsyRSxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLNGpCLGNBQXRCLEVBQXNDUCxNQUF0QyxFQUE4QzNELElBQTlDLENBQVY7QUFDQTliLFVBQUUsQ0FBQ3pILGdCQUFILENBQW9CdWpCLElBQXBCLEVBQTBCcmtCLE9BQTFCLEVBQW1DLEtBQW5DO0FBQ0EsWUFBSSxDQUFDLEtBQUs2bkIsTUFBTCxDQUFZeEQsSUFBWixDQUFMLEVBQXdCLEtBQUt3RCxNQUFMLENBQVl4RCxJQUFaLElBQW9CLEVBQXBCOztBQUN4QixhQUFLd0QsTUFBTCxDQUFZeEQsSUFBWixFQUFrQmxnQixJQUFsQixDQUF1Qm5FLE9BQXZCO0FBQ0Q7QUFDRjs7O3NDQUNpQjtBQUNoQixVQUFJcWtCLElBQUosRUFBVXdELE1BQVYsRUFBa0J2ZCxDQUFsQjs7QUFFQSxXQUFLK1osSUFBTCxJQUFhLEtBQUt3RCxNQUFsQixFQUEwQjtBQUN4QkEsY0FBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWXhELElBQVosQ0FBVDtBQUNBL1osU0FBQyxHQUFHdWQsTUFBTSxDQUFDNXFCLE1BQVg7O0FBQ0EsZUFBT3FOLENBQUMsRUFBUixFQUFZO0FBQ1YsZUFBSy9CLEVBQUwsQ0FBUXhILG1CQUFSLENBQTRCc2pCLElBQTVCLEVBQWtDd0QsTUFBTSxDQUFDdmQsQ0FBRCxDQUF4QyxFQUE2QyxLQUE3Qzs7QUFDQXVkLGdCQUFNLENBQUM5YixNQUFQLENBQWN6QixDQUFkLEVBQWlCLENBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJa2UsTUFBTSxHQUFHLEtBQUtWLFdBQWxCO0FBQUEsVUFBK0I1cUIsQ0FBQyxHQUFHLENBQW5DO0FBQUEsVUFBc0NtUyxHQUF0QztBQUNBL0UsT0FBQyxHQUFHa2UsTUFBTSxDQUFDdnJCLE1BQVg7O0FBRUEsYUFBT0MsQ0FBQyxHQUFHb04sQ0FBWCxFQUFjcE4sQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCbVMsV0FBRyxHQUFHbVosTUFBTSxDQUFDdHJCLENBQUQsQ0FBWjtBQUNBbVMsV0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPdE8sbUJBQVAsQ0FBMkJzTyxHQUFHLENBQUMsQ0FBRCxDQUE5QixFQUFtQ0EsR0FBRyxDQUFDLENBQUQsQ0FBdEMsRUFBMkMsS0FBM0M7QUFDRDtBQUNGOzs7O0VBM0Y2QmpWLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZoQzs7QUFFQSxJQUFNSyxhQUFhLEdBQUcsSUFBSUwsZUFBSixDQUFZO0FBQ2hDdUIsVUFEZ0Msc0JBQ3JCO0FBQUE7O0FBQ1RpRCxVQUFNLENBQUNrQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFBMm5CLEtBQUssRUFBSTtBQUN4QyxVQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsUUFBTixDQUFlN2UsS0FBZixDQUFxQixHQUFyQixFQUEwQmYsR0FBMUIsRUFBYjs7QUFDQSxVQUFJLENBQUMsZUFBRCxFQUFrQixnQkFBbEIsRUFBb0MsZUFBcEMsRUFBcUQsa0JBQXJELEVBQXlFNEMsUUFBekUsQ0FBa0YrYyxJQUFsRixDQUFKLEVBQTZGO0FBQzNGLGFBQUksQ0FBQ3RwQixJQUFMLENBQVUsdUJBQVYsRUFBbUM7QUFDakN3cEIsaUJBQU8sRUFBRUgsS0FBSyxDQUFDRyxPQURrQjtBQUVqQ0Msa0JBQVEsRUFBRUosS0FBSyxDQUFDRSxRQUFOLENBQWU3ZSxLQUFmLENBQXFCLEdBQXJCLEVBQTBCZixHQUExQixHQUFnQ2UsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkMrQixLQUEzQyxLQUFxRCxHQUFyRCxHQUEyRDRjLEtBQUssQ0FBQ0ssTUFBakUsR0FBMEUsR0FBMUUsR0FBZ0ZMLEtBQUssQ0FBQ00sS0FGL0Q7QUFHakNDLGNBQUksRUFBRyxJQUFJdFksSUFBSixFQUFELENBQWFDLE9BQWI7QUFIMkIsU0FBbkM7QUFLRDtBQUNGLEtBVEQsRUFTRyxLQVRIO0FBVUQ7QUFaK0IsQ0FBWixDQUF0Qjs7cUJBZWVsVyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDakJBLFVBQVN3dUIsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQ2xDLE9BQUssSUFBSWhzQixDQUFULElBQWNnc0IsSUFBZDtBQUNFLFFBQUksQ0FBQ0QsSUFBSSxDQUFDL3JCLENBQUQsQ0FBVCxFQUFjK3JCLElBQUksQ0FBQy9yQixDQUFELENBQUosR0FBVWdzQixJQUFJLENBQUNoc0IsQ0FBRCxDQUFkO0FBRGhCOztBQUdBLFNBQU8rckIsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xELElBQU0vdUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFXO0FBRWpDLFNBQU9rRCxPQUFPLENBQUNtcEIsSUFBUixDQUFhNEMsS0FBYixDQUFtQjtBQUFFQyxpQkFBYSxFQUFFLElBQWpCO0FBQXVCNXFCLFVBQU0sRUFBRTtBQUEvQixHQUFuQixFQUEwRHZDLElBQTFELENBQStELFVBQUFzcUIsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQyxDQUFELENBQVI7QUFBQSxHQUFuRSxDQUFQO0FBQ0QsQ0FIRDs7UUFLU3JzQixlLEdBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xULElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNJLEdBQVQsRUFBYztBQUM5QixNQUFNa1gsQ0FBQyxHQUFHbFgsR0FBRyxDQUFDdXVCLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLE1BQUlyWCxDQUFDLEtBQUssQ0FBQyxDQUFYLEVBQWMsT0FBT2xYLEdBQVAsQ0FBZCxLQUNLLE9BQU9BLEdBQUcsQ0FBQ3duQixNQUFKLENBQVcsQ0FBWCxFQUFjdFEsQ0FBZCxDQUFQO0FBQ04sQ0FKRDs7UUFNU3RYLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3VDTSxZQUFXO0FBQ3hCb0IsVUFBUSxDQUFDZ0YsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDO0FBQUEsV0FBTXdvQixpQkFBaUIsRUFBdkI7QUFBQSxHQUE5QyxFQUF5RTtBQUN2RUMsV0FBTyxFQUFFLEtBRDhEO0FBRXZFQyxXQUFPLEVBQUUsSUFGOEQ7QUFHdkVDLFFBQUksRUFBRTtBQUhpRSxHQUF6RTtBQUtELEM7O0FBbkREOzs7Ozs7OztBQVFBLFNBQVNILGlCQUFULEdBQTZCO0FBQzNCLE1BQUkvZ0IsRUFBSixFQUFROUMsSUFBUixFQUFjaWtCLE9BQWQsQ0FEMkIsQ0FFM0I7O0FBQ0E1dEIsVUFBUSxDQUFDNnRCLGVBQVQsQ0FBeUJqakIsWUFBekIsQ0FBc0MsTUFBdEMsRUFBOEN0SixPQUFPLENBQUM2UCxJQUFSLENBQWEyYyxhQUFiLEdBQTZCampCLE9BQTdCLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQTlDLEVBSDJCLENBSTNCOztBQUNBLE1BQU1rakIsWUFBWSxHQUFHL3RCLFFBQVEsQ0FBQ21ULGdCQUFULENBQTBCLGlCQUExQixDQUFyQjtBQUNBLE1BQU02YSxZQUFZLEdBQUdodUIsUUFBUSxDQUFDbVQsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXJCO0FBTjJCO0FBQUE7QUFBQTs7QUFBQTtBQVEzQix5QkFBVTRhLFlBQVYsOEhBQXdCO0FBQXBCdGhCLFFBQW9CO0FBQ3RCbWhCLGFBQU8sR0FBR25oQixFQUFFLENBQUNtaEIsT0FBYjtBQUNBLFVBQU1LLE1BQU0sR0FBR0wsT0FBTyxDQUFDSyxNQUF2Qjs7QUFFQSxVQUFJQSxNQUFKLEVBQVk7QUFDVnRrQixZQUFJLEdBQUdySSxPQUFPLENBQUM2UCxJQUFSLENBQWFDLFVBQWIsQ0FBd0I2YyxNQUF4QixDQUFQOztBQUVBLFlBQUd0a0IsSUFBSSxJQUFJQSxJQUFJLElBQUksSUFBbkIsRUFBeUI7QUFDdkI4QyxZQUFFLENBQUNtRSxXQUFILEdBQWlCakgsSUFBakI7QUFDRDtBQUNGO0FBQ0Y7QUFuQjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBb0IzQiwwQkFBVXFrQixZQUFWLG1JQUF3QjtBQUFwQnZoQixRQUFvQjtBQUN0Qm1oQixhQUFPLEdBQUduaEIsRUFBRSxDQUFDbWhCLE9BQWI7QUFFQSxPQUFDLE9BQUQsRUFBVSxhQUFWLEVBQXlCdmQsT0FBekIsQ0FBaUMsVUFBQTZkLElBQUksRUFBSTtBQUN2QyxZQUFNQyxRQUFRLEdBQUdQLE9BQU8sQ0FBQyxTQUFTTSxJQUFWLENBQXhCOztBQUVBLFlBQUlDLFFBQUosRUFBYztBQUNaeGtCLGNBQUksR0FBR3JJLE9BQU8sQ0FBQzZQLElBQVIsQ0FBYUMsVUFBYixDQUF3QitjLFFBQXhCLENBQVA7O0FBRUEsY0FBSXhrQixJQUFJLElBQUlBLElBQUksSUFBSSxJQUFwQixFQUEwQjtBQUN4QjhDLGNBQUUsQ0FBQzdCLFlBQUgsQ0FBZ0JzakIsSUFBSSxDQUFDcFMsV0FBTCxFQUFoQixFQUFvQ25TLElBQXBDO0FBQ0Q7QUFDRjtBQUNGLE9BVkQ7QUFXRDtBQWxDMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1DNUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NELElBQUl5a0IsTUFBTSxHQUFHLEVBQWI7Ozs7Ozs7Ozs7O3VCQUlLcmxCLEssRUFBTzdFLE8sRUFBUztBQUNqQixVQUFJLENBQUNrcUIsTUFBTSxDQUFDcmxCLEtBQUQsQ0FBWCxFQUFvQnFsQixNQUFNLENBQUNybEIsS0FBRCxDQUFOLEdBQWdCLEVBQWhCO0FBRXBCcWxCLFlBQU0sQ0FBQ3JsQixLQUFELENBQU4sQ0FBY1YsSUFBZCxDQUFtQm5FLE9BQW5CO0FBQ0Q7Ozt5QkFDSXJGLE0sRUFBaUI7QUFBQTs7QUFBQSx3Q0FBTnd2QixJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDcEJ4dkIsWUFBTSxHQUFHQSxNQUFNLENBQUNtUCxLQUFQLENBQWEsR0FBYixDQUFUO0FBRUEsVUFBSTVNLENBQUMsR0FBRyxDQUFSO0FBQUEsVUFBV29OLENBQUMsR0FBRzNQLE1BQU0sQ0FBQ3NDLE1BQXRCO0FBQUEsVUFBOEJtdEIsS0FBOUI7O0FBRUEsYUFBT2x0QixDQUFDLEdBQUdvTixDQUFYLEVBQWNwTixDQUFDLEVBQWYsRUFBbUI7QUFDakJrdEIsYUFBSyxHQUFHRixNQUFNLENBQUN2dkIsTUFBTSxDQUFDdUMsQ0FBRCxDQUFQLENBQWQ7QUFFQSxZQUFJa3RCLEtBQUosRUFDRUEsS0FBSyxDQUFDamUsT0FBTixDQUFjLFVBQUFuTSxPQUFPO0FBQUEsaUJBQUlBLE9BQU8sQ0FBQzZLLEtBQVIsQ0FBYyxLQUFkLEVBQW9Cc2YsSUFBcEIsQ0FBSjtBQUFBLFNBQXJCO0FBQ0g7QUFDRjs7OzRCQUNPdGxCLEssRUFBZ0I7QUFBQSx5Q0FBTnNsQixJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDdEIsYUFBTy9zQixPQUFPLENBQUN5bkIsT0FBUixDQUFnQndGLFdBQWhCLENBQTRCO0FBQUVDLFVBQUUsRUFBRXpsQixLQUFOO0FBQWFzbEIsWUFBSSxFQUFFQSxJQUFuQjtBQUF5QkksWUFBSSxFQUFFO0FBQS9CLE9BQTVCLFdBQXlFLFlBQU0sQ0FBRSxDQUFqRixDQUFQO0FBQ0Q7OzswQkFDS2pMLE8sRUFBU2tMLEksRUFBZ0I7QUFBQSx5Q0FBUEMsS0FBTztBQUFQQSxhQUFPO0FBQUE7O0FBQzdCLGFBQU8sWUFBbUI7QUFBQSwyQ0FBUEMsS0FBTztBQUFQQSxlQUFPO0FBQUE7O0FBQ3hCLGVBQU9GLElBQUksQ0FBQzNmLEtBQUwsQ0FBV3lVLE9BQVgsRUFBb0JtTCxLQUFLLENBQUNoZ0IsTUFBTixDQUFhaWdCLEtBQWIsQ0FBcEIsQ0FBUDtBQUNELE9BRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYXR3QixPOztRQUFBQSxPOzs7QUFFWCxtQkFBWXVjLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZjs7QUFFQSxTQUFLclAsQ0FBTCxJQUFVcVAsR0FBVjtBQUFlLFlBQUtyUCxDQUFMLElBQVVxUCxHQUFHLENBQUNyUCxDQUFELENBQWI7QUFBZjs7QUFFQSxRQUFJM00sTUFBTSxHQUFHLE1BQUtBLE1BQWxCO0FBQUEsUUFDSWd3QixTQURKO0FBQUEsUUFDZXJqQixDQURmO0FBQUEsUUFDa0J0SyxDQURsQjtBQUFBLFFBQ3FCZ0QsT0FEckI7O0FBR0EsUUFBSXJGLE1BQU0sS0FBS2d3QixTQUFTLEdBQUdod0IsTUFBTSxDQUFDQyxHQUF4QixDQUFWLEVBQXdDO0FBQ3RDLFdBQUtvQyxDQUFMLElBQVUydEIsU0FBVixFQUFxQjtBQUNuQjNxQixlQUFPLEdBQUcycUIsU0FBUyxDQUFDM3RCLENBQUQsQ0FBbkI7QUFDQSxZQUFJLE1BQUtnRCxPQUFMLENBQUosRUFDRSxNQUFLZ0MsRUFBTCxDQUFRaEYsQ0FBUixFQUFXLE1BQUsySCxLQUFMLGdDQUFpQixNQUFLM0UsT0FBTCxDQUFqQixDQUFYO0FBQ0g7QUFDRjs7QUFDRCxLQUFDLE1BQUtyRSxRQUFOLElBQWtCLE1BQUtBLFFBQUwsRUFBbEI7QUFmZTtBQWdCaEI7OztFQWxCMEJpdkIscUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFyd0IsSzs7UUFBQUEsSzs7O0FBRVgsaUJBQVlvYyxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2YsK0VBQU1BLEdBQU47QUFFQSxVQUFLa1UsSUFBTCxHQUFZLElBQVo7QUFFQSxRQUFNeEcsSUFBSSxHQUFHLE1BQUtBLElBQWxCO0FBRUFqbkIsV0FBTyxDQUFDeW5CLE9BQVIsQ0FBZ0JpRyxTQUFoQixDQUEwQjNvQixXQUExQixDQUFzQyxNQUFLd0MsS0FBTCxnQ0FBaUIsTUFBS29tQixXQUF0QixDQUF0QztBQUVBLFFBQUkxRyxJQUFJLEtBQUssWUFBVCxJQUF5QkEsSUFBSSxLQUFLLFlBQXRDLEVBQW9ELE1BQUsyRyxXQUFMOztBQUVwRCxVQUFLQyxrQkFBTDs7QUFYZTtBQVloQjs7OzsyQkFDTXR3QixNLEVBQVE7QUFDYixXQUFLc3dCLGtCQUFMLENBQXdCdHdCLE1BQXhCO0FBQ0Q7Ozt1Q0FDa0JBLE0sRUFBUTtBQUN6QkEsWUFBTSxHQUFHQSxNQUFNLElBQUksS0FBS0EsTUFBeEI7QUFDQSxVQUFJdXdCLFlBQUosRUFBa0JDLHFCQUFsQjs7QUFFQSxVQUFJeHdCLE1BQUosRUFBWTtBQUNWdXdCLG9CQUFZLEdBQUd2d0IsTUFBTSxDQUFDZ3FCLE1BQXRCOztBQUNBLFlBQUl1RyxZQUFKLEVBQWtCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2hCLGlDQUFjQSxZQUFkO0FBQUEsa0JBQVNsdUIsQ0FBVDtBQUNFLG1CQUFLZ0YsRUFBTCxDQUFRaEYsQ0FBUixFQUFXLEtBQUsySCxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLMGxCLFdBQXRCLEVBQW1DcnRCLENBQW5DLENBQVg7QUFERjtBQURnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2pCOztBQUNEbXVCLDZCQUFxQixHQUFHeHdCLE1BQU0sQ0FBQ3l3QixVQUEvQjs7QUFDQSxZQUFJRCxxQkFBSixFQUEyQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN6QixrQ0FBY0EscUJBQWQ7QUFBQSxrQkFBU3ZOLENBQVQ7QUFDRSxtQkFBSzViLEVBQUwsQ0FBUTRiLENBQVIsRUFBVyxLQUFLalosS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBSzBtQixXQUF0QixFQUFtQ3pOLENBQW5DLENBQVg7QUFERjtBQUR5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRzFCO0FBQ0Y7QUFDRjs7O2dDQUNXME4sRyxFQUFLQyxNLEVBQVFDLFksRUFBYztBQUNyQ0YsU0FBRyxDQUFDbkIsSUFBSixHQUFXbUIsR0FBRyxDQUFDbkIsSUFBSixJQUFZLEVBQXZCO0FBQ0EsVUFBSUEsSUFBSSxHQUFHLEdBQUcxZixNQUFILENBQVU2Z0IsR0FBRyxDQUFDaEIsRUFBZCxFQUFrQmdCLEdBQUcsQ0FBQ25CLElBQXRCLENBQVg7QUFDQSxVQUFJLENBQUNvQixNQUFELElBQVcsQ0FBQ0EsTUFBTSxDQUFDdHdCLElBQXZCLEVBQTZCa3ZCLElBQUksR0FBR0EsSUFBSSxDQUFDMWYsTUFBTCxDQUFZOGdCLE1BQVosRUFBb0JDLFlBQXBCLENBQVA7QUFDN0IsV0FBS3BzQixJQUFMLENBQVV5TCxLQUFWLENBQWdCLElBQWhCLEVBQXNCc2YsSUFBdEI7QUFDQSxVQUFJbUIsR0FBRyxDQUFDZixJQUFSLEVBQWMsT0FBTyxJQUFQLENBTHVCLENBS1Y7O0FBQzNCLGFBQU8sS0FBUDtBQUNEOzs7Z0NBQ1d2dEIsQyxFQUFZO0FBQ3RCLFVBQU1xbkIsSUFBSSxHQUFHLEtBQUtBLElBQWxCOztBQURzQix3Q0FBTjhGLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUV0QixVQUFJNVEsR0FBRyxHQUFHO0FBQUUrUSxVQUFFLEVBQUV0dEIsQ0FBTjtBQUFTbXRCLFlBQUksRUFBRUE7QUFBZixPQUFWO0FBQ0EsVUFBSTlGLElBQUksS0FBSyxTQUFiLEVBQXdCam5CLE9BQU8sQ0FBQ3luQixPQUFSLENBQWdCd0YsV0FBaEIsQ0FBNEI5USxHQUE1QixXQUF1QyxZQUFNLENBQUUsQ0FBL0MsRUFBeEIsS0FDSyxJQUFJOEssSUFBSSxLQUFLLFlBQWIsRUFBMkI7QUFDOUIsWUFBTW9ILE9BQU8sR0FBR3RCLElBQUksQ0FBQ0EsSUFBSSxDQUFDbHRCLE1BQUwsR0FBYyxDQUFmLENBQXBCO0FBQ0EsWUFBSXl1QixHQUFKOztBQUNBLFlBQUlELE9BQU8sS0FBS3Z3QixTQUFaLEtBQTBCd3dCLEdBQUcsR0FBR0QsT0FBTyxDQUFDQyxHQUF4QyxDQUFKLEVBQWtEO0FBQ2hELGNBQUlBLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3BCdHVCLG1CQUFPLENBQUNtcEIsSUFBUixDQUFhNEMsS0FBYixDQUFtQjtBQUFFM3FCLG9CQUFNLEVBQUU7QUFBVixhQUFuQixFQUFxQ3ZDLElBQXJDLENBQTBDLFVBQUFzcUIsSUFBSSxFQUFJO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2hELHNDQUFnQkEsSUFBaEI7QUFBQSxzQkFBU21GLElBQVQ7QUFDRXR1Qix5QkFBTyxDQUFDbXBCLElBQVIsQ0FBYThELFdBQWIsQ0FBeUJxQixJQUFHLENBQUNucUIsRUFBN0IsRUFBaUNnWSxHQUFqQyxFQUFzQztBQUFFb1MsMkJBQU8sRUFBRUYsT0FBTyxDQUFDRSxPQUFSLElBQW1CO0FBQTlCLG1CQUF0QyxXQUErRSxZQUFNLENBQUUsQ0FBdkY7QUFERjtBQURnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2pELGFBSEQ7QUFJRCxXQUxELE1BS087QUFDTHZ1QixtQkFBTyxDQUFDbXBCLElBQVIsQ0FBYThELFdBQWIsQ0FBeUJvQixPQUFPLENBQUNDLEdBQWpDLEVBQXNDblMsR0FBdEMsRUFBMkM7QUFBRW9TLHFCQUFPLEVBQUVGLE9BQU8sQ0FBQ0UsT0FBUixJQUFtQjtBQUE5QixhQUEzQyxXQUFvRixZQUFNLENBQUUsQ0FBNUY7QUFDRDtBQUNGLFNBVEQsTUFTTztBQUNMdnVCLGlCQUFPLENBQUNtcEIsSUFBUixDQUFhNEMsS0FBYixDQUFtQjtBQUFDO0FBQUQsV0FBbkIsRUFBZ0VsdEIsSUFBaEUsQ0FBcUUsVUFBQXNxQixJQUFJLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDM0Usb0NBQWdCQSxJQUFoQjtBQUFBLG9CQUFTbUYsS0FBVDtBQUNFdHVCLHVCQUFPLENBQUNtcEIsSUFBUixDQUFhOEQsV0FBYixDQUF5QnFCLEtBQUcsQ0FBQ25xQixFQUE3QixFQUFpQ2dZLEdBQWpDLFdBQTRDLFlBQU0sQ0FBRSxDQUFwRDtBQURGO0FBRDJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHNUUsV0FIRDtBQUlEO0FBQ0Y7QUFDRjs7O2dDQUNXdmMsQyxFQUFZO0FBQUEseUNBQU5tdEIsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLFVBQU01USxHQUFHLEdBQUc7QUFBRStRLFVBQUUsRUFBRXR0QixDQUFOO0FBQVNtdEIsWUFBSSxFQUFFQTtBQUFmLE9BQVo7QUFDQSxVQUFJLEtBQUtVLElBQVQsRUFBZSxLQUFLQSxJQUFMLENBQVVRLFdBQVYsQ0FBc0I5UixHQUF0QjtBQUNoQjs7O2tDQUNhO0FBQ1osVUFBSSxDQUFDLEtBQUtxUyxrQkFBVixFQUE4QjtBQUM1QixhQUFLQyxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLbm5CLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtrbkIsT0FBdEIsQ0FBNUI7QUFDRDtBQUNGOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFNaEIsSUFBSSxHQUFHLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWF6dEIsT0FBTyxDQUFDeW5CLE9BQVIsQ0FBZ0JnSCxPQUFoQixDQUF3QjtBQUFFNXdCLFlBQUksRUFBRSxLQUFLQTtBQUFiLE9BQXhCLENBQXRDO0FBQ0E0dkIsVUFBSSxDQUFDa0IsWUFBTCxDQUFrQjVwQixXQUFsQixDQUE4QjtBQUFBLGVBQU0sTUFBSSxDQUFDMG9CLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JqUixFLEVBQUk7QUFBQTs7QUFDekJ4YyxhQUFPLENBQUN5bkIsT0FBUixDQUFnQm1ILFNBQWhCLENBQTBCN3BCLFdBQTFCLENBQXNDLFVBQUEwb0IsSUFBSSxFQUFJO0FBQzVDQSxZQUFJLENBQUNDLFNBQUwsQ0FBZTNvQixXQUFmLENBQTJCLE1BQUksQ0FBQ3dDLEtBQUwsQ0FBVyxNQUFYLEVBQWlCLE1BQUksQ0FBQ29tQixXQUF0QixDQUEzQjtBQUNBLFNBQUNuUixFQUFELElBQU9BLEVBQUUsRUFBVDtBQUNELE9BSEQ7QUFJRDs7OztFQXhGd0J4ZixlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUUsTTs7UUFBQUEsTTs7O0FBRVgsa0JBQVlxYyxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2YsZ0ZBQU1BLEdBQU47QUFFQSxVQUFLc1YsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFFQSxVQUFLNXVCLGFBQUwsR0FBcUI2dUIsNEJBQWlCcEYsSUFBakIsQ0FBc0I3cUIsUUFBdEIsR0FBaUMsTUFBakMsR0FBMEMsT0FBL0Q7QUFDQSxVQUFLeVMsWUFBTCxHQUFvQndkLDRCQUFpQnBGLElBQWpCLENBQXNCM3FCLE9BQXRCLEdBQWdDLE1BQWhDLEdBQXlDLE9BQTdEO0FBQ0EsVUFBS2d3QixjQUFMLEdBQXNCRCw0QkFBaUJwRixJQUFqQixDQUFzQkQsU0FBdEIsR0FBa0MsTUFBbEMsR0FBMkMsT0FBakU7QUFSZTtBQVNoQjs7OzsyQkFFTTtBQUFBOztBQUNMLGFBQU8xcEIsT0FBTyxDQUFDQyxPQUFSLENBQWdCZ3ZCLEtBQWhCLENBQXNCcndCLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb0IsT0FBTyxFQUFJO0FBQ2pELFlBQUlBLE9BQU8sSUFBSUEsT0FBTyxDQUFDMHBCLElBQXZCLEVBQTZCO0FBQzNCLGdCQUFJLENBQUN1RixRQUFMLENBQWNqdkIsT0FBTyxDQUFDMHBCLElBQXRCO0FBQ0Q7QUFDRixPQUpNLENBQVA7QUFLRDs7OzZCQUVRQSxJLEVBQU07QUFDYixXQUFLLElBQUlyTixJQUFULElBQWlCcU4sSUFBakIsRUFBdUI7QUFDckIsYUFBSyxVQUFVck4sSUFBZixJQUF1QnFOLElBQUksQ0FBQ3JOLElBQUQsQ0FBSixHQUFhLE1BQWIsR0FBc0IsT0FBN0M7QUFDRDtBQUNGOzs7b0NBRWU7QUFBQTs7QUFDZCxXQUFLYyxJQUFMLEdBQVl2ZSxJQUFaLENBQWlCO0FBQUEsZUFBTSxNQUFJLENBQUNtRCxJQUFMLENBQVUsNkJBQVYsQ0FBTjtBQUFBLE9BQWpCO0FBQ0Q7OzswQkFFc0I7QUFBQTs7QUFBQSxVQUFuQm10QixLQUFtQix1RUFBWCxTQUFXOztBQUNyQixVQUFJLEtBQUtMLFlBQVQsRUFBdUI7QUFDckIsZUFBUSxJQUFJTSxPQUFKLENBQVksVUFBQUMsQ0FBQztBQUFBLGlCQUFJN3RCLE1BQU0sQ0FBQ3dRLFVBQVAsQ0FBa0I7QUFBQSxtQkFBTXFkLENBQUMsQ0FBQyxNQUFJLENBQUN6d0IsR0FBTCxDQUFTdXdCLEtBQVQsQ0FBRCxDQUFQO0FBQUEsV0FBbEIsRUFBNEMsRUFBNUMsQ0FBSjtBQUFBLFNBQWIsQ0FBUjtBQUNEOztBQUNELFVBQU1qVyxJQUFJLEdBQUcsS0FBSyxVQUFVaVcsS0FBZixDQUFiO0FBQ0EsVUFBSSxDQUFDalcsSUFBTCxFQUFXLE1BQU0sV0FBV2lXLEtBQVgsR0FBbUIsaUJBQXpCOztBQUVYLFVBQUksQ0FBQyxLQUFLTixXQUFWLEVBQXVCO0FBQ3JCLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxhQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBRUEsZUFBTyxLQUFLelIsSUFBTCxHQUFZdmUsSUFBWixDQUFpQixZQUFNO0FBQzVCLGdCQUFJLENBQUNpd0IsWUFBTCxHQUFvQixLQUFwQjtBQUNBLGlCQUFPLE1BQUksQ0FBQyxVQUFVSyxLQUFYLENBQUosRUFBUDtBQUNELFNBSE0sQ0FBUDtBQUlEOztBQUNELGFBQU8sS0FBSyxVQUFVQSxLQUFmLEdBQVA7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2IsYUFBT252QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JndkIsS0FBaEIsQ0FBc0Jyd0IsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUF5d0IsWUFBWSxFQUFJO0FBQ3RELGVBQU90dkIsT0FBTyxDQUFDQyxPQUFSLENBQWdCMHBCLElBQWhCLENBQXFCL3FCLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBMHdCLGFBQWEsRUFBSTtBQUN0RCxXQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CeGdCLE9BQXBCLENBQTRCLFVBQUFvZ0IsS0FBSyxFQUFJO0FBQ25DRyx3QkFBWSxDQUFDSCxLQUFELENBQVosR0FBc0JHLFlBQVksQ0FBQ0gsS0FBRCxDQUFaLElBQXVCSSxhQUFhLENBQUNKLEtBQUQsQ0FBMUQ7QUFDRCxXQUZEO0FBR0EsY0FBSSxNQUFJLENBQUNqdkIsYUFBTCxLQUF1QixNQUEzQixFQUFtQ292QixZQUFZLENBQUN4d0IsUUFBYixHQUF3Qnl3QixhQUFhLENBQUN6d0IsUUFBdEM7QUFDbkMsaUJBQU8sTUFBSSxDQUFDMHdCLFlBQUwsR0FBb0Izd0IsSUFBcEIsQ0FBeUIsVUFBQUcsT0FBTyxFQUFJO0FBQ3pDc3dCLHdCQUFZLENBQUN0d0IsT0FBYixHQUF1QkEsT0FBdkI7QUFDQSxtQkFBT3N3QixZQUFQO0FBQ0QsV0FITSxDQUFQO0FBSUQsU0FUTSxDQUFQO0FBVUQsT0FYTSxDQUFQO0FBWUQ7Ozt5Q0FDb0I7QUFDbkIsYUFBT3R2QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JndkIsS0FBaEIsQ0FBc0Jyd0IsR0FBdEIsRUFBUDtBQUNEOzs7MENBQ3FCO0FBQ3BCLGFBQU9vQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IwcEIsSUFBaEIsQ0FBcUIvcUIsR0FBckIsRUFBUDtBQUNEOzs7bUNBQ2M7QUFDYixhQUFPb0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCMHBCLElBQWhCLENBQXFCL3FCLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBMHdCLGFBQWEsRUFBSTtBQUN0RCxZQUFNRSxhQUFhLEdBQUdGLGFBQWEsQ0FBQ3Z3QixPQUFwQztBQUVBLGVBQU9nQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JndkIsS0FBaEIsQ0FBc0Jyd0IsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUF5d0IsWUFBWSxFQUFJO0FBQ3RELGNBQU1JLFlBQVksR0FBR0osWUFBWSxDQUFDdHdCLE9BQWxDO0FBQ0EsY0FBSSxDQUFDeXdCLGFBQUwsRUFBb0IsT0FBT0MsWUFBUDtBQUNwQixjQUFJLENBQUNBLFlBQUwsRUFBbUIsT0FBT0QsYUFBUCxDQUhtQyxDQUt0RDs7QUFDQSxlQUFLLElBQUk3dkIsQ0FBVCxJQUFjOHZCLFlBQVksQ0FBQzF4QixPQUEzQjtBQUFvQ3l4Qix5QkFBYSxDQUFDenhCLE9BQWQsQ0FBc0I0QixDQUF0QixJQUEyQjh2QixZQUFZLENBQUMxeEIsT0FBYixDQUFxQjRCLENBQXJCLENBQTNCO0FBQXBDOztBQUVBLGlCQUFPNnZCLGFBQVA7QUFDRCxTQVRNLENBQVA7QUFVRCxPQWJNLENBQVA7QUFjRDs7O29DQUNlO0FBQ2QsYUFBT3p2QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0N0QixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQW9CLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNuQixRQUFSLElBQW9CaXdCLDRCQUFpQmp3QixRQUF6QztBQUFBLE9BQXRELENBQVA7QUFDRDs7O2dDQUNXO0FBQ1YsYUFBT2tCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmd2QixLQUFoQixDQUFzQnJ3QixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXl3QixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQ0ssSUFBbkMsRUFBeUMsT0FBTyxFQUFQO0FBQ3pDLGVBQU9MLFlBQVksQ0FBQ0ssSUFBcEI7QUFDRCxPQUhNLENBQVA7QUFJRDs7O21DQUNjO0FBQ2IsYUFBTzN2QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JndkIsS0FBaEIsQ0FBc0Jyd0IsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUF5d0IsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM5SCxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT3huQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IwcEIsSUFBaEIsQ0FBcUIvcUIsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUEwd0IsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUMvSCxPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU84SCxZQUFZLENBQUM5SCxPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QnhxQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGFzaG9wdC1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJzogJ3NldFN5bmNGb3JFbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnOiAncmVuYW1lRW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBlbnY6ICdpbmplY3Rpb24nLFxyXG5cclxuICB1cmw6ICcnLFxyXG4gIGhhc2hsZXNzVVJMOiAnJyxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47Ly9zaG93IG5vdGlmaWNhdGlvblxyXG5cclxuICAgIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZW5hbWVFbnRyeShlbnRyeSwgb2xkTmFtZSkge1xyXG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUgPT09IG9sZE5hbWUgJiYgIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIGlmICh0aGlzLmVudHJpZXNbb2xkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0U3luY0ZvckVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkICYmIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSkge1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0uc3luY2VkID0gZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUVudHJ5KGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICBpZiAoZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lID09PSBkZWxldGVkRW50cnkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICBhZGRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQpIHRoaXMubmFtZSA9IGVudHJpZXNbMF0ubmFtZTtcclxuICAgIGNvbnN0IGUgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZW50cmllc1swXS5pbW11dDtcclxuICB9LFxyXG5cclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdG11aSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VyLXBvcHVwJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9hdXRvLW1hcmtlcidcclxuXHJcbmltcG9ydCAnLi9tYWluJ1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5pbXBvcnQgX1JFU1RPUkVSIGZyb20gJy4vbW9kdWxlcy9yZXN0b3JlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAnb25TYXZlZEVudHJ5JyxcclxuICAgICAgJ3Jlc3VtZWQtb24taGFzaGNoYW5nZSc6ICdzZXRQYWdlUGFyYW1zJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmRQYWdlU3RhdGUnLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ2FjdGl2YXRlUmV0cnknLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcblxyXG4gICAgICAvLyBAUkVTVE9SRVJcclxuICAgICAgJ2VudHJpZXM6Zm91bmQnOiAnb25FbnRyaWVzRm91bmQnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmV0cnlBY3RpdmU6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuc2V0UGFnZVBhcmFtcygpO1xyXG4gIH0sXHJcblxyXG4gIHNldFBhZ2VQYXJhbXMoKSB7XHJcbiAgICBfU1RPUkUuaWZyYW1lID0gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIF9TVE9SRS51cmwgPSB3aW5kb3cuZG9jdW1lbnQuVVJMO1xyXG4gICAgX1NUT1JFLmhhc2hsZXNzVVJMID0gX0hBU0hMRVNTKF9TVE9SRS51cmwpO1xyXG4gIH0sXHJcbiAgb25TYXZlZEVudHJ5KGVudHJ5KSB7XHJcbiAgICBjb25zdCBpZ25vcmVIYXNoID0gIWVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAoZW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgX1NUT1JFLmFkZEVudHJpZXMoW2VudHJ5XSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgdGhpcy5yZXRyeUFjdGl2ZSA9IHRydWU7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICB0aGlzLnJldHJ5QWN0aXZlID0gZmFsc2U7XHJcbiAgfSxcclxuICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgIHRoaXMuZW1pdCgncGFnZS1zdGF0ZScsIHtcclxuICAgICAgc2VsZWN0aW9uOiAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkLFxyXG4gICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgcmV0cnlBY3RpdmU6IHRoaXMucmV0cnlBY3RpdmVcclxuICAgIH0sIGluZm8pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEBSRVNUT1JFUlxyXG4gIG9uRW50cmllc0ZvdW5kKGluZm8pIHtcclxuICAgIGxldCBlbnRyaWVzID0gaW5mby5lbnRyaWVzO1xyXG4gICAgZW50cmllcyA9IEFycmF5LmlzQXJyYXkoZW50cmllcykgPyBlbnRyaWVzIDogW2VudHJpZXNdO1xyXG5cclxuICAgIF9SRVNUT1JFUigpO1xyXG4gICAgX1NUT1JFLmFkZEVudHJpZXMoZW50cmllcyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NldDplbnRyaWVzJywgZW50cmllcyk7XHJcbiAgICBpZiAoaW5mby5yZWNlbnRseU9wZW5lZEVudHJ5KSB0aGlzLnVwZGF0ZU5hbWUoZW50cmllcywgaW5mby5yZWNlbnRseU9wZW5lZEVudHJ5KTtcclxuICAgIHRoaXMuZW1pdCgncmVzdG9yZTptYXJrcycsIGluZm8uZW50cmllcyk7XHJcbiAgfSxcclxuICB1cGRhdGVOYW1lKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgY29uc3QgaWdub3JlSGFzaCA9ICFmaXJzdEVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gX1NUT1JFLmhhc2hsZXNzVVJMIDogX1NUT1JFLnVybDtcclxuXHJcbiAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcic6ICdzZXRNYXJrZXInXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBtYXJrZXI6ICdtJyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldE1hcmtlcihrZXkpIHtcclxuICAgIHRoaXMubWFya2VyID0ga2V5O1xyXG4gIH0sXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiB0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNldXAuYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbk1vdXNldXAoKSB7XHJcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgdGhpcy5tYXJrZXIpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQk9PS01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFyayA9IG51bGw7XHJcbiAgICB0aGlzLmFuY2hvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQobWFyaykge1xyXG4gICAgbWFyayA9IG1hcmsgfHwgdGhpcy5tYXJrO1xyXG5cclxuICAgIGxldCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuICAgICAgICBhbmNob3IgPSB3cmFwcGVyc1swXTtcclxuXHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgYW5jaG9yLmlkID0gJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJztcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcblxyXG4gICAgdGhpcy5tYXJrID0gbWFyaztcclxuICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZW1vdmUoKSB7XHJcbiAgICBsZXQgbWFyayA9IHRoaXMubWFyayxcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvcixcclxuICAgICAgICB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aDtcclxuXHJcbiAgICBhbmNob3IuaWQgPSAnJztcclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuICB9XHJcbiAgc2Nyb2xsSW50b1ZpZXcoYm0pIHtcclxuICAgIGlmIChibSB8fCAoYm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJykpKVxyXG4gICAgICBibS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKHRydWUpO1xyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlKG9uKSB7XHJcbiAgICBpZiAob24gJiYgIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVnaXN0ZXJIYW5kbGVyKCkge1xyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpIHtcclxuICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgX1NUT1JFLnRtaWQgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSwgd2luZG93LmRvY3VtZW50KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXJrZXIsIGtleSwgcHJlU2V0dGluZ3MsIGltbXV0KSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uLCBkZWZhdWx0cztcclxuXHJcblx0XHR0aGlzLm1hcmtlciA9IG1hcmtlcjtcclxuXHRcdHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbWFya2VyLnNlbGVjdGlvbjtcclxuICAgIHRoaXMuaW1tdXQgPSBfU1RPUkUucmVkZXNjcmliaW5nID8gbWFya2VyLmlzSW1tdXQgOiBpbW11dDtcclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICAgIGNvbmRzOiBudWxsLFxyXG4gICAgICB0ZXh0OiBzZWxlY3Rpb24udGV4dCxcclxuICAgICAgbm90ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGQgaW4gZGVmYXVsdHMpIHtcclxuICAgICAgaWYgKCFwcmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShkKSkge1xyXG4gICAgICAgIHByZVNldHRpbmdzW2RdID0gZGVmYXVsdHNbZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZVNldHRpbmdzLmlkID0gcHJlU2V0dGluZ3MuaWQgfHwgKyttYXJrZXIuaWRjb3VudDtcclxuXHRcdHRoaXMuaWQgPSBwcmVTZXR0aW5ncy5pZDtcclxuXHRcdHRoaXMuc2ltcGxlID0gc2VsZWN0aW9uLnNpbXBsZTtcclxuXHJcblx0XHRsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLnJhbmdlO1xyXG5cclxuXHRcdHRoaXMuc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldDtcclxuXHRcdHRoaXMuZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0O1xyXG5cclxuXHRcdHRoaXMud3JhcHBlcnMgPSBudWxsO1xyXG4gICAgdGhpcy5jb250YWluZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhID0ge1xyXG5cdFx0XHRpZDogcHJlU2V0dGluZ3MuaWQsXHJcblx0XHRcdGtleToga2V5LFxyXG5cdFx0XHRzdHlsZTogcHJlU2V0dGluZ3Muc3R5bGUsXHJcblx0XHRcdGNvbmRzOiBwcmVTZXR0aW5ncy5jb25kcyxcclxuXHRcdFx0dGV4dDogcHJlU2V0dGluZ3MudGV4dCxcclxuXHRcdFx0Ym9va21hcms6IHByZVNldHRpbmdzLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiBwcmVTZXR0aW5ncy5ub3RlLFxyXG4gICAgICBzeW5jZWQ6IHByZVNldHRpbmdzLnN5bmNlZFxyXG5cdFx0fTtcclxuXHJcbiAgICBpZiAodGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkge1xyXG4gICAgICB0aGlzLmRlc2NyaWJlX2ltbXV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHRjcmVhdGUocmFuZ2UpIHtcclxuICAgIHJhbmdlID0gcmFuZ2UgfHwgdGhpcy5yYW5nZTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBzdHlsZSA9IHRoaXMua2V5RGF0YS5zdHlsZSxcclxuICAgICAgICBub2RlcyA9IHNlbGVjdGlvbi5ub2RlcyxcclxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgfHwgdGhpcy5jcmVhdGVXcmFwcGVycyhzdHlsZSwgbiksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbGFzdEluZGV4ID0gbiAtIDEsXHJcbiAgICAgICAgbm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgICAgaWYgKCFpKSByYW5nZS5zZXRTdGFydChub2RlLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuXHJcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcnNbaV0pO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh3cmFwcGVyc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKHRoaXMua2V5RGF0YS5ib29rbWFyaykgdGhpcy5tYXJrZXIuc2V0Qm9va21hcmsodGhpcywgZmFsc2UpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkgdGhpcy5kZXNjcmliZSgpO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJDbGlja0xpc3RlbmVycygpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuICByZWdpc3RlckNsaWNrTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgZm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrZXIucHJveHkodGhpcywgdGhpcy5vbkNsaWNrKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNsaWNrKGUpIHtcclxuICAgIGxldCBldmVudDtcclxuICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICBldmVudCA9ICdjbGlja2VkOm1hcmsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlICsgJ18wJztcclxuICAgICAgZXZlbnQgPSAnYWN0aXZhdGVkOm1hcmsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXJrZXIuZW1pdChldmVudCwge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgYm9va21hcms6ICEhdGhpcy5rZXlEYXRhLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiAhIXRoaXMua2V5RGF0YS5ub3RlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVmaW5lUG9zaXRpb24obiwgaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgbGV0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIG4gPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogd3JhcHBlcnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGZpcnN0V3JhcHBlciA9IHdyYXBwZXJzWzBdO1xyXG4gICAgY29uc3QgbGFzdFdyYXBwZXIgPSB3cmFwcGVyc1tuXTtcclxuICAgIGNvbnN0IGZpcnN0UGFyZW50ID0gZmlyc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBsYXN0UGFyZW50ID0gbGFzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGxldCBhbmNob3JQcmV2LCBmb2N1c1ByZXY7XHJcblxyXG4gICAgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQoZmlyc3RQYXJlbnQsIGZpcnN0V3JhcHBlciwgdHJ1ZSkgLSAxO1xyXG4gICAgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChsYXN0UGFyZW50LCBsYXN0V3JhcHBlciwgdHJ1ZSk7XHJcblxyXG4gICAgYW5jaG9yUHJldiA9IGZpcnN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBmb2N1c1ByZXYgPSBsYXN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcblxyXG4gICAgaWYgKGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5ub2RlVHlwZSA9PT0gMSkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gKz0gMTtcclxuICAgIGlmICghZm9jdXNQcmV2IHx8IGZvY3VzUHJldi5ub2RlVHlwZSA9PT0gMyB8fCBmaXJzdFBhcmVudCA9PT0gbGFzdFBhcmVudCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiAtPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA8IDApIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gMDtcclxuICAgIGlmICh0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgaWYgKGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgICAgdGhpcy5zdGFydE9mZnNldCA9IGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5kYXRhID8gYW5jaG9yUHJldi5kYXRhLmxlbmd0aCA6IDA7XHJcbiAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdGhpcy5zaW1wbGUgPyB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5rZXlEYXRhLnRleHQubGVuZ3RoIDogdGhpcy5lbmRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbih1bmRlZmluZWQsIHRydWUpXHJcbiAgICAgICAgLmRlc2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cdHVuZG8oKSB7XHJcblx0XHRsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuXHRcdFx0XHR3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMsXHJcblx0XHRcdFx0dyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuXHRcdFx0XHRjb250YWluZXIsIHdyYXBwZXI7XHJcblxyXG5cdFx0d2hpbGUgKHctLSkge1xyXG5cdFx0XHRjb250YWluZXIgPSBjb250YWluZXJzW3ddO1xyXG5cdFx0XHR3cmFwcGVyID0gd3JhcHBlcnNbd107XHJcblx0XHRcdGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcclxuXHRcdFx0Y29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHJlZG8oKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChjb250YWluZXJzWzBdLmNoaWxkTm9kZXNbdGhpcy5hbmNob3JOb2RlUG9zaXRpb25dLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV0uY2hpbGROb2Rlc1t0aGlzLmZvY3VzTm9kZVBvc2l0aW9uXSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24uY29sbGVjdE5vZGVzKCk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKCk7XHJcblx0fVxyXG5cdHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgaW5jbHVkaW5nVGV4dE5vZGVzKSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdGxldCBjaGlsZHJlbiA9IGluY2x1ZGluZ1RleHROb2RlcyB8fCBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0XHRcdGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHRjcmVhdGVXcmFwcGVycyhzdHlsZSwgbnVtYmVyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICB3cmFwcGVyO1xyXG5cclxuXHRcdGZvciAoIDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcblx0XHRcdHdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0Jyk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UoLzsvZywgJyFpbXBvcnRhbnQ7JykpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcsIHRoaXMuaWQgKyAnXycgKyBpKTtcclxuICAgICAgLy93cmFwcGVyLnNldEF0dHJpYnV0ZSgnY29udGV4dG1lbnUnLCAndGV4dG1hcmtlci1jdG0nKTtcclxuXHRcdFx0d3JhcHBlcnMucHVzaCh3cmFwcGVyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3cmFwcGVycztcclxuXHR9XHJcbiAgZGVzY3JpYmUoKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XHJcblx0XHRjb25zdCBlbmQgPSByYW5nZS5lbmRDb250YWluZXI7XHJcblx0XHRjb25zdCBzaW5nbGVOb2RlID0gdGhpcy5zaW1wbGU7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLndyYXBwZXJzWzBdLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBwYXJlbnRJc1RNID0gcGFyZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG5cdFx0Y29uc3QgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBncmFuZGdyYW1wYSA9IGdyYW1wYS5wYXJlbnROb2RlIHx8IDA7XHJcblx0XHRjb25zdCBmVE5QID0gdGhpcy5hbmNob3JOb2RlUG9zaXRpb247XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG5cdFx0XHRvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG5cdFx0XHRuMTogcGFyZW50SXNUTSA/ICdUTScgOiBwYXJlbnQubm9kZU5hbWUsXHJcblx0XHRcdHAxOiBmVE5QLFxyXG5cdFx0XHRuMjogZ3JhbXBhLm5vZGVOYW1lLFxyXG5cdFx0XHRwMjogdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSxcclxuXHRcdFx0cDM6IGdyYW5kZ3JhbXBhID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLCBncmFtcGEpIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRwNDogZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYS5wYXJlbnROb2RlLCBncmFuZGdyYW1wYSkgOiB1bmRlZmluZWRcclxuXHRcdH07XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG5cdH1cclxuICBkZXNjcmliZV9pbW11dCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgZW5kUG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGxldCBzdGFydCA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGVuZCA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBib2R5KSB7XHJcbiAgICAgIHN0YXJ0UG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoc3RhcnQucGFyZW50Tm9kZSwgc3RhcnQpKTtcclxuICAgICAgc3RhcnQgPSBzdGFydC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGVuZCAhPT0gYm9keSkge1xyXG4gICAgICBlbmRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChlbmQucGFyZW50Tm9kZSwgZW5kKSk7XHJcbiAgICAgIGVuZCA9IGVuZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgcDogc3RhcnRQb3NpdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBlOiB7XHJcbiAgICAgICAgbzogdGhpcy5lbmRPZmZzZXQsXHJcbiAgICAgICAgcDogZW5kUG9zaXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICB9XHJcblx0fSxcclxuXHJcbiAgaGFuZGxlcjogbnVsbCxcclxuICBhcHBlbmRlZDogZmFsc2UsXHJcbiAgaGVpZ2h0OiAwLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdwb3B1cCc7XHJcbiAgICAgIHRoaXMubWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwJyk7XHJcbiAgICBjb25zdCBiZ0NvbG9yUmVnRXhwID0gL2JhY2tncm91bmQtY29sb3I6KCNbYS1mMC05XXs2fSkvO1xyXG4gICAgbGV0IGJnQ29sb3IsIGNvbG9yQnRuO1xyXG4gICAgZm9yIChsZXQgbSBpbiB0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgYmdDb2xvciA9IHRoaXMubWFya2Vyc1ttXS5zdHlsZS5tYXRjaChiZ0NvbG9yUmVnRXhwKTtcclxuICAgICAgaWYgKGJnQ29sb3IpIHtcclxuICAgICAgICBjb2xvckJ0biA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwY29sb3InKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChjb2xvckJ0bik7XHJcbiAgICAgICAgY29sb3JCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3IucG9wKCk7XHJcbiAgICAgICAgY29sb3JCdG4uaWQgPSAndG1wb3B1cGNvbG9yLS0nICsgbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3coKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBzdHlsZSA9IHBvcHVwLnN0eWxlO1xyXG4gICAgbGV0IHBvcHVwSGVpZ2h0O1xyXG5cclxuICAgIGlmICghdGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5hcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gc2VsZWN0aW9uUG9zaXRpb24udG9wIC0gc2VsZWN0aW9uUG9zaXRpb24uaGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgKyAncHgnO1xyXG4gICAgICBzdHlsZS5sZWZ0ID0gc2VsZWN0aW9uUG9zaXRpb24ubGVmdCArIHdpbmRvdy5zY3JvbGxYICsgJ3B4JztcclxuXHJcbiAgICAgIHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSAtIHBvcHVwSGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKChwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodCkgIT09IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgIHN0eWxlLnRvcCA9IHBhcnNlSW50KHN0eWxlLnRvcCkgKyBwb3B1cEhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuICAgIHRoaXMuaGVpZ2h0ID0gcG9wdXBIZWlnaHQ7XHJcbiAgfSxcclxuICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIGlmICghc2VsZWN0ZWQpIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbk1vdXNlZG93bihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ1RNUE9QVVBDT0xPUicpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBvcHVwLW1hcmtlcicsIGVsLmlkLnNwbGl0KCctLScpLnBvcCgpKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSSyBmcm9tICcuL21hcmstaXRlbSdcclxuaW1wb3J0IF9CT09LTUFSSyBmcm9tICcuL2Jvb2ttYXJrJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuXHRldmVudHM6IHtcclxuXHRcdEVOVjoge1xyXG5cdFx0XHQnc2V0OmVudHJpZXMnOiAndXBkYXRlSUQnLFxyXG5cdFx0XHQncHJlc3NlZDptYXJrZXIta2V5JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3ByZXNzZWQ6aG90a2V5JzogJ29uSG90a2V5JyxcclxuICAgICAgJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgJ3NlbGVjdGlvbi1lbmQnOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAncmVzdG9yZWQ6cmFuZ2UnOiAncmVjcmVhdGUnLFxyXG4gICAgICAnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucyc6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAnY3R4OmInOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAnY3R4Oi1iJzogJ3JlbW92ZUJvb2ttYXJrJyxcclxuICAgICAgJ2N0eDpkJzogJ3JlbW92ZScsXHJcbiAgICAgICdjdHg6bSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdjdHg6bic6ICdhZGROb3RlJyxcclxuICAgICAgJ2N0eDpjJzogJ2NvcHknLFxyXG4gICAgICAndXBkYXRlZDpub3RlJzogJ3NhdmVOb3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdjaGFuZ2VkOm5vdGUtY29sb3InOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHQnY2hhbmdlZDpub3RlLXBvcyc6ICdzYXZlTm90ZScsXHJcbiAgICAgICdjaGFuZ2VkOm5vdGUtc2l6ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdCdzaWRlYmFyOmhpZ2hsaWdodCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnOiAncmVtb3ZlJyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJzogJ2FkZE5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCc6ICdpbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcyc6ICdzYXZlJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nOiAncmVzdW1lJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbyc6ICd1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbyc6ICdyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weSc6ICdjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAnc2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnOiAnb25IYXNoQ2hhbmdlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2VsZWN0aW9uOiBudWxsLFxyXG5cdGRvbmU6IFtdLFxyXG5cdHVuZG9uZTogW10sXHJcblx0dmlzdWFsbHlPcmRlcmVkTWFya3M6IFtdLFxyXG5cdHZpc3VhbGx5T3JkZXJlZE1hcmtJRHM6IFtdLFxyXG4gIGJvb2ttYXJrOiBudWxsLFxyXG4gIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRpZGNvdW50OiAwLFxyXG5cdG1hcmtTY3JvbGxQb3M6IC0xLFxyXG5cclxuICB1cGRhdGVJRChlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBsID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgY29uc3QgaWRzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcblxyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcblxyXG4gICAgICBpZiAoIWxvY2tlZCAmJiBlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRjb3VudCA9IGVudHJ5LmlkY291bnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1hcmtzID0gKGVudHJ5Lm1hcmtzIHx8IFtdKS5jb25jYXQoZW50cnkubG9zdCB8fCBbXSksXHJcbiAgICAgICAgICAgIGQgPSBtYXJrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICB3aGlsZSAoZC0tKSB7XHJcbiAgICAgICAgICAgIGlkcy5wdXNoKG1hcmtzW2RdLmlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaWRjb3VudCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGlkcyk7XHJcbiAgfSxcclxuXHRtYXJrKGtleSwgZGF0YSwgaW1tdXQpIHtcclxuXHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgY29uc3QgbWFyayA9IG5ldyBfTUFSSyh0aGlzLCBrZXksIGRhdGEsIGltbXV0KS5jcmVhdGUoKTtcclxuXHJcbiAgICBpZiAoZGF0YS5hdXRvbm90ZSkgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIG1hcmssIGRhdGEuYXV0b25vdGUpO1xyXG5cclxuXHRcdHJldHVybiBtYXJrO1xyXG5cdH0sXHJcblx0dW5kbyhub0F1dG9zYXZlKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lO1xyXG5cclxuXHRcdGlmIChkb25lLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lLnBvcCgpO1xyXG4gICAgICBjb25zdCBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICB0aGlzLnVuZG9uZS5wdXNoKG1hcmsudW5kbygpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmJvb2ttYXJrKSB0aGlzLnVuZG9Cb29rbWFyaygpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0fSxcclxuXHRyZWRvKG5vQXV0b3NhdmUpIHtcclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHVuZG9uZSA9IHRoaXMudW5kb25lO1xyXG5cclxuXHRcdGlmICh1bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgIHRoaXMuZG9uZS5wdXNoKG1hcmsucmVkbygpKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIFttYXJrXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0fSxcclxuICBjdXRPdXQoaSkge1xyXG4gICAgbGV0IG1hcmtlciA9IHRoaXMsXHJcbiAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgdG9CZVJlbW92ZWQgPSBbaV0sXHJcbiAgICAgICAgaW5kaWNlcyA9IFtpXSxcclxuICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGopIHtcclxuICAgICAgZm9yICh2YXIgeCA9IGogKyAxOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgIGlmIChtYXJrZXIubWFya3NJbnRlcnNlY3QoZG9uZVtqXSwgbWFyaykpIHtcclxuICAgICAgICAgIGlmICghdG9CZVJlbW92ZWQuaW5jbHVkZXMoeCkpIHRvQmVSZW1vdmVkLnB1c2goeCk7XHJcbiAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICB0b0JlUmVtb3ZlZC5zb3J0KCk7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3MoaW5kaWNlcy5zaGlmdCgpKTtcclxuICAgIH1cclxuICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgd2hpbGUgKHRvQmVSZW1vdmVkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmRvbmUuc3BsaWNlKHRvQmVSZW1vdmVkLnBvcCgpLCAxKVswXS51bmRvKCk7XHJcbiAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzbWFsbGVzdElEO1xyXG4gIH0sXHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGlkID0gaWQgPyBpZCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcbiAgICBpZiAoIWlkKSByZXR1cm4gdGhpcy51bmRvKCk7XHJcblxyXG4gICAgbGV0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQuc3BsaXQoJ18nKVswXSksXHJcbiAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgcG9zaXRpb24gPSBkb25lLmluZGV4T2YobWFyayksXHJcbiAgICAgICAgc21hbGxlc3RJRCwgaTtcclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT09IGwgLSAxKSB7XHJcbiAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLnVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBzbWFsbGVzdElEID0gdGhpcy5jdXRPdXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpID0gdGhpcy51bmRvbmUubGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy51bmRvbmUubGVuZ3RoKSB0aGlzLnJlZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGktLSkgdGhpcy51bmRvKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWRbMF0pO1xyXG4gIH0sXHJcbiAgcmVzdW1lKGFyZywgb3B0aW9ucykge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKVxyXG4gICAgICAuZm9yRWFjaChoaWdobGlnaHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhpZ2hsaWdodC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGlnaGxpZ2h0LnRleHRDb250ZW50KSwgaGlnaGxpZ2h0KTtcclxuICAgICAgICBjb250YWluZXIubm9ybWFsaXplKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9uZSA9IFtdO1xyXG4gICAgdGhpcy51bmRvbmUgPSBbXTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBbXTtcclxuICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IFtdO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSAtMTtcclxuXHJcbiAgICBjb25zdCBlbnRyeSA9ICFhcmcgJiYgX1NUT1JFLm5hbWUgJiYgX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdID8gX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdIDogbnVsbDtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ3Jlc3VtZWQ6bWFya2VycycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGltbXV0KGltbXV0YWJsZSkge1xyXG4gICAgdGhpcy5pc0ltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IHRydWU7XHJcbiAgICBfU1RPUkUuaW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gIH0sXHJcbiAgc2F2ZSgpIHtcclxuICAgIGNvbnN0IGlmcmFtZSA9IF9TVE9SRS5pZnJhbWU7XHJcbiAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG5cclxuICAgIF9TVE9SRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHtcclxuICAgICAgaWYgKF9TVE9SRS5pc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICBpZiAoIWxvY2tlZCAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoJ25hbWU6ZW50cnk/JykudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICBfU1RPUkUubmFtZSA9IHdpbmRvdy5wcm9tcHQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2UnLCBzdWIpKTtcclxuICAgICAgICAgICAgICBpZiAoX1NUT1JFLm5hbWUpIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgY29uZmlybWVkID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChpZnJhbWUpIGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpKTtcclxuICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHR9LFxyXG4gIGF1dG9zYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgaWYgKGF1dG9zYXZlKSB0aGlzLnNhdmUoKTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ3Vuc2F2ZWQtY2hhbmdlcycpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjb3B5KCkge1xyXG4gICAgY29uc3QgbWFyayA9IHRoaXMuZmluZE1hcmsoKTtcclxuICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBtYXJrLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbWFyay5zZWxlY3Rpb24uc2VsZjtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycztcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydCh3cmFwcGVyc1swXSwgMCk7XHJcbiAgICByYW5nZS5zZXRFbmQod3JhcHBlcnNbd3JhcHBlcnMubGVuZ3RoIC0gMV0sIDEpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGlvbi50b1N0cmluZygpLnRyaW0oKS5yZXBsYWNlKC8oXFxyXFxuKXsxLH0vZywgJ1xcclxcbicpKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuICB9LFxyXG4gIHN0b3JlKG1hcmssIHNhdmUsIG9yZGVyKSB7XHJcblx0XHR0aGlzLmRvbmUucHVzaChtYXJrKTtcclxuICAgIGlmIChzYXZlICE9PSBmYWxzZSkgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0aWYgKG9yZGVyKSB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cdH0sXHJcbiAgcmVjcmVhdGUobWFyaykge1xyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTigpO1xyXG4gICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsobWFyay5rZXksIG1hcmspLCBmYWxzZSwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmRvbmUubGVuZ3RoKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoX1NUT1JFLm5hbWUgPT09IG1hcmsua2V5RGF0YS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvTWFyayhtYXJrKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3J0QnlJZCgpO1xyXG4gICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblxyXG4gICAgaWYgKF9TVE9SRS5yZWRlc2NyaWJpbmcpIHtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFkZE5vdGUoaWQpIHtcclxuICAgIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCB0aGlzLmZpbmRNYXJrKGlkKSk7XHJcbiAgfSxcclxuICBzYXZlTm90ZShpZCkge1xyXG4gICAgaWYgKCFfU1RPUkUubG9ja2VkKSByZXR1cm4gdGhpcy5hdXRvc2F2ZSgpO1xyXG5cclxuICAgIGNvbnN0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQpLmtleURhdGE7XHJcbiAgICBjb25zdCBzeW5jZWQgPSB0eXBlb2YgbWFyay5zeW5jZWQgPT09ICdib29sZWFuJyA/IG1hcmsuc3luY2VkIDogX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICBtYXJrczogW21hcmtdLFxyXG4gICAgICBuYW1lOiBtYXJrLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSksXHJcbiAgICAgIHN5bmNlZFxyXG4gICAgfTtcclxuICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KTtcclxuICB9LFxyXG4gIGdvdG9NYXJrKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtFbGVtZW50cyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3M7XHJcbiAgICBsZXQgZWwsIHBvcywgaWQ7XHJcbiAgICBpZiAobWFyayB8fCBtYXJrID09PSAwKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSBtYXJrICsgMTtcclxuICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1ttYXJrXTtcclxuICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG4gICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQ9XCInICsgaWQgKyAnXzBcIl0nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9zID0gdGhpcy5tYXJrU2Nyb2xsUG9zO1xyXG4gICAgICBlbCA9IG1hcmtFbGVtZW50c1twb3NdO1xyXG4gICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuXHJcblx0XHRpZiAoIW1hcmsgfHwgdHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB0aGlzLmdldEJ5SWQoaWQpLm9uQ2xpY2soaWQpO1xyXG4gICAgdGhpcy5pbmRpY2F0ZU1hcmsoaWQpO1xyXG4gIH0sXHJcblx0Z290b05leHRNYXJrKGRpcikge1xyXG5cdFx0Y29uc3QgbCA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubGVuZ3RoO1xyXG5cclxuXHRcdHRoaXMubWFya1Njcm9sbFBvcyArPSBkaXI7XHJcblxyXG5cdFx0aWYgKHRoaXMubWFya1Njcm9sbFBvcyA8IDApIHRoaXMubWFya1Njcm9sbFBvcyA9IGwgLSAxO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5tYXJrU2Nyb2xsUG9zID49IGwpIHRoaXMubWFya1Njcm9sbFBvcyA9IDA7XHJcblxyXG5cdFx0dGhpcy5nb3RvTWFyaygpO1xyXG5cdH0sXHJcbiAgaW5kaWNhdGVNYXJrKGlkKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpXHJcbiAgICAgIC5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgY29uc3QgdG1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZF49XCInICsgaWQgKyAnX1wiXScpKTtcclxuXHJcbiAgICB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSksIDIwMDApO1xyXG4gIH0sXHJcbiAgc2V0Qm9va21hcmsobSwgc2F2ZSkge1xyXG4gICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrLFxyXG4gICAgICAgIG1hcmsgPSB0aGlzLmZpbmRNYXJrKG0pO1xyXG5cclxuICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChib29rbWFyaykge1xyXG4gICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib29rbWFyayA9IG5ldyBfQk9PS01BUksoKS5zZXQobWFyayk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdhZGRlZDpib29rbWFyaycpO1xyXG4gICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICB1bmRvQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgaWYgKCFib29rbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IGJvb2ttYXJrO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgfSxcclxuICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICBpZiAoYm9va21hcmspIGJvb2ttYXJrLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkLCBwb3MpIHtcclxuXHRcdGxldCBkb25lID0gdGhpcy5kb25lLFxyXG5cdFx0XHQgIGQgPSBkb25lLmxlbmd0aCxcclxuXHRcdFx0ICBtYXJrO1xyXG5cclxuXHRcdHdoaWxlIChkLS0pIHtcclxuXHRcdFx0bWFyayA9IGRvbmVbZF07XHJcblxyXG5cdFx0XHRpZiAobWFyay5rZXlEYXRhLmlkID09IGlkKVxyXG5cdFx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG1hcmssIHBvc2l0aW9uOiBkIH0gOiBtYXJrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbnVsbCwgcG9zaXRpb246IG51bGwgfSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0ZmluZE1hcmsoeCkge1xyXG5cdFx0eCA9IHggPyB4IDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuXHRcdGxldCBtYXJrID0gIXggP1xyXG5cdFx0XHR0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdIDpcclxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ3N0cmluZycgP1xyXG5cdFx0XHR0aGlzLmdldEJ5SWQoeC5zcGxpdCgnXycpWzBdKSA6XHJcblx0XHRcdHg7XHJcblx0XHRyZXR1cm4gbWFyaztcclxuXHR9LFxyXG4gIHNvcnRCeUlkKCkge1xyXG4gICAgdGhpcy5kb25lLnNvcnQoKG1hcmsxLCBtYXJrMikgPT4gbWFyazEuaWQgLSBtYXJrMi5pZCk7XHJcbiAgfSxcclxuXHRvcmRlck1hcmtzVmlzdWFsbHkoKSB7XHJcblx0XHR0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZCQ9XCJfMFwiXScpKS5zb3J0KChtMSwgbTIpID0+IHtcclxuXHRcdFx0bGV0IGJiMSA9IG0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0YmIyID0gbTIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHR0b3AxID0gYmIxLnRvcCxcclxuXHRcdFx0XHRcdHRvcDIgPSBiYjIudG9wO1xyXG5cclxuXHRcdFx0aWYgKHRvcDEgPCB0b3AyKSByZXR1cm4gLTE7XHJcblx0XHRcdGVsc2UgaWYgKHRvcDIgPCB0b3AxKSByZXR1cm4gMTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGJiMS5sZWZ0IDwgYmIyLmxlZnQpIHJldHVybiAtMTtcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcbiAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLm1hcChtYXJrID0+IHBhcnNlSW50KG1hcmsuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKTtcclxuICAgIHRoaXMuZW1pdCgndmlzdWFsbHktb3JkZXJlZDptYXJrcycsIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyk7XHJcblx0fSxcclxuICBtYXJrc0ludGVyc2VjdChtYXJrMSwgbWFyazIpIHtcclxuXHRcdGxldCB3cmFwcGVyczEgPSBtYXJrMS53cmFwcGVycyxcclxuICAgICAgICB3MSA9IHdyYXBwZXJzMS5sZW5ndGgsXHJcbiAgICAgICAgaWQxID0gbWFyazEuaWQsXHJcbiAgICAgICAgd3JhcHBlcnMyID0gbWFyazIud3JhcHBlcnMsXHJcbiAgICAgICAgaWQyID0gbWFyazIuaWQsXHJcbiAgICAgICAgdzIsIHRtcywgbDtcclxuXHJcbiAgICB3aGlsZSAodzEtLSkge1xyXG4gICAgICB3MiA9IHdyYXBwZXJzMi5sZW5ndGg7XHJcbiAgICAgIHdoaWxlICh3Mi0tKSB7XHJcbiAgICAgICAgdG1zID0gd3JhcHBlcnMxW3cxXS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF0nKTtcclxuICAgICAgICBsID0gdG1zLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICBpZiAodG1zW2xdLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpWzBdID09IGlkMilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuICBvbk1hcmtlcktleShlLCBrZXkpIHtcclxuXHRcdGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcblxyXG5cdFx0aWYgKCFzZWxlY3Rpb24ubm9kZXMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAoZSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSBrZXkgPSBlO1xyXG5cdFx0XHRlbHNlIHRoaXMucHJldmVudERlZmF1bHQoZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRrZXkgPSBrZXkgfHwgJ20nO1xyXG5cdFx0fVxyXG5cclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChfU1RPUkUuaXNOZXcpIHtcclxuICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiAhIXNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogX1NUT1JFLmltbXV0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKGtleSwgc2V0dGluZ3MubWFya2Vyc1trZXldLCB0aGlzLmlzSW1tdXQpLCB0cnVlLCB0cnVlKTtcclxuICAgIH0pO1xyXG5cdH0sXHJcbiAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgIGNhc2UgJ3onOiBzZWxmLnVuZG8oKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3knOiBzZWxmLnJlZG8oKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3MnOiBzZWxmLnNhdmUoKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2InOiBzZWxmLnNldEJvb2ttYXJrKCk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdhcnJvd3VwJzogc2VsZi5nb3RvTmV4dE1hcmsoLTEpOyBicmVhaztcclxuXHRcdFx0Y2FzZSAnYXJyb3dkb3duJzogc2VsZi5nb3RvTmV4dE1hcmsoMSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlICdkJzogc2VsZi5yZW1vdmUoKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2MnOiBzZWxmLmNvcHkoKTsgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcmV2ZW50RGVmYXVsdChlKSB7XHJcblx0XHRpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0KSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0cmV0cmlldmVFbnRyeSgpIHtcclxuICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICBjb25zdCBpc05ldyA9IF9TVE9SRS5pc05ldztcclxuICAgIGNvbnN0IG5hbWUgPSBfU1RPUkUubmFtZTtcclxuXHJcbiAgICBjb25zdCBlbnRyeSA9ICFsb2NrZWQgJiYgX1NUT1JFLmVudHJpZXNbbmFtZV0gPyBfU1RPUkUuZW50cmllc1tuYW1lXSA6IHt9O1xyXG5cclxuICAgIGVudHJ5Lm1hcmtzID0gdGhpcy5jb2xsZWN0TWFya3MoKTtcclxuXHRcdGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGVudHJ5LmJvb2ttYXJrZWQgPSAhIXRoaXMuYm9va21hcms7XHJcbiAgICBlbnRyeS50aXRsZSA9IHdpbmRvdy5kb2N1bWVudC50aXRsZTtcclxuXHRcdGVudHJ5LmNvdW50ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG5cdFx0ZW50cnkuaWRjb3VudCA9IHRoaXMuaWRjb3VudDtcclxuICAgIGVudHJ5LmltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogZW50cnkuaW1tdXQ7XHJcblxyXG4gICAgaWYgKGlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICBlbnRyeS5maXJzdCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgIGVudHJ5LnVybCA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlID8gd2luZG93LmRvY3VtZW50LlVSTCA6IF9IQVNITEVTUyh3aW5kb3cuZG9jdW1lbnQuVVJMKTtcclxuICAgICAgZW50cnkuc3luY2VkID0gX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG4gICAgICBlbnRyeS5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICAgIGVudHJ5Lmhhc2hTZW5zaXRpdmUgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRyeS5uYW1lID0gbG9ja2VkID9cclxuICAgICAgZW50cnkubWFya3NbMF0udGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSA6XHJcbiAgICAgIGlzTmV3ID8gbmFtZSA6IGVudHJ5Lm5hbWU7XHJcblxyXG5cdFx0cmV0dXJuIGVudHJ5O1xyXG5cdH0sXHJcbiAgY29sbGVjdE1hcmtzKCkge1xyXG4gICAgbGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcbiAgICBsZXQgbCA9IGRvbmUubGVuZ3RoO1xyXG4gICAgY29uc3QgbWFya3MgPSBbXTtcclxuXHJcbiAgICBpZiAoX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICBkb25lID0gW2RvbmVbbC0xXV07XHJcbiAgICB9XHJcblxyXG4gICAgbCA9IGRvbmUubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IG0gPSAwLCBrRDsgbSA8IGw7IG0rKykge1xyXG5cdFx0XHRrRCA9IGRvbmVbbV0ua2V5RGF0YTtcclxuICAgICAgZGVsZXRlIGtELnN5bmNlZDtcclxuXHRcdFx0bWFya3MucHVzaChrRCk7XHJcblx0XHR9XHJcbiAgICByZXR1cm4gbWFya3M7XHJcbiAgfSxcclxuICBvbkhhc2hDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnJlc3VtZShudWxsLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgIHRoaXMuZW1pdCgncmVzdW1lZC1vbi1oYXNoY2hhbmdlJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmssIGNvbG9yKSB7XHJcblxyXG4gIGNvbnN0IEJPRFkgPSB3aW5kb3cuZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ2FkZE1hcmtMaXN0ZW5lcnMnLFxyXG4gICAgICAgICdkcmFnOm5vdGUnOiAnb25EcmFnJyxcclxuICAgICAgICAnZHJhZ3N0b3A6bm90ZSc6ICdvbkRyYWdFbmQnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAndG1ub3RlZGVsZXRlJzogJ19kZWxldGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZW1pbmltaXplJzogJ2hpZGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWN1c3RvbWl6ZSc6ICd0b2dnbGVQYWxldHRlJyxcclxuICAgICAgICAgICd0bW5vdGVjb2xvcic6ICdjaGFuZ2VDb2xvcicsXHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYnJpbmdVcEZyb250J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5dXA6IHtcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdhdHRlbXB0VXBkYXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2Vkb3duOiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG91Y2hzdGFydDoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgbWFyayxcclxuICAgIGNvbG9yOiBjb2xvciB8fCAnJyxcclxuICAgIG1hcmtDbGlja0hhbmRsZXI6IG51bGwsXHJcbiAgICB0ZXh0OiAnJyxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgcmVjZW50bHlVcGRhdGVkOiBmYWxzZSxcclxuICAgIHNldHRpbmdzTW9kZTogZmFsc2UsXHJcbiAgICBwb3M6IHsgbDogbnVsbCwgdDogbnVsbCB9LFxyXG4gICAgc2l6ZTogeyB3OiBudWxsLCBoOiBudWxsIH0sXHJcbiAgICBkcmFnRFg6IDAsXHJcbiAgICBkcmFnRFk6IDAsXHJcbiAgICBtdXRhdGlvbk9ic2VydmVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmFkanVzdE5vdGVEYXRhT2JqZWN0KCk7XHJcbiAgICAgIHRoaXMuY3JlYXRlTm90ZUVsZW1lbnQoKTtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5hZGRNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkanVzdE5vdGVEYXRhT2JqZWN0KCkge1xyXG4gICAgICBjb25zdCBub3RlRGF0YSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGU7XHJcbiAgICAgIGlmICh0eXBlb2Ygbm90ZURhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZSA9IHsgdGV4dDogbm90ZURhdGEsIGNvbG9yOiB0aGlzLmNvbG9yIHx8ICd5ZWxsb3cnIH07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIW5vdGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZSA9IHsgdGV4dDogbm90ZURhdGEsIGNvbG9yOiB0aGlzLmNvbG9yIHx8IF9TVE9SRS5ub3RlQ29sb3IgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBvcyA9IG5vdGVEYXRhLnBvcyB8fCB0aGlzLnBvcztcclxuICAgICAgICB0aGlzLnNpemUgPSBub3RlRGF0YS5zaXplIHx8IHRoaXMuc2l6ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZU5vdGVFbGVtZW50KCkge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZScpO1xyXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWhlYWRlcicpO1xyXG4gICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlYWN0aW9ucycpO1xyXG4gICAgICBjb25zdCBkZWwgPSB0aGlzLmRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWRlbGV0ZScpO1xyXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLm1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZW1pbmltaXplJyk7XHJcbiAgICAgIGNvbnN0IGdlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjdXN0b21pemUnKTtcclxuICAgICAgY29uc3QgcGFsZXR0ZSA9IHRoaXMucGFsZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXBhbGV0dGUnKTtcclxuICAgICAgY29uc3QgcCA9IHRoaXMudGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0O1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLmNvbG9yIHx8IF9TVE9SRS5ub3RlQ29sb3I7XHJcbiAgICAgIF9TVE9SRS5ub3RlQ29sb3IgPSBjb2xvcjtcclxuICAgICAgY29uc3QgZGVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgICAgY29uc3QgbWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDEzKSk7XHJcbiAgICAgIGNvbnN0IGdlYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDI2OTkpKTtcclxuXHJcbiAgICAgIFsnZ3JlZW4nLCAnd2hpdGUnLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnLCAncHVycGxlJywgJ2JsdWUnLCAndHVycXVvaXNlJ10uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBsZXQgY29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVjb2xvcicpO1xyXG4gICAgICAgIGNvbG9yLmNsYXNzTmFtZSA9ICd0bW5vdGVjb2xvci0tJyArIGM7XHJcbiAgICAgICAgY29sb3Iuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgYyk7XHJcbiAgICAgICAgcGFsZXR0ZS5hcHBlbmRDaGlsZChjb2xvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0tbm90ZScsIHRydWUpO1xyXG4gICAgICBkZWwuYXBwZW5kQ2hpbGQoZGVsVGV4dCk7XHJcbiAgICAgIG1pbi5hcHBlbmRDaGlsZChtaW5UZXh0KTtcclxuICAgICAgZ2Vhci5hcHBlbmRDaGlsZChnZWFyVGV4dCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChnZWFyKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKG1pbik7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICBpZiAodGV4dCkgcC52YWx1ZSA9IHRleHQ7XHJcblxyXG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHRoaXMuYXR0ZW1wdFVwZGF0ZShlLCBlLnRhcmdldCwgdHJ1ZSksIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0gJyc7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBhdHRlbXB0VXBkYXRlKGUsIGVsLCBmb3JjZSkge1xyXG4gICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXRoaXMucmVjZW50bHlVcGRhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlKGVsKSwgMzAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZWwpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0ID0gZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93KCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGlubmVyV2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgIGxldCBwb3MsIGxlZnQsIHRvcDtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBvcy5sICE9PSBudWxsKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5wb3M7XHJcbiAgICAgICAgdG9wID0gcG9zLnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG4gICAgICAgIHRvcCA9IHRoaXMucG9zLnQgPSBwb3MudCArIHBvcy5vZmZzZXQ7XHJcbiAgICAgIH1cclxuICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBwb3MubDtcclxuXHJcbiAgICAgIGlmIChsZWZ0ICsgMzQwID4gaW5uZXJXaW5kb3dXaWR0aCkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gaW5uZXJXaW5kb3dXaWR0aCAtIDM0MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZS53ID8gJ3dpZHRoOicgKyB0aGlzLnNpemUudyArICc7aGVpZ2h0OicgKyB0aGlzLnNpemUuaCArICc7JyA6ICcnO1xyXG5cclxuICAgICAgQk9EWS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jazt0b3A6JyArIHRvcCArICdweDtsZWZ0OicgKyBsZWZ0ICsgJ3B4OycpO1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc2l6ZSk7XHJcbiAgICAgIHRoaXMuY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBicmluZ1VwRnJvbnQoKSB7XHJcbiAgICAgIEFycmF5LmZyb20oQk9EWS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlJykpLmZvckVhY2gobm90ZSA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGUgPT09IHRoaXMuZWwpIG5vdGUuc3R5bGUuekluZGV4ID0gMjE0NzQ4MzY0NztcclxuICAgICAgICBlbHNlIG5vdGUuc3R5bGUuekluZGV4ID0gMjE0NzQ4MzY0NjtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgQk9EWS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB0aGlzLmhpZGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVQYWxldHRlKCkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5nc01vZGUpIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnBhbGV0dGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NNb2RlID0gIXRoaXMuc2V0dGluZ3NNb2RlO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvbG9yKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS0nICsgdGhpcy5jb2xvcik7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IF9TVE9SRS5ub3RlQ29sb3IgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgPSBjb2xvcjtcclxuICAgICAgdGhpcy50b2dnbGVQYWxldHRlKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLWNvbG9yJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkTWFya0xpc3RlbmVycygpIHtcclxuICAgICAgX1NUT1JFLmdldCgnbm90ZW9uY2xpY2snKS50aGVuKG5vdGVvbmNsaWNrID0+IHtcclxuICAgICAgICBpZiAobm90ZW9uY2xpY2spIHtcclxuICAgICAgICAgIGlmICghIXRoaXMubWFya0NsaWNrSGFuZGxlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLm1hcmtDbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCd0aXRsZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZScpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMubWFya0NsaWNrSGFuZGxlcikgcmV0dXJuO1xyXG4gICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHRoaXMubWFyay53cmFwcGVycykge1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hcmtDbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbm5lY3RNdXRhdGlvbk9ic2VydmVyKCkge1xyXG4gICAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ10gfTtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgfHwgbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnNhdmVTaXplKSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGV4dGFyZWEsIGNvbmZpZyk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLm1hcmsud3JhcHBlcnNbdGhpcy5tYXJrLndyYXBwZXJzLmxlbmd0aCAtIDFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHQ6IHJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gQk9EWS5jbGllbnRUb3AsXHJcbiAgICAgICAgbDogcmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gQk9EWS5jbGllbnRMZWZ0LFxyXG4gICAgICAgIG9mZnNldDogcmVjdC5oZWlnaHRcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWdTdGFydChlLCBlbCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZHJhZ0RYID0gZS5wYWdlWCAtIHRoaXMucG9zLmw7XHJcbiAgICAgIHRoaXMuZHJhZ0RZID0gZS5wYWdlWSAtIHRoaXMucG9zLnQ7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnQ6ZHJhZycsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgb25EcmFnKG5vdGUsIGUpIHtcclxuICAgICAgaWYgKG5vdGUgPT09IHRoaXMubWFyay5pZCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zLmwgPSBlLnBhZ2VYIC0gdGhpcy5kcmFnRFg7XHJcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMucG9zLnQgPSBlLnBhZ2VZIC0gdGhpcy5kcmFnRFk7XHJcbiAgICAgICAgZWwuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xyXG4gICAgICAgIGVsLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRyYWdFbmQoKSB7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUucG9zID0gdGhpcy5wb3M7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLXBvcycsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZVNpemUobXV0YXRpb25zTGlzdCkge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IG11dGF0aW9uc0xpc3RbMF0udGFyZ2V0LnN0eWxlO1xyXG4gICAgICB0aGlzLnNpemUgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnNpemUgPSB7IHc6IHN0eWxlLndpZHRoLCBoOiBzdHlsZS5oZWlnaHQgfTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtc2l6ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9OT1RFIGZyb20gJy4vbm90ZSdcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnYWRkOm5vdGUnOiAnYWRkQW5kU2hvdycsXHJcbiAgICAgICdyZW1vdmVkOm5vdGUnOiAncmVtb3ZlTm90ZVN0b3JhZ2UnLFxyXG4gICAgICAncmVzdG9yZTpub3Rlcyc6ICdyZXN0b3JlJyxcclxuICAgICAgJ3JlbW92ZWQ6bWFyayc6ICdyZW1vdmVOb3RlJyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICd1cGRhdGVUcmFuc3AnLFxyXG4gICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kTm90ZXNTdGF0ZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBub3Rlczoge30sXHJcbiAgdG9nZ2xlOiBudWxsLFxyXG4gIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gIGRyYWdTdG9wSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhbnNwKCk7XHJcbiAgfSxcclxuICBhZGQobWFyaywgY29sb3IpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgaWYgKG5vdGUpIHJldHVybiBub3RlO1xyXG4gICAgdGhpcy5lbWl0KCdhZGRlZDpub3RlJyk7XHJcbiAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgfSxcclxuICByZXN0b3JlKG1hcmtzKSB7XHJcbiAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgIGlmIChtYXJrLmtleURhdGEubm90ZSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1hcmspO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICB0aGlzLmFkZChtYXJrLCBjb2xvcikuc2hvdygpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgIGRlbGV0ZSB0aGlzLm5vdGVzW2lkXTtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkodGhpcy5ub3RlcykpIHRoaXMuZW1pdCgncmVtb3ZlZDpsYXN0LW5vdGUnKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGUoaWQpIHtcclxuICAgIGlmICh0aGlzLm5vdGVzW2lkXSkgdGhpcy5ub3Rlc1tpZF0ucmVtb3ZlKCk7XHJcbiAgfSxcclxuICB0b2dnbGVBbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMubm90ZXMpIHJldHVybjtcclxuICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgIGxldCBtZXRoID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKS5sZW5ndGggPyAnaGlkZScgOiAnc2hvdycsXHJcbiAgICAgICAgY29uZGl0aW9uID0gbWV0aCA9PT0gJ2hpZGUnID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIG5vdGU7XHJcbiAgICBmb3IgKGxldCBuIGluIG5vdGVzKSB7XHJcbiAgICAgIG5vdGUgPSBub3Rlc1tuXTtcclxuICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgbm90ZVttZXRoXSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVUcmFuc3AoKSB7XHJcbiAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmIChzZXR0aW5ncyAmJiBzZXR0aW5ncy5taXNjKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcCkgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXBsYWludmlldykgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS1wbGFpbi12aWV3Jyk7XHJcbiAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBpc0VtcHR5KG9iaikge1xyXG4gICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICB9LFxyXG4gIHN0YXJ0RHJhZ2dpbmdOb3RlKG5vdGUpIHtcclxuICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlciA9IChlKSA9PiB0aGlzLmVtaXREcmFnRXZlbnQobm90ZSwgZSk7XHJcbiAgICBjb25zdCBkcmFnU3RvcEhhbmRsZXIgPSB0aGlzLmRyYWdTdG9wSGFuZGxlciA9IChlKSA9PiB0aGlzLnN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSk7XHJcbiAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKSB7XHJcbiAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdkcmFnc3RvcDpub3RlJywgbm90ZSwgZSk7XHJcbiAgfSxcclxuICBlbWl0RHJhZ0V2ZW50KG5vdGUsIGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZW1pdCgnZHJhZzpub3RlJywgbm90ZSwgZSk7XHJcbiAgfSxcclxuICBzZW5kTm90ZXNTdGF0ZShpbmZvKSB7XHJcbiAgICB0aGlzLmVtaXQoJ25vdGVzLXN0YXRlJywgIXRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSwgaW5mbyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogd2luZG93LmRvY3VtZW50LFxyXG4gIGF1dG9QYXVzZTogdHJ1ZSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBrZXlkb3duOiB7XHJcbiAgICAgICAgJyonOiAnZGVsZWdhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdGlvbmNoYW5nZToge1xyXG4gICAgICAgICcqJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2hpZnRTZW5zaXRpdmVLZXlzOiBbMTMsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCAxNzEsIDE3M10sXHJcbiAga2V5Q29kZU1hcDoge1xyXG4gICAgJzEzJzogJ0VudGVyJyxcclxuICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgJzUzJzogJzUnLCAnNTQnOiAnNicsICc1NSc6ICc3JywgJzU2JzogJzgnLCAnNTcnOiAnOScsXHJcbiAgICAnMTcxJzogJysnLCAnMTczJzogJy0nXHJcbiAgfSxcclxuXHJcbiAgaXNFZGl0YWJsZShlbCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGVsLnRhZ05hbWU7XHJcblxyXG4gICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gIH0sXHJcbiAgZGVsZWdhdGUoZSkge1xyXG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlLFxyXG4gICAgICAgIG1vZEtleSA9IChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkpLFxyXG4gICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICBsb2NrZWRBY3Rpb25zID0gWydiJywgJ3MnLCAneScsICd6JywgJ2QnXSxcclxuICAgICAgICBmdW5jdGlvbktleXMgPSBsb2NrZWRBY3Rpb25zLmNvbmNhdChhcnJvd0tleXMpLmNvbmNhdCgnYycpLFxyXG4gICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgIGlmIChfU1RPUkUubG9ja2VkICYmIGxvY2tlZEFjdGlvbnMuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hpZnRTZW5zaXRpdmVLZXlzLmluY2x1ZGVzKGtleUNvZGUpKSBrZXkgPSB0aGlzLmtleUNvZGVNYXBba2V5Q29kZV07XHJcblxyXG4gICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUoZS50YXJnZXQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG5cclxuICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBjb25zdCBvcmlnS2V5ID0ga2V5O1xyXG4gICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICBjb25zdCBpc01hcmtlcktleSA9IG1hcmtlcnNba2V5XTtcclxuICAgICAgY29uc3QgaXNDdXN0b21NYXJrZXJLZXkgPSBpc01hcmtlcktleSAmJiAhZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICBjb25zdCBzZXR0aW5nID0gc2hvcnRjdXRzW2tleV07XHJcblxyXG4gICAgICBpZiAoIXNldHRpbmcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAndycgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5nWzFdKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgczEgPSBzaG9ydGN1dFswXTtcclxuICAgICAgICBjb25zdCBzMiA9IHNob3J0Y3V0WzFdO1xyXG5cclxuICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3cnKSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3ByZXNzZWQ6aG90a2V5Jywga2V5KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzZWxlY3Rpb24nLCAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbmNsYXNzIFJlc3RvcmVyQmFzZSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5sb3N0ID0gW107XHJcbiAgICB0aGlzLmZhaWx1cmVSZXBvcnQgPSB7fTtcclxuICAgIHRoaXMucmVzdG9yZWQgPSBbXTtcclxuICAgIHRoaXMuYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdzdGFydGVkOnJlc3RvcmF0aW9uJywgZW50cnkubWFya3MubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NJbkNodW5rcyhkYXRhLCBwcm9jLCBjYikge1xyXG4gICAgcHJvYyA9IHByb2MuYmluZCh0aGlzKTtcclxuICAgIGNiID0gY2IuYmluZCh0aGlzKTtcclxuXHJcblx0XHQoZnVuY3Rpb24gcmVjKCkge1xyXG5cdFx0XHRsZXQgZXhwaXJlID0gK25ldyBEYXRlKCkgKyA1MDA7XHJcblxyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0dHJ5IHtcclxuICAgICAgICAgIHByb2MoZGF0YS5zaGlmdCgpKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHRcdH0gd2hpbGUgKGRhdGEubGVuZ3RoID4gMCAmJiBleHBpcmUgPiArbmV3IERhdGUoKSk7XHJcblxyXG5cdFx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByZWMoKSwgMCk7XHJcblx0XHRcdGVsc2UgY2IoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG4gIHJlcG9ydCgpIHtcclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdsb3N0Om1hcmtzJywgdGhpcy5mYWlsdXJlUmVwb3J0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmVudHJ5Lm5hbWUsIHRoaXMucmVzdG9yZWQsIHRoaXMubG9zdCwgdGhpcy5hcmVhKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgIHRoaXMuY2FjaGUgPSBbXTtcclxuICAgIHRoaXMucGhhc2UgPSAxO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCA9IDA7XHJcbiAgICB0aGlzLmNodW5rRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgdGhpcy5vb20gPSBlbnRyeS5tYXJrcy5sZW5ndGggPT09IDEgJiYgZW50cnkubWFya3NbMF0uaWQgPT0gMTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lcigpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRpbWVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbnRyeSxcclxuICAgICAgICBub3cgPSBbXSwgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICBsID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBtYXJrO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuXHJcbiAgICAgIHRoaXMuY29udmVydERlc2NyaXB0aW9uKG1hcmspLmNyZWF0ZVRlbXBPYmplY3QobWFyayk7XHJcblxyXG4gICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgIGVsc2Ugbm93LnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHBvc3Rwb25lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc3RvcmUoKTtcclxuICB9XHJcbiAgY29udmVydERlc2NyaXB0aW9uKG1hcmspIHtcclxuICAgIGlmICh0eXBlb2YgbWFyay5jb25kcy5vID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgY29udmVydGVkQ29uZHMgPSB7XHJcbiAgICAgICAgICAgIG86IGNvbmRzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgbjI6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIHAxOiBjb25kcy5maXJzdFRleHROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDM6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwNDogY29uZHMuZmlyc3RHcmFtcGFOb2RlUG9zaXRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICBtYXJrLmNvbmRzID0gY29udmVydGVkQ29uZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3JlYXRlVGVtcE9iamVjdChtYXJrKSB7XHJcbiAgICBsZXQgdGV4dCA9IG1hcmsudGV4dCxcclxuICAgICAgICB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLFxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgIG1hcmsudGVtcCA9IHtcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHRyaW1tZWRUZXh0OiB0cmltbWVkVGV4dCxcclxuICAgICAgdHJpbW1lZFRleHRMZW5ndGg6IHRyaW1tZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0OiBzcXVlZXplZFRleHQsXHJcbiAgICAgIHNxdWVlemVkVGV4dExlbmd0aDogc3F1ZWV6ZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZFBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtYXJrLnN5bmNlZCA9IHRoaXMuZW50cnkuc3luY2VkO1xyXG4gIH1cclxuICByZXN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDIpIHRoaXMuc29ydFF1ZXVlQnlJZCgpO1xyXG5cclxuICAgIGxldCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgLmdldFRleHRQb3NpdGlvbnMobWFya3MsIGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5waGFzZSA9PT0gMSAmJiBsZW5ndGggPiAxKVxyXG4gICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgdGhpcy5maW5kUG9zc2libGVFeHRyZW1hKClcclxuICAgICAgICAgIC5ydWxlT3V0TXVsdGlwbGVzKClcclxuICAgICAgICAgIC5yZXN0b3JlUmFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8ICtuZXcgRGF0ZSgpKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzdG9yZSgpLCAwKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICB9XHJcbiAgc29ydFF1ZXVlQnlJZCgpIHtcclxuICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbWFyaywgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmICghbWFya3NbbF0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdWzBdO1xyXG4gICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgIH1cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5xdWV1ZS5wdXNoKFt0ZW1wW2ldXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgbGV0IHRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCxcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHNxdWVlemVkVGV4dCwgc3F1ZWV6ZWRUZXh0TGVuZ3RoLCBwLCBlbmRQb3NpdGlvbjtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHAgPSB1bmRlZmluZWQ7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICBpZiAoIW1hcmtUZW1wKSB7XHJcbiAgICAgICAgbWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gZW5kUG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzcXVlZXplZFRleHQgPSBtYXJrVGVtcC5zcXVlZXplZFRleHQ7XHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAocCAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIHAgPSAtMTtcclxuICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHNxdWVlemVkVGV4dCwgcCArIDEpO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBwICsgc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICghbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzEnKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcclxuICAgIGxldCBsID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgcG9zLCBzdGFydCwgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHBvcyA9IHBvc2l0aW9uc1tsXTtcclxuICAgICAgc3RhcnQgPSBwb3NbMF07XHJcblxyXG4gICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgZWxzZSB0ZW1wW3N0YXJ0XSA9IHBvcztcclxuICAgIH1cclxuICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBpIDwgdDsgaSsrKVxyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgfVxyXG4gIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBwb3MxLCBwb3MyLCBpLCBtMSwgbTIsIGlkMSwgaWQyLCBpZDtcclxuXHJcbiAgICBpZiAocCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHAtLSA+IDEpIHtcclxuICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICBwb3MyID0gcG9zaXRpb25zW3BdO1xyXG4gICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICBtMiA9IHBvczJbMl07XHJcbiAgICAgICAgaWQxID0gbTEuaWQ7XHJcbiAgICAgICAgaWQyID0gbTIuaWQ7XHJcblxyXG4gICAgICAgIGlmIChpZDEgPT09IGlkMikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG5cclxuICAgICAgICAgIGlmIChpZDEgPCBpZDIpIHtcclxuICAgICAgICAgICAgaWQgPSBpZDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGlkMTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwOyBpKyspXHJcbiAgICAgICAgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjdXRPdXRGb3IoaWQpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUocC0tKSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbnNbcF1bMl0uaWQgPT09IGlkKVxyXG4gICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3Rwb25lKG1hcmspIHtcclxuICAgIGxldCBxdWV1ZSA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYWxyZWFkeUluY2x1ZGVkKVxyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICB9XHJcbiAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgIGxldCBub2RlcyA9IHRoaXMuYm9keVRleHROb2RlcyxcclxuICAgICAgICBuID0gbm9kZXMgPyBub2Rlcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcGhhc2UgPSB0aGlzLnBoYXNlLFxyXG4gICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZSA9IFtdLFxyXG4gICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLCBjaGFycyA9IDAsXHJcbiAgICAgICAgbmV4dFN0YXJ0Rm91bmQsIGVuZGluZ3NJblRoaXNOb2RlLFxyXG4gICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIGRpZmYsIGwsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBlLCBmLCBpZCwgcCwgcSwgeCwgbSxcclxuICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0LCBzdGFydEZvdW5kRm9yLCBwb3N0cG9uZWQsIGhhc0VuZGluZ3NJblRoaXNOb2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgbm9kZXNUZXh0ID0gdGhpcy5zcXVlZXplKG5vZGUuZGF0YSk7XHJcbiAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNoYXJzICs9IG5vZGVzVGV4dExlbmd0aDtcclxuICAgICAgbCA9IGluZGljZXMubGVuZ3RoO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgIHBvc3Rwb25lZCA9IFtdO1xyXG4gICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGluZGljZXNbbF1bMF07XHJcbiAgICAgICAgZW5kUG9zaXRpb24gPSBpbmRpY2VzW2xdWzFdO1xyXG4gICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciB8fCBbXTtcclxuICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLmxlbmd0aCA8IG1hcmsudGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMucHVzaCh7IG5vZGU6IG5vZGUsIHBvczogaSB9KTtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIHN0YXJ0Rm91bmRGb3IucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICFtYXJrLnRlbXAuZW5kRm91bmRGb3IuaW5jbHVkZXMoZW5kUG9zaXRpb24pICYmXHJcbiAgICAgICAgICAoY2hhcnMgLSBlbmRQb3NpdGlvbikgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHN0YXJ0Rm91bmRGb3IpIDwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0ID0gdGhpcy5maW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgZW5kUG9zaXRpb24gLSAoY2hhcnMgLSBub2Rlc1RleHRMZW5ndGgpKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvci5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXSA9IHtcclxuICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zc2libGVGb2N1c09mZnNldCxcclxuICAgICAgICAgICAgICBwb3M6IGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICBzYXRpc2ZpZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICBpZiAoY2hhcnMgPiB0aGlzLm1heFBvc2l0aW9uKSBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChwaGFzZSAhPT0gMSB8fCB0aGlzLm9vbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbWFyayA9IHRoaXMubWFya3NbaV07XHJcbiAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMobWFyay5pZCkpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMicpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IGNhY2hlLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIG5vZGUsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgZ3JhbmRncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxLFxyXG4gICAgICAgIHBvc3NpYmxlRW5kcywgc3RhcnRGb3VuZEZvciwgY29uZHMsIHN0YXJ0T2Zmc2V0LCB0ZW1wLCB0ZXh0TGVuZ3RoLCBzdGFydDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBjYWNoZVtpXTtcclxuICAgICAgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzID0gdGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgIHBvc3NpYmxlRW5kcyA9IHRlbXAucG9zc2libGVFbmRzO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gdGVtcC5zdGFydEZvdW5kRm9yXHJcbiAgICAgIHAgPSBwb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoO1xyXG4gICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY29uZHMubztcclxuICAgICAgdGV4dExlbmd0aCA9IHRlbXAudGV4dExlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwID4gMSkge1xyXG4gICAgICAgIHdoaWxlIChwLS0pIHtcclxuICAgICAgICAgIG5vZGUgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcF0ubm9kZTtcclxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAoIWdyYW1wYSB8fCBjb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gocCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSBwID0gMDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkgcCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHEgPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5ub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW5kZ3JhbXBhID0gZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICghZ3JhbmRncmFuZGdyYW1wYSB8fCBjb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbXBhKSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHBvc3NpYmxlRW5kc1tzdGFydEZvdW5kRm9yW3FdXS5vZmZzZXQgLSBzdGFydE9mZnNldCkgPT09IHRleHRMZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwID0gcTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHAgPSAwO1xyXG5cclxuICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgIHN0YXJ0ID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZSA9IHN0YXJ0Lm5vZGU7XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbiA9IHN0YXJ0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuc2V0TWF0Y2hpbmdFbmQobWFyaywgcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvcltwXSxcclxuICAgICAgICBlbmQgPSBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dO1xyXG5cclxuICAgIG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uID0gZW5kLnBvcztcclxuICAgIG1hcmsudGVtcC5mb2N1c09mZnNldCA9IGVuZC5vZmZzZXQ7XHJcbiAgfVxyXG4gIHNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpIHtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFtcGEgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBkZXNjcmlwdGlvbi5vLFxyXG4gICAgICAgIHJlbGV2YW50Tm9kZVRleHQgPSBub2RlLmRhdGEuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0KS50cmltKCksXHJcbiAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0LFxyXG4gICAgICAgIG0gPSBtYXJrLnRlbXAudHJpbW1lZFRleHRMZW5ndGgsXHJcbiAgICAgICAgdGV4dHNNYXRjaDtcclxuXHJcbiAgICBpZiAobSA8PSBsKSB7XHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUobWFya1RleHQpKSA9PT0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUobWFya1RleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpKSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0ZXh0c01hdGNoICYmXHJcbiAgICAgIChwYXJlbnROb2RlLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMSB8fCAoZGVzY3JpcHRpb24ubjEgPT09ICdUTScgJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpICYmXHJcbiAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgIHRoaXMud2hpY2hDaGlsZChwYXJlbnROb2RlLCBub2RlKSA9PT0gZGVzY3JpcHRpb24ucDFcclxuICAgICk7XHJcbiAgfVxyXG4gIGZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBuKSB7XHJcbiAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgbCA9IG5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3F1ZWV6ZShub2RlVGV4dFtpXSkpIGNvdW50ZXIrKztcclxuXHJcbiAgICAgIGlmIChjb3VudGVyID09PSBuKSByZXR1cm4gKC9cXHMkLy50ZXN0KG1hcmsudGV4dCkgPyBpICsgMiA6IGkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzdG9yZVJhbmdlcygpIHtcclxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHN0YXJ0LCBlbmQsIGZvY3VzT2Zmc2V0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgIGVuZCA9IG1hcmtUZW1wLmVuZE5vZGU7XHJcbiAgICAgIGZvY3VzT2Zmc2V0ID0gbWFya1RlbXAuZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSkge1xyXG4gICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzMnKSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgIHJhbmdlLnNldEVuZChlbmQsIGZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgLy9zZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5yZWNvbGxlY3ROb2RlcyhtYXJrKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBtYXJrLnRlbXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJvZHlTZWxlY3Rpb24oZWwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwrKztcclxuXHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKGVsKTtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHJpYWwgPCA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRCb2R5U2VsZWN0aW9uKGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9ICcgJztcclxuICAgICAgICAgIHRoaXMuYm9keVRleHROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUodGhpcy5zZWxlY3Rpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gdGhpcy5zZWxlY3Rpb24ubm9kZXMgPyB0aGlzLnNlbGVjdGlvbi5ub2Rlcy5zbGljZSgpIDogW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpID8gdGV4dC5yZXBsYWNlKC9cXHR8XFxzfFxcbnxcXHIvZywgJycpIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICB3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGNvbnRleHQpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdCAgICBjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0ICAgIHBvcyA9IDAsIGkgPSAwLCBjdXJyZW50Q2hpbGQ7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnRDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGQpIHJldHVybiBwb3M7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZU5hbWUgPT09IGNvbnRleHQpIHBvcysrO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICBpZiAoIShjdXJyZW50Q2hpbGQubm9kZVR5cGUgPT09IDMgJiYgIWN1cnJlbnRDaGlsZC5kYXRhKSkgcG9zKys7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEltbXV0UmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IFsuLi5lbnRyeS5tYXJrcy5zb3J0KChtMSwgbTIpID0+IG0xLmlkIC0gbTIuaWQpXTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NJbkNodW5rcyhtYXJrcywgdGhpcy5yZXN0b3JlUmFuZ2UsIHRoaXMucmVwb3J0KTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVSYW5nZShtYXJrKSB7XHJcbiAgICBjb25zdCBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICBjb25zdCBzdGFydCA9IGNvbmRzLnM7XHJcbiAgICBjb25zdCBlbmQgPSBjb25kcy5lO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQodGhpcy5nZXROb2RlKHN0YXJ0LnApLCBzdGFydC5vKTtcclxuICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMuZ2V0Tm9kZShlbmQucCksIGVuZC5vKTtcclxuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmVkOnJhbmdlJywgbWFyayk7XHJcbiAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Tm9kZShwb3NpdGlvbikge1xyXG4gICAgY29uc3QgdGV4dE5vZGVQb3NpdGlvbiA9IHBvc2l0aW9uWzBdO1xyXG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgIGwgPSBwb3NpdGlvbi5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUobC0tID4gMSkge1xyXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltwb3NpdGlvbltsXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZS5jaGlsZE5vZGVzW3RleHROb2RlUG9zaXRpb25dO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG5cdHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3Jlc3RvcmU6bWFya3MnOiAncmVzdG9yZScsXHJcbiAgICAgICAgJ2xvc3Q6bWFya3MnOiAnb25GYWlsdXJlJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAncmVzdW1lZDptYXJrZXJzJzogJ3JldHJ5J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IG51bGwsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHJlc3RvcmVkOiAwLFxyXG4gICAgZmFpbGVkOiAwLFxyXG4gICAgZmFpbHVyZVJlcG9ydDoge30sXHJcblxyXG4gICAgcmVzdG9yZShlbnRyaWVzKSB7XHJcbiAgICAgIGlmICghZW50cmllcykgcmV0dXJuO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIGVudHJpZXMgPSBbZW50cmllc107XHJcblxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4gICAgICB0aGlzLmNvdW50ID0gZW50cmllcy5sZW5ndGg7XHJcblxyXG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeS5pbW11dCkgbmV3IEltbXV0UmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICAgIGVsc2UgbmV3IFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICB0aGlzLnJlc3RvcmVkID0gMDtcclxuICAgICAgdGhpcy5mYWlsZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWx1cmVSZXBvcnQgPSB7fTtcclxuICAgIH0sXHJcbiAgICByZXRyeShlbnRyeSkge1xyXG4gICAgICBlbnRyeSA9IGVudHJ5ID8gW2VudHJ5XSA6IHRoaXMuZW50cmllcztcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgdGhpcy5yZXN0b3JlKGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBvbkZhaWx1cmUocmVwb3J0KSB7XHJcbiAgICAgIHRoaXMuZmFpbGVkKys7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gcmVwb3J0KSB0aGlzLmZhaWx1cmVSZXBvcnRbaV0gPSByZXBvcnRbaV07XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBpZiAoKyt0aGlzLnJlc3RvcmVkID09PSB0aGlzLmNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFpbGVkKSB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JhdGlvbicsIHRoaXMuZ2V0UmVwb3J0KCkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJlcG9ydCgpIHtcclxuICAgICAgY29uc3QgcmVwb3J0ID0gdGhpcy5mYWlsdXJlUmVwb3J0O1xyXG4gICAgICBsZXQgbXNnID0gJyc7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gcmVwb3J0KSB7XHJcbiAgICAgICAgbXNnICs9IGAke3JlcG9ydFtpXS5yZWFzb259IDogJHtyZXBvcnRbaV0udGV4dH1cXG5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtc2c7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9TRUxFQ1RJT04ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihub2RlLCBvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCkgdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG5cclxuICAgIGlmIChub2RlIHx8ICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcclxuICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmRlZmluZWQgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZShub2RlKVxyXG4gICAgICAgICAgICAucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdE5vZGVzKHRydWUpXHJcbiAgICAgICAgICAgIC5yZXRyaWV2ZVRleHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmNvbGxlY3ROb2RlcygpXHJcbiAgICAgICAgICAgIC8vLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5hZGp1c3QoKVxyXG4gICAgICAgICAgICAvLy51cGRhdGUoKVxyXG4gICAgICAgICAgICAvLy5yZXRyaWV2ZVRleHQoKTtcclxuICAgICAgfVxyXG4gICAgICB0cnkgeyBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7IH0gY2F0Y2goZSkge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZShub2RlKSB7XHJcbiAgICB0aGlzLnNlbGYuc2VsZWN0QWxsQ2hpbGRyZW4obm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHVwZGF0ZShzZWxlY3Rpb24pIHtcclxuICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuc2VsZiA9IHNlbGVjdGlvbjtcclxuICAgIGVsc2Ugc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIGxldCBwcm9wcyA9IFsnZm9jdXNOb2RlJywgJ2FuY2hvck5vZGUnLCAnZm9jdXNPZmZzZXQnLCAnYW5jaG9yT2Zmc2V0J10sXHJcbiAgICAgICAgaSA9IHByb3BzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB0aGlzW3Byb3BzW2ldXSA9IHNlbGVjdGlvbltwcm9wc1tpXV07XHJcblxyXG4gICAgdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgdGhpcy5zaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGFkanVzdCgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzID0gdGhpcy5mb2N1c05vZGU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykpIHRoaXMucmV2ZXJzZShhbmNob3IsIGZvY3VzKTtcclxuICAgIGVsc2UgdGhpcy5ub3JtYWxpemUoYW5jaG9yLCBmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIG5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZSxcclxuXHJcbiAgICAgICAgZmlyc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbMF0sXHJcbiAgICAgICAgbGFzdFRleHROb2RlID0gdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGlmIChmaXJzdFRleHROb2RlICE9PSBhbmNob3IpXHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KGZpcnN0VGV4dE5vZGUsIGZpcnN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBmaXJzdFRleHROb2RlLmRhdGEudHJpbUxlZnQoKS5sZW5ndGgpO1xyXG5cclxuICAgIGlmIChsYXN0VGV4dE5vZGUgIT09IGZvY3VzKVxyXG4gICAgICByYW5nZS5zZXRFbmQobGFzdFRleHROb2RlLCBsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSAobGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gbGFzdFRleHROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoKSk7XHJcbiAgfVxyXG4gIGNvbGxlY3ROb2Rlcyh3aG9sZURvY3VtZW50KSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHdob2xlRG9jdW1lbnQgPyB3aW5kb3cuZG9jdW1lbnQuYm9keSA6IHRoaXMuZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKTtcclxuICAgIGNvbnN0IGZpbHRlciA9IHdob2xlRG9jdW1lbnQgP1xyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxmLmlzU2VsZWN0YWJsZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKSA6XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGVjdGlvbi5jb250YWluc05vZGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSk7XHJcblxyXG4gICAgY29uc3QgaXRlcmF0b3IgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKGNvbnRhaW5lciwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIHtcclxuICAgICAgICAgIGFjY2VwdE5vZGUobm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKG5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBsZXQgbm9kZXMgPSBbXSxcclxuICAgICAgICBwYXJlbnROb2RlcyA9IFtdLFxyXG5cclxuICAgICAgICB0ZXh0Tm9kZSwgcGFyZW50LCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIHdoaWxlKHRleHROb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkge1xyXG4gICAgICBub2Rlcy5wdXNoKHRleHROb2RlKTtcclxuICAgIH1cclxuICAgIG5vZGVzID0gdGhpcy50cmltU2VsZWN0aW9uKG5vZGVzKTtcclxuICAgIC8vdGhpcy5ub2RlcyA9IHRoaXMub3B0aW9ucy5wcm9ncmFtbWF0aWNhbGx5ID8gdGhpcy5yZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIDogbm9kZXM7XHJcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5yZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlcyA9IHRoaXMuY29sbGVjdFBhcmVudE5vZGVzKHRoaXMubm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZWNvbGxlY3ROb2RlcyhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrV3JhcHBlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXj1cIicgKyBtYXJrLmlkICsgJ19cIl0nKSk7XHJcbiAgICBjb25zdCBtID0gbWFya1dyYXBwZXJzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5ld1NlZ21lbnQgPSBtYXJrV3JhcHBlcnMubWFwKGVsID0+IGVsLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGNvbnN0IHByZXYgPSBtYXJrV3JhcHBlcnNbMF0ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgY29uc3QgbmV4dCA9IG1hcmtXcmFwcGVyc1ttLTFdLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ID0gbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgZW5kID0gbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbjtcclxuXHJcbiAgICBpZiAocHJldiAmJiBwcmV2Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQudW5zaGlmdChwcmV2KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC5wdXNoKG5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZXMuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIC4uLm5ld1NlZ21lbnQpO1xyXG4gIH1cclxuICB0cmltU2VsZWN0aW9uKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBsZXQgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBmaXJzdE5vZGUgPSBub2Rlc1swXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBmaXJzdE5vZGUgJiYgZmlyc3ROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoIDw9IHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICBub2Rlcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBsYXN0Tm9kZSAmJiB0aGlzLmlzQmxhbmsobGFzdE5vZGUuZGF0YS5zdWJzdHIoMCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSkpIHtcclxuICAgICAgICBub2Rlcy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICByZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbCA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IHJnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UocmcpO1xyXG5cclxuICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICByZy5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgICByZXR1cm4gISFzZWwudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZSh0aGlzLnJhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIGNvbGxlY3RQYXJlbnROb2Rlcyhub2Rlcykge1xyXG4gICAgbGV0IGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgcGFyZW50cyA9IFtdLCBpID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcGFyZW50cy5wdXNoKG5vZGVzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH1cclxuICByZXRyaWV2ZVRleHQoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcyxcclxuICAgICAgICBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG5vZGVUZXh0cyA9IFtdLFxyXG4gICAgICAgIHRleHQ7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIG5vZGVUZXh0cy5wdXNoKG5vZGVzW2ldLmRhdGEpO1xyXG5cclxuICAgIGwgLT0gMTtcclxuXHJcbiAgICBpZiAobm9kZVRleHRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAoIXRoaXMuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xyXG4gICAgICAgICAgLy9ub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQsIHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0LCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcbiAgICAgICAgICAvL25vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQpO1xyXG4gICAgICAgICAgbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0ZXh0ID0gdGhpcy50ZXh0ID0gbm9kZVRleHRzLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBub2RlMSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIG5vZGUyID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICB3aGlsZSAobm9kZTEgPSBub2RlMS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgaWYgKChub2RlMS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlMikgJiAweDEwKSA9PT0gMHgxMClcclxuICAgICAgICAgIHJldHVybiBub2RlMTtcclxuICAgIH1cclxuICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuYm9keTtcclxuICB9XHJcbiAgcmV2ZXJzZShhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoZm9jdXMsIHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoYW5jaG9yLCBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlKHNlbGVjdGlvbikuYWRqdXN0KHNlbGVjdGlvbi5hbmNob3JOb2RlLCBzZWxlY3Rpb24uZm9jdXNOb2RlKTtcclxuICB9XHJcbiAgcmVkdWNlVG9PbmVSYW5nZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2VDb3VudCA9IHNlbGVjdGlvbi5yYW5nZUNvdW50LFxyXG4gICAgICAgIHJhbmdlMCA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbGFzdFJhbmdlO1xyXG5cclxuICAgIGlmIChyYW5nZUNvdW50IDwgMikgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgbGFzdFJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQocmFuZ2VDb3VudCAtIDEpO1xyXG5cclxuICAgIHJhbmdlMC5zZXRTdGFydChyYW5nZTAuc3RhcnRDb250YWluZXIsIHJhbmdlMC5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZTAuc2V0RW5kKGxhc3RSYW5nZS5lbmRDb250YWluZXIsIGxhc3RSYW5nZS5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZTApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBoYXNOb3JtYWxQYXJlbnQobm9kZSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgdGFnID0gcGFyZW50LnRhZ05hbWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0YWcgIT09ICdTQ1JJUFQnICYmIHRhZyAhPT0gJ1NUWUxFJyAmJiB0YWcgIT09ICdMSU5LJyAmJiB0YWcgIT09ICdNRVRBJyAmJlxyXG4gICAgICB0YWcgIT09ICdCQVNFJyAmJiB0YWcgIT09ICdUSVRMRScgJiYgdGFnICE9PSAnTk9TQ1JJUFQnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0lNRycgJiYgdGFnICE9PSAnSUZSQU1FJyAmJiB0YWcgIT09ICdFTUJFRCcgJiYgdGFnICE9PSAnUEFSQU0nICYmXHJcbiAgICAgIHRhZyAhPT0gJ1ZJREVPJyAmJiB0YWcgIT09ICdBVURJTycgJiYgdGFnICE9PSAnU09VUkNFJyAmJiB0YWcgIT09ICdUUkFDSycgJiZcclxuICAgICAgdGFnICE9PSAnQ0FOVkFTJyAmJiB0YWcgIT09ICdNQVAnICYmIHRhZyAhPT0gJ0FSRUEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ01BVEgnICYmIHRhZyAhPT0gJ09CSkVDVCcgJiZcclxuICAgICAgIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ3N2ZycpIC8vJiZcclxuICAgICAgLy8hdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnbWF0aCcpXHJcbiAgICApO1xyXG4gIH1cclxuICBpc0NoaWxkT2Yobm9kZSwgbm9kZVR5cGUpIHtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBub2RlVHlwZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlzQmxhbmsobm9kZSkge1xyXG4gICAgbGV0IHRleHQ7XHJcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZS5kYXRhID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGUuZGF0YTtcclxuICAgICAgZWxzZSB0ZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQuc2VhcmNoKC9bXlxcc1xcblxcclxcdF0vZykgPT09IC0xO1xyXG4gIH1cclxuICBpc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHBvc2l0aW9uID0gYW5jaG9yLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwb3NpdGlvbiA9PT0gMiB8fFxyXG4gICAgICBwb3NpdGlvbiA9PT0gMTAgfHxcclxuICAgICAgKCFwb3NpdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0ID4gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSk7XHJcbiAgfVxyXG4gIGlzU2ltcGxlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3JOb2RlID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXNOb2RlID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBhbmNob3JOb2RlID09PSBmb2N1c05vZGUgJiZcclxuICAgICAgYW5jaG9yTm9kZS5ub2RlVHlwZSA9PT0gMyAmJlxyXG4gICAgICAoIWFuY2hvck5vZGUubmV4dFNpYmxpbmcgfHwgKGFuY2hvck5vZGUubmV4dFNpYmxpbmcuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXNOb2RlKSAhPT0gNCkpKTtcclxuICB9XHJcbiAgaXNTZWxlY3RhYmxlKG5vZGUpIHtcclxuICAgIHRoaXMucmFuZ2Uuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgIHJldHVybiAhIXRoaXMuc2VsZi50b1N0cmluZygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG5cdGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlU3RhdGUnLFxyXG4gICAgICAnYWRkZWQ6bm90ZSc6ICdvbk5vdGVBZGRlZCcsXHJcbiAgICAgICdhZGRlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrQWRkZWQnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnb25MYXN0Tm90ZVJlbW92ZWQnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrUmVtb3ZlZCdcclxuICAgIH1cclxuXHR9LFxyXG4gIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gIGVsOiBudWxsLFxyXG5cclxuICBhdHRhY2hlZDogZmFsc2UsXHJcblxyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG5vdGVzOiB7XHJcbiAgICAgIGVsOiBudWxsLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2hvd246IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYm9va21hcms6IHtcclxuICAgICAgZWw6IG51bGwsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBzaG93bjogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBib29rbWFyazogZmFsc2UsXHJcbiAgbm90ZXM6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xyXG4gIH0sXHJcbiAgdXBkYXRlU3RhdGUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdibWljb24nKS50aGVuKGJtaWNvbiA9PiB7XHJcbiAgICAgIHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ID0gYm1pY29uO1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ID0gbm90ZWljb24pO1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgfSxcclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBzaG91bGRBdHRhY2ggPVxyXG4gICAgICAodGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgJiYgdGhpcy5ib29rbWFyaykgfHxcclxuICAgICAgKHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ICYmIHRoaXMubm90ZXMpO1xyXG5cclxuICAgIGlmIChzaG91bGRBdHRhY2gpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXR0YWNoZWQgJiYgIXNob3VsZEF0dGFjaCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMsIGJ0bjtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtdWknKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgIGJ0biA9IGJ1dHRvbnNbYl07XHJcbiAgICAgIGlmIChidG4uc2hvdyAmJiAhYnRuLnNob3duICYmIHRoaXNbYl0pIHRoaXMuYWRkQnV0dG9uKGIpO1xyXG4gICAgICBlbHNlIGlmIChidG4uc2hvd24gJiYgKCF0aGlzW2JdIHx8ICFidG4uc2hvdykpIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFidXR0b25zLm5vdGVzLnNob3duICYmICFidXR0b25zLmJvb2ttYXJrLnNob3duKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRhY2hlZCA9IHRydWU7XHJcbiAgfSxcclxuICByZW1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucztcclxuXHJcbiAgICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICAgIGlmIChidXR0b25zW2JdLnNob3duKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtdWkpO1xyXG4gICAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVCdXR0b25zKCkge1xyXG4gICAgY29uc3Qgbm90ZXNCdXR0b24gPSB0aGlzLmJ1dHRvbnMubm90ZXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3Rlc3RvZ2dsZScpO1xyXG4gICAgY29uc3QgYm9va21hcmtCdXR0b24gPSB0aGlzLmJ1dHRvbnMuYm9va21hcmsuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ibScpO1xyXG4gICAgbm90ZXNCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGVzJyk7XHJcbiAgICBib29rbWFya0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICB9LFxyXG4gIGFkZEJ1dHRvbih0eXBlKSB7XHJcbiAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IGJ0bi5oYW5kbGVyID0gdHlwZSA9PT0gJ25vdGVzJyA/XHJcbiAgICAgIHRoaXMudG9nZ2xlTm90ZXMuYmluZCh0aGlzKSA6XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRtdWkuYXBwZW5kQ2hpbGQoYnRuLmVsKTtcclxuICAgIGJ0bi5zaG93biA9IHRydWU7XHJcblxyXG4gICAgYnRuLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQnV0dG9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG5cclxuICAgIHRtdWkucmVtb3ZlQ2hpbGQoYnRuLmVsKTtcclxuICAgIGJ0bi5zaG93biA9IGZhbHNlO1xyXG5cclxuICAgIGJ0bi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bi5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSxcclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3RtdWlwb3MnKVxyXG4gICAgICAudGhlbihwb3MgPT4gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcG9zLnNwbGl0KCctJykubWFwKHAgPT4gcCArICc6MXB4OycpLmpvaW4oJyAnKSkpO1xyXG4gIH0sXHJcbiAgb25Ob3RlQWRkZWQoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkxhc3ROb3RlUmVtb3ZlZCgpIHtcclxuICAgIHRoaXMubm90ZXMgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkJvb2ttYXJrQWRkZWQoKSB7XHJcbiAgICB0aGlzLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICBvbkJvb2ttYXJrUmVtb3ZlZCgpIHtcclxuICAgIHRoaXMuYm9va21hcmsgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcygpIHtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVzJyk7XHJcbiAgfSxcclxuICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzY3JvbGwtdG8tYm9va21hcmsnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdpbmplY3Rpb24nLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnY29weTptYXJrcycsXHJcbiAgICAgICdzYXZlOmVudHJ5PycsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JyxcclxuICAgICAgJ2xvb2t1cDp3b3JkJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FjdGl2YXRlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnLFxyXG5cclxuICAgICAgLy8gQFJFU1RPUkVSXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbicsXHJcbiAgXHRcdCdmYWlsZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJyxcclxuICAgICAgJ2NhbmNlbGVkOnNhdmUtYWZ0ZXItY2FuY2VsZWQtcmVzdG9yYXRpb24nXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9ET01NT0RVTEUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBvYmouX2JvdW5kID0ge307XHJcbiAgICBvYmouX2V4dHJhQm91bmQgPSBbXTtcclxuXHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnNNYW51YWxseSB8fCB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgIXRoaXMuYXV0b1BhdXNlIHx8IHRoaXMuc2V0QXV0b1BhdXNlKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2V0QXV0b1BhdXNlKCkge1xyXG4gICAgdGhpcy5vbigndG9nZ2xlZDphZGRvbicsIG9uID0+IHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKCk7XHJcbiAgfVxyXG4gIGV4dGVuZChldmVudHMpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cyk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cyB8fCB0aGlzLmV2ZW50cztcclxuICAgIGxldCBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==