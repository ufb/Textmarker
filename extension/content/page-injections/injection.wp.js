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
          functionKeys = lockedActions.concat(arrowKeys).concat('c'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9hdXRvLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2Jvb2ttYXJrLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvY29udGV4dG1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXItcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9wYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9yZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3RtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfZW50cnkiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsImhpc3RvcnlTZXR0aW5ncyIsInNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsImZpZWxkIiwiUHJvbWlzZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyIiwibWV0aCIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJzeW5jZWRTdG9yYWdlIiwibG9jYWwiLCJsb2NhbEhpc3RvcnkiLCJsb2NhbFN0b3JhZ2UiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9ibWljb24iLCJtaXNjIiwiYm1pY29uIiwiX2dldF9ub3RlaWNvbiIsIm5vdGVpY29uIiwiX2dldF9ub3Rlb25jbGljayIsIm5vdGVvbmNsaWNrIiwiX2dldF9ub3RldHJhbnNwIiwibm90ZXRyYW5zcCIsIl9nZXRfdG11aXBvcyIsInRtdWlwb3MiLCJfZ2V0X2F1dG9zYXZlIiwiYXV0b3NhdmUiLCJfZ2V0X2ltbXV0IiwiX2dldF9wcm9ncmVzc2JhciIsInByb2dyZXNzYmFyIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiX2dldF9tb2RlIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X25hbWluZyIsImJvb3RzdHJhcHBlZCIsInBvd2VyIiwib24iLCJfRE9NTU9EVUxFIiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIl9TVE9SRSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwiZW1pdCIsIl9CT09LTUFSSyIsIm1hcmsiLCJhbmNob3IiLCJ3cmFwcGVycyIsInciLCJrZXlEYXRhIiwiYm9va21hcmsiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhY3RpdmF0ZSIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwicGFyZW50IiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhpZ2hsaWdodCIsImNyZWF0ZVRleHROb2RlIiwidGV4dENvbnRlbnQiLCJzaWxlbnQiLCJpbW11dGFibGUiLCJzYXZlIiwicmVxdWVzdCIsImdyYW50ZWQiLCJzdWIiLCJpMThuIiwiZ2V0TWVzc2FnZSIsInByb21wdCIsInJldHJpZXZlRW50cnkiLCJjb25maXJtZWQiLCJjb25maXJtIiwiY29weSIsImZpbmRNYXJrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidHJpbSIsInN0b3JlIiwib3JkZXIiLCJvcmRlck1hcmtzVmlzdWFsbHkiLCJyZWNyZWF0ZSIsIl9TRUxFQ1RJT04iLCJwcm9ncmFtbWF0aWNhbGx5Iiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJvbkNhbmNlbGVkUmVzdG9yYXRpb24iLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXQiLCJyZW1vdmVCb29rbWFyayIsIm1hcmsxIiwibWFyazIiLCJtMSIsIm0yIiwiYmIxIiwiYmIyIiwidG9wMSIsInRvcDIiLCJtYXAiLCJ3cmFwcGVyczEiLCJ3MSIsImlkMSIsIndyYXBwZXJzMiIsImlkMiIsIncyIiwib25NYXJrZXJLZXkiLCJvbkhvdGtleSIsImNvbGxlY3RNYXJrcyIsImxhc3QiLCJEYXRlIiwiZ2V0VGltZSIsImJvb2ttYXJrZWQiLCJ0aXRsZSIsImNvdW50IiwiZmlyc3QiLCJ1cmwiLCJVUkwiLCJrRCIsIm9uSGFzaENoYW5nZSIsImNvbG9yIiwiQk9EWSIsIkRPTSIsImNsaWNrIiwia2V5dXAiLCJtb3VzZWRvd24iLCJ0b3VjaHN0YXJ0IiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJtYXJrQ2xpY2tIYW5kbGVyIiwidmlzaWJsZSIsInJlY2VudGx5VXBkYXRlZCIsInNldHRpbmdzTW9kZSIsInQiLCJzaXplIiwiaCIsImRyYWdEWCIsImRyYWdEWSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJhZGp1c3ROb3RlRGF0YU9iamVjdCIsImNyZWF0ZU5vdGVFbGVtZW50IiwiYWRkTGlzdGVuZXJzIiwiYWRkTWFya0xpc3RlbmVycyIsIm5vdGVEYXRhIiwiaGVhZGVyIiwiZGVsIiwiZ2VhciIsInBhbGV0dGUiLCJ0ZXh0RWxlbWVudCIsImRlbFRleHQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5UZXh0IiwiZ2VhclRleHQiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJ2YWx1ZSIsImF0dGVtcHRVcGRhdGUiLCJfZGVsZXRlIiwiaGlkZSIsInJlbW92ZU1hcmtMaXN0ZW5lcnMiLCJmb3JjZSIsImlubmVyV2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiZ2V0UG9zaXRpb24iLCJvZmZzZXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbm5lY3RNdXRhdGlvbk9ic2VydmVyIiwiYnJpbmdVcEZyb250IiwiekluZGV4IiwiZGlzY29ubmVjdCIsInRvZ2dsZSIsInRvZ2dsZVBhbGV0dGUiLCJjaGFuZ2VDb2xvciIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRhcmVhIiwiY29uZmlnIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwic2F2ZVNpemUiLCJvYnNlcnZlIiwicmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib25EcmFnU3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwib25EcmFnIiwib25EcmFnRW5kIiwibXV0YXRpb25zTGlzdCIsIndpZHRoIiwibm90ZXMiLCJkcmFnSGFuZGxlciIsImRyYWdTdG9wSGFuZGxlciIsInVwZGF0ZVRyYW5zcCIsIl9OT1RFIiwicmVzdG9yZSIsImFkZEFuZFNob3ciLCJyZW1vdmVOb3RlU3RvcmFnZSIsImlzRW1wdHkiLCJyZW1vdmVOb3RlIiwidG9nZ2xlQWxsIiwiY29uZGl0aW9uIiwiYm9keUNsYXNzZXMiLCJ0cmFuc3AiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwic3RhcnREcmFnZ2luZ05vdGUiLCJlbWl0RHJhZ0V2ZW50Iiwic3RvcERyYWdnaW5nTm90ZSIsImRvYyIsInNlbmROb3Rlc1N0YXRlIiwiaW5mbyIsImtleWRvd24iLCJzZWxlY3Rpb25jaGFuZ2UiLCJyZXRyeUFjdGl2ZSIsInNoaWZ0U2Vuc2l0aXZlS2V5cyIsInJlZ2lzdGVyZWRMb2FkSGFuZGxlciIsImtleUNvZGVNYXAiLCJzZXR1cCIsInJlYWR5U3RhdGUiLCJpc0lGcmFtZSIsImhhc2hsZXNzVVJMIiwiY2hlY2tVUkwiLCJpc0VkaXRhYmxlIiwidGFnTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImRlbGVnYXRlIiwidG9Mb3dlckNhc2UiLCJrZXlDb2RlIiwibW9kS2V5IiwibWV0YUtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsImFycm93S2V5cyIsImxvY2tlZEFjdGlvbnMiLCJmdW5jdGlvbktleXMiLCJkZWZhdWx0TWFya2VycyIsImlzQ29sbGFwc2VkIiwib3JpZ0tleSIsImlzTWFya2VyS2V5IiwiaXNDdXN0b21NYXJrZXJLZXkiLCJzZXR0aW5nIiwibG9va3VwIiwic2hvcnRjdXQiLCJzMSIsInMyIiwic2VsZWN0ZWRUZXh0Iiwib25VcmxGb3VuZCIsImZpbHRlckVudHJpZXMiLCJyZWNlbnRseU9wZW5lZEVudHJ5IiwiaXNBcnJheSIsImZpcnN0RW50cnkiLCJsb2NrZWRFbnRyaWVzIiwibG9ja2VkRW50cmllc0V4aXN0Iiwibm9uTG9ja2VkRW50cmllcyIsImEiLCJiIiwib25VcmxDaGFuZ2UiLCJ0YWIiLCJuZXdVcmwiLCJhY3RpdmF0ZVJldHJ5IiwiZGVhY3RpdmF0ZVJldHJ5Iiwic2VuZFBhZ2VTdGF0ZSIsInN0ZXBzIiwidG90YWxXaWR0aCIsImN1cnJlbnRXaWR0aCIsInN0ZXBMZW5ndGgiLCJjYW5jZWxIYW5kbGVyIiwibW9kYWwiLCJ0eXBlIiwibGVuIiwidG1wcm9ncmVzcyIsImNhbmNlbCIsImNsb3NlSGFuZGxlciIsInN0b3AiLCJ0bXByb2dyZXNzY2FuY2VsIiwidG1wcm9ncmVzc2Nsb3NlIiwicHJvZ3Jlc3MiLCJSZXN0b3JlckJhc2UiLCJmYWlsdXJlUmVwb3J0IiwicmVzdG9yZWQiLCJhcmVhIiwiY2FuY2VsZWQiLCJwcm9jIiwiY2IiLCJyZWMiLCJleHBpcmUiLCJsbCIsInRlbXAiLCJSZXN0b3JlciIsInF1ZXVlIiwiY2FjaGUiLCJwaGFzZSIsInNlbGVjdGlvblRyaWFsIiwiY2h1bmtEdXJhdGlvbiIsIl90aW1lciIsIm9vbSIsImluaXQiLCJub3ciLCJwb3N0cG9uZWQiLCJjb252ZXJ0RGVzY3JpcHRpb24iLCJjcmVhdGVUZW1wT2JqZWN0IiwiY29udmVydGVkQ29uZHMiLCJmaXJzdE5vZGVOYW1lIiwiZmlyc3RQYXJlbnROb2RlTmFtZSIsImZpcnN0VGV4dE5vZGVQb3NpdGlvbiIsImZpcnN0Tm9kZVBvc2l0aW9uIiwiZmlyc3RQYXJlbnROb2RlUG9zaXRpb24iLCJmaXJzdEdyYW1wYU5vZGVQb3NpdGlvbiIsInRyaW1tZWRUZXh0Iiwic3F1ZWV6ZWRUZXh0Iiwic3F1ZWV6ZSIsInRleHRMZW5ndGgiLCJ0cmltbWVkVGV4dExlbmd0aCIsInNxdWVlemVkVGV4dExlbmd0aCIsInBvc3NpYmxlUG9zaXRpb25zIiwicG9zc2libGVFbmRQb3NpdGlvbnMiLCJwb3NzaWJsZVN0YXJ0Tm9kZXMiLCJwb3NzaWJsZUVuZHMiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0cyIsInNvcnRRdWV1ZUJ5SWQiLCJzZXRCb2R5U2VsZWN0aW9uIiwiZ2V0VGV4dFBvc2l0aW9ucyIsInBvc3Rwb25lT3ZlcmxhcHBpbmdzIiwiZmluZFBvc3NpYmxlRXh0cmVtYSIsInJ1bGVPdXRNdWx0aXBsZXMiLCJyZXN0b3JlUmFuZ2VzIiwidGltZXIiLCJyZXBvcnQiLCJyZXMiLCJ0cmltbWVkU2VsZWN0aW9uVGV4dCIsImFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJlbmRQb3NpdGlvbnMiLCJtYXJrVGVtcCIsInJlYXNvbiIsInNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwibWF4UG9zaXRpb24iLCJwb3NpdGlvbnMiLCJwb3MxIiwicG9zMiIsInBvc3Rwb25lIiwiY3V0T3V0Rm9yIiwiYWxyZWFkeUluY2x1ZGVkIiwiYm9keVRleHROb2RlcyIsInNhdGlzZmllZCIsImNoYXJzIiwibmV4dFN0YXJ0Rm91bmQiLCJlbmRpbmdzSW5UaGlzTm9kZSIsIm5vZGVzVGV4dCIsIm5vZGVzVGV4dExlbmd0aCIsImRpZmYiLCJmIiwicSIsInBvc3NpYmxlRm9jdXNPZmZzZXQiLCJzdGFydEZvdW5kRm9yIiwiaGFzRW5kaW5nc0luVGhpc05vZGUiLCJlbmRGb3VuZEZvciIsInNhdGlzZmllc0Rlc2NyaXB0aW9uIiwiZmluZEZvY3VzT2Zmc2V0IiwiZ3JhbmRncmFuZGdyYW1wYSIsIm1hdGNoZXMiLCJmYWlsZWQiLCJzdGFydE5vZGUiLCJzdGFydE5vZGVQb3NpdGlvbiIsInNldE1hdGNoaW5nRW5kIiwiZW5kTm9kZSIsImVuZE5vZGVQb3NpdGlvbiIsImZvY3VzT2Zmc2V0IiwiZGVzY3JpcHRpb24iLCJyZWxldmFudE5vZGVUZXh0IiwibWFya1RleHQiLCJ0ZXh0c01hdGNoIiwibm9kZVRleHQiLCJjb3VudGVyIiwidGVzdCIsImNyZWF0ZVJhbmdlIiwicmVjb2xsZWN0Tm9kZXMiLCJzbGljZSIsImNvbnRleHQiLCJjdXJyZW50Q2hpbGQiLCJJbW11dFJlc3RvcmVyIiwicHJvY2Vzc0luQ2h1bmtzIiwicmVzdG9yZVJhbmdlIiwiZ2V0Tm9kZSIsInRleHROb2RlUG9zaXRpb24iLCJyZXRyeSIsIm9uRmFpbHVyZSIsImdldFJlcG9ydCIsIm1zZyIsInJhbmdlQ291bnQiLCJkZWZpbmVkIiwicmVkdWNlVG9PbmVSYW5nZSIsInJldHJpZXZlVGV4dCIsImFkanVzdCIsInNlbGVjdEFsbENoaWxkcmVuIiwicHJvcHMiLCJpc1NpbXBsZSIsImZvY3VzIiwiaXNCYWNrd2FyZHMiLCJyZXZlcnNlIiwiZmlyc3RUZXh0Tm9kZSIsImxhc3RUZXh0Tm9kZSIsInRyaW1MZWZ0IiwidHJpbVJpZ2h0Iiwid2hvbGVEb2N1bWVudCIsImdldENvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwiZmlsdGVyIiwiaXNTZWxlY3RhYmxlIiwiaXNCbGFuayIsImhhc05vcm1hbFBhcmVudCIsImNvbnRhaW5zTm9kZSIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfVEVYVCIsImFjY2VwdE5vZGUiLCJ0ZW1wUmFuZ2UiLCJwYXJlbnROb2RlcyIsInRleHROb2RlIiwiZmlyc3ROb2RlIiwibGFzdE5vZGUiLCJuZXh0Tm9kZSIsInRyaW1TZWxlY3Rpb24iLCJyZWR1Y2VUb1NlbGVjdGFibGUiLCJjb2xsZWN0UGFyZW50Tm9kZXMiLCJtYXJrV3JhcHBlcnMiLCJuZXdTZWdtZW50IiwicHJldiIsIm5leHQiLCJuZXh0U2libGluZyIsInVuc2hpZnQiLCJhbmNob3JPZmZzZXQiLCJzdWJzdHIiLCJzZWwiLCJyZyIsInNlbGVjdE5vZGUiLCJwYXJlbnRzIiwibm9kZVRleHRzIiwiam9pbiIsIm5vZGUxIiwibm9kZTIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInJhbmdlMCIsImxhc3RSYW5nZSIsInRhZyIsInRvVXBwZXJDYXNlIiwiaXNDaGlsZE9mIiwic2VhcmNoIiwiYXR0YWNoZWQiLCJidXR0b25zIiwic2hvd24iLCJjcmVhdGVCdXR0b25zIiwidXBkYXRlU3RhdGUiLCJzaG91bGRBdHRhY2giLCJyZW5kZXIiLCJidG4iLCJhZGRCdXR0b24iLCJyZW1vdmVCdXR0b24iLCJ1cGRhdGVQb3NpdGlvbiIsInRtdWkiLCJub3Rlc0J1dHRvbiIsImJvb2ttYXJrQnV0dG9uIiwidG9nZ2xlTm90ZXMiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJfUE9SVCIsIk9ORU9GRiIsIk1BWF9MT0dfRU5UUklFUyIsIk5PVEVfQ09MT1JTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJfQ09QWSIsInNyYyIsInZhbCIsInByb3AiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsIl9FUlJPUlRSQUNLRVIiLCJmaWxlIiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsImxpbmVubyIsImNvbG5vIiwidGltZSIsIm9iajEiLCJvYmoyIiwiX0dFVF9BQ1RJVkVfVEFCIiwidGFicyIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsIl9IQVNITEVTUyIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImwxMG5BdHRyIiwiYXR0ciIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsInRvcGljcyIsImFyZ3MiLCJ0b3BpYyIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNhdGNoIiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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QWxCLENBQThCO0FBQUEsZUFBTSxPQUFLeXBCLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0I1UCxFLEVBQUk7QUFBQTs7QUFDekI3ZixjQUFRK3VCLE9BQVIsQ0FBZ0IwQixTQUFoQixDQUEwQnpxQixXQUExQixDQUFzQyxnQkFBUTtBQUM1Q3lwQixhQUFLQyxTQUFMLENBQWUxcEIsV0FBZixDQUEyQixPQUFLd0MsS0FBTCxDQUFXLE1BQVgsRUFBaUIsT0FBS21uQixXQUF0QixDQUEzQjtBQUNBLFNBQUM5UCxFQUFELElBQU9BLElBQVA7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFsRndCN2hCLGUiLCJmaWxlIjoiY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnc2V0QXJlYXMnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGFzaG9wdC1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJzogJ3NldFN5bmNGb3JFbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnOiAncmVuYW1lRW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBpbml0aWFsaXppbmc6IGZhbHNlLFxyXG4gIGFyZWFfc2V0dGluZ3M6ICdzeW5jJyxcclxuICBhcmVhX2hpc3Rvcnk6ICdzeW5jJyxcclxuICBhcmVhX2VudHJ5OiAnc3luYycsXHJcblxyXG4gIGlmcmFtZTogZmFsc2UsXHJcbiAgbmFtZTogdW5kZWZpbmVkLFxyXG4gIGlzTmV3OiB0cnVlLFxyXG4gIC8vZW50cnk6IG51bGwsXHJcbiAgZW50cmllczoge30sXHJcbiAgbG9ja2VkOiBmYWxzZSxcclxuICBoYXNoU2Vuc2l0aXZlOiBmYWxzZSxcclxuICB0bWlkOiAnJyxcclxuICBub3RlQ29sb3I6ICd5ZWxsb3cnLFxyXG4gIGltbXV0OiBmYWxzZSxcclxuICByZWRlc2NyaWJpbmc6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XHJcbiAgfSxcclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5lbnRyaWVzID0ge307XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnRtaWQgPSAnJztcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVN0YXR1cygpIHtcclxuICAgIGlmICghdGhpcy5pc05ldyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10bS1pZF0nKSkgcmV0dXJuOy8vc2hvdyBub3RpZmljYXRpb25cclxuXHJcbiAgICB0aGlzLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgaGlzdG9yeVNldHRpbmdzID0gc2V0dGluZ3MgPyBzZXR0aW5ncy5oaXN0b3J5IDogbnVsbDtcclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gaGlzdG9yeVNldHRpbmdzLm5hbWluZyA9PT0gJ21hcmsnO1xyXG4gICAgICAgIHRoaXMuaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnlTZXR0aW5ncy5pZ25vcmVIYXNoID09PSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0QXJlYXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3RvcmFnZS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN0b3JhZ2Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVuYW1lRW50cnkoZW50cnksIG9sZE5hbWUpIHtcclxuICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5uYW1lID09PSBvbGROYW1lICYmICF0aGlzLmxvY2tlZCkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgICBpZiAodGhpcy5lbnRyaWVzW29sZE5hbWVdKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNldFN5bmNGb3JFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCAmJiB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0pIHtcclxuICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdLnN5bmNlZCA9IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW1vdmVFbnRyeShkZWxldGVkRW50cnkpIHtcclxuICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgaWYgKGVudHJpZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgbmFtZSA9PT0gZGVsZXRlZEVudHJ5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgYWRkRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkKSB0aGlzLm5hbWUgPSBlbnRyaWVzWzBdLm5hbWU7XHJcbiAgICBjb25zdCBlID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBlOyBpKyspIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcclxuICAgIHRoaXMuaW1tdXQgPSAhIWVudHJpZXNbMF0uaW1tdXQ7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0QXJlYXMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gIH0sXHJcbiAgX2dldF9ibWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ibWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3Rlb25jbGljaygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGV0cmFuc3AoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcDtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90bXVpcG9zKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudG11aXBvcztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9hdXRvc2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9pbW11dCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcm9ncmVzc2JhcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnByb2dyZXNzYmFyO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuXHJcbmltcG9ydCBfUEFHRSBmcm9tICcuL21vZHVsZXMvcGFnZSdcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHRtZW51J1xyXG5pbXBvcnQgX01BUktFUiBmcm9tICcuL21vZHVsZXMvbWFya2VyJ1xyXG5pbXBvcnQgX1BST0dSRVNTIGZyb20gJy4vbW9kdWxlcy9wcm9ncmVzcydcclxuaW1wb3J0IF9SRVNUT1JFUiBmcm9tICcuL21vZHVsZXMvcmVzdG9yZXInXHJcbmltcG9ydCBfTk9URVMgZnJvbSAnLi9tb2R1bGVzL25vdGVzJ1xyXG5pbXBvcnQgX1RNVUkgZnJvbSAnLi9tb2R1bGVzL3RtdWknXHJcbmltcG9ydCBfTUFSS0VSUE9QVVAgZnJvbSAnLi9tb2R1bGVzL21hcmtlci1wb3B1cCdcclxuaW1wb3J0IF9BVVRPTUFSS0VSIGZyb20gJy4vbW9kdWxlcy9hdXRvLW1hcmtlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnYXV0b2luaXQnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdwb3dlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBib290c3RyYXBwZWQ6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5oaXN0b3J5ICYmIHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBwb3dlcihvbikge1xyXG4gICAgaWYgKCFvbiB8fCB0aGlzLmJvb3RzdHJhcHBlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIF9QQUdFKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfUFJPR1JFU1MoKTtcclxuICAgIF9SRVNUT1JFUigpO1xyXG4gICAgX01BUktFUigpO1xyXG4gICAgX05PVEVTKCk7XHJcbiAgICBfVE1VSSgpO1xyXG4gICAgX01BUktFUlBPUFVQKCk7XHJcbiAgICBfQVVUT01BUktFUigpO1xyXG5cclxuICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJyxcclxuICAgICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInOiAnc2V0TWFya2VyJ1xyXG4gICAgICB9XHJcblx0XHR9LFxyXG5cclxuICAgIGhhbmRsZXI6IG51bGwsXHJcbiAgICBtYXJrZXI6ICdtJyxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldE1hcmtlcihrZXkpIHtcclxuICAgICAgdGhpcy5tYXJrZXIgPSBrZXk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkICYmICF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghc2VsZWN0ZWQgJiYgdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnRMaXN0ZW5pbmcoKSB7XHJcbiAgICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNldXAuYmluZCh0aGlzKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Nb3VzZXVwKCkge1xyXG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcbiAgICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWVuZCcsIHRoaXMubWFya2VyKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0JPT0tNQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5hbmNob3IgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0KG1hcmspIHtcclxuICAgIG1hcmsgPSBtYXJrIHx8IHRoaXMubWFyaztcclxuXHJcbiAgICBsZXQgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcbiAgICAgICAgYW5jaG9yID0gd3JhcHBlcnNbMF07XHJcblxyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIGFuY2hvci5pZCA9ICd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcic7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG5cclxuICAgIHRoaXMubWFyayA9IG1hcms7XHJcbiAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgbGV0IG1hcmsgPSB0aGlzLm1hcmssXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3IsXHJcbiAgICAgICAgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGg7XHJcblxyXG4gICAgYW5jaG9yLmlkID0gJyc7XHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG4gIHNjcm9sbEludG9WaWV3KGJtKSB7XHJcbiAgICBpZiAoYm0gfHwgKGJtID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpKSlcclxuICAgICAgYm0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAnYWN0aXZhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhY3RpdmF0ZShvbikge1xyXG4gICAgICBpZiAob24gJiYgIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIW9uICYmIHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVnaXN0ZXJIYW5kbGVyKCkge1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpIHtcclxuICAgICAgICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgX1NUT1JFLnRtaWQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHdpbmRvdy5kb2N1bWVudCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IobWFya2VyLCBrZXksIHByZVNldHRpbmdzLCBpbW11dCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiwgZGVmYXVsdHM7XHJcblxyXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XHJcblx0XHRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG1hcmtlci5zZWxlY3Rpb247XHJcbiAgICB0aGlzLmltbXV0ID0gX1NUT1JFLnJlZGVzY3JpYmluZyA/IG1hcmtlci5pc0ltbXV0IDogaW1tdXQ7XHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgYm9va21hcms6IGZhbHNlLFxyXG4gICAgICBjb25kczogbnVsbCxcclxuICAgICAgdGV4dDogc2VsZWN0aW9uLnRleHQsXHJcbiAgICAgIG5vdGU6IG51bGxcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBkIGluIGRlZmF1bHRzKSB7XHJcbiAgICAgIGlmICghcHJlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoZCkpIHtcclxuICAgICAgICBwcmVTZXR0aW5nc1tkXSA9IGRlZmF1bHRzW2RdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVTZXR0aW5ncy5pZCA9IHByZVNldHRpbmdzLmlkIHx8ICsrbWFya2VyLmlkY291bnQ7XHJcblx0XHR0aGlzLmlkID0gcHJlU2V0dGluZ3MuaWQ7XHJcblx0XHR0aGlzLnNpbXBsZSA9IHNlbGVjdGlvbi5zaW1wbGU7XHJcblxyXG5cdFx0bGV0IHJhbmdlID0gdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5yYW5nZTtcclxuXHJcblx0XHR0aGlzLnN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQ7XHJcblx0XHR0aGlzLmVuZE9mZnNldCA9IHJhbmdlLmVuZE9mZnNldDtcclxuXHJcblx0XHR0aGlzLndyYXBwZXJzID0gbnVsbDtcclxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YSA9IHtcclxuXHRcdFx0aWQ6IHByZVNldHRpbmdzLmlkLFxyXG5cdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0c3R5bGU6IHByZVNldHRpbmdzLnN0eWxlLFxyXG5cdFx0XHRjb25kczogcHJlU2V0dGluZ3MuY29uZHMsXHJcblx0XHRcdHRleHQ6IHByZVNldHRpbmdzLnRleHQsXHJcblx0XHRcdGJvb2ttYXJrOiBwcmVTZXR0aW5ncy5ib29rbWFyayxcclxuICAgICAgbm90ZTogcHJlU2V0dGluZ3Mubm90ZSxcclxuICAgICAgc3luY2VkOiBwcmVTZXR0aW5ncy5zeW5jZWRcclxuXHRcdH07XHJcblxyXG4gICAgaWYgKHRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHtcclxuICAgICAgdGhpcy5kZXNjcmliZV9pbW11dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Y3JlYXRlKHJhbmdlKSB7XHJcbiAgICByYW5nZSA9IHJhbmdlIHx8IHRoaXMucmFuZ2U7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgc3R5bGUgPSB0aGlzLmtleURhdGEuc3R5bGUsXHJcbiAgICAgICAgbm9kZXMgPSBzZWxlY3Rpb24ubm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzIHx8IHRoaXMuY3JlYXRlV3JhcHBlcnMoc3R5bGUsIG4pLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIGxhc3RJbmRleCA9IG4gLSAxLFxyXG4gICAgICAgIG5vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICAgIGlmICghaSkgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgdGhpcy5zdGFydE9mZnNldCk7XHJcblxyXG4gICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KVxyXG4gICAgICAgIHJhbmdlLnNldEVuZChub2RlLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgICByYW5nZS5zdXJyb3VuZENvbnRlbnRzKHdyYXBwZXJzW2ldKTtcclxuICAgICAgdGhpcy5jb250YWluZXJzLnB1c2god3JhcHBlcnNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgICBub2RlLnBhcmVudE5vZGUubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbihsYXN0SW5kZXgpO1xyXG5cclxuICAgIGlmICh0aGlzLmtleURhdGEuYm9va21hcmspIHRoaXMubWFya2VyLnNldEJvb2ttYXJrKHRoaXMsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHRoaXMuZGVzY3JpYmUoKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbiAgcmVnaXN0ZXJDbGlja0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIGZvciAobGV0IHdyYXBwZXIgb2Ygd3JhcHBlcnMpIHtcclxuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya2VyLnByb3h5KHRoaXMsIHRoaXMub25DbGljayksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DbGljayhlKSB7XHJcbiAgICBsZXQgZXZlbnQ7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgZXZlbnQgPSAnY2xpY2tlZDptYXJrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZSArICdfMCc7XHJcbiAgICAgIGV2ZW50ID0gJ2FjdGl2YXRlZDptYXJrJztcclxuICAgIH1cclxuICAgIHRoaXMubWFya2VyLmVtaXQoZXZlbnQsIHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIGJvb2ttYXJrOiAhIXRoaXMua2V5RGF0YS5ib29rbWFyayxcclxuICAgICAgbm90ZTogISF0aGlzLmtleURhdGEubm90ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlZmluZVBvc2l0aW9uKG4sIGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgIGxldCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBuID0gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IHdyYXBwZXJzLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBmaXJzdFdyYXBwZXIgPSB3cmFwcGVyc1swXTtcclxuICAgIGNvbnN0IGxhc3RXcmFwcGVyID0gd3JhcHBlcnNbbl07XHJcbiAgICBjb25zdCBmaXJzdFBhcmVudCA9IGZpcnN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgbGFzdFBhcmVudCA9IGxhc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgYW5jaG9yUHJldiwgZm9jdXNQcmV2O1xyXG5cclxuICAgIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGZpcnN0UGFyZW50LCBmaXJzdFdyYXBwZXIsIHRydWUpIC0gMTtcclxuICAgIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQobGFzdFBhcmVudCwgbGFzdFdyYXBwZXIsIHRydWUpO1xyXG5cclxuICAgIGFuY2hvclByZXYgPSBmaXJzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgZm9jdXNQcmV2ID0gbGFzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgIGlmIChhbmNob3JQcmV2ICYmIGFuY2hvclByZXYubm9kZVR5cGUgPT09IDEpIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uICs9IDE7XHJcbiAgICBpZiAoIWZvY3VzUHJldiB8fCBmb2N1c1ByZXYubm9kZVR5cGUgPT09IDMgfHwgZmlyc3RQYXJlbnQgPT09IGxhc3RQYXJlbnQpIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gLT0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IDA7XHJcbiAgICBpZiAodGhpcy5mb2N1c05vZGVQb3NpdGlvbiA8IDApIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSAwO1xyXG5cclxuICAgIGlmIChpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSBhbmNob3JQcmV2ICYmIGFuY2hvclByZXYuZGF0YSA/IGFuY2hvclByZXYuZGF0YS5sZW5ndGggOiAwO1xyXG4gICAgICB0aGlzLmVuZE9mZnNldCA9IHRoaXMuc2ltcGxlID8gdGhpcy5zdGFydE9mZnNldCArIHRoaXMua2V5RGF0YS50ZXh0Lmxlbmd0aCA6IHRoaXMuZW5kT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24odW5kZWZpbmVkLCB0cnVlKVxyXG4gICAgICAgIC5kZXNjcmliZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHR1bmRvKCkge1xyXG5cdFx0bGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcblx0XHRcdFx0d3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzLFxyXG5cdFx0XHRcdHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcblx0XHRcdFx0Y29udGFpbmVyLCB3cmFwcGVyO1xyXG5cclxuXHRcdHdoaWxlICh3LS0pIHtcclxuXHRcdFx0Y29udGFpbmVyID0gY29udGFpbmVyc1t3XTtcclxuXHRcdFx0d3JhcHBlciA9IHdyYXBwZXJzW3ddO1xyXG5cdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XHJcblx0XHRcdGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRyZWRvKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY29udGFpbmVyc1swXS5jaGlsZE5vZGVzW3RoaXMuYW5jaG9yTm9kZVBvc2l0aW9uXSwgdGhpcy5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoY29udGFpbmVyc1tjb250YWluZXJzLmxlbmd0aCAtIDFdLmNoaWxkTm9kZXNbdGhpcy5mb2N1c05vZGVQb3NpdGlvbl0sIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uLmNvbGxlY3ROb2RlcygpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSgpO1xyXG5cdH1cclxuXHR3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGluY2x1ZGluZ1RleHROb2Rlcykge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHRsZXQgY2hpbGRyZW4gPSBpbmNsdWRpbmdUZXh0Tm9kZXMgfHwgY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdFx0XHRjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0XHRcdGkgPSAwO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblx0Y3JlYXRlV3JhcHBlcnMoc3R5bGUsIG51bWJlcikge1xyXG5cdFx0bGV0IHdyYXBwZXJzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgd3JhcHBlcjtcclxuXHJcblx0XHRmb3IgKCA7IGkgPCBudW1iZXI7IGkrKykge1xyXG5cdFx0XHR3cmFwcGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZS5yZXBsYWNlKC87L2csICchaW1wb3J0YW50OycpKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnLCB0aGlzLmlkICsgJ18nICsgaSk7XHJcbiAgICAgIC8vd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NvbnRleHRtZW51JywgJ3RleHRtYXJrZXItY3RtJyk7XHJcblx0XHRcdHdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gd3JhcHBlcnM7XHJcblx0fVxyXG4gIGRlc2NyaWJlKCkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcblx0XHRjb25zdCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xyXG5cdFx0Y29uc3QgZW5kID0gcmFuZ2UuZW5kQ29udGFpbmVyO1xyXG5cdFx0Y29uc3Qgc2luZ2xlTm9kZSA9IHRoaXMuc2ltcGxlO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy53cmFwcGVyc1swXS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgcGFyZW50SXNUTSA9IHBhcmVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuXHRcdGNvbnN0IGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgZ3JhbmRncmFtcGEgPSBncmFtcGEucGFyZW50Tm9kZSB8fCAwO1xyXG5cdFx0Y29uc3QgZlROUCA9IHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuXHRcdFx0bzogdGhpcy5zdGFydE9mZnNldCxcclxuXHRcdFx0bjE6IHBhcmVudElzVE0gPyAnVE0nIDogcGFyZW50Lm5vZGVOYW1lLFxyXG5cdFx0XHRwMTogZlROUCxcclxuXHRcdFx0bjI6IGdyYW1wYS5ub2RlTmFtZSxcclxuXHRcdFx0cDI6IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCksXHJcblx0XHRcdHAzOiBncmFuZGdyYW1wYSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYSwgZ3JhbXBhKSA6IHVuZGVmaW5lZCxcclxuXHRcdFx0cDQ6IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEucGFyZW50Tm9kZSwgZ3JhbmRncmFtcGEpIDogdW5kZWZpbmVkXHJcblx0XHR9O1xyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuXHR9XHJcbiAgZGVzY3JpYmVfaW1tdXQoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBsZXQgc3RhcnQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBlbmQgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChzdGFydCAhPT0gYm9keSkge1xyXG4gICAgICBzdGFydFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKHN0YXJ0LnBhcmVudE5vZGUsIHN0YXJ0KSk7XHJcbiAgICAgIHN0YXJ0ID0gc3RhcnQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHdoaWxlIChlbmQgIT09IGJvZHkpIHtcclxuICAgICAgZW5kUG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoZW5kLnBhcmVudE5vZGUsIGVuZCkpO1xyXG4gICAgICBlbmQgPSBlbmQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgIHA6IHN0YXJ0UG9zaXRpb25cclxuICAgICAgfSxcclxuICAgICAgZToge1xyXG4gICAgICAgIG86IHRoaXMuZW5kT2Zmc2V0LFxyXG4gICAgICAgIHA6IGVuZFBvc2l0aW9uXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuXHJcbiAgICBoYW5kbGVyOiBudWxsLFxyXG4gICAgYXBwZW5kZWQ6IGZhbHNlLFxyXG4gICAgaGVpZ2h0OiAwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdwb3B1cCc7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cCcpO1xyXG4gICAgICBjb25zdCBiZ0NvbG9yUmVnRXhwID0gL2JhY2tncm91bmQtY29sb3I6KCNbYS1mMC05XXs2fSkvO1xyXG4gICAgICBsZXQgYmdDb2xvciwgY29sb3JCdG47XHJcbiAgICAgIGZvciAobGV0IG0gaW4gdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgICAgYmdDb2xvciA9IHRoaXMubWFya2Vyc1ttXS5zdHlsZS5tYXRjaChiZ0NvbG9yUmVnRXhwKTtcclxuICAgICAgICBpZiAoYmdDb2xvcikge1xyXG4gICAgICAgICAgY29sb3JCdG4gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cGNvbG9yJyk7XHJcbiAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChjb2xvckJ0bik7XHJcbiAgICAgICAgICBjb2xvckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gYmdDb2xvci5wb3AoKTtcclxuICAgICAgICAgIGNvbG9yQnRuLmlkID0gJ3RtcG9wdXBjb2xvci0tJyArIG07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvdygpIHtcclxuICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHBvcHVwLnN0eWxlO1xyXG4gICAgICBsZXQgcG9wdXBIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZWRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblBvc2l0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIHN0eWxlLnRvcCA9IHNlbGVjdGlvblBvc2l0aW9uLnRvcCAtIHNlbGVjdGlvblBvc2l0aW9uLmhlaWdodCArIHdpbmRvdy5zY3JvbGxZICsgJ3B4JztcclxuICAgICAgICBzdHlsZS5sZWZ0ID0gc2VsZWN0aW9uUG9zaXRpb24ubGVmdCArIHdpbmRvdy5zY3JvbGxYICsgJ3B4JztcclxuXHJcbiAgICAgICAgcG9wdXBIZWlnaHQgPSBwb3B1cC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIHN0eWxlLnRvcCA9IHBhcnNlSW50KHN0eWxlLnRvcCkgLSBwb3B1cEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0KSAhPT0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApICsgcG9wdXBIZWlnaHQgLSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5oZWlnaHQgPSBwb3B1cEhlaWdodDtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkKSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbk1vdXNlZG93bihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgICAgaWYgKGVsLm5vZGVOYW1lID09PSAnVE1QT1BVUENPTE9SJykge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwb3B1cC1tYXJrZXInLCBlbC5pZC5zcGxpdCgnLS0nKS5wb3AoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSSyBmcm9tICcuL21hcmstaXRlbSdcclxuaW1wb3J0IF9CT09LTUFSSyBmcm9tICcuL2Jvb2ttYXJrJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIC8vIG1hcmtlciBtb2R1bGVcclxuXHRyZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcblx0XHRcdEVOVjoge1xyXG5cdFx0XHRcdCdzZXQ6ZW50cmllcyc6ICd1cGRhdGVJRCcsXHJcblx0XHRcdFx0J3ByZXNzZWQ6bWFya2VyLWtleSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3ByZXNzZWQ6aG90a2V5JzogJ29uSG90a2V5JyxcclxuICAgICAgICAnY2xpY2tlZDpwb3B1cC1tYXJrZXInOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdzZWxlY3Rpb24tZW5kJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAncmVzdG9yZWQ6cmFuZ2UnOiAncmVjcmVhdGUnLFxyXG4gICAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2NhbmNlbGVkOnJlc3RvcmF0aW9uJzogJ29uQ2FuY2VsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2N0eDpiJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgICAnY3R4Oi1iJzogJ3JlbW92ZUJvb2ttYXJrJyxcclxuICAgICAgICAnY3R4OmQnOiAncmVtb3ZlJyxcclxuICAgICAgICAnY3R4Om0nOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdjdHg6bic6ICdhZGROb3RlJyxcclxuICAgICAgICAnY3R4OmMnOiAnY29weScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J2NoYW5nZWQ6bm90ZS1jb2xvcic6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J2NoYW5nZWQ6bm90ZS1wb3MnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAgICdjaGFuZ2VkOm5vdGUtc2l6ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JzogJ3JlbW92ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6Ym9va21hcmsnOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICAgJ3NpZGViYXI6bm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgICAnc2lkZWJhcjppbW11dCc6ICdpbW11dCcsXHJcbiAgICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJzogJ3NhdmUnLFxyXG4gICAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJzogJ3Jlc3VtZScsXHJcbiAgICAgICAgJ3NpZGViYXI6dW5kbyc6ICd1bmRvJyxcclxuICAgICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAgICdzaWRlYmFyOmNvcHknOiAnY29weScsXHJcbiAgICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICAgJ3Njcm9sbC10by1ib29rbWFyayc6ICdzY3JvbGxUb0Jvb2ttYXJrJyxcclxuICAgICAgICAnY2xpY2tlZDptYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgICAnaGFzaGNoYW5nZSc6ICdvbkhhc2hDaGFuZ2UnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzZWxlY3Rpb246IG51bGwsXHJcblx0XHRkb25lOiBbXSxcclxuXHRcdHVuZG9uZTogW10sXHJcblx0XHR2aXN1YWxseU9yZGVyZWRNYXJrczogW10sXHJcblx0XHR2aXN1YWxseU9yZGVyZWRNYXJrSURzOiBbXSxcclxuICAgIGJvb2ttYXJrOiBudWxsLFxyXG4gICAgcmVtb3ZlZEJvb2ttYXJrOiBudWxsLFxyXG5cdFx0aWRjb3VudDogMCxcclxuXHRcdG1hcmtTY3JvbGxQb3M6IC0xLFxyXG5cclxuICAgIHVwZGF0ZUlEKGVudHJpZXMpIHtcclxuICAgICAgY29uc3QgbCA9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgICBjb25zdCBpZHMgPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGw7IGkrKykge1xyXG5cclxuICAgICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcblxyXG4gICAgICAgIGlmICghbG9ja2VkICYmIGVudHJ5LmlkY291bnQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmlkY291bnQgPSBlbnRyeS5pZGNvdW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgbWFya3MgPSAoZW50cnkubWFya3MgfHwgW10pLmNvbmNhdChlbnRyeS5sb3N0IHx8IFtdKSxcclxuICAgICAgICAgICAgICBkID0gbWFya3MubGVuZ3RoO1xyXG5cclxuICAgICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChkLS0pIHtcclxuICAgICAgICAgICAgICBpZHMucHVzaChtYXJrc1tkXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pZGNvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaWRzKTtcclxuICAgIH0sXHJcblx0XHRtYXJrKGtleSwgZGF0YSwgaW1tdXQpIHtcclxuXHRcdFx0dGhpcy51bmRvbmUubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgIGNvbnN0IG1hcmsgPSBuZXcgX01BUksodGhpcywga2V5LCBkYXRhLCBpbW11dCkuY3JlYXRlKCk7XHJcblxyXG4gICAgICBpZiAoZGF0YS5hdXRvbm90ZSkgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIG1hcmssIGRhdGEuYXV0b25vdGUpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG1hcms7XHJcblx0XHR9LFxyXG5cdFx0dW5kbyhub0F1dG9zYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0XHRsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuXHJcblx0XHRcdGlmIChkb25lLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmUucG9wKCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgICB0aGlzLnVuZG9uZS5wdXNoKG1hcmsudW5kbygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9va21hcmspIHRoaXMudW5kb0Jvb2ttYXJrKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdH0sXHJcblx0XHRyZWRvKG5vQXV0b3NhdmUpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCB1bmRvbmUgPSB0aGlzLnVuZG9uZTtcclxuXHJcblx0XHRcdGlmICh1bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgbWFyayA9IHRoaXMudW5kb25lLnBvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLmRvbmUucHVzaChtYXJrLnJlZG8oKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIFttYXJrXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vQXV0b3NhdmUgfHwgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0fSxcclxuICAgIGN1dE91dChpKSB7XHJcbiAgICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICAgIHRvQmVSZW1vdmVkID0gW2ldLFxyXG4gICAgICAgICAgaW5kaWNlcyA9IFtpXSxcclxuICAgICAgICAgIG1hcmssIHNtYWxsZXN0SUQ7XHJcblxyXG4gICAgICBmdW5jdGlvbiBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhqKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeCA9IGogKyAxOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICBtYXJrID0gZG9uZVt4XTtcclxuXHJcbiAgICAgICAgICBpZiAobWFya2VyLm1hcmtzSW50ZXJzZWN0KGRvbmVbal0sIG1hcmspKSB7XHJcbiAgICAgICAgICAgIGlmICghdG9CZVJlbW92ZWQuaW5jbHVkZXMoeCkpIHRvQmVSZW1vdmVkLnB1c2goeCk7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kaWNlcy5zb3J0KCk7XHJcbiAgICAgICAgdG9CZVJlbW92ZWQuc29ydCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xyXG4gICAgICAgIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGluZGljZXMuc2hpZnQoKSk7XHJcbiAgICAgIH1cclxuICAgICAgc21hbGxlc3RJRCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHRvQmVSZW1vdmVkKTtcclxuXHJcbiAgICAgIHdoaWxlICh0b0JlUmVtb3ZlZC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmRvbmUuc3BsaWNlKHRvQmVSZW1vdmVkLnBvcCgpLCAxKVswXS51bmRvKCk7XHJcbiAgICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzbWFsbGVzdElEO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWQgPSBpZCA/IGlkIDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuICAgICAgaWYgKCFpZCkgcmV0dXJuIHRoaXMudW5kbygpO1xyXG5cclxuICAgICAgbGV0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQuc3BsaXQoJ18nKVswXSksXHJcbiAgICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgICAgbCA9IGRvbmUubGVuZ3RoLFxyXG4gICAgICAgICAgcG9zaXRpb24gPSBkb25lLmluZGV4T2YobWFyayksXHJcbiAgICAgICAgICBzbWFsbGVzdElELCBpO1xyXG5cclxuICAgICAgaWYgKHBvc2l0aW9uID09PSBsIC0gMSkge1xyXG4gICAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMudW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaSA9IHRoaXMudW5kb25lLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAodGhpcy51bmRvbmUubGVuZ3RoKSB0aGlzLnJlZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChpLS0pIHRoaXMudW5kbyh0cnVlKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWRbMF0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZShhcmcsIG9wdGlvbnMpIHtcclxuICAgICAgX1NUT1JFLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyB3aGlsZSAodGhpcy5kb25lLmxlbmd0aCkge1xyXG4gICAgICAvLyAgIHRoaXMudW5kbyh0cnVlKTtcclxuICAgICAgLy8gfVxyXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpXHJcbiAgICAgICAgLmZvckVhY2goaGlnaGxpZ2h0ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhpZ2hsaWdodC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShoaWdobGlnaHQudGV4dENvbnRlbnQpLCBoaWdobGlnaHQpO1xyXG4gICAgICAgICAgY29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5kb25lID0gW107XHJcbiAgICAgIHRoaXMudW5kb25lID0gW107XHJcbiAgICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBbXTtcclxuICAgICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gW107XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IG51bGw7XHJcbiAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IC0xO1xyXG5cclxuICAgICAgY29uc3QgZW50cnkgPSAhYXJnICYmIF9TVE9SRS5uYW1lICYmIF9TVE9SRS5lbnRyaWVzW19TVE9SRS5uYW1lXSA/IF9TVE9SRS5lbnRyaWVzW19TVE9SRS5uYW1lXSA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ3Jlc3VtZWQ6bWFya2VycycsIGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBpbW11dChpbW11dGFibGUpIHtcclxuICAgICAgdGhpcy5pc0ltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gdHJ1ZTtcclxuICAgICAgX1NUT1JFLmltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgfSxcclxuICAgIHNhdmUoKSB7XHJcbiAgICAgIGlmIChfU1RPUkUuZGlzYWJsZWQpIHJldHVybiB0aGlzLmVtaXQoJ2NhbmNlbGVkOnNhdmUtYWZ0ZXItY2FuY2VsZWQtcmVzdG9yYXRpb24nKTtcclxuXHJcbiAgICAgIGNvbnN0IGlmcmFtZSA9IF9TVE9SRS5pZnJhbWU7XHJcbiAgICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB7XHJcbiAgICAgICAgaWYgKF9TVE9SRS5pc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICAgIGlmICghbG9ja2VkICYmIG5hbWluZyA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KCduYW1lOmVudHJ5PycpLnRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGlmcmFtZSA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgX1NUT1JFLm5hbWUgPSB3aW5kb3cucHJvbXB0KGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlJywgc3ViKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX1NUT1JFLm5hbWUpIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb25maXJtZWQgPSB0cnVlO1xyXG5cdCAgICAgICAgICBpZiAoaWZyYW1lKSBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSk7XHJcblx0ICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG5cdCAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cdFx0fSxcclxuICAgIGF1dG9zYXZlKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICAgIGlmIChhdXRvc2F2ZSkgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3Vuc2F2ZWQtY2hhbmdlcycpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb3B5KCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5maW5kTWFyaygpO1xyXG4gICAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuICAgICAgY29uc3QgcmFuZ2UgPSBtYXJrLnJhbmdlO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBtYXJrLnNlbGVjdGlvbi5zZWxmO1xyXG4gICAgICBjb25zdCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnM7XHJcblxyXG4gICAgICByYW5nZS5zZXRTdGFydCh3cmFwcGVyc1swXSwgMCk7XHJcbiAgICAgIHJhbmdlLnNldEVuZCh3cmFwcGVyc1t3cmFwcGVycy5sZW5ndGggLSAxXSwgMSk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblx0XHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGlvbi50b1N0cmluZygpLnRyaW0oKS5yZXBsYWNlKC8oXFxyXFxuKXsxLH0vZywgJ1xcclxcbicpKTtcclxuICAgICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gICAgfSxcclxuICAgIHN0b3JlKG1hcmssIHNhdmUsIG9yZGVyKSB7XHJcblx0XHRcdHRoaXMuZG9uZS5wdXNoKG1hcmspO1xyXG4gICAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdFx0aWYgKG9yZGVyKSB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cdFx0fSxcclxuICAgIHJlY3JlYXRlKG1hcmspIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihudWxsLCB7IHByb2dyYW1tYXRpY2FsbHk6IHRydWUgfSk7XHJcbiAgICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKG1hcmsua2V5LCBtYXJrKSwgZmFsc2UsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICghdGhpcy5kb25lLmxlbmd0aCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lW3RoaXMuZG9uZS5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAoX1NUT1JFLm5hbWUgPT09IG1hcmsua2V5RGF0YS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpKSB7XHJcbiAgICAgICAgICB0aGlzLmdvdG9NYXJrKG1hcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUucmVkZXNjcmliaW5nKSB7XHJcbiAgICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DYW5jZWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBfU1RPUkUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGFkZE5vdGUoaWQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICAgIH0sXHJcbiAgICBzYXZlTm90ZShpZCkge1xyXG4gICAgICBpZiAoIV9TVE9SRS5sb2NrZWQpIHJldHVybiB0aGlzLmF1dG9zYXZlKCk7XHJcblxyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkKS5rZXlEYXRhO1xyXG4gICAgICBjb25zdCBzeW5jZWQgPSB0eXBlb2YgbWFyay5zeW5jZWQgPT09ICdib29sZWFuJyA/IG1hcmsuc3luY2VkIDogX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG5cclxuICAgICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgICAgbWFya3M6IFttYXJrXSxcclxuICAgICAgICBuYW1lOiBtYXJrLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSksXHJcbiAgICAgICAgc3luY2VkXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBnb3RvTWFyayhtYXJrKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtFbGVtZW50cyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3M7XHJcbiAgICAgIGxldCBlbCwgcG9zLCBpZDtcclxuICAgICAgaWYgKG1hcmsgfHwgbWFyayA9PT0gMCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IG1hcmsgKyAxO1xyXG4gICAgICAgICAgZWwgPSBtYXJrRWxlbWVudHNbbWFya107XHJcbiAgICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlkID0gbWFyay5pZDtcclxuICAgICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQ9XCInICsgaWQgKyAnXzBcIl0nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5tYXJrU2Nyb2xsUG9zO1xyXG4gICAgICAgIGVsID0gbWFya0VsZW1lbnRzW3Bvc107XHJcbiAgICAgICAgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKS5zcGxpdCgnXycpWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG5cclxuXHRcdFx0aWYgKCFtYXJrIHx8IHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykgdGhpcy5nZXRCeUlkKGlkKS5vbkNsaWNrKGlkKTtcclxuICAgICAgdGhpcy5pbmRpY2F0ZU1hcmsoaWQpO1xyXG4gICAgfSxcclxuXHRcdGdvdG9OZXh0TWFyayhkaXIpIHtcclxuXHRcdFx0Y29uc3QgbCA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubGVuZ3RoO1xyXG5cclxuXHRcdFx0dGhpcy5tYXJrU2Nyb2xsUG9zICs9IGRpcjtcclxuXHJcblx0XHRcdGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPCAwKSB0aGlzLm1hcmtTY3JvbGxQb3MgPSBsIC0gMTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5tYXJrU2Nyb2xsUG9zID49IGwpIHRoaXMubWFya1Njcm9sbFBvcyA9IDA7XHJcblxyXG5cdFx0XHR0aGlzLmdvdG9NYXJrKCk7XHJcblx0XHR9LFxyXG4gICAgaW5kaWNhdGVNYXJrKGlkKSB7XHJcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSlcclxuICAgICAgICAuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgICAgY29uc3QgdG1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZF49XCInICsgaWQgKyAnX1wiXScpKTtcclxuXHJcbiAgICAgIHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpLCAyMDAwKTtcclxuICAgIH0sXHJcbiAgICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrLFxyXG4gICAgICAgICAgbWFyayA9IHRoaXMuZmluZE1hcmsobSk7XHJcblxyXG4gICAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChib29rbWFyaykge1xyXG4gICAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbmV3IF9CT09LTUFSSygpLnNldChtYXJrKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6Ym9va21hcmsnKTtcclxuICAgICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb0Jvb2ttYXJrKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgICAgaWYgKCFib29rbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IGJvb2ttYXJrO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgICBpZiAoYm9va21hcmspIGJvb2ttYXJrLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0QnlJZChpZCwgcG9zKSB7XHJcblx0XHRcdGxldCBkb25lID0gdGhpcy5kb25lLFxyXG5cdFx0XHRcdCAgZCA9IGRvbmUubGVuZ3RoLFxyXG5cdFx0XHRcdCAgbWFyaztcclxuXHJcblx0XHRcdHdoaWxlIChkLS0pIHtcclxuXHRcdFx0XHRtYXJrID0gZG9uZVtkXTtcclxuXHJcblx0XHRcdFx0aWYgKG1hcmsua2V5RGF0YS5pZCA9PSBpZClcclxuXHRcdFx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG1hcmssIHBvc2l0aW9uOiBkIH0gOiBtYXJrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG51bGwsIHBvc2l0aW9uOiBudWxsIH0gOiBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRmaW5kTWFyayh4KSB7XHJcblx0XHRcdHggPSB4ID8geCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcblx0XHRcdGxldCBtYXJrID0gIXggP1xyXG5cdFx0XHRcdHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV0gOlxyXG5cdFx0XHRcdFx0dHlwZW9mIHggPT09ICdzdHJpbmcnID9cclxuXHRcdFx0XHR0aGlzLmdldEJ5SWQoeC5zcGxpdCgnXycpWzBdKSA6XHJcblx0XHRcdFx0eDtcclxuXHRcdFx0cmV0dXJuIG1hcms7XHJcblx0XHR9LFxyXG4gICAgc29ydEJ5SWQoKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5zb3J0KChtYXJrMSwgbWFyazIpID0+IG1hcmsxLmlkIC0gbWFyazIuaWQpO1xyXG4gICAgfSxcclxuXHRcdG9yZGVyTWFya3NWaXN1YWxseSgpIHtcclxuXHRcdFx0dGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQkPVwiXzBcIl0nKSkuc29ydCgobTEsIG0yKSA9PiB7XHJcblx0XHRcdFx0bGV0IGJiMSA9IG0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0XHRiYjIgPSBtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdFx0dG9wMSA9IGJiMS50b3AsXHJcblx0XHRcdFx0XHRcdHRvcDIgPSBiYjIudG9wO1xyXG5cclxuXHRcdFx0XHRpZiAodG9wMSA8IHRvcDIpIHJldHVybiAtMTtcclxuXHRcdFx0XHRlbHNlIGlmICh0b3AyIDwgdG9wMSkgcmV0dXJuIDE7XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoYmIxLmxlZnQgPCBiYjIubGVmdCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuICAgICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5tYXAobWFyayA9PiBwYXJzZUludChtYXJrLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSk7XHJcbiAgICAgIHRoaXMuZW1pdCgndmlzdWFsbHktb3JkZXJlZDptYXJrcycsIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyk7XHJcblx0XHR9LFxyXG4gICAgbWFya3NJbnRlcnNlY3QobWFyazEsIG1hcmsyKSB7XHJcblx0XHRcdGxldCB3cmFwcGVyczEgPSBtYXJrMS53cmFwcGVycyxcclxuICAgICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICAgIGlkMSA9IG1hcmsxLmlkLFxyXG4gICAgICAgICAgd3JhcHBlcnMyID0gbWFyazIud3JhcHBlcnMsXHJcbiAgICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICAgIHcyLCB0bXMsIGw7XHJcblxyXG4gICAgICB3aGlsZSAodzEtLSkge1xyXG4gICAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodzItLSkge1xyXG4gICAgICAgICAgdG1zID0gd3JhcHBlcnMxW3cxXS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF0nKTtcclxuICAgICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZiAodG1zW2xdLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpWzBdID09IGlkMilcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fSxcclxuICAgIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0XHRsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTigpO1xyXG5cclxuXHRcdFx0aWYgKCFzZWxlY3Rpb24ubm9kZXMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykga2V5ID0gZTtcclxuXHRcdFx0XHRlbHNlIHRoaXMucHJldmVudERlZmF1bHQoZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0a2V5ID0ga2V5IHx8ICdtJztcclxuXHRcdFx0fVxyXG5cclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoX1NUT1JFLmlzTmV3KSB7XHJcbiAgICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiAhIXNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IF9TVE9SRS5pbW11dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgICB9KTtcclxuXHRcdH0sXHJcbiAgICBvbkhvdGtleShrZXkpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgICBjYXNlICd5Jzogc2VsZi5yZWRvKCk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOiBzZWxmLnNhdmUoKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnYXJyb3d1cCc6IHNlbGYuZ290b05leHRNYXJrKC0xKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnYXJyb3dkb3duJzogc2VsZi5nb3RvTmV4dE1hcmsoMSk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgICBjYXNlICdjJzogc2VsZi5jb3B5KCk7IGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJldmVudERlZmF1bHQoZSkge1xyXG5cdFx0XHRpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0KSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0cmV0cmlldmVFbnRyeSgpIHtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgICAgY29uc3QgaXNOZXcgPSBfU1RPUkUuaXNOZXc7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBfU1RPUkUubmFtZTtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgICBlbnRyeS5tYXJrcyA9IHRoaXMuY29sbGVjdE1hcmtzKCk7XHJcblx0XHRcdGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgICAgZW50cnkudGl0bGUgPSB3aW5kb3cuZG9jdW1lbnQudGl0bGU7XHJcblx0XHRcdGVudHJ5LmNvdW50ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG5cdFx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgICBlbnRyeS5pbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IGVudHJ5LmltbXV0O1xyXG5cclxuICAgICAgaWYgKGlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgICBlbnRyeS51cmwgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZSA/IHdpbmRvdy5kb2N1bWVudC5VUkwgOiBfSEFTSExFU1Mod2luZG93LmRvY3VtZW50LlVSTCk7XHJcbiAgICAgICAgZW50cnkuc3luY2VkID0gX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgICBlbnRyeS5oYXNoU2Vuc2l0aXZlID0gX1NUT1JFLmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICAgIGVudHJ5Lm1hcmtzWzBdLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkgOlxyXG4gICAgICAgIGlzTmV3ID8gbmFtZSA6IGVudHJ5Lm5hbWU7XHJcblxyXG5cdFx0XHRyZXR1cm4gZW50cnk7XHJcblx0XHR9LFxyXG4gICAgY29sbGVjdE1hcmtzKCkge1xyXG4gICAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgICAgbGV0IGwgPSBkb25lLmxlbmd0aDtcclxuICAgICAgY29uc3QgbWFya3MgPSBbXTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgICAgZG9uZSA9IFtkb25lW2wtMV1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGxldCBtID0gMCwga0Q7IG0gPCBsOyBtKyspIHtcclxuXHRcdFx0XHRrRCA9IGRvbmVbbV0ua2V5RGF0YTtcclxuICAgICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRcdG1hcmtzLnB1c2goa0QpO1xyXG5cdFx0XHR9XHJcbiAgICAgIHJldHVybiBtYXJrcztcclxuICAgIH0sXHJcbiAgICBvbkhhc2hDaGFuZ2UoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3VtZWQtb24taGFzaGNoYW5nZScpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXJrLCBjb2xvcikge1xyXG5cclxuICBjb25zdCBCT0RZID0gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhZGRNYXJrTGlzdGVuZXJzJyxcclxuICAgICAgICAnZHJhZzpub3RlJzogJ29uRHJhZycsXHJcbiAgICAgICAgJ2RyYWdzdG9wOm5vdGUnOiAnb25EcmFnRW5kJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdfZGVsZXRlJyxcclxuICAgICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICdoaWRlJyxcclxuICAgICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2JyaW5nVXBGcm9udCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYXR0ZW1wdFVwZGF0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoc3RhcnQ6IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBlbDogbnVsbCxcclxuICAgIG1hcmssXHJcbiAgICBjb2xvcjogY29sb3IgfHwgJycsXHJcbiAgICBtYXJrQ2xpY2tIYW5kbGVyOiBudWxsLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIHJlY2VudGx5VXBkYXRlZDogZmFsc2UsXHJcbiAgICBzZXR0aW5nc01vZGU6IGZhbHNlLFxyXG4gICAgcG9zOiB7IGw6IG51bGwsIHQ6IG51bGwgfSxcclxuICAgIHNpemU6IHsgdzogbnVsbCwgaDogbnVsbCB9LFxyXG4gICAgZHJhZ0RYOiAwLFxyXG4gICAgZHJhZ0RZOiAwLFxyXG4gICAgbXV0YXRpb25PYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGp1c3ROb3RlRGF0YU9iamVjdCgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZU5vdGVFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWRkTWFya0xpc3RlbmVycygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGp1c3ROb3RlRGF0YU9iamVjdCgpIHtcclxuICAgICAgY29uc3Qgbm90ZURhdGEgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlO1xyXG4gICAgICBpZiAodHlwZW9mIG5vdGVEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCAneWVsbG93JyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFub3RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBub3RlRGF0YS5wb3MgfHwgdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbm90ZURhdGEuc2l6ZSB8fCB0aGlzLnNpemU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVOb3RlRWxlbWVudCgpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGUnKTtcclxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVoZWFkZXInKTtcclxuICAgICAgY29uc3QgZGVsID0gdGhpcy5kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVkZWxldGUnKTtcclxuICAgICAgY29uc3QgbWluID0gdGhpcy5taW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVtaW5pbWl6ZScpO1xyXG4gICAgICBjb25zdCBnZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY3VzdG9taXplJyk7XHJcbiAgICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLnBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVwYWxldHRlJyk7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dDtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yO1xyXG4gICAgICBfU1RPUkUubm90ZUNvbG9yID0gY29sb3I7XHJcbiAgICAgIGNvbnN0IGRlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICAgIGNvbnN0IG1pblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjAxMykpO1xyXG4gICAgICBjb25zdCBnZWFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNjk5KSk7XHJcblxyXG4gICAgICBbJ2dyZWVuJywgJ3doaXRlJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJywgJ3B1cnBsZScsICdibHVlJywgJ3R1cnF1b2lzZSddLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY29sb3InKTtcclxuICAgICAgICBjb2xvci5jbGFzc05hbWUgPSAndG1ub3RlY29sb3ItLScgKyBjO1xyXG4gICAgICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicsIGMpO1xyXG4gICAgICAgIHBhbGV0dGUuYXBwZW5kQ2hpbGQoY29sb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHAuc2V0QXR0cmlidXRlKCdkYXRhLXRtLW5vdGUnLCB0cnVlKTtcclxuICAgICAgZGVsLmFwcGVuZENoaWxkKGRlbFRleHQpO1xyXG4gICAgICBtaW4uYXBwZW5kQ2hpbGQobWluVGV4dCk7XHJcbiAgICAgIGdlYXIuYXBwZW5kQ2hpbGQoZ2VhclRleHQpO1xyXG4gICAgICBub3RlLmFwcGVuZChoZWFkZXIpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAncmVtb3ZlTm90ZVN0b3JhZ2UnLFxyXG4gICAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3RvZ2dsZTpub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlVHJhbnNwJyxcclxuICAgICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGVzOiB7fSxcclxuICAgIHRvZ2dsZTogbnVsbCxcclxuICAgIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gICAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNwKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgICB9LFxyXG4gICAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUFsbCgpIHtcclxuICAgICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGU7XHJcbiAgICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVHJhbnNwKCkge1xyXG4gICAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgICAgX1NUT1JFLmdldCgnbm90ZXRyYW5zcCcpLnRoZW4odHJhbnNwID0+IHtcclxuICAgICAgICBpZiAodHJhbnNwKSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNFbXB0eShvYmopIHtcclxuICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlciA9IChlKSA9PiB0aGlzLmVtaXREcmFnRXZlbnQobm90ZSwgZSk7XHJcbiAgICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gICAgfSxcclxuICAgIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzpub3RlJywgbm90ZSwgZSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgICB0aGlzLmVtaXQoJ25vdGVzLXN0YXRlJywgIXRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSwgaW5mbyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc3RhcnRlZDphcHAnOiAnY2hlY2tVUkwnLFxyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlJyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZFBhZ2VTdGF0ZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnb25VcmxDaGFuZ2UnLFxyXG4gICAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAnc2V0dXAnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGtleWRvd246IHtcclxuICAgICAgICAgICcqJzogJ2RlbGVnYXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgICAnKic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXJsOiAnJyxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIHNldDogZmFsc2UsXHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICByZXRyeUFjdGl2ZTogZmFsc2UsXHJcbiAgICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICAgIHJlZ2lzdGVyZWRMb2FkSGFuZGxlcjogZmFsc2UsXHJcbiAgICBrZXlDb2RlTWFwOiB7XHJcbiAgICAgICcxMyc6ICdFbnRlcicsXHJcbiAgICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICAgJzE3MSc6ICcrJywgJzE3Myc6ICctJ1xyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwb3dlcihvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZSA9IG9uO1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ21vZGUnKS50aGVuKGFjdGl2ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldCB8fCAhYWN0aXZlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50LndpbmRvdy5kb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnICYmICF0aGlzLnJlZ2lzdGVyZWRMb2FkSGFuZGxlcikge1xyXG4gICAgICAgICAgdGhpcy5yZWdpc3RlcmVkTG9hZEhhbmRsZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5zZXR1cCgpLCB3aW5kb3cucGFyZW50LndpbmRvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfU1RPUkUuaWZyYW1lID0gdGhpcy5pc0lGcmFtZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5kb2N1bWVudC5VUkw7XHJcbiAgICAgICAgdGhpcy5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyh0aGlzLnVybCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tVUkwoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzSUZyYW1lKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIH0sXHJcbiAgICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBlbC50YWdOYW1lO1xyXG5cclxuICAgICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlKGUpIHtcclxuICAgICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgICBtb2RLZXkgPSAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5KSxcclxuICAgICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgICAgZnVuY3Rpb25LZXlzID0gbG9ja2VkQWN0aW9ucy5jb25jYXQoYXJyb3dLZXlzKS5jb25jYXQoJ2MnKSxcclxuICAgICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNoaWZ0U2Vuc2l0aXZlS2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkga2V5ID0gdGhpcy5rZXlDb2RlTWFwW2tleUNvZGVdO1xyXG5cclxuICAgICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICAgIGNvbnN0IGlzQ3VzdG9tTWFya2VyS2V5ID0gaXNNYXJrZXJLZXkgJiYgIWRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKGtleSk7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5nKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9va3VwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHJlc3NlZDptYXJrZXIta2V5JywgZSwgb3JpZ0tleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghc2V0dGluZ1sxXSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgICAgY29uc3QgczIgPSBzaG9ydGN1dFsxXTtcclxuXHJcbiAgICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMubG9va3VwKCk7XHJcblxyXG4gICAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdwcmVzc2VkOmhvdGtleScsIGtleSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvb2t1cCgpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRUZXh0KSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgc2VsZWN0ZWRUZXh0KTtcclxuICAgIH0sXHJcbiAgICBjaGVja1VSTCgpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0KCdjaGVjazp1cmwnLCB0aGlzLnVybClcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhKSB0aGlzLm9uVXJsRm91bmQodGhpcy5maWx0ZXJFbnRyaWVzKGRhdGEuZW50cmllcyksIGRhdGEucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVudHJpZXMsIGZvcmNlKSB7XHJcbiAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGVudHJpZXMpID8gZW50cmllcyA6IFtlbnRyaWVzXTtcclxuICAgICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gdGhpcy5oYXNobGVzc1VSTCA6IHRoaXMudXJsO1xyXG5cclxuICAgICAgaWYgKGZvcmNlIHx8IGZpcnN0RW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgICBfU1RPUkUuYWRkRW50cmllcyhlbnRyaWVzKTtcclxuICAgICAgICAvL19TVE9SRS5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICAgIGlmIChmb3JjZSkgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICd3JykgdGhpcy5sb29rdXAoKTtcclxuICAgIH0sXHJcbiAgICBvblVybEZvdW5kKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGUoZW50cmllcywgdHJ1ZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmUgJiYgIXRoaXMuaW5pdGlhbGl6ZWQgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChyZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgICAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IHRoaXMuaGFzaGxlc3NVUkwgOiB0aGlzLnVybDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm1hcmtzJywgZW50cmllcyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaWx0ZXJFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgICAgbGV0IGxvY2tlZEVudHJpZXMgPSBbXSxcclxuICAgICAgICAgIGwgPSBlbnRyaWVzLmxlbmd0aCxcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXNFeGlzdCA9IGZhbHNlLFxyXG4gICAgICAgICAgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBsb2NrZWRFbnRyaWVzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG9ja2VkRW50cmllc0V4aXN0ICYmIG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobG9ja2VkRW50cmllcy5sZW5ndGgpIHtcclxuICAgICAgICBfU1RPUkUubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcy5zb3J0KChhLCBiKSA9PiAobmV3IERhdGUoYS5sYXN0KSkgLSAobmV3IERhdGUoYi5sYXN0KSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9TVE9SRS5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGVudHJpZXM7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6c2VsZWN0aW9uJywgIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCk7XHJcbiAgICB9LFxyXG4gICAgb25VcmxDaGFuZ2UodGFiLCBuZXdVcmwpIHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfU1RPUkUuZW50cmllc1tPYmplY3Qua2V5cyhfU1RPUkUuZW50cmllcylbMF1dO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICFfU1RPUkUuaXNOZXcgJiZcclxuICAgICAgICBlbnRyeSAmJlxyXG4gICAgICAgIGVudHJ5Lmhhc2hTZW5zaXRpdmUgJiZcclxuICAgICAgICBfSEFTSExFU1MobmV3VXJsKSA9PT0gdGhpcy5oYXNobGVzc1VSTCAmJlxyXG4gICAgICAgIG5ld1VybCAhPT0gdGhpcy51cmxcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdoYXNoY2hhbmdlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgICB0aGlzLnJldHJ5QWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICAgIHRoaXMucmV0cnlBY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdlLXN0YXRlJywge1xyXG4gICAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgICByZXRyeUFjdGl2ZTogdGhpcy5yZXRyeUFjdGl2ZVxyXG4gICAgICB9LCBpbmZvKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nOiAnc3RhcnQnLFxyXG4gICAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdwcm9ncmVzcycsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ3Byb2dyZXNzJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnc3RvcCcsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhY3RpdmF0ZSdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgc3RlcHM6IDAsXHJcbiAgICB0b3RhbFdpZHRoOiA0MTMsXHJcbiAgICBjdXJyZW50V2lkdGg6IDAsXHJcbiAgICBzdGVwTGVuZ3RoOiAwLFxyXG4gICAgY2FuY2VsSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcHJvZ3Jlc3Ntb2RhbCcpO1xyXG5cclxuICAgICAgW3tcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2hlYWRlcicsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Jlc3RvcmluZycpXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2Nsb3NlJyxcclxuICAgICAgICB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3NiYXInLFxyXG4gICAgICAgIGNoaWxkOiB7XHJcbiAgICAgICAgICB0eXBlOiAndG1wcm9ncmVzcydcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2NhbmNlbCcsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2NhbmNlbCcpXHJcbiAgICAgIH1dXHJcbiAgICAgICAgLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xyXG4gICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgdGhpc1tvYmoudHlwZV0gPSBlbDtcclxuICAgICAgICAgIGlmIChvYmoudGV4dCkgZWwudGV4dENvbnRlbnQgPSBvYmoudGV4dDtcclxuICAgICAgICAgIGlmIChvYmouY2hpbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmouY2hpbGQudHlwZSk7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgdGhpc1tvYmouY2hpbGQudHlwZV0gPSBjaGlsZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzdW1lKGxlbikge1xyXG4gICAgICB0aGlzLnN0ZXBzID0gbGVuO1xyXG4gICAgICB0aGlzLnN0ZXBMZW5ndGggPSB0aGlzLnRvdGFsV2lkdGggLyBsZW47XHJcbiAgICAgIHRoaXMuY3VycmVudFdpZHRoID0gMDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gMDtcclxuICAgIH0sXHJcbiAgICBzdGFydChsZW4pIHtcclxuICAgICAgaWYgKCFsZW4gfHwgIXRoaXMuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgIHRoaXMucmVzdW1lKGxlbik7XHJcbiAgICAgIGNvbnN0IGNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpO1xyXG4gICAgICBjb25zdCBjbG9zZUhhbmRsZXIgPSB0aGlzLmNsb3NlSGFuZGxlciA9IHRoaXMuc3RvcC5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnRtcHJvZ3Jlc3NjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHByb2dyZXNzKCkge1xyXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY3VycmVudFdpZHRoICs9IHRoaXMuc3RlcExlbmd0aDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgfSxcclxuICAgIHN0b3AoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoKGUpIHt9XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjYW5jZWxlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgncHJvZ3Jlc3NiYXInKS50aGVuKHByb2dyZXNzYmFyID0+IHRoaXMuYWN0aXZlID0gcHJvZ3Jlc3NiYXIpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5vbignY2FuY2VsZWQ6cmVzdG9yYXRpb24nLCAoKSA9PiB0aGlzLmNhbmNlbGVkID0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW5DaHVua3MoZGF0YSwgcHJvYywgY2IpIHtcclxuICAgIHByb2MgPSBwcm9jLmJpbmQodGhpcyk7XHJcbiAgICBjYiA9IGNiLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIHJlYygpIHtcclxuXHRcdFx0bGV0IGV4cGlyZSA9ICtuZXcgRGF0ZSgpICsgNTAwO1xyXG5cclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdHRyeSB7XHJcbiAgICAgICAgICBwcm9jKGRhdGEuc2hpZnQoKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHR9IHdoaWxlIChkYXRhLmxlbmd0aCA+IDAgJiYgZXhwaXJlID4gK25ldyBEYXRlKCkpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDApO1xyXG5cdFx0XHRlbHNlIGNiKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuICByZXBvcnQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdsb3N0Om1hcmtzJywgdGhpcy5mYWlsdXJlUmVwb3J0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmVudHJ5Lm5hbWUsIHRoaXMucmVzdG9yZWQsIHRoaXMubG9zdCwgdGhpcy5hcmVhKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgIHRoaXMuY2FjaGUgPSBbXTtcclxuICAgIHRoaXMucGhhc2UgPSAxO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCA9IDA7XHJcbiAgICB0aGlzLmNodW5rRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgdGhpcy5vb20gPSBlbnRyeS5tYXJrcy5sZW5ndGggPT09IDEgJiYgZW50cnkubWFya3NbMF0uaWQgPT0gMTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lcigpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRpbWVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbnRyeSxcclxuICAgICAgICBub3cgPSBbXSwgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICBsID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBtYXJrO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuXHJcbiAgICAgIHRoaXMuY29udmVydERlc2NyaXB0aW9uKG1hcmspLmNyZWF0ZVRlbXBPYmplY3QobWFyayk7XHJcblxyXG4gICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgIGVsc2Ugbm93LnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHBvc3Rwb25lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc3RvcmUoKTtcclxuICB9XHJcbiAgY29udmVydERlc2NyaXB0aW9uKG1hcmspIHtcclxuICAgIGlmICh0eXBlb2YgbWFyay5jb25kcy5vID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgY29udmVydGVkQ29uZHMgPSB7XHJcbiAgICAgICAgICAgIG86IGNvbmRzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgbjI6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIHAxOiBjb25kcy5maXJzdFRleHROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDM6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwNDogY29uZHMuZmlyc3RHcmFtcGFOb2RlUG9zaXRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICBtYXJrLmNvbmRzID0gY29udmVydGVkQ29uZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3JlYXRlVGVtcE9iamVjdChtYXJrKSB7XHJcbiAgICBsZXQgdGV4dCA9IG1hcmsudGV4dCxcclxuICAgICAgICB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLFxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgIG1hcmsudGVtcCA9IHtcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHRyaW1tZWRUZXh0OiB0cmltbWVkVGV4dCxcclxuICAgICAgdHJpbW1lZFRleHRMZW5ndGg6IHRyaW1tZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0OiBzcXVlZXplZFRleHQsXHJcbiAgICAgIHNxdWVlemVkVGV4dExlbmd0aDogc3F1ZWV6ZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZFBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtYXJrLnN5bmNlZCA9IHRoaXMuZW50cnkuc3luY2VkO1xyXG4gIH1cclxuICByZXN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDIpIHRoaXMuc29ydFF1ZXVlQnlJZCgpO1xyXG5cclxuICAgIGxldCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgLmdldFRleHRQb3NpdGlvbnMobWFya3MsIGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5waGFzZSA9PT0gMSAmJiBsZW5ndGggPiAxKVxyXG4gICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgdGhpcy5maW5kUG9zc2libGVFeHRyZW1hKClcclxuICAgICAgICAgIC5ydWxlT3V0TXVsdGlwbGVzKClcclxuICAgICAgICAgIC5yZXN0b3JlUmFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggJiYgIXRoaXMuY2FuY2VsZWQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8ICtuZXcgRGF0ZSgpKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzdG9yZSgpLCAwKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICB9XHJcbiAgc29ydFF1ZXVlQnlJZCgpIHtcclxuICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbWFyaywgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmICghbWFya3NbbF0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdWzBdO1xyXG4gICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgIH1cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5xdWV1ZS5wdXNoKFt0ZW1wW2ldXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgbGV0IHRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCxcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHNxdWVlemVkVGV4dCwgc3F1ZWV6ZWRUZXh0TGVuZ3RoLCBwLCBlbmRQb3NpdGlvbjtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHAgPSB1bmRlZmluZWQ7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICBpZiAoIW1hcmtUZW1wKSB7XHJcbiAgICAgICAgbWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gZW5kUG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzcXVlZXplZFRleHQgPSBtYXJrVGVtcC5zcXVlZXplZFRleHQ7XHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAocCAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIHAgPSAtMTtcclxuICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHNxdWVlemVkVGV4dCwgcCArIDEpO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBwICsgc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICghbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzEnKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcclxuICAgIGxldCBsID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgcG9zLCBzdGFydCwgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHBvcyA9IHBvc2l0aW9uc1tsXTtcclxuICAgICAgc3RhcnQgPSBwb3NbMF07XHJcblxyXG4gICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgZWxzZSB0ZW1wW3N0YXJ0XSA9IHBvcztcclxuICAgIH1cclxuICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBpIDwgdDsgaSsrKVxyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgfVxyXG4gIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBwb3MxLCBwb3MyLCBpLCBtMSwgbTIsIGlkMSwgaWQyLCBpZDtcclxuXHJcbiAgICBpZiAocCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHAtLSA+IDEpIHtcclxuICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICBwb3MyID0gcG9zaXRpb25zW3BdO1xyXG4gICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICBtMiA9IHBvczJbMl07XHJcbiAgICAgICAgaWQxID0gbTEuaWQ7XHJcbiAgICAgICAgaWQyID0gbTIuaWQ7XHJcblxyXG4gICAgICAgIGlmIChpZDEgPT09IGlkMikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG5cclxuICAgICAgICAgIGlmIChpZDEgPCBpZDIpIHtcclxuICAgICAgICAgICAgaWQgPSBpZDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGlkMTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwOyBpKyspXHJcbiAgICAgICAgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjdXRPdXRGb3IoaWQpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUocC0tKSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbnNbcF1bMl0uaWQgPT09IGlkKVxyXG4gICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3Rwb25lKG1hcmspIHtcclxuICAgIGxldCBxdWV1ZSA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYWxyZWFkeUluY2x1ZGVkKVxyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICB9XHJcbiAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgIGxldCBub2RlcyA9IHRoaXMuYm9keVRleHROb2RlcyxcclxuICAgICAgICBuID0gbm9kZXMgPyBub2Rlcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcGhhc2UgPSB0aGlzLnBoYXNlLFxyXG4gICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZSA9IFtdLFxyXG4gICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLCBjaGFycyA9IDAsXHJcbiAgICAgICAgbmV4dFN0YXJ0Rm91bmQsIGVuZGluZ3NJblRoaXNOb2RlLFxyXG4gICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIGRpZmYsIGwsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBlLCBmLCBpZCwgcCwgcSwgeCwgbSxcclxuICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0LCBzdGFydEZvdW5kRm9yLCBwb3N0cG9uZWQsIGhhc0VuZGluZ3NJblRoaXNOb2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgbm9kZXNUZXh0ID0gdGhpcy5zcXVlZXplKG5vZGUuZGF0YSk7XHJcbiAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNoYXJzICs9IG5vZGVzVGV4dExlbmd0aDtcclxuICAgICAgbCA9IGluZGljZXMubGVuZ3RoO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgIHBvc3Rwb25lZCA9IFtdO1xyXG4gICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGluZGljZXNbbF1bMF07XHJcbiAgICAgICAgZW5kUG9zaXRpb24gPSBpbmRpY2VzW2xdWzFdO1xyXG4gICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciB8fCBbXTtcclxuICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLmxlbmd0aCA8IG1hcmsudGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMucHVzaCh7IG5vZGU6IG5vZGUsIHBvczogaSB9KTtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIHN0YXJ0Rm91bmRGb3IucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICFtYXJrLnRlbXAuZW5kRm91bmRGb3IuaW5jbHVkZXMoZW5kUG9zaXRpb24pICYmXHJcbiAgICAgICAgICAoY2hhcnMgLSBlbmRQb3NpdGlvbikgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHN0YXJ0Rm91bmRGb3IpIDwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0ID0gdGhpcy5maW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgZW5kUG9zaXRpb24gLSAoY2hhcnMgLSBub2Rlc1RleHRMZW5ndGgpKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvci5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXSA9IHtcclxuICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zc2libGVGb2N1c09mZnNldCxcclxuICAgICAgICAgICAgICBwb3M6IGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICBzYXRpc2ZpZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICBpZiAoY2hhcnMgPiB0aGlzLm1heFBvc2l0aW9uKSBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChwaGFzZSAhPT0gMSB8fCB0aGlzLm9vbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbWFyayA9IHRoaXMubWFya3NbaV07XHJcbiAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMobWFyay5pZCkpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMicpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IGNhY2hlLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIG5vZGUsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgZ3JhbmRncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxLFxyXG4gICAgICAgIHBvc3NpYmxlRW5kcywgc3RhcnRGb3VuZEZvciwgY29uZHMsIHN0YXJ0T2Zmc2V0LCB0ZW1wLCB0ZXh0TGVuZ3RoLCBzdGFydDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBjYWNoZVtpXTtcclxuICAgICAgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzID0gdGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgIHBvc3NpYmxlRW5kcyA9IHRlbXAucG9zc2libGVFbmRzO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gdGVtcC5zdGFydEZvdW5kRm9yXHJcbiAgICAgIHAgPSBwb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoO1xyXG4gICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY29uZHMubztcclxuICAgICAgdGV4dExlbmd0aCA9IHRlbXAudGV4dExlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwID4gMSkge1xyXG4gICAgICAgIHdoaWxlIChwLS0pIHtcclxuICAgICAgICAgIG5vZGUgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcF0ubm9kZTtcclxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAoIWdyYW1wYSB8fCBjb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gocCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSBwID0gMDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkgcCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHEgPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5ub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW5kZ3JhbXBhID0gZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICghZ3JhbmRncmFuZGdyYW1wYSB8fCBjb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbXBhKSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHBvc3NpYmxlRW5kc1tzdGFydEZvdW5kRm9yW3FdXS5vZmZzZXQgLSBzdGFydE9mZnNldCkgPT09IHRleHRMZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwID0gcTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHAgPSAwO1xyXG5cclxuICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgIHN0YXJ0ID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZSA9IHN0YXJ0Lm5vZGU7XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbiA9IHN0YXJ0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuc2V0TWF0Y2hpbmdFbmQobWFyaywgcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvcltwXSxcclxuICAgICAgICBlbmQgPSBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dO1xyXG5cclxuICAgIG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uID0gZW5kLnBvcztcclxuICAgIG1hcmsudGVtcC5mb2N1c09mZnNldCA9IGVuZC5vZmZzZXQ7XHJcbiAgfVxyXG4gIHNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpIHtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFtcGEgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBkZXNjcmlwdGlvbi5vLFxyXG4gICAgICAgIHJlbGV2YW50Tm9kZVRleHQgPSBub2RlLmRhdGEuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0KS50cmltKCksXHJcbiAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0LFxyXG4gICAgICAgIG0gPSBtYXJrLnRlbXAudHJpbW1lZFRleHRMZW5ndGgsXHJcbiAgICAgICAgdGV4dHNNYXRjaDtcclxuXHJcbiAgICBpZiAobSA8PSBsKVxyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUobWFya1RleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpKSA9PT0gMDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0ZXh0c01hdGNoICYmXHJcbiAgICAgIChwYXJlbnROb2RlLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMSB8fCAoZGVzY3JpcHRpb24ubjEgPT09ICdUTScgJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpICYmXHJcbiAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgIHRoaXMud2hpY2hDaGlsZChwYXJlbnROb2RlLCBub2RlKSA9PT0gZGVzY3JpcHRpb24ucDFcclxuICAgICk7XHJcbiAgfVxyXG4gIGZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBuKSB7XHJcbiAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgbCA9IG5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3F1ZWV6ZShub2RlVGV4dFtpXSkpIGNvdW50ZXIrKztcclxuXHJcbiAgICAgIGlmIChjb3VudGVyID09PSBuKSByZXR1cm4gKC9cXHMkLy50ZXN0KG1hcmsudGV4dCkgPyBpICsgMiA6IGkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzdG9yZVJhbmdlcygpIHtcclxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHN0YXJ0LCBlbmQsIGZvY3VzT2Zmc2V0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgIGVuZCA9IG1hcmtUZW1wLmVuZE5vZGU7XHJcbiAgICAgIGZvY3VzT2Zmc2V0ID0gbWFya1RlbXAuZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSkge1xyXG4gICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzMnKSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgIHJhbmdlLnNldEVuZChlbmQsIGZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgLy9zZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5yZWNvbGxlY3ROb2RlcyhtYXJrKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBtYXJrLnRlbXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJvZHlTZWxlY3Rpb24oZWwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwrKztcclxuXHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKGVsKTtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHJpYWwgPCA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRCb2R5U2VsZWN0aW9uKGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9ICcgJztcclxuICAgICAgICAgIHRoaXMuYm9keVRleHROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUodGhpcy5zZWxlY3Rpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gdGhpcy5zZWxlY3Rpb24ubm9kZXMgPyB0aGlzLnNlbGVjdGlvbi5ub2Rlcy5zbGljZSgpIDogW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpID8gdGV4dC5yZXBsYWNlKC9cXHR8XFxzfFxcbnxcXHIvZywgJycpIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICB3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGNvbnRleHQpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdCAgICBjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0ICAgIHBvcyA9IDAsIGkgPSAwLCBjdXJyZW50Q2hpbGQ7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnRDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGQpIHJldHVybiBwb3M7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZU5hbWUgPT09IGNvbnRleHQpIHBvcysrO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICBpZiAoIShjdXJyZW50Q2hpbGQubm9kZVR5cGUgPT09IDMgJiYgIWN1cnJlbnRDaGlsZC5kYXRhKSkgcG9zKys7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEltbXV0UmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IFsuLi5lbnRyeS5tYXJrcy5zb3J0KChtMSwgbTIpID0+IG0xLmlkIC0gbTIuaWQpXTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NJbkNodW5rcyhtYXJrcywgdGhpcy5yZXN0b3JlUmFuZ2UsIHRoaXMucmVwb3J0KTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVSYW5nZShtYXJrKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIHRoaXMubWFya3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpLFxyXG4gICAgICAgIGZpbHRlciA9IHdob2xlRG9jdW1lbnQgP1xyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxmLmlzU2VsZWN0YWJsZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKSA6XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGVjdGlvbi5jb250YWluc05vZGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSksXHJcblxyXG4gICAgICAgIGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSksXHJcblxyXG4gICAgICAgIHRlbXBSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgbm9kZXMgPSBbXSwgcGFyZW50Tm9kZXMgPSBbXSxcclxuICAgICAgICB0ZXh0Tm9kZSwgcGFyZW50LCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIHdoaWxlKHRleHROb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkge1xyXG4gICAgICBub2Rlcy5wdXNoKHRleHROb2RlKTtcclxuICAgIH1cclxuICAgIG5vZGVzID0gdGhpcy50cmltU2VsZWN0aW9uKG5vZGVzKTtcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSA6IG5vZGVzO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlcyA9IHRoaXMuY29sbGVjdFBhcmVudE5vZGVzKHRoaXMubm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZWNvbGxlY3ROb2RlcyhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrV3JhcHBlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXj1cIicgKyBtYXJrLmlkICsgJ19cIl0nKSk7XHJcbiAgICBjb25zdCBtID0gbWFya1dyYXBwZXJzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5ld1NlZ21lbnQgPSBtYXJrV3JhcHBlcnMubWFwKGVsID0+IGVsLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGNvbnN0IHByZXYgPSBtYXJrV3JhcHBlcnNbMF0ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgY29uc3QgbmV4dCA9IG1hcmtXcmFwcGVyc1ttLTFdLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ID0gbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgZW5kID0gbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbjtcclxuXHJcbiAgICBpZiAocHJldiAmJiBwcmV2Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQudW5zaGlmdChwcmV2KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC5wdXNoKG5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZXMuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIC4uLm5ld1NlZ21lbnQpO1xyXG4gIH1cclxuICB0cmltU2VsZWN0aW9uKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBsZXQgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBmaXJzdE5vZGUgPSBub2Rlc1swXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBmaXJzdE5vZGUgJiYgZmlyc3ROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoIDw9IHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICBub2Rlcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBsYXN0Tm9kZSAmJiB0aGlzLmlzQmxhbmsobGFzdE5vZGUuZGF0YS5zdWJzdHIoMCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSkpIHtcclxuICAgICAgICBub2Rlcy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICByZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbCA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IHJnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UocmcpO1xyXG5cclxuICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICByZy5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgICByZXR1cm4gISFzZWwudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZSh0aGlzLnJhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIGNvbGxlY3RQYXJlbnROb2Rlcyhub2Rlcykge1xyXG4gICAgbGV0IGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgcGFyZW50cyA9IFtdLCBpID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcGFyZW50cy5wdXNoKG5vZGVzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH1cclxuICByZXRyaWV2ZVRleHQoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcyxcclxuICAgICAgICBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG5vZGVUZXh0cyA9IFtdLFxyXG4gICAgICAgIHRleHQ7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIG5vZGVUZXh0cy5wdXNoKG5vZGVzW2ldLmRhdGEpO1xyXG5cclxuICAgIGwgLT0gMTtcclxuXHJcbiAgICBpZiAobm9kZVRleHRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0LCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAvL25vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmspIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgICAnYWRkZWQ6bm90ZSc6ICdvbk5vdGVBZGRlZCcsXHJcbiAgICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrUmVtb3ZlZCdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcblxyXG4gICAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgbm90ZXM6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYm9va21hcms6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICBub3RlczogZmFsc2UsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU3RhdGUoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ID0gbm90ZWljb24pO1xyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgICAodGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgJiYgdGhpcy5ib29rbWFyaykgfHxcclxuICAgICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtdWknKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgICBlbHNlIGlmIChidG4uc2hvd24gJiYgKCF0aGlzW2JdIHx8ICFidG4uc2hvdykpIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICAgIGlmIChidXR0b25zW2JdLnNob3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgICAgY29uc3Qgbm90ZXNCdXR0b24gPSB0aGlzLmJ1dHRvbnMubm90ZXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3Rlc3RvZ2dsZScpO1xyXG4gICAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgICBib29rbWFya0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICAgIH0sXHJcbiAgICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgY29uc3QgaGFuZGxlciA9IGJ0bi5oYW5kbGVyID0gdHlwZSA9PT0gJ25vdGVzJyA/XHJcbiAgICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgIHRtdWkuYXBwZW5kQ2hpbGQoYnRuLmVsKTtcclxuICAgICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG5cclxuICAgICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bi5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3RtdWlwb3MnKVxyXG4gICAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgICB9LFxyXG4gICAgb25Ob3RlQWRkZWQoKSB7XHJcbiAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICBvbkJvb2ttYXJrUmVtb3ZlZCgpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdpbmplY3Rpb24nLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG5cdFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdjYW5jZWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==