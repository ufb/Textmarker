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

var _globalSettings = _interopRequireDefault(__webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        noteColor = _globalSettings.default.NOTE_COLORS.YELLOW;
      } else {
        noteText = mark.note.text || '';
        noteColor = mark.note.color || 'yellow';
        noteColor = _globalSettings.default.NOTE_COLORS[noteColor.toUpperCase()];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvZGV0YWlsLXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2RldGFpbC12aWV3L21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImF1dG9pbml0IiwibmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsIk9iamVjdCIsImtleXMiLCJoaXN0b3J5IiwiZW50cmllcyIsImluY2x1ZGVzIiwibG9jYWwiLCJlbWl0IiwiZW50cnkiLCJkb2N1bWVudCIsInRpdGxlIiwiX0RPTU1PRFVMRSIsImVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudHMiLCJFTlYiLCJzZXRUaXRsZSIsImlubmVyVGV4dCIsInNldFRhZyIsInRhZyIsImkxOG4iLCJnZXRNZXNzYWdlIiwicmVuZGVyIiwiRE9NIiwiY2xpY2siLCJ0bXBsIiwidGJvZHkiLCJtYXJrcyIsIm5vdGVzIiwibm90ZXNTaG93biIsInNvcnRCeUlkIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVuZGVyQ291bnQiLCJmb3JFYWNoIiwicmVuZGVyTWFyayIsIm1hcmsiLCJyZW1vdmVDaGlsZCIsIm1hcmtFbCIsImNsb25lTm9kZSIsInRkX3RleHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGRfbm90ZSIsInRleHQiLCJjcmVhdGVFbGVtZW50Iiwibm90ZVRleHQiLCJub3RlQ29sb3IiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsIm5vdGUiLCJfU0VUVElOR1MiLCJOT1RFX0NPTE9SUyIsIllFTExPVyIsImNvbG9yIiwidG9VcHBlckNhc2UiLCJwYXJlbnROb2RlIiwiYmFja2dyb3VuZENvbG9yIiwiaWQiLCJhcHBlbmRDaGlsZCIsInNvcnQiLCJtYXJrMSIsIm1hcmsyIiwiaWQxIiwiaWQyIiwidG9nZ2xlTm90ZXMiLCJyZW1vdmUiLCJ0b2dnbGVUYWJsZSIsInRvZ2dsZSIsInNldERhdGVzIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiRGF0ZSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJsYXN0Iiwic2V0TGluayIsImxpbmsiLCJ1cmwiLCJocmVmIiwic2V0U3luY01vZGUiLCJ2YWwiLCJzeW5jZWQiLCJkYXRlIiwicmVwbGFjZSIsIm0iLCJwIiwicSIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiTUFYX0xPR19FTlRSSUVTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJfQ09QWSIsInNyYyIsInRhcmdldCIsIkFycmF5IiwiaXNBcnJheSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJzdWJNYXAiLCJ0eXBlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJub2RlTmFtZSIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsInN1YnN0ciIsImNvbnRhaW5zIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1c2giLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwibCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJfZXh0cmEiLCJpIiwic2V0IiwiX0VSUk9SVFJBQ0tFUiIsImZpbGUiLCJlcnJvciIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJtZXNzYWdlIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJfR0VUX0FDVElWRV9UQUIiLCJ0YWJzIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiYWN0aXZlIiwiX0hBU0hMRVNTIiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJkYXRhIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwidGV4dENvbnRlbnQiLCJsMTBuQXR0ciIsImF0dHIiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5IiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY2F0Y2giLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvIiwiZW52RXZlbnRzIiwib24iLCJfTUVESUFUT1IiLCJfUE9SVCIsInBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJPTkVPRkYiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidGFiIiwidW5kZWZpbmVkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L2RldGFpbC12aWV3L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGVhZGVyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tZXRhJ1xyXG4vL2ltcG9ydCAnLi9tb2R1bGVzL25vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrcydcclxuXHJcbl9MMTBOKCk7XHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5zbGljZSgxKTtcclxuXHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZW50cnkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBlbnRyeS5uYW1lO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG5cclxuICBzZXRUaXRsZShlbnRyeSkge1xyXG4gICAgdGhpcy5lbC5pbm5lclRleHQgPSBlbnRyeS5uYW1lO1xyXG4gIH0sXHJcbiAgc2V0VGFnKGVudHJ5KSB7XHJcbiAgICBjb25zdCB0YWcgPSBlbnRyeS50YWcgfHwgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLmlubmVyVGV4dCA9IHRhZztcclxuICB9LFxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5zZXRUaXRsZShlbnRyeSk7XHJcbiAgICB0aGlzLnNldFRhZyhlbnRyeSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuY29sLXRvZ2dsZSc6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgJy50YWJsZS10b2dnbGUnOiAndG9nZ2xlVGFibGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIHRtcGw6IG51bGwsXHJcbiAgdGJvZHk6IG51bGwsXHJcbiAgbWFya3M6IFtdLFxyXG4gIG5vdGVzOiBmYWxzZSxcclxuICBub3Rlc1Nob3duOiB0cnVlLFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIGNvbnN0IHRtcGwgPSB0aGlzLnRtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0aGlzLnRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMuc29ydEJ5SWQoZW50cnkubWFya3MpO1xyXG5cclxuICAgIGlmICghbWFya3MubGVuZ3RoKSB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJDb3VudChlbnRyeSk7XHJcbiAgICBtYXJrcy5mb3JFYWNoKG1hcmsgPT4gdGhpcy5yZW5kZXJNYXJrKG1hcmspKTtcclxuICAgIHRib2R5LnJlbW92ZUNoaWxkKHRtcGwpO1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzKSB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ25vLW5vdGVzJyk7XHJcbiAgfSxcclxuICByZW5kZXJDb3VudChlbnRyeSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzLWNvdW50JykuaW5uZXJUZXh0ID0gJygnICsgZW50cnkubWFya3MubGVuZ3RoICsgJyknO1xyXG4gIH0sXHJcbiAgcmVuZGVyTWFyayhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrRWwgPSB0aGlzLnRtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgdGRfdGV4dCA9IG1hcmtFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrLXRleHQnKVswXTtcclxuICAgIGNvbnN0IHRkX25vdGUgPSBtYXJrRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFyay1ub3RlJylbMF07XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IG5vdGVUZXh0LCBub3RlQ29sb3I7XHJcbiAgICB0ZF90ZXh0LmlubmVyVGV4dCA9IG1hcmsudGV4dDtcclxuICAgIHRkX3RleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG1hcmsuc3R5bGUpO1xyXG4gICAgaWYgKG1hcmsubm90ZSkge1xyXG4gICAgICBpZiAodHlwZW9mIG1hcmsubm90ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZTtcclxuICAgICAgICBub3RlQ29sb3IgPSBfU0VUVElOR1MuTk9URV9DT0xPUlMuWUVMTE9XO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vdGVUZXh0ID0gbWFyay5ub3RlLnRleHQgfHwgJyc7XHJcbiAgICAgICAgbm90ZUNvbG9yID0gbWFyay5ub3RlLmNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgICAgIG5vdGVDb2xvciA9IF9TRVRUSU5HUy5OT1RFX0NPTE9SU1tub3RlQ29sb3IudG9VcHBlckNhc2UoKV07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vdGVUZXh0KSB7XHJcbiAgICAgICAgdGRfbm90ZS5pbm5lclRleHQgPSBub3RlVGV4dDtcclxuICAgICAgICB0ZF9ub3RlLnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbm90ZUNvbG9yO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXJrRWwuaWQgPSAnbWFyay0nICsgbWFyay5pZDtcclxuICAgIHRoaXMudGJvZHkuYXBwZW5kQ2hpbGQobWFya0VsKTtcclxuICB9LFxyXG4gIHNvcnRCeUlkKG1hcmtzKSB7XHJcbiAgICByZXR1cm4gbWFya3Muc29ydCgobWFyazEsIG1hcmsyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkMSA9IG1hcmsxLmlkO1xyXG4gICAgICBjb25zdCBpZDIgPSBtYXJrMi5pZDtcclxuICAgICAgaWYgKGlkMSA9PT0gaWQyKSByZXR1cm4gMDtcclxuICAgICAgcmV0dXJuIGlkMSA8IGlkMiA/IC0xIDogMTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoKSB7XHJcbiAgICBpZiAodGhpcy5ub3Rlc1Nob3duKSB7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZS1ub3RlcycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLW5vdGVzJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vdGVzU2hvd24gPSAhdGhpcy5ub3Rlc1Nob3duO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVGFibGUoKSB7XHJcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC50b2dnbGUoJ2ZvbGRlZCcpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG5cclxuICBzZXREYXRlcyhlbnRyeSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdF9tb2RpZmllZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gIH0sXHJcbiAgc2V0VGl0bGUoZW50cnkpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLmlubmVyVGV4dCA9IGVudHJ5LnRpdGxlO1xyXG4gIH0sXHJcbiAgc2V0TGluayhlbnRyeSkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmwnKTtcclxuICAgIGNvbnN0IHVybCA9IGVudHJ5LnVybDtcclxuICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgIGxpbmsuaW5uZXJUZXh0ID0gdXJsO1xyXG4gIH0sXHJcbiAgc2V0U3luY01vZGUoZW50cnkpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVudHJ5LnN5bmNlZCA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5ZXMnKSA6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmNlZCcpLmlubmVyVGV4dCA9IHZhbDtcclxuICB9LFxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5zZXREYXRlcyhlbnRyeSk7XHJcbiAgICB0aGlzLnNldFRpdGxlKGVudHJ5KTtcclxuICAgIHRoaXMuc2V0TGluayhlbnRyeSk7XHJcbiAgICB0aGlzLnNldFN5bmNNb2RlKGVudHJ5KTtcclxuICB9LFxyXG4gIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGVcclxuICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7Y29uc29sZS5sb2coc3ViTWFwLCB0eXBlLCBbZS50YXJnZXQubm9kZU5hbWVdKTtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9