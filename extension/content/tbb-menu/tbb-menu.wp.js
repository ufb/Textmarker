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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/tbb-menu/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/tbb-menu/js/index.js":
/*!**************************************!*\
  !*** ./content/tbb-menu/js/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./../sass/main.scss */ "./content/tbb-menu/sass/main.scss");

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _port = __webpack_require__(/*! ./port */ "./content/tbb-menu/js/port.js");

var _port2 = _interopRequireDefault(_port);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils._L10N)();

new _utils._DOMMODULE({
  el: document.getElementById('menu'),
  events: {
    DOM: {
      click: {
        '#activate': 'toggle',
        '.send': 'open'
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
    this.emit('open:addon-page', el.id);
    window.close();
  },
  setActivateText: function setActivateText(active) {
    document.getElementById('activate').innerText = browser.i18n.getMessage('tbb_mitem_1_' + active);
  }
});

/***/ }),

/***/ "./content/tbb-menu/js/port.js":
/*!*************************************!*\
  !*** ./content/tbb-menu/js/port.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

exports.default = new _utils._PORT({
  name: 'tbb-menu',
  type: 'privileged',
  events: {
    CONNECTION: ['toggle:addon', 'open:addon-page', 'error:browser-console']
  }
});

/***/ }),

/***/ "./content/tbb-menu/sass/main.scss":
/*!*****************************************!*\
  !*** ./content/tbb-menu/sass/main.scss ***!
  \*****************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC90YmItbWVudS9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3RiYi1tZW51L2pzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC90YmItbWVudS9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3V0aWxzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50cyIsIkRPTSIsImNsaWNrIiwicG9ydCIsImRpc2FibGVkIiwiYXV0b2luaXQiLCJicm93c2VyIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJ0aGVuIiwic2V0dGluZ3MiLCJhZGRvbiIsImFjdGl2ZSIsImxvY2FsIiwic2V0QWN0aXZhdGVUZXh0IiwidG9nZ2xlIiwiZW1pdCIsIndpbmRvdyIsImNsb3NlIiwib3BlbiIsImUiLCJpZCIsImlubmVyVGV4dCIsImkxOG4iLCJnZXRNZXNzYWdlIiwibmFtZSIsInR5cGUiLCJDT05ORUNUSU9OIiwiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIm9yaWdpbmFsIiwiY2xvbmUiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwic3ViTWFwIiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJfc2VsIiwibWV0aCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwic3Vic3RyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsImwiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0IiwiZmlsZSIsImVycm9yIiwiZmlsZW5hbWUiLCJzcGxpdCIsInBvcCIsImluY2x1ZGVzIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwidGFicyIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRVSUxhbmd1YWdlIiwicmVwbGFjZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJsMTBuQXR0ciIsImF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5IiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY2F0Y2giLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvIiwiZW52RXZlbnRzIiwiRU5WIiwib24iLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJPTkVPRkYiLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1zZyIsImxhc3RBcmciLCJ1bmRlZmluZWQiLCJ0YWIiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7Ozs7QUFHQTs7Ozs7O0FBQ0E7O0FBRUEsc0JBQWU7QUFDYkEsTUFBSUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQURTO0FBRWJDLFVBQVE7QUFDTkMs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R0FBWSxLQUFLQSxJQUFMLElBQWFHLFFBQVE4RyxPQUFSLENBQWdCOEIsT0FBaEIsQ0FBd0IsRUFBRXhILE1BQU0sS0FBS0EsSUFBYixFQUF4QixDQUF0QztBQUNBdkIsV0FBS2lKLFlBQUwsQ0FBa0JqQixXQUFsQixDQUE4QjtBQUFBLGVBQU0sT0FBS2hJLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JrSixFLEVBQUk7QUFBQTs7QUFDekIvSSxjQUFROEcsT0FBUixDQUFnQmtDLFNBQWhCLENBQTBCbkIsV0FBMUIsQ0FBc0MsZ0JBQVE7QUFDNUNoSSxhQUFLK0gsU0FBTCxDQUFlQyxXQUFmLENBQTJCLE9BQUtqRSxLQUFMLFNBQWlCLE9BQUtrRSxXQUF0QixDQUEzQjtBQUNBLFNBQUNpQixFQUFELElBQU9BLElBQVA7QUFDRCxPQUhEO0FBSUQiLCJmaWxlIjoiY29udGVudC90YmItbWVudS90YmItbWVudS53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC90YmItbWVudS9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi8uLi9zYXNzL21haW4uc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCBfUE9SVCBmcm9tICcuL3BvcnQnXHJcbl9MMTBOKCk7XHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnI2FjdGl2YXRlJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy5zZW5kJzogJ29wZW4nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHBvcnQ6IG51bGwsXHJcbiAgZGlzYWJsZWQ6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlLnNldHRpbmdzKSB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnN5bmMgfHwgc3RvcmFnZS5zeW5jLnNldHRpbmdzKSByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmU7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGFjdGl2ZSA9PiB0aGlzLnNldEFjdGl2YXRlVGV4dChhY3RpdmUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlOmFkZG9uJyk7XHJcbiAgICB3aW5kb3cuY2xvc2UoKTtcclxuICB9LFxyXG4gIG9wZW4oZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnb3BlbjphZGRvbi1wYWdlJywgZWwuaWQpO1xyXG4gICAgd2luZG93LmNsb3NlKCk7XHJcbiAgfSxcclxuICBzZXRBY3RpdmF0ZVRleHQoYWN0aXZlKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZhdGUnKS5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndGJiX21pdGVtXzFfJyArIGFjdGl2ZSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAndGJiLW1lbnUnLFxyXG4gIHR5cGU6ICdwcml2aWxlZ2VkJyxcclxuICBldmVudHM6IHtcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ3RvZ2dsZTphZGRvbicsXHJcbiAgICAgICdvcGVuOmFkZG9uLXBhZ2UnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiB9XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24ob3JpZ2luYWwsIGNsb25lKSB7XHJcbiAgY2xvbmUgPSBjbG9uZSB8fCB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSBpbiBvcmlnaW5hbCkge1xyXG4gICAgaWYgKG9yaWdpbmFsLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxbaV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY2xvbmVbaV0gPSBBcnJheS5pc0FycmF5KG9yaWdpbmFsW2ldKSA/IFtdIDoge307XHJcbiAgICAgICAgX0NPUFkob3JpZ2luYWxbaV0sIGNsb25lW2ldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9uZVtpXSA9IG9yaWdpbmFsW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjbG9uZTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmIGxhc3RBcmcudGFiKSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==