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
    copy: function copy() {
      var mark = this.findMark();
      var range = mark.range;
      var selection = mark.selection.self;
      var wrappers = mark.wrappers;
      range.setStart(wrappers[0], 0);
      range.setEnd(wrappers[wrappers.length - 1], 1);
      selection.addRange(range);
      navigator.clipboard.writeText(selection.toString().trim().replace(/(\r\n){1,}/g, '\r\n'));
      selection.collapseToStart();
      selection.removeAllRanges();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9hdXRvLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2Jvb2ttYXJrLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvY29udGV4dG1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXItcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9wYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9yZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3RtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfZW50cnkiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsImhpc3RvcnlTZXR0aW5ncyIsInNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsImZpZWxkIiwiUHJvbWlzZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyIiwibWV0aCIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJzeW5jZWRTdG9yYWdlIiwibG9jYWwiLCJsb2NhbEhpc3RvcnkiLCJsb2NhbFN0b3JhZ2UiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9ibWljb24iLCJtaXNjIiwiYm1pY29uIiwiX2dldF9ub3RlaWNvbiIsIm5vdGVpY29uIiwiX2dldF9ub3Rlb25jbGljayIsIm5vdGVvbmNsaWNrIiwiX2dldF9ub3RldHJhbnNwIiwibm90ZXRyYW5zcCIsIl9nZXRfdG11aXBvcyIsInRtdWlwb3MiLCJfZ2V0X2F1dG9zYXZlIiwiYXV0b3NhdmUiLCJfZ2V0X2ltbXV0IiwiX2dldF9wcm9ncmVzc2JhciIsInByb2dyZXNzYmFyIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiX2dldF9tb2RlIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X25hbWluZyIsImJvb3RzdHJhcHBlZCIsInBvd2VyIiwib24iLCJfRE9NTU9EVUxFIiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIl9TVE9SRSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwiZW1pdCIsIl9CT09LTUFSSyIsIm1hcmsiLCJhbmNob3IiLCJ3cmFwcGVycyIsInciLCJrZXlEYXRhIiwiYm9va21hcmsiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhY3RpdmF0ZSIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwicGFyZW50IiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhpZ2hsaWdodCIsImNyZWF0ZVRleHROb2RlIiwidGV4dENvbnRlbnQiLCJzaWxlbnQiLCJpbW11dGFibGUiLCJzYXZlIiwicmVxdWVzdCIsImdyYW50ZWQiLCJzdWIiLCJpMThuIiwiZ2V0TWVzc2FnZSIsInByb21wdCIsInJldHJpZXZlRW50cnkiLCJjb25maXJtZWQiLCJjb25maXJtIiwiY29weSIsImZpbmRNYXJrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidHJpbSIsInN0b3JlIiwib3JkZXIiLCJvcmRlck1hcmtzVmlzdWFsbHkiLCJyZWNyZWF0ZSIsIl9TRUxFQ1RJT04iLCJwcm9ncmFtbWF0aWNhbGx5Iiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJvbkNhbmNlbGVkUmVzdG9yYXRpb24iLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXQiLCJyZW1vdmVCb29rbWFyayIsIm1hcmsxIiwibWFyazIiLCJtMSIsIm0yIiwiYmIxIiwiYmIyIiwidG9wMSIsInRvcDIiLCJtYXAiLCJ3cmFwcGVyczEiLCJ3MSIsImlkMSIsIndyYXBwZXJzMiIsImlkMiIsIncyIiwib25NYXJrZXJLZXkiLCJvbkhvdGtleSIsImNvbGxlY3RNYXJrcyIsImxhc3QiLCJEYXRlIiwiZ2V0VGltZSIsImJvb2ttYXJrZWQiLCJ0aXRsZSIsImNvdW50IiwiZmlyc3QiLCJ1cmwiLCJVUkwiLCJrRCIsIm9uSGFzaENoYW5nZSIsImNvbG9yIiwiQk9EWSIsIkRPTSIsImNsaWNrIiwia2V5dXAiLCJtb3VzZWRvd24iLCJ0b3VjaHN0YXJ0IiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJtYXJrQ2xpY2tIYW5kbGVyIiwidmlzaWJsZSIsInJlY2VudGx5VXBkYXRlZCIsInNldHRpbmdzTW9kZSIsInQiLCJzaXplIiwiaCIsImRyYWdEWCIsImRyYWdEWSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJhZGp1c3ROb3RlRGF0YU9iamVjdCIsImNyZWF0ZU5vdGVFbGVtZW50IiwiYWRkTGlzdGVuZXJzIiwiYWRkTWFya0xpc3RlbmVycyIsIm5vdGVEYXRhIiwiaGVhZGVyIiwiZGVsIiwiZ2VhciIsInBhbGV0dGUiLCJ0ZXh0RWxlbWVudCIsImRlbFRleHQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5UZXh0IiwiZ2VhclRleHQiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJ2YWx1ZSIsImF0dGVtcHRVcGRhdGUiLCJfZGVsZXRlIiwiaGlkZSIsInJlbW92ZU1hcmtMaXN0ZW5lcnMiLCJmb3JjZSIsImlubmVyV2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiZ2V0UG9zaXRpb24iLCJvZmZzZXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbm5lY3RNdXRhdGlvbk9ic2VydmVyIiwiYnJpbmdVcEZyb250IiwiekluZGV4IiwiZGlzY29ubmVjdCIsInRvZ2dsZSIsInRvZ2dsZVBhbGV0dGUiLCJjaGFuZ2VDb2xvciIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRhcmVhIiwiY29uZmlnIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwic2F2ZVNpemUiLCJvYnNlcnZlIiwicmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib25EcmFnU3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwib25EcmFnIiwib25EcmFnRW5kIiwibXV0YXRpb25zTGlzdCIsIndpZHRoIiwibm90ZXMiLCJkcmFnSGFuZGxlciIsImRyYWdTdG9wSGFuZGxlciIsInVwZGF0ZVRyYW5zcCIsIl9OT1RFIiwicmVzdG9yZSIsImFkZEFuZFNob3ciLCJyZW1vdmVOb3RlU3RvcmFnZSIsImlzRW1wdHkiLCJyZW1vdmVOb3RlIiwidG9nZ2xlQWxsIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJ0cmFuc3AiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwic3RhcnREcmFnZ2luZ05vdGUiLCJlbWl0RHJhZ0V2ZW50Iiwic3RvcERyYWdnaW5nTm90ZSIsImRvYyIsInNlbmROb3Rlc1N0YXRlIiwiaW5mbyIsImtleWRvd24iLCJzZWxlY3Rpb25jaGFuZ2UiLCJyZXRyeUFjdGl2ZSIsInNoaWZ0U2Vuc2l0aXZlS2V5cyIsInJlZ2lzdGVyZWRMb2FkSGFuZGxlciIsImtleUNvZGVNYXAiLCJzZXR1cCIsInJlYWR5U3RhdGUiLCJpc0lGcmFtZSIsImhhc2hsZXNzVVJMIiwiY2hlY2tVUkwiLCJpc0VkaXRhYmxlIiwidGFnTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImRlbGVnYXRlIiwidG9Mb3dlckNhc2UiLCJrZXlDb2RlIiwibW9kS2V5IiwibWV0YUtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsImFycm93S2V5cyIsImxvY2tlZEFjdGlvbnMiLCJmdW5jdGlvbktleXMiLCJkZWZhdWx0TWFya2VycyIsImlzQ29sbGFwc2VkIiwib3JpZ0tleSIsImlzTWFya2VyS2V5IiwiaXNDdXN0b21NYXJrZXJLZXkiLCJzZXR0aW5nIiwibG9va3VwIiwic2hvcnRjdXQiLCJzMSIsInMyIiwic2VsZWN0ZWRUZXh0Iiwib25VcmxGb3VuZCIsImZpbHRlckVudHJpZXMiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwiaXNBcnJheSIsImZpcnN0RW50cnkiLCJsb2NrZWRFbnRyaWVzIiwibG9ja2VkRW50cmllc0V4aXN0Iiwibm9uTG9ja2VkRW50cmllcyIsImEiLCJiIiwib25VcmxDaGFuZ2UiLCJ0YWIiLCJuZXdVcmwiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsInN0ZXBzIiwidG90YWxXaWR0aCIsImN1cnJlbnRXaWR0aCIsInN0ZXBMZW5ndGgiLCJjYW5jZWxIYW5kbGVyIiwibW9kYWwiLCJ0eXBlIiwibGVuIiwidG1wcm9ncmVzcyIsImNhbmNlbCIsImNsb3NlSGFuZGxlciIsInN0b3AiLCJ0bXByb2dyZXNzY2FuY2VsIiwidG1wcm9ncmVzc2Nsb3NlIiwicHJvZ3Jlc3MiLCJSZXN0b3JlckJhc2UiLCJmYWlsdXJlUmVwb3J0IiwicmVzdG9yZWQiLCJhcmVhIiwiY2FuY2VsZWQiLCJwcm9jIiwiY2IiLCJyZWMiLCJleHBpcmUiLCJsbCIsInRlbXAiLCJSZXN0b3JlciIsInF1ZXVlIiwiY2FjaGUiLCJwaGFzZSIsInNlbGVjdGlvblRyaWFsIiwiY2h1bmtEdXJhdGlvbiIsIl90aW1lciIsIm9vbSIsImluaXQiLCJub3ciLCJwb3N0cG9uZWQiLCJjb252ZXJ0RGVzY3JpcHRpb24iLCJjcmVhdGVUZW1wT2JqZWN0IiwiY29udmVydGVkQ29uZHMiLCJmaXJzdE5vZGVOYW1lIiwiZmlyc3RQYXJlbnROb2RlTmFtZSIsImZpcnN0VGV4dE5vZGVQb3NpdGlvbiIsImZpcnN0Tm9kZVBvc2l0aW9uIiwiZmlyc3RQYXJlbnROb2RlUG9zaXRpb24iLCJmaXJzdEdyYW1wYU5vZGVQb3NpdGlvbiIsInRyaW1tZWRUZXh0Iiwic3F1ZWV6ZWRUZXh0Iiwic3F1ZWV6ZSIsInRleHRMZW5ndGgiLCJ0cmltbWVkVGV4dExlbmd0aCIsInNxdWVlemVkVGV4dExlbmd0aCIsInBvc3NpYmxlUG9zaXRpb25zIiwicG9zc2libGVFbmRQb3NpdGlvbnMiLCJwb3NzaWJsZVN0YXJ0Tm9kZXMiLCJwb3NzaWJsZUVuZHMiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0cyIsInNvcnRRdWV1ZUJ5SWQiLCJzZXRCb2R5U2VsZWN0aW9uIiwiZ2V0VGV4dFBvc2l0aW9ucyIsInBvc3Rwb25lT3ZlcmxhcHBpbmdzIiwiZmluZFBvc3NpYmxlRXh0cmVtYSIsInJ1bGVPdXRNdWx0aXBsZXMiLCJyZXN0b3JlUmFuZ2VzIiwidGltZXIiLCJyZXBvcnQiLCJyZXMiLCJ0cmltbWVkU2VsZWN0aW9uVGV4dCIsImFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJlbmRQb3NpdGlvbnMiLCJtYXJrVGVtcCIsInJlYXNvbiIsInNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwibWF4UG9zaXRpb24iLCJwb3NpdGlvbnMiLCJwb3MxIiwicG9zMiIsInBvc3Rwb25lIiwiY3V0T3V0Rm9yIiwiYWxyZWFkeUluY2x1ZGVkIiwiYm9keVRleHROb2RlcyIsInNhdGlzZmllZCIsImNoYXJzIiwibmV4dFN0YXJ0Rm91bmQiLCJlbmRpbmdzSW5UaGlzTm9kZSIsIm5vZGVzVGV4dCIsIm5vZGVzVGV4dExlbmd0aCIsImRpZmYiLCJmIiwicSIsInBvc3NpYmxlRm9jdXNPZmZzZXQiLCJzdGFydEZvdW5kRm9yIiwiaGFzRW5kaW5nc0luVGhpc05vZGUiLCJlbmRGb3VuZEZvciIsInNhdGlzZmllc0Rlc2NyaXB0aW9uIiwiZmluZEZvY3VzT2Zmc2V0IiwiZ3JhbmRncmFuZGdyYW1wYSIsIm1hdGNoZXMiLCJmYWlsZWQiLCJzdGFydE5vZGUiLCJzdGFydE5vZGVQb3NpdGlvbiIsInNldE1hdGNoaW5nRW5kIiwiZW5kTm9kZSIsImVuZE5vZGVQb3NpdGlvbiIsImZvY3VzT2Zmc2V0IiwiZGVzY3JpcHRpb24iLCJyZWxldmFudE5vZGVUZXh0IiwibWFya1RleHQiLCJ0ZXh0c01hdGNoIiwibm9kZVRleHQiLCJjb3VudGVyIiwidGVzdCIsImNyZWF0ZVJhbmdlIiwicmVjb2xsZWN0Tm9kZXMiLCJzbGljZSIsImNvbnRleHQiLCJjdXJyZW50Q2hpbGQiLCJJbW11dFJlc3RvcmVyIiwicHJvY2Vzc0luQ2h1bmtzIiwicmVzdG9yZVJhbmdlIiwiZ2V0Tm9kZSIsInRleHROb2RlUG9zaXRpb24iLCJyZXRyeSIsIm9uRmFpbHVyZSIsImdldFJlcG9ydCIsIm1zZyIsInJhbmdlQ291bnQiLCJkZWZpbmVkIiwicmVkdWNlVG9PbmVSYW5nZSIsInJldHJpZXZlVGV4dCIsImFkanVzdCIsInNlbGVjdEFsbENoaWxkcmVuIiwicHJvcHMiLCJpc1NpbXBsZSIsImZvY3VzIiwiaXNCYWNrd2FyZHMiLCJyZXZlcnNlIiwiZmlyc3RUZXh0Tm9kZSIsImxhc3RUZXh0Tm9kZSIsInRyaW1MZWZ0IiwidHJpbVJpZ2h0Iiwid2hvbGVEb2N1bWVudCIsImdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwiZmlsdGVyIiwiaXNTZWxlY3RhYmxlIiwiaXNCbGFuayIsImhhc05vcm1hbFBhcmVudCIsImNvbnRhaW5zTm9kZSIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfVEVYVCIsImFjY2VwdE5vZGUiLCJ0ZW1wUmFuZ2UiLCJwYXJlbnROb2RlcyIsInRleHROb2RlIiwiZmlyc3ROb2RlIiwibGFzdE5vZGUiLCJuZXh0Tm9kZSIsInRyaW1TZWxlY3Rpb24iLCJyZWR1Y2VUb1NlbGVjdGFibGUiLCJjb2xsZWN0UGFyZW50Tm9kZXMiLCJtYXJrV3JhcHBlcnMiLCJuZXdTZWdtZW50IiwicHJldiIsIm5leHQiLCJuZXh0U2libGluZyIsInVuc2hpZnQiLCJhbmNob3JPZmZzZXQiLCJzdWJzdHIiLCJzZWwiLCJyZyIsInNlbGVjdE5vZGUiLCJwYXJlbnRzIiwibm9kZVRleHRzIiwiam9pbiIsIm5vZGUxIiwibm9kZTIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInJhbmdlMCIsImxhc3RSYW5nZSIsInRhZyIsInRvVXBwZXJDYXNlIiwiaXNDaGlsZE9mIiwic2VhcmNoIiwiYXR0YWNoZWQiLCJidXR0b25zIiwic2hvd24iLCJjcmVhdGVCdXR0b25zIiwidXBkYXRlU3RhdGUiLCJzaG91bGRBdHRhY2giLCJyZW5kZXIiLCJidG4iLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJ1cGRhdGVQb3NpdGlvbiIsInRtdWkiLCJub3Rlc0J1dHRvbiIsImJvb2ttYXJrQnV0dG9uIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJfUE9SVCIsIk9ORU9GRiIsIk1BWF9MT0dfRU5UUklFUyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJfQ09QWSIsInNyYyIsInZhbCIsInByb3AiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsIl9FUlJPUlRSQUNLRVIiLCJmaWxlIiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsImxpbmVubyIsImNvbG5vIiwidGltZSIsIm9iajEiLCJvYmoyIiwiX0dFVF9BQ1RJVkVfVEFCIiwidGFicyIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsIl9IQVNITEVTUyIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImwxMG5BdHRyIiwiYXR0ciIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsInRvcGljcyIsImFyZ3MiLCJ0b3BpYyIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNhdGNoIiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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UixDQUFnQjBCLFNBQWhCLENBQTBCenFCLFdBQTFCLENBQXNDLGdCQUFRO0FBQzVDeXBCLGFBQUtDLFNBQUwsQ0FBZTFwQixXQUFmLENBQTJCLE9BQUt3QyxLQUFMLENBQVcsTUFBWCxFQUFpQixPQUFLbW5CLFdBQXRCLENBQTNCO0FBQ0EsU0FBQzlQLEVBQUQsSUFBT0EsSUFBUDtBQUNELE9BSEQ7QUFJRDs7OztFQWxGd0I3aEIsZSIsImZpbGUiOiJjb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdzZXRBcmVhcycsXHJcbiAgICAgICd1cGRhdGVkOm5hbWluZy1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDpoYXNob3B0LXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LXN5bmMnOiAnc2V0U3luY0ZvckVudHJ5JyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktbmFtZSc6ICdyZW5hbWVFbnRyeScsXHJcbiAgICAgICdkZWxldGVkOmVudHJ5JzogJ3JlbW92ZUVudHJ5JyxcclxuICAgICAgJ2hhc2hjaGFuZ2UnOiAncmVzdW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gIGluaXRpYWxpemluZzogZmFsc2UsXHJcbiAgYXJlYV9zZXR0aW5nczogJ3N5bmMnLFxyXG4gIGFyZWFfaGlzdG9yeTogJ3N5bmMnLFxyXG4gIGFyZWFfZW50cnk6ICdzeW5jJyxcclxuXHJcbiAgaWZyYW1lOiBmYWxzZSxcclxuICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgaXNOZXc6IHRydWUsXHJcbiAgLy9lbnRyeTogbnVsbCxcclxuICBlbnRyaWVzOiB7fSxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG4gIGhhc2hTZW5zaXRpdmU6IGZhbHNlLFxyXG4gIHRtaWQ6ICcnLFxyXG4gIG5vdGVDb2xvcjogJ3llbGxvdycsXHJcbiAgaW1tdXQ6IGZhbHNlLFxyXG4gIHJlZGVzY3JpYmluZzogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJpZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudG1pZCA9ICcnO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTmV3IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSByZXR1cm47Ly9zaG93IG5vdGlmaWNhdGlvblxyXG5cclxuICAgIHRoaXMuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmhpc3RvcnkgOiBudWxsO1xyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBoaXN0b3J5U2V0dGluZ3MubmFtaW5nID09PSAnbWFyayc7XHJcbiAgICAgICAgdGhpcy5oYXNoU2Vuc2l0aXZlID0gaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2ggPT09IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXRBcmVhcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzdG9yYWdlLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3RvcmFnZS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICByZW5hbWVFbnRyeShlbnRyeSwgb2xkTmFtZSkge1xyXG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUgPT09IG9sZE5hbWUgJiYgIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIGlmICh0aGlzLmVudHJpZXNbb2xkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW29sZE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0U3luY0ZvckVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkICYmIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSkge1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0uc3luY2VkID0gZW50cnkuc3luY2VkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUVudHJ5KGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZW50cmllcztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICBpZiAoZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBuYW1lID09PSBkZWxldGVkRW50cnkpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICBhZGRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQpIHRoaXMubmFtZSA9IGVudHJpZXNbMF0ubmFtZTtcclxuICAgIGNvbnN0IGUgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGU7IGkrKykge1xyXG4gICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbW11dCA9ICEhZW50cmllc1swXS5pbW11dDtcclxuICB9LFxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRBcmVhcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9LFxyXG5cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2JtaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLmJtaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RlaWNvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVpY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVvbmNsaWNrKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZW9uY2xpY2s7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZXRyYW5zcCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RldHJhbnNwO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RtdWlwb3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2ltbXV0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmltbXV0O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3Byb2dyZXNzYmFyKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MucHJvZ3Jlc3NiYXI7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25hbWluZygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAnY3VzdG9tJztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5uYW1pbmc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5cclxuaW1wb3J0IF9QQUdFIGZyb20gJy4vbW9kdWxlcy9wYWdlJ1xyXG5pbXBvcnQgX0NUTSBmcm9tICcuL21vZHVsZXMvY29udGV4dG1lbnUnXHJcbmltcG9ydCBfTUFSS0VSIGZyb20gJy4vbW9kdWxlcy9tYXJrZXInXHJcbmltcG9ydCBfUFJPR1JFU1MgZnJvbSAnLi9tb2R1bGVzL3Byb2dyZXNzJ1xyXG5pbXBvcnQgX1JFU1RPUkVSIGZyb20gJy4vbW9kdWxlcy9yZXN0b3JlcidcclxuaW1wb3J0IF9OT1RFUyBmcm9tICcuL21vZHVsZXMvbm90ZXMnXHJcbmltcG9ydCBfVE1VSSBmcm9tICcuL21vZHVsZXMvdG11aSdcclxuaW1wb3J0IF9NQVJLRVJQT1BVUCBmcm9tICcuL21vZHVsZXMvbWFya2VyLXBvcHVwJ1xyXG5pbXBvcnQgX0FVVE9NQVJLRVIgZnJvbSAnLi9tb2R1bGVzL2F1dG8tbWFya2VyJ1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdhdXRvaW5pdCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJvb3RzdHJhcHBlZDogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkgJiYgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnBvd2VyKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHBvd2VyKG9uKSB7XHJcbiAgICBpZiAoIW9uIHx8IHRoaXMuYm9vdHN0cmFwcGVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgX1BBR0UoKTtcclxuICAgIF9DVE0oKTtcclxuICAgIF9QUk9HUkVTUygpO1xyXG4gICAgX1JFU1RPUkVSKCk7XHJcbiAgICBfTUFSS0VSKCk7XHJcbiAgICBfTk9URVMoKTtcclxuICAgIF9UTVVJKCk7XHJcbiAgICBfTUFSS0VSUE9QVVAoKTtcclxuICAgIF9BVVRPTUFSS0VSKCk7XHJcblxyXG4gICAgdGhpcy5ib290c3RyYXBwZWQgPSB0cnVlO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vX3N0b3JlJ1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJ1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcic6ICdzZXRNYXJrZXInXHJcbiAgICAgIH1cclxuXHRcdH0sXHJcblxyXG4gICAgaGFuZGxlcjogbnVsbCxcclxuICAgIG1hcmtlcjogJ20nLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2V0TWFya2VyKGtleSkge1xyXG4gICAgICB0aGlzLm1hcmtlciA9IGtleTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiB0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdGFydExpc3RlbmluZygpIHtcclxuICAgICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2V1cC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RvcExpc3RlbmluZygpIHtcclxuICAgICAgaWYgKHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbk1vdXNldXAoKSB7XHJcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICAgICAgaWYgKHNlbGVjdGlvbikgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgdGhpcy5tYXJrZXIpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfQk9PS01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFyayA9IG51bGw7XHJcbiAgICB0aGlzLmFuY2hvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQobWFyaykge1xyXG4gICAgbWFyayA9IG1hcmsgfHwgdGhpcy5tYXJrO1xyXG5cclxuICAgIGxldCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuICAgICAgICBhbmNob3IgPSB3cmFwcGVyc1swXTtcclxuXHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSB0cnVlO1xyXG4gICAgYW5jaG9yLmlkID0gJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJztcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcblxyXG4gICAgdGhpcy5tYXJrID0gbWFyaztcclxuICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZW1vdmUoKSB7XHJcbiAgICBsZXQgbWFyayA9IHRoaXMubWFyayxcclxuICAgICAgICBhbmNob3IgPSB0aGlzLmFuY2hvcixcclxuICAgICAgICB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnMsXHJcbiAgICAgICAgdyA9IHdyYXBwZXJzLmxlbmd0aDtcclxuXHJcbiAgICBhbmNob3IuaWQgPSAnJztcclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IGZhbHNlO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuICB9XHJcbiAgc2Nyb2xsSW50b1ZpZXcoYm0pIHtcclxuICAgIGlmIChibSB8fCAoYm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItYm9va21hcmstYW5jaG9yJykpKVxyXG4gICAgICBibS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndG9nZ2xlZDphZGRvbic6ICdhY3RpdmF0ZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGUodHJ1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFjdGl2YXRlKG9uKSB7XHJcbiAgICAgIGlmIChvbiAmJiAhdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghb24gJiYgdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWdpc3RlckhhbmRsZXIoKSB7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGV4dG1hcmtlci1oaWdobGlnaHQnKSkge1xyXG4gICAgICAgICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBfU1RPUkUudG1pZCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgd2luZG93LmRvY3VtZW50KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUksge1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXJrZXIsIGtleSwgcHJlU2V0dGluZ3MsIGltbXV0KSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uLCBkZWZhdWx0cztcclxuXHJcblx0XHR0aGlzLm1hcmtlciA9IG1hcmtlcjtcclxuXHRcdHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbWFya2VyLnNlbGVjdGlvbjtcclxuICAgIHRoaXMuaW1tdXQgPSBfU1RPUkUucmVkZXNjcmliaW5nID8gbWFya2VyLmlzSW1tdXQgOiBpbW11dDtcclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICAgIGNvbmRzOiBudWxsLFxyXG4gICAgICB0ZXh0OiBzZWxlY3Rpb24udGV4dCxcclxuICAgICAgbm90ZTogbnVsbFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGQgaW4gZGVmYXVsdHMpIHtcclxuICAgICAgaWYgKCFwcmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShkKSkge1xyXG4gICAgICAgIHByZVNldHRpbmdzW2RdID0gZGVmYXVsdHNbZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByZVNldHRpbmdzLmlkID0gcHJlU2V0dGluZ3MuaWQgfHwgKyttYXJrZXIuaWRjb3VudDtcclxuXHRcdHRoaXMuaWQgPSBwcmVTZXR0aW5ncy5pZDtcclxuXHRcdHRoaXMuc2ltcGxlID0gc2VsZWN0aW9uLnNpbXBsZTtcclxuXHJcblx0XHRsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLnJhbmdlO1xyXG5cclxuXHRcdHRoaXMuc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldDtcclxuXHRcdHRoaXMuZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0O1xyXG5cclxuXHRcdHRoaXMud3JhcHBlcnMgPSBudWxsO1xyXG4gICAgdGhpcy5jb250YWluZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhID0ge1xyXG5cdFx0XHRpZDogcHJlU2V0dGluZ3MuaWQsXHJcblx0XHRcdGtleToga2V5LFxyXG5cdFx0XHRzdHlsZTogcHJlU2V0dGluZ3Muc3R5bGUsXHJcblx0XHRcdGNvbmRzOiBwcmVTZXR0aW5ncy5jb25kcyxcclxuXHRcdFx0dGV4dDogcHJlU2V0dGluZ3MudGV4dCxcclxuXHRcdFx0Ym9va21hcms6IHByZVNldHRpbmdzLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiBwcmVTZXR0aW5ncy5ub3RlLFxyXG4gICAgICBzeW5jZWQ6IHByZVNldHRpbmdzLnN5bmNlZFxyXG5cdFx0fTtcclxuXHJcbiAgICBpZiAodGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkge1xyXG4gICAgICB0aGlzLmRlc2NyaWJlX2ltbXV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHRjcmVhdGUocmFuZ2UpIHtcclxuICAgIHJhbmdlID0gcmFuZ2UgfHwgdGhpcy5yYW5nZTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBzdHlsZSA9IHRoaXMua2V5RGF0YS5zdHlsZSxcclxuICAgICAgICBub2RlcyA9IHNlbGVjdGlvbi5ub2RlcyxcclxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgfHwgdGhpcy5jcmVhdGVXcmFwcGVycyhzdHlsZSwgbiksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbGFzdEluZGV4ID0gbiAtIDEsXHJcbiAgICAgICAgbm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgICAgaWYgKCFpKSByYW5nZS5zZXRTdGFydChub2RlLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuXHJcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcnNbaV0pO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh3cmFwcGVyc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKHRoaXMua2V5RGF0YS5ib29rbWFyaykgdGhpcy5tYXJrZXIuc2V0Qm9va21hcmsodGhpcywgZmFsc2UpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbW11dCAmJiAoX1NUT1JFLnJlZGVzY3JpYmluZyB8fCAhdGhpcy5rZXlEYXRhLmNvbmRzKSkgdGhpcy5kZXNjcmliZSgpO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJDbGlja0xpc3RlbmVycygpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuICByZWdpc3RlckNsaWNrTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgZm9yIChsZXQgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYXJrZXIucHJveHkodGhpcywgdGhpcy5vbkNsaWNrKSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNsaWNrKGUpIHtcclxuICAgIGxldCBldmVudDtcclxuICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICBldmVudCA9ICdjbGlja2VkOm1hcmsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlICsgJ18wJztcclxuICAgICAgZXZlbnQgPSAnYWN0aXZhdGVkOm1hcmsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXJrZXIuZW1pdChldmVudCwge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgYm9va21hcms6ICEhdGhpcy5rZXlEYXRhLmJvb2ttYXJrLFxyXG4gICAgICBub3RlOiAhIXRoaXMua2V5RGF0YS5ub3RlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVmaW5lUG9zaXRpb24obiwgaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgbGV0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIG4gPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogd3JhcHBlcnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGZpcnN0V3JhcHBlciA9IHdyYXBwZXJzWzBdO1xyXG4gICAgY29uc3QgbGFzdFdyYXBwZXIgPSB3cmFwcGVyc1tuXTtcclxuICAgIGNvbnN0IGZpcnN0UGFyZW50ID0gZmlyc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBsYXN0UGFyZW50ID0gbGFzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGxldCBhbmNob3JQcmV2LCBmb2N1c1ByZXY7XHJcblxyXG4gICAgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQoZmlyc3RQYXJlbnQsIGZpcnN0V3JhcHBlciwgdHJ1ZSkgLSAxO1xyXG4gICAgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChsYXN0UGFyZW50LCBsYXN0V3JhcHBlciwgdHJ1ZSk7XHJcblxyXG4gICAgYW5jaG9yUHJldiA9IGZpcnN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICBmb2N1c1ByZXYgPSBsYXN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmc7XHJcblxyXG4gICAgaWYgKGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5ub2RlVHlwZSA9PT0gMSkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gKz0gMTtcclxuICAgIGlmICghZm9jdXNQcmV2IHx8IGZvY3VzUHJldi5ub2RlVHlwZSA9PT0gMyB8fCBmaXJzdFBhcmVudCA9PT0gbGFzdFBhcmVudCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiAtPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA8IDApIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gMDtcclxuICAgIGlmICh0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgaWYgKGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgICAgdGhpcy5zdGFydE9mZnNldCA9IGFuY2hvclByZXYgJiYgYW5jaG9yUHJldi5kYXRhID8gYW5jaG9yUHJldi5kYXRhLmxlbmd0aCA6IDA7XHJcbiAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdGhpcy5zaW1wbGUgPyB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5rZXlEYXRhLnRleHQubGVuZ3RoIDogdGhpcy5lbmRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbih1bmRlZmluZWQsIHRydWUpXHJcbiAgICAgICAgLmRlc2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cdHVuZG8oKSB7XHJcblx0XHRsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuXHRcdFx0XHR3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMsXHJcblx0XHRcdFx0dyA9IHdyYXBwZXJzLmxlbmd0aCxcclxuXHRcdFx0XHRjb250YWluZXIsIHdyYXBwZXI7XHJcblxyXG5cdFx0d2hpbGUgKHctLSkge1xyXG5cdFx0XHRjb250YWluZXIgPSBjb250YWluZXJzW3ddO1xyXG5cdFx0XHR3cmFwcGVyID0gd3JhcHBlcnNbd107XHJcblx0XHRcdGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcclxuXHRcdFx0Y29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHJlZG8oKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycyxcclxuICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5zZWxmLFxyXG4gICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICByYW5nZS5zZXRTdGFydChjb250YWluZXJzWzBdLmNoaWxkTm9kZXNbdGhpcy5hbmNob3JOb2RlUG9zaXRpb25dLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV0uY2hpbGROb2Rlc1t0aGlzLmZvY3VzTm9kZVBvc2l0aW9uXSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24uY29sbGVjdE5vZGVzKCk7XHJcbiAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKCk7XHJcblx0fVxyXG5cdHdoaWNoQ2hpbGQocGFyZW50LCBjaGlsZCwgaW5jbHVkaW5nVGV4dE5vZGVzKSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdGxldCBjaGlsZHJlbiA9IGluY2x1ZGluZ1RleHROb2RlcyB8fCBjaGlsZC5ub2RlVHlwZSA9PT0gMyA/IHBhcmVudC5jaGlsZE5vZGVzIDogcGFyZW50LmNoaWxkcmVuLFxyXG5cdFx0XHRcdGMgPSBjaGlsZHJlbi5sZW5ndGgsXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHRjcmVhdGVXcmFwcGVycyhzdHlsZSwgbnVtYmVyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMgPSBbXSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICB3cmFwcGVyO1xyXG5cclxuXHRcdGZvciAoIDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcblx0XHRcdHdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0Jyk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UoLzsvZywgJyFpbXBvcnRhbnQ7JykpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcsIHRoaXMuaWQgKyAnXycgKyBpKTtcclxuICAgICAgLy93cmFwcGVyLnNldEF0dHJpYnV0ZSgnY29udGV4dG1lbnUnLCAndGV4dG1hcmtlci1jdG0nKTtcclxuXHRcdFx0d3JhcHBlcnMucHVzaCh3cmFwcGVyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3cmFwcGVycztcclxuXHR9XHJcbiAgZGVzY3JpYmUoKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XHJcblx0XHRjb25zdCBlbmQgPSByYW5nZS5lbmRDb250YWluZXI7XHJcblx0XHRjb25zdCBzaW5nbGVOb2RlID0gdGhpcy5zaW1wbGU7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLndyYXBwZXJzWzBdLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBwYXJlbnRJc1RNID0gcGFyZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG5cdFx0Y29uc3QgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBncmFuZGdyYW1wYSA9IGdyYW1wYS5wYXJlbnROb2RlIHx8IDA7XHJcblx0XHRjb25zdCBmVE5QID0gdGhpcy5hbmNob3JOb2RlUG9zaXRpb247XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG5cdFx0XHRvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG5cdFx0XHRuMTogcGFyZW50SXNUTSA/ICdUTScgOiBwYXJlbnQubm9kZU5hbWUsXHJcblx0XHRcdHAxOiBmVE5QLFxyXG5cdFx0XHRuMjogZ3JhbXBhLm5vZGVOYW1lLFxyXG5cdFx0XHRwMjogdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSxcclxuXHRcdFx0cDM6IGdyYW5kZ3JhbXBhID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLCBncmFtcGEpIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRwNDogZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYS5wYXJlbnROb2RlLCBncmFuZGdyYW1wYSkgOiB1bmRlZmluZWRcclxuXHRcdH07XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG5cdH1cclxuICBkZXNjcmliZV9pbW11dCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgZW5kUG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGxldCBzdGFydCA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGVuZCA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBib2R5KSB7XHJcbiAgICAgIHN0YXJ0UG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoc3RhcnQucGFyZW50Tm9kZSwgc3RhcnQpKTtcclxuICAgICAgc3RhcnQgPSBzdGFydC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGVuZCAhPT0gYm9keSkge1xyXG4gICAgICBlbmRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChlbmQucGFyZW50Tm9kZSwgZW5kKSk7XHJcbiAgICAgIGVuZCA9IGVuZC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgcDogc3RhcnRQb3NpdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBlOiB7XHJcbiAgICAgICAgbzogdGhpcy5lbmRPZmZzZXQsXHJcbiAgICAgICAgcDogZW5kUG9zaXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgICB9XHJcblx0XHR9LFxyXG5cclxuICAgIGhhbmRsZXI6IG51bGwsXHJcbiAgICBhcHBlbmRlZDogZmFsc2UsXHJcbiAgICBoZWlnaHQ6IDAsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCkudGhlbigoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ3BvcHVwJztcclxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwJyk7XHJcbiAgICAgIGNvbnN0IGJnQ29sb3JSZWdFeHAgPSAvYmFja2dyb3VuZC1jb2xvcjooI1thLWYwLTldezZ9KS87XHJcbiAgICAgIGxldCBiZ0NvbG9yLCBjb2xvckJ0bjtcclxuICAgICAgZm9yIChsZXQgbSBpbiB0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgICBiZ0NvbG9yID0gdGhpcy5tYXJrZXJzW21dLnN0eWxlLm1hdGNoKGJnQ29sb3JSZWdFeHApO1xyXG4gICAgICAgIGlmIChiZ0NvbG9yKSB7XHJcbiAgICAgICAgICBjb2xvckJ0biA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bXBvcHVwY29sb3InKTtcclxuICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGNvbG9yQnRuKTtcclxuICAgICAgICAgIGNvbG9yQnRuLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yLnBvcCgpO1xyXG4gICAgICAgICAgY29sb3JCdG4uaWQgPSAndG1wb3B1cGNvbG9yLS0nICsgbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93KCkge1xyXG4gICAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gcG9wdXAuc3R5bGU7XHJcbiAgICAgIGxldCBwb3B1cEhlaWdodDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNlZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmFwcGVuZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uUG9zaXRpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgc3R5bGUudG9wID0gc2VsZWN0aW9uUG9zaXRpb24udG9wIC0gc2VsZWN0aW9uUG9zaXRpb24uaGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgKyAncHgnO1xyXG4gICAgICAgIHN0eWxlLmxlZnQgPSBzZWxlY3Rpb25Qb3NpdGlvbi5sZWZ0ICsgd2luZG93LnNjcm9sbFggKyAncHgnO1xyXG5cclxuICAgICAgICBwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSAtIHBvcHVwSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICgocG9wdXBIZWlnaHQgPSBwb3B1cC5vZmZzZXRIZWlnaHQpICE9PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgIHN0eWxlLnRvcCA9IHBhcnNlSW50KHN0eWxlLnRvcCkgKyBwb3B1cEhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmhlaWdodCA9IHBvcHVwSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWQpIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTW91c2Vkb3duKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdUTVBPUFVQQ09MT1InKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGlja2VkOnBvcHVwLW1hcmtlcicsIGVsLmlkLnNwbGl0KCctLScpLnBvcCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUsIF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9HTE9CQUxfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLIGZyb20gJy4vbWFyay1pdGVtJ1xyXG5pbXBvcnQgX0JPT0tNQVJLIGZyb20gJy4vYm9va21hcmsnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgLy8gbWFya2VyIG1vZHVsZVxyXG5cdHJldHVybiBuZXcgX01PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuXHRcdFx0RU5WOiB7XHJcblx0XHRcdFx0J3NldDplbnRyaWVzJzogJ3VwZGF0ZUlEJyxcclxuXHRcdFx0XHQncHJlc3NlZDptYXJrZXIta2V5JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAncHJlc3NlZDpob3RrZXknOiAnb25Ib3RrZXknLFxyXG4gICAgICAgICdjbGlja2VkOnBvcHVwLW1hcmtlcic6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3NlbGVjdGlvbi1lbmQnOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdyZWNyZWF0ZScsXHJcbiAgICAgICAgJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnOiAnb25GaW5pc2hlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnY2FuY2VsZWQ6cmVzdG9yYXRpb24nOiAnb25DYW5jZWxlZFJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnY3R4OmInOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAgICdjdHg6LWInOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAgICdjdHg6ZCc6ICdyZW1vdmUnLFxyXG4gICAgICAgICdjdHg6bSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ2N0eDpuJzogJ2FkZE5vdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdjaGFuZ2VkOm5vdGUtY29sb3InOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdjaGFuZ2VkOm5vdGUtcG9zJzogJ3NhdmVOb3RlJyxcclxuICAgICAgICAnY2hhbmdlZDpub3RlLXNpemUnOiAnc2F2ZU5vdGUnLFxyXG5cdFx0XHRcdCdzaWRlYmFyOmhpZ2hsaWdodCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCc6ICdyZW1vdmUnLFxyXG4gICAgICAgICdzaWRlYmFyOmJvb2ttYXJrJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnOiAncmVtb3ZlQm9va21hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOm5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6aW1tdXQnOiAnaW1tdXQnLFxyXG4gICAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcyc6ICdzYXZlJyxcclxuICAgICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbic6ICdyZXN1bWUnLFxyXG4gICAgICAgICdzaWRlYmFyOnVuZG8nOiAndW5kbycsXHJcbiAgICAgICAgJ3NpZGViYXI6cmVkbyc6ICdyZWRvJyxcclxuICAgICAgICAnc2lkZWJhcjpjb3B5JzogJ2NvcHknLFxyXG4gICAgICAgICdzaWRlYmFyOm5leHQtbWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICAgJ2hhc2hjaGFuZ2UnOiAnb25IYXNoQ2hhbmdlJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0aW9uOiBudWxsLFxyXG5cdFx0ZG9uZTogW10sXHJcblx0XHR1bmRvbmU6IFtdLFxyXG5cdFx0dmlzdWFsbHlPcmRlcmVkTWFya3M6IFtdLFxyXG5cdFx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgICBib29rbWFyazogbnVsbCxcclxuICAgIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRcdGlkY291bnQ6IDAsXHJcblx0XHRtYXJrU2Nyb2xsUG9zOiAtMSxcclxuXHJcbiAgICB1cGRhdGVJRChlbnRyaWVzKSB7XHJcbiAgICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgICAgY29uc3QgaWRzID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG5cclxuICAgICAgICBpZiAoIWxvY2tlZCAmJiBlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG1hcmtzID0gKGVudHJ5Lm1hcmtzIHx8IFtdKS5jb25jYXQoZW50cnkubG9zdCB8fCBbXSksXHJcbiAgICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoZCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoZC0tKSB7XHJcbiAgICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaWRjb3VudCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGlkcyk7XHJcbiAgICB9LFxyXG5cdFx0bWFyayhrZXksIGRhdGEsIGltbXV0KSB7XHJcblx0XHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgaWYgKGRhdGEuYXV0b25vdGUpIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCBtYXJrLCBkYXRhLmF1dG9ub3RlKTtcclxuXHJcblx0XHRcdHJldHVybiBtYXJrO1xyXG5cdFx0fSxcclxuXHRcdHVuZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0XHRpZiAoZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgdGhpcy51bmRvbmUucHVzaChtYXJrLnVuZG8oKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvb2ttYXJrKSB0aGlzLnVuZG9Cb29rbWFyaygpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHR9LFxyXG5cdFx0cmVkbyhub0F1dG9zYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0XHRpZiAodW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCBbbWFya10pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdH0sXHJcbiAgICBjdXRPdXQoaSkge1xyXG4gICAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICAgIGluZGljZXMgPSBbaV0sXHJcbiAgICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICAgIGZvciAodmFyIHggPSBqICsgMTsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRvQmVSZW1vdmVkLmluY2x1ZGVzKHgpKSB0b0JlUmVtb3ZlZC5wdXNoKHgpO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgICAgfVxyXG4gICAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lLnNwbGljZSh0b0JlUmVtb3ZlZC5wb3AoKSwgMSlbMF0udW5kbygpO1xyXG4gICAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc21hbGxlc3RJRDtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGlkID0gaWQgPyBpZCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcbiAgICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICAgIGxldCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkLnNwbGl0KCdfJylbMF0pLFxyXG4gICAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICAgIHBvc2l0aW9uID0gZG9uZS5pbmRleE9mKG1hcmspLFxyXG4gICAgICAgICAgc21hbGxlc3RJRCwgaTtcclxuXHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgICB0aGlzLnVuZG8oKTtcclxuICAgICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKHRoaXMudW5kb25lLmxlbmd0aCkgdGhpcy5yZWRvKHRydWUpO1xyXG5cclxuICAgICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkWzBdKTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICAgIF9TVE9SRS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgLy8gd2hpbGUgKHRoaXMuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgLy8gICB0aGlzLnVuZG8odHJ1ZSk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKVxyXG4gICAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBoaWdobGlnaHQucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGlnaGxpZ2h0LnRleHRDb250ZW50KSwgaGlnaGxpZ2h0KTtcclxuICAgICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZG9uZSA9IFtdO1xyXG4gICAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gW107XHJcbiAgICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IFtdO1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSAtMTtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdyZXN1bWVkOm1hcmtlcnMnLCBlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICAgIHRoaXMuaXNJbW11dCA9IGltbXV0YWJsZTtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IHRydWU7XHJcbiAgICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIH0sXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICBpZiAoX1NUT1JFLmRpc2FibGVkKSByZXR1cm4gdGhpcy5lbWl0KCdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyk7XHJcblxyXG4gICAgICBjb25zdCBpZnJhbWUgPSBfU1RPUkUuaWZyYW1lO1xyXG4gICAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICAgIGlmIChfU1RPUkUuaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgICAgICBpZiAoIWxvY2tlZCAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9TVE9SRS5uYW1lKSB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlybWVkID0gdHJ1ZTtcclxuXHQgICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG5cdCAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuXHQgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHRcdH0sXHJcbiAgICBhdXRvc2F2ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCd1bnNhdmVkLWNoYW5nZXMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29weSgpIHtcclxuICAgICAgY29uc3QgbWFyayA9IHRoaXMuZmluZE1hcmsoKTtcclxuICAgICAgY29uc3QgcmFuZ2UgPSBtYXJrLnJhbmdlO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBtYXJrLnNlbGVjdGlvbi5zZWxmO1xyXG4gICAgICBjb25zdCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnM7XHJcblxyXG4gICAgICByYW5nZS5zZXRTdGFydCh3cmFwcGVyc1swXSwgMCk7XHJcbiAgICAgIHJhbmdlLnNldEVuZCh3cmFwcGVyc1t3cmFwcGVycy5sZW5ndGggLSAxXSwgMSk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblx0XHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGlvbi50b1N0cmluZygpLnRyaW0oKS5yZXBsYWNlKC8oXFxyXFxuKXsxLH0vZywgJ1xcclxcbicpKTtcclxuICAgICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICB9LFxyXG4gICAgc3RvcmUobWFyaywgc2F2ZSwgb3JkZXIpIHtcclxuXHRcdFx0dGhpcy5kb25lLnB1c2gobWFyayk7XHJcbiAgICAgIGlmIChzYXZlICE9PSBmYWxzZSkgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0XHRpZiAob3JkZXIpIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblx0XHR9LFxyXG4gICAgcmVjcmVhdGUobWFyaykge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKG51bGwsIHsgcHJvZ3JhbW1hdGljYWxseTogdHJ1ZSB9KTtcclxuICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsobWFyay5rZXksIG1hcmspLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIG9uRmluaXNoZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgaWYgKCF0aGlzLmRvbmUubGVuZ3RoKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIHRoaXMuZG9uZSk7XHJcblxyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChfU1RPUkUubmFtZSA9PT0gbWFyay5rZXlEYXRhLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkpIHtcclxuICAgICAgICAgIHRoaXMuZ290b01hcmsobWFyayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc29ydEJ5SWQoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5yZWRlc2NyaWJpbmcpIHtcclxuICAgICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNhbmNlbGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIF9TVE9SRS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYWRkTm90ZShpZCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2FkZDpub3RlJywgdGhpcy5maW5kTWFyayhpZCkpO1xyXG4gICAgfSxcclxuICAgIHNhdmVOb3RlKGlkKSB7XHJcbiAgICAgIGlmICghX1NUT1JFLmxvY2tlZCkgcmV0dXJuIHRoaXMuYXV0b3NhdmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQpLmtleURhdGE7XHJcbiAgICAgIGNvbnN0IHN5bmNlZCA9IHR5cGVvZiBtYXJrLnN5bmNlZCA9PT0gJ2Jvb2xlYW4nID8gbWFyay5zeW5jZWQgOiBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcblxyXG4gICAgICBjb25zdCBlbnRyeSA9IHtcclxuICAgICAgICBtYXJrczogW21hcmtdLFxyXG4gICAgICAgIG5hbWU6IG1hcmsudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSxcclxuICAgICAgICBzeW5jZWRcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgZW50cnkpO1xyXG4gICAgfSxcclxuICAgIGdvdG9NYXJrKG1hcmspIHtcclxuICAgICAgY29uc3QgbWFya0VsZW1lbnRzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcztcclxuICAgICAgbGV0IGVsLCBwb3MsIGlkO1xyXG4gICAgICBpZiAobWFyayB8fCBtYXJrID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbWFyayArIDE7XHJcbiAgICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1ttYXJrXTtcclxuICAgICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG4gICAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZD1cIicgKyBpZCArICdfMFwiXScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLm1hcmtTY3JvbGxQb3M7XHJcbiAgICAgICAgZWwgPSBtYXJrRWxlbWVudHNbcG9zXTtcclxuICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcblxyXG5cdFx0XHRpZiAoIW1hcmsgfHwgdHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB0aGlzLmdldEJ5SWQoaWQpLm9uQ2xpY2soaWQpO1xyXG4gICAgICB0aGlzLmluZGljYXRlTWFyayhpZCk7XHJcbiAgICB9LFxyXG5cdFx0Z290b05leHRNYXJrKGRpcikge1xyXG5cdFx0XHRjb25zdCBsID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5sZW5ndGg7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtTY3JvbGxQb3MgKz0gZGlyO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMubWFya1Njcm9sbFBvcyA8IDApIHRoaXMubWFya1Njcm9sbFBvcyA9IGwgLSAxO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPj0gbCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gMDtcclxuXHJcblx0XHRcdHRoaXMuZ290b01hcmsoKTtcclxuXHRcdH0sXHJcbiAgICBpbmRpY2F0ZU1hcmsoaWQpIHtcclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKVxyXG4gICAgICAgIC5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgICBjb25zdCB0bXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkXj1cIicgKyBpZCArICdfXCJdJykpO1xyXG5cclxuICAgICAgdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSksIDIwMDApO1xyXG4gICAgfSxcclxuICAgIHNldEJvb2ttYXJrKG0sIHNhdmUpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcmssXHJcbiAgICAgICAgICBtYXJrID0gdGhpcy5maW5kTWFyayhtKTtcclxuXHJcbiAgICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGJvb2ttYXJrKSB7XHJcbiAgICAgICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBuZXcgX0JPT0tNQVJLKCkuc2V0KG1hcmspO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGRlZDpib29rbWFyaycpO1xyXG4gICAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgIH0sXHJcbiAgICB1bmRvQm9va21hcmsoKSB7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVCb29rbWFyaygpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgICBpZiAoIWJvb2ttYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gYm9va21hcms7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsVG9Cb29rbWFyaygpIHtcclxuICAgICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICAgIGlmIChib29rbWFyaykgYm9va21hcmsuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH0sXHJcbiAgICBnZXRCeUlkKGlkLCBwb3MpIHtcclxuXHRcdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmUsXHJcblx0XHRcdFx0ICBkID0gZG9uZS5sZW5ndGgsXHJcblx0XHRcdFx0ICBtYXJrO1xyXG5cclxuXHRcdFx0d2hpbGUgKGQtLSkge1xyXG5cdFx0XHRcdG1hcmsgPSBkb25lW2RdO1xyXG5cclxuXHRcdFx0XHRpZiAobWFyay5rZXlEYXRhLmlkID09IGlkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbWFyaywgcG9zaXRpb246IGQgfSA6IG1hcms7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbnVsbCwgcG9zaXRpb246IG51bGwgfSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHRcdGZpbmRNYXJrKHgpIHtcclxuXHRcdFx0eCA9IHggPyB4IDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuXHRcdFx0bGV0IG1hcmsgPSAheCA/XHJcblx0XHRcdFx0dGhpcy5kb25lW3RoaXMuZG9uZS5sZW5ndGggLSAxXSA6XHJcblx0XHRcdFx0XHR0eXBlb2YgeCA9PT0gJ3N0cmluZycgP1xyXG5cdFx0XHRcdHRoaXMuZ2V0QnlJZCh4LnNwbGl0KCdfJylbMF0pIDpcclxuXHRcdFx0XHR4O1xyXG5cdFx0XHRyZXR1cm4gbWFyaztcclxuXHRcdH0sXHJcbiAgICBzb3J0QnlJZCgpIHtcclxuICAgICAgdGhpcy5kb25lLnNvcnQoKG1hcmsxLCBtYXJrMikgPT4gbWFyazEuaWQgLSBtYXJrMi5pZCk7XHJcbiAgICB9LFxyXG5cdFx0b3JkZXJNYXJrc1Zpc3VhbGx5KCkge1xyXG5cdFx0XHR0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZCQ9XCJfMFwiXScpKS5zb3J0KChtMSwgbTIpID0+IHtcclxuXHRcdFx0XHRsZXQgYmIxID0gbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRcdGJiMiA9IG0yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0XHR0b3AxID0gYmIxLnRvcCxcclxuXHRcdFx0XHRcdFx0dG9wMiA9IGJiMi50b3A7XHJcblxyXG5cdFx0XHRcdGlmICh0b3AxIDwgdG9wMikgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdGVsc2UgaWYgKHRvcDIgPCB0b3AxKSByZXR1cm4gMTtcclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChiYjEubGVmdCA8IGJiMi5sZWZ0KSByZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG4gICAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLm1hcChtYXJrID0+IHBhcnNlSW50KG1hcmsuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKTtcclxuICAgICAgdGhpcy5lbWl0KCd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJywgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzKTtcclxuXHRcdH0sXHJcbiAgICBtYXJrc0ludGVyc2VjdChtYXJrMSwgbWFyazIpIHtcclxuXHRcdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgICAgdzEgPSB3cmFwcGVyczEubGVuZ3RoLFxyXG4gICAgICAgICAgaWQxID0gbWFyazEuaWQsXHJcbiAgICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICAgIGlkMiA9IG1hcmsyLmlkLFxyXG4gICAgICAgICAgdzIsIHRtcywgbDtcclxuXHJcbiAgICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgICAgdzIgPSB3cmFwcGVyczIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICh3Mi0tKSB7XHJcbiAgICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgICAgbCA9IHRtcy5sZW5ndGg7XHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG4gICAgb25NYXJrZXJLZXkoZSwga2V5KSB7XHJcblx0XHRcdGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcblxyXG5cdFx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGUpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSBrZXkgPSBlO1xyXG5cdFx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRrZXkgPSBrZXkgfHwgJ20nO1xyXG5cdFx0XHR9XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChfU1RPUkUuaXNOZXcpIHtcclxuICAgICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6ICEhc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogX1NUT1JFLmltbXV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhrZXksIHNldHRpbmdzLm1hcmtlcnNba2V5XSwgdGhpcy5pc0ltbXV0KSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG5cdFx0fSxcclxuICAgIG9uSG90a2V5KGtleSkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgICBjYXNlICd6Jzogc2VsZi51bmRvKCk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3knOiBzZWxmLnJlZG8oKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgICBjYXNlICdiJzogc2VsZi5zZXRCb29rbWFyaygpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlICdhcnJvd3VwJzogc2VsZi5nb3RvTmV4dE1hcmsoLTEpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlICdhcnJvd2Rvd24nOiBzZWxmLmdvdG9OZXh0TWFyaygxKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnZCc6IHNlbGYucmVtb3ZlKCk7IGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJldmVudERlZmF1bHQoZSkge1xyXG5cdFx0XHRpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0KSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0cmV0cmlldmVFbnRyeSgpIHtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgICAgY29uc3QgaXNOZXcgPSBfU1RPUkUuaXNOZXc7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBfU1RPUkUubmFtZTtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgICBlbnRyeS5tYXJrcyA9IHRoaXMuY29sbGVjdE1hcmtzKCk7XHJcblx0XHRcdGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgICAgZW50cnkudGl0bGUgPSB3aW5kb3cuZG9jdW1lbnQudGl0bGU7XHJcblx0XHRcdGVudHJ5LmNvdW50ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG5cdFx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgICBlbnRyeS5pbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IGVudHJ5LmltbXV0O1xyXG5cclxuICAgICAgaWYgKGlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgICBlbnRyeS51cmwgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZSA/IHdpbmRvdy5kb2N1bWVudC5VUkwgOiBfSEFTSExFU1Mod2luZG93LmRvY3VtZW50LlVSTCk7XHJcbiAgICAgICAgZW50cnkuc3luY2VkID0gX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgICBlbnRyeS5oYXNoU2Vuc2l0aXZlID0gX1NUT1JFLmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICAgIGVudHJ5Lm1hcmtzWzBdLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkgOlxyXG4gICAgICAgIGlzTmV3ID8gbmFtZSA6IGVudHJ5Lm5hbWU7XHJcblxyXG5cdFx0XHRyZXR1cm4gZW50cnk7XHJcblx0XHR9LFxyXG4gICAgY29sbGVjdE1hcmtzKCkge1xyXG4gICAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgICAgbGV0IGwgPSBkb25lLmxlbmd0aDtcclxuICAgICAgY29uc3QgbWFya3MgPSBbXTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgICAgZG9uZSA9IFtkb25lW2wtMV1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGxldCBtID0gMCwga0Q7IG0gPCBsOyBtKyspIHtcclxuXHRcdFx0XHRrRCA9IGRvbmVbbV0ua2V5RGF0YTtcclxuICAgICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRcdG1hcmtzLnB1c2goa0QpO1xyXG5cdFx0XHR9XHJcbiAgICAgIHJldHVybiBtYXJrcztcclxuICAgIH0sXHJcbiAgICBvbkhhc2hDaGFuZ2UoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3VtZWQtb24taGFzaGNoYW5nZScpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXJrLCBjb2xvcikge1xyXG5cclxuICBjb25zdCBCT0RZID0gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhZGRNYXJrTGlzdGVuZXJzJyxcclxuICAgICAgICAnZHJhZzpub3RlJzogJ29uRHJhZycsXHJcbiAgICAgICAgJ2RyYWdzdG9wOm5vdGUnOiAnb25EcmFnRW5kJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdfZGVsZXRlJyxcclxuICAgICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICdoaWRlJyxcclxuICAgICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2JyaW5nVXBGcm9udCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYXR0ZW1wdFVwZGF0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoc3RhcnQ6IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBlbDogbnVsbCxcclxuICAgIG1hcmssXHJcbiAgICBjb2xvcjogY29sb3IgfHwgJycsXHJcbiAgICBtYXJrQ2xpY2tIYW5kbGVyOiBudWxsLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIHJlY2VudGx5VXBkYXRlZDogZmFsc2UsXHJcbiAgICBzZXR0aW5nc01vZGU6IGZhbHNlLFxyXG4gICAgcG9zOiB7IGw6IG51bGwsIHQ6IG51bGwgfSxcclxuICAgIHNpemU6IHsgdzogbnVsbCwgaDogbnVsbCB9LFxyXG4gICAgZHJhZ0RYOiAwLFxyXG4gICAgZHJhZ0RZOiAwLFxyXG4gICAgbXV0YXRpb25PYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGp1c3ROb3RlRGF0YU9iamVjdCgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZU5vdGVFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWRkTWFya0xpc3RlbmVycygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGp1c3ROb3RlRGF0YU9iamVjdCgpIHtcclxuICAgICAgY29uc3Qgbm90ZURhdGEgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlO1xyXG4gICAgICBpZiAodHlwZW9mIG5vdGVEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCAneWVsbG93JyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFub3RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBub3RlRGF0YS5wb3MgfHwgdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbm90ZURhdGEuc2l6ZSB8fCB0aGlzLnNpemU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVOb3RlRWxlbWVudCgpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGUnKTtcclxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVoZWFkZXInKTtcclxuICAgICAgY29uc3QgZGVsID0gdGhpcy5kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVkZWxldGUnKTtcclxuICAgICAgY29uc3QgbWluID0gdGhpcy5taW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVtaW5pbWl6ZScpO1xyXG4gICAgICBjb25zdCBnZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY3VzdG9taXplJyk7XHJcbiAgICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLnBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVwYWxldHRlJyk7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dDtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yO1xyXG4gICAgICBfU1RPUkUubm90ZUNvbG9yID0gY29sb3I7XHJcbiAgICAgIGNvbnN0IGRlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICAgIGNvbnN0IG1pblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjAxMykpO1xyXG4gICAgICBjb25zdCBnZWFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNjk5KSk7XHJcblxyXG4gICAgICBbJ2dyZWVuJywgJ3doaXRlJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJywgJ3B1cnBsZScsICdibHVlJywgJ3R1cnF1b2lzZSddLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY29sb3InKTtcclxuICAgICAgICBjb2xvci5jbGFzc05hbWUgPSAndG1ub3RlY29sb3ItLScgKyBjO1xyXG4gICAgICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicsIGMpO1xyXG4gICAgICAgIHBhbGV0dGUuYXBwZW5kQ2hpbGQoY29sb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHAuc2V0QXR0cmlidXRlKCdkYXRhLXRtLW5vdGUnLCB0cnVlKTtcclxuICAgICAgZGVsLmFwcGVuZENoaWxkKGRlbFRleHQpO1xyXG4gICAgICBtaW4uYXBwZW5kQ2hpbGQobWluVGV4dCk7XHJcbiAgICAgIGdlYXIuYXBwZW5kQ2hpbGQoZ2VhclRleHQpO1xyXG4gICAgICBub3RlLmFwcGVuZChoZWFkZXIpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAncmVtb3ZlTm90ZVN0b3JhZ2UnLFxyXG4gICAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3RvZ2dsZTpub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlVHJhbnNwJyxcclxuICAgICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGVzOiB7fSxcclxuICAgIHRvZ2dsZTogbnVsbCxcclxuICAgIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gICAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNwKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgICB9LFxyXG4gICAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUFsbCgpIHtcclxuICAgICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGU7XHJcbiAgICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVHJhbnNwKCkge1xyXG4gICAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgICAgX1NUT1JFLmdldCgnbm90ZXRyYW5zcCcpLnRoZW4odHJhbnNwID0+IHtcclxuICAgICAgICBpZiAodHJhbnNwKSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNFbXB0eShvYmopIHtcclxuICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlciA9IChlKSA9PiB0aGlzLmVtaXREcmFnRXZlbnQobm90ZSwgZSk7XHJcbiAgICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gICAgfSxcclxuICAgIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzpub3RlJywgbm90ZSwgZSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgICB0aGlzLmVtaXQoJ25vdGVzLXN0YXRlJywgIXRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSwgaW5mbyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc3RhcnRlZDphcHAnOiAnY2hlY2tVUkwnLFxyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlJyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZFBhZ2VTdGF0ZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnb25VcmxDaGFuZ2UnLFxyXG4gICAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAnc2V0dXAnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGtleWRvd246IHtcclxuICAgICAgICAgICcqJzogJ2RlbGVnYXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgICAnKic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXJsOiAnJyxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIHNldDogZmFsc2UsXHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICByZXRyeUFjdGl2ZTogZmFsc2UsXHJcbiAgICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICAgIHJlZ2lzdGVyZWRMb2FkSGFuZGxlcjogZmFsc2UsXHJcbiAgICBrZXlDb2RlTWFwOiB7XHJcbiAgICAgICcxMyc6ICdFbnRlcicsXHJcbiAgICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICAgJzE3MSc6ICcrJywgJzE3Myc6ICctJ1xyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwb3dlcihvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZSA9IG9uO1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ21vZGUnKS50aGVuKGFjdGl2ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldCB8fCAhYWN0aXZlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50LndpbmRvdy5kb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnICYmICF0aGlzLnJlZ2lzdGVyZWRMb2FkSGFuZGxlcikge1xyXG4gICAgICAgICAgdGhpcy5yZWdpc3RlcmVkTG9hZEhhbmRsZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5zZXR1cCgpLCB3aW5kb3cucGFyZW50LndpbmRvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfU1RPUkUuaWZyYW1lID0gdGhpcy5pc0lGcmFtZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5kb2N1bWVudC5VUkw7XHJcbiAgICAgICAgdGhpcy5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyh0aGlzLnVybCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tVUkwoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzSUZyYW1lKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIH0sXHJcbiAgICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBlbC50YWdOYW1lO1xyXG5cclxuICAgICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlKGUpIHtcclxuICAgICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgICBtb2RLZXkgPSAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5KSxcclxuICAgICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgICAgZnVuY3Rpb25LZXlzID0gbG9ja2VkQWN0aW9ucy5jb25jYXQoYXJyb3dLZXlzKSxcclxuICAgICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNoaWZ0U2Vuc2l0aXZlS2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkga2V5ID0gdGhpcy5rZXlDb2RlTWFwW2tleUNvZGVdO1xyXG5cclxuICAgICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICAgIGNvbnN0IGlzQ3VzdG9tTWFya2VyS2V5ID0gaXNNYXJrZXJLZXkgJiYgIWRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKGtleSk7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5nKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9va3VwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHJlc3NlZDptYXJrZXIta2V5JywgZSwgb3JpZ0tleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghc2V0dGluZ1sxXSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgICAgY29uc3QgczIgPSBzaG9ydGN1dFsxXTtcclxuXHJcbiAgICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMubG9va3VwKCk7XHJcblxyXG4gICAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdwcmVzc2VkOmhvdGtleScsIGtleSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvb2t1cCgpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRUZXh0KSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgc2VsZWN0ZWRUZXh0KTtcclxuICAgIH0sXHJcbiAgICBjaGVja1VSTCgpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0KCdjaGVjazp1cmwnLCB0aGlzLnVybClcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhKSB0aGlzLm9uVXJsRm91bmQodGhpcy5maWx0ZXJFbnRyaWVzKGRhdGEuZW50cmllcyksIGRhdGEucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVudHJpZXMsIGZvcmNlKSB7XHJcbiAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGVudHJpZXMpID8gZW50cmllcyA6IFtlbnRyaWVzXTtcclxuICAgICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gdGhpcy5oYXNobGVzc1VSTCA6IHRoaXMudXJsO1xyXG5cclxuICAgICAgaWYgKGZvcmNlIHx8IGZpcnN0RW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgICBfU1RPUkUuYWRkRW50cmllcyhlbnRyaWVzKTtcclxuICAgICAgICAvL19TVE9SRS5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICAgIGlmIChmb3JjZSkgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICd3JykgdGhpcy5sb29rdXAoKTtcclxuICAgIH0sXHJcbiAgICBvblVybEZvdW5kKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGUoZW50cmllcywgdHJ1ZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmUgJiYgIXRoaXMuaW5pdGlhbGl6ZWQgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChyZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgICAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IHRoaXMuaGFzaGxlc3NVUkwgOiB0aGlzLnVybDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm1hcmtzJywgZW50cmllcyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaWx0ZXJFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgICAgbGV0IGxvY2tlZEVudHJpZXMgPSBbXSxcclxuICAgICAgICAgIGwgPSBlbnRyaWVzLmxlbmd0aCxcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXNFeGlzdCA9IGZhbHNlLFxyXG4gICAgICAgICAgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBsb2NrZWRFbnRyaWVzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG9ja2VkRW50cmllc0V4aXN0ICYmIG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobG9ja2VkRW50cmllcy5sZW5ndGgpIHtcclxuICAgICAgICBfU1RPUkUubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcy5zb3J0KChhLCBiKSA9PiAobmV3IERhdGUoYS5sYXN0KSkgLSAobmV3IERhdGUoYi5sYXN0KSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9TVE9SRS5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGVudHJpZXM7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6c2VsZWN0aW9uJywgIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCk7XHJcbiAgICB9LFxyXG4gICAgb25VcmxDaGFuZ2UodGFiLCBuZXdVcmwpIHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfU1RPUkUuZW50cmllc1tPYmplY3Qua2V5cyhfU1RPUkUuZW50cmllcylbMF1dO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICFfU1RPUkUuaXNOZXcgJiZcclxuICAgICAgICBlbnRyeSAmJlxyXG4gICAgICAgIGVudHJ5Lmhhc2hTZW5zaXRpdmUgJiZcclxuICAgICAgICBfSEFTSExFU1MobmV3VXJsKSA9PT0gdGhpcy5oYXNobGVzc1VSTCAmJlxyXG4gICAgICAgIG5ld1VybCAhPT0gdGhpcy51cmxcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdoYXNoY2hhbmdlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgICB0aGlzLnJldHJ5QWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICAgIHRoaXMucmV0cnlBY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdlLXN0YXRlJywge1xyXG4gICAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgICByZXRyeUFjdGl2ZTogdGhpcy5yZXRyeUFjdGl2ZVxyXG4gICAgICB9LCBpbmZvKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nOiAnc3RhcnQnLFxyXG4gICAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdwcm9ncmVzcycsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ3Byb2dyZXNzJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnc3RvcCcsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhY3RpdmF0ZSdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgc3RlcHM6IDAsXHJcbiAgICB0b3RhbFdpZHRoOiA0MTMsXHJcbiAgICBjdXJyZW50V2lkdGg6IDAsXHJcbiAgICBzdGVwTGVuZ3RoOiAwLFxyXG4gICAgY2FuY2VsSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcHJvZ3Jlc3Ntb2RhbCcpO1xyXG5cclxuICAgICAgW3tcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2hlYWRlcicsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Jlc3RvcmluZycpXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2Nsb3NlJyxcclxuICAgICAgICB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3NiYXInLFxyXG4gICAgICAgIGNoaWxkOiB7XHJcbiAgICAgICAgICB0eXBlOiAndG1wcm9ncmVzcydcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2NhbmNlbCcsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2NhbmNlbCcpXHJcbiAgICAgIH1dXHJcbiAgICAgICAgLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xyXG4gICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgdGhpc1tvYmoudHlwZV0gPSBlbDtcclxuICAgICAgICAgIGlmIChvYmoudGV4dCkgZWwudGV4dENvbnRlbnQgPSBvYmoudGV4dDtcclxuICAgICAgICAgIGlmIChvYmouY2hpbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmouY2hpbGQudHlwZSk7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgdGhpc1tvYmouY2hpbGQudHlwZV0gPSBjaGlsZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzdW1lKGxlbikge1xyXG4gICAgICB0aGlzLnN0ZXBzID0gbGVuO1xyXG4gICAgICB0aGlzLnN0ZXBMZW5ndGggPSB0aGlzLnRvdGFsV2lkdGggLyBsZW47XHJcbiAgICAgIHRoaXMuY3VycmVudFdpZHRoID0gMDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gMDtcclxuICAgIH0sXHJcbiAgICBzdGFydChsZW4pIHtcclxuICAgICAgaWYgKCFsZW4gfHwgIXRoaXMuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgIHRoaXMucmVzdW1lKGxlbik7XHJcbiAgICAgIGNvbnN0IGNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpO1xyXG4gICAgICBjb25zdCBjbG9zZUhhbmRsZXIgPSB0aGlzLmNsb3NlSGFuZGxlciA9IHRoaXMuc3RvcC5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnRtcHJvZ3Jlc3NjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHByb2dyZXNzKCkge1xyXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY3VycmVudFdpZHRoICs9IHRoaXMuc3RlcExlbmd0aDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgfSxcclxuICAgIHN0b3AoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoKGUpIHt9XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjYW5jZWxlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgncHJvZ3Jlc3NiYXInKS50aGVuKHByb2dyZXNzYmFyID0+IHRoaXMuYWN0aXZlID0gcHJvZ3Jlc3NiYXIpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5vbignY2FuY2VsZWQ6cmVzdG9yYXRpb24nLCAoKSA9PiB0aGlzLmNhbmNlbGVkID0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW5DaHVua3MoZGF0YSwgcHJvYywgY2IpIHtcclxuICAgIHByb2MgPSBwcm9jLmJpbmQodGhpcyk7XHJcbiAgICBjYiA9IGNiLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIHJlYygpIHtcclxuXHRcdFx0bGV0IGV4cGlyZSA9ICtuZXcgRGF0ZSgpICsgNTAwO1xyXG5cclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdHRyeSB7XHJcbiAgICAgICAgICBwcm9jKGRhdGEuc2hpZnQoKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHR9IHdoaWxlIChkYXRhLmxlbmd0aCA+IDAgJiYgZXhwaXJlID4gK25ldyBEYXRlKCkpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDApO1xyXG5cdFx0XHRlbHNlIGNiKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuICByZXBvcnQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdsb3N0Om1hcmtzJywgdGhpcy5mYWlsdXJlUmVwb3J0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmVudHJ5Lm5hbWUsIHRoaXMucmVzdG9yZWQsIHRoaXMubG9zdCwgdGhpcy5hcmVhKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgIHRoaXMuY2FjaGUgPSBbXTtcclxuICAgIHRoaXMucGhhc2UgPSAxO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCA9IDA7XHJcbiAgICB0aGlzLmNodW5rRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgdGhpcy5vb20gPSBlbnRyeS5tYXJrcy5sZW5ndGggPT09IDEgJiYgZW50cnkubWFya3NbMF0uaWQgPT0gMTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lcigpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRpbWVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbnRyeSxcclxuICAgICAgICBub3cgPSBbXSwgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICBsID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBtYXJrO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuXHJcbiAgICAgIHRoaXMuY29udmVydERlc2NyaXB0aW9uKG1hcmspLmNyZWF0ZVRlbXBPYmplY3QobWFyayk7XHJcblxyXG4gICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgIGVsc2Ugbm93LnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHBvc3Rwb25lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc3RvcmUoKTtcclxuICB9XHJcbiAgY29udmVydERlc2NyaXB0aW9uKG1hcmspIHtcclxuICAgIGlmICh0eXBlb2YgbWFyay5jb25kcy5vID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgY29udmVydGVkQ29uZHMgPSB7XHJcbiAgICAgICAgICAgIG86IGNvbmRzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgbjI6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIHAxOiBjb25kcy5maXJzdFRleHROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDM6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwNDogY29uZHMuZmlyc3RHcmFtcGFOb2RlUG9zaXRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICBtYXJrLmNvbmRzID0gY29udmVydGVkQ29uZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3JlYXRlVGVtcE9iamVjdChtYXJrKSB7XHJcbiAgICBsZXQgdGV4dCA9IG1hcmsudGV4dCxcclxuICAgICAgICB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLFxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgIG1hcmsudGVtcCA9IHtcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHRyaW1tZWRUZXh0OiB0cmltbWVkVGV4dCxcclxuICAgICAgdHJpbW1lZFRleHRMZW5ndGg6IHRyaW1tZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0OiBzcXVlZXplZFRleHQsXHJcbiAgICAgIHNxdWVlemVkVGV4dExlbmd0aDogc3F1ZWV6ZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZFBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtYXJrLnN5bmNlZCA9IHRoaXMuZW50cnkuc3luY2VkO1xyXG4gIH1cclxuICByZXN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDIpIHRoaXMuc29ydFF1ZXVlQnlJZCgpO1xyXG5cclxuICAgIGxldCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgLmdldFRleHRQb3NpdGlvbnMobWFya3MsIGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5waGFzZSA9PT0gMSAmJiBsZW5ndGggPiAxKVxyXG4gICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgdGhpcy5maW5kUG9zc2libGVFeHRyZW1hKClcclxuICAgICAgICAgIC5ydWxlT3V0TXVsdGlwbGVzKClcclxuICAgICAgICAgIC5yZXN0b3JlUmFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggJiYgIXRoaXMuY2FuY2VsZWQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8ICtuZXcgRGF0ZSgpKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzdG9yZSgpLCAwKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICB9XHJcbiAgc29ydFF1ZXVlQnlJZCgpIHtcclxuICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbWFyaywgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmICghbWFya3NbbF0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdWzBdO1xyXG4gICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgIH1cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5xdWV1ZS5wdXNoKFt0ZW1wW2ldXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgbGV0IHRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCxcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHNxdWVlemVkVGV4dCwgc3F1ZWV6ZWRUZXh0TGVuZ3RoLCBwLCBlbmRQb3NpdGlvbjtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHAgPSB1bmRlZmluZWQ7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICBpZiAoIW1hcmtUZW1wKSB7XHJcbiAgICAgICAgbWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gZW5kUG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzcXVlZXplZFRleHQgPSBtYXJrVGVtcC5zcXVlZXplZFRleHQ7XHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAocCAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIHAgPSAtMTtcclxuICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHNxdWVlemVkVGV4dCwgcCArIDEpO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBwICsgc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICghbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzEnKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcclxuICAgIGxldCBsID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgcG9zLCBzdGFydCwgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHBvcyA9IHBvc2l0aW9uc1tsXTtcclxuICAgICAgc3RhcnQgPSBwb3NbMF07XHJcblxyXG4gICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgZWxzZSB0ZW1wW3N0YXJ0XSA9IHBvcztcclxuICAgIH1cclxuICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBpIDwgdDsgaSsrKVxyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgfVxyXG4gIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBwb3MxLCBwb3MyLCBpLCBtMSwgbTIsIGlkMSwgaWQyLCBpZDtcclxuXHJcbiAgICBpZiAocCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHAtLSA+IDEpIHtcclxuICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICBwb3MyID0gcG9zaXRpb25zW3BdO1xyXG4gICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICBtMiA9IHBvczJbMl07XHJcbiAgICAgICAgaWQxID0gbTEuaWQ7XHJcbiAgICAgICAgaWQyID0gbTIuaWQ7XHJcblxyXG4gICAgICAgIGlmIChpZDEgPT09IGlkMikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG5cclxuICAgICAgICAgIGlmIChpZDEgPCBpZDIpIHtcclxuICAgICAgICAgICAgaWQgPSBpZDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGlkMTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwOyBpKyspXHJcbiAgICAgICAgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjdXRPdXRGb3IoaWQpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUocC0tKSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbnNbcF1bMl0uaWQgPT09IGlkKVxyXG4gICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3Rwb25lKG1hcmspIHtcclxuICAgIGxldCBxdWV1ZSA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYWxyZWFkeUluY2x1ZGVkKVxyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICB9XHJcbiAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgIGxldCBub2RlcyA9IHRoaXMuYm9keVRleHROb2RlcyxcclxuICAgICAgICBuID0gbm9kZXMgPyBub2Rlcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcGhhc2UgPSB0aGlzLnBoYXNlLFxyXG4gICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZSA9IFtdLFxyXG4gICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLCBjaGFycyA9IDAsXHJcbiAgICAgICAgbmV4dFN0YXJ0Rm91bmQsIGVuZGluZ3NJblRoaXNOb2RlLFxyXG4gICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIGRpZmYsIGwsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBlLCBmLCBpZCwgcCwgcSwgeCwgbSxcclxuICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0LCBzdGFydEZvdW5kRm9yLCBwb3N0cG9uZWQsIGhhc0VuZGluZ3NJblRoaXNOb2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgbm9kZXNUZXh0ID0gdGhpcy5zcXVlZXplKG5vZGUuZGF0YSk7XHJcbiAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNoYXJzICs9IG5vZGVzVGV4dExlbmd0aDtcclxuICAgICAgbCA9IGluZGljZXMubGVuZ3RoO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgIHBvc3Rwb25lZCA9IFtdO1xyXG4gICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGluZGljZXNbbF1bMF07XHJcbiAgICAgICAgZW5kUG9zaXRpb24gPSBpbmRpY2VzW2xdWzFdO1xyXG4gICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciB8fCBbXTtcclxuICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLmxlbmd0aCA8IG1hcmsudGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMucHVzaCh7IG5vZGU6IG5vZGUsIHBvczogaSB9KTtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIHN0YXJ0Rm91bmRGb3IucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICFtYXJrLnRlbXAuZW5kRm91bmRGb3IuaW5jbHVkZXMoZW5kUG9zaXRpb24pICYmXHJcbiAgICAgICAgICAoY2hhcnMgLSBlbmRQb3NpdGlvbikgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHN0YXJ0Rm91bmRGb3IpIDwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0ID0gdGhpcy5maW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgZW5kUG9zaXRpb24gLSAoY2hhcnMgLSBub2Rlc1RleHRMZW5ndGgpKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvci5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXSA9IHtcclxuICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zc2libGVGb2N1c09mZnNldCxcclxuICAgICAgICAgICAgICBwb3M6IGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICBzYXRpc2ZpZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICBpZiAoY2hhcnMgPiB0aGlzLm1heFBvc2l0aW9uKSBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChwaGFzZSAhPT0gMSB8fCB0aGlzLm9vbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbWFyayA9IHRoaXMubWFya3NbaV07XHJcbiAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMobWFyay5pZCkpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMicpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IGNhY2hlLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIG5vZGUsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgZ3JhbmRncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxLFxyXG4gICAgICAgIHBvc3NpYmxlRW5kcywgc3RhcnRGb3VuZEZvciwgY29uZHMsIHN0YXJ0T2Zmc2V0LCB0ZW1wLCB0ZXh0TGVuZ3RoLCBzdGFydDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBjYWNoZVtpXTtcclxuICAgICAgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzID0gdGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgIHBvc3NpYmxlRW5kcyA9IHRlbXAucG9zc2libGVFbmRzO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gdGVtcC5zdGFydEZvdW5kRm9yXHJcbiAgICAgIHAgPSBwb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoO1xyXG4gICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY29uZHMubztcclxuICAgICAgdGV4dExlbmd0aCA9IHRlbXAudGV4dExlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwID4gMSkge1xyXG4gICAgICAgIHdoaWxlIChwLS0pIHtcclxuICAgICAgICAgIG5vZGUgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcF0ubm9kZTtcclxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAoIWdyYW1wYSB8fCBjb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gocCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSBwID0gMDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkgcCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHEgPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5ub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW5kZ3JhbXBhID0gZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICghZ3JhbmRncmFuZGdyYW1wYSB8fCBjb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbXBhKSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHBvc3NpYmxlRW5kc1tzdGFydEZvdW5kRm9yW3FdXS5vZmZzZXQgLSBzdGFydE9mZnNldCkgPT09IHRleHRMZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwID0gcTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHAgPSAwO1xyXG5cclxuICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgIHN0YXJ0ID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZSA9IHN0YXJ0Lm5vZGU7XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbiA9IHN0YXJ0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuc2V0TWF0Y2hpbmdFbmQobWFyaywgcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvcltwXSxcclxuICAgICAgICBlbmQgPSBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dO1xyXG5cclxuICAgIG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uID0gZW5kLnBvcztcclxuICAgIG1hcmsudGVtcC5mb2N1c09mZnNldCA9IGVuZC5vZmZzZXQ7XHJcbiAgfVxyXG4gIHNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpIHtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFtcGEgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBkZXNjcmlwdGlvbi5vLFxyXG4gICAgICAgIHJlbGV2YW50Tm9kZVRleHQgPSBub2RlLmRhdGEuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0KS50cmltKCksXHJcbiAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0LFxyXG4gICAgICAgIG0gPSBtYXJrLnRlbXAudHJpbW1lZFRleHRMZW5ndGgsXHJcbiAgICAgICAgdGV4dHNNYXRjaDtcclxuXHJcbiAgICBpZiAobSA8PSBsKVxyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUobWFya1RleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpKSA9PT0gMDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0ZXh0c01hdGNoICYmXHJcbiAgICAgIChwYXJlbnROb2RlLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMSB8fCAoZGVzY3JpcHRpb24ubjEgPT09ICdUTScgJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpICYmXHJcbiAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgIHRoaXMud2hpY2hDaGlsZChwYXJlbnROb2RlLCBub2RlKSA9PT0gZGVzY3JpcHRpb24ucDFcclxuICAgICk7XHJcbiAgfVxyXG4gIGZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBuKSB7XHJcbiAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgbCA9IG5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3F1ZWV6ZShub2RlVGV4dFtpXSkpIGNvdW50ZXIrKztcclxuXHJcbiAgICAgIGlmIChjb3VudGVyID09PSBuKSByZXR1cm4gKC9cXHMkLy50ZXN0KG1hcmsudGV4dCkgPyBpICsgMiA6IGkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzdG9yZVJhbmdlcygpIHtcclxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHN0YXJ0LCBlbmQsIGZvY3VzT2Zmc2V0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgIGVuZCA9IG1hcmtUZW1wLmVuZE5vZGU7XHJcbiAgICAgIGZvY3VzT2Zmc2V0ID0gbWFya1RlbXAuZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSkge1xyXG4gICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzMnKSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgIHJhbmdlLnNldEVuZChlbmQsIGZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgLy9zZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5yZWNvbGxlY3ROb2RlcyhtYXJrKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBtYXJrLnRlbXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJvZHlTZWxlY3Rpb24oZWwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwrKztcclxuXHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKGVsKTtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHJpYWwgPCA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRCb2R5U2VsZWN0aW9uKGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9ICcgJztcclxuICAgICAgICAgIHRoaXMuYm9keVRleHROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUodGhpcy5zZWxlY3Rpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gdGhpcy5zZWxlY3Rpb24ubm9kZXMgPyB0aGlzLnNlbGVjdGlvbi5ub2Rlcy5zbGljZSgpIDogW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpID8gdGV4dC5yZXBsYWNlKC9cXHR8XFxzfFxcbnxcXHIvZywgJycpIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICB3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGNvbnRleHQpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdCAgICBjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0ICAgIHBvcyA9IDAsIGkgPSAwLCBjdXJyZW50Q2hpbGQ7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnRDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGQpIHJldHVybiBwb3M7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZU5hbWUgPT09IGNvbnRleHQpIHBvcysrO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICBpZiAoIShjdXJyZW50Q2hpbGQubm9kZVR5cGUgPT09IDMgJiYgIWN1cnJlbnRDaGlsZC5kYXRhKSkgcG9zKys7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEltbXV0UmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IFsuLi5lbnRyeS5tYXJrcy5zb3J0KChtMSwgbTIpID0+IG0xLmlkIC0gbTIuaWQpXTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NJbkNodW5rcyhtYXJrcywgdGhpcy5yZXN0b3JlUmFuZ2UsIHRoaXMucmVwb3J0KTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVSYW5nZShtYXJrKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIHRoaXMubWFya3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpLFxyXG4gICAgICAgIGZpbHRlciA9IHdob2xlRG9jdW1lbnQgP1xyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxmLmlzU2VsZWN0YWJsZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKSA6XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGVjdGlvbi5jb250YWluc05vZGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSksXHJcblxyXG4gICAgICAgIGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSksXHJcblxyXG4gICAgICAgIHRlbXBSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgbm9kZXMgPSBbXSwgcGFyZW50Tm9kZXMgPSBbXSxcclxuICAgICAgICB0ZXh0Tm9kZSwgcGFyZW50LCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIHdoaWxlKHRleHROb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkge1xyXG4gICAgICBub2Rlcy5wdXNoKHRleHROb2RlKTtcclxuICAgIH1cclxuICAgIG5vZGVzID0gdGhpcy50cmltU2VsZWN0aW9uKG5vZGVzKTtcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSA6IG5vZGVzO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlcyA9IHRoaXMuY29sbGVjdFBhcmVudE5vZGVzKHRoaXMubm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZWNvbGxlY3ROb2RlcyhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrV3JhcHBlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXj1cIicgKyBtYXJrLmlkICsgJ19cIl0nKSk7XHJcbiAgICBjb25zdCBtID0gbWFya1dyYXBwZXJzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5ld1NlZ21lbnQgPSBtYXJrV3JhcHBlcnMubWFwKGVsID0+IGVsLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGNvbnN0IHByZXYgPSBtYXJrV3JhcHBlcnNbMF0ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgY29uc3QgbmV4dCA9IG1hcmtXcmFwcGVyc1ttLTFdLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ID0gbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgZW5kID0gbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbjtcclxuXHJcbiAgICBpZiAocHJldiAmJiBwcmV2Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQudW5zaGlmdChwcmV2KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC5wdXNoKG5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZXMuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIC4uLm5ld1NlZ21lbnQpO1xyXG4gIH1cclxuICB0cmltU2VsZWN0aW9uKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBsZXQgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBmaXJzdE5vZGUgPSBub2Rlc1swXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBmaXJzdE5vZGUgJiYgZmlyc3ROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoIDw9IHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICBub2Rlcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBsYXN0Tm9kZSAmJiB0aGlzLmlzQmxhbmsobGFzdE5vZGUuZGF0YS5zdWJzdHIoMCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSkpIHtcclxuICAgICAgICBub2Rlcy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICByZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbCA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IHJnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UocmcpO1xyXG5cclxuICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICByZy5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgICByZXR1cm4gISFzZWwudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZSh0aGlzLnJhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIGNvbGxlY3RQYXJlbnROb2Rlcyhub2Rlcykge1xyXG4gICAgbGV0IGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgcGFyZW50cyA9IFtdLCBpID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcGFyZW50cy5wdXNoKG5vZGVzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH1cclxuICByZXRyaWV2ZVRleHQoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcyxcclxuICAgICAgICBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG5vZGVUZXh0cyA9IFtdLFxyXG4gICAgICAgIHRleHQ7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIG5vZGVUZXh0cy5wdXNoKG5vZGVzW2ldLmRhdGEpO1xyXG5cclxuICAgIGwgLT0gMTtcclxuXHJcbiAgICBpZiAobm9kZVRleHRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0LCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAvL25vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmspIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgICAnYWRkZWQ6bm90ZSc6ICdvbk5vdGVBZGRlZCcsXHJcbiAgICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrUmVtb3ZlZCdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcblxyXG4gICAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgbm90ZXM6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYm9va21hcms6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICBub3RlczogZmFsc2UsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU3RhdGUoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ID0gbm90ZWljb24pO1xyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgICAodGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgJiYgdGhpcy5ib29rbWFyaykgfHxcclxuICAgICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtdWknKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgICBlbHNlIGlmIChidG4uc2hvd24gJiYgKCF0aGlzW2JdIHx8ICFidG4uc2hvdykpIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICAgIGlmIChidXR0b25zW2JdLnNob3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgICAgY29uc3Qgbm90ZXNCdXR0b24gPSB0aGlzLmJ1dHRvbnMubm90ZXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3Rlc3RvZ2dsZScpO1xyXG4gICAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgICBib29rbWFya0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICAgIH0sXHJcbiAgICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgY29uc3QgaGFuZGxlciA9IGJ0bi5oYW5kbGVyID0gdHlwZSA9PT0gJ25vdGVzJyA/XHJcbiAgICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgIHRtdWkuYXBwZW5kQ2hpbGQoYnRuLmVsKTtcclxuICAgICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG5cclxuICAgICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bi5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3RtdWlwb3MnKVxyXG4gICAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgICB9LFxyXG4gICAgb25Ob3RlQWRkZWQoKSB7XHJcbiAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICBvbkJvb2ttYXJrUmVtb3ZlZCgpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdpbmplY3Rpb24nLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG5cdFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdjYW5jZWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==