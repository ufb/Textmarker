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
Object.defineProperty(exports, "_COPY", {
  enumerable: true,
  get: function get() {
    return _copy._COPY;
  }
});
Object.defineProperty(exports, "_GET_ACTIVE_TAB", {
  enumerable: true,
  get: function get() {
    return _getActiveTab._GET_ACTIVE_TAB;
  }
});
Object.defineProperty(exports, "_EXTEND", {
  enumerable: true,
  get: function get() {
    return _extend.default;
  }
});
Object.defineProperty(exports, "_MODULE", {
  enumerable: true,
  get: function get() {
    return _module._MODULE;
  }
});
Object.defineProperty(exports, "_DOMMODULE", {
  enumerable: true,
  get: function get() {
    return _dommodule._DOMMODULE;
  }
});
Object.defineProperty(exports, "_PORT", {
  enumerable: true,
  get: function get() {
    return _port._PORT;
  }
});
Object.defineProperty(exports, "_HASHLESS", {
  enumerable: true,
  get: function get() {
    return _hashless._HASHLESS;
  }
});
Object.defineProperty(exports, "_L10N", {
  enumerable: true,
  get: function get() {
    return _l10n.default;
  }
});
Object.defineProperty(exports, "_ERRORTRACKER", {
  enumerable: true,
  get: function get() {
    return _errorTracker.default;
  }
});

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = _interopRequireDefault(__webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js"));

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

var _port = __webpack_require__(/*! ./../../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../../utils/hashless */ "./utils/hashless.js");

var _l10n = _interopRequireDefault(__webpack_require__(/*! ./../../utils/l10n */ "./utils/l10n.js"));

var _errorTracker = _interopRequireDefault(__webpack_require__(/*! ./../../utils/error-tracker */ "./utils/error-tracker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._MODULE({
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

exports.default = _default;

/***/ }),

/***/ "./content/page-injections/bootstrap.js":
/*!**********************************************!*\
  !*** ./content/page-injections/bootstrap.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./_store */ "./content/page-injections/_store.js"));

var _page = _interopRequireDefault(__webpack_require__(/*! ./modules/page */ "./content/page-injections/modules/page.js"));

var _contextmenu = _interopRequireDefault(__webpack_require__(/*! ./modules/contextmenu */ "./content/page-injections/modules/contextmenu.js"));

var _marker = _interopRequireDefault(__webpack_require__(/*! ./modules/marker */ "./content/page-injections/modules/marker.js"));

var _progress = _interopRequireDefault(__webpack_require__(/*! ./modules/progress */ "./content/page-injections/modules/progress.js"));

var _restorer = _interopRequireDefault(__webpack_require__(/*! ./modules/restorer */ "./content/page-injections/modules/restorer.js"));

var _notes = _interopRequireDefault(__webpack_require__(/*! ./modules/notes */ "./content/page-injections/modules/notes.js"));

var _tmui = _interopRequireDefault(__webpack_require__(/*! ./modules/tmui */ "./content/page-injections/modules/tmui.js"));

var _markerPopup = _interopRequireDefault(__webpack_require__(/*! ./modules/marker-popup */ "./content/page-injections/modules/marker-popup.js"));

var _autoMarker = _interopRequireDefault(__webpack_require__(/*! ./modules/auto-marker */ "./content/page-injections/modules/auto-marker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    (0, _page.default)();
    (0, _contextmenu.default)();
    (0, _progress.default)();
    (0, _restorer.default)();
    (0, _marker.default)();
    (0, _notes.default)();
    (0, _tmui.default)();
    (0, _markerPopup.default)();
    (0, _autoMarker.default)();
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

var _utils = _interopRequireDefault(__webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js"));

__webpack_require__(/*! ./port */ "./content/page-injections/port.js");

__webpack_require__(/*! ./_store */ "./content/page-injections/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/page-injections/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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

      _store.default.get('settings').then(function (settings) {
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
}

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
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = _BOOKMARK;

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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
            _store.default.tmid = e.target.getAttribute('data-tm-id');
          } else _store.default.tmid = '';
        }
      }, window.document);
    }
  });
}

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
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    this.immut = _store.default.redescribing ? marker.isImmut : immut;
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

    if (this.immut && (_store.default.redescribing || !this.keyData.conds)) {
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
      if (!this.immut && (_store.default.redescribing || !this.keyData.conds)) this.describe();
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
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
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
        _store.default.tmid = e.target.getAttribute('data-tm-id');
        event = 'clicked:mark';
      } else {
        _store.default.tmid = e + '_0';
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

exports.default = _MARK;

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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

      return _store.default.get('settings').then(function (settings) {
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _globalSettings = _interopRequireDefault(__webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

var _markItem = _interopRequireDefault(__webpack_require__(/*! ./mark-item */ "./content/page-injections/modules/mark-item.js"));

var _bookmark = _interopRequireDefault(__webpack_require__(/*! ./bookmark */ "./content/page-injections/modules/bookmark.js"));

var _selection = _interopRequireDefault(__webpack_require__(/*! ./selection */ "./content/page-injections/modules/selection.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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
      var locked = _store.default.locked;
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
      var mark = new _markItem.default(this, key, data, immut).create();
      if (data.autonote) this.emit('add:note', mark, data.autonote);
      return mark;
    },
    undo: function undo(noAutosave) {
      if (_store.default.locked) return;
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
      if (_store.default.locked) return;
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
      if (_store.default.locked) return;
      id = id ? id : _store.default.tmid ? _store.default.tmid : '';
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
      _store.default.disabled = false; // while (this.done.length) {
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
      var entry = !arg && _store.default.name && _store.default.entries[_store.default.name] ? _store.default.entries[_store.default.name] : null;
      if (!options || !options.silent) this.emit('resumed:markers', entry);
    },
    immut: function immut(immutable) {
      this.isImmut = immutable;
      _store.default.redescribing = true;
      _store.default.immut = immutable;
      this.resume();
    },
    save: function save() {
      var _this = this;

      if (_store.default.disabled) return this.emit('canceled:save-after-canceled-restoration');
      var iframe = _store.default.iframe;
      var locked = _store.default.locked;

      _store.default.get('naming').then(function (naming) {
        if (_store.default.isNew || locked) {
          if (!locked && naming === 'custom') {
            _this.request('name:entry?').then(function (granted) {
              if (granted) {
                var sub = iframe ? browser.i18n.getMessage('nm_message_iframe') : '';
                _store.default.name = window.prompt(browser.i18n.getMessage('nm_message', sub));
                if (_store.default.name) _this.emit('save:entry?', _this.retrieveEntry());
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

      _store.default.get('autosave').then(function (autosave) {
        if (autosave) _this2.save();else _this2.emit('unsaved-changes');
      });
    },
    store: function store(mark, save, order) {
      this.done.push(mark);
      if (save !== false) this.autosave();
      if (order) this.orderMarksVisually();
    },
    recreate: function recreate(mark) {
      this.selection = new _selection.default(null, {
        programmatically: true
      });
      this.store(this.mark(mark.key, mark), false, false);
    },
    onFinishedRestoration: function onFinishedRestoration() {
      if (!this.done.length) return this;
      this.emit('restore:notes', this.done);

      if (_store.default.locked) {
        var mark = this.done[this.done.length - 1];

        if (_store.default.name === mark.keyData.text.trim().substring(0, _globalSettings.default.MAX_ENTRY_NAME_CHARS - 1)) {
          this.gotoMark(mark);
        }
      } else {
        this.sortById();
        this.scrollToBookmark();
      }

      this.orderMarksVisually();

      if (_store.default.redescribing) {
        _store.default.redescribing = false;
        this.save();
      }
    },
    onCanceledRestoration: function onCanceledRestoration() {
      _store.default.disabled = true;
    },
    addNote: function addNote(id) {
      this.emit('add:note', this.findMark(id));
    },
    saveNote: function saveNote(id) {
      if (!_store.default.locked) return this.autosave();
      var mark = this.getById(id).keyData;
      var synced = typeof mark.synced === 'boolean' ? mark.synced : _store.default.area_history === 'sync';
      var entry = {
        marks: [mark],
        name: mark.text.trim().substring(0, _globalSettings.default.MAX_ENTRY_NAME_CHARS - 1),
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
      if (_store.default.locked) return;
      var bookmark = this.bookmark,
          mark = this.findMark(m);
      if (!mark) return false;

      if (bookmark) {
        bookmark.remove();
        this.emit('removed:bookmark');
      }

      this.bookmark = new _bookmark.default().set(mark);
      this.emit('added:bookmark');
      if (save !== false) this.autosave();
    },
    undoBookmark: function undoBookmark() {
      this.bookmark = null;
      this.emit('removed:bookmark');
    },
    removeBookmark: function removeBookmark() {
      if (_store.default.locked) return;
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
      x = x ? x : _store.default.tmid ? _store.default.tmid : '';
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

      var selection = this.selection = new _selection.default();
      if (!selection.nodes) return false;

      if (e) {
        if (typeof e === 'string') key = e;else this.preventDefault(e);
      } else {
        key = key || 'm';
      }

      _store.default.get('settings').then(function (settings) {
        if (_store.default.isNew) {
          _this3.isImmut = typeof _this3.isImmut === 'boolean' ? _this3.isImmut : !!settings.history.immut;
        } else {
          _this3.isImmut = typeof _this3.isImmut === 'boolean' ? _this3.isImmut : _store.default.immut;
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
      var locked = _store.default.locked;
      var isNew = _store.default.isNew;
      var name = _store.default.name;
      var entry = !locked && _store.default.entries[name] ? _store.default.entries[name] : {};
      entry.marks = this.collectMarks();
      entry.last = new Date().getTime();
      entry.bookmarked = !!this.bookmark;
      entry.title = window.document.title;
      entry.count = entry.marks.length;
      entry.idcount = this.idcount;
      entry.immut = typeof this.isImmut === 'boolean' ? this.isImmut : entry.immut;

      if (isNew || locked) {
        entry.first = entry.last;
        entry.url = _store.default.hashSensitive ? window.document.URL : (0, _utils._HASHLESS)(window.document.URL);
        entry.synced = _store.default.area_history === 'sync';
        entry.locked = locked;
        entry.hashSensitive = _store.default.hashSensitive;
      }

      entry.name = locked ? entry.marks[0].text.trim().substring(0, _globalSettings.default.MAX_ENTRY_NAME_CHARS - 1) : isNew ? name : entry.name;
      return entry;
    },
    collectMarks: function collectMarks() {
      var done = this.done;
      var l = done.length;
      var marks = [];

      if (_store.default.locked) {
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(mark, color) {
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
          color: this.color || _store.default.noteColor
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
      var del = this.del = document.createElement('tmnotedelete');
      var min = this.min = document.createElement('tmnoteminimize');
      var gear = document.createElement('tmnotecustomize');
      var palette = this.palette = document.createElement('tmnotepalette');
      var p = this.textElement = document.createElement('textarea');
      var text = this.mark.keyData.note.text;
      var color = this.color = this.mark.keyData.note.color || _store.default.noteColor;
      _store.default.noteColor = color;
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
      note.append(header);
      note.appendChild(gear);
      note.appendChild(del);
      note.appendChild(min);
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
      var color = this.color = _store.default.noteColor = el.getAttribute('data-color');
      this.el.classList.add('tmnote--' + color);
      this.mark.keyData.note.color = color;
      this.togglePalette();
      this.emit('changed:note-color', this.mark.id);
    },
    addMarkListeners: function addMarkListeners() {
      var _this4 = this;

      _store.default.get('noteonclick').then(function (noteonclick) {
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
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
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
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

var _note = _interopRequireDefault(__webpack_require__(/*! ./note */ "./content/page-injections/modules/note.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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
      return this.notes[mark.id] = new _note.default(mark, color);
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
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
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

      _store.default.get('notetransp').then(function (transp) {
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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

      _store.default.get('mode').then(function (active) {
        _this.active = active;
        if (_this.set || !active) return false;

        if (window.parent.window.document.readyState !== 'complete' && !_this.registeredLoadHandler) {
          _this.registeredLoadHandler = true;
          return _this.addListener('load', function () {
            return _this.setup();
          }, window.parent.window);
        }

        _store.default.iframe = _this.isIFrame();
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
          functionKeys = lockedActions.concat(arrowKeys),
          defaultMarkers = ['m', '2', '3'];
      if (_store.default.locked && lockedActions.includes(key)) return true;
      if (this.shiftSensitiveKeys.includes(keyCode)) key = this.keyCodeMap[keyCode];
      if (!functionKeys.includes(key) && window.getSelection().isCollapsed) return true;
      if (this.isEditable(e.target)) return true;

      _store.default.get('settings').then(function (settings) {
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
        _store.default.addEntries(entries); //_STORE.entry = entry;


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
            _store.default.name = recentlyOpenedEntry.name;
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
        _store.default.locked = true;
        entries = lockedEntries.sort(function (a, b) {
          return new Date(a.last) - new Date(b.last);
        });
      } else {
        _store.default.locked = false;
      }

      return entries;
    },
    onSelectionChange: function onSelectionChange(e) {
      this.emit('changed:selection', !window.getSelection().isCollapsed);
    },
    onUrlChange: function onUrlChange(tab, newUrl) {
      var entry = _store.default.entries[Object.keys(_store.default.entries)[0]];

      if (!_store.default.isNew && entry && entry.hashSensitive && (0, _utils._HASHLESS)(newUrl) === this.hashlessURL && newUrl !== this.url) {
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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

      return _store.default.get('progressbar').then(function (progressbar) {
        return _this3.active = progressbar;
      });
    }
  });
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

var _selection = _interopRequireDefault(__webpack_require__(/*! ./selection */ "./content/page-injections/modules/selection.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        this.selection = new _selection.default(el);

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

function _default() {
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
}

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
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = _SELECTION;

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/page-injections/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(mark) {
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

      _store.default.get('bmicon').then(function (bmicon) {
        _this.buttons.bookmark.show = bmicon;
        return _store.default.get('noteicon').then(function (noteicon) {
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

      _store.default.get('tmuipos').then(function (pos) {
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
}

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
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: ['finished:restoration', 'failed:restoration', 'succeeded:restoration', 'canceled:restoration', 'failed:restore-range', 'canceled:save-after-canceled-restoration', 'copy:marks', 'save:entry?', 'update:entry?', 'lookup:word', 'error:browser-console', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'activated:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note', 'warn:mixed-entry-types', 'warn:multiple-unlocked-entries', 'page-state', 'notes-state', 'visually-ordered:marks']
  }
});

exports.default = _default;

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
exports.default = void 0;
var _default = {
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
exports.default = _default;

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
exports._COPY = void 0;

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
exports._DOMMODULE = void 0;

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
function (_MODULE2) {
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
      console.log(subMap, type, [e.target.nodeName]);

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

exports._DOMMODULE = _DOMMODULE;

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
exports.default = void 0;

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

var _default = _ERRORTRACKER;
exports.default = _default;

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
exports.default = _default;

function _default(obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }

  return obj1;
}

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
exports._GET_ACTIVE_TAB = void 0;

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
exports._HASHLESS = void 0;

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
exports.default = _default;

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
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
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
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function _default() {
  document.addEventListener('DOMContentLoaded', function () {
    return translateDocument();
  }, {
    capture: false,
    passive: true,
    once: true
  });
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
exports.default = void 0;

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
      }).catch(function () {});
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

exports.default = _default;

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
exports._MODULE = void 0;

var _mediator = _interopRequireDefault(__webpack_require__(/*! ./mediator */ "./utils/mediator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _MODULE =
/*#__PURE__*/
function (_MEDIATOR2) {
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
        if (_this[handler]) _this.on(e, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this[handler]));
      }
    }

    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator.default);

exports._MODULE = _MODULE;

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
exports._PORT = void 0;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _PORT =
/*#__PURE__*/
function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    _this.port = null;
    var type = _this.type;
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.passMessage));
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

            _this.on(e, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.sendMessage, e));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
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

            _this.on(f, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.postMessage, f));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
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
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var type = this.type;
      var msg = {
        ev: e,
        args: args
      };
      if (type === 'content') browser.runtime.sendMessage(msg).catch(function () {});else if (type === 'background') {
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
                  browser.tabs.sendMessage(_tab.id, msg).catch(function () {});
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            });
          } else {
            browser.tabs.sendMessage(lastArg.tab, msg).catch(function () {});
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
                browser.tabs.sendMessage(_tab2.id, msg).catch(function () {});
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
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

exports._PORT = _PORT;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9hdXRvLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2Jvb2ttYXJrLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvY29udGV4dG1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXItcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9wYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9yZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3RtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfZW50cnkiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsImhpc3RvcnlTZXR0aW5ncyIsInNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsImZpZWxkIiwiUHJvbWlzZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyIiwibWV0aCIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJzeW5jZWRTdG9yYWdlIiwibG9jYWwiLCJsb2NhbEhpc3RvcnkiLCJsb2NhbFN0b3JhZ2UiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9ibWljb24iLCJtaXNjIiwiYm1pY29uIiwiX2dldF9ub3RlaWNvbiIsIm5vdGVpY29uIiwiX2dldF9ub3Rlb25jbGljayIsIm5vdGVvbmNsaWNrIiwiX2dldF9ub3RldHJhbnNwIiwibm90ZXRyYW5zcCIsIl9nZXRfdG11aXBvcyIsInRtdWlwb3MiLCJfZ2V0X2F1dG9zYXZlIiwiYXV0b3NhdmUiLCJfZ2V0X2ltbXV0IiwiX2dldF9wcm9ncmVzc2JhciIsInByb2dyZXNzYmFyIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiX2dldF9tb2RlIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X25hbWluZyIsImJvb3RzdHJhcHBlZCIsInBvd2VyIiwib24iLCJfRE9NTU9EVUxFIiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIl9TVE9SRSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwiZW1pdCIsIl9CT09LTUFSSyIsIm1hcmsiLCJhbmNob3IiLCJ3cmFwcGVycyIsInciLCJrZXlEYXRhIiwiYm9va21hcmsiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhY3RpdmF0ZSIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwicGFyZW50IiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhpZ2hsaWdodCIsImNyZWF0ZVRleHROb2RlIiwidGV4dENvbnRlbnQiLCJzaWxlbnQiLCJpbW11dGFibGUiLCJzYXZlIiwicmVxdWVzdCIsImdyYW50ZWQiLCJzdWIiLCJpMThuIiwiZ2V0TWVzc2FnZSIsInByb21wdCIsInJldHJpZXZlRW50cnkiLCJjb25maXJtZWQiLCJjb25maXJtIiwic3RvcmUiLCJvcmRlciIsIm9yZGVyTWFya3NWaXN1YWxseSIsInJlY3JlYXRlIiwiX1NFTEVDVElPTiIsInByb2dyYW1tYXRpY2FsbHkiLCJvbkZpbmlzaGVkUmVzdG9yYXRpb24iLCJ0cmltIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJvbkNhbmNlbGVkUmVzdG9yYXRpb24iLCJhZGROb3RlIiwiZmluZE1hcmsiLCJzYXZlTm90ZSIsIm1hcmtFbGVtZW50cyIsInBvcyIsImluZGljYXRlTWFyayIsImdvdG9OZXh0TWFyayIsImRpciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0bSIsInRtcyIsInNldCIsInJlbW92ZUJvb2ttYXJrIiwibWFyazEiLCJtYXJrMiIsIm0xIiwibTIiLCJiYjEiLCJiYjIiLCJ0b3AxIiwidG9wMiIsIm1hcCIsIndyYXBwZXJzMSIsIncxIiwiaWQxIiwid3JhcHBlcnMyIiwiaWQyIiwidzIiLCJvbk1hcmtlcktleSIsIm9uSG90a2V5IiwiY29sbGVjdE1hcmtzIiwibGFzdCIsIkRhdGUiLCJnZXRUaW1lIiwiYm9va21hcmtlZCIsInRpdGxlIiwiY291bnQiLCJmaXJzdCIsInVybCIsIlVSTCIsImtEIiwib25IYXNoQ2hhbmdlIiwiY29sb3IiLCJCT0RZIiwiRE9NIiwiY2xpY2siLCJrZXl1cCIsIm1vdXNlZG93biIsInRvdWNoc3RhcnQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsIm1hcmtDbGlja0hhbmRsZXIiLCJ2aXNpYmxlIiwicmVjZW50bHlVcGRhdGVkIiwic2V0dGluZ3NNb2RlIiwidCIsInNpemUiLCJoIiwiZHJhZ0RYIiwiZHJhZ0RZIiwibXV0YXRpb25PYnNlcnZlciIsImFkanVzdE5vdGVEYXRhT2JqZWN0IiwiY3JlYXRlTm90ZUVsZW1lbnQiLCJhZGRMaXN0ZW5lcnMiLCJhZGRNYXJrTGlzdGVuZXJzIiwibm90ZURhdGEiLCJoZWFkZXIiLCJkZWwiLCJnZWFyIiwicGFsZXR0ZSIsInRleHRFbGVtZW50IiwiZGVsVGV4dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pblRleHQiLCJnZWFyVGV4dCIsImNsYXNzTmFtZSIsImFwcGVuZCIsInZhbHVlIiwiYXR0ZW1wdFVwZGF0ZSIsIl9kZWxldGUiLCJoaWRlIiwicmVtb3ZlTWFya0xpc3RlbmVycyIsImZvcmNlIiwiaW5uZXJXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRQb3NpdGlvbiIsIm9mZnNldCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIiLCJicmluZ1VwRnJvbnQiLCJ6SW5kZXgiLCJkaXNjb25uZWN0IiwidG9nZ2xlIiwidG9nZ2xlUGFsZXR0ZSIsImNoYW5nZUNvbG9yIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dGFyZWEiLCJjb25maWciLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJzYXZlU2l6ZSIsIm9ic2VydmUiLCJyZWN0IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvbkRyYWdTdGFydCIsInBhZ2VYIiwicGFnZVkiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJtdXRhdGlvbnNMaXN0Iiwid2lkdGgiLCJub3RlcyIsImRyYWdIYW5kbGVyIiwiZHJhZ1N0b3BIYW5kbGVyIiwidXBkYXRlVHJhbnNwIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJjb25kaXRpb24iLCJib2R5Q2xhc3NlcyIsInRyYW5zcCIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJzdGFydERyYWdnaW5nTm90ZSIsImVtaXREcmFnRXZlbnQiLCJzdG9wRHJhZ2dpbmdOb3RlIiwiZG9jIiwic2VuZE5vdGVzU3RhdGUiLCJpbmZvIiwia2V5ZG93biIsInNlbGVjdGlvbmNoYW5nZSIsInJldHJ5QWN0aXZlIiwic2hpZnRTZW5zaXRpdmVLZXlzIiwicmVnaXN0ZXJlZExvYWRIYW5kbGVyIiwia2V5Q29kZU1hcCIsInNldHVwIiwicmVhZHlTdGF0ZSIsImlzSUZyYW1lIiwiaGFzaGxlc3NVUkwiLCJjaGVja1VSTCIsImlzRWRpdGFibGUiLCJ0YWdOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiZGVsZWdhdGUiLCJ0b0xvd2VyQ2FzZSIsImtleUNvZGUiLCJtb2RLZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiYXJyb3dLZXlzIiwibG9ja2VkQWN0aW9ucyIsImZ1bmN0aW9uS2V5cyIsImRlZmF1bHRNYXJrZXJzIiwiaXNDb2xsYXBzZWQiLCJvcmlnS2V5IiwiaXNNYXJrZXJLZXkiLCJpc0N1c3RvbU1hcmtlcktleSIsInNldHRpbmciLCJsb29rdXAiLCJzaG9ydGN1dCIsInMxIiwiczIiLCJzZWxlY3RlZFRleHQiLCJvblVybEZvdW5kIiwiZmlsdGVyRW50cmllcyIsInJlY2VudGx5T3BlbmVkRW50cnkiLCJpc0FycmF5IiwiZmlyc3RFbnRyeSIsImxvY2tlZEVudHJpZXMiLCJsb2NrZWRFbnRyaWVzRXhpc3QiLCJub25Mb2NrZWRFbnRyaWVzIiwiYSIsImIiLCJvblVybENoYW5nZSIsInRhYiIsIm5ld1VybCIsImFjdGl2YXRlUmV0cnkiLCJkZWFjdGl2YXRlUmV0cnkiLCJzZW5kUGFnZVN0YXRlIiwic3RlcHMiLCJ0b3RhbFdpZHRoIiwiY3VycmVudFdpZHRoIiwic3RlcExlbmd0aCIsImNhbmNlbEhhbmRsZXIiLCJtb2RhbCIsInR5cGUiLCJsZW4iLCJ0bXByb2dyZXNzIiwiY2FuY2VsIiwiY2xvc2VIYW5kbGVyIiwic3RvcCIsInRtcHJvZ3Jlc3NjYW5jZWwiLCJ0bXByb2dyZXNzY2xvc2UiLCJwcm9ncmVzcyIsIlJlc3RvcmVyQmFzZSIsImZhaWx1cmVSZXBvcnQiLCJyZXN0b3JlZCIsImFyZWEiLCJjYW5jZWxlZCIsInByb2MiLCJjYiIsInJlYyIsImV4cGlyZSIsImxsIiwidGVtcCIsIlJlc3RvcmVyIiwicXVldWUiLCJjYWNoZSIsInBoYXNlIiwic2VsZWN0aW9uVHJpYWwiLCJjaHVua0R1cmF0aW9uIiwiX3RpbWVyIiwib29tIiwiaW5pdCIsIm5vdyIsInBvc3Rwb25lZCIsImNvbnZlcnREZXNjcmlwdGlvbiIsImNyZWF0ZVRlbXBPYmplY3QiLCJjb252ZXJ0ZWRDb25kcyIsImZpcnN0Tm9kZU5hbWUiLCJmaXJzdFBhcmVudE5vZGVOYW1lIiwiZmlyc3RUZXh0Tm9kZVBvc2l0aW9uIiwiZmlyc3ROb2RlUG9zaXRpb24iLCJmaXJzdFBhcmVudE5vZGVQb3NpdGlvbiIsImZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uIiwidHJpbW1lZFRleHQiLCJzcXVlZXplZFRleHQiLCJzcXVlZXplIiwidGV4dExlbmd0aCIsInRyaW1tZWRUZXh0TGVuZ3RoIiwic3F1ZWV6ZWRUZXh0TGVuZ3RoIiwicG9zc2libGVQb3NpdGlvbnMiLCJwb3NzaWJsZUVuZFBvc2l0aW9ucyIsInBvc3NpYmxlU3RhcnROb2RlcyIsInBvc3NpYmxlRW5kcyIsInBvc3NpYmxlRm9jdXNPZmZzZXRzIiwic29ydFF1ZXVlQnlJZCIsInNldEJvZHlTZWxlY3Rpb24iLCJnZXRUZXh0UG9zaXRpb25zIiwicG9zdHBvbmVPdmVybGFwcGluZ3MiLCJmaW5kUG9zc2libGVFeHRyZW1hIiwicnVsZU91dE11bHRpcGxlcyIsInJlc3RvcmVSYW5nZXMiLCJ0aW1lciIsInJlcG9ydCIsInJlcyIsInRyaW1tZWRTZWxlY3Rpb25UZXh0IiwiYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyIsImVuZFBvc2l0aW9ucyIsIm1hcmtUZW1wIiwicmVhc29uIiwic29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJtYXhQb3NpdGlvbiIsInBvc2l0aW9ucyIsInBvczEiLCJwb3MyIiwicG9zdHBvbmUiLCJjdXRPdXRGb3IiLCJhbHJlYWR5SW5jbHVkZWQiLCJib2R5VGV4dE5vZGVzIiwic2F0aXNmaWVkIiwiY2hhcnMiLCJuZXh0U3RhcnRGb3VuZCIsImVuZGluZ3NJblRoaXNOb2RlIiwibm9kZXNUZXh0Iiwibm9kZXNUZXh0TGVuZ3RoIiwiZGlmZiIsImYiLCJxIiwicG9zc2libGVGb2N1c09mZnNldCIsInN0YXJ0Rm91bmRGb3IiLCJoYXNFbmRpbmdzSW5UaGlzTm9kZSIsImVuZEZvdW5kRm9yIiwic2F0aXNmaWVzRGVzY3JpcHRpb24iLCJmaW5kRm9jdXNPZmZzZXQiLCJncmFuZGdyYW5kZ3JhbXBhIiwibWF0Y2hlcyIsImZhaWxlZCIsInN0YXJ0Tm9kZSIsInN0YXJ0Tm9kZVBvc2l0aW9uIiwic2V0TWF0Y2hpbmdFbmQiLCJlbmROb2RlIiwiZW5kTm9kZVBvc2l0aW9uIiwiZm9jdXNPZmZzZXQiLCJkZXNjcmlwdGlvbiIsInJlbGV2YW50Tm9kZVRleHQiLCJtYXJrVGV4dCIsInRleHRzTWF0Y2giLCJub2RlVGV4dCIsImNvdW50ZXIiLCJ0ZXN0IiwiY3JlYXRlUmFuZ2UiLCJyZWNvbGxlY3ROb2RlcyIsInNsaWNlIiwiY29udGV4dCIsImN1cnJlbnRDaGlsZCIsIkltbXV0UmVzdG9yZXIiLCJwcm9jZXNzSW5DaHVua3MiLCJyZXN0b3JlUmFuZ2UiLCJnZXROb2RlIiwidGV4dE5vZGVQb3NpdGlvbiIsInJldHJ5Iiwib25GYWlsdXJlIiwiZ2V0UmVwb3J0IiwibXNnIiwicmFuZ2VDb3VudCIsImRlZmluZWQiLCJyZWR1Y2VUb09uZVJhbmdlIiwicmV0cmlldmVUZXh0IiwiYWRqdXN0Iiwic2VsZWN0QWxsQ2hpbGRyZW4iLCJwcm9wcyIsImlzU2ltcGxlIiwiZm9jdXMiLCJpc0JhY2t3YXJkcyIsInJldmVyc2UiLCJmaXJzdFRleHROb2RlIiwibGFzdFRleHROb2RlIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJ3aG9sZURvY3VtZW50IiwiZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJmaWx0ZXIiLCJpc1NlbGVjdGFibGUiLCJpc0JsYW5rIiwiaGFzTm9ybWFsUGFyZW50IiwiY29udGFpbnNOb2RlIiwiaXRlcmF0b3IiLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiYWNjZXB0Tm9kZSIsInRlbXBSYW5nZSIsInBhcmVudE5vZGVzIiwidGV4dE5vZGUiLCJmaXJzdE5vZGUiLCJsYXN0Tm9kZSIsIm5leHROb2RlIiwidHJpbVNlbGVjdGlvbiIsInJlZHVjZVRvU2VsZWN0YWJsZSIsImNvbGxlY3RQYXJlbnROb2RlcyIsIm1hcmtXcmFwcGVycyIsIm5ld1NlZ21lbnQiLCJwcmV2IiwibmV4dCIsIm5leHRTaWJsaW5nIiwidW5zaGlmdCIsImFuY2hvck9mZnNldCIsInN1YnN0ciIsInNlbCIsInJnIiwic2VsZWN0Tm9kZSIsInBhcmVudHMiLCJub2RlVGV4dHMiLCJqb2luIiwibm9kZTEiLCJub2RlMiIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwicmFuZ2UwIiwibGFzdFJhbmdlIiwidGFnIiwidG9VcHBlckNhc2UiLCJpc0NoaWxkT2YiLCJzZWFyY2giLCJhdHRhY2hlZCIsImJ1dHRvbnMiLCJzaG93biIsImNyZWF0ZUJ1dHRvbnMiLCJ1cGRhdGVTdGF0ZSIsInNob3VsZEF0dGFjaCIsInJlbmRlciIsImJ0biIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInVwZGF0ZVBvc2l0aW9uIiwidG11aSIsIm5vdGVzQnV0dG9uIiwiYm9va21hcmtCdXR0b24iLCJ0b2dnbGVOb3RlcyIsIm9uTm90ZUFkZGVkIiwib25MYXN0Tm90ZVJlbW92ZWQiLCJvbkJvb2ttYXJrQWRkZWQiLCJvbkJvb2ttYXJrUmVtb3ZlZCIsIl9QT1JUIiwiT05FT0ZGIiwiTUFYX0xPR19FTlRSSUVTIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIl9DT1BZIiwic3JjIiwidmFsIiwicHJvcCIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwic3ViTWFwIiwiY29uc29sZSIsImxvZyIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsIl9FUlJPUlRSQUNLRVIiLCJmaWxlIiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsImxpbmVubyIsImNvbG5vIiwidGltZSIsIm9iajEiLCJvYmoyIiwiX0dFVF9BQ1RJVkVfVEFCIiwidGFicyIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsIl9IQVNITEVTUyIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImwxMG5BdHRyIiwiYXR0ciIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsInRvcGljcyIsImFyZ3MiLCJ0b3BpYyIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNhdGNoIiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7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LEdBQXRCO0FBQ2hCOzs7a0NBQ2E7QUFDWixVQUFJLENBQUMsS0FBS2tLLGtCQUFWLEVBQThCO0FBQzVCLGFBQUtDLE9BQUw7QUFDQSxhQUFLQyxzQkFBTDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtBLHNCQUFMLENBQTRCLEtBQUs3bkIsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBSzRuQixPQUF0QixDQUE1QjtBQUNEO0FBQ0Y7Ozs4QkFDUztBQUFBOztBQUNSLFVBQU1iLE9BQU8sS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYXZ2QixRQUFRNnVCLE9BQVIsQ0FBZ0J1QixPQUFoQixDQUF3QjtBQUFFM3hCLGNBQU0sS0FBS0E7QUFBYixPQUF4QixDQUF0QztBQUNBOHdCLFdBQUtlLFlBQUwsQ0FBa0J0cUIsV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE9BQUt1cEIsSUFBTCxHQUFZLElBQWxCO0FBQUEsT0FBOUI7QUFDRDs7OzJDQUNzQjlQLEUsRUFBSTtBQUFBOztBQUN6QnpmLGNBQVE2dUIsT0FBUixDQUFnQjBCLFNBQWhCLENBQTBCdnFCLFdBQTFCLENBQXNDLGdCQUFRO0FBQzVDdXBCLGFBQUtDLFNBQUwsQ0FBZXhwQixXQUFmLENBQTJCLE9BQUt3QyxLQUFMLENBQVcsTUFBWCxFQUFpQixPQUFLaW5CLFdBQXRCLENBQTNCO0FBQ0EsU0FBQ2hRLEVBQUQsSUFBT0EsSUFBUDtBQUNELE9BSEQ7QUFJRDs7OztFQWxGd0J6aEIsZSIsImZpbGUiOiJjb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdzZXRBcmVhcycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDpoYXNob3B0LXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnOiAnc2V0U3luY0ZvckVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZSc6ICdyZW5hbWVFbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnOiAncmVzdW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gIGluaXRpYWxpemluZzogZmFsc2UsXHJcbiAgYXJlYV9zZXR0aW5nczogJ3N5bmMnLFxyXG4gIGFyZWFfaGlzdG9yeTogJ3N5bmMnLFxyXG4gIGFyZWFfZW50cnk6ICdzeW5jJyxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47Ly9zaG93IG5vdGlmaWNhdGlvblxyXG5cclxuICAgIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXRBcmVhcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzdG9yYWdlLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3RvcmFnZS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZW5hbWVFbnRyeShlbnRyeSwgb2xkTmFtZSkge1xyXG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUgPT09IG9sZE5hbWUgJiYgIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIGlmICh0aGlzLmVudHJpZXNbb2xkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0U3luY0ZvckVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkICYmIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSkge1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0uc3luY2VkID0gZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUVudHJ5KGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICBpZiAoZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lID09PSBkZWxldGVkRW50cnkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICBhZGRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQpIHRoaXMubmFtZSA9IGVudHJpZXNbMF0ubmFtZTtcclxuICAgIGNvbnN0IGUgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZW50cmllc1swXS5pbW11dDtcclxuICB9LFxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRBcmVhcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9LFxyXG5cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZXRyYW5zcCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RtdWlwb3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2ltbXV0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3Byb2dyZXNzYmFyKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MucHJvZ3Jlc3NiYXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5cclxuaW1wb3J0IF9QQUdFIGZyb20gJy4vbW9kdWxlcy9wYWdlJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dG1lbnUnXHJcbmltcG9ydCBfTUFSS0VSIGZyb20gJy4vbW9kdWxlcy9tYXJrZXInXHJcbmltcG9ydCBfUFJPR1JFU1MgZnJvbSAnLi9tb2R1bGVzL3Byb2dyZXNzJ1xyXG5pbXBvcnQgX1JFU1RPUkVSIGZyb20gJy4vbW9kdWxlcy9yZXN0b3JlcidcclxuaW1wb3J0IF9OT1RFUyBmcm9tICcuL21vZHVsZXMvbm90ZXMnXHJcbmltcG9ydCBfVE1VSSBmcm9tICcuL21vZHVsZXMvdG11aSdcclxuaW1wb3J0IF9NQVJLRVJQT1BVUCBmcm9tICcuL21vZHVsZXMvbWFya2VyLXBvcHVwJ1xyXG5pbXBvcnQgX0FVVE9NQVJLRVIgZnJvbSAnLi9tb2R1bGVzL2F1dG8tbWFya2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdhdXRvaW5pdCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJvb3RzdHJhcHBlZDogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkgJiYgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnBvd2VyKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHBvd2VyKG9uKSB7XHJcbiAgICBpZiAoIW9uIHx8IHRoaXMuYm9vdHN0cmFwcGVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgX1BBR0UoKTtcclxuICAgIF9DVE0oKTtcclxuICAgIF9QUk9HUkVTUygpO1xyXG4gICAgX1JFU1RPUkVSKCk7XHJcbiAgICBfTUFSS0VSKCk7XHJcbiAgICBfTk9URVMoKTtcclxuICAgIF9UTVVJKCk7XHJcbiAgICBfTUFSS0VSUE9QVVAoKTtcclxuICAgIF9BVVRPTUFSS0VSKCk7XHJcblxyXG4gICAgdGhpcy5ib290c3RyYXBwZWQgPSB0cnVlO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vX3N0b3JlJ1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJ1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcic6ICdzZXRNYXJrZXInXHJcbiAgICAgIH1cclxuXHRcdH0sXHJcblxyXG4gICAgaGFuZGxlcjogbnVsbCxcclxuICAgIG1hcmtlcjogJ20nLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2V0TWFya2VyKGtleSkge1xyXG4gICAgICB0aGlzLm1hcmtlciA9IGtleTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiB0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdGFydExpc3RlbmluZygpIHtcclxuICAgICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2V1cC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RvcExpc3RlbmluZygpIHtcclxuICAgICAgaWYgKHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbk1vdXNldXAoKSB7XHJcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICAgICAgaWYgKHNlbGVjdGlvbikgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgdGhpcy5tYXJrZXIpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQk9PS01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFyayA9IG51bGw7XHJcbiAgICB0aGlzLmFuY2hvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQobWFyaykge1xyXG4gICAgbWFyayA9IG1hcmsgfHwgdGhpcy5tYXJrO1xyXG5cclxuICAgIGxldCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuICAgICAgICBhbmNob3IgPSB3cmFwcGVyc1swXTtcclxuXHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgYW5jaG9yLmlkID0gJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJztcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcblxyXG4gICAgdGhpcy5tYXJrID0gbWFyaztcclxuICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZW1vdmUoKSB7XHJcbiAgICBsZXQgbWFyayA9IHRoaXMubWFyayxcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvcixcclxuICAgICAgICB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aDtcclxuXHJcbiAgICBhbmNob3IuaWQgPSAnJztcclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuICB9XHJcbiAgc2Nyb2xsSW50b1ZpZXcoYm0pIHtcclxuICAgIGlmIChibSB8fCAoYm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJykpKVxyXG4gICAgICBibS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICdhY3RpdmF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGUodHJ1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFjdGl2YXRlKG9uKSB7XHJcbiAgICAgIGlmIChvbiAmJiAhdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghb24gJiYgdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWdpc3RlckhhbmRsZXIoKSB7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGV4dG1hcmtlci1oaWdobGlnaHQnKSkge1xyXG4gICAgICAgICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBfU1RPUkUudG1pZCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgd2luZG93LmRvY3VtZW50KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXJrZXIsIGtleSwgcHJlU2V0dGluZ3MsIGltbXV0KSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uLCBkZWZhdWx0cztcclxuXHJcblx0XHR0aGlzLm1hcmtlciA9IG1hcmtlcjtcclxuXHRcdHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbWFya2VyLnNlbGVjdGlvbjtcclxuICAgIHRoaXMuaW1tdXQgPSBfU1RPUkUucmVkZXNjcmliaW5nID8gbWFya2VyLmlzSW1tdXQgOiBpbW11dDtcclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICAgIGNvbmRzOiBudWxsLFxyXG4gICAgICB0ZXh0OiBzZWxlY3Rpb24udGV4dCxcclxuICAgICAgbm90ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGQgaW4gZGVmYXVsdHMpIHtcclxuICAgICAgaWYgKCFwcmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShkKSkge1xyXG4gICAgICAgIHByZVNldHRpbmdzW2RdID0gZGVmYXVsdHNbZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZVNldHRpbmdzLmlkID0gcHJlU2V0dGluZ3MuaWQgfHwgKyttYXJrZXIuaWRjb3VudDtcclxuXHRcdHRoaXMuaWQgPSBwcmVTZXR0aW5ncy5pZDtcclxuXHRcdHRoaXMuc2ltcGxlID0gc2VsZWN0aW9uLnNpbXBsZTtcclxuXHJcblx0XHRsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLnJhbmdlO1xyXG5cclxuXHRcdHRoaXMuc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldDtcclxuXHRcdHRoaXMuZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0O1xyXG5cclxuXHRcdHRoaXMud3JhcHBlcnMgPSBudWxsO1xyXG4gICAgdGhpcy5jb250YWluZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhID0ge1xyXG5cdFx0XHRpZDogcHJlU2V0dGluZ3MuaWQsXHJcblx0XHRcdGtleToga2V5LFxyXG5cdFx0XHRzdHlsZTogcHJlU2V0dGluZ3Muc3R5bGUsXHJcblx0XHRcdGNvbmRzOiBwcmVTZXR0aW5ncy5jb25kcyxcclxuXHRcdFx0dGV4dDogcHJlU2V0dGluZ3MudGV4dCxcclxuXHRcdFx0Ym9va21hcms6IHByZVNldHRpbmdzLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiBwcmVTZXR0aW5ncy5ub3RlLFxyXG4gICAgICBzeW5jZWQ6IHByZVNldHRpbmdzLnN5bmNlZFxyXG5cdFx0fTtcclxuXHJcbiAgICBpZiAodGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkge1xyXG4gICAgICB0aGlzLmRlc2NyaWJlX2ltbXV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHRjcmVhdGUocmFuZ2UpIHtcclxuICAgIHJhbmdlID0gcmFuZ2UgfHwgdGhpcy5yYW5nZTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBzdHlsZSA9IHRoaXMua2V5RGF0YS5zdHlsZSxcclxuICAgICAgICBub2RlcyA9IHNlbGVjdGlvbi5ub2RlcyxcclxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgfHwgdGhpcy5jcmVhdGVXcmFwcGVycyhzdHlsZSwgbiksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbGFzdEluZGV4ID0gbiAtIDEsXHJcbiAgICAgICAgbm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgICAgaWYgKCFpKSByYW5nZS5zZXRTdGFydChub2RlLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuXHJcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcnNbaV0pO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh3cmFwcGVyc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKHRoaXMua2V5RGF0YS5ib29rbWFyaykgdGhpcy5tYXJrZXIuc2V0Qm9va21hcmsodGhpcywgZmFsc2UpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkgdGhpcy5kZXNjcmliZSgpO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJDbGlja0xpc3RlbmVycygpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuICByZWdpc3RlckNsaWNrTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgZm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrZXIucHJveHkodGhpcywgdGhpcy5vbkNsaWNrKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNsaWNrKGUpIHtcclxuICAgIGxldCBldmVudDtcclxuICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICBldmVudCA9ICdjbGlja2VkOm1hcmsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlICsgJ18wJztcclxuICAgICAgZXZlbnQgPSAnYWN0aXZhdGVkOm1hcmsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXJrZXIuZW1pdChldmVudCwge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgYm9va21hcms6ICEhdGhpcy5rZXlEYXRhLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiAhIXRoaXMua2V5RGF0YS5ub3RlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVmaW5lUG9zaXRpb24obiwgaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgbGV0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIG4gPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogd3JhcHBlcnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGZpcnN0V3JhcHBlciA9IHdyYXBwZXJzWzBdO1xyXG4gICAgY29uc3QgbGFzdFdyYXBwZXIgPSB3cmFwcGVyc1tuXTtcclxuICAgIGNvbnN0IGZpcnN0UGFyZW50ID0gZmlyc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBsYXN0UGFyZW50ID0gbGFzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGxldCBhbmNob3JQcmV2LCBmb2N1c1ByZXY7XHJcblxyXG4gICAgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQoZmlyc3RQYXJlbnQsIGZpcnN0V3JhcHBlciwgdHJ1ZSkgLSAxO1xyXG4gICAgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChsYXN0UGFyZW50LCBsYXN0V3JhcHBlciwgdHJ1ZSk7XHJcblxyXG4gICAgYW5jaG9yUHJldiA9IGZpcnN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBmb2N1c1ByZXYgPSBsYXN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcblxyXG4gICAgaWYgKGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5ub2RlVHlwZSA9PT0gMSkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gKz0gMTtcclxuICAgIGlmICghZm9jdXNQcmV2IHx8IGZvY3VzUHJldi5ub2RlVHlwZSA9PT0gMyB8fCBmaXJzdFBhcmVudCA9PT0gbGFzdFBhcmVudCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiAtPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA8IDApIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gMDtcclxuICAgIGlmICh0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgaWYgKGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgICAgdGhpcy5zdGFydE9mZnNldCA9IGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5kYXRhID8gYW5jaG9yUHJldi5kYXRhLmxlbmd0aCA6IDA7XHJcbiAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdGhpcy5zaW1wbGUgPyB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5rZXlEYXRhLnRleHQubGVuZ3RoIDogdGhpcy5lbmRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbih1bmRlZmluZWQsIHRydWUpXHJcbiAgICAgICAgLmRlc2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cdHVuZG8oKSB7XHJcblx0XHRsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuXHRcdFx0XHR3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMsXHJcblx0XHRcdFx0dyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuXHRcdFx0XHRjb250YWluZXIsIHdyYXBwZXI7XHJcblxyXG5cdFx0d2hpbGUgKHctLSkge1xyXG5cdFx0XHRjb250YWluZXIgPSBjb250YWluZXJzW3ddO1xyXG5cdFx0XHR3cmFwcGVyID0gd3JhcHBlcnNbd107XHJcblx0XHRcdGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcclxuXHRcdFx0Y29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHJlZG8oKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChjb250YWluZXJzWzBdLmNoaWxkTm9kZXNbdGhpcy5hbmNob3JOb2RlUG9zaXRpb25dLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV0uY2hpbGROb2Rlc1t0aGlzLmZvY3VzTm9kZVBvc2l0aW9uXSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24uY29sbGVjdE5vZGVzKCk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKCk7XHJcblx0fVxyXG5cdHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgaW5jbHVkaW5nVGV4dE5vZGVzKSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdGxldCBjaGlsZHJlbiA9IGluY2x1ZGluZ1RleHROb2RlcyB8fCBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0XHRcdGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHRjcmVhdGVXcmFwcGVycyhzdHlsZSwgbnVtYmVyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICB3cmFwcGVyO1xyXG5cclxuXHRcdGZvciAoIDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcblx0XHRcdHdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0Jyk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UoLzsvZywgJyFpbXBvcnRhbnQ7JykpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcsIHRoaXMuaWQgKyAnXycgKyBpKTtcclxuICAgICAgLy93cmFwcGVyLnNldEF0dHJpYnV0ZSgnY29udGV4dG1lbnUnLCAndGV4dG1hcmtlci1jdG0nKTtcclxuXHRcdFx0d3JhcHBlcnMucHVzaCh3cmFwcGVyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3cmFwcGVycztcclxuXHR9XHJcbiAgZGVzY3JpYmUoKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XHJcblx0XHRjb25zdCBlbmQgPSByYW5nZS5lbmRDb250YWluZXI7XHJcblx0XHRjb25zdCBzaW5nbGVOb2RlID0gdGhpcy5zaW1wbGU7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLndyYXBwZXJzWzBdLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBwYXJlbnRJc1RNID0gcGFyZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG5cdFx0Y29uc3QgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBncmFuZGdyYW1wYSA9IGdyYW1wYS5wYXJlbnROb2RlIHx8IDA7XHJcblx0XHRjb25zdCBmVE5QID0gdGhpcy5hbmNob3JOb2RlUG9zaXRpb247XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG5cdFx0XHRvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG5cdFx0XHRuMTogcGFyZW50SXNUTSA/ICdUTScgOiBwYXJlbnQubm9kZU5hbWUsXHJcblx0XHRcdHAxOiBmVE5QLFxyXG5cdFx0XHRuMjogZ3JhbXBhLm5vZGVOYW1lLFxyXG5cdFx0XHRwMjogdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSxcclxuXHRcdFx0cDM6IGdyYW5kZ3JhbXBhID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLCBncmFtcGEpIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRwNDogZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYS5wYXJlbnROb2RlLCBncmFuZGdyYW1wYSkgOiB1bmRlZmluZWRcclxuXHRcdH07XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG5cdH1cclxuICBkZXNjcmliZV9pbW11dCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgZW5kUG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGxldCBzdGFydCA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGVuZCA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBib2R5KSB7XHJcbiAgICAgIHN0YXJ0UG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoc3RhcnQucGFyZW50Tm9kZSwgc3RhcnQpKTtcclxuICAgICAgc3RhcnQgPSBzdGFydC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGVuZCAhPT0gYm9keSkge1xyXG4gICAgICBlbmRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChlbmQucGFyZW50Tm9kZSwgZW5kKSk7XHJcbiAgICAgIGVuZCA9IGVuZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgcDogc3RhcnRQb3NpdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBlOiB7XHJcbiAgICAgICAgbzogdGhpcy5lbmRPZmZzZXQsXHJcbiAgICAgICAgcDogZW5kUG9zaXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgICB9XHJcblx0XHR9LFxyXG5cclxuICAgIGhhbmRsZXI6IG51bGwsXHJcbiAgICBhcHBlbmRlZDogZmFsc2UsXHJcbiAgICBoZWlnaHQ6IDAsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ3BvcHVwJztcclxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwJyk7XHJcbiAgICAgIGNvbnN0IGJnQ29sb3JSZWdFeHAgPSAvYmFja2dyb3VuZC1jb2xvcjooI1thLWYwLTldezZ9KS87XHJcbiAgICAgIGxldCBiZ0NvbG9yLCBjb2xvckJ0bjtcclxuICAgICAgZm9yIChsZXQgbSBpbiB0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgICBiZ0NvbG9yID0gdGhpcy5tYXJrZXJzW21dLnN0eWxlLm1hdGNoKGJnQ29sb3JSZWdFeHApO1xyXG4gICAgICAgIGlmIChiZ0NvbG9yKSB7XHJcbiAgICAgICAgICBjb2xvckJ0biA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwY29sb3InKTtcclxuICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGNvbG9yQnRuKTtcclxuICAgICAgICAgIGNvbG9yQnRuLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yLnBvcCgpO1xyXG4gICAgICAgICAgY29sb3JCdG4uaWQgPSAndG1wb3B1cGNvbG9yLS0nICsgbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93KCkge1xyXG4gICAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gcG9wdXAuc3R5bGU7XHJcbiAgICAgIGxldCBwb3B1cEhlaWdodDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNlZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmFwcGVuZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uUG9zaXRpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgc3R5bGUudG9wID0gc2VsZWN0aW9uUG9zaXRpb24udG9wIC0gc2VsZWN0aW9uUG9zaXRpb24uaGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgKyAncHgnO1xyXG4gICAgICAgIHN0eWxlLmxlZnQgPSBzZWxlY3Rpb25Qb3NpdGlvbi5sZWZ0ICsgd2luZG93LnNjcm9sbFggKyAncHgnO1xyXG5cclxuICAgICAgICBwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSAtIHBvcHVwSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICgocG9wdXBIZWlnaHQgPSBwb3B1cC5vZmZzZXRIZWlnaHQpICE9PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgIHN0eWxlLnRvcCA9IHBhcnNlSW50KHN0eWxlLnRvcCkgKyBwb3B1cEhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmhlaWdodCA9IHBvcHVwSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWQpIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTW91c2Vkb3duKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdUTVBPUFVQQ09MT1InKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBvcHVwLW1hcmtlcicsIGVsLmlkLnNwbGl0KCctLScpLnBvcCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLIGZyb20gJy4vbWFyay1pdGVtJ1xyXG5pbXBvcnQgX0JPT0tNQVJLIGZyb20gJy4vYm9va21hcmsnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgLy8gbWFya2VyIG1vZHVsZVxyXG5cdHJldHVybiBuZXcgX01PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuXHRcdFx0RU5WOiB7XHJcblx0XHRcdFx0J3NldDplbnRyaWVzJzogJ3VwZGF0ZUlEJyxcclxuXHRcdFx0XHQncHJlc3NlZDptYXJrZXIta2V5JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAncHJlc3NlZDpob3RrZXknOiAnb25Ib3RrZXknLFxyXG4gICAgICAgICdjbGlja2VkOnBvcHVwLW1hcmtlcic6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3NlbGVjdGlvbi1lbmQnOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdyZWNyZWF0ZScsXHJcbiAgICAgICAgJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnY2FuY2VsZWQ6cmVzdG9yYXRpb24nOiAnb25DYW5jZWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnY3R4OmInOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAgICdjdHg6LWInOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAgICdjdHg6ZCc6ICdyZW1vdmUnLFxyXG4gICAgICAgICdjdHg6bSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ2N0eDpuJzogJ2FkZE5vdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdjaGFuZ2VkOm5vdGUtY29sb3InOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgICAnY2hhbmdlZDpub3RlLXNpemUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdzaWRlYmFyOmhpZ2hsaWdodCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAgICdzaWRlYmFyOmJvb2ttYXJrJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6aW1tdXQnOiAnaW1tdXQnLFxyXG4gICAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcyc6ICdzYXZlJyxcclxuICAgICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAgICdzaWRlYmFyOnVuZG8nOiAndW5kbycsXHJcbiAgICAgICAgJ3NpZGViYXI6cmVkbyc6ICdyZWRvJyxcclxuICAgICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyayc6ICdzY3JvbGxUb0Jvb2ttYXJrJyxcclxuICAgICAgICAnc2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAgICdjbGlja2VkOm1hcmsnOiAnZ290b01hcmsnLFxyXG4gICAgICAgICdoYXNoY2hhbmdlJzogJ29uSGFzaENoYW5nZSdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdGlvbjogbnVsbCxcclxuXHRcdGRvbmU6IFtdLFxyXG5cdFx0dW5kb25lOiBbXSxcclxuXHRcdHZpc3VhbGx5T3JkZXJlZE1hcmtzOiBbXSxcclxuXHRcdHZpc3VhbGx5T3JkZXJlZE1hcmtJRHM6IFtdLFxyXG4gICAgYm9va21hcms6IG51bGwsXHJcbiAgICByZW1vdmVkQm9va21hcms6IG51bGwsXHJcblx0XHRpZGNvdW50OiAwLFxyXG5cdFx0bWFya1Njcm9sbFBvczogLTEsXHJcblxyXG4gICAgdXBkYXRlSUQoZW50cmllcykge1xyXG4gICAgICBjb25zdCBsID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICAgIGNvbnN0IGlkcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKCFsb2NrZWQgJiYgZW50cnkuaWRjb3VudCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaWRjb3VudCA9IGVudHJ5LmlkY291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBtYXJrcyA9IChlbnRyeS5tYXJrcyB8fCBbXSkuY29uY2F0KGVudHJ5Lmxvc3QgfHwgW10pLFxyXG4gICAgICAgICAgICAgIGQgPSBtYXJrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgICAgd2hpbGUgKGQtLSkge1xyXG4gICAgICAgICAgICAgIGlkcy5wdXNoKG1hcmtzW2RdLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlkY291bnQgPSBNYXRoLm1heC5hcHBseShudWxsLCBpZHMpO1xyXG4gICAgfSxcclxuXHRcdG1hcmsoa2V5LCBkYXRhLCBpbW11dCkge1xyXG5cdFx0XHR0aGlzLnVuZG9uZS5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgY29uc3QgbWFyayA9IG5ldyBfTUFSSyh0aGlzLCBrZXksIGRhdGEsIGltbXV0KS5jcmVhdGUoKTtcclxuXHJcbiAgICAgIGlmIChkYXRhLmF1dG9ub3RlKSB0aGlzLmVtaXQoJ2FkZDpub3RlJywgbWFyaywgZGF0YS5hdXRvbm90ZSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbWFyaztcclxuXHRcdH0sXHJcblx0XHR1bmRvKG5vQXV0b3NhdmUpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcblx0XHRcdGxldCBkb25lID0gdGhpcy5kb25lO1xyXG5cclxuXHRcdFx0aWYgKGRvbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZS5wb3AoKTtcclxuICAgICAgICBjb25zdCBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICAgIHRoaXMudW5kb25lLnB1c2gobWFyay51bmRvKCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib29rbWFyaykgdGhpcy51bmRvQm9va21hcmsoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vQXV0b3NhdmUgfHwgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0fSxcclxuXHRcdHJlZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IHVuZG9uZSA9IHRoaXMudW5kb25lO1xyXG5cclxuXHRcdFx0aWYgKHVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBtYXJrID0gdGhpcy51bmRvbmUucG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZS5wdXNoKG1hcmsucmVkbygpKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm5vdGVzJywgW21hcmtdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHR9LFxyXG4gICAgY3V0T3V0KGkpIHtcclxuICAgICAgbGV0IG1hcmtlciA9IHRoaXMsXHJcbiAgICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgICAgbCA9IGRvbmUubGVuZ3RoLFxyXG4gICAgICAgICAgdG9CZVJlbW92ZWQgPSBbaV0sXHJcbiAgICAgICAgICBpbmRpY2VzID0gW2ldLFxyXG4gICAgICAgICAgbWFyaywgc21hbGxlc3RJRDtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGopIHtcclxuICAgICAgICBmb3IgKHZhciB4ID0gaiArIDE7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgIG1hcmsgPSBkb25lW3hdO1xyXG5cclxuICAgICAgICAgIGlmIChtYXJrZXIubWFya3NJbnRlcnNlY3QoZG9uZVtqXSwgbWFyaykpIHtcclxuICAgICAgICAgICAgaWYgKCF0b0JlUmVtb3ZlZC5pbmNsdWRlcyh4KSkgdG9CZVJlbW92ZWQucHVzaCh4KTtcclxuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRpY2VzLnNvcnQoKTtcclxuICAgICAgICB0b0JlUmVtb3ZlZC5zb3J0KCk7XHJcbiAgICAgIH1cclxuICAgICAgd2hpbGUgKGluZGljZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3MoaW5kaWNlcy5zaGlmdCgpKTtcclxuICAgICAgfVxyXG4gICAgICBzbWFsbGVzdElEID0gTWF0aC5taW4uYXBwbHkobnVsbCwgdG9CZVJlbW92ZWQpO1xyXG5cclxuICAgICAgd2hpbGUgKHRvQmVSZW1vdmVkLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZG9uZS5zcGxpY2UodG9CZVJlbW92ZWQucG9wKCksIDEpWzBdLnVuZG8oKTtcclxuICAgICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNtYWxsZXN0SUQ7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBpZCA9IGlkID8gaWQgOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG4gICAgICBpZiAoIWlkKSByZXR1cm4gdGhpcy51bmRvKCk7XHJcblxyXG4gICAgICBsZXQgbWFyayA9IHRoaXMuZ2V0QnlJZChpZC5zcGxpdCgnXycpWzBdKSxcclxuICAgICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgICBwb3NpdGlvbiA9IGRvbmUuaW5kZXhPZihtYXJrKSxcclxuICAgICAgICAgIHNtYWxsZXN0SUQsIGk7XHJcblxyXG4gICAgICBpZiAocG9zaXRpb24gPT09IGwgLSAxKSB7XHJcbiAgICAgICAgdGhpcy51bmRvKCk7XHJcbiAgICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy51bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzbWFsbGVzdElEID0gdGhpcy5jdXRPdXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpID0gdGhpcy51bmRvbmUubGVuZ3RoO1xyXG5cclxuICAgICAgICAgIHdoaWxlICh0aGlzLnVuZG9uZS5sZW5ndGgpIHRoaXMucmVkbyh0cnVlKTtcclxuXHJcbiAgICAgICAgICBzbWFsbGVzdElEID0gdGhpcy5jdXRPdXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgIHRoaXMuZG9uZS5mb3JFYWNoKGZ1bmN0aW9uKG1hcmspIHtcclxuICAgICAgICAgICAgaWYgKG1hcmsuaWQgPiBzbWFsbGVzdElEKSBtYXJrLnJlc3VtZSgpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKGktLSkgdGhpcy51bmRvKHRydWUpO1xyXG5cclxuICAgICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZFswXSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKGFyZywgb3B0aW9ucykge1xyXG4gICAgICBfU1RPUkUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIHdoaWxlICh0aGlzLmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgIC8vICAgdGhpcy51bmRvKHRydWUpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dG1hcmtlci1oaWdobGlnaHQnKSlcclxuICAgICAgICAuZm9yRWFjaChoaWdobGlnaHQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY29udGFpbmVyID0gaGlnaGxpZ2h0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGhpZ2hsaWdodC50ZXh0Q29udGVudCksIGhpZ2hsaWdodCk7XHJcbiAgICAgICAgICBjb250YWluZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmRvbmUgPSBbXTtcclxuICAgICAgdGhpcy51bmRvbmUgPSBbXTtcclxuICAgICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IFtdO1xyXG4gICAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSBbXTtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5tYXJrU2Nyb2xsUG9zID0gLTE7XHJcblxyXG4gICAgICBjb25zdCBlbnRyeSA9ICFhcmcgJiYgX1NUT1JFLm5hbWUgJiYgX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdID8gX1NUT1JFLmVudHJpZXNbX1NUT1JFLm5hbWVdIDogbnVsbDtcclxuXHJcbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgncmVzdW1lZDptYXJrZXJzJywgZW50cnkpO1xyXG4gICAgfSxcclxuICAgIGltbXV0KGltbXV0YWJsZSkge1xyXG4gICAgICB0aGlzLmlzSW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICAgIF9TVE9SRS5yZWRlc2NyaWJpbmcgPSB0cnVlO1xyXG4gICAgICBfU1RPUkUuaW1tdXQgPSBpbW11dGFibGU7XHJcbiAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgaWYgKF9TVE9SRS5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuZW1pdCgnY2FuY2VsZWQ6c2F2ZS1hZnRlci1jYW5jZWxlZC1yZXN0b3JhdGlvbicpO1xyXG5cclxuICAgICAgY29uc3QgaWZyYW1lID0gX1NUT1JFLmlmcmFtZTtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ25hbWluZycpLnRoZW4obmFtaW5nID0+IHtcclxuICAgICAgICBpZiAoX1NUT1JFLmlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgICAgaWYgKCFsb2NrZWQgJiYgbmFtaW5nID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoJ25hbWU6ZW50cnk/JykudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViID0gaWZyYW1lID8gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykgOiAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBfU1RPUkUubmFtZSA9IHdpbmRvdy5wcm9tcHQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2UnLCBzdWIpKTtcclxuICAgICAgICAgICAgICAgIGlmIChfU1RPUkUubmFtZSkgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNvbmZpcm1lZCA9IHRydWU7XHJcblx0ICAgICAgICAgIGlmIChpZnJhbWUpIGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpKTtcclxuXHQgICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcblx0ICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblx0XHR9LFxyXG4gICAgYXV0b3NhdmUoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2F1dG9zYXZlJykudGhlbihhdXRvc2F2ZSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dG9zYXZlKSB0aGlzLnNhdmUoKTtcclxuICAgICAgICBlbHNlIHRoaXMuZW1pdCgndW5zYXZlZC1jaGFuZ2VzJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHRcdHN0b3JlKG1hcmssIHNhdmUsIG9yZGVyKSB7XHJcblx0XHRcdHRoaXMuZG9uZS5wdXNoKG1hcmspO1xyXG4gICAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdFx0aWYgKG9yZGVyKSB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cdFx0fSxcclxuICAgIHJlY3JlYXRlKG1hcmspIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihudWxsLCB7IHByb2dyYW1tYXRpY2FsbHk6IHRydWUgfSk7XHJcbiAgICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKG1hcmsua2V5LCBtYXJrKSwgZmFsc2UsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICghdGhpcy5kb25lLmxlbmd0aCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lW3RoaXMuZG9uZS5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAoX1NUT1JFLm5hbWUgPT09IG1hcmsua2V5RGF0YS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpKSB7XHJcbiAgICAgICAgICB0aGlzLmdvdG9NYXJrKG1hcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUucmVkZXNjcmliaW5nKSB7XHJcbiAgICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DYW5jZWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBfU1RPUkUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGFkZE5vdGUoaWQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICAgIH0sXHJcbiAgICBzYXZlTm90ZShpZCkge1xyXG4gICAgICBpZiAoIV9TVE9SRS5sb2NrZWQpIHJldHVybiB0aGlzLmF1dG9zYXZlKCk7XHJcblxyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkKS5rZXlEYXRhO1xyXG4gICAgICBjb25zdCBzeW5jZWQgPSB0eXBlb2YgbWFyay5zeW5jZWQgPT09ICdib29sZWFuJyA/IG1hcmsuc3luY2VkIDogX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG5cclxuICAgICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgICAgbWFya3M6IFttYXJrXSxcclxuICAgICAgICBuYW1lOiBtYXJrLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSksXHJcbiAgICAgICAgc3luY2VkXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBnb3RvTWFyayhtYXJrKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtFbGVtZW50cyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3M7XHJcbiAgICAgIGxldCBlbCwgcG9zLCBpZDtcclxuICAgICAgaWYgKG1hcmsgfHwgbWFyayA9PT0gMCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IG1hcmsgKyAxO1xyXG4gICAgICAgICAgZWwgPSBtYXJrRWxlbWVudHNbbWFya107XHJcbiAgICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlkID0gbWFyay5pZDtcclxuICAgICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQ9XCInICsgaWQgKyAnXzBcIl0nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5tYXJrU2Nyb2xsUG9zO1xyXG4gICAgICAgIGVsID0gbWFya0VsZW1lbnRzW3Bvc107XHJcbiAgICAgICAgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKS5zcGxpdCgnXycpWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG5cclxuXHRcdFx0aWYgKCFtYXJrIHx8IHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykgdGhpcy5nZXRCeUlkKGlkKS5vbkNsaWNrKGlkKTtcclxuICAgICAgdGhpcy5pbmRpY2F0ZU1hcmsoaWQpO1xyXG4gICAgfSxcclxuXHRcdGdvdG9OZXh0TWFyayhkaXIpIHtcclxuXHRcdFx0Y29uc3QgbCA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubGVuZ3RoO1xyXG5cclxuXHRcdFx0dGhpcy5tYXJrU2Nyb2xsUG9zICs9IGRpcjtcclxuXHJcblx0XHRcdGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPCAwKSB0aGlzLm1hcmtTY3JvbGxQb3MgPSBsIC0gMTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5tYXJrU2Nyb2xsUG9zID49IGwpIHRoaXMubWFya1Njcm9sbFBvcyA9IDA7XHJcblxyXG5cdFx0XHR0aGlzLmdvdG9NYXJrKCk7XHJcblx0XHR9LFxyXG4gICAgaW5kaWNhdGVNYXJrKGlkKSB7XHJcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSlcclxuICAgICAgICAuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgICAgY29uc3QgdG1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZF49XCInICsgaWQgKyAnX1wiXScpKTtcclxuXHJcbiAgICAgIHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpLCAyMDAwKTtcclxuICAgIH0sXHJcbiAgICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrLFxyXG4gICAgICAgICAgbWFyayA9IHRoaXMuZmluZE1hcmsobSk7XHJcblxyXG4gICAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChib29rbWFyaykge1xyXG4gICAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbmV3IF9CT09LTUFSSygpLnNldChtYXJrKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6Ym9va21hcmsnKTtcclxuICAgICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb0Jvb2ttYXJrKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgICAgaWYgKCFib29rbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IGJvb2ttYXJrO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgICBpZiAoYm9va21hcmspIGJvb2ttYXJrLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0QnlJZChpZCwgcG9zKSB7XHJcblx0XHRcdGxldCBkb25lID0gdGhpcy5kb25lLFxyXG5cdFx0XHRcdCAgZCA9IGRvbmUubGVuZ3RoLFxyXG5cdFx0XHRcdCAgbWFyaztcclxuXHJcblx0XHRcdHdoaWxlIChkLS0pIHtcclxuXHRcdFx0XHRtYXJrID0gZG9uZVtkXTtcclxuXHJcblx0XHRcdFx0aWYgKG1hcmsua2V5RGF0YS5pZCA9PSBpZClcclxuXHRcdFx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG1hcmssIHBvc2l0aW9uOiBkIH0gOiBtYXJrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG51bGwsIHBvc2l0aW9uOiBudWxsIH0gOiBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRmaW5kTWFyayh4KSB7XHJcblx0XHRcdHggPSB4ID8geCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcblx0XHRcdGxldCBtYXJrID0gIXggP1xyXG5cdFx0XHRcdHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV0gOlxyXG5cdFx0XHRcdFx0dHlwZW9mIHggPT09ICdzdHJpbmcnID9cclxuXHRcdFx0XHR0aGlzLmdldEJ5SWQoeC5zcGxpdCgnXycpWzBdKSA6XHJcblx0XHRcdFx0eDtcclxuXHRcdFx0cmV0dXJuIG1hcms7XHJcblx0XHR9LFxyXG4gICAgc29ydEJ5SWQoKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5zb3J0KChtYXJrMSwgbWFyazIpID0+IG1hcmsxLmlkIC0gbWFyazIuaWQpO1xyXG4gICAgfSxcclxuXHRcdG9yZGVyTWFya3NWaXN1YWxseSgpIHtcclxuXHRcdFx0dGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQkPVwiXzBcIl0nKSkuc29ydCgobTEsIG0yKSA9PiB7XHJcblx0XHRcdFx0bGV0IGJiMSA9IG0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0XHRiYjIgPSBtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdFx0dG9wMSA9IGJiMS50b3AsXHJcblx0XHRcdFx0XHRcdHRvcDIgPSBiYjIudG9wO1xyXG5cclxuXHRcdFx0XHRpZiAodG9wMSA8IHRvcDIpIHJldHVybiAtMTtcclxuXHRcdFx0XHRlbHNlIGlmICh0b3AyIDwgdG9wMSkgcmV0dXJuIDE7XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoYmIxLmxlZnQgPCBiYjIubGVmdCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuICAgICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5tYXAobWFyayA9PiBwYXJzZUludChtYXJrLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSk7XHJcbiAgICAgIHRoaXMuZW1pdCgndmlzdWFsbHktb3JkZXJlZDptYXJrcycsIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyk7XHJcblx0XHR9LFxyXG4gICAgbWFya3NJbnRlcnNlY3QobWFyazEsIG1hcmsyKSB7XHJcblx0XHRcdGxldCB3cmFwcGVyczEgPSBtYXJrMS53cmFwcGVycyxcclxuICAgICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICAgIGlkMSA9IG1hcmsxLmlkLFxyXG4gICAgICAgICAgd3JhcHBlcnMyID0gbWFyazIud3JhcHBlcnMsXHJcbiAgICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICAgIHcyLCB0bXMsIGw7XHJcblxyXG4gICAgICB3aGlsZSAodzEtLSkge1xyXG4gICAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodzItLSkge1xyXG4gICAgICAgICAgdG1zID0gd3JhcHBlcnMxW3cxXS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF0nKTtcclxuICAgICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZiAodG1zW2xdLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpWzBdID09IGlkMilcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fSxcclxuICAgIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0XHRsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTigpO1xyXG5cclxuXHRcdFx0aWYgKCFzZWxlY3Rpb24ubm9kZXMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykga2V5ID0gZTtcclxuXHRcdFx0XHRlbHNlIHRoaXMucHJldmVudERlZmF1bHQoZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0a2V5ID0ga2V5IHx8ICdtJztcclxuXHRcdFx0fVxyXG5cclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoX1NUT1JFLmlzTmV3KSB7XHJcbiAgICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiAhIXNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IF9TVE9SRS5pbW11dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgICB9KTtcclxuXHRcdH0sXHJcbiAgICBvbkhvdGtleShrZXkpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgICBjYXNlICd5Jzogc2VsZi5yZWRvKCk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOiBzZWxmLnNhdmUoKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnYXJyb3d1cCc6IHNlbGYuZ290b05leHRNYXJrKC0xKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnYXJyb3dkb3duJzogc2VsZi5nb3RvTmV4dE1hcmsoMSk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdFx0aWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdHJldHJpZXZlRW50cnkoKSB7XHJcbiAgICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcbiAgICAgIGNvbnN0IGlzTmV3ID0gX1NUT1JFLmlzTmV3O1xyXG4gICAgICBjb25zdCBuYW1lID0gX1NUT1JFLm5hbWU7XHJcblxyXG4gICAgICBjb25zdCBlbnRyeSA9ICFsb2NrZWQgJiYgX1NUT1JFLmVudHJpZXNbbmFtZV0gPyBfU1RPUkUuZW50cmllc1tuYW1lXSA6IHt9O1xyXG5cclxuICAgICAgZW50cnkubWFya3MgPSB0aGlzLmNvbGxlY3RNYXJrcygpO1xyXG5cdFx0XHRlbnRyeS5sYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGVudHJ5LmJvb2ttYXJrZWQgPSAhIXRoaXMuYm9va21hcms7XHJcbiAgICAgIGVudHJ5LnRpdGxlID0gd2luZG93LmRvY3VtZW50LnRpdGxlO1xyXG5cdFx0XHRlbnRyeS5jb3VudCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuXHRcdFx0ZW50cnkuaWRjb3VudCA9IHRoaXMuaWRjb3VudDtcclxuICAgICAgZW50cnkuaW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiBlbnRyeS5pbW11dDtcclxuXHJcbiAgICAgIGlmIChpc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICBlbnRyeS5maXJzdCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgICAgZW50cnkudXJsID0gX1NUT1JFLmhhc2hTZW5zaXRpdmUgPyB3aW5kb3cuZG9jdW1lbnQuVVJMIDogX0hBU0hMRVNTKHdpbmRvdy5kb2N1bWVudC5VUkwpO1xyXG4gICAgICAgIGVudHJ5LnN5bmNlZCA9IF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJztcclxuICAgICAgICBlbnRyeS5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICAgICAgZW50cnkuaGFzaFNlbnNpdGl2ZSA9IF9TVE9SRS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbnRyeS5uYW1lID0gbG9ja2VkID9cclxuICAgICAgICBlbnRyeS5tYXJrc1swXS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpIDpcclxuICAgICAgICBpc05ldyA/IG5hbWUgOiBlbnRyeS5uYW1lO1xyXG5cclxuXHRcdFx0cmV0dXJuIGVudHJ5O1xyXG5cdFx0fSxcclxuICAgIGNvbGxlY3RNYXJrcygpIHtcclxuICAgICAgbGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcbiAgICAgIGxldCBsID0gZG9uZS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IG1hcmtzID0gW107XHJcblxyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICAgIGRvbmUgPSBbZG9uZVtsLTFdXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IGRvbmUubGVuZ3RoO1xyXG5cclxuICAgICAgZm9yIChsZXQgbSA9IDAsIGtEOyBtIDwgbDsgbSsrKSB7XHJcblx0XHRcdFx0a0QgPSBkb25lW21dLmtleURhdGE7XHJcbiAgICAgICAgZGVsZXRlIGtELnN5bmNlZDtcclxuXHRcdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuXHRcdFx0fVxyXG4gICAgICByZXR1cm4gbWFya3M7XHJcbiAgICB9LFxyXG4gICAgb25IYXNoQ2hhbmdlKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZShudWxsLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgdGhpcy5lbWl0KCdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFyaywgY29sb3IpIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWRkTWFya0xpc3RlbmVycycsXHJcbiAgICAgICAgJ2RyYWc6bm90ZSc6ICdvbkRyYWcnLFxyXG4gICAgICAgICdkcmFnc3RvcDpub3RlJzogJ29uRHJhZ0VuZCdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICd0bW5vdGVkZWxldGUnOiAnX2RlbGV0ZScsXHJcbiAgICAgICAgICAndG1ub3RlbWluaW1pemUnOiAnaGlkZScsXHJcbiAgICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAgICd0ZXh0YXJlYSc6ICdicmluZ1VwRnJvbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2F0dGVtcHRVcGRhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaHN0YXJ0OiB7XHJcbiAgICAgICAgICAndG1ub3RlaGVhZGVyJzogJ29uRHJhZ1N0YXJ0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcbiAgICBtYXJrLFxyXG4gICAgY29sb3I6IGNvbG9yIHx8ICcnLFxyXG4gICAgbWFya0NsaWNrSGFuZGxlcjogbnVsbCxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICByZWNlbnRseVVwZGF0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0dGluZ3NNb2RlOiBmYWxzZSxcclxuICAgIHBvczogeyBsOiBudWxsLCB0OiBudWxsIH0sXHJcbiAgICBzaXplOiB7IHc6IG51bGwsIGg6IG51bGwgfSxcclxuICAgIGRyYWdEWDogMCxcclxuICAgIGRyYWdEWTogMCxcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0Tm90ZURhdGFPYmplY3QoKTtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0Tm90ZURhdGFPYmplY3QoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVEYXRhID0gdGhpcy5tYXJrLmtleURhdGEubm90ZTtcclxuICAgICAgaWYgKHR5cGVvZiBub3RlRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgJ3llbGxvdycgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghbm90ZURhdGEpIHtcclxuICAgICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0geyB0ZXh0OiBub3RlRGF0YSwgY29sb3I6IHRoaXMuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvciB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zID0gbm90ZURhdGEucG9zIHx8IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5vdGVEYXRhLnNpemUgfHwgdGhpcy5zaXplO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlJyk7XHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlaGVhZGVyJyk7XHJcbiAgICAgIGNvbnN0IGRlbCA9IHRoaXMuZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlZGVsZXRlJyk7XHJcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlbWluaW1pemUnKTtcclxuICAgICAgY29uc3QgZ2VhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWN1c3RvbWl6ZScpO1xyXG4gICAgICBjb25zdCBwYWxldHRlID0gdGhpcy5wYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlcGFsZXR0ZScpO1xyXG4gICAgICBjb25zdCBwID0gdGhpcy50ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgfHwgX1NUT1JFLm5vdGVDb2xvcjtcclxuICAgICAgX1NUT1JFLm5vdGVDb2xvciA9IGNvbG9yO1xyXG4gICAgICBjb25zdCBkZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSkpO1xyXG4gICAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgweDIwMTMpKTtcclxuICAgICAgY29uc3QgZ2VhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjY5OSkpO1xyXG5cclxuICAgICAgWydncmVlbicsICd3aGl0ZScsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3JlZCcsICdwdXJwbGUnLCAnYmx1ZScsICd0dXJxdW9pc2UnXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZWNvbG9yJyk7XHJcbiAgICAgICAgY29sb3IuY2xhc3NOYW1lID0gJ3Rtbm90ZWNvbG9yLS0nICsgYztcclxuICAgICAgICBjb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCBjKTtcclxuICAgICAgICBwYWxldHRlLmFwcGVuZENoaWxkKGNvbG9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1ub3RlJywgdHJ1ZSk7XHJcbiAgICAgIGRlbC5hcHBlbmRDaGlsZChkZWxUZXh0KTtcclxuICAgICAgbWluLmFwcGVuZENoaWxkKG1pblRleHQpO1xyXG4gICAgICBnZWFyLmFwcGVuZENoaWxkKGdlYXJUZXh0KTtcclxuICAgICAgbm90ZS5hcHBlbmQoaGVhZGVyKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChnZWFyKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKG1pbik7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgY29sb3IpO1xyXG4gICAgICBpZiAodGV4dCkgcC52YWx1ZSA9IHRleHQ7XHJcblxyXG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHRoaXMuYXR0ZW1wdFVwZGF0ZShlLCBlLnRhcmdldCwgdHJ1ZSksIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlID0gJyc7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBhdHRlbXB0VXBkYXRlKGUsIGVsLCBmb3JjZSkge1xyXG4gICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXRoaXMucmVjZW50bHlVcGRhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlKGVsKSwgMzAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZWwpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS50ZXh0ID0gZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlZDpub3RlJywgdGhpcy5tYXJrLmlkKTtcclxuICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93KCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGlubmVyV2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgIGxldCBwb3MsIGxlZnQsIHRvcDtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBvcy5sICE9PSBudWxsKSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5wb3M7XHJcbiAgICAgICAgdG9wID0gcG9zLnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG4gICAgICAgIHRvcCA9IHRoaXMucG9zLnQgPSBwb3MudCArIHBvcy5vZmZzZXQ7XHJcbiAgICAgIH1cclxuICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBwb3MubDtcclxuXHJcbiAgICAgIGlmIChsZWZ0ICsgMzQwID4gaW5uZXJXaW5kb3dXaWR0aCkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gaW5uZXJXaW5kb3dXaWR0aCAtIDM0MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZS53ID8gJ3dpZHRoOicgKyB0aGlzLnNpemUudyArICc7aGVpZ2h0OicgKyB0aGlzLnNpemUuaCArICc7JyA6ICcnO1xyXG5cclxuICAgICAgQk9EWS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jazt0b3A6JyArIHRvcCArICdweDtsZWZ0OicgKyBsZWZ0ICsgJ3B4OycpO1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc2l6ZSk7XHJcbiAgICAgIHRoaXMuY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBicmluZ1VwRnJvbnQoKSB7XHJcbiAgICAgIEFycmF5LmZyb20oQk9EWS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlJykpLmZvckVhY2gobm90ZSA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGUgPT09IHRoaXMuZWwpIG5vdGUuc3R5bGUuekluZGV4ID0gMjE0NzQ4MzY0NztcclxuICAgICAgICBlbHNlIG5vdGUuc3R5bGUuekluZGV4ID0gMjE0NzQ4MzY0NjtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgQk9EWS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB0aGlzLmhpZGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVQYWxldHRlKCkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5nc01vZGUpIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnBhbGV0dGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NNb2RlID0gIXRoaXMuc2V0dGluZ3NNb2RlO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvbG9yKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS0nICsgdGhpcy5jb2xvcik7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvciA9IF9TVE9SRS5ub3RlQ29sb3IgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUuY29sb3IgPSBjb2xvcjtcclxuICAgICAgdGhpcy50b2dnbGVQYWxldHRlKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLWNvbG9yJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkTWFya0xpc3RlbmVycygpIHtcclxuICAgICAgX1NUT1JFLmdldCgnbm90ZW9uY2xpY2snKS50aGVuKG5vdGVvbmNsaWNrID0+IHtcclxuICAgICAgICBpZiAobm90ZW9uY2xpY2spIHtcclxuICAgICAgICAgIGlmICghIXRoaXMubWFya0NsaWNrSGFuZGxlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLm1hcmtDbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCd0aXRsZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZScpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVNYXJrTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBpZiAoIXRoaXMubWFya0NsaWNrSGFuZGxlcikgcmV0dXJuO1xyXG4gICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHRoaXMubWFyay53cmFwcGVycykge1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hcmtDbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbm5lY3RNdXRhdGlvbk9ic2VydmVyKCkge1xyXG4gICAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ10gfTtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgfHwgbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnNhdmVTaXplKSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGV4dGFyZWEsIGNvbmZpZyk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLm1hcmsud3JhcHBlcnNbdGhpcy5tYXJrLndyYXBwZXJzLmxlbmd0aCAtIDFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHQ6IHJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gQk9EWS5jbGllbnRUb3AsXHJcbiAgICAgICAgbDogcmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gQk9EWS5jbGllbnRMZWZ0LFxyXG4gICAgICAgIG9mZnNldDogcmVjdC5oZWlnaHRcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWdTdGFydChlLCBlbCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZHJhZ0RYID0gZS5wYWdlWCAtIHRoaXMucG9zLmw7XHJcbiAgICAgIHRoaXMuZHJhZ0RZID0gZS5wYWdlWSAtIHRoaXMucG9zLnQ7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnQ6ZHJhZycsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgb25EcmFnKG5vdGUsIGUpIHtcclxuICAgICAgaWYgKG5vdGUgPT09IHRoaXMubWFyay5pZCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zLmwgPSBlLnBhZ2VYIC0gdGhpcy5kcmFnRFg7XHJcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMucG9zLnQgPSBlLnBhZ2VZIC0gdGhpcy5kcmFnRFk7XHJcbiAgICAgICAgZWwuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xyXG4gICAgICAgIGVsLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRyYWdFbmQoKSB7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUucG9zID0gdGhpcy5wb3M7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpub3RlLXBvcycsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZVNpemUobXV0YXRpb25zTGlzdCkge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IG11dGF0aW9uc0xpc3RbMF0udGFyZ2V0LnN0eWxlO1xyXG4gICAgICB0aGlzLnNpemUgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnNpemUgPSB7IHc6IHN0eWxlLndpZHRoLCBoOiBzdHlsZS5oZWlnaHQgfTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtc2l6ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9OT1RFIGZyb20gJy4vbm90ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdhZGQ6bm90ZSc6ICdhZGRBbmRTaG93JyxcclxuICAgICAgICAncmVtb3ZlZDpub3RlJzogJ3JlbW92ZU5vdGVTdG9yYWdlJyxcclxuICAgICAgICAncmVzdG9yZTpub3Rlcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAncmVtb3ZlZDptYXJrJzogJ3JlbW92ZU5vdGUnLFxyXG4gICAgICAgICd0b2dnbGU6bm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnOiAndG9nZ2xlQWxsJyxcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVRyYW5zcCcsXHJcbiAgICAgICAgJ3N0YXJ0OmRyYWcnOiAnc3RhcnREcmFnZ2luZ05vdGUnLFxyXG4gICAgICAgICdvcGVuZWQ6c2lkZWJhcic6ICdzZW5kTm90ZXNTdGF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3Rlczoge30sXHJcbiAgICB0b2dnbGU6IG51bGwsXHJcbiAgICBkcmFnSGFuZGxlcjogbnVsbCxcclxuICAgIGRyYWdTdG9wSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRyYW5zcCgpO1xyXG4gICAgfSxcclxuICAgIGFkZChtYXJrLCBjb2xvcikge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5ub3Rlc1ttYXJrLmlkXTtcclxuICAgICAgaWYgKG5vdGUpIHJldHVybiBub3RlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2FkZGVkOm5vdGUnKTtcclxuICAgICAgcmV0dXJuIHRoaXMubm90ZXNbbWFyay5pZF0gPSBuZXcgX05PVEUobWFyaywgY29sb3IpO1xyXG4gICAgfSxcclxuICAgIHJlc3RvcmUobWFya3MpIHtcclxuICAgICAgZm9yIChsZXQgbWFyayBvZiBtYXJrcykge1xyXG4gICAgICAgIGlmIChtYXJrLmtleURhdGEubm90ZSkge1xyXG4gICAgICAgICAgdGhpcy5hZGQobWFyayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkQW5kU2hvdyhtYXJrLCBjb2xvcikge1xyXG4gICAgICB0aGlzLmFkZChtYXJrLCBjb2xvcikuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU5vdGVTdG9yYWdlKGlkKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLm5vdGVzW2lkXTtcclxuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSkgdGhpcy5lbWl0KCdyZW1vdmVkOmxhc3Qtbm90ZScpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU5vdGUoaWQpIHtcclxuICAgICAgaWYgKHRoaXMubm90ZXNbaWRdKSB0aGlzLm5vdGVzW2lkXS5yZW1vdmUoKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVBbGwoKSB7XHJcbiAgICAgIGlmICghdGhpcy5ub3RlcykgcmV0dXJuO1xyXG4gICAgICBjb25zdCBub3RlcyA9IHRoaXMubm90ZXM7XHJcbiAgICAgIGxldCBtZXRoID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKS5sZW5ndGggPyAnaGlkZScgOiAnc2hvdycsXHJcbiAgICAgICAgICBjb25kaXRpb24gPSBtZXRoID09PSAnaGlkZScgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICBub3RlO1xyXG4gICAgICBmb3IgKGxldCBuIGluIG5vdGVzKSB7XHJcbiAgICAgICAgbm90ZSA9IG5vdGVzW25dO1xyXG4gICAgICAgIGlmIChub3RlLnZpc2libGUgPT09IGNvbmRpdGlvbikge1xyXG4gICAgICAgICAgbm90ZVttZXRoXSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRyYW5zcCgpIHtcclxuICAgICAgY29uc3QgYm9keUNsYXNzZXMgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ25vdGV0cmFuc3AnKS50aGVuKHRyYW5zcCA9PiB7XHJcbiAgICAgICAgaWYgKHRyYW5zcCkgYm9keUNsYXNzZXMuYWRkKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgICBlbHNlIGJvZHlDbGFzc2VzLnJlbW92ZSgndG1ub3Rlcy0tMF84Jyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzRW1wdHkob2JqKSB7XHJcbiAgICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgc3RhcnREcmFnZ2luZ05vdGUobm90ZSkge1xyXG4gICAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIgPSAoZSkgPT4gdGhpcy5lbWl0RHJhZ0V2ZW50KG5vdGUsIGUpO1xyXG4gICAgICBjb25zdCBkcmFnU3RvcEhhbmRsZXIgPSB0aGlzLmRyYWdTdG9wSGFuZGxlciA9IChlKSA9PiB0aGlzLnN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSk7XHJcbiAgICAgIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBzdG9wRHJhZ2dpbmdOb3RlKG5vdGUsIGUpIHtcclxuICAgICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ1N0b3BIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2RyYWdzdG9wOm5vdGUnLCBub3RlLCBlKTtcclxuICAgIH0sXHJcbiAgICBlbWl0RHJhZ0V2ZW50KG5vdGUsIGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bm90ZScsIG5vdGUsIGUpO1xyXG4gICAgfSxcclxuICAgIHNlbmROb3Rlc1N0YXRlKGluZm8pIHtcclxuICAgICAgdGhpcy5lbWl0KCdub3Rlcy1zdGF0ZScsICF0aGlzLmlzRW1wdHkodGhpcy5ub3RlcyksIGluZm8pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogd2luZG93LmRvY3VtZW50LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ2NoZWNrVVJMJyxcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICdwb3dlcicsXHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmRQYWdlU3RhdGUnLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbic6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG4gICAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICAgJ2NoYW5nZWQ6dXJsJzogJ29uVXJsQ2hhbmdlJyxcclxuICAgICAgICAncmVzdW1lZC1vbi1oYXNoY2hhbmdlJzogJ3NldHVwJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBrZXlkb3duOiB7XHJcbiAgICAgICAgICAnKic6ICdkZWxlZ2F0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdGlvbmNoYW5nZToge1xyXG4gICAgICAgICAgJyonOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVybDogJycsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBzZXQ6IGZhbHNlLFxyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gICAgcmV0cnlBY3RpdmU6IGZhbHNlLFxyXG4gICAgc2hpZnRTZW5zaXRpdmVLZXlzOiBbMTMsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCAxNzEsIDE3M10sXHJcbiAgICByZWdpc3RlcmVkTG9hZEhhbmRsZXI6IGZhbHNlLFxyXG4gICAga2V5Q29kZU1hcDoge1xyXG4gICAgICAnMTMnOiAnRW50ZXInLFxyXG4gICAgICAnNDgnOiAnMCcsICc0OSc6ICcxJywgJzUwJzogJzInLCAnNTEnOiAnMycsICc1Mic6ICc0JyxcclxuICAgICAgJzUzJzogJzUnLCAnNTQnOiAnNicsICc1NSc6ICc3JywgJzU2JzogJzgnLCAnNTcnOiAnOScsXHJcbiAgICAgICcxNzEnOiAnKycsICcxNzMnOiAnLSdcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcG93ZXIob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgdGhpcy5hY3RpdmUgPSBvbjtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSxcclxuICAgIHNldHVwKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdtb2RlJykudGhlbihhY3RpdmUgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXQgfHwgIWFjdGl2ZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LnBhcmVudC53aW5kb3cuZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJyAmJiAhdGhpcy5yZWdpc3RlcmVkTG9hZEhhbmRsZXIpIHtcclxuICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZExvYWRIYW5kbGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lcignbG9hZCcsICgpID0+IHRoaXMuc2V0dXAoKSwgd2luZG93LnBhcmVudC53aW5kb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX1NUT1JFLmlmcmFtZSA9IHRoaXMuaXNJRnJhbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cuZG9jdW1lbnQuVVJMO1xyXG4gICAgICAgIHRoaXMuaGFzaGxlc3NVUkwgPSBfSEFTSExFU1ModGhpcy51cmwpO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrVVJMKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZSkgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpc0lGcmFtZSgpIHtcclxuICAgICAgcmV0dXJuIHdpbmRvdyAhPT0gd2luZG93LnBhcmVudC53aW5kb3c7XHJcbiAgICB9LFxyXG4gICAgaXNFZGl0YWJsZShlbCkge1xyXG4gICAgICBjb25zdCBuYW1lID0gZWwudGFnTmFtZTtcclxuXHJcbiAgICAgIHJldHVybiAobmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBuYW1lID09PSAnSU5QVVQnIHx8IGVsLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnKTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZShlKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlLmtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlLFxyXG4gICAgICAgICAgbW9kS2V5ID0gKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleSksXHJcbiAgICAgICAgICBhcnJvd0tleXMgPSBbJ2Fycm93ZG93bicsICdhcnJvd3VwJ10sXHJcbiAgICAgICAgICBsb2NrZWRBY3Rpb25zID0gWydiJywgJ3MnLCAneScsICd6JywgJ2QnXSxcclxuICAgICAgICAgIGZ1bmN0aW9uS2V5cyA9IGxvY2tlZEFjdGlvbnMuY29uY2F0KGFycm93S2V5cyksXHJcbiAgICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnXTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkICYmIGxvY2tlZEFjdGlvbnMuaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5zaGlmdFNlbnNpdGl2ZUtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIGtleSA9IHRoaXMua2V5Q29kZU1hcFtrZXlDb2RlXTtcclxuXHJcbiAgICAgIGlmICghZnVuY3Rpb25LZXlzLmluY2x1ZGVzKGtleSkgJiYgd2luZG93LmdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzRWRpdGFibGUoZS50YXJnZXQpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBvcmlnS2V5ID0ga2V5O1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIGNvbnN0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cztcclxuICAgICAgICBjb25zdCBpc01hcmtlcktleSA9IG1hcmtlcnNba2V5XTtcclxuICAgICAgICBjb25zdCBpc0N1c3RvbU1hcmtlcktleSA9IGlzTWFya2VyS2V5ICYmICFkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICAgIGlmIChpc0N1c3RvbU1hcmtlcktleSkga2V5ID0gJ2NtJztcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0gc2hvcnRjdXRzW2tleV07XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmICghbW9kS2V5KSB7XHJcbiAgICAgICAgICBpZiAoa2V5ID09PSAndycgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvb2t1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkgJiYgIXNldHRpbmdbMF0gJiYgc2V0dGluZ1sxXSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIG9yaWdLZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoIXNldHRpbmdbMV0pIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHNob3J0Y3V0ID0gc2V0dGluZ1swXS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgY29uc3QgczEgPSBzaG9ydGN1dFswXTtcclxuICAgICAgICAgIGNvbnN0IHMyID0gc2hvcnRjdXRbMV07XHJcblxyXG4gICAgICAgICAgaWYgKCFlW3MxXSB8fCAoczIgJiYgIWVbczJdKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3cnKSB0aGlzLmxvb2t1cCgpO1xyXG5cclxuICAgICAgICAgIGVsc2UgaWYgKGlzTWFya2VyS2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHJlc3NlZDptYXJrZXIta2V5JywgZSwgb3JpZ0tleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgncHJlc3NlZDpob3RrZXknLCBrZXkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsb29rdXAoKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkVGV4dCkgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIHNlbGVjdGVkVGV4dCk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tVUkwoKSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdCgnY2hlY2s6dXJsJywgdGhpcy51cmwpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YSkgdGhpcy5vblVybEZvdW5kKHRoaXMuZmlsdGVyRW50cmllcyhkYXRhLmVudHJpZXMpLCBkYXRhLnJlY2VudGx5T3BlbmVkRW50cnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbnRyaWVzLCBmb3JjZSkge1xyXG4gICAgICBmb3JjZSA9IGZvcmNlID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc107XHJcbiAgICAgIGNvbnN0IGZpcnN0RW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgICBjb25zdCBpZ25vcmVIYXNoID0gIWZpcnN0RW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IHRoaXMuaGFzaGxlc3NVUkwgOiB0aGlzLnVybDtcclxuXHJcbiAgICAgIGlmIChmb3JjZSB8fCBmaXJzdEVudHJ5LnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgX1NUT1JFLmFkZEVudHJpZXMoZW50cmllcyk7XHJcbiAgICAgICAgLy9fU1RPUkUuZW50cnkgPSBlbnRyeTtcclxuICAgICAgICBpZiAoZm9yY2UpIHRoaXMuZW1pdCgnc2V0OmVudHJpZXMnLCBlbnRyaWVzKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uSG90a2V5KGtleSkge1xyXG4gICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMubG9va3VwKCk7XHJcbiAgICB9LFxyXG4gICAgb25VcmxGb3VuZChlbnRyaWVzLCByZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKGVudHJpZXMsIHRydWUpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYWN0aXZlICYmICF0aGlzLmluaXRpYWxpemVkICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10bS1pZF0nKSkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeSkge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICAgICAgICBjb25zdCBpZ25vcmVIYXNoID0gIWZpcnN0RW50cnkuaGFzaFNlbnNpdGl2ZTtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IGlnbm9yZUhhc2ggPyB0aGlzLmhhc2hsZXNzVVJMIDogdGhpcy51cmw7XHJcblxyXG4gICAgICAgICAgaWYgKHJlY2VudGx5T3BlbmVkRW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgICAgICAgX1NUT1JFLm5hbWUgPSByZWNlbnRseU9wZW5lZEVudHJ5Lm5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTptYXJrcycsIGVudHJpZXMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICAgIGxldCBsb2NrZWRFbnRyaWVzID0gW10sXHJcbiAgICAgICAgICBsID0gZW50cmllcy5sZW5ndGgsXHJcbiAgICAgICAgICBsb2NrZWRFbnRyaWVzRXhpc3QgPSBmYWxzZSxcclxuICAgICAgICAgIG5vbkxvY2tlZEVudHJpZXMgPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkubG9ja2VkKSB7XHJcbiAgICAgICAgICBsb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgICAgbG9ja2VkRW50cmllc0V4aXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbm9uTG9ja2VkRW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvY2tlZEVudHJpZXNFeGlzdCAmJiBub25Mb2NrZWRFbnRyaWVzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnd2FybjptaXhlZC1lbnRyeS10eXBlcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJyk7XHJcbiAgICAgICAgZW50cmllcyA9IFtub25Mb2NrZWRFbnRyaWVzWzBdXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxvY2tlZEVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgX1NUT1JFLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZW50cmllcyA9IGxvY2tlZEVudHJpZXMuc29ydCgoYSwgYikgPT4gKG5ldyBEYXRlKGEubGFzdCkpIC0gKG5ldyBEYXRlKGIubGFzdCkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfU1RPUkUubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBlbnRyaWVzO1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKGUpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNlbGVjdGlvbicsICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpO1xyXG4gICAgfSxcclxuICAgIG9uVXJsQ2hhbmdlKHRhYiwgbmV3VXJsKSB7XHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gX1NUT1JFLmVudHJpZXNbT2JqZWN0LmtleXMoX1NUT1JFLmVudHJpZXMpWzBdXTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICAhX1NUT1JFLmlzTmV3ICYmXHJcbiAgICAgICAgZW50cnkgJiZcclxuICAgICAgICBlbnRyeS5oYXNoU2Vuc2l0aXZlICYmXHJcbiAgICAgICAgX0hBU0hMRVNTKG5ld1VybCkgPT09IHRoaXMuaGFzaGxlc3NVUkwgJiZcclxuICAgICAgICBuZXdVcmwgIT09IHRoaXMudXJsXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc2V0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnaGFzaGNoYW5nZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgICAgdGhpcy5yZXRyeUFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgICB0aGlzLnJldHJ5QWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc2VuZFBhZ2VTdGF0ZShpbmZvKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnZS1zdGF0ZScsIHtcclxuICAgICAgICBzZWxlY3Rpb246ICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQsXHJcbiAgICAgICAgYm9va21hcms6ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJyksXHJcbiAgICAgICAgcmV0cnlBY3RpdmU6IHRoaXMucmV0cnlBY3RpdmVcclxuICAgICAgfSwgaW5mbyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzdGFydGVkOnJlc3RvcmF0aW9uJzogJ3N0YXJ0JyxcclxuICAgICAgICAncmVzdG9yZWQ6cmFuZ2UnOiAncHJvZ3Jlc3MnLFxyXG4gICAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZSc6ICdwcm9ncmVzcycsXHJcbiAgICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ3N0b3AnLFxyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAnYWN0aXZhdGUnXHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBlbDogbnVsbCxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIHN0ZXBzOiAwLFxyXG4gICAgdG90YWxXaWR0aDogNDEzLFxyXG4gICAgY3VycmVudFdpZHRoOiAwLFxyXG4gICAgc3RlcExlbmd0aDogMCxcclxuICAgIGNhbmNlbEhhbmRsZXI6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGUoKS50aGVuKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXByb2dyZXNzbW9kYWwnKTtcclxuXHJcbiAgICAgIFt7XHJcbiAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3NoZWFkZXInLFxyXG4gICAgICAgIHRleHQ6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdyZXN0b3JpbmcnKVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3NjbG9zZScsXHJcbiAgICAgICAgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSlcclxuICAgICAgfSwge1xyXG4gICAgICAgIHR5cGU6ICd0bXByb2dyZXNzYmFyJyxcclxuICAgICAgICBjaGlsZDoge1xyXG4gICAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3MnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3NjYW5jZWwnLFxyXG4gICAgICAgIHRleHQ6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjYW5jZWwnKVxyXG4gICAgICB9XVxyXG4gICAgICAgIC5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKTtcclxuICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICAgIHRoaXNbb2JqLnR5cGVdID0gZWw7XHJcbiAgICAgICAgICBpZiAob2JqLnRleHQpIGVsLnRleHRDb250ZW50ID0gb2JqLnRleHQ7XHJcbiAgICAgICAgICBpZiAob2JqLmNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLmNoaWxkLnR5cGUpO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIHRoaXNbb2JqLmNoaWxkLnR5cGVdID0gY2hpbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc3VtZShsZW4pIHtcclxuICAgICAgdGhpcy5zdGVwcyA9IGxlbjtcclxuICAgICAgdGhpcy5zdGVwTGVuZ3RoID0gdGhpcy50b3RhbFdpZHRoIC8gbGVuO1xyXG4gICAgICB0aGlzLmN1cnJlbnRXaWR0aCA9IDA7XHJcbiAgICAgIHRoaXMudG1wcm9ncmVzcy5zdHlsZS53aWR0aCA9IDA7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQobGVuKSB7XHJcbiAgICAgIGlmICghbGVuIHx8ICF0aGlzLmFjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnJlc3VtZShsZW4pO1xyXG4gICAgICBjb25zdCBjYW5jZWxIYW5kbGVyID0gdGhpcy5jYW5jZWxIYW5kbGVyID0gdGhpcy5jYW5jZWwuYmluZCh0aGlzKTtcclxuICAgICAgY29uc3QgY2xvc2VIYW5kbGVyID0gdGhpcy5jbG9zZUhhbmRsZXIgPSB0aGlzLnN0b3AuYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgIHRoaXMudG1wcm9ncmVzc2NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgdGhpcy50bXByb2dyZXNzY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBwcm9ncmVzcygpIHtcclxuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmN1cnJlbnRXaWR0aCArPSB0aGlzLnN0ZXBMZW5ndGg7XHJcbiAgICAgIHRoaXMudG1wcm9ncmVzcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICAgIH0sXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgIHRoaXMudG1wcm9ncmVzc2NhbmNlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FuY2VsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudG1wcm9ncmVzc2Nsb3NlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZUhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgfSBjYXRjaChlKSB7fVxyXG4gICAgfSxcclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2FuY2VsZWQ6cmVzdG9yYXRpb24nKTtcclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3Byb2dyZXNzYmFyJykudGhlbihwcm9ncmVzc2JhciA9PiB0aGlzLmFjdGl2ZSA9IHByb2dyZXNzYmFyKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbmNsYXNzIFJlc3RvcmVyQmFzZSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5sb3N0ID0gW107XHJcbiAgICB0aGlzLmZhaWx1cmVSZXBvcnQgPSB7fTtcclxuICAgIHRoaXMucmVzdG9yZWQgPSBbXTtcclxuICAgIHRoaXMuYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdzdGFydGVkOnJlc3RvcmF0aW9uJywgZW50cnkubWFya3MubGVuZ3RoKTtcclxuICAgIHRoaXMub24oJ2NhbmNlbGVkOnJlc3RvcmF0aW9uJywgKCkgPT4gdGhpcy5jYW5jZWxlZCA9IHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0luQ2h1bmtzKGRhdGEsIHByb2MsIGNiKSB7XHJcbiAgICBwcm9jID0gcHJvYy5iaW5kKHRoaXMpO1xyXG4gICAgY2IgPSBjYi5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdChmdW5jdGlvbiByZWMoKSB7XHJcblx0XHRcdGxldCBleHBpcmUgPSArbmV3IERhdGUoKSArIDUwMDtcclxuXHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHR0cnkge1xyXG4gICAgICAgICAgcHJvYyhkYXRhLnNoaWZ0KCkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdFx0fSB3aGlsZSAoZGF0YS5sZW5ndGggPiAwICYmIGV4cGlyZSA+ICtuZXcgRGF0ZSgpKTtcclxuXHJcblx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHJlYygpLCAwKTtcclxuXHRcdFx0ZWxzZSBjYigpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbiAgcmVwb3J0KCkge1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBsZXQgbGwgPSB0aGlzLmxvc3QubGVuZ3RoO1xyXG4gICAgaWYgKGxsKSB7XHJcbiAgICAgIHdoaWxlKGxsLS0pIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5sb3N0W2xsXS50ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCgnbG9zdDptYXJrcycsIHRoaXMuZmFpbHVyZVJlcG9ydCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJywgdGhpcy5lbnRyeS5uYW1lLCB0aGlzLnJlc3RvcmVkLCB0aGlzLmxvc3QsIHRoaXMuYXJlYSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXN0b3JlciBleHRlbmRzIFJlc3RvcmVyQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLnF1ZXVlID0gW107XHJcbiAgICB0aGlzLmNhY2hlID0gW107XHJcbiAgICB0aGlzLnBoYXNlID0gMTtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwgPSAwO1xyXG4gICAgdGhpcy5jaHVua0R1cmF0aW9uID0gNTAwO1xyXG4gICAgdGhpcy5fdGltZXIgPSArbmV3IERhdGUoKSArIHRoaXMuY2h1bmtEdXJhdGlvbjtcclxuICAgIHRoaXMub29tID0gZW50cnkubWFya3MubGVuZ3RoID09PSAxICYmIGVudHJ5Lm1hcmtzWzBdLmlkID09IDE7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGltZXIoKSB7XHJcbiAgICBjb25zdCB0aW1lciA9IHRoaXMuX3RpbWVyO1xyXG4gICAgdGhpcy5fdGltZXIgPSArbmV3IERhdGUoKSArIHRoaXMuY2h1bmtEdXJhdGlvbjtcclxuICAgIHJldHVybiB0aW1lcjtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBlbnRyeSA9IHRoaXMuZW50cnksXHJcbiAgICAgICAgbm93ID0gW10sIHBvc3Rwb25lZCA9IFtdLFxyXG4gICAgICAgIG1hcmtzID0gZW50cnkubWFya3MsXHJcbiAgICAgICAgbCA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgbWFyaztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBtYXJrID0gbWFya3NbaV07XHJcblxyXG4gICAgICB0aGlzLmNvbnZlcnREZXNjcmlwdGlvbihtYXJrKS5jcmVhdGVUZW1wT2JqZWN0KG1hcmspO1xyXG5cclxuICAgICAgaWYgKG1hcmsuY29uZHMubjEgPT09ICdUTScpIHBvc3Rwb25lZC5wdXNoKG1hcmspO1xyXG4gICAgICBlbHNlIG5vdy5wdXNoKG1hcmspO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucXVldWUucHVzaChub3cpO1xyXG5cclxuICAgIGZvciAoaSA9IDAsIGwgPSBwb3N0cG9uZWQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbcG9zdHBvbmVkW2ldXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXN0b3JlKCk7XHJcbiAgfVxyXG4gIGNvbnZlcnREZXNjcmlwdGlvbihtYXJrKSB7XHJcbiAgICBpZiAodHlwZW9mIG1hcmsuY29uZHMubyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbGV0IGNvbmRzID0gbWFyay5jb25kcyxcclxuICAgICAgICAgIGNvbnZlcnRlZENvbmRzID0ge1xyXG4gICAgICAgICAgICBvOiBjb25kcy5zdGFydE9mZnNldCxcclxuICAgICAgICAgICAgbjE6IGNvbmRzLmZpcnN0Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIG4yOiBjb25kcy5maXJzdFBhcmVudE5vZGVOYW1lLFxyXG4gICAgICAgICAgICBwMTogY29uZHMuZmlyc3RUZXh0Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwMjogY29uZHMuZmlyc3ROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAzOiBjb25kcy5maXJzdFBhcmVudE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDQ6IGNvbmRzLmZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uXHJcbiAgICAgICAgICB9O1xyXG4gICAgICBkZWxldGUgbWFyay5jb25kcztcclxuICAgICAgbWFyay5jb25kcyA9IGNvbnZlcnRlZENvbmRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGNyZWF0ZVRlbXBPYmplY3QobWFyaykge1xyXG4gICAgbGV0IHRleHQgPSBtYXJrLnRleHQsXHJcbiAgICAgICAgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKSxcclxuICAgICAgICBzcXVlZXplZFRleHQgPSB0aGlzLnNxdWVlemUobWFyay50ZXh0KTtcclxuXHJcbiAgICBtYXJrLnRlbXAgPSB7XHJcbiAgICAgIHRleHRMZW5ndGg6IHRleHQubGVuZ3RoLFxyXG4gICAgICB0cmltbWVkVGV4dDogdHJpbW1lZFRleHQsXHJcbiAgICAgIHRyaW1tZWRUZXh0TGVuZ3RoOiB0cmltbWVkVGV4dC5sZW5ndGgsXHJcbiAgICAgIHNxdWVlemVkVGV4dDogc3F1ZWV6ZWRUZXh0LFxyXG4gICAgICBzcXVlZXplZFRleHRMZW5ndGg6IHNxdWVlemVkVGV4dC5sZW5ndGgsXHJcbiAgICAgIHBvc3NpYmxlUG9zaXRpb25zOiBbXSxcclxuICAgICAgcG9zc2libGVFbmRQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZVN0YXJ0Tm9kZXM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZHM6IHt9LFxyXG4gICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0czogW11cclxuICAgIH07XHJcblxyXG4gICAgbWFyay5zeW5jZWQgPSB0aGlzLmVudHJ5LnN5bmNlZDtcclxuICB9XHJcbiAgcmVzdG9yZSgpIHtcclxuICAgIGlmICh0aGlzLnBoYXNlID09PSAyKSB0aGlzLnNvcnRRdWV1ZUJ5SWQoKTtcclxuXHJcbiAgICBsZXQgbWFya3MgPSB0aGlzLm1hcmtzID0gdGhpcy5xdWV1ZS5zaGlmdCgpLFxyXG4gICAgICAgIGxlbmd0aCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMDtcclxuXHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuXHJcbiAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0Qm9keVNlbGVjdGlvbih3aW5kb3cuZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgIC5nZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGhhc2UgPT09IDEgJiYgbGVuZ3RoID4gMSlcclxuICAgICAgICAgIHRoaXMucG9zdHBvbmVPdmVybGFwcGluZ3MoKTtcclxuXHJcbiAgICAgIHRoaXMuZmluZFBvc3NpYmxlRXh0cmVtYSgpXHJcbiAgICAgICAgICAucnVsZU91dE11bHRpcGxlcygpXHJcbiAgICAgICAgICAucmVzdG9yZVJhbmdlcygpO1xyXG5cclxuICAgICAgdGhpcy5waGFzZSsrO1xyXG5cclxuICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoICYmICF0aGlzLmNhbmNlbGVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPCArbmV3IERhdGUoKSkgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc3RvcmUoKSwgMCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlc3RvcmUoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHRoaXMucmVwb3J0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHRoaXMucmVwb3J0KCk7XHJcbiAgfVxyXG4gIHNvcnRRdWV1ZUJ5SWQoKSB7XHJcbiAgICBsZXQgbWFya3MgPSB0aGlzLnF1ZXVlLFxyXG4gICAgICAgIGwgPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgdGVtcCA9IFtdLFxyXG4gICAgICAgIHJlcyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG1hcmssIHQ7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBpZiAoIW1hcmtzW2xdLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXVswXTtcclxuICAgICAgdGVtcFttYXJrLmlkXSA9IG1hcms7XHJcbiAgICB9XHJcbiAgICB0aGlzLnF1ZXVlID0gW107XHJcblxyXG4gICAgZm9yICh0ID0gdGVtcC5sZW5ndGg7IGkgPCB0OyBpKyspIHtcclxuICAgICAgaWYgKHRlbXBbaV0pIHRoaXMucXVldWUucHVzaChbdGVtcFtpXV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGdldFRleHRQb3NpdGlvbnMobWFya3MsIGwpIHtcclxuICAgIGxldCB0cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQsXHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdLFxyXG4gICAgICAgIGVuZFBvc2l0aW9ucyA9IFtdLFxyXG4gICAgICAgIG1hcmssIG1hcmtUZW1wLCBzcXVlZXplZFRleHQsIHNxdWVlemVkVGV4dExlbmd0aCwgcCwgZW5kUG9zaXRpb247XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBwID0gdW5kZWZpbmVkO1xyXG4gICAgICBtYXJrID0gbWFya3NbbF07XHJcbiAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG5cclxuICAgICAgaWYgKCFtYXJrVGVtcCkge1xyXG4gICAgICAgIG1hcmtzLnNwbGljZShsLCAxKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCkge1xyXG5cclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5jb25jYXQobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMpO1xyXG4gICAgICAgIGVuZFBvc2l0aW9ucyA9IGVuZFBvc2l0aW9ucy5jb25jYXQobWFya1RlbXAucG9zc2libGVFbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0ID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0O1xyXG4gICAgICAgIHNxdWVlemVkVGV4dExlbmd0aCA9IG1hcmtUZW1wLnNxdWVlemVkVGV4dExlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHAgIT09IC0xKSB7XHJcbiAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBwID0gLTE7XHJcbiAgICAgICAgICBwID0gdHJpbW1lZFNlbGVjdGlvblRleHQuaW5kZXhPZihzcXVlZXplZFRleHQsIHAgKyAxKTtcclxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gcCArIHNxdWVlemVkVGV4dExlbmd0aDtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIGVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLnBvcCgpO1xyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zLnBvcCgpO1xyXG5cclxuICAgICAgICBpZiAoIW1hcmtUZW1wLnBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8xJykgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMoYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyk7XHJcbiAgICB0aGlzLm1heFBvc2l0aW9uID0gTWF0aC5tYXguYXBwbHkobnVsbCwgZW5kUG9zaXRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMocG9zaXRpb25zKSB7XHJcbiAgICBsZXQgbCA9IHBvc2l0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgdGVtcCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHBvcywgc3RhcnQsIHQ7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBwb3MgPSBwb3NpdGlvbnNbbF07XHJcbiAgICAgIHN0YXJ0ID0gcG9zWzBdO1xyXG5cclxuICAgICAgaWYgKHRlbXBbc3RhcnRdKSB0ZW1wLnNwbGljZShzdGFydCArIDEsIDAsIHBvcyk7XHJcbiAgICAgIGVsc2UgdGVtcFtzdGFydF0gPSBwb3M7XHJcbiAgICB9XHJcbiAgICB0ID0gdGVtcC5sZW5ndGg7XHJcbiAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IHQ7IGkrKylcclxuICAgICAgaWYgKHRlbXBbaV0pIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKHRlbXBbaV0pO1xyXG4gIH1cclxuICBwb3N0cG9uZU92ZXJsYXBwaW5ncygpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgcG9zMSwgcG9zMiwgaSwgbTEsIG0yLCBpZDEsIGlkMiwgaWQ7XHJcblxyXG4gICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgIHdoaWxlIChwLS0gPiAxKSB7XHJcbiAgICAgICAgcG9zMSA9IHBvc2l0aW9uc1twIC0gMV07XHJcbiAgICAgICAgcG9zMiA9IHBvc2l0aW9uc1twXTtcclxuICAgICAgICBtMSA9IHBvczFbMl07XHJcbiAgICAgICAgbTIgPSBwb3MyWzJdO1xyXG4gICAgICAgIGlkMSA9IG0xLmlkO1xyXG4gICAgICAgIGlkMiA9IG0yLmlkO1xyXG5cclxuICAgICAgICBpZiAoaWQxID09PSBpZDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocG9zMVsxXSA+IHBvczJbMF0gJiYgcG9zMVswXSA8IHBvczJbMV0pIHtcclxuXHJcbiAgICAgICAgICBpZiAoaWQxIDwgaWQyKSB7XHJcbiAgICAgICAgICAgIGlkID0gaWQyO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtMik7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWQgPSBpZDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0xKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcDsgaSsrKVxyXG4gICAgICAgIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3V0T3V0Rm9yKGlkKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlKHAtLSkge1xyXG4gICAgICBpZiAocG9zaXRpb25zW3BdWzJdLmlkID09PSBpZClcclxuICAgICAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMuc3BsaWNlKHAsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0cG9uZShtYXJrKSB7XHJcbiAgICBsZXQgcXVldWUgPSB0aGlzLnF1ZXVlLFxyXG4gICAgICAgIGwgPSBxdWV1ZS5sZW5ndGgsXHJcbiAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICBpZiAocXVldWVbbF1bMF0gPT09IG1hcmspIHtcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWFscmVhZHlJbmNsdWRlZClcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFttYXJrXSk7XHJcbiAgfVxyXG4gIGZpbmRQb3NzaWJsZUV4dHJlbWEoKSB7XHJcbiAgICBsZXQgbm9kZXMgPSB0aGlzLmJvZHlUZXh0Tm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzID8gbm9kZXMubGVuZ3RoIDogMCxcclxuICAgICAgICBpbmRpY2VzID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLFxyXG4gICAgICAgIHBoYXNlID0gdGhpcy5waGFzZSxcclxuICAgICAgICBjYWNoZSA9IHRoaXMuY2FjaGUgPSBbXSxcclxuICAgICAgICBzYXRpc2ZpZWQgPSBbXSxcclxuICAgICAgICBpID0gMCwgY2hhcnMgPSAwLFxyXG4gICAgICAgIG5leHRTdGFydEZvdW5kLCBlbmRpbmdzSW5UaGlzTm9kZSxcclxuICAgICAgICBub2RlLCBub2Rlc1RleHQsIG5vZGVzVGV4dExlbmd0aCxcclxuICAgICAgICBtYXJrLCBkaWZmLCBsLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgZSwgZiwgaWQsIHAsIHEsIHgsIG0sXHJcbiAgICAgICAgcG9zc2libGVGb2N1c09mZnNldCwgc3RhcnRGb3VuZEZvciwgcG9zdHBvbmVkLCBoYXNFbmRpbmdzSW5UaGlzTm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIG5vZGVzVGV4dCA9IHRoaXMuc3F1ZWV6ZShub2RlLmRhdGEpO1xyXG4gICAgICBub2Rlc1RleHRMZW5ndGggPSBub2Rlc1RleHQubGVuZ3RoO1xyXG4gICAgICBjaGFycyArPSBub2Rlc1RleHRMZW5ndGg7XHJcbiAgICAgIGwgPSBpbmRpY2VzLmxlbmd0aDtcclxuICAgICAgc3RhcnRGb3VuZEZvciA9IFtdO1xyXG4gICAgICBwb3N0cG9uZWQgPSBbXTtcclxuICAgICAgaGFzRW5kaW5nc0luVGhpc05vZGUgPSBudWxsO1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBpbmRpY2VzW2xdWzBdO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uID0gaW5kaWNlc1tsXVsxXTtcclxuICAgICAgICBtYXJrID0gaW5kaWNlc1tsXVsyXTtcclxuICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgfHwgW107XHJcbiAgICAgICAgbWFyay50ZW1wLmVuZEZvdW5kRm9yID0gbWFyay50ZW1wLmVuZEZvdW5kRm9yIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgIGNoYXJzID4gc3RhcnRQb3NpdGlvbiAmJlxyXG4gICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGggPCBtYXJrLnRlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoaGFzRW5kaW5nc0luVGhpc05vZGUgJiYgaGFzRW5kaW5nc0luVGhpc05vZGUuaWQgPCBtYXJrLmlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkpIHtcclxuICAgICAgICAgICAgICBpZiAocGhhc2UgPT09IDEgJiYgaWQgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLnB1c2goeyBub2RlOiBub2RlLCBwb3M6IGkgfSk7XHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IucHVzaChzdGFydFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICBzdGFydEZvdW5kRm9yLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICAhbWFyay50ZW1wLmVuZEZvdW5kRm9yLmluY2x1ZGVzKGVuZFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgKGNoYXJzIC0gZW5kUG9zaXRpb24pID49IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChNYXRoLm1pbi5hcHBseShudWxsLCBzdGFydEZvdW5kRm9yKSA8IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zc2libGVGb2N1c09mZnNldCA9IHRoaXMuZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIGVuZFBvc2l0aW9uIC0gKGNoYXJzIC0gbm9kZXNUZXh0TGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZUZvY3VzT2Zmc2V0cy5wdXNoKHBvc3NpYmxlRm9jdXNPZmZzZXQpO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl0gPSB7XHJcbiAgICAgICAgICAgICAgbm9kZTogbm9kZSxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IHBvc3NpYmxlRm9jdXNPZmZzZXQsXHJcbiAgICAgICAgICAgICAgcG9zOiBpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICghc2F0aXNmaWVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIGNhY2hlLnB1c2gobWFyayk7XHJcbiAgICAgICAgICAgICAgc2F0aXNmaWVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG1hcms7XHJcbiAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwKSBmb3IgKHggPSAwOyB4IDwgcDsgeCsrKSB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbeF0pO1xyXG5cclxuICAgICAgaWYgKGNoYXJzID4gdGhpcy5tYXhQb3NpdGlvbikgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAocGhhc2UgIT09IDEgfHwgdGhpcy5vb20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG1hcmsgPSB0aGlzLm1hcmtzW2ldO1xyXG4gICAgICAgIGlmICghc2F0aXNmaWVkLmluY2x1ZGVzKG1hcmsuaWQpKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzInKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJ1bGVPdXRNdWx0aXBsZXMoKSB7XHJcbiAgICBsZXQgY2FjaGUgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBjYWNoZS5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgcG9zc2libGVTdGFydE5vZGVzLCBwLCBub2RlLCBwYXJlbnQsIGdyYW1wYSwgZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbmRncmFtcGEsIG1hdGNoZXMsIGZhaWxlZCwgcSxcclxuICAgICAgICBwb3NzaWJsZUVuZHMsIHN0YXJ0Rm91bmRGb3IsIGNvbmRzLCBzdGFydE9mZnNldCwgdGVtcCwgdGV4dExlbmd0aCwgc3RhcnQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBtYXJrID0gY2FjaGVbaV07XHJcbiAgICAgIG1hdGNoZXMgPSBbXTtcclxuICAgICAgZmFpbGVkID0gZmFsc2U7XHJcbiAgICAgIHRlbXAgPSBtYXJrLnRlbXA7XHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlcyA9IHRlbXAucG9zc2libGVTdGFydE5vZGVzO1xyXG4gICAgICBwb3NzaWJsZUVuZHMgPSB0ZW1wLnBvc3NpYmxlRW5kcztcclxuICAgICAgc3RhcnRGb3VuZEZvciA9IHRlbXAuc3RhcnRGb3VuZEZvclxyXG4gICAgICBwID0gcG9zc2libGVTdGFydE5vZGVzLmxlbmd0aDtcclxuICAgICAgY29uZHMgPSBtYXJrLmNvbmRzO1xyXG4gICAgICBzdGFydE9mZnNldCA9IGNvbmRzLm87XHJcbiAgICAgIHRleHRMZW5ndGggPSB0ZW1wLnRleHRMZW5ndGg7XHJcblxyXG4gICAgICBpZiAocCA+IDEpIHtcclxuICAgICAgICB3aGlsZSAocC0tKSB7XHJcbiAgICAgICAgICBub2RlID0gcG9zc2libGVTdGFydE5vZGVzW3BdLm5vZGU7XHJcbiAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlIHx8IDA7XHJcblxyXG4gICAgICAgICAgaWYgKCFncmFtcGEgfHwgY29uZHMucDMgPT09IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCkpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkgcCA9IDA7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDEpIHAgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBxID0gbWF0Y2hlcy5wb3AoKTtcclxuICAgICAgICAgICAgICBwYXJlbnQgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcV0ubm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgIGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlIHx8IDA7XHJcbiAgICAgICAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDA7XHJcbiAgICAgICAgICAgICAgZ3JhbmRncmFuZGdyYW1wYSA9IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFuZGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAoIWdyYW5kZ3JhbmRncmFtcGEgfHwgY29uZHMucDQgPT09IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW5kZ3JhbXBhLCBncmFuZGdyYW1wYSkpICYmXHJcbiAgICAgICAgICAgICAgICAgIChwb3NzaWJsZUVuZHNbc3RhcnRGb3VuZEZvcltxXV0ub2Zmc2V0IC0gc3RhcnRPZmZzZXQpID09PSB0ZXh0TGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgcCA9IHE7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwKSBwID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBwID0gMDtcclxuXHJcbiAgICAgIHAgPSBwIHx8IDA7XHJcblxyXG4gICAgICBzdGFydCA9IG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXNbcF07XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGUgPSBzdGFydC5ub2RlO1xyXG4gICAgICBtYXJrLnRlbXAuc3RhcnROb2RlUG9zaXRpb24gPSBzdGFydC5wb3M7XHJcblxyXG4gICAgICB0aGlzLnNldE1hdGNoaW5nRW5kKG1hcmssIHApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNldE1hdGNoaW5nRW5kKG1hcmssIHApIHtcclxuICAgIGxldCBzdGFydFBvc2l0aW9uID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3JbcF0sXHJcbiAgICAgICAgZW5kID0gbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXTtcclxuXHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZSA9IGVuZC5ub2RlO1xyXG4gICAgbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbiA9IGVuZC5wb3M7XHJcbiAgICBtYXJrLnRlbXAuZm9jdXNPZmZzZXQgPSBlbmQub2Zmc2V0O1xyXG4gIH1cclxuICBzYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSB7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbXBhID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlLFxyXG4gICAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhICYmIGdyYW1wYS5wYXJlbnROb2RlID8gZ3JhbXBhLnBhcmVudE5vZGUgOiAwLFxyXG4gICAgICAgIHN0YXJ0T2Zmc2V0ID0gZGVzY3JpcHRpb24ubyxcclxuICAgICAgICByZWxldmFudE5vZGVUZXh0ID0gbm9kZS5kYXRhLnN1YnN0cmluZyhzdGFydE9mZnNldCkudHJpbSgpLFxyXG4gICAgICAgIGwgPSByZWxldmFudE5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGVtcC50cmltbWVkVGV4dCxcclxuICAgICAgICBtID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0TGVuZ3RoLFxyXG4gICAgICAgIHRleHRzTWF0Y2g7XHJcblxyXG4gICAgaWYgKG0gPD0gbClcclxuICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkpID09PSAwO1xyXG4gICAgZWxzZVxyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKG1hcmtUZXh0KS5pbmRleE9mKHRoaXMuc3F1ZWV6ZShyZWxldmFudE5vZGVUZXh0KSkgPT09IDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGV4dHNNYXRjaCAmJlxyXG4gICAgICAocGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjEgfHwgKGRlc2NyaXB0aW9uLm4xID09PSAnVE0nICYmIHBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKSAmJlxyXG4gICAgICAoIWdyYW1wYSB8fCBncmFtcGEubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4yKSAmJlxyXG4gICAgICB0aGlzLndoaWNoQ2hpbGQocGFyZW50Tm9kZSwgbm9kZSkgPT09IGRlc2NyaXB0aW9uLnAxXHJcbiAgICApO1xyXG4gIH1cclxuICBmaW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgbikge1xyXG4gICAgbGV0IG5vZGVUZXh0ID0gbm9kZS5kYXRhLFxyXG4gICAgICAgIGwgPSBub2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgaSA9IDAsIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNxdWVlemUobm9kZVRleHRbaV0pKSBjb3VudGVyKys7XHJcblxyXG4gICAgICBpZiAoY291bnRlciA9PT0gbikgcmV0dXJuICgvXFxzJC8udGVzdChtYXJrLnRleHQpID8gaSArIDIgOiBpICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc3RvcmVSYW5nZXMoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIG1hcmtzID0gdGhpcy5jYWNoZSxcclxuICAgICAgICBpID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIG1hcmtUZW1wLCBzdGFydCwgZW5kLCBmb2N1c09mZnNldDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcbiAgICAgIHN0YXJ0ID0gbWFya1RlbXAuc3RhcnROb2RlO1xyXG4gICAgICBlbmQgPSBtYXJrVGVtcC5lbmROb2RlO1xyXG4gICAgICBmb2N1c09mZnNldCA9IG1hcmtUZW1wLmZvY3VzT2Zmc2V0O1xyXG5cclxuICAgICAgaWYgKCFzdGFydCB8fCAhZW5kIHx8ICEodHlwZW9mIGZvY3VzT2Zmc2V0ID09PSAnbnVtYmVyJykpIHtcclxuICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICB0aGlzLmZhaWx1cmVSZXBvcnRbbWFyay5pZF0gPSB7IHRleHQ6IG1hcmsudGV4dCwgcmVhc29uOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlX3JlYXNvbl8zJykgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIG1hcmsuY29uZHMubyk7XHJcbiAgICAgICAgICByYW5nZS5zZXRFbmQoZW5kLCBmb2N1c09mZnNldCk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgIC8vc2VsZWN0aW9uLnJlc3VtZShyYW5nZSk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmVkOnJhbmdlJywgbWFyayk7XHJcbiAgICAgICAgICBkZWxldGUgbWFyay5zeW5jZWQ7XHJcbiAgICAgICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICAgICAgICBzZWxlY3Rpb24ucmVjb2xsZWN0Tm9kZXMobWFyayk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgbWFyay50ZW1wO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRCb2R5U2VsZWN0aW9uKGVsKSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvblRyaWFsKys7XHJcblxyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDEpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihlbCk7XHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24udGV4dCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblRyaWFsIDwgNCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Qm9keVNlbGVjdGlvbihlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSAnICc7XHJcbiAgICAgICAgICB0aGlzLmJvZHlUZXh0Tm9kZXMgPSBbXTtcclxuICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy5zcXVlZXplKHRoaXMuc2VsZWN0aW9uLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYm9keVRleHROb2RlcyA9IHRoaXMuc2VsZWN0aW9uLm5vZGVzID8gdGhpcy5zZWxlY3Rpb24ubm9kZXMuc2xpY2UoKSA6IFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzcXVlZXplKHRleHQpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSA/IHRleHQucmVwbGFjZSgvXFx0fFxcc3xcXG58XFxyL2csICcnKSA6IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgd2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBjb250ZXh0KSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBjaGlsZHJlbiA9IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHQgICAgYyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdCAgICBwb3MgPSAwLCBpID0gMCwgY3VycmVudENoaWxkO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBjdXJyZW50Q2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkKSByZXR1cm4gcG9zO1xyXG5cclxuXHRcdFx0aWYgKGNvbnRleHQpIHtcclxuXHRcdFx0XHRpZiAoY3VycmVudENoaWxkLm5vZGVOYW1lID09PSBjb250ZXh0KSBwb3MrKztcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEoY3VycmVudENoaWxkLm5vZGVUeXBlID09PSAzICYmICFjdXJyZW50Q2hpbGQuZGF0YSkpIHBvcysrO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBJbW11dFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgdGhpcy5yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICBjb25zdCBtYXJrcyA9IHRoaXMubWFya3MgPSBbLi4uZW50cnkubWFya3Muc29ydCgobTEsIG0yKSA9PiBtMS5pZCAtIG0yLmlkKV07XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzSW5DaHVua3MobWFya3MsIHRoaXMucmVzdG9yZVJhbmdlLCB0aGlzLnJlcG9ydCk7XHJcbiAgfVxyXG5cclxuICByZXN0b3JlUmFuZ2UobWFyaykge1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsZWQpIHJldHVybiB0aGlzLm1hcmtzID0gW107XHJcbiAgICBjb25zdCBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICBjb25zdCBzdGFydCA9IGNvbmRzLnM7XHJcbiAgICBjb25zdCBlbmQgPSBjb25kcy5lO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQodGhpcy5nZXROb2RlKHN0YXJ0LnApLCBzdGFydC5vKTtcclxuICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMuZ2V0Tm9kZShlbmQucCksIGVuZC5vKTtcclxuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmVkOnJhbmdlJywgbWFyayk7XHJcbiAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Tm9kZShwb3NpdGlvbikge1xyXG4gICAgY29uc3QgdGV4dE5vZGVQb3NpdGlvbiA9IHBvc2l0aW9uWzBdO1xyXG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgIGwgPSBwb3NpdGlvbi5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUobC0tID4gMSkge1xyXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltwb3NpdGlvbltsXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZS5jaGlsZE5vZGVzW3RleHROb2RlUG9zaXRpb25dO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG5cdHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3Jlc3RvcmU6bWFya3MnOiAncmVzdG9yZScsXHJcbiAgICAgICAgJ2xvc3Q6bWFya3MnOiAnb25GYWlsdXJlJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAncmVzdW1lZDptYXJrZXJzJzogJ3JldHJ5J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVudHJpZXM6IG51bGwsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHJlc3RvcmVkOiAwLFxyXG4gICAgZmFpbGVkOiAwLFxyXG4gICAgZmFpbHVyZVJlcG9ydDoge30sXHJcblxyXG4gICAgcmVzdG9yZShlbnRyaWVzKSB7XHJcbiAgICAgIGlmICghZW50cmllcykgcmV0dXJuO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIGVudHJpZXMgPSBbZW50cmllc107XHJcblxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4gICAgICB0aGlzLmNvdW50ID0gZW50cmllcy5sZW5ndGg7XHJcblxyXG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeS5pbW11dCkgbmV3IEltbXV0UmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICAgIGVsc2UgbmV3IFJlc3RvcmVyKGVudHJ5KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICB0aGlzLnJlc3RvcmVkID0gMDtcclxuICAgICAgdGhpcy5mYWlsZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWx1cmVSZXBvcnQgPSB7fTtcclxuICAgIH0sXHJcbiAgICByZXRyeShlbnRyeSkge1xyXG4gICAgICBlbnRyeSA9IGVudHJ5ID8gW2VudHJ5XSA6IHRoaXMuZW50cmllcztcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgdGhpcy5yZXN0b3JlKGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBvbkZhaWx1cmUocmVwb3J0KSB7XHJcbiAgICAgIHRoaXMuZmFpbGVkKys7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gcmVwb3J0KSB0aGlzLmZhaWx1cmVSZXBvcnRbaV0gPSByZXBvcnRbaV07XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBpZiAoKyt0aGlzLnJlc3RvcmVkID09PSB0aGlzLmNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFpbGVkKSB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JhdGlvbicsIHRoaXMuZ2V0UmVwb3J0KCkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJlcG9ydCgpIHtcclxuICAgICAgY29uc3QgcmVwb3J0ID0gdGhpcy5mYWlsdXJlUmVwb3J0O1xyXG4gICAgICBsZXQgbXNnID0gJyc7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gcmVwb3J0KSB7XHJcbiAgICAgICAgbXNnICs9IGAke3JlcG9ydFtpXS5yZWFzb259IDogJHtyZXBvcnRbaV0udGV4dH1cXG5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtc2c7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9TRUxFQ1RJT04ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihub2RlLCBvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCkgdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG5cclxuICAgIGlmIChub2RlIHx8ICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcclxuICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmRlZmluZWQgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZShub2RlKVxyXG4gICAgICAgICAgICAucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdE5vZGVzKHRydWUpXHJcbiAgICAgICAgICAgIC5yZXRyaWV2ZVRleHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3ROb2RlcygpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5hZGp1c3QoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7IHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTsgfSBjYXRjaChlKSB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG5vZGUpIHtcclxuICAgIHRoaXMuc2VsZi5zZWxlY3RBbGxDaGlsZHJlbihub2RlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKHNlbGVjdGlvbikge1xyXG4gICAgaWYgKHNlbGVjdGlvbikgdGhpcy5zZWxmID0gc2VsZWN0aW9uO1xyXG4gICAgZWxzZSBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgbGV0IHByb3BzID0gWydmb2N1c05vZGUnLCAnYW5jaG9yTm9kZScsICdmb2N1c09mZnNldCcsICdhbmNob3JPZmZzZXQnXSxcclxuICAgICAgICBpID0gcHJvcHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHRoaXNbcHJvcHNbaV1dID0gc2VsZWN0aW9uW3Byb3BzW2ldXTtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICB0aGlzLnNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgYWRqdXN0KCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZm9jdXMgPSB0aGlzLmZvY3VzTm9kZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0JhY2t3YXJkcyhhbmNob3IsIGZvY3VzKSkgdGhpcy5yZXZlcnNlKGFuY2hvciwgZm9jdXMpO1xyXG4gICAgZWxzZSB0aGlzLm5vcm1hbGl6ZShhbmNob3IsIGZvY3VzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgbm9ybWFsaXplKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG5cclxuICAgICAgICBmaXJzdFRleHROb2RlID0gdGhpcy5ub2Rlc1swXSxcclxuICAgICAgICBsYXN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgaWYgKGZpcnN0VGV4dE5vZGUgIT09IGFuY2hvcilcclxuICAgICAgcmFuZ2Uuc2V0U3RhcnQoZmlyc3RUZXh0Tm9kZSwgZmlyc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGZpcnN0VGV4dE5vZGUuZGF0YS50cmltTGVmdCgpLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGxhc3RUZXh0Tm9kZSAhPT0gZm9jdXMpXHJcbiAgICAgIHJhbmdlLnNldEVuZChsYXN0VGV4dE5vZGUsIGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIChsYXN0VGV4dE5vZGUuZGF0YS5sZW5ndGggLSBsYXN0VGV4dE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGgpKTtcclxuICB9XHJcbiAgY29sbGVjdE5vZGVzKHdob2xlRG9jdW1lbnQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGNvbnRhaW5lciA9IHdob2xlRG9jdW1lbnQgPyB3aW5kb3cuZG9jdW1lbnQuYm9keSA6IHRoaXMuZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKSxcclxuICAgICAgICBmaWx0ZXIgPSB3aG9sZURvY3VtZW50ID9cclxuICAgICAgICAgIChub2RlKSA9PiAoc2VsZi5pc1NlbGVjdGFibGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSkgOlxyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxlY3Rpb24uY29udGFpbnNOb2RlKG5vZGUpICYmICFzZWxmLmlzQmxhbmsobm9kZSkgJiYgc2VsZi5oYXNOb3JtYWxQYXJlbnQobm9kZSkpLFxyXG5cclxuICAgICAgICBpdGVyYXRvciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoY29udGFpbmVyLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwge1xyXG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpLFxyXG5cclxuICAgICAgICB0ZW1wUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIG5vZGVzID0gW10sIHBhcmVudE5vZGVzID0gW10sXHJcbiAgICAgICAgdGV4dE5vZGUsIHBhcmVudCwgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICB3aGlsZSh0ZXh0Tm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkpIHtcclxuICAgICAgbm9kZXMucHVzaCh0ZXh0Tm9kZSk7XHJcbiAgICB9XHJcbiAgICBub2RlcyA9IHRoaXMudHJpbVNlbGVjdGlvbihub2Rlcyk7XHJcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5vcHRpb25zLnByb2dyYW1tYXRpY2FsbHkgPyB0aGlzLnJlZHVjZVRvU2VsZWN0YWJsZShub2RlcykgOiBub2RlcztcclxuICAgIHRoaXMucGFyZW50Tm9kZXMgPSB0aGlzLmNvbGxlY3RQYXJlbnROb2Rlcyh0aGlzLm5vZGVzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVjb2xsZWN0Tm9kZXMobWFyaykge1xyXG4gICAgY29uc3QgbWFya1dyYXBwZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF49XCInICsgbWFyay5pZCArICdfXCJdJykpO1xyXG4gICAgY29uc3QgbSA9IG1hcmtXcmFwcGVycy5sZW5ndGg7XHJcbiAgICBjb25zdCBuZXdTZWdtZW50ID0gbWFya1dyYXBwZXJzLm1hcChlbCA9PiBlbC5maXJzdENoaWxkKTtcclxuXHJcbiAgICBjb25zdCBwcmV2ID0gbWFya1dyYXBwZXJzWzBdLnByZXZpb3VzU2libGluZztcclxuICAgIGNvbnN0IG5leHQgPSBtYXJrV3JhcHBlcnNbbS0xXS5uZXh0U2libGluZztcclxuXHJcbiAgICBjb25zdCBzdGFydCA9IG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbjtcclxuICAgIGNvbnN0IGVuZCA9IG1hcmsudGVtcC5lbmROb2RlUG9zaXRpb247XHJcblxyXG4gICAgaWYgKHByZXYgJiYgcHJldi5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBuZXdTZWdtZW50LnVuc2hpZnQocHJldik7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dCAmJiBuZXh0Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQucHVzaChuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5vZGVzLnNwbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCAuLi5uZXdTZWdtZW50KTtcclxuICB9XHJcbiAgdHJpbVNlbGVjdGlvbihub2Rlcykge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG4gICAgbGV0IGZpcnN0Tm9kZSwgbGFzdE5vZGU7XHJcblxyXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgZmlyc3ROb2RlID0gbm9kZXNbMF07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gZmlyc3ROb2RlICYmIGZpcnN0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCA8PSBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KSB7XHJcbiAgICAgICAgbm9kZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Tm9kZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbGFzdE5vZGUgJiYgdGhpcy5pc0JsYW5rKGxhc3ROb2RlLmRhdGEuc3Vic3RyKDAsIHNlbGVjdGlvbi5mb2N1c09mZnNldCkpKSB7XHJcbiAgICAgICAgbm9kZXMucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbiAgcmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWwgPSB0aGlzLnNlbGY7XHJcbiAgICBjb25zdCByZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcblxyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHJnKTtcclxuXHJcbiAgICBub2RlcyA9IG5vZGVzLmZpbHRlcihub2RlID0+IHtcclxuICAgICAgcmcuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgICAgcmV0dXJuICEhc2VsLnRvU3RyaW5nKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UodGhpcy5yYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICBjb2xsZWN0UGFyZW50Tm9kZXMobm9kZXMpIHtcclxuICAgIGxldCBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHBhcmVudHMgPSBbXSwgaSA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHBhcmVudHMucHVzaChub2Rlc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50cztcclxuICB9XHJcbiAgcmV0cmlldmVUZXh0KCkge1xyXG4gICAgbGV0IHJhbmdlID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBub2RlcyA9IHRoaXMubm9kZXMsXHJcbiAgICAgICAgbCA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBub2RlVGV4dHMgPSBbXSxcclxuICAgICAgICB0ZXh0O1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSBub2RlVGV4dHMucHVzaChub2Rlc1tpXS5kYXRhKTtcclxuXHJcbiAgICBsIC09IDE7XHJcblxyXG4gICAgaWYgKG5vZGVUZXh0cy5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XHJcbiAgICAgICAgLy9ub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQsIHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcbiAgICAgICAgLy9ub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhyYW5nZS5zdGFydE9mZnNldCk7XHJcbiAgICAgICAgbm9kZVRleHRzW2xdID0gbm9kZVRleHRzW2xdLnN1YnN0cmluZygwLCB0aGlzLmRlZmluZWQgPyB1bmRlZmluZWQgOiByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRleHQgPSB0aGlzLnRleHQgPSBub2RlVGV4dHMuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIG5vZGUxID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgbm9kZTIgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChub2RlMSA9IG5vZGUxLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUyKSAmIDB4MTApID09PSAweDEwKVxyXG4gICAgICAgICAgcmV0dXJuIG5vZGUxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuICByZXZlcnNlKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCByYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChmb2N1cywgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChhbmNob3IsIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoc2VsZWN0aW9uKS5hZGp1c3Qoc2VsZWN0aW9uLmFuY2hvck5vZGUsIHNlbGVjdGlvbi5mb2N1c05vZGUpO1xyXG4gIH1cclxuICByZWR1Y2VUb09uZVJhbmdlKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZUNvdW50ID0gc2VsZWN0aW9uLnJhbmdlQ291bnQsXHJcbiAgICAgICAgcmFuZ2UwID0gdGhpcy5yYW5nZSxcclxuICAgICAgICBsYXN0UmFuZ2U7XHJcblxyXG4gICAgaWYgKHJhbmdlQ291bnQgPCAyKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBsYXN0UmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdChyYW5nZUNvdW50IC0gMSk7XHJcblxyXG4gICAgcmFuZ2UwLnNldFN0YXJ0KHJhbmdlMC5zdGFydENvbnRhaW5lciwgcmFuZ2UwLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlMC5zZXRFbmQobGFzdFJhbmdlLmVuZENvbnRhaW5lciwgbGFzdFJhbmdlLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGhhc05vcm1hbFBhcmVudChub2RlKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YWcgPSBwYXJlbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRhZyAhPT0gJ1NDUklQVCcgJiYgdGFnICE9PSAnU1RZTEUnICYmIHRhZyAhPT0gJ0xJTksnICYmIHRhZyAhPT0gJ01FVEEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0JBU0UnICYmIHRhZyAhPT0gJ1RJVExFJyAmJiB0YWcgIT09ICdOT1NDUklQVCcgJiZcclxuICAgICAgdGFnICE9PSAnSU1HJyAmJiB0YWcgIT09ICdJRlJBTUUnICYmIHRhZyAhPT0gJ0VNQkVEJyAmJiB0YWcgIT09ICdQQVJBTScgJiZcclxuICAgICAgdGFnICE9PSAnVklERU8nICYmIHRhZyAhPT0gJ0FVRElPJyAmJiB0YWcgIT09ICdTT1VSQ0UnICYmIHRhZyAhPT0gJ1RSQUNLJyAmJlxyXG4gICAgICB0YWcgIT09ICdDQU5WQVMnICYmIHRhZyAhPT0gJ01BUCcgJiYgdGFnICE9PSAnQVJFQScgJiZcclxuICAgICAgdGFnICE9PSAnTUFUSCcgJiYgdGFnICE9PSAnT0JKRUNUJyAmJlxyXG4gICAgICAhdGhpcy5pc0NoaWxkT2YocGFyZW50LCAnc3ZnJykgLy8mJlxyXG4gICAgICAvLyF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdtYXRoJylcclxuICAgICk7XHJcbiAgfVxyXG4gIGlzQ2hpbGRPZihub2RlLCBub2RlVHlwZSkge1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5vZGVUeXBlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaXNCbGFuayhub2RlKSB7XHJcbiAgICBsZXQgdGV4dDtcclxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChub2RlICYmIHR5cGVvZiBub2RlLmRhdGEgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZS5kYXRhO1xyXG4gICAgICBlbHNlIHRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dC5zZWFyY2goL1teXFxzXFxuXFxyXFx0XS9nKSA9PT0gLTE7XHJcbiAgfVxyXG4gIGlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcG9zaXRpb24gPSBhbmNob3IuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvc2l0aW9uID09PSAyIHx8XHJcbiAgICAgIHBvc2l0aW9uID09PSAxMCB8fFxyXG4gICAgICAoIXBvc2l0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKTtcclxuICB9XHJcbiAgaXNTaW1wbGUoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvck5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1c05vZGUgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGFuY2hvck5vZGUgPT09IGZvY3VzTm9kZSAmJlxyXG4gICAgICBhbmNob3JOb2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgICghYW5jaG9yTm9kZS5uZXh0U2libGluZyB8fCAoYW5jaG9yTm9kZS5uZXh0U2libGluZy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1c05vZGUpICE9PSA0KSkpO1xyXG4gIH1cclxuICBpc1NlbGVjdGFibGUobm9kZSkge1xyXG4gICAgdGhpcy5yYW5nZS5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgcmV0dXJuICEhdGhpcy5zZWxmLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXJrKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0ZScsXHJcbiAgICAgICAgJ2FkZGVkOm5vdGUnOiAnb25Ob3RlQWRkZWQnLFxyXG4gICAgICAgICdhZGRlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrQWRkZWQnLFxyXG4gICAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdvbkxhc3ROb3RlUmVtb3ZlZCcsXHJcbiAgICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya1JlbW92ZWQnXHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGVsOiBudWxsLFxyXG5cclxuICAgIGF0dGFjaGVkOiBmYWxzZSxcclxuXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgIG5vdGVzOiB7XHJcbiAgICAgICAgZWw6IG51bGwsXHJcbiAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgc2hvd246IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvb2ttYXJrOiB7XHJcbiAgICAgICAgZWw6IG51bGwsXHJcbiAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgc2hvd246IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYm9va21hcms6IGZhbHNlLFxyXG4gICAgbm90ZXM6IGZhbHNlLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcclxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVN0YXRlKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdibWljb24nKS50aGVuKGJtaWNvbiA9PiB7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgPSBibWljb247XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ25vdGVpY29uJykudGhlbihub3RlaWNvbiA9PiB0aGlzLmJ1dHRvbnMubm90ZXMuc2hvdyA9IG5vdGVpY29uKTtcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IHNob3VsZEF0dGFjaCA9XHJcbiAgICAgICAgKHRoaXMuYnV0dG9ucy5ib29rbWFyay5zaG93ICYmIHRoaXMuYm9va21hcmspIHx8XHJcbiAgICAgICAgKHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ICYmIHRoaXMubm90ZXMpO1xyXG5cclxuICAgICAgaWYgKHNob3VsZEF0dGFjaCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5hdHRhY2hlZCAmJiAhc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgbGV0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMsIGJ0bjtcclxuXHJcbiAgICAgIGlmICghdGhpcy5hdHRhY2hlZCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXVpJyk7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGIgaW4gYnV0dG9ucykge1xyXG4gICAgICAgIGJ0biA9IGJ1dHRvbnNbYl07XHJcbiAgICAgICAgaWYgKGJ0bi5zaG93ICYmICFidG4uc2hvd24gJiYgdGhpc1tiXSkgdGhpcy5hZGRCdXR0b24oYik7XHJcbiAgICAgICAgZWxzZSBpZiAoYnRuLnNob3duICYmICghdGhpc1tiXSB8fCAhYnRuLnNob3cpKSB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWJ1dHRvbnMubm90ZXMuc2hvd24gJiYgIWJ1dHRvbnMuYm9va21hcmsuc2hvd24pIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmF0dGFjaGVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgICBpZiAoYnV0dG9uc1tiXS5zaG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbihiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtdWkpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUJ1dHRvbnMoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVzQnV0dG9uID0gdGhpcy5idXR0b25zLm5vdGVzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rtbm90ZXN0b2dnbGUnKTtcclxuICAgICAgY29uc3QgYm9va21hcmtCdXR0b24gPSB0aGlzLmJ1dHRvbnMuYm9va21hcmsuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ibScpO1xyXG4gICAgICBub3Rlc0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZXMnKTtcclxuICAgICAgYm9va21hcmtCdXR0b24udGl0bGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnYm1fc2Nyb2xsJyk7XHJcbiAgICB9LFxyXG4gICAgYWRkQnV0dG9uKHR5cGUpIHtcclxuICAgICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBidG4uaGFuZGxlciA9IHR5cGUgPT09ICdub3RlcycgP1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTm90ZXMuYmluZCh0aGlzKSA6XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICB0bXVpLmFwcGVuZENoaWxkKGJ0bi5lbCk7XHJcbiAgICAgIGJ0bi5zaG93biA9IHRydWU7XHJcblxyXG4gICAgICBidG4uZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQnV0dG9uKHR5cGUpIHtcclxuICAgICAgY29uc3QgdG11aSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMuYnV0dG9uc1t0eXBlXTtcclxuXHJcbiAgICAgIHRtdWkucmVtb3ZlQ2hpbGQoYnRuLmVsKTtcclxuICAgICAgYnRuLnNob3duID0gZmFsc2U7XHJcblxyXG4gICAgICBidG4uZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG4uaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCd0bXVpcG9zJylcclxuICAgICAgICAudGhlbihwb3MgPT4gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcG9zLnNwbGl0KCctJykubWFwKHAgPT4gcCArICc6MXB4OycpLmpvaW4oJyAnKSkpO1xyXG4gICAgfSxcclxuICAgIG9uTm90ZUFkZGVkKCkge1xyXG4gICAgICB0aGlzLm5vdGVzID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICBvbkxhc3ROb3RlUmVtb3ZlZCgpIHtcclxuICAgICAgdGhpcy5ub3RlcyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uQm9va21hcmtBZGRlZCgpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgb25Cb29rbWFya1JlbW92ZWQoKSB7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBmYWxzZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVOb3RlcygpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZXMnKTtcclxuICAgIH0sXHJcbiAgICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3Njcm9sbC10by1ib29rbWFyaycpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnaW5qZWN0aW9uJyxcclxuICB0eXBlOiAnY29udGVudCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJyxcclxuXHRcdFx0J2ZhaWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnY2FuY2VsZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLFxyXG4gICAgICAnY2FuY2VsZWQ6c2F2ZS1hZnRlci1jYW5jZWxlZC1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdjb3B5Om1hcmtzJyxcclxuICAgICAgJ3NhdmU6ZW50cnk/JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nLFxyXG4gICAgICAnbG9va3VwOndvcmQnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcycsXHJcbiAgICAgICdjbGlja2VkOm1hcmsnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnLFxyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJyxcclxuICAgICAgJ3dhcm46bWl4ZWQtZW50cnktdHlwZXMnLFxyXG4gICAgICAnd2FybjptdWx0aXBsZS11bmxvY2tlZC1lbnRyaWVzJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnLFxyXG4gICAgICAndmlzdWFsbHktb3JkZXJlZDptYXJrcydcclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge2NvbnNvbGUubG9nKHN1Yk1hcCwgdHlwZSwgW2UudGFyZ2V0Lm5vZGVOYW1lXSk7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==