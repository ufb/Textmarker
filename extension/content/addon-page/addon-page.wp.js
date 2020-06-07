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

var _permissions = __webpack_require__(/*! ./modules/permissions */ "./content/addon-page/modules/permissions.js");

var _permissions2 = _interopRequireDefault(_permissions);

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
  allowedHashes: [
  /*'news', */
  'manual', 'settings', 'history', 'contact', 'sync', 'export', 'troubleshooting', 'logs'],
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
      (0, _permissions2["default"])();
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
    if (e) this.emit('change:view-setting', val);
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
          '#clear-logs': 'clear',
          '.permission': 'askPermission'
        }
      }
    },
    autoinit: function autoinit() {
      var _this = this;

      this.logMissingPermissions().then(function () {
        return _this.log();
      });
    },
    logMissingPermissions: function logMissingPermissions() {
      return browser.permissions.contains({
        permissions: ['webNavigation']
      }).then(function (granted) {
        if (!granted) {
          document.getElementById('no-permission--webNavigation').classList.remove('u-display--none');
        }
      });
    },
    log: function log() {
      var _this2 = this;

      _store2["default"].get('logs').then(function (logs) {
        logs = logs || [];

        var tableBody = _this2.el.getElementsByTagName('tbody')[0],
            l = logs.length,
            frag = document.createDocumentFragment(),
            tr,
            td_date,
            td_msg,
            node_date,
            node_msg,
            node_attempt,
            url,
            log,
            time,
            msg,
            reason;

        if (l) {
          _this2.el.classList.remove('nologs');

          while (l--) {
            log = logs[l];
            msg = log[1];
            if (typeof msg === 'number') msg = browser.i18n.getMessage(_logKeys2["default"].getKeyByValue(log[1])); //'nu',{year:'numeric',month:'2-digit',day:'2-digit',hour:'numeric',second:'numeric',minute:'numeric'}

            time = _this2.optimizeDateString(new Date(log[0]).toLocaleString());
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

            if (log[3]) {
              node_attempt = document.createElement('span');
              node_attempt.appendChild(document.createTextNode("[#".concat(log[3], "]")));
              td_msg.insertBefore(node_attempt, node_msg);
            }

            if (log[4]) {
              url = document.createElement('div');
              url.appendChild(document.createTextNode("URL: ".concat(log[4])));
              td_msg.appendChild(url);
            }

            tr.appendChild(td_date);
            tr.appendChild(td_msg);
            frag.appendChild(tr);
          }

          tableBody.innerText = '';
          tableBody.appendChild(frag);
        } else {
          _this2.el.classList.add('nologs');
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
    },
    askPermission: function askPermission() {
      var _this3 = this;

      browser.permissions.request({
        permissions: ['webNavigation']
      }).then(function (granted) {
        if (granted) {
          _this3.emit('granted-permission:webNavigation');

          Array.from(document.getElementsByClassName('permission-alert')).forEach(function (alert) {
            return alert.classList.add('u-display--none');
          });
        }
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

/***/ "./content/addon-page/modules/permissions.js":
/*!***************************************************!*\
  !*** ./content/addon-page/modules/permissions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('permission-alert'),
    events: {
      DOM: {
        click: {
          '.permission': 'askPermission'
        }
      }
    },
    autoinit: function autoinit() {
      var _this = this;

      browser.permissions.contains({
        permissions: ['webNavigation']
      }).then(function (granted) {
        if (!granted) {
          _this.el.classList.remove('u-display--none');
        }
      });
    },
    askPermission: function askPermission() {
      var _this2 = this;

      browser.permissions.request({
        permissions: ['webNavigation']
      }).then(function (granted) {
        if (granted) {
          _this2.emit('granted-permission:webNavigation');

          Array.from(document.getElementsByClassName('permission-alert')).forEach(function (alert) {
            return alert.classList.add('u-display--none');
          });
        }
      });
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
          '#autoRetry': 'toggleAutoRetryOpt',
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
      document.getElementById('autoRetry').checked = historySettings.autoRetry;
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
      document.getElementById('notes-load').checked = miscSettings.loadNote;
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
      document.getElementById('addon-iframes').checked = !settings.addon.iframes;
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
    toggleAutoRetryOpt: function toggleAutoRetryOpt(e, el) {
      this.emit('change:autoRetry-setting', el.checked);
    },
    toggleAutocsOpt: function toggleAutocsOpt(e, el) {
      this.emit('change:autocs-setting', el.checked);
    },
    toggleIFrameOpt: function toggleIFrameOpt(e, el) {
      this.emit('change:iframe-setting', !el.checked);
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
    ONEOFF: ['change:style-setting', 'change:autonote-setting', 'change:mark-method-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:immut-setting', 'change:dropLosses-setting', 'change:autoRetry-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'change:hash-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'switch:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'toggle:tbbpower-setting', 'change:autocs-setting', 'change:iframe-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'rename:entry', 'correct-name:entry', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries', 'granted-permission:webNavigation']
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
  missing_permission_wn: 39,
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
exports._BGPORT = exports._PRIVPORT = exports._PORT = undefined;

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
function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
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
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = tabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _tab = _step2.value;
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
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
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _tab2 = _step3.value;
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
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
        }
      }
    }
  }]);

  return _PORT;
}(_module._MODULE);

var _PRIVPORT =
/*#__PURE__*/
function (_PORT2) {
  _inherits(_PRIVPORT, _PORT2);

  function _PRIVPORT(obj) {
    var _this2;

    _classCallCheck(this, _PRIVPORT);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_PRIVPORT).call(this, obj));
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
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = events[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var e = _step4.value;
            this.on(e, this.proxy(this, this.postMessage, e));
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

var _BGPORT =
/*#__PURE__*/
function (_PORT3) {
  _inherits(_BGPORT, _PORT3);

  function _BGPORT(obj) {
    var _this3;

    _classCallCheck(this, _BGPORT);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_BGPORT).call(this, obj));
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
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = events[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var e = _step5.value;
            this.on(e, this.proxy(this, this.postMessage, e));
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9wZXJtaXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvdHJvdWJsZXNob290aW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9sb2cta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX1BSSVZQT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwiX2dldF9kb3dubG9hZF9vcHRpb24iLCJicm93c2VyIiwic3RvcmFnZSIsImFyZWFfc2V0dGluZ3MiLCJnZXQiLCJ0aGVuIiwic2V0dGluZ3MiLCJoaXN0b3J5IiwiZG93bmxvYWQiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJzaG9ydGN1dHMiLCJhbGxvd2VkSGFzaGVzIiwiYm9vdHN0cmFwcGVkIiwiYXV0b2luaXQiLCJzdGFydCIsImluaXRNYWluTmF2IiwidGFiIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJpbmNsdWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfTkFWIiwiaW5uZXJUZXh0IiwicnVudGltZSIsImdldE1hbmlmZXN0IiwidmVyc2lvbiIsInN1Ym5hdnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibiIsImxlbmd0aCIsInRvZ2dsZUJ1dHRvbnMiLCJ0IiwiX1RPR0dMRVIiLCJzZXRMb2dMaW5rIiwibG9nTGluayIsImxvZ3MiLCJsIiwiaHJlZiIsImVuY29kZVVSSUNvbXBvbmVudCIsImkxOG4iLCJnZXRNZXNzYWdlIiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZWwiLCJET00iLCJjbGljayIsIm51bWJlclBhZ2VzIiwibnVtYmVyRW50cmllcyIsImN1cnJlbnRQYWdlIiwicGVyUGFnZSIsInVwZGF0ZUZyb21TdG9yYWdlIiwiZSIsIm5ld1BhZ2UiLCJnZXRBdHRyaWJ1dGUiLCJlbWl0IiwicmVuZGVyIiwicHJldiIsIm5leHQiLCJ1cGRhdGUiLCJyZW1vdmUiLCJwcCIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwic2lsZW50IiwiTWF0aCIsImNlaWwiLCJyZXNldCIsInVsIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImxpIiwicCIsInBhZ2VzIiwiciIsImZyYWciLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaSIsIm1heCIsIm1pbiIsImoiLCJhcHBlbmRCdXR0b24iLCJpbnNlcnRCZWZvcmUiLCJiIiwiYnRuIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGFuZ2VDb3VudFBlclBhZ2UiLCJieSIsImRhdGUiLCJjcmVhdGVkIiwib2JqZWN0IiwiX3NvcnQiLCJsYXN0IiwiZmllbGQiLCJzb3J0IiwiYSIsIm5hbWUiLCJheiIsInphIiwicmV2ZXJzZSIsInRvTG93ZXJDYXNlIiwibG9jYWxlQ29tcGFyZSIsImNoYW5nZSIsImtleXVwIiwiaW5pdGlhbGl6ZWQiLCJuYW1lcyIsImVudHJ5VG1wbCIsImVudHJpZXNDb250YWluZXIiLCJwYWdlIiwic29ydGVkIiwidmlld01vZGUiLCJzZWFyY2hUZXJtIiwic2VhcmNoZWQiLCJ0YWdzIiwiZmlsdGVyZWQiLCJmaWx0ZXJPcHRpb25zU2V0IiwiaW5pdCIsInJlc3VtZSIsIm1zZyIsImxvY2tlZCIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ0eXBlIiwic3BlYyIsInVuZGVmaW5lZCIsImdldERhdGEiLCJkYXRhIiwidGV4dCIsImxpbmsiLCJqb2luIiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYmFja3VwIiwicG9wIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG9jYWxlU3RyaW5nIiwicmVwbGFjZSIsImNvbnRhaW5zIiwiZ2V0VVJMcyIsInVybHMiLCJuZXdOYW1lIiwicHJvbXB0Iiwib2xkTmFtZSIsImFyZWEiLCJwYXJlbnROb2RlIiwidGFnIiwiZm9yY2UiLCJvIiwic3luYyIsImxvY2FsIiwib3JpZ0VudHJpZXMiLCJzeW5jZWQiLCJwdXNoIiwiY2hlY2tlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpb24iLCJ2YWx1ZSIsInZhbCIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwic2VhcmNoVGVybUxlbmd0aCIsInNlYXJjaGVkRnVsbFRleHQiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwic2VhcmNoUmVzdWx0cyIsImJ1dHRvbnMiLCJlZGl0IiwidmlldyIsImltbXV0IiwiaW1tdXRFbCIsImxvY2tlZEVsIiwidGFnRWwiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiY2xhc3NOYW1lIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiZmlyc3QiLCJtYXJrcyIsImZ1bGxUZXh0U2VhcmNoUmVzdWx0cyIsInJlcyIsIm1hcmsiLCJwb3MiLCJtYXJrVGV4dCIsIm1hcmtUZXh0RWwiLCJoaWdobGlnaHQiLCJ0MSIsInQyIiwidDMiLCJzdWJzdHJpbmciLCJzdWJzdHIiLCJicm9rZW5FbCIsInRpdGxlIiwidG9TdHJpbmciLCJicm9rZW5OYW1lRWwiLCJlcnJFbCIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwic2VsZWN0IiwicGxhY2Vob2xkZXJPcHRpb24iLCJhbGxUYWdzIiwiYWRkRmlsdGVyT3B0IiwiZGlzYWJsZWQiLCJhdHRycyIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibm90ZVRleHQiLCJsb3N0IiwibSIsInRyaW0iLCJnZXRUZXh0IiwicSIsInRlcm0iLCJzZWFyY2hUeXBlIiwiY291bnRTZWxlY3QiLCJjbGFzc01ldGgiLCJ0b2dnbGUiLCJzZXR1cFNlYXJjaCIsInJlbmRlckVudHJpZXMiLCJzZWFyY2hDb3VudCIsInNlYXJjaEZ1bGxUZXh0Iiwic2VhcmNoQnlOYW1lIiwiZm91bmQiLCJyZXN1bHRzIiwidGFibGUiLCJzZXRWaWV3Iiwic2V0VGltZW91dCIsImZvY3VzIiwic2V0dXBTb3J0IiwiX1NPUlQiLCJzb3J0U2VhcmNoUmVzdWx0cyIsIm5vZGVOYW1lIiwiZmlyc3RDaGlsZCIsImZpbHRlcmVkRW50cmllcyIsInJ4IiwiYyIsIlJlZ0V4cCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleE9mIiwiZGlyZWN0bHkiLCJpbnB1dHMiLCJkZWxlZ2F0ZUJ1dHRvbkFjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzZXR1cFZpZXciLCJ0b2dnbGVIZWFkZXJGaWVsZHMiLCJzZXRGaWx0ZXJPcHRpb25zIiwibW91c2Vkb3duIiwidXBkYXRlRXhwb3J0TGlua3MiLCJzdG9yZVN0cmluZyIsInBhcnNlZFN0cmluZyIsInBhcnNlIiwiZGlzcGxheUZhaWx1cmUiLCJ0cmlnZ2VyRmlsZUlucHV0IiwiaGFuZGxlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwibW9kIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsInJlYXNvbiIsImxvY2FsRGF0YUxpbmsiLCJzeW5jZWREYXRhTGluayIsInVwZGF0ZUV4cG9ydE5hbWUiLCJsb2dNaXNzaW5nUGVybWlzc2lvbnMiLCJwZXJtaXNzaW9ucyIsImdyYW50ZWQiLCJ0YWJsZUJvZHkiLCJ0ciIsInRkX2RhdGUiLCJ0ZF9tc2ciLCJub2RlX2RhdGUiLCJub2RlX21zZyIsIm5vZGVfYXR0ZW1wdCIsInRpbWUiLCJfTE9HX0tFWVMiLCJnZXRLZXlCeVZhbHVlIiwiY2xlYXIiLCJhc2tQZXJtaXNzaW9uIiwicmVxdWVzdCIsImFsZXJ0IiwiX01BUktFUiIsImN1c3RvbUJnQ29sb3IiLCJzdHlsZXMiLCJzaGFkb3ciLCJ4IiwieSIsImJsdXIiLCJjb2xvciIsImluamVjdCIsInByZXZpZXciLCJtYXJrZXIiLCJleGlzdGluZ1N0eWxlIiwic3R5bGUiLCJhdXRvbm90ZSIsInNldFN0eWxlIiwic3R5bGVTcGxpdCIsInRleHRTaGFkb3ciLCJzaGFkb3dTcGxpdCIsImJnSW5wdXQiLCJjb2xvcklucHV0IiwiYm9yZGVySW5wdXQiLCJhdXRvbm90ZUlucHV0IiwiYmciLCJib3JkZXIiLCJhdXRvbm90ZUNvbG9yIiwic2hhZG93U2VsZWN0IiwicHJvcCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImlzVmFsaWQiLCJzZXRTaGFkb3ciLCJ2YWxpZCIsInRlc3QiLCJwYWdlTmF2IiwiY3VycmVudCIsImhhc0F0dHJpYnV0ZSIsIm9wZW4iLCJjbG9zZSIsInRhcmdldElkIiwiYWxsb3dlZEtleXMiLCJhbGxvd2VkU2hvcnRjdXRzIiwiYWxsb3dlZFF1aWNrYnV0dG9uT3B0cyIsIm1hcmtlcktleXMiLCJjdXN0b21NYXJrZXJLZXlzIiwiY3VzdG9tU2VhcmNoIiwicmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucyIsInVwZGF0ZU1hcmtlciIsImluamVjdFNldHRpbmdzIiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwia2V5U2VsZWN0Iiwia2V5SWNvbnMiLCJhZGRLZXlTZWxlY3QiLCJyZW1vdmVLZXlTZWxlY3QiLCJmcmFnbWVudDEiLCJmcmFnbWVudDIiLCJmcmFnbWVudDMiLCJmcmFnbWVudDQiLCJvcHRpb24iLCJpY29uIiwiVmFsIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzY0NoZWNrYm94Iiwic2NTZWxlY3QiLCJjbUNoZWNrYm94Iiwic2MiLCJoaXN0b3J5U2V0dGluZ3MiLCJzYXZlT3B0cyIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXV0b3NhdmUiLCJuYW1pbmciLCJzYXZlSW5Qcml2IiwiZHJvcExvc3NlcyIsImF1dG9SZXRyeSIsInNhdmVOb3RlIiwiaWdub3JlSGFzaCIsIm1pc2NTZXR0aW5ncyIsIm1pc2MiLCJtYXJrbWV0aG9kIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwibm90ZWZvbnRzaXplIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJlcnJvck5vdGUiLCJ2aXBOb3RlIiwibG9hZE5vdGUiLCJ0bXVpcG9zIiwidGJicG93ZXIiLCJhZGRvbiIsImF1dG9jcyIsImlmcmFtZXMiLCJzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJjaGFuZ2VTdHlsZSIsInRvZ2dsZUF1dG9Ob3RlT3B0IiwiY2hhbmdlQXV0b05vdGVPcHQiLCJjaGFuZ2VIYXNoT3B0IiwidG9nZ2xlSW1tdXRPcHQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwidG9nZ2xlQXV0b1JldHJ5T3B0IiwidG9nZ2xlQXV0b2NzT3B0IiwidG9nZ2xlSUZyYW1lT3B0IiwiYWRkTWFya2VyIiwiYmdDb2xvciIsImdldFJhbmRvbUxpZ2h0Q29sb3IiLCJzZWxlY3RlZCIsInJlbW92ZU1hcmtlciIsImNoYW5nZU1hcmtNZXRob2QiLCJ0b2dnbGVTaG9ydGN1dCIsImNoYW5nZVNob3J0Y3V0IiwidG9nZ2xlQ3RtIiwiY2hhbmdlU2F2ZU9wdCIsInRvZ2dsZVByaXZTYXZlIiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlU2F2ZU5vdGVPcHQiLCJjaGFuZ2VRdWlja2J1dHRvbk9wdCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90ZXMiLCJkaXNhYmxlQWxsTm90aWZpY2F0aW9ucyIsImNicyIsImNvbmNhdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidG9nZ2xlTWlzYyIsInRvZ2dsZVRCQlBvd2VyT3B0IiwiY2hhbmdlVG11aVBvc2l0aW9uT3B0IiwiY2hhbmdlTm90ZXNGb250U2l6ZSIsInZhbGlkaXR5IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwiaW5wMSIsImlucDIiLCJwYXJ0MSIsInBhcnQyIiwiZmxvb3IiLCJyYW5kb20iLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInRvZ2dsZVN3aXRjaCIsInVuZG8iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRhcmdldCIsInRhcmdldHMiLCJkYXRhVG9nZ2xlIiwicm9sZXMiLCJyb2xlIiwiY3VycmVudFRyb3VibGUiLCJ0b2dnbGVUb3BpYyIsIm5ld1Ryb3VibGUiLCJzaG93QXJ0aWNsZSIsImJveENsYXNzTGlzdCIsImNhbmNlbCIsInNjYW5IaXN0b3J5IiwiYXJ0aWNsZXMiLCJlbXB0eUVsIiwibm9uZW1wdHlFbCIsIm5vbWFya3NFbCIsImxlbiIsIm5vbWFya3MiLCJhcnRpY2xlQ2xhc3NlcyIsIk9ORU9GRiIsInoiLCJzIiwiZCIsInciLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsImNvcHkiLCJhY3RpdmUiLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwidGFicyIsIm1ldGEiLCJ1bmZvbGRlZCIsIm5vdGVzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImpzX2luamVjdGlvbl9mYWlsdXJlIiwiY3NzX2luamVjdGlvbl9mYWlsdXJlIiwibWlzc2luZ19wZXJtaXNzaW9uX3duIiwic3JjIiwiaXNBcnJheSIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0IiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsInRleHRDb250ZW50IiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJldiIsIndhaXQiLCJmcmFtZUlkIiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsInJlZ2lzdGVyT25lT2ZmRXZlbnRzIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibGFzdEFyZyIsInBvcnQiLCJwb3J0TGlzdGVuZXIiLCJjb25uZWN0IiwicmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMiLCJyZW1vdmVMaXN0ZW5lciIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsImxpc3RlbmVyIiwiX0JHUE9SVCIsInBvcnRzIiwicmVnaXN0ZXJPbkNvbm5lY3RMaXN0ZW5lciIsIm9uQ29ubmVjdCIsIm9uRGlzY29ubmVjdCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJzZXRBcmVhcyIsIlByb21pc2UiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1C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T0FBUixDQUFnQitKLElBQWhCLENBQXFCN0osR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFvb0IsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUN6bUIsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPd21CLFlBQVksQ0FBQ3htQixPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QjNDLGUiLCJmaWxlIjoiY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2Uud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvYWRkb24tcGFnZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCwgX1BSSVZQT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfUFJJVlBPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBlbnY6ICdhZGRvbi1wYWdlJyxcclxuXHJcbiAgX2dldF9kb3dubG9hZF9vcHRpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ3RleHQnO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmRvd25sb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5pbXBvcnQgX0hJU1RPUlkgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnknXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgX0xPR0dJTkcgZnJvbSAnLi9tb2R1bGVzL2xvZ3MnXHJcbmltcG9ydCBfU1lOQ0lORyBmcm9tICcuL21vZHVsZXMvc3luY2luZydcclxuaW1wb3J0IF9JTVBPUlQgZnJvbSAnLi9tb2R1bGVzL2ltcG9ydCdcclxuaW1wb3J0IF9DT05UQUNUIGZyb20gJy4vbW9kdWxlcy9jb250YWN0J1xyXG5pbXBvcnQgX1RST1VCTEVTSE9PVElORyBmcm9tICcuL21vZHVsZXMvdHJvdWJsZXNob290aW5nJ1xyXG5pbXBvcnQgX1BBR0lOQVRPUiBmcm9tICcuL21vZHVsZXMvaGlzdG9yeS1wYWdpbmF0aW9uJ1xyXG5pbXBvcnQgX1BFUk1JU1NJT05TIGZyb20gJy4vbW9kdWxlcy9wZXJtaXNzaW9ucydcclxuXHJcbmltcG9ydCBfTkFWIGZyb20gJy4vbW9kdWxlcy9uYXYnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3N0YXJ0JyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3N0YXJ0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWxsb3dlZEhhc2hlczogWy8qJ25ld3MnLCAqLydtYW51YWwnLCAnc2V0dGluZ3MnLCAnaGlzdG9yeScsICdjb250YWN0JywgJ3N5bmMnLCAnZXhwb3J0JywgJ3Ryb3VibGVzaG9vdGluZycsICdsb2dzJ10sXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkpIHRoaXMuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9vdHN0cmFwcGVkKSB7XHJcbiAgICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgX0hJU1RPUlkoKTtcclxuICAgICAgX1NFVFRJTkdTKCk7XHJcbiAgICAgIF9MT0dHSU5HKCk7XHJcbiAgICAgIF9TWU5DSU5HKCk7XHJcbiAgICAgIF9JTVBPUlQoKTtcclxuICAgICAgX0NPTlRBQ1QoKTtcclxuICAgICAgX1RST1VCTEVTSE9PVElORygpO1xyXG4gICAgICBfUEFHSU5BVE9SKCk7XHJcbiAgICAgIF9QRVJNSVNTSU9OUygpO1xyXG4gICAgICB0aGlzLmluaXRNYWluTmF2KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0TWFpbk5hdigpIHtcclxuICAgIGNvbnN0IHRhYiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc9JylbMV07XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dlZEhhc2hlcy5pbmNsdWRlcyh0YWIpKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdi0nICsgdGFiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ldyBfTkFWKHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdicpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vbW9kdWxlcy90b2dnbGVyJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuXHJcbl9MMTBOKCk7XHJcblxyXG4vKiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJzaW9uLW51bWJlcicpLmlubmVyVGV4dCA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcbi8qIGVuZDogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5cclxuLyogY29uZmlndXJlIHN1Ym5hdnMgKi9cclxuY29uc3Qgc3VibmF2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Ym5hdicpO1xyXG5sZXQgbiA9IHN1Ym5hdnMubGVuZ3RoO1xyXG5cclxud2hpbGUobi0tKSBuZXcgX05BVihzdWJuYXZzW25dKTtcclxuLyogZW5kOiBjb25maWd1cmUgbmF2cyAqL1xyXG5cclxuLyogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG5sZXQgdG9nZ2xlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKSxcclxuICAgIHQgPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcclxuXHJcbndoaWxlKHQtLSkgbmV3IF9UT0dHTEVSKHRvZ2dsZUJ1dHRvbnNbdF0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdzZXRMb2dMaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0TG9nTGluaygpO1xyXG4gICAgfSxcclxuICAgIHNldExvZ0xpbmsoKSB7XHJcbiAgICAgIGNvbnN0IGxvZ0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nLW1haWwnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvZ3MnKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICAgIGxldCBsID0gbG9ncyA/IGxvZ3MubGVuZ3RoIDogMCxcclxuICAgICAgICAgICAgaHJlZiA9XHJcbiAgICAgICAgICAgICAgJ21haWx0bzp1bmRmbHliaXJAZ214LmRlP3N1YmplY3Q9VGV4dG1hcmtlcicgK1xyXG4gICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCgnIDogRXJyb3IgTG9ncycpICtcclxuICAgICAgICAgICAgICAnJmJvZHk9JytcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJy0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5b3VyX21zZycpICsgJyAtXFxuXFxuXFxuTE9HUzpcXG5cXG4nKSxcclxuICAgICAgICAgICAgbG9nO1xyXG5cclxuICAgICAgICB3aGlsZShsLS0pIHtcclxuICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICBocmVmICs9IGxvZ1sxXSArIChsb2dbMl0gPyAnICgnICsgbG9nWzJdICsgJyknIDogJycpICsgJyAtICcgKyBlbmNvZGVVUklDb21wb25lbnQoKG5ldyBEYXRlKGxvZ1swXSkudG9VVENTdHJpbmcoKSkgKyAnXFxuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ0xpbmsuaHJlZiA9IGhyZWY7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3InKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnYWRkJyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyaWVzJzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnZmlsdGVyZWQ6aGlzdG9yeSc6ICdyZXNldCcsXHJcbiAgICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknOiAndXBkYXRlRnJvbVN0b3JhZ2UnLFxyXG4gICAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcucGFnZSc6ICdnb3RvJyxcclxuICAgICAgICAgICcucHJldic6ICdwcmV2JyxcclxuICAgICAgICAgICcubmV4dCc6ICduZXh0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG51bWJlclBhZ2VzOiAxLFxyXG4gICAgbnVtYmVyRW50cmllczogMCxcclxuICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRnJvbVN0b3JhZ2UoKTtcclxuICAgIH0sXHJcbiAgICBnb3RvKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG5ld1BhZ2UgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScpICogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IG5ld1BhZ2UpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCBuZXdQYWdlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbmV3UGFnZTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJldigpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IDEpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgLS10aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gdGhpcy5udW1iZXJQYWdlcykgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCArK3RoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIGFkZCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKyt0aGlzLm51bWJlckVudHJpZXMpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoLS10aGlzLm51bWJlckVudHJpZXMpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUZyb21TdG9yYWdlKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMClcclxuICAgICAgICAudGhlbigoKSA9PiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHRoaXMudXBkYXRlKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykubGVuZ3RoKSkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShsLCBzaWxlbnQpIHtcclxuICAgICAgdGhpcy5udW1iZXJFbnRyaWVzID0gbDtcclxuICAgICAgdGhpcy5udW1iZXJQYWdlcyA9IGwgPyBNYXRoLmNlaWwobCAvIHRoaXMucGVyUGFnZSkgOiAxO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IHRoaXMubnVtYmVyUGFnZXMpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5udW1iZXJQYWdlcztcclxuICAgICAgICBpZiAoIXNpbGVudCkgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICByZXNldChsKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnVwZGF0ZShsKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRvci1saXN0Jyk7XHJcbiAgICAgIGNvbnN0IGwgPSB0aGlzLm51bWJlckVudHJpZXM7XHJcbiAgICAgIEFycmF5LmZyb20odWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnZScpKS5mb3JFYWNoKGxpID0+IGxpLnJlbW92ZSgpKTtcclxuXHJcbiAgICAgIGlmIChsIDwgdGhpcy5wZXJQYWdlICsgMSkge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcCA9IHRoaXMuY3VycmVudFBhZ2U7XHJcblxyXG4gICAgICBjb25zdCBwYWdlcyA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgIGNvbnN0IHIgPSA3IC0gKHBhZ2VzIC0gMSAtIHApO1xyXG4gICAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBuZXh0ID0gdWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdO1xyXG4gICAgICBsZXQgaSA9IE1hdGgubWF4KDIsIHAgLSA3KTtcclxuICAgICAgaWYgKHIgPiAwKSBpID0gTWF0aC5tYXgoMiwgTWF0aC5taW4oaSwgaSAtIHIpKTtcclxuICAgICAgY29uc3QgaiA9IE1hdGgubWluKHBhZ2VzLCBpICsgMTQpICsgMTtcclxuXHJcbiAgICAgIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIDEpO1xyXG4gICAgICBmb3IgKDsgaSA8IGo7IGkrKykgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgaSk7XHJcbiAgICAgIGlmIChwYWdlcyA+IGogLSAxKSB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCBwYWdlcyk7XHJcblxyXG4gICAgICB1bC5pbnNlcnRCZWZvcmUoZnJhZywgbmV4dCk7XHJcbiAgICB9LFxyXG4gICAgYXBwZW5kQnV0dG9uKGZyYWcsIGIpIHtcclxuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1wYWdlJywgYik7XHJcbiAgICAgIGJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShiKSk7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XHJcbiAgICAgIGlmIChiID09PSB0aGlzLmN1cnJlbnRQYWdlKSBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb3VudFBlclBhZ2UocCkge1xyXG4gICAgICB0aGlzLnBlclBhZ2UgPSBwO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLm51bWJlckVudHJpZXMsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBieToge1xyXG4gICAgZGF0ZToge1xyXG4gICAgICBjcmVhdGVkKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2ZpcnN0Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxhc3Qob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0LCAnbGFzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBfc29ydChvYmplY3QsIGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkuc29ydCgoYSwgYikgPT4gKG5ldyBEYXRlKG9iamVjdFtiXVtmaWVsZF0pKSAtIChuZXcgRGF0ZShvYmplY3RbYV1bZmllbGRdKSkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICBheihvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QpO1xyXG4gICAgICB9LFxyXG4gICAgICB6YShvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QpLnJldmVyc2UoKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkuc29ydCgoYSwgYikgPT4gYS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vdG9nZ2xlcidcclxuaW1wb3J0IF9TT1JUIGZyb20gJy4vaGlzdG9yeS1zb3J0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeScpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdvcGVuZWQ6dGFiJzogJ2luaXQnLFxyXG4gICAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAncmVuZGVyJyxcclxuICAgICAgICAnZmFpbGVkOnN5bmMtZW50cnknOiAndW5kb1N5bmNUb2dnbGUnLFxyXG4gICAgICAgICdwYWdpbmF0ZTpoaXN0b3J5JzogJ3BhZ2luYXRlJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5hY3Rpb24tYnV0dG9uJzogJ2RlbGVnYXRlQnV0dG9uQWN0aW9uJyxcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCcsXHJcbiAgICAgICAgICAnLm5hbWUnOiAnb3BlbicsXHJcbiAgICAgICAgICAnLmVkaXQnOiAnZWRpdCcsXHJcbiAgICAgICAgICAnLnZpZXcnOiAndmlldycsXHJcbiAgICAgICAgICAnI3NlYXJjaC10b2dnbGUnOiAndG9nZ2xlU2VhcmNoJyxcclxuICAgICAgICAgICcjcmVtb3ZlLWZpbHRlcic6ICdyZW1vdmVGaWx0ZXInLFxyXG4gICAgICAgICAgJy50YWdzX19pdGVtJzogJ2ZpbHRlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jaGVja21hcmstYWxsJzogJ2NoZWNrbWFya0FsbCcsXHJcbiAgICAgICAgICAnI3NvcnQtZW50cmllcyc6ICdzb3J0JyxcclxuICAgICAgICAgICcjZmlsdGVyLWVudHJpZXMnOiAnZmlsdGVyJyxcclxuICAgICAgICAgICcjZW50cmllcy1wZXItcGFnZSc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAgICAgJyNzZXQtdmlldyc6ICdzZXRWaWV3JyxcclxuICAgICAgICAgICcjYWN0aW9uJzogJ29uQ2hhbmdlQWN0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5dXA6IHtcclxuICAgICAgICAgICcuc2VhcmNoLWVudHJpZXMnOiAnc2VhcmNoJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcblxyXG4gICAgbmFtZXM6IFtdLFxyXG4gICAgZW50cmllczoge30sXHJcbiAgICBlbnRyeVRtcGw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyeS10ZW1wbGF0ZScpLFxyXG4gICAgZW50cmllc0NvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKSxcclxuICAgIHBhZ2U6IDEsXHJcbiAgICBwZXJQYWdlOiAxMCxcclxuICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICB2aWV3TW9kZTogJ2xpc3QnLFxyXG4gICAgc2VhcmNoVGVybTogJycsXHJcbiAgICBzZWFyY2hlZDogW10sXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIGZpbHRlcmVkOiBmYWxzZSxcclxuICAgIGZpbHRlck9wdGlvbnNTZXQ6IGZhbHNlLFxyXG5cclxuICAgIGluaXQodGFiKSB7XHJcbiAgICAgIGlmICh0YWIgIT09ICdoaXN0b3J5JykgcmV0dXJuO1xyXG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGFncyA9IFtdO1xyXG4gICAgfSxcclxuXHJcbiAgICBbJ2RlbGV0ZSddKG5hbWVzKSB7XHJcbiAgICAgIGxldCBtc2cgPSAnZGVsX2NvbmZpcm0nO1xyXG4gICAgICBsZXQgbCA9IG5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRyaWVzW25hbWVzW2xdXS5sb2NrZWQpIHtcclxuICAgICAgICAgIG1zZyArPSAnX2xvY2tlZCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShtc2cpKTtcclxuICAgICAgaWYgKGNvbmZpcm1lZCkgdGhpcy5lbWl0KCdkZWxldGU6ZW50cmllcycsIG5hbWVzKTtcclxuICAgIH0sXHJcbiAgICBjbGVhbihuYW1lcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFuOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdkb3dubG9hZF9vcHRpb24nKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICAgIHNldHRpbmdzID0gc2V0dGluZ3Muc3BsaXQoJyAnKTtcclxuICAgICAgICAgIHR5cGUgPSBzZXR0aW5nc1swXTtcclxuICAgICAgICAgIHNwZWMgPSBzZXR0aW5ncy5sZW5ndGggPT09IDIgPyBzZXR0aW5nc1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGlmICh0eXBlID09PSAnanNvbicpIHRoaXMuZXhwb3J0KG5hbWVzKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5kb3dubG9hZChuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpLFxyXG4gICAgICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnVGV4dG1hcmtlciAoJyArIG5hbWVzLmpvaW4oJ18nKSArICcpLnR4dCcpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9ICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgdGV4dDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXhwb3J0KG5hbWVzKSB7XHJcbiAgICAgIGxldCBiYWNrdXAgPSB7IGhpc3Rvcnk6IHsgZW50cmllczoge30gfSB9LFxyXG4gICAgICAgICAgZW50cmllcyA9IGJhY2t1cC5oaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWU7XHJcbiAgICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgICAgZW50cmllc1tuYW1lXSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja3VwID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGJhY2t1cCkpO1xyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgICAnVGV4dG1hcmtlci1iYWNrdXAtJyArXHJcbiAgICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgICAnLmpzb24nXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgYmFja3VwO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzeW5jKG5hbWUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3luYzplbnRyeScsIG5hbWVbMF0sIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xyXG4gICAgfSxcclxuICAgIHZpc2l0KG5hbWVzKSB7XHJcbiAgICAgIHRoaXMuZ2V0VVJMcyhuYW1lcykudGhlbih1cmxzID0+IHRoaXMuZW1pdCgnb3BlbjplbnRyaWVzJywgdXJscywgbmFtZXMpKTtcclxuICAgIH0sXHJcbiAgICBvcGVuKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbjplbnRyaWVzJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICBlZGl0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG5ld05hbWUgPSB3aW5kb3cucHJvbXB0KGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2VkaXQnKSk7XHJcbiAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA/XHJcbiAgICAgICAgICAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuYW1lOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB2aWV3KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndmlldzplbnRyeScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG4gICAgfSxcclxuICAgIHRhZyhuYW1lcywgdGFnLCBmb3JjZSkge1xyXG4gICAgICBpZiAoIXRhZyAmJiAhZm9yY2UpIHJldHVybjtcclxuICAgICAgY29uc3QgbyA9IHsgc3luYzogW10sIGxvY2FsOiBbXSB9O1xyXG4gICAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm9yaWdFbnRyaWVzW25hbWVdLnN5bmNlZCkgby5zeW5jLnB1c2gobmFtZSk7XHJcbiAgICAgICAgZWxzZSBvLmxvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RhZzplbnRyaWVzJywgbywgdGFnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWdzKG5hbWVzKSB7XHJcbiAgICAgIHRoaXMudGFnKG5hbWVzLCAnJywgdHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc1NlbGVjdGlvbigpIHtcclxuICAgICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW50cnktY2I6Y2hlY2tlZCcpLFxyXG4gICAgICAgICAgaSA9IGNoZWNrZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKCFpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBsZXQgYWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbicpLnZhbHVlLFxyXG4gICAgICAgICAgbmFtZXMgPSBbXTtcclxuXHJcbiAgICAgIHdoaWxlKGktLSkgbmFtZXMucHVzaChjaGVja2VkW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3RhZycpIHtcclxuICAgICAgICBsZXQgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLnZhbHVlO1xyXG4gICAgICAgIHRoaXMudGFnKG5hbWVzLCB2YWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzcGxpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjaWZpY2F0aW9uJykudmFsdWUuc3BsaXQoJyAnKSxcclxuICAgICAgICAgICAgdHlwZSA9IHNwbGl0WzBdLFxyXG4gICAgICAgICAgICBzcGVjID0gc3BsaXRbMV07XHJcblxyXG4gICAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWVzLCB0eXBlLCBzcGVjKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbmRlckVudHJpZXMoKSB7XHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuZW50cnlUbXBsLFxyXG4gICAgICAgICAgY29udGFpbmVyID0gdGhpcy5lbnRyaWVzQ29udGFpbmVyLFxyXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuZW50cmllcyxcclxuICAgICAgICAgIHNlYXJjaFRlcm0gPSB0aGlzLnNlYXJjaFRlcm0sXHJcbiAgICAgICAgICBzZWFyY2hUZXJtTGVuZ3RoID0gc2VhcmNoVGVybSA/IHNlYXJjaFRlcm0ubGVuZ3RoIDogMCxcclxuICAgICAgICAgIHNlYXJjaGVkID0gISFzZWFyY2hUZXJtLFxyXG4gICAgICAgICAgc2VhcmNoZWRGdWxsVGV4dCA9IHRoaXMuc2VhcmNoZWRGdWxsVGV4dCxcclxuICAgICAgICAgIG5hbWVzID0gc2VhcmNoZWQgPyB0aGlzLnNlYXJjaGVkIDogdGhpcy5uYW1lcyxcclxuICAgICAgICAgIGwgPSBzZWFyY2hlZCA/IG5hbWVzLmxlbmd0aCA6IHRoaXMucGFnZSAqIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGkgPSBzZWFyY2hlZCA/IDAgOiBsIC0gdGhpcy5wZXJQYWdlLFxyXG4gICAgICAgICAgY2xvbmUsIGVudHJ5LCBuYW1lLCBuYW1lRmllbGQsIGlucHV0LCBsYWJlbCwgaW5mb0J1dHRvbiwgZGV0YWlscywgc2VhcmNoUmVzdWx0cyxcclxuICAgICAgICAgIGJ1dHRvbnMsIGVkaXQsIHZpZXcsIHRhZ3MsIGltbXV0LCBpbW11dEVsLCBsb2NrZWQsIGxvY2tlZEVsLCB0YWdFbCwgYiwgajtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZpbHRlcmVkKSB7XHJcbiAgICAgICAgbmFtZXMgPSBuYW1lcy5maWx0ZXIobiA9PiAhIWVudHJpZXNbbl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsID0gTWF0aC5taW4obCwgbmFtZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja21hcmstYWxsJykuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKCFsKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZXMgPyBuYW1lc1tpXSA6IG51bGw7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXMgPyBlbnRyaWVzW25hbWVdIDogbnVsbDtcclxuICAgICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChlbnRyeS5uYW1lICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ycmVjdC1uYW1lOmVudHJ5JywgbmFtZSwgZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRhZ3MgPSBlbnRyeS50YWcgPyBlbnRyeS50YWcuc3BsaXQoJyAnKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgbG9ja2VkID0gZW50cnkubG9ja2VkO1xyXG4gICAgICAgICAgICAgIGltbXV0ID0gZW50cnkuaW1tdXQ7XHJcbiAgICAgICAgICAgICAgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgICAgICAgICBjbG9uZS5pZCA9ICdlbnRyeS0nICsgajtcclxuICAgICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIG5hbWVGaWVsZCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXTtcclxuICAgICAgICAgICAgICBpbnB1dCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xyXG4gICAgICAgICAgICAgIGxhYmVsID0gY2xvbmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xhYmVsJylbMF07XHJcbiAgICAgICAgICAgICAgZGV0YWlscyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RldGFpbHMnKVswXTtcclxuICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJlc3VsdHMnKVswXTtcclxuICAgICAgICAgICAgICBidXR0b25zID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVpY2stYWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgZWRpdCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQnKVswXTtcclxuICAgICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICAgIHRhZ0VsID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFncycpWzBdO1xyXG4gICAgICAgICAgICAgIGxvY2tlZEVsID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9ja2VkJylbMF07XHJcbiAgICAgICAgICAgICAgaW1tdXRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltbXV0JylbMF07XHJcbiAgICAgICAgICAgICAgYiA9IGJ1dHRvbnMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICB3aGlsZShiLS0pIHtcclxuICAgICAgICAgICAgICAgICAgYnV0dG9uc1tiXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lRmllbGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSkpO1xyXG4gICAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgZW50cnkudXJsKTtcclxuICAgICAgICAgICAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnZW50cnktY2InO1xyXG4gICAgICAgICAgICAgIGlucHV0LmlkID0gJ2VudHJ5LWNiLScgKyBqO1xyXG4gICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgdmlldy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VudHJ5LWNiLScgKyBqKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGxvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgbG9ja2VkRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChpbW11dCkgaW1tdXRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHRhZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgIHRhZ0VsLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWcpKTtcclxuICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0aXRsZV9maWx0ZXInKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFnRWwuaW5uZXJUZXh0ID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3JlYXRlZCcpWzBdLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXN0JylbMF0uaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgLy9jbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdCA/IGVudHJ5Lmxvc3QubGVuZ3RoIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGVudHJ5LnN5bmNlZCkge1xyXG4gICAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VhcmNoZWRGdWxsVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbFRleHRTZWFyY2hSZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZ1bGxUZXh0U2VhcmNoUmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgciA9IDAsIHJlcywgbWFyaywgcG9zLCBtYXJrVGV4dCwgbWFya1RleHRFbCwgaGlnaGxpZ2h0LCB0MSwgdDIsIHQzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgZm9yICg7IHIgPCBmdWxsVGV4dFNlYXJjaFJlc3VsdHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBmdWxsVGV4dFNlYXJjaFJlc3VsdHNbcl07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyayA9IGVudHJ5Lm1hcmtzW3Jlcy5tYXJrXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSByZXMucG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdDEgPSBtYXJrVGV4dC5zdWJzdHJpbmcoTWF0aC5tYXgocG9zLTE2LCAwKSwgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgICB0MiA9IG1hcmtUZXh0LnN1YnN0cihwb3MsIHNlYXJjaFRlcm1MZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQzID0gbWFya1RleHQuc3Vic3RyKHBvcytzZWFyY2hUZXJtTGVuZ3RoLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgdDEgPSB0MSA/ICcuLi4gJyArIHQxIDogdDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdDMgPSB0MyA/IHQzICsgJyAuLi4nIDogdDM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQuY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQobWFya1RleHRFbCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmICghZW50cnkudXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdygnRW50cnkgaXMgbWlzc2luZyBVUkwgZmllbGQhJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBicm9rZW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyeS0nICsgaik7XHJcbiAgICAgICAgICAgICAgaWYgKGJyb2tlbkVsKSB7XHJcbiAgICAgICAgICAgICAgICBicm9rZW5FbC5jbGFzc0xpc3QuYWRkKCdlbnRyeS0tYnJva2VuJyk7XHJcbiAgICAgICAgICAgICAgICBicm9rZW5FbC50aXRsZSA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJyb2tlbk5hbWVFbCA9IGJyb2tlbkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChicm9rZW5OYW1lRWwpIHtcclxuICAgICAgICAgICAgICAgICAgYnJva2VuTmFtZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgYnJva2VuTmFtZUVsLmNsYXNzTGlzdC5hZGQoJ25hbWUtLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVyckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBlcnJFbC5jbGFzc05hbWUgPSAnZW50cnktLWVycm9yIHUtY29sb3ItLXJlZCc7XHJcbiAgICAgICAgICAgICAgICBlcnJFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnYnJva2VuX2VudHJ5JywgbmFtZSkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJFbCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoaSwgbC1pLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUhlYWRlckZpZWxkcyhsKSB7XHJcbiAgICAgIGNvbnN0IG5vRW50cmllc0hpbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8tZW50cmllcycpO1xyXG4gICAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1hY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IHNvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydCcpO1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJyk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XHJcbiAgICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldycpO1xyXG4gICAgICBjb25zdCBwcFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLXBlci1wYWdlJyk7XHJcbiAgICAgIGNvbnN0IGNoZWNrYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbWFyay1hbGwtY29udGFpbmVyJyk7XHJcbiAgICAgIGNvbnN0IG1ldGhfMCA9ICFsID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8xID0gbCA+IDAgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzIgPSBsID4gMiA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMyA9IGwgPiAxMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcblxyXG4gICAgICBub0VudHJpZXNIaW50LmNsYXNzTGlzdFttZXRoXzBdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgYWN0aW9ucy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHNlYXJjaC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHNvcnQuY2xhc3NMaXN0W21ldGhfMl0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBmaWx0ZXIuY2xhc3NMaXN0W21ldGhfMV0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb3VudC5jbGFzc0xpc3RbbWV0aF8zXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHZpZXcuY2xhc3NMaXN0W21ldGhfMV0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjaGVja2FsbC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcy1jb3VudCcpLmlubmVyVGV4dCA9IGw7XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBjb25zdCBwcCA9IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTA7XHJcbiAgICAgICAgcHBTZWxlY3QudmFsdWUgPSBwcDtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2V0RmlsdGVyT3B0aW9ucygpIHtcclxuICAgICAgaWYgKHRoaXMuZmlsdGVyT3B0aW9uc1NldCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWVudHJpZXMnKTtcclxuICAgICAgY29uc3QgcGxhY2Vob2xkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgY29uc3QgYWxsVGFncyA9IFtdO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgbGV0IHRhZ3M7XHJcblxyXG4gICAgICBzZWxlY3QuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlck9wdGlvbik7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xyXG4gICAgICBwbGFjZWhvbGRlck9wdGlvbi5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjQnKTtcclxuXHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIHRhZ3MgPSBlbnRyaWVzW25hbWVdLnRhZztcclxuICAgICAgICB0YWdzID0gdGFncyA/IHRhZ3Muc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgaWYgKCFhbGxUYWdzLmluY2x1ZGVzKHRhZykpIGFsbFRhZ3MucHVzaCh0YWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWFsbFRhZ3MubGVuZ3RoICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC1ub3RhZycpKSB7XHJcbiAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdkZXRhaWxfbm90YWcnKSwgeyBkaXNhYmxlZDogdHJ1ZSwgaWQ6ICdmaWx0ZXItb3B0LW5vdGFnJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHRoaXMuYWRkRmlsdGVyT3B0KHRhZywgdGFnKSk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC10YWdsZXNzJykpIHtcclxuICAgICAgICAgIHRoaXMuYWRkRmlsdGVyT3B0KCcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjUnKSwgeyBpZDogJ2ZpbHRlci1vcHQtdGFnbGVzcycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYWRkRmlsdGVyT3B0KHRhZywgdGV4dCwgYXR0cnMpIHtcclxuICAgICAgaWYgKHRoaXMudGFncy5pbmNsdWRlcyh0YWcpKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICBvcHQudmFsdWUgPSB0YWc7XHJcbiAgICAgIG9wdC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBpZiAoYXR0cnMpIHtcclxuICAgICAgICBmb3IgKGxldCBhIGluIGF0dHJzKSBvcHQuc2V0QXR0cmlidXRlKGEsIGF0dHJzW2FdKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudGFncy5sZW5ndGggJiYgdGFnKSB7XHJcbiAgICAgICAgY29uc3Qgbm90YWdGaWx0ZXJPcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC1ub3RhZycpO1xyXG4gICAgICAgIGlmIChub3RhZ0ZpbHRlck9wdCkgc2VsZWN0LnJlbW92ZUNoaWxkKG5vdGFnRmlsdGVyT3B0KTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhZykgdGhpcy50YWdzLnB1c2godGFnKTtcclxuICAgIH0sXHJcbiAgICBnZXRUZXh0KG5hbWVzLCBzcGVjKSB7XHJcbiAgICAgIGxldCBhbGxfbWFya3NfcGx1c19tZXRhID0gc3BlYyA9PT0gJyttZXRhJyxcclxuICAgICAgICAgIGFsbF9tYXJrc19wbHVzX2xvc3QgPSBzcGVjID09PSAnK2xvc3QnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgPSBzcGVjID09PSAnK25vdGVzJyxcclxuICAgICAgICAgIGFsbF9tYXJrc19sb3N0ID0gc3BlYyA9PT0gJ2xvc3QnLFxyXG4gICAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJywgMiwgM10sXHJcblxyXG4gICAgICAgICAgcmVqZWN0ID0gZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoc3BlYykgP1xyXG4gICAgICAgICAgICBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ga2V5ICE9IHNwZWM7XHJcbiAgICAgICAgICAgIH0gOiBzcGVjID09PSAnYycgP1xyXG4gICAgICAgICAgICBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgICAgICAgfSA6IG51bGwsXHJcblxyXG4gICAgICAgICAgbmV3TGluZSA9ICdcXHJcXG4nLFxyXG4gICAgICAgICAgbmV3TGluZXMgPSAnXFxyXFxuXFxyXFxuJyxcclxuICAgICAgICAgIG5vdGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZScpLFxyXG4gICAgICAgICAgdGV4dCA9ICcnLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgbm90ZVRleHQsIGVudHJ5LCBtYXJrcywgbWFyaywgbG9zdCwgbmFtZSwgbSwgbiwgajtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIG1hcmtzID0gZW50cnkubWFya3M7XHJcbiAgICAgICAgICBsb3N0ID0gZW50cnkubG9zdDtcclxuICAgICAgICAgIG0gPSBtYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICBuID0gbG9zdC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgaWYgKCFhbGxfbWFya3NfbG9zdCkge1xyXG4gICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YSB8fCBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSBuYW1lICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICAnVVJMOiAnICsgZW50cnkudXJsICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgncGFnZV90aXRsZScpICsgJzogJyArIGVudHJ5LnRpdGxlICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3JlYXRlZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xhc3RfbW9kaWZpZWQnKSArICc6ICcgKyB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKSArXHJcbiAgICAgICAgICAgICAgICBuZXdMaW5lICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBtOyBqKyspIHtcclxuICAgICAgICAgICAgICBtYXJrID0gbWFya3Nbal07XHJcblxyXG4gICAgICAgICAgICAgIGlmIChyZWplY3QgJiYgcmVqZWN0KG1hcmsua2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSAnLS0tJyArIG5ld0xpbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRleHQgKz0gbWFyay50ZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuJykgKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzICYmIG1hcmsubm90ZSkge1xyXG4gICAgICAgICAgICAgICAgbm90ZVRleHQgPSBtYXJrLm5vdGUudGV4dCB8fCBtYXJrLm5vdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgICcgKyBub3RlICsgJzonICsgbmV3TGluZSArICcgICcgKyBub3RlVGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbiAgJykgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhbGxfbWFya3NfbG9zdCB8fCBhbGxfbWFya3NfcGx1c19sb3N0KSB7XHJcbiAgICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG9zdF9tYXJrcycpICsgJzonICsgbmV3TGluZXMgKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcclxuICAgICAgICAgICAgICBtYXJrID0gbG9zdFtqXTtcclxuXHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0ZXh0ICs9IG5ld0xpbmVzICsgbmV3TGluZXMgKyBuZXdMaW5lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ3RleHQnKSByZXR1cm4gdGhpcy5nZXRUZXh0KG5hbWVzLCBzcGVjKTtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGRhdGEgPSAnJyxcclxuICAgICAgICAgICAgbmV3TGluZXMgPSAnXFxyXFxuXFxyXFxuJyxcclxuICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSBkYXRhICs9IGVudHJpZXNbbmFtZXNbaV1dW3R5cGVdICsgbmV3TGluZXM7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRVUkxzKG5hbWVzKSB7XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgdXJscyA9IFtdLFxyXG4gICAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHVybHMucHVzaChlbnRyaWVzW25hbWVzW2ldXS51cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdXJscztcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIChkYXRlXHJcbiAgICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlYXJjaChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0ZXJtID0gZWwudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3Qgc2VhcmNoVHlwZSA9IGVsLmdldEF0dHJpYnV0ZSA/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgOiAnJztcclxuICAgICAgY29uc3QgY291bnRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgY2xhc3NNZXRoID0gdGVybSA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtdG9nZ2xlJyk7XHJcbiAgICAgIHRoaXMuc2V0dXBTZWFyY2godGVybSwgc2VhcmNoVHlwZSkucmVuZGVyRW50cmllcygpO1xyXG4gICAgICBjb3VudFNlbGVjdC5jbGFzc0xpc3RbY2xhc3NNZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRvZ2dsZS5jbGFzc0xpc3RbY2xhc3NNZXRoXSgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTZWFyY2godGVybSwgc2VhcmNoVHlwZSkge1xyXG4gICAgICB0ZXJtID0gdHlwZW9mIHRlcm0gPT09ICdzdHJpbmcnID8gdGVybSA6IHRoaXMuc2VhcmNoVGVybTtcclxuICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IHNlYXJjaENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jb3VudCcpO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkID0gW107XHJcbiAgICAgIHRoaXMuc2VhcmNoVGVybSA9IHRlcm07XHJcbiAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQnKTtcclxuICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICBzZWFyY2hDb3VudC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaGVkJyk7XHJcbiAgICAgICAgaWYgKHNlYXJjaFR5cGUgPT09ICdmdWxsLXRleHQnKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoRnVsbFRleHQodGVybSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoQnlOYW1lKHRlcm0pO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZEZ1bGxUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9IHRoaXMuc2VhcmNoZWQubGVuZ3RoIHx8ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNlYXJjaEJ5TmFtZSh0ZXJtKSB7XHJcbiAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGgsIGkgPSAwLCBuYW1lO1xyXG5cclxuICAgICAgZm9yKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICBpZiAobmFtZS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXJtKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWQucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWFyY2hGdWxsVGV4dCh0ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgbmFtZSwgbWFya3MsIGksIG1hcmtUZXh0LCBwb3MsIGZvdW5kO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuZnVsbFRleHRTZWFyY2hSZXN1bHRzID0ge307XHJcblxyXG4gICAgICBmb3IgKG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIG1hcmtzID0gZW50cmllc1tuYW1lXS5tYXJrcztcclxuICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbWFya1RleHQgPSBtYXJrc1tpXS50ZXh0O1xyXG4gICAgICAgICAgcG9zID0gbWFya1RleHQudG9Mb3dlckNhc2UoKS5zZWFyY2godGV4dCk7XHJcbiAgICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc3VsdHNbbmFtZV0gPSByZXN1bHRzW25hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICByZXN1bHRzW25hbWVdLnB1c2goeyBtYXJrOiBpLCBwb3MgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNlYXJjaChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZW50cmllcy0tbmFtZScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVudHJpZXMtLWZ1bGwtdGV4dCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGVybSkgdGhpcy5zZWFyY2gobnVsbCwgeyB2YWx1ZTogJycgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb3VudFBlclBhZ2UoZSwgZWwpIHtcclxuICAgICAgbGV0IHAgPSB0aGlzLnBlclBhZ2UgPSBlbC52YWx1ZSAqIDE7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsIHApO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICBzZXRWaWV3KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKTtcclxuICAgICAgY29uc3QgdmFsID0gZWwudmFsdWU7XHJcbiAgICAgIGlmICh2YWwgPT09ICdsaXN0JykgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnZGV0YWlsZWQtbGlzdCcpO1xyXG4gICAgICBlbHNlIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbGVkLWxpc3QnKTtcclxuICAgICAgaWYgKGUpIHRoaXMuZW1pdCgnY2hhbmdlOnZpZXctc2V0dGluZycsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBWaWV3KHZpZXcpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldC12aWV3JykudmFsdWUgPSB2aWV3O1xyXG4gICAgICB0aGlzLnNldFZpZXcobnVsbCwgeyB2YWx1ZTogdmlldyB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZUFjdGlvbihlLCBlbCkge1xyXG4gICAgICBpZiAoZWwudmFsdWUgPT09ICd0YWcnKSBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS5mb2N1cygpLCAwKTtcclxuICAgIH0sXHJcbiAgICBzb3J0KGUsIGVsKSB7XHJcbiAgICAgIGxldCBzb3J0ZWQgPSB0aGlzLnNvcnRlZCA9IGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzb3J0LXNldHRpbmcnLCBzb3J0ZWQpO1xyXG4gICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNvcnQoc29ydGVkKSB7XHJcbiAgICAgIHNvcnRlZCA9IHNvcnRlZC5zcGxpdCgnLScpO1xyXG4gICAgICB0aGlzLm5hbWVzID0gX1NPUlQuYnlbc29ydGVkWzBdXVtzb3J0ZWRbMV1dKHRoaXMub3JpZ0VudHJpZXMpO1xyXG4gICAgICB0aGlzLnNvcnRTZWFyY2hSZXN1bHRzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGZpbHRlcihlLCBlbCkge1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBlbC5ub2RlTmFtZSA9PT0gJ1NQQU4nID8gZWwuZmlyc3RDaGlsZC5kYXRhIDogZWwudmFsdWU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEVudHJpZXMgPSB7fTtcclxuICAgICAgbGV0IGVudHJ5LCByeCwgYyA9IDA7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIHJ4ID0gbmV3IFJlZ0V4cCgnXicrZmlsdGVyKyckfF4nK2ZpbHRlcisnXFxcXHN8XFxcXHMnK2ZpbHRlcisnXFxcXHN8XFxcXHMnK2ZpbHRlcisnJCcsICdnJyk7XHJcbiAgICAgICAgaWYgKChmaWx0ZXIgJiYgZW50cnkudGFnICYmIGVudHJ5LnRhZy5zZWFyY2gocngpICE9PSAtMSkgfHwgKCFlbnRyeS50YWcgJiYgZmlsdGVyID09ICcnKSkge1xyXG4gICAgICAgICAgZmlsdGVyZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICBjKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGZpbHRlcmVkRW50cmllcztcclxuICAgICAgdGhpcy5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCBjKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVGaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJykuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZmlsdGVyZWQ6aGlzdG9yeScsIHRoaXMubmFtZXMubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBzb3J0U2VhcmNoUmVzdWx0cygpIHtcclxuICAgICAgaWYgKCF0aGlzLnNlYXJjaGVkLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGEgPSBuYW1lcy5pbmRleE9mKGEpO1xyXG4gICAgICAgIGIgPSBuYW1lcy5pbmRleE9mKGIpO1xyXG4gICAgICAgIGlmIChhID09IGIpIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogMTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2ttYXJrQWxsKGUsIGVsKSB7XHJcbiAgICAgIGxldCBkaXJlY3RseSA9IHR5cGVvZiBlbCA9PT0gJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgY2hlY2tlZCA9IGRpcmVjdGx5ID8gZWwgOiBlbC5jaGVja2VkLFxyXG4gICAgICAgICAgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSxcclxuICAgICAgICAgIGkgPSBpbnB1dHMubGVuZ3RoO1xyXG5cclxuICAgICAgd2hpbGUgKGktLSkgaW5wdXRzW2ldLmNoZWNrZWQgPSBjaGVja2VkO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGxldCBhY3Rpb24gPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksXHJcbiAgICAgICAgICBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lID8gW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgIXRoaXNbYWN0aW9uXSB8fCB0aGlzW2FjdGlvbl0obmFtZSwgZWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB1bmRvU3luY1RvZ2dsZShuYW1lKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtLXN5bmNbZGF0YS1uYW1lPVwiJyArIG5hbWUgKyAnXCJdJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzID0gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIHNvcnRlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgfHwgdGhpcy5zb3J0ZWQsXHJcbiAgICAgICAgICAgIHZpZXcgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkudmlldyB8fCB0aGlzLnZpZXdNb2RlLFxyXG4gICAgICAgICAgICBsO1xyXG4gICAgICAgIHRoaXMuc29ydGVkID0gc29ydGVkO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTb3J0KHNvcnRlZCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFZpZXcodmlldyk7XHJcbiAgICAgICAgbCA9IHRoaXMubmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwU2VhcmNoKCkudG9nZ2xlSGVhZGVyRmllbGRzKGwpLnRoZW4oKCkgPT4gdGhpcy5yZW5kZXJFbnRyaWVzKCkuc2V0RmlsdGVyT3B0aW9ucygpKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGUocGFnZSkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRyeVtkYXRhLW5hbWU9XCInICsgZW50cnkubmFtZSArICdcIl0nKTtcclxuXHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5maXJzdDtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGFzdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdW50JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICAvL2VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sb3N0Lmxlbmd0aDtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0JyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICd0b2dnbGVkOnN5bmMnOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICdzeW5jZWQ6ZW50cnknOiAndXBkYXRlRXhwb3J0TGlua3MnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLmltcG9ydC1idXR0b24nOiAndHJpZ2dlckZpbGVJbnB1dCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5pbXBvcnQtZmlsZSc6ICdoYW5kbGVGaWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2Vkb3duOiB7XHJcbiAgICAgICAgICAnLmV4cG9ydC1idXR0b24nOiAndXBkYXRlRXhwb3J0TmFtZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRXhwb3J0TGlua3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW1wb3J0OiBmdW5jdGlvbihzdG9yZVN0cmluZywgdHlwZSkge1xyXG4gICAgICB2YXIgcGFyc2VkU3RyaW5nO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBwYXJzZWRTdHJpbmcgPSBKU09OLnBhcnNlKHN0b3JlU3RyaW5nKTtcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfcGFyc2UnKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXJzZWRTdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ltcG9ydDpzdG9yYWdlJywgcGFyc2VkU3RyaW5nLCB0eXBlKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlGYWlsdXJlKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0cmlnZ2VyRmlsZUlucHV0OiBmdW5jdGlvbihlLCBlbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LS0nICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSkuY2xpY2soKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVGaWxlKGUsIGVsKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpLFxyXG4gICAgICAgICAgZmlsZSA9IGVsLmZpbGVzWzBdLFxyXG4gICAgICAgICAgc2l6ZSA9IGZpbGUuc2l6ZSAvIDEwMDAwMDAsXHJcbiAgICAgICAgICB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSxcclxuICAgICAgICAgIG1vZCA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoc2l6ZSA+IDUwKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfc2l6ZScpKTtcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnc3luYycgJiYgc2l6ZSA+IDAuMDk5KVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfc2l6ZV9zeW5jJykpO1xyXG5cclxuICAgICAgaWYgKGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpICE9PSAnanNvbicpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9mb3JtYXQnKSk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgbW9kLmltcG9ydChlLnRhcmdldC5yZXN1bHQsIHR5cGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pKGZpbGUpO1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICB9LFxyXG4gICAgZGlzcGxheUZhaWx1cmUocmVhc29uKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtZXJyb3InKS5pbm5lclRleHQgPSByZWFzb247XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUV4cG9ydExpbmtzKCkge1xyXG4gICAgICBjb25zdCBsb2NhbERhdGFMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1sb2NhbCcpO1xyXG4gICAgICBjb25zdCBzeW5jZWREYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtc3luY2VkJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2NhbF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBsb2NhbERhdGFMaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnc3luY2VkX3N0b3JhZ2UnKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIHN5bmNlZERhdGFMaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUV4cG9ydE5hbWUoZSwgZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJyxcclxuICAgICAgICAnVGV4dG1hcmtlci1kYXRhLScgK1xyXG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgKyAnLScgK1xyXG4gICAgICAgIChuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICdfJykpICtcclxuICAgICAgICAnLmpzb24nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ncycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOmxvZ3MnOiAnbG9nJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjbGVhci1sb2dzJzogJ2NsZWFyJyxcclxuICAgICAgICAgICcucGVybWlzc2lvbic6ICdhc2tQZXJtaXNzaW9uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmxvZ01pc3NpbmdQZXJtaXNzaW9ucygpLnRoZW4oKCkgPT4gdGhpcy5sb2coKSk7XHJcbiAgICB9LFxyXG4gICAgbG9nTWlzc2luZ1Blcm1pc3Npb25zKCkge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5wZXJtaXNzaW9ucy5jb250YWlucyh7IHBlcm1pc3Npb25zOiBbJ3dlYk5hdmlnYXRpb24nXSB9KVxyXG4gICAgICAgIC50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgICAgaWYgKCFncmFudGVkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1wZXJtaXNzaW9uLS13ZWJOYXZpZ2F0aW9uJykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbG9nKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsb2dzID0gbG9ncyB8fCBbXTtcclxuICAgICAgICBsZXQgdGFibGVCb2R5ID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXSxcclxuICAgICAgICAgICAgbCA9IGxvZ3MubGVuZ3RoLFxyXG4gICAgICAgICAgICBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgICB0ciwgdGRfZGF0ZSwgdGRfbXNnLCBub2RlX2RhdGUsIG5vZGVfbXNnLCBub2RlX2F0dGVtcHQsIHVybCwgbG9nLCB0aW1lLCBtc2csIHJlYXNvbjtcclxuXHJcbiAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9sb2dzJyk7XHJcbiAgICAgICAgICB3aGlsZShsLS0pIHtcclxuICAgICAgICAgICAgbG9nID0gbG9nc1tsXTtcclxuICAgICAgICAgICAgbXNnID0gbG9nWzFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ251bWJlcicpIG1zZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKF9MT0dfS0VZUy5nZXRLZXlCeVZhbHVlKGxvZ1sxXSkpO1xyXG4gICAgICAgICAgICAvLydudScse3llYXI6J251bWVyaWMnLG1vbnRoOicyLWRpZ2l0JyxkYXk6JzItZGlnaXQnLGhvdXI6J251bWVyaWMnLHNlY29uZDonbnVtZXJpYycsbWludXRlOidudW1lcmljJ31cclxuICAgICAgICAgICAgdGltZSA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKChuZXcgRGF0ZShsb2dbMF0pKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICB0ZF9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgdGRfbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgbm9kZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGltZSk7XHJcbiAgICAgICAgICAgIG5vZGVfbXNnID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobXNnKTtcclxuXHJcbiAgICAgICAgICAgIHRkX2RhdGUuYXBwZW5kQ2hpbGQobm9kZV9kYXRlKTtcclxuICAgICAgICAgICAgdGRfbXNnLmFwcGVuZENoaWxkKG5vZGVfbXNnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2dbMl0pIHtcclxuICAgICAgICAgICAgICByZWFzb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAvL3JlYXNvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsb2dbMl0pKTtcclxuICAgICAgICAgICAgICByZWFzb24uaW5uZXJUZXh0ID0gbG9nWzJdO1xyXG4gICAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb2dbM10pIHtcclxuICAgICAgICAgICAgICBub2RlX2F0dGVtcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgbm9kZV9hdHRlbXB0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBbIyR7bG9nWzNdfV1gKSk7XHJcbiAgICAgICAgICAgICAgdGRfbXNnLmluc2VydEJlZm9yZShub2RlX2F0dGVtcHQsIG5vZGVfbXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG9nWzRdKSB7XHJcbiAgICAgICAgICAgICAgdXJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgdXJsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBVUkw6ICR7bG9nWzRdfWApKTtcclxuICAgICAgICAgICAgICB0ZF9tc2cuYXBwZW5kQ2hpbGQodXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9kYXRlKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRfbXNnKTtcclxuICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZUJvZHkuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQoZnJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnbm9sb2dzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhcjpsb2dzJyk7XHJcbiAgICB9LFxyXG4gICAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIChkYXRlXHJcbiAgICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgICB9LFxyXG4gICAgYXNrUGVybWlzc2lvbigpIHtcclxuICAgICAgYnJvd3Nlci5wZXJtaXNzaW9ucy5yZXF1ZXN0KHsgcGVybWlzc2lvbnM6IFsnd2ViTmF2aWdhdGlvbiddIH0pLnRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZ3JhbnRlZC1wZXJtaXNzaW9uOndlYk5hdmlnYXRpb24nKTtcclxuICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGVybWlzc2lvbi1hbGVydCcpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChhbGVydCA9PiBhbGVydC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUktFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleSwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcblxyXG4gICAgdGhpcy5zdHlsZXMgPSB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogY3VzdG9tQmdDb2xvcixcclxuICAgICAgJ2NvbG9yJzogdW5kZWZpbmVkLFxyXG4gICAgICAnYm9yZGVyLWJvdHRvbSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC13ZWlnaHQnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXN0eWxlJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1kZWNvcmF0aW9uJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1zaGFkb3cnOiB1bmRlZmluZWRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaGFkb3cgPSB7XHJcbiAgICAgIHg6ICcxcHgnLFxyXG4gICAgICB5OiAnMXB4JyxcclxuICAgICAgYmx1cjogJzFweCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmluamVjdCgpLnByZXZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ21hcmtlcnMnKS50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSBtYXJrZXJzW3RoaXMua2V5XTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZSA9IG1hcmtlciA/IG1hcmtlci5zdHlsZSA6IG51bGw7XHJcblxyXG4gICAgICB0aGlzLmF1dG9ub3RlID0gbWFya2VyICYmIG1hcmtlci5hdXRvbm90ZSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghZXhpc3RpbmdTdHlsZSkgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc3R5bGUgPSBleGlzdGluZ1N0eWxlO1xyXG5cclxuICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgIGkgPSBzdHlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgc3R5bGUsIHN0eWxlU3BsaXQsIHRleHRTaGFkb3c7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZXNbaV07XHJcbiAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICBzdHlsZVNwbGl0ID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgIHRoaXMuc3R5bGVzW3N0eWxlU3BsaXRbMF1dID0gc3R5bGVTcGxpdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGV4dFNoYWRvdyA9IHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddKSAmJiB0ZXh0U2hhZG93ICE9PSAnbm9uZScpIHtcclxuICAgICAgICBsZXQgc2hhZG93U3BsaXQgPSB0ZXh0U2hhZG93LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueCA9IHNoYWRvd1NwbGl0WzBdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnkgPSBzaGFkb3dTcGxpdFsxXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5ibHVyID0gc2hhZG93U3BsaXRbMl07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuY29sb3IgPSBzaGFkb3dTcGxpdFszXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGluamVjdCgpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIHN0eWxlcyA9IHRoaXMuc3R5bGVzLFxyXG4gICAgICAgIGJnSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3InKSxcclxuICAgICAgICBjb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3InKSxcclxuICAgICAgICBib3JkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3InKSxcclxuICAgICAgICBhdXRvbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJyksXHJcbiAgICAgICAgYmcgPSBzdHlsZXNbJ2JhY2tncm91bmQtY29sb3InXSxcclxuICAgICAgICBjb2xvciA9IHN0eWxlc1snY29sb3InXSxcclxuICAgICAgICBib3JkZXIgPSBzdHlsZXNbJ2JvcmRlci1ib3R0b20nXSxcclxuICAgICAgICBhdXRvbm90ZUNvbG9yID0gdGhpcy5hdXRvbm90ZSB8fCAnJyxcclxuICAgICAgICBzaGFkb3csIHNoYWRvd1NlbGVjdCwgaTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA9IHRoaXMuYXV0b25vdGU7XHJcbiAgICBhdXRvbm90ZUlucHV0LnZhbHVlID0gYXV0b25vdGVDb2xvciB8fCAneWVsbG93JztcclxuICAgIGF1dG9ub3RlSW5wdXQuZGlzYWJsZWQgPSAhYXV0b25vdGVDb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJnO1xyXG4gICAgYmdJbnB1dC52YWx1ZSA9IGJnIHx8ICcjZmZmZmZmJztcclxuICAgIGJnSW5wdXQuZGlzYWJsZWQgPSAhYmc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWNvbG9yO1xyXG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yIHx8ICcjMDAwMDAwJztcclxuICAgIGNvbG9ySW5wdXQuZGlzYWJsZWQgPSAhY29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYm9yZGVyO1xyXG4gICAgYm9yZGVySW5wdXQudmFsdWUgPSBib3JkZXIgfHwgJzFweCBzb2xpZCAjZmYwMDAwJztcclxuICAgIGJvcmRlcklucHV0LmRpc2FibGVkID0gIWJvcmRlcjtcclxuXHJcbiAgICBbJ2ZvbnQtc2l6ZScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ3RleHQtZGVjb3JhdGlvbiddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb3ApLnZhbHVlID0gc3R5bGVzW3Byb3BdIHx8ICdkZWZhdWx0JztcclxuICAgIH0pO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3cnKTtcclxuICAgIHNoYWRvdyA9IHN0eWxlc1sndGV4dC1zaGFkb3cnXTtcclxuICAgIGkgPSAhc2hhZG93ID8gMCA6IHNoYWRvdyA9PT0gJ25vbmUnID8gMiA6IDE7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgc2hhZG93U2VsZWN0LmNoaWxkcmVuW2ldLmNsaWNrKCk7XHJcblxyXG4gICAgWyd4JywgJ3knLCAnYmx1cicsICdjb2xvciddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdy0nICsgcHJvcCkudmFsdWUgPSBtYXJrZXIuc2hhZG93W3Byb3BdLnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHByZXZpZXcoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpLnN0eWxlID0gdGhpcy5zdHlsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKGVsKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGVsLmNsYXNzTGlzdCxcclxuICAgICAgICBwcm9wID0gZWwubmFtZSxcclxuICAgICAgICB2YWw7XHJcblxyXG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2Nzcy1jb2xvcicpKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHByb3AgPT09ICdib3JkZXItYm90dG9tJyA/ICcxcHggc29saWQgJyArIHZhbCA6IHZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93JykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgICBjYXNlICdub25lJzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9ICdub25lJzsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkZWZhdWx0JzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHVuZGVmaW5lZDsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzaGFkb3cnOiBtYXJrZXIuc2V0U2hhZG93KCk7IGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXZhbHVlJykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctcHgtdmFsdWUnKSlcclxuICAgICAgICAgIHZhbCArPSAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRvd1twcm9wXSA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldFNoYWRvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wID09PSAnYm9yZGVyLWJvdHRvbScpIHtcclxuICAgICAgdmFsID0gJzFweCBzb2xpZCAnICsgZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3R5bGUoKS5wcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGlzVmFsaWQocHJvcCwgdmFsKSB7XHJcbiAgICBsZXQgdmFsaWQ7XHJcblxyXG4gICAgc3dpdGNoKHByb3ApIHtcclxuICAgICAgY2FzZSAnYmFja2dyb3VuZC1jb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvcmRlci1ib3R0b20nOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6IHZhbGlkID0gL15bMC05XXsxLDJ9cHgkLy50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LWZhbWlseSc6IHZhbGlkID0gL15bYS16LFxccy1dezUsNDB9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtd2VpZ2h0JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zdHlsZSc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtZGVjb3JhdGlvbic6IHZhbGlkID0gL15bYS16LV17NywxMn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1zaGFkb3cnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd4JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JsdXInOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcbiAgc2V0U2hhZG93KCkge1xyXG4gICAgdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB0aGlzLnNoYWRvdy54ICsgJyAnICsgdGhpcy5zaGFkb3cueSArICcgJyArIHRoaXMuc2hhZG93LmJsdXIgKyAnICcgKyB0aGlzLnNoYWRvdy5jb2xvcjtcclxuICB9XHJcbiAgc2V0U3R5bGUoKSB7XHJcbiAgICBsZXQgc3R5bGUgPSAnJywgdmFsO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zdHlsZXMpIHtcclxuICAgICAgdmFsID0gdGhpcy5zdHlsZXNbaV07XHJcbiAgICAgIGlmICh2YWwpIHN0eWxlICs9IGkgKyAnOicgKyB2YWwgKyAnOyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbCxcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ2xpJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgICAnLm5hdml0ZW0nOiAndG9nZ2xlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIHBhZ2VOYXY6IG51bGwsXHJcbiAgICBjdXJyZW50OiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnBhZ2VOYXYgPSBlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGFnZS1uYXYnKTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLm9wZW4oY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykgfHwgdGhpcy5jdXJyZW50ID09IGVsKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50KSB0aGlzLmNsb3NlKHRoaXMuY3VycmVudCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oZWwpO1xyXG4gICAgfSxcclxuICAgIG9wZW4oZWwpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbmVkOnRhYicsIHRhcmdldElkKTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gZWw7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VOYXYpIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9ICdUZXh0bWFya2VyIC0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHRhcmdldElkKTtcclxuICAgIH0sXHJcbiAgICBjbG9zZShlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVybWlzc2lvbi1hbGVydCcpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnBlcm1pc3Npb24nOiAnYXNrUGVybWlzc2lvbidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGJyb3dzZXIucGVybWlzc2lvbnMuY29udGFpbnMoeyBwZXJtaXNzaW9uczogWyd3ZWJOYXZpZ2F0aW9uJ10gfSlcclxuICAgICAgICAudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgIGlmICghZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc2tQZXJtaXNzaW9uKCkge1xyXG4gICAgICBicm93c2VyLnBlcm1pc3Npb25zLnJlcXVlc3QoeyBwZXJtaXNzaW9uczogWyd3ZWJOYXZpZ2F0aW9uJ10gfSkudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCdncmFudGVkLXBlcm1pc3Npb246d2ViTmF2aWdhdGlvbicpO1xyXG4gICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwZXJtaXNzaW9uLWFsZXJ0JykpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGFsZXJ0ID0+IGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSS0VSIGZyb20gJy4vbWFya2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnOiAnc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJyxcclxuICAgICAgICAnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJzogJ3VwZGF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmNzcyc6ICdjaGFuZ2VTdHlsZScsXHJcbiAgICAgICAgICAnI2N1c3RvbWl6ZWQta2V5JzogJ3VwZGF0ZU1hcmtlcicsXHJcbiAgICAgICAgICAnI2FkZC1rZXknOiAnYWRkTWFya2VyJyxcclxuICAgICAgICAgICcjcmVtb3ZlLWtleSc6ICdyZW1vdmVNYXJrZXInLFxyXG4gICAgICAgICAgJy5tYXJrLW9wdCc6ICdjaGFuZ2VNYXJrTWV0aG9kJyxcclxuICAgICAgICAgICcuc2MtY2InOiAndG9nZ2xlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zaG9ydGN1dC1zZWxlY3QnOiAnY2hhbmdlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zYXZlLW9wdCc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgICAgICcubmFtaW5nLW9wdCc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAgICAgJyNub3Rlcy1uZXcnOiAndG9nZ2xlU2F2ZU5vdGVPcHQnLFxyXG4gICAgICAgICAgJy5jdXN0b21pemUtcXVpY2tidXR0b25zJzogJ2NoYW5nZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuZG93bmxvYWQtcXVpY2tidXR0b24tb3B0JzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuY3RtLWNiJzogJ3RvZ2dsZUN0bScsXHJcbiAgICAgICAgICAnLm5vdGVzLWNiJzogJ3RvZ2dsZU5vdGVzJyxcclxuICAgICAgICAgICcubWlzYy1jYic6ICd0b2dnbGVNaXNjJyxcclxuICAgICAgICAgICcudGJicG93ZXItb3B0JzogJ3RvZ2dsZVRCQlBvd2VyT3B0JyxcclxuICAgICAgICAgICcudG11aXBvcyc6ICdjaGFuZ2VUbXVpUG9zaXRpb25PcHQnLFxyXG4gICAgICAgICAgJyNwcml2YXRlLXNhdmUnOiAndG9nZ2xlUHJpdlNhdmUnLFxyXG4gICAgICAgICAgJyNhdXRvLW5vdGUnOiAndG9nZ2xlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpbW11dCc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICAgICAnI2Ryb3AtbG9zc2VzJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAgICAgJyNhdXRvUmV0cnknOiAndG9nZ2xlQXV0b1JldHJ5T3B0JyxcclxuICAgICAgICAgICcjYXV0b25vdGUtY29sb3InOiAnY2hhbmdlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpZ25vcmUtaGFzaCc6ICdjaGFuZ2VIYXNoT3B0JyxcclxuICAgICAgICAgICcjYWRkb24tYXV0b2NzJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcbiAgICAgICAgICAnI2FkZG9uLWlmcmFtZXMnOiAndG9nZ2xlSUZyYW1lT3B0JyxcclxuICAgICAgICAgICcjbWlzYy1ub3RlZm9udHNpemUnOiAnY2hhbmdlTm90ZXNGb250U2l6ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnI2N1c3RvbS1zZWFyY2gnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgICAgICcuY3VzdG9tLXNlYXJjaC1pbnB1dCc6ICdoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MnLFxyXG4gICAgICAgICAgJyNkaXNhYmxlLW5vdGlmcyc6ICdkaXNhYmxlQWxsTm90aWZpY2F0aW9ucydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGxvd2VkS2V5czogJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG4gbyBwIHEgciBzIHQgdSB2IHggeSB6IDAgMSA0IDUgNiA3IDggOSBlbnRlciAtICsnLnNwbGl0KCcgJyksXHJcbiAgICBhbGxvd2VkU2hvcnRjdXRzOiBbJycsICdjdHJsS2V5JywgJ3NoaWZ0S2V5JywgJ2FsdEtleScsICdjdHJsS2V5LXNoaWZ0S2V5JywgJ2N0cmxLZXktYWx0S2V5JywgJ3NoaWZ0S2V5LWFsdEtleScsICdtZXRhS2V5JywgJ21ldGFLZXktc2hpZnRLZXknLCAnbWV0YUtleS1hbHRLZXknXSxcclxuICAgIGFsbG93ZWRRdWlja2J1dHRvbk9wdHM6IFsndGl0bGUnLCAndXJsJywgJ3RleHQnLCAndGV4dCArbWV0YScsICd0ZXh0ICtub3RlcycsICd0ZXh0ICtsb3N0JywgJ3RleHQgbScsICd0ZXh0IDInLCAndGV4dCAzJywgJ3RleHQgYycsICd0ZXh0IGxvc3QnXSxcclxuICAgIG1hcmtlcktleXM6IFsnbScsICcyJywgJzMnXSxcclxuICAgIGN1c3RvbU1hcmtlcktleXM6IFtdLFxyXG4gICAgbWFya2VyOiBudWxsLFxyXG4gICAgY3VzdG9tU2VhcmNoOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH0sXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycyxcclxuICAgICAgICAgICAgbWFya2VyS2V5cyA9IHRoaXMubWFya2VyS2V5cyxcclxuICAgICAgICAgICAgY3VzdG9tTWFya2VyS2V5cyA9IHRoaXMuY3VzdG9tTWFya2VyS2V5cyxcclxuICAgICAgICAgICAgaSwga2V5O1xyXG5cclxuICAgICAgICBmb3IgKGtleSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICBpID0ga2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICBpZiAoIW1hcmtlcktleXMuaW5jbHVkZXMoaSkgJiYgIWN1c3RvbU1hcmtlcktleXMuaW5jbHVkZXMoaSkpXHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTWFya2VyS2V5cy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zKClcclxuICAgICAgICAgICAgLnVwZGF0ZU1hcmtlcih0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJylcclxuICAgICAgICAgICAgLmluamVjdFNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20ta2V5JykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbicpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzID0gW107XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKS5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlTWFya2VyKGUsIGVsLCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbCA/IGVsLnZhbHVlIDogZSA/IGUgOiB0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJztcclxuXHJcbiAgICAgIHRoaXMubWFya2VyID0gbmV3IF9NQVJLRVIoa2V5LCBjdXN0b21CZ0NvbG9yKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgICAgIGxldCBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuXHJcbiAgICAgICAgICBhbGxvd2VkS2V5cyA9IHRoaXMuYWxsb3dlZEtleXMsXHJcbiAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG5cclxuICAgICAgICAgIGEgPSBhbGxvd2VkS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBjID0gY3VzdG9tTWFya2VyS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuXHJcbiAgICAgICAgICBmcmFnbWVudDEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcblxyXG4gICAgICAgICAgb3B0aW9uLCBpY29uLCB2YWwsIFZhbDtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gY3VzdG9tTWFya2VyS2V5c1tpXTtcclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBWYWwgPSBWYWwgPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBWYWw7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQxLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcblxyXG4gICAgICAgIGZyYWdtZW50My5hcHBlbmRDaGlsZChvcHRpb24uY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50Mi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgICAgaWNvbi5pZCA9ICdjdXN0b20ta2V5LScgKyB2YWw7XHJcbiAgICAgICAgaWNvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDEpO1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChmcmFnbWVudDIpO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQzKTtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBhbGxvd2VkS2V5c1tpXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyh2YWwpKVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG5cclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFkZEtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDQpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgICAgbGV0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cyxcclxuICAgICAgICAgIGksIHNjQ2hlY2tib3gsIHNjU2VsZWN0LCBjbUNoZWNrYm94LCBzYztcclxuXHJcbiAgICAgIGZvciAoaSBpbiBzaG9ydGN1dHMpIHtcclxuICAgICAgICBzYyA9IHNob3J0Y3V0c1tpXTtcclxuICAgICAgICBzY0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjLScgKyBpKTtcclxuICAgICAgICBzY1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC1zZWxlY3QtJyArIGkpO1xyXG4gICAgICAgIGNtQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY20tJyArIGkpO1xyXG5cclxuICAgICAgICBpZiAoc2NDaGVja2JveCkgc2NDaGVja2JveC5jaGVja2VkID0gc2NbMV07XHJcbiAgICAgICAgaWYgKHNjU2VsZWN0KSBzY1NlbGVjdC52YWx1ZSA9IHNjWzBdO1xyXG4gICAgICAgIGlmIChjbUNoZWNrYm94KSBjbUNoZWNrYm94LmNoZWNrZWQgPSBzY1syXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzLmhpc3RvcnksXHJcbiAgICAgICAgICBzYXZlT3B0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzYXZlLW9wdCcpO1xyXG5cclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncy5hdXRvc2F2ZSkgc2F2ZU9wdHNbMF0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGVsc2Ugc2F2ZU9wdHNbMV0uY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS0nICsgaGlzdG9yeVNldHRpbmdzLm5hbWluZykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcml2YXRlLXNhdmUnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVJblByaXY7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbW11dCcpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuaW1tdXQ7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wLWxvc3NlcycpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuZHJvcExvc3NlcztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9SZXRyeScpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuYXV0b1JldHJ5O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtbmV3JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lnbm9yZS1oYXNoJykuY2hlY2tlZCA9ICFoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaDtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQgPT09ICdqc29uJykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC1qc29uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLXRleHQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWUgPSBoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBtaXNjU2V0dGluZ3MgPSBzZXR0aW5ncy5taXNjO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstbWV0aG9kLS0nICsgbWlzY1NldHRpbmdzLm1hcmttZXRob2QpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuYm1pY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RlaWNvbicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVvbmNsaWNrJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3Rlb25jbGljaztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZXRyYW5zcCcpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZXRyYW5zcDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZXBsYWludmlldycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZXBsYWludmlldztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZWZvbnRzaXplJykudmFsdWUgPSBtaXNjU2V0dGluZ3Mubm90ZWZvbnRzaXplO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tZmFpbHVyZScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZmFpbHVyZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1yZXN0b3JhdGlvbi1zdWNjZXNzJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5zdWNjZXNzTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXBibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MucGJtTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWVycm9yJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5lcnJvck5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXAtbm90ZScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MudmlwTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWxvYWQnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmxvYWROb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzBdIDogdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzFdIDogJyc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ub3RlaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ibWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG5cclxuICAgICAgaWYgKG1pc2NTZXR0aW5ncy50YmJwb3dlcikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YmJwb3dlci1vbicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YmJwb3dlci1vZmYnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZG9uLWF1dG9jcycpLmNoZWNrZWQgPSBzZXR0aW5ncy5hZGRvbi5hdXRvY3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRvbi1pZnJhbWVzJykuY2hlY2tlZCA9ICFzZXR0aW5ncy5hZGRvbi5pZnJhbWVzO1xyXG4gICAgfSxcclxuICAgIHNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN1Ym1pdHRlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSxcclxuICAgIGhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN1Ym1pdHRlZCcpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVN0eWxlKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMubWFya2VyLnVwZGF0ZShlbCk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJywgbWFya2VyLmtleSwgbWFya2VyLnN0eWxlKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVBdXRvTm90ZU9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBlbC5jaGVja2VkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJykudmFsdWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsIHRoaXMubWFya2VyLmtleSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VBdXRvTm90ZU9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA/IGVsLnZhbHVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLCB0aGlzLm1hcmtlci5rZXksIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlSGFzaE9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpoYXNoLXNldHRpbmcnLCAhZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSW1tdXRPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aW1tdXQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZURyb3BMb3NzZXNPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQXV0b1JldHJ5T3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9SZXRyeS1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQXV0b2NzT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSUZyYW1lT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmlmcmFtZS1zZXR0aW5nJywgIWVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGFkZE1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICByZW1vdmVLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uID0gZWwuY2hpbGRyZW5bZWwuc2VsZWN0ZWRJbmRleF0sXHJcbiAgICAgICAgICBjbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICAgICAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICBiZ0NvbG9yID0gdGhpcy5nZXRSYW5kb21MaWdodENvbG9yKCk7XHJcblxyXG4gICAgICBpZiAoIWtleSB8fCByZW1vdmVLZXlTZWxlY3QuY2hpbGRyZW4ubGVuZ3RoID49IDEyIHx8IHRoaXMuYWxsb3dlZEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAga2V5U2VsZWN0LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgY2xvbmUuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgIGljb24uaWQgPSAnY3VzdG9tLWtleS0nICsga2V5O1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgaWNvbi5pbm5lclRleHQgPSBrZXkgPT09ICdlbnRlcicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBrZXkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlTWFya2VyKGtleSwgbnVsbCwgYmdDb2xvcik7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2FkZDpjdXN0b20tbWFya2VyJywga2V5LCAnYmFja2dyb3VuZC1jb2xvcjonICsgYmdDb2xvciArICc7Jyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya2VyKGUsIGVsKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbC52YWx1ZSxcclxuICAgICAgICAgIGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIGFkZEtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQta2V5JyksXHJcbiAgICAgICAgICBvcHRpb247XHJcblxyXG4gICAgICBpZiAoIWtleSB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICBhZGRLZXlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgYWRkS2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICBlbC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgIGtleVNlbGVjdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbi0nICsga2V5KVswXS5yZW1vdmUoKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXktJyArIGtleSkucmVtb3ZlKCk7XHJcbiAgICAgIGtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlTWFya2VyKCdtJyk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZTpjdXN0b20tbWFya2VyJywga2V5KTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VNYXJrTWV0aG9kKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNob3J0Y3V0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICBpZiAoIXRoaXMuYWxsb3dlZFNob3J0Y3V0cy5pbmNsdWRlcyhlbC52YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ3RtKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOmN0bS1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2F2ZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLCAhIWVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVQcml2U2F2ZShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpwcml2LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VOYW1pbmdPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2F2ZU5vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlUXVpY2tidXR0b25PcHQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRRdWlja2J1dHRvbk9wdHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHN3aXRjaFF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgY29uc3QgdmFsID0gdHlwZSA9PT0gJ2pzb24nID8gdHlwZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja2J1dHRvbi1kb3dubG9hZC1zZWxlY3QnKS52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTm90ZXMoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlQWxsTm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgY29uc3QgY2JzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1uZXcnKV0uY29uY2F0KEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm90ZXMtY2InKSkpO1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAoIWNicy5sZW5ndGgpIHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICBjYnMucG9wKCkuY2xpY2soKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVNaXNjKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRCQlBvd2VyT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9ICEhKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKjEpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJywgZWwubmFtZSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VUbXVpUG9zaXRpb25PcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWlzYy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG11aXBvcycpKS5mb3JFYWNoKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUgPSBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTm90ZXNGb250U2l6ZShlLCBlbCkge1xyXG4gICAgICBpZiAoZWwudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDdXN0b21TZWFyY2goZSwgZWwpIHtcclxuICAgICAgdGhpcy5oaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKTtcclxuICAgICAgY29uc3QgaW5wMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdGFydCcpO1xyXG4gICAgICBjb25zdCBpbnAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLWVuZCcpO1xyXG4gICAgICBjb25zdCBwYXJ0MSA9IGlucDEudmFsdWU7XHJcbiAgICAgIGNvbnN0IHBhcnQyID0gaW5wMi52YWx1ZTtcclxuICAgICAgaWYgKCFwYXJ0MSAmJiAhcGFydDIpIHtcclxuICAgICAgICBpbnAxLnZhbHVlID0gdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgICAgaW5wMi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLCBbcGFydDEsIHBhcnQyXSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRSYW5kb21MaWdodENvbG9yKCkge1xyXG4gICAgICByZXR1cm4gJyMnICsgTWF0aC5mbG9vcigoMC44ICsgTWF0aC5yYW5kb20oKSAqIDAuMTc1KSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZmFpbGVkOnRvZ2dsZS1zeW5jJzogJ3VuZG8nXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLXNldHRpbmdzJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0taGlzdG9yeScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tcGFnZW5vdGVzJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfcGFnZW5vdGVzID09PSAnc3luYycpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6c3luYycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bmRvKGZpZWxkKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tJyArIGZpZWxkKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBfVE9HR0xFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUsIGZhbHNlKTtcclxuICB9XHJcbiAgdG9nZ2xlKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgbGV0IGRhdGFUYXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSxcclxuICAgICAgICB0YXJnZXRzID0gZGF0YVRhcmdldCA/IGRhdGFUYXJnZXQuc3BsaXQoJyAnKSA6IG51bGwsXHJcbiAgICAgICAgZGF0YVRvZ2dsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpLFxyXG4gICAgICAgIHJvbGVzID0gZGF0YVRvZ2dsZSA/IGRhdGFUb2dnbGUuc3BsaXQoJyAnKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKHJvbGVzKSB7XHJcbiAgICAgIHJvbGVzLmZvckVhY2goKHJvbGUsIGkpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldHNbaV0pLmNsYXNzTGlzdFtyb2xlXSgnb3BlbicpKTtcclxuICAgIH1cclxuICAgIGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1swXSkuZGlzYWJsZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJvdWJsZXNob290aW5nJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICdvcHRpb24nOiAndG9nZ2xlVG9waWMnLFxyXG4gICAgICAgICAgJy50cm91YmxlX19hbnN3ZXItLWJ0bic6ICdzaG93QXJ0aWNsZScsXHJcbiAgICAgICAgICAnLnRyb3VibGVfX2Fuc3dlci0tc3ViJzogJ3Nob3dBcnRpY2xlJyxcclxuICAgICAgICAgICcudHJvdWJsZV9fY2FuY2VsJzogJ2NhbmNlbCcsXHJcbiAgICAgICAgICAnLnRyb3VibGVfX2Fuc3dlci0tbm8tZW50cmllcyc6ICdzY2FuSGlzdG9yeSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3VycmVudFRyb3VibGU6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVUb3BpYyhlLCBlbCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50VHJvdWJsZSkgdGhpcy5jdXJyZW50VHJvdWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgIGNvbnN0IG5ld1Ryb3VibGUgPSB0aGlzLmN1cnJlbnRUcm91YmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKTtcclxuICAgICAgbmV3VHJvdWJsZS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0FydGljbGUoZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGNvbnN0IGJveENsYXNzTGlzdCA9IGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3Q7XHJcbiAgICAgIGJveENsYXNzTGlzdC5hZGQoJ2Fuc3dlcmVkJyk7XHJcbiAgICAgIGJveENsYXNzTGlzdC5hZGQoYGFuc3dlcmVkLS0ke2VsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpfWApO1xyXG4gICAgfSxcclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbnN3ZXJlZCcpKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhbnN3ZXJlZCcpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Fuc3dlcmVkLS1ubycpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Fuc3dlcmVkLS15ZXMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2Nhbkhpc3RvcnkoKSB7XHJcblxyXG4gICAgICBjb25zdCBhcnRpY2xlcyA9IFtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1zY2FuX19lcnJvcicpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LXNjYW5fX2VtcHR5JyksXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3Rvcnktc2Nhbl9fbm9uZW1wdHknKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1zY2FuX19ub21hcmtzJylcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgW2VyckVsLCBlbXB0eUVsLCBub25lbXB0eUVsLCBub21hcmtzRWxdID0gYXJ0aWNsZXM7XHJcblxyXG4gICAgICBhcnRpY2xlcy5mb3JFYWNoKGEgPT4gYS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBpZiAoIWhpc3RvcnkgfHwgIWhpc3RvcnkuZW50cmllcykge1xyXG4gICAgICAgICAgZXJyRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGxlbiA9IGhpc3RvcnkuZW50cmllcyA/IE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykubGVuZ3RoIDogMDtcclxuXHJcbiAgICAgICAgICBpZiAobGVuKSB7XHJcbiAgICAgICAgICAgIG5vbmVtcHR5RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgIGxldCBub21hcmtzID0gdHJ1ZSwgZW50cnk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGUgaW4gaGlzdG9yeS5lbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgZW50cnkgPSBoaXN0b3J5LmVudHJpZXNbZV07XHJcbiAgICAgICAgICAgICAgaWYgKGVudHJ5Lm1hcmtzICYmIGVudHJ5Lm1hcmtzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3Rvcnktc2Nhbl9fY291bnQnKS5pbm5lclRleHQgPSBsZW47XHJcbiAgICAgICAgICAgICAgICBub21hcmtzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vbWFya3MpIHtcclxuICAgICAgICAgICAgICBub21hcmtzRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVtcHR5RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIGVyckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3Rvcnktc2Nhbl9fZXJyb3Jtc2cxJykuaW5uZXJUZXh0ID0gZS50b1N0cmluZygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXJ0aWNsZUNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJvdWJsZS0tMycpLmNsYXNzTGlzdDtcclxuXHJcbiAgICAgICAgICBhcnRpY2xlQ2xhc3Nlcy5hZGQoJ2Fuc3dlcmVkJyk7XHJcbiAgICAgICAgICBhcnRpY2xlQ2xhc3Nlcy5hZGQoJ2Fuc3dlcmVkLS15ZXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2FkZG9uLXBhZ2UnLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOmN0bS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTphdXRvUmV0cnktc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTphdXRvY3Mtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aWZyYW1lLXNldHRpbmcnLFxyXG4gICAgICAnYWRkOmN1c3RvbS1tYXJrZXInLFxyXG4gICAgICAncmVtb3ZlOmN1c3RvbS1tYXJrZXInLFxyXG4gICAgICAnZGVsZXRlOmVudHJpZXMnLFxyXG4gICAgICAnY2xlYW46ZW50cmllcycsXHJcbiAgICAgICdvcGVuOmVudHJpZXMnLFxyXG4gICAgICAncmVuYW1lOmVudHJ5JyxcclxuICAgICAgJ2NvcnJlY3QtbmFtZTplbnRyeScsXHJcbiAgICAgICd2aWV3OmVudHJ5JyxcclxuICAgICAgJ3N5bmM6ZW50cnknLFxyXG4gICAgICAnc3luYzpoaXN0b3J5JyxcclxuICAgICAgJ3N5bmM6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdjbGVhcjpsb2dzJyxcclxuICAgICAgJ3RhZzplbnRyaWVzJyxcclxuICAgICAgJ2dyYW50ZWQtcGVybWlzc2lvbjp3ZWJOYXZpZ2F0aW9uJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlLFxyXG4gICAgICBhdXRvUmV0cnk6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgbm90ZWZvbnRzaXplOiAxMixcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgbG9hZE5vdGU6IGZhbHNlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICd0bSdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG4gIGpzX2luamVjdGlvbl9mYWlsdXJlOiAzNyxcclxuICBjc3NfaW5qZWN0aW9uX2ZhaWx1cmU6IDM4LFxyXG4gIG1pc3NpbmdfcGVybWlzc2lvbl93bjogMzksXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBpZiAoIXVybCkgcmV0dXJuICcnO1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkLCAnJyk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJywgJ0hyZWYnXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGFyZ3NbMF0udGFiSWQsIHsgZXY6IGV2ZW50LCB3YWl0OiB0cnVlIH0sIHsgZnJhbWVJZDogYXJnc1swXS5mcmFtZUlkIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgdGhpcy5yZWdpc3Rlck9uZU9mZkV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyT25lT2ZmRXZlbnRzKGV2ZW50cy5PTkVPRkYpO1xyXG4gIH1cclxuICByZWdpc3Rlck9uZU9mZkV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyB8fCAoIGV2ZW50cyA9IHRoaXMuZXZlbnRzLk9ORU9GRik7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBfUFJJVlBPUlQgZXh0ZW5kcyBfUE9SVCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAhdGhpcy5wb3J0IHx8IHRoaXMucG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIodGhpcy5wb3J0TGlzdGVuZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHMuQ09OTkVDVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgICAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IGAke3RoaXMubmFtZX1fJHt0aGlzLmlkfWAgfSk7XHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLnBvcnRMaXN0ZW5lciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSk7XHJcbiAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBfQkdQT1JUIGV4dGVuZHMgX1BPUlQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMucG9ydHMgPSB7fTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50cy5DT05ORUNUSU9OO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlck9uQ29ubmVjdExpc3RlbmVyKCkge1xyXG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcnRzID0gdGhpcy5wb3J0cztcclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpO1xyXG4gICAgICAgICAgICBwb3J0c1twb3J0Lm5hbWVdID0gcG9ydDtcclxuICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3J0Lm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgcG9ydHNbcG9ydC5uYW1lXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgcG9ydHMgPSB0aGlzLnBvcnRzO1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwIGluIHBvcnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgIHBvcnRzW3BdLnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9QT1JULCBfUFJJVlBPUlQsIF9CR1BPUlQgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==