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
  allowedHashes: ['news', 'manual', 'settings', 'history', 'contact', 'sync', 'export', 'logs'],
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
      this.setAddonLinks().setLogLink();
    },
    setAddonLinks: function setAddonLinks() {
      var addonURL = browser.i18n.getMessage('url_moz_addon'),
          addonLinks = document.getElementsByClassName('moz-addon'),
          a = addonLinks.length,
          aL;

      while (a--) {
        aL = addonLinks[a];
        aL.href = addonURL;
        if (aL.id === 'moz-addon--contact') aL.innerText = addonURL;
      }

      return this;
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
        name = names[i];
        entry = entries[name];

        if (entry) {
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

          if (entry.synced === undefined || entry.synced) {
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
          'li': 'toggle'
        }
      }
    },
    pageNav: null,
    current: null,
    autoinit: function autoinit() {
      this.pageNav = el.hasAttribute('data-page-nav');
      var current = this.current = el.getElementsByClassName('active')[0];
      this.open(current);
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
          '#addon-iframes': 'toggleIFrameOpt'
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
    ONEOFF: ['change:style-setting', 'change:autonote-setting', 'change:mark-method-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:immut-setting', 'change:dropLosses-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'change:hash-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'switch:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'toggle:tbbpower-setting', 'change:autocs-setting', 'change:iframe-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'rename:entry', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries']
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
      console.log('pass:', req.ev);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1NUT1JFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJldmVudHMiLCJFTlYiLCJlbnYiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnkiLCJkb3dubG9hZCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsImFsbG93ZWRIYXNoZXMiLCJib290c3RyYXBwZWQiLCJhdXRvaW5pdCIsInN0YXJ0IiwiaW5pdE1haW5OYXYiLCJ0YWIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzcGxpdCIsImluY2x1ZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsIl9OQVYiLCJpbm5lclRleHQiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJ2ZXJzaW9uIiwic3VibmF2cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuIiwibGVuZ3RoIiwidG9nZ2xlQnV0dG9ucyIsInQiLCJfVE9HR0xFUiIsInNldEFkZG9uTGlua3MiLCJzZXRMb2dMaW5rIiwiYWRkb25VUkwiLCJpMThuIiwiZ2V0TWVzc2FnZSIsImFkZG9uTGlua3MiLCJhIiwiYUwiLCJocmVmIiwiaWQiLCJsb2dMaW5rIiwibG9ncyIsImwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2ciLCJEYXRlIiwidG9VVENTdHJpbmciLCJlbCIsIkRPTSIsImNsaWNrIiwibnVtYmVyUGFnZXMiLCJudW1iZXJFbnRyaWVzIiwiY3VycmVudFBhZ2UiLCJwZXJQYWdlIiwidXBkYXRlRnJvbVN0b3JhZ2UiLCJlIiwibmV3UGFnZSIsImdldEF0dHJpYnV0ZSIsImVtaXQiLCJyZW5kZXIiLCJwcmV2IiwibmV4dCIsInVwZGF0ZSIsInJlbW92ZSIsInBwIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJzaWxlbnQiLCJNYXRoIiwiY2VpbCIsInJlc2V0IiwidWwiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwibGkiLCJwIiwicGFnZXMiLCJyIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpIiwibWF4IiwibWluIiwiaiIsImFwcGVuZEJ1dHRvbiIsImluc2VydEJlZm9yZSIsImIiLCJidG4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYW5nZUNvdW50UGVyUGFnZSIsImJ5IiwiZGF0ZSIsImNyZWF0ZWQiLCJvYmplY3QiLCJfc29ydCIsImxhc3QiLCJmaWVsZCIsInNvcnQiLCJuYW1lIiwiYXoiLCJ6YSIsInJldmVyc2UiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJjaGFuZ2UiLCJrZXl1cCIsImluaXRpYWxpemVkIiwibmFtZXMiLCJlbnRyeVRtcGwiLCJlbnRyaWVzQ29udGFpbmVyIiwicGFnZSIsInNvcnRlZCIsInZpZXdNb2RlIiwic2VhcmNoVGVybSIsInNlYXJjaGVkIiwidGFncyIsImZpbHRlcmVkIiwiZmlsdGVyT3B0aW9uc1NldCIsImluaXQiLCJyZXN1bWUiLCJtc2ciLCJsb2NrZWQiLCJjb25maXJtZWQiLCJjb25maXJtIiwidHlwZSIsInNwZWMiLCJ1bmRlZmluZWQiLCJnZXREYXRhIiwiZGF0YSIsInRleHQiLCJsaW5rIiwiam9pbiIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImJhY2t1cCIsInBvcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b0xvY2FsZVN0cmluZyIsInJlcGxhY2UiLCJjb250YWlucyIsImdldFVSTHMiLCJ1cmxzIiwibmV3TmFtZSIsInByb21wdCIsIm9sZE5hbWUiLCJhcmVhIiwicGFyZW50Tm9kZSIsInRhZyIsImZvcmNlIiwibyIsInN5bmMiLCJsb2NhbCIsIm9yaWdFbnRyaWVzIiwic3luY2VkIiwicHVzaCIsImNoZWNrZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aW9uIiwidmFsdWUiLCJ2YWwiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lciIsInNlYXJjaFRlcm1MZW5ndGgiLCJzZWFyY2hlZEZ1bGxUZXh0IiwiY2xvbmUiLCJlbnRyeSIsIm5hbWVGaWVsZCIsImlucHV0IiwibGFiZWwiLCJpbmZvQnV0dG9uIiwiZGV0YWlscyIsInNlYXJjaFJlc3VsdHMiLCJidXR0b25zIiwiZWRpdCIsInZpZXciLCJpbW11dCIsImltbXV0RWwiLCJsb2NrZWRFbCIsInRhZ0VsIiwiZmlsdGVyIiwiY2xvbmVOb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1cmwiLCJjbGFzc05hbWUiLCJvcHRpbWl6ZURhdGVTdHJpbmciLCJmaXJzdCIsIm1hcmtzIiwiZnVsbFRleHRTZWFyY2hSZXN1bHRzIiwicmVzIiwibWFyayIsInBvcyIsIm1hcmtUZXh0IiwibWFya1RleHRFbCIsImhpZ2hsaWdodCIsInQxIiwidDIiLCJ0MyIsInN1YnN0cmluZyIsInN1YnN0ciIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwic2VsZWN0IiwicGxhY2Vob2xkZXJPcHRpb24iLCJhbGxUYWdzIiwiYWRkRmlsdGVyT3B0IiwiZGlzYWJsZWQiLCJhdHRycyIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibm90ZVRleHQiLCJsb3N0IiwibSIsInRpdGxlIiwidHJpbSIsImdldFRleHQiLCJxIiwidGVybSIsInNlYXJjaFR5cGUiLCJjb3VudFNlbGVjdCIsImNsYXNzTWV0aCIsInRvZ2dsZSIsInNldHVwU2VhcmNoIiwicmVuZGVyRW50cmllcyIsInNlYXJjaENvdW50Iiwic2VhcmNoRnVsbFRleHQiLCJzZWFyY2hCeU5hbWUiLCJmb3VuZCIsInJlc3VsdHMiLCJ0YWJsZSIsInNldFZpZXciLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJzZXR1cFNvcnQiLCJfU09SVCIsInNvcnRTZWFyY2hSZXN1bHRzIiwibm9kZU5hbWUiLCJmaXJzdENoaWxkIiwiZmlsdGVyZWRFbnRyaWVzIiwicngiLCJjIiwiUmVnRXhwIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJkaXJlY3RseSIsImlucHV0cyIsImRlbGVnYXRlQnV0dG9uQWN0aW9uIiwicXVlcnlTZWxlY3RvciIsInNldHVwVmlldyIsInRvZ2dsZUhlYWRlckZpZWxkcyIsInNldEZpbHRlck9wdGlvbnMiLCJtb3VzZWRvd24iLCJ1cGRhdGVFeHBvcnRMaW5rcyIsInN0b3JlU3RyaW5nIiwicGFyc2VkU3RyaW5nIiwicGFyc2UiLCJkaXNwbGF5RmFpbHVyZSIsInRyaWdnZXJGaWxlSW5wdXQiLCJoYW5kbGVGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImZpbGUiLCJmaWxlcyIsInNpemUiLCJtb2QiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwicmVhc29uIiwibG9jYWxEYXRhTGluayIsInN5bmNlZERhdGFMaW5rIiwidXBkYXRlRXhwb3J0TmFtZSIsInRhYmxlQm9keSIsInRyIiwidGRfZGF0ZSIsInRkX21zZyIsIm5vZGVfZGF0ZSIsIm5vZGVfbXNnIiwidGltZSIsIl9MT0dfS0VZUyIsImdldEtleUJ5VmFsdWUiLCJjbGVhciIsIl9NQVJLRVIiLCJjdXN0b21CZ0NvbG9yIiwic3R5bGVzIiwic2hhZG93IiwieCIsInkiLCJibHVyIiwiY29sb3IiLCJpbmplY3QiLCJwcmV2aWV3IiwibWFya2VyIiwiZXhpc3RpbmdTdHlsZSIsInN0eWxlIiwiYXV0b25vdGUiLCJzZXRTdHlsZSIsInN0eWxlU3BsaXQiLCJ0ZXh0U2hhZG93Iiwic2hhZG93U3BsaXQiLCJiZ0lucHV0IiwiY29sb3JJbnB1dCIsImJvcmRlcklucHV0IiwiYXV0b25vdGVJbnB1dCIsImJnIiwiYm9yZGVyIiwiYXV0b25vdGVDb2xvciIsInNoYWRvd1NlbGVjdCIsInByb3AiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJpc1ZhbGlkIiwic2V0U2hhZG93IiwidmFsaWQiLCJ0ZXN0IiwicGFnZU5hdiIsImN1cnJlbnQiLCJoYXNBdHRyaWJ1dGUiLCJvcGVuIiwiY2xvc2UiLCJ0YXJnZXRJZCIsImFsbG93ZWRLZXlzIiwiYWxsb3dlZFNob3J0Y3V0cyIsImFsbG93ZWRRdWlja2J1dHRvbk9wdHMiLCJtYXJrZXJLZXlzIiwiY3VzdG9tTWFya2VyS2V5cyIsImN1c3RvbVNlYXJjaCIsInJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMiLCJ1cGRhdGVNYXJrZXIiLCJpbmplY3RTZXR0aW5ncyIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImtleVNlbGVjdCIsImtleUljb25zIiwiYWRkS2V5U2VsZWN0IiwicmVtb3ZlS2V5U2VsZWN0IiwiZnJhZ21lbnQxIiwiZnJhZ21lbnQyIiwiZnJhZ21lbnQzIiwiZnJhZ21lbnQ0Iiwib3B0aW9uIiwiaWNvbiIsIlZhbCIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2NDaGVja2JveCIsInNjU2VsZWN0IiwiY21DaGVja2JveCIsInNjIiwiaGlzdG9yeVNldHRpbmdzIiwic2F2ZU9wdHMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImF1dG9zYXZlIiwibmFtaW5nIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJzYXZlTm90ZSIsImlnbm9yZUhhc2giLCJtaXNjU2V0dGluZ3MiLCJtaXNjIiwibWFya21ldGhvZCIsImJtaWNvbiIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsInRtdWlwb3MiLCJ0YmJwb3dlciIsImFkZG9uIiwiYXV0b2NzIiwiaWZyYW1lcyIsInNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImNoYW5nZVN0eWxlIiwidG9nZ2xlQXV0b05vdGVPcHQiLCJjaGFuZ2VBdXRvTm90ZU9wdCIsImNoYW5nZUhhc2hPcHQiLCJ0b2dnbGVJbW11dE9wdCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJhZGRNYXJrZXIiLCJiZ0NvbG9yIiwiZ2V0UmFuZG9tTGlnaHRDb2xvciIsInNlbGVjdGVkIiwicmVtb3ZlTWFya2VyIiwiY2hhbmdlTWFya01ldGhvZCIsInRvZ2dsZVNob3J0Y3V0IiwiY2hhbmdlU2hvcnRjdXQiLCJ0b2dnbGVDdG0iLCJjaGFuZ2VTYXZlT3B0IiwidG9nZ2xlUHJpdlNhdmUiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVTYXZlTm90ZU9wdCIsImNoYW5nZVF1aWNrYnV0dG9uT3B0Iiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RlcyIsInRvZ2dsZU1pc2MiLCJ0b2dnbGVUQkJQb3dlck9wdCIsImNoYW5nZVRtdWlQb3NpdGlvbk9wdCIsImNoYW5nZUN1c3RvbVNlYXJjaCIsImlucDEiLCJpbnAyIiwicGFydDEiLCJwYXJ0MiIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInRvZ2dsZVN3aXRjaCIsInVuZG8iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRhcmdldCIsInRhcmdldHMiLCJkYXRhVG9nZ2xlIiwicm9sZXMiLCJyb2xlIiwiT05FT0ZGIiwieiIsInMiLCJkIiwidyIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJzYiIsImNtIiwiY29weSIsImFjdGl2ZSIsIm92ZXJ3cml0ZSIsImNoYW5nZWROb3RlIiwicHJvZ3Jlc3NiYXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwibm90ZXMiLCJsaW5rcyIsInRoZW1lcyIsInRoZW1lIiwicGFnZW5vdGVzIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwianNfaW5qZWN0aW9uX2ZhaWx1cmUiLCJjc3NfaW5qZWN0aW9uX2ZhaWx1cmUiLCJzcmMiLCJpc0FycmF5IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwiYXV0b1BhdXNlIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwibWV0aCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwib24iLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYW5kbGVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJfZXh0cmEiLCJzZXQiLCJlcnJvciIsImZpbGVuYW1lIiwibWVzc2FnZSIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwidGV4dENvbnRlbnQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiY29uc29sZSIsImxhc3RBcmciLCJmcmFtZUlkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJzZXRBcmVhcyIsIlByb21pc2UiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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QUFDQSxZQUFZLENBQUN2a0IsT0FBbkMsRUFBNEM7QUFDMUMsaUJBQU8vQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvSyxJQUFoQixDQUFxQmxLLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBbW1CLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDeGtCLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT3VrQixZQUFZLENBQUN2a0IsT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUIxQyxlIiwiZmlsZSI6ImNvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBlbnY6ICdhZGRvbi1wYWdlJyxcclxuXHJcbiAgX2dldF9kb3dubG9hZF9vcHRpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ3RleHQnO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmRvd25sb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5pbXBvcnQgX0hJU1RPUlkgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnknXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgX0xPR0dJTkcgZnJvbSAnLi9tb2R1bGVzL2xvZ3MnXHJcbmltcG9ydCBfU1lOQ0lORyBmcm9tICcuL21vZHVsZXMvc3luY2luZydcclxuaW1wb3J0IF9JTVBPUlQgZnJvbSAnLi9tb2R1bGVzL2ltcG9ydCdcclxuaW1wb3J0IF9DT05UQUNUIGZyb20gJy4vbW9kdWxlcy9jb250YWN0J1xyXG5pbXBvcnQgX1BBR0lOQVRPUiBmcm9tICcuL21vZHVsZXMvaGlzdG9yeS1wYWdpbmF0aW9uJ1xyXG5cclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAnc3RhcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhbGxvd2VkSGFzaGVzOiBbJ25ld3MnLCAnbWFudWFsJywgJ3NldHRpbmdzJywgJ2hpc3RvcnknLCAnY29udGFjdCcsICdzeW5jJywgJ2V4cG9ydCcsICdsb2dzJ10sXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkpIHRoaXMuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9vdHN0cmFwcGVkKSB7XHJcbiAgICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgX0hJU1RPUlkoKTtcclxuICAgICAgX1NFVFRJTkdTKCk7XHJcbiAgICAgIF9MT0dHSU5HKCk7XHJcbiAgICAgIF9TWU5DSU5HKCk7XHJcbiAgICAgIF9JTVBPUlQoKTtcclxuICAgICAgX0NPTlRBQ1QoKTtcclxuICAgICAgX1BBR0lOQVRPUigpO1xyXG4gICAgICB0aGlzLmluaXRNYWluTmF2KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0TWFpbk5hdigpIHtcclxuICAgIGNvbnN0IHRhYiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc9JylbMV07XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dlZEhhc2hlcy5pbmNsdWRlcyh0YWIpKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdi0nICsgdGFiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ldyBfTkFWKHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdicpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vbW9kdWxlcy90b2dnbGVyJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuXHJcbl9MMTBOKCk7XHJcblxyXG4vKiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJzaW9uLW51bWJlcicpLmlubmVyVGV4dCA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcbi8qIGVuZDogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5cclxuLyogY29uZmlndXJlIHN1Ym5hdnMgKi9cclxuY29uc3Qgc3VibmF2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Ym5hdicpO1xyXG5sZXQgbiA9IHN1Ym5hdnMubGVuZ3RoO1xyXG5cclxud2hpbGUobi0tKSBuZXcgX05BVihzdWJuYXZzW25dKTtcclxuLyogZW5kOiBjb25maWd1cmUgbmF2cyAqL1xyXG5cclxuLyogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG5sZXQgdG9nZ2xlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKSxcclxuICAgIHQgPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcclxuXHJcbndoaWxlKHQtLSkgbmV3IF9UT0dHTEVSKHRvZ2dsZUJ1dHRvbnNbdF0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdzZXRMb2dMaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0QWRkb25MaW5rcygpXHJcbiAgICAgICAgICAuc2V0TG9nTGluaygpO1xyXG4gICAgfSxcclxuICAgIHNldEFkZG9uTGlua3MoKSB7XHJcbiAgICAgIGxldCBhZGRvblVSTCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd1cmxfbW96X2FkZG9uJyksXHJcbiAgICAgICAgICBhZGRvbkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW96LWFkZG9uJyksXHJcbiAgICAgICAgICBhID0gYWRkb25MaW5rcy5sZW5ndGgsXHJcbiAgICAgICAgICBhTDtcclxuXHJcbiAgICAgIHdoaWxlIChhLS0pIHtcclxuICAgICAgICBhTCA9IGFkZG9uTGlua3NbYV07XHJcbiAgICAgICAgYUwuaHJlZiA9IGFkZG9uVVJMO1xyXG4gICAgICAgIGlmIChhTC5pZCA9PT0gJ21vei1hZGRvbi0tY29udGFjdCcpIGFMLmlubmVyVGV4dCA9IGFkZG9uVVJMO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMb2dMaW5rKCkge1xyXG4gICAgICBjb25zdCBsb2dMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1tYWlsJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsZXQgbCA9IGxvZ3MgPyBsb2dzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGhyZWYgPVxyXG4gICAgICAgICAgICAgICdtYWlsdG86dW5kZmx5YmlyQGdteC5kZT9zdWJqZWN0PVRleHRtYXJrZXInICtcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJyA6IEVycm9yIExvZ3MnKSArXHJcbiAgICAgICAgICAgICAgJyZib2R5PScrXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCctICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneW91cl9tc2cnKSArICcgLVxcblxcblxcbkxPR1M6XFxuXFxuJyksXHJcbiAgICAgICAgICAgIGxvZztcclxuXHJcbiAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgaHJlZiArPSBsb2dbMV0gKyAobG9nWzJdID8gJyAoJyArIGxvZ1syXSArICcpJyA6ICcnKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KChuZXcgRGF0ZShsb2dbMF0pLnRvVVRDU3RyaW5nKCkpICsgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dMaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ2FkZCcsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cmllcyc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2ZpbHRlcmVkOmhpc3RvcnknOiAncmVzZXQnLFxyXG4gICAgICAgICdpbXBvcnRlZDpoaXN0b3J5JzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnBhZ2UnOiAnZ290bycsXHJcbiAgICAgICAgICAnLnByZXYnOiAncHJldicsXHJcbiAgICAgICAgICAnLm5leHQnOiAnbmV4dCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBudW1iZXJQYWdlczogMSxcclxuICAgIG51bWJlckVudHJpZXM6IDAsXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZyb21TdG9yYWdlKCk7XHJcbiAgICB9LFxyXG4gICAgZ290byhlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdQYWdlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnKSAqIDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSBuZXdQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgbmV3UGFnZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXYoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAxKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIC0tdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMubnVtYmVyUGFnZXMpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgKyt0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCsrdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKC0tdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB0aGlzLnVwZGF0ZShPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmxlbmd0aCkpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUobCwgc2lsZW50KSB7XHJcbiAgICAgIHRoaXMubnVtYmVyRW50cmllcyA9IGw7XHJcbiAgICAgIHRoaXMubnVtYmVyUGFnZXMgPSBsID8gTWF0aC5jZWlsKGwgLyB0aGlzLnBlclBhZ2UpIDogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLm51bWJlclBhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQobCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgdGhpcy51cGRhdGUobCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3ItbGlzdCcpO1xyXG4gICAgICBjb25zdCBsID0gdGhpcy5udW1iZXJFbnRyaWVzO1xyXG4gICAgICBBcnJheS5mcm9tKHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UnKSkuZm9yRWFjaChsaSA9PiBsaS5yZW1vdmUoKSk7XHJcblxyXG4gICAgICBpZiAobCA8IHRoaXMucGVyUGFnZSArIDEpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICBjb25zdCByID0gNyAtIChwYWdlcyAtIDEgLSBwKTtcclxuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgbmV4dCA9IHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXTtcclxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgyLCBwIC0gNyk7XHJcbiAgICAgIGlmIChyID4gMCkgaSA9IE1hdGgubWF4KDIsIE1hdGgubWluKGksIGkgLSByKSk7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLm1pbihwYWdlcywgaSArIDE0KSArIDE7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCAxKTtcclxuICAgICAgZm9yICg7IGkgPCBqOyBpKyspIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIGkpO1xyXG4gICAgICBpZiAocGFnZXMgPiBqIC0gMSkgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgcGFnZXMpO1xyXG5cclxuICAgICAgdWwuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHQpO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZEJ1dHRvbihmcmFnLCBiKSB7XHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScsIGIpO1xyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYikpO1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgICBpZiAoYiA9PT0gdGhpcy5jdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKHApIHtcclxuICAgICAgdGhpcy5wZXJQYWdlID0gcDtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5udW1iZXJFbnRyaWVzLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnk6IHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgY3JlYXRlZChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdmaXJzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYXN0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2xhc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IChuZXcgRGF0ZShvYmplY3RbYl1bZmllbGRdKSkgLSAobmV3IERhdGUob2JqZWN0W2FdW2ZpZWxkXSkpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgYXoob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KTtcclxuICAgICAgfSxcclxuICAgICAgemEob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KS5yZXZlcnNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IGEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcbmltcG9ydCBfU09SVCBmcm9tICcuL2hpc3Rvcnktc29ydCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnb3BlbmVkOnRhYic6ICdpbml0JyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3JlbmRlcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzeW5jLWVudHJ5JzogJ3VuZG9TeW5jVG9nZ2xlJyxcclxuICAgICAgICAncGFnaW5hdGU6aGlzdG9yeSc6ICdwYWdpbmF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuYWN0aW9uLWJ1dHRvbic6ICdkZWxlZ2F0ZUJ1dHRvbkFjdGlvbicsXHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnLFxyXG4gICAgICAgICAgJy5uYW1lJzogJ29wZW4nLFxyXG4gICAgICAgICAgJy5lZGl0JzogJ2VkaXQnLFxyXG4gICAgICAgICAgJy52aWV3JzogJ3ZpZXcnLFxyXG4gICAgICAgICAgJyNzZWFyY2gtdG9nZ2xlJzogJ3RvZ2dsZVNlYXJjaCcsXHJcbiAgICAgICAgICAnI3JlbW92ZS1maWx0ZXInOiAncmVtb3ZlRmlsdGVyJyxcclxuICAgICAgICAgICcudGFnc19faXRlbSc6ICdmaWx0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY2hlY2ttYXJrLWFsbCc6ICdjaGVja21hcmtBbGwnLFxyXG4gICAgICAgICAgJyNzb3J0LWVudHJpZXMnOiAnc29ydCcsXHJcbiAgICAgICAgICAnI2ZpbHRlci1lbnRyaWVzJzogJ2ZpbHRlcicsXHJcbiAgICAgICAgICAnI2VudHJpZXMtcGVyLXBhZ2UnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgICAgICcjc2V0LXZpZXcnOiAnc2V0VmlldycsXHJcbiAgICAgICAgICAnI2FjdGlvbic6ICdvbkNoYW5nZUFjdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAnLnNlYXJjaC1lbnRyaWVzJzogJ3NlYXJjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG5cclxuICAgIG5hbWVzOiBbXSxcclxuICAgIGVudHJpZXM6IHt9LFxyXG4gICAgZW50cnlUbXBsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnktdGVtcGxhdGUnKSxcclxuICAgIGVudHJpZXNDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyksXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcbiAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgdmlld01vZGU6ICdsaXN0JyxcclxuICAgIHNlYXJjaFRlcm06ICcnLFxyXG4gICAgc2VhcmNoZWQ6IFtdLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmaWx0ZXJlZDogZmFsc2UsXHJcbiAgICBmaWx0ZXJPcHRpb25zU2V0OiBmYWxzZSxcclxuXHJcbiAgICBpbml0KHRhYikge1xyXG4gICAgICBpZiAodGFiICE9PSAnaGlzdG9yeScpIHJldHVybjtcclxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgWydkZWxldGUnXShuYW1lcykge1xyXG4gICAgICBsZXQgbXNnID0gJ2RlbF9jb25maXJtJztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lc1tsXV0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBtc2cgKz0gJ19sb2NrZWQnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobXNnKSk7XHJcbiAgICAgIGlmIChjb25maXJtZWQpIHRoaXMuZW1pdCgnZGVsZXRlOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgY2xlYW4obmFtZXMpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhbjplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnZG93bmxvYWRfb3B0aW9uJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICB0eXBlID0gc2V0dGluZ3NbMF07XHJcbiAgICAgICAgICBzcGVjID0gc2V0dGluZ3MubGVuZ3RoID09PSAyID8gc2V0dGluZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nKSB0aGlzLmV4cG9ydChuYW1lcyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ1RleHRtYXJrZXIgKCcgKyBuYW1lcy5qb2luKCdfJykgKyAnKS50eHQnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIHRleHQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4cG9ydChuYW1lcykge1xyXG4gICAgICBsZXQgYmFja3VwID0geyBoaXN0b3J5OiB7IGVudHJpZXM6IHt9IH0gfSxcclxuICAgICAgICAgIGVudHJpZXMgPSBiYWNrdXAuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICAgIGVudHJpZXNbbmFtZV0gPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2t1cCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShiYWNrdXApKTtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICAgJ1RleHRtYXJrZXItYmFja3VwLScgK1xyXG4gICAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICAgJy5qc29uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGJhY2t1cDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3luYyhuYW1lLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3N5bmM6ZW50cnknLCBuYW1lWzBdLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcbiAgICB2aXNpdChuYW1lcykge1xyXG4gICAgICB0aGlzLmdldFVSTHMobmFtZXMpLnRoZW4odXJscyA9PiB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIHVybHMsIG5hbWVzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdChlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9lZGl0JykpO1xyXG4gICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgP1xyXG4gICAgICAgICAgJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZTplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmlldyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3ZpZXc6ZW50cnknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICB0YWcobmFtZXMsIHRhZywgZm9yY2UpIHtcclxuICAgICAgaWYgKCF0YWcgJiYgIWZvcmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG8gPSB7IHN5bmM6IFtdLCBsb2NhbDogW10gfTtcclxuICAgICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcmlnRW50cmllc1tuYW1lXS5zeW5jZWQpIG8uc3luYy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Ugby5sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbWl0KCd0YWc6ZW50cmllcycsIG8sIHRhZyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFncyhuYW1lcykge1xyXG4gICAgICB0aGlzLnRhZyhuYW1lcywgJycsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NTZWxlY3Rpb24oKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVudHJ5LWNiOmNoZWNrZWQnKSxcclxuICAgICAgICAgIGkgPSBjaGVja2VkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmICghaSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgbGV0IGFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24nKS52YWx1ZSxcclxuICAgICAgICAgIG5hbWVzID0gW107XHJcblxyXG4gICAgICB3aGlsZShpLS0pIG5hbWVzLnB1c2goY2hlY2tlZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICd0YWcnKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRhZyhuYW1lcywgdmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BsaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lmaWNhdGlvbicpLnZhbHVlLnNwbGl0KCcgJyksXHJcbiAgICAgICAgICAgIHR5cGUgPSBzcGxpdFswXSxcclxuICAgICAgICAgICAgc3BlYyA9IHNwbGl0WzFdO1xyXG5cclxuICAgICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXJFbnRyaWVzKCkge1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmVudHJ5VG1wbCxcclxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuZW50cmllc0NvbnRhaW5lcixcclxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMsXHJcbiAgICAgICAgICBzZWFyY2hUZXJtID0gdGhpcy5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgc2VhcmNoVGVybUxlbmd0aCA9IHNlYXJjaFRlcm0gPyBzZWFyY2hUZXJtLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICBzZWFyY2hlZCA9ICEhc2VhcmNoVGVybSxcclxuICAgICAgICAgIHNlYXJjaGVkRnVsbFRleHQgPSB0aGlzLnNlYXJjaGVkRnVsbFRleHQsXHJcbiAgICAgICAgICBuYW1lcyA9IHNlYXJjaGVkID8gdGhpcy5zZWFyY2hlZCA6IHRoaXMubmFtZXMsXHJcbiAgICAgICAgICBsID0gc2VhcmNoZWQgPyBuYW1lcy5sZW5ndGggOiB0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBpID0gc2VhcmNoZWQgPyAwIDogbCAtIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGNsb25lLCBlbnRyeSwgbmFtZSwgbmFtZUZpZWxkLCBpbnB1dCwgbGFiZWwsIGluZm9CdXR0b24sIGRldGFpbHMsIHNlYXJjaFJlc3VsdHMsXHJcbiAgICAgICAgICBidXR0b25zLCBlZGl0LCB2aWV3LCB0YWdzLCBpbW11dCwgaW1tdXRFbCwgbG9ja2VkLCBsb2NrZWRFbCwgdGFnRWwsIGIsIGo7XHJcblxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJlZCkge1xyXG4gICAgICAgIG5hbWVzID0gbmFtZXMuZmlsdGVyKG4gPT4gISFlbnRyaWVzW25dKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IE1hdGgubWluKGwsIG5hbWVzLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghbCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICgoaSwgaikgPT4ge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHRhZ3MgPSBlbnRyeS50YWcgPyBlbnRyeS50YWcuc3BsaXQoJyAnKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGxvY2tlZCA9IGVudHJ5LmxvY2tlZDtcclxuICAgICAgICAgICAgaW1tdXQgPSBlbnRyeS5pbW11dDtcclxuICAgICAgICAgICAgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgIGNsb25lLmlkID0gJ2VudHJ5LScgKyBqO1xyXG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdO1xyXG4gICAgICAgICAgICBpbnB1dCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xyXG4gICAgICAgICAgICBsYWJlbCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsYWJlbCcpWzBdO1xyXG4gICAgICAgICAgICBkZXRhaWxzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlscycpWzBdO1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJlc3VsdHMnKVswXTtcclxuICAgICAgICAgICAgYnV0dG9ucyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1aWNrLWFjdGlvbicpO1xyXG4gICAgICAgICAgICBlZGl0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpWzBdO1xyXG4gICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICB0YWdFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhZ3MnKVswXTtcclxuICAgICAgICAgICAgbG9ja2VkRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2NrZWQnKVswXTtcclxuICAgICAgICAgICAgaW1tdXRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltbXV0JylbMF07XHJcbiAgICAgICAgICAgIGIgPSBidXR0b25zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKGItLSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1tiXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgZW50cnkudXJsKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdlbnRyeS1jYic7XHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gJ2VudHJ5LWNiLScgKyBqO1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB2aWV3LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VudHJ5LWNiLScgKyBqKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgICBsb2NrZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW1tdXQpIGltbXV0RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFncykge1xyXG4gICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdGFnRWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnKSk7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RpdGxlX2ZpbHRlcicpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0YWdFbC5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QgPyBlbnRyeS5sb3N0Lmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50cnkuc3luY2VkID09PSB1bmRlZmluZWQgfHwgZW50cnkuc3luY2VkKSB7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hlZEZ1bGxUZXh0KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZnVsbFRleHRTZWFyY2hSZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgIGlmIChmdWxsVGV4dFNlYXJjaFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCByID0gMCwgcmVzLCBtYXJrLCBwb3MsIG1hcmtUZXh0LCBtYXJrVGV4dEVsLCBoaWdobGlnaHQsIHQxLCB0MiwgdDM7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICg7IHIgPCBmdWxsVGV4dFNlYXJjaFJlc3VsdHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgcmVzID0gZnVsbFRleHRTZWFyY2hSZXN1bHRzW3JdO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrID0gZW50cnkubWFya3NbcmVzLm1hcmtdO1xyXG4gICAgICAgICAgICAgICAgICBwb3MgPSByZXMucG9zO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGV4dDtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdDEgPSBtYXJrVGV4dC5zdWJzdHJpbmcoTWF0aC5tYXgocG9zLTE2LCAwKSwgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgdDIgPSBtYXJrVGV4dC5zdWJzdHIocG9zLCBzZWFyY2hUZXJtTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgdDMgPSBtYXJrVGV4dC5zdWJzdHIocG9zK3NlYXJjaFRlcm1MZW5ndGgsIDE2KTtcclxuICAgICAgICAgICAgICAgICAgdDEgPSB0MSA/ICcuLi4gJyArIHQxIDogdDE7XHJcbiAgICAgICAgICAgICAgICAgIHQzID0gdDMgPyB0MyArICcgLi4uJyA6IHQzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHQuY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MikpO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQxKSk7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChtYXJrVGV4dEVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShpLCBsLWktMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhZGVyRmllbGRzKGwpIHtcclxuICAgICAgY29uc3Qgbm9FbnRyaWVzSGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKTtcclxuICAgICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XHJcbiAgICAgIGNvbnN0IHBwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtcGVyLXBhZ2UnKTtcclxuICAgICAgY29uc3QgY2hlY2thbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbC1jb250YWluZXInKTtcclxuICAgICAgY29uc3QgbWV0aF8wID0gIWwgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzEgPSBsID4gMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMiA9IGwgPiAyID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8zID0gbCA+IDEwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgICAgIG5vRW50cmllc0hpbnQuY2xhc3NMaXN0W21ldGhfMF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc2VhcmNoLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc29ydC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGZpbHRlci5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvdW50LmNsYXNzTGlzdFttZXRoXzNdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdmlldy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNoZWNrYWxsLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLWNvdW50JykuaW5uZXJUZXh0ID0gbDtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBwID0gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMDtcclxuICAgICAgICBwcFNlbGVjdC52YWx1ZSA9IHBwO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRGaWx0ZXJPcHRpb25zKCkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJPcHRpb25zU2V0KSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBjb25zdCBhbGxUYWdzID0gW107XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgdGFncztcclxuXHJcbiAgICAgIHNlbGVjdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgdGFncyA9IGVudHJpZXNbbmFtZV0udGFnO1xyXG4gICAgICAgIHRhZ3MgPSB0YWdzID8gdGFncy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICBpZiAoIWFsbFRhZ3MuaW5jbHVkZXModGFnKSkgYWxsVGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYWxsVGFncy5sZW5ndGggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJykpIHtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpLCB7IGRpc2FibGVkOiB0cnVlLCBpZDogJ2ZpbHRlci1vcHQtbm90YWcnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5hZGRGaWx0ZXJPcHQodGFnLCB0YWcpKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRGaWx0ZXJPcHQodGFnLCB0ZXh0LCBhdHRycykge1xyXG4gICAgICBpZiAodGhpcy50YWdzLmluY2x1ZGVzKHRhZykpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgIG9wdC52YWx1ZSA9IHRhZztcclxuICAgICAgb3B0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYXR0cnMpIG9wdC5zZXRBdHRyaWJ1dGUoYSwgYXR0cnNbYV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy50YWdzLmxlbmd0aCAmJiB0YWcpIHtcclxuICAgICAgICBjb25zdCBub3RhZ0ZpbHRlck9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJyk7XHJcbiAgICAgICAgaWYgKG5vdGFnRmlsdGVyT3B0KSBzZWxlY3QucmVtb3ZlQ2hpbGQobm90YWdGaWx0ZXJPcHQpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnKSB0aGlzLnRhZ3MucHVzaCh0YWcpO1xyXG4gICAgfSxcclxuICAgIGdldFRleHQobmFtZXMsIHNwZWMpIHtcclxuICAgICAgbGV0IGFsbF9tYXJrc19wbHVzX21ldGEgPSBzcGVjID09PSAnK21ldGEnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbG9zdCA9IHNwZWMgPT09ICcrbG9zdCcsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyA9IHNwZWMgPT09ICcrbm90ZXMnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX2xvc3QgPSBzcGVjID09PSAnbG9zdCcsXHJcbiAgICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnLCAyLCAzXSxcclxuXHJcbiAgICAgICAgICByZWplY3QgPSBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhzcGVjKSA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBrZXkgIT0gc3BlYztcclxuICAgICAgICAgICAgfSA6IHNwZWMgPT09ICdjJyA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICAgICAgICB9IDogbnVsbCxcclxuXHJcbiAgICAgICAgICBuZXdMaW5lID0gJ1xcclxcbicsXHJcbiAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgbm90ZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlJyksXHJcbiAgICAgICAgICB0ZXh0ID0gJycsXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBub3RlVGV4dCwgZW50cnksIG1hcmtzLCBtYXJrLCBsb3N0LCBuYW1lLCBtLCBuLCBqO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgICAgICAgIGxvc3QgPSBlbnRyeS5sb3N0O1xyXG4gICAgICAgICAgbSA9IG1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgIG4gPSBsb3N0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbF9tYXJrc19sb3N0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhIHx8IGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IG5hbWUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgICdVUkw6ICcgKyBlbnRyeS51cmwgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdwYWdlX3RpdGxlJykgKyAnOiAnICsgZW50cnkudGl0bGUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjcmVhdGVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbGFzdF9tb2RpZmllZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBtYXJrc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlamVjdCAmJiByZWplY3QobWFyay5rZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICctLS0nICsgbmV3TGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgJiYgbWFyay5ub3RlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZS50ZXh0IHx8IG1hcmsubm90ZTtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAgJyArIG5vdGUgKyAnOicgKyBuZXdMaW5lICsgJyAgJyArIG5vdGVUZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuICAnKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFsbF9tYXJrc19sb3N0IHx8IGFsbF9tYXJrc19wbHVzX2xvc3QpIHtcclxuICAgICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsb3N0X21hcmtzJykgKyAnOicgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBsb3N0W2pdO1xyXG5cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAndGV4dCcpIHJldHVybiB0aGlzLmdldFRleHQobmFtZXMsIHNwZWMpO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgZGF0YSA9ICcnLFxyXG4gICAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGRhdGEgKz0gZW50cmllc1tuYW1lc1tpXV1bdHlwZV0gKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFVSTHMobmFtZXMpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICB1cmxzID0gW10sXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgdXJscy5wdXNoKGVudHJpZXNbbmFtZXNbaV1dLnVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB1cmxzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRlcm0gPSBlbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBzZWFyY2hUeXBlID0gZWwuZ2V0QXR0cmlidXRlID8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA6ICcnO1xyXG4gICAgICBjb25zdCBjb3VudFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCBjbGFzc01ldGggPSB0ZXJtID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10b2dnbGUnKTtcclxuICAgICAgdGhpcy5zZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIGNvdW50U2VsZWN0LmNsYXNzTGlzdFtjbGFzc01ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdG9nZ2xlLmNsYXNzTGlzdFtjbGFzc01ldGhdKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKSB7XHJcbiAgICAgIHRlcm0gPSB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyB0ZXJtIDogdGhpcy5zZWFyY2hUZXJtO1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvdW50Jyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGVybTtcclxuICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQnKTtcclxuICAgICAgICBpZiAoc2VhcmNoVHlwZSA9PT0gJ2Z1bGwtdGV4dCcpIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hGdWxsVGV4dCh0ZXJtKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hCeU5hbWUodGVybSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoQ291bnQuaW5uZXJUZXh0ID0gdGhpcy5zZWFyY2hlZC5sZW5ndGggfHwgJyc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQnlOYW1lKHRlcm0pIHtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICBsZXQgbCA9IG5hbWVzLmxlbmd0aCwgaSA9IDAsIG5hbWU7XHJcblxyXG4gICAgICBmb3IoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRlcm0pICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlYXJjaEZ1bGxUZXh0KHRleHQpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGxldCBuYW1lLCBtYXJrcywgaSwgbWFya1RleHQsIHBvcywgZm91bmQ7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHMgPSB7fTtcclxuXHJcbiAgICAgIGZvciAobmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgbWFya3MgPSBlbnRyaWVzW25hbWVdLm1hcmtzO1xyXG4gICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBtYXJrVGV4dCA9IG1hcmtzW2ldLnRleHQ7XHJcbiAgICAgICAgICBwb3MgPSBtYXJrVGV4dC50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXh0KTtcclxuICAgICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVzdWx0c1tuYW1lXSA9IHJlc3VsdHNbbmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIHJlc3VsdHNbbmFtZV0ucHVzaCh7IG1hcms6IGksIHBvcyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1lbnRyaWVzLS1uYW1lJykudmFsdWUgPSAnJztcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZW50cmllcy0tZnVsbC10ZXh0JykudmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXJtKSB0aGlzLnNlYXJjaChudWxsLCB7IHZhbHVlOiAnJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvdW50UGVyUGFnZShlLCBlbCkge1xyXG4gICAgICBsZXQgcCA9IHRoaXMucGVyUGFnZSA9IGVsLnZhbHVlICogMTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JywgcCk7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHNldFZpZXcoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpO1xyXG4gICAgICBjb25zdCB2YWwgPSBlbC52YWx1ZTtcclxuICAgICAgaWYgKHZhbCA9PT0gJ2xpc3QnKSB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIGVsc2UgdGFibGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsZWQtbGlzdCcpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTp2aWV3LXNldHRpbmcnLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHNldHVwVmlldyh2aWV3KSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXQtdmlldycpLnZhbHVlID0gdmlldztcclxuICAgICAgdGhpcy5zZXRWaWV3KG51bGwsIHsgdmFsdWU6IHZpZXcgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLnZhbHVlID09PSAndGFnJykgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykuZm9jdXMoKSwgMCk7XHJcbiAgICB9LFxyXG4gICAgc29ydChlLCBlbCkge1xyXG4gICAgICBsZXQgc29ydGVkID0gdGhpcy5zb3J0ZWQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c29ydC1zZXR0aW5nJywgc29ydGVkKTtcclxuICAgICAgdGhpcy5zZXR1cFNvcnQoc29ydGVkKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTb3J0KHNvcnRlZCkge1xyXG4gICAgICBzb3J0ZWQgPSBzb3J0ZWQuc3BsaXQoJy0nKTtcclxuICAgICAgdGhpcy5uYW1lcyA9IF9TT1JULmJ5W3NvcnRlZFswXV1bc29ydGVkWzFdXSh0aGlzLm9yaWdFbnRyaWVzKTtcclxuICAgICAgdGhpcy5zb3J0U2VhcmNoUmVzdWx0cygpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBmaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZWwubm9kZU5hbWUgPT09ICdTUEFOJyA/IGVsLmZpcnN0Q2hpbGQuZGF0YSA6IGVsLnZhbHVlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgY29uc3QgZmlsdGVyZWRFbnRyaWVzID0ge307XHJcbiAgICAgIGxldCBlbnRyeSwgcngsIGMgPSAwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICByeCA9IG5ldyBSZWdFeHAoJ14nK2ZpbHRlcisnJHxeJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJyQnLCAnZycpO1xyXG4gICAgICAgIGlmICgoZmlsdGVyICYmIGVudHJ5LnRhZyAmJiBlbnRyeS50YWcuc2VhcmNoKHJ4KSAhPT0gLTEpIHx8ICghZW50cnkudGFnICYmIGZpbHRlciA9PSAnJykpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgYysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBmaWx0ZXJlZEVudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgYyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCB0aGlzLm5hbWVzLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgc29ydFNlYXJjaFJlc3VsdHMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWFyY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBhID0gbmFtZXMuaW5kZXhPZihhKTtcclxuICAgICAgICBiID0gbmFtZXMuaW5kZXhPZihiKTtcclxuICAgICAgICBpZiAoYSA9PSBiKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNoZWNrbWFya0FsbChlLCBlbCkge1xyXG4gICAgICBsZXQgZGlyZWN0bHkgPSB0eXBlb2YgZWwgPT09ICdib29sZWFuJyxcclxuICAgICAgICAgIGNoZWNrZWQgPSBkaXJlY3RseSA/IGVsIDogZWwuY2hlY2tlZCxcclxuICAgICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgICBpID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIGlucHV0c1tpXS5jaGVja2VkID0gY2hlY2tlZDtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCkge1xyXG4gICAgICBsZXQgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLFxyXG4gICAgICAgICAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZSA/IFtuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb1N5bmNUb2dnbGUobmFtZSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLS1zeW5jW2RhdGEtbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc29ydGVkIHx8IHRoaXMuc29ydGVkLFxyXG4gICAgICAgICAgICB2aWV3ID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnZpZXcgfHwgdGhpcy52aWV3TW9kZSxcclxuICAgICAgICAgICAgbDtcclxuICAgICAgICB0aGlzLnNvcnRlZCA9IHNvcnRlZDtcclxuICAgICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBWaWV3KHZpZXcpO1xyXG4gICAgICAgIGwgPSB0aGlzLm5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFNlYXJjaCgpLnRvZ2dsZUhlYWRlckZpZWxkcyhsKS50aGVuKCgpID0+IHRoaXMucmVuZGVyRW50cmllcygpLnNldEZpbHRlck9wdGlvbnMoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhZ2luYXRlKHBhZ2UpIHtcclxuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnlbZGF0YS1uYW1lPVwiJyArIGVudHJ5Lm5hbWUgKyAnXCJdJyk7XHJcblxyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gZW50cnkuZmlyc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgLy9lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydCcpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAnc3luY2VkOmVudHJ5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5pbXBvcnQtYnV0dG9uJzogJ3RyaWdnZXJGaWxlSW5wdXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWZpbGUnOiAnaGFuZGxlRmlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJy5leHBvcnQtYnV0dG9uJzogJ3VwZGF0ZUV4cG9ydE5hbWUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUV4cG9ydExpbmtzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGltcG9ydDogZnVuY3Rpb24oc3RvcmVTdHJpbmcsIHR5cGUpIHtcclxuICAgICAgdmFyIHBhcnNlZFN0cmluZztcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyc2VkU3RyaW5nID0gSlNPTi5wYXJzZShzdG9yZVN0cmluZyk7XHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3BhcnNlJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyc2VkU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbXBvcnQ6c3RvcmFnZScsIHBhcnNlZFN0cmluZywgdHlwZSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5RmFpbHVyZSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHJpZ2dlckZpbGVJbnB1dDogZnVuY3Rpb24oZSwgZWwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC0tJyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykpLmNsaWNrKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRmlsZShlLCBlbCkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKSxcclxuICAgICAgICAgIGZpbGUgPSBlbC5maWxlc1swXSxcclxuICAgICAgICAgIHNpemUgPSBmaWxlLnNpemUgLyAxMDAwMDAwLFxyXG4gICAgICAgICAgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksXHJcbiAgICAgICAgICBtb2QgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHNpemUgPiA1MClcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemUnKSk7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N5bmMnICYmIHNpemUgPiAwLjA5OSlcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemVfc3luYycpKTtcclxuXHJcbiAgICAgIGlmIChmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKSAhPT0gJ2pzb24nKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfZm9ybWF0JykpO1xyXG5cclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG1vZC5pbXBvcnQoZS50YXJnZXQucmVzdWx0LCB0eXBlKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KShmaWxlKTtcclxuXHJcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgfSxcclxuICAgIGRpc3BsYXlGYWlsdXJlKHJlYXNvbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWVycm9yJykuaW5uZXJUZXh0ID0gcmVhc29uO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVFeHBvcnRMaW5rcygpIHtcclxuICAgICAgY29uc3QgbG9jYWxEYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtbG9jYWwnKTtcclxuICAgICAgY29uc3Qgc3luY2VkRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LXN5bmNlZCcpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbG9jYWxfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbG9jYWxEYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ3N5bmNlZF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBzeW5jZWREYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFeHBvcnROYW1lKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgJ1RleHRtYXJrZXItZGF0YS0nICtcclxuICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICsgJy0nICtcclxuICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgJy5qc29uJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ2xvZydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcjY2xlYXItbG9ncyc6ICdjbGVhcidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5sb2coKTtcclxuICAgIH0sXHJcbiAgICBsb2coKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvZ3MnKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICAgIGxvZ3MgPSBsb2dzIHx8IFtdO1xyXG4gICAgICAgIGxldCB0YWJsZUJvZHkgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdLFxyXG4gICAgICAgICAgICBsID0gbG9ncy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICAgIHRyLCB0ZF9kYXRlLCB0ZF9tc2csIG5vZGVfZGF0ZSwgbm9kZV9tc2csIGxvZywgdGltZSwgbXNnLCByZWFzb247XHJcblxyXG4gICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbG9ncycpO1xyXG4gICAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICAgIG1zZyA9IGxvZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdudW1iZXInKSBtc2cgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShfTE9HX0tFWVMuZ2V0S2V5QnlWYWx1ZShsb2dbMV0pKTtcclxuICAgICAgICAgICAgLy8nbnUnLHt5ZWFyOidudW1lcmljJyxtb250aDonMi1kaWdpdCcsZGF5OicyLWRpZ2l0Jyxob3VyOidudW1lcmljJyxzZWNvbmQ6J251bWVyaWMnLG1pbnV0ZTonbnVtZXJpYyd9XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZygobmV3IERhdGUobG9nWzBdKSkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgdGRfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIHRkX21zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIG5vZGVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpbWUpO1xyXG4gICAgICAgICAgICBub2RlX21zZyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1zZyk7XHJcblxyXG4gICAgICAgICAgICB0ZF9kYXRlLmFwcGVuZENoaWxkKG5vZGVfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChub2RlX21zZyk7XHJcbiAgICAgICAgICAgIGlmIChsb2dbMl0pIHtcclxuICAgICAgICAgICAgICByZWFzb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAvL3JlYXNvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsb2dbMl0pKTtcclxuICAgICAgICAgICAgICByZWFzb24uaW5uZXJUZXh0ID0gbG9nWzJdO1xyXG4gICAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX2RhdGUpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9tc2cpO1xyXG4gICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlQm9keS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChmcmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdub2xvZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFyOmxvZ3MnKTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUktFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleSwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcblxyXG4gICAgdGhpcy5zdHlsZXMgPSB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogY3VzdG9tQmdDb2xvcixcclxuICAgICAgJ2NvbG9yJzogdW5kZWZpbmVkLFxyXG4gICAgICAnYm9yZGVyLWJvdHRvbSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC13ZWlnaHQnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXN0eWxlJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1kZWNvcmF0aW9uJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1zaGFkb3cnOiB1bmRlZmluZWRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaGFkb3cgPSB7XHJcbiAgICAgIHg6ICcxcHgnLFxyXG4gICAgICB5OiAnMXB4JyxcclxuICAgICAgYmx1cjogJzFweCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmluamVjdCgpLnByZXZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ21hcmtlcnMnKS50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSBtYXJrZXJzW3RoaXMua2V5XTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZSA9IG1hcmtlciA/IG1hcmtlci5zdHlsZSA6IG51bGw7XHJcblxyXG4gICAgICB0aGlzLmF1dG9ub3RlID0gbWFya2VyICYmIG1hcmtlci5hdXRvbm90ZSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghZXhpc3RpbmdTdHlsZSkgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc3R5bGUgPSBleGlzdGluZ1N0eWxlO1xyXG5cclxuICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgIGkgPSBzdHlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgc3R5bGUsIHN0eWxlU3BsaXQsIHRleHRTaGFkb3c7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZXNbaV07XHJcbiAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICBzdHlsZVNwbGl0ID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgIHRoaXMuc3R5bGVzW3N0eWxlU3BsaXRbMF1dID0gc3R5bGVTcGxpdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGV4dFNoYWRvdyA9IHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddKSAmJiB0ZXh0U2hhZG93ICE9PSAnbm9uZScpIHtcclxuICAgICAgICBsZXQgc2hhZG93U3BsaXQgPSB0ZXh0U2hhZG93LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueCA9IHNoYWRvd1NwbGl0WzBdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnkgPSBzaGFkb3dTcGxpdFsxXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5ibHVyID0gc2hhZG93U3BsaXRbMl07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuY29sb3IgPSBzaGFkb3dTcGxpdFszXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGluamVjdCgpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIHN0eWxlcyA9IHRoaXMuc3R5bGVzLFxyXG4gICAgICAgIGJnSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3InKSxcclxuICAgICAgICBjb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3InKSxcclxuICAgICAgICBib3JkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3InKSxcclxuICAgICAgICBhdXRvbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJyksXHJcbiAgICAgICAgYmcgPSBzdHlsZXNbJ2JhY2tncm91bmQtY29sb3InXSxcclxuICAgICAgICBjb2xvciA9IHN0eWxlc1snY29sb3InXSxcclxuICAgICAgICBib3JkZXIgPSBzdHlsZXNbJ2JvcmRlci1ib3R0b20nXSxcclxuICAgICAgICBhdXRvbm90ZUNvbG9yID0gdGhpcy5hdXRvbm90ZSB8fCAnJyxcclxuICAgICAgICBzaGFkb3csIHNoYWRvd1NlbGVjdCwgaTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA9IHRoaXMuYXV0b25vdGU7XHJcbiAgICBhdXRvbm90ZUlucHV0LnZhbHVlID0gYXV0b25vdGVDb2xvciB8fCAneWVsbG93JztcclxuICAgIGF1dG9ub3RlSW5wdXQuZGlzYWJsZWQgPSAhYXV0b25vdGVDb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJnO1xyXG4gICAgYmdJbnB1dC52YWx1ZSA9IGJnIHx8ICcjZmZmZmZmJztcclxuICAgIGJnSW5wdXQuZGlzYWJsZWQgPSAhYmc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWNvbG9yO1xyXG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yIHx8ICcjMDAwMDAwJztcclxuICAgIGNvbG9ySW5wdXQuZGlzYWJsZWQgPSAhY29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYm9yZGVyO1xyXG4gICAgYm9yZGVySW5wdXQudmFsdWUgPSBib3JkZXIgfHwgJzFweCBzb2xpZCAjZmYwMDAwJztcclxuICAgIGJvcmRlcklucHV0LmRpc2FibGVkID0gIWJvcmRlcjtcclxuXHJcbiAgICBbJ2ZvbnQtc2l6ZScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ3RleHQtZGVjb3JhdGlvbiddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb3ApLnZhbHVlID0gc3R5bGVzW3Byb3BdIHx8ICdkZWZhdWx0JztcclxuICAgIH0pO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3cnKTtcclxuICAgIHNoYWRvdyA9IHN0eWxlc1sndGV4dC1zaGFkb3cnXTtcclxuICAgIGkgPSAhc2hhZG93ID8gMCA6IHNoYWRvdyA9PT0gJ25vbmUnID8gMiA6IDE7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgc2hhZG93U2VsZWN0LmNoaWxkcmVuW2ldLmNsaWNrKCk7XHJcblxyXG4gICAgWyd4JywgJ3knLCAnYmx1cicsICdjb2xvciddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdy0nICsgcHJvcCkudmFsdWUgPSBtYXJrZXIuc2hhZG93W3Byb3BdLnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHByZXZpZXcoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpLnN0eWxlID0gdGhpcy5zdHlsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKGVsKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGVsLmNsYXNzTGlzdCxcclxuICAgICAgICBwcm9wID0gZWwubmFtZSxcclxuICAgICAgICB2YWw7XHJcblxyXG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2Nzcy1jb2xvcicpKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHByb3AgPT09ICdib3JkZXItYm90dG9tJyA/ICcxcHggc29saWQgJyArIHZhbCA6IHZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93JykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgICBjYXNlICdub25lJzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9ICdub25lJzsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkZWZhdWx0JzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHVuZGVmaW5lZDsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzaGFkb3cnOiBtYXJrZXIuc2V0U2hhZG93KCk7IGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXZhbHVlJykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctcHgtdmFsdWUnKSlcclxuICAgICAgICAgIHZhbCArPSAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRvd1twcm9wXSA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldFNoYWRvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wID09PSAnYm9yZGVyLWJvdHRvbScpIHtcclxuICAgICAgdmFsID0gJzFweCBzb2xpZCAnICsgZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3R5bGUoKS5wcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGlzVmFsaWQocHJvcCwgdmFsKSB7XHJcbiAgICBsZXQgdmFsaWQ7XHJcblxyXG4gICAgc3dpdGNoKHByb3ApIHtcclxuICAgICAgY2FzZSAnYmFja2dyb3VuZC1jb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvcmRlci1ib3R0b20nOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6IHZhbGlkID0gL15bMC05XXsxLDJ9cHgkLy50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LWZhbWlseSc6IHZhbGlkID0gL15bYS16LFxccy1dezUsNDB9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtd2VpZ2h0JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zdHlsZSc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtZGVjb3JhdGlvbic6IHZhbGlkID0gL15bYS16LV17NywxMn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1zaGFkb3cnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd4JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JsdXInOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcbiAgc2V0U2hhZG93KCkge1xyXG4gICAgdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB0aGlzLnNoYWRvdy54ICsgJyAnICsgdGhpcy5zaGFkb3cueSArICcgJyArIHRoaXMuc2hhZG93LmJsdXIgKyAnICcgKyB0aGlzLnNoYWRvdy5jb2xvcjtcclxuICB9XHJcbiAgc2V0U3R5bGUoKSB7XHJcbiAgICBsZXQgc3R5bGUgPSAnJywgdmFsO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zdHlsZXMpIHtcclxuICAgICAgdmFsID0gdGhpcy5zdHlsZXNbaV07XHJcbiAgICAgIGlmICh2YWwpIHN0eWxlICs9IGkgKyAnOicgKyB2YWwgKyAnOyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbCxcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ2xpJzogJ3RvZ2dsZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBwYWdlTmF2OiBudWxsLFxyXG4gICAgY3VycmVudDogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5wYWdlTmF2ID0gZWwuaGFzQXR0cmlidXRlKCdkYXRhLXBhZ2UtbmF2Jyk7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50ID0gZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF07XHJcbiAgICAgIHRoaXMub3BlbihjdXJyZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykgfHwgdGhpcy5jdXJyZW50ID09IGVsKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50KSB0aGlzLmNsb3NlKHRoaXMuY3VycmVudCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oZWwpO1xyXG4gICAgfSxcclxuICAgIG9wZW4oZWwpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbmVkOnRhYicsIHRhcmdldElkKTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gZWw7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VOYXYpIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9ICdUZXh0bWFya2VyIC0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHRhcmdldElkKTtcclxuICAgIH0sXHJcbiAgICBjbG9zZShlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUktFUiBmcm9tICcuL21hcmtlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJzogJ3Nob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcycsXHJcbiAgICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICd1cGRhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jc3MnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAgICAgJyNjdXN0b21pemVkLWtleSc6ICd1cGRhdGVNYXJrZXInLFxyXG4gICAgICAgICAgJyNhZGQta2V5JzogJ2FkZE1hcmtlcicsXHJcbiAgICAgICAgICAnI3JlbW92ZS1rZXknOiAncmVtb3ZlTWFya2VyJyxcclxuICAgICAgICAgICcubWFyay1vcHQnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICAgICAnLnNjLWNiJzogJ3RvZ2dsZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2hvcnRjdXQtc2VsZWN0JzogJ2NoYW5nZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2F2ZS1vcHQnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICAgICAnLm5hbWluZy1vcHQnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgICAgICcjbm90ZXMtbmV3JzogJ3RvZ2dsZVNhdmVOb3RlT3B0JyxcclxuICAgICAgICAgICcuY3VzdG9taXplLXF1aWNrYnV0dG9ucyc6ICdjaGFuZ2VRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmRvd25sb2FkLXF1aWNrYnV0dG9uLW9wdCc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmN0bS1jYic6ICd0b2dnbGVDdG0nLFxyXG4gICAgICAgICAgJy5ub3Rlcy1jYic6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgICAnLm1pc2MtY2InOiAndG9nZ2xlTWlzYycsXHJcbiAgICAgICAgICAnLnRiYnBvd2VyLW9wdCc6ICd0b2dnbGVUQkJQb3dlck9wdCcsXHJcbiAgICAgICAgICAnLnRtdWlwb3MnOiAnY2hhbmdlVG11aVBvc2l0aW9uT3B0JyxcclxuICAgICAgICAgICcjcHJpdmF0ZS1zYXZlJzogJ3RvZ2dsZVByaXZTYXZlJyxcclxuICAgICAgICAgICcjYXV0by1ub3RlJzogJ3RvZ2dsZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaW1tdXQnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAgICAgJyNkcm9wLWxvc3Nlcyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgICAgICcjYXV0b25vdGUtY29sb3InOiAnY2hhbmdlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpZ25vcmUtaGFzaCc6ICdjaGFuZ2VIYXNoT3B0JyxcclxuICAgICAgICAgICcjYWRkb24tYXV0b2NzJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcbiAgICAgICAgICAnI2FkZG9uLWlmcmFtZXMnOiAndG9nZ2xlSUZyYW1lT3B0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcjY3VzdG9tLXNlYXJjaCc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAgICAgJy5jdXN0b20tc2VhcmNoLWlucHV0JzogJ2hpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGxvd2VkS2V5czogJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG4gbyBwIHEgciBzIHQgdSB2IHggeSB6IDAgMSA0IDUgNiA3IDggOSBlbnRlciAtICsnLnNwbGl0KCcgJyksXHJcbiAgICBhbGxvd2VkU2hvcnRjdXRzOiBbJycsICdjdHJsS2V5JywgJ3NoaWZ0S2V5JywgJ2FsdEtleScsICdjdHJsS2V5LXNoaWZ0S2V5JywgJ2N0cmxLZXktYWx0S2V5JywgJ3NoaWZ0S2V5LWFsdEtleScsICdtZXRhS2V5JywgJ21ldGFLZXktc2hpZnRLZXknLCAnbWV0YUtleS1hbHRLZXknXSxcclxuICAgIGFsbG93ZWRRdWlja2J1dHRvbk9wdHM6IFsndGl0bGUnLCAndXJsJywgJ3RleHQnLCAndGV4dCArbWV0YScsICd0ZXh0ICtub3RlcycsICd0ZXh0ICtsb3N0JywgJ3RleHQgbScsICd0ZXh0IDInLCAndGV4dCAzJywgJ3RleHQgYycsICd0ZXh0IGxvc3QnXSxcclxuICAgIG1hcmtlcktleXM6IFsnbScsICcyJywgJzMnXSxcclxuICAgIGN1c3RvbU1hcmtlcktleXM6IFtdLFxyXG4gICAgbWFya2VyOiBudWxsLFxyXG4gICAgY3VzdG9tU2VhcmNoOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH0sXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycyxcclxuICAgICAgICAgICAgbWFya2VyS2V5cyA9IHRoaXMubWFya2VyS2V5cyxcclxuICAgICAgICAgICAgY3VzdG9tTWFya2VyS2V5cyA9IHRoaXMuY3VzdG9tTWFya2VyS2V5cyxcclxuICAgICAgICAgICAgaSwga2V5O1xyXG5cclxuICAgICAgICBmb3IgKGtleSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICBpID0ga2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICBpZiAoIW1hcmtlcktleXMuaW5jbHVkZXMoaSkgJiYgIWN1c3RvbU1hcmtlcktleXMuaW5jbHVkZXMoaSkpXHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTWFya2VyS2V5cy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zKClcclxuICAgICAgICAgICAgLnVwZGF0ZU1hcmtlcih0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJylcclxuICAgICAgICAgICAgLmluamVjdFNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20ta2V5JykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbicpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzID0gW107XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKS5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlTWFya2VyKGUsIGVsLCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbCA/IGVsLnZhbHVlIDogZSA/IGUgOiB0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJztcclxuXHJcbiAgICAgIHRoaXMubWFya2VyID0gbmV3IF9NQVJLRVIoa2V5LCBjdXN0b21CZ0NvbG9yKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgICAgIGxldCBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuXHJcbiAgICAgICAgICBhbGxvd2VkS2V5cyA9IHRoaXMuYWxsb3dlZEtleXMsXHJcbiAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG5cclxuICAgICAgICAgIGEgPSBhbGxvd2VkS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBjID0gY3VzdG9tTWFya2VyS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuXHJcbiAgICAgICAgICBmcmFnbWVudDEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcblxyXG4gICAgICAgICAgb3B0aW9uLCBpY29uLCB2YWwsIFZhbDtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gY3VzdG9tTWFya2VyS2V5c1tpXTtcclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBWYWwgPSBWYWwgPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBWYWw7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQxLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcblxyXG4gICAgICAgIGZyYWdtZW50My5hcHBlbmRDaGlsZChvcHRpb24uY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50Mi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgICAgaWNvbi5pZCA9ICdjdXN0b20ta2V5LScgKyB2YWw7XHJcbiAgICAgICAgaWNvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDEpO1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChmcmFnbWVudDIpO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQzKTtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBhbGxvd2VkS2V5c1tpXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyh2YWwpKVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG5cclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFkZEtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDQpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgICAgbGV0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cyxcclxuICAgICAgICAgIGksIHNjQ2hlY2tib3gsIHNjU2VsZWN0LCBjbUNoZWNrYm94LCBzYztcclxuXHJcbiAgICAgIGZvciAoaSBpbiBzaG9ydGN1dHMpIHtcclxuICAgICAgICBzYyA9IHNob3J0Y3V0c1tpXTtcclxuICAgICAgICBzY0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjLScgKyBpKTtcclxuICAgICAgICBzY1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC1zZWxlY3QtJyArIGkpO1xyXG4gICAgICAgIGNtQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY20tJyArIGkpO1xyXG5cclxuICAgICAgICBpZiAoc2NDaGVja2JveCkgc2NDaGVja2JveC5jaGVja2VkID0gc2NbMV07XHJcbiAgICAgICAgaWYgKHNjU2VsZWN0KSBzY1NlbGVjdC52YWx1ZSA9IHNjWzBdO1xyXG4gICAgICAgIGlmIChjbUNoZWNrYm94KSBjbUNoZWNrYm94LmNoZWNrZWQgPSBzY1syXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzLmhpc3RvcnksXHJcbiAgICAgICAgICBzYXZlT3B0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzYXZlLW9wdCcpO1xyXG5cclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncy5hdXRvc2F2ZSkgc2F2ZU9wdHNbMF0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGVsc2Ugc2F2ZU9wdHNbMV0uY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS0nICsgaGlzdG9yeVNldHRpbmdzLm5hbWluZykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcml2YXRlLXNhdmUnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVJblByaXY7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbW11dCcpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuaW1tdXQ7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wLWxvc3NlcycpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuZHJvcExvc3NlcztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLW5ldycpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3Muc2F2ZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZ25vcmUtaGFzaCcpLmNoZWNrZWQgPSAhaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2g7XHJcblxyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzLmRvd25sb2FkID09PSAnanNvbicpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWQtanNvbicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC10ZXh0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrYnV0dG9uLWRvd25sb2FkLXNlbGVjdCcpLnZhbHVlID0gaGlzdG9yeVNldHRpbmdzLmRvd25sb2FkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbWlzY1NldHRpbmdzID0gc2V0dGluZ3MubWlzYztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLW1ldGhvZC0tJyArIG1pc2NTZXR0aW5ncy5tYXJrbWV0aG9kKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2MtYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmJtaWNvbjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZWljb24nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVpY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3Rlb25jbGljaycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZW9uY2xpY2s7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGV0cmFuc3AnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGV0cmFuc3A7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVwbGFpbnZpZXcnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1yZXN0b3JhdGlvbi1mYWlsdXJlJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5mYWlsdXJlTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXJlc3RvcmF0aW9uLXN1Y2Nlc3MnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnN1Y2Nlc3NOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcGJtJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5wYm1Ob3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtZXJyb3InKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmVycm9yTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpcC1ub3RlJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy52aXBOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzBdIDogdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzFdIDogJyc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ub3RlaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ibWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG5cclxuICAgICAgaWYgKG1pc2NTZXR0aW5ncy50YmJwb3dlcikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YmJwb3dlci1vbicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YmJwb3dlci1vZmYnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZG9uLWF1dG9jcycpLmNoZWNrZWQgPSBzZXR0aW5ncy5hZGRvbi5hdXRvY3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRvbi1pZnJhbWVzJykuY2hlY2tlZCA9IHNldHRpbmdzLmFkZG9uLmlmcmFtZXM7XHJcbiAgICB9LFxyXG4gICAgc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU3R5bGUoZSwgZWwpIHtcclxuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5tYXJrZXIudXBkYXRlKGVsKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnN0eWxlLXNldHRpbmcnLCBtYXJrZXIua2V5LCBtYXJrZXIuc3R5bGUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLmNoZWNrZWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b25vdGUtY29sb3InKS52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLW5vdGUnKS5jaGVja2VkID8gZWwudmFsdWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsIHRoaXMubWFya2VyLmtleSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VIYXNoT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmhhc2gtc2V0dGluZycsICFlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVJbW11dE9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTppbW11dC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRHJvcExvc3Nlc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVBdXRvY3NPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVJRnJhbWVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aWZyYW1lLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBhZGRNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdLFxyXG4gICAgICAgICAgY2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgYmdDb2xvciA9IHRoaXMuZ2V0UmFuZG9tTGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgcmVtb3ZlS2V5U2VsZWN0LmNoaWxkcmVuLmxlbmd0aCA+PSAxMiB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgIGNsb25lLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIGtleTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgIGljb24uaW5uZXJUZXh0ID0ga2V5ID09PSAnZW50ZXInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDoga2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcihrZXksIG51bGwsIGJnQ29sb3IpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6Y3VzdG9tLW1hcmtlcicsIGtleSwgJ2JhY2tncm91bmQtY29sb3I6JyArIGJnQ29sb3IgKyAnOycpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIGFkZEtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICBrZXlTZWxlY3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIGtleSlbMF0ucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5LScgKyBrZXkpLnJlbW92ZSgpO1xyXG4gICAgICBrZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcignbScpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsIGtleSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTWFya01ldGhvZChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2hvcnRjdXQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRTaG9ydGN1dHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUN0bShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpjdG0tc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNhdmVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJywgISFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUHJpdlNhdmUoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cHJpdi1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTmFtaW5nT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNhdmVOb3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5hbGxvd2VkUXVpY2tidXR0b25PcHRzLmluY2x1ZGVzKGVsLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hRdWlja2J1dHRvbk9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGUgPT09ICdqc29uJyA/IHR5cGUgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLCBlbC5uYW1lLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTWlzYyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUQkJQb3dlck9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSAhIShlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSoxKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVG11aVBvc2l0aW9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RtdWlwb3MnKSkuZm9yRWFjaChzZWxlY3QgPT4gc2VsZWN0LnZhbHVlID0gZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUN1c3RvbVNlYXJjaChlLCBlbCkge1xyXG4gICAgICB0aGlzLmhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpO1xyXG4gICAgICBjb25zdCBpbnAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0Jyk7XHJcbiAgICAgIGNvbnN0IGlucDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJyk7XHJcbiAgICAgIGNvbnN0IHBhcnQxID0gaW5wMS52YWx1ZTtcclxuICAgICAgY29uc3QgcGFydDIgPSBpbnAyLnZhbHVlO1xyXG4gICAgICBpZiAoIXBhcnQxICYmICFwYXJ0Mikge1xyXG4gICAgICAgIGlucDEudmFsdWUgPSB0aGlzLmN1c3RvbVNlYXJjaDtcclxuICAgICAgICBpbnAyLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIFtwYXJ0MSwgcGFydDJdKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJhbmRvbUxpZ2h0Q29sb3IoKSB7XHJcbiAgICAgIHJldHVybiAnIycgKyBNYXRoLmZsb29yKCgwLjggKyBNYXRoLnJhbmRvbSgpICogMC4xNzUpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdmYWlsZWQ6dG9nZ2xlLXN5bmMnOiAndW5kbydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tc2V0dGluZ3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1oaXN0b3J5JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1wYWdlbm90ZXMnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9wYWdlbm90ZXMgPT09ICdzeW5jJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzeW5jJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVuZG8oZmllbGQpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS0nICsgZmllbGQpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UT0dHTEVSIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZSwgZmFsc2UpO1xyXG4gIH1cclxuICB0b2dnbGUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBsZXQgZGF0YVRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgIHRhcmdldHMgPSBkYXRhVGFyZ2V0ID8gZGF0YVRhcmdldC5zcGxpdCgnICcpIDogbnVsbCxcclxuICAgICAgICBkYXRhVG9nZ2xlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJyksXHJcbiAgICAgICAgcm9sZXMgPSBkYXRhVG9nZ2xlID8gZGF0YVRvZ2dsZS5zcGxpdCgnICcpIDogbnVsbDtcclxuXHJcbiAgICBpZiAocm9sZXMpIHtcclxuICAgICAgcm9sZXMuZm9yRWFjaCgocm9sZSwgaSkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1tpXSkuY2xhc3NMaXN0W3JvbGVdKCdvcGVuJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRzWzBdKS5kaXNhYmxlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYWRkb24tcGFnZScsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmlmcmFtZS1zZXR0aW5nJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnLFxyXG4gICAgICAnb3BlbjplbnRyaWVzJyxcclxuICAgICAgJ3JlbmFtZTplbnRyeScsXHJcbiAgICAgICd2aWV3OmVudHJ5JyxcclxuICAgICAgJ3N5bmM6ZW50cnknLFxyXG4gICAgICAnc3luYzpoaXN0b3J5JyxcclxuICAgICAgJ3N5bmM6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdjbGVhcjpsb2dzJyxcclxuICAgICAgJ3RhZzplbnRyaWVzJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcbiAganNfaW5qZWN0aW9uX2ZhaWx1cmU6IDM3LFxyXG4gIGNzc19pbmplY3Rpb25fZmFpbHVyZTogMzgsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtjb25zb2xlLmxvZygncGFzczonLCByZXEuZXYpO1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==