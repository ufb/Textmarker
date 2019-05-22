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
  _get_notetransp: function _get_notetransp() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.misc.notetransp;
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

      _store2["default"].get('notetransp').then(function (transp) {
        if (transp) bodyClasses.add('tmnotes--0_8');else bodyClasses.remove('tmnotes--0_8');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9hdXRvLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2Jvb2ttYXJrLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvY29udGV4dG1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXItcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9wYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9yZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3RtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfZW50cnkiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeVNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibWV0aCIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZFN0b3JhZ2UiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWwiLCJsb2NhbFN0b3JhZ2UiLCJsb2NhbEhpc3RvcnkiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9ibWljb24iLCJtaXNjIiwiYm1pY29uIiwiX2dldF9ub3RlaWNvbiIsIm5vdGVpY29uIiwiX2dldF9ub3Rlb25jbGljayIsIm5vdGVvbmNsaWNrIiwiX2dldF9ub3RldHJhbnNwIiwibm90ZXRyYW5zcCIsIl9nZXRfdG11aXBvcyIsInRtdWlwb3MiLCJfZ2V0X2F1dG9zYXZlIiwiYXV0b3NhdmUiLCJfZ2V0X2ltbXV0IiwiX2dldF9wcm9ncmVzc2JhciIsInByb2dyZXNzYmFyIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiX2dldF9tb2RlIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X25hbWluZyIsImJvb3RzdHJhcHBlZCIsInBvd2VyIiwib24iLCJoYW5kbGVyIiwibWFya2VyIiwidXBkYXRlIiwiX1NUT1JFIiwibWFya21ldGhvZCIsInNldE1hcmtlciIsImtleSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJsaXN0ZW5pbmciLCJzdGFydExpc3RlbmluZyIsInN0b3BMaXN0ZW5pbmciLCJvbk1vdXNldXAiLCJiaW5kIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwidG9TdHJpbmciLCJlbWl0IiwiX0JPT0tNQVJLIiwibWFyayIsImFuY2hvciIsIndyYXBwZXJzIiwidyIsImtleURhdGEiLCJib29rbWFyayIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYm0iLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImFjdGl2YXRlIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVtb3ZlTGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJidXR0b24iLCJ0YXJnZXQiLCJjb250YWlucyIsImdldEF0dHJpYnV0ZSIsIl9NQVJLIiwicHJlU2V0dGluZ3MiLCJkZWZhdWx0cyIsImlzSW1tdXQiLCJzdHlsZSIsImNvbmRzIiwidGV4dCIsIm5vdGUiLCJkIiwiaWRjb3VudCIsInNpbXBsZSIsInJhbmdlIiwic3RhcnRPZmZzZXQiLCJlbmRPZmZzZXQiLCJjb250YWluZXJzIiwiYW5jaG9yTm9kZVBvc2l0aW9uIiwiZm9jdXNOb2RlUG9zaXRpb24iLCJkZXNjcmliZV9pbW11dCIsIm5vZGVzIiwibiIsImNyZWF0ZVdyYXBwZXJzIiwibGFzdEluZGV4Iiwibm9kZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNldFN0YXJ0Iiwic2V0RW5kIiwic3Vycm91bmRDb250ZW50cyIsInB1c2giLCJwYXJlbnROb2RlIiwibm9ybWFsaXplIiwiZGVmaW5lUG9zaXRpb24iLCJzZXRCb29rbWFyayIsImRlc2NyaWJlIiwicmVnaXN0ZXJDbGlja0xpc3RlbmVycyIsIndyYXBwZXIiLCJwcm94eSIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImluY2x1ZGluZ09mZnNldHMiLCJmaXJzdFdyYXBwZXIiLCJsYXN0V3JhcHBlciIsImZpcnN0UGFyZW50IiwibGFzdFBhcmVudCIsImFuY2hvclByZXYiLCJmb2N1c1ByZXYiLCJ3aGljaENoaWxkIiwicHJldmlvdXNTaWJsaW5nIiwibm9kZVR5cGUiLCJkYXRhIiwiY29udGFpbmVyIiwicmVwbGFjZUNoaWxkIiwiZmlyc3RDaGlsZCIsInNlbGYiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb2xsZWN0Tm9kZXMiLCJjb2xsYXBzZVRvU3RhcnQiLCJjcmVhdGUiLCJwYXJlbnQiLCJjaGlsZCIsImluY2x1ZGluZ1RleHROb2RlcyIsImNoaWxkcmVuIiwiYyIsIm51bWJlciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic3RhcnQiLCJzdGFydENvbnRhaW5lciIsImVuZCIsImVuZENvbnRhaW5lciIsInNpbmdsZU5vZGUiLCJwYXJlbnRJc1RNIiwiaGFzQXR0cmlidXRlIiwiZ3JhbXBhIiwiZ3JhbmRncmFtcGEiLCJmVE5QIiwibyIsIm4xIiwibm9kZU5hbWUiLCJwMSIsIm4yIiwicDIiLCJwMyIsInA0Iiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiYW5jaG9yTm9kZSIsImZvY3VzTm9kZSIsInMiLCJwIiwiYXBwZW5kZWQiLCJoZWlnaHQiLCJwb3B1cCIsImVsIiwiYmdDb2xvclJlZ0V4cCIsImJnQ29sb3IiLCJjb2xvckJ0biIsIm0iLCJtYXRjaCIsImFwcGVuZENoaWxkIiwiYmFja2dyb3VuZCIsInBvcCIsInJlbW92ZUNoaWxkIiwic2hvdyIsInBvcHVwSGVpZ2h0Iiwib25Nb3VzZWRvd24iLCJzZWxlY3Rpb25Qb3NpdGlvbiIsImdldFJhbmdlQXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJvZmZzZXRIZWlnaHQiLCJwYXJzZUludCIsInByZXZlbnREZWZhdWx0Iiwic3BsaXQiLCJkb25lIiwidW5kb25lIiwidmlzdWFsbHlPcmRlcmVkTWFya3MiLCJ2aXN1YWxseU9yZGVyZWRNYXJrSURzIiwicmVtb3ZlZEJvb2ttYXJrIiwibWFya1Njcm9sbFBvcyIsInVwZGF0ZUlEIiwibCIsImlkcyIsIm1hcmtzIiwiY29uY2F0IiwibG9zdCIsIk1hdGgiLCJtYXgiLCJhcHBseSIsImF1dG9ub3RlIiwidW5kbyIsIm5vQXV0b3NhdmUiLCJ1bmRvQm9va21hcmsiLCJyZWRvIiwiY3V0T3V0IiwidG9CZVJlbW92ZWQiLCJpbmRpY2VzIiwic21hbGxlc3RJRCIsImZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzIiwiaiIsIngiLCJtYXJrc0ludGVyc2VjdCIsImluY2x1ZGVzIiwic29ydCIsInNoaWZ0IiwibWluIiwic3BsaWNlIiwiZ2V0QnlJZCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsImZvckVhY2giLCJhcmciLCJvcHRpb25zIiwiZGlzYWJsZWQiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGlnaGxpZ2h0IiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0Q29udGVudCIsInNpbGVudCIsImltbXV0YWJsZSIsInNhdmUiLCJyZXF1ZXN0IiwiZ3JhbnRlZCIsInN1YiIsImkxOG4iLCJnZXRNZXNzYWdlIiwicHJvbXB0IiwicmV0cmlldmVFbnRyeSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJjb3B5IiwiZmluZE1hcmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0cmltIiwic3RvcmUiLCJvcmRlciIsIm9yZGVyTWFya3NWaXN1YWxseSIsInJlY3JlYXRlIiwiX1NFTEVDVElPTiIsInByb2dyYW1tYXRpY2FsbHkiLCJvbkZpbmlzaGVkUmVzdG9yYXRpb24iLCJzdWJzdHJpbmciLCJfR0xPQkFMX1NFVFRJTkdTIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJnb3RvTWFyayIsInNvcnRCeUlkIiwic2Nyb2xsVG9Cb29rbWFyayIsIm9uQ2FuY2VsZWRSZXN0b3JhdGlvbiIsImFkZE5vdGUiLCJzYXZlTm90ZSIsIm1hcmtFbGVtZW50cyIsInBvcyIsImluZGljYXRlTWFyayIsImdvdG9OZXh0TWFyayIsImRpciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0bSIsInRtcyIsInNldCIsInJlbW92ZUJvb2ttYXJrIiwibWFyazEiLCJtYXJrMiIsIm0xIiwibTIiLCJiYjEiLCJiYjIiLCJ0b3AxIiwidG9wMiIsIm1hcCIsIndyYXBwZXJzMSIsIncxIiwiaWQxIiwid3JhcHBlcnMyIiwiaWQyIiwidzIiLCJvbk1hcmtlcktleSIsIm9uSG90a2V5IiwiY29sbGVjdE1hcmtzIiwibGFzdCIsIkRhdGUiLCJnZXRUaW1lIiwiYm9va21hcmtlZCIsInRpdGxlIiwiY291bnQiLCJmaXJzdCIsInVybCIsIlVSTCIsImtEIiwib25IYXNoQ2hhbmdlIiwiY29sb3IiLCJCT0RZIiwiRE9NIiwiY2xpY2siLCJrZXl1cCIsIm1vdXNlZG93biIsInRvdWNoc3RhcnQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsIm1hcmtDbGlja0hhbmRsZXIiLCJ2aXNpYmxlIiwicmVjZW50bHlVcGRhdGVkIiwic2V0dGluZ3NNb2RlIiwidCIsInNpemUiLCJoIiwiZHJhZ0RYIiwiZHJhZ0RZIiwibXV0YXRpb25PYnNlcnZlciIsImFkanVzdE5vdGVEYXRhT2JqZWN0IiwiY3JlYXRlTm90ZUVsZW1lbnQiLCJhZGRMaXN0ZW5lcnMiLCJhZGRNYXJrTGlzdGVuZXJzIiwibm90ZURhdGEiLCJoZWFkZXIiLCJhY3Rpb25zIiwiZGVsIiwiZ2VhciIsInBhbGV0dGUiLCJ0ZXh0RWxlbWVudCIsImRlbFRleHQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5UZXh0IiwiZ2VhclRleHQiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImF0dGVtcHRVcGRhdGUiLCJfZGVsZXRlIiwiaGlkZSIsInJlbW92ZU1hcmtMaXN0ZW5lcnMiLCJmb3JjZSIsImlubmVyV2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiZ2V0UG9zaXRpb24iLCJvZmZzZXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbm5lY3RNdXRhdGlvbk9ic2VydmVyIiwiYnJpbmdVcEZyb250IiwiekluZGV4IiwiZGlzY29ubmVjdCIsInRvZ2dsZSIsInRvZ2dsZVBhbGV0dGUiLCJjaGFuZ2VDb2xvciIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRhcmVhIiwiY29uZmlnIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwic2F2ZVNpemUiLCJvYnNlcnZlIiwicmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib25EcmFnU3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwib25EcmFnIiwib25EcmFnRW5kIiwibXV0YXRpb25zTGlzdCIsIndpZHRoIiwibm90ZXMiLCJkcmFnSGFuZGxlciIsImRyYWdTdG9wSGFuZGxlciIsInVwZGF0ZVRyYW5zcCIsIl9OT1RFIiwicmVzdG9yZSIsImFkZEFuZFNob3ciLCJyZW1vdmVOb3RlU3RvcmFnZSIsImlzRW1wdHkiLCJyZW1vdmVOb3RlIiwidG9nZ2xlQWxsIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJ0cmFuc3AiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwic3RhcnREcmFnZ2luZ05vdGUiLCJlbWl0RHJhZ0V2ZW50Iiwic3RvcERyYWdnaW5nTm90ZSIsImRvYyIsInNlbmROb3Rlc1N0YXRlIiwiaW5mbyIsImtleWRvd24iLCJzZWxlY3Rpb25jaGFuZ2UiLCJyZXRyeUFjdGl2ZSIsInNoaWZ0U2Vuc2l0aXZlS2V5cyIsInJlZ2lzdGVyZWRMb2FkSGFuZGxlciIsImtleUNvZGVNYXAiLCJzZXR1cCIsInJlYWR5U3RhdGUiLCJpc0lGcmFtZSIsImhhc2hsZXNzVVJMIiwiY2hlY2tVUkwiLCJpc0VkaXRhYmxlIiwidGFnTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImRlbGVnYXRlIiwidG9Mb3dlckNhc2UiLCJrZXlDb2RlIiwibW9kS2V5IiwibWV0YUtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsImFycm93S2V5cyIsImxvY2tlZEFjdGlvbnMiLCJmdW5jdGlvbktleXMiLCJkZWZhdWx0TWFya2VycyIsImlzQ29sbGFwc2VkIiwib3JpZ0tleSIsImlzTWFya2VyS2V5IiwiaXNDdXN0b21NYXJrZXJLZXkiLCJzZXR0aW5nIiwibG9va3VwIiwic2hvcnRjdXQiLCJzMSIsInMyIiwic2VsZWN0ZWRUZXh0Iiwib25VcmxGb3VuZCIsImZpbHRlckVudHJpZXMiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwiaXNBcnJheSIsImZpcnN0RW50cnkiLCJsb2NrZWRFbnRyaWVzIiwibG9ja2VkRW50cmllc0V4aXN0Iiwibm9uTG9ja2VkRW50cmllcyIsImEiLCJiIiwib25VcmxDaGFuZ2UiLCJ0YWIiLCJuZXdVcmwiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsInN0ZXBzIiwidG90YWxXaWR0aCIsImN1cnJlbnRXaWR0aCIsInN0ZXBMZW5ndGgiLCJjYW5jZWxIYW5kbGVyIiwibW9kYWwiLCJ0eXBlIiwibGVuIiwidG1wcm9ncmVzcyIsImNhbmNlbCIsImNsb3NlSGFuZGxlciIsInN0b3AiLCJ0bXByb2dyZXNzY2FuY2VsIiwidG1wcm9ncmVzc2Nsb3NlIiwicHJvZ3Jlc3MiLCJyZXN0b3JlZCIsImZhaWxlZCIsImZhaWx1cmVSZXBvcnQiLCJJbW11dFJlc3RvcmVyIiwiUmVzdG9yZXIiLCJyZXRyeSIsIm9uRmFpbHVyZSIsInJlcG9ydCIsImdldFJlcG9ydCIsIm1zZyIsInJlYXNvbiIsIlJlc3RvcmVyQmFzZSIsImFyZWEiLCJjYW5jZWxlZCIsInByb2MiLCJjYiIsInJlYyIsImV4cGlyZSIsImxsIiwidGVtcCIsInF1ZXVlIiwiY2FjaGUiLCJwaGFzZSIsInNlbGVjdGlvblRyaWFsIiwiY2h1bmtEdXJhdGlvbiIsIl90aW1lciIsIm9vbSIsImluaXQiLCJub3ciLCJwb3N0cG9uZWQiLCJjb252ZXJ0RGVzY3JpcHRpb24iLCJjcmVhdGVUZW1wT2JqZWN0IiwiY29udmVydGVkQ29uZHMiLCJmaXJzdE5vZGVOYW1lIiwiZmlyc3RQYXJlbnROb2RlTmFtZSIsImZpcnN0VGV4dE5vZGVQb3NpdGlvbiIsImZpcnN0Tm9kZVBvc2l0aW9uIiwiZmlyc3RQYXJlbnROb2RlUG9zaXRpb24iLCJmaXJzdEdyYW1wYU5vZGVQb3NpdGlvbiIsInRyaW1tZWRUZXh0Iiwic3F1ZWV6ZWRUZXh0Iiwic3F1ZWV6ZSIsInRleHRMZW5ndGgiLCJ0cmltbWVkVGV4dExlbmd0aCIsInNxdWVlemVkVGV4dExlbmd0aCIsInBvc3NpYmxlUG9zaXRpb25zIiwicG9zc2libGVFbmRQb3NpdGlvbnMiLCJwb3NzaWJsZVN0YXJ0Tm9kZXMiLCJwb3NzaWJsZUVuZHMiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0cyIsInNvcnRRdWV1ZUJ5SWQiLCJzZXRCb2R5U2VsZWN0aW9uIiwiZ2V0VGV4dFBvc2l0aW9ucyIsInBvc3Rwb25lT3ZlcmxhcHBpbmdzIiwiZmluZFBvc3NpYmxlRXh0cmVtYSIsInJ1bGVPdXRNdWx0aXBsZXMiLCJyZXN0b3JlUmFuZ2VzIiwidGltZXIiLCJyZXMiLCJ0cmltbWVkU2VsZWN0aW9uVGV4dCIsImFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJlbmRQb3NpdGlvbnMiLCJtYXJrVGVtcCIsInNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwibWF4UG9zaXRpb24iLCJwb3NpdGlvbnMiLCJwb3MxIiwicG9zMiIsInBvc3Rwb25lIiwiY3V0T3V0Rm9yIiwiYWxyZWFkeUluY2x1ZGVkIiwiYm9keVRleHROb2RlcyIsInNhdGlzZmllZCIsImNoYXJzIiwibmV4dFN0YXJ0Rm91bmQiLCJlbmRpbmdzSW5UaGlzTm9kZSIsIm5vZGVzVGV4dCIsIm5vZGVzVGV4dExlbmd0aCIsImRpZmYiLCJmIiwicSIsInBvc3NpYmxlRm9jdXNPZmZzZXQiLCJzdGFydEZvdW5kRm9yIiwiaGFzRW5kaW5nc0luVGhpc05vZGUiLCJlbmRGb3VuZEZvciIsInNhdGlzZmllc0Rlc2NyaXB0aW9uIiwiZmluZEZvY3VzT2Zmc2V0IiwiZ3JhbmRncmFuZGdyYW1wYSIsIm1hdGNoZXMiLCJzdGFydE5vZGUiLCJzdGFydE5vZGVQb3NpdGlvbiIsInNldE1hdGNoaW5nRW5kIiwiZW5kTm9kZSIsImVuZE5vZGVQb3NpdGlvbiIsImZvY3VzT2Zmc2V0IiwiZGVzY3JpcHRpb24iLCJyZWxldmFudE5vZGVUZXh0IiwibWFya1RleHQiLCJ0ZXh0c01hdGNoIiwibm9kZVRleHQiLCJjb3VudGVyIiwidGVzdCIsImNyZWF0ZVJhbmdlIiwicmVjb2xsZWN0Tm9kZXMiLCJzbGljZSIsImNvbnRleHQiLCJjdXJyZW50Q2hpbGQiLCJwcm9jZXNzSW5DaHVua3MiLCJyZXN0b3JlUmFuZ2UiLCJnZXROb2RlIiwidGV4dE5vZGVQb3NpdGlvbiIsInJhbmdlQ291bnQiLCJkZWZpbmVkIiwicmVkdWNlVG9PbmVSYW5nZSIsInJldHJpZXZlVGV4dCIsImFkanVzdCIsInNlbGVjdEFsbENoaWxkcmVuIiwicHJvcHMiLCJpc1NpbXBsZSIsImZvY3VzIiwiaXNCYWNrd2FyZHMiLCJyZXZlcnNlIiwiZmlyc3RUZXh0Tm9kZSIsImxhc3RUZXh0Tm9kZSIsInRyaW1MZWZ0IiwidHJpbVJpZ2h0Iiwid2hvbGVEb2N1bWVudCIsImdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwiZmlsdGVyIiwiaXNTZWxlY3RhYmxlIiwiaXNCbGFuayIsImhhc05vcm1hbFBhcmVudCIsImNvbnRhaW5zTm9kZSIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfVEVYVCIsImFjY2VwdE5vZGUiLCJ0ZW1wUmFuZ2UiLCJwYXJlbnROb2RlcyIsInRleHROb2RlIiwiZmlyc3ROb2RlIiwibGFzdE5vZGUiLCJuZXh0Tm9kZSIsInRyaW1TZWxlY3Rpb24iLCJyZWR1Y2VUb1NlbGVjdGFibGUiLCJjb2xsZWN0UGFyZW50Tm9kZXMiLCJtYXJrV3JhcHBlcnMiLCJuZXdTZWdtZW50IiwicHJldiIsIm5leHQiLCJuZXh0U2libGluZyIsInVuc2hpZnQiLCJhbmNob3JPZmZzZXQiLCJzdWJzdHIiLCJzZWwiLCJyZyIsInNlbGVjdE5vZGUiLCJwYXJlbnRzIiwibm9kZVRleHRzIiwiam9pbiIsIm5vZGUxIiwibm9kZTIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInJhbmdlMCIsImxhc3RSYW5nZSIsInRhZyIsInRvVXBwZXJDYXNlIiwiaXNDaGlsZE9mIiwic2VhcmNoIiwiYXR0YWNoZWQiLCJidXR0b25zIiwic2hvd24iLCJjcmVhdGVCdXR0b25zIiwidXBkYXRlU3RhdGUiLCJzaG91bGRBdHRhY2giLCJyZW5kZXIiLCJidG4iLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJ1cGRhdGVQb3NpdGlvbiIsInRtdWkiLCJub3Rlc0J1dHRvbiIsImJvb2ttYXJrQnV0dG9uIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJPTkVPRkYiLCJNQVhfTE9HX0VOVFJJRVMiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidmFsIiwicHJvcCIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImRvbUV2ZW50cyIsImdlbmVyYWxIYW5kbGVyIiwiX2V4dHJhIiwiZXJyb3IiLCJmaWxlIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJvYmoxIiwib2JqMiIsInRhYnMiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJhcmdzIiwidG9waWMiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibGFzdEFyZyIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0Iiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0Qs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QUE4QjtBQUM1QixhQUFLQyxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLem5CLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUt3bkIsT0FBdEIsQ0FBNUI7QUFDRDtBQUNGOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFNYixJQUFJLEdBQUcsS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYWx2QixPQUFPLENBQUN5dUIsT0FBUixDQUFnQnNCLE9BQWhCLENBQXdCO0FBQUV0eEIsWUFBSSxFQUFFLEtBQUtBO0FBQWIsT0FBeEIsQ0FBdEM7QUFDQXl3QixVQUFJLENBQUNlLFlBQUwsQ0FBa0JscUIsV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE1BQUksQ0FBQ21wQixJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCN08sRSxFQUFJO0FBQUE7O0FBQ3pCcmdCLGFBQU8sQ0FBQ3l1QixPQUFSLENBQWdCeUIsU0FBaEIsQ0FBMEJucUIsV0FBMUIsQ0FBc0MsVUFBQW1wQixJQUFJLEVBQUk7QUFDNUNBLFlBQUksQ0FBQ0MsU0FBTCxDQUFlcHBCLFdBQWYsQ0FBMkIsTUFBSSxDQUFDd0MsS0FBTCxDQUFXLE1BQVgsRUFBaUIsTUFBSSxDQUFDNm1CLFdBQXRCLENBQTNCO0FBQ0EsU0FBQy9PLEVBQUQsSUFBT0EsRUFBRSxFQUFUO0FBQ0QsT0FIRDtBQUlEOzs7O0VBbEZ3QjFpQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ3NldEFyZWFzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmhhc2hvcHQtc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYyc6ICdzZXRTeW5jRm9yRW50cnknLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJzogJ3JlbmFtZUVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdyZXN1bWUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9lbnRyeTogJ3N5bmMnLFxyXG5cclxuICBpZnJhbWU6IGZhbHNlLFxyXG4gIG5hbWU6IHVuZGVmaW5lZCxcclxuICBpc05ldzogdHJ1ZSxcclxuICAvL2VudHJ5OiBudWxsLFxyXG4gIGVudHJpZXM6IHt9LFxyXG4gIGxvY2tlZDogZmFsc2UsXHJcbiAgaGFzaFNlbnNpdGl2ZTogZmFsc2UsXHJcbiAgdG1pZDogJycsXHJcbiAgbm90ZUNvbG9yOiAneWVsbG93JyxcclxuICBpbW11dDogZmFsc2UsXHJcbiAgcmVkZXNjcmliaW5nOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xyXG4gIH0sXHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZW50cmllcyA9IHt9O1xyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy50bWlkID0gJyc7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVTdGF0dXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOZXcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG0taWRdJykpIHJldHVybjsvL3Nob3cgbm90aWZpY2F0aW9uXHJcblxyXG4gICAgdGhpcy5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzID8gc2V0dGluZ3MuaGlzdG9yeSA6IG51bGw7XHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcgPT09ICdtYXJrJztcclxuICAgICAgICB0aGlzLmhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaCA9PT0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldEFyZWFzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IHN0b3JhZ2Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzdG9yYWdlLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlbmFtZUVudHJ5KGVudHJ5LCBvbGROYW1lKSB7XHJcbiAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMubmFtZSA9PT0gb2xkTmFtZSAmJiAhdGhpcy5sb2NrZWQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gZW50cnkubmFtZTtcclxuICAgICAgaWYgKHRoaXMuZW50cmllc1tvbGROYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXRTeW5jRm9yRW50cnkoZW50cnkpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQgJiYgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXS5zeW5jZWQgPSBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlRW50cnkoZGVsZXRlZEVudHJ5KSB7XHJcbiAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGlmIChlbnRyaWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIG5hbWUgPT09IGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIGFkZEVudHJpZXMoZW50cmllcykge1xyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCkgdGhpcy5uYW1lID0gZW50cmllc1swXS5uYW1lO1xyXG4gICAgY29uc3QgZSA9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgZTsgaSsrKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTmV3ID0gZmFsc2U7XHJcbiAgICB0aGlzLmltbXV0ID0gISFlbnRyaWVzWzBdLmltbXV0O1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldEFyZWFzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfYm1pY29uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MuYm1pY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVpY29uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZW9uY2xpY2soKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3Rlb25jbGljaztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RldHJhbnNwKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfcHJvZ3Jlc3NiYXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5wcm9ncmVzc2JhcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcblxyXG5pbXBvcnQgX1BBR0UgZnJvbSAnLi9tb2R1bGVzL3BhZ2UnXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0IF9NQVJLRVIgZnJvbSAnLi9tb2R1bGVzL21hcmtlcidcclxuaW1wb3J0IF9QUk9HUkVTUyBmcm9tICcuL21vZHVsZXMvcHJvZ3Jlc3MnXHJcbmltcG9ydCBfUkVTVE9SRVIgZnJvbSAnLi9tb2R1bGVzL3Jlc3RvcmVyJ1xyXG5pbXBvcnQgX05PVEVTIGZyb20gJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0IF9UTVVJIGZyb20gJy4vbW9kdWxlcy90bXVpJ1xyXG5pbXBvcnQgX01BUktFUlBPUFVQIGZyb20gJy4vbW9kdWxlcy9tYXJrZXItcG9wdXAnXHJcbmltcG9ydCBfQVVUT01BUktFUiBmcm9tICcuL21vZHVsZXMvYXV0by1tYXJrZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ2F1dG9pbml0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2UuaGlzdG9yeSAmJiBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucG93ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcG93ZXIob24pIHtcclxuICAgIGlmICghb24gfHwgdGhpcy5ib290c3RyYXBwZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBfUEFHRSgpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1BST0dSRVNTKCk7XHJcbiAgICBfUkVTVE9SRVIoKTtcclxuICAgIF9NQVJLRVIoKTtcclxuICAgIF9OT1RFUygpO1xyXG4gICAgX1RNVUkoKTtcclxuICAgIF9NQVJLRVJQT1BVUCgpO1xyXG4gICAgX0FVVE9NQVJLRVIoKTtcclxuXHJcbiAgICB0aGlzLmJvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9fc3RvcmUnXHJcbmltcG9ydCAnLi9ib290c3RyYXAnXHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJzogJ3NldE1hcmtlcidcclxuICAgICAgfVxyXG5cdFx0fSxcclxuXHJcbiAgICBoYW5kbGVyOiBudWxsLFxyXG4gICAgbWFya2VyOiAnbScsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRNYXJrZXIoa2V5KSB7XHJcbiAgICAgIHRoaXMubWFya2VyID0ga2V5O1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZCAmJiAhdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkICYmIHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZXVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdG9wTGlzdGVuaW5nKCkge1xyXG4gICAgICBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTW91c2V1cCgpIHtcclxuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1lbmQnLCB0aGlzLm1hcmtlcik7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9CT09LTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXJrID0gbnVsbDtcclxuICAgIHRoaXMuYW5jaG9yID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldChtYXJrKSB7XHJcbiAgICBtYXJrID0gbWFyayB8fCB0aGlzLm1hcms7XHJcblxyXG4gICAgbGV0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG4gICAgICAgIGFuY2hvciA9IHdyYXBwZXJzWzBdO1xyXG5cclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IHRydWU7XHJcbiAgICBhbmNob3IuaWQgPSAndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuXHJcbiAgICB0aGlzLm1hcmsgPSBtYXJrO1xyXG4gICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGxldCBtYXJrID0gdGhpcy5tYXJrLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yLFxyXG4gICAgICAgIHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoO1xyXG5cclxuICAgIGFuY2hvci5pZCA9ICcnO1xyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG4gIH1cclxuICBzY3JvbGxJbnRvVmlldyhibSkge1xyXG4gICAgaWYgKGJtIHx8IChibSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSkpXHJcbiAgICAgIGJtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWN0aXZhdGUob24pIHtcclxuICAgICAgaWYgKG9uICYmICF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlZ2lzdGVySGFuZGxlcigpIHtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKSB7XHJcbiAgICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIF9TVE9SRS50bWlkID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB3aW5kb3cuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcmtlciwga2V5LCBwcmVTZXR0aW5ncywgaW1tdXQpIHtcclxuICAgIGxldCBzZWxlY3Rpb24sIGRlZmF1bHRzO1xyXG5cclxuXHRcdHRoaXMubWFya2VyID0gbWFya2VyO1xyXG5cdFx0c2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBtYXJrZXIuc2VsZWN0aW9uO1xyXG4gICAgdGhpcy5pbW11dCA9IF9TVE9SRS5yZWRlc2NyaWJpbmcgPyBtYXJrZXIuaXNJbW11dCA6IGltbXV0O1xyXG5cclxuICAgIGRlZmF1bHRzID0ge1xyXG4gICAgICBzdHlsZTogJycsXHJcbiAgICAgIGJvb2ttYXJrOiBmYWxzZSxcclxuICAgICAgY29uZHM6IG51bGwsXHJcbiAgICAgIHRleHQ6IHNlbGVjdGlvbi50ZXh0LFxyXG4gICAgICBub3RlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZCBpbiBkZWZhdWx0cykge1xyXG4gICAgICBpZiAoIXByZVNldHRpbmdzLmhhc093blByb3BlcnR5KGQpKSB7XHJcbiAgICAgICAgcHJlU2V0dGluZ3NbZF0gPSBkZWZhdWx0c1tkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlU2V0dGluZ3MuaWQgPSBwcmVTZXR0aW5ncy5pZCB8fCArK21hcmtlci5pZGNvdW50O1xyXG5cdFx0dGhpcy5pZCA9IHByZVNldHRpbmdzLmlkO1xyXG5cdFx0dGhpcy5zaW1wbGUgPSBzZWxlY3Rpb24uc2ltcGxlO1xyXG5cclxuXHRcdGxldCByYW5nZSA9IHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24ucmFuZ2U7XHJcblxyXG5cdFx0dGhpcy5zdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0O1xyXG5cdFx0dGhpcy5lbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXQ7XHJcblxyXG5cdFx0dGhpcy53cmFwcGVycyA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcclxuXHJcblx0XHR0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IG51bGw7XHJcblx0XHR0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmtleURhdGEgPSB7XHJcblx0XHRcdGlkOiBwcmVTZXR0aW5ncy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdHN0eWxlOiBwcmVTZXR0aW5ncy5zdHlsZSxcclxuXHRcdFx0Y29uZHM6IHByZVNldHRpbmdzLmNvbmRzLFxyXG5cdFx0XHR0ZXh0OiBwcmVTZXR0aW5ncy50ZXh0LFxyXG5cdFx0XHRib29rbWFyazogcHJlU2V0dGluZ3MuYm9va21hcmssXHJcbiAgICAgIG5vdGU6IHByZVNldHRpbmdzLm5vdGUsXHJcbiAgICAgIHN5bmNlZDogcHJlU2V0dGluZ3Muc3luY2VkXHJcblx0XHR9O1xyXG5cclxuICAgIGlmICh0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB7XHJcbiAgICAgIHRoaXMuZGVzY3JpYmVfaW1tdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cdGNyZWF0ZShyYW5nZSkge1xyXG4gICAgcmFuZ2UgPSByYW5nZSB8fCB0aGlzLnJhbmdlO1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIHN0eWxlID0gdGhpcy5rZXlEYXRhLnN0eWxlLFxyXG4gICAgICAgIG5vZGVzID0gc2VsZWN0aW9uLm5vZGVzLFxyXG4gICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzID0gdGhpcy53cmFwcGVycyB8fCB0aGlzLmNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBuKSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBsYXN0SW5kZXggPSBuIC0gMSxcclxuICAgICAgICBub2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgICBpZiAoIWkpIHJhbmdlLnNldFN0YXJ0KG5vZGUsIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG5cclxuICAgICAgaWYgKGkgPT09IGxhc3RJbmRleClcclxuICAgICAgICByYW5nZS5zZXRFbmQobm9kZSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgICAgcmFuZ2Uuc3Vycm91bmRDb250ZW50cyh3cmFwcGVyc1tpXSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKHdyYXBwZXJzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgICAgbm9kZS5wYXJlbnROb2RlLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24obGFzdEluZGV4KTtcclxuXHJcbiAgICBpZiAodGhpcy5rZXlEYXRhLmJvb2ttYXJrKSB0aGlzLm1hcmtlci5zZXRCb29rbWFyayh0aGlzLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB0aGlzLmRlc2NyaWJlKCk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlckNsaWNrTGlzdGVuZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG4gIHJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hcmtlci5wcm94eSh0aGlzLCB0aGlzLm9uQ2xpY2spLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uQ2xpY2soZSkge1xyXG4gICAgbGV0IGV2ZW50O1xyXG4gICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgIGV2ZW50ID0gJ2NsaWNrZWQ6bWFyayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUgKyAnXzAnO1xyXG4gICAgICBldmVudCA9ICdhY3RpdmF0ZWQ6bWFyayc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hcmtlci5lbWl0KGV2ZW50LCB7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBib29rbWFyazogISF0aGlzLmtleURhdGEuYm9va21hcmssXHJcbiAgICAgIG5vdGU6ICEhdGhpcy5rZXlEYXRhLm5vdGVcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWZpbmVQb3NpdGlvbihuLCBpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICBsZXQgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgbiA9IHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gOiB3cmFwcGVycy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgZmlyc3RXcmFwcGVyID0gd3JhcHBlcnNbMF07XHJcbiAgICBjb25zdCBsYXN0V3JhcHBlciA9IHdyYXBwZXJzW25dO1xyXG4gICAgY29uc3QgZmlyc3RQYXJlbnQgPSBmaXJzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGxhc3RQYXJlbnQgPSBsYXN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgbGV0IGFuY2hvclByZXYsIGZvY3VzUHJldjtcclxuXHJcbiAgICB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChmaXJzdFBhcmVudCwgZmlyc3RXcmFwcGVyLCB0cnVlKSAtIDE7XHJcbiAgICB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGxhc3RQYXJlbnQsIGxhc3RXcmFwcGVyLCB0cnVlKTtcclxuXHJcbiAgICBhbmNob3JQcmV2ID0gZmlyc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuICAgIGZvY3VzUHJldiA9IGxhc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICBpZiAoYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2Lm5vZGVUeXBlID09PSAxKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiArPSAxO1xyXG4gICAgaWYgKCFmb2N1c1ByZXYgfHwgZm9jdXNQcmV2Lm5vZGVUeXBlID09PSAzIHx8IGZpcnN0UGFyZW50ID09PSBsYXN0UGFyZW50KSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIC09IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSAwO1xyXG4gICAgaWYgKHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gMDtcclxuXHJcbiAgICBpZiAoaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2LmRhdGEgPyBhbmNob3JQcmV2LmRhdGEubGVuZ3RoIDogMDtcclxuICAgICAgdGhpcy5lbmRPZmZzZXQgPSB0aGlzLnNpbXBsZSA/IHRoaXMuc3RhcnRPZmZzZXQgKyB0aGlzLmtleURhdGEudGV4dC5sZW5ndGggOiB0aGlzLmVuZE9mZnNldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKHVuZGVmaW5lZCwgdHJ1ZSlcclxuICAgICAgICAuZGVzY3JpYmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblx0dW5kbygpIHtcclxuXHRcdGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG5cdFx0XHRcdHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyxcclxuXHRcdFx0XHR3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG5cdFx0XHRcdGNvbnRhaW5lciwgd3JhcHBlcjtcclxuXHJcblx0XHR3aGlsZSAody0tKSB7XHJcblx0XHRcdGNvbnRhaW5lciA9IGNvbnRhaW5lcnNbd107XHJcblx0XHRcdHdyYXBwZXIgPSB3cmFwcGVyc1t3XTtcclxuXHRcdFx0Y29udGFpbmVyLnJlcGxhY2VDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xyXG5cdFx0XHRjb250YWluZXIubm9ybWFsaXplKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cmVkbygpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGNvbnRhaW5lcnNbMF0uY2hpbGROb2Rlc1t0aGlzLmFuY2hvck5vZGVQb3NpdGlvbl0sIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGNvbnRhaW5lcnNbY29udGFpbmVycy5sZW5ndGggLSAxXS5jaGlsZE5vZGVzW3RoaXMuZm9jdXNOb2RlUG9zaXRpb25dLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbi5jb2xsZWN0Tm9kZXMoKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoKTtcclxuXHR9XHJcblx0d2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBpbmNsdWRpbmdUZXh0Tm9kZXMpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdFx0bGV0IGNoaWxkcmVuID0gaW5jbHVkaW5nVGV4dE5vZGVzIHx8IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHRcdFx0YyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdFx0XHRpID0gMDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG5cdGNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBudW1iZXIpIHtcclxuXHRcdGxldCB3cmFwcGVycyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHdyYXBwZXI7XHJcblxyXG5cdFx0Zm9yICggOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuXHRcdFx0d3JhcHBlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1oaWdobGlnaHQnKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUucmVwbGFjZSgvOy9nLCAnIWltcG9ydGFudDsnKSk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJywgdGhpcy5pZCArICdfJyArIGkpO1xyXG4gICAgICAvL3dyYXBwZXIuc2V0QXR0cmlidXRlKCdjb250ZXh0bWVudScsICd0ZXh0bWFya2VyLWN0bScpO1xyXG5cdFx0XHR3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdyYXBwZXJzO1xyXG5cdH1cclxuICBkZXNjcmliZSgpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG5cdFx0Y29uc3Qgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IHNpbmdsZU5vZGUgPSB0aGlzLnNpbXBsZTtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMud3JhcHBlcnNbMF0ucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHBhcmVudElzVE0gPSBwYXJlbnQuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcblx0XHRjb25zdCBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGdyYW5kZ3JhbXBhID0gZ3JhbXBhLnBhcmVudE5vZGUgfHwgMDtcclxuXHRcdGNvbnN0IGZUTlAgPSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbjtcclxuXHJcblx0XHR0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcblx0XHRcdG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcblx0XHRcdG4xOiBwYXJlbnRJc1RNID8gJ1RNJyA6IHBhcmVudC5ub2RlTmFtZSxcclxuXHRcdFx0cDE6IGZUTlAsXHJcblx0XHRcdG4yOiBncmFtcGEubm9kZU5hbWUsXHJcblx0XHRcdHAyOiB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpLFxyXG5cdFx0XHRwMzogZ3JhbmRncmFtcGEgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEsIGdyYW1wYSkgOiB1bmRlZmluZWQsXHJcblx0XHRcdHA0OiBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUsIGdyYW5kZ3JhbXBhKSA6IHVuZGVmaW5lZFxyXG5cdFx0fTtcclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcblx0fVxyXG4gIGRlc2NyaWJlX2ltbXV0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBlbmRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgbGV0IHN0YXJ0ID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZW5kID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQgIT09IGJvZHkpIHtcclxuICAgICAgc3RhcnRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChzdGFydC5wYXJlbnROb2RlLCBzdGFydCkpO1xyXG4gICAgICBzdGFydCA9IHN0YXJ0LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoZW5kICE9PSBib2R5KSB7XHJcbiAgICAgIGVuZFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKGVuZC5wYXJlbnROb2RlLCBlbmQpKTtcclxuICAgICAgZW5kID0gZW5kLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgbzogdGhpcy5zdGFydE9mZnNldCxcclxuICAgICAgICBwOiBzdGFydFBvc2l0aW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIGU6IHtcclxuICAgICAgICBvOiB0aGlzLmVuZE9mZnNldCxcclxuICAgICAgICBwOiBlbmRQb3NpdGlvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuXHRcdH0sXHJcblxyXG4gICAgaGFuZGxlcjogbnVsbCxcclxuICAgIGFwcGVuZGVkOiBmYWxzZSxcclxuICAgIGhlaWdodDogMCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKS50aGVuKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAncG9wdXAnO1xyXG4gICAgICAgIHRoaXMubWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXAnKTtcclxuICAgICAgY29uc3QgYmdDb2xvclJlZ0V4cCA9IC9iYWNrZ3JvdW5kLWNvbG9yOigjW2EtZjAtOV17Nn0pLztcclxuICAgICAgbGV0IGJnQ29sb3IsIGNvbG9yQnRuO1xyXG4gICAgICBmb3IgKGxldCBtIGluIHRoaXMubWFya2Vycykge1xyXG4gICAgICAgIGJnQ29sb3IgPSB0aGlzLm1hcmtlcnNbbV0uc3R5bGUubWF0Y2goYmdDb2xvclJlZ0V4cCk7XHJcbiAgICAgICAgaWYgKGJnQ29sb3IpIHtcclxuICAgICAgICAgIGNvbG9yQnRuID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXBjb2xvcicpO1xyXG4gICAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JCdG4pO1xyXG4gICAgICAgICAgY29sb3JCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3IucG9wKCk7XHJcbiAgICAgICAgICBjb2xvckJ0bi5pZCA9ICd0bXBvcHVwY29sb3ItLScgKyBtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBwb3B1cC5zdHlsZTtcclxuICAgICAgbGV0IHBvcHVwSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBzdHlsZS50b3AgPSBzZWxlY3Rpb25Qb3NpdGlvbi50b3AgLSBzZWxlY3Rpb25Qb3NpdGlvbi5oZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSArICdweCc7XHJcbiAgICAgICAgc3R5bGUubGVmdCA9IHNlbGVjdGlvblBvc2l0aW9uLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCArICdweCc7XHJcblxyXG4gICAgICAgIHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApIC0gcG9wdXBIZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodCkgIT09IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSArIHBvcHVwSGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gcG9wdXBIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZCkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Nb3VzZWRvd24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ1RNUE9QVVBDT0xPUicpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJywgZWwuaWQuc3BsaXQoJy0tJykucG9wKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUksgZnJvbSAnLi9tYXJrLWl0ZW0nXHJcbmltcG9ydCBfQk9PS01BUksgZnJvbSAnLi9ib29rbWFyaydcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAvLyBtYXJrZXIgbW9kdWxlXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG5cdFx0XHRFTlY6IHtcclxuXHRcdFx0XHQnc2V0OmVudHJpZXMnOiAndXBkYXRlSUQnLFxyXG5cdFx0XHRcdCdwcmVzc2VkOm1hcmtlci1rZXknOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdwcmVzc2VkOmhvdGtleSc6ICdvbkhvdGtleScsXHJcbiAgICAgICAgJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnc2VsZWN0aW9uLWVuZCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3Jlc3RvcmVkOnJhbmdlJzogJ3JlY3JlYXRlJyxcclxuICAgICAgICAnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucyc6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdjYW5jZWxlZDpyZXN0b3JhdGlvbic6ICdvbkNhbmNlbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICAgJ2N0eDotYic6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICAgJ2N0eDpkJzogJ3JlbW92ZScsXHJcbiAgICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnY3R4Om4nOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ2N0eDpjJzogJ2NvcHknLFxyXG4gICAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdjaGFuZ2VkOm5vdGUtY29sb3InOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgICAnY2hhbmdlZDpub3RlLXNpemUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdzaWRlYmFyOmhpZ2hsaWdodCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAgICdzaWRlYmFyOmJvb2ttYXJrJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6aW1tdXQnOiAnaW1tdXQnLFxyXG4gICAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcyc6ICdzYXZlJyxcclxuICAgICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAgICdzaWRlYmFyOnVuZG8nOiAndW5kbycsXHJcbiAgICAgICAgJ3NpZGViYXI6cmVkbyc6ICdyZWRvJyxcclxuICAgICAgICAnc2lkZWJhcjpjb3B5JzogJ2NvcHknLFxyXG4gICAgICAgICdzaWRlYmFyOm5leHQtbWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICAgJ2hhc2hjaGFuZ2UnOiAnb25IYXNoQ2hhbmdlJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0aW9uOiBudWxsLFxyXG5cdFx0ZG9uZTogW10sXHJcblx0XHR1bmRvbmU6IFtdLFxyXG5cdFx0dmlzdWFsbHlPcmRlcmVkTWFya3M6IFtdLFxyXG5cdFx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgICBib29rbWFyazogbnVsbCxcclxuICAgIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRcdGlkY291bnQ6IDAsXHJcblx0XHRtYXJrU2Nyb2xsUG9zOiAtMSxcclxuXHJcbiAgICB1cGRhdGVJRChlbnRyaWVzKSB7XHJcbiAgICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgICAgY29uc3QgaWRzID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG5cclxuICAgICAgICBpZiAoIWxvY2tlZCAmJiBlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG1hcmtzID0gKGVudHJ5Lm1hcmtzIHx8IFtdKS5jb25jYXQoZW50cnkubG9zdCB8fCBbXSksXHJcbiAgICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoZCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoZC0tKSB7XHJcbiAgICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaWRjb3VudCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGlkcyk7XHJcbiAgICB9LFxyXG5cdFx0bWFyayhrZXksIGRhdGEsIGltbXV0KSB7XHJcblx0XHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgaWYgKGRhdGEuYXV0b25vdGUpIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCBtYXJrLCBkYXRhLmF1dG9ub3RlKTtcclxuXHJcblx0XHRcdHJldHVybiBtYXJrO1xyXG5cdFx0fSxcclxuXHRcdHVuZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0XHRpZiAoZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgdGhpcy51bmRvbmUucHVzaChtYXJrLnVuZG8oKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvb2ttYXJrKSB0aGlzLnVuZG9Cb29rbWFyaygpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHR9LFxyXG5cdFx0cmVkbyhub0F1dG9zYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0XHRpZiAodW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCBbbWFya10pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdH0sXHJcbiAgICBjdXRPdXQoaSkge1xyXG4gICAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICAgIGluZGljZXMgPSBbaV0sXHJcbiAgICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICAgIGZvciAodmFyIHggPSBqICsgMTsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRvQmVSZW1vdmVkLmluY2x1ZGVzKHgpKSB0b0JlUmVtb3ZlZC5wdXNoKHgpO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgICAgfVxyXG4gICAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lLnNwbGljZSh0b0JlUmVtb3ZlZC5wb3AoKSwgMSlbMF0udW5kbygpO1xyXG4gICAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc21hbGxlc3RJRDtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGlkID0gaWQgPyBpZCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcbiAgICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICAgIGxldCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkLnNwbGl0KCdfJylbMF0pLFxyXG4gICAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICAgIHBvc2l0aW9uID0gZG9uZS5pbmRleE9mKG1hcmspLFxyXG4gICAgICAgICAgc21hbGxlc3RJRCwgaTtcclxuXHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgICB0aGlzLnVuZG8oKTtcclxuICAgICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKHRoaXMudW5kb25lLmxlbmd0aCkgdGhpcy5yZWRvKHRydWUpO1xyXG5cclxuICAgICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkWzBdKTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICAgIF9TVE9SRS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgLy8gd2hpbGUgKHRoaXMuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgLy8gICB0aGlzLnVuZG8odHJ1ZSk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKVxyXG4gICAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBoaWdobGlnaHQucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGlnaGxpZ2h0LnRleHRDb250ZW50KSwgaGlnaGxpZ2h0KTtcclxuICAgICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZG9uZSA9IFtdO1xyXG4gICAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gW107XHJcbiAgICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IFtdO1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSAtMTtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdyZXN1bWVkOm1hcmtlcnMnLCBlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICAgIHRoaXMuaXNJbW11dCA9IGltbXV0YWJsZTtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IHRydWU7XHJcbiAgICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIH0sXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICBpZiAoX1NUT1JFLmRpc2FibGVkKSByZXR1cm4gdGhpcy5lbWl0KCdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyk7XHJcblxyXG4gICAgICBjb25zdCBpZnJhbWUgPSBfU1RPUkUuaWZyYW1lO1xyXG4gICAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICAgIGlmIChfU1RPUkUuaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgICAgICBpZiAoIWxvY2tlZCAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9TVE9SRS5uYW1lKSB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlybWVkID0gdHJ1ZTtcclxuXHQgICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG5cdCAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuXHQgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHRcdH0sXHJcbiAgICBhdXRvc2F2ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCd1bnNhdmVkLWNoYW5nZXMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29weSgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZmluZE1hcmsoKTtcclxuICAgICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNvbnN0IHJhbmdlID0gbWFyay5yYW5nZTtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gbWFyay5zZWxlY3Rpb24uc2VsZjtcclxuICAgICAgY29uc3Qgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzO1xyXG5cclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQod3JhcHBlcnNbMF0sIDApO1xyXG4gICAgICByYW5nZS5zZXRFbmQod3JhcHBlcnNbd3JhcHBlcnMubGVuZ3RoIC0gMV0sIDEpO1xyXG4gICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzZWxlY3Rpb24udG9TdHJpbmcoKS50cmltKCkucmVwbGFjZSgvKFxcclxcbil7MSx9L2csICdcXHJcXG4nKSk7XHJcbiAgICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuICAgIH0sXHJcbiAgICBzdG9yZShtYXJrLCBzYXZlLCBvcmRlcikge1xyXG5cdFx0XHR0aGlzLmRvbmUucHVzaChtYXJrKTtcclxuICAgICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHRcdGlmIChvcmRlcikgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHRcdH0sXHJcbiAgICByZWNyZWF0ZShtYXJrKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04obnVsbCwgeyBwcm9ncmFtbWF0aWNhbGx5OiB0cnVlIH0pO1xyXG4gICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIGZhbHNlLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBpZiAoIXRoaXMuZG9uZS5sZW5ndGgpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgdGhpcy5kb25lKTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKF9TVE9SRS5uYW1lID09PSBtYXJrLmtleURhdGEudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSkge1xyXG4gICAgICAgICAgdGhpcy5nb3RvTWFyayhtYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zb3J0QnlJZCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyaygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblxyXG4gICAgICBpZiAoX1NUT1JFLnJlZGVzY3JpYmluZykge1xyXG4gICAgICAgIF9TVE9SRS5yZWRlc2NyaWJpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2FuY2VsZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgX1NUT1JFLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGROb3RlKGlkKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCB0aGlzLmZpbmRNYXJrKGlkKSk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZU5vdGUoaWQpIHtcclxuICAgICAgaWYgKCFfU1RPUkUubG9ja2VkKSByZXR1cm4gdGhpcy5hdXRvc2F2ZSgpO1xyXG5cclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZ2V0QnlJZChpZCkua2V5RGF0YTtcclxuICAgICAgY29uc3Qgc3luY2VkID0gdHlwZW9mIG1hcmsuc3luY2VkID09PSAnYm9vbGVhbicgPyBtYXJrLnN5bmNlZCA6IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICAgIG1hcmtzOiBbbWFya10sXHJcbiAgICAgICAgbmFtZTogbWFyay50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpLFxyXG4gICAgICAgIHN5bmNlZFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCBlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgZ290b01hcmsobWFyaykge1xyXG4gICAgICBjb25zdCBtYXJrRWxlbWVudHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzO1xyXG4gICAgICBsZXQgZWwsIHBvcywgaWQ7XHJcbiAgICAgIGlmIChtYXJrIHx8IG1hcmsgPT09IDApIHtcclxuICAgICAgICBpZiAodHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSBtYXJrICsgMTtcclxuICAgICAgICAgIGVsID0gbWFya0VsZW1lbnRzW21hcmtdO1xyXG4gICAgICAgICAgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKS5zcGxpdCgnXycpWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcbiAgICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkPVwiJyArIGlkICsgJ18wXCJdJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvcyA9IHRoaXMubWFya1Njcm9sbFBvcztcclxuICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1twb3NdO1xyXG4gICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuXHJcblx0XHRcdGlmICghbWFyayB8fCB0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHRoaXMuZ2V0QnlJZChpZCkub25DbGljayhpZCk7XHJcbiAgICAgIHRoaXMuaW5kaWNhdGVNYXJrKGlkKTtcclxuICAgIH0sXHJcblx0XHRnb3RvTmV4dE1hcmsoZGlyKSB7XHJcblx0XHRcdGNvbnN0IGwgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLmxlbmd0aDtcclxuXHJcblx0XHRcdHRoaXMubWFya1Njcm9sbFBvcyArPSBkaXI7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5tYXJrU2Nyb2xsUG9zIDwgMCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbCAtIDE7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMubWFya1Njcm9sbFBvcyA+PSBsKSB0aGlzLm1hcmtTY3JvbGxQb3MgPSAwO1xyXG5cclxuXHRcdFx0dGhpcy5nb3RvTWFyaygpO1xyXG5cdFx0fSxcclxuICAgIGluZGljYXRlTWFyayhpZCkge1xyXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpXHJcbiAgICAgICAgLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICAgIGNvbnN0IHRtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWRePVwiJyArIGlkICsgJ19cIl0nKSk7XHJcblxyXG4gICAgICB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKSwgMjAwMCk7XHJcbiAgICB9LFxyXG4gICAgc2V0Qm9va21hcmsobSwgc2F2ZSkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyayxcclxuICAgICAgICAgIG1hcmsgPSB0aGlzLmZpbmRNYXJrKG0pO1xyXG5cclxuICAgICAgaWYgKCFtYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoYm9va21hcmspIHtcclxuICAgICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib29rbWFyayA9IG5ldyBfQk9PS01BUksoKS5zZXQobWFyayk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2FkZGVkOmJvb2ttYXJrJyk7XHJcbiAgICAgIGlmIChzYXZlICE9PSBmYWxzZSkgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgfSxcclxuICAgIHVuZG9Cb29rbWFyaygpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUJvb2ttYXJrKCkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICAgIGlmICghYm9va21hcmspIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBib29rbWFyaztcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgIH0sXHJcbiAgICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgICAgaWYgKGJvb2ttYXJrKSBib29rbWFyay5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgfSxcclxuICAgIGdldEJ5SWQoaWQsIHBvcykge1xyXG5cdFx0XHRsZXQgZG9uZSA9IHRoaXMuZG9uZSxcclxuXHRcdFx0XHQgIGQgPSBkb25lLmxlbmd0aCxcclxuXHRcdFx0XHQgIG1hcms7XHJcblxyXG5cdFx0XHR3aGlsZSAoZC0tKSB7XHJcblx0XHRcdFx0bWFyayA9IGRvbmVbZF07XHJcblxyXG5cdFx0XHRcdGlmIChtYXJrLmtleURhdGEuaWQgPT0gaWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBtYXJrLCBwb3NpdGlvbjogZCB9IDogbWFyaztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBudWxsLCBwb3NpdGlvbjogbnVsbCB9IDogZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0ZmluZE1hcmsoeCkge1xyXG5cdFx0XHR4ID0geCA/IHggOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG5cdFx0XHRsZXQgbWFyayA9ICF4ID9cclxuXHRcdFx0XHR0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdIDpcclxuXHRcdFx0XHRcdHR5cGVvZiB4ID09PSAnc3RyaW5nJyA/XHJcblx0XHRcdFx0dGhpcy5nZXRCeUlkKHguc3BsaXQoJ18nKVswXSkgOlxyXG5cdFx0XHRcdHg7XHJcblx0XHRcdHJldHVybiBtYXJrO1xyXG5cdFx0fSxcclxuICAgIHNvcnRCeUlkKCkge1xyXG4gICAgICB0aGlzLmRvbmUuc29ydCgobWFyazEsIG1hcmsyKSA9PiBtYXJrMS5pZCAtIG1hcmsyLmlkKTtcclxuICAgIH0sXHJcblx0XHRvcmRlck1hcmtzVmlzdWFsbHkoKSB7XHJcblx0XHRcdHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkJD1cIl8wXCJdJykpLnNvcnQoKG0xLCBtMikgPT4ge1xyXG5cdFx0XHRcdGxldCBiYjEgPSBtMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdFx0YmIyID0gbTIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRcdHRvcDEgPSBiYjEudG9wLFxyXG5cdFx0XHRcdFx0XHR0b3AyID0gYmIyLnRvcDtcclxuXHJcblx0XHRcdFx0aWYgKHRvcDEgPCB0b3AyKSByZXR1cm4gLTE7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9wMiA8IHRvcDEpIHJldHVybiAxO1xyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGJiMS5sZWZ0IDwgYmIyLmxlZnQpIHJldHVybiAtMTtcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcbiAgICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubWFwKG1hcmsgPT4gcGFyc2VJbnQobWFyay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Zpc3VhbGx5LW9yZGVyZWQ6bWFya3MnLCB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMpO1xyXG5cdFx0fSxcclxuICAgIG1hcmtzSW50ZXJzZWN0KG1hcmsxLCBtYXJrMikge1xyXG5cdFx0XHRsZXQgd3JhcHBlcnMxID0gbWFyazEud3JhcHBlcnMsXHJcbiAgICAgICAgICB3MSA9IHdyYXBwZXJzMS5sZW5ndGgsXHJcbiAgICAgICAgICBpZDEgPSBtYXJrMS5pZCxcclxuICAgICAgICAgIHdyYXBwZXJzMiA9IG1hcmsyLndyYXBwZXJzLFxyXG4gICAgICAgICAgaWQyID0gbWFyazIuaWQsXHJcbiAgICAgICAgICB3MiwgdG1zLCBsO1xyXG5cclxuICAgICAgd2hpbGUgKHcxLS0pIHtcclxuICAgICAgICB3MiA9IHdyYXBwZXJzMi5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHcyLS0pIHtcclxuICAgICAgICAgIHRtcyA9IHdyYXBwZXJzMVt3MV0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG0taWRdJyk7XHJcbiAgICAgICAgICBsID0gdG1zLmxlbmd0aDtcclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWYgKHRtc1tsXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKVswXSA9PSBpZDIpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdH0sXHJcbiAgICBvbk1hcmtlcktleShlLCBrZXkpIHtcclxuXHRcdFx0bGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oKTtcclxuXHJcblx0XHRcdGlmICghc2VsZWN0aW9uLm5vZGVzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoZSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGtleSA9IGU7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLnByZXZlbnREZWZhdWx0KGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGtleSA9IGtleSB8fCAnbSc7XHJcblx0XHRcdH1cclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgaWYgKF9TVE9SRS5pc05ldykge1xyXG4gICAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogISFzZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBfU1RPUkUuaW1tdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKGtleSwgc2V0dGluZ3MubWFya2Vyc1trZXldLCB0aGlzLmlzSW1tdXQpLCB0cnVlLCB0cnVlKTtcclxuICAgICAgfSk7XHJcblx0XHR9LFxyXG4gICAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgc3dpdGNoKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3onOiBzZWxmLnVuZG8oKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneSc6IHNlbGYucmVkbygpOyBicmVhaztcclxuICAgICAgICBjYXNlICdzJzogc2VsZi5zYXZlKCk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2InOiBzZWxmLnNldEJvb2ttYXJrKCk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2Fycm93dXAnOiBzZWxmLmdvdG9OZXh0TWFyaygtMSk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2Fycm93ZG93bic6IHNlbGYuZ290b05leHRNYXJrKDEpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlICdkJzogc2VsZi5yZW1vdmUoKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYyc6IHNlbGYuY29weSgpOyBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdFx0aWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdHJldHJpZXZlRW50cnkoKSB7XHJcbiAgICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgICBjb25zdCBuYW1lID0gX1NUT1JFLm5hbWU7XHJcblxyXG4gICAgICBjb25zdCBlbnRyeSA9ICFsb2NrZWQgJiYgX1NUT1JFLmVudHJpZXNbbmFtZV0gPyBfU1RPUkUuZW50cmllc1tuYW1lXSA6IHt9O1xyXG5cclxuICAgICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0XHRlbnRyeS5sYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGVudHJ5LmJvb2ttYXJrZWQgPSAhIXRoaXMuYm9va21hcms7XHJcbiAgICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0XHRlbnRyeS5jb3VudCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuXHRcdFx0ZW50cnkuaWRjb3VudCA9IHRoaXMuaWRjb3VudDtcclxuICAgICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICAgIGlmIChpc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICBlbnRyeS5maXJzdCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICAgIGVudHJ5LnN5bmNlZCA9IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuICAgICAgICBlbnRyeS5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbnRyeS5uYW1lID0gbG9ja2VkID9cclxuICAgICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgICBpc05ldyA/IG5hbWUgOiBlbnRyeS5uYW1lO1xyXG5cclxuXHRcdFx0cmV0dXJuIGVudHJ5O1xyXG5cdFx0fSxcclxuICAgIGNvbGxlY3RNYXJrcygpIHtcclxuICAgICAgbGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcbiAgICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IG1hcmtzID0gW107XHJcblxyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IGRvbmUubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdFx0a0QgPSBkb25lW21dLmtleURhdGE7XHJcbiAgICAgICAgZGVsZXRlIGtELnN5bmNlZDtcclxuXHRcdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdFx0fVxyXG4gICAgICByZXR1cm4gbWFya3M7XHJcbiAgICB9LFxyXG4gICAgb25IYXNoQ2hhbmdlKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZShudWxsLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlJyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlaGVhZGVyJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVhY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IGRlbCA9IHRoaXMuZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlZGVsZXRlJyk7XHJcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlbWluaW1pemUnKTtcclxuICAgICAgY29uc3QgZ2VhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWN1c3RvbWl6ZScpO1xyXG4gICAgICBjb25zdCBwYWxldHRlID0gdGhpcy5wYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlcGFsZXR0ZScpO1xyXG4gICAgICBjb25zdCBwID0gdGhpcy50ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvcjtcclxuICAgICAgX1NUT1JFLm5vdGVDb2xvciA9IGNvbG9yO1xyXG4gICAgICBjb25zdCBkZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSkpO1xyXG4gICAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDIwMTMpKTtcclxuICAgICAgY29uc3QgZ2VhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjY5OSkpO1xyXG5cclxuICAgICAgWydncmVlbicsICd3aGl0ZScsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCcsICdwdXJwbGUnLCAnYmx1ZScsICd0dXJxdW9pc2UnXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWNvbG9yJyk7XHJcbiAgICAgICAgY29sb3IuY2xhc3NOYW1lID0gJ3Rtbm90ZWNvbG9yLS0nICsgYztcclxuICAgICAgICBjb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCBjKTtcclxuICAgICAgICBwYWxldHRlLmFwcGVuZENoaWxkKGNvbG9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1ub3RlJywgdHJ1ZSk7XHJcbiAgICAgIGRlbC5hcHBlbmRDaGlsZChkZWxUZXh0KTtcclxuICAgICAgbWluLmFwcGVuZENoaWxkKG1pblRleHQpO1xyXG4gICAgICBnZWFyLmFwcGVuZENoaWxkKGdlYXJUZXh0KTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAncmVtb3ZlTm90ZVN0b3JhZ2UnLFxyXG4gICAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3RvZ2dsZTpub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlVHJhbnNwJyxcclxuICAgICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGVzOiB7fSxcclxuICAgIHRvZ2dsZTogbnVsbCxcclxuICAgIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gICAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNwKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgICB9LFxyXG4gICAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUFsbCgpIHtcclxuICAgICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGU7XHJcbiAgICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVHJhbnNwKCkge1xyXG4gICAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgICAgX1NUT1JFLmdldCgnbm90ZXRyYW5zcCcpLnRoZW4odHJhbnNwID0+IHtcclxuICAgICAgICBpZiAodHJhbnNwKSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNFbXB0eShvYmopIHtcclxuICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlciA9IChlKSA9PiB0aGlzLmVtaXREcmFnRXZlbnQobm90ZSwgZSk7XHJcbiAgICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gICAgfSxcclxuICAgIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzpub3RlJywgbm90ZSwgZSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgICB0aGlzLmVtaXQoJ25vdGVzLXN0YXRlJywgIXRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSwgaW5mbyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc3RhcnRlZDphcHAnOiAnY2hlY2tVUkwnLFxyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlJyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZFBhZ2VTdGF0ZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnb25VcmxDaGFuZ2UnLFxyXG4gICAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAnc2V0dXAnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGtleWRvd246IHtcclxuICAgICAgICAgICcqJzogJ2RlbGVnYXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgICAnKic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXJsOiAnJyxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIHNldDogZmFsc2UsXHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICByZXRyeUFjdGl2ZTogZmFsc2UsXHJcbiAgICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICAgIHJlZ2lzdGVyZWRMb2FkSGFuZGxlcjogZmFsc2UsXHJcbiAgICBrZXlDb2RlTWFwOiB7XHJcbiAgICAgICcxMyc6ICdFbnRlcicsXHJcbiAgICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICAgJzE3MSc6ICcrJywgJzE3Myc6ICctJ1xyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwb3dlcihvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZSA9IG9uO1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ21vZGUnKS50aGVuKGFjdGl2ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldCB8fCAhYWN0aXZlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50LndpbmRvdy5kb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnICYmICF0aGlzLnJlZ2lzdGVyZWRMb2FkSGFuZGxlcikge1xyXG4gICAgICAgICAgdGhpcy5yZWdpc3RlcmVkTG9hZEhhbmRsZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5zZXR1cCgpLCB3aW5kb3cucGFyZW50LndpbmRvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfU1RPUkUuaWZyYW1lID0gdGhpcy5pc0lGcmFtZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5kb2N1bWVudC5VUkw7XHJcbiAgICAgICAgdGhpcy5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyh0aGlzLnVybCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tVUkwoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzSUZyYW1lKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIH0sXHJcbiAgICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBlbC50YWdOYW1lO1xyXG5cclxuICAgICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlKGUpIHtcclxuICAgICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgICBtb2RLZXkgPSAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5KSxcclxuICAgICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgICAgZnVuY3Rpb25LZXlzID0gbG9ja2VkQWN0aW9ucy5jb25jYXQoYXJyb3dLZXlzKS5jb25jYXQoJ2MnKSxcclxuICAgICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNoaWZ0U2Vuc2l0aXZlS2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkga2V5ID0gdGhpcy5rZXlDb2RlTWFwW2tleUNvZGVdO1xyXG5cclxuICAgICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICAgIGNvbnN0IGlzQ3VzdG9tTWFya2VyS2V5ID0gaXNNYXJrZXJLZXkgJiYgIWRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKGtleSk7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5nKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9va3VwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHJlc3NlZDptYXJrZXIta2V5JywgZSwgb3JpZ0tleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghc2V0dGluZ1sxXSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgICAgY29uc3QgczIgPSBzaG9ydGN1dFsxXTtcclxuXHJcbiAgICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMubG9va3VwKCk7XHJcblxyXG4gICAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdwcmVzc2VkOmhvdGtleScsIGtleSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvb2t1cCgpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRUZXh0KSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgc2VsZWN0ZWRUZXh0KTtcclxuICAgIH0sXHJcbiAgICBjaGVja1VSTCgpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0KCdjaGVjazp1cmwnLCB0aGlzLnVybClcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhKSB0aGlzLm9uVXJsRm91bmQodGhpcy5maWx0ZXJFbnRyaWVzKGRhdGEuZW50cmllcyksIGRhdGEucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVudHJpZXMsIGZvcmNlKSB7XHJcbiAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGVudHJpZXMpID8gZW50cmllcyA6IFtlbnRyaWVzXTtcclxuICAgICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gdGhpcy5oYXNobGVzc1VSTCA6IHRoaXMudXJsO1xyXG5cclxuICAgICAgaWYgKGZvcmNlIHx8IGZpcnN0RW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgICBfU1RPUkUuYWRkRW50cmllcyhlbnRyaWVzKTtcclxuICAgICAgICAvL19TVE9SRS5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICAgIGlmIChmb3JjZSkgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICd3JykgdGhpcy5sb29rdXAoKTtcclxuICAgIH0sXHJcbiAgICBvblVybEZvdW5kKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGUoZW50cmllcywgdHJ1ZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmUgJiYgIXRoaXMuaW5pdGlhbGl6ZWQgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChyZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgICAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IHRoaXMuaGFzaGxlc3NVUkwgOiB0aGlzLnVybDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm1hcmtzJywgZW50cmllcyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaWx0ZXJFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgICAgbGV0IGxvY2tlZEVudHJpZXMgPSBbXSxcclxuICAgICAgICAgIGwgPSBlbnRyaWVzLmxlbmd0aCxcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXNFeGlzdCA9IGZhbHNlLFxyXG4gICAgICAgICAgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBsb2NrZWRFbnRyaWVzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG9ja2VkRW50cmllc0V4aXN0ICYmIG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobG9ja2VkRW50cmllcy5sZW5ndGgpIHtcclxuICAgICAgICBfU1RPUkUubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcy5zb3J0KChhLCBiKSA9PiAobmV3IERhdGUoYS5sYXN0KSkgLSAobmV3IERhdGUoYi5sYXN0KSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9TVE9SRS5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGVudHJpZXM7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6c2VsZWN0aW9uJywgIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCk7XHJcbiAgICB9LFxyXG4gICAgb25VcmxDaGFuZ2UodGFiLCBuZXdVcmwpIHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfU1RPUkUuZW50cmllc1tPYmplY3Qua2V5cyhfU1RPUkUuZW50cmllcylbMF1dO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICFfU1RPUkUuaXNOZXcgJiZcclxuICAgICAgICBlbnRyeSAmJlxyXG4gICAgICAgIGVudHJ5Lmhhc2hTZW5zaXRpdmUgJiZcclxuICAgICAgICBfSEFTSExFU1MobmV3VXJsKSA9PT0gdGhpcy5oYXNobGVzc1VSTCAmJlxyXG4gICAgICAgIG5ld1VybCAhPT0gdGhpcy51cmxcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdoYXNoY2hhbmdlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgICB0aGlzLnJldHJ5QWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICAgIHRoaXMucmV0cnlBY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdlLXN0YXRlJywge1xyXG4gICAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgICByZXRyeUFjdGl2ZTogdGhpcy5yZXRyeUFjdGl2ZVxyXG4gICAgICB9LCBpbmZvKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nOiAnc3RhcnQnLFxyXG4gICAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdwcm9ncmVzcycsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ3Byb2dyZXNzJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnc3RvcCcsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhY3RpdmF0ZSdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgc3RlcHM6IDAsXHJcbiAgICB0b3RhbFdpZHRoOiA0MTMsXHJcbiAgICBjdXJyZW50V2lkdGg6IDAsXHJcbiAgICBzdGVwTGVuZ3RoOiAwLFxyXG4gICAgY2FuY2VsSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcHJvZ3Jlc3Ntb2RhbCcpO1xyXG5cclxuICAgICAgW3tcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2hlYWRlcicsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Jlc3RvcmluZycpXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2Nsb3NlJyxcclxuICAgICAgICB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3NiYXInLFxyXG4gICAgICAgIGNoaWxkOiB7XHJcbiAgICAgICAgICB0eXBlOiAndG1wcm9ncmVzcydcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2NhbmNlbCcsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2NhbmNlbCcpXHJcbiAgICAgIH1dXHJcbiAgICAgICAgLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xyXG4gICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgdGhpc1tvYmoudHlwZV0gPSBlbDtcclxuICAgICAgICAgIGlmIChvYmoudGV4dCkgZWwudGV4dENvbnRlbnQgPSBvYmoudGV4dDtcclxuICAgICAgICAgIGlmIChvYmouY2hpbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmouY2hpbGQudHlwZSk7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgdGhpc1tvYmouY2hpbGQudHlwZV0gPSBjaGlsZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzdW1lKGxlbikge1xyXG4gICAgICB0aGlzLnN0ZXBzID0gbGVuO1xyXG4gICAgICB0aGlzLnN0ZXBMZW5ndGggPSB0aGlzLnRvdGFsV2lkdGggLyBsZW47XHJcbiAgICAgIHRoaXMuY3VycmVudFdpZHRoID0gMDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gMDtcclxuICAgIH0sXHJcbiAgICBzdGFydChsZW4pIHtcclxuICAgICAgaWYgKCFsZW4gfHwgIXRoaXMuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgIHRoaXMucmVzdW1lKGxlbik7XHJcbiAgICAgIGNvbnN0IGNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpO1xyXG4gICAgICBjb25zdCBjbG9zZUhhbmRsZXIgPSB0aGlzLmNsb3NlSGFuZGxlciA9IHRoaXMuc3RvcC5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnRtcHJvZ3Jlc3NjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHByb2dyZXNzKCkge1xyXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY3VycmVudFdpZHRoICs9IHRoaXMuc3RlcExlbmd0aDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgfSxcclxuICAgIHN0b3AoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoKGUpIHt9XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjYW5jZWxlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgncHJvZ3Jlc3NiYXInKS50aGVuKHByb2dyZXNzYmFyID0+IHRoaXMuYWN0aXZlID0gcHJvZ3Jlc3NiYXIpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5vbignY2FuY2VsZWQ6cmVzdG9yYXRpb24nLCAoKSA9PiB0aGlzLmNhbmNlbGVkID0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW5DaHVua3MoZGF0YSwgcHJvYywgY2IpIHtcclxuICAgIHByb2MgPSBwcm9jLmJpbmQodGhpcyk7XHJcbiAgICBjYiA9IGNiLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIHJlYygpIHtcclxuXHRcdFx0bGV0IGV4cGlyZSA9ICtuZXcgRGF0ZSgpICsgNTAwO1xyXG5cclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdHRyeSB7XHJcbiAgICAgICAgICBwcm9jKGRhdGEuc2hpZnQoKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHR9IHdoaWxlIChkYXRhLmxlbmd0aCA+IDAgJiYgZXhwaXJlID4gK25ldyBEYXRlKCkpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDApO1xyXG5cdFx0XHRlbHNlIGNiKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuICByZXBvcnQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdsb3N0Om1hcmtzJywgdGhpcy5mYWlsdXJlUmVwb3J0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmVudHJ5Lm5hbWUsIHRoaXMucmVzdG9yZWQsIHRoaXMubG9zdCwgdGhpcy5hcmVhKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgIHRoaXMuY2FjaGUgPSBbXTtcclxuICAgIHRoaXMucGhhc2UgPSAxO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCA9IDA7XHJcbiAgICB0aGlzLmNodW5rRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgdGhpcy5vb20gPSBlbnRyeS5tYXJrcy5sZW5ndGggPT09IDEgJiYgZW50cnkubWFya3NbMF0uaWQgPT0gMTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lcigpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRpbWVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbnRyeSxcclxuICAgICAgICBub3cgPSBbXSwgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICBsID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBtYXJrO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuXHJcbiAgICAgIHRoaXMuY29udmVydERlc2NyaXB0aW9uKG1hcmspLmNyZWF0ZVRlbXBPYmplY3QobWFyayk7XHJcblxyXG4gICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgIGVsc2Ugbm93LnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHBvc3Rwb25lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc3RvcmUoKTtcclxuICB9XHJcbiAgY29udmVydERlc2NyaXB0aW9uKG1hcmspIHtcclxuICAgIGlmICh0eXBlb2YgbWFyay5jb25kcy5vID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgY29udmVydGVkQ29uZHMgPSB7XHJcbiAgICAgICAgICAgIG86IGNvbmRzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgbjI6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIHAxOiBjb25kcy5maXJzdFRleHROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDM6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwNDogY29uZHMuZmlyc3RHcmFtcGFOb2RlUG9zaXRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICBtYXJrLmNvbmRzID0gY29udmVydGVkQ29uZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3JlYXRlVGVtcE9iamVjdChtYXJrKSB7XHJcbiAgICBsZXQgdGV4dCA9IG1hcmsudGV4dCxcclxuICAgICAgICB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLFxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgIG1hcmsudGVtcCA9IHtcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHRyaW1tZWRUZXh0OiB0cmltbWVkVGV4dCxcclxuICAgICAgdHJpbW1lZFRleHRMZW5ndGg6IHRyaW1tZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0OiBzcXVlZXplZFRleHQsXHJcbiAgICAgIHNxdWVlemVkVGV4dExlbmd0aDogc3F1ZWV6ZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZFBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtYXJrLnN5bmNlZCA9IHRoaXMuZW50cnkuc3luY2VkO1xyXG4gIH1cclxuICByZXN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDIpIHRoaXMuc29ydFF1ZXVlQnlJZCgpO1xyXG5cclxuICAgIGxldCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgLmdldFRleHRQb3NpdGlvbnMobWFya3MsIGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5waGFzZSA9PT0gMSAmJiBsZW5ndGggPiAxKVxyXG4gICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgdGhpcy5maW5kUG9zc2libGVFeHRyZW1hKClcclxuICAgICAgICAgIC5ydWxlT3V0TXVsdGlwbGVzKClcclxuICAgICAgICAgIC5yZXN0b3JlUmFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggJiYgIXRoaXMuY2FuY2VsZWQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8ICtuZXcgRGF0ZSgpKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzdG9yZSgpLCAwKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICB9XHJcbiAgc29ydFF1ZXVlQnlJZCgpIHtcclxuICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbWFyaywgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmICghbWFya3NbbF0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdWzBdO1xyXG4gICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgIH1cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5xdWV1ZS5wdXNoKFt0ZW1wW2ldXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgbGV0IHRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCxcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHNxdWVlemVkVGV4dCwgc3F1ZWV6ZWRUZXh0TGVuZ3RoLCBwLCBlbmRQb3NpdGlvbjtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHAgPSB1bmRlZmluZWQ7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICBpZiAoIW1hcmtUZW1wKSB7XHJcbiAgICAgICAgbWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gZW5kUG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzcXVlZXplZFRleHQgPSBtYXJrVGVtcC5zcXVlZXplZFRleHQ7XHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAocCAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIHAgPSAtMTtcclxuICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHNxdWVlemVkVGV4dCwgcCArIDEpO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBwICsgc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICghbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzEnKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcclxuICAgIGxldCBsID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgcG9zLCBzdGFydCwgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHBvcyA9IHBvc2l0aW9uc1tsXTtcclxuICAgICAgc3RhcnQgPSBwb3NbMF07XHJcblxyXG4gICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgZWxzZSB0ZW1wW3N0YXJ0XSA9IHBvcztcclxuICAgIH1cclxuICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBpIDwgdDsgaSsrKVxyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgfVxyXG4gIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBwb3MxLCBwb3MyLCBpLCBtMSwgbTIsIGlkMSwgaWQyLCBpZDtcclxuXHJcbiAgICBpZiAocCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHAtLSA+IDEpIHtcclxuICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICBwb3MyID0gcG9zaXRpb25zW3BdO1xyXG4gICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICBtMiA9IHBvczJbMl07XHJcbiAgICAgICAgaWQxID0gbTEuaWQ7XHJcbiAgICAgICAgaWQyID0gbTIuaWQ7XHJcblxyXG4gICAgICAgIGlmIChpZDEgPT09IGlkMikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG5cclxuICAgICAgICAgIGlmIChpZDEgPCBpZDIpIHtcclxuICAgICAgICAgICAgaWQgPSBpZDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGlkMTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwOyBpKyspXHJcbiAgICAgICAgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjdXRPdXRGb3IoaWQpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUocC0tKSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbnNbcF1bMl0uaWQgPT09IGlkKVxyXG4gICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3Rwb25lKG1hcmspIHtcclxuICAgIGxldCBxdWV1ZSA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYWxyZWFkeUluY2x1ZGVkKVxyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICB9XHJcbiAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgIGxldCBub2RlcyA9IHRoaXMuYm9keVRleHROb2RlcyxcclxuICAgICAgICBuID0gbm9kZXMgPyBub2Rlcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcGhhc2UgPSB0aGlzLnBoYXNlLFxyXG4gICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZSA9IFtdLFxyXG4gICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLCBjaGFycyA9IDAsXHJcbiAgICAgICAgbmV4dFN0YXJ0Rm91bmQsIGVuZGluZ3NJblRoaXNOb2RlLFxyXG4gICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIGRpZmYsIGwsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBlLCBmLCBpZCwgcCwgcSwgeCwgbSxcclxuICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0LCBzdGFydEZvdW5kRm9yLCBwb3N0cG9uZWQsIGhhc0VuZGluZ3NJblRoaXNOb2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgbm9kZXNUZXh0ID0gdGhpcy5zcXVlZXplKG5vZGUuZGF0YSk7XHJcbiAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNoYXJzICs9IG5vZGVzVGV4dExlbmd0aDtcclxuICAgICAgbCA9IGluZGljZXMubGVuZ3RoO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgIHBvc3Rwb25lZCA9IFtdO1xyXG4gICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGluZGljZXNbbF1bMF07XHJcbiAgICAgICAgZW5kUG9zaXRpb24gPSBpbmRpY2VzW2xdWzFdO1xyXG4gICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciB8fCBbXTtcclxuICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLmxlbmd0aCA8IG1hcmsudGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMucHVzaCh7IG5vZGU6IG5vZGUsIHBvczogaSB9KTtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIHN0YXJ0Rm91bmRGb3IucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICFtYXJrLnRlbXAuZW5kRm91bmRGb3IuaW5jbHVkZXMoZW5kUG9zaXRpb24pICYmXHJcbiAgICAgICAgICAoY2hhcnMgLSBlbmRQb3NpdGlvbikgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHN0YXJ0Rm91bmRGb3IpIDwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0ID0gdGhpcy5maW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgZW5kUG9zaXRpb24gLSAoY2hhcnMgLSBub2Rlc1RleHRMZW5ndGgpKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvci5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXSA9IHtcclxuICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zc2libGVGb2N1c09mZnNldCxcclxuICAgICAgICAgICAgICBwb3M6IGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICBzYXRpc2ZpZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICBpZiAoY2hhcnMgPiB0aGlzLm1heFBvc2l0aW9uKSBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChwaGFzZSAhPT0gMSB8fCB0aGlzLm9vbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbWFyayA9IHRoaXMubWFya3NbaV07XHJcbiAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMobWFyay5pZCkpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMicpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IGNhY2hlLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIG5vZGUsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgZ3JhbmRncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxLFxyXG4gICAgICAgIHBvc3NpYmxlRW5kcywgc3RhcnRGb3VuZEZvciwgY29uZHMsIHN0YXJ0T2Zmc2V0LCB0ZW1wLCB0ZXh0TGVuZ3RoLCBzdGFydDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBjYWNoZVtpXTtcclxuICAgICAgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzID0gdGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgIHBvc3NpYmxlRW5kcyA9IHRlbXAucG9zc2libGVFbmRzO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gdGVtcC5zdGFydEZvdW5kRm9yXHJcbiAgICAgIHAgPSBwb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoO1xyXG4gICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY29uZHMubztcclxuICAgICAgdGV4dExlbmd0aCA9IHRlbXAudGV4dExlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwID4gMSkge1xyXG4gICAgICAgIHdoaWxlIChwLS0pIHtcclxuICAgICAgICAgIG5vZGUgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcF0ubm9kZTtcclxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAoIWdyYW1wYSB8fCBjb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gocCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSBwID0gMDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkgcCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHEgPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5ub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW5kZ3JhbXBhID0gZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICghZ3JhbmRncmFuZGdyYW1wYSB8fCBjb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbXBhKSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHBvc3NpYmxlRW5kc1tzdGFydEZvdW5kRm9yW3FdXS5vZmZzZXQgLSBzdGFydE9mZnNldCkgPT09IHRleHRMZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwID0gcTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHAgPSAwO1xyXG5cclxuICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgIHN0YXJ0ID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZSA9IHN0YXJ0Lm5vZGU7XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbiA9IHN0YXJ0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuc2V0TWF0Y2hpbmdFbmQobWFyaywgcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvcltwXSxcclxuICAgICAgICBlbmQgPSBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dO1xyXG5cclxuICAgIG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uID0gZW5kLnBvcztcclxuICAgIG1hcmsudGVtcC5mb2N1c09mZnNldCA9IGVuZC5vZmZzZXQ7XHJcbiAgfVxyXG4gIHNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpIHtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFtcGEgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBkZXNjcmlwdGlvbi5vLFxyXG4gICAgICAgIHJlbGV2YW50Tm9kZVRleHQgPSBub2RlLmRhdGEuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0KS50cmltKCksXHJcbiAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0LFxyXG4gICAgICAgIG0gPSBtYXJrLnRlbXAudHJpbW1lZFRleHRMZW5ndGgsXHJcbiAgICAgICAgdGV4dHNNYXRjaDtcclxuXHJcbiAgICBpZiAobSA8PSBsKVxyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUobWFya1RleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpKSA9PT0gMDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0ZXh0c01hdGNoICYmXHJcbiAgICAgIChwYXJlbnROb2RlLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMSB8fCAoZGVzY3JpcHRpb24ubjEgPT09ICdUTScgJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpICYmXHJcbiAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgIHRoaXMud2hpY2hDaGlsZChwYXJlbnROb2RlLCBub2RlKSA9PT0gZGVzY3JpcHRpb24ucDFcclxuICAgICk7XHJcbiAgfVxyXG4gIGZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBuKSB7XHJcbiAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgbCA9IG5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3F1ZWV6ZShub2RlVGV4dFtpXSkpIGNvdW50ZXIrKztcclxuXHJcbiAgICAgIGlmIChjb3VudGVyID09PSBuKSByZXR1cm4gKC9cXHMkLy50ZXN0KG1hcmsudGV4dCkgPyBpICsgMiA6IGkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzdG9yZVJhbmdlcygpIHtcclxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHN0YXJ0LCBlbmQsIGZvY3VzT2Zmc2V0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgIGVuZCA9IG1hcmtUZW1wLmVuZE5vZGU7XHJcbiAgICAgIGZvY3VzT2Zmc2V0ID0gbWFya1RlbXAuZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSkge1xyXG4gICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzMnKSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgIHJhbmdlLnNldEVuZChlbmQsIGZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgLy9zZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5yZWNvbGxlY3ROb2RlcyhtYXJrKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBtYXJrLnRlbXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJvZHlTZWxlY3Rpb24oZWwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwrKztcclxuXHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKGVsKTtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHJpYWwgPCA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRCb2R5U2VsZWN0aW9uKGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9ICcgJztcclxuICAgICAgICAgIHRoaXMuYm9keVRleHROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUodGhpcy5zZWxlY3Rpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gdGhpcy5zZWxlY3Rpb24ubm9kZXMgPyB0aGlzLnNlbGVjdGlvbi5ub2Rlcy5zbGljZSgpIDogW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpID8gdGV4dC5yZXBsYWNlKC9cXHR8XFxzfFxcbnxcXHIvZywgJycpIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICB3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGNvbnRleHQpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdCAgICBjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0ICAgIHBvcyA9IDAsIGkgPSAwLCBjdXJyZW50Q2hpbGQ7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnRDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGQpIHJldHVybiBwb3M7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZU5hbWUgPT09IGNvbnRleHQpIHBvcysrO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICBpZiAoIShjdXJyZW50Q2hpbGQubm9kZVR5cGUgPT09IDMgJiYgIWN1cnJlbnRDaGlsZC5kYXRhKSkgcG9zKys7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEltbXV0UmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IFsuLi5lbnRyeS5tYXJrcy5zb3J0KChtMSwgbTIpID0+IG0xLmlkIC0gbTIuaWQpXTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NJbkNodW5rcyhtYXJrcywgdGhpcy5yZXN0b3JlUmFuZ2UsIHRoaXMucmVwb3J0KTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVSYW5nZShtYXJrKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIHRoaXMubWFya3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpLFxyXG4gICAgICAgIGZpbHRlciA9IHdob2xlRG9jdW1lbnQgP1xyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxmLmlzU2VsZWN0YWJsZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKSA6XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGVjdGlvbi5jb250YWluc05vZGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSksXHJcblxyXG4gICAgICAgIGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSksXHJcblxyXG4gICAgICAgIHRlbXBSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgbm9kZXMgPSBbXSwgcGFyZW50Tm9kZXMgPSBbXSxcclxuICAgICAgICB0ZXh0Tm9kZSwgcGFyZW50LCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIHdoaWxlKHRleHROb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkge1xyXG4gICAgICBub2Rlcy5wdXNoKHRleHROb2RlKTtcclxuICAgIH1cclxuICAgIG5vZGVzID0gdGhpcy50cmltU2VsZWN0aW9uKG5vZGVzKTtcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSA6IG5vZGVzO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlcyA9IHRoaXMuY29sbGVjdFBhcmVudE5vZGVzKHRoaXMubm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZWNvbGxlY3ROb2RlcyhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrV3JhcHBlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXj1cIicgKyBtYXJrLmlkICsgJ19cIl0nKSk7XHJcbiAgICBjb25zdCBtID0gbWFya1dyYXBwZXJzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5ld1NlZ21lbnQgPSBtYXJrV3JhcHBlcnMubWFwKGVsID0+IGVsLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGNvbnN0IHByZXYgPSBtYXJrV3JhcHBlcnNbMF0ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgY29uc3QgbmV4dCA9IG1hcmtXcmFwcGVyc1ttLTFdLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ID0gbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgZW5kID0gbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbjtcclxuXHJcbiAgICBpZiAocHJldiAmJiBwcmV2Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQudW5zaGlmdChwcmV2KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC5wdXNoKG5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZXMuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIC4uLm5ld1NlZ21lbnQpO1xyXG4gIH1cclxuICB0cmltU2VsZWN0aW9uKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBsZXQgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBmaXJzdE5vZGUgPSBub2Rlc1swXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBmaXJzdE5vZGUgJiYgZmlyc3ROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoIDw9IHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICBub2Rlcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBsYXN0Tm9kZSAmJiB0aGlzLmlzQmxhbmsobGFzdE5vZGUuZGF0YS5zdWJzdHIoMCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSkpIHtcclxuICAgICAgICBub2Rlcy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICByZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbCA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IHJnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UocmcpO1xyXG5cclxuICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICByZy5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgICByZXR1cm4gISFzZWwudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZSh0aGlzLnJhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIGNvbGxlY3RQYXJlbnROb2Rlcyhub2Rlcykge1xyXG4gICAgbGV0IGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgcGFyZW50cyA9IFtdLCBpID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcGFyZW50cy5wdXNoKG5vZGVzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH1cclxuICByZXRyaWV2ZVRleHQoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcyxcclxuICAgICAgICBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG5vZGVUZXh0cyA9IFtdLFxyXG4gICAgICAgIHRleHQ7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIG5vZGVUZXh0cy5wdXNoKG5vZGVzW2ldLmRhdGEpO1xyXG5cclxuICAgIGwgLT0gMTtcclxuXHJcbiAgICBpZiAobm9kZVRleHRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0LCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAvL25vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmspIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgICAnYWRkZWQ6bm90ZSc6ICdvbk5vdGVBZGRlZCcsXHJcbiAgICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrUmVtb3ZlZCdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcblxyXG4gICAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgbm90ZXM6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYm9va21hcms6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICBub3RlczogZmFsc2UsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU3RhdGUoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ID0gbm90ZWljb24pO1xyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgICAodGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgJiYgdGhpcy5ib29rbWFyaykgfHxcclxuICAgICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtdWknKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgICBlbHNlIGlmIChidG4uc2hvd24gJiYgKCF0aGlzW2JdIHx8ICFidG4uc2hvdykpIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICAgIGlmIChidXR0b25zW2JdLnNob3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgICAgY29uc3Qgbm90ZXNCdXR0b24gPSB0aGlzLmJ1dHRvbnMubm90ZXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3Rlc3RvZ2dsZScpO1xyXG4gICAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgICBib29rbWFya0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICAgIH0sXHJcbiAgICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgY29uc3QgaGFuZGxlciA9IGJ0bi5oYW5kbGVyID0gdHlwZSA9PT0gJ25vdGVzJyA/XHJcbiAgICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgIHRtdWkuYXBwZW5kQ2hpbGQoYnRuLmVsKTtcclxuICAgICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG5cclxuICAgICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bi5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3RtdWlwb3MnKVxyXG4gICAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgICB9LFxyXG4gICAgb25Ob3RlQWRkZWQoKSB7XHJcbiAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICBvbkJvb2ttYXJrUmVtb3ZlZCgpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdpbmplY3Rpb24nLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG5cdFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdjYW5jZWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==