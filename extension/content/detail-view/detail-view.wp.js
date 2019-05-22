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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvZGV0YWlsLXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2RldGFpbC12aWV3L21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9tb2R1bGVzL21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImF1dG9pbml0IiwibmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsIk9iamVjdCIsImtleXMiLCJoaXN0b3J5IiwiZW50cmllcyIsImluY2x1ZGVzIiwibG9jYWwiLCJlbnRyeSIsImVtaXQiLCJkb2N1bWVudCIsInRpdGxlIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50cyIsIkVOViIsInNldFRpdGxlIiwiaW5uZXJUZXh0Iiwic2V0VGFnIiwidGFnIiwiaTE4biIsImdldE1lc3NhZ2UiLCJyZW5kZXIiLCJET00iLCJjbGljayIsInRtcGwiLCJ0Ym9keSIsIm1hcmtzIiwibm90ZXMiLCJub3Rlc1Nob3duIiwic29ydEJ5SWQiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW5kZXJDb3VudCIsImZvckVhY2giLCJtYXJrIiwicmVuZGVyTWFyayIsInJlbW92ZUNoaWxkIiwibWFya0VsIiwiY2xvbmVOb2RlIiwidGRfdGV4dCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZF9ub3RlIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJub3RlVGV4dCIsIm5vdGVDb2xvciIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwibm90ZSIsIl9TRVRUSU5HUyIsIk5PVEVfQ09MT1JTIiwiWUVMTE9XIiwiY29sb3IiLCJ0b1VwcGVyQ2FzZSIsInBhcmVudE5vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsImFwcGVuZENoaWxkIiwic29ydCIsIm1hcmsxIiwibWFyazIiLCJpZDEiLCJpZDIiLCJ0b2dnbGVOb3RlcyIsInJlbW92ZSIsInRvZ2dsZVRhYmxlIiwidG9nZ2xlIiwic2V0RGF0ZXMiLCJvcHRpbWl6ZURhdGVTdHJpbmciLCJEYXRlIiwiZmlyc3QiLCJ0b0xvY2FsZVN0cmluZyIsImxhc3QiLCJzZXRMaW5rIiwibGluayIsInVybCIsImhyZWYiLCJzZXRTeW5jTW9kZSIsInZhbCIsInN5bmNlZCIsImRhdGUiLCJyZXBsYWNlIiwibSIsInAiLCJxIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJNQVhfTE9HX0VOVFJJRVMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInRhcmdldCIsIkFycmF5IiwiaXNBcnJheSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJzdWJNYXAiLCJ0eXBlIiwiZSIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsInN1YnN0ciIsImNvbnRhaW5zIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicHVzaCIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNwbGljZSIsIl9leHRyYSIsImkiLCJzZXQiLCJlcnJvciIsImZpbGUiLCJmaWxlbmFtZSIsInNwbGl0IiwicG9wIiwibWVzc2FnZSIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwidGFicyIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImFjdGl2ZSIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsInRleHRDb250ZW50IiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm8iLCJlbnZFdmVudHMiLCJvbiIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJPTkVPRkYiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidGFiIiwidW5kZWZpbmVkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNB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RztBQUFFeEIsVUFBRSxFQUFFakUsQ0FBTjtBQUFTNEQsWUFBSSxFQUFFQTtBQUFmLE9BQVo7QUFDQSxVQUFJLEtBQUtnQixJQUFULEVBQWUsS0FBS0EsSUFBTCxDQUFVUyxXQUFWLENBQXNCSSxHQUF0QjtBQUNoQjs7O2tDQUNhO0FBQ1osVUFBSSxDQUFDLEtBQUtJLGtCQUFWLEVBQThCO0FBQzVCLGFBQUtDLE9BQUw7QUFDQSxhQUFLQyxzQkFBTDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtBLHNCQUFMLENBQTRCLEtBQUsvRSxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLOEUsT0FBdEIsQ0FBNUI7QUFDRDtBQUNGOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFNbEIsSUFBSSxHQUFHLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWE1TCxPQUFPLENBQUMrSyxPQUFSLENBQWdCK0IsT0FBaEIsQ0FBd0I7QUFBRXBOLFlBQUksRUFBRSxLQUFLQTtBQUFiLE9BQXhCLENBQXRDO0FBQ0FrTSxVQUFJLENBQUNvQixZQUFMLENBQWtCbEIsV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE1BQUksQ0FBQ0YsSUFBTCxHQUFZLElBQWxCO0FBQUEsT0FBOUI7QUFDRDs7OzJDQUNzQnFCLEUsRUFBSTtBQUFBOztBQUN6QmpOLGFBQU8sQ0FBQytLLE9BQVIsQ0FBZ0JtQyxTQUFoQixDQUEwQnBCLFdBQTFCLENBQXNDLFVBQUFGLElBQUksRUFBSTtBQUM1Q0EsWUFBSSxDQUFDQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsTUFBSSxDQUFDOUQsS0FBTCxDQUFXLE1BQVgsRUFBaUIsTUFBSSxDQUFDK0QsV0FBdEIsQ0FBM0I7QUFDQSxTQUFDa0IsRUFBRCxJQUFPQSxFQUFFLEVBQVQ7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFsRndCOU4sZSIsImZpbGUiOiJjb250ZW50L2RldGFpbC12aWV3L2RldGFpbC12aWV3LndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L2RldGFpbC12aWV3L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGVhZGVyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tZXRhJ1xyXG4vL2ltcG9ydCAnLi9tb2R1bGVzL25vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrcydcclxuXHJcbl9MMTBOKCk7XHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5zbGljZSgxKTtcclxuXHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMoc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMpLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZW50cnkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZW50cnknLCBlbnRyeSk7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBlbnRyeS5uYW1lO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG5cclxuICBzZXRUaXRsZShlbnRyeSkge1xyXG4gICAgdGhpcy5lbC5pbm5lclRleHQgPSBlbnRyeS5uYW1lO1xyXG4gIH0sXHJcbiAgc2V0VGFnKGVudHJ5KSB7XHJcbiAgICBjb25zdCB0YWcgPSBlbnRyeS50YWcgfHwgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLmlubmVyVGV4dCA9IHRhZztcclxuICB9LFxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5zZXRUaXRsZShlbnRyeSk7XHJcbiAgICB0aGlzLnNldFRhZyhlbnRyeSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuY29sLXRvZ2dsZSc6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgJy50YWJsZS10b2dnbGUnOiAndG9nZ2xlVGFibGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIHRtcGw6IG51bGwsXHJcbiAgdGJvZHk6IG51bGwsXHJcbiAgbWFya3M6IFtdLFxyXG4gIG5vdGVzOiBmYWxzZSxcclxuICBub3Rlc1Nob3duOiB0cnVlLFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIGNvbnN0IHRtcGwgPSB0aGlzLnRtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0aGlzLnRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMuc29ydEJ5SWQoZW50cnkubWFya3MpO1xyXG5cclxuICAgIGlmICghbWFya3MubGVuZ3RoKSB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJDb3VudChlbnRyeSk7XHJcbiAgICBtYXJrcy5mb3JFYWNoKG1hcmsgPT4gdGhpcy5yZW5kZXJNYXJrKG1hcmspKTtcclxuICAgIHRib2R5LnJlbW92ZUNoaWxkKHRtcGwpO1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzKSB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ25vLW5vdGVzJyk7XHJcbiAgfSxcclxuICByZW5kZXJDb3VudChlbnRyeSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzLWNvdW50JykuaW5uZXJUZXh0ID0gJygnICsgZW50cnkubWFya3MubGVuZ3RoICsgJyknO1xyXG4gIH0sXHJcbiAgcmVuZGVyTWFyayhtYXJrKSB7XHJcbiAgICBjb25zdCBtYXJrRWwgPSB0aGlzLnRtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgdGRfdGV4dCA9IG1hcmtFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrLXRleHQnKVswXTtcclxuICAgIGNvbnN0IHRkX25vdGUgPSBtYXJrRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFyay1ub3RlJylbMF07XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IG5vdGVUZXh0LCBub3RlQ29sb3I7XHJcbiAgICB0ZF90ZXh0LmlubmVyVGV4dCA9IG1hcmsudGV4dDtcclxuICAgIHRkX3RleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG1hcmsuc3R5bGUpO1xyXG4gICAgaWYgKG1hcmsubm90ZSkge1xyXG4gICAgICBpZiAodHlwZW9mIG1hcmsubm90ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZTtcclxuICAgICAgICBub3RlQ29sb3IgPSBfU0VUVElOR1MuTk9URV9DT0xPUlMuWUVMTE9XO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vdGVUZXh0ID0gbWFyay5ub3RlLnRleHQgfHwgJyc7XHJcbiAgICAgICAgbm90ZUNvbG9yID0gbWFyay5ub3RlLmNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgICAgIG5vdGVDb2xvciA9IF9TRVRUSU5HUy5OT1RFX0NPTE9SU1tub3RlQ29sb3IudG9VcHBlckNhc2UoKV07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vdGVUZXh0KSB7XHJcbiAgICAgICAgdGRfbm90ZS5pbm5lclRleHQgPSBub3RlVGV4dDtcclxuICAgICAgICB0ZF9ub3RlLnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbm90ZUNvbG9yO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXJrRWwuaWQgPSAnbWFyay0nICsgbWFyay5pZDtcclxuICAgIHRoaXMudGJvZHkuYXBwZW5kQ2hpbGQobWFya0VsKTtcclxuICB9LFxyXG4gIHNvcnRCeUlkKG1hcmtzKSB7XHJcbiAgICByZXR1cm4gbWFya3Muc29ydCgobWFyazEsIG1hcmsyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkMSA9IG1hcmsxLmlkO1xyXG4gICAgICBjb25zdCBpZDIgPSBtYXJrMi5pZDtcclxuICAgICAgaWYgKGlkMSA9PT0gaWQyKSByZXR1cm4gMDtcclxuICAgICAgcmV0dXJuIGlkMSA8IGlkMiA/IC0xIDogMTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoKSB7XHJcbiAgICBpZiAodGhpcy5ub3Rlc1Nob3duKSB7XHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZS1ub3RlcycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLW5vdGVzJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vdGVzU2hvd24gPSAhdGhpcy5ub3Rlc1Nob3duO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVGFibGUoKSB7XHJcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC50b2dnbGUoJ2ZvbGRlZCcpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG5cclxuICBzZXREYXRlcyhlbnRyeSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdF9tb2RpZmllZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gIH0sXHJcbiAgc2V0VGl0bGUoZW50cnkpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLmlubmVyVGV4dCA9IGVudHJ5LnRpdGxlO1xyXG4gIH0sXHJcbiAgc2V0TGluayhlbnRyeSkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmwnKTtcclxuICAgIGNvbnN0IHVybCA9IGVudHJ5LnVybDtcclxuICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgIGxpbmsuaW5uZXJUZXh0ID0gdXJsO1xyXG4gIH0sXHJcbiAgc2V0U3luY01vZGUoZW50cnkpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVudHJ5LnN5bmNlZCA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5ZXMnKSA6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmNlZCcpLmlubmVyVGV4dCA9IHZhbDtcclxuICB9LFxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5zZXREYXRlcyhlbnRyeSk7XHJcbiAgICB0aGlzLnNldFRpdGxlKGVudHJ5KTtcclxuICAgIHRoaXMuc2V0TGluayhlbnRyeSk7XHJcbiAgICB0aGlzLnNldFN5bmNNb2RlKGVudHJ5KTtcclxuICB9LFxyXG4gIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGVcclxuICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==