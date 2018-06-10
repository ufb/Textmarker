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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 118);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(5);

var _getActiveTab = __webpack_require__(15);

var _extend = __webpack_require__(6);

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(1);

var _dommodule = __webpack_require__(16);

var _port = __webpack_require__(8);

var _l10n = __webpack_require__(17);

var _l10n2 = _interopRequireDefault(_l10n);

var _errorTracker = __webpack_require__(9);

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._MODULE = undefined;

var _mediator = __webpack_require__(7);

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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

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
  _get_storage: function _get_storage() {
    var _this3 = this;

    return browser.storage.local.get().then(function (localStorage) {
      return browser.storage.sync.get().then(function (syncedStorage) {
        ['version', 'logs'].forEach(function (field) {
          localStorage[field] = localStorage[field] || syncedStorage[field];
        });
        if (_this3.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
        return _this3._get_history().then(function (history) {
          localStorage.history = history;
          return localStorage;
        });
      });
    });
  },
  _get_local_storage: function _get_local_storage() {
    return browser.storage.local.get();
  },
  _get_synced_storage: function _get_synced_storage() {
    return browser.storage.sync.get();
  },
  _get_history: function _get_history() {
    return browser.storage.sync.get().then(function (syncedStorage) {
      var syncedHistory = syncedStorage.history;

      return browser.storage.local.get().then(function (localStorage) {
        var localHistory = localStorage.history;
        if (!syncedHistory) return localHistory;
        if (!localHistory) return syncedHistory;

        syncedHistory.order = syncedHistory.order.concat(localHistory.order);
        for (var e in localHistory.entries) {
          syncedHistory.entries[e] = localHistory.entries[e];
        }return syncedHistory;
      });
    });
  },
  _get_settings: function _get_settings() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings;
    });
  },
  _get_logs: function _get_logs() {
    return browser.storage.local.get().then(function (localStorage) {
      if (!localStorage || !localStorage.logs) return [];
      return localStorage.logs;
    });
  },
  _get_download_option: function _get_download_option() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return 'text';
      return storage.settings.history.download;
    });
  },
  _get_markers: function _get_markers() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.markers;
    });
  },
  _get_shortcuts: function _get_shortcuts() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.shortcuts;
    });
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _nav = __webpack_require__(119);

var _nav2 = _interopRequireDefault(_nav);

var _toggler = __webpack_require__(50);

var _toggler2 = _interopRequireDefault(_toggler);

__webpack_require__(120);

__webpack_require__(11);

__webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils._L10N)();

/* auto-insert current version number */
document.getElementById('version-number').innerText = browser.runtime.getManifest().version;
/* end: auto-insert current version number */

/* configure navs */
var navs = document.getElementsByClassName('nav'),
    n = navs.length;

while (n--) {
    new _nav2.default(navs[n]);
}var tab = window.location.hash.split('=')[1],
    allowedVals = ['news', 'manual', 'settings', 'history', 'contact', 'data', 'logs'];

if (allowedVals.includes(tab)) {
    window.document.getElementById('mainnav-' + tab).click();
    tab = tab[0].toUpperCase() + tab.substr(1);
    window.document.title = 'Textmarker - ' + browser.i18n.getMessage(tab);
}
/* end: configure navs */

/* configure toggle elements */
var toggleButtons = document.getElementsByClassName('toggle-button'),
    t = toggleButtons.length;

while (t--) {
    new _toggler2.default(toggleButtons[t]);
} /* end: configure toggle elements */

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _NAV = function () {
  function _NAV(el) {
    _classCallCheck(this, _NAV);

    this.el = el;
    this.pageNav = el.hasAttribute('data-page-nav');
    var current = this.current = el.getElementsByClassName('active')[0];
    this.init().open(current);
  }

  _createClass(_NAV, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.el.addEventListener('click', function (e) {
        var clicked = e.target;
        if (clicked.nodeName !== 'LI' || clicked.classList.contains('disabled')) return false;
        _this.toggle(clicked);
      }, false);
      return this;
    }
  }, {
    key: 'toggle',
    value: function toggle(el) {
      if (this.current == el) return;

      if (this.current) this.close(this.current);

      this.open(el);
    }
  }, {
    key: 'open',
    value: function open(el) {
      var targetId = el.getAttribute('data-target');
      el.classList.add('active');
      document.getElementById(targetId).classList.remove('none');
      this.current = el;
      if (this.pageNav) window.document.title = 'Textmarker - ' + browser.i18n.getMessage(targetId);
    }
  }, {
    key: 'close',
    value: function close(el) {
      el.classList.remove('active');
      document.getElementById(el.getAttribute('data-target')).classList.add('none');
    }
  }]);

  return _NAV;
}();

exports.default = _NAV;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

exports.default = new _utils._PORT({
  name: 'addon-page',
  type: 'content',
  events: {
    ONEOFF: ['change:style-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'change:namingopt-setting', 'change:sort-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:sync-type', 'change:webdav-credentials', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'set-webdav', 'get-webdav']
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(0);

var _history = __webpack_require__(122);

var _history2 = _interopRequireDefault(_history);

var _settings = __webpack_require__(124);

var _settings2 = _interopRequireDefault(_settings);

var _logs = __webpack_require__(126);

var _logs2 = _interopRequireDefault(_logs);

var _syncing = __webpack_require__(127);

var _syncing2 = _interopRequireDefault(_syncing);

var _exportImport = __webpack_require__(128);

var _exportImport2 = _interopRequireDefault(_exportImport);

var _webdav = __webpack_require__(129);

var _webdav2 = _interopRequireDefault(_webdav);

var _contact = __webpack_require__(130);

var _contact2 = _interopRequireDefault(_contact);

var _historyPagination = __webpack_require__(131);

var _historyPagination2 = _interopRequireDefault(_historyPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'start',
      'updated:settings': 'start',
      'updated:history': 'start'
    }
  },
  bootstrapped: false,
  autoinit: function autoinit() {
    var _this = this;

    _store2.default.get().then(function (storage) {
      if (storage.settings && storage.history) _this.start();
    });
  },
  start: function start() {
    if (!this.bootstrapped) {
      this.bootstrapped = true;
      (0, _history2.default)();
      (0, _settings2.default)();
      (0, _logs2.default)();
      (0, _syncing2.default)();
      (0, _exportImport2.default)();
      (0, _webdav2.default)();
      (0, _contact2.default)();
      (0, _historyPagination2.default)();
    }
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref;

  return new _utils._DOMMODULE((_ref = {
    el: document.getElementById('history'),
    events: {
      ENV: {
        'updated:history': 'render',
        'failed:sync-entry': 'undoSyncToggle',
        'paginate:history': 'paginate'
      },
      DOM: {
        click: {
          '.action-button': 'delegateButtonAction',
          '.switch': 'toggleSwitch',
          '.name': 'open',
          '#search-toggle': 'toggleSearch'
        },
        change: {
          '.checkmark-all': 'checkmarkAll',
          '#sort-entries': 'sort',
          '#entries-per-page': 'changeCountPerPage'
        },
        keyup: {
          '#search-entries': 'search'
        }
      }
    },

    names: [],
    entries: {},
    entryTmpl: document.getElementById('entry-template'),
    entriesContainer: document.getElementById('entries'),
    page: 1,
    perPage: 10,
    sorted: 'date-last',
    searchTerm: '',
    searched: [],

    autoinit: function autoinit() {
      this.render();
    }
  }, _defineProperty(_ref, 'delete', function _delete(names) {
    var confirmed = window.confirm(browser.i18n.getMessage('del_confirm'));
    if (confirmed) this.emit('delete:entries', names);
  }), _defineProperty(_ref, 'clean', function clean(names) {
    this.emit('clean:entries', names);
  }), _defineProperty(_ref, 'download', function download(names, type, spec) {
    var _this = this;

    if (typeof type !== 'string') {
      return _store2.default.get('download_option').then(function (settings) {
        settings = settings.split(' ');
        type = settings[0];
        spec = settings.length === 2 ? settings[1] : undefined;
        _this.download(names, type, spec);
      });
    }
    this.getData(names, type, spec).then(function (data) {
      var text = encodeURIComponent(data),
          link = document.createElement('a');

      link.setAttribute('download', 'Textmarker (' + names.join('_') + ').txt');
      link.href = 'data:text/plain;charset=utf-8,' + text;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }), _defineProperty(_ref, 'export', function _export(names) {
    var backup = { history: { entries: {}, order: [] } },
        entries = backup.history.entries,
        order = backup.history.order,
        link = document.createElement('a');

    _store2.default.get('history').then(function (history) {
      var name = void 0;
      while (names.length) {
        name = names.pop();
        entries[name] = history.entries[name];
        order.push(name);
      }
      backup = encodeURIComponent(JSON.stringify(backup));
      link.setAttribute('download', 'Textmarker-backup-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
      link.href = 'data:text/json;charset=utf-8,' + backup;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }), _defineProperty(_ref, 'sync', function sync(name, el) {
    this.emit('sync:entry', name[0], el.classList.contains('active'));
  }), _defineProperty(_ref, 'visit', function visit(names) {
    var _this2 = this;

    this.getURLs(names).then(function (urls) {
      return _this2.emit('open:entries', urls);
    });
  }), _defineProperty(_ref, 'open', function open(e, el) {
    this.emit('open:entries', el.getAttribute('data-url'));
  }), _defineProperty(_ref, 'processSelection', function processSelection() {
    var checked = document.querySelectorAll('.entry-cb:checked');
    if (!checked.length) return false;

    var action = document.getElementById('action').value,
        split = document.getElementById('specification').value.split(' '),
        type = split[0],
        spec = split[1],
        i = checked.length,
        names = [];

    while (i--) {
      names.push(checked[i].getAttribute('data-name'));
    }!this[action] || this[action](names, type, spec);
  }), _defineProperty(_ref, 'renderEntries', function renderEntries() {
    var _this3 = this;

    var template = this.entryTmpl,
        container = this.entriesContainer,
        entries = this.entries,
        searched = !!this.searchTerm,
        names = searched ? this.searched : this.names,
        l = searched ? names.length : this.page * this.perPage,
        i = searched ? 0 : l - this.perPage,
        clone = void 0,
        entry = void 0,
        name = void 0,
        nameField = void 0,
        input = void 0,
        label = void 0,
        infoButton = void 0,
        details = void 0,
        buttons = void 0,
        b = void 0,
        j = void 0;

    l = Math.min(l, names.length);

    container.innerText = '';

    document.getElementById('checkmark-all').checked = false;

    if (!l) return this;

    for (; i < l; i++) {
      (function (i, j) {
        name = names[i];
        entry = entries[name];
        clone = template.cloneNode(true);
        container.appendChild(clone);
        clone.id = 'entry-' + j;
        clone.setAttribute('data-name', name);
        nameField = clone.getElementsByClassName('name')[0];
        input = clone.getElementsByTagName('input')[0];
        label = clone.getElementsByTagName('label')[0];
        details = clone.getElementsByClassName('details')[0];
        buttons = clone.getElementsByClassName('quick-action');
        b = buttons.length;

        while (b--) {
          buttons[b].setAttribute('data-name', name);
        }
        nameField.innerText = name;
        nameField.setAttribute('data-url', entry.url);
        input.className = 'entry-cb';
        input.id = 'entry-cb-' + j;
        input.setAttribute('data-name', name);
        label.setAttribute('for', 'entry-cb-' + j);

        clone.getElementsByClassName('created')[0].innerText = _this3.optimizeDateString(new Date(entry.first).toLocaleString());
        clone.getElementsByClassName('last')[0].innerText = _this3.optimizeDateString(new Date(entry.last).toLocaleString());
        clone.getElementsByClassName('count')[0].innerText = entry.marks.length;
        //clone.getElementsByClassName('lost')[0].innerText = entry.lost ? entry.lost.length : 0;

        if (entry.synced === undefined || entry.synced) {
          clone.getElementsByClassName('sync-switch')[0].classList.add('active');
        }
      })(i, l - i - 1);
    }
    return this;
  }), _defineProperty(_ref, 'toggleHeaderFields', function toggleHeaderFields(l) {
    var _this4 = this;

    var noEntriesHint = document.getElementById('no-entries');
    var search = document.getElementById('search');
    var actions = document.getElementById('history-actions');
    var action = document.getElementById('action');
    var sort = document.getElementById('sort');
    var sortEntries = document.getElementById('sort-entries');
    var count = document.getElementById('count');
    var ppSelect = document.getElementById('entries-per-page');
    var meth_0 = !l ? 'remove' : 'add';
    var meth_1 = l > 0 ? 'remove' : 'add';
    var meth_2 = l > 2 ? 'remove' : 'add';
    var meth_3 = l > 10 ? 'remove' : 'add';

    noEntriesHint.classList[meth_0]('none');
    actions.classList[meth_1]('none');
    search.classList[meth_2]('none');
    sort.classList[meth_2]('none');
    count.classList[meth_3]('none');

    sortEntries.style.width = action.clientWidth + 'px';

    document.getElementById('entries-count').innerText = l;

    return _store2.default.get('settings').then(function (settings) {
      var pp = _this4.perPage = settings.history.pp || 10;
      ppSelect.value = pp;
    });
  }), _defineProperty(_ref, 'getText', function getText(names, spec) {
    var _this5 = this;

    var all_marks_plus_meta = spec === '+meta',
        all_marks_plus_lost = spec === '+lost',
        all_marks_plus_meta_and_notes = spec === '+notes',
        all_marks_lost = spec === 'lost',
        defaultMarkers = ['m', '2', '3', 2, 3],
        reject = defaultMarkers.includes(spec) ? function (key) {
      return key != spec;
    } : spec === 'c' ? function (key) {
      return defaultMarkers.includes(key);
    } : null,
        newLine = '\r\n',
        newLines = '\r\n\r\n',
        note = browser.i18n.getMessage('note'),
        text = '',
        l = names.length,
        i = 0,
        entry = void 0,
        marks = void 0,
        mark = void 0,
        lost = void 0,
        name = void 0,
        m = void 0,
        n = void 0,
        j = void 0;

    return _store2.default.get('history').then(function (history) {
      var entries = history.entries;

      for (; i < l; i++) {
        name = names[i];
        entry = entries[name];
        marks = entry.marks;
        lost = entry.lost;
        m = marks.length;
        n = lost.length;

        if (!all_marks_lost) {
          if (all_marks_plus_meta || all_marks_plus_meta_and_notes) {
            text += name + newLine + 'URL: ' + entry.url + newLine + browser.i18n.getMessage('page_title') + ': ' + entry.title + newLine + browser.i18n.getMessage('created') + ': ' + _this5.optimizeDateString(new Date(entry.first).toLocaleString()) + newLine + browser.i18n.getMessage('last_modified') + ': ' + _this5.optimizeDateString(new Date(entry.last).toLocaleString()) + newLine + newLines;
          }

          for (j = 0; j < m; j++) {
            mark = marks[j];

            if (reject && reject(mark.key)) continue;

            if (all_marks_plus_meta_and_notes) {
              text += '---' + newLine;
            }
            text += mark.text.replace(/\n/g, '\r\n') + newLines;

            if (all_marks_plus_meta_and_notes && mark.note) {
              text += '  ' + note + ':' + newLine + '  ' + mark.note.replace(/\n/g, '\r\n  ') + newLines;
            }
          }
        }
        if (all_marks_lost || all_marks_plus_lost) {
          text += newLines + browser.i18n.getMessage('lost_marks') + ':' + newLines + newLines;

          for (j = 0; j < n; j++) {
            mark = lost[j];

            text += mark.text.replace(/\n/g, '\r\n') + newLines;
          }
        }
        text += newLines + newLines + newLines;
      }

      return text.trim();
    });
  }), _defineProperty(_ref, 'getData', function getData(names, type, spec) {
    var _this6 = this;

    if (type === 'text') return this.getText(names, spec);

    return _store2.default.get('history').then(function (history) {
      var entries = _this6.entries = history.entries,
          l = names.length,
          data = '',
          newLines = '\r\n\r\n',
          i = 0;

      for (; i < l; i++) {
        data += entries[names[i]][type] + newLines;
      }return data;
    });
  }), _defineProperty(_ref, 'getURLs', function getURLs(names) {
    return _store2.default.get('history').then(function (history) {
      var entries = history.entries,
          urls = [],
          l = names.length,
          i = 0;

      for (; i < l; i++) {
        urls.push(entries[names[i]].url);
      }return urls;
    });
  }), _defineProperty(_ref, 'optimizeDateString', function optimizeDateString(date) {
    return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
      return '0' + p + q;
    }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
      return p + '0' + q;
    });
  }), _defineProperty(_ref, 'search', function search(e, el) {
    var term = el.value.toLowerCase();
    var countSelect = document.getElementById('count');
    var classMeth = term ? 'add' : 'remove';
    this.setupSearch(term).renderEntries();
    countSelect.classList[classMeth]('none');
  }), _defineProperty(_ref, 'setupSearch', function setupSearch(term) {
    term = typeof term === 'string' ? term : this.searchTerm;
    var history = document.getElementById('history');
    var searchCount = document.getElementById('search-count');
    this.searched = [];
    this.searchTerm = term;
    if (!term) {
      history.classList.remove('searched');
      searchCount.innerText = '';
      return this;
    } else {
      history.classList.add('searched');
    }
    var names = this.names;
    var l = names.length,
        i = 0,
        name = void 0;

    for (; i < l; i++) {
      name = names[i];
      if (name.toLowerCase().search(term) !== -1) {
        this.searched.push(name);
      }
    }
    searchCount.innerText = this.searched.length || '';
    return this;
  }), _defineProperty(_ref, 'toggleSearch', function toggleSearch(e, el) {
    var search = document.getElementById('search-entries');
    el.classList.toggle('active');
    search.value = '';
    if (this.searchTerm) this.search(null, { value: '' });
    search.classList.toggle('none');
  }), _defineProperty(_ref, 'changeCountPerPage', function changeCountPerPage(e, el) {
    var p = this.perPage = el.value * 1;
    this.page = 1;
    this.emit('changed:per-page-count', p);
    this.renderEntries();
  }), _defineProperty(_ref, 'sort', function sort(e, el) {
    var sorted = this.sorted = el.value;
    this.emit('change:sort-setting', sorted);
    this.setupSort(sorted).renderEntries();
  }), _defineProperty(_ref, 'setupSort', function setupSort(sorted) {
    sorted = sorted.split('-');
    this.names = _historySort2.default.by[sorted[0]][sorted[1]](this.entries);
    this.sortSearchResults();
    return this;
  }), _defineProperty(_ref, 'sortSearchResults', function sortSearchResults() {
    if (!this.searched.length) return;
    var names = this.names;
    this.searched.sort(function (a, b) {
      a = names.indexOf(a);
      b = names.indexOf(b);
      if (a == b) return 0;
      return a < b ? -1 : 1;
    });
  }), _defineProperty(_ref, 'checkmarkAll', function checkmarkAll(e, el) {
    var directly = typeof el === 'boolean',
        checked = directly ? el : el.checked,
        inputs = document.getElementById('entries').getElementsByTagName('input'),
        i = inputs.length;

    while (i--) {
      inputs[i].checked = checked;
    }return false;
  }), _defineProperty(_ref, 'delegateButtonAction', function delegateButtonAction(e, el) {
    var action = el.getAttribute('data-action'),
        name = el.getAttribute('data-name');

    name = name ? [name] : undefined;

    !this[action] || this[action](name, el);
  }), _defineProperty(_ref, 'toggleSwitch', function toggleSwitch(e, el) {
    el = el.classList.contains('sync-switch') ? el : el.parentNode;
    el.classList.toggle('active');
    this.delegateButtonAction(e, el);
  }), _defineProperty(_ref, 'undoSyncToggle', function undoSyncToggle(name) {
    document.querySelector('.sync-switch[data-name="' + name + '"]').classList.toggle('active');
  }), _defineProperty(_ref, 'render', function render() {
    var _this7 = this;

    _store2.default.get().then(function (storage) {
      var entries = _this7.entries = storage.history.entries,
          sorted = storage.settings.history.sorted || _this7.sorted,
          l = void 0;
      _this7.sorted = sorted;
      _this7.setupSort(sorted);
      l = _this7.names.length;

      _this7.setupSearch().toggleHeaderFields(l).then(function () {
        return _this7.renderEntries();
      });
    });
  }), _defineProperty(_ref, 'paginate', function paginate(page) {
    this.page = page;
    this.render();
  }), _defineProperty(_ref, 'updateEntry', function updateEntry(entry) {
    var el = document.querySelector('.entry[data-name="' + entry.name + '"]');

    el.getElementsByClassName('created')[0].innerText = entry.first;
    el.getElementsByClassName('last')[0].innerText = entry.last;
    el.getElementsByClassName('count')[0].innerText = entry.marks.length;
    //el.getElementsByClassName('lost')[0].innerText = entry.lost.length;
  }), _ref));
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(50);

var _toggler2 = _interopRequireDefault(_toggler);

var _historySort = __webpack_require__(123);

var _historySort2 = _interopRequireDefault(_historySort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  by: {
    date: {
      created: function created(object) {
        return this._sort(object, 'first');
      },
      last: function last(object) {
        return this._sort(object, 'last');
      },
      _sort: function _sort(object, field) {
        return Object.keys(object).sort(function (a, b) {
          a = new Date(object[a][field]), b = new Date(object[b][field]);
          if (a == b) return 0;
          return a < b ? 1 : -1;
        });
      }
    },
    name: {
      az: function az(object) {
        return this._sort(object);
      },
      za: function za(object) {
        return this._sort(object).reverse();
      },
      _sort: function _sort(object) {
        return Object.keys(object).sort(function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });
      }
    }
  }
};

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('settings'),
    events: {
      ENV: {
        'imported:settings': 'update',
        'updated:bg-color-settings': 'update',
        'updated:saveopt-settings': 'update',
        'updated:custom-search-settings': 'showCustomSearchSettingSuccess',
        'toggled:sync-settings': 'update'
      },
      DOM: {
        change: {
          '.css': 'changeStyle',
          '#customized-key': 'updateMarker',
          '#add-key': 'addMarker',
          '#remove-key': 'removeMarker',
          '.sc-cb': 'toggleShortcut',
          '.shortcut-select': 'changeShortcut',
          '.save-opt': 'changeSaveOpt',
          '.naming-opt': 'changeNamingOpt',
          '#notes-new': 'toggleSaveNoteOpt',
          '.customize-quickbuttons': 'changeQuickbuttonOpt',
          '.ctm-cb': 'toggleCtm',
          '.notes-cb': 'toggleNotes',
          '.misc-cb': 'toggleMisc',
          '.tmuipos': 'changeTmuiPositionOpt'
        },
        click: {
          '#custom-search': 'changeCustomSearch',
          '.custom-search-input': 'hideCustomSearchSettingSuccess'
        }
      }
    },
    allowedKeys: 'a b c d e f g h i j k l n o p q r s t u v x y z 0 1 4 5 6 7 8 9 enter - +'.split(' '),
    allowedShortcuts: ['', 'ctrlKey', 'shiftKey', 'altKey', 'ctrlKey-shiftKey', 'ctrlKey-altKey', 'shiftKey-altKey', 'metaKey', 'metaKey-shiftKey', 'metaKey-altKey'],
    allowedQuickbuttonOpts: ['title', 'url', 'text', 'text +meta', 'text +notes', 'text +lost', 'text m', 'text 2', 'text 3', 'text c', 'text lost'],
    markerKeys: ['m', '2', '3'],
    customMarkerKeys: [],
    marker: null,
    customSearch: browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/',

    autoinit: function autoinit() {
      this.init();
    },
    init: function init() {
      var _this = this;

      _store2.default.get('settings').then(function (settings) {
        var markers = settings.markers,
            markerKeys = _this.markerKeys,
            customMarkerKeys = _this.customMarkerKeys,
            i = void 0,
            key = void 0;

        for (key in markers) {
          i = key.toLowerCase();
          if (!markerKeys.includes(i) && !customMarkerKeys.includes(i)) _this.customMarkerKeys.push(i);
        }

        _this.renderMarkerSelectOptions().updateMarker('m').injectSettings(settings);
      });
    },
    resume: function resume() {
      Array.prototype.slice.call(document.getElementsByClassName('custom-key')).forEach(function (el) {
        return el.remove();
      });
      Array.prototype.slice.call(document.getElementsByClassName('custom-marker-option')).forEach(function (el) {
        return el.remove();
      });
      this.customMarkerKeys = [];
      return this;
    },
    update: function update() {
      this.resume().init();
    },
    updateMarker: function updateMarker(e, el, customBgColor) {
      var key = el ? el.value : e ? e : this.marker ? this.marker.key : 'm';

      this.marker = new _marker2.default(key, customBgColor);

      return this;
    },
    renderMarkerSelectOptions: function renderMarkerSelectOptions() {
      var keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          addKeySelect = document.getElementById('add-key'),
          removeKeySelect = document.getElementById('remove-key'),
          allowedKeys = this.allowedKeys,
          customMarkerKeys = this.customMarkerKeys,
          a = allowedKeys.length,
          c = customMarkerKeys.length,
          i = 0,
          fragment1 = document.createDocumentFragment(),
          fragment2 = document.createDocumentFragment(),
          fragment3 = document.createDocumentFragment(),
          fragment4 = document.createDocumentFragment(),
          option = void 0,
          icon = void 0,
          val = void 0,
          Val = void 0;

      for (; i < c; i++) {
        val = customMarkerKeys[i];
        Val = val.toUpperCase();
        Val = Val === 'ENTER' ? String.fromCharCode(0x21B5) : Val;
        option = document.createElement('option');
        fragment1.appendChild(option);
        option.value = val;
        option.innerText = val.toUpperCase();
        option.className = 'custom-marker-option custom-marker-option-' + val;

        fragment3.appendChild(option.cloneNode(true));

        icon = document.createElement('div');
        fragment2.appendChild(icon);
        icon.className = 'key custom-key';
        icon.id = 'custom-key-' + val;
        icon.innerText = Val;
      }

      keySelect.appendChild(fragment1);
      keyIcons.appendChild(fragment2);
      removeKeySelect.appendChild(fragment3);

      for (i = 0; i < a; i++) {
        val = allowedKeys[i].toLowerCase();

        if (customMarkerKeys.includes(val)) continue;

        Val = val.toUpperCase();
        option = document.createElement('option');
        fragment4.appendChild(option);
        option.value = val;
        option.innerText = Val;
        option.className = 'custom-marker-option custom-marker-option-' + val;
      }

      addKeySelect.appendChild(fragment4);

      return this;
    },
    injectSettings: function injectSettings(settings) {
      var shortcuts = settings.shortcuts,
          i = void 0,
          scCheckbox = void 0,
          scSelect = void 0,
          cmCheckbox = void 0,
          sc = void 0;

      for (i in shortcuts) {
        sc = shortcuts[i];
        scCheckbox = document.getElementById('sc-' + i);
        scSelect = document.getElementById('shortcut-select-' + i);
        cmCheckbox = document.getElementById('cm-' + i);

        if (scCheckbox) scCheckbox.checked = sc[1];
        if (scSelect) scSelect.value = sc[0];
        if (cmCheckbox) cmCheckbox.checked = sc[2];
      }

      var historySettings = settings.history,
          saveOpts = document.getElementsByName('save-opt');

      if (historySettings.autosave) saveOpts[0].checked = true;else saveOpts[1].checked = true;

      document.getElementById('name-' + historySettings.naming).checked = true;
      document.getElementById('notes-new').checked = historySettings.saveNote;
      document.getElementById('quickbutton-download-select').value = historySettings.download;

      var miscSettings = settings.misc;

      document.getElementById('misc-bm').checked = miscSettings.bmicon;
      document.getElementById('misc-noteicon').checked = miscSettings.noteicon;
      document.getElementById('misc-noteonclick').checked = miscSettings.noteonclick;
      document.getElementById('notes-restoration-failure').checked = miscSettings.failureNote;
      document.getElementById('notes-restoration-success').checked = miscSettings.successNote;
      document.getElementById('notes-pbm').checked = miscSettings.pbmNote;
      document.getElementById('notes-changed').checked = miscSettings.changedNote;
      document.getElementById('notes-error').checked = miscSettings.errorNote;
      document.getElementById('custom-search--start').value = miscSettings.customSearch ? miscSettings.customSearch[0] : this.customSearch;
      document.getElementById('custom-search--end').value = miscSettings.customSearch ? miscSettings.customSearch[1] : '';
      document.getElementById('tmuipos--noteicon').value = miscSettings.tmuipos;
      document.getElementById('tmuipos--bmicon').value = miscSettings.tmuipos;
    },
    showCustomSearchSettingSuccess: function showCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.remove('none');
    },
    hideCustomSearchSettingSuccess: function hideCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.add('none');
    },
    changeStyle: function changeStyle(e, el) {
      var marker = this.marker.update(el);

      this.emit('change:style-setting', marker.key, marker.style);
    },
    addMarker: function addMarker(e, el) {
      var key = el.value,
          keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          removeKeySelect = document.getElementById('remove-key'),
          option = el.children[el.selectedIndex],
          clone = option.cloneNode(true),
          icon = document.createElement('div'),
          bgColor = this.getRandomLightColor();

      if (!key || removeKeySelect.children.length >= 12 || this.allowedKeys.indexOf(key) === -1) return false;

      removeKeySelect.appendChild(option);
      removeKeySelect.selectedIndex = 0;
      keySelect.appendChild(clone);
      clone.selected = true;
      icon.className = 'key custom-key';
      icon.id = 'custom-key-' + key;
      keyIcons.appendChild(icon);
      icon.innerText = key === 'enter' ? String.fromCharCode(0x21B5) : key.toUpperCase();

      this.updateMarker(key, null, bgColor);

      this.emit('add:custom-marker', key, 'background-color:' + bgColor + ';');
    },
    removeMarker: function removeMarker(e, el) {
      var key = el.value,
          keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          addKeySelect = document.getElementById('add-key'),
          option = void 0;

      if (!key || this.allowedKeys.indexOf(key) === -1) return false;

      option = el.children[el.selectedIndex];
      addKeySelect.appendChild(option); //lieber an richtige stelle im alphabet setzen (alternativ an anfang)
      addKeySelect.selectedIndex = 0;
      el.selectedIndex = 0;

      keySelect.getElementsByClassName('custom-marker-option-' + key)[0].remove();
      document.getElementById('custom-key-' + key).remove();
      keySelect.selectedIndex = 0;

      this.updateMarker('m');

      this.emit('remove:custom-marker', key);
    },
    toggleShortcut: function toggleShortcut(e, el) {
      this.emit('toggle:shortcut-setting', el.name, el.checked);
    },
    changeShortcut: function changeShortcut(e, el) {
      if (!this.allowedShortcuts.includes(el.value)) return false;

      this.emit('change:shortcut-setting', el.name, el.value);
    },
    toggleCtm: function toggleCtm(e, el) {
      this.emit('toggle:ctm-setting', el.name, el.checked);
    },
    changeSaveOpt: function changeSaveOpt(e, el) {
      this.emit('change:saveopt-setting', !!el.getAttribute('data-id'));
    },
    changeNamingOpt: function changeNamingOpt(e, el) {
      this.emit('change:namingopt-setting', el.getAttribute('data-id'));
    },
    toggleSaveNoteOpt: function toggleSaveNoteOpt(e, el) {
      this.emit('toggle:noteopt-setting', el.checked);
    },
    changeQuickbuttonOpt: function changeQuickbuttonOpt(e, el) {
      if (!this.allowedQuickbuttonOpts.includes(el.value)) return false;

      this.emit('toggle:quickbuttonopt-setting', el.name, el.value);
    },
    toggleNotes: function toggleNotes(e, el) {
      this.emit('toggle:notification-setting', el.name, el.checked);
    },
    toggleMisc: function toggleMisc(e, el) {
      this.emit('toggle:misc-setting', el.name, el.checked);
    },
    changeTmuiPositionOpt: function changeTmuiPositionOpt(e, el) {
      this.emit('change:misc-setting', el.name, el.value);
      Array.from(this.el.getElementsByClassName('tmuipos')).forEach(function (select) {
        return select.value = el.value;
      });
    },
    changeCustomSearch: function changeCustomSearch(e, el) {
      this.hideCustomSearchSettingSuccess();
      var inp1 = document.getElementById('custom-search--start');
      var inp2 = document.getElementById('custom-search--end');
      var part1 = inp1.value;
      var part2 = inp2.value;
      if (!part1 && !part2) {
        inp1.value = this.customSearch;
        inp2.value = '';
        this.emit('change:custom-search-setting', false);
      } else {
        this.emit('change:custom-search-setting', [part1, part2]);
      }
    },
    getRandomLightColor: function getRandomLightColor() {
      return '#' + Math.floor((0.8 + Math.random() * 0.175) * 16777215).toString(16);
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

var _marker = __webpack_require__(125);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _MARKER = function () {
  function _MARKER(key, customBgColor) {
    var _this = this;

    _classCallCheck(this, _MARKER);

    this.key = key;

    this.styles = {
      'background-color': customBgColor,
      'color': undefined,
      'font-size': undefined,
      'font-family': undefined,
      'font-weight': undefined,
      'font-style': undefined,
      'text-decoration': undefined,
      'text-shadow': undefined
    };

    this.shadow = {
      x: '1px',
      y: '1px',
      blur: '1px',
      color: '#000000'
    };

    this.init().then(function () {
      return _this.inject().preview();
    });
  }

  _createClass(_MARKER, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      return _store2.default.get('markers').then(function (markers) {
        var existingStyle = markers[_this2.key];

        if (!existingStyle) _this2.setStyle();else _this2.style = existingStyle;

        var styles = _this2.style.split(';'),
            i = styles.length,
            style = void 0,
            styleSplit = void 0,
            textShadow = void 0;

        while (i--) {
          style = styles[i];
          if (style) {
            styleSplit = style.split(':');
            _this2.styles[styleSplit[0]] = styleSplit[1];
          }
        }

        if ((textShadow = _this2.styles['text-shadow']) && textShadow !== 'none') {
          var shadowSplit = textShadow.split(' ');
          _this2.shadow.x = shadowSplit[0];
          _this2.shadow.y = shadowSplit[1];
          _this2.shadow.blur = shadowSplit[2];
          _this2.shadow.color = shadowSplit[3];
        }
      });
    }
  }, {
    key: 'inject',
    value: function inject() {
      var marker = this,
          styles = this.styles,
          bg = styles['background-color'],
          bgInput = document.getElementById('bg-color'),
          colorInput = document.getElementById('text-color'),
          color = styles['color'],
          shadow = void 0,
          shadowSelect = void 0,
          i = void 0;

      document.getElementById('bg-color-checkbox').checked = !!bg;
      bgInput.value = bg || '#ffffff';
      bgInput.disabled = !bg;
      document.getElementById('text-color-checkbox').checked = !!color;
      colorInput.value = color || '#000000';
      colorInput.disabled = !color;

      ['font-size', 'font-family', 'font-weight', 'font-style', 'text-decoration'].forEach(function (prop) {
        document.getElementById(prop).value = styles[prop] || 'default';
      });

      shadowSelect = document.getElementById('text-shadow');
      shadow = styles['text-shadow'];
      i = !shadow ? 0 : shadow === 'none' ? 2 : 1;

      shadowSelect.selectedIndex = i;
      shadowSelect.children[i].click();

      ['x', 'y', 'blur', 'color'].forEach(function (prop) {
        document.getElementById('text-shadow-' + prop).value = marker.shadow[prop].replace('px', '');
      });

      return this;
    }
  }, {
    key: 'preview',
    value: function preview() {
      document.getElementById('example').style = this.style;

      return this;
    }
  }, {
    key: 'update',
    value: function update(el) {
      var classes = el.classList,
          prop = el.name,
          val = void 0;

      if (classes.contains('css-color')) {
        if (el.checked) {
          val = document.getElementById(el.getAttribute('data-target')).value;

          if (!this.isValid(prop, val)) return false;

          this.styles[prop] = val;
        } else this.styles[prop] = undefined;
      } else if (classes.contains('shadow')) {
        val = el.value;

        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else {
          var marker = this;

          switch (val) {
            case 'none':
              marker.styles['text-shadow'] = 'none';break;
            case 'default':
              marker.styles['text-shadow'] = undefined;break;
            case 'shadow':
              marker.setShadow();break;
            default:
              return false;
          }
        }
      } else if (classes.contains('shadow-value')) {
        val = el.value;

        if (!this.isValid(prop, val)) this.styles[prop] = '';else {
          if (classes.contains('shadow-px-value')) val += 'px';

          this.shadow[prop] = val;
          this.setShadow();
        }
      } else {
        val = el.value;

        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else this.styles[prop] = val;
      }

      return this.setStyle().preview();
    }
  }, {
    key: 'isValid',
    value: function isValid(prop, val) {
      var valid = void 0;

      switch (prop) {
        case 'background-color':
          valid = /^#[0-9A-F]{6}$/i.test(val);break;
        case 'color':
          valid = /^#[0-9A-F]{6}$/i.test(val);break;
        case 'font-size':
          valid = /^[0-9]{1,2}px$/.test(val);break;
        case 'font-family':
          valid = /^[a-z,\s-]{5,40}$/i.test(val);break;
        case 'font-weight':
          valid = /^[a-z]{4,7}$/i.test(val);break;
        case 'font-style':
          valid = /^[a-z]{4,7}$/i.test(val);break;
        case 'text-decoration':
          valid = /^[a-z-]{7,12}$/i.test(val);break;
        case 'text-shadow':
          valid = /^[a-z]{4,7}$/i.test(val);break;
        case 'x':
          valid = /^\d$/;break;
        case 'y':
          valid = /^\d$/;break;
        case 'blur':
          valid = /^\d$/;break;
        default:
          valid = false;
      }

      return valid;
    }
  }, {
    key: 'setShadow',
    value: function setShadow() {
      this.styles['text-shadow'] = this.shadow.x + ' ' + this.shadow.y + ' ' + this.shadow.blur + ' ' + this.shadow.color;
    }
  }, {
    key: 'setStyle',
    value: function setStyle() {
      var style = '',
          val = void 0;

      for (var i in this.styles) {
        val = this.styles[i];
        if (val) style += i + ':' + val + ';';
      }
      this.style = style;
      return this;
    }
  }]);

  return _MARKER;
}();

exports.default = _MARKER;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('logs'),
    events: {
      ENV: {
        'updated:logs': 'log'
      },
      DOM: {
        click: {
          '#clear-logs': 'clear'
        }
      }
    },
    autoinit: function autoinit() {
      this.log();
    },
    log: function log() {
      var _this = this;

      _store2.default.get('logs').then(function (logs) {
        logs = logs || [];
        var logsTable = document.getElementById('logs-table'),
            tableBody = logsTable.getElementsByTagName('tbody')[0],
            noLogs = document.getElementById('no-logs'),
            clearBtn = document.getElementById('clear-logs'),
            l = logs.length,
            frag = document.createDocumentFragment(),
            tr = void 0,
            td_date = void 0,
            td_msg = void 0,
            node_date = void 0,
            node_msg = void 0,
            log = void 0,
            time = void 0,
            msg = void 0;

        if (l) {
          noLogs.classList.add('none');
          logsTable.classList.remove('none');
          clearBtn.classList.remove('none');
          while (l--) {
            log = logs[l];
            msg = log[1];
            if (typeof msg === 'number') msg = browser.i18n.getMessage(_logKeys2.default.getKeyByValue(log[1]));
            //'nu',{year:'numeric',month:'2-digit',day:'2-digit',hour:'numeric',second:'numeric',minute:'numeric'}
            time = _this.optimizeDateString(new Date(log[0]).toLocaleString());
            tr = document.createElement('tr');
            td_date = document.createElement('td');
            td_msg = document.createElement('td');
            node_date = document.createTextNode(time);
            node_msg = document.createTextNode(msg);

            td_date.appendChild(node_date);
            td_msg.appendChild(node_msg);
            tr.appendChild(td_date);
            tr.appendChild(td_msg);
            frag.appendChild(tr);
          }
          tableBody.innerText = '';
          tableBody.appendChild(frag);
        } else {
          noLogs.classList.remove('none');
          logsTable.classList.add('none');
          clearBtn.classList.add('none');
        }
      });
    },
    clear: function clear() {
      this.emit('clear:logs');
    },
    optimizeDateString: function optimizeDateString(date) {
      return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
        return '0' + p + q;
      }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
        return p + '0' + q;
      });
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

var _logKeys = __webpack_require__(42);

var _logKeys2 = _interopRequireDefault(_logKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('sync'),
    events: {
      ENV: {
        'failed:toggle-sync': 'undo'
      },
      DOM: {
        click: {
          '.switch': 'toggleSwitch'
        }
      }
    },

    autoinit: function autoinit() {
      document.getElementById('sync-switch-settings').classList.toggle('active', _store2.default.area_settings === 'sync');
      document.getElementById('sync-switch-history').classList.toggle('active', _store2.default.area_history === 'sync');
    },
    toggleSwitch: function toggleSwitch(e, el) {
      el = el.classList.contains('sync-switch') ? el : el.parentNode;
      el.classList.toggle('active');
      this.emit('toggle:sync', el.getAttribute('data-type'), el.classList.contains('active'));
    },
    undo: function undo(field) {
      document.getElementById('sync-switch-' + field).classList.toggle('active');
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('export'),
    events: {
      ENV: {
        'updated:settings': 'updateExportLinks',
        'updated:history': 'updateExportLinks',
        'toggled:sync': 'updateExportLinks',
        'synced:entry': 'updateExportLinks'
      },
      DOM: {
        click: {
          '.import-button': 'triggerFileInput'
        },
        change: {
          '.import-file': 'handleFile'
        },
        mousedown: {
          '.export-button': 'updateExportName'
        }
      }
    },

    autoinit: function autoinit() {
      this.updateExportLinks();
    },


    import: function _import(storeString, type) {
      var parsedString;

      try {
        parsedString = JSON.parse(storeString);
      } catch (e) {
        return this.displayFailure(browser.i18n.getMessage('error_file_parse'));
      }

      if (parsedString) {
        this.emit('import:storage', parsedString, type);
        this.displayFailure('');
      }
    },

    triggerFileInput: function triggerFileInput(e, el) {
      document.getElementById('import--' + el.getAttribute('data-type')).click();
    },
    handleFile: function handleFile(e, el) {
      var reader = new FileReader(),
          file = el.files[0],
          size = file.size / 1000000,
          type = el.getAttribute('data-type'),
          mod = this;

      if (size > 50) return this.displayFailure(browser.i18n.getMessage('error_file_size'));

      if (type === 'sync' && size > 0.099) return this.displayFailure(browser.i18n.getMessage('error_file_size_sync'));

      if (file.name.split('.').pop() !== 'json') return this.displayFailure(browser.i18n.getMessage('error_file_format'));

      reader.onload = function (file) {
        return function (e) {
          mod.import(e.target.result, type);
        };
      }(file);

      reader.readAsText(file);
    },
    displayFailure: function displayFailure(reason) {
      document.getElementById('import-error').innerText = reason;
    },
    updateExportLinks: function updateExportLinks() {
      var localDataLink = document.getElementById('export-local');
      var syncedDataLink = document.getElementById('export-synced');

      _store2.default.get('local_storage').then(function (storage) {
        localDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
      }).then(function () {
        return _store2.default.get('synced_storage').then(function (storage) {
          syncedDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
        });
      });
    },
    updateExportName: function updateExportName(e, el) {
      el.parentNode.setAttribute('download', 'Textmarker-data-' + el.getAttribute('data-type') + '-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('webdav'),
    events: {
      ENV: {},
      DOM: {
        click: {
          '.submit': 'submit',
          '#test-webdav-set': '_set',
          '#test-webdav-get': '_get'
        },
        change: {
          '.sync-opt': 'changeSyncType'
        },
        keyup: {
          '.inp-db': 'setDB',
          '.inp-name': 'setName',
          '.inp-pw': 'setPW'
        }
      }
    },
    type: 'default',
    database: '',
    username: '',
    password: '',
    _set: function _set() {
      this.emit('set-webdav');
    },
    _get: function _get() {
      this.emit('get-webdav');
    },
    autoinit: function autoinit() {},
    setDB: function setDB(e, el) {
      this.database = el.value;
    },
    setName: function setName(e, el) {
      this.username = el.value;
    },
    setPW: function setPW(e, el) {
      this.password = el.value;
    },
    changeSyncType: function changeSyncType(e, el) {
      var type = this.type = el.getAttribute('data-type');
      this.emit('change:sync-type', type);
    },
    submit: function submit() {
      this.emit('change:webdav-credentials', this.database, this.username, this.password);
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'updated:logs': 'setLogLink'
      }
    },
    autoinit: function autoinit() {
      this.setAddonLinks().setDeveloperLinks().setLogLink();
    },
    setAddonLinks: function setAddonLinks() {
      var addonURL = browser.i18n.getMessage('url_moz_addon'),
          addonLinks = document.getElementsByClassName('moz-addon'),
          a = addonLinks.length,
          aL = void 0;

      while (a--) {
        aL = addonLinks[a];
        aL.href = addonURL;
        if (aL.id === 'moz-addon--contact') aL.innerText = addonURL;
      }

      return this;
    },
    setDeveloperLinks: function setDeveloperLinks() {
      var developerURL = browser.i18n.getMessage('url_moz_developer'),
          developerLinks = document.getElementsByClassName('moz-developer'),
          d = developerLinks.length,
          dL = void 0;

      while (d--) {
        dL = developerLinks[d];
        dL.href = developerURL;
        if (dL.id === 'moz-developer--contact') dL.innerText = developerURL;
      }

      return this;
    },
    setLogLink: function setLogLink() {
      var logLink = document.getElementById('log-mail');

      _store2.default.get('logs').then(function (logs) {
        var l = logs ? logs.length : 0,
            href = 'mailto:undflybir@gmx.de?subject=Textmarker' + encodeURIComponent(' : Error Logs') + '&body=' + encodeURIComponent('- ' + browser.i18n.getMessage('your_msg') + ' -\n\n\nLOGS:\n\n'),
            log = void 0;

        while (l--) {
          log = logs[l];
          href += encodeURIComponent(new Date(log[0]).toUTCString() + ' --- ' + log[1] + '\n');
        }
        logLink.href = href;
      });
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('paginator'),
    events: {
      ENV: {
        'saved:entry': 'add',
        'deleted:entries': 'updateFromStorage',
        'sorted:history': 'reset',
        'searched:history': 'reset',
        'imported:history': 'updateFromStorage',
        'changed:per-page-count': 'changeCountPerPage'
      },
      DOM: {
        click: {
          '.page': 'goto',
          '.prev': 'prev',
          '.next': 'next'
        }
      }
    },
    numberPages: 1,
    numberEntries: 0,
    currentPage: 1,
    perPage: 10,

    autoinit: function autoinit() {
      this.updateFromStorage();
    },
    goto: function goto(e, el) {
      var newPage = el.getAttribute('data-page') * 1;
      if (this.currentPage !== newPage) {
        this.emit('paginate:history', newPage);
        this.currentPage = newPage;
        this.render();
      }
    },
    prev: function prev() {
      if (this.currentPage === 1) return;
      this.emit('paginate:history', --this.currentPage);
      this.render();
    },
    next: function next() {
      if (this.currentPage === this.numberPages) return;
      this.emit('paginate:history', ++this.currentPage);
      this.render();
    },
    add: function add() {
      this.update(++this.numberEntries);
    },
    remove: function remove() {
      this.update(--this.numberEntries);
    },
    updateFromStorage: function updateFromStorage() {
      var _this = this;

      _store2.default.get('settings').then(function (settings) {
        return _this.perPage = settings.history.pp || 10;
      }).then(function () {
        return _store2.default.get('history').then(function (history) {
          return _this.update(history.order.length);
        });
      });
    },
    update: function update(l, silent) {
      this.numberEntries = l;
      this.numberPages = l ? Math.ceil(l / this.perPage) : 1;
      if (this.currentPage > this.numberPages) {
        this.currentPage = this.numberPages;
        if (!silent) this.emit('paginate:history', this.currentPage);
      }
      this.render();
    },
    reset: function reset() {
      this.currentPage = 1;
      this.render();
    },
    render: function render() {
      var ul = document.getElementById('paginator-list');
      var l = this.numberEntries;
      Array.from(ul.getElementsByClassName('page')).forEach(function (li) {
        return li.remove();
      });

      if (l < this.perPage + 1) {
        this.el.classList.add('none');
        return;
      } else {
        this.el.classList.remove('none');
      }
      var p = this.currentPage;

      var pages = this.numberPages;
      var r = 7 - (pages - 1 - p);
      var frag = document.createDocumentFragment();
      var next = ul.getElementsByClassName('next')[0];
      var i = Math.max(2, p - 7);
      if (r > 0) i = Math.max(2, Math.min(i, i - r));
      var j = Math.min(pages, i + 14) + 1;

      this.appendButton(frag, 1);
      for (; i < j; i++) {
        this.appendButton(frag, i);
      }if (pages > j - 1) this.appendButton(frag, pages);

      ul.insertBefore(frag, next);
    },
    appendButton: function appendButton(frag, b) {
      var btn = document.createElement('li');
      btn.setAttribute('data-page', b);
      btn.appendChild(document.createTextNode(b));
      btn.classList.add('page');
      if (b === this.currentPage) btn.classList.add('active');
      frag.appendChild(btn);
    },
    changeCountPerPage: function changeCountPerPage(p) {
      this.perPage = p;
      this.update(this.numberEntries, true);
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(50);

var _toggler2 = _interopRequireDefault(_toggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 15:
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._DOMMODULE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(1);

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

/***/ 17:
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  note_pbm: 1,
  note_restoration_failure: 2,
  note_url: 3,
  error_save_style: 4,
  error_save__toggle_sc: 5,
  error_save_change_sc: 6,
  error_save_ctm: 7,
  error_save_autosave: 8,
  error_save_naming: 9,
  error_save_notify: 10,
  error_save_download: 11,
  error_save_bmicon: 12,
  error_clean_history: 13,
  error_add_marker: 14,
  error_remove_marker: 15,
  error_save_entry: 16,
  error_update_entry: 17,
  error_del_entry: 18,
  error_empty_synced_storage_onstart: 19,
  error_empty_synced_storage_onupdate: 20,
  error_empty_local_storage_onstart: 21,
  error_import_empty: 22,
  error_import_history: 23,
  error_import_settings: 24,
  error_import_outdated: 25,
  error_import_history_not_found: 26,
  error_import_settings_not_found: 27,
  error_naming: 28,
  error_storage_migration: 29,
  error_empty_local_storage_onupdate: 30,
  error_toggle_sync: 31,

  getKeyByValue: function getKeyByValue(val) {
    for (var key in this) {
      if (this[key] == val) {
        return key;
        break;
      }
    }
    return '';
  }
};

/***/ }),

/***/ 5:
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _TOGGLER = function () {
  function _TOGGLER(el) {
    _classCallCheck(this, _TOGGLER);

    this.el = el;
    this.init();
  }

  _createClass(_TOGGLER, [{
    key: 'init',
    value: function init() {
      this.el.addEventListener('click', this.toggle, false);
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      e.stopPropagation();

      var target = document.getElementById(this.getAttribute('data-target')),
          role = this.getAttribute('data-toggle');

      if (role) target.classList[role]('open');else target.disabled = !this.checked;
    }
  }]);

  return _TOGGLER;
}();

exports.default = _TOGGLER;

/***/ }),

/***/ 6:
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

/***/ 7:
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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._PORT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(1);

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

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(1);

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

/***/ })

/******/ });