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
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

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

exports["default"] = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas',
      'updated:naming-settings': 'updateStatus',
      'updated:hashopt-settings': 'updateStatus',
      'updated:entry-sync': 'setSyncForEntry',
      'updated:entry-name': 'renameEntry',
      'deleted:entry': 'removeEntry',
      'hashchange': 'resume'
    }
  },
  initialized: false,
  initializing: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_entry: 'sync',
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
  setAreas: function setAreas() {
    var _this2 = this;

    return browser.storage.sync.get().then(function (storage) {
      if (storage && storage.sync) {
        _this2.area_settings = storage.sync.settings ? 'sync' : 'local';
        _this2.area_history = storage.sync.history ? 'sync' : 'local';
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
  get: function get() {
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
      return this.setAreas().then(function () {
        _this3.initializing = false;
        return _this3['_get_' + field]();
      });
    }

    return this['_get_' + field]();
  },
  _get_history: function _get_history() {
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
  },
  _get_settings: function _get_settings() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings;
    });
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
  _get_progressbar: function _get_progressbar() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.progressbar;
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

/***/ "./content/page-injections/bootstrap.js":
/*!**********************************************!*\
  !*** ./content/page-injections/bootstrap.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

var _page = __webpack_require__(/*! ./modules/page */ "./content/page-injections/modules/page.js");

var _page2 = _interopRequireDefault(_page);

var _contextmenu = __webpack_require__(/*! ./modules/contextmenu */ "./content/page-injections/modules/contextmenu.js");

var _contextmenu2 = _interopRequireDefault(_contextmenu);

var _marker = __webpack_require__(/*! ./modules/marker */ "./content/page-injections/modules/marker.js");

var _marker2 = _interopRequireDefault(_marker);

var _progress = __webpack_require__(/*! ./modules/progress */ "./content/page-injections/modules/progress.js");

var _progress2 = _interopRequireDefault(_progress);

var _restorer = __webpack_require__(/*! ./modules/restorer */ "./content/page-injections/modules/restorer.js");

var _restorer2 = _interopRequireDefault(_restorer);

var _notes = __webpack_require__(/*! ./modules/notes */ "./content/page-injections/modules/notes.js");

var _notes2 = _interopRequireDefault(_notes);

var _tmui = __webpack_require__(/*! ./modules/tmui */ "./content/page-injections/modules/tmui.js");

var _tmui2 = _interopRequireDefault(_tmui);

var _markerPopup = __webpack_require__(/*! ./modules/marker-popup */ "./content/page-injections/modules/marker-popup.js");

var _markerPopup2 = _interopRequireDefault(_markerPopup);

var _autoMarker = __webpack_require__(/*! ./modules/auto-marker */ "./content/page-injections/modules/auto-marker.js");

var _autoMarker2 = _interopRequireDefault(_autoMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'autoinit',
      'toggled:addon': 'power'
    }
  },
  bootstrapped: false,
  autoinit: function autoinit() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage && storage.settings && storage.history && storage.settings.addon.active) {
        _this.power(true);
      }
    });
  },
  power: function power(on) {
    if (!on || this.bootstrapped) return false;
    (0, _page2["default"])();
    (0, _contextmenu2["default"])();
    (0, _progress2["default"])();
    (0, _restorer2["default"])();
    (0, _marker2["default"])();
    (0, _notes2["default"])();
    (0, _tmui2["default"])();
    (0, _markerPopup2["default"])();
    (0, _autoMarker2["default"])();
    this.bootstrapped = true;
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

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(/*! ./port */ "./content/page-injections/port.js");

__webpack_require__(/*! ./_store */ "./content/page-injections/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/page-injections/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/page-injections/modules/auto-marker.js":
/*!********************************************************!*\
  !*** ./content/page-injections/modules/auto-marker.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
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
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
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
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
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
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/page-injections/modules/marker.js":
/*!***************************************************!*\
  !*** ./content/page-injections/modules/marker.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  // marker module
  return new _utils._MODULE({
    events: {
      ENV: {
        'set:entries': 'updateID',
        'pressed:marker-key': 'onMarkerKey',
        'pressed:hotkey': 'onHotkey',
        'clicked:popup-marker': 'onMarkerKey',
        'selection-end': 'onMarkerKey',
        'restored:range': 'recreate',
        'finished:all-restorations': 'onFinishedRestoration',
        'canceled:restoration': 'onCanceledRestoration',
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
      _store2["default"].disabled = false; // while (this.done.length) {
      //   this.undo(true);
      // }

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

      if (_store2["default"].disabled) return this.emit('canceled:save-after-canceled-restoration');
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
    onCanceledRestoration: function onCanceledRestoration() {
      _store2["default"].disabled = true;
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
};

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._MODULE({
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
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

var _note = __webpack_require__(/*! ./note */ "./content/page-injections/modules/note.js");

var _note2 = _interopRequireDefault(_note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/page-injections/modules/page.js":
/*!*************************************************!*\
  !*** ./content/page-injections/modules/page.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: window.document,
    addListenersManually: true,
    events: {
      ENV: {
        'started:app': 'checkURL',
        'toggled:addon': 'power',
        'saved:entry': 'update',
        'opened:sidebar': 'sendPageState',
        'failed:restoration': 'activateRetry',
        'succeeded:restoration': 'deactivateRetry',
        'update:entry?': 'deactivateRetry',
        'changed:url': 'onUrlChange',
        'resumed-on-hashchange': 'setup'
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
    url: '',
    active: true,
    set: false,
    initialized: false,
    retryActive: false,
    shiftSensitiveKeys: [13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 171, 173],
    registeredLoadHandler: false,
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
    autoinit: function autoinit() {
      this.setup();
    },
    power: function power(on) {
      if (on) this.addListeners();else this.removeListeners();
      this.active = on;
      this.setup();
    },
    setup: function setup() {
      var _this = this;

      _store2["default"].get('mode').then(function (active) {
        _this.active = active;
        if (_this.set || !active) return false;

        if (window.parent.window.document.readyState !== 'complete' && !_this.registeredLoadHandler) {
          _this.registeredLoadHandler = true;
          return _this.addListener('load', function () {
            return _this.setup();
          }, window.parent.window);
        }

        _store2["default"].iframe = _this.isIFrame();
        _this.url = window.document.URL;
        _this.hashlessURL = (0, _utils._HASHLESS)(_this.url);

        _this.checkURL();

        _this.removeListeners();

        if (active) _this.addListeners();
        _this.set = true;
      });
    },
    isIFrame: function isIFrame() {
      return window !== window.parent.window;
    },
    isEditable: function isEditable(el) {
      var name = el.tagName;
      return name === 'TEXTAREA' || name === 'INPUT' || el.contentEditable === 'true';
    },
    delegate: function delegate(e) {
      var _this2 = this;

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
            _this2.lookup();
          } else if (isMarkerKey && !setting[0] && setting[1]) {
            _this2.emit('pressed:marker-key', e, origKey);
          }
        } else {
          if (!setting[1]) return true;
          var shortcut = setting[0].split('-');
          var s1 = shortcut[0];
          var s2 = shortcut[1];
          if (!e[s1] || s2 && !e[s2]) return true;
          if (key === 'w') _this2.lookup();else if (isMarkerKey) {
            _this2.emit('pressed:marker-key', e, origKey);
          } else _this2.emit('pressed:hotkey', key);
        }
      });
    },
    lookup: function lookup() {
      var selectedText = window.getSelection().toString();
      if (selectedText) this.emit('lookup:word', selectedText);
    },
    checkURL: function checkURL() {
      var _this3 = this;

      this.request('check:url', this.url).then(function (data) {
        if (data) _this3.onUrlFound(_this3.filterEntries(data.entries), data.recentlyOpenedEntry);
      });
    },
    update: function update(entries, force) {
      force = force === true ? true : false;
      entries = Array.isArray(entries) ? entries : [entries];
      var firstEntry = entries[0];
      var ignoreHash = !firstEntry.hashSensitive;
      var url = ignoreHash ? this.hashlessURL : this.url;

      if (force || firstEntry.url === url) {
        _store2["default"].addEntries(entries); //_STORE.entry = entry;


        if (force) this.emit('set:entries', entries);
      }
    },
    onHotkey: function onHotkey(key) {
      if (key === 'w') this.lookup();
    },
    onUrlFound: function onUrlFound(entries, recentlyOpenedEntry) {
      this.update(entries, true);

      if (this.active && !this.initialized && !document.querySelector('[data-tm-id]')) {
        this.initialized = true;

        if (recentlyOpenedEntry) {
          var firstEntry = entries[0];
          var ignoreHash = !firstEntry.hashSensitive;
          var url = ignoreHash ? this.hashlessURL : this.url;

          if (recentlyOpenedEntry.url === url) {
            _store2["default"].name = recentlyOpenedEntry.name;
          }
        }

        this.emit('restore:marks', entries);
      }
    },
    filterEntries: function filterEntries(entries) {
      var lockedEntries = [],
          l = entries.length,
          lockedEntriesExist = false,
          nonLockedEntries = [];

      for (var i = 0, entry; i < l; i++) {
        entry = entries[i];

        if (entry.locked) {
          lockedEntries.push(entry);
          lockedEntriesExist = true;
        } else {
          nonLockedEntries.push(entry);
        }
      }

      if (lockedEntriesExist && nonLockedEntries.length) {
        this.emit('warn:mixed-entry-types');
      } else if (nonLockedEntries.length > 1) {
        this.emit('warn:multiple-unlocked-entries');
        entries = [nonLockedEntries[0]];
      }

      if (lockedEntries.length) {
        _store2["default"].locked = true;
        entries = lockedEntries.sort(function (a, b) {
          return new Date(a.last) - new Date(b.last);
        });
      } else {
        _store2["default"].locked = false;
      }

      return entries;
    },
    onSelectionChange: function onSelectionChange(e) {
      this.emit('changed:selection', !window.getSelection().isCollapsed);
    },
    onUrlChange: function onUrlChange(tab, newUrl) {
      var entry = _store2["default"].entries[Object.keys(_store2["default"].entries)[0]];

      if (!_store2["default"].isNew && entry && entry.hashSensitive && (0, _utils._HASHLESS)(newUrl) === this.hashlessURL && newUrl !== this.url) {
        this.set = false;
        this.initialized = false;
        this.emit('hashchange');
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
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/page-injections/modules/progress.js":
/*!*****************************************************!*\
  !*** ./content/page-injections/modules/progress.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'started:restoration': 'start',
        'restored:range': 'progress',
        'failed:restore-range': 'progress',
        'finished:restoration': 'stop',
        'updated:misc-settings': 'activate'
      }
    },
    el: null,
    active: true,
    steps: 0,
    totalWidth: 413,
    currentWidth: 0,
    stepLength: 0,
    cancelHandler: null,
    autoinit: function autoinit() {
      var _this = this;

      this.activate().then(function () {
        return _this.create();
      });
    },
    create: function create() {
      var _this2 = this;

      var modal = this.el = window.document.createElement('tmprogressmodal');
      [{
        type: 'tmprogressheader',
        text: browser.i18n.getMessage('restoring')
      }, {
        type: 'tmprogressclose',
        text: String.fromCharCode(10005)
      }, {
        type: 'tmprogressbar',
        child: {
          type: 'tmprogress'
        }
      }, {
        type: 'tmprogresscancel',
        text: browser.i18n.getMessage('cancel')
      }].forEach(function (obj) {
        var el = window.document.createElement(obj.type);
        modal.appendChild(el);
        _this2[obj.type] = el;
        if (obj.text) el.textContent = obj.text;

        if (obj.child) {
          var child = window.document.createElement(obj.child.type);
          el.appendChild(child);
          _this2[obj.child.type] = child;
        }
      });
    },
    resume: function resume(len) {
      this.steps = len;
      this.stepLength = this.totalWidth / len;
      this.currentWidth = 0;
      this.tmprogress.style.width = 0;
    },
    start: function start(len) {
      if (!len || !this.active) return;
      this.resume(len);
      var cancelHandler = this.cancelHandler = this.cancel.bind(this);
      var closeHandler = this.closeHandler = this.stop.bind(this);
      window.document.body.appendChild(this.el);
      this.tmprogresscancel.addEventListener('click', cancelHandler, false);
      this.tmprogressclose.addEventListener('click', closeHandler, false);
    },
    progress: function progress() {
      var width = this.currentWidth += this.stepLength;
      this.tmprogress.style.width = width + 'px';
    },
    stop: function stop() {
      try {
        window.document.body.removeChild(this.el);
        this.tmprogresscancel.removeEventListener('click', this.cancelHandler, false);
        this.tmprogressclose.removeEventListener('click', this.closeHandler, false);
      } catch (e) {}
    },
    cancel: function cancel() {
      this.stop();
      this.emit('canceled:restoration');
    },
    activate: function activate() {
      var _this3 = this;

      return _store2["default"].get('progressbar').then(function (progressbar) {
        return _this3.active = progressbar;
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

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

    _this.on('canceled:restoration', function () {
      return _this.canceled = true;
    });

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
      if (this.canceled) return false;
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

        if (this.queue.length && !this.canceled) {
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
      if (m <= l) textsMatch = this.squeeze(relevantNodeText).indexOf(this.squeeze(markText)) === 0;else textsMatch = this.squeeze(markText).indexOf(this.squeeze(relevantNodeText)) === 0;
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

      if (this.canceled) return this.marks = [];
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
      var self = this,
          selection = this.self,
          range = this.range,
          container = wholeDocument ? window.document.body : this.getCommonAncestorContainer(),
          filter = wholeDocument ? function (node) {
        return self.isSelectable(node) && !self.isBlank(node) && self.hasNormalParent(node);
      } : function (node) {
        return selection.containsNode(node) && !self.isBlank(node) && self.hasNormalParent(node);
      },
          iterator = window.document.createNodeIterator(container, NodeFilter.SHOW_TEXT, {
        acceptNode: function acceptNode(node) {
          return filter(node);
        }
      }, false),
          tempRange = document.createRange(),
          nodes = [],
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
        if (this.simple) {
          //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset, selection.focusOffset);
          nodeTexts[0] = nodeTexts[0].substring(range.startOffset, range.endOffset);
        } else {
          //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset);
          //nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : selection.focusOffset);
          nodeTexts[0] = nodeTexts[0].substring(range.startOffset);
          nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : range.endOffset);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (mark) {
  return new _utils._DOMMODULE({
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
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: ['finished:restoration', 'failed:restoration', 'succeeded:restoration', 'canceled:restoration', 'failed:restore-range', 'canceled:save-after-canceled-restoration', 'copy:marks', 'save:entry?', 'update:entry?', 'lookup:word', 'error:browser-console', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'activated:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note', 'warn:mixed-entry-types', 'warn:multiple-unlocked-entries', 'page-state', 'notes-state', 'visually-ordered:marks']
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
    var events = _this.events,
        oneOffEvents,
        connectionBasedEvents;

    if (events) {
      oneOffEvents = events.ONEOFF;

      if (oneOffEvents) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            _this.on(e, _this.proxy(_assertThisInitialized(_this), _this.sendMessage, e));
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

            _this.on(f, _this.proxy(_assertThisInitialized(_this), _this.postMessage, f));
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

    return _this;
  }

  _createClass(_PORT, [{
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9hdXRvLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2Jvb2ttYXJrLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvY29udGV4dG1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXItcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9wYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9yZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3RtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfZW50cnkiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeVNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibWV0aCIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZFN0b3JhZ2UiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWwiLCJsb2NhbFN0b3JhZ2UiLCJsb2NhbEhpc3RvcnkiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9ibWljb24iLCJtaXNjIiwiYm1pY29uIiwiX2dldF9ub3RlaWNvbiIsIm5vdGVpY29uIiwiX2dldF9ub3Rlb25jbGljayIsIm5vdGVvbmNsaWNrIiwiX2dldF90bXVpcG9zIiwidG11aXBvcyIsIl9nZXRfYXV0b3NhdmUiLCJhdXRvc2F2ZSIsIl9nZXRfaW1tdXQiLCJfZ2V0X3Byb2dyZXNzYmFyIiwicHJvZ3Jlc3NiYXIiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJzaG9ydGN1dHMiLCJfZ2V0X21vZGUiLCJhZGRvbiIsImFjdGl2ZSIsIl9nZXRfbmFtaW5nIiwiYm9vdHN0cmFwcGVkIiwicG93ZXIiLCJvbiIsImhhbmRsZXIiLCJtYXJrZXIiLCJ1cGRhdGUiLCJfU1RPUkUiLCJtYXJrbWV0aG9kIiwic2V0TWFya2VyIiwia2V5Iiwib25TZWxlY3Rpb25DaGFuZ2UiLCJzZWxlY3RlZCIsImxpc3RlbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwic3RvcExpc3RlbmluZyIsIm9uTW91c2V1cCIsImJpbmQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJ0b1N0cmluZyIsImVtaXQiLCJfQk9PS01BUksiLCJtYXJrIiwiYW5jaG9yIiwid3JhcHBlcnMiLCJ3Iiwia2V5RGF0YSIsImJvb2ttYXJrIiwiaWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJibSIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYWN0aXZhdGUiLCJyZWdpc3RlckhhbmRsZXIiLCJyZW1vdmVMaXN0ZW5lcnMiLCJhZGRMaXN0ZW5lciIsImJ1dHRvbiIsInRhcmdldCIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIiwiX01BUksiLCJwcmVTZXR0aW5ncyIsImRlZmF1bHRzIiwiaXNJbW11dCIsInN0eWxlIiwiY29uZHMiLCJ0ZXh0Iiwibm90ZSIsImQiLCJpZGNvdW50Iiwic2ltcGxlIiwicmFuZ2UiLCJzdGFydE9mZnNldCIsImVuZE9mZnNldCIsImNvbnRhaW5lcnMiLCJhbmNob3JOb2RlUG9zaXRpb24iLCJmb2N1c05vZGVQb3NpdGlvbiIsImRlc2NyaWJlX2ltbXV0Iiwibm9kZXMiLCJuIiwiY3JlYXRlV3JhcHBlcnMiLCJsYXN0SW5kZXgiLCJub2RlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJzdXJyb3VuZENvbnRlbnRzIiwicHVzaCIsInBhcmVudE5vZGUiLCJub3JtYWxpemUiLCJkZWZpbmVQb3NpdGlvbiIsInNldEJvb2ttYXJrIiwiZGVzY3JpYmUiLCJyZWdpc3RlckNsaWNrTGlzdGVuZXJzIiwid3JhcHBlciIsInByb3h5Iiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5jbHVkaW5nT2Zmc2V0cyIsImZpcnN0V3JhcHBlciIsImxhc3RXcmFwcGVyIiwiZmlyc3RQYXJlbnQiLCJsYXN0UGFyZW50IiwiYW5jaG9yUHJldiIsImZvY3VzUHJldiIsIndoaWNoQ2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJub2RlVHlwZSIsImRhdGEiLCJjb250YWluZXIiLCJyZXBsYWNlQ2hpbGQiLCJmaXJzdENoaWxkIiwic2VsZiIsImNoaWxkTm9kZXMiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbGxlY3ROb2RlcyIsImNvbGxhcHNlVG9TdGFydCIsImNyZWF0ZSIsInBhcmVudCIsImNoaWxkIiwiaW5jbHVkaW5nVGV4dE5vZGVzIiwiY2hpbGRyZW4iLCJjIiwibnVtYmVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJzdGFydCIsInN0YXJ0Q29udGFpbmVyIiwiZW5kIiwiZW5kQ29udGFpbmVyIiwic2luZ2xlTm9kZSIsInBhcmVudElzVE0iLCJoYXNBdHRyaWJ1dGUiLCJncmFtcGEiLCJncmFuZGdyYW1wYSIsImZUTlAiLCJvIiwibjEiLCJub2RlTmFtZSIsInAxIiwibjIiLCJwMiIsInAzIiwicDQiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJhbmNob3JOb2RlIiwiZm9jdXNOb2RlIiwicyIsInAiLCJhcHBlbmRlZCIsImhlaWdodCIsInBvcHVwIiwiZWwiLCJiZ0NvbG9yUmVnRXhwIiwiYmdDb2xvciIsImNvbG9yQnRuIiwibSIsIm1hdGNoIiwiYXBwZW5kQ2hpbGQiLCJiYWNrZ3JvdW5kIiwicG9wIiwicmVtb3ZlQ2hpbGQiLCJzaG93IiwicG9wdXBIZWlnaHQiLCJvbk1vdXNlZG93biIsInNlbGVjdGlvblBvc2l0aW9uIiwiZ2V0UmFuZ2VBdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFkiLCJsZWZ0Iiwic2Nyb2xsWCIsIm9mZnNldEhlaWdodCIsInBhcnNlSW50IiwicHJldmVudERlZmF1bHQiLCJzcGxpdCIsImRvbmUiLCJ1bmRvbmUiLCJ2aXN1YWxseU9yZGVyZWRNYXJrcyIsInZpc3VhbGx5T3JkZXJlZE1hcmtJRHMiLCJyZW1vdmVkQm9va21hcmsiLCJtYXJrU2Nyb2xsUG9zIiwidXBkYXRlSUQiLCJsIiwiaWRzIiwibWFya3MiLCJjb25jYXQiLCJsb3N0IiwiTWF0aCIsIm1heCIsImFwcGx5IiwiYXV0b25vdGUiLCJ1bmRvIiwibm9BdXRvc2F2ZSIsInVuZG9Cb29rbWFyayIsInJlZG8iLCJjdXRPdXQiLCJ0b0JlUmVtb3ZlZCIsImluZGljZXMiLCJzbWFsbGVzdElEIiwiZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3MiLCJqIiwieCIsIm1hcmtzSW50ZXJzZWN0IiwiaW5jbHVkZXMiLCJzb3J0Iiwic2hpZnQiLCJtaW4iLCJzcGxpY2UiLCJnZXRCeUlkIiwicG9zaXRpb24iLCJpbmRleE9mIiwiZm9yRWFjaCIsImFyZyIsIm9wdGlvbnMiLCJkaXNhYmxlZCIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoaWdobGlnaHQiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHRDb250ZW50Iiwic2lsZW50IiwiaW1tdXRhYmxlIiwic2F2ZSIsInJlcXVlc3QiLCJncmFudGVkIiwic3ViIiwiaTE4biIsImdldE1lc3NhZ2UiLCJwcm9tcHQiLCJyZXRyaWV2ZUVudHJ5IiwiY29uZmlybWVkIiwiY29uZmlybSIsImNvcHkiLCJmaW5kTWFyayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRyaW0iLCJzdG9yZSIsIm9yZGVyIiwib3JkZXJNYXJrc1Zpc3VhbGx5IiwicmVjcmVhdGUiLCJfU0VMRUNUSU9OIiwicHJvZ3JhbW1hdGljYWxseSIsIm9uRmluaXNoZWRSZXN0b3JhdGlvbiIsInN1YnN0cmluZyIsIl9HTE9CQUxfU0VUVElOR1MiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsImdvdG9NYXJrIiwic29ydEJ5SWQiLCJzY3JvbGxUb0Jvb2ttYXJrIiwib25DYW5jZWxlZFJlc3RvcmF0aW9uIiwiYWRkTm90ZSIsInNhdmVOb3RlIiwibWFya0VsZW1lbnRzIiwicG9zIiwiaW5kaWNhdGVNYXJrIiwiZ290b05leHRNYXJrIiwiZGlyIiwicXVlcnlTZWxlY3RvckFsbCIsInRtIiwidG1zIiwic2V0IiwicmVtb3ZlQm9va21hcmsiLCJtYXJrMSIsIm1hcmsyIiwibTEiLCJtMiIsImJiMSIsImJiMiIsInRvcDEiLCJ0b3AyIiwibWFwIiwid3JhcHBlcnMxIiwidzEiLCJpZDEiLCJ3cmFwcGVyczIiLCJpZDIiLCJ3MiIsIm9uTWFya2VyS2V5Iiwib25Ib3RrZXkiLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0IiwidXJsIiwiVVJMIiwia0QiLCJvbkhhc2hDaGFuZ2UiLCJjb2xvciIsIkJPRFkiLCJET00iLCJjbGljayIsImtleXVwIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwibWFya0NsaWNrSGFuZGxlciIsInZpc2libGUiLCJyZWNlbnRseVVwZGF0ZWQiLCJzZXR0aW5nc01vZGUiLCJ0Iiwic2l6ZSIsImgiLCJkcmFnRFgiLCJkcmFnRFkiLCJtdXRhdGlvbk9ic2VydmVyIiwiYWRqdXN0Tm90ZURhdGFPYmplY3QiLCJjcmVhdGVOb3RlRWxlbWVudCIsImFkZExpc3RlbmVycyIsImFkZE1hcmtMaXN0ZW5lcnMiLCJub3RlRGF0YSIsImhlYWRlciIsImFjdGlvbnMiLCJkZWwiLCJnZWFyIiwicGFsZXR0ZSIsInRleHRFbGVtZW50IiwiZGVsVGV4dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pblRleHQiLCJnZWFyVGV4dCIsImNsYXNzTmFtZSIsInZhbHVlIiwiYXR0ZW1wdFVwZGF0ZSIsIl9kZWxldGUiLCJoaWRlIiwicmVtb3ZlTWFya0xpc3RlbmVycyIsImZvcmNlIiwiaW5uZXJXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRQb3NpdGlvbiIsIm9mZnNldCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIiLCJicmluZ1VwRnJvbnQiLCJ6SW5kZXgiLCJkaXNjb25uZWN0IiwidG9nZ2xlIiwidG9nZ2xlUGFsZXR0ZSIsImNoYW5nZUNvbG9yIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dGFyZWEiLCJjb25maWciLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJzYXZlU2l6ZSIsIm9ic2VydmUiLCJyZWN0IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvbkRyYWdTdGFydCIsInBhZ2VYIiwicGFnZVkiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJtdXRhdGlvbnNMaXN0Iiwid2lkdGgiLCJub3RlcyIsImRyYWdIYW5kbGVyIiwiZHJhZ1N0b3BIYW5kbGVyIiwidXBkYXRlVHJhbnNwIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJjb25kaXRpb24iLCJib2R5Q2xhc3NlcyIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsInN0YXJ0RHJhZ2dpbmdOb3RlIiwiZW1pdERyYWdFdmVudCIsInN0b3BEcmFnZ2luZ05vdGUiLCJkb2MiLCJzZW5kTm90ZXNTdGF0ZSIsImluZm8iLCJrZXlkb3duIiwic2VsZWN0aW9uY2hhbmdlIiwicmV0cnlBY3RpdmUiLCJzaGlmdFNlbnNpdGl2ZUtleXMiLCJyZWdpc3RlcmVkTG9hZEhhbmRsZXIiLCJrZXlDb2RlTWFwIiwic2V0dXAiLCJyZWFkeVN0YXRlIiwiaXNJRnJhbWUiLCJoYXNobGVzc1VSTCIsImNoZWNrVVJMIiwiaXNFZGl0YWJsZSIsInRhZ05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJkZWxlZ2F0ZSIsInRvTG93ZXJDYXNlIiwia2V5Q29kZSIsIm1vZEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJhcnJvd0tleXMiLCJsb2NrZWRBY3Rpb25zIiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJpc0NvbGxhcHNlZCIsIm9yaWdLZXkiLCJpc01hcmtlcktleSIsImlzQ3VzdG9tTWFya2VyS2V5Iiwic2V0dGluZyIsImxvb2t1cCIsInNob3J0Y3V0IiwiczEiLCJzMiIsInNlbGVjdGVkVGV4dCIsIm9uVXJsRm91bmQiLCJmaWx0ZXJFbnRyaWVzIiwicmVjZW50bHlPcGVuZWRFbnRyeSIsImlzQXJyYXkiLCJmaXJzdEVudHJ5IiwibG9ja2VkRW50cmllcyIsImxvY2tlZEVudHJpZXNFeGlzdCIsIm5vbkxvY2tlZEVudHJpZXMiLCJhIiwiYiIsIm9uVXJsQ2hhbmdlIiwidGFiIiwibmV3VXJsIiwiYWN0aXZhdGVSZXRyeSIsImRlYWN0aXZhdGVSZXRyeSIsInNlbmRQYWdlU3RhdGUiLCJzdGVwcyIsInRvdGFsV2lkdGgiLCJjdXJyZW50V2lkdGgiLCJzdGVwTGVuZ3RoIiwiY2FuY2VsSGFuZGxlciIsIm1vZGFsIiwidHlwZSIsImxlbiIsInRtcHJvZ3Jlc3MiLCJjYW5jZWwiLCJjbG9zZUhhbmRsZXIiLCJzdG9wIiwidG1wcm9ncmVzc2NhbmNlbCIsInRtcHJvZ3Jlc3NjbG9zZSIsInByb2dyZXNzIiwicmVzdG9yZWQiLCJmYWlsZWQiLCJmYWlsdXJlUmVwb3J0IiwiSW1tdXRSZXN0b3JlciIsIlJlc3RvcmVyIiwicmV0cnkiLCJvbkZhaWx1cmUiLCJyZXBvcnQiLCJnZXRSZXBvcnQiLCJtc2ciLCJyZWFzb24iLCJSZXN0b3JlckJhc2UiLCJhcmVhIiwiY2FuY2VsZWQiLCJwcm9jIiwiY2IiLCJyZWMiLCJleHBpcmUiLCJsbCIsInRlbXAiLCJxdWV1ZSIsImNhY2hlIiwicGhhc2UiLCJzZWxlY3Rpb25UcmlhbCIsImNodW5rRHVyYXRpb24iLCJfdGltZXIiLCJvb20iLCJpbml0Iiwibm93IiwicG9zdHBvbmVkIiwiY29udmVydERlc2NyaXB0aW9uIiwiY3JlYXRlVGVtcE9iamVjdCIsImNvbnZlcnRlZENvbmRzIiwiZmlyc3ROb2RlTmFtZSIsImZpcnN0UGFyZW50Tm9kZU5hbWUiLCJmaXJzdFRleHROb2RlUG9zaXRpb24iLCJmaXJzdE5vZGVQb3NpdGlvbiIsImZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uIiwiZmlyc3RHcmFtcGFOb2RlUG9zaXRpb24iLCJ0cmltbWVkVGV4dCIsInNxdWVlemVkVGV4dCIsInNxdWVlemUiLCJ0ZXh0TGVuZ3RoIiwidHJpbW1lZFRleHRMZW5ndGgiLCJzcXVlZXplZFRleHRMZW5ndGgiLCJwb3NzaWJsZVBvc2l0aW9ucyIsInBvc3NpYmxlRW5kUG9zaXRpb25zIiwicG9zc2libGVTdGFydE5vZGVzIiwicG9zc2libGVFbmRzIiwicG9zc2libGVGb2N1c09mZnNldHMiLCJzb3J0UXVldWVCeUlkIiwic2V0Qm9keVNlbGVjdGlvbiIsImdldFRleHRQb3NpdGlvbnMiLCJwb3N0cG9uZU92ZXJsYXBwaW5ncyIsImZpbmRQb3NzaWJsZUV4dHJlbWEiLCJydWxlT3V0TXVsdGlwbGVzIiwicmVzdG9yZVJhbmdlcyIsInRpbWVyIiwicmVzIiwidHJpbW1lZFNlbGVjdGlvblRleHQiLCJhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwiZW5kUG9zaXRpb25zIiwibWFya1RlbXAiLCJzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyIsIm1heFBvc2l0aW9uIiwicG9zaXRpb25zIiwicG9zMSIsInBvczIiLCJwb3N0cG9uZSIsImN1dE91dEZvciIsImFscmVhZHlJbmNsdWRlZCIsImJvZHlUZXh0Tm9kZXMiLCJzYXRpc2ZpZWQiLCJjaGFycyIsIm5leHRTdGFydEZvdW5kIiwiZW5kaW5nc0luVGhpc05vZGUiLCJub2Rlc1RleHQiLCJub2Rlc1RleHRMZW5ndGgiLCJkaWZmIiwiZiIsInEiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0Iiwic3RhcnRGb3VuZEZvciIsImhhc0VuZGluZ3NJblRoaXNOb2RlIiwiZW5kRm91bmRGb3IiLCJzYXRpc2ZpZXNEZXNjcmlwdGlvbiIsImZpbmRGb2N1c09mZnNldCIsImdyYW5kZ3JhbmRncmFtcGEiLCJtYXRjaGVzIiwic3RhcnROb2RlIiwic3RhcnROb2RlUG9zaXRpb24iLCJzZXRNYXRjaGluZ0VuZCIsImVuZE5vZGUiLCJlbmROb2RlUG9zaXRpb24iLCJmb2N1c09mZnNldCIsImRlc2NyaXB0aW9uIiwicmVsZXZhbnROb2RlVGV4dCIsIm1hcmtUZXh0IiwidGV4dHNNYXRjaCIsIm5vZGVUZXh0IiwiY291bnRlciIsInRlc3QiLCJjcmVhdGVSYW5nZSIsInJlY29sbGVjdE5vZGVzIiwic2xpY2UiLCJjb250ZXh0IiwiY3VycmVudENoaWxkIiwicHJvY2Vzc0luQ2h1bmtzIiwicmVzdG9yZVJhbmdlIiwiZ2V0Tm9kZSIsInRleHROb2RlUG9zaXRpb24iLCJyYW5nZUNvdW50IiwiZGVmaW5lZCIsInJlZHVjZVRvT25lUmFuZ2UiLCJyZXRyaWV2ZVRleHQiLCJhZGp1c3QiLCJzZWxlY3RBbGxDaGlsZHJlbiIsInByb3BzIiwiaXNTaW1wbGUiLCJmb2N1cyIsImlzQmFja3dhcmRzIiwicmV2ZXJzZSIsImZpcnN0VGV4dE5vZGUiLCJsYXN0VGV4dE5vZGUiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsIndob2xlRG9jdW1lbnQiLCJnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lciIsImZpbHRlciIsImlzU2VsZWN0YWJsZSIsImlzQmxhbmsiLCJoYXNOb3JtYWxQYXJlbnQiLCJjb250YWluc05vZGUiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwidGVtcFJhbmdlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJ0cmltU2VsZWN0aW9uIiwicmVkdWNlVG9TZWxlY3RhYmxlIiwiY29sbGVjdFBhcmVudE5vZGVzIiwibWFya1dyYXBwZXJzIiwibmV3U2VnbWVudCIsInByZXYiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJ1bnNoaWZ0IiwiYW5jaG9yT2Zmc2V0Iiwic3Vic3RyIiwic2VsIiwicmciLCJzZWxlY3ROb2RlIiwicGFyZW50cyIsIm5vZGVUZXh0cyIsImpvaW4iLCJub2RlMSIsIm5vZGUyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJyYW5nZTAiLCJsYXN0UmFuZ2UiLCJ0YWciLCJ0b1VwcGVyQ2FzZSIsImlzQ2hpbGRPZiIsInNlYXJjaCIsImF0dGFjaGVkIiwiYnV0dG9ucyIsInNob3duIiwiY3JlYXRlQnV0dG9ucyIsInVwZGF0ZVN0YXRlIiwic2hvdWxkQXR0YWNoIiwicmVuZGVyIiwiYnRuIiwiYWRkQnV0dG9uIiwicmVtb3ZlQnV0dG9uIiwidXBkYXRlUG9zaXRpb24iLCJ0bXVpIiwibm90ZXNCdXR0b24iLCJib29rbWFya0J1dHRvbiIsInRvZ2dsZU5vdGVzIiwib25Ob3RlQWRkZWQiLCJvbkxhc3ROb3RlUmVtb3ZlZCIsIm9uQm9va21hcmtBZGRlZCIsIm9uQm9va21hcmtSZW1vdmVkIiwiT05FT0ZGIiwiTUFYX0xPR19FTlRSSUVTIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInZhbCIsInByb3AiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwib2JqMSIsIm9iajIiLCJ0YWJzIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiYXJncyIsInRvcGljIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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S0FBSzFuQixLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLeW5CLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTWIsSUFBSSxHQUFHLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWFqdkIsT0FBTyxDQUFDd3VCLE9BQVIsQ0FBZ0JzQixPQUFoQixDQUF3QjtBQUFFcnhCLFlBQUksRUFBRSxLQUFLQTtBQUFiLE9BQXhCLENBQXRDO0FBQ0F3d0IsVUFBSSxDQUFDZSxZQUFMLENBQWtCbnFCLFdBQWxCLENBQThCO0FBQUEsZUFBTSxNQUFJLENBQUNvcEIsSUFBTCxHQUFZLElBQWxCO0FBQUEsT0FBOUI7QUFDRDs7OzJDQUNzQjdPLEUsRUFBSTtBQUFBOztBQUN6QnBnQixhQUFPLENBQUN3dUIsT0FBUixDQUFnQnlCLFNBQWhCLENBQTBCcHFCLFdBQTFCLENBQXNDLFVBQUFvcEIsSUFBSSxFQUFJO0FBQzVDQSxZQUFJLENBQUNDLFNBQUwsQ0FBZXJwQixXQUFmLENBQTJCLE1BQUksQ0FBQ3dDLEtBQUwsQ0FBVyxNQUFYLEVBQWlCLE1BQUksQ0FBQzhtQixXQUF0QixDQUEzQjtBQUNBLFNBQUMvTyxFQUFELElBQU9BLEVBQUUsRUFBVDtBQUNELE9BSEQ7QUFJRDs7OztFQWxGd0J6aUIsZSIsImZpbGUiOiJjb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdzZXRBcmVhcycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDpoYXNob3B0LXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnOiAnc2V0U3luY0ZvckVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZSc6ICdyZW5hbWVFbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnOiAncmVzdW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gIGluaXRpYWxpemluZzogZmFsc2UsXHJcbiAgYXJlYV9zZXR0aW5nczogJ3N5bmMnLFxyXG4gIGFyZWFfaGlzdG9yeTogJ3N5bmMnLFxyXG4gIGFyZWFfZW50cnk6ICdzeW5jJyxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47Ly9zaG93IG5vdGlmaWNhdGlvblxyXG5cclxuICAgIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXRBcmVhcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzdG9yYWdlLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3RvcmFnZS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZW5hbWVFbnRyeShlbnRyeSwgb2xkTmFtZSkge1xyXG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUgPT09IG9sZE5hbWUgJiYgIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIGlmICh0aGlzLmVudHJpZXNbb2xkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0U3luY0ZvckVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkICYmIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSkge1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0uc3luY2VkID0gZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUVudHJ5KGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICBpZiAoZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lID09PSBkZWxldGVkRW50cnkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICBhZGRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQpIHRoaXMubmFtZSA9IGVudHJpZXNbMF0ubmFtZTtcclxuICAgIGNvbnN0IGUgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZW50cmllc1swXS5pbW11dDtcclxuICB9LFxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRBcmVhcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9LFxyXG5cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfcHJvZ3Jlc3NiYXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5wcm9ncmVzc2JhcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcblxyXG5pbXBvcnQgX1BBR0UgZnJvbSAnLi9tb2R1bGVzL3BhZ2UnXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0IF9NQVJLRVIgZnJvbSAnLi9tb2R1bGVzL21hcmtlcidcclxuaW1wb3J0IF9QUk9HUkVTUyBmcm9tICcuL21vZHVsZXMvcHJvZ3Jlc3MnXHJcbmltcG9ydCBfUkVTVE9SRVIgZnJvbSAnLi9tb2R1bGVzL3Jlc3RvcmVyJ1xyXG5pbXBvcnQgX05PVEVTIGZyb20gJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0IF9UTVVJIGZyb20gJy4vbW9kdWxlcy90bXVpJ1xyXG5pbXBvcnQgX01BUktFUlBPUFVQIGZyb20gJy4vbW9kdWxlcy9tYXJrZXItcG9wdXAnXHJcbmltcG9ydCBfQVVUT01BUktFUiBmcm9tICcuL21vZHVsZXMvYXV0by1tYXJrZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ2F1dG9pbml0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2UuaGlzdG9yeSAmJiBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucG93ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcG93ZXIob24pIHtcclxuICAgIGlmICghb24gfHwgdGhpcy5ib290c3RyYXBwZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBfUEFHRSgpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1BST0dSRVNTKCk7XHJcbiAgICBfUkVTVE9SRVIoKTtcclxuICAgIF9NQVJLRVIoKTtcclxuICAgIF9OT1RFUygpO1xyXG4gICAgX1RNVUkoKTtcclxuICAgIF9NQVJLRVJQT1BVUCgpO1xyXG4gICAgX0FVVE9NQVJLRVIoKTtcclxuXHJcbiAgICB0aGlzLmJvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9fc3RvcmUnXHJcbmltcG9ydCAnLi9ib290c3RyYXAnXHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJzogJ3NldE1hcmtlcidcclxuICAgICAgfVxyXG5cdFx0fSxcclxuXHJcbiAgICBoYW5kbGVyOiBudWxsLFxyXG4gICAgbWFya2VyOiAnbScsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRNYXJrZXIoa2V5KSB7XHJcbiAgICAgIHRoaXMubWFya2VyID0ga2V5O1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZCAmJiAhdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkICYmIHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZXVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdG9wTGlzdGVuaW5nKCkge1xyXG4gICAgICBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTW91c2V1cCgpIHtcclxuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1lbmQnLCB0aGlzLm1hcmtlcik7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9CT09LTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXJrID0gbnVsbDtcclxuICAgIHRoaXMuYW5jaG9yID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldChtYXJrKSB7XHJcbiAgICBtYXJrID0gbWFyayB8fCB0aGlzLm1hcms7XHJcblxyXG4gICAgbGV0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG4gICAgICAgIGFuY2hvciA9IHdyYXBwZXJzWzBdO1xyXG5cclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IHRydWU7XHJcbiAgICBhbmNob3IuaWQgPSAndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuXHJcbiAgICB0aGlzLm1hcmsgPSBtYXJrO1xyXG4gICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGxldCBtYXJrID0gdGhpcy5tYXJrLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yLFxyXG4gICAgICAgIHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoO1xyXG5cclxuICAgIGFuY2hvci5pZCA9ICcnO1xyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG4gIH1cclxuICBzY3JvbGxJbnRvVmlldyhibSkge1xyXG4gICAgaWYgKGJtIHx8IChibSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSkpXHJcbiAgICAgIGJtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWN0aXZhdGUob24pIHtcclxuICAgICAgaWYgKG9uICYmICF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlZ2lzdGVySGFuZGxlcigpIHtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKSB7XHJcbiAgICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIF9TVE9SRS50bWlkID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB3aW5kb3cuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcmtlciwga2V5LCBwcmVTZXR0aW5ncywgaW1tdXQpIHtcclxuICAgIGxldCBzZWxlY3Rpb24sIGRlZmF1bHRzO1xyXG5cclxuXHRcdHRoaXMubWFya2VyID0gbWFya2VyO1xyXG5cdFx0c2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBtYXJrZXIuc2VsZWN0aW9uO1xyXG4gICAgdGhpcy5pbW11dCA9IF9TVE9SRS5yZWRlc2NyaWJpbmcgPyBtYXJrZXIuaXNJbW11dCA6IGltbXV0O1xyXG5cclxuICAgIGRlZmF1bHRzID0ge1xyXG4gICAgICBzdHlsZTogJycsXHJcbiAgICAgIGJvb2ttYXJrOiBmYWxzZSxcclxuICAgICAgY29uZHM6IG51bGwsXHJcbiAgICAgIHRleHQ6IHNlbGVjdGlvbi50ZXh0LFxyXG4gICAgICBub3RlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZCBpbiBkZWZhdWx0cykge1xyXG4gICAgICBpZiAoIXByZVNldHRpbmdzLmhhc093blByb3BlcnR5KGQpKSB7XHJcbiAgICAgICAgcHJlU2V0dGluZ3NbZF0gPSBkZWZhdWx0c1tkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlU2V0dGluZ3MuaWQgPSBwcmVTZXR0aW5ncy5pZCB8fCArK21hcmtlci5pZGNvdW50O1xyXG5cdFx0dGhpcy5pZCA9IHByZVNldHRpbmdzLmlkO1xyXG5cdFx0dGhpcy5zaW1wbGUgPSBzZWxlY3Rpb24uc2ltcGxlO1xyXG5cclxuXHRcdGxldCByYW5nZSA9IHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24ucmFuZ2U7XHJcblxyXG5cdFx0dGhpcy5zdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0O1xyXG5cdFx0dGhpcy5lbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXQ7XHJcblxyXG5cdFx0dGhpcy53cmFwcGVycyA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcclxuXHJcblx0XHR0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IG51bGw7XHJcblx0XHR0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmtleURhdGEgPSB7XHJcblx0XHRcdGlkOiBwcmVTZXR0aW5ncy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdHN0eWxlOiBwcmVTZXR0aW5ncy5zdHlsZSxcclxuXHRcdFx0Y29uZHM6IHByZVNldHRpbmdzLmNvbmRzLFxyXG5cdFx0XHR0ZXh0OiBwcmVTZXR0aW5ncy50ZXh0LFxyXG5cdFx0XHRib29rbWFyazogcHJlU2V0dGluZ3MuYm9va21hcmssXHJcbiAgICAgIG5vdGU6IHByZVNldHRpbmdzLm5vdGUsXHJcbiAgICAgIHN5bmNlZDogcHJlU2V0dGluZ3Muc3luY2VkXHJcblx0XHR9O1xyXG5cclxuICAgIGlmICh0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB7XHJcbiAgICAgIHRoaXMuZGVzY3JpYmVfaW1tdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cdGNyZWF0ZShyYW5nZSkge1xyXG4gICAgcmFuZ2UgPSByYW5nZSB8fCB0aGlzLnJhbmdlO1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIHN0eWxlID0gdGhpcy5rZXlEYXRhLnN0eWxlLFxyXG4gICAgICAgIG5vZGVzID0gc2VsZWN0aW9uLm5vZGVzLFxyXG4gICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzID0gdGhpcy53cmFwcGVycyB8fCB0aGlzLmNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBuKSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBsYXN0SW5kZXggPSBuIC0gMSxcclxuICAgICAgICBub2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgICBpZiAoIWkpIHJhbmdlLnNldFN0YXJ0KG5vZGUsIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG5cclxuICAgICAgaWYgKGkgPT09IGxhc3RJbmRleClcclxuICAgICAgICByYW5nZS5zZXRFbmQobm9kZSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgICAgcmFuZ2Uuc3Vycm91bmRDb250ZW50cyh3cmFwcGVyc1tpXSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKHdyYXBwZXJzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgICAgbm9kZS5wYXJlbnROb2RlLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24obGFzdEluZGV4KTtcclxuXHJcbiAgICBpZiAodGhpcy5rZXlEYXRhLmJvb2ttYXJrKSB0aGlzLm1hcmtlci5zZXRCb29rbWFyayh0aGlzLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB0aGlzLmRlc2NyaWJlKCk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlckNsaWNrTGlzdGVuZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG4gIHJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hcmtlci5wcm94eSh0aGlzLCB0aGlzLm9uQ2xpY2spLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uQ2xpY2soZSkge1xyXG4gICAgbGV0IGV2ZW50O1xyXG4gICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgIGV2ZW50ID0gJ2NsaWNrZWQ6bWFyayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUgKyAnXzAnO1xyXG4gICAgICBldmVudCA9ICdhY3RpdmF0ZWQ6bWFyayc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hcmtlci5lbWl0KGV2ZW50LCB7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBib29rbWFyazogISF0aGlzLmtleURhdGEuYm9va21hcmssXHJcbiAgICAgIG5vdGU6ICEhdGhpcy5rZXlEYXRhLm5vdGVcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWZpbmVQb3NpdGlvbihuLCBpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICBsZXQgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgbiA9IHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gOiB3cmFwcGVycy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgZmlyc3RXcmFwcGVyID0gd3JhcHBlcnNbMF07XHJcbiAgICBjb25zdCBsYXN0V3JhcHBlciA9IHdyYXBwZXJzW25dO1xyXG4gICAgY29uc3QgZmlyc3RQYXJlbnQgPSBmaXJzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGxhc3RQYXJlbnQgPSBsYXN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgbGV0IGFuY2hvclByZXYsIGZvY3VzUHJldjtcclxuXHJcbiAgICB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChmaXJzdFBhcmVudCwgZmlyc3RXcmFwcGVyLCB0cnVlKSAtIDE7XHJcbiAgICB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGxhc3RQYXJlbnQsIGxhc3RXcmFwcGVyLCB0cnVlKTtcclxuXHJcbiAgICBhbmNob3JQcmV2ID0gZmlyc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuICAgIGZvY3VzUHJldiA9IGxhc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICBpZiAoYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2Lm5vZGVUeXBlID09PSAxKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiArPSAxO1xyXG4gICAgaWYgKCFmb2N1c1ByZXYgfHwgZm9jdXNQcmV2Lm5vZGVUeXBlID09PSAzIHx8IGZpcnN0UGFyZW50ID09PSBsYXN0UGFyZW50KSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIC09IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSAwO1xyXG4gICAgaWYgKHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gMDtcclxuXHJcbiAgICBpZiAoaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2LmRhdGEgPyBhbmNob3JQcmV2LmRhdGEubGVuZ3RoIDogMDtcclxuICAgICAgdGhpcy5lbmRPZmZzZXQgPSB0aGlzLnNpbXBsZSA/IHRoaXMuc3RhcnRPZmZzZXQgKyB0aGlzLmtleURhdGEudGV4dC5sZW5ndGggOiB0aGlzLmVuZE9mZnNldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKHVuZGVmaW5lZCwgdHJ1ZSlcclxuICAgICAgICAuZGVzY3JpYmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblx0dW5kbygpIHtcclxuXHRcdGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG5cdFx0XHRcdHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyxcclxuXHRcdFx0XHR3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG5cdFx0XHRcdGNvbnRhaW5lciwgd3JhcHBlcjtcclxuXHJcblx0XHR3aGlsZSAody0tKSB7XHJcblx0XHRcdGNvbnRhaW5lciA9IGNvbnRhaW5lcnNbd107XHJcblx0XHRcdHdyYXBwZXIgPSB3cmFwcGVyc1t3XTtcclxuXHRcdFx0Y29udGFpbmVyLnJlcGxhY2VDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xyXG5cdFx0XHRjb250YWluZXIubm9ybWFsaXplKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cmVkbygpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGNvbnRhaW5lcnNbMF0uY2hpbGROb2Rlc1t0aGlzLmFuY2hvck5vZGVQb3NpdGlvbl0sIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGNvbnRhaW5lcnNbY29udGFpbmVycy5sZW5ndGggLSAxXS5jaGlsZE5vZGVzW3RoaXMuZm9jdXNOb2RlUG9zaXRpb25dLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbi5jb2xsZWN0Tm9kZXMoKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoKTtcclxuXHR9XHJcblx0d2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBpbmNsdWRpbmdUZXh0Tm9kZXMpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdFx0bGV0IGNoaWxkcmVuID0gaW5jbHVkaW5nVGV4dE5vZGVzIHx8IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHRcdFx0YyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdFx0XHRpID0gMDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG5cdGNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBudW1iZXIpIHtcclxuXHRcdGxldCB3cmFwcGVycyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHdyYXBwZXI7XHJcblxyXG5cdFx0Zm9yICggOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuXHRcdFx0d3JhcHBlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1oaWdobGlnaHQnKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUucmVwbGFjZSgvOy9nLCAnIWltcG9ydGFudDsnKSk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJywgdGhpcy5pZCArICdfJyArIGkpO1xyXG4gICAgICAvL3dyYXBwZXIuc2V0QXR0cmlidXRlKCdjb250ZXh0bWVudScsICd0ZXh0bWFya2VyLWN0bScpO1xyXG5cdFx0XHR3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdyYXBwZXJzO1xyXG5cdH1cclxuICBkZXNjcmliZSgpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG5cdFx0Y29uc3Qgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IHNpbmdsZU5vZGUgPSB0aGlzLnNpbXBsZTtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMud3JhcHBlcnNbMF0ucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHBhcmVudElzVE0gPSBwYXJlbnQuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcblx0XHRjb25zdCBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGdyYW5kZ3JhbXBhID0gZ3JhbXBhLnBhcmVudE5vZGUgfHwgMDtcclxuXHRcdGNvbnN0IGZUTlAgPSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbjtcclxuXHJcblx0XHR0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcblx0XHRcdG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcblx0XHRcdG4xOiBwYXJlbnRJc1RNID8gJ1RNJyA6IHBhcmVudC5ub2RlTmFtZSxcclxuXHRcdFx0cDE6IGZUTlAsXHJcblx0XHRcdG4yOiBncmFtcGEubm9kZU5hbWUsXHJcblx0XHRcdHAyOiB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpLFxyXG5cdFx0XHRwMzogZ3JhbmRncmFtcGEgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEsIGdyYW1wYSkgOiB1bmRlZmluZWQsXHJcblx0XHRcdHA0OiBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUsIGdyYW5kZ3JhbXBhKSA6IHVuZGVmaW5lZFxyXG5cdFx0fTtcclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcblx0fVxyXG4gIGRlc2NyaWJlX2ltbXV0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBlbmRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgbGV0IHN0YXJ0ID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZW5kID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQgIT09IGJvZHkpIHtcclxuICAgICAgc3RhcnRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChzdGFydC5wYXJlbnROb2RlLCBzdGFydCkpO1xyXG4gICAgICBzdGFydCA9IHN0YXJ0LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoZW5kICE9PSBib2R5KSB7XHJcbiAgICAgIGVuZFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKGVuZC5wYXJlbnROb2RlLCBlbmQpKTtcclxuICAgICAgZW5kID0gZW5kLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgbzogdGhpcy5zdGFydE9mZnNldCxcclxuICAgICAgICBwOiBzdGFydFBvc2l0aW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIGU6IHtcclxuICAgICAgICBvOiB0aGlzLmVuZE9mZnNldCxcclxuICAgICAgICBwOiBlbmRQb3NpdGlvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuXHRcdH0sXHJcblxyXG4gICAgaGFuZGxlcjogbnVsbCxcclxuICAgIGFwcGVuZGVkOiBmYWxzZSxcclxuICAgIGhlaWdodDogMCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKS50aGVuKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAncG9wdXAnO1xyXG4gICAgICAgIHRoaXMubWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXAnKTtcclxuICAgICAgY29uc3QgYmdDb2xvclJlZ0V4cCA9IC9iYWNrZ3JvdW5kLWNvbG9yOigjW2EtZjAtOV17Nn0pLztcclxuICAgICAgbGV0IGJnQ29sb3IsIGNvbG9yQnRuO1xyXG4gICAgICBmb3IgKGxldCBtIGluIHRoaXMubWFya2Vycykge1xyXG4gICAgICAgIGJnQ29sb3IgPSB0aGlzLm1hcmtlcnNbbV0uc3R5bGUubWF0Y2goYmdDb2xvclJlZ0V4cCk7XHJcbiAgICAgICAgaWYgKGJnQ29sb3IpIHtcclxuICAgICAgICAgIGNvbG9yQnRuID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXBjb2xvcicpO1xyXG4gICAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JCdG4pO1xyXG4gICAgICAgICAgY29sb3JCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3IucG9wKCk7XHJcbiAgICAgICAgICBjb2xvckJ0bi5pZCA9ICd0bXBvcHVwY29sb3ItLScgKyBtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBwb3B1cC5zdHlsZTtcclxuICAgICAgbGV0IHBvcHVwSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBzdHlsZS50b3AgPSBzZWxlY3Rpb25Qb3NpdGlvbi50b3AgLSBzZWxlY3Rpb25Qb3NpdGlvbi5oZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSArICdweCc7XHJcbiAgICAgICAgc3R5bGUubGVmdCA9IHNlbGVjdGlvblBvc2l0aW9uLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCArICdweCc7XHJcblxyXG4gICAgICAgIHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApIC0gcG9wdXBIZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodCkgIT09IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSArIHBvcHVwSGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gcG9wdXBIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZCkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Nb3VzZWRvd24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ1RNUE9QVVBDT0xPUicpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJywgZWwuaWQuc3BsaXQoJy0tJykucG9wKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUksgZnJvbSAnLi9tYXJrLWl0ZW0nXHJcbmltcG9ydCBfQk9PS01BUksgZnJvbSAnLi9ib29rbWFyaydcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAvLyBtYXJrZXIgbW9kdWxlXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG5cdFx0XHRFTlY6IHtcclxuXHRcdFx0XHQnc2V0OmVudHJpZXMnOiAndXBkYXRlSUQnLFxyXG5cdFx0XHRcdCdwcmVzc2VkOm1hcmtlci1rZXknOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdwcmVzc2VkOmhvdGtleSc6ICdvbkhvdGtleScsXHJcbiAgICAgICAgJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnc2VsZWN0aW9uLWVuZCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3Jlc3RvcmVkOnJhbmdlJzogJ3JlY3JlYXRlJyxcclxuICAgICAgICAnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucyc6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdjYW5jZWxlZDpyZXN0b3JhdGlvbic6ICdvbkNhbmNlbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICAgJ2N0eDotYic6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICAgJ2N0eDpkJzogJ3JlbW92ZScsXHJcbiAgICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnY3R4Om4nOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ2N0eDpjJzogJ2NvcHknLFxyXG4gICAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdjaGFuZ2VkOm5vdGUtY29sb3InOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgICAnY2hhbmdlZDpub3RlLXNpemUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdzaWRlYmFyOmhpZ2hsaWdodCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAgICdzaWRlYmFyOmJvb2ttYXJrJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6aW1tdXQnOiAnaW1tdXQnLFxyXG4gICAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcyc6ICdzYXZlJyxcclxuICAgICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAgICdzaWRlYmFyOnVuZG8nOiAndW5kbycsXHJcbiAgICAgICAgJ3NpZGViYXI6cmVkbyc6ICdyZWRvJyxcclxuICAgICAgICAnc2lkZWJhcjpjb3B5JzogJ2NvcHknLFxyXG4gICAgICAgICdzaWRlYmFyOm5leHQtbWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICAgJ2hhc2hjaGFuZ2UnOiAnb25IYXNoQ2hhbmdlJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0aW9uOiBudWxsLFxyXG5cdFx0ZG9uZTogW10sXHJcblx0XHR1bmRvbmU6IFtdLFxyXG5cdFx0dmlzdWFsbHlPcmRlcmVkTWFya3M6IFtdLFxyXG5cdFx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgICBib29rbWFyazogbnVsbCxcclxuICAgIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRcdGlkY291bnQ6IDAsXHJcblx0XHRtYXJrU2Nyb2xsUG9zOiAtMSxcclxuXHJcbiAgICB1cGRhdGVJRChlbnRyaWVzKSB7XHJcbiAgICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgICAgY29uc3QgaWRzID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG5cclxuICAgICAgICBpZiAoIWxvY2tlZCAmJiBlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG1hcmtzID0gKGVudHJ5Lm1hcmtzIHx8IFtdKS5jb25jYXQoZW50cnkubG9zdCB8fCBbXSksXHJcbiAgICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoZCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoZC0tKSB7XHJcbiAgICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaWRjb3VudCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGlkcyk7XHJcbiAgICB9LFxyXG5cdFx0bWFyayhrZXksIGRhdGEsIGltbXV0KSB7XHJcblx0XHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgaWYgKGRhdGEuYXV0b25vdGUpIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCBtYXJrLCBkYXRhLmF1dG9ub3RlKTtcclxuXHJcblx0XHRcdHJldHVybiBtYXJrO1xyXG5cdFx0fSxcclxuXHRcdHVuZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0XHRpZiAoZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgdGhpcy51bmRvbmUucHVzaChtYXJrLnVuZG8oKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvb2ttYXJrKSB0aGlzLnVuZG9Cb29rbWFyaygpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHR9LFxyXG5cdFx0cmVkbyhub0F1dG9zYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0XHRpZiAodW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCBbbWFya10pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdH0sXHJcbiAgICBjdXRPdXQoaSkge1xyXG4gICAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICAgIGluZGljZXMgPSBbaV0sXHJcbiAgICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICAgIGZvciAodmFyIHggPSBqICsgMTsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRvQmVSZW1vdmVkLmluY2x1ZGVzKHgpKSB0b0JlUmVtb3ZlZC5wdXNoKHgpO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgICAgfVxyXG4gICAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lLnNwbGljZSh0b0JlUmVtb3ZlZC5wb3AoKSwgMSlbMF0udW5kbygpO1xyXG4gICAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc21hbGxlc3RJRDtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGlkID0gaWQgPyBpZCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcbiAgICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICAgIGxldCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkLnNwbGl0KCdfJylbMF0pLFxyXG4gICAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICAgIHBvc2l0aW9uID0gZG9uZS5pbmRleE9mKG1hcmspLFxyXG4gICAgICAgICAgc21hbGxlc3RJRCwgaTtcclxuXHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgICB0aGlzLnVuZG8oKTtcclxuICAgICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKHRoaXMudW5kb25lLmxlbmd0aCkgdGhpcy5yZWRvKHRydWUpO1xyXG5cclxuICAgICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkWzBdKTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICAgIF9TVE9SRS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgLy8gd2hpbGUgKHRoaXMuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgLy8gICB0aGlzLnVuZG8odHJ1ZSk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKVxyXG4gICAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBoaWdobGlnaHQucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGlnaGxpZ2h0LnRleHRDb250ZW50KSwgaGlnaGxpZ2h0KTtcclxuICAgICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZG9uZSA9IFtdO1xyXG4gICAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gW107XHJcbiAgICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IFtdO1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSAtMTtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdyZXN1bWVkOm1hcmtlcnMnLCBlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICAgIHRoaXMuaXNJbW11dCA9IGltbXV0YWJsZTtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IHRydWU7XHJcbiAgICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIH0sXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICBpZiAoX1NUT1JFLmRpc2FibGVkKSByZXR1cm4gdGhpcy5lbWl0KCdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyk7XHJcblxyXG4gICAgICBjb25zdCBpZnJhbWUgPSBfU1RPUkUuaWZyYW1lO1xyXG4gICAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICAgIGlmIChfU1RPUkUuaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgICAgICBpZiAoIWxvY2tlZCAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9TVE9SRS5uYW1lKSB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlybWVkID0gdHJ1ZTtcclxuXHQgICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG5cdCAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuXHQgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHRcdH0sXHJcbiAgICBhdXRvc2F2ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCd1bnNhdmVkLWNoYW5nZXMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29weSgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZmluZE1hcmsoKTtcclxuICAgICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNvbnN0IHJhbmdlID0gbWFyay5yYW5nZTtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gbWFyay5zZWxlY3Rpb24uc2VsZjtcclxuICAgICAgY29uc3Qgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzO1xyXG5cclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQod3JhcHBlcnNbMF0sIDApO1xyXG4gICAgICByYW5nZS5zZXRFbmQod3JhcHBlcnNbd3JhcHBlcnMubGVuZ3RoIC0gMV0sIDEpO1xyXG4gICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzZWxlY3Rpb24udG9TdHJpbmcoKS50cmltKCkucmVwbGFjZSgvKFxcclxcbil7MSx9L2csICdcXHJcXG4nKSk7XHJcbiAgICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuICAgIH0sXHJcbiAgICBzdG9yZShtYXJrLCBzYXZlLCBvcmRlcikge1xyXG5cdFx0XHR0aGlzLmRvbmUucHVzaChtYXJrKTtcclxuICAgICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHRcdGlmIChvcmRlcikgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHRcdH0sXHJcbiAgICByZWNyZWF0ZShtYXJrKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04obnVsbCwgeyBwcm9ncmFtbWF0aWNhbGx5OiB0cnVlIH0pO1xyXG4gICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgdGhpcy5kb25lKTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKF9TVE9SRS5uYW1lID09PSBtYXJrLmtleURhdGEudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSkge1xyXG4gICAgICAgICAgdGhpcy5nb3RvTWFyayhtYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zb3J0QnlJZCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyaygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblxyXG4gICAgICBpZiAoX1NUT1JFLnJlZGVzY3JpYmluZykge1xyXG4gICAgICAgIF9TVE9SRS5yZWRlc2NyaWJpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2FuY2VsZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgX1NUT1JFLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGROb3RlKGlkKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCB0aGlzLmZpbmRNYXJrKGlkKSk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZU5vdGUoaWQpIHtcclxuICAgICAgaWYgKCFfU1RPUkUubG9ja2VkKSByZXR1cm4gdGhpcy5hdXRvc2F2ZSgpO1xyXG5cclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZ2V0QnlJZChpZCkua2V5RGF0YTtcclxuICAgICAgY29uc3Qgc3luY2VkID0gdHlwZW9mIG1hcmsuc3luY2VkID09PSAnYm9vbGVhbicgPyBtYXJrLnN5bmNlZCA6IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICAgIG1hcmtzOiBbbWFya10sXHJcbiAgICAgICAgbmFtZTogbWFyay50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpLFxyXG4gICAgICAgIHN5bmNlZFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCBlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgZ290b01hcmsobWFyaykge1xyXG4gICAgICBjb25zdCBtYXJrRWxlbWVudHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzO1xyXG4gICAgICBsZXQgZWwsIHBvcywgaWQ7XHJcbiAgICAgIGlmIChtYXJrIHx8IG1hcmsgPT09IDApIHtcclxuICAgICAgICBpZiAodHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSBtYXJrICsgMTtcclxuICAgICAgICAgIGVsID0gbWFya0VsZW1lbnRzW21hcmtdO1xyXG4gICAgICAgICAgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKS5zcGxpdCgnXycpWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcbiAgICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkPVwiJyArIGlkICsgJ18wXCJdJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvcyA9IHRoaXMubWFya1Njcm9sbFBvcztcclxuICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1twb3NdO1xyXG4gICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuXHJcblx0XHRcdGlmICghbWFyayB8fCB0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHRoaXMuZ2V0QnlJZChpZCkub25DbGljayhpZCk7XHJcbiAgICAgIHRoaXMuaW5kaWNhdGVNYXJrKGlkKTtcclxuICAgIH0sXHJcblx0XHRnb3RvTmV4dE1hcmsoZGlyKSB7XHJcblx0XHRcdGNvbnN0IGwgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLmxlbmd0aDtcclxuXHJcblx0XHRcdHRoaXMubWFya1Njcm9sbFBvcyArPSBkaXI7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5tYXJrU2Nyb2xsUG9zIDwgMCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbCAtIDE7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMubWFya1Njcm9sbFBvcyA+PSBsKSB0aGlzLm1hcmtTY3JvbGxQb3MgPSAwO1xyXG5cclxuXHRcdFx0dGhpcy5nb3RvTWFyaygpO1xyXG5cdFx0fSxcclxuICAgIGluZGljYXRlTWFyayhpZCkge1xyXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpXHJcbiAgICAgICAgLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICAgIGNvbnN0IHRtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWRePVwiJyArIGlkICsgJ19cIl0nKSk7XHJcblxyXG4gICAgICB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKSwgMjAwMCk7XHJcbiAgICB9LFxyXG4gICAgc2V0Qm9va21hcmsobSwgc2F2ZSkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyayxcclxuICAgICAgICAgIG1hcmsgPSB0aGlzLmZpbmRNYXJrKG0pO1xyXG5cclxuICAgICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoYm9va21hcmspIHtcclxuICAgICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib29rbWFyayA9IG5ldyBfQk9PS01BUksoKS5zZXQobWFyayk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2FkZGVkOmJvb2ttYXJrJyk7XHJcbiAgICAgIGlmIChzYXZlICE9PSBmYWxzZSkgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgfSxcclxuICAgIHVuZG9Cb29rbWFyaygpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUJvb2ttYXJrKCkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICAgIGlmICghYm9va21hcmspIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBib29rbWFyaztcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgIH0sXHJcbiAgICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgICAgaWYgKGJvb2ttYXJrKSBib29rbWFyay5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgfSxcclxuICAgIGdldEJ5SWQoaWQsIHBvcykge1xyXG5cdFx0XHRsZXQgZG9uZSA9IHRoaXMuZG9uZSxcclxuXHRcdFx0XHQgIGQgPSBkb25lLmxlbmd0aCxcclxuXHRcdFx0XHQgIG1hcms7XHJcblxyXG5cdFx0XHR3aGlsZSAoZC0tKSB7XHJcblx0XHRcdFx0bWFyayA9IGRvbmVbZF07XHJcblxyXG5cdFx0XHRcdGlmIChtYXJrLmtleURhdGEuaWQgPT0gaWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBtYXJrLCBwb3NpdGlvbjogZCB9IDogbWFyaztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBudWxsLCBwb3NpdGlvbjogbnVsbCB9IDogZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0ZmluZE1hcmsoeCkge1xyXG5cdFx0XHR4ID0geCA/IHggOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG5cdFx0XHRsZXQgbWFyayA9ICF4ID9cclxuXHRcdFx0XHR0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdIDpcclxuXHRcdFx0XHRcdHR5cGVvZiB4ID09PSAnc3RyaW5nJyA/XHJcblx0XHRcdFx0dGhpcy5nZXRCeUlkKHguc3BsaXQoJ18nKVswXSkgOlxyXG5cdFx0XHRcdHg7XHJcblx0XHRcdHJldHVybiBtYXJrO1xyXG5cdFx0fSxcclxuICAgIHNvcnRCeUlkKCkge1xyXG4gICAgICB0aGlzLmRvbmUuc29ydCgobWFyazEsIG1hcmsyKSA9PiBtYXJrMS5pZCAtIG1hcmsyLmlkKTtcclxuICAgIH0sXHJcblx0XHRvcmRlck1hcmtzVmlzdWFsbHkoKSB7XHJcblx0XHRcdHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkJD1cIl8wXCJdJykpLnNvcnQoKG0xLCBtMikgPT4ge1xyXG5cdFx0XHRcdGxldCBiYjEgPSBtMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdFx0YmIyID0gbTIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRcdHRvcDEgPSBiYjEudG9wLFxyXG5cdFx0XHRcdFx0XHR0b3AyID0gYmIyLnRvcDtcclxuXHJcblx0XHRcdFx0aWYgKHRvcDEgPCB0b3AyKSByZXR1cm4gLTE7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9wMiA8IHRvcDEpIHJldHVybiAxO1xyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGJiMS5sZWZ0IDwgYmIyLmxlZnQpIHJldHVybiAtMTtcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcbiAgICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubWFwKG1hcmsgPT4gcGFyc2VJbnQobWFyay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnLCB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMpO1xyXG5cdFx0fSxcclxuICAgIG1hcmtzSW50ZXJzZWN0KG1hcmsxLCBtYXJrMikge1xyXG5cdFx0XHRsZXQgd3JhcHBlcnMxID0gbWFyazEud3JhcHBlcnMsXHJcbiAgICAgICAgICB3MSA9IHdyYXBwZXJzMS5sZW5ndGgsXHJcbiAgICAgICAgICBpZDEgPSBtYXJrMS5pZCxcclxuICAgICAgICAgIHdyYXBwZXJzMiA9IG1hcmsyLndyYXBwZXJzLFxyXG4gICAgICAgICAgaWQyID0gbWFyazIuaWQsXHJcbiAgICAgICAgICB3MiwgdG1zLCBsO1xyXG5cclxuICAgICAgd2hpbGUgKHcxLS0pIHtcclxuICAgICAgICB3MiA9IHdyYXBwZXJzMi5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHcyLS0pIHtcclxuICAgICAgICAgIHRtcyA9IHdyYXBwZXJzMVt3MV0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRdJyk7XHJcbiAgICAgICAgICBsID0gdG1zLmxlbmd0aDtcclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWYgKHRtc1tsXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKVswXSA9PSBpZDIpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdH0sXHJcbiAgICBvbk1hcmtlcktleShlLCBrZXkpIHtcclxuXHRcdFx0bGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuXHJcblx0XHRcdGlmICghc2VsZWN0aW9uLm5vZGVzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoZSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGtleSA9IGU7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLnByZXZlbnREZWZhdWx0KGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGtleSA9IGtleSB8fCAnbSc7XHJcblx0XHRcdH1cclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKF9TVE9SRS5pc05ldykge1xyXG4gICAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogISFzZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBfU1RPUkUuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKGtleSwgc2V0dGluZ3MubWFya2Vyc1trZXldLCB0aGlzLmlzSW1tdXQpLCB0cnVlLCB0cnVlKTtcclxuICAgICAgfSk7XHJcblx0XHR9LFxyXG4gICAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgc3dpdGNoKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3onOiBzZWxmLnVuZG8oKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneSc6IHNlbGYucmVkbygpOyBicmVhaztcclxuICAgICAgICBjYXNlICdzJzogc2VsZi5zYXZlKCk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2InOiBzZWxmLnNldEJvb2ttYXJrKCk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2Fycm93dXAnOiBzZWxmLmdvdG9OZXh0TWFyaygtMSk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2Fycm93ZG93bic6IHNlbGYuZ290b05leHRNYXJrKDEpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlICdkJzogc2VsZi5yZW1vdmUoKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYyc6IHNlbGYuY29weSgpOyBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdFx0aWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdHJldHJpZXZlRW50cnkoKSB7XHJcbiAgICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgICBjb25zdCBuYW1lID0gX1NUT1JFLm5hbWU7XHJcblxyXG4gICAgICBjb25zdCBlbnRyeSA9ICFsb2NrZWQgJiYgX1NUT1JFLmVudHJpZXNbbmFtZV0gPyBfU1RPUkUuZW50cmllc1tuYW1lXSA6IHt9O1xyXG5cclxuICAgICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0XHRlbnRyeS5sYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGVudHJ5LmJvb2ttYXJrZWQgPSAhIXRoaXMuYm9va21hcms7XHJcbiAgICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0XHRlbnRyeS5jb3VudCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuXHRcdFx0ZW50cnkuaWRjb3VudCA9IHRoaXMuaWRjb3VudDtcclxuICAgICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICAgIGlmIChpc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICBlbnRyeS5maXJzdCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICAgIGVudHJ5LnN5bmNlZCA9IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuICAgICAgICBlbnRyeS5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbnRyeS5uYW1lID0gbG9ja2VkID9cclxuICAgICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgICBpc05ldyA/IG5hbWUgOiBlbnRyeS5uYW1lO1xyXG5cclxuXHRcdFx0cmV0dXJuIGVudHJ5O1xyXG5cdFx0fSxcclxuICAgIGNvbGxlY3RNYXJrcygpIHtcclxuICAgICAgbGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcbiAgICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IG1hcmtzID0gW107XHJcblxyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IGRvbmUubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdFx0a0QgPSBkb25lW21dLmtleURhdGE7XHJcbiAgICAgICAgZGVsZXRlIGtELnN5bmNlZDtcclxuXHRcdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdFx0fVxyXG4gICAgICByZXR1cm4gbWFya3M7XHJcbiAgICB9LFxyXG4gICAgb25IYXNoQ2hhbmdlKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZShudWxsLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlJyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlaGVhZGVyJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVhY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IGRlbCA9IHRoaXMuZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlZGVsZXRlJyk7XHJcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlbWluaW1pemUnKTtcclxuICAgICAgY29uc3QgZ2VhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWN1c3RvbWl6ZScpO1xyXG4gICAgICBjb25zdCBwYWxldHRlID0gdGhpcy5wYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlcGFsZXR0ZScpO1xyXG4gICAgICBjb25zdCBwID0gdGhpcy50ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvcjtcclxuICAgICAgX1NUT1JFLm5vdGVDb2xvciA9IGNvbG9yO1xyXG4gICAgICBjb25zdCBkZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSkpO1xyXG4gICAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDIwMTMpKTtcclxuICAgICAgY29uc3QgZ2VhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjY5OSkpO1xyXG5cclxuICAgICAgWydncmVlbicsICd3aGl0ZScsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCcsICdwdXJwbGUnLCAnYmx1ZScsICd0dXJxdW9pc2UnXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWNvbG9yJyk7XHJcbiAgICAgICAgY29sb3IuY2xhc3NOYW1lID0gJ3Rtbm90ZWNvbG9yLS0nICsgYztcclxuICAgICAgICBjb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCBjKTtcclxuICAgICAgICBwYWxldHRlLmFwcGVuZENoaWxkKGNvbG9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1ub3RlJywgdHJ1ZSk7XHJcbiAgICAgIGRlbC5hcHBlbmRDaGlsZChkZWxUZXh0KTtcclxuICAgICAgbWluLmFwcGVuZENoaWxkKG1pblRleHQpO1xyXG4gICAgICBnZWFyLmFwcGVuZENoaWxkKGdlYXJUZXh0KTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAncmVtb3ZlTm90ZVN0b3JhZ2UnLFxyXG4gICAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3RvZ2dsZTpub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlVHJhbnNwJyxcclxuICAgICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGVzOiB7fSxcclxuICAgIHRvZ2dsZTogbnVsbCxcclxuICAgIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gICAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNwKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgICB9LFxyXG4gICAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUFsbCgpIHtcclxuICAgICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGU7XHJcbiAgICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVHJhbnNwKCkge1xyXG4gICAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgJiYgc2V0dGluZ3MubWlzYykge1xyXG4gICAgICAgICAgaWYgKHNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcCkgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICAgIGlmIChzZXR0aW5ncy5taXNjLm5vdGVwbGFpbnZpZXcpIGJvZHlDbGFzc2VzLmFkZCgndG1ub3Rlcy0tcGxhaW4tdmlldycpO1xyXG4gICAgICAgICAgZWxzZSBib2R5Q2xhc3Nlcy5yZW1vdmUoJ3Rtbm90ZXMtLXBsYWluLXZpZXcnKTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpc0VtcHR5KG9iaikge1xyXG4gICAgICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0RHJhZ2dpbmdOb3RlKG5vdGUpIHtcclxuICAgICAgY29uc3QgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyID0gKGUpID0+IHRoaXMuZW1pdERyYWdFdmVudChub3RlLCBlKTtcclxuICAgICAgY29uc3QgZHJhZ1N0b3BIYW5kbGVyID0gdGhpcy5kcmFnU3RvcEhhbmRsZXIgPSAoZSkgPT4gdGhpcy5zdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpO1xyXG4gICAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKSB7XHJcbiAgICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdkcmFnc3RvcDpub3RlJywgbm90ZSwgZSk7XHJcbiAgICB9LFxyXG4gICAgZW1pdERyYWdFdmVudChub3RlLCBlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5lbWl0KCdkcmFnOm5vdGUnLCBub3RlLCBlKTtcclxuICAgIH0sXHJcbiAgICBzZW5kTm90ZXNTdGF0ZShpbmZvKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnbm90ZXMtc3RhdGUnLCAhdGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpLCBpbmZvKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IHdpbmRvdy5kb2N1bWVudCxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzdGFydGVkOmFwcCc6ICdjaGVja1VSTCcsXHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInLFxyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICd1cGRhdGUnLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kUGFnZVN0YXRlJyxcclxuICAgICAgICAnZmFpbGVkOnJlc3RvcmF0aW9uJzogJ2FjdGl2YXRlUmV0cnknLFxyXG4gICAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAndXBkYXRlOmVudHJ5Pyc6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG4gICAgICAgICdjaGFuZ2VkOnVybCc6ICdvblVybENoYW5nZScsXHJcbiAgICAgICAgJ3Jlc3VtZWQtb24taGFzaGNoYW5nZSc6ICdzZXR1cCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAga2V5ZG93bjoge1xyXG4gICAgICAgICAgJyonOiAnZGVsZWdhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3Rpb25jaGFuZ2U6IHtcclxuICAgICAgICAgICcqJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgc2V0OiBmYWxzZSxcclxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICAgIHJldHJ5QWN0aXZlOiBmYWxzZSxcclxuICAgIHNoaWZ0U2Vuc2l0aXZlS2V5czogWzEzLCA0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgMTcxLCAxNzNdLFxyXG4gICAgcmVnaXN0ZXJlZExvYWRIYW5kbGVyOiBmYWxzZSxcclxuICAgIGtleUNvZGVNYXA6IHtcclxuICAgICAgJzEzJzogJ0VudGVyJyxcclxuICAgICAgJzQ4JzogJzAnLCAnNDknOiAnMScsICc1MCc6ICcyJywgJzUxJzogJzMnLCAnNTInOiAnNCcsXHJcbiAgICAgICc1Myc6ICc1JywgJzU0JzogJzYnLCAnNTUnOiAnNycsICc1Nic6ICc4JywgJzU3JzogJzknLFxyXG4gICAgICAnMTcxJzogJysnLCAnMTczJzogJy0nXHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBvd2VyKG9uKSB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgIHRoaXMuYWN0aXZlID0gb247XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnbW9kZScpLnRoZW4oYWN0aXZlID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2V0IHx8ICFhY3RpdmUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQud2luZG93LmRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScgJiYgIXRoaXMucmVnaXN0ZXJlZExvYWRIYW5kbGVyKSB7XHJcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRMb2FkSGFuZGxlciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB0aGlzLnNldHVwKCksIHdpbmRvdy5wYXJlbnQud2luZG93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9TVE9SRS5pZnJhbWUgPSB0aGlzLmlzSUZyYW1lKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmRvY3VtZW50LlVSTDtcclxuICAgICAgICB0aGlzLmhhc2hsZXNzVVJMID0gX0hBU0hMRVNTKHRoaXMudXJsKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja1VSTCgpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmUpIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0ID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNJRnJhbWUoKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cgIT09IHdpbmRvdy5wYXJlbnQud2luZG93O1xyXG4gICAgfSxcclxuICAgIGlzRWRpdGFibGUoZWwpIHtcclxuICAgICAgY29uc3QgbmFtZSA9IGVsLnRhZ05hbWU7XHJcblxyXG4gICAgICByZXR1cm4gKG5hbWUgPT09ICdURVhUQVJFQScgfHwgbmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJyk7XHJcbiAgICB9LFxyXG4gICAgZGVsZWdhdGUoZSkge1xyXG4gICAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZSxcclxuICAgICAgICAgIG1vZEtleSA9IChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkpLFxyXG4gICAgICAgICAgYXJyb3dLZXlzID0gWydhcnJvd2Rvd24nLCAnYXJyb3d1cCddLFxyXG4gICAgICAgICAgbG9ja2VkQWN0aW9ucyA9IFsnYicsICdzJywgJ3knLCAneicsICdkJ10sXHJcbiAgICAgICAgICBmdW5jdGlvbktleXMgPSBsb2NrZWRBY3Rpb25zLmNvbmNhdChhcnJvd0tleXMpLmNvbmNhdCgnYycpLFxyXG4gICAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJ107XHJcblxyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCAmJiBsb2NrZWRBY3Rpb25zLmluY2x1ZGVzKGtleSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2hpZnRTZW5zaXRpdmVLZXlzLmluY2x1ZGVzKGtleUNvZGUpKSBrZXkgPSB0aGlzLmtleUNvZGVNYXBba2V5Q29kZV07XHJcblxyXG4gICAgICBpZiAoIWZ1bmN0aW9uS2V5cy5pbmNsdWRlcyhrZXkpICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0VkaXRhYmxlKGUudGFyZ2V0KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JpZ0tleSA9IGtleTtcclxuICAgICAgICBjb25zdCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICBjb25zdCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHM7XHJcbiAgICAgICAgY29uc3QgaXNNYXJrZXJLZXkgPSBtYXJrZXJzW2tleV07XHJcbiAgICAgICAgY29uc3QgaXNDdXN0b21NYXJrZXJLZXkgPSBpc01hcmtlcktleSAmJiAhZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgICBpZiAoaXNDdXN0b21NYXJrZXJLZXkpIGtleSA9ICdjbSc7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHNob3J0Y3V0c1trZXldO1xyXG5cclxuICAgICAgICBpZiAoIXNldHRpbmcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIW1vZEtleSkge1xyXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3cnICYmICFzZXR0aW5nWzBdICYmIHNldHRpbmdbMV0pIHtcclxuICAgICAgICAgICAgdGhpcy5sb29rdXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKGlzTWFya2VyS2V5ICYmICFzZXR0aW5nWzBdICYmIHNldHRpbmdbMV0pIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCFzZXR0aW5nWzFdKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzaG9ydGN1dCA9IHNldHRpbmdbMF0uc3BsaXQoJy0nKTtcclxuICAgICAgICAgIGNvbnN0IHMxID0gc2hvcnRjdXRbMF07XHJcbiAgICAgICAgICBjb25zdCBzMiA9IHNob3J0Y3V0WzFdO1xyXG5cclxuICAgICAgICAgIGlmICghZVtzMV0gfHwgKHMyICYmICFlW3MyXSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgIGlmIChrZXkgPT09ICd3JykgdGhpcy5sb29rdXAoKTtcclxuXHJcbiAgICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3ByZXNzZWQ6aG90a2V5Jywga2V5KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbG9va3VwKCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGlmIChzZWxlY3RlZFRleHQpIHRoaXMuZW1pdCgnbG9va3VwOndvcmQnLCBzZWxlY3RlZFRleHQpO1xyXG4gICAgfSxcclxuICAgIGNoZWNrVVJMKCkge1xyXG4gICAgICB0aGlzLnJlcXVlc3QoJ2NoZWNrOnVybCcsIHRoaXMudXJsKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEpIHRoaXMub25VcmxGb3VuZCh0aGlzLmZpbHRlckVudHJpZXMoZGF0YS5lbnRyaWVzKSwgZGF0YS5yZWNlbnRseU9wZW5lZEVudHJ5KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZW50cmllcywgZm9yY2UpIHtcclxuICAgICAgZm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgZW50cmllcyA9IEFycmF5LmlzQXJyYXkoZW50cmllcykgPyBlbnRyaWVzIDogW2VudHJpZXNdO1xyXG4gICAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFmaXJzdEVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyB0aGlzLmhhc2hsZXNzVVJMIDogdGhpcy51cmw7XHJcblxyXG4gICAgICBpZiAoZm9yY2UgfHwgZmlyc3RFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICAgIF9TVE9SRS5hZGRFbnRyaWVzKGVudHJpZXMpO1xyXG4gICAgICAgIC8vX1NUT1JFLmVudHJ5ID0gZW50cnk7XHJcbiAgICAgICAgaWYgKGZvcmNlKSB0aGlzLmVtaXQoJ3NldDplbnRyaWVzJywgZW50cmllcyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkhvdGtleShrZXkpIHtcclxuICAgICAgaWYgKGtleSA9PT0gJ3cnKSB0aGlzLmxvb2t1cCgpO1xyXG4gICAgfSxcclxuICAgIG9uVXJsRm91bmQoZW50cmllcywgcmVjZW50bHlPcGVuZWRFbnRyeSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZShlbnRyaWVzLCB0cnVlKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAhdGhpcy5pbml0aWFsaXplZCAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG0taWRdJykpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0RW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgICAgICAgY29uc3QgaWdub3JlSGFzaCA9ICFmaXJzdEVudHJ5Lmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gdGhpcy5oYXNobGVzc1VSTCA6IHRoaXMudXJsO1xyXG5cclxuICAgICAgICAgIGlmIChyZWNlbnRseU9wZW5lZEVudHJ5LnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gcmVjZW50bHlPcGVuZWRFbnRyeS5uYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bWFya3MnLCBlbnRyaWVzKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZpbHRlckVudHJpZXMoZW50cmllcykge1xyXG4gICAgICBsZXQgbG9ja2VkRW50cmllcyA9IFtdLFxyXG4gICAgICAgICAgbCA9IGVudHJpZXMubGVuZ3RoLFxyXG4gICAgICAgICAgbG9ja2VkRW50cmllc0V4aXN0ID0gZmFsc2UsXHJcbiAgICAgICAgICBub25Mb2NrZWRFbnRyaWVzID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LmxvY2tlZCkge1xyXG4gICAgICAgICAgbG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXNFeGlzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5vbkxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb2NrZWRFbnRyaWVzRXhpc3QgJiYgbm9uTG9ja2VkRW50cmllcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChub25Mb2NrZWRFbnRyaWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcycpO1xyXG4gICAgICAgIGVudHJpZXMgPSBbbm9uTG9ja2VkRW50cmllc1swXV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsb2NrZWRFbnRyaWVzLmxlbmd0aCkge1xyXG4gICAgICAgIF9TVE9SRS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIGVudHJpZXMgPSBsb2NrZWRFbnRyaWVzLnNvcnQoKGEsIGIpID0+IChuZXcgRGF0ZShhLmxhc3QpKSAtIChuZXcgRGF0ZShiLmxhc3QpKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX1NUT1JFLmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZW50cmllcztcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGlvbkNoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzZWxlY3Rpb24nLCAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKTtcclxuICAgIH0sXHJcbiAgICBvblVybENoYW5nZSh0YWIsIG5ld1VybCkge1xyXG4gICAgICBjb25zdCBlbnRyeSA9IF9TVE9SRS5lbnRyaWVzW09iamVjdC5rZXlzKF9TVE9SRS5lbnRyaWVzKVswXV07XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIV9TVE9SRS5pc05ldyAmJlxyXG4gICAgICAgIGVudHJ5ICYmXHJcbiAgICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSAmJlxyXG4gICAgICAgIF9IQVNITEVTUyhuZXdVcmwpID09PSB0aGlzLmhhc2hsZXNzVVJMICYmXHJcbiAgICAgICAgbmV3VXJsICE9PSB0aGlzLnVybFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2hhc2hjaGFuZ2UnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICAgIHRoaXMucmV0cnlBY3RpdmUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGRlYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgICAgdGhpcy5yZXRyeUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNlbmRQYWdlU3RhdGUoaW5mbykge1xyXG4gICAgICB0aGlzLmVtaXQoJ3BhZ2Utc3RhdGUnLCB7XHJcbiAgICAgICAgc2VsZWN0aW9uOiAhd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkLFxyXG4gICAgICAgIGJvb2ttYXJrOiAhIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpLFxyXG4gICAgICAgIHJldHJ5QWN0aXZlOiB0aGlzLnJldHJ5QWN0aXZlXHJcbiAgICAgIH0sIGluZm8pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc3RhcnRlZDpyZXN0b3JhdGlvbic6ICdzdGFydCcsXHJcbiAgICAgICAgJ3Jlc3RvcmVkOnJhbmdlJzogJ3Byb2dyZXNzJyxcclxuICAgICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnOiAncHJvZ3Jlc3MnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdzdG9wJyxcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ2FjdGl2YXRlJ1xyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBzdGVwczogMCxcclxuICAgIHRvdGFsV2lkdGg6IDQxMyxcclxuICAgIGN1cnJlbnRXaWR0aDogMCxcclxuICAgIHN0ZXBMZW5ndGg6IDAsXHJcbiAgICBjYW5jZWxIYW5kbGVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICBjb25zdCBtb2RhbCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wcm9ncmVzc21vZGFsJyk7XHJcblxyXG4gICAgICBbe1xyXG4gICAgICAgIHR5cGU6ICd0bXByb2dyZXNzaGVhZGVyJyxcclxuICAgICAgICB0ZXh0OiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgncmVzdG9yaW5nJylcclxuICAgICAgfSwge1xyXG4gICAgICAgIHR5cGU6ICd0bXByb2dyZXNzY2xvc2UnLFxyXG4gICAgICAgIHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2JhcicsXHJcbiAgICAgICAgY2hpbGQ6IHtcclxuICAgICAgICAgIHR5cGU6ICd0bXByb2dyZXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIHR5cGU6ICd0bXByb2dyZXNzY2FuY2VsJyxcclxuICAgICAgICB0ZXh0OiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY2FuY2VsJylcclxuICAgICAgfV1cclxuICAgICAgICAuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgY29uc3QgZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudHlwZSk7XHJcbiAgICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgICAgICB0aGlzW29iai50eXBlXSA9IGVsO1xyXG4gICAgICAgICAgaWYgKG9iai50ZXh0KSBlbC50ZXh0Q29udGVudCA9IG9iai50ZXh0O1xyXG4gICAgICAgICAgaWYgKG9iai5jaGlsZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai5jaGlsZC50eXBlKTtcclxuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB0aGlzW29iai5jaGlsZC50eXBlXSA9IGNoaWxkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZXN1bWUobGVuKSB7XHJcbiAgICAgIHRoaXMuc3RlcHMgPSBsZW47XHJcbiAgICAgIHRoaXMuc3RlcExlbmd0aCA9IHRoaXMudG90YWxXaWR0aCAvIGxlbjtcclxuICAgICAgdGhpcy5jdXJyZW50V2lkdGggPSAwO1xyXG4gICAgICB0aGlzLnRtcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSAwO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KGxlbikge1xyXG4gICAgICBpZiAoIWxlbiB8fCAhdGhpcy5hY3RpdmUpIHJldHVybjtcclxuICAgICAgdGhpcy5yZXN1bWUobGVuKTtcclxuICAgICAgY29uc3QgY2FuY2VsSGFuZGxlciA9IHRoaXMuY2FuY2VsSGFuZGxlciA9IHRoaXMuY2FuY2VsLmJpbmQodGhpcyk7XHJcbiAgICAgIGNvbnN0IGNsb3NlSGFuZGxlciA9IHRoaXMuY2xvc2VIYW5kbGVyID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLnRtcHJvZ3Jlc3NjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMudG1wcm9ncmVzc2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgcHJvZ3Jlc3MoKSB7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jdXJyZW50V2lkdGggKz0gdGhpcy5zdGVwTGVuZ3RoO1xyXG4gICAgICB0aGlzLnRtcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICB9LFxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICB0aGlzLnRtcHJvZ3Jlc3NjYW5jZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbmNlbEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnRtcHJvZ3Jlc3NjbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2goZSkge31cclxuICAgIH0sXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NhbmNlbGVkOnJlc3RvcmF0aW9uJyk7XHJcbiAgICB9LFxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdwcm9ncmVzc2JhcicpLnRoZW4ocHJvZ3Jlc3NiYXIgPT4gdGhpcy5hY3RpdmUgPSBwcm9ncmVzc2Jhcik7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5jbGFzcyBSZXN0b3JlckJhc2UgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIHRoaXMubG9zdCA9IFtdO1xyXG4gICAgdGhpcy5mYWlsdXJlUmVwb3J0ID0ge307XHJcbiAgICB0aGlzLnJlc3RvcmVkID0gW107XHJcbiAgICB0aGlzLmFyZWEgPSBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnc3RhcnRlZDpyZXN0b3JhdGlvbicsIGVudHJ5Lm1hcmtzLmxlbmd0aCk7XHJcbiAgICB0aGlzLm9uKCdjYW5jZWxlZDpyZXN0b3JhdGlvbicsICgpID0+IHRoaXMuY2FuY2VsZWQgPSB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NJbkNodW5rcyhkYXRhLCBwcm9jLCBjYikge1xyXG4gICAgcHJvYyA9IHByb2MuYmluZCh0aGlzKTtcclxuICAgIGNiID0gY2IuYmluZCh0aGlzKTtcclxuXHJcblx0XHQoZnVuY3Rpb24gcmVjKCkge1xyXG5cdFx0XHRsZXQgZXhwaXJlID0gK25ldyBEYXRlKCkgKyA1MDA7XHJcblxyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0dHJ5IHtcclxuICAgICAgICAgIHByb2MoZGF0YS5zaGlmdCgpKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHRcdH0gd2hpbGUgKGRhdGEubGVuZ3RoID4gMCAmJiBleHBpcmUgPiArbmV3IERhdGUoKSk7XHJcblxyXG5cdFx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByZWMoKSwgMCk7XHJcblx0XHRcdGVsc2UgY2IoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG4gIHJlcG9ydCgpIHtcclxuICAgIGlmICh0aGlzLmNhbmNlbGVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgbGV0IGxsID0gdGhpcy5sb3N0Lmxlbmd0aDtcclxuICAgIGlmIChsbCkge1xyXG4gICAgICB3aGlsZShsbC0tKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubG9zdFtsbF0udGVtcDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ2xvc3Q6bWFya3MnLCB0aGlzLmZhaWx1cmVSZXBvcnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdmaW5pc2hlZDpyZXN0b3JhdGlvbicsIHRoaXMuZW50cnkubmFtZSwgdGhpcy5yZXN0b3JlZCwgdGhpcy5sb3N0LCB0aGlzLmFyZWEpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5jYWNoZSA9IFtdO1xyXG4gICAgdGhpcy5waGFzZSA9IDE7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsID0gMDtcclxuICAgIHRoaXMuY2h1bmtEdXJhdGlvbiA9IDUwMDtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICB0aGlzLm9vbSA9IGVudHJ5Lm1hcmtzLmxlbmd0aCA9PT0gMSAmJiBlbnRyeS5tYXJrc1swXS5pZCA9PSAxO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpbWVyKCkge1xyXG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcclxuICAgIHRoaXMuX3RpbWVyID0gK25ldyBEYXRlKCkgKyB0aGlzLmNodW5rRHVyYXRpb247XHJcbiAgICByZXR1cm4gdGltZXI7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZW50cnkgPSB0aGlzLmVudHJ5LFxyXG4gICAgICAgIG5vdyA9IFtdLCBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzLFxyXG4gICAgICAgIGwgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIG1hcms7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG5cclxuICAgICAgdGhpcy5jb252ZXJ0RGVzY3JpcHRpb24obWFyaykuY3JlYXRlVGVtcE9iamVjdChtYXJrKTtcclxuXHJcbiAgICAgIGlmIChtYXJrLmNvbmRzLm4xID09PSAnVE0nKSBwb3N0cG9uZWQucHVzaChtYXJrKTtcclxuICAgICAgZWxzZSBub3cucHVzaChtYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnF1ZXVlLnB1c2gobm93KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gcG9zdHBvbmVkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW3Bvc3Rwb25lZFtpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzdG9yZSgpO1xyXG4gIH1cclxuICBjb252ZXJ0RGVzY3JpcHRpb24obWFyaykge1xyXG4gICAgaWYgKHR5cGVvZiBtYXJrLmNvbmRzLm8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxldCBjb25kcyA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgICBjb252ZXJ0ZWRDb25kcyA9IHtcclxuICAgICAgICAgICAgbzogY29uZHMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgICAgIG4xOiBjb25kcy5maXJzdE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBuMjogY29uZHMuZmlyc3RQYXJlbnROb2RlTmFtZSxcclxuICAgICAgICAgICAgcDE6IGNvbmRzLmZpcnN0VGV4dE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDI6IGNvbmRzLmZpcnN0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMzogY29uZHMuZmlyc3RQYXJlbnROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHA0OiBjb25kcy5maXJzdEdyYW1wYU5vZGVQb3NpdGlvblxyXG4gICAgICAgICAgfTtcclxuICAgICAgZGVsZXRlIG1hcmsuY29uZHM7XHJcbiAgICAgIG1hcmsuY29uZHMgPSBjb252ZXJ0ZWRDb25kcztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjcmVhdGVUZW1wT2JqZWN0KG1hcmspIHtcclxuICAgIGxldCB0ZXh0ID0gbWFyay50ZXh0LFxyXG4gICAgICAgIHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCksXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gdGhpcy5zcXVlZXplKG1hcmsudGV4dCk7XHJcblxyXG4gICAgbWFyay50ZW1wID0ge1xyXG4gICAgICB0ZXh0TGVuZ3RoOiB0ZXh0Lmxlbmd0aCxcclxuICAgICAgdHJpbW1lZFRleHQ6IHRyaW1tZWRUZXh0LFxyXG4gICAgICB0cmltbWVkVGV4dExlbmd0aDogdHJpbW1lZFRleHQubGVuZ3RoLFxyXG4gICAgICBzcXVlZXplZFRleHQ6IHNxdWVlemVkVGV4dCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoOiBzcXVlZXplZFRleHQubGVuZ3RoLFxyXG4gICAgICBwb3NzaWJsZVBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRzOiB7fSxcclxuICAgICAgcG9zc2libGVGb2N1c09mZnNldHM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcmsuc3luY2VkID0gdGhpcy5lbnRyeS5zeW5jZWQ7XHJcbiAgfVxyXG4gIHJlc3RvcmUoKSB7XHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMikgdGhpcy5zb3J0UXVldWVCeUlkKCk7XHJcblxyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMucXVldWUuc2hpZnQoKSxcclxuICAgICAgICBsZW5ndGggPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcblxyXG4gICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldEJvZHlTZWxlY3Rpb24od2luZG93LmRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgICAuZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBoYXNlID09PSAxICYmIGxlbmd0aCA+IDEpXHJcbiAgICAgICAgICB0aGlzLnBvc3Rwb25lT3ZlcmxhcHBpbmdzKCk7XHJcblxyXG4gICAgICB0aGlzLmZpbmRQb3NzaWJsZUV4dHJlbWEoKVxyXG4gICAgICAgICAgLnJ1bGVPdXRNdWx0aXBsZXMoKVxyXG4gICAgICAgICAgLnJlc3RvcmVSYW5nZXMoKTtcclxuXHJcbiAgICAgIHRoaXMucGhhc2UrKztcclxuXHJcbiAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCAmJiAhdGhpcy5jYW5jZWxlZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyIDwgK25ldyBEYXRlKCkpIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXN0b3JlKCksIDApO1xyXG4gICAgICAgIGVsc2UgdGhpcy5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aGlzLnJlcG9ydCgpO1xyXG4gIH1cclxuICBzb3J0UXVldWVCeUlkKCkge1xyXG4gICAgbGV0IG1hcmtzID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICByZXMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBtYXJrLCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKCFtYXJrc1tsXS5sZW5ndGgpIGNvbnRpbnVlO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF1bMF07XHJcbiAgICAgIHRlbXBbbWFyay5pZF0gPSBtYXJrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG5cclxuICAgIGZvciAodCA9IHRlbXAubGVuZ3RoOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLnF1ZXVlLnB1c2goW3RlbXBbaV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsKSB7XHJcbiAgICBsZXQgdHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0LFxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3F1ZWV6ZWRUZXh0LCBzcXVlZXplZFRleHRMZW5ndGgsIHAsIGVuZFBvc2l0aW9uO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcCA9IHVuZGVmaW5lZDtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuXHJcbiAgICAgIGlmICghbWFya1RlbXApIHtcclxuICAgICAgICBtYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMgPSBlbmRQb3NpdGlvbnMuY29uY2F0KG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dDtcclxuICAgICAgICBzcXVlZXplZFRleHRMZW5ndGggPSBtYXJrVGVtcC5zcXVlZXplZFRleHRMZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChwICE9PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHAgPT09IHVuZGVmaW5lZCkgcCA9IC0xO1xyXG4gICAgICAgICAgcCA9IHRyaW1tZWRTZWxlY3Rpb25UZXh0LmluZGV4T2Yoc3F1ZWV6ZWRUZXh0LCBwICsgMSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IHAgKyBzcXVlZXplZFRleHRMZW5ndGg7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbnMucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucy5wb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMScpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgdGhpcy5tYXhQb3NpdGlvbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKHBvc2l0aW9ucykge1xyXG4gICAgbGV0IGwgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBwb3MsIHN0YXJ0LCB0O1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgcG9zID0gcG9zaXRpb25zW2xdO1xyXG4gICAgICBzdGFydCA9IHBvc1swXTtcclxuXHJcbiAgICAgIGlmICh0ZW1wW3N0YXJ0XSkgdGVtcC5zcGxpY2Uoc3RhcnQgKyAxLCAwLCBwb3MpO1xyXG4gICAgICBlbHNlIHRlbXBbc3RhcnRdID0gcG9zO1xyXG4gICAgfVxyXG4gICAgdCA9IHRlbXAubGVuZ3RoO1xyXG4gICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW107XHJcblxyXG4gICAgZm9yICg7IGkgPCB0OyBpKyspXHJcbiAgICAgIGlmICh0ZW1wW2ldKSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaCh0ZW1wW2ldKTtcclxuICB9XHJcbiAgcG9zdHBvbmVPdmVybGFwcGluZ3MoKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIHBvczEsIHBvczIsIGksIG0xLCBtMiwgaWQxLCBpZDIsIGlkO1xyXG5cclxuICAgIGlmIChwID4gMSkge1xyXG4gICAgICB3aGlsZSAocC0tID4gMSkge1xyXG4gICAgICAgIHBvczEgPSBwb3NpdGlvbnNbcCAtIDFdO1xyXG4gICAgICAgIHBvczIgPSBwb3NpdGlvbnNbcF07XHJcbiAgICAgICAgbTEgPSBwb3MxWzJdO1xyXG4gICAgICAgIG0yID0gcG9zMlsyXTtcclxuICAgICAgICBpZDEgPSBtMS5pZDtcclxuICAgICAgICBpZDIgPSBtMi5pZDtcclxuXHJcbiAgICAgICAgaWYgKGlkMSA9PT0gaWQyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHBvczFbMV0gPiBwb3MyWzBdICYmIHBvczFbMF0gPCBwb3MyWzFdKSB7XHJcblxyXG4gICAgICAgICAgaWYgKGlkMSA8IGlkMikge1xyXG4gICAgICAgICAgICBpZCA9IGlkMjtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTIpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQxO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMSk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IHA7IGkrKylcclxuICAgICAgICB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGN1dE91dEZvcihpZCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShwLS0pIHtcclxuICAgICAgaWYgKHBvc2l0aW9uc1twXVsyXS5pZCA9PT0gaWQpXHJcbiAgICAgICAgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnNwbGljZShwLCAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9zdHBvbmUobWFyaykge1xyXG4gICAgbGV0IHF1ZXVlID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICBsID0gcXVldWUubGVuZ3RoLFxyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgaWYgKHF1ZXVlW2xdWzBdID09PSBtYXJrKSB7XHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbHJlYWR5SW5jbHVkZWQpXHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbbWFya10pO1xyXG4gIH1cclxuICBmaW5kUG9zc2libGVFeHRyZW1hKCkge1xyXG4gICAgbGV0IG5vZGVzID0gdGhpcy5ib2R5VGV4dE5vZGVzLFxyXG4gICAgICAgIG4gPSBub2RlcyA/IG5vZGVzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgaW5kaWNlcyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwaGFzZSA9IHRoaXMucGhhc2UsXHJcbiAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlID0gW10sXHJcbiAgICAgICAgc2F0aXNmaWVkID0gW10sXHJcbiAgICAgICAgaSA9IDAsIGNoYXJzID0gMCxcclxuICAgICAgICBuZXh0U3RhcnRGb3VuZCwgZW5kaW5nc0luVGhpc05vZGUsXHJcbiAgICAgICAgbm9kZSwgbm9kZXNUZXh0LCBub2Rlc1RleHRMZW5ndGgsXHJcbiAgICAgICAgbWFyaywgZGlmZiwgbCwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIGUsIGYsIGlkLCBwLCBxLCB4LCBtLFxyXG4gICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQsIHN0YXJ0Rm91bmRGb3IsIHBvc3Rwb25lZCwgaGFzRW5kaW5nc0luVGhpc05vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBub2Rlc1RleHQgPSB0aGlzLnNxdWVlemUobm9kZS5kYXRhKTtcclxuICAgICAgbm9kZXNUZXh0TGVuZ3RoID0gbm9kZXNUZXh0Lmxlbmd0aDtcclxuICAgICAgY2hhcnMgKz0gbm9kZXNUZXh0TGVuZ3RoO1xyXG4gICAgICBsID0gaW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSBbXTtcclxuICAgICAgcG9zdHBvbmVkID0gW107XHJcbiAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBzdGFydFBvc2l0aW9uID0gaW5kaWNlc1tsXVswXTtcclxuICAgICAgICBlbmRQb3NpdGlvbiA9IGluZGljZXNbbF1bMV07XHJcbiAgICAgICAgbWFyayA9IGluZGljZXNbbF1bMl07XHJcbiAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yIHx8IFtdO1xyXG4gICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvciA9IG1hcmsudGVtcC5lbmRGb3VuZEZvciB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIW1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICBjaGFycyA+IHN0YXJ0UG9zaXRpb24gJiZcclxuICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoIDwgbWFyay50ZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGhhc0VuZGluZ3NJblRoaXNOb2RlICYmIGhhc0VuZGluZ3NJblRoaXNOb2RlLmlkIDwgbWFyay5pZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxICYmIGlkICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5wdXNoKHsgbm9kZTogbm9kZSwgcG9zOiBpIH0pO1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLnB1c2goc3RhcnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgc3RhcnRGb3VuZEZvci5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgIW1hcmsudGVtcC5lbmRGb3VuZEZvci5pbmNsdWRlcyhlbmRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIChjaGFycyAtIGVuZFBvc2l0aW9uKSA+PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5taW4uYXBwbHkobnVsbCwgc3RhcnRGb3VuZEZvcikgPCBpZCkge1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQgPSB0aGlzLmZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBlbmRQb3NpdGlvbiAtIChjaGFycyAtIG5vZGVzVGV4dExlbmd0aCkpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVGb2N1c09mZnNldHMucHVzaChwb3NzaWJsZUZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dID0ge1xyXG4gICAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiBwb3NzaWJsZUZvY3VzT2Zmc2V0LFxyXG4gICAgICAgICAgICAgIHBvczogaVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICBjYWNoZS5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgICAgIHNhdGlzZmllZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBtYXJrO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCkgZm9yICh4ID0gMDsgeCA8IHA7IHgrKykgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW3hdKTtcclxuXHJcbiAgICAgIGlmIChjaGFycyA+IHRoaXMubWF4UG9zaXRpb24pIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKHBoYXNlICE9PSAxIHx8IHRoaXMub29tKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBtYXJrID0gdGhpcy5tYXJrc1tpXTtcclxuICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhtYXJrLmlkKSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8yJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBydWxlT3V0TXVsdGlwbGVzKCkge1xyXG4gICAgbGV0IGNhY2hlID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gY2FjaGUubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIHBvc3NpYmxlU3RhcnROb2RlcywgcCwgbm9kZSwgcGFyZW50LCBncmFtcGEsIGdyYW5kZ3JhbXBhLCBncmFuZGdyYW5kZ3JhbXBhLCBtYXRjaGVzLCBmYWlsZWQsIHEsXHJcbiAgICAgICAgcG9zc2libGVFbmRzLCBzdGFydEZvdW5kRm9yLCBjb25kcywgc3RhcnRPZmZzZXQsIHRlbXAsIHRleHRMZW5ndGgsIHN0YXJ0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IGNhY2hlW2ldO1xyXG4gICAgICBtYXRjaGVzID0gW107XHJcbiAgICAgIGZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICB0ZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXMgPSB0ZW1wLnBvc3NpYmxlU3RhcnROb2RlcztcclxuICAgICAgcG9zc2libGVFbmRzID0gdGVtcC5wb3NzaWJsZUVuZHM7XHJcbiAgICAgIHN0YXJ0Rm91bmRGb3IgPSB0ZW1wLnN0YXJ0Rm91bmRGb3JcclxuICAgICAgcCA9IHBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGg7XHJcbiAgICAgIGNvbmRzID0gbWFyay5jb25kcztcclxuICAgICAgc3RhcnRPZmZzZXQgPSBjb25kcy5vO1xyXG4gICAgICB0ZXh0TGVuZ3RoID0gdGVtcC50ZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgICAgd2hpbGUgKHAtLSkge1xyXG4gICAgICAgICAgbm9kZSA9IHBvc3NpYmxlU3RhcnROb2Rlc1twXS5ub2RlO1xyXG4gICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG5cclxuICAgICAgICAgIGlmICghZ3JhbXBhIHx8IGNvbmRzLnAzID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHAgPSAwO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAxKSBwID0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcSA9IG1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgcGFyZW50ID0gcG9zc2libGVTdGFydE5vZGVzW3FdLm5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG4gICAgICAgICAgICAgIGdyYW5kZ3JhbmRncmFtcGEgPSBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgKCFncmFuZGdyYW5kZ3JhbXBhIHx8IGNvbmRzLnA0ID09PSB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFuZGdyYW1wYSwgZ3JhbmRncmFtcGEpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAocG9zc2libGVFbmRzW3N0YXJ0Rm91bmRGb3JbcV1dLm9mZnNldCAtIHN0YXJ0T2Zmc2V0KSA9PT0gdGV4dExlbmd0aFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHAgPSBxO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcCkgcCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgcCA9IDA7XHJcblxyXG4gICAgICBwID0gcCB8fCAwO1xyXG5cclxuICAgICAgc3RhcnQgPSBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzW3BdO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlID0gc3RhcnQubm9kZTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uID0gc3RhcnQucG9zO1xyXG5cclxuICAgICAgdGhpcy5zZXRNYXRjaGluZ0VuZChtYXJrLCBwKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXRNYXRjaGluZ0VuZChtYXJrLCBwKSB7XHJcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yW3BdLFxyXG4gICAgICAgIGVuZCA9IG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl07XHJcblxyXG4gICAgbWFyay50ZW1wLmVuZE5vZGUgPSBlbmQubm9kZTtcclxuICAgIG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb24gPSBlbmQucG9zO1xyXG4gICAgbWFyay50ZW1wLmZvY3VzT2Zmc2V0ID0gZW5kLm9mZnNldDtcclxuICB9XHJcbiAgc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbWFyay5jb25kcyxcclxuICAgICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW1wYSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMCxcclxuICAgICAgICBzdGFydE9mZnNldCA9IGRlc2NyaXB0aW9uLm8sXHJcbiAgICAgICAgcmVsZXZhbnROb2RlVGV4dCA9IG5vZGUuZGF0YS5zdWJzdHJpbmcoc3RhcnRPZmZzZXQpLnRyaW0oKSxcclxuICAgICAgICBsID0gcmVsZXZhbnROb2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgbWFya1RleHQgPSBtYXJrLnRlbXAudHJpbW1lZFRleHQsXHJcbiAgICAgICAgbSA9IG1hcmsudGVtcC50cmltbWVkVGV4dExlbmd0aCxcclxuICAgICAgICB0ZXh0c01hdGNoO1xyXG5cclxuICAgIGlmIChtIDw9IGwpXHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUobWFya1RleHQpKSA9PT0gMDtcclxuICAgIGVsc2VcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkpID09PSAwO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRleHRzTWF0Y2ggJiZcclxuICAgICAgKHBhcmVudE5vZGUubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4xIHx8IChkZXNjcmlwdGlvbi5uMSA9PT0gJ1RNJyAmJiBwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSkgJiZcclxuICAgICAgKCFncmFtcGEgfHwgZ3JhbXBhLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMikgJiZcclxuICAgICAgdGhpcy53aGljaENoaWxkKHBhcmVudE5vZGUsIG5vZGUpID09PSBkZXNjcmlwdGlvbi5wMVxyXG4gICAgKTtcclxuICB9XHJcbiAgZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIG4pIHtcclxuICAgIGxldCBub2RlVGV4dCA9IG5vZGUuZGF0YSxcclxuICAgICAgICBsID0gbm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBjb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zcXVlZXplKG5vZGVUZXh0W2ldKSkgY291bnRlcisrO1xyXG5cclxuICAgICAgaWYgKGNvdW50ZXIgPT09IG4pIHJldHVybiAoL1xccyQvLnRlc3QobWFyay50ZXh0KSA/IGkgKyAyIDogaSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXN0b3JlUmFuZ2VzKCkge1xyXG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBtYXJrcyA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3RhcnQsIGVuZCwgZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICBzdGFydCA9IG1hcmtUZW1wLnN0YXJ0Tm9kZTtcclxuICAgICAgZW5kID0gbWFya1RlbXAuZW5kTm9kZTtcclxuICAgICAgZm9jdXNPZmZzZXQgPSBtYXJrVGVtcC5mb2N1c09mZnNldDtcclxuXHJcbiAgICAgIGlmICghc3RhcnQgfHwgIWVuZCB8fCAhKHR5cGVvZiBmb2N1c09mZnNldCA9PT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMycpIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCBtYXJrLmNvbmRzLm8pO1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKGVuZCwgZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAvL3NlbGVjdGlvbi5yZXN1bWUocmFuZ2UpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnJlY29sbGVjdE5vZGVzKG1hcmspO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIG1hcmsudGVtcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Qm9keVNlbGVjdGlvbihlbCkge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCsrO1xyXG5cclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oZWwpO1xyXG4gICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uLnRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25UcmlhbCA8IDQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNldEJvZHlTZWxlY3Rpb24oZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gJyAnO1xyXG4gICAgICAgICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gW107XHJcbiAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMuc3F1ZWV6ZSh0aGlzLnNlbGVjdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSB0aGlzLnNlbGVjdGlvbi5ub2RlcyA/IHRoaXMuc2VsZWN0aW9uLm5vZGVzLnNsaWNlKCkgOiBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc3F1ZWV6ZSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykgPyB0ZXh0LnJlcGxhY2UoL1xcdHxcXHN8XFxufFxcci9nLCAnJykgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgY29udGV4dCkge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgY2hpbGRyZW4gPSBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0ICAgIGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHQgICAgcG9zID0gMCwgaSA9IDAsIGN1cnJlbnRDaGlsZDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgY3VycmVudENoaWxkID0gY2hpbGRyZW5baV07XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudENoaWxkID09PSBjaGlsZCkgcmV0dXJuIHBvcztcclxuXHJcblx0XHRcdGlmIChjb250ZXh0KSB7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRDaGlsZC5ub2RlTmFtZSA9PT0gY29udGV4dCkgcG9zKys7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgIGlmICghKGN1cnJlbnRDaGlsZC5ub2RlVHlwZSA9PT0gMyAmJiAhY3VycmVudENoaWxkLmRhdGEpKSBwb3MrKztcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgSW1tdXRSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHRoaXMucmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgY29uc3QgbWFya3MgPSB0aGlzLm1hcmtzID0gWy4uLmVudHJ5Lm1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbTEuaWQgLSBtMi5pZCldO1xyXG5cclxuICAgIHRoaXMucHJvY2Vzc0luQ2h1bmtzKG1hcmtzLCB0aGlzLnJlc3RvcmVSYW5nZSwgdGhpcy5yZXBvcnQpO1xyXG4gIH1cclxuXHJcbiAgcmVzdG9yZVJhbmdlKG1hcmspIHtcclxuICAgIGlmICh0aGlzLmNhbmNlbGVkKSByZXR1cm4gdGhpcy5tYXJrcyA9IFtdO1xyXG4gICAgY29uc3QgY29uZHMgPSBtYXJrLmNvbmRzO1xyXG4gICAgY29uc3Qgc3RhcnQgPSBjb25kcy5zO1xyXG4gICAgY29uc3QgZW5kID0gY29uZHMuZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMuZ2V0Tm9kZShzdGFydC5wKSwgc3RhcnQubyk7XHJcbiAgICAgIHJhbmdlLnNldEVuZCh0aGlzLmdldE5vZGUoZW5kLnApLCBlbmQubyk7XHJcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIG1hcmspO1xyXG4gICAgICBkZWxldGUgbWFyay5zeW5jZWQ7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldE5vZGUocG9zaXRpb24pIHtcclxuICAgIGNvbnN0IHRleHROb2RlUG9zaXRpb24gPSBwb3NpdGlvblswXTtcclxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgICBsID0gcG9zaXRpb24ubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlKGwtLSA+IDEpIHtcclxuICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bcG9zaXRpb25bbF1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGUuY2hpbGROb2Rlc1t0ZXh0Tm9kZVBvc2l0aW9uXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRyZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdyZXN0b3JlOm1hcmtzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdsb3N0Om1hcmtzJzogJ29uRmFpbHVyZScsXHJcbiAgICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ3Jlc3VtZWQ6bWFya2Vycyc6ICdyZXRyeSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbnRyaWVzOiBudWxsLFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICByZXN0b3JlZDogMCxcclxuICAgIGZhaWxlZDogMCxcclxuICAgIGZhaWx1cmVSZXBvcnQ6IHt9LFxyXG5cclxuICAgIHJlc3RvcmUoZW50cmllcykge1xyXG4gICAgICBpZiAoIWVudHJpZXMpIHJldHVybjtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJpZXMpKSBlbnRyaWVzID0gW2VudHJpZXNdO1xyXG5cclxuICAgICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcclxuICAgICAgdGhpcy5jb3VudCA9IGVudHJpZXMubGVuZ3RoO1xyXG5cclxuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoZW50cnkuaW1tdXQpIG5ldyBJbW11dFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgICBlbHNlIG5ldyBSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgdGhpcy5yZXN0b3JlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbGVkID0gMDtcclxuICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0ID0ge307XHJcbiAgICB9LFxyXG4gICAgcmV0cnkoZW50cnkpIHtcclxuICAgICAgZW50cnkgPSBlbnRyeSA/IFtlbnRyeV0gOiB0aGlzLmVudHJpZXM7XHJcbiAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICAgIHRoaXMucmVzdG9yZShlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgb25GYWlsdXJlKHJlcG9ydCkge1xyXG4gICAgICB0aGlzLmZhaWxlZCsrO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHJlcG9ydCkgdGhpcy5mYWlsdXJlUmVwb3J0W2ldID0gcmVwb3J0W2ldO1xyXG4gICAgfSxcclxuICAgIG9uRmluaXNoZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgaWYgKCsrdGhpcy5yZXN0b3JlZCA9PT0gdGhpcy5jb3VudCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucycpO1xyXG4gICAgICAgIGlmICh0aGlzLmZhaWxlZCkgdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmdldFJlcG9ydCgpKTtcclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRSZXBvcnQoKSB7XHJcbiAgICAgIGNvbnN0IHJlcG9ydCA9IHRoaXMuZmFpbHVyZVJlcG9ydDtcclxuICAgICAgbGV0IG1zZyA9ICcnO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHJlcG9ydCkge1xyXG4gICAgICAgIG1zZyArPSBgJHtyZXBvcnRbaV0ucmVhc29ufSA6ICR7cmVwb3J0W2ldLnRleHR9XFxuYDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbXNnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfU0VMRUNUSU9OIHtcclxuXHJcbiAgY29uc3RydWN0b3Iobm9kZSwgb3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQpIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuXHJcbiAgICBpZiAobm9kZSB8fCAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbmVkID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUobm9kZSlcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmNvbGxlY3ROb2Rlcyh0cnVlKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0Tm9kZXMoKVxyXG4gICAgICAgICAgICAucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuYWRqdXN0KClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5yZXRyaWV2ZVRleHQoKTtcclxuICAgICAgfVxyXG4gICAgICB0cnkgeyBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7IH0gY2F0Y2goZSkge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZShub2RlKSB7XHJcbiAgICB0aGlzLnNlbGYuc2VsZWN0QWxsQ2hpbGRyZW4obm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHVwZGF0ZShzZWxlY3Rpb24pIHtcclxuICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuc2VsZiA9IHNlbGVjdGlvbjtcclxuICAgIGVsc2Ugc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIGxldCBwcm9wcyA9IFsnZm9jdXNOb2RlJywgJ2FuY2hvck5vZGUnLCAnZm9jdXNPZmZzZXQnLCAnYW5jaG9yT2Zmc2V0J10sXHJcbiAgICAgICAgaSA9IHByb3BzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB0aGlzW3Byb3BzW2ldXSA9IHNlbGVjdGlvbltwcm9wc1tpXV07XHJcblxyXG4gICAgdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgdGhpcy5zaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGFkanVzdCgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzID0gdGhpcy5mb2N1c05vZGU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykpIHRoaXMucmV2ZXJzZShhbmNob3IsIGZvY3VzKTtcclxuICAgIGVsc2UgdGhpcy5ub3JtYWxpemUoYW5jaG9yLCBmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIG5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZSxcclxuXHJcbiAgICAgICAgZmlyc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbMF0sXHJcbiAgICAgICAgbGFzdFRleHROb2RlID0gdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGlmIChmaXJzdFRleHROb2RlICE9PSBhbmNob3IpXHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KGZpcnN0VGV4dE5vZGUsIGZpcnN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBmaXJzdFRleHROb2RlLmRhdGEudHJpbUxlZnQoKS5sZW5ndGgpO1xyXG5cclxuICAgIGlmIChsYXN0VGV4dE5vZGUgIT09IGZvY3VzKVxyXG4gICAgICByYW5nZS5zZXRFbmQobGFzdFRleHROb2RlLCBsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSAobGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gbGFzdFRleHROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoKSk7XHJcbiAgfVxyXG4gIGNvbGxlY3ROb2Rlcyh3aG9sZURvY3VtZW50KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBjb250YWluZXIgPSB3aG9sZURvY3VtZW50ID8gd2luZG93LmRvY3VtZW50LmJvZHkgOiB0aGlzLmdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyKCksXHJcbiAgICAgICAgZmlsdGVyID0gd2hvbGVEb2N1bWVudCA/XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGYuaXNTZWxlY3RhYmxlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpIDpcclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKSxcclxuXHJcbiAgICAgICAgaXRlcmF0b3IgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKGNvbnRhaW5lciwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIHtcclxuICAgICAgICAgIGFjY2VwdE5vZGUobm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKG5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKSxcclxuXHJcbiAgICAgICAgdGVtcFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBub2RlcyA9IFtdLCBwYXJlbnROb2RlcyA9IFtdLFxyXG4gICAgICAgIHRleHROb2RlLCBwYXJlbnQsIGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgd2hpbGUodGV4dE5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSB7XHJcbiAgICAgIG5vZGVzLnB1c2godGV4dE5vZGUpO1xyXG4gICAgfVxyXG4gICAgbm9kZXMgPSB0aGlzLnRyaW1TZWxlY3Rpb24obm9kZXMpO1xyXG4gICAgdGhpcy5ub2RlcyA9IHRoaXMub3B0aW9ucy5wcm9ncmFtbWF0aWNhbGx5ID8gdGhpcy5yZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIDogbm9kZXM7XHJcbiAgICB0aGlzLnBhcmVudE5vZGVzID0gdGhpcy5jb2xsZWN0UGFyZW50Tm9kZXModGhpcy5ub2Rlcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlY29sbGVjdE5vZGVzKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtXcmFwcGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRePVwiJyArIG1hcmsuaWQgKyAnX1wiXScpKTtcclxuICAgIGNvbnN0IG0gPSBtYXJrV3JhcHBlcnMubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV3U2VnbWVudCA9IG1hcmtXcmFwcGVycy5tYXAoZWwgPT4gZWwuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgY29uc3QgcHJldiA9IG1hcmtXcmFwcGVyc1swXS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBjb25zdCBuZXh0ID0gbWFya1dyYXBwZXJzW20tMV0ubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb247XHJcbiAgICBjb25zdCBlbmQgPSBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uO1xyXG5cclxuICAgIGlmIChwcmV2ICYmIHByZXYubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC51bnNoaWZ0KHByZXYpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnB1c2gobmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgLi4ubmV3U2VnbWVudCk7XHJcbiAgfVxyXG4gIHRyaW1TZWxlY3Rpb24obm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGxldCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGZpcnN0Tm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmFuY2hvck5vZGUgPT09IGZpcnN0Tm9kZSAmJiBmaXJzdE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGggPD0gc2VsZWN0aW9uLmFuY2hvck9mZnNldCkge1xyXG4gICAgICAgIG5vZGVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5mb2N1c05vZGUgPT09IGxhc3ROb2RlICYmIHRoaXMuaXNCbGFuayhsYXN0Tm9kZS5kYXRhLnN1YnN0cigwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKSkge1xyXG4gICAgICAgIG5vZGVzLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIHJlZHVjZVRvU2VsZWN0YWJsZShub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsID0gdGhpcy5zZWxmO1xyXG4gICAgY29uc3QgcmcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZShyZyk7XHJcblxyXG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgIHJnLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICAgIHJldHVybiAhIXNlbC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHRoaXMucmFuZ2UpO1xyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgY29sbGVjdFBhcmVudE5vZGVzKG5vZGVzKSB7XHJcbiAgICBsZXQgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBwYXJlbnRzID0gW10sIGkgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBwYXJlbnRzLnB1c2gobm9kZXNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgfVxyXG4gIHJldHJpZXZlVGV4dCgpIHtcclxuICAgIGxldCByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbm9kZXMgPSB0aGlzLm5vZGVzLFxyXG4gICAgICAgIGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbm9kZVRleHRzID0gW10sXHJcbiAgICAgICAgdGV4dDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgbm9kZVRleHRzLnB1c2gobm9kZXNbaV0uZGF0YSk7XHJcblxyXG4gICAgbCAtPSAxO1xyXG5cclxuICAgIGlmIChub2RlVGV4dHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xyXG4gICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0LCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9ub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG4gICAgICAgIC8vbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCB0aGlzLmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgICAgIG5vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRPZmZzZXQpO1xyXG4gICAgICAgIG5vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgfVxyXG4gICAgICB0ZXh0ID0gdGhpcy50ZXh0ID0gbm9kZVRleHRzLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBub2RlMSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIG5vZGUyID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICB3aGlsZSAobm9kZTEgPSBub2RlMS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgaWYgKChub2RlMS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlMikgJiAweDEwKSA9PT0gMHgxMClcclxuICAgICAgICAgIHJldHVybiBub2RlMTtcclxuICAgIH1cclxuICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuYm9keTtcclxuICB9XHJcbiAgcmV2ZXJzZShhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoZm9jdXMsIHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoYW5jaG9yLCBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlKHNlbGVjdGlvbikuYWRqdXN0KHNlbGVjdGlvbi5hbmNob3JOb2RlLCBzZWxlY3Rpb24uZm9jdXNOb2RlKTtcclxuICB9XHJcbiAgcmVkdWNlVG9PbmVSYW5nZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2VDb3VudCA9IHNlbGVjdGlvbi5yYW5nZUNvdW50LFxyXG4gICAgICAgIHJhbmdlMCA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgbGFzdFJhbmdlO1xyXG5cclxuICAgIGlmIChyYW5nZUNvdW50IDwgMikgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgbGFzdFJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQocmFuZ2VDb3VudCAtIDEpO1xyXG5cclxuICAgIHJhbmdlMC5zZXRTdGFydChyYW5nZTAuc3RhcnRDb250YWluZXIsIHJhbmdlMC5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZTAuc2V0RW5kKGxhc3RSYW5nZS5lbmRDb250YWluZXIsIGxhc3RSYW5nZS5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZTApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBoYXNOb3JtYWxQYXJlbnQobm9kZSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgdGFnID0gcGFyZW50LnRhZ05hbWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0YWcgIT09ICdTQ1JJUFQnICYmIHRhZyAhPT0gJ1NUWUxFJyAmJiB0YWcgIT09ICdMSU5LJyAmJiB0YWcgIT09ICdNRVRBJyAmJlxyXG4gICAgICB0YWcgIT09ICdCQVNFJyAmJiB0YWcgIT09ICdUSVRMRScgJiYgdGFnICE9PSAnTk9TQ1JJUFQnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0lNRycgJiYgdGFnICE9PSAnSUZSQU1FJyAmJiB0YWcgIT09ICdFTUJFRCcgJiYgdGFnICE9PSAnUEFSQU0nICYmXHJcbiAgICAgIHRhZyAhPT0gJ1ZJREVPJyAmJiB0YWcgIT09ICdBVURJTycgJiYgdGFnICE9PSAnU09VUkNFJyAmJiB0YWcgIT09ICdUUkFDSycgJiZcclxuICAgICAgdGFnICE9PSAnQ0FOVkFTJyAmJiB0YWcgIT09ICdNQVAnICYmIHRhZyAhPT0gJ0FSRUEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ01BVEgnICYmIHRhZyAhPT0gJ09CSkVDVCcgJiZcclxuICAgICAgIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ3N2ZycpIC8vJiZcclxuICAgICAgLy8hdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnbWF0aCcpXHJcbiAgICApO1xyXG4gIH1cclxuICBpc0NoaWxkT2Yobm9kZSwgbm9kZVR5cGUpIHtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBub2RlVHlwZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlzQmxhbmsobm9kZSkge1xyXG4gICAgbGV0IHRleHQ7XHJcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZS5kYXRhID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGUuZGF0YTtcclxuICAgICAgZWxzZSB0ZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQuc2VhcmNoKC9bXlxcc1xcblxcclxcdF0vZykgPT09IC0xO1xyXG4gIH1cclxuICBpc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHBvc2l0aW9uID0gYW5jaG9yLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwb3NpdGlvbiA9PT0gMiB8fFxyXG4gICAgICBwb3NpdGlvbiA9PT0gMTAgfHxcclxuICAgICAgKCFwb3NpdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0ID4gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSk7XHJcbiAgfVxyXG4gIGlzU2ltcGxlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3JOb2RlID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXNOb2RlID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBhbmNob3JOb2RlID09PSBmb2N1c05vZGUgJiZcclxuICAgICAgYW5jaG9yTm9kZS5ub2RlVHlwZSA9PT0gMyAmJlxyXG4gICAgICAoIWFuY2hvck5vZGUubmV4dFNpYmxpbmcgfHwgKGFuY2hvck5vZGUubmV4dFNpYmxpbmcuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXNOb2RlKSAhPT0gNCkpKTtcclxuICB9XHJcbiAgaXNTZWxlY3RhYmxlKG5vZGUpIHtcclxuICAgIHRoaXMucmFuZ2Uuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgIHJldHVybiAhIXRoaXMuc2VsZi50b1N0cmluZygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaykge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlU3RhdGUnLFxyXG4gICAgICAgICdhZGRlZDpub3RlJzogJ29uTm90ZUFkZGVkJyxcclxuICAgICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya0FkZGVkJyxcclxuICAgICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnb25MYXN0Tm90ZVJlbW92ZWQnLFxyXG4gICAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtSZW1vdmVkJ1xyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBlbDogbnVsbCxcclxuXHJcbiAgICBhdHRhY2hlZDogZmFsc2UsXHJcblxyXG4gICAgYnV0dG9uczoge1xyXG4gICAgICBub3Rlczoge1xyXG4gICAgICAgIGVsOiBudWxsLFxyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBib29rbWFyazoge1xyXG4gICAgICAgIGVsOiBudWxsLFxyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIHNob3duOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGJvb2ttYXJrOiBmYWxzZSxcclxuICAgIG5vdGVzOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTdGF0ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnYm1pY29uJykudGhlbihibWljb24gPT4ge1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ID0gYm1pY29uO1xyXG4gICAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdub3RlaWNvbicpLnRoZW4obm90ZWljb24gPT4gdGhpcy5idXR0b25zLm5vdGVzLnNob3cgPSBub3RlaWNvbik7XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBzaG91bGRBdHRhY2ggPVxyXG4gICAgICAgICh0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyAmJiB0aGlzLmJvb2ttYXJrKSB8fFxyXG4gICAgICAgICh0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyAmJiB0aGlzLm5vdGVzKTtcclxuXHJcbiAgICAgIGlmIChzaG91bGRBdHRhY2gpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuYXR0YWNoZWQgJiYgIXNob3VsZEF0dGFjaCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGxldCBidXR0b25zID0gdGhpcy5idXR0b25zLCBidG47XHJcblxyXG4gICAgICBpZiAoIXRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG11aScpO1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICBidG4gPSBidXR0b25zW2JdO1xyXG4gICAgICAgIGlmIChidG4uc2hvdyAmJiAhYnRuLnNob3duICYmIHRoaXNbYl0pIHRoaXMuYWRkQnV0dG9uKGIpO1xyXG4gICAgICAgIGVsc2UgaWYgKGJ0bi5zaG93biAmJiAoIXRoaXNbYl0gfHwgIWJ0bi5zaG93KSkgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFidXR0b25zLm5vdGVzLnNob3duICYmICFidXR0b25zLmJvb2ttYXJrLnNob3duKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hdHRhY2hlZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICAgICAgaWYgKGJ1dHRvbnNbYl0uc2hvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVCdXR0b24oYik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXVpKTtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVCdXR0b25zKCkge1xyXG4gICAgICBjb25zdCBub3Rlc0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ub3Rlcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVzdG9nZ2xlJyk7XHJcbiAgICAgIGNvbnN0IGJvb2ttYXJrQnV0dG9uID0gdGhpcy5idXR0b25zLmJvb2ttYXJrLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtYm0nKTtcclxuICAgICAgbm90ZXNCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndG9nZ2xlX25vdGVzJyk7XHJcbiAgICAgIGJvb2ttYXJrQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2JtX3Njcm9sbCcpO1xyXG4gICAgfSxcclxuICAgIGFkZEJ1dHRvbih0eXBlKSB7XHJcbiAgICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gYnRuLmhhbmRsZXIgPSB0eXBlID09PSAnbm90ZXMnID9cclxuICAgICAgICB0aGlzLnRvZ2dsZU5vdGVzLmJpbmQodGhpcykgOlxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgdG11aS5hcHBlbmRDaGlsZChidG4uZWwpO1xyXG4gICAgICBidG4uc2hvd24gPSB0cnVlO1xyXG5cclxuICAgICAgYnRuLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUJ1dHRvbih0eXBlKSB7XHJcbiAgICAgIGNvbnN0IHRtdWkgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBidG4gPSB0aGlzLmJ1dHRvbnNbdHlwZV07XHJcblxyXG4gICAgICB0bXVpLnJlbW92ZUNoaWxkKGJ0bi5lbCk7XHJcbiAgICAgIGJ0bi5zaG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgYnRuLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgICAgX1NUT1JFLmdldCgndG11aXBvcycpXHJcbiAgICAgICAgLnRoZW4ocG9zID0+IHRoaXMuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBvcy5zcGxpdCgnLScpLm1hcChwID0+IHAgKyAnOjFweDsnKS5qb2luKCcgJykpKTtcclxuICAgIH0sXHJcbiAgICBvbk5vdGVBZGRlZCgpIHtcclxuICAgICAgdGhpcy5ub3RlcyA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgb25MYXN0Tm90ZVJlbW92ZWQoKSB7XHJcbiAgICAgIHRoaXMubm90ZXMgPSBmYWxzZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICBvbkJvb2ttYXJrQWRkZWQoKSB7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uQm9va21hcmtSZW1vdmVkKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTm90ZXMoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVzJyk7XHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsVG9Cb29rbWFyaygpIHtcclxuICAgICAgdGhpcy5lbWl0KCdzY3JvbGwtdG8tYm9va21hcmsnKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2luamVjdGlvbicsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbicsXHJcblx0XHRcdCdmYWlsZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NhbmNlbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJyxcclxuICAgICAgJ2NhbmNlbGVkOnNhdmUtYWZ0ZXItY2FuY2VsZWQtcmVzdG9yYXRpb24nLFxyXG4gICAgICAnY29weTptYXJrcycsXHJcbiAgICAgICdzYXZlOmVudHJ5PycsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JyxcclxuICAgICAgJ2xvb2t1cDp3b3JkJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbicsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnLFxyXG4gICAgICAnY2xpY2tlZDptYXJrJyxcclxuICAgICAgJ2FjdGl2YXRlZDptYXJrJyxcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZScsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZScsXHJcbiAgICAgICd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyxcclxuICAgICAgJ3dhcm46bXVsdGlwbGUtdW5sb2NrZWQtZW50cmllcycsXHJcbiAgICAgICdwYWdlLXN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJyxcclxuICAgICAgJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9ET01NT0RVTEUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBvYmouX2JvdW5kID0ge307XHJcbiAgICBvYmouX2V4dHJhQm91bmQgPSBbXTtcclxuXHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnNNYW51YWxseSB8fCB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9