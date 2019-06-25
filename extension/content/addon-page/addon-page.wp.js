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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/addon-page/index.js");
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

/***/ "./content/addon-page/_store.js":
/*!**************************************!*\
  !*** ./content/addon-page/_store.js ***!
  \**************************************/
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
      'toggled:sync': 'onToggledSync'
    }
  },
  env: 'addon-page',
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

/***/ "./content/addon-page/bootstrap.js":
/*!*****************************************!*\
  !*** ./content/addon-page/bootstrap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(/*! ./_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _history = __webpack_require__(/*! ./modules/history */ "./content/addon-page/modules/history.js");

var _history2 = _interopRequireDefault(_history);

var _settings = __webpack_require__(/*! ./modules/settings */ "./content/addon-page/modules/settings.js");

var _settings2 = _interopRequireDefault(_settings);

var _logs = __webpack_require__(/*! ./modules/logs */ "./content/addon-page/modules/logs.js");

var _logs2 = _interopRequireDefault(_logs);

var _syncing = __webpack_require__(/*! ./modules/syncing */ "./content/addon-page/modules/syncing.js");

var _syncing2 = _interopRequireDefault(_syncing);

var _import = __webpack_require__(/*! ./modules/import */ "./content/addon-page/modules/import.js");

var _import2 = _interopRequireDefault(_import);

var _contact = __webpack_require__(/*! ./modules/contact */ "./content/addon-page/modules/contact.js");

var _contact2 = _interopRequireDefault(_contact);

var _troubleshooting = __webpack_require__(/*! ./modules/troubleshooting */ "./content/addon-page/modules/troubleshooting.js");

var _troubleshooting2 = _interopRequireDefault(_troubleshooting);

var _historyPagination = __webpack_require__(/*! ./modules/history-pagination */ "./content/addon-page/modules/history-pagination.js");

var _historyPagination2 = _interopRequireDefault(_historyPagination);

var _nav = __webpack_require__(/*! ./modules/nav */ "./content/addon-page/modules/nav.js");

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'start',
      'updated:settings': 'start',
      'updated:history': 'start'
    }
  },
  allowedHashes: ['news', 'manual', 'settings', 'history', 'contact', 'sync', 'export', 'troubleshooting', 'logs'],
  bootstrapped: false,
  autoinit: function autoinit() {
    var _this = this;

    _store2["default"].get().then(function (storage) {
      if (storage.settings && storage.history) _this.start();
    });
  },
  start: function start() {
    if (!this.bootstrapped) {
      this.bootstrapped = true;
      (0, _history2["default"])();
      (0, _settings2["default"])();
      (0, _logs2["default"])();
      (0, _syncing2["default"])();
      (0, _import2["default"])();
      (0, _contact2["default"])();
      (0, _troubleshooting2["default"])();
      (0, _historyPagination2["default"])();
      this.initMainNav();
    }
  },
  initMainNav: function initMainNav() {
    var tab = window.location.hash.split('=')[1];

    if (this.allowedHashes.includes(tab)) {
      window.document.getElementById('mainnav-' + tab).classList.add('active');
    }

    new _nav2["default"](window.document.getElementById('mainnav'));
  }
});

/***/ }),

/***/ "./content/addon-page/index.js":
/*!*************************************!*\
  !*** ./content/addon-page/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/addon-page/sass/index.scss");

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _nav = __webpack_require__(/*! ./modules/nav */ "./content/addon-page/modules/nav.js");

var _nav2 = _interopRequireDefault(_nav);

var _toggler = __webpack_require__(/*! ./modules/toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

__webpack_require__(/*! ./port */ "./content/addon-page/port.js");

__webpack_require__(/*! ./_store */ "./content/addon-page/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/addon-page/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _utils._L10N)();
/* auto-insert current version number */

document.getElementById('version-number').innerText = browser.runtime.getManifest().version;
/* end: auto-insert current version number */

/* configure subnavs */

var subnavs = document.getElementsByClassName('subnav');
var n = subnavs.length;

while (n--) {
  new _nav2["default"](subnavs[n]);
}
/* end: configure navs */

/* configure toggle elements */


var toggleButtons = document.getElementsByClassName('toggle-button'),
    t = toggleButtons.length;

while (t--) {
  new _toggler2["default"](toggleButtons[t]);
}
/* end: configure toggle elements */

/***/ }),

/***/ "./content/addon-page/modules/contact.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/contact.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'updated:logs': 'setLogLink'
      }
    },
    autoinit: function autoinit() {
      this.setLogLink();
    },
    setLogLink: function setLogLink() {
      var logLink = document.getElementById('log-mail');

      _store2["default"].get('logs').then(function (logs) {
        var l = logs ? logs.length : 0,
            href = 'mailto:undflybir@gmx.de?subject=Textmarker' + encodeURIComponent(' : Error Logs') + '&body=' + encodeURIComponent('- ' + browser.i18n.getMessage('your_msg') + ' -\n\n\nLOGS:\n\n'),
            log;

        while (l--) {
          log = logs[l];
          href += log[1] + (log[2] ? ' (' + log[2] + ')' : '') + ' - ' + encodeURIComponent(new Date(log[0]).toUTCString() + '\n');
        }

        logLink.href = href;
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/history-pagination.js":
/*!**********************************************************!*\
  !*** ./content/addon-page/modules/history-pagination.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('paginator'),
    events: {
      ENV: {
        'saved:entry': 'add',
        'deleted:entries': 'updateFromStorage',
        'filtered:history': 'reset',
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
    "goto": function goto(e, el) {
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

      _store2["default"].get('settings').then(function (settings) {
        return _this.perPage = settings.history.pp || 10;
      }).then(function () {
        return _store2["default"].get('history').then(function (history) {
          return _this.update(Object.keys(history.entries).length);
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
    reset: function reset(l) {
      this.currentPage = 1;
      this.update(l);
    },
    render: function render() {
      var ul = document.getElementById('paginator-list');
      var l = this.numberEntries;
      Array.from(ul.getElementsByClassName('page')).forEach(function (li) {
        return li.remove();
      });

      if (l < this.perPage + 1) {
        this.el.classList.add('u-display--none');
        return;
      } else {
        this.el.classList.remove('u-display--none');
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
      }

      if (pages > j - 1) this.appendButton(frag, pages);
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

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(/*! ./toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/history-sort.js":
/*!****************************************************!*\
  !*** ./content/addon-page/modules/history-sort.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
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
          return new Date(object[b][field]) - new Date(object[a][field]);
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

/***/ "./content/addon-page/modules/history.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/history.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var _ref;

  return new _utils._DOMMODULE((_ref = {
    el: document.getElementById('history'),
    events: {
      ENV: {
        'opened:tab': 'init',
        'updated:history': 'render',
        'failed:sync-entry': 'undoSyncToggle',
        'paginate:history': 'paginate'
      },
      DOM: {
        click: {
          '.action-button': 'delegateButtonAction',
          '.switch': 'toggleSwitch',
          '.name': 'open',
          '.edit': 'edit',
          '.view': 'view',
          '#search-toggle': 'toggleSearch',
          '#remove-filter': 'removeFilter',
          '.tags__item': 'filter'
        },
        change: {
          '.checkmark-all': 'checkmarkAll',
          '#sort-entries': 'sort',
          '#filter-entries': 'filter',
          '#entries-per-page': 'changeCountPerPage',
          '#set-view': 'setView',
          '#action': 'onChangeAction'
        },
        keyup: {
          '.search-entries': 'search'
        }
      }
    },
    initialized: false,
    names: [],
    entries: {},
    entryTmpl: document.getElementById('entry-template'),
    entriesContainer: document.getElementById('entries'),
    page: 1,
    perPage: 10,
    sorted: 'date-last',
    viewMode: 'list',
    searchTerm: '',
    searched: [],
    tags: [],
    filtered: false,
    filterOptionsSet: false,
    init: function init(tab) {
      if (tab !== 'history') return;
      if (!this.initialized) this.render();
      this.initialized = true;
    },
    resume: function resume() {
      this.filterOptionsSet = false;
      this.tags = [];
    }
  }, _defineProperty(_ref, 'delete', function _delete(names) {
    var msg = 'del_confirm';
    var l = names.length;

    while (l--) {
      if (this.entries[names[l]].locked) {
        msg += '_locked';
        break;
      }
    }

    var confirmed = window.confirm(browser.i18n.getMessage(msg));
    if (confirmed) this.emit('delete:entries', names);
  }), _defineProperty(_ref, "clean", function clean(names) {
    this.emit('clean:entries', names);
  }), _defineProperty(_ref, "download", function download(names, type, spec) {
    var _this = this;

    if (typeof type !== 'string') {
      return _store2["default"].get('download_option').then(function (settings) {
        settings = settings.split(' ');
        type = settings[0];
        spec = settings.length === 2 ? settings[1] : undefined;
        if (type === 'json') _this["export"](names);else _this.download(names, type, spec);
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
  }), _defineProperty(_ref, "export", function _export(names) {
    var backup = {
      history: {
        entries: {}
      }
    },
        entries = backup.history.entries,
        link = document.createElement('a');

    _store2["default"].get('history').then(function (history) {
      var name;

      while (names.length) {
        name = names.pop();
        entries[name] = history.entries[name];
      }

      backup = encodeURIComponent(JSON.stringify(backup));
      link.setAttribute('download', 'Textmarker-backup-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
      link.href = 'data:text/json;charset=utf-8,' + backup;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }), _defineProperty(_ref, "sync", function sync(name, el) {
    this.emit('sync:entry', name[0], el.classList.contains('active'));
  }), _defineProperty(_ref, "visit", function visit(names) {
    var _this2 = this;

    this.getURLs(names).then(function (urls) {
      return _this2.emit('open:entries', urls, names);
    });
  }), _defineProperty(_ref, "open", function open(e, el) {
    this.emit('open:entries', el.getAttribute('data-url'), el.getAttribute('data-name'));
  }), _defineProperty(_ref, "edit", function edit(e, el) {
    var newName = window.prompt(browser.i18n.getMessage('nm_message_edit'));

    if (newName) {
      var oldName = el.getAttribute('data-name');
      var area = el.parentNode.getElementsByClassName('switch--sync')[0].classList.contains('active') ? 'sync' : 'local';
      this.emit('rename:entry', oldName, newName, area);
    }
  }), _defineProperty(_ref, "view", function view(e, el) {
    this.emit('view:entry', el.getAttribute('data-name'));
  }), _defineProperty(_ref, "tag", function tag(names, _tag, force) {
    var _this3 = this;

    if (!_tag && !force) return;
    var o = {
      sync: [],
      local: []
    };
    names.forEach(function (name) {
      if (_this3.origEntries[name].synced) o.sync.push(name);else o.local.push(name);
    });
    this.emit('tag:entries', o, _tag);
  }), _defineProperty(_ref, "removeTags", function removeTags(names) {
    this.tag(names, '', true);
  }), _defineProperty(_ref, "processSelection", function processSelection() {
    var checked = document.querySelectorAll('.entry-cb:checked'),
        i = checked.length;
    if (!i) return false;
    var action = document.getElementById('action').value,
        names = [];

    while (i--) {
      names.push(checked[i].getAttribute('data-name'));
    }

    if (action === 'tag') {
      var val = document.getElementById('tag').value;
      this.tag(names, val);
    } else {
      var split = document.getElementById('specification').value.split(' '),
          type = split[0],
          spec = split[1];
      !this[action] || this[action](names, type, spec);
    }
  }), _defineProperty(_ref, "renderEntries", function renderEntries() {
    var _this4 = this;

    var template = this.entryTmpl,
        container = this.entriesContainer,
        entries = this.entries,
        searchTerm = this.searchTerm,
        searchTermLength = searchTerm ? searchTerm.length : 0,
        searched = !!searchTerm,
        searchedFullText = this.searchedFullText,
        names = searched ? this.searched : this.names,
        l = searched ? names.length : this.page * this.perPage,
        i = searched ? 0 : l - this.perPage,
        clone,
        entry,
        name,
        nameField,
        input,
        label,
        infoButton,
        details,
        searchResults,
        buttons,
        edit,
        view,
        tags,
        immut,
        immutEl,
        locked,
        lockedEl,
        tagEl,
        b,
        j;

    if (this.filtered) {
      names = names.filter(function (n) {
        return !!entries[n];
      });
    }

    l = Math.min(l, names.length);
    container.innerText = '';
    document.getElementById('checkmark-all').checked = false;
    if (!l) return this;

    for (; i < l; i++) {
      (function (i, j) {
        name = names ? names[i] : null;
        entry = entries ? entries[name] : null;

        if (entry) {
          try {
            if (entry.name !== name) {
              entry.name = name;

              _this4.emit('correct-name:entry', name, entry.synced ? 'sync' : 'local');
            }

            tags = entry.tag ? entry.tag.split(' ') : null;
            locked = entry.locked;
            immut = entry.immut;
            clone = template.cloneNode(true);
            container.appendChild(clone);
            clone.id = 'entry-' + j;
            clone.classList.remove('u-display--none');
            clone.setAttribute('data-name', name);
            nameField = clone.getElementsByClassName('name')[0];
            input = clone.getElementsByTagName('input')[0];
            label = clone.getElementsByTagName('label')[0];
            details = clone.getElementsByClassName('details')[0];
            searchResults = clone.getElementsByClassName('search-results')[0];
            buttons = clone.getElementsByClassName('quick-action');
            edit = clone.getElementsByClassName('edit')[0];
            view = clone.getElementsByClassName('view')[0];
            tagEl = clone.getElementsByClassName('tags')[0];
            lockedEl = clone.getElementsByClassName('locked')[0];
            immutEl = clone.getElementsByClassName('immut')[0];
            b = buttons.length;

            while (b--) {
              buttons[b].setAttribute('data-name', name);
            }

            nameField.appendChild(document.createTextNode(name));
            nameField.setAttribute('data-url', entry.url);
            nameField.setAttribute('data-name', name);
            input.className = 'entry-cb';
            input.id = 'entry-cb-' + j;
            input.setAttribute('data-name', name);
            view.setAttribute('data-name', name);
            label.setAttribute('for', 'entry-cb-' + j);

            if (locked) {
              lockedEl.classList.remove('u-display--none');
            } else {
              edit.classList.remove('u-display--none');
              edit.setAttribute('data-name', name);
            }

            if (immut) immutEl.classList.remove('u-display--none');

            if (tags) {
              tags.forEach(function (tag) {
                var el = document.createElement('span');
                tagEl.appendChild(el);
                el.className = 'tags__item';
                el.appendChild(document.createTextNode(tag));
                el.setAttribute('title', browser.i18n.getMessage('title_filter'));
              });
            } else {
              tagEl.innerText = browser.i18n.getMessage('detail_notag');
            }

            clone.getElementsByClassName('created')[0].innerText = _this4.optimizeDateString(new Date(entry.first).toLocaleString());
            clone.getElementsByClassName('last')[0].innerText = _this4.optimizeDateString(new Date(entry.last).toLocaleString());
            clone.getElementsByClassName('count')[0].innerText = entry.marks.length; //clone.getElementsByClassName('lost')[0].innerText = entry.lost ? entry.lost.length : 0;

            if (entry.synced) {
              clone.getElementsByClassName('switch--sync')[0].classList.add('active');
            }

            if (searchedFullText) {
              var fullTextSearchResults = _this4.fullTextSearchResults[name];

              if (fullTextSearchResults) {
                var r = 0,
                    res,
                    mark,
                    pos,
                    markText,
                    markTextEl,
                    highlight,
                    t1,
                    t2,
                    t3;

                for (; r < fullTextSearchResults.length; r++) {
                  res = fullTextSearchResults[r];
                  mark = entry.marks[res.mark];
                  pos = res.pos;
                  markText = mark.text;
                  markTextEl = document.createElement('div');
                  t1 = markText.substring(Math.max(pos - 16, 0), pos);
                  t2 = markText.substr(pos, searchTermLength);
                  t3 = markText.substr(pos + searchTermLength, 16);
                  t1 = t1 ? '... ' + t1 : t1;
                  t3 = t3 ? t3 + ' ...' : t3;
                  highlight = document.createElement('span');
                  highlight.className = 'highlight';
                  highlight.appendChild(document.createTextNode(t2));
                  markTextEl.appendChild(document.createTextNode(t1));
                  markTextEl.appendChild(highlight);
                  markTextEl.appendChild(document.createTextNode(t3));
                  searchResults.appendChild(markTextEl);
                }
              }
            }

            if (!entry.url) {
              throw 'Entry is missing URL field!';
            }
          } catch (e) {
            var brokenEl = document.getElementById('entry-' + j);

            if (brokenEl) {
              brokenEl.classList.add('entry--broken');
              brokenEl.title = e.toString();
              var brokenNameEl = brokenEl.getElementsByClassName('name')[0];

              if (brokenNameEl) {
                brokenNameEl.classList.remove('name');
                brokenNameEl.classList.add('name--disabled');
              }
            } else {
              var errEl = document.createElement('div');
              errEl.className = 'entry--error u-color--red';
              errEl.appendChild(document.createTextNode(browser.i18n.getMessage('broken_entry', name)));
              container.appendChild(errEl);
            }
          }
        }
      })(i, l - i - 1);
    }

    return this;
  }), _defineProperty(_ref, "toggleHeaderFields", function toggleHeaderFields(l) {
    var _this5 = this;

    var noEntriesHint = document.getElementById('no-entries');
    var search = document.getElementById('search');
    var actions = document.getElementById('history-actions');
    var sort = document.getElementById('sort');
    var filter = document.getElementById('filter');
    var count = document.getElementById('count');
    var view = document.getElementById('view');
    var ppSelect = document.getElementById('entries-per-page');
    var checkall = document.getElementById('checkmark-all-container');
    var meth_0 = !l ? 'remove' : 'add';
    var meth_1 = l > 0 ? 'remove' : 'add';
    var meth_2 = l > 2 ? 'remove' : 'add';
    var meth_3 = l > 10 ? 'remove' : 'add';
    noEntriesHint.classList[meth_0]('u-display--none');
    actions.classList[meth_1]('u-display--none');
    search.classList[meth_2]('u-display--none');
    sort.classList[meth_2]('u-display--none');
    filter.classList[meth_1]('u-display--none');
    count.classList[meth_3]('u-display--none');
    view.classList[meth_1]('u-display--none');
    checkall.classList[meth_2]('u-display--none');
    document.getElementById('entries-count').innerText = l;
    return _store2["default"].get('settings').then(function (settings) {
      var pp = _this5.perPage = settings.history.pp || 10;
      ppSelect.value = pp;
    });
  }), _defineProperty(_ref, "setFilterOptions", function setFilterOptions() {
    var _this6 = this;

    if (this.filterOptionsSet) return this;
    var select = document.getElementById('filter-entries');
    var placeholderOption = document.createElement('option');
    var allTags = [];
    var entries = this.origEntries;
    var tags;
    select.innerText = '';
    select.appendChild(placeholderOption);
    placeholderOption.setAttribute('selected', '');
    placeholderOption.setAttribute('hidden', '');
    placeholderOption.innerText = browser.i18n.getMessage('t5124');

    for (var name in entries) {
      tags = entries[name].tag;
      tags = tags ? tags.split(' ') : [];
      tags.forEach(function (tag) {
        if (!allTags.includes(tag)) allTags.push(tag);
      });
    }

    if (!allTags.length && !document.getElementById('filter-opt-notag')) {
      this.addFilterOpt('', browser.i18n.getMessage('detail_notag'), {
        disabled: true,
        id: 'filter-opt-notag'
      });
    } else {
      allTags.forEach(function (tag) {
        return _this6.addFilterOpt(tag, tag);
      });

      if (!document.getElementById('filter-opt-tagless')) {
        this.addFilterOpt('', browser.i18n.getMessage('t5125'), {
          id: 'filter-opt-tagless'
        });
      }
    }

    this.filterOptionsSet = true;
  }), _defineProperty(_ref, "addFilterOpt", function addFilterOpt(tag, text, attrs) {
    if (this.tags.includes(tag)) return this;
    var select = document.getElementById('filter-entries');
    var opt = document.createElement('option');
    select.appendChild(opt);
    opt.value = tag;
    opt.innerText = text;

    if (attrs) {
      for (var a in attrs) {
        opt.setAttribute(a, attrs[a]);
      }
    }

    if (!this.tags.length && tag) {
      var notagFilterOpt = document.getElementById('filter-opt-notag');
      if (notagFilterOpt) select.removeChild(notagFilterOpt);

      if (!document.getElementById('filter-opt-tagless')) {
        this.addFilterOpt('', browser.i18n.getMessage('t5125'), {
          id: 'filter-opt-tagless'
        });
      }
    }

    if (tag) this.tags.push(tag);
  }), _defineProperty(_ref, "getText", function getText(names, spec) {
    var _this7 = this;

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
        noteText,
        entry,
        marks,
        mark,
        lost,
        name,
        m,
        n,
        j;
    return _store2["default"].get('history').then(function (history) {
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
            text += name + newLine + 'URL: ' + entry.url + newLine + browser.i18n.getMessage('page_title') + ': ' + entry.title + newLine + browser.i18n.getMessage('created') + ': ' + _this7.optimizeDateString(new Date(entry.first).toLocaleString()) + newLine + browser.i18n.getMessage('last_modified') + ': ' + _this7.optimizeDateString(new Date(entry.last).toLocaleString()) + newLine + newLines;
          }

          for (j = 0; j < m; j++) {
            mark = marks[j];
            if (reject && reject(mark.key)) continue;

            if (all_marks_plus_meta_and_notes) {
              text += '---' + newLine;
            }

            text += mark.text.replace(/\n/g, '\r\n') + newLines;

            if (all_marks_plus_meta_and_notes && mark.note) {
              noteText = mark.note.text || mark.note;
              text += '  ' + note + ':' + newLine + '  ' + noteText.replace(/\n/g, '\r\n  ') + newLines;
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
  }), _defineProperty(_ref, "getData", function getData(names, type, spec) {
    var _this8 = this;

    if (type === 'text') return this.getText(names, spec);
    return _store2["default"].get('history').then(function (history) {
      var entries = _this8.origEntries = history.entries,
          l = names.length,
          data = '',
          newLines = '\r\n\r\n',
          i = 0;

      for (; i < l; i++) {
        data += entries[names[i]][type] + newLines;
      }

      return data;
    });
  }), _defineProperty(_ref, "getURLs", function getURLs(names) {
    return _store2["default"].get('history').then(function (history) {
      var entries = history.entries,
          urls = [],
          l = names.length,
          i = 0;

      for (; i < l; i++) {
        urls.push(entries[names[i]].url);
      }

      return urls;
    });
  }), _defineProperty(_ref, "optimizeDateString", function optimizeDateString(date) {
    return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
      return '0' + p + q;
    }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
      return p + '0' + q;
    });
  }), _defineProperty(_ref, "search", function search(e, el) {
    var term = el.value.toLowerCase();
    var searchType = el.getAttribute ? el.getAttribute('data-type') : '';
    var countSelect = document.getElementById('count');
    var classMeth = term ? 'add' : 'remove';
    var toggle = document.getElementById('search-toggle');
    this.setupSearch(term, searchType).renderEntries();
    countSelect.classList[classMeth]('u-display--none');
    toggle.classList[classMeth]('active');
  }), _defineProperty(_ref, "setupSearch", function setupSearch(term, searchType) {
    term = typeof term === 'string' ? term : this.searchTerm;
    var history = this.el;
    var searchCount = document.getElementById('search-count');
    this.searched = [];
    this.searchTerm = term;

    if (!term) {
      history.classList.remove('searched');
      history.classList.remove('searched--full-text');
      searchCount.innerText = '';
      this.searchedFullText = false;
      return this;
    } else {
      history.classList.add('searched');

      if (searchType === 'full-text') {
        history.classList.add('searched--full-text');
        this.searchFullText(term);
        this.searchedFullText = true;
      } else {
        history.classList.remove('searched--full-text');
        this.searchByName(term);
        this.searchedFullText = false;
      }

      searchCount.innerText = this.searched.length || '';
    }

    return this;
  }), _defineProperty(_ref, "searchByName", function searchByName(term) {
    var names = this.names;
    var l = names.length,
        i = 0,
        name;

    for (; i < l; i++) {
      name = names[i];

      if (name.toLowerCase().search(term) !== -1) {
        this.searched.push(name);
      }
    }
  }), _defineProperty(_ref, "searchFullText", function searchFullText(text) {
    var entries = this.origEntries;
    var name, marks, i, markText, pos, found;
    var results = this.fullTextSearchResults = {};

    for (name in entries) {
      marks = entries[name].marks;
      found = false;

      for (i = 0; i < marks.length; i++) {
        markText = marks[i].text;
        pos = markText.toLowerCase().search(text);

        if (pos !== -1) {
          found = true;
          results[name] = results[name] || [];
          results[name].push({
            mark: i,
            pos: pos
          });
        }
      }

      if (found) {
        this.searched.push(name);
      }
    }
  }), _defineProperty(_ref, "toggleSearch", function toggleSearch(e, el) {
    if (el.classList.contains('active')) {
      document.getElementById('search-entries--name').value = '';
      document.getElementById('search-entries--full-text').value = '';
      if (this.searchTerm) this.search(null, {
        value: ''
      });
    }
  }), _defineProperty(_ref, "changeCountPerPage", function changeCountPerPage(e, el) {
    var p = this.perPage = el.value * 1;
    this.page = 1;
    this.emit('changed:per-page-count', p);
    this.renderEntries();
  }), _defineProperty(_ref, "setView", function setView(e, el) {
    var table = document.getElementById('entries');
    var val = el.value;
    if (val === 'list') table.classList.remove('detailed-list');else table.classList.add('detailed-list');
    this.emit('change:view-setting', val);
  }), _defineProperty(_ref, "setupView", function setupView(view) {
    document.getElementById('set-view').value = view;
    this.setView(null, {
      value: view
    });
  }), _defineProperty(_ref, "onChangeAction", function onChangeAction(e, el) {
    if (el.value === 'tag') setTimeout(function () {
      return document.getElementById('tag').focus();
    }, 0);
  }), _defineProperty(_ref, "sort", function sort(e, el) {
    var sorted = this.sorted = el.value;
    this.emit('change:sort-setting', sorted);
    this.setupSort(sorted).renderEntries();
  }), _defineProperty(_ref, "setupSort", function setupSort(sorted) {
    sorted = sorted.split('-');
    this.names = _historySort2["default"].by[sorted[0]][sorted[1]](this.origEntries);
    this.sortSearchResults();
    return this;
  }), _defineProperty(_ref, "filter", function filter(e, el) {
    var filter = el.nodeName === 'SPAN' ? el.firstChild.data : el.value;
    var entries = this.origEntries;
    var filteredEntries = {};
    var entry,
        rx,
        c = 0;
    document.getElementById('filter').classList.add('active');

    for (var name in entries) {
      entry = entries[name];
      rx = new RegExp('^' + filter + '$|^' + filter + '\\s|\\s' + filter + '\\s|\\s' + filter + '$', 'g');

      if (filter && entry.tag && entry.tag.search(rx) !== -1 || !entry.tag && filter == '') {
        filteredEntries[name] = entry;
        c++;
      }
    }

    this.entries = filteredEntries;
    this.filtered = true;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', c);
  }), _defineProperty(_ref, "removeFilter", function removeFilter(e, el) {
    el.parentNode.classList.remove('active');
    document.getElementById('filter-entries').selectedIndex = 0;
    this.entries = this.origEntries;
    this.filtered = false;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', this.names.length);
  }), _defineProperty(_ref, "sortSearchResults", function sortSearchResults() {
    if (!this.searched.length) return;
    var names = this.names;
    this.searched.sort(function (a, b) {
      a = names.indexOf(a);
      b = names.indexOf(b);
      if (a == b) return 0;
      return a < b ? -1 : 1;
    });
  }), _defineProperty(_ref, "checkmarkAll", function checkmarkAll(e, el) {
    var directly = typeof el === 'boolean',
        checked = directly ? el : el.checked,
        inputs = document.getElementById('entries').getElementsByTagName('input'),
        i = inputs.length;

    while (i--) {
      inputs[i].checked = checked;
    }

    return false;
  }), _defineProperty(_ref, "delegateButtonAction", function delegateButtonAction(e, el) {
    var action = el.getAttribute('data-action'),
        name = el.getAttribute('data-name');
    name = name ? [name] : undefined;
    !this[action] || this[action](name, el);
  }), _defineProperty(_ref, "toggleSwitch", function toggleSwitch(e, el) {
    el = el.classList.contains('switch--sync') ? el : el.parentNode;
    el.classList.toggle('active');
    this.delegateButtonAction(e, el);
  }), _defineProperty(_ref, "undoSyncToggle", function undoSyncToggle(name) {
    document.querySelector('.switch--sync[data-name="' + name + '"]').classList.toggle('active');
  }), _defineProperty(_ref, "render", function render() {
    var _this9 = this;

    this.resume();

    _store2["default"].get().then(function (storage) {
      var entries = _this9.entries = _this9.origEntries = storage.history.entries,
          sorted = storage.settings.history.sorted || _this9.sorted,
          view = storage.settings.history.view || _this9.viewMode,
          l;
      _this9.sorted = sorted;

      _this9.setupSort(sorted);

      _this9.setupView(view);

      l = _this9.names.length;

      _this9.setupSearch().toggleHeaderFields(l).then(function () {
        return _this9.renderEntries().setFilterOptions();
      });
    });
  }), _defineProperty(_ref, "paginate", function paginate(page) {
    this.page = page;
    this.renderEntries();
  }), _defineProperty(_ref, "updateEntry", function updateEntry(entry) {
    var el = document.querySelector('.entry[data-name="' + entry.name + '"]');
    el.getElementsByClassName('created')[0].innerText = entry.first;
    el.getElementsByClassName('last')[0].innerText = entry.last;
    el.getElementsByClassName('count')[0].innerText = entry.marks.length; //el.getElementsByClassName('lost')[0].innerText = entry.lost.length;
  }), _ref));
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(/*! ./toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

var _historySort = __webpack_require__(/*! ./history-sort */ "./content/addon-page/modules/history-sort.js");

var _historySort2 = _interopRequireDefault(_historySort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ }),

/***/ "./content/addon-page/modules/import.js":
/*!**********************************************!*\
  !*** ./content/addon-page/modules/import.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
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
    "import": function _import(storeString, type) {
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
          mod["import"](e.target.result, type);
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

      _store2["default"].get('local_storage').then(function (storage) {
        localDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
      }).then(function () {
        return _store2["default"].get('synced_storage').then(function (storage) {
          syncedDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
        });
      });
    },
    updateExportName: function updateExportName(e, el) {
      el.parentNode.setAttribute('download', 'Textmarker-data-' + el.getAttribute('data-type') + '-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/logs.js":
/*!********************************************!*\
  !*** ./content/addon-page/modules/logs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
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

      _store2["default"].get('logs').then(function (logs) {
        logs = logs || [];

        var tableBody = _this.el.getElementsByTagName('tbody')[0],
            l = logs.length,
            frag = document.createDocumentFragment(),
            tr,
            td_date,
            td_msg,
            node_date,
            node_msg,
            log,
            time,
            msg,
            reason;

        if (l) {
          _this.el.classList.remove('nologs');

          while (l--) {
            log = logs[l];
            msg = log[1];
            if (typeof msg === 'number') msg = browser.i18n.getMessage(_logKeys2["default"].getKeyByValue(log[1])); //'nu',{year:'numeric',month:'2-digit',day:'2-digit',hour:'numeric',second:'numeric',minute:'numeric'}

            time = _this.optimizeDateString(new Date(log[0]).toLocaleString());
            tr = document.createElement('tr');
            td_date = document.createElement('td');
            td_msg = document.createElement('td');
            node_date = document.createTextNode(time);
            node_msg = document.createTextNode(msg);
            td_date.appendChild(node_date);
            td_msg.appendChild(node_msg);

            if (log[2]) {
              reason = document.createElement('div'); //reason.appendChild(document.createTextNode(log[2]));

              reason.innerText = log[2];
              td_msg.appendChild(reason);
            }

            tr.appendChild(td_date);
            tr.appendChild(td_msg);
            frag.appendChild(tr);
          }

          tableBody.innerText = '';
          tableBody.appendChild(frag);
        } else {
          _this.el.classList.add('nologs');
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

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _logKeys = __webpack_require__(/*! ../../../data/log-keys */ "./data/log-keys.js");

var _logKeys2 = _interopRequireDefault(_logKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/marker.js":
/*!**********************************************!*\
  !*** ./content/addon-page/modules/marker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _MARKER =
/*#__PURE__*/
function () {
  function _MARKER(key, customBgColor) {
    var _this = this;

    _classCallCheck(this, _MARKER);

    this.key = key;
    this.styles = {
      'background-color': customBgColor,
      'color': undefined,
      'border-bottom': undefined,
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
    key: "init",
    value: function init() {
      var _this2 = this;

      return _store2["default"].get('markers').then(function (markers) {
        var marker = markers[_this2.key];
        var existingStyle = marker ? marker.style : null;
        _this2.autonote = marker && marker.autonote ? true : false;
        if (!existingStyle) _this2.setStyle();else _this2.style = existingStyle;

        var styles = _this2.style.split(';'),
            i = styles.length,
            style,
            styleSplit,
            textShadow;

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
    key: "inject",
    value: function inject() {
      var marker = this,
          styles = this.styles,
          bgInput = document.getElementById('bg-color'),
          colorInput = document.getElementById('text-color'),
          borderInput = document.getElementById('border-color'),
          autonoteInput = document.getElementById('autonote-color'),
          bg = styles['background-color'],
          color = styles['color'],
          border = styles['border-bottom'],
          autonoteColor = this.autonote || '',
          shadow,
          shadowSelect,
          i;
      document.getElementById('auto-note').checked = this.autonote;
      autonoteInput.value = autonoteColor || 'yellow';
      autonoteInput.disabled = !autonoteColor;
      document.getElementById('bg-color-checkbox').checked = !!bg;
      bgInput.value = bg || '#ffffff';
      bgInput.disabled = !bg;
      document.getElementById('text-color-checkbox').checked = !!color;
      colorInput.value = color || '#000000';
      colorInput.disabled = !color;
      document.getElementById('border-color-checkbox').checked = !!border;
      borderInput.value = border || '1px solid #ff0000';
      borderInput.disabled = !border;
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
    key: "preview",
    value: function preview() {
      document.getElementById('example').style = this.style;
      return this;
    }
  }, {
    key: "update",
    value: function update(el) {
      var classes = el.classList,
          prop = el.name,
          val;

      if (classes.contains('css-color')) {
        if (el.checked) {
          val = document.getElementById(el.getAttribute('data-target')).value;
          if (!this.isValid(prop, val)) return false;
          this.styles[prop] = prop === 'border-bottom' ? '1px solid ' + val : val;
        } else {
          this.styles[prop] = undefined;
        }
      } else if (classes.contains('shadow')) {
        val = el.value;
        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else {
          var marker = this;

          switch (val) {
            case 'none':
              marker.styles['text-shadow'] = 'none';
              break;

            case 'default':
              marker.styles['text-shadow'] = undefined;
              break;

            case 'shadow':
              marker.setShadow();
              break;

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
      } else if (prop === 'border-bottom') {
        val = '1px solid ' + el.value;
        this.styles[prop] = val;
      } else {
        val = el.value;
        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else this.styles[prop] = val;
      }

      return this.setStyle().preview();
    }
  }, {
    key: "isValid",
    value: function isValid(prop, val) {
      var valid;

      switch (prop) {
        case 'background-color':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'color':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'border-bottom':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'font-size':
          valid = /^[0-9]{1,2}px$/.test(val);
          break;

        case 'font-family':
          valid = /^[a-z,\s-]{5,40}$/i.test(val);
          break;

        case 'font-weight':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'font-style':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'text-decoration':
          valid = /^[a-z-]{7,12}$/i.test(val);
          break;

        case 'text-shadow':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'x':
          valid = /^\d$/;
          break;

        case 'y':
          valid = /^\d$/;
          break;

        case 'blur':
          valid = /^\d$/;
          break;

        default:
          valid = false;
      }

      return valid;
    }
  }, {
    key: "setShadow",
    value: function setShadow() {
      this.styles['text-shadow'] = this.shadow.x + ' ' + this.shadow.y + ' ' + this.shadow.blur + ' ' + this.shadow.color;
    }
  }, {
    key: "setStyle",
    value: function setStyle() {
      var style = '',
          val;

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

exports["default"] = _MARKER;

/***/ }),

/***/ "./content/addon-page/modules/nav.js":
/*!*******************************************!*\
  !*** ./content/addon-page/modules/nav.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (el) {
  return new _utils._DOMMODULE({
    el: el,
    events: {
      DOM: {
        click: {
          'li': 'toggle',
          '.navitem': 'toggle'
        }
      }
    },
    pageNav: null,
    current: null,
    autoinit: function autoinit() {
      this.pageNav = el.hasAttribute('data-page-nav');
      var current = this.current = el.getElementsByClassName('active')[0];

      if (current) {
        this.open(current);
      }
    },
    toggle: function toggle(e, el) {
      if (el.classList.contains('disabled') || this.current == el) return false;
      if (this.current) this.close(this.current);
      this.open(el);
    },
    open: function open(el) {
      var targetId = el.getAttribute('data-target');
      el.classList.add('active');
      document.getElementById(targetId).classList.remove('u-display--none');
      this.emit('opened:tab', targetId);
      this.current = el;
      if (this.pageNav) window.document.title = 'Textmarker - ' + browser.i18n.getMessage(targetId);
    },
    close: function close(el) {
      el.classList.remove('active');
      document.getElementById(el.getAttribute('data-target')).classList.add('u-display--none');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

/***/ }),

/***/ "./content/addon-page/modules/settings.js":
/*!************************************************!*\
  !*** ./content/addon-page/modules/settings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('settings'),
    events: {
      ENV: {
        'imported:settings': 'update',
        'updated:bg-color-settings': 'update',
        'updated:custom-search-settings': 'showCustomSearchSettingSuccess',
        'set-areas-after-sync-change': 'update'
      },
      DOM: {
        change: {
          '.css': 'changeStyle',
          '#customized-key': 'updateMarker',
          '#add-key': 'addMarker',
          '#remove-key': 'removeMarker',
          '.mark-opt': 'changeMarkMethod',
          '.sc-cb': 'toggleShortcut',
          '.shortcut-select': 'changeShortcut',
          '.save-opt': 'changeSaveOpt',
          '.naming-opt': 'changeNamingOpt',
          '#notes-new': 'toggleSaveNoteOpt',
          '.customize-quickbuttons': 'changeQuickbuttonOpt',
          '.download-quickbutton-opt': 'switchQuickbuttonOpt',
          '.ctm-cb': 'toggleCtm',
          '.notes-cb': 'toggleNotes',
          '.misc-cb': 'toggleMisc',
          '.tbbpower-opt': 'toggleTBBPowerOpt',
          '.tmuipos': 'changeTmuiPositionOpt',
          '#private-save': 'togglePrivSave',
          '#auto-note': 'toggleAutoNoteOpt',
          '#immut': 'toggleImmutOpt',
          '#drop-losses': 'toggleDropLossesOpt',
          '#autonote-color': 'changeAutoNoteOpt',
          '#ignore-hash': 'changeHashOpt',
          '#addon-autocs': 'toggleAutocsOpt',
          '#addon-iframes': 'toggleIFrameOpt',
          '#misc-notefontsize': 'changeNotesFontSize'
        },
        click: {
          '#custom-search': 'changeCustomSearch',
          '.custom-search-input': 'hideCustomSearchSettingSuccess',
          '#disable-notifs': 'disableAllNotifications'
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

      _store2["default"].get('settings').then(function (settings) {
        var markers = settings.markers,
            markerKeys = _this.markerKeys,
            customMarkerKeys = _this.customMarkerKeys,
            i,
            key;

        for (key in markers) {
          i = key.toLowerCase();
          if (!markerKeys.includes(i) && !customMarkerKeys.includes(i)) _this.customMarkerKeys.push(i);
        }

        _this.renderMarkerSelectOptions().updateMarker(_this.marker ? _this.marker.key : 'm').injectSettings(settings);
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
      this.marker = new _marker2["default"](key, customBgColor);
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
          option,
          icon,
          val,
          Val;

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
          i,
          scCheckbox,
          scSelect,
          cmCheckbox,
          sc;

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
      document.getElementById('private-save').checked = historySettings.saveInPriv;
      document.getElementById('immut').checked = historySettings.immut;
      document.getElementById('drop-losses').checked = historySettings.dropLosses;
      document.getElementById('notes-new').checked = historySettings.saveNote;
      document.getElementById('ignore-hash').checked = !historySettings.ignoreHash;

      if (historySettings.download === 'json') {
        document.getElementById('download-json').checked = true;
      } else {
        document.getElementById('download-text').checked = true;
        document.getElementById('quickbutton-download-select').value = historySettings.download;
      }

      var miscSettings = settings.misc;
      document.getElementById('mark-method--' + miscSettings.markmethod).checked = true;
      document.getElementById('misc-bm').checked = miscSettings.bmicon;
      document.getElementById('misc-noteicon').checked = miscSettings.noteicon;
      document.getElementById('misc-noteonclick').checked = miscSettings.noteonclick;
      document.getElementById('misc-notetransp').checked = miscSettings.notetransp;
      document.getElementById('misc-noteplainview').checked = miscSettings.noteplainview;
      document.getElementById('misc-notefontsize').value = miscSettings.notefontsize;
      document.getElementById('notes-restoration-failure').checked = miscSettings.failureNote;
      document.getElementById('notes-restoration-success').checked = miscSettings.successNote;
      document.getElementById('notes-pbm').checked = miscSettings.pbmNote;
      document.getElementById('notes-error').checked = miscSettings.errorNote;
      document.getElementById('vip-note').checked = miscSettings.vipNote;
      document.getElementById('custom-search--start').value = miscSettings.customSearch ? miscSettings.customSearch[0] : this.customSearch;
      document.getElementById('custom-search--end').value = miscSettings.customSearch ? miscSettings.customSearch[1] : '';
      document.getElementById('tmuipos--noteicon').value = miscSettings.tmuipos;
      document.getElementById('tmuipos--bmicon').value = miscSettings.tmuipos;

      if (miscSettings.tbbpower) {
        document.getElementById('tbbpower-on').checked = true;
      } else {
        document.getElementById('tbbpower-off').checked = true;
      }

      document.getElementById('addon-autocs').checked = settings.addon.autocs;
      document.getElementById('addon-iframes').checked = settings.addon.iframes;
    },
    showCustomSearchSettingSuccess: function showCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.remove('u-display--none');
    },
    hideCustomSearchSettingSuccess: function hideCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.add('u-display--none');
    },
    changeStyle: function changeStyle(e, el) {
      var marker = this.marker.update(el);
      this.emit('change:style-setting', marker.key, marker.style);
    },
    toggleAutoNoteOpt: function toggleAutoNoteOpt(e, el) {
      var val = el.checked ? document.getElementById('autonote-color').value : false;
      this.emit('change:autonote-setting', this.marker.key, val);
    },
    changeAutoNoteOpt: function changeAutoNoteOpt(e, el) {
      var val = document.getElementById('auto-note').checked ? el.value : false;
      this.emit('change:autonote-setting', this.marker.key, val);
    },
    changeHashOpt: function changeHashOpt(e, el) {
      this.emit('change:hash-setting', !el.checked);
    },
    toggleImmutOpt: function toggleImmutOpt(e, el) {
      this.emit('change:immut-setting', el.checked);
    },
    toggleDropLossesOpt: function toggleDropLossesOpt(e, el) {
      this.emit('change:dropLosses-setting', el.checked);
    },
    toggleAutocsOpt: function toggleAutocsOpt(e, el) {
      this.emit('change:autocs-setting', el.checked);
    },
    toggleIFrameOpt: function toggleIFrameOpt(e, el) {
      this.emit('change:iframe-setting', el.checked);
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
          option;
      if (!key || this.allowedKeys.indexOf(key) === -1) return false;
      option = el.children[el.selectedIndex];
      addKeySelect.appendChild(option);
      addKeySelect.selectedIndex = 0;
      el.selectedIndex = 0;
      keySelect.getElementsByClassName('custom-marker-option-' + key)[0].remove();
      document.getElementById('custom-key-' + key).remove();
      keySelect.selectedIndex = 0;
      this.updateMarker('m');
      this.emit('remove:custom-marker', key);
    },
    changeMarkMethod: function changeMarkMethod(e, el) {
      if (el.checked) {
        this.emit('change:mark-method-setting', el.getAttribute('data-value'));
      }
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
    togglePrivSave: function togglePrivSave(e, el) {
      this.emit('toggle:priv-setting', el.checked);
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
    switchQuickbuttonOpt: function switchQuickbuttonOpt(e, el) {
      var type = el.getAttribute('data-id');
      var val = type === 'json' ? type : document.getElementById('quickbutton-download-select').value;
      this.emit('switch:quickbuttonopt-setting', el.name, val);
    },
    toggleNotes: function toggleNotes(e, el) {
      this.emit('toggle:notification-setting', el.name, el.checked);
    },
    disableAllNotifications: function disableAllNotifications() {
      var cbs = [document.getElementById('notes-new')].concat(Array.from(document.getElementsByClassName('notes-cb')));
      var interval = setInterval(function () {
        if (!cbs.length) return clearInterval(interval);
        cbs.pop().click();
      }, 100);
    },
    toggleMisc: function toggleMisc(e, el) {
      this.emit('toggle:misc-setting', el.name, el.checked);
    },
    toggleTBBPowerOpt: function toggleTBBPowerOpt(e, el) {
      var val = !!(el.getAttribute('data-id') * 1);
      this.emit('toggle:tbbpower-setting', el.name, val);
    },
    changeTmuiPositionOpt: function changeTmuiPositionOpt(e, el) {
      this.emit('change:misc-setting', el.name, el.value);
      Array.from(this.el.getElementsByClassName('tmuipos')).forEach(function (select) {
        return select.value = el.value;
      });
    },
    changeNotesFontSize: function changeNotesFontSize(e, el) {
      if (el.validity.valid) {
        this.emit('change:misc-setting', el.name, el.value);
      }
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

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _marker = __webpack_require__(/*! ./marker */ "./content/addon-page/modules/marker.js");

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/syncing.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/syncing.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
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
      document.getElementById('sync-switch--settings').classList.toggle('active', _store2["default"].area_settings === 'sync');
      document.getElementById('sync-switch--history').classList.toggle('active', _store2["default"].area_history === 'sync');
      document.getElementById('sync-switch--pagenotes').classList.toggle('active', _store2["default"].area_pagenotes === 'sync');
    },
    toggleSwitch: function toggleSwitch(e, el) {
      el = el.classList.contains('switch--sync') ? el : el.parentNode;
      el.classList.toggle('active');
      this.emit('toggle:sync', el.getAttribute('data-type'), el.classList.contains('active'));
    },
    undo: function undo(field) {
      document.getElementById('sync-switch--' + field).classList.toggle('active');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/toggler.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/toggler.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _TOGGLER =
/*#__PURE__*/
function () {
  function _TOGGLER(el) {
    _classCallCheck(this, _TOGGLER);

    this.el = el;
    this.init();
  }

  _createClass(_TOGGLER, [{
    key: "init",
    value: function init() {
      this.el.addEventListener('click', this.toggle, false);
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      e.stopPropagation();
      var dataTarget = this.getAttribute('data-target'),
          targets = dataTarget ? dataTarget.split(' ') : null,
          dataToggle = this.getAttribute('data-toggle'),
          roles = dataToggle ? dataToggle.split(' ') : null;

      if (roles) {
        roles.forEach(function (role, i) {
          return document.getElementById(targets[i]).classList[role]('open');
        });
      } else document.getElementById(targets[0]).disabled = !this.checked;
    }
  }]);

  return _TOGGLER;
}();

exports["default"] = _TOGGLER;

/***/ }),

/***/ "./content/addon-page/modules/troubleshooting.js":
/*!*******************************************************!*\
  !*** ./content/addon-page/modules/troubleshooting.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('troubleshooting'),
    events: {
      DOM: {
        click: {
          'option': 'toggleTopic',
          '.trouble__answer--btn': 'showArticle',
          '.trouble__answer--sub': 'showArticle',
          '.trouble__cancel': 'cancel',
          '.trouble__answer--no-entries': 'scanHistory'
        }
      }
    },
    currentTrouble: null,
    autoinit: function autoinit() {},
    toggleTopic: function toggleTopic(e, el) {
      if (this.currentTrouble) this.currentTrouble.classList.remove('open');
      var newTrouble = this.currentTrouble = document.getElementById(el.getAttribute('data-target'));
      newTrouble.classList.add('open');
    },
    showArticle: function showArticle(e, el) {
      el = el.nodeName === 'BUTTON' ? el : el.parentNode;
      var boxClassList = el.parentNode.parentNode.classList;
      boxClassList.add('answered');
      boxClassList.add("answered--".concat(el.getAttribute('data-value')));
    },
    cancel: function cancel() {
      Array.from(document.getElementsByClassName('answered')).forEach(function (el) {
        el.classList.remove('answered');
        el.classList.remove('answered--no');
        el.classList.remove('answered--yes');
      });
    },
    scanHistory: function scanHistory() {
      var articles = [document.getElementById('history-scan__error'), document.getElementById('history-scan__empty'), document.getElementById('history-scan__nonempty'), document.getElementById('history-scan__nomarks')];
      var errEl = articles[0],
          emptyEl = articles[1],
          nonemptyEl = articles[2],
          nomarksEl = articles[3];
      articles.forEach(function (a) {
        return a.classList.add('u-display--none');
      });

      _store2["default"].get('history').then(function (history) {
        if (!history || !history.entries) {
          errEl.classList.remove('u-display--none');
        } else {
          var len = history.entries ? Object.keys(history.entries).length : 0;

          if (len) {
            nonemptyEl.classList.remove('u-display--none');
            var nomarks = true,
                entry;

            for (var e in history.entries) {
              entry = history.entries[e];

              if (entry.marks && entry.marks.length) {
                document.getElementById('history-scan__count').innerText = len;
                nomarks = false;
                break;
              }
            }

            if (nomarks) {
              nomarksEl.classList.remove('u-display--none');
            }
          } else {
            emptyEl.classList.remove('u-display--none');
          }
        }
      })["catch"](function (e) {
        errEl.classList.remove('u-display--none');
        document.getElementById('history-scan__errormsg1').innerText = e.toString();
      }).then(function () {
        var articleClasses = document.getElementById('trouble--3').classList;
        articleClasses.add('answered');
        articleClasses.add('answered--yes');
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/port.js":
/*!************************************!*\
  !*** ./content/addon-page/port.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'addon-page',
  type: 'content',
  events: {
    ONEOFF: ['change:style-setting', 'change:autonote-setting', 'change:mark-method-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:immut-setting', 'change:dropLosses-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'change:hash-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'switch:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'toggle:tbbpower-setting', 'change:autocs-setting', 'change:iframe-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'rename:entry', 'correct-name:entry', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries']
  }
});

/***/ }),

/***/ "./content/addon-page/sass/index.scss":
/*!********************************************!*\
  !*** ./content/addon-page/sass/index.scss ***!
  \********************************************/
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
      notefontsize: 12,
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

/***/ "./data/log-keys.js":
/*!**************************!*\
  !*** ./data/log-keys.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
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
  error_save_priv: 32,
  note_restoration_warning_1: 33,
  note_restoration_warning_2: 34,
  error_save_change_autonote: 35,
  error_save_mark_method: 36,
  js_injection_failure: 37,
  css_injection_failure: 38,
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
        data = browser.i18n.getMessage(l10nId, '');

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

        if (lastArg && (tab = lastArg.tab)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvdHJvdWJsZXNob290aW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9sb2cta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwiX2dldF9kb3dubG9hZF9vcHRpb24iLCJicm93c2VyIiwic3RvcmFnZSIsImFyZWFfc2V0dGluZ3MiLCJnZXQiLCJ0aGVuIiwic2V0dGluZ3MiLCJoaXN0b3J5IiwiZG93bmxvYWQiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJzaG9ydGN1dHMiLCJhbGxvd2VkSGFzaGVzIiwiYm9vdHN0cmFwcGVkIiwiYXV0b2luaXQiLCJzdGFydCIsImluaXRNYWluTmF2IiwidGFiIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJpbmNsdWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfTkFWIiwiaW5uZXJUZXh0IiwicnVudGltZSIsImdldE1hbmlmZXN0IiwidmVyc2lvbiIsInN1Ym5hdnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibiIsImxlbmd0aCIsInRvZ2dsZUJ1dHRvbnMiLCJ0IiwiX1RPR0dMRVIiLCJzZXRMb2dMaW5rIiwibG9nTGluayIsImxvZ3MiLCJsIiwiaHJlZiIsImVuY29kZVVSSUNvbXBvbmVudCIsImkxOG4iLCJnZXRNZXNzYWdlIiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZWwiLCJET00iLCJjbGljayIsIm51bWJlclBhZ2VzIiwibnVtYmVyRW50cmllcyIsImN1cnJlbnRQYWdlIiwicGVyUGFnZSIsInVwZGF0ZUZyb21TdG9yYWdlIiwiZSIsIm5ld1BhZ2UiLCJnZXRBdHRyaWJ1dGUiLCJlbWl0IiwicmVuZGVyIiwicHJldiIsIm5leHQiLCJ1cGRhdGUiLCJyZW1vdmUiLCJwcCIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwic2lsZW50IiwiTWF0aCIsImNlaWwiLCJyZXNldCIsInVsIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImxpIiwicCIsInBhZ2VzIiwiciIsImZyYWciLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaSIsIm1heCIsIm1pbiIsImoiLCJhcHBlbmRCdXR0b24iLCJpbnNlcnRCZWZvcmUiLCJiIiwiYnRuIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGFuZ2VDb3VudFBlclBhZ2UiLCJieSIsImRhdGUiLCJjcmVhdGVkIiwib2JqZWN0IiwiX3NvcnQiLCJsYXN0IiwiZmllbGQiLCJzb3J0IiwiYSIsIm5hbWUiLCJheiIsInphIiwicmV2ZXJzZSIsInRvTG93ZXJDYXNlIiwibG9jYWxlQ29tcGFyZSIsImNoYW5nZSIsImtleXVwIiwiaW5pdGlhbGl6ZWQiLCJuYW1lcyIsImVudHJ5VG1wbCIsImVudHJpZXNDb250YWluZXIiLCJwYWdlIiwic29ydGVkIiwidmlld01vZGUiLCJzZWFyY2hUZXJtIiwic2VhcmNoZWQiLCJ0YWdzIiwiZmlsdGVyZWQiLCJmaWx0ZXJPcHRpb25zU2V0IiwiaW5pdCIsInJlc3VtZSIsIm1zZyIsImxvY2tlZCIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ0eXBlIiwic3BlYyIsInVuZGVmaW5lZCIsImdldERhdGEiLCJkYXRhIiwidGV4dCIsImxpbmsiLCJqb2luIiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYmFja3VwIiwicG9wIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG9jYWxlU3RyaW5nIiwicmVwbGFjZSIsImNvbnRhaW5zIiwiZ2V0VVJMcyIsInVybHMiLCJuZXdOYW1lIiwicHJvbXB0Iiwib2xkTmFtZSIsImFyZWEiLCJwYXJlbnROb2RlIiwidGFnIiwiZm9yY2UiLCJvIiwic3luYyIsImxvY2FsIiwib3JpZ0VudHJpZXMiLCJzeW5jZWQiLCJwdXNoIiwiY2hlY2tlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpb24iLCJ2YWx1ZSIsInZhbCIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwic2VhcmNoVGVybUxlbmd0aCIsInNlYXJjaGVkRnVsbFRleHQiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwic2VhcmNoUmVzdWx0cyIsImJ1dHRvbnMiLCJlZGl0IiwidmlldyIsImltbXV0IiwiaW1tdXRFbCIsImxvY2tlZEVsIiwidGFnRWwiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiY2xhc3NOYW1lIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiZmlyc3QiLCJtYXJrcyIsImZ1bGxUZXh0U2VhcmNoUmVzdWx0cyIsInJlcyIsIm1hcmsiLCJwb3MiLCJtYXJrVGV4dCIsIm1hcmtUZXh0RWwiLCJoaWdobGlnaHQiLCJ0MSIsInQyIiwidDMiLCJzdWJzdHJpbmciLCJzdWJzdHIiLCJicm9rZW5FbCIsInRpdGxlIiwidG9TdHJpbmciLCJicm9rZW5OYW1lRWwiLCJlcnJFbCIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwic2VsZWN0IiwicGxhY2Vob2xkZXJPcHRpb24iLCJhbGxUYWdzIiwiYWRkRmlsdGVyT3B0IiwiZGlzYWJsZWQiLCJhdHRycyIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibm90ZVRleHQiLCJsb3N0IiwibSIsInRyaW0iLCJnZXRUZXh0IiwicSIsInRlcm0iLCJzZWFyY2hUeXBlIiwiY291bnRTZWxlY3QiLCJjbGFzc01ldGgiLCJ0b2dnbGUiLCJzZXR1cFNlYXJjaCIsInJlbmRlckVudHJpZXMiLCJzZWFyY2hDb3VudCIsInNlYXJjaEZ1bGxUZXh0Iiwic2VhcmNoQnlOYW1lIiwiZm91bmQiLCJyZXN1bHRzIiwidGFibGUiLCJzZXRWaWV3Iiwic2V0VGltZW91dCIsImZvY3VzIiwic2V0dXBTb3J0IiwiX1NPUlQiLCJzb3J0U2VhcmNoUmVzdWx0cyIsIm5vZGVOYW1lIiwiZmlyc3RDaGlsZCIsImZpbHRlcmVkRW50cmllcyIsInJ4IiwiYyIsIlJlZ0V4cCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleE9mIiwiZGlyZWN0bHkiLCJpbnB1dHMiLCJkZWxlZ2F0ZUJ1dHRvbkFjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzZXR1cFZpZXciLCJ0b2dnbGVIZWFkZXJGaWVsZHMiLCJzZXRGaWx0ZXJPcHRpb25zIiwibW91c2Vkb3duIiwidXBkYXRlRXhwb3J0TGlua3MiLCJzdG9yZVN0cmluZyIsInBhcnNlZFN0cmluZyIsInBhcnNlIiwiZGlzcGxheUZhaWx1cmUiLCJ0cmlnZ2VyRmlsZUlucHV0IiwiaGFuZGxlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwibW9kIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsInJlYXNvbiIsImxvY2FsRGF0YUxpbmsiLCJzeW5jZWREYXRhTGluayIsInVwZGF0ZUV4cG9ydE5hbWUiLCJ0YWJsZUJvZHkiLCJ0ciIsInRkX2RhdGUiLCJ0ZF9tc2ciLCJub2RlX2RhdGUiLCJub2RlX21zZyIsInRpbWUiLCJfTE9HX0tFWVMiLCJnZXRLZXlCeVZhbHVlIiwiY2xlYXIiLCJfTUFSS0VSIiwiY3VzdG9tQmdDb2xvciIsInN0eWxlcyIsInNoYWRvdyIsIngiLCJ5IiwiYmx1ciIsImNvbG9yIiwiaW5qZWN0IiwicHJldmlldyIsIm1hcmtlciIsImV4aXN0aW5nU3R5bGUiLCJzdHlsZSIsImF1dG9ub3RlIiwic2V0U3R5bGUiLCJzdHlsZVNwbGl0IiwidGV4dFNoYWRvdyIsInNoYWRvd1NwbGl0IiwiYmdJbnB1dCIsImNvbG9ySW5wdXQiLCJib3JkZXJJbnB1dCIsImF1dG9ub3RlSW5wdXQiLCJiZyIsImJvcmRlciIsImF1dG9ub3RlQ29sb3IiLCJzaGFkb3dTZWxlY3QiLCJwcm9wIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiaXNWYWxpZCIsInNldFNoYWRvdyIsInZhbGlkIiwidGVzdCIsInBhZ2VOYXYiLCJjdXJyZW50IiwiaGFzQXR0cmlidXRlIiwib3BlbiIsImNsb3NlIiwidGFyZ2V0SWQiLCJhbGxvd2VkS2V5cyIsImFsbG93ZWRTaG9ydGN1dHMiLCJhbGxvd2VkUXVpY2tidXR0b25PcHRzIiwibWFya2VyS2V5cyIsImN1c3RvbU1hcmtlcktleXMiLCJjdXN0b21TZWFyY2giLCJyZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zIiwidXBkYXRlTWFya2VyIiwiaW5qZWN0U2V0dGluZ3MiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJrZXlTZWxlY3QiLCJrZXlJY29ucyIsImFkZEtleVNlbGVjdCIsInJlbW92ZUtleVNlbGVjdCIsImZyYWdtZW50MSIsImZyYWdtZW50MiIsImZyYWdtZW50MyIsImZyYWdtZW50NCIsIm9wdGlvbiIsImljb24iLCJWYWwiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNjQ2hlY2tib3giLCJzY1NlbGVjdCIsImNtQ2hlY2tib3giLCJzYyIsImhpc3RvcnlTZXR0aW5ncyIsInNhdmVPcHRzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhdXRvc2F2ZSIsIm5hbWluZyIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwic2F2ZU5vdGUiLCJpZ25vcmVIYXNoIiwibWlzY1NldHRpbmdzIiwibWlzYyIsIm1hcmttZXRob2QiLCJibWljb24iLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJub3RlZm9udHNpemUiLCJmYWlsdXJlTm90ZSIsInN1Y2Nlc3NOb3RlIiwicGJtTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJ0bXVpcG9zIiwidGJicG93ZXIiLCJhZGRvbiIsImF1dG9jcyIsImlmcmFtZXMiLCJzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJjaGFuZ2VTdHlsZSIsInRvZ2dsZUF1dG9Ob3RlT3B0IiwiY2hhbmdlQXV0b05vdGVPcHQiLCJjaGFuZ2VIYXNoT3B0IiwidG9nZ2xlSW1tdXRPcHQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwidG9nZ2xlQXV0b2NzT3B0IiwidG9nZ2xlSUZyYW1lT3B0IiwiYWRkTWFya2VyIiwiYmdDb2xvciIsImdldFJhbmRvbUxpZ2h0Q29sb3IiLCJzZWxlY3RlZCIsInJlbW92ZU1hcmtlciIsImNoYW5nZU1hcmtNZXRob2QiLCJ0b2dnbGVTaG9ydGN1dCIsImNoYW5nZVNob3J0Y3V0IiwidG9nZ2xlQ3RtIiwiY2hhbmdlU2F2ZU9wdCIsInRvZ2dsZVByaXZTYXZlIiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlU2F2ZU5vdGVPcHQiLCJjaGFuZ2VRdWlja2J1dHRvbk9wdCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90ZXMiLCJkaXNhYmxlQWxsTm90aWZpY2F0aW9ucyIsImNicyIsImNvbmNhdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidG9nZ2xlTWlzYyIsInRvZ2dsZVRCQlBvd2VyT3B0IiwiY2hhbmdlVG11aVBvc2l0aW9uT3B0IiwiY2hhbmdlTm90ZXNGb250U2l6ZSIsInZhbGlkaXR5IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwiaW5wMSIsImlucDIiLCJwYXJ0MSIsInBhcnQyIiwiZmxvb3IiLCJyYW5kb20iLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInRvZ2dsZVN3aXRjaCIsInVuZG8iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRhcmdldCIsInRhcmdldHMiLCJkYXRhVG9nZ2xlIiwicm9sZXMiLCJyb2xlIiwiY3VycmVudFRyb3VibGUiLCJ0b2dnbGVUb3BpYyIsIm5ld1Ryb3VibGUiLCJzaG93QXJ0aWNsZSIsImJveENsYXNzTGlzdCIsImNhbmNlbCIsInNjYW5IaXN0b3J5IiwiYXJ0aWNsZXMiLCJlbXB0eUVsIiwibm9uZW1wdHlFbCIsIm5vbWFya3NFbCIsImxlbiIsIm5vbWFya3MiLCJhcnRpY2xlQ2xhc3NlcyIsIk9ORU9GRiIsInoiLCJzIiwiZCIsInciLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsImNvcHkiLCJhY3RpdmUiLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwidGFicyIsIm1ldGEiLCJ1bmZvbGRlZCIsIm5vdGVzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImpzX2luamVjdGlvbl9mYWlsdXJlIiwiY3NzX2luamVjdGlvbl9mYWlsdXJlIiwic3JjIiwiaXNBcnJheSIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0IiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsInRleHRDb250ZW50IiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJmcmFtZUlkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJzZXRBcmVhcyIsIlByb21pc2UiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7UUFFU0EsSyxHQUFBQSxXO1FBQU9DLGUsR0FBQUEsNkI7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Q2M7QUFDYixhQUFPekMsT0FBTyxDQUFDQyxPQUFSLENBQWdCZ0ssS0FBaEIsQ0FBc0I5SixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXNuQixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQzNsQixPQUFuQyxFQUE0QztBQUMxQyxpQkFBTy9CLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQitKLElBQWhCLENBQXFCN0osR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUF1bkIsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUM1bEIsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPMmxCLFlBQVksQ0FBQzNsQixPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QjFDLGUiLCJmaWxlIjoiY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2Uud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvYWRkb24tcGFnZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnb25Ub2dnbGVkU3luYydcclxuICAgIH1cclxuICB9LFxyXG4gIGVudjogJ2FkZG9uLXBhZ2UnLFxyXG5cclxuICBfZ2V0X2Rvd25sb2FkX29wdGlvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAndGV4dCc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuZG93bmxvYWQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmltcG9ydCBfSElTVE9SWSBmcm9tICcuL21vZHVsZXMvaGlzdG9yeSdcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuL21vZHVsZXMvc2V0dGluZ3MnXHJcbmltcG9ydCBfTE9HR0lORyBmcm9tICcuL21vZHVsZXMvbG9ncydcclxuaW1wb3J0IF9TWU5DSU5HIGZyb20gJy4vbW9kdWxlcy9zeW5jaW5nJ1xyXG5pbXBvcnQgX0lNUE9SVCBmcm9tICcuL21vZHVsZXMvaW1wb3J0J1xyXG5pbXBvcnQgX0NPTlRBQ1QgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnXHJcbmltcG9ydCBfVFJPVUJMRVNIT09USU5HIGZyb20gJy4vbW9kdWxlcy90cm91Ymxlc2hvb3RpbmcnXHJcbmltcG9ydCBfUEFHSU5BVE9SIGZyb20gJy4vbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24nXHJcblxyXG5pbXBvcnQgX05BViBmcm9tICcuL21vZHVsZXMvbmF2J1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3N0YXJ0JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICdzdGFydCdcclxuICAgIH1cclxuICB9LFxyXG4gIGFsbG93ZWRIYXNoZXM6IFsnbmV3cycsICdtYW51YWwnLCAnc2V0dGluZ3MnLCAnaGlzdG9yeScsICdjb250YWN0JywgJ3N5bmMnLCAnZXhwb3J0JywgJ3Ryb3VibGVzaG9vdGluZycsICdsb2dzJ10sXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkpIHRoaXMuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9vdHN0cmFwcGVkKSB7XHJcbiAgICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgX0hJU1RPUlkoKTtcclxuICAgICAgX1NFVFRJTkdTKCk7XHJcbiAgICAgIF9MT0dHSU5HKCk7XHJcbiAgICAgIF9TWU5DSU5HKCk7XHJcbiAgICAgIF9JTVBPUlQoKTtcclxuICAgICAgX0NPTlRBQ1QoKTtcclxuICAgICAgX1RST1VCTEVTSE9PVElORygpO1xyXG4gICAgICBfUEFHSU5BVE9SKCk7XHJcbiAgICAgIHRoaXMuaW5pdE1haW5OYXYoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRNYWluTmF2KCkge1xyXG4gICAgY29uc3QgdGFiID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz0nKVsxXTtcclxuXHJcbiAgICBpZiAodGhpcy5hbGxvd2VkSGFzaGVzLmluY2x1ZGVzKHRhYikpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlubmF2LScgKyB0YWIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbmV3IF9OQVYod2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlubmF2JykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX05BViBmcm9tICcuL21vZHVsZXMvbmF2J1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZXInXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vX3N0b3JlJ1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbi8qIGF1dG8taW5zZXJ0IGN1cnJlbnQgdmVyc2lvbiBudW1iZXIgKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnNpb24tbnVtYmVyJykuaW5uZXJUZXh0ID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuLyogZW5kOiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcblxyXG4vKiBjb25maWd1cmUgc3VibmF2cyAqL1xyXG5jb25zdCBzdWJuYXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3VibmF2Jyk7XHJcbmxldCBuID0gc3VibmF2cy5sZW5ndGg7XHJcblxyXG53aGlsZShuLS0pIG5ldyBfTkFWKHN1Ym5hdnNbbl0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSBuYXZzICovXHJcblxyXG4vKiBjb25maWd1cmUgdG9nZ2xlIGVsZW1lbnRzICovXHJcbmxldCB0b2dnbGVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9nZ2xlLWJ1dHRvbicpLFxyXG4gICAgdCA9IHRvZ2dsZUJ1dHRvbnMubGVuZ3RoO1xyXG5cclxud2hpbGUodC0tKSBuZXcgX1RPR0dMRVIodG9nZ2xlQnV0dG9uc1t0XSk7XHJcbi8qIGVuZDogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ3NldExvZ0xpbmsnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5zZXRMb2dMaW5rKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0TG9nTGluaygpIHtcclxuICAgICAgY29uc3QgbG9nTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2ctbWFpbCcpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbG9ncycpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgICAgbGV0IGwgPSBsb2dzID8gbG9ncy5sZW5ndGggOiAwLFxyXG4gICAgICAgICAgICBocmVmID1cclxuICAgICAgICAgICAgICAnbWFpbHRvOnVuZGZseWJpckBnbXguZGU/c3ViamVjdD1UZXh0bWFya2VyJyArXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCcgOiBFcnJvciBMb2dzJykgK1xyXG4gICAgICAgICAgICAgICcmYm9keT0nK1xyXG4gICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCgnLSAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3lvdXJfbXNnJykgKyAnIC1cXG5cXG5cXG5MT0dTOlxcblxcbicpLFxyXG4gICAgICAgICAgICBsb2c7XHJcblxyXG4gICAgICAgIHdoaWxlKGwtLSkge1xyXG4gICAgICAgICAgbG9nID0gbG9nc1tsXTtcclxuICAgICAgICAgIGhyZWYgKz0gbG9nWzFdICsgKGxvZ1syXSA/ICcgKCcgKyBsb2dbMl0gKyAnKScgOiAnJykgKyAnIC0gJyArIGVuY29kZVVSSUNvbXBvbmVudCgobmV3IERhdGUobG9nWzBdKS50b1VUQ1N0cmluZygpKSArICdcXG4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nTGluay5ocmVmID0gaHJlZjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vdG9nZ2xlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRvcicpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdhZGQnLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJpZXMnOiAndXBkYXRlRnJvbVN0b3JhZ2UnLFxyXG4gICAgICAgICdmaWx0ZXJlZDpoaXN0b3J5JzogJ3Jlc2V0JyxcclxuICAgICAgICAnaW1wb3J0ZWQ6aGlzdG9yeSc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5wYWdlJzogJ2dvdG8nLFxyXG4gICAgICAgICAgJy5wcmV2JzogJ3ByZXYnLFxyXG4gICAgICAgICAgJy5uZXh0JzogJ25leHQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbnVtYmVyUGFnZXM6IDEsXHJcbiAgICBudW1iZXJFbnRyaWVzOiAwLFxyXG4gICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICBwZXJQYWdlOiAxMCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVGcm9tU3RvcmFnZSgpO1xyXG4gICAgfSxcclxuICAgIGdvdG8oZSwgZWwpIHtcclxuICAgICAgY29uc3QgbmV3UGFnZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wYWdlJykgKiAxO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gbmV3UGFnZSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIG5ld1BhZ2UpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBuZXdQYWdlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcmV2KCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gMSkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCAtLXRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIG5leHQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSB0aGlzLm51bWJlclBhZ2VzKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsICsrdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgrK3RoaXMubnVtYmVyRW50cmllcyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgtLXRoaXMubnVtYmVyRW50cmllcyk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB0aGlzLnBlclBhZ2UgPSBzZXR0aW5ncy5oaXN0b3J5LnBwIHx8IDEwKVxyXG4gICAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4gdGhpcy51cGRhdGUoT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5sZW5ndGgpKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGwsIHNpbGVudCkge1xyXG4gICAgICB0aGlzLm51bWJlckVudHJpZXMgPSBsO1xyXG4gICAgICB0aGlzLm51bWJlclBhZ2VzID0gbCA/IE1hdGguY2VpbChsIC8gdGhpcy5wZXJQYWdlKSA6IDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy5udW1iZXJQYWdlcykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICAgIGlmICghc2lsZW50KSB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCB0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIHJlc2V0KGwpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgIHRoaXMudXBkYXRlKGwpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yLWxpc3QnKTtcclxuICAgICAgY29uc3QgbCA9IHRoaXMubnVtYmVyRW50cmllcztcclxuICAgICAgQXJyYXkuZnJvbSh1bC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlJykpLmZvckVhY2gobGkgPT4gbGkucmVtb3ZlKCkpO1xyXG5cclxuICAgICAgaWYgKGwgPCB0aGlzLnBlclBhZ2UgKyAxKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwID0gdGhpcy5jdXJyZW50UGFnZTtcclxuXHJcbiAgICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5udW1iZXJQYWdlcztcclxuICAgICAgY29uc3QgciA9IDcgLSAocGFnZXMgLSAxIC0gcCk7XHJcbiAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IG5leHQgPSB1bC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXh0JylbMF07XHJcbiAgICAgIGxldCBpID0gTWF0aC5tYXgoMiwgcCAtIDcpO1xyXG4gICAgICBpZiAociA+IDApIGkgPSBNYXRoLm1heCgyLCBNYXRoLm1pbihpLCBpIC0gcikpO1xyXG4gICAgICBjb25zdCBqID0gTWF0aC5taW4ocGFnZXMsIGkgKyAxNCkgKyAxO1xyXG5cclxuICAgICAgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgMSk7XHJcbiAgICAgIGZvciAoOyBpIDwgajsgaSsrKSB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCBpKTtcclxuICAgICAgaWYgKHBhZ2VzID4gaiAtIDEpIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIHBhZ2VzKTtcclxuXHJcbiAgICAgIHVsLmluc2VydEJlZm9yZShmcmFnLCBuZXh0KTtcclxuICAgIH0sXHJcbiAgICBhcHBlbmRCdXR0b24oZnJhZywgYikge1xyXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnLCBiKTtcclxuICAgICAgYnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGIpKTtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcclxuICAgICAgaWYgKGIgPT09IHRoaXMuY3VycmVudFBhZ2UpIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZnJhZy5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvdW50UGVyUGFnZShwKSB7XHJcbiAgICAgIHRoaXMucGVyUGFnZSA9IHA7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMubnVtYmVyRW50cmllcywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJ5OiB7XHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIGNyZWF0ZWQob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0LCAnZmlyc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgbGFzdChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdsYXN0Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCwgZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5zb3J0KChhLCBiKSA9PiAobmV3IERhdGUob2JqZWN0W2JdW2ZpZWxkXSkpIC0gKG5ldyBEYXRlKG9iamVjdFthXVtmaWVsZF0pKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIGF6KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHphKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCkucmV2ZXJzZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBfc29ydChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5zb3J0KChhLCBiKSA9PiBhLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5pbXBvcnQgX1NPUlQgZnJvbSAnLi9oaXN0b3J5LXNvcnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5JyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ29wZW5lZDp0YWInOiAnaW5pdCcsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICdyZW5kZXInLFxyXG4gICAgICAgICdmYWlsZWQ6c3luYy1lbnRyeSc6ICd1bmRvU3luY1RvZ2dsZScsXHJcbiAgICAgICAgJ3BhZ2luYXRlOmhpc3RvcnknOiAncGFnaW5hdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLmFjdGlvbi1idXR0b24nOiAnZGVsZWdhdGVCdXR0b25BY3Rpb24nLFxyXG4gICAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlU3dpdGNoJyxcclxuICAgICAgICAgICcubmFtZSc6ICdvcGVuJyxcclxuICAgICAgICAgICcuZWRpdCc6ICdlZGl0JyxcclxuICAgICAgICAgICcudmlldyc6ICd2aWV3JyxcclxuICAgICAgICAgICcjc2VhcmNoLXRvZ2dsZSc6ICd0b2dnbGVTZWFyY2gnLFxyXG4gICAgICAgICAgJyNyZW1vdmUtZmlsdGVyJzogJ3JlbW92ZUZpbHRlcicsXHJcbiAgICAgICAgICAnLnRhZ3NfX2l0ZW0nOiAnZmlsdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmNoZWNrbWFyay1hbGwnOiAnY2hlY2ttYXJrQWxsJyxcclxuICAgICAgICAgICcjc29ydC1lbnRyaWVzJzogJ3NvcnQnLFxyXG4gICAgICAgICAgJyNmaWx0ZXItZW50cmllcyc6ICdmaWx0ZXInLFxyXG4gICAgICAgICAgJyNlbnRyaWVzLXBlci1wYWdlJzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcbiAgICAgICAgICAnI3NldC12aWV3JzogJ3NldFZpZXcnLFxyXG4gICAgICAgICAgJyNhY3Rpb24nOiAnb25DaGFuZ2VBY3Rpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJy5zZWFyY2gtZW50cmllcyc6ICdzZWFyY2gnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuXHJcbiAgICBuYW1lczogW10sXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuICAgIGVudHJ5VG1wbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJ5LXRlbXBsYXRlJyksXHJcbiAgICBlbnRyaWVzQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpLFxyXG4gICAgcGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG4gICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgIHZpZXdNb2RlOiAnbGlzdCcsXHJcbiAgICBzZWFyY2hUZXJtOiAnJyxcclxuICAgIHNlYXJjaGVkOiBbXSxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZmlsdGVyZWQ6IGZhbHNlLFxyXG4gICAgZmlsdGVyT3B0aW9uc1NldDogZmFsc2UsXHJcblxyXG4gICAgaW5pdCh0YWIpIHtcclxuICAgICAgaWYgKHRhYiAhPT0gJ2hpc3RvcnknKSByZXR1cm47XHJcbiAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICB0aGlzLmZpbHRlck9wdGlvbnNTZXQgPSBmYWxzZTtcclxuICAgICAgdGhpcy50YWdzID0gW107XHJcbiAgICB9LFxyXG5cclxuICAgIFsnZGVsZXRlJ10obmFtZXMpIHtcclxuICAgICAgbGV0IG1zZyA9ICdkZWxfY29uZmlybSc7XHJcbiAgICAgIGxldCBsID0gbmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudHJpZXNbbmFtZXNbbF1dLmxvY2tlZCkge1xyXG4gICAgICAgICAgbXNnICs9ICdfbG9ja2VkJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKG1zZykpO1xyXG4gICAgICBpZiAoY29uZmlybWVkKSB0aGlzLmVtaXQoJ2RlbGV0ZTplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGNsZWFuKG5hbWVzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xlYW46ZW50cmllcycsIG5hbWVzKTtcclxuICAgIH0sXHJcbiAgICBkb3dubG9hZChuYW1lcywgdHlwZSwgc3BlYykge1xyXG4gICAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2Rvd25sb2FkX29wdGlvbicpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgICAgc2V0dGluZ3MgPSBzZXR0aW5ncy5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgdHlwZSA9IHNldHRpbmdzWzBdO1xyXG4gICAgICAgICAgc3BlYyA9IHNldHRpbmdzLmxlbmd0aCA9PT0gMiA/IHNldHRpbmdzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdqc29uJykgdGhpcy5leHBvcnQobmFtZXMpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdldERhdGEobmFtZXMsIHR5cGUsIHNwZWMpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IHRleHQgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSksXHJcbiAgICAgICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdUZXh0bWFya2VyICgnICsgbmFtZXMuam9pbignXycpICsgJykudHh0Jyk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyB0ZXh0O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBleHBvcnQobmFtZXMpIHtcclxuICAgICAgbGV0IGJhY2t1cCA9IHsgaGlzdG9yeTogeyBlbnRyaWVzOiB7fSB9IH0sXHJcbiAgICAgICAgICBlbnRyaWVzID0gYmFja3VwLmhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgbmFtZTtcclxuICAgICAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgICBlbnRyaWVzW25hbWVdID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrdXAgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoYmFja3VwKSk7XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJyxcclxuICAgICAgICAgICdUZXh0bWFya2VyLWJhY2t1cC0nICtcclxuICAgICAgICAgIChuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICdfJykpICtcclxuICAgICAgICAgICcuanNvbidcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBiYWNrdXA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHN5bmMobmFtZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdzeW5jOmVudHJ5JywgbmFtZVswXSwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XHJcbiAgICB9LFxyXG4gICAgdmlzaXQobmFtZXMpIHtcclxuICAgICAgdGhpcy5nZXRVUkxzKG5hbWVzKS50aGVuKHVybHMgPT4gdGhpcy5lbWl0KCdvcGVuOmVudHJpZXMnLCB1cmxzLCBuYW1lcykpO1xyXG4gICAgfSxcclxuICAgIG9wZW4oZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdvcGVuOmVudHJpZXMnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyksIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG4gICAgfSxcclxuICAgIGVkaXQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgbmV3TmFtZSA9IHdpbmRvdy5wcm9tcHQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfZWRpdCcpKTtcclxuICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICBjb25zdCBvbGROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICAgICAgICBjb25zdCBhcmVhID0gZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzd2l0Y2gtLXN5bmMnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID9cclxuICAgICAgICAgICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5hbWU6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHZpZXcoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd2aWV3OmVudHJ5JywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgdGFnKG5hbWVzLCB0YWcsIGZvcmNlKSB7XHJcbiAgICAgIGlmICghdGFnICYmICFmb3JjZSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBvID0geyBzeW5jOiBbXSwgbG9jYWw6IFtdIH07XHJcbiAgICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMub3JpZ0VudHJpZXNbbmFtZV0uc3luY2VkKSBvLnN5bmMucHVzaChuYW1lKTtcclxuICAgICAgICBlbHNlIG8ubG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZW1pdCgndGFnOmVudHJpZXMnLCBvLCB0YWcpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhZ3MobmFtZXMpIHtcclxuICAgICAgdGhpcy50YWcobmFtZXMsICcnLCB0cnVlKTtcclxuICAgIH0sXHJcbiAgICBwcm9jZXNzU2VsZWN0aW9uKCkge1xyXG4gICAgICBsZXQgY2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbnRyeS1jYjpjaGVja2VkJyksXHJcbiAgICAgICAgICBpID0gY2hlY2tlZC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAoIWkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGxldCBhY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uJykudmFsdWUsXHJcbiAgICAgICAgICBuYW1lcyA9IFtdO1xyXG5cclxuICAgICAgd2hpbGUoaS0tKSBuYW1lcy5wdXNoKGNoZWNrZWRbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcblxyXG4gICAgICBpZiAoYWN0aW9uID09PSAndGFnJykge1xyXG4gICAgICAgIGxldCB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykudmFsdWU7XHJcbiAgICAgICAgdGhpcy50YWcobmFtZXMsIHZhbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNwbGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWNpZmljYXRpb24nKS52YWx1ZS5zcGxpdCgnICcpLFxyXG4gICAgICAgICAgICB0eXBlID0gc3BsaXRbMF0sXHJcbiAgICAgICAgICAgIHNwZWMgPSBzcGxpdFsxXTtcclxuXHJcbiAgICAgICAgIXRoaXNbYWN0aW9uXSB8fCB0aGlzW2FjdGlvbl0obmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyRW50cmllcygpIHtcclxuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy5lbnRyeVRtcGwsXHJcbiAgICAgICAgICBjb250YWluZXIgPSB0aGlzLmVudHJpZXNDb250YWluZXIsXHJcbiAgICAgICAgICBlbnRyaWVzID0gdGhpcy5lbnRyaWVzLFxyXG4gICAgICAgICAgc2VhcmNoVGVybSA9IHRoaXMuc2VhcmNoVGVybSxcclxuICAgICAgICAgIHNlYXJjaFRlcm1MZW5ndGggPSBzZWFyY2hUZXJtID8gc2VhcmNoVGVybS5sZW5ndGggOiAwLFxyXG4gICAgICAgICAgc2VhcmNoZWQgPSAhIXNlYXJjaFRlcm0sXHJcbiAgICAgICAgICBzZWFyY2hlZEZ1bGxUZXh0ID0gdGhpcy5zZWFyY2hlZEZ1bGxUZXh0LFxyXG4gICAgICAgICAgbmFtZXMgPSBzZWFyY2hlZCA/IHRoaXMuc2VhcmNoZWQgOiB0aGlzLm5hbWVzLFxyXG4gICAgICAgICAgbCA9IHNlYXJjaGVkID8gbmFtZXMubGVuZ3RoIDogdGhpcy5wYWdlICogdGhpcy5wZXJQYWdlLFxyXG4gICAgICAgICAgaSA9IHNlYXJjaGVkID8gMCA6IGwgLSB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBjbG9uZSwgZW50cnksIG5hbWUsIG5hbWVGaWVsZCwgaW5wdXQsIGxhYmVsLCBpbmZvQnV0dG9uLCBkZXRhaWxzLCBzZWFyY2hSZXN1bHRzLFxyXG4gICAgICAgICAgYnV0dG9ucywgZWRpdCwgdmlldywgdGFncywgaW1tdXQsIGltbXV0RWwsIGxvY2tlZCwgbG9ja2VkRWwsIHRhZ0VsLCBiLCBqO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmlsdGVyZWQpIHtcclxuICAgICAgICBuYW1lcyA9IG5hbWVzLmZpbHRlcihuID0+ICEhZW50cmllc1tuXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGwgPSBNYXRoLm1pbihsLCBuYW1lcy5sZW5ndGgpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbWFyay1hbGwnKS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoIWwpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAoKGksIGopID0+IHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcyA/IG5hbWVzW2ldIDogbnVsbDtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllcyA/IGVudHJpZXNbbmFtZV0gOiBudWxsO1xyXG4gICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGVudHJ5Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjb3JyZWN0LW5hbWU6ZW50cnknLCBuYW1lLCBlbnRyeS5zeW5jZWQgPyAnc3luYycgOiAnbG9jYWwnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGFncyA9IGVudHJ5LnRhZyA/IGVudHJ5LnRhZy5zcGxpdCgnICcpIDogbnVsbDtcclxuICAgICAgICAgICAgICBsb2NrZWQgPSBlbnRyeS5sb2NrZWQ7XHJcbiAgICAgICAgICAgICAgaW1tdXQgPSBlbnRyeS5pbW11dDtcclxuICAgICAgICAgICAgICBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICAgICAgICAgIGNsb25lLmlkID0gJ2VudHJ5LScgKyBqO1xyXG4gICAgICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgbmFtZUZpZWxkID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdO1xyXG4gICAgICAgICAgICAgIGlucHV0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XHJcbiAgICAgICAgICAgICAgbGFiZWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGFiZWwnKVswXTtcclxuICAgICAgICAgICAgICBkZXRhaWxzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlscycpWzBdO1xyXG4gICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcmVzdWx0cycpWzBdO1xyXG4gICAgICAgICAgICAgIGJ1dHRvbnMgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWljay1hY3Rpb24nKTtcclxuICAgICAgICAgICAgICBlZGl0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpWzBdO1xyXG4gICAgICAgICAgICAgIHZpZXcgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWV3JylbMF07XHJcbiAgICAgICAgICAgICAgdGFnRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWdzJylbMF07XHJcbiAgICAgICAgICAgICAgbG9ja2VkRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2NrZWQnKVswXTtcclxuICAgICAgICAgICAgICBpbW11dEVsID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1tdXQnKVswXTtcclxuICAgICAgICAgICAgICBiID0gYnV0dG9ucy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgIHdoaWxlKGItLSkge1xyXG4gICAgICAgICAgICAgICAgICBidXR0b25zW2JdLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XHJcbiAgICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS11cmwnLCBlbnRyeS51cmwpO1xyXG4gICAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdlbnRyeS1jYic7XHJcbiAgICAgICAgICAgICAgaW5wdXQuaWQgPSAnZW50cnktY2ItJyArIGo7XHJcbiAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgICB2aWV3LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW50cnktY2ItJyArIGopO1xyXG5cclxuICAgICAgICAgICAgICBpZiAobG9ja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NrZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGltbXV0KSBpbW11dEVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAodGFncykge1xyXG4gICAgICAgICAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgdGFnRWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAndGFnc19faXRlbSc7XHJcbiAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhZykpO1xyXG4gICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RpdGxlX2ZpbHRlcicpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YWdFbC5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAvL2Nsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sb3N0ID8gZW50cnkubG9zdC5sZW5ndGggOiAwO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoZW50cnkuc3luY2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzd2l0Y2gtLXN5bmMnKVswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzZWFyY2hlZEZ1bGxUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsVGV4dFNlYXJjaFJlc3VsdHMgPSB0aGlzLmZ1bGxUZXh0U2VhcmNoUmVzdWx0c1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZnVsbFRleHRTZWFyY2hSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCByID0gMCwgcmVzLCBtYXJrLCBwb3MsIG1hcmtUZXh0LCBtYXJrVGV4dEVsLCBoaWdobGlnaHQsIHQxLCB0MiwgdDM7XHJcblxyXG4gICAgICAgICAgICAgICAgICBmb3IgKDsgciA8IGZ1bGxUZXh0U2VhcmNoUmVzdWx0cy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IGZ1bGxUZXh0U2VhcmNoUmVzdWx0c1tyXTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrID0gZW50cnkubWFya3NbcmVzLm1hcmtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHJlcy5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya1RleHQgPSBtYXJrLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya1RleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0MSA9IG1hcmtUZXh0LnN1YnN0cmluZyhNYXRoLm1heChwb3MtMTYsIDApLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQyID0gbWFya1RleHQuc3Vic3RyKHBvcywgc2VhcmNoVGVybUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdDMgPSBtYXJrVGV4dC5zdWJzdHIocG9zK3NlYXJjaFRlcm1MZW5ndGgsIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICB0MSA9IHQxID8gJy4uLiAnICsgdDEgOiB0MTtcclxuICAgICAgICAgICAgICAgICAgICB0MyA9IHQzID8gdDMgKyAnIC4uLicgOiB0MztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5jbGFzc05hbWUgPSAnaGlnaGxpZ2h0JztcclxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChoaWdobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodDMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChtYXJrVGV4dEVsKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFlbnRyeS51cmwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KCdFbnRyeSBpcyBtaXNzaW5nIFVSTCBmaWVsZCEnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJyb2tlbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJ5LScgKyBqKTtcclxuICAgICAgICAgICAgICBpZiAoYnJva2VuRWwpIHtcclxuICAgICAgICAgICAgICAgIGJyb2tlbkVsLmNsYXNzTGlzdC5hZGQoJ2VudHJ5LS1icm9rZW4nKTtcclxuICAgICAgICAgICAgICAgIGJyb2tlbkVsLnRpdGxlID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnJva2VuTmFtZUVsID0gYnJva2VuRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJyb2tlbk5hbWVFbCkge1xyXG4gICAgICAgICAgICAgICAgICBicm9rZW5OYW1lRWwuY2xhc3NMaXN0LnJlbW92ZSgnbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICBicm9rZW5OYW1lRWwuY2xhc3NMaXN0LmFkZCgnbmFtZS0tZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGVyckVsLmNsYXNzTmFtZSA9ICdlbnRyeS0tZXJyb3IgdS1jb2xvci0tcmVkJztcclxuICAgICAgICAgICAgICAgIGVyckVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdicm9rZW5fZW50cnknLCBuYW1lKSkpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVyckVsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShpLCBsLWktMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhZGVyRmllbGRzKGwpIHtcclxuICAgICAgY29uc3Qgbm9FbnRyaWVzSGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKTtcclxuICAgICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XHJcbiAgICAgIGNvbnN0IHBwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtcGVyLXBhZ2UnKTtcclxuICAgICAgY29uc3QgY2hlY2thbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbC1jb250YWluZXInKTtcclxuICAgICAgY29uc3QgbWV0aF8wID0gIWwgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzEgPSBsID4gMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMiA9IGwgPiAyID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8zID0gbCA+IDEwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgICAgIG5vRW50cmllc0hpbnQuY2xhc3NMaXN0W21ldGhfMF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc2VhcmNoLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc29ydC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGZpbHRlci5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvdW50LmNsYXNzTGlzdFttZXRoXzNdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdmlldy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNoZWNrYWxsLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLWNvdW50JykuaW5uZXJUZXh0ID0gbDtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBwID0gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMDtcclxuICAgICAgICBwcFNlbGVjdC52YWx1ZSA9IHBwO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRGaWx0ZXJPcHRpb25zKCkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJPcHRpb25zU2V0KSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBjb25zdCBhbGxUYWdzID0gW107XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgdGFncztcclxuXHJcbiAgICAgIHNlbGVjdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgdGFncyA9IGVudHJpZXNbbmFtZV0udGFnO1xyXG4gICAgICAgIHRhZ3MgPSB0YWdzID8gdGFncy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICBpZiAoIWFsbFRhZ3MuaW5jbHVkZXModGFnKSkgYWxsVGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYWxsVGFncy5sZW5ndGggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJykpIHtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpLCB7IGRpc2FibGVkOiB0cnVlLCBpZDogJ2ZpbHRlci1vcHQtbm90YWcnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5hZGRGaWx0ZXJPcHQodGFnLCB0YWcpKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRGaWx0ZXJPcHQodGFnLCB0ZXh0LCBhdHRycykge1xyXG4gICAgICBpZiAodGhpcy50YWdzLmluY2x1ZGVzKHRhZykpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgIG9wdC52YWx1ZSA9IHRhZztcclxuICAgICAgb3B0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYXR0cnMpIG9wdC5zZXRBdHRyaWJ1dGUoYSwgYXR0cnNbYV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy50YWdzLmxlbmd0aCAmJiB0YWcpIHtcclxuICAgICAgICBjb25zdCBub3RhZ0ZpbHRlck9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJyk7XHJcbiAgICAgICAgaWYgKG5vdGFnRmlsdGVyT3B0KSBzZWxlY3QucmVtb3ZlQ2hpbGQobm90YWdGaWx0ZXJPcHQpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnKSB0aGlzLnRhZ3MucHVzaCh0YWcpO1xyXG4gICAgfSxcclxuICAgIGdldFRleHQobmFtZXMsIHNwZWMpIHtcclxuICAgICAgbGV0IGFsbF9tYXJrc19wbHVzX21ldGEgPSBzcGVjID09PSAnK21ldGEnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbG9zdCA9IHNwZWMgPT09ICcrbG9zdCcsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyA9IHNwZWMgPT09ICcrbm90ZXMnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX2xvc3QgPSBzcGVjID09PSAnbG9zdCcsXHJcbiAgICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnLCAyLCAzXSxcclxuXHJcbiAgICAgICAgICByZWplY3QgPSBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhzcGVjKSA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBrZXkgIT0gc3BlYztcclxuICAgICAgICAgICAgfSA6IHNwZWMgPT09ICdjJyA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICAgICAgICB9IDogbnVsbCxcclxuXHJcbiAgICAgICAgICBuZXdMaW5lID0gJ1xcclxcbicsXHJcbiAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgbm90ZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlJyksXHJcbiAgICAgICAgICB0ZXh0ID0gJycsXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBub3RlVGV4dCwgZW50cnksIG1hcmtzLCBtYXJrLCBsb3N0LCBuYW1lLCBtLCBuLCBqO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgICAgICAgIGxvc3QgPSBlbnRyeS5sb3N0O1xyXG4gICAgICAgICAgbSA9IG1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgIG4gPSBsb3N0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbF9tYXJrc19sb3N0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhIHx8IGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IG5hbWUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgICdVUkw6ICcgKyBlbnRyeS51cmwgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdwYWdlX3RpdGxlJykgKyAnOiAnICsgZW50cnkudGl0bGUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjcmVhdGVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbGFzdF9tb2RpZmllZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBtYXJrc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlamVjdCAmJiByZWplY3QobWFyay5rZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICctLS0nICsgbmV3TGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgJiYgbWFyay5ub3RlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZS50ZXh0IHx8IG1hcmsubm90ZTtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAgJyArIG5vdGUgKyAnOicgKyBuZXdMaW5lICsgJyAgJyArIG5vdGVUZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuICAnKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFsbF9tYXJrc19sb3N0IHx8IGFsbF9tYXJrc19wbHVzX2xvc3QpIHtcclxuICAgICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsb3N0X21hcmtzJykgKyAnOicgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBsb3N0W2pdO1xyXG5cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAndGV4dCcpIHJldHVybiB0aGlzLmdldFRleHQobmFtZXMsIHNwZWMpO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgZGF0YSA9ICcnLFxyXG4gICAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGRhdGEgKz0gZW50cmllc1tuYW1lc1tpXV1bdHlwZV0gKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFVSTHMobmFtZXMpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICB1cmxzID0gW10sXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgdXJscy5wdXNoKGVudHJpZXNbbmFtZXNbaV1dLnVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB1cmxzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRlcm0gPSBlbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBzZWFyY2hUeXBlID0gZWwuZ2V0QXR0cmlidXRlID8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA6ICcnO1xyXG4gICAgICBjb25zdCBjb3VudFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCBjbGFzc01ldGggPSB0ZXJtID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10b2dnbGUnKTtcclxuICAgICAgdGhpcy5zZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIGNvdW50U2VsZWN0LmNsYXNzTGlzdFtjbGFzc01ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdG9nZ2xlLmNsYXNzTGlzdFtjbGFzc01ldGhdKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKSB7XHJcbiAgICAgIHRlcm0gPSB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyB0ZXJtIDogdGhpcy5zZWFyY2hUZXJtO1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvdW50Jyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGVybTtcclxuICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQnKTtcclxuICAgICAgICBpZiAoc2VhcmNoVHlwZSA9PT0gJ2Z1bGwtdGV4dCcpIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hGdWxsVGV4dCh0ZXJtKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hCeU5hbWUodGVybSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoQ291bnQuaW5uZXJUZXh0ID0gdGhpcy5zZWFyY2hlZC5sZW5ndGggfHwgJyc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQnlOYW1lKHRlcm0pIHtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICBsZXQgbCA9IG5hbWVzLmxlbmd0aCwgaSA9IDAsIG5hbWU7XHJcblxyXG4gICAgICBmb3IoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRlcm0pICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlYXJjaEZ1bGxUZXh0KHRleHQpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGxldCBuYW1lLCBtYXJrcywgaSwgbWFya1RleHQsIHBvcywgZm91bmQ7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHMgPSB7fTtcclxuXHJcbiAgICAgIGZvciAobmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgbWFya3MgPSBlbnRyaWVzW25hbWVdLm1hcmtzO1xyXG4gICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBtYXJrVGV4dCA9IG1hcmtzW2ldLnRleHQ7XHJcbiAgICAgICAgICBwb3MgPSBtYXJrVGV4dC50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXh0KTtcclxuICAgICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVzdWx0c1tuYW1lXSA9IHJlc3VsdHNbbmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIHJlc3VsdHNbbmFtZV0ucHVzaCh7IG1hcms6IGksIHBvcyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1lbnRyaWVzLS1uYW1lJykudmFsdWUgPSAnJztcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZW50cmllcy0tZnVsbC10ZXh0JykudmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXJtKSB0aGlzLnNlYXJjaChudWxsLCB7IHZhbHVlOiAnJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvdW50UGVyUGFnZShlLCBlbCkge1xyXG4gICAgICBsZXQgcCA9IHRoaXMucGVyUGFnZSA9IGVsLnZhbHVlICogMTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JywgcCk7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHNldFZpZXcoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpO1xyXG4gICAgICBjb25zdCB2YWwgPSBlbC52YWx1ZTtcclxuICAgICAgaWYgKHZhbCA9PT0gJ2xpc3QnKSB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIGVsc2UgdGFibGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsZWQtbGlzdCcpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTp2aWV3LXNldHRpbmcnLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHNldHVwVmlldyh2aWV3KSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXQtdmlldycpLnZhbHVlID0gdmlldztcclxuICAgICAgdGhpcy5zZXRWaWV3KG51bGwsIHsgdmFsdWU6IHZpZXcgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLnZhbHVlID09PSAndGFnJykgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykuZm9jdXMoKSwgMCk7XHJcbiAgICB9LFxyXG4gICAgc29ydChlLCBlbCkge1xyXG4gICAgICBsZXQgc29ydGVkID0gdGhpcy5zb3J0ZWQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c29ydC1zZXR0aW5nJywgc29ydGVkKTtcclxuICAgICAgdGhpcy5zZXR1cFNvcnQoc29ydGVkKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTb3J0KHNvcnRlZCkge1xyXG4gICAgICBzb3J0ZWQgPSBzb3J0ZWQuc3BsaXQoJy0nKTtcclxuICAgICAgdGhpcy5uYW1lcyA9IF9TT1JULmJ5W3NvcnRlZFswXV1bc29ydGVkWzFdXSh0aGlzLm9yaWdFbnRyaWVzKTtcclxuICAgICAgdGhpcy5zb3J0U2VhcmNoUmVzdWx0cygpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBmaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZWwubm9kZU5hbWUgPT09ICdTUEFOJyA/IGVsLmZpcnN0Q2hpbGQuZGF0YSA6IGVsLnZhbHVlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgY29uc3QgZmlsdGVyZWRFbnRyaWVzID0ge307XHJcbiAgICAgIGxldCBlbnRyeSwgcngsIGMgPSAwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICByeCA9IG5ldyBSZWdFeHAoJ14nK2ZpbHRlcisnJHxeJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJyQnLCAnZycpO1xyXG4gICAgICAgIGlmICgoZmlsdGVyICYmIGVudHJ5LnRhZyAmJiBlbnRyeS50YWcuc2VhcmNoKHJ4KSAhPT0gLTEpIHx8ICghZW50cnkudGFnICYmIGZpbHRlciA9PSAnJykpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgYysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBmaWx0ZXJlZEVudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgYyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCB0aGlzLm5hbWVzLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgc29ydFNlYXJjaFJlc3VsdHMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWFyY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBhID0gbmFtZXMuaW5kZXhPZihhKTtcclxuICAgICAgICBiID0gbmFtZXMuaW5kZXhPZihiKTtcclxuICAgICAgICBpZiAoYSA9PSBiKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNoZWNrbWFya0FsbChlLCBlbCkge1xyXG4gICAgICBsZXQgZGlyZWN0bHkgPSB0eXBlb2YgZWwgPT09ICdib29sZWFuJyxcclxuICAgICAgICAgIGNoZWNrZWQgPSBkaXJlY3RseSA/IGVsIDogZWwuY2hlY2tlZCxcclxuICAgICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgICBpID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIGlucHV0c1tpXS5jaGVja2VkID0gY2hlY2tlZDtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCkge1xyXG4gICAgICBsZXQgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLFxyXG4gICAgICAgICAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZSA/IFtuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb1N5bmNUb2dnbGUobmFtZSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLS1zeW5jW2RhdGEtbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc29ydGVkIHx8IHRoaXMuc29ydGVkLFxyXG4gICAgICAgICAgICB2aWV3ID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnZpZXcgfHwgdGhpcy52aWV3TW9kZSxcclxuICAgICAgICAgICAgbDtcclxuICAgICAgICB0aGlzLnNvcnRlZCA9IHNvcnRlZDtcclxuICAgICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBWaWV3KHZpZXcpO1xyXG4gICAgICAgIGwgPSB0aGlzLm5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFNlYXJjaCgpLnRvZ2dsZUhlYWRlckZpZWxkcyhsKS50aGVuKCgpID0+IHRoaXMucmVuZGVyRW50cmllcygpLnNldEZpbHRlck9wdGlvbnMoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhZ2luYXRlKHBhZ2UpIHtcclxuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnlbZGF0YS1uYW1lPVwiJyArIGVudHJ5Lm5hbWUgKyAnXCJdJyk7XHJcblxyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gZW50cnkuZmlyc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgLy9lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydCcpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAnc3luY2VkOmVudHJ5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5pbXBvcnQtYnV0dG9uJzogJ3RyaWdnZXJGaWxlSW5wdXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWZpbGUnOiAnaGFuZGxlRmlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJy5leHBvcnQtYnV0dG9uJzogJ3VwZGF0ZUV4cG9ydE5hbWUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUV4cG9ydExpbmtzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGltcG9ydDogZnVuY3Rpb24oc3RvcmVTdHJpbmcsIHR5cGUpIHtcclxuICAgICAgdmFyIHBhcnNlZFN0cmluZztcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyc2VkU3RyaW5nID0gSlNPTi5wYXJzZShzdG9yZVN0cmluZyk7XHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3BhcnNlJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyc2VkU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbXBvcnQ6c3RvcmFnZScsIHBhcnNlZFN0cmluZywgdHlwZSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5RmFpbHVyZSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHJpZ2dlckZpbGVJbnB1dDogZnVuY3Rpb24oZSwgZWwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC0tJyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykpLmNsaWNrKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRmlsZShlLCBlbCkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKSxcclxuICAgICAgICAgIGZpbGUgPSBlbC5maWxlc1swXSxcclxuICAgICAgICAgIHNpemUgPSBmaWxlLnNpemUgLyAxMDAwMDAwLFxyXG4gICAgICAgICAgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksXHJcbiAgICAgICAgICBtb2QgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHNpemUgPiA1MClcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemUnKSk7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N5bmMnICYmIHNpemUgPiAwLjA5OSlcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemVfc3luYycpKTtcclxuXHJcbiAgICAgIGlmIChmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKSAhPT0gJ2pzb24nKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfZm9ybWF0JykpO1xyXG5cclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG1vZC5pbXBvcnQoZS50YXJnZXQucmVzdWx0LCB0eXBlKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KShmaWxlKTtcclxuXHJcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgfSxcclxuICAgIGRpc3BsYXlGYWlsdXJlKHJlYXNvbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWVycm9yJykuaW5uZXJUZXh0ID0gcmVhc29uO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVFeHBvcnRMaW5rcygpIHtcclxuICAgICAgY29uc3QgbG9jYWxEYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtbG9jYWwnKTtcclxuICAgICAgY29uc3Qgc3luY2VkRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LXN5bmNlZCcpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbG9jYWxfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbG9jYWxEYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ3N5bmNlZF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBzeW5jZWREYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFeHBvcnROYW1lKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgJ1RleHRtYXJrZXItZGF0YS0nICtcclxuICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICsgJy0nICtcclxuICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgJy5qc29uJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ2xvZydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcjY2xlYXItbG9ncyc6ICdjbGVhcidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5sb2coKTtcclxuICAgIH0sXHJcbiAgICBsb2coKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvZ3MnKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICAgIGxvZ3MgPSBsb2dzIHx8IFtdO1xyXG4gICAgICAgIGxldCB0YWJsZUJvZHkgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdLFxyXG4gICAgICAgICAgICBsID0gbG9ncy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICAgIHRyLCB0ZF9kYXRlLCB0ZF9tc2csIG5vZGVfZGF0ZSwgbm9kZV9tc2csIGxvZywgdGltZSwgbXNnLCByZWFzb247XHJcblxyXG4gICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbG9ncycpO1xyXG4gICAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICAgIG1zZyA9IGxvZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdudW1iZXInKSBtc2cgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShfTE9HX0tFWVMuZ2V0S2V5QnlWYWx1ZShsb2dbMV0pKTtcclxuICAgICAgICAgICAgLy8nbnUnLHt5ZWFyOidudW1lcmljJyxtb250aDonMi1kaWdpdCcsZGF5OicyLWRpZ2l0Jyxob3VyOidudW1lcmljJyxzZWNvbmQ6J251bWVyaWMnLG1pbnV0ZTonbnVtZXJpYyd9XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZygobmV3IERhdGUobG9nWzBdKSkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgdGRfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIHRkX21zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIG5vZGVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpbWUpO1xyXG4gICAgICAgICAgICBub2RlX21zZyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1zZyk7XHJcblxyXG4gICAgICAgICAgICB0ZF9kYXRlLmFwcGVuZENoaWxkKG5vZGVfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChub2RlX21zZyk7XHJcbiAgICAgICAgICAgIGlmIChsb2dbMl0pIHtcclxuICAgICAgICAgICAgICByZWFzb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAvL3JlYXNvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsb2dbMl0pKTtcclxuICAgICAgICAgICAgICByZWFzb24uaW5uZXJUZXh0ID0gbG9nWzJdO1xyXG4gICAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX2RhdGUpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9tc2cpO1xyXG4gICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlQm9keS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChmcmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdub2xvZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFyOmxvZ3MnKTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUktFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleSwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcblxyXG4gICAgdGhpcy5zdHlsZXMgPSB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogY3VzdG9tQmdDb2xvcixcclxuICAgICAgJ2NvbG9yJzogdW5kZWZpbmVkLFxyXG4gICAgICAnYm9yZGVyLWJvdHRvbSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC13ZWlnaHQnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXN0eWxlJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1kZWNvcmF0aW9uJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1zaGFkb3cnOiB1bmRlZmluZWRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaGFkb3cgPSB7XHJcbiAgICAgIHg6ICcxcHgnLFxyXG4gICAgICB5OiAnMXB4JyxcclxuICAgICAgYmx1cjogJzFweCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmluamVjdCgpLnByZXZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ21hcmtlcnMnKS50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSBtYXJrZXJzW3RoaXMua2V5XTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZSA9IG1hcmtlciA/IG1hcmtlci5zdHlsZSA6IG51bGw7XHJcblxyXG4gICAgICB0aGlzLmF1dG9ub3RlID0gbWFya2VyICYmIG1hcmtlci5hdXRvbm90ZSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghZXhpc3RpbmdTdHlsZSkgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc3R5bGUgPSBleGlzdGluZ1N0eWxlO1xyXG5cclxuICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgIGkgPSBzdHlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgc3R5bGUsIHN0eWxlU3BsaXQsIHRleHRTaGFkb3c7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZXNbaV07XHJcbiAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICBzdHlsZVNwbGl0ID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgIHRoaXMuc3R5bGVzW3N0eWxlU3BsaXRbMF1dID0gc3R5bGVTcGxpdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGV4dFNoYWRvdyA9IHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddKSAmJiB0ZXh0U2hhZG93ICE9PSAnbm9uZScpIHtcclxuICAgICAgICBsZXQgc2hhZG93U3BsaXQgPSB0ZXh0U2hhZG93LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueCA9IHNoYWRvd1NwbGl0WzBdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnkgPSBzaGFkb3dTcGxpdFsxXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5ibHVyID0gc2hhZG93U3BsaXRbMl07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuY29sb3IgPSBzaGFkb3dTcGxpdFszXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGluamVjdCgpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIHN0eWxlcyA9IHRoaXMuc3R5bGVzLFxyXG4gICAgICAgIGJnSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3InKSxcclxuICAgICAgICBjb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3InKSxcclxuICAgICAgICBib3JkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3InKSxcclxuICAgICAgICBhdXRvbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJyksXHJcbiAgICAgICAgYmcgPSBzdHlsZXNbJ2JhY2tncm91bmQtY29sb3InXSxcclxuICAgICAgICBjb2xvciA9IHN0eWxlc1snY29sb3InXSxcclxuICAgICAgICBib3JkZXIgPSBzdHlsZXNbJ2JvcmRlci1ib3R0b20nXSxcclxuICAgICAgICBhdXRvbm90ZUNvbG9yID0gdGhpcy5hdXRvbm90ZSB8fCAnJyxcclxuICAgICAgICBzaGFkb3csIHNoYWRvd1NlbGVjdCwgaTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA9IHRoaXMuYXV0b25vdGU7XHJcbiAgICBhdXRvbm90ZUlucHV0LnZhbHVlID0gYXV0b25vdGVDb2xvciB8fCAneWVsbG93JztcclxuICAgIGF1dG9ub3RlSW5wdXQuZGlzYWJsZWQgPSAhYXV0b25vdGVDb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJnO1xyXG4gICAgYmdJbnB1dC52YWx1ZSA9IGJnIHx8ICcjZmZmZmZmJztcclxuICAgIGJnSW5wdXQuZGlzYWJsZWQgPSAhYmc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWNvbG9yO1xyXG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yIHx8ICcjMDAwMDAwJztcclxuICAgIGNvbG9ySW5wdXQuZGlzYWJsZWQgPSAhY29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYm9yZGVyO1xyXG4gICAgYm9yZGVySW5wdXQudmFsdWUgPSBib3JkZXIgfHwgJzFweCBzb2xpZCAjZmYwMDAwJztcclxuICAgIGJvcmRlcklucHV0LmRpc2FibGVkID0gIWJvcmRlcjtcclxuXHJcbiAgICBbJ2ZvbnQtc2l6ZScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ3RleHQtZGVjb3JhdGlvbiddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb3ApLnZhbHVlID0gc3R5bGVzW3Byb3BdIHx8ICdkZWZhdWx0JztcclxuICAgIH0pO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3cnKTtcclxuICAgIHNoYWRvdyA9IHN0eWxlc1sndGV4dC1zaGFkb3cnXTtcclxuICAgIGkgPSAhc2hhZG93ID8gMCA6IHNoYWRvdyA9PT0gJ25vbmUnID8gMiA6IDE7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgc2hhZG93U2VsZWN0LmNoaWxkcmVuW2ldLmNsaWNrKCk7XHJcblxyXG4gICAgWyd4JywgJ3knLCAnYmx1cicsICdjb2xvciddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdy0nICsgcHJvcCkudmFsdWUgPSBtYXJrZXIuc2hhZG93W3Byb3BdLnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHByZXZpZXcoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpLnN0eWxlID0gdGhpcy5zdHlsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKGVsKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGVsLmNsYXNzTGlzdCxcclxuICAgICAgICBwcm9wID0gZWwubmFtZSxcclxuICAgICAgICB2YWw7XHJcblxyXG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2Nzcy1jb2xvcicpKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHByb3AgPT09ICdib3JkZXItYm90dG9tJyA/ICcxcHggc29saWQgJyArIHZhbCA6IHZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93JykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgICBjYXNlICdub25lJzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9ICdub25lJzsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkZWZhdWx0JzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHVuZGVmaW5lZDsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzaGFkb3cnOiBtYXJrZXIuc2V0U2hhZG93KCk7IGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXZhbHVlJykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctcHgtdmFsdWUnKSlcclxuICAgICAgICAgIHZhbCArPSAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRvd1twcm9wXSA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldFNoYWRvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wID09PSAnYm9yZGVyLWJvdHRvbScpIHtcclxuICAgICAgdmFsID0gJzFweCBzb2xpZCAnICsgZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3R5bGUoKS5wcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGlzVmFsaWQocHJvcCwgdmFsKSB7XHJcbiAgICBsZXQgdmFsaWQ7XHJcblxyXG4gICAgc3dpdGNoKHByb3ApIHtcclxuICAgICAgY2FzZSAnYmFja2dyb3VuZC1jb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvcmRlci1ib3R0b20nOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6IHZhbGlkID0gL15bMC05XXsxLDJ9cHgkLy50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LWZhbWlseSc6IHZhbGlkID0gL15bYS16LFxccy1dezUsNDB9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtd2VpZ2h0JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zdHlsZSc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtZGVjb3JhdGlvbic6IHZhbGlkID0gL15bYS16LV17NywxMn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1zaGFkb3cnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd4JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JsdXInOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcbiAgc2V0U2hhZG93KCkge1xyXG4gICAgdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB0aGlzLnNoYWRvdy54ICsgJyAnICsgdGhpcy5zaGFkb3cueSArICcgJyArIHRoaXMuc2hhZG93LmJsdXIgKyAnICcgKyB0aGlzLnNoYWRvdy5jb2xvcjtcclxuICB9XHJcbiAgc2V0U3R5bGUoKSB7XHJcbiAgICBsZXQgc3R5bGUgPSAnJywgdmFsO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zdHlsZXMpIHtcclxuICAgICAgdmFsID0gdGhpcy5zdHlsZXNbaV07XHJcbiAgICAgIGlmICh2YWwpIHN0eWxlICs9IGkgKyAnOicgKyB2YWwgKyAnOyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbCxcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ2xpJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgICAnLm5hdml0ZW0nOiAndG9nZ2xlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIHBhZ2VOYXY6IG51bGwsXHJcbiAgICBjdXJyZW50OiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnBhZ2VOYXYgPSBlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGFnZS1uYXYnKTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLm9wZW4oY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykgfHwgdGhpcy5jdXJyZW50ID09IGVsKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50KSB0aGlzLmNsb3NlKHRoaXMuY3VycmVudCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oZWwpO1xyXG4gICAgfSxcclxuICAgIG9wZW4oZWwpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbmVkOnRhYicsIHRhcmdldElkKTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gZWw7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VOYXYpIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9ICdUZXh0bWFya2VyIC0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHRhcmdldElkKTtcclxuICAgIH0sXHJcbiAgICBjbG9zZShlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUktFUiBmcm9tICcuL21hcmtlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJzogJ3Nob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcycsXHJcbiAgICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICd1cGRhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jc3MnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAgICAgJyNjdXN0b21pemVkLWtleSc6ICd1cGRhdGVNYXJrZXInLFxyXG4gICAgICAgICAgJyNhZGQta2V5JzogJ2FkZE1hcmtlcicsXHJcbiAgICAgICAgICAnI3JlbW92ZS1rZXknOiAncmVtb3ZlTWFya2VyJyxcclxuICAgICAgICAgICcubWFyay1vcHQnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICAgICAnLnNjLWNiJzogJ3RvZ2dsZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2hvcnRjdXQtc2VsZWN0JzogJ2NoYW5nZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2F2ZS1vcHQnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICAgICAnLm5hbWluZy1vcHQnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgICAgICcjbm90ZXMtbmV3JzogJ3RvZ2dsZVNhdmVOb3RlT3B0JyxcclxuICAgICAgICAgICcuY3VzdG9taXplLXF1aWNrYnV0dG9ucyc6ICdjaGFuZ2VRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmRvd25sb2FkLXF1aWNrYnV0dG9uLW9wdCc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmN0bS1jYic6ICd0b2dnbGVDdG0nLFxyXG4gICAgICAgICAgJy5ub3Rlcy1jYic6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgICAnLm1pc2MtY2InOiAndG9nZ2xlTWlzYycsXHJcbiAgICAgICAgICAnLnRiYnBvd2VyLW9wdCc6ICd0b2dnbGVUQkJQb3dlck9wdCcsXHJcbiAgICAgICAgICAnLnRtdWlwb3MnOiAnY2hhbmdlVG11aVBvc2l0aW9uT3B0JyxcclxuICAgICAgICAgICcjcHJpdmF0ZS1zYXZlJzogJ3RvZ2dsZVByaXZTYXZlJyxcclxuICAgICAgICAgICcjYXV0by1ub3RlJzogJ3RvZ2dsZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaW1tdXQnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAgICAgJyNkcm9wLWxvc3Nlcyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgICAgICcjYXV0b25vdGUtY29sb3InOiAnY2hhbmdlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpZ25vcmUtaGFzaCc6ICdjaGFuZ2VIYXNoT3B0JyxcclxuICAgICAgICAgICcjYWRkb24tYXV0b2NzJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcbiAgICAgICAgICAnI2FkZG9uLWlmcmFtZXMnOiAndG9nZ2xlSUZyYW1lT3B0JyxcclxuICAgICAgICAgICcjbWlzYy1ub3RlZm9udHNpemUnOiAnY2hhbmdlTm90ZXNGb250U2l6ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnI2N1c3RvbS1zZWFyY2gnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgICAgICcuY3VzdG9tLXNlYXJjaC1pbnB1dCc6ICdoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MnLFxyXG4gICAgICAgICAgJyNkaXNhYmxlLW5vdGlmcyc6ICdkaXNhYmxlQWxsTm90aWZpY2F0aW9ucydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGxvd2VkS2V5czogJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG4gbyBwIHEgciBzIHQgdSB2IHggeSB6IDAgMSA0IDUgNiA3IDggOSBlbnRlciAtICsnLnNwbGl0KCcgJyksXHJcbiAgICBhbGxvd2VkU2hvcnRjdXRzOiBbJycsICdjdHJsS2V5JywgJ3NoaWZ0S2V5JywgJ2FsdEtleScsICdjdHJsS2V5LXNoaWZ0S2V5JywgJ2N0cmxLZXktYWx0S2V5JywgJ3NoaWZ0S2V5LWFsdEtleScsICdtZXRhS2V5JywgJ21ldGFLZXktc2hpZnRLZXknLCAnbWV0YUtleS1hbHRLZXknXSxcclxuICAgIGFsbG93ZWRRdWlja2J1dHRvbk9wdHM6IFsndGl0bGUnLCAndXJsJywgJ3RleHQnLCAndGV4dCArbWV0YScsICd0ZXh0ICtub3RlcycsICd0ZXh0ICtsb3N0JywgJ3RleHQgbScsICd0ZXh0IDInLCAndGV4dCAzJywgJ3RleHQgYycsICd0ZXh0IGxvc3QnXSxcclxuICAgIG1hcmtlcktleXM6IFsnbScsICcyJywgJzMnXSxcclxuICAgIGN1c3RvbU1hcmtlcktleXM6IFtdLFxyXG4gICAgbWFya2VyOiBudWxsLFxyXG4gICAgY3VzdG9tU2VhcmNoOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH0sXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycyxcclxuICAgICAgICAgICAgbWFya2VyS2V5cyA9IHRoaXMubWFya2VyS2V5cyxcclxuICAgICAgICAgICAgY3VzdG9tTWFya2VyS2V5cyA9IHRoaXMuY3VzdG9tTWFya2VyS2V5cyxcclxuICAgICAgICAgICAgaSwga2V5O1xyXG5cclxuICAgICAgICBmb3IgKGtleSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICBpID0ga2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICBpZiAoIW1hcmtlcktleXMuaW5jbHVkZXMoaSkgJiYgIWN1c3RvbU1hcmtlcktleXMuaW5jbHVkZXMoaSkpXHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTWFya2VyS2V5cy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zKClcclxuICAgICAgICAgICAgLnVwZGF0ZU1hcmtlcih0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJylcclxuICAgICAgICAgICAgLmluamVjdFNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20ta2V5JykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbicpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzID0gW107XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKS5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlTWFya2VyKGUsIGVsLCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbCA/IGVsLnZhbHVlIDogZSA/IGUgOiB0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJztcclxuXHJcbiAgICAgIHRoaXMubWFya2VyID0gbmV3IF9NQVJLRVIoa2V5LCBjdXN0b21CZ0NvbG9yKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgICAgIGxldCBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuXHJcbiAgICAgICAgICBhbGxvd2VkS2V5cyA9IHRoaXMuYWxsb3dlZEtleXMsXHJcbiAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG5cclxuICAgICAgICAgIGEgPSBhbGxvd2VkS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBjID0gY3VzdG9tTWFya2VyS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuXHJcbiAgICAgICAgICBmcmFnbWVudDEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcblxyXG4gICAgICAgICAgb3B0aW9uLCBpY29uLCB2YWwsIFZhbDtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gY3VzdG9tTWFya2VyS2V5c1tpXTtcclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBWYWwgPSBWYWwgPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBWYWw7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQxLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcblxyXG4gICAgICAgIGZyYWdtZW50My5hcHBlbmRDaGlsZChvcHRpb24uY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50Mi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgICAgaWNvbi5pZCA9ICdjdXN0b20ta2V5LScgKyB2YWw7XHJcbiAgICAgICAgaWNvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDEpO1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChmcmFnbWVudDIpO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQzKTtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBhbGxvd2VkS2V5c1tpXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyh2YWwpKVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG5cclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFkZEtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDQpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgICAgbGV0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cyxcclxuICAgICAgICAgIGksIHNjQ2hlY2tib3gsIHNjU2VsZWN0LCBjbUNoZWNrYm94LCBzYztcclxuXHJcbiAgICAgIGZvciAoaSBpbiBzaG9ydGN1dHMpIHtcclxuICAgICAgICBzYyA9IHNob3J0Y3V0c1tpXTtcclxuICAgICAgICBzY0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjLScgKyBpKTtcclxuICAgICAgICBzY1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC1zZWxlY3QtJyArIGkpO1xyXG4gICAgICAgIGNtQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY20tJyArIGkpO1xyXG5cclxuICAgICAgICBpZiAoc2NDaGVja2JveCkgc2NDaGVja2JveC5jaGVja2VkID0gc2NbMV07XHJcbiAgICAgICAgaWYgKHNjU2VsZWN0KSBzY1NlbGVjdC52YWx1ZSA9IHNjWzBdO1xyXG4gICAgICAgIGlmIChjbUNoZWNrYm94KSBjbUNoZWNrYm94LmNoZWNrZWQgPSBzY1syXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzLmhpc3RvcnksXHJcbiAgICAgICAgICBzYXZlT3B0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzYXZlLW9wdCcpO1xyXG5cclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncy5hdXRvc2F2ZSkgc2F2ZU9wdHNbMF0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGVsc2Ugc2F2ZU9wdHNbMV0uY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS0nICsgaGlzdG9yeVNldHRpbmdzLm5hbWluZykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcml2YXRlLXNhdmUnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVJblByaXY7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbW11dCcpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuaW1tdXQ7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wLWxvc3NlcycpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuZHJvcExvc3NlcztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLW5ldycpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3Muc2F2ZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZ25vcmUtaGFzaCcpLmNoZWNrZWQgPSAhaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2g7XHJcblxyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzLmRvd25sb2FkID09PSAnanNvbicpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWQtanNvbicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC10ZXh0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrYnV0dG9uLWRvd25sb2FkLXNlbGVjdCcpLnZhbHVlID0gaGlzdG9yeVNldHRpbmdzLmRvd25sb2FkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbWlzY1NldHRpbmdzID0gc2V0dGluZ3MubWlzYztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLW1ldGhvZC0tJyArIG1pc2NTZXR0aW5ncy5tYXJrbWV0aG9kKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2MtYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmJtaWNvbjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZWljb24nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVpY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3Rlb25jbGljaycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZW9uY2xpY2s7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGV0cmFuc3AnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGV0cmFuc3A7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVwbGFpbnZpZXcnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVmb250c2l6ZScpLnZhbHVlID0gbWlzY1NldHRpbmdzLm5vdGVmb250c2l6ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXJlc3RvcmF0aW9uLWZhaWx1cmUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmZhaWx1cmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tc3VjY2VzcycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Muc3VjY2Vzc05vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1wYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnBibU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1lcnJvcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZXJyb3JOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlwLW5vdGUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnZpcE5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdGFydCcpLnZhbHVlID0gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaCA/IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2hbMF0gOiB0aGlzLmN1c3RvbVNlYXJjaDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLWVuZCcpLnZhbHVlID0gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaCA/IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2hbMV0gOiAnJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RtdWlwb3MtLW5vdGVpY29uJykudmFsdWUgPSBtaXNjU2V0dGluZ3MudG11aXBvcztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RtdWlwb3MtLWJtaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcblxyXG4gICAgICBpZiAobWlzY1NldHRpbmdzLnRiYnBvd2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9mZicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkb24tYXV0b2NzJykuY2hlY2tlZCA9IHNldHRpbmdzLmFkZG9uLmF1dG9jcztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZG9uLWlmcmFtZXMnKS5jaGVja2VkID0gc2V0dGluZ3MuYWRkb24uaWZyYW1lcztcclxuICAgIH0sXHJcbiAgICBzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0sXHJcbiAgICBoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTdHlsZShlLCBlbCkge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLm1hcmtlci51cGRhdGUoZWwpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c3R5bGUtc2V0dGluZycsIG1hcmtlci5rZXksIG1hcmtlci5zdHlsZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQXV0b05vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gZWwuY2hlY2tlZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvbm90ZS1jb2xvcicpLnZhbHVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLCB0aGlzLm1hcmtlci5rZXksIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQXV0b05vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tbm90ZScpLmNoZWNrZWQgPyBlbC52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUhhc2hPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aGFzaC1zZXR0aW5nJywgIWVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUltbXV0T3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmltbXV0LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVEcm9wTG9zc2VzT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9jc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvY3Mtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUlGcmFtZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTppZnJhbWUtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGFkZE1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICByZW1vdmVLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uID0gZWwuY2hpbGRyZW5bZWwuc2VsZWN0ZWRJbmRleF0sXHJcbiAgICAgICAgICBjbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICAgICAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICBiZ0NvbG9yID0gdGhpcy5nZXRSYW5kb21MaWdodENvbG9yKCk7XHJcblxyXG4gICAgICBpZiAoIWtleSB8fCByZW1vdmVLZXlTZWxlY3QuY2hpbGRyZW4ubGVuZ3RoID49IDEyIHx8IHRoaXMuYWxsb3dlZEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAga2V5U2VsZWN0LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgY2xvbmUuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgIGljb24uaWQgPSAnY3VzdG9tLWtleS0nICsga2V5O1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgaWNvbi5pbm5lclRleHQgPSBrZXkgPT09ICdlbnRlcicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBrZXkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlTWFya2VyKGtleSwgbnVsbCwgYmdDb2xvcik7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2FkZDpjdXN0b20tbWFya2VyJywga2V5LCAnYmFja2dyb3VuZC1jb2xvcjonICsgYmdDb2xvciArICc7Jyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya2VyKGUsIGVsKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbC52YWx1ZSxcclxuICAgICAgICAgIGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIGFkZEtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQta2V5JyksXHJcbiAgICAgICAgICBvcHRpb247XHJcblxyXG4gICAgICBpZiAoIWtleSB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICBhZGRLZXlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgYWRkS2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICBlbC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgIGtleVNlbGVjdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbi0nICsga2V5KVswXS5yZW1vdmUoKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXktJyArIGtleSkucmVtb3ZlKCk7XHJcbiAgICAgIGtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlTWFya2VyKCdtJyk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZTpjdXN0b20tbWFya2VyJywga2V5KTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VNYXJrTWV0aG9kKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNob3J0Y3V0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICBpZiAoIXRoaXMuYWxsb3dlZFNob3J0Y3V0cy5pbmNsdWRlcyhlbC52YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ3RtKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOmN0bS1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2F2ZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLCAhIWVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVQcml2U2F2ZShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpwcml2LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VOYW1pbmdPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2F2ZU5vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlUXVpY2tidXR0b25PcHQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRRdWlja2J1dHRvbk9wdHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHN3aXRjaFF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgY29uc3QgdmFsID0gdHlwZSA9PT0gJ2pzb24nID8gdHlwZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja2J1dHRvbi1kb3dubG9hZC1zZWxlY3QnKS52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTm90ZXMoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlQWxsTm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgY29uc3QgY2JzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1uZXcnKV0uY29uY2F0KEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm90ZXMtY2InKSkpO1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAoIWNicy5sZW5ndGgpIHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICBjYnMucG9wKCkuY2xpY2soKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVNaXNjKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRCQlBvd2VyT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9ICEhKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKjEpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJywgZWwubmFtZSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VUbXVpUG9zaXRpb25PcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWlzYy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG11aXBvcycpKS5mb3JFYWNoKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUgPSBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTm90ZXNGb250U2l6ZShlLCBlbCkge1xyXG4gICAgICBpZiAoZWwudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDdXN0b21TZWFyY2goZSwgZWwpIHtcclxuICAgICAgdGhpcy5oaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKTtcclxuICAgICAgY29uc3QgaW5wMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdGFydCcpO1xyXG4gICAgICBjb25zdCBpbnAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLWVuZCcpO1xyXG4gICAgICBjb25zdCBwYXJ0MSA9IGlucDEudmFsdWU7XHJcbiAgICAgIGNvbnN0IHBhcnQyID0gaW5wMi52YWx1ZTtcclxuICAgICAgaWYgKCFwYXJ0MSAmJiAhcGFydDIpIHtcclxuICAgICAgICBpbnAxLnZhbHVlID0gdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgICAgaW5wMi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLCBbcGFydDEsIHBhcnQyXSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRSYW5kb21MaWdodENvbG9yKCkge1xyXG4gICAgICByZXR1cm4gJyMnICsgTWF0aC5mbG9vcigoMC44ICsgTWF0aC5yYW5kb20oKSAqIDAuMTc1KSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZmFpbGVkOnRvZ2dsZS1zeW5jJzogJ3VuZG8nXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLXNldHRpbmdzJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0taGlzdG9yeScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tcGFnZW5vdGVzJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfcGFnZW5vdGVzID09PSAnc3luYycpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6c3luYycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bmRvKGZpZWxkKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tJyArIGZpZWxkKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBfVE9HR0xFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUsIGZhbHNlKTtcclxuICB9XHJcbiAgdG9nZ2xlKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgbGV0IGRhdGFUYXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSxcclxuICAgICAgICB0YXJnZXRzID0gZGF0YVRhcmdldCA/IGRhdGFUYXJnZXQuc3BsaXQoJyAnKSA6IG51bGwsXHJcbiAgICAgICAgZGF0YVRvZ2dsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpLFxyXG4gICAgICAgIHJvbGVzID0gZGF0YVRvZ2dsZSA/IGRhdGFUb2dnbGUuc3BsaXQoJyAnKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKHJvbGVzKSB7XHJcbiAgICAgIHJvbGVzLmZvckVhY2goKHJvbGUsIGkpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldHNbaV0pLmNsYXNzTGlzdFtyb2xlXSgnb3BlbicpKTtcclxuICAgIH1cclxuICAgIGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1swXSkuZGlzYWJsZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJvdWJsZXNob290aW5nJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICdvcHRpb24nOiAndG9nZ2xlVG9waWMnLFxyXG4gICAgICAgICAgJy50cm91YmxlX19hbnN3ZXItLWJ0bic6ICdzaG93QXJ0aWNsZScsXHJcbiAgICAgICAgICAnLnRyb3VibGVfX2Fuc3dlci0tc3ViJzogJ3Nob3dBcnRpY2xlJyxcclxuICAgICAgICAgICcudHJvdWJsZV9fY2FuY2VsJzogJ2NhbmNlbCcsXHJcbiAgICAgICAgICAnLnRyb3VibGVfX2Fuc3dlci0tbm8tZW50cmllcyc6ICdzY2FuSGlzdG9yeSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3VycmVudFRyb3VibGU6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVUb3BpYyhlLCBlbCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50VHJvdWJsZSkgdGhpcy5jdXJyZW50VHJvdWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgIGNvbnN0IG5ld1Ryb3VibGUgPSB0aGlzLmN1cnJlbnRUcm91YmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKTtcclxuICAgICAgbmV3VHJvdWJsZS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0FydGljbGUoZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGNvbnN0IGJveENsYXNzTGlzdCA9IGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3Q7XHJcbiAgICAgIGJveENsYXNzTGlzdC5hZGQoJ2Fuc3dlcmVkJyk7XHJcbiAgICAgIGJveENsYXNzTGlzdC5hZGQoYGFuc3dlcmVkLS0ke2VsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpfWApO1xyXG4gICAgfSxcclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbnN3ZXJlZCcpKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhbnN3ZXJlZCcpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Fuc3dlcmVkLS1ubycpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Fuc3dlcmVkLS15ZXMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2Nhbkhpc3RvcnkoKSB7XHJcblxyXG4gICAgICBjb25zdCBhcnRpY2xlcyA9IFtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1zY2FuX19lcnJvcicpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LXNjYW5fX2VtcHR5JyksXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3Rvcnktc2Nhbl9fbm9uZW1wdHknKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1zY2FuX19ub21hcmtzJylcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgW2VyckVsLCBlbXB0eUVsLCBub25lbXB0eUVsLCBub21hcmtzRWxdID0gYXJ0aWNsZXM7XHJcblxyXG4gICAgICBhcnRpY2xlcy5mb3JFYWNoKGEgPT4gYS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkgfHwgIWhpc3RvcnkuZW50cmllcykge1xyXG4gICAgICAgICAgZXJyRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGxlbiA9IGhpc3RvcnkuZW50cmllcyA/IE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykubGVuZ3RoIDogMDtcclxuXHJcbiAgICAgICAgICBpZiAobGVuKSB7XHJcbiAgICAgICAgICAgIG5vbmVtcHR5RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgIGxldCBub21hcmtzID0gdHJ1ZSwgZW50cnk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGUgaW4gaGlzdG9yeS5lbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgZW50cnkgPSBoaXN0b3J5LmVudHJpZXNbZV07XHJcbiAgICAgICAgICAgICAgaWYgKGVudHJ5Lm1hcmtzICYmIGVudHJ5Lm1hcmtzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3Rvcnktc2Nhbl9fY291bnQnKS5pbm5lclRleHQgPSBsZW47XHJcbiAgICAgICAgICAgICAgICBub21hcmtzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vbWFya3MpIHtcclxuICAgICAgICAgICAgICBub21hcmtzRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVtcHR5RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIGVyckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3Rvcnktc2Nhbl9fZXJyb3Jtc2cxJykuaW5uZXJUZXh0ID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXJ0aWNsZUNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJvdWJsZS0tMycpLmNsYXNzTGlzdDtcclxuXHJcbiAgICAgICAgICBhcnRpY2xlQ2xhc3Nlcy5hZGQoJ2Fuc3dlcmVkJyk7XHJcbiAgICAgICAgICBhcnRpY2xlQ2xhc3Nlcy5hZGQoJ2Fuc3dlcmVkLS15ZXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2FkZG9uLXBhZ2UnLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOmN0bS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTppZnJhbWUtc2V0dGluZycsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcycsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJyxcclxuICAgICAgJ29wZW46ZW50cmllcycsXHJcbiAgICAgICdyZW5hbWU6ZW50cnknLFxyXG4gICAgICAnY29ycmVjdC1uYW1lOmVudHJ5JyxcclxuICAgICAgJ3ZpZXc6ZW50cnknLFxyXG4gICAgICAnc3luYzplbnRyeScsXHJcbiAgICAgICdzeW5jOmhpc3RvcnknLFxyXG4gICAgICAnc3luYzpzZXR0aW5ncycsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZScsXHJcbiAgICAgICd0b2dnbGU6c3luYycsXHJcbiAgICAgICdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ2NsZWFyOmxvZ3MnLFxyXG4gICAgICAndGFnOmVudHJpZXMnXHJcbiAgICBdXHJcbiAgfVxyXG59KVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG5vdGVmb250c2l6ZTogMTIsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ3RtJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcbiAganNfaW5qZWN0aW9uX2ZhaWx1cmU6IDM3LFxyXG4gIGNzc19pbmplY3Rpb25fZmFpbHVyZTogMzgsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCwgJycpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlcicsICdIcmVmJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9