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
  frame: 0,
  buttons: [],
  autoinit: function autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction: function markAction(e, el) {
    if (el.hasAttribute('disabled')) return;
    this.emit('sidebar:' + el.getAttribute('data-action'), null, null, {
      tab: 'active',
      frameId: this.frame
    });
  },
  activate: function activate(markInfos, sender) {
    this.frame = sender && sender.frameId ? sender.frameId : 0;
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
      autocs: true,
      iframes: true
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
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImVudiIsImVudHJ5IiwibG9ja2VkIiwidXBkYXRlRW50cnkiLCJpc0FyciIsIkFycmF5IiwiaXNBcnJheSIsImN1cnJlbnRFbnRyeSIsInB1c2giLCJlbWl0IiwidXBkYXRlRW50cnlPbkZvdW5kIiwicmVzdW1lIiwiX2dldF9tb2RlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X2F1dG9zYXZlIiwiaGlzdG9yeSIsImF1dG9zYXZlIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsImF1dG9pbml0IiwidGFiIiwicG93ZXIiLCJvbiIsInBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvblN0YXJ0IiwibW9kZSIsInRvZ2dsZSIsInNpZGViYXIiLCJlbCIsInJlbmRlciIsImhlYWRlciIsInVwZGF0ZU5hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsInRpdGxlIiwiRE9NIiwiY2xpY2siLCJyZXRyeUJ0blNob3duIiwic2F2ZUJ0biIsInJldHJ5QnRuIiwidG9nZ2xlU2F2ZSIsInNhdmUiLCJyZXRyeVJlc3RvcmF0aW9uIiwiZGVhY3RpdmF0ZVJldHJ5IiwibWV0aCIsImFjdGl2YXRlU2F2ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVSZXRyeSIsInRvZ2dsZUltbXV0IiwiZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInVwZGF0ZUltbXV0IiwiaW1tdXQiLCJvblBhZ2VTdGF0ZSIsInN0YXRlIiwicmV0cnlBY3RpdmUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiZnJhbWUiLCJidXR0b25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWFya0FjdGlvbiIsImhhc0F0dHJpYnV0ZSIsImZyYW1lSWQiLCJhY3RpdmF0ZSIsIm1hcmtJbmZvcyIsInNlbmRlciIsImZvckVhY2giLCJidG4iLCJ0eXBlIiwiYm9va21hcmsiLCJkZWFjdGl2YXRlIiwiY2hhbmdlIiwiYXV0b21hcmtFbmFibGVkIiwic3luYyIsIm1pc2MiLCJtYXJrbWV0aG9kIiwibG9jYWwiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJmcmFnUmlnaHQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ0xlZnQiLCJzIiwiTWF0aCIsImNlaWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY291bnQiLCJtIiwiYm94IiwiaW5wdXQiLCJleGFtcGxlVGV4dCIsImJ1dHRvbiIsImNvbG9yIiwiY2JCb3giLCJjYiIsImNiTGFiZWwiLCJjYlNwYW4iLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZENoaWxkIiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic3R5bGVzIiwic3BsaXQiLCJsIiwiaSIsImluY2x1ZGVzIiwic2VsZWN0IiwiYXBwbHlDb2xvciIsInRvZ2dsZU1hcmtlckJ1dHRvbnMiLCJzaG93Iiwic2VsZWN0aW9uIiwibWFya3MiLCJtYXJrSURzIiwiY3VycmVudCIsInNldEZpbHRlcnMiLCJ0b2dnbGVNYXAiLCJzZXRNYXJrcyIsInJlbmRlclNWR0ZpbHRlcnMiLCJyZW5kZXJMaXN0IiwiY29uY2F0IiwibWFwIiwiZmluZCIsIm1hcmsiLCJzZXRNYXJrSURzIiwiaWRzIiwiYm9keSIsInRtcGwiLCJjb2xvcnMiLCJjIiwiX1NFVFRJTkdTIiwiTk9URV9DT0xPUlMiLCJ0b0xvd2VyQ2FzZSIsImNvbnZlcnRIZXgiLCJzdWJzdHIiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJoZXgiLCJOdW1iZXIiLCJtYXJrVG1wbCIsImZyYWdtZW50IiwibWFya3NDb250YWluZXIiLCJtYXJrQ29udGFpbmVyIiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHQiLCJpbmRleE9mIiwiaGFzTm90ZSIsIm5vdGUiLCJub3RlQ29sb3IiLCJub3RlVGV4dCIsIm5vdGVCdG4iLCJub3RlTm9kZSIsImJvcmRlckNvbG9yIiwibmF2IiwiZGlyIiwiYWN0aXZhdGVMaXN0SXRlbSIsImN1cnJlbnRJdGVtIiwicXVlcnlTZWxlY3RvciIsImZvbGRMaXN0IiwidmFsIiwidG9nZ2xlU2V0dGluZ3MiLCJ0b2dnbGVOb3RlIiwieWVzIiwiaTE4biIsImdldE1lc3NhZ2UiLCJubyIsIm9wdGltaXplRGF0ZVN0cmluZyIsIkRhdGUiLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwibGFzdCIsImZpZWxkIiwiZGF0ZSIsInJlcGxhY2UiLCJwIiwicSIsImFjdGl2YXRlQm9va21hcmsiLCJkZWFjdGl2YXRlQm9va21hcmsiLCJhY3RpdmF0ZU5vdGVzIiwiZGVhY3RpdmF0ZU5vdGVzIiwicGFnZUFjdGlvbiIsIm9uTm90ZXNTdGF0ZSIsIm5vdGVzIiwibm90ZUVscyIsImN1cnJlbnRDb2xvciIsInVybCIsImFkZE5vdGUiLCJtYXgiLCJ0b2dnbGVTZWxlY3QiLCJ0b2dnbGVOb3RlcyIsImdldEJ5SWQiLCJwcmV2aW91c1NpYmxpbmciLCJjb250YWluZXIiLCJub3RlRWwiLCJ0ZXh0YXJlYSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJjaGFuZ2VDb2xvciIsInJlbW92ZU5vdGUiLCJyZW1vdmVDaGlsZCIsInNwbGljZSIsInRvZ2dsZVBhbGV0dGUiLCJwYWxldHRlIiwiYWRqdXN0VGV4dGFyZWFIZWlnaHQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwic2IiLCJ0YWJTZXR0aW5ncyIsInVuZm9sZGVkIiwib3BlbiIsImNsb3NlIiwibm9kZU5hbWUiLCJwb3AiLCJ0YWJFbCIsInNob3dFbnRyeVNwZWNpZmljVGFicyIsInRhZ3MiLCJ0YWciLCJyZW5kZXJUYWciLCJkZWwiLCJ4IiwiYWRkVGFnIiwiaW5wIiwidHJpbSIsInJlbW92ZVRhZyIsInRoZW1lIiwidXBkYXRlIiwib25DaGFuZ2UiLCJDT05ORUNUSU9OIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInNob3J0Y3V0cyIsInoiLCJ5IiwiYiIsImQiLCJ3IiwibiIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJjbSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwibmFtaW5nIiwiZG93bmxvYWQiLCJjb3B5Iiwic2F2ZU5vdGUiLCJzb3J0ZWQiLCJ2aWV3IiwicHAiLCJpZ25vcmVIYXNoIiwiYXV0b2NzIiwiaWZyYW1lcyIsImJtaWNvbiIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsIm92ZXJ3cml0ZSIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiY2hhbmdlZE5vdGUiLCJlcnJvck5vdGUiLCJ2aXBOb3RlIiwiY3VzdG9tU2VhcmNoIiwidG11aXBvcyIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJtZXRhIiwiYWN0aW9ucyIsImxpbmtzIiwidGhlbWVzIiwiZW50cmllcyIsIk1BWF9FTlRSWV9OQU1FX0NIQVJTIiwiTUFYX0xPR19FTlRSSUVTIiwiVFVSUVVPSVNFIiwiR1JFRU4iLCJZRUxMT1ciLCJPUkFOR0UiLCJSRUQiLCJQVVJQTEUiLCJCTFVFIiwiV0hJVEUiLCJzcmMiLCJ0YXJnZXQiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwiYXV0b1BhdXNlIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiZiIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2V4dHJhIiwic2V0Iiwid2luZG93IiwiZXJyb3IiLCJmaWxlIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwibG9jYXRpb24iLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwidGltZSIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiT05FT0ZGIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidW5kZWZpbmVkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYXJlYSIsImluaXQiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImxvZ3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBRVNBLEssR0FBQUEsVztRQUFPQyxlLEdBQUFBLDZCO1FBQWlCQyxPLEdBQUFBLG1CO1FBQVNDLE8sR0FBQUEsZTtRQUFTQyxVLEdBQUFBLHFCO1FBQVlDLE0sR0FBQUEsYTtRQUFRQyxLLEdBQUFBLFc7UUFBT0MsSyxHQUFBQSxpQjtRQUFPQyxhLEdBQUFBLHlCO1FBQWVDLFMsR0FBQUEsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hwRzs7cUJBRWUsSUFBSUosYUFBSixDQUFXO0FBQ3hCSyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsc0JBQWdCLGVBRGI7QUFFSCxxQkFBZSxhQUZaO0FBR0gscUJBQWUsb0JBSFo7QUFJSCw2QkFBdUIsYUFKcEI7QUFLSCwrQkFBeUI7QUFMdEI7QUFEQyxHQURnQjtBQVd4QkMsS0FBRyxFQUFFLFNBWG1CO0FBWXhCQyxPQUFLLEVBQUUsSUFaaUI7QUFheEJDLFFBQU0sRUFBRSxLQWJnQjtBQWV4QkMsYUFmd0IsdUJBZVpGLEtBZlksRUFlTDtBQUNqQixRQUFJQSxLQUFKLEVBQVc7QUFDVCxVQUFNRyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxLQUFkLENBQWQ7QUFDQSxVQUFNTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUtOLEtBQTVCO0FBRUEsV0FBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsSUFBZUUsS0FBZixJQUF3QkgsS0FBSyxDQUFDQyxNQUE1Qzs7QUFFQSxVQUFJLENBQUMsS0FBS0EsTUFBTixJQUFnQkUsS0FBcEIsRUFBMkI7QUFDekIsYUFBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsT0FGRCxNQUdLLElBQUksS0FBS0MsTUFBTCxJQUFlLENBQUNFLEtBQXBCLEVBQTJCO0FBQzlCLFlBQUksS0FBS0gsS0FBTCxJQUFjSSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxLQUFLTCxLQUFuQixDQUFsQixFQUE2QyxLQUFLQSxLQUFMLENBQVdPLElBQVgsQ0FBZ0JQLEtBQWhCLEVBQTdDLEtBQ0ssS0FBS0EsS0FBTCxHQUFhLENBQUNBLEtBQUQsQ0FBYjtBQUNOOztBQUVELFVBQUlNLFlBQUosRUFBa0IsS0FBS0UsSUFBTCxDQUFVLHNCQUFWLEVBQWtDLEtBQUtSLEtBQXZDLEVBQWxCLEtBQ0ssS0FBS1EsSUFBTCxDQUFVLGNBQVYsRUFBMEIsS0FBS1IsS0FBL0I7QUFDTjtBQUNGLEdBakN1QjtBQWtDeEJTLG9CQWxDd0IsOEJBa0NMVCxLQWxDSyxFQWtDRTtBQUN4QixRQUFJQSxLQUFKLEVBQVc7QUFDVCxXQUFLRSxXQUFMLENBQWlCRixLQUFqQjs7QUFDQSxVQUFJLENBQUNJLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxLQUFkLENBQUwsRUFBMkI7QUFDekIsYUFBS1EsSUFBTCxDQUFVLHdCQUFWLEVBQW9DUixLQUFwQztBQUNEO0FBQ0Y7QUFDRixHQXpDdUI7QUEyQ3hCVSxRQTNDd0Isb0JBMkNmO0FBQ1AsU0FBS1YsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtPLElBQUwsQ0FBVSxlQUFWO0FBQ0QsR0EvQ3VCO0FBa0R4QkcsV0FsRHdCLHVCQWtEWjtBQUNWLFdBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ0MsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFILE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNJLFFBQXJCLElBQWlDSixPQUFPLENBQUNJLFFBQVIsQ0FBaUJDLEtBQWpCLENBQXVCQyxNQUE1RCxFQUFvRSxPQUFPLElBQVA7QUFDcEUsYUFBTyxLQUFQO0FBQ0QsS0FITSxDQUFQO0FBSUQsR0F2RHVCO0FBd0R4QkMsZUF4RHdCLDJCQXdEUjtBQUNkLFdBQU9SLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ0MsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFILE9BQU8sRUFBSTtBQUMvRCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNJLFFBQXpCLEVBQW1DLE9BQU8sS0FBUDtBQUNuQyxhQUFPSixPQUFPLENBQUNJLFFBQVIsQ0FBaUJJLE9BQWpCLENBQXlCQyxRQUFoQztBQUNELEtBSE0sQ0FBUDtBQUlELEdBN0R1QjtBQThEeEJDLGVBOUR3QiwyQkE4RFI7QUFDZCxXQUFPWCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDSSxRQUFaO0FBQUEsS0FBdEQsQ0FBUDtBQUNELEdBaEV1QjtBQWlFeEJPLGNBakV3QiwwQkFpRVQ7QUFDYixXQUFPWixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDSSxRQUFSLENBQWlCUSxPQUFyQjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQW5FdUI7QUFvRXhCQyxnQkFwRXdCLDRCQW9FUDtBQUNmLFdBQU9kLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ0MsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFILE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNjLFNBQVIsSUFBcUIsSUFBekI7QUFBQSxLQUF0RCxDQUFQO0FBQ0Q7QUF0RXVCLENBQVgsQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBO0FBRUEsSUFBSXJDLGNBQUosQ0FBWTtBQUNWTyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gscUJBQWUsU0FEWjtBQUVILHVCQUFpQixPQUZkO0FBR0gsc0JBQWdCLFFBSGI7QUFJSCw4QkFBd0IsUUFKckI7QUFLSCxnQ0FBMEI7QUFMdkI7QUFEQyxHQURFO0FBV1Y4QixVQVhVLHNCQVdDO0FBQ1QsU0FBS3BCLElBQUwsQ0FBVSxnQkFBVixFQUE0QjtBQUFFcUIsU0FBRyxFQUFFO0FBQVAsS0FBNUI7QUFDRCxHQWJTO0FBZVZDLE9BZlUsaUJBZUpDLEVBZkksRUFlQTtBQUNSLFFBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLDRCQUF4QixDQUFwQjtBQUNBLFFBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQUFoQjs7QUFFQSxRQUFJSCxFQUFKLEVBQVE7QUFDTkMsaUJBQVcsQ0FBQ0ksU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsaUJBQTFCO0FBQ0FGLGFBQU8sQ0FBQ0MsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsaUJBQXpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xOLGlCQUFXLENBQUNJLFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCLGlCQUE3QjtBQUNBSCxhQUFPLENBQUNDLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGlCQUF0QjtBQUNEO0FBQ0YsR0ExQlM7QUEyQlZFLFNBM0JVLHFCQTJCQTtBQUFBOztBQUNSL0MsdUJBQU91QixHQUFQLENBQVcsTUFBWCxFQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQXdCLElBQUk7QUFBQSxhQUFJLEtBQUksQ0FBQ1YsS0FBTCxDQUFXVSxJQUFYLENBQUo7QUFBQSxLQUE1QjtBQUNELEdBN0JTO0FBOEJWQyxRQTlCVSxrQkE4Qkh6QyxLQTlCRyxFQThCSTtBQUNaLFFBQU0wQyxPQUFPLEdBQUdULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBaEI7O0FBQ0EsUUFBSWxDLEtBQUssSUFBSVIsbUJBQU9TLE1BQXBCLEVBQTRCO0FBQzFCeUMsYUFBTyxDQUFDTixTQUFSLENBQWtCQyxHQUFsQixDQUFzQiw0QkFBdEI7QUFDRCxLQUZELE1BRU87QUFDTEssYUFBTyxDQUFDTixTQUFSLENBQWtCRSxNQUFsQixDQUF5Qiw0QkFBekI7QUFDRDtBQUNGO0FBckNTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBQ0E7Ozs7OztBQUVBLElBQUkvQyxpQkFBSixDQUFlO0FBQ2JvRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsc0JBQWdCLFFBRGI7QUFFSCw4QkFBd0I7QUFGckI7QUFEQyxHQUZLO0FBU2I4QyxRQVRhLGtCQVNONUMsS0FUTSxFQVNDO0FBQ1osUUFBTTZDLE1BQU0sR0FBRyxLQUFLRixFQUFwQjtBQUVBLFFBQUksQ0FBQzNDLEtBQUwsRUFBWTZDLE1BQU0sQ0FBQ1QsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsaUJBQXJCLEVBQVosS0FDSyxJQUFJakMsS0FBSyxDQUFDQyxPQUFOLENBQWNMLEtBQWQsQ0FBSixFQUEwQjtBQUUvQjZDLFVBQU0sQ0FBQ1QsU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsaUJBQXhCO0FBQ0EsU0FBS1EsVUFBTCxDQUFnQjlDLEtBQUssQ0FBQytDLElBQXRCO0FBQ0QsR0FqQlk7QUFtQmJELFlBbkJhLHNCQW1CRkMsSUFuQkUsRUFtQkk7QUFDZixRQUFNSixFQUFFLEdBQUcsS0FBS0EsRUFBTCxDQUFRSyxzQkFBUixDQUErQixjQUEvQixFQUErQyxDQUEvQyxDQUFYO0FBQ0FMLE1BQUUsQ0FBQ00sU0FBSCxHQUFlRixJQUFmO0FBQ0FKLE1BQUUsQ0FBQ08sS0FBSCxHQUFXSCxJQUFYO0FBQ0Q7QUF2QlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7Ozs7QUFFQSxJQUFJeEQsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxxQkFBZSxZQURaO0FBRUgsMEJBQW9CLFlBRmpCO0FBR0gscUNBQStCLFlBSDVCO0FBSUgsK0JBQXlCLGdCQUp0QjtBQUtILHFCQUFlLGdCQUxaO0FBTUgseUJBQW1CLGNBTmhCO0FBT0gsOEJBQXdCLGVBUHJCO0FBUUgsdUJBQWlCLGlCQVJkO0FBU0gsc0JBQWdCLGFBVGI7QUFVSCxvQkFBYyxhQVZYO0FBV0gsZ0NBQTBCO0FBWHZCLEtBREM7QUFjTnFELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCwrQkFBdUIsa0JBRGxCO0FBRUwsOEJBQXNCLE1BRmpCO0FBR0wsbUJBQVc7QUFITjtBQURKO0FBZEMsR0FGSztBQXlCYkMsZUFBYSxFQUFFLEtBekJGO0FBMEJiQyxTQUFPLEVBQUVyQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBMUJJO0FBMkJicUIsVUFBUSxFQUFFdEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQTNCRztBQTZCYk4sVUE3QmEsc0JBNkJGO0FBQ1QsU0FBSzRCLFVBQUw7QUFDRCxHQS9CWTtBQWlDYkMsTUFqQ2Esa0JBaUNOO0FBQ0wsU0FBS2pELElBQUwsQ0FBVSxzQkFBVixFQUFrQztBQUFFcUIsU0FBRyxFQUFFO0FBQVAsS0FBbEM7QUFDRCxHQW5DWTtBQW9DYjZCLGtCQXBDYSw4QkFvQ007QUFDakIsU0FBS2xELElBQUwsQ0FBVSwyQkFBVixFQUF1QztBQUFFcUIsU0FBRyxFQUFFO0FBQVAsS0FBdkM7QUFDQSxTQUFLOEIsZUFBTDtBQUNELEdBdkNZO0FBd0NiSCxZQXhDYSx3QkF3Q0E7QUFBQTs7QUFDWGhFLHVCQUFPdUIsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLFVBQUFNLFFBQVEsRUFBSTtBQUN0QyxVQUFNc0MsSUFBSSxHQUFHdEMsUUFBUSxHQUFHLEtBQUgsR0FBVyxRQUFoQzs7QUFDQSxXQUFJLENBQUNnQyxPQUFMLENBQWFsQixTQUFiLENBQXVCd0IsSUFBdkIsRUFBNkIsaUJBQTdCO0FBQ0QsS0FIRDtBQUlELEdBN0NZO0FBOENiQyxjQTlDYSwwQkE4Q1c7QUFBQSxRQUFYOUIsRUFBVyx1RUFBTixJQUFNO0FBQ3RCLFFBQUlBLEVBQUosRUFBUSxLQUFLdUIsT0FBTCxDQUFhUSxlQUFiLENBQTZCLFVBQTdCLEVBQVIsS0FDSyxLQUFLUixPQUFMLENBQWFTLFlBQWIsQ0FBMEIsVUFBMUIsRUFBc0MsSUFBdEM7QUFDTixHQWpEWTtBQWtEYkMsZ0JBbERhLDRCQWtESTtBQUNmLFNBQUtILFlBQUwsQ0FBa0IsS0FBbEI7QUFDRCxHQXBEWTtBQXFEYkksZUFyRGEsMkJBcURHO0FBQ2QsUUFBSSxDQUFDLEtBQUtaLGFBQVYsRUFBeUI7QUFDdkIsV0FBS0UsUUFBTCxDQUFjbkIsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0IsaUJBQS9CO0FBQ0EsV0FBS2UsYUFBTCxHQUFxQixJQUFyQjtBQUNEO0FBQ0YsR0ExRFk7QUEyRGJNLGlCQTNEYSw2QkEyREs7QUFDaEIsUUFBSSxLQUFLTixhQUFULEVBQXdCO0FBQ3RCLFdBQUtFLFFBQUwsQ0FBY25CLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGlCQUE1QjtBQUNBLFdBQUtnQixhQUFMLEdBQXFCLEtBQXJCO0FBQ0Q7QUFDRixHQWhFWTtBQWlFYmEsYUFqRWEsdUJBaUVEQyxDQWpFQyxFQWlFRXhCLEVBakVGLEVBaUVNO0FBQ2pCQSxNQUFFLEdBQUdBLEVBQUUsQ0FBQ1AsU0FBSCxDQUFhZ0MsUUFBYixDQUFzQixlQUF0QixJQUF5Q3pCLEVBQXpDLEdBQThDQSxFQUFFLENBQUMwQixVQUF0RDtBQUNBMUIsTUFBRSxDQUFDUCxTQUFILENBQWFLLE1BQWIsQ0FBb0IsUUFBcEI7QUFDQSxTQUFLakMsSUFBTCxDQUFVLGVBQVYsRUFBMkJtQyxFQUFFLENBQUNQLFNBQUgsQ0FBYWdDLFFBQWIsQ0FBc0IsUUFBdEIsQ0FBM0IsRUFBNEQ7QUFBRXZDLFNBQUcsRUFBRTtBQUFQLEtBQTVEO0FBQ0QsR0FyRVk7QUFzRWJ5QyxhQXRFYSx1QkFzRUR0RSxLQXRFQyxFQXNFTTtBQUNqQixRQUFJQSxLQUFKLEVBQVc7QUFDVCxVQUFNNEQsSUFBSSxHQUFHNUQsS0FBSyxDQUFDdUUsS0FBTixHQUFjLEtBQWQsR0FBc0IsUUFBbkM7QUFDQXRDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENFLFNBQTlDLENBQXdEd0IsSUFBeEQsRUFBOEQsUUFBOUQ7QUFDQTNCLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0UsU0FBdEMsQ0FBZ0RFLE1BQWhELENBQXVELGlCQUF2RDtBQUNELEtBSkQsTUFJTztBQUNMTCxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NFLFNBQXRDLENBQWdEQyxHQUFoRCxDQUFvRCxpQkFBcEQ7QUFDRDtBQUNGLEdBOUVZO0FBK0VibUMsYUEvRWEsdUJBK0VEQyxLQS9FQyxFQStFTTtBQUNqQixRQUFJQSxLQUFLLENBQUNDLFdBQVYsRUFBdUIsS0FBS1QsYUFBTDtBQUN4QjtBQWpGWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUEsSUFBSTFFLGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOc0QsT0FBRyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQUNMLGlCQUFTLE1BREo7QUFFTCx1QkFBZSxNQUZWO0FBR0wsdUJBQWU7QUFIVjtBQURKO0FBREMsR0FGSztBQVlidUIsTUFaYSxnQkFZUlIsQ0FaUSxFQVlMeEIsRUFaSyxFQVlEO0FBQ1ZBLE1BQUUsR0FBR0EsRUFBRSxDQUFDUCxTQUFILENBQWFnQyxRQUFiLENBQXNCLE1BQXRCLElBQWdDekIsRUFBaEMsR0FBcUNBLEVBQUUsQ0FBQzBCLFVBQTdDO0FBQ0EsU0FBSzdELElBQUwsQ0FBVSxxQkFBVixFQUFpQ21DLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBakM7QUFDRDtBQWZZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSXJGLGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxzQkFBZ0IsVUFEYjtBQUVILHdCQUFrQjtBQUZmLEtBREM7QUFLTnFELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCxnQ0FBd0I7QUFEbkI7QUFESjtBQUxDLEdBRks7QUFhYnlCLE9BQUssRUFBRSxDQWJNO0FBY2JDLFNBQU8sRUFBRSxFQWRJO0FBZ0JibEQsVUFoQmEsc0JBZ0JGO0FBQ1QsU0FBS2tELE9BQUwsR0FBZTFFLEtBQUssQ0FBQzJFLElBQU4sQ0FBVyxLQUFLcEMsRUFBTCxDQUFRcUMsb0JBQVIsQ0FBNkIsUUFBN0IsQ0FBWCxDQUFmO0FBQ0QsR0FsQlk7QUFtQmJDLFlBbkJhLHNCQW1CRmQsQ0FuQkUsRUFtQkN4QixFQW5CRCxFQW1CSztBQUNoQixRQUFJQSxFQUFFLENBQUN1QyxZQUFILENBQWdCLFVBQWhCLENBQUosRUFBaUM7QUFDakMsU0FBSzFFLElBQUwsQ0FBVSxhQUFhbUMsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixhQUFoQixDQUF2QixFQUF1RCxJQUF2RCxFQUE2RCxJQUE3RCxFQUFtRTtBQUFFL0MsU0FBRyxFQUFFLFFBQVA7QUFBaUJzRCxhQUFPLEVBQUUsS0FBS047QUFBL0IsS0FBbkU7QUFDRCxHQXRCWTtBQXVCYk8sVUF2QmEsb0JBdUJKQyxTQXZCSSxFQXVCT0MsTUF2QlAsRUF1QmU7QUFDMUIsU0FBS1QsS0FBTCxHQUFhUyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0gsT0FBakIsR0FBMkJHLE1BQU0sQ0FBQ0gsT0FBbEMsR0FBNEMsQ0FBekQ7QUFFQSxTQUFLTCxPQUFMLENBQWFTLE9BQWIsQ0FBcUIsVUFBQUMsR0FBRyxFQUFJO0FBQzFCLFVBQUlDLElBQUksR0FBR0QsR0FBRyxDQUFDWixZQUFKLENBQWlCLGFBQWpCLENBQVg7O0FBQ0EsVUFDRWEsSUFBSSxLQUFLLE1BQVQsSUFDQUEsSUFBSSxLQUFLLGtCQURULElBRUMsT0FBT0osU0FBUyxDQUFDSSxJQUFELENBQWhCLEtBQTJCLFNBQTNCLElBQXdDLENBQUNKLFNBQVMsQ0FBQ0ksSUFBRCxDQUZuRCxJQUdDQSxJQUFJLEtBQUssaUJBQVQsSUFBOEJKLFNBQVMsQ0FBQ0ssUUFKM0MsRUFLRTtBQUNBRixXQUFHLENBQUMxQixlQUFKLENBQW9CLFVBQXBCO0FBQ0EwQixXQUFHLENBQUNuQixVQUFKLENBQWVqQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxVQUFoQztBQUNEO0FBQ0YsS0FYRDtBQVlELEdBdENZO0FBdUNicUQsWUF2Q2Esd0JBdUNBO0FBQ1gsU0FBS2IsT0FBTCxDQUFhUyxPQUFiLENBQXFCLFVBQUFDLEdBQUcsRUFBSTtBQUMxQkEsU0FBRyxDQUFDekIsWUFBSixDQUFpQixVQUFqQixFQUE2QixJQUE3QjtBQUNBeUIsU0FBRyxDQUFDbkIsVUFBSixDQUFlakMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsVUFBN0I7QUFDRCxLQUhEO0FBSUQ7QUE1Q1ksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVBLElBQUk5QyxpQkFBSixDQUFlO0FBQ2JvRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gscUJBQWUsUUFEWjtBQUVILDBCQUFvQixRQUZqQjtBQUdILHFDQUErQixRQUg1QjtBQUlILDJCQUFxQixxQkFKbEI7QUFLSCxvQkFBYztBQUxYLEtBREM7QUFRTnFELE9BQUcsRUFBRTtBQUNIeUMsWUFBTSxFQUFFO0FBQ04sMEJBQWtCLFFBRFo7QUFFTix1QkFBZTtBQUZULE9BREw7QUFLSHhDLFdBQUssRUFBRTtBQUNMLDBCQUFrQjtBQURiO0FBTEo7QUFSQyxHQUZLO0FBcUJieUMsaUJBQWUsRUFBRSxLQXJCSjtBQXVCYmpFLFVBdkJhLHNCQXVCRjtBQUNULFNBQUtnQixNQUFMO0FBQ0QsR0F6Qlk7QUEwQmJBLFFBMUJhLG9CQTBCSjtBQUFBOztBQUNQaEMsV0FBTyxDQUFDQyxPQUFSLENBQWdCaUYsSUFBaEIsQ0FBcUIvRSxHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQUgsT0FBTyxFQUFJO0FBQ3pDLFVBQUlBLE9BQU8sSUFBSUEsT0FBTyxDQUFDSSxRQUFuQixLQUFnQyxDQUFDSixPQUFPLENBQUNpRixJQUFULElBQWlCakYsT0FBTyxDQUFDaUYsSUFBUixDQUFhN0UsUUFBOUQsQ0FBSixFQUE2RTtBQUMzRSxhQUFJLENBQUM0RSxlQUFMLEdBQXVCaEYsT0FBTyxDQUFDSSxRQUFSLENBQWlCOEUsSUFBakIsQ0FBc0JDLFVBQXRCLEtBQXFDLE1BQTVEO0FBQ0EsZUFBT25GLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQlEsT0FBeEI7QUFDRDs7QUFDRCxhQUFPYixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvRixLQUFoQixDQUFzQmxGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBSCxPQUFPLEVBQUk7QUFDakQsWUFBSUEsT0FBTyxJQUFJQSxPQUFPLENBQUNJLFFBQW5CLElBQStCSixPQUFPLENBQUNpRixJQUF2QyxJQUErQyxDQUFDakYsT0FBTyxDQUFDaUYsSUFBUixDQUFhN0UsUUFBakUsRUFBMkU7QUFDekUsZUFBSSxDQUFDNEUsZUFBTCxHQUF1QmhGLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQjhFLElBQWpCLENBQXNCQyxVQUF0QixLQUFxQyxNQUE1RDtBQUNBLGlCQUFPbkYsT0FBTyxDQUFDSSxRQUFSLENBQWlCUSxPQUF4QjtBQUNEOztBQUNELGVBQU8sSUFBUDtBQUNELE9BTk0sQ0FBUDtBQU9ELEtBWkQsRUFhQ1QsSUFiRCxDQWFNLFVBQUFTLE9BQU8sRUFBSTtBQUNmLFVBQUksQ0FBQ0EsT0FBTCxFQUFjLE9BQU8sS0FBUDtBQUNkLFVBQU15RSxhQUFhLEdBQUdqRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IseUJBQXhCLENBQXRCO0FBQ0EsVUFBTWlFLGNBQWMsR0FBR2xFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBdkI7QUFDQSxVQUFNa0UsU0FBUyxHQUFHbkUsUUFBUSxDQUFDb0Usc0JBQVQsRUFBbEI7QUFDQSxVQUFNQyxRQUFRLEdBQUdyRSxRQUFRLENBQUNvRSxzQkFBVCxFQUFqQjtBQUNBLFVBQU1FLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbEYsT0FBWixFQUFxQm1GLE1BQXJCLEdBQThCLENBQXhDLENBQVY7QUFDQSxVQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUFBLFVBQWVDLENBQWY7QUFBQSxVQUFrQkMsR0FBbEI7QUFBQSxVQUF1QkMsS0FBdkI7QUFBQSxVQUE4QkMsV0FBOUI7QUFBQSxVQUEyQ0MsTUFBM0M7QUFBQSxVQUFtREMsS0FBbkQ7QUFBQSxVQUEwREMsS0FBMUQ7QUFBQSxVQUFpRUMsRUFBakU7QUFBQSxVQUFxRUMsT0FBckU7QUFBQSxVQUE4RUMsTUFBOUU7QUFFQXJCLG1CQUFhLENBQUNqRCxTQUFkLEdBQTBCLEVBQTFCO0FBQ0FrRCxvQkFBYyxDQUFDbEQsU0FBZixHQUEyQixFQUEzQjs7QUFFQSxXQUFLNkQsQ0FBTCxJQUFVckYsT0FBVixFQUFtQjtBQUNqQm9GLGFBQUs7QUFFTEUsV0FBRyxHQUFHOUUsUUFBUSxDQUFDdUYsYUFBVCxDQUF1QixLQUF2QixDQUFOO0FBQ0FSLGFBQUssR0FBRy9FLFFBQVEsQ0FBQ3VGLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBUCxtQkFBVyxHQUFHaEYsUUFBUSxDQUFDdUYsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0FOLGNBQU0sR0FBR2pGLFFBQVEsQ0FBQ3VGLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtBQUNBSixhQUFLLEdBQUduRixRQUFRLENBQUN1RixhQUFULENBQXVCLEtBQXZCLENBQVI7QUFDQUgsVUFBRSxHQUFHcEYsUUFBUSxDQUFDdUYsYUFBVCxDQUF1QixPQUF2QixDQUFMO0FBQ0FGLGVBQU8sR0FBR3JGLFFBQVEsQ0FBQ3VGLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBVjtBQUNBRCxjQUFNLEdBQUd0RixRQUFRLENBQUN1RixhQUFULENBQXVCLE1BQXZCLENBQVQ7QUFDQUwsYUFBSyxHQUFHLEtBQUksQ0FBQ00sY0FBTCxDQUFvQmhHLE9BQU8sQ0FBQ3FGLENBQUQsQ0FBUCxDQUFXWSxLQUEvQixDQUFSO0FBRUFYLFdBQUcsQ0FBQ1ksU0FBSixHQUFnQixhQUFoQjtBQUNBWCxhQUFLLENBQUNXLFNBQU4sR0FBa0IsZUFBbEI7QUFDQVgsYUFBSyxDQUFDWSxFQUFOLEdBQVcsWUFBWWQsQ0FBdkI7QUFDQUUsYUFBSyxDQUFDakUsSUFBTixHQUFhK0QsQ0FBYjtBQUNBRSxhQUFLLENBQUN2QixJQUFOLEdBQWEsT0FBYjtBQUNBdUIsYUFBSyxDQUFDYSxLQUFOLEdBQWNWLEtBQWQ7QUFDQUYsbUJBQVcsQ0FBQ1UsU0FBWixHQUF3QixjQUF4QjtBQUNBVixtQkFBVyxDQUFDbEQsWUFBWixDQUF5QixPQUF6QixFQUFrQ3RDLE9BQU8sQ0FBQ3FGLENBQUQsQ0FBUCxDQUFXWSxLQUE3QztBQUNBVCxtQkFBVyxDQUFDbEQsWUFBWixDQUF5QixLQUF6QixFQUFnQyxZQUFZK0MsQ0FBNUM7QUFDQUksY0FBTSxDQUFDUyxTQUFQLEdBQW1CLGVBQW5CO0FBQ0FULGNBQU0sQ0FBQ25ELFlBQVAsQ0FBb0IsVUFBcEIsRUFBZ0MsSUFBaEM7QUFDQW1ELGNBQU0sQ0FBQ25ELFlBQVAsQ0FBb0IsVUFBcEIsRUFBZ0MrQyxDQUFoQztBQUNBTSxhQUFLLENBQUNPLFNBQU4sR0FBa0IsZ0JBQWxCO0FBQ0FOLFVBQUUsQ0FBQ00sU0FBSCxHQUFlLFlBQWY7QUFDQU4sVUFBRSxDQUFDdEQsWUFBSCxDQUFnQixVQUFoQixFQUE0QitDLENBQTVCO0FBQ0FPLFVBQUUsQ0FBQzVCLElBQUgsR0FBVSxPQUFWO0FBQ0E0QixVQUFFLENBQUNPLEVBQUgsR0FBUSxpQkFBaUJkLENBQXpCO0FBQ0FPLFVBQUUsQ0FBQ3RFLElBQUgsR0FBVSxXQUFWO0FBQ0F1RSxlQUFPLENBQUNLLFNBQVIsR0FBb0IsU0FBcEI7QUFDQUwsZUFBTyxDQUFDdkQsWUFBUixDQUFxQixLQUFyQixFQUE0QixpQkFBaUIrQyxDQUE3QztBQUNBUyxjQUFNLENBQUNPLFdBQVAsR0FBcUJDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixNQUFwQixDQUFyQjtBQUVBVixlQUFPLENBQUNXLFdBQVIsQ0FBb0JWLE1BQXBCO0FBQ0FILGFBQUssQ0FBQ2EsV0FBTixDQUFrQlosRUFBbEI7QUFDQUQsYUFBSyxDQUFDYSxXQUFOLENBQWtCWCxPQUFsQjtBQUVBUCxXQUFHLENBQUNrQixXQUFKLENBQWdCZixNQUFoQjtBQUNBSCxXQUFHLENBQUNrQixXQUFKLENBQWdCYixLQUFoQjtBQUNBTCxXQUFHLENBQUNrQixXQUFKLENBQWdCakIsS0FBaEI7QUFDQUQsV0FBRyxDQUFDa0IsV0FBSixDQUFnQmhCLFdBQWhCOztBQUVBLFlBQUlKLEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBR04sQ0FBekIsRUFBNEI7QUFDMUJELGtCQUFRLENBQUMyQixXQUFULENBQXFCbEIsR0FBckI7QUFDRCxTQUZELE1BRU87QUFDTFgsbUJBQVMsQ0FBQzZCLFdBQVYsQ0FBc0JsQixHQUF0QjtBQUNEOztBQUVERCxTQUFDLEdBQUdBLENBQUMsQ0FBQ29CLFdBQUYsRUFBSjtBQUNBcEIsU0FBQyxHQUFHQSxDQUFDLEtBQUssT0FBTixHQUFnQmlCLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixNQUFwQixDQUFoQixHQUE4Q2xCLENBQWxEO0FBQ0FHLG1CQUFXLENBQUNoRSxTQUFaLEdBQXdCNkQsQ0FBeEI7QUFDQSxZQUFJLENBQUNLLEtBQUwsRUFBWUgsS0FBSyxDQUFDakQsWUFBTixDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUNiOztBQUNEb0Msb0JBQWMsQ0FBQzhCLFdBQWYsQ0FBMkI3QixTQUEzQjtBQUNBRixtQkFBYSxDQUFDK0IsV0FBZCxDQUEwQjNCLFFBQTFCOztBQUVBLFVBQUksS0FBSSxDQUFDVCxlQUFULEVBQTBCO0FBQ3hCLGFBQUksQ0FBQ2xELEVBQUwsQ0FBUVAsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsTUFBdEI7O0FBQ0FKLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNpRyxPQUF6QyxHQUFtRCxJQUFuRDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUksQ0FBQ3hGLEVBQUwsQ0FBUVAsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsTUFBekI7QUFDRDtBQUNGLEtBekZEO0FBMEZELEdBckhZO0FBc0hibUYsZ0JBdEhhLDBCQXNIRVcsTUF0SEYsRUFzSFU7QUFDckIsUUFBSUMsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQVAsQ0FBYSxHQUFiLENBQVo7QUFBQSxRQUNJQyxDQUFDLEdBQUdELEtBQUssQ0FBQ3pCLE1BRGQ7QUFBQSxRQUVJTyxLQUFLLEdBQUcsRUFGWjtBQUFBLFFBR0lvQixDQUFDLEdBQUcsQ0FIUjtBQUFBLFFBSUliLEtBSko7O0FBTUEsV0FBT2EsQ0FBQyxHQUFHRCxDQUFYLEVBQWNDLENBQUMsRUFBZixFQUFtQjtBQUNqQmIsV0FBSyxHQUFHVyxLQUFLLENBQUNFLENBQUQsQ0FBYjs7QUFDQSxVQUFJYixLQUFLLENBQUNjLFFBQU4sQ0FBZSxrQkFBZixDQUFKLEVBQXdDO0FBQ3RDckIsYUFBSyxHQUFHTyxLQUFLLENBQUNXLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQVI7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT2xCLEtBQVA7QUFDRCxHQXJJWTtBQXNJYnZCLFFBdElhLGtCQXNJTnpCLENBdElNLEVBc0lIeEIsRUF0SUcsRUFzSUM7QUFDWixTQUFLbkMsSUFBTCxDQUFVLG1CQUFWLEVBQStCbUMsRUFBRSxDQUFDSSxJQUFsQyxFQUF3Q0osRUFBRSxDQUFDa0YsS0FBM0M7QUFDRCxHQXhJWTtBQXlJYlksUUF6SWEsa0JBeUlOdEUsQ0F6SU0sRUF5SUh4QixFQXpJRyxFQXlJQztBQUNaLFNBQUtuQyxJQUFMLENBQVUseUJBQVYsRUFBcUNtQyxFQUFFLENBQUNpQyxZQUFILENBQWdCLFVBQWhCLENBQXJDLEVBQWtFO0FBQUUvQyxTQUFHLEVBQUU7QUFBUCxLQUFsRTtBQUNELEdBM0lZO0FBNEliNkcsWUE1SWEsc0JBNElGdkUsQ0E1SUUsRUE0SUN4QixFQTVJRCxFQTRJSztBQUNoQixRQUFJQSxFQUFFLENBQUNQLFNBQUgsQ0FBYWdDLFFBQWIsQ0FBc0IsVUFBdEIsQ0FBSixFQUF1QztBQUN2QyxTQUFLNUQsSUFBTCxDQUFVLG1CQUFWLEVBQStCbUMsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixVQUFoQixDQUEvQixFQUE0RDtBQUFFL0MsU0FBRyxFQUFFO0FBQVAsS0FBNUQ7QUFDRCxHQS9JWTtBQWdKYjhHLHFCQWhKYSwrQkFnSk9DLElBaEpQLEVBZ0phO0FBQ3hCLFFBQUksS0FBSy9DLGVBQVQsRUFBMEI7QUFDMUIsUUFBTWpDLElBQUksR0FBR2dGLElBQUksR0FBRyxpQkFBSCxHQUF1QixjQUF4QztBQUNBeEksU0FBSyxDQUFDMkUsSUFBTixDQUFXOUMsUUFBUSxDQUFDZSxzQkFBVCxDQUFnQyxlQUFoQyxDQUFYLEVBQTZEdUMsT0FBN0QsQ0FBcUUsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQzVCLElBQUQsQ0FBSCxDQUFVLFVBQVYsRUFBc0IsSUFBdEIsQ0FBSjtBQUFBLEtBQXhFO0FBQ0QsR0FwSlk7QUFxSmJZLGFBckphLHVCQXFKREMsS0FySkMsRUFxSk07QUFDakIsU0FBS2tFLG1CQUFMLENBQXlCbEUsS0FBSyxDQUFDb0UsU0FBL0I7QUFDRDtBQXZKWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSXRKLGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCw2QkFBdUIsWUFEcEI7QUFFSCxzQkFBZ0IsUUFGYjtBQUdILDhCQUF5QjtBQUh0QixLQURDO0FBTU5xRCxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBQ0wsdUJBQWUsVUFEVjtBQUVMLDJCQUFtQixZQUZkO0FBR0wsK0JBQXVCO0FBSGxCLE9BREo7QUFNSHdDLFlBQU0sRUFBRTtBQUNOLHVCQUFlO0FBRFQ7QUFOTDtBQU5DLEdBRks7QUFvQmJrRCxPQUFLLEVBQUUsRUFwQk07QUFxQmJDLFNBQU8sRUFBRSxJQXJCSTtBQXNCYm5DLFFBQU0sRUFBRSxDQXRCSztBQXVCYm9DLFNBQU8sRUFBRSxDQUFDLENBdkJHO0FBd0JiQyxZQUFVLEVBQUUsS0F4QkM7QUF5QmJDLFdBQVMsRUFBRTtBQUFFLFNBQUssQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFQO0FBQXVCLFNBQUssQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUE1QjtBQUEyQyxTQUFLLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBaEQ7QUFBK0QsU0FBSyxDQUFDLElBQUQsRUFBTyxJQUFQO0FBQXBFLEdBekJFO0FBMkJidEcsUUEzQmEsb0JBMkJKO0FBQ1AsUUFBTTVDLEtBQUssR0FBRyxLQUFLQSxLQUFMLEdBQWFSLG1CQUFPUSxLQUFsQzs7QUFDQSxRQUFJQSxLQUFKLEVBQVc7QUFDVCxXQUFLbUosUUFBTDtBQUNBLFVBQUksQ0FBQyxLQUFLRixVQUFWLEVBQXNCLEtBQUtHLGdCQUFMO0FBQ3RCLFdBQUtDLFVBQUw7QUFDRDtBQUNGLEdBbENZO0FBbUNiRixVQW5DYSxzQkFtQ0Y7QUFDVCxRQUFNbkosS0FBSyxHQUFHLEtBQUtBLEtBQW5CO0FBQ0EsUUFBSThJLEtBQUssR0FBRyxFQUFaOztBQUNBLFFBQUkxSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCQSxXQUFLLENBQUN1RixPQUFOLENBQWMsVUFBQXBCLENBQUM7QUFBQSxlQUFJMkUsS0FBSyxHQUFHQSxLQUFLLENBQUNRLE1BQU4sQ0FBYW5GLENBQUMsQ0FBQzJFLEtBQWYsQ0FBWjtBQUFBLE9BQWY7QUFDRCxLQUZELE1BRU87QUFDTEEsV0FBSyxHQUFHOUksS0FBSyxDQUFDOEksS0FBZDtBQUNEOztBQUNELFFBQU1DLE9BQU8sR0FBRyxLQUFLQSxPQUFyQixDQVJTLENBU1Q7QUFDQTs7QUFDQSxTQUFLRCxLQUFMLEdBQWFDLE9BQU8sR0FDbEJBLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLFVBQUEzQixFQUFFO0FBQUEsYUFBSWtCLEtBQUssQ0FBQ1UsSUFBTixDQUFXLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUM3QixFQUFMLElBQVdBLEVBQWY7QUFBQSxPQUFmLENBQUo7QUFBQSxLQUFkLENBRGtCLEdBRWxCa0IsS0FGRjtBQUdBLFNBQUtsQyxNQUFMLEdBQWMsS0FBS2tDLEtBQUwsQ0FBV2xDLE1BQXpCO0FBQ0QsR0FsRFk7QUFtRGI4QyxZQW5EYSxzQkFtREZDLEdBbkRFLEVBbURHO0FBQ2QsU0FBS1osT0FBTCxHQUFlWSxHQUFmO0FBQ0EsU0FBSy9HLE1BQUw7QUFDRCxHQXREWTtBQXVEYndHLGtCQXZEYSw4QkF1RE07QUFDakIsUUFBTVEsSUFBSSxHQUFHM0gsUUFBUSxDQUFDMkgsSUFBdEI7QUFDQSxRQUFNQyxJQUFJLEdBQUc1SCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWI7QUFDQSxRQUFNNEgsTUFBTSxHQUFHLEVBQWY7QUFDQSxRQUFJdkIsQ0FBSixFQUFPd0IsQ0FBUDs7QUFDQSxTQUFLeEIsQ0FBTCxJQUFVeUIsNEJBQVVDLFdBQXBCLEVBQWlDO0FBQzlCRixPQUFDLEdBQUdDLDRCQUFVQyxXQUFWLENBQXNCMUIsQ0FBdEIsQ0FBSjtBQUNEdUIsWUFBTSxDQUFDdkIsQ0FBQyxDQUFDMkIsV0FBRixFQUFELENBQU4sR0FBMEIsYUFBYSxLQUFLQyxVQUFMLENBQWdCSixDQUFDLENBQUNLLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxDQUFoQixDQUFiLEdBQThDLFdBQTlDLEdBQTRELEtBQUtELFVBQUwsQ0FBZ0JKLENBQUMsQ0FBQ0ssTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQWhCLENBQTVELEdBQTZGLFdBQTdGLEdBQTJHLEtBQUtELFVBQUwsQ0FBZ0JKLENBQUMsQ0FBQ0ssTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQWhCLENBQTNHLEdBQTRJLFlBQXRLO0FBQ0Q7O0FBQ0QsUUFBSUMsTUFBSjs7QUFDQSxTQUFLOUIsQ0FBTCxJQUFVdUIsTUFBVixFQUFrQjtBQUNoQk8sWUFBTSxHQUFHUixJQUFJLENBQUNTLFNBQUwsQ0FBZSxJQUFmLENBQVQ7QUFDQUQsWUFBTSxDQUFDckYsb0JBQVAsQ0FBNEIsUUFBNUIsRUFBc0MsQ0FBdEMsRUFBeUM0QyxFQUF6QyxHQUE4QyxhQUFhVyxDQUEzRDtBQUNBOEIsWUFBTSxDQUFDckYsb0JBQVAsQ0FBNEIsZUFBNUIsRUFBNkMsQ0FBN0MsRUFBZ0RqQixZQUFoRCxDQUE2RCxRQUE3RCxFQUF1RStGLE1BQU0sQ0FBQ3ZCLENBQUQsQ0FBN0U7QUFDQXFCLFVBQUksQ0FBQzNCLFdBQUwsQ0FBaUJvQyxNQUFqQjtBQUNEOztBQUNELFNBQUtwQixVQUFMLEdBQWtCLElBQWxCO0FBQ0QsR0F4RVk7QUF5RWJrQixZQXpFYSxzQkF5RUZJLEdBekVFLEVBeUVHO0FBQ2QsV0FBTyxDQUFFLEtBQUtDLE1BQU0sQ0FBQyxPQUFPRCxHQUFHLENBQUMsQ0FBRCxDQUFYLENBQVosR0FBK0JDLE1BQU0sQ0FBQyxPQUFPRCxHQUFHLENBQUMsQ0FBRCxDQUFYLENBQXRDLElBQXlELEdBQWhFO0FBQ0QsR0EzRVk7QUE0RWJsQixZQTVFYSx3QkE0RUE7QUFDWCxRQUFNb0IsUUFBUSxHQUFHeEksUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQWpCO0FBQ0EsUUFBTXdJLFFBQVEsR0FBR3pJLFFBQVEsQ0FBQ29FLHNCQUFULEVBQWpCO0FBQ0EsUUFBTXNFLGNBQWMsR0FBRzFJLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUF2QjtBQUNBLFFBQUkwSSxhQUFKO0FBRUFELGtCQUFjLENBQUMxSCxTQUFmLEdBQTJCLEVBQTNCO0FBRUEsU0FBSzZGLEtBQUwsQ0FBV3ZELE9BQVgsQ0FBbUIsVUFBQ2tFLElBQUQsRUFBT2xCLENBQVAsRUFBYTtBQUM5QixVQUFJa0IsSUFBSixFQUFVO0FBQ1JtQixxQkFBYSxHQUFHSCxRQUFRLENBQUNILFNBQVQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQU0scUJBQWEsQ0FBQ2hELEVBQWQsR0FBbUIsRUFBbkI7QUFDQWdELHFCQUFhLENBQUN4SSxTQUFkLENBQXdCRSxNQUF4QixDQUErQixpQkFBL0I7QUFDQXNJLHFCQUFhLENBQUM3RyxZQUFkLENBQTJCLFNBQTNCLEVBQXNDd0UsQ0FBdEM7QUFFQSxZQUFNc0MsUUFBUSxHQUFHRCxhQUFhLENBQUM1SCxzQkFBZCxDQUFxQyxZQUFyQyxFQUFtRCxDQUFuRCxDQUFqQjtBQUNBLFlBQU04RSxXQUFXLEdBQUc3RixRQUFRLENBQUM2SSxjQUFULENBQXdCckIsSUFBSSxDQUFDc0IsSUFBN0IsQ0FBcEI7QUFDQSxZQUFJNUQsS0FBSyxHQUFHc0MsSUFBSSxDQUFDL0IsS0FBTCxDQUFXc0QsT0FBWCxDQUFtQixrQkFBbkIsQ0FBWjtBQUNBLFlBQUlDLE9BQU8sR0FBR3hCLElBQUksQ0FBQ3lCLElBQUwsS0FBYyxPQUFPekIsSUFBSSxDQUFDeUIsSUFBWixLQUFxQixRQUFyQixJQUFpQ3pCLElBQUksQ0FBQ3lCLElBQUwsQ0FBVUgsSUFBekQsQ0FBZDtBQUNBNUQsYUFBSyxHQUFHQSxLQUFLLEtBQUssQ0FBQyxDQUFYLEdBQWUsYUFBZixHQUErQnNDLElBQUksQ0FBQy9CLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JqRCxLQUFLLEdBQUcsRUFBMUIsRUFBOEIsQ0FBOUIsQ0FBdkM7QUFDQSxZQUFJK0QsSUFBSixFQUFVQyxTQUFWLEVBQXFCQyxRQUFyQixFQUErQkMsT0FBL0IsRUFBd0NDLFFBQXhDO0FBRUFULGdCQUFRLENBQUNuRCxLQUFULENBQWU2RCxXQUFmLEdBQTZCcEUsS0FBN0I7QUFDQTBELGdCQUFRLENBQUM1QyxXQUFULENBQXFCSCxXQUFyQjs7QUFFQSxZQUFJbUQsT0FBSixFQUFhO0FBQ1hDLGNBQUksR0FBR3pCLElBQUksQ0FBQ3lCLElBQVo7QUFDQUMsbUJBQVMsR0FBR0QsSUFBSSxDQUFDL0QsS0FBTCxJQUFjLFFBQTFCO0FBQ0FpRSxrQkFBUSxHQUFHRixJQUFJLENBQUNILElBQUwsSUFBYUcsSUFBeEI7QUFDQU4sdUJBQWEsQ0FBQ3hJLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFlBQTVCO0FBQ0FnSixpQkFBTyxHQUFHVCxhQUFhLENBQUM1SCxzQkFBZCxDQUFxQyxnQkFBckMsRUFBdUQsQ0FBdkQsQ0FBVjtBQUNBcUksaUJBQU8sQ0FBQ2pKLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLGlCQUF6QjtBQUNBK0ksaUJBQU8sQ0FBQ2pKLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLHFCQUFxQjhJLFNBQTNDO0FBQ0FHLGtCQUFRLEdBQUdWLGFBQWEsQ0FBQzVILHNCQUFkLENBQXFDLFlBQXJDLEVBQW1ELENBQW5ELENBQVg7QUFDQXNJLGtCQUFRLENBQUNyRCxXQUFULENBQXFCaEcsUUFBUSxDQUFDNkksY0FBVCxDQUF3Qk0sUUFBeEIsQ0FBckI7QUFDQUUsa0JBQVEsQ0FBQ2xKLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLGlCQUExQjtBQUNBZ0osa0JBQVEsQ0FBQ2xKLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGlCQUFpQjhJLFNBQXhDO0FBQ0Q7O0FBQ0RULGdCQUFRLENBQUN6QyxXQUFULENBQXFCMkMsYUFBckI7QUFDRDtBQUNGLEtBaENEO0FBaUNBRCxrQkFBYyxDQUFDMUMsV0FBZixDQUEyQnlDLFFBQTNCO0FBQ0QsR0F0SFk7QUF1SGJjLEtBdkhhLGVBdUhUckgsQ0F2SFMsRUF1SE54QixFQXZITSxFQXVIRjtBQUNULFFBQU04SSxHQUFHLEdBQUcsSUFBSTlJLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsWUFBaEIsQ0FBaEI7QUFDQSxTQUFLb0UsT0FBTCxJQUFnQnlDLEdBQWhCO0FBQ0EsUUFBSSxLQUFLekMsT0FBTCxJQUFnQixLQUFLcEMsTUFBekIsRUFBaUMsS0FBS29DLE9BQUwsR0FBZSxDQUFmLENBQWpDLEtBQ0ssSUFBSSxLQUFLQSxPQUFMLEdBQWUsQ0FBbkIsRUFBc0IsS0FBS0EsT0FBTCxHQUFlLEtBQUtwQyxNQUFMLEdBQWMsQ0FBN0I7QUFDM0IsU0FBSzhFLGdCQUFMO0FBQ0QsR0E3SFk7QUE4SGJBLGtCQTlIYSw0QkE4SEk5RCxFQTlISixFQThIUTtBQUNuQixRQUFJLE9BQU9BLEVBQVAsS0FBYyxRQUFsQixFQUE0QixLQUFLb0IsT0FBTCxHQUFlcEIsRUFBZjtBQUM1QixRQUFNK0QsV0FBVyxHQUFHLEtBQUtoSixFQUFMLENBQVFLLHNCQUFSLENBQStCLGNBQS9CLEVBQStDLENBQS9DLENBQXBCO0FBQ0EsUUFBSTJJLFdBQUosRUFBaUJBLFdBQVcsQ0FBQ3ZKLFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCLGNBQTdCO0FBQ2pCTCxZQUFRLENBQUMySixhQUFULENBQXVCLGtCQUFrQixDQUFDLEtBQUs1QyxPQUFOLENBQWxCLEdBQW1DLElBQTFELEVBQWdFNUcsU0FBaEUsQ0FBMEVDLEdBQTFFLENBQThFLGNBQTlFO0FBQ0EsU0FBSzdCLElBQUwsQ0FBVSxtQkFBVixFQUErQixLQUFLd0ksT0FBcEMsRUFBNkM7QUFBRW5ILFNBQUcsRUFBRTtBQUFQLEtBQTdDO0FBQ0QsR0FwSVk7QUFxSWJ1RCxVQXJJYSxvQkFxSUpqQixDQXJJSSxFQXFJRHhCLEVBcklDLEVBcUlHO0FBQ2RWLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQzJGLEtBQXRDLEdBQThDLENBQTlDO0FBQ0FsRixNQUFFLENBQUNQLFNBQUgsQ0FBYUssTUFBYixDQUFvQixVQUFwQjtBQUNBLFNBQUtpSixnQkFBTCxDQUFzQixJQUFFL0ksRUFBRSxDQUFDMEIsVUFBSCxDQUFjQSxVQUFkLENBQXlCTyxZQUF6QixDQUFzQyxTQUF0QyxDQUF4QjtBQUNELEdBeklZO0FBMEliaUgsVUExSWEsb0JBMElKMUgsQ0ExSUksRUEwSUR4QixFQTFJQyxFQTBJRztBQUNkLFFBQU1tSixHQUFHLEdBQUduSixFQUFFLENBQUNrRixLQUFmOztBQUNBLFFBQUlpRSxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1osVUFBTWhELEtBQUssR0FBRzdHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsVUFBTTZKLGNBQWMsR0FBRyxLQUFLN0MsU0FBTCxDQUFlNEMsR0FBZixDQUF2QjtBQUVBLFdBQUtySixNQUFMLENBQVksTUFBWixFQUFvQnNKLGNBQWMsQ0FBQyxDQUFELENBQWxDO0FBQ0EsV0FBS3RKLE1BQUwsQ0FBWSxNQUFaLEVBQW9Cc0osY0FBYyxDQUFDLENBQUQsQ0FBbEM7QUFDRDtBQUNGLEdBbkpZO0FBb0piQyxZQXBKYSxzQkFvSkY3SCxDQXBKRSxFQW9KQ3hCLEVBcEpELEVBb0pLO0FBQ2hCVixZQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MyRixLQUF0QyxHQUE4QyxDQUE5QztBQUNBbEYsTUFBRSxDQUFDMEIsVUFBSCxDQUFjckIsc0JBQWQsQ0FBcUMsWUFBckMsRUFBbUQsQ0FBbkQsRUFBc0RaLFNBQXRELENBQWdFSyxNQUFoRSxDQUF1RSxVQUF2RTtBQUNELEdBdkpZO0FBd0piQSxRQXhKYSxrQkF3Sk5nRCxJQXhKTSxFQXdKQW1ELElBeEpBLEVBd0pNO0FBQ2pCLFFBQU1oRixJQUFJLEdBQUdnRixJQUFJLEdBQUcsS0FBSCxHQUFXLFFBQTVCO0FBQ0F4SSxTQUFLLENBQUMyRSxJQUFOLENBQVcsS0FBS3BDLEVBQUwsQ0FBUUssc0JBQVIsQ0FBK0IsV0FBV3lDLElBQTFDLENBQVgsRUFDR0YsT0FESCxDQUNXLFVBQUE1QyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDUCxTQUFILENBQWF3QixJQUFiLEVBQW1CLFVBQW5CLENBQUo7QUFBQSxLQURiO0FBRUQ7QUE1SlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUNBOzs7Ozs7QUFFQSxJQUFJckUsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQixRQURiO0FBRUgsOEJBQXdCO0FBRnJCO0FBREMsR0FGSztBQVNiOEMsUUFUYSxrQkFTTjVDLEtBVE0sRUFTQztBQUNaLFFBQUlBLEtBQUssSUFBSSxDQUFDSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFkLEVBQW9DO0FBQ2xDLFVBQU1pTSxHQUFHLEdBQUdyTCxPQUFPLENBQUNzTCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsS0FBeEIsQ0FBWjtBQUNBLFVBQU1DLEVBQUUsR0FBR3hMLE9BQU8sQ0FBQ3NMLElBQVIsQ0FBYUMsVUFBYixDQUF3QixJQUF4QixDQUFYO0FBRUFsSyxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDZSxTQUE5QyxHQUEwRGpELEtBQUssQ0FBQzhJLEtBQU4sQ0FBWWxDLE1BQXRFO0FBQ0EzRSxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNlLFNBQXpDLEdBQXFELEtBQUtvSixrQkFBTCxDQUF3QixJQUFJQyxJQUFKLENBQVN0TSxLQUFLLENBQUN1TSxLQUFmLEVBQXNCQyxjQUF0QixFQUF4QixDQUFyRDtBQUNBdkssY0FBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ2UsU0FBL0MsR0FBMkQsS0FBS29KLGtCQUFMLENBQXdCLElBQUlDLElBQUosQ0FBU3RNLEtBQUssQ0FBQ3lNLElBQWYsRUFBcUJELGNBQXJCLEVBQXhCLENBQTNEO0FBRUEsT0FBQyxRQUFELEVBQVcsT0FBWCxFQUNHakgsT0FESCxDQUNXLFVBQUFtSCxLQUFLO0FBQUEsZUFBSXpLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUFXd0ssS0FBbkMsRUFBMEN6SixTQUExQyxHQUFzRGpELEtBQUssQ0FBQzBNLEtBQUQsQ0FBTCxHQUFlVCxHQUFmLEdBQXFCRyxFQUEvRTtBQUFBLE9BRGhCO0FBRUQ7QUFDRixHQXJCWTtBQXVCYkMsb0JBdkJhLDhCQXVCTU0sSUF2Qk4sRUF1Qlk7QUFDdkIsV0FBUUEsSUFBSSxDQUNUQyxPQURLLENBQ0csaUJBREgsRUFDc0IsVUFBQzlGLENBQUQsRUFBSStGLENBQUosRUFBT0MsQ0FBUDtBQUFBLGFBQVksTUFBTUQsQ0FBTixHQUFVQyxDQUF0QjtBQUFBLEtBRHRCLEVBRUxGLE9BRkssQ0FFRyxzQkFGSCxFQUUyQixVQUFDOUYsQ0FBRCxFQUFJK0YsQ0FBSixFQUFPQyxDQUFQO0FBQUEsYUFBYUQsQ0FBQyxHQUFHLEdBQUosR0FBVUMsQ0FBdkI7QUFBQSxLQUYzQixDQUFSO0FBR0Q7QUEzQlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7Ozs7QUFFQSxJQUFJdk4saUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHdCQUFrQixrQkFEZjtBQUVILDBCQUFvQixvQkFGakI7QUFHSCxvQkFBYyxlQUhYO0FBSUgsMkJBQXFCLGlCQUpsQjtBQUtILG9CQUFjLGFBTFg7QUFNSCxxQkFBZTtBQU5aLEtBREM7QUFTTnFELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCxnQ0FBd0I7QUFEbkI7QUFESjtBQVRDLEdBRks7QUFrQmIySixrQkFsQmEsOEJBa0JNO0FBQ2pCLFNBQUszSCxRQUFMLENBQWMsUUFBZCxFQUF3QixJQUF4QjtBQUNELEdBcEJZO0FBcUJiNEgsb0JBckJhLGdDQXFCUTtBQUNuQixTQUFLNUgsUUFBTCxDQUFjLFFBQWQsRUFBd0IsS0FBeEI7QUFDRCxHQXZCWTtBQXdCYjZILGVBeEJhLDJCQXdCRztBQUNkLFNBQUs3SCxRQUFMLENBQWMsT0FBZCxFQUF1QixJQUF2QjtBQUNELEdBMUJZO0FBMkJiOEgsaUJBM0JhLDZCQTJCSztBQUNoQixTQUFLOUgsUUFBTCxDQUFjLE9BQWQsRUFBdUIsS0FBdkI7QUFDRCxHQTdCWTtBQThCYkEsVUE5QmEsb0JBOEJKSyxJQTlCSSxFQThCRTFELEVBOUJGLEVBOEJNO0FBQ2pCLFFBQU15RCxHQUFHLEdBQUd2RCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQWtCdUQsSUFBMUMsQ0FBWjs7QUFDQSxRQUFJMUQsRUFBSixFQUFRO0FBQ055RCxTQUFHLENBQUMxQixlQUFKLENBQW9CLFVBQXBCO0FBQ0EwQixTQUFHLENBQUNuQixVQUFKLENBQWVqQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxVQUFoQztBQUNELEtBSEQsTUFJSztBQUNIa0QsU0FBRyxDQUFDekIsWUFBSixDQUFpQixVQUFqQixFQUE2QixJQUE3QjtBQUNBeUIsU0FBRyxDQUFDbkIsVUFBSixDQUFlakMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsVUFBN0I7QUFDRDtBQUNGLEdBeENZO0FBeUNiOEssWUF6Q2Esc0JBeUNGaEosQ0F6Q0UsRUF5Q0N4QixFQXpDRCxFQXlDSztBQUNoQixTQUFLbkMsSUFBTCxDQUFVLGFBQWFtQyxFQUFFLENBQUNpQyxZQUFILENBQWdCLGFBQWhCLENBQXZCLEVBQXVEO0FBQUUvQyxTQUFHLEVBQUU7QUFBUCxLQUF2RDtBQUNELEdBM0NZO0FBNENiMkMsYUE1Q2EsdUJBNENEQyxLQTVDQyxFQTRDTTtBQUNqQixRQUFJQSxLQUFLLENBQUNpQixRQUFWLEVBQW9CLEtBQUtxSCxnQkFBTDtBQUNyQixHQTlDWTtBQStDYkssY0EvQ2Esd0JBK0NBQyxLQS9DQSxFQStDTztBQUNsQixRQUFJQSxLQUFKLEVBQVcsS0FBS0osYUFBTDtBQUNaO0FBakRZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQTs7Ozs7O0FBRUEsSUFBSTFOLGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCwyQkFBcUI7QUFEbEIsS0FEQztBQUlOcUQsT0FBRyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQUNMLHFCQUFhLFNBRFI7QUFFTCx1QkFBZSxhQUZWO0FBR0wsMkJBQW1CLGVBSGQ7QUFJTCx3QkFBZ0IsWUFKWDtBQUtMLDBCQUFrQixZQUxiO0FBTUwsc0JBQWM7QUFOVCxPQURKO0FBU0h3QyxZQUFNLEVBQUU7QUFDTiw0QkFBb0I7QUFEZDtBQVRMO0FBSkMsR0FGSztBQW9CYnlILE9BQUssRUFBRSxFQXBCTTtBQXFCYkMsU0FBTyxFQUFFLEVBckJJO0FBc0JiMUYsSUFBRSxFQUFFLENBdEJTO0FBdUJiMkYsY0FBWSxFQUFFLFFBdkJEO0FBeUJiM0wsVUF6QmEsc0JBeUJGO0FBQ1QsU0FBS2dCLE1BQUw7QUFDRCxHQTNCWTtBQTZCYkEsUUE3QmEsb0JBNkJKO0FBQUE7O0FBQ1AsU0FBS2xDLE1BQUw7QUFDQSxrQ0FBa0JNLElBQWxCLENBQXVCLFVBQUFhLEdBQUcsRUFBSTtBQUM1QixVQUFNMkwsR0FBRyxHQUFHLEtBQUksQ0FBQ0EsR0FBTCxHQUFXM0wsR0FBRyxDQUFDMkwsR0FBM0I7O0FBQ0FoTyx5QkFBT3VCLEdBQVAsQ0FBVyxXQUFYLEVBQXdCQyxJQUF4QixDQUE2QixVQUFBVyxTQUFTLEVBQUk7QUFDeENBLGlCQUFTLEdBQUdBLFNBQVMsSUFBSUEsU0FBUyxDQUFDNkwsR0FBRCxDQUF0QixHQUE4QjdMLFNBQVMsQ0FBQzZMLEdBQUQsQ0FBdkMsR0FBK0MsSUFBM0Q7QUFDQSxZQUFJbEYsQ0FBSixFQUFPVixFQUFQOztBQUNBLFlBQUlqRyxTQUFTLEtBQUsyRyxDQUFDLEdBQUczRyxTQUFTLENBQUNpRixNQUFuQixDQUFiLEVBQXlDO0FBQ3ZDLGVBQUksQ0FBQ3lHLEtBQUwsR0FBYTFMLFNBQWI7O0FBQ0EsaUJBQU8yRyxDQUFDLEVBQVIsRUFBWTtBQUNWVixjQUFFLEdBQUcsS0FBSSxDQUFDNkYsT0FBTCxDQUFhOUwsU0FBUyxDQUFDMkcsQ0FBRCxDQUF0QixDQUFMO0FBQ0EsaUJBQUksQ0FBQ1YsRUFBTCxHQUFVcEIsSUFBSSxDQUFDa0gsR0FBTCxDQUFTLEtBQUksQ0FBQzlGLEVBQWQsRUFBa0JBLEVBQWxCLENBQVY7QUFDRDtBQUNGO0FBQ0YsT0FWRCxFQVdHNUcsSUFYSCxDQVdRLFlBQU07QUFDVixhQUFJLENBQUMyTSxZQUFMLENBQWtCLENBQUMsQ0FBQyxLQUFJLENBQUNOLEtBQUwsQ0FBV3pHLE1BQS9COztBQUNBLGFBQUksQ0FBQ2dILFdBQUwsQ0FBaUIsSUFBakIsRUFBdUIzTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXZCO0FBQ0QsT0FkSDtBQWVELEtBakJEO0FBa0JELEdBakRZO0FBa0RidUIsTUFsRGEsZ0JBa0RSVSxDQWxEUSxFQWtETHhCLEVBbERLLEVBa0REO0FBQ1YsUUFBSUEsRUFBSixFQUFRO0FBQ04sVUFBTXVJLElBQUksR0FBRyxLQUFLMkMsT0FBTCxDQUFhbEwsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixTQUFoQixDQUFiLENBQWI7QUFDQXNHLFVBQUksQ0FBQ0gsSUFBTCxHQUFZcEksRUFBRSxDQUFDbUwsZUFBSCxDQUFtQmpHLEtBQS9CO0FBQ0FxRCxVQUFJLENBQUNuSSxJQUFMLEdBQVlKLEVBQUUsQ0FBQzBCLFVBQUgsQ0FBY3JCLHNCQUFkLENBQXFDLGdCQUFyQyxFQUF1RCxDQUF2RCxFQUEwRDZFLEtBQXRFO0FBQ0Q7O0FBQ0QsU0FBS3JILElBQUwsQ0FBVSxtQkFBVixFQUErQixLQUFLZ04sR0FBcEMsRUFBeUMsS0FBS0gsS0FBOUM7QUFDRCxHQXpEWTtBQTBEYjNNLFFBMURhLG9CQTBESjtBQUNQLFNBQUsyTSxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBSzFGLEVBQUwsR0FBVSxDQUFWO0FBQ0EzRixZQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0M0RixXQUF0QyxHQUFvRCxFQUFwRDtBQUNELEdBL0RZO0FBaUViMkYsU0FqRWEsbUJBaUVMdkMsSUFqRUssRUFpRUM7QUFDWkEsUUFBSSxHQUFHQSxJQUFJLENBQUN6RixJQUFMLEdBQVksSUFBWixHQUFtQnlGLElBQTFCO0FBQ0EsUUFBTTZDLFNBQVMsR0FBRzlMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUNBLFFBQU04TCxNQUFNLEdBQUcvTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDb0ksU0FBOUMsQ0FBd0QsSUFBeEQsQ0FBZjtBQUNBLFFBQU0yRCxRQUFRLEdBQUdELE1BQU0sQ0FBQ2hKLG9CQUFQLENBQTRCLFVBQTVCLEVBQXdDLENBQXhDLENBQWpCO0FBQ0EsUUFBTW5DLE1BQU0sR0FBR21MLE1BQU0sQ0FBQ2hMLHNCQUFQLENBQThCLGdCQUE5QixFQUFnRCxDQUFoRCxDQUFmO0FBQ0FnTCxVQUFNLENBQUM1TCxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixpQkFBeEI7QUFFQSxRQUFJc0YsRUFBSjs7QUFDQSxRQUFJc0QsSUFBSixFQUFVO0FBQ1J0RCxRQUFFLEdBQUdvRyxNQUFNLENBQUNwRyxFQUFQLEdBQVlzRCxJQUFJLENBQUN0RCxFQUF0QjtBQUNBcUcsY0FBUSxDQUFDbkcsV0FBVCxHQUF1Qm9ELElBQUksQ0FBQ0gsSUFBTCxJQUFhLEVBQXBDO0FBQ0FsSSxZQUFNLENBQUNnRixLQUFQLEdBQWVxRCxJQUFJLENBQUNuSSxJQUFMLElBQWEsRUFBNUI7QUFDQWlMLFlBQU0sQ0FBQzVMLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGFBQWE2SSxJQUFJLENBQUMvRCxLQUF2QztBQUNBNEcsZUFBUyxDQUFDOUYsV0FBVixDQUFzQitGLE1BQXRCO0FBQ0QsS0FORCxNQU1PO0FBQ0xwRyxRQUFFLEdBQUdvRyxNQUFNLENBQUNwRyxFQUFQLEdBQVksRUFBRSxLQUFLQSxFQUF4QjtBQUNBLFdBQUt5RixLQUFMLENBQVc5TSxJQUFYLENBQWdCO0FBQUVxSCxVQUFFLEVBQUZBLEVBQUY7QUFBTW1ELFlBQUksRUFBRSxFQUFaO0FBQWdCNUQsYUFBSyxFQUFFLEtBQUtvRztBQUE1QixPQUFoQjtBQUNBUyxZQUFNLENBQUM1TCxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixhQUF4QjtBQUNBMEwsWUFBTSxDQUFDNUwsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsYUFBYSxLQUFLa0wsWUFBdkM7QUFDQVEsZUFBUyxDQUFDRyxZQUFWLENBQXVCRixNQUF2QixFQUErQkQsU0FBUyxDQUFDSSxVQUF6QztBQUNEOztBQUVEL04sU0FBSyxDQUFDMkUsSUFBTixDQUFXaUosTUFBTSxDQUFDaEosb0JBQVAsQ0FBNEIsR0FBNUIsQ0FBWCxFQUNHTyxPQURILENBQ1csVUFBQTVDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUNvQixZQUFILENBQWdCLFNBQWhCLEVBQTJCNkQsRUFBM0IsQ0FBSjtBQUFBLEtBRGI7QUFHQSxTQUFLMEYsT0FBTCxDQUFhMUYsRUFBYixJQUFtQm9HLE1BQW5CO0FBRUEsU0FBS0wsWUFBTCxDQUFrQixJQUFsQjtBQUVBLFdBQU8vRixFQUFQO0FBQ0QsR0FoR1k7QUFpR2J3RyxhQWpHYSx1QkFpR0RqSyxDQWpHQyxFQWlHRXhCLEVBakdGLEVBaUdNO0FBQ2pCLFFBQU1pRixFQUFFLEdBQUdqRixFQUFFLENBQUNpQyxZQUFILENBQWdCLFNBQWhCLENBQVg7QUFDQSxRQUFNdUMsS0FBSyxHQUFHLEtBQUtvRyxZQUFMLEdBQW9CNUssRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixZQUFoQixDQUFsQztBQUNBLFNBQUswSSxPQUFMLENBQWExRixFQUFiLEVBQWlCRCxTQUFqQixHQUE2QixLQUFLMkYsT0FBTCxDQUFhMUYsRUFBYixFQUFpQkQsU0FBakIsQ0FBMkJpRixPQUEzQixDQUFtQyxPQUFuQyxFQUE0QyxPQUFPekYsS0FBbkQsQ0FBN0I7QUFDQSxTQUFLMEcsT0FBTCxDQUFhakcsRUFBYixFQUFpQlQsS0FBakIsR0FBeUJBLEtBQXpCO0FBQ0F4RSxNQUFFLENBQUMwQixVQUFILENBQWNqQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixpQkFBNUI7QUFDRCxHQXZHWTtBQXdHYmdNLFlBeEdhLHNCQXdHRmxLLENBeEdFLEVBd0dDeEIsRUF4R0QsRUF3R0s7QUFDaEIsUUFBTWlGLEVBQUUsR0FBR2pGLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBWDtBQUNBLFFBQU1zRyxJQUFJLEdBQUcsS0FBS29DLE9BQUwsQ0FBYTFGLEVBQWIsQ0FBYjtBQUNBc0QsUUFBSSxDQUFDN0csVUFBTCxDQUFnQmlLLFdBQWhCLENBQTRCcEQsSUFBNUI7QUFDQSxXQUFPLEtBQUtvQyxPQUFMLENBQWExRixFQUFiLENBQVA7QUFDQSxTQUFLeUYsS0FBTCxDQUFXa0IsTUFBWCxDQUFrQixLQUFLbEIsS0FBTCxDQUFXckMsT0FBWCxDQUFtQixLQUFLNkMsT0FBTCxDQUFhakcsRUFBYixDQUFuQixDQUFsQixFQUF3RCxDQUF4RDtBQUNBLFNBQUtuRSxJQUFMOztBQUNBLFFBQUksQ0FBQyxLQUFLNEosS0FBTCxDQUFXekcsTUFBaEIsRUFBd0I7QUFDdEIsV0FBSytHLFlBQUwsQ0FBa0IsS0FBbEI7QUFDRDtBQUNGLEdBbEhZO0FBbUhiQSxjQW5IYSx3QkFtSEEvRSxJQW5IQSxFQW1ITTtBQUNqQixRQUFNaEYsSUFBSSxHQUFHZ0YsSUFBSSxHQUFHLFFBQUgsR0FBYyxLQUEvQjtBQUNBM0csWUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0UsU0FBM0MsQ0FBcUR3QixJQUFyRCxFQUEyRCxpQkFBM0Q7QUFDRCxHQXRIWTtBQXVIYjRLLGVBdkhhLHlCQXVIQ3JLLENBdkhELEVBdUhJeEIsRUF2SEosRUF1SFE7QUFDbkIsUUFBTXVJLElBQUksR0FBRyxLQUFLb0MsT0FBTCxDQUFhM0ssRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixTQUFoQixDQUFiLENBQWI7QUFDQSxRQUFNNkosT0FBTyxHQUFHdkQsSUFBSSxDQUFDbEcsb0JBQUwsQ0FBMEIsZUFBMUIsRUFBMkMsQ0FBM0MsQ0FBaEI7QUFDQXlKLFdBQU8sQ0FBQ3JNLFNBQVIsQ0FBa0JLLE1BQWxCLENBQXlCLGlCQUF6Qjs7QUFDQSxRQUFJLENBQUNnTSxPQUFPLENBQUNyTSxTQUFSLENBQWtCZ0MsUUFBbEIsQ0FBMkIsaUJBQTNCLENBQUwsRUFBb0Q7QUFDbEQ4RyxVQUFJLENBQUM5SSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsYUFBdEI7QUFDRDtBQUNGLEdBOUhZO0FBK0hiMEosWUEvSGEsc0JBK0hGN0gsQ0EvSEUsRUErSEN4QixFQS9IRCxFQStISztBQUNoQixRQUFNdUksSUFBSSxHQUFHLEtBQUtvQyxPQUFMLENBQWEzSyxFQUFFLENBQUNpQyxZQUFILENBQWdCLFNBQWhCLENBQWIsQ0FBYjtBQUNBc0csUUFBSSxDQUFDOUksU0FBTCxDQUFlSyxNQUFmLENBQXNCLGFBQXRCOztBQUNBLFFBQUksQ0FBQ3lJLElBQUksQ0FBQzlJLFNBQUwsQ0FBZWdDLFFBQWYsQ0FBd0IsYUFBeEIsQ0FBTCxFQUE2QztBQUMzQyxXQUFLc0ssb0JBQUwsQ0FBMEJ4RCxJQUExQjtBQUNEOztBQUNEakosWUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQzJGLEtBQTNDLEdBQW1ELENBQW5EO0FBQ0QsR0F0SVk7QUF1SWIrRixhQXZJYSx1QkF1SUR6SixDQXZJQyxFQXVJRXhCLEVBdklGLEVBdUlNO0FBQ2pCLFFBQUlBLEVBQUUsQ0FBQ2tGLEtBQUgsSUFBWSxDQUFoQixFQUFtQjtBQUNqQixXQUFLLElBQUlELEVBQVQsSUFBZSxLQUFLMEYsT0FBcEIsRUFBNkI7QUFDM0IsYUFBS0EsT0FBTCxDQUFhMUYsRUFBYixFQUFpQnhGLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixhQUEvQjtBQUNEO0FBQ0YsS0FKRCxNQUlPO0FBQ0wsVUFBSTZJLElBQUosRUFBVStDLFFBQVY7O0FBQ0EsV0FBSyxJQUFJckcsR0FBVCxJQUFlLEtBQUswRixPQUFwQixFQUE2QjtBQUMzQnBDLFlBQUksR0FBRyxLQUFLb0MsT0FBTCxDQUFhMUYsR0FBYixDQUFQO0FBQ0FzRCxZQUFJLENBQUM5SSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsYUFBdEI7QUFDQSxhQUFLb00sb0JBQUwsQ0FBMEJ4RCxJQUExQjtBQUNEO0FBQ0Y7QUFDRixHQXBKWTtBQXFKYjJDLFNBckphLG1CQXFKTGpHLEVBckpLLEVBcUpEO0FBQ1YsV0FBTyxLQUFLeUYsS0FBTCxDQUFXN0QsSUFBWCxDQUFnQixVQUFBMEIsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ3RELEVBQUwsSUFBV0EsRUFBZjtBQUFBLEtBQXBCLENBQVA7QUFDRCxHQXZKWTtBQXdKYjhHLHNCQXhKYSxnQ0F3SlF4RCxJQXhKUixFQXdKYztBQUN6QixRQUFNK0MsUUFBUSxHQUFHL0MsSUFBSSxDQUFDbEcsb0JBQUwsQ0FBMEIsVUFBMUIsRUFBc0MsQ0FBdEMsQ0FBakI7QUFDQWlKLFlBQVEsQ0FBQ3ZHLEtBQVQsQ0FBZWlILE1BQWYsR0FBd0JWLFFBQVEsQ0FBQ1csWUFBVCxHQUF3QixFQUF4QixHQUE2QixJQUFyRDtBQUNEO0FBM0pZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSXJQLGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsc0JBQWdCO0FBRGIsS0FEQztBQUlOcUQsT0FBRyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQUNMLHVCQUFlLFFBRFY7QUFFTCxzQkFBYyxRQUZUO0FBR0wsd0JBQWdCO0FBSFg7QUFESjtBQUpDLEdBRks7QUFlYnlMLE1BQUksRUFBRSxFQWZPO0FBaUJiak4sVUFqQmEsc0JBaUJGO0FBQUE7O0FBQ1RwQyx1QkFBT3VCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxRQUFRLEVBQUk7QUFDdEMsVUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0EsUUFBUSxDQUFDNk4sRUFBM0IsRUFBK0I7QUFDL0IsVUFBTUMsV0FBVyxHQUFHOU4sUUFBUSxDQUFDNk4sRUFBVCxDQUFZRCxJQUFoQzs7QUFDQSxXQUFLLElBQUloTixHQUFULElBQWdCa04sV0FBaEIsRUFBNkI7QUFDM0IsYUFBSSxDQUFDRixJQUFMLENBQVVoTixHQUFWLElBQWlCSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBVUwsR0FBbEMsQ0FBakI7QUFDQSxZQUFJa04sV0FBVyxDQUFDbE4sR0FBRCxDQUFYLENBQWlCbU4sUUFBckIsRUFBK0IsS0FBSSxDQUFDQyxJQUFMLENBQVVwTixHQUFWLEVBQS9CLEtBQ0ssS0FBSSxDQUFDcU4sS0FBTCxDQUFXck4sR0FBWDtBQUNOO0FBQ0YsS0FSRDtBQVNELEdBM0JZO0FBNkJib04sTUE3QmEsZ0JBNkJScE4sR0E3QlEsRUE2Qkg7QUFDUixTQUFLZ04sSUFBTCxDQUFVaE4sR0FBVixFQUFlTyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxhQUFoQztBQUNELEdBL0JZO0FBZ0NiNE0sT0FoQ2EsaUJBZ0NQck4sR0FoQ08sRUFnQ0Y7QUFDVCxTQUFLZ04sSUFBTCxDQUFVaE4sR0FBVixFQUFlTyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixhQUE3QjtBQUNELEdBbENZO0FBbUNiSSxRQW5DYSxrQkFtQ04wQixDQW5DTSxFQW1DSHhCLEVBbkNHLEVBbUNDO0FBQ1pBLE1BQUUsR0FBR0EsRUFBRSxDQUFDd00sUUFBSCxLQUFnQixJQUFoQixHQUF1QnhNLEVBQXZCLEdBQTRCQSxFQUFFLENBQUMwQixVQUFwQztBQUNBLFFBQU11RCxFQUFFLEdBQUdqRixFQUFFLENBQUNpQyxZQUFILENBQWdCLGFBQWhCLENBQVg7QUFDQSxRQUFNL0MsR0FBRyxHQUFHK0YsRUFBRSxDQUFDUyxLQUFILENBQVMsSUFBVCxFQUFlK0csR0FBZixFQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHcE4sUUFBUSxDQUFDQyxjQUFULENBQXdCMEYsRUFBeEIsQ0FBZDtBQUNBeUgsU0FBSyxDQUFDak4sU0FBTixDQUFnQkssTUFBaEIsQ0FBdUIsYUFBdkI7QUFDQSxTQUFLakMsSUFBTCxDQUFVLHFCQUFWLEVBQWlDcUIsR0FBakMsRUFBc0MsQ0FBQ3dOLEtBQUssQ0FBQ2pOLFNBQU4sQ0FBZ0JnQyxRQUFoQixDQUF5QixhQUF6QixDQUF2QztBQUNELEdBMUNZO0FBMkNia0wsdUJBM0NhLG1DQTJDVztBQUN0QmxQLFNBQUssQ0FBQzJFLElBQU4sQ0FBVzlDLFFBQVEsQ0FBQ2Usc0JBQVQsQ0FBZ0MsWUFBaEMsQ0FBWCxFQUNHdUMsT0FESCxDQUNXLFVBQUExRCxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDTyxTQUFKLENBQWNFLE1BQWQsQ0FBcUIsaUJBQXJCLENBQUo7QUFBQSxLQURkO0FBRUQ7QUE5Q1ksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7Ozs7QUFFQSxJQUFJL0MsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQjtBQURiLEtBREM7QUFJTnFELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCx5QkFBaUIsV0FEWjtBQUVMLG9CQUFZO0FBRlA7QUFESjtBQUpDLEdBRks7QUFjYlIsUUFkYSxrQkFjTjVDLEtBZE0sRUFjQztBQUFBOztBQUNaLFFBQUlBLEtBQUssSUFBSSxDQUFDSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFkLEVBQW9DO0FBQ2xDLFVBQU11UCxJQUFJLEdBQUd2UCxLQUFLLENBQUN3UCxHQUFOLEdBQVl4UCxLQUFLLENBQUN3UCxHQUFOLENBQVVuSCxLQUFWLENBQWdCLEdBQWhCLENBQVosR0FBbUMsRUFBaEQ7QUFDQXBHLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ2UsU0FBaEMsR0FBNEMsRUFBNUM7QUFDQXNNLFVBQUksQ0FBQ2hLLE9BQUwsQ0FBYSxVQUFBaUssR0FBRztBQUFBLGVBQUksS0FBSSxDQUFDQyxTQUFMLENBQWVELEdBQWYsQ0FBSjtBQUFBLE9BQWhCO0FBQ0Q7QUFDRixHQXBCWTtBQXFCYkMsV0FyQmEscUJBcUJIRCxHQXJCRyxFQXFCRTtBQUNiLFFBQU16QixTQUFTLEdBQUc5TCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFDQSxRQUFNUyxFQUFFLEdBQUdWLFFBQVEsQ0FBQ3VGLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLFFBQU1rSSxHQUFHLEdBQUd6TixRQUFRLENBQUN1RixhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQSxRQUFNbUksQ0FBQyxHQUFHMU4sUUFBUSxDQUFDNkksY0FBVCxDQUF3Qi9DLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixLQUFwQixDQUF4QixDQUFWO0FBQ0FyRixNQUFFLENBQUNnRixTQUFILEdBQWUsaUNBQWY7QUFDQStILE9BQUcsQ0FBQy9ILFNBQUosR0FBZ0IsY0FBaEI7QUFDQStILE9BQUcsQ0FBQzNMLFlBQUosQ0FBaUIsVUFBakIsRUFBNkJ5TCxHQUE3QjtBQUNBN00sTUFBRSxDQUFDTSxTQUFILEdBQWV1TSxHQUFmO0FBQ0FFLE9BQUcsQ0FBQ3pILFdBQUosQ0FBZ0IwSCxDQUFoQjtBQUNBaE4sTUFBRSxDQUFDc0YsV0FBSCxDQUFleUgsR0FBZjtBQUNBM0IsYUFBUyxDQUFDOUYsV0FBVixDQUFzQnRGLEVBQXRCO0FBQ0QsR0FqQ1k7QUFrQ2JpTixRQWxDYSxvQkFrQ0o7QUFBQTs7QUFDUCxRQUFNQyxHQUFHLEdBQUc1TixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBWjtBQUNBLFFBQUlzTixHQUFHLEdBQUdLLEdBQUcsQ0FBQ2hJLEtBQUosQ0FBVWlJLElBQVYsRUFBVjtBQUNBLFFBQUksQ0FBQ04sR0FBTCxFQUFVO0FBQ1YsU0FBS2hQLElBQUwsQ0FBVSxTQUFWLEVBQXFCZ1AsR0FBckIsRUFBMEJoUSxtQkFBT1EsS0FBakM7QUFDQTZQLE9BQUcsQ0FBQ2hJLEtBQUosR0FBWSxFQUFaO0FBQ0EySCxPQUFHLENBQUNuSCxLQUFKLENBQVUsR0FBVixFQUFlOUMsT0FBZixDQUF1QixVQUFBaUssR0FBRztBQUFBLGFBQUksTUFBSSxDQUFDQyxTQUFMLENBQWVELEdBQWYsQ0FBSjtBQUFBLEtBQTFCO0FBQ0QsR0F6Q1k7QUEwQ2JPLFdBMUNhLHFCQTBDSDVMLENBMUNHLEVBMENBeEIsRUExQ0EsRUEwQ0k7QUFDZixTQUFLbkMsSUFBTCxDQUFVLFlBQVYsRUFBd0JtQyxFQUFFLENBQUNpQyxZQUFILENBQWdCLFVBQWhCLENBQXhCLEVBQXFEcEYsbUJBQU9RLEtBQTVEO0FBQ0EyQyxNQUFFLENBQUMwQixVQUFILENBQWNBLFVBQWQsQ0FBeUJpSyxXQUF6QixDQUFxQzNMLEVBQUUsQ0FBQzBCLFVBQXhDO0FBQ0Q7QUE3Q1ksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7Ozs7QUFFQSxJQUFJOUUsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05zRCxPQUFHLEVBQUU7QUFDSHlDLFlBQU0sRUFBRTtBQUNOLHNCQUFjO0FBRFI7QUFETDtBQURDLEdBRks7QUFVYm9LLE9BQUssRUFBRSxTQVZNO0FBWWJwTyxVQVphLHNCQVlGO0FBQUE7O0FBQ1RwQyx1QkFBT3VCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxRQUFRLEVBQUk7QUFDdEMsVUFBTStPLEtBQUssR0FBRy9PLFFBQVEsSUFBSUEsUUFBUSxDQUFDNk4sRUFBckIsSUFBMkI3TixRQUFRLENBQUM2TixFQUFULENBQVlrQixLQUF2QyxHQUErQy9PLFFBQVEsQ0FBQzZOLEVBQVQsQ0FBWWtCLEtBQTNELEdBQW1FLFNBQWpGO0FBQ0EvTixjQUFRLENBQUNDLGNBQVQsa0JBQWtDOE4sS0FBbEMsR0FBMkM3SCxPQUEzQyxHQUFxRCxJQUFyRDs7QUFDQSxXQUFJLENBQUM4SCxNQUFMLENBQVlELEtBQVo7QUFDRCxLQUpEO0FBS0QsR0FsQlk7QUFvQmJFLFVBcEJhLG9CQW9CSi9MLENBcEJJLEVBb0JEeEIsRUFwQkMsRUFvQkc7QUFDZCxRQUFNcU4sS0FBSyxHQUFHck4sRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixZQUFoQixDQUFkO0FBQ0EsU0FBS3BFLElBQUwsQ0FBVSx1QkFBVixFQUFtQ3dQLEtBQW5DO0FBQ0EsU0FBS0MsTUFBTCxDQUFZRCxLQUFaO0FBQ0QsR0F4Qlk7QUF5QmJDLFFBekJhLGtCQXlCTkQsS0F6Qk0sRUF5QkM7QUFDWixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxRQUFNdE4sT0FBTyxHQUFHVCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQWhCO0FBQ0EsUUFBTXlGLFNBQVMsR0FBRywwQkFBbEI7O0FBQ0EsUUFBSXFJLEtBQUssS0FBSyxTQUFkLEVBQXlCO0FBQ3ZCdE4sYUFBTyxDQUFDTixTQUFSLENBQWtCRSxNQUFsQixDQUF5QnFGLFNBQXpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xqRixhQUFPLENBQUNOLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCc0YsU0FBdEI7QUFDRDtBQUNGO0FBbENZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O3FCQUVlLElBQUlsSSxZQUFKLENBQVU7QUFDdkJzRCxNQUFJLEVBQUUsU0FEaUI7QUFFdkIwQyxNQUFJLEVBQUUsWUFGaUI7QUFHdkI1RixRQUFNLEVBQUU7QUFDTnNRLGNBQVUsRUFBRSxDQUNWLG1CQURVLEVBRVYsdUJBRlUsRUFHVixtQkFIVSxFQUlWLDBCQUpVLEVBS1Ysa0JBTFUsRUFNVix5QkFOVSxFQU9WLGNBUFUsRUFRVixlQVJVLEVBU1Ysc0JBVFUsRUFVViwyQkFWVSxFQVdWLGNBWFUsRUFZVixjQVpVLEVBYVYsY0FiVSxFQWNWLDRCQWRVLEVBZVYsc0JBZlUsRUFnQlYsbUJBaEJVLEVBaUJWLFlBakJVLEVBa0JWLFNBbEJVLEVBbUJWLHFCQW5CVSxFQW9CVixnQkFwQlUsRUFxQlYsbUJBckJVLEVBc0JWLHFCQXRCVSxFQXVCVix5QkF2QlUsRUF3QlYsdUJBeEJVO0FBRE47QUFIZSxDQUFWLEM7Ozs7Ozs7Ozs7O0FDRmYseUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FlO0FBQ2JDLFNBQU8sRUFBRXhQLE9BQU8sQ0FBQ3lQLE9BQVIsQ0FBZ0JDLFdBQWhCLEdBQThCRixPQUQxQjtBQUViblAsVUFBUSxFQUFDO0FBQ1BzUCxhQUFTLEVBQUU7QUFDVEMsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FETTtBQUVUQyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUZNO0FBR1RsSyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUhNO0FBSVR3RCxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUpNO0FBS1QyRyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUxNO0FBTVRDLE9BQUMsRUFBRSxDQUFDLFVBQUQsRUFBYSxLQUFiLEVBQW9CLElBQXBCLENBTk07QUFPVCxZQUFNLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULENBUEc7QUFRVDdKLE9BQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxDQVJNO0FBU1Q4SixPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLElBQVgsQ0FUTTtBQVVUQyxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FWTTtBQVdULFdBQUssQ0FBQyxFQUFELEVBQUssSUFBTCxDQVhJO0FBWVQsV0FBSyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBWkk7QUFhVEMsYUFBTyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsQ0FiQTtBQWNUQyxlQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixLQUFsQixDQWRGO0FBZVRqQyxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FmSztBQWdCVGtDLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMO0FBaEJLLEtBREo7QUFtQlB2UCxXQUFPLEVBQUU7QUFDUCxXQUFLO0FBQUVpRyxhQUFLLEVBQUU7QUFBVCxPQURFO0FBRVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUZFO0FBR1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUhFO0FBSVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUpFO0FBS1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxFO0FBTVBaLE9BQUMsRUFBRTtBQUFFWSxhQUFLLEVBQUU7QUFBVDtBQU5JLEtBbkJGO0FBMkJQckcsV0FBTyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxJQURIO0FBRVAyUCxnQkFBVSxFQUFFLEtBRkw7QUFHUEMsZ0JBQVUsRUFBRSxJQUhMO0FBSVAzTSxXQUFLLEVBQUUsS0FKQTtBQUtQNE0sWUFBTSxFQUFFLE9BTEQ7QUFNUEMsY0FBUSxFQUFFLE1BTkg7QUFPUEMsVUFBSSxFQUFFLE1BUEM7QUFRUEMsY0FBUSxFQUFFLElBUkg7QUFTUEMsWUFBTSxFQUFFLFdBVEQ7QUFVUEMsVUFBSSxFQUFFLE1BVkM7QUFXUEMsUUFBRSxFQUFFLEVBWEc7QUFZUEMsZ0JBQVUsRUFBRTtBQVpMLEtBM0JGO0FBeUNQeFEsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxJQURIO0FBRUx3USxZQUFNLEVBQUUsSUFGSDtBQUdMQyxhQUFPLEVBQUU7QUFISixLQXpDQTtBQThDUDdMLFFBQUksRUFBRTtBQUNKOEwsWUFBTSxFQUFFLElBREo7QUFFSkMsY0FBUSxFQUFFLElBRk47QUFHSkMsaUJBQVcsRUFBRSxJQUhUO0FBSUpDLGdCQUFVLEVBQUUsS0FKUjtBQUtKQyxtQkFBYSxFQUFFLEtBTFg7QUFNSkMsZUFBUyxFQUFFLEtBTlA7QUFPSkMsaUJBQVcsRUFBRSxJQVBUO0FBUUpDLGlCQUFXLEVBQUUsSUFSVDtBQVNKQyxhQUFPLEVBQUUsSUFUTDtBQVVKQyxpQkFBVyxFQUFFLEtBVlQ7QUFXSkMsZUFBUyxFQUFFLElBWFA7QUFZSkMsYUFBTyxFQUFFLElBWkw7QUFhSkMsa0JBQVksRUFBRSxLQWJWO0FBY0pDLGFBQU8sRUFBRSxXQWRMO0FBZUoxTSxnQkFBVSxFQUFFLE9BZlI7QUFnQkoyTSxpQkFBVyxFQUFFLElBaEJUO0FBaUJKQyxjQUFRLEVBQUU7QUFqQk4sS0E5Q0M7QUFpRVA5RCxNQUFFLEVBQUU7QUFDRkQsVUFBSSxFQUFFO0FBQ0pnRSxZQUFJLEVBQUU7QUFBRTdELGtCQUFRLEVBQUU7QUFBWixTQURGO0FBRUpPLFlBQUksRUFBRTtBQUFFUCxrQkFBUSxFQUFFO0FBQVosU0FGRjtBQUdKM0IsYUFBSyxFQUFFO0FBQUUyQixrQkFBUSxFQUFFO0FBQVosU0FISDtBQUlKdk4sZUFBTyxFQUFFO0FBQUV1TixrQkFBUSxFQUFFO0FBQVosU0FKTDtBQUtKOEQsZUFBTyxFQUFFO0FBQUU5RCxrQkFBUSxFQUFFO0FBQVosU0FMTDtBQU1KbEcsYUFBSyxFQUFFO0FBQUVrRyxrQkFBUSxFQUFFO0FBQVosU0FOSDtBQU9KK0QsYUFBSyxFQUFFO0FBQUUvRCxrQkFBUSxFQUFFO0FBQVosU0FQSDtBQVFKZ0UsY0FBTSxFQUFFO0FBQUVoRSxrQkFBUSxFQUFFO0FBQVo7QUFSSixPQURKO0FBV0ZnQixXQUFLLEVBQUU7QUFYTDtBQWpFRyxHQUZJO0FBaUZiM08sU0FBTyxFQUFFO0FBQ1A0UixXQUFPLEVBQUU7QUFERixHQWpGSTtBQW9GYnRSLFdBQVMsRUFBRSxFQXBGRTtBQXFGYm1FLE1BQUksRUFBRTtBQUNKN0UsWUFBUSxFQUFFLEtBRE47QUFFSkksV0FBTyxFQUFFLEtBRkw7QUFHSk0sYUFBUyxFQUFFO0FBSFA7QUFyRk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQUE7QUFFYnVSLHNCQUFvQixFQUFFLEVBRlQ7QUFJYkMsaUJBQWUsRUFBRSxFQUpKO0FBTWJsSixhQUFXLEVBQUU7QUFDWG1KLGFBQVMsRUFBRSxTQURBO0FBRVhDLFNBQUssRUFBRSxTQUZJO0FBR1hDLFVBQU0sRUFBRSxTQUhHO0FBSVhDLFVBQU0sRUFBRSxTQUpHO0FBS1hDLE9BQUcsRUFBRSxTQUxNO0FBTVhDLFVBQU0sRUFBRSxTQU5HO0FBT1hDLFFBQUksRUFBRSxTQVBLO0FBUVhDLFNBQUssRUFBRTtBQVJJO0FBTkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZixJQUFNeFUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBU3lVLEdBQVQsRUFBYztBQUMxQixNQUFNQyxNQUFNLEdBQUd6VCxLQUFLLENBQUNDLE9BQU4sQ0FBY3VULEdBQWQsSUFBcUIsRUFBckIsR0FBMEIsRUFBekM7QUFDQSxNQUFJOUgsR0FBSjs7QUFDQSxPQUFLLElBQUlnSSxJQUFULElBQWlCRixHQUFqQixFQUFzQjtBQUNwQixRQUFJQSxHQUFHLENBQUNHLGNBQUosQ0FBbUJELElBQW5CLENBQUosRUFBOEI7QUFDNUJoSSxTQUFHLEdBQUc4SCxHQUFHLENBQUNFLElBQUQsQ0FBVDs7QUFDQSxVQUFJaEksR0FBRyxLQUFLLElBQVIsSUFBZ0IsUUFBT0EsR0FBUCxNQUFlLFFBQW5DLEVBQTZDO0FBQzNDK0gsY0FBTSxDQUFDQyxJQUFELENBQU4sR0FBZTNVLEtBQUssQ0FBQzJNLEdBQUQsQ0FBcEI7QUFDRCxPQUZELE1BR0UrSCxNQUFNLENBQUNDLElBQUQsQ0FBTixHQUFlaEksR0FBZjtBQUNIO0FBQ0Y7O0FBQ0QsU0FBTytILE1BQVA7QUFDRCxDQWJEOztRQWVTMVUsSyxHQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFJLFU7O1FBQUFBLFU7OztBQUVYLHNCQUFZeVUsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmQSxPQUFHLENBQUNDLE1BQUosR0FBYSxFQUFiO0FBQ0FELE9BQUcsQ0FBQ0UsV0FBSixHQUFrQixFQUFsQjtBQUVBLG9GQUFNRixHQUFOO0FBRUEsVUFBS0csb0JBQUwsSUFBNkIsTUFBS0MsWUFBTCxFQUE3QjtBQUNBLEtBQUMsTUFBS0MsU0FBTixJQUFtQixNQUFLQyxZQUFMLEVBQW5CO0FBUGU7QUFRaEI7Ozs7bUNBQ2NDLE0sRUFBUTlPLEksRUFBTXRCLEMsRUFBRztBQUM5QixVQUFJeEIsRUFBRSxHQUFHd0IsQ0FBQyxDQUFDMFAsTUFBWDtBQUFBLFVBQ0lXLFFBREo7QUFBQSxVQUNjQyxJQURkO0FBQUEsVUFDb0I3USxJQURwQjtBQUFBLFVBQzBCOFEsQ0FEMUI7QUFBQSxVQUM2QkMsSUFEN0I7QUFBQSxVQUNtQ0MsT0FEbkM7QUFBQSxVQUM0Q0MsS0FENUM7O0FBR0EsV0FBS0wsUUFBTCxJQUFpQkQsTUFBakIsRUFBeUI7QUFDdkJHLFNBQUMsR0FBR0YsUUFBUSxDQUFDLENBQUQsQ0FBWjtBQUNBQyxZQUFJLEdBQUdELFFBQVA7QUFDQUcsWUFBSSxHQUFHRCxDQUFDLEtBQUssR0FBYjtBQUNBRSxlQUFPLEdBQUdGLENBQUMsS0FBSyxHQUFoQjtBQUNBRyxhQUFLLEdBQUdILENBQUMsS0FBSyxHQUFkO0FBRUEsWUFBSUMsSUFBSSxJQUFJQyxPQUFaLEVBQXFCSixRQUFRLEdBQUdBLFFBQVEsQ0FBQ3BLLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBWDs7QUFFckIsWUFBSXlLLEtBQUssSUFDTEQsT0FBTyxJQUFJalMsRUFBRSxDQUFDUCxTQUFILENBQWFnQyxRQUFiLENBQXNCb1EsUUFBdEIsQ0FEWCxJQUVBRyxJQUFJLElBQUloUyxFQUFFLENBQUNpRixFQUFILEtBQVU0TSxRQUZsQixJQUdBN1IsRUFBRSxDQUFDd00sUUFBSCxDQUFZakYsV0FBWixPQUE4QnNLLFFBSGxDLEVBSUU7QUFFQTVRLGNBQUksR0FBRzJRLE1BQU0sQ0FBQ0UsSUFBRCxDQUFiO0FBRUEsY0FBSSxPQUFPN1EsSUFBUCxLQUFnQixVQUFwQixFQUFnQ0EsSUFBSSxDQUFDTyxDQUFELEVBQUl4QixFQUFKLENBQUosQ0FBaEMsS0FDSyxJQUFJLEtBQUtpQixJQUFMLENBQUosRUFBZ0IsS0FBS0EsSUFBTCxFQUFXTyxDQUFYLEVBQWN4QixFQUFkO0FBRXJCO0FBQ0Q7QUFDRjtBQUNGOzs7bUNBQ2M7QUFBQTs7QUFDYixXQUFLWixFQUFMLENBQVEsZUFBUixFQUF5QixVQUFBQSxFQUFFLEVBQUk7QUFDN0IsWUFBSUEsRUFBSixFQUFRLE1BQUksQ0FBQ3FTLFlBQUwsR0FBUixLQUNLLE1BQUksQ0FBQ1UsZUFBTDtBQUNOLE9BSEQ7QUFJRDs7O2dDQUNXclAsSSxFQUFNN0IsSSxFQUFNakIsRSxFQUFJO0FBQzFCQSxRQUFFLEdBQUdBLEVBQUUsSUFBSSxLQUFLQSxFQUFoQjtBQUNBLFVBQU1vUyxPQUFPLEdBQUcsT0FBT25SLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkJBLElBQTdCLEdBQW9DLEtBQUtBLElBQUwsQ0FBcEQ7QUFFQWpCLFFBQUUsQ0FBQ3FTLGdCQUFILENBQW9CdlAsSUFBcEIsRUFBMEJzUCxPQUExQixFQUFtQyxLQUFuQzs7QUFFQSxVQUFJcFMsRUFBRSxLQUFLLEtBQUtBLEVBQWhCLEVBQW9CO0FBQ2xCLFlBQUksQ0FBQyxLQUFLc1IsTUFBTCxDQUFZeE8sSUFBWixDQUFMLEVBQXdCLEtBQUt3TyxNQUFMLENBQVl4TyxJQUFaLElBQW9CLEVBQXBCOztBQUN4QixhQUFLd08sTUFBTCxDQUFZeE8sSUFBWixFQUFrQmxGLElBQWxCLENBQXVCd1UsT0FBdkI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLYixXQUFMLENBQWlCM1QsSUFBakIsQ0FBc0IsQ0FBQ29DLEVBQUQsRUFBSzhDLElBQUwsRUFBV3NQLE9BQVgsQ0FBdEI7QUFDRDtBQUNGOzs7bUNBQ2M7QUFDYixVQUFJbFYsTUFBTSxHQUFHLEtBQUtBLE1BQWxCO0FBQUEsVUFDSW9WLFNBREo7QUFBQSxVQUNldFMsRUFEZjtBQUFBLFVBQ21CNFIsTUFEbkI7QUFBQSxVQUMyQjlPLElBRDNCO0FBQUEsVUFDaUNzUCxPQURqQztBQUdBLFVBQUksQ0FBQ2xWLE1BQUQsSUFBVyxFQUFFb1YsU0FBUyxHQUFHcFYsTUFBTSxDQUFDc0QsR0FBckIsQ0FBWCxJQUF3QyxFQUFFUixFQUFFLEdBQUcsS0FBS0EsRUFBWixDQUE1QyxFQUE2RCxPQUFPLEtBQVA7O0FBRTdELFdBQUs4QyxJQUFMLElBQWF3UCxTQUFiLEVBQXdCO0FBQ3RCVixjQUFNLEdBQUdVLFNBQVMsQ0FBQ3hQLElBQUQsQ0FBbEI7QUFDQXNQLGVBQU8sR0FBRyxLQUFLRyxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLQyxjQUF0QixFQUFzQ1osTUFBdEMsRUFBOEM5TyxJQUE5QyxDQUFWO0FBQ0E5QyxVQUFFLENBQUNxUyxnQkFBSCxDQUFvQnZQLElBQXBCLEVBQTBCc1AsT0FBMUIsRUFBbUMsS0FBbkM7QUFDQSxZQUFJLENBQUMsS0FBS2QsTUFBTCxDQUFZeE8sSUFBWixDQUFMLEVBQXdCLEtBQUt3TyxNQUFMLENBQVl4TyxJQUFaLElBQW9CLEVBQXBCOztBQUN4QixhQUFLd08sTUFBTCxDQUFZeE8sSUFBWixFQUFrQmxGLElBQWxCLENBQXVCd1UsT0FBdkI7QUFDRDtBQUNGOzs7c0NBQ2lCO0FBQ2hCLFVBQUl0UCxJQUFKLEVBQVV3TyxNQUFWLEVBQWtCM0wsQ0FBbEI7O0FBRUEsV0FBSzdDLElBQUwsSUFBYSxLQUFLd08sTUFBbEIsRUFBMEI7QUFDeEJBLGNBQU0sR0FBRyxLQUFLQSxNQUFMLENBQVl4TyxJQUFaLENBQVQ7QUFDQTZDLFNBQUMsR0FBRzJMLE1BQU0sQ0FBQ3JOLE1BQVg7O0FBQ0EsZUFBTzBCLENBQUMsRUFBUixFQUFZO0FBQ1YsZUFBSzNGLEVBQUwsQ0FBUXlTLG1CQUFSLENBQTRCM1AsSUFBNUIsRUFBa0N3TyxNQUFNLENBQUMzTCxDQUFELENBQXhDLEVBQTZDLEtBQTdDOztBQUNBMkwsZ0JBQU0sQ0FBQzFGLE1BQVAsQ0FBY2pHLENBQWQsRUFBaUIsQ0FBakI7QUFDRDtBQUNGOztBQUVELFVBQUkrTSxNQUFNLEdBQUcsS0FBS25CLFdBQWxCO0FBQUEsVUFBK0IzTCxDQUFDLEdBQUcsQ0FBbkM7QUFBQSxVQUFzQytNLEdBQXRDO0FBQ0FoTixPQUFDLEdBQUcrTSxNQUFNLENBQUN6TyxNQUFYOztBQUVBLGFBQU8yQixDQUFDLEdBQUdELENBQVgsRUFBY0MsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCK00sV0FBRyxHQUFHRCxNQUFNLENBQUM5TSxDQUFELENBQVo7QUFDQStNLFdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT0YsbUJBQVAsQ0FBMkJFLEdBQUcsQ0FBQyxDQUFELENBQTlCLEVBQW1DQSxHQUFHLENBQUMsQ0FBRCxDQUF0QyxFQUEyQyxLQUEzQztBQUNEO0FBQ0Y7Ozs7RUEzRjZCaFcsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhDOztBQUVBLElBQU1LLGFBQWEsR0FBRyxJQUFJTCxlQUFKLENBQVk7QUFDaENzQyxVQURnQyxzQkFDckI7QUFBQTs7QUFDVDJULFVBQU0sQ0FBQ1AsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQVEsS0FBSyxFQUFJO0FBQ3hDLFVBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWVyTixLQUFmLENBQXFCLEdBQXJCLEVBQTBCK0csR0FBMUIsRUFBYjs7QUFDQSxVQUFJLENBQUMsZUFBRCxFQUFrQixnQkFBbEIsRUFBb0MsZUFBcEMsRUFBcUQsa0JBQXJELEVBQXlFNUcsUUFBekUsQ0FBa0ZpTixJQUFsRixDQUFKLEVBQTZGO0FBQzNGLGFBQUksQ0FBQ2pWLElBQUwsQ0FBVSx1QkFBVixFQUFtQztBQUNqQ21WLGlCQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FEa0I7QUFFakNDLGtCQUFRLEVBQUVKLEtBQUssQ0FBQ0UsUUFBTixDQUFlck4sS0FBZixDQUFxQixHQUFyQixFQUEwQitHLEdBQTFCLEdBQWdDL0csS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkN3TixLQUEzQyxLQUFxRCxHQUFyRCxHQUEyREwsS0FBSyxDQUFDTSxNQUFqRSxHQUEwRSxHQUExRSxHQUFnRk4sS0FBSyxDQUFDTyxLQUYvRDtBQUdqQ0MsY0FBSSxFQUFHLElBQUkxSixJQUFKLEVBQUQsQ0FBYTJKLE9BQWI7QUFIMkIsU0FBbkM7QUFLRDtBQUNGLEtBVEQsRUFTRyxLQVRIO0FBVUQ7QUFaK0IsQ0FBWixDQUF0Qjs7cUJBZWV0VyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDakJBLFVBQVN1VyxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDbEMsT0FBSyxJQUFJNU4sQ0FBVCxJQUFjNE4sSUFBZDtBQUNFLFFBQUksQ0FBQ0QsSUFBSSxDQUFDM04sQ0FBRCxDQUFULEVBQWMyTixJQUFJLENBQUMzTixDQUFELENBQUosR0FBVTROLElBQUksQ0FBQzVOLENBQUQsQ0FBZDtBQURoQjs7QUFHQSxTQUFPMk4sSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xELElBQU05VyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFFakMsU0FBT3dCLE9BQU8sQ0FBQ2lPLElBQVIsQ0FBYXVILEtBQWIsQ0FBbUI7QUFBRUMsaUJBQWEsRUFBRSxJQUFqQjtBQUF1QmxWLFVBQU0sRUFBRTtBQUEvQixHQUFuQixFQUEwREgsSUFBMUQsQ0FBK0QsVUFBQTZOLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFSO0FBQUEsR0FBbkUsQ0FBUDtBQUNELENBSEQ7O1FBS1N6UCxlLEdBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xULElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVM0TixHQUFULEVBQWM7QUFDOUIsTUFBTThJLENBQUMsR0FBRzlJLEdBQUcsQ0FBQytJLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLE1BQUlELENBQUMsS0FBSyxDQUFDLENBQVgsRUFBYyxPQUFPOUksR0FBUCxDQUFkLEtBQ0ssT0FBT0EsR0FBRyxDQUFDcEQsTUFBSixDQUFXLENBQVgsRUFBY2tNLENBQWQsQ0FBUDtBQUNOLENBSkQ7O1FBTVMxVyxTLEdBQUFBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkN1Q00sWUFBVztBQUN4QnFDLFVBQVEsQ0FBQytTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QztBQUFBLFdBQU13QixpQkFBaUIsRUFBdkI7QUFBQSxHQUE5QyxFQUF5RTtBQUN2RUMsV0FBTyxFQUFFLEtBRDhEO0FBRXZFQyxXQUFPLEVBQUUsSUFGOEQ7QUFHdkVDLFFBQUksRUFBRTtBQUhpRSxHQUF6RTtBQUtELEM7O0FBbkREOzs7Ozs7OztBQVFBLFNBQVNILGlCQUFULEdBQTZCO0FBQzNCLE1BQUk3VCxFQUFKLEVBQVFpVSxJQUFSLEVBQWNDLE9BQWQsQ0FEMkIsQ0FFM0I7O0FBQ0E1VSxVQUFRLENBQUM2VSxlQUFULENBQXlCL1MsWUFBekIsQ0FBc0MsTUFBdEMsRUFBOENuRCxPQUFPLENBQUNzTCxJQUFSLENBQWE2SyxhQUFiLEdBQTZCbkssT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBOUMsRUFIMkIsQ0FJM0I7O0FBQ0EsTUFBTW9LLFlBQVksR0FBRy9VLFFBQVEsQ0FBQ2dWLGdCQUFULENBQTBCLGlCQUExQixDQUFyQjtBQUNBLE1BQU1DLFlBQVksR0FBR2pWLFFBQVEsQ0FBQ2dWLGdCQUFULENBQTBCLG1CQUExQixDQUFyQjtBQU4yQjtBQUFBO0FBQUE7O0FBQUE7QUFRM0IseUJBQVVELFlBQVYsOEhBQXdCO0FBQXBCclUsUUFBb0I7QUFDdEJrVSxhQUFPLEdBQUdsVSxFQUFFLENBQUNrVSxPQUFiO0FBQ0EsVUFBTU0sTUFBTSxHQUFHTixPQUFPLENBQUNNLE1BQXZCOztBQUVBLFVBQUlBLE1BQUosRUFBWTtBQUNWUCxZQUFJLEdBQUdoVyxPQUFPLENBQUNzTCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JnTCxNQUF4QixDQUFQOztBQUVBLFlBQUdQLElBQUksSUFBSUEsSUFBSSxJQUFJLElBQW5CLEVBQXlCO0FBQ3ZCalUsWUFBRSxDQUFDbUYsV0FBSCxHQUFpQjhPLElBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBbkIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQW9CM0IsMEJBQVVNLFlBQVYsbUlBQXdCO0FBQXBCdlUsUUFBb0I7QUFDdEJrVSxhQUFPLEdBQUdsVSxFQUFFLENBQUNrVSxPQUFiO0FBRUEsT0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QnRSLE9BQXpCLENBQWlDLFVBQUE2UixJQUFJLEVBQUk7QUFDdkMsWUFBTUMsUUFBUSxHQUFHUixPQUFPLENBQUMsU0FBU08sSUFBVixDQUF4Qjs7QUFFQSxZQUFJQyxRQUFKLEVBQWM7QUFDWlQsY0FBSSxHQUFHaFcsT0FBTyxDQUFDc0wsSUFBUixDQUFhQyxVQUFiLENBQXdCa0wsUUFBeEIsQ0FBUDs7QUFFQSxjQUFJVCxJQUFJLElBQUlBLElBQUksSUFBSSxJQUFwQixFQUEwQjtBQUN4QmpVLGNBQUUsQ0FBQ29CLFlBQUgsQ0FBZ0JxVCxJQUFJLENBQUNsTixXQUFMLEVBQWhCLEVBQW9DME0sSUFBcEM7QUFDRDtBQUNGO0FBQ0YsT0FWRDtBQVdEO0FBbEMwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUM1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0QsSUFBSVUsTUFBTSxHQUFHLEVBQWI7Ozs7Ozs7Ozs7O3VCQUlLQyxLLEVBQU94QyxPLEVBQVM7QUFDakIsVUFBSSxDQUFDdUMsTUFBTSxDQUFDQyxLQUFELENBQVgsRUFBb0JELE1BQU0sQ0FBQ0MsS0FBRCxDQUFOLEdBQWdCLEVBQWhCO0FBRXBCRCxZQUFNLENBQUNDLEtBQUQsQ0FBTixDQUFjaFgsSUFBZCxDQUFtQndVLE9BQW5CO0FBQ0Q7Ozt5QkFDSWxWLE0sRUFBaUI7QUFBQTs7QUFBQSx3Q0FBTjJYLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNwQjNYLFlBQU0sR0FBR0EsTUFBTSxDQUFDd0ksS0FBUCxDQUFhLEdBQWIsQ0FBVDtBQUVBLFVBQUlFLENBQUMsR0FBRyxDQUFSO0FBQUEsVUFBV0QsQ0FBQyxHQUFHekksTUFBTSxDQUFDK0csTUFBdEI7QUFBQSxVQUE4QjZRLEtBQTlCOztBQUVBLGFBQU9sUCxDQUFDLEdBQUdELENBQVgsRUFBY0MsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCa1AsYUFBSyxHQUFHSCxNQUFNLENBQUN6WCxNQUFNLENBQUMwSSxDQUFELENBQVAsQ0FBZDtBQUVBLFlBQUlrUCxLQUFKLEVBQ0VBLEtBQUssQ0FBQ2xTLE9BQU4sQ0FBYyxVQUFBd1AsT0FBTztBQUFBLGlCQUFJQSxPQUFPLENBQUMyQyxLQUFSLENBQWMsS0FBZCxFQUFvQkYsSUFBcEIsQ0FBSjtBQUFBLFNBQXJCO0FBQ0g7QUFDRjs7OzRCQUNPRCxLLEVBQWdCO0FBQUEseUNBQU5DLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixhQUFPNVcsT0FBTyxDQUFDeVAsT0FBUixDQUFnQnNILFdBQWhCLENBQTRCO0FBQUVDLFVBQUUsRUFBRUwsS0FBTjtBQUFhQyxZQUFJLEVBQUVBLElBQW5CO0FBQXlCSyxZQUFJLEVBQUU7QUFBL0IsT0FBNUIsV0FBeUUsWUFBTSxDQUFFLENBQWpGLENBQVA7QUFDRDs7OzBCQUNLQyxPLEVBQVNDLEksRUFBZ0I7QUFBQSx5Q0FBUEMsS0FBTztBQUFQQSxhQUFPO0FBQUE7O0FBQzdCLGFBQU8sWUFBbUI7QUFBQSwyQ0FBUEMsS0FBTztBQUFQQSxlQUFPO0FBQUE7O0FBQ3hCLGVBQU9GLElBQUksQ0FBQ0wsS0FBTCxDQUFXSSxPQUFYLEVBQW9CRSxLQUFLLENBQUMxTyxNQUFOLENBQWEyTyxLQUFiLENBQXBCLENBQVA7QUFDRCxPQUZEO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWEzWSxPOztRQUFBQSxPOzs7QUFFWCxtQkFBWTBVLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZjs7QUFFQSxTQUFLa0UsQ0FBTCxJQUFVbEUsR0FBVjtBQUFlLFlBQUtrRSxDQUFMLElBQVVsRSxHQUFHLENBQUNrRSxDQUFELENBQWI7QUFBZjs7QUFFQSxRQUFJclksTUFBTSxHQUFHLE1BQUtBLE1BQWxCO0FBQUEsUUFDSXNZLFNBREo7QUFBQSxRQUNlRCxDQURmO0FBQUEsUUFDa0IvVCxDQURsQjtBQUFBLFFBQ3FCNFEsT0FEckI7O0FBR0EsUUFBSWxWLE1BQU0sS0FBS3NZLFNBQVMsR0FBR3RZLE1BQU0sQ0FBQ0MsR0FBeEIsQ0FBVixFQUF3QztBQUN0QyxXQUFLcUUsQ0FBTCxJQUFVZ1UsU0FBVixFQUFxQjtBQUNuQnBELGVBQU8sR0FBR29ELFNBQVMsQ0FBQ2hVLENBQUQsQ0FBbkI7QUFDQSxZQUFJLE1BQUs0USxPQUFMLENBQUosRUFDRSxNQUFLaFQsRUFBTCxDQUFRb0MsQ0FBUixFQUFXLE1BQUsrUSxLQUFMLGdDQUFpQixNQUFLSCxPQUFMLENBQWpCLENBQVg7QUFDSDtBQUNGOztBQUNELEtBQUMsTUFBS25ULFFBQU4sSUFBa0IsTUFBS0EsUUFBTCxFQUFsQjtBQWZlO0FBZ0JoQjs7O0VBbEIwQndXLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhM1ksSzs7UUFBQUEsSzs7O0FBRVgsaUJBQVl1VSxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2YsK0VBQU1BLEdBQU47QUFFQSxVQUFLcUUsSUFBTCxHQUFZLElBQVo7QUFFQSxRQUFNNVMsSUFBSSxHQUFHLE1BQUtBLElBQWxCO0FBRUE3RSxXQUFPLENBQUN5UCxPQUFSLENBQWdCaUksU0FBaEIsQ0FBMEJDLFdBQTFCLENBQXNDLE1BQUtyRCxLQUFMLGdDQUFpQixNQUFLc0QsV0FBdEIsQ0FBdEM7QUFFQSxRQUFJL1MsSUFBSSxLQUFLLFlBQVQsSUFBeUJBLElBQUksS0FBSyxZQUF0QyxFQUFvRCxNQUFLZ1QsV0FBTDs7QUFFcEQsVUFBS0Msa0JBQUw7O0FBWGU7QUFZaEI7Ozs7MkJBQ003WSxNLEVBQVE7QUFDYixXQUFLNlksa0JBQUwsQ0FBd0I3WSxNQUF4QjtBQUNEOzs7dUNBQ2tCQSxNLEVBQVE7QUFDekJBLFlBQU0sR0FBR0EsTUFBTSxJQUFJLEtBQUtBLE1BQXhCO0FBQ0EsVUFBSThZLFlBQUosRUFBa0JDLHFCQUFsQjs7QUFFQSxVQUFJL1ksTUFBSixFQUFZO0FBQ1Y4WSxvQkFBWSxHQUFHOVksTUFBTSxDQUFDZ1osTUFBdEI7O0FBQ0EsWUFBSUYsWUFBSixFQUFrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNoQixpQ0FBY0EsWUFBZDtBQUFBLGtCQUFTeFUsQ0FBVDtBQUNFLG1CQUFLcEMsRUFBTCxDQUFRb0MsQ0FBUixFQUFXLEtBQUsrUSxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLeUMsV0FBdEIsRUFBbUN4VCxDQUFuQyxDQUFYO0FBREY7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqQjs7QUFDRHlVLDZCQUFxQixHQUFHL1ksTUFBTSxDQUFDc1EsVUFBL0I7O0FBQ0EsWUFBSXlJLHFCQUFKLEVBQTJCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3pCLGtDQUFjQSxxQkFBZDtBQUFBLGtCQUFTbEUsQ0FBVDtBQUNFLG1CQUFLM1MsRUFBTCxDQUFRMlMsQ0FBUixFQUFXLEtBQUtRLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUs0RCxXQUF0QixFQUFtQ3BFLENBQW5DLENBQVg7QUFERjtBQUR5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRzFCO0FBQ0Y7QUFDRjs7O2dDQUNXcUUsRyxFQUFLelQsTSxFQUFRMFQsWSxFQUFjO0FBQ3JDRCxTQUFHLENBQUN2QixJQUFKLEdBQVd1QixHQUFHLENBQUN2QixJQUFKLElBQVksRUFBdkI7QUFDQSxVQUFJQSxJQUFJLEdBQUcsR0FBR2xPLE1BQUgsQ0FBVXlQLEdBQUcsQ0FBQ25CLEVBQWQsRUFBa0JtQixHQUFHLENBQUN2QixJQUF0QixDQUFYO0FBQ0EsVUFBSSxDQUFDbFMsTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQ3ZDLElBQXZCLEVBQTZCeVUsSUFBSSxHQUFHQSxJQUFJLENBQUNsTyxNQUFMLENBQVloRSxNQUFaLEVBQW9CMFQsWUFBcEIsQ0FBUDtBQUM3QixXQUFLeFksSUFBTCxDQUFVa1gsS0FBVixDQUFnQixJQUFoQixFQUFzQkYsSUFBdEI7QUFDQSxVQUFJdUIsR0FBRyxDQUFDbEIsSUFBUixFQUFjLE9BQU8sSUFBUCxDQUx1QixDQUtWOztBQUMzQixhQUFPLEtBQVA7QUFDRDs7O2dDQUNXMVQsQyxFQUFZO0FBQ3RCLFVBQU1zQixJQUFJLEdBQUcsS0FBS0EsSUFBbEI7O0FBRHNCLHdDQUFOK1IsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBRXRCLFVBQUl5QixHQUFHLEdBQUc7QUFBRXJCLFVBQUUsRUFBRXpULENBQU47QUFBU3FULFlBQUksRUFBRUE7QUFBZixPQUFWO0FBQ0EsVUFBSS9SLElBQUksS0FBSyxTQUFiLEVBQXdCN0UsT0FBTyxDQUFDeVAsT0FBUixDQUFnQnNILFdBQWhCLENBQTRCc0IsR0FBNUIsV0FBdUMsWUFBTSxDQUFFLENBQS9DLEVBQXhCLEtBQ0ssSUFBSXhULElBQUksS0FBSyxZQUFiLEVBQTJCO0FBQzlCLFlBQU15VCxPQUFPLEdBQUcxQixJQUFJLENBQUNBLElBQUksQ0FBQzVRLE1BQUwsR0FBYyxDQUFmLENBQXBCO0FBQ0EsWUFBSS9FLEdBQUo7O0FBQ0EsWUFBSXFYLE9BQU8sS0FBS0MsU0FBWixLQUEwQnRYLEdBQUcsR0FBR3FYLE9BQU8sQ0FBQ3JYLEdBQXhDLENBQUosRUFBa0Q7QUFDaEQsY0FBSUEsR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDcEJqQixtQkFBTyxDQUFDaU8sSUFBUixDQUFhdUgsS0FBYixDQUFtQjtBQUFFalYsb0JBQU0sRUFBRTtBQUFWLGFBQW5CLEVBQXFDSCxJQUFyQyxDQUEwQyxVQUFBNk4sSUFBSSxFQUFJO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2hELHNDQUFnQkEsSUFBaEI7QUFBQSxzQkFBU2hOLElBQVQ7QUFDRWpCLHlCQUFPLENBQUNpTyxJQUFSLENBQWE4SSxXQUFiLENBQXlCOVYsSUFBRyxDQUFDK0YsRUFBN0IsRUFBaUNxUixHQUFqQyxFQUFzQztBQUFFOVQsMkJBQU8sRUFBRStULE9BQU8sQ0FBQy9ULE9BQVIsSUFBbUI7QUFBOUIsbUJBQXRDLFdBQStFLFlBQU0sQ0FBRSxDQUF2RjtBQURGO0FBRGdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHakQsYUFIRDtBQUlELFdBTEQsTUFLTztBQUNMdkUsbUJBQU8sQ0FBQ2lPLElBQVIsQ0FBYThJLFdBQWIsQ0FBeUJ1QixPQUFPLENBQUNyWCxHQUFqQyxFQUFzQ29YLEdBQXRDLEVBQTJDO0FBQUU5VCxxQkFBTyxFQUFFK1QsT0FBTyxDQUFDL1QsT0FBUixJQUFtQjtBQUE5QixhQUEzQyxXQUFvRixZQUFNLENBQUUsQ0FBNUY7QUFDRDtBQUNGLFNBVEQsTUFTTztBQUNMdkUsaUJBQU8sQ0FBQ2lPLElBQVIsQ0FBYXVILEtBQWIsQ0FBbUI7QUFBQztBQUFELFdBQW5CLEVBQWdFcFYsSUFBaEUsQ0FBcUUsVUFBQTZOLElBQUksRUFBSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUMzRSxvQ0FBZ0JBLElBQWhCO0FBQUEsb0JBQVNoTixLQUFUO0FBQ0VqQix1QkFBTyxDQUFDaU8sSUFBUixDQUFhOEksV0FBYixDQUF5QjlWLEtBQUcsQ0FBQytGLEVBQTdCLEVBQWlDcVIsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7Z0NBQ1c5VSxDLEVBQVk7QUFBQSx5Q0FBTnFULElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixVQUFNeUIsR0FBRyxHQUFHO0FBQUVyQixVQUFFLEVBQUV6VCxDQUFOO0FBQVNxVCxZQUFJLEVBQUVBO0FBQWYsT0FBWjtBQUNBLFVBQUksS0FBS2EsSUFBVCxFQUFlLEtBQUtBLElBQUwsQ0FBVVMsV0FBVixDQUFzQkcsR0FBdEI7QUFDaEI7OztrQ0FDYTtBQUNaLFVBQUksQ0FBQyxLQUFLRyxrQkFBVixFQUE4QjtBQUM1QixhQUFLQyxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLcEUsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS21FLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTWhCLElBQUksR0FBRyxLQUFLQSxJQUFMLEdBQVksS0FBS0EsSUFBTCxJQUFhelgsT0FBTyxDQUFDeVAsT0FBUixDQUFnQmdKLE9BQWhCLENBQXdCO0FBQUV0VyxZQUFJLEVBQUUsS0FBS0E7QUFBYixPQUF4QixDQUF0QztBQUNBc1YsVUFBSSxDQUFDa0IsWUFBTCxDQUFrQmhCLFdBQWxCLENBQThCO0FBQUEsZUFBTSxNQUFJLENBQUNGLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JoUixFLEVBQUk7QUFBQTs7QUFDekJ6RyxhQUFPLENBQUN5UCxPQUFSLENBQWdCbUosU0FBaEIsQ0FBMEJqQixXQUExQixDQUFzQyxVQUFBRixJQUFJLEVBQUk7QUFDNUNBLFlBQUksQ0FBQ0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLE1BQUksQ0FBQ3JELEtBQUwsQ0FBVyxNQUFYLEVBQWlCLE1BQUksQ0FBQ3NELFdBQXRCLENBQTNCO0FBQ0EsU0FBQ25SLEVBQUQsSUFBT0EsRUFBRSxFQUFUO0FBQ0QsT0FIRDtBQUlEOzs7O0VBeEZ3Qi9ILGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGM0I7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhRSxNOztRQUFBQSxNOzs7QUFFWCxrQkFBWXdVLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZixnRkFBTUEsR0FBTjtBQUVBLFVBQUt5RixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUVBLFVBQUs1WSxhQUFMLEdBQXFCNlksNEJBQWlCN1QsSUFBakIsQ0FBc0I3RSxRQUF0QixHQUFpQyxNQUFqQyxHQUEwQyxPQUEvRDtBQUNBLFVBQUsyWSxZQUFMLEdBQW9CRCw0QkFBaUI3VCxJQUFqQixDQUFzQnpFLE9BQXRCLEdBQWdDLE1BQWhDLEdBQXlDLE9BQTdEO0FBQ0EsVUFBS3dZLGNBQUwsR0FBc0JGLDRCQUFpQjdULElBQWpCLENBQXNCbkUsU0FBdEIsR0FBa0MsTUFBbEMsR0FBMkMsT0FBakU7QUFSZTtBQVNoQjs7OzsyQkFFTTtBQUFBOztBQUNMLGFBQU9mLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9GLEtBQWhCLENBQXNCbEYsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFILE9BQU8sRUFBSTtBQUNqRCxZQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ2lGLElBQXZCLEVBQTZCO0FBQzNCLGdCQUFJLENBQUNnVSxRQUFMLENBQWNqWixPQUFPLENBQUNpRixJQUF0QjtBQUNEO0FBQ0YsT0FKTSxDQUFQO0FBS0Q7Ozs2QkFFUUEsSSxFQUFNO0FBQ2IsV0FBSyxJQUFJaVUsSUFBVCxJQUFpQmpVLElBQWpCLEVBQXVCO0FBQ3JCLGFBQUssVUFBVWlVLElBQWYsSUFBdUJqVSxJQUFJLENBQUNpVSxJQUFELENBQUosR0FBYSxNQUFiLEdBQXNCLE9BQTdDO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQUE7O0FBQ2QsV0FBS0MsSUFBTCxHQUFZaFosSUFBWixDQUFpQjtBQUFBLGVBQU0sTUFBSSxDQUFDUixJQUFMLENBQVUsNkJBQVYsQ0FBTjtBQUFBLE9BQWpCO0FBQ0Q7OzswQkFFc0I7QUFBQTs7QUFBQSxVQUFuQmtNLEtBQW1CLHVFQUFYLFNBQVc7O0FBQ3JCLFVBQUksS0FBS2dOLFlBQVQsRUFBdUI7QUFDckIsZUFBUSxJQUFJTyxPQUFKLENBQVksVUFBQUMsQ0FBQztBQUFBLGlCQUFJM0UsTUFBTSxDQUFDNEUsVUFBUCxDQUFrQjtBQUFBLG1CQUFNRCxDQUFDLENBQUMsTUFBSSxDQUFDblosR0FBTCxDQUFTMkwsS0FBVCxDQUFELENBQVA7QUFBQSxXQUFsQixFQUE0QyxFQUE1QyxDQUFKO0FBQUEsU0FBYixDQUFSO0FBQ0Q7O0FBQ0QsVUFBTTlJLElBQUksR0FBRyxLQUFLLFVBQVU4SSxLQUFmLENBQWI7QUFDQSxVQUFJLENBQUM5SSxJQUFMLEVBQVcsTUFBTSxXQUFXOEksS0FBWCxHQUFtQixpQkFBekI7O0FBRVgsVUFBSSxDQUFDLEtBQUsrTSxXQUFWLEVBQXVCO0FBQ3JCLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxhQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBRUEsZUFBTyxLQUFLTyxJQUFMLEdBQVloWixJQUFaLENBQWlCLFlBQU07QUFDNUIsZ0JBQUksQ0FBQzBZLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxpQkFBTyxNQUFJLENBQUMsVUFBVWhOLEtBQVgsQ0FBSixFQUFQO0FBQ0QsU0FITSxDQUFQO0FBSUQ7O0FBQ0QsYUFBTyxLQUFLLFVBQVVBLEtBQWYsR0FBUDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixhQUFPOUwsT0FBTyxDQUFDQyxPQUFSLENBQWdCb0YsS0FBaEIsQ0FBc0JsRixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQW9aLFlBQVksRUFBSTtBQUN0RCxlQUFPeFosT0FBTyxDQUFDQyxPQUFSLENBQWdCaUYsSUFBaEIsQ0FBcUIvRSxHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQXFaLGFBQWEsRUFBSTtBQUN0RCxXQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9COVUsT0FBcEIsQ0FBNEIsVUFBQW1ILEtBQUssRUFBSTtBQUNuQzBOLHdCQUFZLENBQUMxTixLQUFELENBQVosR0FBc0IwTixZQUFZLENBQUMxTixLQUFELENBQVosSUFBdUIyTixhQUFhLENBQUMzTixLQUFELENBQTFEO0FBQ0QsV0FGRDtBQUdBLGNBQUksTUFBSSxDQUFDNUwsYUFBTCxLQUF1QixNQUEzQixFQUFtQ3NaLFlBQVksQ0FBQ25aLFFBQWIsR0FBd0JvWixhQUFhLENBQUNwWixRQUF0QztBQUNuQyxpQkFBTyxNQUFJLENBQUNxWixZQUFMLEdBQW9CdFosSUFBcEIsQ0FBeUIsVUFBQUssT0FBTyxFQUFJO0FBQ3pDK1ksd0JBQVksQ0FBQy9ZLE9BQWIsR0FBdUJBLE9BQXZCO0FBQ0EsbUJBQU8rWSxZQUFQO0FBQ0QsV0FITSxDQUFQO0FBSUQsU0FUTSxDQUFQO0FBVUQsT0FYTSxDQUFQO0FBWUQ7Ozt5Q0FDb0I7QUFDbkIsYUFBT3haLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9GLEtBQWhCLENBQXNCbEYsR0FBdEIsRUFBUDtBQUNEOzs7MENBQ3FCO0FBQ3BCLGFBQU9ILE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmlGLElBQWhCLENBQXFCL0UsR0FBckIsRUFBUDtBQUNEOzs7bUNBQ2M7QUFDYixhQUFPSCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JpRixJQUFoQixDQUFxQi9FLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBcVosYUFBYSxFQUFJO0FBQ3RELFlBQU1FLGFBQWEsR0FBR0YsYUFBYSxDQUFDaFosT0FBcEM7QUFFQSxlQUFPVCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvRixLQUFoQixDQUFzQmxGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1osWUFBWSxFQUFJO0FBQ3RELGNBQU1JLFlBQVksR0FBR0osWUFBWSxDQUFDL1ksT0FBbEM7QUFDQSxjQUFJLENBQUNrWixhQUFMLEVBQW9CLE9BQU9DLFlBQVA7QUFDcEIsY0FBSSxDQUFDQSxZQUFMLEVBQW1CLE9BQU9ELGFBQVAsQ0FIbUMsQ0FLdEQ7O0FBQ0EsZUFBSyxJQUFJcFcsQ0FBVCxJQUFjcVcsWUFBWSxDQUFDdkgsT0FBM0I7QUFBb0NzSCx5QkFBYSxDQUFDdEgsT0FBZCxDQUFzQjlPLENBQXRCLElBQTJCcVcsWUFBWSxDQUFDdkgsT0FBYixDQUFxQjlPLENBQXJCLENBQTNCO0FBQXBDOztBQUVBLGlCQUFPb1csYUFBUDtBQUNELFNBVE0sQ0FBUDtBQVVELE9BYk0sQ0FBUDtBQWNEOzs7b0NBQ2U7QUFDZCxhQUFPM1osT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DQyxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQUgsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0ksUUFBUixJQUFvQjBZLDRCQUFpQjFZLFFBQXpDO0FBQUEsT0FBdEQsQ0FBUDtBQUNEOzs7Z0NBQ1c7QUFDVixhQUFPTCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvRixLQUFoQixDQUFzQmxGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1osWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNLLElBQW5DLEVBQXlDLE9BQU8sRUFBUDtBQUN6QyxlQUFPTCxZQUFZLENBQUNLLElBQXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU83WixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvRixLQUFoQixDQUFzQmxGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBb1osWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNoSyxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT3hQLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmlGLElBQWhCLENBQXFCL0UsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFxWixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQ2pLLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT2dLLFlBQVksQ0FBQ2hLLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCOVEsZSIsImZpbGUiOiJjb250ZW50L3NpZGViYXIvc2lkZWJhci53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdvblRvZ2dsZWRTeW5jJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2VudHJ5OmZvdW5kJzogJ3VwZGF0ZUVudHJ5T25Gb3VuZCcsXHJcbiAgICAgICdlbnRyeTpmb3VuZC1mb3ItdGFiJzogJ3VwZGF0ZUVudHJ5JyxcclxuICAgICAgJ2VudHJ5OmRlbGV0ZWQtZm9yLXRhYic6ICdyZXN1bWUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZW52OiAnc2lkZWJhcicsXHJcbiAgZW50cnk6IG51bGwsXHJcbiAgbG9ja2VkOiBmYWxzZSxcclxuXHJcbiAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICBjb25zdCBpc0FyciA9IEFycmF5LmlzQXJyYXkoZW50cnkpO1xyXG4gICAgICBjb25zdCBjdXJyZW50RW50cnkgPSAhIXRoaXMuZW50cnk7XHJcblxyXG4gICAgICB0aGlzLmxvY2tlZCA9IHRoaXMubG9ja2VkIHx8IGlzQXJyIHx8IGVudHJ5LmxvY2tlZDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5sb2NrZWQgfHwgaXNBcnIpIHtcclxuICAgICAgICB0aGlzLmVudHJ5ID0gZW50cnk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5sb2NrZWQgJiYgIWlzQXJyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cnkgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmVudHJ5KSkgdGhpcy5lbnRyeS5wdXNoKGVudHJ5KTtcclxuICAgICAgICBlbHNlIHRoaXMuZW50cnkgPSBbZW50cnldO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudEVudHJ5KSB0aGlzLmVtaXQoJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JywgdGhpcy5lbnRyeSk7XHJcbiAgICAgIGVsc2UgdGhpcy5lbWl0KCdzdG9yZWQ6ZW50cnknLCB0aGlzLmVudHJ5KTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZUVudHJ5T25Gb3VuZChlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRW50cnkoZW50cnkpO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbml0aWFsbHktc3RvcmVkOmVudHJ5JywgZW50cnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5lbnRyeSA9IG51bGw7XHJcbiAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkOmVudHJ5Jyk7XHJcbiAgfSxcclxuXHJcblxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9wYWdlbm90ZXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2UucGFnZW5vdGVzIHx8IG51bGwpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1BPUlQgZnJvbSAnLi9wb3J0J1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5cclxuaW1wb3J0ICcuL21vZHVsZXMvdGhlbWVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90YWJzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oZWFkZXInXHJcbmltcG9ydCAnLi9tb2R1bGVzL21ldGEtaW5mb3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RhZ3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3BhZ2Utbm90ZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtlcnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2hpc3RvcnktYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFyay1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlLWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmtzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9saW5rcydcclxuXHJcbl9MMTBOKCk7XHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ29uU3RhcnQnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdwb3dlcicsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3RvZ2dsZScsXHJcbiAgICAgICdpbml0aWFsbHktc3RvcmVkOmVudHJ5JzogJ3RvZ2dsZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuZW1pdCgnb3BlbmVkOnNpZGViYXInLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuXHJcbiAgcG93ZXIob24pIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhci0tcGF1c2VkJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG5cclxuICAgIGlmIChvbikge1xyXG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TdGFydCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5wb3dlcihtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGUoZW50cnkpIHtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcbiAgICBpZiAoZW50cnkgJiYgX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItc2lkZWJhci0tbG9ja2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItc2lkZWJhci0tbG9ja2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5lbDtcclxuXHJcbiAgICBpZiAoIWVudHJ5KSBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkgcmV0dXJuO1xyXG5cclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIHRoaXMudXBkYXRlTmFtZShlbnRyeS5uYW1lKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVOYW1lKG5hbWUpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX25hbWUnKVswXTtcclxuICAgIGVsLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICBlbC50aXRsZSA9IG5hbWU7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW9uLXNhdmUnOiAnZGVhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAnZGVhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJzogJ2FjdGl2YXRlU2F2ZScsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICd1cGRhdGVJbW11dCcsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJyxcclxuICAgICAgJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknOiAndXBkYXRlSW1tdXQnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJyNwYWdlLWFjdGlvbi0tcmV0cnknOiAncmV0cnlSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJyNwYWdlLWFjdGlvbi0tc2F2ZSc6ICdzYXZlJyxcclxuICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVJbW11dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJldHJ5QnRuU2hvd246IGZhbHNlLFxyXG4gIHNhdmVCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tc2F2ZScpLFxyXG4gIHJldHJ5QnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLXJldHJ5JyksXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy50b2dnbGVTYXZlKCk7XHJcbiAgfSxcclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICByZXRyeVJlc3RvcmF0aW9uKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gICAgdGhpcy5kZWFjdGl2YXRlUmV0cnkoKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBjb25zdCBtZXRoID0gYXV0b3NhdmUgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICB0aGlzLnNhdmVCdG4uY2xhc3NMaXN0W21ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVTYXZlKG9uID0gdHJ1ZSkge1xyXG4gICAgaWYgKG9uKSB0aGlzLnNhdmVCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgZWxzZSB0aGlzLnNhdmVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVNhdmUoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlU2F2ZShmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgaWYgKCF0aGlzLnJldHJ5QnRuU2hvd24pIHtcclxuICAgICAgdGhpcy5yZXRyeUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5yZXRyeUJ0blNob3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRlYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIGlmICh0aGlzLnJldHJ5QnRuU2hvd24pIHtcclxuICAgICAgdGhpcy5yZXRyeUJ0bi5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5yZXRyeUJ0blNob3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVJbW11dChlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0taW1tdXQnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOmltbXV0JywgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgdXBkYXRlSW1tdXQoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICBjb25zdCBtZXRoID0gZW50cnkuaW1tdXQgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLWltbXV0JykuY2xhc3NMaXN0W21ldGhdKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1ib3gnKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtYm94JykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLnJldHJ5QWN0aXZlKSB0aGlzLmFjdGl2YXRlUmV0cnkoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1saW5rcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5saW5rJzogJ2xpbmsnLFxyXG4gICAgICAgICcubGlua19faWNvbic6ICdsaW5rJyxcclxuICAgICAgICAnLmxpbmtfX3RleHQnOiAnbGluaydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxpbmsoZSwgZWwpIHtcclxuICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5rJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW46YWRkb24tcGFnZShzYiknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnYWN0aXZhdGUnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnOiAnYWN0aXZhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1tYXJrJzogJ21hcmtBY3Rpb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGZyYW1lOiAwLFxyXG4gIGJ1dHRvbnM6IFtdLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJykpO1xyXG4gIH0sXHJcbiAgbWFya0FjdGlvbihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIG51bGwsIG51bGwsIHsgdGFiOiAnYWN0aXZlJywgZnJhbWVJZDogdGhpcy5mcmFtZSB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKG1hcmtJbmZvcywgc2VuZGVyKSB7XHJcbiAgICB0aGlzLmZyYW1lID0gc2VuZGVyICYmIHNlbmRlci5mcmFtZUlkID8gc2VuZGVyLmZyYW1lSWQgOiAwO1xyXG5cclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGxldCB0eXBlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGUgPT09ICdjb3B5JyB8fFxyXG4gICAgICAgIHR5cGUgPT09ICdkZWxldGUtaGlnaGxpZ2h0JyB8fFxyXG4gICAgICAgICh0eXBlb2YgbWFya0luZm9zW3R5cGVdID09PSAnYm9vbGVhbicgJiYgIW1hcmtJbmZvc1t0eXBlXSkgfHxcclxuICAgICAgICAodHlwZSA9PT0gJ2RlbGV0ZS1ib29rbWFyaycgJiYgbWFya0luZm9zLmJvb2ttYXJrKVxyXG4gICAgICApIHtcclxuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tYXJrZXJzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3JlbmRlcicsXHJcbiAgICAgICdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnOiAncmVuZGVyJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ3RvZ2dsZU1hcmtlckJ1dHRvbnMnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy5tYXJrZXJfX2NvbG9yJzogJ2NoYW5nZScsXHJcbiAgICAgICAgJy5tYXJrZXJfX2NiJzogJ3NlbGVjdCdcclxuICAgICAgfSxcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLm1hcmtlcl9fYXBwbHknOiAnYXBwbHlDb2xvcidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF1dG9tYXJrRW5hYmxlZDogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgKCFzdG9yYWdlLnN5bmMgfHwgc3RvcmFnZS5zeW5jLnNldHRpbmdzKSkge1xyXG4gICAgICAgIHRoaXMuYXV0b21hcmtFbmFibGVkID0gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2Uuc3luYyAmJiAhc3RvcmFnZS5zeW5jLnNldHRpbmdzKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dG9tYXJrRW5hYmxlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4obWFya2VycyA9PiB7XHJcbiAgICAgIGlmICghbWFya2VycykgcmV0dXJuIHRoaXM7XHJcbiAgICAgIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXItLWxlZnQnKTtcclxuICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXItLXJpZ2h0Jyk7XHJcbiAgICAgIGNvbnN0IGZyYWdSaWdodCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgZnJhZ0xlZnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmNlaWwoT2JqZWN0LmtleXMobWFya2VycykubGVuZ3RoIC8gMik7XHJcbiAgICAgIGxldCBjb3VudCA9IDAsIG0sIGJveCwgaW5wdXQsIGV4YW1wbGVUZXh0LCBidXR0b24sIGNvbG9yLCBjYkJveCwgY2IsIGNiTGFiZWwsIGNiU3BhbjtcclxuXHJcbiAgICAgIGxlZnRDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgZm9yIChtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNiQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNiTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNiU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb2xvciA9IHRoaXMuZXh0cmFjdEJnQ29sb3IobWFya2Vyc1ttXS5zdHlsZSk7XHJcblxyXG4gICAgICAgIGJveC5jbGFzc05hbWUgPSAnbWFya2VyIHUtY2YnO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NvbG9yJztcclxuICAgICAgICBpbnB1dC5pZCA9ICdtYXJrZXItJyArIG07XHJcbiAgICAgICAgaW5wdXQubmFtZSA9IG07XHJcbiAgICAgICAgaW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjb2xvcjtcclxuICAgICAgICBleGFtcGxlVGV4dC5jbGFzc05hbWUgPSAnbWFya2VyX190ZXh0JztcclxuICAgICAgICBleGFtcGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbWFya2Vyc1ttXS5zdHlsZSk7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuc2V0QXR0cmlidXRlKCdmb3InLCAnbWFya2VyLScgKyBtKTtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ21hcmtlcl9fYXBwbHknO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBtKTtcclxuICAgICAgICBjYkJveC5jbGFzc05hbWUgPSAnbWFya2VyX19jYi1ib3gnO1xyXG4gICAgICAgIGNiLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NiJztcclxuICAgICAgICBjYi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgbSk7XHJcbiAgICAgICAgY2IudHlwZSA9ICdyYWRpbyc7XHJcbiAgICAgICAgY2IuaWQgPSAnbWFya2VyX19jYi0tJyArIG07XHJcbiAgICAgICAgY2IubmFtZSA9ICdtYXJrZXItY2InO1xyXG4gICAgICAgIGNiTGFiZWwuY2xhc3NOYW1lID0gJ2Zha2UtcmInO1xyXG4gICAgICAgIGNiTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWFya2VyX19jYi0tJyArIG0pO1xyXG4gICAgICAgIGNiU3Bhbi50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMjlhKTtcclxuXHJcbiAgICAgICAgY2JMYWJlbC5hcHBlbmRDaGlsZChjYlNwYW4pO1xyXG4gICAgICAgIGNiQm94LmFwcGVuZENoaWxkKGNiKTtcclxuICAgICAgICBjYkJveC5hcHBlbmRDaGlsZChjYkxhYmVsKTtcclxuXHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNiQm94KTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChleGFtcGxlVGV4dCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudCA+IDMgJiYgY291bnQgPiBzKSB7XHJcbiAgICAgICAgICBmcmFnTGVmdC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmcmFnUmlnaHQuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG0gPSBtLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbSA9IG0gPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBtO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LmlubmVyVGV4dCA9IG07XHJcbiAgICAgICAgaWYgKCFjb2xvcikgaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdSaWdodCk7XHJcbiAgICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ0xlZnQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b21hcmtFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdhdXRvJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcl9fY2ItLW0nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2F1dG8nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBleHRyYWN0QmdDb2xvcihzdHlsZXMpIHtcclxuICAgIGxldCBzcGxpdCA9IHN0eWxlcy5zcGxpdCgnOycpLFxyXG4gICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXHJcbiAgICAgICAgY29sb3IgPSAnJyxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBzdHlsZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzdHlsZSA9IHNwbGl0W2ldO1xyXG4gICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgIGNvbG9yID0gc3R5bGUuc3BsaXQoJzonKVsxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH0sXHJcbiAgY2hhbmdlKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZTpiZy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gIH0sXHJcbiAgc2VsZWN0KGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBhcHBseUNvbG9yKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6aGlnaGxpZ2h0JywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICB0b2dnbGVNYXJrZXJCdXR0b25zKHNob3cpIHtcclxuICAgIGlmICh0aGlzLmF1dG9tYXJrRW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdzZXRBdHRyaWJ1dGUnO1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrZXJfX2FwcGx5JykpLmZvckVhY2goYnRuID0+IGJ0blttZXRoXSgnZGlzYWJsZWQnLCB0cnVlKSk7XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy50b2dnbGVNYXJrZXJCdXR0b25zKHN0YXRlLnNlbGVjdGlvbik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tYXJrcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJzogJ3NldE1hcmtJRHMnLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeScgOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya19fdGV4dCc6ICdhY3RpdmF0ZScsXHJcbiAgICAgICAgJy5tYXJrX19ub3RlLWJ0bic6ICd0b2dnbGVOb3RlJyxcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLW5hdic6ICduYXYnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcjZm9sZC1tYXJrcyc6ICdmb2xkTGlzdCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1hcmtzOiBbXSxcclxuICBtYXJrSURzOiBudWxsLFxyXG4gIGxlbmd0aDogMCxcclxuICBjdXJyZW50OiAtMSxcclxuICBzZXRGaWx0ZXJzOiBmYWxzZSxcclxuICB0b2dnbGVNYXA6IHsgJzEnOiBbZmFsc2UsIGZhbHNlXSwgJzInOiBbdHJ1ZSwgZmFsc2VdLCAnMyc6IFtmYWxzZSwgdHJ1ZV0sICc0JzogW3RydWUsIHRydWVdIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeSA9IF9TVE9SRS5lbnRyeTtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICB0aGlzLnNldE1hcmtzKCk7XHJcbiAgICAgIGlmICghdGhpcy5zZXRGaWx0ZXJzKSB0aGlzLnJlbmRlclNWR0ZpbHRlcnMoKTtcclxuICAgICAgdGhpcy5yZW5kZXJMaXN0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXRNYXJrcygpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeTtcclxuICAgIGxldCBtYXJrcyA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGVudHJ5LmZvckVhY2goZSA9PiBtYXJrcyA9IG1hcmtzLmNvbmNhdChlLm1hcmtzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFya0lEcyA9IHRoaXMubWFya0lEcztcclxuICAgIC8vdGhpcy5sZW5ndGggPSBtYXJrcy5sZW5ndGg7XHJcbiAgICAvL3RoaXMubWFya3MgPSBtYXJrSURzID8gbWFya3Muc29ydCgobTEsIG0yKSA9PiBtYXJrSURzLmluZGV4T2YobTEuaWQpIDwgbWFya0lEcy5pbmRleE9mKG0yLmlkKSkgOiBtYXJrcztcclxuICAgIHRoaXMubWFya3MgPSBtYXJrSURzID9cclxuICAgICAgbWFya0lEcy5tYXAoaWQgPT4gbWFya3MuZmluZChtYXJrID0+IG1hcmsuaWQgPT0gaWQpKSA6XHJcbiAgICAgIG1hcmtzO1xyXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLm1hcmtzLmxlbmd0aDtcclxuICB9LFxyXG4gIHNldE1hcmtJRHMoaWRzKSB7XHJcbiAgICB0aGlzLm1hcmtJRHMgPSBpZHM7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyU1ZHRmlsdGVycygpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgdG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IGNvbG9ycyA9IHt9O1xyXG4gICAgbGV0IGksIGM7XHJcbiAgICBmb3IgKGkgaW4gX1NFVFRJTkdTLk5PVEVfQ09MT1JTKSB7XHJcbiAgICAgICBjID0gX1NFVFRJTkdTLk5PVEVfQ09MT1JTW2ldO1xyXG4gICAgICBjb2xvcnNbaS50b0xvd2VyQ2FzZSgpXSA9ICcwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoMSwyKSkgKyAnIDAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cigzLDIpKSArICcgMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDUsMikpICsgJyAwIDAgMCAxIDAnO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlcjtcclxuICAgIGZvciAoaSBpbiBjb2xvcnMpIHtcclxuICAgICAgZmlsdGVyID0gdG1wbC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGZpbHRlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsdGVyJylbMF0uaWQgPSAnZmlsdGVyLS0nICsgaTtcclxuICAgICAgZmlsdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmZUNvbG9yTWF0cml4JylbMF0uc2V0QXR0cmlidXRlKCd2YWx1ZXMnLCBjb2xvcnNbaV0pO1xyXG4gICAgICBib2R5LmFwcGVuZENoaWxkKGZpbHRlcilcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RmlsdGVycyA9IHRydWU7XHJcbiAgfSxcclxuICBjb252ZXJ0SGV4KGhleCkge1xyXG4gICAgcmV0dXJuICgoMTYgKiBOdW1iZXIoJzB4JyArIGhleFswXSkpICsgTnVtYmVyKCcweCcgKyBoZXhbMV0pKSAvIDI1NTtcclxuICB9LFxyXG4gIHJlbmRlckxpc3QoKSB7XHJcbiAgICBjb25zdCBtYXJrVG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IG1hcmtzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyk7XHJcbiAgICBsZXQgbWFya0NvbnRhaW5lcjtcclxuXHJcbiAgICBtYXJrc0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICB0aGlzLm1hcmtzLmZvckVhY2goKG1hcmssIGkpID0+IHtcclxuICAgICAgaWYgKG1hcmspIHtcclxuICAgICAgICBtYXJrQ29udGFpbmVyID0gbWFya1RtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuaWQgPSAnJztcclxuICAgICAgICBtYXJrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX190ZXh0JylbMF07XHJcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtYXJrLnRleHQpO1xyXG4gICAgICAgIGxldCBjb2xvciA9IG1hcmsuc3R5bGUuaW5kZXhPZignYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGxldCBoYXNOb3RlID0gbWFyay5ub3RlICYmICh0eXBlb2YgbWFyay5ub3RlID09PSAnc3RyaW5nJyB8fCBtYXJrLm5vdGUudGV4dCk7XHJcbiAgICAgICAgY29sb3IgPSBjb2xvciA9PT0gLTEgPyAndHJhbnNwYXJlbnQnIDogbWFyay5zdHlsZS5zdWJzdHIoY29sb3IgKyAxNywgNyk7XHJcbiAgICAgICAgbGV0IG5vdGUsIG5vdGVDb2xvciwgbm90ZVRleHQsIG5vdGVCdG4sIG5vdGVOb2RlO1xyXG5cclxuICAgICAgICB0ZXh0Tm9kZS5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRleHROb2RlLmFwcGVuZENoaWxkKHRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGhhc05vdGUpIHtcclxuICAgICAgICAgIG5vdGUgPSBtYXJrLm5vdGU7XHJcbiAgICAgICAgICBub3RlQ29sb3IgPSBub3RlLmNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgICAgICAgbm90ZVRleHQgPSBub3RlLnRleHQgfHwgbm90ZTtcclxuICAgICAgICAgIG1hcmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFyay0tbm90ZScpO1xyXG4gICAgICAgICAgbm90ZUJ0biA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZS1idG4nKVswXTtcclxuICAgICAgICAgIG5vdGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICBub3RlQnRuLmNsYXNzTGlzdC5hZGQoJ21hcmtfX25vdGUtYnRuLS0nICsgbm90ZUNvbG9yKTtcclxuICAgICAgICAgIG5vdGVOb2RlID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlJylbMF07XHJcbiAgICAgICAgICBub3RlTm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub3RlVGV4dCkpO1xyXG4gICAgICAgICAgbm90ZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICBub3RlTm9kZS5jbGFzc0xpc3QuYWRkKCdtYXJrX19ub3RlLS0nICsgbm90ZUNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWFya0NvbnRhaW5lcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbWFya3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gIH0sXHJcbiAgbmF2KGUsIGVsKSB7XHJcbiAgICBjb25zdCBkaXIgPSAxICogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcbiAgICB0aGlzLmN1cnJlbnQgKz0gZGlyO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLmxlbmd0aCkgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudCA8IDApIHRoaXMuY3VycmVudCA9IHRoaXMubGVuZ3RoIC0gMTtcclxuICAgIHRoaXMuYWN0aXZhdGVMaXN0SXRlbSgpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVMaXN0SXRlbShpZCkge1xyXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHRoaXMuY3VycmVudCA9IGlkO1xyXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmstLWFjdGl2ZScpWzBdO1xyXG4gICAgaWYgKGN1cnJlbnRJdGVtKSBjdXJyZW50SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXJrLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWlkPVwiJyArIFt0aGlzLmN1cnJlbnRdICsgJ1wiXScpLmNsYXNzTGlzdC5hZGQoJ21hcmstLWFjdGl2ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOm5leHQtbWFyaycsIHRoaXMuY3VycmVudCwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoZSwgZWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLW1hcmtzJykudmFsdWUgPSAwO1xyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgndW5mb2xkZWQnKTtcclxuICAgIHRoaXMuYWN0aXZhdGVMaXN0SXRlbSgxKmVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfSxcclxuICBmb2xkTGlzdChlLCBlbCkge1xyXG4gICAgY29uc3QgdmFsID0gZWwudmFsdWU7XHJcbiAgICBpZiAodmFsICE9IDApIHtcclxuICAgICAgY29uc3QgbWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKTtcclxuICAgICAgY29uc3QgdG9nZ2xlU2V0dGluZ3MgPSB0aGlzLnRvZ2dsZU1hcFt2YWxdO1xyXG5cclxuICAgICAgdGhpcy50b2dnbGUoJ3RleHQnLCB0b2dnbGVTZXR0aW5nc1swXSk7XHJcbiAgICAgIHRoaXMudG9nZ2xlKCdub3RlJywgdG9nZ2xlU2V0dGluZ3NbMV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZShlLCBlbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtbWFya3MnKS52YWx1ZSA9IDA7XHJcbiAgICBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCd1bmZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKHR5cGUsIHNob3cpIHtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgIEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX18nICsgdHlwZSkpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdFttZXRoXSgndW5mb2xkZWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWV0YScpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgeWVzID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3llcycpO1xyXG4gICAgICBjb25zdCBubyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubycpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX251bWJlci1tYXJrcycpLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX2NyZWF0ZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19sYXN0LW1vZGlmaWVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcblxyXG4gICAgICBbJ3N5bmNlZCcsICdpbW11dCddXHJcbiAgICAgICAgLmZvckVhY2goZmllbGQgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfXycgKyBmaWVsZCkuaW5uZXJUZXh0ID0gZW50cnlbZmllbGRdID8geWVzIDogbm8pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGVcclxuICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnYWN0aXZhdGVCb29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ2RlYWN0aXZhdGVCb29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJzogJ2FjdGl2YXRlTm90ZXMnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnZGVhY3RpdmF0ZU5vdGVzJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnOiAnb25Ob3Rlc1N0YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tcGFnZSc6ICdwYWdlQWN0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZhdGVCb29rbWFyaygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3Njcm9sbCcsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZUJvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnc2Nyb2xsJywgZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVOb3RlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ25vdGVzJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdub3RlcycsIGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKHR5cGUsIG9uKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLScgKyB0eXBlKTtcclxuICAgIGlmIChvbikge1xyXG4gICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlQWN0aW9uKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6JyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZS5ib29rbWFyaykgdGhpcy5hY3RpdmF0ZUJvb2ttYXJrKCk7XHJcbiAgfSxcclxuICBvbk5vdGVzU3RhdGUobm90ZXMpIHtcclxuICAgIGlmIChub3RlcykgdGhpcy5hY3RpdmF0ZU5vdGVzKCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1ub3RlcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3Rlcyc6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hZGQtbm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdyZW1vdmVOb3RlJyxcclxuICAgICAgICAndG1ub3RlbWluaW1pemUnOiAndG9nZ2xlTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZXNhdmUnOiAnc2F2ZSdcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJyNmb2xkLXBhZ2Utbm90ZXMnOiAndG9nZ2xlTm90ZXMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG5vdGVzOiBbXSxcclxuICBub3RlRWxzOiB7fSxcclxuICBpZDogMCxcclxuICBjdXJyZW50Q29sb3I6ICd5ZWxsb3cnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwgPSB0YWIudXJsO1xyXG4gICAgICBfU1RPUkUuZ2V0KCdwYWdlbm90ZXMnKS50aGVuKHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgICAgcGFnZW5vdGVzID0gcGFnZW5vdGVzICYmIHBhZ2Vub3Rlc1t1cmxdID8gcGFnZW5vdGVzW3VybF0gOiBudWxsO1xyXG4gICAgICAgIGxldCBsLCBpZDtcclxuICAgICAgICBpZiAocGFnZW5vdGVzICYmIChsID0gcGFnZW5vdGVzLmxlbmd0aCkpIHtcclxuICAgICAgICAgIHRoaXMubm90ZXMgPSBwYWdlbm90ZXM7XHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gdGhpcy5hZGROb3RlKHBhZ2Vub3Rlc1tsXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBNYXRoLm1heCh0aGlzLmlkLCBpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KCEhdGhpcy5ub3Rlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVOb3RlcyhudWxsLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzYXZlKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZ2V0QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgIG5vdGUudGV4dCA9IGVsLnByZXZpb3VzU2libGluZy52YWx1ZTtcclxuICAgICAgbm90ZS5uYW1lID0gZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bW5vdGVfX2hlYWRlcicpWzBdLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Utbm90ZScsIHRoaXMudXJsLCB0aGlzLm5vdGVzKTtcclxuICB9LFxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMubm90ZXMgPSBbXTtcclxuICAgIHRoaXMubm90ZUVscyA9IHt9O1xyXG4gICAgdGhpcy5pZCA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlcycpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgfSxcclxuXHJcbiAgYWRkTm90ZShub3RlKSB7XHJcbiAgICBub3RlID0gbm90ZS50eXBlID8gbnVsbCA6IG5vdGU7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlcycpO1xyXG4gICAgY29uc3Qgbm90ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZS10ZW1wbGF0ZScpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gbm90ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgY29uc3QgaGVhZGVyID0gbm90ZUVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rtbm90ZV9faGVhZGVyJylbMF07XHJcbiAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgbGV0IGlkO1xyXG4gICAgaWYgKG5vdGUpIHtcclxuICAgICAgaWQgPSBub3RlRWwuaWQgPSBub3RlLmlkO1xyXG4gICAgICB0ZXh0YXJlYS50ZXh0Q29udGVudCA9IG5vdGUudGV4dCB8fCAnJztcclxuICAgICAgaGVhZGVyLnZhbHVlID0gbm90ZS5uYW1lIHx8ICcnO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgbm90ZS5jb2xvcik7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWQgPSBub3RlRWwuaWQgPSArK3RoaXMuaWQ7XHJcbiAgICAgIHRoaXMubm90ZXMucHVzaCh7IGlkLCB0ZXh0OiAnJywgY29sb3I6IHRoaXMuY3VycmVudENvbG9yIH0pO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIHRoaXMuY3VycmVudENvbG9yKTtcclxuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub3RlRWwsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBBcnJheS5mcm9tKG5vdGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKVxyXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCkpO1xyXG5cclxuICAgIHRoaXMubm90ZUVsc1tpZF0gPSBub3RlRWw7XHJcblxyXG4gICAgdGhpcy50b2dnbGVTZWxlY3QodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuY3VycmVudENvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTmFtZSA9IHRoaXMubm90ZUVsc1tpZF0uY2xhc3NOYW1lLnJlcGxhY2UoLy0tXFx3Ky8sICctLScgKyBjb2xvcik7XHJcbiAgICB0aGlzLmdldEJ5SWQoaWQpLmNvbG9yID0gY29sb3I7XHJcbiAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZShlLCBlbCkge1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgbm90ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGUpO1xyXG4gICAgZGVsZXRlIHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICB0aGlzLm5vdGVzLnNwbGljZSh0aGlzLm5vdGVzLmluZGV4T2YodGhpcy5nZXRCeUlkKGlkKSksIDEpO1xyXG4gICAgdGhpcy5zYXZlKCk7XHJcbiAgICBpZiAoIXRoaXMubm90ZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KGZhbHNlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZVNlbGVjdChzaG93KSB7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykuY2xhc3NMaXN0W21ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICB9LFxyXG4gIHRvZ2dsZVBhbGV0dGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldO1xyXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5vdGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZXBhbGV0dGUnKVswXTtcclxuICAgIHBhbGV0dGUuY2xhc3NMaXN0LnRvZ2dsZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICBpZiAoIXBhbGV0dGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd1LWRpc3BsYXktLW5vbmUnKSkge1xyXG4gICAgICBub3RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcclxuICAgIG5vdGUuY2xhc3NMaXN0LnRvZ2dsZSgndG1ub3RlLS1taW4nKTtcclxuICAgIGlmICghbm90ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rtbm90ZS0tbWluJykpIHtcclxuICAgICAgdGhpcy5hZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKS52YWx1ZSA9IDA7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcyhlLCBlbCkge1xyXG4gICAgaWYgKGVsLnZhbHVlID09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5ub3RlRWxzKSB7XHJcbiAgICAgICAgdGhpcy5ub3RlRWxzW2lkXS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgbm90ZSwgdGV4dGFyZWE7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubm90ZUVscykge1xyXG4gICAgICAgIG5vdGUgPSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgICAgIG5vdGUuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgICAgICB0aGlzLmFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3Rlcy5maW5kKG5vdGUgPT4gbm90ZS5pZCA9PSBpZCk7XHJcbiAgfSxcclxuICBhZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKSB7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IG5vdGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAnc2hvd0VudHJ5U3BlY2lmaWNUYWJzJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFiX190aXRsZSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICcudGFiX19uYW1lJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy50YWJfX3RvZ2dsZSc6ICd0b2dnbGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0YWJzOiB7fSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoIXNldHRpbmdzIHx8ICFzZXR0aW5ncy5zYikgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0YWJTZXR0aW5ncyA9IHNldHRpbmdzLnNiLnRhYnM7XHJcbiAgICAgIGZvciAobGV0IHRhYiBpbiB0YWJTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMudGFic1t0YWJdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tJyArIHRhYik7XHJcbiAgICAgICAgaWYgKHRhYlNldHRpbmdzW3RhYl0udW5mb2xkZWQpIHRoaXMub3Blbih0YWIpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5jbG9zZSh0YWIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvcGVuKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LnJlbW92ZSgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIGNsb3NlKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LmFkZCgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZShlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5ub2RlTmFtZSA9PT0gJ0gyJyA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgY29uc3QgdGFiID0gaWQuc3BsaXQoJy0tJykucG9wKCk7XHJcbiAgICBjb25zdCB0YWJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIHRhYkVsLmNsYXNzTGlzdC50b2dnbGUoJ3RhYi0tZm9sZGVkJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c2lkZWJhci10YWInLCB0YWIsICF0YWJFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi0tZm9sZGVkJykpO1xyXG4gIH0sXHJcbiAgc2hvd0VudHJ5U3BlY2lmaWNUYWJzKCkge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWItLWVudHJ5JykpXHJcbiAgICAgIC5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLXRhZ3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhZ3NfX3JlbW92ZSc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAgICcjYWRkLXRhZyc6ICdhZGRUYWcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgdGFncyA9IGVudHJ5LnRhZyA/IGVudHJ5LnRhZy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJykuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXJUYWcodGFnKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFncycpO1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSAndGFnc19faXRlbSB1LW92ZXJmbG93LS1lbGxpcHNpcyc7XHJcbiAgICBkZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX3JlbW92ZSc7XHJcbiAgICBkZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhZycsIHRhZyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSB0YWc7XHJcbiAgICBkZWwuYXBwZW5kQ2hpbGQoeCk7XHJcbiAgICBlbC5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICB9LFxyXG4gIGFkZFRhZygpIHtcclxuICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFnJyk7XHJcbiAgICBsZXQgdGFnID0gaW5wLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghdGFnKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2FkZDp0YWcnLCB0YWcsIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBpbnAudmFsdWUgPSAnJztcclxuICAgIHRhZy5zcGxpdCgnICcpLmZvckVhY2godGFnID0+IHRoaXMucmVuZGVyVGFnKHRhZykpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZTp0YWcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJyksIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGhlbWVzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy50aGVtZS1vcHQnOiAnb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0aGVtZTogJ2RlZmF1bHQnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IHRoZW1lID0gc2V0dGluZ3MgJiYgc2V0dGluZ3Muc2IgJiYgc2V0dGluZ3Muc2IudGhlbWUgPyBzZXR0aW5ncy5zYi50aGVtZSA6ICdkZWZhdWx0JztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRoZW1lLS0ke3RoZW1lfWApLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvbkNoYW5nZShlLCBlbCkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJywgdGhlbWUpO1xyXG4gICAgdGhpcy51cGRhdGUodGhlbWUpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHRoZW1lKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gJ3RleHRtYXJrZXItc2lkZWJhci0tZGFyayc7XHJcbiAgICBpZiAodGhlbWUgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnc2lkZWJhcicsXHJcbiAgdHlwZTogJ3ByaXZpbGVnZWQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgQ09OTkVDVElPTjogW1xyXG4gICAgICAnY2hhbmdlOmJnLXNldHRpbmcnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ3NpZGViYXI6aGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6bm90ZScsXHJcbiAgICAgICdzaWRlYmFyOmltbXV0JyxcclxuICAgICAgJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJyxcclxuICAgICAgJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLFxyXG4gICAgICAnc2lkZWJhcjp1bmRvJyxcclxuICAgICAgJ3NpZGViYXI6cmVkbycsXHJcbiAgICAgICdzaWRlYmFyOmNvcHknLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAncmVtb3ZlOnRhZycsXHJcbiAgICAgICdhZGQ6dGFnJyxcclxuICAgICAgJ29wZW46YWRkb24tcGFnZShzYiknLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnLFxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnXHJcbiAgICBdXHJcbiAgfVxyXG59KVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9