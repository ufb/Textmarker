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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/detail-view/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/detail-view/js/index.js":
/*!*****************************************!*\
  !*** ./content/detail-view/js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./../sass/main.scss */ "./content/detail-view/sass/main.scss");

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

__webpack_require__(/*! ./modules/header */ "./content/detail-view/js/modules/header.js");

__webpack_require__(/*! ./modules/meta */ "./content/detail-view/js/modules/meta.js");

__webpack_require__(/*! ./modules/marks */ "./content/detail-view/js/modules/marks.js");

(0, _utils._L10N)();

new _utils._MODULE({
  autoinit: function autoinit() {
    var _this = this;

    var name = decodeURIComponent(window.location.hash).slice(1);

    browser.storage.sync.get().then(function (storage) {
      if (storage.history.order.includes(name)) return storage.history.entries[name];
      return browser.storage.local.get().then(function (storage) {
        if (storage.history.order.includes(name)) return storage.history.entries[name];
      });
    }).then(function (entry) {
      _this.emit('entry', entry);
      document.title = entry.name;
    });
  }
});

/***/ }),

/***/ "./content/detail-view/js/modules/header.js":
/*!**************************************************!*\
  !*** ./content/detail-view/js/modules/header.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

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

/***/ "./content/detail-view/js/modules/marks.js":
/*!*************************************************!*\
  !*** ./content/detail-view/js/modules/marks.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('marks'),
  events: {
    ENV: {
      'entry': 'render'
    },
    DOM: {
      click: {
        '.col-toggle': 'toggleNotes'
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
    td_text.innerText = mark.text;
    td_text.setAttribute('style', mark.style);
    if (mark.note) {
      this.notes = true;
      td_note.innerText = mark.note;
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
  }
});

/***/ }),

/***/ "./content/detail-view/js/modules/meta.js":
/*!************************************************!*\
  !*** ./content/detail-view/js/modules/meta.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

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

/***/ "./content/detail-view/sass/main.scss":
/*!********************************************!*\
  !*** ./content/detail-view/sass/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./content/utils.js":
/*!**************************!*\
  !*** ./content/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../utils/dommodule */ "./utils/dommodule.js");

var _port = __webpack_require__(/*! ./../utils/port */ "./utils/port.js");

var _l10n = __webpack_require__(/*! ./../utils/l10n */ "./utils/l10n.js");

var _l10n2 = _interopRequireDefault(_l10n);

var _errorTracker = __webpack_require__(/*! ./../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports._COPY = _copy._COPY;
exports._GET_ACTIVE_TAB = _getActiveTab._GET_ACTIVE_TAB;
exports._EXTEND = _extend2.default;
exports._MODULE = _module._MODULE;
exports._DOMMODULE = _dommodule._DOMMODULE;
exports._PORT = _port._PORT;
exports._L10N = _l10n2.default;
exports._ERRORTRACKER = _errorTracker2.default;

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _COPY = function _COPY(original, clone) {
  clone = clone || {};

  for (var i in original) {
    if (original.hasOwnProperty(i)) {
      if (_typeof(original[i]) === 'object') {
        clone[i] = Array.isArray(original[i]) ? [] : {};
        _COPY(original[i], clone[i]);
      } else {
        clone[i] = original[i];
      }
    }
  }
  return clone;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _DOMMODULE = exports._DOMMODULE = function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  function _DOMMODULE(obj) {
    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];

    var _this = _possibleConstructorReturn(this, (_DOMMODULE.__proto__ || Object.getPrototypeOf(_DOMMODULE)).call(this, obj));

    _this.addListenersManually || _this.addListeners();
    return _this;
  }

  _createClass(_DOMMODULE, [{
    key: 'generalHandler',
    value: function generalHandler(subMap, type, e) {
      var el = e.target,
          selector = void 0,
          _sel = void 0,
          meth = void 0,
          f = void 0,
          isId = void 0,
          isClass = void 0,
          isDoc = void 0;

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
    key: 'addListener',
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
    key: 'addListeners',
    value: function addListeners() {
      var events = this.events,
          domEvents = void 0,
          el = void 0,
          subMap = void 0,
          type = void 0,
          handler = void 0;

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
    key: 'removeListeners',
    value: function removeListeners() {
      var type = void 0,
          _bound = void 0,
          l = void 0;

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
          set = void 0;
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

exports.default = _ERRORTRACKER;

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

exports.default = function (obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }return obj1;
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

  return browser.tabs.query({ currentWindow: true, active: true }).then(function (tabs) {
    return tabs[0];
  });
};

exports._GET_ACTIVE_TAB = _GET_ACTIVE_TAB;

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

exports.default = function () {
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
  var el = void 0,
      data = void 0,
      dataset = void 0;
  // Set the language attribute of the document.
  document.documentElement.setAttribute('lang', browser.i18n.getUILanguage().replace('_', '-'));
  // Get all elements that are marked as being translateable.
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
      if (!_iteratorNormalCompletion && _iterator.return) {
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
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var topics = {};

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'on',
    value: function on(event, handler) {
      if (!topics[event]) topics[event] = [];

      topics[event].push(handler);
    }
  }, {
    key: 'emit',
    value: function emit(events) {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      events = events.split(' ');

      var i = 0,
          l = events.length,
          topic = void 0;

      for (; i < l; i++) {
        topic = topics[events[i]];

        if (topic) topic.forEach(function (handler) {
          return handler.apply(_this, args);
        });
      }
    }
  }, {
    key: 'request',
    value: function request(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return browser.runtime.sendMessage({ ev: event, args: args, wait: true }).catch(function () {});
    }
  }, {
    key: 'proxy',
    value: function proxy(context, func) {
      for (var _len3 = arguments.length, args1 = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args1[_key3 - 2] = arguments[_key3];
      }

      return function () {
        for (var _len4 = arguments.length, args2 = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args2[_key4] = arguments[_key4];
        }

        return func.apply(context, args1.concat(args2));
      };
    }
  }]);

  return _class;
}();

exports.default = _class;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MODULE = exports._MODULE = function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  function _MODULE(obj) {
    _classCallCheck(this, _MODULE);

    var _this = _possibleConstructorReturn(this, (_MODULE.__proto__ || Object.getPrototypeOf(_MODULE)).call(this));

    for (o in obj) {
      _this[o] = obj[o];
    }var events = _this.events,
        envEvents = void 0,
        o = void 0,
        e = void 0,
        handler = void 0;

    if (events && (envEvents = events.ENV)) {
      for (e in envEvents) {
        handler = envEvents[e];
        if (_this[handler]) _this.on(e, _this.proxy(_this, _this[handler]));
      }
    }
    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator2.default);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _PORT = exports._PORT = function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    _classCallCheck(this, _PORT);

    var _this = _possibleConstructorReturn(this, (_PORT.__proto__ || Object.getPrototypeOf(_PORT)).call(this, obj));

    _this.port = null;

    var type = _this.type;

    browser.runtime.onMessage.addListener(_this.proxy(_this, _this.passMessage));

    if (type === 'privileged' || type === 'background') _this.initPorting();

    var events = _this.events,
        oneOffEvents = void 0,
        connectionBasedEvents = void 0;

    if (events) {
      oneOffEvents = events.ONEOFF;
      if (oneOffEvents) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            _this.on(e, _this.proxy(_this, _this.sendMessage, e));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
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

            _this.on(f, _this.proxy(_this, _this.postMessage, f));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
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
    key: 'passMessage',
    value: function passMessage(req, sender, sendResponse) {
      req.args = req.args || [];
      var args = [].concat(req.ev, req.args);
      if (!sender || !sender.name) args = args.concat(sender, sendResponse);
      this.emit.apply(this, args);
      if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called
      return false;
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(e) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var type = this.type;
      var msg = { ev: e, args: args };
      if (type === 'content') browser.runtime.sendMessage(msg).catch(function () {});else if (type === 'background') {
        var lastArg = args[args.length - 1];
        if (lastArg !== undefined && lastArg.tab) {
          browser.tabs.sendMessage(lastArg.tab, msg).catch(function () {});
        } else {
          browser.tabs.query({/* currentWindow: false, active: false */}).then(function (tabs) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var tab = _step3.value;

                browser.tabs.sendMessage(tab.id, msg).catch(function () {});
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
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
  }, {
    key: 'postMessage',
    value: function postMessage(e) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var msg = { ev: e, args: args };
      if (this.port) this.port.postMessage(msg);
    }
  }, {
    key: 'initPorting',
    value: function initPorting() {
      if (!this.postponeConnection) {
        this.connect();
        this.addConnectionListeners();
      } else {
        this.addConnectionListeners(this.proxy(this, this.connect));
      }
    }
  }, {
    key: 'connect',
    value: function connect() {
      var _this2 = this;

      var port = this.port = this.port || browser.runtime.connect({ name: this.name });
      port.onDisconnect.addListener(function () {
        return _this2.port = null;
      });
    }
  }, {
    key: 'addConnectionListeners',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9kZXRhaWwtdmlldy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2RldGFpbC12aWV3L2pzL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvZGV0YWlsLXZpZXcvanMvbW9kdWxlcy9tYXJrcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2RldGFpbC12aWV3L2pzL21vZHVsZXMvbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2RldGFpbC12aWV3L3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL2NvbnRlbnQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiYXV0b2luaXQiLCJuYW1lIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic2xpY2UiLCJicm93c2VyIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJ0aGVuIiwiaGlzdG9yeSIsIm9yZGVyIiwiaW5jbHVkZXMiLCJlbnRyaWVzIiwibG9jYWwiLCJlbWl0IiwiZW50cnkiLCJkb2N1bWVudCIsInRpdGxlIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50cyIsIkVOViIsInNldFRpdGxlIiwiaW5uZXJUZXh0Iiwic2V0VGFnIiwidGFnIiwiaTE4biIsImdldE1lc3NhZ2UiLCJyZW5kZXIiLCJET00iLCJjbGljayIsInRtcGwiLCJ0Ym9keSIsIm1hcmtzIiwibm90ZXMiLCJub3Rlc1Nob3duIiwic29ydEJ5SWQiLCJyZW5kZXJDb3VudCIsImZvckVhY2giLCJyZW5kZXJNYXJrIiwibWFyayIsInJlbW92ZUNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwibGVuZ3RoIiwibWFya0VsIiwiY2xvbmVOb2RlIiwidGRfdGV4dCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZF9ub3RlIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsIm5vdGUiLCJpZCIsImFwcGVuZENoaWxkIiwic29ydCIsIm1hcmsxIiwibWFyazIiLCJpZDEiLCJpZDIiLCJ0b2dnbGVOb3RlcyIsInJlbW92ZSIsInNldERhdGVzIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiRGF0ZSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJsYXN0Iiwic2V0TGluayIsImxpbmsiLCJ1cmwiLCJocmVmIiwic2V0U3luY01vZGUiLCJ2YWwiLCJzeW5jZWQiLCJkYXRlIiwicmVwbGFjZSIsIm0iLCJwIiwicSIsIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJvcmlnaW5hbCIsImNsb25lIiwiaSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsInN1Yk1hcCIsInR5cGUiLCJlIiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJfc2VsIiwibWV0aCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwic3Vic3RyIiwiY29udGFpbnMiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsImwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0IiwiZmlsZSIsImVycm9yIiwiZmlsZW5hbWUiLCJzcGxpdCIsInBvcCIsIm1lc3NhZ2UiLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwidGltZSIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsInRhYnMiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJhY3RpdmUiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGEiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImwxMG5BdHRyIiwiYXR0ciIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjYXRjaCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsIm8iLCJlbnZFdmVudHMiLCJvbiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJPTkVPRkYiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwidGFiIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCJdLCJtYXBw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QU02QixNQUFNLEVBQUV4QixJQUFJL0QsQ0FBTixFQUFTMEQsTUFBTUEsSUFBZixFQUFaO0FBQ0EsVUFBSSxLQUFLZ0IsSUFBVCxFQUFlLEtBQUtBLElBQUwsQ0FBVVMsV0FBVixDQUFzQkksR0FBdEI7QUFDaEI7OztrQ0FDYTtBQUNaLFVBQUksQ0FBQyxLQUFLSSxrQkFBVixFQUE4QjtBQUM1QixhQUFLQyxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLNUUsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBSzJFLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTWxCLE9BQU8sS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYTdLLFFBQVFnSyxPQUFSLENBQWdCK0IsT0FBaEIsQ0FBd0IsRUFBRXJNLE1BQU0sS0FBS0EsSUFBYixFQUF4QixDQUF0QztBQUNBbUwsV0FBS29CLFlBQUwsQ0FBa0JsQixXQUFsQixDQUE4QjtBQUFBLGVBQU0sT0FBS0YsSUFBTCxHQUFZLElBQWxCO0FBQUEsT0FBOUI7QUFDRDs7OzJDQUNzQnFCLEUsRUFBSTtBQUFBOztBQUN6QmxNLGNBQVFnSyxPQUFSLENBQWdCbUMsU0FBaEIsQ0FBMEJwQixXQUExQixDQUFzQyxnQkFBUTtBQUM1Q0YsYUFBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLE9BQUszRCxLQUFMLFNBQWlCLE9BQUs0RCxXQUF0QixDQUEzQjtBQUNBLFNBQUNrQixFQUFELElBQU9BLElBQVA7QUFDRCxPQUhEO0FBSUQiLCJmaWxlIjoiY29udGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9kZXRhaWwtdmlldy9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi8uLi9zYXNzL21haW4uc2NzcydcclxuXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2hlYWRlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbWV0YSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya3MnXHJcblxyXG5fTDEwTigpO1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaGFzaCkuc2xpY2UoMSk7XHJcblxyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UuaGlzdG9yeS5vcmRlci5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuIHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UuaGlzdG9yeS5vcmRlci5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuIHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGVudHJ5ID0+IHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2VudHJ5JywgZW50cnkpO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gZW50cnkubmFtZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW50cnk6IG51bGwsXHJcblxyXG4gIHNldFRpdGxlKGVudHJ5KSB7XHJcbiAgICB0aGlzLmVsLmlubmVyVGV4dCA9IGVudHJ5Lm5hbWU7XHJcbiAgfSxcclxuICBzZXRUYWcoZW50cnkpIHtcclxuICAgIGNvbnN0IHRhZyA9IGVudHJ5LnRhZyB8fCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykuaW5uZXJUZXh0ID0gdGFnO1xyXG4gIH0sXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICB0aGlzLnNldFRpdGxlKGVudHJ5KTtcclxuICAgIHRoaXMuc2V0VGFnKGVudHJ5KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi8uLi91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmNvbC10b2dnbGUnOiAndG9nZ2xlTm90ZXMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIHRtcGw6IG51bGwsXHJcbiAgdGJvZHk6IG51bGwsXHJcbiAgbWFya3M6IFtdLFxyXG4gIG5vdGVzOiBmYWxzZSxcclxuICBub3Rlc1Nob3duOiB0cnVlLFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgIGNvbnN0IHRtcGwgPSB0aGlzLnRtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgdGJvZHkgPSB0aGlzLnRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMuc29ydEJ5SWQoZW50cnkubWFya3MpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyQ291bnQoZW50cnkpO1xyXG4gICAgbWFya3MuZm9yRWFjaChtYXJrID0+IHRoaXMucmVuZGVyTWFyayhtYXJrKSk7XHJcbiAgICB0Ym9keS5yZW1vdmVDaGlsZCh0bXBsKTtcclxuICAgIGlmICghdGhpcy5ub3RlcykgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCduby1ub3RlcycpO1xyXG4gIH0sXHJcbiAgcmVuZGVyQ291bnQoZW50cnkpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcy1jb3VudCcpLmlubmVyVGV4dCA9ICcoJyArIGVudHJ5Lm1hcmtzLmxlbmd0aCArICcpJztcclxuICB9LFxyXG4gIHJlbmRlck1hcmsobWFyaykge1xyXG4gICAgY29uc3QgbWFya0VsID0gdGhpcy50bXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IHRkX3RleHQgPSBtYXJrRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFyay10ZXh0JylbMF07XHJcbiAgICBjb25zdCB0ZF9ub3RlID0gbWFya0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmstbm90ZScpWzBdO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRkX3RleHQuaW5uZXJUZXh0ID0gbWFyay50ZXh0O1xyXG4gICAgdGRfdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbWFyay5zdHlsZSk7XHJcbiAgICBpZiAobWFyay5ub3RlKSB7XHJcbiAgICAgIHRoaXMubm90ZXMgPSB0cnVlO1xyXG4gICAgICB0ZF9ub3RlLmlubmVyVGV4dCA9IG1hcmsubm90ZTtcclxuICAgIH1cclxuICAgIG1hcmtFbC5pZCA9ICdtYXJrLScgKyBtYXJrLmlkO1xyXG4gICAgdGhpcy50Ym9keS5hcHBlbmRDaGlsZChtYXJrRWwpO1xyXG4gIH0sXHJcbiAgc29ydEJ5SWQobWFya3MpIHtcclxuICAgIHJldHVybiBtYXJrcy5zb3J0KChtYXJrMSwgbWFyazIpID0+IHtcclxuICAgICAgY29uc3QgaWQxID0gbWFyazEuaWQ7XHJcbiAgICAgIGNvbnN0IGlkMiA9IG1hcmsyLmlkO1xyXG4gICAgICBpZiAoaWQxID09PSBpZDIpIHJldHVybiAwO1xyXG4gICAgICByZXR1cm4gaWQxIDwgaWQyID8gLTEgOiAxO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcygpIHtcclxuICAgIGlmICh0aGlzLm5vdGVzU2hvd24pIHtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdoaWRlLW5vdGVzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtbm90ZXMnKTtcclxuICAgIH1cclxuICAgIHRoaXMubm90ZXNTaG93biA9ICF0aGlzLm5vdGVzU2hvd247XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGVudHJ5OiBudWxsLFxyXG5cclxuICBzZXREYXRlcyhlbnRyeSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdF9tb2RpZmllZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gIH0sXHJcbiAgc2V0VGl0bGUoZW50cnkpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLmlubmVyVGV4dCA9IGVudHJ5LnRpdGxlO1xyXG4gIH0sXHJcbiAgc2V0TGluayhlbnRyeSkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmwnKTtcclxuICAgIGNvbnN0IHVybCA9IGVudHJ5LnVybDtcclxuICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgIGxpbmsuaW5uZXJUZXh0ID0gdXJsO1xyXG4gIH0sXHJcbiAgc2V0U3luY01vZGUoZW50cnkpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVudHJ5LnN5bmNlZCA/IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5ZXMnKSA6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmNlZCcpLmlubmVyVGV4dCA9IHZhbDtcclxuICB9LFxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgdGhpcy5zZXREYXRlcyhlbnRyeSk7XHJcbiAgICB0aGlzLnNldFRpdGxlKGVudHJ5KTtcclxuICAgIHRoaXMuc2V0TGluayhlbnRyeSk7XHJcbiAgICB0aGlzLnNldFN5bmNNb2RlKGVudHJ5KTtcclxuICB9LFxyXG4gIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGVcclxuICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gIH1cclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIgfVxyXG4iLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBjbG9uZSkge1xyXG4gIGNsb25lID0gY2xvbmUgfHwge307XHJcblxyXG4gIGZvciAobGV0IGkgaW4gb3JpZ2luYWwpIHtcclxuICAgIGlmIChvcmlnaW5hbC5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICBpZiAodHlwZW9mIG9yaWdpbmFsW2ldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGNsb25lW2ldID0gQXJyYXkuaXNBcnJheShvcmlnaW5hbFtpXSkgPyBbXSA6IHt9O1xyXG4gICAgICAgIF9DT1BZKG9yaWdpbmFsW2ldLCBjbG9uZVtpXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvbmVbaV0gPSBvcmlnaW5hbFtpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY2xvbmU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9ET01NT0RVTEUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBvYmouX2JvdW5kID0ge307XHJcbiAgICBvYmouX2V4dHJhQm91bmQgPSBbXTtcclxuXHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnNNYW51YWxseSB8fCB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiBsYXN0QXJnLnRhYikge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=