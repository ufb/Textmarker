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
  var _DOMMODULE2;

  return new _utils._DOMMODULE((_DOMMODULE2 = {
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
  }, _defineProperty(_DOMMODULE2, 'delete', function _delete(names) {
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
  }), _defineProperty(_DOMMODULE2, "clean", function clean(names) {
    this.emit('clean:entries', names);
  }), _defineProperty(_DOMMODULE2, "download", function download(names, type, spec) {
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
  }), _defineProperty(_DOMMODULE2, "export", function _export(names) {
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
  }), _defineProperty(_DOMMODULE2, "sync", function sync(name, el) {
    this.emit('sync:entry', name[0], el.classList.contains('active'));
  }), _defineProperty(_DOMMODULE2, "visit", function visit(names) {
    var _this2 = this;

    this.getURLs(names).then(function (urls) {
      return _this2.emit('open:entries', urls, names);
    });
  }), _defineProperty(_DOMMODULE2, "open", function open(e, el) {
    this.emit('open:entries', el.getAttribute('data-url'), el.getAttribute('data-name'));
  }), _defineProperty(_DOMMODULE2, "edit", function edit(e, el) {
    var newName = window.prompt(browser.i18n.getMessage('nm_message_edit'));

    if (newName) {
      var oldName = el.getAttribute('data-name');
      var area = el.parentNode.getElementsByClassName('switch--sync')[0].classList.contains('active') ? 'sync' : 'local';
      this.emit('rename:entry', oldName, newName, area);
    }
  }), _defineProperty(_DOMMODULE2, "view", function view(e, el) {
    this.emit('view:entry', el.getAttribute('data-name'));
  }), _defineProperty(_DOMMODULE2, "tag", function tag(names, _tag, force) {
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
  }), _defineProperty(_DOMMODULE2, "removeTags", function removeTags(names) {
    this.tag(names, '', true);
  }), _defineProperty(_DOMMODULE2, "processSelection", function processSelection() {
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
  }), _defineProperty(_DOMMODULE2, "renderEntries", function renderEntries() {
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
  }), _defineProperty(_DOMMODULE2, "toggleHeaderFields", function toggleHeaderFields(l) {
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
  }), _defineProperty(_DOMMODULE2, "setFilterOptions", function setFilterOptions() {
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
  }), _defineProperty(_DOMMODULE2, "addFilterOpt", function addFilterOpt(tag, text, attrs) {
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
  }), _defineProperty(_DOMMODULE2, "getText", function getText(names, spec) {
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
  }), _defineProperty(_DOMMODULE2, "getData", function getData(names, type, spec) {
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
  }), _defineProperty(_DOMMODULE2, "getURLs", function getURLs(names) {
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
  }), _defineProperty(_DOMMODULE2, "optimizeDateString", function optimizeDateString(date) {
    return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
      return '0' + p + q;
    }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
      return p + '0' + q;
    });
  }), _defineProperty(_DOMMODULE2, "search", function search(e, el) {
    var term = el.value.toLowerCase();
    var searchType = el.getAttribute ? el.getAttribute('data-type') : '';
    var countSelect = document.getElementById('count');
    var classMeth = term ? 'add' : 'remove';
    var toggle = document.getElementById('search-toggle');
    this.setupSearch(term, searchType).renderEntries();
    countSelect.classList[classMeth]('u-display--none');
    toggle.classList[classMeth]('active');
  }), _defineProperty(_DOMMODULE2, "setupSearch", function setupSearch(term, searchType) {
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
  }), _defineProperty(_DOMMODULE2, "searchByName", function searchByName(term) {
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
  }), _defineProperty(_DOMMODULE2, "searchFullText", function searchFullText(text) {
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
  }), _defineProperty(_DOMMODULE2, "toggleSearch", function toggleSearch(e, el) {
    if (el.classList.contains('active')) {
      document.getElementById('search-entries--name').value = '';
      document.getElementById('search-entries--full-text').value = '';
      if (this.searchTerm) this.search(null, {
        value: ''
      });
    }
  }), _defineProperty(_DOMMODULE2, "changeCountPerPage", function changeCountPerPage(e, el) {
    var p = this.perPage = el.value * 1;
    this.page = 1;
    this.emit('changed:per-page-count', p);
    this.renderEntries();
  }), _defineProperty(_DOMMODULE2, "setView", function setView(e, el) {
    var table = document.getElementById('entries');
    var val = el.value;
    if (val === 'list') table.classList.remove('detailed-list');else table.classList.add('detailed-list');
    if (e) this.emit('change:view-setting', val);
  }), _defineProperty(_DOMMODULE2, "setupView", function setupView(view) {
    document.getElementById('set-view').value = view;
    this.setView(null, {
      value: view
    });
  }), _defineProperty(_DOMMODULE2, "onChangeAction", function onChangeAction(e, el) {
    if (el.value === 'tag') setTimeout(function () {
      return document.getElementById('tag').focus();
    }, 0);
  }), _defineProperty(_DOMMODULE2, "sort", function sort(e, el) {
    var sorted = this.sorted = el.value;
    this.emit('change:sort-setting', sorted);
    this.setupSort(sorted).renderEntries();
  }), _defineProperty(_DOMMODULE2, "setupSort", function setupSort(sorted) {
    sorted = sorted.split('-');
    this.names = _historySort2["default"].by[sorted[0]][sorted[1]](this.origEntries);
    this.sortSearchResults();
    return this;
  }), _defineProperty(_DOMMODULE2, "filter", function filter(e, el) {
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
  }), _defineProperty(_DOMMODULE2, "removeFilter", function removeFilter(e, el) {
    el.parentNode.classList.remove('active');
    document.getElementById('filter-entries').selectedIndex = 0;
    this.entries = this.origEntries;
    this.filtered = false;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', this.names.length);
  }), _defineProperty(_DOMMODULE2, "sortSearchResults", function sortSearchResults() {
    if (!this.searched.length) return;
    var names = this.names;
    this.searched.sort(function (a, b) {
      a = names.indexOf(a);
      b = names.indexOf(b);
      if (a == b) return 0;
      return a < b ? -1 : 1;
    });
  }), _defineProperty(_DOMMODULE2, "checkmarkAll", function checkmarkAll(e, el) {
    var directly = typeof el === 'boolean',
        checked = directly ? el : el.checked,
        inputs = document.getElementById('entries').getElementsByTagName('input'),
        i = inputs.length;

    while (i--) {
      inputs[i].checked = checked;
    }

    return false;
  }), _defineProperty(_DOMMODULE2, "delegateButtonAction", function delegateButtonAction(e, el) {
    var action = el.getAttribute('data-action'),
        name = el.getAttribute('data-name');
    name = name ? [name] : undefined;
    !this[action] || this[action](name, el);
  }), _defineProperty(_DOMMODULE2, "toggleSwitch", function toggleSwitch(e, el) {
    el = el.classList.contains('switch--sync') ? el : el.parentNode;
    el.classList.toggle('active');
    this.delegateButtonAction(e, el);
  }), _defineProperty(_DOMMODULE2, "undoSyncToggle", function undoSyncToggle(name) {
    document.querySelector('.switch--sync[data-name="' + name + '"]').classList.toggle('active');
  }), _defineProperty(_DOMMODULE2, "render", function render() {
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
  }), _defineProperty(_DOMMODULE2, "paginate", function paginate(page) {
    this.page = page;
    this.renderEntries();
  }), _defineProperty(_DOMMODULE2, "updateEntry", function updateEntry(entry) {
    var el = document.querySelector('.entry[data-name="' + entry.name + '"]');
    el.getElementsByClassName('created')[0].innerText = entry.first;
    el.getElementsByClassName('last')[0].innerText = entry.last;
    el.getElementsByClassName('count')[0].innerText = entry.marks.length; //el.getElementsByClassName('lost')[0].innerText = entry.lost.length;
  }), _DOMMODULE2));
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

var _MARKER = /*#__PURE__*/function () {
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

var _TOGGLER = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9wZXJtaXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvdHJvdWJsZXNob290aW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9sb2cta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGFzaGxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9TVE9SRSIsIl9QT1JUIiwiX1BSSVZQT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwiX0hBU0hMRVNTIiwiZXZlbnRzIiwiRU5WIiwiZW52IiwiX2dldF9kb3dubG9hZF9vcHRpb24iLCJicm93c2VyIiwic3RvcmFnZSIsImFyZWFfc2V0dGluZ3MiLCJnZXQiLCJ0aGVuIiwic2V0dGluZ3MiLCJoaXN0b3J5IiwiZG93bmxvYWQiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJzaG9ydGN1dHMiLCJhbGxvd2VkSGFzaGVzIiwiYm9vdHN0cmFwcGVkIiwiYXV0b2luaXQiLCJzdGFydCIsImluaXRNYWluTmF2IiwidGFiIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJpbmNsdWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfTkFWIiwiaW5uZXJUZXh0IiwicnVudGltZSIsImdldE1hbmlmZXN0IiwidmVyc2lvbiIsInN1Ym5hdnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibiIsImxlbmd0aCIsInRvZ2dsZUJ1dHRvbnMiLCJ0IiwiX1RPR0dMRVIiLCJzZXRMb2dMaW5rIiwibG9nTGluayIsImxvZ3MiLCJsIiwiaHJlZiIsImVuY29kZVVSSUNvbXBvbmVudCIsImkxOG4iLCJnZXRNZXNzYWdlIiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZWwiLCJET00iLCJjbGljayIsIm51bWJlclBhZ2VzIiwibnVtYmVyRW50cmllcyIsImN1cnJlbnRQYWdlIiwicGVyUGFnZSIsInVwZGF0ZUZyb21TdG9yYWdlIiwiZSIsIm5ld1BhZ2UiLCJnZXRBdHRyaWJ1dGUiLCJlbWl0IiwicmVuZGVyIiwicHJldiIsIm5leHQiLCJ1cGRhdGUiLCJyZW1vdmUiLCJwcCIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwic2lsZW50IiwiTWF0aCIsImNlaWwiLCJyZXNldCIsInVsIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImxpIiwicCIsInBhZ2VzIiwiciIsImZyYWciLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaSIsIm1heCIsIm1pbiIsImoiLCJhcHBlbmRCdXR0b24iLCJpbnNlcnRCZWZvcmUiLCJiIiwiYnRuIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGFuZ2VDb3VudFBlclBhZ2UiLCJieSIsImRhdGUiLCJjcmVhdGVkIiwib2JqZWN0IiwiX3NvcnQiLCJsYXN0IiwiZmllbGQiLCJzb3J0IiwiYSIsIm5hbWUiLCJheiIsInphIiwicmV2ZXJzZSIsInRvTG93ZXJDYXNlIiwibG9jYWxlQ29tcGFyZSIsImNoYW5nZSIsImtleXVwIiwiaW5pdGlhbGl6ZWQiLCJuYW1lcyIsImVudHJ5VG1wbCIsImVudHJpZXNDb250YWluZXIiLCJwYWdlIiwic29ydGVkIiwidmlld01vZGUiLCJzZWFyY2hUZXJtIiwic2VhcmNoZWQiLCJ0YWdzIiwiZmlsdGVyZWQiLCJmaWx0ZXJPcHRpb25zU2V0IiwiaW5pdCIsInJlc3VtZSIsIm1zZyIsImxvY2tlZCIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ0eXBlIiwic3BlYyIsInVuZGVmaW5lZCIsImdldERhdGEiLCJkYXRhIiwidGV4dCIsImxpbmsiLCJqb2luIiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYmFja3VwIiwicG9wIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG9jYWxlU3RyaW5nIiwicmVwbGFjZSIsImNvbnRhaW5zIiwiZ2V0VVJMcyIsInVybHMiLCJuZXdOYW1lIiwicHJvbXB0Iiwib2xkTmFtZSIsImFyZWEiLCJwYXJlbnROb2RlIiwidGFnIiwiZm9yY2UiLCJvIiwic3luYyIsImxvY2FsIiwib3JpZ0VudHJpZXMiLCJzeW5jZWQiLCJwdXNoIiwiY2hlY2tlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpb24iLCJ2YWx1ZSIsInZhbCIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwic2VhcmNoVGVybUxlbmd0aCIsInNlYXJjaGVkRnVsbFRleHQiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwic2VhcmNoUmVzdWx0cyIsImJ1dHRvbnMiLCJlZGl0IiwidmlldyIsImltbXV0IiwiaW1tdXRFbCIsImxvY2tlZEVsIiwidGFnRWwiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiY2xhc3NOYW1lIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiZmlyc3QiLCJtYXJrcyIsImZ1bGxUZXh0U2VhcmNoUmVzdWx0cyIsInJlcyIsIm1hcmsiLCJwb3MiLCJtYXJrVGV4dCIsIm1hcmtUZXh0RWwiLCJoaWdobGlnaHQiLCJ0MSIsInQyIiwidDMiLCJzdWJzdHJpbmciLCJzdWJzdHIiLCJicm9rZW5FbCIsInRpdGxlIiwidG9TdHJpbmciLCJicm9rZW5OYW1lRWwiLCJlcnJFbCIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwic2VsZWN0IiwicGxhY2Vob2xkZXJPcHRpb24iLCJhbGxUYWdzIiwiYWRkRmlsdGVyT3B0IiwiZGlzYWJsZWQiLCJhdHRycyIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibm90ZVRleHQiLCJsb3N0IiwibSIsInRyaW0iLCJnZXRUZXh0IiwicSIsInRlcm0iLCJzZWFyY2hUeXBlIiwiY291bnRTZWxlY3QiLCJjbGFzc01ldGgiLCJ0b2dnbGUiLCJzZXR1cFNlYXJjaCIsInJlbmRlckVudHJpZXMiLCJzZWFyY2hDb3VudCIsInNlYXJjaEZ1bGxUZXh0Iiwic2VhcmNoQnlOYW1lIiwiZm91bmQiLCJyZXN1bHRzIiwidGFibGUiLCJzZXRWaWV3Iiwic2V0VGltZW91dCIsImZvY3VzIiwic2V0dXBTb3J0IiwiX1NPUlQiLCJzb3J0U2VhcmNoUmVzdWx0cyIsIm5vZGVOYW1lIiwiZmlyc3RDaGlsZCIsImZpbHRlcmVkRW50cmllcyIsInJ4IiwiYyIsIlJlZ0V4cCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleE9mIiwiZGlyZWN0bHkiLCJpbnB1dHMiLCJkZWxlZ2F0ZUJ1dHRvbkFjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzZXR1cFZpZXciLCJ0b2dnbGVIZWFkZXJGaWVsZHMiLCJzZXRGaWx0ZXJPcHRpb25zIiwibW91c2Vkb3duIiwidXBkYXRlRXhwb3J0TGlua3MiLCJzdG9yZVN0cmluZyIsInBhcnNlZFN0cmluZyIsInBhcnNlIiwiZGlzcGxheUZhaWx1cmUiLCJ0cmlnZ2VyRmlsZUlucHV0IiwiaGFuZGxlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwibW9kIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsInJlYXNvbiIsImxvY2FsRGF0YUxpbmsiLCJzeW5jZWREYXRhTGluayIsInVwZGF0ZUV4cG9ydE5hbWUiLCJsb2dNaXNzaW5nUGVybWlzc2lvbnMiLCJwZXJtaXNzaW9ucyIsImdyYW50ZWQiLCJ0YWJsZUJvZHkiLCJ0ciIsInRkX2RhdGUiLCJ0ZF9tc2ciLCJub2RlX2RhdGUiLCJub2RlX21zZyIsIm5vZGVfYXR0ZW1wdCIsInRpbWUiLCJfTE9HX0tFWVMiLCJnZXRLZXlCeVZhbHVlIiwiY2xlYXIiLCJhc2tQZXJtaXNzaW9uIiwicmVxdWVzdCIsImFsZXJ0IiwiX01BUktFUiIsImN1c3RvbUJnQ29sb3IiLCJzdHlsZXMiLCJzaGFkb3ciLCJ4IiwieSIsImJsdXIiLCJjb2xvciIsImluamVjdCIsInByZXZpZXciLCJtYXJrZXIiLCJleGlzdGluZ1N0eWxlIiwic3R5bGUiLCJhdXRvbm90ZSIsInNldFN0eWxlIiwic3R5bGVTcGxpdCIsInRleHRTaGFkb3ciLCJzaGFkb3dTcGxpdCIsImJnSW5wdXQiLCJjb2xvcklucHV0IiwiYm9yZGVySW5wdXQiLCJhdXRvbm90ZUlucHV0IiwiYmciLCJib3JkZXIiLCJhdXRvbm90ZUNvbG9yIiwic2hhZG93U2VsZWN0IiwicHJvcCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImlzVmFsaWQiLCJzZXRTaGFkb3ciLCJ2YWxpZCIsInRlc3QiLCJwYWdlTmF2IiwiY3VycmVudCIsImhhc0F0dHJpYnV0ZSIsIm9wZW4iLCJjbG9zZSIsInRhcmdldElkIiwiYWxsb3dlZEtleXMiLCJhbGxvd2VkU2hvcnRjdXRzIiwiYWxsb3dlZFF1aWNrYnV0dG9uT3B0cyIsIm1hcmtlcktleXMiLCJjdXN0b21NYXJrZXJLZXlzIiwiY3VzdG9tU2VhcmNoIiwicmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucyIsInVwZGF0ZU1hcmtlciIsImluamVjdFNldHRpbmdzIiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwia2V5U2VsZWN0Iiwia2V5SWNvbnMiLCJhZGRLZXlTZWxlY3QiLCJyZW1vdmVLZXlTZWxlY3QiLCJmcmFnbWVudDEiLCJmcmFnbWVudDIiLCJmcmFnbWVudDMiLCJmcmFnbWVudDQiLCJvcHRpb24iLCJpY29uIiwiVmFsIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzY0NoZWNrYm94Iiwic2NTZWxlY3QiLCJjbUNoZWNrYm94Iiwic2MiLCJoaXN0b3J5U2V0dGluZ3MiLCJzYXZlT3B0cyIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXV0b3NhdmUiLCJuYW1pbmciLCJzYXZlSW5Qcml2IiwiZHJvcExvc3NlcyIsImF1dG9SZXRyeSIsInNhdmVOb3RlIiwiaWdub3JlSGFzaCIsIm1pc2NTZXR0aW5ncyIsIm1pc2MiLCJtYXJrbWV0aG9kIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwibm90ZWZvbnRzaXplIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJlcnJvck5vdGUiLCJ2aXBOb3RlIiwibG9hZE5vdGUiLCJ0bXVpcG9zIiwidGJicG93ZXIiLCJhZGRvbiIsImF1dG9jcyIsImlmcmFtZXMiLCJzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJjaGFuZ2VTdHlsZSIsInRvZ2dsZUF1dG9Ob3RlT3B0IiwiY2hhbmdlQXV0b05vdGVPcHQiLCJjaGFuZ2VIYXNoT3B0IiwidG9nZ2xlSW1tdXRPcHQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwidG9nZ2xlQXV0b1JldHJ5T3B0IiwidG9nZ2xlQXV0b2NzT3B0IiwidG9nZ2xlSUZyYW1lT3B0IiwiYWRkTWFya2VyIiwiYmdDb2xvciIsImdldFJhbmRvbUxpZ2h0Q29sb3IiLCJzZWxlY3RlZCIsInJlbW92ZU1hcmtlciIsImNoYW5nZU1hcmtNZXRob2QiLCJ0b2dnbGVTaG9ydGN1dCIsImNoYW5nZVNob3J0Y3V0IiwidG9nZ2xlQ3RtIiwiY2hhbmdlU2F2ZU9wdCIsInRvZ2dsZVByaXZTYXZlIiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlU2F2ZU5vdGVPcHQiLCJjaGFuZ2VRdWlja2J1dHRvbk9wdCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90ZXMiLCJkaXNhYmxlQWxsTm90aWZpY2F0aW9ucyIsImNicyIsImNvbmNhdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidG9nZ2xlTWlzYyIsInRvZ2dsZVRCQlBvd2VyT3B0IiwiY2hhbmdlVG11aVBvc2l0aW9uT3B0IiwiY2hhbmdlTm90ZXNGb250U2l6ZSIsInZhbGlkaXR5IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwiaW5wMSIsImlucDIiLCJwYXJ0MSIsInBhcnQyIiwiZmxvb3IiLCJyYW5kb20iLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInRvZ2dsZVN3aXRjaCIsInVuZG8iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRhcmdldCIsInRhcmdldHMiLCJkYXRhVG9nZ2xlIiwicm9sZXMiLCJyb2xlIiwiY3VycmVudFRyb3VibGUiLCJ0b2dnbGVUb3BpYyIsIm5ld1Ryb3VibGUiLCJzaG93QXJ0aWNsZSIsImJveENsYXNzTGlzdCIsImNhbmNlbCIsInNjYW5IaXN0b3J5IiwiYXJ0aWNsZXMiLCJlbXB0eUVsIiwibm9uZW1wdHlFbCIsIm5vbWFya3NFbCIsImxlbiIsIm5vbWFya3MiLCJhcnRpY2xlQ2xhc3NlcyIsIk9ORU9GRiIsInoiLCJzIiwiZCIsInciLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsImNvcHkiLCJhY3RpdmUiLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwidGFicyIsIm1ldGEiLCJ1bmZvbGRlZCIsIm5vdGVzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImpzX2luamVjdGlvbl9mYWlsdXJlIiwiY3NzX2luamVjdGlvbl9mYWlsdXJlIiwibWlzc2luZ19wZXJtaXNzaW9uX3duIiwic3JjIiwiaXNBcnJheSIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0IiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsInRleHRDb250ZW50IiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJldiIsIndhaXQiLCJmcmFtZUlkIiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsInJlZ2lzdGVyT25lT2ZmRXZlbnRzIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibGFzdEFyZyIsInBvcnQiLCJwb3J0TGlzdGVuZXIiLCJjb25uZWN0IiwicmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMiLCJyZW1vdmVMaXN0ZW5lciIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsImxpc3RlbmVyIiwiX0JHUE9SVCIsInBvcnRzIiwicmVnaXN0ZXJPbkNvbm5lY3RMaXN0ZW5lciIsIm9uQ29ubmVjdCIsIm9uRGlzY29ubmVjdCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJzZXRBcmVhcyIsIlByb21pc2UiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1C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RDs7O29DQUNlO0FBQ2QsYUFBTzFvQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDSSxRQUFSLElBQW9CK25CLDRCQUFpQi9uQixRQUF6QztBQUFBLE9BQXRELENBQVA7QUFDRDs7O2dDQUNXO0FBQ1YsYUFBT0wsT0FBTyxDQUFDQyxPQUFSLENBQWdCZ0ssS0FBaEIsQ0FBc0I5SixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQW1vQixZQUFZLEVBQUk7QUFDdEQsWUFBSSxDQUFDQSxZQUFELElBQWlCLENBQUNBLFlBQVksQ0FBQzlsQixJQUFuQyxFQUF5QyxPQUFPLEVBQVA7QUFDekMsZUFBTzhsQixZQUFZLENBQUM5bEIsSUFBcEI7QUFDRCxPQUhNLENBQVA7QUFJRDs7O21DQUNjO0FBQ2IsYUFBT3pDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmdLLEtBQWhCLENBQXNCOUosR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFtb0IsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUN4bUIsT0FBbkMsRUFBNEM7QUFDMUMsaUJBQU8vQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IrSixJQUFoQixDQUFxQjdKLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBb29CLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDem1CLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT3dtQixZQUFZLENBQUN4bUIsT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUIzQyxlIiwiZmlsZSI6ImNvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQsIF9QUklWUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX1BSSVZQT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdvblRvZ2dsZWRTeW5jJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW52OiAnYWRkb24tcGFnZScsXHJcblxyXG4gIF9nZXRfZG93bmxvYWRfb3B0aW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICd0ZXh0JztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5kb3dubG9hZDtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuaW1wb3J0IF9ISVNUT1JZIGZyb20gJy4vbW9kdWxlcy9oaXN0b3J5J1xyXG5pbXBvcnQgX1NFVFRJTkdTIGZyb20gJy4vbW9kdWxlcy9zZXR0aW5ncydcclxuaW1wb3J0IF9MT0dHSU5HIGZyb20gJy4vbW9kdWxlcy9sb2dzJ1xyXG5pbXBvcnQgX1NZTkNJTkcgZnJvbSAnLi9tb2R1bGVzL3N5bmNpbmcnXHJcbmltcG9ydCBfSU1QT1JUIGZyb20gJy4vbW9kdWxlcy9pbXBvcnQnXHJcbmltcG9ydCBfQ09OVEFDVCBmcm9tICcuL21vZHVsZXMvY29udGFjdCdcclxuaW1wb3J0IF9UUk9VQkxFU0hPT1RJTkcgZnJvbSAnLi9tb2R1bGVzL3Ryb3VibGVzaG9vdGluZydcclxuaW1wb3J0IF9QQUdJTkFUT1IgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnktcGFnaW5hdGlvbidcclxuaW1wb3J0IF9QRVJNSVNTSU9OUyBmcm9tICcuL21vZHVsZXMvcGVybWlzc2lvbnMnXHJcblxyXG5pbXBvcnQgX05BViBmcm9tICcuL21vZHVsZXMvbmF2J1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3N0YXJ0JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICdzdGFydCdcclxuICAgIH1cclxuICB9LFxyXG4gIGFsbG93ZWRIYXNoZXM6IFsvKiduZXdzJywgKi8nbWFudWFsJywgJ3NldHRpbmdzJywgJ2hpc3RvcnknLCAnY29udGFjdCcsICdzeW5jJywgJ2V4cG9ydCcsICd0cm91Ymxlc2hvb3RpbmcnLCAnbG9ncyddLFxyXG4gIGJvb3RzdHJhcHBlZDogZmFsc2UsXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5oaXN0b3J5KSB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKCF0aGlzLmJvb3RzdHJhcHBlZCkge1xyXG4gICAgICB0aGlzLmJvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgICAgIF9ISVNUT1JZKCk7XHJcbiAgICAgIF9TRVRUSU5HUygpO1xyXG4gICAgICBfTE9HR0lORygpO1xyXG4gICAgICBfU1lOQ0lORygpO1xyXG4gICAgICBfSU1QT1JUKCk7XHJcbiAgICAgIF9DT05UQUNUKCk7XHJcbiAgICAgIF9UUk9VQkxFU0hPT1RJTkcoKTtcclxuICAgICAgX1BBR0lOQVRPUigpO1xyXG4gICAgICBfUEVSTUlTU0lPTlMoKTtcclxuICAgICAgdGhpcy5pbml0TWFpbk5hdigpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdE1haW5OYXYoKSB7XHJcbiAgICBjb25zdCB0YWIgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPScpWzFdO1xyXG5cclxuICAgIGlmICh0aGlzLmFsbG93ZWRIYXNoZXMuaW5jbHVkZXModGFiKSkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5uYXYtJyArIHRhYikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBuZXcgX05BVih3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5uYXYnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0wxME4gfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfTkFWIGZyb20gJy4vbW9kdWxlcy9uYXYnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL21vZHVsZXMvdG9nZ2xlcidcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9fc3RvcmUnXHJcbmltcG9ydCAnLi9ib290c3RyYXAnXHJcblxyXG5fTDEwTigpO1xyXG5cclxuLyogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyc2lvbi1udW1iZXInKS5pbm5lclRleHQgPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG4vKiBlbmQ6IGF1dG8taW5zZXJ0IGN1cnJlbnQgdmVyc2lvbiBudW1iZXIgKi9cclxuXHJcbi8qIGNvbmZpZ3VyZSBzdWJuYXZzICovXHJcbmNvbnN0IHN1Ym5hdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWJuYXYnKTtcclxubGV0IG4gPSBzdWJuYXZzLmxlbmd0aDtcclxuXHJcbndoaWxlKG4tLSkgbmV3IF9OQVYoc3VibmF2c1tuXSk7XHJcbi8qIGVuZDogY29uZmlndXJlIG5hdnMgKi9cclxuXHJcbi8qIGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxubGV0IHRvZ2dsZUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2dnbGUtYnV0dG9uJyksXHJcbiAgICB0ID0gdG9nZ2xlQnV0dG9ucy5sZW5ndGg7XHJcblxyXG53aGlsZSh0LS0pIG5ldyBfVE9HR0xFUih0b2dnbGVCdXR0b25zW3RdKTtcclxuLyogZW5kOiBjb25maWd1cmUgdG9nZ2xlIGVsZW1lbnRzICovXHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOmxvZ3MnOiAnc2V0TG9nTGluaydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnNldExvZ0xpbmsoKTtcclxuICAgIH0sXHJcbiAgICBzZXRMb2dMaW5rKCkge1xyXG4gICAgICBjb25zdCBsb2dMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1tYWlsJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsZXQgbCA9IGxvZ3MgPyBsb2dzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGhyZWYgPVxyXG4gICAgICAgICAgICAgICdtYWlsdG86dW5kZmx5YmlyQGdteC5kZT9zdWJqZWN0PVRleHRtYXJrZXInICtcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJyA6IEVycm9yIExvZ3MnKSArXHJcbiAgICAgICAgICAgICAgJyZib2R5PScrXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCctICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneW91cl9tc2cnKSArICcgLVxcblxcblxcbkxPR1M6XFxuXFxuJyksXHJcbiAgICAgICAgICAgIGxvZztcclxuXHJcbiAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgaHJlZiArPSBsb2dbMV0gKyAobG9nWzJdID8gJyAoJyArIGxvZ1syXSArICcpJyA6ICcnKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KChuZXcgRGF0ZShsb2dbMF0pLnRvVVRDU3RyaW5nKCkpICsgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dMaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ2FkZCcsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cmllcyc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2ZpbHRlcmVkOmhpc3RvcnknOiAncmVzZXQnLFxyXG4gICAgICAgICdpbXBvcnRlZDpoaXN0b3J5JzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnBhZ2UnOiAnZ290bycsXHJcbiAgICAgICAgICAnLnByZXYnOiAncHJldicsXHJcbiAgICAgICAgICAnLm5leHQnOiAnbmV4dCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBudW1iZXJQYWdlczogMSxcclxuICAgIG51bWJlckVudHJpZXM6IDAsXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZyb21TdG9yYWdlKCk7XHJcbiAgICB9LFxyXG4gICAgZ290byhlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdQYWdlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnKSAqIDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSBuZXdQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgbmV3UGFnZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXYoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAxKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIC0tdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMubnVtYmVyUGFnZXMpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgKyt0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCsrdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKC0tdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB0aGlzLnVwZGF0ZShPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmxlbmd0aCkpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUobCwgc2lsZW50KSB7XHJcbiAgICAgIHRoaXMubnVtYmVyRW50cmllcyA9IGw7XHJcbiAgICAgIHRoaXMubnVtYmVyUGFnZXMgPSBsID8gTWF0aC5jZWlsKGwgLyB0aGlzLnBlclBhZ2UpIDogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLm51bWJlclBhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQobCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgdGhpcy51cGRhdGUobCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3ItbGlzdCcpO1xyXG4gICAgICBjb25zdCBsID0gdGhpcy5udW1iZXJFbnRyaWVzO1xyXG4gICAgICBBcnJheS5mcm9tKHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UnKSkuZm9yRWFjaChsaSA9PiBsaS5yZW1vdmUoKSk7XHJcblxyXG4gICAgICBpZiAobCA8IHRoaXMucGVyUGFnZSArIDEpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICBjb25zdCByID0gNyAtIChwYWdlcyAtIDEgLSBwKTtcclxuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgbmV4dCA9IHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXTtcclxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgyLCBwIC0gNyk7XHJcbiAgICAgIGlmIChyID4gMCkgaSA9IE1hdGgubWF4KDIsIE1hdGgubWluKGksIGkgLSByKSk7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLm1pbihwYWdlcywgaSArIDE0KSArIDE7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCAxKTtcclxuICAgICAgZm9yICg7IGkgPCBqOyBpKyspIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIGkpO1xyXG4gICAgICBpZiAocGFnZXMgPiBqIC0gMSkgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgcGFnZXMpO1xyXG5cclxuICAgICAgdWwuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHQpO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZEJ1dHRvbihmcmFnLCBiKSB7XHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScsIGIpO1xyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYikpO1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgICBpZiAoYiA9PT0gdGhpcy5jdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKHApIHtcclxuICAgICAgdGhpcy5wZXJQYWdlID0gcDtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5udW1iZXJFbnRyaWVzLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnk6IHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgY3JlYXRlZChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdmaXJzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYXN0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2xhc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IChuZXcgRGF0ZShvYmplY3RbYl1bZmllbGRdKSkgLSAobmV3IERhdGUob2JqZWN0W2FdW2ZpZWxkXSkpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgYXoob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KTtcclxuICAgICAgfSxcclxuICAgICAgemEob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KS5yZXZlcnNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IGEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcbmltcG9ydCBfU09SVCBmcm9tICcuL2hpc3Rvcnktc29ydCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnb3BlbmVkOnRhYic6ICdpbml0JyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3JlbmRlcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzeW5jLWVudHJ5JzogJ3VuZG9TeW5jVG9nZ2xlJyxcclxuICAgICAgICAncGFnaW5hdGU6aGlzdG9yeSc6ICdwYWdpbmF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuYWN0aW9uLWJ1dHRvbic6ICdkZWxlZ2F0ZUJ1dHRvbkFjdGlvbicsXHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnLFxyXG4gICAgICAgICAgJy5uYW1lJzogJ29wZW4nLFxyXG4gICAgICAgICAgJy5lZGl0JzogJ2VkaXQnLFxyXG4gICAgICAgICAgJy52aWV3JzogJ3ZpZXcnLFxyXG4gICAgICAgICAgJyNzZWFyY2gtdG9nZ2xlJzogJ3RvZ2dsZVNlYXJjaCcsXHJcbiAgICAgICAgICAnI3JlbW92ZS1maWx0ZXInOiAncmVtb3ZlRmlsdGVyJyxcclxuICAgICAgICAgICcudGFnc19faXRlbSc6ICdmaWx0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY2hlY2ttYXJrLWFsbCc6ICdjaGVja21hcmtBbGwnLFxyXG4gICAgICAgICAgJyNzb3J0LWVudHJpZXMnOiAnc29ydCcsXHJcbiAgICAgICAgICAnI2ZpbHRlci1lbnRyaWVzJzogJ2ZpbHRlcicsXHJcbiAgICAgICAgICAnI2VudHJpZXMtcGVyLXBhZ2UnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgICAgICcjc2V0LXZpZXcnOiAnc2V0VmlldycsXHJcbiAgICAgICAgICAnI2FjdGlvbic6ICdvbkNoYW5nZUFjdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAnLnNlYXJjaC1lbnRyaWVzJzogJ3NlYXJjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG5cclxuICAgIG5hbWVzOiBbXSxcclxuICAgIGVudHJpZXM6IHt9LFxyXG4gICAgZW50cnlUbXBsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnktdGVtcGxhdGUnKSxcclxuICAgIGVudHJpZXNDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyksXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcbiAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgdmlld01vZGU6ICdsaXN0JyxcclxuICAgIHNlYXJjaFRlcm06ICcnLFxyXG4gICAgc2VhcmNoZWQ6IFtdLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmaWx0ZXJlZDogZmFsc2UsXHJcbiAgICBmaWx0ZXJPcHRpb25zU2V0OiBmYWxzZSxcclxuXHJcbiAgICBpbml0KHRhYikge1xyXG4gICAgICBpZiAodGFiICE9PSAnaGlzdG9yeScpIHJldHVybjtcclxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgWydkZWxldGUnXShuYW1lcykge1xyXG4gICAgICBsZXQgbXNnID0gJ2RlbF9jb25maXJtJztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lc1tsXV0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBtc2cgKz0gJ19sb2NrZWQnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobXNnKSk7XHJcbiAgICAgIGlmIChjb25maXJtZWQpIHRoaXMuZW1pdCgnZGVsZXRlOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgY2xlYW4obmFtZXMpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhbjplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnZG93bmxvYWRfb3B0aW9uJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICB0eXBlID0gc2V0dGluZ3NbMF07XHJcbiAgICAgICAgICBzcGVjID0gc2V0dGluZ3MubGVuZ3RoID09PSAyID8gc2V0dGluZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nKSB0aGlzLmV4cG9ydChuYW1lcyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ1RleHRtYXJrZXIgKCcgKyBuYW1lcy5qb2luKCdfJykgKyAnKS50eHQnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIHRleHQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4cG9ydChuYW1lcykge1xyXG4gICAgICBsZXQgYmFja3VwID0geyBoaXN0b3J5OiB7IGVudHJpZXM6IHt9IH0gfSxcclxuICAgICAgICAgIGVudHJpZXMgPSBiYWNrdXAuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICAgIGVudHJpZXNbbmFtZV0gPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2t1cCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShiYWNrdXApKTtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICAgJ1RleHRtYXJrZXItYmFja3VwLScgK1xyXG4gICAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICAgJy5qc29uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGJhY2t1cDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3luYyhuYW1lLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3N5bmM6ZW50cnknLCBuYW1lWzBdLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcbiAgICB2aXNpdChuYW1lcykge1xyXG4gICAgICB0aGlzLmdldFVSTHMobmFtZXMpLnRoZW4odXJscyA9PiB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIHVybHMsIG5hbWVzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdChlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9lZGl0JykpO1xyXG4gICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgP1xyXG4gICAgICAgICAgJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZTplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmlldyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3ZpZXc6ZW50cnknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICB0YWcobmFtZXMsIHRhZywgZm9yY2UpIHtcclxuICAgICAgaWYgKCF0YWcgJiYgIWZvcmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG8gPSB7IHN5bmM6IFtdLCBsb2NhbDogW10gfTtcclxuICAgICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcmlnRW50cmllc1tuYW1lXS5zeW5jZWQpIG8uc3luYy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Ugby5sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbWl0KCd0YWc6ZW50cmllcycsIG8sIHRhZyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFncyhuYW1lcykge1xyXG4gICAgICB0aGlzLnRhZyhuYW1lcywgJycsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NTZWxlY3Rpb24oKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVudHJ5LWNiOmNoZWNrZWQnKSxcclxuICAgICAgICAgIGkgPSBjaGVja2VkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmICghaSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgbGV0IGFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24nKS52YWx1ZSxcclxuICAgICAgICAgIG5hbWVzID0gW107XHJcblxyXG4gICAgICB3aGlsZShpLS0pIG5hbWVzLnB1c2goY2hlY2tlZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICd0YWcnKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRhZyhuYW1lcywgdmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BsaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lmaWNhdGlvbicpLnZhbHVlLnNwbGl0KCcgJyksXHJcbiAgICAgICAgICAgIHR5cGUgPSBzcGxpdFswXSxcclxuICAgICAgICAgICAgc3BlYyA9IHNwbGl0WzFdO1xyXG5cclxuICAgICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXJFbnRyaWVzKCkge1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmVudHJ5VG1wbCxcclxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuZW50cmllc0NvbnRhaW5lcixcclxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMsXHJcbiAgICAgICAgICBzZWFyY2hUZXJtID0gdGhpcy5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgc2VhcmNoVGVybUxlbmd0aCA9IHNlYXJjaFRlcm0gPyBzZWFyY2hUZXJtLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICBzZWFyY2hlZCA9ICEhc2VhcmNoVGVybSxcclxuICAgICAgICAgIHNlYXJjaGVkRnVsbFRleHQgPSB0aGlzLnNlYXJjaGVkRnVsbFRleHQsXHJcbiAgICAgICAgICBuYW1lcyA9IHNlYXJjaGVkID8gdGhpcy5zZWFyY2hlZCA6IHRoaXMubmFtZXMsXHJcbiAgICAgICAgICBsID0gc2VhcmNoZWQgPyBuYW1lcy5sZW5ndGggOiB0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBpID0gc2VhcmNoZWQgPyAwIDogbCAtIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGNsb25lLCBlbnRyeSwgbmFtZSwgbmFtZUZpZWxkLCBpbnB1dCwgbGFiZWwsIGluZm9CdXR0b24sIGRldGFpbHMsIHNlYXJjaFJlc3VsdHMsXHJcbiAgICAgICAgICBidXR0b25zLCBlZGl0LCB2aWV3LCB0YWdzLCBpbW11dCwgaW1tdXRFbCwgbG9ja2VkLCBsb2NrZWRFbCwgdGFnRWwsIGIsIGo7XHJcblxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJlZCkge1xyXG4gICAgICAgIG5hbWVzID0gbmFtZXMuZmlsdGVyKG4gPT4gISFlbnRyaWVzW25dKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IE1hdGgubWluKGwsIG5hbWVzLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghbCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICgoaSwgaikgPT4ge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzID8gbmFtZXNbaV0gOiBudWxsO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzID8gZW50cmllc1tuYW1lXSA6IG51bGw7XHJcbiAgICAgICAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAoZW50cnkubmFtZSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZW50cnkubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NvcnJlY3QtbmFtZTplbnRyeScsIG5hbWUsIGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBudWxsO1xyXG4gICAgICAgICAgICAgIGxvY2tlZCA9IGVudHJ5LmxvY2tlZDtcclxuICAgICAgICAgICAgICBpbW11dCA9IGVudHJ5LmltbXV0O1xyXG4gICAgICAgICAgICAgIGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgICAgY2xvbmUuaWQgPSAnZW50cnktJyArIGo7XHJcbiAgICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgICBuYW1lRmllbGQgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYW1lJylbMF07XHJcbiAgICAgICAgICAgICAgaW5wdXQgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcclxuICAgICAgICAgICAgICBsYWJlbCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsYWJlbCcpWzBdO1xyXG4gICAgICAgICAgICAgIGRldGFpbHMgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXRhaWxzJylbMF07XHJcbiAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlYXJjaC1yZXN1bHRzJylbMF07XHJcbiAgICAgICAgICAgICAgYnV0dG9ucyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1aWNrLWFjdGlvbicpO1xyXG4gICAgICAgICAgICAgIGVkaXQgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0JylbMF07XHJcbiAgICAgICAgICAgICAgdmlldyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZpZXcnKVswXTtcclxuICAgICAgICAgICAgICB0YWdFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhZ3MnKVswXTtcclxuICAgICAgICAgICAgICBsb2NrZWRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvY2tlZCcpWzBdO1xyXG4gICAgICAgICAgICAgIGltbXV0RWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbW11dCcpWzBdO1xyXG4gICAgICAgICAgICAgIGIgPSBidXR0b25zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgd2hpbGUoYi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbYl0uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZUZpZWxkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUpKTtcclxuICAgICAgICAgICAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdkYXRhLXVybCcsIGVudHJ5LnVybCk7XHJcbiAgICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ2VudHJ5LWNiJztcclxuICAgICAgICAgICAgICBpbnB1dC5pZCA9ICdlbnRyeS1jYi0nICsgajtcclxuICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIHZpZXcuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbnRyeS1jYi0nICsgaik7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgIGxvY2tlZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoaW1tdXQpIGltbXV0RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICh0YWdzKSB7XHJcbiAgICAgICAgICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICB0YWdFbC5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICd0YWdzX19pdGVtJztcclxuICAgICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnKSk7XHJcbiAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndGl0bGVfZmlsdGVyJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhZ0VsLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdkZXRhaWxfbm90YWcnKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGFzdCcpWzBdLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdW50JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgIC8vY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QgPyBlbnRyeS5sb3N0Lmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChlbnRyeS5zeW5jZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaGVkRnVsbFRleHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxUZXh0U2VhcmNoUmVzdWx0cyA9IHRoaXMuZnVsbFRleHRTZWFyY2hSZXN1bHRzW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmdWxsVGV4dFNlYXJjaFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHIgPSAwLCByZXMsIG1hcmssIHBvcywgbWFya1RleHQsIG1hcmtUZXh0RWwsIGhpZ2hsaWdodCwgdDEsIHQyLCB0MztcclxuXHJcbiAgICAgICAgICAgICAgICAgIGZvciAoOyByIDwgZnVsbFRleHRTZWFyY2hSZXN1bHRzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gZnVsbFRleHRTZWFyY2hSZXN1bHRzW3JdO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmsgPSBlbnRyeS5tYXJrc1tyZXMubWFya107XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gcmVzLnBvcztcclxuICAgICAgICAgICAgICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHQxID0gbWFya1RleHQuc3Vic3RyaW5nKE1hdGgubWF4KHBvcy0xNiwgMCksIHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdDIgPSBtYXJrVGV4dC5zdWJzdHIocG9zLCBzZWFyY2hUZXJtTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB0MyA9IG1hcmtUZXh0LnN1YnN0cihwb3Mrc2VhcmNoVGVybUxlbmd0aCwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQxID0gdDEgPyAnLi4uICcgKyB0MSA6IHQxO1xyXG4gICAgICAgICAgICAgICAgICAgIHQzID0gdDMgPyB0MyArICcgLi4uJyA6IHQzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0LmNsYXNzTmFtZSA9ICdoaWdobGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MikpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGhpZ2hsaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzLmFwcGVuZENoaWxkKG1hcmtUZXh0RWwpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoIWVudHJ5LnVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3coJ0VudHJ5IGlzIG1pc3NpbmcgVVJMIGZpZWxkIScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYnJva2VuRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnktJyArIGopO1xyXG4gICAgICAgICAgICAgIGlmIChicm9rZW5FbCkge1xyXG4gICAgICAgICAgICAgICAgYnJva2VuRWwuY2xhc3NMaXN0LmFkZCgnZW50cnktLWJyb2tlbicpO1xyXG4gICAgICAgICAgICAgICAgYnJva2VuRWwudGl0bGUgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBicm9rZW5OYW1lRWwgPSBicm9rZW5FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYW1lJylbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoYnJva2VuTmFtZUVsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJyb2tlbk5hbWVFbC5jbGFzc0xpc3QucmVtb3ZlKCduYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgIGJyb2tlbk5hbWVFbC5jbGFzc0xpc3QuYWRkKCduYW1lLS1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZXJyRWwuY2xhc3NOYW1lID0gJ2VudHJ5LS1lcnJvciB1LWNvbG9yLS1yZWQnO1xyXG4gICAgICAgICAgICAgICAgZXJyRWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Jyb2tlbl9lbnRyeScsIG5hbWUpKSk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyRWwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKGksIGwtaS0xKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB0b2dnbGVIZWFkZXJGaWVsZHMobCkge1xyXG4gICAgICBjb25zdCBub0VudHJpZXNIaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vLWVudHJpZXMnKTtcclxuICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG4gICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktYWN0aW9ucycpO1xyXG4gICAgICBjb25zdCBzb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnQnKTtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpO1xyXG4gICAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXcnKTtcclxuICAgICAgY29uc3QgcHBTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcy1wZXItcGFnZScpO1xyXG4gICAgICBjb25zdCBjaGVja2FsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja21hcmstYWxsLWNvbnRhaW5lcicpO1xyXG4gICAgICBjb25zdCBtZXRoXzAgPSAhbCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMSA9IGwgPiAwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8yID0gbCA+IDIgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzMgPSBsID4gMTAgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG5cclxuICAgICAgbm9FbnRyaWVzSGludC5jbGFzc0xpc3RbbWV0aF8wXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGFjdGlvbnMuY2xhc3NMaXN0W21ldGhfMV0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBzZWFyY2guY2xhc3NMaXN0W21ldGhfMl0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBzb3J0LmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgZmlsdGVyLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY291bnQuY2xhc3NMaXN0W21ldGhfM10oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB2aWV3LmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY2hlY2thbGwuY2xhc3NMaXN0W21ldGhfMl0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtY291bnQnKS5pbm5lclRleHQgPSBsO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHAgPSB0aGlzLnBlclBhZ2UgPSBzZXR0aW5ncy5oaXN0b3J5LnBwIHx8IDEwO1xyXG4gICAgICAgIHBwU2VsZWN0LnZhbHVlID0gcHA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldEZpbHRlck9wdGlvbnMoKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpbHRlck9wdGlvbnNTZXQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIGNvbnN0IGFsbFRhZ3MgPSBbXTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGxldCB0YWdzO1xyXG5cclxuICAgICAgc2VsZWN0LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJPcHRpb24pO1xyXG4gICAgICBwbGFjZWhvbGRlck9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xyXG4gICAgICBwbGFjZWhvbGRlck9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uaW5uZXJUZXh0ID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI0Jyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgICB0YWdzID0gZW50cmllc1tuYW1lXS50YWc7XHJcbiAgICAgICAgdGFncyA9IHRhZ3MgPyB0YWdzLnNwbGl0KCcgJykgOiBbXTtcclxuICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgIGlmICghYWxsVGFncy5pbmNsdWRlcyh0YWcpKSBhbGxUYWdzLnB1c2godGFnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFhbGxUYWdzLmxlbmd0aCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtbm90YWcnKSkge1xyXG4gICAgICAgIHRoaXMuYWRkRmlsdGVyT3B0KCcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyksIHsgZGlzYWJsZWQ6IHRydWUsIGlkOiAnZmlsdGVyLW9wdC1ub3RhZycgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxsVGFncy5mb3JFYWNoKHRhZyA9PiB0aGlzLmFkZEZpbHRlck9wdCh0YWcsIHRhZykpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpbHRlck9wdGlvbnNTZXQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGFkZEZpbHRlck9wdCh0YWcsIHRleHQsIGF0dHJzKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhZ3MuaW5jbHVkZXModGFnKSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWVudHJpZXMnKTtcclxuICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcblxyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcclxuICAgICAgb3B0LnZhbHVlID0gdGFnO1xyXG4gICAgICBvcHQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgaWYgKGF0dHJzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYSBpbiBhdHRycykgb3B0LnNldEF0dHJpYnV0ZShhLCBhdHRyc1thXSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnRhZ3MubGVuZ3RoICYmIHRhZykge1xyXG4gICAgICAgIGNvbnN0IG5vdGFnRmlsdGVyT3B0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtbm90YWcnKTtcclxuICAgICAgICBpZiAobm90YWdGaWx0ZXJPcHQpIHNlbGVjdC5yZW1vdmVDaGlsZChub3RhZ0ZpbHRlck9wdCk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC10YWdsZXNzJykpIHtcclxuICAgICAgICAgIHRoaXMuYWRkRmlsdGVyT3B0KCcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjUnKSwgeyBpZDogJ2ZpbHRlci1vcHQtdGFnbGVzcycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0YWcpIHRoaXMudGFncy5wdXNoKHRhZyk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGV4dChuYW1lcywgc3BlYykge1xyXG4gICAgICBsZXQgYWxsX21hcmtzX3BsdXNfbWV0YSA9IHNwZWMgPT09ICcrbWV0YScsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19sb3N0ID0gc3BlYyA9PT0gJytsb3N0JyxcclxuICAgICAgICAgIGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzID0gc3BlYyA9PT0gJytub3RlcycsXHJcbiAgICAgICAgICBhbGxfbWFya3NfbG9zdCA9IHNwZWMgPT09ICdsb3N0JyxcclxuICAgICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMycsIDIsIDNdLFxyXG5cclxuICAgICAgICAgIHJlamVjdCA9IGRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKHNwZWMpID9cclxuICAgICAgICAgICAgZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGtleSAhPSBzcGVjO1xyXG4gICAgICAgICAgICB9IDogc3BlYyA9PT0gJ2MnID9cclxuICAgICAgICAgICAgZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKGtleSk7XHJcbiAgICAgICAgICAgIH0gOiBudWxsLFxyXG5cclxuICAgICAgICAgIG5ld0xpbmUgPSAnXFxyXFxuJyxcclxuICAgICAgICAgIG5ld0xpbmVzID0gJ1xcclxcblxcclxcbicsXHJcbiAgICAgICAgICBub3RlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGUnKSxcclxuICAgICAgICAgIHRleHQgPSAnJyxcclxuICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgIG5vdGVUZXh0LCBlbnRyeSwgbWFya3MsIG1hcmssIGxvc3QsIG5hbWUsIG0sIG4sIGo7XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzO1xyXG4gICAgICAgICAgbG9zdCA9IGVudHJ5Lmxvc3Q7XHJcbiAgICAgICAgICBtID0gbWFya3MubGVuZ3RoO1xyXG4gICAgICAgICAgbiA9IGxvc3QubGVuZ3RoO1xyXG5cclxuICAgICAgICAgIGlmICghYWxsX21hcmtzX2xvc3QpIHtcclxuICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGEgfHwgYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gbmFtZSArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgJ1VSTDogJyArIGVudHJ5LnVybCArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3BhZ2VfdGl0bGUnKSArICc6ICcgKyBlbnRyeS50aXRsZSArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2NyZWF0ZWQnKSArICc6ICcgKyB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSkgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsYXN0X21vZGlmaWVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSkgK1xyXG4gICAgICAgICAgICAgICAgbmV3TGluZSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgbWFyayA9IG1hcmtzW2pdO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocmVqZWN0ICYmIHJlamVjdChtYXJrLmtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJy0tLScgKyBuZXdMaW5lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyAmJiBtYXJrLm5vdGUpIHtcclxuICAgICAgICAgICAgICAgIG5vdGVUZXh0ID0gbWFyay5ub3RlLnRleHQgfHwgbWFyay5ub3RlO1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSAnICAnICsgbm90ZSArICc6JyArIG5ld0xpbmUgKyAnICAnICsgbm90ZVRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4gICcpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYWxsX21hcmtzX2xvc3QgfHwgYWxsX21hcmtzX3BsdXNfbG9zdCkge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IG5ld0xpbmVzICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xvc3RfbWFya3MnKSArICc6JyArIG5ld0xpbmVzICsgbmV3TGluZXM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgbWFyayA9IGxvc3Rbal07XHJcblxyXG4gICAgICAgICAgICAgIHRleHQgKz0gbWFyay50ZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuJykgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIG5ld0xpbmVzICsgbmV3TGluZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dC50cmltKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldERhdGEobmFtZXMsIHR5cGUsIHNwZWMpIHtcclxuICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0JykgcmV0dXJuIHRoaXMuZ2V0VGV4dChuYW1lcywgc3BlYyk7XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBkYXRhID0gJycsXHJcbiAgICAgICAgICAgIG5ld0xpbmVzID0gJ1xcclxcblxcclxcbicsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgZGF0YSArPSBlbnRyaWVzW25hbWVzW2ldXVt0eXBlXSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VVJMcyhuYW1lcykge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIHVybHMgPSBbXSxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB1cmxzLnB1c2goZW50cmllc1tuYW1lc1tpXV0udXJsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybHM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZWFyY2goZSwgZWwpIHtcclxuICAgICAgY29uc3QgdGVybSA9IGVsLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUgPyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpIDogJyc7XHJcbiAgICAgIGNvbnN0IGNvdW50U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XHJcbiAgICAgIGNvbnN0IGNsYXNzTWV0aCA9IHRlcm0gPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXRvZ2dsZScpO1xyXG4gICAgICB0aGlzLnNldHVwU2VhcmNoKHRlcm0sIHNlYXJjaFR5cGUpLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgY291bnRTZWxlY3QuY2xhc3NMaXN0W2NsYXNzTWV0aF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0b2dnbGUuY2xhc3NMaXN0W2NsYXNzTWV0aF0oJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHNldHVwU2VhcmNoKHRlcm0sIHNlYXJjaFR5cGUpIHtcclxuICAgICAgdGVybSA9IHR5cGVvZiB0ZXJtID09PSAnc3RyaW5nJyA/IHRlcm0gOiB0aGlzLnNlYXJjaFRlcm07XHJcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBzZWFyY2hDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY291bnQnKTtcclxuICAgICAgdGhpcy5zZWFyY2hlZCA9IFtdO1xyXG4gICAgICB0aGlzLnNlYXJjaFRlcm0gPSB0ZXJtO1xyXG4gICAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaGVkJyk7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZC0tZnVsbC10ZXh0Jyk7XHJcbiAgICAgICAgc2VhcmNoQ291bnQuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hlZEZ1bGxUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QuYWRkKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIGlmIChzZWFyY2hUeXBlID09PSAnZnVsbC10ZXh0Jykge1xyXG4gICAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QuYWRkKCdzZWFyY2hlZC0tZnVsbC10ZXh0Jyk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaEZ1bGxUZXh0KHRlcm0pO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZEZ1bGxUZXh0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZC0tZnVsbC10ZXh0Jyk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaEJ5TmFtZSh0ZXJtKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWFyY2hDb3VudC5pbm5lclRleHQgPSB0aGlzLnNlYXJjaGVkLmxlbmd0aCB8fCAnJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZWFyY2hCeU5hbWUodGVybSkge1xyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIGxldCBsID0gbmFtZXMubGVuZ3RoLCBpID0gMCwgbmFtZTtcclxuXHJcbiAgICAgIGZvcig7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godGVybSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoRnVsbFRleHQodGV4dCkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgbGV0IG5hbWUsIG1hcmtzLCBpLCBtYXJrVGV4dCwgcG9zLCBmb3VuZDtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLmZ1bGxUZXh0U2VhcmNoUmVzdWx0cyA9IHt9O1xyXG5cclxuICAgICAgZm9yIChuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgICBtYXJrcyA9IGVudHJpZXNbbmFtZV0ubWFya3M7XHJcbiAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIG1hcmtUZXh0ID0gbWFya3NbaV0udGV4dDtcclxuICAgICAgICAgIHBvcyA9IG1hcmtUZXh0LnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRleHQpO1xyXG4gICAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXN1bHRzW25hbWVdID0gcmVzdWx0c1tuYW1lXSB8fCBbXTtcclxuICAgICAgICAgICAgcmVzdWx0c1tuYW1lXS5wdXNoKHsgbWFyazogaSwgcG9zIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWQucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVTZWFyY2goZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVudHJpZXMtLW5hbWUnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1lbnRyaWVzLS1mdWxsLXRleHQnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRlcm0pIHRoaXMuc2VhcmNoKG51bGwsIHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKGUsIGVsKSB7XHJcbiAgICAgIGxldCBwID0gdGhpcy5wZXJQYWdlID0gZWwudmFsdWUgKiAxO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnLCBwKTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0VmlldyhlLCBlbCkge1xyXG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgICBpZiAodmFsID09PSAnbGlzdCcpIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RldGFpbGVkLWxpc3QnKTtcclxuICAgICAgZWxzZSB0YWJsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIGlmIChlKSB0aGlzLmVtaXQoJ2NoYW5nZTp2aWV3LXNldHRpbmcnLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHNldHVwVmlldyh2aWV3KSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXQtdmlldycpLnZhbHVlID0gdmlldztcclxuICAgICAgdGhpcy5zZXRWaWV3KG51bGwsIHsgdmFsdWU6IHZpZXcgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLnZhbHVlID09PSAndGFnJykgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykuZm9jdXMoKSwgMCk7XHJcbiAgICB9LFxyXG4gICAgc29ydChlLCBlbCkge1xyXG4gICAgICBsZXQgc29ydGVkID0gdGhpcy5zb3J0ZWQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c29ydC1zZXR0aW5nJywgc29ydGVkKTtcclxuICAgICAgdGhpcy5zZXR1cFNvcnQoc29ydGVkKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTb3J0KHNvcnRlZCkge1xyXG4gICAgICBzb3J0ZWQgPSBzb3J0ZWQuc3BsaXQoJy0nKTtcclxuICAgICAgdGhpcy5uYW1lcyA9IF9TT1JULmJ5W3NvcnRlZFswXV1bc29ydGVkWzFdXSh0aGlzLm9yaWdFbnRyaWVzKTtcclxuICAgICAgdGhpcy5zb3J0U2VhcmNoUmVzdWx0cygpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBmaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZWwubm9kZU5hbWUgPT09ICdTUEFOJyA/IGVsLmZpcnN0Q2hpbGQuZGF0YSA6IGVsLnZhbHVlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgY29uc3QgZmlsdGVyZWRFbnRyaWVzID0ge307XHJcbiAgICAgIGxldCBlbnRyeSwgcngsIGMgPSAwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICByeCA9IG5ldyBSZWdFeHAoJ14nK2ZpbHRlcisnJHxeJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJyQnLCAnZycpO1xyXG4gICAgICAgIGlmICgoZmlsdGVyICYmIGVudHJ5LnRhZyAmJiBlbnRyeS50YWcuc2VhcmNoKHJ4KSAhPT0gLTEpIHx8ICghZW50cnkudGFnICYmIGZpbHRlciA9PSAnJykpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgYysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBmaWx0ZXJlZEVudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgYyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCB0aGlzLm5hbWVzLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgc29ydFNlYXJjaFJlc3VsdHMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWFyY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBhID0gbmFtZXMuaW5kZXhPZihhKTtcclxuICAgICAgICBiID0gbmFtZXMuaW5kZXhPZihiKTtcclxuICAgICAgICBpZiAoYSA9PSBiKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNoZWNrbWFya0FsbChlLCBlbCkge1xyXG4gICAgICBsZXQgZGlyZWN0bHkgPSB0eXBlb2YgZWwgPT09ICdib29sZWFuJyxcclxuICAgICAgICAgIGNoZWNrZWQgPSBkaXJlY3RseSA/IGVsIDogZWwuY2hlY2tlZCxcclxuICAgICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgICBpID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIGlucHV0c1tpXS5jaGVja2VkID0gY2hlY2tlZDtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCkge1xyXG4gICAgICBsZXQgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLFxyXG4gICAgICAgICAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZSA/IFtuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb1N5bmNUb2dnbGUobmFtZSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLS1zeW5jW2RhdGEtbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc29ydGVkIHx8IHRoaXMuc29ydGVkLFxyXG4gICAgICAgICAgICB2aWV3ID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnZpZXcgfHwgdGhpcy52aWV3TW9kZSxcclxuICAgICAgICAgICAgbDtcclxuICAgICAgICB0aGlzLnNvcnRlZCA9IHNvcnRlZDtcclxuICAgICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBWaWV3KHZpZXcpO1xyXG4gICAgICAgIGwgPSB0aGlzLm5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFNlYXJjaCgpLnRvZ2dsZUhlYWRlckZpZWxkcyhsKS50aGVuKCgpID0+IHRoaXMucmVuZGVyRW50cmllcygpLnNldEZpbHRlck9wdGlvbnMoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhZ2luYXRlKHBhZ2UpIHtcclxuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnlbZGF0YS1uYW1lPVwiJyArIGVudHJ5Lm5hbWUgKyAnXCJdJyk7XHJcblxyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gZW50cnkuZmlyc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgLy9lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydCcpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAnc3luY2VkOmVudHJ5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5pbXBvcnQtYnV0dG9uJzogJ3RyaWdnZXJGaWxlSW5wdXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWZpbGUnOiAnaGFuZGxlRmlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJy5leHBvcnQtYnV0dG9uJzogJ3VwZGF0ZUV4cG9ydE5hbWUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUV4cG9ydExpbmtzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGltcG9ydDogZnVuY3Rpb24oc3RvcmVTdHJpbmcsIHR5cGUpIHtcclxuICAgICAgdmFyIHBhcnNlZFN0cmluZztcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyc2VkU3RyaW5nID0gSlNPTi5wYXJzZShzdG9yZVN0cmluZyk7XHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3BhcnNlJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyc2VkU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbXBvcnQ6c3RvcmFnZScsIHBhcnNlZFN0cmluZywgdHlwZSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5RmFpbHVyZSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHJpZ2dlckZpbGVJbnB1dDogZnVuY3Rpb24oZSwgZWwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC0tJyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykpLmNsaWNrKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRmlsZShlLCBlbCkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKSxcclxuICAgICAgICAgIGZpbGUgPSBlbC5maWxlc1swXSxcclxuICAgICAgICAgIHNpemUgPSBmaWxlLnNpemUgLyAxMDAwMDAwLFxyXG4gICAgICAgICAgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksXHJcbiAgICAgICAgICBtb2QgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHNpemUgPiA1MClcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemUnKSk7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N5bmMnICYmIHNpemUgPiAwLjA5OSlcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemVfc3luYycpKTtcclxuXHJcbiAgICAgIGlmIChmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKSAhPT0gJ2pzb24nKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfZm9ybWF0JykpO1xyXG5cclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG1vZC5pbXBvcnQoZS50YXJnZXQucmVzdWx0LCB0eXBlKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KShmaWxlKTtcclxuXHJcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgfSxcclxuICAgIGRpc3BsYXlGYWlsdXJlKHJlYXNvbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWVycm9yJykuaW5uZXJUZXh0ID0gcmVhc29uO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVFeHBvcnRMaW5rcygpIHtcclxuICAgICAgY29uc3QgbG9jYWxEYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtbG9jYWwnKTtcclxuICAgICAgY29uc3Qgc3luY2VkRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LXN5bmNlZCcpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbG9jYWxfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbG9jYWxEYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ3N5bmNlZF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBzeW5jZWREYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFeHBvcnROYW1lKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgJ1RleHRtYXJrZXItZGF0YS0nICtcclxuICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICsgJy0nICtcclxuICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgJy5qc29uJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ2xvZydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcjY2xlYXItbG9ncyc6ICdjbGVhcicsXHJcbiAgICAgICAgICAnLnBlcm1pc3Npb24nOiAnYXNrUGVybWlzc2lvbidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5sb2dNaXNzaW5nUGVybWlzc2lvbnMoKS50aGVuKCgpID0+IHRoaXMubG9nKCkpO1xyXG4gICAgfSxcclxuICAgIGxvZ01pc3NpbmdQZXJtaXNzaW9ucygpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIucGVybWlzc2lvbnMuY29udGFpbnMoeyBwZXJtaXNzaW9uczogWyd3ZWJOYXZpZ2F0aW9uJ10gfSlcclxuICAgICAgICAudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgIGlmICghZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8tcGVybWlzc2lvbi0td2ViTmF2aWdhdGlvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvZygpIHtcclxuICAgICAgX1NUT1JFLmdldCgnbG9ncycpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgICAgbG9ncyA9IGxvZ3MgfHwgW107XHJcbiAgICAgICAgbGV0IHRhYmxlQm9keSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF0sXHJcbiAgICAgICAgICAgIGwgPSBsb2dzLmxlbmd0aCxcclxuICAgICAgICAgICAgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgICAgdHIsIHRkX2RhdGUsIHRkX21zZywgbm9kZV9kYXRlLCBub2RlX21zZywgbm9kZV9hdHRlbXB0LCB1cmwsIGxvZywgdGltZSwgbXNnLCByZWFzb247XHJcblxyXG4gICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbG9ncycpO1xyXG4gICAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICAgIG1zZyA9IGxvZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdudW1iZXInKSBtc2cgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShfTE9HX0tFWVMuZ2V0S2V5QnlWYWx1ZShsb2dbMV0pKTtcclxuICAgICAgICAgICAgLy8nbnUnLHt5ZWFyOidudW1lcmljJyxtb250aDonMi1kaWdpdCcsZGF5OicyLWRpZ2l0Jyxob3VyOidudW1lcmljJyxzZWNvbmQ6J251bWVyaWMnLG1pbnV0ZTonbnVtZXJpYyd9XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZygobmV3IERhdGUobG9nWzBdKSkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgdGRfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIHRkX21zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIG5vZGVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpbWUpO1xyXG4gICAgICAgICAgICBub2RlX21zZyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1zZyk7XHJcblxyXG4gICAgICAgICAgICB0ZF9kYXRlLmFwcGVuZENoaWxkKG5vZGVfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChub2RlX21zZyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobG9nWzJdKSB7XHJcbiAgICAgICAgICAgICAgcmVhc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgLy9yZWFzb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobG9nWzJdKSk7XHJcbiAgICAgICAgICAgICAgcmVhc29uLmlubmVyVGV4dCA9IGxvZ1syXTtcclxuICAgICAgICAgICAgICB0ZF9tc2cuYXBwZW5kQ2hpbGQocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG9nWzNdKSB7XHJcbiAgICAgICAgICAgICAgbm9kZV9hdHRlbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgIG5vZGVfYXR0ZW1wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgWyMke2xvZ1szXX1dYCkpO1xyXG4gICAgICAgICAgICAgIHRkX21zZy5pbnNlcnRCZWZvcmUobm9kZV9hdHRlbXB0LCBub2RlX21zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvZ1s0XSkge1xyXG4gICAgICAgICAgICAgIHVybCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgIHVybC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVVJMOiAke2xvZ1s0XX1gKSk7XHJcbiAgICAgICAgICAgICAgdGRfbXNnLmFwcGVuZENoaWxkKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX21zZyk7XHJcbiAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFibGVCb2R5LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKGZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ25vbG9ncycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xlYXI6bG9ncycpO1xyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gICAgfSxcclxuICAgIGFza1Blcm1pc3Npb24oKSB7XHJcbiAgICAgIGJyb3dzZXIucGVybWlzc2lvbnMucmVxdWVzdCh7IHBlcm1pc3Npb25zOiBbJ3dlYk5hdmlnYXRpb24nXSB9KS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2dyYW50ZWQtcGVybWlzc2lvbjp3ZWJOYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Blcm1pc3Npb24tYWxlcnQnKSlcclxuICAgICAgICAgICAgLmZvckVhY2goYWxlcnQgPT4gYWxlcnQuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLRVIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihrZXksIGN1c3RvbUJnQ29sb3IpIHtcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG5cclxuICAgIHRoaXMuc3R5bGVzID0ge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGN1c3RvbUJnQ29sb3IsXHJcbiAgICAgICdjb2xvcic6IHVuZGVmaW5lZCxcclxuICAgICAgJ2JvcmRlci1ib3R0b20nOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXNpemUnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LWZhbWlseSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtd2VpZ2h0JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1zdHlsZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ3RleHQtZGVjb3JhdGlvbic6IHVuZGVmaW5lZCxcclxuICAgICAgJ3RleHQtc2hhZG93JzogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2hhZG93ID0ge1xyXG4gICAgICB4OiAnMXB4JyxcclxuICAgICAgeTogJzFweCcsXHJcbiAgICAgIGJsdXI6ICcxcHgnLFxyXG4gICAgICBjb2xvcjogJyMwMDAwMDAnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5pbmplY3QoKS5wcmV2aWV3KCkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBfU1RPUkUuZ2V0KCdtYXJrZXJzJykudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgY29uc3QgbWFya2VyID0gbWFya2Vyc1t0aGlzLmtleV07XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nU3R5bGUgPSBtYXJrZXIgPyBtYXJrZXIuc3R5bGUgOiBudWxsO1xyXG5cclxuICAgICAgdGhpcy5hdXRvbm90ZSA9IG1hcmtlciAmJiBtYXJrZXIuYXV0b25vdGUgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICBpZiAoIWV4aXN0aW5nU3R5bGUpIHRoaXMuc2V0U3R5bGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnN0eWxlID0gZXhpc3RpbmdTdHlsZTtcclxuXHJcbiAgICAgIGxldCBzdHlsZXMgPSB0aGlzLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICBpID0gc3R5bGVzLmxlbmd0aCxcclxuICAgICAgICAgIHN0eWxlLCBzdHlsZVNwbGl0LCB0ZXh0U2hhZG93O1xyXG5cclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHN0eWxlID0gc3R5bGVzW2ldO1xyXG4gICAgICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgICAgc3R5bGVTcGxpdCA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlc1tzdHlsZVNwbGl0WzBdXSA9IHN0eWxlU3BsaXRbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKHRleHRTaGFkb3cgPSB0aGlzLnN0eWxlc1sndGV4dC1zaGFkb3cnXSkgJiYgdGV4dFNoYWRvdyAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgbGV0IHNoYWRvd1NwbGl0ID0gdGV4dFNoYWRvdy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnggPSBzaGFkb3dTcGxpdFswXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy55ID0gc2hhZG93U3BsaXRbMV07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYmx1ciA9IHNoYWRvd1NwbGl0WzJdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmNvbG9yID0gc2hhZG93U3BsaXRbM107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBpbmplY3QoKSB7XHJcbiAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICBzdHlsZXMgPSB0aGlzLnN0eWxlcyxcclxuICAgICAgICBiZ0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLWNvbG9yJyksXHJcbiAgICAgICAgY29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LWNvbG9yJyksXHJcbiAgICAgICAgYm9yZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yJyksXHJcbiAgICAgICAgYXV0b25vdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvbm90ZS1jb2xvcicpLFxyXG4gICAgICAgIGJnID0gc3R5bGVzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXHJcbiAgICAgICAgY29sb3IgPSBzdHlsZXNbJ2NvbG9yJ10sXHJcbiAgICAgICAgYm9yZGVyID0gc3R5bGVzWydib3JkZXItYm90dG9tJ10sXHJcbiAgICAgICAgYXV0b25vdGVDb2xvciA9IHRoaXMuYXV0b25vdGUgfHwgJycsXHJcbiAgICAgICAgc2hhZG93LCBzaGFkb3dTZWxlY3QsIGk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tbm90ZScpLmNoZWNrZWQgPSB0aGlzLmF1dG9ub3RlO1xyXG4gICAgYXV0b25vdGVJbnB1dC52YWx1ZSA9IGF1dG9ub3RlQ29sb3IgfHwgJ3llbGxvdyc7XHJcbiAgICBhdXRvbm90ZUlucHV0LmRpc2FibGVkID0gIWF1dG9ub3RlQ29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFiZztcclxuICAgIGJnSW5wdXQudmFsdWUgPSBiZyB8fCAnI2ZmZmZmZic7XHJcbiAgICBiZ0lucHV0LmRpc2FibGVkID0gIWJnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFjb2xvcjtcclxuICAgIGNvbG9ySW5wdXQudmFsdWUgPSBjb2xvciB8fCAnIzAwMDAwMCc7XHJcbiAgICBjb2xvcklucHV0LmRpc2FibGVkID0gIWNvbG9yO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJvcmRlcjtcclxuICAgIGJvcmRlcklucHV0LnZhbHVlID0gYm9yZGVyIHx8ICcxcHggc29saWQgI2ZmMDAwMCc7XHJcbiAgICBib3JkZXJJbnB1dC5kaXNhYmxlZCA9ICFib3JkZXI7XHJcblxyXG4gICAgWydmb250LXNpemUnLCAnZm9udC1mYW1pbHknLCAnZm9udC13ZWlnaHQnLCAnZm9udC1zdHlsZScsICd0ZXh0LWRlY29yYXRpb24nXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKS52YWx1ZSA9IHN0eWxlc1twcm9wXSB8fCAnZGVmYXVsdCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaGFkb3dTZWxlY3QgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtc2hhZG93Jyk7XHJcbiAgICBzaGFkb3cgPSBzdHlsZXNbJ3RleHQtc2hhZG93J107XHJcbiAgICBpID0gIXNoYWRvdyA/IDAgOiBzaGFkb3cgPT09ICdub25lJyA/IDIgOiAxO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdC5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgIHNoYWRvd1NlbGVjdC5jaGlsZHJlbltpXS5jbGljaygpO1xyXG5cclxuICAgIFsneCcsICd5JywgJ2JsdXInLCAnY29sb3InXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3ctJyArIHByb3ApLnZhbHVlID0gbWFya2VyLnNoYWRvd1twcm9wXS5yZXBsYWNlKCdweCcsICcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBwcmV2aWV3KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKS5zdHlsZSA9IHRoaXMuc3R5bGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHVwZGF0ZShlbCkge1xyXG4gICAgbGV0IGNsYXNzZXMgPSBlbC5jbGFzc0xpc3QsXHJcbiAgICAgICAgcHJvcCA9IGVsLm5hbWUsXHJcbiAgICAgICAgdmFsO1xyXG5cclxuICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdjc3MtY29sb3InKSkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSBwcm9wID09PSAnYm9yZGVyLWJvdHRvbScgPyAnMXB4IHNvbGlkICcgKyB2YWwgOiB2YWw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdycpKSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya2VyID0gdGhpcztcclxuXHJcbiAgICAgICAgc3dpdGNoKHZhbCkge1xyXG4gICAgICAgICAgY2FzZSAnbm9uZSc6IG1hcmtlci5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSAnbm9uZSc7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGVmYXVsdCc6IG1hcmtlci5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB1bmRlZmluZWQ7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnc2hhZG93JzogbWFya2VyLnNldFNoYWRvdygpOyBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdy12YWx1ZScpKSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXB4LXZhbHVlJykpXHJcbiAgICAgICAgICB2YWwgKz0gJ3B4JztcclxuXHJcbiAgICAgICAgdGhpcy5zaGFkb3dbcHJvcF0gPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTaGFkb3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvcCA9PT0gJ2JvcmRlci1ib3R0b20nKSB7XHJcbiAgICAgIHZhbCA9ICcxcHggc29saWQgJyArIGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh2YWwgPT09ICdkZWZhdWx0JyB8fCAhdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNldFN0eWxlKCkucHJldmlldygpO1xyXG4gIH1cclxuICBpc1ZhbGlkKHByb3AsIHZhbCkge1xyXG4gICAgbGV0IHZhbGlkO1xyXG5cclxuICAgIHN3aXRjaChwcm9wKSB7XHJcbiAgICAgIGNhc2UgJ2JhY2tncm91bmQtY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NvbG9yJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdib3JkZXItYm90dG9tJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXNpemUnOiB2YWxpZCA9IC9eWzAtOV17MSwyfXB4JC8udGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1mYW1pbHknOiB2YWxpZCA9IC9eW2EteixcXHMtXXs1LDQwfSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXdlaWdodCc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc3R5bGUnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0LWRlY29yYXRpb24nOiB2YWxpZCA9IC9eW2Etei1dezcsMTJ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtc2hhZG93JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAneCc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3knOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBjYXNlICdibHVyJzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG4gIHNldFNoYWRvdygpIHtcclxuICAgIHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gdGhpcy5zaGFkb3cueCArICcgJyArIHRoaXMuc2hhZG93LnkgKyAnICcgKyB0aGlzLnNoYWRvdy5ibHVyICsgJyAnICsgdGhpcy5zaGFkb3cuY29sb3I7XHJcbiAgfVxyXG4gIHNldFN0eWxlKCkge1xyXG4gICAgbGV0IHN0eWxlID0gJycsIHZhbDtcclxuXHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc3R5bGVzKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMuc3R5bGVzW2ldO1xyXG4gICAgICBpZiAodmFsKSBzdHlsZSArPSBpICsgJzonICsgdmFsICsgJzsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWwsXHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICdsaSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICAgJy5uYXZpdGVtJzogJ3RvZ2dsZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBwYWdlTmF2OiBudWxsLFxyXG4gICAgY3VycmVudDogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5wYWdlTmF2ID0gZWwuaGFzQXR0cmlidXRlKCdkYXRhLXBhZ2UtbmF2Jyk7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50ID0gZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF07XHJcbiAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5vcGVuKGN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZShlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpIHx8IHRoaXMuY3VycmVudCA9PSBlbCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY3VycmVudCkgdGhpcy5jbG9zZSh0aGlzLmN1cnJlbnQpO1xyXG5cclxuICAgICAgdGhpcy5vcGVuKGVsKTtcclxuICAgIH0sXHJcbiAgICBvcGVuKGVsKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldElkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW5lZDp0YWInLCB0YXJnZXRJZCk7XHJcbiAgICAgIHRoaXMuY3VycmVudCA9IGVsO1xyXG4gICAgICBpZiAodGhpcy5wYWdlTmF2KSB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSAnVGV4dG1hcmtlciAtICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0YXJnZXRJZCk7XHJcbiAgICB9LFxyXG4gICAgY2xvc2UoZWwpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSkuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Blcm1pc3Npb24tYWxlcnQnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5wZXJtaXNzaW9uJzogJ2Fza1Blcm1pc3Npb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBicm93c2VyLnBlcm1pc3Npb25zLmNvbnRhaW5zKHsgcGVybWlzc2lvbnM6IFsnd2ViTmF2aWdhdGlvbiddIH0pXHJcbiAgICAgICAgLnRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgICBpZiAoIWdyYW50ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgYXNrUGVybWlzc2lvbigpIHtcclxuICAgICAgYnJvd3Nlci5wZXJtaXNzaW9ucy5yZXF1ZXN0KHsgcGVybWlzc2lvbnM6IFsnd2ViTmF2aWdhdGlvbiddIH0pLnRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnZ3JhbnRlZC1wZXJtaXNzaW9uOndlYk5hdmlnYXRpb24nKTtcclxuICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGVybWlzc2lvbi1hbGVydCcpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChhbGVydCA9PiBhbGVydC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUktFUiBmcm9tICcuL21hcmtlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJzogJ3Nob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcycsXHJcbiAgICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICd1cGRhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jc3MnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAgICAgJyNjdXN0b21pemVkLWtleSc6ICd1cGRhdGVNYXJrZXInLFxyXG4gICAgICAgICAgJyNhZGQta2V5JzogJ2FkZE1hcmtlcicsXHJcbiAgICAgICAgICAnI3JlbW92ZS1rZXknOiAncmVtb3ZlTWFya2VyJyxcclxuICAgICAgICAgICcubWFyay1vcHQnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICAgICAnLnNjLWNiJzogJ3RvZ2dsZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2hvcnRjdXQtc2VsZWN0JzogJ2NoYW5nZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2F2ZS1vcHQnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICAgICAnLm5hbWluZy1vcHQnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgICAgICcjbm90ZXMtbmV3JzogJ3RvZ2dsZVNhdmVOb3RlT3B0JyxcclxuICAgICAgICAgICcuY3VzdG9taXplLXF1aWNrYnV0dG9ucyc6ICdjaGFuZ2VRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmRvd25sb2FkLXF1aWNrYnV0dG9uLW9wdCc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmN0bS1jYic6ICd0b2dnbGVDdG0nLFxyXG4gICAgICAgICAgJy5ub3Rlcy1jYic6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgICAnLm1pc2MtY2InOiAndG9nZ2xlTWlzYycsXHJcbiAgICAgICAgICAnLnRiYnBvd2VyLW9wdCc6ICd0b2dnbGVUQkJQb3dlck9wdCcsXHJcbiAgICAgICAgICAnLnRtdWlwb3MnOiAnY2hhbmdlVG11aVBvc2l0aW9uT3B0JyxcclxuICAgICAgICAgICcjcHJpdmF0ZS1zYXZlJzogJ3RvZ2dsZVByaXZTYXZlJyxcclxuICAgICAgICAgICcjYXV0by1ub3RlJzogJ3RvZ2dsZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaW1tdXQnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAgICAgJyNkcm9wLWxvc3Nlcyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgICAgICcjYXV0b1JldHJ5JzogJ3RvZ2dsZUF1dG9SZXRyeU9wdCcsXHJcbiAgICAgICAgICAnI2F1dG9ub3RlLWNvbG9yJzogJ2NoYW5nZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaWdub3JlLWhhc2gnOiAnY2hhbmdlSGFzaE9wdCcsXHJcbiAgICAgICAgICAnI2FkZG9uLWF1dG9jcyc6ICd0b2dnbGVBdXRvY3NPcHQnLFxyXG4gICAgICAgICAgJyNhZGRvbi1pZnJhbWVzJzogJ3RvZ2dsZUlGcmFtZU9wdCcsXHJcbiAgICAgICAgICAnI21pc2Mtbm90ZWZvbnRzaXplJzogJ2NoYW5nZU5vdGVzRm9udFNpemUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjdXN0b20tc2VhcmNoJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICAgICAnLmN1c3RvbS1zZWFyY2gtaW5wdXQnOiAnaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJyxcclxuICAgICAgICAgICcjZGlzYWJsZS1ub3RpZnMnOiAnZGlzYWJsZUFsbE5vdGlmaWNhdGlvbnMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWxsb3dlZEtleXM6ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBuIG8gcCBxIHIgcyB0IHUgdiB4IHkgeiAwIDEgNCA1IDYgNyA4IDkgZW50ZXIgLSArJy5zcGxpdCgnICcpLFxyXG4gICAgYWxsb3dlZFNob3J0Y3V0czogWycnLCAnY3RybEtleScsICdzaGlmdEtleScsICdhbHRLZXknLCAnY3RybEtleS1zaGlmdEtleScsICdjdHJsS2V5LWFsdEtleScsICdzaGlmdEtleS1hbHRLZXknLCAnbWV0YUtleScsICdtZXRhS2V5LXNoaWZ0S2V5JywgJ21ldGFLZXktYWx0S2V5J10sXHJcbiAgICBhbGxvd2VkUXVpY2tidXR0b25PcHRzOiBbJ3RpdGxlJywgJ3VybCcsICd0ZXh0JywgJ3RleHQgK21ldGEnLCAndGV4dCArbm90ZXMnLCAndGV4dCArbG9zdCcsICd0ZXh0IG0nLCAndGV4dCAyJywgJ3RleHQgMycsICd0ZXh0IGMnLCAndGV4dCBsb3N0J10sXHJcbiAgICBtYXJrZXJLZXlzOiBbJ20nLCAnMicsICczJ10sXHJcbiAgICBjdXN0b21NYXJrZXJLZXlzOiBbXSxcclxuICAgIG1hcmtlcjogbnVsbCxcclxuICAgIGN1c3RvbVNlYXJjaDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnMsXHJcbiAgICAgICAgICAgIG1hcmtlcktleXMgPSB0aGlzLm1hcmtlcktleXMsXHJcbiAgICAgICAgICAgIGN1c3RvbU1hcmtlcktleXMgPSB0aGlzLmN1c3RvbU1hcmtlcktleXMsXHJcbiAgICAgICAgICAgIGksIGtleTtcclxuXHJcbiAgICAgICAgZm9yIChrZXkgaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgaSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgaWYgKCFtYXJrZXJLZXlzLmluY2x1ZGVzKGkpICYmICFjdXN0b21NYXJrZXJLZXlzLmluY2x1ZGVzKGkpKVxyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbU1hcmtlcktleXMucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucygpXHJcbiAgICAgICAgICAgIC51cGRhdGVNYXJrZXIodGhpcy5tYXJrZXIgPyB0aGlzLm1hcmtlci5rZXkgOiAnbScpXHJcbiAgICAgICAgICAgIC5pbmplY3RTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLWtleScpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24nKSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcbiAgICAgIHRoaXMuY3VzdG9tTWFya2VyS2V5cyA9IFtdO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKCkuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZU1hcmtlcihlLCBlbCwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgICBsZXQga2V5ID0gZWwgPyBlbC52YWx1ZSA6IGUgPyBlIDogdGhpcy5tYXJrZXIgPyB0aGlzLm1hcmtlci5rZXkgOiAnbSc7XHJcblxyXG4gICAgICB0aGlzLm1hcmtlciA9IG5ldyBfTUFSS0VSKGtleSwgY3VzdG9tQmdDb2xvcik7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICByZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zKCkge1xyXG4gICAgICBsZXQga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgYWRkS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1rZXknKSxcclxuICAgICAgICAgIHJlbW92ZUtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUta2V5JyksXHJcblxyXG4gICAgICAgICAgYWxsb3dlZEtleXMgPSB0aGlzLmFsbG93ZWRLZXlzLFxyXG4gICAgICAgICAgY3VzdG9tTWFya2VyS2V5cyA9IHRoaXMuY3VzdG9tTWFya2VyS2V5cyxcclxuXHJcbiAgICAgICAgICBhID0gYWxsb3dlZEtleXMubGVuZ3RoLFxyXG4gICAgICAgICAgYyA9IGN1c3RvbU1hcmtlcktleXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcblxyXG4gICAgICAgICAgZnJhZ21lbnQxID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cclxuICAgICAgICAgIG9wdGlvbiwgaWNvbiwgdmFsLCBWYWw7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGM7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IGN1c3RvbU1hcmtlcktleXNbaV07XHJcbiAgICAgICAgVmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgVmFsID0gVmFsID09PSAnRU5URVInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDogVmFsO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGZyYWdtZW50MS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyLW9wdGlvbiBjdXN0b20tbWFya2VyLW9wdGlvbi0nICsgdmFsO1xyXG5cclxuICAgICAgICBmcmFnbWVudDMuYXBwZW5kQ2hpbGQob3B0aW9uLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgICAgIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmcmFnbWVudDIuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICAgIGljb24uaWQgPSAnY3VzdG9tLWtleS0nICsgdmFsO1xyXG4gICAgICAgIGljb24uaW5uZXJUZXh0ID0gVmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBrZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQxKTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQyKTtcclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50Myk7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYTsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gYWxsb3dlZEtleXNbaV0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1c3RvbU1hcmtlcktleXMuaW5jbHVkZXModmFsKSlcclxuICAgICAgICAgICAgY29udGludWVcclxuXHJcbiAgICAgICAgVmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQ0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyLW9wdGlvbiBjdXN0b20tbWFya2VyLW9wdGlvbi0nICsgdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhZGRLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQ0KTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGluamVjdFNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICAgIGxldCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHMsXHJcbiAgICAgICAgICBpLCBzY0NoZWNrYm94LCBzY1NlbGVjdCwgY21DaGVja2JveCwgc2M7XHJcblxyXG4gICAgICBmb3IgKGkgaW4gc2hvcnRjdXRzKSB7XHJcbiAgICAgICAgc2MgPSBzaG9ydGN1dHNbaV07XHJcbiAgICAgICAgc2NDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYy0nICsgaSk7XHJcbiAgICAgICAgc2NTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtc2VsZWN0LScgKyBpKTtcclxuICAgICAgICBjbUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtLScgKyBpKTtcclxuXHJcbiAgICAgICAgaWYgKHNjQ2hlY2tib3gpIHNjQ2hlY2tib3guY2hlY2tlZCA9IHNjWzFdO1xyXG4gICAgICAgIGlmIChzY1NlbGVjdCkgc2NTZWxlY3QudmFsdWUgPSBzY1swXTtcclxuICAgICAgICBpZiAoY21DaGVja2JveCkgY21DaGVja2JveC5jaGVja2VkID0gc2NbMl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncy5oaXN0b3J5LFxyXG4gICAgICAgICAgc2F2ZU9wdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc2F2ZS1vcHQnKTtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuYXV0b3NhdmUpIHNhdmVPcHRzWzBdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHNhdmVPcHRzWzFdLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtJyArIGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpdmF0ZS1zYXZlJykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlSW5Qcml2O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1tdXQnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmltbXV0O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1sb3NzZXMnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmRyb3BMb3NzZXM7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvUmV0cnknKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmF1dG9SZXRyeTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLW5ldycpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3Muc2F2ZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZ25vcmUtaGFzaCcpLmNoZWNrZWQgPSAhaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2g7XHJcblxyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzLmRvd25sb2FkID09PSAnanNvbicpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWQtanNvbicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC10ZXh0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrYnV0dG9uLWRvd25sb2FkLXNlbGVjdCcpLnZhbHVlID0gaGlzdG9yeVNldHRpbmdzLmRvd25sb2FkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbWlzY1NldHRpbmdzID0gc2V0dGluZ3MubWlzYztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLW1ldGhvZC0tJyArIG1pc2NTZXR0aW5ncy5tYXJrbWV0aG9kKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2MtYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmJtaWNvbjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZWljb24nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVpY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3Rlb25jbGljaycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZW9uY2xpY2s7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGV0cmFuc3AnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGV0cmFuc3A7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVwbGFpbnZpZXcnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVmb250c2l6ZScpLnZhbHVlID0gbWlzY1NldHRpbmdzLm5vdGVmb250c2l6ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXJlc3RvcmF0aW9uLWZhaWx1cmUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmZhaWx1cmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tc3VjY2VzcycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Muc3VjY2Vzc05vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1wYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnBibU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1lcnJvcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZXJyb3JOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlwLW5vdGUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnZpcE5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1sb2FkJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5sb2FkTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0JykudmFsdWUgPSBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoID8gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaFswXSA6IHRoaXMuY3VzdG9tU2VhcmNoO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJykudmFsdWUgPSBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoID8gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaFsxXSA6ICcnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG11aXBvcy0tbm90ZWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG11aXBvcy0tYm1pY29uJykudmFsdWUgPSBtaXNjU2V0dGluZ3MudG11aXBvcztcclxuXHJcbiAgICAgIGlmIChtaXNjU2V0dGluZ3MudGJicG93ZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJicG93ZXItb24nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJicG93ZXItb2ZmJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRvbi1hdXRvY3MnKS5jaGVja2VkID0gc2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkb24taWZyYW1lcycpLmNoZWNrZWQgPSAhc2V0dGluZ3MuYWRkb24uaWZyYW1lcztcclxuICAgIH0sXHJcbiAgICBzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0sXHJcbiAgICBoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTdHlsZShlLCBlbCkge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLm1hcmtlci51cGRhdGUoZWwpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c3R5bGUtc2V0dGluZycsIG1hcmtlci5rZXksIG1hcmtlci5zdHlsZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQXV0b05vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gZWwuY2hlY2tlZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvbm90ZS1jb2xvcicpLnZhbHVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLCB0aGlzLm1hcmtlci5rZXksIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQXV0b05vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tbm90ZScpLmNoZWNrZWQgPyBlbC52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUhhc2hPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aGFzaC1zZXR0aW5nJywgIWVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUltbXV0T3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmltbXV0LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVEcm9wTG9zc2VzT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9SZXRyeU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvUmV0cnktc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9jc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvY3Mtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUlGcmFtZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTppZnJhbWUtc2V0dGluZycsICFlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBhZGRNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdLFxyXG4gICAgICAgICAgY2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgYmdDb2xvciA9IHRoaXMuZ2V0UmFuZG9tTGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgcmVtb3ZlS2V5U2VsZWN0LmNoaWxkcmVuLmxlbmd0aCA+PSAxMiB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgIGNsb25lLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIGtleTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgIGljb24uaW5uZXJUZXh0ID0ga2V5ID09PSAnZW50ZXInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDoga2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcihrZXksIG51bGwsIGJnQ29sb3IpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6Y3VzdG9tLW1hcmtlcicsIGtleSwgJ2JhY2tncm91bmQtY29sb3I6JyArIGJnQ29sb3IgKyAnOycpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIGFkZEtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICBrZXlTZWxlY3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIGtleSlbMF0ucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5LScgKyBrZXkpLnJlbW92ZSgpO1xyXG4gICAgICBrZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcignbScpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsIGtleSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTWFya01ldGhvZChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2hvcnRjdXQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRTaG9ydGN1dHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUN0bShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpjdG0tc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNhdmVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJywgISFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUHJpdlNhdmUoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cHJpdi1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTmFtaW5nT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNhdmVOb3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5hbGxvd2VkUXVpY2tidXR0b25PcHRzLmluY2x1ZGVzKGVsLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hRdWlja2J1dHRvbk9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGUgPT09ICdqc29uJyA/IHR5cGUgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLCBlbC5uYW1lLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZUFsbE5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICAgIGNvbnN0IGNicyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtbmV3JyldLmNvbmNhdChBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGVzLWNiJykpKTtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjYnMubGVuZ3RoKSByZXR1cm4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgY2JzLnBvcCgpLmNsaWNrKCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTWlzYyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUQkJQb3dlck9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSAhIShlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSoxKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVG11aVBvc2l0aW9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RtdWlwb3MnKSkuZm9yRWFjaChzZWxlY3QgPT4gc2VsZWN0LnZhbHVlID0gZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZU5vdGVzRm9udFNpemUoZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWlzYy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ3VzdG9tU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCk7XHJcbiAgICAgIGNvbnN0IGlucDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKTtcclxuICAgICAgY29uc3QgaW5wMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKTtcclxuICAgICAgY29uc3QgcGFydDEgPSBpbnAxLnZhbHVlO1xyXG4gICAgICBjb25zdCBwYXJ0MiA9IGlucDIudmFsdWU7XHJcbiAgICAgIGlmICghcGFydDEgJiYgIXBhcnQyKSB7XHJcbiAgICAgICAgaW5wMS52YWx1ZSA9IHRoaXMuY3VzdG9tU2VhcmNoO1xyXG4gICAgICAgIGlucDIudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgW3BhcnQxLCBwYXJ0Ml0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmFuZG9tTGlnaHRDb2xvcigpIHtcclxuICAgICAgcmV0dXJuICcjJyArIE1hdGguZmxvb3IoKDAuOCArIE1hdGgucmFuZG9tKCkgKiAwLjE3NSkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ZhaWxlZDp0b2dnbGUtc3luYyc6ICd1bmRvJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlU3dpdGNoJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1zZXR0aW5ncycpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX3NldHRpbmdzID09PSAnc3luYycpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLWhpc3RvcnknKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYycpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLXBhZ2Vub3RlcycpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX3BhZ2Vub3RlcyA9PT0gJ3N5bmMnKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlU3dpdGNoKGUsIGVsKSB7XHJcbiAgICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLXN5bmMnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnN5bmMnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5kbyhmaWVsZCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLScgKyBmaWVsZCkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1RPR0dMRVIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLCBmYWxzZSk7XHJcbiAgfVxyXG4gIHRvZ2dsZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGxldCBkYXRhVGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JyksXHJcbiAgICAgICAgdGFyZ2V0cyA9IGRhdGFUYXJnZXQgPyBkYXRhVGFyZ2V0LnNwbGl0KCcgJykgOiBudWxsLFxyXG4gICAgICAgIGRhdGFUb2dnbGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKSxcclxuICAgICAgICByb2xlcyA9IGRhdGFUb2dnbGUgPyBkYXRhVG9nZ2xlLnNwbGl0KCcgJykgOiBudWxsO1xyXG5cclxuICAgIGlmIChyb2xlcykge1xyXG4gICAgICByb2xlcy5mb3JFYWNoKChyb2xlLCBpKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRzW2ldKS5jbGFzc0xpc3Rbcm9sZV0oJ29wZW4nKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldHNbMF0pLmRpc2FibGVkID0gIXRoaXMuY2hlY2tlZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Ryb3VibGVzaG9vdGluZycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnb3B0aW9uJzogJ3RvZ2dsZVRvcGljJyxcclxuICAgICAgICAgICcudHJvdWJsZV9fYW5zd2VyLS1idG4nOiAnc2hvd0FydGljbGUnLFxyXG4gICAgICAgICAgJy50cm91YmxlX19hbnN3ZXItLXN1Yic6ICdzaG93QXJ0aWNsZScsXHJcbiAgICAgICAgICAnLnRyb3VibGVfX2NhbmNlbCc6ICdjYW5jZWwnLFxyXG4gICAgICAgICAgJy50cm91YmxlX19hbnN3ZXItLW5vLWVudHJpZXMnOiAnc2Nhbkhpc3RvcnknXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGN1cnJlbnRUcm91YmxlOiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlVG9waWMoZSwgZWwpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFRyb3VibGUpIHRoaXMuY3VycmVudFRyb3VibGUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICBjb25zdCBuZXdUcm91YmxlID0gdGhpcy5jdXJyZW50VHJvdWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSk7XHJcbiAgICAgIG5ld1Ryb3VibGUuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgfSxcclxuICAgIHNob3dBcnRpY2xlKGUsIGVsKSB7XHJcbiAgICAgIGVsID0gZWwubm9kZU5hbWUgPT09ICdCVVRUT04nID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBjb25zdCBib3hDbGFzc0xpc3QgPSBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0O1xyXG4gICAgICBib3hDbGFzc0xpc3QuYWRkKCdhbnN3ZXJlZCcpO1xyXG4gICAgICBib3hDbGFzc0xpc3QuYWRkKGBhbnN3ZXJlZC0tJHtlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKX1gKTtcclxuICAgIH0sXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5zd2VyZWQnKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYW5zd2VyZWQnKTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhbnN3ZXJlZC0tbm8nKTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhbnN3ZXJlZC0teWVzJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNjYW5IaXN0b3J5KCkge1xyXG5cclxuICAgICAgY29uc3QgYXJ0aWNsZXMgPSBbXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3Rvcnktc2Nhbl9fZXJyb3InKSxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1zY2FuX19lbXB0eScpLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LXNjYW5fX25vbmVtcHR5JyksXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3Rvcnktc2Nhbl9fbm9tYXJrcycpXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IFtlcnJFbCwgZW1wdHlFbCwgbm9uZW1wdHlFbCwgbm9tYXJrc0VsXSA9IGFydGljbGVzO1xyXG5cclxuICAgICAgYXJ0aWNsZXMuZm9yRWFjaChhID0+IGEuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJykpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5IHx8ICFoaXN0b3J5LmVudHJpZXMpIHtcclxuICAgICAgICAgIGVyckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBsZW4gPSBoaXN0b3J5LmVudHJpZXMgPyBPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgICAgaWYgKGxlbikge1xyXG4gICAgICAgICAgICBub25lbXB0eUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICBsZXQgbm9tYXJrcyA9IHRydWUsIGVudHJ5O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlIGluIGhpc3RvcnkuZW50cmllcykge1xyXG4gICAgICAgICAgICAgIGVudHJ5ID0gaGlzdG9yeS5lbnRyaWVzW2VdO1xyXG4gICAgICAgICAgICAgIGlmIChlbnRyeS5tYXJrcyAmJiBlbnRyeS5tYXJrcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LXNjYW5fX2NvdW50JykuaW5uZXJUZXh0ID0gbGVuO1xyXG4gICAgICAgICAgICAgICAgbm9tYXJrcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub21hcmtzKSB7XHJcbiAgICAgICAgICAgICAgbm9tYXJrc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbXB0eUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBlcnJFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LXNjYW5fX2Vycm9ybXNnMScpLmlubmVyVGV4dCA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFydGljbGVDbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Ryb3VibGUtLTMnKS5jbGFzc0xpc3Q7XHJcblxyXG4gICAgICAgICAgYXJ0aWNsZUNsYXNzZXMuYWRkKCdhbnN3ZXJlZCcpO1xyXG4gICAgICAgICAgYXJ0aWNsZUNsYXNzZXMuYWRkKCdhbnN3ZXJlZC0teWVzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdhZGRvbi1wYWdlJyxcclxuICB0eXBlOiAnY29udGVudCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b1JldHJ5LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmlmcmFtZS1zZXR0aW5nJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnLFxyXG4gICAgICAnb3BlbjplbnRyaWVzJyxcclxuICAgICAgJ3JlbmFtZTplbnRyeScsXHJcbiAgICAgICdjb3JyZWN0LW5hbWU6ZW50cnknLFxyXG4gICAgICAndmlldzplbnRyeScsXHJcbiAgICAgICdzeW5jOmVudHJ5JyxcclxuICAgICAgJ3N5bmM6aGlzdG9yeScsXHJcbiAgICAgICdzeW5jOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2xlYXI6bG9ncycsXHJcbiAgICAgICd0YWc6ZW50cmllcycsXHJcbiAgICAgICdncmFudGVkLXBlcm1pc3Npb246d2ViTmF2aWdhdGlvbidcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZSxcclxuICAgICAgYXV0b1JldHJ5OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG5vdGVmb250c2l6ZTogMTIsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGxvYWROb3RlOiBmYWxzZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAndG0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBub3RlX3BibTogMSxcclxuICBub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmU6IDIsXHJcbiAgbm90ZV91cmw6IDMsXHJcbiAgZXJyb3Jfc2F2ZV9zdHlsZTogNCxcclxuICBlcnJvcl9zYXZlX190b2dnbGVfc2M6IDUsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2M6IDYsXHJcbiAgZXJyb3Jfc2F2ZV9jdG06IDcsXHJcbiAgZXJyb3Jfc2F2ZV9hdXRvc2F2ZTogOCxcclxuICBlcnJvcl9zYXZlX25hbWluZzogOSxcclxuICBlcnJvcl9zYXZlX25vdGlmeTogMTAsXHJcbiAgZXJyb3Jfc2F2ZV9kb3dubG9hZDogMTEsXHJcbiAgZXJyb3Jfc2F2ZV9ibWljb246IDEyLFxyXG4gIGVycm9yX2NsZWFuX2hpc3Rvcnk6IDEzLFxyXG4gIGVycm9yX2FkZF9tYXJrZXI6IDE0LFxyXG4gIGVycm9yX3JlbW92ZV9tYXJrZXI6IDE1LFxyXG4gIGVycm9yX3NhdmVfZW50cnk6IDE2LFxyXG4gIGVycm9yX3VwZGF0ZV9lbnRyeTogMTcsXHJcbiAgZXJyb3JfZGVsX2VudHJ5OiAxOCxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0OiAxOSxcclxuICBlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZTogMjAsXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0OiAyMSxcclxuICBlcnJvcl9pbXBvcnRfZW1wdHk6IDIyLFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5OiAyMyxcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3M6IDI0LFxyXG4gIGVycm9yX2ltcG9ydF9vdXRkYXRlZDogMjUsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kOiAyNixcclxuICBlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kOiAyNyxcclxuICBlcnJvcl9uYW1pbmc6IDI4LFxyXG4gIGVycm9yX3N0b3JhZ2VfbWlncmF0aW9uOiAyOSxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlOiAzMCxcclxuICBlcnJvcl90b2dnbGVfc3luYzogMzEsXHJcbiAgZXJyb3Jfc2F2ZV9wcml2OiAzMixcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMTogMzMsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzI6IDM0LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlOiAzNSxcclxuICBlcnJvcl9zYXZlX21hcmtfbWV0aG9kOiAzNixcclxuICBqc19pbmplY3Rpb25fZmFpbHVyZTogMzcsXHJcbiAgY3NzX2luamVjdGlvbl9mYWlsdXJlOiAzOCxcclxuICBtaXNzaW5nX3Blcm1pc3Npb25fd246IDM5LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiAnJztcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCwgJycpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlcicsICdIcmVmJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShhcmdzWzBdLnRhYklkLCB7IGV2OiBldmVudCwgd2FpdDogdHJ1ZSB9LCB7IGZyYW1lSWQ6IGFyZ3NbMF0uZnJhbWVJZCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgIHRoaXMucmVnaXN0ZXJPbmVPZmZFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3Rlck9uZU9mZkV2ZW50cyhldmVudHMuT05FT0ZGKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbmVPZmZFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgfHwgKCBldmVudHMgPSB0aGlzLmV2ZW50cy5PTkVPRkYpO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgX1BSSVZQT1JUIGV4dGVuZHMgX1BPUlQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xyXG4gICAgICAgICAgIXRoaXMucG9ydCB8fCB0aGlzLnBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKHRoaXMucG9ydExpc3RlbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLkNPTk5FQ1RJT047XHJcblxyXG4gICAgICAgIGlmIChldmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiBgJHt0aGlzLm5hbWV9XyR7dGhpcy5pZH1gIH0pO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5wb3J0TGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpO1xyXG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgX0JHUE9SVCBleHRlbmRzIF9QT1JUIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnBvcnRzID0ge307XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck9uQ29ubmVjdExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHMuQ09OTkVDVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJPbkNvbm5lY3RMaXN0ZW5lcigpIHtcclxuICAgICAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3J0cyA9IHRoaXMucG9ydHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKTtcclxuICAgICAgICAgICAgcG9ydHNbcG9ydC5uYW1lXSA9IHBvcnQ7XHJcbiAgICAgICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBvcnRzW3BvcnQubmFtZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IHBvcnRzID0gdGhpcy5wb3J0cztcclxuICAgICAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcCBpbiBwb3J0cykge1xyXG4gICAgICAgICAgICBpZiAocG9ydHMuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICBwb3J0c1twXS5wb3N0TWVzc2FnZShtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBfUE9SVCwgX1BSSVZQT1JULCBfQkdQT1JUIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=