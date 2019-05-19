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
      console.log('hotkey', key);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9hdXRvLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2Jvb2ttYXJrLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvY29udGV4dG1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXItcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9wYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9yZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3RtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfZW50cnkiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsImhpc3RvcnlTZXR0aW5ncyIsInNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsImZpZWxkIiwiUHJvbWlzZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyIiwibWV0aCIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJzeW5jZWRTdG9yYWdlIiwibG9jYWwiLCJsb2NhbEhpc3RvcnkiLCJsb2NhbFN0b3JhZ2UiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9ibWljb24iLCJtaXNjIiwiYm1pY29uIiwiX2dldF9ub3RlaWNvbiIsIm5vdGVpY29uIiwiX2dldF9ub3Rlb25jbGljayIsIm5vdGVvbmNsaWNrIiwiX2dldF9ub3RldHJhbnNwIiwibm90ZXRyYW5zcCIsIl9nZXRfdG11aXBvcyIsInRtdWlwb3MiLCJfZ2V0X2F1dG9zYXZlIiwiYXV0b3NhdmUiLCJfZ2V0X2ltbXV0IiwiX2dldF9wcm9ncmVzc2JhciIsInByb2dyZXNzYmFyIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiX2dldF9tb2RlIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X25hbWluZyIsImJvb3RzdHJhcHBlZCIsInBvd2VyIiwib24iLCJfRE9NTU9EVUxFIiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIl9TVE9SRSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwiZW1pdCIsIl9CT09LTUFSSyIsIm1hcmsiLCJhbmNob3IiLCJ3cmFwcGVycyIsInciLCJrZXlEYXRhIiwiYm9va21hcmsiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhY3RpdmF0ZSIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwicGFyZW50IiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhpZ2hsaWdodCIsImNyZWF0ZVRleHROb2RlIiwidGV4dENvbnRlbnQiLCJzaWxlbnQiLCJpbW11dGFibGUiLCJzYXZlIiwicmVxdWVzdCIsImdyYW50ZWQiLCJzdWIiLCJpMThuIiwiZ2V0TWVzc2FnZSIsInByb21wdCIsInJldHJpZXZlRW50cnkiLCJjb25maXJtZWQiLCJjb25maXJtIiwiY29weSIsImZpbmRNYXJrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidHJpbSIsInN0b3JlIiwib3JkZXIiLCJvcmRlck1hcmtzVmlzdWFsbHkiLCJyZWNyZWF0ZSIsIl9TRUxFQ1RJT04iLCJwcm9ncmFtbWF0aWNhbGx5Iiwib25GaW5pc2hlZFJlc3RvcmF0aW9uIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJvbkNhbmNlbGVkUmVzdG9yYXRpb24iLCJhZGROb3RlIiwic2F2ZU5vdGUiLCJtYXJrRWxlbWVudHMiLCJwb3MiLCJpbmRpY2F0ZU1hcmsiLCJnb3RvTmV4dE1hcmsiLCJkaXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG0iLCJ0bXMiLCJzZXQiLCJyZW1vdmVCb29rbWFyayIsIm1hcmsxIiwibWFyazIiLCJtMSIsIm0yIiwiYmIxIiwiYmIyIiwidG9wMSIsInRvcDIiLCJtYXAiLCJ3cmFwcGVyczEiLCJ3MSIsImlkMSIsIndyYXBwZXJzMiIsImlkMiIsIncyIiwib25NYXJrZXJLZXkiLCJvbkhvdGtleSIsImNvbnNvbGUiLCJsb2ciLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0IiwidXJsIiwiVVJMIiwia0QiLCJvbkhhc2hDaGFuZ2UiLCJjb2xvciIsIkJPRFkiLCJET00iLCJjbGljayIsImtleXVwIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwibWFya0NsaWNrSGFuZGxlciIsInZpc2libGUiLCJyZWNlbnRseVVwZGF0ZWQiLCJzZXR0aW5nc01vZGUiLCJ0Iiwic2l6ZSIsImgiLCJkcmFnRFgiLCJkcmFnRFkiLCJtdXRhdGlvbk9ic2VydmVyIiwiYWRqdXN0Tm90ZURhdGFPYmplY3QiLCJjcmVhdGVOb3RlRWxlbWVudCIsImFkZExpc3RlbmVycyIsImFkZE1hcmtMaXN0ZW5lcnMiLCJub3RlRGF0YSIsImhlYWRlciIsImRlbCIsImdlYXIiLCJwYWxldHRlIiwidGV4dEVsZW1lbnQiLCJkZWxUZXh0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluVGV4dCIsImdlYXJUZXh0IiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwidmFsdWUiLCJhdHRlbXB0VXBkYXRlIiwiX2RlbGV0ZSIsImhpZGUiLCJyZW1vdmVNYXJrTGlzdGVuZXJzIiwiZm9yY2UiLCJpbm5lcldpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImdldFBvc2l0aW9uIiwib2Zmc2V0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25uZWN0TXV0YXRpb25PYnNlcnZlciIsImJyaW5nVXBGcm9udCIsInpJbmRleCIsImRpc2Nvbm5lY3QiLCJ0b2dnbGUiLCJ0b2dnbGVQYWxldHRlIiwiY2hhbmdlQ29sb3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZXh0YXJlYSIsImNvbmZpZyIsImF0dHJpYnV0ZUZpbHRlciIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsInNhdmVTaXplIiwib2JzZXJ2ZSIsInJlY3QiLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm9uRHJhZ1N0YXJ0IiwicGFnZVgiLCJwYWdlWSIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsIm11dGF0aW9uc0xpc3QiLCJ3aWR0aCIsIm5vdGVzIiwiZHJhZ0hhbmRsZXIiLCJkcmFnU3RvcEhhbmRsZXIiLCJ1cGRhdGVUcmFuc3AiLCJfTk9URSIsInJlc3RvcmUiLCJhZGRBbmRTaG93IiwicmVtb3ZlTm90ZVN0b3JhZ2UiLCJpc0VtcHR5IiwicmVtb3ZlTm90ZSIsInRvZ2dsZUFsbCIsImNvbmRpdGlvbiIsImJvZHlDbGFzc2VzIiwidHJhbnNwIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsInN0YXJ0RHJhZ2dpbmdOb3RlIiwiZW1pdERyYWdFdmVudCIsInN0b3BEcmFnZ2luZ05vdGUiLCJkb2MiLCJzZW5kTm90ZXNTdGF0ZSIsImluZm8iLCJrZXlkb3duIiwic2VsZWN0aW9uY2hhbmdlIiwicmV0cnlBY3RpdmUiLCJzaGlmdFNlbnNpdGl2ZUtleXMiLCJyZWdpc3RlcmVkTG9hZEhhbmRsZXIiLCJrZXlDb2RlTWFwIiwic2V0dXAiLCJyZWFkeVN0YXRlIiwiaXNJRnJhbWUiLCJoYXNobGVzc1VSTCIsImNoZWNrVVJMIiwiaXNFZGl0YWJsZSIsInRhZ05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJkZWxlZ2F0ZSIsInRvTG93ZXJDYXNlIiwia2V5Q29kZSIsIm1vZEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJhcnJvd0tleXMiLCJsb2NrZWRBY3Rpb25zIiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJpc0NvbGxhcHNlZCIsIm9yaWdLZXkiLCJpc01hcmtlcktleSIsImlzQ3VzdG9tTWFya2VyS2V5Iiwic2V0dGluZyIsImxvb2t1cCIsInNob3J0Y3V0IiwiczEiLCJzMiIsInNlbGVjdGVkVGV4dCIsIm9uVXJsRm91bmQiLCJmaWx0ZXJFbnRyaWVzIiwicmVjZW50bHlPcGVuZWRFbnRyeSIsImlzQXJyYXkiLCJmaXJzdEVudHJ5IiwibG9ja2VkRW50cmllcyIsImxvY2tlZEVudHJpZXNFeGlzdCIsIm5vbkxvY2tlZEVudHJpZXMiLCJhIiwiYiIsIm9uVXJsQ2hhbmdlIiwidGFiIiwibmV3VXJsIiwiYWN0aXZhdGVSZXRyeSIsImRlYWN0aXZhdGVSZXRyeSIsInNlbmRQYWdlU3RhdGUiLCJzdGVwcyIsInRvdGFsV2lkdGgiLCJjdXJyZW50V2lkdGgiLCJzdGVwTGVuZ3RoIiwiY2FuY2VsSGFuZGxlciIsIm1vZGFsIiwidHlwZSIsImxlbiIsInRtcHJvZ3Jlc3MiLCJjYW5jZWwiLCJjbG9zZUhhbmRsZXIiLCJzdG9wIiwidG1wcm9ncmVzc2NhbmNlbCIsInRtcHJvZ3Jlc3NjbG9zZSIsInByb2dyZXNzIiwiUmVzdG9yZXJCYXNlIiwiZmFpbHVyZVJlcG9ydCIsInJlc3RvcmVkIiwiYXJlYSIsImNhbmNlbGVkIiwicHJvYyIsImNiIiwicmVjIiwiZXhwaXJlIiwibGwiLCJ0ZW1wIiwiUmVzdG9yZXIiLCJxdWV1ZSIsImNhY2hlIiwicGhhc2UiLCJzZWxlY3Rpb25UcmlhbCIsImNodW5rRHVyYXRpb24iLCJfdGltZXIiLCJvb20iLCJpbml0Iiwibm93IiwicG9zdHBvbmVkIiwiY29udmVydERlc2NyaXB0aW9uIiwiY3JlYXRlVGVtcE9iamVjdCIsImNvbnZlcnRlZENvbmRzIiwiZmlyc3ROb2RlTmFtZSIsImZpcnN0UGFyZW50Tm9kZU5hbWUiLCJmaXJzdFRleHROb2RlUG9zaXRpb24iLCJmaXJzdE5vZGVQb3NpdGlvbiIsImZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uIiwiZmlyc3RHcmFtcGFOb2RlUG9zaXRpb24iLCJ0cmltbWVkVGV4dCIsInNxdWVlemVkVGV4dCIsInNxdWVlemUiLCJ0ZXh0TGVuZ3RoIiwidHJpbW1lZFRleHRMZW5ndGgiLCJzcXVlZXplZFRleHRMZW5ndGgiLCJwb3NzaWJsZVBvc2l0aW9ucyIsInBvc3NpYmxlRW5kUG9zaXRpb25zIiwicG9zc2libGVTdGFydE5vZGVzIiwicG9zc2libGVFbmRzIiwicG9zc2libGVGb2N1c09mZnNldHMiLCJzb3J0UXVldWVCeUlkIiwic2V0Qm9keVNlbGVjdGlvbiIsImdldFRleHRQb3NpdGlvbnMiLCJwb3N0cG9uZU92ZXJsYXBwaW5ncyIsImZpbmRQb3NzaWJsZUV4dHJlbWEiLCJydWxlT3V0TXVsdGlwbGVzIiwicmVzdG9yZVJhbmdlcyIsInRpbWVyIiwicmVwb3J0IiwicmVzIiwidHJpbW1lZFNlbGVjdGlvblRleHQiLCJhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zIiwiZW5kUG9zaXRpb25zIiwibWFya1RlbXAiLCJyZWFzb24iLCJzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyIsIm1heFBvc2l0aW9uIiwicG9zaXRpb25zIiwicG9zMSIsInBvczIiLCJwb3N0cG9uZSIsImN1dE91dEZvciIsImFscmVhZHlJbmNsdWRlZCIsImJvZHlUZXh0Tm9kZXMiLCJzYXRpc2ZpZWQiLCJjaGFycyIsIm5leHRTdGFydEZvdW5kIiwiZW5kaW5nc0luVGhpc05vZGUiLCJub2Rlc1RleHQiLCJub2Rlc1RleHRMZW5ndGgiLCJkaWZmIiwiZiIsInEiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0Iiwic3RhcnRGb3VuZEZvciIsImhhc0VuZGluZ3NJblRoaXNOb2RlIiwiZW5kRm91bmRGb3IiLCJzYXRpc2ZpZXNEZXNjcmlwdGlvbiIsImZpbmRGb2N1c09mZnNldCIsImdyYW5kZ3JhbmRncmFtcGEiLCJtYXRjaGVzIiwiZmFpbGVkIiwic3RhcnROb2RlIiwic3RhcnROb2RlUG9zaXRpb24iLCJzZXRNYXRjaGluZ0VuZCIsImVuZE5vZGUiLCJlbmROb2RlUG9zaXRpb24iLCJmb2N1c09mZnNldCIsImRlc2NyaXB0aW9uIiwicmVsZXZhbnROb2RlVGV4dCIsIm1hcmtUZXh0IiwidGV4dHNNYXRjaCIsIm5vZGVUZXh0IiwiY291bnRlciIsInRlc3QiLCJjcmVhdGVSYW5nZSIsInJlY29sbGVjdE5vZGVzIiwic2xpY2UiLCJjb250ZXh0IiwiY3VycmVudENoaWxkIiwiSW1tdXRSZXN0b3JlciIsInByb2Nlc3NJbkNodW5rcyIsInJlc3RvcmVSYW5nZSIsImdldE5vZGUiLCJ0ZXh0Tm9kZVBvc2l0aW9uIiwicmV0cnkiLCJvbkZhaWx1cmUiLCJnZXRSZXBvcnQiLCJtc2ciLCJyYW5nZUNvdW50IiwiZGVmaW5lZCIsInJlZHVjZVRvT25lUmFuZ2UiLCJyZXRyaWV2ZVRleHQiLCJhZGp1c3QiLCJzZWxlY3RBbGxDaGlsZHJlbiIsInByb3BzIiwiaXNTaW1wbGUiLCJmb2N1cyIsImlzQmFja3dhcmRzIiwicmV2ZXJzZSIsImZpcnN0VGV4dE5vZGUiLCJsYXN0VGV4dE5vZGUiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsIndob2xlRG9jdW1lbnQiLCJnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lciIsImZpbHRlciIsImlzU2VsZWN0YWJsZSIsImlzQmxhbmsiLCJoYXNOb3JtYWxQYXJlbnQiLCJjb250YWluc05vZGUiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwidGVtcFJhbmdlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJ0cmltU2VsZWN0aW9uIiwicmVkdWNlVG9TZWxlY3RhYmxlIiwiY29sbGVjdFBhcmVudE5vZGVzIiwibWFya1dyYXBwZXJzIiwibmV3U2VnbWVudCIsInByZXYiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJ1bnNoaWZ0IiwiYW5jaG9yT2Zmc2V0Iiwic3Vic3RyIiwic2VsIiwicmciLCJzZWxlY3ROb2RlIiwicGFyZW50cyIsIm5vZGVUZXh0cyIsImpvaW4iLCJub2RlMSIsIm5vZGUyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJyYW5nZTAiLCJsYXN0UmFuZ2UiLCJ0YWciLCJ0b1VwcGVyQ2FzZSIsImlzQ2hpbGRPZiIsInNlYXJjaCIsImF0dGFjaGVkIiwiYnV0dG9ucyIsInNob3duIiwiY3JlYXRlQnV0dG9ucyIsInVwZGF0ZVN0YXRlIiwic2hvdWxkQXR0YWNoIiwicmVuZGVyIiwiYnRuIiwiYWRkQnV0dG9uIiwicmVtb3ZlQnV0dG9uIiwidXBkYXRlUG9zaXRpb24iLCJ0bXVpIiwibm90ZXNCdXR0b24iLCJib29rbWFya0J1dHRvbiIsInRvZ2dsZU5vdGVzIiwib25Ob3RlQWRkZWQiLCJvbkxhc3ROb3RlUmVtb3ZlZCIsIm9uQm9va21hcmtBZGRlZCIsIm9uQm9va21hcmtSZW1vdmVkIiwiX1BPUlQiLCJPTkVPRkYiLCJNQVhfTE9HX0VOVFJJRVMiLCJOT1RFX0NPTE9SUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwiX0NPUFkiLCJzcmMiLCJ2YWwiLCJwcm9wIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwiZG9tRXZlbnRzIiwiZ2VuZXJhbEhhbmRsZXIiLCJfZXh0cmEiLCJfRVJST1JUUkFDS0VSIiwiZmlsZSIsImVycm9yIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJvYmoxIiwib2JqMiIsIl9HRVRfQUNUSVZFX1RBQiIsInRhYnMiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJfSEFTSExFU1MiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJsMTBuQXR0ciIsImF0dHIiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJ0b3BpY3MiLCJhcmdzIiwidG9waWMiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjYXRjaCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJsYXN0QXJnIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztlQUVlLElBQUlBLGNBQUosQ0FBWTtBQUN6QkMsVUFBUTtBQUNOQyxTQUFLO0FBQ0gsc0JBQWdCLFVBRGI7QUFFSCxpQ0FBMkIsY0FGeEI7QUFHSCxrQ0FBNEIsY0FIekI7QUFJSCw0QkFBc0IsaUJBSm5CO0FBS0gsNEJBQXNCLGFBTG5CO0FBTUgsdUJBQWlCLGFBTmQ7QUFPSCxvQkFBYztBQVBYO0FBREMsR0FEaUI7QUFZekJDLGVBQWEsS0FaWTtBQWF6QkMsZ0JBQWMsS0FiVztBQWN6QkMsaUJBQWUsTUFkVTtBQWV6QkMsZ0JBQWMsTUFmVztBQWdCekJDLGNBQVksTUFoQmE7QUFrQnpCQyxVQUFRLEtBbEJpQjtBQW1CekJDLFFBQU1DLFNBbkJtQjtBQW9CekJDLFNBQU8sSUFwQmtCO0FBcUJ6QjtBQUNBQyxXQUFTLEVBdEJnQjtBQXVCekJDLFVBQVEsS0F2QmlCO0FBd0J6QkMsaUJBQWUsS0F4QlU7QUF5QnpCQyxRQUFNLEVBekJtQjtBQTBCekJDLGFBQVcsUUExQmM7QUEyQnpCQyxTQUFPLEtBM0JrQjtBQTRCekJDLGdCQUFjLEtBNUJXO0FBOEJ6QkMsVUE5QnlCLHNCQThCZDtBQUNULFNBQUtDLFlBQUw7QUFDRCxHQWhDd0I7QUFrQ3pCQyxRQWxDeUIsb0JBa0NoQjtBQUNQLFNBQUtULE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0gsSUFBTCxHQUFZQyxTQUFaO0FBQ0EsU0FBS0ssSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLSixLQUFMLEdBQWEsSUFBYjtBQUNELEdBdkN3QjtBQXlDekJTLGNBekN5QiwwQkF5Q1Y7QUFBQTs7QUFDYixRQUFJLENBQUMsS0FBS1QsS0FBTixJQUFlVyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQW5CLEVBQTJELE9BRDlDLENBQ3FEOztBQUVsRSxTQUFLQyxHQUFMLENBQVMsVUFBVCxFQUFxQkMsSUFBckIsQ0FBMEIsb0JBQVk7QUFDcEMsVUFBTUMsa0JBQWtCQyxXQUFXQSxTQUFTQyxPQUFwQixHQUE4QixJQUF0RDs7QUFDQSxVQUFJRixlQUFKLEVBQXFCO0FBQ25CLGNBQUtiLE1BQUwsR0FBY2EsZ0JBQWdCRyxNQUFoQixLQUEyQixNQUF6QztBQUNBLGNBQUtmLGFBQUwsR0FBcUJZLGdCQUFnQkksVUFBaEIsS0FBK0IsS0FBcEQ7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQW5Ed0I7QUFxRHpCQyxVQXJEeUIsc0JBcURkO0FBQUE7O0FBQ1QsV0FBT0MsUUFBUUMsT0FBUixDQUFnQkMsSUFBaEIsQ0FBcUJWLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxtQkFBVztBQUNoRCxVQUFJUSxXQUFXQSxRQUFRQyxJQUF2QixFQUE2QjtBQUMzQixlQUFLN0IsYUFBTCxHQUFxQjRCLFFBQVFDLElBQVIsQ0FBYVAsUUFBYixHQUF3QixNQUF4QixHQUFpQyxPQUF0RDtBQUNBLGVBQUtyQixZQUFMLEdBQW9CMkIsUUFBUUMsSUFBUixDQUFhTixPQUFiLEdBQXVCLE1BQXZCLEdBQWdDLE9BQXBEO0FBQ0Q7QUFDRixLQUxNLENBQVA7QUFNRCxHQTVEd0I7QUE4RHpCTyxhQTlEeUIsdUJBOERiQyxLQTlEYSxFQThETkMsT0E5RE0sRUE4REc7QUFDMUIsUUFBSSxLQUFLNUIsSUFBTCxJQUFhLEtBQUtBLElBQUwsS0FBYzRCLE9BQTNCLElBQXNDLENBQUMsS0FBS3hCLE1BQWhELEVBQXdEO0FBQ3RELFdBQUtKLElBQUwsR0FBWTJCLE1BQU0zQixJQUFsQjs7QUFDQSxVQUFJLEtBQUtHLE9BQUwsQ0FBYXlCLE9BQWIsQ0FBSixFQUEyQjtBQUN6QixhQUFLekIsT0FBTCxDQUFhd0IsTUFBTTNCLElBQW5CLElBQTJCMkIsS0FBM0I7QUFDQSxlQUFPLEtBQUt4QixPQUFMLENBQWF5QixPQUFiLENBQVA7QUFDRDtBQUNGO0FBQ0YsR0F0RXdCO0FBd0V6QkMsaUJBeEV5QiwyQkF3RVRGLEtBeEVTLEVBd0VGO0FBQ3JCLFFBQUksQ0FBQyxLQUFLdkIsTUFBTixJQUFnQixLQUFLRCxPQUFMLENBQWF3QixNQUFNM0IsSUFBbkIsQ0FBcEIsRUFBOEM7QUFDNUMsV0FBS0csT0FBTCxDQUFhd0IsTUFBTTNCLElBQW5CLEVBQXlCOEIsTUFBekIsR0FBa0NILE1BQU1HLE1BQXhDO0FBQ0Q7QUFDRixHQTVFd0I7QUE4RXpCQyxhQTlFeUIsdUJBOEViQyxZQTlFYSxFQThFQztBQUN4QixRQUFJLEtBQUs1QixNQUFULEVBQWlCLE9BQU8sS0FBUDtBQUVqQixRQUFNRCxVQUFVLEtBQUtBLE9BQXJCOztBQUNBLFNBQUssSUFBSUgsSUFBVCxJQUFpQkcsT0FBakIsRUFBMEI7QUFDeEIsVUFBSUEsUUFBUThCLGNBQVIsQ0FBdUJqQyxJQUF2QixLQUFnQ0EsU0FBU2dDLFlBQTdDLEVBQTJEO0FBQ3pELGVBQU8sS0FBSzdCLE9BQUwsQ0FBYUgsSUFBYixDQUFQO0FBQ0E7QUFDRDtBQUNGOztBQUNELFNBQUtBLElBQUwsR0FBWUMsU0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0QsR0ExRndCO0FBNEZ6QmdDLFlBNUZ5QixzQkE0RmQvQixPQTVGYyxFQTRGTDtBQUNsQixRQUFJLENBQUMsS0FBS0MsTUFBVixFQUFrQixLQUFLSixJQUFMLEdBQVlHLFFBQVEsQ0FBUixFQUFXSCxJQUF2QjtBQUNsQixRQUFNbUMsSUFBSWhDLFFBQVFpQyxNQUFsQjs7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBUixFQUFXVixLQUFoQixFQUF1QlUsSUFBSUYsQ0FBM0IsRUFBOEJFLEdBQTlCLEVBQW1DO0FBQ2pDVixjQUFReEIsUUFBUWtDLENBQVIsQ0FBUjtBQUNBLFdBQUtsQyxPQUFMLENBQWF3QixNQUFNM0IsSUFBbkIsSUFBMkIyQixLQUEzQjtBQUNEOztBQUNELFNBQUt6QixLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUtNLEtBQUwsR0FBYSxDQUFDLENBQUNMLFFBQVEsQ0FBUixFQUFXSyxLQUExQjtBQUNELEdBckd3QjtBQXVHekJPLEtBdkd5QixpQkF1R0Y7QUFBQTs7QUFBQSxRQUFuQnVCLEtBQW1CLHVFQUFYLFNBQVc7O0FBQ3JCLFFBQUksS0FBSzNDLFlBQVQsRUFBdUI7QUFDckIsYUFBUSxJQUFJNEMsT0FBSixDQUFZO0FBQUEsZUFBS0MsT0FBT0MsVUFBUCxDQUFrQjtBQUFBLGlCQUFNQyxFQUFFLE9BQUszQixHQUFMLENBQVN1QixLQUFULENBQUYsQ0FBTjtBQUFBLFNBQWxCLEVBQTRDLEVBQTVDLENBQUw7QUFBQSxPQUFaLENBQVI7QUFDRDs7QUFDRCxRQUFNSyxPQUFPLEtBQUssVUFBVUwsS0FBZixDQUFiO0FBQ0EsUUFBSSxDQUFDSyxJQUFMLEVBQVcsTUFBTSxXQUFXTCxLQUFYLEdBQW1CLGlCQUF6Qjs7QUFFWCxRQUFJLENBQUMsS0FBSzVDLFdBQVYsRUFBdUI7QUFDckIsV0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFdBQUtELFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxhQUFPLEtBQUs0QixRQUFMLEdBQWdCTixJQUFoQixDQUFxQixZQUFNO0FBQ2hDLGVBQUtyQixZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsZUFBTyxPQUFLLFVBQVUyQyxLQUFmLEdBQVA7QUFDRCxPQUhNLENBQVA7QUFJRDs7QUFDRCxXQUFPLEtBQUssVUFBVUEsS0FBZixHQUFQO0FBQ0QsR0F2SHdCO0FBeUh6Qk0sY0F6SHlCLDBCQXlIVjtBQUNiLFdBQU9yQixRQUFRQyxPQUFSLENBQWdCQyxJQUFoQixDQUFxQlYsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLHlCQUFpQjtBQUN0RCxVQUFNNkIsZ0JBQWdCQyxjQUFjM0IsT0FBcEM7QUFFQSxhQUFPSSxRQUFRQyxPQUFSLENBQWdCdUIsS0FBaEIsQ0FBc0JoQyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsd0JBQWdCO0FBQ3RELFlBQU1nQyxlQUFlQyxhQUFhOUIsT0FBbEM7QUFDQSxZQUFJLENBQUMwQixhQUFMLEVBQW9CLE9BQU9HLFlBQVA7QUFDcEIsWUFBSSxDQUFDQSxZQUFMLEVBQW1CLE9BQU9ILGFBQVAsQ0FIbUMsQ0FLdEQ7O0FBQ0EsYUFBSyxJQUFJVixDQUFULElBQWNhLGFBQWE3QyxPQUEzQjtBQUFvQzBDLHdCQUFjMUMsT0FBZCxDQUFzQmdDLENBQXRCLElBQTJCYSxhQUFhN0MsT0FBYixDQUFxQmdDLENBQXJCLENBQTNCO0FBQXBDOztBQUVBLGVBQU9VLGFBQVA7QUFDRCxPQVRNLENBQVA7QUFVRCxLQWJNLENBQVA7QUFjRCxHQXhJd0I7QUF5SXpCSyxlQXpJeUIsMkJBeUlUO0FBQ2QsV0FBTzNCLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzVCLGFBQXJCLEVBQW9DbUIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDO0FBQUEsYUFBV1EsUUFBUU4sUUFBbkI7QUFBQSxLQUEvQyxDQUFQO0FBQ0QsR0EzSXdCO0FBNEl6QmlDLGFBNUl5Qix5QkE0SVg7QUFDWixXQUFPNUIsUUFBUUMsT0FBUixDQUFnQixLQUFLNUIsYUFBckIsRUFBb0NtQixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsbUJBQVc7QUFDL0QsVUFBSSxDQUFDUSxPQUFELElBQVksQ0FBQ0EsUUFBUU4sUUFBekIsRUFBbUMsT0FBTyxJQUFQO0FBQ25DLGFBQU9NLFFBQVFOLFFBQVIsQ0FBaUJrQyxJQUFqQixDQUFzQkMsTUFBN0I7QUFDRCxLQUhNLENBQVA7QUFJRCxHQWpKd0I7QUFrSnpCQyxlQWxKeUIsMkJBa0pUO0FBQ2QsV0FBTy9CLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzVCLGFBQXJCLEVBQW9DbUIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLG1CQUFXO0FBQy9ELFVBQUksQ0FBQ1EsT0FBRCxJQUFZLENBQUNBLFFBQVFOLFFBQXpCLEVBQW1DLE9BQU8sSUFBUDtBQUNuQyxhQUFPTSxRQUFRTixRQUFSLENBQWlCa0MsSUFBakIsQ0FBc0JHLFFBQTdCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0F2SndCO0FBd0p6QkMsa0JBeEp5Qiw4QkF3Sk47QUFDakIsV0FBT2pDLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzVCLGFBQXJCLEVBQW9DbUIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLG1CQUFXO0FBQy9ELFVBQUksQ0FBQ1EsT0FBRCxJQUFZLENBQUNBLFFBQVFOLFFBQXpCLEVBQW1DLE9BQU8sSUFBUDtBQUNuQyxhQUFPTSxRQUFRTixRQUFSLENBQWlCa0MsSUFBakIsQ0FBc0JLLFdBQTdCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0E3SndCO0FBOEp6QkMsaUJBOUp5Qiw2QkE4SlA7QUFDaEIsV0FBT25DLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzVCLGFBQXJCLEVBQW9DbUIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLG1CQUFXO0FBQy9ELFVBQUksQ0FBQ1EsT0FBRCxJQUFZLENBQUNBLFFBQVFOLFFBQXpCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxhQUFPTSxRQUFRTixRQUFSLENBQWlCa0MsSUFBakIsQ0FBc0JPLFVBQTdCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0FuS3dCO0FBb0t6QkMsY0FwS3lCLDBCQW9LVjtBQUNiLFdBQU9yQyxRQUFRQyxPQUFSLENBQWdCLEtBQUs1QixhQUFyQixFQUFvQ21CLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxtQkFBVztBQUMvRCxVQUFJLENBQUNRLE9BQUQsSUFBWSxDQUFDQSxRQUFRTixRQUF6QixFQUFtQyxPQUFPLElBQVA7QUFDbkMsYUFBT00sUUFBUU4sUUFBUixDQUFpQmtDLElBQWpCLENBQXNCUyxPQUE3QjtBQUNELEtBSE0sQ0FBUDtBQUlELEdBekt3QjtBQTBLekJDLGVBMUt5QiwyQkEwS1Q7QUFDZCxXQUFPdkMsUUFBUUMsT0FBUixDQUFnQixLQUFLNUIsYUFBckIsRUFBb0NtQixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsbUJBQVc7QUFDL0QsVUFBSSxDQUFDUSxPQUFELElBQVksQ0FBQ0EsUUFBUU4sUUFBekIsRUFBbUMsT0FBTyxLQUFQO0FBQ25DLGFBQU9NLFFBQVFOLFFBQVIsQ0FBaUJDLE9BQWpCLENBQXlCNEMsUUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQS9Ld0I7QUFnTHpCQyxZQWhMeUIsd0JBZ0xaO0FBQ1gsV0FBT3pDLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzVCLGFBQXJCLEVBQW9DbUIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLG1CQUFXO0FBQy9ELFVBQUksQ0FBQ1EsT0FBRCxJQUFZLENBQUNBLFFBQVFOLFFBQXpCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxhQUFPTSxRQUFRTixRQUFSLENBQWlCQyxPQUFqQixDQUF5QlgsS0FBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQXJMd0I7QUFzTHpCeUQsa0JBdEx5Qiw4QkFzTE47QUFDakIsV0FBTzFDLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzVCLGFBQXJCLEVBQW9DbUIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLG1CQUFXO0FBQy9ELFVBQUksQ0FBQ1EsT0FBRCxJQUFZLENBQUNBLFFBQVFOLFFBQXpCLEVBQW1DLE9BQU8sSUFBUDtBQUNuQyxhQUFPTSxRQUFRTixRQUFSLENBQWlCa0MsSUFBakIsQ0FBc0JjLFdBQTdCO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0EzTHdCO0FBNEx6QkMsY0E1THlCLDBCQTRMVjtBQUNiLFdBQU81QyxRQUFRQyxPQUFSLENBQWdCLEtBQUs1QixhQUFyQixFQUFvQ21CLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQztBQUFBLGFBQVdRLFFBQVFOLFFBQVIsQ0FBaUJrRCxPQUE1QjtBQUFBLEtBQS9DLENBQVA7QUFDRCxHQTlMd0I7QUErTHpCQyxnQkEvTHlCLDRCQStMUjtBQUNmLFdBQU85QyxRQUFRQyxPQUFSLENBQWdCLEtBQUs1QixhQUFyQixFQUFvQ21CLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQztBQUFBLGFBQVdRLFFBQVFOLFFBQVIsQ0FBaUJvRCxTQUE1QjtBQUFBLEtBQS9DLENBQVA7QUFDRCxHQWpNd0I7QUFrTXpCQyxXQWxNeUIsdUJBa01iO0FBQ1YsV0FBT2hELFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzVCLGFBQXJCLEVBQW9DbUIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLG1CQUFXO0FBQy9ELFVBQUksQ0FBQ1EsT0FBRCxJQUFZLENBQUNBLFFBQVFOLFFBQXJCLElBQWlDTSxRQUFRTixRQUFSLENBQWlCc0QsS0FBakIsQ0FBdUJDLE1BQTVELEVBQW9FLE9BQU8sSUFBUDtBQUNwRSxhQUFPLEtBQVA7QUFDRCxLQUhNLENBQVA7QUFJRCxHQXZNd0I7QUF3TXpCQyxhQXhNeUIseUJBd01YO0FBQ1osV0FBT25ELFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzVCLGFBQXJCLEVBQW9DbUIsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLG1CQUFXO0FBQy9ELFVBQUksQ0FBQ1EsT0FBRCxJQUFZLENBQUNBLFFBQVFOLFFBQXpCLEVBQW1DLE9BQU8sUUFBUDtBQUNuQyxhQUFPTSxRQUFRTixRQUFSLENBQWlCQyxPQUFqQixDQUF5QkMsTUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRDtBQTdNd0IsQ0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJN0IsY0FBSixDQUFZO0FBQ1ZDLFVBQVE7QUFDTkMsU0FBSztBQUNILHFCQUFlLFVBRFo7QUFFSCx1QkFBaUI7QUFGZDtBQURDLEdBREU7QUFRVmtGLGdCQUFjLEtBUko7QUFVVmpFLFVBVlUsc0JBVUM7QUFBQTs7QUFDVGEsWUFBUUMsT0FBUixDQUFnQkMsSUFBaEIsQ0FBcUJWLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxtQkFBVztBQUN6QyxVQUFJUSxXQUFXQSxRQUFRTixRQUFuQixJQUErQk0sUUFBUUwsT0FBdkMsSUFBa0RLLFFBQVFOLFFBQVIsQ0FBaUJzRCxLQUFqQixDQUF1QkMsTUFBN0UsRUFBcUY7QUFDbkYsY0FBS0csS0FBTCxDQUFXLElBQVg7QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQWhCUztBQWlCVkEsT0FqQlUsaUJBaUJKQyxFQWpCSSxFQWlCQTtBQUNSLFFBQUksQ0FBQ0EsRUFBRCxJQUFPLEtBQUtGLFlBQWhCLEVBQThCLE9BQU8sS0FBUDtBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUFLQSxZQUFMLEdBQW9CLElBQXBCO0FBQ0Q7QUEvQlMsQ0FBWixFOzs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7QUFDQTs7OztBQUVlLG9CQUFXO0FBRXhCLFNBQU8sSUFBSUcsaUJBQUosQ0FBZTtBQUN0QnRGLFlBQVE7QUFDSkMsV0FBSztBQUNILHdDQUFnQyxRQUQ3QjtBQUVILDZCQUFxQixtQkFGbEI7QUFHSCxtQ0FBMkI7QUFIeEI7QUFERCxLQURjO0FBU3BCc0YsYUFBUyxJQVRXO0FBVXBCQyxZQUFRLEdBVlk7QUFZcEJ0RSxZQVpvQixzQkFZVDtBQUNULFdBQUt1RSxNQUFMO0FBQ0QsS0FkbUI7QUFnQnBCQSxVQWhCb0Isb0JBZ0JYO0FBQUE7O0FBQ1BDLHFCQUFPbkUsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLG9CQUFZO0FBQ3RDLGNBQUt5RCxNQUFMLEdBQWN2RCxTQUFTa0MsSUFBVCxDQUFjK0IsVUFBZCxLQUE2QixNQUEzQztBQUNELE9BRkQ7QUFHRCxLQXBCbUI7QUFxQnBCQyxhQXJCb0IscUJBcUJWQyxHQXJCVSxFQXFCTDtBQUNiLFdBQUtMLE1BQUwsR0FBY0ssR0FBZDtBQUNELEtBdkJtQjtBQXdCcEJDLHFCQXhCb0IsNkJBd0JGQyxRQXhCRSxFQXdCUTtBQUMxQixVQUFJLEtBQUtkLE1BQVQsRUFBaUI7QUFDZixZQUFJYyxZQUFZLENBQUMsS0FBS0MsU0FBdEIsRUFBaUM7QUFDL0IsZUFBS0MsY0FBTDtBQUNELFNBRkQsTUFHSyxJQUFJLENBQUNGLFFBQUQsSUFBYSxLQUFLQyxTQUF0QixFQUFpQztBQUNwQyxlQUFLRSxhQUFMO0FBQ0Q7QUFDRixPQVBELE1BUUssSUFBSSxLQUFLRixTQUFULEVBQW9CO0FBQ3ZCLGFBQUtFLGFBQUw7QUFDRDtBQUNGLEtBcENtQjtBQXFDcEJELGtCQXJDb0IsNEJBcUNIO0FBQ2YsVUFBSSxDQUFDLEtBQUtELFNBQVYsRUFBcUI7QUFDbkIsWUFBTVQsVUFBVSxLQUFLQSxPQUFMLEdBQWUsS0FBS1ksU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQS9CO0FBQ0FwRCxlQUFPM0IsUUFBUCxDQUFnQmdGLElBQWhCLENBQXFCQyxnQkFBckIsQ0FBc0MsU0FBdEMsRUFBaURmLE9BQWpELEVBQTBELEtBQTFEO0FBQ0EsYUFBS1MsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0YsS0EzQ21CO0FBNENwQkUsaUJBNUNvQiwyQkE0Q0o7QUFDZCxVQUFJLEtBQUtGLFNBQVQsRUFBb0I7QUFDbEJoRCxlQUFPM0IsUUFBUCxDQUFnQmdGLElBQWhCLENBQXFCRSxtQkFBckIsQ0FBeUMsU0FBekMsRUFBb0QsS0FBS2hCLE9BQXpELEVBQWtFLEtBQWxFO0FBQ0EsYUFBS1MsU0FBTCxHQUFpQixLQUFqQjtBQUNEO0FBQ0YsS0FqRG1CO0FBa0RwQkcsYUFsRG9CLHVCQWtEUjtBQUNWLFdBQUtELGFBQUw7QUFDQSxVQUFNTSxZQUFZeEQsT0FBT3lELFlBQVAsR0FBc0JDLFFBQXRCLEVBQWxCO0FBQ0EsVUFBSUYsU0FBSixFQUFlLEtBQUtHLElBQUwsQ0FBVSxlQUFWLEVBQTJCLEtBQUtuQixNQUFoQztBQUNoQjtBQXREbUIsR0FBZixDQUFQO0FBd0RELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REQ7Ozs7Ozs7Ozs7SUFFcUJvQixTOzs7QUFFbkIsdUJBQWM7QUFBQTs7QUFDWixTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7Ozs7d0JBRUdELEksRUFBTTtBQUNSQSxhQUFPQSxRQUFRLEtBQUtBLElBQXBCO0FBRUEsVUFBSUUsV0FBV0YsS0FBS0UsUUFBcEI7QUFBQSxVQUNJQyxJQUFJRCxTQUFTbkUsTUFEakI7QUFBQSxVQUVJa0UsU0FBU0MsU0FBUyxDQUFULENBRmI7QUFJQUYsV0FBS0ksT0FBTCxDQUFhQyxRQUFiLEdBQXdCLElBQXhCO0FBQ0FKLGFBQU9LLEVBQVAsR0FBWSw0QkFBWjs7QUFFQSxhQUFPSCxHQUFQO0FBQ0VELGlCQUFTQyxDQUFULEVBQVlJLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLHFCQUExQjtBQURGOztBQUdBLFdBQUtSLElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJRCxPQUFPLEtBQUtBLElBQWhCO0FBQUEsVUFDSUMsU0FBUyxLQUFLQSxNQURsQjtBQUFBLFVBRUlDLFdBQVdGLEtBQUtFLFFBRnBCO0FBQUEsVUFHSUMsSUFBSUQsU0FBU25FLE1BSGpCO0FBS0FrRSxhQUFPSyxFQUFQLEdBQVksRUFBWjtBQUNBTixXQUFLSSxPQUFMLENBQWFDLFFBQWIsR0FBd0IsS0FBeEI7O0FBRUEsYUFBT0YsR0FBUDtBQUNFRCxpQkFBU0MsQ0FBVCxFQUFZSSxTQUFaLENBQXNCRSxNQUF0QixDQUE2QixxQkFBN0I7QUFERjtBQUVEOzs7bUNBQ2NDLEUsRUFBSTtBQUNqQixVQUFJQSxPQUFPQSxLQUFLdkUsT0FBTzNCLFFBQVAsQ0FBZ0JtRyxjQUFoQixDQUErQiw0QkFBL0IsQ0FBWixDQUFKLEVBQ0VELEdBQUdFLGNBQUgsQ0FBa0I7QUFBRUMsa0JBQVUsUUFBWjtBQUFzQkMsZUFBTztBQUE3QixPQUFsQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNIOztBQUNBOzs7O0FBRWUsb0JBQVc7QUFDeEIsU0FBTyxJQUFJckMsaUJBQUosQ0FBZTtBQUNwQnRGLFlBQVE7QUFDTkMsV0FBSztBQUNILHlCQUFpQjtBQURkO0FBREMsS0FEWTtBQU1wQmdGLFlBQVEsS0FOWTtBQVFwQi9ELFlBUm9CLHNCQVFUO0FBQ1QsV0FBSzBHLFFBQUwsQ0FBYyxJQUFkO0FBQ0QsS0FWbUI7QUFZcEJBLFlBWm9CLG9CQVlYdkMsRUFaVyxFQVlQO0FBQ1gsVUFBSUEsTUFBTSxDQUFDLEtBQUtKLE1BQWhCLEVBQXdCO0FBQ3RCLGFBQUs0QyxlQUFMO0FBQ0EsYUFBSzVDLE1BQUwsR0FBYyxJQUFkO0FBQ0QsT0FIRCxNQUlLLElBQUksQ0FBQ0ksRUFBRCxJQUFPLEtBQUtKLE1BQWhCLEVBQXdCO0FBQzNCLGFBQUs2QyxlQUFMO0FBQ0EsYUFBSzdDLE1BQUwsR0FBYyxLQUFkO0FBQ0Q7QUFDRixLQXJCbUI7QUFzQnBCNEMsbUJBdEJvQiw2QkFzQkY7QUFDaEIsV0FBS0UsV0FBTCxDQUFpQixXQUFqQixFQUE4QixhQUFLO0FBQ2pDLFlBQUlwRixFQUFFcUYsTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ2xCLGNBQUlyRixFQUFFc0YsTUFBRixDQUFTYixTQUFULENBQW1CYyxRQUFuQixDQUE0QixzQkFBNUIsQ0FBSixFQUF5RDtBQUN2RHhDLDJCQUFPNUUsSUFBUCxHQUFjNkIsRUFBRXNGLE1BQUYsQ0FBU0UsWUFBVCxDQUFzQixZQUF0QixDQUFkO0FBQ0QsV0FGRCxNQUdLekMsZUFBTzVFLElBQVAsR0FBYyxFQUFkO0FBQ047QUFDRixPQVBELEVBT0drQyxPQUFPM0IsUUFQVjtBQVFEO0FBL0JtQixHQUFmLENBQVA7QUFpQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDs7Ozs7Ozs7OztJQUVxQitHLEs7OztBQUVuQixpQkFBWTVDLE1BQVosRUFBb0JLLEdBQXBCLEVBQXlCd0MsV0FBekIsRUFBc0NySCxLQUF0QyxFQUE2QztBQUFBOztBQUMzQyxRQUFJd0YsU0FBSixFQUFlOEIsUUFBZjtBQUVGLFNBQUs5QyxNQUFMLEdBQWNBLE1BQWQ7QUFDQWdCLGdCQUFZLEtBQUtBLFNBQUwsR0FBaUJoQixPQUFPZ0IsU0FBcEM7QUFDRSxTQUFLeEYsS0FBTCxHQUFhMEUsZUFBT3pFLFlBQVAsR0FBc0J1RSxPQUFPK0MsT0FBN0IsR0FBdUN2SCxLQUFwRDtBQUVBc0gsZUFBVztBQUNURSxhQUFPLEVBREU7QUFFVHRCLGdCQUFVLEtBRkQ7QUFHVHVCLGFBQU8sSUFIRTtBQUlUQyxZQUFNbEMsVUFBVWtDLElBSlA7QUFLVEMsWUFBTTtBQUxHLEtBQVg7O0FBT0EsU0FBSyxJQUFJQyxDQUFULElBQWNOLFFBQWQsRUFBd0I7QUFDdEIsVUFBSSxDQUFDRCxZQUFZNUYsY0FBWixDQUEyQm1HLENBQTNCLENBQUwsRUFBb0M7QUFDbENQLG9CQUFZTyxDQUFaLElBQWlCTixTQUFTTSxDQUFULENBQWpCO0FBQ0Q7QUFDRjs7QUFDRFAsZ0JBQVlsQixFQUFaLEdBQWlCa0IsWUFBWWxCLEVBQVosSUFBa0IsRUFBRTNCLE9BQU9xRCxPQUE1QztBQUNGLFNBQUsxQixFQUFMLEdBQVVrQixZQUFZbEIsRUFBdEI7QUFDQSxTQUFLMkIsTUFBTCxHQUFjdEMsVUFBVXNDLE1BQXhCO0FBRUEsUUFBSUMsUUFBUSxLQUFLQSxLQUFMLEdBQWF2QyxVQUFVdUMsS0FBbkM7QUFFQSxTQUFLQyxXQUFMLEdBQW1CRCxNQUFNQyxXQUF6QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJGLE1BQU1FLFNBQXZCO0FBRUEsU0FBS2xDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRSxTQUFLbUMsVUFBTCxHQUFrQixFQUFsQjtBQUVGLFNBQUtDLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFFQSxTQUFLbkMsT0FBTCxHQUFlO0FBQ2RFLFVBQUlrQixZQUFZbEIsRUFERjtBQUVkdEIsV0FBS0EsR0FGUztBQUdkMkMsYUFBT0gsWUFBWUcsS0FITDtBQUlkQyxhQUFPSixZQUFZSSxLQUpMO0FBS2RDLFlBQU1MLFlBQVlLLElBTEo7QUFNZHhCLGdCQUFVbUIsWUFBWW5CLFFBTlI7QUFPWHlCLFlBQU1OLFlBQVlNLElBUFA7QUFRWHJHLGNBQVErRixZQUFZL0Y7QUFSVCxLQUFmOztBQVdFLFFBQUksS0FBS3RCLEtBQUwsS0FBZTBFLGVBQU96RSxZQUFQLElBQXVCLENBQUMsS0FBS2dHLE9BQUwsQ0FBYXdCLEtBQXBELENBQUosRUFBZ0U7QUFDOUQsV0FBS1ksY0FBTDtBQUNEO0FBQ0Y7Ozs7MkJBRUtOLEssRUFBTztBQUNYQSxjQUFRQSxTQUFTLEtBQUtBLEtBQXRCO0FBQ0EsVUFBSXZDLFlBQVksS0FBS0EsU0FBckI7QUFBQSxVQUNJZ0MsUUFBUSxLQUFLdkIsT0FBTCxDQUFhdUIsS0FEekI7QUFBQSxVQUVJYyxRQUFROUMsVUFBVThDLEtBRnRCO0FBQUEsVUFHSUMsSUFBSUQsTUFBTTFHLE1BSGQ7QUFBQSxVQUlJbUUsV0FBVyxLQUFLQSxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsSUFBaUIsS0FBS3lDLGNBQUwsQ0FBb0JoQixLQUFwQixFQUEyQmUsQ0FBM0IsQ0FKaEQ7QUFBQSxVQUtJMUcsSUFBSSxDQUxSO0FBQUEsVUFNSTRHLFlBQVlGLElBQUksQ0FOcEI7QUFBQSxVQU9JRyxJQVBKOztBQVNBLGFBQU83RyxJQUFJMEcsQ0FBWCxFQUFjMUcsR0FBZCxFQUFtQjtBQUNqQjZHLGVBQU9KLE1BQU16RyxDQUFOLENBQVA7QUFDQWtHLGNBQU1ZLGtCQUFOLENBQXlCRCxJQUF6QjtBQUNBLFlBQUksQ0FBQzdHLENBQUwsRUFBUWtHLE1BQU1hLFFBQU4sQ0FBZUYsSUFBZixFQUFxQixLQUFLVixXQUExQjtBQUVSLFlBQUluRyxNQUFNNEcsU0FBVixFQUNFVixNQUFNYyxNQUFOLENBQWFILElBQWIsRUFBbUIsS0FBS1QsU0FBeEI7QUFFRkYsY0FBTWUsZ0JBQU4sQ0FBdUIvQyxTQUFTbEUsQ0FBVCxDQUF2QjtBQUNBLGFBQUtxRyxVQUFMLENBQWdCYSxJQUFoQixDQUFxQmhELFNBQVNsRSxDQUFULEVBQVltSCxVQUFqQztBQUVBTixhQUFLTSxVQUFMLENBQWdCQyxTQUFoQjtBQUNEOztBQUVELFdBQUtDLGNBQUwsQ0FBb0JULFNBQXBCO0FBRUEsVUFBSSxLQUFLeEMsT0FBTCxDQUFhQyxRQUFqQixFQUEyQixLQUFLMUIsTUFBTCxDQUFZMkUsV0FBWixDQUF3QixJQUF4QixFQUE4QixLQUE5QjtBQUUzQixVQUFJLENBQUMsS0FBS25KLEtBQU4sS0FBZ0IwRSxlQUFPekUsWUFBUCxJQUF1QixDQUFDLEtBQUtnRyxPQUFMLENBQWF3QixLQUFyRCxDQUFKLEVBQWlFLEtBQUsyQixRQUFMO0FBRW5FLFdBQUtDLHNCQUFMO0FBRUEsYUFBTyxJQUFQO0FBQ0E7Ozs2Q0FDeUI7QUFDdkIsVUFBTXRELFdBQVcsS0FBS0EsUUFBdEI7QUFEdUI7QUFBQTtBQUFBOztBQUFBO0FBRXZCLDZCQUFvQkEsUUFBcEIsOEhBQThCO0FBQUEsY0FBckJ1RCxPQUFxQjtBQUM1QkEsa0JBQVFoRSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxLQUFLZCxNQUFMLENBQVkrRSxLQUFaLENBQWtCLElBQWxCLEVBQXdCLEtBQUtDLE9BQTdCLENBQWxDLEVBQXlFLEtBQXpFO0FBQ0Q7QUFKc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUt4Qjs7OzRCQUNPN0gsQyxFQUFHO0FBQ1QsVUFBSThILEtBQUo7O0FBQ0EsVUFBSTlILEVBQUVzRixNQUFOLEVBQWM7QUFDWnRGLFVBQUUrSCxlQUFGO0FBQ0FoRix1QkFBTzVFLElBQVAsR0FBYzZCLEVBQUVzRixNQUFGLENBQVNFLFlBQVQsQ0FBc0IsWUFBdEIsQ0FBZDtBQUNBc0MsZ0JBQVEsY0FBUjtBQUNELE9BSkQsTUFJTztBQUNML0UsdUJBQU81RSxJQUFQLEdBQWM2QixJQUFJLElBQWxCO0FBQ0E4SCxnQkFBUSxnQkFBUjtBQUNEOztBQUNELFdBQUtqRixNQUFMLENBQVltQixJQUFaLENBQWlCOEQsS0FBakIsRUFBd0I7QUFDdEJ0RCxZQUFJLEtBQUtBLEVBRGE7QUFFdEJELGtCQUFVLENBQUMsQ0FBQyxLQUFLRCxPQUFMLENBQWFDLFFBRkg7QUFHdEJ5QixjQUFNLENBQUMsQ0FBQyxLQUFLMUIsT0FBTCxDQUFhMEI7QUFIQyxPQUF4QjtBQUtEOzs7bUNBQ2NZLEMsRUFBR29CLGdCLEVBQWtCO0FBQ2xDLFVBQUk1RCxXQUFXLEtBQUtBLFFBQXBCO0FBQ0F3QyxVQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFiLEdBQXdCQSxDQUF4QixHQUE0QnhDLFNBQVNuRSxNQUFULEdBQWtCLENBQWxEO0FBQ0EsVUFBTWdJLGVBQWU3RCxTQUFTLENBQVQsQ0FBckI7QUFDQSxVQUFNOEQsY0FBYzlELFNBQVN3QyxDQUFULENBQXBCO0FBQ0EsVUFBTXVCLGNBQWNGLGFBQWFaLFVBQWpDO0FBQ0EsVUFBTWUsYUFBYUYsWUFBWWIsVUFBL0I7QUFDQSxVQUFJZ0IsVUFBSixFQUFnQkMsU0FBaEI7QUFFQSxXQUFLOUIsa0JBQUwsR0FBMEIsS0FBSytCLFVBQUwsQ0FBZ0JKLFdBQWhCLEVBQTZCRixZQUE3QixFQUEyQyxJQUEzQyxJQUFtRCxDQUE3RTtBQUNBLFdBQUt4QixpQkFBTCxHQUF5QixLQUFLOEIsVUFBTCxDQUFnQkgsVUFBaEIsRUFBNEJGLFdBQTVCLEVBQXlDLElBQXpDLENBQXpCO0FBRUFHLG1CQUFhSixhQUFhTyxlQUExQjtBQUNBRixrQkFBWUosWUFBWU0sZUFBeEI7QUFFQSxVQUFJSCxjQUFjQSxXQUFXSSxRQUFYLEtBQXdCLENBQTFDLEVBQTZDLEtBQUtqQyxrQkFBTCxJQUEyQixDQUEzQjtBQUM3QyxVQUFJLENBQUM4QixTQUFELElBQWNBLFVBQVVHLFFBQVYsS0FBdUIsQ0FBckMsSUFBMENOLGdCQUFnQkMsVUFBOUQsRUFBMEUsS0FBSzNCLGlCQUFMLElBQTBCLENBQTFCO0FBRTFFLFVBQUksS0FBS0Qsa0JBQUwsR0FBMEIsQ0FBOUIsRUFBaUMsS0FBS0Esa0JBQUwsR0FBMEIsQ0FBMUI7QUFDakMsVUFBSSxLQUFLQyxpQkFBTCxHQUF5QixDQUE3QixFQUFnQyxLQUFLQSxpQkFBTCxHQUF5QixDQUF6Qjs7QUFFaEMsVUFBSXVCLGdCQUFKLEVBQXNCO0FBQ3BCLGFBQUszQixXQUFMLEdBQW1CZ0MsY0FBY0EsV0FBV0ssSUFBekIsR0FBZ0NMLFdBQVdLLElBQVgsQ0FBZ0J6SSxNQUFoRCxHQUF5RCxDQUE1RTtBQUNBLGFBQUtxRyxTQUFMLEdBQWlCLEtBQUtILE1BQUwsR0FBYyxLQUFLRSxXQUFMLEdBQW1CLEtBQUsvQixPQUFMLENBQWF5QixJQUFiLENBQWtCOUYsTUFBbkQsR0FBNEQsS0FBS3FHLFNBQWxGO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtpQixjQUFMLENBQW9CekosU0FBcEIsRUFBK0IsSUFBL0IsRUFDSzJKLFFBREw7QUFHQSxhQUFPLElBQVA7QUFDRDs7OzJCQUNLO0FBQ04sVUFBSWxCLGFBQWEsS0FBS0EsVUFBdEI7QUFBQSxVQUNFbkMsV0FBVyxLQUFLQSxRQURsQjtBQUFBLFVBRUVDLElBQUlELFNBQVNuRSxNQUZmO0FBQUEsVUFHRTBJLFNBSEY7QUFBQSxVQUdhaEIsT0FIYjs7QUFLQSxhQUFPdEQsR0FBUCxFQUFZO0FBQ1hzRSxvQkFBWXBDLFdBQVdsQyxDQUFYLENBQVo7QUFDQXNELGtCQUFVdkQsU0FBU0MsQ0FBVCxDQUFWO0FBQ0FzRSxrQkFBVUMsWUFBVixDQUF1QmpCLFFBQVFrQixVQUEvQixFQUEyQ2xCLE9BQTNDO0FBQ0FnQixrQkFBVXJCLFNBQVY7QUFDQTs7QUFDRCxhQUFPLElBQVA7QUFDQTs7OzJCQUNNO0FBQ0osVUFBSWYsYUFBYSxLQUFLQSxVQUF0QjtBQUFBLFVBQ0kxQyxZQUFZLEtBQUtBLFNBQUwsQ0FBZWlGLElBRC9CO0FBQUEsVUFFSTFDLFFBQVEsS0FBS0EsS0FGakI7QUFJQUEsWUFBTWEsUUFBTixDQUFlVixXQUFXLENBQVgsRUFBY3dDLFVBQWQsQ0FBeUIsS0FBS3ZDLGtCQUE5QixDQUFmLEVBQWtFLEtBQUtILFdBQXZFO0FBQ0FELFlBQU1jLE1BQU4sQ0FBYVgsV0FBV0EsV0FBV3RHLE1BQVgsR0FBb0IsQ0FBL0IsRUFBa0M4SSxVQUFsQyxDQUE2QyxLQUFLdEMsaUJBQWxELENBQWIsRUFBbUYsS0FBS0gsU0FBeEY7QUFFQXpDLGdCQUFVbUYsZUFBVjtBQUNBbkYsZ0JBQVVvRixRQUFWLENBQW1CN0MsS0FBbkI7QUFFQSxXQUFLdkMsU0FBTCxDQUFlcUYsWUFBZjtBQUNBckYsZ0JBQVVzRixlQUFWO0FBRUEsYUFBTyxLQUFLQyxNQUFMLEVBQVA7QUFDRjs7OytCQUNVQyxNLEVBQVFDLEssRUFBT0Msa0IsRUFBb0I7QUFDN0MsVUFBSSxDQUFDRixNQUFELElBQVcsQ0FBQ0MsS0FBaEIsRUFBdUI7QUFBRSxlQUFPLElBQVA7QUFBYzs7QUFDdkMsVUFBSUUsV0FBV0Qsc0JBQXNCRCxNQUFNYixRQUFOLEtBQW1CLENBQXpDLEdBQTZDWSxPQUFPTixVQUFwRCxHQUFpRU0sT0FBT0csUUFBdkY7QUFBQSxVQUNFQyxJQUFJRCxTQUFTdkosTUFEZjtBQUFBLFVBRUVDLElBQUksQ0FGTjs7QUFJRSxhQUFRQSxJQUFJdUosQ0FBWixFQUFldkosR0FBZixFQUFvQjtBQUNsQixZQUFJc0osU0FBU3RKLENBQVQsTUFBZ0JvSixLQUFwQixFQUEyQjtBQUN6QixpQkFBT3BKLENBQVA7QUFDRDtBQUNGO0FBQ0g7OzttQ0FDYzJGLEssRUFBTzZELE0sRUFBUTtBQUM3QixVQUFJdEYsV0FBVyxFQUFmO0FBQUEsVUFDTWxFLElBQUksQ0FEVjtBQUFBLFVBRU15SCxPQUZOOztBQUlBLGFBQVF6SCxJQUFJd0osTUFBWixFQUFvQnhKLEdBQXBCLEVBQXlCO0FBQ3hCeUgsa0JBQVV0SCxPQUFPM0IsUUFBUCxDQUFnQmlMLGFBQWhCLENBQThCLE1BQTlCLENBQVY7QUFDR2hDLGdCQUFRbEQsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0Isc0JBQXRCO0FBQ0hpRCxnQkFBUWlDLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEIvRCxNQUFNZ0UsT0FBTixDQUFjLElBQWQsRUFBb0IsYUFBcEIsQ0FBOUI7QUFDQWxDLGdCQUFRaUMsWUFBUixDQUFxQixZQUFyQixFQUFtQyxLQUFLcEYsRUFBTCxHQUFVLEdBQVYsR0FBZ0J0RSxDQUFuRCxFQUp3QixDQUtyQjs7QUFDSGtFLGlCQUFTZ0QsSUFBVCxDQUFjTyxPQUFkO0FBQ0E7O0FBQ0QsYUFBT3ZELFFBQVA7QUFDQTs7OytCQUNXO0FBQ1QsVUFBTWdDLFFBQVEsS0FBS0EsS0FBbkI7QUFDQSxVQUFNdkMsWUFBWSxLQUFLQSxTQUF2QjtBQUNGLFVBQU1pRyxRQUFRMUQsTUFBTTJELGNBQXBCO0FBQ0EsVUFBTUMsTUFBTTVELE1BQU02RCxZQUFsQjtBQUNBLFVBQU1DLGFBQWEsS0FBSy9ELE1BQXhCO0FBQ0UsVUFBTWtELFNBQVMsS0FBS2pGLFFBQUwsQ0FBYyxDQUFkLEVBQWlCaUQsVUFBaEM7QUFDQSxVQUFNOEMsYUFBYWQsT0FBT2UsWUFBUCxDQUFvQixZQUFwQixDQUFuQjtBQUNGLFVBQU1DLFNBQVNoQixPQUFPaEMsVUFBdEI7QUFDRSxVQUFNaUQsY0FBY0QsT0FBT2hELFVBQVAsSUFBcUIsQ0FBekM7QUFDRixVQUFNa0QsT0FBTyxLQUFLL0Qsa0JBQWxCO0FBRUEsV0FBS2xDLE9BQUwsQ0FBYXdCLEtBQWIsR0FBcUI7QUFDcEIwRSxXQUFHLEtBQUtuRSxXQURZO0FBRXBCb0UsWUFBSU4sYUFBYSxJQUFiLEdBQW9CZCxPQUFPcUIsUUFGWDtBQUdwQkMsWUFBSUosSUFIZ0I7QUFJcEJLLFlBQUlQLE9BQU9LLFFBSlM7QUFLcEJHLFlBQUksS0FBS3RDLFVBQUwsQ0FBZ0I4QixNQUFoQixFQUF3QmhCLE1BQXhCLENBTGdCO0FBTXBCeUIsWUFBSVIsY0FBYyxLQUFLL0IsVUFBTCxDQUFnQitCLFdBQWhCLEVBQTZCRCxNQUE3QixDQUFkLEdBQXFEdk0sU0FOckM7QUFPcEJpTixZQUFJVCxlQUFlQSxZQUFZakQsVUFBM0IsR0FBd0MsS0FBS2tCLFVBQUwsQ0FBZ0IrQixZQUFZakQsVUFBNUIsRUFBd0NpRCxXQUF4QyxDQUF4QyxHQUErRnhNO0FBUC9FLE9BQXJCO0FBU0UsYUFBTyxLQUFLd0csT0FBTCxDQUFhd0IsS0FBcEI7QUFDRjs7O3FDQUNpQjtBQUNmLFVBQU1qQyxZQUFZLEtBQUtBLFNBQXZCO0FBQ0EsVUFBTW1ILGdCQUFnQixFQUF0QjtBQUNBLFVBQU1DLGNBQWMsRUFBcEI7QUFDQSxVQUFNdkgsT0FBT2hGLFNBQVNnRixJQUF0QjtBQUVBLFVBQUlvRyxRQUFRakcsVUFBVXFILFVBQXRCO0FBQUEsVUFDSWxCLE1BQU1uRyxVQUFVc0gsU0FEcEI7O0FBR0EsYUFBT3JCLFVBQVVwRyxJQUFqQixFQUF1QjtBQUNyQnNILHNCQUFjNUQsSUFBZCxDQUFtQixLQUFLbUIsVUFBTCxDQUFnQnVCLE1BQU16QyxVQUF0QixFQUFrQ3lDLEtBQWxDLENBQW5CO0FBQ0FBLGdCQUFRQSxNQUFNekMsVUFBZDtBQUNEOztBQUNELGFBQU8yQyxRQUFRdEcsSUFBZixFQUFxQjtBQUNuQnVILG9CQUFZN0QsSUFBWixDQUFpQixLQUFLbUIsVUFBTCxDQUFnQnlCLElBQUkzQyxVQUFwQixFQUFnQzJDLEdBQWhDLENBQWpCO0FBQ0FBLGNBQU1BLElBQUkzQyxVQUFWO0FBQ0Q7O0FBRUQsV0FBSy9DLE9BQUwsQ0FBYXdCLEtBQWIsR0FBcUI7QUFDbkJzRixXQUFHO0FBQ0RaLGFBQUcsS0FBS25FLFdBRFA7QUFFRGdGLGFBQUdMO0FBRkYsU0FEZ0I7QUFLbkJoTCxXQUFHO0FBQ0R3SyxhQUFHLEtBQUtsRSxTQURQO0FBRUQrRSxhQUFHSjtBQUZGO0FBTGdCLE9BQXJCO0FBVUEsYUFBTyxLQUFLM0csT0FBTCxDQUFhd0IsS0FBcEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdQSDs7QUFDQTs7OztBQUVlLG9CQUFXO0FBRXhCLFNBQU8sSUFBSW5ELGlCQUFKLENBQWU7QUFDdEJ0RixZQUFRO0FBQ0pDLFdBQUs7QUFDSCx3Q0FBZ0MsUUFEN0I7QUFFSCw2QkFBcUI7QUFGbEI7QUFERCxLQURjO0FBUXBCc0YsYUFBUyxJQVJXO0FBU3BCMEksY0FBVSxLQVRVO0FBVXBCQyxZQUFRLENBVlk7QUFZcEJoTixZQVpvQixzQkFZVDtBQUFBOztBQUNULFdBQUt1RSxNQUFMLEdBQWNqRSxJQUFkLENBQW1CO0FBQUEsZUFBTSxNQUFLdUssTUFBTCxFQUFOO0FBQUEsT0FBbkI7QUFDRCxLQWRtQjtBQWdCcEJ0RyxVQWhCb0Isb0JBZ0JYO0FBQUE7O0FBQ1AsYUFBT0MsZUFBT25FLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixvQkFBWTtBQUM3QyxlQUFLeUQsTUFBTCxHQUFjdkQsU0FBU2tDLElBQVQsQ0FBYytCLFVBQWQsS0FBNkIsT0FBM0M7QUFDQSxlQUFLZixPQUFMLEdBQWVsRCxTQUFTa0QsT0FBeEI7QUFDRCxPQUhNLENBQVA7QUFJRCxLQXJCbUI7QUFzQnBCbUgsVUF0Qm9CLG9CQXNCWDtBQUNQLFVBQU1vQyxRQUFRLEtBQUtDLEVBQUwsR0FBVXBMLE9BQU8zQixRQUFQLENBQWdCaUwsYUFBaEIsQ0FBOEIsU0FBOUIsQ0FBeEI7QUFDQSxVQUFNK0IsZ0JBQWdCLGlDQUF0QjtBQUNBLFVBQUlDLE9BQUosRUFBYUMsUUFBYjs7QUFDQSxXQUFLLElBQUlDLENBQVQsSUFBYyxLQUFLNUosT0FBbkIsRUFBNEI7QUFDMUIwSixrQkFBVSxLQUFLMUosT0FBTCxDQUFhNEosQ0FBYixFQUFnQmhHLEtBQWhCLENBQXNCaUcsS0FBdEIsQ0FBNEJKLGFBQTVCLENBQVY7O0FBQ0EsWUFBSUMsT0FBSixFQUFhO0FBQ1hDLHFCQUFXdkwsT0FBTzNCLFFBQVAsQ0FBZ0JpTCxhQUFoQixDQUE4QixjQUE5QixDQUFYO0FBQ0E2QixnQkFBTU8sV0FBTixDQUFrQkgsUUFBbEI7QUFDQUEsbUJBQVMvRixLQUFULENBQWVtRyxVQUFmLEdBQTRCTCxRQUFRTSxHQUFSLEVBQTVCO0FBQ0FMLG1CQUFTcEgsRUFBVCxHQUFjLG1CQUFtQnFILENBQWpDO0FBQ0Q7QUFDRjtBQUNGLEtBbkNtQjtBQW9DcEJsSCxVQXBDb0Isb0JBb0NYO0FBQ1AsVUFBSSxLQUFLMkcsUUFBVCxFQUFtQjtBQUNqQmpMLGVBQU8zQixRQUFQLENBQWdCZ0YsSUFBaEIsQ0FBcUJ3SSxXQUFyQixDQUFpQyxLQUFLVCxFQUF0QztBQUNBLGFBQUtBLEVBQUwsQ0FBUTdILG1CQUFSLENBQTRCLFdBQTVCLEVBQXlDLEtBQUtoQixPQUE5QyxFQUF1RCxLQUF2RDtBQUNBLGFBQUswSSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRixLQTFDbUI7QUEyQ3BCYSxRQTNDb0Isa0JBMkNiO0FBQ0wsVUFBTVgsUUFBUSxLQUFLQyxFQUFuQjtBQUNBLFVBQU01RixRQUFRMkYsTUFBTTNGLEtBQXBCO0FBQ0EsVUFBSXVHLFdBQUo7O0FBRUEsVUFBSSxDQUFDLEtBQUtkLFFBQVYsRUFBb0I7QUFDbEJqTCxlQUFPM0IsUUFBUCxDQUFnQmdGLElBQWhCLENBQXFCcUksV0FBckIsQ0FBaUNQLEtBQWpDO0FBQ0EsWUFBTTVJLFVBQVUsS0FBS0EsT0FBTCxHQUFlLEtBQUt5SixXQUFMLENBQWlCNUksSUFBakIsQ0FBc0IsSUFBdEIsQ0FBL0I7QUFDQStILGNBQU03SCxnQkFBTixDQUF1QixXQUF2QixFQUFvQ2YsT0FBcEMsRUFBNkMsS0FBN0M7QUFDQSxhQUFLMEksUUFBTCxHQUFnQixJQUFoQjtBQUVBLFlBQU1nQixvQkFBb0JqTSxPQUFPeUQsWUFBUCxHQUFzQnlJLFVBQXRCLENBQWlDLENBQWpDLEVBQW9DQyxxQkFBcEMsRUFBMUI7QUFFQTNHLGNBQU00RyxHQUFOLEdBQVlILGtCQUFrQkcsR0FBbEIsR0FBd0JILGtCQUFrQmYsTUFBMUMsR0FBbURsTCxPQUFPcU0sT0FBMUQsR0FBb0UsSUFBaEY7QUFDQTdHLGNBQU04RyxJQUFOLEdBQWFMLGtCQUFrQkssSUFBbEIsR0FBeUJ0TSxPQUFPdU0sT0FBaEMsR0FBMEMsSUFBdkQ7QUFFQVIsc0JBQWNaLE1BQU1xQixZQUFwQjtBQUVBaEgsY0FBTTRHLEdBQU4sR0FBWUssU0FBU2pILE1BQU00RyxHQUFmLElBQXNCTCxXQUF0QixHQUFvQyxJQUFoRDtBQUNELE9BZEQsTUFlSyxJQUFJLENBQUNBLGNBQWNaLE1BQU1xQixZQUFyQixNQUF1QyxLQUFLdEIsTUFBaEQsRUFBd0Q7QUFDM0QxRixjQUFNNEcsR0FBTixHQUFZSyxTQUFTakgsTUFBTTRHLEdBQWYsSUFBc0JMLFdBQXRCLEdBQW9DLEtBQUtiLE1BQXpDLEdBQWtELElBQTlEO0FBQ0Q7O0FBQ0QsV0FBS0EsTUFBTCxHQUFjYSxXQUFkO0FBQ0QsS0FuRW1CO0FBb0VwQmpKLHFCQXBFb0IsNkJBb0VGQyxRQXBFRSxFQW9FUTtBQUMxQixVQUFJLEtBQUtkLE1BQVQsRUFBaUI7QUFDZixZQUFJLENBQUNjLFFBQUwsRUFBZSxLQUFLdUIsTUFBTCxHQUFmLEtBQ0ssS0FBS3dILElBQUw7QUFDTixPQUhELE1BSUssSUFBSSxLQUFLYixRQUFULEVBQW1CO0FBQ3RCLGFBQUszRyxNQUFMO0FBQ0Q7QUFDRixLQTVFbUI7QUE2RXBCMEgsZUE3RW9CLHVCQTZFUnJNLENBN0VRLEVBNkVMO0FBQ2JBLFFBQUUrTSxjQUFGO0FBQ0EvTSxRQUFFK0gsZUFBRjtBQUNBLFVBQU0wRCxLQUFLekwsRUFBRXNGLE1BQWI7O0FBQ0EsVUFBSW1HLEdBQUdmLFFBQUgsS0FBZ0IsY0FBcEIsRUFBb0M7QUFDbEMsYUFBSzFHLElBQUwsQ0FBVSxzQkFBVixFQUFrQ3lILEdBQUdqSCxFQUFILENBQU13SSxLQUFOLENBQVksSUFBWixFQUFrQmYsR0FBbEIsRUFBbEM7QUFDRDtBQUNGO0FBcEZtQixHQUFmLENBQVA7QUFzRkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVlLG9CQUFXO0FBQ3hCO0FBQ0QsU0FBTyxJQUFJN08sY0FBSixDQUFZO0FBQ2xCQyxZQUFRO0FBQ1BDLFdBQUs7QUFDSix1QkFBZSxVQURYO0FBRUosOEJBQXNCLGFBRmxCO0FBR0EsMEJBQWtCLFVBSGxCO0FBSUEsZ0NBQXdCLGFBSnhCO0FBS0EseUJBQWlCLGFBTGpCO0FBTUEsMEJBQWtCLFVBTmxCO0FBT0EscUNBQTZCLHVCQVA3QjtBQVFBLGdDQUF3Qix1QkFSeEI7QUFTQSxpQkFBUyxhQVRUO0FBVUEsa0JBQVUsZ0JBVlY7QUFXQSxpQkFBUyxRQVhUO0FBWUEsaUJBQVMsYUFaVDtBQWFBLGlCQUFTLFNBYlQ7QUFjQSxpQkFBUyxNQWRUO0FBZUEsd0JBQWdCLFVBZmhCO0FBZ0JBLHdCQUFnQixVQWhCaEI7QUFpQkosOEJBQXNCLFVBakJsQjtBQWtCSiw0QkFBb0IsVUFsQmhCO0FBbUJBLDZCQUFxQixVQW5CckI7QUFvQkosNkJBQXFCLGFBcEJqQjtBQXFCQSxvQ0FBNEIsUUFyQjVCO0FBc0JBLDRCQUFvQixhQXRCcEI7QUF1QkEsbUNBQTJCLGdCQXZCM0I7QUF3QkEsd0JBQWdCLFNBeEJoQjtBQXlCQSx5QkFBaUIsT0F6QmpCO0FBMEJBLGdDQUF3QixNQTFCeEI7QUEyQkEscUNBQTZCLFFBM0I3QjtBQTRCQSx3QkFBZ0IsTUE1QmhCO0FBNkJBLHdCQUFnQixNQTdCaEI7QUE4QkEsd0JBQWdCLE1BOUJoQjtBQStCQSw2QkFBcUIsVUEvQnJCO0FBZ0NBLHNDQUE4QixrQkFoQzlCO0FBaUNBLDhCQUFzQixrQkFqQ3RCO0FBa0NBLHdCQUFnQixVQWxDaEI7QUFtQ0Esc0JBQWM7QUFuQ2Q7QUFERSxLQURVO0FBd0NsQnVHLGVBQVcsSUF4Q087QUF5Q2xCb0osVUFBTSxFQXpDWTtBQTBDbEJDLFlBQVEsRUExQ1U7QUEyQ2xCQywwQkFBc0IsRUEzQ0o7QUE0Q2xCQyw0QkFBd0IsRUE1Q047QUE2Q2hCN0ksY0FBVSxJQTdDTTtBQThDaEI4SSxxQkFBaUIsSUE5Q0Q7QUErQ2xCbkgsYUFBUyxDQS9DUztBQWdEbEJvSCxtQkFBZSxDQUFDLENBaERFO0FBa0RoQkMsWUFsRGdCLG9CQWtEUHZQLE9BbERPLEVBa0RFO0FBQ2hCLFVBQU13UCxJQUFJeFAsUUFBUWlDLE1BQWxCO0FBQ0EsVUFBTWhDLFNBQVM4RSxlQUFPOUUsTUFBdEI7QUFDQSxVQUFNd1AsTUFBTSxFQUFaOztBQUVBLFdBQUssSUFBSXZOLElBQUksQ0FBUixFQUFXVixLQUFoQixFQUF1QlUsSUFBSXNOLENBQTNCLEVBQThCdE4sR0FBOUIsRUFBbUM7QUFFakNWLGdCQUFReEIsUUFBUWtDLENBQVIsQ0FBUjs7QUFFQSxZQUFJLENBQUNqQyxNQUFELElBQVd1QixNQUFNMEcsT0FBckIsRUFBOEI7QUFDNUIsaUJBQU8sS0FBS0EsT0FBTCxHQUFlMUcsTUFBTTBHLE9BQTVCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSXdILFFBQVEsQ0FBQ2xPLE1BQU1rTyxLQUFOLElBQWUsRUFBaEIsRUFBb0JDLE1BQXBCLENBQTJCbk8sTUFBTW9PLElBQU4sSUFBYyxFQUF6QyxDQUFaO0FBQUEsY0FDSTNILElBQUl5SCxNQUFNek4sTUFEZDs7QUFHQSxjQUFJZ0csQ0FBSixFQUFPO0FBQ0wsbUJBQU9BLEdBQVAsRUFBWTtBQUNWd0gsa0JBQUlyRyxJQUFKLENBQVNzRyxNQUFNekgsQ0FBTixFQUFTekIsRUFBbEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFDRCxXQUFLMEIsT0FBTCxHQUFlMkgsS0FBS0MsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQk4sR0FBckIsQ0FBZjtBQUNELEtBekVlO0FBMEVsQnZKLFFBMUVrQixnQkEwRWJoQixHQTFFYSxFQTBFUndGLElBMUVRLEVBMEVGckssS0ExRUUsRUEwRUs7QUFDdEIsV0FBSzZPLE1BQUwsQ0FBWWpOLE1BQVosR0FBcUIsQ0FBckI7QUFFRyxVQUFNaUUsT0FBTyxJQUFJdUIsaUJBQUosQ0FBVSxJQUFWLEVBQWdCdkMsR0FBaEIsRUFBcUJ3RixJQUFyQixFQUEyQnJLLEtBQTNCLEVBQWtDK0ssTUFBbEMsRUFBYjtBQUVBLFVBQUlWLEtBQUtzRixRQUFULEVBQW1CLEtBQUtoSyxJQUFMLENBQVUsVUFBVixFQUFzQkUsSUFBdEIsRUFBNEJ3RSxLQUFLc0YsUUFBakM7QUFFdEIsYUFBTzlKLElBQVA7QUFDQSxLQWxGaUI7QUFtRmxCK0osUUFuRmtCLGdCQW1GYkMsVUFuRmEsRUFtRkQ7QUFDYixVQUFJbkwsZUFBTzlFLE1BQVgsRUFBbUI7QUFFdEIsVUFBSWdQLE9BQU8sS0FBS0EsSUFBaEI7O0FBRUEsVUFBSUEsS0FBS2hOLE1BQVQsRUFBaUI7QUFDWixZQUFNaUUsT0FBTyxLQUFLK0ksSUFBTCxDQUFVaEIsR0FBVixFQUFiO0FBQ0EsWUFBTXpILEtBQUtOLEtBQUtNLEVBQWhCO0FBRUEsYUFBSzBJLE1BQUwsQ0FBWTlGLElBQVosQ0FBaUJsRCxLQUFLK0osSUFBTCxFQUFqQjtBQUVBLFlBQUksS0FBSzFKLFFBQVQsRUFBbUIsS0FBSzRKLFlBQUw7QUFFbkIsYUFBS25LLElBQUwsQ0FBVSxjQUFWLEVBQTBCUSxFQUExQjtBQUNEOztBQUVEMEosb0JBQWMsS0FBS3RNLFFBQUwsRUFBZDtBQUNILEtBcEdpQjtBQXFHbEJ3TSxRQXJHa0IsZ0JBcUdiRixVQXJHYSxFQXFHRDtBQUNiLFVBQUluTCxlQUFPOUUsTUFBWCxFQUFtQjtBQUVuQixVQUFJaVAsU0FBUyxLQUFLQSxNQUFsQjs7QUFFSCxVQUFJQSxPQUFPak4sTUFBWCxFQUFtQjtBQUNkLFlBQU1pRSxPQUFPLEtBQUtnSixNQUFMLENBQVlqQixHQUFaLEVBQWI7QUFFQSxhQUFLZ0IsSUFBTCxDQUFVN0YsSUFBVixDQUFlbEQsS0FBS2tLLElBQUwsRUFBZjtBQUVBLGFBQUtwSyxJQUFMLENBQVUsZUFBVixFQUEyQixDQUFDRSxJQUFELENBQTNCO0FBQ0Q7O0FBRURnSyxvQkFBYyxLQUFLdE0sUUFBTCxFQUFkO0FBQ0gsS0FuSGlCO0FBb0hoQnlNLFVBcEhnQixrQkFvSFRuTyxDQXBIUyxFQW9ITjtBQUNSLFVBQUkyQyxTQUFTLElBQWI7QUFBQSxVQUNJb0ssT0FBTyxLQUFLQSxJQURoQjtBQUFBLFVBRUlPLElBQUlQLEtBQUtoTixNQUZiO0FBQUEsVUFHSXFPLGNBQWMsQ0FBQ3BPLENBQUQsQ0FIbEI7QUFBQSxVQUlJcU8sVUFBVSxDQUFDck8sQ0FBRCxDQUpkO0FBQUEsVUFLSWdFLElBTEo7QUFBQSxVQUtVc0ssVUFMVjs7QUFPQSxlQUFTQywwQkFBVCxDQUFvQ0MsQ0FBcEMsRUFBdUM7QUFDckMsYUFBSyxJQUFJQyxJQUFJRCxJQUFJLENBQWpCLEVBQW9CQyxJQUFJbkIsQ0FBeEIsRUFBMkJtQixHQUEzQixFQUFnQztBQUM5QnpLLGlCQUFPK0ksS0FBSzBCLENBQUwsQ0FBUDs7QUFFQSxjQUFJOUwsT0FBTytMLGNBQVAsQ0FBc0IzQixLQUFLeUIsQ0FBTCxDQUF0QixFQUErQnhLLElBQS9CLENBQUosRUFBMEM7QUFDeEMsZ0JBQUksQ0FBQ29LLFlBQVlPLFFBQVosQ0FBcUJGLENBQXJCLENBQUwsRUFBOEJMLFlBQVlsSCxJQUFaLENBQWlCdUgsQ0FBakI7QUFDOUJKLG9CQUFRbkgsSUFBUixDQUFhdUgsQ0FBYjtBQUNEO0FBQ0Y7O0FBQ0RKLGdCQUFRTyxJQUFSO0FBQ0FSLG9CQUFZUSxJQUFaO0FBQ0Q7O0FBQ0QsYUFBT1AsUUFBUXRPLE1BQWYsRUFBdUI7QUFDckJ3TyxtQ0FBMkJGLFFBQVFRLEtBQVIsRUFBM0I7QUFDRDs7QUFDRFAsbUJBQWFYLEtBQUttQixHQUFMLENBQVNqQixLQUFULENBQWUsSUFBZixFQUFxQk8sV0FBckIsQ0FBYjs7QUFFQSxhQUFPQSxZQUFZck8sTUFBbkIsRUFBMkI7QUFDekIsYUFBS2dOLElBQUwsQ0FBVWdDLE1BQVYsQ0FBaUJYLFlBQVlyQyxHQUFaLEVBQWpCLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDZ0MsSUFBMUM7QUFDQSxhQUFLZixNQUFMLENBQVlqQixHQUFaO0FBQ0Q7O0FBRUQsYUFBT3VDLFVBQVA7QUFDRCxLQW5KZTtBQW9KaEI3SixVQXBKZ0Isa0JBb0pUSCxFQXBKUyxFQW9KTDtBQUNULFVBQUl6QixlQUFPOUUsTUFBWCxFQUFtQjtBQUVuQnVHLFdBQUtBLEtBQUtBLEVBQUwsR0FBVXpCLGVBQU81RSxJQUFQLEdBQWM0RSxlQUFPNUUsSUFBckIsR0FBNEIsRUFBM0M7QUFFQSxVQUFJLENBQUNxRyxFQUFMLEVBQVMsT0FBTyxLQUFLeUosSUFBTCxFQUFQO0FBRVQsVUFBSS9KLE9BQU8sS0FBS2dMLE9BQUwsQ0FBYTFLLEdBQUd3SSxLQUFILENBQVMsR0FBVCxFQUFjLENBQWQsQ0FBYixDQUFYO0FBQUEsVUFDSUMsT0FBTyxLQUFLQSxJQURoQjtBQUFBLFVBRUlPLElBQUlQLEtBQUtoTixNQUZiO0FBQUEsVUFHSWtQLFdBQVdsQyxLQUFLbUMsT0FBTCxDQUFhbEwsSUFBYixDQUhmO0FBQUEsVUFJSXNLLFVBSko7QUFBQSxVQUlnQnRPLENBSmhCOztBQU1BLFVBQUlpUCxhQUFhM0IsSUFBSSxDQUFyQixFQUF3QjtBQUN0QixhQUFLUyxJQUFMO0FBQ0EsYUFBS2YsTUFBTCxDQUFZakIsR0FBWjtBQUNELE9BSEQsTUFLSztBQUNILFlBQUksQ0FBQyxLQUFLaUIsTUFBTCxDQUFZak4sTUFBakIsRUFBeUI7QUFDdkJ1Tyx1QkFBYSxLQUFLSCxNQUFMLENBQVljLFFBQVosQ0FBYjtBQUVBLGVBQUtsQyxJQUFMLENBQVVvQyxPQUFWLENBQWtCLFVBQVNuTCxJQUFULEVBQWU7QUFDL0IsZ0JBQUlBLEtBQUtNLEVBQUwsR0FBVWdLLFVBQWQsRUFBMEJ0SyxLQUFLekYsTUFBTDtBQUMzQixXQUZEO0FBSUEsZUFBS21ELFFBQUw7QUFDRCxTQVJELE1BUU87QUFDTDFCLGNBQUksS0FBS2dOLE1BQUwsQ0FBWWpOLE1BQWhCOztBQUVBLGlCQUFPLEtBQUtpTixNQUFMLENBQVlqTixNQUFuQjtBQUEyQixpQkFBS21PLElBQUwsQ0FBVSxJQUFWO0FBQTNCOztBQUVBSSx1QkFBYSxLQUFLSCxNQUFMLENBQVljLFFBQVosQ0FBYjtBQUVBLGVBQUtsQyxJQUFMLENBQVVvQyxPQUFWLENBQWtCLFVBQVNuTCxJQUFULEVBQWU7QUFDL0IsZ0JBQUlBLEtBQUtNLEVBQUwsR0FBVWdLLFVBQWQsRUFBMEJ0SyxLQUFLekYsTUFBTDtBQUMzQixXQUZEOztBQUlBLGlCQUFPeUIsR0FBUDtBQUFZLGlCQUFLK04sSUFBTCxDQUFVLElBQVY7QUFBWjs7QUFFQSxlQUFLck0sUUFBTDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBS29DLElBQUwsQ0FBVSxjQUFWLEVBQTBCUSxHQUFHLENBQUgsQ0FBMUI7QUFDRCxLQWhNZTtBQWlNaEIvRixVQWpNZ0Isa0JBaU1UNlEsR0FqTVMsRUFpTUpDLE9Bak1JLEVBaU1LO0FBQ25CeE0scUJBQU95TSxRQUFQLEdBQWtCLEtBQWxCLENBRG1CLENBR25CO0FBQ0E7QUFDQTs7QUFDQUMsWUFBTUMsSUFBTixDQUFXaFIsU0FBU2lSLHNCQUFULENBQWdDLHNCQUFoQyxDQUFYLEVBQ0dOLE9BREgsQ0FDVyxxQkFBYTtBQUNwQixZQUFNMUcsWUFBWWlILFVBQVV2SSxVQUE1QjtBQUNBc0Isa0JBQVVDLFlBQVYsQ0FBdUJsSyxTQUFTbVIsY0FBVCxDQUF3QkQsVUFBVUUsV0FBbEMsQ0FBdkIsRUFBdUVGLFNBQXZFO0FBQ0FqSCxrQkFBVXJCLFNBQVY7QUFDRCxPQUxIO0FBT0EsV0FBSzJGLElBQUwsR0FBWSxFQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxXQUFLQyxvQkFBTCxHQUE0QixFQUE1QjtBQUNBLFdBQUtDLHNCQUFMLEdBQThCLEVBQTlCO0FBQ0EsV0FBSzdJLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLOEksZUFBTCxHQUF1QixJQUF2QjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUVBLFVBQU05TixRQUFRLENBQUM4UCxHQUFELElBQVF2TSxlQUFPbEYsSUFBZixJQUF1QmtGLGVBQU8vRSxPQUFQLENBQWUrRSxlQUFPbEYsSUFBdEIsQ0FBdkIsR0FBcURrRixlQUFPL0UsT0FBUCxDQUFlK0UsZUFBT2xGLElBQXRCLENBQXJELEdBQW1GLElBQWpHO0FBRUEsVUFBSSxDQUFDMFIsT0FBRCxJQUFZLENBQUNBLFFBQVFRLE1BQXpCLEVBQWlDLEtBQUsvTCxJQUFMLENBQVUsaUJBQVYsRUFBNkJ4RSxLQUE3QjtBQUNsQyxLQXpOZTtBQTBOaEJuQixTQTFOZ0IsaUJBME5WMlIsU0ExTlUsRUEwTkM7QUFDZixXQUFLcEssT0FBTCxHQUFlb0ssU0FBZjtBQUNBak4scUJBQU96RSxZQUFQLEdBQXNCLElBQXRCO0FBQ0F5RSxxQkFBTzFFLEtBQVAsR0FBZTJSLFNBQWY7QUFDQSxXQUFLdlIsTUFBTDtBQUNELEtBL05lO0FBZ09oQndSLFFBaE9nQixrQkFnT1Q7QUFBQTs7QUFDTCxVQUFJbE4sZUFBT3lNLFFBQVgsRUFBcUIsT0FBTyxLQUFLeEwsSUFBTCxDQUFVLDBDQUFWLENBQVA7QUFFckIsVUFBTXBHLFNBQVNtRixlQUFPbkYsTUFBdEI7QUFDQSxVQUFNSyxTQUFTOEUsZUFBTzlFLE1BQXRCOztBQUVBOEUscUJBQU9uRSxHQUFQLENBQVcsUUFBWCxFQUFxQkMsSUFBckIsQ0FBMEIsa0JBQVU7QUFDbEMsWUFBSWtFLGVBQU9oRixLQUFQLElBQWdCRSxNQUFwQixFQUE0QjtBQUMxQixjQUFJLENBQUNBLE1BQUQsSUFBV2dCLFdBQVcsUUFBMUIsRUFBb0M7QUFDbEMsa0JBQUtpUixPQUFMLENBQWEsYUFBYixFQUE0QnJSLElBQTVCLENBQWlDLG1CQUFXO0FBQzFDLGtCQUFJc1IsT0FBSixFQUFhO0FBQ1gsb0JBQU1DLE1BQU14UyxTQUFTd0IsUUFBUWlSLElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQkFBeEIsQ0FBVCxHQUF3RCxFQUFwRTtBQUVBdk4sK0JBQU9sRixJQUFQLEdBQWN3QyxPQUFPa1EsTUFBUCxDQUFjblIsUUFBUWlSLElBQVIsQ0FBYUMsVUFBYixDQUF3QixZQUF4QixFQUFzQ0YsR0FBdEMsQ0FBZCxDQUFkO0FBQ0Esb0JBQUlyTixlQUFPbEYsSUFBWCxFQUFpQixNQUFLbUcsSUFBTCxDQUFVLGFBQVYsRUFBeUIsTUFBS3dNLGFBQUwsRUFBekI7QUFDbEI7QUFDRixhQVBEO0FBUUQsV0FURCxNQVNPO0FBQ0wsZ0JBQUlDLFlBQVksSUFBaEI7QUFDRCxnQkFBSTdTLE1BQUosRUFBWTZTLFlBQVlwUSxPQUFPcVEsT0FBUCxDQUFldFIsUUFBUWlSLElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQkFBeEIsQ0FBZixDQUFaOztBQUNaLGdCQUFJRyxTQUFKLEVBQWU7QUFDWixvQkFBS3pNLElBQUwsQ0FBVSxhQUFWLEVBQXlCLE1BQUt3TSxhQUFMLEVBQXpCO0FBQ0Y7QUFDRDtBQUNGLFNBakJELE1BaUJPO0FBQ0wsZ0JBQUt4TSxJQUFMLENBQVUsZUFBVixFQUEyQixNQUFLd00sYUFBTCxFQUEzQjtBQUNEO0FBQ0YsT0FyQkQ7QUFzQkgsS0E1UGlCO0FBNlBoQjVPLFlBN1BnQixzQkE2UEw7QUFBQTs7QUFDVG1CLHFCQUFPbkUsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLG9CQUFZO0FBQ3RDLFlBQUkrQyxRQUFKLEVBQWMsT0FBS3FPLElBQUwsR0FBZCxLQUNLLE9BQUtqTSxJQUFMLENBQVUsaUJBQVY7QUFDTixPQUhEO0FBSUQsS0FsUWU7QUFtUWhCMk0sUUFuUWdCLGtCQW1RVDtBQUNMLFVBQU16TSxPQUFPLEtBQUswTSxRQUFMLEVBQWI7QUFDQSxVQUFJLENBQUMxTSxJQUFMLEVBQVcsT0FBTyxLQUFQO0FBQ1gsVUFBTWtDLFFBQVFsQyxLQUFLa0MsS0FBbkI7QUFDQSxVQUFNdkMsWUFBWUssS0FBS0wsU0FBTCxDQUFlaUYsSUFBakM7QUFDQSxVQUFNMUUsV0FBV0YsS0FBS0UsUUFBdEI7QUFFQWdDLFlBQU1hLFFBQU4sQ0FBZTdDLFNBQVMsQ0FBVCxDQUFmLEVBQTRCLENBQTVCO0FBQ0FnQyxZQUFNYyxNQUFOLENBQWE5QyxTQUFTQSxTQUFTbkUsTUFBVCxHQUFrQixDQUEzQixDQUFiLEVBQTRDLENBQTVDO0FBQ0E0RCxnQkFBVW9GLFFBQVYsQ0FBbUI3QyxLQUFuQjtBQUNIeUssZ0JBQVVDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCbE4sVUFBVUUsUUFBVixHQUFxQmlOLElBQXJCLEdBQTRCbkgsT0FBNUIsQ0FBb0MsYUFBcEMsRUFBbUQsTUFBbkQsQ0FBOUI7QUFDR2hHLGdCQUFVc0YsZUFBVjtBQUNELEtBL1FlO0FBZ1JoQjhILFNBaFJnQixpQkFnUlYvTSxJQWhSVSxFQWdSSitMLElBaFJJLEVBZ1JFaUIsS0FoUkYsRUFnUlM7QUFDMUIsV0FBS2pFLElBQUwsQ0FBVTdGLElBQVYsQ0FBZWxELElBQWY7QUFDRyxVQUFJK0wsU0FBUyxLQUFiLEVBQW9CLEtBQUtyTyxRQUFMO0FBQ3ZCLFVBQUlzUCxLQUFKLEVBQVcsS0FBS0Msa0JBQUw7QUFDWCxLQXBSaUI7QUFxUmhCQyxZQXJSZ0Isb0JBcVJQbE4sSUFyUk8sRUFxUkQ7QUFDYixXQUFLTCxTQUFMLEdBQWlCLElBQUl3TixrQkFBSixDQUFlLElBQWYsRUFBcUI7QUFBRUMsMEJBQWtCO0FBQXBCLE9BQXJCLENBQWpCO0FBQ0EsV0FBS0wsS0FBTCxDQUFXLEtBQUsvTSxJQUFMLENBQVVBLEtBQUtoQixHQUFmLEVBQW9CZ0IsSUFBcEIsQ0FBWCxFQUFzQyxLQUF0QyxFQUE2QyxLQUE3QztBQUNELEtBeFJlO0FBeVJoQnFOLHlCQXpSZ0IsbUNBeVJRO0FBQ3RCLFVBQUksQ0FBQyxLQUFLdEUsSUFBTCxDQUFVaE4sTUFBZixFQUF1QixPQUFPLElBQVA7QUFFdkIsV0FBSytELElBQUwsQ0FBVSxlQUFWLEVBQTJCLEtBQUtpSixJQUFoQzs7QUFFQSxVQUFJbEssZUFBTzlFLE1BQVgsRUFBbUI7QUFDakIsWUFBTWlHLE9BQU8sS0FBSytJLElBQUwsQ0FBVSxLQUFLQSxJQUFMLENBQVVoTixNQUFWLEdBQW1CLENBQTdCLENBQWI7O0FBQ0EsWUFBSThDLGVBQU9sRixJQUFQLEtBQWdCcUcsS0FBS0ksT0FBTCxDQUFheUIsSUFBYixDQUFrQmlMLElBQWxCLEdBQXlCUSxTQUF6QixDQUFtQyxDQUFuQyxFQUFzQ0Msd0JBQWlCQyxvQkFBakIsR0FBd0MsQ0FBOUUsQ0FBcEIsRUFBc0c7QUFDcEcsZUFBS0MsUUFBTCxDQUFjek4sSUFBZDtBQUNEO0FBQ0YsT0FMRCxNQUtPO0FBQ0wsYUFBSzBOLFFBQUw7QUFDQSxhQUFLQyxnQkFBTDtBQUNEOztBQUNELFdBQUtWLGtCQUFMOztBQUVBLFVBQUlwTyxlQUFPekUsWUFBWCxFQUF5QjtBQUN2QnlFLHVCQUFPekUsWUFBUCxHQUFzQixLQUF0QjtBQUNBLGFBQUsyUixJQUFMO0FBQ0Q7QUFDRixLQTdTZTtBQThTaEI2Qix5QkE5U2dCLG1DQThTUTtBQUN0Qi9PLHFCQUFPeU0sUUFBUCxHQUFrQixJQUFsQjtBQUNELEtBaFRlO0FBaVRoQnVDLFdBalRnQixtQkFpVFJ2TixFQWpUUSxFQWlUSjtBQUNWLFdBQUtSLElBQUwsQ0FBVSxVQUFWLEVBQXNCLEtBQUs0TSxRQUFMLENBQWNwTSxFQUFkLENBQXRCO0FBQ0QsS0FuVGU7QUFvVGhCd04sWUFwVGdCLG9CQW9UUHhOLEVBcFRPLEVBb1RIO0FBQ1gsVUFBSSxDQUFDekIsZUFBTzlFLE1BQVosRUFBb0IsT0FBTyxLQUFLMkQsUUFBTCxFQUFQO0FBRXBCLFVBQU1zQyxPQUFPLEtBQUtnTCxPQUFMLENBQWExSyxFQUFiLEVBQWlCRixPQUE5QjtBQUNBLFVBQU0zRSxTQUFTLE9BQU91RSxLQUFLdkUsTUFBWixLQUF1QixTQUF2QixHQUFtQ3VFLEtBQUt2RSxNQUF4QyxHQUFpRG9ELGVBQU9yRixZQUFQLEtBQXdCLE1BQXhGO0FBRUEsVUFBTThCLFFBQVE7QUFDWmtPLGVBQU8sQ0FBQ3hKLElBQUQsQ0FESztBQUVackcsY0FBTXFHLEtBQUs2QixJQUFMLENBQVVpTCxJQUFWLEdBQWlCUSxTQUFqQixDQUEyQixDQUEzQixFQUE4QkMsd0JBQWlCQyxvQkFBakIsR0FBd0MsQ0FBdEUsQ0FGTTtBQUdaL1I7QUFIWSxPQUFkO0FBS0EsV0FBS3FFLElBQUwsQ0FBVSxlQUFWLEVBQTJCeEUsS0FBM0I7QUFDRCxLQWhVZTtBQWlVaEJtUyxZQWpVZ0Isb0JBaVVQek4sSUFqVU8sRUFpVUQ7QUFDYixVQUFNK04sZUFBZSxLQUFLOUUsb0JBQTFCO0FBQ0EsVUFBSTFCLEVBQUosRUFBUXlHLEdBQVIsRUFBYTFOLEVBQWI7O0FBQ0EsVUFBSU4sUUFBUUEsU0FBUyxDQUFyQixFQUF3QjtBQUN0QixZQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsZUFBS29KLGFBQUwsR0FBcUJwSixPQUFPLENBQTVCO0FBQ0F1SCxlQUFLd0csYUFBYS9OLElBQWIsQ0FBTDtBQUNBTSxlQUFLaUgsR0FBR2pHLFlBQUgsQ0FBZ0IsWUFBaEIsRUFBOEJ3SCxLQUE5QixDQUFvQyxHQUFwQyxFQUF5QyxDQUF6QyxDQUFMO0FBQ0QsU0FKRCxNQUlPO0FBQ0x4SSxlQUFLTixLQUFLTSxFQUFWO0FBQ0FpSCxlQUFLL00sU0FBU0MsYUFBVCxDQUF1Qix1Q0FBdUM2RixFQUF2QyxHQUE0QyxNQUFuRSxDQUFMO0FBQ0Q7QUFDRixPQVRELE1BU087QUFDTDBOLGNBQU0sS0FBSzVFLGFBQVg7QUFDQTdCLGFBQUt3RyxhQUFhQyxHQUFiLENBQUw7QUFDQTFOLGFBQUtpSCxHQUFHakcsWUFBSCxDQUFnQixZQUFoQixFQUE4QndILEtBQTlCLENBQW9DLEdBQXBDLEVBQXlDLENBQXpDLENBQUw7QUFDRDs7QUFFRHZCLFNBQUczRyxjQUFILENBQWtCO0FBQUVDLGtCQUFVLFFBQVo7QUFBc0JDLGVBQU87QUFBN0IsT0FBbEI7QUFFSCxVQUFJLENBQUNkLElBQUQsSUFBUyxPQUFPQSxJQUFQLEtBQWdCLFFBQTdCLEVBQXVDLEtBQUtnTCxPQUFMLENBQWExSyxFQUFiLEVBQWlCcUQsT0FBakIsQ0FBeUJyRCxFQUF6QjtBQUNwQyxXQUFLMk4sWUFBTCxDQUFrQjNOLEVBQWxCO0FBQ0QsS0F2VmU7QUF3VmxCNE4sZ0JBeFZrQix3QkF3VkxDLEdBeFZLLEVBd1ZBO0FBQ2pCLFVBQU03RSxJQUFJLEtBQUtMLG9CQUFMLENBQTBCbE4sTUFBcEM7QUFFQSxXQUFLcU4sYUFBTCxJQUFzQitFLEdBQXRCO0FBRUEsVUFBSSxLQUFLL0UsYUFBTCxHQUFxQixDQUF6QixFQUE0QixLQUFLQSxhQUFMLEdBQXFCRSxJQUFJLENBQXpCLENBQTVCLEtBQ0ssSUFBSSxLQUFLRixhQUFMLElBQXNCRSxDQUExQixFQUE2QixLQUFLRixhQUFMLEdBQXFCLENBQXJCO0FBRWxDLFdBQUtxRSxRQUFMO0FBQ0EsS0FqV2lCO0FBa1doQlEsZ0JBbFdnQix3QkFrV0gzTixFQWxXRyxFQWtXQztBQUNmaUwsWUFBTUMsSUFBTixDQUFXaFIsU0FBUzRULGdCQUFULENBQTBCLCtCQUExQixDQUFYLEVBQ0dqRCxPQURILENBQ1c7QUFBQSxlQUFNa0QsR0FBRzlOLFNBQUgsQ0FBYUUsTUFBYixDQUFvQiw4QkFBcEIsQ0FBTjtBQUFBLE9BRFg7QUFHQSxVQUFNNk4sTUFBTS9DLE1BQU1DLElBQU4sQ0FBV2hSLFNBQVM0VCxnQkFBVCxDQUEwQix3Q0FBd0M5TixFQUF4QyxHQUE2QyxLQUF2RSxDQUFYLENBQVo7QUFFQWdPLFVBQUluRCxPQUFKLENBQVk7QUFBQSxlQUFNa0QsR0FBRzlOLFNBQUgsQ0FBYUMsR0FBYixDQUFpQiw4QkFBakIsQ0FBTjtBQUFBLE9BQVo7QUFFQXJFLGFBQU9DLFVBQVAsQ0FBa0I7QUFBQSxlQUFNa1MsSUFBSW5ELE9BQUosQ0FBWTtBQUFBLGlCQUFNa0QsR0FBRzlOLFNBQUgsQ0FBYUUsTUFBYixDQUFvQiw4QkFBcEIsQ0FBTjtBQUFBLFNBQVosQ0FBTjtBQUFBLE9BQWxCLEVBQWdHLElBQWhHO0FBQ0QsS0EzV2U7QUE0V2hCNkMsZUE1V2dCLHVCQTRXSnFFLENBNVdJLEVBNFdEb0UsSUE1V0MsRUE0V0s7QUFDbkIsVUFBSWxOLGVBQU85RSxNQUFYLEVBQW1CO0FBRW5CLFVBQUlzRyxXQUFXLEtBQUtBLFFBQXBCO0FBQUEsVUFDSUwsT0FBTyxLQUFLME0sUUFBTCxDQUFjL0UsQ0FBZCxDQURYO0FBR0EsVUFBSSxDQUFDM0gsSUFBTCxFQUFXLE9BQU8sS0FBUDs7QUFFWCxVQUFJSyxRQUFKLEVBQWM7QUFDWkEsaUJBQVNJLE1BQVQ7QUFDQSxhQUFLWCxJQUFMLENBQVUsa0JBQVY7QUFDRDs7QUFFRCxXQUFLTyxRQUFMLEdBQWdCLElBQUlOLGlCQUFKLEdBQWdCd08sR0FBaEIsQ0FBb0J2TyxJQUFwQixDQUFoQjtBQUVBLFdBQUtGLElBQUwsQ0FBVSxnQkFBVjtBQUNBLFVBQUlpTSxTQUFTLEtBQWIsRUFBb0IsS0FBS3JPLFFBQUw7QUFDckIsS0E3WGU7QUE4WGhCdU0sZ0JBOVhnQiwwQkE4WEQ7QUFDYixXQUFLNUosUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUtQLElBQUwsQ0FBVSxrQkFBVjtBQUNELEtBalllO0FBa1loQjBPLGtCQWxZZ0IsNEJBa1lDO0FBQ2YsVUFBSTNQLGVBQU85RSxNQUFYLEVBQW1CO0FBRW5CLFVBQUlzRyxXQUFXLEtBQUtBLFFBQXBCO0FBRUEsVUFBSSxDQUFDQSxRQUFMLEVBQWUsT0FBTyxLQUFQO0FBRWZBLGVBQVNJLE1BQVQ7QUFDQSxXQUFLSixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBSzhJLGVBQUwsR0FBdUI5SSxRQUF2QjtBQUNBLFdBQUtQLElBQUwsQ0FBVSxrQkFBVjtBQUNBLFdBQUtwQyxRQUFMO0FBQ0QsS0E5WWU7QUErWWhCaVEsb0JBL1lnQiw4QkErWUc7QUFDakIsVUFBSXROLFdBQVcsS0FBS0EsUUFBcEI7QUFFQSxVQUFJQSxRQUFKLEVBQWNBLFNBQVNPLGNBQVQ7QUFDZixLQW5aZTtBQW9aaEJvSyxXQXBaZ0IsbUJBb1pSMUssRUFwWlEsRUFvWkowTixHQXBaSSxFQW9aQztBQUNsQixVQUFJakYsT0FBTyxLQUFLQSxJQUFoQjtBQUFBLFVBQ0doSCxJQUFJZ0gsS0FBS2hOLE1BRFo7QUFBQSxVQUVHaUUsSUFGSDs7QUFJQSxhQUFPK0IsR0FBUCxFQUFZO0FBQ1gvQixlQUFPK0ksS0FBS2hILENBQUwsQ0FBUDtBQUVBLFlBQUkvQixLQUFLSSxPQUFMLENBQWFFLEVBQWIsSUFBbUJBLEVBQXZCLEVBQ0MsT0FBTzBOLE1BQU07QUFBRWhPLGdCQUFNQSxJQUFSO0FBQWNpTCxvQkFBVWxKO0FBQXhCLFNBQU4sR0FBb0MvQixJQUEzQztBQUNEOztBQUNELGFBQU9nTyxNQUFNO0FBQUVoTyxjQUFNLElBQVI7QUFBY2lMLGtCQUFVO0FBQXhCLE9BQU4sR0FBdUMsS0FBOUM7QUFDQSxLQWhhaUI7QUFpYWxCeUIsWUFqYWtCLG9CQWlhVGpDLENBamFTLEVBaWFOO0FBQ1hBLFVBQUlBLElBQUlBLENBQUosR0FBUTVMLGVBQU81RSxJQUFQLEdBQWM0RSxlQUFPNUUsSUFBckIsR0FBNEIsRUFBeEM7QUFFQSxVQUFJK0YsT0FBTyxDQUFDeUssQ0FBRCxHQUNWLEtBQUsxQixJQUFMLENBQVUsS0FBS0EsSUFBTCxDQUFVaE4sTUFBVixHQUFtQixDQUE3QixDQURVLEdBRVQsT0FBTzBPLENBQVAsS0FBYSxRQUFiLEdBQ0QsS0FBS08sT0FBTCxDQUFhUCxFQUFFM0IsS0FBRixDQUFRLEdBQVIsRUFBYSxDQUFiLENBQWIsQ0FEQyxHQUVEMkIsQ0FKRDtBQUtBLGFBQU96SyxJQUFQO0FBQ0EsS0ExYWlCO0FBMmFoQjBOLFlBM2FnQixzQkEyYUw7QUFDVCxXQUFLM0UsSUFBTCxDQUFVNkIsSUFBVixDQUFlLFVBQUM2RCxLQUFELEVBQVFDLEtBQVI7QUFBQSxlQUFrQkQsTUFBTW5PLEVBQU4sR0FBV29PLE1BQU1wTyxFQUFuQztBQUFBLE9BQWY7QUFDRCxLQTdhZTtBQThhbEIyTSxzQkE5YWtCLGdDQThhRztBQUNwQixXQUFLaEUsb0JBQUwsR0FBNEJzQyxNQUFNQyxJQUFOLENBQVdoUixTQUFTNFQsZ0JBQVQsQ0FBMEIseUNBQTFCLENBQVgsRUFBaUZ4RCxJQUFqRixDQUFzRixVQUFDK0QsRUFBRCxFQUFLQyxFQUFMLEVBQVk7QUFDN0gsWUFBSUMsTUFBTUYsR0FBR3JHLHFCQUFILEVBQVY7QUFBQSxZQUNFd0csTUFBTUYsR0FBR3RHLHFCQUFILEVBRFI7QUFBQSxZQUVFeUcsT0FBT0YsSUFBSXRHLEdBRmI7QUFBQSxZQUdFeUcsT0FBT0YsSUFBSXZHLEdBSGI7QUFLQSxZQUFJd0csT0FBT0MsSUFBWCxFQUFpQixPQUFPLENBQUMsQ0FBUixDQUFqQixLQUNLLElBQUlBLE9BQU9ELElBQVgsRUFBaUIsT0FBTyxDQUFQLENBQWpCLEtBQ0E7QUFDSixjQUFJRixJQUFJcEcsSUFBSixHQUFXcUcsSUFBSXJHLElBQW5CLEVBQXlCLE9BQU8sQ0FBQyxDQUFSO0FBQ3pCLGlCQUFPLENBQVA7QUFDQTtBQUNELE9BWjJCLENBQTVCO0FBYUcsV0FBS1Msc0JBQUwsR0FBOEIsS0FBS0Qsb0JBQUwsQ0FBMEJnRyxHQUExQixDQUE4QjtBQUFBLGVBQVFyRyxTQUFTNUksS0FBS3NCLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBVCxDQUFSO0FBQUEsT0FBOUIsQ0FBOUI7QUFDQSxXQUFLeEIsSUFBTCxDQUFVLHdCQUFWLEVBQW9DLEtBQUtvSixzQkFBekM7QUFDSCxLQTliaUI7QUErYmhCd0Isa0JBL2JnQiwwQkErYkQrRCxLQS9iQyxFQStiTUMsS0EvYk4sRUErYmE7QUFDOUIsVUFBSVEsWUFBWVQsTUFBTXZPLFFBQXRCO0FBQUEsVUFDT2lQLEtBQUtELFVBQVVuVCxNQUR0QjtBQUFBLFVBRU9xVCxNQUFNWCxNQUFNbk8sRUFGbkI7QUFBQSxVQUdPK08sWUFBWVgsTUFBTXhPLFFBSHpCO0FBQUEsVUFJT29QLE1BQU1aLE1BQU1wTyxFQUpuQjtBQUFBLFVBS09pUCxFQUxQO0FBQUEsVUFLV2pCLEdBTFg7QUFBQSxVQUtnQmhGLENBTGhCOztBQU9HLGFBQU82RixJQUFQLEVBQWE7QUFDWEksYUFBS0YsVUFBVXRULE1BQWY7O0FBQ0EsZUFBT3dULElBQVAsRUFBYTtBQUNYakIsZ0JBQU1ZLFVBQVVDLEVBQVYsRUFBY2YsZ0JBQWQsQ0FBK0IsY0FBL0IsQ0FBTjtBQUNBOUUsY0FBSWdGLElBQUl2UyxNQUFSOztBQUNBLGlCQUFPdU4sR0FBUCxFQUFZO0FBQ1YsZ0JBQUlnRixJQUFJaEYsQ0FBSixFQUFPaEksWUFBUCxDQUFvQixZQUFwQixFQUFrQyxDQUFsQyxLQUF3Q2dPLEdBQTVDLEVBQ0UsT0FBTyxJQUFQO0FBQ0g7QUFDRjtBQUNGOztBQUNELGFBQU8sS0FBUDtBQUNILEtBbmRpQjtBQW9kaEJFLGVBcGRnQix1QkFvZEoxVCxDQXBkSSxFQW9kRGtELEdBcGRDLEVBb2RJO0FBQUE7O0FBQ3JCLFVBQUlXLFlBQVksS0FBS0EsU0FBTCxHQUFpQixJQUFJd04sa0JBQUosRUFBakM7QUFFQSxVQUFJLENBQUN4TixVQUFVOEMsS0FBZixFQUFzQixPQUFPLEtBQVA7O0FBRW5CLFVBQUkzRyxDQUFKLEVBQU87QUFDVCxZQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQmtELE1BQU1sRCxDQUFOLENBQTNCLEtBQ0ssS0FBSytNLGNBQUwsQ0FBb0IvTSxDQUFwQjtBQUNMLE9BSEUsTUFHSTtBQUNOa0QsY0FBTUEsT0FBTyxHQUFiO0FBQ0E7O0FBRUVILHFCQUFPbkUsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLG9CQUFZO0FBQ3RDLFlBQUlrRSxlQUFPaEYsS0FBWCxFQUFrQjtBQUNoQixpQkFBSzZILE9BQUwsR0FBZSxPQUFPLE9BQUtBLE9BQVosS0FBd0IsU0FBeEIsR0FBb0MsT0FBS0EsT0FBekMsR0FBbUQsQ0FBQyxDQUFDN0csU0FBU0MsT0FBVCxDQUFpQlgsS0FBckY7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBS3VILE9BQUwsR0FBZSxPQUFPLE9BQUtBLE9BQVosS0FBd0IsU0FBeEIsR0FBb0MsT0FBS0EsT0FBekMsR0FBbUQ3QyxlQUFPMUUsS0FBekU7QUFDRDs7QUFDRCxlQUFLNFMsS0FBTCxDQUFXLE9BQUsvTSxJQUFMLENBQVVoQixHQUFWLEVBQWVuRSxTQUFTa0QsT0FBVCxDQUFpQmlCLEdBQWpCLENBQWYsRUFBc0MsT0FBSzBDLE9BQTNDLENBQVgsRUFBZ0UsSUFBaEUsRUFBc0UsSUFBdEU7QUFDRCxPQVBEO0FBUUgsS0F4ZWlCO0FBeWVoQitOLFlBemVnQixvQkF5ZVB6USxHQXplTyxFQXllRjtBQUFDMFEsY0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0IzUSxHQUF0QjtBQUNiLFVBQUk0RixPQUFPLElBQVg7O0FBQ0EsY0FBTzVGLEdBQVA7QUFDRSxhQUFLLEdBQUw7QUFBVTRGLGVBQUttRixJQUFMO0FBQWE7O0FBQ3ZCLGFBQUssR0FBTDtBQUFVbkYsZUFBS3NGLElBQUw7QUFBYTs7QUFDdkIsYUFBSyxHQUFMO0FBQVV0RixlQUFLbUgsSUFBTDtBQUFhOztBQUN2QixhQUFLLEdBQUw7QUFBVW5ILGVBQUt0QixXQUFMO0FBQW9COztBQUNsQyxhQUFLLFNBQUw7QUFBZ0JzQixlQUFLc0osWUFBTCxDQUFrQixDQUFDLENBQW5CO0FBQXVCOztBQUN2QyxhQUFLLFdBQUw7QUFBa0J0SixlQUFLc0osWUFBTCxDQUFrQixDQUFsQjtBQUFzQjs7QUFDeEMsYUFBSyxHQUFMO0FBQVV0SixlQUFLbkUsTUFBTDtBQUFlOztBQUNyQixhQUFLLEdBQUw7QUFBVW1FLGVBQUs2SCxJQUFMO0FBQWE7QUFSekI7QUFVRCxLQXJmZTtBQXNmaEI1RCxrQkF0ZmdCLDBCQXNmRC9NLENBdGZDLEVBc2ZFO0FBQ25CLFVBQUlBLEtBQUtBLEVBQUUrTSxjQUFYLEVBQTJCO0FBQzFCL00sVUFBRStNLGNBQUY7QUFDQS9NLFVBQUUrSCxlQUFGO0FBQ0E7O0FBQ0QsYUFBTyxJQUFQO0FBQ0EsS0E1ZmlCO0FBNmZsQnlJLGlCQTdma0IsMkJBNmZGO0FBQ1osVUFBTXZTLFNBQVM4RSxlQUFPOUUsTUFBdEI7QUFDQSxVQUFNRixRQUFRZ0YsZUFBT2hGLEtBQXJCO0FBQ0EsVUFBTUYsT0FBT2tGLGVBQU9sRixJQUFwQjtBQUVBLFVBQU0yQixRQUFRLENBQUN2QixNQUFELElBQVc4RSxlQUFPL0UsT0FBUCxDQUFlSCxJQUFmLENBQVgsR0FBa0NrRixlQUFPL0UsT0FBUCxDQUFlSCxJQUFmLENBQWxDLEdBQXlELEVBQXZFO0FBRUEyQixZQUFNa08sS0FBTixHQUFjLEtBQUtvRyxZQUFMLEVBQWQ7QUFDSHRVLFlBQU11VSxJQUFOLEdBQWEsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQWI7QUFDR3pVLFlBQU0wVSxVQUFOLEdBQW1CLENBQUMsQ0FBQyxLQUFLM1AsUUFBMUI7QUFDQS9FLFlBQU0yVSxLQUFOLEdBQWM5VCxPQUFPM0IsUUFBUCxDQUFnQnlWLEtBQTlCO0FBQ0gzVSxZQUFNNFUsS0FBTixHQUFjNVUsTUFBTWtPLEtBQU4sQ0FBWXpOLE1BQTFCO0FBQ0FULFlBQU0wRyxPQUFOLEdBQWdCLEtBQUtBLE9BQXJCO0FBQ0cxRyxZQUFNbkIsS0FBTixHQUFjLE9BQU8sS0FBS3VILE9BQVosS0FBd0IsU0FBeEIsR0FBb0MsS0FBS0EsT0FBekMsR0FBbURwRyxNQUFNbkIsS0FBdkU7O0FBRUEsVUFBSU4sU0FBU0UsTUFBYixFQUFxQjtBQUNuQnVCLGNBQU02VSxLQUFOLEdBQWM3VSxNQUFNdVUsSUFBcEI7QUFDQXZVLGNBQU04VSxHQUFOLEdBQVl2UixlQUFPN0UsYUFBUCxHQUF1Qm1DLE9BQU8zQixRQUFQLENBQWdCNlYsR0FBdkMsR0FBNkMsc0JBQVVsVSxPQUFPM0IsUUFBUCxDQUFnQjZWLEdBQTFCLENBQXpEO0FBQ0EvVSxjQUFNRyxNQUFOLEdBQWVvRCxlQUFPckYsWUFBUCxLQUF3QixNQUF2QztBQUNBOEIsY0FBTXZCLE1BQU4sR0FBZUEsTUFBZjtBQUNBdUIsY0FBTXRCLGFBQU4sR0FBc0I2RSxlQUFPN0UsYUFBN0I7QUFDRDs7QUFFRHNCLFlBQU0zQixJQUFOLEdBQWFJLFNBQ1h1QixNQUFNa08sS0FBTixDQUFZLENBQVosRUFBZTNILElBQWYsQ0FBb0JpTCxJQUFwQixHQUEyQlEsU0FBM0IsQ0FBcUMsQ0FBckMsRUFBd0NDLHdCQUFpQkMsb0JBQWpCLEdBQXdDLENBQWhGLENBRFcsR0FFWDNULFFBQVFGLElBQVIsR0FBZTJCLE1BQU0zQixJQUZ2QjtBQUlILGFBQU8yQixLQUFQO0FBQ0EsS0F6aEJpQjtBQTBoQmhCc1UsZ0JBMWhCZ0IsMEJBMGhCRDtBQUNiLFVBQUk3RyxPQUFPLEtBQUtBLElBQWhCO0FBQ0EsVUFBSU8sSUFBSVAsS0FBS2hOLE1BQWI7QUFDQSxVQUFNeU4sUUFBUSxFQUFkOztBQUVBLFVBQUkzSyxlQUFPOUUsTUFBWCxFQUFtQjtBQUNqQmdQLGVBQU8sQ0FBQ0EsS0FBS08sSUFBRSxDQUFQLENBQUQsQ0FBUDtBQUNEOztBQUVEQSxVQUFJUCxLQUFLaE4sTUFBVDs7QUFFQSxXQUFLLElBQUk0TCxJQUFJLENBQVIsRUFBVzJJLEVBQWhCLEVBQW9CM0ksSUFBSTJCLENBQXhCLEVBQTJCM0IsR0FBM0IsRUFBZ0M7QUFDbEMySSxhQUFLdkgsS0FBS3BCLENBQUwsRUFBUXZILE9BQWI7QUFDSSxlQUFPa1EsR0FBRzdVLE1BQVY7QUFDSitOLGNBQU10RyxJQUFOLENBQVdvTixFQUFYO0FBQ0E7O0FBQ0UsYUFBTzlHLEtBQVA7QUFDRCxLQTNpQmU7QUE0aUJoQitHLGdCQTVpQmdCLDBCQTRpQkQ7QUFDYixXQUFLaFcsTUFBTCxDQUFZLElBQVosRUFBa0I7QUFBRXNSLGdCQUFRO0FBQVYsT0FBbEI7QUFDQSxXQUFLL0wsSUFBTCxDQUFVLHVCQUFWO0FBQ0Q7QUEvaUJlLEdBQVosQ0FBUDtBQWlqQkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFqQkQ7O0FBQ0E7Ozs7QUFFZSxrQkFBU0UsSUFBVCxFQUFld1EsS0FBZixFQUFzQjtBQUVuQyxNQUFNQyxPQUFPdFUsT0FBTzNCLFFBQVAsQ0FBZ0JnRixJQUE3QjtBQUVBLFNBQU8sSUFBSWYsaUJBQUosQ0FBZTtBQUN0QnRGLFlBQVE7QUFDSkMsV0FBSztBQUNILGlDQUF5QixrQkFEdEI7QUFFSCxxQkFBYSxRQUZWO0FBR0gseUJBQWlCO0FBSGQsT0FERDtBQU1Kc1gsV0FBSztBQUNIQyxlQUFPO0FBQ0wsMEJBQWdCLFNBRFg7QUFFTCw0QkFBa0IsTUFGYjtBQUdMLDZCQUFtQixlQUhkO0FBSUwseUJBQWUsYUFKVjtBQUtMLHNCQUFZO0FBTFAsU0FESjtBQVFIQyxlQUFPO0FBQ0wsc0JBQVk7QUFEUCxTQVJKO0FBV0hDLG1CQUFXO0FBQ1QsMEJBQWdCO0FBRFAsU0FYUjtBQWNIQyxvQkFBWTtBQUNWLDBCQUFnQjtBQUROO0FBZFQ7QUFORCxLQURjO0FBMEJwQkMsMEJBQXNCLElBMUJGO0FBMkJwQnhKLFFBQUksSUEzQmdCO0FBNEJwQnZILGNBNUJvQjtBQTZCcEJ3USxXQUFPQSxTQUFTLEVBN0JJO0FBOEJwQlEsc0JBQWtCLElBOUJFO0FBK0JwQm5QLFVBQU0sRUEvQmM7QUFnQ3BCb1AsYUFBUyxLQWhDVztBQWlDcEJDLHFCQUFpQixLQWpDRztBQWtDcEJDLGtCQUFjLEtBbENNO0FBbUNwQm5ELFNBQUs7QUFBRTFFLFNBQUcsSUFBTDtBQUFXOEgsU0FBRztBQUFkLEtBbkNlO0FBb0NwQkMsVUFBTTtBQUFFbFIsU0FBRyxJQUFMO0FBQVdtUixTQUFHO0FBQWQsS0FwQ2M7QUFxQ3BCQyxZQUFRLENBckNZO0FBc0NwQkMsWUFBUSxDQXRDWTtBQXVDcEJDLHNCQUFrQixJQXZDRTtBQXlDcEJwWCxZQXpDb0Isc0JBeUNUO0FBQ1QsV0FBS3FYLG9CQUFMO0FBQ0EsV0FBS0MsaUJBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0MsZ0JBQUw7QUFDRCxLQTlDbUI7QUFnRHBCSCx3QkFoRG9CLGtDQWdERztBQUNyQixVQUFNSSxXQUFXLEtBQUs5UixJQUFMLENBQVVJLE9BQVYsQ0FBa0IwQixJQUFuQzs7QUFDQSxVQUFJLE9BQU9nUSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLGFBQUs5UixJQUFMLENBQVVJLE9BQVYsQ0FBa0IwQixJQUFsQixHQUF5QjtBQUFFRCxnQkFBTWlRLFFBQVI7QUFBa0J0QixpQkFBTyxLQUFLQSxLQUFMLElBQWM7QUFBdkMsU0FBekI7QUFDRCxPQUZELE1BR0ssSUFBSSxDQUFDc0IsUUFBTCxFQUFlO0FBQ2xCLGFBQUs5UixJQUFMLENBQVVJLE9BQVYsQ0FBa0IwQixJQUFsQixHQUF5QjtBQUFFRCxnQkFBTWlRLFFBQVI7QUFBa0J0QixpQkFBTyxLQUFLQSxLQUFMLElBQWMzUixlQUFPM0U7QUFBOUMsU0FBekI7QUFDRCxPQUZJLE1BRUU7QUFDTCxhQUFLOFQsR0FBTCxHQUFXOEQsU0FBUzlELEdBQVQsSUFBZ0IsS0FBS0EsR0FBaEM7QUFDQSxhQUFLcUQsSUFBTCxHQUFZUyxTQUFTVCxJQUFULElBQWlCLEtBQUtBLElBQWxDO0FBQ0Q7QUFDRixLQTNEbUI7QUE0RHBCTSxxQkE1RG9CLCtCQTREQTtBQUFBOztBQUNsQixVQUFNN1AsT0FBTyxLQUFLeUYsRUFBTCxHQUFVL00sU0FBU2lMLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdkI7QUFDQSxVQUFNc00sU0FBUyxLQUFLQSxNQUFMLEdBQWN2WCxTQUFTaUwsYUFBVCxDQUF1QixjQUF2QixDQUE3QjtBQUNBLFVBQU11TSxNQUFNLEtBQUtBLEdBQUwsR0FBV3hYLFNBQVNpTCxhQUFULENBQXVCLGNBQXZCLENBQXZCO0FBQ0EsVUFBTXFGLE1BQU0sS0FBS0EsR0FBTCxHQUFXdFEsU0FBU2lMLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXZCO0FBQ0EsVUFBTXdNLE9BQU96WCxTQUFTaUwsYUFBVCxDQUF1QixpQkFBdkIsQ0FBYjtBQUNBLFVBQU15TSxVQUFVLEtBQUtBLE9BQUwsR0FBZTFYLFNBQVNpTCxhQUFULENBQXVCLGVBQXZCLENBQS9CO0FBQ0EsVUFBTTBCLElBQUksS0FBS2dMLFdBQUwsR0FBbUIzWCxTQUFTaUwsYUFBVCxDQUF1QixVQUF2QixDQUE3QjtBQUNBLFVBQU01RCxPQUFPLEtBQUs3QixJQUFMLENBQVVJLE9BQVYsQ0FBa0IwQixJQUFsQixDQUF1QkQsSUFBcEM7QUFDQSxVQUFNMk8sUUFBUSxLQUFLQSxLQUFMLEdBQWEsS0FBS3hRLElBQUwsQ0FBVUksT0FBVixDQUFrQjBCLElBQWxCLENBQXVCME8sS0FBdkIsSUFBZ0MzUixlQUFPM0UsU0FBbEU7QUFDQTJFLHFCQUFPM0UsU0FBUCxHQUFtQnNXLEtBQW5CO0FBQ0EsVUFBTTRCLFVBQVU1WCxTQUFTbVIsY0FBVCxDQUF3QjBHLE9BQU9DLFlBQVAsQ0FBb0IsS0FBcEIsQ0FBeEIsQ0FBaEI7QUFDQSxVQUFNQyxVQUFVL1gsU0FBU21SLGNBQVQsQ0FBd0IwRyxPQUFPQyxZQUFQLENBQW9CLE1BQXBCLENBQXhCLENBQWhCO0FBQ0EsVUFBTUUsV0FBV2hZLFNBQVNtUixjQUFULENBQXdCMEcsT0FBT0MsWUFBUCxDQUFvQixNQUFwQixDQUF4QixDQUFqQjtBQUVBLE9BQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsUUFBbkIsRUFBNkIsUUFBN0IsRUFBdUMsS0FBdkMsRUFBOEMsUUFBOUMsRUFBd0QsTUFBeEQsRUFBZ0UsV0FBaEUsRUFBNkVuSCxPQUE3RSxDQUFxRixhQUFLO0FBQ3hGLFlBQUlxRixRQUFRaFcsU0FBU2lMLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWjtBQUNBK0ssY0FBTWlDLFNBQU4sR0FBa0Isa0JBQWtCbE4sQ0FBcEM7QUFDQWlMLGNBQU05SyxZQUFOLENBQW1CLFlBQW5CLEVBQWlDSCxDQUFqQztBQUNBMk0sZ0JBQVFySyxXQUFSLENBQW9CMkksS0FBcEI7QUFDRCxPQUxEO0FBT0FySixRQUFFekIsWUFBRixDQUFlLGNBQWYsRUFBK0IsSUFBL0I7QUFDQXNNLFVBQUluSyxXQUFKLENBQWdCdUssT0FBaEI7QUFDQXRILFVBQUlqRCxXQUFKLENBQWdCMEssT0FBaEI7QUFDQU4sV0FBS3BLLFdBQUwsQ0FBaUIySyxRQUFqQjtBQUNBMVEsV0FBSzRRLE1BQUwsQ0FBWVgsTUFBWjtBQUNBalEsV0FBSytGLFdBQUwsQ0FBaUJvSyxJQUFqQjtBQUNBblEsV0FBSytGLFdBQUwsQ0FBaUJtSyxHQUFqQjtBQUNBbFEsV0FBSytGLFdBQUwsQ0FBaUJpRCxHQUFqQjtBQUNBaEosV0FBSytGLFdBQUwsQ0FBaUJWLENBQWpCO0FBQ0FyRixXQUFLdkIsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQWFnUSxLQUFoQztBQUNBLFVBQUkzTyxJQUFKLEVBQVVzRixFQUFFd0wsS0FBRixHQUFVOVEsSUFBVjtBQUVWc0YsUUFBRTFILGdCQUFGLENBQW1CLE1BQW5CLEVBQTJCO0FBQUEsZUFBSyxNQUFLbVQsYUFBTCxDQUFtQjlXLENBQW5CLEVBQXNCQSxFQUFFc0YsTUFBeEIsRUFBZ0MsSUFBaEMsQ0FBTDtBQUFBLE9BQTNCLEVBQXVFLEtBQXZFO0FBQ0QsS0EvRm1CO0FBZ0dwQnlSLFdBaEdvQixxQkFnR1Y7QUFDUixXQUFLcFMsTUFBTDtBQUNBLFdBQUtULElBQUwsQ0FBVUksT0FBVixDQUFrQjBCLElBQWxCLEdBQXlCLEVBQXpCO0FBQ0QsS0FuR21CO0FBb0dwQnJCLFVBcEdvQixvQkFvR1g7QUFDUCxXQUFLcVMsSUFBTDtBQUNBLFdBQUtDLG1CQUFMO0FBQ0EsV0FBS2pULElBQUwsQ0FBVSxjQUFWLEVBQTBCLEtBQUtFLElBQUwsQ0FBVU0sRUFBcEM7QUFDRCxLQXhHbUI7QUF5R3BCc1MsaUJBekdvQix5QkF5R045VyxDQXpHTSxFQXlHSHlMLEVBekdHLEVBeUdDeUwsS0F6R0QsRUF5R1E7QUFBQTs7QUFDMUIsVUFBSUEsS0FBSixFQUFXO0FBQ1QsYUFBS3BVLE1BQUwsQ0FBWTJJLEVBQVo7QUFDRCxPQUZELE1BR0ssSUFBSSxDQUFDLEtBQUsySixlQUFWLEVBQTJCO0FBQzlCLGFBQUtBLGVBQUwsR0FBdUIsSUFBdkI7QUFDQS9VLGVBQU9DLFVBQVAsQ0FBa0I7QUFBQSxpQkFBTSxPQUFLd0MsTUFBTCxDQUFZMkksRUFBWixDQUFOO0FBQUEsU0FBbEIsRUFBeUMsSUFBekM7QUFDRDtBQUNGLEtBakhtQjtBQWtIcEIzSSxVQWxIb0Isa0JBa0hiMkksRUFsSGEsRUFrSFQ7QUFDVCxXQUFLdkgsSUFBTCxDQUFVSSxPQUFWLENBQWtCMEIsSUFBbEIsQ0FBdUJELElBQXZCLEdBQThCMEYsR0FBR29MLEtBQWpDO0FBQ0EsV0FBSzdTLElBQUwsQ0FBVSxjQUFWLEVBQTBCLEtBQUtFLElBQUwsQ0FBVU0sRUFBcEM7QUFDQSxXQUFLNFEsZUFBTCxHQUF1QixLQUF2QjtBQUNELEtBdEhtQjtBQXVIcEJqSixRQXZIb0Isa0JBdUhiO0FBQ0wsVUFBTVYsS0FBSyxLQUFLQSxFQUFoQjtBQUNBLFVBQU0wTCxtQkFBbUI5VyxPQUFPK1csVUFBaEM7QUFFQSxVQUFJbEYsR0FBSixFQUFTdkYsSUFBVCxFQUFlRixHQUFmOztBQUVBLFVBQUksS0FBS3lGLEdBQUwsQ0FBUzFFLENBQVQsS0FBZSxJQUFuQixFQUF5QjtBQUN2QjBFLGNBQU0sS0FBS0EsR0FBWDtBQUNBekYsY0FBTXlGLElBQUlvRCxDQUFWO0FBQ0QsT0FIRCxNQUdPO0FBQ0xwRCxjQUFNLEtBQUttRixXQUFMLEVBQU47QUFFQTFLLGVBQU8sS0FBS3VGLEdBQUwsQ0FBUzFFLENBQVQsR0FBYTBFLElBQUkxRSxDQUF4QjtBQUNBZixjQUFNLEtBQUt5RixHQUFMLENBQVNvRCxDQUFULEdBQWFwRCxJQUFJb0QsQ0FBSixHQUFRcEQsSUFBSW9GLE1BQS9CO0FBQ0Q7O0FBQ0QzSyxhQUFPLEtBQUt1RixHQUFMLENBQVMxRSxDQUFULEdBQWEwRSxJQUFJMUUsQ0FBeEI7O0FBRUEsVUFBSWIsT0FBTyxHQUFQLEdBQWF3SyxnQkFBakIsRUFBbUM7QUFDakN4SyxlQUFPLEtBQUt1RixHQUFMLENBQVMxRSxDQUFULEdBQWEySixtQkFBbUIsR0FBdkM7QUFDRDs7QUFFRCxVQUFNNUIsT0FBTyxLQUFLQSxJQUFMLENBQVVsUixDQUFWLEdBQWMsV0FBVyxLQUFLa1IsSUFBTCxDQUFVbFIsQ0FBckIsR0FBeUIsVUFBekIsR0FBc0MsS0FBS2tSLElBQUwsQ0FBVUMsQ0FBaEQsR0FBb0QsR0FBbEUsR0FBd0UsRUFBckY7QUFFQWIsV0FBSzVJLFdBQUwsQ0FBaUJOLEVBQWpCO0FBQ0FBLFNBQUc3QixZQUFILENBQWdCLE9BQWhCLEVBQXlCLHVCQUF1QjZDLEdBQXZCLEdBQTZCLFVBQTdCLEdBQTBDRSxJQUExQyxHQUFpRCxLQUExRTtBQUNBbEIsU0FBRzhMLG9CQUFILENBQXdCLFVBQXhCLEVBQW9DLENBQXBDLEVBQXVDM04sWUFBdkMsQ0FBb0QsT0FBcEQsRUFBNkQyTCxJQUE3RDtBQUNBLFdBQUtpQyx1QkFBTDtBQUNBLFdBQUtyQyxPQUFMLEdBQWUsSUFBZjtBQUNELEtBbkptQjtBQW9KcEJzQyxnQkFwSm9CLDBCQW9KTDtBQUFBOztBQUNiaEksWUFBTUMsSUFBTixDQUFXaUYsS0FBSzRDLG9CQUFMLENBQTBCLFFBQTFCLENBQVgsRUFBZ0RsSSxPQUFoRCxDQUF3RCxnQkFBUTtBQUM5RCxZQUFJckosU0FBUyxPQUFLeUYsRUFBbEIsRUFBc0J6RixLQUFLSCxLQUFMLENBQVc2UixNQUFYLEdBQW9CLFVBQXBCLENBQXRCLEtBQ0sxUixLQUFLSCxLQUFMLENBQVc2UixNQUFYLEdBQW9CLFVBQXBCO0FBQ04sT0FIRDtBQUlELEtBekptQjtBQTBKcEJWLFFBMUpvQixrQkEwSmI7QUFDTHJDLFdBQUt6SSxXQUFMLENBQWlCLEtBQUtULEVBQXRCO0FBQ0EsV0FBS2tLLGdCQUFMLENBQXNCZ0MsVUFBdEI7QUFDQSxXQUFLeEMsT0FBTCxHQUFlLEtBQWY7QUFDRCxLQTlKbUI7QUErSnBCeUMsVUEvSm9CLG9CQStKWDtBQUNQLFVBQUksS0FBS3pDLE9BQVQsRUFBa0IsS0FBSzZCLElBQUwsR0FBbEIsS0FDSyxLQUFLN0ssSUFBTDtBQUNOLEtBbEttQjtBQW1LcEIwTCxpQkFuS29CLDJCQW1LSjtBQUNkLFVBQUksS0FBS3hDLFlBQVQsRUFBdUI7QUFDckIsYUFBSzVKLEVBQUwsQ0FBUVMsV0FBUixDQUFvQixLQUFLa0ssT0FBekI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLM0ssRUFBTCxDQUFRTSxXQUFSLENBQW9CLEtBQUtxSyxPQUF6QjtBQUNEOztBQUNELFdBQUtmLFlBQUwsR0FBb0IsQ0FBQyxLQUFLQSxZQUExQjtBQUNELEtBMUttQjtBQTJLcEJ5QyxlQTNLb0IsdUJBMktSOVgsQ0EzS1EsRUEyS0x5TCxFQTNLSyxFQTJLRDtBQUNqQixXQUFLQSxFQUFMLENBQVFoSCxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixhQUFhLEtBQUsrUCxLQUEzQztBQUNBLFVBQU1BLFFBQVEsS0FBS0EsS0FBTCxHQUFhM1IsZUFBTzNFLFNBQVAsR0FBbUJxTixHQUFHakcsWUFBSCxDQUFnQixZQUFoQixDQUE5QztBQUNBLFdBQUtpRyxFQUFMLENBQVFoSCxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixhQUFhZ1EsS0FBbkM7QUFDQSxXQUFLeFEsSUFBTCxDQUFVSSxPQUFWLENBQWtCMEIsSUFBbEIsQ0FBdUIwTyxLQUF2QixHQUErQkEsS0FBL0I7QUFDQSxXQUFLbUQsYUFBTDtBQUNBLFdBQUs3VCxJQUFMLENBQVUsb0JBQVYsRUFBZ0MsS0FBS0UsSUFBTCxDQUFVTSxFQUExQztBQUNELEtBbExtQjtBQW9McEJ1UixvQkFwTG9CLDhCQW9MRDtBQUFBOztBQUNqQmhULHFCQUFPbkUsR0FBUCxDQUFXLGFBQVgsRUFBMEJDLElBQTFCLENBQStCLHVCQUFlO0FBQzVDLFlBQUl5QyxXQUFKLEVBQWlCO0FBQ2YsY0FBSSxDQUFDLENBQUMsT0FBSzRULGdCQUFYLEVBQTZCOztBQUU3QixjQUFNdFMsVUFBVSxPQUFLc1MsZ0JBQUwsR0FBd0I7QUFBQSxtQkFBTSxPQUFLMEMsTUFBTCxFQUFOO0FBQUEsV0FBeEM7O0FBSGU7QUFBQTtBQUFBOztBQUFBO0FBS2YsaUNBQW9CLE9BQUsxVCxJQUFMLENBQVVFLFFBQTlCLDhIQUF3QztBQUFBLGtCQUEvQnVELE9BQStCO0FBQ3RDQSxzQkFBUWhFLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDZixPQUFsQyxFQUEyQyxLQUEzQztBQUNBK0Usc0JBQVFpQyxZQUFSLENBQXFCLE9BQXJCLEVBQThCeEssUUFBUWlSLElBQVIsQ0FBYUMsVUFBYixDQUF3QixhQUF4QixDQUE5QjtBQUNEO0FBUmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNoQixTQVRELE1BU087QUFDTCxpQkFBSzJHLG1CQUFMO0FBQ0Q7QUFDRixPQWJEO0FBY0QsS0FuTW1CO0FBb01wQkEsdUJBcE1vQixpQ0FvTUU7QUFDcEIsVUFBSSxDQUFDLEtBQUsvQixnQkFBVixFQUE0QjtBQURSO0FBQUE7QUFBQTs7QUFBQTtBQUVwQiw4QkFBb0IsS0FBS2hSLElBQUwsQ0FBVUUsUUFBOUIsbUlBQXdDO0FBQUEsY0FBL0J1RCxPQUErQjtBQUN0Q0Esa0JBQVEvRCxtQkFBUixDQUE0QixPQUE1QixFQUFxQyxLQUFLc1IsZ0JBQTFDLEVBQTRELEtBQTVEO0FBQ0F2TixrQkFBUW9RLGVBQVIsQ0FBd0IsT0FBeEI7QUFDRDtBQUxtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXJCLEtBMU1tQjtBQTJNcEJQLDJCQTNNb0IscUNBMk1NO0FBQ3hCLFVBQU1RLFdBQVcsS0FBS3ZNLEVBQUwsQ0FBUThMLG9CQUFSLENBQTZCLFVBQTdCLEVBQXlDLENBQXpDLENBQWpCO0FBQ0EsVUFBTVUsU0FBUztBQUFFQyx5QkFBaUIsQ0FBQyxPQUFEO0FBQW5CLE9BQWY7QUFDQSxVQUFNQyxXQUFXLEtBQUt4QyxnQkFBTCxHQUF3QixLQUFLQSxnQkFBTCxJQUF5QixJQUFJeUMsZ0JBQUosQ0FBcUIsS0FBS3hRLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUt5USxRQUF0QixDQUFyQixDQUFsRTtBQUNBRixlQUFTRyxPQUFULENBQWlCTixRQUFqQixFQUEyQkMsTUFBM0I7QUFDRCxLQWhObUI7QUFpTnBCWixlQWpOb0IseUJBaU5OO0FBQ1osVUFBTWtCLE9BQU8sS0FBS3JVLElBQUwsQ0FBVUUsUUFBVixDQUFtQixLQUFLRixJQUFMLENBQVVFLFFBQVYsQ0FBbUJuRSxNQUFuQixHQUE0QixDQUEvQyxFQUFrRHVNLHFCQUFsRCxFQUFiO0FBQ0EsYUFBTztBQUNMOEksV0FBR2lELEtBQUs5TCxHQUFMLEdBQVdwTSxPQUFPbVksV0FBbEIsR0FBZ0M3RCxLQUFLOEQsU0FEbkM7QUFFTGpMLFdBQUcrSyxLQUFLNUwsSUFBTCxHQUFZdE0sT0FBT3FZLFdBQW5CLEdBQWlDL0QsS0FBS2dFLFVBRnBDO0FBR0xyQixnQkFBUWlCLEtBQUtoTjtBQUhSLE9BQVA7QUFLRCxLQXhObUI7QUF5TnBCcU4sZUF6Tm9CLHVCQXlOUjVZLENBek5RLEVBeU5MeUwsRUF6TkssRUF5TkQ7QUFDakJ6TCxRQUFFK00sY0FBRjtBQUNBLFdBQUswSSxNQUFMLEdBQWN6VixFQUFFNlksS0FBRixHQUFVLEtBQUszRyxHQUFMLENBQVMxRSxDQUFqQztBQUNBLFdBQUtrSSxNQUFMLEdBQWMxVixFQUFFOFksS0FBRixHQUFVLEtBQUs1RyxHQUFMLENBQVNvRCxDQUFqQztBQUNBLFdBQUt0UixJQUFMLENBQVUsWUFBVixFQUF3QixLQUFLRSxJQUFMLENBQVVNLEVBQWxDO0FBQ0QsS0E5Tm1CO0FBK05wQnVVLFVBL05vQixrQkErTmIvUyxJQS9OYSxFQStOUGhHLENBL05PLEVBK05KO0FBQ2QsVUFBSWdHLFNBQVMsS0FBSzlCLElBQUwsQ0FBVU0sRUFBdkIsRUFBMkI7QUFDekIsWUFBTWlILEtBQUssS0FBS0EsRUFBaEI7QUFDQSxZQUFJa0IsT0FBTyxLQUFLdUYsR0FBTCxDQUFTMUUsQ0FBVCxHQUFheE4sRUFBRTZZLEtBQUYsR0FBVSxLQUFLcEQsTUFBdkM7QUFDQSxZQUFJaEosTUFBTSxLQUFLeUYsR0FBTCxDQUFTb0QsQ0FBVCxHQUFhdFYsRUFBRThZLEtBQUYsR0FBVSxLQUFLcEQsTUFBdEM7QUFDQWpLLFdBQUc1RixLQUFILENBQVM4RyxJQUFULEdBQWdCQSxPQUFPLElBQXZCO0FBQ0FsQixXQUFHNUYsS0FBSCxDQUFTNEcsR0FBVCxHQUFlQSxNQUFNLElBQXJCO0FBQ0Q7QUFDRixLQXZPbUI7QUF3T3BCdU0sYUF4T29CLHVCQXdPUjtBQUNWLFdBQUs5VSxJQUFMLENBQVVJLE9BQVYsQ0FBa0IwQixJQUFsQixDQUF1QmtNLEdBQXZCLEdBQTZCLEtBQUtBLEdBQWxDO0FBQ0EsV0FBS2xPLElBQUwsQ0FBVSxrQkFBVixFQUE4QixLQUFLRSxJQUFMLENBQVVNLEVBQXhDO0FBQ0QsS0EzT21CO0FBNE9wQjZULFlBNU9vQixvQkE0T1hZLGFBNU9XLEVBNE9JO0FBQ3RCLFVBQU1wVCxRQUFRb1QsY0FBYyxDQUFkLEVBQWlCM1QsTUFBakIsQ0FBd0JPLEtBQXRDO0FBQ0EsV0FBSzBQLElBQUwsR0FBWSxLQUFLclIsSUFBTCxDQUFVSSxPQUFWLENBQWtCMEIsSUFBbEIsQ0FBdUJ1UCxJQUF2QixHQUE4QjtBQUFFbFIsV0FBR3dCLE1BQU1xVCxLQUFYO0FBQWtCMUQsV0FBRzNQLE1BQU0wRjtBQUEzQixPQUExQztBQUNBLFdBQUt2SCxJQUFMLENBQVUsbUJBQVYsRUFBK0IsS0FBS0UsSUFBTCxDQUFVTSxFQUF6QztBQUNEO0FBaFBtQixHQUFmLENBQVA7QUFrUEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pQRDs7QUFDQTs7QUFDQTs7OztBQUVlLG9CQUFXO0FBRXhCLFNBQU8sSUFBSXBILGNBQUosQ0FBWTtBQUNqQkMsWUFBUTtBQUNOQyxXQUFLO0FBQ0gsb0JBQVksWUFEVDtBQUVILHdCQUFnQixtQkFGYjtBQUdILHlCQUFpQixTQUhkO0FBSUgsd0JBQWdCLFlBSmI7QUFLSCx3QkFBZ0IsV0FMYjtBQU1ILGdDQUF3QixXQU5yQjtBQU9ILGlDQUF5QixjQVB0QjtBQVFILHNCQUFjLG1CQVJYO0FBU0gsMEJBQWtCO0FBVGY7QUFEQyxLQURTO0FBZWpCNmIsV0FBTyxFQWZVO0FBZ0JqQnZCLFlBQVEsSUFoQlM7QUFpQmpCd0IsaUJBQWEsSUFqQkk7QUFrQmpCQyxxQkFBaUIsSUFsQkE7QUFvQmpCOWEsWUFwQmlCLHNCQW9CTjtBQUNQLFdBQUsrYSxZQUFMO0FBQ0gsS0F0QmdCO0FBdUJqQjVVLE9BdkJpQixlQXVCYlIsSUF2QmEsRUF1QlB3USxLQXZCTyxFQXVCQTtBQUNmLFVBQU0xTyxPQUFPLEtBQUttVCxLQUFMLENBQVdqVixLQUFLTSxFQUFoQixDQUFiO0FBQ0EsVUFBSXdCLElBQUosRUFBVSxPQUFPQSxJQUFQO0FBQ1YsV0FBS2hDLElBQUwsQ0FBVSxZQUFWO0FBQ0EsYUFBTyxLQUFLbVYsS0FBTCxDQUFXalYsS0FBS00sRUFBaEIsSUFBc0IsSUFBSStVLGFBQUosQ0FBVXJWLElBQVYsRUFBZ0J3USxLQUFoQixDQUE3QjtBQUNELEtBNUJnQjtBQTZCakI4RSxXQTdCaUIsbUJBNkJUOUwsS0E3QlMsRUE2QkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDYiw2QkFBaUJBLEtBQWpCLDhIQUF3QjtBQUFBLGNBQWZ4SixJQUFlOztBQUN0QixjQUFJQSxLQUFLSSxPQUFMLENBQWEwQixJQUFqQixFQUF1QjtBQUNyQixpQkFBS3RCLEdBQUwsQ0FBU1IsSUFBVDtBQUNEO0FBQ0Y7QUFMWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTWQsS0FuQ2dCO0FBb0NqQnVWLGNBcENpQixzQkFvQ052VixJQXBDTSxFQW9DQXdRLEtBcENBLEVBb0NPO0FBQ3RCLFdBQUtoUSxHQUFMLENBQVNSLElBQVQsRUFBZXdRLEtBQWYsRUFBc0J2SSxJQUF0QjtBQUNELEtBdENnQjtBQXVDakJ1TixxQkF2Q2lCLDZCQXVDQ2xWLEVBdkNELEVBdUNLO0FBQ3BCLGFBQU8sS0FBSzJVLEtBQUwsQ0FBVzNVLEVBQVgsQ0FBUDtBQUNBLFVBQUksS0FBS21WLE9BQUwsQ0FBYSxLQUFLUixLQUFsQixDQUFKLEVBQThCLEtBQUtuVixJQUFMLENBQVUsbUJBQVY7QUFDL0IsS0ExQ2dCO0FBMkNqQjRWLGNBM0NpQixzQkEyQ05wVixFQTNDTSxFQTJDRjtBQUNiLFVBQUksS0FBSzJVLEtBQUwsQ0FBVzNVLEVBQVgsQ0FBSixFQUFvQixLQUFLMlUsS0FBTCxDQUFXM1UsRUFBWCxFQUFlRyxNQUFmO0FBQ3JCLEtBN0NnQjtBQThDakJrVixhQTlDaUIsdUJBOENMO0FBQ1YsVUFBSSxDQUFDLEtBQUtWLEtBQVYsRUFBaUI7QUFDakIsVUFBTUEsUUFBUSxLQUFLQSxLQUFuQjtBQUNBLFVBQUkzWSxPQUFPSCxPQUFPM0IsUUFBUCxDQUFnQjZZLG9CQUFoQixDQUFxQyxRQUFyQyxFQUErQ3RYLE1BQS9DLEdBQXdELE1BQXhELEdBQWlFLE1BQTVFO0FBQUEsVUFDSTZaLFlBQVl0WixTQUFTLE1BQVQsR0FBa0IsSUFBbEIsR0FBeUIsS0FEekM7QUFBQSxVQUVJd0YsSUFGSjs7QUFHQSxXQUFLLElBQUlZLENBQVQsSUFBY3VTLEtBQWQsRUFBcUI7QUFDbkJuVCxlQUFPbVQsTUFBTXZTLENBQU4sQ0FBUDs7QUFDQSxZQUFJWixLQUFLbVAsT0FBTCxLQUFpQjJFLFNBQXJCLEVBQWdDO0FBQzlCOVQsZUFBS3hGLElBQUw7QUFDRDtBQUNGO0FBQ0YsS0ExRGdCO0FBMkRqQjhZLGdCQTNEaUIsMEJBMkRGO0FBQ2IsVUFBTVMsY0FBYzFaLE9BQU8zQixRQUFQLENBQWdCZ0YsSUFBaEIsQ0FBcUJlLFNBQXpDOztBQUNBMUIscUJBQU9uRSxHQUFQLENBQVcsWUFBWCxFQUF5QkMsSUFBekIsQ0FBOEIsa0JBQVU7QUFDdEMsWUFBSW1iLE1BQUosRUFBWUQsWUFBWXJWLEdBQVosQ0FBZ0IsY0FBaEIsRUFBWixLQUNLcVYsWUFBWXBWLE1BQVosQ0FBbUIsY0FBbkI7QUFDTixPQUhEO0FBSUQsS0FqRWdCO0FBa0VqQmdWLFdBbEVpQixtQkFrRVRNLEdBbEVTLEVBa0VKO0FBQ1gsYUFBTyxDQUFDQyxPQUFPQyxJQUFQLENBQVlGLEdBQVosRUFBaUJoYSxNQUF6QjtBQUNELEtBcEVnQjtBQXFFakJtYSxxQkFyRWlCLDZCQXFFQ3BVLElBckVELEVBcUVPO0FBQUE7O0FBQ3RCLFVBQU1vVCxjQUFjLEtBQUtBLFdBQUwsR0FBbUIsVUFBQ3BaLENBQUQ7QUFBQSxlQUFPLE1BQUtxYSxhQUFMLENBQW1CclUsSUFBbkIsRUFBeUJoRyxDQUF6QixDQUFQO0FBQUEsT0FBdkM7O0FBQ0EsVUFBTXFaLGtCQUFrQixLQUFLQSxlQUFMLEdBQXVCLFVBQUNyWixDQUFEO0FBQUEsZUFBTyxNQUFLc2EsZ0JBQUwsQ0FBc0J0VSxJQUF0QixFQUE0QmhHLENBQTVCLENBQVA7QUFBQSxPQUEvQzs7QUFDQSxVQUFNdWEsTUFBTWxhLE9BQU8zQixRQUFuQjtBQUNBNmIsVUFBSTVXLGdCQUFKLENBQXFCLFdBQXJCLEVBQWtDeVYsV0FBbEMsRUFBK0MsS0FBL0M7QUFDQW1CLFVBQUk1VyxnQkFBSixDQUFxQixTQUFyQixFQUFnQzBWLGVBQWhDLEVBQWlELEtBQWpEO0FBQ0FrQixVQUFJNVcsZ0JBQUosQ0FBcUIsV0FBckIsRUFBa0N5VixXQUFsQyxFQUErQyxLQUEvQztBQUNBbUIsVUFBSTVXLGdCQUFKLENBQXFCLFVBQXJCLEVBQWlDMFYsZUFBakMsRUFBa0QsS0FBbEQ7QUFDRCxLQTdFZ0I7QUE4RWpCaUIsb0JBOUVpQiw0QkE4RUF0VSxJQTlFQSxFQThFTWhHLENBOUVOLEVBOEVTO0FBQ3hCLFVBQU11YSxNQUFNbGEsT0FBTzNCLFFBQW5CO0FBQ0E2YixVQUFJM1csbUJBQUosQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS3dWLFdBQTFDLEVBQXVELEtBQXZEO0FBQ0FtQixVQUFJM1csbUJBQUosQ0FBd0IsU0FBeEIsRUFBbUMsS0FBS3lWLGVBQXhDLEVBQXlELEtBQXpEO0FBQ0FrQixVQUFJM1csbUJBQUosQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS3dWLFdBQTFDLEVBQXVELEtBQXZEO0FBQ0FtQixVQUFJM1csbUJBQUosQ0FBd0IsVUFBeEIsRUFBb0MsS0FBS3lWLGVBQXpDLEVBQTBELEtBQTFEO0FBRUEsV0FBS3JWLElBQUwsQ0FBVSxlQUFWLEVBQTJCZ0MsSUFBM0IsRUFBaUNoRyxDQUFqQztBQUNELEtBdEZnQjtBQXVGakJxYSxpQkF2RmlCLHlCQXVGSHJVLElBdkZHLEVBdUZHaEcsQ0F2RkgsRUF1Rk07QUFDckJBLFFBQUUrTSxjQUFGO0FBQ0EsV0FBSy9JLElBQUwsQ0FBVSxXQUFWLEVBQXVCZ0MsSUFBdkIsRUFBNkJoRyxDQUE3QjtBQUNELEtBMUZnQjtBQTJGakJ3YSxrQkEzRmlCLDBCQTJGRkMsSUEzRkUsRUEyRkk7QUFDbkIsV0FBS3pXLElBQUwsQ0FBVSxhQUFWLEVBQXlCLENBQUMsS0FBSzJWLE9BQUwsQ0FBYSxLQUFLUixLQUFsQixDQUExQixFQUFvRHNCLElBQXBEO0FBQ0Q7QUE3RmdCLEdBQVosQ0FBUDtBQStGRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdEOztBQUNBOzs7O0FBRWUsb0JBQVc7QUFDeEIsU0FBTyxJQUFJOVgsaUJBQUosQ0FBZTtBQUNwQjhJLFFBQUlwTCxPQUFPM0IsUUFEUztBQUVwQnVXLDBCQUFzQixJQUZGO0FBR3BCNVgsWUFBUTtBQUNOQyxXQUFLO0FBQ0gsdUJBQWUsVUFEWjtBQUVILHlCQUFpQixPQUZkO0FBR0gsdUJBQWUsUUFIWjtBQUlILDBCQUFrQixlQUpmO0FBS0gsOEJBQXNCLGVBTG5CO0FBTUgsaUNBQXlCLGlCQU50QjtBQU9ILHlCQUFpQixpQkFQZDtBQVFILHVCQUFlLGFBUlo7QUFTSCxpQ0FBeUI7QUFUdEIsT0FEQztBQVlOc1gsV0FBSztBQUNIOEYsaUJBQVM7QUFDUCxlQUFLO0FBREUsU0FETjtBQUlIQyx5QkFBaUI7QUFDZixlQUFLO0FBRFU7QUFKZDtBQVpDLEtBSFk7QUF5QnBCckcsU0FBSyxFQXpCZTtBQTBCcEJoUyxZQUFRLElBMUJZO0FBMkJwQm1RLFNBQUssS0EzQmU7QUE0QnBCbFYsaUJBQWEsS0E1Qk87QUE2QnBCcWQsaUJBQWEsS0E3Qk87QUE4QnBCQyx3QkFBb0IsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEdBQTdDLEVBQWtELEdBQWxELENBOUJBO0FBK0JwQkMsMkJBQXVCLEtBL0JIO0FBZ0NwQkMsZ0JBQVk7QUFDVixZQUFNLE9BREk7QUFFVixZQUFNLEdBRkk7QUFFQyxZQUFNLEdBRlA7QUFFWSxZQUFNLEdBRmxCO0FBRXVCLFlBQU0sR0FGN0I7QUFFa0MsWUFBTSxHQUZ4QztBQUdWLFlBQU0sR0FISTtBQUdDLFlBQU0sR0FIUDtBQUdZLFlBQU0sR0FIbEI7QUFHdUIsWUFBTSxHQUg3QjtBQUdrQyxZQUFNLEdBSHhDO0FBSVYsYUFBTyxHQUpHO0FBSUUsYUFBTztBQUpULEtBaENRO0FBdUNwQnhjLFlBdkNvQixzQkF1Q1Q7QUFDVCxXQUFLeWMsS0FBTDtBQUNELEtBekNtQjtBQTJDcEJ2WSxTQTNDb0IsaUJBMkNkQyxFQTNDYyxFQTJDVjtBQUNSLFVBQUlBLEVBQUosRUFBUSxLQUFLb1QsWUFBTCxHQUFSLEtBRUssS0FBSzNRLGVBQUw7QUFFTCxXQUFLN0MsTUFBTCxHQUFjSSxFQUFkO0FBQ0EsV0FBS3NZLEtBQUw7QUFDRCxLQWxEbUI7QUFtRHBCQSxTQW5Eb0IsbUJBbURaO0FBQUE7O0FBQ05qWSxxQkFBT25FLEdBQVAsQ0FBVyxNQUFYLEVBQW1CQyxJQUFuQixDQUF3QixrQkFBVTtBQUNoQyxjQUFLeUQsTUFBTCxHQUFjQSxNQUFkO0FBRUEsWUFBSSxNQUFLbVEsR0FBTCxJQUFZLENBQUNuUSxNQUFqQixFQUF5QixPQUFPLEtBQVA7O0FBRXpCLFlBQUlqQyxPQUFPZ0osTUFBUCxDQUFjaEosTUFBZCxDQUFxQjNCLFFBQXJCLENBQThCdWMsVUFBOUIsS0FBNkMsVUFBN0MsSUFBMkQsQ0FBQyxNQUFLSCxxQkFBckUsRUFBNEY7QUFDMUYsZ0JBQUtBLHFCQUFMLEdBQTZCLElBQTdCO0FBRUEsaUJBQU8sTUFBSzFWLFdBQUwsQ0FBaUIsTUFBakIsRUFBeUI7QUFBQSxtQkFBTSxNQUFLNFYsS0FBTCxFQUFOO0FBQUEsV0FBekIsRUFBNkMzYSxPQUFPZ0osTUFBUCxDQUFjaEosTUFBM0QsQ0FBUDtBQUNEOztBQUVEMEMsdUJBQU9uRixNQUFQLEdBQWdCLE1BQUtzZCxRQUFMLEVBQWhCO0FBRUEsY0FBSzVHLEdBQUwsR0FBV2pVLE9BQU8zQixRQUFQLENBQWdCNlYsR0FBM0I7QUFDQSxjQUFLNEcsV0FBTCxHQUFtQixzQkFBVSxNQUFLN0csR0FBZixDQUFuQjs7QUFFQSxjQUFLOEcsUUFBTDs7QUFDQSxjQUFLalcsZUFBTDs7QUFFQSxZQUFJN0MsTUFBSixFQUFZLE1BQUt3VCxZQUFMO0FBRVosY0FBS3JELEdBQUwsR0FBVyxJQUFYO0FBQ0QsT0F0QkQ7QUF1QkQsS0EzRW1CO0FBNEVwQnlJLFlBNUVvQixzQkE0RVQ7QUFDVCxhQUFPN2EsV0FBV0EsT0FBT2dKLE1BQVAsQ0FBY2hKLE1BQWhDO0FBQ0QsS0E5RW1CO0FBK0VwQmdiLGNBL0VvQixzQkErRVQ1UCxFQS9FUyxFQStFTDtBQUNiLFVBQU01TixPQUFPNE4sR0FBRzZQLE9BQWhCO0FBRUEsYUFBUXpkLFNBQVMsVUFBVCxJQUF1QkEsU0FBUyxPQUFoQyxJQUEyQzROLEdBQUc4UCxlQUFILEtBQXVCLE1BQTFFO0FBQ0QsS0FuRm1CO0FBb0ZwQkMsWUFwRm9CLG9CQW9GWHhiLENBcEZXLEVBb0ZSO0FBQUE7O0FBQ1YsVUFBSWtELE1BQU1sRCxFQUFFa0QsR0FBRixDQUFNdVksV0FBTixFQUFWO0FBQ0EsVUFBTUMsVUFBVTFiLEVBQUUwYixPQUFsQjtBQUFBLFVBQ0lDLFNBQVUzYixFQUFFNGIsT0FBRixJQUFhNWIsRUFBRTZiLE9BQWYsSUFBMEI3YixFQUFFOGIsTUFBNUIsSUFBc0M5YixFQUFFK2IsUUFEdEQ7QUFBQSxVQUVJQyxZQUFZLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FGaEI7QUFBQSxVQUdJQyxnQkFBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FIcEI7QUFBQSxVQUlJQyxlQUFlRCxjQUFjdE8sTUFBZCxDQUFxQnFPLFNBQXJCLEVBQWdDck8sTUFBaEMsQ0FBdUMsR0FBdkMsQ0FKbkI7QUFBQSxVQUtJd08saUJBQWlCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBTHJCO0FBT0EsVUFBSXBaLGVBQU85RSxNQUFQLElBQWlCZ2UsY0FBY3BOLFFBQWQsQ0FBdUIzTCxHQUF2QixDQUFyQixFQUFrRCxPQUFPLElBQVA7QUFFbEQsVUFBSSxLQUFLMlgsa0JBQUwsQ0FBd0JoTSxRQUF4QixDQUFpQzZNLE9BQWpDLENBQUosRUFBK0N4WSxNQUFNLEtBQUs2WCxVQUFMLENBQWdCVyxPQUFoQixDQUFOO0FBRS9DLFVBQUksQ0FBQ1EsYUFBYXJOLFFBQWIsQ0FBc0IzTCxHQUF0QixDQUFELElBQStCN0MsT0FBT3lELFlBQVAsR0FBc0JzWSxXQUF6RCxFQUFzRSxPQUFPLElBQVA7QUFFdEUsVUFBSSxLQUFLZixVQUFMLENBQWdCcmIsRUFBRXNGLE1BQWxCLENBQUosRUFBK0IsT0FBTyxJQUFQOztBQUUvQnZDLHFCQUFPbkUsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLG9CQUFZO0FBRXRDLFlBQUksQ0FBQ0UsUUFBTCxFQUFlLE9BQU8sSUFBUDtBQUVmLFlBQU1zZCxVQUFVblosR0FBaEI7QUFDQSxZQUFNakIsVUFBVWxELFNBQVNrRCxPQUF6QjtBQUNBLFlBQU1FLFlBQVlwRCxTQUFTb0QsU0FBM0I7QUFDQSxZQUFNbWEsY0FBY3JhLFFBQVFpQixHQUFSLENBQXBCO0FBQ0EsWUFBTXFaLG9CQUFvQkQsZUFBZSxDQUFDSCxlQUFldE4sUUFBZixDQUF3QjNMLEdBQXhCLENBQTFDO0FBQ0EsWUFBSXFaLGlCQUFKLEVBQXVCclosTUFBTSxJQUFOO0FBQ3ZCLFlBQU1zWixVQUFVcmEsVUFBVWUsR0FBVixDQUFoQjtBQUVBLFlBQUksQ0FBQ3NaLE9BQUwsRUFBYyxPQUFPLElBQVA7O0FBRWQsWUFBSSxDQUFDYixNQUFMLEVBQWE7QUFDWCxjQUFJelksUUFBUSxHQUFSLElBQWUsQ0FBQ3NaLFFBQVEsQ0FBUixDQUFoQixJQUE4QkEsUUFBUSxDQUFSLENBQWxDLEVBQThDO0FBQzVDLG1CQUFLQyxNQUFMO0FBQ0QsV0FGRCxNQUdLLElBQUlILGVBQWUsQ0FBQ0UsUUFBUSxDQUFSLENBQWhCLElBQThCQSxRQUFRLENBQVIsQ0FBbEMsRUFBOEM7QUFDakQsbUJBQUt4WSxJQUFMLENBQVUsb0JBQVYsRUFBZ0NoRSxDQUFoQyxFQUFtQ3FjLE9BQW5DO0FBQ0Q7QUFDRixTQVBELE1BT087QUFDTCxjQUFJLENBQUNHLFFBQVEsQ0FBUixDQUFMLEVBQWlCLE9BQU8sSUFBUDtBQUVqQixjQUFNRSxXQUFXRixRQUFRLENBQVIsRUFBV3hQLEtBQVgsQ0FBaUIsR0FBakIsQ0FBakI7QUFDQSxjQUFNMlAsS0FBS0QsU0FBUyxDQUFULENBQVg7QUFDQSxjQUFNRSxLQUFLRixTQUFTLENBQVQsQ0FBWDtBQUVBLGNBQUksQ0FBQzFjLEVBQUUyYyxFQUFGLENBQUQsSUFBV0MsTUFBTSxDQUFDNWMsRUFBRTRjLEVBQUYsQ0FBdEIsRUFBOEIsT0FBTyxJQUFQO0FBRTlCLGNBQUkxWixRQUFRLEdBQVosRUFBaUIsT0FBS3VaLE1BQUwsR0FBakIsS0FFSyxJQUFJSCxXQUFKLEVBQWlCO0FBQ3BCLG1CQUFLdFksSUFBTCxDQUFVLG9CQUFWLEVBQWdDaEUsQ0FBaEMsRUFBbUNxYyxPQUFuQztBQUNELFdBRkksTUFHQSxPQUFLclksSUFBTCxDQUFVLGdCQUFWLEVBQTRCZCxHQUE1QjtBQUNOO0FBQ0YsT0FyQ0Q7QUFzQ0QsS0EzSW1CO0FBNElwQnVaLFVBNUlvQixvQkE0SVg7QUFDUCxVQUFNSSxlQUFleGMsT0FBT3lELFlBQVAsR0FBc0JDLFFBQXRCLEVBQXJCO0FBRUEsVUFBSThZLFlBQUosRUFBa0IsS0FBSzdZLElBQUwsQ0FBVSxhQUFWLEVBQXlCNlksWUFBekI7QUFDbkIsS0FoSm1CO0FBaUpwQnpCLFlBakpvQixzQkFpSlQ7QUFBQTs7QUFDVCxXQUFLbEwsT0FBTCxDQUFhLFdBQWIsRUFBMEIsS0FBS29FLEdBQS9CLEVBQ0d6VixJQURILENBQ1EsZ0JBQVE7QUFDWixZQUFJNkosSUFBSixFQUFVLE9BQUtvVSxVQUFMLENBQWdCLE9BQUtDLGFBQUwsQ0FBbUJyVSxLQUFLMUssT0FBeEIsQ0FBaEIsRUFBa0QwSyxLQUFLc1UsbUJBQXZEO0FBQ1gsT0FISDtBQUlELEtBdEptQjtBQXVKcEJsYSxVQXZKb0Isa0JBdUpiOUUsT0F2SmEsRUF1SkprWixLQXZKSSxFQXVKRztBQUNyQkEsY0FBUUEsVUFBVSxJQUFWLEdBQWlCLElBQWpCLEdBQXdCLEtBQWhDO0FBQ0FsWixnQkFBVXlSLE1BQU13TixPQUFOLENBQWNqZixPQUFkLElBQXlCQSxPQUF6QixHQUFtQyxDQUFDQSxPQUFELENBQTdDO0FBQ0EsVUFBTWtmLGFBQWFsZixRQUFRLENBQVIsQ0FBbkI7QUFDQSxVQUFNa0IsYUFBYSxDQUFDZ2UsV0FBV2hmLGFBQS9CO0FBQ0EsVUFBTW9XLE1BQU1wVixhQUFhLEtBQUtpYyxXQUFsQixHQUFnQyxLQUFLN0csR0FBakQ7O0FBRUEsVUFBSTRDLFNBQVNnRyxXQUFXNUksR0FBWCxLQUFtQkEsR0FBaEMsRUFBcUM7QUFDbkN2Uix1QkFBT2hELFVBQVAsQ0FBa0IvQixPQUFsQixFQURtQyxDQUVuQzs7O0FBQ0EsWUFBSWtaLEtBQUosRUFBVyxLQUFLbFQsSUFBTCxDQUFVLGFBQVYsRUFBeUJoRyxPQUF6QjtBQUNaO0FBQ0YsS0FuS21CO0FBb0twQjJWLFlBcEtvQixvQkFvS1h6USxHQXBLVyxFQW9LTjtBQUNaLFVBQUlBLFFBQVEsR0FBWixFQUFpQixLQUFLdVosTUFBTDtBQUNsQixLQXRLbUI7QUF1S3BCSyxjQXZLb0Isc0JBdUtUOWUsT0F2S1MsRUF1S0FnZixtQkF2S0EsRUF1S3FCO0FBQ3ZDLFdBQUtsYSxNQUFMLENBQVk5RSxPQUFaLEVBQXFCLElBQXJCOztBQUVBLFVBQUksS0FBS3NFLE1BQUwsSUFBZSxDQUFDLEtBQUsvRSxXQUFyQixJQUFvQyxDQUFDbUIsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUF6QyxFQUFpRjtBQUMvRSxhQUFLcEIsV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxZQUFJeWYsbUJBQUosRUFBeUI7QUFDdkIsY0FBTUUsYUFBYWxmLFFBQVEsQ0FBUixDQUFuQjtBQUNBLGNBQU1rQixhQUFhLENBQUNnZSxXQUFXaGYsYUFBL0I7QUFDQSxjQUFNb1csTUFBTXBWLGFBQWEsS0FBS2ljLFdBQWxCLEdBQWdDLEtBQUs3RyxHQUFqRDs7QUFFQSxjQUFJMEksb0JBQW9CMUksR0FBcEIsS0FBNEJBLEdBQWhDLEVBQXFDO0FBQ25DdlIsMkJBQU9sRixJQUFQLEdBQWNtZixvQkFBb0JuZixJQUFsQztBQUNEO0FBQ0Y7O0FBQ0QsYUFBS21HLElBQUwsQ0FBVSxlQUFWLEVBQTJCaEcsT0FBM0I7QUFDRDtBQUNGLEtBeExtQjtBQXlMcEIrZSxpQkF6TG9CLHlCQXlMTi9lLE9BekxNLEVBeUxHO0FBQ3JCLFVBQUltZixnQkFBZ0IsRUFBcEI7QUFBQSxVQUNJM1AsSUFBSXhQLFFBQVFpQyxNQURoQjtBQUFBLFVBRUltZCxxQkFBcUIsS0FGekI7QUFBQSxVQUdJQyxtQkFBbUIsRUFIdkI7O0FBS0EsV0FBSyxJQUFJbmQsSUFBSSxDQUFSLEVBQVdWLEtBQWhCLEVBQXVCVSxJQUFJc04sQ0FBM0IsRUFBOEJ0TixHQUE5QixFQUFtQztBQUNqQ1YsZ0JBQVF4QixRQUFRa0MsQ0FBUixDQUFSOztBQUNBLFlBQUlWLE1BQU12QixNQUFWLEVBQWtCO0FBQ2hCa2Ysd0JBQWMvVixJQUFkLENBQW1CNUgsS0FBbkI7QUFDQTRkLCtCQUFxQixJQUFyQjtBQUNELFNBSEQsTUFHTztBQUNMQywyQkFBaUJqVyxJQUFqQixDQUFzQjVILEtBQXRCO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJNGQsc0JBQXNCQyxpQkFBaUJwZCxNQUEzQyxFQUFtRDtBQUNqRCxhQUFLK0QsSUFBTCxDQUFVLHdCQUFWO0FBQ0QsT0FGRCxNQUdLLElBQUlxWixpQkFBaUJwZCxNQUFqQixHQUEwQixDQUE5QixFQUFpQztBQUNwQyxhQUFLK0QsSUFBTCxDQUFVLGdDQUFWO0FBQ0FoRyxrQkFBVSxDQUFDcWYsaUJBQWlCLENBQWpCLENBQUQsQ0FBVjtBQUNEOztBQUVELFVBQUlGLGNBQWNsZCxNQUFsQixFQUEwQjtBQUN4QjhDLHVCQUFPOUUsTUFBUCxHQUFnQixJQUFoQjtBQUNBRCxrQkFBVW1mLGNBQWNyTyxJQUFkLENBQW1CLFVBQUN3TyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVyxJQUFJdkosSUFBSixDQUFTc0osRUFBRXZKLElBQVgsQ0FBRCxHQUFzQixJQUFJQyxJQUFKLENBQVN1SixFQUFFeEosSUFBWCxDQUFoQztBQUFBLFNBQW5CLENBQVY7QUFDRCxPQUhELE1BR087QUFDTGhSLHVCQUFPOUUsTUFBUCxHQUFnQixLQUFoQjtBQUNEOztBQUVELGFBQU9ELE9BQVA7QUFDRCxLQXhObUI7QUF5TnBCbUYscUJBek5vQiw2QkF5TkZuRCxDQXpORSxFQXlOQztBQUNuQixXQUFLZ0UsSUFBTCxDQUFVLG1CQUFWLEVBQStCLENBQUMzRCxPQUFPeUQsWUFBUCxHQUFzQnNZLFdBQXREO0FBQ0QsS0EzTm1CO0FBNE5wQm9CLGVBNU5vQix1QkE0TlJDLEdBNU5RLEVBNE5IQyxNQTVORyxFQTROSztBQUN2QixVQUFNbGUsUUFBUXVELGVBQU8vRSxPQUFQLENBQWVrYyxPQUFPQyxJQUFQLENBQVlwWCxlQUFPL0UsT0FBbkIsRUFBNEIsQ0FBNUIsQ0FBZixDQUFkOztBQUVBLFVBQ0UsQ0FBQytFLGVBQU9oRixLQUFSLElBQ0F5QixLQURBLElBRUFBLE1BQU10QixhQUZOLElBR0Esc0JBQVV3ZixNQUFWLE1BQXNCLEtBQUt2QyxXQUgzQixJQUlBdUMsV0FBVyxLQUFLcEosR0FMbEIsRUFNRTtBQUNBLGFBQUs3QixHQUFMLEdBQVcsS0FBWDtBQUNBLGFBQUtsVixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsYUFBS3lHLElBQUwsQ0FBVSxZQUFWO0FBQ0Q7QUFDRixLQTFPbUI7QUEyT3BCMlosaUJBM09vQiwyQkEyT0o7QUFDZCxXQUFLL0MsV0FBTCxHQUFtQixJQUFuQjtBQUNELEtBN09tQjtBQThPcEJnRCxtQkE5T29CLDZCQThPRjtBQUNoQixXQUFLaEQsV0FBTCxHQUFtQixLQUFuQjtBQUNELEtBaFBtQjtBQWlQcEJpRCxpQkFqUG9CLHlCQWlQTnBELElBalBNLEVBaVBBO0FBQ2xCLFdBQUt6VyxJQUFMLENBQVUsWUFBVixFQUF3QjtBQUN0QkgsbUJBQVcsQ0FBQ3hELE9BQU95RCxZQUFQLEdBQXNCc1ksV0FEWjtBQUV0QjdYLGtCQUFVLENBQUMsQ0FBQzdGLFNBQVNtRyxjQUFULENBQXdCLDRCQUF4QixDQUZVO0FBR3RCK1YscUJBQWEsS0FBS0E7QUFISSxPQUF4QixFQUlHSCxJQUpIO0FBS0Q7QUF2UG1CLEdBQWYsQ0FBUDtBQXlQRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1BEOztBQUNBOzs7O0FBRWUsb0JBQVc7QUFFeEIsU0FBTyxJQUFJOVgsaUJBQUosQ0FBZTtBQUN0QnRGLFlBQVE7QUFDSkMsV0FBSztBQUNILCtCQUF1QixPQURwQjtBQUVILDBCQUFrQixVQUZmO0FBR0gsZ0NBQXdCLFVBSHJCO0FBSUgsZ0NBQXdCLE1BSnJCO0FBS0gsaUNBQXlCO0FBTHRCO0FBREQsS0FEYztBQVVwQm1PLFFBQUksSUFWZ0I7QUFXcEJuSixZQUFRLElBWFk7QUFZcEJ3YixXQUFPLENBWmE7QUFhcEJDLGdCQUFZLEdBYlE7QUFjcEJDLGtCQUFjLENBZE07QUFlcEJDLGdCQUFZLENBZlE7QUFnQnBCQyxtQkFBZSxJQWhCSztBQWtCcEIzZixZQWxCb0Isc0JBa0JUO0FBQUE7O0FBQ1QsV0FBSzBHLFFBQUwsR0FBZ0JwRyxJQUFoQixDQUFxQjtBQUFBLGVBQU0sTUFBS3VLLE1BQUwsRUFBTjtBQUFBLE9BQXJCO0FBQ0QsS0FwQm1CO0FBc0JwQkEsVUF0Qm9CLG9CQXNCWDtBQUFBOztBQUNQLFVBQU0rVSxRQUFRLEtBQUsxUyxFQUFMLEdBQVVwTCxPQUFPM0IsUUFBUCxDQUFnQmlMLGFBQWhCLENBQThCLGlCQUE5QixDQUF4QjtBQUVBLE9BQUM7QUFDQ3lVLGNBQU0sa0JBRFA7QUFFQ3JZLGNBQU0zRyxRQUFRaVIsSUFBUixDQUFhQyxVQUFiLENBQXdCLFdBQXhCO0FBRlAsT0FBRCxFQUdHO0FBQ0Q4TixjQUFNLGlCQURMO0FBRURyWSxjQUFNd1EsT0FBT0MsWUFBUCxDQUFvQixLQUFwQjtBQUZMLE9BSEgsRUFNRztBQUNENEgsY0FBTSxlQURMO0FBRUQ5VSxlQUFPO0FBQ0w4VSxnQkFBTTtBQUREO0FBRk4sT0FOSCxFQVdHO0FBQ0RBLGNBQU0sa0JBREw7QUFFRHJZLGNBQU0zRyxRQUFRaVIsSUFBUixDQUFhQyxVQUFiLENBQXdCLFFBQXhCO0FBRkwsT0FYSCxFQWVHakIsT0FmSCxDQWVXLGVBQU87QUFDZCxZQUFNNUQsS0FBS3BMLE9BQU8zQixRQUFQLENBQWdCaUwsYUFBaEIsQ0FBOEJzUSxJQUFJbUUsSUFBbEMsQ0FBWDtBQUNBRCxjQUFNcFMsV0FBTixDQUFrQk4sRUFBbEI7QUFDQSxlQUFLd08sSUFBSW1FLElBQVQsSUFBaUIzUyxFQUFqQjtBQUNBLFlBQUl3TyxJQUFJbFUsSUFBUixFQUFjMEYsR0FBR3FFLFdBQUgsR0FBaUJtSyxJQUFJbFUsSUFBckI7O0FBQ2QsWUFBSWtVLElBQUkzUSxLQUFSLEVBQWU7QUFDYixjQUFNQSxRQUFRakosT0FBTzNCLFFBQVAsQ0FBZ0JpTCxhQUFoQixDQUE4QnNRLElBQUkzUSxLQUFKLENBQVU4VSxJQUF4QyxDQUFkO0FBQ0EzUyxhQUFHTSxXQUFILENBQWV6QyxLQUFmO0FBQ0EsaUJBQUsyUSxJQUFJM1EsS0FBSixDQUFVOFUsSUFBZixJQUF1QjlVLEtBQXZCO0FBQ0Q7QUFDRixPQXpCSDtBQTBCRCxLQW5EbUI7QUFxRHBCN0ssVUFyRG9CLGtCQXFEYjRmLEdBckRhLEVBcURSO0FBQ1YsV0FBS1AsS0FBTCxHQUFhTyxHQUFiO0FBQ0EsV0FBS0osVUFBTCxHQUFrQixLQUFLRixVQUFMLEdBQWtCTSxHQUFwQztBQUNBLFdBQUtMLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxXQUFLTSxVQUFMLENBQWdCelksS0FBaEIsQ0FBc0JxVCxLQUF0QixHQUE4QixDQUE5QjtBQUNELEtBMURtQjtBQTJEcEJwUCxTQTNEb0IsaUJBMkRkdVUsR0EzRGMsRUEyRFQ7QUFDVCxVQUFJLENBQUNBLEdBQUQsSUFBUSxDQUFDLEtBQUsvYixNQUFsQixFQUEwQjtBQUMxQixXQUFLN0QsTUFBTCxDQUFZNGYsR0FBWjtBQUNBLFVBQU1ILGdCQUFnQixLQUFLQSxhQUFMLEdBQXFCLEtBQUtLLE1BQUwsQ0FBWTlhLElBQVosQ0FBaUIsSUFBakIsQ0FBM0M7QUFDQSxVQUFNK2EsZUFBZSxLQUFLQSxZQUFMLEdBQW9CLEtBQUtDLElBQUwsQ0FBVWhiLElBQVYsQ0FBZSxJQUFmLENBQXpDO0FBQ0FwRCxhQUFPM0IsUUFBUCxDQUFnQmdGLElBQWhCLENBQXFCcUksV0FBckIsQ0FBaUMsS0FBS04sRUFBdEM7QUFDQSxXQUFLaVQsZ0JBQUwsQ0FBc0IvYSxnQkFBdEIsQ0FBdUMsT0FBdkMsRUFBZ0R1YSxhQUFoRCxFQUErRCxLQUEvRDtBQUNBLFdBQUtTLGVBQUwsQ0FBcUJoYixnQkFBckIsQ0FBc0MsT0FBdEMsRUFBK0M2YSxZQUEvQyxFQUE2RCxLQUE3RDtBQUNELEtBbkVtQjtBQW9FcEJJLFlBcEVvQixzQkFvRVQ7QUFDVCxVQUFNMUYsUUFBUSxLQUFLOEUsWUFBTCxJQUFxQixLQUFLQyxVQUF4QztBQUNBLFdBQUtLLFVBQUwsQ0FBZ0J6WSxLQUFoQixDQUFzQnFULEtBQXRCLEdBQThCQSxRQUFRLElBQXRDO0FBQ0QsS0F2RW1CO0FBd0VwQnVGLFFBeEVvQixrQkF3RWI7QUFDTCxVQUFJO0FBQ0ZwZSxlQUFPM0IsUUFBUCxDQUFnQmdGLElBQWhCLENBQXFCd0ksV0FBckIsQ0FBaUMsS0FBS1QsRUFBdEM7QUFDQSxhQUFLaVQsZ0JBQUwsQ0FBc0I5YSxtQkFBdEIsQ0FBMEMsT0FBMUMsRUFBbUQsS0FBS3NhLGFBQXhELEVBQXVFLEtBQXZFO0FBQ0EsYUFBS1MsZUFBTCxDQUFxQi9hLG1CQUFyQixDQUF5QyxPQUF6QyxFQUFrRCxLQUFLNGEsWUFBdkQsRUFBcUUsS0FBckU7QUFDRCxPQUpELENBSUUsT0FBTXhlLENBQU4sRUFBUyxDQUFFO0FBQ2QsS0E5RW1CO0FBK0VwQnVlLFVBL0VvQixvQkErRVg7QUFDUCxXQUFLRSxJQUFMO0FBQ0EsV0FBS3phLElBQUwsQ0FBVSxzQkFBVjtBQUNELEtBbEZtQjtBQW1GcEJpQixZQW5Gb0Isc0JBbUZUO0FBQUE7O0FBQ1QsYUFBT2xDLGVBQU9uRSxHQUFQLENBQVcsYUFBWCxFQUEwQkMsSUFBMUIsQ0FBK0I7QUFBQSxlQUFlLE9BQUt5RCxNQUFMLEdBQWNQLFdBQTdCO0FBQUEsT0FBL0IsQ0FBUDtBQUNEO0FBckZtQixHQUFmLENBQVA7QUF1RkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGRDs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU04YyxZOzs7OztBQUVKLHdCQUFZcmYsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixzRkFBTUEsS0FBTjtBQUVBLFVBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtvTyxJQUFMLEdBQVksRUFBWjtBQUNBLFVBQUtrUixhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUtDLElBQUwsR0FBWXhmLE1BQU1HLE1BQU4sR0FBZSxNQUFmLEdBQXdCLE9BQXBDOztBQUVBLFVBQUtxRSxJQUFMLENBQVUscUJBQVYsRUFBaUN4RSxNQUFNa08sS0FBTixDQUFZek4sTUFBN0M7O0FBQ0EsVUFBS3lDLEVBQUwsQ0FBUSxzQkFBUixFQUFnQztBQUFBLGFBQU0sTUFBS3VjLFFBQUwsR0FBZ0IsSUFBdEI7QUFBQSxLQUFoQzs7QUFWaUI7QUFXbEI7Ozs7b0NBRWV2VyxJLEVBQU13VyxJLEVBQU1DLEUsRUFBSTtBQUM5QkQsYUFBT0EsS0FBS3piLElBQUwsQ0FBVSxJQUFWLENBQVA7QUFDQTBiLFdBQUtBLEdBQUcxYixJQUFILENBQVEsSUFBUixDQUFMOztBQUVGLE9BQUMsU0FBUzJiLEdBQVQsR0FBZTtBQUFBOztBQUNmLFlBQUlDLFNBQVMsQ0FBQyxJQUFJckwsSUFBSixFQUFELEdBQWMsR0FBM0I7O0FBRUEsV0FBRztBQUNGLGNBQUk7QUFDRWtMLGlCQUFLeFcsS0FBS3FHLEtBQUwsRUFBTDtBQUNELFdBRkwsQ0FFTSxPQUFNL08sQ0FBTixFQUFTO0FBQ1RNLHVCQUFXO0FBQUEscUJBQU0sT0FBSzBELElBQUwsQ0FBVSxzQkFBVixFQUFrQ2hFLEVBQUUrRCxRQUFGLEVBQWxDLENBQU47QUFBQSxhQUFYLEVBQWtFLENBQWxFO0FBQ0Q7QUFFTCxTQVBELFFBT1MyRSxLQUFLekksTUFBTCxHQUFjLENBQWQsSUFBbUJvZixTQUFTLENBQUMsSUFBSXJMLElBQUosRUFQdEM7O0FBU0EsWUFBSXRMLEtBQUt6SSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUJJLE9BQU9DLFVBQVAsQ0FBa0I7QUFBQSxpQkFBTThlLEtBQU47QUFBQSxTQUFsQixFQUErQixDQUEvQixFQUFyQixLQUNLRDtBQUNMLE9BZEQ7QUFlQTs7OzZCQUNTO0FBQ1AsVUFBSSxLQUFLRixRQUFULEVBQW1CLE9BQU8sS0FBUDtBQUVuQixVQUFJSyxLQUFLLEtBQUsxUixJQUFMLENBQVUzTixNQUFuQjs7QUFDQSxVQUFJcWYsRUFBSixFQUFRO0FBQ04sZUFBTUEsSUFBTixFQUFZO0FBQ1YsaUJBQU8sS0FBSzFSLElBQUwsQ0FBVTBSLEVBQVYsRUFBY0MsSUFBckI7QUFDRDs7QUFDRCxhQUFLdmIsSUFBTCxDQUFVLFlBQVYsRUFBd0IsS0FBSzhhLGFBQTdCO0FBQ0Q7O0FBQ0QsV0FBSzlhLElBQUwsQ0FBVSxzQkFBVixFQUFrQyxLQUFLeEUsS0FBTCxDQUFXM0IsSUFBN0MsRUFBbUQsS0FBS2toQixRQUF4RCxFQUFrRSxLQUFLblIsSUFBdkUsRUFBNkUsS0FBS29SLElBQWxGO0FBQ0Q7Ozs7RUE5Q3dCNWhCLGM7O0lBaURyQm9pQixROzs7OztBQUVKLG9CQUFZaGdCLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsbUZBQU1BLEtBQU47QUFFQSxXQUFLaWdCLEtBQUwsR0FBYSxFQUFiO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLEdBQXJCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQUMsSUFBSTlMLElBQUosRUFBRCxHQUFjLE9BQUs2TCxhQUFqQztBQUNBLFdBQUtFLEdBQUwsR0FBV3ZnQixNQUFNa08sS0FBTixDQUFZek4sTUFBWixLQUF1QixDQUF2QixJQUE0QlQsTUFBTWtPLEtBQU4sQ0FBWSxDQUFaLEVBQWVsSixFQUFmLElBQXFCLENBQTVEOztBQUVBLFdBQUt3YixJQUFMOztBQVhpQjtBQVlsQjs7OzsyQkFPTTtBQUNMLFVBQUl4Z0IsUUFBUSxLQUFLQSxLQUFqQjtBQUFBLFVBQ0l5Z0IsTUFBTSxFQURWO0FBQUEsVUFDY0MsWUFBWSxFQUQxQjtBQUFBLFVBRUl4UyxRQUFRbE8sTUFBTWtPLEtBRmxCO0FBQUEsVUFHSUYsSUFBSUUsTUFBTXpOLE1BSGQ7QUFBQSxVQUlJQyxJQUFJLENBSlI7QUFBQSxVQUlXZ0UsSUFKWDs7QUFNQSxhQUFPaEUsSUFBSXNOLENBQVgsRUFBY3ROLEdBQWQsRUFBbUI7QUFDakJnRSxlQUFPd0osTUFBTXhOLENBQU4sQ0FBUDtBQUVBLGFBQUtpZ0Isa0JBQUwsQ0FBd0JqYyxJQUF4QixFQUE4QmtjLGdCQUE5QixDQUErQ2xjLElBQS9DO0FBRUEsWUFBSUEsS0FBSzRCLEtBQUwsQ0FBVzJFLEVBQVgsS0FBa0IsSUFBdEIsRUFBNEJ5VixVQUFVOVksSUFBVixDQUFlbEQsSUFBZixFQUE1QixLQUNLK2IsSUFBSTdZLElBQUosQ0FBU2xELElBQVQ7QUFDTjs7QUFFRCxXQUFLdWIsS0FBTCxDQUFXclksSUFBWCxDQUFnQjZZLEdBQWhCOztBQUVBLFdBQUsvZixJQUFJLENBQUosRUFBT3NOLElBQUkwUyxVQUFVamdCLE1BQTFCLEVBQWtDQyxJQUFJc04sQ0FBdEMsRUFBeUN0TixHQUF6QyxFQUE4QztBQUM1QyxhQUFLdWYsS0FBTCxDQUFXclksSUFBWCxDQUFnQixDQUFDOFksVUFBVWhnQixDQUFWLENBQUQsQ0FBaEI7QUFDRDs7QUFFRCxXQUFLc1osT0FBTDtBQUNEOzs7dUNBQ2tCdFYsSSxFQUFNO0FBQ3ZCLFVBQUksT0FBT0EsS0FBSzRCLEtBQUwsQ0FBVzBFLENBQWxCLEtBQXdCLFdBQTVCLEVBQXlDO0FBQ3ZDLFlBQUkxRSxRQUFRNUIsS0FBSzRCLEtBQWpCO0FBQUEsWUFDSXVhLGlCQUFpQjtBQUNmN1YsYUFBRzFFLE1BQU1PLFdBRE07QUFFZm9FLGNBQUkzRSxNQUFNd2EsYUFGSztBQUdmMVYsY0FBSTlFLE1BQU15YSxtQkFISztBQUlmNVYsY0FBSTdFLE1BQU0wYSxxQkFKSztBQUtmM1YsY0FBSS9FLE1BQU0yYSxpQkFMSztBQU1mM1YsY0FBSWhGLE1BQU00YSx1QkFOSztBQU9mM1YsY0FBSWpGLE1BQU02YTtBQVBLLFNBRHJCO0FBVUEsZUFBT3pjLEtBQUs0QixLQUFaO0FBQ0E1QixhQUFLNEIsS0FBTCxHQUFhdWEsY0FBYjtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7cUNBQ2dCbmMsSSxFQUFNO0FBQ3JCLFVBQUk2QixPQUFPN0IsS0FBSzZCLElBQWhCO0FBQUEsVUFDSTZhLGNBQWM3YSxLQUFLaUwsSUFBTCxFQURsQjtBQUFBLFVBRUk2UCxlQUFlLEtBQUtDLE9BQUwsQ0FBYTVjLEtBQUs2QixJQUFsQixDQUZuQjtBQUlBN0IsV0FBS3FiLElBQUwsR0FBWTtBQUNWd0Isb0JBQVloYixLQUFLOUYsTUFEUDtBQUVWMmdCLHFCQUFhQSxXQUZIO0FBR1ZJLDJCQUFtQkosWUFBWTNnQixNQUhyQjtBQUlWNGdCLHNCQUFjQSxZQUpKO0FBS1ZJLDRCQUFvQkosYUFBYTVnQixNQUx2QjtBQU1WaWhCLDJCQUFtQixFQU5UO0FBT1ZDLDhCQUFzQixFQVBaO0FBUVZDLDRCQUFvQixFQVJWO0FBU1ZDLHNCQUFjLEVBVEo7QUFVVkMsOEJBQXNCO0FBVlosT0FBWjtBQWFBcGQsV0FBS3ZFLE1BQUwsR0FBYyxLQUFLSCxLQUFMLENBQVdHLE1BQXpCO0FBQ0Q7Ozs4QkFDUztBQUFBOztBQUNSLFVBQUksS0FBS2dnQixLQUFMLEtBQWUsQ0FBbkIsRUFBc0IsS0FBSzRCLGFBQUw7QUFFdEIsVUFBSTdULFFBQVEsS0FBS0EsS0FBTCxHQUFhLEtBQUsrUixLQUFMLENBQVcxUSxLQUFYLEVBQXpCO0FBQUEsVUFDSTlPLFNBQVN5TixRQUFRQSxNQUFNek4sTUFBZCxHQUF1QixDQURwQztBQUdBLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxVQUFJQSxNQUFKLEVBQVk7QUFDVixhQUFLdWhCLGdCQUFMLENBQXNCbmhCLE9BQU8zQixRQUFQLENBQWdCZ0YsSUFBdEMsRUFDSytkLGdCQURMLENBQ3NCL1QsS0FEdEIsRUFDNkJ6TixNQUQ3QjtBQUdBLFlBQUksS0FBSzBmLEtBQUwsS0FBZSxDQUFmLElBQW9CMWYsU0FBUyxDQUFqQyxFQUNJLEtBQUt5aEIsb0JBQUw7QUFFSixhQUFLQyxtQkFBTCxHQUNLQyxnQkFETCxHQUVLQyxhQUZMO0FBSUEsYUFBS2xDLEtBQUw7O0FBRUEsWUFBSSxLQUFLRixLQUFMLENBQVd4ZixNQUFYLElBQXFCLENBQUMsS0FBS2dmLFFBQS9CLEVBQXlDO0FBQ3ZDLGNBQUksS0FBSzZDLEtBQUwsR0FBYSxDQUFDLElBQUk5TixJQUFKLEVBQWxCLEVBQThCMVQsV0FBVztBQUFBLG1CQUFNLE9BQUtrWixPQUFMLEVBQU47QUFBQSxXQUFYLEVBQWlDLENBQWpDLEVBQTlCLEtBQ0ssS0FBS0EsT0FBTDtBQUNOLFNBSEQsTUFJSyxLQUFLdUksTUFBTDtBQUNOLE9BbEJELE1BbUJLLEtBQUtBLE1BQUw7QUFDTjs7O29DQUNlO0FBQ2QsVUFBSXJVLFFBQVEsS0FBSytSLEtBQWpCO0FBQUEsVUFDSWpTLElBQUlFLFFBQVFBLE1BQU16TixNQUFkLEdBQXVCLENBRC9CO0FBQUEsVUFFSXNmLE9BQU8sRUFGWDtBQUFBLFVBR0l5QyxNQUFNLEVBSFY7QUFBQSxVQUlJOWhCLElBQUksQ0FKUjtBQUFBLFVBS0lnRSxJQUxKO0FBQUEsVUFLVW9SLENBTFY7O0FBT0EsYUFBTzlILEdBQVAsRUFBWTtBQUNWLFlBQUksQ0FBQ0UsTUFBTUYsQ0FBTixFQUFTdk4sTUFBZCxFQUFzQjtBQUN0QmlFLGVBQU93SixNQUFNRixDQUFOLEVBQVMsQ0FBVCxDQUFQO0FBQ0ErUixhQUFLcmIsS0FBS00sRUFBVixJQUFnQk4sSUFBaEI7QUFDRDs7QUFDRCxXQUFLdWIsS0FBTCxHQUFhLEVBQWI7O0FBRUEsV0FBS25LLElBQUlpSyxLQUFLdGYsTUFBZCxFQUFzQkMsSUFBSW9WLENBQTFCLEVBQTZCcFYsR0FBN0IsRUFBa0M7QUFDaEMsWUFBSXFmLEtBQUtyZixDQUFMLENBQUosRUFBYSxLQUFLdWYsS0FBTCxDQUFXclksSUFBWCxDQUFnQixDQUFDbVksS0FBS3JmLENBQUwsQ0FBRCxDQUFoQjtBQUNkOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7cUNBQ2dCd04sSyxFQUFPRixDLEVBQUc7QUFDekIsVUFBSXlVLHVCQUF1QixLQUFLQSxvQkFBaEM7QUFBQSxVQUNJQyw0QkFBNEIsS0FBS0EseUJBQUwsR0FBaUMsRUFEakU7QUFBQSxVQUVJQyxlQUFlLEVBRm5CO0FBQUEsVUFHSWplLElBSEo7QUFBQSxVQUdVa2UsUUFIVjtBQUFBLFVBR29CdkIsWUFIcEI7QUFBQSxVQUdrQ0ksa0JBSGxDO0FBQUEsVUFHc0Q1VixDQUh0RDtBQUFBLFVBR3lESixXQUh6RDs7QUFLQSxhQUFPdUMsR0FBUCxFQUFZO0FBQ1ZuQyxZQUFJdk4sU0FBSjtBQUNBb0csZUFBT3dKLE1BQU1GLENBQU4sQ0FBUDtBQUNBNFUsbUJBQVdsZSxLQUFLcWIsSUFBaEI7O0FBRUEsWUFBSSxDQUFDNkMsUUFBTCxFQUFlO0FBQ2IxVSxnQkFBTXVCLE1BQU4sQ0FBYXpCLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQTtBQUNEOztBQUVELFlBQUk0VSxTQUFTbEIsaUJBQVQsQ0FBMkJqaEIsTUFBL0IsRUFBdUM7QUFFckNpaUIsc0NBQTRCQSwwQkFBMEJ2VSxNQUExQixDQUFpQ3lVLFNBQVNsQixpQkFBMUMsQ0FBNUI7QUFDQWlCLHlCQUFlQSxhQUFheFUsTUFBYixDQUFvQnlVLFNBQVNqQixvQkFBN0IsQ0FBZjtBQUVELFNBTEQsTUFLTztBQUVMTix5QkFBZXVCLFNBQVN2QixZQUF4QjtBQUNBSSwrQkFBcUJtQixTQUFTbkIsa0JBQTlCOztBQUVBLGlCQUFPNVYsTUFBTSxDQUFDLENBQWQsRUFBaUI7QUFDZixnQkFBSUEsTUFBTXZOLFNBQVYsRUFBcUJ1TixJQUFJLENBQUMsQ0FBTDtBQUNyQkEsZ0JBQUk0VyxxQkFBcUI3UyxPQUFyQixDQUE2QnlSLFlBQTdCLEVBQTJDeFYsSUFBSSxDQUEvQyxDQUFKO0FBQ0FKLDBCQUFjSSxJQUFJNFYsa0JBQWxCO0FBQ0FtQixxQkFBU2xCLGlCQUFULENBQTJCOVosSUFBM0IsQ0FBZ0MsQ0FBQ2lFLENBQUQsRUFBSUosV0FBSixFQUFpQi9HLElBQWpCLENBQWhDO0FBQ0FrZSxxQkFBU2pCLG9CQUFULENBQThCL1osSUFBOUIsQ0FBbUM2RCxXQUFuQztBQUNBaVgsc0NBQTBCOWEsSUFBMUIsQ0FBK0IsQ0FBQ2lFLENBQUQsRUFBSUosV0FBSixFQUFpQi9HLElBQWpCLENBQS9CO0FBQ0FpZSx5QkFBYS9hLElBQWIsQ0FBa0I2RCxXQUFsQjtBQUNEOztBQUVEbVgsbUJBQVNsQixpQkFBVCxDQUEyQmpWLEdBQTNCO0FBQ0FpVyxvQ0FBMEJqVyxHQUExQjtBQUNBa1csdUJBQWFsVyxHQUFiOztBQUVBLGNBQUksQ0FBQ21XLFNBQVNsQixpQkFBVCxDQUEyQmpoQixNQUFoQyxFQUF3QztBQUN0QyxpQkFBSzJOLElBQUwsQ0FBVXhHLElBQVYsQ0FBZWxELElBQWY7QUFDQSxpQkFBSzRhLGFBQUwsQ0FBbUI1YSxLQUFLTSxFQUF4QixJQUE4QjtBQUFFdUIsb0JBQU03QixLQUFLNkIsSUFBYjtBQUFtQnNjLHNCQUFRampCLFFBQVFpUixJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUNBQXhCO0FBQTNCLGFBQTlCO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFdBQUtnUywwQkFBTCxDQUFnQ0oseUJBQWhDO0FBQ0EsV0FBS0ssV0FBTCxHQUFtQjFVLEtBQUtDLEdBQUwsQ0FBU0MsS0FBVCxDQUFlLElBQWYsRUFBcUJvVSxZQUFyQixDQUFuQjtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0NBQzBCSyxTLEVBQVc7QUFDcEMsVUFBSWhWLElBQUlnVixVQUFVdmlCLE1BQWxCO0FBQUEsVUFDSXNmLE9BQU8sRUFEWDtBQUFBLFVBRUlyZixJQUFJLENBRlI7QUFBQSxVQUdJZ1MsR0FISjtBQUFBLFVBR1NwSSxLQUhUO0FBQUEsVUFHZ0J3TCxDQUhoQjs7QUFLQSxhQUFPOUgsR0FBUCxFQUFZO0FBQ1YwRSxjQUFNc1EsVUFBVWhWLENBQVYsQ0FBTjtBQUNBMUQsZ0JBQVFvSSxJQUFJLENBQUosQ0FBUjtBQUVBLFlBQUlxTixLQUFLelYsS0FBTCxDQUFKLEVBQWlCeVYsS0FBS3RRLE1BQUwsQ0FBWW5GLFFBQVEsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEJvSSxHQUExQixFQUFqQixLQUNLcU4sS0FBS3pWLEtBQUwsSUFBY29JLEdBQWQ7QUFDTjs7QUFDRG9ELFVBQUlpSyxLQUFLdGYsTUFBVDtBQUNBLFdBQUtpaUIseUJBQUwsR0FBaUMsRUFBakM7O0FBRUEsYUFBT2hpQixJQUFJb1YsQ0FBWCxFQUFjcFYsR0FBZDtBQUNFLFlBQUlxZixLQUFLcmYsQ0FBTCxDQUFKLEVBQWEsS0FBS2dpQix5QkFBTCxDQUErQjlhLElBQS9CLENBQW9DbVksS0FBS3JmLENBQUwsQ0FBcEM7QUFEZjtBQUVEOzs7MkNBQ3NCO0FBQ3JCLFVBQUlzaUIsWUFBWSxLQUFLTix5QkFBckI7QUFBQSxVQUNJN1csSUFBSW1YLFVBQVV2aUIsTUFEbEI7QUFBQSxVQUVJaWdCLFlBQVksRUFGaEI7QUFBQSxVQUdJdUMsSUFISjtBQUFBLFVBR1VDLElBSFY7QUFBQSxVQUdnQnhpQixDQUhoQjtBQUFBLFVBR21CMlMsRUFIbkI7QUFBQSxVQUd1QkMsRUFIdkI7QUFBQSxVQUcyQlEsR0FIM0I7QUFBQSxVQUdnQ0UsR0FIaEM7QUFBQSxVQUdxQ2hQLEVBSHJDOztBQUtBLFVBQUk2RyxJQUFJLENBQVIsRUFBVztBQUNULGVBQU9BLE1BQU0sQ0FBYixFQUFnQjtBQUNkb1gsaUJBQU9ELFVBQVVuWCxJQUFJLENBQWQsQ0FBUDtBQUNBcVgsaUJBQU9GLFVBQVVuWCxDQUFWLENBQVA7QUFDQXdILGVBQUs0UCxLQUFLLENBQUwsQ0FBTDtBQUNBM1AsZUFBSzRQLEtBQUssQ0FBTCxDQUFMO0FBQ0FwUCxnQkFBTVQsR0FBR3JPLEVBQVQ7QUFDQWdQLGdCQUFNVixHQUFHdE8sRUFBVDtBQUVBLGNBQUk4TyxRQUFRRSxHQUFaLEVBQWlCOztBQUVqQixjQUFJaVAsS0FBSyxDQUFMLElBQVVDLEtBQUssQ0FBTCxDQUFWLElBQXFCRCxLQUFLLENBQUwsSUFBVUMsS0FBSyxDQUFMLENBQW5DLEVBQTRDO0FBRTFDLGdCQUFJcFAsTUFBTUUsR0FBVixFQUFlO0FBQ2JoUCxtQkFBS2dQLEdBQUw7O0FBRUEsa0JBQUksQ0FBQzBNLFVBQVVyUixRQUFWLENBQW1CckssRUFBbkIsQ0FBTCxFQUE2QjtBQUMzQixxQkFBS21lLFFBQUwsQ0FBYzdQLEVBQWQ7QUFDQW9OLDBCQUFVOVksSUFBVixDQUFlNUMsRUFBZjtBQUNEO0FBQ0YsYUFQRCxNQVFLO0FBQ0hBLG1CQUFLOE8sR0FBTDs7QUFFQSxrQkFBSSxDQUFDNE0sVUFBVXJSLFFBQVYsQ0FBbUJySyxFQUFuQixDQUFMLEVBQTZCO0FBQzNCLHFCQUFLbWUsUUFBTCxDQUFjOVAsRUFBZDtBQUNBcU4sMEJBQVU5WSxJQUFWLENBQWU1QyxFQUFmO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0Q2RyxZQUFJNlUsVUFBVWpnQixNQUFkOztBQUVBLGFBQUtDLElBQUksQ0FBVCxFQUFZQSxJQUFJbUwsQ0FBaEIsRUFBbUJuTCxHQUFuQjtBQUNFLGVBQUswaUIsU0FBTCxDQUFlMUMsVUFBVWhnQixDQUFWLENBQWY7QUFERjtBQUVEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7OEJBQ1NzRSxFLEVBQUk7QUFDWixVQUFJZ2UsWUFBWSxLQUFLTix5QkFBckI7QUFBQSxVQUNJN1csSUFBSW1YLFVBQVV2aUIsTUFEbEI7O0FBR0EsYUFBTW9MLEdBQU4sRUFBVztBQUNULFlBQUltWCxVQUFVblgsQ0FBVixFQUFhLENBQWIsRUFBZ0I3RyxFQUFoQixLQUF1QkEsRUFBM0IsRUFDRSxLQUFLMGQseUJBQUwsQ0FBK0JqVCxNQUEvQixDQUFzQzVELENBQXRDLEVBQXlDLENBQXpDO0FBQ0g7QUFDRjs7OzZCQUNRbkgsSSxFQUFNO0FBQ2IsVUFBSXViLFFBQVEsS0FBS0EsS0FBakI7QUFBQSxVQUNJalMsSUFBSWlTLE1BQU14ZixNQURkO0FBQUEsVUFFSTRpQixrQkFBa0IsS0FGdEI7O0FBSUEsYUFBT3JWLEdBQVAsRUFBWTtBQUNWLFlBQUlpUyxNQUFNalMsQ0FBTixFQUFTLENBQVQsTUFBZ0J0SixJQUFwQixFQUEwQjtBQUN4QjJlLDRCQUFrQixJQUFsQjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJLENBQUNBLGVBQUwsRUFDRSxLQUFLcEQsS0FBTCxDQUFXclksSUFBWCxDQUFnQixDQUFDbEQsSUFBRCxDQUFoQjtBQUNIOzs7MENBQ3FCO0FBQ3BCLFVBQUl5QyxRQUFRLEtBQUttYyxhQUFqQjtBQUFBLFVBQ0lsYyxJQUFJRCxRQUFRQSxNQUFNMUcsTUFBZCxHQUF1QixDQUQvQjtBQUFBLFVBRUlzTyxVQUFVLEtBQUsyVCx5QkFGbkI7QUFBQSxVQUdJdkMsUUFBUSxLQUFLQSxLQUhqQjtBQUFBLFVBSUlELFFBQVEsS0FBS0EsS0FBTCxHQUFhLEVBSnpCO0FBQUEsVUFLSXFELFlBQVksRUFMaEI7QUFBQSxVQU1JN2lCLElBQUksQ0FOUjtBQUFBLFVBTVc4aUIsUUFBUSxDQU5uQjtBQUFBLFVBT0lDLGNBUEo7QUFBQSxVQU9vQkMsaUJBUHBCO0FBQUEsVUFRSW5jLElBUko7QUFBQSxVQVFVb2MsU0FSVjtBQUFBLFVBUXFCQyxlQVJyQjtBQUFBLFVBU0lsZixJQVRKO0FBQUEsVUFTVW1mLElBVFY7QUFBQSxVQVNnQjdWLENBVGhCO0FBQUEsVUFTbUJ4QyxhQVRuQjtBQUFBLFVBU2tDQyxXQVRsQztBQUFBLFVBUytDakwsQ0FUL0M7QUFBQSxVQVNrRHNqQixDQVRsRDtBQUFBLFVBU3FEOWUsRUFUckQ7QUFBQSxVQVN5RDZHLENBVHpEO0FBQUEsVUFTNERrWSxDQVQ1RDtBQUFBLFVBUytENVUsQ0FUL0Q7QUFBQSxVQVNrRTlDLENBVGxFO0FBQUEsVUFVSTJYLG1CQVZKO0FBQUEsVUFVeUJDLGFBVnpCO0FBQUEsVUFVd0N2RCxTQVZ4QztBQUFBLFVBVW1Ed0Qsb0JBVm5EOztBQVlBLGFBQU94akIsSUFBSTBHLENBQVgsRUFBYzFHLEdBQWQsRUFBbUI7QUFDakI2RyxlQUFPSixNQUFNekcsQ0FBTixDQUFQO0FBQ0FpakIsb0JBQVksS0FBS3JDLE9BQUwsQ0FBYS9aLEtBQUsyQixJQUFsQixDQUFaO0FBQ0EwYSwwQkFBa0JELFVBQVVsakIsTUFBNUI7QUFDQStpQixpQkFBU0ksZUFBVDtBQUNBNVYsWUFBSWUsUUFBUXRPLE1BQVo7QUFDQXdqQix3QkFBZ0IsRUFBaEI7QUFDQXZELG9CQUFZLEVBQVo7QUFDQXdELCtCQUF1QixJQUF2Qjs7QUFFQSxlQUFPbFcsR0FBUCxFQUFZO0FBQ1Z4QywwQkFBZ0J1RCxRQUFRZixDQUFSLEVBQVcsQ0FBWCxDQUFoQjtBQUNBdkMsd0JBQWNzRCxRQUFRZixDQUFSLEVBQVcsQ0FBWCxDQUFkO0FBQ0F0SixpQkFBT3FLLFFBQVFmLENBQVIsRUFBVyxDQUFYLENBQVA7QUFDQWhKLGVBQUtOLEtBQUtNLEVBQVY7QUFFQU4sZUFBS3FiLElBQUwsQ0FBVWtFLGFBQVYsR0FBMEJ2ZixLQUFLcWIsSUFBTCxDQUFVa0UsYUFBVixJQUEyQixFQUFyRDtBQUNBdmYsZUFBS3FiLElBQUwsQ0FBVW9FLFdBQVYsR0FBd0J6ZixLQUFLcWIsSUFBTCxDQUFVb0UsV0FBVixJQUF5QixFQUFqRDs7QUFFQSxjQUNFLENBQUN6ZixLQUFLcWIsSUFBTCxDQUFVa0UsYUFBVixDQUF3QjVVLFFBQXhCLENBQWlDN0QsYUFBakMsQ0FBRCxJQUNBZ1ksUUFBUWhZLGFBRFIsSUFFQTlHLEtBQUtxYixJQUFMLENBQVU2QixrQkFBVixDQUE2Qm5oQixNQUE3QixHQUFzQ2lFLEtBQUtxYixJQUFMLENBQVUyQixpQkFBVixDQUE0QmpoQixNQUhwRSxFQUlFO0FBQ0EsZ0JBQUl5akIsd0JBQXdCQSxxQkFBcUJsZixFQUFyQixHQUEwQk4sS0FBS00sRUFBM0QsRUFBK0Q7QUFDN0Qsa0JBQUltYixVQUFVLENBQWQsRUFBaUI7QUFDZixxQkFBS2dELFFBQUwsQ0FBY3plLElBQWQ7QUFDQWdjLDBCQUFVOVksSUFBVixDQUFlNUMsRUFBZjtBQUNEOztBQUNEK0osc0JBQVFVLE1BQVIsQ0FBZXpCLENBQWYsRUFBa0IsQ0FBbEI7QUFFQTtBQUNELGFBUkQsTUFRTztBQUNMLGtCQUFJLENBQUMsS0FBS29XLG9CQUFMLENBQTBCMWYsSUFBMUIsRUFBZ0M2QyxJQUFoQyxDQUFMLEVBQTRDO0FBQzFDLG9CQUFJNFksVUFBVSxDQUFWLElBQWVuYixPQUFPLENBQTFCLEVBQTZCO0FBQzNCLHVCQUFLbWUsUUFBTCxDQUFjemUsSUFBZDtBQUNBZ2MsNEJBQVU5WSxJQUFWLENBQWU1QyxFQUFmO0FBQ0Q7O0FBQ0QrSix3QkFBUVUsTUFBUixDQUFlekIsQ0FBZixFQUFrQixDQUFsQjtBQUVBO0FBQ0QsZUFSRCxNQVNLO0FBQ0h0SixxQkFBS3FiLElBQUwsQ0FBVTZCLGtCQUFWLENBQTZCaGEsSUFBN0IsQ0FBa0M7QUFBRUwsd0JBQU1BLElBQVI7QUFBY21MLHVCQUFLaFM7QUFBbkIsaUJBQWxDO0FBQ0FnRSxxQkFBS3FiLElBQUwsQ0FBVWtFLGFBQVYsQ0FBd0JyYyxJQUF4QixDQUE2QjRELGFBQTdCO0FBQ0F5WSw4QkFBY3JjLElBQWQsQ0FBbUI1QyxFQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxjQUNFTixLQUFLcWIsSUFBTCxDQUFVa0UsYUFBVixDQUF3QjVVLFFBQXhCLENBQWlDN0QsYUFBakMsS0FDQSxDQUFDOUcsS0FBS3FiLElBQUwsQ0FBVW9FLFdBQVYsQ0FBc0I5VSxRQUF0QixDQUErQjVELFdBQS9CLENBREQsSUFFQytYLFFBQVEvWCxXQUFULElBQXlCLENBSDNCLEVBSUU7QUFDQSxnQkFBSTRDLEtBQUttQixHQUFMLENBQVNqQixLQUFULENBQWUsSUFBZixFQUFxQjBWLGFBQXJCLElBQXNDamYsRUFBMUMsRUFBOEM7QUFDNUMsa0JBQUltYixVQUFVLENBQWQsRUFBaUI7QUFDZixxQkFBS2dELFFBQUwsQ0FBY3plLElBQWQ7QUFDQWdjLDBCQUFVOVksSUFBVixDQUFlNUMsRUFBZjtBQUNEOztBQUNEK0osc0JBQVFVLE1BQVIsQ0FBZXpCLENBQWYsRUFBa0IsQ0FBbEI7QUFDRCxhQU5ELE1BTU87QUFDTGdXLG9DQUFzQixLQUFLSyxlQUFMLENBQXFCM2YsSUFBckIsRUFBMkI2QyxJQUEzQixFQUFpQ2tFLGVBQWUrWCxRQUFRSSxlQUF2QixDQUFqQyxDQUF0QjtBQUNBbGYsbUJBQUtxYixJQUFMLENBQVUrQixvQkFBVixDQUErQmxhLElBQS9CLENBQW9Db2MsbUJBQXBDO0FBQ0F0ZixtQkFBS3FiLElBQUwsQ0FBVW9FLFdBQVYsQ0FBc0J2YyxJQUF0QixDQUEyQjZELFdBQTNCO0FBQ0EvRyxtQkFBS3FiLElBQUwsQ0FBVThCLFlBQVYsQ0FBdUJyVyxhQUF2QixJQUF3QztBQUN0Q2pFLHNCQUFNQSxJQURnQztBQUV0Q3VRLHdCQUFRa00sbUJBRjhCO0FBR3RDdFIscUJBQUtoUztBQUhpQyxlQUF4Qzs7QUFLQSxrQkFBSSxDQUFDNmlCLFVBQVVsVSxRQUFWLENBQW1CckssRUFBbkIsQ0FBTCxFQUE2QjtBQUMzQmtiLHNCQUFNdFksSUFBTixDQUFXbEQsSUFBWDtBQUNBNmUsMEJBQVUzYixJQUFWLENBQWU1QyxFQUFmO0FBQ0Q7O0FBRURrZixxQ0FBdUJ4ZixJQUF2QjtBQUNBcUssc0JBQVFVLE1BQVIsQ0FBZXpCLENBQWYsRUFBa0IsQ0FBbEI7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0RuQyxZQUFJNlUsVUFBVWpnQixNQUFkO0FBRUEsWUFBSW9MLENBQUosRUFBTyxLQUFLc0QsSUFBSSxDQUFULEVBQVlBLElBQUl0RCxDQUFoQixFQUFtQnNELEdBQW5CO0FBQXdCLGVBQUtpVSxTQUFMLENBQWUxQyxVQUFVdlIsQ0FBVixDQUFmO0FBQXhCO0FBRVAsWUFBSXFVLFFBQVEsS0FBS1QsV0FBakIsRUFBOEI7QUFDL0I7O0FBQ0QsVUFBSTVDLFVBQVUsQ0FBVixJQUFlLEtBQUtJLEdBQXhCLEVBQTZCO0FBQzNCLGFBQUssSUFBSTdmLEtBQUksQ0FBYixFQUFnQkEsS0FBSSxLQUFLd04sS0FBTCxDQUFXek4sTUFBL0IsRUFBdUNDLElBQXZDLEVBQTRDO0FBQzFDLGNBQUlnRSxRQUFPLEtBQUt3SixLQUFMLENBQVd4TixFQUFYLENBQVg7O0FBQ0EsY0FBSSxDQUFDNmlCLFVBQVVsVSxRQUFWLENBQW1CM0ssTUFBS00sRUFBeEIsQ0FBTCxFQUFrQztBQUNoQyxpQkFBS29KLElBQUwsQ0FBVXhHLElBQVYsQ0FBZWxELEtBQWY7QUFDQSxpQkFBSzRhLGFBQUwsQ0FBbUI1YSxNQUFLTSxFQUF4QixJQUE4QjtBQUFFdUIsb0JBQU03QixNQUFLNkIsSUFBYjtBQUFtQnNjLHNCQUFRampCLFFBQVFpUixJQUFSLENBQWFDLFVBQWIsQ0FBd0IsbUNBQXhCO0FBQTNCLGFBQTlCO0FBQ0Q7QUFDRjtBQUNGOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7dUNBQ2tCO0FBQ2pCLFVBQUlvUCxRQUFRLEtBQUtBLEtBQWpCO0FBQUEsVUFDSXhmLElBQUl3ZixNQUFNemYsTUFEZDtBQUFBLFVBRUlpRSxJQUZKO0FBQUEsVUFFVWtkLGtCQUZWO0FBQUEsVUFFOEIvVixDQUY5QjtBQUFBLFVBRWlDdEUsSUFGakM7QUFBQSxVQUV1Q3NDLE1BRnZDO0FBQUEsVUFFK0NnQixNQUYvQztBQUFBLFVBRXVEQyxXQUZ2RDtBQUFBLFVBRW9Fd1osZ0JBRnBFO0FBQUEsVUFFc0ZDLE9BRnRGO0FBQUEsVUFFK0ZDLE1BRi9GO0FBQUEsVUFFdUdULENBRnZHO0FBQUEsVUFHSWxDLFlBSEo7QUFBQSxVQUdrQm9DLGFBSGxCO0FBQUEsVUFHaUMzZCxLQUhqQztBQUFBLFVBR3dDTyxXQUh4QztBQUFBLFVBR3FEa1osSUFIckQ7QUFBQSxVQUcyRHdCLFVBSDNEO0FBQUEsVUFHdUVqWCxLQUh2RTs7QUFLQSxhQUFPNUosR0FBUCxFQUFZO0FBQ1ZnRSxlQUFPd2IsTUFBTXhmLENBQU4sQ0FBUDtBQUNBNmpCLGtCQUFVLEVBQVY7QUFDQUMsaUJBQVMsS0FBVDtBQUNBekUsZUFBT3JiLEtBQUtxYixJQUFaO0FBQ0E2Qiw2QkFBcUI3QixLQUFLNkIsa0JBQTFCO0FBQ0FDLHVCQUFlOUIsS0FBSzhCLFlBQXBCO0FBQ0FvQyx3QkFBZ0JsRSxLQUFLa0UsYUFBckI7QUFDQXBZLFlBQUkrVixtQkFBbUJuaEIsTUFBdkI7QUFDQTZGLGdCQUFRNUIsS0FBSzRCLEtBQWI7QUFDQU8sc0JBQWNQLE1BQU0wRSxDQUFwQjtBQUNBdVcscUJBQWF4QixLQUFLd0IsVUFBbEI7O0FBRUEsWUFBSTFWLElBQUksQ0FBUixFQUFXO0FBQ1QsaUJBQU9BLEdBQVAsRUFBWTtBQUNWdEUsbUJBQU9xYSxtQkFBbUIvVixDQUFuQixFQUFzQnRFLElBQTdCO0FBQ0FzQyxxQkFBU3RDLEtBQUtNLFVBQUwsQ0FBZ0JBLFVBQXpCO0FBQ0FnRCxxQkFBU2hCLE9BQU9oQyxVQUFQLElBQXFCLENBQTlCOztBQUVBLGdCQUFJLENBQUNnRCxNQUFELElBQVd2RSxNQUFNZ0YsRUFBTixLQUFhLEtBQUt2QyxVQUFMLENBQWdCOEIsTUFBaEIsRUFBd0JoQixNQUF4QixDQUE1QixFQUE2RDtBQUMzRDBhLHNCQUFRM2MsSUFBUixDQUFhaUUsQ0FBYjtBQUNEO0FBQ0Y7O0FBRUQsY0FBSSxDQUFDMFksUUFBUTlqQixNQUFiLEVBQXFCb0wsSUFBSSxDQUFKLENBQXJCLEtBQ0s7QUFDSCxnQkFBSTBZLFFBQVE5akIsTUFBUixLQUFtQixDQUF2QixFQUEwQm9MLElBQUkwWSxRQUFRLENBQVIsQ0FBSixDQUExQixLQUNLO0FBQ0gxWSxrQkFBSXZOLFNBQUo7O0FBRUEscUJBQU9pbUIsUUFBUTlqQixNQUFmLEVBQXVCO0FBQ3JCc2pCLG9CQUFJUSxRQUFROVgsR0FBUixFQUFKO0FBQ0E1Qyx5QkFBUytYLG1CQUFtQm1DLENBQW5CLEVBQXNCeGMsSUFBdEIsQ0FBMkJNLFVBQXBDO0FBQ0FnRCx5QkFBU2hCLE9BQU9oQyxVQUFQLElBQXFCLENBQTlCO0FBQ0FpRCw4QkFBY0QsVUFBVUEsT0FBT2hELFVBQWpCLEdBQThCZ0QsT0FBT2hELFVBQXJDLEdBQWtELENBQWhFO0FBQ0F5YyxtQ0FBbUJ4WixlQUFlQSxZQUFZakQsVUFBM0IsR0FBd0NpRCxZQUFZakQsVUFBcEQsR0FBaUUsQ0FBcEY7O0FBRUEsb0JBQ0ksQ0FBQyxDQUFDeWMsZ0JBQUQsSUFBcUJoZSxNQUFNaUYsRUFBTixLQUFhLEtBQUt4QyxVQUFMLENBQWdCdWIsZ0JBQWhCLEVBQWtDeFosV0FBbEMsQ0FBbkMsS0FDQytXLGFBQWFvQyxjQUFjRixDQUFkLENBQWIsRUFBK0JqTSxNQUEvQixHQUF3Q2pSLFdBQXpDLEtBQTBEMGEsVUFGOUQsRUFHSTtBQUNBMVYsc0JBQUlrWSxDQUFKO0FBQ0E7QUFDSDtBQUNGOztBQUVELGtCQUFJLENBQUNsWSxDQUFMLEVBQVFBLElBQUksQ0FBSjtBQUNUO0FBQ0Y7QUFDRixTQXBDRCxNQW9DT0EsSUFBSSxDQUFKOztBQUVQQSxZQUFJQSxLQUFLLENBQVQ7QUFFQXZCLGdCQUFRNUYsS0FBS3FiLElBQUwsQ0FBVTZCLGtCQUFWLENBQTZCL1YsQ0FBN0IsQ0FBUjtBQUNBbkgsYUFBS3FiLElBQUwsQ0FBVTBFLFNBQVYsR0FBc0JuYSxNQUFNL0MsSUFBNUI7QUFDQTdDLGFBQUtxYixJQUFMLENBQVUyRSxpQkFBVixHQUE4QnBhLE1BQU1vSSxHQUFwQztBQUVBLGFBQUtpUyxjQUFMLENBQW9CamdCLElBQXBCLEVBQTBCbUgsQ0FBMUI7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O21DQUNjbkgsSSxFQUFNbUgsQyxFQUFHO0FBQ3RCLFVBQUlMLGdCQUFnQjlHLEtBQUtxYixJQUFMLENBQVVrRSxhQUFWLENBQXdCcFksQ0FBeEIsQ0FBcEI7QUFBQSxVQUNJckIsTUFBTTlGLEtBQUtxYixJQUFMLENBQVU4QixZQUFWLENBQXVCclcsYUFBdkIsQ0FEVjtBQUdBOUcsV0FBS3FiLElBQUwsQ0FBVTZFLE9BQVYsR0FBb0JwYSxJQUFJakQsSUFBeEI7QUFDQTdDLFdBQUtxYixJQUFMLENBQVU4RSxlQUFWLEdBQTRCcmEsSUFBSWtJLEdBQWhDO0FBQ0FoTyxXQUFLcWIsSUFBTCxDQUFVK0UsV0FBVixHQUF3QnRhLElBQUlzTixNQUE1QjtBQUNEOzs7eUNBQ29CcFQsSSxFQUFNNkMsSSxFQUFNO0FBQy9CLFVBQUl3ZCxjQUFjcmdCLEtBQUs0QixLQUF2QjtBQUFBLFVBQ0l1QixhQUFhTixLQUFLTSxVQUR0QjtBQUFBLFVBRUlnRCxTQUFTaEQsV0FBV0EsVUFGeEI7QUFBQSxVQUdJaUQsY0FBY0QsVUFBVUEsT0FBT2hELFVBQWpCLEdBQThCZ0QsT0FBT2hELFVBQXJDLEdBQWtELENBSHBFO0FBQUEsVUFJSWhCLGNBQWNrZSxZQUFZL1osQ0FKOUI7QUFBQSxVQUtJZ2EsbUJBQW1CemQsS0FBSzJCLElBQUwsQ0FBVThJLFNBQVYsQ0FBb0JuTCxXQUFwQixFQUFpQzJLLElBQWpDLEVBTHZCO0FBQUEsVUFNSXhELElBQUlnWCxpQkFBaUJ2a0IsTUFOekI7QUFBQSxVQU9Jd2tCLFdBQVd2Z0IsS0FBS3FiLElBQUwsQ0FBVXFCLFdBUHpCO0FBQUEsVUFRSS9VLElBQUkzSCxLQUFLcWIsSUFBTCxDQUFVeUIsaUJBUmxCO0FBQUEsVUFTSTBELFVBVEo7QUFXQSxVQUFJN1ksS0FBSzJCLENBQVQsRUFDRWtYLGFBQWEsS0FBSzVELE9BQUwsQ0FBYTBELGdCQUFiLEVBQStCcFYsT0FBL0IsQ0FBdUMsS0FBSzBSLE9BQUwsQ0FBYTJELFFBQWIsQ0FBdkMsTUFBbUUsQ0FBaEYsQ0FERixLQUdFQyxhQUFhLEtBQUs1RCxPQUFMLENBQWEyRCxRQUFiLEVBQXVCclYsT0FBdkIsQ0FBK0IsS0FBSzBSLE9BQUwsQ0FBYTBELGdCQUFiLENBQS9CLE1BQW1FLENBQWhGO0FBRUYsYUFDRUUsZUFDQ3JkLFdBQVdxRCxRQUFYLEtBQXdCNlosWUFBWTlaLEVBQXBDLElBQTJDOFosWUFBWTlaLEVBQVosS0FBbUIsSUFBbkIsSUFBMkJwRCxXQUFXK0MsWUFBWCxDQUF3QixZQUF4QixDQUR2RSxNQUVDLENBQUNDLE1BQUQsSUFBV0EsT0FBT0ssUUFBUCxLQUFvQjZaLFlBQVkzWixFQUY1QyxLQUdBLEtBQUtyQyxVQUFMLENBQWdCbEIsVUFBaEIsRUFBNEJOLElBQTVCLE1BQXNDd2QsWUFBWTVaLEVBSnBEO0FBTUQ7OztvQ0FDZXpHLEksRUFBTTZDLEksRUFBTUgsQyxFQUFHO0FBQzdCLFVBQUkrZCxXQUFXNWQsS0FBSzJCLElBQXBCO0FBQUEsVUFDSThFLElBQUltWCxTQUFTMWtCLE1BRGpCO0FBQUEsVUFFSUMsSUFBSSxDQUZSO0FBQUEsVUFFVzBrQixVQUFVLENBRnJCOztBQUlBLGFBQU8xa0IsSUFBSXNOLENBQVgsRUFBY3ROLEdBQWQsRUFBbUI7QUFDakIsWUFBSSxLQUFLNGdCLE9BQUwsQ0FBYTZELFNBQVN6a0IsQ0FBVCxDQUFiLENBQUosRUFBK0Iwa0I7QUFFL0IsWUFBSUEsWUFBWWhlLENBQWhCLEVBQW1CLE9BQVEsTUFBTWllLElBQU4sQ0FBVzNnQixLQUFLNkIsSUFBaEIsSUFBd0I3RixJQUFJLENBQTVCLEdBQWdDQSxJQUFJLENBQTVDO0FBQ3BCO0FBQ0Y7OztvQ0FDZTtBQUFBOztBQUNkLFVBQUlrRyxRQUFRMUgsU0FBU29tQixXQUFULEVBQVo7QUFBQSxVQUNJamhCLFlBQVksS0FBS0EsU0FEckI7QUFBQSxVQUVJNkosUUFBUSxLQUFLZ1MsS0FGakI7QUFBQSxVQUdJeGYsSUFBSXdOLE1BQU16TixNQUhkO0FBQUEsVUFJSWlFLElBSko7QUFBQSxVQUlVa2UsUUFKVjtBQUFBLFVBSW9CdFksS0FKcEI7QUFBQSxVQUkyQkUsR0FKM0I7QUFBQSxVQUlnQ3NhLFdBSmhDOztBQU1BLGFBQU9wa0IsR0FBUCxFQUFZO0FBQ1ZnRSxlQUFPd0osTUFBTXhOLENBQU4sQ0FBUDtBQUNBa2lCLG1CQUFXbGUsS0FBS3FiLElBQWhCO0FBQ0F6VixnQkFBUXNZLFNBQVM2QixTQUFqQjtBQUNBamEsY0FBTW9ZLFNBQVNnQyxPQUFmO0FBQ0FFLHNCQUFjbEMsU0FBU2tDLFdBQXZCOztBQUVBLFlBQUksQ0FBQ3hhLEtBQUQsSUFBVSxDQUFDRSxHQUFYLElBQWtCLEVBQUUsT0FBT3NhLFdBQVAsS0FBdUIsUUFBekIsQ0FBdEIsRUFBMEQ7QUFDeEQsZUFBSzFXLElBQUwsQ0FBVXhHLElBQVYsQ0FBZWxELElBQWY7QUFDQSxlQUFLNGEsYUFBTCxDQUFtQjVhLEtBQUtNLEVBQXhCLElBQThCO0FBQUV1QixrQkFBTTdCLEtBQUs2QixJQUFiO0FBQW1Cc2Msb0JBQVFqakIsUUFBUWlSLElBQVIsQ0FBYUMsVUFBYixDQUF3QixtQ0FBeEI7QUFBM0IsV0FBOUI7QUFDRCxTQUhELE1BR087QUFDTCxjQUFJO0FBQ0ZsSyxrQkFBTWEsUUFBTixDQUFlNkMsS0FBZixFQUFzQjVGLEtBQUs0QixLQUFMLENBQVcwRSxDQUFqQztBQUNBcEUsa0JBQU1jLE1BQU4sQ0FBYThDLEdBQWIsRUFBa0JzYSxXQUFsQjtBQUNBemdCLHNCQUFVaUYsSUFBVixDQUFlRSxlQUFmO0FBQ0FuRixzQkFBVWlGLElBQVYsQ0FBZUcsUUFBZixDQUF3QjdDLEtBQXhCLEVBSkUsQ0FLRjs7QUFDQSxpQkFBS3BDLElBQUwsQ0FBVSxnQkFBVixFQUE0QkUsSUFBNUI7QUFDQSxtQkFBT0EsS0FBS3ZFLE1BQVo7QUFDQSxpQkFBS29mLFFBQUwsQ0FBYzNYLElBQWQsQ0FBbUJsRCxJQUFuQjtBQUNBTCxzQkFBVWtoQixjQUFWLENBQXlCN2dCLElBQXpCO0FBQ0QsV0FWRCxDQVVFLE9BQU1sRSxDQUFOLEVBQVM7QUFDVCxpQkFBSzROLElBQUwsQ0FBVXhHLElBQVYsQ0FBZWxELElBQWY7QUFDQTVELHVCQUFXO0FBQUEscUJBQU0sT0FBSzBELElBQUwsQ0FBVSxzQkFBVixFQUFrQ2hFLEVBQUUrRCxRQUFGLEVBQWxDLENBQU47QUFBQSxhQUFYLEVBQWtFLENBQWxFO0FBQ0Q7O0FBQ0QsaUJBQU9HLEtBQUtxYixJQUFaO0FBQ0Q7QUFDRjtBQUNGOzs7cUNBRWdCOVQsRSxFQUFJO0FBQ25CLFdBQUttVSxjQUFMOztBQUVBLFVBQUksS0FBS0QsS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLGFBQUs5YixTQUFMLEdBQWlCLElBQUl3TixrQkFBSixDQUFlNUYsRUFBZixDQUFqQjs7QUFDQSxZQUFJLENBQUMsS0FBSzVILFNBQUwsQ0FBZWtDLElBQXBCLEVBQTBCO0FBQ3hCLGNBQUksS0FBSzZaLGNBQUwsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsbUJBQU8sS0FBSzRCLGdCQUFMLENBQXNCL1YsRUFBdEIsQ0FBUDtBQUNELFdBRkQsTUFFTztBQUNMLGlCQUFLd1csb0JBQUwsR0FBNEIsR0FBNUI7QUFDQSxpQkFBS2EsYUFBTCxHQUFxQixFQUFyQjtBQUNBLG1CQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELGFBQUtiLG9CQUFMLEdBQTRCLEtBQUtuQixPQUFMLENBQWEsS0FBS2pkLFNBQUwsQ0FBZWtDLElBQTVCLENBQTVCO0FBQ0Q7O0FBRUQsV0FBSytjLGFBQUwsR0FBcUIsS0FBS2pmLFNBQUwsQ0FBZThDLEtBQWYsR0FBdUIsS0FBSzlDLFNBQUwsQ0FBZThDLEtBQWYsQ0FBcUJxZSxLQUFyQixFQUF2QixHQUFzRCxFQUEzRTtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7NEJBQ09qZixJLEVBQU07QUFDWixhQUFRLE9BQU9BLElBQVAsS0FBZ0IsUUFBakIsR0FBNkJBLEtBQUs4RCxPQUFMLENBQWEsY0FBYixFQUE2QixFQUE3QixDQUE3QixHQUFnRS9MLFNBQXZFO0FBQ0Q7OzsrQkFDVXVMLE0sRUFBUUMsSyxFQUFPMmIsTyxFQUFTO0FBQ25DLFVBQUksQ0FBQzViLE1BQUQsSUFBVyxDQUFDQyxLQUFoQixFQUF1QixPQUFPLElBQVA7QUFFdkIsVUFBSUUsV0FBV0YsTUFBTWIsUUFBTixLQUFtQixDQUFuQixHQUF1QlksT0FBT04sVUFBOUIsR0FBMkNNLE9BQU9HLFFBQWpFO0FBQUEsVUFDSUMsSUFBSUQsU0FBU3ZKLE1BRGpCO0FBQUEsVUFFSWlTLE1BQU0sQ0FGVjtBQUFBLFVBRWFoUyxJQUFJLENBRmpCO0FBQUEsVUFFb0JnbEIsWUFGcEI7O0FBSUUsYUFBUWhsQixJQUFJdUosQ0FBWixFQUFldkosR0FBZixFQUFvQjtBQUNsQmdsQix1QkFBZTFiLFNBQVN0SixDQUFULENBQWY7QUFFSCxZQUFJZ2xCLGlCQUFpQjViLEtBQXJCLEVBQTRCLE9BQU80SSxHQUFQOztBQUU1QixZQUFJK1MsT0FBSixFQUFhO0FBQ1osY0FBSUMsYUFBYXhhLFFBQWIsS0FBMEJ1YSxPQUE5QixFQUF1Qy9TO0FBRXZDLFNBSEQsTUFHTztBQUNGLGNBQUksRUFBRWdULGFBQWF6YyxRQUFiLEtBQTBCLENBQTFCLElBQStCLENBQUN5YyxhQUFheGMsSUFBL0MsQ0FBSixFQUEwRHdKO0FBQzNEO0FBQ0o7QUFDRDs7O3dCQXZpQlk7QUFDVixVQUFNNFAsUUFBUSxLQUFLaEMsTUFBbkI7QUFDQSxXQUFLQSxNQUFMLEdBQWMsQ0FBQyxJQUFJOUwsSUFBSixFQUFELEdBQWMsS0FBSzZMLGFBQWpDO0FBQ0EsYUFBT2lDLEtBQVA7QUFDRDs7OztFQXBCb0JqRCxZOztJQTBqQmpCc0csYTs7Ozs7QUFFSix5QkFBWTNsQixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHdGQUFNQSxLQUFOO0FBRUEsV0FBS3FFLFNBQUwsR0FBaUJ4RCxPQUFPeUQsWUFBUCxFQUFqQjtBQUNBLFdBQUtzQyxLQUFMLEdBQWExSCxTQUFTb21CLFdBQVQsRUFBYjs7QUFDQSxRQUFNcFgsUUFBUSxPQUFLQSxLQUFMLHNCQUFpQmxPLE1BQU1rTyxLQUFOLENBQVlvQixJQUFaLENBQWlCLFVBQUMrRCxFQUFELEVBQUtDLEVBQUw7QUFBQSxhQUFZRCxHQUFHck8sRUFBSCxHQUFRc08sR0FBR3RPLEVBQXZCO0FBQUEsS0FBakIsQ0FBakIsQ0FBZDs7QUFFQSxXQUFLNGdCLGVBQUwsQ0FBcUIxWCxLQUFyQixFQUE0QixPQUFLMlgsWUFBakMsRUFBK0MsT0FBS3RELE1BQXBEOztBQVBpQjtBQVFsQjs7OztpQ0FFWTdkLEksRUFBTTtBQUFBOztBQUNqQixVQUFJLEtBQUsrYSxRQUFULEVBQW1CLE9BQU8sS0FBS3ZSLEtBQUwsR0FBYSxFQUFwQjtBQUNuQixVQUFNNUgsUUFBUTVCLEtBQUs0QixLQUFuQjtBQUNBLFVBQU1nRSxRQUFRaEUsTUFBTXNGLENBQXBCO0FBQ0EsVUFBTXBCLE1BQU1sRSxNQUFNOUYsQ0FBbEI7QUFDQSxVQUFNNkQsWUFBWSxLQUFLQSxTQUF2QjtBQUNBLFVBQU11QyxRQUFRLEtBQUtBLEtBQW5COztBQUVBLFVBQUk7QUFDRkEsY0FBTWEsUUFBTixDQUFlLEtBQUtxZSxPQUFMLENBQWF4YixNQUFNdUIsQ0FBbkIsQ0FBZixFQUFzQ3ZCLE1BQU1VLENBQTVDO0FBQ0FwRSxjQUFNYyxNQUFOLENBQWEsS0FBS29lLE9BQUwsQ0FBYXRiLElBQUlxQixDQUFqQixDQUFiLEVBQWtDckIsSUFBSVEsQ0FBdEM7QUFDQTNHLGtCQUFVbUYsZUFBVjtBQUNBbkYsa0JBQVVvRixRQUFWLENBQW1CN0MsS0FBbkI7QUFDQSxhQUFLcEMsSUFBTCxDQUFVLGdCQUFWLEVBQTRCRSxJQUE1QjtBQUNBLGVBQU9BLEtBQUt2RSxNQUFaO0FBQ0EsYUFBS29mLFFBQUwsQ0FBYzNYLElBQWQsQ0FBbUJsRCxJQUFuQjtBQUNELE9BUkQsQ0FRRSxPQUFNbEUsQ0FBTixFQUFTO0FBQ1QsYUFBSzROLElBQUwsQ0FBVXhHLElBQVYsQ0FBZWxELElBQWY7QUFDQTVELG1CQUFXO0FBQUEsaUJBQU0sT0FBSzBELElBQUwsQ0FBVSxzQkFBVixFQUFrQ2hFLEVBQUUrRCxRQUFGLEVBQWxDLENBQU47QUFBQSxTQUFYLEVBQWtFLENBQWxFO0FBQ0Q7QUFDRjs7OzRCQUNPb0wsUSxFQUFVO0FBQ2hCLFVBQU1vVyxtQkFBbUJwVyxTQUFTLENBQVQsQ0FBekI7QUFDQSxVQUFJcEksT0FBT3JJLFNBQVNnRixJQUFwQjtBQUFBLFVBQ0k4SixJQUFJMkIsU0FBU2xQLE1BRGpCOztBQUdBLGFBQU11TixNQUFNLENBQVosRUFBZTtBQUNiekcsZUFBT0EsS0FBS3lDLFFBQUwsQ0FBYzJGLFNBQVMzQixDQUFULENBQWQsQ0FBUDtBQUNEOztBQUNELGFBQU96RyxLQUFLZ0MsVUFBTCxDQUFnQndjLGdCQUFoQixDQUFQO0FBQ0Q7Ozs7RUExQ3lCMUcsWTs7QUE2Q2Isb0JBQVc7QUFFekIsU0FBTyxJQUFJemhCLGNBQUosQ0FBWTtBQUNoQkMsWUFBUTtBQUNOQyxXQUFLO0FBQ0gseUJBQWlCLFNBRGQ7QUFFSCxzQkFBYyxXQUZYO0FBR0gsZ0NBQXdCLHVCQUhyQjtBQUlILDJCQUFtQjtBQUpoQjtBQURDLEtBRFE7QUFVaEJVLGFBQVMsSUFWTztBQVdoQm9XLFdBQU8sQ0FYUztBQVloQjJLLGNBQVUsQ0FaTTtBQWFoQmlGLFlBQVEsQ0FiUTtBQWNoQmxGLG1CQUFlLEVBZEM7QUFnQmhCdEYsV0FoQmdCLG1CQWdCUnhiLE9BaEJRLEVBZ0JDO0FBQ2YsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDZCxVQUFJLENBQUN5UixNQUFNd04sT0FBTixDQUFjamYsT0FBZCxDQUFMLEVBQTZCQSxVQUFVLENBQUNBLE9BQUQsQ0FBVjtBQUU3QixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLb1csS0FBTCxHQUFhcFcsUUFBUWlDLE1BQXJCO0FBRUFqQyxjQUFRcVIsT0FBUixDQUFnQixpQkFBUztBQUN2QixZQUFJN1AsTUFBTW5CLEtBQVYsRUFBaUIsSUFBSThtQixhQUFKLENBQWtCM2xCLEtBQWxCLEVBQWpCLEtBQ0ssSUFBSWdnQixRQUFKLENBQWFoZ0IsS0FBYjtBQUNOLE9BSEQ7QUFJRCxLQTNCZTtBQTRCaEJmLFVBNUJnQixvQkE0QlA7QUFDUCxXQUFLc2dCLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxXQUFLaUYsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLbEYsYUFBTCxHQUFxQixFQUFyQjtBQUNELEtBaENlO0FBaUNoQjBHLFNBakNnQixpQkFpQ1ZobUIsS0FqQ1UsRUFpQ0g7QUFDWEEsY0FBUUEsUUFBUSxDQUFDQSxLQUFELENBQVIsR0FBa0IsS0FBS3hCLE9BQS9CO0FBQ0EsV0FBS1MsTUFBTDtBQUNBLFdBQUsrYSxPQUFMLENBQWFoYSxLQUFiO0FBQ0QsS0FyQ2U7QUFzQ2hCaW1CLGFBdENnQixxQkFzQ04xRCxNQXRDTSxFQXNDRTtBQUNoQixXQUFLaUMsTUFBTDs7QUFDQSxXQUFLLElBQUk5akIsQ0FBVCxJQUFjNmhCLE1BQWQ7QUFBc0IsYUFBS2pELGFBQUwsQ0FBbUI1ZSxDQUFuQixJQUF3QjZoQixPQUFPN2hCLENBQVAsQ0FBeEI7QUFBdEI7QUFDRCxLQXpDZTtBQTBDaEJxUix5QkExQ2dCLG1DQTBDUTtBQUN0QixVQUFJLEVBQUUsS0FBS3dOLFFBQVAsS0FBb0IsS0FBSzNLLEtBQTdCLEVBQW9DO0FBQ2xDLGFBQUtwUSxJQUFMLENBQVUsMkJBQVY7QUFDQSxZQUFJLEtBQUtnZ0IsTUFBVCxFQUFpQixLQUFLaGdCLElBQUwsQ0FBVSxvQkFBVixFQUFnQyxLQUFLMGhCLFNBQUwsRUFBaEMsRUFBakIsS0FDSyxLQUFLMWhCLElBQUwsQ0FBVSx1QkFBVjtBQUNOO0FBQ0YsS0FoRGU7QUFpRGhCMGhCLGFBakRnQix1QkFpREo7QUFDVixVQUFNM0QsU0FBUyxLQUFLakQsYUFBcEI7QUFDQSxVQUFJNkcsTUFBTSxFQUFWOztBQUNBLFdBQUssSUFBSXpsQixDQUFULElBQWM2aEIsTUFBZCxFQUFzQjtBQUNwQjRELHlCQUFVNUQsT0FBTzdoQixDQUFQLEVBQVVtaUIsTUFBcEIsZ0JBQWdDTixPQUFPN2hCLENBQVAsRUFBVTZGLElBQTFDO0FBQ0Q7O0FBQ0QsYUFBTzRmLEdBQVA7QUFDRDtBQXhEZSxHQUFaLENBQVA7QUEwREEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3h0QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQnRVLFU7OztBQUVuQixzQkFBWXRLLElBQVosRUFBa0J3SSxPQUFsQixFQUEyQjtBQUFBOztBQUV6QixTQUFLQSxPQUFMLEdBQWVBLFdBQVcsRUFBMUI7QUFFQSxRQUFJMUwsWUFBWSxLQUFLaUYsSUFBTCxHQUFZekksT0FBT3lELFlBQVAsRUFBNUI7QUFFQSxRQUFJRCxVQUFVK2hCLFVBQWQsRUFBMEIsS0FBS3hmLEtBQUwsR0FBYXZDLFVBQVUwSSxVQUFWLENBQXFCLENBQXJCLENBQWI7O0FBRTFCLFFBQUl4RixRQUFRLENBQUNsRCxVQUFVdVksV0FBdkIsRUFBb0M7QUFDbEMsVUFBSXJWLElBQUosRUFBVTtBQUNSLGFBQUs4ZSxPQUFMLEdBQWU5ZSxJQUFmO0FBRUEsYUFBS3FDLE1BQUwsQ0FBWXJDLElBQVosRUFDSytlLGdCQURMLEdBRUtoakIsTUFGTCxHQUdLb0csWUFITCxDQUdrQixJQUhsQixFQUlLNmMsWUFKTDtBQUtELE9BUkQsTUFRTztBQUNMLGFBQUs3YyxZQUFMLEdBQ0s0YyxnQkFETCxHQUVLaGpCLE1BRkwsR0FHS2tqQixNQUhMLEdBSUtsakIsTUFKTCxHQUtLaWpCLFlBTEw7QUFNRDs7QUFDRCxVQUFJO0FBQUVsaUIsa0JBQVVzRixlQUFWO0FBQThCLE9BQXBDLENBQXFDLE9BQU1uSixDQUFOLEVBQVMsQ0FBRTtBQUNqRDtBQUNGOzs7OzJCQUVNK0csSSxFQUFNO0FBQ1gsV0FBSytCLElBQUwsQ0FBVW1kLGlCQUFWLENBQTRCbGYsSUFBNUI7QUFFQSxhQUFPLElBQVA7QUFDRDs7OzJCQUNNbEQsUyxFQUFXO0FBQ2hCLFVBQUlBLFNBQUosRUFBZSxLQUFLaUYsSUFBTCxHQUFZakYsU0FBWixDQUFmLEtBQ0tBLFlBQVksS0FBS2lGLElBQWpCO0FBRUwsVUFBSW9kLFFBQVEsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QixhQUE1QixFQUEyQyxjQUEzQyxDQUFaO0FBQUEsVUFDSWhtQixJQUFJZ21CLE1BQU1qbUIsTUFEZDs7QUFHQSxhQUFPQyxHQUFQO0FBQVksYUFBS2dtQixNQUFNaG1CLENBQU4sQ0FBTCxJQUFpQjJELFVBQVVxaUIsTUFBTWhtQixDQUFOLENBQVYsQ0FBakI7QUFBWjs7QUFFQSxXQUFLa0csS0FBTCxHQUFhdkMsVUFBVTBJLFVBQVYsQ0FBcUIsQ0FBckIsQ0FBYjtBQUNBLFdBQUtwRyxNQUFMLEdBQWMsS0FBS2dnQixRQUFMLEVBQWQ7QUFFQSxhQUFPLElBQVA7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSXRpQixZQUFZLEtBQUtpRixJQUFyQjtBQUFBLFVBQ0kzRSxTQUFTLEtBQUsrRyxVQURsQjtBQUFBLFVBRUlrYixRQUFRLEtBQUtqYixTQUZqQjtBQUlBLFVBQUksS0FBS2tiLFdBQUwsQ0FBaUJsaUIsTUFBakIsRUFBeUJpaUIsS0FBekIsQ0FBSixFQUFxQyxLQUFLRSxPQUFMLENBQWFuaUIsTUFBYixFQUFxQmlpQixLQUFyQixFQUFyQyxLQUNLLEtBQUs5ZSxTQUFMLENBQWVuRCxNQUFmLEVBQXVCaWlCLEtBQXZCO0FBRUwsYUFBTyxJQUFQO0FBQ0Q7Ozs4QkFDU2ppQixNLEVBQVFpaUIsSyxFQUFPO0FBQ3ZCLFVBQUl2aUIsWUFBWSxLQUFLaUYsSUFBckI7QUFBQSxVQUNJMUMsUUFBUSxLQUFLQSxLQURqQjtBQUFBLFVBR0ltZ0IsZ0JBQWdCLEtBQUs1ZixLQUFMLENBQVcsQ0FBWCxDQUhwQjtBQUFBLFVBSUk2ZixlQUFlLEtBQUs3ZixLQUFMLENBQVcsS0FBS0EsS0FBTCxDQUFXMUcsTUFBWCxHQUFvQixDQUEvQixDQUpuQjtBQU1BLFVBQUlzbUIsa0JBQWtCcGlCLE1BQXRCLEVBQ0VpQyxNQUFNYSxRQUFOLENBQWVzZixhQUFmLEVBQThCQSxjQUFjN2QsSUFBZCxDQUFtQnpJLE1BQW5CLEdBQTRCc21CLGNBQWM3ZCxJQUFkLENBQW1CK2QsUUFBbkIsR0FBOEJ4bUIsTUFBeEY7QUFFRixVQUFJdW1CLGlCQUFpQkosS0FBckIsRUFDRWhnQixNQUFNYyxNQUFOLENBQWFzZixZQUFiLEVBQTJCQSxhQUFhOWQsSUFBYixDQUFrQnpJLE1BQWxCLElBQTRCdW1CLGFBQWE5ZCxJQUFiLENBQWtCekksTUFBbEIsR0FBMkJ1bUIsYUFBYTlkLElBQWIsQ0FBa0JnZSxTQUFsQixHQUE4QnptQixNQUFyRixDQUEzQjtBQUNIOzs7aUNBQ1kwbUIsYSxFQUFlO0FBQzFCLFVBQUk3ZCxPQUFPLElBQVg7QUFBQSxVQUNJakYsWUFBWSxLQUFLaUYsSUFEckI7QUFBQSxVQUVJMUMsUUFBUSxLQUFLQSxLQUZqQjtBQUFBLFVBR0l1QyxZQUFZZ2UsZ0JBQWdCdG1CLE9BQU8zQixRQUFQLENBQWdCZ0YsSUFBaEMsR0FBdUMsS0FBS2tqQiwwQkFBTCxFQUh2RDtBQUFBLFVBSUlDLFNBQVNGLGdCQUNQLFVBQUM1ZixJQUFEO0FBQUEsZUFBVytCLEtBQUtnZSxZQUFMLENBQWtCL2YsSUFBbEIsS0FBMkIsQ0FBQytCLEtBQUtpZSxPQUFMLENBQWFoZ0IsSUFBYixDQUE1QixJQUFrRCtCLEtBQUtrZSxlQUFMLENBQXFCamdCLElBQXJCLENBQTdEO0FBQUEsT0FETyxHQUVQLFVBQUNBLElBQUQ7QUFBQSxlQUFXbEQsVUFBVW9qQixZQUFWLENBQXVCbGdCLElBQXZCLEtBQWdDLENBQUMrQixLQUFLaWUsT0FBTCxDQUFhaGdCLElBQWIsQ0FBakMsSUFBdUQrQixLQUFLa2UsZUFBTCxDQUFxQmpnQixJQUFyQixDQUFsRTtBQUFBLE9BTk47QUFBQSxVQVFJbWdCLFdBQVc3bUIsT0FBTzNCLFFBQVAsQ0FBZ0J5b0Isa0JBQWhCLENBQW1DeGUsU0FBbkMsRUFBOEN5ZSxXQUFXQyxTQUF6RCxFQUFvRTtBQUM3RUMsa0JBRDZFLHNCQUNsRXZnQixJQURrRSxFQUM1RDtBQUNmLGlCQUFPOGYsT0FBTzlmLElBQVAsQ0FBUDtBQUNEO0FBSDRFLE9BQXBFLEVBSVIsS0FKUSxDQVJmO0FBQUEsVUFjSXdnQixZQUFZN29CLFNBQVNvbUIsV0FBVCxFQWRoQjtBQUFBLFVBZUluZSxRQUFRLEVBZlo7QUFBQSxVQWVnQjZnQixjQUFjLEVBZjlCO0FBQUEsVUFnQklDLFFBaEJKO0FBQUEsVUFnQmNwZSxNQWhCZDtBQUFBLFVBZ0JzQnFlLFNBaEJ0QjtBQUFBLFVBZ0JpQ0MsUUFoQmpDOztBQWtCQSxhQUFNRixXQUFXUCxTQUFTVSxRQUFULEVBQWpCLEVBQXNDO0FBQ3BDamhCLGNBQU1TLElBQU4sQ0FBV3FnQixRQUFYO0FBQ0Q7O0FBQ0Q5Z0IsY0FBUSxLQUFLa2hCLGFBQUwsQ0FBbUJsaEIsS0FBbkIsQ0FBUjtBQUNBLFdBQUtBLEtBQUwsR0FBYSxLQUFLNEksT0FBTCxDQUFhK0IsZ0JBQWIsR0FBZ0MsS0FBS3dXLGtCQUFMLENBQXdCbmhCLEtBQXhCLENBQWhDLEdBQWlFQSxLQUE5RTtBQUNBLFdBQUs2Z0IsV0FBTCxHQUFtQixLQUFLTyxrQkFBTCxDQUF3QixLQUFLcGhCLEtBQTdCLENBQW5CO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzttQ0FDY3pDLEksRUFBTTtBQUFBOztBQUNuQixVQUFNOGpCLGVBQWV2WSxNQUFNQyxJQUFOLENBQVdoUixTQUFTNFQsZ0JBQVQsQ0FBMEIsbUJBQW1CcE8sS0FBS00sRUFBeEIsR0FBNkIsS0FBdkQsQ0FBWCxDQUFyQjtBQUNBLFVBQU1xSCxJQUFJbWMsYUFBYS9uQixNQUF2QjtBQUNBLFVBQU1nb0IsYUFBYUQsYUFBYTdVLEdBQWIsQ0FBaUI7QUFBQSxlQUFNMUgsR0FBRzVDLFVBQVQ7QUFBQSxPQUFqQixDQUFuQjtBQUVBLFVBQU1xZixPQUFPRixhQUFhLENBQWIsRUFBZ0J4ZixlQUE3QjtBQUNBLFVBQU0yZixPQUFPSCxhQUFhbmMsSUFBRSxDQUFmLEVBQWtCdWMsV0FBL0I7QUFFQSxVQUFNdGUsUUFBUTVGLEtBQUtxYixJQUFMLENBQVUyRSxpQkFBeEI7QUFDQSxVQUFNbGEsTUFBTTlGLEtBQUtxYixJQUFMLENBQVU4RSxlQUF0Qjs7QUFFQSxVQUFJNkQsUUFBUUEsS0FBS3pmLFFBQUwsS0FBa0IsQ0FBOUIsRUFBaUM7QUFDL0J3ZixtQkFBV0ksT0FBWCxDQUFtQkgsSUFBbkI7QUFDRDs7QUFDRCxVQUFJQyxRQUFRQSxLQUFLMWYsUUFBTCxLQUFrQixDQUE5QixFQUFpQztBQUMvQndmLG1CQUFXN2dCLElBQVgsQ0FBZ0IrZ0IsSUFBaEI7QUFDRDs7QUFFRCwwQkFBS3hoQixLQUFMLEVBQVdzSSxNQUFYLHFCQUFrQm5GLEtBQWxCLEVBQXlCRSxNQUFNRixLQUFOLEdBQWMsQ0FBdkMsNEJBQTZDbWUsVUFBN0M7QUFDRDs7O2tDQUNhdGhCLEssRUFBTztBQUNuQixVQUFNOUMsWUFBWSxLQUFLaUYsSUFBdkI7QUFDQSxVQUFJNGUsU0FBSixFQUFlQyxRQUFmOztBQUVBLFVBQUloaEIsTUFBTTFHLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQnluQixvQkFBWS9nQixNQUFNLENBQU4sQ0FBWjs7QUFDQSxZQUFJOUMsVUFBVXFILFVBQVYsS0FBeUJ3YyxTQUF6QixJQUFzQ0EsVUFBVWhmLElBQVYsQ0FBZWdlLFNBQWYsR0FBMkJ6bUIsTUFBM0IsSUFBcUM0RCxVQUFVeWtCLFlBQXpGLEVBQXVHO0FBQ3JHM2hCLGdCQUFNb0ksS0FBTjtBQUNEOztBQUNENFksbUJBQVdoaEIsTUFBTUEsTUFBTTFHLE1BQU4sR0FBZSxDQUFyQixDQUFYOztBQUNBLFlBQUk0RCxVQUFVc0gsU0FBVixLQUF3QndjLFFBQXhCLElBQW9DLEtBQUtaLE9BQUwsQ0FBYVksU0FBU2pmLElBQVQsQ0FBYzZmLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0Ixa0IsVUFBVXlnQixXQUFsQyxDQUFiLENBQXhDLEVBQXNHO0FBQ3BHM2QsZ0JBQU1zRixHQUFOO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPdEYsS0FBUDtBQUNEOzs7dUNBQ2tCQSxLLEVBQU87QUFDeEIsVUFBTTZoQixNQUFNLEtBQUsxZixJQUFqQjtBQUNBLFVBQU0yZixLQUFLL3BCLFNBQVNvbUIsV0FBVCxFQUFYO0FBRUEwRCxVQUFJeGYsZUFBSjtBQUNBd2YsVUFBSXZmLFFBQUosQ0FBYXdmLEVBQWI7QUFFQTloQixjQUFRQSxNQUFNa2dCLE1BQU4sQ0FBYSxnQkFBUTtBQUMzQjRCLFdBQUdDLFVBQUgsQ0FBYzNoQixJQUFkO0FBQ0EsZUFBTyxDQUFDLENBQUN5aEIsSUFBSXprQixRQUFKLEVBQVQ7QUFDRCxPQUhPLENBQVI7QUFLQXlrQixVQUFJeGYsZUFBSjtBQUNBd2YsVUFBSXZmLFFBQUosQ0FBYSxLQUFLN0MsS0FBbEI7QUFFQSxhQUFPTyxLQUFQO0FBQ0Q7Ozt1Q0FDa0JBLEssRUFBTztBQUN4QixVQUFJNkcsSUFBSTdHLE1BQU0xRyxNQUFkO0FBQUEsVUFDSTBvQixVQUFVLEVBRGQ7QUFBQSxVQUNrQnpvQixJQUFJLENBRHRCOztBQUdBLGFBQU9BLElBQUlzTixDQUFYLEVBQWN0TixHQUFkO0FBQW1CeW9CLGdCQUFRdmhCLElBQVIsQ0FBYVQsTUFBTXpHLENBQU4sRUFBU21ILFVBQXRCO0FBQW5COztBQUVBLGFBQU9zaEIsT0FBUDtBQUNEOzs7bUNBQ2M7QUFDYixVQUFJdmlCLFFBQVEsS0FBS0EsS0FBakI7QUFBQSxVQUNJTyxRQUFRLEtBQUtBLEtBRGpCO0FBQUEsVUFFSTZHLElBQUk3RyxNQUFNMUcsTUFGZDtBQUFBLFVBR0lDLElBQUksQ0FIUjtBQUFBLFVBSUkwb0IsWUFBWSxFQUpoQjtBQUFBLFVBS0k3aUIsSUFMSjs7QUFPQSxhQUFPN0YsSUFBSXNOLENBQVgsRUFBY3ROLEdBQWQ7QUFBbUIwb0Isa0JBQVV4aEIsSUFBVixDQUFlVCxNQUFNekcsQ0FBTixFQUFTd0ksSUFBeEI7QUFBbkI7O0FBRUE4RSxXQUFLLENBQUw7O0FBRUEsVUFBSW9iLFVBQVUzb0IsTUFBZCxFQUFzQjtBQUNwQixZQUFJLEtBQUtrRyxNQUFULEVBQWlCO0FBQ2Y7QUFDQXlpQixvQkFBVSxDQUFWLElBQWVBLFVBQVUsQ0FBVixFQUFhcFgsU0FBYixDQUF1QnBMLE1BQU1DLFdBQTdCLEVBQTBDRCxNQUFNRSxTQUFoRCxDQUFmO0FBQ0QsU0FIRCxNQUdPO0FBQ0w7QUFDQTtBQUNBc2lCLG9CQUFVLENBQVYsSUFBZUEsVUFBVSxDQUFWLEVBQWFwWCxTQUFiLENBQXVCcEwsTUFBTUMsV0FBN0IsQ0FBZjtBQUNBdWlCLG9CQUFVcGIsQ0FBVixJQUFlb2IsVUFBVXBiLENBQVYsRUFBYWdFLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsS0FBS3FVLE9BQUwsR0FBZS9uQixTQUFmLEdBQTJCc0ksTUFBTUUsU0FBM0QsQ0FBZjtBQUNEOztBQUNEUCxlQUFPLEtBQUtBLElBQUwsR0FBWTZpQixVQUFVQyxJQUFWLENBQWUsRUFBZixDQUFuQjtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7aURBQzRCO0FBQzNCLFVBQUlobEIsWUFBWSxLQUFLaUYsSUFBckI7QUFBQSxVQUNJZ2dCLFFBQVFqbEIsVUFBVXFILFVBRHRCO0FBQUEsVUFFSTZkLFFBQVFsbEIsVUFBVXNILFNBRnRCOztBQUlBLGFBQU8yZCxRQUFRQSxNQUFNemhCLFVBQXJCLEVBQWlDO0FBQzdCLFlBQUksQ0FBQ3loQixNQUFNRSx1QkFBTixDQUE4QkQsS0FBOUIsSUFBdUMsSUFBeEMsTUFBa0QsSUFBdEQsRUFDRSxPQUFPRCxLQUFQO0FBQ0w7O0FBQ0QsYUFBT3pvQixPQUFPM0IsUUFBUCxDQUFnQmdGLElBQXZCO0FBQ0Q7Ozs0QkFDT1MsTSxFQUFRaWlCLEssRUFBTztBQUNyQixVQUFJaGdCLFFBQVEvRixPQUFPM0IsUUFBUCxDQUFnQm9tQixXQUFoQixFQUFaO0FBQUEsVUFDSWpoQixZQUFZLEtBQUtpRixJQURyQjtBQUdBMUMsWUFBTWEsUUFBTixDQUFlbWYsS0FBZixFQUFzQnZpQixVQUFVeWdCLFdBQWhDO0FBQ0FsZSxZQUFNYyxNQUFOLENBQWEvQyxNQUFiLEVBQXFCTixVQUFVeWtCLFlBQS9CO0FBRUF6a0IsZ0JBQVVtRixlQUFWO0FBQ0FuRixnQkFBVW9GLFFBQVYsQ0FBbUI3QyxLQUFuQjtBQUVBLFdBQUt0RCxNQUFMLENBQVllLFNBQVosRUFBdUJtaUIsTUFBdkIsQ0FBOEJuaUIsVUFBVXFILFVBQXhDLEVBQW9EckgsVUFBVXNILFNBQTlEO0FBQ0Q7Ozt1Q0FDa0I7QUFDakIsVUFBSXRILFlBQVksS0FBS2lGLElBQXJCO0FBQUEsVUFDSThjLGFBQWEvaEIsVUFBVStoQixVQUQzQjtBQUFBLFVBRUlxRCxTQUFTLEtBQUs3aUIsS0FGbEI7QUFBQSxVQUdJOGlCLFNBSEo7QUFLQSxVQUFJdEQsYUFBYSxDQUFqQixFQUFvQixPQUFPLElBQVA7QUFFcEJzRCxrQkFBWXJsQixVQUFVMEksVUFBVixDQUFxQnFaLGFBQWEsQ0FBbEMsQ0FBWjtBQUVBcUQsYUFBT2hpQixRQUFQLENBQWdCZ2lCLE9BQU9sZixjQUF2QixFQUF1Q2tmLE9BQU81aUIsV0FBOUM7QUFDQTRpQixhQUFPL2hCLE1BQVAsQ0FBY2dpQixVQUFVamYsWUFBeEIsRUFBc0NpZixVQUFVNWlCLFNBQWhEO0FBRUF6QyxnQkFBVW1GLGVBQVY7QUFDQW5GLGdCQUFVb0YsUUFBVixDQUFtQmdnQixNQUFuQjtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7b0NBQ2VsaUIsSSxFQUFNO0FBQ3BCLFVBQU1zQyxTQUFTdEMsS0FBS00sVUFBcEI7QUFDQSxVQUFNOGhCLE1BQU05ZixPQUFPaVMsT0FBUCxDQUFlOE4sV0FBZixFQUFaO0FBRUEsYUFDRUQsUUFBUSxRQUFSLElBQW9CQSxRQUFRLE9BQTVCLElBQXVDQSxRQUFRLE1BQS9DLElBQXlEQSxRQUFRLE1BQWpFLElBQ0FBLFFBQVEsTUFEUixJQUNrQkEsUUFBUSxPQUQxQixJQUNxQ0EsUUFBUSxVQUQ3QyxJQUVBQSxRQUFRLEtBRlIsSUFFaUJBLFFBQVEsUUFGekIsSUFFcUNBLFFBQVEsT0FGN0MsSUFFd0RBLFFBQVEsT0FGaEUsSUFHQUEsUUFBUSxPQUhSLElBR21CQSxRQUFRLE9BSDNCLElBR3NDQSxRQUFRLFFBSDlDLElBRzBEQSxRQUFRLE9BSGxFLElBSUFBLFFBQVEsUUFKUixJQUlvQkEsUUFBUSxLQUo1QixJQUlxQ0EsUUFBUSxNQUo3QyxJQUtBQSxRQUFRLE1BTFIsSUFLa0JBLFFBQVEsUUFMMUIsSUFNQSxDQUFDLEtBQUtFLFNBQUwsQ0FBZWhnQixNQUFmLEVBQXVCLEtBQXZCLENBUEgsQ0FPaUM7QUFDL0I7QUFSRjtBQVVEOzs7OEJBQ1N0QyxJLEVBQU0wQixRLEVBQVU7QUFDeEIsYUFBTzFCLElBQVAsRUFBYTtBQUNYLFlBQUlBLEtBQUsyRCxRQUFMLEtBQWtCakMsUUFBdEIsRUFBZ0MsT0FBTyxJQUFQO0FBQ2hDMUIsZUFBT0EsS0FBS00sVUFBWjtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEOzs7NEJBQ09OLEksRUFBTTtBQUNaLFVBQUloQixJQUFKO0FBQ0EsVUFBSSxPQUFPZ0IsSUFBUCxLQUFnQixRQUFwQixFQUE4QmhCLE9BQU9nQixJQUFQLENBQTlCLEtBQ0s7QUFDSCxZQUFJQSxRQUFRLE9BQU9BLEtBQUsyQixJQUFaLEtBQXFCLFFBQWpDLEVBQTJDM0MsT0FBT2dCLEtBQUsyQixJQUFaLENBQTNDLEtBQ0szQyxPQUFPLEtBQUtBLElBQVo7QUFDTjtBQUNELGFBQU9BLEtBQUt1akIsTUFBTCxDQUFZLGNBQVosTUFBZ0MsQ0FBQyxDQUF4QztBQUNEOzs7Z0NBQ1dubEIsTSxFQUFRaWlCLEssRUFBTztBQUN6QixVQUFJdmlCLFlBQVksS0FBS2lGLElBQXJCO0FBQUEsVUFDSXFHLFdBQVdoTCxPQUFPNmtCLHVCQUFQLENBQStCNUMsS0FBL0IsQ0FEZjtBQUdBLGFBQ0VqWCxhQUFhLENBQWIsSUFDQUEsYUFBYSxFQURiLElBRUMsQ0FBQ0EsUUFBRCxJQUFhdEwsVUFBVXlrQixZQUFWLEdBQXlCemtCLFVBQVV5Z0IsV0FIbkQ7QUFJRDs7OytCQUNVO0FBQ1QsVUFBSXpnQixZQUFZLEtBQUtpRixJQUFyQjtBQUFBLFVBQ0lvQyxhQUFhckgsVUFBVXFILFVBRDNCO0FBQUEsVUFFSUMsWUFBWXRILFVBQVVzSCxTQUYxQjtBQUlBLGFBQ0VELGVBQWVDLFNBQWYsSUFDQUQsV0FBV3pDLFFBQVgsS0FBd0IsQ0FEeEIsS0FFQyxDQUFDeUMsV0FBV2tkLFdBQVosSUFBNEJsZCxXQUFXa2QsV0FBWCxDQUF1QlksdUJBQXZCLENBQStDN2QsU0FBL0MsTUFBOEQsQ0FGM0YsQ0FERjtBQUlEOzs7aUNBQ1lwRSxJLEVBQU07QUFDakIsV0FBS1gsS0FBTCxDQUFXc2lCLFVBQVgsQ0FBc0IzaEIsSUFBdEI7QUFDQSxhQUFPLENBQUMsQ0FBQyxLQUFLK0IsSUFBTCxDQUFVL0UsUUFBVixFQUFUO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Ukg7O0FBQ0E7Ozs7QUFFZSxrQkFBU0csSUFBVCxFQUFlO0FBRTVCLFNBQU8sSUFBSXZCLGlCQUFKLENBQWU7QUFDdEJ0RixZQUFRO0FBQ0pDLFdBQUs7QUFDSCxpQ0FBeUIsYUFEdEI7QUFFSCxzQkFBYyxhQUZYO0FBR0gsMEJBQWtCLGlCQUhmO0FBSUgsNkJBQXFCLG1CQUpsQjtBQUtILDRCQUFvQjtBQUxqQjtBQURELEtBRGM7QUFVcEIyWCwwQkFBc0IsSUFWRjtBQVdwQnhKLFFBQUksSUFYZ0I7QUFhcEI4ZCxjQUFVLEtBYlU7QUFlcEJDLGFBQVM7QUFDUHJRLGFBQU87QUFDTDFOLFlBQUksSUFEQztBQUVMVSxjQUFNLEtBRkQ7QUFHTHNkLGVBQU87QUFIRixPQURBO0FBTVBsbEIsZ0JBQVU7QUFDUmtILFlBQUksSUFESTtBQUVSVSxjQUFNLEtBRkU7QUFHUnNkLGVBQU87QUFIQztBQU5ILEtBZlc7QUE0QnBCbGxCLGNBQVUsS0E1QlU7QUE2QnBCNFUsV0FBTyxLQTdCYTtBQStCcEI1YSxZQS9Cb0Isc0JBK0JUO0FBQ1QsV0FBS21yQixhQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNELEtBbENtQjtBQW1DcEJBLGVBbkNvQix5QkFtQ047QUFBQTs7QUFDWjVtQixxQkFBT25FLEdBQVAsQ0FBVyxRQUFYLEVBQXFCQyxJQUFyQixDQUEwQixrQkFBVTtBQUNsQyxjQUFLMnFCLE9BQUwsQ0FBYWpsQixRQUFiLENBQXNCNEgsSUFBdEIsR0FBNkJqTCxNQUE3QjtBQUNBLGVBQU82QixlQUFPbkUsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCO0FBQUEsaUJBQVksTUFBSzJxQixPQUFMLENBQWFyUSxLQUFiLENBQW1CaE4sSUFBbkIsR0FBMEIvSyxRQUF0QztBQUFBLFNBQTVCLENBQVA7QUFDRCxPQUhELEVBSUd2QyxJQUpILENBSVE7QUFBQSxlQUFNLE1BQUtpRSxNQUFMLEVBQU47QUFBQSxPQUpSO0FBS0QsS0F6Q21CO0FBMENwQkEsVUExQ29CLG9CQTBDWDtBQUNQLFVBQU04bUIsZUFDSCxLQUFLSixPQUFMLENBQWFqbEIsUUFBYixDQUFzQjRILElBQXRCLElBQThCLEtBQUs1SCxRQUFwQyxJQUNDLEtBQUtpbEIsT0FBTCxDQUFhclEsS0FBYixDQUFtQmhOLElBQW5CLElBQTJCLEtBQUtnTixLQUZuQzs7QUFJQSxVQUFJeVEsWUFBSixFQUFrQjtBQUNoQixhQUFLQyxNQUFMO0FBQ0QsT0FGRCxNQUdLLElBQUksS0FBS04sUUFBTCxJQUFpQixDQUFDSyxZQUF0QixFQUFvQztBQUN2QyxhQUFLamxCLE1BQUw7QUFDRDtBQUNGLEtBckRtQjtBQXNEcEJrbEIsVUF0RG9CLG9CQXNEWDtBQUNQLFVBQUlMLFVBQVUsS0FBS0EsT0FBbkI7QUFBQSxVQUE0Qk0sR0FBNUI7O0FBRUEsVUFBSSxDQUFDLEtBQUtQLFFBQVYsRUFBb0I7QUFDbEIsWUFBTTlkLEtBQUssS0FBS0EsRUFBTCxHQUFVcEwsT0FBTzNCLFFBQVAsQ0FBZ0JpTCxhQUFoQixDQUE4QixNQUE5QixDQUFyQjtBQUNBdEosZUFBTzNCLFFBQVAsQ0FBZ0JnRixJQUFoQixDQUFxQnFJLFdBQXJCLENBQWlDTixFQUFqQztBQUNEOztBQUNELFdBQUssSUFBSThSLENBQVQsSUFBY2lNLE9BQWQsRUFBdUI7QUFDckJNLGNBQU1OLFFBQVFqTSxDQUFSLENBQU47QUFDQSxZQUFJdU0sSUFBSTNkLElBQUosSUFBWSxDQUFDMmQsSUFBSUwsS0FBakIsSUFBMEIsS0FBS2xNLENBQUwsQ0FBOUIsRUFBdUMsS0FBS3dNLFNBQUwsQ0FBZXhNLENBQWYsRUFBdkMsS0FDSyxJQUFJdU0sSUFBSUwsS0FBSixLQUFjLENBQUMsS0FBS2xNLENBQUwsQ0FBRCxJQUFZLENBQUN1TSxJQUFJM2QsSUFBL0IsQ0FBSixFQUEwQyxLQUFLNmQsWUFBTCxDQUFrQnpNLENBQWxCO0FBQ2hEOztBQUNELFVBQUksQ0FBQ2lNLFFBQVFyUSxLQUFSLENBQWNzUSxLQUFmLElBQXdCLENBQUNELFFBQVFqbEIsUUFBUixDQUFpQmtsQixLQUE5QyxFQUFxRDtBQUNuRCxhQUFLOWtCLE1BQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLc2xCLGNBQUw7QUFDQSxhQUFLblUsWUFBTDtBQUNEOztBQUVELFdBQUt5VCxRQUFMLEdBQWdCLElBQWhCO0FBQ0QsS0ExRW1CO0FBMkVwQjVrQixVQTNFb0Isb0JBMkVYO0FBQ1AsVUFBSSxLQUFLNGtCLFFBQVQsRUFBbUI7QUFDakIsWUFBTVcsT0FBTyxLQUFLemUsRUFBbEI7QUFDQSxZQUFNK2QsVUFBVSxLQUFLQSxPQUFyQjs7QUFFQSxhQUFLLElBQUlqTSxDQUFULElBQWNpTSxPQUFkLEVBQXVCO0FBQ3JCLGNBQUlBLFFBQVFqTSxDQUFSLEVBQVdrTSxLQUFmLEVBQXNCO0FBQ3BCLGlCQUFLTyxZQUFMLENBQWtCek0sQ0FBbEI7QUFDRDtBQUNGOztBQUVEbGQsZUFBTzNCLFFBQVAsQ0FBZ0JnRixJQUFoQixDQUFxQndJLFdBQXJCLENBQWlDZ2UsSUFBakM7QUFDQSxhQUFLWCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRixLQXpGbUI7QUEwRnBCRyxpQkExRm9CLDJCQTBGSjtBQUNkLFVBQU1TLGNBQWMsS0FBS1gsT0FBTCxDQUFhclEsS0FBYixDQUFtQjFOLEVBQW5CLEdBQXdCcEwsT0FBTzNCLFFBQVAsQ0FBZ0JpTCxhQUFoQixDQUE4QixlQUE5QixDQUE1QztBQUNBLFVBQU15Z0IsaUJBQWlCLEtBQUtaLE9BQUwsQ0FBYWpsQixRQUFiLENBQXNCa0gsRUFBdEIsR0FBMkJwTCxPQUFPM0IsUUFBUCxDQUFnQmlMLGFBQWhCLENBQThCLE1BQTlCLENBQWxEO0FBQ0F3Z0Isa0JBQVloVyxLQUFaLEdBQW9CL1UsUUFBUWlSLElBQVIsQ0FBYUMsVUFBYixDQUF3QixjQUF4QixDQUFwQjtBQUNBOFoscUJBQWVqVyxLQUFmLEdBQXVCL1UsUUFBUWlSLElBQVIsQ0FBYUMsVUFBYixDQUF3QixXQUF4QixDQUF2QjtBQUNELEtBL0ZtQjtBQWdHcEJ5WixhQWhHb0IscUJBZ0dWM0wsSUFoR1UsRUFnR0o7QUFDZCxVQUFNOEwsT0FBTyxLQUFLemUsRUFBbEI7QUFDQSxVQUFNcWUsTUFBTSxLQUFLTixPQUFMLENBQWFwTCxJQUFiLENBQVo7QUFDQSxVQUFNdFYsT0FBTyxJQUFiO0FBQ0EsVUFBTWxHLFVBQVVrbkIsSUFBSWxuQixPQUFKLEdBQWN3YixTQUFTLE9BQVQsR0FDNUIsS0FBS2lNLFdBQUwsQ0FBaUI1bUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FENEIsR0FFNUIsS0FBS29PLGdCQUFMLENBQXNCcE8sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FGRjtBQUlBeW1CLFdBQUtuZSxXQUFMLENBQWlCK2QsSUFBSXJlLEVBQXJCO0FBQ0FxZSxVQUFJTCxLQUFKLEdBQVksSUFBWjtBQUVBSyxVQUFJcmUsRUFBSixDQUFPOUgsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNmLE9BQWpDLEVBQTBDLEtBQTFDO0FBQ0QsS0E1R21CO0FBNkdwQm9uQixnQkE3R29CLHdCQTZHUDVMLElBN0dPLEVBNkdEO0FBQ2pCLFVBQU04TCxPQUFPLEtBQUt6ZSxFQUFsQjtBQUNBLFVBQU1xZSxNQUFNLEtBQUtOLE9BQUwsQ0FBYXBMLElBQWIsQ0FBWjtBQUVBOEwsV0FBS2hlLFdBQUwsQ0FBaUI0ZCxJQUFJcmUsRUFBckI7QUFDQXFlLFVBQUlMLEtBQUosR0FBWSxLQUFaO0FBRUFLLFVBQUlyZSxFQUFKLENBQU83SCxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ2ttQixJQUFJbG5CLE9BQXhDLEVBQWlELEtBQWpEO0FBQ0QsS0FySG1CO0FBc0hwQnFuQixrQkF0SG9CLDRCQXNISDtBQUFBOztBQUNmbG5CLHFCQUFPbkUsR0FBUCxDQUFXLFNBQVgsRUFDR0MsSUFESCxDQUNRO0FBQUEsZUFBTyxPQUFLNE0sRUFBTCxDQUFRN0IsWUFBUixDQUFxQixPQUFyQixFQUE4QnNJLElBQUlsRixLQUFKLENBQVUsR0FBVixFQUFlbUcsR0FBZixDQUFtQjtBQUFBLGlCQUFLOUgsSUFBSSxPQUFUO0FBQUEsU0FBbkIsRUFBcUN3ZCxJQUFyQyxDQUEwQyxHQUExQyxDQUE5QixDQUFQO0FBQUEsT0FEUjtBQUVELEtBekhtQjtBQTBIcEJ5QixlQTFIb0IseUJBMEhOO0FBQ1osV0FBS25SLEtBQUwsR0FBYSxJQUFiO0FBQ0EsV0FBS3JXLE1BQUw7QUFDRCxLQTdIbUI7QUE4SHBCeW5CLHFCQTlIb0IsK0JBOEhBO0FBQ2xCLFdBQUtwUixLQUFMLEdBQWEsS0FBYjtBQUNBLFdBQUtyVyxNQUFMO0FBQ0QsS0FqSW1CO0FBa0lwQjBuQixtQkFsSW9CLDZCQWtJRjtBQUNoQixXQUFLam1CLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLekIsTUFBTDtBQUNELEtBckltQjtBQXNJcEIybkIscUJBdElvQiwrQkFzSUE7QUFDbEIsV0FBS2xtQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsV0FBS3pCLE1BQUw7QUFDRCxLQXpJbUI7QUEwSXBCdW5CLGVBMUlvQix5QkEwSU47QUFDWixXQUFLcm1CLElBQUwsQ0FBVSxjQUFWO0FBQ0QsS0E1SW1CO0FBNklwQjZOLG9CQTdJb0IsOEJBNklEO0FBQ2pCLFdBQUs3TixJQUFMLENBQVUsb0JBQVY7QUFDRDtBQS9JbUIsR0FBZixDQUFQO0FBaUpELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkQ7O2VBRWUsSUFBSTBtQixZQUFKLENBQVU7QUFDdkI3c0IsUUFBTSxXQURpQjtBQUV2QnVnQixRQUFNLFNBRmlCO0FBR3ZCL2dCLFVBQVE7QUFDTnN0QixZQUFRLENBQ04sc0JBRE0sRUFFVCxvQkFGUyxFQUdOLHVCQUhNLEVBSU4sc0JBSk0sRUFLTixzQkFMTSxFQU1OLDBDQU5NLEVBT04sWUFQTSxFQVFOLGFBUk0sRUFTTixlQVRNLEVBVU4sYUFWTSxFQVdOLHVCQVhNLEVBWU4sbUJBWk0sRUFhTixpQkFiTSxFQWNOLGNBZE0sRUFlTixnQkFmTSxFQWdCTixnQkFoQk0sRUFpQk4sa0JBakJNLEVBa0JOLFlBbEJNLEVBbUJOLG1CQW5CTSxFQW9CTix3QkFwQk0sRUFxQk4sZ0NBckJNLEVBc0JOLFlBdEJNLEVBdUJOLGFBdkJNLEVBd0JOLHdCQXhCTTtBQURGO0FBSGUsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDRmYseUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQ0FlO0FBRWJqWix3QkFBc0IsRUFGVDtBQUlia1osbUJBQWlCLEVBSko7QUFNYkMsZUFBYTtBQUNYQyxlQUFXLFNBREE7QUFFWEMsV0FBTyxTQUZJO0FBR1hDLFlBQVEsU0FIRztBQUlYQyxZQUFRLFNBSkc7QUFLWEMsU0FBSyxTQUxNO0FBTVhDLFlBQVEsU0FORztBQU9YQyxVQUFNLFNBUEs7QUFRWEMsV0FBTztBQVJJO0FBTkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxDQUFTQyxHQUFULEVBQWM7QUFDMUIsTUFBTWptQixTQUFTbUssTUFBTXdOLE9BQU4sQ0FBY3NPLEdBQWQsSUFBcUIsRUFBckIsR0FBMEIsRUFBekM7QUFDQSxNQUFJQyxHQUFKOztBQUNBLE9BQUssSUFBSUMsSUFBVCxJQUFpQkYsR0FBakIsRUFBc0I7QUFDcEIsUUFBSUEsSUFBSXpyQixjQUFKLENBQW1CMnJCLElBQW5CLENBQUosRUFBOEI7QUFDNUJELFlBQU1ELElBQUlFLElBQUosQ0FBTjs7QUFDQSxVQUFJRCxRQUFRLElBQVIsSUFBZ0IsUUFBT0EsR0FBUCxNQUFlLFFBQW5DLEVBQTZDO0FBQzNDbG1CLGVBQU9tbUIsSUFBUCxJQUFlSCxNQUFNRSxHQUFOLENBQWY7QUFDRCxPQUZELE1BR0VsbUIsT0FBT21tQixJQUFQLElBQWVELEdBQWY7QUFDSDtBQUNGOztBQUNELFNBQU9sbUIsTUFBUDtBQUNELENBYkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhM0MsVTs7Ozs7QUFFWCxzQkFBWXNYLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZkEsUUFBSXlSLE1BQUosR0FBYSxFQUFiO0FBQ0F6UixRQUFJMFIsV0FBSixHQUFrQixFQUFsQjtBQUVBLG9GQUFNMVIsR0FBTjtBQUVBLFVBQUtoRixvQkFBTCxJQUE2QixNQUFLYSxZQUFMLEVBQTdCO0FBTmU7QUFPaEI7Ozs7bUNBQ2M4VixNLEVBQVF4TixJLEVBQU1wZSxDLEVBQUc7QUFDOUIsVUFBSXlMLEtBQUt6TCxFQUFFc0YsTUFBWDtBQUFBLFVBQ0l1bUIsUUFESjtBQUFBLFVBQ2NDLElBRGQ7QUFBQSxVQUNvQnRyQixJQURwQjtBQUFBLFVBQzBCOGlCLENBRDFCO0FBQUEsVUFDNkJ5SSxJQUQ3QjtBQUFBLFVBQ21DQyxPQURuQztBQUFBLFVBQzRDQyxLQUQ1Qzs7QUFHQSxXQUFLSixRQUFMLElBQWlCRCxNQUFqQixFQUF5QjtBQUN2QnRJLFlBQUl1SSxTQUFTLENBQVQsQ0FBSjtBQUNBQyxlQUFPRCxRQUFQO0FBQ0FFLGVBQU96SSxNQUFNLEdBQWI7QUFDQTBJLGtCQUFVMUksTUFBTSxHQUFoQjtBQUNBMkksZ0JBQVEzSSxNQUFNLEdBQWQ7QUFFQSxZQUFJeUksUUFBUUMsT0FBWixFQUFxQkgsV0FBV0EsU0FBU3RELE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBWDs7QUFFckIsWUFBSTBELFNBQ0FELFdBQVd2Z0IsR0FBR2hILFNBQUgsQ0FBYWMsUUFBYixDQUFzQnNtQixRQUF0QixDQURYLElBRUFFLFFBQVF0Z0IsR0FBR2pILEVBQUgsS0FBVXFuQixRQUZsQixJQUdBcGdCLEdBQUdmLFFBQUgsQ0FBWStRLFdBQVosT0FBOEJvUSxRQUhsQyxFQUlFO0FBRUFyckIsaUJBQU9vckIsT0FBT0UsSUFBUCxDQUFQO0FBRUEsY0FBSSxPQUFPdHJCLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0NBLEtBQUtSLENBQUwsRUFBUXlMLEVBQVIsRUFBaEMsS0FDSyxJQUFJLEtBQUtqTCxJQUFMLENBQUosRUFBZ0IsS0FBS0EsSUFBTCxFQUFXUixDQUFYLEVBQWN5TCxFQUFkO0FBRXJCO0FBQ0Q7QUFDRjtBQUNGOzs7Z0NBQ1cyUyxJLEVBQU01ZCxJLEVBQU1pTCxFLEVBQUk7QUFDMUJBLFdBQUtBLE1BQU0sS0FBS0EsRUFBaEI7QUFDQSxVQUFNN0ksVUFBVSxPQUFPcEMsSUFBUCxLQUFnQixVQUFoQixHQUE2QkEsSUFBN0IsR0FBb0MsS0FBS0EsSUFBTCxDQUFwRDtBQUVBaUwsU0FBRzlILGdCQUFILENBQW9CeWEsSUFBcEIsRUFBMEJ4YixPQUExQixFQUFtQyxLQUFuQzs7QUFFQSxVQUFJNkksT0FBTyxLQUFLQSxFQUFoQixFQUFvQjtBQUNsQixZQUFJLENBQUMsS0FBS2lnQixNQUFMLENBQVl0TixJQUFaLENBQUwsRUFBd0IsS0FBS3NOLE1BQUwsQ0FBWXROLElBQVosSUFBb0IsRUFBcEI7O0FBQ3hCLGFBQUtzTixNQUFMLENBQVl0TixJQUFaLEVBQWtCaFgsSUFBbEIsQ0FBdUJ4RSxPQUF2QjtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUsrb0IsV0FBTCxDQUFpQnZrQixJQUFqQixDQUFzQixDQUFDcUUsRUFBRCxFQUFLMlMsSUFBTCxFQUFXeGIsT0FBWCxDQUF0QjtBQUNEO0FBQ0Y7OzttQ0FDYztBQUNiLFVBQUl2RixTQUFTLEtBQUtBLE1BQWxCO0FBQUEsVUFDSTZ1QixTQURKO0FBQUEsVUFDZXpnQixFQURmO0FBQUEsVUFDbUJtZ0IsTUFEbkI7QUFBQSxVQUMyQnhOLElBRDNCO0FBQUEsVUFDaUN4YixPQURqQztBQUdBLFVBQUksQ0FBQ3ZGLE1BQUQsSUFBVyxFQUFFNnVCLFlBQVk3dUIsT0FBT3VYLEdBQXJCLENBQVgsSUFBd0MsRUFBRW5KLEtBQUssS0FBS0EsRUFBWixDQUE1QyxFQUE2RCxPQUFPLEtBQVA7O0FBRTdELFdBQUsyUyxJQUFMLElBQWE4TixTQUFiLEVBQXdCO0FBQ3RCTixpQkFBU00sVUFBVTlOLElBQVYsQ0FBVDtBQUNBeGIsa0JBQVUsS0FBS2dGLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUt1a0IsY0FBdEIsRUFBc0NQLE1BQXRDLEVBQThDeE4sSUFBOUMsQ0FBVjtBQUNBM1MsV0FBRzlILGdCQUFILENBQW9CeWEsSUFBcEIsRUFBMEJ4YixPQUExQixFQUFtQyxLQUFuQztBQUNBLFlBQUksQ0FBQyxLQUFLOG9CLE1BQUwsQ0FBWXROLElBQVosQ0FBTCxFQUF3QixLQUFLc04sTUFBTCxDQUFZdE4sSUFBWixJQUFvQixFQUFwQjs7QUFDeEIsYUFBS3NOLE1BQUwsQ0FBWXROLElBQVosRUFBa0JoWCxJQUFsQixDQUF1QnhFLE9BQXZCO0FBQ0Q7QUFDRjs7O3NDQUNpQjtBQUNoQixVQUFJd2IsSUFBSixFQUFVc04sTUFBVixFQUFrQmxlLENBQWxCOztBQUVBLFdBQUs0USxJQUFMLElBQWEsS0FBS3NOLE1BQWxCLEVBQTBCO0FBQ3hCQSxpQkFBUyxLQUFLQSxNQUFMLENBQVl0TixJQUFaLENBQVQ7QUFDQTVRLFlBQUlrZSxPQUFPenJCLE1BQVg7O0FBQ0EsZUFBT3VOLEdBQVAsRUFBWTtBQUNWLGVBQUsvQixFQUFMLENBQVE3SCxtQkFBUixDQUE0QndhLElBQTVCLEVBQWtDc04sT0FBT2xlLENBQVAsQ0FBbEMsRUFBNkMsS0FBN0M7O0FBQ0FrZSxpQkFBT3pjLE1BQVAsQ0FBY3pCLENBQWQsRUFBaUIsQ0FBakI7QUFDRDtBQUNGOztBQUVELFVBQUk0ZSxTQUFTLEtBQUtULFdBQWxCO0FBQUEsVUFBK0J6ckIsSUFBSSxDQUFuQztBQUFBLFVBQXNDdVMsR0FBdEM7QUFDQWpGLFVBQUk0ZSxPQUFPbnNCLE1BQVg7O0FBRUEsYUFBT0MsSUFBSXNOLENBQVgsRUFBY3ROLEdBQWQsRUFBbUI7QUFDakJ1UyxjQUFNMlosT0FBT2xzQixDQUFQLENBQU47QUFDQXVTLFlBQUksQ0FBSixFQUFPN08sbUJBQVAsQ0FBMkI2TyxJQUFJLENBQUosQ0FBM0IsRUFBbUNBLElBQUksQ0FBSixDQUFuQyxFQUEyQyxLQUEzQztBQUNEO0FBQ0Y7Ozs7RUFwRjZCclYsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhDOztBQUVBLElBQU1pdkIsZ0JBQWdCLElBQUlqdkIsZUFBSixDQUFZO0FBQ2hDbUIsVUFEZ0Msc0JBQ3JCO0FBQUE7O0FBQ1Q4QixXQUFPc0QsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsaUJBQVM7QUFDeEMsVUFBTTJvQixPQUFPQyxNQUFNQyxRQUFOLENBQWV4ZixLQUFmLENBQXFCLEdBQXJCLEVBQTBCZixHQUExQixFQUFiOztBQUNBLFVBQUksQ0FBQyxlQUFELEVBQWtCLGdCQUFsQixFQUFvQyxlQUFwQyxFQUFxRCxrQkFBckQsRUFBeUU0QyxRQUF6RSxDQUFrRnlkLElBQWxGLENBQUosRUFBNkY7QUFDM0YsY0FBS3RvQixJQUFMLENBQVUsdUJBQVYsRUFBbUM7QUFDakN5b0IsbUJBQVNGLE1BQU1FLE9BRGtCO0FBRWpDQyxvQkFBVUgsTUFBTUMsUUFBTixDQUFleGYsS0FBZixDQUFxQixHQUFyQixFQUEwQmYsR0FBMUIsR0FBZ0NlLEtBQWhDLENBQXNDLEdBQXRDLEVBQTJDK0IsS0FBM0MsS0FBcUQsR0FBckQsR0FBMkR3ZCxNQUFNSSxNQUFqRSxHQUEwRSxHQUExRSxHQUFnRkosTUFBTUssS0FGL0Q7QUFHakNDLGdCQUFPLElBQUk3WSxJQUFKLEVBQUQsQ0FBYUMsT0FBYjtBQUgyQixTQUFuQztBQUtEO0FBQ0YsS0FURCxFQVNHLEtBVEg7QUFVRDtBQVorQixDQUFaLENBQXRCOztlQWVlb1ksYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsa0JBQVNTLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUNsQyxPQUFLLElBQUk3c0IsQ0FBVCxJQUFjNnNCLElBQWQ7QUFDRSxRQUFJLENBQUNELEtBQUs1c0IsQ0FBTCxDQUFMLEVBQWM0c0IsS0FBSzVzQixDQUFMLElBQVU2c0IsS0FBSzdzQixDQUFMLENBQVY7QUFEaEI7O0FBR0EsU0FBTzRzQixJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xELElBQU1FLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBVztBQUVqQyxTQUFPNXRCLFFBQVE2dEIsSUFBUixDQUFhQyxLQUFiLENBQW1CO0FBQUVDLG1CQUFlLElBQWpCO0FBQXVCN3FCLFlBQVE7QUFBL0IsR0FBbkIsRUFBMER6RCxJQUExRCxDQUErRDtBQUFBLFdBQVFvdUIsS0FBSyxDQUFMLENBQVI7QUFBQSxHQUEvRCxDQUFQO0FBQ0QsQ0FIRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUcsWUFBWSxTQUFaQSxTQUFZLENBQVM5WSxHQUFULEVBQWM7QUFDOUIsTUFBTWtCLElBQUlsQixJQUFJK1ksV0FBSixDQUFnQixHQUFoQixDQUFWO0FBQ0EsTUFBSTdYLE1BQU0sQ0FBQyxDQUFYLEVBQWMsT0FBT2xCLEdBQVAsQ0FBZCxLQUNLLE9BQU9BLElBQUlpVSxNQUFKLENBQVcsQ0FBWCxFQUFjL1MsQ0FBZCxDQUFQO0FBQ04sQ0FKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBUUEsU0FBUzhYLGlCQUFULEdBQTZCO0FBQzNCLE1BQUk3aEIsRUFBSixFQUFRL0MsSUFBUixFQUFjNmtCLE9BQWQsQ0FEMkIsQ0FFM0I7O0FBQ0E3dUIsV0FBUzh1QixlQUFULENBQXlCNWpCLFlBQXpCLENBQXNDLE1BQXRDLEVBQThDeEssUUFBUWlSLElBQVIsQ0FBYW9kLGFBQWIsR0FBNkI1akIsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBOUMsRUFIMkIsQ0FJM0I7O0FBQ0EsTUFBTTZqQixlQUFlaHZCLFNBQVM0VCxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBckI7QUFDQSxNQUFNcWIsZUFBZWp2QixTQUFTNFQsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXJCO0FBTjJCO0FBQUE7QUFBQTs7QUFBQTtBQVEzQix5QkFBVW9iLFlBQVYsOEhBQXdCO0FBQXBCamlCLFFBQW9CO0FBQ3RCOGhCLGdCQUFVOWhCLEdBQUc4aEIsT0FBYjtBQUNBLFVBQU1LLFNBQVNMLFFBQVFLLE1BQXZCOztBQUVBLFVBQUlBLE1BQUosRUFBWTtBQUNWbGxCLGVBQU90SixRQUFRaVIsSUFBUixDQUFhQyxVQUFiLENBQXdCc2QsTUFBeEIsQ0FBUDs7QUFFQSxZQUFHbGxCLFFBQVFBLFFBQVEsSUFBbkIsRUFBeUI7QUFDdkIrQyxhQUFHcUUsV0FBSCxHQUFpQnBILElBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBbkIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQW9CM0IsMEJBQVVpbEIsWUFBVixtSUFBd0I7QUFBcEJsaUIsUUFBb0I7QUFDdEI4aEIsZ0JBQVU5aEIsR0FBRzhoQixPQUFiO0FBRUEsT0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QmxlLE9BQXpCLENBQWlDLGdCQUFRO0FBQ3ZDLFlBQU13ZSxXQUFXTixRQUFRLFNBQVNPLElBQWpCLENBQWpCOztBQUVBLFlBQUlELFFBQUosRUFBYztBQUNabmxCLGlCQUFPdEosUUFBUWlSLElBQVIsQ0FBYUMsVUFBYixDQUF3QnVkLFFBQXhCLENBQVA7O0FBRUEsY0FBSW5sQixRQUFRQSxRQUFRLElBQXBCLEVBQTBCO0FBQ3hCK0MsZUFBRzdCLFlBQUgsQ0FBZ0Jra0IsS0FBS3JTLFdBQUwsRUFBaEIsRUFBb0MvUyxJQUFwQztBQUNEO0FBQ0Y7QUFDRixPQVZEO0FBV0Q7QUFsQzBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQzVCOztBQUVjLG9CQUFXO0FBQ3hCaEssV0FBU2lGLGdCQUFULENBQTBCLGtCQUExQixFQUE4QztBQUFBLFdBQU0ycEIsbUJBQU47QUFBQSxHQUE5QyxFQUF5RTtBQUN2RVMsYUFBUyxLQUQ4RDtBQUV2RUMsYUFBUyxJQUY4RDtBQUd2RUMsVUFBTTtBQUhpRSxHQUF6RTtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQsSUFBSUMsU0FBUyxFQUFiOzs7Ozs7Ozs7Ozt1QkFJS3BtQixLLEVBQU9sRixPLEVBQVM7QUFDakIsVUFBSSxDQUFDc3JCLE9BQU9wbUIsS0FBUCxDQUFMLEVBQW9Cb21CLE9BQU9wbUIsS0FBUCxJQUFnQixFQUFoQjtBQUVwQm9tQixhQUFPcG1CLEtBQVAsRUFBY1YsSUFBZCxDQUFtQnhFLE9BQW5CO0FBQ0Q7Ozt5QkFDSXZGLE0sRUFBaUI7QUFBQTs7QUFBQSx3Q0FBTjh3QixJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDcEI5d0IsZUFBU0EsT0FBTzJQLEtBQVAsQ0FBYSxHQUFiLENBQVQ7QUFFQSxVQUFJOU0sSUFBSSxDQUFSO0FBQUEsVUFBV3NOLElBQUluUSxPQUFPNEMsTUFBdEI7QUFBQSxVQUE4Qm11QixLQUE5Qjs7QUFFQSxhQUFPbHVCLElBQUlzTixDQUFYLEVBQWN0TixHQUFkLEVBQW1CO0FBQ2pCa3VCLGdCQUFRRixPQUFPN3dCLE9BQU82QyxDQUFQLENBQVAsQ0FBUjtBQUVBLFlBQUlrdUIsS0FBSixFQUNFQSxNQUFNL2UsT0FBTixDQUFjO0FBQUEsaUJBQVd6TSxRQUFRbUwsS0FBUixDQUFjLEtBQWQsRUFBb0JvZ0IsSUFBcEIsQ0FBWDtBQUFBLFNBQWQ7QUFDSDtBQUNGOzs7NEJBQ09ybUIsSyxFQUFnQjtBQUFBLHlDQUFOcW1CLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixhQUFPL3VCLFFBQVFpdkIsT0FBUixDQUFnQkMsV0FBaEIsQ0FBNEI7QUFBRUMsWUFBSXptQixLQUFOO0FBQWFxbUIsY0FBTUEsSUFBbkI7QUFBeUJLLGNBQU07QUFBL0IsT0FBNUIsRUFBbUVDLEtBQW5FLENBQXlFLFlBQU0sQ0FBRSxDQUFqRixDQUFQO0FBQ0Q7OzswQkFDS3hKLE8sRUFBU3lKLEksRUFBZ0I7QUFBQSx5Q0FBUEMsS0FBTztBQUFQQSxhQUFPO0FBQUE7O0FBQzdCLGFBQU8sWUFBbUI7QUFBQSwyQ0FBUEMsS0FBTztBQUFQQSxlQUFPO0FBQUE7O0FBQ3hCLGVBQU9GLEtBQUszZ0IsS0FBTCxDQUFXa1gsT0FBWCxFQUFvQjBKLE1BQU1oaEIsTUFBTixDQUFhaWhCLEtBQWIsQ0FBcEIsQ0FBUDtBQUNELE9BRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWF4eEIsTzs7Ozs7QUFFWCxtQkFBWTZjLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZjs7QUFFQSxTQUFLelAsQ0FBTCxJQUFVeVAsR0FBVjtBQUFlLFlBQUt6UCxDQUFMLElBQVV5UCxJQUFJelAsQ0FBSixDQUFWO0FBQWY7O0FBRUEsUUFBSW5OLFNBQVMsTUFBS0EsTUFBbEI7QUFBQSxRQUNJd3hCLFNBREo7QUFBQSxRQUNlcmtCLENBRGY7QUFBQSxRQUNrQnhLLENBRGxCO0FBQUEsUUFDcUI0QyxPQURyQjs7QUFHQSxRQUFJdkYsV0FBV3d4QixZQUFZeHhCLE9BQU9DLEdBQTlCLENBQUosRUFBd0M7QUFDdEMsV0FBSzBDLENBQUwsSUFBVTZ1QixTQUFWLEVBQXFCO0FBQ25CanNCLGtCQUFVaXNCLFVBQVU3dUIsQ0FBVixDQUFWO0FBQ0EsWUFBSSxNQUFLNEMsT0FBTCxDQUFKLEVBQ0UsTUFBS0YsRUFBTCxDQUFRMUMsQ0FBUixFQUFXLE1BQUs0SCxLQUFMLHdEQUFpQixNQUFLaEYsT0FBTCxDQUFqQixDQUFYO0FBQ0g7QUFDRjs7QUFDRCxLQUFDLE1BQUtyRSxRQUFOLElBQWtCLE1BQUtBLFFBQUwsRUFBbEI7QUFmZTtBQWdCaEI7OztFQWxCMEJ1d0IsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYXBFLEs7Ozs7O0FBRVgsaUJBQVl6USxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2YsK0VBQU1BLEdBQU47QUFFQSxVQUFLOFUsSUFBTCxHQUFZLElBQVo7QUFFQSxRQUFNM1EsT0FBTyxNQUFLQSxJQUFsQjtBQUVBaGYsWUFBUWl2QixPQUFSLENBQWdCVyxTQUFoQixDQUEwQjVwQixXQUExQixDQUFzQyxNQUFLd0MsS0FBTCx3REFBaUIsTUFBS3FuQixXQUF0QixDQUF0QztBQUVBLFFBQUk3USxTQUFTLFlBQVQsSUFBeUJBLFNBQVMsWUFBdEMsRUFBb0QsTUFBSzhRLFdBQUw7QUFFcEQsUUFBSTd4QixTQUFTLE1BQUtBLE1BQWxCO0FBQUEsUUFDSTh4QixZQURKO0FBQUEsUUFDa0JDLHFCQURsQjs7QUFHQSxRQUFJL3hCLE1BQUosRUFBWTtBQUNWOHhCLHFCQUFlOXhCLE9BQU9zdEIsTUFBdEI7O0FBQ0EsVUFBSXdFLFlBQUosRUFBa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEIsK0JBQWNBLFlBQWQ7QUFBQSxnQkFBU252QixDQUFUOztBQUNFLGtCQUFLMEMsRUFBTCxDQUFRMUMsQ0FBUixFQUFXLE1BQUs0SCxLQUFMLHdEQUFpQixNQUFLMG1CLFdBQXRCLEVBQW1DdHVCLENBQW5DLENBQVg7QUFERjtBQURnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2pCOztBQUNEb3ZCLDhCQUF3Qi94QixPQUFPZ3lCLFVBQS9COztBQUNBLFVBQUlELHFCQUFKLEVBQTJCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3pCLGdDQUFjQSxxQkFBZDtBQUFBLGdCQUFTOUwsQ0FBVDs7QUFDRSxrQkFBSzVnQixFQUFMLENBQVE0Z0IsQ0FBUixFQUFXLE1BQUsxYixLQUFMLHdEQUFpQixNQUFLMG5CLFdBQXRCLEVBQW1DaE0sQ0FBbkMsQ0FBWDtBQURGO0FBRHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHMUI7QUFDRjs7QUF6QmM7QUEwQmhCOzs7O2dDQUNXaU0sRyxFQUFLQyxNLEVBQVFDLFksRUFBYztBQUNyQ0YsVUFBSXBCLElBQUosR0FBV29CLElBQUlwQixJQUFKLElBQVksRUFBdkI7QUFDQSxVQUFJQSxPQUFPLEdBQUd4Z0IsTUFBSCxDQUFVNGhCLElBQUloQixFQUFkLEVBQWtCZ0IsSUFBSXBCLElBQXRCLENBQVg7QUFDQSxVQUFJLENBQUNxQixNQUFELElBQVcsQ0FBQ0EsT0FBTzN4QixJQUF2QixFQUE2QnN3QixPQUFPQSxLQUFLeGdCLE1BQUwsQ0FBWTZoQixNQUFaLEVBQW9CQyxZQUFwQixDQUFQO0FBQzdCLFdBQUt6ckIsSUFBTCxDQUFVK0osS0FBVixDQUFnQixJQUFoQixFQUFzQm9nQixJQUF0QjtBQUNBLFVBQUlvQixJQUFJZixJQUFSLEVBQWMsT0FBTyxJQUFQLENBTHVCLENBS1Y7O0FBQzNCLGFBQU8sS0FBUDtBQUNEOzs7Z0NBQ1d4dUIsQyxFQUFZO0FBQUEsd0NBQU5tdUIsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLFVBQU0vUCxPQUFPLEtBQUtBLElBQWxCO0FBQ0EsVUFBSXVILE1BQU07QUFBRTRJLFlBQUl2dUIsQ0FBTjtBQUFTbXVCLGNBQU1BO0FBQWYsT0FBVjtBQUNBLFVBQUkvUCxTQUFTLFNBQWIsRUFBd0JoZixRQUFRaXZCLE9BQVIsQ0FBZ0JDLFdBQWhCLENBQTRCM0ksR0FBNUIsRUFBaUM4SSxLQUFqQyxDQUF1QyxZQUFNLENBQUUsQ0FBL0MsRUFBeEIsS0FDSyxJQUFJclEsU0FBUyxZQUFiLEVBQTJCO0FBQzlCLFlBQU1zUixVQUFVdkIsS0FBS0EsS0FBS2x1QixNQUFMLEdBQWMsQ0FBbkIsQ0FBaEI7QUFDQSxZQUFJd2QsR0FBSjs7QUFDQSxZQUFJaVMsWUFBWTV4QixTQUFaLEtBQTBCMmYsTUFBTWlTLFFBQVFqUyxHQUF4QyxDQUFKLEVBQWtEO0FBQ2hELGNBQUlBLFFBQVEsUUFBWixFQUFzQjtBQUNwQnJlLG9CQUFRNnRCLElBQVIsQ0FBYUMsS0FBYixDQUFtQjtBQUFFNXFCLHNCQUFRO0FBQVYsYUFBbkIsRUFBcUN6RCxJQUFyQyxDQUEwQyxnQkFBUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNoRCxzQ0FBZ0JvdUIsSUFBaEI7QUFBQSxzQkFBU3hQLElBQVQ7QUFDRXJlLDBCQUFRNnRCLElBQVIsQ0FBYXFCLFdBQWIsQ0FBeUI3USxLQUFJalosRUFBN0IsRUFBaUNtaEIsR0FBakMsRUFBc0M4SSxLQUF0QyxDQUE0QyxZQUFNLENBQUUsQ0FBcEQ7QUFERjtBQURnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2pELGFBSEQ7QUFJRCxXQUxELE1BS087QUFDTHJ2QixvQkFBUTZ0QixJQUFSLENBQWFxQixXQUFiLENBQXlCb0IsUUFBUWpTLEdBQWpDLEVBQXNDa0ksR0FBdEMsRUFBMkM4SSxLQUEzQyxDQUFpRCxZQUFNLENBQUUsQ0FBekQ7QUFDRDtBQUNGLFNBVEQsTUFTTztBQUNMcnZCLGtCQUFRNnRCLElBQVIsQ0FBYUMsS0FBYixDQUFtQjtBQUFDO0FBQUQsV0FBbkIsRUFBZ0VydUIsSUFBaEUsQ0FBcUUsZ0JBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDM0Usb0NBQWdCb3VCLElBQWhCO0FBQUEsb0JBQVN4UCxLQUFUO0FBQ0VyZSx3QkFBUTZ0QixJQUFSLENBQWFxQixXQUFiLENBQXlCN1EsTUFBSWpaLEVBQTdCLEVBQWlDbWhCLEdBQWpDLEVBQXNDOEksS0FBdEMsQ0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7Z0NBQ1d6dUIsQyxFQUFZO0FBQUEseUNBQU5tdUIsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLFVBQU14SSxNQUFNO0FBQUU0SSxZQUFJdnVCLENBQU47QUFBU211QixjQUFNQTtBQUFmLE9BQVo7QUFDQSxVQUFJLEtBQUtZLElBQVQsRUFBZSxLQUFLQSxJQUFMLENBQVVPLFdBQVYsQ0FBc0IzSixHQUF0QjtBQUNoQjs7O2tDQUNhO0FBQ1osVUFBSSxDQUFDLEtBQUtnSyxrQkFBVixFQUE4QjtBQUM1QixhQUFLQyxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLam9CLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtnb0IsT0FBdEIsQ0FBNUI7QUFDRDtBQUNGOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFNYixPQUFPLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWEzdkIsUUFBUWl2QixPQUFSLENBQWdCdUIsT0FBaEIsQ0FBd0I7QUFBRS94QixjQUFNLEtBQUtBO0FBQWIsT0FBeEIsQ0FBdEM7QUFDQWt4QixXQUFLZSxZQUFMLENBQWtCMXFCLFdBQWxCLENBQThCO0FBQUEsZUFBTSxPQUFLMnBCLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0I1UCxFLEVBQUk7QUFBQTs7QUFDekIvZixjQUFRaXZCLE9BQVIsQ0FBZ0IwQixTQUFoQixDQUEwQjNxQixXQUExQixDQUFzQyxnQkFBUTtBQUM1QzJwQixhQUFLQyxTQUFMLENBQWU1cEIsV0FBZixDQUEyQixPQUFLd0MsS0FBTCxDQUFXLE1BQVgsRUFBaUIsT0FBS3FuQixXQUF0QixDQUEzQjtBQUNBLFNBQUM5UCxFQUFELElBQU9BLElBQVA7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFsRndCL2hCLGUiLCJmaWxlIjoiY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5qZWN0aW9uLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnc2V0QXJlYXMnLFxyXG4gICAgICAndXBkYXRlZDpuYW1pbmctc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6aGFzaG9wdC1zZXR0aW5ncyc6ICd1cGRhdGVTdGF0dXMnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1zeW5jJzogJ3NldFN5bmNGb3JFbnRyeScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW5hbWUnOiAncmVuYW1lRW50cnknLFxyXG4gICAgICAnZGVsZXRlZDplbnRyeSc6ICdyZW1vdmVFbnRyeScsXHJcbiAgICAgICdoYXNoY2hhbmdlJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBpbml0aWFsaXppbmc6IGZhbHNlLFxyXG4gIGFyZWFfc2V0dGluZ3M6ICdzeW5jJyxcclxuICBhcmVhX2hpc3Rvcnk6ICdzeW5jJyxcclxuICBhcmVhX2VudHJ5OiAnc3luYycsXHJcblxyXG4gIGlmcmFtZTogZmFsc2UsXHJcbiAgbmFtZTogdW5kZWZpbmVkLFxyXG4gIGlzTmV3OiB0cnVlLFxyXG4gIC8vZW50cnk6IG51bGwsXHJcbiAgZW50cmllczoge30sXHJcbiAgbG9ja2VkOiBmYWxzZSxcclxuICBoYXNoU2Vuc2l0aXZlOiBmYWxzZSxcclxuICB0bWlkOiAnJyxcclxuICBub3RlQ29sb3I6ICd5ZWxsb3cnLFxyXG4gIGltbXV0OiBmYWxzZSxcclxuICByZWRlc2NyaWJpbmc6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XHJcbiAgfSxcclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5lbnRyaWVzID0ge307XHJcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnRtaWQgPSAnJztcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVN0YXR1cygpIHtcclxuICAgIGlmICghdGhpcy5pc05ldyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10bS1pZF0nKSkgcmV0dXJuOy8vc2hvdyBub3RpZmljYXRpb25cclxuXHJcbiAgICB0aGlzLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgaGlzdG9yeVNldHRpbmdzID0gc2V0dGluZ3MgPyBzZXR0aW5ncy5oaXN0b3J5IDogbnVsbDtcclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gaGlzdG9yeVNldHRpbmdzLm5hbWluZyA9PT0gJ21hcmsnO1xyXG4gICAgICAgIHRoaXMuaGFzaFNlbnNpdGl2ZSA9IGhpc3RvcnlTZXR0aW5ncy5pZ25vcmVIYXNoID09PSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2V0QXJlYXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3RvcmFnZS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN0b3JhZ2Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVuYW1lRW50cnkoZW50cnksIG9sZE5hbWUpIHtcclxuICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5uYW1lID09PSBvbGROYW1lICYmICF0aGlzLmxvY2tlZCkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBlbnRyeS5uYW1lO1xyXG4gICAgICBpZiAodGhpcy5lbnRyaWVzW29sZE5hbWVdKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tvbGROYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNldFN5bmNGb3JFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCAmJiB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0pIHtcclxuICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdLnN5bmNlZCA9IGVudHJ5LnN5bmNlZDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW1vdmVFbnRyeShkZWxldGVkRW50cnkpIHtcclxuICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgaWYgKGVudHJpZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgbmFtZSA9PT0gZGVsZXRlZEVudHJ5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgfSxcclxuXHJcbiAgYWRkRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkKSB0aGlzLm5hbWUgPSBlbnRyaWVzWzBdLm5hbWU7XHJcbiAgICBjb25zdCBlID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBlOyBpKyspIHtcclxuICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICB0aGlzLmVudHJpZXNbZW50cnkubmFtZV0gPSBlbnRyeTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcclxuICAgIHRoaXMuaW1tdXQgPSAhIWVudHJpZXNbMF0uaW1tdXQ7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0QXJlYXMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gIH0sXHJcbiAgX2dldF9ibWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ibWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3Rlb25jbGljaygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGV0cmFuc3AoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZXRyYW5zcDtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF90bXVpcG9zKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MudG11aXBvcztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9hdXRvc2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9pbW11dCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9wcm9ncmVzc2JhcigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnByb2dyZXNzYmFyO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuXHJcbmltcG9ydCBfUEFHRSBmcm9tICcuL21vZHVsZXMvcGFnZSdcclxuaW1wb3J0IF9DVE0gZnJvbSAnLi9tb2R1bGVzL2NvbnRleHRtZW51J1xyXG5pbXBvcnQgX01BUktFUiBmcm9tICcuL21vZHVsZXMvbWFya2VyJ1xyXG5pbXBvcnQgX1BST0dSRVNTIGZyb20gJy4vbW9kdWxlcy9wcm9ncmVzcydcclxuaW1wb3J0IF9SRVNUT1JFUiBmcm9tICcuL21vZHVsZXMvcmVzdG9yZXInXHJcbmltcG9ydCBfTk9URVMgZnJvbSAnLi9tb2R1bGVzL25vdGVzJ1xyXG5pbXBvcnQgX1RNVUkgZnJvbSAnLi9tb2R1bGVzL3RtdWknXHJcbmltcG9ydCBfTUFSS0VSUE9QVVAgZnJvbSAnLi9tb2R1bGVzL21hcmtlci1wb3B1cCdcclxuaW1wb3J0IF9BVVRPTUFSS0VSIGZyb20gJy4vbW9kdWxlcy9hdXRvLW1hcmtlcidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnYXV0b2luaXQnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdwb3dlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBib290c3RyYXBwZWQ6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5oaXN0b3J5ICYmIHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBwb3dlcihvbikge1xyXG4gICAgaWYgKCFvbiB8fCB0aGlzLmJvb3RzdHJhcHBlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIF9QQUdFKCk7XHJcbiAgICBfQ1RNKCk7XHJcbiAgICBfUFJPR1JFU1MoKTtcclxuICAgIF9SRVNUT1JFUigpO1xyXG4gICAgX01BUktFUigpO1xyXG4gICAgX05PVEVTKCk7XHJcbiAgICBfVE1VSSgpO1xyXG4gICAgX01BUktFUlBPUFVQKCk7XHJcbiAgICBfQVVUT01BUktFUigpO1xyXG5cclxuICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1hcmstbWV0aG9kLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ29uU2VsZWN0aW9uQ2hhbmdlJyxcclxuICAgICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInOiAnc2V0TWFya2VyJ1xyXG4gICAgICB9XHJcblx0XHR9LFxyXG5cclxuICAgIGhhbmRsZXI6IG51bGwsXHJcbiAgICBtYXJrZXI6ICdtJyxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldE1hcmtlcihrZXkpIHtcclxuICAgICAgdGhpcy5tYXJrZXIgPSBrZXk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkICYmICF0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghc2VsZWN0ZWQgJiYgdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnRMaXN0ZW5pbmcoKSB7XHJcbiAgICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyID0gdGhpcy5vbk1vdXNldXAuYmluZCh0aGlzKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RlbmluZykge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Nb3VzZXVwKCkge1xyXG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcbiAgICAgIGlmIChzZWxlY3Rpb24pIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWVuZCcsIHRoaXMubWFya2VyKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0JPT0tNQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5hbmNob3IgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0KG1hcmspIHtcclxuICAgIG1hcmsgPSBtYXJrIHx8IHRoaXMubWFyaztcclxuXHJcbiAgICBsZXQgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcbiAgICAgICAgYW5jaG9yID0gd3JhcHBlcnNbMF07XHJcblxyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIGFuY2hvci5pZCA9ICd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcic7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG5cclxuICAgIHRoaXMubWFyayA9IG1hcms7XHJcbiAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgbGV0IG1hcmsgPSB0aGlzLm1hcmssXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3IsXHJcbiAgICAgICAgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGg7XHJcblxyXG4gICAgYW5jaG9yLmlkID0gJyc7XHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG4gIHNjcm9sbEludG9WaWV3KGJtKSB7XHJcbiAgICBpZiAoYm0gfHwgKGJtID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpKSlcclxuICAgICAgYm0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAnYWN0aXZhdGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhY3RpdmF0ZShvbikge1xyXG4gICAgICBpZiAob24gJiYgIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIW9uICYmIHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVnaXN0ZXJIYW5kbGVyKCkge1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpIHtcclxuICAgICAgICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgX1NUT1JFLnRtaWQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHdpbmRvdy5kb2N1bWVudCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IobWFya2VyLCBrZXksIHByZVNldHRpbmdzLCBpbW11dCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiwgZGVmYXVsdHM7XHJcblxyXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XHJcblx0XHRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG1hcmtlci5zZWxlY3Rpb247XHJcbiAgICB0aGlzLmltbXV0ID0gX1NUT1JFLnJlZGVzY3JpYmluZyA/IG1hcmtlci5pc0ltbXV0IDogaW1tdXQ7XHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgYm9va21hcms6IGZhbHNlLFxyXG4gICAgICBjb25kczogbnVsbCxcclxuICAgICAgdGV4dDogc2VsZWN0aW9uLnRleHQsXHJcbiAgICAgIG5vdGU6IG51bGxcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBkIGluIGRlZmF1bHRzKSB7XHJcbiAgICAgIGlmICghcHJlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoZCkpIHtcclxuICAgICAgICBwcmVTZXR0aW5nc1tkXSA9IGRlZmF1bHRzW2RdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVTZXR0aW5ncy5pZCA9IHByZVNldHRpbmdzLmlkIHx8ICsrbWFya2VyLmlkY291bnQ7XHJcblx0XHR0aGlzLmlkID0gcHJlU2V0dGluZ3MuaWQ7XHJcblx0XHR0aGlzLnNpbXBsZSA9IHNlbGVjdGlvbi5zaW1wbGU7XHJcblxyXG5cdFx0bGV0IHJhbmdlID0gdGhpcy5yYW5nZSA9IHNlbGVjdGlvbi5yYW5nZTtcclxuXHJcblx0XHR0aGlzLnN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQ7XHJcblx0XHR0aGlzLmVuZE9mZnNldCA9IHJhbmdlLmVuZE9mZnNldDtcclxuXHJcblx0XHR0aGlzLndyYXBwZXJzID0gbnVsbDtcclxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YSA9IHtcclxuXHRcdFx0aWQ6IHByZVNldHRpbmdzLmlkLFxyXG5cdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0c3R5bGU6IHByZVNldHRpbmdzLnN0eWxlLFxyXG5cdFx0XHRjb25kczogcHJlU2V0dGluZ3MuY29uZHMsXHJcblx0XHRcdHRleHQ6IHByZVNldHRpbmdzLnRleHQsXHJcblx0XHRcdGJvb2ttYXJrOiBwcmVTZXR0aW5ncy5ib29rbWFyayxcclxuICAgICAgbm90ZTogcHJlU2V0dGluZ3Mubm90ZSxcclxuICAgICAgc3luY2VkOiBwcmVTZXR0aW5ncy5zeW5jZWRcclxuXHRcdH07XHJcblxyXG4gICAgaWYgKHRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHtcclxuICAgICAgdGhpcy5kZXNjcmliZV9pbW11dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Y3JlYXRlKHJhbmdlKSB7XHJcbiAgICByYW5nZSA9IHJhbmdlIHx8IHRoaXMucmFuZ2U7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgc3R5bGUgPSB0aGlzLmtleURhdGEuc3R5bGUsXHJcbiAgICAgICAgbm9kZXMgPSBzZWxlY3Rpb24ubm9kZXMsXHJcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcclxuICAgICAgICB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzIHx8IHRoaXMuY3JlYXRlV3JhcHBlcnMoc3R5bGUsIG4pLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIGxhc3RJbmRleCA9IG4gLSAxLFxyXG4gICAgICAgIG5vZGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICAgIGlmICghaSkgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgdGhpcy5zdGFydE9mZnNldCk7XHJcblxyXG4gICAgICBpZiAoaSA9PT0gbGFzdEluZGV4KVxyXG4gICAgICAgIHJhbmdlLnNldEVuZChub2RlLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgICByYW5nZS5zdXJyb3VuZENvbnRlbnRzKHdyYXBwZXJzW2ldKTtcclxuICAgICAgdGhpcy5jb250YWluZXJzLnB1c2god3JhcHBlcnNbaV0ucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgICBub2RlLnBhcmVudE5vZGUubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWZpbmVQb3NpdGlvbihsYXN0SW5kZXgpO1xyXG5cclxuICAgIGlmICh0aGlzLmtleURhdGEuYm9va21hcmspIHRoaXMubWFya2VyLnNldEJvb2ttYXJrKHRoaXMsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW1tdXQgJiYgKF9TVE9SRS5yZWRlc2NyaWJpbmcgfHwgIXRoaXMua2V5RGF0YS5jb25kcykpIHRoaXMuZGVzY3JpYmUoKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbiAgcmVnaXN0ZXJDbGlja0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gdGhpcy53cmFwcGVycztcclxuICAgIGZvciAobGV0IHdyYXBwZXIgb2Ygd3JhcHBlcnMpIHtcclxuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya2VyLnByb3h5KHRoaXMsIHRoaXMub25DbGljayksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DbGljayhlKSB7XHJcbiAgICBsZXQgZXZlbnQ7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgX1NUT1JFLnRtaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuICAgICAgZXZlbnQgPSAnY2xpY2tlZDptYXJrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZSArICdfMCc7XHJcbiAgICAgIGV2ZW50ID0gJ2FjdGl2YXRlZDptYXJrJztcclxuICAgIH1cclxuICAgIHRoaXMubWFya2VyLmVtaXQoZXZlbnQsIHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIGJvb2ttYXJrOiAhIXRoaXMua2V5RGF0YS5ib29rbWFyayxcclxuICAgICAgbm90ZTogISF0aGlzLmtleURhdGEubm90ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlZmluZVBvc2l0aW9uKG4sIGluY2x1ZGluZ09mZnNldHMpIHtcclxuICAgIGxldCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBuID0gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IHdyYXBwZXJzLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBmaXJzdFdyYXBwZXIgPSB3cmFwcGVyc1swXTtcclxuICAgIGNvbnN0IGxhc3RXcmFwcGVyID0gd3JhcHBlcnNbbl07XHJcbiAgICBjb25zdCBmaXJzdFBhcmVudCA9IGZpcnN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgbGFzdFBhcmVudCA9IGxhc3RXcmFwcGVyLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgYW5jaG9yUHJldiwgZm9jdXNQcmV2O1xyXG5cclxuICAgIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGZpcnN0UGFyZW50LCBmaXJzdFdyYXBwZXIsIHRydWUpIC0gMTtcclxuICAgIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQobGFzdFBhcmVudCwgbGFzdFdyYXBwZXIsIHRydWUpO1xyXG5cclxuICAgIGFuY2hvclByZXYgPSBmaXJzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgZm9jdXNQcmV2ID0gbGFzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgIGlmIChhbmNob3JQcmV2ICYmIGFuY2hvclByZXYubm9kZVR5cGUgPT09IDEpIHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uICs9IDE7XHJcbiAgICBpZiAoIWZvY3VzUHJldiB8fCBmb2N1c1ByZXYubm9kZVR5cGUgPT09IDMgfHwgZmlyc3RQYXJlbnQgPT09IGxhc3RQYXJlbnQpIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gLT0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IDA7XHJcbiAgICBpZiAodGhpcy5mb2N1c05vZGVQb3NpdGlvbiA8IDApIHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPSAwO1xyXG5cclxuICAgIGlmIChpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSBhbmNob3JQcmV2ICYmIGFuY2hvclByZXYuZGF0YSA/IGFuY2hvclByZXYuZGF0YS5sZW5ndGggOiAwO1xyXG4gICAgICB0aGlzLmVuZE9mZnNldCA9IHRoaXMuc2ltcGxlID8gdGhpcy5zdGFydE9mZnNldCArIHRoaXMua2V5RGF0YS50ZXh0Lmxlbmd0aCA6IHRoaXMuZW5kT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24odW5kZWZpbmVkLCB0cnVlKVxyXG4gICAgICAgIC5kZXNjcmliZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHR1bmRvKCkge1xyXG5cdFx0bGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcblx0XHRcdFx0d3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzLFxyXG5cdFx0XHRcdHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcblx0XHRcdFx0Y29udGFpbmVyLCB3cmFwcGVyO1xyXG5cclxuXHRcdHdoaWxlICh3LS0pIHtcclxuXHRcdFx0Y29udGFpbmVyID0gY29udGFpbmVyc1t3XTtcclxuXHRcdFx0d3JhcHBlciA9IHdyYXBwZXJzW3ddO1xyXG5cdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XHJcblx0XHRcdGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRyZWRvKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMsXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY29udGFpbmVyc1swXS5jaGlsZE5vZGVzW3RoaXMuYW5jaG9yTm9kZVBvc2l0aW9uXSwgdGhpcy5zdGFydE9mZnNldCk7XHJcbiAgICByYW5nZS5zZXRFbmQoY29udGFpbmVyc1tjb250YWluZXJzLmxlbmd0aCAtIDFdLmNoaWxkTm9kZXNbdGhpcy5mb2N1c05vZGVQb3NpdGlvbl0sIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uLmNvbGxlY3ROb2RlcygpO1xyXG4gICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSgpO1xyXG5cdH1cclxuXHR3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGluY2x1ZGluZ1RleHROb2Rlcykge1xyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHRsZXQgY2hpbGRyZW4gPSBpbmNsdWRpbmdUZXh0Tm9kZXMgfHwgY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdFx0XHRjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0XHRcdGkgPSAwO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblx0Y3JlYXRlV3JhcHBlcnMoc3R5bGUsIG51bWJlcikge1xyXG5cdFx0bGV0IHdyYXBwZXJzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgd3JhcHBlcjtcclxuXHJcblx0XHRmb3IgKCA7IGkgPCBudW1iZXI7IGkrKykge1xyXG5cdFx0XHR3cmFwcGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZS5yZXBsYWNlKC87L2csICchaW1wb3J0YW50OycpKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnLCB0aGlzLmlkICsgJ18nICsgaSk7XHJcbiAgICAgIC8vd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NvbnRleHRtZW51JywgJ3RleHRtYXJrZXItY3RtJyk7XHJcblx0XHRcdHdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gd3JhcHBlcnM7XHJcblx0fVxyXG4gIGRlc2NyaWJlKCkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcblx0XHRjb25zdCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xyXG5cdFx0Y29uc3QgZW5kID0gcmFuZ2UuZW5kQ29udGFpbmVyO1xyXG5cdFx0Y29uc3Qgc2luZ2xlTm9kZSA9IHRoaXMuc2ltcGxlO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy53cmFwcGVyc1swXS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgcGFyZW50SXNUTSA9IHBhcmVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKTtcclxuXHRcdGNvbnN0IGdyYW1wYSA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgZ3JhbmRncmFtcGEgPSBncmFtcGEucGFyZW50Tm9kZSB8fCAwO1xyXG5cdFx0Y29uc3QgZlROUCA9IHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuXHRcdFx0bzogdGhpcy5zdGFydE9mZnNldCxcclxuXHRcdFx0bjE6IHBhcmVudElzVE0gPyAnVE0nIDogcGFyZW50Lm5vZGVOYW1lLFxyXG5cdFx0XHRwMTogZlROUCxcclxuXHRcdFx0bjI6IGdyYW1wYS5ub2RlTmFtZSxcclxuXHRcdFx0cDI6IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCksXHJcblx0XHRcdHAzOiBncmFuZGdyYW1wYSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYSwgZ3JhbXBhKSA6IHVuZGVmaW5lZCxcclxuXHRcdFx0cDQ6IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEucGFyZW50Tm9kZSwgZ3JhbmRncmFtcGEpIDogdW5kZWZpbmVkXHJcblx0XHR9O1xyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuXHR9XHJcbiAgZGVzY3JpYmVfaW1tdXQoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBbXTtcclxuICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBsZXQgc3RhcnQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBlbmQgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHdoaWxlIChzdGFydCAhPT0gYm9keSkge1xyXG4gICAgICBzdGFydFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKHN0YXJ0LnBhcmVudE5vZGUsIHN0YXJ0KSk7XHJcbiAgICAgIHN0YXJ0ID0gc3RhcnQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHdoaWxlIChlbmQgIT09IGJvZHkpIHtcclxuICAgICAgZW5kUG9zaXRpb24ucHVzaCh0aGlzLndoaWNoQ2hpbGQoZW5kLnBhcmVudE5vZGUsIGVuZCkpO1xyXG4gICAgICBlbmQgPSBlbmQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBvOiB0aGlzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgIHA6IHN0YXJ0UG9zaXRpb25cclxuICAgICAgfSxcclxuICAgICAgZToge1xyXG4gICAgICAgIG86IHRoaXMuZW5kT2Zmc2V0LFxyXG4gICAgICAgIHA6IGVuZFBvc2l0aW9uXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuXHJcbiAgICBoYW5kbGVyOiBudWxsLFxyXG4gICAgYXBwZW5kZWQ6IGZhbHNlLFxyXG4gICAgaGVpZ2h0OiAwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBzZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdwb3B1cCc7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gc2V0dGluZ3MubWFya2VycztcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICBjb25zdCBwb3B1cCA9IHRoaXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cCcpO1xyXG4gICAgICBjb25zdCBiZ0NvbG9yUmVnRXhwID0gL2JhY2tncm91bmQtY29sb3I6KCNbYS1mMC05XXs2fSkvO1xyXG4gICAgICBsZXQgYmdDb2xvciwgY29sb3JCdG47XHJcbiAgICAgIGZvciAobGV0IG0gaW4gdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgICAgYmdDb2xvciA9IHRoaXMubWFya2Vyc1ttXS5zdHlsZS5tYXRjaChiZ0NvbG9yUmVnRXhwKTtcclxuICAgICAgICBpZiAoYmdDb2xvcikge1xyXG4gICAgICAgICAgY29sb3JCdG4gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1wb3B1cGNvbG9yJyk7XHJcbiAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChjb2xvckJ0bik7XHJcbiAgICAgICAgICBjb2xvckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gYmdDb2xvci5wb3AoKTtcclxuICAgICAgICAgIGNvbG9yQnRuLmlkID0gJ3RtcG9wdXBjb2xvci0tJyArIG07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvdygpIHtcclxuICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHBvcHVwLnN0eWxlO1xyXG4gICAgICBsZXQgcG9wdXBIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZWRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblBvc2l0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIHN0eWxlLnRvcCA9IHNlbGVjdGlvblBvc2l0aW9uLnRvcCAtIHNlbGVjdGlvblBvc2l0aW9uLmhlaWdodCArIHdpbmRvdy5zY3JvbGxZICsgJ3B4JztcclxuICAgICAgICBzdHlsZS5sZWZ0ID0gc2VsZWN0aW9uUG9zaXRpb24ubGVmdCArIHdpbmRvdy5zY3JvbGxYICsgJ3B4JztcclxuXHJcbiAgICAgICAgcG9wdXBIZWlnaHQgPSBwb3B1cC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIHN0eWxlLnRvcCA9IHBhcnNlSW50KHN0eWxlLnRvcCkgLSBwb3B1cEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0KSAhPT0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApICsgcG9wdXBIZWlnaHQgLSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5oZWlnaHQgPSBwb3B1cEhlaWdodDtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZCkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkKSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5hcHBlbmRlZCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbk1vdXNlZG93bihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgICAgaWYgKGVsLm5vZGVOYW1lID09PSAnVE1QT1BVUENPTE9SJykge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2tlZDpwb3B1cC1tYXJrZXInLCBlbC5pZC5zcGxpdCgnLS0nKS5wb3AoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFLCBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfR0xPQkFMX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSSyBmcm9tICcuL21hcmstaXRlbSdcclxuaW1wb3J0IF9CT09LTUFSSyBmcm9tICcuL2Jvb2ttYXJrJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIC8vIG1hcmtlciBtb2R1bGVcclxuXHRyZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcblx0XHRcdEVOVjoge1xyXG5cdFx0XHRcdCdzZXQ6ZW50cmllcyc6ICd1cGRhdGVJRCcsXHJcblx0XHRcdFx0J3ByZXNzZWQ6bWFya2VyLWtleSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3ByZXNzZWQ6aG90a2V5JzogJ29uSG90a2V5JyxcclxuICAgICAgICAnY2xpY2tlZDpwb3B1cC1tYXJrZXInOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdzZWxlY3Rpb24tZW5kJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAncmVzdG9yZWQ6cmFuZ2UnOiAncmVjcmVhdGUnLFxyXG4gICAgICAgICdmaW5pc2hlZDphbGwtcmVzdG9yYXRpb25zJzogJ29uRmluaXNoZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2NhbmNlbGVkOnJlc3RvcmF0aW9uJzogJ29uQ2FuY2VsZWRSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJ2N0eDpiJzogJ3NldEJvb2ttYXJrJyxcclxuICAgICAgICAnY3R4Oi1iJzogJ3JlbW92ZUJvb2ttYXJrJyxcclxuICAgICAgICAnY3R4OmQnOiAncmVtb3ZlJyxcclxuICAgICAgICAnY3R4Om0nOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdjdHg6bic6ICdhZGROb3RlJyxcclxuICAgICAgICAnY3R4OmMnOiAnY29weScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J2NoYW5nZWQ6bm90ZS1jb2xvcic6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J2NoYW5nZWQ6bm90ZS1wb3MnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAgICdjaGFuZ2VkOm5vdGUtc2l6ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JzogJ3JlbW92ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6Ym9va21hcmsnOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICAgJ3NpZGViYXI6bm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgICAnc2lkZWJhcjppbW11dCc6ICdpbW11dCcsXHJcbiAgICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJzogJ3NhdmUnLFxyXG4gICAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJzogJ3Jlc3VtZScsXHJcbiAgICAgICAgJ3NpZGViYXI6dW5kbyc6ICd1bmRvJyxcclxuICAgICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAgICdzaWRlYmFyOmNvcHknOiAnY29weScsXHJcbiAgICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICAgJ3Njcm9sbC10by1ib29rbWFyayc6ICdzY3JvbGxUb0Jvb2ttYXJrJyxcclxuICAgICAgICAnY2xpY2tlZDptYXJrJzogJ2dvdG9NYXJrJyxcclxuICAgICAgICAnaGFzaGNoYW5nZSc6ICdvbkhhc2hDaGFuZ2UnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzZWxlY3Rpb246IG51bGwsXHJcblx0XHRkb25lOiBbXSxcclxuXHRcdHVuZG9uZTogW10sXHJcblx0XHR2aXN1YWxseU9yZGVyZWRNYXJrczogW10sXHJcblx0XHR2aXN1YWxseU9yZGVyZWRNYXJrSURzOiBbXSxcclxuICAgIGJvb2ttYXJrOiBudWxsLFxyXG4gICAgcmVtb3ZlZEJvb2ttYXJrOiBudWxsLFxyXG5cdFx0aWRjb3VudDogMCxcclxuXHRcdG1hcmtTY3JvbGxQb3M6IC0xLFxyXG5cclxuICAgIHVwZGF0ZUlEKGVudHJpZXMpIHtcclxuICAgICAgY29uc3QgbCA9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG4gICAgICBjb25zdCBpZHMgPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeTsgaSA8IGw7IGkrKykge1xyXG5cclxuICAgICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcblxyXG4gICAgICAgIGlmICghbG9ja2VkICYmIGVudHJ5LmlkY291bnQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmlkY291bnQgPSBlbnRyeS5pZGNvdW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgbWFya3MgPSAoZW50cnkubWFya3MgfHwgW10pLmNvbmNhdChlbnRyeS5sb3N0IHx8IFtdKSxcclxuICAgICAgICAgICAgICBkID0gbWFya3MubGVuZ3RoO1xyXG5cclxuICAgICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChkLS0pIHtcclxuICAgICAgICAgICAgICBpZHMucHVzaChtYXJrc1tkXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pZGNvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaWRzKTtcclxuICAgIH0sXHJcblx0XHRtYXJrKGtleSwgZGF0YSwgaW1tdXQpIHtcclxuXHRcdFx0dGhpcy51bmRvbmUubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgIGNvbnN0IG1hcmsgPSBuZXcgX01BUksodGhpcywga2V5LCBkYXRhLCBpbW11dCkuY3JlYXRlKCk7XHJcblxyXG4gICAgICBpZiAoZGF0YS5hdXRvbm90ZSkgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIG1hcmssIGRhdGEuYXV0b25vdGUpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG1hcms7XHJcblx0XHR9LFxyXG5cdFx0dW5kbyhub0F1dG9zYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0XHRsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuXHJcblx0XHRcdGlmIChkb25lLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmUucG9wKCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtYXJrLmlkO1xyXG5cclxuICAgICAgICB0aGlzLnVuZG9uZS5wdXNoKG1hcmsudW5kbygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9va21hcmspIHRoaXMudW5kb0Jvb2ttYXJrKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdH0sXHJcblx0XHRyZWRvKG5vQXV0b3NhdmUpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCB1bmRvbmUgPSB0aGlzLnVuZG9uZTtcclxuXHJcblx0XHRcdGlmICh1bmRvbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgbWFyayA9IHRoaXMudW5kb25lLnBvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLmRvbmUucHVzaChtYXJrLnJlZG8oKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIFttYXJrXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vQXV0b3NhdmUgfHwgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0fSxcclxuICAgIGN1dE91dChpKSB7XHJcbiAgICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICAgIHRvQmVSZW1vdmVkID0gW2ldLFxyXG4gICAgICAgICAgaW5kaWNlcyA9IFtpXSxcclxuICAgICAgICAgIG1hcmssIHNtYWxsZXN0SUQ7XHJcblxyXG4gICAgICBmdW5jdGlvbiBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhqKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeCA9IGogKyAxOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICBtYXJrID0gZG9uZVt4XTtcclxuXHJcbiAgICAgICAgICBpZiAobWFya2VyLm1hcmtzSW50ZXJzZWN0KGRvbmVbal0sIG1hcmspKSB7XHJcbiAgICAgICAgICAgIGlmICghdG9CZVJlbW92ZWQuaW5jbHVkZXMoeCkpIHRvQmVSZW1vdmVkLnB1c2goeCk7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kaWNlcy5zb3J0KCk7XHJcbiAgICAgICAgdG9CZVJlbW92ZWQuc29ydCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xyXG4gICAgICAgIGZpbmRJbmRpY2VzT2ZBZmZlY3RlZE1hcmtzKGluZGljZXMuc2hpZnQoKSk7XHJcbiAgICAgIH1cclxuICAgICAgc21hbGxlc3RJRCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHRvQmVSZW1vdmVkKTtcclxuXHJcbiAgICAgIHdoaWxlICh0b0JlUmVtb3ZlZC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmRvbmUuc3BsaWNlKHRvQmVSZW1vdmVkLnBvcCgpLCAxKVswXS51bmRvKCk7XHJcbiAgICAgICAgdGhpcy51bmRvbmUucG9wKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzbWFsbGVzdElEO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWQgPSBpZCA/IGlkIDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuICAgICAgaWYgKCFpZCkgcmV0dXJuIHRoaXMudW5kbygpO1xyXG5cclxuICAgICAgbGV0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQuc3BsaXQoJ18nKVswXSksXHJcbiAgICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgICAgbCA9IGRvbmUubGVuZ3RoLFxyXG4gICAgICAgICAgcG9zaXRpb24gPSBkb25lLmluZGV4T2YobWFyayksXHJcbiAgICAgICAgICBzbWFsbGVzdElELCBpO1xyXG5cclxuICAgICAgaWYgKHBvc2l0aW9uID09PSBsIC0gMSkge1xyXG4gICAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMudW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaSA9IHRoaXMudW5kb25lLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAodGhpcy51bmRvbmUubGVuZ3RoKSB0aGlzLnJlZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChpLS0pIHRoaXMudW5kbyh0cnVlKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWRbMF0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZShhcmcsIG9wdGlvbnMpIHtcclxuICAgICAgX1NUT1JFLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyB3aGlsZSAodGhpcy5kb25lLmxlbmd0aCkge1xyXG4gICAgICAvLyAgIHRoaXMudW5kbyh0cnVlKTtcclxuICAgICAgLy8gfVxyXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0JykpXHJcbiAgICAgICAgLmZvckVhY2goaGlnaGxpZ2h0ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGhpZ2hsaWdodC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShoaWdobGlnaHQudGV4dENvbnRlbnQpLCBoaWdobGlnaHQpO1xyXG4gICAgICAgICAgY29udGFpbmVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5kb25lID0gW107XHJcbiAgICAgIHRoaXMudW5kb25lID0gW107XHJcbiAgICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MgPSBbXTtcclxuICAgICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gW107XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IG51bGw7XHJcbiAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IC0xO1xyXG5cclxuICAgICAgY29uc3QgZW50cnkgPSAhYXJnICYmIF9TVE9SRS5uYW1lICYmIF9TVE9SRS5lbnRyaWVzW19TVE9SRS5uYW1lXSA/IF9TVE9SRS5lbnRyaWVzW19TVE9SRS5uYW1lXSA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ3Jlc3VtZWQ6bWFya2VycycsIGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBpbW11dChpbW11dGFibGUpIHtcclxuICAgICAgdGhpcy5pc0ltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gdHJ1ZTtcclxuICAgICAgX1NUT1JFLmltbXV0ID0gaW1tdXRhYmxlO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgfSxcclxuICAgIHNhdmUoKSB7XHJcbiAgICAgIGlmIChfU1RPUkUuZGlzYWJsZWQpIHJldHVybiB0aGlzLmVtaXQoJ2NhbmNlbGVkOnNhdmUtYWZ0ZXItY2FuY2VsZWQtcmVzdG9yYXRpb24nKTtcclxuXHJcbiAgICAgIGNvbnN0IGlmcmFtZSA9IF9TVE9SRS5pZnJhbWU7XHJcbiAgICAgIGNvbnN0IGxvY2tlZCA9IF9TVE9SRS5sb2NrZWQ7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB7XHJcbiAgICAgICAgaWYgKF9TVE9SRS5pc05ldyB8fCBsb2NrZWQpIHtcclxuICAgICAgICAgIGlmICghbG9ja2VkICYmIG5hbWluZyA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KCduYW1lOmVudHJ5PycpLnRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGlmcmFtZSA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2lmcmFtZScpIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgX1NUT1JFLm5hbWUgPSB3aW5kb3cucHJvbXB0KGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlJywgc3ViKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX1NUT1JFLm5hbWUpIHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb25maXJtZWQgPSB0cnVlO1xyXG5cdCAgICAgICAgICBpZiAoaWZyYW1lKSBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSk7XHJcblx0ICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG5cdCAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cdFx0fSxcclxuICAgIGF1dG9zYXZlKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICAgIGlmIChhdXRvc2F2ZSkgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3Vuc2F2ZWQtY2hhbmdlcycpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb3B5KCkge1xyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5maW5kTWFyaygpO1xyXG4gICAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuICAgICAgY29uc3QgcmFuZ2UgPSBtYXJrLnJhbmdlO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBtYXJrLnNlbGVjdGlvbi5zZWxmO1xyXG4gICAgICBjb25zdCB3cmFwcGVycyA9IG1hcmsud3JhcHBlcnM7XHJcblxyXG4gICAgICByYW5nZS5zZXRTdGFydCh3cmFwcGVyc1swXSwgMCk7XHJcbiAgICAgIHJhbmdlLnNldEVuZCh3cmFwcGVyc1t3cmFwcGVycy5sZW5ndGggLSAxXSwgMSk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblx0XHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGlvbi50b1N0cmluZygpLnRyaW0oKS5yZXBsYWNlKC8oXFxyXFxuKXsxLH0vZywgJ1xcclxcbicpKTtcclxuICAgICAgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gICAgfSxcclxuICAgIHN0b3JlKG1hcmssIHNhdmUsIG9yZGVyKSB7XHJcblx0XHRcdHRoaXMuZG9uZS5wdXNoKG1hcmspO1xyXG4gICAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdFx0aWYgKG9yZGVyKSB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cdFx0fSxcclxuICAgIHJlY3JlYXRlKG1hcmspIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTihudWxsLCB7IHByb2dyYW1tYXRpY2FsbHk6IHRydWUgfSk7XHJcbiAgICAgIHRoaXMuc3RvcmUodGhpcy5tYXJrKG1hcmsua2V5LCBtYXJrKSwgZmFsc2UsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICghdGhpcy5kb25lLmxlbmd0aCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lW3RoaXMuZG9uZS5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAoX1NUT1JFLm5hbWUgPT09IG1hcmsua2V5RGF0YS50ZXh0LnRyaW0oKS5zdWJzdHJpbmcoMCwgX0dMT0JBTF9TRVRUSU5HUy5NQVhfRU5UUllfTkFNRV9DSEFSUyAtIDEpKSB7XHJcbiAgICAgICAgICB0aGlzLmdvdG9NYXJrKG1hcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb0Jvb2ttYXJrKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcmRlck1hcmtzVmlzdWFsbHkoKTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUucmVkZXNjcmliaW5nKSB7XHJcbiAgICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DYW5jZWxlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICBfU1RPUkUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGFkZE5vdGUoaWQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICAgIH0sXHJcbiAgICBzYXZlTm90ZShpZCkge1xyXG4gICAgICBpZiAoIV9TVE9SRS5sb2NrZWQpIHJldHVybiB0aGlzLmF1dG9zYXZlKCk7XHJcblxyXG4gICAgICBjb25zdCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkKS5rZXlEYXRhO1xyXG4gICAgICBjb25zdCBzeW5jZWQgPSB0eXBlb2YgbWFyay5zeW5jZWQgPT09ICdib29sZWFuJyA/IG1hcmsuc3luY2VkIDogX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG5cclxuICAgICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgICAgbWFya3M6IFttYXJrXSxcclxuICAgICAgICBuYW1lOiBtYXJrLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSksXHJcbiAgICAgICAgc3luY2VkXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KTtcclxuICAgIH0sXHJcbiAgICBnb3RvTWFyayhtYXJrKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtFbGVtZW50cyA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3M7XHJcbiAgICAgIGxldCBlbCwgcG9zLCBpZDtcclxuICAgICAgaWYgKG1hcmsgfHwgbWFyayA9PT0gMCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWFyayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHRoaXMubWFya1Njcm9sbFBvcyA9IG1hcmsgKyAxO1xyXG4gICAgICAgICAgZWwgPSBtYXJrRWxlbWVudHNbbWFya107XHJcbiAgICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlkID0gbWFyay5pZDtcclxuICAgICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQ9XCInICsgaWQgKyAnXzBcIl0nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zID0gdGhpcy5tYXJrU2Nyb2xsUG9zO1xyXG4gICAgICAgIGVsID0gbWFya0VsZW1lbnRzW3Bvc107XHJcbiAgICAgICAgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKS5zcGxpdCgnXycpWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG5cclxuXHRcdFx0aWYgKCFtYXJrIHx8IHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykgdGhpcy5nZXRCeUlkKGlkKS5vbkNsaWNrKGlkKTtcclxuICAgICAgdGhpcy5pbmRpY2F0ZU1hcmsoaWQpO1xyXG4gICAgfSxcclxuXHRcdGdvdG9OZXh0TWFyayhkaXIpIHtcclxuXHRcdFx0Y29uc3QgbCA9IHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya3MubGVuZ3RoO1xyXG5cclxuXHRcdFx0dGhpcy5tYXJrU2Nyb2xsUG9zICs9IGRpcjtcclxuXHJcblx0XHRcdGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPCAwKSB0aGlzLm1hcmtTY3JvbGxQb3MgPSBsIC0gMTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5tYXJrU2Nyb2xsUG9zID49IGwpIHRoaXMubWFya1Njcm9sbFBvcyA9IDA7XHJcblxyXG5cdFx0XHR0aGlzLmdvdG9NYXJrKCk7XHJcblx0XHR9LFxyXG4gICAgaW5kaWNhdGVNYXJrKGlkKSB7XHJcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSlcclxuICAgICAgICAuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpO1xyXG5cclxuICAgICAgY29uc3QgdG1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZF49XCInICsgaWQgKyAnX1wiXScpKTtcclxuXHJcbiAgICAgIHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0bXMuZm9yRWFjaCh0bSA9PiB0bS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWhpZ2hsaWdodC0tYWN0aXZlJykpLCAyMDAwKTtcclxuICAgIH0sXHJcbiAgICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrLFxyXG4gICAgICAgICAgbWFyayA9IHRoaXMuZmluZE1hcmsobSk7XHJcblxyXG4gICAgICBpZiAoIW1hcmspIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChib29rbWFyaykge1xyXG4gICAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbmV3IF9CT09LTUFSSygpLnNldChtYXJrKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6Ym9va21hcmsnKTtcclxuICAgICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb0Jvb2ttYXJrKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgICAgaWYgKCFib29rbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlbW92ZWRCb29rbWFyayA9IGJvb2ttYXJrO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgICBpZiAoYm9va21hcmspIGJvb2ttYXJrLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0QnlJZChpZCwgcG9zKSB7XHJcblx0XHRcdGxldCBkb25lID0gdGhpcy5kb25lLFxyXG5cdFx0XHRcdCAgZCA9IGRvbmUubGVuZ3RoLFxyXG5cdFx0XHRcdCAgbWFyaztcclxuXHJcblx0XHRcdHdoaWxlIChkLS0pIHtcclxuXHRcdFx0XHRtYXJrID0gZG9uZVtkXTtcclxuXHJcblx0XHRcdFx0aWYgKG1hcmsua2V5RGF0YS5pZCA9PSBpZClcclxuXHRcdFx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG1hcmssIHBvc2l0aW9uOiBkIH0gOiBtYXJrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwb3MgPyB7IG1hcms6IG51bGwsIHBvc2l0aW9uOiBudWxsIH0gOiBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRmaW5kTWFyayh4KSB7XHJcblx0XHRcdHggPSB4ID8geCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcblx0XHRcdGxldCBtYXJrID0gIXggP1xyXG5cdFx0XHRcdHRoaXMuZG9uZVt0aGlzLmRvbmUubGVuZ3RoIC0gMV0gOlxyXG5cdFx0XHRcdFx0dHlwZW9mIHggPT09ICdzdHJpbmcnID9cclxuXHRcdFx0XHR0aGlzLmdldEJ5SWQoeC5zcGxpdCgnXycpWzBdKSA6XHJcblx0XHRcdFx0eDtcclxuXHRcdFx0cmV0dXJuIG1hcms7XHJcblx0XHR9LFxyXG4gICAgc29ydEJ5SWQoKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5zb3J0KChtYXJrMSwgbWFyazIpID0+IG1hcmsxLmlkIC0gbWFyazIuaWQpO1xyXG4gICAgfSxcclxuXHRcdG9yZGVyTWFya3NWaXN1YWxseSgpIHtcclxuXHRcdFx0dGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRtYXJrZXItaGlnaGxpZ2h0W2RhdGEtdG0taWQkPVwiXzBcIl0nKSkuc29ydCgobTEsIG0yKSA9PiB7XHJcblx0XHRcdFx0bGV0IGJiMSA9IG0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0XHRiYjIgPSBtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0XHRcdFx0dG9wMSA9IGJiMS50b3AsXHJcblx0XHRcdFx0XHRcdHRvcDIgPSBiYjIudG9wO1xyXG5cclxuXHRcdFx0XHRpZiAodG9wMSA8IHRvcDIpIHJldHVybiAtMTtcclxuXHRcdFx0XHRlbHNlIGlmICh0b3AyIDwgdG9wMSkgcmV0dXJuIDE7XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoYmIxLmxlZnQgPCBiYjIubGVmdCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuICAgICAgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5tYXAobWFyayA9PiBwYXJzZUludChtYXJrLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSk7XHJcbiAgICAgIHRoaXMuZW1pdCgndmlzdWFsbHktb3JkZXJlZDptYXJrcycsIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyk7XHJcblx0XHR9LFxyXG4gICAgbWFya3NJbnRlcnNlY3QobWFyazEsIG1hcmsyKSB7XHJcblx0XHRcdGxldCB3cmFwcGVyczEgPSBtYXJrMS53cmFwcGVycyxcclxuICAgICAgICAgIHcxID0gd3JhcHBlcnMxLmxlbmd0aCxcclxuICAgICAgICAgIGlkMSA9IG1hcmsxLmlkLFxyXG4gICAgICAgICAgd3JhcHBlcnMyID0gbWFyazIud3JhcHBlcnMsXHJcbiAgICAgICAgICBpZDIgPSBtYXJrMi5pZCxcclxuICAgICAgICAgIHcyLCB0bXMsIGw7XHJcblxyXG4gICAgICB3aGlsZSAodzEtLSkge1xyXG4gICAgICAgIHcyID0gd3JhcHBlcnMyLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodzItLSkge1xyXG4gICAgICAgICAgdG1zID0gd3JhcHBlcnMxW3cxXS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10bS1pZF0nKTtcclxuICAgICAgICAgIGwgPSB0bXMubGVuZ3RoO1xyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZiAodG1zW2xdLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpWzBdID09IGlkMilcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fSxcclxuICAgIG9uTWFya2VyS2V5KGUsIGtleSkge1xyXG5cdFx0XHRsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBuZXcgX1NFTEVDVElPTigpO1xyXG5cclxuXHRcdFx0aWYgKCFzZWxlY3Rpb24ubm9kZXMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykga2V5ID0gZTtcclxuXHRcdFx0XHRlbHNlIHRoaXMucHJldmVudERlZmF1bHQoZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0a2V5ID0ga2V5IHx8ICdtJztcclxuXHRcdFx0fVxyXG5cclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBpZiAoX1NUT1JFLmlzTmV3KSB7XHJcbiAgICAgICAgICB0aGlzLmlzSW1tdXQgPSB0eXBlb2YgdGhpcy5pc0ltbXV0ID09PSAnYm9vbGVhbicgPyB0aGlzLmlzSW1tdXQgOiAhIXNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IF9TVE9SRS5pbW11dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsoa2V5LCBzZXR0aW5ncy5tYXJrZXJzW2tleV0sIHRoaXMuaXNJbW11dCksIHRydWUsIHRydWUpO1xyXG4gICAgICB9KTtcclxuXHRcdH0sXHJcbiAgICBvbkhvdGtleShrZXkpIHtjb25zb2xlLmxvZygnaG90a2V5Jywga2V5KTtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgICAgY2FzZSAneic6IHNlbGYudW5kbygpOyBicmVhaztcclxuICAgICAgICBjYXNlICd5Jzogc2VsZi5yZWRvKCk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3MnOiBzZWxmLnNhdmUoKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYic6IHNlbGYuc2V0Qm9va21hcmsoKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnYXJyb3d1cCc6IHNlbGYuZ290b05leHRNYXJrKC0xKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnYXJyb3dkb3duJzogc2VsZi5nb3RvTmV4dE1hcmsoMSk7IGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2QnOiBzZWxmLnJlbW92ZSgpOyBicmVhaztcclxuICAgICAgICBjYXNlICdjJzogc2VsZi5jb3B5KCk7IGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJldmVudERlZmF1bHQoZSkge1xyXG5cdFx0XHRpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0KSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0cmV0cmlldmVFbnRyeSgpIHtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgICAgY29uc3QgaXNOZXcgPSBfU1RPUkUuaXNOZXc7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBfU1RPUkUubmFtZTtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgICBlbnRyeS5tYXJrcyA9IHRoaXMuY29sbGVjdE1hcmtzKCk7XHJcblx0XHRcdGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgICAgZW50cnkudGl0bGUgPSB3aW5kb3cuZG9jdW1lbnQudGl0bGU7XHJcblx0XHRcdGVudHJ5LmNvdW50ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG5cdFx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgICBlbnRyeS5pbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IGVudHJ5LmltbXV0O1xyXG5cclxuICAgICAgaWYgKGlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgICBlbnRyeS51cmwgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZSA/IHdpbmRvdy5kb2N1bWVudC5VUkwgOiBfSEFTSExFU1Mod2luZG93LmRvY3VtZW50LlVSTCk7XHJcbiAgICAgICAgZW50cnkuc3luY2VkID0gX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgICBlbnRyeS5oYXNoU2Vuc2l0aXZlID0gX1NUT1JFLmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICAgIGVudHJ5Lm1hcmtzWzBdLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkgOlxyXG4gICAgICAgIGlzTmV3ID8gbmFtZSA6IGVudHJ5Lm5hbWU7XHJcblxyXG5cdFx0XHRyZXR1cm4gZW50cnk7XHJcblx0XHR9LFxyXG4gICAgY29sbGVjdE1hcmtzKCkge1xyXG4gICAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgICAgbGV0IGwgPSBkb25lLmxlbmd0aDtcclxuICAgICAgY29uc3QgbWFya3MgPSBbXTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgICAgZG9uZSA9IFtkb25lW2wtMV1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGxldCBtID0gMCwga0Q7IG0gPCBsOyBtKyspIHtcclxuXHRcdFx0XHRrRCA9IGRvbmVbbV0ua2V5RGF0YTtcclxuICAgICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRcdG1hcmtzLnB1c2goa0QpO1xyXG5cdFx0XHR9XHJcbiAgICAgIHJldHVybiBtYXJrcztcclxuICAgIH0sXHJcbiAgICBvbkhhc2hDaGFuZ2UoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3VtZWQtb24taGFzaGNoYW5nZScpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXJrLCBjb2xvcikge1xyXG5cclxuICBjb25zdCBCT0RZID0gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhZGRNYXJrTGlzdGVuZXJzJyxcclxuICAgICAgICAnZHJhZzpub3RlJzogJ29uRHJhZycsXHJcbiAgICAgICAgJ2RyYWdzdG9wOm5vdGUnOiAnb25EcmFnRW5kJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdfZGVsZXRlJyxcclxuICAgICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICdoaWRlJyxcclxuICAgICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2JyaW5nVXBGcm9udCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYXR0ZW1wdFVwZGF0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoc3RhcnQ6IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBlbDogbnVsbCxcclxuICAgIG1hcmssXHJcbiAgICBjb2xvcjogY29sb3IgfHwgJycsXHJcbiAgICBtYXJrQ2xpY2tIYW5kbGVyOiBudWxsLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIHJlY2VudGx5VXBkYXRlZDogZmFsc2UsXHJcbiAgICBzZXR0aW5nc01vZGU6IGZhbHNlLFxyXG4gICAgcG9zOiB7IGw6IG51bGwsIHQ6IG51bGwgfSxcclxuICAgIHNpemU6IHsgdzogbnVsbCwgaDogbnVsbCB9LFxyXG4gICAgZHJhZ0RYOiAwLFxyXG4gICAgZHJhZ0RZOiAwLFxyXG4gICAgbXV0YXRpb25PYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGp1c3ROb3RlRGF0YU9iamVjdCgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZU5vdGVFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWRkTWFya0xpc3RlbmVycygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGp1c3ROb3RlRGF0YU9iamVjdCgpIHtcclxuICAgICAgY29uc3Qgbm90ZURhdGEgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlO1xyXG4gICAgICBpZiAodHlwZW9mIG5vdGVEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCAneWVsbG93JyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFub3RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBub3RlRGF0YS5wb3MgfHwgdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbm90ZURhdGEuc2l6ZSB8fCB0aGlzLnNpemU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVOb3RlRWxlbWVudCgpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGUnKTtcclxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVoZWFkZXInKTtcclxuICAgICAgY29uc3QgZGVsID0gdGhpcy5kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVkZWxldGUnKTtcclxuICAgICAgY29uc3QgbWluID0gdGhpcy5taW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVtaW5pbWl6ZScpO1xyXG4gICAgICBjb25zdCBnZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY3VzdG9taXplJyk7XHJcbiAgICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLnBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVwYWxldHRlJyk7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dDtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yO1xyXG4gICAgICBfU1RPUkUubm90ZUNvbG9yID0gY29sb3I7XHJcbiAgICAgIGNvbnN0IGRlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICAgIGNvbnN0IG1pblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjAxMykpO1xyXG4gICAgICBjb25zdCBnZWFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNjk5KSk7XHJcblxyXG4gICAgICBbJ2dyZWVuJywgJ3doaXRlJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJywgJ3B1cnBsZScsICdibHVlJywgJ3R1cnF1b2lzZSddLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY29sb3InKTtcclxuICAgICAgICBjb2xvci5jbGFzc05hbWUgPSAndG1ub3RlY29sb3ItLScgKyBjO1xyXG4gICAgICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicsIGMpO1xyXG4gICAgICAgIHBhbGV0dGUuYXBwZW5kQ2hpbGQoY29sb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHAuc2V0QXR0cmlidXRlKCdkYXRhLXRtLW5vdGUnLCB0cnVlKTtcclxuICAgICAgZGVsLmFwcGVuZENoaWxkKGRlbFRleHQpO1xyXG4gICAgICBtaW4uYXBwZW5kQ2hpbGQobWluVGV4dCk7XHJcbiAgICAgIGdlYXIuYXBwZW5kQ2hpbGQoZ2VhclRleHQpO1xyXG4gICAgICBub3RlLmFwcGVuZChoZWFkZXIpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAncmVtb3ZlTm90ZVN0b3JhZ2UnLFxyXG4gICAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3RvZ2dsZTpub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlVHJhbnNwJyxcclxuICAgICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGVzOiB7fSxcclxuICAgIHRvZ2dsZTogbnVsbCxcclxuICAgIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gICAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNwKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgICB9LFxyXG4gICAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUFsbCgpIHtcclxuICAgICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGU7XHJcbiAgICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVHJhbnNwKCkge1xyXG4gICAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgICAgX1NUT1JFLmdldCgnbm90ZXRyYW5zcCcpLnRoZW4odHJhbnNwID0+IHtcclxuICAgICAgICBpZiAodHJhbnNwKSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNFbXB0eShvYmopIHtcclxuICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlciA9IChlKSA9PiB0aGlzLmVtaXREcmFnRXZlbnQobm90ZSwgZSk7XHJcbiAgICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gICAgfSxcclxuICAgIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzpub3RlJywgbm90ZSwgZSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgICB0aGlzLmVtaXQoJ25vdGVzLXN0YXRlJywgIXRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSwgaW5mbyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc3RhcnRlZDphcHAnOiAnY2hlY2tVUkwnLFxyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlJyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZFBhZ2VTdGF0ZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnb25VcmxDaGFuZ2UnLFxyXG4gICAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAnc2V0dXAnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGtleWRvd246IHtcclxuICAgICAgICAgICcqJzogJ2RlbGVnYXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgICAnKic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXJsOiAnJyxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIHNldDogZmFsc2UsXHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICByZXRyeUFjdGl2ZTogZmFsc2UsXHJcbiAgICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICAgIHJlZ2lzdGVyZWRMb2FkSGFuZGxlcjogZmFsc2UsXHJcbiAgICBrZXlDb2RlTWFwOiB7XHJcbiAgICAgICcxMyc6ICdFbnRlcicsXHJcbiAgICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICAgJzE3MSc6ICcrJywgJzE3Myc6ICctJ1xyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwb3dlcihvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZSA9IG9uO1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ21vZGUnKS50aGVuKGFjdGl2ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldCB8fCAhYWN0aXZlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50LndpbmRvdy5kb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnICYmICF0aGlzLnJlZ2lzdGVyZWRMb2FkSGFuZGxlcikge1xyXG4gICAgICAgICAgdGhpcy5yZWdpc3RlcmVkTG9hZEhhbmRsZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5zZXR1cCgpLCB3aW5kb3cucGFyZW50LndpbmRvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfU1RPUkUuaWZyYW1lID0gdGhpcy5pc0lGcmFtZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5kb2N1bWVudC5VUkw7XHJcbiAgICAgICAgdGhpcy5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyh0aGlzLnVybCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tVUkwoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzSUZyYW1lKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIH0sXHJcbiAgICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBlbC50YWdOYW1lO1xyXG5cclxuICAgICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlKGUpIHtcclxuICAgICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgICBtb2RLZXkgPSAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5KSxcclxuICAgICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgICAgZnVuY3Rpb25LZXlzID0gbG9ja2VkQWN0aW9ucy5jb25jYXQoYXJyb3dLZXlzKS5jb25jYXQoJ2MnKSxcclxuICAgICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNoaWZ0U2Vuc2l0aXZlS2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkga2V5ID0gdGhpcy5rZXlDb2RlTWFwW2tleUNvZGVdO1xyXG5cclxuICAgICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICAgIGNvbnN0IGlzQ3VzdG9tTWFya2VyS2V5ID0gaXNNYXJrZXJLZXkgJiYgIWRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKGtleSk7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5nKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9va3VwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHJlc3NlZDptYXJrZXIta2V5JywgZSwgb3JpZ0tleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghc2V0dGluZ1sxXSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgICAgY29uc3QgczIgPSBzaG9ydGN1dFsxXTtcclxuXHJcbiAgICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMubG9va3VwKCk7XHJcblxyXG4gICAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdwcmVzc2VkOmhvdGtleScsIGtleSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvb2t1cCgpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRUZXh0KSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgc2VsZWN0ZWRUZXh0KTtcclxuICAgIH0sXHJcbiAgICBjaGVja1VSTCgpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0KCdjaGVjazp1cmwnLCB0aGlzLnVybClcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhKSB0aGlzLm9uVXJsRm91bmQodGhpcy5maWx0ZXJFbnRyaWVzKGRhdGEuZW50cmllcyksIGRhdGEucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVudHJpZXMsIGZvcmNlKSB7XHJcbiAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGVudHJpZXMpID8gZW50cmllcyA6IFtlbnRyaWVzXTtcclxuICAgICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gdGhpcy5oYXNobGVzc1VSTCA6IHRoaXMudXJsO1xyXG5cclxuICAgICAgaWYgKGZvcmNlIHx8IGZpcnN0RW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgICBfU1RPUkUuYWRkRW50cmllcyhlbnRyaWVzKTtcclxuICAgICAgICAvL19TVE9SRS5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICAgIGlmIChmb3JjZSkgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICd3JykgdGhpcy5sb29rdXAoKTtcclxuICAgIH0sXHJcbiAgICBvblVybEZvdW5kKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGUoZW50cmllcywgdHJ1ZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmUgJiYgIXRoaXMuaW5pdGlhbGl6ZWQgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChyZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgICAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IHRoaXMuaGFzaGxlc3NVUkwgOiB0aGlzLnVybDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm1hcmtzJywgZW50cmllcyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaWx0ZXJFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgICAgbGV0IGxvY2tlZEVudHJpZXMgPSBbXSxcclxuICAgICAgICAgIGwgPSBlbnRyaWVzLmxlbmd0aCxcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXNFeGlzdCA9IGZhbHNlLFxyXG4gICAgICAgICAgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBsb2NrZWRFbnRyaWVzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG9ja2VkRW50cmllc0V4aXN0ICYmIG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobG9ja2VkRW50cmllcy5sZW5ndGgpIHtcclxuICAgICAgICBfU1RPUkUubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcy5zb3J0KChhLCBiKSA9PiAobmV3IERhdGUoYS5sYXN0KSkgLSAobmV3IERhdGUoYi5sYXN0KSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9TVE9SRS5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGVudHJpZXM7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6c2VsZWN0aW9uJywgIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCk7XHJcbiAgICB9LFxyXG4gICAgb25VcmxDaGFuZ2UodGFiLCBuZXdVcmwpIHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfU1RPUkUuZW50cmllc1tPYmplY3Qua2V5cyhfU1RPUkUuZW50cmllcylbMF1dO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICFfU1RPUkUuaXNOZXcgJiZcclxuICAgICAgICBlbnRyeSAmJlxyXG4gICAgICAgIGVudHJ5Lmhhc2hTZW5zaXRpdmUgJiZcclxuICAgICAgICBfSEFTSExFU1MobmV3VXJsKSA9PT0gdGhpcy5oYXNobGVzc1VSTCAmJlxyXG4gICAgICAgIG5ld1VybCAhPT0gdGhpcy51cmxcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdoYXNoY2hhbmdlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgICB0aGlzLnJldHJ5QWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICAgIHRoaXMucmV0cnlBY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdlLXN0YXRlJywge1xyXG4gICAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgICByZXRyeUFjdGl2ZTogdGhpcy5yZXRyeUFjdGl2ZVxyXG4gICAgICB9LCBpbmZvKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nOiAnc3RhcnQnLFxyXG4gICAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdwcm9ncmVzcycsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ3Byb2dyZXNzJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnc3RvcCcsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhY3RpdmF0ZSdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgc3RlcHM6IDAsXHJcbiAgICB0b3RhbFdpZHRoOiA0MTMsXHJcbiAgICBjdXJyZW50V2lkdGg6IDAsXHJcbiAgICBzdGVwTGVuZ3RoOiAwLFxyXG4gICAgY2FuY2VsSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcHJvZ3Jlc3Ntb2RhbCcpO1xyXG5cclxuICAgICAgW3tcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2hlYWRlcicsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Jlc3RvcmluZycpXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2Nsb3NlJyxcclxuICAgICAgICB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3NiYXInLFxyXG4gICAgICAgIGNoaWxkOiB7XHJcbiAgICAgICAgICB0eXBlOiAndG1wcm9ncmVzcydcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2NhbmNlbCcsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2NhbmNlbCcpXHJcbiAgICAgIH1dXHJcbiAgICAgICAgLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xyXG4gICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgdGhpc1tvYmoudHlwZV0gPSBlbDtcclxuICAgICAgICAgIGlmIChvYmoudGV4dCkgZWwudGV4dENvbnRlbnQgPSBvYmoudGV4dDtcclxuICAgICAgICAgIGlmIChvYmouY2hpbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmouY2hpbGQudHlwZSk7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgdGhpc1tvYmouY2hpbGQudHlwZV0gPSBjaGlsZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzdW1lKGxlbikge1xyXG4gICAgICB0aGlzLnN0ZXBzID0gbGVuO1xyXG4gICAgICB0aGlzLnN0ZXBMZW5ndGggPSB0aGlzLnRvdGFsV2lkdGggLyBsZW47XHJcbiAgICAgIHRoaXMuY3VycmVudFdpZHRoID0gMDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gMDtcclxuICAgIH0sXHJcbiAgICBzdGFydChsZW4pIHtcclxuICAgICAgaWYgKCFsZW4gfHwgIXRoaXMuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgIHRoaXMucmVzdW1lKGxlbik7XHJcbiAgICAgIGNvbnN0IGNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpO1xyXG4gICAgICBjb25zdCBjbG9zZUhhbmRsZXIgPSB0aGlzLmNsb3NlSGFuZGxlciA9IHRoaXMuc3RvcC5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnRtcHJvZ3Jlc3NjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHByb2dyZXNzKCkge1xyXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY3VycmVudFdpZHRoICs9IHRoaXMuc3RlcExlbmd0aDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgfSxcclxuICAgIHN0b3AoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoKGUpIHt9XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjYW5jZWxlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgncHJvZ3Jlc3NiYXInKS50aGVuKHByb2dyZXNzYmFyID0+IHRoaXMuYWN0aXZlID0gcHJvZ3Jlc3NiYXIpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5vbignY2FuY2VsZWQ6cmVzdG9yYXRpb24nLCAoKSA9PiB0aGlzLmNhbmNlbGVkID0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW5DaHVua3MoZGF0YSwgcHJvYywgY2IpIHtcclxuICAgIHByb2MgPSBwcm9jLmJpbmQodGhpcyk7XHJcbiAgICBjYiA9IGNiLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIHJlYygpIHtcclxuXHRcdFx0bGV0IGV4cGlyZSA9ICtuZXcgRGF0ZSgpICsgNTAwO1xyXG5cclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdHRyeSB7XHJcbiAgICAgICAgICBwcm9jKGRhdGEuc2hpZnQoKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHR9IHdoaWxlIChkYXRhLmxlbmd0aCA+IDAgJiYgZXhwaXJlID4gK25ldyBEYXRlKCkpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDApO1xyXG5cdFx0XHRlbHNlIGNiKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuICByZXBvcnQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdsb3N0Om1hcmtzJywgdGhpcy5mYWlsdXJlUmVwb3J0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmVudHJ5Lm5hbWUsIHRoaXMucmVzdG9yZWQsIHRoaXMubG9zdCwgdGhpcy5hcmVhKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgIHRoaXMuY2FjaGUgPSBbXTtcclxuICAgIHRoaXMucGhhc2UgPSAxO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCA9IDA7XHJcbiAgICB0aGlzLmNodW5rRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgdGhpcy5vb20gPSBlbnRyeS5tYXJrcy5sZW5ndGggPT09IDEgJiYgZW50cnkubWFya3NbMF0uaWQgPT0gMTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lcigpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRpbWVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbnRyeSxcclxuICAgICAgICBub3cgPSBbXSwgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICBsID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBtYXJrO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuXHJcbiAgICAgIHRoaXMuY29udmVydERlc2NyaXB0aW9uKG1hcmspLmNyZWF0ZVRlbXBPYmplY3QobWFyayk7XHJcblxyXG4gICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgIGVsc2Ugbm93LnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHBvc3Rwb25lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc3RvcmUoKTtcclxuICB9XHJcbiAgY29udmVydERlc2NyaXB0aW9uKG1hcmspIHtcclxuICAgIGlmICh0eXBlb2YgbWFyay5jb25kcy5vID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgY29udmVydGVkQ29uZHMgPSB7XHJcbiAgICAgICAgICAgIG86IGNvbmRzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgbjI6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIHAxOiBjb25kcy5maXJzdFRleHROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDM6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwNDogY29uZHMuZmlyc3RHcmFtcGFOb2RlUG9zaXRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICBtYXJrLmNvbmRzID0gY29udmVydGVkQ29uZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3JlYXRlVGVtcE9iamVjdChtYXJrKSB7XHJcbiAgICBsZXQgdGV4dCA9IG1hcmsudGV4dCxcclxuICAgICAgICB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLFxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgIG1hcmsudGVtcCA9IHtcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHRyaW1tZWRUZXh0OiB0cmltbWVkVGV4dCxcclxuICAgICAgdHJpbW1lZFRleHRMZW5ndGg6IHRyaW1tZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0OiBzcXVlZXplZFRleHQsXHJcbiAgICAgIHNxdWVlemVkVGV4dExlbmd0aDogc3F1ZWV6ZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZFBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtYXJrLnN5bmNlZCA9IHRoaXMuZW50cnkuc3luY2VkO1xyXG4gIH1cclxuICByZXN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDIpIHRoaXMuc29ydFF1ZXVlQnlJZCgpO1xyXG5cclxuICAgIGxldCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgLmdldFRleHRQb3NpdGlvbnMobWFya3MsIGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5waGFzZSA9PT0gMSAmJiBsZW5ndGggPiAxKVxyXG4gICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgdGhpcy5maW5kUG9zc2libGVFeHRyZW1hKClcclxuICAgICAgICAgIC5ydWxlT3V0TXVsdGlwbGVzKClcclxuICAgICAgICAgIC5yZXN0b3JlUmFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggJiYgIXRoaXMuY2FuY2VsZWQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8ICtuZXcgRGF0ZSgpKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzdG9yZSgpLCAwKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICB9XHJcbiAgc29ydFF1ZXVlQnlJZCgpIHtcclxuICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbWFyaywgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmICghbWFya3NbbF0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdWzBdO1xyXG4gICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgIH1cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5xdWV1ZS5wdXNoKFt0ZW1wW2ldXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgbGV0IHRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCxcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHNxdWVlemVkVGV4dCwgc3F1ZWV6ZWRUZXh0TGVuZ3RoLCBwLCBlbmRQb3NpdGlvbjtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHAgPSB1bmRlZmluZWQ7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICBpZiAoIW1hcmtUZW1wKSB7XHJcbiAgICAgICAgbWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gZW5kUG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzcXVlZXplZFRleHQgPSBtYXJrVGVtcC5zcXVlZXplZFRleHQ7XHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAocCAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIHAgPSAtMTtcclxuICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHNxdWVlemVkVGV4dCwgcCArIDEpO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBwICsgc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICghbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzEnKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcclxuICAgIGxldCBsID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgcG9zLCBzdGFydCwgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHBvcyA9IHBvc2l0aW9uc1tsXTtcclxuICAgICAgc3RhcnQgPSBwb3NbMF07XHJcblxyXG4gICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgZWxzZSB0ZW1wW3N0YXJ0XSA9IHBvcztcclxuICAgIH1cclxuICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBpIDwgdDsgaSsrKVxyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgfVxyXG4gIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBwb3MxLCBwb3MyLCBpLCBtMSwgbTIsIGlkMSwgaWQyLCBpZDtcclxuXHJcbiAgICBpZiAocCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHAtLSA+IDEpIHtcclxuICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICBwb3MyID0gcG9zaXRpb25zW3BdO1xyXG4gICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICBtMiA9IHBvczJbMl07XHJcbiAgICAgICAgaWQxID0gbTEuaWQ7XHJcbiAgICAgICAgaWQyID0gbTIuaWQ7XHJcblxyXG4gICAgICAgIGlmIChpZDEgPT09IGlkMikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG5cclxuICAgICAgICAgIGlmIChpZDEgPCBpZDIpIHtcclxuICAgICAgICAgICAgaWQgPSBpZDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGlkMTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwOyBpKyspXHJcbiAgICAgICAgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjdXRPdXRGb3IoaWQpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUocC0tKSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbnNbcF1bMl0uaWQgPT09IGlkKVxyXG4gICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3Rwb25lKG1hcmspIHtcclxuICAgIGxldCBxdWV1ZSA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYWxyZWFkeUluY2x1ZGVkKVxyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICB9XHJcbiAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgIGxldCBub2RlcyA9IHRoaXMuYm9keVRleHROb2RlcyxcclxuICAgICAgICBuID0gbm9kZXMgPyBub2Rlcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcGhhc2UgPSB0aGlzLnBoYXNlLFxyXG4gICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZSA9IFtdLFxyXG4gICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLCBjaGFycyA9IDAsXHJcbiAgICAgICAgbmV4dFN0YXJ0Rm91bmQsIGVuZGluZ3NJblRoaXNOb2RlLFxyXG4gICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIGRpZmYsIGwsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBlLCBmLCBpZCwgcCwgcSwgeCwgbSxcclxuICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0LCBzdGFydEZvdW5kRm9yLCBwb3N0cG9uZWQsIGhhc0VuZGluZ3NJblRoaXNOb2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgbm9kZXNUZXh0ID0gdGhpcy5zcXVlZXplKG5vZGUuZGF0YSk7XHJcbiAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNoYXJzICs9IG5vZGVzVGV4dExlbmd0aDtcclxuICAgICAgbCA9IGluZGljZXMubGVuZ3RoO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgIHBvc3Rwb25lZCA9IFtdO1xyXG4gICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGluZGljZXNbbF1bMF07XHJcbiAgICAgICAgZW5kUG9zaXRpb24gPSBpbmRpY2VzW2xdWzFdO1xyXG4gICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciB8fCBbXTtcclxuICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLmxlbmd0aCA8IG1hcmsudGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMucHVzaCh7IG5vZGU6IG5vZGUsIHBvczogaSB9KTtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIHN0YXJ0Rm91bmRGb3IucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICFtYXJrLnRlbXAuZW5kRm91bmRGb3IuaW5jbHVkZXMoZW5kUG9zaXRpb24pICYmXHJcbiAgICAgICAgICAoY2hhcnMgLSBlbmRQb3NpdGlvbikgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHN0YXJ0Rm91bmRGb3IpIDwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0ID0gdGhpcy5maW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgZW5kUG9zaXRpb24gLSAoY2hhcnMgLSBub2Rlc1RleHRMZW5ndGgpKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvci5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXSA9IHtcclxuICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zc2libGVGb2N1c09mZnNldCxcclxuICAgICAgICAgICAgICBwb3M6IGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICBzYXRpc2ZpZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICBpZiAoY2hhcnMgPiB0aGlzLm1heFBvc2l0aW9uKSBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChwaGFzZSAhPT0gMSB8fCB0aGlzLm9vbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbWFyayA9IHRoaXMubWFya3NbaV07XHJcbiAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMobWFyay5pZCkpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMicpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IGNhY2hlLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIG5vZGUsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgZ3JhbmRncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxLFxyXG4gICAgICAgIHBvc3NpYmxlRW5kcywgc3RhcnRGb3VuZEZvciwgY29uZHMsIHN0YXJ0T2Zmc2V0LCB0ZW1wLCB0ZXh0TGVuZ3RoLCBzdGFydDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBjYWNoZVtpXTtcclxuICAgICAgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzID0gdGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgIHBvc3NpYmxlRW5kcyA9IHRlbXAucG9zc2libGVFbmRzO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gdGVtcC5zdGFydEZvdW5kRm9yXHJcbiAgICAgIHAgPSBwb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoO1xyXG4gICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY29uZHMubztcclxuICAgICAgdGV4dExlbmd0aCA9IHRlbXAudGV4dExlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwID4gMSkge1xyXG4gICAgICAgIHdoaWxlIChwLS0pIHtcclxuICAgICAgICAgIG5vZGUgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcF0ubm9kZTtcclxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAoIWdyYW1wYSB8fCBjb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gocCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSBwID0gMDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkgcCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHEgPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5ub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW5kZ3JhbXBhID0gZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICghZ3JhbmRncmFuZGdyYW1wYSB8fCBjb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbXBhKSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHBvc3NpYmxlRW5kc1tzdGFydEZvdW5kRm9yW3FdXS5vZmZzZXQgLSBzdGFydE9mZnNldCkgPT09IHRleHRMZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwID0gcTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHAgPSAwO1xyXG5cclxuICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgIHN0YXJ0ID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZSA9IHN0YXJ0Lm5vZGU7XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbiA9IHN0YXJ0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuc2V0TWF0Y2hpbmdFbmQobWFyaywgcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvcltwXSxcclxuICAgICAgICBlbmQgPSBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dO1xyXG5cclxuICAgIG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uID0gZW5kLnBvcztcclxuICAgIG1hcmsudGVtcC5mb2N1c09mZnNldCA9IGVuZC5vZmZzZXQ7XHJcbiAgfVxyXG4gIHNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpIHtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFtcGEgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBkZXNjcmlwdGlvbi5vLFxyXG4gICAgICAgIHJlbGV2YW50Tm9kZVRleHQgPSBub2RlLmRhdGEuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0KS50cmltKCksXHJcbiAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0LFxyXG4gICAgICAgIG0gPSBtYXJrLnRlbXAudHJpbW1lZFRleHRMZW5ndGgsXHJcbiAgICAgICAgdGV4dHNNYXRjaDtcclxuXHJcbiAgICBpZiAobSA8PSBsKVxyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUobWFya1RleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpKSA9PT0gMDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0ZXh0c01hdGNoICYmXHJcbiAgICAgIChwYXJlbnROb2RlLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMSB8fCAoZGVzY3JpcHRpb24ubjEgPT09ICdUTScgJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpICYmXHJcbiAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgIHRoaXMud2hpY2hDaGlsZChwYXJlbnROb2RlLCBub2RlKSA9PT0gZGVzY3JpcHRpb24ucDFcclxuICAgICk7XHJcbiAgfVxyXG4gIGZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBuKSB7XHJcbiAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgbCA9IG5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3F1ZWV6ZShub2RlVGV4dFtpXSkpIGNvdW50ZXIrKztcclxuXHJcbiAgICAgIGlmIChjb3VudGVyID09PSBuKSByZXR1cm4gKC9cXHMkLy50ZXN0KG1hcmsudGV4dCkgPyBpICsgMiA6IGkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzdG9yZVJhbmdlcygpIHtcclxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHN0YXJ0LCBlbmQsIGZvY3VzT2Zmc2V0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgIGVuZCA9IG1hcmtUZW1wLmVuZE5vZGU7XHJcbiAgICAgIGZvY3VzT2Zmc2V0ID0gbWFya1RlbXAuZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSkge1xyXG4gICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzMnKSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgIHJhbmdlLnNldEVuZChlbmQsIGZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgLy9zZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5yZWNvbGxlY3ROb2RlcyhtYXJrKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBtYXJrLnRlbXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJvZHlTZWxlY3Rpb24oZWwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwrKztcclxuXHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKGVsKTtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHJpYWwgPCA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRCb2R5U2VsZWN0aW9uKGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9ICcgJztcclxuICAgICAgICAgIHRoaXMuYm9keVRleHROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUodGhpcy5zZWxlY3Rpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gdGhpcy5zZWxlY3Rpb24ubm9kZXMgPyB0aGlzLnNlbGVjdGlvbi5ub2Rlcy5zbGljZSgpIDogW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpID8gdGV4dC5yZXBsYWNlKC9cXHR8XFxzfFxcbnxcXHIvZywgJycpIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICB3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGNvbnRleHQpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdCAgICBjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0ICAgIHBvcyA9IDAsIGkgPSAwLCBjdXJyZW50Q2hpbGQ7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnRDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGQpIHJldHVybiBwb3M7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZU5hbWUgPT09IGNvbnRleHQpIHBvcysrO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICBpZiAoIShjdXJyZW50Q2hpbGQubm9kZVR5cGUgPT09IDMgJiYgIWN1cnJlbnRDaGlsZC5kYXRhKSkgcG9zKys7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEltbXV0UmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IFsuLi5lbnRyeS5tYXJrcy5zb3J0KChtMSwgbTIpID0+IG0xLmlkIC0gbTIuaWQpXTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NJbkNodW5rcyhtYXJrcywgdGhpcy5yZXN0b3JlUmFuZ2UsIHRoaXMucmVwb3J0KTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVSYW5nZShtYXJrKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIHRoaXMubWFya3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpLFxyXG4gICAgICAgIGZpbHRlciA9IHdob2xlRG9jdW1lbnQgP1xyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxmLmlzU2VsZWN0YWJsZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKSA6XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGVjdGlvbi5jb250YWluc05vZGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSksXHJcblxyXG4gICAgICAgIGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSksXHJcblxyXG4gICAgICAgIHRlbXBSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgbm9kZXMgPSBbXSwgcGFyZW50Tm9kZXMgPSBbXSxcclxuICAgICAgICB0ZXh0Tm9kZSwgcGFyZW50LCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIHdoaWxlKHRleHROb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkge1xyXG4gICAgICBub2Rlcy5wdXNoKHRleHROb2RlKTtcclxuICAgIH1cclxuICAgIG5vZGVzID0gdGhpcy50cmltU2VsZWN0aW9uKG5vZGVzKTtcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSA6IG5vZGVzO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlcyA9IHRoaXMuY29sbGVjdFBhcmVudE5vZGVzKHRoaXMubm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZWNvbGxlY3ROb2RlcyhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrV3JhcHBlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXj1cIicgKyBtYXJrLmlkICsgJ19cIl0nKSk7XHJcbiAgICBjb25zdCBtID0gbWFya1dyYXBwZXJzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5ld1NlZ21lbnQgPSBtYXJrV3JhcHBlcnMubWFwKGVsID0+IGVsLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGNvbnN0IHByZXYgPSBtYXJrV3JhcHBlcnNbMF0ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgY29uc3QgbmV4dCA9IG1hcmtXcmFwcGVyc1ttLTFdLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ID0gbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgZW5kID0gbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbjtcclxuXHJcbiAgICBpZiAocHJldiAmJiBwcmV2Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQudW5zaGlmdChwcmV2KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC5wdXNoKG5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZXMuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIC4uLm5ld1NlZ21lbnQpO1xyXG4gIH1cclxuICB0cmltU2VsZWN0aW9uKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBsZXQgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBmaXJzdE5vZGUgPSBub2Rlc1swXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBmaXJzdE5vZGUgJiYgZmlyc3ROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoIDw9IHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICBub2Rlcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBsYXN0Tm9kZSAmJiB0aGlzLmlzQmxhbmsobGFzdE5vZGUuZGF0YS5zdWJzdHIoMCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSkpIHtcclxuICAgICAgICBub2Rlcy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICByZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbCA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IHJnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UocmcpO1xyXG5cclxuICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICByZy5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgICByZXR1cm4gISFzZWwudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZSh0aGlzLnJhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIGNvbGxlY3RQYXJlbnROb2Rlcyhub2Rlcykge1xyXG4gICAgbGV0IGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgcGFyZW50cyA9IFtdLCBpID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcGFyZW50cy5wdXNoKG5vZGVzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH1cclxuICByZXRyaWV2ZVRleHQoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcyxcclxuICAgICAgICBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG5vZGVUZXh0cyA9IFtdLFxyXG4gICAgICAgIHRleHQ7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIG5vZGVUZXh0cy5wdXNoKG5vZGVzW2ldLmRhdGEpO1xyXG5cclxuICAgIGwgLT0gMTtcclxuXHJcbiAgICBpZiAobm9kZVRleHRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0LCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAvL25vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmspIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgICAnYWRkZWQ6bm90ZSc6ICdvbk5vdGVBZGRlZCcsXHJcbiAgICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrUmVtb3ZlZCdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcblxyXG4gICAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgbm90ZXM6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYm9va21hcms6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICBub3RlczogZmFsc2UsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU3RhdGUoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ID0gbm90ZWljb24pO1xyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgICAodGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgJiYgdGhpcy5ib29rbWFyaykgfHxcclxuICAgICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtdWknKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgICBlbHNlIGlmIChidG4uc2hvd24gJiYgKCF0aGlzW2JdIHx8ICFidG4uc2hvdykpIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICAgIGlmIChidXR0b25zW2JdLnNob3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgICAgY29uc3Qgbm90ZXNCdXR0b24gPSB0aGlzLmJ1dHRvbnMubm90ZXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3Rlc3RvZ2dsZScpO1xyXG4gICAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgICBib29rbWFya0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICAgIH0sXHJcbiAgICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgY29uc3QgaGFuZGxlciA9IGJ0bi5oYW5kbGVyID0gdHlwZSA9PT0gJ25vdGVzJyA/XHJcbiAgICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgIHRtdWkuYXBwZW5kQ2hpbGQoYnRuLmVsKTtcclxuICAgICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG5cclxuICAgICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bi5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3RtdWlwb3MnKVxyXG4gICAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgICB9LFxyXG4gICAgb25Ob3RlQWRkZWQoKSB7XHJcbiAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICBvbkJvb2ttYXJrUmVtb3ZlZCgpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdpbmplY3Rpb24nLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG5cdFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdjYW5jZWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==