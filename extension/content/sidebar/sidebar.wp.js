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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/sidebar/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/sidebar/js/_store.js":
/*!**************************************!*\
  !*** ./content/sidebar/js/_store.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

exports.default = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas'
    }
  },
  initialized: false,
  area_settings: 'sync',
  area_history: 'sync',

  setAreas: function setAreas() {
    var _this = this;

    return browser.storage.sync.get().then(function (storage) {
      if (storage && storage.sync) {
        _this.area_settings = storage.sync.settings ? 'sync' : 'local';
        _this.area_history = storage.sync.history ? 'sync' : 'local';
      }
    });
  },
  get: function get() {
    var _this2 = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

    var meth = this['_get_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';

    if (!this.initialized) {
      this.initialized = true;
      return this.setAreas().then(function () {
        return _this2['_get_' + field]();
      });
    }
    return this['_get_' + field]();
  },
  _get_mode: function _get_mode() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_autosave: function _get_autosave() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.autosave;
    });
  },
  _get_settings: function _get_settings() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings;
    });
  },
  _get_markers: function _get_markers() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.markers;
    });
  }
});

/***/ }),

/***/ "./content/sidebar/js/index.js":
/*!*************************************!*\
  !*** ./content/sidebar/js/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./../sass/main.scss */ "./content/sidebar/sass/main.scss");

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _port = __webpack_require__(/*! ./port */ "./content/sidebar/js/port.js");

var _port2 = _interopRequireDefault(_port);

var _store = __webpack_require__(/*! ./_store */ "./content/sidebar/js/_store.js");

var _store2 = _interopRequireDefault(_store);

__webpack_require__(/*! ./modules/markers */ "./content/sidebar/js/modules/markers.js");

__webpack_require__(/*! ./modules/mark-actions */ "./content/sidebar/js/modules/mark-actions.js");

__webpack_require__(/*! ./modules/page-actions */ "./content/sidebar/js/modules/page-actions.js");

__webpack_require__(/*! ./modules/links */ "./content/sidebar/js/modules/links.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils._L10N)();

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'onStart',
      'toggled:addon': 'power'
    }
  },

  power: function power(on) {
    var placeholder = document.getElementById('textmarker-sidebar--paused');
    var content = document.getElementById('textmarker-sidebar');

    if (on) {
      placeholder.classList.add('none');
      content.classList.remove('none');
    } else {
      placeholder.classList.remove('none');
      content.classList.add('none');
    }
  },
  onStart: function onStart() {
    var _this = this;

    _store2.default.get('mode').then(function (mode) {
      return _this.power(mode);
    });
  }
});

/***/ }),

/***/ "./content/sidebar/js/modules/links.js":
/*!*********************************************!*\
  !*** ./content/sidebar/js/modules/links.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('links'),
  events: {
    DOM: {
      click: {
        '.link': 'link'
      }
    }
  },

  link: function link(e, el) {
    this.emit('open:addon-page', el.getAttribute('data-id'));
  }
});

/***/ }),

/***/ "./content/sidebar/js/modules/mark-actions.js":
/*!****************************************************!*\
  !*** ./content/sidebar/js/modules/mark-actions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('mark-actions'),
  events: {
    ENV: {
      'clicked:mark': 'activate'
    },
    DOM: {
      click: {
        '.mark-action': 'markAction',
        '.i': 'toggleInfo'
      }
    }
  },
  buttons: [],

  autoinit: function autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction: function markAction(e, el) {
    var _this = this;

    if (el.hasAttribute('disabled')) return;
    (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
      return _this.emit('sidebar:' + el.getAttribute('data-action'), null, null, { tab: tab.id });
    });
    this.deactivate();
  },
  activate: function activate(markInfos) {
    this.buttons.forEach(function (btn) {
      var type = btn.getAttribute('data-action');
      if (type === 'delete-highlight' || typeof markInfos[type] === 'boolean' && !markInfos[type] || type === 'delete-bookmark' && markInfos.bookmark) {
        btn.removeAttribute('disabled');
        btn.parentNode.classList.remove('disabled');
      }
    });
  },
  deactivate: function deactivate() {
    this.buttons.forEach(function (btn) {
      btn.setAttribute('disabled', true);
      btn.parentNode.classList.add('disabled');
    });
  },
  toggleInfo: function toggleInfo(e, el) {
    el.classList.toggle('active');
  }
});

/***/ }),

/***/ "./content/sidebar/js/modules/markers.js":
/*!***********************************************!*\
  !*** ./content/sidebar/js/modules/markers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('markers'),
  events: {
    ENV: {
      'started:app': 'render',
      'updated:settings': 'render',
      'toggled:sync-settings': 'render',
      'changed:selection': 'toggleMarkerButtons'
    },
    DOM: {
      change: {
        '.marker__color': 'change'
      },
      click: {
        '.marker__apply': 'applyColor'
      }
    }
  },

  autoinit: function autoinit() {
    this.render();
  },
  render: function render() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage && storage.settings && (!storage.sync || storage.sync.settings)) {
        return storage.settings.markers;
      }
      return browser.storage.local.get().then(function (storage) {
        if (storage && storage.settings && storage.sync && !storage.sync.settings) {
          return storage.settings.markers;
        }
        return null;
      });
    }).then(function (markers) {
      if (!markers) return _this;
      var inputs = document.getElementById('markers-container');
      var frag = document.createDocumentFragment(),
          m = void 0,
          box = void 0,
          label = void 0,
          input = void 0,
          button = void 0,
          color = void 0;

      inputs.innerText = '';

      for (m in markers) {
        box = document.createElement('div');
        label = document.createElement('label');
        input = document.createElement('input');
        button = document.createElement('button');
        color = _this.extractBgColor(markers[m]);

        box.className = 'marker clearfix';
        label.setAttribute('for', 'marker-' + m);
        label.className = 'marker__label';
        input.className = 'marker__color';
        input.id = 'marker-' + m;
        input.name = m;
        input.type = 'color';
        input.value = color;
        button.className = 'marker__apply';
        button.setAttribute('disabled', true);
        button.setAttribute('data-key', m);

        box.appendChild(label);
        box.appendChild(button);
        box.appendChild(input);
        frag.appendChild(box);

        label.innerText = 'Marker ' + m.toUpperCase();
        if (!color) input.setAttribute('disabled', 'disabled');
      }
      inputs.appendChild(frag);
    });
  },
  extractBgColor: function extractBgColor(styles) {
    var split = styles.split(';'),
        l = split.length,
        color = '',
        i = 0,
        style = void 0;

    for (; i < l; i++) {
      style = split[i];
      if (style.includes('background-color')) {
        color = style.split(':')[1];
        break;
      }
    }
    return color;
  },
  change: function change(e, el) {
    this.emit('change:bg-setting', el.name, el.value);
  },
  applyColor: function applyColor(e, el) {
    var _this2 = this;

    if (el.classList.contains('disabled')) return;
    (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
      return _this2.emit('sidebar:highlight', el.getAttribute('data-key'), { tab: tab.id });
    });
  },
  toggleMarkerButtons: function toggleMarkerButtons(show) {
    var meth = show ? 'removeAttribute' : 'setAttribute';
    Array.from(document.getElementsByClassName('marker__apply')).forEach(function (btn) {
      return btn[meth]('disabled', true);
    });
  }
});

/***/ }),

/***/ "./content/sidebar/js/modules/page-actions.js":
/*!****************************************************!*\
  !*** ./content/sidebar/js/modules/page-actions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('page-actions'),
  events: {
    ENV: {
      'started:app': 'update',
      'updated:settings': 'update',
      'toggled:sync-settings': 'update',
      'updated:entry': 'deactivateSave',
      'saved:entry': 'deactivateSave',
      'unsaved-changes': 'activateSave',
      'added:bookmark': 'activateBookmark',
      'removed:bookmark': 'deactivateBookmark',
      'added:note': 'activateNotes',
      'removed:last-note': 'deactivateNotes'
    },
    DOM: {
      click: {
        '.switch-toggle': 'onAutosaveSwitch',
        '.page-action': 'pageAction'
      }
    }
  },

  autoinit: function autoinit() {
    this.update();
  },
  update: function update() {
    this.updateAutosave();
  },
  updateAutosave: function updateAutosave() {
    var _this = this;

    _store2.default.get('autosave').then(function (autosave) {
      return _this.toggleAutosave(autosave);
    });
  },
  onAutosaveSwitch: function onAutosaveSwitch(e, el) {
    el = el.id === 'autosave-switch' ? el : el.parentNode;
    var autosave = !el.classList.contains('active');
    this.toggleAutosave(autosave);
    this.emit('sidebar:toggle-autosave', autosave);
  },
  toggleAutosave: function toggleAutosave(on) {
    var meth = on ? 'add' : 'remove';
    document.getElementById('autosave-switch').classList[meth]('active');
    document.getElementById('page-action-box--save').classList[meth]('none');
  },
  activateSave: function activateSave() {
    this.activate('save', true);
  },
  deactivateSave: function deactivateSave() {
    this.activate('save', false);
  },
  activateBookmark: function activateBookmark() {
    this.activate('scroll', true);
  },
  deactivateBookmark: function deactivateBookmark() {
    this.activate('scroll', false);
  },
  activateNotes: function activateNotes() {
    this.activate('notes', true);
  },
  deactivateNotes: function deactivateNotes() {
    this.activate('notes', false);
  },
  activate: function activate(type, on) {
    var btn = document.getElementById('page-action--' + type);
    if (on) {
      btn.removeAttribute('disabled');
      btn.parentNode.classList.remove('disabled');
    } else {
      btn.setAttribute('disabled', true);
      btn.parentNode.classList.add('disabled');
    }
  },
  pageAction: function pageAction(e, el) {
    var _this2 = this;

    (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
      return _this2.emit('sidebar:' + el.getAttribute('data-action'), { tab: tab.id });
    });
  }
});

/***/ }),

/***/ "./content/sidebar/js/port.js":
/*!************************************!*\
  !*** ./content/sidebar/js/port.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

exports.default = new _utils._PORT({
  name: 'sidebar',
  type: 'privileged',
  events: {
    CONNECTION: ['change:bg-setting', 'error:browser-console', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:toggle-autosave', 'sidebar:save-changes', 'sidebar:undo', 'sidebar:redo', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'open:addon-page']
  }
});

/***/ }),

/***/ "./content/sidebar/sass/main.scss":
/*!****************************************!*\
  !*** ./content/sidebar/sass/main.scss ***!
  \****************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2pzL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2pzL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2pzL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9qcy9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2pzL21vZHVsZXMvcGFnZS1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9qcy9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3V0aWxzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsInNldEFyZWFzIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeSIsImZpZWxkIiwibWV0aCIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9hdXRvc2F2ZSIsImF1dG9zYXZlIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJwb3dlciIsIm9uIiwicGxhY2Vob2xkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uU3RhcnQiLCJtb2RlIiwiZWwiLCJET00iLCJjbGljayIsImxpbmsiLCJlIiwiZW1pdCIsImdldEF0dHJpYnV0ZSIsImJ1dHRvbnMiLCJhdXRvaW5pdCIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWFya0FjdGlvbiIsImhhc0F0dHJpYnV0ZSIsInRhYiIsImlkIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRlIiwibWFya0luZm9zIiwiZm9yRWFjaCIsInR5cGUiLCJidG4iLCJib29rbWFyayIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcmVudE5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVJbmZvIiwidG9nZ2xlIiwiY2hhbmdlIiwicmVuZGVyIiwibG9jYWwiLCJpbnB1dHMiLCJmcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm0iLCJib3giLCJsYWJlbCIsImlucHV0IiwiYnV0dG9uIiwiY29sb3IiLCJpbm5lclRleHQiLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJjbGFzc05hbWUiLCJuYW1lIiwidmFsdWUiLCJhcHBlbmRDaGlsZCIsInRvVXBwZXJDYXNlIiwic3R5bGVzIiwic3BsaXQiLCJsIiwibGVuZ3RoIiwiaSIsInN0eWxlIiwiaW5jbHVkZXMiLCJhcHBseUNvbG9yIiwiY29udGFpbnMiLCJ0b2dnbGVNYXJrZXJCdXR0b25zIiwic2hvdyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ1cGRhdGUiLCJ1cGRhdGVBdXRvc2F2ZSIsInRvZ2dsZUF1dG9zYXZlIiwib25BdXRvc2F2ZVN3aXRjaCIsImFjdGl2YXRlU2F2ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVCb29rbWFyayIsImRlYWN0aXZhdGVCb29rbWFyayIsImFjdGl2YXRlTm90ZXMiLCJkZWFjdGl2YXRlTm90ZXMiLCJwYWdlQWN0aW9uIiwiQ09OTkVDVElPTiIsIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJvcmlnaW5hbCIsImNsb25lIiwiaGFzT3duUHJvcGVydHkiLCJpc0FycmF5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsInN1Yk1hcCIsInRhcmdldCIsInNlbGVjdG9yIiwiX3NlbCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwic3Vic3RyIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicHVzaCIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0Iiwid2luZG93IiwiZmlsZSIsImVycm9yIiwiZmlsZW5hbWUiLCJwb3AiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJ0YWJzIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImkxOG4iLCJnZXRVSUxhbmd1YWdlIiwicmVwbGFjZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJnZXRNZXNzYWdlIiwidGV4dENvbnRlbnQiLCJsMTBuQXR0ciIsImF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5IiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY2F0Y2giLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvIiwiZW52RXZlbnRzIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIk9ORU9GRiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibXNnIiwibGFzdEFyZyIsInVuZGVmaW5lZCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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QUFiLEVBQXhCLENBQXRDO0FBQ0F1SCxXQUFLa0IsWUFBTCxDQUFrQmhCLFdBQWxCLENBQThCO0FBQUEsZUFBTSxPQUFLRixJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCbUIsRSxFQUFJO0FBQUE7O0FBQ3pCbE4sY0FBUW1MLE9BQVIsQ0FBZ0JnQyxTQUFoQixDQUEwQmxCLFdBQTFCLENBQXNDLGdCQUFRO0FBQzVDRixhQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsT0FBSzdELEtBQUwsU0FBaUIsT0FBSzhELFdBQXRCLENBQTNCO0FBQ0EsU0FBQ2dCLEVBQUQsSUFBT0EsSUFBUDtBQUNELE9BSEQ7QUFJRCIsImZpbGUiOiJjb250ZW50L3NpZGViYXIvc2lkZWJhci53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9zaWRlYmFyL2pzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdzZXRBcmVhcydcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcblxyXG4gIHNldEFyZWFzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IHN0b3JhZ2Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzdG9yYWdlLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRBcmVhcygpLnRoZW4oKCkgPT4gdGhpc1snX2dldF8nICsgZmllbGRdKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9hdXRvc2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuLy4uL3Nhc3MvbWFpbi5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscydcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi8uLi91dGlscydcclxuaW1wb3J0IF9QT1JUIGZyb20gJy4vcG9ydCdcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VycydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFyay1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlLWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2xpbmtzJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnb25TdGFydCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHBvd2VyKG9uKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXItLXBhdXNlZCcpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuXHJcbiAgICBpZiAob24pIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblN0YXJ0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnBvd2VyKG1vZGUpKTtcclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubGluayc6ICdsaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbGluayhlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuOmFkZG9uLXBhZ2UnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2FjdGl2YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFyay1hY3Rpb24nOiAnbWFya0FjdGlvbicsXHJcbiAgICAgICAgJy5pJzogJ3RvZ2dsZUluZm8nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGJ1dHRvbnM6IFtdLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJykpO1xyXG4gIH0sXHJcbiAgbWFya0FjdGlvbihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4gdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIG51bGwsIG51bGwsIHsgdGFiOiB0YWIuaWQgfSkpO1xyXG4gICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShtYXJrSW5mb3MpIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGxldCB0eXBlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGUgPT09ICdkZWxldGUtaGlnaGxpZ2h0JyB8fFxyXG4gICAgICAgICh0eXBlb2YgbWFya0luZm9zW3R5cGVdID09PSAnYm9vbGVhbicgJiYgIW1hcmtJbmZvc1t0eXBlXSkgfHxcclxuICAgICAgICAodHlwZSA9PT0gJ2RlbGV0ZS1ib29rbWFyaycgJiYgbWFya0luZm9zLmJvb2ttYXJrKVxyXG4gICAgICApIHtcclxuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHRvZ2dsZUluZm8oZSwgZWwpIHtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2VycycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdyZW5kZXInLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJzogJ3JlbmRlcicsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICd0b2dnbGVNYXJrZXJCdXR0b25zJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLm1hcmtlcl9fY29sb3InOiAnY2hhbmdlJ1xyXG4gICAgICB9LFxyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya2VyX19hcHBseSc6ICdhcHBseUNvbG9yJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiAoIXN0b3JhZ2Uuc3luYyB8fCBzdG9yYWdlLnN5bmMuc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWFya2VycztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLnN5bmMgJiYgIXN0b3JhZ2Uuc3luYy5zZXR0aW5ncykge1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBpZiAoIW1hcmtlcnMpIHJldHVybiB0aGlzO1xyXG4gICAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXInKTtcclxuICAgICAgbGV0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBtLCBib3gsIGxhYmVsLCBpbnB1dCwgYnV0dG9uLCBjb2xvcjtcclxuXHJcbiAgICAgIGlucHV0cy5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICAgIGZvciAobSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb2xvciA9IHRoaXMuZXh0cmFjdEJnQ29sb3IobWFya2Vyc1ttXSk7XHJcblxyXG4gICAgICAgIGJveC5jbGFzc05hbWUgPSAnbWFya2VyIGNsZWFyZml4JztcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXItJyArIG0pO1xyXG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2xhYmVsJztcclxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnbWFya2VyX19jb2xvcic7XHJcbiAgICAgICAgaW5wdXQuaWQgPSAnbWFya2VyLScgKyBtO1xyXG4gICAgICAgIGlucHV0Lm5hbWUgPSBtO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAnY29sb3InO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY29sb3I7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2FwcGx5JztcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgbSk7XHJcblxyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGJveCk7XHJcblxyXG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9ICdNYXJrZXIgJyArIG0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBpZiAoIWNvbG9yKSBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRzLmFwcGVuZENoaWxkKGZyYWcpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBleHRyYWN0QmdDb2xvcihzdHlsZXMpIHtcclxuICAgIGxldCBzcGxpdCA9IHN0eWxlcy5zcGxpdCgnOycpLFxyXG4gICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXHJcbiAgICAgICAgY29sb3IgPSAnJyxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBzdHlsZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzdHlsZSA9IHNwbGl0W2ldO1xyXG4gICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgIGNvbG9yID0gc3R5bGUuc3BsaXQoJzonKVsxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH0sXHJcbiAgY2hhbmdlKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZTpiZy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gIH0sXHJcbiAgYXBwbHlDb2xvcihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4gdGhpcy5lbWl0KCdzaWRlYmFyOmhpZ2hsaWdodCcsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSwgeyB0YWI6IHRhYi5pZCB9KSk7XHJcbiAgfSxcclxuICB0b2dnbGVNYXJrZXJCdXR0b25zKHNob3cpIHtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnc2V0QXR0cmlidXRlJztcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya2VyX19hcHBseScpKS5mb3JFYWNoKGJ0biA9PiBidG5bbWV0aF0oJ2Rpc2FibGVkJywgdHJ1ZSkpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3VwZGF0ZScsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnknOiAnZGVhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAnZGVhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJzogJ2FjdGl2YXRlU2F2ZScsXHJcbiAgICAgICdhZGRlZDpib29rbWFyayc6ICdhY3RpdmF0ZUJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnZGVhY3RpdmF0ZUJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnOiAnYWN0aXZhdGVOb3RlcycsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdkZWFjdGl2YXRlTm90ZXMnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5zd2l0Y2gtdG9nZ2xlJzogJ29uQXV0b3NhdmVTd2l0Y2gnLFxyXG4gICAgICAgICcucGFnZS1hY3Rpb24nOiAncGFnZUFjdGlvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9LFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudXBkYXRlQXV0b3NhdmUoKTtcclxuICB9LFxyXG4gIHVwZGF0ZUF1dG9zYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHRoaXMudG9nZ2xlQXV0b3NhdmUoYXV0b3NhdmUpKTtcclxuICB9LFxyXG4gIG9uQXV0b3NhdmVTd2l0Y2goZSwgZWwpIHtcclxuICAgIGVsID0gZWwuaWQgPT09ICdhdXRvc2F2ZS1zd2l0Y2gnID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgYXV0b3NhdmUgPSAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcclxuICAgIHRoaXMudG9nZ2xlQXV0b3NhdmUoYXV0b3NhdmUpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnRvZ2dsZS1hdXRvc2F2ZScsIGF1dG9zYXZlKTtcclxuICB9LFxyXG4gIHRvZ2dsZUF1dG9zYXZlKG9uKSB7XHJcbiAgICBjb25zdCBtZXRoID0gb24gPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9zYXZlLXN3aXRjaCcpLmNsYXNzTGlzdFttZXRoXSgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tYm94LS1zYXZlJykuY2xhc3NMaXN0W21ldGhdKCdub25lJyk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVNhdmUoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzYXZlJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlU2F2ZSgpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3NhdmUnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZUJvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnc2Nyb2xsJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzY3JvbGwnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZU5vdGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnbm90ZXMnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVOb3RlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ25vdGVzJywgZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUodHlwZSwgb24pIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tJyArIHR5cGUpO1xyXG4gICAgaWYgKG9uKSB7XHJcbiAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHBhZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHRoaXMuZW1pdCgnc2lkZWJhcjonICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCB7IHRhYjogdGFiLmlkIH0pKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdzaWRlYmFyJyxcclxuICB0eXBlOiAncHJpdmlsZWdlZCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLWF1dG9zYXZlJyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnb3BlbjphZGRvbi1wYWdlJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiB9XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24ob3JpZ2luYWwsIGNsb25lKSB7XHJcbiAgY2xvbmUgPSBjbG9uZSB8fCB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSBpbiBvcmlnaW5hbCkge1xyXG4gICAgaWYgKG9yaWdpbmFsLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxbaV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY2xvbmVbaV0gPSBBcnJheS5pc0FycmF5KG9yaWdpbmFsW2ldKSA/IFtdIDoge307XHJcbiAgICAgICAgX0NPUFkob3JpZ2luYWxbaV0sIGNsb25lW2ldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9uZVtpXSA9IG9yaWdpbmFsW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjbG9uZTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmIGxhc3RBcmcudGFiKSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==