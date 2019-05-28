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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvZGV0YWlsLXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2RldGFpbC12aWV3L21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImF1dG9pbml0IiwibmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsIk9iamVjdCIsImtleXMiLCJoaXN0b3J5IiwiZW50cmllcyIsImluY2x1ZGVzIiwibG9jYWwiLCJlbnRyeSIsImVtaXQiLCJkb2N1bWVudCIsInRpdGxlIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50cyIsIkVOViIsInNldFRpdGxlIiwiaW5uZXJUZXh0Iiwic2V0VGFnIiwidGFnIiwiaTE4biIsImdldE1lc3NhZ2UiLCJyZW5kZXIiLCJET00iLCJjbGljayIsInRtcGwiLCJ0Ym9keSIsIm1hcmtzIiwibm90ZXMiLCJub3Rlc1Nob3duIiwic29ydEJ5SWQiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW5kZXJDb3VudCIsImZvckVhY2giLCJtYXJrIiwicmVuZGVyTWFyayIsInJlbW92ZUNoaWxkIiwibWFya0VsIiwiY2xvbmVOb2RlIiwidGRfdGV4dCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZF9ub3RlIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJub3RlVGV4dCIsIm5vdGVDb2xvciIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwibm90ZSIsIl9TRVRUSU5HUyIsIk5PVEVfQ09MT1JTIiwiWUVMTE9XIiwiY29sb3IiLCJ0b1VwcGVyQ2FzZSIsInBhcmVudE5vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsImFwcGVuZENoaWxkIiwic29ydCIsIm1hcmsxIiwibWFyazIiLCJpZDEiLCJpZDIiLCJ0b2dnbGVOb3RlcyIsInJlbW92ZSIsInRvZ2dsZVRhYmxlIiwidG9nZ2xlIiwic2V0RGF0ZXMiLCJvcHRpbWl6ZURhdGVTdHJpbmciLCJEYXRlIiwiZmlyc3QiLCJ0b0xvY2FsZVN0cmluZyIsImxhc3QiLCJzZXRMaW5rIiwibGluayIsInVybCIsImhyZWYiLCJzZXRTeW5jTW9kZSIsInZhbCIsInN5bmNlZCIsImRhdGUiLCJyZXBsYWNlIiwibSIsInAiLCJxIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInNldHRpbmdzIiwic2hvcnRjdXRzIiwieiIsInkiLCJzIiwiYyIsImIiLCJkIiwidyIsIm4iLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsIm1hcmtlcnMiLCJhdXRvc2F2ZSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiaW1tdXQiLCJuYW1pbmciLCJkb3dubG9hZCIsImNvcHkiLCJzYXZlTm90ZSIsInNvcnRlZCIsInZpZXciLCJwcCIsImlnbm9yZUhhc2giLCJhZGRvbiIsImFjdGl2ZSIsImF1dG9jcyIsImlmcmFtZXMiLCJtaXNjIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJjdXN0b21TZWFyY2giLCJ0bXVpcG9zIiwibWFya21ldGhvZCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsInRoZW1lcyIsInRoZW1lIiwicGFnZW5vdGVzIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJNQVhfTE9HX0VOVFJJRVMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInRhcmdldCIsIkFycmF5IiwiaXNBcnJheSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJhdXRvUGF1c2UiLCJzZXRBdXRvUGF1c2UiLCJzdWJNYXAiLCJ0eXBlIiwiZSIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsInN1YnN0ciIsImNvbnRhaW5zIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsImwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwiaSIsInNldCIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJtZXNzYWdlIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGEiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm1zZyIsImxhc3RBcmciLCJ0YWIiLCJ1bmRlZmluZWQiLCJmcmFtZUlkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYXJlYSIsImluaXQiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5IiwibG9ncyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7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bkMsRUFBNEM7QUFDMUMsaUJBQU8xRixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLElBQWhCLENBQXFCQyxHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQThSLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDeE0sT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPdU0sWUFBWSxDQUFDdk0sT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUJ4RyxlIiwiZmlsZSI6ImNvbnRlbnQvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvZGV0YWlsLXZpZXcvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0wxME4gfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2hlYWRlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbWV0YSdcclxuLy9pbXBvcnQgJy4vbW9kdWxlcy9ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya3MnXHJcblxyXG5fTDEwTigpO1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaGFzaCkuc2xpY2UoMSk7XHJcblxyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzKS5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuIHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzKS5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuIHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGVudHJ5ID0+IHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gZW50cnkubmFtZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuICBlbnRyeTogbnVsbCxcclxuXHJcbiAgc2V0VGl0bGUoZW50cnkpIHtcclxuICAgIHRoaXMuZWwuaW5uZXJUZXh0ID0gZW50cnkubmFtZTtcclxuICB9LFxyXG4gIHNldFRhZyhlbnRyeSkge1xyXG4gICAgY29uc3QgdGFnID0gZW50cnkudGFnIHx8IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdkZXRhaWxfbm90YWcnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS5pbm5lclRleHQgPSB0YWc7XHJcbiAgfSxcclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIHRoaXMuc2V0VGl0bGUoZW50cnkpO1xyXG4gICAgdGhpcy5zZXRUYWcoZW50cnkpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmNvbC10b2dnbGUnOiAndG9nZ2xlTm90ZXMnLFxyXG4gICAgICAgICcudGFibGUtdG9nZ2xlJzogJ3RvZ2dsZVRhYmxlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBlbnRyeTogbnVsbCxcclxuICB0bXBsOiBudWxsLFxyXG4gIHRib2R5OiBudWxsLFxyXG4gIG1hcmtzOiBbXSxcclxuICBub3RlczogZmFsc2UsXHJcbiAgbm90ZXNTaG93bjogdHJ1ZSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICBjb25zdCB0bXBsID0gdGhpcy50bXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IHRib2R5ID0gdGhpcy50Ym9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcy1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYXJrcyA9IHRoaXMubWFya3MgPSB0aGlzLnNvcnRCeUlkKGVudHJ5Lm1hcmtzKTtcclxuXHJcbiAgICBpZiAoIW1hcmtzLmxlbmd0aCkgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyQ291bnQoZW50cnkpO1xyXG4gICAgbWFya3MuZm9yRWFjaChtYXJrID0+IHRoaXMucmVuZGVyTWFyayhtYXJrKSk7XHJcbiAgICB0Ym9keS5yZW1vdmVDaGlsZCh0bXBsKTtcclxuICAgIGlmICghdGhpcy5ub3RlcykgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCduby1ub3RlcycpO1xyXG4gIH0sXHJcbiAgcmVuZGVyQ291bnQoZW50cnkpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcy1jb3VudCcpLmlubmVyVGV4dCA9ICcoJyArIGVudHJ5Lm1hcmtzLmxlbmd0aCArICcpJztcclxuICB9LFxyXG4gIHJlbmRlck1hcmsobWFyaykge1xyXG4gICAgY29uc3QgbWFya0VsID0gdGhpcy50bXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IHRkX3RleHQgPSBtYXJrRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFyay10ZXh0JylbMF07XHJcbiAgICBjb25zdCB0ZF9ub3RlID0gbWFya0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmstbm90ZScpWzBdO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBub3RlVGV4dCwgbm90ZUNvbG9yO1xyXG4gICAgdGRfdGV4dC5pbm5lclRleHQgPSBtYXJrLnRleHQ7XHJcbiAgICB0ZF90ZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBtYXJrLnN0eWxlKTtcclxuICAgIGlmIChtYXJrLm5vdGUpIHtcclxuICAgICAgaWYgKHR5cGVvZiBtYXJrLm5vdGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbm90ZVRleHQgPSBtYXJrLm5vdGU7XHJcbiAgICAgICAgbm90ZUNvbG9yID0gX1NFVFRJTkdTLk5PVEVfQ09MT1JTLllFTExPVztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZS50ZXh0IHx8ICcnO1xyXG4gICAgICAgIG5vdGVDb2xvciA9IG1hcmsubm90ZS5jb2xvciB8fCAneWVsbG93JztcclxuICAgICAgICBub3RlQ29sb3IgPSBfU0VUVElOR1MuTk9URV9DT0xPUlNbbm90ZUNvbG9yLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChub3RlVGV4dCkge1xyXG4gICAgICAgIHRkX25vdGUuaW5uZXJUZXh0ID0gbm90ZVRleHQ7XHJcbiAgICAgICAgdGRfbm90ZS5wYXJlbnROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5vdGVDb2xvcjtcclxuICAgICAgICB0aGlzLm5vdGVzID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFya0VsLmlkID0gJ21hcmstJyArIG1hcmsuaWQ7XHJcbiAgICB0aGlzLnRib2R5LmFwcGVuZENoaWxkKG1hcmtFbCk7XHJcbiAgfSxcclxuICBzb3J0QnlJZChtYXJrcykge1xyXG4gICAgcmV0dXJuIG1hcmtzLnNvcnQoKG1hcmsxLCBtYXJrMikgPT4ge1xyXG4gICAgICBjb25zdCBpZDEgPSBtYXJrMS5pZDtcclxuICAgICAgY29uc3QgaWQyID0gbWFyazIuaWQ7XHJcbiAgICAgIGlmIChpZDEgPT09IGlkMikgcmV0dXJuIDA7XHJcbiAgICAgIHJldHVybiBpZDEgPCBpZDIgPyAtMSA6IDE7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVzKCkge1xyXG4gICAgaWYgKHRoaXMubm90ZXNTaG93bikge1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtbm90ZXMnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1ub3RlcycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ub3Rlc1Nob3duID0gIXRoaXMubm90ZXNTaG93bjtcclxuICB9LFxyXG4gIHRvZ2dsZVRhYmxlKCkge1xyXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QudG9nZ2xlKCdmb2xkZWQnKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YScpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuICBlbnRyeTogbnVsbCxcclxuXHJcbiAgc2V0RGF0ZXMoZW50cnkpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3RfbW9kaWZpZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICB9LFxyXG4gIHNldFRpdGxlKGVudHJ5KSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS5pbm5lclRleHQgPSBlbnRyeS50aXRsZTtcclxuICB9LFxyXG4gIHNldExpbmsoZW50cnkpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXJsJyk7XHJcbiAgICBjb25zdCB1cmwgPSBlbnRyeS51cmw7XHJcbiAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICBsaW5rLmlubmVyVGV4dCA9IHVybDtcclxuICB9LFxyXG4gIHNldFN5bmNNb2RlKGVudHJ5KSB7XHJcbiAgICBjb25zdCB2YWwgPSBlbnRyeS5zeW5jZWQgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneWVzJykgOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm8nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jZWQnKS5pbm5lclRleHQgPSB2YWw7XHJcbiAgfSxcclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIHRoaXMuc2V0RGF0ZXMoZW50cnkpO1xyXG4gICAgdGhpcy5zZXRUaXRsZShlbnRyeSk7XHJcbiAgICB0aGlzLnNldExpbmsoZW50cnkpO1xyXG4gICAgdGhpcy5zZXRTeW5jTW9kZShlbnRyeSk7XHJcbiAgfSxcclxuICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgcmV0dXJuIChkYXRlXHJcbiAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICB9XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7Y29uc29sZS5sb2coJ3Bhc3M6JywgcmVxLmV2KTtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=