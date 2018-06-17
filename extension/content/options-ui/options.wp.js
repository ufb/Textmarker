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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/options-ui/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/options-ui/js/index.js":
/*!****************************************!*\
  !*** ./content/options-ui/js/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./../sass/main.scss */ "./content/options-ui/sass/main.scss");

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

(0, _utils._L10N)();

Array.from(document.getElementsByTagName('button')).forEach(function (button) {
  button.addEventListener('click', function (e) {
    browser.runtime.sendMessage({
      ev: 'open:addon-page',
      args: [e.target.getAttribute('data-id')]
    });
  }, false);
});

/***/ }),

/***/ "./content/options-ui/sass/main.scss":
/*!*******************************************!*\
  !*** ./content/options-ui/sass/main.scss ***!
  \*******************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9vcHRpb25zLXVpL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvb3B0aW9ucy11aS9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3V0aWxzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJyb3dzZXIiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJldiIsImFyZ3MiLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIm9yaWdpbmFsIiwiY2xvbmUiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJpc0FycmF5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsInN1Yk1hcCIsInR5cGUiLCJlbCIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsInN1YnN0ciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaWQiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlciIsInB1c2giLCJldmVudHMiLCJkb21FdmVudHMiLCJET00iLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwibCIsImxlbmd0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJfZXh0cmEiLCJzZXQiLCJhdXRvaW5pdCIsIndpbmRvdyIsImZpbGUiLCJlcnJvciIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJpbmNsdWRlcyIsImVtaXQiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJ0YWJzIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiYWN0aXZlIiwidGhlbiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpMThuIiwiZ2V0VUlMYW5ndWFnZSIsInJlcGxhY2UiLCJ0ZXh0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwiZ2V0TWVzc2FnZSIsInRleHRDb250ZW50IiwibDEwbkF0dHIiLCJhdHRyIiwidG9waWNzIiwiZXZlbnQiLCJ0b3BpYyIsImFwcGx5Iiwid2FpdCIsImNhdGNoIiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0IiwibyIsImVudkV2ZW50cyIsIkVOViIsIm9uIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIk9ORU9GRiIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm5hbWUiLCJtc2ciLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwidGFiIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBOztBQUVBOztBQUVBQSxNQUFNQyxJQUFOLENBQVdDLFNBQVNDLG9CQUFULENBQThCLFFBQTlCLENBQVgsRUFBb0RDLE9BQXBELENBQTRELGtCQUFVO0FBQ3BFQyxTQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxhQUFLO0FBQ3BDQyxZQUFRQyxPQUFSLENBQWdCQyxXQUFoQixDQUE0QjtBQUMxQkMsVUFBSSxpQkFEc0I7QUFFMUJDLFlBQU0sQ0FBQ0MsRUFBRUMsTUFBRixDQUFTQyxZQUFULENBQXNCLFNBQXRCLENBQUQ7QUFGb0IsS0FBNUI7QUFJRCxHQUxELEVBS0csS0FMSDtBQU1ELENBUEQsRTs7Ozs7Ozs7Ozs7QUNOQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBRVNDLEs7UUFBT0MsZTtRQUFpQkMsTztRQUFTQyxPO1FBQVNDLFU7UUFBWUMsSztRQUFPQyxLO1FBQU9DLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDdFLElBQU1QLFFBQVEsU0FBUkEsS0FBUSxDQUFTUSxRQUFULEVBQW1CQyxLQUFuQixFQUEwQjtBQUN0Q0EsVUFBUUEsU0FBUyxFQUFqQjs7QUFFQSxPQUFLLElBQUlDLENBQVQsSUFBY0YsUUFBZCxFQUF3QjtBQUN0QixRQUFJQSxTQUFTRyxjQUFULENBQXdCRCxDQUF4QixDQUFKLEVBQWdDO0FBQzlCLFVBQUksUUFBT0YsU0FBU0UsQ0FBVCxDQUFQLE1BQXVCLFFBQTNCLEVBQXFDO0FBQ25DRCxjQUFNQyxDQUFOLElBQVd6QixNQUFNMkIsT0FBTixDQUFjSixTQUFTRSxDQUFULENBQWQsSUFBNkIsRUFBN0IsR0FBa0MsRUFBN0M7QUFDQVYsY0FBTVEsU0FBU0UsQ0FBVCxDQUFOLEVBQW1CRCxNQUFNQyxDQUFOLENBQW5CO0FBQ0QsT0FIRCxNQUdPO0FBQ0xELGNBQU1DLENBQU4sSUFBV0YsU0FBU0UsQ0FBVCxDQUFYO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBT0QsS0FBUDtBQUNELENBZEQ7O1FBZ0JTVCxLLEdBQUFBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCVDs7Ozs7Ozs7SUFFYUksVSxXQUFBQSxVOzs7QUFFWCxzQkFBWVMsR0FBWixFQUFpQjtBQUFBOztBQUNmQSxRQUFJQyxNQUFKLEdBQWEsRUFBYjtBQUNBRCxRQUFJRSxXQUFKLEdBQWtCLEVBQWxCOztBQUZlLHdIQUlURixHQUpTOztBQU1mLFVBQUtHLG9CQUFMLElBQTZCLE1BQUtDLFlBQUwsRUFBN0I7QUFOZTtBQU9oQjs7OzttQ0FDY0MsTSxFQUFRQyxJLEVBQU10QixDLEVBQUc7QUFDOUIsVUFBSXVCLEtBQUt2QixFQUFFQyxNQUFYO0FBQUEsVUFDSXVCLGlCQURKO0FBQUEsVUFDY0MsYUFEZDtBQUFBLFVBQ29CQyxhQURwQjtBQUFBLFVBQzBCQyxVQUQxQjtBQUFBLFVBQzZCQyxhQUQ3QjtBQUFBLFVBQ21DQyxnQkFEbkM7QUFBQSxVQUM0Q0MsY0FENUM7O0FBR0EsV0FBS04sUUFBTCxJQUFpQkgsTUFBakIsRUFBeUI7QUFDdkJNLFlBQUlILFNBQVMsQ0FBVCxDQUFKO0FBQ0FDLGVBQU9ELFFBQVA7QUFDQUksZUFBT0QsTUFBTSxHQUFiO0FBQ0FFLGtCQUFVRixNQUFNLEdBQWhCO0FBQ0FHLGdCQUFRSCxNQUFNLEdBQWQ7O0FBRUEsWUFBSUMsUUFBUUMsT0FBWixFQUFxQkwsV0FBV0EsU0FBU08sTUFBVCxDQUFnQixDQUFoQixDQUFYOztBQUVyQixZQUFJRCxTQUNBRCxXQUFXTixHQUFHUyxTQUFILENBQWFDLFFBQWIsQ0FBc0JULFFBQXRCLENBRFgsSUFFQUksUUFBUUwsR0FBR1csRUFBSCxLQUFVVixRQUZsQixJQUdBRCxHQUFHWSxRQUFILENBQVlDLFdBQVosT0FBOEJaLFFBSGxDLEVBSUU7O0FBRUFFLGlCQUFPTCxPQUFPSSxJQUFQLENBQVA7O0FBRUEsY0FBSSxPQUFPQyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDQSxLQUFLMUIsQ0FBTCxFQUFRdUIsRUFBUixFQUFoQyxLQUNLLElBQUksS0FBS0csSUFBTCxDQUFKLEVBQWdCLEtBQUtBLElBQUwsRUFBVzFCLENBQVgsRUFBY3VCLEVBQWQ7O0FBRXJCO0FBQ0Q7QUFDRjtBQUNGOzs7Z0NBQ1dELEksRUFBTUksSSxFQUFNSCxFLEVBQUk7QUFDMUJBLFdBQUtBLE1BQU0sS0FBS0EsRUFBaEI7QUFDQSxVQUFNYyxVQUFVLE9BQU9YLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkJBLElBQTdCLEdBQW9DLEtBQUtBLElBQUwsQ0FBcEQ7O0FBRUFILFNBQUc3QixnQkFBSCxDQUFvQjRCLElBQXBCLEVBQTBCZSxPQUExQixFQUFtQyxLQUFuQzs7QUFFQSxVQUFJZCxPQUFPLEtBQUtBLEVBQWhCLEVBQW9CO0FBQ2xCLFlBQUksQ0FBQyxLQUFLTixNQUFMLENBQVlLLElBQVosQ0FBTCxFQUF3QixLQUFLTCxNQUFMLENBQVlLLElBQVosSUFBb0IsRUFBcEI7QUFDeEIsYUFBS0wsTUFBTCxDQUFZSyxJQUFaLEVBQWtCZ0IsSUFBbEIsQ0FBdUJELE9BQXZCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS25CLFdBQUwsQ0FBaUJvQixJQUFqQixDQUFzQixDQUFDZixFQUFELEVBQUtELElBQUwsRUFBV2UsT0FBWCxDQUF0QjtBQUNEO0FBQ0Y7OzttQ0FDYztBQUNiLFVBQUlFLFNBQVMsS0FBS0EsTUFBbEI7QUFBQSxVQUNJQyxrQkFESjtBQUFBLFVBQ2VqQixXQURmO0FBQUEsVUFDbUJGLGVBRG5CO0FBQUEsVUFDMkJDLGFBRDNCO0FBQUEsVUFDaUNlLGdCQURqQzs7QUFHQSxVQUFJLENBQUNFLE1BQUQsSUFBVyxFQUFFQyxZQUFZRCxPQUFPRSxHQUFyQixDQUFYLElBQXdDLEVBQUVsQixLQUFLLEtBQUtBLEVBQVosQ0FBNUMsRUFBNkQsT0FBTyxLQUFQOztBQUU3RCxXQUFLRCxJQUFMLElBQWFrQixTQUFiLEVBQXdCO0FBQ3RCbkIsaUJBQVNtQixVQUFVbEIsSUFBVixDQUFUO0FBQ0FlLGtCQUFVLEtBQUtLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtDLGNBQXRCLEVBQXNDdEIsTUFBdEMsRUFBOENDLElBQTlDLENBQVY7QUFDQUMsV0FBRzdCLGdCQUFILENBQW9CNEIsSUFBcEIsRUFBMEJlLE9BQTFCLEVBQW1DLEtBQW5DO0FBQ0EsWUFBSSxDQUFDLEtBQUtwQixNQUFMLENBQVlLLElBQVosQ0FBTCxFQUF3QixLQUFLTCxNQUFMLENBQVlLLElBQVosSUFBb0IsRUFBcEI7QUFDeEIsYUFBS0wsTUFBTCxDQUFZSyxJQUFaLEVBQWtCZ0IsSUFBbEIsQ0FBdUJELE9BQXZCO0FBQ0Q7QUFDRjs7O3NDQUNpQjtBQUNoQixVQUFJZixhQUFKO0FBQUEsVUFBVUwsZUFBVjtBQUFBLFVBQWtCMkIsVUFBbEI7O0FBRUEsV0FBS3RCLElBQUwsSUFBYSxLQUFLTCxNQUFsQixFQUEwQjtBQUN4QkEsaUJBQVMsS0FBS0EsTUFBTCxDQUFZSyxJQUFaLENBQVQ7QUFDQXNCLFlBQUkzQixPQUFPNEIsTUFBWDtBQUNBLGVBQU9ELEdBQVAsRUFBWTtBQUNWLGVBQUtyQixFQUFMLENBQVF1QixtQkFBUixDQUE0QnhCLElBQTVCLEVBQWtDTCxPQUFPMkIsQ0FBUCxDQUFsQyxFQUE2QyxLQUE3QztBQUNBM0IsaUJBQU84QixNQUFQLENBQWNILENBQWQsRUFBaUIsQ0FBakI7QUFDRDtBQUNGOztBQUVELFVBQUlJLFNBQVMsS0FBSzlCLFdBQWxCO0FBQUEsVUFBK0JMLElBQUksQ0FBbkM7QUFBQSxVQUFzQ29DLFlBQXRDO0FBQ0FMLFVBQUlJLE9BQU9ILE1BQVg7O0FBRUEsYUFBT2hDLElBQUkrQixDQUFYLEVBQWMvQixHQUFkLEVBQW1CO0FBQ2pCb0MsY0FBTUQsT0FBT25DLENBQVAsQ0FBTjtBQUNBb0MsWUFBSSxDQUFKLEVBQU9ILG1CQUFQLENBQTJCRyxJQUFJLENBQUosQ0FBM0IsRUFBbUNBLElBQUksQ0FBSixDQUFuQyxFQUEyQyxLQUEzQztBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Rkg7O0FBRUEsSUFBTXZDLGdCQUFnQixvQkFBWTtBQUNoQ3dDLFVBRGdDLHNCQUNyQjtBQUFBOztBQUNUQyxXQUFPekQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsaUJBQVM7QUFDeEMsVUFBTTBELE9BQU9DLE1BQU1DLFFBQU4sQ0FBZUMsS0FBZixDQUFxQixHQUFyQixFQUEwQkMsR0FBMUIsRUFBYjtBQUNBLFVBQUksQ0FBQyxlQUFELEVBQWtCLGdCQUFsQixFQUFvQyxlQUFwQyxFQUFxRCxrQkFBckQsRUFBeUVDLFFBQXpFLENBQWtGTCxJQUFsRixDQUFKLEVBQTZGO0FBQzNGLGNBQUtNLElBQUwsQ0FBVSx1QkFBVixFQUFtQztBQUNqQ0MsbUJBQVNOLE1BQU1NLE9BRGtCO0FBRWpDQyxvQkFBVVAsTUFBTUMsUUFBTixDQUFlQyxLQUFmLENBQXFCLEdBQXJCLEVBQTBCQyxHQUExQixHQUFnQ0QsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkNNLEtBQTNDLEtBQXFELEdBQXJELEdBQTJEUixNQUFNUyxNQUFqRSxHQUEwRSxHQUExRSxHQUFnRlQsTUFBTVUsS0FGL0Q7QUFHakNDLGdCQUFPLElBQUlDLElBQUosRUFBRCxDQUFhQyxPQUFiO0FBSDJCLFNBQW5DO0FBS0Q7QUFDRixLQVRELEVBU0csS0FUSDtBQVVEO0FBWitCLENBQVosQ0FBdEI7O2tCQWVleEQsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2pCQSxVQUFTeUQsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQ2xDLE9BQUssSUFBSXZELENBQVQsSUFBY3VELElBQWQ7QUFDRSxRQUFJLENBQUNELEtBQUt0RCxDQUFMLENBQUwsRUFBY3NELEtBQUt0RCxDQUFMLElBQVV1RCxLQUFLdkQsQ0FBTCxDQUFWO0FBRGhCLEdBR0EsT0FBT3NELElBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xELElBQU0vRCxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQVc7O0FBRWpDLFNBQU9ULFFBQVEwRSxJQUFSLENBQWFDLEtBQWIsQ0FBbUIsRUFBRUMsZUFBZSxJQUFqQixFQUF1QkMsUUFBUSxJQUEvQixFQUFuQixFQUEwREMsSUFBMUQsQ0FBK0Q7QUFBQSxXQUFRSixLQUFLLENBQUwsQ0FBUjtBQUFBLEdBQS9ELENBQVA7QUFDRCxDQUhEOztRQUtTakUsZSxHQUFBQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDd0NNLFlBQVc7QUFDeEJkLFdBQVNJLGdCQUFULENBQTBCLGtCQUExQixFQUE4QztBQUFBLFdBQU1nRixtQkFBTjtBQUFBLEdBQTlDLEVBQXlFO0FBQ3ZFQyxhQUFTLEtBRDhEO0FBRXZFQyxhQUFTLElBRjhEO0FBR3ZFQyxVQUFNO0FBSGlFLEdBQXpFO0FBS0QsQzs7QUFuREQ7Ozs7Ozs7O0FBUUEsU0FBU0gsaUJBQVQsR0FBNkI7QUFDM0IsTUFBSW5ELFdBQUo7QUFBQSxNQUFRdUQsYUFBUjtBQUFBLE1BQWNDLGdCQUFkO0FBQ0E7QUFDQXpGLFdBQVMwRixlQUFULENBQXlCQyxZQUF6QixDQUFzQyxNQUF0QyxFQUE4Q3RGLFFBQVF1RixJQUFSLENBQWFDLGFBQWIsR0FBNkJDLE9BQTdCLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQTlDO0FBQ0E7QUFDQSxNQUFNQyxlQUFlL0YsU0FBU2dHLGdCQUFULENBQTBCLGlCQUExQixDQUFyQjtBQUNBLE1BQU1DLGVBQWVqRyxTQUFTZ0csZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXJCOztBQU4yQjtBQUFBO0FBQUE7O0FBQUE7QUFRM0IseUJBQVVELFlBQVYsOEhBQXdCO0FBQXBCOUQsUUFBb0I7O0FBQ3RCd0QsZ0JBQVV4RCxHQUFHd0QsT0FBYjtBQUNBLFVBQU1TLFNBQVNULFFBQVFTLE1BQXZCOztBQUVBLFVBQUlBLE1BQUosRUFBWTtBQUNWVixlQUFPbkYsUUFBUXVGLElBQVIsQ0FBYU8sVUFBYixDQUF3QkQsTUFBeEIsQ0FBUDs7QUFFQSxZQUFHVixRQUFRQSxRQUFRLElBQW5CLEVBQXlCO0FBQ3ZCdkQsYUFBR21FLFdBQUgsR0FBaUJaLElBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBbkIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQW9CM0IsMEJBQVVTLFlBQVYsbUlBQXdCO0FBQXBCaEUsUUFBb0I7O0FBQ3RCd0QsZ0JBQVV4RCxHQUFHd0QsT0FBYjs7QUFFQSxPQUFDLE9BQUQsRUFBVSxhQUFWLEVBQXlCdkYsT0FBekIsQ0FBaUMsZ0JBQVE7QUFDdkMsWUFBTW1HLFdBQVdaLFFBQVEsU0FBU2EsSUFBakIsQ0FBakI7O0FBRUEsWUFBSUQsUUFBSixFQUFjO0FBQ1piLGlCQUFPbkYsUUFBUXVGLElBQVIsQ0FBYU8sVUFBYixDQUF3QkUsUUFBeEIsQ0FBUDs7QUFFQSxjQUFJYixRQUFRQSxRQUFRLElBQXBCLEVBQTBCO0FBQ3hCdkQsZUFBRzBELFlBQUgsQ0FBZ0JXLEtBQUt4RCxXQUFMLEVBQWhCLEVBQW9DMEMsSUFBcEM7QUFDRDtBQUNGO0FBQ0YsT0FWRDtBQVdEO0FBbEMwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUM1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NELElBQUllLFNBQVMsRUFBYjs7Ozs7Ozs7O3VCQUlLQyxLLEVBQU96RCxPLEVBQVM7QUFDakIsVUFBSSxDQUFDd0QsT0FBT0MsS0FBUCxDQUFMLEVBQW9CRCxPQUFPQyxLQUFQLElBQWdCLEVBQWhCOztBQUVwQkQsYUFBT0MsS0FBUCxFQUFjeEQsSUFBZCxDQUFtQkQsT0FBbkI7QUFDRDs7O3lCQUNJRSxNLEVBQWlCO0FBQUE7O0FBQUEsd0NBQU54QyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDcEJ3QyxlQUFTQSxPQUFPZ0IsS0FBUCxDQUFhLEdBQWIsQ0FBVDs7QUFFQSxVQUFJMUMsSUFBSSxDQUFSO0FBQUEsVUFBVytCLElBQUlMLE9BQU9NLE1BQXRCO0FBQUEsVUFBOEJrRCxjQUE5Qjs7QUFFQSxhQUFPbEYsSUFBSStCLENBQVgsRUFBYy9CLEdBQWQsRUFBbUI7QUFDakJrRixnQkFBUUYsT0FBT3RELE9BQU8xQixDQUFQLENBQVAsQ0FBUjs7QUFFQSxZQUFJa0YsS0FBSixFQUNFQSxNQUFNdkcsT0FBTixDQUFjO0FBQUEsaUJBQVc2QyxRQUFRMkQsS0FBUixRQUFvQmpHLElBQXBCLENBQVg7QUFBQSxTQUFkO0FBQ0g7QUFDRjs7OzRCQUNPK0YsSyxFQUFnQjtBQUFBLHlDQUFOL0YsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLGFBQU9KLFFBQVFDLE9BQVIsQ0FBZ0JDLFdBQWhCLENBQTRCLEVBQUVDLElBQUlnRyxLQUFOLEVBQWEvRixNQUFNQSxJQUFuQixFQUF5QmtHLE1BQU0sSUFBL0IsRUFBNUIsRUFBbUVDLEtBQW5FLENBQXlFLFlBQU0sQ0FBRSxDQUFqRixDQUFQO0FBQ0Q7OzswQkFDS0MsTyxFQUFTQyxJLEVBQWdCO0FBQUEseUNBQVBDLEtBQU87QUFBUEEsYUFBTztBQUFBOztBQUM3QixhQUFPLFlBQW1CO0FBQUEsMkNBQVBDLEtBQU87QUFBUEEsZUFBTztBQUFBOztBQUN4QixlQUFPRixLQUFLSixLQUFMLENBQVdHLE9BQVgsRUFBb0JFLE1BQU1FLE1BQU4sQ0FBYUQsS0FBYixDQUFwQixDQUFQO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJIOzs7Ozs7Ozs7Ozs7SUFFYWhHLE8sV0FBQUEsTzs7O0FBRVgsbUJBQVlVLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFHZixTQUFLd0YsQ0FBTCxJQUFVeEYsR0FBVjtBQUFlLFlBQUt3RixDQUFMLElBQVV4RixJQUFJd0YsQ0FBSixDQUFWO0FBQWYsS0FFQSxJQUFJakUsU0FBUyxNQUFLQSxNQUFsQjtBQUFBLFFBQ0lrRSxrQkFESjtBQUFBLFFBQ2VELFVBRGY7QUFBQSxRQUNrQnhHLFVBRGxCO0FBQUEsUUFDcUJxQyxnQkFEckI7O0FBR0EsUUFBSUUsV0FBV2tFLFlBQVlsRSxPQUFPbUUsR0FBOUIsQ0FBSixFQUF3QztBQUN0QyxXQUFLMUcsQ0FBTCxJQUFVeUcsU0FBVixFQUFxQjtBQUNuQnBFLGtCQUFVb0UsVUFBVXpHLENBQVYsQ0FBVjtBQUNBLFlBQUksTUFBS3FDLE9BQUwsQ0FBSixFQUNFLE1BQUtzRSxFQUFMLENBQVEzRyxDQUFSLEVBQVcsTUFBSzBDLEtBQUwsUUFBaUIsTUFBS0wsT0FBTCxDQUFqQixDQUFYO0FBQ0g7QUFDRjtBQUNELEtBQUMsTUFBS2EsUUFBTixJQUFrQixNQUFLQSxRQUFMLEVBQWxCO0FBZmU7QUFnQmhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkg7Ozs7Ozs7O0lBRWExQyxLLFdBQUFBLEs7OztBQUVYLGlCQUFZUSxHQUFaLEVBQWlCO0FBQUE7O0FBQUEsOEdBQ1RBLEdBRFM7O0FBR2YsVUFBSzRGLElBQUwsR0FBWSxJQUFaOztBQUVBLFFBQU10RixPQUFPLE1BQUtBLElBQWxCOztBQUVBM0IsWUFBUUMsT0FBUixDQUFnQmlILFNBQWhCLENBQTBCQyxXQUExQixDQUFzQyxNQUFLcEUsS0FBTCxRQUFpQixNQUFLcUUsV0FBdEIsQ0FBdEM7O0FBRUEsUUFBSXpGLFNBQVMsWUFBVCxJQUF5QkEsU0FBUyxZQUF0QyxFQUFvRCxNQUFLMEYsV0FBTDs7QUFFcEQsUUFBSXpFLFNBQVMsTUFBS0EsTUFBbEI7QUFBQSxRQUNJMEUscUJBREo7QUFBQSxRQUNrQkMsOEJBRGxCOztBQUdBLFFBQUkzRSxNQUFKLEVBQVk7QUFDVjBFLHFCQUFlMUUsT0FBTzRFLE1BQXRCO0FBQ0EsVUFBSUYsWUFBSixFQUFrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNoQiwrQkFBY0EsWUFBZDtBQUFBLGdCQUFTakgsQ0FBVDs7QUFDRSxrQkFBSzJHLEVBQUwsQ0FBUTNHLENBQVIsRUFBVyxNQUFLMEMsS0FBTCxRQUFpQixNQUFLN0MsV0FBdEIsRUFBbUNHLENBQW5DLENBQVg7QUFERjtBQURnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2pCO0FBQ0RrSCw4QkFBd0IzRSxPQUFPNkUsVUFBL0I7QUFDQSxVQUFJRixxQkFBSixFQUEyQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN6QixnQ0FBY0EscUJBQWQ7QUFBQSxnQkFBU3ZGLENBQVQ7O0FBQ0Usa0JBQUtnRixFQUFMLENBQVFoRixDQUFSLEVBQVcsTUFBS2UsS0FBTCxRQUFpQixNQUFLMkUsV0FBdEIsRUFBbUMxRixDQUFuQyxDQUFYO0FBREY7QUFEeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUcxQjtBQUNGO0FBekJjO0FBMEJoQjs7OztnQ0FDVzJGLEcsRUFBS0MsTSxFQUFRQyxZLEVBQWM7QUFDckNGLFVBQUl2SCxJQUFKLEdBQVd1SCxJQUFJdkgsSUFBSixJQUFZLEVBQXZCO0FBQ0EsVUFBSUEsT0FBTyxHQUFHd0csTUFBSCxDQUFVZSxJQUFJeEgsRUFBZCxFQUFrQndILElBQUl2SCxJQUF0QixDQUFYO0FBQ0EsVUFBSSxDQUFDd0gsTUFBRCxJQUFXLENBQUNBLE9BQU9FLElBQXZCLEVBQTZCMUgsT0FBT0EsS0FBS3dHLE1BQUwsQ0FBWWdCLE1BQVosRUFBb0JDLFlBQXBCLENBQVA7QUFDN0IsV0FBSzlELElBQUwsQ0FBVXNDLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JqRyxJQUF0QjtBQUNBLFVBQUl1SCxJQUFJckIsSUFBUixFQUFjLE9BQU8sSUFBUCxDQUx1QixDQUtWO0FBQzNCLGFBQU8sS0FBUDtBQUNEOzs7Z0NBQ1dqRyxDLEVBQVk7QUFBQSx3Q0FBTkQsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLFVBQU11QixPQUFPLEtBQUtBLElBQWxCO0FBQ0EsVUFBSW9HLE1BQU0sRUFBRTVILElBQUlFLENBQU4sRUFBU0QsTUFBTUEsSUFBZixFQUFWO0FBQ0EsVUFBSXVCLFNBQVMsU0FBYixFQUF3QjNCLFFBQVFDLE9BQVIsQ0FBZ0JDLFdBQWhCLENBQTRCNkgsR0FBNUIsRUFBaUN4QixLQUFqQyxDQUF1QyxZQUFNLENBQUUsQ0FBL0MsRUFBeEIsS0FDSyxJQUFJNUUsU0FBUyxZQUFiLEVBQTJCO0FBQzlCLFlBQU1xRyxVQUFVNUgsS0FBS0EsS0FBSzhDLE1BQUwsR0FBYyxDQUFuQixDQUFoQjtBQUNBLFlBQUk4RSxZQUFZQyxTQUFaLElBQXlCRCxRQUFRRSxHQUFyQyxFQUEwQztBQUN4Q2xJLGtCQUFRMEUsSUFBUixDQUFheEUsV0FBYixDQUF5QjhILFFBQVFFLEdBQWpDLEVBQXNDSCxHQUF0QyxFQUEyQ3hCLEtBQTNDLENBQWlELFlBQU0sQ0FBRSxDQUF6RDtBQUNELFNBRkQsTUFFTztBQUNMdkcsa0JBQVEwRSxJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBQyx5Q0FBRCxDQUFuQixFQUFnRUcsSUFBaEUsQ0FBcUUsZ0JBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDM0Usb0NBQWdCSixJQUFoQjtBQUFBLG9CQUFTd0QsR0FBVDs7QUFDRWxJLHdCQUFRMEUsSUFBUixDQUFheEUsV0FBYixDQUF5QmdJLElBQUkzRixFQUE3QixFQUFpQ3dGLEdBQWpDLEVBQXNDeEIsS0FBdEMsQ0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7Z0NBQ1dsRyxDLEVBQVk7QUFBQSx5Q0FBTkQsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLFVBQU0ySCxNQUFNLEVBQUU1SCxJQUFJRSxDQUFOLEVBQVNELE1BQU1BLElBQWYsRUFBWjtBQUNBLFVBQUksS0FBSzZHLElBQVQsRUFBZSxLQUFLQSxJQUFMLENBQVVTLFdBQVYsQ0FBc0JLLEdBQXRCO0FBQ2hCOzs7a0NBQ2E7QUFDWixVQUFJLENBQUMsS0FBS0ksa0JBQVYsRUFBOEI7QUFDNUIsYUFBS0MsT0FBTDtBQUNBLGFBQUtDLHNCQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS0Esc0JBQUwsQ0FBNEIsS0FBS3RGLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtxRixPQUF0QixDQUE1QjtBQUNEO0FBQ0Y7Ozs4QkFDUztBQUFBOztBQUNSLFVBQU1uQixPQUFPLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWFqSCxRQUFRQyxPQUFSLENBQWdCbUksT0FBaEIsQ0FBd0IsRUFBRU4sTUFBTSxLQUFLQSxJQUFiLEVBQXhCLENBQXRDO0FBQ0FiLFdBQUtxQixZQUFMLENBQWtCbkIsV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE9BQUtGLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JzQixFLEVBQUk7QUFBQTs7QUFDekJ2SSxjQUFRQyxPQUFSLENBQWdCdUksU0FBaEIsQ0FBMEJyQixXQUExQixDQUFzQyxnQkFBUTtBQUM1Q0YsYUFBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLE9BQUtwRSxLQUFMLFNBQWlCLE9BQUtxRSxXQUF0QixDQUEzQjtBQUNBLFNBQUNtQixFQUFELElBQU9BLElBQVA7QUFDRCxPQUhEO0FBSUQiLCJmaWxlIjoiY29udGVudC9vcHRpb25zLXVpL29wdGlvbnMud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvb3B0aW9ucy11aS9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi8uLi9zYXNzL21haW4uc2NzcydcclxuXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi8uLi91dGlscydcclxuXHJcbl9MMTBOKCk7XHJcblxyXG5BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKSkuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgZXY6ICdvcGVuOmFkZG9uLXBhZ2UnLFxyXG4gICAgICBhcmdzOiBbZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldXHJcbiAgICB9KTtcclxuICB9LCBmYWxzZSk7XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSIH1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihvcmlnaW5hbCwgY2xvbmUpIHtcclxuICBjbG9uZSA9IGNsb25lIHx8IHt9O1xyXG5cclxuICBmb3IgKGxldCBpIGluIG9yaWdpbmFsKSB7XHJcbiAgICBpZiAob3JpZ2luYWwuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFtpXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBjbG9uZVtpXSA9IEFycmF5LmlzQXJyYXkob3JpZ2luYWxbaV0pID8gW10gOiB7fTtcclxuICAgICAgICBfQ09QWShvcmlnaW5hbFtpXSwgY2xvbmVbaV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb25lW2ldID0gb3JpZ2luYWxbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNsb25lO1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgbGFzdEFyZy50YWIpIHtcclxuICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9