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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/sidebar/index.js");
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

/***/ "./content/sidebar/_store.js":
/*!***********************************!*\
  !*** ./content/sidebar/_store.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas',
      'saved:entry': 'updateEntry',
      'entry:found': 'updateEntryOnFound',
      'entry:found-for-tab': 'updateEntry',
      'entry:deleted-for-tab': 'resume'
    }
  },
  initialized: false,
  initializing: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_pagenotes: 'sync',
  entry: null,
  locked: false,
  updateEntry: function updateEntry(entry) {
    if (entry) {
      var isArr = Array.isArray(entry);
      var currentEntry = !!this.entry;
      this.locked = this.locked || isArr || entry.locked;

      if (!this.locked || isArr) {
        this.entry = entry;
      } else if (this.locked && !isArr) {
        if (this.entry && Array.isArray(this.entry)) this.entry.push(entry);else this.entry = [entry];
      }

      if (currentEntry) this.emit('updated:stored-entry', this.entry);else this.emit('stored:entry', this.entry);
    }
  },
  updateEntryOnFound: function updateEntryOnFound(entry) {
    if (entry) {
      this.updateEntry(entry);

      if (!Array.isArray(entry)) {
        this.emit('initially-stored:entry', entry);
      }
    }
  },
  resume: function resume() {
    this.entry = null;
    this.locked = false;
    this.emit('removed:entry');
  },
  setAreas: function setAreas() {
    var _this = this;

    return browser.storage.sync.get().then(function (storage) {
      if (storage && storage.sync) {
        _this.area_settings = storage.sync.settings ? 'sync' : 'local';
        _this.area_history = storage.sync.history ? 'sync' : 'local';
        _this.area_pagenotes = storage.sync.pagenotes ? 'sync' : 'local';
      }
    });
  },
  get: function get() {
    var _this2 = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

    if (this.initializing) {
      return new Promise(function (r) {
        return window.setTimeout(function () {
          return r(_this2.get(field));
        }, 10);
      });
    }

    var meth = this['_get_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';

    if (!this.initialized) {
      this.initializing = true;
      this.initialized = true;
      return this.setAreas().then(function () {
        _this2.initializing = false;
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
  },
  _get_pagenotes: function _get_pagenotes() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.pagenotes || null;
    });
  }
});

exports.default = _default;

/***/ }),

/***/ "./content/sidebar/index.js":
/*!**********************************!*\
  !*** ./content/sidebar/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/sidebar/sass/index.scss");

var _utils = _interopRequireWildcard(__webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js"));

var _port = _interopRequireDefault(__webpack_require__(/*! ./port */ "./content/sidebar/port.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./_store */ "./content/sidebar/_store.js"));

__webpack_require__(/*! ./modules/tabs */ "./content/sidebar/modules/tabs.js");

__webpack_require__(/*! ./modules/header */ "./content/sidebar/modules/header.js");

__webpack_require__(/*! ./modules/meta-infos */ "./content/sidebar/modules/meta-infos.js");

__webpack_require__(/*! ./modules/tags */ "./content/sidebar/modules/tags.js");

__webpack_require__(/*! ./modules/page-notes */ "./content/sidebar/modules/page-notes.js");

__webpack_require__(/*! ./modules/markers */ "./content/sidebar/modules/markers.js");

__webpack_require__(/*! ./modules/history-actions */ "./content/sidebar/modules/history-actions.js");

__webpack_require__(/*! ./modules/mark-actions */ "./content/sidebar/modules/mark-actions.js");

__webpack_require__(/*! ./modules/page-actions */ "./content/sidebar/modules/page-actions.js");

__webpack_require__(/*! ./modules/marks */ "./content/sidebar/modules/marks.js");

__webpack_require__(/*! ./modules/links */ "./content/sidebar/modules/links.js");

__webpack_require__(/*! ./modules/themes */ "./content/sidebar/modules/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils._L10N)();
new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'onStart',
      'toggled:addon': 'power',
      'stored:entry': 'toggle',
      'updated:stored-entry': 'toggle',
      'initially-stored:entry': 'toggle'
    }
  },
  autoinit: function autoinit() {
    this.emit('opened:sidebar', {
      tab: 'active'
    });
  },
  power: function power(on) {
    var placeholder = document.getElementById('textmarker-sidebar--paused');
    var content = document.getElementById('textmarker-sidebar');

    if (on) {
      placeholder.classList.add('u-display--none');
      content.classList.remove('u-display--none');
    } else {
      placeholder.classList.remove('u-display--none');
      content.classList.add('u-display--none');
    }
  },
  onStart: function onStart() {
    var _this = this;

    _store.default.get('mode').then(function (mode) {
      return _this.power(mode);
    });
  },
  toggle: function toggle(entry) {
    var sidebar = document.getElementById('textmarker-sidebar');

    if (entry && _store.default.locked) {
      sidebar.classList.add('textmarker-sidebar--locked');
    } else {
      sidebar.classList.remove('textmarker-sidebar--locked');
    }
  }
});

/***/ }),

/***/ "./content/sidebar/modules/header.js":
/*!*******************************************!*\
  !*** ./content/sidebar/modules/header.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('header'),
  events: {
    ENV: {
      'stored:entry': 'render',
      'updated:stored-entry': 'render'
    }
  },
  render: function render(entry) {
    var header = this.el;
    if (!entry) header.classList.add('u-display--none');else if (Array.isArray(entry)) return;
    header.classList.remove('u-display--none');
    this.updateName(entry.name);
  },
  updateName: function updateName(name) {
    var el = this.el.getElementsByClassName('header__name')[0];
    el.innerText = name;
    el.title = name;
  }
});

/***/ }),

/***/ "./content/sidebar/modules/history-actions.js":
/*!****************************************************!*\
  !*** ./content/sidebar/modules/history-actions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('history-actions'),
  events: {
    ENV: {
      'started:app': 'toggleSave',
      'updated:settings': 'toggleSave',
      'toggled:sync-settings': 'toggleSave',
      'updated:entry-on-save': 'deactivateSave',
      'saved:entry': 'deactivateSave',
      'unsaved-changes': 'activateSave',
      'finished:restoration': 'activateRetry',
      'update:entry?': 'deactivateRetry',
      'stored:entry': 'updateImmut',
      'page-state': 'onPageState',
      'initially-stored:entry': 'updateImmut'
    },
    DOM: {
      click: {
        '#page-action--retry': 'retryRestoration',
        '#page-action--save': 'save',
        '.switch': 'toggleImmut'
      }
    }
  },
  retryBtnShown: false,
  saveBtn: document.getElementById('page-action--save'),
  retryBtn: document.getElementById('page-action--retry'),
  autoinit: function autoinit() {
    this.toggleSave();
  },
  save: function save() {
    this.emit('sidebar:save-changes', {
      tab: 'active'
    });
  },
  retryRestoration: function retryRestoration() {
    this.emit('sidebar:retry-restoration', {
      tab: 'active'
    });
    this.deactivateRetry();
  },
  toggleSave: function toggleSave() {
    var _this = this;

    _store.default.get('autosave').then(function (autosave) {
      var meth = autosave ? 'add' : 'remove';

      _this.saveBtn.classList[meth]('u-display--none');
    });
  },
  activateSave: function activateSave() {
    var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (on) this.saveBtn.removeAttribute('disabled');else this.saveBtn.setAttribute('disabled', true);
  },
  deactivateSave: function deactivateSave() {
    this.activateSave(false);
  },
  activateRetry: function activateRetry() {
    if (!this.retryBtnShown) {
      this.retryBtn.classList.remove('u-display--none');
      this.retryBtnShown = true;
    }
  },
  deactivateRetry: function deactivateRetry() {
    if (this.retryBtnShown) {
      this.retryBtn.classList.add('u-display--none');
      this.retryBtnShown = false;
    }
  },
  toggleImmut: function toggleImmut(e, el) {
    el = el.classList.contains('switch--immut') ? el : el.parentNode;
    el.classList.toggle('active');
    this.emit('sidebar:immut', el.classList.contains('active'), {
      tab: 'active'
    });
  },
  updateImmut: function updateImmut(entry) {
    if (entry) {
      var meth = entry.immut ? 'add' : 'remove';
      document.getElementById('page-action--immut').classList[meth]('active');
      document.getElementById('switch-box').classList.remove('u-display--none');
    } else {
      document.getElementById('switch-box').classList.add('u-display--none');
    }
  },
  onPageState: function onPageState(state) {
    if (state.retryActive) this.activateRetry();
  }
});

/***/ }),

/***/ "./content/sidebar/modules/links.js":
/*!******************************************!*\
  !*** ./content/sidebar/modules/links.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('tab--links'),
  events: {
    DOM: {
      click: {
        '.link': 'link',
        '.link__icon': 'link',
        '.link__text': 'link'
      }
    }
  },
  link: function link(e, el) {
    el = el.classList.contains('link') ? el : el.parentNode;
    this.emit('open:addon-page(sb)', el.getAttribute('data-id'));
  }
});

/***/ }),

/***/ "./content/sidebar/modules/mark-actions.js":
/*!*************************************************!*\
  !*** ./content/sidebar/modules/mark-actions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('tab--actions'),
  events: {
    ENV: {
      'clicked:mark': 'activate',
      'activated:mark': 'activate'
    },
    DOM: {
      click: {
        '.action-button--mark': 'markAction'
      }
    }
  },
  buttons: [],
  autoinit: function autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction: function markAction(e, el) {
    if (el.hasAttribute('disabled')) return;
    this.emit('sidebar:' + el.getAttribute('data-action'), null, null, {
      tab: 'active'
    });
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
  }
});

/***/ }),

/***/ "./content/sidebar/modules/markers.js":
/*!********************************************!*\
  !*** ./content/sidebar/modules/markers.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('tab--markers'),
  events: {
    ENV: {
      'started:app': 'render',
      'updated:settings': 'render',
      'toggled:sync-settings': 'render',
      'changed:selection': 'toggleMarkerButtons',
      'page-state': 'onPageState'
    },
    DOM: {
      change: {
        '.marker__color': 'change',
        '.marker__cb': 'select'
      },
      click: {
        '.marker__apply': 'applyColor'
      }
    }
  },
  automarkEnabled: false,
  autoinit: function autoinit() {
    this.render();
  },
  render: function render() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage && storage.settings && (!storage.sync || storage.sync.settings)) {
        _this.automarkEnabled = storage.settings.misc.markmethod === 'auto';
        return storage.settings.markers;
      }

      return browser.storage.local.get().then(function (storage) {
        if (storage && storage.settings && storage.sync && !storage.sync.settings) {
          _this.automarkEnabled = storage.settings.misc.markmethod === 'auto';
          return storage.settings.markers;
        }

        return null;
      });
    }).then(function (markers) {
      if (!markers) return _this;
      var leftContainer = document.getElementById('markers-container--left');
      var rightContainer = document.getElementById('markers-container--right');
      var fragRight = document.createDocumentFragment();
      var fragLeft = document.createDocumentFragment();
      var s = Math.ceil(Object.keys(markers).length / 2);
      var count = 0,
          m,
          box,
          input,
          exampleText,
          button,
          color,
          cbBox,
          cb,
          cbLabel,
          cbSpan;
      leftContainer.innerText = '';
      rightContainer.innerText = '';

      for (m in markers) {
        count++;
        box = document.createElement('div');
        input = document.createElement('input');
        exampleText = document.createElement('label');
        button = document.createElement('button');
        cbBox = document.createElement('div');
        cb = document.createElement('input');
        cbLabel = document.createElement('label');
        cbSpan = document.createElement('span');
        color = _this.extractBgColor(markers[m].style);
        box.className = 'marker u-cf';
        input.className = 'marker__color';
        input.id = 'marker-' + m;
        input.name = m;
        input.type = 'color';
        input.value = color;
        exampleText.className = 'marker__text';
        exampleText.setAttribute('style', markers[m].style);
        exampleText.setAttribute('for', 'marker-' + m);
        button.className = 'marker__apply';
        button.setAttribute('disabled', true);
        button.setAttribute('data-key', m);
        cbBox.className = 'marker__cb-box';
        cb.className = 'marker__cb';
        cb.setAttribute('data-key', m);
        cb.type = 'radio';
        cb.id = 'marker__cb--' + m;
        cb.name = 'marker-cb';
        cbLabel.className = 'fake-rb';
        cbLabel.setAttribute('for', 'marker__cb--' + m);
        cbSpan.textContent = String.fromCharCode(0x229a);
        cbLabel.appendChild(cbSpan);
        cbBox.appendChild(cb);
        cbBox.appendChild(cbLabel);
        box.appendChild(button);
        box.appendChild(cbBox);
        box.appendChild(input);
        box.appendChild(exampleText);

        if (count > 3 && count > s) {
          fragLeft.appendChild(box);
        } else {
          fragRight.appendChild(box);
        }

        m = m.toUpperCase();
        m = m === 'ENTER' ? String.fromCharCode(0x21B5) : m;
        exampleText.innerText = m;
        if (!color) input.setAttribute('disabled', true);
      }

      rightContainer.appendChild(fragRight);
      leftContainer.appendChild(fragLeft);

      if (_this.automarkEnabled) {
        _this.el.classList.add('auto');

        document.getElementById('marker__cb--m').checked = true;
      } else {
        _this.el.classList.remove('auto');
      }
    });
  },
  extractBgColor: function extractBgColor(styles) {
    var split = styles.split(';'),
        l = split.length,
        color = '',
        i = 0,
        style;

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
  select: function select(e, el) {
    this.emit('sidebar:selected-marker', el.getAttribute('data-key'), {
      tab: 'active'
    });
  },
  applyColor: function applyColor(e, el) {
    if (el.classList.contains('disabled')) return;
    this.emit('sidebar:highlight', el.getAttribute('data-key'), {
      tab: 'active'
    });
  },
  toggleMarkerButtons: function toggleMarkerButtons(show) {
    if (this.automarkEnabled) return;
    var meth = show ? 'removeAttribute' : 'setAttribute';
    Array.from(document.getElementsByClassName('marker__apply')).forEach(function (btn) {
      return btn[meth]('disabled', true);
    });
  },
  onPageState: function onPageState(state) {
    this.toggleMarkerButtons(state.selection);
  }
});

/***/ }),

/***/ "./content/sidebar/modules/marks.js":
/*!******************************************!*\
  !*** ./content/sidebar/modules/marks.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

var _globalSettings = _interopRequireDefault(__webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--marks'),
  events: {
    ENV: {
      'entry:ordered-marks': 'setMarkIDs',
      'stored:entry': 'render',
      'updated:stored-entry': 'render'
    },
    DOM: {
      click: {
        '.mark__text': 'activate',
        '.mark__note-btn': 'toggleNote',
        '.action-button--nav': 'nav'
      },
      change: {
        '#fold-marks': 'foldList'
      }
    }
  },
  marks: [],
  markIDs: null,
  length: 0,
  current: -1,
  setFilters: false,
  toggleMap: {
    '1': [false, false],
    '2': [true, false],
    '3': [false, true],
    '4': [true, true]
  },
  render: function render() {
    var entry = this.entry = _store.default.entry;

    if (entry) {
      this.setMarks();
      if (!this.setFilters) this.renderSVGFilters();
      this.renderList();
    }
  },
  setMarks: function setMarks() {
    var entry = this.entry;
    var marks = [];

    if (Array.isArray(entry)) {
      entry.forEach(function (e) {
        return marks = marks.concat(e.marks);
      });
    } else {
      marks = entry.marks;
    }

    var markIDs = this.markIDs; //this.length = marks.length;
    //this.marks = markIDs ? marks.sort((m1, m2) => markIDs.indexOf(m1.id) < markIDs.indexOf(m2.id)) : marks;

    this.marks = markIDs ? markIDs.map(function (id) {
      return marks.find(function (mark) {
        return mark.id == id;
      });
    }) : marks;
    this.length = this.marks.length;
  },
  setMarkIDs: function setMarkIDs(ids) {
    this.markIDs = ids;
    this.render();
  },
  renderSVGFilters: function renderSVGFilters() {
    var body = document.body;
    var tmpl = document.getElementById('filter-template');
    var colors = {};
    var i, c;

    for (i in _globalSettings.default.NOTE_COLORS) {
      c = _globalSettings.default.NOTE_COLORS[i];
      colors[i.toLowerCase()] = '0 0 0 0 ' + this.convertHex(c.substr(1, 2)) + ' 0 0 0 0 ' + this.convertHex(c.substr(3, 2)) + ' 0 0 0 0 ' + this.convertHex(c.substr(5, 2)) + ' 0 0 0 1 0';
    }

    var filter;

    for (i in colors) {
      filter = tmpl.cloneNode(true);
      filter.getElementsByTagName('filter')[0].id = 'filter--' + i;
      filter.getElementsByTagName('feColorMatrix')[0].setAttribute('values', colors[i]);
      body.appendChild(filter);
    }

    this.setFilters = true;
  },
  convertHex: function convertHex(hex) {
    return (16 * Number('0x' + hex[0]) + Number('0x' + hex[1])) / 255;
  },
  renderList: function renderList() {
    var markTmpl = document.getElementById('mark-template');
    var fragment = document.createDocumentFragment();
    var marksContainer = document.getElementById('marks');
    var markContainer;
    marksContainer.innerText = '';
    this.marks.forEach(function (mark, i) {
      if (mark) {
        markContainer = markTmpl.cloneNode(true);
        markContainer.id = '';
        markContainer.classList.remove('u-display--none');
        markContainer.setAttribute('data-id', i);
        var textNode = markContainer.getElementsByClassName('mark__text')[0];
        var textContent = document.createTextNode(mark.text);
        var color = mark.style.indexOf('background-color');
        var hasNote = mark.note && (typeof mark.note === 'string' || mark.note.text);
        color = color === -1 ? 'transparent' : mark.style.substr(color + 17, 7);
        var note, noteColor, noteText, noteBtn, noteNode;
        textNode.style.borderColor = color;
        textNode.appendChild(textContent);

        if (hasNote) {
          note = mark.note;
          noteColor = note.color || 'yellow';
          noteText = note.text || note;
          markContainer.classList.add('mark--note');
          noteBtn = markContainer.getElementsByClassName('mark__note-btn')[0];
          noteBtn.classList.remove('u-display--none');
          noteBtn.classList.add('mark__note-btn--' + noteColor);
          noteNode = markContainer.getElementsByClassName('mark__note')[0];
          noteNode.appendChild(document.createTextNode(noteText));
          noteNode.classList.remove('u-display--none');
          noteNode.classList.add('mark__note--' + noteColor);
        }

        fragment.appendChild(markContainer);
      }
    });
    marksContainer.appendChild(fragment);
  },
  nav: function nav(e, el) {
    var dir = 1 * el.getAttribute('data-value');
    this.current += dir;
    if (this.current >= this.length) this.current = 0;else if (this.current < 0) this.current = this.length - 1;
    this.activateListItem();
  },
  activateListItem: function activateListItem(id) {
    if (typeof id === 'number') this.current = id;
    var currentItem = this.el.getElementsByClassName('mark--active')[0];
    if (currentItem) currentItem.classList.remove('mark--active');
    document.querySelector('div[data-id="' + [this.current] + '"]').classList.add('mark--active');
    this.emit('sidebar:next-mark', this.current, {
      tab: 'active'
    });
  },
  activate: function activate(e, el) {
    document.getElementById('fold-marks').value = 0;
    el.classList.toggle('unfolded');
    this.activateListItem(1 * el.parentNode.parentNode.getAttribute('data-id'));
  },
  foldList: function foldList(e, el) {
    var val = el.value;

    if (val != 0) {
      var marks = document.getElementById('marks');
      var toggleSettings = this.toggleMap[val];
      this.toggle('text', toggleSettings[0]);
      this.toggle('note', toggleSettings[1]);
    }
  },
  toggleNote: function toggleNote(e, el) {
    document.getElementById('fold-marks').value = 0;
    el.parentNode.getElementsByClassName('mark__note')[0].classList.toggle('unfolded');
  },
  toggle: function toggle(type, show) {
    var meth = show ? 'add' : 'remove';
    Array.from(this.el.getElementsByClassName('mark__' + type)).forEach(function (el) {
      return el.classList[meth]('unfolded');
    });
  }
});

/***/ }),

/***/ "./content/sidebar/modules/meta-infos.js":
/*!***********************************************!*\
  !*** ./content/sidebar/modules/meta-infos.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--meta'),
  events: {
    ENV: {
      'stored:entry': 'render',
      'updated:stored-entry': 'render'
    }
  },
  render: function render(entry) {
    if (entry && !Array.isArray(entry)) {
      var yes = browser.i18n.getMessage('yes');
      var no = browser.i18n.getMessage('no');
      document.getElementById('meta__number-marks').innerText = entry.marks.length;
      document.getElementById('meta__created').innerText = this.optimizeDateString(new Date(entry.first).toLocaleString());
      document.getElementById('meta__last-modified').innerText = this.optimizeDateString(new Date(entry.last).toLocaleString());
      ['synced', 'immut'].forEach(function (field) {
        return document.getElementById('meta__' + field).innerText = entry[field] ? yes : no;
      });
    }
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

/***/ "./content/sidebar/modules/page-actions.js":
/*!*************************************************!*\
  !*** ./content/sidebar/modules/page-actions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--actions'),
  events: {
    ENV: {
      'added:bookmark': 'activateBookmark',
      'removed:bookmark': 'deactivateBookmark',
      'added:note': 'activateNotes',
      'removed:last-note': 'deactivateNotes',
      'page-state': 'onPageState',
      'notes-state': 'onNotesState'
    },
    DOM: {
      click: {
        '.action-button--page': 'pageAction'
      }
    }
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
    this.emit('sidebar:' + el.getAttribute('data-action'), {
      tab: 'active'
    });
  },
  onPageState: function onPageState(state) {
    if (state.bookmark) this.activateBookmark();
  },
  onNotesState: function onNotesState(notes) {
    if (notes) this.activateNotes();
  }
});

/***/ }),

/***/ "./content/sidebar/modules/page-notes.js":
/*!***********************************************!*\
  !*** ./content/sidebar/modules/page-notes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--notes'),
  events: {
    ENV: {
      'updated:pagenotes': 'render'
    },
    DOM: {
      click: {
        '.add-note': 'addNote',
        'tmnotecolor': 'changeColor',
        'tmnotecustomize': 'togglePalette',
        'tmnotedelete': 'removeNote',
        'tmnoteminimize': 'toggleNote',
        'tmnotesave': 'save'
      },
      change: {
        '#fold-page-notes': 'toggleNotes'
      }
    }
  },
  notes: [],
  noteEls: {},
  id: 0,
  currentColor: 'yellow',
  autoinit: function autoinit() {
    this.render();
  },
  render: function render() {
    var _this = this;

    this.resume();
    (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
      var url = _this.url = tab.url;

      _store.default.get('pagenotes').then(function (pagenotes) {
        pagenotes = pagenotes && pagenotes[url] ? pagenotes[url] : null;
        var l, id;

        if (pagenotes && (l = pagenotes.length)) {
          _this.notes = pagenotes;

          while (l--) {
            id = _this.addNote(pagenotes[l]);
            _this.id = Math.max(_this.id, id);
          }
        }
      }).then(function () {
        _this.toggleSelect(!!_this.notes.length);

        _this.toggleNotes(null, document.getElementById('fold-page-notes'));
      });
    });
  },
  save: function save(e, el) {
    if (el) {
      var note = this.getById(el.getAttribute('data-id'));
      note.text = el.previousSibling.value;
      note.name = el.parentNode.getElementsByClassName('tmnote__header')[0].value;
    }

    this.emit('updated:page-note', this.url, this.notes);
  },
  resume: function resume() {
    this.notes = [];
    this.noteEls = {};
    this.id = 0;
    document.getElementById('page-notes').textContent = '';
  },
  addNote: function addNote(note) {
    console.log('add note');
    note = note.type ? null : note;
    var container = document.getElementById('page-notes');
    var noteEl = document.getElementById('page-note-template').cloneNode(true);
    var textarea = noteEl.getElementsByTagName('textarea')[0];
    var header = noteEl.getElementsByClassName('tmnote__header')[0];
    noteEl.classList.remove('u-display--none');
    var id;

    if (note) {
      id = noteEl.id = note.id;
      textarea.textContent = note.text || '';
      header.value = note.name || '';
      noteEl.classList.add('tmnote--' + note.color);
      container.appendChild(noteEl);
    } else {
      id = noteEl.id = ++this.id;
      this.notes.push({
        id: id,
        text: '',
        color: this.currentColor
      });
      noteEl.classList.remove('tmnote--min');
      noteEl.classList.add('tmnote--' + this.currentColor);
      container.insertBefore(noteEl, container.firstChild);
    }

    Array.from(noteEl.getElementsByTagName('*')).forEach(function (el) {
      return el.setAttribute('data-id', id);
    });
    this.noteEls[id] = noteEl;
    this.toggleSelect(true);
    return id;
  },
  changeColor: function changeColor(e, el) {
    var id = el.getAttribute('data-id');
    var color = this.currentColor = el.getAttribute('data-color');
    this.noteEls[id].className = this.noteEls[id].className.replace(/--\w+/, '--' + color);
    this.getById(id).color = color;
    el.parentNode.classList.add('u-display--none');
  },
  removeNote: function removeNote(e, el) {
    var id = el.getAttribute('data-id');
    var note = this.noteEls[id];
    note.parentNode.removeChild(note);
    delete this.noteEls[id];
    this.notes.splice(this.notes.indexOf(this.getById(id)), 1);
    this.save();

    if (!this.notes.length) {
      this.toggleSelect(false);
    }
  },
  toggleSelect: function toggleSelect(show) {
    var meth = show ? 'remove' : 'add';
    document.getElementById('fold-page-notes').classList[meth]('u-display--none');
  },
  togglePalette: function togglePalette(e, el) {
    var note = this.noteEls[el.getAttribute('data-id')];
    var palette = note.getElementsByTagName('tmnotepalette')[0];
    palette.classList.toggle('u-display--none');

    if (!palette.classList.contains('u-display--none')) {
      note.classList.remove('tmnote--min');
    }
  },
  toggleNote: function toggleNote(e, el) {
    var note = this.noteEls[el.getAttribute('data-id')];
    note.classList.toggle('tmnote--min');

    if (!note.classList.contains('tmnote--min')) {
      this.adjustTextareaHeight(note);
    }

    document.getElementById('fold-page-notes').value = 0;
  },
  toggleNotes: function toggleNotes(e, el) {
    if (el.value == 1) {
      for (var id in this.noteEls) {
        this.noteEls[id].classList.add('tmnote--min');
      }
    } else {
      var note, textarea;

      for (var _id in this.noteEls) {
        note = this.noteEls[_id];
        note.classList.remove('tmnote--min');
        this.adjustTextareaHeight(note);
      }
    }
  },
  getById: function getById(id) {
    return this.notes.find(function (note) {
      return note.id == id;
    });
  },
  adjustTextareaHeight: function adjustTextareaHeight(note) {
    var textarea = note.getElementsByTagName('textarea')[0];
    textarea.style.height = textarea.scrollHeight + 10 + 'px';
  }
});

/***/ }),

/***/ "./content/sidebar/modules/tabs.js":
/*!*****************************************!*\
  !*** ./content/sidebar/modules/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('textmarker-sidebar'),
  events: {
    ENV: {
      'stored:entry': 'showEntrySpecificTabs'
    },
    DOM: {
      click: {
        '.tab__title': 'toggle',
        '.tab__name': 'toggle',
        '.tab__toggle': 'toggle'
      }
    }
  },
  tabs: {},
  autoinit: function autoinit() {
    var _this = this;

    _store.default.get('settings').then(function (settings) {
      if (!settings.sb) return;
      var tabSettings = settings.sb.tabs;

      for (var tab in tabSettings) {
        _this.tabs[tab] = document.getElementById('tab--' + tab);
        if (tabSettings[tab].unfolded) _this.open(tab);else _this.close(tab);
      }
    });
  },
  open: function open(tab) {
    this.tabs[tab].classList.remove('tab--folded');
  },
  close: function close(tab) {
    this.tabs[tab].classList.add('tab--folded');
  },
  toggle: function toggle(e, el) {
    el = el.nodeName === 'H2' ? el : el.parentNode;
    var id = el.getAttribute('data-target');
    var tab = id.split('--').pop();
    var tabEl = document.getElementById(id);
    tabEl.classList.toggle('tab--folded');
    this.emit('toggled:sidebar-tab', tab, !tabEl.classList.contains('tab--folded'));
  },
  showEntrySpecificTabs: function showEntrySpecificTabs() {
    Array.from(document.getElementsByClassName('tab--entry')).forEach(function (tab) {
      return tab.classList.remove('u-display--none');
    });
  }
});

/***/ }),

/***/ "./content/sidebar/modules/tags.js":
/*!*****************************************!*\
  !*** ./content/sidebar/modules/tags.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--tags'),
  events: {
    ENV: {
      'stored:entry': 'render'
    },
    DOM: {
      click: {
        '.tags__remove': 'removeTag',
        '#add-tag': 'addTag'
      }
    }
  },
  render: function render(entry) {
    var _this = this;

    if (entry && !Array.isArray(entry)) {
      var tags = entry.tag ? entry.tag.split(' ') : [];
      document.getElementById('tags').innerText = '';
      tags.forEach(function (tag) {
        return _this.renderTag(tag);
      });
    }
  },
  renderTag: function renderTag(tag) {
    var container = document.getElementById('tags');
    var el = document.createElement('div');
    var del = document.createElement('span');
    var x = document.createTextNode(String.fromCharCode(10005));
    el.className = 'tags__item u-overflow--ellipsis';
    del.className = 'tags__remove';
    del.setAttribute('data-tag', tag);
    el.innerText = tag;
    del.appendChild(x);
    el.appendChild(del);
    container.appendChild(el);
  },
  addTag: function addTag() {
    var _this2 = this;

    var inp = document.getElementById('new-tag');
    var tag = inp.value.trim();
    if (!tag) return;
    this.emit('add:tag', tag, _store.default.entry);
    inp.value = '';
    tag.split(' ').forEach(function (tag) {
      return _this2.renderTag(tag);
    });
  },
  removeTag: function removeTag(e, el) {
    this.emit('remove:tag', el.getAttribute('data-tag'), _store.default.entry);
    el.parentNode.parentNode.removeChild(el.parentNode);
  }
});

/***/ }),

/***/ "./content/sidebar/modules/themes.js":
/*!*******************************************!*\
  !*** ./content/sidebar/modules/themes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--themes'),
  events: {
    DOM: {
      change: {
        '.theme-opt': 'onChange'
      }
    }
  },
  theme: 'default',
  autoinit: function autoinit() {
    var _this = this;

    _store.default.get('settings').then(function (settings) {
      var theme = settings && settings.sb && settings.sb.theme ? settings.sb.theme : 'default';
      document.getElementById("theme--".concat(theme)).checked = true;

      _this.update(theme);
    });
  },
  onChange: function onChange(e, el) {
    var theme = el.getAttribute('data-value');
    this.emit('changed:sidebar-theme', theme);
    this.update(theme);
  },
  update: function update(theme) {
    this.theme = theme;
    if (theme === 'default') return;
    var className = "textmarker-sidebar--".concat(theme);
    var sidebar = document.getElementById('textmarker-sidebar');

    if (!sidebar.classList.contains(className)) {
      sidebar.classList.add(className);
    }
  }
});

/***/ }),

/***/ "./content/sidebar/port.js":
/*!*********************************!*\
  !*** ./content/sidebar/port.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._PORT({
  name: 'sidebar',
  type: 'privileged',
  events: {
    CONNECTION: ['change:bg-setting', 'error:browser-console', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:retry-restoration', 'sidebar:undo', 'sidebar:redo', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'remove:tag', 'add:tag', 'open:addon-page(sb)', 'opened:sidebar', 'updated:page-note', 'toggled:sidebar-tab', 'sidebar:selected-marker', 'changed:sidebar-theme']
  }
});

exports.default = _default;

/***/ }),

/***/ "./content/sidebar/sass/index.scss":
/*!*****************************************!*\
  !*** ./content/sidebar/sass/index.scss ***!
  \*****************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwiZW50cnkiLCJsb2NrZWQiLCJ1cGRhdGVFbnRyeSIsImlzQXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiY3VycmVudEVudHJ5IiwicHVzaCIsImVtaXQiLCJ1cGRhdGVFbnRyeU9uRm91bmQiLCJyZXN1bWUiLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnkiLCJwYWdlbm90ZXMiLCJmaWVsZCIsIlByb21pc2UiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiciIsIm1ldGgiLCJfZ2V0X21vZGUiLCJhZGRvbiIsImFjdGl2ZSIsIl9nZXRfYXV0b3NhdmUiLCJhdXRvc2F2ZSIsIl9nZXRfc2V0dGluZ3MiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9wYWdlbm90ZXMiLCJhdXRvaW5pdCIsInRhYiIsInBvd2VyIiwib24iLCJwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25TdGFydCIsIl9TVE9SRSIsIm1vZGUiLCJ0b2dnbGUiLCJzaWRlYmFyIiwiX0RPTU1PRFVMRSIsImVsIiwicmVuZGVyIiwiaGVhZGVyIiwidXBkYXRlTmFtZSIsIm5hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwidGl0bGUiLCJET00iLCJjbGljayIsInJldHJ5QnRuU2hvd24iLCJzYXZlQnRuIiwicmV0cnlCdG4iLCJ0b2dnbGVTYXZlIiwic2F2ZSIsInJldHJ5UmVzdG9yYXRpb24iLCJkZWFjdGl2YXRlUmV0cnkiLCJhY3RpdmF0ZVNhdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJkZWFjdGl2YXRlU2F2ZSIsImFjdGl2YXRlUmV0cnkiLCJ0b2dnbGVJbW11dCIsImUiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJ1cGRhdGVJbW11dCIsImltbXV0Iiwib25QYWdlU3RhdGUiLCJzdGF0ZSIsInJldHJ5QWN0aXZlIiwibGluayIsImdldEF0dHJpYnV0ZSIsImJ1dHRvbnMiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJtYXJrQWN0aW9uIiwiaGFzQXR0cmlidXRlIiwiYWN0aXZhdGUiLCJtYXJrSW5mb3MiLCJmb3JFYWNoIiwidHlwZSIsImJ0biIsImJvb2ttYXJrIiwiZGVhY3RpdmF0ZSIsImNoYW5nZSIsImF1dG9tYXJrRW5hYmxlZCIsIm1pc2MiLCJtYXJrbWV0aG9kIiwibG9jYWwiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJmcmFnUmlnaHQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ0xlZnQiLCJzIiwiTWF0aCIsImNlaWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY291bnQiLCJtIiwiYm94IiwiaW5wdXQiLCJleGFtcGxlVGV4dCIsImJ1dHRvbiIsImNvbG9yIiwiY2JCb3giLCJjYiIsImNiTGFiZWwiLCJjYlNwYW4iLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZENoaWxkIiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic3R5bGVzIiwic3BsaXQiLCJsIiwiaSIsImluY2x1ZGVzIiwic2VsZWN0IiwiYXBwbHlDb2xvciIsInRvZ2dsZU1hcmtlckJ1dHRvbnMiLCJzaG93Iiwic2VsZWN0aW9uIiwibWFya3MiLCJtYXJrSURzIiwiY3VycmVudCIsInNldEZpbHRlcnMiLCJ0b2dnbGVNYXAiLCJzZXRNYXJrcyIsInJlbmRlclNWR0ZpbHRlcnMiLCJyZW5kZXJMaXN0IiwiY29uY2F0IiwibWFwIiwiZmluZCIsIm1hcmsiLCJzZXRNYXJrSURzIiwiaWRzIiwiYm9keSIsInRtcGwiLCJjb2xvcnMiLCJjIiwiX1NFVFRJTkdTIiwiTk9URV9DT0xPUlMiLCJ0b0xvd2VyQ2FzZSIsImNvbnZlcnRIZXgiLCJzdWJzdHIiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJoZXgiLCJOdW1iZXIiLCJtYXJrVG1wbCIsImZyYWdtZW50IiwibWFya3NDb250YWluZXIiLCJtYXJrQ29udGFpbmVyIiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHQiLCJpbmRleE9mIiwiaGFzTm90ZSIsIm5vdGUiLCJub3RlQ29sb3IiLCJub3RlVGV4dCIsIm5vdGVCdG4iLCJub3RlTm9kZSIsImJvcmRlckNvbG9yIiwibmF2IiwiZGlyIiwiYWN0aXZhdGVMaXN0SXRlbSIsImN1cnJlbnRJdGVtIiwicXVlcnlTZWxlY3RvciIsImZvbGRMaXN0IiwidmFsIiwidG9nZ2xlU2V0dGluZ3MiLCJ0b2dnbGVOb3RlIiwieWVzIiwiaTE4biIsImdldE1lc3NhZ2UiLCJubyIsIm9wdGltaXplRGF0ZVN0cmluZyIsIkRhdGUiLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwibGFzdCIsImRhdGUiLCJyZXBsYWNlIiwicCIsInEiLCJhY3RpdmF0ZUJvb2ttYXJrIiwiZGVhY3RpdmF0ZUJvb2ttYXJrIiwiYWN0aXZhdGVOb3RlcyIsImRlYWN0aXZhdGVOb3RlcyIsInBhZ2VBY3Rpb24iLCJvbk5vdGVzU3RhdGUiLCJub3RlcyIsIm5vdGVFbHMiLCJjdXJyZW50Q29sb3IiLCJ1cmwiLCJhZGROb3RlIiwibWF4IiwidG9nZ2xlU2VsZWN0IiwidG9nZ2xlTm90ZXMiLCJnZXRCeUlkIiwicHJldmlvdXNTaWJsaW5nIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsIm5vdGVFbCIsInRleHRhcmVhIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImNoYW5nZUNvbG9yIiwicmVtb3ZlTm90ZSIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwidG9nZ2xlUGFsZXR0ZSIsInBhbGV0dGUiLCJhZGp1c3RUZXh0YXJlYUhlaWdodCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJzYiIsInRhYlNldHRpbmdzIiwidW5mb2xkZWQiLCJvcGVuIiwiY2xvc2UiLCJub2RlTmFtZSIsInBvcCIsInRhYkVsIiwic2hvd0VudHJ5U3BlY2lmaWNUYWJzIiwidGFncyIsInRhZyIsInJlbmRlclRhZyIsImRlbCIsIngiLCJhZGRUYWciLCJpbnAiLCJ0cmltIiwicmVtb3ZlVGFnIiwidGhlbWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsIl9QT1JUIiwiQ09OTkVDVElPTiIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiTUFYX0xPR19FTlRSSUVTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJfQ09QWSIsInNyYyIsInRhcmdldCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXh0cmEiLCJzZXQiLCJfRVJST1JUUkFDS0VSIiwiZmlsZSIsImVycm9yIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwidGltZSIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsIl9HRVRfQUNUSVZFX1RBQiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsIl9IQVNITEVTUyIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiZGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImwxMG5BdHRyIiwiYXR0ciIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjYXRjaCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiT05FT0ZGIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFB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a0JBQVYsRUFBOEI7QUFDNUIsYUFBS0MsT0FBTDtBQUNBLGFBQUtDLHNCQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS0Esc0JBQUwsQ0FBNEIsS0FBS3hFLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUt1RSxPQUF0QixDQUE1QjtBQUNEO0FBQ0Y7Ozs4QkFDUztBQUFBOztBQUNSLFVBQU1oQixPQUFPLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWFuVixRQUFRdVUsT0FBUixDQUFnQjRCLE9BQWhCLENBQXdCO0FBQUV2VCxjQUFNLEtBQUtBO0FBQWIsT0FBeEIsQ0FBdEM7QUFDQXVTLFdBQUtrQixZQUFMLENBQWtCaEIsV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE9BQUtGLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0J0TyxFLEVBQUk7QUFBQTs7QUFDekI3RyxjQUFRdVUsT0FBUixDQUFnQitCLFNBQWhCLENBQTBCakIsV0FBMUIsQ0FBc0MsZ0JBQVE7QUFDNUNGLGFBQUtDLFNBQUwsQ0FBZUMsV0FBZixDQUEyQixPQUFLekQsS0FBTCxDQUFXLE1BQVgsRUFBaUIsT0FBSzBELFdBQXRCLENBQTNCO0FBQ0EsU0FBQ3pPLEVBQUQsSUFBT0EsSUFBUDtBQUNELE9BSEQ7QUFJRDs7OztFQWxGd0JqSSxlIiwiZmlsZSI6ImNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3NpZGViYXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ3NldEFyZWFzJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJzogJ3VwZGF0ZUVudHJ5T25Gb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYic6ICdyZXN1bWUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9wYWdlbm90ZXM6ICdzeW5jJyxcclxuICBlbnRyeTogbnVsbCxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG5cclxuICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlzQXJyID0gQXJyYXkuaXNBcnJheShlbnRyeSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRFbnRyeSA9ICEhdGhpcy5lbnRyeTtcclxuXHJcbiAgICAgIHRoaXMubG9ja2VkID0gdGhpcy5sb2NrZWQgfHwgaXNBcnIgfHwgZW50cnkubG9ja2VkO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmxvY2tlZCB8fCBpc0Fycikge1xyXG4gICAgICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmxvY2tlZCAmJiAhaXNBcnIpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRyeSAmJiBBcnJheS5pc0FycmF5KHRoaXMuZW50cnkpKSB0aGlzLmVudHJ5LnB1c2goZW50cnkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbnRyeSA9IFtlbnRyeV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RW50cnkpIHRoaXMuZW1pdCgndXBkYXRlZDpzdG9yZWQtZW50cnknLCB0aGlzLmVudHJ5KTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N0b3JlZDplbnRyeScsIHRoaXMuZW50cnkpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPbkZvdW5kKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGVFbnRyeShlbnRyeSk7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknLCBlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJ5ID0gbnVsbDtcclxuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6ZW50cnknKTtcclxuICB9LFxyXG5cclxuICBzZXRBcmVhcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzdG9yYWdlLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3RvcmFnZS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBzdG9yYWdlLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0QXJlYXMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfcGFnZW5vdGVzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnBhZ2Vub3RlcyB8fCBudWxsKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9QT1JUIGZyb20gJy4vcG9ydCdcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2hlYWRlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbWV0YS1pbmZvcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdGFncydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VycydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGlzdG9yeS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrLWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3BhZ2UtYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2xpbmtzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90aGVtZXMnXHJcblxyXG5fTDEwTigpO1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdvblN0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICd0b2dnbGUnLFxyXG4gICAgICAnaW5pdGlhbGx5LXN0b3JlZDplbnRyeSc6ICd0b2dnbGUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW5lZDpzaWRlYmFyJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcblxyXG4gIHBvd2VyKG9uKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXItLXBhdXNlZCcpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuXHJcbiAgICBpZiAob24pIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMucG93ZXIobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGVudHJ5KSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG4gICAgaWYgKGVudHJ5ICYmIF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZWw7XHJcblxyXG4gICAgaWYgKCFlbnRyeSkgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkpIHJldHVybjtcclxuXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB0aGlzLnVwZGF0ZU5hbWUoZW50cnkubmFtZSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlTmFtZShuYW1lKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19uYW1lJylbMF07XHJcbiAgICBlbC5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgZWwudGl0bGUgPSBuYW1lO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcyc6ICdhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAndXBkYXRlSW1tdXQnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZScsXHJcbiAgICAgICdpbml0aWFsbHktc3RvcmVkOmVudHJ5JzogJ3VwZGF0ZUltbXV0J1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXJldHJ5JzogJ3JldHJ5UmVzdG9yYXRpb24nLFxyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXNhdmUnOiAnc2F2ZScsXHJcbiAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlSW1tdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXRyeUJ0blNob3duOiBmYWxzZSxcclxuICBzYXZlQnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLXNhdmUnKSxcclxuICByZXRyeUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1yZXRyeScpLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudG9nZ2xlU2F2ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgcmV0cnlSZXN0b3JhdGlvbigpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICAgIHRoaXMuZGVhY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfSxcclxuICB0b2dnbGVTYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgY29uc3QgbWV0aCA9IGF1dG9zYXZlID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgdGhpcy5zYXZlQnRuLmNsYXNzTGlzdFttZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlU2F2ZShvbiA9IHRydWUpIHtcclxuICAgIGlmIChvbikgdGhpcy5zYXZlQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgIGVsc2UgdGhpcy5zYXZlQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVTYXZlKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZVNhdmUoZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIGlmICghdGhpcy5yZXRyeUJ0blNob3duKSB7XHJcbiAgICAgIHRoaXMucmV0cnlCdG4uY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMucmV0cnlCdG5TaG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICBpZiAodGhpcy5yZXRyeUJ0blNob3duKSB7XHJcbiAgICAgIHRoaXMucmV0cnlCdG4uY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMucmV0cnlCdG5TaG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXQoZSwgZWwpIHtcclxuICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLWltbXV0JykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjppbW11dCcsIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZUltbXV0KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgY29uc3QgbWV0aCA9IGVudHJ5LmltbXV0ID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1pbW11dCcpLmNsYXNzTGlzdFttZXRoXSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtYm94JykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWJveCcpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZS5yZXRyeUFjdGl2ZSkgdGhpcy5hY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbGlua3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubGluayc6ICdsaW5rJyxcclxuICAgICAgICAnLmxpbmtfX2ljb24nOiAnbGluaycsXHJcbiAgICAgICAgJy5saW5rX190ZXh0JzogJ2xpbmsnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsaW5rKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnbGluaycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuOmFkZG9uLXBhZ2Uoc2IpJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2FjdGl2YXRlJyxcclxuICAgICAgJ2FjdGl2YXRlZDptYXJrJzogJ2FjdGl2YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tbWFyayc6ICdtYXJrQWN0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBidXR0b25zOiBbXSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpKTtcclxuICB9LFxyXG4gIG1hcmtBY3Rpb24oZSwgZWwpIHtcclxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjonICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCBudWxsLCBudWxsLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShtYXJrSW5mb3MpIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGxldCB0eXBlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGUgPT09ICdkZWxldGUtaGlnaGxpZ2h0JyB8fFxyXG4gICAgICAgICh0eXBlb2YgbWFya0luZm9zW3R5cGVdID09PSAnYm9vbGVhbicgJiYgIW1hcmtJbmZvc1t0eXBlXSkgfHxcclxuICAgICAgICAodHlwZSA9PT0gJ2RlbGV0ZS1ib29rbWFyaycgJiYgbWFya0luZm9zLmJvb2ttYXJrKVxyXG4gICAgICApIHtcclxuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tYXJrZXJzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3JlbmRlcicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnOiAncmVuZGVyJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ3RvZ2dsZU1hcmtlckJ1dHRvbnMnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy5tYXJrZXJfX2NvbG9yJzogJ2NoYW5nZScsXHJcbiAgICAgICAgJy5tYXJrZXJfX2NiJzogJ3NlbGVjdCdcclxuICAgICAgfSxcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLm1hcmtlcl9fYXBwbHknOiAnYXBwbHlDb2xvcidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF1dG9tYXJrRW5hYmxlZDogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgKCFzdG9yYWdlLnN5bmMgfHwgc3RvcmFnZS5zeW5jLnNldHRpbmdzKSkge1xyXG4gICAgICAgIHRoaXMuYXV0b21hcmtFbmFibGVkID0gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2Uuc3luYyAmJiAhc3RvcmFnZS5zeW5jLnNldHRpbmdzKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dG9tYXJrRW5hYmxlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4obWFya2VycyA9PiB7XHJcbiAgICAgIGlmICghbWFya2VycykgcmV0dXJuIHRoaXM7XHJcbiAgICAgIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXItLWxlZnQnKTtcclxuICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXItLXJpZ2h0Jyk7XHJcbiAgICAgIGNvbnN0IGZyYWdSaWdodCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgZnJhZ0xlZnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmNlaWwoT2JqZWN0LmtleXMobWFya2VycykubGVuZ3RoIC8gMik7XHJcbiAgICAgIGxldCBjb3VudCA9IDAsIG0sIGJveCwgaW5wdXQsIGV4YW1wbGVUZXh0LCBidXR0b24sIGNvbG9yLCBjYkJveCwgY2IsIGNiTGFiZWwsIGNiU3BhbjtcclxuXHJcbiAgICAgIGxlZnRDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgZm9yIChtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNiQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNiTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNiU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb2xvciA9IHRoaXMuZXh0cmFjdEJnQ29sb3IobWFya2Vyc1ttXS5zdHlsZSk7XHJcblxyXG4gICAgICAgIGJveC5jbGFzc05hbWUgPSAnbWFya2VyIHUtY2YnO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NvbG9yJztcclxuICAgICAgICBpbnB1dC5pZCA9ICdtYXJrZXItJyArIG07XHJcbiAgICAgICAgaW5wdXQubmFtZSA9IG07XHJcbiAgICAgICAgaW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjb2xvcjtcclxuICAgICAgICBleGFtcGxlVGV4dC5jbGFzc05hbWUgPSAnbWFya2VyX190ZXh0JztcclxuICAgICAgICBleGFtcGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbWFya2Vyc1ttXS5zdHlsZSk7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuc2V0QXR0cmlidXRlKCdmb3InLCAnbWFya2VyLScgKyBtKTtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ21hcmtlcl9fYXBwbHknO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBtKTtcclxuICAgICAgICBjYkJveC5jbGFzc05hbWUgPSAnbWFya2VyX19jYi1ib3gnO1xyXG4gICAgICAgIGNiLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NiJztcclxuICAgICAgICBjYi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgbSk7XHJcbiAgICAgICAgY2IudHlwZSA9ICdyYWRpbyc7XHJcbiAgICAgICAgY2IuaWQgPSAnbWFya2VyX19jYi0tJyArIG07XHJcbiAgICAgICAgY2IubmFtZSA9ICdtYXJrZXItY2InO1xyXG4gICAgICAgIGNiTGFiZWwuY2xhc3NOYW1lID0gJ2Zha2UtcmInO1xyXG4gICAgICAgIGNiTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWFya2VyX19jYi0tJyArIG0pO1xyXG4gICAgICAgIGNiU3Bhbi50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMjlhKTtcclxuXHJcbiAgICAgICAgY2JMYWJlbC5hcHBlbmRDaGlsZChjYlNwYW4pO1xyXG4gICAgICAgIGNiQm94LmFwcGVuZENoaWxkKGNiKTtcclxuICAgICAgICBjYkJveC5hcHBlbmRDaGlsZChjYkxhYmVsKTtcclxuXHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNiQm94KTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChleGFtcGxlVGV4dCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudCA+IDMgJiYgY291bnQgPiBzKSB7XHJcbiAgICAgICAgICBmcmFnTGVmdC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmcmFnUmlnaHQuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG0gPSBtLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbSA9IG0gPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBtO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LmlubmVyVGV4dCA9IG07XHJcbiAgICAgICAgaWYgKCFjb2xvcikgaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdSaWdodCk7XHJcbiAgICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ0xlZnQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b21hcmtFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdhdXRvJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcl9fY2ItLW0nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2F1dG8nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBleHRyYWN0QmdDb2xvcihzdHlsZXMpIHtcclxuICAgIGxldCBzcGxpdCA9IHN0eWxlcy5zcGxpdCgnOycpLFxyXG4gICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXHJcbiAgICAgICAgY29sb3IgPSAnJyxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBzdHlsZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzdHlsZSA9IHNwbGl0W2ldO1xyXG4gICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgIGNvbG9yID0gc3R5bGUuc3BsaXQoJzonKVsxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH0sXHJcbiAgY2hhbmdlKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZTpiZy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gIH0sXHJcbiAgc2VsZWN0KGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBhcHBseUNvbG9yKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6aGlnaGxpZ2h0JywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICB0b2dnbGVNYXJrZXJCdXR0b25zKHNob3cpIHtcclxuICAgIGlmICh0aGlzLmF1dG9tYXJrRW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdzZXRBdHRyaWJ1dGUnO1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrZXJfX2FwcGx5JykpLmZvckVhY2goYnRuID0+IGJ0blttZXRoXSgnZGlzYWJsZWQnLCB0cnVlKSk7XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy50b2dnbGVNYXJrZXJCdXR0b25zKHN0YXRlLnNlbGVjdGlvbik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tYXJrcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJzogJ3NldE1hcmtJRHMnLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeScgOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya19fdGV4dCc6ICdhY3RpdmF0ZScsXHJcbiAgICAgICAgJy5tYXJrX19ub3RlLWJ0bic6ICd0b2dnbGVOb3RlJyxcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLW5hdic6ICduYXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnI2ZvbGQtbWFya3MnOiAnZm9sZExpc3QnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtYXJrczogW10sXHJcbiAgbWFya0lEczogbnVsbCxcclxuICBsZW5ndGg6IDAsXHJcbiAgY3VycmVudDogLTEsXHJcbiAgc2V0RmlsdGVyczogZmFsc2UsXHJcbiAgdG9nZ2xlTWFwOiB7ICcxJzogW2ZhbHNlLCBmYWxzZV0sICcyJzogW3RydWUsIGZhbHNlXSwgJzMnOiBbZmFsc2UsIHRydWVdLCAnNCc6IFt0cnVlLCB0cnVlXSB9LFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnkgPSBfU1RPUkUuZW50cnk7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy5zZXRNYXJrcygpO1xyXG4gICAgICBpZiAoIXRoaXMuc2V0RmlsdGVycykgdGhpcy5yZW5kZXJTVkdGaWx0ZXJzKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyTGlzdCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2V0TWFya3MoKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnk7XHJcbiAgICBsZXQgbWFya3MgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBlbnRyeS5mb3JFYWNoKGUgPT4gbWFya3MgPSBtYXJrcy5jb25jYXQoZS5tYXJrcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtJRHMgPSB0aGlzLm1hcmtJRHM7XHJcbiAgICAvL3RoaXMubGVuZ3RoID0gbWFya3MubGVuZ3RoO1xyXG4gICAgLy90aGlzLm1hcmtzID0gbWFya0lEcyA/IG1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbWFya0lEcy5pbmRleE9mKG0xLmlkKSA8IG1hcmtJRHMuaW5kZXhPZihtMi5pZCkpIDogbWFya3M7XHJcbiAgICB0aGlzLm1hcmtzID0gbWFya0lEcyA/XHJcbiAgICAgIG1hcmtJRHMubWFwKGlkID0+IG1hcmtzLmZpbmQobWFyayA9PiBtYXJrLmlkID09IGlkKSkgOlxyXG4gICAgICBtYXJrcztcclxuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5tYXJrcy5sZW5ndGg7XHJcbiAgfSxcclxuICBzZXRNYXJrSURzKGlkcykge1xyXG4gICAgdGhpcy5tYXJrSURzID0gaWRzO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG4gIHJlbmRlclNWR0ZpbHRlcnMoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IHRtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBjb2xvcnMgPSB7fTtcclxuICAgIGxldCBpLCBjO1xyXG4gICAgZm9yIChpIGluIF9TRVRUSU5HUy5OT1RFX0NPTE9SUykge1xyXG4gICAgICAgYyA9IF9TRVRUSU5HUy5OT1RFX0NPTE9SU1tpXTtcclxuICAgICAgY29sb3JzW2kudG9Mb3dlckNhc2UoKV0gPSAnMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDEsMikpICsgJyAwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoMywyKSkgKyAnIDAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cig1LDIpKSArICcgMCAwIDAgMSAwJztcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXI7XHJcbiAgICBmb3IgKGkgaW4gY29sb3JzKSB7XHJcbiAgICAgIGZpbHRlciA9IHRtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBmaWx0ZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbHRlcicpWzBdLmlkID0gJ2ZpbHRlci0tJyArIGk7XHJcbiAgICAgIGZpbHRlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmVDb2xvck1hdHJpeCcpWzBdLnNldEF0dHJpYnV0ZSgndmFsdWVzJywgY29sb3JzW2ldKTtcclxuICAgICAgYm9keS5hcHBlbmRDaGlsZChmaWx0ZXIpXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZpbHRlcnMgPSB0cnVlO1xyXG4gIH0sXHJcbiAgY29udmVydEhleChoZXgpIHtcclxuICAgIHJldHVybiAoKDE2ICogTnVtYmVyKCcweCcgKyBoZXhbMF0pKSArIE51bWJlcignMHgnICsgaGV4WzFdKSkgLyAyNTU7XHJcbiAgfSxcclxuICByZW5kZXJMaXN0KCkge1xyXG4gICAgY29uc3QgbWFya1RtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICBjb25zdCBtYXJrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcycpO1xyXG4gICAgbGV0IG1hcmtDb250YWluZXI7XHJcblxyXG4gICAgbWFya3NDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgdGhpcy5tYXJrcy5mb3JFYWNoKChtYXJrLCBpKSA9PiB7XHJcbiAgICAgIGlmIChtYXJrKSB7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lciA9IG1hcmtUbXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBtYXJrQ29udGFpbmVyLmlkID0gJyc7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICBtYXJrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fdGV4dCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWFyay50ZXh0KTtcclxuICAgICAgICBsZXQgY29sb3IgPSBtYXJrLnN0eWxlLmluZGV4T2YoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICBsZXQgaGFzTm90ZSA9IG1hcmsubm90ZSAmJiAodHlwZW9mIG1hcmsubm90ZSA9PT0gJ3N0cmluZycgfHwgbWFyay5ub3RlLnRleHQpO1xyXG4gICAgICAgIGNvbG9yID0gY29sb3IgPT09IC0xID8gJ3RyYW5zcGFyZW50JyA6IG1hcmsuc3R5bGUuc3Vic3RyKGNvbG9yICsgMTcsIDcpO1xyXG4gICAgICAgIGxldCBub3RlLCBub3RlQ29sb3IsIG5vdGVUZXh0LCBub3RlQnRuLCBub3RlTm9kZTtcclxuXHJcbiAgICAgICAgdGV4dE5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0ZXh0Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChoYXNOb3RlKSB7XHJcbiAgICAgICAgICBub3RlID0gbWFyay5ub3RlO1xyXG4gICAgICAgICAgbm90ZUNvbG9yID0gbm90ZS5jb2xvciB8fCAneWVsbG93JztcclxuICAgICAgICAgIG5vdGVUZXh0ID0gbm90ZS50ZXh0IHx8IG5vdGU7XHJcbiAgICAgICAgICBtYXJrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21hcmstLW5vdGUnKTtcclxuICAgICAgICAgIG5vdGVCdG4gPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUtYnRuJylbMF07XHJcbiAgICAgICAgICBub3RlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgbm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtYXJrX19ub3RlLWJ0bi0tJyArIG5vdGVDb2xvcik7XHJcbiAgICAgICAgICBub3RlTm9kZSA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZScpWzBdO1xyXG4gICAgICAgICAgbm90ZU5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm90ZVRleHQpKTtcclxuICAgICAgICAgIG5vdGVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgbm90ZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWFya19fbm90ZS0tJyArIG5vdGVDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1hcmtDb250YWluZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG1hcmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICB9LFxyXG4gIG5hdihlLCBlbCkge1xyXG4gICAgY29uc3QgZGlyID0gMSAqIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5jdXJyZW50ICs9IGRpcjtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5sZW5ndGgpIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnQgPCAwKSB0aGlzLmN1cnJlbnQgPSB0aGlzLmxlbmd0aCAtIDE7XHJcbiAgICB0aGlzLmFjdGl2YXRlTGlzdEl0ZW0oKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlTGlzdEl0ZW0oaWQpIHtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB0aGlzLmN1cnJlbnQgPSBpZDtcclxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrLS1hY3RpdmUnKVswXTtcclxuICAgIGlmIChjdXJyZW50SXRlbSkgY3VycmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWFyay0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1pZD1cIicgKyBbdGhpcy5jdXJyZW50XSArICdcIl0nKS5jbGFzc0xpc3QuYWRkKCdtYXJrLS1hY3RpdmUnKTtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpuZXh0LW1hcmsnLCB0aGlzLmN1cnJlbnQsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGUsIGVsKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1tYXJrcycpLnZhbHVlID0gMDtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3VuZm9sZGVkJyk7XHJcbiAgICB0aGlzLmFjdGl2YXRlTGlzdEl0ZW0oMSplbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gIH0sXHJcbiAgZm9sZExpc3QoZSwgZWwpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgaWYgKHZhbCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyk7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZVNldHRpbmdzID0gdGhpcy50b2dnbGVNYXBbdmFsXTtcclxuXHJcbiAgICAgIHRoaXMudG9nZ2xlKCd0ZXh0JywgdG9nZ2xlU2V0dGluZ3NbMF0pO1xyXG4gICAgICB0aGlzLnRvZ2dsZSgnbm90ZScsIHRvZ2dsZVNldHRpbmdzWzFdKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZU5vdGUoZSwgZWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLW1hcmtzJykudmFsdWUgPSAwO1xyXG4gICAgZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlJylbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndW5mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZSh0eXBlLCBzaG93KSB7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fJyArIHR5cGUpKVxyXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3RbbWV0aF0oJ3VuZm9sZGVkJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1ldGEnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGNvbnN0IHllcyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5ZXMnKTtcclxuICAgICAgY29uc3Qgbm8gPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm8nKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19udW1iZXItbWFya3MnKS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19jcmVhdGVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fbGFzdC1tb2RpZmllZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG5cclxuICAgICAgWydzeW5jZWQnLCAnaW1tdXQnXVxyXG4gICAgICAgIC5mb3JFYWNoKGZpZWxkID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX18nICsgZmllbGQpLmlubmVyVGV4dCA9IGVudHJ5W2ZpZWxkXSA/IHllcyA6IG5vKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgcmV0dXJuIChkYXRlXHJcbiAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ2FjdGl2YXRlQm9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdkZWFjdGl2YXRlQm9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZSc6ICdhY3RpdmF0ZU5vdGVzJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ2RlYWN0aXZhdGVOb3RlcycsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJzogJ29uTm90ZXNTdGF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLXBhZ2UnOiAncGFnZUFjdGlvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzY3JvbGwnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVCb29rbWFyaygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3Njcm9sbCcsIGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdub3RlcycsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZU5vdGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnbm90ZXMnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZSh0eXBlLCBvbikge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS0nICsgdHlwZSk7XHJcbiAgICBpZiAob24pIHtcclxuICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUFjdGlvbihlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUuYm9va21hcmspIHRoaXMuYWN0aXZhdGVCb29rbWFyaygpO1xyXG4gIH0sXHJcbiAgb25Ob3Rlc1N0YXRlKG5vdGVzKSB7XHJcbiAgICBpZiAobm90ZXMpIHRoaXMuYWN0aXZhdGVOb3RlcygpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbm90ZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWRkLW5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICd0bW5vdGVkZWxldGUnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZW1pbmltaXplJzogJ3RvZ2dsZU5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVzYXZlJzogJ3NhdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcjZm9sZC1wYWdlLW5vdGVzJzogJ3RvZ2dsZU5vdGVzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBub3RlczogW10sXHJcbiAgbm90ZUVsczoge30sXHJcbiAgaWQ6IDAsXHJcbiAgY3VycmVudENvbG9yOiAneWVsbG93JyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsID0gdGFiLnVybDtcclxuICAgICAgX1NUT1JFLmdldCgncGFnZW5vdGVzJykudGhlbihwYWdlbm90ZXMgPT4ge1xyXG4gICAgICAgIHBhZ2Vub3RlcyA9IHBhZ2Vub3RlcyAmJiBwYWdlbm90ZXNbdXJsXSA/IHBhZ2Vub3Rlc1t1cmxdIDogbnVsbDtcclxuICAgICAgICBsZXQgbCwgaWQ7XHJcbiAgICAgICAgaWYgKHBhZ2Vub3RlcyAmJiAobCA9IHBhZ2Vub3Rlcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICB0aGlzLm5vdGVzID0gcGFnZW5vdGVzO1xyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IHRoaXMuYWRkTm90ZShwYWdlbm90ZXNbbF0pO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gTWF0aC5tYXgodGhpcy5pZCwgaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdCghIXRoaXMubm90ZXMubGVuZ3RoKTtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlTm90ZXMobnVsbCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2F2ZShlLCBlbCkge1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmdldEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICBub3RlLnRleHQgPSBlbC5wcmV2aW91c1NpYmxpbmcudmFsdWU7XHJcbiAgICAgIG5vdGUubmFtZSA9IGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG1ub3RlX19oZWFkZXInKVswXS52YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlLW5vdGUnLCB0aGlzLnVybCwgdGhpcy5ub3Rlcyk7XHJcbiAgfSxcclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gW107XHJcbiAgICB0aGlzLm5vdGVFbHMgPSB7fTtcclxuICAgIHRoaXMuaWQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZXMnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH0sXHJcblxyXG4gIGFkZE5vdGUobm90ZSkge2NvbnNvbGUubG9nKCdhZGQgbm90ZScpO1xyXG4gICAgbm90ZSA9IG5vdGUudHlwZSA/IG51bGwgOiBub3RlO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZXMnKTtcclxuICAgIGNvbnN0IG5vdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGUtdGVtcGxhdGUnKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IG5vdGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgIGNvbnN0IGhlYWRlciA9IG5vdGVFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bW5vdGVfX2hlYWRlcicpWzBdO1xyXG4gICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG5cclxuICAgIGxldCBpZDtcclxuICAgIGlmIChub3RlKSB7XHJcbiAgICAgIGlkID0gbm90ZUVsLmlkID0gbm90ZS5pZDtcclxuICAgICAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSBub3RlLnRleHQgfHwgJyc7XHJcbiAgICAgIGhlYWRlci52YWx1ZSA9IG5vdGUubmFtZSB8fCAnJztcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIG5vdGUuY29sb3IpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlkID0gbm90ZUVsLmlkID0gKyt0aGlzLmlkO1xyXG4gICAgICB0aGlzLm5vdGVzLnB1c2goeyBpZCwgdGV4dDogJycsIGNvbG9yOiB0aGlzLmN1cnJlbnRDb2xvciB9KTtcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyB0aGlzLmN1cnJlbnRDb2xvcik7XHJcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobm90ZUVsLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgQXJyYXkuZnJvbShub3RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSlcclxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpKTtcclxuXHJcbiAgICB0aGlzLm5vdGVFbHNbaWRdID0gbm90ZUVsO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU2VsZWN0KHRydWUpO1xyXG5cclxuICAgIHJldHVybiBpZDtcclxuICB9LFxyXG4gIGNoYW5nZUNvbG9yKGUsIGVsKSB7XHJcbiAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmN1cnJlbnRDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgdGhpcy5ub3RlRWxzW2lkXS5jbGFzc05hbWUgPSB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTmFtZS5yZXBsYWNlKC8tLVxcdysvLCAnLS0nICsgY29sb3IpO1xyXG4gICAgdGhpcy5nZXRCeUlkKGlkKS5jb2xvciA9IGNvbG9yO1xyXG4gICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgIG5vdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub3RlKTtcclxuICAgIGRlbGV0ZSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgdGhpcy5ub3Rlcy5zcGxpY2UodGhpcy5ub3Rlcy5pbmRleE9mKHRoaXMuZ2V0QnlJZChpZCkpLCAxKTtcclxuICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVTZWxlY3Qoc2hvdykge1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpLmNsYXNzTGlzdFttZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgfSxcclxuICB0b2dnbGVQYWxldHRlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcclxuICAgIGNvbnN0IHBhbGV0dGUgPSBub3RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGVwYWxldHRlJylbMF07XHJcbiAgICBwYWxldHRlLmNsYXNzTGlzdC50b2dnbGUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgaWYgKCFwYWxldHRlLmNsYXNzTGlzdC5jb250YWlucygndS1kaXNwbGF5LS1ub25lJykpIHtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZShlLCBlbCkge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcbiAgICBub3RlLmNsYXNzTGlzdC50b2dnbGUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICBpZiAoIW5vdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0bW5vdGUtLW1pbicpKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykudmFsdWUgPSAwO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoZSwgZWwpIHtcclxuICAgIGlmIChlbC52YWx1ZSA9PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubm90ZUVscykge1xyXG4gICAgICAgIHRoaXMubm90ZUVsc1tpZF0uY2xhc3NMaXN0LmFkZCgndG1ub3RlLS1taW4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG5vdGUsIHRleHRhcmVhO1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm5vdGVFbHMpIHtcclxuICAgICAgICBub3RlID0gdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgICAgICBub3RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgICAgdGhpcy5hZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm90ZXMuZmluZChub3RlID0+IG5vdGUuaWQgPT0gaWQpO1xyXG4gIH0sXHJcbiAgYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSkge1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBub3RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgMTAgKyAncHgnO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3Nob3dFbnRyeVNwZWNpZmljVGFicydcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhYl9fdGl0bGUnOiAndG9nZ2xlJyxcclxuICAgICAgICAnLnRhYl9fbmFtZSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICcudGFiX190b2dnbGUnOiAndG9nZ2xlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdGFiczoge30sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKCFzZXR0aW5ncy5zYikgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0YWJTZXR0aW5ncyA9IHNldHRpbmdzLnNiLnRhYnM7XHJcbiAgICAgIGZvciAobGV0IHRhYiBpbiB0YWJTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMudGFic1t0YWJdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tJyArIHRhYik7XHJcbiAgICAgICAgaWYgKHRhYlNldHRpbmdzW3RhYl0udW5mb2xkZWQpIHRoaXMub3Blbih0YWIpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5jbG9zZSh0YWIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvcGVuKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LnJlbW92ZSgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIGNsb3NlKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LmFkZCgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZShlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5ub2RlTmFtZSA9PT0gJ0gyJyA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgY29uc3QgdGFiID0gaWQuc3BsaXQoJy0tJykucG9wKCk7XHJcbiAgICBjb25zdCB0YWJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIHRhYkVsLmNsYXNzTGlzdC50b2dnbGUoJ3RhYi0tZm9sZGVkJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c2lkZWJhci10YWInLCB0YWIsICF0YWJFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi0tZm9sZGVkJykpO1xyXG4gIH0sXHJcbiAgc2hvd0VudHJ5U3BlY2lmaWNUYWJzKCkge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWItLWVudHJ5JykpXHJcbiAgICAgIC5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLXRhZ3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhZ3NfX3JlbW92ZSc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAgICcjYWRkLXRhZyc6ICdhZGRUYWcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgdGFncyA9IGVudHJ5LnRhZyA/IGVudHJ5LnRhZy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJykuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXJUYWcodGFnKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFncycpO1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSAndGFnc19faXRlbSB1LW92ZXJmbG93LS1lbGxpcHNpcyc7XHJcbiAgICBkZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX3JlbW92ZSc7XHJcbiAgICBkZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhZycsIHRhZyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSB0YWc7XHJcbiAgICBkZWwuYXBwZW5kQ2hpbGQoeCk7XHJcbiAgICBlbC5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICB9LFxyXG4gIGFkZFRhZygpIHtcclxuICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFnJyk7XHJcbiAgICBsZXQgdGFnID0gaW5wLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghdGFnKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2FkZDp0YWcnLCB0YWcsIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBpbnAudmFsdWUgPSAnJztcclxuICAgIHRhZy5zcGxpdCgnICcpLmZvckVhY2godGFnID0+IHRoaXMucmVuZGVyVGFnKHRhZykpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZTp0YWcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJyksIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGhlbWVzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy50aGVtZS1vcHQnOiAnb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0aGVtZTogJ2RlZmF1bHQnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IHRoZW1lID0gc2V0dGluZ3MgJiYgc2V0dGluZ3Muc2IgJiYgc2V0dGluZ3Muc2IudGhlbWUgPyBzZXR0aW5ncy5zYi50aGVtZSA6ICdkZWZhdWx0JztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRoZW1lLS0ke3RoZW1lfWApLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvbkNoYW5nZShlLCBlbCkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJywgdGhlbWUpO1xyXG4gICAgdGhpcy51cGRhdGUodGhlbWUpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHRoZW1lKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICBpZiAodGhlbWUgPT09ICdkZWZhdWx0JykgcmV0dXJuO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gYHRleHRtYXJrZXItc2lkZWJhci0tJHt0aGVtZX1gO1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuXHJcbiAgICBpZiAoIXNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdzaWRlYmFyJyxcclxuICB0eXBlOiAncHJpdmlsZWdlZCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnLFxyXG4gICAgICAnYWRkOnRhZycsXHJcbiAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJyxcclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIE1BWF9FTlRSWV9OQU1FX0NIQVJTOiA3MCxcclxuXHJcbiAgTUFYX0xPR19FTlRSSUVTOiAyMCxcclxuXHJcbiAgTk9URV9DT0xPUlM6IHtcclxuICAgIFRVUlFVT0lTRTogJyNiOWU0ZWMnLFxyXG4gICAgR1JFRU46ICcjY2NmZmNjJyxcclxuICAgIFlFTExPVzogJyNmZmZmY2MnLFxyXG4gICAgT1JBTkdFOiAnI2ZmZWViYicsXHJcbiAgICBSRUQ6ICcjZmZjY2NjJyxcclxuICAgIFBVUlBMRTogJyNlZWNjZmYnLFxyXG4gICAgQkxVRTogJyNiYmVlZmYnLFxyXG4gICAgV0hJVEU6ICcjZWVlZWVlJ1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBfQ09QWSA9IGZ1bmN0aW9uKHNyYykge1xyXG4gIGNvbnN0IHRhcmdldCA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XHJcbiAgbGV0IHZhbDtcclxuICBmb3IgKGxldCBwcm9wIGluIHNyYykge1xyXG4gICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB2YWwgPSBzcmNbcHJvcF07XHJcbiAgICAgIGlmICh2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBfQ09QWSh2YWwpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9DT1BZIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9ET01NT0RVTEUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBvYmouX2JvdW5kID0ge307XHJcbiAgICBvYmouX2V4dHJhQm91bmQgPSBbXTtcclxuXHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnNNYW51YWxseSB8fCB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtjb25zb2xlLmxvZyhzdWJNYXAsIHR5cGUsIFtlLnRhcmdldC5ub2RlTmFtZV0pO1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=