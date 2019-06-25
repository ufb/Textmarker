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
      notefontsize: 12,
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

        if (lastArg && (tab = lastArg.tab)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvZGV0YWlsLXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2RldGFpbC12aWV3L21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImF1dG9pbml0IiwibmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsIk9iamVjdCIsImtleXMiLCJoaXN0b3J5IiwiZW50cmllcyIsImluY2x1ZGVzIiwibG9jYWwiLCJlbnRyeSIsImVtaXQiLCJkb2N1bWVudCIsInRpdGxlIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50cyIsIkVOViIsInNldFRpdGxlIiwiaW5uZXJUZXh0Iiwic2V0VGFnIiwidGFnIiwiaTE4biIsImdldE1lc3NhZ2UiLCJyZW5kZXIiLCJET00iLCJjbGljayIsInRtcGwiLCJ0Ym9keSIsIm1hcmtzIiwibm90ZXMiLCJub3Rlc1Nob3duIiwic29ydEJ5SWQiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW5kZXJDb3VudCIsImZvckVhY2giLCJtYXJrIiwicmVuZGVyTWFyayIsInJlbW92ZUNoaWxkIiwibWFya0VsIiwiY2xvbmVOb2RlIiwidGRfdGV4dCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZF9ub3RlIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJub3RlVGV4dCIsIm5vdGVDb2xvciIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwibm90ZSIsIl9TRVRUSU5HUyIsIk5PVEVfQ09MT1JTIiwiWUVMTE9XIiwiY29sb3IiLCJ0b1VwcGVyQ2FzZSIsInBhcmVudE5vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsImFwcGVuZENoaWxkIiwic29ydCIsIm1hcmsxIiwibWFyazIiLCJpZDEiLCJpZDIiLCJ0b2dnbGVOb3RlcyIsInJlbW92ZSIsInRvZ2dsZVRhYmxlIiwidG9nZ2xlIiwic2V0RGF0ZXMiLCJvcHRpbWl6ZURhdGVTdHJpbmciLCJEYXRlIiwiZmlyc3QiLCJ0b0xvY2FsZVN0cmluZyIsImxhc3QiLCJzZXRMaW5rIiwibGluayIsInVybCIsImhyZWYiLCJzZXRTeW5jTW9kZSIsInZhbCIsInN5bmNlZCIsImRhdGUiLCJyZXBsYWNlIiwibSIsInAiLCJxIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInNldHRpbmdzIiwic2hvcnRjdXRzIiwieiIsInkiLCJzIiwiYyIsImIiLCJkIiwidyIsIm4iLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsIm1hcmtlcnMiLCJhdXRvc2F2ZSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiaW1tdXQiLCJuYW1pbmciLCJkb3dubG9hZCIsImNvcHkiLCJzYXZlTm90ZSIsInNvcnRlZCIsInZpZXciLCJwcCIsImlnbm9yZUhhc2giLCJhZGRvbiIsImFjdGl2ZSIsImF1dG9jcyIsImlmcmFtZXMiLCJtaXNjIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwibm90ZWZvbnRzaXplIiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJjdXN0b21TZWFyY2giLCJ0bXVpcG9zIiwibWFya21ldGhvZCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsImFjdGlvbnMiLCJsaW5rcyIsInRoZW1lcyIsInRoZW1lIiwicGFnZW5vdGVzIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJNQVhfTE9HX0VOVFJJRVMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInRhcmdldCIsIkFycmF5IiwiaXNBcnJheSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJhdXRvUGF1c2UiLCJzZXRBdXRvUGF1c2UiLCJzdWJNYXAiLCJ0eXBlIiwiZSIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsInN1YnN0ciIsImNvbnRhaW5zIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsImwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwiaSIsInNldCIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJtZXNzYWdlIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGEiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiT05FT0ZGIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibXNnIiwibGFzdEFyZyIsInRhYiIsImZyYW1lSWQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0IiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJhcmVhX3NldHRpbmdzIiwiX0RFRkFVTFRfU1RPUkFHRSIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwic2V0QXJlYXMiLCJhcmVhIiwiaW5pdCIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0IiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xG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QUFSLENBQWdCQyxJQUFoQixDQUFxQkMsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUE0UixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQ3RNLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT3FNLFlBQVksQ0FBQ3JNLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCeEcsZSIsImZpbGUiOiJjb250ZW50L2RldGFpbC12aWV3L2RldGFpbC12aWV3LndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L2RldGFpbC12aWV3L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oZWFkZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL21ldGEnXHJcbi8vaW1wb3J0ICcuL21vZHVsZXMvbm90ZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtzJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhhc2gpLnNsaWNlKDEpO1xyXG5cclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhzdG9yYWdlLmhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMobmFtZSkpIHJldHVybiBzdG9yYWdlLmhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzdG9yYWdlLmhpc3RvcnkuZW50cmllcykuaW5jbHVkZXMobmFtZSkpIHJldHVybiBzdG9yYWdlLmhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihlbnRyeSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlbnRyeScsIGVudHJ5KTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW50cnk6IG51bGwsXHJcblxyXG4gIHNldFRpdGxlKGVudHJ5KSB7XHJcbiAgICB0aGlzLmVsLmlubmVyVGV4dCA9IGVudHJ5Lm5hbWU7XHJcbiAgfSxcclxuICBzZXRUYWcoZW50cnkpIHtcclxuICAgIGNvbnN0IHRhZyA9IGVudHJ5LnRhZyB8fCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykuaW5uZXJUZXh0ID0gdGFnO1xyXG4gIH0sXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLnNldFRpdGxlKGVudHJ5KTtcclxuICAgIHRoaXMuc2V0VGFnKGVudHJ5KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5jb2wtdG9nZ2xlJzogJ3RvZ2dsZU5vdGVzJyxcclxuICAgICAgICAnLnRhYmxlLXRvZ2dsZSc6ICd0b2dnbGVUYWJsZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW50cnk6IG51bGwsXHJcbiAgdG1wbDogbnVsbCxcclxuICB0Ym9keTogbnVsbCxcclxuICBtYXJrczogW10sXHJcbiAgbm90ZXM6IGZhbHNlLFxyXG4gIG5vdGVzU2hvd246IHRydWUsXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgY29uc3QgdG1wbCA9IHRoaXMudG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCB0Ym9keSA9IHRoaXMudGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MtY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFya3MgPSB0aGlzLm1hcmtzID0gdGhpcy5zb3J0QnlJZChlbnRyeS5tYXJrcyk7XHJcblxyXG4gICAgaWYgKCFtYXJrcy5sZW5ndGgpIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlckNvdW50KGVudHJ5KTtcclxuICAgIG1hcmtzLmZvckVhY2gobWFyayA9PiB0aGlzLnJlbmRlck1hcmsobWFyaykpO1xyXG4gICAgdGJvZHkucmVtb3ZlQ2hpbGQodG1wbCk7XHJcbiAgICBpZiAoIXRoaXMubm90ZXMpIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnbm8tbm90ZXMnKTtcclxuICB9LFxyXG4gIHJlbmRlckNvdW50KGVudHJ5KSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MtY291bnQnKS5pbm5lclRleHQgPSAnKCcgKyBlbnRyeS5tYXJrcy5sZW5ndGggKyAnKSc7XHJcbiAgfSxcclxuICByZW5kZXJNYXJrKG1hcmspIHtcclxuICAgIGNvbnN0IG1hcmtFbCA9IHRoaXMudG1wbC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjb25zdCB0ZF90ZXh0ID0gbWFya0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmstdGV4dCcpWzBdO1xyXG4gICAgY29uc3QgdGRfbm90ZSA9IG1hcmtFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrLW5vdGUnKVswXTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgbm90ZVRleHQsIG5vdGVDb2xvcjtcclxuICAgIHRkX3RleHQuaW5uZXJUZXh0ID0gbWFyay50ZXh0O1xyXG4gICAgdGRfdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbWFyay5zdHlsZSk7XHJcbiAgICBpZiAobWFyay5ub3RlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbWFyay5ub3RlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIG5vdGVUZXh0ID0gbWFyay5ub3RlO1xyXG4gICAgICAgIG5vdGVDb2xvciA9IF9TRVRUSU5HUy5OT1RFX0NPTE9SUy5ZRUxMT1c7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm90ZVRleHQgPSBtYXJrLm5vdGUudGV4dCB8fCAnJztcclxuICAgICAgICBub3RlQ29sb3IgPSBtYXJrLm5vdGUuY29sb3IgfHwgJ3llbGxvdyc7XHJcbiAgICAgICAgbm90ZUNvbG9yID0gX1NFVFRJTkdTLk5PVEVfQ09MT1JTW25vdGVDb2xvci50b1VwcGVyQ2FzZSgpXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobm90ZVRleHQpIHtcclxuICAgICAgICB0ZF9ub3RlLmlubmVyVGV4dCA9IG5vdGVUZXh0O1xyXG4gICAgICAgIHRkX25vdGUucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBub3RlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5ub3RlcyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1hcmtFbC5pZCA9ICdtYXJrLScgKyBtYXJrLmlkO1xyXG4gICAgdGhpcy50Ym9keS5hcHBlbmRDaGlsZChtYXJrRWwpO1xyXG4gIH0sXHJcbiAgc29ydEJ5SWQobWFya3MpIHtcclxuICAgIHJldHVybiBtYXJrcy5zb3J0KChtYXJrMSwgbWFyazIpID0+IHtcclxuICAgICAgY29uc3QgaWQxID0gbWFyazEuaWQ7XHJcbiAgICAgIGNvbnN0IGlkMiA9IG1hcmsyLmlkO1xyXG4gICAgICBpZiAoaWQxID09PSBpZDIpIHJldHVybiAwO1xyXG4gICAgICByZXR1cm4gaWQxIDwgaWQyID8gLTEgOiAxO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcygpIHtcclxuICAgIGlmICh0aGlzLm5vdGVzU2hvd24pIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdoaWRlLW5vdGVzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtbm90ZXMnKTtcclxuICAgIH1cclxuICAgIHRoaXMubm90ZXNTaG93biA9ICF0aGlzLm5vdGVzU2hvd247XHJcbiAgfSxcclxuICB0b2dnbGVUYWJsZSgpIHtcclxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnRvZ2dsZSgnZm9sZGVkJyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGEnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW50cnk6IG51bGwsXHJcblxyXG4gIHNldERhdGVzKGVudHJ5KSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0X21vZGlmaWVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgfSxcclxuICBzZXRUaXRsZShlbnRyeSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykuaW5uZXJUZXh0ID0gZW50cnkudGl0bGU7XHJcbiAgfSxcclxuICBzZXRMaW5rKGVudHJ5KSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VybCcpO1xyXG4gICAgY29uc3QgdXJsID0gZW50cnkudXJsO1xyXG4gICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgbGluay5pbm5lclRleHQgPSB1cmw7XHJcbiAgfSxcclxuICBzZXRTeW5jTW9kZShlbnRyeSkge1xyXG4gICAgY29uc3QgdmFsID0gZW50cnkuc3luY2VkID8gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3llcycpIDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luY2VkJykuaW5uZXJUZXh0ID0gdmFsO1xyXG4gIH0sXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLnNldERhdGVzKGVudHJ5KTtcclxuICAgIHRoaXMuc2V0VGl0bGUoZW50cnkpO1xyXG4gICAgdGhpcy5zZXRMaW5rKGVudHJ5KTtcclxuICAgIHRoaXMuc2V0U3luY01vZGUoZW50cnkpO1xyXG4gIH0sXHJcbiAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBub3RlZm9udHNpemU6IDEyLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICd0bSdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCwgJycpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlcicsICdIcmVmJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9