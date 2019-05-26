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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/tbb-menu/index.js");
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

/***/ "./content/tbb-menu/index.js":
/*!***********************************!*\
  !*** ./content/tbb-menu/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/tbb-menu/sass/index.scss");

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _port = __webpack_require__(/*! ./port */ "./content/tbb-menu/port.js");

var _port2 = _interopRequireDefault(_port);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _utils._L10N)();
new _utils._DOMMODULE({
  el: document.getElementById('menu'),
  events: {
    DOM: {
      click: {
        '#activate': 'toggle',
        '.send': 'open',
        'span': 'open'
      }
    }
  },
  port: null,
  disabled: false,
  autoinit: function autoinit() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage.settings) {
        if (!storage || !storage.sync || storage.sync.settings) return storage.settings.addon.active;
        return browser.storage.local.get().then(function (storage) {
          return storage.settings.addon.active;
        });
      }

      return true;
    }).then(function (active) {
      return _this.setActivateText(active);
    });
  },
  toggle: function toggle() {
    this.emit('toggle:addon');
    window.close();
  },
  open: function open(e, el) {
    var page = el.nodeName === 'SPAN' ? el.parentNode.id : el.id;
    this.emit('open:addon-page(tbb)', page);
    window.close();
  },
  setActivateText: function setActivateText(active) {
    var btn = document.getElementById('activate');
    btn.title = browser.i18n.getMessage('tbb_mitem_1_' + active);

    if (active) {
      btn.classList.remove('menu__icon--start');
      btn.classList.add('menu__icon--pause');
    } else {
      btn.classList.add('menu__icon--start');
      btn.classList.remove('menu__icon--pause');
    }
  }
});

/***/ }),

/***/ "./content/tbb-menu/port.js":
/*!**********************************!*\
  !*** ./content/tbb-menu/port.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'tbb-menu',
  type: 'privileged',
  events: {
    CONNECTION: ['toggle:addon', 'open:addon-page(tbb)', 'error:browser-console']
  }
});

/***/ }),

/***/ "./content/tbb-menu/sass/index.scss":
/*!******************************************!*\
  !*** ./content/tbb-menu/sass/index.scss ***!
  \******************************************/
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
      autocs: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvdGJiLW1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC90YmItbWVudS9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvdGJiLW1lbnUvc2Fzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL2RhdGEvZGVmYXVsdC1zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1NUT1JFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudHMiLCJET00iLCJjbGljayIsInBvcnQiLCJkaXNhYmxlZCIsImF1dG9pbml0IiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJsb2NhbCIsInNldEFjdGl2YXRlVGV4dCIsInRvZ2dsZSIsImVtaXQiLCJ3aW5kb3ciLCJjbG9zZSIsIm9wZW4iLCJlIiwicGFnZSIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImlkIiwiYnRuIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm5hbWUiLCJ0eXBlIiwiQ09OTkVDVElPTiIsInZlcnNpb24iLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJzaG9ydGN1dHMiLCJ6IiwieSIsInMiLCJjIiwiYiIsImQiLCJtIiwidyIsIm4iLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsIm1hcmtlcnMiLCJzdHlsZSIsImhpc3RvcnkiLCJhdXRvc2F2ZSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiaW1tdXQiLCJuYW1pbmciLCJkb3dubG9hZCIsImNvcHkiLCJzYXZlTm90ZSIsInNvcnRlZCIsInZpZXciLCJwcCIsImlnbm9yZUhhc2giLCJhdXRvY3MiLCJtaXNjIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJjdXN0b21TZWFyY2giLCJ0bXVpcG9zIiwibWFya21ldGhvZCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsIm5vdGVzIiwiYWN0aW9ucyIsIm1hcmtzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsImVudHJpZXMiLCJwYWdlbm90ZXMiLCJzcmMiLCJ0YXJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWwiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwiYXV0b1BhdXNlIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwibWV0aCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwic3Vic3RyIiwiY29udGFpbnMiLCJ0b0xvd2VyQ2FzZSIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsImwiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwiaSIsInNldCIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsInVybCIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRVSUxhbmd1YWdlIiwicmVwbGFjZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvIiwiZW52RXZlbnRzIiwiRU5WIiwiX01FRElBVE9SIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiT05FT0ZGIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidGFiIiwidW5kZWZpbmVkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYXJlYSIsImluaXQiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5IiwibG9ncyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7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Q0FBaUMsVUFBQTROLFlBQVksRUFBSTtBQUN0RCxZQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDbE0sT0FBbkMsRUFBNEM7QUFDMUMsaUJBQU85QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLElBQWhCLENBQXFCQyxHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQTZOLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDbk0sT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPa00sWUFBWSxDQUFDbE0sT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUI5QyxlIiwiZmlsZSI6ImNvbnRlbnQvdGJiLW1lbnUvdGJiLW1lbnUud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvdGJiLW1lbnUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9QT1JUIGZyb20gJy4vcG9ydCdcclxuX0wxME4oKTtcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcjYWN0aXZhdGUnOiAndG9nZ2xlJyxcclxuICAgICAgICAnLnNlbmQnOiAnb3BlbicsXHJcbiAgICAgICAgJ3NwYW4nOiAnb3BlbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcG9ydDogbnVsbCxcclxuICBkaXNhYmxlZDogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2Uuc2V0dGluZ3MpIHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc3luYyB8fCBzdG9yYWdlLnN5bmMuc2V0dGluZ3MpIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZTtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oYWN0aXZlID0+IHRoaXMuc2V0QWN0aXZhdGVUZXh0KGFjdGl2ZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGU6YWRkb24nKTtcclxuICAgIHdpbmRvdy5jbG9zZSgpO1xyXG4gIH0sXHJcbiAgb3BlbihlLCBlbCkge1xyXG4gICAgY29uc3QgcGFnZSA9IGVsLm5vZGVOYW1lID09PSAnU1BBTicgPyBlbC5wYXJlbnROb2RlLmlkIDogZWwuaWQ7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW46YWRkb24tcGFnZSh0YmIpJywgcGFnZSk7XHJcbiAgICB3aW5kb3cuY2xvc2UoKTtcclxuICB9LFxyXG4gIHNldEFjdGl2YXRlVGV4dChhY3RpdmUpIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmF0ZScpO1xyXG4gICAgYnRuLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RiYl9taXRlbV8xXycgKyBhY3RpdmUpO1xyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9faWNvbi0tc3RhcnQnKTtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2ljb24tLXBhdXNlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnbWVudV9faWNvbi0tc3RhcnQnKTtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX2ljb24tLXBhdXNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICd0YmItbWVudScsXHJcbiAgdHlwZTogJ3ByaXZpbGVnZWQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAndG9nZ2xlOmFkZG9uJyxcclxuICAgICAgJ29wZW46YWRkb24tcGFnZSh0YmIpJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZSdcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==