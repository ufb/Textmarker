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

exports["default"] = new _utils._STORE({
  events: {
    ENV: {
      'toggled:sync': 'onToggledSync',
      'saved:entry': 'updateEntry',
      'entry:found': 'updateEntryOnFound',
      'entry:found-for-tab': 'updateEntry',
      'entry:deleted-for-tab': 'resume'
    }
  },
  env: 'sidebar',
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
      'set-areas-after-sync-change': 'toggleSave',
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
      'set-areas-after-sync-change': 'render',
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
      if (!settings || !settings.sb) return;
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
            browser.tabs.sendMessage(lastArg.tab, msg, {
              frameId: lastArg.frameId || 0
            })["catch"](function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImVudiIsImVudHJ5IiwibG9ja2VkIiwidXBkYXRlRW50cnkiLCJpc0FyciIsIkFycmF5IiwiaXNBcnJheSIsImN1cnJlbnRFbnRyeSIsInB1c2giLCJlbWl0IiwidXBkYXRlRW50cnlPbkZvdW5kIiwicmVzdW1lIiwiX2dldF9tb2RlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X2F1dG9zYXZlIiwiaGlzdG9yeSIsImF1dG9zYXZlIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsImF1dG9pbml0IiwidGFiIiwicG93ZXIiLCJvbiIsInBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvblN0YXJ0IiwibW9kZSIsInRvZ2dsZSIsInNpZGViYXIiLCJlbCIsInJlbmRlciIsImhlYWRlciIsInVwZGF0ZU5hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsInRpdGxlIiwiRE9NIiwiY2xpY2siLCJyZXRyeUJ0blNob3duIiwic2F2ZUJ0biIsInJldHJ5QnRuIiwidG9nZ2xlU2F2ZSIsInNhdmUiLCJyZXRyeVJlc3RvcmF0aW9uIiwiZGVhY3RpdmF0ZVJldHJ5IiwibWV0aCIsImFjdGl2YXRlU2F2ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVSZXRyeSIsInRvZ2dsZUltbXV0IiwiZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInVwZGF0ZUltbXV0IiwiaW1tdXQiLCJvblBhZ2VTdGF0ZSIsInN0YXRlIiwicmV0cnlBY3RpdmUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9ucyIsImZyb20iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1hcmtBY3Rpb24iLCJoYXNBdHRyaWJ1dGUiLCJhY3RpdmF0ZSIsIm1hcmtJbmZvcyIsImZvckVhY2giLCJidG4iLCJ0eXBlIiwiYm9va21hcmsiLCJkZWFjdGl2YXRlIiwiY2hhbmdlIiwiYXV0b21hcmtFbmFibGVkIiwic3luYyIsIm1pc2MiLCJtYXJrbWV0aG9kIiwibG9jYWwiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJmcmFnUmlnaHQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ0xlZnQiLCJzIiwiTWF0aCIsImNlaWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY291bnQiLCJtIiwiYm94IiwiaW5wdXQiLCJleGFtcGxlVGV4dCIsImJ1dHRvbiIsImNvbG9yIiwiY2JCb3giLCJjYiIsImNiTGFiZWwiLCJjYlNwYW4iLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZENoaWxkIiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic3R5bGVzIiwic3BsaXQiLCJsIiwiaSIsImluY2x1ZGVzIiwic2VsZWN0IiwiYXBwbHlDb2xvciIsInRvZ2dsZU1hcmtlckJ1dHRvbnMiLCJzaG93Iiwic2VsZWN0aW9uIiwibWFya3MiLCJtYXJrSURzIiwiY3VycmVudCIsInNldEZpbHRlcnMiLCJ0b2dnbGVNYXAiLCJzZXRNYXJrcyIsInJlbmRlclNWR0ZpbHRlcnMiLCJyZW5kZXJMaXN0IiwiY29uY2F0IiwibWFwIiwiZmluZCIsIm1hcmsiLCJzZXRNYXJrSURzIiwiaWRzIiwiYm9keSIsInRtcGwiLCJjb2xvcnMiLCJjIiwiX1NFVFRJTkdTIiwiTk9URV9DT0xPUlMiLCJ0b0xvd2VyQ2FzZSIsImNvbnZlcnRIZXgiLCJzdWJzdHIiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJoZXgiLCJOdW1iZXIiLCJtYXJrVG1wbCIsImZyYWdtZW50IiwibWFya3NDb250YWluZXIiLCJtYXJrQ29udGFpbmVyIiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHQiLCJpbmRleE9mIiwiaGFzTm90ZSIsIm5vdGUiLCJub3RlQ29sb3IiLCJub3RlVGV4dCIsIm5vdGVCdG4iLCJub3RlTm9kZSIsImJvcmRlckNvbG9yIiwibmF2IiwiZGlyIiwiYWN0aXZhdGVMaXN0SXRlbSIsImN1cnJlbnRJdGVtIiwicXVlcnlTZWxlY3RvciIsImZvbGRMaXN0IiwidmFsIiwidG9nZ2xlU2V0dGluZ3MiLCJ0b2dnbGVOb3RlIiwieWVzIiwiaTE4biIsImdldE1lc3NhZ2UiLCJubyIsIm9wdGltaXplRGF0ZVN0cmluZyIsIkRhdGUiLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwibGFzdCIsImZpZWxkIiwiZGF0ZSIsInJlcGxhY2UiLCJwIiwicSIsImFjdGl2YXRlQm9va21hcmsiLCJkZWFjdGl2YXRlQm9va21hcmsiLCJhY3RpdmF0ZU5vdGVzIiwiZGVhY3RpdmF0ZU5vdGVzIiwicGFnZUFjdGlvbiIsIm9uTm90ZXNTdGF0ZSIsIm5vdGVzIiwibm90ZUVscyIsImN1cnJlbnRDb2xvciIsInVybCIsImFkZE5vdGUiLCJtYXgiLCJ0b2dnbGVTZWxlY3QiLCJ0b2dnbGVOb3RlcyIsImdldEJ5SWQiLCJwcmV2aW91c1NpYmxpbmciLCJjb250YWluZXIiLCJub3RlRWwiLCJ0ZXh0YXJlYSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJjaGFuZ2VDb2xvciIsInJlbW92ZU5vdGUiLCJyZW1vdmVDaGlsZCIsInNwbGljZSIsInRvZ2dsZVBhbGV0dGUiLCJwYWxldHRlIiwiYWRqdXN0VGV4dGFyZWFIZWlnaHQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwic2IiLCJ0YWJTZXR0aW5ncyIsInVuZm9sZGVkIiwib3BlbiIsImNsb3NlIiwibm9kZU5hbWUiLCJwb3AiLCJ0YWJFbCIsInNob3dFbnRyeVNwZWNpZmljVGFicyIsInRhZ3MiLCJ0YWciLCJyZW5kZXJUYWciLCJkZWwiLCJ4IiwiYWRkVGFnIiwiaW5wIiwidHJpbSIsInJlbW92ZVRhZyIsInRoZW1lIiwidXBkYXRlIiwib25DaGFuZ2UiLCJDT05ORUNUSU9OIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInNob3J0Y3V0cyIsInoiLCJ5IiwiYiIsImQiLCJ3IiwibiIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwibmFtaW5nIiwiZG93bmxvYWQiLCJjb3B5Iiwic2F2ZU5vdGUiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJpZ25vcmVIYXNoIiwiYXV0b2NzIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJjdXN0b21TZWFyY2giLCJ0bXVpcG9zIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsIm1ldGEiLCJhY3Rpb25zIiwibGlua3MiLCJ0aGVtZXMiLCJlbnRyaWVzIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJNQVhfTE9HX0VOVFJJRVMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInRhcmdldCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJhdXRvUGF1c2UiLCJzZXRBdXRvUGF1c2UiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsInJlbW92ZUxpc3RlbmVycyIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXh0cmEiLCJzZXQiLCJ3aW5kb3ciLCJlcnJvciIsImZpbGUiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJPTkVPRkYiLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1zZyIsImxhc3RBcmciLCJ1bmRlZmluZWQiLCJmcmFtZUlkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYXJlYSIsImluaXQiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImxvZ3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFB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QXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU8zWixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JpRixLQUFoQixDQUFzQi9FLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBa1osWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNqSyxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT3JQLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjhFLElBQWhCLENBQXFCNUUsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFtWixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQ2xLLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT2lLLFlBQVksQ0FBQ2pLLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCM1EsZSIsImZpbGUiOiJjb250ZW50L3NpZGViYXIvc2lkZWJhci53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdvblRvZ2dsZWRTeW5jJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJzogJ3VwZGF0ZUVudHJ5T25Gb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYic6ICdyZXN1bWUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZW52OiAnc2lkZWJhcicsXHJcbiAgZW50cnk6IG51bGwsXHJcbiAgbG9ja2VkOiBmYWxzZSxcclxuXHJcbiAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICBjb25zdCBpc0FyciA9IEFycmF5LmlzQXJyYXkoZW50cnkpO1xyXG4gICAgICBjb25zdCBjdXJyZW50RW50cnkgPSAhIXRoaXMuZW50cnk7XHJcblxyXG4gICAgICB0aGlzLmxvY2tlZCA9IHRoaXMubG9ja2VkIHx8IGlzQXJyIHx8IGVudHJ5LmxvY2tlZDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5sb2NrZWQgfHwgaXNBcnIpIHtcclxuICAgICAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5sb2NrZWQgJiYgIWlzQXJyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cnkgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmVudHJ5KSkgdGhpcy5lbnRyeS5wdXNoKGVudHJ5KTtcclxuICAgICAgICBlbHNlIHRoaXMuZW50cnkgPSBbZW50cnldO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudEVudHJ5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JywgdGhpcy5lbnRyeSk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCdzdG9yZWQ6ZW50cnknLCB0aGlzLmVudHJ5KTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25Gb3VuZChlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRW50cnkoZW50cnkpO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbml0aWFsbHktc3RvcmVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5lbnRyeSA9IG51bGw7XHJcbiAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmVudHJ5Jyk7XHJcbiAgfSxcclxuXHJcblxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9wYWdlbm90ZXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2UucGFnZW5vdGVzIHx8IG51bGwpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1BPUlQgZnJvbSAnLi9wb3J0J1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5cclxuaW1wb3J0ICcuL21vZHVsZXMvdGhlbWVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oZWFkZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL21ldGEtaW5mb3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RhZ3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3BhZ2Utbm90ZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlcnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2hpc3RvcnktYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFyay1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlLWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9saW5rcydcclxuXHJcbl9MMTBOKCk7XHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ29uU3RhcnQnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdwb3dlcicsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3RvZ2dsZScsXHJcbiAgICAgICdpbml0aWFsbHktc3RvcmVkOmVudHJ5JzogJ3RvZ2dsZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuZW1pdCgnb3BlbmVkOnNpZGViYXInLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuXHJcbiAgcG93ZXIob24pIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhci0tcGF1c2VkJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG5cclxuICAgIGlmIChvbikge1xyXG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TdGFydCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5wb3dlcihtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGUoZW50cnkpIHtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcbiAgICBpZiAoZW50cnkgJiYgX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItc2lkZWJhci0tbG9ja2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItc2lkZWJhci0tbG9ja2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5lbDtcclxuXHJcbiAgICBpZiAoIWVudHJ5KSBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkgcmV0dXJuO1xyXG5cclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIHRoaXMudXBkYXRlTmFtZShlbnRyeS5uYW1lKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVOYW1lKG5hbWUpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX25hbWUnKVswXTtcclxuICAgIGVsLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICBlbC50aXRsZSA9IG5hbWU7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW9uLXNhdmUnOiAnZGVhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAnZGVhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJzogJ2FjdGl2YXRlU2F2ZScsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICd1cGRhdGVJbW11dCcsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJyxcclxuICAgICAgJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknOiAndXBkYXRlSW1tdXQnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJyNwYWdlLWFjdGlvbi0tcmV0cnknOiAncmV0cnlSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJyNwYWdlLWFjdGlvbi0tc2F2ZSc6ICdzYXZlJyxcclxuICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVJbW11dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJldHJ5QnRuU2hvd246IGZhbHNlLFxyXG4gIHNhdmVCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tc2F2ZScpLFxyXG4gIHJldHJ5QnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLXJldHJ5JyksXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy50b2dnbGVTYXZlKCk7XHJcbiAgfSxcclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICByZXRyeVJlc3RvcmF0aW9uKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gICAgdGhpcy5kZWFjdGl2YXRlUmV0cnkoKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBjb25zdCBtZXRoID0gYXV0b3NhdmUgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICB0aGlzLnNhdmVCdG4uY2xhc3NMaXN0W21ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVTYXZlKG9uID0gdHJ1ZSkge1xyXG4gICAgaWYgKG9uKSB0aGlzLnNhdmVCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgZWxzZSB0aGlzLnNhdmVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVNhdmUoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlU2F2ZShmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgaWYgKCF0aGlzLnJldHJ5QnRuU2hvd24pIHtcclxuICAgICAgdGhpcy5yZXRyeUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5yZXRyeUJ0blNob3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRlYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIGlmICh0aGlzLnJldHJ5QnRuU2hvd24pIHtcclxuICAgICAgdGhpcy5yZXRyeUJ0bi5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5yZXRyeUJ0blNob3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVJbW11dChlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0taW1tdXQnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOmltbXV0JywgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgdXBkYXRlSW1tdXQoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICBjb25zdCBtZXRoID0gZW50cnkuaW1tdXQgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLWltbXV0JykuY2xhc3NMaXN0W21ldGhdKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1ib3gnKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtYm94JykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLnJldHJ5QWN0aXZlKSB0aGlzLmFjdGl2YXRlUmV0cnkoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1saW5rcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5saW5rJzogJ2xpbmsnLFxyXG4gICAgICAgICcubGlua19faWNvbic6ICdsaW5rJyxcclxuICAgICAgICAnLmxpbmtfX3RleHQnOiAnbGluaydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxpbmsoZSwgZWwpIHtcclxuICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5rJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW46YWRkb24tcGFnZShzYiknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnYWN0aXZhdGUnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnOiAnYWN0aXZhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1tYXJrJzogJ21hcmtBY3Rpb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGJ1dHRvbnM6IFtdLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJykpO1xyXG4gIH0sXHJcbiAgbWFya0FjdGlvbihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIG51bGwsIG51bGwsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKG1hcmtJbmZvcykge1xyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgbGV0IHR5cGUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdHlwZSA9PT0gJ2NvcHknIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gJ2RlbGV0ZS1oaWdobGlnaHQnIHx8XHJcbiAgICAgICAgKHR5cGVvZiBtYXJrSW5mb3NbdHlwZV0gPT09ICdib29sZWFuJyAmJiAhbWFya0luZm9zW3R5cGVdKSB8fFxyXG4gICAgICAgICh0eXBlID09PSAnZGVsZXRlLWJvb2ttYXJrJyAmJiBtYXJrSW5mb3MuYm9va21hcmspXHJcbiAgICAgICkge1xyXG4gICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1hcmtlcnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAncmVuZGVyJyxcclxuICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICdyZW5kZXInLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAndG9nZ2xlTWFya2VyQnV0dG9ucycsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLm1hcmtlcl9fY29sb3InOiAnY2hhbmdlJyxcclxuICAgICAgICAnLm1hcmtlcl9fY2InOiAnc2VsZWN0J1xyXG4gICAgICB9LFxyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya2VyX19hcHBseSc6ICdhcHBseUNvbG9yJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXV0b21hcmtFbmFibGVkOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiAoIXN0b3JhZ2Uuc3luYyB8fCBzdG9yYWdlLnN5bmMuc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvbWFya0VuYWJsZWQgPSBzdG9yYWdlLnNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5zeW5jICYmICFzdG9yYWdlLnN5bmMuc2V0dGluZ3MpIHtcclxuICAgICAgICAgIHRoaXMuYXV0b21hcmtFbmFibGVkID0gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgaWYgKCFtYXJrZXJzKSByZXR1cm4gdGhpcztcclxuICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJzLWNvbnRhaW5lci0tbGVmdCcpO1xyXG4gICAgICBjb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJzLWNvbnRhaW5lci0tcmlnaHQnKTtcclxuICAgICAgY29uc3QgZnJhZ1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBmcmFnTGVmdCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgcyA9IE1hdGguY2VpbChPYmplY3Qua2V5cyhtYXJrZXJzKS5sZW5ndGggLyAyKTtcclxuICAgICAgbGV0IGNvdW50ID0gMCwgbSwgYm94LCBpbnB1dCwgZXhhbXBsZVRleHQsIGJ1dHRvbiwgY29sb3IsIGNiQm94LCBjYiwgY2JMYWJlbCwgY2JTcGFuO1xyXG5cclxuICAgICAgbGVmdENvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuICAgICAgcmlnaHRDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBmb3IgKG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgIGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBleGFtcGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2JCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY2JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbG9yID0gdGhpcy5leHRyYWN0QmdDb2xvcihtYXJrZXJzW21dLnN0eWxlKTtcclxuXHJcbiAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdtYXJrZXIgdS1jZic7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ21hcmtlcl9fY29sb3InO1xyXG4gICAgICAgIGlucHV0LmlkID0gJ21hcmtlci0nICsgbTtcclxuICAgICAgICBpbnB1dC5uYW1lID0gbTtcclxuICAgICAgICBpbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbG9yO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LmNsYXNzTmFtZSA9ICdtYXJrZXJfX3RleHQnO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBtYXJrZXJzW21dLnN0eWxlKTtcclxuICAgICAgICBleGFtcGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXItJyArIG0pO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnbWFya2VyX19hcHBseSc7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIG0pO1xyXG4gICAgICAgIGNiQm94LmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NiLWJveCc7XHJcbiAgICAgICAgY2IuY2xhc3NOYW1lID0gJ21hcmtlcl9fY2InO1xyXG4gICAgICAgIGNiLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBtKTtcclxuICAgICAgICBjYi50eXBlID0gJ3JhZGlvJztcclxuICAgICAgICBjYi5pZCA9ICdtYXJrZXJfX2NiLS0nICsgbTtcclxuICAgICAgICBjYi5uYW1lID0gJ21hcmtlci1jYic7XHJcbiAgICAgICAgY2JMYWJlbC5jbGFzc05hbWUgPSAnZmFrZS1yYic7XHJcbiAgICAgICAgY2JMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXJfX2NiLS0nICsgbSk7XHJcbiAgICAgICAgY2JTcGFuLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIyOWEpO1xyXG5cclxuICAgICAgICBjYkxhYmVsLmFwcGVuZENoaWxkKGNiU3Bhbik7XHJcbiAgICAgICAgY2JCb3guYXBwZW5kQ2hpbGQoY2IpO1xyXG4gICAgICAgIGNiQm94LmFwcGVuZENoaWxkKGNiTGFiZWwpO1xyXG5cclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY2JCb3gpO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGV4YW1wbGVUZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ID4gMyAmJiBjb3VudCA+IHMpIHtcclxuICAgICAgICAgIGZyYWdMZWZ0LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZyYWdSaWdodC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbSA9IG0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBtID0gbSA9PT0gJ0VOVEVSJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IG07XHJcbiAgICAgICAgZXhhbXBsZVRleHQuaW5uZXJUZXh0ID0gbTtcclxuICAgICAgICBpZiAoIWNvbG9yKSBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ1JpZ2h0KTtcclxuICAgICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnTGVmdCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hdXRvbWFya0VuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2F1dG8nKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2VyX19jYi0tbScpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYXV0bycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGV4dHJhY3RCZ0NvbG9yKHN0eWxlcykge1xyXG4gICAgbGV0IHNwbGl0ID0gc3R5bGVzLnNwbGl0KCc7JyksXHJcbiAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcclxuICAgICAgICBjb2xvciA9ICcnLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHN0eWxlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHN0eWxlID0gc3BsaXRbaV07XHJcbiAgICAgIGlmIChzdHlsZS5pbmNsdWRlcygnYmFja2dyb3VuZC1jb2xvcicpKSB7XHJcbiAgICAgICAgY29sb3IgPSBzdHlsZS5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbiAgfSxcclxuICBjaGFuZ2UoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlOmJnLXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgfSxcclxuICBzZWxlY3QoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIGFwcGx5Q29sb3IoZSwgZWwpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpoaWdobGlnaHQnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHRvZ2dsZU1hcmtlckJ1dHRvbnMoc2hvdykge1xyXG4gICAgaWYgKHRoaXMuYXV0b21hcmtFbmFibGVkKSByZXR1cm47XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ3NldEF0dHJpYnV0ZSc7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtlcl9fYXBwbHknKSkuZm9yRWFjaChidG4gPT4gYnRuW21ldGhdKCdkaXNhYmxlZCcsIHRydWUpKTtcclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICB0aGlzLnRvZ2dsZU1hcmtlckJ1dHRvbnMoc3RhdGUuc2VsZWN0aW9uKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1hcmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnOiAnc2V0TWFya0lEcycsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JyA6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5tYXJrX190ZXh0JzogJ2FjdGl2YXRlJyxcclxuICAgICAgICAnLm1hcmtfX25vdGUtYnRuJzogJ3RvZ2dsZU5vdGUnLFxyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tbmF2JzogJ25hdidcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJyNmb2xkLW1hcmtzJzogJ2ZvbGRMaXN0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWFya3M6IFtdLFxyXG4gIG1hcmtJRHM6IG51bGwsXHJcbiAgbGVuZ3RoOiAwLFxyXG4gIGN1cnJlbnQ6IC0xLFxyXG4gIHNldEZpbHRlcnM6IGZhbHNlLFxyXG4gIHRvZ2dsZU1hcDogeyAnMSc6IFtmYWxzZSwgZmFsc2VdLCAnMic6IFt0cnVlLCBmYWxzZV0sICczJzogW2ZhbHNlLCB0cnVlXSwgJzQnOiBbdHJ1ZSwgdHJ1ZV0gfSxcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZW50cnkgPSB0aGlzLmVudHJ5ID0gX1NUT1JFLmVudHJ5O1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIHRoaXMuc2V0TWFya3MoKTtcclxuICAgICAgaWYgKCF0aGlzLnNldEZpbHRlcnMpIHRoaXMucmVuZGVyU1ZHRmlsdGVycygpO1xyXG4gICAgICB0aGlzLnJlbmRlckxpc3QoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHNldE1hcmtzKCkge1xyXG4gICAgY29uc3QgZW50cnkgPSB0aGlzLmVudHJ5O1xyXG4gICAgbGV0IG1hcmtzID0gW107XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgZW50cnkuZm9yRWFjaChlID0+IG1hcmtzID0gbWFya3MuY29uY2F0KGUubWFya3MpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hcmtzID0gZW50cnkubWFya3M7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXJrSURzID0gdGhpcy5tYXJrSURzO1xyXG4gICAgLy90aGlzLmxlbmd0aCA9IG1hcmtzLmxlbmd0aDtcclxuICAgIC8vdGhpcy5tYXJrcyA9IG1hcmtJRHMgPyBtYXJrcy5zb3J0KChtMSwgbTIpID0+IG1hcmtJRHMuaW5kZXhPZihtMS5pZCkgPCBtYXJrSURzLmluZGV4T2YobTIuaWQpKSA6IG1hcmtzO1xyXG4gICAgdGhpcy5tYXJrcyA9IG1hcmtJRHMgP1xyXG4gICAgICBtYXJrSURzLm1hcChpZCA9PiBtYXJrcy5maW5kKG1hcmsgPT4gbWFyay5pZCA9PSBpZCkpIDpcclxuICAgICAgbWFya3M7XHJcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMubWFya3MubGVuZ3RoO1xyXG4gIH0sXHJcbiAgc2V0TWFya0lEcyhpZHMpIHtcclxuICAgIHRoaXMubWFya0lEcyA9IGlkcztcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuICByZW5kZXJTVkdGaWx0ZXJzKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCB0bXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgY29sb3JzID0ge307XHJcbiAgICBsZXQgaSwgYztcclxuICAgIGZvciAoaSBpbiBfU0VUVElOR1MuTk9URV9DT0xPUlMpIHtcclxuICAgICAgIGMgPSBfU0VUVElOR1MuTk9URV9DT0xPUlNbaV07XHJcbiAgICAgIGNvbG9yc1tpLnRvTG93ZXJDYXNlKCldID0gJzAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cigxLDIpKSArICcgMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDMsMikpICsgJyAwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoNSwyKSkgKyAnIDAgMCAwIDEgMCc7XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyO1xyXG4gICAgZm9yIChpIGluIGNvbG9ycykge1xyXG4gICAgICBmaWx0ZXIgPSB0bXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgZmlsdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWx0ZXInKVswXS5pZCA9ICdmaWx0ZXItLScgKyBpO1xyXG4gICAgICBmaWx0ZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZlQ29sb3JNYXRyaXgnKVswXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlcycsIGNvbG9yc1tpXSk7XHJcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmlsdGVyKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRGaWx0ZXJzID0gdHJ1ZTtcclxuICB9LFxyXG4gIGNvbnZlcnRIZXgoaGV4KSB7XHJcbiAgICByZXR1cm4gKCgxNiAqIE51bWJlcignMHgnICsgaGV4WzBdKSkgKyBOdW1iZXIoJzB4JyArIGhleFsxXSkpIC8gMjU1O1xyXG4gIH0sXHJcbiAgcmVuZGVyTGlzdCgpIHtcclxuICAgIGNvbnN0IG1hcmtUbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgY29uc3QgbWFya3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKTtcclxuICAgIGxldCBtYXJrQ29udGFpbmVyO1xyXG5cclxuICAgIG1hcmtzQ29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgIHRoaXMubWFya3MuZm9yRWFjaCgobWFyaywgaSkgPT4ge1xyXG4gICAgICBpZiAobWFyaykge1xyXG4gICAgICAgIG1hcmtDb250YWluZXIgPSBtYXJrVG1wbC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5pZCA9ICcnO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX3RleHQnKVswXTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1hcmsudGV4dCk7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gbWFyay5zdHlsZS5pbmRleE9mKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgbGV0IGhhc05vdGUgPSBtYXJrLm5vdGUgJiYgKHR5cGVvZiBtYXJrLm5vdGUgPT09ICdzdHJpbmcnIHx8IG1hcmsubm90ZS50ZXh0KTtcclxuICAgICAgICBjb2xvciA9IGNvbG9yID09PSAtMSA/ICd0cmFuc3BhcmVudCcgOiBtYXJrLnN0eWxlLnN1YnN0cihjb2xvciArIDE3LCA3KTtcclxuICAgICAgICBsZXQgbm90ZSwgbm90ZUNvbG9yLCBub3RlVGV4dCwgbm90ZUJ0biwgbm90ZU5vZGU7XHJcblxyXG4gICAgICAgIHRleHROb2RlLnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGV4dE5vZGUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoaGFzTm90ZSkge1xyXG4gICAgICAgICAgbm90ZSA9IG1hcmsubm90ZTtcclxuICAgICAgICAgIG5vdGVDb2xvciA9IG5vdGUuY29sb3IgfHwgJ3llbGxvdyc7XHJcbiAgICAgICAgICBub3RlVGV4dCA9IG5vdGUudGV4dCB8fCBub3RlO1xyXG4gICAgICAgICAgbWFya0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYXJrLS1ub3RlJyk7XHJcbiAgICAgICAgICBub3RlQnRuID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlLWJ0bicpWzBdO1xyXG4gICAgICAgICAgbm90ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgIG5vdGVCdG4uY2xhc3NMaXN0LmFkZCgnbWFya19fbm90ZS1idG4tLScgKyBub3RlQ29sb3IpO1xyXG4gICAgICAgICAgbm90ZU5vZGUgPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUnKVswXTtcclxuICAgICAgICAgIG5vdGVOb2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vdGVUZXh0KSk7XHJcbiAgICAgICAgICBub3RlTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgIG5vdGVOb2RlLmNsYXNzTGlzdC5hZGQoJ21hcmtfX25vdGUtLScgKyBub3RlQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChtYXJrQ29udGFpbmVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBtYXJrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgfSxcclxuICBuYXYoZSwgZWwpIHtcclxuICAgIGNvbnN0IGRpciA9IDEgKiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgIHRoaXMuY3VycmVudCArPSBkaXI7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID49IHRoaXMubGVuZ3RoKSB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgZWxzZSBpZiAodGhpcy5jdXJyZW50IDwgMCkgdGhpcy5jdXJyZW50ID0gdGhpcy5sZW5ndGggLSAxO1xyXG4gICAgdGhpcy5hY3RpdmF0ZUxpc3RJdGVtKCk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZUxpc3RJdGVtKGlkKSB7XHJcbiAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykgdGhpcy5jdXJyZW50ID0gaWQ7XHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFyay0tYWN0aXZlJylbMF07XHJcbiAgICBpZiAoY3VycmVudEl0ZW0pIGN1cnJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmstLWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtaWQ9XCInICsgW3RoaXMuY3VycmVudF0gKyAnXCJdJykuY2xhc3NMaXN0LmFkZCgnbWFyay0tYWN0aXZlJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6bmV4dC1tYXJrJywgdGhpcy5jdXJyZW50LCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShlLCBlbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtbWFya3MnKS52YWx1ZSA9IDA7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCd1bmZvbGRlZCcpO1xyXG4gICAgdGhpcy5hY3RpdmF0ZUxpc3RJdGVtKDEqZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICB9LFxyXG4gIGZvbGRMaXN0KGUsIGVsKSB7XHJcbiAgICBjb25zdCB2YWwgPSBlbC52YWx1ZTtcclxuICAgIGlmICh2YWwgIT0gMCkge1xyXG4gICAgICBjb25zdCBtYXJrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcycpO1xyXG4gICAgICBjb25zdCB0b2dnbGVTZXR0aW5ncyA9IHRoaXMudG9nZ2xlTWFwW3ZhbF07XHJcblxyXG4gICAgICB0aGlzLnRvZ2dsZSgndGV4dCcsIHRvZ2dsZVNldHRpbmdzWzBdKTtcclxuICAgICAgdGhpcy50b2dnbGUoJ25vdGUnLCB0b2dnbGVTZXR0aW5nc1sxXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlKGUsIGVsKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1tYXJrcycpLnZhbHVlID0gMDtcclxuICAgIGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZScpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3VuZm9sZGVkJyk7XHJcbiAgfSxcclxuICB0b2dnbGUodHlwZSwgc2hvdykge1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfXycgKyB0eXBlKSlcclxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0W21ldGhdKCd1bmZvbGRlZCcpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tZXRhJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5ICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBjb25zdCB5ZXMgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneWVzJyk7XHJcbiAgICAgIGNvbnN0IG5vID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vJyk7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fbnVtYmVyLW1hcmtzJykuaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fY3JlYXRlZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX2xhc3QtbW9kaWZpZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuXHJcbiAgICAgIFsnc3luY2VkJywgJ2ltbXV0J11cclxuICAgICAgICAuZm9yRWFjaChmaWVsZCA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fJyArIGZpZWxkKS5pbm5lclRleHQgPSBlbnRyeVtmaWVsZF0gPyB5ZXMgOiBubyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdhZGRlZDpib29rbWFyayc6ICdhY3RpdmF0ZUJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnZGVhY3RpdmF0ZUJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnOiAnYWN0aXZhdGVOb3RlcycsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdkZWFjdGl2YXRlTm90ZXMnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZSc6ICdvbk5vdGVzU3RhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1wYWdlJzogJ3BhZ2VBY3Rpb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmF0ZUJvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnc2Nyb2xsJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzY3JvbGwnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZU5vdGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnbm90ZXMnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVOb3RlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ25vdGVzJywgZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUodHlwZSwgb24pIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tJyArIHR5cGUpO1xyXG4gICAgaWYgKG9uKSB7XHJcbiAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHBhZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjonICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLmJvb2ttYXJrKSB0aGlzLmFjdGl2YXRlQm9va21hcmsoKTtcclxuICB9LFxyXG4gIG9uTm90ZXNTdGF0ZShub3Rlcykge1xyXG4gICAgaWYgKG5vdGVzKSB0aGlzLmFjdGl2YXRlTm90ZXMoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW5vdGVzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFkZC1ub3RlJzogJ2FkZE5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVjb2xvcic6ICdjaGFuZ2VDb2xvcicsXHJcbiAgICAgICAgJ3Rtbm90ZWN1c3RvbWl6ZSc6ICd0b2dnbGVQYWxldHRlJyxcclxuICAgICAgICAndG1ub3RlZGVsZXRlJzogJ3JlbW92ZU5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICd0b2dnbGVOb3RlJyxcclxuICAgICAgICAndG1ub3Rlc2F2ZSc6ICdzYXZlJ1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnI2ZvbGQtcGFnZS1ub3Rlcyc6ICd0b2dnbGVOb3RlcydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbm90ZXM6IFtdLFxyXG4gIG5vdGVFbHM6IHt9LFxyXG4gIGlkOiAwLFxyXG4gIGN1cnJlbnRDb2xvcjogJ3llbGxvdycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybCA9IHRhYi51cmw7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3BhZ2Vub3RlcycpLnRoZW4ocGFnZW5vdGVzID0+IHtcclxuICAgICAgICBwYWdlbm90ZXMgPSBwYWdlbm90ZXMgJiYgcGFnZW5vdGVzW3VybF0gPyBwYWdlbm90ZXNbdXJsXSA6IG51bGw7XHJcbiAgICAgICAgbGV0IGwsIGlkO1xyXG4gICAgICAgIGlmIChwYWdlbm90ZXMgJiYgKGwgPSBwYWdlbm90ZXMubGVuZ3RoKSkge1xyXG4gICAgICAgICAgdGhpcy5ub3RlcyA9IHBhZ2Vub3RlcztcclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWQgPSB0aGlzLmFkZE5vdGUocGFnZW5vdGVzW2xdKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IE1hdGgubWF4KHRoaXMuaWQsIGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3QoISF0aGlzLm5vdGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZU5vdGVzKG51bGwsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNhdmUoZSwgZWwpIHtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5nZXRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgbm90ZS50ZXh0ID0gZWwucHJldmlvdXNTaWJsaW5nLnZhbHVlO1xyXG4gICAgICBub3RlLm5hbWUgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rtbm90ZV9faGVhZGVyJylbMF0udmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6cGFnZS1ub3RlJywgdGhpcy51cmwsIHRoaXMubm90ZXMpO1xyXG4gIH0sXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IFtdO1xyXG4gICAgdGhpcy5ub3RlRWxzID0ge307XHJcbiAgICB0aGlzLmlkID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGVzJykudGV4dENvbnRlbnQgPSAnJztcclxuICB9LFxyXG5cclxuICBhZGROb3RlKG5vdGUpIHtcclxuICAgIG5vdGUgPSBub3RlLnR5cGUgPyBudWxsIDogbm90ZTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGVzJyk7XHJcbiAgICBjb25zdCBub3RlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlLXRlbXBsYXRlJykuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBub3RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICBjb25zdCBoZWFkZXIgPSBub3RlRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG1ub3RlX19oZWFkZXInKVswXTtcclxuICAgIG5vdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICBsZXQgaWQ7XHJcbiAgICBpZiAobm90ZSkge1xyXG4gICAgICBpZCA9IG5vdGVFbC5pZCA9IG5vdGUuaWQ7XHJcbiAgICAgIHRleHRhcmVhLnRleHRDb250ZW50ID0gbm90ZS50ZXh0IHx8ICcnO1xyXG4gICAgICBoZWFkZXIudmFsdWUgPSBub3RlLm5hbWUgfHwgJyc7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBub3RlLmNvbG9yKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVFbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZCA9IG5vdGVFbC5pZCA9ICsrdGhpcy5pZDtcclxuICAgICAgdGhpcy5ub3Rlcy5wdXNoKHsgaWQsIHRleHQ6ICcnLCBjb2xvcjogdGhpcy5jdXJyZW50Q29sb3IgfSk7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgdGhpcy5jdXJyZW50Q29sb3IpO1xyXG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5vdGVFbCwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIEFycmF5LmZyb20obm90ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKSk7XHJcblxyXG4gICAgdGhpcy5ub3RlRWxzW2lkXSA9IG5vdGVFbDtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdCh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfSxcclxuICBjaGFuZ2VDb2xvcihlLCBlbCkge1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdXJyZW50Q29sb3IgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcclxuICAgIHRoaXMubm90ZUVsc1tpZF0uY2xhc3NOYW1lID0gdGhpcy5ub3RlRWxzW2lkXS5jbGFzc05hbWUucmVwbGFjZSgvLS1cXHcrLywgJy0tJyArIGNvbG9yKTtcclxuICAgIHRoaXMuZ2V0QnlJZChpZCkuY29sb3IgPSBjb2xvcjtcclxuICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICBub3RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm90ZSk7XHJcbiAgICBkZWxldGUgdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgIHRoaXMubm90ZXMuc3BsaWNlKHRoaXMubm90ZXMuaW5kZXhPZih0aGlzLmdldEJ5SWQoaWQpKSwgMSk7XHJcbiAgICB0aGlzLnNhdmUoKTtcclxuICAgIGlmICghdGhpcy5ub3Rlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy50b2dnbGVTZWxlY3QoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlU2VsZWN0KHNob3cpIHtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKS5jbGFzc0xpc3RbbWV0aF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUGFsZXR0ZShlLCBlbCkge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcbiAgICBjb25zdCBwYWxldHRlID0gbm90ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlcGFsZXR0ZScpWzBdO1xyXG4gICAgcGFsZXR0ZS5jbGFzc0xpc3QudG9nZ2xlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIGlmICghcGFsZXR0ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3UtZGlzcGxheS0tbm9uZScpKSB7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZU5vdGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldO1xyXG4gICAgbm90ZS5jbGFzc0xpc3QudG9nZ2xlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgaWYgKCFub3RlLmNsYXNzTGlzdC5jb250YWlucygndG1ub3RlLS1taW4nKSkge1xyXG4gICAgICB0aGlzLmFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpLnZhbHVlID0gMDtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwudmFsdWUgPT0gMSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm5vdGVFbHMpIHtcclxuICAgICAgICB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBub3RlLCB0ZXh0YXJlYTtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5ub3RlRWxzKSB7XHJcbiAgICAgICAgbm90ZSA9IHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICAgICAgbm90ZS5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICAgIHRoaXMuYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGdldEJ5SWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLm5vdGVzLmZpbmQobm90ZSA9PiBub3RlLmlkID09IGlkKTtcclxuICB9LFxyXG4gIGFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpIHtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gbm90ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRleHRhcmVhLnNjcm9sbEhlaWdodCArIDEwICsgJ3B4JztcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdzaG93RW50cnlTcGVjaWZpY1RhYnMnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy50YWJfX3RpdGxlJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy50YWJfX25hbWUnOiAndG9nZ2xlJyxcclxuICAgICAgICAnLnRhYl9fdG9nZ2xlJzogJ3RvZ2dsZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRhYnM6IHt9LFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmICghc2V0dGluZ3MgfHwgIXNldHRpbmdzLnNiKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRhYlNldHRpbmdzID0gc2V0dGluZ3Muc2IudGFicztcclxuICAgICAgZm9yIChsZXQgdGFiIGluIHRhYlNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy50YWJzW3RhYl0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS0nICsgdGFiKTtcclxuICAgICAgICBpZiAodGFiU2V0dGluZ3NbdGFiXS51bmZvbGRlZCkgdGhpcy5vcGVuKHRhYik7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNsb3NlKHRhYik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9wZW4odGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QucmVtb3ZlKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgY2xvc2UodGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QuYWRkKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLm5vZGVOYW1lID09PSAnSDInID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICBjb25zdCB0YWIgPSBpZC5zcGxpdCgnLS0nKS5wb3AoKTtcclxuICAgIGNvbnN0IHRhYkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgdGFiRWwuY2xhc3NMaXN0LnRvZ2dsZSgndGFiLS1mb2xkZWQnKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDpzaWRlYmFyLXRhYicsIHRhYiwgIXRhYkVsLmNsYXNzTGlzdC5jb250YWlucygndGFiLS1mb2xkZWQnKSk7XHJcbiAgfSxcclxuICBzaG93RW50cnlTcGVjaWZpY1RhYnMoKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYi0tZW50cnknKSlcclxuICAgICAgLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGFncycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFnc19fcmVtb3ZlJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICAgJyNhZGQtdGFnJzogJ2FkZFRhZydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5ICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBjb25zdCB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBbXTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZ3MnKS5pbm5lclRleHQgPSAnJztcclxuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB0aGlzLnJlbmRlclRhZyh0YWcpKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlclRhZyh0YWcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJyk7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9ICd0YWdzX19pdGVtIHUtb3ZlcmZsb3ctLWVsbGlwc2lzJztcclxuICAgIGRlbC5jbGFzc05hbWUgPSAndGFnc19fcmVtb3ZlJztcclxuICAgIGRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJywgdGFnKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IHRhZztcclxuICAgIGRlbC5hcHBlbmRDaGlsZCh4KTtcclxuICAgIGVsLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKCkge1xyXG4gICAgY29uc3QgaW5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YWcnKTtcclxuICAgIGxldCB0YWcgPSBpbnAudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKCF0YWcpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnYWRkOnRhZycsIHRhZywgX1NUT1JFLmVudHJ5KTtcclxuICAgIGlucC52YWx1ZSA9ICcnO1xyXG4gICAgdGFnLnNwbGl0KCcgJykuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlOnRhZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YWcnKSwgX1NUT1JFLmVudHJ5KTtcclxuICAgIGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5wYXJlbnROb2RlKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS10aGVtZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLnRoZW1lLW9wdCc6ICdvbkNoYW5nZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRoZW1lOiAnZGVmYXVsdCcsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgdGhlbWUgPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5zYiAmJiBzZXR0aW5ncy5zYi50aGVtZSA/IHNldHRpbmdzLnNiLnRoZW1lIDogJ2RlZmF1bHQnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGhlbWUtLSR7dGhlbWV9YCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoZW1lKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uQ2hhbmdlKGUsIGVsKSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNpZGViYXItdGhlbWUnLCB0aGVtZSk7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgfSxcclxuICB1cGRhdGUodGhlbWUpIHtcclxuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSAndGV4dG1hcmtlci1zaWRlYmFyLS1kYXJrJztcclxuICAgIGlmICh0aGVtZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdzaWRlYmFyJyxcclxuICB0eXBlOiAncHJpdmlsZWdlZCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdyZW1vdmU6dGFnJyxcclxuICAgICAgJ2FkZDp0YWcnLFxyXG4gICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZScsXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSdcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9