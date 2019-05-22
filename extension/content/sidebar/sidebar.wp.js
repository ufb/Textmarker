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

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._MODULE({
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

/***/ }),

/***/ "./content/sidebar/index.js":
/*!**********************************!*\
  !*** ./content/sidebar/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/sidebar/sass/index.scss");

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _port = __webpack_require__(/*! ./port */ "./content/sidebar/port.js");

var _port2 = _interopRequireDefault(_port);

var _store = __webpack_require__(/*! ./_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

__webpack_require__(/*! ./modules/themes */ "./content/sidebar/modules/themes.js");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _store2["default"].get('mode').then(function (mode) {
      return _this.power(mode);
    });
  },
  toggle: function toggle(entry) {
    var sidebar = document.getElementById('textmarker-sidebar');

    if (entry && _store2["default"].locked) {
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _store2["default"].get('autosave').then(function (autosave) {
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

      if (type === 'copy' || type === 'delete-highlight' || typeof markInfos[type] === 'boolean' && !markInfos[type] || type === 'delete-bookmark' && markInfos.bookmark) {
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

var _globalSettings = __webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js");

var _globalSettings2 = _interopRequireDefault(_globalSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    var entry = this.entry = _store2["default"].entry;

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

    for (i in _globalSettings2["default"].NOTE_COLORS) {
      c = _globalSettings2["default"].NOTE_COLORS[i];
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

      _store2["default"].get('pagenotes').then(function (pagenotes) {
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _store2["default"].get('settings').then(function (settings) {
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    this.emit('add:tag', tag, _store2["default"].entry);
    inp.value = '';
    tag.split(' ').forEach(function (tag) {
      return _this2.renderTag(tag);
    });
  },
  removeTag: function removeTag(e, el) {
    this.emit('remove:tag', el.getAttribute('data-tag'), _store2["default"].entry);
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _store2["default"].get('settings').then(function (settings) {
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
    var sidebar = document.getElementById('textmarker-sidebar');
    var className = 'textmarker-sidebar--dark';

    if (theme === 'default') {
      sidebar.classList.remove(className);
    } else {
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

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'sidebar',
  type: 'privileged',
  events: {
    CONNECTION: ['change:bg-setting', 'error:browser-console', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:retry-restoration', 'sidebar:undo', 'sidebar:redo', 'sidebar:copy', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'remove:tag', 'add:tag', 'open:addon-page(sb)', 'opened:sidebar', 'updated:page-note', 'toggled:sidebar-tab', 'sidebar:selected-marker', 'changed:sidebar-theme']
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwiZW50cnkiLCJsb2NrZWQiLCJ1cGRhdGVFbnRyeSIsImlzQXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiY3VycmVudEVudHJ5IiwicHVzaCIsImVtaXQiLCJ1cGRhdGVFbnRyeU9uRm91bmQiLCJyZXN1bWUiLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnkiLCJwYWdlbm90ZXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwid2luZG93Iiwic2V0VGltZW91dCIsIm1ldGgiLCJfZ2V0X21vZGUiLCJhZGRvbiIsImFjdGl2ZSIsIl9nZXRfYXV0b3NhdmUiLCJhdXRvc2F2ZSIsIl9nZXRfc2V0dGluZ3MiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9wYWdlbm90ZXMiLCJhdXRvaW5pdCIsInRhYiIsInBvd2VyIiwib24iLCJwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25TdGFydCIsIl9TVE9SRSIsIm1vZGUiLCJ0b2dnbGUiLCJzaWRlYmFyIiwiZWwiLCJyZW5kZXIiLCJoZWFkZXIiLCJ1cGRhdGVOYW1lIiwibmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lclRleHQiLCJ0aXRsZSIsIkRPTSIsImNsaWNrIiwicmV0cnlCdG5TaG93biIsInNhdmVCdG4iLCJyZXRyeUJ0biIsInRvZ2dsZVNhdmUiLCJzYXZlIiwicmV0cnlSZXN0b3JhdGlvbiIsImRlYWN0aXZhdGVSZXRyeSIsImFjdGl2YXRlU2F2ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVSZXRyeSIsInRvZ2dsZUltbXV0IiwiZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInVwZGF0ZUltbXV0IiwiaW1tdXQiLCJvblBhZ2VTdGF0ZSIsInN0YXRlIiwicmV0cnlBY3RpdmUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9ucyIsImZyb20iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1hcmtBY3Rpb24iLCJoYXNBdHRyaWJ1dGUiLCJhY3RpdmF0ZSIsIm1hcmtJbmZvcyIsImZvckVhY2giLCJidG4iLCJ0eXBlIiwiYm9va21hcmsiLCJkZWFjdGl2YXRlIiwiY2hhbmdlIiwiYXV0b21hcmtFbmFibGVkIiwibWlzYyIsIm1hcmttZXRob2QiLCJsb2NhbCIsImxlZnRDb250YWluZXIiLCJyaWdodENvbnRhaW5lciIsImZyYWdSaWdodCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJmcmFnTGVmdCIsInMiLCJNYXRoIiwiY2VpbCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb3VudCIsIm0iLCJib3giLCJpbnB1dCIsImV4YW1wbGVUZXh0IiwiYnV0dG9uIiwiY29sb3IiLCJjYkJveCIsImNiIiwiY2JMYWJlbCIsImNiU3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJleHRyYWN0QmdDb2xvciIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaWQiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwZW5kQ2hpbGQiLCJ0b1VwcGVyQ2FzZSIsImNoZWNrZWQiLCJzdHlsZXMiLCJzcGxpdCIsImwiLCJpIiwiaW5jbHVkZXMiLCJzZWxlY3QiLCJhcHBseUNvbG9yIiwidG9nZ2xlTWFya2VyQnV0dG9ucyIsInNob3ciLCJzZWxlY3Rpb24iLCJtYXJrcyIsIm1hcmtJRHMiLCJjdXJyZW50Iiwic2V0RmlsdGVycyIsInRvZ2dsZU1hcCIsInNldE1hcmtzIiwicmVuZGVyU1ZHRmlsdGVycyIsInJlbmRlckxpc3QiLCJjb25jYXQiLCJtYXAiLCJmaW5kIiwibWFyayIsInNldE1hcmtJRHMiLCJpZHMiLCJib2R5IiwidG1wbCIsImNvbG9ycyIsImMiLCJfU0VUVElOR1MiLCJOT1RFX0NPTE9SUyIsInRvTG93ZXJDYXNlIiwiY29udmVydEhleCIsInN1YnN0ciIsImZpbHRlciIsImNsb25lTm9kZSIsImhleCIsIk51bWJlciIsIm1hcmtUbXBsIiwiZnJhZ21lbnQiLCJtYXJrc0NvbnRhaW5lciIsIm1hcmtDb250YWluZXIiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwidGV4dCIsImluZGV4T2YiLCJoYXNOb3RlIiwibm90ZSIsIm5vdGVDb2xvciIsIm5vdGVUZXh0Iiwibm90ZUJ0biIsIm5vdGVOb2RlIiwiYm9yZGVyQ29sb3IiLCJuYXYiLCJkaXIiLCJhY3RpdmF0ZUxpc3RJdGVtIiwiY3VycmVudEl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwiZm9sZExpc3QiLCJ2YWwiLCJ0b2dnbGVTZXR0aW5ncyIsInRvZ2dsZU5vdGUiLCJ5ZXMiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm5vIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiRGF0ZSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJsYXN0IiwiZGF0ZSIsInJlcGxhY2UiLCJwIiwicSIsImFjdGl2YXRlQm9va21hcmsiLCJkZWFjdGl2YXRlQm9va21hcmsiLCJhY3RpdmF0ZU5vdGVzIiwiZGVhY3RpdmF0ZU5vdGVzIiwicGFnZUFjdGlvbiIsIm9uTm90ZXNTdGF0ZSIsIm5vdGVzIiwibm90ZUVscyIsImN1cnJlbnRDb2xvciIsInVybCIsImFkZE5vdGUiLCJtYXgiLCJ0b2dnbGVTZWxlY3QiLCJ0b2dnbGVOb3RlcyIsImdldEJ5SWQiLCJwcmV2aW91c1NpYmxpbmciLCJjb250YWluZXIiLCJub3RlRWwiLCJ0ZXh0YXJlYSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJjaGFuZ2VDb2xvciIsInJlbW92ZU5vdGUiLCJyZW1vdmVDaGlsZCIsInNwbGljZSIsInRvZ2dsZVBhbGV0dGUiLCJwYWxldHRlIiwiYWRqdXN0VGV4dGFyZWFIZWlnaHQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwic2IiLCJ0YWJTZXR0aW5ncyIsInVuZm9sZGVkIiwib3BlbiIsImNsb3NlIiwibm9kZU5hbWUiLCJwb3AiLCJ0YWJFbCIsInNob3dFbnRyeVNwZWNpZmljVGFicyIsInRhZ3MiLCJ0YWciLCJyZW5kZXJUYWciLCJkZWwiLCJ4IiwiYWRkVGFnIiwiaW5wIiwidHJpbSIsInJlbW92ZVRhZyIsInRoZW1lIiwidXBkYXRlIiwib25DaGFuZ2UiLCJDT05ORUNUSU9OIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJNQVhfTE9HX0VOVFJJRVMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInRhcmdldCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXh0cmEiLCJzZXQiLCJlcnJvciIsImZpbGUiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiT05FT0ZGIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNB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LFdBQVYsQ0FBc0JJLEdBQXRCO0FBQ2hCOzs7a0NBQ2E7QUFDWixVQUFJLENBQUMsS0FBS0csa0JBQVYsRUFBOEI7QUFDNUIsYUFBS0MsT0FBTDtBQUNBLGFBQUtDLHNCQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS0Esc0JBQUwsQ0FBNEIsS0FBS3BFLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUttRSxPQUF0QixDQUE1QjtBQUNEO0FBQ0Y7Ozs4QkFDUztBQUFBOztBQUNSLFVBQU1oQixJQUFJLEdBQUcsS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYTFVLE9BQU8sQ0FBQytULE9BQVIsQ0FBZ0IyQixPQUFoQixDQUF3QjtBQUFFL1MsWUFBSSxFQUFFLEtBQUtBO0FBQWIsT0FBeEIsQ0FBdEM7QUFDQStSLFVBQUksQ0FBQ2tCLFlBQUwsQ0FBa0JoQixXQUFsQixDQUE4QjtBQUFBLGVBQU0sTUFBSSxDQUFDRixJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCOU4sRSxFQUFJO0FBQUE7O0FBQ3pCNUcsYUFBTyxDQUFDK1QsT0FBUixDQUFnQjhCLFNBQWhCLENBQTBCakIsV0FBMUIsQ0FBc0MsVUFBQUYsSUFBSSxFQUFJO0FBQzVDQSxZQUFJLENBQUNDLFNBQUwsQ0FBZUMsV0FBZixDQUEyQixNQUFJLENBQUNyRCxLQUFMLENBQVcsTUFBWCxFQUFpQixNQUFJLENBQUNzRCxXQUF0QixDQUEzQjtBQUNBLFNBQUNqTyxFQUFELElBQU9BLEVBQUUsRUFBVDtBQUNELE9BSEQ7QUFJRDs7OztFQWxGd0JySSxlIiwiZmlsZSI6ImNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3NpZGViYXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ3NldEFyZWFzJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJzogJ3VwZGF0ZUVudHJ5T25Gb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYic6ICdyZXN1bWUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9wYWdlbm90ZXM6ICdzeW5jJyxcclxuICBlbnRyeTogbnVsbCxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG5cclxuICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlzQXJyID0gQXJyYXkuaXNBcnJheShlbnRyeSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRFbnRyeSA9ICEhdGhpcy5lbnRyeTtcclxuXHJcbiAgICAgIHRoaXMubG9ja2VkID0gdGhpcy5sb2NrZWQgfHwgaXNBcnIgfHwgZW50cnkubG9ja2VkO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmxvY2tlZCB8fCBpc0Fycikge1xyXG4gICAgICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmxvY2tlZCAmJiAhaXNBcnIpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRyeSAmJiBBcnJheS5pc0FycmF5KHRoaXMuZW50cnkpKSB0aGlzLmVudHJ5LnB1c2goZW50cnkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbnRyeSA9IFtlbnRyeV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RW50cnkpIHRoaXMuZW1pdCgndXBkYXRlZDpzdG9yZWQtZW50cnknLCB0aGlzLmVudHJ5KTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N0b3JlZDplbnRyeScsIHRoaXMuZW50cnkpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPbkZvdW5kKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGVFbnRyeShlbnRyeSk7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknLCBlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJ5ID0gbnVsbDtcclxuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6ZW50cnknKTtcclxuICB9LFxyXG5cclxuICBzZXRBcmVhcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzdG9yYWdlLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3RvcmFnZS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBzdG9yYWdlLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0QXJlYXMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfcGFnZW5vdGVzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnBhZ2Vub3RlcyB8fCBudWxsKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9QT1JUIGZyb20gJy4vcG9ydCdcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RoZW1lcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGVhZGVyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tZXRhLWluZm9zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90YWdzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlLW5vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrZXJzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmstYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbGlua3MnXHJcblxyXG5fTDEwTigpO1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdvblN0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICd0b2dnbGUnLFxyXG4gICAgICAnaW5pdGlhbGx5LXN0b3JlZDplbnRyeSc6ICd0b2dnbGUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW5lZDpzaWRlYmFyJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcblxyXG4gIHBvd2VyKG9uKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXItLXBhdXNlZCcpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuXHJcbiAgICBpZiAob24pIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMucG93ZXIobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGVudHJ5KSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG4gICAgaWYgKGVudHJ5ICYmIF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZWw7XHJcblxyXG4gICAgaWYgKCFlbnRyeSkgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkpIHJldHVybjtcclxuXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB0aGlzLnVwZGF0ZU5hbWUoZW50cnkubmFtZSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlTmFtZShuYW1lKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19uYW1lJylbMF07XHJcbiAgICBlbC5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgZWwudGl0bGUgPSBuYW1lO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcyc6ICdhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAndXBkYXRlSW1tdXQnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZScsXHJcbiAgICAgICdpbml0aWFsbHktc3RvcmVkOmVudHJ5JzogJ3VwZGF0ZUltbXV0J1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXJldHJ5JzogJ3JldHJ5UmVzdG9yYXRpb24nLFxyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXNhdmUnOiAnc2F2ZScsXHJcbiAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlSW1tdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXRyeUJ0blNob3duOiBmYWxzZSxcclxuICBzYXZlQnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLXNhdmUnKSxcclxuICByZXRyeUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1yZXRyeScpLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudG9nZ2xlU2F2ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgcmV0cnlSZXN0b3JhdGlvbigpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICAgIHRoaXMuZGVhY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfSxcclxuICB0b2dnbGVTYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgY29uc3QgbWV0aCA9IGF1dG9zYXZlID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgdGhpcy5zYXZlQnRuLmNsYXNzTGlzdFttZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlU2F2ZShvbiA9IHRydWUpIHtcclxuICAgIGlmIChvbikgdGhpcy5zYXZlQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgIGVsc2UgdGhpcy5zYXZlQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVTYXZlKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZVNhdmUoZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIGlmICghdGhpcy5yZXRyeUJ0blNob3duKSB7XHJcbiAgICAgIHRoaXMucmV0cnlCdG4uY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMucmV0cnlCdG5TaG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICBpZiAodGhpcy5yZXRyeUJ0blNob3duKSB7XHJcbiAgICAgIHRoaXMucmV0cnlCdG4uY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMucmV0cnlCdG5TaG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXQoZSwgZWwpIHtcclxuICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLWltbXV0JykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjppbW11dCcsIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZUltbXV0KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgY29uc3QgbWV0aCA9IGVudHJ5LmltbXV0ID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1pbW11dCcpLmNsYXNzTGlzdFttZXRoXSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtYm94JykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWJveCcpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZS5yZXRyeUFjdGl2ZSkgdGhpcy5hY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbGlua3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubGluayc6ICdsaW5rJyxcclxuICAgICAgICAnLmxpbmtfX2ljb24nOiAnbGluaycsXHJcbiAgICAgICAgJy5saW5rX190ZXh0JzogJ2xpbmsnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsaW5rKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnbGluaycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuOmFkZG9uLXBhZ2Uoc2IpJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2FjdGl2YXRlJyxcclxuICAgICAgJ2FjdGl2YXRlZDptYXJrJzogJ2FjdGl2YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tbWFyayc6ICdtYXJrQWN0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBidXR0b25zOiBbXSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpKTtcclxuICB9LFxyXG4gIG1hcmtBY3Rpb24oZSwgZWwpIHtcclxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjonICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCBudWxsLCBudWxsLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShtYXJrSW5mb3MpIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGxldCB0eXBlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGUgPT09ICdjb3B5JyB8fFxyXG4gICAgICAgIHR5cGUgPT09ICdkZWxldGUtaGlnaGxpZ2h0JyB8fFxyXG4gICAgICAgICh0eXBlb2YgbWFya0luZm9zW3R5cGVdID09PSAnYm9vbGVhbicgJiYgIW1hcmtJbmZvc1t0eXBlXSkgfHxcclxuICAgICAgICAodHlwZSA9PT0gJ2RlbGV0ZS1ib29rbWFyaycgJiYgbWFya0luZm9zLmJvb2ttYXJrKVxyXG4gICAgICApIHtcclxuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tYXJrZXJzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3JlbmRlcicsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnOiAncmVuZGVyJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ3RvZ2dsZU1hcmtlckJ1dHRvbnMnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy5tYXJrZXJfX2NvbG9yJzogJ2NoYW5nZScsXHJcbiAgICAgICAgJy5tYXJrZXJfX2NiJzogJ3NlbGVjdCdcclxuICAgICAgfSxcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLm1hcmtlcl9fYXBwbHknOiAnYXBwbHlDb2xvcidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF1dG9tYXJrRW5hYmxlZDogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgKCFzdG9yYWdlLnN5bmMgfHwgc3RvcmFnZS5zeW5jLnNldHRpbmdzKSkge1xyXG4gICAgICAgIHRoaXMuYXV0b21hcmtFbmFibGVkID0gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2Uuc3luYyAmJiAhc3RvcmFnZS5zeW5jLnNldHRpbmdzKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dG9tYXJrRW5hYmxlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4obWFya2VycyA9PiB7XHJcbiAgICAgIGlmICghbWFya2VycykgcmV0dXJuIHRoaXM7XHJcbiAgICAgIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXItLWxlZnQnKTtcclxuICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXItLXJpZ2h0Jyk7XHJcbiAgICAgIGNvbnN0IGZyYWdSaWdodCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgZnJhZ0xlZnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmNlaWwoT2JqZWN0LmtleXMobWFya2VycykubGVuZ3RoIC8gMik7XHJcbiAgICAgIGxldCBjb3VudCA9IDAsIG0sIGJveCwgaW5wdXQsIGV4YW1wbGVUZXh0LCBidXR0b24sIGNvbG9yLCBjYkJveCwgY2IsIGNiTGFiZWwsIGNiU3BhbjtcclxuXHJcbiAgICAgIGxlZnRDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgZm9yIChtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNiQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNiTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNiU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb2xvciA9IHRoaXMuZXh0cmFjdEJnQ29sb3IobWFya2Vyc1ttXS5zdHlsZSk7XHJcblxyXG4gICAgICAgIGJveC5jbGFzc05hbWUgPSAnbWFya2VyIHUtY2YnO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NvbG9yJztcclxuICAgICAgICBpbnB1dC5pZCA9ICdtYXJrZXItJyArIG07XHJcbiAgICAgICAgaW5wdXQubmFtZSA9IG07XHJcbiAgICAgICAgaW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjb2xvcjtcclxuICAgICAgICBleGFtcGxlVGV4dC5jbGFzc05hbWUgPSAnbWFya2VyX190ZXh0JztcclxuICAgICAgICBleGFtcGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbWFya2Vyc1ttXS5zdHlsZSk7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuc2V0QXR0cmlidXRlKCdmb3InLCAnbWFya2VyLScgKyBtKTtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ21hcmtlcl9fYXBwbHknO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBtKTtcclxuICAgICAgICBjYkJveC5jbGFzc05hbWUgPSAnbWFya2VyX19jYi1ib3gnO1xyXG4gICAgICAgIGNiLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NiJztcclxuICAgICAgICBjYi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgbSk7XHJcbiAgICAgICAgY2IudHlwZSA9ICdyYWRpbyc7XHJcbiAgICAgICAgY2IuaWQgPSAnbWFya2VyX19jYi0tJyArIG07XHJcbiAgICAgICAgY2IubmFtZSA9ICdtYXJrZXItY2InO1xyXG4gICAgICAgIGNiTGFiZWwuY2xhc3NOYW1lID0gJ2Zha2UtcmInO1xyXG4gICAgICAgIGNiTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWFya2VyX19jYi0tJyArIG0pO1xyXG4gICAgICAgIGNiU3Bhbi50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMjlhKTtcclxuXHJcbiAgICAgICAgY2JMYWJlbC5hcHBlbmRDaGlsZChjYlNwYW4pO1xyXG4gICAgICAgIGNiQm94LmFwcGVuZENoaWxkKGNiKTtcclxuICAgICAgICBjYkJveC5hcHBlbmRDaGlsZChjYkxhYmVsKTtcclxuXHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNiQm94KTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChleGFtcGxlVGV4dCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudCA+IDMgJiYgY291bnQgPiBzKSB7XHJcbiAgICAgICAgICBmcmFnTGVmdC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmcmFnUmlnaHQuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG0gPSBtLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbSA9IG0gPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBtO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LmlubmVyVGV4dCA9IG07XHJcbiAgICAgICAgaWYgKCFjb2xvcikgaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdSaWdodCk7XHJcbiAgICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ0xlZnQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b21hcmtFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdhdXRvJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcl9fY2ItLW0nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2F1dG8nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBleHRyYWN0QmdDb2xvcihzdHlsZXMpIHtcclxuICAgIGxldCBzcGxpdCA9IHN0eWxlcy5zcGxpdCgnOycpLFxyXG4gICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXHJcbiAgICAgICAgY29sb3IgPSAnJyxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBzdHlsZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzdHlsZSA9IHNwbGl0W2ldO1xyXG4gICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgIGNvbG9yID0gc3R5bGUuc3BsaXQoJzonKVsxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH0sXHJcbiAgY2hhbmdlKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZTpiZy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gIH0sXHJcbiAgc2VsZWN0KGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBhcHBseUNvbG9yKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6aGlnaGxpZ2h0JywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICB0b2dnbGVNYXJrZXJCdXR0b25zKHNob3cpIHtcclxuICAgIGlmICh0aGlzLmF1dG9tYXJrRW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdzZXRBdHRyaWJ1dGUnO1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrZXJfX2FwcGx5JykpLmZvckVhY2goYnRuID0+IGJ0blttZXRoXSgnZGlzYWJsZWQnLCB0cnVlKSk7XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy50b2dnbGVNYXJrZXJCdXR0b25zKHN0YXRlLnNlbGVjdGlvbik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tYXJrcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJzogJ3NldE1hcmtJRHMnLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeScgOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya19fdGV4dCc6ICdhY3RpdmF0ZScsXHJcbiAgICAgICAgJy5tYXJrX19ub3RlLWJ0bic6ICd0b2dnbGVOb3RlJyxcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLW5hdic6ICduYXYnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcjZm9sZC1tYXJrcyc6ICdmb2xkTGlzdCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1hcmtzOiBbXSxcclxuICBtYXJrSURzOiBudWxsLFxyXG4gIGxlbmd0aDogMCxcclxuICBjdXJyZW50OiAtMSxcclxuICBzZXRGaWx0ZXJzOiBmYWxzZSxcclxuICB0b2dnbGVNYXA6IHsgJzEnOiBbZmFsc2UsIGZhbHNlXSwgJzInOiBbdHJ1ZSwgZmFsc2VdLCAnMyc6IFtmYWxzZSwgdHJ1ZV0sICc0JzogW3RydWUsIHRydWVdIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeSA9IF9TVE9SRS5lbnRyeTtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICB0aGlzLnNldE1hcmtzKCk7XHJcbiAgICAgIGlmICghdGhpcy5zZXRGaWx0ZXJzKSB0aGlzLnJlbmRlclNWR0ZpbHRlcnMoKTtcclxuICAgICAgdGhpcy5yZW5kZXJMaXN0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXRNYXJrcygpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeTtcclxuICAgIGxldCBtYXJrcyA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGVudHJ5LmZvckVhY2goZSA9PiBtYXJrcyA9IG1hcmtzLmNvbmNhdChlLm1hcmtzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFya0lEcyA9IHRoaXMubWFya0lEcztcclxuICAgIC8vdGhpcy5sZW5ndGggPSBtYXJrcy5sZW5ndGg7XHJcbiAgICAvL3RoaXMubWFya3MgPSBtYXJrSURzID8gbWFya3Muc29ydCgobTEsIG0yKSA9PiBtYXJrSURzLmluZGV4T2YobTEuaWQpIDwgbWFya0lEcy5pbmRleE9mKG0yLmlkKSkgOiBtYXJrcztcclxuICAgIHRoaXMubWFya3MgPSBtYXJrSURzID9cclxuICAgICAgbWFya0lEcy5tYXAoaWQgPT4gbWFya3MuZmluZChtYXJrID0+IG1hcmsuaWQgPT0gaWQpKSA6XHJcbiAgICAgIG1hcmtzO1xyXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLm1hcmtzLmxlbmd0aDtcclxuICB9LFxyXG4gIHNldE1hcmtJRHMoaWRzKSB7XHJcbiAgICB0aGlzLm1hcmtJRHMgPSBpZHM7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyU1ZHRmlsdGVycygpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgdG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IGNvbG9ycyA9IHt9O1xyXG4gICAgbGV0IGksIGM7XHJcbiAgICBmb3IgKGkgaW4gX1NFVFRJTkdTLk5PVEVfQ09MT1JTKSB7XHJcbiAgICAgICBjID0gX1NFVFRJTkdTLk5PVEVfQ09MT1JTW2ldO1xyXG4gICAgICBjb2xvcnNbaS50b0xvd2VyQ2FzZSgpXSA9ICcwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoMSwyKSkgKyAnIDAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cigzLDIpKSArICcgMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDUsMikpICsgJyAwIDAgMCAxIDAnO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlcjtcclxuICAgIGZvciAoaSBpbiBjb2xvcnMpIHtcclxuICAgICAgZmlsdGVyID0gdG1wbC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGZpbHRlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsdGVyJylbMF0uaWQgPSAnZmlsdGVyLS0nICsgaTtcclxuICAgICAgZmlsdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmZUNvbG9yTWF0cml4JylbMF0uc2V0QXR0cmlidXRlKCd2YWx1ZXMnLCBjb2xvcnNbaV0pO1xyXG4gICAgICBib2R5LmFwcGVuZENoaWxkKGZpbHRlcilcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RmlsdGVycyA9IHRydWU7XHJcbiAgfSxcclxuICBjb252ZXJ0SGV4KGhleCkge1xyXG4gICAgcmV0dXJuICgoMTYgKiBOdW1iZXIoJzB4JyArIGhleFswXSkpICsgTnVtYmVyKCcweCcgKyBoZXhbMV0pKSAvIDI1NTtcclxuICB9LFxyXG4gIHJlbmRlckxpc3QoKSB7XHJcbiAgICBjb25zdCBtYXJrVG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IG1hcmtzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyk7XHJcbiAgICBsZXQgbWFya0NvbnRhaW5lcjtcclxuXHJcbiAgICBtYXJrc0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICB0aGlzLm1hcmtzLmZvckVhY2goKG1hcmssIGkpID0+IHtcclxuICAgICAgaWYgKG1hcmspIHtcclxuICAgICAgICBtYXJrQ29udGFpbmVyID0gbWFya1RtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuaWQgPSAnJztcclxuICAgICAgICBtYXJrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX190ZXh0JylbMF07XHJcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtYXJrLnRleHQpO1xyXG4gICAgICAgIGxldCBjb2xvciA9IG1hcmsuc3R5bGUuaW5kZXhPZignYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGxldCBoYXNOb3RlID0gbWFyay5ub3RlICYmICh0eXBlb2YgbWFyay5ub3RlID09PSAnc3RyaW5nJyB8fCBtYXJrLm5vdGUudGV4dCk7XHJcbiAgICAgICAgY29sb3IgPSBjb2xvciA9PT0gLTEgPyAndHJhbnNwYXJlbnQnIDogbWFyay5zdHlsZS5zdWJzdHIoY29sb3IgKyAxNywgNyk7XHJcbiAgICAgICAgbGV0IG5vdGUsIG5vdGVDb2xvciwgbm90ZVRleHQsIG5vdGVCdG4sIG5vdGVOb2RlO1xyXG5cclxuICAgICAgICB0ZXh0Tm9kZS5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRleHROb2RlLmFwcGVuZENoaWxkKHRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGhhc05vdGUpIHtcclxuICAgICAgICAgIG5vdGUgPSBtYXJrLm5vdGU7XHJcbiAgICAgICAgICBub3RlQ29sb3IgPSBub3RlLmNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgICAgICAgbm90ZVRleHQgPSBub3RlLnRleHQgfHwgbm90ZTtcclxuICAgICAgICAgIG1hcmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFyay0tbm90ZScpO1xyXG4gICAgICAgICAgbm90ZUJ0biA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZS1idG4nKVswXTtcclxuICAgICAgICAgIG5vdGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICBub3RlQnRuLmNsYXNzTGlzdC5hZGQoJ21hcmtfX25vdGUtYnRuLS0nICsgbm90ZUNvbG9yKTtcclxuICAgICAgICAgIG5vdGVOb2RlID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlJylbMF07XHJcbiAgICAgICAgICBub3RlTm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub3RlVGV4dCkpO1xyXG4gICAgICAgICAgbm90ZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICBub3RlTm9kZS5jbGFzc0xpc3QuYWRkKCdtYXJrX19ub3RlLS0nICsgbm90ZUNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWFya0NvbnRhaW5lcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbWFya3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gIH0sXHJcbiAgbmF2KGUsIGVsKSB7XHJcbiAgICBjb25zdCBkaXIgPSAxICogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcbiAgICB0aGlzLmN1cnJlbnQgKz0gZGlyO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLmxlbmd0aCkgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudCA8IDApIHRoaXMuY3VycmVudCA9IHRoaXMubGVuZ3RoIC0gMTtcclxuICAgIHRoaXMuYWN0aXZhdGVMaXN0SXRlbSgpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVMaXN0SXRlbShpZCkge1xyXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHRoaXMuY3VycmVudCA9IGlkO1xyXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmstLWFjdGl2ZScpWzBdO1xyXG4gICAgaWYgKGN1cnJlbnRJdGVtKSBjdXJyZW50SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXJrLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWlkPVwiJyArIFt0aGlzLmN1cnJlbnRdICsgJ1wiXScpLmNsYXNzTGlzdC5hZGQoJ21hcmstLWFjdGl2ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOm5leHQtbWFyaycsIHRoaXMuY3VycmVudCwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoZSwgZWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLW1hcmtzJykudmFsdWUgPSAwO1xyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgndW5mb2xkZWQnKTtcclxuICAgIHRoaXMuYWN0aXZhdGVMaXN0SXRlbSgxKmVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfSxcclxuICBmb2xkTGlzdChlLCBlbCkge1xyXG4gICAgY29uc3QgdmFsID0gZWwudmFsdWU7XHJcbiAgICBpZiAodmFsICE9IDApIHtcclxuICAgICAgY29uc3QgbWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKTtcclxuICAgICAgY29uc3QgdG9nZ2xlU2V0dGluZ3MgPSB0aGlzLnRvZ2dsZU1hcFt2YWxdO1xyXG5cclxuICAgICAgdGhpcy50b2dnbGUoJ3RleHQnLCB0b2dnbGVTZXR0aW5nc1swXSk7XHJcbiAgICAgIHRoaXMudG9nZ2xlKCdub3RlJywgdG9nZ2xlU2V0dGluZ3NbMV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZShlLCBlbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtbWFya3MnKS52YWx1ZSA9IDA7XHJcbiAgICBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCd1bmZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKHR5cGUsIHNob3cpIHtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgIEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX18nICsgdHlwZSkpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdFttZXRoXSgndW5mb2xkZWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWV0YScpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgeWVzID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3llcycpO1xyXG4gICAgICBjb25zdCBubyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubycpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX251bWJlci1tYXJrcycpLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX2NyZWF0ZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19sYXN0LW1vZGlmaWVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcblxyXG4gICAgICBbJ3N5bmNlZCcsICdpbW11dCddXHJcbiAgICAgICAgLmZvckVhY2goZmllbGQgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfXycgKyBmaWVsZCkuaW5uZXJUZXh0ID0gZW50cnlbZmllbGRdID8geWVzIDogbm8pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGVcclxuICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnYWN0aXZhdGVCb29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ2RlYWN0aXZhdGVCb29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJzogJ2FjdGl2YXRlTm90ZXMnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnZGVhY3RpdmF0ZU5vdGVzJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnOiAnb25Ob3Rlc1N0YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tcGFnZSc6ICdwYWdlQWN0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZhdGVCb29rbWFyaygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3Njcm9sbCcsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZUJvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnc2Nyb2xsJywgZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVOb3RlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ25vdGVzJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdub3RlcycsIGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKHR5cGUsIG9uKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLScgKyB0eXBlKTtcclxuICAgIGlmIChvbikge1xyXG4gICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlQWN0aW9uKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6JyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZS5ib29rbWFyaykgdGhpcy5hY3RpdmF0ZUJvb2ttYXJrKCk7XHJcbiAgfSxcclxuICBvbk5vdGVzU3RhdGUobm90ZXMpIHtcclxuICAgIGlmIChub3RlcykgdGhpcy5hY3RpdmF0ZU5vdGVzKCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1ub3RlcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3Rlcyc6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hZGQtbm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdyZW1vdmVOb3RlJyxcclxuICAgICAgICAndG1ub3RlbWluaW1pemUnOiAndG9nZ2xlTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZXNhdmUnOiAnc2F2ZSdcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJyNmb2xkLXBhZ2Utbm90ZXMnOiAndG9nZ2xlTm90ZXMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG5vdGVzOiBbXSxcclxuICBub3RlRWxzOiB7fSxcclxuICBpZDogMCxcclxuICBjdXJyZW50Q29sb3I6ICd5ZWxsb3cnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwgPSB0YWIudXJsO1xyXG4gICAgICBfU1RPUkUuZ2V0KCdwYWdlbm90ZXMnKS50aGVuKHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgICAgcGFnZW5vdGVzID0gcGFnZW5vdGVzICYmIHBhZ2Vub3Rlc1t1cmxdID8gcGFnZW5vdGVzW3VybF0gOiBudWxsO1xyXG4gICAgICAgIGxldCBsLCBpZDtcclxuICAgICAgICBpZiAocGFnZW5vdGVzICYmIChsID0gcGFnZW5vdGVzLmxlbmd0aCkpIHtcclxuICAgICAgICAgIHRoaXMubm90ZXMgPSBwYWdlbm90ZXM7XHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gdGhpcy5hZGROb3RlKHBhZ2Vub3Rlc1tsXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBNYXRoLm1heCh0aGlzLmlkLCBpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KCEhdGhpcy5ub3Rlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVOb3RlcyhudWxsLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzYXZlKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZ2V0QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgIG5vdGUudGV4dCA9IGVsLnByZXZpb3VzU2libGluZy52YWx1ZTtcclxuICAgICAgbm90ZS5uYW1lID0gZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bW5vdGVfX2hlYWRlcicpWzBdLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Utbm90ZScsIHRoaXMudXJsLCB0aGlzLm5vdGVzKTtcclxuICB9LFxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMubm90ZXMgPSBbXTtcclxuICAgIHRoaXMubm90ZUVscyA9IHt9O1xyXG4gICAgdGhpcy5pZCA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlcycpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgfSxcclxuXHJcbiAgYWRkTm90ZShub3RlKSB7XHJcbiAgICBub3RlID0gbm90ZS50eXBlID8gbnVsbCA6IG5vdGU7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlcycpO1xyXG4gICAgY29uc3Qgbm90ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZS10ZW1wbGF0ZScpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gbm90ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgY29uc3QgaGVhZGVyID0gbm90ZUVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rtbm90ZV9faGVhZGVyJylbMF07XHJcbiAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgbGV0IGlkO1xyXG4gICAgaWYgKG5vdGUpIHtcclxuICAgICAgaWQgPSBub3RlRWwuaWQgPSBub3RlLmlkO1xyXG4gICAgICB0ZXh0YXJlYS50ZXh0Q29udGVudCA9IG5vdGUudGV4dCB8fCAnJztcclxuICAgICAgaGVhZGVyLnZhbHVlID0gbm90ZS5uYW1lIHx8ICcnO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgbm90ZS5jb2xvcik7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWQgPSBub3RlRWwuaWQgPSArK3RoaXMuaWQ7XHJcbiAgICAgIHRoaXMubm90ZXMucHVzaCh7IGlkLCB0ZXh0OiAnJywgY29sb3I6IHRoaXMuY3VycmVudENvbG9yIH0pO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIHRoaXMuY3VycmVudENvbG9yKTtcclxuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub3RlRWwsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBBcnJheS5mcm9tKG5vdGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKVxyXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCkpO1xyXG5cclxuICAgIHRoaXMubm90ZUVsc1tpZF0gPSBub3RlRWw7XHJcblxyXG4gICAgdGhpcy50b2dnbGVTZWxlY3QodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuY3VycmVudENvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTmFtZSA9IHRoaXMubm90ZUVsc1tpZF0uY2xhc3NOYW1lLnJlcGxhY2UoLy0tXFx3Ky8sICctLScgKyBjb2xvcik7XHJcbiAgICB0aGlzLmdldEJ5SWQoaWQpLmNvbG9yID0gY29sb3I7XHJcbiAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZShlLCBlbCkge1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgbm90ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGUpO1xyXG4gICAgZGVsZXRlIHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICB0aGlzLm5vdGVzLnNwbGljZSh0aGlzLm5vdGVzLmluZGV4T2YodGhpcy5nZXRCeUlkKGlkKSksIDEpO1xyXG4gICAgdGhpcy5zYXZlKCk7XHJcbiAgICBpZiAoIXRoaXMubm90ZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KGZhbHNlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZVNlbGVjdChzaG93KSB7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykuY2xhc3NMaXN0W21ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICB9LFxyXG4gIHRvZ2dsZVBhbGV0dGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldO1xyXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5vdGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZXBhbGV0dGUnKVswXTtcclxuICAgIHBhbGV0dGUuY2xhc3NMaXN0LnRvZ2dsZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICBpZiAoIXBhbGV0dGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd1LWRpc3BsYXktLW5vbmUnKSkge1xyXG4gICAgICBub3RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcclxuICAgIG5vdGUuY2xhc3NMaXN0LnRvZ2dsZSgndG1ub3RlLS1taW4nKTtcclxuICAgIGlmICghbm90ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rtbm90ZS0tbWluJykpIHtcclxuICAgICAgdGhpcy5hZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKS52YWx1ZSA9IDA7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcyhlLCBlbCkge1xyXG4gICAgaWYgKGVsLnZhbHVlID09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5ub3RlRWxzKSB7XHJcbiAgICAgICAgdGhpcy5ub3RlRWxzW2lkXS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgbm90ZSwgdGV4dGFyZWE7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubm90ZUVscykge1xyXG4gICAgICAgIG5vdGUgPSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgICAgIG5vdGUuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgICAgICB0aGlzLmFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3Rlcy5maW5kKG5vdGUgPT4gbm90ZS5pZCA9PSBpZCk7XHJcbiAgfSxcclxuICBhZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKSB7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IG5vdGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAnc2hvd0VudHJ5U3BlY2lmaWNUYWJzJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFiX190aXRsZSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICcudGFiX19uYW1lJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy50YWJfX3RvZ2dsZSc6ICd0b2dnbGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0YWJzOiB7fSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoIXNldHRpbmdzLnNiKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRhYlNldHRpbmdzID0gc2V0dGluZ3Muc2IudGFicztcclxuICAgICAgZm9yIChsZXQgdGFiIGluIHRhYlNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy50YWJzW3RhYl0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS0nICsgdGFiKTtcclxuICAgICAgICBpZiAodGFiU2V0dGluZ3NbdGFiXS51bmZvbGRlZCkgdGhpcy5vcGVuKHRhYik7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNsb3NlKHRhYik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9wZW4odGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QucmVtb3ZlKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgY2xvc2UodGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QuYWRkKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLm5vZGVOYW1lID09PSAnSDInID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICBjb25zdCB0YWIgPSBpZC5zcGxpdCgnLS0nKS5wb3AoKTtcclxuICAgIGNvbnN0IHRhYkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgdGFiRWwuY2xhc3NMaXN0LnRvZ2dsZSgndGFiLS1mb2xkZWQnKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDpzaWRlYmFyLXRhYicsIHRhYiwgIXRhYkVsLmNsYXNzTGlzdC5jb250YWlucygndGFiLS1mb2xkZWQnKSk7XHJcbiAgfSxcclxuICBzaG93RW50cnlTcGVjaWZpY1RhYnMoKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYi0tZW50cnknKSlcclxuICAgICAgLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGFncycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFnc19fcmVtb3ZlJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICAgJyNhZGQtdGFnJzogJ2FkZFRhZydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5ICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBjb25zdCB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBbXTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZ3MnKS5pbm5lclRleHQgPSAnJztcclxuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB0aGlzLnJlbmRlclRhZyh0YWcpKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlclRhZyh0YWcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJyk7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9ICd0YWdzX19pdGVtIHUtb3ZlcmZsb3ctLWVsbGlwc2lzJztcclxuICAgIGRlbC5jbGFzc05hbWUgPSAndGFnc19fcmVtb3ZlJztcclxuICAgIGRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJywgdGFnKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IHRhZztcclxuICAgIGRlbC5hcHBlbmRDaGlsZCh4KTtcclxuICAgIGVsLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKCkge1xyXG4gICAgY29uc3QgaW5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YWcnKTtcclxuICAgIGxldCB0YWcgPSBpbnAudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKCF0YWcpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnYWRkOnRhZycsIHRhZywgX1NUT1JFLmVudHJ5KTtcclxuICAgIGlucC52YWx1ZSA9ICcnO1xyXG4gICAgdGFnLnNwbGl0KCcgJykuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlOnRhZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YWcnKSwgX1NUT1JFLmVudHJ5KTtcclxuICAgIGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5wYXJlbnROb2RlKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS10aGVtZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLnRoZW1lLW9wdCc6ICdvbkNoYW5nZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRoZW1lOiAnZGVmYXVsdCcsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgdGhlbWUgPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5zYiAmJiBzZXR0aW5ncy5zYi50aGVtZSA/IHNldHRpbmdzLnNiLnRoZW1lIDogJ2RlZmF1bHQnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGhlbWUtLSR7dGhlbWV9YCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoZW1lKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uQ2hhbmdlKGUsIGVsKSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNpZGViYXItdGhlbWUnLCB0aGVtZSk7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgfSxcclxuICB1cGRhdGUodGhlbWUpIHtcclxuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSAndGV4dG1hcmtlci1zaWRlYmFyLS1kYXJrJztcclxuICAgIGlmICh0aGVtZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdzaWRlYmFyJyxcclxuICB0eXBlOiAncHJpdmlsZWdlZCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdyZW1vdmU6dGFnJyxcclxuICAgICAgJ2FkZDp0YWcnLFxyXG4gICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZScsXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSdcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==