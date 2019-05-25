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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwiZW50cnkiLCJsb2NrZWQiLCJ1cGRhdGVFbnRyeSIsImlzQXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiY3VycmVudEVudHJ5IiwicHVzaCIsImVtaXQiLCJ1cGRhdGVFbnRyeU9uRm91bmQiLCJyZXN1bWUiLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnkiLCJwYWdlbm90ZXMiLCJmaWVsZCIsIlByb21pc2UiLCJyIiwid2luZG93Iiwic2V0VGltZW91dCIsIm1ldGgiLCJfZ2V0X21vZGUiLCJhZGRvbiIsImFjdGl2ZSIsIl9nZXRfYXV0b3NhdmUiLCJhdXRvc2F2ZSIsIl9nZXRfc2V0dGluZ3MiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9wYWdlbm90ZXMiLCJhdXRvaW5pdCIsInRhYiIsInBvd2VyIiwib24iLCJwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25TdGFydCIsIl9TVE9SRSIsIm1vZGUiLCJ0b2dnbGUiLCJzaWRlYmFyIiwiZWwiLCJyZW5kZXIiLCJoZWFkZXIiLCJ1cGRhdGVOYW1lIiwibmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lclRleHQiLCJ0aXRsZSIsIkRPTSIsImNsaWNrIiwicmV0cnlCdG5TaG93biIsInNhdmVCdG4iLCJyZXRyeUJ0biIsInRvZ2dsZVNhdmUiLCJzYXZlIiwicmV0cnlSZXN0b3JhdGlvbiIsImRlYWN0aXZhdGVSZXRyeSIsImFjdGl2YXRlU2F2ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVSZXRyeSIsInRvZ2dsZUltbXV0IiwiZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInVwZGF0ZUltbXV0IiwiaW1tdXQiLCJvblBhZ2VTdGF0ZSIsInN0YXRlIiwicmV0cnlBY3RpdmUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9ucyIsImZyb20iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1hcmtBY3Rpb24iLCJoYXNBdHRyaWJ1dGUiLCJhY3RpdmF0ZSIsIm1hcmtJbmZvcyIsImZvckVhY2giLCJidG4iLCJ0eXBlIiwiYm9va21hcmsiLCJkZWFjdGl2YXRlIiwiY2hhbmdlIiwiYXV0b21hcmtFbmFibGVkIiwibWlzYyIsIm1hcmttZXRob2QiLCJsb2NhbCIsImxlZnRDb250YWluZXIiLCJyaWdodENvbnRhaW5lciIsImZyYWdSaWdodCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJmcmFnTGVmdCIsInMiLCJNYXRoIiwiY2VpbCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb3VudCIsIm0iLCJib3giLCJpbnB1dCIsImV4YW1wbGVUZXh0IiwiYnV0dG9uIiwiY29sb3IiLCJjYkJveCIsImNiIiwiY2JMYWJlbCIsImNiU3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJleHRyYWN0QmdDb2xvciIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaWQiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwZW5kQ2hpbGQiLCJ0b1VwcGVyQ2FzZSIsImNoZWNrZWQiLCJzdHlsZXMiLCJzcGxpdCIsImwiLCJpIiwiaW5jbHVkZXMiLCJzZWxlY3QiLCJhcHBseUNvbG9yIiwidG9nZ2xlTWFya2VyQnV0dG9ucyIsInNob3ciLCJzZWxlY3Rpb24iLCJtYXJrcyIsIm1hcmtJRHMiLCJjdXJyZW50Iiwic2V0RmlsdGVycyIsInRvZ2dsZU1hcCIsInNldE1hcmtzIiwicmVuZGVyU1ZHRmlsdGVycyIsInJlbmRlckxpc3QiLCJjb25jYXQiLCJtYXAiLCJmaW5kIiwibWFyayIsInNldE1hcmtJRHMiLCJpZHMiLCJib2R5IiwidG1wbCIsImNvbG9ycyIsImMiLCJfU0VUVElOR1MiLCJOT1RFX0NPTE9SUyIsInRvTG93ZXJDYXNlIiwiY29udmVydEhleCIsInN1YnN0ciIsImZpbHRlciIsImNsb25lTm9kZSIsImhleCIsIk51bWJlciIsIm1hcmtUbXBsIiwiZnJhZ21lbnQiLCJtYXJrc0NvbnRhaW5lciIsIm1hcmtDb250YWluZXIiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwidGV4dCIsImluZGV4T2YiLCJoYXNOb3RlIiwibm90ZSIsIm5vdGVDb2xvciIsIm5vdGVUZXh0Iiwibm90ZUJ0biIsIm5vdGVOb2RlIiwiYm9yZGVyQ29sb3IiLCJuYXYiLCJkaXIiLCJhY3RpdmF0ZUxpc3RJdGVtIiwiY3VycmVudEl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwiZm9sZExpc3QiLCJ2YWwiLCJ0b2dnbGVTZXR0aW5ncyIsInRvZ2dsZU5vdGUiLCJ5ZXMiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm5vIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiRGF0ZSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJsYXN0IiwiZGF0ZSIsInJlcGxhY2UiLCJwIiwicSIsImFjdGl2YXRlQm9va21hcmsiLCJkZWFjdGl2YXRlQm9va21hcmsiLCJhY3RpdmF0ZU5vdGVzIiwiZGVhY3RpdmF0ZU5vdGVzIiwicGFnZUFjdGlvbiIsIm9uTm90ZXNTdGF0ZSIsIm5vdGVzIiwibm90ZUVscyIsImN1cnJlbnRDb2xvciIsInVybCIsImFkZE5vdGUiLCJtYXgiLCJ0b2dnbGVTZWxlY3QiLCJ0b2dnbGVOb3RlcyIsImdldEJ5SWQiLCJwcmV2aW91c1NpYmxpbmciLCJjb250YWluZXIiLCJub3RlRWwiLCJ0ZXh0YXJlYSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJjaGFuZ2VDb2xvciIsInJlbW92ZU5vdGUiLCJyZW1vdmVDaGlsZCIsInNwbGljZSIsInRvZ2dsZVBhbGV0dGUiLCJwYWxldHRlIiwiYWRqdXN0VGV4dGFyZWFIZWlnaHQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwic2IiLCJ0YWJTZXR0aW5ncyIsInVuZm9sZGVkIiwib3BlbiIsImNsb3NlIiwibm9kZU5hbWUiLCJwb3AiLCJ0YWJFbCIsInNob3dFbnRyeVNwZWNpZmljVGFicyIsInRhZ3MiLCJ0YWciLCJyZW5kZXJUYWciLCJkZWwiLCJ4IiwiYWRkVGFnIiwiaW5wIiwidHJpbSIsInJlbW92ZVRhZyIsInRoZW1lIiwidXBkYXRlIiwib25DaGFuZ2UiLCJDT05ORUNUSU9OIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJNQVhfTE9HX0VOVFJJRVMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInRhcmdldCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJhdXRvUGF1c2UiLCJzZXRBdXRvUGF1c2UiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsInJlbW92ZUxpc3RlbmVycyIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXh0cmEiLCJzZXQiLCJlcnJvciIsImZpbGUiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiT05FT0ZGIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5l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QUM1Q0EsWUFBSSxDQUFDQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsTUFBSSxDQUFDckQsS0FBTCxDQUFXLE1BQVgsRUFBaUIsTUFBSSxDQUFDc0QsV0FBdEIsQ0FBM0I7QUFDQSxTQUFDcE8sRUFBRCxJQUFPQSxFQUFFLEVBQVQ7QUFDRCxPQUhEO0FBSUQ7Ozs7RUF4RndCckksZSIsImZpbGUiOiJjb250ZW50L3NpZGViYXIvc2lkZWJhci53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdzZXRBcmVhcycsXHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCc6ICd1cGRhdGVFbnRyeU9uRm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYic6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInOiAncmVzdW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gIGluaXRpYWxpemluZzogZmFsc2UsXHJcbiAgYXJlYV9zZXR0aW5nczogJ3N5bmMnLFxyXG4gIGFyZWFfaGlzdG9yeTogJ3N5bmMnLFxyXG4gIGFyZWFfcGFnZW5vdGVzOiAnc3luYycsXHJcbiAgZW50cnk6IG51bGwsXHJcbiAgbG9ja2VkOiBmYWxzZSxcclxuXHJcbiAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICBjb25zdCBpc0FyciA9IEFycmF5LmlzQXJyYXkoZW50cnkpO1xyXG4gICAgICBjb25zdCBjdXJyZW50RW50cnkgPSAhIXRoaXMuZW50cnk7XHJcblxyXG4gICAgICB0aGlzLmxvY2tlZCA9IHRoaXMubG9ja2VkIHx8IGlzQXJyIHx8IGVudHJ5LmxvY2tlZDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5sb2NrZWQgfHwgaXNBcnIpIHtcclxuICAgICAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5sb2NrZWQgJiYgIWlzQXJyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cnkgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmVudHJ5KSkgdGhpcy5lbnRyeS5wdXNoKGVudHJ5KTtcclxuICAgICAgICBlbHNlIHRoaXMuZW50cnkgPSBbZW50cnldO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudEVudHJ5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JywgdGhpcy5lbnRyeSk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCdzdG9yZWQ6ZW50cnknLCB0aGlzLmVudHJ5KTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25Gb3VuZChlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRW50cnkoZW50cnkpO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbml0aWFsbHktc3RvcmVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5lbnRyeSA9IG51bGw7XHJcbiAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmVudHJ5Jyk7XHJcbiAgfSxcclxuXHJcbiAgc2V0QXJlYXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3RvcmFnZS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN0b3JhZ2Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3RvcmFnZS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldEFyZWFzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9hdXRvc2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3BhZ2Vub3RlcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5wYWdlbm90ZXMgfHwgbnVsbCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0wxME4gfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfUE9SVCBmcm9tICcuL3BvcnQnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy90aGVtZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2hlYWRlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbWV0YS1pbmZvcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdGFncydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VycydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGlzdG9yeS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrLWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3BhZ2UtYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2xpbmtzJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnb25TdGFydCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAndG9nZ2xlJyxcclxuICAgICAgJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknOiAndG9nZ2xlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuZWQ6c2lkZWJhcicsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG5cclxuICBwb3dlcihvbikge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyLS1wYXVzZWQnKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcblxyXG4gICAgaWYgKG9uKSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblN0YXJ0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnBvd2VyKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZShlbnRyeSkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuICAgIGlmIChlbnRyeSAmJiBfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1zaWRlYmFyLS1sb2NrZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1zaWRlYmFyLS1sb2NrZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmVsO1xyXG5cclxuICAgIGlmICghZW50cnkpIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpKSByZXR1cm47XHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgdGhpcy51cGRhdGVOYW1lKGVudHJ5Lm5hbWUpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZU5hbWUobmFtZSkge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbmFtZScpWzBdO1xyXG4gICAgZWwuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIGVsLnRpdGxlID0gbmFtZTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncyc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZSc6ICdkZWFjdGl2YXRlU2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICdkZWFjdGl2YXRlU2F2ZScsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnOiAnYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ2FjdGl2YXRlUmV0cnknLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3VwZGF0ZUltbXV0JyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnLFxyXG4gICAgICAnaW5pdGlhbGx5LXN0b3JlZDplbnRyeSc6ICd1cGRhdGVJbW11dCdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnI3BhZ2UtYWN0aW9uLS1yZXRyeSc6ICdyZXRyeVJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnI3BhZ2UtYWN0aW9uLS1zYXZlJzogJ3NhdmUnLFxyXG4gICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZUltbXV0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmV0cnlCdG5TaG93bjogZmFsc2UsXHJcbiAgc2F2ZUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1zYXZlJyksXHJcbiAgcmV0cnlCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tcmV0cnknKSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZVNhdmUoKTtcclxuICB9LFxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnNhdmUtY2hhbmdlcycsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHJldHJ5UmVzdG9yYXRpb24oKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgICB0aGlzLmRlYWN0aXZhdGVSZXRyeSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2F2ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2F1dG9zYXZlJykudGhlbihhdXRvc2F2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IG1ldGggPSBhdXRvc2F2ZSA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIHRoaXMuc2F2ZUJ0bi5jbGFzc0xpc3RbbWV0aF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVNhdmUob24gPSB0cnVlKSB7XHJcbiAgICBpZiAob24pIHRoaXMuc2F2ZUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBlbHNlIHRoaXMuc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlU2F2ZSgpIHtcclxuICAgIHRoaXMuYWN0aXZhdGVTYXZlKGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICBpZiAoIXRoaXMucmV0cnlCdG5TaG93bikge1xyXG4gICAgICB0aGlzLnJldHJ5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLnJldHJ5QnRuU2hvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgaWYgKHRoaXMucmV0cnlCdG5TaG93bikge1xyXG4gICAgICB0aGlzLnJldHJ5QnRuLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLnJldHJ5QnRuU2hvd24gPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0KGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1pbW11dCcpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6aW1tdXQnLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICB1cGRhdGVJbW11dChlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IG1ldGggPSBlbnRyeS5pbW11dCA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0taW1tdXQnKS5jbGFzc0xpc3RbbWV0aF0oJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWJveCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1ib3gnKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUucmV0cnlBY3RpdmUpIHRoaXMuYWN0aXZhdGVSZXRyeSgpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWxpbmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmxpbmsnOiAnbGluaycsXHJcbiAgICAgICAgJy5saW5rX19pY29uJzogJ2xpbmsnLFxyXG4gICAgICAgICcubGlua19fdGV4dCc6ICdsaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbGluayhlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmsnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIHRoaXMuZW1pdCgnb3BlbjphZGRvbi1wYWdlKHNiKScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdhY3RpdmF0ZScsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyayc6ICdhY3RpdmF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLW1hcmsnOiAnbWFya0FjdGlvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYnV0dG9uczogW10sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5idXR0b25zID0gQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKSk7XHJcbiAgfSxcclxuICBtYXJrQWN0aW9uKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6JyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwgbnVsbCwgbnVsbCwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUobWFya0luZm9zKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICBsZXQgdHlwZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0eXBlID09PSAnY29weScgfHxcclxuICAgICAgICB0eXBlID09PSAnZGVsZXRlLWhpZ2hsaWdodCcgfHxcclxuICAgICAgICAodHlwZW9mIG1hcmtJbmZvc1t0eXBlXSA9PT0gJ2Jvb2xlYW4nICYmICFtYXJrSW5mb3NbdHlwZV0pIHx8XHJcbiAgICAgICAgKHR5cGUgPT09ICdkZWxldGUtYm9va21hcmsnICYmIG1hcmtJbmZvcy5ib29rbWFyaylcclxuICAgICAgKSB7XHJcbiAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWFya2VycycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdyZW5kZXInLFxyXG4gICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJzogJ3JlbmRlcicsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICd0b2dnbGVNYXJrZXJCdXR0b25zJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcubWFya2VyX19jb2xvcic6ICdjaGFuZ2UnLFxyXG4gICAgICAgICcubWFya2VyX19jYic6ICdzZWxlY3QnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5tYXJrZXJfX2FwcGx5JzogJ2FwcGx5Q29sb3InXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdXRvbWFya0VuYWJsZWQ6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmICghc3RvcmFnZS5zeW5jIHx8IHN0b3JhZ2Uuc3luYy5zZXR0aW5ncykpIHtcclxuICAgICAgICB0aGlzLmF1dG9tYXJrRW5hYmxlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWFya2VycztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLnN5bmMgJiYgIXN0b3JhZ2Uuc3luYy5zZXR0aW5ncykge1xyXG4gICAgICAgICAgdGhpcy5hdXRvbWFya0VuYWJsZWQgPSBzdG9yYWdlLnNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBpZiAoIW1hcmtlcnMpIHJldHVybiB0aGlzO1xyXG4gICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcnMtY29udGFpbmVyLS1sZWZ0Jyk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcnMtY29udGFpbmVyLS1yaWdodCcpO1xyXG4gICAgICBjb25zdCBmcmFnUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IGZyYWdMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBzID0gTWF0aC5jZWlsKE9iamVjdC5rZXlzKG1hcmtlcnMpLmxlbmd0aCAvIDIpO1xyXG4gICAgICBsZXQgY291bnQgPSAwLCBtLCBib3gsIGlucHV0LCBleGFtcGxlVGV4dCwgYnV0dG9uLCBjb2xvciwgY2JCb3gsIGNiLCBjYkxhYmVsLCBjYlNwYW47XHJcblxyXG4gICAgICBsZWZ0Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICByaWdodENvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICAgIGZvciAobSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjYkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjYkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjYlNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY29sb3IgPSB0aGlzLmV4dHJhY3RCZ0NvbG9yKG1hcmtlcnNbbV0uc3R5bGUpO1xyXG5cclxuICAgICAgICBib3guY2xhc3NOYW1lID0gJ21hcmtlciB1LWNmJztcclxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnbWFya2VyX19jb2xvcic7XHJcbiAgICAgICAgaW5wdXQuaWQgPSAnbWFya2VyLScgKyBtO1xyXG4gICAgICAgIGlucHV0Lm5hbWUgPSBtO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAnY29sb3InO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY29sb3I7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuY2xhc3NOYW1lID0gJ21hcmtlcl9fdGV4dCc7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG1hcmtlcnNbbV0uc3R5bGUpO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ21hcmtlci0nICsgbSk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2FwcGx5JztcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgbSk7XHJcbiAgICAgICAgY2JCb3guY2xhc3NOYW1lID0gJ21hcmtlcl9fY2ItYm94JztcclxuICAgICAgICBjYi5jbGFzc05hbWUgPSAnbWFya2VyX19jYic7XHJcbiAgICAgICAgY2Iuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIG0pO1xyXG4gICAgICAgIGNiLnR5cGUgPSAncmFkaW8nO1xyXG4gICAgICAgIGNiLmlkID0gJ21hcmtlcl9fY2ItLScgKyBtO1xyXG4gICAgICAgIGNiLm5hbWUgPSAnbWFya2VyLWNiJztcclxuICAgICAgICBjYkxhYmVsLmNsYXNzTmFtZSA9ICdmYWtlLXJiJztcclxuICAgICAgICBjYkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21hcmtlcl9fY2ItLScgKyBtKTtcclxuICAgICAgICBjYlNwYW4udGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjI5YSk7XHJcblxyXG4gICAgICAgIGNiTGFiZWwuYXBwZW5kQ2hpbGQoY2JTcGFuKTtcclxuICAgICAgICBjYkJveC5hcHBlbmRDaGlsZChjYik7XHJcbiAgICAgICAgY2JCb3guYXBwZW5kQ2hpbGQoY2JMYWJlbCk7XHJcblxyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjYkJveCk7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoZXhhbXBsZVRleHQpO1xyXG5cclxuICAgICAgICBpZiAoY291bnQgPiAzICYmIGNvdW50ID4gcykge1xyXG4gICAgICAgICAgZnJhZ0xlZnQuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZnJhZ1JpZ2h0LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtID0gbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG0gPSBtID09PSAnRU5URVInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDogbTtcclxuICAgICAgICBleGFtcGxlVGV4dC5pbm5lclRleHQgPSBtO1xyXG4gICAgICAgIGlmICghY29sb3IpIGlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnUmlnaHQpO1xyXG4gICAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdMZWZ0KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmF1dG9tYXJrRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYXV0bycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJfX2NiLS1tJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdhdXRvJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZXh0cmFjdEJnQ29sb3Ioc3R5bGVzKSB7XHJcbiAgICBsZXQgc3BsaXQgPSBzdHlsZXMuc3BsaXQoJzsnKSxcclxuICAgICAgICBsID0gc3BsaXQubGVuZ3RoLFxyXG4gICAgICAgIGNvbG9yID0gJycsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgc3R5bGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc3R5bGUgPSBzcGxpdFtpXTtcclxuICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICBjb2xvciA9IHN0eWxlLnNwbGl0KCc6JylbMV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxuICB9LFxyXG4gIGNoYW5nZShlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2U6Ymctc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICB9LFxyXG4gIHNlbGVjdChlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgYXBwbHlDb2xvcihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOmhpZ2hsaWdodCcsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTWFya2VyQnV0dG9ucyhzaG93KSB7XHJcbiAgICBpZiAodGhpcy5hdXRvbWFya0VuYWJsZWQpIHJldHVybjtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnc2V0QXR0cmlidXRlJztcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya2VyX19hcHBseScpKS5mb3JFYWNoKGJ0biA9PiBidG5bbWV0aF0oJ2Rpc2FibGVkJywgdHJ1ZSkpO1xyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIHRoaXMudG9nZ2xlTWFya2VyQnV0dG9ucyhzdGF0ZS5zZWxlY3Rpb24pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWFya3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnk6b3JkZXJlZC1tYXJrcyc6ICdzZXRNYXJrSURzJyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknIDogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLm1hcmtfX3RleHQnOiAnYWN0aXZhdGUnLFxyXG4gICAgICAgICcubWFya19fbm90ZS1idG4nOiAndG9nZ2xlTm90ZScsXHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1uYXYnOiAnbmF2J1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnI2ZvbGQtbWFya3MnOiAnZm9sZExpc3QnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtYXJrczogW10sXHJcbiAgbWFya0lEczogbnVsbCxcclxuICBsZW5ndGg6IDAsXHJcbiAgY3VycmVudDogLTEsXHJcbiAgc2V0RmlsdGVyczogZmFsc2UsXHJcbiAgdG9nZ2xlTWFwOiB7ICcxJzogW2ZhbHNlLCBmYWxzZV0sICcyJzogW3RydWUsIGZhbHNlXSwgJzMnOiBbZmFsc2UsIHRydWVdLCAnNCc6IFt0cnVlLCB0cnVlXSB9LFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnkgPSBfU1RPUkUuZW50cnk7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy5zZXRNYXJrcygpO1xyXG4gICAgICBpZiAoIXRoaXMuc2V0RmlsdGVycykgdGhpcy5yZW5kZXJTVkdGaWx0ZXJzKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyTGlzdCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2V0TWFya3MoKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnk7XHJcbiAgICBsZXQgbWFya3MgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBlbnRyeS5mb3JFYWNoKGUgPT4gbWFya3MgPSBtYXJrcy5jb25jYXQoZS5tYXJrcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtJRHMgPSB0aGlzLm1hcmtJRHM7XHJcbiAgICAvL3RoaXMubGVuZ3RoID0gbWFya3MubGVuZ3RoO1xyXG4gICAgLy90aGlzLm1hcmtzID0gbWFya0lEcyA/IG1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbWFya0lEcy5pbmRleE9mKG0xLmlkKSA8IG1hcmtJRHMuaW5kZXhPZihtMi5pZCkpIDogbWFya3M7XHJcbiAgICB0aGlzLm1hcmtzID0gbWFya0lEcyA/XHJcbiAgICAgIG1hcmtJRHMubWFwKGlkID0+IG1hcmtzLmZpbmQobWFyayA9PiBtYXJrLmlkID09IGlkKSkgOlxyXG4gICAgICBtYXJrcztcclxuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5tYXJrcy5sZW5ndGg7XHJcbiAgfSxcclxuICBzZXRNYXJrSURzKGlkcykge1xyXG4gICAgdGhpcy5tYXJrSURzID0gaWRzO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG4gIHJlbmRlclNWR0ZpbHRlcnMoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IHRtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBjb2xvcnMgPSB7fTtcclxuICAgIGxldCBpLCBjO1xyXG4gICAgZm9yIChpIGluIF9TRVRUSU5HUy5OT1RFX0NPTE9SUykge1xyXG4gICAgICAgYyA9IF9TRVRUSU5HUy5OT1RFX0NPTE9SU1tpXTtcclxuICAgICAgY29sb3JzW2kudG9Mb3dlckNhc2UoKV0gPSAnMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDEsMikpICsgJyAwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoMywyKSkgKyAnIDAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cig1LDIpKSArICcgMCAwIDAgMSAwJztcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXI7XHJcbiAgICBmb3IgKGkgaW4gY29sb3JzKSB7XHJcbiAgICAgIGZpbHRlciA9IHRtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBmaWx0ZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbHRlcicpWzBdLmlkID0gJ2ZpbHRlci0tJyArIGk7XHJcbiAgICAgIGZpbHRlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmVDb2xvck1hdHJpeCcpWzBdLnNldEF0dHJpYnV0ZSgndmFsdWVzJywgY29sb3JzW2ldKTtcclxuICAgICAgYm9keS5hcHBlbmRDaGlsZChmaWx0ZXIpXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZpbHRlcnMgPSB0cnVlO1xyXG4gIH0sXHJcbiAgY29udmVydEhleChoZXgpIHtcclxuICAgIHJldHVybiAoKDE2ICogTnVtYmVyKCcweCcgKyBoZXhbMF0pKSArIE51bWJlcignMHgnICsgaGV4WzFdKSkgLyAyNTU7XHJcbiAgfSxcclxuICByZW5kZXJMaXN0KCkge1xyXG4gICAgY29uc3QgbWFya1RtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICBjb25zdCBtYXJrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcycpO1xyXG4gICAgbGV0IG1hcmtDb250YWluZXI7XHJcblxyXG4gICAgbWFya3NDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgdGhpcy5tYXJrcy5mb3JFYWNoKChtYXJrLCBpKSA9PiB7XHJcbiAgICAgIGlmIChtYXJrKSB7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lciA9IG1hcmtUbXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBtYXJrQ29udGFpbmVyLmlkID0gJyc7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICBtYXJrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fdGV4dCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWFyay50ZXh0KTtcclxuICAgICAgICBsZXQgY29sb3IgPSBtYXJrLnN0eWxlLmluZGV4T2YoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICBsZXQgaGFzTm90ZSA9IG1hcmsubm90ZSAmJiAodHlwZW9mIG1hcmsubm90ZSA9PT0gJ3N0cmluZycgfHwgbWFyay5ub3RlLnRleHQpO1xyXG4gICAgICAgIGNvbG9yID0gY29sb3IgPT09IC0xID8gJ3RyYW5zcGFyZW50JyA6IG1hcmsuc3R5bGUuc3Vic3RyKGNvbG9yICsgMTcsIDcpO1xyXG4gICAgICAgIGxldCBub3RlLCBub3RlQ29sb3IsIG5vdGVUZXh0LCBub3RlQnRuLCBub3RlTm9kZTtcclxuXHJcbiAgICAgICAgdGV4dE5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0ZXh0Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChoYXNOb3RlKSB7XHJcbiAgICAgICAgICBub3RlID0gbWFyay5ub3RlO1xyXG4gICAgICAgICAgbm90ZUNvbG9yID0gbm90ZS5jb2xvciB8fCAneWVsbG93JztcclxuICAgICAgICAgIG5vdGVUZXh0ID0gbm90ZS50ZXh0IHx8IG5vdGU7XHJcbiAgICAgICAgICBtYXJrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21hcmstLW5vdGUnKTtcclxuICAgICAgICAgIG5vdGVCdG4gPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUtYnRuJylbMF07XHJcbiAgICAgICAgICBub3RlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgbm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtYXJrX19ub3RlLWJ0bi0tJyArIG5vdGVDb2xvcik7XHJcbiAgICAgICAgICBub3RlTm9kZSA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZScpWzBdO1xyXG4gICAgICAgICAgbm90ZU5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm90ZVRleHQpKTtcclxuICAgICAgICAgIG5vdGVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgbm90ZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWFya19fbm90ZS0tJyArIG5vdGVDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1hcmtDb250YWluZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG1hcmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICB9LFxyXG4gIG5hdihlLCBlbCkge1xyXG4gICAgY29uc3QgZGlyID0gMSAqIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5jdXJyZW50ICs9IGRpcjtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5sZW5ndGgpIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnQgPCAwKSB0aGlzLmN1cnJlbnQgPSB0aGlzLmxlbmd0aCAtIDE7XHJcbiAgICB0aGlzLmFjdGl2YXRlTGlzdEl0ZW0oKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlTGlzdEl0ZW0oaWQpIHtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB0aGlzLmN1cnJlbnQgPSBpZDtcclxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrLS1hY3RpdmUnKVswXTtcclxuICAgIGlmIChjdXJyZW50SXRlbSkgY3VycmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWFyay0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1pZD1cIicgKyBbdGhpcy5jdXJyZW50XSArICdcIl0nKS5jbGFzc0xpc3QuYWRkKCdtYXJrLS1hY3RpdmUnKTtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpuZXh0LW1hcmsnLCB0aGlzLmN1cnJlbnQsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGUsIGVsKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1tYXJrcycpLnZhbHVlID0gMDtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3VuZm9sZGVkJyk7XHJcbiAgICB0aGlzLmFjdGl2YXRlTGlzdEl0ZW0oMSplbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gIH0sXHJcbiAgZm9sZExpc3QoZSwgZWwpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgaWYgKHZhbCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyk7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZVNldHRpbmdzID0gdGhpcy50b2dnbGVNYXBbdmFsXTtcclxuXHJcbiAgICAgIHRoaXMudG9nZ2xlKCd0ZXh0JywgdG9nZ2xlU2V0dGluZ3NbMF0pO1xyXG4gICAgICB0aGlzLnRvZ2dsZSgnbm90ZScsIHRvZ2dsZVNldHRpbmdzWzFdKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZU5vdGUoZSwgZWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLW1hcmtzJykudmFsdWUgPSAwO1xyXG4gICAgZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlJylbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndW5mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZSh0eXBlLCBzaG93KSB7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fJyArIHR5cGUpKVxyXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3RbbWV0aF0oJ3VuZm9sZGVkJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1ldGEnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGNvbnN0IHllcyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5ZXMnKTtcclxuICAgICAgY29uc3Qgbm8gPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm8nKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19udW1iZXItbWFya3MnKS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19jcmVhdGVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fbGFzdC1tb2RpZmllZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG5cclxuICAgICAgWydzeW5jZWQnLCAnaW1tdXQnXVxyXG4gICAgICAgIC5mb3JFYWNoKGZpZWxkID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX18nICsgZmllbGQpLmlubmVyVGV4dCA9IGVudHJ5W2ZpZWxkXSA/IHllcyA6IG5vKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgcmV0dXJuIChkYXRlXHJcbiAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ2FjdGl2YXRlQm9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdkZWFjdGl2YXRlQm9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZSc6ICdhY3RpdmF0ZU5vdGVzJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ2RlYWN0aXZhdGVOb3RlcycsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJzogJ29uTm90ZXNTdGF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLXBhZ2UnOiAncGFnZUFjdGlvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzY3JvbGwnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVCb29rbWFyaygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3Njcm9sbCcsIGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdub3RlcycsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZU5vdGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnbm90ZXMnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZSh0eXBlLCBvbikge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS0nICsgdHlwZSk7XHJcbiAgICBpZiAob24pIHtcclxuICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUFjdGlvbihlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUuYm9va21hcmspIHRoaXMuYWN0aXZhdGVCb29rbWFyaygpO1xyXG4gIH0sXHJcbiAgb25Ob3Rlc1N0YXRlKG5vdGVzKSB7XHJcbiAgICBpZiAobm90ZXMpIHRoaXMuYWN0aXZhdGVOb3RlcygpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbm90ZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWRkLW5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICd0bW5vdGVkZWxldGUnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZW1pbmltaXplJzogJ3RvZ2dsZU5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVzYXZlJzogJ3NhdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcjZm9sZC1wYWdlLW5vdGVzJzogJ3RvZ2dsZU5vdGVzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBub3RlczogW10sXHJcbiAgbm90ZUVsczoge30sXHJcbiAgaWQ6IDAsXHJcbiAgY3VycmVudENvbG9yOiAneWVsbG93JyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsID0gdGFiLnVybDtcclxuICAgICAgX1NUT1JFLmdldCgncGFnZW5vdGVzJykudGhlbihwYWdlbm90ZXMgPT4ge1xyXG4gICAgICAgIHBhZ2Vub3RlcyA9IHBhZ2Vub3RlcyAmJiBwYWdlbm90ZXNbdXJsXSA/IHBhZ2Vub3Rlc1t1cmxdIDogbnVsbDtcclxuICAgICAgICBsZXQgbCwgaWQ7XHJcbiAgICAgICAgaWYgKHBhZ2Vub3RlcyAmJiAobCA9IHBhZ2Vub3Rlcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICB0aGlzLm5vdGVzID0gcGFnZW5vdGVzO1xyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IHRoaXMuYWRkTm90ZShwYWdlbm90ZXNbbF0pO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gTWF0aC5tYXgodGhpcy5pZCwgaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdCghIXRoaXMubm90ZXMubGVuZ3RoKTtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlTm90ZXMobnVsbCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2F2ZShlLCBlbCkge1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmdldEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICBub3RlLnRleHQgPSBlbC5wcmV2aW91c1NpYmxpbmcudmFsdWU7XHJcbiAgICAgIG5vdGUubmFtZSA9IGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG1ub3RlX19oZWFkZXInKVswXS52YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlLW5vdGUnLCB0aGlzLnVybCwgdGhpcy5ub3Rlcyk7XHJcbiAgfSxcclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gW107XHJcbiAgICB0aGlzLm5vdGVFbHMgPSB7fTtcclxuICAgIHRoaXMuaWQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZXMnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH0sXHJcblxyXG4gIGFkZE5vdGUobm90ZSkge1xyXG4gICAgbm90ZSA9IG5vdGUudHlwZSA/IG51bGwgOiBub3RlO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZXMnKTtcclxuICAgIGNvbnN0IG5vdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGUtdGVtcGxhdGUnKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IG5vdGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgIGNvbnN0IGhlYWRlciA9IG5vdGVFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bW5vdGVfX2hlYWRlcicpWzBdO1xyXG4gICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG5cclxuICAgIGxldCBpZDtcclxuICAgIGlmIChub3RlKSB7XHJcbiAgICAgIGlkID0gbm90ZUVsLmlkID0gbm90ZS5pZDtcclxuICAgICAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSBub3RlLnRleHQgfHwgJyc7XHJcbiAgICAgIGhlYWRlci52YWx1ZSA9IG5vdGUubmFtZSB8fCAnJztcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIG5vdGUuY29sb3IpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlkID0gbm90ZUVsLmlkID0gKyt0aGlzLmlkO1xyXG4gICAgICB0aGlzLm5vdGVzLnB1c2goeyBpZCwgdGV4dDogJycsIGNvbG9yOiB0aGlzLmN1cnJlbnRDb2xvciB9KTtcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyB0aGlzLmN1cnJlbnRDb2xvcik7XHJcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobm90ZUVsLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgQXJyYXkuZnJvbShub3RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSlcclxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpKTtcclxuXHJcbiAgICB0aGlzLm5vdGVFbHNbaWRdID0gbm90ZUVsO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU2VsZWN0KHRydWUpO1xyXG5cclxuICAgIHJldHVybiBpZDtcclxuICB9LFxyXG4gIGNoYW5nZUNvbG9yKGUsIGVsKSB7XHJcbiAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmN1cnJlbnRDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgdGhpcy5ub3RlRWxzW2lkXS5jbGFzc05hbWUgPSB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTmFtZS5yZXBsYWNlKC8tLVxcdysvLCAnLS0nICsgY29sb3IpO1xyXG4gICAgdGhpcy5nZXRCeUlkKGlkKS5jb2xvciA9IGNvbG9yO1xyXG4gICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgIG5vdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub3RlKTtcclxuICAgIGRlbGV0ZSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgdGhpcy5ub3Rlcy5zcGxpY2UodGhpcy5ub3Rlcy5pbmRleE9mKHRoaXMuZ2V0QnlJZChpZCkpLCAxKTtcclxuICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVTZWxlY3Qoc2hvdykge1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpLmNsYXNzTGlzdFttZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgfSxcclxuICB0b2dnbGVQYWxldHRlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcclxuICAgIGNvbnN0IHBhbGV0dGUgPSBub3RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGVwYWxldHRlJylbMF07XHJcbiAgICBwYWxldHRlLmNsYXNzTGlzdC50b2dnbGUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgaWYgKCFwYWxldHRlLmNsYXNzTGlzdC5jb250YWlucygndS1kaXNwbGF5LS1ub25lJykpIHtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZShlLCBlbCkge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcbiAgICBub3RlLmNsYXNzTGlzdC50b2dnbGUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICBpZiAoIW5vdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0bW5vdGUtLW1pbicpKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykudmFsdWUgPSAwO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoZSwgZWwpIHtcclxuICAgIGlmIChlbC52YWx1ZSA9PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubm90ZUVscykge1xyXG4gICAgICAgIHRoaXMubm90ZUVsc1tpZF0uY2xhc3NMaXN0LmFkZCgndG1ub3RlLS1taW4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG5vdGUsIHRleHRhcmVhO1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm5vdGVFbHMpIHtcclxuICAgICAgICBub3RlID0gdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgICAgICBub3RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgICAgdGhpcy5hZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm90ZXMuZmluZChub3RlID0+IG5vdGUuaWQgPT0gaWQpO1xyXG4gIH0sXHJcbiAgYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSkge1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBub3RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgMTAgKyAncHgnO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3Nob3dFbnRyeVNwZWNpZmljVGFicydcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhYl9fdGl0bGUnOiAndG9nZ2xlJyxcclxuICAgICAgICAnLnRhYl9fbmFtZSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICcudGFiX190b2dnbGUnOiAndG9nZ2xlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdGFiczoge30sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKCFzZXR0aW5ncy5zYikgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0YWJTZXR0aW5ncyA9IHNldHRpbmdzLnNiLnRhYnM7XHJcbiAgICAgIGZvciAobGV0IHRhYiBpbiB0YWJTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMudGFic1t0YWJdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tJyArIHRhYik7XHJcbiAgICAgICAgaWYgKHRhYlNldHRpbmdzW3RhYl0udW5mb2xkZWQpIHRoaXMub3Blbih0YWIpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5jbG9zZSh0YWIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvcGVuKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LnJlbW92ZSgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIGNsb3NlKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LmFkZCgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZShlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5ub2RlTmFtZSA9PT0gJ0gyJyA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgY29uc3QgdGFiID0gaWQuc3BsaXQoJy0tJykucG9wKCk7XHJcbiAgICBjb25zdCB0YWJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIHRhYkVsLmNsYXNzTGlzdC50b2dnbGUoJ3RhYi0tZm9sZGVkJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c2lkZWJhci10YWInLCB0YWIsICF0YWJFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi0tZm9sZGVkJykpO1xyXG4gIH0sXHJcbiAgc2hvd0VudHJ5U3BlY2lmaWNUYWJzKCkge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWItLWVudHJ5JykpXHJcbiAgICAgIC5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLXRhZ3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhZ3NfX3JlbW92ZSc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAgICcjYWRkLXRhZyc6ICdhZGRUYWcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgdGFncyA9IGVudHJ5LnRhZyA/IGVudHJ5LnRhZy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJykuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXJUYWcodGFnKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFncycpO1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSAndGFnc19faXRlbSB1LW92ZXJmbG93LS1lbGxpcHNpcyc7XHJcbiAgICBkZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX3JlbW92ZSc7XHJcbiAgICBkZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhZycsIHRhZyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSB0YWc7XHJcbiAgICBkZWwuYXBwZW5kQ2hpbGQoeCk7XHJcbiAgICBlbC5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICB9LFxyXG4gIGFkZFRhZygpIHtcclxuICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFnJyk7XHJcbiAgICBsZXQgdGFnID0gaW5wLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghdGFnKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2FkZDp0YWcnLCB0YWcsIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBpbnAudmFsdWUgPSAnJztcclxuICAgIHRhZy5zcGxpdCgnICcpLmZvckVhY2godGFnID0+IHRoaXMucmVuZGVyVGFnKHRhZykpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZTp0YWcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJyksIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGhlbWVzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy50aGVtZS1vcHQnOiAnb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0aGVtZTogJ2RlZmF1bHQnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IHRoZW1lID0gc2V0dGluZ3MgJiYgc2V0dGluZ3Muc2IgJiYgc2V0dGluZ3Muc2IudGhlbWUgPyBzZXR0aW5ncy5zYi50aGVtZSA6ICdkZWZhdWx0JztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRoZW1lLS0ke3RoZW1lfWApLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvbkNoYW5nZShlLCBlbCkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJywgdGhlbWUpO1xyXG4gICAgdGhpcy51cGRhdGUodGhlbWUpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHRoZW1lKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gJ3RleHRtYXJrZXItc2lkZWJhci0tZGFyayc7XHJcbiAgICBpZiAodGhlbWUgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnc2lkZWJhcicsXHJcbiAgdHlwZTogJ3ByaXZpbGVnZWQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnY2hhbmdlOmJnLXNldHRpbmcnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAncmVtb3ZlOnRhZycsXHJcbiAgICAgICdhZGQ6dGFnJyxcclxuICAgICAgJ29wZW46YWRkb24tcGFnZShzYiknLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnLFxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnXHJcbiAgICBdXHJcbiAgfVxyXG59KVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==