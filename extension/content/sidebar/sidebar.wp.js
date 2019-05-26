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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImVudiIsImVudHJ5IiwibG9ja2VkIiwidXBkYXRlRW50cnkiLCJpc0FyciIsIkFycmF5IiwiaXNBcnJheSIsImN1cnJlbnRFbnRyeSIsInB1c2giLCJlbWl0IiwidXBkYXRlRW50cnlPbkZvdW5kIiwicmVzdW1lIiwiX2dldF9tb2RlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X2F1dG9zYXZlIiwiaGlzdG9yeSIsImF1dG9zYXZlIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsImF1dG9pbml0IiwidGFiIiwicG93ZXIiLCJvbiIsInBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvblN0YXJ0IiwibW9kZSIsInRvZ2dsZSIsInNpZGViYXIiLCJlbCIsInJlbmRlciIsImhlYWRlciIsInVwZGF0ZU5hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsInRpdGxlIiwiRE9NIiwiY2xpY2siLCJyZXRyeUJ0blNob3duIiwic2F2ZUJ0biIsInJldHJ5QnRuIiwidG9nZ2xlU2F2ZSIsInNhdmUiLCJyZXRyeVJlc3RvcmF0aW9uIiwiZGVhY3RpdmF0ZVJldHJ5IiwibWV0aCIsImFjdGl2YXRlU2F2ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVSZXRyeSIsInRvZ2dsZUltbXV0IiwiZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInVwZGF0ZUltbXV0IiwiaW1tdXQiLCJvblBhZ2VTdGF0ZSIsInN0YXRlIiwicmV0cnlBY3RpdmUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9ucyIsImZyb20iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1hcmtBY3Rpb24iLCJoYXNBdHRyaWJ1dGUiLCJhY3RpdmF0ZSIsIm1hcmtJbmZvcyIsImZvckVhY2giLCJidG4iLCJ0eXBlIiwiYm9va21hcmsiLCJkZWFjdGl2YXRlIiwiY2hhbmdlIiwiYXV0b21hcmtFbmFibGVkIiwic3luYyIsIm1pc2MiLCJtYXJrbWV0aG9kIiwibG9jYWwiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJmcmFnUmlnaHQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ0xlZnQiLCJzIiwiTWF0aCIsImNlaWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY291bnQiLCJtIiwiYm94IiwiaW5wdXQiLCJleGFtcGxlVGV4dCIsImJ1dHRvbiIsImNvbG9yIiwiY2JCb3giLCJjYiIsImNiTGFiZWwiLCJjYlNwYW4iLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZENoaWxkIiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic3R5bGVzIiwic3BsaXQiLCJsIiwiaSIsImluY2x1ZGVzIiwic2VsZWN0IiwiYXBwbHlDb2xvciIsInRvZ2dsZU1hcmtlckJ1dHRvbnMiLCJzaG93Iiwic2VsZWN0aW9uIiwibWFya3MiLCJtYXJrSURzIiwiY3VycmVudCIsInNldEZpbHRlcnMiLCJ0b2dnbGVNYXAiLCJzZXRNYXJrcyIsInJlbmRlclNWR0ZpbHRlcnMiLCJyZW5kZXJMaXN0IiwiY29uY2F0IiwibWFwIiwiZmluZCIsIm1hcmsiLCJzZXRNYXJrSURzIiwiaWRzIiwiYm9keSIsInRtcGwiLCJjb2xvcnMiLCJjIiwiX1NFVFRJTkdTIiwiTk9URV9DT0xPUlMiLCJ0b0xvd2VyQ2FzZSIsImNvbnZlcnRIZXgiLCJzdWJzdHIiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJoZXgiLCJOdW1iZXIiLCJtYXJrVG1wbCIsImZyYWdtZW50IiwibWFya3NDb250YWluZXIiLCJtYXJrQ29udGFpbmVyIiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHQiLCJpbmRleE9mIiwiaGFzTm90ZSIsIm5vdGUiLCJub3RlQ29sb3IiLCJub3RlVGV4dCIsIm5vdGVCdG4iLCJub3RlTm9kZSIsImJvcmRlckNvbG9yIiwibmF2IiwiZGlyIiwiYWN0aXZhdGVMaXN0SXRlbSIsImN1cnJlbnRJdGVtIiwicXVlcnlTZWxlY3RvciIsImZvbGRMaXN0IiwidmFsIiwidG9nZ2xlU2V0dGluZ3MiLCJ0b2dnbGVOb3RlIiwieWVzIiwiaTE4biIsImdldE1lc3NhZ2UiLCJubyIsIm9wdGltaXplRGF0ZVN0cmluZyIsIkRhdGUiLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwibGFzdCIsImZpZWxkIiwiZGF0ZSIsInJlcGxhY2UiLCJwIiwicSIsImFjdGl2YXRlQm9va21hcmsiLCJkZWFjdGl2YXRlQm9va21hcmsiLCJhY3RpdmF0ZU5vdGVzIiwiZGVhY3RpdmF0ZU5vdGVzIiwicGFnZUFjdGlvbiIsIm9uTm90ZXNTdGF0ZSIsIm5vdGVzIiwibm90ZUVscyIsImN1cnJlbnRDb2xvciIsInVybCIsImFkZE5vdGUiLCJtYXgiLCJ0b2dnbGVTZWxlY3QiLCJ0b2dnbGVOb3RlcyIsImdldEJ5SWQiLCJwcmV2aW91c1NpYmxpbmciLCJjb250YWluZXIiLCJub3RlRWwiLCJ0ZXh0YXJlYSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJjaGFuZ2VDb2xvciIsInJlbW92ZU5vdGUiLCJyZW1vdmVDaGlsZCIsInNwbGljZSIsInRvZ2dsZVBhbGV0dGUiLCJwYWxldHRlIiwiYWRqdXN0VGV4dGFyZWFIZWlnaHQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwic2IiLCJ0YWJTZXR0aW5ncyIsInVuZm9sZGVkIiwib3BlbiIsImNsb3NlIiwibm9kZU5hbWUiLCJwb3AiLCJ0YWJFbCIsInNob3dFbnRyeVNwZWNpZmljVGFicyIsInRhZ3MiLCJ0YWciLCJyZW5kZXJUYWciLCJkZWwiLCJ4IiwiYWRkVGFnIiwiaW5wIiwidHJpbSIsInJlbW92ZVRhZyIsInRoZW1lIiwidXBkYXRlIiwib25DaGFuZ2UiLCJDT05ORUNUSU9OIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInNob3J0Y3V0cyIsInoiLCJ5IiwiYiIsImQiLCJ3IiwibiIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwibmFtaW5nIiwiZG93bmxvYWQiLCJjb3B5Iiwic2F2ZU5vdGUiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJpZ25vcmVIYXNoIiwiYXV0b2NzIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJjdXN0b21TZWFyY2giLCJ0bXVpcG9zIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsIm1ldGEiLCJhY3Rpb25zIiwibGlua3MiLCJ0aGVtZXMiLCJlbnRyaWVzIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJNQVhfTE9HX0VOVFJJRVMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsInNyYyIsInRhcmdldCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJhdXRvUGF1c2UiLCJzZXRBdXRvUGF1c2UiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsInJlbW92ZUxpc3RlbmVycyIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXh0cmEiLCJzZXQiLCJ3aW5kb3ciLCJlcnJvciIsImZpbGUiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJPTkVPRkYiLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1zZyIsImxhc3RBcmciLCJ1bmRlZmluZWQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiX0RFRkFVTFRfU1RPUkFHRSIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwic2V0QXJlYXMiLCJhcmVhIiwiaW5pdCIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5IiwibG9ncyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7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dEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFpWixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQ2hLLE9BQW5DLEVBQTRDO0FBQzFDLGlCQUFPclAsT0FBTyxDQUFDQyxPQUFSLENBQWdCOEUsSUFBaEIsQ0FBcUI1RSxHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQWtaLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDakssT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPZ0ssWUFBWSxDQUFDaEssT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUIzUSxlIiwiZmlsZSI6ImNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3NpZGViYXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAnZW50cnk6Zm91bmQnOiAndXBkYXRlRW50cnlPbkZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBlbnY6ICdzaWRlYmFyJyxcclxuICBlbnRyeTogbnVsbCxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG5cclxuICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlzQXJyID0gQXJyYXkuaXNBcnJheShlbnRyeSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRFbnRyeSA9ICEhdGhpcy5lbnRyeTtcclxuXHJcbiAgICAgIHRoaXMubG9ja2VkID0gdGhpcy5sb2NrZWQgfHwgaXNBcnIgfHwgZW50cnkubG9ja2VkO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmxvY2tlZCB8fCBpc0Fycikge1xyXG4gICAgICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmxvY2tlZCAmJiAhaXNBcnIpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRyeSAmJiBBcnJheS5pc0FycmF5KHRoaXMuZW50cnkpKSB0aGlzLmVudHJ5LnB1c2goZW50cnkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbnRyeSA9IFtlbnRyeV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RW50cnkpIHRoaXMuZW1pdCgndXBkYXRlZDpzdG9yZWQtZW50cnknLCB0aGlzLmVudHJ5KTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N0b3JlZDplbnRyeScsIHRoaXMuZW50cnkpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPbkZvdW5kKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGVFbnRyeShlbnRyeSk7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknLCBlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJ5ID0gbnVsbDtcclxuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6ZW50cnknKTtcclxuICB9LFxyXG5cclxuXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9hdXRvc2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3BhZ2Vub3RlcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5wYWdlbm90ZXMgfHwgbnVsbCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0wxME4gfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfUE9SVCBmcm9tICcuL3BvcnQnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy90aGVtZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2hlYWRlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbWV0YS1pbmZvcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdGFncydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VycydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGlzdG9yeS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrLWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3BhZ2UtYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2xpbmtzJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnb25TdGFydCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAndG9nZ2xlJyxcclxuICAgICAgJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknOiAndG9nZ2xlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuZWQ6c2lkZWJhcicsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG5cclxuICBwb3dlcihvbikge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyLS1wYXVzZWQnKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcblxyXG4gICAgaWYgKG9uKSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblN0YXJ0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnBvd2VyKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZShlbnRyeSkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuICAgIGlmIChlbnRyeSAmJiBfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1zaWRlYmFyLS1sb2NrZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1zaWRlYmFyLS1sb2NrZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmVsO1xyXG5cclxuICAgIGlmICghZW50cnkpIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpKSByZXR1cm47XHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgdGhpcy51cGRhdGVOYW1lKGVudHJ5Lm5hbWUpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZU5hbWUobmFtZSkge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbmFtZScpWzBdO1xyXG4gICAgZWwuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIGVsLnRpdGxlID0gbmFtZTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZSc6ICdkZWFjdGl2YXRlU2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICdkZWFjdGl2YXRlU2F2ZScsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnOiAnYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ2FjdGl2YXRlUmV0cnknLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3VwZGF0ZUltbXV0JyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnLFxyXG4gICAgICAnaW5pdGlhbGx5LXN0b3JlZDplbnRyeSc6ICd1cGRhdGVJbW11dCdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnI3BhZ2UtYWN0aW9uLS1yZXRyeSc6ICdyZXRyeVJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnI3BhZ2UtYWN0aW9uLS1zYXZlJzogJ3NhdmUnLFxyXG4gICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZUltbXV0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmV0cnlCdG5TaG93bjogZmFsc2UsXHJcbiAgc2F2ZUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1zYXZlJyksXHJcbiAgcmV0cnlCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tcmV0cnknKSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZVNhdmUoKTtcclxuICB9LFxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnNhdmUtY2hhbmdlcycsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHJldHJ5UmVzdG9yYXRpb24oKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgICB0aGlzLmRlYWN0aXZhdGVSZXRyeSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2F2ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2F1dG9zYXZlJykudGhlbihhdXRvc2F2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IG1ldGggPSBhdXRvc2F2ZSA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIHRoaXMuc2F2ZUJ0bi5jbGFzc0xpc3RbbWV0aF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVNhdmUob24gPSB0cnVlKSB7XHJcbiAgICBpZiAob24pIHRoaXMuc2F2ZUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBlbHNlIHRoaXMuc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlU2F2ZSgpIHtcclxuICAgIHRoaXMuYWN0aXZhdGVTYXZlKGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICBpZiAoIXRoaXMucmV0cnlCdG5TaG93bikge1xyXG4gICAgICB0aGlzLnJldHJ5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLnJldHJ5QnRuU2hvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgaWYgKHRoaXMucmV0cnlCdG5TaG93bikge1xyXG4gICAgICB0aGlzLnJldHJ5QnRuLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLnJldHJ5QnRuU2hvd24gPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0KGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1pbW11dCcpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6aW1tdXQnLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICB1cGRhdGVJbW11dChlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IG1ldGggPSBlbnRyeS5pbW11dCA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0taW1tdXQnKS5jbGFzc0xpc3RbbWV0aF0oJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWJveCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1ib3gnKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUucmV0cnlBY3RpdmUpIHRoaXMuYWN0aXZhdGVSZXRyeSgpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWxpbmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmxpbmsnOiAnbGluaycsXHJcbiAgICAgICAgJy5saW5rX19pY29uJzogJ2xpbmsnLFxyXG4gICAgICAgICcubGlua19fdGV4dCc6ICdsaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbGluayhlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmsnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIHRoaXMuZW1pdCgnb3BlbjphZGRvbi1wYWdlKHNiKScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdhY3RpdmF0ZScsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyayc6ICdhY3RpdmF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLW1hcmsnOiAnbWFya0FjdGlvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYnV0dG9uczogW10sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5idXR0b25zID0gQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKSk7XHJcbiAgfSxcclxuICBtYXJrQWN0aW9uKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6JyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwgbnVsbCwgbnVsbCwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUobWFya0luZm9zKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICBsZXQgdHlwZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0eXBlID09PSAnY29weScgfHxcclxuICAgICAgICB0eXBlID09PSAnZGVsZXRlLWhpZ2hsaWdodCcgfHxcclxuICAgICAgICAodHlwZW9mIG1hcmtJbmZvc1t0eXBlXSA9PT0gJ2Jvb2xlYW4nICYmICFtYXJrSW5mb3NbdHlwZV0pIHx8XHJcbiAgICAgICAgKHR5cGUgPT09ICdkZWxldGUtYm9va21hcmsnICYmIG1hcmtJbmZvcy5ib29rbWFyaylcclxuICAgICAgKSB7XHJcbiAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWFya2VycycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdyZW5kZXInLFxyXG4gICAgICAnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJzogJ3JlbmRlcicsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICd0b2dnbGVNYXJrZXJCdXR0b25zJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcubWFya2VyX19jb2xvcic6ICdjaGFuZ2UnLFxyXG4gICAgICAgICcubWFya2VyX19jYic6ICdzZWxlY3QnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5tYXJrZXJfX2FwcGx5JzogJ2FwcGx5Q29sb3InXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdXRvbWFya0VuYWJsZWQ6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmICghc3RvcmFnZS5zeW5jIHx8IHN0b3JhZ2Uuc3luYy5zZXR0aW5ncykpIHtcclxuICAgICAgICB0aGlzLmF1dG9tYXJrRW5hYmxlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWFya2VycztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLnN5bmMgJiYgIXN0b3JhZ2Uuc3luYy5zZXR0aW5ncykge1xyXG4gICAgICAgICAgdGhpcy5hdXRvbWFya0VuYWJsZWQgPSBzdG9yYWdlLnNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBpZiAoIW1hcmtlcnMpIHJldHVybiB0aGlzO1xyXG4gICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcnMtY29udGFpbmVyLS1sZWZ0Jyk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcnMtY29udGFpbmVyLS1yaWdodCcpO1xyXG4gICAgICBjb25zdCBmcmFnUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IGZyYWdMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBzID0gTWF0aC5jZWlsKE9iamVjdC5rZXlzKG1hcmtlcnMpLmxlbmd0aCAvIDIpO1xyXG4gICAgICBsZXQgY291bnQgPSAwLCBtLCBib3gsIGlucHV0LCBleGFtcGxlVGV4dCwgYnV0dG9uLCBjb2xvciwgY2JCb3gsIGNiLCBjYkxhYmVsLCBjYlNwYW47XHJcblxyXG4gICAgICBsZWZ0Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICByaWdodENvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICAgIGZvciAobSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjYkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjYkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjYlNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY29sb3IgPSB0aGlzLmV4dHJhY3RCZ0NvbG9yKG1hcmtlcnNbbV0uc3R5bGUpO1xyXG5cclxuICAgICAgICBib3guY2xhc3NOYW1lID0gJ21hcmtlciB1LWNmJztcclxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnbWFya2VyX19jb2xvcic7XHJcbiAgICAgICAgaW5wdXQuaWQgPSAnbWFya2VyLScgKyBtO1xyXG4gICAgICAgIGlucHV0Lm5hbWUgPSBtO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAnY29sb3InO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY29sb3I7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuY2xhc3NOYW1lID0gJ21hcmtlcl9fdGV4dCc7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG1hcmtlcnNbbV0uc3R5bGUpO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ21hcmtlci0nICsgbSk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2FwcGx5JztcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgbSk7XHJcbiAgICAgICAgY2JCb3guY2xhc3NOYW1lID0gJ21hcmtlcl9fY2ItYm94JztcclxuICAgICAgICBjYi5jbGFzc05hbWUgPSAnbWFya2VyX19jYic7XHJcbiAgICAgICAgY2Iuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIG0pO1xyXG4gICAgICAgIGNiLnR5cGUgPSAncmFkaW8nO1xyXG4gICAgICAgIGNiLmlkID0gJ21hcmtlcl9fY2ItLScgKyBtO1xyXG4gICAgICAgIGNiLm5hbWUgPSAnbWFya2VyLWNiJztcclxuICAgICAgICBjYkxhYmVsLmNsYXNzTmFtZSA9ICdmYWtlLXJiJztcclxuICAgICAgICBjYkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21hcmtlcl9fY2ItLScgKyBtKTtcclxuICAgICAgICBjYlNwYW4udGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjI5YSk7XHJcblxyXG4gICAgICAgIGNiTGFiZWwuYXBwZW5kQ2hpbGQoY2JTcGFuKTtcclxuICAgICAgICBjYkJveC5hcHBlbmRDaGlsZChjYik7XHJcbiAgICAgICAgY2JCb3guYXBwZW5kQ2hpbGQoY2JMYWJlbCk7XHJcblxyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjYkJveCk7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoZXhhbXBsZVRleHQpO1xyXG5cclxuICAgICAgICBpZiAoY291bnQgPiAzICYmIGNvdW50ID4gcykge1xyXG4gICAgICAgICAgZnJhZ0xlZnQuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZnJhZ1JpZ2h0LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtID0gbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG0gPSBtID09PSAnRU5URVInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDogbTtcclxuICAgICAgICBleGFtcGxlVGV4dC5pbm5lclRleHQgPSBtO1xyXG4gICAgICAgIGlmICghY29sb3IpIGlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnUmlnaHQpO1xyXG4gICAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdMZWZ0KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmF1dG9tYXJrRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYXV0bycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJfX2NiLS1tJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdhdXRvJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZXh0cmFjdEJnQ29sb3Ioc3R5bGVzKSB7XHJcbiAgICBsZXQgc3BsaXQgPSBzdHlsZXMuc3BsaXQoJzsnKSxcclxuICAgICAgICBsID0gc3BsaXQubGVuZ3RoLFxyXG4gICAgICAgIGNvbG9yID0gJycsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgc3R5bGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc3R5bGUgPSBzcGxpdFtpXTtcclxuICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICBjb2xvciA9IHN0eWxlLnNwbGl0KCc6JylbMV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxuICB9LFxyXG4gIGNoYW5nZShlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2U6Ymctc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICB9LFxyXG4gIHNlbGVjdChlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgYXBwbHlDb2xvcihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOmhpZ2hsaWdodCcsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTWFya2VyQnV0dG9ucyhzaG93KSB7XHJcbiAgICBpZiAodGhpcy5hdXRvbWFya0VuYWJsZWQpIHJldHVybjtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnc2V0QXR0cmlidXRlJztcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya2VyX19hcHBseScpKS5mb3JFYWNoKGJ0biA9PiBidG5bbWV0aF0oJ2Rpc2FibGVkJywgdHJ1ZSkpO1xyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIHRoaXMudG9nZ2xlTWFya2VyQnV0dG9ucyhzdGF0ZS5zZWxlY3Rpb24pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWFya3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnk6b3JkZXJlZC1tYXJrcyc6ICdzZXRNYXJrSURzJyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknIDogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLm1hcmtfX3RleHQnOiAnYWN0aXZhdGUnLFxyXG4gICAgICAgICcubWFya19fbm90ZS1idG4nOiAndG9nZ2xlTm90ZScsXHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1uYXYnOiAnbmF2J1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnI2ZvbGQtbWFya3MnOiAnZm9sZExpc3QnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtYXJrczogW10sXHJcbiAgbWFya0lEczogbnVsbCxcclxuICBsZW5ndGg6IDAsXHJcbiAgY3VycmVudDogLTEsXHJcbiAgc2V0RmlsdGVyczogZmFsc2UsXHJcbiAgdG9nZ2xlTWFwOiB7ICcxJzogW2ZhbHNlLCBmYWxzZV0sICcyJzogW3RydWUsIGZhbHNlXSwgJzMnOiBbZmFsc2UsIHRydWVdLCAnNCc6IFt0cnVlLCB0cnVlXSB9LFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnkgPSBfU1RPUkUuZW50cnk7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy5zZXRNYXJrcygpO1xyXG4gICAgICBpZiAoIXRoaXMuc2V0RmlsdGVycykgdGhpcy5yZW5kZXJTVkdGaWx0ZXJzKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyTGlzdCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2V0TWFya3MoKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnk7XHJcbiAgICBsZXQgbWFya3MgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBlbnRyeS5mb3JFYWNoKGUgPT4gbWFya3MgPSBtYXJrcy5jb25jYXQoZS5tYXJrcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtJRHMgPSB0aGlzLm1hcmtJRHM7XHJcbiAgICAvL3RoaXMubGVuZ3RoID0gbWFya3MubGVuZ3RoO1xyXG4gICAgLy90aGlzLm1hcmtzID0gbWFya0lEcyA/IG1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbWFya0lEcy5pbmRleE9mKG0xLmlkKSA8IG1hcmtJRHMuaW5kZXhPZihtMi5pZCkpIDogbWFya3M7XHJcbiAgICB0aGlzLm1hcmtzID0gbWFya0lEcyA/XHJcbiAgICAgIG1hcmtJRHMubWFwKGlkID0+IG1hcmtzLmZpbmQobWFyayA9PiBtYXJrLmlkID09IGlkKSkgOlxyXG4gICAgICBtYXJrcztcclxuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5tYXJrcy5sZW5ndGg7XHJcbiAgfSxcclxuICBzZXRNYXJrSURzKGlkcykge1xyXG4gICAgdGhpcy5tYXJrSURzID0gaWRzO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG4gIHJlbmRlclNWR0ZpbHRlcnMoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IHRtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBjb2xvcnMgPSB7fTtcclxuICAgIGxldCBpLCBjO1xyXG4gICAgZm9yIChpIGluIF9TRVRUSU5HUy5OT1RFX0NPTE9SUykge1xyXG4gICAgICAgYyA9IF9TRVRUSU5HUy5OT1RFX0NPTE9SU1tpXTtcclxuICAgICAgY29sb3JzW2kudG9Mb3dlckNhc2UoKV0gPSAnMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDEsMikpICsgJyAwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoMywyKSkgKyAnIDAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cig1LDIpKSArICcgMCAwIDAgMSAwJztcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXI7XHJcbiAgICBmb3IgKGkgaW4gY29sb3JzKSB7XHJcbiAgICAgIGZpbHRlciA9IHRtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBmaWx0ZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbHRlcicpWzBdLmlkID0gJ2ZpbHRlci0tJyArIGk7XHJcbiAgICAgIGZpbHRlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmVDb2xvck1hdHJpeCcpWzBdLnNldEF0dHJpYnV0ZSgndmFsdWVzJywgY29sb3JzW2ldKTtcclxuICAgICAgYm9keS5hcHBlbmRDaGlsZChmaWx0ZXIpXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZpbHRlcnMgPSB0cnVlO1xyXG4gIH0sXHJcbiAgY29udmVydEhleChoZXgpIHtcclxuICAgIHJldHVybiAoKDE2ICogTnVtYmVyKCcweCcgKyBoZXhbMF0pKSArIE51bWJlcignMHgnICsgaGV4WzFdKSkgLyAyNTU7XHJcbiAgfSxcclxuICByZW5kZXJMaXN0KCkge1xyXG4gICAgY29uc3QgbWFya1RtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICBjb25zdCBtYXJrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcycpO1xyXG4gICAgbGV0IG1hcmtDb250YWluZXI7XHJcblxyXG4gICAgbWFya3NDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgdGhpcy5tYXJrcy5mb3JFYWNoKChtYXJrLCBpKSA9PiB7XHJcbiAgICAgIGlmIChtYXJrKSB7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lciA9IG1hcmtUbXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBtYXJrQ29udGFpbmVyLmlkID0gJyc7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICBtYXJrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fdGV4dCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWFyay50ZXh0KTtcclxuICAgICAgICBsZXQgY29sb3IgPSBtYXJrLnN0eWxlLmluZGV4T2YoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICBsZXQgaGFzTm90ZSA9IG1hcmsubm90ZSAmJiAodHlwZW9mIG1hcmsubm90ZSA9PT0gJ3N0cmluZycgfHwgbWFyay5ub3RlLnRleHQpO1xyXG4gICAgICAgIGNvbG9yID0gY29sb3IgPT09IC0xID8gJ3RyYW5zcGFyZW50JyA6IG1hcmsuc3R5bGUuc3Vic3RyKGNvbG9yICsgMTcsIDcpO1xyXG4gICAgICAgIGxldCBub3RlLCBub3RlQ29sb3IsIG5vdGVUZXh0LCBub3RlQnRuLCBub3RlTm9kZTtcclxuXHJcbiAgICAgICAgdGV4dE5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0ZXh0Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChoYXNOb3RlKSB7XHJcbiAgICAgICAgICBub3RlID0gbWFyay5ub3RlO1xyXG4gICAgICAgICAgbm90ZUNvbG9yID0gbm90ZS5jb2xvciB8fCAneWVsbG93JztcclxuICAgICAgICAgIG5vdGVUZXh0ID0gbm90ZS50ZXh0IHx8IG5vdGU7XHJcbiAgICAgICAgICBtYXJrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21hcmstLW5vdGUnKTtcclxuICAgICAgICAgIG5vdGVCdG4gPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUtYnRuJylbMF07XHJcbiAgICAgICAgICBub3RlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgbm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtYXJrX19ub3RlLWJ0bi0tJyArIG5vdGVDb2xvcik7XHJcbiAgICAgICAgICBub3RlTm9kZSA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZScpWzBdO1xyXG4gICAgICAgICAgbm90ZU5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm90ZVRleHQpKTtcclxuICAgICAgICAgIG5vdGVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgbm90ZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWFya19fbm90ZS0tJyArIG5vdGVDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1hcmtDb250YWluZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG1hcmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICB9LFxyXG4gIG5hdihlLCBlbCkge1xyXG4gICAgY29uc3QgZGlyID0gMSAqIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5jdXJyZW50ICs9IGRpcjtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5sZW5ndGgpIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnQgPCAwKSB0aGlzLmN1cnJlbnQgPSB0aGlzLmxlbmd0aCAtIDE7XHJcbiAgICB0aGlzLmFjdGl2YXRlTGlzdEl0ZW0oKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlTGlzdEl0ZW0oaWQpIHtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB0aGlzLmN1cnJlbnQgPSBpZDtcclxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrLS1hY3RpdmUnKVswXTtcclxuICAgIGlmIChjdXJyZW50SXRlbSkgY3VycmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWFyay0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1pZD1cIicgKyBbdGhpcy5jdXJyZW50XSArICdcIl0nKS5jbGFzc0xpc3QuYWRkKCdtYXJrLS1hY3RpdmUnKTtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpuZXh0LW1hcmsnLCB0aGlzLmN1cnJlbnQsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGUsIGVsKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1tYXJrcycpLnZhbHVlID0gMDtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3VuZm9sZGVkJyk7XHJcbiAgICB0aGlzLmFjdGl2YXRlTGlzdEl0ZW0oMSplbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gIH0sXHJcbiAgZm9sZExpc3QoZSwgZWwpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgaWYgKHZhbCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyk7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZVNldHRpbmdzID0gdGhpcy50b2dnbGVNYXBbdmFsXTtcclxuXHJcbiAgICAgIHRoaXMudG9nZ2xlKCd0ZXh0JywgdG9nZ2xlU2V0dGluZ3NbMF0pO1xyXG4gICAgICB0aGlzLnRvZ2dsZSgnbm90ZScsIHRvZ2dsZVNldHRpbmdzWzFdKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZU5vdGUoZSwgZWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLW1hcmtzJykudmFsdWUgPSAwO1xyXG4gICAgZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlJylbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndW5mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZSh0eXBlLCBzaG93KSB7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fJyArIHR5cGUpKVxyXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3RbbWV0aF0oJ3VuZm9sZGVkJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1ldGEnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGNvbnN0IHllcyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5ZXMnKTtcclxuICAgICAgY29uc3Qgbm8gPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm8nKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19udW1iZXItbWFya3MnKS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19jcmVhdGVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fbGFzdC1tb2RpZmllZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG5cclxuICAgICAgWydzeW5jZWQnLCAnaW1tdXQnXVxyXG4gICAgICAgIC5mb3JFYWNoKGZpZWxkID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX18nICsgZmllbGQpLmlubmVyVGV4dCA9IGVudHJ5W2ZpZWxkXSA/IHllcyA6IG5vKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgcmV0dXJuIChkYXRlXHJcbiAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ2FjdGl2YXRlQm9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdkZWFjdGl2YXRlQm9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZSc6ICdhY3RpdmF0ZU5vdGVzJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ2RlYWN0aXZhdGVOb3RlcycsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJzogJ29uTm90ZXNTdGF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLXBhZ2UnOiAncGFnZUFjdGlvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzY3JvbGwnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVCb29rbWFyaygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3Njcm9sbCcsIGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdub3RlcycsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZU5vdGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnbm90ZXMnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZSh0eXBlLCBvbikge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS0nICsgdHlwZSk7XHJcbiAgICBpZiAob24pIHtcclxuICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUFjdGlvbihlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUuYm9va21hcmspIHRoaXMuYWN0aXZhdGVCb29rbWFyaygpO1xyXG4gIH0sXHJcbiAgb25Ob3Rlc1N0YXRlKG5vdGVzKSB7XHJcbiAgICBpZiAobm90ZXMpIHRoaXMuYWN0aXZhdGVOb3RlcygpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbm90ZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWRkLW5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICd0bW5vdGVkZWxldGUnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZW1pbmltaXplJzogJ3RvZ2dsZU5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVzYXZlJzogJ3NhdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcjZm9sZC1wYWdlLW5vdGVzJzogJ3RvZ2dsZU5vdGVzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBub3RlczogW10sXHJcbiAgbm90ZUVsczoge30sXHJcbiAgaWQ6IDAsXHJcbiAgY3VycmVudENvbG9yOiAneWVsbG93JyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsID0gdGFiLnVybDtcclxuICAgICAgX1NUT1JFLmdldCgncGFnZW5vdGVzJykudGhlbihwYWdlbm90ZXMgPT4ge1xyXG4gICAgICAgIHBhZ2Vub3RlcyA9IHBhZ2Vub3RlcyAmJiBwYWdlbm90ZXNbdXJsXSA/IHBhZ2Vub3Rlc1t1cmxdIDogbnVsbDtcclxuICAgICAgICBsZXQgbCwgaWQ7XHJcbiAgICAgICAgaWYgKHBhZ2Vub3RlcyAmJiAobCA9IHBhZ2Vub3Rlcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICB0aGlzLm5vdGVzID0gcGFnZW5vdGVzO1xyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IHRoaXMuYWRkTm90ZShwYWdlbm90ZXNbbF0pO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gTWF0aC5tYXgodGhpcy5pZCwgaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdCghIXRoaXMubm90ZXMubGVuZ3RoKTtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlTm90ZXMobnVsbCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2F2ZShlLCBlbCkge1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmdldEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICBub3RlLnRleHQgPSBlbC5wcmV2aW91c1NpYmxpbmcudmFsdWU7XHJcbiAgICAgIG5vdGUubmFtZSA9IGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG1ub3RlX19oZWFkZXInKVswXS52YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlLW5vdGUnLCB0aGlzLnVybCwgdGhpcy5ub3Rlcyk7XHJcbiAgfSxcclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gW107XHJcbiAgICB0aGlzLm5vdGVFbHMgPSB7fTtcclxuICAgIHRoaXMuaWQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZXMnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH0sXHJcblxyXG4gIGFkZE5vdGUobm90ZSkge1xyXG4gICAgbm90ZSA9IG5vdGUudHlwZSA/IG51bGwgOiBub3RlO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZXMnKTtcclxuICAgIGNvbnN0IG5vdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGUtdGVtcGxhdGUnKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IG5vdGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgIGNvbnN0IGhlYWRlciA9IG5vdGVFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bW5vdGVfX2hlYWRlcicpWzBdO1xyXG4gICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG5cclxuICAgIGxldCBpZDtcclxuICAgIGlmIChub3RlKSB7XHJcbiAgICAgIGlkID0gbm90ZUVsLmlkID0gbm90ZS5pZDtcclxuICAgICAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSBub3RlLnRleHQgfHwgJyc7XHJcbiAgICAgIGhlYWRlci52YWx1ZSA9IG5vdGUubmFtZSB8fCAnJztcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIG5vdGUuY29sb3IpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlkID0gbm90ZUVsLmlkID0gKyt0aGlzLmlkO1xyXG4gICAgICB0aGlzLm5vdGVzLnB1c2goeyBpZCwgdGV4dDogJycsIGNvbG9yOiB0aGlzLmN1cnJlbnRDb2xvciB9KTtcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyB0aGlzLmN1cnJlbnRDb2xvcik7XHJcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobm90ZUVsLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgQXJyYXkuZnJvbShub3RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSlcclxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpKTtcclxuXHJcbiAgICB0aGlzLm5vdGVFbHNbaWRdID0gbm90ZUVsO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU2VsZWN0KHRydWUpO1xyXG5cclxuICAgIHJldHVybiBpZDtcclxuICB9LFxyXG4gIGNoYW5nZUNvbG9yKGUsIGVsKSB7XHJcbiAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmN1cnJlbnRDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgdGhpcy5ub3RlRWxzW2lkXS5jbGFzc05hbWUgPSB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTmFtZS5yZXBsYWNlKC8tLVxcdysvLCAnLS0nICsgY29sb3IpO1xyXG4gICAgdGhpcy5nZXRCeUlkKGlkKS5jb2xvciA9IGNvbG9yO1xyXG4gICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgIG5vdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub3RlKTtcclxuICAgIGRlbGV0ZSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgdGhpcy5ub3Rlcy5zcGxpY2UodGhpcy5ub3Rlcy5pbmRleE9mKHRoaXMuZ2V0QnlJZChpZCkpLCAxKTtcclxuICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVTZWxlY3Qoc2hvdykge1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpLmNsYXNzTGlzdFttZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgfSxcclxuICB0b2dnbGVQYWxldHRlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcclxuICAgIGNvbnN0IHBhbGV0dGUgPSBub3RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGVwYWxldHRlJylbMF07XHJcbiAgICBwYWxldHRlLmNsYXNzTGlzdC50b2dnbGUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgaWYgKCFwYWxldHRlLmNsYXNzTGlzdC5jb250YWlucygndS1kaXNwbGF5LS1ub25lJykpIHtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZShlLCBlbCkge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcbiAgICBub3RlLmNsYXNzTGlzdC50b2dnbGUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICBpZiAoIW5vdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0bW5vdGUtLW1pbicpKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykudmFsdWUgPSAwO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoZSwgZWwpIHtcclxuICAgIGlmIChlbC52YWx1ZSA9PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubm90ZUVscykge1xyXG4gICAgICAgIHRoaXMubm90ZUVsc1tpZF0uY2xhc3NMaXN0LmFkZCgndG1ub3RlLS1taW4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG5vdGUsIHRleHRhcmVhO1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm5vdGVFbHMpIHtcclxuICAgICAgICBub3RlID0gdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgICAgICBub3RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgICAgdGhpcy5hZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm90ZXMuZmluZChub3RlID0+IG5vdGUuaWQgPT0gaWQpO1xyXG4gIH0sXHJcbiAgYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSkge1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBub3RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgMTAgKyAncHgnO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3Nob3dFbnRyeVNwZWNpZmljVGFicydcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhYl9fdGl0bGUnOiAndG9nZ2xlJyxcclxuICAgICAgICAnLnRhYl9fbmFtZSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICcudGFiX190b2dnbGUnOiAndG9nZ2xlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdGFiczoge30sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKCFzZXR0aW5ncy5zYikgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0YWJTZXR0aW5ncyA9IHNldHRpbmdzLnNiLnRhYnM7XHJcbiAgICAgIGZvciAobGV0IHRhYiBpbiB0YWJTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMudGFic1t0YWJdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tJyArIHRhYik7XHJcbiAgICAgICAgaWYgKHRhYlNldHRpbmdzW3RhYl0udW5mb2xkZWQpIHRoaXMub3Blbih0YWIpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5jbG9zZSh0YWIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvcGVuKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LnJlbW92ZSgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIGNsb3NlKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LmFkZCgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZShlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5ub2RlTmFtZSA9PT0gJ0gyJyA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgY29uc3QgdGFiID0gaWQuc3BsaXQoJy0tJykucG9wKCk7XHJcbiAgICBjb25zdCB0YWJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIHRhYkVsLmNsYXNzTGlzdC50b2dnbGUoJ3RhYi0tZm9sZGVkJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c2lkZWJhci10YWInLCB0YWIsICF0YWJFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi0tZm9sZGVkJykpO1xyXG4gIH0sXHJcbiAgc2hvd0VudHJ5U3BlY2lmaWNUYWJzKCkge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWItLWVudHJ5JykpXHJcbiAgICAgIC5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLXRhZ3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhZ3NfX3JlbW92ZSc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAgICcjYWRkLXRhZyc6ICdhZGRUYWcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgdGFncyA9IGVudHJ5LnRhZyA/IGVudHJ5LnRhZy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJykuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXJUYWcodGFnKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFncycpO1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSAndGFnc19faXRlbSB1LW92ZXJmbG93LS1lbGxpcHNpcyc7XHJcbiAgICBkZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX3JlbW92ZSc7XHJcbiAgICBkZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhZycsIHRhZyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSB0YWc7XHJcbiAgICBkZWwuYXBwZW5kQ2hpbGQoeCk7XHJcbiAgICBlbC5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICB9LFxyXG4gIGFkZFRhZygpIHtcclxuICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFnJyk7XHJcbiAgICBsZXQgdGFnID0gaW5wLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghdGFnKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2FkZDp0YWcnLCB0YWcsIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBpbnAudmFsdWUgPSAnJztcclxuICAgIHRhZy5zcGxpdCgnICcpLmZvckVhY2godGFnID0+IHRoaXMucmVuZGVyVGFnKHRhZykpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZTp0YWcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJyksIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGhlbWVzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy50aGVtZS1vcHQnOiAnb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0aGVtZTogJ2RlZmF1bHQnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IHRoZW1lID0gc2V0dGluZ3MgJiYgc2V0dGluZ3Muc2IgJiYgc2V0dGluZ3Muc2IudGhlbWUgPyBzZXR0aW5ncy5zYi50aGVtZSA6ICdkZWZhdWx0JztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRoZW1lLS0ke3RoZW1lfWApLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvbkNoYW5nZShlLCBlbCkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJywgdGhlbWUpO1xyXG4gICAgdGhpcy51cGRhdGUodGhlbWUpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHRoZW1lKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gJ3RleHRtYXJrZXItc2lkZWJhci0tZGFyayc7XHJcbiAgICBpZiAodGhlbWUgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnc2lkZWJhcicsXHJcbiAgdHlwZTogJ3ByaXZpbGVnZWQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnY2hhbmdlOmJnLXNldHRpbmcnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAncmVtb3ZlOnRhZycsXHJcbiAgICAgICdhZGQ6dGFnJyxcclxuICAgICAgJ29wZW46YWRkb24tcGFnZShzYiknLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnLFxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnXHJcbiAgICBdXHJcbiAgfVxyXG59KVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=