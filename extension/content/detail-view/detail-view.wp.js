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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/detail-view/index.js");
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
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PRIVPORT = exports._PORT = exports._STORE = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

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
exports._PRIVPORT = _port._PRIVPORT;
exports._L10N = _l10n2["default"];
exports._ERRORTRACKER = _errorTracker2["default"];
exports._HASHLESS = _hashless._HASHLESS;

/***/ }),

/***/ "./content/detail-view/index.js":
/*!**************************************!*\
  !*** ./content/detail-view/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/detail-view/sass/index.scss");

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

__webpack_require__(/*! ./modules/header */ "./content/detail-view/modules/header.js");

__webpack_require__(/*! ./modules/meta */ "./content/detail-view/modules/meta.js");

__webpack_require__(/*! ./modules/marks */ "./content/detail-view/modules/marks.js");

//import './modules/notes'
(0, _utils._L10N)();
new _utils._MODULE({
  autoinit: function autoinit() {
    var _this = this;

    var name = decodeURIComponent(window.location.hash).slice(1);
    browser.storage.sync.get().then(function (storage) {
      if (Object.keys(storage.history.entries).includes(name)) return storage.history.entries[name];
      return browser.storage.local.get().then(function (storage) {
        if (Object.keys(storage.history.entries).includes(name)) return storage.history.entries[name];
      });
    }).then(function (entry) {
      _this.emit('entry', entry);

      document.title = entry.name;
    });
  }
});

/***/ }),

/***/ "./content/detail-view/modules/header.js":
/*!***********************************************!*\
  !*** ./content/detail-view/modules/header.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('header'),
  events: {
    ENV: {
      'entry': 'render'
    }
  },
  entry: null,
  setTitle: function setTitle(entry) {
    this.el.innerText = entry.name;
  },
  setTag: function setTag(entry) {
    var tag = entry.tag || browser.i18n.getMessage('detail_notag');
    document.getElementById('tag').innerText = tag;
  },
  render: function render(entry) {
    this.entry = entry;
    this.setTitle(entry);
    this.setTag(entry);
  }
});

/***/ }),

/***/ "./content/detail-view/modules/marks.js":
/*!**********************************************!*\
  !*** ./content/detail-view/modules/marks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _globalSettings = __webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js");

var _globalSettings2 = _interopRequireDefault(_globalSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('marks'),
  events: {
    ENV: {
      'entry': 'render'
    },
    DOM: {
      click: {
        '.col-toggle': 'toggleNotes',
        '.table-toggle': 'toggleTable'
      }
    }
  },
  entry: null,
  tmpl: null,
  tbody: null,
  marks: [],
  notes: false,
  notesShown: true,
  render: function render(entry) {
    var _this = this;

    this.entry = entry;
    var tmpl = this.tmpl = document.getElementById('mark-template');
    var tbody = this.tbody = document.getElementById('marks-content');
    var marks = this.marks = this.sortById(entry.marks);
    if (!marks.length) this.el.classList.add('disabled');
    this.renderCount(entry);
    marks.forEach(function (mark) {
      return _this.renderMark(mark);
    });
    tbody.removeChild(tmpl);
    if (!this.notes) this.el.classList.add('no-notes');
  },
  renderCount: function renderCount(entry) {
    document.getElementById('marks-count').innerText = '(' + entry.marks.length + ')';
  },
  renderMark: function renderMark(mark) {
    var markEl = this.tmpl.cloneNode(true);
    var td_text = markEl.getElementsByClassName('mark-text')[0];
    var td_note = markEl.getElementsByClassName('mark-note')[0];
    var text = document.createElement('p');
    var noteText, noteColor;
    td_text.innerText = mark.text;
    td_text.setAttribute('style', mark.style);

    if (mark.note) {
      if (typeof mark.note === 'string') {
        noteText = mark.note;
        noteColor = _globalSettings2["default"].NOTE_COLORS.YELLOW;
      } else {
        noteText = mark.note.text || '';
        noteColor = mark.note.color || 'yellow';
        noteColor = _globalSettings2["default"].NOTE_COLORS[noteColor.toUpperCase()];
      }

      if (noteText) {
        td_note.innerText = noteText;
        td_note.parentNode.style.backgroundColor = noteColor;
        this.notes = true;
      }
    }

    markEl.id = 'mark-' + mark.id;
    this.tbody.appendChild(markEl);
  },
  sortById: function sortById(marks) {
    return marks.sort(function (mark1, mark2) {
      var id1 = mark1.id;
      var id2 = mark2.id;
      if (id1 === id2) return 0;
      return id1 < id2 ? -1 : 1;
    });
  },
  toggleNotes: function toggleNotes() {
    if (this.notesShown) {
      this.el.classList.add('hide-notes');
    } else {
      this.el.classList.remove('hide-notes');
    }

    this.notesShown = !this.notesShown;
  },
  toggleTable: function toggleTable() {
    this.el.classList.toggle('folded');
  }
});

/***/ }),

/***/ "./content/detail-view/modules/meta.js":
/*!*********************************************!*\
  !*** ./content/detail-view/modules/meta.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('meta'),
  events: {
    ENV: {
      'entry': 'render'
    }
  },
  entry: null,
  setDates: function setDates(entry) {
    document.getElementById('created').innerText = this.optimizeDateString(new Date(entry.first).toLocaleString());
    document.getElementById('last_modified').innerText = this.optimizeDateString(new Date(entry.last).toLocaleString());
  },
  setTitle: function setTitle(entry) {
    document.getElementById('title').innerText = entry.title;
  },
  setLink: function setLink(entry) {
    var link = document.getElementById('url');
    var url = entry.url;
    link.href = url;
    link.innerText = url;
  },
  setSyncMode: function setSyncMode(entry) {
    var val = entry.synced ? browser.i18n.getMessage('yes') : browser.i18n.getMessage('no');
    document.getElementById('synced').innerText = val;
  },
  render: function render(entry) {
    this.entry = entry;
    this.setDates(entry);
    this.setTitle(entry);
    this.setLink(entry);
    this.setSyncMode(entry);
  },
  optimizeDateString: function optimizeDateString(date) {
    return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
      return '0' + p + q;
    }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
      return p + '0' + q;
    });
  }
});

/***/ }),

/***/ "./content/detail-view/sass/index.scss":
/*!*********************************************!*\
  !*** ./content/detail-view/sass/index.scss ***!
  \*********************************************/
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
      n: ['shiftKey', false, true],
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
      ignoreHash: true,
      autoRetry: true
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
      notefontsize: 12,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      vipNote: true,
      loadNote: false,
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
      theme: 'tm'
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
  if (!url) return '';
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
        data = browser.i18n.getMessage(l10nId, '');

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
      ['Title', 'Placeholder', 'Href'].forEach(function (attr) {
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

      if (this.type === 'background') {
        return browser.tabs.sendMessage(args[0].tabId, {
          ev: event,
          wait: true
        }, {
          frameId: args[0].frameId
        });
      } else {
        return browser.runtime.sendMessage({
          ev: event,
          args: args,
          wait: true
        })["catch"](function () {});
      }
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
exports._BGPORT = exports._PRIVPORT = exports._PORT = undefined;

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
function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_this), _this.passMessage));

    _this.registerOneOffEvents();

    return _this;
  }

  _createClass(_PORT, [{
    key: "extend",
    value: function extend(events) {
      this.registerOneOffEvents(events.ONEOFF);
    }
  }, {
    key: "registerOneOffEvents",
    value: function registerOneOffEvents(events) {
      events || (events = this.events.ONEOFF);

      if (events) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

        if (lastArg && (tab = lastArg.tab)) {
          if (tab === 'active') {
            browser.tabs.query({
              active: true
            }).then(function (tabs) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = tabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _tab = _step2.value;
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
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
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _tab2 = _step3.value;
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
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
        }
      }
    }
  }]);

  return _PORT;
}(_module._MODULE);

var _PRIVPORT =
/*#__PURE__*/
function (_PORT2) {
  _inherits(_PRIVPORT, _PORT2);

  function _PRIVPORT(obj) {
    var _this2;

    _classCallCheck(this, _PRIVPORT);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_PRIVPORT).call(this, obj));
    _this2.port = null;
    _this2.portListener = null;

    _this2.connect();

    _this2.registerConnectionBasedEvents();

    window.addEventListener('pagehide', function () {
      !_this2.port || _this2.port.onMessage.removeListener(_this2.portListener);
    });
    return _this2;
  }

  _createClass(_PRIVPORT, [{
    key: "registerConnectionBasedEvents",
    value: function registerConnectionBasedEvents() {
      var events = this.events.CONNECTION;

      if (events) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = events[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var e = _step4.value;
            this.on(e, this.proxy(this, this.postMessage, e));
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
    key: "connect",
    value: function connect() {
      var port = this.port = this.port || browser.runtime.connect({
        name: "".concat(this.name, "_").concat(this.id)
      });
      var listener = this.portListener = this.proxy(this, this.passMessage);
      port.onMessage.addListener(listener);
    }
  }]);

  return _PRIVPORT;
}(_PORT);

var _BGPORT =
/*#__PURE__*/
function (_PORT3) {
  _inherits(_BGPORT, _PORT3);

  function _BGPORT(obj) {
    var _this3;

    _classCallCheck(this, _BGPORT);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_BGPORT).call(this, obj));
    _this3.ports = {};

    _this3.registerOnConnectListener();

    _this3.registerConnectionBasedEvents();

    return _this3;
  }

  _createClass(_BGPORT, [{
    key: "registerConnectionBasedEvents",
    value: function registerConnectionBasedEvents() {
      var events = this.events.CONNECTION;

      if (events) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = events[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var e = _step5.value;
            this.on(e, this.proxy(this, this.postMessage, e));
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    }
  }, {
    key: "registerOnConnectListener",
    value: function registerOnConnectListener() {
      var _this4 = this;

      browser.runtime.onConnect.addListener(function (port) {
        var ports = _this4.ports;

        var listener = _this4.proxy(_this4, _this4.passMessage);

        ports[port.name] = port;
        port.onMessage.addListener(listener);
        port.onDisconnect.addListener(function () {
          port.onMessage.removeListener(listener);
          delete ports[port.name];
        });
      });
    }
  }, {
    key: "postMessage",
    value: function postMessage(e) {
      var ports = this.ports;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var msg = {
        ev: e,
        args: args
      };

      for (var p in ports) {
        if (ports.hasOwnProperty(p)) {
          ports[p].postMessage(msg);
        }
      }
    }
  }]);

  return _BGPORT;
}(_PORT);

exports._PORT = _PORT;
exports._PRIVPORT = _PRIVPORT;
exports._BGPORT = _BGPORT;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvZGV0YWlsLXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2RldGFpbC12aWV3L21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9QUklWUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImF1dG9pbml0IiwibmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsIk9iamVjdCIsImtleXMiLCJoaXN0b3J5IiwiZW50cmllcyIsImluY2x1ZGVzIiwibG9jYWwiLCJlbnRyeSIsImVtaXQiLCJkb2N1bWVudCIsInRpdGxlIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50cyIsIkVOViIsInNldFRpdGxlIiwiaW5uZXJUZXh0Iiwic2V0VGFnIiwidGFnIiwiaTE4biIsImdldE1lc3NhZ2UiLCJyZW5kZXIiLCJET00iLCJjbGljayIsInRtcGwiLCJ0Ym9keSIsIm1hcmtzIiwibm90ZXMiLCJub3Rlc1Nob3duIiwic29ydEJ5SWQiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW5kZXJDb3VudCIsImZvckVhY2giLCJtYXJrIiwicmVuZGVyTWFyayIsInJlbW92ZUNoaWxkIiwibWFya0VsIiwiY2xvbmVOb2RlIiwidGRfdGV4dCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZF9ub3RlIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJub3RlVGV4dCIsIm5vdGVDb2xvciIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwibm90ZSIsIl9TRVRUSU5HUyIsIk5PVEVfQ09MT1JTIiwiWUVMTE9XIiwiY29sb3IiLCJ0b1VwcGVyQ2FzZSIsInBhcmVudE5vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsImFwcGVuZENoaWxkIiwic29ydCIsIm1hcmsxIiwibWFyazIiLCJpZDEiLCJpZDIiLCJ0b2dnbGVOb3RlcyIsInJlbW92ZSIsInRvZ2dsZVRhYmxlIiwidG9nZ2xlIiwic2V0RGF0ZXMiLCJvcHRpbWl6ZURhdGVTdHJpbmciLCJEYXRlIiwiZmlyc3QiLCJ0b0xvY2FsZVN0cmluZyIsImxhc3QiLCJzZXRMaW5rIiwibGluayIsInVybCIsImhyZWYiLCJzZXRTeW5jTW9kZSIsInZhbCIsInN5bmNlZCIsImRhdGUiLCJyZXBsYWNlIiwibSIsInAiLCJxIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInNldHRpbmdzIiwic2hvcnRjdXRzIiwieiIsInkiLCJzIiwiYyIsImIiLCJkIiwidyIsIm4iLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsIm1hcmtlcnMiLCJhdXRvc2F2ZSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiaW1tdXQiLCJuYW1pbmciLCJkb3dubG9hZCIsImNvcHkiLCJzYXZlTm90ZSIsInNvcnRlZCIsInZpZXciLCJwcCIsImlnbm9yZUhhc2giLCJhdXRvUmV0cnkiLCJhZGRvbiIsImFjdGl2ZSIsImF1dG9jcyIsImlmcmFtZXMiLCJtaXNjIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwibm90ZWZvbnRzaXplIiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJsb2FkTm90ZSIsImN1c3RvbVNlYXJjaCIsInRtdWlwb3MiLCJtYXJrbWV0aG9kIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInRhYnMiLCJtZXRhIiwidW5mb2xkZWQiLCJ0YWdzIiwiYWN0aW9ucyIsImxpbmtzIiwidGhlbWVzIiwidGhlbWUiLCJwYWdlbm90ZXMiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsIk1BWF9MT0dfRU5UUklFUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidGFyZ2V0IiwiQXJyYXkiLCJpc0FycmF5IiwicHJvcCIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInR5cGUiLCJlIiwic2VsZWN0b3IiLCJfc2VsIiwibWV0aCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwic3Vic3RyIiwiY29udGFpbnMiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwib24iLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1c2giLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwibCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJfZXh0cmEiLCJpIiwic2V0IiwiZXJyb3IiLCJmaWxlIiwiZmlsZW5hbWUiLCJzcGxpdCIsInBvcCIsIm1lc3NhZ2UiLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwidGltZSIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsInRleHRDb250ZW50IiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJldiIsIndhaXQiLCJmcmFtZUlkIiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0IiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJyZWdpc3Rlck9uZU9mZkV2ZW50cyIsIk9ORU9GRiIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1zZyIsImxhc3RBcmciLCJ0YWIiLCJwb3J0IiwicG9ydExpc3RlbmVyIiwiY29ubmVjdCIsInJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzIiwicmVtb3ZlTGlzdGVuZXIiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJsaXN0ZW5lciIsIl9CR1BPUlQiLCJwb3J0cyIsInJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfc2V0dGluZ3MiLCJfREVGQVVMVF9TVE9SQUdFIiwiYXJlYV9oaXN0b3J5IiwiYXJlYV9wYWdlbm90ZXMiLCJzZXRBcmVhcyIsImFyZWEiLCJpbml0IiwiZmllbGQiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImxvZ3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L2RldGFpbC12aWV3L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JULCBfUFJJVlBPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9QUklWUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGVhZGVyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tZXRhJ1xyXG4vL2ltcG9ydCAnLi9tb2R1bGVzL25vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrcydcclxuXHJcbl9MMTBOKCk7XHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5zbGljZSgxKTtcclxuXHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZW50cnkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBlbnRyeS5uYW1lO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG5cclxuICBzZXRUaXRsZShlbnRyeSkge1xyXG4gICAgdGhpcy5lbC5pbm5lclRleHQgPSBlbnRyeS5uYW1lO1xyXG4gIH0sXHJcbiAgc2V0VGFnKGVudHJ5KSB7XHJcbiAgICBjb25zdCB0YWcgPSBlbnRyeS50YWcgfHwgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLmlubmVyVGV4dCA9IHRhZztcclxuICB9LFxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5zZXRUaXRsZShlbnRyeSk7XHJcbiAgICB0aGlzLnNldFRhZyhlbnRyeSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuY29sLXRvZ2dsZSc6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgJy50YWJsZS10b2dnbGUnOiAndG9nZ2xlVGFibGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIHRtcGw6IG51bGwsXHJcbiAgdGJvZHk6IG51bGwsXHJcbiAgbWFya3M6IFtdLFxyXG4gIG5vdGVzOiBmYWxzZSxcclxuICBub3Rlc1Nob3duOiB0cnVlLFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIGNvbnN0IHRtcGwgPSB0aGlzLnRtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0aGlzLnRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMuc29ydEJ5SWQoZW50cnkubWFya3MpO1xyXG5cclxuICAgIGlmICghbWFya3MubGVuZ3RoKSB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJDb3VudChlbnRyeSk7XHJcbiAgICBtYXJrcy5mb3JFYWNoKG1hcmsgPT4gdGhpcy5yZW5kZXJNYXJrKG1hcmspKTtcclxuICAgIHRib2R5LnJlbW92ZUNoaWxkKHRtcGwpO1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzKSB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ25vLW5vdGVzJyk7XHJcbiAgfSxcclxuICByZW5kZXJDb3VudChlbnRyeSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzLWNvdW50JykuaW5uZXJUZXh0ID0gJygnICsgZW50cnkubWFya3MubGVuZ3RoICsgJyknO1xyXG4gIH0sXHJcbiAgcmVuZGVyTWFyayhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrRWwgPSB0aGlzLnRtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgdGRfdGV4dCA9IG1hcmtFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrLXRleHQnKVswXTtcclxuICAgIGNvbnN0IHRkX25vdGUgPSBtYXJrRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFyay1ub3RlJylbMF07XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IG5vdGVUZXh0LCBub3RlQ29sb3I7XHJcbiAgICB0ZF90ZXh0LmlubmVyVGV4dCA9IG1hcmsudGV4dDtcclxuICAgIHRkX3RleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG1hcmsuc3R5bGUpO1xyXG4gICAgaWYgKG1hcmsubm90ZSkge1xyXG4gICAgICBpZiAodHlwZW9mIG1hcmsubm90ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZTtcclxuICAgICAgICBub3RlQ29sb3IgPSBfU0VUVElOR1MuTk9URV9DT0xPUlMuWUVMTE9XO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vdGVUZXh0ID0gbWFyay5ub3RlLnRleHQgfHwgJyc7XHJcbiAgICAgICAgbm90ZUNvbG9yID0gbWFyay5ub3RlLmNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgICAgIG5vdGVDb2xvciA9IF9TRVRUSU5HUy5OT1RFX0NPTE9SU1tub3RlQ29sb3IudG9VcHBlckNhc2UoKV07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vdGVUZXh0KSB7XHJcbiAgICAgICAgdGRfbm90ZS5pbm5lclRleHQgPSBub3RlVGV4dDtcclxuICAgICAgICB0ZF9ub3RlLnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbm90ZUNvbG9yO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXJrRWwuaWQgPSAnbWFyay0nICsgbWFyay5pZDtcclxuICAgIHRoaXMudGJvZHkuYXBwZW5kQ2hpbGQobWFya0VsKTtcclxuICB9LFxyXG4gIHNvcnRCeUlkKG1hcmtzKSB7XHJcbiAgICByZXR1cm4gbWFya3Muc29ydCgobWFyazEsIG1hcmsyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkMSA9IG1hcmsxLmlkO1xyXG4gICAgICBjb25zdCBpZDIgPSBtYXJrMi5pZDtcclxuICAgICAgaWYgKGlkMSA9PT0gaWQyKSByZXR1cm4gMDtcclxuICAgICAgcmV0dXJuIGlkMSA8IGlkMiA/IC0xIDogMTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoKSB7XHJcbiAgICBpZiAodGhpcy5ub3Rlc1Nob3duKSB7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZS1ub3RlcycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLW5vdGVzJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vdGVzU2hvd24gPSAhdGhpcy5ub3Rlc1Nob3duO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVGFibGUoKSB7XHJcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC50b2dnbGUoJ2ZvbGRlZCcpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG5cclxuICBzZXREYXRlcyhlbnRyeSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdF9tb2RpZmllZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gIH0sXHJcbiAgc2V0VGl0bGUoZW50cnkpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLmlubmVyVGV4dCA9IGVudHJ5LnRpdGxlO1xyXG4gIH0sXHJcbiAgc2V0TGluayhlbnRyeSkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmwnKTtcclxuICAgIGNvbnN0IHVybCA9IGVudHJ5LnVybDtcclxuICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgIGxpbmsuaW5uZXJUZXh0ID0gdXJsO1xyXG4gIH0sXHJcbiAgc2V0U3luY01vZGUoZW50cnkpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVudHJ5LnN5bmNlZCA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5ZXMnKSA6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmNlZCcpLmlubmVyVGV4dCA9IHZhbDtcclxuICB9LFxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5zZXREYXRlcyhlbnRyeSk7XHJcbiAgICB0aGlzLnNldFRpdGxlKGVudHJ5KTtcclxuICAgIHRoaXMuc2V0TGluayhlbnRyeSk7XHJcbiAgICB0aGlzLnNldFN5bmNNb2RlKGVudHJ5KTtcclxuICB9LFxyXG4gIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGVcclxuICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZSxcclxuICAgICAgYXV0b1JldHJ5OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG5vdGVmb250c2l6ZTogMTIsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGxvYWROb3RlOiBmYWxzZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAndG0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiAnJztcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCwgJycpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlcicsICdIcmVmJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShhcmdzWzBdLnRhYklkLCB7IGV2OiBldmVudCwgd2FpdDogdHJ1ZSB9LCB7IGZyYW1lSWQ6IGFyZ3NbMF0uZnJhbWVJZCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgIHRoaXMucmVnaXN0ZXJPbmVPZmZFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3Rlck9uZU9mZkV2ZW50cyhldmVudHMuT05FT0ZGKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbmVPZmZFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgfHwgKCBldmVudHMgPSB0aGlzLmV2ZW50cy5PTkVPRkYpO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgX1BSSVZQT1JUIGV4dGVuZHMgX1BPUlQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xyXG4gICAgICAgICAgIXRoaXMucG9ydCB8fCB0aGlzLnBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKHRoaXMucG9ydExpc3RlbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLkNPTk5FQ1RJT047XHJcblxyXG4gICAgICAgIGlmIChldmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiBgJHt0aGlzLm5hbWV9XyR7dGhpcy5pZH1gIH0pO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5wb3J0TGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpO1xyXG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgX0JHUE9SVCBleHRlbmRzIF9QT1JUIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnBvcnRzID0ge307XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck9uQ29ubmVjdExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHMuQ09OTkVDVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJPbkNvbm5lY3RMaXN0ZW5lcigpIHtcclxuICAgICAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3J0cyA9IHRoaXMucG9ydHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKTtcclxuICAgICAgICAgICAgcG9ydHNbcG9ydC5uYW1lXSA9IHBvcnQ7XHJcbiAgICAgICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBvcnRzW3BvcnQubmFtZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IHBvcnRzID0gdGhpcy5wb3J0cztcclxuICAgICAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcCBpbiBwb3J0cykge1xyXG4gICAgICAgICAgICBpZiAocG9ydHMuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICBwb3J0c1twXS5wb3N0TWVzc2FnZShtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBfUE9SVCwgX1BSSVZQT1JULCBfQkdQT1JUIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=