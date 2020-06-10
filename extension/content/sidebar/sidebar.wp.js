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
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PRIVPORT = exports._PORT = exports._STORE = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

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
exports._PRIVPORT = _port._PRIVPORT;
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
        '#page-action--delete': 'onDeleteRequest',
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
  onDeleteRequest: function onDeleteRequest() {
    var confirmed = window.confirm(browser.i18n.getMessage('sb514'));

    if (confirmed) {
      if (_store2["default"].entry) {
        this.emit('sidebar:delete-entry', [_store2["default"].entry.name], {
          tab: 'active'
        });
      } else {
        window.alert(browser.i18n.getMessage('sb515'));
      }
    }
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
  el: document.getElementById('mark-actions'),
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
    var _this = this;

    if (el.hasAttribute('disabled')) return;
    var action = el.getAttribute('data-action');

    if (action === 'copy') {
      browser.permissions.contains({
        permissions: ['clipboardWrite']
      }).then(function (granted) {
        _this.emit('sidebar:' + el.getAttribute('data-action'), granted, null, {
          tab: 'active',
          frameId: _this.frame
        });
      });
    } else {
      this.emit('sidebar:' + el.getAttribute('data-action'), null, null, {
        tab: 'active',
        frameId: this.frame
      });
    }
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
  frame: 0,
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
        cbSpan.textContent = String.fromCharCode(0x25CF);
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
      tab: 'active',
      frameId: this.frame
    });
  },
  applyColor: function applyColor(e, el) {
    if (el.classList.contains('disabled')) return;
    this.emit('sidebar:highlight', el.getAttribute('data-key'), {
      tab: 'active',
      frameId: this.frame
    });
  },
  toggleMarkerButtons: function toggleMarkerButtons(show, sender) {
    if (this.automarkEnabled) return;
    this.frame = sender && sender.frameId ? sender.frameId : 0;
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
  render: function render(a, b, c) {
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
  setMarkIDs: function setMarkIDs(ids, b, c) {
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
    var markEl = el.parentNode;
    markEl.classList.toggle('open-note');
    markEl.getElementsByClassName('mark__note')[0].classList.toggle('unfolded');
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
  el: document.getElementById('page-actions'),
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
        '.add-tag': 'addTag'
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
    document.getElementById('textmarker-sidebar').className = "textmarker-sidebar--".concat(theme);
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

exports["default"] = new _utils._PRIVPORT({
  name: 'sidebar',
  type: 'privileged',
  id: Math.random().toString().slice(2, 16),
  events: {
    CONNECTION: ['change:bg-setting', 'error:browser-console', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:retry-restoration', 'sidebar:delete-entry', 'sidebar:undo', 'sidebar:redo', 'sidebar:copy', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'remove:tag', 'add:tag', 'open:addon-page(sb)', 'opened:sidebar', 'updated:page-note', 'toggled:sidebar-tab', 'sidebar:selected-marker', 'changed:sidebar-theme']
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
      n: ['shiftKey', false, true],
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
      ignoreHash: true,
      autoRetry: true
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
      notefontsize: 12,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      vipNote: true,
      loadNote: false,
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
      theme: 'tm'
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _DOMMODULE = /*#__PURE__*/exports._DOMMODULE = function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  var _super = _createSuper(_DOMMODULE);

  function _DOMMODULE(obj) {
    var _this;

    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];
    _this = _super.call(this, obj);
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
  if (!url) return '';
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var _iterator = _createForOfIteratorHelper(textElements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      el = _step.value;
      dataset = el.dataset;
      var l10nId = dataset.l10nId;

      if (l10nId) {
        data = browser.i18n.getMessage(l10nId, '');

        if (data && data != '??') {
          el.textContent = data;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(attrElements),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      el = _step2.value;
      dataset = el.dataset;
      ['Title', 'Placeholder', 'Href'].forEach(function (attr) {
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
    _iterator2.e(err);
  } finally {
    _iterator2.f();
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

var _default = /*#__PURE__*/function () {
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

      if (this.type === 'background') {
        return browser.tabs.sendMessage(args[0].tabId, {
          ev: event,
          wait: true
        }, {
          frameId: args[0].frameId
        });
      } else {
        return browser.runtime.sendMessage({
          ev: event,
          args: args,
          wait: true
        })["catch"](function () {});
      }
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _MODULE = /*#__PURE__*/exports._MODULE = function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  var _super = _createSuper(_MODULE);

  function _MODULE(obj) {
    var _this;

    _classCallCheck(this, _MODULE);

    _this = _super.call(this);

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
exports._BGPORT = exports._PRIVPORT = exports._PORT = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _PORT = /*#__PURE__*/function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  var _super = _createSuper(_PORT);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _super.call(this, obj);
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_this), _this.passMessage));

    _this.registerOneOffEvents();

    return _this;
  }

  _createClass(_PORT, [{
    key: "extend",
    value: function extend(events) {
      this.registerOneOffEvents(events.ONEOFF);
    }
  }, {
    key: "registerOneOffEvents",
    value: function registerOneOffEvents(events) {
      events || (events = this.events.ONEOFF);

      if (events) {
        var _iterator = _createForOfIteratorHelper(events),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var e = _step.value;
            this.on(e, this.proxy(this, this.sendMessage, e));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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

        if (lastArg && (tab = lastArg.tab)) {
          if (tab === 'active') {
            browser.tabs.query({
              active: true
            }).then(function (tabs) {
              var _iterator2 = _createForOfIteratorHelper(tabs),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _tab = _step2.value;
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
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
            var _iterator3 = _createForOfIteratorHelper(tabs),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _tab2 = _step3.value;
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
      }
    }
  }]);

  return _PORT;
}(_module._MODULE);

var _PRIVPORT = /*#__PURE__*/function (_PORT2) {
  _inherits(_PRIVPORT, _PORT2);

  var _super2 = _createSuper(_PRIVPORT);

  function _PRIVPORT(obj) {
    var _this2;

    _classCallCheck(this, _PRIVPORT);

    _this2 = _super2.call(this, obj);
    _this2.port = null;
    _this2.portListener = null;

    _this2.connect();

    _this2.registerConnectionBasedEvents();

    window.addEventListener('pagehide', function () {
      !_this2.port || _this2.port.onMessage.removeListener(_this2.portListener);
    });
    return _this2;
  }

  _createClass(_PRIVPORT, [{
    key: "registerConnectionBasedEvents",
    value: function registerConnectionBasedEvents() {
      var events = this.events.CONNECTION;

      if (events) {
        var _iterator4 = _createForOfIteratorHelper(events),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var e = _step4.value;
            this.on(e, this.proxy(this, this.postMessage, e));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
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
    key: "connect",
    value: function connect() {
      var port = this.port = this.port || browser.runtime.connect({
        name: "".concat(this.name, "_").concat(this.id)
      });
      var listener = this.portListener = this.proxy(this, this.passMessage);
      port.onMessage.addListener(listener);
    }
  }]);

  return _PRIVPORT;
}(_PORT);

var _BGPORT = /*#__PURE__*/function (_PORT3) {
  _inherits(_BGPORT, _PORT3);

  var _super3 = _createSuper(_BGPORT);

  function _BGPORT(obj) {
    var _this3;

    _classCallCheck(this, _BGPORT);

    _this3 = _super3.call(this, obj);
    _this3.ports = {};

    _this3.registerOnConnectListener();

    _this3.registerConnectionBasedEvents();

    return _this3;
  }

  _createClass(_BGPORT, [{
    key: "registerConnectionBasedEvents",
    value: function registerConnectionBasedEvents() {
      var events = this.events.CONNECTION;

      if (events) {
        var _iterator5 = _createForOfIteratorHelper(events),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var e = _step5.value;
            this.on(e, this.proxy(this, this.postMessage, e));
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "registerOnConnectListener",
    value: function registerOnConnectListener() {
      var _this4 = this;

      browser.runtime.onConnect.addListener(function (port) {
        var ports = _this4.ports;

        var listener = _this4.proxy(_this4, _this4.passMessage);

        ports[port.name] = port;
        port.onMessage.addListener(listener);
        port.onDisconnect.addListener(function () {
          port.onMessage.removeListener(listener);
          delete ports[port.name];
        });
      });
    }
  }, {
    key: "postMessage",
    value: function postMessage(e) {
      var ports = this.ports;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var msg = {
        ev: e,
        args: args
      };

      for (var p in ports) {
        if (ports.hasOwnProperty(p)) {
          ports[p].postMessage(msg);
        }
      }
    }
  }]);

  return _BGPORT;
}(_PORT);

exports._PORT = _PORT;
exports._PRIVPORT = _PRIVPORT;
exports._BGPORT = _BGPORT;

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _STORE = /*#__PURE__*/exports._STORE = function (_MODULE2) {
  _inherits(_STORE, _MODULE2);

  var _super = _createSuper(_STORE);

  function _STORE(obj) {
    var _this;

    _classCallCheck(this, _STORE);

    _this = _super.call(this, obj);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9QUklWUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImVudiIsImVudHJ5IiwibG9ja2VkIiwidXBkYXRlRW50cnkiLCJpc0FyciIsIkFycmF5IiwiaXNBcnJheSIsImN1cnJlbnRFbnRyeSIsInB1c2giLCJlbWl0IiwidXBkYXRlRW50cnlPbkZvdW5kIiwicmVzdW1lIiwiX2dldF9tb2RlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X2F1dG9zYXZlIiwiaGlzdG9yeSIsImF1dG9zYXZlIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsImF1dG9pbml0IiwidGFiIiwicG93ZXIiLCJvbiIsInBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvblN0YXJ0IiwibW9kZSIsInRvZ2dsZSIsInNpZGViYXIiLCJlbCIsInJlbmRlciIsImhlYWRlciIsInVwZGF0ZU5hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsInRpdGxlIiwiRE9NIiwiY2xpY2siLCJyZXRyeUJ0blNob3duIiwic2F2ZUJ0biIsInJldHJ5QnRuIiwidG9nZ2xlU2F2ZSIsInNhdmUiLCJyZXRyeVJlc3RvcmF0aW9uIiwiZGVhY3RpdmF0ZVJldHJ5Iiwib25EZWxldGVSZXF1ZXN0IiwiY29uZmlybWVkIiwid2luZG93IiwiY29uZmlybSIsImkxOG4iLCJnZXRNZXNzYWdlIiwiYWxlcnQiLCJtZXRoIiwiYWN0aXZhdGVTYXZlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZGVhY3RpdmF0ZVNhdmUiLCJhY3RpdmF0ZVJldHJ5IiwidG9nZ2xlSW1tdXQiLCJlIiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwidXBkYXRlSW1tdXQiLCJpbW11dCIsIm9uUGFnZVN0YXRlIiwic3RhdGUiLCJyZXRyeUFjdGl2ZSIsImxpbmsiLCJnZXRBdHRyaWJ1dGUiLCJmcmFtZSIsImJ1dHRvbnMiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJtYXJrQWN0aW9uIiwiaGFzQXR0cmlidXRlIiwiYWN0aW9uIiwicGVybWlzc2lvbnMiLCJncmFudGVkIiwiZnJhbWVJZCIsImFjdGl2YXRlIiwibWFya0luZm9zIiwic2VuZGVyIiwiZm9yRWFjaCIsImJ0biIsInR5cGUiLCJib29rbWFyayIsImRlYWN0aXZhdGUiLCJjaGFuZ2UiLCJhdXRvbWFya0VuYWJsZWQiLCJzeW5jIiwibWlzYyIsIm1hcmttZXRob2QiLCJsb2NhbCIsImxlZnRDb250YWluZXIiLCJyaWdodENvbnRhaW5lciIsImZyYWdSaWdodCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJmcmFnTGVmdCIsInMiLCJNYXRoIiwiY2VpbCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb3VudCIsIm0iLCJib3giLCJpbnB1dCIsImV4YW1wbGVUZXh0IiwiYnV0dG9uIiwiY29sb3IiLCJjYkJveCIsImNiIiwiY2JMYWJlbCIsImNiU3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJleHRyYWN0QmdDb2xvciIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaWQiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwZW5kQ2hpbGQiLCJ0b1VwcGVyQ2FzZSIsImNoZWNrZWQiLCJzdHlsZXMiLCJzcGxpdCIsImwiLCJpIiwiaW5jbHVkZXMiLCJzZWxlY3QiLCJhcHBseUNvbG9yIiwidG9nZ2xlTWFya2VyQnV0dG9ucyIsInNob3ciLCJzZWxlY3Rpb24iLCJtYXJrcyIsIm1hcmtJRHMiLCJjdXJyZW50Iiwic2V0RmlsdGVycyIsInRvZ2dsZU1hcCIsImEiLCJiIiwiYyIsInNldE1hcmtzIiwicmVuZGVyU1ZHRmlsdGVycyIsInJlbmRlckxpc3QiLCJjb25jYXQiLCJtYXAiLCJmaW5kIiwibWFyayIsInNldE1hcmtJRHMiLCJpZHMiLCJib2R5IiwidG1wbCIsImNvbG9ycyIsIl9TRVRUSU5HUyIsIk5PVEVfQ09MT1JTIiwidG9Mb3dlckNhc2UiLCJjb252ZXJ0SGV4Iiwic3Vic3RyIiwiZmlsdGVyIiwiY2xvbmVOb2RlIiwiaGV4IiwiTnVtYmVyIiwibWFya1RtcGwiLCJmcmFnbWVudCIsIm1hcmtzQ29udGFpbmVyIiwibWFya0NvbnRhaW5lciIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0IiwiaW5kZXhPZiIsImhhc05vdGUiLCJub3RlIiwibm90ZUNvbG9yIiwibm90ZVRleHQiLCJub3RlQnRuIiwibm90ZU5vZGUiLCJib3JkZXJDb2xvciIsIm5hdiIsImRpciIsImFjdGl2YXRlTGlzdEl0ZW0iLCJjdXJyZW50SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJmb2xkTGlzdCIsInZhbCIsInRvZ2dsZVNldHRpbmdzIiwidG9nZ2xlTm90ZSIsIm1hcmtFbCIsInllcyIsIm5vIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiRGF0ZSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJsYXN0IiwiZmllbGQiLCJkYXRlIiwicmVwbGFjZSIsInAiLCJxIiwiYWN0aXZhdGVCb29rbWFyayIsImRlYWN0aXZhdGVCb29rbWFyayIsImFjdGl2YXRlTm90ZXMiLCJkZWFjdGl2YXRlTm90ZXMiLCJwYWdlQWN0aW9uIiwib25Ob3Rlc1N0YXRlIiwibm90ZXMiLCJub3RlRWxzIiwiY3VycmVudENvbG9yIiwidXJsIiwiYWRkTm90ZSIsIm1heCIsInRvZ2dsZVNlbGVjdCIsInRvZ2dsZU5vdGVzIiwiZ2V0QnlJZCIsInByZXZpb3VzU2libGluZyIsImNvbnRhaW5lciIsIm5vdGVFbCIsInRleHRhcmVhIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImNoYW5nZUNvbG9yIiwicmVtb3ZlTm90ZSIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwidG9nZ2xlUGFsZXR0ZSIsInBhbGV0dGUiLCJhZGp1c3RUZXh0YXJlYUhlaWdodCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJzYiIsInRhYlNldHRpbmdzIiwidW5mb2xkZWQiLCJvcGVuIiwiY2xvc2UiLCJub2RlTmFtZSIsInBvcCIsInRhYkVsIiwic2hvd0VudHJ5U3BlY2lmaWNUYWJzIiwidGFncyIsInRhZyIsInJlbmRlclRhZyIsImRlbCIsIngiLCJhZGRUYWciLCJpbnAiLCJ0cmltIiwicmVtb3ZlVGFnIiwidGhlbWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJDT05ORUNUSU9OIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInNob3J0Y3V0cyIsInoiLCJ5IiwiZCIsInciLCJuIiwiYXJyb3d1cCIsImFycm93ZG93biIsImNtIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJuYW1pbmciLCJkb3dubG9hZCIsImNvcHkiLCJzYXZlTm90ZSIsInNvcnRlZCIsInZpZXciLCJwcCIsImlnbm9yZUhhc2giLCJhdXRvUmV0cnkiLCJhdXRvY3MiLCJpZnJhbWVzIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwibm90ZWZvbnRzaXplIiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJsb2FkTm90ZSIsImN1c3RvbVNlYXJjaCIsInRtdWlwb3MiLCJwcm9ncmVzc2JhciIsInRiYnBvd2VyIiwibWV0YSIsImFjdGlvbnMiLCJsaW5rcyIsInRoZW1lcyIsImVudHJpZXMiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsIk1BWF9MT0dfRU5UUklFUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidGFyZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9leHRyYSIsInNldCIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGEiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJ0YWJJZCIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwicmVnaXN0ZXJPbmVPZmZFdmVudHMiLCJPTkVPRkYiLCJyZXEiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwicG9ydCIsInBvcnRMaXN0ZW5lciIsImNvbm5lY3QiLCJyZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsInJlbW92ZUxpc3RlbmVyIiwicG9zdE1lc3NhZ2UiLCJsaXN0ZW5lciIsIl9CR1BPUlQiLCJwb3J0cyIsInJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYXJlYSIsImluaXQiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImxvZ3MiXSwibWFwcGlu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QUFDQSxZQUFZLENBQUNLLElBQW5DLEVBQXlDLE9BQU8sRUFBUDtBQUN6QyxlQUFPTCxZQUFZLENBQUNLLElBQXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU85YSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I4RixLQUFoQixDQUFzQjVGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBcWEsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNuSyxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT3RRLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjJGLElBQWhCLENBQXFCekYsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFzYSxhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQ3BLLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT21LLFlBQVksQ0FBQ25LLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCN1IsZSIsImZpbGUiOiJjb250ZW50L3NpZGViYXIvc2lkZWJhci53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JULCBfUFJJVlBPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9QUklWUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnb25Ub2dnbGVkU3luYycsXHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCc6ICd1cGRhdGVFbnRyeU9uRm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYic6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInOiAncmVzdW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGVudjogJ3NpZGViYXInLFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIGxvY2tlZDogZmFsc2UsXHJcblxyXG4gIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgY29uc3QgaXNBcnIgPSBBcnJheS5pc0FycmF5KGVudHJ5KTtcclxuICAgICAgY29uc3QgY3VycmVudEVudHJ5ID0gISF0aGlzLmVudHJ5O1xyXG5cclxuICAgICAgdGhpcy5sb2NrZWQgPSB0aGlzLmxvY2tlZCB8fCBpc0FyciB8fCBlbnRyeS5sb2NrZWQ7XHJcblxyXG4gICAgICBpZiAoIXRoaXMubG9ja2VkIHx8IGlzQXJyKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMubG9ja2VkICYmICFpc0Fycikge1xyXG4gICAgICAgIGlmICh0aGlzLmVudHJ5ICYmIEFycmF5LmlzQXJyYXkodGhpcy5lbnRyeSkpIHRoaXMuZW50cnkucHVzaChlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVudHJ5ID0gW2VudHJ5XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRFbnRyeSkgdGhpcy5lbWl0KCd1cGRhdGVkOnN0b3JlZC1lbnRyeScsIHRoaXMuZW50cnkpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnc3RvcmVkOmVudHJ5JywgdGhpcy5lbnRyeSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uRm91bmQoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUVudHJ5KGVudHJ5KTtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGx5LXN0b3JlZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZW50cnkgPSBudWxsO1xyXG4gICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDplbnRyeScpO1xyXG4gIH0sXHJcblxyXG5cclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfcGFnZW5vdGVzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnBhZ2Vub3RlcyB8fCBudWxsKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9QT1JUIGZyb20gJy4vcG9ydCdcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RoZW1lcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGVhZGVyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tZXRhLWluZm9zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90YWdzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlLW5vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrZXJzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmstYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbGlua3MnXHJcblxyXG5fTDEwTigpO1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdvblN0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICd0b2dnbGUnLFxyXG4gICAgICAnaW5pdGlhbGx5LXN0b3JlZDplbnRyeSc6ICd0b2dnbGUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW5lZDpzaWRlYmFyJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcblxyXG4gIHBvd2VyKG9uKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXItLXBhdXNlZCcpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuXHJcbiAgICBpZiAob24pIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMucG93ZXIobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGVudHJ5KSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG4gICAgaWYgKGVudHJ5ICYmIF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZWw7XHJcblxyXG4gICAgaWYgKCFlbnRyeSkgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkpIHJldHVybjtcclxuXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB0aGlzLnVwZGF0ZU5hbWUoZW50cnkubmFtZSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlTmFtZShuYW1lKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19uYW1lJylbMF07XHJcbiAgICBlbC5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgZWwudGl0bGUgPSBuYW1lO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcyc6ICdhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAndXBkYXRlSW1tdXQnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZScsXHJcbiAgICAgICdpbml0aWFsbHktc3RvcmVkOmVudHJ5JzogJ3VwZGF0ZUltbXV0J1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXJldHJ5JzogJ3JldHJ5UmVzdG9yYXRpb24nLFxyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXNhdmUnOiAnc2F2ZScsXHJcbiAgICAgICAgJyNwYWdlLWFjdGlvbi0tZGVsZXRlJzogJ29uRGVsZXRlUmVxdWVzdCcsXHJcbiAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlSW1tdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXRyeUJ0blNob3duOiBmYWxzZSxcclxuICBzYXZlQnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLXNhdmUnKSxcclxuICByZXRyeUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1yZXRyeScpLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudG9nZ2xlU2F2ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgcmV0cnlSZXN0b3JhdGlvbigpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICAgIHRoaXMuZGVhY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfSxcclxuICBvbkRlbGV0ZVJlcXVlc3QoKSB7XHJcbiAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnc2I1MTQnKSk7XHJcbiAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgIGlmIChfU1RPUkUuZW50cnkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3NpZGViYXI6ZGVsZXRlLWVudHJ5JywgW19TVE9SRS5lbnRyeS5uYW1lXSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnc2I1MTUnKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZVNhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBjb25zdCBtZXRoID0gYXV0b3NhdmUgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICB0aGlzLnNhdmVCdG4uY2xhc3NMaXN0W21ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVTYXZlKG9uID0gdHJ1ZSkge1xyXG4gICAgaWYgKG9uKSB0aGlzLnNhdmVCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgZWxzZSB0aGlzLnNhdmVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVNhdmUoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlU2F2ZShmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgaWYgKCF0aGlzLnJldHJ5QnRuU2hvd24pIHtcclxuICAgICAgdGhpcy5yZXRyeUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5yZXRyeUJ0blNob3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRlYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIGlmICh0aGlzLnJldHJ5QnRuU2hvd24pIHtcclxuICAgICAgdGhpcy5yZXRyeUJ0bi5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5yZXRyeUJ0blNob3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVJbW11dChlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0taW1tdXQnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOmltbXV0JywgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgdXBkYXRlSW1tdXQoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICBjb25zdCBtZXRoID0gZW50cnkuaW1tdXQgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLWltbXV0JykuY2xhc3NMaXN0W21ldGhdKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1ib3gnKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtYm94JykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLnJldHJ5QWN0aXZlKSB0aGlzLmFjdGl2YXRlUmV0cnkoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1saW5rcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5saW5rJzogJ2xpbmsnLFxyXG4gICAgICAgICcubGlua19faWNvbic6ICdsaW5rJyxcclxuICAgICAgICAnLmxpbmtfX3RleHQnOiAnbGluaydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxpbmsoZSwgZWwpIHtcclxuICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5rJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW46YWRkb24tcGFnZShzYiknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnYWN0aXZhdGUnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnOiAnYWN0aXZhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1tYXJrJzogJ21hcmtBY3Rpb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGZyYW1lOiAwLFxyXG4gIGJ1dHRvbnM6IFtdLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJykpO1xyXG4gIH0sXHJcbiAgbWFya0FjdGlvbihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgY29uc3QgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpO1xyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2NvcHknKSB7XHJcbiAgICAgIGJyb3dzZXIucGVybWlzc2lvbnMuY29udGFpbnMoeyBwZXJtaXNzaW9uczogWydjbGlwYm9hcmRXcml0ZSddIH0pLnRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIGdyYW50ZWQsIG51bGwsIHsgdGFiOiAnYWN0aXZlJywgZnJhbWVJZDogdGhpcy5mcmFtZSB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVtaXQoJ3NpZGViYXI6JyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwgbnVsbCwgbnVsbCwgeyB0YWI6ICdhY3RpdmUnLCBmcmFtZUlkOiB0aGlzLmZyYW1lIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZhdGUobWFya0luZm9zLCBzZW5kZXIpIHtcclxuICAgIHRoaXMuZnJhbWUgPSBzZW5kZXIgJiYgc2VuZGVyLmZyYW1lSWQgPyBzZW5kZXIuZnJhbWVJZCA6IDA7XHJcblxyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgbGV0IHR5cGUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdHlwZSA9PT0gJ2NvcHknIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gJ2RlbGV0ZS1oaWdobGlnaHQnIHx8XHJcbiAgICAgICAgKHR5cGVvZiBtYXJrSW5mb3NbdHlwZV0gPT09ICdib29sZWFuJyAmJiAhbWFya0luZm9zW3R5cGVdKSB8fFxyXG4gICAgICAgICh0eXBlID09PSAnZGVsZXRlLWJvb2ttYXJrJyAmJiBtYXJrSW5mb3MuYm9va21hcmspXHJcbiAgICAgICkge1xyXG4gICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1hcmtlcnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAncmVuZGVyJyxcclxuICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICdyZW5kZXInLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAndG9nZ2xlTWFya2VyQnV0dG9ucycsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLm1hcmtlcl9fY29sb3InOiAnY2hhbmdlJyxcclxuICAgICAgICAnLm1hcmtlcl9fY2InOiAnc2VsZWN0J1xyXG4gICAgICB9LFxyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya2VyX19hcHBseSc6ICdhcHBseUNvbG9yJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZnJhbWU6IDAsXHJcbiAgYXV0b21hcmtFbmFibGVkOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiAoIXN0b3JhZ2Uuc3luYyB8fCBzdG9yYWdlLnN5bmMuc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvbWFya0VuYWJsZWQgPSBzdG9yYWdlLnNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5zeW5jICYmICFzdG9yYWdlLnN5bmMuc2V0dGluZ3MpIHtcclxuICAgICAgICAgIHRoaXMuYXV0b21hcmtFbmFibGVkID0gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgaWYgKCFtYXJrZXJzKSByZXR1cm4gdGhpcztcclxuICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJzLWNvbnRhaW5lci0tbGVmdCcpO1xyXG4gICAgICBjb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJzLWNvbnRhaW5lci0tcmlnaHQnKTtcclxuICAgICAgY29uc3QgZnJhZ1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBmcmFnTGVmdCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgcyA9IE1hdGguY2VpbChPYmplY3Qua2V5cyhtYXJrZXJzKS5sZW5ndGggLyAyKTtcclxuICAgICAgbGV0IGNvdW50ID0gMCwgbSwgYm94LCBpbnB1dCwgZXhhbXBsZVRleHQsIGJ1dHRvbiwgY29sb3IsIGNiQm94LCBjYiwgY2JMYWJlbCwgY2JTcGFuO1xyXG5cclxuICAgICAgbGVmdENvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuICAgICAgcmlnaHRDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBmb3IgKG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgIGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBleGFtcGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2JCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY2JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbG9yID0gdGhpcy5leHRyYWN0QmdDb2xvcihtYXJrZXJzW21dLnN0eWxlKTtcclxuXHJcbiAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdtYXJrZXIgdS1jZic7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ21hcmtlcl9fY29sb3InO1xyXG4gICAgICAgIGlucHV0LmlkID0gJ21hcmtlci0nICsgbTtcclxuICAgICAgICBpbnB1dC5uYW1lID0gbTtcclxuICAgICAgICBpbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbG9yO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LmNsYXNzTmFtZSA9ICdtYXJrZXJfX3RleHQnO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBtYXJrZXJzW21dLnN0eWxlKTtcclxuICAgICAgICBleGFtcGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXItJyArIG0pO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnbWFya2VyX19hcHBseSc7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIG0pO1xyXG4gICAgICAgIGNiQm94LmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NiLWJveCc7XHJcbiAgICAgICAgY2IuY2xhc3NOYW1lID0gJ21hcmtlcl9fY2InO1xyXG4gICAgICAgIGNiLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBtKTtcclxuICAgICAgICBjYi50eXBlID0gJ3JhZGlvJztcclxuICAgICAgICBjYi5pZCA9ICdtYXJrZXJfX2NiLS0nICsgbTtcclxuICAgICAgICBjYi5uYW1lID0gJ21hcmtlci1jYic7XHJcbiAgICAgICAgY2JMYWJlbC5jbGFzc05hbWUgPSAnZmFrZS1yYic7XHJcbiAgICAgICAgY2JMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXJfX2NiLS0nICsgbSk7XHJcbiAgICAgICAgY2JTcGFuLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDI1Q0YpO1xyXG5cclxuICAgICAgICBjYkxhYmVsLmFwcGVuZENoaWxkKGNiU3Bhbik7XHJcbiAgICAgICAgY2JCb3guYXBwZW5kQ2hpbGQoY2IpO1xyXG4gICAgICAgIGNiQm94LmFwcGVuZENoaWxkKGNiTGFiZWwpO1xyXG5cclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY2JCb3gpO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGV4YW1wbGVUZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ID4gMyAmJiBjb3VudCA+IHMpIHtcclxuICAgICAgICAgIGZyYWdMZWZ0LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZyYWdSaWdodC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbSA9IG0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBtID0gbSA9PT0gJ0VOVEVSJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IG07XHJcbiAgICAgICAgZXhhbXBsZVRleHQuaW5uZXJUZXh0ID0gbTtcclxuICAgICAgICBpZiAoIWNvbG9yKSBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ1JpZ2h0KTtcclxuICAgICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnTGVmdCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hdXRvbWFya0VuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2F1dG8nKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2VyX19jYi0tbScpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYXV0bycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGV4dHJhY3RCZ0NvbG9yKHN0eWxlcykge1xyXG4gICAgbGV0IHNwbGl0ID0gc3R5bGVzLnNwbGl0KCc7JyksXHJcbiAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcclxuICAgICAgICBjb2xvciA9ICcnLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHN0eWxlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHN0eWxlID0gc3BsaXRbaV07XHJcbiAgICAgIGlmIChzdHlsZS5pbmNsdWRlcygnYmFja2dyb3VuZC1jb2xvcicpKSB7XHJcbiAgICAgICAgY29sb3IgPSBzdHlsZS5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbiAgfSxcclxuICBjaGFuZ2UoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlOmJnLXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgfSxcclxuICBzZWxlY3QoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JyksIHsgdGFiOiAnYWN0aXZlJywgZnJhbWVJZDogdGhpcy5mcmFtZSB9KTtcclxuICB9LFxyXG4gIGFwcGx5Q29sb3IoZSwgZWwpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpoaWdobGlnaHQnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JyksIHsgdGFiOiAnYWN0aXZlJywgZnJhbWVJZDogdGhpcy5mcmFtZSB9KTtcclxuICB9LFxyXG4gIHRvZ2dsZU1hcmtlckJ1dHRvbnMoc2hvdywgc2VuZGVyKSB7XHJcbiAgICBpZiAodGhpcy5hdXRvbWFya0VuYWJsZWQpIHJldHVybjtcclxuICAgIHRoaXMuZnJhbWUgPSBzZW5kZXIgJiYgc2VuZGVyLmZyYW1lSWQgPyBzZW5kZXIuZnJhbWVJZCA6IDA7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ3NldEF0dHJpYnV0ZSc7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtlcl9fYXBwbHknKSkuZm9yRWFjaChidG4gPT4gYnRuW21ldGhdKCdkaXNhYmxlZCcsIHRydWUpKTtcclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICB0aGlzLnRvZ2dsZU1hcmtlckJ1dHRvbnMoc3RhdGUuc2VsZWN0aW9uKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1hcmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnOiAnc2V0TWFya0lEcycsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JyA6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5tYXJrX190ZXh0JzogJ2FjdGl2YXRlJyxcclxuICAgICAgICAnLm1hcmtfX25vdGUtYnRuJzogJ3RvZ2dsZU5vdGUnLFxyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tbmF2JzogJ25hdidcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJyNmb2xkLW1hcmtzJzogJ2ZvbGRMaXN0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWFya3M6IFtdLFxyXG4gIG1hcmtJRHM6IG51bGwsXHJcbiAgbGVuZ3RoOiAwLFxyXG4gIGN1cnJlbnQ6IC0xLFxyXG4gIHNldEZpbHRlcnM6IGZhbHNlLFxyXG4gIHRvZ2dsZU1hcDogeyAnMSc6IFtmYWxzZSwgZmFsc2VdLCAnMic6IFt0cnVlLCBmYWxzZV0sICczJzogW2ZhbHNlLCB0cnVlXSwgJzQnOiBbdHJ1ZSwgdHJ1ZV0gfSxcclxuXHJcbiAgcmVuZGVyKGEsYixjKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnkgPSBfU1RPUkUuZW50cnk7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy5zZXRNYXJrcygpO1xyXG4gICAgICBpZiAoIXRoaXMuc2V0RmlsdGVycykgdGhpcy5yZW5kZXJTVkdGaWx0ZXJzKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyTGlzdCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2V0TWFya3MoKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnk7XHJcbiAgICBsZXQgbWFya3MgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBlbnRyeS5mb3JFYWNoKGUgPT4gbWFya3MgPSBtYXJrcy5jb25jYXQoZS5tYXJrcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtJRHMgPSB0aGlzLm1hcmtJRHM7XHJcbiAgICAvL3RoaXMubGVuZ3RoID0gbWFya3MubGVuZ3RoO1xyXG4gICAgLy90aGlzLm1hcmtzID0gbWFya0lEcyA/IG1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbWFya0lEcy5pbmRleE9mKG0xLmlkKSA8IG1hcmtJRHMuaW5kZXhPZihtMi5pZCkpIDogbWFya3M7XHJcbiAgICB0aGlzLm1hcmtzID0gbWFya0lEcyA/XHJcbiAgICAgIG1hcmtJRHMubWFwKGlkID0+IG1hcmtzLmZpbmQobWFyayA9PiBtYXJrLmlkID09IGlkKSkgOlxyXG4gICAgICBtYXJrcztcclxuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5tYXJrcy5sZW5ndGg7XHJcbiAgfSxcclxuICBzZXRNYXJrSURzKGlkcyxiLGMpIHtcclxuICAgIHRoaXMubWFya0lEcyA9IGlkcztcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuICByZW5kZXJTVkdGaWx0ZXJzKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCB0bXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgY29sb3JzID0ge307XHJcbiAgICBsZXQgaSwgYztcclxuICAgIGZvciAoaSBpbiBfU0VUVElOR1MuTk9URV9DT0xPUlMpIHtcclxuICAgICAgIGMgPSBfU0VUVElOR1MuTk9URV9DT0xPUlNbaV07XHJcbiAgICAgIGNvbG9yc1tpLnRvTG93ZXJDYXNlKCldID0gJzAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cigxLDIpKSArICcgMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDMsMikpICsgJyAwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoNSwyKSkgKyAnIDAgMCAwIDEgMCc7XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyO1xyXG4gICAgZm9yIChpIGluIGNvbG9ycykge1xyXG4gICAgICBmaWx0ZXIgPSB0bXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgZmlsdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWx0ZXInKVswXS5pZCA9ICdmaWx0ZXItLScgKyBpO1xyXG4gICAgICBmaWx0ZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZlQ29sb3JNYXRyaXgnKVswXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlcycsIGNvbG9yc1tpXSk7XHJcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmlsdGVyKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRGaWx0ZXJzID0gdHJ1ZTtcclxuICB9LFxyXG4gIGNvbnZlcnRIZXgoaGV4KSB7XHJcbiAgICByZXR1cm4gKCgxNiAqIE51bWJlcignMHgnICsgaGV4WzBdKSkgKyBOdW1iZXIoJzB4JyArIGhleFsxXSkpIC8gMjU1O1xyXG4gIH0sXHJcbiAgcmVuZGVyTGlzdCgpIHtcclxuICAgIGNvbnN0IG1hcmtUbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgY29uc3QgbWFya3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKTtcclxuICAgIGxldCBtYXJrQ29udGFpbmVyO1xyXG5cclxuICAgIG1hcmtzQ29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgIHRoaXMubWFya3MuZm9yRWFjaCgobWFyaywgaSkgPT4ge1xyXG4gICAgICBpZiAobWFyaykge1xyXG4gICAgICAgIG1hcmtDb250YWluZXIgPSBtYXJrVG1wbC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5pZCA9ICcnO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX3RleHQnKVswXTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1hcmsudGV4dCk7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gbWFyay5zdHlsZS5pbmRleE9mKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgbGV0IGhhc05vdGUgPSBtYXJrLm5vdGUgJiYgKHR5cGVvZiBtYXJrLm5vdGUgPT09ICdzdHJpbmcnIHx8IG1hcmsubm90ZS50ZXh0KTtcclxuICAgICAgICBjb2xvciA9IGNvbG9yID09PSAtMSA/ICd0cmFuc3BhcmVudCcgOiBtYXJrLnN0eWxlLnN1YnN0cihjb2xvciArIDE3LCA3KTtcclxuICAgICAgICBsZXQgbm90ZSwgbm90ZUNvbG9yLCBub3RlVGV4dCwgbm90ZUJ0biwgbm90ZU5vZGU7XHJcblxyXG4gICAgICAgIHRleHROb2RlLnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGV4dE5vZGUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoaGFzTm90ZSkge1xyXG4gICAgICAgICAgbm90ZSA9IG1hcmsubm90ZTtcclxuICAgICAgICAgIG5vdGVDb2xvciA9IG5vdGUuY29sb3IgfHwgJ3llbGxvdyc7XHJcbiAgICAgICAgICBub3RlVGV4dCA9IG5vdGUudGV4dCB8fCBub3RlO1xyXG4gICAgICAgICAgbWFya0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYXJrLS1ub3RlJyk7XHJcbiAgICAgICAgICBub3RlQnRuID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlLWJ0bicpWzBdO1xyXG4gICAgICAgICAgbm90ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgIG5vdGVCdG4uY2xhc3NMaXN0LmFkZCgnbWFya19fbm90ZS1idG4tLScgKyBub3RlQ29sb3IpO1xyXG4gICAgICAgICAgbm90ZU5vZGUgPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUnKVswXTtcclxuICAgICAgICAgIG5vdGVOb2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vdGVUZXh0KSk7XHJcbiAgICAgICAgICBub3RlTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgIG5vdGVOb2RlLmNsYXNzTGlzdC5hZGQoJ21hcmtfX25vdGUtLScgKyBub3RlQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChtYXJrQ29udGFpbmVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBtYXJrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgfSxcclxuICBuYXYoZSwgZWwpIHtcclxuICAgIGNvbnN0IGRpciA9IDEgKiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgIHRoaXMuY3VycmVudCArPSBkaXI7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID49IHRoaXMubGVuZ3RoKSB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgZWxzZSBpZiAodGhpcy5jdXJyZW50IDwgMCkgdGhpcy5jdXJyZW50ID0gdGhpcy5sZW5ndGggLSAxO1xyXG4gICAgdGhpcy5hY3RpdmF0ZUxpc3RJdGVtKCk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZUxpc3RJdGVtKGlkKSB7XHJcbiAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykgdGhpcy5jdXJyZW50ID0gaWQ7XHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFyay0tYWN0aXZlJylbMF07XHJcbiAgICBpZiAoY3VycmVudEl0ZW0pIGN1cnJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmstLWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtaWQ9XCInICsgW3RoaXMuY3VycmVudF0gKyAnXCJdJykuY2xhc3NMaXN0LmFkZCgnbWFyay0tYWN0aXZlJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6bmV4dC1tYXJrJywgdGhpcy5jdXJyZW50LCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShlLCBlbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtbWFya3MnKS52YWx1ZSA9IDA7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCd1bmZvbGRlZCcpO1xyXG4gICAgdGhpcy5hY3RpdmF0ZUxpc3RJdGVtKDEqZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICB9LFxyXG4gIGZvbGRMaXN0KGUsIGVsKSB7XHJcbiAgICBjb25zdCB2YWwgPSBlbC52YWx1ZTtcclxuICAgIGlmICh2YWwgIT0gMCkge1xyXG4gICAgICBjb25zdCBtYXJrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcycpO1xyXG4gICAgICBjb25zdCB0b2dnbGVTZXR0aW5ncyA9IHRoaXMudG9nZ2xlTWFwW3ZhbF07XHJcblxyXG4gICAgICB0aGlzLnRvZ2dsZSgndGV4dCcsIHRvZ2dsZVNldHRpbmdzWzBdKTtcclxuICAgICAgdGhpcy50b2dnbGUoJ25vdGUnLCB0b2dnbGVTZXR0aW5nc1sxXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlKGUsIGVsKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1tYXJrcycpLnZhbHVlID0gMDtcclxuICAgIGNvbnN0IG1hcmtFbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICBtYXJrRWwuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1ub3RlJyk7XHJcbiAgICBtYXJrRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZScpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3VuZm9sZGVkJyk7XHJcbiAgfSxcclxuICB0b2dnbGUodHlwZSwgc2hvdykge1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfXycgKyB0eXBlKSlcclxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0W21ldGhdKCd1bmZvbGRlZCcpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tZXRhJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5ICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBjb25zdCB5ZXMgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneWVzJyk7XHJcbiAgICAgIGNvbnN0IG5vID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vJyk7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fbnVtYmVyLW1hcmtzJykuaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fY3JlYXRlZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX2xhc3QtbW9kaWZpZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuXHJcbiAgICAgIFsnc3luY2VkJywgJ2ltbXV0J11cclxuICAgICAgICAuZm9yRWFjaChmaWVsZCA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fJyArIGZpZWxkKS5pbm5lclRleHQgPSBlbnRyeVtmaWVsZF0gPyB5ZXMgOiBubyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdhZGRlZDpib29rbWFyayc6ICdhY3RpdmF0ZUJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnZGVhY3RpdmF0ZUJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnOiAnYWN0aXZhdGVOb3RlcycsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdkZWFjdGl2YXRlTm90ZXMnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZSc6ICdvbk5vdGVzU3RhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1wYWdlJzogJ3BhZ2VBY3Rpb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmF0ZUJvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnc2Nyb2xsJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzY3JvbGwnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZU5vdGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnbm90ZXMnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVOb3RlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ25vdGVzJywgZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUodHlwZSwgb24pIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tJyArIHR5cGUpO1xyXG4gICAgaWYgKG9uKSB7XHJcbiAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHBhZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjonICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLmJvb2ttYXJrKSB0aGlzLmFjdGl2YXRlQm9va21hcmsoKTtcclxuICB9LFxyXG4gIG9uTm90ZXNTdGF0ZShub3Rlcykge1xyXG4gICAgaWYgKG5vdGVzKSB0aGlzLmFjdGl2YXRlTm90ZXMoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW5vdGVzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFkZC1ub3RlJzogJ2FkZE5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVjb2xvcic6ICdjaGFuZ2VDb2xvcicsXHJcbiAgICAgICAgJ3Rtbm90ZWN1c3RvbWl6ZSc6ICd0b2dnbGVQYWxldHRlJyxcclxuICAgICAgICAndG1ub3RlZGVsZXRlJzogJ3JlbW92ZU5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICd0b2dnbGVOb3RlJyxcclxuICAgICAgICAndG1ub3Rlc2F2ZSc6ICdzYXZlJ1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnI2ZvbGQtcGFnZS1ub3Rlcyc6ICd0b2dnbGVOb3RlcydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbm90ZXM6IFtdLFxyXG4gIG5vdGVFbHM6IHt9LFxyXG4gIGlkOiAwLFxyXG4gIGN1cnJlbnRDb2xvcjogJ3llbGxvdycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybCA9IHRhYi51cmw7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3BhZ2Vub3RlcycpLnRoZW4ocGFnZW5vdGVzID0+IHtcclxuICAgICAgICBwYWdlbm90ZXMgPSBwYWdlbm90ZXMgJiYgcGFnZW5vdGVzW3VybF0gPyBwYWdlbm90ZXNbdXJsXSA6IG51bGw7XHJcbiAgICAgICAgbGV0IGwsIGlkO1xyXG4gICAgICAgIGlmIChwYWdlbm90ZXMgJiYgKGwgPSBwYWdlbm90ZXMubGVuZ3RoKSkge1xyXG4gICAgICAgICAgdGhpcy5ub3RlcyA9IHBhZ2Vub3RlcztcclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWQgPSB0aGlzLmFkZE5vdGUocGFnZW5vdGVzW2xdKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IE1hdGgubWF4KHRoaXMuaWQsIGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3QoISF0aGlzLm5vdGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZU5vdGVzKG51bGwsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNhdmUoZSwgZWwpIHtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5nZXRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgbm90ZS50ZXh0ID0gZWwucHJldmlvdXNTaWJsaW5nLnZhbHVlO1xyXG4gICAgICBub3RlLm5hbWUgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rtbm90ZV9faGVhZGVyJylbMF0udmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6cGFnZS1ub3RlJywgdGhpcy51cmwsIHRoaXMubm90ZXMpO1xyXG4gIH0sXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IFtdO1xyXG4gICAgdGhpcy5ub3RlRWxzID0ge307XHJcbiAgICB0aGlzLmlkID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGVzJykudGV4dENvbnRlbnQgPSAnJztcclxuICB9LFxyXG5cclxuICBhZGROb3RlKG5vdGUpIHtcclxuICAgIG5vdGUgPSBub3RlLnR5cGUgPyBudWxsIDogbm90ZTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGVzJyk7XHJcbiAgICBjb25zdCBub3RlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlLXRlbXBsYXRlJykuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBub3RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICBjb25zdCBoZWFkZXIgPSBub3RlRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG1ub3RlX19oZWFkZXInKVswXTtcclxuICAgIG5vdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICBsZXQgaWQ7XHJcbiAgICBpZiAobm90ZSkge1xyXG4gICAgICBpZCA9IG5vdGVFbC5pZCA9IG5vdGUuaWQ7XHJcbiAgICAgIHRleHRhcmVhLnRleHRDb250ZW50ID0gbm90ZS50ZXh0IHx8ICcnO1xyXG4gICAgICBoZWFkZXIudmFsdWUgPSBub3RlLm5hbWUgfHwgJyc7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBub3RlLmNvbG9yKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVFbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZCA9IG5vdGVFbC5pZCA9ICsrdGhpcy5pZDtcclxuICAgICAgdGhpcy5ub3Rlcy5wdXNoKHsgaWQsIHRleHQ6ICcnLCBjb2xvcjogdGhpcy5jdXJyZW50Q29sb3IgfSk7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgdGhpcy5jdXJyZW50Q29sb3IpO1xyXG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5vdGVFbCwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIEFycmF5LmZyb20obm90ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKSk7XHJcblxyXG4gICAgdGhpcy5ub3RlRWxzW2lkXSA9IG5vdGVFbDtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdCh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfSxcclxuICBjaGFuZ2VDb2xvcihlLCBlbCkge1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdXJyZW50Q29sb3IgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcclxuICAgIHRoaXMubm90ZUVsc1tpZF0uY2xhc3NOYW1lID0gdGhpcy5ub3RlRWxzW2lkXS5jbGFzc05hbWUucmVwbGFjZSgvLS1cXHcrLywgJy0tJyArIGNvbG9yKTtcclxuICAgIHRoaXMuZ2V0QnlJZChpZCkuY29sb3IgPSBjb2xvcjtcclxuICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICBub3RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm90ZSk7XHJcbiAgICBkZWxldGUgdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgIHRoaXMubm90ZXMuc3BsaWNlKHRoaXMubm90ZXMuaW5kZXhPZih0aGlzLmdldEJ5SWQoaWQpKSwgMSk7XHJcbiAgICB0aGlzLnNhdmUoKTtcclxuICAgIGlmICghdGhpcy5ub3Rlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy50b2dnbGVTZWxlY3QoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlU2VsZWN0KHNob3cpIHtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKS5jbGFzc0xpc3RbbWV0aF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUGFsZXR0ZShlLCBlbCkge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcbiAgICBjb25zdCBwYWxldHRlID0gbm90ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlcGFsZXR0ZScpWzBdO1xyXG4gICAgcGFsZXR0ZS5jbGFzc0xpc3QudG9nZ2xlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIGlmICghcGFsZXR0ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3UtZGlzcGxheS0tbm9uZScpKSB7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZU5vdGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldO1xyXG4gICAgbm90ZS5jbGFzc0xpc3QudG9nZ2xlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgaWYgKCFub3RlLmNsYXNzTGlzdC5jb250YWlucygndG1ub3RlLS1taW4nKSkge1xyXG4gICAgICB0aGlzLmFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpLnZhbHVlID0gMDtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwudmFsdWUgPT0gMSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm5vdGVFbHMpIHtcclxuICAgICAgICB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBub3RlLCB0ZXh0YXJlYTtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5ub3RlRWxzKSB7XHJcbiAgICAgICAgbm90ZSA9IHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICAgICAgbm90ZS5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICAgIHRoaXMuYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGdldEJ5SWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLm5vdGVzLmZpbmQobm90ZSA9PiBub3RlLmlkID09IGlkKTtcclxuICB9LFxyXG4gIGFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpIHtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gbm90ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRleHRhcmVhLnNjcm9sbEhlaWdodCArIDEwICsgJ3B4JztcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdzaG93RW50cnlTcGVjaWZpY1RhYnMnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy50YWJfX3RpdGxlJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy50YWJfX25hbWUnOiAndG9nZ2xlJyxcclxuICAgICAgICAnLnRhYl9fdG9nZ2xlJzogJ3RvZ2dsZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRhYnM6IHt9LFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmICghc2V0dGluZ3MgfHwgIXNldHRpbmdzLnNiKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRhYlNldHRpbmdzID0gc2V0dGluZ3Muc2IudGFicztcclxuICAgICAgZm9yIChsZXQgdGFiIGluIHRhYlNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy50YWJzW3RhYl0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS0nICsgdGFiKTtcclxuICAgICAgICBpZiAodGFiU2V0dGluZ3NbdGFiXS51bmZvbGRlZCkgdGhpcy5vcGVuKHRhYik7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNsb3NlKHRhYik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9wZW4odGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QucmVtb3ZlKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgY2xvc2UodGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QuYWRkKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLm5vZGVOYW1lID09PSAnSDInID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICBjb25zdCB0YWIgPSBpZC5zcGxpdCgnLS0nKS5wb3AoKTtcclxuICAgIGNvbnN0IHRhYkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgdGFiRWwuY2xhc3NMaXN0LnRvZ2dsZSgndGFiLS1mb2xkZWQnKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDpzaWRlYmFyLXRhYicsIHRhYiwgIXRhYkVsLmNsYXNzTGlzdC5jb250YWlucygndGFiLS1mb2xkZWQnKSk7XHJcbiAgfSxcclxuICBzaG93RW50cnlTcGVjaWZpY1RhYnMoKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYi0tZW50cnknKSlcclxuICAgICAgLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGFncycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFnc19fcmVtb3ZlJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICAgJy5hZGQtdGFnJzogJ2FkZFRhZydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5ICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBjb25zdCB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBbXTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZ3MnKS5pbm5lclRleHQgPSAnJztcclxuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB0aGlzLnJlbmRlclRhZyh0YWcpKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlclRhZyh0YWcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJyk7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9ICd0YWdzX19pdGVtIHUtb3ZlcmZsb3ctLWVsbGlwc2lzJztcclxuICAgIGRlbC5jbGFzc05hbWUgPSAndGFnc19fcmVtb3ZlJztcclxuICAgIGRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJywgdGFnKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IHRhZztcclxuICAgIGRlbC5hcHBlbmRDaGlsZCh4KTtcclxuICAgIGVsLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKCkge1xyXG4gICAgY29uc3QgaW5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YWcnKTtcclxuICAgIGxldCB0YWcgPSBpbnAudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKCF0YWcpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnYWRkOnRhZycsIHRhZywgX1NUT1JFLmVudHJ5KTtcclxuICAgIGlucC52YWx1ZSA9ICcnO1xyXG4gICAgdGFnLnNwbGl0KCcgJykuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlOnRhZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YWcnKSwgX1NUT1JFLmVudHJ5KTtcclxuICAgIGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5wYXJlbnROb2RlKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS10aGVtZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLnRoZW1lLW9wdCc6ICdvbkNoYW5nZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRoZW1lOiAnZGVmYXVsdCcsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgdGhlbWUgPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5zYiAmJiBzZXR0aW5ncy5zYi50aGVtZSA/IHNldHRpbmdzLnNiLnRoZW1lIDogJ2RlZmF1bHQnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGhlbWUtLSR7dGhlbWV9YCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoZW1lKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uQ2hhbmdlKGUsIGVsKSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNpZGViYXItdGhlbWUnLCB0aGVtZSk7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgfSxcclxuICB1cGRhdGUodGhlbWUpIHtcclxuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKS5jbGFzc05hbWUgPSBgdGV4dG1hcmtlci1zaWRlYmFyLS0ke3RoZW1lfWA7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BSSVZQT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QUklWUE9SVCh7XHJcbiAgbmFtZTogJ3NpZGViYXInLFxyXG4gIHR5cGU6ICdwcml2aWxlZ2VkJyxcclxuICBpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNsaWNlKDIsIDE2KSxcclxuICBldmVudHM6IHtcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6ZGVsZXRlLWVudHJ5JyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnLFxyXG4gICAgICAnYWRkOnRhZycsXHJcbiAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJyxcclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlLFxyXG4gICAgICBhdXRvUmV0cnk6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgbm90ZWZvbnRzaXplOiAxMixcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgbG9hZE5vdGU6IGZhbHNlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICd0bSdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBpZiAoIXVybCkgcmV0dXJuICcnO1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkLCAnJyk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJywgJ0hyZWYnXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGFyZ3NbMF0udGFiSWQsIHsgZXY6IGV2ZW50LCB3YWl0OiB0cnVlIH0sIHsgZnJhbWVJZDogYXJnc1swXS5mcmFtZUlkIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgdGhpcy5yZWdpc3Rlck9uZU9mZkV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyT25lT2ZmRXZlbnRzKGV2ZW50cy5PTkVPRkYpO1xyXG4gIH1cclxuICByZWdpc3Rlck9uZU9mZkV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyB8fCAoIGV2ZW50cyA9IHRoaXMuZXZlbnRzLk9ORU9GRik7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBfUFJJVlBPUlQgZXh0ZW5kcyBfUE9SVCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAhdGhpcy5wb3J0IHx8IHRoaXMucG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIodGhpcy5wb3J0TGlzdGVuZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHMuQ09OTkVDVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgICAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IGAke3RoaXMubmFtZX1fJHt0aGlzLmlkfWAgfSk7XHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLnBvcnRMaXN0ZW5lciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSk7XHJcbiAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBfQkdQT1JUIGV4dGVuZHMgX1BPUlQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMucG9ydHMgPSB7fTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50cy5DT05ORUNUSU9OO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlck9uQ29ubmVjdExpc3RlbmVyKCkge1xyXG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcnRzID0gdGhpcy5wb3J0cztcclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpO1xyXG4gICAgICAgICAgICBwb3J0c1twb3J0Lm5hbWVdID0gcG9ydDtcclxuICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3J0Lm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgcG9ydHNbcG9ydC5uYW1lXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgcG9ydHMgPSB0aGlzLnBvcnRzO1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwIGluIHBvcnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgIHBvcnRzW3BdLnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9QT1JULCBfUFJJVlBPUlQsIF9CR1BPUlQgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==