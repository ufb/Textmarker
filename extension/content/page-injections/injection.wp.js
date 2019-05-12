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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9hdXRvLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL2Jvb2ttYXJrLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvY29udGV4dG1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXItcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9wYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL21vZHVsZXMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvbW9kdWxlcy9yZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9tb2R1bGVzL3RtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfZW50cnkiLCJpZnJhbWUiLCJuYW1lIiwidW5kZWZpbmVkIiwiaXNOZXciLCJlbnRyaWVzIiwibG9ja2VkIiwiaGFzaFNlbnNpdGl2ZSIsInRtaWQiLCJub3RlQ29sb3IiLCJpbW11dCIsInJlZGVzY3JpYmluZyIsImF1dG9pbml0IiwidXBkYXRlU3RhdHVzIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwidGhlbiIsImhpc3RvcnlTZXR0aW5ncyIsInNldHRpbmdzIiwiaGlzdG9yeSIsIm5hbWluZyIsImlnbm9yZUhhc2giLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsInJlbmFtZUVudHJ5IiwiZW50cnkiLCJvbGROYW1lIiwic2V0U3luY0ZvckVudHJ5Iiwic3luY2VkIiwicmVtb3ZlRW50cnkiLCJkZWxldGVkRW50cnkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZEVudHJpZXMiLCJlIiwibGVuZ3RoIiwiaSIsImZpZWxkIiwiUHJvbWlzZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyIiwibWV0aCIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJzeW5jZWRTdG9yYWdlIiwibG9jYWwiLCJsb2NhbEhpc3RvcnkiLCJsb2NhbFN0b3JhZ2UiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9ibWljb24iLCJtaXNjIiwiYm1pY29uIiwiX2dldF9ub3RlaWNvbiIsIm5vdGVpY29uIiwiX2dldF9ub3Rlb25jbGljayIsIm5vdGVvbmNsaWNrIiwiX2dldF9ub3RldHJhbnNwIiwibm90ZXRyYW5zcCIsIl9nZXRfdG11aXBvcyIsInRtdWlwb3MiLCJfZ2V0X2F1dG9zYXZlIiwiYXV0b3NhdmUiLCJfZ2V0X2ltbXV0IiwiX2dldF9wcm9ncmVzc2JhciIsInByb2dyZXNzYmFyIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiX2dldF9tb2RlIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X25hbWluZyIsImJvb3RzdHJhcHBlZCIsInBvd2VyIiwib24iLCJfRE9NTU9EVUxFIiwiaGFuZGxlciIsIm1hcmtlciIsInVwZGF0ZSIsIl9TVE9SRSIsIm1hcmttZXRob2QiLCJzZXRNYXJrZXIiLCJrZXkiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGVkIiwibGlzdGVuaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJzdG9wTGlzdGVuaW5nIiwib25Nb3VzZXVwIiwiYmluZCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwiZW1pdCIsIl9CT09LTUFSSyIsIm1hcmsiLCJhbmNob3IiLCJ3cmFwcGVycyIsInciLCJrZXlEYXRhIiwiYm9va21hcmsiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJtIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhY3RpdmF0ZSIsInJlZ2lzdGVySGFuZGxlciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJfTUFSSyIsInByZVNldHRpbmdzIiwiZGVmYXVsdHMiLCJpc0ltbXV0Iiwic3R5bGUiLCJjb25kcyIsInRleHQiLCJub3RlIiwiZCIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwiZGVzY3JpYmVfaW1tdXQiLCJub2RlcyIsIm4iLCJjcmVhdGVXcmFwcGVycyIsImxhc3RJbmRleCIsIm5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRTdGFydCIsInNldEVuZCIsInN1cnJvdW5kQ29udGVudHMiLCJwdXNoIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZSIsImRlZmluZVBvc2l0aW9uIiwic2V0Qm9va21hcmsiLCJkZXNjcmliZSIsInJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMiLCJ3cmFwcGVyIiwicHJveHkiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmNsdWRpbmdPZmZzZXRzIiwiZmlyc3RXcmFwcGVyIiwibGFzdFdyYXBwZXIiLCJmaXJzdFBhcmVudCIsImxhc3RQYXJlbnQiLCJhbmNob3JQcmV2IiwiZm9jdXNQcmV2Iiwid2hpY2hDaGlsZCIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZGF0YSIsImNvbnRhaW5lciIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGVjdE5vZGVzIiwiY29sbGFwc2VUb1N0YXJ0IiwiY3JlYXRlIiwicGFyZW50IiwiY2hpbGQiLCJpbmNsdWRpbmdUZXh0Tm9kZXMiLCJjaGlsZHJlbiIsImMiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInN0YXJ0Iiwic3RhcnRDb250YWluZXIiLCJlbmQiLCJlbmRDb250YWluZXIiLCJzaW5nbGVOb2RlIiwicGFyZW50SXNUTSIsImhhc0F0dHJpYnV0ZSIsImdyYW1wYSIsImdyYW5kZ3JhbXBhIiwiZlROUCIsIm8iLCJuMSIsIm5vZGVOYW1lIiwicDEiLCJuMiIsInAyIiwicDMiLCJwNCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImFuY2hvck5vZGUiLCJmb2N1c05vZGUiLCJzIiwicCIsImFwcGVuZGVkIiwiaGVpZ2h0IiwicG9wdXAiLCJlbCIsImJnQ29sb3JSZWdFeHAiLCJiZ0NvbG9yIiwiY29sb3JCdG4iLCJtIiwibWF0Y2giLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmQiLCJwb3AiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJwb3B1cEhlaWdodCIsIm9uTW91c2Vkb3duIiwic2VsZWN0aW9uUG9zaXRpb24iLCJnZXRSYW5nZUF0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwiZG9uZSIsInVuZG9uZSIsInZpc3VhbGx5T3JkZXJlZE1hcmtzIiwidmlzdWFsbHlPcmRlcmVkTWFya0lEcyIsInJlbW92ZWRCb29rbWFyayIsIm1hcmtTY3JvbGxQb3MiLCJ1cGRhdGVJRCIsImwiLCJpZHMiLCJtYXJrcyIsImNvbmNhdCIsImxvc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJhdXRvbm90ZSIsInVuZG8iLCJub0F1dG9zYXZlIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsInRvQmVSZW1vdmVkIiwiaW5kaWNlcyIsInNtYWxsZXN0SUQiLCJmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyIsImoiLCJ4IiwibWFya3NJbnRlcnNlY3QiLCJpbmNsdWRlcyIsInNvcnQiLCJzaGlmdCIsIm1pbiIsInNwbGljZSIsImdldEJ5SWQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJmb3JFYWNoIiwiYXJnIiwib3B0aW9ucyIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhpZ2hsaWdodCIsImNyZWF0ZVRleHROb2RlIiwidGV4dENvbnRlbnQiLCJzaWxlbnQiLCJpbW11dGFibGUiLCJzYXZlIiwicmVxdWVzdCIsImdyYW50ZWQiLCJzdWIiLCJpMThuIiwiZ2V0TWVzc2FnZSIsInByb21wdCIsInJldHJpZXZlRW50cnkiLCJjb25maXJtZWQiLCJjb25maXJtIiwic3RvcmUiLCJvcmRlciIsIm9yZGVyTWFya3NWaXN1YWxseSIsInJlY3JlYXRlIiwiX1NFTEVDVElPTiIsInByb2dyYW1tYXRpY2FsbHkiLCJvbkZpbmlzaGVkUmVzdG9yYXRpb24iLCJ0cmltIiwic3Vic3RyaW5nIiwiX0dMT0JBTF9TRVRUSU5HUyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiZ290b01hcmsiLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJvbkNhbmNlbGVkUmVzdG9yYXRpb24iLCJhZGROb3RlIiwiZmluZE1hcmsiLCJzYXZlTm90ZSIsIm1hcmtFbGVtZW50cyIsInBvcyIsImluZGljYXRlTWFyayIsImdvdG9OZXh0TWFyayIsImRpciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0bSIsInRtcyIsInNldCIsInJlbW92ZUJvb2ttYXJrIiwibWFyazEiLCJtYXJrMiIsIm0xIiwibTIiLCJiYjEiLCJiYjIiLCJ0b3AxIiwidG9wMiIsIm1hcCIsIndyYXBwZXJzMSIsIncxIiwiaWQxIiwid3JhcHBlcnMyIiwiaWQyIiwidzIiLCJvbk1hcmtlcktleSIsIm9uSG90a2V5IiwiY29sbGVjdE1hcmtzIiwibGFzdCIsIkRhdGUiLCJnZXRUaW1lIiwiYm9va21hcmtlZCIsInRpdGxlIiwiY291bnQiLCJmaXJzdCIsInVybCIsIlVSTCIsImtEIiwib25IYXNoQ2hhbmdlIiwiY29sb3IiLCJCT0RZIiwiRE9NIiwiY2xpY2siLCJrZXl1cCIsIm1vdXNlZG93biIsInRvdWNoc3RhcnQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsIm1hcmtDbGlja0hhbmRsZXIiLCJ2aXNpYmxlIiwicmVjZW50bHlVcGRhdGVkIiwic2V0dGluZ3NNb2RlIiwidCIsInNpemUiLCJoIiwiZHJhZ0RYIiwiZHJhZ0RZIiwibXV0YXRpb25PYnNlcnZlciIsImFkanVzdE5vdGVEYXRhT2JqZWN0IiwiY3JlYXRlTm90ZUVsZW1lbnQiLCJhZGRMaXN0ZW5lcnMiLCJhZGRNYXJrTGlzdGVuZXJzIiwibm90ZURhdGEiLCJoZWFkZXIiLCJkZWwiLCJnZWFyIiwicGFsZXR0ZSIsInRleHRFbGVtZW50IiwiZGVsVGV4dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pblRleHQiLCJnZWFyVGV4dCIsImNsYXNzTmFtZSIsImFwcGVuZCIsInZhbHVlIiwiYXR0ZW1wdFVwZGF0ZSIsIl9kZWxldGUiLCJoaWRlIiwicmVtb3ZlTWFya0xpc3RlbmVycyIsImZvcmNlIiwiaW5uZXJXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRQb3NpdGlvbiIsIm9mZnNldCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIiLCJicmluZ1VwRnJvbnQiLCJ6SW5kZXgiLCJkaXNjb25uZWN0IiwidG9nZ2xlIiwidG9nZ2xlUGFsZXR0ZSIsImNoYW5nZUNvbG9yIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dGFyZWEiLCJjb25maWciLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJzYXZlU2l6ZSIsIm9ic2VydmUiLCJyZWN0IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvbkRyYWdTdGFydCIsInBhZ2VYIiwicGFnZVkiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJtdXRhdGlvbnNMaXN0Iiwid2lkdGgiLCJub3RlcyIsImRyYWdIYW5kbGVyIiwiZHJhZ1N0b3BIYW5kbGVyIiwidXBkYXRlVHJhbnNwIiwiX05PVEUiLCJyZXN0b3JlIiwiYWRkQW5kU2hvdyIsInJlbW92ZU5vdGVTdG9yYWdlIiwiaXNFbXB0eSIsInJlbW92ZU5vdGUiLCJ0b2dnbGVBbGwiLCJjb25kaXRpb24iLCJib2R5Q2xhc3NlcyIsInRyYW5zcCIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJzdGFydERyYWdnaW5nTm90ZSIsImVtaXREcmFnRXZlbnQiLCJzdG9wRHJhZ2dpbmdOb3RlIiwiZG9jIiwic2VuZE5vdGVzU3RhdGUiLCJpbmZvIiwia2V5ZG93biIsInNlbGVjdGlvbmNoYW5nZSIsInJldHJ5QWN0aXZlIiwic2hpZnRTZW5zaXRpdmVLZXlzIiwicmVnaXN0ZXJlZExvYWRIYW5kbGVyIiwia2V5Q29kZU1hcCIsInNldHVwIiwicmVhZHlTdGF0ZSIsImlzSUZyYW1lIiwiaGFzaGxlc3NVUkwiLCJjaGVja1VSTCIsImlzRWRpdGFibGUiLCJ0YWdOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiZGVsZWdhdGUiLCJ0b0xvd2VyQ2FzZSIsImtleUNvZGUiLCJtb2RLZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiYXJyb3dLZXlzIiwibG9ja2VkQWN0aW9ucyIsImZ1bmN0aW9uS2V5cyIsImRlZmF1bHRNYXJrZXJzIiwiaXNDb2xsYXBzZWQiLCJvcmlnS2V5IiwiaXNNYXJrZXJLZXkiLCJpc0N1c3RvbU1hcmtlcktleSIsInNldHRpbmciLCJsb29rdXAiLCJzaG9ydGN1dCIsInMxIiwiczIiLCJzZWxlY3RlZFRleHQiLCJvblVybEZvdW5kIiwiZmlsdGVyRW50cmllcyIsInJlY2VudGx5T3BlbmVkRW50cnkiLCJpc0FycmF5IiwiZmlyc3RFbnRyeSIsImxvY2tlZEVudHJpZXMiLCJsb2NrZWRFbnRyaWVzRXhpc3QiLCJub25Mb2NrZWRFbnRyaWVzIiwiYSIsImIiLCJvblVybENoYW5nZSIsInRhYiIsIm5ld1VybCIsImFjdGl2YXRlUmV0cnkiLCJkZWFjdGl2YXRlUmV0cnkiLCJzZW5kUGFnZVN0YXRlIiwic3RlcHMiLCJ0b3RhbFdpZHRoIiwiY3VycmVudFdpZHRoIiwic3RlcExlbmd0aCIsImNhbmNlbEhhbmRsZXIiLCJtb2RhbCIsInR5cGUiLCJsZW4iLCJ0bXByb2dyZXNzIiwiY2FuY2VsIiwiY2xvc2VIYW5kbGVyIiwic3RvcCIsInRtcHJvZ3Jlc3NjYW5jZWwiLCJ0bXByb2dyZXNzY2xvc2UiLCJwcm9ncmVzcyIsIlJlc3RvcmVyQmFzZSIsImZhaWx1cmVSZXBvcnQiLCJyZXN0b3JlZCIsImFyZWEiLCJjYW5jZWxlZCIsInByb2MiLCJjYiIsInJlYyIsImV4cGlyZSIsImxsIiwidGVtcCIsIlJlc3RvcmVyIiwicXVldWUiLCJjYWNoZSIsInBoYXNlIiwic2VsZWN0aW9uVHJpYWwiLCJjaHVua0R1cmF0aW9uIiwiX3RpbWVyIiwib29tIiwiaW5pdCIsIm5vdyIsInBvc3Rwb25lZCIsImNvbnZlcnREZXNjcmlwdGlvbiIsImNyZWF0ZVRlbXBPYmplY3QiLCJjb252ZXJ0ZWRDb25kcyIsImZpcnN0Tm9kZU5hbWUiLCJmaXJzdFBhcmVudE5vZGVOYW1lIiwiZmlyc3RUZXh0Tm9kZVBvc2l0aW9uIiwiZmlyc3ROb2RlUG9zaXRpb24iLCJmaXJzdFBhcmVudE5vZGVQb3NpdGlvbiIsImZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uIiwidHJpbW1lZFRleHQiLCJzcXVlZXplZFRleHQiLCJzcXVlZXplIiwidGV4dExlbmd0aCIsInRyaW1tZWRUZXh0TGVuZ3RoIiwic3F1ZWV6ZWRUZXh0TGVuZ3RoIiwicG9zc2libGVQb3NpdGlvbnMiLCJwb3NzaWJsZUVuZFBvc2l0aW9ucyIsInBvc3NpYmxlU3RhcnROb2RlcyIsInBvc3NpYmxlRW5kcyIsInBvc3NpYmxlRm9jdXNPZmZzZXRzIiwic29ydFF1ZXVlQnlJZCIsInNldEJvZHlTZWxlY3Rpb24iLCJnZXRUZXh0UG9zaXRpb25zIiwicG9zdHBvbmVPdmVybGFwcGluZ3MiLCJmaW5kUG9zc2libGVFeHRyZW1hIiwicnVsZU91dE11bHRpcGxlcyIsInJlc3RvcmVSYW5nZXMiLCJ0aW1lciIsInJlcG9ydCIsInJlcyIsInRyaW1tZWRTZWxlY3Rpb25UZXh0IiwiYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyIsImVuZFBvc2l0aW9ucyIsIm1hcmtUZW1wIiwicmVhc29uIiwic29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMiLCJtYXhQb3NpdGlvbiIsInBvc2l0aW9ucyIsInBvczEiLCJwb3MyIiwicG9zdHBvbmUiLCJjdXRPdXRGb3IiLCJhbHJlYWR5SW5jbHVkZWQiLCJib2R5VGV4dE5vZGVzIiwic2F0aXNmaWVkIiwiY2hhcnMiLCJuZXh0U3RhcnRGb3VuZCIsImVuZGluZ3NJblRoaXNOb2RlIiwibm9kZXNUZXh0Iiwibm9kZXNUZXh0TGVuZ3RoIiwiZGlmZiIsImYiLCJxIiwicG9zc2libGVGb2N1c09mZnNldCIsInN0YXJ0Rm91bmRGb3IiLCJoYXNFbmRpbmdzSW5UaGlzTm9kZSIsImVuZEZvdW5kRm9yIiwic2F0aXNmaWVzRGVzY3JpcHRpb24iLCJmaW5kRm9jdXNPZmZzZXQiLCJncmFuZGdyYW5kZ3JhbXBhIiwibWF0Y2hlcyIsImZhaWxlZCIsInN0YXJ0Tm9kZSIsInN0YXJ0Tm9kZVBvc2l0aW9uIiwic2V0TWF0Y2hpbmdFbmQiLCJlbmROb2RlIiwiZW5kTm9kZVBvc2l0aW9uIiwiZm9jdXNPZmZzZXQiLCJkZXNjcmlwdGlvbiIsInJlbGV2YW50Tm9kZVRleHQiLCJtYXJrVGV4dCIsInRleHRzTWF0Y2giLCJub2RlVGV4dCIsImNvdW50ZXIiLCJ0ZXN0IiwiY3JlYXRlUmFuZ2UiLCJyZWNvbGxlY3ROb2RlcyIsInNsaWNlIiwiY29udGV4dCIsImN1cnJlbnRDaGlsZCIsIkltbXV0UmVzdG9yZXIiLCJwcm9jZXNzSW5DaHVua3MiLCJyZXN0b3JlUmFuZ2UiLCJnZXROb2RlIiwidGV4dE5vZGVQb3NpdGlvbiIsInJldHJ5Iiwib25GYWlsdXJlIiwiZ2V0UmVwb3J0IiwibXNnIiwicmFuZ2VDb3VudCIsImRlZmluZWQiLCJyZWR1Y2VUb09uZVJhbmdlIiwicmV0cmlldmVUZXh0IiwiYWRqdXN0Iiwic2VsZWN0QWxsQ2hpbGRyZW4iLCJwcm9wcyIsImlzU2ltcGxlIiwiZm9jdXMiLCJpc0JhY2t3YXJkcyIsInJldmVyc2UiLCJmaXJzdFRleHROb2RlIiwibGFzdFRleHROb2RlIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJ3aG9sZURvY3VtZW50IiwiZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJmaWx0ZXIiLCJpc1NlbGVjdGFibGUiLCJpc0JsYW5rIiwiaGFzTm9ybWFsUGFyZW50IiwiY29udGFpbnNOb2RlIiwiaXRlcmF0b3IiLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiYWNjZXB0Tm9kZSIsInRlbXBSYW5nZSIsInBhcmVudE5vZGVzIiwidGV4dE5vZGUiLCJmaXJzdE5vZGUiLCJsYXN0Tm9kZSIsIm5leHROb2RlIiwidHJpbVNlbGVjdGlvbiIsInJlZHVjZVRvU2VsZWN0YWJsZSIsImNvbGxlY3RQYXJlbnROb2RlcyIsIm1hcmtXcmFwcGVycyIsIm5ld1NlZ21lbnQiLCJwcmV2IiwibmV4dCIsIm5leHRTaWJsaW5nIiwidW5zaGlmdCIsImFuY2hvck9mZnNldCIsInN1YnN0ciIsInNlbCIsInJnIiwic2VsZWN0Tm9kZSIsInBhcmVudHMiLCJub2RlVGV4dHMiLCJqb2luIiwibm9kZTEiLCJub2RlMiIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwicmFuZ2UwIiwibGFzdFJhbmdlIiwidGFnIiwidG9VcHBlckNhc2UiLCJpc0NoaWxkT2YiLCJzZWFyY2giLCJhdHRhY2hlZCIsImJ1dHRvbnMiLCJzaG93biIsImNyZWF0ZUJ1dHRvbnMiLCJ1cGRhdGVTdGF0ZSIsInNob3VsZEF0dGFjaCIsInJlbmRlciIsImJ0biIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInVwZGF0ZVBvc2l0aW9uIiwidG11aSIsIm5vdGVzQnV0dG9uIiwiYm9va21hcmtCdXR0b24iLCJ0b2dnbGVOb3RlcyIsIm9uTm90ZUFkZGVkIiwib25MYXN0Tm90ZVJlbW92ZWQiLCJvbkJvb2ttYXJrQWRkZWQiLCJvbkJvb2ttYXJrUmVtb3ZlZCIsIl9QT1JUIiwiT05FT0ZGIiwiTUFYX0xPR19FTlRSSUVTIiwiTk9URV9DT0xPUlMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIl9DT1BZIiwic3JjIiwidmFsIiwicHJvcCIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImRvbUV2ZW50cyIsImdlbmVyYWxIYW5kbGVyIiwiX2V4dHJhIiwiX0VSUk9SVFJBQ0tFUiIsImZpbGUiLCJlcnJvciIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwib2JqMSIsIm9iajIiLCJfR0VUX0FDVElWRV9UQUIiLCJ0YWJzIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiX0hBU0hMRVNTIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwibDEwbkF0dHIiLCJhdHRyIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwidG9waWNzIiwiYXJncyIsInRvcGljIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY2F0Y2giLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibGFzdEFyZyIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0Iiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0wsYUFBS0Esc0JBQUwsQ0FBNEIsS0FBSzNuQixLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLMG5CLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTWIsT0FBTyxLQUFLQSxJQUFMLEdBQVksS0FBS0EsSUFBTCxJQUFhcnZCLFFBQVEydUIsT0FBUixDQUFnQnVCLE9BQWhCLENBQXdCO0FBQUV6eEIsY0FBTSxLQUFLQTtBQUFiLE9BQXhCLENBQXRDO0FBQ0E0d0IsV0FBS2UsWUFBTCxDQUFrQnBxQixXQUFsQixDQUE4QjtBQUFBLGVBQU0sT0FBS3FwQixJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCNVAsRSxFQUFJO0FBQUE7O0FBQ3pCemYsY0FBUTJ1QixPQUFSLENBQWdCMEIsU0FBaEIsQ0FBMEJycUIsV0FBMUIsQ0FBc0MsZ0JBQVE7QUFDNUNxcEIsYUFBS0MsU0FBTCxDQUFldHBCLFdBQWYsQ0FBMkIsT0FBS3dDLEtBQUwsQ0FBVyxNQUFYLEVBQWlCLE9BQUsrbUIsV0FBdEIsQ0FBM0I7QUFDQSxTQUFDOVAsRUFBRCxJQUFPQSxJQUFQO0FBQ0QsT0FIRDtBQUlEOzs7O0VBbEZ3QnpoQixlIiwiZmlsZSI6ImNvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2luamVjdGlvbi53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9wYWdlLWluamVjdGlvbnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ3NldEFyZWFzJyxcclxuICAgICAgJ3VwZGF0ZWQ6bmFtaW5nLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXR1cycsXHJcbiAgICAgICd1cGRhdGVkOmhhc2hvcHQtc2V0dGluZ3MnOiAndXBkYXRlU3RhdHVzJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktc3luYyc6ICdzZXRTeW5jRm9yRW50cnknLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1uYW1lJzogJ3JlbmFtZUVudHJ5JyxcclxuICAgICAgJ2RlbGV0ZWQ6ZW50cnknOiAncmVtb3ZlRW50cnknLFxyXG4gICAgICAnaGFzaGNoYW5nZSc6ICdyZXN1bWUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9lbnRyeTogJ3N5bmMnLFxyXG5cclxuICBpZnJhbWU6IGZhbHNlLFxyXG4gIG5hbWU6IHVuZGVmaW5lZCxcclxuICBpc05ldzogdHJ1ZSxcclxuICAvL2VudHJ5OiBudWxsLFxyXG4gIGVudHJpZXM6IHt9LFxyXG4gIGxvY2tlZDogZmFsc2UsXHJcbiAgaGFzaFNlbnNpdGl2ZTogZmFsc2UsXHJcbiAgdG1pZDogJycsXHJcbiAgbm90ZUNvbG9yOiAneWVsbG93JyxcclxuICBpbW11dDogZmFsc2UsXHJcbiAgcmVkZXNjcmliaW5nOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xyXG4gIH0sXHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZW50cmllcyA9IHt9O1xyXG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy50bWlkID0gJyc7XHJcbiAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVTdGF0dXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNOZXcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG0taWRdJykpIHJldHVybjsvL3Nob3cgbm90aWZpY2F0aW9uXHJcblxyXG4gICAgdGhpcy5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzID8gc2V0dGluZ3MuaGlzdG9yeSA6IG51bGw7XHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcgPT09ICdtYXJrJztcclxuICAgICAgICB0aGlzLmhhc2hTZW5zaXRpdmUgPSBoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaCA9PT0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNldEFyZWFzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IHN0b3JhZ2Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzdG9yYWdlLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlbmFtZUVudHJ5KGVudHJ5LCBvbGROYW1lKSB7XHJcbiAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMubmFtZSA9PT0gb2xkTmFtZSAmJiAhdGhpcy5sb2NrZWQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gZW50cnkubmFtZTtcclxuICAgICAgaWYgKHRoaXMuZW50cmllc1tvbGROYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbb2xkTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXRTeW5jRm9yRW50cnkoZW50cnkpIHtcclxuICAgIGlmICghdGhpcy5sb2NrZWQgJiYgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZW50cmllc1tlbnRyeS5uYW1lXS5zeW5jZWQgPSBlbnRyeS5zeW5jZWQ7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlRW50cnkoZGVsZXRlZEVudHJ5KSB7XHJcbiAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgIGlmIChlbnRyaWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIG5hbWUgPT09IGRlbGV0ZWRFbnRyeSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIGFkZEVudHJpZXMoZW50cmllcykge1xyXG4gICAgaWYgKCF0aGlzLmxvY2tlZCkgdGhpcy5uYW1lID0gZW50cmllc1swXS5uYW1lO1xyXG4gICAgY29uc3QgZSA9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgZTsgaSsrKSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpXTtcclxuICAgICAgdGhpcy5lbnRyaWVzW2VudHJ5Lm5hbWVdID0gZW50cnk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTmV3ID0gZmFsc2U7XHJcbiAgICB0aGlzLmltbXV0ID0gISFlbnRyaWVzWzBdLmltbXV0O1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldEFyZWFzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfYm1pY29uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2MuYm1pY29uO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X25vdGVpY29uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1pc2Mubm90ZWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZW9uY2xpY2soKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3Rlb25jbGljaztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3RldHJhbnNwKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGV0cmFuc3A7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfdG11aXBvcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLnRtdWlwb3M7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfaW1tdXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuaW1tdXQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfcHJvZ3Jlc3NiYXIoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5wcm9ncmVzc2JhcjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbmFtaW5nKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICdjdXN0b20nO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5Lm5hbWluZztcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcblxyXG5pbXBvcnQgX1BBR0UgZnJvbSAnLi9tb2R1bGVzL3BhZ2UnXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0IF9NQVJLRVIgZnJvbSAnLi9tb2R1bGVzL21hcmtlcidcclxuaW1wb3J0IF9QUk9HUkVTUyBmcm9tICcuL21vZHVsZXMvcHJvZ3Jlc3MnXHJcbmltcG9ydCBfUkVTVE9SRVIgZnJvbSAnLi9tb2R1bGVzL3Jlc3RvcmVyJ1xyXG5pbXBvcnQgX05PVEVTIGZyb20gJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0IF9UTVVJIGZyb20gJy4vbW9kdWxlcy90bXVpJ1xyXG5pbXBvcnQgX01BUktFUlBPUFVQIGZyb20gJy4vbW9kdWxlcy9tYXJrZXItcG9wdXAnXHJcbmltcG9ydCBfQVVUT01BUktFUiBmcm9tICcuL21vZHVsZXMvYXV0by1tYXJrZXInXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ2F1dG9pbml0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2UuaGlzdG9yeSAmJiBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucG93ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcG93ZXIob24pIHtcclxuICAgIGlmICghb24gfHwgdGhpcy5ib290c3RyYXBwZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBfUEFHRSgpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1BST0dSRVNTKCk7XHJcbiAgICBfUkVTVE9SRVIoKTtcclxuICAgIF9NQVJLRVIoKTtcclxuICAgIF9OT1RFUygpO1xyXG4gICAgX1RNVUkoKTtcclxuICAgIF9NQVJLRVJQT1BVUCgpO1xyXG4gICAgX0FVVE9NQVJLRVIoKTtcclxuXHJcbiAgICB0aGlzLmJvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9fc3RvcmUnXHJcbmltcG9ydCAnLi9ib290c3RyYXAnXHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptYXJrLW1ldGhvZC1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICdvblNlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJzogJ3NldE1hcmtlcidcclxuICAgICAgfVxyXG5cdFx0fSxcclxuXHJcbiAgICBoYW5kbGVyOiBudWxsLFxyXG4gICAgbWFya2VyOiAnbScsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRNYXJrZXIoa2V5KSB7XHJcbiAgICAgIHRoaXMubWFya2VyID0ga2V5O1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZCAmJiAhdGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkICYmIHRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlciA9IHRoaXMub25Nb3VzZXVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdG9wTGlzdGVuaW5nKCkge1xyXG4gICAgICBpZiAodGhpcy5saXN0ZW5pbmcpIHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTW91c2V1cCgpIHtcclxuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1lbmQnLCB0aGlzLm1hcmtlcik7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9CT09LTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXJrID0gbnVsbDtcclxuICAgIHRoaXMuYW5jaG9yID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldChtYXJrKSB7XHJcbiAgICBtYXJrID0gbWFyayB8fCB0aGlzLm1hcms7XHJcblxyXG4gICAgbGV0IHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG4gICAgICAgIGFuY2hvciA9IHdyYXBwZXJzWzBdO1xyXG5cclxuICAgIG1hcmsua2V5RGF0YS5ib29rbWFyayA9IHRydWU7XHJcbiAgICBhbmNob3IuaWQgPSAndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InO1xyXG5cclxuICAgIHdoaWxlICh3LS0pXHJcbiAgICAgIHdyYXBwZXJzW3ddLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItYm9va21hcmsnKTtcclxuXHJcbiAgICB0aGlzLm1hcmsgPSBtYXJrO1xyXG4gICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGxldCBtYXJrID0gdGhpcy5tYXJrLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yLFxyXG4gICAgICAgIHdyYXBwZXJzID0gbWFyay53cmFwcGVycyxcclxuICAgICAgICB3ID0gd3JhcHBlcnMubGVuZ3RoO1xyXG5cclxuICAgIGFuY2hvci5pZCA9ICcnO1xyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG4gIH1cclxuICBzY3JvbGxJbnRvVmlldyhibSkge1xyXG4gICAgaWYgKGJtIHx8IChibSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSkpXHJcbiAgICAgIGJtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWN0aXZhdGUob24pIHtcclxuICAgICAgaWYgKG9uICYmICF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlZ2lzdGVySGFuZGxlcigpIHtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKSB7XHJcbiAgICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIF9TVE9SRS50bWlkID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB3aW5kb3cuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcmtlciwga2V5LCBwcmVTZXR0aW5ncywgaW1tdXQpIHtcclxuICAgIGxldCBzZWxlY3Rpb24sIGRlZmF1bHRzO1xyXG5cclxuXHRcdHRoaXMubWFya2VyID0gbWFya2VyO1xyXG5cdFx0c2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24gPSBtYXJrZXIuc2VsZWN0aW9uO1xyXG4gICAgdGhpcy5pbW11dCA9IF9TVE9SRS5yZWRlc2NyaWJpbmcgPyBtYXJrZXIuaXNJbW11dCA6IGltbXV0O1xyXG5cclxuICAgIGRlZmF1bHRzID0ge1xyXG4gICAgICBzdHlsZTogJycsXHJcbiAgICAgIGJvb2ttYXJrOiBmYWxzZSxcclxuICAgICAgY29uZHM6IG51bGwsXHJcbiAgICAgIHRleHQ6IHNlbGVjdGlvbi50ZXh0LFxyXG4gICAgICBub3RlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZCBpbiBkZWZhdWx0cykge1xyXG4gICAgICBpZiAoIXByZVNldHRpbmdzLmhhc093blByb3BlcnR5KGQpKSB7XHJcbiAgICAgICAgcHJlU2V0dGluZ3NbZF0gPSBkZWZhdWx0c1tkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlU2V0dGluZ3MuaWQgPSBwcmVTZXR0aW5ncy5pZCB8fCArK21hcmtlci5pZGNvdW50O1xyXG5cdFx0dGhpcy5pZCA9IHByZVNldHRpbmdzLmlkO1xyXG5cdFx0dGhpcy5zaW1wbGUgPSBzZWxlY3Rpb24uc2ltcGxlO1xyXG5cclxuXHRcdGxldCByYW5nZSA9IHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24ucmFuZ2U7XHJcblxyXG5cdFx0dGhpcy5zdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0O1xyXG5cdFx0dGhpcy5lbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXQ7XHJcblxyXG5cdFx0dGhpcy53cmFwcGVycyA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcclxuXHJcblx0XHR0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IG51bGw7XHJcblx0XHR0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmtleURhdGEgPSB7XHJcblx0XHRcdGlkOiBwcmVTZXR0aW5ncy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdHN0eWxlOiBwcmVTZXR0aW5ncy5zdHlsZSxcclxuXHRcdFx0Y29uZHM6IHByZVNldHRpbmdzLmNvbmRzLFxyXG5cdFx0XHR0ZXh0OiBwcmVTZXR0aW5ncy50ZXh0LFxyXG5cdFx0XHRib29rbWFyazogcHJlU2V0dGluZ3MuYm9va21hcmssXHJcbiAgICAgIG5vdGU6IHByZVNldHRpbmdzLm5vdGUsXHJcbiAgICAgIHN5bmNlZDogcHJlU2V0dGluZ3Muc3luY2VkXHJcblx0XHR9O1xyXG5cclxuICAgIGlmICh0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB7XHJcbiAgICAgIHRoaXMuZGVzY3JpYmVfaW1tdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cdGNyZWF0ZShyYW5nZSkge1xyXG4gICAgcmFuZ2UgPSByYW5nZSB8fCB0aGlzLnJhbmdlO1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgIHN0eWxlID0gdGhpcy5rZXlEYXRhLnN0eWxlLFxyXG4gICAgICAgIG5vZGVzID0gc2VsZWN0aW9uLm5vZGVzLFxyXG4gICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzID0gdGhpcy53cmFwcGVycyB8fCB0aGlzLmNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBuKSxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBsYXN0SW5kZXggPSBuIC0gMSxcclxuICAgICAgICBub2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgICBpZiAoIWkpIHJhbmdlLnNldFN0YXJ0KG5vZGUsIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG5cclxuICAgICAgaWYgKGkgPT09IGxhc3RJbmRleClcclxuICAgICAgICByYW5nZS5zZXRFbmQobm9kZSwgdGhpcy5lbmRPZmZzZXQpO1xyXG5cclxuICAgICAgcmFuZ2Uuc3Vycm91bmRDb250ZW50cyh3cmFwcGVyc1tpXSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKHdyYXBwZXJzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgICAgbm9kZS5wYXJlbnROb2RlLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVmaW5lUG9zaXRpb24obGFzdEluZGV4KTtcclxuXHJcbiAgICBpZiAodGhpcy5rZXlEYXRhLmJvb2ttYXJrKSB0aGlzLm1hcmtlci5zZXRCb29rbWFyayh0aGlzLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmltbXV0ICYmIChfU1RPUkUucmVkZXNjcmliaW5nIHx8ICF0aGlzLmtleURhdGEuY29uZHMpKSB0aGlzLmRlc2NyaWJlKCk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlckNsaWNrTGlzdGVuZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG4gIHJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1hcmtlci5wcm94eSh0aGlzLCB0aGlzLm9uQ2xpY2spLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uQ2xpY2soZSkge1xyXG4gICAgbGV0IGV2ZW50O1xyXG4gICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgIGV2ZW50ID0gJ2NsaWNrZWQ6bWFyayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfU1RPUkUudG1pZCA9IGUgKyAnXzAnO1xyXG4gICAgICBldmVudCA9ICdhY3RpdmF0ZWQ6bWFyayc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hcmtlci5lbWl0KGV2ZW50LCB7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBib29rbWFyazogISF0aGlzLmtleURhdGEuYm9va21hcmssXHJcbiAgICAgIG5vdGU6ICEhdGhpcy5rZXlEYXRhLm5vdGVcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWZpbmVQb3NpdGlvbihuLCBpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICBsZXQgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgbiA9IHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gOiB3cmFwcGVycy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgZmlyc3RXcmFwcGVyID0gd3JhcHBlcnNbMF07XHJcbiAgICBjb25zdCBsYXN0V3JhcHBlciA9IHdyYXBwZXJzW25dO1xyXG4gICAgY29uc3QgZmlyc3RQYXJlbnQgPSBmaXJzdFdyYXBwZXIucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGxhc3RQYXJlbnQgPSBsYXN0V3JhcHBlci5wYXJlbnROb2RlO1xyXG4gICAgbGV0IGFuY2hvclByZXYsIGZvY3VzUHJldjtcclxuXHJcbiAgICB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChmaXJzdFBhcmVudCwgZmlyc3RXcmFwcGVyLCB0cnVlKSAtIDE7XHJcbiAgICB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gdGhpcy53aGljaENoaWxkKGxhc3RQYXJlbnQsIGxhc3RXcmFwcGVyLCB0cnVlKTtcclxuXHJcbiAgICBhbmNob3JQcmV2ID0gZmlyc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuICAgIGZvY3VzUHJldiA9IGxhc3RXcmFwcGVyLnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICBpZiAoYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2Lm5vZGVUeXBlID09PSAxKSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiArPSAxO1xyXG4gICAgaWYgKCFmb2N1c1ByZXYgfHwgZm9jdXNQcmV2Lm5vZGVUeXBlID09PSAzIHx8IGZpcnN0UGFyZW50ID09PSBsYXN0UGFyZW50KSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIC09IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSAwO1xyXG4gICAgaWYgKHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gMDtcclxuXHJcbiAgICBpZiAoaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gYW5jaG9yUHJldiAmJiBhbmNob3JQcmV2LmRhdGEgPyBhbmNob3JQcmV2LmRhdGEubGVuZ3RoIDogMDtcclxuICAgICAgdGhpcy5lbmRPZmZzZXQgPSB0aGlzLnNpbXBsZSA/IHRoaXMuc3RhcnRPZmZzZXQgKyB0aGlzLmtleURhdGEudGV4dC5sZW5ndGggOiB0aGlzLmVuZE9mZnNldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKHVuZGVmaW5lZCwgdHJ1ZSlcclxuICAgICAgICAuZGVzY3JpYmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblx0dW5kbygpIHtcclxuXHRcdGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG5cdFx0XHRcdHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyxcclxuXHRcdFx0XHR3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG5cdFx0XHRcdGNvbnRhaW5lciwgd3JhcHBlcjtcclxuXHJcblx0XHR3aGlsZSAody0tKSB7XHJcblx0XHRcdGNvbnRhaW5lciA9IGNvbnRhaW5lcnNbd107XHJcblx0XHRcdHdyYXBwZXIgPSB3cmFwcGVyc1t3XTtcclxuXHRcdFx0Y29udGFpbmVyLnJlcGxhY2VDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xyXG5cdFx0XHRjb250YWluZXIubm9ybWFsaXplKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cmVkbygpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGNvbnRhaW5lcnNbMF0uY2hpbGROb2Rlc1t0aGlzLmFuY2hvck5vZGVQb3NpdGlvbl0sIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGNvbnRhaW5lcnNbY29udGFpbmVycy5sZW5ndGggLSAxXS5jaGlsZE5vZGVzW3RoaXMuZm9jdXNOb2RlUG9zaXRpb25dLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbi5jb2xsZWN0Tm9kZXMoKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoKTtcclxuXHR9XHJcblx0d2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBpbmNsdWRpbmdUZXh0Tm9kZXMpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdFx0bGV0IGNoaWxkcmVuID0gaW5jbHVkaW5nVGV4dE5vZGVzIHx8IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHRcdFx0YyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdFx0XHRpID0gMDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspIHtcclxuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG5cdGNyZWF0ZVdyYXBwZXJzKHN0eWxlLCBudW1iZXIpIHtcclxuXHRcdGxldCB3cmFwcGVycyA9IFtdLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHdyYXBwZXI7XHJcblxyXG5cdFx0Zm9yICggOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuXHRcdFx0d3JhcHBlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1oaWdobGlnaHQnKTtcclxuXHRcdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUucmVwbGFjZSgvOy9nLCAnIWltcG9ydGFudDsnKSk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJywgdGhpcy5pZCArICdfJyArIGkpO1xyXG4gICAgICAvL3dyYXBwZXIuc2V0QXR0cmlidXRlKCdjb250ZXh0bWVudScsICd0ZXh0bWFya2VyLWN0bScpO1xyXG5cdFx0XHR3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdyYXBwZXJzO1xyXG5cdH1cclxuICBkZXNjcmliZSgpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xyXG5cdFx0Y29uc3Qgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lcjtcclxuXHRcdGNvbnN0IHNpbmdsZU5vZGUgPSB0aGlzLnNpbXBsZTtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMud3JhcHBlcnNbMF0ucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHBhcmVudElzVE0gPSBwYXJlbnQuaGFzQXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcblx0XHRjb25zdCBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGdyYW5kZ3JhbXBhID0gZ3JhbXBhLnBhcmVudE5vZGUgfHwgMDtcclxuXHRcdGNvbnN0IGZUTlAgPSB0aGlzLmFuY2hvck5vZGVQb3NpdGlvbjtcclxuXHJcblx0XHR0aGlzLmtleURhdGEuY29uZHMgPSB7XHJcblx0XHRcdG86IHRoaXMuc3RhcnRPZmZzZXQsXHJcblx0XHRcdG4xOiBwYXJlbnRJc1RNID8gJ1RNJyA6IHBhcmVudC5ub2RlTmFtZSxcclxuXHRcdFx0cDE6IGZUTlAsXHJcblx0XHRcdG4yOiBncmFtcGEubm9kZU5hbWUsXHJcblx0XHRcdHAyOiB0aGlzLndoaWNoQ2hpbGQoZ3JhbXBhLCBwYXJlbnQpLFxyXG5cdFx0XHRwMzogZ3JhbmRncmFtcGEgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEsIGdyYW1wYSkgOiB1bmRlZmluZWQsXHJcblx0XHRcdHA0OiBncmFuZGdyYW1wYSAmJiBncmFuZGdyYW1wYS5wYXJlbnROb2RlID8gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUsIGdyYW5kZ3JhbXBhKSA6IHVuZGVmaW5lZFxyXG5cdFx0fTtcclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcblx0fVxyXG4gIGRlc2NyaWJlX2ltbXV0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb247XHJcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gW107XHJcbiAgICBjb25zdCBlbmRQb3NpdGlvbiA9IFtdO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgbGV0IHN0YXJ0ID0gc2VsZWN0aW9uLmFuY2hvck5vZGUsXHJcbiAgICAgICAgZW5kID0gc2VsZWN0aW9uLmZvY3VzTm9kZTtcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQgIT09IGJvZHkpIHtcclxuICAgICAgc3RhcnRQb3NpdGlvbi5wdXNoKHRoaXMud2hpY2hDaGlsZChzdGFydC5wYXJlbnROb2RlLCBzdGFydCkpO1xyXG4gICAgICBzdGFydCA9IHN0YXJ0LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoZW5kICE9PSBib2R5KSB7XHJcbiAgICAgIGVuZFBvc2l0aW9uLnB1c2godGhpcy53aGljaENoaWxkKGVuZC5wYXJlbnROb2RlLCBlbmQpKTtcclxuICAgICAgZW5kID0gZW5kLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgbzogdGhpcy5zdGFydE9mZnNldCxcclxuICAgICAgICBwOiBzdGFydFBvc2l0aW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIGU6IHtcclxuICAgICAgICBvOiB0aGlzLmVuZE9mZnNldCxcclxuICAgICAgICBwOiBlbmRQb3NpdGlvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5rZXlEYXRhLmNvbmRzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWFyay1tZXRob2Qtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAnb25TZWxlY3Rpb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuXHRcdH0sXHJcblxyXG4gICAgaGFuZGxlcjogbnVsbCxcclxuICAgIGFwcGVuZGVkOiBmYWxzZSxcclxuICAgIGhlaWdodDogMCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKS50aGVuKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAncG9wdXAnO1xyXG4gICAgICAgIHRoaXMubWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXAnKTtcclxuICAgICAgY29uc3QgYmdDb2xvclJlZ0V4cCA9IC9iYWNrZ3JvdW5kLWNvbG9yOigjW2EtZjAtOV17Nn0pLztcclxuICAgICAgbGV0IGJnQ29sb3IsIGNvbG9yQnRuO1xyXG4gICAgICBmb3IgKGxldCBtIGluIHRoaXMubWFya2Vycykge1xyXG4gICAgICAgIGJnQ29sb3IgPSB0aGlzLm1hcmtlcnNbbV0uc3R5bGUubWF0Y2goYmdDb2xvclJlZ0V4cCk7XHJcbiAgICAgICAgaWYgKGJnQ29sb3IpIHtcclxuICAgICAgICAgIGNvbG9yQnRuID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcG9wdXBjb2xvcicpO1xyXG4gICAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JCdG4pO1xyXG4gICAgICAgICAgY29sb3JCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3IucG9wKCk7XHJcbiAgICAgICAgICBjb2xvckJ0bi5pZCA9ICd0bXBvcHVwY29sb3ItLScgKyBtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBwb3B1cC5zdHlsZTtcclxuICAgICAgbGV0IHBvcHVwSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmFwcGVuZGVkKSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXIgPSB0aGlzLm9uTW91c2Vkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBzdHlsZS50b3AgPSBzZWxlY3Rpb25Qb3NpdGlvbi50b3AgLSBzZWxlY3Rpb25Qb3NpdGlvbi5oZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSArICdweCc7XHJcbiAgICAgICAgc3R5bGUubGVmdCA9IHNlbGVjdGlvblBvc2l0aW9uLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCArICdweCc7XHJcblxyXG4gICAgICAgIHBvcHVwSGVpZ2h0ID0gcG9wdXAub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICBzdHlsZS50b3AgPSBwYXJzZUludChzdHlsZS50b3ApIC0gcG9wdXBIZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChwb3B1cEhlaWdodCA9IHBvcHVwLm9mZnNldEhlaWdodCkgIT09IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgc3R5bGUudG9wID0gcGFyc2VJbnQoc3R5bGUudG9wKSArIHBvcHVwSGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gcG9wdXBIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWQpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZCkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuYXBwZW5kZWQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Nb3VzZWRvd24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ1RNUE9QVVBDT0xPUicpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJywgZWwuaWQuc3BsaXQoJy0tJykucG9wKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX0dMT0JBTF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUksgZnJvbSAnLi9tYXJrLWl0ZW0nXHJcbmltcG9ydCBfQk9PS01BUksgZnJvbSAnLi9ib29rbWFyaydcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAvLyBtYXJrZXIgbW9kdWxlXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG5cdFx0XHRFTlY6IHtcclxuXHRcdFx0XHQnc2V0OmVudHJpZXMnOiAndXBkYXRlSUQnLFxyXG5cdFx0XHRcdCdwcmVzc2VkOm1hcmtlci1rZXknOiAnb25NYXJrZXJLZXknLFxyXG4gICAgICAgICdwcmVzc2VkOmhvdGtleSc6ICdvbkhvdGtleScsXHJcbiAgICAgICAgJ2NsaWNrZWQ6cG9wdXAtbWFya2VyJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnc2VsZWN0aW9uLWVuZCc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3Jlc3RvcmVkOnJhbmdlJzogJ3JlY3JlYXRlJyxcclxuICAgICAgICAnZmluaXNoZWQ6YWxsLXJlc3RvcmF0aW9ucyc6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdjYW5jZWxlZDpyZXN0b3JhdGlvbic6ICdvbkNhbmNlbGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICAgJ2N0eDotYic6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICAgJ2N0eDpkJzogJ3JlbW92ZScsXHJcbiAgICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnY3R4Om4nOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J2NoYW5nZWQ6bm90ZS1jb2xvcic6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J2NoYW5nZWQ6bm90ZS1wb3MnOiAnc2F2ZU5vdGUnLFxyXG4gICAgICAgICdjaGFuZ2VkOm5vdGUtc2l6ZSc6ICdzYXZlTm90ZScsXHJcblx0XHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JzogJ3JlbW92ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6Ym9va21hcmsnOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICAgJ3NpZGViYXI6bm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgICAnc2lkZWJhcjppbW11dCc6ICdpbW11dCcsXHJcbiAgICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJzogJ3NhdmUnLFxyXG4gICAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJzogJ3Jlc3VtZScsXHJcbiAgICAgICAgJ3NpZGViYXI6dW5kbyc6ICd1bmRvJyxcclxuICAgICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAgICdzaWRlYmFyOm5leHQtbWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnLFxyXG4gICAgICAgICdzY3JvbGwtdG8tYm9va21hcmsnOiAnc2Nyb2xsVG9Cb29rbWFyaycsXHJcbiAgICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdnb3RvTWFyaycsXHJcbiAgICAgICAgJ2hhc2hjaGFuZ2UnOiAnb25IYXNoQ2hhbmdlJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0aW9uOiBudWxsLFxyXG5cdFx0ZG9uZTogW10sXHJcblx0XHR1bmRvbmU6IFtdLFxyXG5cdFx0dmlzdWFsbHlPcmRlcmVkTWFya3M6IFtdLFxyXG5cdFx0dmlzdWFsbHlPcmRlcmVkTWFya0lEczogW10sXHJcbiAgICBib29rbWFyazogbnVsbCxcclxuICAgIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRcdGlkY291bnQ6IDAsXHJcblx0XHRtYXJrU2Nyb2xsUG9zOiAtMSxcclxuXHJcbiAgICB1cGRhdGVJRChlbnRyaWVzKSB7XHJcbiAgICAgIGNvbnN0IGwgPSBlbnRyaWVzLmxlbmd0aDtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgICAgY29uc3QgaWRzID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMCwgZW50cnk7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG5cclxuICAgICAgICBpZiAoIWxvY2tlZCAmJiBlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG1hcmtzID0gKGVudHJ5Lm1hcmtzIHx8IFtdKS5jb25jYXQoZW50cnkubG9zdCB8fCBbXSksXHJcbiAgICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoZCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoZC0tKSB7XHJcbiAgICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaWRjb3VudCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGlkcyk7XHJcbiAgICB9LFxyXG5cdFx0bWFyayhrZXksIGRhdGEsIGltbXV0KSB7XHJcblx0XHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICBjb25zdCBtYXJrID0gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSwgaW1tdXQpLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgaWYgKGRhdGEuYXV0b25vdGUpIHRoaXMuZW1pdCgnYWRkOm5vdGUnLCBtYXJrLCBkYXRhLmF1dG9ub3RlKTtcclxuXHJcblx0XHRcdHJldHVybiBtYXJrO1xyXG5cdFx0fSxcclxuXHRcdHVuZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmU7XHJcblxyXG5cdFx0XHRpZiAoZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBtYXJrID0gdGhpcy5kb25lLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgdGhpcy51bmRvbmUucHVzaChtYXJrLnVuZG8oKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvb2ttYXJrKSB0aGlzLnVuZG9Cb29rbWFyaygpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbm9BdXRvc2F2ZSB8fCB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHR9LFxyXG5cdFx0cmVkbyhub0F1dG9zYXZlKSB7XHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0XHRpZiAodW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCBbbWFya10pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdH0sXHJcbiAgICBjdXRPdXQoaSkge1xyXG4gICAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICAgIGluZGljZXMgPSBbaV0sXHJcbiAgICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICAgIGZvciAodmFyIHggPSBqICsgMTsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRvQmVSZW1vdmVkLmluY2x1ZGVzKHgpKSB0b0JlUmVtb3ZlZC5wdXNoKHgpO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgICAgfVxyXG4gICAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lLnNwbGljZSh0b0JlUmVtb3ZlZC5wb3AoKSwgMSlbMF0udW5kbygpO1xyXG4gICAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc21hbGxlc3RJRDtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGlkID0gaWQgPyBpZCA6IF9TVE9SRS50bWlkID8gX1NUT1JFLnRtaWQgOiAnJztcclxuXHJcbiAgICAgIGlmICghaWQpIHJldHVybiB0aGlzLnVuZG8oKTtcclxuXHJcbiAgICAgIGxldCBtYXJrID0gdGhpcy5nZXRCeUlkKGlkLnNwbGl0KCdfJylbMF0pLFxyXG4gICAgICAgICAgZG9uZSA9IHRoaXMuZG9uZSxcclxuICAgICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICAgIHBvc2l0aW9uID0gZG9uZS5pbmRleE9mKG1hcmspLFxyXG4gICAgICAgICAgc21hbGxlc3RJRCwgaTtcclxuXHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gbCAtIDEpIHtcclxuICAgICAgICB0aGlzLnVuZG8oKTtcclxuICAgICAgICB0aGlzLnVuZG9uZS5wb3AoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGkgPSB0aGlzLnVuZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKHRoaXMudW5kb25lLmxlbmd0aCkgdGhpcy5yZWRvKHRydWUpO1xyXG5cclxuICAgICAgICAgIHNtYWxsZXN0SUQgPSB0aGlzLmN1dE91dChwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5kb25lLmZvckVhY2goZnVuY3Rpb24obWFyaykge1xyXG4gICAgICAgICAgICBpZiAobWFyay5pZCA+IHNtYWxsZXN0SUQpIG1hcmsucmVzdW1lKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB3aGlsZSAoaS0tKSB0aGlzLnVuZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5hdXRvc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bWFyaycsIGlkWzBdKTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoYXJnLCBvcHRpb25zKSB7XHJcbiAgICAgIF9TVE9SRS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgLy8gd2hpbGUgKHRoaXMuZG9uZS5sZW5ndGgpIHtcclxuICAgICAgLy8gICB0aGlzLnVuZG8odHJ1ZSk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKVxyXG4gICAgICAgIC5mb3JFYWNoKGhpZ2hsaWdodCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBoaWdobGlnaHQucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaGlnaGxpZ2h0LnRleHRDb250ZW50KSwgaGlnaGxpZ2h0KTtcclxuICAgICAgICAgIGNvbnRhaW5lci5ub3JtYWxpemUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZG9uZSA9IFtdO1xyXG4gICAgICB0aGlzLnVuZG9uZSA9IFtdO1xyXG4gICAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gW107XHJcbiAgICAgIHRoaXMudmlzdWFsbHlPcmRlcmVkTWFya0lEcyA9IFtdO1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLm1hcmtTY3JvbGxQb3MgPSAtMTtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gIWFyZyAmJiBfU1RPUkUubmFtZSAmJiBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gPyBfU1RPUkUuZW50cmllc1tfU1RPUkUubmFtZV0gOiBudWxsO1xyXG5cclxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdyZXN1bWVkOm1hcmtlcnMnLCBlbnRyeSk7XHJcbiAgICB9LFxyXG4gICAgaW1tdXQoaW1tdXRhYmxlKSB7XHJcbiAgICAgIHRoaXMuaXNJbW11dCA9IGltbXV0YWJsZTtcclxuICAgICAgX1NUT1JFLnJlZGVzY3JpYmluZyA9IHRydWU7XHJcbiAgICAgIF9TVE9SRS5pbW11dCA9IGltbXV0YWJsZTtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIH0sXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICBpZiAoX1NUT1JFLmRpc2FibGVkKSByZXR1cm4gdGhpcy5lbWl0KCdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyk7XHJcblxyXG4gICAgICBjb25zdCBpZnJhbWUgPSBfU1RPUkUuaWZyYW1lO1xyXG4gICAgICBjb25zdCBsb2NrZWQgPSBfU1RPUkUubG9ja2VkO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbmFtaW5nJykudGhlbihuYW1pbmcgPT4ge1xyXG4gICAgICAgIGlmIChfU1RPUkUuaXNOZXcgfHwgbG9ja2VkKSB7XHJcbiAgICAgICAgICBpZiAoIWxvY2tlZCAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdCgnbmFtZTplbnRyeT8nKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIF9TVE9SRS5uYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZScsIHN1YikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9TVE9SRS5uYW1lKSB0aGlzLmVtaXQoJ3NhdmU6ZW50cnk/JywgdGhpcy5yZXRyaWV2ZUVudHJ5KCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlybWVkID0gdHJ1ZTtcclxuXHQgICAgICAgICAgaWYgKGlmcmFtZSkgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfaWZyYW1lJykpO1xyXG5cdCAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIHRoaXMucmV0cmlldmVFbnRyeSgpKTtcclxuXHQgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZTplbnRyeT8nLCB0aGlzLnJldHJpZXZlRW50cnkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHRcdH0sXHJcbiAgICBhdXRvc2F2ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCd1bnNhdmVkLWNoYW5nZXMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cdFx0c3RvcmUobWFyaywgc2F2ZSwgb3JkZXIpIHtcclxuXHRcdFx0dGhpcy5kb25lLnB1c2gobWFyayk7XHJcbiAgICAgIGlmIChzYXZlICE9PSBmYWxzZSkgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0XHRpZiAob3JkZXIpIHRoaXMub3JkZXJNYXJrc1Zpc3VhbGx5KCk7XHJcblx0XHR9LFxyXG4gICAgcmVjcmVhdGUobWFyaykge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKG51bGwsIHsgcHJvZ3JhbW1hdGljYWxseTogdHJ1ZSB9KTtcclxuICAgICAgdGhpcy5zdG9yZSh0aGlzLm1hcmsobWFyay5rZXksIG1hcmspLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIG9uRmluaXNoZWRSZXN0b3JhdGlvbigpIHtcclxuICAgICAgaWYgKCF0aGlzLmRvbmUubGVuZ3RoKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZTpub3RlcycsIHRoaXMuZG9uZSk7XHJcblxyXG4gICAgICBpZiAoX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChfU1RPUkUubmFtZSA9PT0gbWFyay5rZXlEYXRhLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkpIHtcclxuICAgICAgICAgIHRoaXMuZ290b01hcmsobWFyayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc29ydEJ5SWQoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9yZGVyTWFya3NWaXN1YWxseSgpO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5yZWRlc2NyaWJpbmcpIHtcclxuICAgICAgICBfU1RPUkUucmVkZXNjcmliaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNhbmNlbGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIF9TVE9SRS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYWRkTm90ZShpZCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2FkZDpub3RlJywgdGhpcy5maW5kTWFyayhpZCkpO1xyXG4gICAgfSxcclxuICAgIHNhdmVOb3RlKGlkKSB7XHJcbiAgICAgIGlmICghX1NUT1JFLmxvY2tlZCkgcmV0dXJuIHRoaXMuYXV0b3NhdmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQpLmtleURhdGE7XHJcbiAgICAgIGNvbnN0IHN5bmNlZCA9IHR5cGVvZiBtYXJrLnN5bmNlZCA9PT0gJ2Jvb2xlYW4nID8gbWFyay5zeW5jZWQgOiBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcblxyXG4gICAgICBjb25zdCBlbnRyeSA9IHtcclxuICAgICAgICBtYXJrczogW21hcmtdLFxyXG4gICAgICAgIG5hbWU6IG1hcmsudGV4dC50cmltKCkuc3Vic3RyaW5nKDAsIF9HTE9CQUxfU0VUVElOR1MuTUFYX0VOVFJZX05BTUVfQ0hBUlMgLSAxKSxcclxuICAgICAgICBzeW5jZWRcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGU6ZW50cnk/JywgZW50cnkpO1xyXG4gICAgfSxcclxuICAgIGdvdG9NYXJrKG1hcmspIHtcclxuICAgICAgY29uc3QgbWFya0VsZW1lbnRzID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcztcclxuICAgICAgbGV0IGVsLCBwb3MsIGlkO1xyXG4gICAgICBpZiAobWFyayB8fCBtYXJrID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXJrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgdGhpcy5tYXJrU2Nyb2xsUG9zID0gbWFyayArIDE7XHJcbiAgICAgICAgICBlbCA9IG1hcmtFbGVtZW50c1ttYXJrXTtcclxuICAgICAgICAgIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykuc3BsaXQoJ18nKVswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWQgPSBtYXJrLmlkO1xyXG4gICAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZD1cIicgKyBpZCArICdfMFwiXScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLm1hcmtTY3JvbGxQb3M7XHJcbiAgICAgICAgZWwgPSBtYXJrRWxlbWVudHNbcG9zXTtcclxuICAgICAgICBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpLnNwbGl0KCdfJylbMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcblxyXG5cdFx0XHRpZiAoIW1hcmsgfHwgdHlwZW9mIG1hcmsgPT09ICdudW1iZXInKSB0aGlzLmdldEJ5SWQoaWQpLm9uQ2xpY2soaWQpO1xyXG4gICAgICB0aGlzLmluZGljYXRlTWFyayhpZCk7XHJcbiAgICB9LFxyXG5cdFx0Z290b05leHRNYXJrKGRpcikge1xyXG5cdFx0XHRjb25zdCBsID0gdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrcy5sZW5ndGg7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtTY3JvbGxQb3MgKz0gZGlyO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMubWFya1Njcm9sbFBvcyA8IDApIHRoaXMubWFya1Njcm9sbFBvcyA9IGwgLSAxO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLm1hcmtTY3JvbGxQb3MgPj0gbCkgdGhpcy5tYXJrU2Nyb2xsUG9zID0gMDtcclxuXHJcblx0XHRcdHRoaXMuZ290b01hcmsoKTtcclxuXHRcdH0sXHJcbiAgICBpbmRpY2F0ZU1hcmsoaWQpIHtcclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKVxyXG4gICAgICAgIC5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSk7XHJcblxyXG4gICAgICBjb25zdCB0bXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0bWFya2VyLWhpZ2hsaWdodFtkYXRhLXRtLWlkXj1cIicgKyBpZCArICdfXCJdJykpO1xyXG5cclxuICAgICAgdG1zLmZvckVhY2godG0gPT4gdG0uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1oaWdobGlnaHQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRtcy5mb3JFYWNoKHRtID0+IHRtLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItaGlnaGxpZ2h0LS1hY3RpdmUnKSksIDIwMDApO1xyXG4gICAgfSxcclxuICAgIHNldEJvb2ttYXJrKG0sIHNhdmUpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcmssXHJcbiAgICAgICAgICBtYXJrID0gdGhpcy5maW5kTWFyayhtKTtcclxuXHJcbiAgICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGJvb2ttYXJrKSB7XHJcbiAgICAgICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBuZXcgX0JPT0tNQVJLKCkuc2V0KG1hcmspO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGRlZDpib29rbWFyaycpO1xyXG4gICAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgIH0sXHJcbiAgICB1bmRvQm9va21hcmsoKSB7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVCb29rbWFyaygpIHtcclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcms7XHJcblxyXG4gICAgICBpZiAoIWJvb2ttYXJrKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBib29rbWFyay5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVtb3ZlZEJvb2ttYXJrID0gYm9va21hcms7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDpib29rbWFyaycpO1xyXG4gICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsVG9Cb29rbWFyaygpIHtcclxuICAgICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICAgIGlmIChib29rbWFyaykgYm9va21hcmsuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH0sXHJcbiAgICBnZXRCeUlkKGlkLCBwb3MpIHtcclxuXHRcdFx0bGV0IGRvbmUgPSB0aGlzLmRvbmUsXHJcblx0XHRcdFx0ICBkID0gZG9uZS5sZW5ndGgsXHJcblx0XHRcdFx0ICBtYXJrO1xyXG5cclxuXHRcdFx0d2hpbGUgKGQtLSkge1xyXG5cdFx0XHRcdG1hcmsgPSBkb25lW2RdO1xyXG5cclxuXHRcdFx0XHRpZiAobWFyay5rZXlEYXRhLmlkID09IGlkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbWFyaywgcG9zaXRpb246IGQgfSA6IG1hcms7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBvcyA/IHsgbWFyazogbnVsbCwgcG9zaXRpb246IG51bGwgfSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHRcdGZpbmRNYXJrKHgpIHtcclxuXHRcdFx0eCA9IHggPyB4IDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuXHRcdFx0bGV0IG1hcmsgPSAheCA/XHJcblx0XHRcdFx0dGhpcy5kb25lW3RoaXMuZG9uZS5sZW5ndGggLSAxXSA6XHJcblx0XHRcdFx0XHR0eXBlb2YgeCA9PT0gJ3N0cmluZycgP1xyXG5cdFx0XHRcdHRoaXMuZ2V0QnlJZCh4LnNwbGl0KCdfJylbMF0pIDpcclxuXHRcdFx0XHR4O1xyXG5cdFx0XHRyZXR1cm4gbWFyaztcclxuXHRcdH0sXHJcbiAgICBzb3J0QnlJZCgpIHtcclxuICAgICAgdGhpcy5kb25lLnNvcnQoKG1hcmsxLCBtYXJrMikgPT4gbWFyazEuaWQgLSBtYXJrMi5pZCk7XHJcbiAgICB9LFxyXG5cdFx0b3JkZXJNYXJrc1Zpc3VhbGx5KCkge1xyXG5cdFx0XHR0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dG1hcmtlci1oaWdobGlnaHRbZGF0YS10bS1pZCQ9XCJfMFwiXScpKS5zb3J0KChtMSwgbTIpID0+IHtcclxuXHRcdFx0XHRsZXQgYmIxID0gbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRcdGJiMiA9IG0yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0XHR0b3AxID0gYmIxLnRvcCxcclxuXHRcdFx0XHRcdFx0dG9wMiA9IGJiMi50b3A7XHJcblxyXG5cdFx0XHRcdGlmICh0b3AxIDwgdG9wMikgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdGVsc2UgaWYgKHRvcDIgPCB0b3AxKSByZXR1cm4gMTtcclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChiYjEubGVmdCA8IGJiMi5sZWZ0KSByZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG4gICAgICB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtJRHMgPSB0aGlzLnZpc3VhbGx5T3JkZXJlZE1hcmtzLm1hcChtYXJrID0+IHBhcnNlSW50KG1hcmsuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJykpKTtcclxuICAgICAgdGhpcy5lbWl0KCd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJywgdGhpcy52aXN1YWxseU9yZGVyZWRNYXJrSURzKTtcclxuXHRcdH0sXHJcbiAgICBtYXJrc0ludGVyc2VjdChtYXJrMSwgbWFyazIpIHtcclxuXHRcdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgICAgdzEgPSB3cmFwcGVyczEubGVuZ3RoLFxyXG4gICAgICAgICAgaWQxID0gbWFyazEuaWQsXHJcbiAgICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICAgIGlkMiA9IG1hcmsyLmlkLFxyXG4gICAgICAgICAgdzIsIHRtcywgbDtcclxuXHJcbiAgICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgICAgdzIgPSB3cmFwcGVyczIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICh3Mi0tKSB7XHJcbiAgICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgICAgbCA9IHRtcy5sZW5ndGg7XHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG4gICAgb25NYXJrZXJLZXkoZSwga2V5KSB7XHJcblx0XHRcdGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcblxyXG5cdFx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGUpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSBrZXkgPSBlO1xyXG5cdFx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRrZXkgPSBrZXkgfHwgJ20nO1xyXG5cdFx0XHR9XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGlmIChfU1RPUkUuaXNOZXcpIHtcclxuICAgICAgICAgIHRoaXMuaXNJbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6ICEhc2V0dGluZ3MuaGlzdG9yeS5pbW11dDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pc0ltbXV0ID0gdHlwZW9mIHRoaXMuaXNJbW11dCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pc0ltbXV0IDogX1NUT1JFLmltbXV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhrZXksIHNldHRpbmdzLm1hcmtlcnNba2V5XSwgdGhpcy5pc0ltbXV0KSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG5cdFx0fSxcclxuICAgIG9uSG90a2V5KGtleSkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgICBjYXNlICd6Jzogc2VsZi51bmRvKCk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3knOiBzZWxmLnJlZG8oKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgICBjYXNlICdiJzogc2VsZi5zZXRCb29rbWFyaygpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlICdhcnJvd3VwJzogc2VsZi5nb3RvTmV4dE1hcmsoLTEpOyBicmVhaztcclxuXHRcdFx0XHRjYXNlICdhcnJvd2Rvd24nOiBzZWxmLmdvdG9OZXh0TWFyaygxKTsgYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnZCc6IHNlbGYucmVtb3ZlKCk7IGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJldmVudERlZmF1bHQoZSkge1xyXG5cdFx0XHRpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0KSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0cmV0cmlldmVFbnRyeSgpIHtcclxuICAgICAgY29uc3QgbG9ja2VkID0gX1NUT1JFLmxvY2tlZDtcclxuICAgICAgY29uc3QgaXNOZXcgPSBfU1RPUkUuaXNOZXc7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBfU1RPUkUubmFtZTtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0gIWxvY2tlZCAmJiBfU1RPUkUuZW50cmllc1tuYW1lXSA/IF9TVE9SRS5lbnRyaWVzW25hbWVdIDoge307XHJcblxyXG4gICAgICBlbnRyeS5tYXJrcyA9IHRoaXMuY29sbGVjdE1hcmtzKCk7XHJcblx0XHRcdGVudHJ5Lmxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgZW50cnkuYm9va21hcmtlZCA9ICEhdGhpcy5ib29rbWFyaztcclxuICAgICAgZW50cnkudGl0bGUgPSB3aW5kb3cuZG9jdW1lbnQudGl0bGU7XHJcblx0XHRcdGVudHJ5LmNvdW50ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG5cdFx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgICBlbnRyeS5pbW11dCA9IHR5cGVvZiB0aGlzLmlzSW1tdXQgPT09ICdib29sZWFuJyA/IHRoaXMuaXNJbW11dCA6IGVudHJ5LmltbXV0O1xyXG5cclxuICAgICAgaWYgKGlzTmV3IHx8IGxvY2tlZCkge1xyXG4gICAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgICBlbnRyeS51cmwgPSBfU1RPUkUuaGFzaFNlbnNpdGl2ZSA/IHdpbmRvdy5kb2N1bWVudC5VUkwgOiBfSEFTSExFU1Mod2luZG93LmRvY3VtZW50LlVSTCk7XHJcbiAgICAgICAgZW50cnkuc3luY2VkID0gX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnO1xyXG4gICAgICAgIGVudHJ5LmxvY2tlZCA9IGxvY2tlZDtcclxuICAgICAgICBlbnRyeS5oYXNoU2Vuc2l0aXZlID0gX1NUT1JFLmhhc2hTZW5zaXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVudHJ5Lm5hbWUgPSBsb2NrZWQgP1xyXG4gICAgICAgIGVudHJ5Lm1hcmtzWzBdLnRleHQudHJpbSgpLnN1YnN0cmluZygwLCBfR0xPQkFMX1NFVFRJTkdTLk1BWF9FTlRSWV9OQU1FX0NIQVJTIC0gMSkgOlxyXG4gICAgICAgIGlzTmV3ID8gbmFtZSA6IGVudHJ5Lm5hbWU7XHJcblxyXG5cdFx0XHRyZXR1cm4gZW50cnk7XHJcblx0XHR9LFxyXG4gICAgY29sbGVjdE1hcmtzKCkge1xyXG4gICAgICBsZXQgZG9uZSA9IHRoaXMuZG9uZTtcclxuICAgICAgbGV0IGwgPSBkb25lLmxlbmd0aDtcclxuICAgICAgY29uc3QgbWFya3MgPSBbXTtcclxuXHJcbiAgICAgIGlmIChfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgICAgZG9uZSA9IFtkb25lW2wtMV1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsID0gZG9uZS5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGxldCBtID0gMCwga0Q7IG0gPCBsOyBtKyspIHtcclxuXHRcdFx0XHRrRCA9IGRvbmVbbV0ua2V5RGF0YTtcclxuICAgICAgICBkZWxldGUga0Quc3luY2VkO1xyXG5cdFx0XHRcdG1hcmtzLnB1c2goa0QpO1xyXG5cdFx0XHR9XHJcbiAgICAgIHJldHVybiBtYXJrcztcclxuICAgIH0sXHJcbiAgICBvbkhhc2hDaGFuZ2UoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKG51bGwsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3VtZWQtb24taGFzaGNoYW5nZScpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXJrLCBjb2xvcikge1xyXG5cclxuICBjb25zdCBCT0RZID0gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhZGRNYXJrTGlzdGVuZXJzJyxcclxuICAgICAgICAnZHJhZzpub3RlJzogJ29uRHJhZycsXHJcbiAgICAgICAgJ2RyYWdzdG9wOm5vdGUnOiAnb25EcmFnRW5kJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdfZGVsZXRlJyxcclxuICAgICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICdoaWRlJyxcclxuICAgICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2JyaW5nVXBGcm9udCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYXR0ZW1wdFVwZGF0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJ3Rtbm90ZWhlYWRlcic6ICdvbkRyYWdTdGFydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoc3RhcnQ6IHtcclxuICAgICAgICAgICd0bW5vdGVoZWFkZXInOiAnb25EcmFnU3RhcnQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgYWRkTGlzdGVuZXJzTWFudWFsbHk6IHRydWUsXHJcbiAgICBlbDogbnVsbCxcclxuICAgIG1hcmssXHJcbiAgICBjb2xvcjogY29sb3IgfHwgJycsXHJcbiAgICBtYXJrQ2xpY2tIYW5kbGVyOiBudWxsLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIHJlY2VudGx5VXBkYXRlZDogZmFsc2UsXHJcbiAgICBzZXR0aW5nc01vZGU6IGZhbHNlLFxyXG4gICAgcG9zOiB7IGw6IG51bGwsIHQ6IG51bGwgfSxcclxuICAgIHNpemU6IHsgdzogbnVsbCwgaDogbnVsbCB9LFxyXG4gICAgZHJhZ0RYOiAwLFxyXG4gICAgZHJhZ0RZOiAwLFxyXG4gICAgbXV0YXRpb25PYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGp1c3ROb3RlRGF0YU9iamVjdCgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZU5vdGVFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuYWRkTWFya0xpc3RlbmVycygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGp1c3ROb3RlRGF0YU9iamVjdCgpIHtcclxuICAgICAgY29uc3Qgbm90ZURhdGEgPSB0aGlzLm1hcmsua2V5RGF0YS5ub3RlO1xyXG4gICAgICBpZiAodHlwZW9mIG5vdGVEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCAneWVsbG93JyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFub3RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSB7IHRleHQ6IG5vdGVEYXRhLCBjb2xvcjogdGhpcy5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBub3RlRGF0YS5wb3MgfHwgdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbm90ZURhdGEuc2l6ZSB8fCB0aGlzLnNpemU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVOb3RlRWxlbWVudCgpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGUnKTtcclxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVoZWFkZXInKTtcclxuICAgICAgY29uc3QgZGVsID0gdGhpcy5kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVkZWxldGUnKTtcclxuICAgICAgY29uc3QgbWluID0gdGhpcy5taW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVtaW5pbWl6ZScpO1xyXG4gICAgICBjb25zdCBnZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY3VzdG9taXplJyk7XHJcbiAgICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLnBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bW5vdGVwYWxldHRlJyk7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUudGV4dDtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciB8fCBfU1RPUkUubm90ZUNvbG9yO1xyXG4gICAgICBfU1RPUkUubm90ZUNvbG9yID0gY29sb3I7XHJcbiAgICAgIGNvbnN0IGRlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICAgIGNvbnN0IG1pblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjAxMykpO1xyXG4gICAgICBjb25zdCBnZWFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNjk5KSk7XHJcblxyXG4gICAgICBbJ2dyZWVuJywgJ3doaXRlJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncmVkJywgJ3B1cnBsZScsICdibHVlJywgJ3R1cnF1b2lzZSddLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlY29sb3InKTtcclxuICAgICAgICBjb2xvci5jbGFzc05hbWUgPSAndG1ub3RlY29sb3ItLScgKyBjO1xyXG4gICAgICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicsIGMpO1xyXG4gICAgICAgIHBhbGV0dGUuYXBwZW5kQ2hpbGQoY29sb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHAuc2V0QXR0cmlidXRlKCdkYXRhLXRtLW5vdGUnLCB0cnVlKTtcclxuICAgICAgZGVsLmFwcGVuZENoaWxkKGRlbFRleHQpO1xyXG4gICAgICBtaW4uYXBwZW5kQ2hpbGQobWluVGV4dCk7XHJcbiAgICAgIGdlYXIuYXBwZW5kQ2hpbGQoZ2VhclRleHQpO1xyXG4gICAgICBub3RlLmFwcGVuZChoZWFkZXIpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGdlYXIpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBjb2xvcik7XHJcbiAgICAgIGlmICh0ZXh0KSBwLnZhbHVlID0gdGV4dDtcclxuXHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5hdHRlbXB0VXBkYXRlKGUsIGUudGFyZ2V0LCB0cnVlKSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSAnJztcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuICAgIGF0dGVtcHRVcGRhdGUoZSwgZWwsIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5yZWNlbnRseVVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoZWwpLCAzMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShlbCkge1xyXG4gICAgICB0aGlzLm1hcmsua2V5RGF0YS5ub3RlLnRleHQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgICB0aGlzLnJlY2VudGx5VXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3coKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgbGV0IHBvcywgbGVmdCwgdG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9zLmwgIT09IG51bGwpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnBvcztcclxuICAgICAgICB0b3AgPSBwb3MudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGxlZnQgPSB0aGlzLnBvcy5sID0gcG9zLmw7XHJcbiAgICAgICAgdG9wID0gdGhpcy5wb3MudCA9IHBvcy50ICsgcG9zLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgICBsZWZ0ID0gdGhpcy5wb3MubCA9IHBvcy5sO1xyXG5cclxuICAgICAgaWYgKGxlZnQgKyAzNDAgPiBpbm5lcldpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMucG9zLmwgPSBpbm5lcldpbmRvd1dpZHRoIC0gMzQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLncgPyAnd2lkdGg6JyArIHRoaXMuc2l6ZS53ICsgJztoZWlnaHQ6JyArIHRoaXMuc2l6ZS5oICsgJzsnIDogJyc7XHJcblxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgdG9wICsgJ3B4O2xlZnQ6JyArIGxlZnQgKyAncHg7Jyk7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzaXplKTtcclxuICAgICAgdGhpcy5jb25uZWN0TXV0YXRpb25PYnNlcnZlcigpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHRoaXMuaGlkZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVBhbGV0dGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzTW9kZSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5wYWxldHRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFsZXR0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXR0aW5nc01vZGUgPSAhdGhpcy5zZXR0aW5nc01vZGU7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLScgKyB0aGlzLmNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID0gX1NUT1JFLm5vdGVDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIGNvbG9yKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLnRvZ2dsZVBhbGV0dGUoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtY29sb3InLCB0aGlzLm1hcmsuaWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgd3JhcHBlciBvZiB0aGlzLm1hcmsud3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZU1hcmtMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9O1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciA9IHRoaXMubXV0YXRpb25PYnNlcnZlciB8fCBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2F2ZVNpemUpKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0YXJlYSwgY29uZmlnKTtcclxuICAgIH0sXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMubWFyay53cmFwcGVyc1t0aGlzLm1hcmsud3JhcHBlcnMubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsOiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRHJhZ1N0YXJ0KGUsIGVsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kcmFnRFggPSBlLnBhZ2VYIC0gdGhpcy5wb3MubDtcclxuICAgICAgdGhpcy5kcmFnRFkgPSBlLnBhZ2VZIC0gdGhpcy5wb3MudDtcclxuICAgICAgdGhpcy5lbWl0KCdzdGFydDpkcmFnJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBvbkRyYWcobm90ZSwgZSkge1xyXG4gICAgICBpZiAobm90ZSA9PT0gdGhpcy5tYXJrLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3MubCA9IGUucGFnZVggLSB0aGlzLmRyYWdEWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3MudCA9IGUucGFnZVkgLSB0aGlzLmRyYWdEWTtcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZS5wb3MgPSB0aGlzLnBvcztcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOm5vdGUtcG9zJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH0sXHJcbiAgICBzYXZlU2l6ZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gbXV0YXRpb25zTGlzdFswXS50YXJnZXQuc3R5bGU7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMubWFyay5rZXlEYXRhLm5vdGUuc2l6ZSA9IHsgdzogc3R5bGUud2lkdGgsIGg6IHN0eWxlLmhlaWdodCB9O1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6bm90ZS1zaXplJywgdGhpcy5tYXJrLmlkKTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2FkZDpub3RlJzogJ2FkZEFuZFNob3cnLFxyXG4gICAgICAgICdyZW1vdmVkOm5vdGUnOiAncmVtb3ZlTm90ZVN0b3JhZ2UnLFxyXG4gICAgICAgICdyZXN0b3JlOm5vdGVzJzogJ3Jlc3RvcmUnLFxyXG4gICAgICAgICdyZW1vdmVkOm1hcmsnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3RvZ2dsZTpub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3Rlcyc6ICd0b2dnbGVBbGwnLFxyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlVHJhbnNwJyxcclxuICAgICAgICAnc3RhcnQ6ZHJhZyc6ICdzdGFydERyYWdnaW5nTm90ZScsXHJcbiAgICAgICAgJ29wZW5lZDpzaWRlYmFyJzogJ3NlbmROb3Rlc1N0YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGVzOiB7fSxcclxuICAgIHRvZ2dsZTogbnVsbCxcclxuICAgIGRyYWdIYW5kbGVyOiBudWxsLFxyXG4gICAgZHJhZ1N0b3BIYW5kbGVyOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNwKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVzW21hcmsuaWRdO1xyXG4gICAgICBpZiAobm90ZSkgcmV0dXJuIG5vdGU7XHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkZWQ6bm90ZScpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3Rlc1ttYXJrLmlkXSA9IG5ldyBfTk9URShtYXJrLCBjb2xvcik7XHJcbiAgICB9LFxyXG4gICAgcmVzdG9yZShtYXJrcykge1xyXG4gICAgICBmb3IgKGxldCBtYXJrIG9mIG1hcmtzKSB7XHJcbiAgICAgICAgaWYgKG1hcmsua2V5RGF0YS5ub3RlKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZChtYXJrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbmRTaG93KG1hcmssIGNvbG9yKSB7XHJcbiAgICAgIHRoaXMuYWRkKG1hcmssIGNvbG9yKS5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZVN0b3JhZ2UoaWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMubm90ZXNbaWRdO1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMubm90ZXMpKSB0aGlzLmVtaXQoJ3JlbW92ZWQ6bGFzdC1ub3RlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZShpZCkge1xyXG4gICAgICBpZiAodGhpcy5ub3Rlc1tpZF0pIHRoaXMubm90ZXNbaWRdLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUFsbCgpIHtcclxuICAgICAgaWYgKCF0aGlzLm5vdGVzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5ub3RlcztcclxuICAgICAgbGV0IG1ldGggPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZScpLmxlbmd0aCA/ICdoaWRlJyA6ICdzaG93JyxcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IG1ldGggPT09ICdoaWRlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGU7XHJcbiAgICAgIGZvciAobGV0IG4gaW4gbm90ZXMpIHtcclxuICAgICAgICBub3RlID0gbm90ZXNbbl07XHJcbiAgICAgICAgaWYgKG5vdGUudmlzaWJsZSA9PT0gY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICBub3RlW21ldGhdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVHJhbnNwKCkge1xyXG4gICAgICBjb25zdCBib2R5Q2xhc3NlcyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcclxuICAgICAgX1NUT1JFLmdldCgnbm90ZXRyYW5zcCcpLnRoZW4odHJhbnNwID0+IHtcclxuICAgICAgICBpZiAodHJhbnNwKSBib2R5Q2xhc3Nlcy5hZGQoJ3Rtbm90ZXMtLTBfOCcpO1xyXG4gICAgICAgIGVsc2UgYm9keUNsYXNzZXMucmVtb3ZlKCd0bW5vdGVzLS0wXzgnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXNFbXB0eShvYmopIHtcclxuICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBzdGFydERyYWdnaW5nTm90ZShub3RlKSB7XHJcbiAgICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlciA9IChlKSA9PiB0aGlzLmVtaXREcmFnRXZlbnQobm90ZSwgZSk7XHJcbiAgICAgIGNvbnN0IGRyYWdTdG9wSGFuZGxlciA9IHRoaXMuZHJhZ1N0b3BIYW5kbGVyID0gKGUpID0+IHRoaXMuc3RvcERyYWdnaW5nTm90ZShub3RlLCBlKTtcclxuICAgICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50O1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdTdG9wSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHN0b3BEcmFnZ2luZ05vdGUobm90ZSwgZSkge1xyXG4gICAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ0hhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZ3N0b3A6bm90ZScsIG5vdGUsIGUpO1xyXG4gICAgfSxcclxuICAgIGVtaXREcmFnRXZlbnQobm90ZSwgZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzpub3RlJywgbm90ZSwgZSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE5vdGVzU3RhdGUoaW5mbykge1xyXG4gICAgICB0aGlzLmVtaXQoJ25vdGVzLXN0YXRlJywgIXRoaXMuaXNFbXB0eSh0aGlzLm5vdGVzKSwgaW5mbyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSwgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc3RhcnRlZDphcHAnOiAnY2hlY2tVUkwnLFxyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlJyxcclxuICAgICAgICAnb3BlbmVkOnNpZGViYXInOiAnc2VuZFBhZ2VTdGF0ZScsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgICAnY2hhbmdlZDp1cmwnOiAnb25VcmxDaGFuZ2UnLFxyXG4gICAgICAgICdyZXN1bWVkLW9uLWhhc2hjaGFuZ2UnOiAnc2V0dXAnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGtleWRvd246IHtcclxuICAgICAgICAgICcqJzogJ2RlbGVnYXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0aW9uY2hhbmdlOiB7XHJcbiAgICAgICAgICAnKic6ICdvblNlbGVjdGlvbkNoYW5nZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXJsOiAnJyxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIHNldDogZmFsc2UsXHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICByZXRyeUFjdGl2ZTogZmFsc2UsXHJcbiAgICBzaGlmdFNlbnNpdGl2ZUtleXM6IFsxMywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDE3MSwgMTczXSxcclxuICAgIHJlZ2lzdGVyZWRMb2FkSGFuZGxlcjogZmFsc2UsXHJcbiAgICBrZXlDb2RlTWFwOiB7XHJcbiAgICAgICcxMyc6ICdFbnRlcicsXHJcbiAgICAgICc0OCc6ICcwJywgJzQ5JzogJzEnLCAnNTAnOiAnMicsICc1MSc6ICczJywgJzUyJzogJzQnLFxyXG4gICAgICAnNTMnOiAnNScsICc1NCc6ICc2JywgJzU1JzogJzcnLCAnNTYnOiAnOCcsICc1Nyc6ICc5JyxcclxuICAgICAgJzE3MSc6ICcrJywgJzE3Myc6ICctJ1xyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwb3dlcihvbikge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICBlbHNlIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZSA9IG9uO1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ21vZGUnKS50aGVuKGFjdGl2ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldCB8fCAhYWN0aXZlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50LndpbmRvdy5kb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnICYmICF0aGlzLnJlZ2lzdGVyZWRMb2FkSGFuZGxlcikge1xyXG4gICAgICAgICAgdGhpcy5yZWdpc3RlcmVkTG9hZEhhbmRsZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5zZXR1cCgpLCB3aW5kb3cucGFyZW50LndpbmRvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfU1RPUkUuaWZyYW1lID0gdGhpcy5pc0lGcmFtZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5kb2N1bWVudC5VUkw7XHJcbiAgICAgICAgdGhpcy5oYXNobGVzc1VSTCA9IF9IQVNITEVTUyh0aGlzLnVybCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tVUkwoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGlzSUZyYW1lKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIH0sXHJcbiAgICBpc0VkaXRhYmxlKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBlbC50YWdOYW1lO1xyXG5cclxuICAgICAgcmV0dXJuIChuYW1lID09PSAnVEVYVEFSRUEnIHx8IG5hbWUgPT09ICdJTlBVVCcgfHwgZWwuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZScpO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlKGUpIHtcclxuICAgICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUsXHJcbiAgICAgICAgICBtb2RLZXkgPSAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5KSxcclxuICAgICAgICAgIGFycm93S2V5cyA9IFsnYXJyb3dkb3duJywgJ2Fycm93dXAnXSxcclxuICAgICAgICAgIGxvY2tlZEFjdGlvbnMgPSBbJ2InLCAncycsICd5JywgJ3onLCAnZCddLFxyXG4gICAgICAgICAgZnVuY3Rpb25LZXlzID0gbG9ja2VkQWN0aW9ucy5jb25jYXQoYXJyb3dLZXlzKSxcclxuICAgICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMyddO1xyXG5cclxuICAgICAgaWYgKF9TVE9SRS5sb2NrZWQgJiYgbG9ja2VkQWN0aW9ucy5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNoaWZ0U2Vuc2l0aXZlS2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkga2V5ID0gdGhpcy5rZXlDb2RlTWFwW2tleUNvZGVdO1xyXG5cclxuICAgICAgaWYgKCFmdW5jdGlvbktleXMuaW5jbHVkZXMoa2V5KSAmJiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNFZGl0YWJsZShlLnRhcmdldCkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yaWdLZXkgPSBrZXk7XHJcbiAgICAgICAgY29uc3QgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzO1xyXG4gICAgICAgIGNvbnN0IGlzTWFya2VyS2V5ID0gbWFya2Vyc1trZXldO1xyXG4gICAgICAgIGNvbnN0IGlzQ3VzdG9tTWFya2VyS2V5ID0gaXNNYXJrZXJLZXkgJiYgIWRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKGtleSk7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tTWFya2VyS2V5KSBrZXkgPSAnY20nO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBzaG9ydGN1dHNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKCFzZXR0aW5nKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9va3VwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChpc01hcmtlcktleSAmJiAhc2V0dGluZ1swXSAmJiBzZXR0aW5nWzFdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHJlc3NlZDptYXJrZXIta2V5JywgZSwgb3JpZ0tleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghc2V0dGluZ1sxXSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICBjb25zdCBzMSA9IHNob3J0Y3V0WzBdO1xyXG4gICAgICAgICAgY29uc3QgczIgPSBzaG9ydGN1dFsxXTtcclxuXHJcbiAgICAgICAgICBpZiAoIWVbczFdIHx8IChzMiAmJiAhZVtzMl0pKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMubG9va3VwKCk7XHJcblxyXG4gICAgICAgICAgZWxzZSBpZiAoaXNNYXJrZXJLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcmVzc2VkOm1hcmtlci1rZXknLCBlLCBvcmlnS2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdwcmVzc2VkOmhvdGtleScsIGtleSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvb2t1cCgpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRUZXh0KSB0aGlzLmVtaXQoJ2xvb2t1cDp3b3JkJywgc2VsZWN0ZWRUZXh0KTtcclxuICAgIH0sXHJcbiAgICBjaGVja1VSTCgpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0KCdjaGVjazp1cmwnLCB0aGlzLnVybClcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhKSB0aGlzLm9uVXJsRm91bmQodGhpcy5maWx0ZXJFbnRyaWVzKGRhdGEuZW50cmllcyksIGRhdGEucmVjZW50bHlPcGVuZWRFbnRyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVudHJpZXMsIGZvcmNlKSB7XHJcbiAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGVudHJpZXMpID8gZW50cmllcyA6IFtlbnRyaWVzXTtcclxuICAgICAgY29uc3QgZmlyc3RFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICBjb25zdCB1cmwgPSBpZ25vcmVIYXNoID8gdGhpcy5oYXNobGVzc1VSTCA6IHRoaXMudXJsO1xyXG5cclxuICAgICAgaWYgKGZvcmNlIHx8IGZpcnN0RW50cnkudXJsID09PSB1cmwpIHtcclxuICAgICAgICBfU1RPUkUuYWRkRW50cmllcyhlbnRyaWVzKTtcclxuICAgICAgICAvL19TVE9SRS5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICAgIGlmIChmb3JjZSkgdGhpcy5lbWl0KCdzZXQ6ZW50cmllcycsIGVudHJpZXMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Ib3RrZXkoa2V5KSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICd3JykgdGhpcy5sb29rdXAoKTtcclxuICAgIH0sXHJcbiAgICBvblVybEZvdW5kKGVudHJpZXMsIHJlY2VudGx5T3BlbmVkRW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGUoZW50cmllcywgdHJ1ZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmUgJiYgIXRoaXMuaW5pdGlhbGl6ZWQgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChyZWNlbnRseU9wZW5lZEVudHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdEVudHJ5ID0gZW50cmllc1swXTtcclxuICAgICAgICAgIGNvbnN0IGlnbm9yZUhhc2ggPSAhZmlyc3RFbnRyeS5oYXNoU2Vuc2l0aXZlO1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gaWdub3JlSGFzaCA/IHRoaXMuaGFzaGxlc3NVUkwgOiB0aGlzLnVybDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjZW50bHlPcGVuZWRFbnRyeS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgICBfU1RPUkUubmFtZSA9IHJlY2VudGx5T3BlbmVkRW50cnkubmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlOm1hcmtzJywgZW50cmllcyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaWx0ZXJFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgICAgbGV0IGxvY2tlZEVudHJpZXMgPSBbXSxcclxuICAgICAgICAgIGwgPSBlbnRyaWVzLmxlbmd0aCxcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXNFeGlzdCA9IGZhbHNlLFxyXG4gICAgICAgICAgbm9uTG9ja2VkRW50cmllcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5sb2NrZWQpIHtcclxuICAgICAgICAgIGxvY2tlZEVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgICBsb2NrZWRFbnRyaWVzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub25Mb2NrZWRFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG9ja2VkRW50cmllc0V4aXN0ICYmIG5vbkxvY2tlZEVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm1peGVkLWVudHJ5LXR5cGVzJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobm9uTG9ja2VkRW50cmllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnKTtcclxuICAgICAgICBlbnRyaWVzID0gW25vbkxvY2tlZEVudHJpZXNbMF1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobG9ja2VkRW50cmllcy5sZW5ndGgpIHtcclxuICAgICAgICBfU1RPUkUubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBlbnRyaWVzID0gbG9ja2VkRW50cmllcy5zb3J0KChhLCBiKSA9PiAobmV3IERhdGUoYS5sYXN0KSkgLSAobmV3IERhdGUoYi5sYXN0KSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9TVE9SRS5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGVudHJpZXM7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoZSkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6c2VsZWN0aW9uJywgIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCk7XHJcbiAgICB9LFxyXG4gICAgb25VcmxDaGFuZ2UodGFiLCBuZXdVcmwpIHtcclxuICAgICAgY29uc3QgZW50cnkgPSBfU1RPUkUuZW50cmllc1tPYmplY3Qua2V5cyhfU1RPUkUuZW50cmllcylbMF1dO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICFfU1RPUkUuaXNOZXcgJiZcclxuICAgICAgICBlbnRyeSAmJlxyXG4gICAgICAgIGVudHJ5Lmhhc2hTZW5zaXRpdmUgJiZcclxuICAgICAgICBfSEFTSExFU1MobmV3VXJsKSA9PT0gdGhpcy5oYXNobGVzc1VSTCAmJlxyXG4gICAgICAgIG5ld1VybCAhPT0gdGhpcy51cmxcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdoYXNoY2hhbmdlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgICB0aGlzLnJldHJ5QWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICAgIHRoaXMucmV0cnlBY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzZW5kUGFnZVN0YXRlKGluZm8pIHtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdlLXN0YXRlJywge1xyXG4gICAgICAgIHNlbGVjdGlvbjogIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCxcclxuICAgICAgICBib29rbWFyazogISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1ib29rbWFyay1hbmNob3InKSxcclxuICAgICAgICByZXRyeUFjdGl2ZTogdGhpcy5yZXRyeUFjdGl2ZVxyXG4gICAgICB9LCBpbmZvKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nOiAnc3RhcnQnLFxyXG4gICAgICAgICdyZXN0b3JlZDpyYW5nZSc6ICdwcm9ncmVzcycsXHJcbiAgICAgICAgJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJzogJ3Byb2dyZXNzJyxcclxuICAgICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnc3RvcCcsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bWlzYy1zZXR0aW5ncyc6ICdhY3RpdmF0ZSdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgc3RlcHM6IDAsXHJcbiAgICB0b3RhbFdpZHRoOiA0MTMsXHJcbiAgICBjdXJyZW50V2lkdGg6IDAsXHJcbiAgICBzdGVwTGVuZ3RoOiAwLFxyXG4gICAgY2FuY2VsSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtcHJvZ3Jlc3Ntb2RhbCcpO1xyXG5cclxuICAgICAgW3tcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2hlYWRlcicsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Jlc3RvcmluZycpXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2Nsb3NlJyxcclxuICAgICAgICB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdHlwZTogJ3RtcHJvZ3Jlc3NiYXInLFxyXG4gICAgICAgIGNoaWxkOiB7XHJcbiAgICAgICAgICB0eXBlOiAndG1wcm9ncmVzcydcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAndG1wcm9ncmVzc2NhbmNlbCcsXHJcbiAgICAgICAgdGV4dDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2NhbmNlbCcpXHJcbiAgICAgIH1dXHJcbiAgICAgICAgLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xyXG4gICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgdGhpc1tvYmoudHlwZV0gPSBlbDtcclxuICAgICAgICAgIGlmIChvYmoudGV4dCkgZWwudGV4dENvbnRlbnQgPSBvYmoudGV4dDtcclxuICAgICAgICAgIGlmIChvYmouY2hpbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmouY2hpbGQudHlwZSk7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgdGhpc1tvYmouY2hpbGQudHlwZV0gPSBjaGlsZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzdW1lKGxlbikge1xyXG4gICAgICB0aGlzLnN0ZXBzID0gbGVuO1xyXG4gICAgICB0aGlzLnN0ZXBMZW5ndGggPSB0aGlzLnRvdGFsV2lkdGggLyBsZW47XHJcbiAgICAgIHRoaXMuY3VycmVudFdpZHRoID0gMDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gMDtcclxuICAgIH0sXHJcbiAgICBzdGFydChsZW4pIHtcclxuICAgICAgaWYgKCFsZW4gfHwgIXRoaXMuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgIHRoaXMucmVzdW1lKGxlbik7XHJcbiAgICAgIGNvbnN0IGNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbEhhbmRsZXIgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpO1xyXG4gICAgICBjb25zdCBjbG9zZUhhbmRsZXIgPSB0aGlzLmNsb3NlSGFuZGxlciA9IHRoaXMuc3RvcC5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnRtcHJvZ3Jlc3NjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHByb2dyZXNzKCkge1xyXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY3VycmVudFdpZHRoICs9IHRoaXMuc3RlcExlbmd0aDtcclxuICAgICAgdGhpcy50bXByb2dyZXNzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgfSxcclxuICAgIHN0b3AoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2FuY2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50bXByb2dyZXNzY2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoKGUpIHt9XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgdGhpcy5lbWl0KCdjYW5jZWxlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgncHJvZ3Jlc3NiYXInKS50aGVuKHByb2dyZXNzYmFyID0+IHRoaXMuYWN0aXZlID0gcHJvZ3Jlc3NiYXIpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VMRUNUSU9OIGZyb20gJy4vc2VsZWN0aW9uJ1xyXG5cclxuY2xhc3MgUmVzdG9yZXJCYXNlIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVudHJ5KSB7XHJcbiAgICBzdXBlcihlbnRyeSlcclxuXHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLmxvc3QgPSBbXTtcclxuICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgdGhpcy5yZXN0b3JlZCA9IFtdO1xyXG4gICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQ6cmVzdG9yYXRpb24nLCBlbnRyeS5tYXJrcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5vbignY2FuY2VsZWQ6cmVzdG9yYXRpb24nLCAoKSA9PiB0aGlzLmNhbmNlbGVkID0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzSW5DaHVua3MoZGF0YSwgcHJvYywgY2IpIHtcclxuICAgIHByb2MgPSBwcm9jLmJpbmQodGhpcyk7XHJcbiAgICBjYiA9IGNiLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIHJlYygpIHtcclxuXHRcdFx0bGV0IGV4cGlyZSA9ICtuZXcgRGF0ZSgpICsgNTAwO1xyXG5cclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdHRyeSB7XHJcbiAgICAgICAgICBwcm9jKGRhdGEuc2hpZnQoKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmUtcmFuZ2UnLCBlLnRvU3RyaW5nKCkpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHR9IHdoaWxlIChkYXRhLmxlbmd0aCA+IDAgJiYgZXhwaXJlID4gK25ldyBEYXRlKCkpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDApO1xyXG5cdFx0XHRlbHNlIGNiKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuICByZXBvcnQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdsb3N0Om1hcmtzJywgdGhpcy5mYWlsdXJlUmVwb3J0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCB0aGlzLmVudHJ5Lm5hbWUsIHRoaXMucmVzdG9yZWQsIHRoaXMubG9zdCwgdGhpcy5hcmVhKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgUmVzdG9yZXJCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW50cnkpIHtcclxuICAgIHN1cGVyKGVudHJ5KVxyXG5cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgIHRoaXMuY2FjaGUgPSBbXTtcclxuICAgIHRoaXMucGhhc2UgPSAxO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25UcmlhbCA9IDA7XHJcbiAgICB0aGlzLmNodW5rRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgdGhpcy5vb20gPSBlbnRyeS5tYXJrcy5sZW5ndGggPT09IDEgJiYgZW50cnkubWFya3NbMF0uaWQgPT0gMTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aW1lcigpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XHJcbiAgICB0aGlzLl90aW1lciA9ICtuZXcgRGF0ZSgpICsgdGhpcy5jaHVua0R1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRpbWVyO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbnRyeSxcclxuICAgICAgICBub3cgPSBbXSwgcG9zdHBvbmVkID0gW10sXHJcbiAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICBsID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLCBtYXJrO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuXHJcbiAgICAgIHRoaXMuY29udmVydERlc2NyaXB0aW9uKG1hcmspLmNyZWF0ZVRlbXBPYmplY3QobWFyayk7XHJcblxyXG4gICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgIGVsc2Ugbm93LnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHBvc3Rwb25lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc3RvcmUoKTtcclxuICB9XHJcbiAgY29udmVydERlc2NyaXB0aW9uKG1hcmspIHtcclxuICAgIGlmICh0eXBlb2YgbWFyay5jb25kcy5vID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgY29udmVydGVkQ29uZHMgPSB7XHJcbiAgICAgICAgICAgIG86IGNvbmRzLnN0YXJ0T2Zmc2V0LFxyXG4gICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgbjI6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZU5hbWUsXHJcbiAgICAgICAgICAgIHAxOiBjb25kcy5maXJzdFRleHROb2RlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgcDM6IGNvbmRzLmZpcnN0UGFyZW50Tm9kZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwNDogY29uZHMuZmlyc3RHcmFtcGFOb2RlUG9zaXRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICBtYXJrLmNvbmRzID0gY29udmVydGVkQ29uZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgY3JlYXRlVGVtcE9iamVjdChtYXJrKSB7XHJcbiAgICBsZXQgdGV4dCA9IG1hcmsudGV4dCxcclxuICAgICAgICB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLFxyXG4gICAgICAgIHNxdWVlemVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgIG1hcmsudGVtcCA9IHtcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHRyaW1tZWRUZXh0OiB0cmltbWVkVGV4dCxcclxuICAgICAgdHJpbW1lZFRleHRMZW5ndGg6IHRyaW1tZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgc3F1ZWV6ZWRUZXh0OiBzcXVlZXplZFRleHQsXHJcbiAgICAgIHNxdWVlemVkVGV4dExlbmd0aDogc3F1ZWV6ZWRUZXh0Lmxlbmd0aCxcclxuICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICBwb3NzaWJsZUVuZFBvc2l0aW9uczogW10sXHJcbiAgICAgIHBvc3NpYmxlU3RhcnROb2RlczogW10sXHJcbiAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtYXJrLnN5bmNlZCA9IHRoaXMuZW50cnkuc3luY2VkO1xyXG4gIH1cclxuICByZXN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMucGhhc2UgPT09IDIpIHRoaXMuc29ydFF1ZXVlQnlJZCgpO1xyXG5cclxuICAgIGxldCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnF1ZXVlLnNoaWZ0KCksXHJcbiAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgLmdldFRleHRQb3NpdGlvbnMobWFya3MsIGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5waGFzZSA9PT0gMSAmJiBsZW5ndGggPiAxKVxyXG4gICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgdGhpcy5maW5kUG9zc2libGVFeHRyZW1hKClcclxuICAgICAgICAgIC5ydWxlT3V0TXVsdGlwbGVzKClcclxuICAgICAgICAgIC5yZXN0b3JlUmFuZ2VzKCk7XHJcblxyXG4gICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggJiYgIXRoaXMuY2FuY2VsZWQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA8ICtuZXcgRGF0ZSgpKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzdG9yZSgpLCAwKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5yZXBvcnQoKTtcclxuICB9XHJcbiAgc29ydFF1ZXVlQnlJZCgpIHtcclxuICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IG1hcmtzID8gbWFya3MubGVuZ3RoIDogMCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbWFyaywgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmICghbWFya3NbbF0ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgbWFyayA9IG1hcmtzW2xdWzBdO1xyXG4gICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgIH1cclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuXHJcbiAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5xdWV1ZS5wdXNoKFt0ZW1wW2ldXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgbGV0IHRyaW1tZWRTZWxlY3Rpb25UZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCxcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHNxdWVlemVkVGV4dCwgc3F1ZWV6ZWRUZXh0TGVuZ3RoLCBwLCBlbmRQb3NpdGlvbjtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHAgPSB1bmRlZmluZWQ7XHJcbiAgICAgIG1hcmsgPSBtYXJrc1tsXTtcclxuICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICBpZiAoIW1hcmtUZW1wKSB7XHJcbiAgICAgICAgbWFya3Muc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgZW5kUG9zaXRpb25zID0gZW5kUG9zaXRpb25zLmNvbmNhdChtYXJrVGVtcC5wb3NzaWJsZUVuZFBvc2l0aW9ucyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzcXVlZXplZFRleHQgPSBtYXJrVGVtcC5zcXVlZXplZFRleHQ7XHJcbiAgICAgICAgc3F1ZWV6ZWRUZXh0TGVuZ3RoID0gbWFya1RlbXAuc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAocCAhPT0gLTEpIHtcclxuICAgICAgICAgIGlmIChwID09PSB1bmRlZmluZWQpIHAgPSAtMTtcclxuICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHNxdWVlemVkVGV4dCwgcCArIDEpO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBwICsgc3F1ZWV6ZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucHVzaChbcCwgZW5kUG9zaXRpb24sIG1hcmtdKTtcclxuICAgICAgICAgIG1hcmtUZW1wLnBvc3NpYmxlRW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wdXNoKFtwLCBlbmRQb3NpdGlvbiwgbWFya10pO1xyXG4gICAgICAgICAgZW5kUG9zaXRpb25zLnB1c2goZW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgIGlmICghbWFya1RlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzEnKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcclxuICAgIGxldCBsID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgcG9zLCBzdGFydCwgdDtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIHBvcyA9IHBvc2l0aW9uc1tsXTtcclxuICAgICAgc3RhcnQgPSBwb3NbMF07XHJcblxyXG4gICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgZWxzZSB0ZW1wW3N0YXJ0XSA9IHBvcztcclxuICAgIH1cclxuICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBpIDwgdDsgaSsrKVxyXG4gICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgfVxyXG4gIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICBwID0gcG9zaXRpb25zLmxlbmd0aCxcclxuICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICBwb3MxLCBwb3MyLCBpLCBtMSwgbTIsIGlkMSwgaWQyLCBpZDtcclxuXHJcbiAgICBpZiAocCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHAtLSA+IDEpIHtcclxuICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICBwb3MyID0gcG9zaXRpb25zW3BdO1xyXG4gICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICBtMiA9IHBvczJbMl07XHJcbiAgICAgICAgaWQxID0gbTEuaWQ7XHJcbiAgICAgICAgaWQyID0gbTIuaWQ7XHJcblxyXG4gICAgICAgIGlmIChpZDEgPT09IGlkMikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG5cclxuICAgICAgICAgIGlmIChpZDEgPCBpZDIpIHtcclxuICAgICAgICAgICAgaWQgPSBpZDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBvc3Rwb25lZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGlkMTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwOyBpKyspXHJcbiAgICAgICAgdGhpcy5jdXRPdXRGb3IocG9zdHBvbmVkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjdXRPdXRGb3IoaWQpIHtcclxuICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUocC0tKSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbnNbcF1bMl0uaWQgPT09IGlkKVxyXG4gICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3Rwb25lKG1hcmspIHtcclxuICAgIGxldCBxdWV1ZSA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgIGFscmVhZHlJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYWxyZWFkeUluY2x1ZGVkKVxyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICB9XHJcbiAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgIGxldCBub2RlcyA9IHRoaXMuYm9keVRleHROb2RlcyxcclxuICAgICAgICBuID0gbm9kZXMgPyBub2Rlcy5sZW5ndGggOiAwLFxyXG4gICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgcGhhc2UgPSB0aGlzLnBoYXNlLFxyXG4gICAgICAgIGNhY2hlID0gdGhpcy5jYWNoZSA9IFtdLFxyXG4gICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgIGkgPSAwLCBjaGFycyA9IDAsXHJcbiAgICAgICAgbmV4dFN0YXJ0Rm91bmQsIGVuZGluZ3NJblRoaXNOb2RlLFxyXG4gICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgIG1hcmssIGRpZmYsIGwsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBlLCBmLCBpZCwgcCwgcSwgeCwgbSxcclxuICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0LCBzdGFydEZvdW5kRm9yLCBwb3N0cG9uZWQsIGhhc0VuZGluZ3NJblRoaXNOb2RlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgbm9kZXNUZXh0ID0gdGhpcy5zcXVlZXplKG5vZGUuZGF0YSk7XHJcbiAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNoYXJzICs9IG5vZGVzVGV4dExlbmd0aDtcclxuICAgICAgbCA9IGluZGljZXMubGVuZ3RoO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgIHBvc3Rwb25lZCA9IFtdO1xyXG4gICAgICBoYXNFbmRpbmdzSW5UaGlzTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGluZGljZXNbbF1bMF07XHJcbiAgICAgICAgZW5kUG9zaXRpb24gPSBpbmRpY2VzW2xdWzFdO1xyXG4gICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgIGlkID0gbWFyay5pZDtcclxuXHJcbiAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IgPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciB8fCBbXTtcclxuICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5pbmNsdWRlcyhzdGFydFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVTdGFydE5vZGVzLmxlbmd0aCA8IG1hcmsudGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zYXRpc2ZpZXNEZXNjcmlwdGlvbihtYXJrLCBub2RlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXMucHVzaCh7IG5vZGU6IG5vZGUsIHBvczogaSB9KTtcclxuICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIHN0YXJ0Rm91bmRGb3IucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICFtYXJrLnRlbXAuZW5kRm91bmRGb3IuaW5jbHVkZXMoZW5kUG9zaXRpb24pICYmXHJcbiAgICAgICAgICAoY2hhcnMgLSBlbmRQb3NpdGlvbikgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHN0YXJ0Rm91bmRGb3IpIDwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0ID0gdGhpcy5maW5kRm9jdXNPZmZzZXQobWFyaywgbm9kZSwgZW5kUG9zaXRpb24gLSAoY2hhcnMgLSBub2Rlc1RleHRMZW5ndGgpKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgIG1hcmsudGVtcC5lbmRGb3VuZEZvci5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRW5kc1tzdGFydFBvc2l0aW9uXSA9IHtcclxuICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogcG9zc2libGVGb2N1c09mZnNldCxcclxuICAgICAgICAgICAgICBwb3M6IGlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICBzYXRpc2ZpZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAgPSBwb3N0cG9uZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICBpZiAoY2hhcnMgPiB0aGlzLm1heFBvc2l0aW9uKSBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChwaGFzZSAhPT0gMSB8fCB0aGlzLm9vbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbWFyayA9IHRoaXMubWFya3NbaV07XHJcbiAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXMobWFyay5pZCkpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgdGhpcy5mYWlsdXJlUmVwb3J0W21hcmsuaWRdID0geyB0ZXh0OiBtYXJrLnRleHQsIHJlYXNvbjogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGVfcmVzdG9yYXRpb25fZmFpbHVyZV9yZWFzb25fMicpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGUsXHJcbiAgICAgICAgaSA9IGNhY2hlLmxlbmd0aCxcclxuICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIG5vZGUsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgZ3JhbmRncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxLFxyXG4gICAgICAgIHBvc3NpYmxlRW5kcywgc3RhcnRGb3VuZEZvciwgY29uZHMsIHN0YXJ0T2Zmc2V0LCB0ZW1wLCB0ZXh0TGVuZ3RoLCBzdGFydDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIG1hcmsgPSBjYWNoZVtpXTtcclxuICAgICAgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgcG9zc2libGVTdGFydE5vZGVzID0gdGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgIHBvc3NpYmxlRW5kcyA9IHRlbXAucG9zc2libGVFbmRzO1xyXG4gICAgICBzdGFydEZvdW5kRm9yID0gdGVtcC5zdGFydEZvdW5kRm9yXHJcbiAgICAgIHAgPSBwb3NzaWJsZVN0YXJ0Tm9kZXMubGVuZ3RoO1xyXG4gICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY29uZHMubztcclxuICAgICAgdGV4dExlbmd0aCA9IHRlbXAudGV4dExlbmd0aDtcclxuXHJcbiAgICAgIGlmIChwID4gMSkge1xyXG4gICAgICAgIHdoaWxlIChwLS0pIHtcclxuICAgICAgICAgIG5vZGUgPSBwb3NzaWJsZVN0YXJ0Tm9kZXNbcF0ubm9kZTtcclxuICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAoIWdyYW1wYSB8fCBjb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gocCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSBwID0gMDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkgcCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHEgPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5ub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuICAgICAgICAgICAgICBncmFuZGdyYW5kZ3JhbXBhID0gZ3JhbmRncmFtcGEgJiYgZ3JhbmRncmFtcGEucGFyZW50Tm9kZSA/IGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICghZ3JhbmRncmFuZGdyYW1wYSB8fCBjb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbmRncmFtcGEsIGdyYW5kZ3JhbXBhKSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHBvc3NpYmxlRW5kc1tzdGFydEZvdW5kRm9yW3FdXS5vZmZzZXQgLSBzdGFydE9mZnNldCkgPT09IHRleHRMZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwID0gcTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHAgPSAwO1xyXG5cclxuICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgIHN0YXJ0ID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuICAgICAgbWFyay50ZW1wLnN0YXJ0Tm9kZSA9IHN0YXJ0Lm5vZGU7XHJcbiAgICAgIG1hcmsudGVtcC5zdGFydE5vZGVQb3NpdGlvbiA9IHN0YXJ0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuc2V0TWF0Y2hpbmdFbmQobWFyaywgcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvcltwXSxcclxuICAgICAgICBlbmQgPSBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dO1xyXG5cclxuICAgIG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgICBtYXJrLnRlbXAuZW5kTm9kZVBvc2l0aW9uID0gZW5kLnBvcztcclxuICAgIG1hcmsudGVtcC5mb2N1c09mZnNldCA9IGVuZC5vZmZzZXQ7XHJcbiAgfVxyXG4gIHNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpIHtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICBncmFtcGEgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBkZXNjcmlwdGlvbi5vLFxyXG4gICAgICAgIHJlbGV2YW50Tm9kZVRleHQgPSBub2RlLmRhdGEuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0KS50cmltKCksXHJcbiAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZW1wLnRyaW1tZWRUZXh0LFxyXG4gICAgICAgIG0gPSBtYXJrLnRlbXAudHJpbW1lZFRleHRMZW5ndGgsXHJcbiAgICAgICAgdGV4dHNNYXRjaDtcclxuXHJcbiAgICBpZiAobSA8PSBsKVxyXG4gICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRleHRzTWF0Y2ggPSB0aGlzLnNxdWVlemUobWFya1RleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpKSA9PT0gMDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0ZXh0c01hdGNoICYmXHJcbiAgICAgIChwYXJlbnROb2RlLm5vZGVOYW1lID09PSBkZXNjcmlwdGlvbi5uMSB8fCAoZGVzY3JpcHRpb24ubjEgPT09ICdUTScgJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSkpICYmXHJcbiAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgIHRoaXMud2hpY2hDaGlsZChwYXJlbnROb2RlLCBub2RlKSA9PT0gZGVzY3JpcHRpb24ucDFcclxuICAgICk7XHJcbiAgfVxyXG4gIGZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBuKSB7XHJcbiAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgbCA9IG5vZGVUZXh0Lmxlbmd0aCxcclxuICAgICAgICBpID0gMCwgY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3F1ZWV6ZShub2RlVGV4dFtpXSkpIGNvdW50ZXIrKztcclxuXHJcbiAgICAgIGlmIChjb3VudGVyID09PSBuKSByZXR1cm4gKC9cXHMkLy50ZXN0KG1hcmsudGV4dCkgPyBpICsgMiA6IGkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzdG9yZVJhbmdlcygpIHtcclxuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgIGkgPSBtYXJrcy5sZW5ndGgsXHJcbiAgICAgICAgbWFyaywgbWFya1RlbXAsIHN0YXJ0LCBlbmQsIGZvY3VzT2Zmc2V0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgbWFyayA9IG1hcmtzW2ldO1xyXG4gICAgICBtYXJrVGVtcCA9IG1hcmsudGVtcDtcclxuICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgIGVuZCA9IG1hcmtUZW1wLmVuZE5vZGU7XHJcbiAgICAgIGZvY3VzT2Zmc2V0ID0gbWFya1RlbXAuZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSkge1xyXG4gICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydFttYXJrLmlkXSA9IHsgdGV4dDogbWFyay50ZXh0LCByZWFzb246IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmVfcmVhc29uXzMnKSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgIHJhbmdlLnNldEVuZChlbmQsIGZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5zZWxmLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGYuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgLy9zZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgICAgIGRlbGV0ZSBtYXJrLnN5bmNlZDtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZWQucHVzaChtYXJrKTtcclxuICAgICAgICAgIHNlbGVjdGlvbi5yZWNvbGxlY3ROb2RlcyhtYXJrKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVtaXQoJ2ZhaWxlZDpyZXN0b3JlLXJhbmdlJywgZS50b1N0cmluZygpKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBtYXJrLnRlbXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEJvZHlTZWxlY3Rpb24oZWwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uVHJpYWwrKztcclxuXHJcbiAgICBpZiAodGhpcy5waGFzZSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKGVsKTtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHJpYWwgPCA0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRCb2R5U2VsZWN0aW9uKGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dCA9ICcgJztcclxuICAgICAgICAgIHRoaXMuYm9keVRleHROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUodGhpcy5zZWxlY3Rpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2R5VGV4dE5vZGVzID0gdGhpcy5zZWxlY3Rpb24ubm9kZXMgPyB0aGlzLnNlbGVjdGlvbi5ub2Rlcy5zbGljZSgpIDogW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpID8gdGV4dC5yZXBsYWNlKC9cXHR8XFxzfFxcbnxcXHIvZywgJycpIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICB3aGljaENoaWxkKHBhcmVudCwgY2hpbGQsIGNvbnRleHQpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGNoaWxkcmVuID0gY2hpbGQubm9kZVR5cGUgPT09IDMgPyBwYXJlbnQuY2hpbGROb2RlcyA6IHBhcmVudC5jaGlsZHJlbixcclxuXHRcdCAgICBjID0gY2hpbGRyZW4ubGVuZ3RoLFxyXG5cdFx0ICAgIHBvcyA9IDAsIGkgPSAwLCBjdXJyZW50Q2hpbGQ7XHJcblxyXG4gICAgZm9yICggOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnRDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGQpIHJldHVybiBwb3M7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZU5hbWUgPT09IGNvbnRleHQpIHBvcysrO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICBpZiAoIShjdXJyZW50Q2hpbGQubm9kZVR5cGUgPT09IDMgJiYgIWN1cnJlbnRDaGlsZC5kYXRhKSkgcG9zKys7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEltbXV0UmVzdG9yZXIgZXh0ZW5kcyBSZXN0b3JlckJhc2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnRyeSkge1xyXG4gICAgc3VwZXIoZW50cnkpXHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IFsuLi5lbnRyeS5tYXJrcy5zb3J0KChtMSwgbTIpID0+IG0xLmlkIC0gbTIuaWQpXTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NJbkNodW5rcyhtYXJrcywgdGhpcy5yZXN0b3JlUmFuZ2UsIHRoaXMucmVwb3J0KTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVSYW5nZShtYXJrKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxlZCkgcmV0dXJuIHRoaXMubWFya3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbmRzID0gbWFyay5jb25kcztcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29uZHMucztcclxuICAgIGNvbnN0IGVuZCA9IGNvbmRzLmU7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbjtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmdldE5vZGUoc3RhcnQucCksIHN0YXJ0Lm8pO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5nZXROb2RlKGVuZC5wKSwgZW5kLm8pO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIHRoaXMuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBtYXJrKTtcclxuICAgICAgZGVsZXRlIG1hcmsuc3luY2VkO1xyXG4gICAgICB0aGlzLnJlc3RvcmVkLnB1c2gobWFyayk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsIGUudG9TdHJpbmcoKSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXROb2RlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB0ZXh0Tm9kZVBvc2l0aW9uID0gcG9zaXRpb25bMF07XHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgbCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZShsLS0gPiAxKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3Bvc2l0aW9uW2xdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlLmNoaWxkTm9kZXNbdGV4dE5vZGVQb3NpdGlvbl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdyZXN0b3JlJyxcclxuICAgICAgICAnbG9zdDptYXJrcyc6ICdvbkZhaWx1cmUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdyZXN1bWVkOm1hcmtlcnMnOiAncmV0cnknXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZW50cmllczogbnVsbCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgcmVzdG9yZWQ6IDAsXHJcbiAgICBmYWlsZWQ6IDAsXHJcbiAgICBmYWlsdXJlUmVwb3J0OiB7fSxcclxuXHJcbiAgICByZXN0b3JlKGVudHJpZXMpIHtcclxuICAgICAgaWYgKCFlbnRyaWVzKSByZXR1cm47XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgZW50cmllcyA9IFtlbnRyaWVzXTtcclxuXHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgIHRoaXMuY291bnQgPSBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmltbXV0KSBuZXcgSW1tdXRSZXN0b3JlcihlbnRyeSk7XHJcbiAgICAgICAgZWxzZSBuZXcgUmVzdG9yZXIoZW50cnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMucmVzdG9yZWQgPSAwO1xyXG4gICAgICB0aGlzLmZhaWxlZCA9IDA7XHJcbiAgICAgIHRoaXMuZmFpbHVyZVJlcG9ydCA9IHt9O1xyXG4gICAgfSxcclxuICAgIHJldHJ5KGVudHJ5KSB7XHJcbiAgICAgIGVudHJ5ID0gZW50cnkgPyBbZW50cnldIDogdGhpcy5lbnRyaWVzO1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgICB0aGlzLnJlc3RvcmUoZW50cnkpO1xyXG4gICAgfSxcclxuICAgIG9uRmFpbHVyZShyZXBvcnQpIHtcclxuICAgICAgdGhpcy5mYWlsZWQrKztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHRoaXMuZmFpbHVyZVJlcG9ydFtpXSA9IHJlcG9ydFtpXTtcclxuICAgIH0sXHJcbiAgICBvbkZpbmlzaGVkUmVzdG9yYXRpb24oKSB7XHJcbiAgICAgIGlmICgrK3RoaXMucmVzdG9yZWQgPT09IHRoaXMuY291bnQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZpbmlzaGVkOmFsbC1yZXN0b3JhdGlvbnMnKTtcclxuICAgICAgICBpZiAodGhpcy5mYWlsZWQpIHRoaXMuZW1pdCgnZmFpbGVkOnJlc3RvcmF0aW9uJywgdGhpcy5nZXRSZXBvcnQoKSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVwb3J0KCkge1xyXG4gICAgICBjb25zdCByZXBvcnQgPSB0aGlzLmZhaWx1cmVSZXBvcnQ7XHJcbiAgICAgIGxldCBtc2cgPSAnJztcclxuICAgICAgZm9yIChsZXQgaSBpbiByZXBvcnQpIHtcclxuICAgICAgICBtc2cgKz0gYCR7cmVwb3J0W2ldLnJlYXNvbn0gOiAke3JlcG9ydFtpXS50ZXh0fVxcbmA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1NFTEVDVElPTiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdE5vZGVzKClcclxuICAgICAgICAgICAgLnJlZHVjZVRvT25lUmFuZ2UoKVxyXG4gICAgICAgICAgICAudXBkYXRlKClcclxuICAgICAgICAgICAgLmFkanVzdCgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAucmV0cmlldmVUZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHsgc2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpOyB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpLFxyXG4gICAgICAgIGZpbHRlciA9IHdob2xlRG9jdW1lbnQgP1xyXG4gICAgICAgICAgKG5vZGUpID0+IChzZWxmLmlzU2VsZWN0YWJsZShub2RlKSAmJiAhc2VsZi5pc0JsYW5rKG5vZGUpICYmIHNlbGYuaGFzTm9ybWFsUGFyZW50KG5vZGUpKSA6XHJcbiAgICAgICAgICAobm9kZSkgPT4gKHNlbGVjdGlvbi5jb250YWluc05vZGUobm9kZSkgJiYgIXNlbGYuaXNCbGFuayhub2RlKSAmJiBzZWxmLmhhc05vcm1hbFBhcmVudChub2RlKSksXHJcblxyXG4gICAgICAgIGl0ZXJhdG9yID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihjb250YWluZXIsIE5vZGVGaWx0ZXIuU0hPV19URVhULCB7XHJcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSksXHJcblxyXG4gICAgICAgIHRlbXBSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgbm9kZXMgPSBbXSwgcGFyZW50Tm9kZXMgPSBbXSxcclxuICAgICAgICB0ZXh0Tm9kZSwgcGFyZW50LCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIHdoaWxlKHRleHROb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkge1xyXG4gICAgICBub2Rlcy5wdXNoKHRleHROb2RlKTtcclxuICAgIH1cclxuICAgIG5vZGVzID0gdGhpcy50cmltU2VsZWN0aW9uKG5vZGVzKTtcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLm9wdGlvbnMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMucmVkdWNlVG9TZWxlY3RhYmxlKG5vZGVzKSA6IG5vZGVzO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlcyA9IHRoaXMuY29sbGVjdFBhcmVudE5vZGVzKHRoaXMubm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZWNvbGxlY3ROb2RlcyhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrV3JhcHBlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXj1cIicgKyBtYXJrLmlkICsgJ19cIl0nKSk7XHJcbiAgICBjb25zdCBtID0gbWFya1dyYXBwZXJzLmxlbmd0aDtcclxuICAgIGNvbnN0IG5ld1NlZ21lbnQgPSBtYXJrV3JhcHBlcnMubWFwKGVsID0+IGVsLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGNvbnN0IHByZXYgPSBtYXJrV3JhcHBlcnNbMF0ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgY29uc3QgbmV4dCA9IG1hcmtXcmFwcGVyc1ttLTFdLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ID0gbWFyay50ZW1wLnN0YXJ0Tm9kZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgZW5kID0gbWFyay50ZW1wLmVuZE5vZGVQb3NpdGlvbjtcclxuXHJcbiAgICBpZiAocHJldiAmJiBwcmV2Lm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIG5ld1NlZ21lbnQudW5zaGlmdChwcmV2KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgbmV3U2VnbWVudC5wdXNoKG5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZXMuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIC4uLm5ld1NlZ21lbnQpO1xyXG4gIH1cclxuICB0cmltU2VsZWN0aW9uKG5vZGVzKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcbiAgICBsZXQgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBmaXJzdE5vZGUgPSBub2Rlc1swXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBmaXJzdE5vZGUgJiYgZmlyc3ROb2RlLmRhdGEudHJpbVJpZ2h0KCkubGVuZ3RoIDw9IHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICBub2Rlcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3ROb2RlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBsYXN0Tm9kZSAmJiB0aGlzLmlzQmxhbmsobGFzdE5vZGUuZGF0YS5zdWJzdHIoMCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSkpIHtcclxuICAgICAgICBub2Rlcy5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuICByZWR1Y2VUb1NlbGVjdGFibGUobm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbCA9IHRoaXMuc2VsZjtcclxuICAgIGNvbnN0IHJnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2UocmcpO1xyXG5cclxuICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICByZy5zZWxlY3ROb2RlKG5vZGUpO1xyXG4gICAgICByZXR1cm4gISFzZWwudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbC5hZGRSYW5nZSh0aGlzLnJhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIGNvbGxlY3RQYXJlbnROb2Rlcyhub2Rlcykge1xyXG4gICAgbGV0IGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgcGFyZW50cyA9IFtdLCBpID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcGFyZW50cy5wdXNoKG5vZGVzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH1cclxuICByZXRyaWV2ZVRleHQoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcyxcclxuICAgICAgICBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG5vZGVUZXh0cyA9IFtdLFxyXG4gICAgICAgIHRleHQ7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIG5vZGVUZXh0cy5wdXNoKG5vZGVzW2ldLmRhdGEpO1xyXG5cclxuICAgIGwgLT0gMTtcclxuXHJcbiAgICBpZiAobm9kZVRleHRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0LCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAvL25vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhZyA9IHBhcmVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGFnICE9PSAnU0NSSVBUJyAmJiB0YWcgIT09ICdTVFlMRScgJiYgdGFnICE9PSAnTElOSycgJiYgdGFnICE9PSAnTUVUQScgJiZcclxuICAgICAgdGFnICE9PSAnQkFTRScgJiYgdGFnICE9PSAnVElUTEUnICYmIHRhZyAhPT0gJ05PU0NSSVBUJyAmJlxyXG4gICAgICB0YWcgIT09ICdJTUcnICYmIHRhZyAhPT0gJ0lGUkFNRScgJiYgdGFnICE9PSAnRU1CRUQnICYmIHRhZyAhPT0gJ1BBUkFNJyAmJlxyXG4gICAgICB0YWcgIT09ICdWSURFTycgJiYgdGFnICE9PSAnQVVESU8nICYmIHRhZyAhPT0gJ1NPVVJDRScgJiYgdGFnICE9PSAnVFJBQ0snICYmXHJcbiAgICAgIHRhZyAhPT0gJ0NBTlZBUycgJiYgdGFnICE9PSAnTUFQJyAmJiB0YWcgIT09ICdBUkVBJyAmJlxyXG4gICAgICB0YWcgIT09ICdNQVRIJyAmJiB0YWcgIT09ICdPQkpFQ1QnICYmXHJcbiAgICAgICF0aGlzLmlzQ2hpbGRPZihwYXJlbnQsICdzdmcnKSAvLyYmXHJcbiAgICAgIC8vIXRoaXMuaXNDaGlsZE9mKHBhcmVudCwgJ21hdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNDaGlsZE9mKG5vZGUsIG5vZGVUeXBlKSB7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc0JsYW5rKG5vZGUpIHtcclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykgdGV4dCA9IG5vZGU7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuZGF0YSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlLmRhdGE7XHJcbiAgICAgIGVsc2UgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0LnNlYXJjaCgvW15cXHNcXG5cXHJcXHRdL2cpID09PSAtMTtcclxuICB9XHJcbiAgaXNCYWNrd2FyZHMoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICBwb3NpdGlvbiA9IGFuY2hvci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9zaXRpb24gPT09IDIgfHxcclxuICAgICAgcG9zaXRpb24gPT09IDEwIHx8XHJcbiAgICAgICghcG9zaXRpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA+IHNlbGVjdGlvbi5mb2N1c09mZnNldCkpO1xyXG4gIH1cclxuICBpc1NpbXBsZSgpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3JOb2RlLFxyXG4gICAgICAgIGZvY3VzTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgYW5jaG9yTm9kZSA9PT0gZm9jdXNOb2RlICYmXHJcbiAgICAgIGFuY2hvck5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgKCFhbmNob3JOb2RlLm5leHRTaWJsaW5nIHx8IChhbmNob3JOb2RlLm5leHRTaWJsaW5nLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGZvY3VzTm9kZSkgIT09IDQpKSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0YWJsZShub2RlKSB7XHJcbiAgICB0aGlzLnJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICByZXR1cm4gISF0aGlzLnNlbGYudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmspIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDptaXNjLXNldHRpbmdzJzogJ3VwZGF0ZVN0YXRlJyxcclxuICAgICAgICAnYWRkZWQ6bm90ZSc6ICdvbk5vdGVBZGRlZCcsXHJcbiAgICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtBZGRlZCcsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ29uTGFzdE5vdGVSZW1vdmVkJyxcclxuICAgICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdvbkJvb2ttYXJrUmVtb3ZlZCdcclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIGFkZExpc3RlbmVyc01hbnVhbGx5OiB0cnVlLFxyXG4gICAgZWw6IG51bGwsXHJcblxyXG4gICAgYXR0YWNoZWQ6IGZhbHNlLFxyXG5cclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgbm90ZXM6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgYm9va21hcms6IHtcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaG93bjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBib29rbWFyazogZmFsc2UsXHJcbiAgICBub3RlczogZmFsc2UsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU3RhdGUoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuYm9va21hcmsuc2hvdyA9IGJtaWNvbjtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHRoaXMuYnV0dG9ucy5ub3Rlcy5zaG93ID0gbm90ZWljb24pO1xyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3Qgc2hvdWxkQXR0YWNoID1cclxuICAgICAgICAodGhpcy5idXR0b25zLmJvb2ttYXJrLnNob3cgJiYgdGhpcy5ib29rbWFyaykgfHxcclxuICAgICAgICAodGhpcy5idXR0b25zLm5vdGVzLnNob3cgJiYgdGhpcy5ub3Rlcyk7XHJcblxyXG4gICAgICBpZiAoc2hvdWxkQXR0YWNoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmF0dGFjaGVkICYmICFzaG91bGRBdHRhY2gpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucywgYnRuO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmF0dGFjaGVkKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RtdWknKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgYiBpbiBidXR0b25zKSB7XHJcbiAgICAgICAgYnRuID0gYnV0dG9uc1tiXTtcclxuICAgICAgICBpZiAoYnRuLnNob3cgJiYgIWJ0bi5zaG93biAmJiB0aGlzW2JdKSB0aGlzLmFkZEJ1dHRvbihiKTtcclxuICAgICAgICBlbHNlIGlmIChidG4uc2hvd24gJiYgKCF0aGlzW2JdIHx8ICFidG4uc2hvdykpIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghYnV0dG9ucy5ub3Rlcy5zaG93biAmJiAhYnV0dG9ucy5ib29rbWFyay5zaG93bikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcclxuICAgICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBiIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICAgIGlmIChidXR0b25zW2JdLnNob3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uKGIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG11aSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgICAgY29uc3Qgbm90ZXNCdXR0b24gPSB0aGlzLmJ1dHRvbnMubm90ZXMuZWwgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3Rlc3RvZ2dsZScpO1xyXG4gICAgICBjb25zdCBib29rbWFya0J1dHRvbiA9IHRoaXMuYnV0dG9ucy5ib29rbWFyay5lbCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICAgIG5vdGVzQnV0dG9uLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgICBib29rbWFya0J1dHRvbi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICAgIH0sXHJcbiAgICBhZGRCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgY29uc3QgaGFuZGxlciA9IGJ0bi5oYW5kbGVyID0gdHlwZSA9PT0gJ25vdGVzJyA/XHJcbiAgICAgICAgdGhpcy50b2dnbGVOb3Rlcy5iaW5kKHRoaXMpIDpcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm9va21hcmsuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgIHRtdWkuYXBwZW5kQ2hpbGQoYnRuLmVsKTtcclxuICAgICAgYnRuLnNob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVCdXR0b24odHlwZSkge1xyXG4gICAgICBjb25zdCB0bXVpID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5idXR0b25zW3R5cGVdO1xyXG5cclxuICAgICAgdG11aS5yZW1vdmVDaGlsZChidG4uZWwpO1xyXG4gICAgICBidG4uc2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGJ0bi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bi5oYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3RtdWlwb3MnKVxyXG4gICAgICAgIC50aGVuKHBvcyA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3Muc3BsaXQoJy0nKS5tYXAocCA9PiBwICsgJzoxcHg7Jykuam9pbignICcpKSk7XHJcbiAgICB9LFxyXG4gICAgb25Ob3RlQWRkZWQoKSB7XHJcbiAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uTGFzdE5vdGVSZW1vdmVkKCkge1xyXG4gICAgICB0aGlzLm5vdGVzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgb25Cb29rbWFya0FkZGVkKCkge1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICBvbkJvb2ttYXJrUmVtb3ZlZCgpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RlcycpO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQm9va21hcmsoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnc2Nyb2xsLXRvLWJvb2ttYXJrJyk7XHJcbiAgICB9XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdpbmplY3Rpb24nLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nLFxyXG5cdFx0XHQnZmFpbGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3N1Y2NlZWRlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdjYW5jZWxlZDpyZXN0b3JhdGlvbicsXHJcbiAgICAgICdmYWlsZWQ6cmVzdG9yZS1yYW5nZScsXHJcbiAgICAgICdjYW5jZWxlZDpzYXZlLWFmdGVyLWNhbmNlbGVkLXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnLFxyXG4gICAgICAnd2FybjptaXhlZC1lbnRyeS10eXBlcycsXHJcbiAgICAgICd3YXJuOm11bHRpcGxlLXVubG9ja2VkLWVudHJpZXMnLFxyXG4gICAgICAncGFnZS1zdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZScsXHJcbiAgICAgICd2aXN1YWxseS1vcmRlcmVkOm1hcmtzJ1xyXG4gICAgXVxyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==